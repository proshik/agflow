# Portable development workflow

Use the globally installed development-workflow skill for ordinary implementation,
bugfix requests (one or several) and architecture-only work. The five shared
skills live in ~/.agents/skills; Claude registrations point to that same source.
They apply to Claude, Codex and OpenCode, with the initiating harness and actual
host capabilities recorded rather than inferred from a skill's name.

This standing workflow authorizes its bounded managed design/build sessions and
parent-owned reviews for a requested development task, without requiring the
word worktree or repeated phase approvals. Explicit task/project restrictions
and host tool permissions still prevail. Older delegation-only memories and
retired parallel-tasks instructions do not add another phase approval to this
workflow. Questions/advice alone do not launch workers or reviews.

Choose the contract from the actual target project: existing `openspec/` uses
one matching OpenSpec change; absent uses one lightweight task contract. Do not
initialize OpenSpec unless explicitly requested. Explicit user selection wins.
Skip OpenSpec-only CLI/schema/delta/archive steps on the lightweight route;
retain managed worktrees, parent revust plan/code review and live acceptance.
Scale design/planning detail to complexity. Complex design uses an independent
managed session with requirements/facts/approved decisions, excluding
exploratory preferred answers. Implementation uses managed separate worktrees;
Guild sessions are visible, and another host must qualify human question,
approval and resume channels. The parent actively supervises assigned sessions,
performs checkpoints and continues corrections in the same eligible session.

Use Superpowers as optional task-specific methods, not a required sequence or
installation prerequisite. Small clear tasks need no full brainstorming ceremony
or separate design/plan files. Apply relevant engineering methods directly when
skills are absent. No competing Plan.md/spec, reviewer-agent dispatch, repeated
phase approval or publication menu. Follow
engineering-quality and acceptance-testing for implementation and real API/UI/
native/CLI acceptance. Required missing evidence remains UNVERIFIED.

New independent review runs only through installed revust in the initiating
parent; read ~/.local/share/revust/REVIEW-ROUTING.md and its named skill. Preserve
existing task history with separate limits per task: at most 1 plan-review
round and at most 2 code-review rounds, including each initial review. One
invocation includes finders, synthesis, verification and internal retries;
another invocation consumes another round of the same kind, even after failure
or stop. A confirmed pre-start refusal consumes no round; reconcile ambiguous
starts. Do not transfer unused rounds between kinds or reset counts by changing
IDs or tools. There is no default aggregate process-count ceiling; separately
explicit user/task/provider limits still apply. Exhausted rounds require an
explicit limit change before another review of that kind. Model evaluations
need separate authorization; installing skills starts none. Keep the configured
provider/profile selection and completed-view auto-close preference.

Prepare local branches and concrete MR/PR text. Push, publication, main merge,
cleanup and deployment still require their applicable explicit authorization.
Never answer another session's tool approval or transfer provider secrets.

Separate required scope, necessary compatibility and optional additions. Require
a demonstrated dependency on requested behavior for agent-added shells/platforms;
otherwise defer them and preserve affected callers. Assign the concrete accepted
UI target and first useful working preview. Use small vertical checkpoints in the
same task/session: working behavior, evidence, next visible outcome and blocker.
Before broad code review, fill the actual empty input, execute the action, observe
output and verify persistence where relevant, or exercise the affected API/CLI/native
equivalent. Prototype/preview is not acceptance or an extra human approval gate.
Parent stops scope drift; unmet agreement remains unfinished, new requests change scope.

Distinguish managed workers (parent owns review/continuation) from user topic
handoffs. Before creating a topic session, name the review/continuation owner and
qualify a usable host-supported route and authority. Do not strip identity, assume
task promotion, default to a human courier or suggest skipping review. If promotion
is unsupported keep an eligible parent. Corrections record changed paths/behavior,
invalidated evidence, retained evidence with rationale, necessary reruns/re-review
and final reviewed identities. Preserve profiles, scope, histories and limits;
no blanket reruns for unaffected cosmetic changes and no old clean result for an
unreviewed snapshot. Defaults permit no plan re-review and one code re-review;
required exhausted coverage remains UNVERIFIED unless explicitly changed.
