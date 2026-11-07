# Destination setup

Installation follows [BOOTSTRAP.md](../BOOTSTRAP.md). Install only for harnesses
that are already present unless the user asks for more.

## Prerequisites

- Git with worktree support.
- A harness that can run a separate working session per task: Guild, or a native
  child session as defined in the development-workflow skill.
- Optional: Superpowers (engineering methods), OpenSpec (only in projects that
  already use it), revust (only when the review route selects it).
- For the optional `gitlab` set: GitLab API access through an MCP server or a
  CLI such as `glab`, and an issue-tracker tool if issues are updated.

## Destinations

| Content | Destination |
| --- | --- |
| Core skill directories and those of selected optional sets | `~/.agents/skills/` |
| Claude skill registrations | Same-content copies in `~/.claude/skills/` |
| Codex global rules | Managed block in `~/.codex/AGENTS.md` |
| Claude global rules | Managed block in `~/.claude/CLAUDE.md` |
| OpenCode global rules | Managed block in `~/.config/opencode/AGENTS.md` |

Honor `CODEX_HOME`, `CLAUDE_CONFIG_DIR` and `XDG_CONFIG_HOME`. Codex and OpenCode
discover `~/.agents/skills` ([OpenCode skills](https://opencode.ai/docs/skills/)).
Keep each skill directory complete; copies keep working if this repository moves.

## Obsolete managed files

Earlier versions installed files that no longer exist. On update, remove them
from every skill destination (and the Claude copies) when they still match the
recorded installed hash:

- `spec-design/` and `acceptance-testing/` (whole skills)
- `development-workflow/references/`: `native-entry.md`, `native-entry.py`,
  `policy.md`, `review.md`, `revust.md`
- `engineering-quality/references/`: `common.md`, `backend-web.md`, `cli.md`,
  `desktop.md`
- `orchestration/references/`: `guild.md`, `state.md`
- `~/.local/share/revust/REVIEW-ROUTING.md`

## Optional revust

Install the complete revust package, not a copied SKILL.md, e.g.
`brew install proshik/tap/revust` where Homebrew is already present
([revust](https://github.com/proshik/revust),
[tap](https://github.com/proshik/homebrew-tap)). Register its
`integrations/skills/revust` skill as the package documents. Check the binary
version and run its read-only preflight; setup starts no review and changes no
provider profiles.

## Conflicts

Project-local skills can shadow these global names, and older user-owned routes
(Superpowers, parallel-tasks, guild-review) can conflict. Show their location and
a proposed change instead of removing them.

Users often keep their own skills named `review-mr`, `fix-review`,
`fix-conflicts` or `merge-retro`. When a selected set meets such a copy in any
skill destination (including the Claude copies) that the recovery record does
not list, show its location and the difference with a proposed change, and
never overwrite it silently. Project-specific rules from those copies belong in
the user's memory or project instructions.

## Recovery record

Keep the installation record and backups outside Git, for example under
`~/.local/state/agflow/`: selected harnesses, destinations, installed skill
sets (core plus any optional ones), skills of a set skipped per destination
because a user-owned copy was kept, source revision, per-file hashes, backup
locations and incomplete operations. A legacy `install.json` from the retired
installer can serve as evidence of earlier installs.
