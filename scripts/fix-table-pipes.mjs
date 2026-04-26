#!/usr/bin/env node
// Escape `|` inside backtick-delimited code spans within markdown table rows.
// MDX 3 / GFM table parser breaks on bare `|` inside `code` cells.

import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join, relative} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

async function* walk(dir) {
  for (const e of await readdir(dir, {withFileTypes: true})) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}

let modified = 0;
for await (const file of walk(join(ROOT, 'docs'))) {
  const original = await readFile(file, 'utf8');
  const lines = original.split('\n');
  let inFence = false;
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*```/.test(l) || /^\s*~~~/.test(l)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!l.trim().startsWith('|')) continue;
    // Replace pipes inside backtick-delimited spans on this line only.
    const next = l.replace(/`([^`]+)`/g, (m, inner) => {
      if (!inner.includes('|')) return m;
      return '`' + inner.replaceAll('|', '\\|') + '`';
    });
    if (next !== l) {
      lines[i] = next;
      changed = true;
    }
  }
  if (changed) {
    await writeFile(file, lines.join('\n'));
    modified++;
    console.log(`  ✓ ${relative(ROOT, file)}`);
  }
}
console.log(`${modified} files modified.`);
