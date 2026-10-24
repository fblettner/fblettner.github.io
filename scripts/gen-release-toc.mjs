#!/usr/bin/env node
/**
 * Rebuilds the version bar at the top of the NomaUBL release notes (EN + FR)
 * from the `## <version> — <date> \{#anchor\}` headings: the latest versions
 * as pills, the older ones folded in a <details> block grouped by month.
 * Runs before every build (`prebuild`). The bar sits between the
 * `versions:start` and `versions:end` MDX comment markers.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILES = {
  en: 'docs/nomaubl/release-notes.md',
  fr: 'i18n/fr/docusaurus-plugin-content-docs/current/nomaubl/release-notes.md',
};
const LABELS = {
  en: {versions: 'Versions', all: (n) => `All versions (${n})`},
  fr: {versions: 'Versions', all: (n) => `Toutes les versions (${n})`},
};
const VISIBLE = 6;
const START = '{/* versions:start */}';
const END = '{/* versions:end */}';

const BAR = "{{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}";
const BOX = "{{padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(148,163,184,0.25)', background: 'rgba(148,163,184,0.04)'}}";
const LABEL = "{{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}";
const MONTH = "{{fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, opacity: 0.55, minWidth: '64px'}}";
const PILL_LATEST = "{{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}";
const PILL = "{{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.35)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}";
const DATE = "{{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}";
const SUMMARY = "{{cursor: 'pointer', fontSize: '12px', fontWeight: 600, opacity: 0.8}}";

const pill = (v, latest) =>
  `<a href="#${v.anchor}" style=${latest ? PILL_LATEST : PILL}>${v.version} <span style=${DATE}>· ${v.date}</span></a>`;

function bar(lang, versions) {
  const L = LABELS[lang];
  const out = [`<div style=${BOX}>`, `  <div style=${BAR}>`, `    <span style=${LABEL}>${L.versions}</span>`];
  versions.slice(0, VISIBLE).forEach((v, i) => out.push(`    ${pill(v, i === 0)}`));
  out.push('  </div>');
  const rest = versions.slice(VISIBLE);
  if (rest.length) {
    out.push(`  <details style={{marginTop: '12px'}}>`, `    <summary style=${SUMMARY}>${L.all(versions.length)}</summary>`);
    const months = new Map();
    for (const v of rest) {
      const m = v.date.slice(0, 7);
      if (!months.has(m)) months.set(m, []);
      months.get(m).push(v);
    }
    for (const [m, vs] of months) {
      out.push(`    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', marginTop: '10px'}}>`);
      out.push(`      <span style=${MONTH}>${m}</span>`);
      for (const v of vs) out.push(`      ${pill(v, false)}`);
      out.push('    </div>');
    }
    out.push('  </details>');
  }
  out.push('</div>');
  return out.join('\n');
}

for (const [lang, rel] of Object.entries(FILES)) {
  const file = path.join(ROOT, rel);
  const src = fs.readFileSync(file, 'utf8');
  const versions = [...src.matchAll(/^## (\S+) — (\d{4}-\d\d-\d\d) \\\{#(v[\w-]+)\\\}/gm)]
    .map((m) => ({version: m[1], date: m[2], anchor: m[3]}));
  const a = src.indexOf(START), b = src.indexOf(END);
  if (a === -1 || b === -1) throw new Error(`${rel}: version bar markers not found`);
  const next = src.slice(0, a + START.length) + '\n' + bar(lang, versions) + '\n' + src.slice(b);
  if (next !== src) fs.writeFileSync(file, next);
  console.log(`release-notes toc [${lang}]: ${versions.length} versions, ${VISIBLE} shown`);
}
