---
title: Steps
description: "The seven Nomaflow step types — sql_query, sql_copy, file_load, python, http, ldap_sync, call_job — what each one does, its fields and defaults, and what it records in the run."
keywords: [Nomaflow, steps, sql_query, sql_copy, file_load, python, http, ldap_sync, call_job, spreadsheet load, CSV, replace_partition, Liberty Next]
---

# Steps

A **step** is one unit of work in a job. Steps run in order; when one fails, the following ones are recorded as *skipped: earlier step failed*.

| The step… | Type |
|---|---|
| runs one named query of a SQL connector | **`sql_query`** |
| copies a whole table from one connector to another | **`sql_copy`** |
| loads a spreadsheet or a CSV file into a table | **`file_load`** |
| calls a Python function of a plugin | **`python`** |
| calls a URL | **`http`** |
| reads an LDAP / Active Directory directory into a table | **`ldap_sync`** |
| runs another job and waits for it | **`call_job`** |

In the job editor, the **Add step:** bar has one button per type, and each step opens a form with its own fields. A few keys exist only in `jobs.toml` (noted below).

---

## Common fields \{#common\}

| Field | Default | Notes |
|---|---|---|
| `name` | — | Shown in the run detail; unique within the job. |
| `type` | — | One of the seven types. |
| `enabled` | `true` | `false` skips the step (recorded as *skipped: disabled*). Set in `jobs.toml`, or for one run in the **Run with parameters** window. |
| `timeout_seconds` | `3600` | The step is cancelled after this time. Set in `jobs.toml`. |

---

## SQL query — `sql_query` \{#sql-query\}

Runs one **named query** of a SQL connector — a query defined on the connector's page, read or write.

| Field | Required | Notes |
|---|---|---|
| `connector` | yes | The SQL connector. |
| `query` | yes | The name of the query, not SQL text. |
| `params` | no | Values bound to the query's parameters. |
| `pool` | no | Another pool of the connector's set — see [Multi-pool connectors](../framework/connectors.md#multi-pool). `jobs.toml` only. |

Records the number of rows returned or affected. To refresh a materialised view, call a procedure or purge a table, write the statement as a query of the connector, then call it here.

---

## SQL copy — `sql_copy` \{#sql-copy\}

Streams the rows of a source table to a target table, possibly on another database.

| Field | Default | Notes |
|---|---|---|
| `source` = `{connector, schema, table}` | — | Required. `pool` may be added (`jobs.toml` only). |
| `target` = `{connector, schema, table}` | — | Required. Same. |
| `mode` | `overwrite` | `overwrite`: the rows are written to a work table `<table>__new`, which then replaces the target in one transaction — the target is never empty during the copy. `append`: rows are inserted into the target as it is. |
| `type_coercion` | `jde` | `jde` applies the JD Edwards rules (scaled decimals, Julian dates, padded codes); `none` copies the values as they are. |
| `decimal_mode` | `truncate` | With `jde`: `truncate` or `preserve` the decimal part. |
| `batch_size` | `10000` | Rows per batch. |
| `strip_both_columns` | `[]` | Columns whose values are trimmed on both sides. |

`upsert` is accepted by the schema but refused at run time: for an insert-or-update, write a `MERGE` / `ON CONFLICT` query and call it with `sql_query`. Records the number of rows written.

---

## File load — `file_load` \{#file-load\}

Loads an Excel workbook (`.xlsx`, `.xlsm`) or a text file (`.csv`, `.txt`, `.tsv`) into a table — on a schedule, without anyone at the keyboard, at the volume a facts table needs, and replayable for one period without touching the others.

### The file

The file comes from, in this order of priority:

1. **a file chosen when the job is run** — the **Run with parameters** window shows a file picker for each `file_load` step (the window opens for any job that has one);
2. **`path`** — a path on the server, which may contain `${params.x}` (a run parameter), `${run.id}` and `${job.id}`: `/data/in/sales-${params.period}.xlsx`;
3. **a watched folder** — `watch_dir` and `watch_pattern` (`*.xlsx`): every matching file is loaded in name order, each in its own transaction, then moved to `done/` or `failed/` under a time-stamped name. A file that fails stops the run; the files after it stay in the folder. An empty folder is not an error.

| Field | Default | Notes |
|---|---|---|
| `sheet` | first sheet | A name or a number (1 = first). |
| `header_row` | `1` | The row of the column headers; data starts below. Empty rows are skipped. |
| `delimiter` | detected | CSV separator; detected among `;` `,` tab `|` when empty. |
| `encoding` | `utf-8-sig` | CSV only. |

### The target

| Field | Notes |
|---|---|
| `target` = `{connector, schema, table}` | A SQL connector; the table must exist. |
| `columns` | Target column ← file header or position (`#3`). Headers match ignoring case, spaces, `_` and `-`; unmapped columns match by name. |
| `constants` | Target column ← value, for what the file does not carry: `period = "${params.period}"`, `batch_id = "${run.id}"`. |

