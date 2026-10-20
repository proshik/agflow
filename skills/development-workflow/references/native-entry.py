#!/usr/bin/env python3
"""Public Guild CLI client; no scheduler, source hasher or review launcher."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import subprocess
import sys
import time
import uuid

REQUIRED = {"start", "status", "show", "checkpoint", "review", "retry", "cancel"}


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")
    temporary.replace(path)


def call(guild, words, payload=None, record=None):
    argv = [guild, "workflow", *words, "--json"]
    if payload is not None:
        argv += ["--from-file", str(payload)]
    result = subprocess.run(argv, capture_output=True, text=True, timeout=30)
    if record:
        save(record, {"argv": argv, "exit": result.returncode,
                      "stdout": result.stdout, "stderr": result.stderr})
    if result.returncode:
        raise RuntimeError(result.stderr or result.stdout or "Guild request failed")
    envelope = json.loads(result.stdout)
    if not isinstance(envelope, dict) or not isinstance(envelope.get("reply"), dict) or "kind" not in envelope["reply"]:
        raise RuntimeError("Malformed owning-host reply; capability/operation outcome is unknown")
    reply = envelope["reply"]
    if reply["kind"] == "gap":
        raise RuntimeError(reply["message"])
    return reply


def probe(guild, receipt=None):
    retained = receipt is not None and any((receipt / name).exists() for name in ("start-request.json", "start-reply.json", "run.json"))
    session, socket = os.environ.get("GUILD_SESSION"), os.environ.get("GUILD_SOCKET")
    if not session and not socket:
        if retained:
            raise RuntimeError("Native intent retained; missing host is not portable fallback")
        return {"mode": "portable", "reason": "No initiating Guild host"}
    if not session or not socket:
        raise RuntimeError("Incomplete initiating Guild socket/session identity")
    uuid.UUID(session)
    try:
        reply = call(guild, ["capabilities"])
    except FileNotFoundError:
        if retained:
            raise RuntimeError("Native intent retained; public CLI is unavailable")
        return {"mode": "portable", "reason": "Public Guild CLI is absent"}
    if (reply.get("kind") != "capabilities" or type(reply.get("version")) is not int
            or not isinstance(reply.get("operations"), list)
            or any(not isinstance(op, str) for op in reply["operations"])
            or any(type(reply.get(feature, False)) is not bool
                   for feature in ("entry_before_design", "finalize_checks"))):
        raise RuntimeError("Malformed workflow capability reply; host support is unknown")
    if (reply["version"] == 1 and reply.get("entry_before_design") is True
            and reply.get("finalize_checks") is True and REQUIRED <= set(reply["operations"])):
        return {"mode": "native", "capabilities": reply}
    if retained:
        raise RuntimeError("Native intent retained; host capabilities changed, no portable replay")
    return {"mode": "portable", "reason": "Host positively lacks required native-entry/final-criteria capabilities"}


def receipt_folder(receipt, target):
    target = Path(target).resolve(strict=True)
    folder = receipt.resolve()
    if not folder.is_relative_to(target):
        raise RuntimeError("Receipt path must be TARGET/.guild/workflow-runs/entry-TASK")
    parts = folder.relative_to(target).parts
    if len(parts) != 3 or parts[:2] != (".guild", "workflow-runs") or not parts[2].startswith("entry-"):
        raise RuntimeError("Receipt path must be source-excluded TARGET/.guild/workflow-runs/entry-TASK")
    return folder


def start(args):
    request = json.loads(args.request.read_text())
    if request["origin"] != os.environ.get("GUILD_SESSION"):
        raise RuntimeError("Start must use the unchanged actual initiating GUILD_SESSION")
    target = Path(request["target"]).resolve(strict=True)
    folder = receipt_folder(args.receipt, target)
    saved = folder / "start-request.json"
    if saved.exists():
        if json.loads(saved.read_text()) != request:
            raise RuntimeError("Retained Start differs; do not allocate another run/key")
        # Retry original intent before inspecting today's mutable draft. Root
        # owns replay/admission; a changed/deleted note is not a new Start.
    else:
        selected = (target / request["selection"]).resolve(strict=True)
        if not selected.is_relative_to(target):
            raise RuntimeError("Draft selection escapes target")
        if (target / "openspec").exists():
            files = [selected / name for name in ("proposal.md", "design.md", "tasks.md", "acceptance.md")]
            files += list((selected / "specs").rglob("*.md"))
            if len(files) < 5:
                raise RuntimeError("Create the same nonempty OpenSpec skeleton before registration")
        else:
            files = [selected]
        if any(not file.resolve().is_relative_to(target) or not file.is_file() or not file.read_bytes().strip() for file in files):
            raise RuntimeError("Registration needs nonempty draft artifacts, not accepted design")
        mode = probe(args.guild, folder)
        if mode["mode"] != "native":
            return mode
        save(saved, request)
    reply = call(args.guild, ["start"], saved, folder / "start-reply.json")
    save(folder / "run.json", {"run": reply["run"], "origin": request["origin"]})
    call(args.guild, ["show", reply["run"]], record=folder / "show-reply.json")
    return {"mode": "native", "run": reply["run"], "revision": reply["revision"]}


def contract(args):
    uuid.UUID(args.run)
    folder = args.receipt.resolve() / args.run
    key = args.key or "contract-" + args.step
    if not key or any(c not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-" for c in key):
        raise RuntimeError("Use a simple stable request key")
    request_file = folder / (key + ".json")
    if not request_file.exists():
        reply = call(args.guild, ["status", args.run])
        preparation = reply["snapshot"].get("preparation", {})
        if "context" not in preparation:
            raise RuntimeError(preparation.get("gap", "No eligible original-parent preparation context"))
        context = preparation["context"]
        folder = receipt_folder(args.receipt, context["source"]["target"]) / args.run
        request_file = folder / (key + ".json")
        save(folder / (key + "-status.json"), reply)
        if context["producer"] != os.environ.get("GUILD_SESSION"):
            raise RuntimeError("Original parent identity changed")
        step = next((s for s in context["steps"] if s["id"] == args.step), None)
        if not step or len(step["outcomes"]) != 1:
            raise RuntimeError("Select one configured parent ContractPrepare step/outcome")
        outcome = step["outcomes"][0]
        if not context["checks"] and args.checks is None:
            raise RuntimeError("Finalize requirements after design with --checks FILE; no implicit empty final list")
        checks = json.loads(args.checks.read_text()) if args.checks else context["checks"]
        if not isinstance(checks, list) or any(check not in checks for check in context["checks"]):
            raise RuntimeError("Final checks must retain every initial explicit requirement")
        requirements = [c for c in checks if c["step"] == args.step and c["outcome"] == outcome]
        if not requirements:
            requirements = [{"scenario": outcome}]
        pin = context["contract"]
        target = Path(pin["target"])
        if pin["kind"] == "openspec":
            program = pin["openspec"]
            version = subprocess.run([program, "--version"], capture_output=True, text=True, timeout=30, check=True).stdout.strip()
            argv = [program, "validate", Path(pin["selection"]).name, "--strict"]
            schema = "openspec-strict"
        else:
            program, version = "/bin/test", "POSIX test -s"
            argv = [program, "-s", str(target / pin["selection"])]
            schema = "lightweight-note"
        result = subprocess.run(argv, cwd=target, capture_output=True, text=True, timeout=30)
        output = folder / (key + "-validation.json")
        save(output, {"argv": argv, "exit": result.returncode, "stdout": result.stdout, "stderr": result.stderr})
        if result.returncode:
            raise RuntimeError("Contract validation failed; retained " + str(output))
        evidence = [{"id": str(uuid.uuid4()), "producer": context["producer"],
                     "contract": pin["sha256"], "source": context["source"],
                     "scenario": requirement["scenario"], "step": args.step,
                     "tool": {"program": program, "version": version, "argv": argv},
                     "observed_at_ms": int(time.time() * 1000),
                     "artifacts": [{"path": str(output), "sha256": hashlib.sha256(output.read_bytes()).hexdigest()}],
                     "observation": {"kind": "contract", "exit_code": 0, "schema": schema}}
                    for requirement in requirements]
        save(request_file, {"version": 1, "request_id": key, "expected_revision": reply["revision"],
                            "step": args.step, "outcome": outcome, "evidence": evidence,
                            "checks": checks})
    else:
        saved = json.loads(request_file.read_text())
        folder = receipt_folder(args.receipt, saved["evidence"][0]["source"]["target"]) / args.run
        if args.checks and json.loads(args.checks.read_text()) != saved.get("checks"):
            raise RuntimeError("Retained checkpoint intent differs; do not change the same request key")
    return call(args.guild, ["checkpoint", args.run], request_file, folder / (key + "-reply.json"))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--guild", default="guild", help="Actual installed/selected public CLI")
    commands = parser.add_subparsers(dest="command", required=True)
    discovery = commands.add_parser("probe")
    discovery.add_argument("--receipt", type=Path)
    entry = commands.add_parser("start")
    entry.add_argument("request", type=Path)
    entry.add_argument("--receipt", type=Path, required=True)
    final = commands.add_parser("contract")
    final.add_argument("run")
    final.add_argument("--receipt", type=Path, required=True)
    final.add_argument("--step", default="contract")
    final.add_argument("--key")
    final.add_argument("--checks", type=Path, help="Final full CheckRequirement list, retaining initial explicit checks")
    args = parser.parse_args()
    try:
        reply = probe(args.guild, args.receipt) if args.command == "probe" else start(args) if args.command == "start" else contract(args)
        print(json.dumps(reply, ensure_ascii=False))
    except (OSError, ValueError, KeyError, RuntimeError, subprocess.SubprocessError) as error:
        print("Native workflow gap (no portable replay): " + str(error), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
