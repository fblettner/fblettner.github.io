---
title: Per-dialect SQL variants
description: "Ship one Liberty query with different SQL on Postgres, Oracle, MySQL, SQL Server, SQLite and DB2 — the per-dialect `sql` map, when to use it, common gotchas."
keywords: [Liberty Framework, SQL dialect, Postgres, Oracle, MySQL, MSSQL, SQLite, DB2, sql map, default]
---

# Per-dialect SQL variants

Most queries are SQL that runs everywhere — `SELECT col FROM table WHERE k = :k` reads the same on Postgres, Oracle, MySQL, SQL Server, SQLite and DB2. But some don't. Date functions, string concatenation, `LIMIT` / `FETCH FIRST`, sequence syntax, `MERGE` / `ON CONFLICT` — the moment any of those land in a query, you need different SQL per backend.

Liberty lets one query carry **per-dialect SQL** without cloning the query. The `sql` field accepts either a single string (the common case) or a **map** keyed by SQLAlchemy backend name with a mandatory `default` fallback.

---

## At a glance

<svg viewBox="0 0 1320 328" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="280" rx="14" fill="url(#pds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="30" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="35" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="45.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="332.24" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MONTHLY_REVENUE</text>
  <line x1="437" y1="42" x2="447" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#pds-flow)"/>
  <rect x="448" y="30" width="220" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="455" y="35" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="475" y="45.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATEMENT</text>
  <text x="538.416" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">SELECT · default, oracle</text>
  <line x1="669" y1="42" x2="679" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#pds-flow)"/>
  <rect x="680" y="30" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="687" y="35" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="707" y="45.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <text x="776.24" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 declared</text>
  <text x="236" y="76" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL ∗</text>
  <text x="236" y="96" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">default (required)</text>
  <rect x="236" y="104" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.0" y="117.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Token</text>
  <rect x="956" y="104" width="70" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="991.0" y="117.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Wizard</text>
  <rect x="1032" y="104" width="52" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="117.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="236" y="130" width="848" height="29" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="146" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="260" y="146" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS M, SUM(total) FROM invoices GROUP BY 1</text>
  <text x="236" y="181" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">oracle</text>
  <rect x="236" y="189" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.0" y="202.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Token</text>
  <rect x="922" y="189" width="70" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="202.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Wizard</text>
  <rect x="998" y="189" width="52" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1024.0" y="202.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="236" y="215" width="814" height="29" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="231" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="260" y="231" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SELECT TRUNC(invoice_date, 'MM') AS M, SUM(total) FROM invoices GROUP BY TRUNC(invoice_date, 'MM')</text>
  <rect x="1060" y="215" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1072.0" y="230" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="236" y="256" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="271.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">dialect (e.g. oracle)</text>
  <rect x="444" y="257" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="271.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">single</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">default</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">used when no variant matches</text>
  <line x1="200" y1="113.0" x2="236" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a dialect</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type it, press Enter</text>
  <line x1="200" y1="267.0" x2="236" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1120" y="161" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="176" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remove a variant</text>
  <text x="1130" y="189" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the × beside it</text>
  <line x1="1120" y1="178.0" x2="1072" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1120" y="207" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="222" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A variant</text>
  <text x="1130" y="235" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked by the pool's dialect</text>
  <line x1="1120" y1="224.0" x2="1048" y2="231" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1120" y="278" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">single</text>
  <text x="1130" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">back to one statement</text>
  <line x1="1120" y1="295.0" x2="486" y2="269" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
</svg>

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

The dialect strings come from SQLAlchemy. A pool's dialect follows its **Database type** (stage *Database* of the Pools page) — or, for a URL typed by hand, the URL's scheme:

| Key | Database |
|---|---|
| `default` | Required fallback. Used when no specific variant matches. |
| `postgresql` | PostgreSQL. |
| `oracle` | Oracle. |
| `mysql` | MySQL. |
| `mariadb` | MariaDB. |
| `mssql` | Microsoft SQL Server. |
| `sqlite` | SQLite. |
| `db2` | IBM Db2 (Linux, UNIX, Windows). |
| `ibmi` | Db2 for i (IBM i, AS/400). |

A Db2 or IBM i pool is named `db2` / `ibmi` everywhere, before and after it is connected — not after the name IBM's driver gives itself — so a variant written under `db2` or `ibmi` is the one that runs.

The validator enforces two rules on the map:

| Rule | Why |
|---|---|
| `default` **must** be present. | The engine needs a fallback for any pool not explicitly mapped. |
| `default` **must not** be empty. | An empty default would silently fail at execute time. |

---

## The editor

In the query editor (**Liberty Next → Data → Connectors**, section Tables, Queries, Sequences or Lookups, stage **Statement**), the **SQL** field is a single SQL editor:

1. **+ per-dialect variants** turns it into a list of variants, starting with `default (required)` holding the current SQL.
2. Type a dialect name (`oracle`, `postgresql`, `mssql`…) in the **dialect** field and press Enter: a new editor appears for that variant.
3. The **×** next to a variant removes it; **single** goes back to one statement once only `default` remains.

The CRUD wizard writes single-statement SQL; a generated query is converted the same way afterwards.

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

At execute time, the engine reads the **pool's dialect** (its **Database type**, in *Liberty Next → Administer → Pools → \<pool> → Database*) and:

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
