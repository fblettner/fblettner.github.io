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

**Liberty Next → Data → Connectors → pick a connector → stage card Sequences** (or **Lookups**) **→ ＋ Add sequence** (or **＋ Add lookup**).

The modal opens, introspects the pool, lists the schemas / tables.

:::note[Without a table]
The scaffold starts from a table. For a lookup or a sequence built on a join or any hand-written `SELECT`, create the record in **Liberty Next → Data → Dictionary** (Lookups or Sequences tab) and create its query from there — a blank query, or **Generate** from a table with the columns mapped to the record's fields.
:::

---

## Sequence — generate the next id

A *sequence* in Liberty is a query that returns one number — the next id to assign to a new row. It backs the dictionary's `SEQUENCE` rule: when a row is inserted, the server runs the sequence query inside the insert's transaction and writes the result into the column.

<svg viewBox="0 0 1320 527" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="280" y="22" width="760" height="487" rx="14" fill="url(#sq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="296" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">New sequence</text>
  <text x="394.64" y="48" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">· [connectors.crm]</text>
  <line x1="280" y1="62" x2="1040" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="296" y="82" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="296" y="88" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="102.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">public.customers</text>
  <text x="1010" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="128" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KEY COLUMN (MAX RETURNS THE NEXT +1)</text>
  <rect x="296" y="134" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="148.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customer_id · INTEGER</text>
  <text x="1010" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="174" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTIONAL WHERE CLAUSE (WITHOUT THE KEYWORD)</text>
  <rect x="296" y="180" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="194.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">region = :REGION</text>
  <text x="296" y="220" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY NAME</text>
  <rect x="296" y="226" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="240.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_customer_id_from_customers_get</text>
  <text x="296" y="266" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="296" y="272" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="286.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_customer_id_from_customers</text>
  <text x="296" y="312" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="296" y="318" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="332.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Get customer_id from customers</text>
  <text x="296" y="358" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERATED SQL — EDITABLE</text>
  <rect x="296" y="366" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="327.0" y="379.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Token</text>
  <rect x="296" y="392" width="728" height="59" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="408" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="320" y="408" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT COALESCE(MAX(customer_id), 0) + 1 AS NEXT_ID</text>
  <text x="310" y="423" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="320" y="423" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM public.customers</text>
  <text x="310" y="438" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="320" y="438" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">WHERE region = :REGION</text>
  <line x1="280" y1="465" x2="1040" y2="465" stroke="#1f2937" strokeWidth="1"/>
  <rect x="844" y="475" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.0" y="489.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="934" y="475" width="90" height="22" rx="5" fill="url(#sq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="979.0" y="489.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Key column</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">MAX(...) + 1 gives the next</text>
  <line x1="200" y1="145.0" x2="296" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
  <rect x="20" y="194" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="209" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Optional filter</text>
  <text x="30" y="222" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">:params allowed</text>
  <line x1="200" y1="211.0" x2="296" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
  <rect x="1080" y="266" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="281" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Id</text>
  <text x="1090" y="294" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the dictionary sequence</text>
  <line x1="1080" y1="283.0" x2="1024" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
  <rect x="1080" y="398" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Generated SQL</text>
  <text x="1090" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">editable before saving</text>
  <line x1="1080" y1="415.0" x2="1024" y2="408" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
</svg>

### Field by field

| Field | Notes |
|---|---|
| **Table** | The source. Schema picker shows up on multi-schema pools. |
| **Key column** | The column whose `MAX(...) + 1` gives the next value. The pool introspection lists every column with its SQL type. |
| **Optional WHERE clause (without the keyword)** | The body of a `WHERE` clause. Use `:placeholder` params if the filter needs to vary per call — e.g. `region = :region` to scope the sequence per region. |
| **Query name** | Auto-suggested as `get_<keyCol>_from_<table>_get` (kept short via `slugify`). Override freely. The `_get` suffix is convention — sequences are read queries. |
| **Id** | The key under `[sequences.*]` in the dictionary. Auto-suggested as `get_<keyCol>_from_<table>`. |
| **Description** | Shown in listings and tooltips. Auto-filled as *"Get \<col> from \<table>"*. |
| **Generated SQL — editable** | Live preview, with the **Token** menu. Editable — your edits stick until you change the column / table / WHERE inputs, which restores the generated form. |

### What gets saved

| File | Entry |
|---|---|
| Connector file | The query, in the connector's **Sequences** section. |
| Dictionary file | `[connectors.<conn>.sequences.<seqId>] query = "<queryName>"`, `dd_id = "<keyCol>"`, optional `description` |

A dictionary entry (or a screen column) with the rule `SEQUENCE` and **Rules values** = `<seqId>` gets its number from this query on each insert. With `dd_id` set, every column whose entry has that key is numbered too.

### Concurrency note

`SELECT MAX(...) + 1` is **not** atomic — two simultaneous INSERTs can both read the same MAX and produce a collision. Adequate when:

- Your INSERT happens behind a transactional UI (the user sees one dialog at a time).
- The id column has a database-level uniqueness constraint that will reject the duplicate (the screen reports the error and the operator retries).

For high-concurrency workloads, define the column as a **database SEQUENCE** (Postgres `SEQUENCE`, Oracle `SEQUENCE`, Identity column) and have the sequence query return `nextval(...)` instead — the database guarantees uniqueness.

