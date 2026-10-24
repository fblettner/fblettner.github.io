#!/usr/bin/env node
/**
 * Generates the four exports read by AI assistants and LLM crawlers:
 *   static/llms.txt, static/llms.fr.txt          — index: one line per page
 *   static/llms-full.txt, static/llms-full.fr.txt — full text, same order
 *
 * Runs before every build (`prebuild` in package.json). The page list comes
 * from the docs themselves (EN `docs/`, FR `i18n/fr/.../current/`), grouped
 * into the SECTIONS below by URL prefix and ordered inside a section by
 * sidebars.ts. Do not edit the output files by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://docs.nomana-it.fr';
const DOCS = {
  en: path.join(ROOT, 'docs'),
  fr: path.join(ROOT, 'i18n/fr/docusaurus-plugin-content-docs/current'),
};

// ── Header ──────────────────────────────────────────────────────────────────
const HEADER = {
  en: {
    index: '# Nomana-IT Documentation',
    full: '# Nomana-IT Documentation — full text for LLMs',
    summary:
      'Documentation of the software published by Nomana-IT, a software publisher and JD Edwards / Oracle / AI consultancy. ' +
      'Liberty Next is a low-code application platform; Nomaflow (scheduling and orchestration), Nomasx-1 (security, licence compliance ' +
      'and segregation of duties) and Nomajde (JD Edwards EnterpriseOne companion) are built with and for Liberty Next. ' +
      'NomaUBL is a standalone e-invoicing platform for the French reform (UBL, Plateforme Agréée, e-reporting). ' +
      'The site also documents open-source JD Edwards and BI Publisher APIs. Liberty Next and NomaUBL include built-in AI assistants, ' +
      'powered by Claude (Anthropic), that answer from the documentation and from the data of the instance.',
    links: (full) =>
      `Company: https://nomana-it.fr/ · AI services: https://nomana-it.fr/ai/ · ` +
      (full ? 'Index: https://docs.nomana-it.fr/llms.txt · French: https://docs.nomana-it.fr/llms-full.fr.txt'
            : 'Full text: https://docs.nomana-it.fr/llms-full.txt · French: https://docs.nomana-it.fr/llms.fr.txt'),
  },
  fr: {
    index: '# Documentation Nomana-IT',
    full: '# Documentation Nomana-IT — texte intégral pour LLM',
    summary:
      "Documentation des logiciels édités par Nomana-IT, éditeur de logiciels et cabinet de conseil JD Edwards, Oracle et IA. " +
      "Liberty Next est une plateforme applicative low-code ; Nomaflow (planification et orchestration), Nomasx-1 (sécurité, conformité " +
      "des licences et séparation des tâches) et Nomajde (application compagnon de JD Edwards EnterpriseOne) sont conçus avec et pour Liberty Next. " +
      "NomaUBL est une plateforme autonome de facturation électronique pour la réforme française (UBL, Plateforme Agréée, e-reporting). " +
      "Le site documente aussi des API open source pour JD Edwards et BI Publisher. Liberty Next et NomaUBL intègrent des assistants IA, " +
      "fondés sur Claude (Anthropic), qui répondent à partir de la documentation et des données de l'instance.",
    links: (full) =>
      `Société : https://nomana-it.fr/ · Services IA : https://nomana-it.fr/ai/ · ` +
      (full ? 'Index : https://docs.nomana-it.fr/llms.fr.txt · Anglais : https://docs.nomana-it.fr/llms-full.txt'
            : 'Texte intégral : https://docs.nomana-it.fr/llms-full.fr.txt · Anglais : https://docs.nomana-it.fr/llms.txt'),
  },
};

// ── Sections, by importance. A page goes to the first section that matches. ─
const SECTIONS = [
  {
    en: 'Products — overviews and getting started',
    fr: 'Produits — présentation et prise en main',
    match: [
      'liberty/getting-started', 'liberty/framework/overview', 'liberty/framework/what-you-can-build',
      'liberty/nomaflow/overview', 'liberty/nomaflow/getting-started',
      'liberty/nomasx1/overview', 'liberty/nomajde/overview',
      'nomaubl/getting-started', 'api/getting-started',
    ],
    exact: true,
  },
  {
    en: 'AI assistants', fr: 'Assistants IA',
    match: ['liberty/framework/ai-assistant', 'liberty/framework/cookbook/expose-to-ai', 'nomaubl/application/ai-capabilities'],
    exact: true,
  },
  {en: 'Liberty Next — framework', fr: 'Liberty Next — framework',
   match: ['liberty/framework/', 'liberty/installation/', 'liberty/monitoring/', 'liberty/technical/', 'liberty/references/']},
  {en: 'Nomaflow — scheduling and orchestration', fr: 'Nomaflow — planification et orchestration', match: ['liberty/nomaflow/']},
  {en: 'Nomasx-1 — security and licence compliance', fr: 'Nomasx-1 — sécurité et conformité des licences', match: ['liberty/nomasx1/']},
  {en: 'Nomajde — JD Edwards companion', fr: 'Nomajde — application compagnon JD Edwards', match: ['liberty/nomajde/']},
  {en: 'NomaUBL — e-invoicing', fr: 'NomaUBL — facturation électronique', match: ['nomaubl/']},
  {en: 'JD Edwards and BI Publisher APIs', fr: 'API JD Edwards et BI Publisher', match: ['api/']},
  {en: 'Liberty Core — React UI components and services', fr: 'Liberty Core — composants et services React', match: ['liberty/core/']},
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== '_legacy' && !e.name.startsWith('_')) walk(p, out); }
    else if (/\.mdx?$/.test(e.name) && !e.name.startsWith('_')) out.push(p);
  }
  return out;
}

function splitFrontmatter(text) {
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---\n', 4);
    if (end !== -1) return [text.slice(4, end), text.slice(end + 5)];
  }
  return ['', text];
}

function fm(front, name) {
  const m = front.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm'));
  if (!m) return null;
  let v = m[1].trim();
  if (v.length >= 2 && `"'`.includes(v[0]) && v.at(-1) === v[0]) v = v.slice(1, -1);
  return v;
}

/** Doc id as Docusaurus builds it: number prefixes stripped, index → folder. */
function docId(rel) {
  let segs = rel.replace(/\.mdx?$/, '').split('/').map((s) => s.replace(/^\d+[-_.]/, ''));
  if (segs.at(-1) === 'index' && segs.length > 1) segs = segs.slice(0, -1);
  return segs.join('/');
}

