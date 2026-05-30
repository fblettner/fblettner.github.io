---
title: Screens — overview
description: "The Screens page — left scope bar of apps, flat list of screens, click to open the Screen Designer's 7 tabs (General / Queries / Columns / Dialog / Actions / Row menu / Export)."
keywords: [Liberty Framework, screens, ScreensBuilder, Screen Designer, tabs, dialog, columns, actions, permissions]
---

# Screens — overview

A **screen** in Liberty is the page a user sees: a table of rows, optional filters, optional add/edit dialog, optional actions, optional row context menu. One screen = one `<base>_get` query + (optionally) `<base>_put` / `<base>_post` / `<base>_delete` for writes + a dialog form on top.

The page that manages screens is **Settings → Screens**. This overview maps it; the next pages walk through each task.

---

## The Screens page at a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#sov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Screens</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="216" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="256" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="306" y="78" width="240" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="426" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add screens for a connector</text>
  <rect x="700" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="740" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="788" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="828" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>

  <rect x="40" y="120" width="828" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Filter screens…</text>

  <rect x="40" y="168" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="190" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="76" y="208" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Customers · 2 tabs · 9 fields · 3 actions</text>
  <text x="76" y="220" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=customers_get</text>
  <rect x="700" y="180" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="762" y="180" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Clone</text>
  <rect x="818" y="180" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="195" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="232" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="254" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="76" y="272" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Deals pipeline · 1 tab · 6 fields · row menu</text>
  <text x="76" y="284" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=deals_get</text>
  <rect x="700" y="244" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="762" y="244" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Clone</text>
  <rect x="818" y="244" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="259" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="296" width="828" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="454" y="324" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add screen (lands at the top of the list)</text>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Top scope bar** | One chip per app (a connector that has a menu). Click a chip → its screens load below. The *＋ Add screens for a connector* button registers a brand-new connector under the Screens namespace. *Discard* / *Save* on the right commit or revert page-wide edits. |
| **Filter bar** | A search input for the screen list. Visible when the selected app has more than a handful of screens. |
| **Screen list** | One card per screen, vertical scroll. Each card shows the id, label, read query, tab count, field count and per-card actions: *Rename*, *Clone*, *Delete*. **Clicking a card opens the Screen Designer modal.** |

---

## The Screen Designer modal

Clicking a card opens a **near-fullscreen modal** hosting the **ScreenEditor**. The header has *Maximize / Restore* (default fullscreen), *Cancel* and *Save* — Save commits **just this screen's edits** and closes; Cancel prompts on unsaved changes.

