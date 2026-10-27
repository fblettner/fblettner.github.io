---
title: Bulk import
description: "Recipe — load many rows from an Excel or CSV file: the screen's Import dialog, which checks every row against the screen's rules and the database before saving the valid ones, and the Nomaflow file_load step for recurring loads."
keywords: [Liberty Next, cookbook, bulk import, Excel, CSV, import, uploadable, upsert, validation, file_load, Nomaflow]
---

# Bulk import

## The problem

A file with hundreds of rows — customers from a trade show, products from a supplier catalogue — to load into a table, without typing them one by one.

## The pattern

| Need | Tool |
|---|---|
| A user loads a file now and then, through a screen. | The screen's **Import** dialog. |
| A file arrives regularly and must be loaded without anyone. | A Nomaflow job with a **`file_load`** step. |

## Import through a screen

### 1. Enable the import

In the screen editor, **General** tab, tick **uploadable**. The screen must have an insert query (and an update query to update existing rows). Users who may insert see an **Import** button above the grid.

### 2. Prepare the file

An `.xlsx` (first sheet) or `.csv` file with a header row. Each header is matched to a column of the screen, ignoring case:

- by the column name (`NAME`, `PRICE`) or its label (`Name`, `Price`);
- for a column with a list of values (`LOOKUP` or `ENUM`), by the code: the header `<label> (ID)` or the column name — the same layout as the screen's Excel export, so an exported file can be re-imported.

Columns not matched are ignored.

### 3. Check, then save

The **Import from Excel** dialog asks for the file and for what to do with **existing rows**: *Update or insert*, *Insert only* or *Update only*. **Check** runs two passes:

1. **Screen rules** — every value against its column: a lookup code must exist, an enum value must be allowed, a Boolean must be one of the two values.
2. **Database** — the rows that passed run the real insert or update inside a transaction that is rolled back: constraint violations, missing values and existing keys show up as in a real save.

The report lists the valid and invalid rows with the error of each. **Save N valid rows** writes only the valid rows, in batches.

The insert and update queries apply as for a dialog save: tokens, dictionary rules (`LOGIN`, `SYSDATE`, `SEQUENCE`), the screen's `audit_table` and its row hooks.

### Paste from Excel

In edit mode, rows copied from Excel can also be pasted into the grid: they are added as new rows, saved with the grid's **Save**.

## Recurring loads — `file_load`

For a file that comes back regularly, a Nomaflow job with a **`file_load`** step loads it into a table: a file chosen at run time, a server path or a watched folder; header-to-column mapping and constants; `append` or `replace_partition` (replace one period, in one transaction); a refusal query and a control total; rejected rows downloadable as CSV. See [Steps → File load](../../nomaflow/steps.md#file-load).

## Variations

| Need | How |
|---|---|
| **A key other than the table's** to decide insert or update | Mark that column as **key** on the screen. |
| **Values to compute during the import** | Put them in the queries (`{{LOGIN}}`, `{{SYSDATE}}`) or the dictionary rules. |
| **Fill related columns from a lookup** | The column's `return_binds`: on import, they fill the target column when the file leaves it empty. |

## What's next

- [CRUD over an existing table](./crud-existing-table.md) — the screen to import into.
- [Excel export](./excel-export.md) — the file layout the import reads back.
- [Steps → File load](../../nomaflow/steps.md#file-load) — loads by job.
