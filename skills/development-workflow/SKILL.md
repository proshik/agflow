---
name: development-workflow
description: Use for software implementation, bugfix and architecture requests. Covers task isolation, choosing how much process to use, persisting agreed behavior and selecting reviews. Not for advice-only questions or permission to deploy or publish.
---

# Development workflow

## Isolate every task

Before writing anything for a task (code, tests, specs, plans, notes), create or
reuse a task branch in a separate worktree, and do the work in a separate working
session bound to that worktree. A separate session has its own conversation, is
bound to the task worktree, can be continued, and can reach the user with
questions and approvals; in Guild it is a visible managed worker (see
orchestration). Read-only investigation may use the main checkout.

A development request is the assignment: it authorizes creating the task
worktree, starting the separate working session and running local implementation
and checks there, without asking again. Push, merge, publishing and other
outward actions still need explicit permission.

Keep the main checkout clean and leave the user's existing changes alone: never
stash, clean or commit them. If the harness cannot provide a separate session,
report that and stop before implementing; the parent does not write the change
itself. A worker already assigned to a task reuses its own session and worktree.

## Pick the route

Decide by uncertainty and consequences, not by file count or installed tools.
Project rules that require docs, specs or checks apply on either route.

**Short route** for a small change with clear expected behavior:
reproduce or inspect → fix → targeted checks → local commit. The request and the
expected outcome are the contract; no spec, plan or independent review.

**Full route** for large, risky or unclear work:

1. Investigate and discuss. Diagnose bugs; for design use Superpowers
   brainstorming and planning when available, or the same methods directly.
   Compare options and ask the user about material choices.
2. Agree the behavior with the user. For UI work, agree a concrete visual and
   interaction target (mockup, reference screen or precise description) and the
   states that matter.
3. Persist the agreement (below), select a review if warranted, then implement
   with engineering-quality. Architecture-only requests end once the agreed
   design is persisted and any selected review is resolved.

## Keep to the agreed scope

Build what the user asked for. Internal helpers and refactoring it needs are your
call. User-visible additions such as retry, recovery, new screens, settings,
modes or automation need the user's decision: propose them, then wait. A proposal
stays a proposal until the user agrees; saving, validating or reviewing a
document does not approve it. Keep decisions the user has already made.

## Persist the agreement

Use the format the user asked for. Otherwise, if the project already has
`openspec/`, use one matching change there; if not, write one lightweight note in
the task worktree (request, agreed behavior, scenarios, decisions, task plan).
Keep a single plan: no competing docs/superpowers plan or spec beside it.
Initialize OpenSpec only when the user asks. A small fix needs no OpenSpec change
unless project rules require one.

OpenSpec basics (confirm with the installed `openspec --help`):

```sh
openspec list --json
openspec new change CHANGE_ID
openspec status --change CHANGE_ID --json
openspec instructions ARTIFACT --change CHANGE_ID --json
openspec validate CHANGE_ID --strict --no-interactive
```

Follow `status` and `instructions` for artifact order. Read relevant baseline
specs and leave them as they are. `done`/`isComplete` means the documents exist,
not that the behavior works; archive only after the agreed scope is implemented
and verified. When asked to adopt OpenSpec, check which files
`openspec init --tools none` would touch before running it.

## Select reviews

Run an independent review when there is real risk (consequential architecture,
shared contracts, migrations, uncertain integration) or the user or project
requires one; otherwise inspect the diff and run targeted checks. The reviewer is
independent of the implementation context: a reviewer subagent or an external
tool, with an explicit user or project route taking precedence.

- **Spec review:** one architectural reviewer, one pass. It checks scope
  inflation against the request and agreed decisions first, then feasibility,
  boundaries and compatibility. The parent verifies the findings and updates the
  same contract.
- **Code review:** the full configured profile, with its reviewers, lenses,
  stages, model, effort, verification and budgets. Narrow it only when the user
  asks for a reduced correction review.
- **Limits:** 1 spec-review round and 2 code-review rounds, counting the first.
  A failed or stopped run counts unless it was refused before any provider
  started. Switching tools or IDs keeps the counts.
- **Failed external call:** find the cause and what changed before retrying. Ask
  the user before paid smoke tests, extra attempts or switching provider or model.

**revust.** When the route selects revust, follow its installed skill.
For spec review, run only the architectural lens (`--lenses`, using the actual
lens name), `--no-synthesis`, `--no-verify`, zero finder retries and
`max_calls=1`, set through supported flags or a scoped policy rather than by
editing the user's profiles. Dry-run first and confirm one reviewer and one call;
if the installed version cannot express this, report it. For code review, run
the configured profile unchanged (`find` is a stage; `codex-only` and
`comprehensive` are profiles). Exit code 1 means findings were reported. Use
`--auto-exit=1s` for finished review views.

## Finish

Inspect the final diff and behavior, report checks as engineering-quality
describes, and leave a local branch and commit where project rules allow.
Push, merge, publish, deploy, clean up or install globally only with the user's
explicit permission. Use orchestration when delegating.
