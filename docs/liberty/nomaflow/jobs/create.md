---
title: Create a job
description: "The Nomaflow job editor: the Job section (id, schedule, timezone, tags, enabled), presets and their schedules, the retry policy, alerts, shared parameters and the step pipeline — and what is set only in jobs.toml."
keywords: [Nomaflow, create job, job editor, schedule, timezone, presets, retry policy, alerts, shared params, steps, jobs.toml, Liberty Next]
---

# Create a job

**+ New job** on the Jobs page, or **Edit** on a card, opens the job editor. One **Save** at the top writes the whole job to `jobs.toml`, reloads the scheduler and goes back to the Jobs page; **Cancel** leaves without saving. An invalid job is refused with a message at the top of the editor.

Only the jobs that changed are rewritten: the other jobs of `jobs.toml` keep their text as it is — comments, `${…}` references, `step_defaults` —, and the saved job gets its `${…}` references back wherever its value still matches.

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jcr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jcr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jcr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jcr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#jcr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job editor · crm-stalled-deals</text>
  <rect x="800" y="28" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="884" y="28" width="80" height="22" rx="5" fill="url(#jcr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOB</text>
  <text x="240" y="107" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Id</text>
  <rect x="350" y="92" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="106.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="600" y="107" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Timezone</text>
  <rect x="680" y="92" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="690" y="106.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Europe/Paris ▾</text>
  <text x="240" y="137" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Schedule (cron)</text>
  <rect x="350" y="122" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="136.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ 0-4</text>
  <text x="600" y="137" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Next runs: Mon 08:00 · Tue 08:00 …</text>
  <rect x="350" y="159" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M352.5,164.5 L354.8,166.8 L358.8,162" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="367" y="168" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enabled</text>
  <rect x="240" y="184" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="200" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Presets &amp; schedules</text>
  <text x="948" y="200" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1 preset</text>
  <rect x="240" y="214" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="230" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Retry policy</text>
  <text x="948" y="230" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">attempts 2 · exponential</text>
  <rect x="240" y="244" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="260" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Alerts</text>
  <text x="948" y="260" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">On failure → user:admin</text>
  <rect x="240" y="274" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="290" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Shared params</text>
  <text x="948" y="290" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <text x="240" y="320" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STEPS</text>
  <text x="300" y="320" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Add step:</text>
  <rect x="360" y="306" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="396.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">sql_query</text>
  <rect x="437" y="306" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">sql_copy</text>
  <rect x="508" y="306" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="544.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">file_load</text>
  <rect x="585" y="306" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="612.5" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">python</text>
  <rect x="645" y="306" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="667.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">http</text>
  <rect x="694" y="306" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="730.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">ldap_sync</text>
  <rect x="771" y="306" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">call_job</text>
  <rect x="240" y="338" width="720" height="70" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="252" y="348" width="63" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="283.5" y="360.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query</text>
  <text x="340" y="361" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">flag-stalled</text>
  <text x="252" y="392" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">connector crm · query flag_stalled_deals</text>
  <text x="940" y="361" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↑ ↓ ⧉ 🗑</text>
  <rect x="10" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Job</text>
  <text x="20" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">id, schedule, timezone</text>
  <line x1="210" y1="109.0" x2="240" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Policies</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">presets, retries, alerts</text>
  <line x1="210" y1="217.0" x2="240" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one button per type</text>
  <line x1="210" y1="347.0" x2="240" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One Save</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the job, reloads</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Next runs</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">preview of 5 times</text>
  <line x1="1000" y1="147.0" x2="950" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="1000" y="360" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A step card</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">move, clone, delete</text>
  <line x1="1000" y1="377.0" x2="960" y2="373" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
</svg>

---

## The sections \{#sections\}

### Job

| Field | Notes |
|---|---|
| **Id** | Letters, digits, `-` and `_`. Fixed once the job exists — it keys the run history. To rename, **Clone** under the new id, then delete the old job. |
| **Description** | Shown on the job's line and on its page. |
| **Schedule (cron)** | Ready-made choices (Manual, Hourly, Daily, Weekly, Monthly) or a five-field cron; **Next runs** previews the next five. Blank: manual only. See [Schedules](./schedules.md). |
| **Timezone** | The IANA name the schedule is evaluated in. |
| **Tags** | Free labels, used by the filter of the Jobs page. |
| **Enabled** | Switches the job's own schedule on or off. |

### Presets & schedules

Presets are saved from **Run with parameters → Save as preset…**. Here each one can get its own **Schedule (cron)**, **Timezone** and **Schedule enabled** — see [Schedulable presets](./schedules.md#schedulable-presets).

### Retry policy

**Retry failed steps**, then **Attempts** (tries in all), **Backoff** (`fixed` or `exponential`) and **Base seconds** between tries. The policy applies to each step.

### Alerts

**Send alerts** with **On failure** sends a notification to the **Recipients** when a run fails, in the bell and by e-mail. Write recipients as `user:alice`, `role:ops` or `email:ops@example.com` — an entry without a prefix is taken as an e-mail address. **Warn if a run exceeds (minutes)** sends them a second notification when a run lasts at least that long, whatever its outcome. **Must have succeeded by** sets a deadline (`07:00`, in the job's timezone): on a day the job is scheduled, if no run has succeeded by then, the recipients get *Job &lt;id&gt; is late* — still running, failed, or never started. For several jobs at once or other events, use a notification rule: see [Notifications](../notifications.md#job-alerts).

### Shared params

Name / value pairs merged into the arguments of every `python` step (a step's own value wins). They also appear, editable, in **Run with parameters**.

### Steps

The **Add step:** bar has one button per type — `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job`. Each step is a card: click it to open or fold its form; the arrows move it up or down; the copy icon clones it; the bin removes it. The fields of each type are on [Steps](../steps.md).

---

## Only in jobs.toml \{#toml-only\}

A few settings have no field in the editor; set them in `jobs.toml`:

| Key | Default | Meaning |
|---|---|---|
| `log_level` (job) | `INFO` | The level of scheduled runs: `WARNING`, `INFO` or `DEBUG`. A manual run picks its own in **Run with parameters**. |
| `timeout_seconds` (job) | `14400` | The whole run stops after this time. |
| `enabled` (step) | `true` | `false` always skips the step. |
| `timeout_seconds` (step) | `3600` | The step stops after this time. |
| `pool` (`sql_query`, `sql_copy` endpoints) | — | Another pool of the connector — see [Steps](../steps.md#sql-query). |

```toml title="jobs.toml"
[[jobs]]
id = "sales-load"
description = "Monthly sales files into the facts table"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]
log_level = "INFO"

[jobs.params]
period = "2026-10"

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "file_load"
name = "load-sales"
# … see Steps → File load
```

---

## Tips \{#tips\}

- Give each step a short verb-noun name (`load-sales`, `refresh-totals`): it is what the run detail shows.
- Keep one job per business flow; chain jobs with a `call_job` step rather than copying steps.
- Save, then run once by hand with **Run with parameters** in `DEBUG` before enabling the schedule.
