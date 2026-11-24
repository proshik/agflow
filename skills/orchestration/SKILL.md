---
name: orchestration
description: Use when delegating development work to managed sessions or subagents and supervising it. Covers assignments, supervision, parallel writers and Guild commands. Not for an independent review alone.
---

# Orchestration

The parent session owns scope, assignments, shared resources (environments,
locks, capacity), the links between tasks, integration and publication on the
user's word, and keeping the work moving. A task session runs implementation,
checks, the required review, rebases and fixes for review comments in its
worktree, and publishes only when its assignment says so. development-workflow
defines which executor a task gets; this skill covers how to run it.

## Choose the executor

Use what the current session can actually do, not what the harness name suggests.

- **Task session:** in Guild, a visible managed worker (commands below).
  Elsewhere, a native child that meets development-workflow's session definition.
- **Subagents:** the harness's own subagents, for a bounded task that
  development-workflow gives to a subagent, and for investigation, review, checks
  or parts of a larger task. The harness decides how many run, in the
  foreground or background, and of which type. Read-only subagents need no
  worktree. A writer works only in the task worktree: the harness's own
  isolation where it has one, otherwise a worktree the parent creates and names
  by absolute path, since subagents often share the parent's cwd. Concurrent
  writers each get their own worktree, otherwise run them one at a time with
  explicit file ownership.
- Give a subagent the same assignment fields as a session, check its diff and
  commit as you would a session's report, and bound the wait; tell the user
  about a subagent that stops reporting.
- An assigned worker starts further task sessions only when its assignment says so.

## Assign

Every assignment states the goal, the worktree and branch, owned and excluded
paths, the agreed request or contract, the checks to run and the limits (actions
not allowed, review and call budgets) and who integrates and publishes. Mark
proposals as proposals. Pass the
assignment as a file (`--from-file`). Before starting the worker, copy into the
worktree the ignored local files the task needs (review configuration, local
settings).

Run at most two or three workers at a time and integrate finished work before
starting more. A note or a backlog entry gets no worktree of its own.

## Supervise

- Wait with bounded waits or completion events, then read the report and check
  the facts it names (commits, review result, publication). A finished turn is
  not a finished task.
- After each result, take the next parent step (shared resource, link to
  another task, integration, next assignment) without waiting for a user
  reminder. Stay active while assigned work can progress.
- The user may also direct a worker in its own tab. Check the branch state
  before integrating or sending a step, so the same step does not run twice.
- When asked for status, give one line per tab: the task name, what it is
  doing and whether it waits for the user.
- Send corrections to the same worker in the same worktree.
- Sequence coupled changes (shared interfaces, migrations) and check the
  combined behavior after integration.
- A worker asks the user its own questions in its own tab; tell the user which
  tab is waiting. Route a helper's questions to the user. When the user says
  they do not understand a question, rephrase it and wait; do not pick an option
  for them. Answering another session's tool approval is the user's job, never
  yours.
- A worker reports problems with shared resources to the parent instead of
  fixing them.
- Stop sessions or remove worktrees only when asked.

## Guild commands

Read `guild instructions parallel` and `guild instructions worktrees` once. Pass
`--harness` explicitly; the default may not match the assignment.

| Need | Command |
| --- | --- |
| New worktree with a worker | `guild worktree create NAME --from PROJECT --base REF --from-file TASK --harness HARNESS --json` |
| Worker in an existing worktree | `guild session new --worktree PATH --from-file TASK --harness HARNESS --json` |
| Sessions and their status | `guild agent list --json` |
| Wait for a turn | `guild agent wait SESSION --timeout 30 --json` |
| Read what it said | `guild agent read SESSION --last N --json` |
| Send the next task or a correction | `guild agent send SESSION --from-file NEXT --json` |
| Reopen a closed tab | `guild session resume SESSION --json` |

`worktree create` without a task gives isolation only; a session or a subagent
does the task writes there. Wait results: timeout or pending means check other
workers and wait again (at most 60 s); `done` means read the transcript and
inspect the checkout; `waiting` means the worker needs a human, so tell the user
which tab and leave it alone; `closed` or `exited` (exit code 6) is not success,
so read what remains before resuming.
