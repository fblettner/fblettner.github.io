---
title: Custom Python steps
description: "Write your own Python callable for a Nomaflow step — function signature, the StepContext object, accessing connectors, logging to the run, handling cancellation, returning structured output."
keywords: [Nomaflow, custom python, callable, StepContext, plugin, cancellation, return value, Liberty Framework]
---

# Custom Python steps

The Python step is Nomaflow's escape hatch. When a workload doesn't fit `sql_query`, `sql_copy`, `http` or `ldap_sync`, you drop into Python — your function gets the same context as a built-in step, runs inside the same async runner, and lands its output in the same run history.

This page walks through the **function signature**, the **StepContext** object, the patterns that work, and the common traps.

For *when* to reach for a Python step (versus a declarative one), see [Steps → Python](./steps.md#python--python).

---

## Where the code lives

Python steps live in your **plugins** directory. A typical layout:

```
plugins/
└── reports/
    ├── __init__.py
    ├── summary.py        ← contains generate_monthly()
    └── housekeeping.py   ← contains prune_attachments()
```

The plugins directory is added to the framework's `PYTHONPATH` at startup; modules are imported on demand. A step references a function via `module.path:function_name`:

| Job step | Resolves to |
|---|---|
| `reports.summary:generate_monthly` | `plugins/reports/summary.py` → `generate_monthly(...)` |
| `housekeeping:prune_attachments` | `plugins/housekeeping/__init__.py` → `prune_attachments(...)` or `plugins/housekeeping.py` |

After adding or editing a plugin file, the framework picks it up automatically on the next run — no restart needed. If a function isn't found at run time, the step fails with `ImportError`.

---

## The function signature

A Python step function looks like this:

```python
from liberty.jobs.types import StepContext

async def generate_monthly(
    ctx: StepContext,
    *,
    period: str,
    target_path: str,
    **_,
) -> dict:
    """Generate the monthly summary PDF.

    The function's return value is recorded as the step's `output`
    in the run history. Keep it small and structured.
    """
    # ... real work ...
    return {"path": target_path, "size_bytes": 12345}
```

| Element | What it is |
|---|---|
| **`async def`** | Required. The runner schedules the function on the asyncio event loop. Synchronous functions are accepted (the runner wraps them with `to_thread`), but **prefer async** so cancellation propagates cleanly. |
| **`ctx: StepContext`** | First positional arg. The runner constructs and passes this. |
| **`*,`** | Forces every kwarg to be **named** — protects you from silent ordering bugs when the modal passes overrides. |
| **`period`, `target_path`** | Your custom kwargs. They come from the merge of: job's `params` + step's `op_kwargs` + per-fire overrides from the Run-with-parameters modal. |
| **`**_`** | Catch-all for kwargs the framework or future overrides add. Keep it — otherwise an unknown kwarg raises `TypeError`. |
| **`-> dict`** | The return value lands on the step's `output` in the run history. Return a small, structured dict. |

---

## The StepContext

`ctx` exposes the runtime affordances your function needs. The full surface:

| Member | What it gives you |
|---|---|
| **`ctx.get_connector(name)`** | Returns the SQL / API connector by name. Async; use `await` on its methods. |
| **`ctx.log.info(msg)`** / `warning` / `error` | Routes a log line to the run's log stream. **Use these, not `print`.** |
| **`ctx.params`** | The fully-merged kwargs as a dict snapshot. Same content as the function's named kwargs. |
| **`ctx.session_user`** | Account name of the user that triggered the run (or `cron` / `api` / `cli` for non-user triggers). Useful for audit writes. |
| **`ctx.run_id`** | The current run's id. Useful in audit rows. |
| **`ctx.job_id`** | The current job's id. |
| **`ctx.is_cancelled()`** | Returns `True` if the operator clicked ✕ Cancel. Check periodically in long loops. |
| **`ctx.previous_step(name)`** | The previous step's record — `.output` and `.status` are the most useful fields. |
| **`ctx.log_level`** | `"INFO"` or `"DEBUG"` for this run. Branch on it for verbose-only logging. |

### Logging

```python
ctx.log.info("starting batch")
ctx.log.info(f"▶ batch {i} of {n}")
ctx.log.warning(f"missing field on row {row_id} — skipping")
ctx.log.error(f"upstream returned 500 — retry policy will decide")
```

| Convention | Why |
|---|---|
| Use `▶` to mark progress milestones. | Reads well in the run log. |
| One `log.info` per *milestone*, not per row. | A million log lines per run is unreadable and slow to render. |
| Log row counts: `"upserted 4321 rows"`. | The number is the audit answer. |
| `log.warning` for skipped data; `log.error` only when re-raising. | The level is a search-filter on the Runs page. |

### Reading a connector

```python
async def refresh_view(ctx: StepContext, *, target_connector: str, **_) -> dict:
    target = ctx.get_connector(target_connector)
    # Single SQL statement.
    await target.execute("REFRESH MATERIALIZED VIEW reporting.daily_summary")
    # Scalar.
    count = await target.scalar("SELECT count(*) FROM reporting.daily_summary")
    ctx.log.info(f"refreshed view · {count} rows")
    return {"rows_after_refresh": count}
```

Connectors are the same objects screens and the AI assistant use — declared once, encrypted credentials, shared pool.

### Reading a previous step's output

```python
async def upsert_releases(ctx: StepContext, **_) -> dict:
    http_step = ctx.previous_step("fetch-releases")
    if http_step.status != "SUCCEEDED":
        raise RuntimeError("upstream step failed — refusing to upsert")
    payload = http_step.output["body"]  # decoded JSON
    # ... upsert ...
```

Use the previous step's output to chain phases of a workflow — Hourly API pull's [recipe](./workflows/api-pull.md) is built around this pattern.

---

## Cancellation

The ✕ Cancel button sends a cancellation signal to the running step. **Cooperative** Python honours it; non-cooperative Python doesn't.

### The async-friendly pattern

```python
import asyncio

async def long_loop(ctx: StepContext, *, items: list, **_) -> dict:
    processed = 0
    for i, item in enumerate(items):
        # Yield to the event loop every 100 items so cancellation lands.
        if i % 100 == 0:
            await asyncio.sleep(0)
            if ctx.is_cancelled():
                ctx.log.warning(f"cancelled at item {i}/{len(items)}")
                raise asyncio.CancelledError()
        await process_one(item)
        processed += 1
    return {"processed": processed}
```

| Pattern | Why |
|---|---|
| `await asyncio.sleep(0)` periodically. | Yields control to the event loop. Without it, your function holds the loop and ✕ Cancel can't get through. |
| `ctx.is_cancelled()` check. | Returns `True` once the cancel signal arrives. Raise `CancelledError` to bubble up. |
| Log the cancellation reason. | Operators reading the run later need to know *where* you stopped. |

### CPU-bound work

For genuinely synchronous CPU work (PDF generation, image processing, heavy numpy):

```python
async def render_pdf(ctx: StepContext, *, data: dict, **_) -> dict:
    # Offload to a thread so the event loop stays free.
    pdf_bytes = await asyncio.to_thread(blocking_pdf_render, data)
    return {"bytes": len(pdf_bytes)}
```

`to_thread` runs the blocking function in the runner's thread pool. The event loop stays responsive; the framework's UI stays live during the render.

---

## Returning structured output

A step that returns `None` is a black box. The Run detail page shows "no output" and operators reading the history three weeks later can't tell *what happened*.

Always return a small dict:

| Pattern | Example |
|---|---|
| Counts. | `{"rows_affected": 4321}` |
| Per-table counts. | `{"customers": 1234, "orders": 5678}` |
| Status + reason. | `{"status": "skipped", "reason": "threshold not crossed"}` |
| Identifiers of created objects. | `{"report_id": 42, "path": "/exports/report-42.pdf"}` |

What **not** to return:

| Don't | Why |
|---|---|
| The full result set (a list of 10 000 rows). | Bloats the run history, hard to render. Aggregate down to numbers. |
| Pickled / unserialisable objects. | The output is JSON-serialised; complex types fail at save time. |
| Sensitive data (PII, tokens). | The run history is visible to anyone with `job:*`. Redact before returning. |

---

## Raising on failure

When something's wrong, **raise**:

```python
if response.status_code != 200:
    raise RuntimeError(
        f"upstream returned {response.status_code} — body: {response.text[:200]}"
    )
```

The runner catches the exception, marks the step as `FAILED`, records the traceback, and consults the retry policy. **Don't** catch and swallow exceptions — the runner needs them to drive the failure flow.

Common exception types and what they signal:

| Exception | Signal |
|---|---|
| `RuntimeError` | Generic failure; the message is the diagnosis. |
| `ValueError` | An input was wrong (a kwarg, a parsed field). |
| `LookupError` / `KeyError` | A field that should exist doesn't. |
| Connector-specific exceptions (`OperationalError`, `IntegrityError`) | Surface naturally — don't wrap. |

---

## Long-running steps

For steps that take more than a couple of minutes:

| Pattern | Why |
|---|---|
| Bump `timeout_seconds` on the step. | The default 1 h works for most; a 6 h ETL needs an explicit longer value. |
| Emit progress logs every 30 s. | The operator watching the live log needs to see life signs. |
| Check `ctx.is_cancelled()` at every checkpoint. | A long step that ignores cancellation is a problem at 3 AM. |
| Don't fight `KeyboardInterrupt`. | Local debugging — let Ctrl-C work. |

A typical heartbeat:

```python
async def big_etl(ctx: StepContext, **_) -> dict:
    total_rows = 1_000_000
    processed = 0
    last_log = 0
    while processed < total_rows:
        # ... do a batch ...
        processed += batch_size
        if processed - last_log >= 50_000:  # every 50k rows
            ctx.log.info(f"▶ {processed} / {total_rows} ({processed/total_rows:.0%})")
            last_log = processed
        if ctx.is_cancelled():
            raise asyncio.CancelledError()
    return {"rows": processed}
```

---

## Testing your function

The function is plain Python — test it like any other async function:

```python
# tests/test_reports_summary.py
import pytest
from reports.summary import generate_monthly

@pytest.mark.asyncio
async def test_generate_monthly(fake_ctx):
    result = await generate_monthly(fake_ctx, period="2026-04", target_path="/tmp/out.pdf")
    assert result["size_bytes"] > 0
    assert (fake_ctx.log.calls[-1] == "INFO", "wrote 2026-04 summary")
```

A small **fake StepContext** with stubbed `get_connector` and an in-memory log capture is enough for most tests. The framework's test helpers expose `build_fake_ctx(...)` for that purpose.

---

## Reusing functions across jobs

A well-shaped Python step is a normal function — same module-level imports, same docstring, same testability. Share helpers across jobs by putting them in shared modules:

```python
# plugins/utils/connectors.py
async def assert_row_count(target, sql: str, *, min_rows: int):
    n = await target.scalar(sql)
    if n < min_rows:
        raise RuntimeError(f"row count {n} below floor {min_rows}")
    return n
```

```python
# plugins/reports/summary.py
from utils.connectors import assert_row_count

async def generate_monthly(ctx, *, period, **_):
    target = ctx.get_connector("reporting")
    rows = await assert_row_count(target, "SELECT count(*) FROM orders", min_rows=100)
    # ...
```

Refactor as you would normal application code — the framework doesn't care.

---

## Common traps

| Trap | Symptom | Fix |
|---|---|---|
| Defining the function as `def`, not `async def`. | Step runs but the event loop is blocked; UI freezes. | Use `async def`. |
| Catching every exception. | Steps that "always succeed" but produce wrong results. | Let exceptions bubble unless you know how to handle them. |
| `print(...)` instead of `ctx.log.info(...)`. | The output goes to the framework's stdout, not the run log. | Always use `ctx.log`. |
| Loading the whole result set into memory. | Memory pressure, slow run. | Stream — `async for row in target.stream(sql)` if your connector supports it. |
| Returning a big object. | Run history bloats, save fails. | Return aggregates, not raw data. |
| Hard-coding credentials. | Secret in source control. | Use connectors; never put credentials in a Python step. |

---

## What's next

- [Steps → Python](./steps.md#python--python) — the step type's editor fields.
- [Recipe — Hourly API pull](./workflows/api-pull.md) — a Python step that reads the previous HTTP step's output.
- [Recipe — Conditional cleanup](./workflows/conditional-cleanup.md) — a two-Python-step decide/act pattern.
- [Apps & Plugins → Plugins](../framework/apps/plugins.md) — broader plugin layout in the framework.
- [Troubleshoot](./runs/troubleshoot.md) — diagnosing a failing Python step.
