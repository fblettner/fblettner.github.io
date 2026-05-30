---
title: Columns
description: "The Columns tab — set each column's display title, format, dictionary reference, edit rule, default and filtering once; both the grid and the dialog use them."
keywords: [Liberty Framework, columns, ColumnHint, dictionary, format, lookup, filter, hidden, key, default]
---

# Columns

The **Columns** tab is where you set per-column metadata: how the column renders in the grid, how it appears in the dialog form, whether it filters, whether it's required, whether it's part of the row's primary key. Set each column once — both surfaces (grid and dialog) use the same configuration.

---

## The Columns tab at a glance

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="col-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#col-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · crm.customers · Columns</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Configure each column once — display title, format, default value, filtering, edit rules. Both the grid and the dialog use these.</text>

  <rect x="40" y="108" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="128" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="220" y="128" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Customer id</text>
  <text x="360" y="128" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">dd=CUSTOMER_ID</text>
  <rect x="560" y="116" width="36" height="18" rx="3" fill="rgba(251,146,60,0.20)"/>
  <text x="578" y="129" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="600" y="116" width="48" height="18" rx="3" fill="rgba(192,132,252,0.20)"/>
  <text x="624" y="129" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FILTER</text>
  <text x="918" y="128" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">drill in →</text>

  <rect x="40" y="148" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="168" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="220" y="168" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Name</text>
  <text x="360" y="168" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">width=240</text>
  <rect x="500" y="156" width="56" height="18" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="528" y="169" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="918" y="168" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">drill in →</text>

  <rect x="40" y="188" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="208" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">REGION_CODE</text>
  <text x="220" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Region</text>
  <text x="360" y="208" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">rules=LOOKUP · get_regions</text>
  <text x="918" y="208" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">drill in →</text>

  <rect x="40" y="228" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="248" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="220" y="248" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Status</text>
  <text x="360" y="248" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">rules=ENUM · STATUS_CODES</text>
  <rect x="560" y="236" width="48" height="18" rx="3" fill="rgba(192,132,252,0.20)"/>
  <text x="584" y="249" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FILTER</text>
  <text x="918" y="248" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">drill in →</text>

  <rect x="40" y="268" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="288" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CREATED_AT</text>
  <text x="220" y="288" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Created</text>
  <text x="360" y="288" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">format=date</text>
  <rect x="540" y="276" width="56" height="18" rx="3" fill="rgba(100,116,139,0.20)"/>
  <text x="568" y="289" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DISABLED</text>
  <text x="918" y="288" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">drill in →</text>

  <rect x="40" y="308" width="920" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="160" y="332" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">＋ Add column hint</text>
  <text x="500" y="350" fill="#64748b" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns the read query returns but not hinted here keep the discovery order and the dictionary defaults.</text>
</svg>

The list shows one row per **ColumnHint** entry. Click a row to drill into its full editor — the inline summary covers the most-used fields, the full editor covers every flag.

---

## Field by field

Every column hint carries the same shape. Drilling into a column reveals five groups of fields.

### Identity

| Field | Notes |
|---|---|
| **`name`** | The result column this hint applies to. Case-insensitive match against the read query's columns. Normalised to UPPERCASE on save. |
| **`dd`** | Dictionary entry to inherit `label` / `format` / `rule` from. Blank uses the column `name` as the key. Set to `""` (empty quoted string) to opt out of the dictionary entirely. |

The dictionary system (`dictionary.toml`) is Liberty's centralised vocabulary — one entry defines a field's display title, format, rule and lookup once; every screen that has a column with that name inherits it. See [Concepts → Dictionary](../../dictionary.md).

### Display in the grid

| Field | Notes |
|---|---|
| **`label`** | Display title in the grid header and the dialog field label. Falls back to the dictionary's `label`, then to the column `name`. |
| **`hidden`** | When on, the column is hidden by default. The operator can un-hide it via the grid's *Columns* menu. |
| **`width`** | Fixed column width in pixels. Blank = auto-size. |
| **`align`** | Text alignment — `left`, `right`, `center`. Blank auto-picks based on type (numbers right, text left). |
| **`format`** | How to render the value — `date`, `number`, `boolean`, `currency`, etc. Overrides the dictionary format. Drives both the grid cell and the dialog field. |

### Edit rule

| Field | Notes |
|---|---|
| **`rules`** | How to render and validate the column. `BOOLEAN` renders a checkbox, `ENUM` a dropdown, `LOOKUP` a searchable picker. Blank inherits from the dictionary. |
| **`rules_values`** | The rule's value — `BOOLEAN` → the true marker (`Y` / `1` / `true`); `ENUM` → the enum id; `LOOKUP` → the lookup id; `SEQUENCE` / `NN` → the sequence id. |
| **`default`** | Pre-fill value when adding a new row. |
| **`required`** | When on, the operator must fill this column before saving. |
| **`disabled`** | When on, the column is read-only — the operator sees the value but can't change it. |
| **`lookup_param_binds`** | Narrow a `LOOKUP` rule's query by binding extra parameters. Used when the lookup depends on another field's value (e.g. picking a role narrows by the row's current application). See [Parameter binding](../queries/parameter-binding.md). |

### Primary key

| Field | Notes |
|---|---|
| **`key`** | Mark this column as part of the row's primary key. Drives:<br/>– Excel-import update-vs-insert matching.<br/>– The dialog's edit-mode lock — key fields are read-only when editing an existing row.<br/>– The `_put` query's `:NAME_ORIGINAL` binding (the CRUD Wizard's convention). |

