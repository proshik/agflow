# Destination setup

## Scope and prerequisites

Your harness installs the instructions using [BOOTSTRAP.md](../BOOTSTRAP.md).
Select the installed harnesses; install a missing harness through
its current official instructions only when authorized. Do not install every
harness merely because all three are supported by the instruction format.

Git and an actually qualified managed-session host are needed for implementation.
Inside Guild use its public `guild` API/CLI, preserve caller identity, verify
terminal jobs and managed session capabilities. Outside Guild the current skills
require a qualified adapter with isolation, observation, human questions, tool
approvals and resume channels. Terminal presence alone is not qualification.
Lacking an adapter is a named gap, not permission to bypass the managed builder
or run a hidden unobservable session. Qualify actual worker checkout and atomic
assigned-report writes, required check execution and task-required network access
with bounded harmless probes under existing authority. Configuration alone is no
proof; record missing evidence as UNVERIFIED and withhold dependent work only.
No mandatory full access, configuration changes or repeated phase approvals follow.

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
| Review routing | `~/.local/share/revust/REVIEW-ROUTING.md` |

Inspect `CODEX_HOME`, `CLAUDE_CONFIG_DIR` and `XDG_CONFIG_HOME` where applicable;
verify custom paths against the installed harness's supported discovery. Do not
copy source-machine paths. Keep skill resources together. Copies remain usable
if this repository moves; linked registrations require their targets to remain
available and must be recorded explicitly.

Guild and revust are external dependencies; neither is bundled. Structural CI
on an OS does not qualify its harnesses, providers or managed-session adapter.

## revust

Install the complete trusted revust package, not a copied standalone skill file.
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
Qualify tooling and revust process ownership for the destination OS before using
it for managed implementation or reviews. Do not mix Windows and WSL homes or
path conventions in one installation.

## Workflow policy consistency

Verify bundle.json and the installed managed rules agree: defaults are one
specification/plan round and two code rounds, including initial reviews (no plan
re-review, one code re-review). A new invocation after failure/stop counts;
a confirmed pre-start refusal does not, and ambiguous starts need reconciliation.
Never reset existing task histories/limits or transfer rounds between kinds.
There is no default aggregate process cap. Preserve configured review profiles;
exhausted required review stays UNVERIFIED pending an explicit user change.
Verify execution entrypoints retain causal diagnosis, a changed condition and
bounded no-generation actual launcher/child proof before infrastructure retries;
missing proof is UNVERIFIED, with no default paid smoke or automatic provider switch.
Accounting alone does not authorize retry. Unknown accounting blocks the affected
review only. Check actual worker checkout/atomic-report writes, required checks
and task-required network qualification under existing authority, without blanket
full access or repeated approvals. Current receipts stay separate from history,
are updated on dispatch/review/report/limits and before turn end, and reconcile
original IDs/archives with live state. Parents consume reports and record the next
checkpoint/action/owner. Retain evidence-based introduced/pre-existing/unknown test
failure classification without automatic unrelated repairs.

Check that setup retains the five self-contained skills and their guidance for
early real interaction before broad review, concrete UI target/working preview,
scope boundaries, small vertical checkpoints, two handoff modes with qualified
owners/routes before topic creation, and correction impact maps. Installation
and structural checks do not qualify those future behaviors or authorize models.
No new runtime scheduler, host promotion or global permission is supplied.
