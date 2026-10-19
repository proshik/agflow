---
name: orchestration
description: Use when coordinating assigned development workers, dependency handoffs, shared resources or parent-owned checkpoints across managed sessions. Not for a builder to delegate or for independent review execution.
---

# Orchestration

The initiating parent owns assignments, supervision, integration and acceptance.
An assigned designer/builder reports in its existing session; it does not create
or steer workers, independently review, or answer another session's approval.
Use the accepted contract tasks (OpenSpec or lightweight) and actual authorization envelope. This helper
supplies coordination, not new permission or another development plan.

## Dispatch and dependency boundaries

Before dispatch, verify the managed host can isolate a worktree, bind task/cwd,
return stable identities, observe/resume the session and route real human
questions and tool approvals. Guild requires visible sessions; outside Guild,
non-visible sessions require independently qualified human channels. Unknown
required capabilities withhold dependent dispatch. Do not substitute root
implementation for a required unavailable worker.

For Guild, read [the public adapter](references/guild.md); for another host,
map its public tools to those same capabilities and record observed support.
No private Guild settings, Rust inspection or bootstrap patch is required.

An assignment identifies checkout/ref, accessible contract paths/digests,
accepted tasks, owned/excluded paths, prerequisite revisions, effective
harness/model/effort, checks, resource grants, report location, action limits
and next checkpoint. Verify the contract actually exists in the child's
revision; uncommitted parent files do not travel automatically. Sequence coupled
interfaces/migrations/generated artifacts. Integrate exact prerequisite and
consumer revisions and check combined behavior before accepting either result.

## Active parent supervision

Keep an assigned-ID roster and each worker's last observation, pending action
and report path. While authorized child work or a parent checkpoint can
progress, remain active: observe every assigned ID fairly, consume completed
turns and perform the next authorized action. Prefer host events/bounded waits;
when unavailable, use bounded polling with a real delay, never a tight loop.
Rotate through IDs rather than starving peers behind one worker.

A timeout is pending; it neither cancels nor completes anything. A `done`
status means the turn ended. Read that exact session's result and durable report,
check actual artifacts/revision, then perform the parent-owned review/evaluation,
integration or acceptance checkpoint. A checkpoint report is work for the
parent; do not wait for an unsolicited child turn or a user reminder.

After the checkpoint, continue the same idle/done session only after confirming
current eligibility and checkout/conversation identity. Keep the builder for
corrections. Do not send to working/waiting sessions. If a real question or tool
approval blocks an action, identify the session and reason; keep that dependent
action paused and continue independent authorized work. Relay only an actual
correlated human decision through a supported channel; another session's tool
approval remains the user's to grant. Timeout cannot supply either answer.

End the parent turn only when authorized dependent work is finished or a real
human/external dependency prevents remaining progress. Do not finalize merely
to leave workers running, or promise a background monitoring loop after your
execution ends. Report task acceptance separately from turn completion.

For handoff/report fields and restart phases, read [durable state](references/state.md).

## Recovery, resources and accounting

On interruption, reconcile the assigned IDs, actual git/process state, reports
and original review archives before resuming. Recover an ambiguous start by its
original request/session/worktree IDs; missing/corrupt history is not absence.
Do not replay a dispatch, change identity or stop a worker because telemetry is
unknown. Preserve the resume phase for waiting/blocked/failed/cancelled states.

For exclusive shared resources use a verified host lease or root-only atomic
request/grant/done records outside disposable checkouts. Identify owner, attempt,
resource and permitted operations. A worker reports actual stopped/released
state; timeout/crash alone never transfers a grant. Reconcile live consumers
before release. Coordination does not grant tool permission or destructive
cleanup; independent resources need no artificial queue.

Use a root-owned atomic receipt and explicitly assigned worker reports, separate
from contracts and engine archives. Retain identities, contract/code digests,
phase/resume phase, question IDs/types/actual answer provenance, dependencies,
leases, effective selections, evidence, limitations and next action; no secrets.
Parent alone owns independent revust checkpoints and separate task-wide round
counts: at most 1 plan-review round and at most 2 code-review rounds, including
the initial review of each kind. Each dispatched invocation includes its finders,
synthesis, verification and internal retries; another invocation consumes another
round, even after failure or stop. A confirmed pre-start refusal does not consume
a round; reconcile ambiguous starts. Share each count across coordinated branches,
without transferring rounds between kinds. Record actual starts without a default
process-count ceiling. Honor separately explicit user/task/provider limits.
Unknown history or exhausted rounds withholds that review; more rounds require
an explicit limit change. Evaluations use a separately authorized ledger.
Changing identity/profile/engine never resets counts. Missing review or live
evidence is UNVERIFIED, not accepted.

## Handoff modes and vertical checkpoints

Use [handoff modes](references/state.md) explicitly: a managed worker remains
under its eligible parent; a user topic handoff needs a named review and
continuation owner and a qualified usable host-supported route before session
creation. A task caller cannot become a parent by renaming or stripping identity.
When promotion is unsupported, retain the eligible parent. Do not default to a
manual human courier or suggest skipping required review.

Assignments include required scope, necessary compatibility, optional additions,
the accepted concrete UI target and first useful working preview. Parent stops
scope drift: agent-added shells/platforms require a demonstrated dependency on
requested behavior, while affected callers remain supported. Supervise small
vertical checkpoints in the same contract/session; report working behavior,
evidence, next visible outcome and blocker. Require basic real interaction before
broad code review; preview is not acceptance. Continue authorized work without
redundant approvals. Before corrections inspect the impact map of changed paths,
invalidated/retained evidence with rationale, required reruns/re-review and final
reviewed identities; preserve scope, profiles, histories and remaining rounds.
