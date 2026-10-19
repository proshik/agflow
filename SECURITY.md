# Security

Do not put credentials, provider profiles, user data or review transcripts in
issues, pull requests or patches. Use GitHub's private vulnerability reporting
for this repository when available. If it is unavailable, open a minimal issue
requesting a private contact channel without disclosing exploit details or data.
There is no response-time or supported-release guarantee.

If a credential is exposed, revoke or rotate it with its provider first. Removing
it from a file does not remove it from Git history. Notify the release owner
privately so affected snapshots and history can be assessed.

Skills are instructions executed by a harness with its own permissions. Read
changes before installing; this repository does not sandbox tools, grant host
permissions, bundle Guild/revust, or provide provider authentication. Structural
checks and secret scans reduce mistakes but do not establish workflow safety or
model behavior on a new host.
