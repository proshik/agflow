<!-- agflow:begin -->
# Portable development workflow

Use development-workflow for requested implementation, bugfixes and architecture
work. The five shared skills live in ~/.agents/skills. Record actual harness/host
capabilities when needed; a skill name does not prove tool availability.
Questions and advice alone launch no workers, reviews or models.

Always create or reuse a separate task branch/worktree before writing any code,
tests, specification, plan, note or generated task evidence. Keep the main
checkout free of task changes and preserve pre-existing user work. Read-only
investigation may use it.

Every task change requires both a separate task worktree and a separate working
session, including minor bugs, documentation and preparation. The initiating
parent owns scope, supervision, acceptance and continuation; it must not implement
through paths into an empty worktree. In Guild the worker is a visible managed
session. Outside Guild a harness-native child qualifies only with a real separate
conversation, explicit worktree binding, supervision/continuation and required
human question/approval channels. A helper sharing parent cwd/state does not
qualify. Missing required session capability blocks implementation; report the
scoped gap without a root fallback. The parent may assign the full request;
preparation/design writes belong to the task session. Existing assigned workers
reuse their own session and tree without nesting.

For small settled local changes and minor bugs, use the short route: worktree +
separate working session →
inspect/reproduce → implement → targeted checks → local commit under applicable
authority. No separate specification, designer, process graph,
plan review, independent code review or durable receipt framework is mandatory.
Project-specific documentation/check requirements still apply. Classify by
uncertainty and consequences, not file count or installed tools.

For substantial or uncertain work, add only justified design, delegation and
review. When a persisted contract helps, explicit format wins; otherwise use one
matching change in existing openspec/ or one lightweight note if absent. Never
initialize OpenSpec automatically. Its presence alone does not require design
ceremony for a small fix. Resolve material choices and preserve settled decisions.
Keep requested scope distinct from optional recovery, platforms or generalization.

Specification review is conditional on consequential architectural choices,
shared contracts, migrations or integration uncertainty. When selected, use one
independent architectural reviewer, one pass, no synthesis, separate verification
pipeline, automatic retry or re-review. The parent checks findings and updates
the same contract. Independent code review is selected for material risk,
substantial integration or explicit project/user requirements. An omitted
unnecessary stage is skipped; missing required evidence remains UNVERIFIED.

General skills specify review intent, not a mandatory review engine. Honor the
applicable explicit user/project route; otherwise use an available suitable
native reviewer or external adapter. A reviewer must be independent of the
implementation context. External adapters must express the selected scope,
stage shape and call limit; never silently expand to a comprehensive pipeline.
Preserve configured models/profiles and existing task histories.
Default ceilings, only for selected reviews, are 1 plan round and 2 code rounds,
including initial invocations. Failed/stopped invocations count unless confirmed
pre-provider refusals; reconcile ambiguous starts. New invocations need remaining
allowance; changing tools/IDs never resets it. No round transfer or automatic
additional review; explicit task/provider limits prevail. Evaluations require
separate authority. Configuration and installation authorize no calls.

Consider actual harness-native subagents for bounded investigation, implementation
and checks when they reduce total work. Check checkout binding, filesystem
sharing, permissions, concurrency, results and needed human channels. Read-only
helpers need no additional worktree. Writers use assigned task worktrees;
concurrent writers use separate trees, otherwise sequence explicit ownership.
Native helpers do not replace the mandatory task session. In Guild use public
host APIs for the visible managed worker. Without required session capability,
report a scoped gap and withhold implementation; do not fall back to root writes.
A native process graph is optional and must support the selected lighter route
before registration. Existing runs keep their owner/history; no second controller.

The parent owns scope, supervision, integration and continuation. Inspect results
and execute the next authorized checkpoint; do not wait for user reminders or
finish while assigned work can progress. Do not answer another session's tool
approval. Native helper IDs/results suffice for bounded work; durable receipts
and atomic reports are for managed recovery/shared resources that need them.
Qualify only capabilities required by the actual assignment, using harmless
bounded evidence under existing authority, without blanket access requests.

Apply engineering-quality and acceptance-testing proportionally. Check real
changed behavior early; docs-only work uses file/link/inventory and affected local
controls. Tests/static validation do not prove live UI/API/model behavior.
After corrections rerun affected checks, retaining justified unaffected evidence;
no blanket full-suite/review repetition for cosmetic changes. Classify failures
as introduced/pre-existing/unknown and do not repair unrelated issues by default.
A requested clearer error does not automatically include retry/session recovery.

Recover original dispatch/review IDs before repeating ambiguous work. External
failure retries require cause, a changed condition and bounded free recovery
proof where available; no default paid smoke or provider switch. If proof is
unavailable, name the gap and obtain one specific retry decision with remaining
allowance; explicit retry authority does not turn uncertainty into proof.
Push, merge, publication, cleanup, deployment and global installation keep their
applicable separate authorization. Installation never starts development.
<!-- agflow:end -->
