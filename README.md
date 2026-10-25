# agflow

Portable development-workflow skills for Claude Code, Codex and OpenCode: three
Markdown skills plus a short block of global instructions. There is no installer;
your harness reads this repository and installs or updates the files itself.

## Install

Clone the repository, open your harness in it and ask:

> Read AGENTS.md and BOOTSTRAP.md and install this workflow for the harnesses on
> this machine. Show the planned changes first, preserve local rules, make
> backups, and verify the installed files and skill discovery without model calls.

## Update

Open the existing checkout and ask:

> Read AGENTS.md and BOOTSTRAP.md. Fast-forward this checkout from its upstream
> without discarding local changes, then update the existing installation for the
> same harnesses and destinations, including removal of obsolete managed files.
> Show the changes first and verify without model calls.

## Layout

| Path | Contents |
| --- | --- |
| [skills/development-workflow](skills/development-workflow/SKILL.md) | Task isolation, short vs full route, scope, persisting agreements (OpenSpec or a note), review selection and revust flags |
| [skills/orchestration](skills/orchestration/SKILL.md) | Assignments, supervision, parallel writers, Guild commands |
| [skills/engineering-quality](skills/engineering-quality/SKILL.md) | Building, real-behavior checks per surface, failure classification, reporting |
| [instructions/workflow.md](instructions/workflow.md) | Managed block for global CLAUDE.md / AGENTS.md |
| [bundle.json](bundle.json) | Skill list used by installation |
| [BOOTSTRAP.md](BOOTSTRAP.md) | Install and update procedure |
| [docs/setup.md](docs/setup.md) | Destinations, optional tools, obsolete files, recovery record |
| [tools/check.mjs](tools/check.mjs) | Structural checks |

## Validation

Node.js 24+, no packages:

```sh
node tools/check.mjs
```

It checks that Markdown links resolve and stay inside their skill, skill
frontmatter and `agents/openai.yaml` shape, and the absence of machine paths and
email addresses. It does not show that models follow the workflow.

## License

[MIT](LICENSE), copyright agflow contributors. Guild, revust, Superpowers and
OpenSpec are optional external tools, not bundled. See
[CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).
