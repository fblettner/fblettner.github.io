---
title: Developer Reference
description: "The NomaUBL Developer page — tables and columns, configuration keys, flows, impact analysis and the API of the instance — generated at build time from the database DDL, the configuration classes, the settings editors, the Java sources and the OpenAPI document."
keywords: [NomaUBL, developer, data dictionary, tables, columns, configuration keys, flows, impact analysis, API reference, OpenAPI, Redoc, call sites, DDL, F564230, F564231, F564235, F564237, JD Edwards, SAP, NetSuite, custom ERP]
---

# Developer Reference

The **Developer** page answers the questions of whoever maintains, extends or audits NomaUBL: *what is in this table, who writes this column, where is this setting edited and who reads it, which flows a status goes through, what this API returns*. Everything on the page is **generated when the application is built**, from the database DDL, the table and column configuration, the settings editors, the Java sources and the OpenAPI document — it always matches the release that runs.

Open it from **Documentation → Developer**.

---

## At a glance

<svg viewBox="0 0 1200 412" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="362" rx="14" fill="url(#dv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Developer reference</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tables and columns, configuration keys, flows, impact and the API — generated at build time.</text>
  <rect x="240" y="80" width="302" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <line x1="297" y1="85" x2="297" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="345.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <line x1="393" y1="85" x2="393" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="419.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Flows</text>
  <line x1="445" y1="85" x2="445" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="473.5" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Impact</text>
  <line x1="502" y1="85" x2="502" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="522.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <rect x="240" y="116" width="200" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="124" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="138.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Search table, column…</text>
  <text x="252" y="166" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INVOICE LIFECYCLE</text>
  <rect x="246" y="173" width="188" height="19" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="252" y="186" fill="#4a9eff" fontSize="9.5" fontFamily="ui-monospace, monospace">F564230 · Log / Archive</text>
  <text x="252" y="208" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F564231 · UBL Invoice Header</text>
  <text x="252" y="230" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F564235 · Lifecycle</text>
  <text x="252" y="252" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F564236 · Validation</text>
  <text x="252" y="282" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">E-REPORTING  ›</text>
  <text x="252" y="304" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOTIFICATIONS  ›</text>
  <text x="252" y="326" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SECURITY  ›</text>
  <rect x="452" y="116" width="508" height="72" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="464" y="136" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564230</text>
  <text x="532" y="136" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Log / Archive — one row per processed document</text>
  <text x="464" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACCESSOR</text>
  <text x="464" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">logDoc</text>
  <text x="591.0" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RENAMED TO</text>
  <text x="591.0" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="718.0" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITTEN BY</text>
  <text x="718.0" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Processing</text>
  <text x="845.0" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READ BY</text>
  <text x="845.0" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">6</text>
  <rect x="452" y="196" width="508" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <text x="532" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="602" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="752" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BT</text>
  <text x="792" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITES</text>
  <text x="842" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READS</text>
  <rect x="452" y="224" width="508" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEDOC</text>
  <text x="532" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NUMBER</text>
  <text x="602" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Document number</text>
  <text x="752" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">3</text>
  <text x="842" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">41</text>
  <rect x="452" y="252" width="508" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEDCT</text>
  <text x="532" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NCHAR(2)</text>
  <text x="602" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Document type</text>
  <text x="752" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">3</text>
  <text x="842" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">38</text>
  <rect x="452" y="280" width="508" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEUPMJ</text>
  <text x="532" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NUMBER</text>
  <text x="602" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Update date (JDE)</text>
  <text x="752" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">5</text>
  <text x="842" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">12</text>
  <rect x="452" y="308" width="508" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEWDS1</text>
  <text x="532" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NCHAR(30)</text>
  <text x="602" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Batch key</text>
  <text x="752" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <text x="842" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">9</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five views</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables · config · flows · impact · API</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tables by flow</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search names, columns, BT codes</text>
  <line x1="200" y1="187.0" x2="240" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table card</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">purpose, keys, accessor, flows</text>
  <line x1="1000" y1="137.0" x2="960" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns grid</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a row opens the code references</text>
  <line x1="1000" y1="267.0" x2="960" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
</svg>

---

## Tables

