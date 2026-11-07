// Structural checks for the bundle. No network, installation or provider calls.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(process.argv[2] || '.');
const files = execFileSync('git', ['-C', root, 'ls-files', '--cached', '--others', '--exclude-standard', '-z'],
  { encoding: 'utf8' }).split('\0').filter(f => f && fs.existsSync(path.join(root, f)));
const errors = [];
const fail = (file, why) => errors.push(`${file}: ${why}`);
const read = f => { try { return fs.readFileSync(path.join(root, f), 'utf8'); } catch { fail(f, 'missing'); return ''; } };
const machinePath = /(?:\/Users\/|\/home\/)[\w.-]+|[A-Z]:\\Users\\/;
const email = /[\w.%+-]+@[\w-]+(?:\.[\w-]+)*\.[a-z]{2,}\b/i;
// Optional, git-ignored list of private words: one case-insensitive entry per line.
const denyPath = path.join(root, '.local', 'denylist.txt');
const denylist = fs.existsSync(denyPath)
  ? fs.readFileSync(denyPath, 'utf8').split(/\r?\n/).map(l => l.trim().toLowerCase()).filter(l => l && !l.startsWith('#'))
  : [];

for (const f of files) {
  const text = read(f);
  if (machinePath.test(text)) fail(f, 'machine path');
  if (email.test(text)) fail(f, 'email address');
  const lower = text.toLowerCase();
  for (const entry of denylist) if (lower.includes(entry)) fail(f, `denylisted entry "${entry}"`);
  if (!f.endsWith('.md')) continue;
  for (const [, raw] of text.matchAll(/\]\(([^\s)]+)\)/g)) {
    if (/^(?:[a-z][\w+.-]*:|#)/i.test(raw)) continue;
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(f), raw.split('#')[0]));
    if (target.startsWith('..') || !fs.existsSync(path.join(root, target))) fail(f, `broken link ${raw}`);
    const skill = /^skills\/[^/]+\//.exec(f)?.[0];
    if (skill && !target.startsWith(skill)) fail(f, `link leaves its skill directory: ${raw}`);
  }
}

const bundle = JSON.parse(read('bundle.json') || '{}');
const sets = [bundle.skills, ...Object.values(bundle.optional || {})];
if (!sets.every(set => Array.isArray(set) && set.every(n => typeof n === 'string'))) fail('bundle.json', 'skills and each optional set must be lists of names');
const skills = sets.filter(Array.isArray).flat();
if (new Set(skills).size !== skills.length) fail('bundle.json', 'a skill is listed more than once');
const dirs = fs.readdirSync(path.join(root, 'skills')).filter(d => fs.statSync(path.join(root, 'skills', d)).isDirectory());
if ([...new Set(skills)].sort().join() !== dirs.sort().join()) fail('bundle.json', 'core and optional skills differ from skills/ directories');
for (const name of dirs) {
  const front = /^---\n([\s\S]*?)\n---\n/.exec(read(`skills/${name}/SKILL.md`))?.[1].split('\n') || [];
  if (front.length !== 2 || front[0] !== `name: ${name}` || !/^description: \S/.test(front[1]) ||
      /: | #/.test(front[1].slice(13))) fail(`skills/${name}/SKILL.md`, 'frontmatter must be exactly name and description');
  const yaml = read(`skills/${name}/agents/openai.yaml`);
  const shape = /^interface:\n  display_name: "[^"\n]+"\n  short_description: "[^"\n]+"\n  default_prompt: "[^"\n]+"\npolicy:\n  allow_implicit_invocation: (?:true|false)\n$/;
  if (!shape.test(yaml) || !yaml.includes(`$${name}`)) fail(`skills/${name}/agents/openai.yaml`, 'unexpected shape or missing $skill prompt');
}

if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${files.length} files, ${dirs.length} skills`);
