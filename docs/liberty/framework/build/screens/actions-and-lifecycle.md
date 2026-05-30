---
title: Actions and lifecycle
description: "The Actions tab — toolbar buttons, row context menu, dialog hooks (on_load / on_save / on_cancel), row hooks (on_insert / on_update / on_delete), and the seven core action types."
keywords: [Liberty Framework, actions, on_load, on_save, on_cancel, on_insert, on_update, on_delete, run_query, navigate, chain, ParamBind]
---

# Actions and lifecycle

A screen with a grid + a dialog covers the *static* CRUD flow. A screen with **actions** and **lifecycle hooks** extends that to anything else — run a custom query on a button click, navigate to another screen on a row click, fire a webhook after a save, refresh after a delete.

The **Actions** tab of the Screen Designer is where all of this is wired. Three groups, the same action shapes everywhere.

---

## The three action groups

The Actions tab organises every action surface into three groups:

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="al-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#al-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · crm.customers · Actions</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIALOG HOOKS — fire while the form is open</text>
  <rect x="40" y="100" width="920" height="100" rx="8" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="56" y="122" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_load</text>
  <text x="56" y="138" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Runs right after the row's data is loaded — useful for refreshing a lookup or prefetching related rows.</text>
  <text x="56" y="160" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_save</text>
  <text x="56" y="176" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Runs after the dialog's main update/insert succeeds — chain extra writes on the same row.</text>

  <text x="40" y="220" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOLBAR — buttons above the table</text>
  <rect x="40" y="232" width="920" height="80" rx="8" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="56" y="254" fill="#c084fc" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">actions</text>
  <text x="56" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Run independently, no row context (or the currently-selected row when one is highlighted).</text>
  <text x="56" y="290" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">＋ Add toolbar action</text>

  <text x="40" y="332" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROW HOOKS — fire after a row is mutated</text>
  <rect x="40" y="344" width="920" height="80" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.40)"/>
  <text x="56" y="366" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_insert</text>
  <text x="56" y="380" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">After a row is inserted (dialog Save or inline grid Save).</text>
  <text x="56" y="396" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_update · on_delete</text>
  <text x="56" y="410" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">After an edit / a delete. ParamBinds resolve against the new / deleted row's values.</text>
</svg>

| Group | Hooks | When they fire | ParamBind resolves against |
|---|---|---|---|
| **Dialog hooks** | `on_load`, `on_save`, `on_cancel` | While the form is open. | The live form state. |
| **Toolbar** | `actions` (screen-level) | The user clicks a toolbar button. | The currently-selected row (empty if none). |
| **Row hooks** | `on_insert`, `on_update`, `on_delete` | After a mutation succeeds — works whether from the dialog Save **or** the inline grid Save. | The new row (`on_insert` / `on_update`) or the deleted row (`on_delete`). |

A separate tab — **Row menu** — carries `row_menu`: actions shown when the user right-clicks a row. ParamBinds resolve against the **clicked** row.

---

## The seven core action types

Every action has a `type` field discriminating one of seven core variants (plus four composite variants below).

| Type | What it does | Key fields |
|---|---|---|
| **`run_query`** | Execute a connector query (writable or read). | `connector`, `query`, `params` (ParamBinds). |
| **`call_api`** | Call an HTTP / API connector endpoint. | `connector`, `endpoint`, `params`. |
| **`navigate`** | Open another screen as a modal, narrowed by ParamBinds. | `connector`, `screen`, `params`. |
| **`set_field`** | Change a dialog field's value. | `field`, `value` (literal or `source` from another field). |
| **`confirm`** | Prompt the user for confirmation; block the chain on Cancel. | `title`, `message`, `confirm_label`. |
| **`notify`** | Show a toast / banner. | `level` (`info` / `warning` / `error` / `success`), `message`. |
| **`refresh`** | Re-run the screen's read query (reload the grid). | *(no fields)*. |

The action editor's *Type* dropdown lists all seven; switching type reveals the fields appropriate to it. Target dropdowns are populated from the live connectors / screens registry — switching the destination refreshes them.

---

## The four composite types

Built on top of the seven cores — used to express more complex flows in one action entry instead of stitching many.

| Type | What it does |
|---|---|
| **`chain`** | A sequence of nested actions, each step's output available to the next via `<step_id>.first_row.<col>` references. Stops on the first error unless an action sets `stop_on_error = false`. |
| **`if`** | Conditional branching inside a chain — runs `then` actions when the condition holds, `else` actions otherwise. |
| **`loop`** | Iterate over an array (typically the result of a previous `run_query`) and run the body for each item. |
| **`return`** | Bind chain-context values back into dialog fields. Used at the end of a chain to surface computed values on the form. |

Most screens never need composites — a flat list of `run_query` + `refresh` + `notify` covers 80% of cases. Reach for `chain` when the same trigger needs to fire several queries that share intermediate values; for `if` / `loop` when the flow truly branches or iterates.

---

## ParamBind context per fire

Every action carries `params` (ParamBinds). The bind resolves the right way depending on **where the action fires**:

| Where | `source` reads from |
|---|---|
| Toolbar (`actions`) | The currently-selected row's columns. If no row is selected, sources resolve to NULL (unless a `default` is set). |
| Row menu (`row_menu`) | The clicked row's columns. |
| Dialog `on_load` | The just-loaded form state. |
| Dialog `on_save` | The form state at submit time (after the main write succeeded). |
| Dialog `on_cancel` | The form state when the user pressed Cancel. |
| Row `on_insert` / `on_update` | The new row's values. |
| Row `on_delete` | The deleted row's values. |
| Inside a `chain` | The chain context — `<previous_step_id>.first_row.<col>` reads the named step's output. |

