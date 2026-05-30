---
title: ETL primitives
description: "The liberty.etl toolkit — six async helpers your plugin callables compose into ETL flows: copy_query_to_table, snapshot_rows, delete_rows, truncate_table, insert_audit_record, run_query."
keywords: [Liberty Framework, plugin, ETL, liberty.etl, copy_query_to_table, snapshot_rows, delete_rows, truncate_table, insert_audit_record, run_query]
---

# ETL primitives

The framework ships **six async helpers** under `liberty.etl` that handle the boring, error-prone parts of ETL — streaming a SELECT into a target table, snapshotting rows into a history table, deleting / truncating with proper transaction handling, writing standard audit records. Your callables compose them.

All six are **async**, all six take a `ConnectorRegistry`, all six look up the target engine by connector name. The same call works against any pool the framework knows about — dev SQLite, prod Postgres, customer Oracle — without plumbing changes.

---

## Why these (vs writing SQL yourself)

The helpers are framework-neutral — no JDE, no Nomasx-1, no business specifics. What they buy you:

| You don't have to think about | Because the helper does it |
|---|---|
| Opening the engine, starting a transaction, closing on error. | Wrapped in `async with engine.begin()`. |
| Streaming rows in batches without loading the result set in memory. | `copy_query_to_table` uses `result.partitions(batch_size)`. |
| Building INSERT statements from a SELECT's column shape. | Inferred from the first batch's columns. |
| Lowercasing column names for the target. | Default behaviour matches the framework convention. |
| Logging row counts in the standard format. | Built into each helper. |
| Mapping the `${nomaflow_run_id}` to the audit row. | `insert_audit_record` auto-resolves via `current_run_id()`. |

What you keep:

| Your responsibility | Notes |
|---|---|
| The SQL itself. | The helpers don't compose SELECTs / WHERE clauses for you. |
| The connector name. | You declare which connector to run on. |
| Trusted identifier interpolation. | Table / column names are interpolated unquoted (caller-controlled). |
| Bind values for `:placeholder` params. | Pass via the `params` kwarg — never via string formatting. |

---

## Importing

```python
from liberty.etl import (
    copy_query_to_table,
    snapshot_rows,
    delete_rows,
    truncate_table,
    insert_audit_record,
    run_query,
)
```

All six are re-exported from the top of the package.

---

## `copy_query_to_table` — stream a SELECT into a target

The heaviest of the six. Runs a SELECT on a source connector, streams the result, inserts each batch into a target table on a (possibly different) connector. Returns the number of rows inserted.

```python
async def copy_query_to_table(
    *,
    connectors: ConnectorRegistry,
    source_connector: str,
    source_sql: str,
    source_params: Mapping[str, Any] | None = None,
    target_connector: str,
    target_table: str,
    target_columns: list[str] | None = None,
    batch_size: int = 1000,
) -> int
```

| Arg | Notes |
|---|---|
| `source_sql` | The SELECT to stream. Can carry `:placeholder` params. |
| `source_params` | Bind values for the SELECT's params. |
| `target_table` | May be schema-qualified (`"nomasx1.SECURITY_USERS"`). |
| `target_columns` | Defaults to **lowercased source column names** — matches the convention where source is uppercase and target is lowercase. Pass explicitly when names differ. |
| `batch_size` | Rows per INSERT batch. Default 1000 keeps WAL small and locks short. |

### When to use

- ETL from operational DB to reporting DB.
- Cross-tenant copies (same shape, different schema).
- One-off backfills.

### Example

```python
from liberty.etl import copy_query_to_table

async def refresh_security_users(*, connectors, apps_id, **_):
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="""
            SELECT USR_ID, USR_NAME, USR_ROLE
            FROM   F0093
            WHERE  ULAPPID = :apps_id
        """,
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )
    return {"rows_affected": rows}
```

---

## `snapshot_rows` — copy rows into a history table

`INSERT INTO history_table SELECT * FROM source_table [WHERE where]` — within the same connector. Used to preserve a slice of data before a destructive refresh.

```python
async def snapshot_rows(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    source_table: str,
    history_table: str,
    where: str = "",
    params: Mapping[str, Any] | None = None,
    if_not_exists: bool = False,
) -> int
```

