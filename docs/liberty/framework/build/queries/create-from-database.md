---
title: Create from a database table
description: "The CRUD Wizard — point Liberty at an existing table, tick the columns, get the four CRUD queries auto-generated and saved in one click."
keywords: [Liberty Framework, queries, CRUD, wizard, generate from database, introspection, ConnectorsBuilder]
---

# Create from a database table

When the table already lives in your database, the fastest path is the **CRUD Wizard**. You point it at a schema and a table, tick the columns you want the screen to see, mark which ones identify a row, and Liberty writes the four queries (`_get`, `_put`, `_post`, `_delete`) for you — including the `:NAME_ORIGINAL` rebind on UPDATE so a dialog's Save knows which row to find. Generated **column identifiers and bind names are upper-cased** (matching the SELECT wizard), so JDE columns come out uppercase.

This is the recommended path for any table that already exists. Skip it only when the table doesn't exist yet or when you want hand-written SQL — see [Create a custom query](./create-custom.md).

---

## Where it lives

The wizard is reached from **Liberty Next → Data → Connectors**:

1. Pick a connector in the left list.
2. Pick the **Tables** stage card.
3. Click **＋ Add queries** in the connector's header.
4. A choice modal opens. Pick **Generate from DB**.

The wizard then walks the connector's pool (`GET /api/sql/<connector>/_schemas`) and presents the schemas it found.

---

## The wizard layout

