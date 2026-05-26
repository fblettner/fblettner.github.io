---
title: Steps
description: "The five Nomaflow step types — sql_query, sql_copy, python, http, ldap_sync — what each one does, the fields it accepts and when to reach for it."
keywords: [Nomaflow, steps, sql_query, sql_copy, python, http, ldap_sync, step types, Liberty Framework]
---

# Steps

A **step** is one unit of work inside a job. Nomaflow ships **five step types** — three declarative (SQL Query, SQL Copy, LDAP Sync), one for outbound HTTP calls and one Python escape hatch for everything else.

Pick a step type by asking *"what does this unit of work touch?"*:

| It touches… | Use |
|---|---|
| One SQL query on one connector. | **sql_query** |
| A whole table — moving rows from connector A to connector B. | **sql_copy** |
| An HTTP endpoint (REST, webhook, third-party API). | **http** |
| An LDAP / Active Directory directory subtree. | **ldap_sync** |
| Anything that isn't naturally one of the above. | **python** |

This page is the **reference** — every field, every default. For the editor workflow, see [Create a job](./jobs/create.md).

---

## Fields every step has

These four fields apply regardless of type — they're at the top of every step editor pane.

| Field | Default | Notes |
|---|---|---|
| **`name`** | — | Label that appears in the run history. Must be unique inside the job. Use a verb-noun: `refresh-totals`, `fetch-clients`, `sync-users`. |
| **`type`** | — | One of the five values below. Locked once a step is created — to change type, delete and re-add. |
| **`enabled`** | `true` | When `false`, the runner records the step as `CANCELED` with reason `skipped: disabled` and moves on. Useful as a kill-switch. |
| **`timeout_seconds`** | `3600` (1 h) | Hard wall — when exceeded, the step is cancelled. Tune up for long ETLs, down for HTTP probes. |

---

## SQL Query — `sql_query`

Runs **one** SQL statement on a connector. The most common Nomaflow step.

### Fields

| Field | Required | Notes |
|---|---|---|
| **`connector`** | Yes | Name of the connector to run on. |
| **`query`** | Yes | The SQL statement. Can be a SELECT (rows are counted, results discarded) or a write (INSERT / UPDATE / DELETE / REFRESH). |
| **`params`** | No | Dict of bound parameters passed to the connector's `execute(params=…)`. Avoids string interpolation and SQL injection. |

### What it captures

- The number of rows the statement returned (SELECT) or affected (write).
- The error, if the statement failed.
- The full SQL — emitted at DEBUG log level, not INFO.

### When to use it

| Pattern | Example |
|---|---|
| Refresh a materialised view. | `REFRESH MATERIALIZED VIEW reporting.daily_summary` |
| Update a counter. | `UPDATE stats SET total = (SELECT count(*) FROM orders) WHERE name = 'orders'` |
| Delete old rows. | `DELETE FROM ly2_job_runs WHERE finished_at < now() - interval '90 days'` |
| Run a stored procedure. | `CALL refresh_reporting()` |
| Health-check a connection. | `SELECT 1` |

### When to reach for something else

- **Streaming rows from one table to another** — use `sql_copy` instead. It handles batching, type coercion and atomic swap.
- **Iterating over a result set in Python logic** — use a `python` step that opens the connector itself.
- **Running 14 statements that share a transaction** — `sql_query` runs one statement per step. Either chain 14 steps (visible in the timeline, but no shared transaction) or wrap them in a stored procedure / `python` step.

---

## SQL Copy — `sql_copy`

Streams rows from a **source connector + schema + table** to a **target connector + schema + table**. The backbone of ETL workloads.

### Fields

| Field | Required | Notes |
|---|---|---|
| **`source.connector`** | Yes | Source pool. |
| **`source.schema`** | Yes | Source schema (`PS920CTL`, `public`, etc.). |
| **`source.table`** | Yes | Source table name. |
| **`target.connector`** | Yes | Target pool. |
| **`target.schema`** | Yes | Target schema. |
| **`target.table`** | Yes | Target table name. |
| **`mode`** | `overwrite` | `overwrite` / `append` / `upsert`. See below. |
| **`type_coercion`** | none | `jde` to apply JD Edwards typing rules (decimal alignment, char trimming). |
| **`decimal_mode`** | `preserve` | With `jde` coercion: `truncate` reproduces JDE's "no decimals in storage" cast; `preserve` keeps the source decimal value. |
| **`batch_size`** | `10000` | Rows per fetch from the source. Tune up for fast pipes, down for memory-constrained sources. |
| **`strip_both_columns`** | `[]` | List of source column names whose values get a full `strip()`. Use for JDE codes that are right-justified and left-padded. |

### Copy modes

