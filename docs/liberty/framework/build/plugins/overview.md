---
title: Plugins — overview
description: "A plugin is a Python package on disk that Liberty makes importable at startup. It carries custom callables your Nomaflow python steps reference — the escape hatch for anything declarative steps can't express."
keywords: [Liberty Framework, plugins, sys.path, importable, callable, apps repo, LIBERTY_APPS_DIR, python step]
---

# Plugins — overview

A **plugin** in Liberty is a Python package on disk that the framework makes importable at startup. Your custom callables live there — the functions Nomaflow's `python` steps point at by name.

The framework deliberately keeps the open-source primitives small (the five declarative step types, the connectors, the screens, the menus). When a workload doesn't fit them, you write Python and reference it from a `python` step:

```toml
[[jobs.steps]]
type     = "python"
name     = "refresh-users"
callable = "myapp.security:refresh_users"
```

`callable` is `<module.path>:<function>`. The module lives in your plugin; the framework imports it and calls the function.

---

## Why plugins (vs writing inside the framework)

The plugin pattern is what makes Liberty extensible without forking. Three properties matter:

| Property | What it gives you |
|---|---|
| **On disk, on `sys.path`** | Standard Python import path. No registration call, no decorator, no metadata file. Drop a `.py` in the right folder, reference it by name. |
| **Lives in a separate repo** | The framework ships open-source; your plugin can be proprietary, customer-specific, full of internal SQL templates. The two repos move independently. |
| **Importable from any framework subsystem** | Nomaflow `python` steps are the main consumer today, but anything that takes a callable string can resolve into your plugin — future custom screen actions, custom dictionary rules, etc. |

The split is intentional: **the open framework gives you primitives; the plugin holds your business logic**.

---

## Where plugins live

Plugins live in the **apps repo**, alongside (not inside) the framework. The expected layout:

```
<apps-repo>/
├── config/           ← LIBERTY_APPS_DIR points here
│   ├── app.toml
│   ├── connectors.toml
│   ├── screens.toml
│   ├── menus.toml
│   └── dictionary.toml
└── plugins/          ← sibling of config/ — this is what's importable
    ├── myapp/        ← one Python package per plugin
    │   ├── __init__.py
    │   ├── security.py
    │   └── reports.py
    └── reporting/
        ├── __init__.py
        └── ...
```

| Element | Notes |
|---|---|
| `LIBERTY_APPS_DIR` | Env var (or `[app] apps_dir` in `app.toml`) — points at the `config/` folder. |
| `plugins/` | The sibling folder. **Inferred** by the framework as `<LIBERTY_APPS_DIR>/../plugins/`. |
| `plugins/<name>/` | One Python package per plugin. Must have `__init__.py` (empty is fine) to be importable. |
| `plugins/<name>/<module>.py` | The actual code. Referenced from `python` step callables as `<name>.<module>:<function>`. |

In dev (no `LIBERTY_APPS_DIR` set), the framework falls back to `./plugins/` relative to the cwd.

---

## How import works

At startup, the framework runs `_ensure_plugins_on_sys_path()`:

1. Resolves the plugins folder (`<LIBERTY_APPS_DIR>/../plugins/` or `./plugins/`).
2. If the folder exists, **inserts it at `sys.path[0]`** so it wins over any same-named third-party package.
3. Logs: `liberty.plugins importable from <path>`.

After that, `import myapp.security` works anywhere in the framework's process — including from `importlib.import_module("myapp.security")`, which is what the `python` step executor calls under the hood.

The mechanism is **standard Python imports** — no plugin manifest, no registration, no manifest-driven discovery. If the file is on `sys.path` and importable, the framework can call it.

---

## What's in a plugin

A plugin is a normal Python package. Common content:

| File / dir | What it carries |
|---|---|
| `__init__.py` | Empty, usually. Just makes the dir a package. |
| `<module>.py` | Functions Nomaflow `python` steps reference. |
| `db/` | SQLAlchemy models or raw-SQL templates. The plugin's persistent shape. |
| `queries/` | Static SQL files loaded at module-import time. |
| `data/` | CSV / JSON reference data shipped with the plugin. |
| `tests/` | Plugin's own test suite. Run separately from the framework's tests. |

