# Common engineering checks

Use the target checkout's instructions, existing components and test commands.
For a bug, reproduce the user-visible failure with a behavioral regression before
fixing it; distinguish the missing behavior from a broken fixture or typo. Test
public outcomes/invariants rather than source text, copied implementation or
mock behavior. Avoid duplicating existing coverage and low-value assertions.

Classify each failing required check as introduced, pre-existing or unknown.
Retain the exact command, revision, environment and failure signature. Use a
practical targeted reproduction and, where feasible, the same check on the base
or prerequisite revision in an isolated temporary checkout under comparable
conditions; do not disturb user work. A matching base failure supports pre-existing;
a base pass plus a causally linked changed-path failure supports introduced.
A permission/fixture/network failure needs its own diagnosis: an unchanged-tree
rerun after the identified condition changes can distinguish an environment gap.
If comparison is unavailable or inconclusive, keep unknown with the missing
evidence, owner and next action; affected acceptance remains FAIL or UNVERIFIED
as observed, never silently PASS. Fix introduced failures within scope. Report
pre-existing failures and their acceptance impact to the parent; unrelated repairs
do not expand scope automatically. No blanket reruns or paid model probes follow.

A minimal complete fix follows the existing pattern and covers the whole same
scenario. For a changed shared helper/client/constructor, enumerate **all actual
callers** with full search/LSP results; group their argument/context variations
and assess each. Check adjacent failure/cancellation paths that share the cause,
not an unrelated repository-wide cleanup. Read saved files and the entire owned
diff after edits; preserve other owners' changes and generated-file boundaries.

Assess lifecycle where touched: process groups, threads/tasks, subscriptions,
readers, sockets and temporary files need clear owners and release on success,
failure and cancellation. A deadline must stop owned work rather than only stop
waiting for it. Preserve useful context in actionable errors; keep machine
output stable and secrets out of diagnostics. Use existing logging/metrics when
an operational question requires them; do not add a telemetry subsystem or
service checklist to an unrelated local change.

Prefer established, mature dependencies when they materially solve the problem.
For a genuinely open choice, compare a suitable library/service with a local
implementation: behavior, maintenance, license, compatibility, maturity and cost;
verify current claims from primary sources. Recommend an option and get the
material decision before code. Do not renegotiate the chosen stack or add a
framework just to satisfy this reference. Fix dependency problems at their
appropriate boundary rather than expanding scope silently.

Follow established design-system components/tokens for interfaces; a functional
example is not permission to copy its appearance or redesign the product.
Run required repository checks in their prescribed order and stage exact owned
paths. Include project-required changelog/design updates for visible behavior;
publication still requires its actual authorization. Report checks, exact
snapshot, limitations and next step, then retain the builder for corrections.

At each vertical checkpoint separate required scope, necessary compatibility and
optional additions. Demonstrate a requested-behavior dependency before adding a
shell/platform or generalized layer; otherwise defer it. Keep affected callers
working. Report concrete behavior and evidence, next visible outcome and blocker;
continue in the same eligible session without redundant checkpoint approvals.