| Mode | Behaviour | When |
|---|---|---|
| **`overwrite`** | Writes to a **stash table**, then atomically swaps with the target. Target is **never empty** mid-run. | Default for ETL. The target stays consistent even if the source pull fails halfway. |
| **`append`** | Inserts rows on top of the target's existing data. | Daily snapshots, audit trails. |
| **`upsert`** | Inserts new rows, updates existing rows. Requires the target to have a primary key. | Slowly-changing dimensions. |

### Type coercion: when `type_coercion = "jde"`

JD Edwards stores numbers and dates in formats that don't round-trip naturally into other databases. The `jde` coercion handles three things:

- **Decimals**: JDE stores no decimal point — `1234567` with 2 decimals means `12345.67`. The data dictionary supplies the scale; the executor applies it.
- **Dates**: Julian (`CYYDDD`) → ISO `YYYY-MM-DD`.
- **Strings**: Some codes are right-justified, left-padded with spaces. Add the column to `strip_both_columns` so the target receives the trimmed value.

### What it captures

- Source row count (rows read).
- Target row count (rows written).
- Per-batch progress markers at INFO level (`▶ batch 12 of 47 · 120 000 rows`).
- The stash-swap moment (`overwrite` mode only).

---

## Python — `python`

Calls a Python function in your plugins. The **escape hatch** — anything declarative steps can't express.

### Fields

| Field | Required | Notes |
|---|---|---|
| **`callable`** | Yes | `module.path:function_name` (e.g. `reports.summary:generate_pdf`). Validated for shape at save time; importability checked at run time. |
| **`op_kwargs`** | `{}` | Map of kwargs passed to the function. Merged on top of the job's shared `params`. |

### The function signature

```python
# plugins/reports/summary.py
from liberty.jobs.types import StepContext

def generate_pdf(ctx: StepContext, *, period: str, target_path: str, **_) -> dict:
    """Generate the monthly summary PDF.

    Returns a dict — keys land on the step's `output` field in the run history.
    """
    # ... build the PDF
    return {"path": target_path, "size_bytes": 12345}
```

| Parameter | What it is |
|---|---|
| **`ctx`** | A `StepContext` — gives access to connectors, the run logger and the job's params. |
| **`**kwargs`** | The merged kwargs (job `params` + step `op_kwargs` + per-fire overrides from the modal). |

### What `ctx` gives you

| Method / property | What it does |
|---|---|
| **`ctx.get_connector("name")`** | Returns the SQL / API connector by name. |
| **`ctx.log.info(msg)`** / `warning` / `error` | Routes log lines to the run's log stream. |
| **`ctx.session_user`** | The account that triggered the run (for audit writes). |
| **`ctx.params`** | The merged kwargs as a dict (same as `**kwargs` but available as a snapshot). |
| **`ctx.is_cancelled()`** | Returns `True` if the operator clicked ✕ Cancel. Long Python steps should check this periodically. |

### Return value

The function's return value is stored on the step's `output` field. Keep it small and structured — `{"rows_affected": N}` is great, returning the whole table isn't.

### When to use it

| Pattern | Why Python |
|---|---|
| Walk a directory, transform each file. | Filesystem traversal is awkward in SQL. |
| Decompress an XML blob and parse fields. | XML parsing belongs in Python. |
| Call a third-party SDK (AWS S3, Stripe, …). | Same. |
| Chain several SQL statements that need a shared transaction. | The function can open one connection and run them all. |
| Conditional logic ("only delete if count > 1000"). | A `python` step can branch; SQL can't without procedural code. |

### What not to do in a Python step

| Anti-pattern | Why |
|---|---|
| Loop for an hour with no `await` and no cancellation check. | Blocks the worker; the ✕ Cancel button can't stop it. |
| Open external HTTP / SMTP / database connections directly. | Use the framework's connectors so credentials stay declared once. |
| Catch and swallow exceptions. | The runner needs the exception to drive the retry / failure flow. |
| Print to stdout. | Use `ctx.log.info(…)` — only those go into the run's log stream. |

The [Custom Python steps](./custom-python.md) page walks through the function-writing flow with concrete examples.

---

## HTTP — `http`

Calls an HTTP endpoint. Use for webhooks, third-party REST APIs, internal microservices.

### Fields

| Field | Required | Notes |
|---|---|---|
| **`url`** | Yes | Full URL. Supports `${env:VAR}` substitution from the framework's env file. |
| **`method`** | `GET` | One of `GET` / `POST` / `PUT` / `PATCH` / `DELETE`. |
| **`headers`** | `{}` | Map of header name → value. |
| **`body`** | none | For POST / PUT / PATCH. JSON-encoded automatically when it's a dict / list. |

### What it captures

- The HTTP status code.
- The response time.
- The response body (truncated to ~64 KB in the run output for safety).

### Authentication

The HTTP step does not have a special "auth" field — credentials go through the `headers`:

