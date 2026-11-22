---
title: Plugins
description: "Custom code an application brings to Liberty Next — where plugin packages live, how a Nomaflow python step, a screen's call_plugin action and an API endpoint call a module:function, what the framework injects (connectors, ctx, settings, changesets), how to query connectors and what to return; and the pages an application ships."
keywords: [Liberty Next, plugins, custom Python, callable, module:function, python step, call_plugin, connectors, RunContext, StepResult, op_kwargs]
---

# Plugins

Everything in Liberty Next is configured, except one thing: **plugins**, plain Python functions for what a query or an API call cannot express — a transformation, a call sequence specific to a source system, an integration.

A plugin function is referenced as `"package.module:function"` from these places:

| Caller | Setting |
|---|---|
| A Nomaflow **`python`** step | `callable` and `op_kwargs` on the step — see [Step types](../../nomaflow/steps.md). |
| A screen action **`call_plugin`** | `callable` and `param_binds` on the action — see [Actions and lifecycle](../build/screens/actions-and-lifecycle.md#types). |
| An **API endpoint** | **Served by a function**: the function answers instead of an HTTP call — see [API endpoints](../build/api-endpoints.md#function). |
| A **generator** of an API connector | **Create from…** in the endpoint list — see [API endpoints](../build/api-endpoints.md#create-from). |
| A **page** an application ships | Its `call(…)` — see [below](#pages). |

The lists of the editors offer the top-level functions of `plugins/` whose name starts with `j_`, with the first line of their docstring; an endpoint can only name such a function.

The task pages are under [Logic → Plugins](../build/plugins/overview.md): [Write a callable](../build/plugins/write-a-callable.md), [ETL primitives](../build/plugins/etl-primitives.md), [Deploy and debug](../build/plugins/deploy-and-debug.md). This page is the summary.

---

## Where plugins live \{#folder\}

Plugins are Python packages in the `plugins/` folder next to the apps configuration folder — `<LIBERTY_APPS_DIR>/../plugins/` (in Docker, `/apps/plugins`):

```text
apps/
├── config/            ← LIBERTY_APPS_DIR
└── plugins/
    └── billing/
        ├── __init__.py
        └── invoicing.py   ← callable = "billing.invoicing:reissue_drafts"
```

At startup the server puts this folder at the front of the Python path and logs `liberty.plugins importable from …`. A package installed in the server's Python environment works too; its functions are referenced the same way.

The module is imported when the step or the action runs, not when the configuration is saved: a wrong path shows up as a failed run with the import error.

---

## The function \{#function\}

```python
# plugins/billing/invoicing.py
from liberty.jobs.steps.base import StepResult

async def reissue_drafts(*, connectors, ctx, period: str, dry_run: bool = False, **_) -> StepResult:
    billing = connectors.sql("billing")
    drafts = (await billing.execute("drafts_for_period", {"PERIOD": period})).rows
    if dry_run:
        return StepResult(rows_affected=0, extras={"matched": len(drafts)})
    for d in drafts:
        await billing.execute("issue_invoice", {"INVOICE_ID": d["INVOICE_ID"]})
    return StepResult(rows_affected=len(drafts), extras={"run": ctx.run_id})
```

### What it receives

| Argument | Source |
|---|---|
| Its own parameters (`period`, `dry_run`) | The step's `op_kwargs`, or the action's `param_binds`. Values are converted to the annotated type (`int`, `bool`, dates…). |
| **`connectors`** | Injected: every SQL and API connector. |
| **`ctx`** | Injected for a step: the run's context — `run_id`, `job_id`, `trigger`, `prev_rows_affected`, `parent_chain`. |
| **`settings`** | Injected: the live configuration. |
| **`changesets`** | Injected for a step: the change-package store. |

An injected argument is passed only when the function declares it by name or accepts `**kwargs`; a value set in `op_kwargs` under the same name wins.

### Querying connectors

| Call | Returns |
|---|---|
| `await connectors.sql("billing").execute("query_name", {"PARAM": value})` | A result with `.rows` (list of dicts) and `.rowcount`. Runs the named query with its tokens and dictionary rules; pass `user="…"` to set the name written by `LOGIN` / `{{LOGIN}}` (`ANONYMOUS` otherwise). |
| `await connectors.api("crm").call("endpoint_name", {"param": value})` | The endpoint's response. |

### What it returns

| Return | Recorded as |
|---|---|
| `None` | Nothing. |
| `int` | The number of rows affected. |
| `dict` | Extra details stored with the step (not a row count). |
| `StepResult(rows_affected=…, extras={…})` | Both. |

From a screen action, the return value is kept in the chain's context when the action has `bind_result` on, for the next steps to read.

### Sync or async

An `async def` function is awaited; a plain `def` runs in a worker thread. A thread cannot be interrupted: cancelling the run marks it cancelled, but the function goes on until it returns — long work is better written `async`. Raising an exception fails the step (and triggers its retries); `StepFailed` gives a clearer message. Messages logged through `register_namespace` appear in the run's log — see [Write a callable](../build/plugins/write-a-callable.md).

---

## Pages an application ships \{#pages\}

A configured screen is a grid and a form. What is neither — a structure to browse, a guided flow — an application ships as a **page**: one built JavaScript module per page, in its plugin folder.

```text
plugins/
└── crm/
    └── pages/
        └── pipeline.js     ← opens at /app/crm/pipeline
```

- A menu entry of type `page` with the target `/app/<app>/<page>` opens it in a tab — see [Item types](../build/menus/item-types.md#app-page).
- The permission is `page:<app>:<page>`, asked of the menu entry too; the role editor knows it.
- The module's default export is a function that receives what the framework's own pages are made of — React, the shared components, the shared grid (search, filters, sort, grouping, columns, export, saved views), the API client, the theme, the interface language — and returns the component to draw. The page imports nothing, so it looks like the rest of the application.
- The shared grid (`Grid`) takes the page's columns and rows. With a `detail` function, a row can be opened: every row gets a chevron, and what the function returns is drawn under the row — an object's dependencies, a nested list.
- The contract carries its `version`: `detail` needs version 3 or later, which a page that relies on it can check first.
- `call('module:j_function', { … })` runs a function of the application and returns its answer; the caller needs `plugin:<that reference>`.
- The page runs in the user's session: it reads only what that user's permissions let the API answer.

---

## Testing \{#testing\}

A plugin is ordinary Python: test it with pytest, passing fake `connectors` and `ctx` as arguments.

```python
from unittest.mock import AsyncMock, MagicMock
from billing.invoicing import reissue_drafts

async def test_dry_run_counts_only():
    billing = MagicMock(execute=AsyncMock(return_value=MagicMock(rows=[{"INVOICE_ID": 1}, {"INVOICE_ID": 2}])))
    connectors = MagicMock(sql=MagicMock(return_value=billing))
    result = await reissue_drafts(connectors=connectors, ctx=MagicMock(run_id="r1"), period="2026-05", dry_run=True)
    assert result.extras == {"matched": 2}
```

---

## Good practices

- **One function per step.** Short functions are easier to follow in the run history.
- **Annotate the parameters** (`period: str`, `apps_id: int`): values coming from the UI are converted, and a wrong value fails clearly.
- **Call named queries** through `connectors.sql(...)` rather than raw SQL: the query stays visible in Settings, and its tokens and dictionary rules apply.
- **Let exceptions out.** A `try / except: pass` turns a failure into a green run that did nothing.
- **Keep the plugins with the apps configuration**, under version control, so they move with it between environments.

---

## What's next

- [Logic → Plugins](../build/plugins/overview.md) — the step-by-step pages.
- [Step types](../../nomaflow/steps.md) — the `python` step.
- [Actions and lifecycle](../build/screens/actions-and-lifecycle.md) — `call_plugin` from a screen.
