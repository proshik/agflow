<!-- agflow:begin -->
# Portable development workflow

Use development-workflow for requested implementation, bugfixes and architecture
work. The five shared skills live in ~/.agents/skills. Record actual harness/host
capabilities when needed; a skill name does not prove tool availability.
Questions and advice alone launch no workers, reviews or models.

Always create or reuse a separate task branch/worktree before writing any code,
tests, specification, plan, note or generated task evidence. Keep the main
checkout free of task changes and preserve pre-existing user work. Read-only
investigation may use it.

Every task change requires both a separate task worktree and a separate working
session, including minor bugs, documentation and preparation. The initiating
parent owns scope, supervision, acceptance and continuation; it must not implement
through paths into an empty worktree. In Guild the worker is a visible managed
session. Outside Guild a harness-native child qualifies only with a real separate
conversation, explicit worktree binding, supervision/continuation and required
human question/approval channels. A helper sharing parent cwd/state does not
qualify. Missing required session capability blocks implementation; report the
scoped gap without a root fallback. The parent may assign the full request;
preparation/design writes belong to the task session. Existing assigned workers
reuse their own session and tree without nesting.

For small settled local changes and minor bugs, use the short route: worktree +
separate working session →
inspect/reproduce → implement → targeted checks → local commit under applicable
authority. No separate specification, designer, process graph,
plan review, independent code review or durable receipt framework is mandatory.
Project-specific documentation/check requirements still apply. Classify by
uncertainty and consequences, not file count or installed tools.

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

When persistence is selected, explicit format wins; otherwise use one matching
change in existing openspec/ or one lightweight note if absent.

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

Specification review is conditional on consequential architectural choices,
shared contracts, migrations or integration uncertainty. When selected, use one
independent architectural reviewer, one pass, no synthesis, separate verification
pipeline, automatic retry or re-review, with at most one provider attempt. First
inspect scope inflation against the actual request/approved decisions, then
feasibility, boundaries and compatibility. Findings cannot authorize new product
behavior. The parent checks findings and updates the same contract. Independent code review is selected for material risk,
substantial integration or explicit project/user requirements. An omitted
unnecessary stage is skipped; missing required evidence remains UNVERIFIED.

General skills specify review intent, not a mandatory review engine. Honor the
applicable explicit user/project route; otherwise use an available suitable
native reviewer or external adapter. A reviewer must be independent of the
implementation context. External adapters must express the selected scope,
stage shape and applicable limits. The one-reviewer/pass/attempt restriction and
omitted synthesis/verification apply only to specification review.
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
Default ceilings, only for selected reviews, are 1 plan round and 2 code rounds,
including initial invocations. Failed/stopped invocations count unless confirmed
pre-provider refusals; reconcile ambiguous starts. New invocations need remaining
allowance; changing tools/IDs never resets it. No round transfer or automatic
additional review; explicit task/provider limits prevail. Evaluations require
separate authority. Configuration and installation authorize no calls.

Consider actual harness-native subagents for bounded investigation, implementation
and checks when they reduce total work. Check checkout binding, filesystem
sharing, permissions, concurrency, results and needed human channels. Read-only
helpers need no additional worktree. Writers use assigned task worktrees;
concurrent writers use separate trees, otherwise sequence explicit ownership.
Native helpers do not replace the mandatory task session. In Guild use public
host APIs for the visible managed worker. Without required session capability,
report a scoped gap and withhold implementation; do not fall back to root writes.
A native process graph is optional and must support the selected lighter route
before registration. Existing runs keep their owner/history; no second controller.

The parent owns scope, supervision, integration and continuation. Inspect results
and execute the next authorized checkpoint; do not wait for user reminders or
finish while assigned work can progress. Do not answer another session's tool
approval. Native helper IDs/results suffice for bounded work; durable receipts
and atomic reports are for managed recovery/shared resources that need them.
Qualify only capabilities required by the actual assignment, using harmless
bounded evidence under existing authority, without blanket access requests.

The worker tests before handoff/review; the parent checks results and necessary
final behavior, without a full duplicate suite absent a changed concern.
Apply engineering-quality and acceptance-testing proportionally. Check real
changed behavior early; docs-only work uses file/link/inventory and affected local
controls. Tests/static validation do not prove live UI/API/model behavior.
After corrections rerun affected checks, retaining justified unaffected evidence;
no blanket full-suite/review repetition for cosmetic changes. Classify failures
as introduced/pre-existing/unknown and do not repair unrelated issues by default.
A requested clearer error does not automatically include retry/session recovery.

Recover original dispatch/review IDs before repeating ambiguous work. External
failure retries require cause, a changed condition and bounded free recovery
proof where available; no default paid smoke or provider switch. If proof is
unavailable, name the gap and obtain one specific retry decision with remaining
allowance; explicit retry authority does not turn uncertainty into proof.
Push, merge, publication, cleanup, deployment and global installation keep their
applicable separate authorization. Installation never starts development.
<!-- agflow:end -->
