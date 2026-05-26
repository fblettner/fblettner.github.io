---
title: Hourly API pull
description: "Recipe — pull from a third-party REST API every hour, transform the JSON payload in a Python step, write rows into a SQL target with retry and idempotent upsert."
keywords: [Nomaflow, recipe, API pull, REST, http step, python step, transform, hourly, Liberty Framework]
---

# Recipe — Hourly API pull

Every hour, hit a third-party REST API, transform the JSON payload, write rows into a SQL target. The pattern behind any "pull from Stripe / GitHub / Salesforce / your-own-microservice" workload.

This recipe mixes **http**, **python** and **sql_query** steps — and shows where each one shines.

---

## What you build

| Piece | Value |
|---|---|
| **Trigger** | Cron — every hour at minute :15. |
| **Source** | A third-party REST API returning JSON. |
| **Target** | A SQL table with an upsert key (so re-running the hour is idempotent). |
| **Steps** | 1 × `http` (fetch) + 1 × `python` (transform + upsert) + 1 × `sql_query` (mark sync timestamp). |
| **Retry** | 3 attempts on the HTTP step, exponential backoff (rate-limits + transient 5xx). |
| **Alerts** | Slack on failure; warn after 10 minutes. |

The example pulls a feed of GitHub releases and upserts them into a `releases` table. The same shape applies to any paginated, time-bounded API feed.

---

## Prerequisites

| You need | How |
|---|---|
| A connector to the **target SQL DB**. | The framework's `default` pool works for a first run. |
| The API's **bearer token** in the framework's env file as `GITHUB_TOKEN`. | The framework reloads env on save. |
| A target table created upfront. | See the SQL below. |

The target table:

```sql
CREATE TABLE releases (
    id            BIGINT PRIMARY KEY,
    repo          TEXT NOT NULL,
    tag           TEXT NOT NULL,
    name          TEXT,
    published_at  TIMESTAMPTZ NOT NULL,
    body          TEXT,
    synced_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE sync_state (
    name        TEXT PRIMARY KEY,
    last_sync   TIMESTAMPTZ
);
```

`sync_state` is a tiny bookkeeping table — one row per data feed, recording the last successful pull.

---

## Step 1 — Create the job shell

On the Nomaflow page, click **＋ New Job**.

| Field | Value |
|---|---|
| Id | `github-releases-hourly` |
| Description | *Hourly pull of GitHub releases into the `releases` table.* |
| Tags | `api-pull`, `hourly`, `github` |
| Enabled | ✓ |

Schedule:

| Field | Value |
|---|---|
| Cron | `15 * * * *` |
| Timezone | `UTC` (the API uses UTC timestamps; matching them avoids surprises) |

The `:15` offset avoids the rush of jobs that fire on the hour everywhere else in the building.

---

## Step 2 — Shared params

In the **Shared params** block:

| Key | Value | Why |
|---|---|---|
| `repo` | `fblettner/fblettner.github.io` | Which repo to fetch. |
| `target_connector` | `default` | Where to upsert. |

These get merged into every Python step's `op_kwargs` at runtime — and they're overridable per-fire in the Run-with-parameters modal.

---

## Step 3 — The HTTP fetch

Click **＋ Add step** → **HTTP**.

| Field | Value |
|---|---|
| Name | `fetch-releases` |
| URL | `https://api.github.com/repos/${kw:repo}/releases?per_page=30` |
| Method | `GET` |
| Headers | `Authorization: Bearer ${env:GITHUB_TOKEN}` |
|  | `Accept: application/vnd.github+json` |
|  | `X-GitHub-Api-Version: 2022-11-28` |
| Timeout | `60` |

The `${kw:repo}` substitutes the merged kwarg `repo` at runtime — so a per-fire override of `repo` flows through naturally.

The HTTP step records the response body on its output. The next step reads it.

---

## Step 4 — Retry on the HTTP step

In the job's **Retry** block:

| Field | Value |
|---|---|
| Attempts | `3` |
| Backoff | `exponential` |
| Base seconds | `30` |

Waits 30s before the first retry, 60s before the second, 120s before the third. Catches:

