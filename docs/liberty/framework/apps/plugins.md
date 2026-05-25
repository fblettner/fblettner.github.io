---
title: Plugins
description: "How to write custom Python code that the framework calls — Nomaflow job step callables, password validators, dispatch hooks. Drop a Python module under liberty-apps/plugins/, reference it by import path from TOML, the framework wires sys.path and calls it with the runtime context."
keywords: [Liberty Framework, plugins, custom Python, callable, jobs, hooks, password validator, sys.path, liberty-apps, plugins folder]
---

# Plugins

The framework's job step engine, password validator and a few other extension points accept **callable references** of the form `"module.path:function"`. The function is plain Python; the framework imports it lazily on first use and calls it with the runtime context as keyword arguments.

This is the **only** place where a customer install runs custom code — the rest of the configuration is purely declarative. Use plugins for what TOML can't express: bespoke transformations, ERP-specific quirks, external system integrations.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>WHERE THEY LIVE</div>
    <div style={{fontSize: '12px'}}><code>liberty-apps/plugins/&lt;package&gt;/</code> — added to <code>sys.path</code> at startup.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>REFERENCED FROM</div>
    <div style={{fontSize: '12px'}}>TOML — <code>callable = "billing.invoicing:run"</code></div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SIGNATURE</div>
    <div style={{fontSize: '12px'}}><code>def run(**ctx) -&gt; dict \| None</code> — sync or <code>async def</code>.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>EXTENSION POINTS</div>
    <div style={{fontSize: '12px'}}>Job <code>python</code> step · password validator · dispatch hooks</div>
  </div>
</div>

---

## Folder layout

A plugin is a regular Python package under `liberty-apps/plugins/`:

```text
liberty-apps/
└── plugins/
    └── billing/
        ├── __init__.py        ← package marker
        ├── invoicing.py       ← step callables
        ├── adjustments.py
        └── README.md
```

