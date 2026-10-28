---
title: Getting started
description: "A first Nomaflow job in a few minutes: open the Jobs page, create a job, add a sql_query step, set a schedule, run it by hand and read the run."
keywords: [Nomaflow, getting started, first job, sql_query, schedule, run now, run detail, Liberty Next]
---

# Getting started

A first job: refresh a summary table every night, then run it by hand to check it.

---

## At a glance

<svg viewBox="0 0 1200 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="186" rx="14" fill="url(#nfs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Jobs</text>
  <rect x="760" y="28" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="42.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filter…</text>
  <rect x="878" y="28" width="90" height="22" rx="5" fill="url(#nfs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="923.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="355" height="102" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="252" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Flags deals without news</text>
  <rect x="252" y="122" width="73" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="288.5" y="134.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 8 ∗ ∗ 0-4</text>
  <rect x="333" y="122" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="364.5" y="134.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="580" y="94" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="252" y="146" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="280.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="315" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="373.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="605" y="74" width="355" height="102" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="617" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">sales-copy</text>
  <text x="617" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">jdedwards → warehouse</text>
  <rect x="617" y="122" width="68" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="651.0" y="134.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 2 ∗ ∗ ∗</text>
  <rect x="693" y="122" width="48" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="717.0" y="134.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="945" y="94" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="617" y="146" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="645.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="680" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="738.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ New job</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the job editor</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A job card</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">schedule, last run state</text>
  <line x1="210" y1="137.0" x2="240" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">runs it at once</text>
  <line x1="210" y1="217.0" x2="252" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last run failed</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click it for the detail</text>
  <line x1="1000" y1="167.0" x2="740" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
</svg>

---

## Before you start \{#before\}

- A **superuser** account — the Jobs pages are reserved to superusers.
- A SQL connector with a **write query** that does the work, for instance `daily_summary_refresh` (`INSERT … SELECT …`, `REFRESH MATERIALIZED VIEW …`, `CALL …`). A step calls a named query of a connector, not SQL typed in the job. See [Create a custom query](../framework/build/queries/create-custom.md).

---

## 1 — Open the Jobs page \{#open\}

Open **Jobs** from the Nomaflow menu (address `/nomaflow`). Each job is a card; the toolbar has **+ New job** and **Schedule**. See [Jobs page](./jobs/catalog.md).

## 2 — Create the job \{#create\}

**+ New job**. In the **Job** section: **Id** `daily-summary`, a **Description**, the tag `reporting`, **Enabled** on.

## 3 — Add a step \{#step\}

In **Steps**, the **Add step:** bar: click `sql_query`. Give the step a **Step name** (`refresh-summary`), pick the **Connector**, then the **Query** `daily_summary_refresh`.

## 4 — Set the schedule \{#schedule\}

Back in the **Job** section: **Schedule (cron)** `0 2 * * *`, **Timezone** `Europe/Paris`. **Next runs** lists the next five nights — check them. Then **Save** at the top: the job appears on the Jobs page with its next run.

## 5 — Run it by hand \{#run\}

On the card, **▶ Run now**. The card shows the run in progress, then *last SUCCEEDED*; click it to open the run detail: the summary, the step with its state, the rows affected and the log. See [Run history](./runs/history.md).

## 6 — Be told when it fails \{#notify\}

In **Liberty Next → Build → Notifications**, add a rule: trigger *A job event*, job `daily-summary`, events `failure` and `missed`, channel `email`, recipient `role:ops`. See [Notifications](./notifications.md).

---

## What next \{#next\}

- More step types — loading files, copying tables, calling an API: [Steps](./steps.md).
- Run the same job with different parameters on several schedules: [Schedulable presets](./jobs/schedules.md#schedulable-presets).
- Ready-made patterns: [Workflow recipes](./workflows/scheduled-sync.md).
