---
title: Schedules
description: "Cron syntax for Nomaflow, the timezone rule, the Schedule view that previews upcoming fires across every job, and the patterns most installs settle on."
keywords: [Nomaflow, cron, schedule, timezone, calendar, fire preview, recurrence, Liberty Framework]
---

# Schedules

A **schedule** is when a job auto-fires. The whole framework speaks **cron** — a five-field expression that's been the default scheduler vocabulary for forty years. This page walks through the syntax, the timezone rule, the live preview the editor renders, and the **Schedule view** that shows upcoming fires across every job.

For the broader mental model (job → schedule → run), see [Concepts](../concepts.md).

---

## Cron at a glance

A cron expression has **five required fields** plus an optional sixth for seconds:

```
┌──── minute (0-59)
│ ┌── hour (0-23)
│ │ ┌── day of month (1-31)
│ │ │ ┌── month (1-12)
│ │ │ │ ┌── day of week (0=Sunday, 6=Saturday)
│ │ │ │ │ ┌── second (optional, 0-59)
0 2 * * *
```

The most common patterns:

| Goal | Cron |
|---|---|
| Every minute (use for a smoke test, not steady state). | `* * * * *` |
| Every 5 minutes. | `*/5 * * * *` |
| Every hour, on the hour. | `0 * * * *` |
| Every hour at minute :15. | `15 * * * *` |
| Every day at 02:00. | `0 2 * * *` |
| Every day at 02:30. | `30 2 * * *` |
| Every weekday (Mon-Fri) at 09:00. | `0 9 * * 1-5` |
| Every Monday at 09:30. | `30 9 * * 1` |
| The 1st of every month at midnight. | `0 0 1 * *` |
| Every quarter (1st of Jan/Apr/Jul/Oct) at 03:00. | `0 3 1 1,4,7,10 *` |
| Twice a day (08:00 and 20:00). | `0 8,20 * * *` |

---

## The four operators

| Operator | Meaning | Example |
|---|---|---|
| **`*`** | "every value in the range". | `* * * * *` = every minute. |
| **`,`** | List specific values. | `0 6,12,18 * * *` = at 06:00, 12:00, 18:00. |
| **`-`** | Range. | `0 9 * * 1-5` = weekdays at 09:00. |
| **`/`** | Step. | `*/10 * * * *` = every 10 minutes; `0 */2 * * *` = every two hours on the hour. |

You can combine them: `5,15,25,35,45,55 9-17 * * 1-5` = every 10 minutes between 09:00 and 17:00, weekdays only. (Equivalent and tidier: `*/10 9-17 * * 1-5`.)

---

## Day-of-month vs day-of-week

If **both** day-of-month and day-of-week are constrained, the cron fires when **either** matches — *not* both. This matches the traditional Unix cron behaviour and is the only quirk worth memorising.

| Cron | When it fires |
|---|---|
| `0 9 15 * *` | The 15th of every month at 09:00. |
| `0 9 * * 1` | Every Monday at 09:00. |
| `0 9 15 * 1` | The 15th of every month **OR** any Monday — at 09:00. |

For "Monday the 15th only", you can't express it with cron alone — let the job fire on Mondays and skip in a first step:

```python
# python step: only proceed on the 15th
from datetime import date
def main(**kwargs):
    if date.today().day != 15:
        return {"skipped": "not the 15th"}
    # ... real work
```

---

## Timezones

The cron is evaluated in the **timezone you pick on the job**, not the framework's host timezone. This matters when the host runs on UTC but the business operates in Paris (or Sydney, or Mumbai).

| Setting | When the job fires |
|---|---|
| `0 2 * * *`, timezone `UTC` | 02:00 UTC every day — 03:00 / 04:00 Paris depending on DST. |
| `0 2 * * *`, timezone `Europe/Paris` | 02:00 Paris every day — 00:00 / 01:00 UTC depending on DST. |

**Daylight Saving Time** is handled correctly when an IANA name is used: the scheduler skips or duplicates the cron firing as the wall clock jumps. With a fixed offset (`Etc/GMT+1`) DST is ignored — the job fires at the same UTC moment year-round.

:::tip[Picking a timezone]
Use the IANA name for the operating region (`Europe/Paris`, `America/New_York`, `Asia/Tokyo`). Use `UTC` only for jobs where wall-clock time genuinely doesn't matter (an hourly cleanup, a smoke test).
:::

---

## The live preview

The Job editor renders the **next three fire times** under the cron input as you type. It re-renders on every keystroke, so a malformed expression shows immediately ("invalid cron").

| Cron | Preview |
|---|---|
| `0 2 * * *` (timezone Paris, today is Wed 17:00 Paris) | Thu 02:00 · Fri 02:00 · Sat 02:00 |
| `30 9 * * 1` | next Mon 09:30 · the following Mon 09:30 · etc. |
| `*/5 * * * *` | in 4 minutes · in 9 minutes · in 14 minutes |
| `0 25 * * *` | *(invalid — hour 25)* |

