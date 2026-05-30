---
title: Create a screen from a query
description: "Wire a `_get` query to a fresh screen — the General tab and the Queries tab walked through field by field; the grid appears, edits land via the write queries."
keywords: [Liberty Framework, create screen, read query, ScreensBuilder, ScreenEditor, General tab, Queries tab]
---

# Create a screen from a query

You have a `<base>_get` query (and ideally its `_put` / `_post` / `_delete` siblings) — the [CRUD Wizard](../queries/create-from-database.md) is the fastest way to land them. Now you wire a screen on top so users can see and edit the rows.

This page walks the **General** and **Queries** tabs of the Screen Designer. Columns, dialog, actions and hooks come in the next pages.

---

## Step 1 — Register the app, if needed

On **Settings → Screens**, the scope bar lists every app (= connector) that already has at least one screen. If the connector you want to add a screen to isn't there:

1. Click **＋ Add screens for a connector**.
2. Pick the connector from the dropdown (only connectors **without** a screens namespace are listed — once registered, the connector becomes an app chip).
3. The chip appears at the top; the screen list below is empty.

If the connector is already a chip, just click it.

---

## Step 2 — Add a screen

Below the empty list, click the **＋ Add screen** button. The page prompts for a screen id — letters, digits, underscores, leading letter. Conventions:

| Pattern | Example |
|---|---|
| Match the table base. | `customers` for a screen on `customers_get`. |
| Match the JD Edwards object. | `F0005` for the JDE UDC table. |
| `<entity>_<purpose>` for screens that don't map 1-1 to a table. | `customer_balance_report`, `invoice_send_dialog`. |

The id is **stable** — it's the URL segment (`/screen/<app>/<id>`), the dictionary key (`[screens.<app>.<id>]`) and the cross-file reference target. Renaming later goes through the *Rename* button on the card, which propagates the change across screens / menus / dictionary.

The empty screen appears in the list; click it to open the **Screen Designer**.

---

## Step 3 — The General tab

The designer opens on **General**. This tab is where you wire identity, the connector override and the behaviour flags.