You can structure the package any way Python allows — submodules, subpackages, nested folders. The framework doesn't care, as long as your `python` step callables reference a valid import path.

---

## What a callable looks like

A minimal plugin: `<apps-repo>/plugins/myapp/__init__.py` (empty) + `<apps-repo>/plugins/myapp/cleanup.py`:

```python
# plugins/myapp/cleanup.py
import logging
from liberty.connectors import ConnectorRegistry

_log = logging.getLogger(__name__)

async def purge_old_sessions(
    *,
    connectors: ConnectorRegistry,   # auto-injected by name
    apps_id: int,                    # from op_kwargs
    max_age_days: int = 30,          # from op_kwargs, with default
    **_,                              # swallow anything else the framework injects
) -> dict:
    """Delete session rows older than max_age_days for one tenant."""
    pool = connectors.pools.engine("default")
    # ... do the work ...
    deleted = 1234
    _log.info("purged %d sessions for apps_id=%d", deleted, apps_id)
    return {"rows_affected": deleted}
```

Referenced from `jobs.toml`:

```toml
[[jobs.steps]]
type     = "python"
name     = "purge-sessions"
callable = "myapp.cleanup:purge_old_sessions"
op_kwargs = { apps_id = 10, max_age_days = 30 }
```

Function signature, return shape, error handling and what the framework auto-injects: [Write a callable](./write-a-callable.md).

---

## When to reach for a plugin

| Use a plugin when… | Stay declarative when… |
|---|---|
| The workload needs a Python library (httpx, openpyxl, ldap3, an internal SDK). | The same can be expressed as `sql_query`, `sql_copy`, `http`, `ldap_sync`. |
| The flow has branching logic that depends on intermediate values. | The flow is a fixed sequence of typed steps. |
| You're integrating with a service Liberty doesn't have a built-in step for. | The integration is HTTP or LDAP — use those step types. |
| You're transforming data in non-SQL ways (XML parsing, PDF generation, image processing). | The transformation is SQL-only. |
| You need to call a stored procedure with logic between calls. | A single `sql_query` step is enough. |
| You're building tooling around the framework (CLI batch jobs, ad-hoc scripts). | The Settings UI surfaces every option you need. |

The `python` step is the **escape hatch**, not the default. Most operational workloads fit the declarative steps; reach for Python when they genuinely don't.

---

## Hot reload — what does and doesn't

| Change in your plugin | Picked up by | Needs |
|---|---|---|
| Edit `jobs.toml` (your plugin's job catalogue). | The next *Save* on the Settings UI **or** `POST /admin/reload`. | Hot reload (no restart). |
| Edit a `.py` file — change function code. | Python's import cache still holds the **old** version. | **Restart** the framework process. |
| Add a new `.py` file. | Will be importable on first import after the framework starts. | **Restart** the framework process. |
| Change a `requirements.txt` / install a new dependency. | `pip install` doesn't help — the running process already loaded its environment. | **Restart** the framework process (after `pip install`). |

For day-to-day development, the loop is: edit Python → restart framework → run the job → check the log. The dev-shell pattern is to run the framework with auto-restart (uvicorn's `--reload`) so the cycle gets shorter.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Write a callable referenced from a Nomaflow `python` step. | [Write a callable](./write-a-callable.md). |
| Reach for ready-made ETL helpers (copy, snapshot, delete, audit). | [ETL primitives](./etl-primitives.md). |
| Ship a plugin to production, debug it when it misbehaves. | [Deploy and debug](./deploy-and-debug.md). |

---

## What's next

- [Write a callable](./write-a-callable.md) — the function contract.
- [Concepts → Apps & Plugins → Plugins](../../apps/plugins.md) — the deep reference.
- [Nomaflow → Custom Python steps](../../../nomaflow/custom-python.md) — the operator-facing view of the same callable.
