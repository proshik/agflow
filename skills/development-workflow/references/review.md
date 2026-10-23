# Review intent and routing

Choose whether independent review is needed before choosing a tool. Existing
explicit user/project routes and active task histories win over defaults.
Skipping an unnecessary stage is not missing evidence; omitting required coverage
is UNVERIFIED. Do not install a review engine just to perform a small fix.

## Specification review

Use one architectural reviewer and one pass when consequential design choices
benefit from independent scrutiny. Give the exact persisted contract and relevant
repository facts. Ask about feasibility, boundaries, compatibility, major missing
scenarios and avoidable complexity. Exclude general code-review rosters,
synthesis, separate verification and automatic retries/re-review. The parent
checks evidence and resolves supported findings in the same contract.

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
