---
title: Custom Python steps
description: "Write a Python function for a Nomaflow python step: where it lives, what it receives (its arguments, connectors, the run context), what it returns, how it logs to the run, how it fails and how it is cancelled."
keywords: [Nomaflow, custom python, callable, plugin, op_kwargs, connectors, RunContext, StepResult, register_namespace, Liberty Next]
---

# Custom Python steps

When no other step type fits, a `python` step calls a function you write. The function lives in a plugin of the apps folder, receives its arguments from the job, and its result lands in the run like any other step.

This page is the short version for job authors. The full reference — injected arguments, return values, cancellation, worked example — is in [Write a callable](../framework/build/plugins/write-a-callable.md), and deployment in [Deploy and debug](../framework/build/plugins/deploy-and-debug.md).

---

## Where the function lives \{#where\}

A plugin is a Python package in the `plugins/` folder next to the configuration folder (`LIBERTY_APPS_DIR/../plugins`). The step names the function as `package.module:function`:

```toml title="jobs.toml"
[[jobs.steps]]
type = "python"
name = "refresh-summary"
callable = "reports.summary:refresh"
op_kwargs = { period = "2026-10", target_connector = "reporting" }
```

Modules are imported once: after changing the code, restart the server (`./liberty restart` or `liberty-ops restart`).

---

## What the function receives \{#arguments\}

```python title="plugins/reports/summary.py"
import logging
from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import RunContext, StepResult

_log = logging.getLogger(__name__)


async def refresh(*, period: str, target_connector: str,
                  connectors: ConnectorRegistry, ctx: RunContext) -> StepResult:
    _log.info("refresh %s · run %s", period, ctx.run_id)
    conn = connectors.sql(target_connector)          # connectors.api(...) for an API connector
    await conn.execute("summary_refresh_put", {"PERIOD": period})   # a named query of the connector
    ...
    return StepResult(rows_affected=count, extras={"period": period})
```

| Argument | Comes from |
|---|---|
| Its own arguments (`period`, `target_connector`) | The job's shared parameters, then the step's `op_kwargs` (the step wins), then the values typed in **Run with parameters**. Values are converted to the annotated type (`apps_id: int`). |
| `connectors` | The connector registry — run a connector's named queries or endpoints. Given only if the function declares it. |
| `ctx` | The run: `ctx.run_id`, `ctx.job_id`, `ctx.trigger`, `ctx.prev_rows_affected` (rows of the previous step). Given only if declared. |
| `settings` | The server settings. Given only if declared. |
| `app_state` | The running server's live state (applications, Data Explorer models, dictionary…), for a function that acts on the configuration itself — the dictionary refresh job does. Given only if declared. |

The function may be `async` (recommended) or a plain `def`, which runs in a worker thread.

---

## What it returns \{#return\}

| Return | In the run |
|---|---|
| `None` | Nothing more. |
| an `int` | The number of rows affected. |
| a `dict` | Kept as the step's details (not counted as rows). |
| a `StepResult(rows_affected=…, extras={…})` | Both. |

Any other type — a `bool` for instance — fails the step, so that a mistake does not pass for a success.

---

## Logging to the run \{#logging\}

The run log keeps the lines of the `liberty.*` loggers and of the namespaces a plugin registers. Register the package once, in `plugins/reports/__init__.py`:

```python
from liberty.jobs.runlog import register_namespace
register_namespace("reports")
```

Then `logging.getLogger(__name__)` in any module of the package writes to the run log, and `print()` does not. The run's log level (**Run with parameters** → log level) applies.

---

## Failing and cancelling \{#errors\}

- Let exceptions out: the step fails with the message, the job's **Retry policy** applies, the following steps are skipped. Raise `StepFailed("…")` (from `liberty.jobs.steps.base`) for a clearer message.
- **Cancel** on the job's card cancels an `async` function at its next `await`. A plain `def` cannot be interrupted: the run is marked cancelled, the function finishes on its own.

---

## Tips \{#tips\}

- Put SQL in the connector's named queries and call them from the function: the query stays visible and testable in the connector page.
- Keep functions short; split long work into several steps so the run detail shows where it stopped.
- Test the function like any Python code, passing a registry pointed at a test database.
