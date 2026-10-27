---
title: Nested tabs
description: "Embed a child-record form (nested_form) or a related-rows grid (nested_table) in a dialog tab — same dialog, multiple data sources."
keywords: [Liberty Framework, nested tabs, nested_form, nested_table, child record, related rows, ParamBind, dialog]
---

# Nested tabs

A dialog with all its fields on one form covers the *single-row* case. When a row has **related data** — a customer with several addresses, a user with per-application settings, an order with line items — you embed that related data right inside the dialog as a nested tab.

Two variants:

| Tab type | What it shows | When |
|---|---|---|
| **`nested_form`** | The form of another screen, for zero or one related row, saved with the parent. | When the related table has **at most one** row per parent (one-to-one or zero-to-one). |
| **`nested_table`** | A full TableView of related rows, embedded inline — renders another screen's grid scoped to the parent's key. | When the related table has **many** rows per parent (one-to-many). |

Both attach to the dialog like any other tab; the user clicks between them without leaving the form.

---

## When to reach for each

| Pattern | Choose |
|---|---|
| One customer → at most one billing address. | `nested_form`. |
| One customer → many orders. | `nested_table`. |
| One application → its JD Edwards-specific settings (zero-or-one row). | `nested_form`. |
| One project → its line items. | `nested_table`. |
| One employee → their current job assignment (one row). | `nested_form`. |
| One employee → their job assignment history. | `nested_table`. |

The schema's `_check` validator enforces tab id uniqueness; otherwise both types can coexist in the same dialog — a *Customer* dialog with a `nested_form` on *Billing* and a `nested_table` on *Orders* is a natural shape.

---

## nested_form — a child-record form

A `nested_form` tab shows, inside the dialog, the **form of another existing screen**. That screen owns the read, update and insert queries and the fields; the tab only says which screen to reuse and how to pass the parent's values to it.

### Fields

| Field | What it does |
|---|---|
| **`form_screen`** *(required)* | The id of the screen whose form is reused. |
| **`connector`** | The connector of that screen. Blank = the parent screen's connector. |
| **`param_binds`** | Bind the parent's values into the reused screen's queries — typically `CUSTOMER_ID ← CUSTOMER_ID`. |
| **`label`**, **`hide_on_add`**, **`hide_on_edit`**, **`actions`** | As on any tab. |

### Behaviour

1. **Editing a parent row** — the reused screen's read query runs with the bound values. A row found is shown for editing; otherwise the form starts empty.
2. **Adding a parent row** — the form starts empty (the parent has no key yet).
3. **Saving** — the nested form is saved by the **parent's Save**: an update when a row was loaded, an insert otherwise — only if the user typed something. On an insert, the binds take the parent's new key, including one assigned by a sequence.
4. **Duplicating the parent** — the nested row is inserted again for the copy.

Fields hidden by their conditions are not written, and the bound key columns always take the parent's values.

### Use case — billing address

A *Customer* dialog with a *Billing* tab that reuses the `billing_address` screen (its read, update and insert queries keyed on `CUSTOMER_ID`):

```toml
[[screens.crm.customers.dialog.tabs]]
id          = "billing"
label       = "Billing"
type        = "nested_form"
form_screen = "billing_address"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

To change the billing fields, edit the `billing_address` screen: every dialog that reuses it follows.

---

## nested_table — a related-rows grid

A `nested_table` tab embeds another screen's TableView inline. No new fields — the entire grid + dialog of the target screen renders inside the tab, scoped to the parent's key.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#nt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Inspector · Tab "Deals" · type=nested_table</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">connector</text>
  <rect x="200" y="80" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">(parent's connector — crm)</text>

  <text x="40" y="122" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">screen *</text>
  <rect x="200" y="110" width="320" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="210" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">deals ▾</text>

  <line x1="20" y1="148" x2="980" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAM BINDS (parent → nested screen's read_query)</text>

  <rect x="40" y="180" width="920" height="40" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="200" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">:CUSTOMER_ID</text>
  <text x="180" y="200" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">←  parent column</text>
  <text x="320" y="200" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>

  <text x="56" y="230" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">＋ Add binding</text>

  <line x1="20" y1="250" x2="980" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="272" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">A nested-table tab embeds another screen's TableView — its rows / columns come from that screen, not from this tab. No fields to configure here.</text>
</svg>

### Fields

| Field | Notes |
|---|---|
| **`connector`** | Connector hosting the target screen. Blank = parent's connector. |
| **`screen`** *(required)* | The target screen's id. The picker is fed from the same connector's screens list. |
| **`param_binds`** | Bind parent columns into the target screen's `read_query` `:placeholder` params. |

### Behaviour

The tab renders the target screen — its grid, its filters, its add / edit dialog, its row menu — exactly as it would on its own page, but **narrowed** by the bound parameters. The user can:

- Browse the related rows in the embedded grid.
- Open the *＋ Add* button to create a new related row — the bound parent columns pre-fill matching columns on the add dialog.
- Right-click for the target screen's row menu.
- Click the inline edit button to open the target screen's dialog and edit a related row.

### Use case — customer + deals

A *Customer* dialog with a *Deals* tab showing every deal for this customer:

```toml
[[screens.crm.customers.dialog.tabs]]
id = "deals"
label = "Deals"
type = "nested_table"
screen = "deals"

