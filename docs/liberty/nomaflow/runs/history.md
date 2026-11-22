---
title: Run history
description: "Where Nomaflow runs are recorded and how to read them: the Job Runs page (search, filters, state counts, runs by day, live progress), the run states, the Run detail page (summary, per-fire overrides, steps, uploaded file, log with Follow and Download), and how long the history is kept."
keywords: [Nomaflow, run history, run detail, run states, log, MISSED, CANCELED, retention, Liberty Next]
---

# Run history

Every run of a job — scheduled, manual, called by another job, or missed — is recorded with its steps and its log.

---

## At a glance

<svg viewBox="0 0 1320 438" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfrn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfrn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfrn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfrn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="398" rx="14" fill="url(#nfrn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">∿</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job Runs</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Every run, newest first</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="290" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="101.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Search a job, a user, an error…</text>
  <rect x="540" y="86" width="150" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="101.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">All jobs</text>
  <text x="678" y="102" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="700" y="86" width="130" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="710" y="101.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Last 7 days</text>
  <text x="818" y="102" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="1004" y="86" width="76" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="101.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload</text>
  <rect x="942" y="89" width="38" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="961.0" y="101.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">live</text>
  <rect x="240" y="120" width="58" height="24" rx="12" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269" y="136" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">All 214</text>
  <rect x="306" y="120" width="79" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="314" y="124" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="338.0" y="135.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="375" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="393" y="120" width="74" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="401" y="124" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="422.5" y="135.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="457" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="475" y="120" width="99" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="483" y="124" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="512.0" y="135.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="564" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">205</text>
  <rect x="582" y="120" width="74" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="590" y="124" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="611.5" y="135.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">MISSED</text>
  <text x="646" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="162" width="840" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="179" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Today</text>
  <text x="1068" y="179" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3 runs</text>
  <rect x="240" y="188" width="840" height="42" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="195" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="276.0" y="206.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="352" y="207" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">10:42</text>
  <text x="420" y="207" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-collect</text>
  <rect x="489.38" y="195" width="54" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="496.38" y="206.5" fill="#4a9eff" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">apps_id 2</text>
  <text x="740" y="207" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⚇ jdoe</text>
  <text x="900" y="207" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">1 min 12 s</text>
  <text x="1068" y="207" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="900" y="214" width="60" height="4" rx="2" fill="#1f2937"/>
  <rect x="900" y="214" width="24.0" height="4" rx="2" fill="#4a9eff"/>
  <rect x="240" y="230" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="237" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="281.0" y="248.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="352" y="249" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">10:15</text>
  <text x="420" y="249" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-collect</text>
  <rect x="489.38" y="237" width="54" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="496.38" y="248.5" fill="#4a9eff" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">apps_id 1</text>
  <text x="740" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⚇ jdoe</text>
  <text x="900" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">4 min 2 s</text>
  <text x="1068" y="249" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">48 210</text>
  <rect x="240" y="260" width="840" height="42" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="267" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="273.5" y="278.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="352" y="279" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="420" y="279" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="740" y="279" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⏱ Schedule</text>
  <text x="900" y="279" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="1068" y="279" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <text x="420" y="294" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">1 step(s) failed — copy-accounts: connection refused</text>
  <rect x="240" y="312" width="840" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="329" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Yesterday</text>
  <text x="1068" y="329" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2 runs</text>
  <rect x="240" y="338" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="345" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="281.0" y="356.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="352" y="357" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="420" y="357" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">sales-monthly-load</text>
  <rect x="528.44" y="345" width="76" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="535.44" y="356.5" fill="#4a9eff" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">period 2026-10</text>
  <text x="740" y="357" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⚇ asmith</text>
  <text x="900" y="357" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">6 s</text>
  <text x="1068" y="357" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3 295</text>
  <rect x="240" y="368" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="375" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="273.5" y="386.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">MISSED</text>
  <text x="352" y="387" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="420" y="387" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="740" y="387" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⏱ Schedule</text>
  <text x="900" y="387" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="1068" y="387" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search and filters</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">job, period — kept</text>
  <line x1="200" y1="97.0" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State chips</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their counts; a click filters</text>
  <line x1="200" y1="157.0" x2="240" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runs by day</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens the run</text>
  <line x1="200" y1="257.0" x2="250" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Error under a failed run</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the start of the message</text>
  <line x1="200" y1="347.0" x2="420" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">live</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refreshed while a run goes</text>
  <line x1="1120" y1="93.0" x2="974" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parameters of the run</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">here the application</text>
  <line x1="1120" y1="187.0" x2="521.38" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Duration and progress</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">steps done / total</text>
  <line x1="1120" y1="267.0" x2="960" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who or what started it</text>
  <text x="1130" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a user, the schedule, a job</text>
  <line x1="1120" y1="357.0" x2="780" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
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

The page refreshes itself every two seconds while the run is in progress (*live*). **Back**, in its toolbar, returns to the page the run was opened from — the jobs list, the runs list or a parent run; opened from a link, it goes to the jobs list.

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
