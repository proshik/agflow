# Analysis frame

These are the places where useful findings usually are, not a form to fill in.
Skip a heading with nothing to say.

## Root cause

- Is the cause named, or the symptom restated? A real cause can be checked
  independently of the symptom.
- Was the claim about the cause stronger than the data? Name an alternative
  cause that gives the same symptom and ask whether your measurement would tell
  them apart. If not, the report and the MR should have said less.
- Did the root cause match what the issue assumed? A mismatch means the issue
  described the symptom better than the cause.

## Automated review

- How many findings, how many real, how many rejected and why.
- What it found that tests would not have found.
- What it cannot see by construction: other open MRs, sources of external
  libraries, files the diff does not touch, and an MR description that did not
  exist yet. A human finding from these areas is a boundary of the review, fixed
  by an instruction, not by more effort.

## Human review

The main source of improvements. For each finding ask: what would we have had to
do to find it ourselves?

| Kind of finding | Rule it suggests |
| --- | --- |
| Collision with a parallel MR | List open MRs and branches in flight before starting and put them in the assignment |
| Wrong claim about an external source | Open the source and compare: error variants, a regex in a neighbouring script, a comment in another file |
| List shorter than the reference | A safety net cannot be narrower than what it protects |
| Consequence in a file outside the diff | Ask whose invariant the change holds (chart, document, neighbouring module) |
| Change contradicts a principle stated in the same MR | Reread your own description as a stranger's |
| Test passes while the defect it guards is present | An early exit is acceptable only for an environment failure, not a delivery failure |

## Tests

- What they caught that manual checks did not.
- Whether any pass vacuously: an early exit on "list is empty", "not found" or
  "no data" turns a test into decoration. For each new test ask: if the defect
  comes back, does it turn red?
- What stayed uncovered and why, separating cases that cannot be covered on the
  available environment.

## Manual checks

- What they confirmed that tests could not.
- What could not be checked and why; tell "could not" from "did not".
- Whether the reproduced picture matched the issue. A symptom reproduced on a
  different object than the issue names is a finding in itself.

## Process

Count in hours and items, not impressions: idle time and its cause, builds or
deployments that delivered the wrong thing and how that was noticed, actions
repeated because of an unreliable channel, merge conflicts and their origin, and
work that turned out unnecessary because it was done in parallel. The last one
is the most expensive and the least visible: only reviewer comments or other
MRs reveal it.

## Writing an improvement

A usable improvement can be pasted into a file: it has a place (which skill,
which section), a wording and a reason (the finding it grew from). If it cannot
be written as a rule, it is a mood, not an improvement.

Turn a single case into a rule only when it is the kind that repeats: attention
errors repeat, gaps in domain knowledge do not.
