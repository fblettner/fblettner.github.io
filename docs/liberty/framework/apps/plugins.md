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
- `call('module:j_function', { … })` runs a function of the application and returns its answer; the caller needs `plugin:<that reference>`.
- The page runs in the user's session: it reads only what that user's permissions let the API answer.

### What the page receives \{#page-contract\}

The object the page receives is a contract: a field is added, never renamed or removed, and its `version` goes up when a page could tell the difference. A page that relies on a recent field checks `version` first and says so.

| Field | Gives | Version |
|---|---|---|
| `version`, `app`, `page` | The contract's version, the application and the page being drawn. | 1 |
| `React`, `styled`, `theme`, `ui`, `icon` | The framework's React, its styled components, the theme's tokens (they follow dark / light), the shared components (`PageLayout`, `Card`, `Button`, `Input`, `SearchSelect`, `Tag`, `Banner`, `Modal`…), a menu icon by its name. | 1 |
| `api`, `call` | The API client, in the user's session; `call` runs a function of the application. | 1 |
| `useLang`, `useUser`, `useOpen` | Hooks: the interface's language (the page ships its own texts), who is signed in, a function that opens a route of the application in its tab. | 1 |
| `useCan` | Hook: a function that says whether the user holds a permission (`job:<id>`, `plugin:…`) — to show a button only to who may use it. The server decides in the end. | 1 |
| `Grid` | The shared grid. | 2 |
| `Grid` with `detail` | A row of the grid opens. | 3 |
| `useAssistantContext(title, facts)` | Tells the [assistant](../ai-assistant.md#context) what the user is looking at. | 4 |
| `Diagram` | A diagram laid out by the server, drawn — see [below](#page-diagram). | 5 |
| `download(path, name, body)` | Gives the user a file a route of the server answers — see [below](#page-download). | 6 |

#### The assistant on a page \{#page-assistant\}

`useAssistantContext('Cross Reference', { object: 'P4210', form: 'W4210A' })` gives a title and a few facts in a few words — the object open, the tab, a filter, never rows. Blank facts are left out, long ones cut, 20 at most. The chat shows them as its usual chip, sends them with each question while this page is the one on screen, and offers the application's starter questions for the page — declared like a screen's, under the page's name (Liberty Next → Logic → AI, *Starter questions per screen*, or `[ai.<app>.screens.<page>]`).

#### A diagram \{#page-diagram\}

For a picture of a platform or a system, the application's function builds the model — **groups** (a tier, drawn as a column, or a host, drawn as a box inside its tier), **nodes** (a card in a group: a kind, a label, a second line, a state `ok` / `warn` / `down` / `unknown`, whether it is declared, a few badges) and **links** (from a card or a box to another, with a label and the *evidence* each one is drawn on) — and returns it laid out by `liberty.diagram.lay_out`, on the server. The page draws it with `<Diagram layout={answer.diagram} picked={id} onPick={(node) => …} words={{ ok, warn, down, unknown, undeclared }} />`, in a box that has a height: the tiers as columns, a card per element with its state, a dashed outline for what is not declared, the links on their paths, a legend, the zoom. The same coordinates give the picture of a PDF report: `liberty.diagram.render_svg` paints it in print colours, the state as a mark and a word, each text cut to fit. In the PDF, a picture placed on a landscape page has that page to itself: the heading written just above it goes onto the landscape page with its number — the table of contents points at it there —, and the chapter that follows starts on a new portrait page.

#### A file for the user \{#page-download\}

`download('/api/reports/<scope>/<id>/run', 'report.pdf', { format: 'pdf', params })` asks a route of the server for a file — a report as a PDF, an export — and saves it on the user's machine: with a body the route is called with a `POST`, without one with a `GET`. The file takes the name the server gives it, else the one passed. A refusal comes back as the server's message, for the page to show. The applications' own pages use it for their documents — the platform report, the OCI estimate, the weekly upgrade report.

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