- **429 rate-limit** from GitHub.
- **Transient 502 / 503** when GitHub is having an incident.
- **Network timeouts** when the framework's outbound path hiccups.

The retry policy applies to every step, but the HTTP step is the only one likely to benefit. The Python step and the sync-state write are deterministic — retrying them won't change the outcome.

---

## Step 5 — The Python transform + upsert

Click **＋ Add step** → **Python**.

| Field | Value |
|---|---|
| Name | `upsert-releases` |
| Callable | `releases.sync:upsert_releases` |
| Op kwargs | empty (everything comes from shared params + the previous step's output) |
| Timeout | `300` |

The Python function lives in `plugins/releases/sync.py`:

```python
from datetime import datetime, timezone
from liberty.jobs.types import StepContext

async def upsert_releases(
    ctx: StepContext,
    *,
    target_connector: str,
    repo: str,
    **_,
) -> dict:
    """Read the previous step's HTTP body and upsert each release."""
    # Fetch the HTTP step's output from the run context.
    http_step = ctx.previous_step("fetch-releases")
    if http_step.output["status"] != 200:
        raise RuntimeError(
            f"GitHub returned status {http_step.output['status']}"
        )
    releases = http_step.output["body"]  # decoded JSON list

    target = ctx.get_connector(target_connector)
    inserted = 0
    updated = 0
    for r in releases:
        result = await target.execute(
            """
            INSERT INTO releases (id, repo, tag, name, published_at, body, synced_at)
            VALUES (:id, :repo, :tag, :name, :pub, :body, now())
            ON CONFLICT (id) DO UPDATE SET
                tag          = excluded.tag,
                name         = excluded.name,
                published_at = excluded.published_at,
                body         = excluded.body,
                synced_at    = now()
            RETURNING (xmax = 0) AS inserted
            """,
            params={
                "id": r["id"],
                "repo": repo,
                "tag": r["tag_name"],
                "name": r.get("name"),
                "pub": r["published_at"],
                "body": r.get("body"),
            },
        )
        if result.first()["inserted"]:
            inserted += 1
        else:
            updated += 1

    ctx.log.info(f"upserted {len(releases)} releases · {inserted} new · {updated} updated")
    return {"fetched": len(releases), "inserted": inserted, "updated": updated}
```

Three things to notice:

| Pattern | Why |
|---|---|
| `ctx.previous_step("fetch-releases").output` | Read the HTTP step's recorded output. Steps inside a run share context this way. |
| `ON CONFLICT (id) DO UPDATE` | Idempotent upsert. Re-running the hour doesn't create duplicates. |
| The return value | Lands on the step's output in the run history. Operators reading the timeline see "fetched: 30, inserted: 2, updated: 28" instead of "succeeded". |

---

## Step 6 — Mark the sync timestamp

Click **＋ Add step** → **SQL Query**.

| Field | Value |
|---|---|
| Name | `mark-synced` |
| Connector | `${kw:target_connector}` |
| Query | (see below) |
| Timeout | `30` |

```sql
INSERT INTO sync_state (name, last_sync)
VALUES ('github-releases', now())
ON CONFLICT (name) DO UPDATE SET last_sync = now();
```

This step is tiny on purpose — its job is to **record success** in a queryable way. A monitoring dashboard can `SELECT max(last_sync) FROM sync_state WHERE name = 'github-releases'` and alert if the value is more than two hours old.

---

## Step 7 — Alerts

In the **Alerts** block:

| Field | Value |
|---|---|
| On failure | ✓ |
| On long run minutes | `10` |
| Recipients | empty |

The 10-minute warning catches a step that's hung — the run typically finishes in well under a minute, so anything past ten is a sign something's wrong.

Save the job.

---

## Step 8 — Smoke test

Click **▶ Run now**. The Run-with-parameters modal opens (because the job has shared params + multiple steps). Submit without changes.

Watch the Run detail page:

```
✓ fetch-releases      ·   430 ms · status=200 · body=30 items
✓ upsert-releases     ·   220 ms · fetched: 30 · inserted: 2 · updated: 28
✓ mark-synced         ·    12 ms · 1 row affected
```

The first time, expect 30 inserts (or however many releases exist) and 0 updates. On the next hour, expect 0 inserts and 30 updates (because the data didn't change).

If anything fails, see [Troubleshoot](../runs/troubleshoot.md).

---

## What you've built

```
JOB github-releases-hourly
├── schedule: "15 * * * *" (UTC)
├── params: { repo: "fblettner/fblettner.github.io", target_connector: "default" }
├── retry: { attempts: 3, backoff: exponential, base_seconds: 30 }
├── alerts: { on_failure: true, on_long_run_minutes: 10 }
└── steps:
    1. fetch-releases    (http · GET · 60s)
    2. upsert-releases   (python · releases.sync:upsert_releases · 5m)
    3. mark-synced       (sql_query · default · 30s)
```

Every hour, releases get pulled in. The first hour is full-table; subsequent hours mostly update unchanged rows (cheap, fast). The `sync_state` table makes monitoring trivial. A failure pings Slack within minutes.

---

## Adapt to your case

### Pagination

GitHub's `/releases` endpoint returns 30 by default. For feeds with more rows, the HTTP step pulls one page; the Python step loops to pull subsequent pages:

```python
async def upsert_paginated(ctx, *, repo, target_connector, **_):
    fetched = 0
    page = 1
    while True:
        url = f"https://api.github.com/repos/{repo}/releases?per_page=100&page={page}"
        # Use httpx or the framework's HTTP client
        items = await ctx.http.get(url, headers={"Authorization": f"Bearer {os.environ['GITHUB_TOKEN']}"})
        if not items: break
        # ... upsert ...
        fetched += len(items)
        page += 1
    return {"fetched": fetched, "pages": page - 1}
```

For very large feeds, replace the single Python step with a **two-step** shape: one Python step that lists page numbers + writes them to a queue table; one Python step that processes a batch. The first job runs hourly, the second runs every 5 minutes consuming the queue.

### Incremental pulls

For APIs that support `since=…` filters, read the last `sync_state.last_sync` value at the top of the Python step and pass it to the HTTP URL. The job becomes a **delta** pull instead of a full pull — cheaper, faster, lighter on the upstream's rate limit.

### Different transforms

The Python step is where shape mismatch gets resolved. Common patterns:

| Source shape | Transform |
|---|---|
| Nested JSON (a release has authors, assets, …). | Flatten — one row per release, denormalised columns. Or two tables — `releases` + `release_assets` with a foreign key. |
| Snake_case in target, camelCase in source. | Map keys explicitly in the upsert. |
| Source dates as Unix timestamps. | Convert to ISO strings in the Python before the upsert. |

### Authentication patterns

| Auth | Headers |
|---|---|
| Bearer token | `Authorization: Bearer ${env:TOKEN}` |
| API key | `X-API-Key: ${env:KEY}` |
| Basic auth | `Authorization: Basic <base64>` |
| AWS Sig v4 | Use a `python` step — the HTTP step doesn't sign. |
| OAuth refresh flow | Use a `python` step — fetch a fresh token, then call the protected endpoint. |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Cron at `0 * * * *`. | Job collides with every other "every hour" workload in the building. | Offset — `15 * * * *` or `27 * * * *`. |
| No `ON CONFLICT` clause. | Re-running the hour blows up on duplicate keys. | Always upsert when pulling from a re-readable source. |
| Hard-coded API token. | Token leaks into version control / search results. | Use `${env:…}` and put the secret in the env file. |
| Retry attempts too high. | A 401 (bad token) keeps retrying for 15 minutes. | Cap at 3. A 4xx never retries successfully without intervention. |
| No `sync_state` table. | Monitoring can't tell whether the last sync succeeded. | Always mark a checkpoint. |

---

## What's next

- [Recipe — Scheduled DB sync](./scheduled-sync.md) — the SQL Copy pattern.
- [Recipe — Conditional cleanup](./conditional-cleanup.md) — a job that runs only when a condition is met.
- [Custom Python steps](../custom-python.md) — the Python escape hatch in depth.
- [Steps → HTTP](../steps.md#http--http) — every field on the HTTP step.
