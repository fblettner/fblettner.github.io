---
title: Create a job
description: "Walk through the Nomaflow Job editor — identity, schedule, parameters, steps, retry, alerts — building a real job from a blank slate, with every field explained."
keywords: [Nomaflow, job editor, create job, identity, schedule, steps, retry, alerts, parameters, Liberty Framework]
---

# Create a job

This page walks through the **Job editor** — every section, every field, every save. By the end you can build any job Nomaflow can express: from a one-step SQL refresh to a 17-step Python pipeline with shared params and retry policy.

Open the editor by clicking **＋ New Job** on the [Jobs catalogue](./catalog.md), or **✎ Edit** on an existing job.

---

## Editor layout

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="je-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#je-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Job editor · my-first-job</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">① IDENTITY</text>
  <text x="58" y="122" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">id · description · tags · enabled</text>
  <rect x="500" y="92" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="550" y="107" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">my-first-job</text>
  <rect x="500" y="120" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="510" y="135" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">my first Nomaflow job</text>

  <rect x="40" y="172" width="920" height="60" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="194" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">② SCHEDULE</text>
  <text x="58" y="216" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">cron · timezone · enabled toggle</text>
  <rect x="500" y="184" width="120" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="510" y="199" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">0 2 * * *</text>
  <rect x="630" y="184" width="160" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="640" y="199" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Europe/Paris ▾</text>
  <text x="500" y="221" fill="#22c55e" fontSize="10" fontFamily="system-ui, sans-serif">next fires: 02:00 · 02:00 · 02:00</text>

  <rect x="40" y="246" width="920" height="68" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="268" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">③ SHARED PARAMS</text>
  <text x="58" y="290" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">params merged under every step's op_kwargs</text>
  <rect x="500" y="258" width="80" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="510" y="273" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">apps_id</text>
  <rect x="586" y="258" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="596" y="273" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <rect x="640" y="258" width="22" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="651" y="273" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>

  <rect x="40" y="328" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="350" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">④ STEPS (ORDERED)</text>
  <rect x="58" y="362" width="600" height="32" rx="6" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="74" y="382" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">1 · sql_query · refresh-totals</text>
  <text x="670" y="382" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">↕ reorder  ·  ✎ edit  ·  ✕ remove</text>
  <rect x="58" y="398" width="120" height="22" rx="4" fill="#4a9eff" opacity="0.9"/>
  <text x="118" y="413" fill="#0b1220" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add step</text>

  <rect x="880" y="22" width="60" height="22" rx="4" fill="#4a9eff" opacity="0.9"/>
  <text x="910" y="37" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
</svg>

The editor is one scrollable page with four sections. **Save** in the top-right writes the whole job in one shot — there's no per-section save.

---

## ① Identity

The block that names the job and makes it operable.

| Field | Validation | Notes |
|---|---|---|
| **Id** | Letters, digits, `-`, `_`. Required, unique. | Used in URLs (`/nomaflow/jobs/<id>`) and as the foreign key for every run. Immutable in practice — to rename, export, edit, recreate. |
| **Description** | Free text, optional. | Shows on the catalogue card. Use it to capture *why* the job exists. |
| **Tags** | List of free labels. | Shown as chips. Useful for grouping (`etl`, `nightly`, `team-data`). |
| **Enabled** | Boolean, default `true`. | When off, the schedule is ignored but ▶ Run now still works. |

:::tip[Naming pattern]
Most installs settle on `<domain>-<purpose>` or `<domain>-<purpose>-<scope>`:
`reporting-nightly-refresh`, `nomajde-daily-sync`, `nomasx1-security-1`. The id appears everywhere — in the URL, in the logs, in the run history — so a clear prefix scales.
:::

---

## ② Schedule

The block that decides when the job auto-fires.

| Field | What it accepts |
|---|---|
| **Cron** | 5-field expression (`m h dom mon dow`) with an optional 6th for seconds. Empty = manual-only. |
| **Timezone** | IANA name. Defaults to the system timezone. Validated against `zoneinfo` — bad names are rejected at save time. |

The editor renders a **live preview of the next three fires** below the input — sanity-check the expression without running the job. If the preview reads "next: in 3 months" when you meant "every day", you caught a typo.

The full cron reference and patterns are on the [Schedules](./schedules.md) page.

### Manual-only jobs

Leave the cron empty. The job is still in the catalogue, still ▶-runnable, but never auto-fires. This is the right shape for:

- **Operator-driven rebuilds** — a one-off refresh after a data import.
- **Sandbox jobs** — variants of a production job, kept around for ad-hoc testing.
- **Dangerous jobs** — destructive purges, schema migrations: keep manual so they never fire by accident.

---

## ③ Shared params

Optional. A flat map of key → value that's passed to **every** step's `op_kwargs` at runtime (step values win on conflict).

| Field | Type-aware input |
|---|---|
| Boolean (`true`/`false`) | Checkbox. |
| Number | Number input. |
| String | Text input. |
| Key matching `connector` or `*_connector` | Connector picker (search-select). |

Three patterns where shared params shine:

| Pattern | Example |
|---|---|
| **Multi-step job, same identifier in every step.** | `apps_id = 10` consumed by 17 Python steps. |
| **Source / target pairs.** | `source_connector = "jdedwards"` + `target_connector = "nomajde"`. |
| **Per-fire override target.** | Save a sensible default; let operators flip it in the Run-with-parameters modal. |

If the job has no shared params, leave the block empty — the section folds away.

---

## ④ Steps

The ordered list of work units. Click **＋ Add step** to open the **Step editor** (full reference on the [Steps](../steps.md) page); click **✎** on a row to edit it; drag the ↕ handle to reorder.

### Step types

