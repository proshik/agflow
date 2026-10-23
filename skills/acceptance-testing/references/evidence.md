# Acceptance evidence

Use the project's real test commands and existing live tools. A focused scenario
record is enough; do not build a new evaluation framework or prose-match suite.
Keep operational results outside the implementation contract where appropriate,
in the root-authorized retained report location. Redact credentials/private data.

Record each scenario with:

| Field | Required meaning |
| --- | --- |
| scenario / kind | Accepted scenario ID and regression, static, fixture, model-behavior or live observation |
| snapshot | Contract digest and code SHA plus owned dirty-file digests; running build/binary identity |
| environment | Actual host/tool versions, checkout/cwd, resource/lease and test-data owner |
| action | Exact command/argv or ordered UI gestures, relevant input and request/session/process IDs |
| expected / actual | Observable result, exit/output/state or what the real UI/API did |
| UI target / comparison | For changed UI: accepted target path/revision, observed states/sizes and retained comparison evidence |
| discrepancy / disposition | Differences from the contract: correction, unresolved preparation choice or accepted scope change; current status and decision reference |
| evidence | Readable output/receipt/screenshot paths and observation time; durability limitations |
| status / gap | PASS, FAIL or UNVERIFIED; missing check, reason, responsible owner and next action |

For a regression, retain before-fix failure for the correct cause and after-fix
outcome. For services/web, capture actual success/error API interactions plus
browser behavior where affected; for desktop, the actual isolated changed window
and gestures; for CLI, the built binary's exit/output/state. Version labels must
identify what actually ran. Unit results are useful without impersonating those
live observations. An unavailable live surface remains UNVERIFIED even when
static checks pass. Do not substitute synthetic screenshots or narrated actions.

After a correction, identify which scenarios/snapshots became stale and rerun
only necessary checks. Final acceptance matches the checked snapshot and any
required review; if review finds another change, retain the old evidence and qualify the new revision. A
review source marked degraded/missing/UNVERIFIED cannot establish clean acceptance.

The root records integration order and exact prerequisite/consumer revisions,
then verifies combined entrypoints/invariants on the integrated tree. Separate
branch success does not prove that version. A required resource still owned by
another worker blocks only its dependent check; do not bypass the lease or delete
user objects. Exhausted allowance or unavailable provider remains an honest gap.

A final record distinguishes checked local prototype, accepted task, readiness
for authorized delivery and observed publication/merge. Do not archive an
OpenSpec change, mark pilot/global tasks complete or imply rollout from document
validation alone. Scope-specific deferral needs an explicit accepted decision.

## Correction impact map

Before rechecking a correction, record changed paths and behavior; affected
scenarios; invalidated evidence and why; retained evidence with a specific
non-impact rationale; required reruns and independent re-review scope; and final
contract/code/build/review identities. Preserve old evidence as historical.
Cosmetic changes do not automatically require the full suite or another review:
justify which checks remain valid and which changed surface must be observed.
The parent determines required independent coverage under the original task
history, configured profile and remaining rounds. Reused evidence covers only
its stated scope, never an unreviewed snapshot as a whole. Required review after
exhaustion remains UNVERIFIED until an explicit limit or acceptance change.

For an early working preview record the actual initially empty input, entered
value, action, output and relevant persistence observation (or affected API/CLI
sequence), accepted UI target revision and differences. Repeat invalidated
observations for final acceptance. Do not fabricate UI tests for prose changes.
