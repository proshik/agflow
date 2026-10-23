---
name: orchestration
description: Use when delegating development to harness subagents or managed sessions, coordinating dependencies or shared resources. Assigned workers reuse their task session; not for independent review alone.
---

# Orchestration

Establish the mandatory separate task session; add helpers only when useful.
The initiating session owns scope, integration, acceptance and continuation.
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

## Choose from actual harness capabilities

Inspect the tools available in this session, not the harness name or a presumed
configuration. Consider native subagents first for bounded investigation,
implementation and checks. Establish their checkout binding, filesystem sharing,
permissions, available concurrency, result/continuation channels and whether
questions or tool approvals can reach the user. Probe only what the assignment
requires; do not perform a full host qualification for a read-only helper.

- Read-only helpers may inspect the existing checkout without another worktree.
- A writing helper must use the assigned task worktree. Native agents may share
  the parent's filesystem and cwd: pass exact paths and set cwd on commands.
  Give concurrent writers separate worktrees; otherwise sequence them and
  assign explicit file ownership. Do not assume spawn supplies isolation.
- In Guild use the public [host adapter](references/guild.md) for a visible
  managed worker, including for small fixes. Outside Guild a native child must
  satisfy the distinct-session requirements above, not merely share cwd/state.
- Missing required task-session capability blocks implementation. Report that
  scoped gap; continue read-only investigation without a root-write fallback.

Assignments include the goal, worktree/branch, owned and excluded paths, relevant
contract or request, checks and action limits. Add model/effort selections only
when requested/configured and supported. Configuration alone grants no permission.
Use the tool's structured task text; Guild accepts literal task files. Verify
actual start and result. Do not launch recursive worker hierarchies by default;
a child needs a concrete authorized assignment to delegate further. Approval
for another session's protected tools remains the user's to grant.

## Supervise and integrate

Use native completion events or bounded waits; inspect returned artifacts and
checks instead of trusting a done label. Stay active while assigned work or its
next authorized parent action can progress. Consume results, perform the next
selected check and continue the same eligible worker for corrections. Do not
leave workers waiting for a user reminder or promise monitoring after turn end.
A timeout neither completes nor cancels work. Route real human questions and
permissions through supported channels and continue independent work.

Sequence coupled interfaces and migrations; integrate exact prerequisite and
consumer revisions and check combined behavior. Use separate worktrees for
independent concurrent writers and verified exclusive ownership for shared
resources. Timeout/crash does not release a resource without reconciliation.
Preserve unrelated user changes and stop scope drift at useful working previews.

## State, reviews and recovery

For a bounded native helper, its ID, assignment, returned result and checked
snapshot are enough. Do not require atomic report files, a new task controller,
a managed visible tab or a durable receipt system solely because it is a helper.
For long-lived managed sessions, interruptions and shared resources use
[durable state](references/state.md). Keep receipts in the task worktree or an
explicitly authorized retained location, never dirty the main checkout.

The parent selects review intent and the applicable user/project tool adapter.
A native helper is not an automatic substitute for an explicitly required
independent review route. Helpers used as reviewers must be separate from the
implementation context and must not approve their own changes. Review itself
never authorizes another implementation session or model evaluation.

Preserve original histories across all tools/branches: at most one plan review
and two code review rounds by default, including initial invocations, only when
those reviews are selected. Architectural plan review is one reviewer and one
pass, with no synthesis/verification or automatic retry. A round limit is a
ceiling, not a required stage. Additional rounds need an explicit limit change.
Failed/stopped starts count unless confirmed pre-provider refusals; ambiguous
starts require reconciliation. Changing IDs, providers or engines resets nothing.
No default aggregate process cap applies; explicit call/provider limits prevail.

Before repeating a failed external operation inspect the cause, changed condition
and available bounded no-generation recovery evidence. Do not spend paid smoke
calls or switch providers to guess. Retain a missing required qualification as
UNVERIFIED; an explicit scoped retry still needs available allowance. Recover
existing IDs before starting duplicates. Ordinary task-session work requires no
external-engine recovery ceremony when no engine is involved.
