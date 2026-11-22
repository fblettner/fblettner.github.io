---
title: Queries — overview
description: "How the Connectors page of Liberty Next is organised — the Settings, Tables, Queries, Sequences and Lookups stage cards, a table opened beside its list — and the four kinds of queries it holds."
keywords: [Liberty Framework, queries, connectors, CRUD, sequences, lookups, ConnectorsBuilder, Liberty Next pages]
---

# Queries — overview

A **query** in Liberty is a named SQL statement attached to a **connector** (which itself points at a **pool**, i.e. a database). Screens, dashboards, charts, dictionary lookups, dictionary sequences and the AI assistant all consume queries — so adding a query is the most common change you'll make in the Liberty Next pages.

The page that manages queries is **Liberty Next → Data → Connectors**. This overview maps it; the next pages walk through each "add" path.

---

## The Connectors page at a glance

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ov-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="415" rx="14" fill="url(#ov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connectors</text>
  <rect x="784" y="32" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Connector</text>
  <rect x="873" y="32" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="903.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="940" y="32" width="44" height="22" rx="5" fill="url(#ov-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="962.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="990" y="32" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1037.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reload config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="80" width="196" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="88" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="102.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filter 4…</text>
  <text x="246" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPS</text>
  <rect x="244" y="134" width="180" height="36" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="156.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="270" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 3 table(s) · 6 query(ies)</text>
  <rect x="244" y="176" width="180" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="198.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <text x="270" y="203" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 2 table(s) · 4 query(ies)</text>
  <text x="246" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA SOURCES</text>
  <rect x="244" y="238" width="180" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="260.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◍</text>
  <text x="270" y="252" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp_api</text>
  <text x="270" y="265" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">api · 12 endpoint(s)</text>
  <rect x="244" y="280" width="180" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="302.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="294" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">reporting</text>
  <text x="270" y="307" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 9 query(ies)</text>
  <rect x="444" y="80" width="640" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="458" y="104" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]  ·  sql</text>
  <rect x="976" y="90" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="104.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add queries</text>
  <rect x="456" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="465" y="127" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="486" y="138" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SETTINGS</text>
  <text x="466" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="569" y1="143" x2="578" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="579" y="118" width="112" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1.3"/>
  <rect x="588" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="609" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="589" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="692" y1="143" x2="701" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="702" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="711" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="732" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERIES</text>
  <text x="712" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 query(ies)</text>
  <line x1="815" y1="143" x2="824" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="825" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="834" y="127" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="855" y="138" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEQUENCES</text>
  <text x="835" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">1 sequence(s)</text>
  <line x1="938" y1="143" x2="947" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="948" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="957" y="127" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="978" y="138" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="958" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">2 lookup(s)</text>
  <rect x="456" y="182" width="616" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="466" y="196.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filter 3…</text>
  <rect x="456" y="214" width="616" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="468" y="230" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="468" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="884" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="900" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="920" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="936" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="956" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="972" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="992" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="1008" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
  <rect x="1034" y="222" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="237" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="456" y="260" width="616" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="468" y="276" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="468" y="289" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Open deals</text>
  <rect x="884" y="272" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="900" y="283" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="920" y="272" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="936" y="283" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="956" y="272" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="972" y="283" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="992" y="272" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="1008" y="283" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
  <rect x="1034" y="268" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="283" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="456" y="306" width="616" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="468" y="322" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">activities</text>
  <text x="468" y="335" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notes and calls</text>
  <rect x="884" y="318" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="900" y="329" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="920" y="318" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="936" y="329" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="956" y="318" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="329" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="992" y="318" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="1008" y="329" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
  <rect x="1034" y="314" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="329" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="458" y="366" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Click a table: the list narrows to a column and the table opens beside it.</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Apps and data sources</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grouped by their menu</text>
  <line x1="200" y1="157.0" x2="244" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it holds</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables, queries, endpoints</text>
  <line x1="200" y1="317.0" x2="420" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page buttons</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">save writes and reloads</text>
  <line x1="1120" y1="57.0" x2="962.0" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five stage cards</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its count</text>
  <line x1="1120" y1="137.0" x2="1054" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A table, four statements</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read · update · insert · delete</text>
  <line x1="1120" y1="247.0" x2="994" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clone the table</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its four statements</text>
  <line x1="1120" y1="347.0" x2="1054" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Page header** | Global actions — *＋ Connector*, *Discard*, *Save*, *Reload config*. *Save* writes the connector file and triggers a hot reload — no process restart needed. |
| **Left list** | A filter and two groups: *Apps* (connectors that have a menu and are shown in the switcher — the apps users see) and *Data sources* (connectors that supply data but are not shown in the switcher). Each line says what the connector holds (`sql · 3 table(s) · 6 query(ies)`). Click a name to open it on the right. |
| **Right pane** | The editor for the selected connector. Five stage cards across the top, each with its count, pick a section — *Settings*, *Tables*, *Queries*, *Sequences*, *Lookups*. |

