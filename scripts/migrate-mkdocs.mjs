#!/usr/bin/env node
// One-shot migration: MkDocs Material → Docusaurus content
// - Converts admonitions (!!! and ???)
// - Converts inline HTML style="..." → style={{...}}
// - Rewrites frontmatter `hide:` to Docusaurus equivalents
// - Strips MkDocs-specific {.md-button} attr_list trailers
// Skips docs/blog/ (handled by migrate-blog.mjs).

import {readdir, readFile, writeFile, stat} from 'node:fs/promises';
import {join, relative} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'docs');

// --- helpers --------------------------------------------------------------

async function* walk(dir) {
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (p.endsWith('/blog') || p.endsWith('/assets')) continue;
      yield* walk(p);
    } else if (entry.name.endsWith('.md')) {
      yield p;
    }
  }
}

function splitFrontmatter(text) {
  if (!text.startsWith('---\n')) return {fm: null, body: text};
  const end = text.indexOf('\n---\n', 4);
  if (end === -1) return {fm: null, body: text};
  return {fm: text.slice(4, end), body: text.slice(end + 5)};
}

function rebuild(fm, body) {
  if (fm == null) return body;
  return `---\n${fm}\n---\n${body}`;
}

// Rewrite the `hide:` array in MkDocs frontmatter to Docusaurus flags.
function migrateFrontmatter(fm) {
  if (!fm) return fm;
  // Pull `hide:` block (YAML list, indented `- foo`).
  const lines = fm.split('\n');
  const out = [];
  const flags = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^hide\s*:\s*$/.test(line)) {
      // consume following indented `- xxx` items
      i++;
      while (i < lines.length && /^\s+-\s*\S/.test(lines[i])) {
        const item = lines[i].replace(/^\s+-\s*/, '').trim();
        if (item === 'toc') flags.push('hide_table_of_contents: true');
        else if (item === 'title') flags.push('hide_title: true');
        // 'navigation' and 'footer' have no per-page Docusaurus equivalent
        i++;
      }
      i--;
      continue;
    }
    // Inline: `hide: [toc, footer]`
    const inline = line.match(/^hide\s*:\s*\[([^\]]*)\]\s*$/);
    if (inline) {
      const items = inline[1].split(',').map(s => s.trim());
      if (items.includes('toc')) flags.push('hide_table_of_contents: true');
      if (items.includes('title')) flags.push('hide_title: true');
      continue;
    }
    out.push(line);
  }
  if (flags.length) out.push(...flags);
  return out.join('\n');
}

// MkDocs admonition types → Docusaurus admonition types
const ADMONITION_MAP = {
  note: 'note',
  abstract: 'info',
  info: 'info',
  tip: 'tip',
  hint: 'tip',
  success: 'tip',
  question: 'info',
  warning: 'warning',
  caution: 'warning',
  failure: 'danger',
  danger: 'danger',
  bug: 'danger',
  example: 'info',
  quote: 'note',
};

// Convert all `!!! type "title"` and `??? type "title"` blocks.
function convertAdmonitions(body) {
  const lines = body.split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(/^(!!!|\?\?\?\+?|\?\?\?) (\S+)(?: "([^"]*)")?\s*$/);
    if (!m) {
      out.push(line);
      i++;
      continue;
    }
    const [, marker, rawType, title] = m;
    const collapsible = marker.startsWith('???');
    const dType = ADMONITION_MAP[rawType.toLowerCase()] || 'note';

    // Capture body: subsequent lines that are blank OR indented ≥4 spaces.
    i++;
    const bodyLines = [];
    while (i < lines.length) {
      const l = lines[i];
      if (l === '' || /^[ \t]*$/.test(l)) {
        bodyLines.push('');
        i++;
        continue;
      }
      if (/^ {4}/.test(l)) {
        bodyLines.push(l.slice(4));
        i++;
        continue;
      }
      if (/^\t/.test(l)) {
        bodyLines.push(l.slice(1));
        i++;
        continue;
      }
      break;
    }
    // Trim trailing blank lines from body
    while (bodyLines.length && bodyLines[bodyLines.length - 1] === '') bodyLines.pop();

    if (collapsible) {
      out.push('<details>');
      out.push(`<summary>${title ?? rawType}</summary>`);
      out.push('');
      out.push(...bodyLines);
      out.push('');
      out.push('</details>');
    } else {
      const head = title ? `:::${dType}[${title}]` : `:::${dType}`;
      out.push(head);
      out.push(...bodyLines);
      out.push(':::');
    }
    out.push('');
  }
  return out.join('\n');
}

// Convert inline HTML style="..." → style={{...}} for MDX compatibility.
// Also escape HTML attribute names that conflict with JSX (class → className).
// Skip content inside fenced code blocks.
function convertInlineHtmlForMdx(body) {
  const lines = body.split('\n');
  let inFence = false;
  let fenceMarker = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^(\s*)(```+|~~~+)/);
    if (fenceMatch) {
      const marker = fenceMatch[2];
      if (!inFence) {
        inFence = true;
        fenceMarker = marker;
      } else if (marker.startsWith(fenceMarker[0]) && marker.length >= fenceMarker.length) {
        inFence = false;
        fenceMarker = '';
      }
      continue;
    }
    if (inFence) continue;
    // Skip indented code blocks (4+ spaces) only if not inside a list item context.
    // Simpler heuristic: don't transform lines starting with 4+ spaces.
    if (/^ {4,}/.test(line)) continue;

    // style="background:green; padding:10px" → style={{background:'green', padding:'10px'}}
    lines[i] = line.replace(/style="([^"]+)"/g, (_, css) => {
      const obj = css
        .split(';')
        .map(d => d.trim())
        .filter(Boolean)
        .map(d => {
          const idx = d.indexOf(':');
          if (idx === -1) return null;
          const prop = d.slice(0, idx).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          const val = d.slice(idx + 1).trim().replace(/'/g, "\\'");
          return `${prop}: '${val}'`;
        })
        .filter(Boolean)
        .join(', ');
      return `style={{${obj}}}`;
    });
  }
  return lines.join('\n');
}

// Strip MkDocs attr_list `{ .md-button ... }` trailers from inline links.
// e.g. `[X](Y){ .md-button .md-button--primary }` → `[X](Y)`
function stripAttrLists(body) {
  return body.replace(/\]\(([^)]+)\)\{[^}]*\}/g, ']($1)');
}

// --- main -----------------------------------------------------------------

let processed = 0;
let modified = 0;
const errors = [];

for await (const file of walk(DOCS)) {
  processed++;
  try {
    const original = await readFile(file, 'utf8');
    const {fm, body} = splitFrontmatter(original);
    const newFm = migrateFrontmatter(fm);
    let newBody = convertAdmonitions(body);
    newBody = convertInlineHtmlForMdx(newBody);
    newBody = stripAttrLists(newBody);
    const next = rebuild(newFm, newBody);
    if (next !== original) {
      await writeFile(file, next);
      modified++;
      console.log(`  ✓ ${relative(ROOT, file)}`);
    }
  } catch (err) {
    errors.push({file, err});
    console.error(`  ✗ ${relative(ROOT, file)}: ${err.message}`);
  }
}

console.log(`\n${processed} files processed, ${modified} modified, ${errors.length} errors.`);
if (errors.length) process.exit(1);
