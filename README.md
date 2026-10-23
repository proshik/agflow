# agflow

Portable instructions for the development workflow used with Claude, Codex and
OpenCode. This repository contains five Markdown skills, shared user rules,
setup instructions and an interactive diagram. Your harness reads the repository
and performs installation or updates with its available tools and permissions.
agflow is this distribution repository, not an executable tool, runtime or service.

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
preserved. Optional adapters such as revust are checked separately when selected.

## How the workflow works

Always isolate task changes in a separate branch/worktree before writing code,
tests, plans, specifications or notes. Keep the main checkout free of task edits
so another task can start from it at any time. Preserve pre-existing user changes.
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

For a small settled change or minor bug:

> Separate task worktree + working session → inspect/reproduce → implement → targeted checks → local commit

No separate specification, designer, process registration or
independent review is mandatory unless project/user rules require it. For
substantial or uncertain changes, add only useful design, delegation and review.
Start from the actual user request: request → investigation/discussion → agreed
behavior → persisted change when useful or explicitly required → implementation
and relevant checks. For bugs use diagnosis; for ambiguous substantial work use
relevant Superpowers brainstorming/planning methods before freezing the design.
Use the same engineering methods directly if the plugin is unavailable; neither
installation nor every Superpowers skill is a mandatory sequence. Small clear
tasks need no ceremony.

Superpowers supplies engineering methods, including comparing solutions and
verification. OpenSpec stores agreed behavior, scenarios, significant accepted
choices and one implementation task plan; it does not invent features or add a
second design/planning process. Spec-design bridges those methods to the chosen
persisted format. With OpenSpec selected, keep the authoritative implementation
plan there, reconcile relevant existing drafts before implementation and avoid a
competing Superpowers Plan.md/spec. Do not initialize OpenSpec or rewrite baseline
specifications automatically. Existing openspec/ alone does not force a change
for a minor fix; real project rules and explicit requirements still apply.

Use spec-design to bridge those methods to the persisted format. Draft proposals
remain proposals; saving or validating them and review do not approve new scope.
Necessary internal implementation choices need no extra approval; optional visible
features need a user decision unless already authorized. For example, a clearer
error does not authorize session recovery. Preserve settled decisions.

Specification review is optional. Consequential architecture, shared contracts,
migrations and uncertain integration can justify **one architectural reviewer,
one pass/attempt**, without synthesis, separate verification or automatic retries.
First check scope inflation against the request/approved decisions, then
feasibility, boundaries and compatibility. Findings do not authorize new behavior.
Independent code review is selected by material risk or explicit requirements.
General skills describe intent; applicable user/project policy and a suitable
adapter choose the tool. Revust is an optional adapter, not a universal dependency.

Use native subagents for bounded investigation, checks or delegated parts inside
the task. Check actual file sharing, permissions and result channels. Concurrent
writers use separate trees; read-only helpers need no new tree. Helpers do not
replace the mandatory task session.
The parent owns continued work, integration and acceptance. An optional native
Process must support the selected lighter route before registration; existing
registered tasks retain their owner/history. See the
[native entry guide](skills/development-workflow/references/native-entry.md).

The worker tests before handoff/review. The parent checks results and necessary
final behavior without a full duplicate suite absent a changed concern. Keep
real behavior checks proportional to the affected surface. Documentation
changes use file/link/inventory and affected local-control checks; static checks
do not prove live product or model behavior. Recheck affected evidence after
corrections rather than repeating everything. Preserve requested scope: a clearer
error does not automatically include a retry/recovery subsystem.

Default review ceilings are up to 1 plan round and 2 code rounds, including initial
runs, **only when those reviews are selected**. Architectural review has one
reviewer/attempt. Preserve existing histories and tighter explicit limits; do not
reset counts by changing engines or task IDs. No unrequested model evaluations.
Push, merge, publication, cleanup, deployment and global installation retain their
separate authorization requirements. See [review policy](instructions/review-routing.md).

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
Guild and revust are optional external adapters, not bundled products. No platform
or provider is qualified merely by installing these instructions.

Developer validation uses Node.js 24+ with no packages to install:

```sh
node tools/check.mjs
node --test tools/check.test.mjs
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for clean-snapshot release checks and
CI limits, and [SECURITY.md](SECURITY.md) for reporting sensitive issues.

## Working checkpoints and handoffs

Use the request and expected outcome for small tasks in their assigned session;
use one persisted
contract when substantive design helps. State required scope, necessary
compatibility and optional additions. Reach useful working behavior early and
check the affected API/UI/native/CLI surface, or local documentation controls.
For helpers, a clear assignment, ID and checked result suffice. Durable receipts
and atomic reports serve long-lived managed recovery/shared resources only.
Keep the parent responsible for continuation and acceptance. Required missing
checks remain UNVERIFIED; a deliberately unnecessary stage is skipped.