The data dictionary of the sixteen NomaUBL tables, grouped by flow — *Invoice lifecycle*, *E-reporting*, *Notifications*, *Security* — with a search over table names, columns, comments and BT codes.

- **The table card** gives the purpose and notes from the DDL, the primary key and indexes, the accessor and its configuration key, the name currently configured in the [NomaUBL database settings](../configuration/database-connectors/nomaubl.md) when the table is renamed (*Renamed to*), and the flows that write and read it. The invoice tables carry a clickable strip of the lifecycle across tables, from the archive to the processing log.
- **The columns grid** — column, override, type, description (inline and `COMMENT ON` of the DDL), BT code, accessor, configuration key, screens that show it, flows, write and read counts, nullable, default. A row opens the code references, writes first, grouped by flow: processing, import poll, status poll, received invoices, e-reporting, inbound, jobs, notifications, authentication, API, screens, database, command line. The grid is the shared data table; its view is listed in the [List views](../configuration/list-views.md) editor.

The complete reference of the tables is also published in [Database tables](./database-tables.md).

---

## Configuration

Every configuration key, with **where it is edited** and **who reads it**. The templates are listed on the left, grouped like the [Settings navigation](../configuration/settings-overview.md) — Global settings, Documents, PDF templates, API and SQL connectors, E-invoicing, E-reporting, Jobs & inbound… — with their key count and their gaps. The grid shows the keys of the selected template:

| Column | Description |
|---|---|
| **Key** | The configuration key. |
| **Label** | The field label in the settings editor. |
| **Edited in** | Template, tab and group of the editor field. |
| **Read by** | The flows whose code reads the key. |
| **Call sites** | Number of Java reads. A row opens the editor field and the code. |
| **State** | *editable, read* · *editable, never read* · *read, not editable*. |
| **Templates** | Templates that carry the key. |
| **Hint** | The help text of the field. |

Two check boxes isolate the gaps, one at a time: **Read but not editable** (a key the code reads that no screen offers) and **Editable but never read** (a field that has no effect). Keys built at run time — `fetchAll.N.*`, `folder.N.*`, `filter.*` — are not literal in the code and show as editable only.

---

## Flows

One short page per flow: **process a file**, **import poll**, **status poll**, **e-reporting**, **watched folders**, **reprocess**. Each gives the trigger, the command-line switch, the log module, the tables touched, the statuses written, the settings read and the steps in order. Pick a flow on the left to read it.

---

## Impact

What a change reaches. The picker goes in steps:

1. the **kind** — *Column*, *Configuration key* or *Status*;
2. the **table** or the **template**;
3. the **item**, in a wide list that shows the label first.

The result lists the **flows**, the **screens**, the **API endpoints** and the **command-line switches** the item reaches, the editor field that exposes it, then the code. Endpoints come from a scan of the server routes down to their handler class; status codes and labels come from the [status catalogue](../configuration/system/statuses.md) of the instance.

---

## API

The API of the instance, read the way the other views are read:

- **tag groups and tags** on the left with their operation counts — Invoices & documents, Processing, Platforms, Operations, Administration, Developer;
- **one row per operation** in the shared data table: method, path, summary, tag, group, access (*public*, *any signed-in user*, or the action a role must grant);
- **a window per operation** with the description, the parameters and request and response samples built from the schemas, references resolved.

**Getting started** opens the introduction of the document (session and token, rights, responses, invoice key, dates, paging, background runs). **Open the public reference (Redoc)** opens the same document in Redoc, which also serves readers outside the application — see the [API reference](/nomaubl/api-reference/) of this site.

---

## Access

Grant **Developer** in the Documentation group on the [Roles](../configuration/security/roles.md) page. The page reads the files generated at build time and, for the *Renamed to* field, the table names of the current settings; it runs no query on the invoice tables.

---

## Tips & best practices

- **Check Impact before renaming a column or retiring a setting.** The flows and endpoints listed are what to retest.
- **Review the gaps of the Configuration view after an upgrade.** A key *editable, never read* is a field to clean up; a key *read, not editable* is a setting only reachable by editing the file.
- **Send the Flows pages to a new team member** before the code: they describe each chain in a page.
