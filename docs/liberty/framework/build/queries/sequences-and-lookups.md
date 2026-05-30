---
title: Sequences and lookups
description: "The Scaffold modal — tick a table and a column, get a generated sequence (next id) or lookup (value + label) query plus the matching dictionary entry, saved in one click."
keywords: [Liberty Framework, sequence, lookup, scaffold, dictionary, next id, dropdown source, ConnectorsBuilder]
---

# Sequences and lookups

Two query patterns recur often enough that Liberty ships a wizard for each:

| Pattern | Purpose | Typical SQL |
|---|---|---|
| **Sequence** | Compute the next value for an id column. | `SELECT COALESCE(MAX(<col>), 0) + 1 AS NEXT_ID FROM <table>` |
| **Lookup** | Supply value + label pairs for a dropdown bound to a screen column. | `SELECT <value>, <label> FROM <table> ORDER BY <label>` |

Both go through the **Scaffold** modal — tick a table, tick column(s), get a live SQL preview, save. The save writes **two files**: the query into the connector and the matching entry into the dictionary, atomically.

---

## Where they live

**Settings → Connectors → pick a connector → mode bar: Sequences** (or **Lookups**) **→ ＋ Add sequence** (or **＋ Add lookup**).

The modal opens, introspects the pool, lists the schemas / tables.

---

## Sequence — generate the next id

A *sequence* in Liberty is a query that returns one number — the next id to assign to a new row. It backs the dictionary's `SEQUENCE` rule: a screen field marked `SEQUENCE` reads from the sequence query each time the dialog opens for INSERT.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sq-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#sq-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New sequence · [connectors.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="200" y="80" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">public.customers ▾</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Key column</text>
  <text x="40" y="138" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(MAX returns the next +1)</text>
  <rect x="200" y="116" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customer_id ▾  ·  INT4</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Optional WHERE</text>
  <rect x="200" y="148" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="163" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">e.g. region = :region</text>

  <text x="40" y="194" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Query name</text>
  <rect x="200" y="184" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="199" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_customer_id_from_customers_get</text>

  <text x="40" y="226" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Sequence id</text>
  <rect x="200" y="216" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="231" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_customer_id_from_customers</text>

  <text x="40" y="258" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="200" y="248" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="263" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Get customer_id from customers</text>

  <text x="40" y="294" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIVE SQL PREVIEW · editable</text>
  <rect x="40" y="304" width="890" height="120" rx="6" fill="rgba(0,0,0,0.40)" stroke="#334155"/>
  <text x="56" y="328" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="56" y="346" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  COALESCE(MAX(customer_id), 0) + 1 AS NEXT_ID</text>
  <text x="56" y="364" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">FROM</text>
  <text x="56" y="382" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  public.customers</text>
</svg>

### Field by field

| Field | Notes |
|---|---|
| **Table** | The source. Schema picker shows up on multi-schema pools. |
| **Key column** | The column whose `MAX(...) + 1` gives the next value. The pool introspection lists every column with its SQL type. |
| **Optional WHERE** | The body of a `WHERE` clause (without the keyword). Use `:placeholder` params if the filter needs to vary per call — e.g. `region = :region` to scope the sequence per region. |
| **Query name** | Auto-suggested as `get_<keyCol>_from_<table>_get` (kept short via `slugify`). Override freely. The `_get` suffix is convention — sequences are read queries. |
| **Sequence id** | The key under `[sequences.*]` in the dictionary. Auto-suggested as `get_<keyCol>_from_<table>`. |
| **Description** | Shown in listings and tooltips. Auto-filled as *"Get \<col> from \<table>"*. |
| **Generated SQL** | Live preview. Editable — your edits stick until you change the column / table / WHERE inputs, which restores the generated form. |

### What gets saved

| File | Entry |
|---|---|
| Connector file | `{ name = "<queryName>", type = "sequence", sql = "..." }` |
| Dictionary file | `[connectors.<conn>.sequences.<seqId>] query = "<queryName>"`, `dd_id = "<keyCol>"`, optional `description` |

The dictionary entry is what the SEQUENCE rule looks up. A column on a screen marked rule `SEQUENCE` with `sequence = "<seqId>"` calls this query when the dialog opens for INSERT and pre-fills the field with the result.

### Concurrency note

`SELECT MAX(...) + 1` is **not** atomic — two simultaneous INSERTs can both read the same MAX and produce a collision. Adequate when:

