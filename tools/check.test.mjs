import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { validate, candidates } from './check.mjs';

const source = fileURLToPath(new URL('../', import.meta.url));
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'agflow-check-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const files = JSON.parse(fs.readFileSync(path.join(source, 'bundle.json'))).publication_files;
  for (const p of files) {
    fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true });
    fs.copyFileSync(path.join(source, p), path.join(root, p));
  }
  const write = (p, content) => { fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true }); fs.writeFileSync(path.join(root, p), content); };
  return { root, files: [...files], write };
}

test('valid self-contained snapshot and real CLI succeed', t => {
  const { root, files } = fixture(t);
  assert.deepEqual(validate(root, files), []);
  execFileSync('git', ['init', '-q', root]);
  const run = spawnSync(process.execPath, [path.join(source, 'tools/check.mjs'), root], { encoding: 'utf8' });
  assert.equal(run.status, 0, run.stderr);
  assert.match(run.stdout, /^PASS:/);
});

test('reject missing resources, cross-skill references and diagram assets', t => {
  const { root, files, write } = fixture(t);
  write('skills/spec-design/references/openspec.md', '[missing](gone.md)\n[cross](../../orchestration/SKILL.md)');
  write('previews/process.html', '<a href="guild-ui/assets/font.woff2">asset</a><script>let valid = true;</script>');
  const errors = validate(root, files).join('\n');
  assert.match(errors, /missing bundled link: skills\/spec-design\/references\/gone.md/);
  assert.match(errors, /outside its self-contained/);
  assert.match(errors, /missing bundled link: previews\/guild-ui/);
});

test('reject malformed manifest, skill frontmatter, metadata and JavaScript', t => {
  const { root, files, write } = fixture(t);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'bundle.json')));
  manifest.skills.push('extra'); manifest.review_defaults.code_review_rounds = 4;
  write('bundle.json', JSON.stringify(manifest));
  write('skills/spec-design/SKILL.md', '---\nname: spec-design\ndescription: invalid: YAML\n---\n');
  write('skills/spec-design/agents/openai.yaml', 'interface: [broken');
  write('previews/process.html', '<script>const = ;</script>');
  const errors = validate(root, files).join('\n');
  for (const expected of [/exactly five/, /separate 1\/2/, /frontmatter/, /metadata/, /invalid JavaScript/]) assert.match(errors, expected);
});

test('reject candidate drift, absent files and extra skills', t => {
  const { root, files, write } = fixture(t);
  write('skills/extra/SKILL.md', 'unexpected'); files.push('skills/extra/SKILL.md');
  fs.rmSync(path.join(root, 'LICENSE'));
  const errors = validate(root, files.filter(p => p !== 'SECURITY.md')).join('\n');
  for (const expected of [/not in publication allowlist/, /directory inventory/, /LICENSE: missing/, /SECURITY.md: allowlisted file absent/]) assert.match(errors, expected);
});

test('reject unsafe manifest paths and missing required release files', t => {
  const { root, files, write } = fixture(t);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'bundle.json')));
  manifest.publication_files = manifest.publication_files.filter(p => p !== 'LICENSE');
  write('bundle.json', JSON.stringify(manifest));
  assert.match(validate(root, files).join('\n'), /LICENSE: required publication file/);
  manifest.publication_files.push('.git/config');
  write('bundle.json', JSON.stringify(manifest));
  assert.match(validate(root, files).join('\n'), /invalid publication allowlist/);
});

test('reject symlink resources', { skip: process.platform === 'win32' ? 'unprivileged Windows symlink creation is unavailable' : false }, t => {
  const { root, files } = fixture(t);
  const p = path.join(root, 'LICENSE'); fs.rmSync(p); fs.symlinkSync(path.join(source, 'LICENSE'), p);
  assert.match(validate(root, files).join('\n'), /LICENSE: missing, non-text or non-regular/);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'bundle.json')));
  manifest.publication_files.push('../escape'); fs.writeFileSync(path.join(root, 'bundle.json'), JSON.stringify(manifest));
  assert.match(validate(root, files).join('\n'), /invalid publication allowlist/);
});

test('reject private tracked paths even when ignored; omit ignored local reports', t => {
  const { root, write } = fixture(t);
  execFileSync('git', ['init', '-q', root]);
  write('.local/report.md', 'local evidence');
  assert.ok(!candidates(root).includes('.local/report.md'));
  execFileSync('git', ['-C', root, 'add', '-f', '--', '.local/report.md']);
  assert.match(validate(root, candidates(root)).join('\n'), /\.local\/report.md: private/);
});

test('privacy and credential diagnostics redact values', t => {
  const { root, files, write } = fixture(t);
  const privateMail = ['person', 'example.org'].join('@');
  const privateHome = ['/', 'Users', '/', 'sample'].join('');
  const token = ['gh', 'p_', 'a'.repeat(36)].join('');
  write('SECURITY.md', `${privateMail}\n${privateHome}\n${token}`);
  const errors = validate(root, files).join('\n');
  for (const expected of [/personal email/, /personal machine path/, /possible credential/]) assert.match(errors, expected);
  for (const value of [privateMail, privateHome, token]) assert.ok(!errors.includes(value));
});