| Arg | Notes |
|---|---|
| `source_table` / `history_table` | Both on **the same connector**. The history table is conventionally named `<source>$`. |
| `where` | Free SQL fragment with `:name` placeholders. Empty snapshots every row. |
| `params` | Bind values for the WHERE clause. |
| `if_not_exists` | When `true`, rows that would violate the history table's primary key are silently skipped (instead of raising). Useful for idempotent refresh chains. |

### When to use

- The snapshot phase of a refresh chain: **snapshot → delete → reload**.
- Audit / history tables that mirror current state.

### Example

```python
from liberty.etl import snapshot_rows

async def archive_users_before_refresh(*, connectors, apps_id, **_):
    rows = await snapshot_rows(
        connectors=connectors,
        target_connector="nomasx1",
        source_table="nomasx1.security_users",
        history_table="nomasx1.security_users$",
        where="apps_id = :apps_id",
        params={"apps_id": apps_id},
    )
    return {"rows_affected": rows}
```

---

## `delete_rows` — `DELETE FROM table [WHERE where]`

Simple deleter — returns the driver-reported row count.

```python
async def delete_rows(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    table: str,
    where: str = "",
    params: Mapping[str, Any] | None = None,
) -> int
```

Empty `where` deletes every row. For "drop the whole table fast" use `truncate_table` instead — `DELETE` writes per-row WAL.

### Example

```python
from liberty.etl import delete_rows

async def purge_old_logs(*, connectors, days_to_keep=90, **_):
    deleted = await delete_rows(
        connectors=connectors,
        target_connector="default",
        table="app_log",
        where="created_at < CURRENT_DATE - :days::interval",
        params={"days": f"{days_to_keep} days"},
    )
    return {"rows_affected": deleted}
```

---

## `truncate_table` — `TRUNCATE TABLE table`

Fast wipe — no per-row WAL, no row count. On Postgres takes an ACCESS EXCLUSIVE lock.

```python
async def truncate_table(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    table: str,
) -> None
```

### When to use

- The reset phase of a full reload. Before `copy_query_to_table` refreshes the whole table.
- Test setup that needs to start from a known-empty state.

### Example

```python
from liberty.etl import truncate_table, copy_query_to_table

async def full_reload_users(*, connectors, apps_id, **_):
    await truncate_table(connectors=connectors, target_connector="nomasx1", table="nomasx1.security_users")
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="SELECT * FROM F0093 WHERE ULAPPID = :apps_id",
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )
    return {"rows_affected": rows}
```

---

## `insert_audit_record` — write the standard audit row

Writes one row to the `collect_audit` table — the framework's standard audit log for ETL events. The row carries the apps_id, the module, the action, the refresh timestamp, the Nomaflow run id.

```python
async def insert_audit_record(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    target_schema: str | None,
    target_table: str,
    apps_id: int | str,
    module: str,
    action: str = "ETL",
    audit_table: str = "collect_audit",
    run_id: str | None = None,
) -> None
```

| Arg | Notes |
|---|---|
| `module` | One of the standard module names — `SECURITY`, `LICENSE`, `EMPLOYEES`, `OUT`, `SOD`, `XREF`, `DATABASE`, `ACTIVITY_LOG`, `AUDIT_TRAIL`, `LDAP`. The dashboard widget answers "when was X last refreshed?" by reading this column. |
| `action` | Default `"ETL"`. Other values surface differently in audit reports. |
| `audit_table` | Default `"collect_audit"`. Override only for out-of-tree plugins that want their own audit log. |
| `target_schema` | When set, the table is schema-qualified (`<schema>.<audit_table>`). |
| `run_id` | Defaults to the active Nomaflow run id (`current_run_id()`). Passed value wins — useful for ad-hoc backfills. |

### When to use

- After every ETL operation that refreshed data — gives the dashboard / monitoring layer a queryable signal of "X module last ran at Y for tenant Z".
- The `run_id` link makes it trivial to trace an audit row back to its Nomaflow run.

### Example

```python
from liberty.etl import copy_query_to_table, insert_audit_record

async def refresh_security(*, connectors, ctx, apps_id, **_):
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="SELECT * FROM F0093 WHERE ULAPPID = :apps_id",
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )
    await insert_audit_record(
        connectors=connectors,
        target_connector="nomasx1",
        target_schema="nomasx1",
        target_table="security_users",
        apps_id=apps_id,
        module="SECURITY",
        # run_id auto-resolves from ctx.run_id via current_run_id()
    )
    return {"rows_affected": rows}
```

---

## `run_query` — the escape hatch

