---
title: Write a callable
description: "The function contract for a python step's callable — signature, auto-injected kwargs (connectors / ctx / settings), return-value normalisation, sync vs async, error and cancellation semantics."
keywords: [Liberty Framework, plugin, callable, python step, function signature, ConnectorRegistry, RunContext, StepResult, StepFailed]
---

# Write a callable

A Nomaflow `python` step calls one function in your plugin. The framework imports the module, looks up the function by name, builds the kwargs, awaits or threads the call, and turns the return value into a `StepResult`. This page covers the contract — what your function gets, what it should return, what to do when things go wrong.

---

## The minimal signature

```python
# plugins/myapp/cleanup.py
async def purge_old_sessions(**kwargs) -> dict:
    return {"rows_affected": 0}
```

That's the minimum that works. Referenced from `jobs.toml`:

```toml
[[jobs.steps]]
type = "python"
name = "purge"
callable = "myapp.cleanup:purge_old_sessions"
```

`**kwargs` catches everything the framework injects (more on that below) plus whatever the step's `op_kwargs` carries. Returning `{"rows_affected": N}` lands a count on the run history.

A more realistic version takes its arguments by name:

```python
async def purge_old_sessions(
    *,                                # kwargs-only signature is the convention
    connectors,                       # auto-injected
    ctx,                              # auto-injected
    apps_id: int,                     # from op_kwargs
    max_age_days: int = 30,           # from op_kwargs, with default
    **_,                              # swallow the rest
) -> dict:
    ...
```

---

## What the framework auto-injects

Three kwargs are auto-injected **when the function declares them by name** (the executor inspects `signature` to decide). A function that doesn't declare them simply doesn't get them — no `TypeError`.

| Kwarg | Type | What it gives you |
|---|---|---|
| **`connectors`** | `ConnectorRegistry` | Access to every SQL and API pool defined in `connectors.toml`. `connectors.pools.engine("default")` returns the SQLAlchemy async engine. |
| **`ctx`** | `RunContext` | The per-run state: `ctx.run_id`, `ctx.job_id`, `ctx.trigger`, `ctx.prev_rows_affected`, `ctx.parent_chain`. Pass `ctx.run_id` to your logs / audit writes so they line up with the Nomaflow run record. |
| **`settings`** | `Settings` | Live config — `settings.connectors.config_path`, `settings.app`, etc. Useful for callables that operate on the config files themselves. |

A function that swallows arbitrary kwargs (`**_`) gets **all three** whether it asked or not. A function that names some explicitly and rejects the rest (no `**`) gets only what it named.

### The op_kwargs layer

On top of the auto-injections, your function receives every key the step declares in `op_kwargs`:

```toml
[[jobs.steps]]
type = "python"
callable = "myapp.cleanup:purge_old_sessions"
op_kwargs = { apps_id = 10, max_age_days = 30 }
```

The function gets `apps_id=10, max_age_days=30` in addition to the auto-injections. Operator-provided values **win** over auto-injections on key conflict — useful for tests that pass a fake `connectors` registry.

---

## The RunContext — what you can read

`ctx` is a small dataclass:

| Field | What it carries |
|---|---|
| `ctx.run_id` | The Nomaflow run id (`run_a8c4d`). Pass to logs / audit rows. |
| `ctx.job_id` | The job id that produced this run (`nomajde-daily-sync`). |
| `ctx.trigger` | The `Trigger` that fired the run — cron / manual / API / CLI. |
| `ctx.prev_rows_affected` | Rows affected by the previous step in the same job (or `None` for the first step). |
| `ctx.parent_chain` | When this run was spawned by a `call_job` step, the chain of `(job_id, run_id)` ancestors. Empty for top-level runs. |

You won't usually need all of it — `ctx.run_id` is by far the most used (audit logging, log binding). The rest is there when you need it.

---

## Return value — what becomes a StepResult

The framework normalises your return value into a `StepResult`. Four accepted shapes:

| Return | Becomes |
|---|---|
| `None` (or no return) | Empty `StepResult` — no rows_affected, no extras. |
| `int` | `StepResult(rows_affected=<int>)`. |
| `dict` | `StepResult(extras=<dict>)`. The dict is JSON-serialised into the run history. |
| `StepResult(...)` | Used verbatim. Import from `liberty.jobs.steps.base` to construct one with both `rows_affected` and `extras`. |

