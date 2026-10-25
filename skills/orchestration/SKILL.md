---
name: orchestration
description: Use when delegating development work to managed sessions or subagents and supervising it. Covers assignments, supervision, parallel writers and Guild commands. Not for an independent review alone.
---

# Orchestration

The parent session owns scope, integration, acceptance and keeping the work
moving. development-workflow defines when a separate task session is required;
this skill covers how to run it.

## Choose the executor

Use what the current session can actually do, not what the harness name suggests.

- **Task session:** in Guild, a visible managed worker (commands below).
  Elsewhere, a native child that meets development-workflow's session definition.
- **Helpers:** native subagents for bounded investigation, checks or parts of a
  task. Read-only helpers need no worktree. Writers work in the assigned
  worktree; concurrent writers each get their own worktree, otherwise run them
  one at a time with explicit file ownership. Subagents often share the parent's
  cwd, so pass absolute paths.
- An assigned worker starts further task sessions only when its assignment says so.

## Assign

Every assignment states the goal, the worktree and branch, owned and excluded
paths, the agreed request or contract, the checks to run and the limits (actions
not allowed, review and call budgets). Mark proposals as proposals. Pass the
assignment as a file (`--from-file`).

## Supervise

- Wait with bounded waits or completion events, then check the actual result:
  diff, files and check output. A finished turn is not a finished task.
- After each result, take the next agreed step (check, review, next assignment)
  without waiting for a user reminder. Stay active while assigned work can
  progress.
- Send corrections to the same worker in the same worktree.
- Sequence coupled changes (shared interfaces, migrations) and check the
  combined behavior after integration.
- Route a worker's questions and approval prompts to the user. Answering another
  session's tool approval is the user's job, never yours.
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

`worktree create` without a task gives isolation only; start a worker there
before any task writes. Wait results: timeout or pending means check other
workers and wait again (at most 60 s); `done` means read the transcript and
inspect the checkout; `waiting` means the worker needs a human, so tell the user
which tab and leave it alone; `closed` or `exited` (exit code 6) is not success,
so read what remains before resuming.
