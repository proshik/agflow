# agflow

Portable instructions for the development workflow used with Claude, Codex and
OpenCode. This repository contains five Markdown skills, shared user rules,
setup instructions and an interactive diagram. Your harness reads the repository
and performs installation or updates with its available tools and permissions.

## Install on another machine

Clone this repository, open your harness in it and ask:

> Read AGENTS.md and BOOTSTRAP.md and install this workflow for the harnesses
> available on this machine. Inspect existing configuration, show the proposed
> changes, preserve local rules and create backups. Verify the installed files
> and skill discovery without starting models or reviews. Report missing
> prerequisites and anything that remains unverified.

[BOOTSTRAP.md](BOOTSTRAP.md) is the installation and update procedure.
[docs/setup.md](docs/setup.md) describes destinations, dependencies and recovery.
No bundled installer or Python runtime is required. Opening the repository alone
starts no installation, provider calls or configuration changes.

## What is installed

- The five skills from [skills/](skills/), with their bundled resources.
- The shared rules from [instructions/workflow.md](instructions/workflow.md),
  inside managed blocks in the selected harnesses' global instructions.
- The review route from
  [instructions/review-routing.md](instructions/review-routing.md).

[bundle.json](bundle.json) lists the expected skills and review defaults. The
harness checks this inventory before writing. Existing rules outside managed
blocks, provider profiles, credentials, permissions and unrelated files are
preserved. Dependencies such as revust are checked and set up separately.

## How the workflow works

1. The initiating session reads the project rules, identifies the task and checks
   the host's actual capabilities and permissions.
2. Requirements and acceptance checks are recorded in one contract: an existing
   OpenSpec change, or a lightweight task note for projects without OpenSpec.
3. The parent reviews the contract through installed revust and assigns an
   implementation session in a separate managed worktree.
4. The implementation session changes the code, runs relevant checks and reports
   the exact revision and evidence. The parent supervises and routes corrections
   back to the same session.
5. The parent reviews the implementation through revust and checks real API, UI,
   native application or CLI behavior against the contract. Missing required
   evidence remains UNVERIFIED.
6. The result is a local branch and concrete MR/PR text. Push, publication, merge,
   cleanup and deployment require their applicable explicit authorization.

The five skills cover development, contract preparation, orchestration,
engineering quality and acceptance testing. Review defaults per task are up to
1 plan-review round and, separately, up to 2 code-review rounds, including the
initial review of each kind. Internal stages and retries belong to one round;
a new invocation consumes another round. There is no default aggregate cap on
process starts; separately explicit limits still apply. Superpowers
methods are optional. Guild is a supported managed-session host; other hosts
must qualify isolation, observation, human questions, approvals and resume.

## Update after this repository changes

Open the existing checkout in your harness and ask:

> Read AGENTS.md and BOOTSTRAP.md. Update this checkout from its configured
> upstream without discarding local changes, then update the existing workflow
> installation for the same harnesses and destinations. Show the changes,
> preserve local configuration and backups, account for obsolete managed files,
> and verify installed content and discovery without model calls.

The harness inspects Git state, uses a fast-forward update where possible, reads
the new instructions and reconciles them with the previous installation record.
Divergent branches and local edits require reconciliation; they are never reset
or overwritten to force an update. Dependency upgrades are separate.

## Interactive process diagram

Open [previews/process.html](previews/process.html) directly in your browser.
It is self-contained and needs no server. Its controls explain the workflow;
they do not start models, reviews or Git operations.

## Verification limits

Compare installed files and managed instruction blocks with this checkout and
verify discovery through the selected harness's read-only catalogue where
available. File checks do not qualify managed sessions or prove that the full
workflow works. Live workflow checks and paid evaluations require their own
authorization and budgets. See [setup requirements](docs/setup.md).

## Contributing and license

Distributed under the [MIT license](LICENSE), copyright agflow contributors.
Guild and revust are external prerequisites, not bundled products. No platform
or provider is qualified merely by installing these instructions.

Developer validation uses Node.js 24+ with no packages to install:

```sh
node tools/check.mjs
node --test tools/check.test.mjs
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for clean-snapshot release checks and
CI limits, and [SECURITY.md](SECURITY.md) for reporting sensitive issues.

## Working checkpoints and handoffs

The contract separates required behavior, necessary compatibility and optional
additions. Extra shells/platforms need a demonstrated dependency on the request.
Assignments identify the concrete UI target and first useful working preview.
Small vertical checkpoints report working behavior, evidence, next visible outcome
and blocker in the same session. Before full code review, exercise the real empty
input/action/output and relevant persistence, or the affected API/CLI/native
surface. A prototype/preview is not acceptance or an extra approval gate.

Managed workers retain their parent as review/continuation owner. User topic
handoffs require named owners and qualified usable host routes before session
creation; unsupported promotion keeps an eligible parent, without identity
stripping, default manual couriers or skipped reviews. Corrections map changed
paths/behavior to invalidated and justified retained evidence, necessary reruns
and final reviewed identities. Unmet requirements remain unfinished; new requests
change scope. Structural checks cannot prove future model behavior.

The defaults allow no plan re-review and one code re-review. Existing explicit
task histories/limits remain authoritative. Required review after exhaustion is
UNVERIFIED until the user explicitly changes the limit or acceptance requirement.
