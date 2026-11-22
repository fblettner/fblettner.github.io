---
title: Create a job
description: "The Nomaflow job editor: the Job section (id, schedule, timezone, tags, enabled), presets and their schedules, the retry policy, alerts, shared parameters and the step pipeline — and what is set only in jobs.toml."
keywords: [Nomaflow, create job, job editor, schedule, timezone, presets, retry policy, alerts, shared params, steps, jobs.toml, Liberty Next]
---

# Create a job

**New job** on the Jobs page, or **Edit** on a job's line, opens the job editor. **The job is drawn as its flow** — **Start**, a card per step with its kind, its name and what it does, **End** — and what is picked is edited beside it: the job itself at the start, or a step. One **Save** at the top — active once something changed, with *unsaved changes* beside it — writes the whole job to `jobs.toml`, reloads the scheduler and goes back to the Jobs page; **Back to jobs** leaves without saving. An invalid job is refused with a message at the top of the editor.

Only the jobs that changed are rewritten: the other jobs of `jobs.toml` keep their text as it is — comments, `${…}` references, `step_defaults` —, and the saved job gets its `${…}` references back wherever its value still matches.

---

## At a glance

<svg viewBox="0 0 1320 572" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfed-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfed-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfed-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="532" rx="14" fill="url(#nfed-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Job-level settings + the step pipeline</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back to jobs</text>
  <text x="1008" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="1018" y="86" width="62" height="22" rx="5" fill="url(#nfed-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="122" width="470" height="410" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="702" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="702" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="702" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="702" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="702" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="702" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="702" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="702" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="702" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="702" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="702" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="702" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="702" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="702" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="702" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="702" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="702" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="702" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="614" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="656" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="684" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILE_LOAD</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">? → sales.fact_sales</text>
  </g>
  <line x1="514" y1="193" x2="540" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M538,189 L544,193 L538,197 Z" fill="#334155"/>
  <circle cx="527.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="527.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="546" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="556" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="556" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="440" y1="271" x2="466" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M464,267 L470,271 L464,275 Z" fill="#334155"/>
  <circle cx="453.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="453.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="472" y="258" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="275" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="500" y="275" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="724" y="122" width="356" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738" y="144" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">⛓  Job</text>
  <text x="738" y="164" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="738" y="169" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="183.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales-load</text>
  <text x="738" y="203" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">The id is fixed once a job exists — it keys the run history.</text>
  <text x="738" y="223" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="738" y="228" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="242.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Monthly sales files into the facts table</text>
  <text x="738" y="266" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Schedule (cron)</text>
  <rect x="738" y="273" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="758.0" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Manual</text>
  <rect x="782" y="273" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="802.0" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Hourly</text>
  <rect x="826" y="273" width="36" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="844.0" y="286.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Daily</text>
  <rect x="866" y="273" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.0" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Weekly</text>
  <rect x="910" y="273" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.5" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Monthly</text>
  <rect x="738" y="298" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="312.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="738" y="326" width="328" height="40" rx="6" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="746" y="339" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">Next runs</text>
  <text x="746" y="354" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">11/23/2026, 2:00:00 AM · 11/24/2026, 2:00:00 AM …</text>
  <text x="738" y="382" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TIMEZONE</text>
  <rect x="738" y="387" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="401.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Europe/Paris</text>
  <text x="900" y="382" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAGS</text>
  <rect x="900" y="387" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="910" y="401.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="906" y="390" width="50" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="913" y="401.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales ✕</text>
  <rect x="961" y="390" width="40" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="968" y="401.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">etl ✕</text>
  <rect x="738" y="421" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M740.5,426.5 L742.8,428.8 L746.8,424" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="755" y="430" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Enabled</text>
  <rect x="734" y="444" width="336" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="459" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Presets &amp; schedules</text>
  <rect x="734" y="470" width="336" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="485" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Retry policy</text>
  <rect x="734" y="496" width="336" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="511" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Alerts</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start = the job</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its settings open beside</text>
  <line x1="200" y1="137.0" x2="260" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ on a link</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">inserts a step at that place</text>
  <line x1="200" y1="217.0" x2="337.0" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Long flows wrap</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the next row; zoom − / % / +</text>
  <line x1="200" y1="307.0" x2="254" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A step card</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens its fields here</text>
  <line x1="200" y1="397.0" x2="306" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One Save</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the job, back to the list</text>
  <line x1="1120" y1="93.0" x2="1080" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ready-made schedules</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or a five-field cron</text>
  <line x1="1120" y1="247.0" x2="1066" y2="283" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Next runs</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the next five, in the timezone</text>
  <line x1="1120" y1="317.0" x2="1066" y2="346" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Presets, retries, alerts</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">further down the panel</text>
  <line x1="1120" y1="447.0" x2="1066" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
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

The **+** on a link of the flow inserts a step at that place, among the types `sql_copy`, `sql_query`, `python`, `ldap_sync`, `http`, `call_job`, `file_load`, `file_export`, `report`, `notify`. A click on a step's card opens it beside the flow: its **Step name**, the fields of its type, and its icons — **Up**, **Down**, **Clone step**, **Delete**. A step can be *Turned off for this install*: it never runs, even when a run or a preset selects every step. A long flow continues on the next row, and the zoom (− / % / +) is kept on the device. The fields of each type are on [Steps](../steps.md).

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
