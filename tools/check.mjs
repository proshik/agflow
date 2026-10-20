// Developer-only structural checks. No installation, provider or network calls.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const expectedSkills = ['acceptance-testing', 'development-workflow',
  'engineering-quality', 'orchestration', 'spec-design'];
const privatePath = /(^|\/)(?:\.git|\.codex|\.claude|\.config|\.local|\.guild|\.revust|\.playwright-mcp|\.env(?:\..*)?|node_modules|backups?|reports?|credentials?|secrets?|\.ssh|\.aws)(\/|$)|\.(?:pem|key|p12|pfx|log|sarif|bak)$/i;
const machinePath = /(?:\/Users\/|\/home\/)[\w.-]+|[A-Z]:\\Users\\[\w.-]+/i;
const secret = /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----|\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[A-Z0-9]{16})\b|\b(?:api[_-]?key|password|secret|token)\s*[:=]\s*["'][A-Za-z0-9_+\/-]{20,}["']/i;
const email = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const safePath = p => typeof p === 'string' && p.length > 0 &&
  !p.includes('\\') && !path.posix.isAbsolute(p) &&
  p.split('/').every(part => part && part !== '.' && part !== '..');
const same = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());

export function candidates(root) {
  // Includes tracked ignored paths and nonignored new files. No shell expansion.
  return execFileSync('git', ['-C', root, 'ls-files', '--cached', '--others',
    '--exclude-standard', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
}

export function validate(root, files) {
  const errors = [];
  const fail = (p, why) => errors.push(`${p}: ${why}`);
  const read = p => {
    try {
      // Reject symlinks in every component, including directory links.
      let current = root;
      for (const part of p.split('/')) {
        current = path.join(current, part);
        if (fs.lstatSync(current).isSymbolicLink()) throw Error('symlink');
      }
      if (!fs.statSync(current).isFile()) throw Error('not a file');
      return new TextDecoder('utf-8', { fatal: true }).decode(fs.readFileSync(current));
    } catch { fail(p, 'missing, non-text or non-regular file'); return null; }
  };
  let manifest;
  try { manifest = JSON.parse(fs.readFileSync(path.join(root, 'bundle.json'), 'utf8')); }
  catch { return ['bundle.json: missing or invalid JSON']; }
  if (manifest.format !== 1 || manifest.name !== 'agflow' || manifest.license !== 'MIT' ||
      typeof manifest.source !== 'string' || !manifest.source.trim()) fail('bundle.json', 'invalid bundle metadata');
  if (!Array.isArray(manifest.skills) || !same(manifest.skills, expectedSkills)) fail('bundle.json', 'expected exactly five skills');
  const defaults = manifest.review_defaults;
  if (defaults?.plan_review_rounds !== 1 || defaults?.code_review_rounds !== 2 ||
      defaults?.includes_initial_review !== true || defaults?.actual_processes != null || defaults?.correction_rounds != null) fail('bundle.json', 'review defaults must preserve separate 1/2 rounds without a process cap');
  const inventory = manifest.publication_files;
  if (!Array.isArray(inventory) || !inventory.length ||
      inventory.some(p => !safePath(p) || privatePath.test(p)) ||
      new Set(inventory).size !== inventory.length) return [...errors, 'bundle.json: invalid publication allowlist'];
  const listed = new Set(inventory);
  for (const p of ['bundle.json', 'LICENSE', 'README.md', 'AGENTS.md', 'BOOTSTRAP.md',
    'CONTRIBUTING.md', 'SECURITY.md', 'docs/setup.md', 'instructions/workflow.md',
    'instructions/review-routing.md', 'previews/process.html']) {
    if (!listed.has(p)) fail(p, 'required publication file absent from allowlist');
  }
  for (const p of files) {
    if (!safePath(p) || privatePath.test(p)) fail(p, 'private or unsafe publication path');
    if (!listed.has(p)) fail(p, 'not in publication allowlist');
  }
  for (const p of inventory) if (!files.includes(p)) fail(p, 'allowlisted file absent from candidate snapshot');
  const actualSkills = [...new Set(files.filter(p => p.startsWith('skills/')).map(p => p.split('/')[1]))];
  if (!same(actualSkills, expectedSkills)) fail('skills/', 'directory inventory differs from five skills');
  const texts = new Map();
  for (const p of inventory) {
    const text = read(p);
    if (text === null) continue;
    texts.set(p, text);
    if (machinePath.test(text)) fail(p, 'personal machine path');
    if (secret.test(text)) fail(p, 'possible credential (value redacted)');
    for (const match of text.matchAll(email)) {
      if (match[0] !== 'noreply@agflow.invalid') fail(p, 'personal email (value redacted)');
    }
  }
  const resolveLink = (p, raw) => {
    if (!raw || /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(raw)) return;
    let target;
    try { target = decodeURIComponent(raw.split(/[?#]/)[0]); }
    catch { fail(p, 'invalid link encoding'); return; }
    if (!target) return;
    const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(p), target)).replace(/\/$/, '');
    if (!safePath(resolved) || target.startsWith('/') || target.includes('\\')) {
      fail(p, 'relative link escapes bundle'); return;
    }
    if (p.startsWith('skills/') && !resolved.startsWith(p.split('/').slice(0, 2).join('/') + '/')) {
      fail(p, 'skill resource is outside its self-contained directory');
    }
    if (!listed.has(resolved) && !inventory.some(f => f.startsWith(resolved.replace(/\/$/, '') + '/'))) fail(p, `missing bundled link: ${resolved}`);
  };
  for (const [p, text] of texts) {
    if (p.endsWith('.md')) for (const match of text.matchAll(/\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)) resolveLink(p, match[1]);
    if (p.endsWith('.html')) {
      for (const match of text.matchAll(/(?:href|src)=["']([^"']+)["']/g)) resolveLink(p, match[1]);
      const scripts = [...text.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
      if (!scripts.length) fail(p, 'no inline diagram scripts');
      for (const [index, match] of scripts.entries()) {
        try { new vm.Script(match[1], { filename: `${p}#${index + 1}` }); }
        catch { fail(p, `invalid JavaScript in script ${index + 1}`); }
      }
      if (/<script\b[^>]*\bsrc\s*=/i.test(text)) fail(p, 'diagram must use bundled inline scripts');
    }
  }
  for (const name of expectedSkills) {
    const p = `skills/${name}/SKILL.md`;
    const text = texts.get(p) || '';
    const front = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
    // Deliberately restricted frontmatter format: two plain single-line fields.
    const lines = front?.[1].split(/\r?\n/) || [];
    if (lines.length !== 2 || lines[0] !== `name: ${name}` ||
        !/^description: [A-Za-z].+$/.test(lines[1] || '') ||
        /:(?:\s|$)|\s#/.test((lines[1] || '').slice(13))) fail(p, 'invalid name/description frontmatter');
    const meta = `skills/${name}/agents/openai.yaml`;
    const yaml = texts.get(meta) || '';
    // Validate the supported metadata shape instead of pretending to parse arbitrary YAML.
    const pattern = /^interface:\r?\n  display_name: "[^"\\\r\n]+"\r?\n  short_description: "[^"\\\r\n]+"\r?\n  default_prompt: "[^"\\\r\n]+"\r?\npolicy:\r?\n  allow_implicit_invocation: true\r?\n?$/;
    if (!pattern.test(yaml) || !yaml.includes(`$${name}`)) fail(meta, 'invalid interface/policy metadata or skill prompt');
    if (!listed.has(p) || !listed.has(meta)) fail(name, 'skill entry files absent from allowlist');
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(process.argv[2] || '.');
  try {
    const errors = validate(root, candidates(root));
    if (errors.length) { process.stderr.write(errors.join('\n') + '\n'); process.exitCode = 1; }
    else process.stdout.write('PASS: publication inventory, five skills, resources, metadata and diagram JS\n');
  } catch {
    process.stderr.write('Unable to inspect checkout; run inside a Git snapshot.\n');
    process.exitCode = 1;
  }
}
