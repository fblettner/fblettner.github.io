---
title: Create from a database table
description: "The CRUD Wizard — point Liberty at an existing table, tick the columns, get the four CRUD queries auto-generated and saved in one click."
keywords: [Liberty Framework, queries, CRUD, wizard, generate from database, introspection, ConnectorsBuilder]
---

# Create from a database table

When the table already lives in your database, the fastest path is the **CRUD Wizard**. You point it at a schema and a table, tick the columns you want the screen to see, mark which ones identify a row, and Liberty writes the four queries (`_get`, `_put`, `_post`, `_delete`) for you — including the `:NAME_ORIGINAL` rebind on UPDATE so a dialog's Save knows which row to find.

This is the recommended path for any table that already exists. Skip it only when the table doesn't exist yet or when you want hand-written SQL — see [Create a custom query](./create-custom.md).

---

## Where it lives

The wizard is reached from **Settings → Connectors**:

1. Pick a connector in the left list.
2. Switch the right pane's mode bar to **Tables**.
3. Click **＋ Add table** at the top-right.
4. A choice modal opens. Pick **Generate from DB**.

The wizard then walks the connector's pool (`GET /api/sql/<connector>/_schemas`) and presents the schemas it found.

---

## The wizard layout

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="cw-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="500" rx="14" fill="url(#cw-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Generate table from DB · [connectors.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="86" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · SCHEMA</text>
  <rect x="40" y="92" width="280" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="52" y="109" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">public ▾</text>

  <text x="340" y="86" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · NAME FILTER</text>
  <rect x="340" y="92" width="280" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="352" y="109" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">customers%</text>

  <text x="640" y="86" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · TABLE</text>
  <rect x="640" y="92" width="300" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="652" y="109" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers ▾</text>

  <rect x="40" y="138" width="450" height="270" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="158" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · COLUMNS · 7 / 9</text>
  <rect x="58" y="170" width="200" height="22" rx="4" fill="rgba(74,158,255,0.08)"/>
  <text x="76" y="184" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ customer_id</text>
  <text x="200" y="184" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">INT4</text>
  <rect x="270" y="170" width="50" height="20" rx="3" fill="rgba(251,146,60,0.20)"/>
  <text x="295" y="184" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">KEY</text>

  <text x="76" y="208" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ name</text>
  <text x="200" y="208" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(120)</text>
  <text x="76" y="226" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ email</text>
  <text x="200" y="226" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(255)</text>
  <text x="76" y="244" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ created_at</text>
  <text x="200" y="244" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">TIMESTAMP</text>
  <text x="76" y="262" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ owner_id</text>
  <text x="200" y="262" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">INT4</text>
  <text x="76" y="280" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ status</text>
  <text x="200" y="280" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(20)</text>
  <text x="76" y="298" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ region</text>
  <text x="200" y="298" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(60)</text>
  <text x="76" y="316" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">☐ notes_blob</text>
  <text x="200" y="316" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">BLOB</text>
  <text x="76" y="334" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">☐ search_vector</text>
  <text x="200" y="334" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">TSVECTOR</text>

  <text x="58" y="368" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · QUERIES TO EMIT</text>
  <rect x="58" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="98" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="ui-monospace, monospace">☑ SELECT</text>
  <rect x="144" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="184" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">☑ UPDATE</text>
  <rect x="230" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="270" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">☑ INSERT</text>
  <rect x="316" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="356" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">☑ DELETE</text>

  <rect x="510" y="138" width="450" height="270" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="528" y="158" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">6 · LIVE PREVIEW</text>
  <rect x="528" y="170" width="40" height="18" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="548" y="183" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <text x="578" y="183" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">customers_get</text>
  <text x="528" y="202" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="528" y="216" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">  customer_id, name, email,</text>
  <text x="528" y="230" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">  created_at, owner_id, status,</text>
  <text x="528" y="244" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">  region</text>
  <text x="528" y="258" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">FROM public.customers</text>

  <rect x="528" y="278" width="40" height="18" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="548" y="291" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <text x="578" y="291" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">customers_put</text>
  <text x="528" y="310" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE public.customers</text>
  <text x="528" y="324" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">SET name = :name, email = :email,</text>
  <text x="528" y="338" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">    created_at = :created_at,</text>
  <text x="528" y="352" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">    owner_id = :owner_id,</text>
  <text x="528" y="366" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">    status = :status, region = :region</text>
  <text x="528" y="380" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">WHERE customer_id = :customer_id_ORIGINAL</text>

  <line x1="20" y1="430" x2="980" y2="430" stroke="#1f2937" strokeWidth="1"/>
  <rect x="780" y="450" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="468" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="870" y="450" width="80" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="910" y="468" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
</svg>

---

## Step 1 — Pick a schema

The schema picker shows up only when the pool has more than one. PostgreSQL with a single `public` and SQLite skip it; Oracle (many schemas) requires it.

The wizard fetches schemas lazily — the initial open just lists names, the per-schema table walk happens after you pick. On a populous Oracle pool this saves you the 10+ seconds a full multi-schema walk would take.

---

## Step 2 — Filter table names (optional)

A SQL `LIKE` pattern (`customers%`, `F00%`) typed in the **Name filter** box narrows the table list **server-side**, before the per-table column introspection runs. For pools with thousands of tables this is the difference between a snappy picker and a sluggish one.

The filter is debounced — type freely; the fetch fires ~350 ms after you stop.

---

## Step 3 — Pick the table

Once you pick a table, the wizard pulls its columns and pre-fills two sets:

| Set | Pre-fill rule |
|---|---|
| **Include** | Every column is ticked. |
| **Key** | Every column the database marks as `NOT NULL` is ticked. |

These are guesses — uncheck the columns you don't want surfaced (BLOBs, audit columns, computed fields) and confirm the keys.

---

## Step 4 — Tick columns and keys

Each row in the **Columns** list carries:

| Element | What it does |
|---|---|
| **Include checkbox** | When unticked, the column is dropped from `_get`'s `SELECT` and from `_post`'s `INSERT`. The dialog will not see it. |
| **Column name + type** | Read-only — comes from the live database. |
| **KEY toggle** | Pinned to the right. When ticked, this column drives the `_put`'s `WHERE` clause (with `:NAME_ORIGINAL`) and the `_delete`'s `WHERE` clause. |

A row with **at least one** key is required for UPDATE / DELETE to emit anything. The wizard refuses to save without one.

---

## Step 5 — Pick which queries to emit

Four checkboxes — **SELECT (`_get`)**, **UPDATE (`_put`)**, **INSERT (`_post`)**, **DELETE (`_delete`)**. Tick the ones the table needs.

| Pattern | Tick |
|---|---|
| Read-only reference table. | SELECT only. |
| Standard CRUD table. | All four. |
| Append-only (audit log). | SELECT + INSERT. |
| Reference table edited only via INSERT-then-purge. | SELECT + INSERT + DELETE. |

The **SELECT** query is always emitted — at the very least the screen needs to read the table.

---

## Step 6 — Read the preview, override if needed

The right column shows the generated SQL for every ticked CRUD slot, live. Edit any preview directly — your edit wins over the auto-gen until you change the column / key selection again, which restores the generated version.

### The four shapes

```sql
-- _get : straight SELECT over the included columns
SELECT col1, col2, …
FROM   <schema>.<table>

-- _post : INSERT bound to :col placeholders
INSERT INTO <schema>.<table> (col1, col2, …)
VALUES                       (:col1, :col2, …)

-- _put  : UPDATE non-key columns, WHERE on key with :NAME_ORIGINAL
UPDATE <schema>.<table>
SET    non_key1 = :non_key1, non_key2 = :non_key2, …
WHERE  key1 = :key1_ORIGINAL
   AND key2 = :key2_ORIGINAL

-- _delete : DELETE keyed on :NAME (the dialog binds the row's current values)
DELETE FROM <schema>.<table>
WHERE  key1 = :key1
   AND key2 = :key2
```

### Why `:NAME_ORIGINAL` on UPDATE?

A dialog's Save sends two snapshots of every key column: the current value (`:key1`) and the value the row had when the dialog opened (`:key1_ORIGINAL`). The UPDATE matches on the *original* so the row is found even when the operator edited the key itself. The CRUD Wizard wires this convention for you — if you hand-write a `_put` later, mirror it.

---

## Step 7 — Save

The **Save** button:

1. Appends the ticked queries to the connector's queries list.
2. Saves the connector file.
3. Triggers a hot reload — the new queries are callable immediately.

The four new queries appear in the **Tables** tab grouped under their shared base name, with the four CRUD slot badges showing which were emitted.

---

## Validation — what blocks Save

| Error | Cause | Fix |
|---|---|---|
| *Pick a table.* | No table selected. | Pick one. |
| *Name the table.* | The **base name** field is empty (auto-derived from the table name; clear it to override). | Type a base name — letters, digits, underscores. |
| *Include at least one column.* | Every column was unticked. | Tick at least one. |
| *The read (\_get) query is required.* | SELECT was unticked. | Tick it back. |
| *Pick at least one key column for UPDATE / DELETE.* | UPDATE or DELETE is ticked but no column has KEY on. | Mark the key column(s). |
| *A query named "X" already exists.* | The base name produces a `<base>_get` (or `_put` / `_post` / `_delete`) that collides with an existing query on this connector. | Pick a different base, or delete the old one first. |

---

## What you've just built

For a `customers` table with `customer_id` as the key, the wizard generated four queries:

| Name | Type | Used by |
|---|---|---|
| `customers_get` | `table` (read) | The grid + form's read. |
| `customers_put` | `table` (write) | The dialog's Save (UPDATE). |
| `customers_post` | `table` (write) | The dialog's Save (INSERT). |
| `customers_delete` | `table` (write) | The grid's Delete action. |

They land in the **Tables** tab as one row labelled `customers` with the four GET / PUT / POS / DEL badges all green. The next step is to **build a screen on top** — covered in the upcoming Screens section.

---

## When to use the wizard vs hand-write

| Use the wizard | Hand-write (`Add query` on Unclassified) |
|---|---|
| The table exists in the DB. | The query is a custom report, an aggregate, or a stored procedure call. |
| You want the four standard CRUD shapes. | You need a `JOIN`, a `GROUP BY`, a `RECURSIVE` CTE. |
| You're starting from scratch and the columns are the source of truth. | You want a query that doesn't map 1-1 to a table. |

The wizard is the right tool for **80% of operational tables**. The other 20% — analytics, reports, multi-table joins — go through [Create a custom query](./create-custom.md).

---

## What's next

- [Create a custom query](./create-custom.md) — when the wizard doesn't fit.
- [Clone a query or a connector](./clone.md) — start from an existing query instead of from scratch.
- [Parameter binding](./parameter-binding.md) — give the `:placeholder` params labels, defaults and bind values from screens.
