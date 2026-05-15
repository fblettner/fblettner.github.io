---
title: Screens
description: "A Screen is the definition of one business object — its read query, optional write queries, and an inline dialog with tabs and fields. Everything the UI needs to render the grid, the modal form and the actions is in one TOML entry."
keywords: [Liberty Next, screen, dialog, tab, field, business object, ScreenDialog, audit, action, row menu, param bind, condition]
---

# Screens

A **Screen** wraps a SQL connector query with everything the UI needs to render a business object: the grid (the `read_query`), the optional CRUD queries, the modal form definition, the audit flag and the row menu. One Screen per business object — grid, tabs, fields and actions all live in a single TOML entry.

Screens live in `config/screens.toml`, organised under `[screens.<app>.<id>]`. They are hot-reloadable with the rest of the config.

---

## At a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#sc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">📋 Users · TableView</text>
  <rect x="690" y="30" width="90" height="22" rx="5" fill="url(#sc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">▶ Run</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="82" width="540" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="98" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID · NAME · EMAIL · STATUS · CITY · ⋮</text>

  <rect x="240" y="110" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="124" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42  ·  Anna Lefèvre  ·  anna@…  ·</text>
  <rect x="468" y="113" width="46" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="491" y="123" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="528" y="124" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Paris</text>
  <text x="764" y="124" fill="#64748b" fontSize="10">⋮</text>

  <rect x="240" y="134" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="148" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">43  ·  Marc Dupont   ·  marc@…  ·</text>
  <rect x="468" y="137" width="46" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="491" y="147" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactive</text>
  <text x="528" y="148" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Lyon</text>

  <rect x="240" y="158" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">44  ·  Léa Martin    ·  lea@…   ·</text>
  <rect x="468" y="161" width="46" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="491" y="171" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="528" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Marseille</text>

  <line x1="240" y1="196" x2="780" y2="196" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="208" width="540" height="240" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="252" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOG · User #42</text>
  <text x="752" y="232" fill="#64748b" fontSize="10" textAnchor="end">⛶ ✕</text>

  <rect x="252" y="244" width="74" height="22" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="289" y="259" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">General</text>
  <rect x="330" y="244" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="370" y="259" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Address</text>
  <rect x="414" y="244" width="74" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="451" y="259" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit</text>

  <text x="252" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME *</text>
  <rect x="320" y="280" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="295" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Anna Lefèvre</text>
  <text x="514" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS *</text>
  <rect x="586" y="280" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="295" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Active ▾</text>

  <text x="252" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <rect x="320" y="312" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="327" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">anna@example.com</text>
  <text x="514" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CITY</text>
  <rect x="586" y="312" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="327" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">PAR — Paris ▾</text>

  <text x="252" y="354" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADMIN <text fill="#64748b" fontStyle="italic">(visible_when: STATUS = Active)</text></text>
  <rect x="320" y="344" width="20" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="330" y="354" fill="white" fontSize="10" textAnchor="middle">✓</text>

  <text x="252" y="384" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSWORD <text fill="#64748b" fontStyle="italic">(rule: PASSWORD)</text></text>
  <rect x="320" y="374" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="389" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••</text>

  <rect x="240" y="412" width="120" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="430" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Cancel</text>
  <rect x="660" y="412" width="120" height="28" rx="6" fill="url(#sc-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="720" y="430" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Save</text>

  <rect x="20" y="110" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grid · read_query</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cursor.description → columns</text>
  <line x1="220" y1="126" x2="240" y2="122" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>

  <rect x="20" y="208" width="200" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="223" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dialog · tabs</text>
  <text x="30" y="236" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cols, hide_on_add / edit</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">audit auto-tab</text>
  <line x1="220" y1="232" x2="240" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>

  <rect x="820" y="280" width="160" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Field widget</text>
  <text x="830" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked from column rule</text>
  <text x="830" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">BOOLEAN · ENUM · LOOKUP</text>
  <line x1="820" y1="298" x2="766" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>

  <rect x="820" y="344" width="160" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="359" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-field condition</text>
  <text x="830" y="372" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">visible_when / required_when</text>
  <text x="830" y="384" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reads the live form state</text>
  <line x1="820" y1="358" x2="500" y2="354" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>
</svg>

---

## Defining a screen

```toml
[screens.myapp.users]
label        = "Users"
description  = "Application users"
read_query   = "users_get"            # required
update_query = "users_put"
insert_query = "users_post"
delete_query = "users_delete"
auto_load    = true
audit        = true                   # adds the AUD audit tab to the dialog
editable     = true                   # row click → modal open
uploadable   = true                   # enables the Excel-import path

[[screens.myapp.users.dialog.tabs]]
id    = "general"
label = "General"
cols  = 2
fields = [
  { column = "ID",       hidden = true },
  { column = "NAME",     required = true, colspan = 2 },
  { column = "EMAIL" },
  { column = "STATUS" },
  { column = "CITY" },
  { column = "ADMIN",    visible_when = [{ field = "STATUS", value = "Y" }] },
  { column = "PASSWORD", hide_on_edit = true },
]
```

`connector` is optional — defaults to the connector that owns the `read_query`. Cross-connector screens (one connector to read, another to write) are allowed.

---

## Queries