[[screens.crm.customers.dialog.tabs.param_binds]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

The *Deals* tab embeds the `deals` screen's TableView, filtered to the current customer. When the user clicks *＋ Add deal* in the embedded grid, the new deal's `CUSTOMER_ID` is pre-filled with the parent's value.

### What renders inside

The embedded TableView carries everything the target screen has:

| Element | Inherited |
|---|---|
| Columns + their hints | ✓ |
| Filters | ✓ — the user can narrow further within the parent's scope. |
| Dialog (add / edit) | ✓ |
| Actions (toolbar / row menu / hooks) | ✓ |
| Export config | ✓ |

The target screen exists independently — you can navigate to it as a standalone page, AND embed it as a nested tab. The same configuration drives both surfaces.

---

## When to nest vs. when to navigate

A common decision: should the related data be **embedded** in the parent's dialog, or open as a **separate screen** on row-click?

| Choose embedding | Choose row-click navigation |
|---|---|
| The user always wants to see the related data alongside the parent (single-screen flow). | The related data is occasionally relevant; opening it on demand keeps the parent dialog focused. |
| The related table is small (a few columns, few rows). | The related table is large; embedding clutters the dialog. |
| Users edit both at the same time. | Users typically edit one then the other in separate steps. |
| | Multiple sibling screens drill into the same target — defining it once as a standalone screen is cleaner. |

Embedding is the high-affinity choice for **mandatory relationships** (a customer with at least one address); row-click is the right choice for **broad data** (a customer with hundreds of historical orders).

---

## Permissions on nested data

Nested tabs honour the **same permission model** as standalone screens — the underlying query's `sql:<connector>:<query>` permission is checked. A user who can see the parent dialog but lacks permission on the nested read query sees the nested tab as empty / read-only / hidden depending on the missing permission:

| Missing permission | Effect on the nested tab |
|---|---|
| `sql:<connector>:<nested_read>` | The tab is hidden entirely. |
| `sql:<connector>:<nested_update>` | The form is read-only. |
| `sql:<connector>:<nested_insert>` | The *＋ Add* button is hidden. |
| `sql:<connector>:<nested_delete>` | The row delete is disabled. |

This means you can build dialogs that progressively reveal data based on the user's role — same screen definition, different surfaces per user.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| The reused screen's read returns more than one row. | The form shows the first one only. | Tighten the binds so the read returns 0 or 1 row; use `nested_table` for a one-to-many relation. |
| `nested_table` without `param_binds`. | The embedded grid shows **every** row of the target — including unrelated ones. | Always bind at least the parent's foreign-key columns. |
| The reused screen has no insert query and no row exists yet. | Nothing is created on save. | Set the insert query on the reused screen. |
| `nested_table` pointing at a screen on a different connector + missing `connector` override. | The runtime tries to resolve the target screen on the parent's connector and fails. | Set `connector` explicitly to the target screen's connector. |
| Two nested tabs with the same id. | Save validation fails ("duplicate dialog tab id"). | Pick unique ids per dialog. |

---

## What's next

- [Concepts → Screens](./overview.md) — the deep reference (full schema, lifecycle, validators).
- [Actions and lifecycle](./actions-and-lifecycle.md) — wire the parent's `on_save` to fire writes on the nested data.
- [Parameter binding](../queries/parameter-binding.md) — the full ParamBind reference, including `#LOGIN_USER#` / `#SYSDATE#`.
