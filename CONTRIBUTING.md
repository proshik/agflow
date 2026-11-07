# Contributing

Edit the skills in `skills/` and the global block in `instructions/workflow.md`;
installation stays harness-driven through BOOTSTRAP.md. Keep instructions short
and positive, state each rule once, and keep each skill self-contained. When you
add or remove a skill, update its list in bundle.json (the core `skills` or an
`optional` set) and the obsolete-file list in docs/setup.md. Keep project,
people and server names out of the skills; describe such rules as "the
project's instructions". Contributions are provided under the
[MIT license](LICENSE).

Before proposing a change:

```sh
node tools/check.mjs
gitleaks dir --redact --no-banner .
git diff --cached --check
```

For private names that must never land here, keep a git-ignored
`.local/denylist.txt` (one case-insensitive word or phrase per line, `#` for
comments); `tools/check.mjs` then fails any file that contains an entry. Stage
files by name rather than in bulk. CI runs the same structural check on
Ubuntu and a Gitleaks scan; neither shows that models follow the workflow.

## Release

Publication requires explicit authorization. Publish a clean snapshot of the
reviewed tree, scan it with Gitleaks, and keep private development history and
local backups out of it. Do not overwrite an existing remote repository.