The framework adds `liberty-apps/plugins/` to `sys.path` at startup (when `LIBERTY_APPS_DIR` is set; with `LIBERTY_APPS_DIR` unset, it's `liberty-next/plugins/`). The package is then importable as `billing.invoicing`, just like a normal Python module.

### Package vs single file

```text
plugins/
├── billing/                    ← package — multi-module, recommended
│   ├── __init__.py
│   ├── invoicing.py
│   └── adjustments.py
└── ad_sync.py                  ← single module — works for one-off helpers
```

Both work. Packages scale better as you add features; single modules are convenient when one function fits one file.

---

## Writing a callable

The canonical shape is:

```python
# plugins/billing/invoicing.py
from __future__ import annotations

import logging
from typing import Any

log = logging.getLogger(__name__)


def run(*, period: str, dry_run: bool = False, **ctx: Any) -> dict:
    """Re-issue every draft invoice for the given period.

    Args:
        period:   YYYY-MM the job is running for.
        dry_run:  if True, count but don't write.
        ctx:      every other key the framework injects (see below).

    Returns:
        Step result dict — surfaced in the run history.
    """
    connectors = ctx["connectors"]                     # type: ConnectorRegistry
    billing    = connectors.sql("billing")

    drafts = billing.run("drafts-for-period", period=period)
    log.info("billing.invoicing.run period=%s drafts=%d dry_run=%s", period, len(drafts), dry_run)

    if dry_run:
        return {"rows_affected": 0, "matched": len(drafts)}

    inserted = 0
    for draft in drafts:
        billing.run("issue-invoice:write", id=draft["id"])
        inserted += 1

    return {"rows_affected": inserted}
```

| Element | Notes |
|---|---|
| **`*` then `**ctx`** | The framework always passes context as keyword arguments. The leading `*` forces the explicit parameters (`period`, `dry_run`) to be passed by name — the call from TOML uses keyword arguments. |
| **Return type** | `dict` with at least `rows_affected` (int) is the convention. The dict is persisted on the run record. `None` is allowed and means "no count". |
| **Logging** | Use `logging.getLogger(__name__)` — the framework's log handler routes the messages into the run-log stream visible in the UI. |
| **Exceptions** | Raise normally. The job runner catches, records the exception in the run history and applies the configured retry / backoff. |

### Async callables

`async def` is supported and automatically awaited by the framework — useful when the work fans out to network calls:

```python
import httpx

async def push_to_crm(*, deal_id: int, **ctx) -> dict:
    async with httpx.AsyncClient() as client:
        r = await client.post(f"https://crm.example.com/api/deals/{deal_id}/sync")
        r.raise_for_status()
    return {"rows_affected": 1}
```

The framework detects the coroutine via `inspect.iscoroutinefunction` and awaits it on the event loop.

---

## The runtime context

Every callable receives a base context of keys the framework provides. The exact set depends on the extension point:

### Job `python` step

| Key | Type | Description |
|---|---|---|
| `connectors` | `ConnectorRegistry` | Access to every connector by name — `connectors.sql("billing").run("query-name", **params)`. |
| `pools` | `PoolRegistry` | Lower-level access to raw pools when you need a transaction across multiple connectors. |
| `job_id` | `str` | The current job's identifier. |
| `run_id` | `str` | The run identifier — useful for cross-referencing log lines. |
| `step_name` | `str` | The step's name within the job. |
| `params` | `dict` | The job's `params` block (from `jobs.toml`). |
| `step_kwargs` | `dict` | The step's own `kwargs` block. |
| `previous_step` | `dict \| None` | The previous step's result (when chained). |
| `logger` | `logging.Logger` | Pre-configured logger that routes to the run-log stream. |
| `session_user` | `str` | `"system"` when the job was scheduled, or the user identifier when triggered manually. |

Plus every key declared in the step's `kwargs` block (TOML — see [Step types](../jobs/step-types.md)).

### Password validator

| Key | Type | Description |
|---|---|---|
| `username` | `str` | The user the password is being set for. |
| `password` | `str` | The candidate password (plain text). |
| `existing_user` | `dict \| None` | User record if the user already exists. `None` on `create-user`. |

Return `None` to accept; raise `ValueError("reason")` to reject.

### Dispatch hooks (rare)

A handful of internal events (`screen.before_save`, `screen.after_save`, `connector.before_query`) accept optional hooks via the `[hooks]` block in `app.toml`. The signature mirrors the event payload; see the source under `liberty/hooks/` for the full list.

---

## Referencing a callable from TOML

The reference format is `"<module.path>:<function>"`:

```toml
# plugins/billing/jobs.toml
[[jobs]]
name     = "reissue-monthly-drafts"
schedule = "0 2 1 * *"        # 02:00 on the 1st of every month

  [[jobs.steps]]
  name     = "reissue-drafts"
  type     = "python"
  callable = "billing.invoicing:run"
  kwargs   = { period = "${month.previous}", dry_run = false }
```

The framework imports `billing.invoicing` lazily on first use, looks up `run`, validates the signature against the runtime context plus the step's kwargs, and caches the resolved callable for subsequent runs.

A non-existent module or function fails the **load** of the job (reload-time error), not the first run — broken plugins are caught when *Save & reload* is triggered.

---

## Calling connectors from a plugin

The `connectors` key in the context exposes the same registry the framework uses internally. Three call shapes:

```python
# SQL connector
rows = ctx["connectors"].sql("billing").run("monthly-totals", month="2026-05")

# HTTP / API connector
resp = await ctx["connectors"].api("crm").call("get-customer", id=42)

# Raw pool — for transactions across multiple queries
async with ctx["pools"].get("billing").begin() as conn:
    await conn.execute(text("UPDATE invoices SET status = 'issued' WHERE batch_id = :b"), {"b": batch})
    await conn.execute(text("INSERT INTO audit (...) VALUES (...)"), {...})
```

Use the high-level `connectors.sql(...)` / `connectors.api(...)` when the operation maps to a named query / endpoint — they respect permission gates and audit logging. Drop to `pools.get(...)` only when you need a transaction that crosses connectors.

---

## Distributing a plugin across environments

Two patterns work:

### Pattern 1 — checked into `liberty-apps`

The plugin source sits in `liberty-apps/plugins/<package>/` and ships with the rest of the configuration. Versioning, deployment and rollback follow the `liberty-apps` repository.

| Pro | Con |
|---|---|
| Single git history for config + custom code. | Mixes Python code with TOML configuration. |
| Code review goes through the same PR as the config change. | A bigger plugin (multi-thousand lines) bloats the configuration repo. |

### Pattern 2 — published as a Python package

Build the plugin as a regular Python package, publish to a private PyPI (or just install from git), pip-install it in the `liberty-next` virtualenv:

```bash
cd liberty-next
.venv/bin/pip install git+https://github.com/acme/liberty-billing-plugin@v1.4.2
```

The TOML reference is the same — `callable = "liberty_billing.invoicing:run"` — because the package is now importable through the virtualenv's site-packages, not through `liberty-apps/plugins/`.

| Pro | Con |
|---|---|
| Plugin code lives in its own repo with its own tests / CI. | Two release pipelines to manage. |
| Multiple installs can share one plugin version. | Hot-reload doesn't pick up a pip upgrade — a restart is required. |

Pick Pattern 1 for small plugins (a few hundred lines, install-specific); pick Pattern 2 for plugins shared across many installs or maintained by a separate team.

---

## Testing a plugin

Write tests in the plugin folder:

```text
plugins/billing/
├── invoicing.py
└── tests/
    └── test_invoicing.py
```

A pytest-compatible test that mocks the context:

```python
# plugins/billing/tests/test_invoicing.py
from unittest.mock import MagicMock
from billing.invoicing import run


def test_dry_run_returns_count_only(monkeypatch):
    billing = MagicMock()
    billing.run.return_value = [{"id": 1}, {"id": 2}, {"id": 3}]
    ctx = {"connectors": MagicMock(sql=MagicMock(return_value=billing))}

    result = run(period="2026-05", dry_run=True, **ctx)

    assert result == {"rows_affected": 0, "matched": 3}
    billing.run.assert_called_once_with("drafts-for-period", period="2026-05")
```

Run with `cd liberty-next && PYTHONPATH=../liberty-apps/plugins .venv/bin/pytest ../liberty-apps/plugins/billing`.

---

## Tips & best practices

- **Keep callables small.** A plugin function is hard to debug remotely; one function per step is easier to reason about than a 500-line orchestration class.
- **Always type the explicit kwargs.** `def run(*, period: str, ...)` catches a TOML typo (`peroid = "2026-05"`) at import time instead of at run time.
- **Log with `__name__`.** The Nomaflow log tail filters per logger — using the module path makes the lines greppable.
- **Don't catch broad exceptions in a step.** Let the runner record the traceback; a `try / except: pass` produces a green run that silently did nothing.
- **Never reach into the framework internals beyond the context.** The `ctx["connectors"]` / `ctx["pools"]` keys are the stable contract; everything else might change between framework versions.
- **Treat plugins as code.** They get committed, code-reviewed, tested. The TOML configuration is data; plugins are code.

---

## What's next

- [Apps](./apps.md) — where the plugin folder fits in the app structure.
- [i18n](./i18n.md) — adding language packs (also lives under `plugins/`).
- [Jobs → Step types](../jobs/step-types.md) — the `python` step that calls plugins.