---

## The four kinds of queries \{#kinds\}

A connector keeps its queries in four sections; the section a query sits in is its kind:

| View | What lives here |
|---|---|
| **Tables** | One entry per table, holding up to four queries: **get** (read), **post** (insert), **put** (update), **delete**. They are called `<table>_get`, `<table>_post`, `<table>_put`, `<table>_delete`. The list shows a row per table with its slot badges (GET / PUT / POS / DEL). |
| **Queries** | Standalone queries outside a table's set — reports, bulk operations, queries called by actions, charts or dashboards. Example: `monthly_revenue`, `purge_old_logs`. |
| **Sequences** | Queries that return the next number for a dictionary sequence. Typical body: `SELECT COALESCE(MAX(<col>), 0) + 1 FROM <table>`. |
| **Lookups** | Queries that return codes and labels for a dictionary lookup. Typical body: `SELECT <value>, <label> FROM <table>`. |

### A table, opened beside its list \{#table-open\}

Opening a table, a query, a sequence or a lookup keeps the list beside it, narrowed to a column: one click goes to the next. The connector's sections fold to one line, and so do the table's stages — **General** (label and description), then **Read**, **Update**, **Insert**, **Delete**, each saying whether its statement is *set*, *not set*, or in orange *not writable: refused at run time*.

