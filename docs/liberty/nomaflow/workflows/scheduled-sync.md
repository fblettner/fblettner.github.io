---
title: Scheduled database sync
description: "Recipe — a nightly job that streams rows from an operational store into a reporting store with SQL Copy, retry on failure and Slack notification on success."
keywords: [Nomaflow, recipe, scheduled sync, ETL, sql_copy, nightly job, reporting, Liberty Framework]
---

# Recipe — Scheduled database sync

The most common Nomaflow workload: every night, pull a set of tables from an operational database into a reporting store. Two SQL Copy steps, a retry policy, a Slack ping on the way out.

This recipe is the **template** you'll adapt for every "refresh table X from DB A into DB B" use case.

---

## What you build

| Piece | Value |
|---|---|
| **Trigger** | Cron — daily at 02:00 Paris time. |
| **Source** | An operational PostgreSQL with a `customers` and `orders` table. |
| **Target** | A reporting PostgreSQL with `reporting.customers` and `reporting.orders`. |
| **Steps** | 2 × `sql_copy` (one per table) + 1 × `http` (Slack webhook). |
| **Retry** | 2 attempts, fixed 60-second backoff. |
| **Alerts** | On failure, ping the on-call Slack channel. |

End result: every morning, the reporting tables are fresh; if the sync fails, the on-call gets a Slack message within minutes.

---

## Prerequisites

| You need | How to get it |
|---|---|
| A **source connector** to the operational DB. | *Settings → Connectors → ＋ New* — point at the operational DB. |
| A **target connector** to the reporting DB. | Same — point at the reporting DB. The framework's `default` pool is fine for a smoke test. |
| A **Slack webhook URL**, stored as an env var. | Slack admin gives you the URL; add `SLACK_WEBHOOK_URL` to the framework's env file. |

Both connectors should test green on *Settings → Connectors → Test connection*.

---

## Step 1 — Create the job shell

On the Nomaflow page, click **＋ New Job**.

| Field | Value |
|---|---|
| Id | `reporting-nightly-sync` |
| Description | *Nightly refresh of the reporting store from the operational DB.* |
| Tags | `etl`, `nightly`, `reporting` |
| Enabled | ✓ |

Schedule:

| Field | Value |
|---|---|
| Cron | `0 2 * * *` |
| Timezone | `Europe/Paris` |

The live preview should show *next: tomorrow 02:00 · the next day 02:00 · the next day 02:00*. Save.

---

## Step 2 — Add the customers copy

Click **＋ Add step** → **SQL Copy**.

| Field | Value |
|---|---|
| Name | `copy-customers` |
| **Source** Connector | Your source connector (e.g. `ops-db`). |
| **Source** Schema | `public` |
| **Source** Table | `customers` |
| **Target** Connector | Your target connector (e.g. `reporting-db`). |
| **Target** Schema | `reporting` |
| **Target** Table | `customers` |
| Mode | `overwrite` |
| Batch size | `10000` (default) |
| Timeout | `1800` (30 min — generous for a daily table) |

Save the step.

**Why `overwrite` mode?** It writes to a stash table first, then atomically swaps. The reporting `customers` table is **never empty** mid-run — operators using the reporting screens at 02:00:30 still see yesterday's data until the swap, then they see today's.

---

## Step 3 — Add the orders copy

Same shape as Step 2 with `orders` instead of `customers`. Set timeout to `3600` (1 h) — orders tend to be bigger than customers, give it room.

The Job editor now shows two `sql_copy` steps in order. Save.

---

## Step 4 — Add the success notification

Click **＋ Add step** → **HTTP**.

| Field | Value |
|---|---|
| Name | `notify-slack` |
| URL | `${env:SLACK_WEBHOOK_URL}` |
| Method | `POST` |
| Headers | `Content-Type: application/json` |
| Body | `{ "text": "✅ reporting-nightly-sync succeeded" }` |
| Timeout | `30` |

Save the step. The body uses JSON; the HTTP step encodes the dict to JSON when sending.

The job now has three steps; the HTTP step runs **only if the two SQL Copies succeed** (steps run in order; a failure stops the run).

---

## Step 5 — Add the retry policy

In the editor's **Retry** block:

| Field | Value |
|---|---|
| Attempts | `2` |
| Backoff | `fixed` |
| Base seconds | `60` |

This applies per step — if `copy-orders` fails once on a transient network hiccup, the runner waits 60 seconds and tries again. Two attempts give you one retry, which is plenty for transient failures and not enough to mask a real bug.

---

## Step 6 — Add the failure alert

In the **Alerts** block:

| Field | Value |
|---|---|
| On failure | ✓ |
| On long run minutes | `90` (alert if the job is still running after 90 minutes — normally it finishes in 10) |
| Recipients | empty (use framework defaults) |

The on-failure alert routes through whatever notification channel the framework has configured globally. See [Notifications](../notifications.md) for the wiring.

