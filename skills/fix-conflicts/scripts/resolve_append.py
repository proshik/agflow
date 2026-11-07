#!/usr/bin/env python3
"""Resolve a "both sides appended at the end" merge conflict.

When a branch and its target each append new code (usually tests) to the end
of the same file, git aligns their common closing lines (`    );` or `}`) and
pulls them OUT of the conflict. A naive "keep both" then leaves one block
unclosed.

This rebuilds: pre + ours + trailer + blank line + theirs + trailer, where the
trailer is the text after the `>>>>>>>` marker.

Only for a file with exactly ONE conflict hunk in the default (merge) conflict
style, whose both sides end at the same nesting level (both are top-level
items). Check the result by reading and compiling it.

usage: resolve_append.py FILE
"""
import sys

if len(sys.argv) != 2:
    sys.exit("usage: resolve_append.py FILE")
path = sys.argv[1]
with open(path, encoding="utf-8") as f:
    lines = f.read().split("\n")
starts = [i for i, l in enumerate(lines) if l.startswith("<<<<<<< ")]
if len(starts) != 1:
    sys.exit(f"{path}: expected exactly one conflict hunk, found {len(starts)}")
s = starts[0]
if any(l.startswith("||||||| ") for l in lines[s:]):
    sys.exit(f"{path}: diff3 conflict style is not supported; use the merge style")
m = next((i for i in range(s, len(lines)) if lines[i] == "======="), None)
e = next((i for i in range(m or s, len(lines)) if lines[i].startswith(">>>>>>> ")), None)
if m is None or e is None:
    sys.exit(f"{path}: incomplete conflict markers")

pre, ours, theirs, tail = lines[:s], lines[s + 1 : m], lines[m + 1 : e], lines[e + 1 :]
tail_body = tail[:-1] if tail and tail[-1] == "" else tail
out = pre + ours + tail_body + [""] + theirs + tail
with open(path, "w", encoding="utf-8") as f:
    f.write("\n".join(out))
print(f"{path}: resolved ({len(ours)} ours + {len(theirs)} theirs lines, trailer {len(tail_body)})")