- Your INSERT happens behind a transactional UI (the user sees one dialog at a time).
- The id column has a database-level uniqueness constraint that will reject the duplicate (the screen reports the error and the operator retries).

For high-concurrency workloads, define the column as a **database SEQUENCE** (Postgres `SEQUENCE`, Oracle `SEQUENCE`, Identity column) and have the sequence query return `nextval(...)` instead — the database guarantees uniqueness.

---

## Lookup — supply a dropdown's options

A *lookup* in Liberty is a query that returns rows of *(value, label)* pairs — the source for a screen column's dropdown. It backs the dictionary's `LOOKUP` rule: a column marked `LOOKUP` with `lookup = "<id>"` renders as a dropdown sourced from the lookup query.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lk-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#lk-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New lookup · [connectors.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="200" y="80" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">public.regions ▾</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Value column</text>
  <text x="40" y="138" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(the code stored on the row)</text>
  <rect x="200" y="116" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">region_code ▾  ·  VARCHAR(8)</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Label column</text>
  <text x="40" y="174" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(the description shown to the user)</text>
  <rect x="200" y="148" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="163" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">region_name ▾  ·  VARCHAR(60)</text>

  <text x="40" y="196" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Optional WHERE</text>
  <rect x="200" y="184" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="199" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">active = 'Y'</text>

  <text x="40" y="228" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Query name</text>
  <rect x="200" y="216" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="231" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_regions_get</text>

  <text x="40" y="260" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Lookup id</text>
  <rect x="200" y="248" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="263" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_regions</text>

  <text x="40" y="294" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIVE SQL PREVIEW · editable</text>
  <rect x="40" y="304" width="890" height="120" rx="6" fill="rgba(0,0,0,0.40)" stroke="#334155"/>
  <text x="56" y="328" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="56" y="346" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  region_code, region_name</text>
  <text x="56" y="364" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">FROM</text>
  <text x="56" y="382" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  public.regions</text>
  <text x="56" y="400" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">WHERE</text>
  <text x="56" y="418" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  active = 'Y' ORDER BY region_name</text>
</svg>

### Field by field

| Field | Notes |
|---|---|
| **Table** | The source of the dropdown rows. |
| **Value column** | The code stored on the row when the user picks an option. Type matters — `VARCHAR(8)` value column expects a VARCHAR target column on the screen. |
| **Label column** | The text shown to the user. Pick **Same as value column** when the value is already human-readable (e.g. country code displayed as code). |
| **Optional WHERE** | Body of a `WHERE` clause without the keyword. Common patterns: `active = 'Y'`, `deleted_at IS NULL`. Use `:placeholder` params for filter-cascaded lookups (e.g. show only regions for the selected country — see [Parameter binding](./parameter-binding.md)). |
| **Query name** | Auto-suggested as `get_<table>_get`. |
| **Lookup id** | The key under `[lookups.*]` in the dictionary. Auto-suggested as `get_<table>`. |
| **Description** | Shown in listings and tooltips. |
| **Generated SQL** | Live preview, editable. The `ORDER BY <label>` is added automatically — drop it if the rows have an intrinsic order. |

### What gets saved

| File | Entry |
|---|---|
| Connector file | `{ name = "<queryName>", type = "lookup", sql = "..." }` |
| Dictionary file | `[connectors.<conn>.lookups.<lookupId>] query = "<queryName>"`, `value = "<valueCol>"`, `label = "<labelCol>"`, optional `description` |

### Cascading lookups

When the dropdown should be **filtered by another field on the same screen** — e.g. *Role* depends on *Application* — the lookup needs a `:placeholder` in the WHERE clause, and the screen's column declares a `filter_from` referencing the parent. The wiring lives on the screen side ([Concepts → Form conditions](../../form-conditions.md) until the Screens build section ships); the lookup query itself just needs the `:placeholder`.

```sql
SELECT role_id, role_name
FROM   roles
WHERE  app_id = :app_id
ORDER BY role_name
```

---

## What's next

- [Parameter binding](./parameter-binding.md) — for sequences/lookups that take parameters from screen context.
- [Per-dialect SQL variants](./per-dialect-sql.md) — for a lookup that hits Postgres and Oracle.
- [Concepts → Dictionary](../../dictionary.md) — the wider reference: `SEQUENCE`, `LOOKUP`, `LOGIN`, `SYSDATE` and the other dictionary rules.
