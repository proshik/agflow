---
name: engineering-quality
description: Use when implementing or correcting software against an accepted contract, especially shared helpers, resources, dependencies or user interfaces. Not a standalone broad audit or permission to redesign.
---

# Engineering quality

Apply [common quality](references/common.md) to the accepted task, then read
only the relevant surface: [backend/web](references/backend-web.md),
[desktop](references/desktop.md) or [CLI](references/cli.md). These are methods
for the assigned builder, not delegation or independent-review authority.

Pin each regression to an acceptance scenario and observe its failure for the
right reason before fixing code. Verify the entire same scenario and affected
callers; avoid a nearby refactor that does not serve it. Inspect the resulting
files/diff, run the target project's required checks and retain exact evidence.
A green branch alone does not establish combined or live acceptance.

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
