---
title: Catalogue
description: "The Jobs page — every job listed with its last-run state, next fire and the per-job actions: enable toggle, ▶ Run now, ✕ Cancel, ✎ Edit, Run-with-parameters modal."
keywords: [Nomaflow, jobs page, catalogue, run now, cancel, run with parameters, enable, disable, Liberty Framework]
---

# Catalogue — the Jobs page

The **Jobs page** is Nomaflow's home. It opens by default when you click *Nomaflow* in the top navigation and lists every declared job — scheduled or manual-only, enabled or paused.

This page covers what each piece does, what the actions trigger, and how the **Run-with-parameters modal** lets operators override a fire without editing the job definition.

---

## Page layout

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ct-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#ct-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Jobs</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Every declared job with its last-run state and next fire.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="100" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="90" y="118" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ New Job</text>
  <rect x="150" y="100" width="130" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="215" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Schedule view</text>
  <rect x="290" y="100" width="100" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="340" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload</text>

  <rect x="40" y="148" width="920" height="100" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="172" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <rect x="240" y="160" width="68" height="18" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="274" y="173" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="316" y="160" width="48" height="18" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="340" y="173" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">jde-sync</text>
  <rect x="372" y="160" width="38" height="18" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="391" y="173" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <text x="58" y="198" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Daily sync of JDE control + data dictionary tables to Nomajde.</text>
  <text x="58" y="218" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⏱ 30 2 * * *  ·  next: tomorrow 02:30  ·  last: 14 h ago  ·  7 steps</text>
  <rect x="780" y="194" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="810" y="209" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run now</text>
  <rect x="846" y="194" width="48" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="870" y="209" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Edit</text>
  <rect x="900" y="194" width="42" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="921" y="209" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">enabled</text>

  <rect x="40" y="264" width="920" height="100" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="288" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-security-1</text>
  <rect x="240" y="276" width="58" height="18" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.40)"/>
  <text x="269" y="289" fill="#4a9eff" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">RUNNING</text>
  <circle cx="305" cy="285" r="4" fill="#4a9eff">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
  </circle>
  <text x="58" y="314" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Refresh nomasx1 SECURITY tables for apps_id 10.</text>
  <text x="58" y="334" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⏱ manual-only  ·  step 6 / 17  ·  log streaming live</text>
  <rect x="780" y="310" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeDasharray="2,2"/>
  <text x="810" y="325" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ (busy)</text>
  <rect x="846" y="310" width="62" height="22" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.40)"/>
  <text x="877" y="325" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
</svg>

The page is one card per job. The catalogue is sorted alphabetically by id; there's no manual ordering — let the id and tags do that work.

---

## The toolbar

| Action | What it does |
|---|---|
| **＋ New Job** | Opens the [Job editor](./create.md) on a blank job (`/nomaflow/jobs/new`). |
| **📅 Schedule view** | Opens the [Schedules](./schedules.md) page — a calendar of upcoming fires across every job. |
| **↻ Reload** | Re-fetches the catalogue. Use after editing TOML on disk if your install allows that path. |

---

## What's on a job card

Every card carries the same nine pieces:

| Piece | Where on the card | Meaning |
|---|---|---|
| **Id** | Top-left, monospace. | The job's identifier. Click anywhere in the row title to view its details. |
| **Last-run badge** | After the id. | Coloured pill (`SUCCEEDED`, `FAILED`, `RUNNING`, `CANCELED`). Click it → opens the [Run detail](../runs/history.md) for that run. |
| **Tags** | After the badge. | Free labels from the job definition — `etl`, `nightly`, `legal`. |
| **Enabled toggle** | Top-right. | Green when on. Clicking flips the job's `enabled` flag and reloads the scheduler. Shows a spinner while saving — it's a real save, not optimistic. |
| **Description** | Below the title row. | Free text from the job definition. |
| **Schedule chip** | Meta row, with a ⏱ icon. | Cron expression in monospace, or *manual-only* if no schedule. |
| **Next-run hint** | Meta row, with a 📅 icon. | Relative time until the next fire (`in 14 m`). Hover for the absolute timestamp. |
| **Last-run hint** | Meta row. | Relative time since the last finish. |
| **Step count** | Meta row. | How many steps the job carries. |

The Actions row below carries **▶ Run now**, **✕ Cancel** (only when a run is in flight) and **✎ Edit**.

---

## Enable / disable

The **enabled toggle** in the top-right of each card controls whether the scheduler honours the job's cron. The behaviours:

| State | Cron fires? | Manual ▶ Run still works? |
|---|---|---|
| **Enabled** | Yes — every cron match creates a run. | Yes. |
| **Disabled** | No — the scheduler skips this job. | Yes — operators can still trigger manually. |

The toggle is **not** an optimistic flip: clicking it writes back the saved job configuration with the new value and triggers a scheduler reload. The button shows a spinner while that round-trip finishes — typically under a second, but the spinner is honest about what's happening.

A common pattern: **freeze a job during a maintenance window** by disabling it, then re-enable when the system is back. The job's history is preserved; only the auto-fires stop.

---

## ▶ Run now

Clicking **Run now** triggers a fire of the job, on top of any schedule. What happens next depends on what the job carries:

| Situation | What happens |
|---|---|
| Single-step job with no params and no op_kwargs. | The job fires **immediately**. The card transitions to `RUNNING`. |
| Job has shared params **or** any Python step has op_kwargs **or** more than one step. | The **Run-with-parameters** modal opens. |
| A run is already in flight for this job. | The button is disabled — one run at a time per job. |

