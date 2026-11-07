#!/usr/bin/env bash
# Check that line LINE of PATH at HEAD is an added line of the diff BASE..HEAD.
# GitLab anchors an inline thread by new_line only on such lines.
# usage: anchor-check.sh BASE_SHA HEAD_SHA PATH LINE [LINE...]
# Run inside a clone that has both commits, for example after
# git fetch origin refs/merge-requests/IID/head
set -euo pipefail
if [ "$#" -lt 4 ]; then
  echo "usage: anchor-check.sh BASE_SHA HEAD_SHA PATH LINE [LINE...]" >&2
  exit 2
fi
base="$1" head="$2" path="$3"; shift 3
hunks=$(git diff --no-color --no-ext-diff -U0 "$base" "$head" -- "$path" | grep '^@@' || true)
for L in "$@"; do
  hit=$(awk -v L="$L" '{split($3,a,","); s=substr(a[1],2)+0; n=(a[2]==""?1:a[2]+0);
        if (L+0>=s && L+0<s+n) {print; exit}}' <<<"$hunks")
  if [ -n "$hit" ]; then
    echo "ok   $path:$L  $hit  | $(git show "${head}:${path}" | sed -n "${L}p" | cut -c1-100)"
  else
    echo "MISS $path:$L  not an added line, choose another"
  fi
done
