# Install or update through your harness

The harness performs this procedure with its own filesystem and Git tools; there
is no installer. Setup starts no workers, reviews or model calls. An install or
update request authorizes the local setup described here; tool approvals remain
the user's.

Read README.md, [docs/setup.md](docs/setup.md), bundle.json and
instructions/workflow.md first.

## Steps

1. **Inspect.** Find the OS, home directory, installed harnesses and their config
   directories, including custom locations. For an update, reuse the recorded
   harnesses, destinations and skill sets instead of defaults.
2. **Choose the sets.** The core `skills` in bundle.json are always installed.
   Install an `optional` set only when the user chooses it; for a fresh install
   without a choice, name the optional sets and install core only. An update
   keeps the sets in the recovery record and removes a set only when the user
   asks.
3. **Update the checkout** (updates only). Check `git status`, the branch and its
   upstream, then run `git pull --ff-only`. On local changes or divergence, stop
   and report; never reset, stash or discard work.
4. **Check the source.** Run `node tools/check.mjs` when Node.js is available;
   otherwise confirm that every selected skill has `SKILL.md` and
   `agents/openai.yaml`. A missing source file is an error.
5. **Plan and show.** List destinations, files to add, update and remove
   (including the obsolete files in docs/setup.md), conflicts, backups and
   missing prerequisites. A destination file that differs from its recorded
   installed hash was changed by the user: keep it and ask. A same-named skill
   not in the record is user-owned: show it with a proposed change and never
   overwrite it silently. Malformed or duplicate managed markers stop work on
   that file.
6. **Back up.** Before writing, save the recovery record and byte-exact copies of
   every file you will change or remove, outside Git.
7. **Apply.** Copy the directory of each selected skill from `skills/`. In each
   selected global instruction file, replace only the text between
   `<!-- agflow:begin -->` and `<!-- agflow:end -->` with
   instructions/workflow.md, or append the block if absent, keeping all other
   bytes. Re-read each file right before replacing it
   and rebuild that step if it changed. Write through a temporary sibling file
   and rename. Inspect symlinks before writing; never write through one blindly.
8. **Remove obsolete files** only when they still match their recorded installed
   hash. Never delete a skill directory that contains other files.
9. **Record.** Save the updated record with the installed sets, keeping entries
   for harnesses not touched this time. A repeated install with nothing to
   change writes nothing.
10. **Verify.** Compare installed bytes and managed blocks with the source.
    Check skill discovery through the harness's read-only catalogue where one
    exists; otherwise report discovery as UNVERIFIED. Report project-local
    skills that shadow these names and user-owned instructions that still
    mention removed files, without editing them.
11. **Report** installed, preserved and removed paths, the installed sets, the
    source revision, backup and record paths, conflicts and remaining gaps.

If interrupted, compare the actual destinations with the record and backups
before resuming, and restore only specific recorded files after checking for
later user edits.
