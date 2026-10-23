---
name: acceptance-testing
description: Use when qualifying implemented acceptance scenarios, ongoing live observations or final integrated behavior against an accepted contract. Not proof of behavior from static validation or a request to launch unbudgeted evaluations.
---

# Acceptance testing

For small direct work, the request and expected outcome are the acceptance
contract. A concise check result is sufficient; separate report files, live model
calls and independent review are not implied. Use the task worktree for writes.
A skipped unnecessary review is not missing evidence.

Map each accepted scenario to its regression and relevant real API, browser,
native-window or CLI observation. Plan the observable outcome and required
resource/authorization before executing; use [evidence records](references/evidence.md).
Read the applicable engineering-quality surface reference for domain-specific
failure modes. Do not invent a surface that the change does not affect.

Observe important behavior throughout implementation to find failures early,
then repeat affected observations on the final version, matching any required
review.
For UI, compare the running changed surface with the contract's accepted visual
and interaction target in the relevant states and sizes. Retain the target
revision and observed result, and list differences with their disposition.
An unintended mismatch is FAIL; an unobservable required comparison is
UNVERIFIED. An accepted change to the target must be recorded in the contract.
Passing tests or independent review do not replace this comparison.
Record exact source/build/environment identities, inputs/gestures, expected and
actual results and retained evidence. A command acknowledgement or model judgment
about prose is not live behavior; fixture output qualifies only its fixture.

Retain introduced/pre-existing/unknown failure classification and its targeted or
base evidence; unavailable attribution stays unknown, and missing required checks
remain UNVERIFIED. A pre-existing failure is not automatically accepted or in scope
for repair. Parent decides its effect against the agreed acceptance contract.

A delegated builder reports its checks and remains available. The initiating
session selects and owns any required independent review, checks combined
revisions across branches and accepts final behavior. An edit invalidates affected earlier evidence; retain it
as historical and obtain the necessary new checks/review within remaining limits.

Use PASS/FAIL/UNVERIFIED per scenario. Missing credentials, permissions, a working
API/window/browser, paid-call allowance or prerequisite revision is a named gap
with owner and next action. Required gaps prevent final accepted/complete status;
static OpenSpec or skill validation cannot turn them into behavioral PASS.
Report implementation, verification and acceptance separately. "Ready for user
inspection" identifies any remaining human check; "accepted/complete" requires
all mandatory checks and decisions for the agreed scope, including UI conformity,
and parent inspection of the retained evidence. Do not mark the task complete
from a builder's done message or turn completion.
Behavioral model evaluations require their own authorized launch ledger, separate
from review calls. Publication, deployment and global rollout are separate actions.

Require a minimal real interaction before broad code review: actual initially
empty input → entered value → executed action → observed output → persistence
check where relevant. Use the affected API/CLI/native equivalent. This early
checkpoint diagnoses basic failures; a prototype/preview is not final acceptance
or an extra human approval gate. Record the accepted UI target and first useful
working preview in the assignment and report. Documentation-only work needs
file/link/inventory checks and affected local controls, not fabricated product
tests or unauthorized model evaluations.

Before rerunning checks after a correction, record the
[correction impact map](references/evidence.md). Retain justified unaffected
evidence and rerun invalidated observations on the final checked identities,
matching review identities when required.
Never call an unreviewed snapshot clean using an earlier review.
