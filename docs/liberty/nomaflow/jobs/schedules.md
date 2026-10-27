---
title: Schedules
description: "When Nomaflow jobs run: the five-field cron syntax and its day-of-week numbering, timezones, the preview of the next runs, the Schedule view, schedulable presets, and missed schedules recorded as MISSED runs."
keywords: [Nomaflow, cron, schedule, timezone, Schedule view, presets, missed schedules, MISSED, grace, Liberty Next]
---

# Schedules

A job runs on its own **schedule** — a cron expression and a timezone — and on the schedules of its **presets**. A job without any schedule runs only when someone clicks **Run**.

---

## Cron in Nomaflow \{#cron\}

A schedule has **five fields**:

```
┌──── minute (0-59)
│ ┌── hour (0-23)
│ │ ┌── day of month (1-31)
│ │ │ ┌── month (1-12)
│ │ │ │ ┌── day of week (mon-sun)
0 2 * * *
```

| Operator | Meaning | Example |
|---|---|---|
| `*` | every value | `* * * * *` — every minute |
| `,` | a list | `0 6,12,18 * * *` — at 06:00, 12:00 and 18:00 |
| `-` | a range | `0 9 * * mon-fri` — weekdays at 09:00 |
| `/` | a step | `*/10 * * * *` — every 10 minutes |

:::warning[Write the days of the week as names]
The scheduler numbers the days of the week from **0 = Monday** to **6 = Sunday** — not like Unix cron, where 0 is Sunday. `0 9 * * 1` runs on **Tuesday**. Write `mon`, `tue`… `sun` (`mon-fri`, `sat,sun`): the names leave no doubt, and the preview under the field confirms the days.
:::

When both the day of the month and the day of the week are set, **both** must match: `0 9 15 * mon` runs on a 15th that falls on a Monday.

| Need | Cron |
|---|---|
| Every 5 minutes | `*/5 * * * *` |
| Every hour at :15 | `15 * * * *` |
| Every day at 02:00 | `0 2 * * *` |
| Weekdays at 09:00 | `0 9 * * mon-fri` |
| Every Monday at 06:00 | `0 6 * * mon` |
| The 1st of every month at 07:00 | `0 7 1 * *` |
| Every quarter (1st of Jan, Apr, Jul, Oct) at 03:00 | `0 3 1 1,4,7,10 *` |

---

## In the job editor \{#editor\}

The **Schedule (cron)** field of the job editor offers ready-made choices — **Manual**, **Hourly**, **Daily**, **Weekly**, **Monthly** — and a free cron. Under the field, **Next runs** lists the next five runs in the job's timezone; it is recomputed shortly after each change, and an invalid expression is reported there.

**Timezone** is an IANA name (`Europe/Paris`, `America/New_York`). The schedule is evaluated in that timezone, daylight saving time included: `0 2 * * *` in `Europe/Paris` runs at 02:00 Paris time all year round.

---

## The Schedule view \{#schedule-view\}

