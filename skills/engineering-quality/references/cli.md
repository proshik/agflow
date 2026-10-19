# CLI applicability

Exercise the actual binary with representative argv/stdin/config, exit status,
stdout and stderr. Keep machine-readable output separate from diagnostics;
command success, no matches, domain refusal and transport/tool failure must have
their documented distinctions. Verify literal spaces/Unicode/shell-like input,
parsing and caller-facing compatibility where touched.

Check noninteractive/script use and interruption/cancellation when relevant.
Do not let a timeout leave owned child processes or readers behind. For commands
that mutate state, inspect actual bounded fixture state and failure atomicity;
for requests to a host, a transport acknowledgement alone is not task success.
Use the documented public command rather than private app/source inspection.
Record binary version/build, cwd/ref, exact command, outcome and artifacts. Unit
checks do not replace the final real CLI scenario on the integrated version.
