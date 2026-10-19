# Local review execution policy

This portable routing policy is a workflow preference, not permission
for an unrequested review, additional paid calls, implementation delegation or
publication. Existing explicit authorization persists. Default task limits are
2 plan-review rounds and, separately, 3 code-review rounds, including the first
review of each kind. A round is one dispatched invocation with all internal
stages and retries; another invocation consumes another round even after failure
or stop. Confirmed pre-start refusals consume no round; reconcile ambiguous starts.
Unused rounds do not transfer between kinds. No default aggregate process-count
ceiling applies; separately explicit user/task/provider limits still apply.
Record round history and actual starts; further rounds after exhaustion require
an explicit limit change. Installing or updating this policy starts no review.

For a new ordinary independent review (code, plan, or skill), use revust through
its launcher in the initiating session. Do not substitute a Codex/Claude/Agent
reviewer subagent, a new Guild agent tab, or the builder's self-review. This route
overrides generic Superpowers review-dispatch examples and the historical
claude-only/no-tui defaults. Preparation stays in the initiating session unless
the user explicitly requests delegation. Revust's own supervised provider
processes are the selected review engine; they are not extra builder sessions.

Honor an explicit alternative requested by the user. Already registered native
Guild tasks retain their pinned history/configuration/budget for independent
review; never move a task or create an identity to escape an exhausted ceiling.
A self-check is not independent acceptance. Questions, read-only investigation
and routine free checks do not automatically require a paid review.

Package selection on the destination host:
- Resolve the installed revust skill through its real registered path.
- A complete package contains bin/revust, scripts/launch-revust.sh, docs/ and
  integrations/skills/revust/SKILL.md. A stable user-selected package path may
  be registered during setup; never pin a versioned Cellar/cache path.
- Global configuration is ~/.config/revust; project configuration is .revust.
- Installation of workflow instructions supplies no provider configuration,
  authentication, review allowance or qualification for a new terminal host.

Read the actual skill and the relevant packaged CLI/archive documentation. Preserve
existing revust profiles/configuration unchanged unless the user requests a change.
Respect an explicit profile; otherwise use the destination's effective configured
default and inspect its roster and stages. Profiles are not supplied by this
bundle; missing configuration is a named setup gap. Preserve user-authored profile content unchanged.
Never infer executors from the initiating harness. No fixed claude-only rule.
Check remaining rounds for the review kind and any separately explicit
user/task/provider limits before dispatch. Record actual calls/retries/verification
as evidence; native Guild maxCalls does not enforce revust limits.

Inside Guild, retain GUILD_SESSION and GUILD_SOCKET, probe terminal capabilities
version 1, and use the launcher for both initial and correction rounds. Do not
launch native begin/ready alongside an external run. Unsupported Guild is an
explicit setup failure: never silently use --no-tui, another terminal, a different
caller identity, or self-review. Outside Guild, keep revust's supported host
selection. An explicitly requested headless run remains possible before start.

Keep stdout JSON and stderr separate. Codes 0/1/2 mean no findings/findings/tool
error; launcher code 3 means host failure. Never retry merely on 1. For an
ambiguous start recover the same request/job/artifacts before starting anything
else. Hide/close only hides the view; Cancel stops work. Missing/degraded/unverified
results are not PASS. Retain reviewed snapshot, findings, call count and limits.

## Completed review presentation

Pass `--auto-exit=1s` to the installed launcher by default so the completed
review exits and its terminal overlay closes promptly. This flag also
avoids the launcher's longer fallback delay overriding the user config. Honor
an explicit request to keep a particular result open. Wait for the same run's
terminal state, retain the result/archive and close its presentation with the
supported host command if the launcher leaves a completed view behind. In Guild,
`guild terminal close JOB --json` changes presentation only; never delete the
archive or cancel a live review just to close its window. A stuck completion
requires reconciliation of that same job and archived result, not a new review
or an invented clean host exit. No extra provider call is authorized to test
this preference.
