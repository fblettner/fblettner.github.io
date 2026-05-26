---
title: Conditional cleanup
description: "Recipe — a daily cleanup job that runs a destructive purge only when a threshold is crossed, using a SQL Query step for the count and a guarded Python step for the delete."
keywords: [Nomaflow, recipe, cleanup, conditional, threshold, purge, guarded delete, Liberty Framework]
---

# Recipe — Conditional cleanup

Some workloads should only run when there's something to do. A cleanup job that prunes old rows is wasteful — and risky — if it fires on an already-clean table. This recipe builds a daily job that:

1. **Counts** old rows.
2. **Decides** whether to purge based on a threshold.
3. **Purges** only when the threshold is crossed.
4. **Records** what it did (or didn't) for the audit trail.

The same shape applies to any "act only if condition" workflow — archive when disk usage is high, send a digest only when there's content, rebuild a cache only when stale.

---

## What you build

| Piece | Value |
|---|---|
| **Trigger** | Cron — daily at 03:30 (right after the nightly sync). |
| **Behaviour** | Count old log rows; if there are more than 10 000, delete the oldest in batches. If under 10 000, log and skip. |
| **Steps** | 1 × `python` (count + decide) + 1 × `python` (guarded delete) + 1 × `sql_query` (audit record). |
| **Retry** | None (destructive — don't retry on transient failures, investigate instead). |
| **Alerts** | On failure only. |

---

## Prerequisites

| You need | How |
|---|---|
| A connector with a writable table to clean. | The framework's `default` pool works. |
| A target table with a timestamp column (`created_at` or similar). | Most operational tables have one. |
| A `cleanup_audit` table to record runs. | See SQL below. |

The audit table:

```sql
CREATE TABLE cleanup_audit (
    id              BIGSERIAL PRIMARY KEY,
    run_id          TEXT NOT NULL,
    table_name      TEXT NOT NULL,
    candidates      INT NOT NULL,
    deleted         INT NOT NULL,
    threshold       INT NOT NULL,
    decided_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    notes           TEXT
);
```

---

## Step 1 — Create the job shell

Click **＋ New Job** on the Nomaflow page.

| Field | Value |
|---|---|
| Id | `daily-log-cleanup` |
| Description | *Purge `app_log` rows older than 30 days, but only when more than 10 000 candidates exist.* |
| Tags | `cleanup`, `daily`, `audit` |
| Enabled | ✓ |

Schedule:

| Field | Value |
|---|---|
| Cron | `30 3 * * *` |
| Timezone | `Europe/Paris` |

Shared params:

| Key | Value |
|---|---|
| `target_connector` | `default` |
| `table_name` | `app_log` |
| `age_days` | `30` |
| `threshold` | `10000` |
| `batch_size` | `1000` |
| `dry_run` | `false` |

Setting `dry_run` as a shared param means you can flip it to `true` in the Run-with-parameters modal for a safe inspection without editing the job.

---

## Step 2 — Count old rows (decide phase)

Click **＋ Add step** → **Python**.

| Field | Value |
|---|---|
| Name | `count-old-rows` |
| Callable | `cleanup.daily:count_candidates` |
| Op kwargs | empty (all from shared params) |
| Timeout | `300` |

The Python function:

```python
# plugins/cleanup/daily.py
from datetime import datetime, timedelta, timezone
from liberty.jobs.types import StepContext

async def count_candidates(
    ctx: StepContext,
    *,
    target_connector: str,
    table_name: str,
    age_days: int,
    threshold: int,
    **_,
) -> dict:
    """Count rows older than `age_days`. Decide whether to purge."""
    cutoff = datetime.now(timezone.utc) - timedelta(days=age_days)
    target = ctx.get_connector(target_connector)
    candidates = await target.scalar(
        f"SELECT count(*) FROM {table_name} WHERE created_at < :cutoff",
        params={"cutoff": cutoff},
    )
    should_purge = candidates >= threshold
    ctx.log.info(
        f"{candidates} rows older than {age_days} days "
        f"(threshold={threshold}, should_purge={should_purge})"
    )
    return {
        "candidates": candidates,
        "threshold": threshold,
        "should_purge": should_purge,
        "cutoff": cutoff.isoformat(),
    }
```

The step's return value lands on its output in the run history. The next step reads `should_purge` and decides what to do.

---

## Step 3 — Guarded delete (act phase)

Click **＋ Add step** → **Python**.

| Field | Value |
|---|---|
| Name | `purge-old-rows` |
| Callable | `cleanup.daily:purge_if_needed` |
| Op kwargs | empty |
| Timeout | `1800` (30 minutes — generous for big deletes) |

The Python function:

```python
async def purge_if_needed(
    ctx: StepContext,
    *,
    target_connector: str,
    table_name: str,
    batch_size: int,
    dry_run: bool,
    **_,
) -> dict:
    """Read the count step's decision; purge in batches if it said so."""
    decision = ctx.previous_step("count-old-rows").output
    if not decision["should_purge"]:
        ctx.log.info(
            f"Skipping purge — {decision['candidates']} candidates "
            f"< threshold {decision['threshold']}"
        )
        return {"deleted": 0, "skipped": True, "reason": "below_threshold"}

    if dry_run:
        ctx.log.warning(
            f"DRY RUN — would delete {decision['candidates']} rows "
            f"from {table_name} (cutoff={decision['cutoff']})"
        )
        return {"deleted": 0, "skipped": True, "reason": "dry_run", "candidates": decision["candidates"]}

    target = ctx.get_connector(target_connector)
    deleted_total = 0
    while True:
        if ctx.is_cancelled():
            ctx.log.warning(f"cancelled after {deleted_total} rows")
            raise asyncio.CancelledError()
        result = await target.execute(
            f"""
            DELETE FROM {table_name}
            WHERE id IN (
                SELECT id FROM {table_name}
                WHERE created_at < :cutoff
                LIMIT :batch
            )
            """,
            params={"cutoff": decision["cutoff"], "batch": batch_size},
        )
        batch_deleted = result.rowcount
        if batch_deleted == 0:
            break
        deleted_total += batch_deleted
        ctx.log.info(f"▶ batch deleted {batch_deleted} · total {deleted_total}")

    return {"deleted": deleted_total, "skipped": False}
```

Three things to notice:

| Pattern | Why |
|---|---|
| Read the previous step's decision. | The two steps share context — the decide step gathered the facts, the act step uses them. |
| `dry_run` short-circuit. | A safety net — operators can flip the kwarg and see what *would* happen without changes. |
| Batched delete with cancellation check. | Long deletes can be interrupted cleanly. The `LIMIT … batch` shape keeps each transaction small. |

---

## Step 4 — Audit record

Click **＋ Add step** → **SQL Query**.

| Field | Value |
|---|---|
| Name | `write-audit` |
| Connector | `${kw:target_connector}` |
| Query | (see below) |
| Timeout | `30` |

The runner makes the previous step outputs available via SQL parameters. The query records what happened:

```sql
INSERT INTO cleanup_audit (
    run_id, table_name, candidates, deleted, threshold, notes
)
VALUES (
    :run_id,
    :table_name,
    :candidates,
    :deleted,
    :threshold,
    :notes
);
```

Wire the params from the previous steps' outputs (the editor surfaces these as `${out:step-name.field}` substitutions):

| Param | Source |
|---|---|
| `:run_id` | `${ctx:run_id}` |
| `:table_name` | `${kw:table_name}` |
| `:candidates` | `${out:count-old-rows.candidates}` |
| `:deleted` | `${out:purge-old-rows.deleted}` |
| `:threshold` | `${kw:threshold}` |
| `:notes` | `${out:purge-old-rows.reason}` |

The audit row is the long-term answer to "what happened on day X?" — the run rows themselves are pruned after 90 days, but `cleanup_audit` persists.

---

## Step 5 — Alerts

In the **Alerts** block:

| Field | Value |
|---|---|
| On failure | ✓ |
| On long run minutes | `30` |
| Recipients | empty |

No retry — destructive steps should fail loudly and let a human investigate.

Save the job.

---

## Step 6 — Smoke test in dry-run mode

Before letting the job loose, dry-run it:

1. Click **▶ Run now**.
2. The Run-with-parameters modal opens.
3. Flip `dry_run` from `false` to `true`.
4. Submit.

The Run detail page should show:

```
✓ count-old-rows   ·  120 ms · candidates: 12 345 · should_purge: true
✓ purge-old-rows   ·   45 ms · DRY RUN — would delete 12 345 rows · skipped
✓ write-audit      ·   12 ms · 1 row affected
```

Inspect the count — does it match what you expected? Inspect the `cleanup_audit` row — does it record the dry-run?

When satisfied, run again with `dry_run = false`. The purge runs for real.

---

## What you've built

```
JOB daily-log-cleanup
├── schedule: "30 3 * * *" (Europe/Paris)
├── params: { target_connector: default, table_name: app_log,
│             age_days: 30, threshold: 10000,
│             batch_size: 1000, dry_run: false }
├── alerts: { on_failure: true, on_long_run_minutes: 30 }
└── steps:
    1. count-old-rows   (python · decide)
    2. purge-old-rows   (python · act, guarded by step 1's output and by dry_run)
    3. write-audit      (sql_query · long-term audit record)
```

Every night at 03:30, the job:

- Counts old rows.
- Acts only if there are enough to bother.
- Honours a `dry_run` flag that lets operators inspect.
- Records every decision (even the "did nothing" ones) in `cleanup_audit`.

---

## Adapt to your case

### Different conditions

The "decide" step is the variable piece. A few common shapes:

| Decision | Decide step |
|---|---|
| **Disk usage > 80%** | Read `pg_database_size()` or filesystem stats, compare to threshold. |
| **More than N pending tasks** | `SELECT count(*) FROM tasks WHERE status = 'pending'`. |
| **Last sync older than N hours** | `SELECT now() - max(last_sync) FROM sync_state`. |
| **Source feed has new items** | Compare today's source count to yesterday's. |
| **Calendar gate** (weekly / monthly) | `if date.today().weekday() != 0: return {"should_run": False}`. |

The pattern: **decide step gathers facts, act step branches on them**. The two-step shape stays the same.

### Multiple act branches

For "if condition A, do X; if condition B, do Y" workflows, layer a third step:

```
1. decide        — return { case: 'A' | 'B' | 'noop' }
2. handle-A      — runs only if case == 'A' (uses step.enabled flip in Python)
3. handle-B      — runs only if case == 'B'
4. audit         — always
```

Use a Python step's `enabled` toggle dynamically: when the previous step's output says "case A", the handle-B step short-circuits with `return {"skipped": "case=A"}`. The timeline shows all steps; only one of them did real work.

### Per-tenant cleanup

For multi-tenant installs, externalise the tenant id as a shared param:

```
[params]
tenant_id = 1
```

Operators run the same job N times with different `tenant_id` values (via the Run-with-parameters modal). Each fire records to `cleanup_audit` with its own row — perfect audit trail for "did we clean tenant 7's logs last month?"

### Dangerous destructive jobs

For destructive jobs you want **manual-only** rather than scheduled:

- Empty the cron expression. The job is in the catalogue, ▶-runnable, but never auto-fires.
- Default `dry_run = true` in the shared params. Operators must consciously flip it to `false` to actually delete.
- Disable the step by default in the editor. Operators enable it per fire in the modal.

The combination ("scheduler can't fire it, the default is safe, every run is a deliberate human action") is the safe default for irreversible jobs.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Single big DELETE. | The transaction holds locks for minutes; concurrent reads block. | Batch the delete with `LIMIT`. |
| No cancellation check in the loop. | ✕ Cancel doesn't stop the purge. | `if ctx.is_cancelled(): raise asyncio.CancelledError()` between batches. |
| Retry on a destructive step. | A partial delete retries and might delete more than intended. | No retry on destructive steps. |
| No audit record. | Three weeks later, nobody can answer "did the cleanup run on the 7th?". | Always write to a long-term audit table. |
| Threshold too low. | Every fire purges, defeats the "act only when there's something to do" intent. | Pick a threshold matched to your data volume. |

---

## What's next

- [Recipe — Scheduled DB sync](./scheduled-sync.md) — unconditional refresh pattern.
- [Recipe — Hourly API pull](./api-pull.md) — http + python + sql_query.
- [Custom Python steps](../custom-python.md) — writing the count + act callables.
- [Steps → Python](../steps.md#python--python) — the Python step's full reference.
