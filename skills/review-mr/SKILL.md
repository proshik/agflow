---
name: review-mr
description: Use to review someone else's GitLab merge request or to re-check the fixes for your own earlier review threads. Covers MR context, proven defects, comment drafts and inline anchors before publication. Not for comments on your own MR.
---

# Review a merge request

A review of someone else's MR is a read-only route, not a development request:
it changes nothing in their branch and starts no implementation work. If the
user separately asks for code changes, apply development-workflow to that
request. Comments on the user's own MR belong to fix-review.

Follow the project's instructions and the user's memory. Use the GitLab API
through an available MCP server or CLI after checking its schema.

## Collect the context

- Find the project, the MR and its reviewers from the link, number, remote or
  API. For "MRs waiting for my review", list open MRs where the user is a
  reviewer and separate new ones, re-reviews and drafts. For a named MR, do not
  ask for the scope again or list other MRs.
- Fetch the description, the linked issue, the source branch, the actual target
  branch, `diff_refs` (base, start and head SHA) and all discussions with
  pagination and full discussion IDs. Use the real target, never the default
  branch in its place. An author's reply is not a fix.
- Read the snapshot without switching the user's checkout:
  `git fetch origin refs/merge-requests/IID/head`, then `git show`, `git log`
  and `git diff BASE_SHA..HEAD_SHA`. Use an isolated copy only when a
  reproduction needs one, in the way the project allows.

## Hunt for defects

- Look for concrete broken scenarios and violated invariants. Compare with the
  target branch and check every caller of a changed helper.
- Classify each problem: introduced by the MR, pre-existing in the target
  branch, or local to your environment. A problem that does not reproduce on a
  fresh environment built from the MR head is local and belongs in your report
  to the user, not in the MR; the target branch is the control that tells
  introduced from pre-existing.
- Size checks to the scenario and run nothing the project forbids. Mark missing
  evidence as missing; a similar passing test does not prove the claim.
- Run an automated independent review only when the user asks for one or their
  configured route selects it, as development-workflow's "Select reviews"
  describes; a review of someone else's MR uses a code-review round.
- Verify every automated review finding in the code before you use it.

Summarise as: scenario | evidence | severity and regression | fix in this MR /
question / minor / out of scope. Report what you found, nothing invented to fill
the list.

## Draft and publish

Write comments as [comment-style.md](references/comment-style.md) describes and
show the complete, exact drafts in chat before publishing. Approving the MR,
resolving threads and creating follow-up issues each need their own instruction.

After the user authorizes publication:

1. Re-read `diff_refs`. If the head moved, re-check the affected conclusions and
   anchors first.
2. Post inline comments on added lines of the current diff, with the current
   base, start and head SHA, the path and the new line.
   [anchor-check.sh](scripts/anchor-check.sh) `BASE HEAD PATH LINE...` prints
   `ok` for an added line and `MISS` otherwise; move a MISS to an added line
   instead of posting blind.
3. Read the published notes back through the API and compare text and position.

Leave other people's threads open; resolve your own only when asked.

## Re-review your earlier threads

For each earlier thread, compare the original scenario, the requirement, the
author's reply and the new code, and conclude: fixed, partly fixed, not fixed,
or justified objection. Check the neighbouring entry points, the allowed case,
retry and partial failure, and new defects in the fix itself. Confirm that the
regression test fails on the old behavior. An author's reply alone does not
call for a new automated review round.

Keep your notes and evidence until the user asks for cleanup.
