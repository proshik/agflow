# Review intent and routing

Choose whether independent review is needed before choosing a tool. Existing
explicit user/project routes and active task histories win over defaults.
Skipping an unnecessary stage is not missing evidence; omitting required coverage
is UNVERIFIED. Do not install a review engine just to perform a small fix.

## Specification review

Use one architectural reviewer and one pass when consequential design choices
benefit from independent scrutiny. Give the exact persisted contract and relevant
repository facts, actual request and approved decisions. First inspect scope
inflation against that request and agreement, then feasibility, boundaries,
compatibility, major missing scenarios and avoidable complexity. Exclude general code-review rosters,
synthesis, separate verification and automatic retries/re-review. The parent
checks evidence and resolves supported findings in the same contract. Findings
cannot independently authorize new product behavior; validation/review is not
user approval of proposals.

The execution intent is one reviewer, one stage, at most one provider attempt.
An engine's small profile name alone is not proof of this shape. Inspect its
resolved roster, stage enablement, retries and call ceiling before launch.
A failed pass is a reported gap, not permission to expand to a larger pipeline.

## Code review and adapter selection

Select independent code review for substantial changes, material integration
risk or explicit requirements. Scope it to requested behavior and affected
callers. Low-risk local fixes use final diff inspection and relevant tests unless
project rules require independent review. Do not turn optional polish into a
blocking new feature or keep cycling until no minor suggestion remains.

Use an available harness reviewer subagent or external review adapter when
allowed by actual user/project policy. A reviewer must be independent of the
implementation context. Native subagents are not a fallback around an explicitly
pinned engine. If the selected external adapter is revust, follow the
[revust adapter](revust.md); generic workflow skills do not require that engine.
Preserve configured provider/model choices and existing round history.

Selected implementation/code review uses the full effective configured review
profile: its original reviewer roster/lenses, enabled stages, provider/model/effort,
verification policy and applicable budgets. The specification-only single-pass
limits do not apply. Do not substitute one bugs/impl lens, impose a one-call cap,
or disable synthesis/verification to simplify the review or save time.
Choosing whether a low-risk task needs review is separate from executing it;
selection does not imply a lightweight/find-only mode. A specifically requested
reduced or diff-focused correction review follows its explicit scope and preserved
limits; do not infer that permission. `find` is a stage; `codex-only` and
`comprehensive` are profiles. A codex-only profile can run its full configured
pipeline; do not hardcode comprehensive or change user/project provider choices.
Normal engine conditions may skip work, such as verification with no findings;
do not force artificial calls. Preserve existing task histories and round limits.

## Ownership, evidence and limits

The initiating session owns review decisions, findings verification and continued
implementation. Record scope, snapshot, reason for selection/omission and outcome
at the scale of the task. A concise check record suffices outside a managed run.
Default ceilings are one plan round and two code rounds, including initial runs;
a ceiling authorizes no unselected stage. Preserve explicit tighter limits and
existing counts across engines/identities. No automatic plan re-review is allowed.
Changing a reviewed snapshot invalidates affected evidence, not all evidence.

Recover ambiguous starts by the original IDs before another dispatch. For an
infrastructure failure require cause, a changed condition and bounded free proof
of recovery where available; no default paid smoke or provider switch. If free
proof is unavailable, name the remaining uncertainty and obtain specific retry
authority and sufficient remaining allowance. A limit alone is not retry authority.
Separate model evaluations, publishing and installation keep their own authority.
