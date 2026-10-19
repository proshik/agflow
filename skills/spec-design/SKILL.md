---
name: spec-design
description: Use when preparing or revising the acceptance contract for software changes or architecture-only work with existing OpenSpec or a lightweight task note. Not implementation dispatch or a duplicate plan.
---

# Spec design

Read target checkout instructions and decision evidence. Follow the explicit
user-selected contract format; otherwise detect `openspec/` in the actual target
project. When present, read relevant baselines/changes and use
[OpenSpec preparation](references/openspec.md), reusing a matching change.
When absent, use one lightweight acceptance contract in an existing suitable
project document or one task note. Skip OpenSpec setup, CLI, schema, spec deltas
and archive. Do not create `openspec/` without an explicit request to adopt it.
Record the selected format and detection evidence for all assigned sessions.

For a small clear fix, keep the note to scope, expected behavior, relevant edge
cases, checks and a short task list. Add architecture, alternatives and detailed
planning only where complexity or an open decision calls for them. Superpowers
brainstorming/writing-plans can help there; they are not mandatory ceremonies.
Keep one authoritative artifact rather than duplicate plans.

Before accepting the contract, resolve uncertainties that could change scope,
interaction or acceptance. Use existing context first; ask the user only for
material unresolved choices, with a recommendation where useful. Record approved
decisions, bounded assumptions and blocking questions in that same contract.
A blocking product choice remains pending until answered; question counts and
another round of approval for settled decisions add no readiness.

For a substantial UI change, agree an inspectable prototype and relevant states
before implementation; a small clear change can use an annotated screenshot or
precise description. Record the target revision/path, layout and behavior to
match, and any explicitly illustrative parts. Clarify whether a reference
specifies behavior, appearance or both. Cover interactions and changed states
at the scale of the task, including constrained layouts where relevant.

A design assignment receives requirements, repository facts, approved decisions
and open questions. Separate these sources from assumptions and proposed
solutions; do not pass exploratory preferred answers to an independent designer
as facts. Investigate actual behavior and callers before choosing boundaries.
For an open material choice, compare a mature existing option with a local
implementation, explain tradeoffs and recommend one for the user's decision.
Do not reopen an approved stack or feature merely to perform that comparison.

The contract records scope/non-goals, affected behavior, compatibility and
failure/recovery scenarios, architecture decisions, dependencies/resources,
observable acceptance evidence and tasks in dependency order. Keep unaudited
baseline behavior explicit. Trace tasks to scenarios and checks rather than
writing a second plan. In OpenSpec mode, use schema instructions and validation.
In lightweight mode, inspect the note for concrete scope, acceptance checks and
task dependencies; no schema validation result is implied. In both modes persist
the selected contract and inspect its accessible files.
Provider/worker restrictions do not block independently permitted local contract
setup/validation; stop the dependent operation at its actual permission/tool gap.

Contract handoff requires format, change ID only in OpenSpec mode, persisted
artifact paths, revision/digests, preparation evidence and readiness (`preparing`,
`persisted_validated` or `review_accepted`). For a lightweight note,
`persisted_validated` records a content check, not OpenSpec validation. Before a plan-review request, verify the persisted files;
route instructions or inline requirements are not that prerequisite. Missing
CLI/setup in selected OpenSpec mode produces an exact gap and a request for
preparation, not review readiness. No OpenSpec executable is needed in lightweight mode.

Designer reports this contract handoff, assumptions/questions and next checkpoint,
then stays available. Parent alone owns independent design review.
Resolve supported findings in this same contract. Classify later corrections
against it: unmet agreed behavior is unfinished work; a material choice omitted
during preparation is a preparation gap requiring resolution; a new user request
changes scope. Record the distinction and affected acceptance checks in the same
contract, preserving decisions, session history and remaining review allowance.
Architecture-only work stops
at independently reviewed `design_ready`; no implementation worker is implied.
A small bounded fix can use the root's concise contract instead of a separate
designer, while retaining the required implementation worktree and review route.
