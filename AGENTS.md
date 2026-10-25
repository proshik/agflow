# agflow

This repository distributes three portable skills (development-workflow,
orchestration, engineering-quality) and a short global instruction block. It is
a distribution repository, not an executable tool or service.

## Working here

- README.md describes the layout and the validation command. To install or update
  the workflow on a machine, follow [BOOTSTRAP.md](BOOTSTRAP.md).
- `skills/` and `instructions/workflow.md` are the source of truth; installed
  copies are never edited as source.
- Each skill is self-contained and links only to files inside its own directory.
- State each rule once, in the skill that owns it, as a short positive
  instruction.
- Keep credentials, provider profiles, session history, machine paths and
  personal email addresses out of the repository.
- Test installation changes in a temporary home, never the real one.
- Make task changes in a separate worktree and working session, as the workflow
  itself requires.
- Run `node tools/check.mjs` after changes.
- Push, publication and installation need explicit permission; opening this
  repository starts nothing.

Write repository content in English. Communicate with this user in Russian.
