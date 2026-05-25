---
title: Dictionary
description: "The dictionary holds the metadata that turns raw database columns into a readable UI — localised labels, number formats, BOOLEAN / ENUM / LOOKUP rules, form-layer defaults. Edited from Settings → Dictionary; reused everywhere a connector column is rendered."
keywords: [Liberty Framework, dictionary, columns, enums, lookups, labels, formats, settings, BOOLEAN, ENUM, LOOKUP, i18n]
---

# Dictionary

The **dictionary** is the shared metadata layer that turns a raw column name into a readable interface. A connector query returns columns the database knows by their identifier (`customer_status`, `due_date`, `invoice_amount`); the dictionary attaches:

- A **localised label** ("Statut client", "Date d'échéance", "Montant facture").
- A **display rule** (`BOOLEAN` toggle, `ENUM` chip, `LOOKUP` against another connector).
- A **number / date format** ("€ 1 234,56", "dd/MM/yyyy").
- **Form-layer defaults** for write screens (auto-fill with the current user, the current date, a generated sequence, a hashed password).

Defined once in **Settings → Dictionary**, referenced by every screen, chart and dashboard that consumes the corresponding column. Change the label here and every consumer reflects it on the next render.

---

## At a glance

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="dc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="dc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#dc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">How a column lands on a screen</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="200" rx="10" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="160" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · COLUMN</text>
  <text x="160" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">customer_status</text>
  <text x="160" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">discovered from</text>
  <text x="160" y="186" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">the SQL cursor</text>
  <text x="160" y="220" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">due_date</text>
  <text x="160" y="252" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">invoice_amount</text>

  <rect x="300" y="100" width="320" height="200" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="460" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · DICTIONARY ENTRY</text>
  <text x="460" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Label · Customer status / Statut client</text>
  <text x="460" y="172" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Type · string · Rule · LOOKUP</text>
  <text x="460" y="200" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Type · date · Format · dd/MM/yyyy</text>
  <text x="460" y="228" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Type · decimal · Format · 1 234,56 €</text>
  <text x="460" y="270" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">defined once, reused everywhere</text>

  <rect x="660" y="100" width="280" height="200" rx="10" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="800" y="124" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · RENDERED</text>
  <text x="800" y="156" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">grid cell — coloured chip from</text>
  <text x="800" y="172" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">the LOOKUP table</text>
  <text x="800" y="200" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">edit dialog — date picker /</text>
  <text x="800" y="216" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">numeric input with format</text>
  <text x="800" y="244" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">filter chip — multi-select of</text>
  <text x="800" y="260" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">the lookup's values</text>

  <line x1="260" y1="200" x2="300" y2="200" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>
  <line x1="620" y1="200" x2="660" y2="200" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>
</svg>

---

## Settings → Dictionary

The page has two tabs: **Columns** (one entry per logical column) and **Lookups** (named value sets that columns reference).

### Columns tab

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Dictionary · Columns</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Search column…</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New column</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Name</div><div>Label (en)</div><div>Type</div><div>Rule</div><div>Format</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>customer_status</div><div>Customer status</div><div>string</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>LOOKUP</span></div><div style={{opacity: 0.6}}>—</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>due_date</div><div>Due date</div><div>date</div><div style={{opacity: 0.6}}>—</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '10px'}}>dd/MM/yyyy</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>invoice_amount</div><div>Invoice amount</div><div>decimal</div><div style={{opacity: 0.6}}>—</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '10px'}}>1 234,56 €</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>is_active</div><div>Active</div><div>bool</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>BOOLEAN</span></div><div style={{opacity: 0.6}}>—</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
</div>

Click *+ New column* or any row to open the column editor.

---

## The column editor

