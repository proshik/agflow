# OpenSpec preparation

Read this reference when a selected persisted contract uses existing `openspec/`
or the user explicitly requests adopting OpenSpec. A directory alone does not
require specification work for a local fix. Write artifacts in the task worktree. Without either condition, use the
lightweight contract in spec-design and skip all commands here. Inspect actual
installed CLI version/help and target instructions/configuration. Reuse matching
changes and relevant baseline specs. Invalid existing artifacts or missing CLI
in selected OpenSpec mode are setup gaps, not a silent fallback or installation.

Only for explicitly requested adoption when absent, qualify a narrowly scoped
initialization under actual filesystem
permissions. Inspect the supported options and affected paths **before** writing;
preserve existing AGENTS/CLAUDE instructions and unrelated skill/config files.
CLI help is not a preview of resulting edits: if effects are uncertain, inspect
its documented behavior or an authorized disposable copy before initializing the
target. Do not use force/cleanup options to avoid a preservation conflict. If safe
initialization cannot be established, report the exact dependent gap.

OpenSpec 1.9.0 offers `init --tools none` to avoid installing harness integrations;
verify that option and the actual affected files with the current CLI rather
than treating it as an instruction-preservation guarantee. Do not change global
OpenSpec configuration or install plugins to make the contract available. An
initialized skeleton is not an audited whole-product specification; capture
only touched behavior, with explicit unknown baseline areas.

For an existing initialized checkout, current supported commands include:

```sh
openspec list --json
openspec list --specs --json
openspec new change CHANGE_ID
openspec status --change CHANGE_ID --json
openspec instructions ARTIFACT --change CHANGE_ID --json
openspec validate CHANGE_ID --strict --no-interactive
```

Ask status/instructions for schema-specific dependencies; do not hardcode a
competing artifact sequence. Preserve project naming/rules and task semantics.
Artifact `done`/planning `isComplete` means documents exist, not implemented or
accepted behavior. Inspect task evidence before marking execution complete.

When architectural review is selected, before requesting or launching it, persist/reuse the narrow change,
validate it and record actual accessible artifact paths/digests and source revision
in the contract handoff or a managed workflow receipt when needed. Continue permitted CLI/setup investigation,
local initialization and artifact preparation while provider/worker dispatch is
prohibited; pause at the first actual prohibited/unavailable operation. If CLI is
unavailable, record its exact lookup/version failure and request that preparation
prerequisite. An inline action descriptor does not make a contract review-ready.

Verify the same files are accessible in the builder base. The initiating session inspects the pinned
artifacts and completes any selected architectural review before implementation;
reused review evidence requires matching digests; a route request alone cannot mark the contract accepted. If discovery
changes scope or architecture, update this change explicitly before dependent work
rather than silently diverge.

Before archival, follow the installed archive instructions and inspect the spec
delta against the accepted contract. Archive only after actual accepted scope
and final evidence; keep pending pilot/rollout tasks open or obtain an explicit
scope revision. Static validation establishes structure, not behavioral PASS.
