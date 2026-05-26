---
title: Run history
description: "The Runs page and the Run detail drawer — every fire of every job, with per-step timing, inputs / outputs, the live log tail and the abort / replay actions."
keywords: [Nomaflow, run history, runs page, run detail, live log, abort, replay, Liberty Framework]
---

# Run history

Every fire of every job leaves a record. The **Runs page** and the **Run detail** drawer are how operators inspect that record — what fired, when, with what parameters, which step succeeded, which failed, what the log says.

This page covers both surfaces and the actions you can take from them.

---

## Where the runs live

You can reach a run from several places:

| From | What you click |
|---|---|
| The **Jobs catalogue card**. | The coloured state badge after the job id (e.g. **SUCCEEDED**) — opens the run that produced it. |
| The **Schedule view**. | A chip in the calendar — only works for fires that have already happened. |
| Direct URL. | `/nomaflow/runs/<run-id>` if you have the id (from a notification, a colleague, a log line). |

The catalogue's last-run badge always points to the **most recent** run. To browse further back, follow the link from the Run detail page or use the URL pattern above with the older id.

---

## The Run detail page

The page is split into three regions: header, step timeline, log stream.

<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rh-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="460" rx="14" fill="url(#rh-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">nomajde-daily-sync · run_a8c4d</text>
  <rect x="320" y="34" width="86" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)"/>
  <text x="363" y="48" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <rect x="780" y="32" width="80" height="24" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.40)"/>
  <text x="820" y="48" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="870" y="32" width="80" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="910" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Replay</text>

  <line x1="20" y1="68" x2="980" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Triggered by</text>
  <text x="170" y="92" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">user:alice</text>
  <text x="320" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Started</text>
  <text x="410" y="92" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">02:30:00 · 14 min ago</text>
  <text x="640" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Log level</text>
  <text x="720" y="92" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">INFO</text>

  <rect x="40" y="116" width="280" height="340" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEPS · 4 / 7</text>

  <rect x="56" y="152" width="248" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="166" r="5" fill="#22c55e"/>
  <text x="86" y="170" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0004</text>
  <text x="290" y="170" fill="#22c55e" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 1.2 s</text>

  <rect x="56" y="184" width="248" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="198" r="5" fill="#22c55e"/>
  <text x="86" y="202" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0005</text>
  <text x="290" y="202" fill="#22c55e" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 8.4 s</text>

  <rect x="56" y="216" width="248" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="230" r="5" fill="#22c55e"/>
  <text x="86" y="234" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F9200</text>
  <text x="290" y="234" fill="#22c55e" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 2.1 s</text>

  <rect x="56" y="248" width="248" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <circle cx="72" cy="262" r="5" fill="#4a9eff">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
  </circle>
  <text x="86" y="266" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F9202</text>
  <text x="290" y="266" fill="#4a9eff" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▶ 4.0 s</text>

  <rect x="56" y="280" width="248" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeDasharray="2,2"/>
  <circle cx="72" cy="294" r="5" fill="#334155"/>
  <text x="86" y="298" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">F9210</text>
  <text x="290" y="298" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">pending</text>

  <rect x="56" y="312" width="248" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeDasharray="2,2"/>
  <circle cx="72" cy="326" r="5" fill="#334155"/>
  <text x="86" y="330" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">F9860</text>
  <text x="290" y="330" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">pending</text>

  <rect x="56" y="344" width="248" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeDasharray="2,2"/>
  <circle cx="72" cy="358" r="5" fill="#334155"/>
  <text x="86" y="362" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">F9865</text>
  <text x="290" y="362" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">pending</text>

  <rect x="340" y="116" width="620" height="340" rx="10" fill="rgba(0,0,0,0.40)" stroke="#1f2937"/>
  <text x="356" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIVE LOG · streaming</text>
  <circle cx="476" cy="135" r="4" fill="#22c55e">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
  </circle>

  <text x="356" y="164" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:00.083  INFO  run started · trigger=user:alice</text>
  <text x="356" y="180" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:00.085  INFO  step F0004 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="196" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:01.190  INFO  source rows=4128 · target rows=4128</text>
  <text x="356" y="212" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">02:30:01.295  INFO  step F0004 · SUCCEEDED · 1.2 s</text>
  <text x="356" y="228" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:01.298  INFO  step F0005 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="244" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:03.412  INFO  ▶ batch 1 of 4 · 25 000 rows</text>
  <text x="356" y="260" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:05.840  INFO  ▶ batch 2 of 4 · 50 000 rows</text>
  <text x="356" y="276" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:08.144  INFO  ▶ batch 3 of 4 · 75 000 rows</text>
  <text x="356" y="292" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:09.652  INFO  source rows=99 421 · target rows=99 421</text>
  <text x="356" y="308" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">02:30:09.701  INFO  step F0005 · SUCCEEDED · 8.4 s</text>
  <text x="356" y="324" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:09.704  INFO  step F9200 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="340" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">02:30:11.820  INFO  step F9200 · SUCCEEDED · 2.1 s</text>
  <text x="356" y="356" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:11.823  INFO  step F9202 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="372" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:13.901  INFO  ▶ batch 1 of 12 · 25 000 rows</text>
  <text x="356" y="388" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:15.840  INFO  ▶ batch 2 of 12 · 50 000 rows</text>
