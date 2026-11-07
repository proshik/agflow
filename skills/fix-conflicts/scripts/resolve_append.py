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
mids = [i for i, l in enumerate(lines) if l == "======="]
ends = [i for i, l in enumerate(lines) if l.startswith(">>>>>>> ")]
if any(l.startswith("||||||| ") for l in lines):
    sys.exit(f"{path}: diff3 conflict style is not supported; use the merge style")
if not (len(starts) == len(mids) == len(ends) == 1 and starts[0] < mids[0] < ends[0]):
    sys.exit(f"{path}: expected exactly one '<<<<<<< ', one '=======' and one '>>>>>>> ' "
             f"line in that order, found {len(starts)}, {len(mids)} and {len(ends)}")
s, m, e = starts[0], mids[0], ends[0]

pre, ours, theirs, tail = lines[:s], lines[s + 1 : m], lines[m + 1 : e], lines[e + 1 :]
tail_body = tail[:-1] if tail and tail[-1] == "" else tail
out = pre + ours + tail_body + [""] + theirs + tail
with open(path, "w", encoding="utf-8") as f:
    f.write("\n".join(out))
print(f"{path}: resolved ({len(ours)} ours + {len(theirs)} theirs lines, trailer {len(tail_body)})")
