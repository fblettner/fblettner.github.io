---
title: Create a custom query
description: "Write a standalone query by hand — the Unclassified tab, the editor form, the writable gate, the params block, the SQL editor with autocompletion."
keywords: [Liberty Framework, custom query, hand-written SQL, Unclassified, QueryDef, writable, params]
---

# Create a custom query

When the wizard doesn't fit — analytics, reports, multi-table joins, stored-procedure calls, anything that doesn't map 1-1 to a single table — write the query by hand under the **Unclassified** tab.

This page walks the editor form field by field, with the verified shape from the `QueryDef` schema.

---

## Where it lives

**Settings → Connectors → pick a connector → mode bar: Unclassified → ＋ Add query**.

The page prompts for a name, creates an empty `custom` query, opens its editor.

---

## The editor form

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ce-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="440" rx="14" fill="url(#ce-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Connectors · [connectors.crm] · Unclassified</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="70" y="94" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back</text>
  <text x="115" y="94" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <rect x="720" y="76" width="70" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="755" y="93" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="796" y="76" width="62" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="827" y="93" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Clone</text>
  <rect x="864" y="76" width="64" height="26" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="896" y="93" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Delete</text>

  <text x="40" y="128" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">type</text>
  <rect x="200" y="116" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">custom ▾</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">writable</text>
  <rect x="200" y="148" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="234" y="162" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">SELECT only when off — flip on for INSERT / UPDATE / DELETE / CALL</text>

  <text x="40" y="194" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">sql</text>
  <rect x="200" y="184" width="730" height="160" rx="6" fill="rgba(0,0,0,0.40)" stroke="#334155"/>
  <text x="216" y="206" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="216" y="222" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  date_trunc('month', invoice_date) AS month,</text>
  <text x="216" y="238" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  SUM(total_ht) AS revenue</text>
  <text x="216" y="254" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">FROM</text>
  <text x="216" y="270" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  invoices</text>
  <text x="216" y="286" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">WHERE</text>
  <text x="216" y="302" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  invoice_date BETWEEN :from_date AND :to_date</text>
  <text x="216" y="318" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">GROUP BY</text>
  <text x="216" y="334" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  1 ORDER BY 1</text>

  <text x="40" y="368" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">params</text>
  <rect x="200" y="358" width="730" height="38" rx="6" fill="rgba(0,0,0,0.30)" stroke="#334155"/>
  <text x="216" y="380" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">from_date</text>
  <text x="320" y="380" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Period start</text>
  <text x="450" y="380" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">default:</text>
  <text x="500" y="380" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="850" y="380" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">＋ Add param</text>

  <text x="40" y="412" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">label · description</text>
  <text x="40" y="428" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(Advanced)</text>
  <rect x="200" y="404" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="419" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Monthly revenue · Aggregated invoices total per month, period filter on invoice_date</text>
</svg>

---

## Field by field

### `name`

Read-only in the editor. The name is set when you click *＋ Add query* and is the permission key for the query — `sql:<connector>:<name>`. Rename via the **Rename** button at the top (cross-file — every screen / menu / dictionary reference is updated in one pass; refuses to run on unsaved local edits).

Naming rules:

| Rule | Why |
|---|---|
| Letters, digits, underscores. | TOML key, URL segment and permission string in one go. |
| Starts with a letter or underscore. | Same. |
| Avoid the `_get` / `_put` / `_post` / `_delete` suffixes. | The Tables tab would pick it up and try to group it into a CRUD set. |

Naming conventions that scale well:

| Pattern | Example |
|---|---|
| `<entity>_<action>` | `customer_balance`, `invoice_send` |
| `<verb>_<noun>` | `get_top_clients`, `mark_paid` |
| `report_<topic>` | `report_monthly_revenue`, `report_overdue_invoices` |

### `type`

Dropdown — drives the tab classification. For a hand-written standalone query, keep `custom`. The other values move the query elsewhere on the page:

| Value | Tab |
|---|---|
| `custom` | Unclassified (this page). |
| `table` | Tables (only useful when the name matches the `<base>_<crud>` convention). |
| `sequence` | Sequences. |
| `lookup` | Lookups. |

Switching `type` doesn't rewrite the query — only the page it's filed under. For sequences and lookups you usually want the [Scaffold modal](./sequences-and-lookups.md) anyway, which writes the dictionary entry alongside.

### `writable`

Boolean toggle.

| State | Allowed |
|---|---|
| **Off** (default) | `SELECT` and CTE-only statements. |
| **On** | `INSERT` / `UPDATE` / `DELETE` / `CALL` / `MERGE` / DDL — anything that mutates the database. |

