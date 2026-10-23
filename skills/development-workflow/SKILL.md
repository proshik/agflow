---
name: development-workflow
description: Use for ordinary software implementation or bugfix requests, singular or plural, and architecture-only development requests. Not advice alone, independent review alone or permission to deploy/publish.
---

# Development workflow

Keep the main checkout free of task changes. Before writing code, tests,
contracts, plans or task notes, create or reuse a task branch in a separate
worktree. Read-only investigation may start in the main checkout. Preserve
pre-existing user changes; never clean, stash or commit them to obtain isolation.
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

## Choose the amount of process

Read target-project rules and [effective policy](references/policy.md). Choose
based on uncertainty, affected contracts and consequences of failure, not file
count or the mere presence of OpenSpec, Guild or subagent tools.

- A small local change or minor bug with settled behavior uses the short route:
  task worktree + separate working session → reproduce/inspect → change → targeted
  verification → local
  commit when authorized. The request and a concise expected outcome suffice;
  do not require a separate specification, designer, process
  registration, plan review, independent code review or durable receipt system.
  Project-required documentation and checks still apply.
- Substantial or uncertain work adds the artifacts, delegation and independent
  checks it needs. Investigate/discuss material uncertainties before freezing
  design; use spec-design to persist the resulting agreement when useful. Explain
  the material reason for extra stages briefly. Do not
  add a stage merely because a tool is available.

For this workflow, an ordinary development request authorizes task worktree
creation, a separate working session and relevant local implementation/checks,
subject to explicit action
limits and host permissions. Local commits follow applicable project/user rules;
push, merge, publication, cleanup, deployment and global installation retain
their separate authorization requirements. Questions alone launch no workers.

## Execute in the task worktree

1. Start with the actual request and affected callers. Diagnose bugs; for
   ambiguous substantial work apply relevant Superpowers brainstorming/planning
   methods, or the same methods directly if unavailable, before freezing design.
   Compare solutions and clarify material uncertainties without ceremony for
   small clear tasks. Preserve settled decisions. Distinguish requested/approved
   product behavior, demonstrated compatibility/technical constraints and optional
   suggestions. Necessary internal helpers/refactoring are normal implementation
   choices; added visible Retry/recovery, screens, settings, modes or automation
   require a user decision unless already authorized. A clearer error is not
   session recovery. Proposals, saved text and validation/review do not approve
   new scope.
2. After investigation/discussion and agreement, use a persisted contract only
   when useful or explicitly required. Spec-design bridges methods to storage,
   without inventing requirements. Honor the explicit format; otherwise an existing
   target `openspec/` selects one matching change, and its absence selects one
   lightweight note. Do not initialize OpenSpec automatically. A directory alone
   does not force specification work for a local fix. When project rules require
   it, keep the matching change minimal and validate it in the task worktree.
   OpenSpec stores agreed behavior, scenarios, significant accepted choices and
   the one authoritative implementation task plan, not a second design process.
   Reconcile relevant drafts; do not keep a competing Superpowers Plan.md/spec
   or rewrite baselines automatically. Never pass suggestions as accepted facts.
3. Specification review is conditional: use it for consequential architecture,
   shared-contract changes, migration/recovery design or material unresolved
   integration risk. Skip it for settled implementation details. When selected,
   request **one architectural reviewer, one pass/attempt**. First check scope
   inflation against the actual request/approved decisions, then feasibility,
   boundaries and compatibility; findings cannot authorize new product behavior.
   Do not request a general code-review
   roster, synthesis, verification pipeline or automatic re-review. See
   [review intent and routing](references/review.md). Architecture-only work
   ends at design_ready after its selected checks, without a builder launch.
4. The parent uses orchestration to assign the full request to a separate task
   session before preparation or implementation writes. The assigned worker
   implements in its own worktree/session and reuses both for corrections.
   Native subagents may help with bounded investigation, checks and delegated
   parts; they do not replace the required session. If that session cannot be
   provided, report the scoped capability gap and withhold implementation.
5. The worker applies engineering-quality and acceptance-testing and runs
   relevant checks before handoff or review. The parent checks results and
   necessary final behavior, without duplicating the full suite absent a changed
   concern.
   Reach a useful working behavior early. For a bug, retain its reproduction and
   relevant regression evidence. For docs-only changes use file/link/inventory
   and affected local-control checks, not fabricated product/model evaluations.
6. Select independent code review for material risk, substantial cross-component
   changes or explicit project/user requirements. A small low-risk fix needs
   targeted checks and self-inspection; no automatic paid review. Use the chosen
   review scope and actual local route. Once selected, use the full effective
   configured code-review profile: original roster/lenses, enabled stages,
   provider/model/effort, verification policy and budgets. Specification-only
   single-pass limits do not apply; do not reduce to one bugs/impl lens, a one-call
   cap or disabled synthesis/verify for convenience. A reduced/diff-focused
   correction review needs explicit scope; preserve histories and round limits.
   Honor normal engine skips, without forcing calls. See the profile/stage
   distinction in [review routing](references/review.md), and inspect
   supported findings. Do not turn every minor suggestion into a broader design.
7. Inspect the final diff and behavior, record meaningful checks and limitations,
   and leave a concrete local branch/commit. Prepare MR/PR text when requested
   or useful for actual delivery, not as a mandatory artifact for every fix.

## Delegation and optional host automation

Use orchestration to establish the required task session and when coordinating
helpers or shared resources. Assigned workers do not create nested task sessions.
Keep the initiating session responsible for results, integration and continuation.
Assignments specify the task worktree, owned files, expected outcome, checks and
limits. Supply further state only when recovery or dependencies actually need it.
Native subagents sharing files must use distinct worktrees for concurrent writes
or run sequentially with explicit ownership. Read-only helpers need no new tree.
Do not give another agent permission to answer the user's tool approvals.

A capable host may offer a managed Process, but its presence does not select it.
Use [native entry](references/native-entry.md) only when the selected task needs
that automation and its graph can represent the selected optional stages and
worktree ownership. Check capabilities before registration; do not start a graph
that forces omitted reviews or writes preparation in the main checkout. Existing
registered runs retain their actual identities, history and limits; never start
a second controller or strip caller identity to bypass an incompatible run.

Use a concise progress/check result for small task-session work. Maintain durable coordination
records only for dispatched sessions, shared resources or recovery that needs
them. After corrections rerun affected checks and retain justified unaffected
evidence; do not repeat all stages for a cosmetic edit. Required missing evidence
remains UNVERIFIED. A deliberately unnecessary stage is skipped, not a blocker.
Superpowers supplies task-relevant engineering methods, not a mandatory skill
sequence or installation prerequisite. Apply the methods directly when absent;
keep the implementation plan in the selected contract rather than a second plan.
