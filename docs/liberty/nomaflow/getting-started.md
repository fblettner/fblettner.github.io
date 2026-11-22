---
title: Getting started
description: "A first Nomaflow job in a few minutes: open the Jobs page, create a job, add a sql_query step, set a schedule, run it by hand and read the run."
keywords: [Nomaflow, getting started, first job, sql_query, schedule, run now, run detail, Liberty Next]
---

# Getting started

A first job: refresh a summary table every night, then run it by hand to check it.

---

## At a glance

<svg viewBox="0 0 1320 462" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfgs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfgs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfgs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfgs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="422" rx="14" fill="url(#nfgs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New job</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Job-level settings + the step pipeline</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back to jobs</text>
  <text x="1008" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="1018" y="86" width="62" height="22" rx="5" fill="url(#nfgs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="122" width="470" height="300" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="702" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="702" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="702" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="702" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="702" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="702" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="702" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="702" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="702" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="702" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="702" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="702" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="702" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="614" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="656" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="684" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="170" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="187" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="187" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="330" y1="183" x2="356" y2="183" stroke="#334155" strokeWidth="2"/>
  <path d="M354,179 L360,183 L354,187 Z" fill="#334155"/>
  <circle cx="343.0" cy="183" r="8" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="343.0" y="186.5" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="159" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="359" y="156" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="372" y="173" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="372" y="187" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-summary</text>
  <text x="372" y="200" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">reporting.daily_summary_ref…</text>
  </g>
  <line x1="514" y1="183" x2="540" y2="183" stroke="#334155" strokeWidth="2"/>
  <path d="M538,179 L544,183 L538,187 Z" fill="#334155"/>
  <circle cx="527.0" cy="183" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="527.0" y="186.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="546" y="170" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="187" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="574" y="187" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="323.0" y="218" width="112" height="200" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="335.0" y="237" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">sql_copy</text>
  <rect x="327.0" y="243" width="104" height="18" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="335.0" y="256" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="335.0" y="275" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">python</text>
  <text x="335.0" y="294" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ldap_sync</text>
  <text x="335.0" y="313" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">http</text>
  <text x="335.0" y="332" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">call_job</text>
  <text x="335.0" y="351" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">file_load</text>
  <text x="335.0" y="370" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">file_export</text>
  <text x="335.0" y="389" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">report</text>
  <text x="335.0" y="408" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <line x1="343.0" y1="191" x2="343.0" y2="218" stroke="#4a9eff" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="724" y="122" width="356" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="738" y="134" width="61" height="16" rx="4" fill="#4ade80" fillOpacity="0.14" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="745" y="145.5" fill="#4ade80" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="807" y="146" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">refresh-summary</text>
  <text x="738" y="172" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STEP NAME</text>
  <rect x="738" y="177" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="191.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">refresh-summary</text>
  <rect x="738" y="208" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="217" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">If this step fails, run the next steps anyway (…)</text>
  <rect x="738" y="226" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="235" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Turned off for this install — never runs (…)</text>
  <text x="738" y="265" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="738" y="270" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="284.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">reporting</text>
  <text x="886" y="284.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="906" y="265" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="906" y="270" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="916" y="284.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">daily_summary_refresh</text>
  <text x="1054" y="284.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="738" y="319" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="738" y="325" width="93" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="784.5" y="338.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add parameter</text>
  <text x="738" y="371" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">A click on Start brings back the job's settings: Id, schedule, Enabled.</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the job's own settings</text>
  <line x1="200" y1="127.0" x2="260" y2="183" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · The + on the link</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the list of types</text>
  <line x1="200" y1="247.0" x2="337.0" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Pick sql_query</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the card appears in place</text>
  <line x1="200" y1="347.0" x2="323.0" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Save</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes jobs.toml, back to the list</text>
  <line x1="1120" y1="93.0" x2="1080" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Connector and query</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a named query, not SQL</text>
  <line x1="1120" y1="247.0" x2="1066" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
</svg>

---

## Before you start \{#before\}

- A **superuser** account, or a role granted *Create and edit jobs* (`nomaflow:edit`) — see [Administration](./administration.md#permissions).
- A SQL connector with a **write query** that does the work, for instance `daily_summary_refresh` (`INSERT … SELECT …`, `REFRESH MATERIALIZED VIEW …`, `CALL …`). A step calls a named query of a connector, not SQL typed in the job. See [Create a custom query](../framework/build/queries/create-custom.md).

---

## 1 — Open the Jobs page \{#open\}

Open **Operations → Jobs** in the Nomaflow menu (address `/nomaflow`). Each job is a line, grouped by application; the toolbar has **New job**, **Schedule** and **Reload**. See [Jobs page](./jobs/catalog.md).

## 2 — Create the job \{#create\}

**New job** opens the editor on an empty flow — **Start**, **End** — with the **Job** settings beside it: **Id** `daily-summary`, a **Description**, the tag `reporting`, **Enabled** on.

## 3 — Add a step \{#step\}

Click the **+** on the link between **Start** and **End**, then `sql_query` in the list: the step's card appears in the flow, its fields beside it. Give it a **Step name** (`refresh-summary`), pick the **Connector**, then the **Query** `daily_summary_refresh`.

## 4 — Set the schedule \{#schedule\}

Click **Start** to come back to the job's settings: **Daily** above **Schedule (cron)** writes `0 2 * * *`, **Timezone** `Europe/Paris`. **Next runs** lists the next five nights — check them. Then **Save** at the top: the job is written, and the Jobs page opens with the job and its schedule.

## 5 — Run it by hand \{#run\}

On the job's line, **Run now** (▶). The line shows the state of the run, then `SUCCEEDED`; a click on that state opens the run detail: the summary, the step with its state, the rows affected and the log. See [Run history](./runs/history.md).

## 6 — Be told when it fails \{#notify\}

In **Liberty Next → Logic → Notifications**, add a rule: trigger *A job event*, job `daily-summary`, events `failure` and `missed`, channel `email`, recipient `role:ops`. See [Notifications](./notifications.md).

---

## What next \{#next\}

- More step types — loading files, copying tables, calling an API: [Steps](./steps.md).
- Run the same job with different parameters on several schedules: [Schedulable presets](./jobs/schedules.md#schedulable-presets).
- Ready-made patterns: [Workflow recipes](./workflows/scheduled-sync.md).