Mark every column that uniquely identifies a row. Multi-column keys are supported — tick the flag on each. When the screen's `key_columns` is empty (the usual case), the runtime falls back to columns whose `key` flag is on.

### Filtering

| Field | Notes |
|---|---|
| **`filter`** | When on, the column appears in the table's filter panel. The user picks a value to narrow the grid. |
| **`filter_from`** | Cascading filter — narrow this column's options based on another filter's value. Picks a `source` column (already-filtered) and a `column` on the lookup query's result that the source matches against. |
| **`visible_when`** | Show this column **in the grid** only when a filter has a specific value. Different from the dialog-side `visible_when` on fields — see [Conditional fields](./conditional-fields.md). |

### A typical column

For a `STATUS` column on a customers screen, the configuration usually looks like:

| Field | Value |
|---|---|
| `name` | `STATUS` |
| `dd` | (blank — uses `STATUS` as the dict key) |
| `label` | (blank — inherits from the dictionary) |
| `format` | (blank — inherits) |
| `rules` | `ENUM` |
| `rules_values` | `STATUS_CODES` (an enum id declared in dictionary) |
| `default` | `OPEN` |
| `required` | ✓ |
| `filter` | ✓ |

That renders a dropdown in the dialog (sourced from the `STATUS_CODES` enum), pre-fills new rows with `OPEN`, requires a value, and adds a filter chip to the grid.

---

## Inheriting from the dictionary

The default behaviour — when most fields are blank — is to **inherit from the dictionary**. The chain:

```
ColumnHint.label  → DD entry.label  → column name
ColumnHint.format → DD entry.format → engine-picks-by-type
ColumnHint.rules  → DD entry.rule
ColumnHint.rules_values → DD entry.rule_values
```

This means a column named `USR_ID` on a screen automatically reads its label, format, lookup rule and lookup id from the dictionary entry `USR_ID` (or whatever you set `dd` to). The screen overrides only when **this** screen needs different behaviour from the rest.

The Columns tab is therefore mostly **empty** for well-dictionary'd installs — entries only appear when there's something to override.

---

## Filtering and cascading filters

When a column has `filter = true`, a chip for it appears in the grid's filter panel. The user picks a value, the grid re-runs the read query with that value bound to the matching `:placeholder` param. The query is responsible for accepting the bind.

**Cascading filters** narrow one filter's options based on another. The classic case: a *Role* dropdown that shows only roles for the currently-picked *Application*:

| Field | Value on `ROLE_ID` |
|---|---|
| `rules` | `LOOKUP` |
| `rules_values` | `get_roles` |
| `filter` | ✓ |
| `filter_from.source` | `APPS_ID` (the parent filter's source column) |
| `filter_from.column` | `APP_ID` (the column on the lookup query's result that matches the source) |

When the user picks an application, the role lookup re-runs with the application id bound — the user only sees that application's roles.

---

## Order of columns

The order of the **ColumnHint** list = the display order in the grid. Columns the read query returns but that aren't listed here keep their discovery order and follow the hinted ones.

To reorder:

| Goal | Action |
|---|---|
| Move a column up / down. | Drag its row in the list (the drag handle is the left edge of the row). |
| Hide a column entirely. | Set `hidden = true`. The operator can still un-hide it from the grid's *Columns* menu. |
| Drop a column from both grid and dialog. | Remove its hint AND make sure it's not on any dialog tab's fields. (Or alter the read query to not return it.) |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `dd = "USR_ID"` but no dictionary entry named `USR_ID`. | Label and format fall back to the column name verbatim. | Add the dictionary entry, or set `dd = ""` to opt out and configure `label`/`format` inline. |
| `rules = LOOKUP` but `rules_values` blank. | The dropdown is empty. | Set `rules_values` to a lookup id from the dictionary. |
| `filter_from` set but the column is not `filter`. | The cascade does nothing — the source filter never fires. | Tick `filter = true` AND set `filter_from`. |
| `required = true` on a column the read query doesn't return. | The dialog saves with NULL; if the DB has a NOT NULL constraint, the write fails. | Add the column to the read query, or remove `required` from the hint. |
| `key = true` on a non-unique column. | Excel import treats duplicate values as updates of the same row. | Verify the key columns genuinely identify a row uniquely. |
| `format = currency` but the value is in cents (integer). | The grid renders `1,234.00` for `123456`. | Format expects the value in the unit you want displayed — divide by 100 in the query, or use a Python step before display. |

---

## What's next

- [Dialog builder](./dialog-builder.md) — fields you've configured here become drag-droppable cards on the canvas.
- [Conditional fields](./conditional-fields.md) — make a column appear / be required / be locked only under specific form conditions.
- [Concepts → Dictionary](../../dictionary.md) — the shared vocabulary that columns inherit from.