Leave it off for read queries — the safety gate refuses non-SELECT execution otherwise. The CRUD Wizard already sets it for `_put` / `_post` / `_delete`; on a hand-written query you flip it yourself when needed.

### `sql`

The SQL editor accepts a single statement (the common case) or a per-dialect map — see [Per-dialect SQL variants](./per-dialect-sql.md).

Three features the editor surfaces:

| Feature | What it does |
|---|---|
| **Syntax highlighting** | Keywords coloured; mismatched brackets flagged. |
| **Autocompletion** | Tables and columns from the connector's pool. Hit Ctrl+Space to invoke. |
| **`:name` placeholders** | Any `:identifier` in the SQL is recognised as a bind parameter — declare it in the `params` block below. |

A few rules from how the engine binds:

- Use `:name` for parameters, never literal string interpolation. The engine binds them through the SQLAlchemy driver — `'%' || :search || '%'` is the LIKE pattern you want, not `'%' + search + '%'`.
- Reserved suffix `_ORIGINAL` is used by the dialog Save for UPDATE WHERE matching (see [Create from a database table](./create-from-database.md#why-name_original-on-update) for the convention).
- A single statement per query. For chained statements, use a `CALL` to a stored procedure or split into multiple Liberty queries.

### `params`

The list of declared parameters — every `:placeholder` in the SQL gets one row. Each entry carries:

| Field | What it does |
|---|---|
| **`name`** | The placeholder name (without the colon). Matched case-insensitively. |
| **`label`** | What the form input shows above the field. Falls back to `name` when empty. |
| **`default`** | Pre-filled value. Blank means the caller can omit it (the engine binds SQL `NULL`). |

Adding rows here doesn't change the SQL — it just tells screens and the AI assistant how to render an input for each placeholder. Skip this block when the query has no `:placeholders`; the engine accepts undeclared params at runtime (a column dialog can bind any `:column_name` it sees).

For binding values from other screens / sources (a row click, a parent filter, a chained action), see [Parameter binding](./parameter-binding.md).

### `label` (Advanced)

Short name shown in dropdowns elsewhere — the screen designer, the menu target picker, the action editor. Defaults to the query name.

### `description` (Advanced)

Longer text. Shows on the Tables list under the base name, and as a tooltip when the operator hovers the query in the screen designer's read-query picker.

---

## Top-bar actions

The buttons at the top of the single-query editor:

| Action | What it does | Notes |
|---|---|---|
| **← Back** | Returns to the Unclassified list (no save). | Unsaved edits stay in the page-level dirty state — *Save* on the top toolbar persists them. |
| **✎ Rename** | Cross-file rename. | Refuses on unsaved local edits; updates every reference. |
| **⎘ Clone** | Per-query duplicate — prompts for new name. | Default suggestion `<name>_copy`. See [Clone a query or a connector](./clone.md). |
| **🗑 Delete** | Removes the query from the connector. | A confirm modal first. |

---

## Save and reload

The page-level **Save** at the top of the Connectors page commits the connector file and triggers a hot reload. The new query is callable immediately at `/api/sql/<connector>/<name>` (with the bound params as query-string values for GET, JSON body for writable POST).

---

## Verifying the query works

There's no dedicated *Test query* tab on the SQL connector — the test path is one of three:

| Path | When |
|---|---|
| Use it from a screen. | When the next step is building the screen anyway. |
| Hit the REST endpoint directly. | For a quick smoke test — `GET /api/sql/<connector>/<query>?from_date=2026-01-01&to_date=2026-01-31`. |
| Ask the AI assistant. | "Show me the result of `monthly_revenue` for last month" — the assistant will run the query and return rows. Requires `ai:chat` and `sql:<connector>:<query>` permissions. |

The REST path is the fastest debug — error messages come back verbatim, and you can pass params via URL.

---

## When to use this vs the wizard

| Use the wizard | Use the custom editor |
|---|---|
| The table exists in the DB and you want the standard CRUD shapes. | The query joins multiple tables. |
| You want consistent `:NAME_ORIGINAL` wiring on UPDATE. | The query is a `GROUP BY` aggregate. |
| You want a `_delete` keyed on the primary key. | The query returns a derived column the table doesn't have. |
| | The query is a stored-procedure call. |
| | The query is a write that's not a simple UPDATE / INSERT / DELETE (a `MERGE`, a `TRUNCATE`). |

---

## What's next

- [Clone a query or a connector](./clone.md) — start from an existing query instead of from scratch.
- [Parameter binding](./parameter-binding.md) — give the `:placeholder` params labels, defaults and bound sources.
- [Per-dialect SQL variants](./per-dialect-sql.md) — ship one query with different SQL on Postgres vs Oracle.
