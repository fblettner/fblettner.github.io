---
title: Run history
description: "Where Nomaflow runs are recorded and how to read one: the run states, the Run detail page (summary, per-fire overrides, steps, log with Follow and Download), the Job Runs list, and how long the history is kept."
keywords: [Nomaflow, run history, run detail, run states, log, MISSED, CANCELED, retention, Liberty Next]
---

# Run history

Every run of a job — scheduled, manual, called by another job, or missed — is recorded with its steps and its log.

---

## At a glance

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rhi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rhi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rhi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rhi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="340" rx="14" fill="url(#rhi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Run detail · crm-stalled-deals</text>
  <rect x="870" y="32" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.5" y="44.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Trigger</text>
  <text x="240" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">scheduled</text>
  <text x="425" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Started</text>
  <text x="425" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">27/10 08:00:02</text>
  <text x="610" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Finished</text>
  <text x="610" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">27/10 08:00:05</text>
  <text x="795" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rows affected</text>
  <text x="795" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="120" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">#</text>
  <text x="290" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEP</text>
  <text x="490" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="610" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTEMPT</text>
  <text x="700" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <text x="830" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ERROR</text>
  <rect x="240" y="152" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="290" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">flag-stalled</text>
  <text x="490" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sql_query</text>
  <text x="610" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="700" y="157.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="730.0" y="168.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="830" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="182" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="290" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">notify</text>
  <text x="490" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">python</text>
  <text x="610" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="700" y="187.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="730.0" y="198.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="830" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Log</text>
  <rect x="810" y="210" width="70" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="845.0" y="224.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Follow</text>
  <rect x="888" y="210" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="928.0" y="224.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Download</text>
  <rect x="240" y="238" width="720" height="100" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="260" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">08:00:02 INFO  nomaflow  run started (scheduled)</text>
  <text x="252" y="282" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">08:00:03 INFO  sql_query flag_stalled_deals → 2 row(s)</text>
  <text x="252" y="304" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">08:00:05 INFO  nomaflow  run SUCCEEDED in 3 s</text>
  <rect x="10" y="84" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Summary</text>
  <text x="20" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">trigger, times, rows</text>
  <line x1="210" y1="101.0" x2="240" y2="95" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">state and error per step</text>
  <line x1="210" y1="177.0" x2="240" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
  <rect x="10" y="270" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Log</text>
  <text x="20" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">follow live, download</text>
  <line x1="210" y1="287.0" x2="240" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run state</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">QUEUED · RUNNING · SUCCEEDED…</text>
  <line x1="1000" y1="47.0" x2="960" y2="41" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
</svg>

---

## Where to find runs \{#where\}

| From | Opens |
|---|---|
| *last* on a job card | The detail of the job's last run. |
| The **Job Runs** list (the Nomaflow menu; **Job Runs** at the top of a run detail) | The latest runs of every job. |
| A notification about a run | Its detail, through the notification's link. |

---

## Run states \{#states\}

| State | Meaning |
|---|---|
| `QUEUED` | Accepted, waiting to start. |
| `RUNNING` | In progress. |
| `SUCCEEDED` | Every step succeeded or was skipped on purpose. |
| `FAILED` | A step failed after its retries. The following steps are recorded `CANCELED` with *skipped: earlier step failed*. |
| `CANCELED` | Cancelled by an operator or by a timeout. |
| `MISSED` | A scheduled time at which the job did not run — see [Missed schedules](../jobs/schedules.md#missed). |

A run interrupted by a server restart is closed as failed with *abandoned: process restart during run* when the server starts again.

---

## The Run detail page \{#detail\}

The page refreshes itself every two seconds while the run is in progress (*live*).

| Part | Content |
|---|---|
| **Summary** | Job, Trigger (`scheduled` or `manual`, and who started it — a user name, or `call_job:<job>@<run>` for a job called by another), Started, Finished, Rows affected. |
| **Run with parameters** | Shown when the run was started with overrides: the values chosen for this run (shared parameters, step arguments, skipped steps, log level). |
| **Steps** | One row per step: #, name, Type, Attempt, State, Error. A `file_load` step also shows *N read · N inserted · N rejected* and, if needed, **Rejected rows (csv)**. |
| **Log** | The lines written during the run, at the run's log level. **Follow** keeps the newest lines in view (**Pause** stops it); **Download** saves the whole log. |

The log keeps the last 5,000 lines of a run.

---

## How long runs are kept \{#retention\}

The **Run history retention** panel of the Jobs page deletes old runs with their steps and logs: by default runs older than 30 days, keeping at most 100 runs per job, checked every 60 minutes. See [Administration](../administration.md#retention).
