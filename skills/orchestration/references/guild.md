# Guild public host mapping

Read the installed `guild` usage and `guild instructions parallel`, `worktrees`
and `rules`, then `guild status --json`. Record observed executable/version or
build identity, caller/project, target checkout and supported operations. The
commands below are a mapping to public APIs, not a runtime service. Preserve
GUILD_SESSION/GUILD_SOCKET. An assigned task session cannot dispatch/steer other
sessions; these parent operations run only from an eligible initiating caller.
Conflicting installed workflow policy is an environment gap for reconciliation,
not authority to patch bootstrap, inspect Rust or erase identity.

| Need | Public command / evidence |
| --- | --- |
| Create worktree with visible managed task | `guild worktree create NAME --from PROJECT --base REF --from-file TASK --harness HARNESS --json` |
| Start in an existing assigned checkout | `guild session new --worktree PATH --from-file TASK --harness HARNESS --json` |
| Reconcile exact assigned identities/status | `guild agent list --json` and retained create/request receipts |
| Observe a bounded turn interval | `guild agent wait SESSION --timeout 30 --json` |
| Read exact conversation | `guild agent read SESSION --last N --json`, plus assigned durable report and actual checkout artifacts |
| Continue an eligible idle/done task | `guild agent send SESSION --from-file NEXT_TASK --json` |
| Restore a closed task tab | `guild session resume SESSION --json`, only after reconciling its existing conversation/process |

Resolve HARNESS explicitly; the CLI's default need not match the assignment.
Capture returned checkout/session/request IDs and verify actual start through
observations. Creation success alone does not prove task delivery or execution.
Do not use a Git worktree fallback or another terminal to bypass Guild's owner.

## Parent monitoring cycle

1. Reconcile the assigned roster with `agent list`; observe each exact ID with
   bounded waits (normally 30 seconds, never more than 60). Rotate fairly,
   handling available completions before waiting again. Use events if supported;
   only fall back to delayed bounded polling when waits are unavailable.
2. On timeout/pending, retain identity and check peers or do independent work,
   then wait again. On `done`, read the conversation and durable report: the turn
   ended, not necessarily the task. Check reported files, revision and evidence.
3. If the report requests a parent review/evaluation/continuation, perform that
   already-authorized checkpoint within its own budget. Record the result and
   next assignment. Do not leave the worker idle waiting for a user reminder.
4. Immediately before sending, reconcile current status/identity and eligibility.
   For an idle/done CLI-owned task use the same SESSION and a complete assignment
   via `--from-file`. Verify the returned start and observe the new turn. A send
   refusal is a gap to reconcile, not a reason to create a replacement worker.
5. `waiting` requires a real human question/approval in that worker's accessible
   tab. Identify it to the user; never send through the wait or answer the tool
   prompt. `unknown` is missing telemetry, not idle. `closed`/`exited` (exit 6)
   are not success: read what remains and reconcile process/conversation/report
   before an authorized resume. User-opened sessions are not parent targets.

The parent remains active until its authorized dependent work finishes or a
real human/external dependency blocks remaining progress. Closing/hiding a
surface, wait timeout and turn completion are distinct from cancellation and
acceptance. No monitoring persists after the parent execution ends. Do not
stop/remove sessions or worktrees as an implied cleanup step.