</svg>

---

## The header

| Piece | Meaning |
|---|---|
| **Job id · run id** | Top-left. Click the job id to open the catalogue card; click the run id to copy it. |
| **State badge** | `QUEUED` / `RUNNING` / `SUCCEEDED` / `FAILED` / `CANCELED`. Live for in-flight runs. |
| **Triggered by** | `cron`, `user:<name>`, `api`, `cli`. The audit trail. |
| **Started / Finished** | Timestamps in the local browser timezone (hover for UTC). For in-flight runs, only Started is shown. |
| **Log level** | `INFO` or `DEBUG` for this run. Useful when troubleshooting — a DEBUG run reads differently than an INFO one. |
| **Parameters snapshot** | Expandable JSON showing the **merged** params + op_kwargs as the run actually saw them. The audit answer to "what did this run get". |

The header carries two actions: **✕ Cancel** (visible only while the run is `RUNNING`) and **↻ Replay** (visible only on a terminal run).

---

## The step timeline

The left column lists every step in order. Each row shows:

| Element | Meaning |
|---|---|
| Status dot (●) | Green = SUCCEEDED, blue (pulsing) = RUNNING, red = FAILED, grey = pending or CANCELED. |
| **Name** | Monospace step name. |
| **Type** | Hover the row to see the type (`sql_query`, `python`, …). |
| **Duration** | Seconds or milliseconds, populated when the step finishes. |

Click a step row to **filter the log** to only that step's emissions — useful in long runs where the global log is noisy.

The dot transitions live as the runner progresses through the steps. There's no manual refresh — the page subscribes to the run's Socket.IO room.

### Step states

| State | When |
|---|---|
| **`pending`** | The runner hasn't reached this step yet. |
| **`RUNNING`** | The runner is inside this step. |
| **`SUCCEEDED`** | The step returned without raising. |
| **`FAILED`** | The step raised (after retries, if any). |
| **`CANCELED`** | The operator clicked ✕ Cancel, **or** the step was disabled (reason `skipped: disabled`), **or** an upstream failure stopped the run before this step. |

Clicking a `FAILED` step expands the row to show the exception message and traceback.

---

## The live log

The right column is the run's log stream. Each line carries:

| Element | Format |
|---|---|
| Timestamp | `HH:MM:SS.mmm` in the local browser timezone. |
| Level | `INFO` / `WARNING` / `ERROR`. Colour-coded. |
| Message | The text passed to `ctx.log.info(…)` or emitted by the framework. |

Step boundaries are emitted as INFO lines:

