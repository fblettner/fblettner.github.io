---
title: Developer reference
description: "The Developer reference of Liberty Next (Liberty Next → Document): the data model of the framework and of every connector, every setting with the page that edits it and the code that reads it, every API route with the access it requires and its response, every command line with its arguments, and the impact of a change on the configuration — searchable, for superusers."
keywords: [Liberty Next, developer reference, data model, configuration reference, settings, API routes, permissions, command line, CLI, impact analysis, dependencies, unused entities, superuser, documentation]
---

# Developer reference

**Liberty Next → Document → Developer reference** describes the running installation from the inside: its tables, its settings, its API routes, its command lines and the links between the pieces of its configuration, read from the code and the configuration in force. It is for the people who support the install — superusers only — and changes nothing.

The page has five tabs, in its header — **Data model**, **Configuration**, **API**, **Command line**, **Impact**; it opens on **Configuration** and then on the last tab used.

---

## At a glance

<svg viewBox="0 0 1320 437" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="devref-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="devref-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="devref-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="devref-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="397" rx="14" fill="url(#devref-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Developer reference</text>
  <text x="258" y="59" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Every key of app.toml, read from the running code: where the screens edit it, or why it stays in the file…</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <rect x="733" y="32" width="351" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="771.5" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Data model</text>
  <rect x="811" y="33" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="856.5" y="47.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <line x1="903" y1="37" x2="903" y2="51" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <line x1="942" y1="37" x2="942" y2="51" stroke="#334155" strokeWidth="1"/>
  <text x="985.5" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Command line</text>
  <line x1="1029" y1="37" x2="1029" y2="51" stroke="#334155" strokeWidth="1"/>
  <text x="1056.5" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Impact</text>
  <rect x="244" y="92" width="204" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="107.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Search a key, a description, a file…</text>
  <rect x="237" y="124" width="218" height="24" fill="rgba(74,158,255,0.14)"/>
  <rect x="237" y="124" width="3" height="24" fill="#4a9eff"/>
  <text x="250" y="140" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">All sections</text>
  <text x="444" y="140" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">114</text>
  <line x1="236" y1="148" x2="456" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="165" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">app</text>
  <text x="444" y="165" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">24</text>
  <line x1="236" y1="173" x2="456" y2="173" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="190" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">connectors</text>
  <text x="444" y="190" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <line x1="236" y1="198" x2="456" y2="198" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="215" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">screens</text>
  <text x="444" y="215" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="236" y1="223" x2="456" y2="223" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">auth</text>
  <text x="444" y="240" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">11</text>
  <line x1="236" y1="248" x2="456" y2="248" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="265" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">oidc</text>
  <text x="444" y="265" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <line x1="236" y1="273" x2="456" y2="273" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="290" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ai</text>
  <text x="444" y="290" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">29</text>
  <line x1="236" y1="298" x2="456" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="315" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">license</text>
  <text x="444" y="315" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="236" y1="323" x2="456" y2="323" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="340" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">jobs</text>
  <text x="444" y="340" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <line x1="236" y1="348" x2="456" y2="348" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="365" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">changesets</text>
  <text x="444" y="365" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <line x1="236" y1="373" x2="456" y2="373" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="390" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <text x="444" y="390" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <line x1="236" y1="398" x2="456" y2="398" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="84" width="220" height="321" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="470" y="84" width="614" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="112" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">app.toml</text>
  <text x="554" y="111" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">95 edited in a screen · 19 file / environment only · 0 not in the UI</text>
  <rect x="954" y="96" width="118" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="964" y="110.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Any status</text>
  <text x="1060" y="110.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="470" y="142" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="157.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="1024" y="142" width="60" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="964" y="142" width="55" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="991.5" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="914" y="142" width="45" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="936.5" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="854" y="142" width="55" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="881.5" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="804" y="142" width="45" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="826.5" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="470" y="174" width="614" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KEY</text>
  <text x="584" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <text x="684" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="722" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EDITED IN</text>
  <text x="900" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READ BY</text>
  <text x="960" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="470" y="204" width="614" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.name</text>
  <text x="584" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">App name</text>
  <text x="684" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <text x="722" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="208.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="916.0" y="219.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">web</text>
  <text x="960" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">"Liberty"</text>
  <rect x="470" y="232" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.port</text>
  <text x="584" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Port</text>
  <text x="684" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">int</text>
  <text x="722" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="236.0" width="37" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="247.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">main</text>
  <text x="960" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">8000</text>
  <rect x="470" y="260" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.static_dir</text>
  <text x="584" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Built frontend</text>
  <text x="684" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <rect x="722" y="264.0" width="127" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="785.5" y="275.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">File / environment only</text>
  <rect x="900" y="264.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="916.0" y="275.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">web</text>
  <text x="960" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="470" y="288" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.log_file</text>
  <text x="584" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Log file</text>
  <text x="684" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <text x="722" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="292.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="916.0" y="303.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">log</text>
  <text x="960" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="470" y="316" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.files_dir</text>
  <text x="584" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Work area</text>
  <text x="684" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <text x="722" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="320.0" width="37" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="331.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">jobs</text>
  <text x="960" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="470" y="358" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page  50 ▾      Showing 1–50 of 114</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five views</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the page header</text>
  <line x1="200" y1="47.0" x2="236" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their number of keys</text>
  <line x1="200" y1="217.0" x2="236" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="1120" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status filter</text>
  <text x="1130" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edited, file only, not in the UI</text>
  <line x1="1120" y1="77.0" x2="1084" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The shared grid</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">views, filters, export</text>
  <line x1="1120" y1="187.0" x2="1084" y2="154" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row → its detail</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">description, readers in the code</text>
  <line x1="1120" y1="307.0" x2="1084" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
</svg>

---

## Data model \{#data\}

The tables of the framework, then the tables each connector declares, grouped by connector, each with its number of columns. A search finds a table, a column or a label.

A table shows its **physical table**, its **key**, the **queries** that read it and what uses it — screens, dashboards, charts, jobs, Explorer models —, its related tables, then its columns: **Column**, **Label** (from the dictionary), **Type**, **References**, **Screens**, **Description**.

---

## Configuration \{#config\}

Every setting of the install, by section, with its type, its default and its description. On the left, the sections of `app.toml` with their number of keys, under a search that runs across every section (each section then shows its matches); on the right, the shared grid — views, filters, grouping, columns, export.

| Column | Meaning |
|---|---|
| **Key**, **Label**, **Type**, **Default** | The setting. |
| **Edited in** | The page that edits it — *Liberty Next → Administer → App* —, or *File / environment only* with the reason, or *Not in the UI*. |
| **Read by** | The places in the code that use it. |

The header counts the settings edited in a screen, those set in the file or the environment only, and those missing from the interface; the status filter (*Any status*, *Edited in a screen*, *File / environment only*, *Not in the UI*) keeps one kind. A click on a row opens its detail, with the code that reads it.

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

On the left, the entities by kind — pools, connectors, queries, API endpoints, dictionary entries, lookups, sequences, enums, screens, menu items, charts, dashboards, services, Explorer models, jobs, notification rules, AI blocks —, folded by default, with a search (`scope.name`). **Unused only** keeps the entities nothing points at — menu items, jobs, notification rules, pools, Explorer models and dictionary entries, opened or reached otherwise, are never counted as unused —, and **Referenced but not defined** lists the references to an entity that does not exist.

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
