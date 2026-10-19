# Effective portable policy

Policy lives in these versioned instructions plus explicit user/project/task
choices, outside Guild. No mandatory settings file/service or global provider
configuration is needed. Freeze effective values **and their provenance** in the
root receipt before dependent actions; settings presence never initiates work.

| Choice | Resolution |
| --- | --- |
| Contract | Explicit user choice; otherwise existing target-project `openspec/` → one matching OpenSpec change, absent → one lightweight task contract; no automatic initialization |
| Implementation/design | Explicit task choice, then applicable user/project instructions; portable default Codex |
| Model/effort | Explicit role choice; otherwise null = harness defaults; verify support, do not silently discard |
| Isolation/visibility | Managed separate worktree; visible in Guild, non-visible elsewhere only with qualified human/resume channels |
| Worker count | One builder for a bounded task; independent requested work only within the declared configured envelope; sequence coupled changes |
| New routine review | Initiator-only installed revust, explicit selection or its actual effective configured default/roster/stages |
| Limits | Portable defaults per task: at most 2 plan-review rounds and, separately, at most 3 code-review rounds, including each initial review; no default cap on actual process starts; explicit applicable limits take precedence |
| Delivery | Local branch and concrete proposal; push only by explicit command/manual user action; no standing publication/merge/global mutation |

Count plan and code rounds separately across coordinated branches of the same
task. A round is one dispatched review invocation, including its finders,
synthesis, verification and internal retries. The initial review counts; a new
invocation after corrections, a failed run or a stop consumes another round of
that kind. A confirmed refusal before any provider starts consumes no round;
reconcile ambiguous starts before dispatch. Thus the defaults allow one plan
re-review and two code re-reviews. Unused plan rounds cannot become code rounds
or vice versa. Record original round history and actual process starts for
observability; there is no default aggregate process-count ceiling. Explicit
user/task/provider limits still apply. Unknown history or exhaustion withholds
the affected review; report the gap and obtain an explicit limit change if more
rounds are needed. Changing tools, task IDs or profiles never resets the counts.
Configuration alone authorizes no provider calls.

Verify host versions/identity, target ref, session visibility, available harnesses,
explicit model/effort support, observation/resume, correlated human decisions,
separate tool approvals, review host protocol and resource coordination. Binary
presence or a config key is not capability proof. Outside Guild, Git plus a
qualified existing session/terminal adapter can supply worktree support; lacking
a native terminal worktree command is not failure by itself. A non-visible route
requires a bounded free qualification of its actual question/answer/resume and
approval surfaces before dispatch; no model call to guess. For agterm only when
actually selected, read its available skill/public CLI and map cwd/program/task
binding, returned IDs, explicit-target observations and recovery. No agterm
invocation, new adapter runtime or universal environment scrubbing is implied.

## Optional legacy preference interpretation

Only when relevant, read existing user-authored legacy inputs read-only. Guild's
main-checkout `.guild/guild-workflow.json` and `.guild/guild-agents.json` are an
optional example, never a prerequisite, portable defaults owner or copy target.
Use the public project identity/read-only Git metadata to resolve the owner; do
not inspect Rust types or ask Guild to initialize portable policy.

| Legacy input | Interpretation for this workflow |
| --- | --- |
| Workspace base / completion targetBranch | Candidate ref preferences; resolve actual accepted refs, never assume main/master |
| Builder/implementation role and roles harness/model/effort | Candidate role choices, checked independently against host capabilities |
| contract.system / openspec.enabled | Legacy metadata does not override current explicit choices or actual target-project directory detection |
| review.skill / transport / native profile / registration / automatic switch | Legacy native metadata, not revust routing, provider roster or permission |
| Native maxCalls / correction limits and archived usage | Preserve original native limits/history; no new external allowance or reset |

Absent legacy files are normal. Invalid JSON, unknown schema/values, unresolved
role references and conflicting choices are named errors/conflicts; preserve the
original bytes and report the exact affected selection. Explicit current user
choices win over conflicting valid preferences. Never silently overwrite/reset,
copy native executors into revust or force global provider settings. If legacy
automation/installed instructions would produce a second review, report that
dependent routing gap for its owner rather than mutate settings or dispatch both.
Old native registrations retain immutable history/configuration/limits; inability
to use the new route is a named legacy case, not authority for either launch.
Persisting/migrating preferences requires its own exact proposal and authorization.
