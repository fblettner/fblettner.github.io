---
title: Connectors
description: "A connector is how Liberty Next reaches a data source: a SQL connector holds the named queries of a database pool, an API connector the named endpoints of a web API, its server an HTTP server pool. Pools — databases, HTTP servers, LDAP directories — are set up in Liberty Next → Administer → Pools; connectors in Liberty Next → Data → Connectors."
keywords: [Liberty Next, connector, SQL, API, pool, HTTP server, LDAP directory, Active Directory, named query, endpoint, tables, queries, sequences, lookups, permissions, multi-pool, Oracle thick]
---

# Connectors

A **connector** is how Liberty Next reaches a data source. Every screen, chart, dashboard, action, job step and assistant answer names the connector and the query — or the endpoint — it uses.

| Type | Reaches | Holds |
|---|---|---|
| **SQL** | A database, through a [pool](#pools). | Named **queries**, in four kinds: tables, queries, sequences, lookups. |
| **API** | A web API (REST, JSON), through an [HTTP server pool](#pool-http) or its own address. | Named **endpoints**: method, path, headers, body, response mapping. |

A connector with a menu and **Show In Switcher** on is an **app**, picked in the switcher — see [Apps](./apps/overview.md).

---

## At a glance

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="415" rx="14" fill="url(#cnp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connectors</text>
  <rect x="784" y="32" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Connector</text>
  <rect x="873" y="32" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="903.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="940" y="32" width="44" height="22" rx="5" fill="url(#cnp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
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
  <text x="270" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 3 table(s) · 3 query(ies)…</text>
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
  <line x1="569" y1="143" x2="578" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="579" y="118" width="112" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1.3"/>
  <rect x="588" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="609" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="589" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="692" y1="143" x2="701" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="702" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="711" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="732" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERIES</text>
  <text x="712" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 query(ies)</text>
  <line x1="815" y1="143" x2="824" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="825" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="834" y="127" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="855" y="138" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEQUENCES</text>
  <text x="835" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">1 sequence(s)</text>
  <line x1="938" y1="143" x2="947" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
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
  <line x1="200" y1="157.0" x2="244" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it holds</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables, queries, endpoints</text>
  <line x1="200" y1="317.0" x2="420" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page buttons</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">save writes and reloads</text>
  <line x1="1120" y1="57.0" x2="962.0" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five stage cards</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its count</text>
  <line x1="1120" y1="137.0" x2="1054" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A table, four statements</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read · update · insert · delete</text>
  <line x1="1120" y1="247.0" x2="994" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clone the table</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its four statements</text>
  <line x1="1120" y1="347.0" x2="1054" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
</svg>

---

## Liberty Next → Data → Connectors \{#page\}

The left list has a filter and two groups: **Apps** (connectors with a menu) and **Data sources** (the others). Each line says what the connector holds, each kind under its own name — `sql · 118 table(s) · 34 query(ies) · 19 sequence(s) · 14 lookup(s)`, `api · 68 endpoint(s)`. The page header holds **＋ Connector** (a name, the type SQL or API), **Discard** (drops the pending changes), **Save** (writes `connectors.toml` and applies the change without a restart) and **Reload config**. The picked connector opens on the right, its buttons in its header — **Find usages**, **Clone** (with its dictionary scope, screens, menu, charts and dashboards), **Rename** (every reference rewritten), **Delete** (with everything that belongs to it).

### Pools \{#pools\}

A pool is a connection of the installation, defined in **Liberty Next → Administer → Pools** and named by whatever uses it. What belongs to the installation — an address, an account, a password, a key — is set there once, and nowhere else. The beginning of its URL says what the pool reaches:

| Kind | URL | Named by |
|---|---|---|
| **A database** — PostgreSQL, Oracle, MySQL, MariaDB, SQL Server, SQLite | `postgresql+asyncpg://…`, `oracle+oracledb://…` | SQL connectors, job steps, the environment a screen runs on. |
| **An HTTP server** | `http://…` or `https://…` | API connectors and each of their environments — see [An HTTP server](#pool-http). |
| **An LDAP directory** | `ldap://…` or `ldaps://…` | The `ldap_sync` step of a job and the code of an application — see [An LDAP directory](#pool-ldap). |

The list says what each pool reaches — `postgresql · host:5432 / database`, `http · host:8443/api/v2`, `ldap · host:636 / dc=example,dc=com` — and its header holds **＋ Add pool**, **Discard**, **Save** and **Reload config**. A field of a screen can offer the pools as a list: the dictionary rule [`POOL`](./dictionary.md#rules).

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="450" rx="14" fill="url(#pol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Pools</text>
  <rect x="990" y="32" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1037.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reload config</text>
  <rect x="940" y="32" width="44" height="22" rx="5" fill="url(#pol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="962.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="873" y="32" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="903.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="789" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add pool</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="80" width="210" height="370" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="90" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="112" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="104" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">default</text>
  <text x="270" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql · db-host:5432 / liberty</text>
  <rect x="244" y="132" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="154" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp</text>
  <text x="270" y="159" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">oracle · erp-db:1521 / ORCL</text>
  <rect x="244" y="174" width="194" height="36" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="196" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="188" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp_api</text>
  <text x="270" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">http · api.example.com:8443/api/v2</text>
  <rect x="244" y="216" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="238" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="230" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">corp_directory</text>
  <text x="270" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ldap · ad.example.com:636 / dc=exa…</text>
  <rect x="458" y="80" width="626" height="370" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="104" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">erp_api</text>
  <rect x="1026" y="90" width="46" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1049.0" y="104.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="925" y="90" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="973.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Reload from disk</text>
  <rect x="874" y="90" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="897.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="798" y="90" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="833.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="702" y="90" width="91" height="22" rx="5" fill="url(#pol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="747.5" y="104.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Test connection</text>
  <rect x="470" y="122" width="602" height="24" rx="6" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="480" y="138" fill="#4ade80" fontSize="9.2" fontFamily="system-ui, sans-serif">Connected in 85 ms — http HTTP 404 The server answers at this address, whatever the status.</text>
  <rect x="470" y="156" width="290" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="479" y="165" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="500" y="176" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <text x="480" y="194" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">http · api.example.com:8443/api/v2</text>
  <text x="480" y="207" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">https</text>
  <line x1="761" y1="186" x2="779" y2="186" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pol-flow)"/>
  <rect x="782" y="156" width="290" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="791" y="165" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="812" y="176" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACCOUNT</text>
  <text x="792" y="194" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">svc_liberty</text>
  <text x="792" y="207" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">password set</text>
  <text x="470" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE TYPE</text>
  <rect x="470" y="246" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">HTTP server (an API)</text>
  <text x="648" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="675" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOST</text>
  <rect x="675" y="246" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">api.example.com</text>
  <text x="880" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="880" y="246" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="889" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">8443</text>
  <rect x="470" y="276" width="192" height="164" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="292.0" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="482" y="310.5" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">Oracle</text>
  <text x="482" y="329.0" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">MySQL</text>
  <text x="482" y="347.5" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">MariaDB</text>
  <text x="482" y="366.0" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">SQL Server</text>
  <text x="482" y="384.5" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">SQLite</text>
  <text x="482" y="403.0" fill="#4a9eff" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP directory</text>
  <rect x="472" y="409.5" width="188" height="17" rx="4" fill="rgba(74,158,255,0.14)"/>
  <text x="482" y="421.5" fill="#4a9eff" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">HTTP server (an API)</text>
  <text x="650" y="421.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">✓</text>
  <text x="675" y="290" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE PATH</text>
  <rect x="675" y="296" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="311.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">api/v2</text>
  <text x="676" y="352" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">›  Advanced: driver, options, URL</text>
  <text x="676" y="376" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">URL composed from the fields:</text>
  <rect x="676" y="384" width="396" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="686" y="398.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">https://svc_liberty@api.example.com:8443/api/v2</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A pool per line</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kind · address</text>
  <line x1="200" y1="113.0" x2="256" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An HTTP server</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what an API connector calls</text>
  <line x1="200" y1="213.0" x2="256" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="256" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="271" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An LDAP directory</text>
  <text x="30" y="284" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read by the ldap_sync step</text>
  <line x1="200" y1="273.0" x2="256" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The kind</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">eight kinds, one list</text>
  <line x1="200" y1="367.0" x2="470" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Test connection</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a server: does it answer?</text>
  <line x1="1120" y1="57.0" x2="732" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The answer</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">time and HTTP status</text>
  <line x1="1120" y1="137.0" x2="1072" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two stages</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no schema, no tuning</text>
  <line x1="1120" y1="207.0" x2="1072" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="290" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base path</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what follows the host</text>
  <line x1="1120" y1="307.0" x2="867" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
</svg>

#### A pool, stage by stage \{#pool-stages\}

The picked pool is drawn as stage cards, each saying what it holds: **Database**, **Account**, **Schemas**, **Database links**, **Tuning** for a database — **Database** and **Account** only for an HTTP server or a directory, which run no SQL. Its buttons are **Test connection**, **Find usages**, **Rename**, **Reload from disk** and **Delete**.

| Stage | Fields |
|---|---|
| **Database** | The address, typed as an address: the **Database type** (PostgreSQL, Oracle, MySQL, MariaDB, SQL Server, SQLite, *LDAP directory*, *HTTP server (an API)*), **Host**, **Port**, and the one name the type needs — **Database**, an Oracle **Service name** (a **SID** when the URL is written with one), a SQLite **File**, a directory's **Base DN**, a server's **Base path**. Picking another type moves the pool to it: its driver, its usual port; the type also chooses a query's [per-dialect variant](./build/queries/per-dialect-sql.md). **Advanced: driver, options, URL** holds the **Driver**, the **Options** (what follows the `?` of the URL) and the **URL** composed from the fields, which stays editable (`${VARIABLE}` accepted). A URL the page cannot show field by field is kept exactly as written. |
| **Account** | The **User** and the **Password**, kept out of the URL and encrypted when saved; the password field has a show / hide button. A password written in the URL is flagged, with **Move it to the password field**. A directory's account is the **Account (bind DN, DOMAIN\user or user@domain)**, typed as it is; an HTTP server's is the **Account**, with its **Signing key**, **Certificate** and **Verify SSL** — see [below](#pool-http). |
| **Schemas**, **Database links** | The values of the `#SCHEMA.<NAME>#` and `#DBLINK.<NAME>#` tokens — see [below](#schema-and-db-link-tokens). |
| **Tuning** | **Pool size**, **Max overflow** (connections kept open, extra connections under load), **Pool pre ping** (liveness check), **Pool recycle** (seconds before a connection is renewed), **Echo** (logs every statement, for debugging), **Max rows** (default row limit of the pool's reads, 1 000 when empty), **Arraysize** (Oracle: rows fetched per round trip; raise it to 500–1 000 for large reads), **Trim strings** (removes the trailing spaces of fixed-length text — Oracle `CHAR`, JD Edwards), **Coalesce nulls** (on writes, replaces empty values with a space or 0 — Oracle `NOT NULL` text columns), **Debug sql** (logs each statement with its final values). |

**Test connection** opens one connection with the pool as it is on the page — saved or not — and answers *Connected in N ms* with the server's version, or *Could not connect* with the driver's own words. A directory is bound to once with its account. An HTTP server receives one request at its address, and any HTTP status is an answer: *Connected in 85 ms — http HTTP 404 The server answers at this address, whatever the status…* — whether its account is accepted is checked by the **Test** of the API connector, which knows how it signs in. Nothing is saved and the running pools are not touched.

#### An HTTP server \{#pool-http\}

A pool whose URL starts with `http://` or `https://` is the server an API connector calls — `https://svc_liberty@api.example.com:8443/api/v2`. The API connector names it in its **Server** field, and so can each of its environments: the address, the account and the secrets are then the pool's, and the connector keeps how it authenticates and its endpoints — see [The server of an API connector](#api-server).

| Stage | Field | Effect |
|---|---|---|
| Database | **Host**, **Port**, **Base path** | The address the endpoints' paths are added to. The scheme (`https` or `http`) is the **Driver** under *Advanced*. |
| Account | **Account** | The account the connector signs in with. Blank when the server takes a token: the **Password** field then holds the token. |
| Account | **Password** | The account's password — or the token. Encrypted when saved; `${VARIABLE}` accepted. |
| Account | **Signing key** | For a connector that makes each call as the signed-in user: the private key that signs the tokens — the PEM text, or the path of a PEM file on the server; an `ENC:` value is accepted. Whoever holds it can act as any user of that server: protect it like the master key. |
| Account | **Certificate** | Optional: the certificate of the signing key (the PEM text, or the path of the `.cer` / `.pem` file given to the server); its fingerprint is then written in the token's header. |
| Account | **Verify SSL** | Checks the server's TLS certificate. Turn it off only for a test server with a self-signed certificate. |

An HTTP server runs no SQL: a query, a screen or a copy that names it is refused, with the reason.

#### An LDAP directory \{#pool-ldap\}

A pool whose URL starts with `ldap://` or `ldaps://` (over TLS) is a directory — an Active Directory, an OpenLDAP. It is created like a database, with the kind **LDAP directory**: **Host**, **Port** (636 for `ldaps`, 389 for `ldap`), **Base DN** — where the searches start, optional —, the **Account (bind DN, DOMAIN\user or user@domain)** typed as it is (`cn=liberty,ou=services,dc=example,dc=com`, `EXAMPLE\svc_liberty`, `svc_liberty@example.com`), and the **Password**, kept like any pool's (`ENC:` or `${VARIABLE}`). **Test connection** binds once with the account and lets go.

Whatever reads a directory names the pool instead of carrying a server and an account of its own: the **Directory pool** of a job's [`ldap_sync` step](../nomaflow/steps.md#ldap-sync), and an application's code through `connectors.pools.directory(name)`. A directory runs no SQL, and a database pool is not a directory: either mistake is refused by name. `connectors.pools.where(name)` tells where any pool points — host, port, database or base — without its account, which is what a report prints of a system.

The directory client is an optional part of the server: when it is missing, the test says so and names the `ldap` extra to install.

### Tables and queries beside their list \{#list-beside\}

A SQL connector's sections are stage cards with their counts: **Settings** (its pool), **Tables**, **Queries**, **Sequences**, **Lookups**. Picking one lists its content; **＋ Add queries** (Tables), **＋ Add query**, **＋ Add sequence** or **＋ Add lookup** is in the connector's header.

Opening a table keeps the list beside it: the list narrows to a column — each table's four statements as dots — and the table opens next to it, so going from one table to the next is one click; the same for a query, a sequence, a lookup. The connector's sections and the table's stages then fold to one line each, so the statement starts high on the page. A table is drawn as its stages — **General**, then **Read**, **Update**, **Insert**, **Delete** — each saying whether the statement is *set* or *not set*, and in orange *not writable: refused at run time* when a write statement is there but not allowed. Its actions are a row of icons beside **Open visual builder** (find usages, rename, change type, move, clone, delete). The **Build a SELECT / INSERT / UPDATE / DELETE** dialogs write the statement from the table's columns, with a preview. See [Queries — overview](./build/queries/overview.md).

## SQL connector \{#sql\}

A SQL connector has five stage cards: **Settings**, **Tables**, **Queries**, **Sequences**, **Lookups**. The four query sections are described on [Queries — overview](./build/queries/overview.md).

### Settings \{#connection-fields\}

The **Settings** card of a SQL connector holds its connection settings.

| Field | Effect |
|---|---|
| **Pool** | The pool the queries run on — a dropdown of the pools defined in *Liberty Next → Administer → Pools*. The connector takes the pool's address, credentials and database type. |
| **Pools** | Extra pools the same queries may run on — see [Multi-pool connectors](#multi-pool). |
| **Show In Switcher** | Shows the connector as an application in the switcher at the top of the sidebar — together with a menu, see [Make a connector an app](./build/menus/make-connector-an-app.md). |
| **Home** | The menu entry opened when the application is picked. |
| **Home By Role** | A landing menu entry per role: a user lands on the entry of the first of their roles listed here, otherwise on **Home**. |
| **Max Rows** | Default row limit of a read; otherwise the pool's, then 1 000. A screen's or a request's limit wins. |
| **Dd Prefix** | Length of the table prefix in column names (JD Edwards: `2`, so `ABCO`, `MCCO` and `SDCO` all carry the dictionary item `CO`). Used by a role's [data scope](./build/secure/roles-and-permissions.md#data-scope). `0`: column names are the items. |

### Query editor

**＋ Add query**, or a click on a query, opens the query editor beside the list. Its header holds **back**, the query's name and its buttons — **Find usages**, **Rename**, **Change type**, **Move**, **Clone**, **Delete** (described on [Create a custom query](./build/queries/create-custom.md)). The query is drawn as three stage cards:

| Stage | Fields |
|---|---|
| **What it is** | **Label** and **Description** — shown in the pickers, and read by the AI assistant to choose its queries. The name used in the URL (`/api/sql/billing/<name>`) and the permission (`sql:billing:<name>`) is the one in the header. |
| **Statement** | **SQL** — the statement, with `:name` parameters and `{{TOKEN}}` server values; one text, or one variant per database (see [Per-dialect SQL](./build/queries/per-dialect-sql.md)). **Writable** — off: only a SELECT is accepted; on: INSERT / UPDATE / DELETE / CALL / MERGE. |
| **Parameters** | The declared parameters, one line each: **Name**, **Label**, **Default**, **Help**, **Example**, **Choices**, **Required** — see [Parameter binding](./build/queries/parameter-binding.md). |

The SQL editor highlights the syntax and completes table and column names from the pool. Above it, **Token** inserts a server value (`{{LOGIN}}`, `{{SYSDATE}}`…) or one of the pool's schemas, **Wizard** opens the SELECT builder, and **Run** tries a read statement on the connector's pool.

### Schema and DB-link tokens \{#schema-and-db-link-tokens\}

A SQL query can carry two placeholder tokens that let the same text run against any pool — local or remote — without maintaining a per-environment variant of the query:

| Token | Resolves to | Where it's configured |
|---|---|---|
| `#SCHEMA.<NAME>#` | The pool's mapping for schema `<NAME>` (e.g. `SY920.`). Empty when the pool has no entry — the token drops out and the table name is written bare. | The pool's **Schemas** stage. |
| `#DBLINK.<NAME>#` | The pool's DB-link suffix for schema `<NAME>` (e.g. `@ORCLPROD`). Appended **after** the table name, so a `#SCHEMA.SY#F0092#DBLINK.SY#` resolves to `SY920.F0092@ORCLPROD`. Empty when no entry — nothing is appended, and the query stays local. | The pool's **Database links** stage (`SY` = `@ORCLPROD`). |

The two are position-independent: `#SCHEMA.…#` prefixes the table, `#DBLINK.…#` suffixes it. The same query works locally (both mappings empty), against a remote schema without a link (schema mapped, dblink empty) or via a database link (both mapped) — the pool decides which shape to emit.

A non-empty DB-link value must be a bare `@link` reference (starts with `@`, letters, digits, `_`, `$`, `#` and `.` only). Anything else makes the query fail when it runs — a guard against a DB-link value that would try to smuggle SQL into the statement.

### Oracle thick mode \{#oracle-thick\}

The Oracle driver runs in *thin* mode by default: no Oracle client needed, every call on the server's event loop. Two cases need the *thick* mode, which goes through the Oracle Instant Client:

- **Native Network Encryption** (NNE) required by the database — thin mode fails with `DPY-3001`;
- reading a **LOB across a database link** — thin mode fails with `ORA-22992` / `ORA-03149`.

Tick **Oracle thick mode** in **Liberty Next → Administer → App** (section *App*) and restart the server: every Oracle pool then runs in thick mode — the setting applies to the whole server, not to one pool. PostgreSQL pools are not affected. The Instant Client is included in the Docker image (amd64 and arm64); a Python install needs it on the host.

---

### Multi-pool connectors \{#multi-pool\}

One SQL connector can serve **several pools** — several database or JDE instances — without cloning the connector or duplicating its screens. Alongside the default **Pool**, list the extra ones in **Pools** (both are dropdowns of configured pools on the connector's **Settings** card); the same named queries and the same screens then run against any pool in the set.

The pool is chosen at runtime:

- **In the app** — when the current app spans a multi-pool connector, a **Pool** picker appears in the sidebar, under the application picker (*Default* is the connector's own pool). Picking a pool re-runs that app's screens against the chosen instance. The choice is kept per app in the browser, and it applies only to the connectors that declare that pool — an app's other (single-pool) connectors keep their default rather than erroring.
- **In jobs** — a `sql_copy` step takes `pool` in its `source` or `target` block, a `sql_query` step takes `pool`, to target a specific instance without a new connector ([steps](../nomaflow/steps.md)). These keys are set in `jobs.toml`; the step editor does not show them.

The reachable set is the default `pool` plus `pools`; a request or a job can never reach a pool outside it, and only pool **names** reach the picker — never a URL or credentials. A connector with just a `pool` runs on that pool only.

An API connector called from those screens — AIS, for JD Edwards — can follow the same environments: see [One server per environment](#api-environments).

---

## API connector \{#api\}

An API connector calls a web API. Its server — address, account, secrets, TLS check — is best an [HTTP server pool](#pool-http), named in **Server**; the connector then keeps how it authenticates and its endpoints. It is drawn as six stage cards, each saying what it holds or still lacks — the server pool it names (`→ erp_api`) or the server's host, the kind of authentication and what it still lacks, the environments, the number of endpoints and how many write, the webhooks, the test:

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cna-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cna-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cna-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cna-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="425" rx="14" fill="url(#cna-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.erp_api]  ·  api</text>
  <rect x="1033" y="32" width="51" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1058.5" y="46.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="976" y="32" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="924" y="32" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="840" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="238" y="66" width="134" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="247" y="75" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268" y="86" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTION</text>
  <text x="248" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">→ erp_api</text>
  <line x1="373" y1="96" x2="382" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="383" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="392" y="75" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="413" y="86" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTICATION</text>
  <text x="393" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">User and password</text>
  <line x1="518" y1="96" x2="527" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="528" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="537" y="75" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="558" y="86" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONMENTS</text>
  <text x="538" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">one server for all</text>
  <line x1="663" y1="96" x2="672" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="673" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="682" y="75" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="703" y="86" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <text x="683" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">12 endpoint(s)</text>
  <text x="683" y="117" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 that write</text>
  <line x1="808" y1="96" x2="817" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="818" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="827" y="75" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="848" y="86" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <text x="828" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">not available yet</text>
  <line x1="953" y1="96" x2="962" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="963" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="972" y="75" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="993" y="86" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="973" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">try an endpoint</text>
  <rect x="238" y="142" width="470" height="280" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="162" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTION</text>
  <text x="252" y="184" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVER</text>
  <rect x="252" y="190" width="442" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="205.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">erp_api</text>
  <text x="310.23" y="205.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">api.example.com:8443/api/v2</text>
  <text x="680" y="205.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="252" y="228" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">The address, the account, the password or token and the TLS check are read from this pool.</text>
  <text x="252" y="250" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIMEOUT (MS)</text>
  <rect x="252" y="256" width="442" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="271.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">30000</text>
  <text x="252" y="304" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DEFAULT HEADERS</text>
  <text x="252" y="322" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HEADERS</text>
  <rect x="252" y="328" width="442" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="343.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Accept: application/json</text>
  <text x="252" y="372" fill="#64748b" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">Without a server: Base URL and SSL Verify are written here instead.</text>
  <rect x="720" y="142" width="362" height="280" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="734" y="162" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUTH TYPE</text>
  <text x="734" y="184" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">The account and its secrets are those of the pool erp_api:</text>
  <text x="734" y="197" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">only how the connector authenticates is set here.</text>
  <text x="734" y="218" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">METHOD</text>
  <rect x="734" y="224" width="334" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="239.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Basic (username + password)</text>
  <text x="1054" y="239.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="734" y="278" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Without a server, the method's fields:</text>
  <text x="734" y="296" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERNAME</text>
  <rect x="734" y="302" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="317.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">svc_liberty</text>
  <text x="908" y="296" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSWORD</text>
  <rect x="908" y="302" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="917" y="317.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">••••••••</text>
  <text x="1054" y="317.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="734" y="302" width="160" height="24" rx="5" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="734" y="350" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Each user as himself: Signing key, Certificate</text>
  <text x="734" y="363" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">— the pool's when a server is named.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Card summary</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">server named, or what is missing</text>
  <line x1="200" y1="87.0" x2="250" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an HTTP server pool</text>
  <line x1="200" y1="203.0" x2="252" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base URL, SSL Verify</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only without a server</text>
  <line x1="200" y1="317.0" x2="252" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="70" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six stage cards</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what each part holds or lacks</text>
  <line x1="1120" y1="87.0" x2="1097" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="176" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">How it authenticates</text>
  <text x="1130" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stays on the connector</text>
  <line x1="1120" y1="193.0" x2="1068" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Secrets</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">show / hide button</text>
  <line x1="1120" y1="317.0" x2="1054" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
</svg>

| Stage | Content |
|---|---|
| **Connection** | Section *App*: **Show in switcher**, **Home**. Section *Connection*: **Server** — an HTTP server pool, or *Set on this connector*; with a pool, the address, the account, the password or token and the TLS check are read from it. Without one, **Base URL** (`https://api.example.com`, `${VARIABLE}` accepted) and **SSL Verify** (*true*, *false*, or a variable such as `${API_VERIFY_SSL:-true}`, kept as written) are set here. **Timeout (ms)** in both cases. Section *Default headers*: **Headers**, `Key:Value` pairs separated by semicolons, sent with every request. |
| **Authentication** | **Method**: *None*, *Basic* (username and password), *Bearer* (static token), *API Key* (header name and key), *OAuth2 / JWT* (token endpoint path, body template and Content-Type, token request headers, token field, token lifetime), *Each user as himself (a signed token)* — each call made as the signed-in user, see [Each call as the signed-in user](#api-user-jwt). When the connector names a server, only the method and its own settings are set here: the account, the password or token, the signing key and its certificate are the pool's. Otherwise the method's fields are here; the secrets are encrypted when saved, and the password, the token and the signing key have a show / hide button. The card names the method and what it still lacks: *no user yet*, *no token, no token address*, *no token address*, *no signing key yet*. |
| **Environments** | One server per environment, for a connector used with several JDE environments — see [One server per environment](#api-environments). |
| **Endpoints** | The named endpoints — see [API endpoints](./build/api-endpoints.md). |
| **Webhooks** | Not available yet: external systems cannot push events into Liberty Next. |
| **Test** | Pick an **Endpoint**, fill its **Parameters**, **Run**: the **Result** comes back, nothing is saved. On a connector without endpoints, **Test connection** checks the address and the authentication. |

An endpoint is one named call — **What it is** (name, label, description, *Changes data*, group), **Inputs** (its parameters), **The call** (method, URL path, headers, body, query parameters — or a function or a service that answers instead) and **The answer** (rows, columns, error and warning fields, response field and mappings). Each stage is described on [API endpoints](./build/api-endpoints.md).

### The server of an API connector \{#api-server\}

The **Server** field names an [HTTP server pool](#pool-http): what belongs to the installation — the address, the account, the password or token, the signing key and its certificate, the TLS check — is then in one place, under Liberty Next → Administer → Pools, and a credential is changed there once for every connector that uses it. What stays on the connector is how it authenticates (the method and its settings: token endpoint, user attribute, signature…) and its endpoints.

A connector an application ships holds none of the installation's values: an upgrade refreshes it whatever the address, and keeps the **Server** the installation named. A connector that names no server keeps its own **Base URL** and credential fields.

A server pool that is missing, or that has no address yet, does not stop the server from starting: each call made through the connector fails and says what to set — *the connector names the server pool 'erp_api': there is no such pool — create it under Liberty → Pools (kind HTTP server)*. The connector's **Test** runs with the pool's address and account: it checks that the account is accepted, where the pool's own *Test connection* only checks that the server answers.

```toml
[pools.erp_api]
url = "https://svc_liberty@api.example.com:8443/api/v2"
password = "ENC:…"

[connectors.erp_api]
type = "api"
server = "erp_api"          # address, account, secrets: the pool's
auth_type = "basic"         # how it authenticates: the connector's
```

Endpoints are called by screens (an endpoint with rows is read like a query), screen actions (`call_api`), [services](./build/services.md), menu entries (type `endpoint`), notification rules (`action` channel), plugins (`connectors.api(…).call(…)`), [tests](./build/tests.md) and — when allowed — the AI assistant. A Nomaflow `http` step calls a URL directly, without a connector.

### Each call as the signed-in user \{#api-user-jwt\}

With the method **Each user as himself (a signed token)**, the connector no longer calls the server under one service account: each call is made **as the user signed in to Liberty**. Liberty signs a short-lived JSON Web Token that names the user, and sends it as `Authorization: Bearer`; the server trusts the certificate of the connector's key. No password of the user is kept anywhere. The method is made for JD Edwards AIS — its HTML server's external JWT trust — and works with any server that accepts a signed token.

<svg viewBox="0 0 1200 425" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="396" rx="14" fill="url(#cnj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.erp_api]  ·  api</text>
  <rect x="240.0" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="296.6666666666667" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">CONNECTION</text>
  <rect x="361.3" y="60" width="113.3" height="26" rx="6" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="418.0" y="76" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">AUTHENTICATION</text>
  <rect x="482.7" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="539.3333333333333" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">ENVIRONMENTS</text>
  <rect x="604.0" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="660.6666666666666" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <rect x="725.3" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="781.9999999999999" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <rect x="846.7" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="903.3333333333333" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="240" y="112" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUTH TYPE</text>
  <line x1="240" y1="118" x2="585" y2="118" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="134" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">METHOD</text>
  <rect x="240" y="140" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="154.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Each user as himself (a signed token)  ⌄</text>
  <text x="240" y="184" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE USER OF EACH CALL</text>
  <line x1="240" y1="190" x2="585" y2="190" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="204" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Each call is made as the signed-in user: Liberty signs a short-lived token</text>
  <text x="240" y="215" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">that names him on the server, which trusts the certificate of this key. No</text>
  <text x="240" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">password of the user is kept.</text>
  <text x="240" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIGNING KEY</text>
  <rect x="240" y="268" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="282.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••••••••••••</text>
  <text x="240" y="304" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CERTIFICATE (OPTIONAL)</text>
  <rect x="240" y="310" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="324.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">/etc/liberty/liberty-jde.cer</text>
  <text x="240" y="346" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER ATTRIBUTE</text>
  <rect x="240" y="352" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="366.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">jde_user</text>
  <text x="615" y="134" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME SENT</text>
  <rect x="615" y="140" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="154.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">In upper case (JD Edwards)  ⌄</text>
  <text x="615" y="178" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN NO USER CAN BE NAMED</text>
  <rect x="615" y="184" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="198.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Refuse the call  ⌄</text>
  <text x="615" y="218" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A job or a schedule has no user; a user may have no name on the server.</text>
  <text x="615" y="252" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE TOKEN</text>
  <line x1="615" y1="258" x2="960" y2="258" stroke="#1f2937" strokeWidth="1"/>
  <text x="615" y="274" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIELD THAT CARRIES THE USER</text>
  <rect x="615" y="280" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="294.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">sub</text>
  <text x="792.5" y="274" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIGNATURE</text>
  <rect x="792.5" y="280" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="294.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">RS256  ⌄</text>
  <text x="615" y="318" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUER (ISS)</text>
  <rect x="615" y="324" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="338.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="792.5" y="318" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIENCE (AUD)</text>
  <rect x="792.5" y="324" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="338.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="615" y="362" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALID FOR (SECONDS)</text>
  <rect x="615" y="368" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="382.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">300</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each user as himself</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each call as the signed-in user</text>
  <line x1="200" y1="145.0" x2="240" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="20" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Signing key</text>
  <text x="30" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PEM file or text, ENC: accepted</text>
  <line x1="200" y1="275.0" x2="240" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="20" y="345" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="360" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User attribute</text>
  <text x="30" y="373" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">his name on the server</text>
  <line x1="200" y1="362.0" x2="240" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name sent</text>
  <text x="1010" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">upper case for JD Edwards</text>
  <line x1="1000" y1="145.0" x2="960" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No user to name</text>
  <text x="1010" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refuse, or the service account</text>
  <line x1="1000" y1="195.0" x2="960" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The token</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">claim, RS256/384/512, iss, aud</text>
  <line x1="1000" y1="317.0" x2="960" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="356" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="371" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Short-lived</text>
  <text x="1010" y="384" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">300 s by default, 30 to 3600</text>
  <line x1="1000" y1="373.0" x2="782.5" y2="379" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
</svg>

| Field | Default | Effect |
|---|---|---|
| **Signing key** | — | The private key: the path of a PEM file on the Liberty server, or the PEM text (an `ENC:` value is accepted). Whoever holds it can act as any user of the server: protect it like the master key. When the connector names a server, it is a field of the [pool](#pool-http) and is not shown here. |
| **Certificate (optional)** | — | The certificate given to the server (its file, or its PEM text). Its fingerprint is written in the token (`x5t`), which some servers pick the certificate by. A field of the pool too when the connector names a server. |
| **User attribute** | `jde_user` | The attribute of the Liberty user that holds his name on the server — set by an administrator in the user's [data-scope attributes](./build/secure/users.md#attributes), never by the user. Blank: the Liberty user name itself. |
| **Name sent** | *In upper case (JD Edwards)* | Or *As written*. |
| **When no user can be named** | *Refuse the call* | Or *Use the service account below*: the **Credentials** section then appears, and the call is made with that username and password. A job or a schedule has no user; a user may have no attribute. |
| **Field that carries the user** | `sub` | The claim of the token that holds the name. |
| **Signature** | `RS256` | `RS256`, `RS384` or `RS512`. |
| **Issuer (iss)**, **Audience (aud)** | blank | Written in the token when the server checks them. |
| **Valid for (seconds)** | `300` | From 30 to 3600. A token is reused for the same user until shortly before it expires, then a new one is signed. |

A call with nobody to name — and the fallback left on *Refuse the call* — is not sent: it fails with a message that says why (nobody signed in, or the account has no such attribute) and asks to see an administrator. The choice is made per connector: a connector left on another method keeps its service account.

### One server per environment \{#api-environments\}

When the screens run on a [multi-pool connector](#multi-pool) — several JD Edwards environments — each environment usually has its own AIS server. The **Environments** card gives the API connector one server per environment; the endpoints stay defined once.

| Field | Effect |
|---|---|
| **Environment (pool)** | The environment (pool) of the connector's own server — its **Server**, or its **Base URL** and credentials. Required as soon as there is another environment. |
| **Other environments** | One entry per other pool: its **Server** — an HTTP server pool, whose address, account, secrets and TLS check are then read —, or, set on the connector, **Base URL**, **Username**, **Password**, **Token**, **SSL Verify**. A blank field takes the connector's value. Passwords and tokens are encrypted when saved. The line of an environment shows `→ pool` or its base URL. |

Nobody chooses the server. A call follows the environment the screen runs on — the **Pool** picked in the sidebar, or the default — and a job step's `pool` (any step type). That covers screen actions (`call_api`), plugins, `/api/http` and the AI assistant.

A call made for one of the connector's environments with no server is **refused** ("no target for pool …"); it is never sent to the connector's own server, which is another environment — often production. The environments are the connector's pool plus every pool of the SQL connectors running on it, so a JDE environment added on the SQL side and forgotten here is refused too. The card lists those environments without a server, and so does *Settings → Integrity*.

```toml
[connectors.ais_connection]
server = "jde_ais"                          # the HTTP server pool of production
pool = "jdedwards"                          # the environment of that server

[connectors.ais_connection.targets.jdedwards_dev]
server = "jde_ais_dev"                      # the HTTP server pool of this environment
```

To name the environment before a sensitive call, use `#POOL#` in a `confirm` message: `Reset the password of {INPUT.user} on #POOL#?`. An upgrade of the licensed apps keeps an install's `server`, `pool` and `targets`.

---

## Schema discovery and column hints \{#schema-discovery-and-column-hints\}

A query has no declared column list: the columns are those the database returns when it runs. How a column looks on a screen is decided, in this order, by:

1. the **column settings of the screen** (Columns tab) — label, format, width, rule, conditions;
2. the **dictionary entry** whose key is the column's name, or the one named in the column's `dd` field — label per language, format, rule (Boolean, enum, lookup…);
3. otherwise the column's name and the default display for its type.

A column does not need a setting of its own: a dictionary entry with its name is enough. See [Dictionary](./dictionary.md#column-reference) and [Screens → Columns](./build/screens/columns.md).

---

## Permissions

Each query and each endpoint has its own permission:

| Permission | Allows |
|---|---|
| `sql:<connector>:<query>` | Running the query — read or write alike. |
| `api:<connector>:<endpoint>` | Calling the endpoint. |

They are granted through roles: allowing a menu entry grants what it opens, and **Beyond the menus** grants a query, an endpoint or a whole connector — patterns such as `sql:billing:report_*` are accepted. See [Roles & permissions](./build/secure/roles-and-permissions.md).

---

## Tips

- **Name queries after the entity** — `invoices_get`, `invoices_by_status_get` — the lists read themselves.
- **Describe the queries** the AI assistant should use: label and description (stage *What it is*).
- **Prefer the dictionary to per-screen labels**: one entry serves every screen.
- **Put a server's address and account in a pool**, not on the API connector: one place to change a password, and a connector an upgrade can refresh.
- **Keep secrets out of the files** with `${VARIABLE}` references when a secrets manager is used — see [Encryption & secrets](./configuration/encryption-secrets.md).

---

## Under the hood

Connectors and pools are stored in `connectors.toml`, in the apps configuration folder. The Liberty Next pages are the normal way to edit them; the same configuration is reachable through the REST API under `/admin/config/connectors` — see [REST API](../references/rest-api.md#admin-config).

---

## What's next

- [Queries — overview](./build/queries/overview.md) — the four kinds of queries and their editors.
- [Dictionary](./dictionary.md) — labels, formats and lists of values of the columns.
- [Parameter binding](./build/queries/parameter-binding.md) — parameters, built-ins and tokens.
- [Screens](./build/screens/overview.md) — grids and dialogs on the queries.
