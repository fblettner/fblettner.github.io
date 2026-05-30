---
title: Bulk import
description: "Recipe — let operators upload a CSV or Excel file and import its rows into a database table. Validates per row, reports successes and failures, leaves the database untouched on errors."
keywords: [Liberty Framework, cookbook, bulk import, CSV, Excel, upsert, validation]
---

# Bulk import

## The problem

A user has a CSV (or XLSX) with hundreds of rows and wants to import them into a table — new customers from a trade show, products from a vendor catalogue, contracts from a migration. They don't want to type each one through the edit dialog.

## The pattern

Two parts:

1. **A screen action** that opens an *Import* dialog with a file picker.
2. **A Nomaflow job** triggered by the upload that parses the file, validates each row, performs upserts, returns a per-row report.

The framework parses the file (CSV / XLSX / TSV); your only job is to declare the **mapping** between source columns and target columns.

## The recipe

### 1. Schema preparation

If your target table needs an **external key** to detect duplicates (and decide insert vs update), make sure it exists:

```sql
ALTER TABLE customers
  ADD COLUMN external_code VARCHAR(64) UNIQUE;
```

The bulk import will match incoming rows against this column.

### 2. Define the import connector

**Settings → Connectors → customers → + Add query**:

```sql
-- upsert
INSERT INTO customers (external_code, name, status, country)
VALUES (:external_code, :name, :status, :country)
ON CONFLICT (external_code) DO UPDATE SET
  name = EXCLUDED.name,
  status = EXCLUDED.status,
  country = EXCLUDED.country,
  updated_by = :session_user,
  updated_at = CURRENT_TIMESTAMP;
```

Operation: `Write`. Declare the four parameters.

For Oracle / SQLite, swap `ON CONFLICT` for the equivalent (`MERGE` on Oracle, `INSERT OR REPLACE` on SQLite).

### 3. Build the import job

**Settings → Jobs → + New job**:

| Field | Value |
|---|---|
| **Name** | `customers-bulk-import` |
| **App** | `&lt;app&gt;` |
| **Schedule** | empty *(manual trigger only)* |
| **Single instance** | ✓ |

Two steps:

#### Step 1 — parse the file

| Field | Value |
|---|---|
| **Name** | `parse` |
| **Type** | `Python` |
| **Callable** | `liberty.builtin.bulk_import:parse_file` *(framework helper)* |
| **Kwargs** | `file_url = ${params.file_url}`, `mapping = { "Customer code": "external_code", "Name": "name", "Country": "country", "Status": "status" }` |

The helper:

- Detects CSV / XLSX from the file extension.
- Parses the headers; matches against the mapping.
- Returns a list of rows with the target column names.

#### Step 2 — upsert each row

| Field | Value |
|---|---|
| **Name** | `upsert` |
| **Type** | `Python` |
| **Callable** | `liberty.builtin.bulk_import:upsert_rows` |
| **Kwargs** | `rows = ${steps.parse.rows}`, `connector = "customers"`, `query = "upsert"`, `chunk_size = 500` |

The helper:

- Splits the rows into chunks of 500.
- Calls the upsert query per row, capturing successes and failures.
- Returns `{ "ok": 487, "failed": 13, "failures": [...] }`.

The job parameters expose `file_url` — declared on the *Parameters* tab.

### 4. Add the screen action

**Settings → Screens → customers → Actions tab → + Custom button** at the toolbar level (not the dialog):

| Field | Value |
|---|---|
| **Label** | `↑ Import` |
| **Icon** | `upload` |
| **Variant** | `Secondary` |
| **Action** | `Run job` |
| **Job** | `customers-bulk-import` |
| **Parameters dialog** | ✓ *(shows the file picker before running)* |

### 5. Permissions

Grant `job:customers-bulk-import` to the roles that should be allowed to import. Skip for read-only roles.

## See it work

Open the *Customers* screen, click **↑ Import**. The framework shows a dialog with a file picker. Drop a CSV in, click *Run*. The job's run-detail page opens with a live log tail; on completion you see "487 imported, 13 failed", with the failures listed per row (line number + error message).

## Variations

| You want… | Do this |
|---|---|
| **Validate before importing** | Add a step between `parse` and `upsert` that runs per-row validation. Return the list of errors; halt the job if any. |
| **Show a preview before commit** | Run the job in `dry_run = true` mode; the `upsert_rows` helper accepts this flag and only logs what it would do. Then a second click triggers the real run. |
| **Roll back on any error** | Wrap the upserts in a transaction; the helper has a `transactional = true` mode. |
| **Schedule a daily import from S3** | Same job, set a cron schedule + replace step 1 with an `http` step pulling from S3. |

## What's next

- [Jobs → Step types → python](../../nomaflow/steps.md) for the helper signature.
- [Cookbook → File upload](./file-upload.md) for the file-storage layer the import uses.