<svg viewBox="0 0 1320 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="22" width="860" height="538" rx="14" fill="url(#cw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="246" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Generate table from DB</text>
  <text x="411.84000000000003" y="48" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">· [connectors.crm]</text>
  <line x1="230" y1="62" x2="1090" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="82" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE NAME FILTER</text>
  <rect x="246" y="88" width="828" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="102.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">cust%</text>
  <text x="246" y="124" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="246" y="130" width="828" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="144.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="1060" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="246" y="166" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE NAME (QUERIES BECOME &lt;BASE&gt;_GET / _PUT / _POST / _DELETE)</text>
  <rect x="246" y="172" width="828" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="186.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="246" y="214" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMNS  (6 / 7 included · 1 key)</text>
  <rect x="246" y="222" width="828" height="108" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="256.0" y="233" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,238.5 L260.8,240.8 L264.8,236" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="242" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customer_id</text>
  <text x="343.38" y="242" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">INTEGER</text>
  <rect x="606.0" y="233" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,238.5 L610.8,240.8 L614.8,236" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="242" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="670.0" y="233" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,238.5 L674.8,240.8 L678.8,236" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="688.0" y="242" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">name</text>
  <text x="718.32" y="242" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(120)</text>
  <rect x="1020.0" y="233" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1037.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="1038.0" y="242" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="256.0" y="257" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,262.5 L260.8,264.8 L264.8,260" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="266" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">email</text>
  <text x="309.9" y="266" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(255)</text>
  <rect x="606.0" y="257" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="266" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="670.0" y="257" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,262.5 L674.8,264.8 L678.8,260" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="688.0" y="266" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">status</text>
  <text x="729.48" y="266" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(20)</text>
  <rect x="1020.0" y="257" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1037.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="1038.0" y="266" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="256.0" y="281" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,286.5 L260.8,288.8 L264.8,284" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="290" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">region</text>
  <text x="315.48" y="290" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(60)</text>
  <rect x="606.0" y="281" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="290" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="670.0" y="281" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,286.5 L674.8,288.8 L678.8,284" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="688.0" y="290" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">created_at</text>
  <text x="751.8" y="290" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">TIMESTAMP</text>
  <rect x="1020.0" y="281" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1037.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="1038.0" y="290" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="256.0" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="273.0" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="314" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">notes_blob</text>
  <text x="337.8" y="314" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">BYTEA</text>
  <rect x="606.0" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="314" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <text x="246" y="350" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHICH QUERIES TO EMIT</text>
  <rect x="246" y="358" width="99" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="254" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M256.5,370.5 L258.8,372.8 L262.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="271" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">SELECT (_get)</text>
  <rect x="353" y="358" width="99" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="361" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M363.5,370.5 L365.8,372.8 L369.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="378" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">UPDATE (_put)</text>
  <rect x="460" y="358" width="104" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="468" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M470.5,370.5 L472.8,372.8 L476.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="485" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">INSERT (_post)</text>
  <rect x="572" y="358" width="114" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="580" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M582.5,370.5 L584.8,372.8 L588.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="597" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">DELETE (_delete)</text>
  <rect x="246" y="394" width="828" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="256" y="404" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="278.0" y="415.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="316" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customers_get</text>
  <rect x="256" y="428" width="808" height="44" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="444" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="280" y="444" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT CUSTOMER_ID, NAME, EMAIL, STATUS, REGION, CREATED_AT</text>
  <text x="270" y="459" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="280" y="459" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM public.customers</text>
  <text x="256" y="506" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">… then UPDATE customers_put, INSERT customers_post, DELETE customers_delete — each editable.</text>
  <line x1="230" y1="518" x2="1090" y2="518" stroke="#1f2937" strokeWidth="1"/>
  <rect x="890" y="528" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="542.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="982" y="528" width="92" height="22" rx="5" fill="url(#cw-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1028.0" y="542.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filter, then table</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">LIKE pattern, read on the pool</text>
  <line x1="200" y1="97.0" x2="246" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Include a column</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in SELECT and INSERT</text>
  <line x1="200" y1="253.0" x2="256" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Queries to emit</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SELECT is required</text>
  <line x1="200" y1="377.0" x2="246" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="1120" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base name</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;base&gt;_get / _put / _post / _delete</text>
  <line x1="1120" y1="177.0" x2="1074" y2="183" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">KEY</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drives the WHERE of UPDATE / DELETE</text>
  <line x1="1120" y1="247.0" x2="1040.0" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="1120" y="420" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Generated SQL</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one editor per query</text>
  <line x1="1120" y1="437.0" x2="1064" y2="450" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
</svg>

---

## Step 1 — Pick a schema

The schema picker shows up only when the pool has more than one. PostgreSQL with a single `public` and SQLite skip it; Oracle (many schemas) requires it.

The wizard fetches schemas lazily — the initial open just lists names, the per-schema table walk happens after you pick. On a populous Oracle pool this saves you the 10+ seconds a full multi-schema walk would take.

---

## Step 2 — Filter table names

The **Table** list fills once a filter is typed (*Type a filter to list tables*): a SQL `LIKE` pattern (`customers%`, `F00%`, `%` for all) typed in the **Table name filter** box narrows the table list **server-side**, before the per-table column introspection runs. For pools with thousands of tables this is the difference between a snappy picker and a sluggish one.

The filter is debounced — type freely; the fetch fires ~350 ms after you stop.

---

## Step 3 — Pick the table

Once you pick a table, the wizard pulls its columns and pre-fills two sets:

| Set | Pre-fill rule |
|---|---|
| **Include** | Every column is ticked. |
| **Key** | Every column the database marks as `NOT NULL` is ticked. |

These are guesses — uncheck the columns you don't want surfaced (BLOBs, audit columns, computed fields) and confirm the keys. The **Base name** (*queries become `<base>_get / _put / _post / _delete`*) is filled from the table's name; change it to name the queries differently. The **Columns** heading counts what is included and how many keys are ticked.

---

## Step 4 — Tick columns and keys

Each row in the **Columns** list carries:

| Element | What it does |
|---|---|
| **Include checkbox** | When unticked, the column is dropped from `_get`'s `SELECT` and from `_post`'s `INSERT`. The dialog will not see it. |
| **Column name + type** | Read-only — comes from the live database. |
| **KEY checkbox** | Beside each column. When ticked, this column drives the `_put`'s `WHERE` clause (with `:NAME_ORIGINAL`) and the `_delete`'s `WHERE` clause. |

A row with **at least one** key is required for UPDATE / DELETE to emit anything. The wizard refuses to save without one.

---

## Step 5 — Pick which queries to emit

Four checkboxes under **Which queries to emit** — **SELECT (`_get`)**, **UPDATE (`_put`)**, **INSERT (`_post`)**, **DELETE (`_delete`)**. Tick the ones the table needs.

| Pattern | Tick |
|---|---|
| Read-only reference table. | SELECT only. |
| Standard CRUD table. | All four. |
| Append-only (audit log). | SELECT + INSERT. |
| Reference table edited only via INSERT-then-purge. | SELECT + INSERT + DELETE. |

The **SELECT** query is always emitted — at the very least the screen needs to read the table.

---

## Step 6 — Read the preview, override if needed

Under the choices, one editor per ticked CRUD slot shows the generated SQL, live, with its **Token** menu. Edit any preview directly — your edit wins over the auto-gen until you change the column / key selection again, which restores the generated version.

### The four shapes

```sql
-- _get : straight SELECT over the included columns
SELECT COL1, COL2, …
FROM   <schema>.<table>

-- _post : INSERT bound to :col placeholders
INSERT INTO <schema>.<table> (COL1, COL2, …)
VALUES                       (:COL1, :COL2, …)

-- _put  : UPDATE non-key columns, WHERE on key with :NAME_ORIGINAL
UPDATE <schema>.<table>
SET    NON_KEY1 = :NON_KEY1, NON_KEY2 = :NON_KEY2, …
WHERE  KEY1 = :KEY1_ORIGINAL
   AND KEY2 = :KEY2_ORIGINAL

-- _delete : DELETE keyed on :NAME (the dialog binds the row's current values)
DELETE FROM <schema>.<table>
WHERE  KEY1 = :KEY1
   AND KEY2 = :KEY2
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

| Use the wizard | Hand-write (`Add query` in the Queries view) |
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
