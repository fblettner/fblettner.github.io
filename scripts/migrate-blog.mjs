#!/usr/bin/env node
// Migrate MkDocs Material blog → Docusaurus blog.
// - Renames docs/blog/posts/{cat}/{name}.md → blog/YYYY-MM-DD-{name}.md
// - Rewrites frontmatter: categories → tags, drop `hide`, keep date+authors
// - Migrates docs/blog/.authors.yml → blog/authors.yml (schema-mapped)
// - Generates blog/tags.yml

import {readFile, writeFile, mkdir, readdir, rm} from 'node:fs/promises';
import {join, basename} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC_DIR = join(ROOT, 'docs/blog/posts');
const OUT_DIR = join(ROOT, 'blog');

// MkDocs category strings → Docusaurus tag IDs
const TAG_MAP = {
  'JD Edwards': 'jd-edwards',
  'Oracle': 'oracle',
  'MkDocs Materials': 'mkdocs',
  'MkDocs Material': 'mkdocs',
};

await mkdir(OUT_DIR, {recursive: true});

// --- gather .md files ----------------------------------------------------
async function* walk(dir) {
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.md')) yield p;
  }
}

const tagsUsed = new Set();

for await (const file of walk(SRC_DIR)) {
  const text = await readFile(file, 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) {
    console.warn(`Skipping (no frontmatter): ${file}`);
    continue;
  }
  const [, fmRaw, body] = m;

  // Parse frontmatter (small subset only)
  const fm = {};
  const fmLines = fmRaw.split('\n');
  for (let i = 0; i < fmLines.length; i++) {
    const line = fmLines[i];
    let mm;
    if ((mm = line.match(/^date\s*:\s*(\S+)/))) fm.date = mm[1];
    else if (/^authors\s*:\s*$/.test(line)) {
      fm.authors = [];
      while (++i < fmLines.length && /^\s+-\s*\S/.test(fmLines[i])) {
        fm.authors.push(fmLines[i].replace(/^\s+-\s*/, '').trim());
      }
      i--;
    } else if (/^categories\s*:\s*$/.test(line)) {
      fm.categories = [];
      while (++i < fmLines.length && /^\s+-\s*\S/.test(fmLines[i])) {
        fm.categories.push(fmLines[i].replace(/^\s+-\s*/, '').trim());
      }
      i--;
    }
    // `hide:` and any others: dropped
  }

  if (!fm.date) {
    console.warn(`Skipping (no date): ${file}`);
    continue;
  }
  const tags = (fm.categories ?? []).map(c => TAG_MAP[c] ?? c.toLowerCase().replace(/\s+/g, '-'));
  tags.forEach(t => tagsUsed.add(t));

  const name = basename(file, '.md');
  const outName = `${fm.date}-${name}.md`;
  const outPath = join(OUT_DIR, outName);

  // Build new frontmatter
  const newFm = [
    'authors:',
    ...fm.authors.map(a => `  - ${a}`),
  ];
  if (tags.length) {
    newFm.push('tags:');
    tags.forEach(t => newFm.push(`  - ${t}`));
  }

  const newText = `---\n${newFm.join('\n')}\n---\n${body}`;
  await writeFile(outPath, newText);
  console.log(`  ✓ ${name}.md → blog/${outName}`);
}

// --- authors.yml ---------------------------------------------------------
const authorsSrc = join(ROOT, 'docs/blog/.authors.yml');
const authorsRaw = await readFile(authorsSrc, 'utf8');
// Original schema: authors: { fblettner: { name, description, avatar } }
// Docusaurus schema: <id>: { name, title, image_url, page: true }
// Simple transform via line replacement (single author here).
const newAuthors = authorsRaw
  .replace(/^authors:\n/, '')
  .replace(/^ {2}([a-z0-9_-]+):/m, '$1:')
  .replace(/^( {2,4})name:/gm, '$1name:')
  .replace(/^( {2,4})description:/gm, '$1title:')
  .replace(/^( {2,4})avatar:\s*(.+)$/gm, (_, indent, val) => {
    const cleaned = val.trim().replace(/^assets\//, '/assets/');
    return `${indent}image_url: ${cleaned}`;
  });
await writeFile(join(OUT_DIR, 'authors.yml'), newAuthors);
console.log('  ✓ authors.yml');

// --- tags.yml ------------------------------------------------------------
const tagsContent = [...tagsUsed].sort().map(t => {
  // human-readable label from id
  const label = Object.entries(TAG_MAP).find(([, v]) => v === t)?.[0]
    ?? t.replace(/(^|-)([a-z])/g, (_, _s, c) => ` ${c.toUpperCase()}`).trim();
  return `${t}:\n  label: ${label}\n  permalink: /tags/${t}\n  description: Posts tagged ${label}.`;
}).join('\n\n');
await writeFile(join(OUT_DIR, 'tags.yml'), tagsContent + '\n');
console.log('  ✓ tags.yml');

// --- delete original blog dir -------------------------------------------
await rm(join(ROOT, 'docs/blog'), {recursive: true, force: true});
console.log('  ✓ removed docs/blog/');
