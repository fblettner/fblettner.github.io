#!/usr/bin/env node
// One-shot scaffold for the new NomaUBL doc structure (mirrors the app menu).
// Creates EN stubs under docs/nomaubl/ and FR stubs under
// i18n/fr/docusaurus-plugin-content-docs/current/nomaubl/.
// Moves old NomaUBL content to docs/nomaubl/_legacy/ for reference.

import {mkdir, writeFile, rename, access, readdir} from 'node:fs/promises';
import {join, dirname} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const EN_BASE = join(ROOT, 'docs/nomaubl');
const FR_BASE = join(ROOT, 'i18n/fr/docusaurus-plugin-content-docs/current/nomaubl');

// ---------------------------------------------------------------------------
// Structure: each top-level entry is a category in the sidebar.
// Each leaf (entry without `pages`) is a markdown page.
// ---------------------------------------------------------------------------
const STRUCTURE = [
  {
    path: 'application',
    pages: [
      {slug: 'dashboard',          title_en: 'Dashboard',          title_fr: 'Tableau de bord'},
      {slug: 'invoices',           title_en: 'Invoices',           title_fr: 'Factures'},
      {slug: 'ereporting',         title_en: 'E-Reporting',        title_fr: 'E-Reporting'},
      {slug: 'edirectory',         title_en: 'E-Directory',        title_fr: 'E-Directory'},
      {slug: 'integration-errors', title_en: 'Integration Errors', title_fr: "Erreurs d'intégration"},
    ],
  },
  {
    path: 'documentation',
    pages: [
      {slug: 'status-reference', title_en: 'Status Reference', title_fr: 'Référence des statuts'},
      {slug: 'reason-codes',     title_en: 'Reason Codes',     title_fr: 'Codes motifs'},
      {slug: 'ubl-reference',    title_en: 'UBL Reference',    title_fr: 'Référence UBL'},
    ],
  },
  {
    path: 'sync',
    pages: [
      {slug: 'fetch-input',        title_en: 'Fetch Input',        title_fr: 'Récupération des entrées'},
      {slug: 'import',             title_en: 'Import',             title_fr: 'Import'},
      {slug: 'retrieve-statuses',  title_en: 'Retrieve Statuses',  title_fr: 'Récupération des statuts'},
    ],
  },
  {
    path: 'processing',
    pages: [
      {slug: 'xml',                  title_en: 'XML',                  title_fr: 'XML'},
      {slug: 'ubl',                  title_en: 'UBL',                  title_fr: 'UBL'},
      {slug: 'extract-and-process',  title_en: 'Extract and Process',  title_fr: 'Extraction et traitement'},
      {slug: 'process-api',          title_en: 'Process API',          title_fr: 'API de traitement'},
    ],
  },
  {
    path: 'ubl-tools',
    pages: [
      {slug: 'validate',    title_en: 'Validate',    title_fr: 'Validation'},
      {slug: 'xsl-editor',  title_en: 'XSL Editor',  title_fr: 'Éditeur XSL'},
      {slug: 'xml-viewer',  title_en: 'XML Viewer',  title_fr: 'Visualiseur XML'},
      {
        path: 'ubl-defaults',
        pages: [
          {slug: 'overview',                  title_en: 'Overview',                  title_fr: 'Vue d\'ensemble'},
          {slug: 'ubl-header-defaults',       title_en: 'UBL Header Defaults',       title_fr: 'Valeurs par défaut de l\'en-tête UBL'},
          {slug: 'scheme-ids',                title_en: 'Scheme IDs',                title_fr: 'Identifiants de schéma'},
          {slug: 'invoice-type',              title_en: 'Invoice Type',              title_fr: 'Type de facture'},
          {slug: 'business-process-type',     title_en: 'Business Process Type',     title_fr: 'Type de processus métier'},
          {slug: 'payment-code-mapping',      title_en: 'Payment Code Mapping',      title_fr: 'Mappage des codes paiement'},
          {slug: 'unit-of-measure-mapping',   title_en: 'Unit of Measure Mapping',   title_fr: 'Mappage des unités de mesure'},
          {slug: 'currency-code-mapping',     title_en: 'Currency Code Mapping',     title_fr: 'Mappage des codes devise'},
          {slug: 'document-type-bar-routing', title_en: 'Document Type (BAR Routing)', title_fr: 'Type de document (routage BAR)'},
          {slug: 'vat-categories',            title_en: 'VAT Categories',            title_fr: 'Catégories de TVA'},
          {slug: 'suppliers-companies',       title_en: 'Suppliers Companies',       title_fr: 'Sociétés fournisseurs'},
          {slug: 'french-legal-notes',        title_en: 'French Legal Notes',        title_fr: 'Mentions légales françaises'},
        ],
      },
    ],
  },
  {
    path: 'jdedwards',
    pages: [
      {slug: 'extract',     title_en: 'Extract',     title_fr: 'Extraction'},
      {slug: 'extract-ftp', title_en: 'Extract FTP', title_fr: 'Extraction FTP'},
      {slug: 'extract-bip', title_en: 'Extract BIP', title_fr: 'Extraction BIP'},
    ],
  },
  {
    path: 'management',
    pages: [
      {slug: 'file-versions', title_en: 'File Versions', title_fr: 'Versions de fichiers'},
    ],
  },
  {
    path: 'configuration',
    pages: [
      {
        path: 'settings',
        pages: [
          {slug: 'documents', title_en: 'Documents', title_fr: 'Documents'},
          {
            path: 'system',
            pages: [
              {slug: 'edirectory',      title_en: 'E-Directory',      title_fr: 'E-Directory'},
              {slug: 'einvoicing',      title_en: 'E-Invoicing',      title_fr: 'E-Invoicing'},
              {slug: 'fetch-invoices',  title_en: 'Fetch Invoices',   title_fr: 'Récupération des factures'},
              {slug: 'global',          title_en: 'Global',           title_fr: 'Global'},
              {slug: 'document-types',  title_en: 'Document Types',   title_fr: 'Types de documents'},
              {slug: 'statuses',        title_en: 'Statuses',         title_fr: 'Statuts'},
            ],
          },
          {slug: 'reference-lists', title_en: 'Reference Lists', title_fr: 'Listes de référence'},
          {slug: 'api-connectors',  title_en: 'API Connectors',  title_fr: 'Connecteurs API'},
          {
            path: 'database-connectors',
            pages: [
              {slug: 'nomaubl',   title_en: 'NomaUBL',    title_fr: 'NomaUBL'},
              {slug: 'jdedwards', title_en: 'JD Edwards', title_fr: 'JD Edwards'},
            ],
          },
          {slug: 'ftp-connectors', title_en: 'FTP Connectors', title_fr: 'Connecteurs FTP'},
          {
            path: 'security',
            pages: [
              {slug: 'users', title_en: 'Users', title_fr: 'Utilisateurs'},
              {slug: 'roles', title_en: 'Roles', title_fr: 'Rôles'},
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Stub generators
// ---------------------------------------------------------------------------
const stubEn = (title) => `---
title: ${title}
description: "${title} — documentation in progress."
---

# ${title}

:::info Work in progress
This page is being written. Check back soon.
:::
`;

const stubFr = (title) => `---
title: ${title}
description: "${title} — documentation en cours de rédaction."
---

# ${title}

:::info En cours de rédaction
Cette page est en cours de rédaction. Revenez bientôt.
:::
`;

// ---------------------------------------------------------------------------
// Walk the structure and write stubs
// ---------------------------------------------------------------------------
async function writeStub(basePath, segments, slug, title, content) {
  const dir = join(basePath, ...segments);
  const file = join(dir, `${slug}.md`);
  await mkdir(dir, {recursive: true});
  await writeFile(file, content);
  return file;
}

async function walk(node, segments = []) {
  if (node.pages) {
    const next = [...segments, ...(node.path ? [node.path] : [])];
    for (const child of node.pages) await walk(child, next);
    return;
  }
  // Leaf page
  const enFile = await writeStub(EN_BASE, segments, node.slug, node.title_en, stubEn(node.title_en));
  const frFile = await writeStub(FR_BASE, segments, node.slug, node.title_fr, stubFr(node.title_fr));
  console.log(`  + ${enFile.replace(ROOT, '')}`);
  console.log(`  + ${frFile.replace(ROOT, '')}`);
}

// ---------------------------------------------------------------------------
// Move existing content to _legacy/
// ---------------------------------------------------------------------------
async function moveLegacy() {
  const legacyDir = join(EN_BASE, '_legacy');
  await mkdir(legacyDir, {recursive: true});
  const movables = ['installation', 'configuration', 'user-guide', 'features', 'reference', 'release-notes.md', 'getting-started.md'];
  for (const name of movables) {
    const src = join(EN_BASE, name);
    try {
      await access(src);
      await rename(src, join(legacyDir, name));
      console.log(`  → moved ${name} to _legacy/`);
    } catch {
      // not present, skip
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log('• Moving existing NomaUBL content to _legacy/ ...');
await moveLegacy();

console.log('\n• Scaffolding new pages ...');
for (const top of STRUCTURE) await walk(top);

// Re-create getting-started.md as a stub at the NomaUBL root
const gsEn = stubEn('Getting Started with NomaUBL');
const gsFr = stubFr('Démarrer avec NomaUBL');
await writeFile(join(EN_BASE, 'getting-started.md'), gsEn);
await mkdir(FR_BASE, {recursive: true});
await writeFile(join(FR_BASE, 'getting-started.md'), gsFr);
console.log('  + docs/nomaubl/getting-started.md (stub — to be written last)');
console.log('  + i18n/fr/.../nomaubl/getting-started.md');

console.log('\n✓ Done.');
