---
name: spec-design
description: Use when preparing or revising a useful acceptance contract for substantial software changes or architecture-only work. Not required for settled local fixes, implementation dispatch or a duplicate plan.
---

# Spec design

Bridge engineering investigation and discussion to the chosen persisted format;
do not invent a solution and present it as user requirements.

Start from the actual user request: request → investigation/discussion → agreed
behavior → persisted change when useful or explicitly required → implementation
and relevant checks. For bugs use diagnosis; for ambiguous substantial work use
relevant Superpowers brainstorming/planning methods before freezing the design.
Use the same engineering methods directly if the plugin is unavailable; neither
installation nor every Superpowers skill is a mandatory sequence.
Superpowers supplies task-relevant engineering methods in both short and
substantial routes. Small settled local fixes and bounded UI trials (for example,
trying an agreed button placement) need only the request, expected outcome and
constraints, plus targeted verification; brainstorming, a separate plan and a
specification are not mandatory unless explicit project rules require them.
For substantial or ambiguous work, investigate/discuss and reach agreement
through suitable methods before persisting the agreement.

OpenSpec stores agreed behavior, scenarios, significant accepted
choices and one implementation task plan; it does not invent features or add a
second design/planning process. Spec-design bridges those methods to the chosen
persisted format. With OpenSpec selected, keep the authoritative implementation
plan there, reconcile relevant existing drafts before implementation and avoid a
competing docs/superpowers specification or plan. Do not initialize OpenSpec or
rewrite baseline specifications automatically. Existing openspec/ alone does not force a change
for a minor fix; real project rules and explicit requirements still apply.
A small fix with settled behavior normally needs the request, expected outcome
and relevant checks, not a separate specification. Respect explicit project
requirements. All preparation writes belong in the separate task session and its
worktree, never the main checkout; do not dispatch a separate designer merely to write a note.

When a persisted contract is needed, honor the user's chosen format. Otherwise
existing target-project `openspec/` uses one matching change with
[OpenSpec preparation](references/openspec.md); without it use one existing
suitable document or one lightweight task note. Do not initialize OpenSpec
without a request or keep parallel plans. Validate only applicable tooling.

Distinguish requested/approved product behavior, demonstrably necessary
compatibility or technical constraints, and optional agent suggestions. Keep this
lightweight; no provenance table is required for a small fix. Strictly necessary
internal helpers/refactoring are ordinary implementation choices. Added visible
capabilities such as Retry, session recovery, screens, settings, modes or
automation need an actual user decision before becoming requirements or code,
unless already explicitly authorized. Do not ask again about settled choices.
A clearer error does not silently become session recovery. Draft proposals stay
explicitly proposals; saving them or passing validation/review is not user
approval. Do not hand speculative recommendations to a builder as accepted facts.

Record agreed behavior, scope boundaries, meaningful scenarios and observable
checks. Capture significant accepted choices and one implementation task plan
in the selected format. Investigate actual callers before choosing boundaries. For
an open material choice compare a mature existing option with a
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
persisted design, actual request, approved decisions and relevant repository
facts. First inspect scope inflation against that request and those decisions;
then inspect feasibility, boundaries, compatibility, omissions and complexity. Do
not request general
implementation review, multiple lenses, synthesis or separate verification
stages. The initiating session checks findings and updates the same contract;
review findings cannot authorize new product behavior. There is no automatic
review loop or additional provider attempt. Preserve explicit project rules and existing
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