Inside the modal, seven tabs organise everything:

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="stab-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="160" rx="14" fill="url(#stab-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · crm.customers</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="90" y="98" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="148" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="198" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Queries</text>
  <rect x="256" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="306" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="364" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="414" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Dialog</text>
  <rect x="472" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="522" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Actions</text>
  <rect x="580" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="630" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Row menu</text>
  <rect x="688" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="738" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>

  <text x="40" y="138" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Tab content</text>
  <rect x="40" y="146" width="920" height="20" rx="4" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
</svg>

| Tab | Carries |
|---|---|
| **General** | Identity, connector override, audit table, row cap, key columns, behaviour flags (auto-load, editable, uploadable), grouping, treeview, default chart, row-click behaviour. |
| **Queries** | The four CRUD query references — read (required), update, insert, delete. Picker is fed from the connector's queries list. |
| **Columns** | One row per column hint — labels, formats, defaults, dictionary references, filtering, edit rules. Click a column to drill into its full editor. |
| **Dialog** | The **Visual Builder** — a three-column Figma-style canvas (Palette / Canvas / Inspector) where you drag fields onto tabs. Optional — a screen without a dialog still works as a read-only / grid-edit table. |
| **Actions** | Three groups: *Dialog hooks* (on_load / on_save / on_cancel), *Toolbar* (buttons above the table), *Row hooks* (on_insert / on_update / on_delete). |
| **Row menu** | Right-click context menu actions on a row. |
| **Export** | Multi-sheet xlsx export configuration — optional. |

The next pages of this section walk through each tab as a separate task.

---

## What a screen carries

The schema's top-level fields, grouped by purpose:

| Group | Fields |
|---|---|
| **Identity** | `id`, `label`, `description`, `connector` *(blank = the app's own connector)* |
| **Read query** | `read_query` (required), `auto_load`, `max_rows`, `key_columns` |
| **Write queries** | `update_query`, `insert_query`, `delete_query` |
| **Editing & display** | `columns`, `editable`, `uploadable`, `initial_group_by`, `treeview`, `chart_id` |
| **Audit** | `audit_table` (e.g. `AUD_USERS` — mirrors writes with AUD_ACTION / AUD_USER / AUD_DATE) |
| **Form** | `dialog` *(optional — the form on top of the table)* |
| **Actions / hooks** | `actions` (toolbar), `row_menu` (right-click), `on_insert` / `on_update` / `on_delete` (row hooks) |
| **Row-click target** | `row_click_screen` + `row_click_connector` + `row_click_binds` *(open a sibling screen as a dialog)* OR `row_click_route` *(open a SPA route)* |
| **Export** | `export` *(workbook xlsx config)* |

---

## Screen kinds — by what's set

There's no `kind` discriminator; you get different screen shapes by which fields you fill in:

| Filled in | Behaviour |
|---|---|
| `read_query` only | Read-only grid. The user sees rows; no edit, no add. |
| `read_query` + `editable = true` | Inline grid editing — the user edits cells in place, the grid's *Save* button writes back. Requires `update_query`. |
| `read_query` + `dialog` | Grid + dialog. The user adds/edits rows through the form. Requires the matching `insert_query` / `update_query`. |
| `read_query` + `row_click_screen` | Master/detail. Clicking a row opens a sibling screen's dialog narrowed to that row. |
| `read_query` + `row_click_route` | Master/page. Clicking a row navigates to a SPA route — escape hatch for hand-written React pages (live-streamed logs, multi-source merges). |
| Any of the above + `treeview` | Tree view toggle in addition to the default Table / Chart toggles. Parent/child columns build a recursive node tree. |

The same screen can layer several: a screen with `dialog` AND `row_click_route` opens the route on click (route wins), and the dialog is reached only via the toolbar's *＋ Add* button.

---

## Permissions — gated by the read query

The screen itself **does not** have its own permission string. A user can see a screen when they have the permission to run its **read query**:

```
sql:<connector>:<read_query>
```

So a screen `customers` on connector `crm` with `read_query = customers_get` is visible to anyone with `sql:crm:customers_get`. Granting `sql:crm:*` opens every query on the connector — and therefore every screen that uses it.

The same logic applies to writes: the dialog's *Save* and the grid's *Save* succeed only when the user has `sql:<connector>:<update_query>` / `<insert_query>` / `<delete_query>`. A user with read but no write permission sees the grid but no *＋ Add* button and gets a read-only dialog.

---

## Save and reload

The Screens page's *Save* button writes the whole `screens.toml` (the `[screens]` table is replaced wholesale) and triggers a hot reload. The status banner reports which apps were touched.

The hot reload means **no process restart** — a new screen is callable immediately at `/screen/<app>/<id>`, and the menu picks it up if a menu entry points at it.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Wire a fresh screen to a `_get` query and see the grid. | [Create a screen from a query](./create-from-query.md). |
| Configure columns — labels, formats, defaults, filtering. | [Columns](./columns.md). |
| Build the add/edit dialog with the visual designer. | [Dialog builder](./dialog-builder.md). |
| Make fields appear / be required / be locked under specific conditions. | [Conditional fields](./conditional-fields.md). |
| Add toolbar buttons, row menus and lifecycle hooks. | [Actions and lifecycle](./actions-and-lifecycle.md). |
| Embed a child-record form or a related-rows grid in a tab. | [Nested tabs](./nested-tabs.md). |

---

## What's next

- [Create a screen from a query](./create-from-query.md) — start with a `_get`, see the grid.
- [Concepts → Screens](../../screens.md) — the deep reference behind this page.