```
02:30:01.295  INFO  step F0004 · SUCCEEDED · 1.2 s
02:30:01.298  INFO  step F0005 · type=sql_copy · mode=overwrite
```

This makes the log self-explanatory — you can read it top-to-bottom and follow the run's narrative without consulting the timeline.

### Live streaming

While the run is in flight:

- A green pulse next to "LIVE LOG · streaming" tells you the WebSocket is connected.
- Lines append in real time as they're emitted.
- The view auto-scrolls to the bottom — scroll up and auto-scroll pauses until you scroll back down.

### After the run finishes

The log is **persisted** in the run history and re-rendered from the database on a page reload. Live streaming stops; the same content is still readable. Retention is **90 days** by default (configurable in [Administration](../administration.md)).

### Filtering and search

| Action | How |
|---|---|
| Filter to one step | Click the step row in the left column. |
| Show only WARNING / ERROR | Toggle the level chip above the log. |
| Find a specific phrase | Ctrl/Cmd+F in the browser (the log is plain text). |
| Switch to DEBUG | Re-run the job with `log_level = DEBUG` in the Run-with-parameters modal. |

---

## ✕ Cancel

Visible while the run is `RUNNING`. Clicking sends a cancellation signal:

| Step type | Behaviour on cancel |
|---|---|
| `sql_query` / `sql_copy` | Database connection closed; transaction rolls back. |
| `python` | Asyncio task cancelled; in-flight `await` calls raise `CancelledError`. A step that doesn't yield won't stop until its next checkpoint. |
| `http` | Network request aborted. |
| `ldap_sync` | LDAP connection closed. |

The remaining steps **do not run**. The run state moves to `CANCELED`. The log captures `run cancelled by user:<name>` as the last line.

Cancellation is **best-effort** for Python steps that loop without yielding to the event loop — see [Troubleshoot](./troubleshoot.md#cancellation-doesnt-stop-my-step) for the cooperative pattern.

---

## ↻ Replay

Visible on terminal runs. Clicking opens a **Replay modal** pre-filled with the original run's parameters snapshot — same shape as the Run-with-parameters modal:

| Field | Pre-filled with |
|---|---|
| `log_level` | The original run's level. |
| Shared params | The original run's merged params. |
| Per-step `op_kwargs` | The original run's per-step kwargs. |
| Per-step `enabled` | The original run's enable state. |

The operator can adjust anything (typical: change `target_connector` from production to a sandbox, or disable steps 1-5 to re-run only the tail). Submitting fires a **new run** — the original is untouched.

Use cases:

| Pattern | Replay tweak |
|---|---|
| "Run the same job again with the same params" | Submit without changes. |
| "Re-run only the failing step" | Disable steps before it; keep it on. |
| "Test against staging" | Change `target_connector`. |
| "Investigate with full SQL" | Switch log level to DEBUG. |

---

## Filtering runs (the Runs catalogue view)

A "list every run" page is reached from the Jobs catalogue by clicking a job's name — it opens the job's **runs list**, sorted newest-first. Each row shows:

| Column | What |
|---|---|
| **Run id** | Click to open the Run detail. |
| **State** | Coloured badge. |
| **Triggered by** | `cron`, `user:…`, `api`. |
| **Started / Duration** | Local timestamp + how long the run took. |
| **Step summary** | "7 / 7 ✓" or "4 / 7 — failed at F9202". |

Use it to:

- Compare run-to-run durations (a creeping slowdown in an ETL).
- Find the last successful run before a regression.
- Audit who triggered manual runs over the last week.

The Runs catalogue is **per job** — there's no global "every run across every job" view today; the per-job grouping is what operators actually use.

---

## What's next

- [Troubleshoot](./troubleshoot.md) — when a run fails or hangs, how to find out why.
- [Notifications](../notifications.md) — get pinged on failure instead of refreshing the page.
- [Administration](../administration.md) — retention, scheduler lock, restart behaviour.
