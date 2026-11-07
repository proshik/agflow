---
name: merge-retro
description: Use after GitLab merge requests are merged to review what happened. Covers merge facts, commits added after your last check, human and automated review findings, issue-tracker updates and cleanup checks when asked. Not for open MRs.
---

# Retrospective on merged MRs

Follow the project's instructions and the user's memory; check the schema of
any GitLab or issue-tracker tool before use. A retrospective runs in the current
session and changes nothing by itself; fixes it uncovers go through
development-workflow.

## Collect the facts, in this order

1. **Merge facts.** List MRs with pagination and filter by the actual
   `merged_at` in the requested period; creation date is not merge date. For
   each record `iid`, title, `merged_at`, `merged_by`, `sha` (source head at
   merge), `merge_commit_sha` and `squash`.
2. **Commits after your check.** After `git fetch origin`,
   `git log --oneline LAST_CHECKED_SHA..MERGED_SHA` lists work you did not
   see; its messages usually name the finding. With no such commits anywhere, check
   whether anyone reviewed at all.
3. **Discussions.** Fetch all with pagination, set system notes aside and read
   every other note, plain comments included. Per finding: what the reviewer
   saw, what it threatened, how it ended (fixed, moved to an issue, rejected).
   Note findings the reviewer downgraded after checking.
4. **Human against automated review.** Tabulate from saved reports: MR |
   human finding | kind | raised by (reviewer, round) | our outcome. Findings
   nobody raised show what no reviewer sees; findings raised and then rejected
   by the session are analysis errors, not review gaps.
5. **Issue states.** Fetch each issue's status and available transitions;
   transition names differ between projects, so never guess them.
6. **Target drift.** `git log --oneline BASE..TARGET` shows what landed during
   the work; it explains conflicts and duplicated work.
7. **Timeline** from saved task notes, worker reports, session IDs and review
   archives. Missing data stays missing.

## Analyse

Lead with the result and its grounds, then reviewer findings and why they were
missed, the value of tests and manual checks, time lost and improvements with
their source, using [analysis-frame.md](references/analysis-frame.md). Report
correct work as correct. Change skills or rules only when asked. Keep the
retrospective out of MRs and issues.

## Update issues when asked

A merge is not a deployment or a closure: move each issue only to the status
the current phase and the request support. Comment with the MR number, merge
date, merge or squash SHA and remaining verification steps, then read the status
back. When only analysis was asked, propose the updates.

## Clean up when asked

- First save task notes, reports, review artifacts and needed logs outside the
  worktree.
- Check uncommitted and ignored files, local against merged SHA, extra commits
  and active sessions. After a squash merge `git branch --merged` misses the
  branch: compare the MR state and the source SHA at merge.
- Remove a worktree with the mechanism that created it, without `--force`; the
  branch stays. Show ignored files that would be deleted and wait for
  permission. A refusal over an active session or a dirty tree stands.

Report the updated issues, saved evidence, removed worktrees and remaining
blockers.
