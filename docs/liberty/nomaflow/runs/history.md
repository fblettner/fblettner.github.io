---
title: Run history
description: "Where Nomaflow runs are recorded and how to read them: the Job Runs page (search, filters, state counts, runs by day, live progress), the run states, the Run detail page (summary, per-fire overrides, steps, uploaded file, log with Follow and Download), and how long the history is kept."
keywords: [Nomaflow, run history, run detail, run states, log, MISSED, CANCELED, retention, Liberty Next]
---

# Run history

Every run of a job — scheduled, manual, called by another job, or missed — is recorded with its steps and its log.

---

## At a glance

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="362" rx="14" fill="url(#nfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job Runs</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Every run, newest first</text>
  <rect x="240" y="72" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="86.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search a job, a user, an error…</text>
  <rect x="500" y="72" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="86.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">All jobs ▾</text>
  <rect x="638" y="72" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="648" y="86.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Last 7 days ▾</text>
  <rect x="910" y="75" width="35" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="927.5" y="86.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">live</text>
  <rect x="240" y="104" width="49" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="264.5" y="116.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">All 214</text>
  <rect x="295" y="104" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="324.0" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING 1</text>
  <rect x="359" y="104" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="385.5" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED 6</text>
  <rect x="418" y="104" width="76" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="456.0" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED 205</text>
  <rect x="500" y="104" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="526.5" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">MISSED 2</text>
  <text x="240" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Today · 3 runs</text>
  <rect x="240" y="156" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="163" width="47" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="273.5" y="174.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="340" y="175" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:42</text>
  <text x="385" y="175" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <rect x="550" y="163" width="55" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="577.5" y="174.2" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">apps_id 2</text>
  <text x="650" y="175" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">👤 j.martin</text>
  <text x="780" y="175" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 min 12 s</text>
  <rect x="780" y="179" width="70" height="3" rx="1.5" fill="#1e293b"/><rect x="780" y="179" width="42" height="3" rx="1.5" fill="#4a9eff"/>
  <text x="940" y="175" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="190" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="197" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="277.5" y="208.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="340" y="209" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:15</text>
  <text x="385" y="209" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <rect x="550" y="197" width="55" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="577.5" y="208.2" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">apps_id 1</text>
  <text x="650" y="209" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">👤 j.martin</text>
  <text x="780" y="209" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4 min 2 s</text>
  <text x="940" y="209" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">48 210</text>
  <rect x="240" y="224" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="231" width="43" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="271.5" y="242.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="340" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="385" y="243" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="650" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">⏱ Schedule</text>
  <text x="780" y="243" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="940" y="243" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="256" fill="#f87171" fontSize="8" fontFamily="system-ui, sans-serif">ORA-12170: TNS connect timeout</text>
  <text x="240" y="286" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Yesterday · 1 run</text>
  <rect x="240" y="296" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="303" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="277.5" y="314.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="340" y="315" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="385" y="315" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">crm-daily-pipeline</text>
  <text x="650" y="315" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">⏱ Schedule</text>
  <text x="780" y="315" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6 s</text>
  <text x="940" y="315" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search and filters</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">job, period — kept</text>
  <line x1="210" y1="67.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="10" y="108" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State chips</text>
  <text x="20" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their counts</text>
  <line x1="210" y1="125.0" x2="240" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runs by day</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click a run to open it</text>
  <line x1="210" y1="217.0" x2="250" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refreshed while a run goes</text>
  <line x1="1000" y1="77.0" x2="950" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parameters</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application of the run</text>
  <line x1="1000" y1="167.0" x2="600" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Progress</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">steps done / total</text>
  <line x1="1000" y1="247.0" x2="850" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
</svg>

---

## The Job Runs page \{#where\}

**Operations → Job Runs**, in the Nomaflow menu, lists every run, newest first.

| Element | Use |
|---|---|
| **Search** | A job, a user, an error message. |
| **All jobs** | One job only. |
| Period | *Last 24 hours*, *Last 7 days* (the default), *Last 30 days*, *All time*. |
| State chips | **All**, then each state present with its count — `RUNNING`, `QUEUED`, `FAILED`, `SUCCEEDED`, `CANCELED`, `MISSED`. A click keeps that state only; a second click clears it. |

The filters are kept in the browser. The runs are grouped by day — *Today*, *Yesterday*, then the date — and each line shows:

- the state and the start time;
- the job and the parameters of the run: for a job run per application, the application it ran for;
- what started it: the schedule, a user, or the job that called it;
- the duration — counting while the run goes, with a bar of the steps done —, the rows affected, and under a failed run its error.

While a run is going, the page refreshes itself (*live*). A click on a line opens the run's detail; **Show more** loads the older runs. The detail of a run is also reached from the last-run state on the [Jobs page](../jobs/catalog.md#card) and from the link of a notification.

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
| **Steps** | One row per step: #, name, Type, Attempt, State, Error. A `file_load` step also shows *N read · N inserted · N rejected*, the file uploaded for this run — a click downloads it again — and, if needed, **Rejected rows (csv)**. |
| **Log** | The lines written during the run, at the run's log level. **Follow** keeps the newest lines in view (**Pause** stops it); **Download** saves the whole log. |

The log keeps the last 5,000 lines of a run.

---

## How long runs are kept \{#retention\}

The **Run history retention** panel of the Jobs page deletes old runs with their steps and logs: by default runs older than 30 days, keeping at most 100 runs per job, checked every 60 minutes. See [Administration](../administration.md#retention).
