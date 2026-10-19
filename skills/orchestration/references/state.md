# Handoff and durable state

These are readable operational records, not another development plan, native
manifest or scheduler. Root allocates stable workflow/attempt IDs and writes a
root-owned atomic receipt. A worker writes only its explicitly assigned report;
an outside-checkout path needs explicit write scope. Otherwise retain it in the
checkout and state the durability limit. Publish through a temporary sibling
and atomic rename; leave call/source archives unchanged and omit secrets/reasoning.

A complete handoff can use this compact outline:

```text
Intent / accepted decisions / open questions:
Checkout, branch, base and prerequisite revisions:
Contract readiness (preparing / persisted_validated / review_accepted):
Contract format/detection evidence, OpenSpec change ID only when applicable:
Persisted accessible contract paths/revision/digests:
Preparation evidence (OpenSpec validation or lightweight content check):
Matching accepted parent review receipt (if available):
Assigned tasks, acceptance scenarios, owned and excluded paths:
Effective harness/model/effort, observed host identities and capabilities:
Authorized operations, resource grants, provider restrictions and shared limits:
Required checks/live observations and evidence location:
Assigned atomic report path, next parent checkpoint, same-session corrections:
```

A plan-review handoff requires persisted_validated artifacts and their identities;
a next-action request naming a review route is separate from those files and
from review_accepted evidence. With dispatch prohibited, report permitted local
preparation progress and the first actual blocked operation, not a hypothetical
later-stage approval as a completed contract.

Root receipt and worker report share only needed facts:

| Group | Contents |
| --- | --- |
| Identity | version, workflow/attempt/origin IDs, worker/session/request/job IDs |
| Source | contract paths/digests/revision, checkout/branch/head, owned dirty scope, prerequisite versions |
| Effective policy | host/harness/model/effort/review selections and provenance; actual action limits |
| State | phase, resume phase, pending question ID/type/recipient/status and actual response provenance |
| Coordination | assigned roster/last observation/next action, dependencies, resource/grant/release IDs |
| Accounting | original review receipts, separate plan/code rounds used/remaining, observed process starts, explicit limits, separate eval starts |
| Evidence | scenario statuses/snapshots/paths, checks, findings, gaps, owner and next action |

Normal phases: preparing → plan_review_pending → implementing →
code_review_pending → accepting → ready; architecture-only ends at design_ready.
Waiting_user, waiting_tool_approval, blocked, failed and cancelled retain their
resume phase and cause. A turn's done status does not set ready. Required review
or live gaps remain UNVERIFIED; publication/merge have separate observed receipts.

On restart compare receipt with actual checkout/HEAD/dirty ownership, live
session/process/conversation, resource consumers and original review archive.
Recover original IDs after partial dispatch; do not replay unknown work or infer
unused allowance from missing history. Changed contract/code invalidates affected
matching evidence while retaining the old version. Root then performs the next
authorized checkpoint and resumes the same eligible session, not a duplicate.

For a shared exclusive resource, root request/grant/done records identify resource,
workflow/attempt/owner, permitted already-authorized operations and protected
objects. Grant only one owner through a verified lease or root-only atomic writes;
worker acknowledges use and reports stopped consumers/actual state before done.
Timeout/crash keeps the grant pending reconciliation; a file timestamp is not a
lease expiry or permission for user-data cleanup. Separate ports/resources can
proceed independently.