Each cell is converted to the type of its target column: integers, decimals (`12,5` and `12.5` both read as 12.5; a lone comma is the decimal separator), dates (`2026-10-27`, `27/10/2026`, `27.10.2026`, `20261027`, and Excel dates), booleans (`1`, `true`, `yes`, `oui`…), text. A number typed as text keeps no leading zeros that the spreadsheet already removed.

### Load mode

| Field | Choice |
|---|---|
| `load_mode` | `append` (default) inserts the rows. `replace_partition` first deletes the rows of the partitions the file carries, then inserts — **in one transaction**: a failed load leaves the previous data in place, and a corrected month replaces that month only. |
| `partition_by` | The partition columns (`period, company`) — required with `replace_partition`. The partitions come from the constants when they cover every column, otherwise from the distinct values found in the file. |
| `on_error` | `fail` (default): the first bad cell fails the step and names the row. `skip`: bad rows are counted as rejected and written to a CSV (file, row, reason) offered in the run detail. |
| `batch_size` | `10000` rows per insert. |

### Guards

| Field | Notes |
|---|---|
| `refuse_query` | A named query run before anything is touched, with the run parameters and the constants as binds. If it returns a row, the load is refused and the first column is the reason: *period 2026-02 is closed*. `refuse_connector`: its connector, the target's by default. |
| `control_column` + `control_total` | The column is summed over the loaded rows and compared with a value, `${params.total}`, or a cell of the file (`@B2`, `@Totals!B2`), within `control_tolerance`. A difference rolls the file's load back and names both figures. |

### In the run

The run detail shows *N read · N inserted · N rejected* and, when rows were rejected, **Rejected rows (csv)** to download them. The log adds the partitions replaced and the rows deleted.

Uploaded files and reject files go to the job's work area: `[jobs] files_dir` in `app.toml` (default `.nomaflow/files` next to the configuration); `[jobs] max_upload_mb` (200) caps an upload.

```toml title="jobs.toml"
[[jobs.steps]]
type = "file_load"
name = "load-sales"
path = "/data/in/sales-${params.period}.xlsx"
sheet = "Sales"
target = { connector = "sales", schema = "public", table = "fact_sales" }
columns = { company = "Company", article = "Item", qty = "Quantity", revenue = "Revenue" }
constants = { period = "${params.period}", batch_id = "${run.id}" }
load_mode = "replace_partition"
partition_by = ["period", "company"]
refuse_query = "period_closed_get"
control_column = "revenue"
control_total = "@Totals!B2"
```

---

## Python — `python` \{#python\}

Calls a function of a plugin: `callable = "package.module:function"`.

| Field | Notes |
|---|---|
| `callable` | `module.path:function` — checked for shape when saved, imported when the step runs. |
| `op_kwargs` | Arguments passed to the function, merged over the job's shared parameters. |

The function receives its arguments as keyword arguments and, when it declares them by name, `connectors` (the connector registry), `ctx` (the run: `ctx.run_id`, `ctx.job_id`, `ctx.trigger`) and `settings`. It may be `async` or not. Its return value: an `int` is the number of rows affected, a `dict` is kept as the step's details, `None` is fine; an exception fails the step. To reach the run log, write with a logger of a registered namespace. The full contract is in [Write a callable](../framework/build/plugins/write-a-callable.md).

---

## HTTP — `http` \{#http\}

| Field | Default | Notes |
|---|---|---|
| `url` | — | Required. Used as written. |
| `method` | `GET` | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`. |
| `headers` | `{}` | Sent as they are. |
| `body` | none | Text, or a table sent as JSON (with `Content-Type: application/json` when none is set). |

A 2xx answer succeeds; anything else fails the step with the status. The step keeps the status, the first 4 KB of the answer and the duration. Values from the environment are written `${NAME}` in `jobs.toml` and replaced when the file is loaded.

---

## LDAP sync — `ldap_sync` \{#ldap-sync\}

Reads entries from an LDAP directory and runs a write query of a SQL connector for each entry.

| Field | Notes |
|---|---|
| `server` | `ldaps://ad.example.com:636`. |
| `bind_dn`, `bind_password` | The account used to read; write the password as `${LDAP_PASSWORD}`. |
| `search_base`, `search_filter` | Where and what to search: `DC=example,DC=com`, `(objectClass=user)`. |
| `attributes` | The attributes to read. |
| `target_connector`, `target_query` | The write query run for each entry. |
| `mapping` | LDAP attribute → query parameter. A missing attribute gives `NULL`. |

Records the number of entries read and rows written.

---

## Call a job — `call_job` \{#call-job\}

`target_job_id` names another job. The step starts it, waits for it to end and takes its result: success, failure or cancellation. The called job has its own run in the history, and inherits the caller's log level and run parameters. A job that would end up calling itself is refused.

---

## Retries and timeouts \{#retry\}

The job's **Retry policy** block (`attempts`, `backoff` fixed or exponential, `base_seconds`) applies to each step: a step is tried up to `attempts` times in all (`1`, the default, means no retry), with a wait of `base_seconds` between tries — constant, or doubling with `exponential`. The job as a whole stops after `timeout_seconds` (4 hours by default).
