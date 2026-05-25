---
title: Jobs builder
description: "Build a Nomaflow job from Settings → Jobs — name, schedule, timezone, parameters, retry policy and the step pipeline. The page lists every field, its effect and the validation applied before save."
keywords: [Liberty Framework, Nomaflow, jobs builder, schedule, cron, retry, backoff, params, step pipeline, single instance, dependencies, settings]
---

# Jobs builder

A Nomaflow job is created and edited from **Settings → Jobs**. The page lists every job in the catalogue; clicking a row opens the **job builder** — a form with the schedule, the parameter sheet, the retry policy and the step pipeline (drag-and-drop). Saving reloads the job in the running scheduler.

This page documents every field of the builder.

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Jobs → billing-nightly-rebuild</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>▶ Run now</span>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Cancel</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save & reload</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>General</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing-nightly-rebuild</span></div>
      <div style={{opacity: 0.75}}>App</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
      <div style={{opacity: 0.75}}>Enabled</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● On</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Schedule</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Cron</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>0 2 * * *</span> <span style={{marginLeft: '8px', fontSize: '10px', opacity: 0.6, fontStyle: 'italic'}}>02:00 every day</span></div>
      <div style={{opacity: 0.75}}>Timezone</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Europe/Paris ▾</span></div>
      <div style={{opacity: 0.75}}>Next 5 fires</div><div style={{fontSize: '10px', opacity: 0.7, fontFamily: 'ui-monospace, monospace', lineHeight: '1.5'}}>2026-05-21 02:00<br/>2026-05-22 02:00<br/>2026-05-23 02:00<br/>2026-05-24 02:00<br/>2026-05-25 02:00</div>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff'}}>Steps</div>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Add step</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '24px 1fr 100px 60px', rowGap: '6px', alignItems: 'center', fontSize: '11px'}}>
      <div style={{opacity: 0.5}}>⋮⋮</div><div>refresh-totals</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>sql_query</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️ ✕</div>
      <div style={{opacity: 0.5}}>⋮⋮</div><div>rebuild-vat</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>python</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️ ✕</div>
    </div>
  </div>
</div>

The mockup shows the *General*, *Schedule* and *Steps* sections. Below them the builder also exposes *Parameters*, *Retry policy*, *Dependencies* and *Notifications* — each documented below.

---

## General

| Field | Effect |
|---|---|
| **Name** | Unique identifier of the job. Surfaces in the run history, the CLI (`liberty-admin job run <name>`) and the permission code (`job:<name>`). Lowercase + hyphens by convention. Renaming is supported — the *Rename* operation rewrites every reference in one transaction. |
| **App** | Dropdown of the apps registered on the install. The job is grouped under this app on the catalogue and the `job:<app>:*` permission key. Defaults to `_default` (framework-wide). |
| **Description** | Free text shown in the catalogue list. Helps the next operator. |
| **Enabled** | Toggle. Disabled jobs stay in the catalogue but never fire from cron. Manual triggers (the ▶ *Run now* button, the REST endpoint) still work. |

---

## Schedule

