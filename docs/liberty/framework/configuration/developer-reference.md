---
title: Developer reference
description: "The Developer reference of Liberty Next (Liberty Next → Document): the data model of the framework and of every connector, every setting with the page that edits it and the code that reads it, every API route with the access it requires and its response, every command line with its arguments, and the impact of a change on the configuration — searchable, for superusers."
keywords: [Liberty Next, developer reference, data model, configuration reference, settings, API routes, permissions, command line, CLI, impact analysis, dependencies, unused entities, superuser, documentation]
---

# Developer reference

**Liberty Next → Document → Developer reference** describes the running installation from the inside: its tables, its settings, its API routes, its command lines and the links between the pieces of its configuration, read from the code and the configuration in force. It is for the people who support the install — superusers only — and changes nothing.

The page has five tabs — **Data model**, **Configuration**, **API**, **Command line**, **Impact**; it opens on **Configuration** and then on the last tab used.

---

## At a glance

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dvr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dvr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dvr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dvr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="372" rx="14" fill="url(#dvr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Developer reference</text>
  <rect x="240" y="56" width="351" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="278.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Data model</text>
  <rect x="318" y="57" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="363.5" y="71.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <line x1="410" y1="61" x2="410" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="429.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <line x1="449" y1="61" x2="449" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="492.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Command line</text>
  <line x1="536" y1="61" x2="536" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="563.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Impact</text>
  <text x="240" y="104" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">142 edited in a screen · 21 file / environment only · 0 not in the UI</text>
  <rect x="780" y="88" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="102.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Every status ▾</text>
  <rect x="240" y="120" width="150" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="142" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">All sections</text>
  <text x="252" y="168" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">app</text>
  <text x="252" y="194" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">auth</text>
  <text x="252" y="220" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">jobs</text>
  <text x="252" y="246" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">changesets</text>
  <text x="252" y="272" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ai</text>
  <text x="252" y="298" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <text x="252" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">oidc</text>
  <rect x="400" y="120" width="560" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KEY</text>
  <text x="570" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EDITED IN</text>
  <text x="800" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <text x="890" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READ BY</text>
  <rect x="400" y="152" width="560" height="28" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.enabled</text>
  <text x="570" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Administer → App → nomaflow</text>
  <text x="800" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">true</text>
  <text x="890" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="400" y="184" width="560" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.max_upload_mb</text>
  <text x="570" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Administer → App → nomaflow</text>
  <text x="800" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">200</text>
  <text x="890" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="400" y="216" width="560" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.files_dir</text>
  <rect x="570" y="222.0" width="127" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="633.5" y="233.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">File / environment only</text>
  <text x="800" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <rect x="400" y="248" width="560" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.pool</text>
  <text x="570" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Administer → App → nomaflow</text>
  <text x="800" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">default</text>
  <text x="890" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">model, settings, API, CLI, impact</text>
  <line x1="210" y1="67.0" x2="240" y2="68" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their gaps</text>
  <line x1="210" y1="217.0" x2="252" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
  <rect x="1000" y="70" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status filter</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edited, file only, missing</text>
  <line x1="1000" y1="87.0" x2="960" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where it is edited</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens the detail</text>
  <line x1="1000" y1="217.0" x2="740" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
</svg>

---

## Data model \{#data\}

The tables of the framework, then the tables each connector declares, grouped by connector, each with its number of columns. A search finds a table, a column or a label.

A table shows its **physical table**, its **key**, the **queries** that read it and what uses it — screens, dashboards, charts, jobs, Explorer models —, its related tables, then its columns: **Column**, **Label** (from the dictionary), **Type**, **References**, **Screens**, **Description**.

---

## Configuration \{#config\}

Every setting of the install, by section, with its type, its default and its description.

| Column | Meaning |
|---|---|
| **Key**, **Label**, **Type**, **Default** | The setting. |
| **Edited in** | The page that edits it — *Administer → App → Sign-in* —, or *File / environment only* with the reason, or *Not in the UI*. |
| **Read by** | The places in the code that use it. |

The header counts the settings edited in a screen, those set in the file or the environment only, and those missing from the interface; the status filter keeps one kind. A click on a row opens its detail, with the code that reads it.

---

## API \{#api\}

Every route of the server, by module: **Method**, **Path**, **Summary**, **Module** and **Access** — *public*, *any signed-in user*, *superuser*, a *permission* or a *role*, read from the code. A click on a route opens its parameters, its request and its response, and the place of its handler. For the main read routes — connectors, menus, screens, external addresses, the Data Explorer, Nomaflow jobs and runs — the **Response** section gives the shape of the JSON returned, with an example. The buttons in the header open the interactive API documentation of the server.

The search runs across every module and shows, per group, the number of matches.

---

## Command line \{#cli\}

Every command installed with the server — `liberty-admin`, `liberty-ops`, `liberty-connectors`, `liberty-crypto`, `liberty-license`… —, read from its argument parser. On the left, the commands with a search, folded by default, with **Expand all** / **Collapse all**.

A command shows what it does, its usage with **Copy**, the **Options of every command**, then each sub-command with its arguments: **Argument**, **Value**, **Default**, *required*, *repeatable*. Under Docker, `./liberty` wraps the installation, the upgrade, the backups and the database: see [Operations](../../installation/operations.md). The command-line section of the [technical report](./documentation-reports.md) is built from the same reading.

---

## Impact \{#impact\}

Every entity of the configuration with what it uses and what uses it, followed through: what a change to a pool, a query, a screen or a dictionary entry reaches. The links are the ones the [Package](../build/packages.md) dependency walk follows.

On the left, the entities by kind — pools, connectors, queries, API endpoints, dictionary entries, lookups, sequences, enums, screens, menu items, charts, dashboards, shared actions, Explorer models, jobs, notification rules, AI blocks —, folded by default, with a search (`scope.name`). **Unused only** keeps the entities nothing points at — menu items, jobs, notification rules, pools, Explorer models and dictionary entries, opened or reached otherwise, are never counted as unused —, and **Referenced but not defined** lists the references to an entity that does not exist.

A picked entity shows:

| Part | Content |
|---|---|
| Header | *uses N · used by N*, and **Open in editor**, which goes to its builder. |
| **A change here reaches** | The entities reached, counted by kind: a query → its screens → the menu items opening them, the charts → their dashboards, the jobs and actions running it. |
| **Used by** | The tree of what uses it, level by level (up to 8 levels). |
| **Uses** | What it uses directly. |
| **Everything it needs** | Every entity it depends on, followed through. |

A click on an entity of the tree re-centres the view on it; **Back** returns to the previous one. A dictionary entry has no explicit reference: a column reaches its entry by name.

---

## Related

- [Documentation reports](./documentation-reports.md) — the same knowledge as a PDF document.
- [REST API](../../references/rest-api.md) — the main routes, explained.
