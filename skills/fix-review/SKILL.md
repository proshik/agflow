---
name: fix-review
description: Use to work through review comments on your own GitLab merge request. Covers verifying each thread by code or reproduction, verdicts, fixes inside the MR, reply drafts and the push command. Not for reviewing someone else's MR.
---

# Work through review comments on your MR

Follow the project's instructions and the user's memory. Use the GitLab API
through an available MCP server or CLI after checking its schema. A request to
look at the comments is an analysis in the current session that changes and
publishes nothing. A request to fix them is a development request: make the fix
through development-workflow.

## Collect the threads

Find the project and the MR from the link, number or remote; ask only when the
scope is ambiguous. Fetch the current user, all unresolved discussions with
full IDs, authors, positions and pagination, the source and target SHA, the
description and the linked issue.

## Verify each thread

- Keep the full discussion ID, the original text and the head SHA it refers to.
- Read the owner of the behavior, every real caller, the related invariants,
  tests and the linked issue.
- Back each verdict with code or a reproduction; a reproduction beats verbal
  agreement. A red test fails for the stated reason, not from a build or
  environment error. Check whether the behavior already existed in the target
  branch.
- When a reproduction needs a shared environment or secrets you lack, name the
  limit and the concrete scenario that would check it. A similar check does not
  prove the original complaint.

Per thread record: claim true, partly true or false; scenario and code; command
and observed result; regression or pre-existing or environment limit; severity;
task boundary; the minimal complete fix or a reasoned objection. Unverified
facts stay marked as unverified.

Summarise as: thread | scenario | evidence | severity | fix / reject / discuss /
out of scope. A fix for the same symptom or path belongs in this MR; propose an
unrelated problem separately and create nothing for it. When only analysis was
asked, hand over this table.

## Fix

- Before editing, record the original scenario, every entry point into the
  operation and the allowed behavior that must keep working.
- When the fix changes a restriction, find its purpose in the code and history
  first; a similar risk elsewhere does not justify removing it.
- Check the old behavior in an isolated copy without reverting anyone's work,
  so the regression test is shown to catch it.
- Never edit an applied migration in place; check seeds for semantic
  compatibility.
- Before a commit, confirm the author identity the project expects: a
  conditional git config (`includeIf`) may not apply at a new worktree path.

A worker's report names the starting ref and final commit, the change per
thread, the red and green commands with results, checks not run and reply
drafts.

## Reply and hand off

- Draft short replies in the team's language: what changed, or why the comment
  was not confirmed; where; how it was checked. State the limits of the
  evidence; a local environment problem is not an MR defect.
- Check replies and the MR description draft against the final diff and the
  checks actually run, including every service that has to be deployed. A CI
  configuration does not prove that a stage ran or blocks the merge.
- Show the verdicts, the exact drafts and the push command that names the MR
  source branch: `git push origin LOCAL_BRANCH:refs/heads/SOURCE_BRANCH`.
  Check `git branch -vv` first; never push to the target branch.
- After an authorized publication, use fresh full discussion IDs; if the head
  moved, re-check conclusions and anchors. Read back what was posted. Leave the
  reviewer's threads open; resolving them is the reviewer's call.

Report the MR, branch and local commits, checks run and unavailable, reply
drafts, publication state and what is left to the user.
