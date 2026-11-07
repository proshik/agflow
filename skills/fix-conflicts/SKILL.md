---
name: fix-conflicts
description: Use to resolve conflicts between your own GitLab merge requests and their target branches while keeping both sides. Covers the actual target, merge preview, resolution, checks against both parents and the push command. Not for review comments or someone else's MR.
---

# Resolve conflicts in your MRs

Follow the project's instructions and the user's memory. Use the GitLab API
through an available MCP server or CLI after checking its schema. Resolving a
conflict changes the MR branch, so do it through development-workflow; this
skill covers how.

## Establish the versions

- Fetch the current user and only the requested open MRs. For "all my MRs",
  walk the projects with pagination; for one MR, do not widen the list.
- Separate a real conflict from `checking` or `unchecked`: wait for GitLab to
  recompute the same MR; a transient status is not a conflict. A conflict may
  come from a single file, so read the actual conflict list.
- For each MR record the source branch, the actual target branch, source and
  target SHA, the linked issue and `diff_refs`. Never assume the default
  branch: a release branch must not receive the default branch wholesale.
- Fetch the refs without switching the user's checkout and preview with
  `git merge-tree --write-tree --name-only SOURCE_SHA TARGET_SHA`. It changes
  no files or index but writes git objects. Read the target's new commits and
  both sides of each conflict.

## Resolve

- Merge the target branch into the local MR branch in the task worktree,
  keeping history. Rebase or rewrite published history only when asked. When
  the project requires separate permission for the merge commit, prepare the
  exact command and stop; `--no-commit` alone still allows a fast-forward, so
  add `--no-ff`.
- Resolve each hunk on its merits; never take ours or theirs wholesale.
- **Appended code.** When both sides appended to the end of the same file
  (often tests), git can pull a shared closing line out of the conflict. Read
  both versions whole. [resolve_append.py](scripts/resolve_append.py) `FILE`
  rebuilds a file with exactly one such hunk whose sides end at the same
  nesting level; use it only after checking that, then reread and compile.
- Merge imports. Keep the meaning of both sides in the target's formatting and
  touch only files in scope.
- Generated and version-number files (build numbers, lock files, generated
  seeds) follow the project's rule and its current generator or merge driver.
  Regenerate rather than hand-merge, and check that a configured driver
  actually works.
- Semantic conflicts follow the agreed contract. Ask the user only when the
  remaining options change required behavior.

## Check the merge

- No conflict markers remain.
- Diff the result against **both** parents and check what git joined without a
  conflict: callers of shared functions, SQL and data ownership, test mocks,
  defaults, prompts, translations and new dependencies.
- Applied migrations stay unchanged; new ones are unique and correctly ordered.
  An earlier timestamp in the branch does not mean it runs before migrations
  the target already shipped: check the supported upgrade sequence. Never edit
  the migration history table to get past an error.
- Run the original scenarios of both sides on the integrated result under the
  project's test rules. Fix an environment failure without deleting user
  resources or weakening tests.

## Hand off and push

- Show the verified diff, the test results and the push command:
  `git push origin LOCAL_BRANCH:refs/heads/SOURCE_BRANCH`.
- Before an authorized push, refetch source and target and confirm they match
  what you checked, and that the local branch fast-forwards the remote source.
  If the remote moved, check the new commits and integrate them in the same
  session; checks from the old snapshot do not carry over. Never force push,
  and do not chase a moving target endlessly.
- After an authorized push, verify the remote SHA and the fresh status of each
  MR, allowing GitLab time to recompute. Without a push, do not report the
  conflict as resolved.

Report per MR: local branch and commit, checks after the merge, push state, how
both sides were kept, migration, seed and environment limits, and what is left
to the user.
