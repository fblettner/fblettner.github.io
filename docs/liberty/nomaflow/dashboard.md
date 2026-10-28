---
title: Overview dashboard
description: "The Nomaflow Overview dashboard: the runs by outcome over the period, the failures and missed schedules, what is in flight, the average duration, the scheduled jobs with Run now / Pause / Resume, the runs per day, what needs attention, the runs and durations per job, the latest runs and the last success per job — last 7 days by default."
keywords: [Nomaflow, overview, dashboard, runs, failures, missed schedules, in flight, duration, attention, monitoring]
---

# Overview dashboard

**Overview**, the first entry of the Nomaflow menu, gives the operators the state of the scheduler at a glance: how the runs ended, what failed or was missed, what is running now, which jobs are the busiest or the slowest, and the latest runs.

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#nfo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The runs of the day, what needs attention, the busiest and slowest jobs, the latest runs.</text>
  <text x="240" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="240" y="94" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="108.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 7 days ▾</text>
  <rect x="240.0" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Runs</text>
  <text x="252.0" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">By outcome</text>
  <text x="252.0" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1,204</text>
  <text x="252.0" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">1,180 succeeded · 21 failed · 3 canceled</text>
  <rect x="422.5" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Failures</text>
  <text x="434.5" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Runs that ended in error</text>
  <text x="434.5" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">21</text>
  <text x="434.5" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">4 jobs concerned · 2 missed schedules</text>
  <rect x="605.0" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">In flight</text>
  <text x="617.0" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Right now</text>
  <text x="617.0" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="617.0" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">1 running · 1 queued</text>
  <rect x="787.5" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Average duration</text>
  <text x="799.5" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Completed runs</text>
  <text x="799.5" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">42 s</text>
  <text x="799.5" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">longest 1,812 s</text>
  <rect x="240" y="230" width="400" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="248" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Runs per day</text>
  <line x1="260" y1="402" x2="620" y2="402" stroke="#334155" strokeWidth="1"/>
  <rect x="271" y="272" width="28" height="130" fill="#4ade80" opacity="0.85"/>
  <rect x="271" y="270" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="271" y="269" width="28" height="1" fill="#fb923c" opacity="0.85"/>
  <rect x="323" y="273" width="28" height="129" fill="#4ade80" opacity="0.85"/>
  <rect x="323" y="270" width="28" height="4" fill="#f87171" opacity="0.85"/>
  <rect x="323" y="270" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="374" y="270" width="28" height="132" fill="#4ade80" opacity="0.85"/>
  <rect x="374" y="269" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="374" y="268" width="28" height="1" fill="#fb923c" opacity="0.85"/>
  <rect x="426" y="271" width="28" height="131" fill="#4ade80" opacity="0.85"/>
  <rect x="426" y="268" width="28" height="3" fill="#f87171" opacity="0.85"/>
  <rect x="426" y="268" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="477" y="273" width="28" height="129" fill="#4ade80" opacity="0.85"/>
  <rect x="477" y="271" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="477" y="270" width="28" height="1" fill="#fb923c" opacity="0.85"/>
  <rect x="528" y="275" width="28" height="127" fill="#4ade80" opacity="0.85"/>
  <rect x="528" y="273" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="528" y="273" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="580" y="276" width="28" height="126" fill="#4ade80" opacity="0.85"/>
  <rect x="580" y="275" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="580" y="275" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="650" y="230" width="310" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="248" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">What needs attention</text>
  <text x="662" y="261" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Failures, missed schedules, long runs</text>
  <circle cx="666" cy="283" r="3.5" fill="#f87171"/>
  <text x="678" y="285" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm-daily-sync</text>
  <text x="678" y="297" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">ORA-12170: TNS connect timeout</text>
  <rect x="754.56" y="276" width="85" height="14" rx="7.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="797.06" y="286.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28 06:00</text>
  <text x="948" y="285" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12 runs</text>
  <circle cx="666" cy="321" r="3.5" fill="#fb923c"/>
  <text x="678" y="323" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="678" y="335" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">missed schedule</text>
  <rect x="784.8" y="314" width="85" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="827.3" y="324.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-01 07:00</text>
  <text x="948" y="323" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">2 runs</text>
  <circle cx="666" cy="359" r="3.5" fill="#fb923c"/>
  <text x="678" y="361" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">ldap-import</text>
  <text x="678" y="373" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">running for more than an hour</text>
  <text x="948" y="361" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last 7 days by default</text>
  <line x1="210" y1="107.0" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="10" y="168" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four figures</text>
  <text x="20" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">In flight stays live</text>
  <line x1="210" y1="185.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runs per day</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by outcome</text>
  <line x1="210" y1="347.0" x2="260" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Attention</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per job, the last error</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
</svg>

---

## The period \{#period\}

The page opens on **Last 7 days**; the period control in the bar offers the other presets and a free range. Every widget follows it, except **In flight**, which always shows the present. **Excel** and **PDF** export the page with its period — see [Dashboards → Export](../framework/dashboards.md#export).

---

## The widgets \{#widgets\}

| Widget | Shows |
|---|---|
| **Runs** — by outcome | The runs started over the period: succeeded · failed · canceled. |
| **Failures** — runs that ended in error | The failed runs, the number of jobs concerned and the missed schedules. |
| **In flight** — right now | Running · queued. |
| **Average duration** — completed runs | The average duration, and the longest. |
| **Scheduled jobs** | What runs next: each scheduled job with its next run or *Paused*, its schedule in words and its last state, and the buttons **Run now**, **Pause the schedule** and **Resume the schedule**. Superusers only. |
| **Runs per day** | One bar per day, by outcome. |
| **What needs attention** | Per job: the failures with their last error, the missed schedules, the runs going for more than an hour — red for a failure, orange for the rest, with the date of the last occurrence. |
| **Runs per job** | The share of the runs of each job over the period. |
| **Average duration per job** | In seconds, the slowest first. |
| **Recent runs** | The latest runs, with their state; the error, or the trigger, under each. |
| **Last success per job** | Every job with its last successful run, the failures since and its last state: the failing jobs first, a job without a success for a week in orange; the figure is the days since the last success. |

The detail of a run is in **Operations → Job Runs** — see [Run history](./runs/history.md). The same jobs card can be added to any dashboard — see [Dashboards → Jobs](../framework/dashboards.md#jobs).
