---
title: Overview dashboard
description: "The Nomaflow Overview dashboard: the runs by outcome over the period, the failures and missed schedules, what is in flight, the average duration, the scheduled jobs with Run now / Pause / Resume, the runs per day, what needs attention, the runs and durations per job, the latest runs and the last success per job — last 7 days by default."
keywords: [Nomaflow, overview, dashboard, runs, failures, missed schedules, in flight, duration, attention, monitoring]
---

# Overview dashboard

**Overview**, the first entry of the Nomaflow menu, gives the operators the state of the scheduler at a glance: how the runs ended, what failed or was missed, what is running now, which jobs are the busiest or the slowest, and the latest runs.

---

## At a glance

<svg viewBox="0 0 1320 614" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfdb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfdb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfdb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfdb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="574" rx="14" fill="url(#nfdb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▦</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The runs of the day, what needs attention, the busiest and slowest jobs, the latest runs.</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="84" width="840" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="102" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="254" y="106" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="120.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▦  Nov 16 – Nov 22, 2026  ⌄</text>
  <text x="1066" y="121" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Updated at 07:50</text>
  <rect x="940.7008" y="107" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.7008" y="121.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="888.7008" y="107" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="911.7008" y="121.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="830.7008" y="107" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.7008" y="121.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="240" y="144" width="202" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="162" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUNS</text>
  <text x="252" y="188" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1,204</text>
  <text x="252" y="212" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">1,180 succeeded · 21 failed · 3 canceled</text>
  <rect x="452" y="144" width="202" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464" y="162" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILURES</text>
  <text x="464" y="188" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">21</text>
  <text x="464" y="212" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">4 jobs concerned · 2 missed schedules</text>
  <rect x="664" y="144" width="202" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="676" y="162" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IN FLIGHT</text>
  <text x="676" y="188" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="676" y="212" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">1 running · 1 queued</text>
  <rect x="876" y="144" width="202" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="888" y="162" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AVERAGE DURATION</text>
  <text x="888" y="188" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">42 s</text>
  <text x="888" y="212" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">longest 1,812 s</text>
  <rect x="240" y="232" width="840" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="252" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduled jobs</text>
  <text x="254" y="266" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What runs next; run one now, pause or resume its schedule</text>
  <circle cx="260" cy="290" r="3.5" fill="#4ade80"/>
  <text x="272" y="288" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">crm-daily-sync</text>
  <rect x="354.48" y="278" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="383.48" y="289.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="272" y="302" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">next in 1h · every day at 02:00</text>
  <rect x="1014" y="280" width="22" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1025.0" y="294" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="1042" y="280" width="22" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1053.0" y="294" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ⅱ</text>
  <circle cx="260" cy="323" r="3.5" fill="#64748b"/>
  <text x="272" y="321" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">sales-monthly-load</text>
  <rect x="375.76" y="311" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="397.26" y="322.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="272" y="335" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Paused · on day 1 of each month at 06:00</text>
  <rect x="1014" y="313" width="22" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1025.0" y="327" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="1042" y="313" width="22" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1053.0" y="327" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <circle cx="260" cy="356" r="3.5" fill="#4ade80"/>
  <text x="272" y="354" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">ldap-import</text>
  <text x="272" y="368" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">next in 9 min · every 15 minutes</text>
  <rect x="1014" y="346" width="22" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1025.0" y="360" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="1042" y="346" width="22" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1053.0" y="360" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ⅱ</text>
  <rect x="240" y="392" width="462.00000000000006" height="170" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="412" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Runs per day</text>
  <text x="254" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">By outcome</text>
  <rect x="270.9" y="454.9" width="38.6" height="83.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="270.9" y="453.5" width="38.6" height="1.5" fill="#f87171" fillOpacity="0.85"/>
  <rect x="270.9" y="453.0" width="38.6" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <text x="290.14285714285717" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">16</text>
  <rect x="331.1" y="455.9" width="38.6" height="82.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="331.1" y="454.0" width="38.6" height="2.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="331.1" y="454.0" width="38.6" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <text x="350.42857142857144" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">17</text>
  <rect x="391.4" y="454.0" width="38.6" height="84.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="391.4" y="453.0" width="38.6" height="1.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="391.4" y="452.5" width="38.6" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <text x="410.7142857142857" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">18</text>
  <rect x="451.7" y="454.4" width="38.6" height="83.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="451.7" y="452.0" width="38.6" height="2.4" fill="#f87171" fillOpacity="0.85"/>
  <rect x="451.7" y="452.0" width="38.6" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <text x="471.00000000000006" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">19</text>
  <rect x="512.0" y="455.4" width="38.6" height="82.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="512.0" y="454.0" width="38.6" height="1.5" fill="#f87171" fillOpacity="0.85"/>
  <rect x="512.0" y="453.5" width="38.6" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <text x="531.2857142857143" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">20</text>
  <rect x="572.3" y="456.9" width="38.6" height="81.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="572.3" y="455.9" width="38.6" height="1.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="572.3" y="455.9" width="38.6" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <text x="591.5714285714286" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">21</text>
  <rect x="632.6" y="457.9" width="38.6" height="80.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="632.6" y="456.9" width="38.6" height="1.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="632.6" y="456.9" width="38.6" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <text x="651.8571428571429" y="549" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">22</text>
  <rect x="712.0" y="392" width="367.99999999999994" height="170" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="726.0" y="412" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">What needs attention</text>
  <text x="726.0" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Failures of the week with their last error, missed…</text>
  <circle cx="730.0" cy="452" r="3.5" fill="#f87171"/>
  <text x="740.0" y="450" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm-daily-sync</text>
  <rect x="816.56" y="439" width="91.36" height="14" rx="3" fill="#f87171" fillOpacity="0.15"/>
  <text x="822.56" y="449.5" fill="#f87171" fontSize="8" fontFamily="ui-monospace, monospace">2026-11-21 02:00</text>
  <text x="740.0" y="464" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Last error: copy-accounts: connection refused</text>
  <text x="1068.0" y="456" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3 runs</text>
  <circle cx="730.0" cy="490" r="3.5" fill="#fb923c"/>
  <text x="740.0" y="488" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">sales-monthly-load</text>
  <rect x="836.72" y="477" width="91.36" height="14" rx="3" fill="#fb923c" fillOpacity="0.15"/>
  <text x="842.72" y="487.5" fill="#fb923c" fontSize="8" fontFamily="ui-monospace, monospace">2026-11-01 06:00</text>
  <text x="740.0" y="502" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">missed schedule</text>
  <text x="1068.0" y="494" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1 runs</text>
  <circle cx="730.0" cy="528" r="3.5" fill="#fb923c"/>
  <text x="740.0" y="526" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">ldap-import</text>
  <rect x="801.44" y="515" width="91.36" height="14" rx="3" fill="#fb923c" fillOpacity="0.15"/>
  <text x="807.44" y="525.5" fill="#fb923c" fontSize="8" fontFamily="ui-monospace, monospace">2026-11-20 14:15</text>
  <text x="740.0" y="540" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">running for more than an hour</text>
  <text x="240" y="580" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Below: Runs per job · Average duration per job · Recent runs · Last success per job</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last 7 days by default</text>
  <line x1="200" y1="107.0" x2="254" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four figures</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">In flight is always now</text>
  <line x1="200" y1="187.0" x2="240" y2="183" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduled jobs</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next run or Paused, last state</text>
  <line x1="200" y1="297.0" x2="260" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runs per day</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by outcome</text>
  <line x1="200" y1="457.0" x2="260" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="1120" y="118" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF</text>
  <text x="1130" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the page with its period</text>
  <line x1="1120" y1="135.0" x2="920.7008" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now · Pause · Resume</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">superusers only</text>
  <line x1="1120" y1="277.0" x2="1064" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="1120" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What needs attention</text>
  <text x="1130" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per job, the last error</text>
  <line x1="1120" y1="457.0" x2="1076.0" y2="460" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
  <rect x="1120" y="566" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="581" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Further down</text>
  <text x="1130" y="594" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per job, the latest runs</text>
  <line x1="1120" y1="583.0" x2="1070" y2="576" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdb-arrow)"/>
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