Anything else raises `StepFailed` — a typo or a stray non-serialisable object lands on the run as a failure instead of silently dropping data.

### The recommended return

Most callables return a dict:

```python
return {"rows_affected": deleted, "tenant": apps_id, "cutoff": cutoff.isoformat()}
```

| Key | Where it surfaces |
|---|---|
| `rows_affected` | Sum-rolled into the parent run's `rows_affected` on the Nomaflow Runs page. The grid uses it for the at-a-glance "X rows touched" column. |
| Other keys | Stored on the step's record as `extras`. Visible in the Run detail page's per-step expansion. |

Keep the dict **small and structured** — single integers, short strings, ISO timestamps. The run history records it; a 10 MB dict bloats the database and the UI.

---

## Sync vs async

Both work. The executor decides via `inspect.iscoroutinefunction`:

| Function style | Behaviour |
|---|---|
| `async def foo(...)` | Awaited directly. The framework's event loop runs it. |
| `def foo(...)` | Run in `asyncio.to_thread(...)` — a worker thread. The event loop stays free. |

For database-bound work, prefer **async** — the SQLAlchemy async engines integrate naturally. For CPU-bound work (PDF generation, image processing, parsing), sync-in-thread is fine.

Mixing is fine too: an async function can `await asyncio.to_thread(blocking_func, ...)` for one expensive call without blocking the loop.

---

## Cancellation — what you must do

The framework cancels a step in two scenarios:

| Trigger | What you should do |
|---|---|
| The operator clicks ✕ Cancel on the Run detail page. | The executor sends `CancelledError`; honor it. |
| The step exceeds its `timeout_seconds`. | Same — `asyncio.wait_for` cancels the awaited call. |

For async functions: cancellation propagates through `await` automatically. The function must let it through — don't catch `asyncio.CancelledError` and continue.

For sync functions: cancellation only stops at `await` boundaries. If your function is a long synchronous loop with no async checkpoints, **cancellation won't stop it**. The fix: yield to the event loop periodically:

```python
async def long_loop(*, items, **_):
    processed = 0
    for i, item in enumerate(items):
        # Yield every 100 items so cancellation can land.
        if i % 100 == 0:
            await asyncio.sleep(0)
        await process(item)
        processed += 1
    return {"processed": processed}
```

Or use `ctx.is_cancelled()` if you genuinely can't yield (the runner provides that helper for cooperative cancellation).

---

## Errors — how to fail correctly

Two exception classes are special to the framework:

| Raise | Effect |
|---|---|
| `StepFailed(msg)` | Marks the step as failed; counts against the retry policy. |
| `StepCancelled(msg)` | Marks the step as cancelled; does **not** retry. |
| `asyncio.CancelledError` | Propagates untouched (the asyncio convention). |
| **Anything else** | Wrapped as `StepFailed` automatically. Treated as a regular failure for retry purposes. |

Two patterns:

```python
# Idiomatic — let exceptions out, the framework wraps them
async def maybe_fail(**_):
    rows = await db.execute(...)
    if not rows:
        raise RuntimeError("no rows returned — upstream issue")
    return {"rows_affected": len(rows)}
```

```python
# Explicit StepFailed when you want a more specific error message
from liberty.jobs.steps.base import StepFailed

async def maybe_fail(**_):
    rows = await db.execute(...)
    if not rows:
        raise StepFailed("no rows returned — check the upstream job")
    return {"rows_affected": len(rows)}
```

Both end with the same outcome (step marked failed, retry policy applied). `StepFailed` is just more explicit.

### What NOT to catch

Don't catch `asyncio.CancelledError` or `StepCancelled`. The framework needs them to propagate so cancellation works. Catching them — even to log and re-raise — is a smell; either you're not re-raising correctly (cancellation silently dies) or you're adding complexity for no gain (the framework already logs cancelled steps).

---

## Logging — the run-bound logger

Use a standard Python logger:

```python
import logging
_log = logging.getLogger(__name__)

async def my_function(*, ctx, **_):
    _log.info("starting · run_id=%s", ctx.run_id)
    ...
    _log.info("done · rows=%d · run_id=%s", rows, ctx.run_id)
```