**Schedule** in the Jobs toolbar lists every schedule, by next run:

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="370" rx="14" fill="url(#sch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Schedule</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Every job, by when it next runs</text>
  <text x="240" y="92" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPCOMING (4)</text>
  <rect x="240" y="100" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB</text>
  <text x="500" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEDULE</text>
  <text x="700" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NEXT RUN</text>
  <text x="850" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <rect x="240" y="132" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="148.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">sales-load</text>
  <text x="500" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <text x="700" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">tomorrow 02:00</text>
  <rect x="850" y="137.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="880.0" y="148.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="240" y="162" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="178.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">sales-load · month-end</text>
  <text x="500" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <text x="700" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">01/11 06:00</text>
  <text x="850" y="178.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="192" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="208.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">nomajde-daily-sync</text>
  <text x="500" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">30 2 ∗ ∗ ∗</text>
  <text x="700" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">tomorrow 02:30</text>
  <rect x="850" y="197.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="873.0" y="208.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">MISSED</text>
  <rect x="240" y="222" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="238.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">config-versions-purge</text>
  <text x="500" y="238.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 3 ∗ ∗ ∗</text>
  <text x="700" y="238.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">tomorrow 03:00</text>
  <rect x="850" y="227.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="880.0" y="238.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="240" y="274" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MANUAL / DISABLED (2)</text>
  <rect x="240" y="282" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB</text>
  <text x="500" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEDULE</text>
  <text x="700" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NEXT RUN</text>
  <text x="850" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <rect x="240" y="314" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">nomasx1-init-db</text>
  <text x="500" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="700" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="850" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="344" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="360.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">reporting-refresh (disabled)</text>
  <text x="500" y="360.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 6 ∗ ∗ ∗</text>
  <text x="700" y="360.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="850" y="349.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="880.0" y="360.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="10" y="130" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One row per schedule</text>
  <text x="20" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the job's cron + each preset</text>
  <line x1="210" y1="147.0" x2="260" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Missed fire</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recorded as a MISSED run</text>
  <line x1="1000" y1="207.0" x2="920" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Not firing</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">manual, or disabled</text>
  <line x1="210" y1="317.0" x2="280" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
</svg>

| Group | Content |
|---|---|
| **Upcoming** | One row per active schedule — the job's own, and one per preset with a schedule (the preset's name is shown next to the job). Columns: Job, Schedule, Next run, Last run. |
| **Manual / disabled** | Jobs without a schedule, and schedules that are set but switched off — marked *(disabled)*. |

---

## Schedulable presets \{#schedulable-presets\}

A **preset** is a saved set of run parameters (parameters, step arguments, steps switched on or off, log level), created from the **Run with parameters** window with **Save as preset**. In the job editor, the **Presets & schedules** section gives each preset its own **Schedule (cron)** and **Timezone**, and a **Schedule enabled** checkbox.

The scheduler then runs the job on that schedule with the preset's parameters: one job, several schedules, different inputs — a nightly full load and an hourly incremental of the same ETL, for instance.

A preset's schedule is independent of the job's **Enabled** switch: an enabled preset runs even when the job's own schedule is off.

:::info[Cloning a job]
**Clone** creates a disabled copy without any schedule: the job's own cron and the presets' schedules are dropped, so the copy never fires alongside the original. Give it its schedules once it is ready.
:::

---

## Missed schedules \{#missed\}

A run can fail to happen: the server was stopped at that time, or the previous run of the same job was still in progress. Nomaflow checks for such gaps and records each one as a run in state **MISSED**, with the expected time, in the run history and as the job's last run. A rule on the `missed` event can warn someone — see [Notifications](../notifications.md).

The **Missed schedules** panel of the Jobs page (next to the retention panel) shows the policy and the last check, and **Check now** runs a check at once.

| Setting | Default | Meaning |
|---|---|---|
| **Check** | on | Switches the check on or off. |
| **Grace (min)** | 10 | A run started within this delay after the expected time — a scheduled one, or a manual one — counts for it. |
| **Check interval (min)** | 5 | How often the check runs. |
| **Look back (hours)** | 24 | How far back a check looks, at most. A job that never ran is checked from the scheduler's start only. |

The policy is saved in `jobs.toml` under `[meta.missed]`. A missed time is recorded once: a restart does not report it again.

---

## Pausing a schedule \{#pause\}

| Option | Effect |
|---|---|
| The job's **Enabled** switch on the Jobs page | The job's own schedule stops. **Run** still works; preset schedules keep running unless switched off. |
| **Manual** in the Schedule field | The job's own schedule is removed. |
| **Schedule enabled** off on a preset | That preset's schedule stops. |

---

## Tips \{#tips\}

- Spread heavy jobs over the night (02:00, 02:30, 03:00) rather than starting them all at midnight.
- Prefer `15 * * * *` to `0 * * * *` for hourly jobs: many other systems run on the hour.
- Use a timezone name, never a fixed offset, so that daylight saving time is followed.
- Check the **Next runs** preview after every change: it is the quickest way to catch a wrong day.