| Auth scheme | Header |
|---|---|
| Bearer token | `Authorization: Bearer ${env:THIRD_PARTY_TOKEN}` |
| Basic | `Authorization: Basic <base64>` |
| API key | `X-API-Key: ${env:THIRD_PARTY_KEY}` |
| HMAC / signed requests | Use a `python` step — the HTTP step doesn't do per-request signing. |

The `${env:…}` substitution reads from the framework's env file — never put a secret directly in `jobs.toml`.

### Retry on HTTP

HTTP is the step type that benefits most from a retry policy. A common shape:

```
retry: { attempts = 3, backoff = exponential, base_seconds = 30 }
```

Catches rate-limits (429), transient outages and connection resets. Exponential backoff gives the upstream a chance to recover.

### When to reach for `python` instead

| Pattern | Why Python |
|---|---|
| The response needs parsing into structured fields. | The `http` step records the raw body — parsing happens in a downstream Python step or you can roll both into one Python step. |
| The API needs pagination. | A `python` step loops; the `http` step can't. |
| The auth needs computed signatures (AWS Sig v4, etc.). | Same. |

---

## LDAP Sync — `ldap_sync`

Pulls a directory subtree from an LDAP / Active Directory server and upserts it into a target connector.

### Fields

| Field | Required | Notes |
|---|---|---|
| **`server`** | Yes | LDAP server URL (`ldap://`, `ldaps://`). |
| **`bind_dn`** | Yes | Distinguished Name of the service account. |
| **`bind_password`** | Yes | Password. Always 🔒 encrypted. |
| **`search_base`** | Yes | Base DN to search from (`ou=people,dc=corp,dc=local`). |
| **`search_filter`** | `(objectClass=*)` | LDAP filter (`(&(objectClass=user)(memberOf=cn=staff,…))`). |
| **`attributes`** | `[]` | List of LDAP attributes to fetch. Empty = all available. |
| **`target_connector`** | Yes | SQL connector to upsert into. |
| **`target_query`** | Yes | Named upsert query on the target connector. |
| **`mapping`** | `{}` | Map of LDAP attribute → target column (e.g. `{ "sAMAccountName": "user_id" }`). |

### What it captures

- Number of LDAP entries fetched.
- Number of rows upserted.
- Number of stale rows pruned (when the target query supports deletion).

### When to use it

LDAP sync is purpose-built for **mirroring a directory** into the application's user / group catalogue. A few common shapes:

| Pattern | Source | Target |
|---|---|---|
| Mirror AD users into the app. | `ou=people,dc=corp` | The framework's user table. |
| Pull group memberships for an access-review screen. | `ou=groups,dc=corp` | A flat `(user, group)` table. |
| Snapshot an OU for a compliance report. | `ou=france,dc=corp` | A dated audit table. |

### When to reach for `python` instead

- Custom attribute parsing (Windows `accountExpires` as a FILETIME → date).
- Multi-server reconciliation.
- Inline transformation rules (regex on DN, conditional skip).

LDAP Sync is meant for the **straightforward 80%**. For anything bespoke, a `python` step with the `ldap3` library is the natural choice — and that's exactly what Nomasx-1's `nomasx1-ldap-1` job does.

---

## Disabling a step

Every step has an **enabled** toggle (top-right of the step editor pane, also in the Run-with-parameters modal). When off:

- The runner records the step as **`CANCELED`** in the run history.
- The reason is `skipped: disabled` (visible on the Run detail page).
- The remaining steps still run.

Use cases:

| Why disable | Where |
|---|---|
| Step is temporarily broken; rest of the job still runs. | Editor — saves into the job definition. |
| Re-run only steps 6–9 after fixing the data. | Run-with-parameters modal — for this fire only. |
| Steady-state kill switch on a destructive purge. | Editor — leaves the step as opt-in. |

---

## Step output

Each step row in the run history carries an **output** snapshot — a small JSON blob the executor or Python function produced:

| Step type | Typical output |
|---|---|
| `sql_query` | `{"rows_affected": 1024}` |
| `sql_copy` | `{"source_rows": 100000, "target_rows": 100000, "elapsed_ms": 14300}` |
| `python` | Whatever the function returned (a dict). |
| `http` | `{"status": 200, "elapsed_ms": 145, "body_preview": "..."}` |
| `ldap_sync` | `{"fetched": 4321, "upserted": 4321, "pruned": 12}` |

A step that returns **nothing** is harder to operate — the run history can't tell you *what happened*. Always return something structured.

---

## What's next

- [Create a job](./jobs/create.md) — the Job editor, where you wire steps in.
- [Workflow recipes](./workflows/scheduled-sync.md) — three end-to-end patterns using multiple step types.
- [Custom Python steps](./custom-python.md) — the Python escape hatch in depth.
- [Runs → History](./runs/history.md) — what the captured step output looks like.