The trigger source on the resulting run is `user:<your-account>` — visible on the Run detail page and used for the audit trail.

---

## Cancel a run

When a job's last_run state is `RUNNING`, a **✕ Cancel** button appears in the actions row. Clicking it sends a cancellation signal to the runner:

- The current step receives a cancellation request — what happens next depends on the step type:
  - SQL steps: the underlying connection is closed; the database transaction rolls back.
  - Python steps: the asyncio task is cancelled; in-flight `await` calls raise `CancelledError`.
  - HTTP / LDAP steps: the network call is aborted.
- The remaining steps **do not run**.
- The run state moves to `CANCELED`.

Cancellation is best-effort — a Python step that's blocked on a non-async call (a thread `sleep`, a blocking DB driver) only stops at its next checkpoint. Design long Python steps to **check for cancellation** periodically; the Custom Python guide covers the pattern.

---

## Live updates

The catalogue **polls every 2 seconds** while any job is in flight, so:

- A job that's `RUNNING` will transition to its terminal state without a manual reload.
- A new run that fires from a cron will land on the card with its `RUNNING` badge within ~2 seconds.
- When nothing is in flight, polling stops to keep the page quiet.

If the page seems stale, hit **↻ Reload** in the toolbar — it forces an immediate refresh.

---

## Run with parameters

When you click **▶ Run now** on a job that carries `params`, Python step `op_kwargs` or more than one step, the **Run-with-parameters modal** opens.

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rw-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="400" rx="14" fill="url(#rw-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Run with parameters · nomasx1-security-1</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Values apply to this fire only — saved job config stays unchanged.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="920" height="58" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="120" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOG LEVEL</text>
  <text x="58" y="142" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">log_level</text>
  <rect x="260" y="128" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="270" y="143" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">INFO — row counts + progress markers ▾</text>

  <rect x="40" y="172" width="920" height="92" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="192" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHARED PARAMS (APPLY TO EVERY STEP)</text>
  <text x="58" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">apps_id</text>
  <rect x="260" y="200" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="270" y="215" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">10</text>
  <text x="58" y="240" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">target_connector</text>
  <rect x="260" y="226" width="220" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="270" y="241" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">nomasx1 ▾</text>

  <rect x="40" y="278" width="920" height="68" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="298" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEP · SECURITY_USERS · python · nomasx1.security:j_security_users</text>
  <text x="58" y="320" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">enabled (run this step)</text>
  <rect x="260" y="310" width="20" height="14" rx="3" fill="rgba(34,197,94,0.40)" stroke="rgba(34,197,94,0.60)"/>
  <text x="270" y="321" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>

  <line x1="20" y1="362" x2="980" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <rect x="780" y="378" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="396" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="870" y="378" width="80" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="910" y="396" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
</svg>

### What's in the modal

| Section | What it shows |
|---|---|
| **Log level** | Dropdown: `INFO` or `DEBUG`. Seeded from the job's saved value. |
| **Shared params** | One row per key in the job's `params` block. Type-aware inputs (number / boolean / text / connector picker). Hidden when the job has no params. |
| **Per-step section** | One per step in the job. Each carries: the step name, an **enabled** checkbox, and (for Python steps) one row per op_kwarg. |

### How it diffs

The modal only sends the **diff** — values you actually changed. Untouched fields fall back to the job's saved value. So clicking **▶ Run** without changing anything fires the job exactly as if you'd done a quick ▶ Run now.

### Connector pickers

Any kwarg whose key is `connector` or ends in `_connector` (e.g. `source_connector`, `target_connector`) renders as a **search-select** populated with the framework's connectors. Saves typos versus free-text — and lets you spot connector names you didn't know existed.

### Per-step enable toggle

Every step has a checkbox. Unchecking it tells the runner to **skip that step** for this fire only:

- The step appears in the run history with a `CANCELED` state and the reason `skipped: disabled`.
- The remaining steps still run.

This is the operator's escape hatch for chained jobs — re-run a job after fixing step 6's data without re-doing steps 1–5.

### Use cases

| Pattern | How the modal helps |
|---|---|
| **Test against a sandbox** | Override `target_connector` to `nomasx1-sandbox` for one fire. |
| **Back-fill a specific tenant** | Override `apps_id` from the production default to the target tenant. |
| **Re-run only the failing phase** | Disable steps 1–5 (already done), keep step 6 enabled. |
| **Debug a flaky step** | Switch `log_level` to `DEBUG` for one fire to see the full SQL. |

---

## Search and filter

The catalogue surfaces the job's **id**, **description** and **tags** in the card; the browser's Ctrl/Cmd+F finds anything quickly. There's no in-app search bar today — most installs have under 50 jobs and grep-via-browser is enough.

For installs with hundreds of jobs, consider:

- Naming jobs with a **prefix** convention (`nomajde-…`, `nomasx1-…`, `reporting-…`).
- Tagging by **frequency** (`hourly`, `daily`, `monthly`) and by **owner** (`team-data`, `team-security`).

---

## What's next

- [Create a job](./create.md) — the full Job editor.
- [Schedules](./schedules.md) — the cron syntax, the schedule view, calendar preview.
- [Runs → History](../runs/history.md) — clicking a last-run badge takes you here.
- [Notifications](../notifications.md) — Slack / email / webhook on success or failure.
