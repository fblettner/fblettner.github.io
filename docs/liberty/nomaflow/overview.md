---
title: What is Nomaflow
description: "Nomaflow is the job scheduler built into Liberty Next: cron-scheduled jobs made of steps (SQL, file loads, Python, HTTP, LDAP, other jobs), retries, a run history with logs, missed-schedule detection and notifications — no separate worker or broker."
keywords: [Nomaflow, scheduler, jobs, runs, ETL, cron, file load, Liberty Next]
---

# What is Nomaflow

**Nomaflow** is the job scheduler built into Liberty Next. It runs inside the server — no separate worker, no message broker — and uses the same connectors as the screens and dashboards. A job is a list of **steps** run in order, on a schedule or on demand; every run is recorded with its steps and its log.

---

## At a glance

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="14" width="1180" height="140" rx="14" fill="url(#nfo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="30" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow — inside the Liberty Next server</text>
  <rect x="30" y="70" width="200" height="64" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="130.0" y="99.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Jobs</text>
  <text x="130.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">jobs.toml · Jobs page</text>
  <line x1="230" y1="102" x2="255" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="255" y="70" width="200" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="355.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Triggers</text>
  <text x="355.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · presets · Run now</text>
  <line x1="455" y1="102" x2="480" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="480" y="70" width="200" height="64" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="580.0" y="99.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Steps</text>
  <text x="580.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL · file · Python · HTTP · LDAP</text>
  <line x1="680" y1="102" x2="705" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="705" y="70" width="200" height="64" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="805.0" y="99.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · Runs</text>
  <text x="805.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">states · steps · log</text>
  <line x1="905" y1="102" x2="930" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="930" y="70" width="200" height="64" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="1030.0" y="99.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · Notifications</text>
  <text x="1030.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">bell · e-mail · action</text>
  <rect x="220" y="190" width="300" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="230" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connectors and pools</text>
  <text x="230" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same named queries as the screens</text>
  <line x1="520" y1="207.0" x2="600" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="650" y="190" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="660" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Missed and failed runs</text>
  <text x="660" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recorded, and sent to the people concerned</text>
  <line x1="980" y1="207.0" x2="1020" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
</svg>

---

## What it is used for \{#uses\}

| Need | With Nomaflow |
|---|---|
| Copy a table every night from a production database to a reporting database | A `sql_copy` step, scheduled at 02:00. See [Scheduled sync](./workflows/scheduled-sync.md). |
| Load monthly spreadsheets into a facts table, replaying a wrong month | A `file_load` step in `replace_partition` mode, a refuse query for closed periods. See [Steps](./steps.md#file-load). |
| Pick up files dropped in a shared folder | `file_load` with a watched folder: each file is loaded, then moved to `done/` or `failed/`. |
| Pull data from a REST API | A `python` step that calls the API and writes through a connector's query. See [API pull](./workflows/api-pull.md). |
| Mirror Active Directory users into a table | An `ldap_sync` step. |
| Purge old rows past a threshold | A `python` step that counts and deletes. See [Conditional cleanup](./workflows/conditional-cleanup.md). |
| Run a one-off after a release | A job without a schedule, run with **Run now**. |
| Be told when a job fails or did not run | A notification rule on `failure` and `missed`. See [Notifications](./notifications.md). |

---

## How it fits in Liberty Next \{#framework\}

| Liberty Next piece | Used by Nomaflow for |
|---|---|
| Connectors and pools | Reaching the databases and APIs, through the same named queries and endpoints as the screens. |
| `jobs.toml` | The jobs, their presets and the policies — edited from the Jobs pages, carried by packages and by the licensed apps. |
| The framework database | The run history. |
| Encrypted secrets | Pool passwords; other secrets written as `${VARIABLE}` in `jobs.toml`. |
| Notifications | Telling people about failed, missed or long runs. |
| Superuser access | The Jobs pages and their API are reserved to superusers. |

---

## What it does not do \{#limits\}

- **No graph of tasks.** Steps run one after the other; a job can call another job (`call_job`) and wait for it, but nothing runs in parallel inside a job.
- **One server.** The scheduler runs in the server process: run a single instance.
- **No automatic catch-up.** A time missed while the server was down is recorded as **MISSED** and can be notified; running it again is a manual decision.
- **No replay button.** To run again with the same values, save them as a preset or pick them again in **Run with parameters**.

---

## Read next \{#next\}

| Page | To… |
|---|---|
| [Getting started](./getting-started.md) | Build a first scheduled job. |
| [Concepts](./concepts.md) | Understand jobs, steps, schedules, triggers, runs and parameters. |
| [Jobs page](./jobs/catalog.md) · [Create a job](./jobs/create.md) · [Schedules](./jobs/schedules.md) | Work with jobs. |
| [Steps](./steps.md) | Know every step type. |
| [Run history](./runs/history.md) · [Troubleshoot](./runs/troubleshoot.md) | Read and fix runs. |
| [Custom Python steps](./custom-python.md) | Write your own step. |
| [Administration](./administration.md) | Settings, retention, restart. |