Save the whole job.

---

## Step 7 — Smoke test

Don't wait for 02:00 to see if it works. On the Jobs catalogue:

1. Click **▶ Run now** on `reporting-nightly-sync`.
2. The Run-with-parameters modal opens because the job has multiple steps (not because it has params — it doesn't).
3. Click **▶ Run** without changing anything.
4. The run lands on the catalogue with `RUNNING`. Click the badge to open the Run detail.
5. Watch the three steps go green.
6. When the third step succeeds, your Slack channel gets the ✅ message.

If anything fails, see [Troubleshoot](../runs/troubleshoot.md).

---

## What you've built

```
JOB reporting-nightly-sync
├── schedule: "0 2 * * *" (Europe/Paris)
├── retry: { attempts: 2, backoff: fixed, base_seconds: 60 }
├── alerts: { on_failure: true, on_long_run_minutes: 90 }
└── steps:
    1. copy-customers  (sql_copy · overwrite · 30 min timeout)
    2. copy-orders     (sql_copy · overwrite ·  1 h timeout)
    3. notify-slack    (http · POST · 30s timeout)
```

Every night at 02:00 Paris, the reporting `customers` and `orders` are atomically refreshed. The Slack channel is told when it works; the on-call gets paged when it doesn't.

---

## Adapt to your case

### More tables

Add `sql_copy` steps before `notify-slack`. They run in order; the success notification fires only when **every** copy succeeds. For 20 tables, this still reads cleanly in the run history — the timeline shows 21 rows, one per step.

If the table list grows large enough that the editor gets unwieldy, consider:

| Pattern | When |
|---|---|
| Group tables by frequency. | A `daily` job + a `weekly` job that copies less-volatile dimensions. |
| Group tables by source. | One job per source DB. |
| Use a Python step to drive a loop. | One step that reads a config and copies N tables. Loses the per-table timeline; gains compactness. |

### Different copy mode

| Source pattern | Mode |
|---|---|
| Operational DB, target is replaced wholesale every night. | `overwrite` (this recipe). |
| Snapshot pattern — keep yesterday's rows, append today's. | `append`. |
| Slowly-changing dimensions — update existing rows, insert new ones. | `upsert` (target needs a primary key). |

### Different alert routing

Swap the `notify-slack` step for:

| Destination | Step type | Notes |
|---|---|---|
| Email | `http` against an SMTP gateway, or a `python` step using the framework's notification channel. | The `python` route is the canonical one — see [Notifications](../notifications.md). |
| Microsoft Teams | `http` to a Teams incoming webhook. | Body shape is different from Slack's. |
| Generic webhook | `http` to your endpoint. | Self-describing payload. |

### Add a row-count assertion

A common safety check: bail if today's source row count is **wildly** different from yesterday's (signal that the source pipeline broke upstream). Insert a `python` step before the copies:

```python
# plugins/reporting/sanity.py
async def assert_row_counts(ctx, *, threshold_percent: float = 50.0, **_) -> dict:
    source = ctx.get_connector("ops-db")
    target = ctx.get_connector("reporting-db")
    src_count = await source.scalar("select count(*) from public.customers")
    tgt_count = await target.scalar("select count(*) from reporting.customers")
    delta = abs(src_count - tgt_count) / max(tgt_count, 1) * 100
    ctx.log.info(f"source={src_count} · target={tgt_count} · delta={delta:.1f}%")
    if delta > threshold_percent:
        raise RuntimeError(f"row-count delta {delta:.1f}% > threshold {threshold_percent}%")
    return {"source_rows": src_count, "target_rows": tgt_count, "delta_percent": delta}
```

Wired as a `python` step with `op_kwargs = { threshold_percent: 50 }`. If today's source has half as many rows as yesterday, the step fails and the on-call gets paged — before bad data lands in the reporting store.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Schedule in UTC, expected Paris time. | Job fires at 03:00/04:00 local. | Set timezone to `Europe/Paris`. |
| Retry attempts too high. | A misconfigured query keeps retrying for 15 minutes before failing. | Cap at 2-3 attempts. |
| HTTP step with hard-coded webhook URL. | The URL ends up in version control / search results. | Use `${env:SLACK_WEBHOOK_URL}` and put the secret in the env file. |
| No alert at all. | A silent failure that nobody notices for days. | Always set `alerts.on_failure = true`. |
| `append` mode on a refresh job. | The target grows forever; queries get slower. | Use `overwrite` for refresh patterns. |

---

## What's next

- [Recipe — Hourly API pull](./api-pull.md) — the same shape with an HTTP source and a Python transform.
- [Recipe — Conditional cleanup](./conditional-cleanup.md) — a job that runs only when a condition is met.
- [Notifications](../notifications.md) — the framework's notification channels in depth.
- [Steps → SQL Copy](../steps.md#sql-copy--sql_copy) — every field on the SQL Copy step type.
