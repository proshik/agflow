# Comment style

Write as the user to a colleague: short, plain words, in the team's language.
Keep technical names (MR, gRPC, `field_name`) as they are.

## Each inline thread answers three questions

1. **How serious.** Start with it in bold: `**Medium, regression.**`,
   `**Low.**`, `**Medium: production code is unaffected, but the test fails on
   every run.**`
2. **When it happens.** A concrete scenario, not "in theory".
3. **What the user or operator sees**, and where they would look.

Then, in a separate paragraph, `Suggest ...` in one or two sentences.

A question to the author starts with "A question, not a finding.", says what
is unclear and ends with a direct question.

## Leave out

- Line numbers, traces, the history of the investigation, confidence scores and
  the names of tools or agents that found the problem.
- Problems of your local environment only.
- AI attribution, session links and internal review rounds.

## Minor notes: one shared comment per MR

```
Minor notes:
- `name`: what is wrong in one phrase, and what I suggest.
- ...
```

## Example thread

> **Medium.** A schedule disabled while a run is starting still runs. `enabled`
> is read before the run is queued, and the run is written after. If the owner
> disables the schedule in between, the run starts anyway and the list shows
> "running" for a disabled schedule.
>
> Suggest re-reading `enabled` after queuing and, if the schedule is disabled,
> cancelling the run and returning `ScheduleDisabled`.
