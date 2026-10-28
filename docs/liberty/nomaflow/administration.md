---
title: Administration
description: "Running Nomaflow on a server: where runs and files are kept, one instance, what happens on restart, run history retention, the run log buffer, who can use the Jobs pages, backup and health."
keywords: [Nomaflow, administration, jobs settings, retention, run log, restart, recovery, superuser, backup, Liberty Next]
---

# Administration

Nomaflow runs inside the Liberty Next server: its scheduler, its runner and its run history need no separate service.

---

## At a glance

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nad-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nad-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nad-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="270" rx="14" fill="url(#nad-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="40" width="460" height="230" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="62" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next server (one process)</text>
  <rect x="260" y="80" width="130" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="325.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Scheduler</text>
  <text x="325.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · presets</text>
  <rect x="410" y="80" width="130" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="475.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Runner</text>
  <text x="475.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">steps, retries</text>
  <rect x="560" y="80" width="120" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="620.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Jobs pages</text>
  <text x="620.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">superuser</text>
  <line x1="390" y1="108" x2="410" y2="108" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nad-flow)"/>
  <rect x="260" y="170" width="200" height="70" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="360.0" y="202.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run history</text>
  <text x="360.0" y="217.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">nomaflow_job_runs …</text>
  <rect x="480" y="170" width="200" height="70" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="580.0" y="202.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Work files</text>
  <text x="580.0" y="217.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">.nomaflow/files · 200 MB</text>
  <line x1="475" y1="136" x2="360" y2="170" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nad-flow)"/>
  <line x1="475" y1="136" x2="580" y2="170" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nad-flow)"/>
  <rect x="740" y="80" width="220" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="850.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">plugins/nomaflow/jobs.toml</text>
  <text x="850.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">edited from the Jobs pages</text>
  <line x1="740" y1="108" x2="680" y2="108" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#nad-flow)"/>
  <rect x="740" y="170" width="220" height="70" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="850.0" y="202.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Restart</text>
  <text x="850.0" y="217.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">running → FAILED, gaps → MISSED</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Single instance</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">two would run jobs twice</text>
  <line x1="210" y1="77.0" x2="240" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nad-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">History in the database</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">5,000 log lines per run</text>
  <line x1="210" y1="217.0" x2="260" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nad-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">After a restart</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">missed runs are not replayed</text>
  <line x1="1000" y1="217.0" x2="960" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nad-arrow)"/>
</svg>

---

## Storage and limits \{#settings\}

| Item | Value |
|---|---|
| Run history | In the framework's database, five tables: `nomaflow_job_runs`, `nomaflow_step_runs`, `nomaflow_run_logs`, `nomaflow_run_overrides`, `nomaflow_step_run_extras`. The server creates and completes them at start-up. |
| Jobs | The jobs file `plugins/nomaflow/jobs.toml`, next to the configuration folder — edited from the Jobs pages. |
| Run log | The last 5,000 lines of each run are kept. |
| Files | Files uploaded with **Run with parameters** and the reject files of `file_load` steps go to `.nomaflow/files`, next to the configuration. |
| Upload size | 200 MB at most per file. |

---

## One instance \{#one-instance\}

Run **one** Liberty Next instance: the scheduler fires from the server process, with no lock shared between instances, so two instances would run every job twice. See [Production checklist](../installation/production.md#replicas).

---

## Restart \{#restart\}

- Runs in progress when the server stops are closed as **FAILED** with *abandoned: process restart during run* at the next start.
- Scheduled times that fell while the server was down are recorded as **MISSED** — see [Missed schedules](./jobs/schedules.md#missed). They are not run again on their own: run them by hand if needed.
- Jobs, presets and policies are in `jobs.toml`; the history is in the database — both survive the restart.

---

## Run history retention \{#retention\}

The **Run history retention** panel of the Jobs page:

| Setting | Default | Meaning |
|---|---|---|
| **Auto-sweep** | on | The recurring clean-up. |
| **Days kept** | 30 | Finished runs older than this are deleted, with their steps and logs. |
| **Cap per job** | 100 | Each job keeps at most this many recent runs. |
| **Sweep interval (min)** | 60 | How often the clean-up runs. |
| **Files kept (days)** | blank | The work area's files older than this are deleted: uploads, rejects reports, reports, exports, and the `done/` / `failed/` archives of watched folders. Blank = **Days kept**; `0` = keep the files. A copy written to an export folder is never touched. |

**Clean now** runs it at once and reports the runs and the files deleted. The same stores show, with their size, in [Monitoring → Retention](../monitoring/retention.md). The policy is saved in `jobs.toml` under `[meta.retention]`.

---

## Run log \{#run-log\}

Each run collects its log lines in memory — the `liberty.*` loggers, the `nomaflow` lines and the namespaces registered by plugins — and writes them to the database when it ends. The level is the run's: `WARNING`, `INFO` or `DEBUG` (`DEBUG` adds the SQL of every query). The server log receives the same lines.

---

## Who can use Nomaflow \{#permissions\}

The Jobs pages and their API (`/admin/jobs/…`) are reserved to **superusers**. Notifications about jobs reach other users through notification rules — see [Notifications](./notifications.md).

---

## Backup \{#backup\}

`./liberty backup` (Docker) or `liberty-ops backup` (Python) saves the configuration — `jobs.toml` included — and the database that holds the history. See [Operations](../installation/operations.md#backup).

---

## Health \{#health\}

The server's `/ready` answers when the framework database — which holds the history — is reachable. The Jobs page shows the last state of each job; a notification rule on `failure` and `missed` is the simplest monitoring.

---

## Common tasks \{#tasks\}

| Task | How |
|---|---|
| Pause one job | Its **enabled** switch on the Jobs page. |
| Move a job to another server | Carry it in a package — see [Packages](../framework/build/packages.md). The connectors and queries it uses must exist there. |
| Investigate a job without stopping the others | Switch it off, run it by hand at `DEBUG`. |
