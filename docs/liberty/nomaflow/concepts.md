---
title: Concepts
description: "The Nomaflow vocabulary: job, step, schedule, preset, trigger, run, parameters, retry policy, log level, alerts — what each one is and where it is set."
keywords: [Nomaflow, concepts, job, step, schedule, preset, trigger, run, parameters, op_kwargs, retry, log level, Liberty Next]
---

# Concepts

---

## At a glance

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="260" rx="14" fill="url(#dgn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="50" width="160" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="72.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Schedule</text>
  <text x="320.0" y="87.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · preset</text>
  <rect x="240" y="120" width="160" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="142.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Manual</text>
  <text x="320.0" y="157.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now · parameters</text>
  <rect x="240" y="190" width="160" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="212.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">call_job</text>
  <text x="320.0" y="227.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">from another job</text>
  <rect x="460" y="100" width="170" height="90" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="545.0" y="142.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Job</text>
  <text x="545.0" y="157.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">steps, retries, alerts</text>
  <line x1="400" y1="75" x2="460" y2="145" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="400" y1="145" x2="460" y2="145" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="400" y1="215" x2="460" y2="145" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <rect x="690" y="60" width="260" height="56" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="820.0" y="85.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <text x="820.0" y="100.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">QUEUED → RUNNING → SUCCEEDED / FAILED</text>
  <rect x="690" y="140" width="260" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="820.0" y="165.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Step runs</text>
  <text x="820.0" y="180.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">state, attempt, rows, log</text>
  <rect x="690" y="220" width="260" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="820.0" y="242.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="820.0" y="257.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">failure · succeeded · missed</text>
  <line x1="630" y1="130" x2="690" y2="88" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="820" y1="116" x2="820" y2="140" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="820" y1="196" x2="820" y2="220" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three triggers</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">same run record</text>
  <line x1="210" y1="277.0" x2="320" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgn-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run history</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept in the database</text>
  <line x1="1000" y1="77.0" x2="950" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgn-arrow)"/>
</svg>

---

## Job \{#job\}

A **job** is an entry of `jobs.toml`: an **id** (letters, digits, `-`, `_`; fixed once created), a description, tags, a schedule and timezone, an enabled switch, shared parameters, presets, a retry policy, alerts, a log level, a timeout — and an ordered list of steps. It is edited on the Jobs pages ([Create a job](./jobs/create.md)).

## Step \{#step\}

A **step** is one unit of work, of one of seven types: `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job` ([Steps](./steps.md)). Steps run in order; a failed step stops the job, and the following ones are recorded as skipped.

## Schedule \{#schedule\}

A five-field **cron** evaluated in the job's **timezone**. The days of the week count from 0 = Monday: write them as names (`mon-fri`). No schedule means the job runs only on demand ([Schedules](./jobs/schedules.md)).

## Preset \{#preset\}

A saved set of run values — shared parameters, step arguments, steps switched off, log level — created from **Run with parameters**. A preset can carry its own schedule: one job, several schedules with different inputs.

## Trigger \{#trigger\}

What started a run: `scheduled` (the job's or a preset's schedule) or `manual` (a user, recorded by name). A job started by a `call_job` step records `call_job:<job>@<run>` as its starter.

## Run \{#run\}

One execution of a job, with an id, its trigger, its start and end, the rows affected, its steps and its log. States: `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELED`, and `MISSED` for a scheduled time that did not run ([Run history](./runs/history.md)).

## Parameters \{#parameters\}

| Level | Where | Applies to |
|---|---|---|
| Shared params | The job | Every `python` step's arguments. |
| Step arguments (`op_kwargs`) | The step | That step — they win over shared params. |
| Run with parameters | One run | That run only; `jobs.toml` is not changed. |

`file_load` reads the run parameters as `${params.x}` in its path and constants; `sql_query` takes its own `params`.

## Retry policy \{#retry\}

`attempts` (tries in all, 1 = no retry), `backoff` (`fixed` or `exponential`), `base_seconds`. Applies to each step.

## Log level \{#log-level\}

`WARNING`, `INFO` (default) or `DEBUG` (adds the SQL of every query). The job's level applies to scheduled runs; a manual run picks its own.

## Alerts \{#alerts\}

A job can notify its **recipients** when a run fails, without any rule. Anything else — success, cancel, missed schedule, long run, a set of jobs — goes through notification rules ([Notifications](./notifications.md)).

---

## An example \{#example\}

The job `sales-load` has three steps: `file_load` (load the month's file), `sql_query` (refresh the aggregates), `http` (call a downstream service). Its schedule is `0 2 * * *` in `Europe/Paris`; a preset *month-end* runs it on `0 6 1 * *` with `period` set to the previous month. Each night a run is recorded; when the server was down at 02:00, a `MISSED` run is recorded and the `ops` role receives an e-mail from the rule on `missed`.