---

## Lookup — supply a dropdown's options

A *lookup* in Liberty is a query that returns rows of *(value, label)* pairs — the source for a screen column's dropdown. It backs the dictionary's `LOOKUP` rule: a column with the rule `LOOKUP` and **Rules values** = `<lookupId>` shows the label instead of the code and offers the lookup's rows in a searchable list.

<svg viewBox="0 0 1320 588" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lk-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lk-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lk-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="280" y="22" width="760" height="548" rx="14" fill="url(#lk-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="296" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">New lookup</text>
  <text x="381.2" y="48" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">· [connectors.crm]</text>
  <line x1="280" y1="62" x2="1040" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="296" y="82" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="296" y="88" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="102.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">public.regions</text>
  <text x="1010" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="128" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALUE COLUMN (THE CODE STORED ON THE ROW)</text>
  <rect x="296" y="134" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="148.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">region_code · VARCHAR(8)</text>
  <text x="1010" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="174" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL COLUMN (THE DESCRIPTION SHOWN TO THE USER)</text>
  <rect x="296" y="180" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="194.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">region_name · VARCHAR(60)</text>
  <text x="1010" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="220" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTIONAL WHERE CLAUSE (WITHOUT THE KEYWORD)</text>
  <rect x="296" y="226" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="240.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">active = 'Y'</text>
  <text x="296" y="266" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY NAME</text>
  <rect x="296" y="272" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="286.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_regions_get</text>
  <text x="296" y="312" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="296" y="318" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="332.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_regions</text>
  <text x="296" y="358" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="296" y="364" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="378.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Regions</text>
  <text x="296" y="404" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERATED SQL — EDITABLE</text>
  <rect x="296" y="412" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="327.0" y="425.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Token</text>
  <rect x="296" y="438" width="728" height="74" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="454" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="320" y="454" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT region_code, region_name</text>
  <text x="310" y="469" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="320" y="469" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM public.regions</text>
  <text x="310" y="484" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="320" y="484" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">WHERE active = 'Y'</text>
  <text x="310" y="499" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="320" y="499" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">ORDER BY region_name</text>
  <line x1="280" y1="526" x2="1040" y2="526" stroke="#1f2937" strokeWidth="1"/>
  <rect x="844" y="536" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.0" y="550.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="934" y="536" width="90" height="22" rx="5" fill="url(#lk-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="979.0" y="550.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Value column</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the code stored</text>
  <line x1="200" y1="145.0" x2="296" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Label column</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the user reads</text>
  <line x1="200" y1="217.0" x2="296" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
  <rect x="1080" y="312" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="327" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Id</text>
  <text x="1090" y="340" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the dictionary lookup</text>
  <line x1="1080" y1="329.0" x2="1024" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
  <rect x="1080" y="444" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="459" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Generated SQL</text>
  <text x="1090" y="472" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">editable before saving</text>
  <line x1="1080" y1="461.0" x2="1024" y2="454" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
</svg>

### Field by field

| Field | Notes |
|---|---|
| **Table** | The source of the dropdown rows. |
| **Value column** | The code stored on the row when the user picks an option. Type matters — `VARCHAR(8)` value column expects a VARCHAR target column on the screen. |
| **Label column** | The text shown to the user. Pick **Same as value column** when the value is already human-readable (e.g. country code displayed as code). |
| **Optional WHERE clause (without the keyword)** | Body of a `WHERE` clause. Common patterns: `active = 'Y'`, `deleted_at IS NULL`. Use `:placeholder` params for filter-cascaded lookups (e.g. show only regions for the selected country — see [Parameter binding](./parameter-binding.md)). |
| **Query name** | Auto-suggested as `get_<table>_get`. |
| **Id** | The key under `[lookups.*]` in the dictionary. Auto-suggested as `get_<table>`. |
| **Description** | Shown in listings and tooltips. |
| **Generated SQL — editable** | Live preview, editable. The `ORDER BY <label>` is added automatically — drop it if the rows have an intrinsic order. |

### What gets saved

| File | Entry |
|---|---|
| Connector file | The query, in the connector's **Lookups** section. |
| Dictionary file | `[connectors.<conn>.lookups.<lookupId>] query = "<queryName>"`, `value = "<valueCol>"`, `label = "<labelCol>"`, optional `description` |

### Cascading lookups

When the list should depend on **another field of the same row** — *Role* depends on *Application* — the lookup query takes a parameter, and the screen column binds it:

- in the dialog and grid editing, the column's **lookup_param_binds** — `{ param = "APP_ID", source = "APP_ID" }`;
- in the grid's filter panel, the column's **filter_from**, which narrows the filter's options on the value of another filter.

See [Parameter binding](./parameter-binding.md#where) and [Columns](../screens/columns.md).

```sql
SELECT ROLE_ID, ROLE_NAME
FROM   roles
WHERE  APP_ID = :APP_ID
ORDER BY ROLE_NAME
```

---

## What's next

- [Parameter binding](./parameter-binding.md) — for sequences/lookups that take parameters from screen context.
- [Per-dialect SQL variants](./per-dialect-sql.md) — for a lookup that hits Postgres and Oracle.
- [Dictionary](../../dictionary.md) — every field of a lookup and a sequence, and the other rules.
