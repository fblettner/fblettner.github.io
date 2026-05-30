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
├── config/
│   ├── app.toml
│   ├── connectors.toml
│   ├── screens.toml
│   ├── menus.toml
│   ├── dictionary.toml
│   └── jobs.toml
└── plugins/
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
| `<apps-repo>/config/` | Yes | The framework's config directory. `LIBERTY_APPS_DIR` points here. |
| `<apps-repo>/plugins/` | Yes (for plugins) | Inferred by the framework as `<LIBERTY_APPS_DIR>/../plugins/`. |
| `plugins/<name>/` | Yes | One Python package per plugin. Must have `__init__.py`. |
| `plugins/<name>/__init__.py` | Yes | Empty is fine. Without it, Python doesn't see the dir as a package. |
| Other files / subpackages | Free form | Standard Python — go nuts. |

The `plugins/` folder is a **sibling** of `config/`, not a child. This is so the apps repo's `config/` stays clean (no Python code mixed in with TOML) while `plugins/` carries everything Python.

---

## The env var

The framework reads **`LIBERTY_APPS_DIR`** at startup. Two ways to set it:

| Source | Notes |
|---|---|
| OS env var | `LIBERTY_APPS_DIR=/opt/apps/config` in the systemd unit / Docker `ENV` / shell. |
| `app.toml` | `[app] apps_dir = "/opt/apps/config"`. |

The OS env var wins.

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
grep "liberty.plugins importable" /var/log/liberty/app.log
# → INFO  liberty.plugins importable from /opt/apps/plugins
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
    uvicorn liberty.main:app --reload --reload-dir plugins
```

What this does:

- `--reload` restarts the worker on any file change.
- `--reload-dir plugins` adds the plugins directory to the watch list (uvicorn's default is the cwd, which usually misses the apps repo).

The cycle becomes: edit a `.py` file in `plugins/` → uvicorn restarts → next job run picks up the new code.

For a strict dev workflow, also keep the framework log open:

```bash
tail -f /var/log/liberty/app.log | grep -E "(nomaflow|liberty.etl|liberty.plugins|<your-plugin>)"
```

The four log namespaces above cover plugin loading, ETL primitive calls, Nomaflow step execution, and anything your plugin logs under its own logger name.

---

## Hot reload — what does and doesn't

The framework's `POST /admin/reload` (triggered by every *Save* in the Settings UI) re-reads:

| File | Auto-reloaded |
|---|---|
| `connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`, `jobs.toml` | Yes. |
| `app.toml` | Partial — most fields. Pool changes require a manual reload from the Pools page. |
| Python code in `plugins/` | **No.** |

The plugin code is in Python's import cache. **Restart the framework process** to pick up code changes.

Two patterns:

| Workflow | Restart approach |
|---|---|
| Dev shell with `uvicorn --reload` | Automatic on file change. |
| Production (systemd) | `systemctl restart liberty` — pick a low-traffic moment. |
| Production (Docker / Kubernetes) | Rolling restart — kill the old pod, the new one comes up with the new code. |
| Production (multi-replica) | Replace replicas one at a time; the scheduler lock ensures only one fires crons. See [Nomaflow → Administration](../../../nomaflow/administration.md). |

For Python-only changes, you can avoid full restarts by using `liberty-admin reload-plugin <name>` (which under the hood calls `importlib.reload` on every module in the plugin tree) — but this is **brittle**: re-importing in-flight modules can leave the runtime in a half-old, half-new state. **The safe path is a full restart.**

---

## Production deploy — the recipe

A typical CI/CD flow:

1. **Build the apps repo** — copy `config/` + `plugins/` into a release tarball / Docker image.
2. **Deploy** — push to the framework's hosts, set `LIBERTY_APPS_DIR` to the unpacked `config/`.
3. **Restart** — `systemctl restart liberty` or roll the pod.
4. **Verify** — `curl http://localhost:8000/healthz` and check `grep "liberty.plugins importable" app.log`.
5. **Smoke test** — open the Settings → Nomaflow page, run a small known-good job, check the Run detail.

The plugin's Python dependencies (`httpx`, `openpyxl`, `ldap3`, whatever the plugin imports) need to be installed in the framework's virtual environment. Either bake them into the image / venv build, or maintain a `requirements.txt` alongside the plugin that gets installed before the framework starts.

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
INFO  nomaflow.python start run=run_a8c4d step='cleanup' callable=myapp.cleanup:purge ...
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
INFO  nomaflow.python start run=run_a8c4d step='cleanup' callable=myapp.cleanup:purge kwargs=['apps_id', 'connectors', 'ctx', 'max_age_days']
INFO  nomaflow.python done  run=run_a8c4d step='cleanup' rows=1234
```

The `kwargs` list is sorted — it tells you what the function actually received (auto-injected + op_kwargs combined). Useful when you suspect an injection wasn't named in the signature.

### Did my callable fail?

```
ERROR nomaflow.python run=run_a8c4d step='cleanup' callable=myapp.cleanup:purge raised
ERROR Traceback (most recent call last):
ERROR   File ".../plugins/myapp/cleanup.py", line 42, in purge
ERROR     ...
ERROR RuntimeError: db connection refused
```

The full traceback lands in the log AND in the Nomaflow Run detail page's step expansion. Same content, two surfaces.

### My change isn't reflected

```
INFO  nomaflow.python done run=run_a8c4d step='cleanup' rows=0     # still the old behaviour
```

You forgot to restart the framework. Python cached the old module.

```bash
systemctl restart liberty    # or whatever your restart is
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
    assert result["rows_affected"] >= 0
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

### Run a job from the CLI without the UI

For end-to-end testing without round-tripping through the Settings UI:

```bash
liberty-admin job run <job-id> --params apps_id=10 --params max_age_days=7
```

The CLI fires the same path as the UI's *▶ Run now* — same plugin loading, same auto-injections, same log lines.

---

## Common deploy pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `LIBERTY_APPS_DIR` not set in prod. | Plugins fail to import; framework log shows no `liberty.plugins importable` line. | Set the env var in the systemd unit / docker / k8s. |
| Path points at `plugins/` directly (not `config/`). | Framework looks for `<path>/../plugins/` → wrong place. | Point at the **config** dir; `plugins/` is inferred as its sibling. |
| `plugins/<name>/__init__.py` missing. | `ImportError: No module named '<name>'`. | Add an empty `__init__.py`. |
| Plugin imports a library not in the framework's venv. | `ImportError: No module named 'openpyxl'` at the first call. | `pip install` the library in the framework's venv before restarting. |
| Different Python version between dev and prod. | Code works locally, fails in prod with cryptic syntax / import errors. | Pin the Python version (`pyproject.toml` `requires-python = ">=3.12"`) and match it in CI / prod. |
| Plugin code edits with no restart. | Old code keeps running. | Restart the framework. |
| Multi-replica install — restart one replica but not the others. | Inconsistent behaviour (some runs use new code, others use old). | Restart all replicas. |

---

## What's next

- [ETL primitives](./etl-primitives.md) — the ready-made building blocks.
- [Write a callable](./write-a-callable.md) — the function contract.
- [Nomaflow → Custom Python steps](../../../nomaflow/custom-python.md) — the operator's view of what your plugin produces.