| Field | Effect |
|---|---|
| **Name** | The dictionary key — short, snake_case (`customer_status`). Connector column hints reference this name to pick up the metadata. |
| **Label** | A per-language map of display labels. The editor shows one input per loaded language. Falls back to the *Name* when a language is missing. |
| **Description** | Optional. Surfaces as the tooltip on form inputs and column headers. |
| **Type** | `string` / `int` / `float` / `decimal` / `bool` / `date` / `datetime` / `time`. Drives the default widget on screens (text input vs date picker vs checkbox). |
| **Format** | For numbers and dates — a format string (`1 234,56 €`, `dd/MM/yyyy`). The grid cell and the form input render with this format. |
| **Rule** | `—` (no special rendering) / `BOOLEAN` / `ENUM` / `LOOKUP` / `PASSWORD`. See [Display rules](#display-rules). |
| **Lookup** | Visible only when *Rule* is `LOOKUP`. Dropdown of lookups defined on the *Lookups* tab. |
| **Enum values** | Visible only when *Rule* is `ENUM`. A sortable list of `{ value, label(s), colour }` rows. |
| **Form-layer defaults** | Optional. See [Form-layer defaults](#form-layer-defaults). |
| **Required** | Marks the field as required by default on every form. Per-screen overrides can still relax this. |
| **Read-only** | Marks the field as read-only by default on every form. |

A *Save* rebuilds the dictionary registry; consumers (screens, charts) re-render with the new metadata on their next refresh.

---

## Display rules

The **Rule** field changes how a column is rendered in a grid cell, in a form input and in a filter chip.

### `BOOLEAN`

A `bool` column renders as a chip / toggle. The form input is a switch. The filter is a tri-state pill (`All` / `Yes` / `No`).

The editor exposes:

| Field | Effect |
|---|---|
| **True label** | Defaults to "Yes" — per-language map. |
| **False label** | Defaults to "No". |
| **True colour** / **False colour** | Pill backgrounds in the grid. |

### `ENUM`

A small, **static** set of values declared on the column itself. Use when the values are known at design time and never change at runtime (e.g. `low` / `medium` / `high`).

| Field per value | Effect |
|---|---|
| **Value** | The literal stored in the database. |
| **Label** | Per-language display label. |
| **Colour** | Pill background. |
| **Order** | Drag handle to re-order. |

Renders as a coloured chip in grids, a dropdown on forms, a multi-select in filters.

### `LOOKUP`

A **dynamic** set of values pulled from another connector query. Use when the values live in a table and may grow over time (statuses managed by an operator, country lists, etc.).

The column points at a *Lookup* entry; the lookup itself is defined on the *Lookups* tab — see below.

### `PASSWORD`

Masks the value in grids (`••••••••`) and renders a password input on forms. Combined with the *Form-layer default* `PASSWORD`, sets up an Argon2-hashed write path that's safe by construction.

---

## Lookups tab

A lookup is a **named query that returns `{ value, label }` rows**. Columns set *Rule = LOOKUP* + point at a lookup to render their values as labelled chips.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Dictionary · Lookups</div>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New lookup</span>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>customer-statuses</span></div>
    <div style={{opacity: 0.75}}>Connector</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
    <div style={{opacity: 0.75}}>Query</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>statuses-list ▾</span></div>
    <div style={{opacity: 0.75}}>Value column</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>code ▾</span></div>
    <div style={{opacity: 0.75}}>Label column</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>label ▾</span></div>
    <div style={{opacity: 0.75}}>Colour column</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>colour ▾</span></div>
    <div style={{opacity: 0.75}}>Cache</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Per session ▾</span></div>
  </div>
</div>

| Field | Effect |
|---|---|
| **Name** | Identifier referenced by column entries (`customer-statuses`). |
| **Connector** / **Query** | The SQL connector and named read query that returns the values. |
| **Value column** | Column in the query result that holds the stored value (what the database carries on each row). |
| **Label column** | Column in the query result that holds the display label. Localised through the dictionary when the query joins a translations table. |
| **Colour column** | Optional. Drives the chip background colour in grids. |
| **Filter from** | Optional dependencies — see [cascading filters](./query-params-binding.md#cascading-filters). |
| **Cache** | `None` / `Per session` / `Per request`. Drives how aggressively the framework caches the lookup. Default *Per session*. |

A *Test* button at the top runs the underlying query and shows the resolved `{ value, label }` pairs — useful to confirm the columns line up.

---

## Form-layer defaults \{#form-layer-defaults\}

The **Form-layer defaults** field of the column editor lets a column auto-populate on insert / update without the user typing the value. Four special tokens are recognised:

| Token | Effect at save time |
|---|---|
| **SEQUENCE** | Pulls the next value of a database sequence — useful for generated identifiers when the database doesn't auto-increment. |
| **SYSDATE** | Sets the value to the server's current timestamp. |
| **LOGIN** | Sets the value to the calling user's identifier (the JWT's `sub`). |
| **PASSWORD** | Hashes the field's plain value with Argon2 before storing. Combined with `Rule = PASSWORD` it produces a safe-by-construction write path. |

Form-layer defaults run **on the server** at save time — the client never sees them. An audit column auto-populated with `LOGIN` cannot be tampered with from the browser.

---

## Display rules vs form-layer rules

The two concepts are easy to confuse. The table:

| Aspect | Display rule | Form-layer rule |
|---|---|---|
| **Where it runs** | On the client (renderer). | On the server (save handler). |
| **What it changes** | How the value looks. | What the value is. |
| **Examples** | `BOOLEAN` → chip; `ENUM` → coloured pill; `LOOKUP` → labelled chip from a table. | `LOGIN` → caller's username; `SYSDATE` → now(); `PASSWORD` → Argon2 hash. |
| **Visible to the user?** | Yes. | No — the value is computed at save. |

Both can apply to the same column. A typical *Created by* audit column has `Rule = LOOKUP` (against a users table, to show the display name) **and** `Form-layer default = LOGIN` (so the value is set automatically on insert).

---

## Localisation

Every text field in the column editor — *Label*, *Description*, *True label* / *False label*, *Enum label* — is a **per-language map**. The editor shows one input per loaded language; missing languages fall back to the resolution chain documented under [i18n](./apps/i18n.md).

Operators add languages from *Settings → Languages*; new languages then appear as extra columns in the dictionary editor.

---

## Permissions

The Dictionary tab is gated by `settings:dictionary`. Lookups inherit the permission of their underlying SQL query — a caller who can't run `sql:billing:statuses-list` doesn't see the lookup values; the dropdown renders empty.

---

## Tips & best practices

- **Define a dictionary entry per logical column, not per database column.** If `customer_status` and `supplier_status` share the same lookup, one dictionary entry covers both — point both connector hints at it.
- **Keep labels short.** Long labels truncate in grid headers. The *Description* field is the right home for explanations.
- **Use `ENUM` when the values are known at design time, `LOOKUP` when they aren't.** A `priority` enum (`low` / `medium` / `high`) is fine inline; a `country` list belongs in a lookup.
- **Cache lookups *Per session*.** Per-request caching adds a query on every screen open; *None* is rarely needed.
- **Audit columns: `LOOKUP` + `LOGIN` / `SYSDATE`.** The cleanest pattern — readable on display, auto-populated on save.

---

## Under the hood

Dictionary definitions are stored in `liberty-apps/config/dictionary.toml`. Operators **do not edit this file by hand** in normal operation; the Dictionary builder is the canonical interface. The *Raw TOML* tab of [Settings → Dictionary](./configuration/settings-ui.md) is the escape hatch when a builder gap blocks an advanced edit.

---

## What's next

- [Connectors](./connectors.md) — where column hints bind a discovered SQL column to a dictionary entry.
- [Screens](./screens.md) — how column metadata shapes the grid + edit dialog.
- [Form conditions](./form-conditions.md) — conditional visibility / required / disabled rules on top of dictionary rules.
- [Apps & Plugins → i18n](./apps/i18n.md) — adding languages.
