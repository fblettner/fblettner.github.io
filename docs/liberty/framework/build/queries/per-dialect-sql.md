---
title: Per-dialect SQL variants
description: "Ship one Liberty query with different SQL on Postgres, Oracle, MySQL, SQL Server, SQLite and DB2 — the per-dialect `sql` map, when to use it, common gotchas."
keywords: [Liberty Framework, SQL dialect, Postgres, Oracle, MySQL, MSSQL, SQLite, DB2, sql map, default]
---

# Per-dialect SQL variants

Most queries are SQL that runs everywhere — `SELECT col FROM table WHERE k = :k` reads the same on Postgres, Oracle, MySQL, SQL Server, SQLite and DB2. But some don't. Date functions, string concatenation, `LIMIT` / `FETCH FIRST`, sequence syntax, `MERGE` / `ON CONFLICT` — the moment any of those land in a query, you need different SQL per backend.

Liberty lets one query carry **per-dialect SQL** without cloning the query. The `sql` field accepts either a single string (the common case) or a **map** keyed by SQLAlchemy backend name with a mandatory `default` fallback.

---

## The two shapes

### Single-string `sql` — the default

```toml
[[connectors.crm.queries]]
name = "customer_count"
sql  = "SELECT COUNT(*) FROM customers"
```

One statement, runs everywhere. Pick this whenever you can.

### Per-dialect map

```toml
[[connectors.crm.queries]]
name = "monthly_revenue"

[connectors.crm.queries.sql]
default  = "SELECT date_trunc('month', invoice_date) AS m, SUM(total) FROM invoices GROUP BY 1"
oracle   = "SELECT TRUNC(invoice_date, 'MM') AS m, SUM(total) FROM invoices GROUP BY TRUNC(invoice_date, 'MM')"
mssql    = "SELECT DATEFROMPARTS(YEAR(invoice_date), MONTH(invoice_date), 1) AS m, SUM(total) FROM invoices GROUP BY YEAR(invoice_date), MONTH(invoice_date)"
```

Keyed by **SQLAlchemy backend name**. The engine reads the pool's dialect at execute time and picks the matching variant, falling back to `default` when no specific one exists.

---

## Supported dialect keys

The dialect strings come from SQLAlchemy. The values Liberty understands are the ones declared in the **Datasource Type** enum on the Pools page:

| Key | Database |
|---|---|
| `default` | Required fallback. Used when no specific variant matches. |
| `postgresql` | PostgreSQL. |
| `oracle` | Oracle. |
| `mysql` | MySQL. |
| `mariadb` | MariaDB. |
| `mssql` | Microsoft SQL Server. |
| `sqlite` | SQLite. |
| `db2` | IBM DB2. |

The validator enforces two rules on the map:

| Rule | Why |
|---|---|
| `default` **must** be present. | The engine needs a fallback for any pool not explicitly mapped. |
| `default` **must not** be empty. | An empty default would silently fail at execute time. |

---

## The editor

The single-query editor under **Settings → Connectors → Unclassified / Sequences / Lookups** renders the `sql` field as a SQL editor. To switch from single-string to per-dialect map, edit the underlying TOML — the form-side toggle is on the roadmap but not shipped today; for now the way in is:

