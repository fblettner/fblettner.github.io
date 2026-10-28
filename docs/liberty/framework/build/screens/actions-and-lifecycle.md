---
title: Actions and lifecycle
description: "The Actions tab — dialog hooks (on_load / on_save / on_cancel), toolbar buttons, row hooks (on_insert / on_update / on_delete / on_duplicate), the row menu, the action types with their param_binds, prompts, chains and shared actions."
keywords: [Liberty Next, actions, on_load, on_save, on_cancel, on_insert, on_update, on_delete, on_duplicate, run_query, call_api, call_plugin, call_action, navigate, chain, param_binds, prompt_fields]
---

# Actions and lifecycle

A screen with a grid and a dialog covers the standard read and write flow. **Actions** and **lifecycle hooks** add everything else: run a query from a button, open another view from a row, call an API or a plugin after a save, refresh the grid after a delete.

They are set in the **Actions** and **Row menu** tabs of the screen editor, with the same action shapes everywhere.

---

## Where actions fire \{#groups\}

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
  <text x="56" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Run without row context — a prompt can ask the user for values first.</text>
  <text x="56" y="290" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">＋ Add toolbar action</text>

  <text x="40" y="332" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROW HOOKS — fire after a row is mutated</text>
  <rect x="40" y="344" width="920" height="80" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.40)"/>
  <text x="56" y="366" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_insert</text>
  <text x="56" y="380" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">After a row is inserted (dialog Save or inline grid Save).</text>
  <text x="56" y="396" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_update · on_delete</text>
  <text x="56" y="410" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">After an edit / a delete. ParamBinds resolve against the new / deleted row's values.</text>
</svg>

| Group | Lists | When they fire | `source` reads from |
|---|---|---|---|
| **Dialog hooks** | `on_load` | Once the dialog has loaded the row (edit) or seeded the defaults (add). | The form. |
| | `on_save` | After the dialog's main insert or update succeeds. | The form at save time. |
| | `on_cancel` | When the dialog is closed without saving, before it closes; an error keeps it open. | The form. |
| **Toolbar** | `actions` | Each entry is a button above the grid. | No row context; prompt values under `INPUT.<name>`. |
| **Row hooks** | `on_insert`, `on_update`, `on_delete` | After the write succeeds — from the dialog or from grid editing. | The new row, or the deleted row. |
| | `on_duplicate` | When a row duplicated with the dialog's **Duplicate** is saved, instead of `on_insert`. | The new row, and the source row under `SOURCE_<column>`. |
| **Row menu** *(own tab)* | `row_menu` | Each entry is a menu item on a row: right-click, or the ⋯ handle at the start of the row. | The clicked row. |

Hooks run their list in order and stop at the first error, unless an action has **stop_on_error** off. A toolbar or row-menu entry runs as one action: to run several steps from one button, use a `chain`.

For a left click on a row, use the **row-click** settings of the General tab (`row_click_screen` with `row_click_binds`, or `row_click_route`).

---

## Action types \{#types\}

