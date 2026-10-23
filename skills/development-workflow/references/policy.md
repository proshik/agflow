# Effective portable policy

Resolve explicit task choices first, then applicable user/project rules, then
these defaults. Record only decisions needed for this task; a small fix
needs no settings service, role manifest or operational receipt framework.

| Choice | Default |
| --- | --- |
| Isolation | Separate task worktree AND separate working session before any task write, including notes/specs; preserve the main checkout and pre-existing changes |
| Process size | Small settled fix uses its assigned task session for implementation and targeted checks; substantial work adds justified design/delegation/review |
| Contract | Request and expected outcome suffice for local work; if persisted design is needed, explicit format wins, otherwise existing openspec/ uses one matching change and absence uses one lightweight note |
| Executor | Separate task working session; visible managed worker in Guild. Outside Guild, a native child must have separate conversation, explicit worktree binding, supervision/continuation and required human channels. Shared-cwd helpers do not qualify |
| Model/effort | Explicit role selection, otherwise harness defaults; respect supported project choices |
| Specification review | Conditional; one independent architectural reviewer, one pass, no synthesis, verification or automatic retry |
| Code review | Selected for material risk/substantial integration or explicit requirements; local low-risk fixes do not require it |
| Review tool | Applicable explicit user/project route, otherwise an available suitable adapter; no engine required merely to implement |
| Limits | At most 1 selected plan-review round and 2 selected code-review rounds, including initial reviews; ceilings, not required calls |
| Delivery | Concrete local branch/commit under applicable authority; push, merge, cleanup, publication, deployment and installation are separate |

Existing task registrations, effective model/profile choices and consumed budgets
remain authoritative. New invocations after failure/stop consume a round unless
confirmed refused before any provider start; reconcile ambiguous starts. Unused
plan rounds do not transfer to code. No process-count ceiling is added, but
explicit user/task/provider caps still apply. Unknown accounting withholds only
the affected review. Do not change IDs/tools to reset counts.

Qualify only capabilities the selected work needs: writes/check execution in
the task worktree, required network, relevant observation and human approvals.
Native tools already exposing result channels do not need another terminal host.
A missing optional adapter is not failure. Missing required task-session capability
blocks implementation; report the scoped gap without a root fallback. A required
gap remains UNVERIFIED.
Never copy personal provider configuration or infer a review roster from the
builder harness. Read legacy preference files only when relevant; they are
candidate preferences, not permission or grounds to initialize another process.

For review scope, adapter choice and bounded recovery see
[review intent](review.md). Host registration is optional; an existing managed
run retains its own owner/history and cannot be bypassed by a second controller.