| Field | Effect |
|---|---|
| **Cron** | Standard 5-field cron expression. The builder parses it live; the *Next 5 fires* read-out below confirms what the operator typed (catches a misread `0 2 * * *` "02:00 every day" vs `2 0 * * *" "00:02 every day"). Aliases recognised: `@daily`, `@hourly`, `@weekly`, `@monthly`, `@yearly`. |
| **Timezone** | IANA timezone (`Europe/Paris`, `UTC`, `America/New_York`). Cron times are interpreted in this timezone. DST transitions are handled automatically. |
| **Next 5 fires** | Read-only preview of the next five fire times, in the operator's timezone. |
| **Single instance** | Toggle. When **on** (default), a fire-time that overlaps with a still-running run is **skipped** (recorded with `reason = "single-instance"`). When off, the new run starts and the two run concurrently. |
| **Timeout** | Optional hard ceiling on the total run duration. A run past it is **aborted**. Per-step timeouts are set in the step editor. |

Jobs that should only fire on manual / API trigger leave *Cron* empty.

### Cron picker

For operators less comfortable with cron syntax, a **Cron picker** button next to the expression field opens a dialog with preset templates — *Every X minutes*, *Daily at HH:MM*, *Weekly on weekday(s) at HH:MM*, *Monthly on day N at HH:MM*. The picker writes the resulting expression into the field; advanced operators can still type the expression directly.

---

## Parameters

A table of **job-level parameters** available to every step under the `params` namespace. Useful for sharing a value across steps — typically the period a nightly job is running for.

| Field | Effect |
|---|---|
| **Name** | The parameter name (e.g. `period`, `dry_run`). |
| **Type** | `string` / `int` / `float` / `bool` / `date` / `datetime`. Drives the widget on the *Run now* dialog. |
| **Default** | Value used when no override is provided. Supports the special tokens `${today}`, `${yesterday}`, `${week.monday}`, `${month.first}`, `${month.previous}`, etc. |
| **Description** | Surfaces as the field's tooltip on the *Run now* dialog. |

Click *➕ Add parameter* to extend the list. The *Run now* button (top of the page) opens a dialog with one input per declared parameter — manual triggers can override defaults for a single run.

---

## Retry policy

| Field | Effect |
|---|---|
| **Max attempts** | Total attempts including the first one. `1` disables retries. Default 3. |
| **Backoff** | `None` / `Constant` / `Exponential`. Drives the delay between attempts. |
| **Initial delay** | First delay between attempts. `Constant` uses this for every retry; `Exponential` doubles each time. |
| **Max delay** | Cap on exponential backoff. Default 600 seconds. |
| **Retry on** | Multi-select of failure categories — *Error* (any exception), *Timeout*, *Connection*. Empty list = retry on nothing (synonym of `Max attempts = 1`). |
| **Add jitter** | Toggle. Adds up to 25% random jitter to each delay — avoids thundering-herd retries. Default on. |

Per-step retry policy overrides the job-level default; the step editor exposes the same fields.

---

## Steps

The **step pipeline** is a drag-and-drop list — one row per step, executed top to bottom. The `⋮⋮` grip on the left re-orders; *✏️* opens the step editor; *✕* deletes.

| Step builder field | Effect |
|---|---|
| **Name** | Unique within the job. Surfaces on the run-detail page. |
| **Type** | One of `sql_query`, `sql_copy`, `python`, `http`, `ldap_sync`. Each type expands a type-specific form — see [Step types](./step-types.md). |
| **Condition** | Optional expression — the step runs only when truthy. References `${params.*}` and `${previous_step.*}`. Falsy → step is `skipped`, the job continues. |
| **Continue on error** | When on, a failed step marks the run as `partial-success` and the rest of the steps run. Off by default. |
| **Retry policy** | Per-step override of the job-level policy. Same shape as above. |
| **Timeout** | Per-step ceiling. |

The step editor's body changes with the *Type* picker — see [Step types](./step-types.md) for each variant.

---

## Dependencies

A multi-select of other jobs that must have **succeeded most recently** for this job to run.

| Most recent status of every dependency | Effect on the current job |
|---|---|
| `succeeded` | Run proceeds normally. |
| `failed` / `aborted` | Run is `skipped` with `reason = "dependency-failed: <name>"`. |
| Has never run | Run is `skipped` with `reason = "dependency-never-ran: <name>"`. |
| `running` | Run is `skipped` with `reason = "dependency-still-running: <name>"`. |

Cycles are refused at save — the builder rejects "job A depends on B, B depends on A".

Use dependencies sparingly; long chains are usually better expressed as one job with several steps.

---

## Notifications

Lightweight routing of the run outcome.

| Field | Effect |
|---|---|
| **On success** | Multi-select of channels notified when the job ends `succeeded`. |
| **On failure** | Multi-select of channels notified when the job ends `failed` / `aborted`. |
| **On skipped** | Multi-select of channels notified when the job is `skipped`. |

Channels available:

| Channel | Configured at |
|---|---|
| **Slack `#channel`** | *Settings → Framework → Notifications → Slack* — paste the webhook URL once, every job picks from the channel list. |
| **Email `addr@…`** | *Settings → Framework → Notifications → Email* — SMTP relay credentials. |
| **Webhook `<url>`** | Per-job custom URL. POSTs a JSON body with the run id, name, status and duration. |
| **Internal `<role>`** | Drops a notification in the in-app notification centre for every user carrying the role. |

For richer payloads (the failure log tail in a Slack message), add an explicit `http` step at the end of the job rather than relying on the notifications block.

---

## Run now

The **▶ Run now** button at the top of the builder triggers a one-off manual run. When the job declares parameters, a dialog asks for the values (with the declared defaults pre-filled). Confirming dispatches the run through the same scheduler as a cron-triggered one — same step engine, same retry policy, same persistence.

The button is gated by `job:<name>` permission; revoke `job:*:run` for an auditor role that should see jobs but not trigger them.

---

## Save

Saving validates the form:

- Cron syntax parses.
- Connector / query / endpoint references in each step resolve against the loaded catalogue.
- Python `callable` references import cleanly — a missing function fails the save.
- Dependencies exist.
- No cycle in `Dependencies`.

A failing save shows the diagnostic inline; the catalogue stays on the previous version. A successful save reloads the job in the running scheduler — the next cron tick picks up the new definition.

---

## Permissions

The *Jobs* tab is gated by `settings:jobs`. Per-job actions inherit `job:<name>`. Operators who only need to **see runs** without editing jobs get `jobs:read` + `job:<name>` without `settings:jobs`.

---

## Under the hood

Job definitions are stored under `liberty-apps/plugins/<app>/jobs.toml`. Operators **do not edit this file by hand** in normal operation; the Jobs builder is the canonical interface. The file is parsed at startup and on every *Save & reload*; advanced operators reach for the *Raw TOML* tab when a builder gap blocks them.

For CI scripts and external orchestrators, the same surface is reachable via the REST endpoints under `/admin/jobs/*` — see [REST API → Jobs](../rest-api.md#jobs).

---

## What's next

- [Step types](./step-types.md) — what each step does and the fields its editor exposes.
- [Runs & monitoring](./runs-monitoring.md) — the run history page, the live log tail, the abort flow.
- [Apps & Plugins → Plugins](../apps/plugins.md) — writing the Python callables behind `python` steps.