function sidebarOrder() {
  const sb = fs.readFileSync(path.join(ROOT, 'sidebars.ts'), 'utf8');
  const ids = [];
  for (const m of sb.matchAll(/'((?:liberty|nomaubl|api)\/[^']+)'/g)) if (!ids.includes(m[1])) ids.push(m[1]);
  return ids;
}

/** Prose without code, JSX, SVG, imports and comments — for the full text. */
function cleanProse(seg) {
  const spans = [];
  seg = seg.replace(/`[^`\n]*`/g, (m) => { spans.push(m); return `\u0000${spans.length - 1}\u0000`; });
  seg = seg.replace(/^\s*(import|export)\s+.*$/gm, '');
  seg = seg.replace(/<!--[\s\S]*?-->/g, '');
  seg = seg.replace(/<svg\b[\s\S]*?<\/svg>/gi, '');
  seg = seg.replace(/\s*style=\{\{[\s\S]*?\}\}/g, '');
  seg = seg.replace(/<\/?[A-Za-z][A-Za-z0-9.]*(\s[^<>]*?)?\/?>/g, '');
  return seg.replace(/\u0000(\d+)\u0000/g, (_, i) => spans[+i]);
}

function cleanBody(body) {
  body = body.replace(/^\s+/, '').replace(/^#\s+.*\n/, '');
  const parts = body.split(/(```[\s\S]*?```)/);
  return parts.map((p, i) => (i % 2 ? p : cleanProse(p))).join('').replace(/\n{3,}/g, '\n\n').trim();
}

/** First sentence of the first prose paragraph — fallback description. */
function firstSentence(body) {
  const text = cleanProse(body.replace(/```[\s\S]*?```/g, '')).replace(/^#{1,6}\s.*$/gm, '');
  for (let para of text.split(/\n\s*\n/)) {
    para = para.trim();
    if (!para || /^(#|:::|\||-|\*|>|\d+\.|!\[)/.test(para)) continue;
    para = para.replace(/\s+/g, ' ').replace(/\*\*|__/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    if (para.length < 25) continue;
    const m = para.match(/^(.+?[.!?])(\s|$)/);
    let s = (m ? m[1] : para).trim();
    if (s.length > 240) s = s.slice(0, 237).replace(/\s+\S*$/, '') + '…';
    return s;
  }
  return null;
}

// ── Build ───────────────────────────────────────────────────────────────────
function collect(lang) {
  const root = DOCS[lang];
  const pages = [];
  for (const file of walk(root)) {
    const rel = path.relative(root, file).split(path.sep).join('/');
    if (rel === 'robots.txt') continue;
    const raw = fs.readFileSync(file, 'utf8');
    const [front, body] = splitFrontmatter(raw);
    if (fm(front, 'draft') === 'true' || fm(front, 'unlisted') === 'true') continue;
    const id = docId(rel);
    const h1 = body.match(/^#\s+(.+?)\s*$/m);
    const title = fm(front, 'title') || (h1 && h1[1]) || fm(front, 'sidebar_label') || id.split('/').at(-1);
    const desc = fm(front, 'description') || firstSentence(body.replace(/^#\s+.*$/m, ''));
    const url = `${BASE}${lang === 'fr' ? '/fr' : ''}/${id}/`;
    pages.push({id, title, desc, url, body});
  }
  return pages;
}

const PRODUCTS = [
  ['liberty/nomaflow/', 'Nomaflow'], ['liberty/nomasx1/', 'Nomasx-1'], ['liberty/nomajde/', 'Nomajde'],
  ['liberty/core/', 'Liberty Core'], ['liberty/', 'Liberty Next'], ['nomaubl/', 'NomaUBL'], ['api/', 'JDE API'],
];

/** Title that names its product, so an entry quoted alone stays unambiguous. */
function qualified(p) {
  const prod = PRODUCTS.find(([pre]) => p.id.startsWith(pre));
  if (!prod) return p.title;
  const words = prod[1].toLowerCase().split(' ');
  const t = p.title.toLowerCase();
  if (t.includes(prod[1].toLowerCase()) || (prod[1] === 'Liberty Next' && t.includes('liberty')) || (prod[1] === 'JDE API' && /jde|jd edwards|bi publisher|nomab/.test(t))) return p.title;
  return `${prod[1]} — ${p.title}`;
}

function sectionOf(id) {
  return SECTIONS.findIndex((s) => s.match.some((m) => (s.exact ? id === m : id.startsWith(m))));
}

function build(lang) {
  const order = sidebarOrder();
  const rank = (id) => { const i = order.indexOf(id); return i === -1 ? 1e6 : i; };
  const pages = collect(lang);
  const groups = SECTIONS.map(() => []);
  const missing = [];
  for (const p of pages) {
    const s = sectionOf(p.id);
    if (s === -1) { console.warn(`  [${lang}] no section for ${p.id}`); continue; }
    groups[s].push(p);
    if (!p.desc) missing.push(p.id);
  }
  groups.forEach((g, i) => {
    const ex = SECTIONS[i].exact ? SECTIONS[i].match : null;
    g.sort((a, b) => ex ? ex.indexOf(a.id) - ex.indexOf(b.id) : (rank(a.id) - rank(b.id)) || a.id.localeCompare(b.id));
  });

  const H = HEADER[lang];
  const idx = [H.index, '', `> ${H.summary}`, '', H.links(false), ''];
  const full = [H.full, '', `> ${H.summary}`, '', H.links(true), ''];
  groups.forEach((g, i) => {
    if (!g.length) return;
    const name = SECTIONS[i][lang];
    idx.push(`## ${name}`, '');
    for (const p of g) idx.push(`- [${qualified(p)}](${p.url})${p.desc ? `: ${p.desc}` : ''}`);
    idx.push('');
    full.push('---', '', `# === ${name} ===`, '');
    for (const p of g) {
      full.push(`## ${qualified(p)}`, `Source: ${p.url}`, '');
      if (p.desc) full.push(p.desc, '');
      full.push(cleanBody(p.body), '', '---', '');
    }
  });

  const suf = lang === 'en' ? '' : '.fr';
  fs.writeFileSync(path.join(ROOT, 'static', `llms${suf}.txt`), idx.join('\n').trimEnd() + '\n');
  fs.writeFileSync(path.join(ROOT, 'static', `llms-full${suf}.txt`), full.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
  const n = groups.reduce((a, g) => a + g.length, 0);
  console.log(`llms [${lang}]: ${n} pages in ${groups.filter((g) => g.length).length} sections` +
    (missing.length ? ` — ${missing.length} without description: ${missing.join(', ')}` : ''));
}

for (const lang of ['en', 'fr']) build(lang);
