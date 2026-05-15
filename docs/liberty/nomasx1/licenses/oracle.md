---
title: Oracle
description: "Per-database list of Oracle licence options with a required / not required indicator — the inventory to compare with the licences actually subscribed."
keywords: [Nomasx-1, licenses, Oracle, required licences, compliance, Diagnostic Pack, Tuning Pack, Enterprise Edition Options]
---

# Oracle

The **Oracle** licence screen lists, for each connected Oracle database, every Oracle licence component checked by the Nomasx-1 collection scripts, together with a green / red indicator telling whether the component is **required** on the instance — that is, whether the collected usage matches what Oracle considers a licensable feature.

The aim of the page is to identify the licences the database *needs*, so you can compare them with what is actually subscribed in *Subscribed Licenses* and close the gap on either side — drop a licence that nothing uses, or purchase a licence that is being used without coverage.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="loracle-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#loracle-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATEGORY</text>
  <text x="360" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>

  <rect x="60" y="132" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="360" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="720" cy="143" r="5" fill="#22c55e"/>
  <text x="820" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="156" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="360" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <circle cx="720" cy="167" r="5" fill="#22c55e"/>
  <text x="820" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="180" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="360" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="720" cy="191" r="5" fill="#22c55e"/>
  <text x="820" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="204" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Active Data Guard</text>
  <circle cx="720" cy="215" r="5" fill="#ef4444"/>
  <text x="820" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="228" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <circle cx="720" cy="239" r="5" fill="#22c55e"/>
  <text x="820" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="252" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="267" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="267" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Vault</text>
  <circle cx="720" cy="263" r="5" fill="#ef4444"/>
  <text x="820" y="267" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="276" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="291" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="291" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="720" cy="287" r="5" fill="#22c55e"/>
  <text x="820" y="291" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="300" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <circle cx="720" cy="311" r="5" fill="#ef4444"/>
  <text x="820" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="328" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="343" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Others Products</text>
  <text x="360" y="343" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Audit Vault and Database Firewall</text>
  <circle cx="720" cy="339" r="5" fill="#ef4444"/>
  <text x="820" y="343" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>
</svg>

---

## Goal of the view

For each Oracle database:

- **What needs a licence, what doesn't.** Each row is a known Oracle licence component. A green dot in *Required* means the collection scripts detected usage on the instance — a licence is needed. A red dot means the component is installed but not in use, or not installed at all — no licence to declare.
- **Cover the whole catalogue.** The list includes the Enterprise Edition, the Database Enterprise Management packs (Diagnostics, Tuning), the Enterprise Edition options (Active Data Guard, Partitioning, Advanced Compression, Database In-Memory, RAC…) and the other Oracle products (Audit Vault, Spatial, …). Nothing is silently dropped.
- **One source for the compliance conversation.** The same data feeds the renewal discussion with Oracle and the procurement reconciliation — no parallel spreadsheet to maintain.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Category** | `CPT_CATEGORY` — licence family. | The Oracle catalogue family the component belongs to (Database, Enterprise Edition Options, Database Enterprise Management, Other Products…). |
| **Component** | `CPT_COMPONENT` — component name. | The licence option itself — *Enterprise Edition*, *Partitioning*, *Diagnostics Pack*, *Advanced Security*, … |
| **Required** | `ORAL_USED` — `Y` / `N`. Displayed as a green / red dot. | Green: usage detected, the licence is needed on this database. Red: no usage detected, no licence to declare. |
| **App** | `APPS_NAME` — application name. | The application that runs on the database. |

---

## Tips & best practices

- **Sort by *Required* descending** to bring all the green-dot lines to the top — the list to subscribe.
- **Group by *Category*** in the Group control to read the required components by Oracle catalogue family — the way the Oracle price book is structured.
- **Filter on `Component` containing "Pack"** to focus on the heavy management packs (Diagnostics, Tuning) — the most expensive lines in a typical Oracle bill.
- **Cross-reference with *Subscribed Licenses*** to check that every green-dot component is covered by an active CSI. A green dot with no subscription is the gap to close.
