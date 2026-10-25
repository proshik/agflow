---
name: engineering-quality
description: Use while implementing, fixing and verifying software. Covers regression tests, affected callers, dependency choices, real-behavior checks, failure classification and reporting. Not a standalone audit or permission to redesign.
---

# Engineering quality

## Build

- Follow the project's instructions, existing patterns, components and design
  tokens.
- For a bug, first write a regression test that reproduces the user-visible
  failure and fails for the right reason. Test public behavior, not source text
  or mocks.
- When you change shared code (helper, client, constructor, interface), find
  every caller with a full search or LSP and check each one.
- Fix the whole scenario, including sibling failure and cancellation paths with
  the same cause; leave unrelated refactoring out.
- When a mature library or service solves the problem, compare it with a local
  implementation (behavior, maintenance, license, compatibility, cost), recommend
  one and ask the user before writing code. Keep a stack that is already chosen.
- Give every process, thread, subscription, socket and temp file you start an
  owner that releases it on success, failure and cancellation. A timeout stops
  the work, not just the waiting. Leave user objects and other workers'
  resources alone.
- Keep actionable context in errors and secrets out of logs.
- When the code contradicts the agreed contract, update the contract with the
  parent or user before dependent work.

## Check real behavior early

As soon as one path works end to end, exercise it on the real surface, not only
in tests: start from an empty input, enter a value, run the action, observe the
output and check persistence (reload or reopen). Repeat the affected checks on
the final version. Mocks, fixtures and generated screenshots prove only
themselves.

- **API/service:** real requests for success and error paths (validation, auth);
  check the error contract. For migrations check ordering and existing data. Use
  disposable fixtures and leave user data untouched.
- **Web:** the running page at relevant viewport sizes, keyboard and focus,
  loading and error states.
- **CLI:** the built binary with real argv and stdin. Data goes to stdout,
  diagnostics to stderr; success, no results, refusal and tool failure get
  distinct exit codes. Try spaces and Unicode in input, non-interactive use and
  interruption without leaving child processes behind.
- **Desktop:** an isolated dev window, not the user's running app. Real gestures
  and keyboard equivalents, focus restore, resize, empty and error states; keep
  blocking IO off the UI thread. A sent synthetic event does not prove it reached
  the window.
- **UI:** compare the running screen with the agreed target in the relevant
  states and sizes. Fix unintended differences; a deliberate change to the
  target needs agreement. Tests and review do not replace this comparison.
- **Docs only:** links, inventory and the project's checks.

## When checks fail

Classify each failure as introduced, pre-existing or unknown; when practical,
run the same check on the base revision in a separate temporary checkout. Fix
introduced failures. Report pre-existing and unknown ones with the evidence and
leave unrelated repairs to a separate decision.

## Report

Give each scenario PASS, FAIL or UNVERIFIED with what you ran and what you saw.
Say plainly what you could not check and why (access, credentials, window,
budget). A "done" message, green unit tests or static validation are not PASS
for live behavior.

After a correction, re-run only the checks it affects and say which earlier
results still hold.
