---
title: Deploy and debug
description: "The apps repo layout, LIBERTY_APPS_DIR, the dev shell with uvicorn --reload, the production deploy pattern, log lines you'll grep for, and the testing setup."
keywords: [Liberty Framework, plugin, deploy, debug, apps repo, LIBERTY_APPS_DIR, sys.path, uvicorn reload, logging, testing]
---

# Deploy and debug

A plugin is a folder on disk plus an env var. Getting it to load is two steps; debugging it once it does is the long tail. This page covers both.

---

## The apps repo layout

The expected production layout:

```
<apps-repo>/
├── config/                  ← LIBERTY_APPS_DIR
│   ├── connectors.toml
│   ├── screens.toml
│   ├── menus.toml
│   └── dictionary.toml
└── plugins/
    ├── nomaflow/
    │   └── jobs.toml          ← the Nomaflow jobs
    ├── myapp/
    │   ├── __init__.py        ← required to be a package
    │   ├── cleanup.py
    │   ├── reports.py
    │   └── db/                ← submodules / subpackages OK
    │       └── models.py
    └── reporting/
        ├── __init__.py
        └── monthly.py
```

| Element | Required | Notes |
|---|---|---|
| `<apps-repo>/config/` | Yes | The configuration files. `LIBERTY_APPS_DIR` points here. `app.toml` and `auth.toml` stay in the server's own `config/` folder — see [Architecture](../../../installation/architecture.md#configuration). |
| `<apps-repo>/plugins/` | Yes (for plugins) | Inferred by the framework as `<LIBERTY_APPS_DIR>/../plugins/`. |
| `plugins/<name>/` | Yes | One Python package per plugin. Must have `__init__.py`. |
| `plugins/<name>/__init__.py` | Yes | Empty is fine. Without it, Python doesn't see the dir as a package. |
| Other files / subpackages | Free form | Standard Python — go nuts. |

The `plugins/` folder is a **sibling** of `config/`, not a child. This is so the apps repo's `config/` stays clean (no Python code mixed in with TOML) while `plugins/` carries everything Python.

---

## The env var

The framework reads the **`LIBERTY_APPS_DIR`** environment variable at startup — in the systemd unit, the container's environment or the shell. On a Docker install, `./liberty apps` sets it for you (`/apps/config`).

For dev:

```bash
export LIBERTY_APPS_DIR=$HOME/code/apps/config
liberty-next
```

For prod (systemd):

```ini
[Service]
Environment="LIBERTY_APPS_DIR=/opt/apps/config"
ExecStart=/opt/liberty/.venv/bin/liberty-next
```

For Docker:

```dockerfile
ENV LIBERTY_APPS_DIR=/apps/config
COPY apps/config/ /apps/config/
COPY apps/plugins/ /apps/plugins/
```

---

## What happens at startup

When the framework boots:

1. Reads `LIBERTY_APPS_DIR`.
2. Computes `plugins_dir = <LIBERTY_APPS_DIR>/../plugins/`.
3. If the dir **exists**, inserts it at `sys.path[0]`. If it doesn't, silently continues.
4. Logs: `liberty.plugins importable from /opt/apps/plugins` (info level).

Verify with:

```bash
./liberty logs | grep "liberty.plugins importable"     # Docker
liberty-ops logs | grep "liberty.plugins importable"   # Python install
# → INFO  liberty.plugins importable from /apps/plugins
```

If the log line is missing, the `plugins/` folder isn't where the framework expects — most often because:

- `LIBERTY_APPS_DIR` isn't set.
- The path is wrong.
- The `plugins/` dir doesn't exist yet (the framework silently skips when the dir is missing — by design, so installs without plugins don't error).

---

## The dev shell

For interactive development, run the framework with auto-restart:

```bash
cd <apps-repo>
LIBERTY_APPS_DIR=$(pwd)/config \
    uvicorn liberty.main:asgi_app --reload --reload-dir plugins
```

What this does:

- `--reload` restarts the worker on any file change.
- `--reload-dir plugins` adds the plugins directory to the watch list (uvicorn's default is the cwd, which usually misses the apps repo).

The cycle becomes: edit a `.py` file in `plugins/` → uvicorn restarts → next job run picks up the new code.

Keep the server output open in another terminal: the `liberty.plugins`, `liberty.etl` and `nomaflow` lines cover plugin loading, ETL primitive calls and step execution, plus anything your plugin logs under its own registered namespace.

---

## Hot reload — what does and doesn't

The framework's `POST /admin/reload` (triggered by every *Save* in the Settings UI) re-reads:

| File | Auto-reloaded |
|---|---|
| `connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`, `jobs.toml` | Yes. |
| Settings → App | Partial — most fields. Pool changes require a manual reload from the Pools page. |
| Python code in `plugins/` | **No.** |

The plugin code is in Python's import cache. **Restart the framework process** to pick up code changes.

Two patterns:

| Workflow | Restart approach |
|---|---|
| Dev shell with `uvicorn --reload` | Automatic on file change. |
| Production, Python install | `liberty-ops restart` — pick a quiet moment. |
| Production, Docker | `./liberty restart`. |

---

## Production deploy — the recipe

A typical CI/CD flow:

1. **Build the apps repo** — copy `config/` + `plugins/` into a release tarball / Docker image.
2. **Deploy** — push to the framework's hosts, set `LIBERTY_APPS_DIR` to the unpacked `config/`.
3. **Restart** — `./liberty restart` or `liberty-ops restart`.
4. **Verify** — `curl http://localhost:8000/ready` and look for `liberty.plugins importable` in the log.
5. **Smoke test** — open the Nomaflow Jobs page, run a small known-good job, check the run detail.

The plugin's Python dependencies must be installed in the framework's environment: `pipx inject liberty-next <package>` on a Python install; on Docker, only the libraries the image already ships (`httpx`, `openpyxl`, `ldap3`…) are available.

---

## Debugging — where to look

### Did the plugin load?

```bash
grep "liberty.plugins importable" app.log
```

Present → the plugins dir is on `sys.path`. Absent → it isn't.

### Is my callable resolvable?

When a `python` step fires:

```
INFO  nomaflow.python start run=3f2c… step='cleanup' callable=myapp.cleanup:purge ...
```

If the callable can't resolve:

```
ERROR python step 'cleanup': cannot import module 'myapp.cleanup' from callable 'myapp.cleanup:purge' — No module named 'myapp'
```

or

```
ERROR python step 'cleanup': module 'myapp.cleanup' has no attribute 'purge' (from callable 'myapp.cleanup:purge')
```

The message tells you which half failed — module import or attribute lookup. Typical causes:

| Error | Cause |
|---|---|
| `No module named 'myapp'` | `plugins/` not on `sys.path` (check the startup log), or `plugins/myapp/__init__.py` missing. |
| `No module named 'myapp.cleanup'` | The package loaded but the submodule doesn't exist — typo in the callable string, or the `.py` file isn't there. |
| `module 'myapp.cleanup' has no attribute 'purge'` | The module loaded but the function name is wrong — typo, or the function got renamed. |

### Did my callable run?

```
INFO  nomaflow.python start run=3f2c… step='cleanup' callable=myapp.cleanup:purge kwargs=['apps_id', 'connectors', 'ctx', 'max_age_days']
INFO  nomaflow.python done  run=3f2c… step='cleanup' rows=1234
```

The `kwargs` list is sorted — it tells you what the function actually received (auto-injected + op_kwargs combined). Useful when you suspect an injection wasn't named in the signature.

### Did my callable fail?

```
ERROR nomaflow.python run=3f2c… step='cleanup' callable=myapp.cleanup:purge raised
ERROR Traceback (most recent call last):
ERROR   File ".../plugins/myapp/cleanup.py", line 42, in purge
ERROR     ...
ERROR RuntimeError: db connection refused
```

The traceback lands in the server log, and the error in the run detail's step row.

### My change isn't reflected

```
INFO  nomaflow.python done run=3f2c… step='cleanup' rows=0     # still the old behaviour
```

You forgot to restart the framework. Python cached the old module.

```bash
./liberty restart            # or: liberty-ops restart
# next run picks up the new code
```

---

## Testing — the local pattern

Plugins are normal Python — test them like any package.

### Unit tests

```python
# plugins/myapp/tests/test_cleanup.py
import pytest
from myapp.cleanup import purge_old_sessions

@pytest.mark.asyncio
async def test_purge_old_sessions(fake_registry):
    result = await purge_old_sessions(
        connectors=fake_registry,
        ctx=None,                     # the function doesn't read it
        apps_id=10,
        max_age_days=30,
    )
    assert result.rows_affected >= 0
```

`fake_registry` is a pytest fixture you build yourself — a `ConnectorRegistry` pointing at a SQLite in-memory DB so the test has a real engine to run against without depending on a live Postgres.

### Integration tests

Run the plugin against a real test pool (Docker-Compose Postgres, or a dev DB):

```python
@pytest.fixture
def real_registry():
    # Build a ConnectorRegistry with a real pool pointing at the dev DB.
    ...
    return registry

@pytest.mark.asyncio
async def test_refresh_security_against_real_db(real_registry):
    result = await refresh_security_users(
        connectors=real_registry,
        ctx=mock.MagicMock(run_id="test_run"),
        apps_id=10,
    )
    # Verify the target table was actually written.
    ...
```

The framework's own test suite uses this pattern — fixtures wired against a throwaway Postgres in `tests/conftest.py`.

### Run a job end to end

Run the job from the Nomaflow Jobs page with **Run with parameters**: same plugin loading, same injections, same log lines as a scheduled run. The REST API offers the same call (`POST /admin/jobs/{job_id}/run`) for scripts.

---

## Common deploy pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `LIBERTY_APPS_DIR` not set in prod. | Plugins fail to import; framework log shows no `liberty.plugins importable` line. | Set the env var in the systemd unit, or install the apps with `./liberty apps` on Docker. |
| Path points at `plugins/` directly (not `config/`). | Framework looks for `<path>/../plugins/` → wrong place. | Point at the **config** dir; `plugins/` is inferred as its sibling. |
| `plugins/<name>/__init__.py` missing. | `ImportError: No module named '<name>'`. | Add an empty `__init__.py`. |
| Plugin imports a library not in the framework's environment. | `ImportError: No module named '…'` at the first call. | `pipx inject liberty-next <library>` on a Python install, then restart. |
| Different Python version between dev and prod. | Code works locally, fails in prod with cryptic syntax / import errors. | Pin the Python version (`pyproject.toml` `requires-python = ">=3.12"`) and match it in CI / prod. |
| Plugin code edits with no restart. | Old code keeps running. | Restart the framework. |

---

## What's next

- [ETL primitives](./etl-primitives.md) — the ready-made building blocks.
- [Write a callable](./write-a-callable.md) — the function contract.
- [Nomaflow → Custom Python steps](../../../nomaflow/custom-python.md) — the operator's view of what your plugin produces.
