---
title: Schedules
description: "When Nomaflow jobs run: the schedule said in words in the job editor, the five-field cron syntax and its day-of-week numbering, timezones, the preview of the next runs, the Schedule view, schedulable presets, and missed schedules recorded as MISSED runs."
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

The **Schedule (cron)** field of the job editor says the schedule in words: first how often, then only the fields that choice needs. The editor saves the matching cron expression.

| How often | Then | Saved as |
|---|---|---|
| *Only when started by hand* | Nothing: *No schedule — this job only runs when triggered manually.* | no schedule |
| *Every few minutes* | Every **N** `minutes` (1 to 59). | `*/15 * * * *` |
| *Every hour, or every few hours* | Every **N** `hour(s), at` **M** `minutes past the hour`. | `0 */2 * * *` |
| *On chosen days, at a set time* | `at` a time, then the days of the week as buttons, Monday to Sunday — *No day picked: every day.* | `0 2 * * *` |
| *Once a month* | `on day` **N** `at` a time. | `0 7 1 * *` |
| *Something else (typed)* | The cron expression itself — lists of hours, ranges, months: see [above](#cron). | as typed |

A schedule saved earlier opens on the choice that says it (`30 2 * * *` opens as *On chosen days, at a set time*, 02:30, no day picked); one that no choice says opens as *Something else (typed)*. Under the fields, the schedule is said back in words — *every day at 02:00*, *every 15 minutes* — and **Next runs** lists the next five runs in the job's timezone; it is recomputed shortly after each change, and an invalid expression is reported there.

**Timezone** is picked in the list of time zones (`Europe/Paris`, `America/New_York`). The schedule is evaluated in that timezone, daylight saving time included: `0 2 * * *` in `Europe/Paris` runs at 02:00 Paris time all year round.

---

## The Schedule view \{#schedule-view\}

**Operations → Schedule**, in the Nomaflow menu, shows what runs when, day by day.

<svg viewBox="0 0 1320 504" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfsc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfsc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfsc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfsc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="464" rx="14" fill="url(#nfsc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▦</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Schedule</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">What runs when, day by day</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="116" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="262.16" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">in the next 24 h</text>
  <rect x="364" y="86" width="116" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="374" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="386.16" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">active schedules</text>
  <rect x="488" y="86" width="96" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="498" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="510.16" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">switched off</text>
  <rect x="592" y="86" width="102" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <text x="620.32" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">by hand only</text>
  <rect x="1004" y="87" width="76" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload</text>
  <text x="240" y="134" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UPCOMING (5)</text>
  <rect x="240" y="144" width="840" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="159" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Today</text>
  <rect x="240" y="166" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="188" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">14:00</text>
  <text x="340" y="188" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-hourly-refresh</text>
  <text x="650" y="182" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every hour at :00</text>
  <text x="650" y="195" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 ∗ ∗ ∗ ∗</text>
  <text x="860" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">in 1h</text>
  <rect x="960" y="176" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="989.0" y="187.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <rect x="240" y="208" width="840" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Tomorrow</text>
  <rect x="240" y="230" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="252" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="340" y="252" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="650" y="246" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every day at 02:00</text>
  <text x="650" y="259" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <text x="860" y="252" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">in 13h</text>
  <rect x="960" y="240" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="989.0" y="251.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <rect x="240" y="266" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="288" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">06:00</text>
  <text x="340" y="288" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">sales-load</text>
  <rect x="403.8" y="276" width="44" height="16" rx="8" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
  <text x="425.8" y="287.5" fill="#c084fc" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Stores</text>
  <text x="650" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every day at 06:00</text>
  <text x="650" y="295" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 6 ∗ ∗ ∗</text>
  <text x="860" y="288" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">in 17h</text>
  <rect x="960" y="276" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="989.0" y="287.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <rect x="240" y="302" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="324" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="340" y="324" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="650" y="318" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Monday to Friday at 08:00</text>
  <text x="650" y="331" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <text x="860" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">in 19h</text>
  <rect x="960" y="312" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="981.5" y="323.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="240" y="360" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHEDULED BUT SWITCHED OFF (2)</text>
  <rect x="240" y="370" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="392" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">—</text>
  <text x="340" y="392" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-archive</text>
  <text x="650" y="386" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">on day 1 of each month at 06:00</text>
  <text x="650" y="399" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <rect x="860" y="380" width="70" height="16" rx="3" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="895" y="391.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="962" y="392" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="406" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="428" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">—</text>
  <text x="340" y="428" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">ldap-import</text>
  <text x="650" y="422" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">every 15 minutes</text>
  <text x="650" y="435" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">∗/15 ∗ ∗ ∗ ∗</text>
  <rect x="860" y="416" width="70" height="16" rx="3" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="895" y="427.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <rect x="960" y="416" width="53" height="16" rx="3" fill="#fb923c" fillOpacity="0.12" stroke="#fb923c" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="986.5" y="427.5" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">CANCELED</text>
  <text x="242" y="464" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">›  RUN BY HAND ONLY (14)</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">At a glance</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next 24 h, active, off, by hand</text>
  <line x1="200" y1="87.0" x2="240" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Day by day</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each schedule at its next run</text>
  <line x1="200" y1="177.0" x2="250" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preset schedules</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the preset's name beside the job</text>
  <line x1="200" y1="307.0" x2="425.8" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Switched off</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">set but disabled</text>
  <line x1="200" y1="417.0" x2="250" y2="388" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">By hand only</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folded; a job opens its editor</text>
  <line x1="200" y1="467.0" x2="242" y2="460" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In words</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the cron under it</text>
  <line x1="1120" y1="177.0" x2="780" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">When, and the last run</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens the job</text>
  <line x1="1120" y1="277.0" x2="1010" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
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

A **preset** is a saved set of run parameters (parameters, step arguments, steps switched on or off, log level), created from the **Run with parameters** window with **Save as preset**. In the job editor, the **Presets & schedules** section gives each preset its own **Schedule (cron)** — said in words like the job's — and **Timezone**, and a **Schedule enabled** checkbox; the same card renames the preset, changes what it gives (log, values, steps) and deletes it — see [Create a job](./create.md#presets).

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
| *Only when started by hand* in the Schedule field | The job's own schedule is removed. |
| **Schedule enabled** off on a preset | That preset's schedule stops. |

---

## Tips \{#tips\}

- Spread heavy jobs over the night (02:00, 02:30, 03:00) rather than starting them all at midnight.
- Prefer `15 * * * *` to `0 * * * *` for hourly jobs: many other systems run on the hour.
- Use a timezone name, never a fixed offset, so that daylight saving time is followed.
- Check the **Next runs** preview after every change: it is the quickest way to catch a wrong day.
