---
name: spec-design
description: Use when preparing or revising a useful acceptance contract for substantial software changes or architecture-only work. Not required for settled local fixes, implementation dispatch or a duplicate plan.
---

# Spec design

Prepare only the design needed to resolve material scope or architecture choices.
A small fix with settled behavior normally needs the request, expected outcome
and relevant checks, not a separate specification. Respect explicit project
requirements. All preparation writes belong in the separate task session and its
worktree, never the
main checkout; do not dispatch a separate designer merely to write a note.

When a persisted contract is needed, honor the user's chosen format. Otherwise
existing target-project `openspec/` uses one matching change with
[OpenSpec preparation](references/openspec.md); without it use one existing
suitable document or one lightweight task note. Do not initialize OpenSpec
without a request or keep parallel plans. Validate only applicable tooling.

Record required behavior, scope boundaries, necessary compatibility, meaningful
edge cases and observable checks. Add architecture, alternatives, dependencies
and ordered tasks only where useful. Investigate actual callers before choosing
boundaries. For an open material choice compare a mature existing option with a
local implementation and recommend one; do not reopen an approved stack.
Ask only for material unresolved product choices. Record agreed decisions and
bounded assumptions, keeping exploratory proposals distinct from facts.

For substantial UI work agree a concrete visual/interaction target and relevant
states. A precise description suffices for a small clear change. A prototype
settles the target; it is not implementation acceptance or a new phase gate.

## Optional architectural review

Review is useful for consequential component boundaries, shared contracts,
migrations, recovery semantics or uncertain integration. It is unnecessary for
obvious changes following an established pattern. Record a short reason for
selection or omission where a contract is being prepared.

When selected, ask one independent architectural reviewer for one pass on the
persisted design and relevant repository facts. Focus on feasibility, boundaries,
compatibility, major omissions and needless complexity. Do not request general
implementation review, multiple lenses, synthesis or separate verification
stages. The initiating session checks findings and updates the same contract;
there is no automatic review loop. Preserve explicit project rules and existing
review limits. The invoking workflow owns the actual tool/host adapter.

Use a harness subagent or a managed designer only when independent exploration
or bounded research helps. Give requirements, facts, approved decisions and open
questions; do not present the parent's preferred answer as a fact. The parent
owns decisions and continued work; assigned designers do not launch review.

A simple handoff names the worktree, contract path/revision, expected behavior,
selected checks, decisions and remaining questions. Include digests and durable
receipts only when an actual downstream process requires them. A selected review
requires accessible persisted artifacts, not just a route description.
Architecture-only work ends at design_ready after the chosen checks; omission
of unnecessary independent review is not UNVERIFIED. Missing required evidence is.

Later corrections distinguish unfinished agreed behavior from a new request.
Keep agent-added platforms, recovery mechanisms and generalizations out unless
requested behavior demonstrably depends on them. Identify invalidated checks
without blanket reruns or another design/approval ceremony.
