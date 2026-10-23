---
name: engineering-quality
description: Use when implementing or correcting software against an accepted contract, especially shared helpers, resources, dependencies or user interfaces. Not a standalone broad audit or permission to redesign.
---

# Engineering quality

Use the request and expected outcome for a small fix; a separate design contract
is not required. Work in the assigned separate task session and worktree. Select checks by affected
behavior; do not add a report or independent review merely to apply this skill.

Apply [common quality](references/common.md) to the accepted task, then read
only the relevant surface: [backend/web](references/backend-web.md),
[desktop](references/desktop.md) or [CLI](references/cli.md). These are methods
for the assigned builder, not delegation or independent-review authority.

Pin each regression to an acceptance scenario and observe its failure for the
right reason before fixing code. Verify the entire same scenario and affected
callers; avoid a nearby refactor that does not serve it. Inspect the resulting
files/diff, run relevant tests and the target project's required checks before
handoff/review, and retain exact evidence. The parent checks results and necessary
final behavior without a duplicate full suite absent a changed concern.
Classify failing checks as introduced, pre-existing or unknown using the targeted
and base-comparison guidance in [common quality](references/common.md); preserve
evidence and report acceptance impact without automatically repairing unrelated
failures. A green branch alone does not establish combined or live acceptance.

For changed UI, implement the accepted visual and interaction target from the
contract. Inspect the real changed surface early, including relevant constrained
layouts, and compare it with that target before handoff. Check composition,
spacing, sizing, labels, controls and behavior using project components/tokens.
Correct unintended differences; a material alternative needs an agreed contract
change. A mockup or geometry test alone cannot establish visual conformity.
Report remaining mismatches and unavailable observations explicitly rather than
calling the UI complete.

When discovery contradicts the contract, report the fact and revise the sole
contract (OpenSpec change or lightweight task note) with the root before dependent work. A material open dependency
or product choice needs the user's decision; preserve already approved choices.
Report unavailable tests/resources explicitly. Keep corrections in the assigned
session and hand off the exact snapshot for parent-owned review/acceptance.

Build small observable vertical checkpoints in the same task/session. Reach the
first useful working preview from the assignment early: before full code review,
enter a value into the actual initially empty UI input, execute the action,
observe output and verify persistence where relevant (for example by reopening).
Use the equivalent affected API, CLI or native surface for non-web work. Record
actual inputs, outputs and snapshot; missing access is UNVERIFIED. A prototype or
first preview is not final acceptance and adds no automatic human approval gate.
Continue authorized work after intermediate checkpoints.

Keep requested/approved product behavior, demonstrated compatibility/technical
constraints and optional suggestions distinct. Necessary internal helpers or
refactoring are ordinary implementation choices. Added user-visible capabilities
need an actual user decision unless already authorized; saved specs or review
findings cannot authorize them. Do not reopen settled decisions.
An agent-added shell/platform needs a demonstrated dependency on requested behavior;
otherwise defer it. Preserve affected callers. Report each checkpoint as working
behavior, evidence, next visible outcome and actual blocker, including the accepted
UI target and first working preview. An unmet contract is unfinished work; a new
user request changes scope. Before corrections use the
correction impact map in acceptance-testing and its bundled evidence guidance
to identify invalidated and retained evidence and the required checks, without
blanket reruns.
