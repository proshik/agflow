# Review execution policy

This policy describes selected reviews; it does not require review for every
change or authorize provider calls from configuration alone. Explicit user/project
routes and existing registered task histories take precedence. Installation,
read-only investigation and routine checks start no review or model evaluation.

## Intent before engine

A small settled low-risk fix normally uses targeted verification and final diff
inspection in its task worktree. Select independent code review for substantial
changes, material integration risk or explicit requirements.

Specification review is optional. Select it for consequential architecture,
shared-contract changes, migrations, recovery semantics or uncertain integration.
When selected, request one independent architectural reviewer, one pass, at most
one provider attempt. No general code-review roster, synthesis, separate
verification stage, automatic retry or re-review. The parent validates findings
first against the actual request/approved decisions for scope inflation, then
against feasibility, boundaries, compatibility and repository facts. Findings
cannot independently authorize new product behavior, and review is not user
approval of a proposal. A profile's name does not prove its
execution shape; inspect effective stages, retries and call limits before launch.

## Adapter choice

Honor an explicit user/project engine first. Otherwise a harness-native reviewer
subagent or external adapter can implement the intent. Review context must be
independent of the builder's reasoning; a builder's self-check is not independent
review. A pinned route cannot be bypassed by choosing another tool or identity.
Native helpers are permitted for useful non-review work under actual authority.

Revust is an optional external adapter. If selected, resolve its installed skill
and complete package through supported registration, retain its launcher/host
identity, and follow its docs. Its single-reviewer composition, disabled
synthesis/verify, zero finder retries and one-call ceiling must be confirmed for
architectural review. Do not overwrite personal profiles or modify the engine as
an incidental fallback. If this intent is unsupported, name the exact limitation
rather than running a larger pipeline. Setup supplies no provider credentials.
Generic workflow skills do not require a particular engine or model.

Keep archives and preparation writes in the task worktree or an explicitly
selected retained location; never dirty the main checkout. Preserve authored
configuration, models and effort. Do not infer reviewers from the initiating
harness. Existing native managed runs retain their owning controller, pinned
configuration/history and total budget; do not launch a competing external run.

## Accounting and evidence

Default ceilings are one plan-review round and two code-review rounds, including
initial invocations, only when selected. Architectural review remains one
reviewer/attempt within its round. A new invocation after a failed/stopped run
uses another round; a confirmed refusal before provider start does not. Reconcile
ambiguous starts and preserve counts across tools, IDs and branches. Unused
rounds cannot transfer. No default aggregate process cap applies; explicit call,
task or provider limits still apply. Exhausted required coverage stays UNVERIFIED
until an explicit limit or acceptance change. An unnecessary skipped stage is
not an exhausted or missing review.

Retain exact scope/snapshot, selected route, findings, incomplete outcomes and
actual calls at the scale of the task. Recover original job/request/archive IDs
before repeating an ambiguous launch. Closing a view does not cancel a live run.
Do not claim an earlier clean review covers new changes. After corrections repeat
only affected checks and required review, without an automatic loop for minor
polish. Model evaluations require separate authority and accounting.

## Failure and presentation

Before retrying infrastructure failure establish cause, a changed condition and
bounded no-generation proof from the actual failed route where available. No
default paid smoke, provider switch or identity/budget reset. If free proof is
unavailable, name the uncertainty and ask for one specific retry decision with
sufficient remaining allowance. Waiting or permission is not recovery evidence;
keep the missing qualification UNVERIFIED and assess any actual result separately.

For revust, follow documented exit/report semantics; findings are not a retry
reason. Use `--auto-exit=1s` for completed review presentation unless explicitly
requested otherwise. Preserve results and reconcile the same job if presentation
fails; do not rerun a review just to close its window. Other adapters use their
supported result channels without creating an extra terminal or report pipeline.
