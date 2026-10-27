---
title: API pull
description: "Recipe — fetch records from a REST API every hour with a Python step and write them through a connector's query, with the token kept out of the job."
keywords: [Nomaflow, recipe, API pull, REST, python step, httpx, upsert, connector query, Liberty Next]
---

# API pull

Every hour, fetch the latest releases of a project from a REST API and upsert them into a table.

The `http` step calls a URL and checks the answer, but does not hand the body to the next step: to read an API's data and store it, use a `python` step that calls the API and writes through a named query of a connector.

---

## What you need \{#needs\}

- A SQL connector `reporting` with a write query `release_upsert` — for PostgreSQL:

```sql title="release_upsert"
INSERT INTO releases (tag, name, published_at)
VALUES (:TAG, :NAME, :PUBLISHED_AT)
ON CONFLICT (tag) DO UPDATE SET name = EXCLUDED.name, published_at = EXCLUDED.published_at
```

- The API token in the server's environment: `GITHUB_TOKEN` (in `release/.env` on Docker, in the service's environment file on a Python install).

---

## The function \{#function\}

```python title="plugins/integrations/releases.py"
import logging
import os

import httpx
from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import StepResult

_log = logging.getLogger(__name__)


async def pull_releases(*, repo: str, target_connector: str, connectors: ConnectorRegistry) -> StepResult:
    headers = {"Authorization": f"Bearer {os.environ['GITHUB_TOKEN']}"}
    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.get(f"https://api.github.com/repos/{repo}/releases", headers=headers)
        resp.raise_for_status()
        releases = resp.json()

    target = connectors.sql(target_connector)
    for r in releases:
        await target.execute("release_upsert", {
            "TAG": r["tag_name"], "NAME": r["name"], "PUBLISHED_AT": r["published_at"],
        })
    _log.info("%d release(s) upserted", len(releases))
    return StepResult(rows_affected=len(releases))
```

Register the package once so that its lines reach the run log: `register_namespace("integrations")` in `plugins/integrations/__init__.py` — see [Custom Python steps](../custom-python.md#logging).

---

## The job \{#job\}

```toml title="jobs.toml"
[[jobs]]
id = "pull-releases"
schedule = "15 * * * *"
timezone = "Europe/Paris"
tags = ["integration"]

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 30

[[jobs.steps]]
type = "python"
name = "pull-releases"
callable = "integrations.releases:pull_releases"
op_kwargs = { repo = "acme/platform", target_connector = "reporting" }
```

An error raised by `raise_for_status()` fails the step; the retry policy tries again after 30 s, then 60 s.

---

## Variants \{#variants\}

| Need | Change |
|---|---|
| Pages of results | Loop on the API's next-page link inside the function. |
| Another repository on another schedule | A preset with its own `repo` and schedule — see [Schedulable presets](../jobs/schedules.md#schedulable-presets). |
| Just check that a service answers | An `http` step on its health URL is enough. |
