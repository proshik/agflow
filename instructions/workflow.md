<!-- agflow:begin -->
# Development workflow

- For implementation, bugfix and architecture requests use the development-workflow skill (with orchestration and engineering-quality) from ~/.agents/skills. Questions and advice start no workers, reviews or model calls.
- Before any task write, use a separate task worktree and a separate working session. Keep the main checkout clean; never stash, clean or commit the user's existing changes.
- Build what was asked; user-visible additions need the user's decision.
- Small clear tasks: fix, targeted checks, local commit. Independent review only for real risk or an explicit requirement.
- Push, merge, publish, deploy and global installation only with explicit permission.
<!-- agflow:end -->