1. Save the query as a single SQL string first.
2. Edit the connector TOML directly to convert `sql = "..."` into the `[<connector>.queries.sql]` block shown above.
3. Reload (the page's Save will refresh the form when you come back).

For the Tables tab (CRUD-shaped queries), the wizard always writes single-string SQL. If a `_get` needs per-dialect variants, generate it from the wizard first and convert afterwards.

---

## When you need it

The classic cases:

| Domain | Why varies |
|---|---|
| **Date truncation** | `date_trunc('month', d)` (Postgres) vs `TRUNC(d, 'MM')` (Oracle) vs `DATEFROMPARTS(...)` (MSSQL). |
| **Row limits** | `LIMIT 100` (Postgres / MySQL / SQLite) vs `FETCH FIRST 100 ROWS ONLY` (Oracle 12c+ / DB2) vs `TOP 100` (MSSQL). |
| **String concatenation** | `||` (Postgres / Oracle / SQLite) vs `CONCAT(...)` (MySQL) vs `+` (MSSQL). |
| **Upsert** | `INSERT ... ON CONFLICT (...) DO UPDATE` (Postgres) vs `MERGE INTO` (Oracle / DB2 / MSSQL) vs `INSERT ... ON DUPLICATE KEY UPDATE` (MySQL). |
| **Boolean storage** | `BOOLEAN` (Postgres) vs `NUMBER(1)` or `CHAR(1)` (Oracle) vs `BIT` (MSSQL). |
| **Recursive CTE** | `WITH RECURSIVE` (Postgres / SQLite) vs `WITH` (Oracle — RECURSIVE inferred from anchor + recursive members) vs `WITH ... AS` (MSSQL — same syntax as Postgres). |
| **JSON access** | `data->>'field'` (Postgres) vs `JSON_VALUE(data, '$.field')` (Oracle / MSSQL / MySQL 8). |

---

## Examples

### Row limit

```toml
[connectors.crm.queries.sql]
default = "SELECT * FROM invoices ORDER BY invoice_date DESC LIMIT 100"
oracle  = "SELECT * FROM invoices ORDER BY invoice_date DESC FETCH FIRST 100 ROWS ONLY"
mssql   = "SELECT TOP 100 * FROM invoices ORDER BY invoice_date DESC"
```

Note that `default` uses LIMIT (which works on Postgres / MySQL / MariaDB / SQLite) — so only Oracle and MSSQL need explicit entries.

### Upsert

```toml
[connectors.crm.queries.sql]
default = """
INSERT INTO customer_cache (customer_id, fetched_at, payload)
VALUES (:customer_id, :fetched_at, :payload)
ON CONFLICT (customer_id) DO UPDATE
SET fetched_at = EXCLUDED.fetched_at,
    payload    = EXCLUDED.payload
"""

oracle = """
MERGE INTO customer_cache t
USING (SELECT :customer_id AS customer_id FROM dual) s
ON (t.customer_id = s.customer_id)
WHEN MATCHED THEN UPDATE SET fetched_at = :fetched_at, payload = :payload
WHEN NOT MATCHED THEN INSERT (customer_id, fetched_at, payload)
                       VALUES (:customer_id, :fetched_at, :payload)
"""

mssql = """
MERGE customer_cache AS t
USING (VALUES (:customer_id)) AS s(customer_id)
ON t.customer_id = s.customer_id
WHEN MATCHED THEN UPDATE SET fetched_at = :fetched_at, payload = :payload
WHEN NOT MATCHED THEN INSERT (customer_id, fetched_at, payload)
                       VALUES (:customer_id, :fetched_at, :payload);
"""
```

Three databases, three syntaxes, one Liberty query name. Screens that wire `customer_cache_upsert` don't know — and shouldn't care — which dialect runs underneath.

### Date truncation in a chart query

```toml
[[connectors.reporting.queries]]
name        = "monthly_revenue"
type        = "custom"
description = "Aggregated invoice revenue per month, period filter on invoice_date"

[connectors.reporting.queries.sql]
default = """
SELECT date_trunc('month', invoice_date) AS month, SUM(total_ht) AS revenue
FROM   invoices
WHERE  invoice_date BETWEEN :from_date AND :to_date
GROUP BY 1 ORDER BY 1
"""

oracle = """
SELECT TRUNC(invoice_date, 'MM') AS month, SUM(total_ht) AS revenue
FROM   invoices
WHERE  invoice_date BETWEEN :from_date AND :to_date
GROUP BY TRUNC(invoice_date, 'MM')
ORDER BY TRUNC(invoice_date, 'MM')
"""

[[connectors.reporting.queries.params]]
name    = "from_date"
label   = "Period start"
default = "2026-01-01"

[[connectors.reporting.queries.params]]
name    = "to_date"
label   = "Period end"
default = "2026-12-31"
```

Same `:placeholder` params on both variants — bindings work the same way regardless of which dialect runs.

---

## How the engine picks

At execute time, the engine reads the **pool's dialect** (declared in *Settings → Pools → \<pool> → Datasource type*) and:

1. Looks up the dialect key in the `sql` map.
2. Falls back to `default` when no specific variant matches.
3. Errors out at parse time when `default` is missing or empty.

A connector that's pointed at a different pool — via the Clone-app flow or by switching the connector's `pool` value — automatically picks the matching variant. No code change needed.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Missing `default` key. | The connector fails to parse on save / reload. The error mentions "a per-dialect sql map must include a 'default' key". | Add a `default` variant. |
| Empty `default`. | Same parse error — "the 'default' sql variant must not be empty". | Fill it in — even a placeholder like `SELECT 1` is enough to pass validation while you finish the others. |
| Using `:placeholder` names that differ across variants. | Some calls bind a value that doesn't appear on the live variant — the engine silently ignores them. | Keep the placeholder set identical across every variant. If a parameter genuinely doesn't make sense on one dialect, redesign — split into two named queries. |
| Forgetting `ORDER BY` on a paged query. | Each backend has its own row ordering when ordering isn't specified — paging produces different results on Postgres vs Oracle. | Always `ORDER BY` when using LIMIT / FETCH / TOP. |
| Per-dialect SQL on the CRUD wizard's output. | The wizard always writes single-string SQL; copying to a map after the fact may break the dialog-Save's `:NAME_ORIGINAL` convention if you accidentally drop it. | When converting, mirror the convention on every variant. |

---

## When NOT to use per-dialect SQL

| Anti-pattern | Better |
|---|---|
| Two variants that differ only in cosmetic whitespace / column order. | One SQL string — let the operators see consistency. |
| One pool, no plans for another. | One SQL string — re-introduce the map later if you ever add a second dialect. |
| A complex statement that needs many per-dialect tweaks. | Two named queries — `monthly_revenue_pg` and `monthly_revenue_oracle` — and a single `python` step (or screen logic) that picks the right one. Easier to maintain when the variants diverge significantly. |

The per-dialect map shines for **small, predictable** differences (date truncation, row limits, upserts). For broad rewrites, separate named queries read more clearly.

---

## What's next

- [Concepts → Connectors](../../connectors.md) — the deep reference on pools and dialects.
- [Parameter binding](./parameter-binding.md) — `:placeholder` params behave identically across variants.
- [Clone a query or a connector](./clone.md) — when you'd rather have two named queries than one map.
