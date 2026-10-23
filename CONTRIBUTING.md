# Contributing

Keep the authoritative five skills in skills/ with their resources. Installation
and updates remain harness-driven through BOOTSTRAP.md. Preserve the diagram's
controls, mandatory task worktrees and separate working sessions, proportional
stages and the separate ceilings
of 1 selected plan and 2 selected code review rounds. Do not add
an installer, provider profiles, credentials, review archives or local reports.
Contributions are provided under the repository's [MIT license](LICENSE).

Use Node.js 24 or newer for developer checks; no npm install is needed:

```sh
node tools/check.mjs
node --test tools/check.test.mjs
```

The checker validates the explicit publication inventory in bundle.json, skill
frontmatter and agent metadata, bundled links and inline diagram JavaScript.
It also rejects selected private paths, machine paths and common secret forms.
It is a structural check, not a general Markdown/YAML parser, a complete secret
scanner, a browser test or evidence that models follow the workflow. The existing
interactive diagram is localized in Russian; retain its structure and behavior.
Write new repository documentation and tooling in English.

Before proposing a change, inspect the diff, run Gitleaks on a clean snapshot
with `gitleaks dir --redact --no-banner PATH`, and exercise changed diagram
controls in a browser. CI checks structure on Linux, macOS and Windows; those
jobs do not qualify runtime workflow hosts or providers. CI secret scanning uses
the pinned Gitleaks action with comments and artifact uploads disabled. Personal
GitHub accounts need no action license; organization owners must separately
configure the action's license or choose the upstream CLI before enabling it.

Stage known files by name, then inspect `git diff --cached --stat` and
`git diff --cached --check`. Do not use blanket staging to collect local evidence.
Changes to the intended public file set must also update bundle.json. Ignoring a
path does not remove an already tracked file: the checker examines tracked files
as well as nonignored new files.

# Release preparation

Publication requires explicit authorization. The release owner prepares a clean
snapshot from the exact reviewed tree and its publication_files allowlist,
validates that snapshot, and scans it for secrets. Keep local backups and prior
private Git objects outside that snapshot. When private development history
exists, the release owner must create a fresh public root with neutral commit
metadata, inspect every public commit and scan its history before pushing; do
not push the private development branch or rewrite an existing remote.

Verify the authorized destination is absent before creating it; do not overwrite
an existing repository. After an authorized publication, check the default branch,
public visibility, anonymous access, exact tree and CI results. These checks do
not authorize model evaluations, deployment or global skill updates.
