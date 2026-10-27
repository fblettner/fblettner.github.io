---
title: Excel export
description: "Recipe — export a screen to Excel: the grid's Export menu (current view, Excel or CSV, visible or all columns), and configured workbooks from the screen's Export tab — several sheets, one file per group, built on the server."
keywords: [Liberty Next, cookbook, Excel, export, XLSX, CSV, workbook, sheets, split_by, screen]
---

# Excel export

## The problem

Users want the data of a screen in Excel — to work on it offline, to hand it to someone without access, to produce a recurring report.

## The pattern

| Level | Setting | Result |
|---|---|---|
| **The grid's export** | Nothing — every grid has it. | The current view as `.xlsx` or `.csv`. |
| **Configured workbooks** | The screen's **Export** tab. | One or several `.xlsx` files with several sheets, built on the server. |

## The grid's export

The **Export** menu above every grid offers **Excel (.xlsx)** and **CSV (.csv)**. The file holds the rows loaded in the grid, with its filters, sort and visible columns; **All columns (incl. hidden)** adds the hidden ones.

A column with a list of values gets two columns in the file: the label, and the code under `<label> (ID)` — the layout the screen's [import](./bulk-import.md) reads back.

The export covers the rows the grid has loaded: raise the screen's row cap, or narrow the filters, for a complete file.

## Configured workbooks

For a structured report — several sheets, one file per department — set the screen's **Export** tab. An **Export workbooks** button then appears above the grid; the server builds the files and the browser downloads them (a `.zip` when there are several).

| Setting | Effect |
|---|---|
| **split_by** | A column of the screen's read query: one file per distinct value. Blank: a single file. |
| **sheets** | The sheets of each file, in order. Each sheet has a **name**, a **query** (with its **connector**), and **param_binds** — `source = "split_value"` passes the file's group value to the query. |
| A sheet's **split_by** | A column of the sheet's query: one worksheet per distinct value. |
| **file_name_template** | The file name; `{{split_value}}` and `{{screen}}` are replaced. Default: `<screen>_<value>.xlsx`. |

Sheet names accept `{{split_value}}` and `{{sheet_value}}`; they are shortened to Excel's 31 characters.

### Example — one file per department

```toml
[screens.hr.employees.export]
split_by = "DEPARTMENT"
file_name_template = "staff_{{split_value}}.xlsx"

[[screens.hr.employees.export.sheets]]
name  = "Employees"
query = "employees_by_department"
param_binds = [{ param = "DEPARTMENT", source = "split_value" }]

[[screens.hr.employees.export.sheets]]
name  = "Applications"
query = "applications_by_department"
param_binds = [{ param = "DEPARTMENT", source = "split_value" }]
```

The button produces a `.zip` with one workbook per department, each with an *Employees* and an *Applications* sheet.

## Variations

| Need | How |
|---|---|
| **An aggregated export** | A query (or a database view) that aggregates, used as a sheet's query — or a screen on that view. |
| **A report sent every week** | See [Scheduled report email](./scheduled-report-email.md). |

## What's next

- [Bulk import](./bulk-import.md) — load the exported layout back.
- [Screens](../build/screens/overview.md) — the Export tab among the others.
- [REST API](../../references/rest-api.md) — `POST /api/screens/{app}/{id}/export` builds the workbooks.