A Screen binds up to four queries:

| Field | Purpose | Permission |
|---|---|---|
| `read_query` | The SELECT that drives the grid. Required. | `sql:<conn>:<read_query>` |
| `update_query` | The UPDATE called on *Save* in edit mode. Optional. | `sql:<conn>:<update_query>` + the query's own `writable = true` |
| `insert_query` | The INSERT called on *Save* in add mode. Optional. | `sql:<conn>:<insert_query>` + `writable = true` |
| `delete_query` | The DELETE called on *Delete* from the row menu. Optional. | `sql:<conn>:<delete_query>` + `writable = true` |

The set the caller can actually run is reported back on `GET /api/screens/{app}/{id}` — the React UI hides the *Save* / *Add* / *Delete* buttons accordingly.

---

## Dialog

A `dialog` describes the modal form. It is **inline** on the screen — no second table to look up.

### Tabs

```toml
[[screens.myapp.users.dialog.tabs]]
id           = "general"
label        = "General"
cols         = 2                # grid width (2 = two-column layout)
hide_on_add  = false
hide_on_edit = false
```

| Field | Description |
|---|---|
| `id` | The tab identifier — used in the URL when the user clicks a tab. |
| `label` / `l` | Tab title; `l = { fr = "..." }` translates per language. |
| `cols` | CSS-grid width. Each field's `colspan` widens within this. |
| `hide_on_add` / `hide_on_edit` | Drops the tab entirely in `add` / `edit` mode. |
| `fields` | Ordered list of `ScreenField`. |

### Fields

```toml
fields = [
  { column = "NAME",     required = true },
  { column = "STATUS",   required = true, default = "Y" },
  { column = "PASSWORD", hide_on_edit = true, hidden_in_view = true },
  { column = "ADMIN",    visible_when  = [{ field = "STATUS", value = "Y" }],
                         required_when = [{ field = "ROLE",   value = ["admin", "owner"] }] },
]
```

Per field:

| Field | Effect |
|---|---|
| `column` | The result column from `read_query`. The widget is picked from that column's rule (BOOLEAN → checkbox, ENUM → `SearchSelect`, LOOKUP → `SearchSelect`, plus date / number / text from `format`/`type`). |
| `hidden` | Drops the field. |
| `disabled` | Renders a read-only echo. |
| `required` | Flags the label with a `*`. |
| `colspan` | Widens within the tab's `cols` grid. |
| `default` | Seeds on `add`. |
| `hide_on_add` / `hide_on_edit` | Mode-specific visibility. |
| `visible_when` / `required_when` / `disabled_when` | Per-field conditions (see below). |

### Per-field conditions

Each `*_when` rule references **another field on the same dialog** (not a server filter). The predicate holds when that field's current form value equals `value` (or is in `value` when a list). Rules are AND-ed; a non-empty list whose predicates all pass fires the rule.

The static flags (`visible: false`, `required: false`, `disabled: false`) act as the fallback when the corresponding `*_when` list is empty.

---

## Audit

Setting `audit = true` enables the auto-generated **Audit** tab on the dialog. It exposes:

- `AUD_CREATED_BY` / `AUD_CREATED_AT`
- `AUD_UPDATED_BY` / `AUD_UPDATED_AT`

Resolved server-side at save time from `principal.username` and `SYSDATE`. The tab is read-only.

---

## Actions and row menu

| Field | Purpose |
|---|---|
| `actions` | Top-of-dialog action buttons that fire connector calls. Same shape as the [Actions](../../nomaubl/management/actions.md) bindings of NomaUBL. *Slice 4 — wired runtime pending.* |
| `row_menu` | Per-row `⋮` menu in the grid. *Slice 6 — wired runtime pending.* |

These appear under the `Screen` schema today; the runtime is ahead in NomaUBL and is being ported. See the `docs/PLAN.md` of the framework repository for the order of slices.

---

## REST endpoints

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/api/screens` | Every accessible screen per app (list view — no dialog body, no actions). |
| `GET` | `/api/screens/{app}` | All accessible screens for one app. `404` when nothing survives. |
| `GET` | `/api/screens/{app}/{id}` | The full screen, including `dialog`, `actions`, `row_menu`. |

The set is **permission-pruned**: a screen whose `read_query` the caller cannot run is dropped from `GET /api/screens` and surfaces `403` on the per-id route.

---

## Tips & best practices

- **One screen per business object.** Resist the temptation to bundle several reads into the same screen. The grid is fast; another screen with its own dialog is cleaner than a dialog with twelve tabs.
- **Mark every dialog field with a real `required`.** It saves a round-trip — the dialog refuses to save until the required fields are filled, instead of letting the backend reject the row.
- **Per-field conditions are evaluated live.** `visible_when` / `required_when` / `disabled_when` are attached to the field itself, AND-ed together, and re-evaluated each time the form changes. Easy to keep predictable: each rule references another field on the same dialog.
- **Audit auto-resolves user + timestamp.** Do not bind `AUD_CREATED_BY` / `AUD_UPDATED_AT` manually from the form — they are filled server-side from the principal and `SYSDATE` at save time.
- **Cross-connector saves are legitimate.** A screen reading from `myapp` and writing to an audit connector is supported. Pick the connector on the query, not on the screen.