| Type | What you fill in |
|---|---|
| **`sql_query`** | Connector + SQL statement + optional params dict + timeout. |
| **`sql_copy`** | Source endpoint (connector + schema + table) + target endpoint + mode (`overwrite` / `append` / `upsert`) + optional type coercion + batch size. |
| **`python`** | Callable `module.path:function_name` + op_kwargs map. |
| **`http`** | URL + method + headers + body. |
| **`ldap_sync`** | LDAP server + bind credentials + search base + filter + attributes + target connector + target query + attribute → column mapping. |

### Per-step disable

Every step row has an **enabled** toggle. When off, the runner records the step as `CANCELED` with the reason `skipped: disabled` and moves on. Useful for:

- Steps that should only run **on certain days** — disable in the saved config, enable per-fire in the modal.
- Steps that are **temporarily broken** — disable while you fix the upstream, keep the rest running.
- Steps that **panic-disable** — leave the toggle in the editor as a "kill switch".

### Per-step timeout

A step's `timeout_seconds` (default 3600 = 1 hour) bounds how long it can run. When exceeded, the step is cancelled and the run fails (subject to retry policy). Tune up for long ETLs, down for quick HTTP probes.

### Reorder

Steps run **strictly in order** — step 2 starts only after step 1 succeeds. Drag the ↕ handle on a row to reorder; the change applies on save.

---

## ⑤ Retry policy (optional)

A retry policy applies on **step** failure, not on whole-job failure. A failed step that's retried successfully lets the job continue; a failed step that exhausts its retries fails the whole run.

| Field | Default | Notes |
|---|---|---|
| **Attempts** | `1` (no retry) | Total tries — `2` = initial + one retry. |
| **Backoff** | `fixed` | Or `exponential` (doubles each retry). |
| **Base seconds** | `60` | Wait before the first retry. With `exponential`, the second wait doubles. |

When to set what:

| Step type | Typical retry |
|---|---|
| `sql_query` on the framework's pool | None — internal failures are usually deterministic. |
| `sql_copy` from an external DB | `attempts = 2`, `backoff = fixed`. Catches transient connectivity. |
| `http` to a third-party API | `attempts = 3`, `backoff = exponential`, `base_seconds = 30`. Catches rate-limits + temporary outages. |
| `python` calling an external service | Same as `http`. |
| `ldap_sync` against AD | `attempts = 2`. AD timeouts are common during business hours. |

Don't add retries to a step that's **probably going to fail the same way every time** — you'll just delay the failure notification by `attempts × base_seconds`.

---

## ⑥ Alerts (optional)

Where Nomaflow routes failure (and long-run) signals.

| Field | Meaning |
|---|---|
| **`on_failure`** | When `true`, a `FAILED` run emits an alert event. Default `true` once the alerts block exists. |
| **`on_long_run_minutes`** | Emit an alert if the run is still in flight after N minutes. The run keeps going — this is a heads-up. |
| **`recipients`** | Channel-specific identifiers (Slack channel, email address, webhook id). Empty = use framework defaults. |

The transport (Slack workspace, SMTP server, webhook URL) is configured **once** at framework level — the job just picks recipients. See [Notifications](../notifications.md) for the full wiring.

---

## ⑦ Log level

Per-fire verbosity. The dropdown shows two options:

| Value | What it emits |
|---|---|
| **`INFO`** (default) | Row counts, business progress markers, step boundaries. Operator-friendly. |
| **`DEBUG`** | All of `INFO` plus the **full SQL** of every query and verbose internal state. Useful when troubleshooting. |

The value set here is the **default** for every fire. The Run-with-parameters modal can override it per fire without editing the job.

Don't leave a job at `DEBUG` in steady state — debug logs are verbose and Nomaflow retains them for 90 days like everything else.

---

## Save → reload

Clicking **Save**:

1. Validates the form (id format, cron syntax, IANA timezone, step-type required fields).
2. Writes the job back to the saved job catalogue.
3. Calls `POST /admin/reload` so the scheduler picks up the new schedule **without a process restart**.
4. Returns you to the editor with a green "Saved" banner.

If validation fails, the editor scrolls to the offending field with a red border and a hint. Common failures:

| Error | Cause |
|---|---|
| `job id contains invalid characters` | Used a space, dot or slash. Stick to letters, digits, `-`, `_`. |
| `unknown timezone` | Typo in the IANA name. The picker prevents this; only manual typing can. |
| `step X is missing required field(s): …` | A step type's required fields aren't filled in (e.g. SQL query without a connector). |
| `duplicate job id` | Another job already uses this id. Pick a different one. |

---

## Editing an existing job

Clicking **✎ Edit** on a job card opens the same editor with the existing config loaded. The Id field is locked — to rename a job, the safe path is **export → save copy → recreate → delete old**.

Saving over an existing job:

- Existing runs in the history are **preserved** (the run rows reference the job id, which didn't change).
- The next cron fire uses the new schedule / steps.
- A run already in flight at save time **completes with the old config** — Nomaflow doesn't hot-swap config into a running pipeline.

---

## Deleting a job

There's a **🗑 Delete** action in the editor (bottom of the page). Deleting:

- Removes the job from the catalogue.
- **Keeps** the run history (the run rows are still queryable by their `job_id`, they just no longer link to a live job).
- Stops any future schedule.

If you want to **pause** a job while keeping its definition, use the **enabled toggle** on the catalogue card — same effect, fully reversible.

---

## What's next

- [Steps](../steps.md) — the full step type reference (every field on every type).
- [Schedules](./schedules.md) — cron patterns, timezone gotchas, the calendar view.
- [Workflow recipes](../workflows/scheduled-sync.md) — three concrete end-to-end patterns to learn from.
- [Catalogue](./catalog.md) — the Jobs page once you have a few jobs to operate.
