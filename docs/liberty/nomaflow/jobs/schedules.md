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

**Operations → Schedule**, in the Nomaflow menu, shows what runs when, day by day.

<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#nfs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Schedule</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">What runs when, day by day</text>
  <text x="240" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="262" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">in the next 24 h</text>
  <text x="400" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="422" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">active schedules</text>
  <text x="560" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="582" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">switched off</text>
  <text x="720" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <text x="742" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">by hand only</text>
  <text x="240" y="120" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UPCOMING (9)</text>
  <text x="240" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Today</text>
  <rect x="240" y="154" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="175" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">14:00</text>
  <text x="310" y="175" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-hourly-refresh</text>
  <text x="580" y="170" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every hour at :00</text>
  <text x="580" y="182" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 ∗ ∗ ∗ ∗</text>
  <rect x="870" y="163" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="174.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="240" y="212" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tomorrow</text>
  <rect x="240" y="220" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="241" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="310" y="241" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="580" y="236" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every day at 02:00</text>
  <text x="580" y="248" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="870" y="229" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="240.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="240" y="258" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="279" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">06:00</text>
  <text x="310" y="279" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <rect x="465" y="267" width="85" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="507.5" y="278.2" fill="#c084fc" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Security and SoD</text>
  <text x="580" y="274" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every day at 06:00</text>
  <text x="580" y="286" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 6 ∗ ∗ ∗</text>
  <rect x="870" y="267" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="278.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="240" y="296" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="317" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="310" y="317" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-daily-pipeline</text>
  <text x="580" y="312" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Monday to Friday at 08:00</text>
  <text x="580" y="324" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <rect x="870" y="305" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="316.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="240" y="356" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHEDULED BUT SWITCHED OFF (2)</text>
  <text x="240" y="378" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">▸ RUN BY HAND ONLY (14)</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">At a glance</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next 24 h, active, off, manual</text>
  <line x1="210" y1="91.0" x2="240" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Day by day</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each schedule at its next run</text>
  <line x1="210" y1="187.0" x2="240" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In words</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the cron below</text>
  <line x1="1000" y1="197.0" x2="690" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="267" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="282" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preset schedules</text>
  <text x="20" y="295" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the preset's name</text>
  <line x1="210" y1="284.0" x2="510" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="380" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">By hand only</text>
  <text x="20" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folded away</text>
  <line x1="210" y1="397.0" x2="240" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
</svg>

| Part | Content |
|---|---|
| Counters | The runs due in the next 24 hours, the active schedules, the schedules switched off, the jobs run by hand only. |
| **Upcoming** | Each active schedule at its next run — the job's own, and one per preset with a schedule (the preset's name next to the job) —, grouped by day: *Today*, *Tomorrow*, then the date. Each line shows the time, the job, the schedule in words (*every day at 03:00*, *every Monday at 07:00*) with the cron under it, when it comes, and the state of the last run. |
| **Scheduled but switched off** | Schedules that are set but disabled. |
| **Run by hand only** | The jobs without any schedule, folded; a click on one opens its editor. |

Schedules the page cannot put into words — lists of hours, several months — show their cron only.

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
| The job's **enabled** / **disabled** pill on the Jobs page, or **Pause** on a dashboard's jobs card | The job's own schedule stops at once, without a reload. **Run** still works; preset schedules keep running unless switched off. |
| **Manual** in the Schedule field | The job's own schedule is removed. |
| **Schedule enabled** off on a preset | That preset's schedule stops. |

---

## Tips \{#tips\}

- Spread heavy jobs over the night (02:00, 02:30, 03:00) rather than starting them all at midnight.
- Prefer `15 * * * *` to `0 * * * *` for hourly jobs: many other systems run on the hour.
- Use a timezone name, never a fixed offset, so that daylight saving time is followed.
- Check the **Next runs** preview after every change: it is the quickest way to catch a wrong day.
