<!-- agflow:begin -->
# Development workflow

- For implementation, bugfix and architecture requests use the development-workflow skill (with orchestration and engineering-quality) from ~/.agents/skills. Questions and advice start no workers, reviews or model calls.
- Before any task write, use a separate task worktree; a harness subagent or a separate working session works there. The development request itself authorizes creating them; don't ask again. Keep the main checkout clean; never stash, clean or commit the user's existing changes.
- Push, merge, publish, deploy and global installation only with explicit permission.
<!-- agflow:end -->