Every action has an **id** (unique in its list, also its key in a chain's context), a **label** (button caption) and **stop_on_error**.

| Type | What it does | Main fields |
|---|---|---|
| **`run_query`** | Runs a query of a connector, read or write. | `connector`, `query`, `param_binds`, `bind_result` |
| **`call_api`** | Calls an endpoint of an API connector. | `connector`, `endpoint`, `param_binds`, `bind_result` |
| **`call_plugin`** | Calls a server-side Python function (`module:function`), the same entry points Nomaflow runs as steps. | `callable`, `param_binds`, `bind_result` |
| **`call_action`** | Runs a [shared action](#shared) by its id. | `ref`, `param_binds` |
| **`navigate`** | Opens another view: a screen (`screen`) or a query (`to`), with `param_binds` passed as its parameters. | `connector`, `screen` or `to`, `param_binds` |
| **`set_field`** | Writes a value into a form field. | `target`, `value` or `source` |
| **`confirm`** | Asks for confirmation; **Cancel** stops the chain. | `message`, `confirm_label`, `cancel_label` |
| **`notify`** | Shows a message. | `message`, `tone` (`info` / `ok` / `warn` / `error`) |
| **`send_notification`** | Fires a notification rule of type *action* (e-mail, portal…). | `rule`, `param_binds` |
| **`refresh`** | Reloads the grid. | — |

`bind_result` keeps the rows (or the response) of the step in the chain's context, so that a later step reads them with `source = "<id>.first_row.<COLUMN>"`.

### The row handle and drill-downs \{#drill\}

A screen with row-menu actions shows a small handle at the start of every row, so the actions stay in reach on a wide table:

- with several actions, the handle (**⋯**, *Row actions*) opens the same menu as the right-click;
- with a single `navigate` action, the handle (a return arrow) fires it at once — its tooltip is the action's label.

**Link cells.** A column's **drill** setting (Liberty Next → Build → Screens, column, *Display*) names a `navigate` action of the row menu: the value shows as a link that fires it for the row — the customer code opens the customer, with no menu to open. A screen whose row menu holds a single `navigate` action does it by itself on its first key column. A wrong action name is refused when the configuration loads.

**Where the target opens.** By default, a `navigate` action opens its target in a new tab. With **Drill-downs open inside the current tab** in [Liberty Next → Administer → App](../settings-app.md#app), it opens as a panel inside the current tab, over the grid: a breadcrumb names each level, **Back** returns to the one before, and the grid behind keeps its rows and filters. A drill from the panel nests the same way. An action decides for itself with `inline = true` (panel) or `inline = false` (new tab), set in `screens.toml`.

### Composite types

| Type | What it does |
|---|---|
| **`chain`** | A list of steps run in order, sharing one context. |
| **`if`** | Runs `then_steps` or `else_steps` depending on a condition: a `source`, an operator (`equals`, `not_equals`, `has_rows`, `no_rows`, `truthy`, `falsy`, `greater_than`, `less_than`) and a `value`. |
| **`loop`** | Runs `steps` once per item of a list taken from the context (typically the rows of an earlier step). |
| **`return`** | Copies values of the context back into the form's fields — at the end of a chain, to show computed values. |

**Wrap in chain** puts an existing action inside a `chain`, to add steps around it.

---

## Values passed to an action \{#binds\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` and `send_notification` take a list of `param_binds`: for each parameter of the target, a fixed **value**, or a **source** read at call time — a column of the row, a form field, `INPUT.<name>`, `<step>.first_row.<COLUMN>`, or a built-in such as `#LOGIN_USER#` / `#SYSDATE#` — with an optional **default**. See [Parameter binding](../queries/parameter-binding.md).

### Prompt before running \{#prompt\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` and `chain` can open a small form **before** they run:

| Field | Role |
|---|---|
| **prompt_fields** | The inputs to ask for — each with its name, label, dictionary entry, default, required / hidden / read-only flags and conditions. |
| **prompt_title** (and its translations) | The window's title; defaults to the action's label. |
| **prompt_cols** | Number of columns of the form (2 by default). |

The values entered are available as `INPUT.<name>` to the action and to every later step of the same chain. **Cancel** stops the chain without an error.

---

## Shared actions \{#shared\}

An action used by several screens is defined once in **Liberty Next → Build → Actions**: an id, a label, a description, declared **params**, optional **prompt_fields**, and its **steps** (the same action types). The page lists the shared actions with **Find usages**, **Clone** and **Delete**; a row opens the action designer.

A screen runs it with `call_action`: `ref` names the shared action, and its `param_binds` fill the action's `INPUT.<param>` values.

---

## Examples

### Recompute, then reload the grid

```toml
[[screens.crm.customers.actions]]
type  = "chain"
id    = "recompute"
label = "Recompute balances"
steps = [
  { type = "run_query", id = "compute", connector = "crm", query = "compute_balances" },
  { type = "refresh",   id = "reload" },
  { type = "notify",    id = "done", message = "Balances recomputed.", tone = "ok" },
]
```

### Confirm before deleting

```toml
[[screens.crm.customers.row_menu]]
type  = "chain"
id    = "delete_customer"
label = "Delete customer"
steps = [
  { type = "confirm", id = "ask", message = "Delete this customer and its deals?", confirm_label = "Delete" },
  { type = "run_query", id = "delete", connector = "crm", query = "customers_delete",
    param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }] },
  { type = "refresh", id = "reload" },
]
```

**Cancel** on the confirmation stops the chain: nothing is deleted.

### Open the deals of a customer

```toml
[[screens.crm.customers.row_menu]]
type        = "navigate"
id          = "view_deals"
label       = "View deals"
connector   = "crm"
screen      = "deals"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

The **deals** screen opens with its filters seeded from the binds.

### Stamp audit columns

For `CREATED_BY` / `CREATED_AT` columns, no hook is needed: the dictionary rules `LOGIN` and `SYSDATE`, or the `{{LOGIN}}` / `{{SYSTIMESTAMP}}` tokens in the insert query, fill them on the server — see [Dictionary → Rules](../../dictionary.md#rules). To log every write in a history table, set `audit_table` on the General tab.

---

## Saving

The Actions and Row menu tabs edit the screen's lists; the screen editor's **Save** writes them with the rest of the screen and reloads the configuration — the next click runs the new version.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Two toolbar entries meant to run one after the other. | They are two separate buttons. | Put the steps in one `chain`. |
| A toolbar action reading `source = "CUSTOMER_ID"`. | The toolbar has no row: the value is empty. | Move the action to the row menu, or ask for the value with a prompt (`INPUT.CUSTOMER_ID`). |
| `confirm` placed after the delete. | The question comes once the row is gone. | `confirm` first in the chain. |
| A step reads `<id>.first_row.X` from a step without `bind_result`. | The value is empty. | Turn on `bind_result` on the step that produces the rows. |
| `value = "#LOGIN_USER#"`. | The text is written as it is. | Use `source`. |

---

## What's next

- [Nested tabs](./nested-tabs.md) — embed another screen's form or grid in a dialog tab.
- [Parameter binding](../queries/parameter-binding.md) — `param_binds`, built-ins and tokens.
- [Notifications](../../../nomaflow/notifications.md) — the rules a `send_notification` fires.