The framework's logging configuration tags log records with the active run id automatically via a `ContextVar` set by the runner. Including `ctx.run_id` in the message is still useful — it's redundant when the framework's log format already shows the run id, but harmless otherwise.

The Run detail page reads the log table populated by these messages — every `INFO` / `WARNING` / `ERROR` line during the step's execution shows up there.

---

## A complete worked example

```python
# plugins/reports/monthly.py
import logging
from datetime import date, timedelta

from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import RunContext, StepFailed

_log = logging.getLogger(__name__)


async def generate_monthly_summary(
    *,
    connectors: ConnectorRegistry,
    ctx: RunContext,
    apps_id: int,
    target_table: str = "monthly_summary",
    **_,
) -> dict:
    """Aggregate last month's invoices into the monthly_summary table."""
    target = connectors.pools.engine("reporting")
    last_month_start = date.today().replace(day=1) - timedelta(days=1)
    period = last_month_start.strftime("%Y-%m")

    _log.info("generate monthly summary · period=%s · run_id=%s", period, ctx.run_id)

    async with target.begin() as conn:
        # 1. Delete any existing snapshot for this period
        result = await conn.execute(
            text(f"DELETE FROM {target_table} WHERE period = :period AND apps_id = :apps_id"),
            {"period": period, "apps_id": apps_id},
        )
        _log.info("deleted %d stale rows · run_id=%s", result.rowcount, ctx.run_id)

        # 2. Aggregate and insert
        result = await conn.execute(
            text(f"""
                INSERT INTO {target_table} (apps_id, period, revenue, invoice_count)
                SELECT :apps_id, :period, SUM(total), COUNT(*)
                FROM invoices
                WHERE apps_id = :apps_id
                  AND DATE_TRUNC('month', invoice_date) = :first_of_month
            """),
            {
                "apps_id": apps_id,
                "period": period,
                "first_of_month": last_month_start.replace(day=1),
            },
        )

        rows = result.rowcount or 0
        if rows == 0:
            raise StepFailed(f"no invoices to aggregate for {period} apps_id={apps_id}")

    _log.info("inserted %d summary row(s) · run_id=%s", rows, ctx.run_id)
    return {"rows_affected": rows, "period": period, "tenant": apps_id}
```

Referenced from `jobs.toml`:

```toml
[[jobs.steps]]
type = "python"
name = "monthly-summary"
callable = "reports.monthly:generate_monthly_summary"
op_kwargs = { apps_id = 10, target_table = "monthly_summary" }
```

The function:
- Declares its required kwargs explicitly (`connectors`, `ctx`, `apps_id`).
- Uses defaults for optional ones (`target_table`).
- Catches the rest with `**_` so the framework's injections don't `TypeError`.
- Returns a small structured dict.
- Logs at INFO with `ctx.run_id` for grep-ability.
- Raises `StepFailed` explicitly when the business condition (no invoices) is unmet.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Function declares positional args. | The injection by-name fails on the conflict. | Use `*,` to force kwargs-only signatures. |
| Function doesn't accept `**` and rejects an injected kwarg. | `TypeError: function got unexpected keyword argument 'connectors'`. | Either name the kwarg explicitly or swallow with `**_`. |
| Sync function that's a tight loop without yielding. | ✕ Cancel doesn't stop it; the step runs to completion. | Either async-ify with `await asyncio.sleep(0)` checkpoints, or split into smaller chunks. |
| Returning a large object (a list of 10k dicts). | The run history bloats; the Run detail page loads slowly. | Return aggregates, not raw data. Persist large data to a table, return its row count + key. |
| Returning a non-JSON-serializable value. | The framework fails to record it. | Coerce to JSON-safe types: ISO timestamps, lists/dicts of primitives. |
| Catching every exception and swallowing. | The step always succeeds; failures are invisible. | Let exceptions propagate, or re-raise after logging. |
| Editing the `.py` file and expecting the next run to pick it up. | The change isn't reflected. | Restart the framework — Python's import cache holds the old code. |

---

## What's next

- [ETL primitives](./etl-primitives.md) — ready-made helpers your callable can compose.
- [Deploy and debug](./deploy-and-debug.md) — the apps repo layout, the dev shell, logs.
- [Nomaflow → Custom Python steps](../../../nomaflow/custom-python.md) — operator-facing view of the same callable.