<svg viewBox="0 0 1320 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ovw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ovw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ovw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ovw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="370" rx="14" fill="url(#ovw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="236" y="46" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]  ·  sql</text>
  <rect x="236" y="60" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="65" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="75.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SETTINGS</text>
  <text x="320.592" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="387" y1="72" x2="397" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="398" y="60" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="405" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="425" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="470.944" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="549" y1="72" x2="559" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="560" y="60" width="170" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="567" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="587" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERIES</text>
  <text x="638.768" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 query(ies)</text>
  <line x1="731" y1="72" x2="741" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="742" y="60" width="140" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="749" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="769" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEQUENCES</text>
  <text x="832.416" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <line x1="883" y1="72" x2="893" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="894" y="60" width="120" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="901" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="921" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="972.768" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="236" y="98" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="112.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filter 3…</text>
  <rect x="236" y="128" width="200" height="38" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="246" y="144" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="246" y="157" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Customers</text>
  <circle cx="398" cy="147" r="3" fill="#4ade80"/>
  <circle cx="407" cy="147" r="3" fill="#4ade80"/>
  <circle cx="416" cy="147" r="3" fill="#4ade80"/>
  <circle cx="425" cy="147" r="3" fill="#4ade80"/>
  <rect x="236" y="172" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="188" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="246" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Open deals</text>
  <circle cx="398" cy="191" r="3" fill="#4ade80"/>
  <circle cx="407" cy="191" r="3" fill="#4ade80"/>
  <circle cx="416" cy="191" r="3" fill="#4ade80"/>
  <circle cx="425" cy="191" r="3" fill="#334155"/>
  <rect x="236" y="216" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="232" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">activities</text>
  <text x="246" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notes and calls</text>
  <circle cx="398" cy="235" r="3" fill="#4ade80"/>
  <circle cx="407" cy="235" r="3" fill="#334155"/>
  <circle cx="416" cy="235" r="3" fill="#334155"/>
  <circle cx="425" cy="235" r="3" fill="#334155"/>
  <rect x="450" y="98" width="634" height="270" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="108" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="503.0" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← All tables</text>
  <text x="556" y="123" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="634" y="123" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">· 4 slots filled</text>
  <rect x="777" y="136" width="146" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="150.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↗ Open visual builder</text>
  <rect x="929" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="941.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂</text>
  <rect x="958" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="970.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="987" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇄</text>
  <rect x="1016" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1028.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇆</text>
  <rect x="1045" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1057.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1074" y="136" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1086.0" y="151" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="462" y="172" width="80" height="24" rx="12" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="469" y="177" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="489" y="187.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERAL</text>
  <line x1="543" y1="184" x2="551" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="552" y="172" width="83" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="559" y="177" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="579" y="187.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READ</text>
  <text x="613.296" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">set</text>
  <line x1="636" y1="184" x2="644" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="645" y="172" width="95" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="652" y="177" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="672" y="187.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPDATE</text>
  <text x="717.944" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">set</text>
  <line x1="741" y1="184" x2="749" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="750" y="172" width="95" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="757" y="177" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="777" y="187.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSERT</text>
  <text x="822.944" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">set</text>
  <line x1="846" y1="184" x2="854" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="855" y="172" width="95" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="862" y="177" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="882" y="187.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELETE</text>
  <text x="927.944" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">set</text>
  <text x="462" y="214" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Shared metadata for this table (lives on the read query).</text>
  <text x="462" y="236" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="462" y="242" width="610" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="471" y="257.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="462" y="284" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="462" y="290" width="610" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="471" y="305.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Portfolio customers</text>
  <text x="462" y="346" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Read · Update · Insert · Delete open the statement of the table's _get, _put, _post, _delete query.</text>
  <rect x="20" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections, folded</text>
  <text x="30" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tables picked</text>
  <line x1="200" y1="67.0" x2="236" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The list stays beside</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each dot: one statement</text>
  <line x1="200" y1="167.0" x2="398" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One click to the next</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deals, activities…</text>
  <line x1="200" y1="307.0" x2="276" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1120" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table actions</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, rename, clone, delete</text>
  <line x1="1120" y1="107.0" x2="1044" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1120" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five stages</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">set · not set · not writable</text>
  <line x1="1120" y1="197.0" x2="1064" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1120" y="270" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">General</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label and description</text>
  <line x1="1120" y1="287.0" x2="1072" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
</svg>

**Change type** moves a query to another section — for example a query written under *Queries* that turns out to feed a lookup. When the move changes the query's name (a table slot becomes a standalone query, or the reverse), a warning lists the new name: screens, actions and dictionary entries that use the old name have to be updated.

---

## The add buttons — one per view \{#add\}

| View | Button | What opens |
|---|---|---|
| **Tables** | *＋ Add queries* | A choice: **Generate from DB** (the CRUD wizard — reads the table in the database and generates the four queries) or **Empty stub** (asks for a table name and creates an empty read query). |
| **Queries** | *＋ Add query* | A name prompt, then an empty query to fill in by hand. |
| **Sequences** | *＋ Add sequence* | The scaffold — pick a table and a key column, see the SQL, save: it writes the query **and** the dictionary sequence. |
| **Lookups** | *＋ Add lookup* | The scaffold — pick a table, a value column, a label column and an optional filter, save: it writes the query **and** the dictionary lookup. |

The next pages walk through each path.

---

## What a query carries \{#fields\}

The query editor draws a query as three stage cards — **What it is**, **Statement**, **Parameters** — under a header with its name and its buttons:

| Stage | Field | Required | What it does |
|---|---|---|---|
| — | **Name** (header) | Yes | Unique inside the connector. The query's permission is `sql:<connector>:<name>`. Changed with *Rename*, which updates every reference. |
| What it is | **Label** | No | Short name shown in lists. |
| What it is | **Description** | No | What the query returns — shown under the name in the lists. |
| Statement | **SQL** | Yes | The statement, with `:name` parameters. A single text, or one variant per database (`default` required) — see [Per-dialect SQL](./per-dialect-sql.md). |
| Statement | **Writable** | No (off) | Off, only a SELECT is accepted. On for INSERT / UPDATE / DELETE / CALL. |
| Parameters | **Params** | No | Declared parameters, one line each: **Name**, **Label**, **Default**, **Help**, **Example**, **Choices**, **Required** — see [Parameter binding](./parameter-binding.md#declare). |

The **Statement** card shows the first word of the statement and the databases it is written for, in orange when it is empty or writes without being marked writable; the **Parameters** card says how many are declared and which `:placeholders` the statement holds.

---

## Save and reload — what a click does

Saving on this page is atomic across two files when needed:

| Action you took | What gets written |
|---|---|
| Created or edited a table or a query | The connector file. |
| Used the scaffold for a sequence or a lookup | The connector file **and** the dictionary (the new sequence or lookup in the connector's scope). |
| Cloned a connector (whole app) | A cross-file write that copies the dictionary overlay, screens, menu, charts and dashboards under the new name. Goes through a dedicated server route. |
| Renamed a connector, a query or a table | A cross-file update that touches every reference (screens, menus, dictionary, charts, dashboards). Refuses to run when local edits aren't saved. |

After every save the framework runs a **hot reload** automatically. The new query is callable immediately — no restart, no logout.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Generate the four CRUD queries from a real database table. | [Create from a database table](./create-from-database.md) — the wizard path, recommended when the table exists. |
| Write a custom query (standalone, hand-written). | [Create a custom query](./create-custom.md). |
| Make a copy of an existing query or of a whole application. | [Clone a query or a connector](./clone.md). |
| Add a sequence (next id) or a lookup (dropdown source). | [Sequences and lookups](./sequences-and-lookups.md). |
| Pass values to a query — fixed values, other columns, the signed-in user. | [Parameter binding](./parameter-binding.md). |
| Ship different SQL for Postgres vs Oracle. | [Per-dialect SQL variants](./per-dialect-sql.md). |

---

## What's next

- [Create from a database table](./create-from-database.md) — start here when the table already lives in your database.
- [Concepts → Connectors](../../connectors.md) — the deep reference behind this page (connector kinds, pools, query lifecycle).
