# Contributing

Edit the skills in `skills/` and the global block in `instructions/workflow.md`;
installation stays harness-driven through BOOTSTRAP.md. Keep instructions short
and positive, state each rule once, and keep each skill self-contained. When you
add or remove a skill, update bundle.json and the obsolete-file list in
docs/setup.md. Contributions are provided under the [MIT license](LICENSE).

Before proposing a change:

```sh
node tools/check.mjs
gitleaks dir --redact --no-banner .
git diff --cached --check
```

Stage files by name rather than in bulk. CI runs the same structural check on
Ubuntu and a Gitleaks scan; neither shows that models follow the workflow.

## Release

Publication requires explicit authorization. Publish a clean snapshot of the
reviewed tree, scan it with Gitleaks, and keep private development history and
local backups out of it. Do not overwrite an existing remote repository.