<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="gen-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="460" rx="14" fill="url(#gen-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · crm.customers · General</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Connector</text>
  <rect x="200" y="78" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="93" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">Use the app's connector — crm ▾</text>

  <text x="40" y="118" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="200" y="108" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="123" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Customers</text>

  <text x="40" y="148" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="200" y="138" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="153" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Portfolio customers — read-write</text>

  <text x="40" y="178" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">auto_load</text>
  <rect x="200" y="168" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="183" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="182" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">run the read query as soon as the screen opens</text>

  <text x="40" y="208" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">editable</text>
  <rect x="200" y="198" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="213" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="212" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">allow inline cell editing in the grid</text>

  <text x="40" y="238" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">uploadable</text>
  <rect x="200" y="228" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="234" y="242" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">show the Excel / CSV import button</text>

  <text x="40" y="268" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">audit_table</text>
  <rect x="200" y="258" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="273" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">e.g. AUD_USERS — leave blank to disable</text>

  <text x="40" y="298" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">max_rows</text>
  <rect x="200" y="288" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="303" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">(connector default)</text>

  <text x="40" y="328" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">key_columns</text>
  <rect x="200" y="318" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="333" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>

  <text x="40" y="358" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">initial_group_by</text>
  <rect x="200" y="348" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="363" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">REGION</text>

  <line x1="20" y1="384" x2="980" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="408" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN A ROW IS CLICKED</text>

  <text x="40" y="436" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Behavior</text>
  <rect x="200" y="426" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="441" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Do nothing (or fall through to the screen's own dialog) ▾</text>

  <text x="40" y="466" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Other options: Open a sibling Screen as a modal dialog · Open a page route in a new browser tab</text>
</svg>

### Field by field

| Field | Notes |
|---|---|
| **Connector** | Defaults to *Use the app's connector — \<app>*. Set explicitly only when the screen reads/writes through a **different** connector than the one the app is named after (rare but legitimate — e.g. a `crm` app that reads its reporting tables through a `reporting` connector). |
| **Label** | Short text shown in menus and lists. Falls back to `description`, then `id`. |
| **Description** | Longer text shown as the page title. |
| **auto_load** | When on, the grid runs the read query as soon as the screen opens. When off, the user clicks *Run* to fetch. Turn off only for screens with required filter parameters or genuinely expensive queries. |
| **editable** | When on, the grid supports inline cell editing — click a cell, type, press Enter; *Save* commits via `update_query`. When off, the user edits only through the dialog. |
| **uploadable** | When on, an Excel / CSV *Import* button appears in the grid toolbar. Requires `key_columns` to know which rows are updates vs inserts. |
| **audit_table** | Set to a table name (convention: `AUD_<TABLE>`) to mirror every successful write into it. Each row gets `AUD_ACTION` (INSERT/UPDATE/DELETE), `AUD_USER` (the caller's username), `AUD_DATE` (server timestamp). Blank = no audit. |
| **max_rows** | Cap on the read query's result. Blank uses the connector's / pool's default (typically 1000). |
| **key_columns** | Columns that uniquely identify a row — drives the Excel-import update-vs-insert match and the dialog's edit-mode lock. Leave blank to derive from columns whose `key` flag is on (the recommended path — see [Columns](./columns.md)). |
| **initial_group_by** | One or more column names — the grid groups by these on first open. The user can ungroup / regroup from the *Group* control. |
| **treeview** | Set when the rows form a parent/child hierarchy — e.g. menu trees, organisation charts. Adds a *Tree* view toggle alongside *Table* / *Chart*. See [Concepts → Screens](./overview.md) for the full reference. |
| **chart_id** | A saved chart id (from `[charts.*]`) — pre-fills the *Chart* view toggle. Blank uses a session-local default. |

### When a row is clicked

The dropdown picks one of three behaviours:

| Mode | What happens |
|---|---|
| **Do nothing (or fall through to the screen's own dialog)** | Default. If the screen has its own `dialog`, clicking a row opens it in edit mode. Otherwise the click is a no-op. |
| **Open a sibling Screen as a modal dialog** | The row's columns bind into another screen's read query (you pick the target + the binds). That sibling screen's dialog opens as a modal. Useful for master-detail without duplicating dialog markup. |
| **Open a page route in a new browser tab** | A SPA route — escape hatch for hand-written React pages. Use `{column_name}` placeholders to interpolate the row's columns (URL-encoded). Example: `/nomaflow/runs/{id}`. |

When both *route* and *Open sibling Screen* are set, **route wins** — the explicit route is the more specific intent.

---

## Step 4 — The Queries tab

Switch to **Queries**. This is where the screen learns which queries to fire on read and on each write.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="que-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#que-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · crm.customers · Queries</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Read query *</text>
  <rect x="200" y="78" width="500" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="210" y="93" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_get ▾</text>
  <rect x="708" y="78" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="93" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="138" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Update query</text>
  <rect x="200" y="128" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="143" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_put ▾</text>
  <rect x="708" y="128" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="143" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="178" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Insert query</text>
  <rect x="200" y="168" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="183" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_post ▾</text>
  <rect x="708" y="168" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="183" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="218" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Delete query</text>
  <rect x="200" y="208" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="223" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_delete ▾</text>
  <rect x="708" y="208" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="223" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="268" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">The ✎ button opens the query in its own editor — saves there commit through to connectors.toml without leaving this designer.</text>
</svg>

| Field | Required | Notes |
|---|---|---|
| **Read query** | Yes | The SELECT that fills the grid. The dropdown is fed from the selected connector's queries list. |
| **Update query** | No | The writable query fired by the dialog's *Save* in edit mode and the grid's *Save* button. Convention: `<base>_put`. |
| **Insert query** | No | The writable query fired by the dialog's *Save* in add mode. Convention: `<base>_post`. |
| **Delete query** | No | The writable query fired by the dialog's *Delete* button (or the grid's per-row delete). Convention: `<base>_delete`. |

The pencil icon (✎) on each row opens the query in a side modal — quick edits to a query don't require leaving the Screen Designer. The modal saves through to `connectors.toml` directly; reload happens automatically.

### Picking from the CRUD wizard's output

If you generated the four queries via the [CRUD Wizard](../queries/create-from-database.md), they're already in the dropdown — `customers_get`, `customers_put`, `customers_post`, `customers_delete`. Wire them in order and the screen has full CRUD.

For read-only screens (reports, dashboards, audit views) leave the three write fields blank. The grid still works; the dialog (if any) is read-only; the *＋ Add* / *🗑 Delete* buttons disappear.

---

## Step 5 — Save and see the result

Click **Save** in the modal header. The screen is persisted, the hot reload fires, and:

- A new menu entry for this screen can be added (see the upcoming **Menus** section).
- The screen is reachable directly at `/screen/<app>/<id>`.
- A user with `sql:<connector>:<read_query>` permission sees the grid.

---

## Common pitfalls at this stage

| Mistake | Symptom | Fix |
|---|---|---|
| `read_query` unset. | Save fails validation. | Pick one — the read query is the only required query. |
| `update_query` set but `key_columns` empty AND no `key` flag on any column. | The dialog's *Save* in edit mode runs the UPDATE without a `:NAME_ORIGINAL` clause and updates the wrong row. | Either set `key_columns` or mark the key columns in the Columns tab. |
| `editable = true` but no `update_query`. | The grid shows the cell editor but the *Save* button fails. | Wire the `update_query`. |
| `uploadable = true` but no `key_columns`. | The importer can't tell update from insert. | Set `key_columns`. |
| Connector override pointing at a pool the user has no permission on. | Sign-in users get an empty grid with no obvious error. | Either change the override or grant the user the right `sql:` permission. |
| Same screen id reused across apps. | The cross-link `screen:<app>:<id>` is per-app, so collisions across apps are fine. But within the same app, the validator refuses duplicates. | Pick unique ids per app. |

---

## What's next

- [Columns](./columns.md) — configure each column once for both the grid and the dialog.
- [Dialog builder](./dialog-builder.md) — the visual designer for the add/edit form.
- [Actions and lifecycle](./actions-and-lifecycle.md) — toolbar buttons, row menus, on_load / on_save / on_insert hooks.