Run any SQL statement and return the `rowcount`. The lowest-level helper — use when the typed helpers don't fit.

```python
async def run_query(
    *,
    connectors: ConnectorRegistry,
    connector: str,
    sql: str,
    params: Mapping[str, Any] | None = None,
) -> int
```

| Arg | Notes |
|---|---|
| `sql` | Any executable statement — UPDATE, INSERT, DDL, CALL. |
| `params` | Bind values. |

Returns the driver-reported row count (or 0 for DDL).

### When to use

- One-off operations that don't fit the typed helpers: `REFRESH MATERIALIZED VIEW`, an ad-hoc UPDATE, a procedure call.
- Wrapping a stored procedure invocation.

For **recurring** patterns, write a dedicated helper instead so the call site stays declarative.

### Example

```python
from liberty.etl import run_query

async def refresh_materialised_views(*, connectors, **_):
    rows = await run_query(
        connectors=connectors,
        connector="nomasx1",
        sql="REFRESH MATERIALIZED VIEW CONCURRENTLY nomasx1.license_jde_usage",
    )
    return {"rows_affected": rows}
```

---

## A composed example — full refresh chain

The canonical pattern: **snapshot → truncate → copy → audit**. All composed from primitives:

```python
from liberty.etl import (
    snapshot_rows, truncate_table, copy_query_to_table, insert_audit_record,
)

async def refresh_security_users(*, connectors, ctx, apps_id, **_):
    """Full refresh of nomasx1.security_users for one tenant."""
    # 1. Snapshot current rows into history (idempotent — silently skip dup keys)
    await snapshot_rows(
        connectors=connectors,
        target_connector="nomasx1",
        source_table="nomasx1.security_users",
        history_table="nomasx1.security_users$",
        where="apps_id = :apps_id",
        params={"apps_id": apps_id},
        if_not_exists=True,
    )

    # 2. Delete current rows for this tenant
    await delete_rows(
        connectors=connectors,
        target_connector="nomasx1",
        table="nomasx1.security_users",
        where="apps_id = :apps_id",
        params={"apps_id": apps_id},
    )

    # 3. Re-copy from the source
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="""
            SELECT USR_ID, USR_NAME, USR_ROLE
            FROM   F0093
            WHERE  ULAPPID = :apps_id
        """,
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )

    # 4. Audit the refresh
    await insert_audit_record(
        connectors=connectors,
        target_connector="nomasx1",
        target_schema="nomasx1",
        target_table="security_users",
        apps_id=apps_id,
        module="SECURITY",
    )

    return {"rows_affected": rows, "tenant": apps_id}
```

Four lines of business logic. Every infrastructural concern — transactions, batching, audit timestamps, run-id binding — handled by the primitives.

---

## When to drop down to raw SQLAlchemy

The primitives cover ~80% of ETL flows. For the rest, drop down to the SQLAlchemy engine directly:

```python
async def custom_logic(*, connectors, **_):
    engine = connectors.pools.engine("nomasx1")
    async with engine.begin() as conn:
        result = await conn.execute(text("SELECT ..."))
        # Multi-step transaction, complex result handling, etc.
        ...
```

Reach for raw SQLAlchemy when:

| Pattern | Why |
|---|---|
| Multi-statement transaction that must succeed or fail together. | The primitives each take their own transaction; you need one shared. |
| Streaming results with custom per-row logic. | `copy_query_to_table` streams to a target table; if you want to process row-by-row in Python, the engine is closer to the data. |
| Returning structured data from a SELECT. | The primitives return row counts, not rows. |
| Calling a procedure with OUT parameters. | The driver API is direct. |

The primitives are an **opinion**, not a fence. Use them when they fit; use the engine when they don't.

---

## Identifier safety reminder

The primitives interpolate table and column names **unquoted** — they're trusted inputs from plugin code, not user input. If you ever take a table name from a user-controlled source (a form, an HTTP request, a CSV upload), **validate it against an allowlist before passing in**. Otherwise you've recreated SQL injection through the table-name vector.

Bind values are the safe path — pass through `params`, never via f-strings.

---

## What's next

- [Deploy and debug](./deploy-and-debug.md) — get your plugin shipping.
- [Write a callable](./write-a-callable.md) — function-contract reference.
- [Nomaflow → Workflow recipes](../../../nomaflow/workflows/scheduled-sync.md) — real-world flows that compose these helpers.
