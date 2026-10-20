# Native entry before design

This route overrides the portable manual review/worker dispatch while a native
run owns this task. It applies to every initiating harness. Do not change caller
or socket, use another user session, or start a second controller. Assigned
designers/builders keep the existing run and their limited report authority.

1. Read `guild workflow instructions` and `guild workflow capabilities --json`.
   Or run `python3 PATH/TO/THIS/native-entry.py probe`. Require entry_before_design:true and finalize_checks:true as well as the listed
   v1 operations. Only positively absent/unsupported capability selects portable
   before registration. Dead owned socket, malformed reply, authority gap or
   incomplete identity stays a gap. Retained intent never selects portable. Never interpret a failed native
   mutation as permission to fall back or start a replacement run.
2. Before substantive design, write a nonempty note with request/scope/design
   pending if OpenSpec is absent; when present reuse the matching change with
   nonempty proposal/design/tasks/acceptance/specs skeleton. This is a draft, not
   a final accepted contract. Do not initialize a second contract.
3. Prepare the Start JSON described by public instructions: actual GUILD_SESSION,
   absolute target, same selection, full user task, stable request_id, version1,
   expected_revision0. Resolve role/profile choices and existing call limits;
   known acceptance requirements go in checks. Omitted checks do not imply PASS
   or authorize missing later acceptance. Definition is frozen on Start, while
   contract bytes and final requirements can be completed through ContractPrepare.
   Start checks:[] allows design to choose CLI/web/native/API after Process appears.
4. Run `python3 PATH/TO/THIS/native-entry.py start REQUEST.json --receipt
   TARGET/.guild/workflow-runs/entry-TASK`. Retain the exact request and run.
   Start creates Process with parent preparation Active; Show selects it.
   Neither action accepts draft or launches review/builder. If Show fails, reuse
   the retained run; never create another request key.
5. Finish design in the same original checkout/selection. Inspect every artifact
   and relevant baseline; record known decisions, checks and remaining gaps.
   Then use `python3 PATH/TO/THIS/native-entry.py contract RUN --receipt
   TARGET/.guild/workflow-runs/entry-TASK --checks FINAL-CHECKS.json [--step CONFIGURED_ID]`. The helper gets
   current source/contract from owning Root, executes actual note/OpenSpec check,
   retains output and supplies existing checkpoint. No local source JSON/hash
   reconstruction. A failed check sends no checkpoint. A stale/refused request
   remains inspectable; only a new deliberate evidence attempt uses --key NEW_KEY.
6. Inspect actual graph Status; native public Review is the sole parent review
   route, using the installed revust package/profile and original prior usage.
   Parent authorizes each ready review within remaining allowance. Do not run
   the portable revust launcher separately. Review acceptance unlocks the native
   assigned checkout/session; inspect its actual report and accept it through
   checkpoint. Do not manually create a parallel worker. Child remains same
   session for qualified corrections; use existing Retry/Review/checkpoint paths.
7. Product acceptance/local delivery still require their actual source-qualified
   observable evidence. Parent owns inspection, review and reconciliation; no
   tool approval may be answered by another session. Keep unknown effects and
   exhausted limits held. No push/publication/merge/install is authorized here.

A nonempty skeleton only makes preparation visible. Successful validation and
ContractPrepare do not claim independent plan review accepted or implementation
finished. Public Status preparation.gap names missing tools/artifacts; resolve
that gap without replacing the selected contract/history. The helper is a thin
CLI client, not an alternative task controller or policy service.

Before final ContractPrepare, write the full requirements list to FINAL-CHECKS.json
inside the source-excluded entry directory. Preserve all initially explicit
checks, add real final step/outcome/scenario/surface/expectation requirements.
For API use an actual API requirement (for example surface api and expectation
http_status200); for native UI use native/observed; for CLI use command with
actual expected exit. Public `guild workflow instructions` gives typed examples.
No generic command evidence substitutes for UI/API. ContractPrepare durably
freezes accepted checks with final contract; later effects cannot clear/change
them. Omitted checkpoint checks preserves old request identities and requirements.

The helper refuses receipt roots outside TARGET/.guild/workflow-runs/entry-TASK,
without editing .gitignore. Same-key retries use the stored intent/evidence before
reading a now-changed draft; changed --checks under the same key refuses. Use
probe --receipt with the same entry directory if discovery is repeated after
registration; it cannot fall back after a native intent or host gap.

When the initial list is empty, the helper requires --checks FILE at final
ContractPrepare. It never silently finalizes an implicit empty list. Explicit []
is reserved for a consciously selected flow without actual acceptance checks;
it cannot satisfy configured product acceptance.