When the preview reads something different than you expected, you caught a bug **before** saving the job.

---

## The Schedule view

The **Jobs** page has a **📅 Schedule view** button in the toolbar. It opens a calendar of every upcoming fire across every enabled job — useful when you have ten cron jobs and want to spot collisions.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sv-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#sv-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Schedule</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Upcoming fires for the next 7 days across all enabled jobs.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MON 27</text>
  <rect x="60" y="118" width="180" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="68" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="60" y="144" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="68" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <rect x="60" y="170" width="180" height="22" rx="4" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="68" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">09:00 · activity-log-1</text>

  <text x="260" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TUE 28</text>
  <rect x="260" y="118" width="180" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="268" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="260" y="144" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="268" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <rect x="260" y="170" width="180" height="22" rx="4" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="268" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">09:00 · activity-log-1</text>

  <text x="460" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WED 29</text>
  <rect x="460" y="118" width="180" height="22" rx="4" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.40)"/>
  <text x="468" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="460" y="144" width="180" height="22" rx="4" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.40)"/>
  <text x="468" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:45 · nomasx1-security-1</text>
  <rect x="460" y="170" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="468" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <text x="468" y="218" fill="#f59e0b" fontSize="10" fontFamily="system-ui, sans-serif">⚠ two heavy jobs at 02:30/02:45 — collision risk</text>

  <text x="660" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THU 30</text>
  <rect x="660" y="118" width="180" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="668" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="660" y="144" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="668" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <rect x="660" y="170" width="180" height="22" rx="4" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="668" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">09:00 · activity-log-1</text>

  <rect x="40" y="252" width="920" height="72" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="276" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LEGEND</text>
  <rect x="58" y="288" width="12" height="12" rx="2" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="76" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">ETL</text>
  <rect x="120" y="288" width="12" height="12" rx="2" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="138" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Reporting</text>
  <rect x="206" y="288" width="12" height="12" rx="2" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="224" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Audit</text>
  <rect x="276" y="288" width="12" height="12" rx="2" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.40)"/>
  <text x="294" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Collision flagged</text>
</svg>

Each chip is a fire — click it to jump to the job's catalogue card. Chips are coloured by tag (the calendar uses the first tag the job carries). Hours where two heavy jobs would run at the same time are flagged with a warning — Nomaflow doesn't enforce serial execution, but the calendar helps you avoid overlap.

---

## Patterns most installs settle on

| Workload | Schedule | Why |
|---|---|---|
| **Nightly ETLs** | `0 2 * * *` to `0 4 * * *` | Off-peak. Stagger when you have several — e.g. ETL A at 02:00, ETL B at 02:30, ETL C at 03:00. |
| **Hourly syncs** | `15 * * * *` | Avoid `0 * * * *` — every other piece of software in the building fires on the hour. |
| **Weekly audits** | `0 6 * * 1` | Monday morning so the report's fresh when humans arrive. |
| **Monthly reports** | `0 7 1 * *` | Early on the 1st, before the morning rush. |
| **Continuous polling** | `*/5 * * * *` | 5 minutes is the floor for steady state — finer cadences hammer the framework. |
| **Smoke tests** | `* * * * *` | Only enable temporarily — leaves a lot of run rows in 24 hours. |

---

## Anti-patterns

| Don't | Because |
|---|---|
| Schedule every job at `0 0 * * *` (midnight). | Several heavy jobs starting at the same moment can saturate the framework. Stagger by 15-30 minutes. |
| Use `* * * * *` for steady state. | A run-per-minute fills the history fast and rarely matches a real business need. |
| Set a schedule when the job is operator-driven. | Leave it manual-only — the catalogue still shows it, ▶ Run still works, no surprise fires at 3 AM. |
| Mix day-of-month and day-of-week. | Cron's OR semantics will surprise you. Pick one. |
| Hard-code DST offsets. | Use the IANA timezone name; DST is handled. |

---

## Disabling a schedule temporarily

Two ways to pause a job's auto-fires without losing the config:

| Option | Effect |
|---|---|
| **Enable toggle off** on the catalogue card. | Schedule ignored. Manual ▶ Run still works. Reversible in one click. |
| **Empty the cron** in the editor. | Schedule removed entirely. Manual ▶ Run still works. The "manual-only" state is permanent until you re-add a schedule. |

For a maintenance window or a release freeze, the **enable toggle** is the right tool — minimal config churn, fully reversible.

---

## What's next

- [Create a job](./create.md) — the full Job editor (the schedule input lives in its ② Schedule section).
- [Catalogue](./catalog.md) — the Jobs page, where the schedule chip and next-run hint are surfaced.
- [Administration](../administration.md) — multi-replica setup, scheduler lock, restart behaviour.
