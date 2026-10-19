# Install or update through your harness

The harness performs this procedure using its available filesystem, Git and
configuration tools. This repository supplies Markdown skills and instructions;
there is no bundled installer. Setup does not launch a development-workflow
designer, builder, review or model evaluation.

Read AGENTS.md, README.md, docs/setup.md, bundle.json,
instructions/workflow.md and instructions/review-routing.md first. Follow the
user's selected harnesses, destination choices and actual host permissions.
An installation or update request authorizes the described local setup; do not
ask for the same authorization again. Tool approvals still belong to the user.

## Inspect and prepare

1. Identify the OS, actual home, installed harnesses and effective configuration
   directories, including custom locations. For an update, reuse the recorded
   harness selections and destinations; do not silently switch to defaults or
   add every supported harness. Inspect existing files and skill registrations.
2. For a requested repository update, inspect `git status --short`, branch and
   configured upstream, then use `git pull --ff-only` when safe. Preserve local
   changes. Stop on unresolved divergence or missing upstream rather than reset,
   stash or discard work automatically. Read the updated instructions before
   preparing destination changes.
3. Check the complete source inventory before writing: every skill in bundle.json
   must have a readable SKILL.md, its bundled references and agent metadata must
   be present, and relative resource links must resolve. Compare the manifest
   with skills/. A missing source is an error, never an empty successful install.
4. Read the previous installation record and backups, if any. A record is
   evidence of managed paths and last installed hashes, not authority over every
   file under a skill root. Preserve records for unselected harnesses and custom
   destinations. Inspect symlink targets before changing registrations; never
   write through a link or remove its target blindly.
5. Prepare and show a concrete plan: destinations, managed rule changes,
   additions, updates, obsolete files, conflicts, backups and prerequisite gaps.
   Preserve user-owned changes. If a record is missing or incomplete, compare
   files and recovery evidence; do not infer ownership merely from a filename.
   Exact matches can be recorded after comparison. Different unowned files need
   an explicit replacement decision. Malformed or duplicate managed markers are
   errors; preserve the file and report the affected path.

## Apply and retain recovery evidence

6. Before changing destinations, save a durable recovery record and byte-exact
   backups of existing files and the previous installation record outside Git.
   Record the source revision and dirty-file hashes, selected harnesses, resolved
   destinations, per-file hashes, planned operations and backup locations. Use
   UTF-8 for text and hashes of original bytes for comparison. Never record
   credentials, provider configuration or conversation history in the record.
7. Copy each selected skill with its bundled resources from skills/. Merge
   instructions/workflow.md only between `<!-- agflow:begin -->` and
   `<!-- agflow:end -->` in each selected global instruction file; append one
   block if absent. Preserve all surrounding bytes. Install the review route
   only after resolving differences with an existing user-owned route.
8. Use the same original destination snapshot for merging, conflict decisions,
   backups and pre-write comparison. Re-read immediately before replacing a
   file; if it changed, stop and rebuild that operation from the current content.
   Write through temporary sibling files and atomic replacement where supported.
   Do not claim these checks lock out other writers; if concurrent editing cannot
   be coordinated, leave that destination pending rather than overwrite it.
9. Reconcile paths from the previous record with the new inventory for the
   selected destinations. List removed or renamed managed files explicitly.
   With update authority, back up and remove only unchanged previously managed
   obsolete files. Preserve modified or unowned files and report conflicts.
   Never delete a whole skill directory containing unrelated files. Keep
   unselected installations and their ownership records intact.
10. Verify writes and record each completed operation durably. Atomically save
    the updated installation record, retaining unselected destinations and
    unresolved operations. Even if every destination already matches, create or
    repair the record from verified evidence. A repeated unchanged installation
    with a complete record needs no writes or new backups.

## Verify and report

11. Compare installed bytes and managed blocks with the source inventory. Check
    for missing resources, unresolved conflicts and obsolete managed paths; a
    check of current source files alone is insufficient. Reload/restart selected
    harnesses as needed and inspect read-only skill discovery if available. Do
    not launch a model to test discovery; unavailable discovery stays UNVERIFIED.
12. Follow docs/setup.md for the complete revust package and host prerequisites.
    Inspect project-local policy that shadows global skills and report conflicts;
    do not modify unrelated projects. Preserve provider profiles and credentials.
    Superpowers is optional; OpenSpec is needed only where already adopted or
    explicitly requested. Setup does not authorize paid calls or dependency
    upgrades merely to obtain a green check.
13. Report installed and preserved paths, source revision, backup/record paths,
    conflicts and remaining prerequisite or discovery gaps. Missing prerequisites
    mean setup is incomplete. File comparison is not full workflow acceptance.
    No push, remote creation, publication, deployment or paid pilot is implied.

If interrupted, reconcile actual destinations with the recovery record and
backups before resuming. Do not replay unknown operations. Restore only specific
recorded files after checking later user edits. Existing installer-generated
`~/.local/state/agflow/install.json` and backups can be read as migration evidence;
preserve their original bytes and do not require the retired installer to resume.
