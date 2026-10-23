# Destination setup

## Scope and prerequisites

Your harness installs the instructions using [BOOTSTRAP.md](../BOOTSTRAP.md).
Select the installed harnesses; install a missing harness through
its current official instructions only when authorized. Do not install every
harness merely because all three are supported by the instruction format.

Git worktree support and a distinct working session are required for every task
change, including minor fixes, documentation and preparation.

Every task change requires both a separate task worktree and a separate working
session, including minor bugs, documentation and preparation. The initiating
parent owns scope, supervision, acceptance and continuation; it must not implement
through paths into an empty worktree. In Guild the worker is a visible managed
session. Outside Guild a harness-native child qualifies only with a real separate
conversation, explicit worktree binding, supervision/continuation and required
human question/approval channels. A helper sharing parent cwd/state does not
qualify. Missing required session capability blocks implementation; report the
scoped gap without a root fallback. The parent may assign the full request;
preparation/design writes belong to the task session. Existing assigned workers
reuse their own session and tree without nesting.
Use actual native subagent capabilities when useful, qualifying checkout binding,
file sharing, permissions and result/human channels relevant to the assignment.
For required task sessions qualify isolation, observation, human questions,
approvals and resume. Missing an optional adapter does not block a qualified task
session; missing
required session capability blocks implementation without a root fallback.
Keep preparation, task notes and generated evidence out of the main checkout.

## Installation destinations

Use the actual selected harness configuration and supported discovery paths.
Typical destinations are:

| Content | Destination |
| --- | --- |
| Five shared skill directories | `~/.agents/skills/` |
| Claude registrations | Same-content copies in `~/.claude/skills/` |
| Codex global rules | Managed block in `~/.codex/AGENTS.md` |
| Claude global rules | Managed block in `~/.claude/CLAUDE.md` |
| OpenCode global rules | Managed block in `~/.config/opencode/AGENTS.md` |
| Review routing (compatibility location; policy is engine-independent) | `~/.local/share/revust/REVIEW-ROUTING.md` |

Inspect `CODEX_HOME`, `CLAUDE_CONFIG_DIR` and `XDG_CONFIG_HOME` where applicable;
verify custom paths against the installed harness's supported discovery. Do not
copy source-machine paths. Keep skill resources together. Copies remain usable
if this repository moves; linked registrations require their targets to remain
available and must be recorded explicitly.

Guild and revust are optional external adapters; neither is bundled. Structural CI
on an OS does not qualify its harnesses, providers or managed-session adapter.

## Optional revust adapter

Only when the selected review route needs it, install the complete trusted
revust package, not a copied standalone skill file.
Public upstreams are [revust](https://github.com/proshik/revust) and its
[Homebrew tap](https://github.com/proshik/homebrew-tap). These addresses are
intentional dependency coordinates. revust is distributed under its own MIT
license; review the selected release and formula before installation.
The workflow setup can use `brew install proshik/tap/revust` where its
published formula, platform, existing Homebrew and actual permissions are valid.
Do not install Homebrew, force an upgrade or change provider profiles as fallback.
On other platforms use a supported distribution and verify its platform status.
This bundle does not qualify revust or managed-session hosts on any platform.
Check the selected upstream release and qualify the actual host, including
Linux/WSL, macOS or native Windows, before relying on it.

Locate the installed package through its supported stable selector or installation
metadata. Its `integrations/skills/revust/SKILL.md` references the rest of that
package. Register it in the chosen harnesses through the package's documented
installation, or a local link where supported. Keep package resources together;
never copy only that SKILL.md into this repository's five-skill directories.

Read the installed skill, verify binary/version, launcher/helper presence and
read-only preflight. Inspect existing effective profile without exposing secrets.
Authenticate configured providers locally; no credentials or source-machine
personal model profiles are distributed here. A missing profile/provider is a
setup gap; do not invent a new roster merely to make a check green.

Honor `--auto-exit=1s` through the documented launcher for completed review views.
No review is started by installation/preflight. A paid behavioral pilot needs its
own authorization and budget; missing evidence stays UNVERIFIED.

## Harness discovery and conflicts

The five shared skills live in ~/.agents/skills. Codex and OpenCode discover
this location; Claude receives same-content copies in its skills directory.
OpenCode discovery: https://opencode.ai/docs/skills/ . Use the selected harness's
current official documentation for custom locations and catalogue refresh.

Existing project skills can shadow the globally installed names. Read those
instructions and report differences before deciding which source to use. Do not
erase project skills or old review history during bootstrap. Older user-owned
Superpowers/parallel-tasks/guild-review routes may conflict: show their exact
location and proposed change rather than remove packages indiscriminately.
The managed block records the current user's portable workflow choice, and must
not claim authority over higher-priority restrictions or tool approvals.

## Recovery and relocation

Keep the installation record and backups outside Git, for example under
`~/.local/state/agflow/`. Record all installed destinations, selected harnesses,
source revision and file hashes, plus backup locations and incomplete operations.
An update limited to one harness must retain the records of other installations.
The record format is operational evidence maintained by the harness, not an
executable component of this repository.

Before updates, compare the previous inventory with the current bundle. Missing
source skills are errors. Obsolete managed files must be accounted for; matching
current source files alone does not establish a complete update. Preserve local
modifications and unowned files. If a record is lost, reconcile backups and actual
content and rebuild verified entries even when no skill files need changing.
Legacy install.json files can supply evidence, but do not require Python or the
retired installer. Restore only recorded destinations after inspecting later
edits; a backup does not authorize a blind rollback.

Installation copies instructions; qualifying the workflow host is separate.
Qualify the selected tooling and process ownership for the destination OS before
using that route for managed implementation or reviews. Do not mix Windows and
WSL homes or path conventions in one installation.

## Workflow policy consistency

Start from the actual request, investigate/discuss uncertainties with relevant
Superpowers engineering methods (or the same methods directly if unavailable),
then persist agreed behavior only when useful or explicitly required. OpenSpec
stores behavior, scenarios, significant accepted choices and one implementation
plan; it is not another design process. Existing openspec/ alone does not force
minor-fix artifacts. Do not initialize it or rewrite baselines automatically.
Spec-design bridges methods to storage; reconcile drafts without a competing
Superpowers Plan.md/spec. Proposals, validation and review are not user approval.
Optional visible capabilities require an actual decision unless already
explicitly authorized; necessary internal helpers/refactoring do not. Keep this
lightweight and preserve settled choices. agflow is the distribution repository,
not an executable tool, runtime or service.

Verify bundle.json, shared rules and skills agree on mandatory task worktrees
AND separate working sessions before any preparation writes, a small task-session
route for local fixes and optional design, helpers and review. Missing required
session capability blocks implementation even when helpers are
available; optional Process registration remains unnecessary for small fixes.

Specification review, when needed, is one architectural reviewer/pass/attempt with no
synthesis, verification or automatic retry. Review limits are ceilings for selected
stages, not mandatory calls: one plan round and two code rounds including initial
runs. Preserve existing histories, explicit limits and adapter/provider selections.
Generic skills do not pin an engine. A selected adapter must express the exact
intent; a conflicting existing route requires an explicit reconciliation proposal.

Keep the five skills self-contained. Validate resources, setup/instruction
agreement and local diagram controls. Qualification of model behavior or a live
workflow requires separately authorized observations; structural checks provide
neither that evidence nor permission for calls. Preserve meaningful acceptance,
source-qualified checks, limited reruns, scope control, parent continuation and
existing publication/cleanup boundaries without a mandatory report framework for
simple task-session work. Global setup changes remain previewable and backed up.
