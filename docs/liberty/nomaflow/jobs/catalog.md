---
title: The Jobs page
description: "The Nomaflow Jobs page: search and filters, the jobs grouped by application with the main jobs first, what a job line shows, switching a job on or off, Run now and Run with parameters (presets, parameters, several values, steps, file uploads, log level), Cancel, Clone, Delete and Export."
keywords: [Nomaflow, jobs, catalogue, run now, run with parameters, presets, cancel, clone, delete, export, retention, missed schedules, Liberty Next]
---

# The Jobs page

The **Jobs** page lists every job of `jobs.toml`, one line per job, grouped by application, with its last run, its schedule and its actions. Open it from **Operations → Jobs** in the Nomaflow menu. Superusers see it, and the roles granted *Follow the jobs* (`nomaflow:view`) — see [Administration](../administration.md#permissions).

---

## At a glance

<svg viewBox="0 0 1320 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfjl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfjl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfjl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfjl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="480" rx="14" fill="url(#nfjl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomaflow — scheduled ETL + task jobs</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="72" height="22" rx="5" fill="url(#nfjl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <rect x="320" y="86" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="353.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Schedule</text>
  <rect x="394" y="86" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="427.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload</text>
  <rect x="240" y="120" width="300" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="135.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Search jobs (id, description, tag)…</text>
  <rect x="550" y="120" width="150" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="135.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">All applications</text>
  <text x="688" y="136" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="708" y="120" width="130" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="135.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Any status</text>
  <text x="826" y="136" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="846" y="120" width="120" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="856" y="135.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Any tag</text>
  <text x="954" y="136" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="1080" y="136" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 of 9 jobs</text>
  <rect x="240" y="156" width="840" height="26" rx="7" fill="rgba(168,85,247,0.05)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="173" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="266" y="173" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="282" y="173" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Run history retention</text>
  <text x="399.84000000000003" y="173" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· 30d · cap 100/job · every 60 min</text>
  <rect x="240" y="188" width="840" height="26" rx="7" fill="rgba(168,85,247,0.05)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="205" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="266" y="205" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="282" y="205" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Missed schedules</text>
  <text x="374.64" y="205" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· grace 10 min · every 5 min</text>
  <rect x="932.0" y="194" width="138.0" height="14" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="204" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">checked 2m ago · 0 missed</text>
  <rect x="240" y="226" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="244" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="244" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">☆</text>
  <text x="284" y="244" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Main jobs</text>
  <text x="344.4" y="244" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="254" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="273" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="440" y="273" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Nightly copy of the CRM tables</text>
  <rect x="658" y="261" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="272.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="273" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="860" y="260" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="272.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">enabled</text>
  <text x="942" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="273" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="284" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="303" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">sales-monthly-load</text>
  <text x="440" y="303" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Monthly sales file into the facts table</text>
  <rect x="658" y="291" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="679.5" y="302.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="750" y="303" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manual only</text>
  <rect x="860" y="290" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="302.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="303" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="324" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="342" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="342" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="294.8" y="342" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">3</text>
  <rect x="240" y="352" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="371" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-archive</text>
  <text x="440" y="371" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Archive closed deals</text>
  <rect x="658" y="359" width="53" height="16" rx="3" fill="#fb923c" fillOpacity="0.12" stroke="#fb923c" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="684.5" y="370.5" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">CANCELED</text>
  <text x="750" y="371" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manual only</text>
  <rect x="860" y="358" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="370.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="371" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="382" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="401" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="440" y="401" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Nightly copy of the CRM tables</text>
  <rect x="658" y="389" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="400.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="401" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="860" y="388" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="400.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">enabled</text>
  <text x="942" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="401" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="412" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="431" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="440" y="431" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Flag the deals without news</text>
  <rect x="658" y="419" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="430.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="431" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <rect x="860" y="418" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="430.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">enabled</text>
  <text x="942" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="431" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="452" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="470" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="268" y="470" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Framework</text>
  <text x="328.4" y="470" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">4</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">new job, schedule view, reload</text>
  <line x1="200" y1="87.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search and filters</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept in the browser</text>
  <line x1="200" y1="149.0" x2="240" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two shared policies</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retention, missed schedules</text>
  <line x1="200" y1="213.0" x2="240" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Main jobs first</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the jobs tagged main</text>
  <line x1="200" y1="267.0" x2="240" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One group per application</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click folds it</text>
  <line x1="200" y1="397.0" x2="240" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Framework last</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the jobs of no application</text>
  <line x1="200" y1="467.0" x2="240" y2="466" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last run</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens its detail</text>
  <line x1="1120" y1="253.0" x2="710" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">enabled / disabled</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">switches the job's own schedule</text>
  <line x1="1120" y1="337.0" x2="932" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="1120" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="1130" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run, edit, clone, export, delete</text>
  <line x1="1120" y1="427.0" x2="1030" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
</svg>

---

## Search and filters \{#toolbar\}

| Element | Use |
|---|---|
| **Search** | Finds a job by its id, its description or a tag. |
| **All applications**, **Any status**, **Any tag** | Narrow the list. Status: *Enabled*, *Disabled*, *Scheduled (enabled with a next run)*, *Running now*, *Last run failed*. |
| **Clear** | Resets the search and the filters. |
| *N of M jobs* | How many jobs the filters leave. |
| **New job** | Opens the job editor — see [Create a job](./create.md). |
| **Schedule** | Opens the day-by-day view of the schedules — see [Schedules](./schedules.md#schedule-view). |
| **Reload** | Reads the list again. |

The search and the filters are kept in the browser from one visit to the next. Two folded panels hold the policies shared by every job: **Run history retention** ([Administration](../administration.md#retention)) and **Missed schedules** ([Schedules](./schedules.md#missed)).

---

## Groups \{#groups\}

- **Main jobs** comes first: the jobs tagged `main`, the ones operators run most — the collection of an application, a nightly sync.
- Then one group per **application**, in alphabetical order: a job belongs to the application its tags or its id name (`nomasx1-collect-all` → Nomasx-1); the others go to **Framework**, last.

A click on a group's title folds or unfolds it.

---

## A job line \{#card\}

| Element | Meaning |
|---|---|
| Id, description | A click on the id opens the job editor. |
| Last run | The state of the last run; a click opens its detail. |
| Schedule | The cron, or **Manual only**, with the next run. |
| **enabled** / **disabled** | A click switches the job's own schedule on or off at once, without reloading the configuration. **Run now** works either way, and preset schedules are not affected. |

The icons at the end of the line:

| Icon | Effect |
|---|---|
| **Run now** | Runs the job. When there is something to choose — parameters, step arguments, several steps, a `file_load` step — it opens **Run with parameters** first. While the job runs, it becomes **Cancel**. |
| **Edit** | Opens the job editor. |
| **Clone** | Asks for a new id and creates a disabled copy without any schedule: neither the job's own nor its presets'. |
| **Export** | Downloads a ZIP with the job's `jobs.toml` entry and a `MANIFEST.md`. The connectors and queries it uses are not included. |
| **Delete** | Removes the job from `jobs.toml` after confirmation. Its run history is kept. |

---

## Run with parameters \{#run-with-parameters\}

The window applies to this run only — `jobs.toml` is not changed.

| Part | Content |
|---|---|
| **Preset** | Pick a saved preset and **Apply** it: the window first goes back to the job's saved values, then applies the preset — as the scheduler does. *(pick a preset…)* returns to the saved values. **Save as preset…** saves the window's current state under a name, in `jobs.toml`. |
| **Shared params (apply to every step)** | The job's shared parameters, editable for this run. A parameter offered to users shows as a dropdown — its choices may come from a query, such as the applications of Nomasx-1 —, or as checkboxes headed by **All** when several values are allowed. |
| **Steps** | One line per step with a checkbox to skip it (**All** / **None**); **Edit parameters** opens a step's arguments. A `file_load` step gets a file picker — see [Steps](../steps.md#file-load). |
| **Log level** | *WARNING — warnings + errors only*, *INFO — row counts + progress markers*, *DEBUG — full SQL of every query*. |
| **Run** | Uploads the chosen files, then starts the run. |

**Several values, several runs.** A job built to run *per value* — per application, per company — runs once for each value ticked, one run after the other, each with a single value; a failed value does not stop the next ones. **All** takes every value offered. In [Job Runs](../runs/history.md), each run shows the value it ran for.

Typical uses: rerun only the step that failed, load one month again, run with `DEBUG` to see the SQL, run a preset by hand, collect three applications in one go.

---

## Cancel \{#cancel\}

**Cancel** asks the run to stop. SQL, HTTP, file-load and `async` Python steps stop at once; the run ends **CANCELED**. A synchronous Python function cannot be interrupted: the run is marked cancelled and the function finishes on its own — see [Troubleshoot](../runs/troubleshoot.md#cancellation-doesnt-stop-my-step).