The two reserved binds — `#LOGIN_USER#` and `#SYSDATE#` — work everywhere as `source` values. See [Parameter binding](../queries/parameter-binding.md) for the full reference.

---

## Common patterns

### Refresh the grid after a write

The most common toolbar action: run a stored procedure, then reload the grid so the user sees the result.

```toml
[[screens.crm.customers.actions]]
type = "run_query"
id = "compute_balances"
connector = "crm"
query = "compute_balances_post"
label = "Recompute balances"

[[screens.crm.customers.actions]]
type = "refresh"
id = "reload_grid"
```

The two actions are separate entries — they fire in order. If the first fails (write rejected, network error), the second doesn't fire and the grid is unchanged.

### Confirm before destructive

A *Delete row* action on the row menu, gated by a confirmation:

```toml
[[screens.crm.customers.row_menu]]
type = "confirm"
id = "confirm_delete"
title = "Delete customer?"
message = "This removes the customer and every related deal."

[[screens.crm.customers.row_menu]]
type = "run_query"
id = "do_delete"
connector = "crm"
query = "customers_delete"

[[screens.crm.customers.row_menu.params]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

If the user clicks Cancel on the confirm, the chain stops; the delete doesn't fire.

### Stamp audit columns on insert

The screen has a column `CREATED_BY` you want filled with the current user automatically — but the dialog doesn't expose it (it's a hidden audit column). Use `on_insert`:

```toml
[[screens.crm.customers.on_insert]]
type = "run_query"
id = "stamp_audit"
connector = "crm"
query = "customers_stamp_audit"

[[screens.crm.customers.on_insert.params]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"

[[screens.crm.customers.on_insert.params]]
param = "CREATED_BY"
source = "#LOGIN_USER#"
```

The main INSERT fires first; if it succeeds, this audit-stamp UPDATE fires with the same row's id + the session user. The screen never surfaces `CREATED_BY` in the dialog, but the column ends up populated.

For audit logging that should mirror **every** write, prefer `audit_table` on the General tab — it adds `AUD_ACTION` / `AUD_USER` / `AUD_DATE` rows automatically without explicit hooks.

### Notify on success

Wire a `notify` after a long-running action to give the user feedback:

```toml
[[screens.crm.customers.actions]]
type = "run_query"
id = "export_pdf"
connector = "crm"
query = "customers_export_pdf"
label = "Export to PDF"

[[screens.crm.customers.actions]]
type = "notify"
id = "notify_done"
level = "success"
message = "Export complete — check your downloads."
```

`level` accepts `info` / `warning` / `error` / `success`; each renders with a different colour.

### Open a sibling screen with bound filters

`navigate` opens another screen as a modal, narrowed by the binds. Useful from a row menu:

```toml
[[screens.crm.customers.row_menu]]
type = "navigate"
id = "view_deals"
connector = "crm"
screen = "deals"
label = "View deals for this customer"

[[screens.crm.customers.row_menu.params]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

The clicked row's `CUSTOMER_ID` binds into the deals screen's read query; the deals modal opens showing only that customer's deals.

For row-click (left-click, not right-click), use the General tab's **row-click behaviour** instead (`row_click_screen` + `row_click_binds`) — it's the same shape, just triggered on click.

---

## The action editor

Each action group has an *＋ Add action* button. Clicking adds a row prompted for an action id (must be unique within the list). The editor reveals the type-specific fields:

| Field | Notes |
|---|---|
| **id** | Unique within the action list. Used as the chain-context key (`<id>.first_row.<col>`). |
| **type** | Dropdown — switches the available fields below. |
| **Target** | The query / endpoint / screen the action operates on (label depends on type: *Query* for `run_query`, *Endpoint* for `call_api`, *Target query* for `navigate`). |
| **Params** | List of ParamBinds. Click *＋ Add binding* to add one. |
| **stop_on_error** | When false, the chain continues even if this action fails. Default true. |
| **prompt** | Optional `PromptField` list — surfaces an input form before the action fires (e.g. ask the user for an `END_DATE` before running a report). |

The **Wrap in chain** button on any action wraps it inside a `chain` — useful when you started flat and now need conditional logic or a loop.

---

## Save flow

The Actions tab edits the screen's `actions` / `row_menu` / `on_*` lists; the Screen Designer's *Save* commits all of them in one shot to `screens.toml`. Hot reload picks them up immediately — the next click on the toolbar button fires the updated action chain.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `on_save` chain that fires before the main write. | The chain hits a race condition — the row doesn't exist yet. | `on_save` fires **after** the main update/insert succeeds. If the chain needs the row's new id, source it from the form state (or use `chain` with the right ordering). |
| Toolbar action with `source = COLUMN` but no row selected. | The bind resolves to NULL; the query fails or operates on the wrong row. | Either set a `default` on the bind, or move the action to the row menu so it always fires with a row in context. |
| `refresh` without a preceding write. | The grid reloads but nothing changed — confusing UX. | Use `refresh` after writes, or when an external action (a webhook ack) changed the data the grid shows. |
| `confirm` after the destructive action instead of before. | The user gets a "are you sure?" prompt after the delete already fired. | `confirm` must be the **first** action in the chain. |
| Stamping `CREATED_BY` in `on_save` but the column is required in the dialog. | The dialog Save fails because the column is empty. | Either don't make the column required in the dialog (the hook fills it), or use the dictionary's `LOGIN` rule on the column to pre-fill at form-load. |

---

## What's next

- [Nested tabs](./nested-tabs.md) — embed a child-record form or a related-rows grid.
- [Parameter binding](../queries/parameter-binding.md) — the full ParamBind reference.
- [Concepts → Screens](../../screens.md) — deep reference for action types and lifecycle.
