---
title: Dialog builder
description: "The Visual Builder — a three-column Figma-style canvas (Palette / Canvas / Inspector) where you drag fields onto tabs, set properties, wire lookups and add per-tab actions."
keywords: [Liberty Framework, dialog builder, visual builder, ScreenVisualBuilder, palette, canvas, inspector, tabs, fields, drag-drop]
---

# Dialog builder

The **Dialog** tab of the Screen Designer opens the **Visual Builder** — a WYSIWYG editor for the add/edit form. The data model is the same `ScreenDialog` shape stored in `screens.toml`, but instead of editing TOML you drag fields onto tabs and tune properties in a side inspector.

A screen without a dialog still works as a read-only / grid-edit table. Build a dialog when the user needs a full form to add or edit rows.

---

## Three-column layout

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="vb-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#vb-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · crm.customers · Dialog</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="220" height="350" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PALETTE</text>
  <rect x="56" y="112" width="80" height="22" rx="4" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="96" y="127" fill="#0b1220" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionary</text>
  <rect x="142" y="112" width="80" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="182" y="127" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="56" y="144" width="186" height="22" rx="4" fill="rgba(0,0,0,0.30)" stroke="#334155"/>
  <text x="68" y="159" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Search…</text>
  <rect x="56" y="176" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="194" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ CUSTOMER_ID</text>
  <rect x="56" y="208" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="226" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ NAME</text>
  <rect x="56" y="240" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="258" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ EMAIL</text>
  <rect x="56" y="272" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="290" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ STATUS</text>
  <rect x="56" y="304" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="322" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ REGION_CODE</text>

  <rect x="272" y="78" width="450" height="350" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="288" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CANVAS</text>
  <rect x="288" y="112" width="76" height="24" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="326" y="129" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="370" y="112" width="76" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="408" y="129" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Address</text>
  <rect x="452" y="112" width="60" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="482" y="129" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Tab</text>

  <rect x="288" y="148" width="200" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="298" y="166" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="298" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[key · disabled in edit]</text>
  <rect x="494" y="148" width="200" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="504" y="166" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="504" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[required]</text>

  <rect x="288" y="196" width="200" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="298" y="214" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">EMAIL</text>
  <text x="298" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[format=email]</text>
  <rect x="494" y="196" width="200" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeDasharray="3,3"/>
  <text x="594" y="220" fill="#64748b" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">drop a field here</text>

  <rect x="288" y="244" width="406" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="298" y="262" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="298" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[ENUM · colspan=2]</text>

  <rect x="288" y="304" width="200" height="40" rx="6" fill="rgba(255,255,255,0.10)" stroke="rgba(192,132,252,0.60)" strokeWidth="2"/>
  <text x="298" y="322" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">REGION_CODE</text>
  <text x="298" y="336" fill="#c084fc" fontSize="9" fontFamily="system-ui, sans-serif">[selected — see Inspector →]</text>

  <text x="288" y="372" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HIDDEN ON THIS TAB</text>
  <rect x="288" y="380" width="406" height="36" rx="6" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="491" y="402" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">CREATED_AT (hidden=true)</text>

  <rect x="734" y="78" width="226" height="350" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="750" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSPECTOR · REGION_CODE</text>
  <text x="750" y="124" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">dd</text>
  <rect x="784" y="114" width="160" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="794" y="128" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">REGION_CODE</text>
  <text x="750" y="148" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">colspan</text>
  <rect x="784" y="138" width="50" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="809" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">1</text>
  <text x="750" y="172" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">required</text>
  <rect x="784" y="162" width="16" height="16" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="750" y="196" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">hidden</text>
  <rect x="784" y="186" width="16" height="16" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="750" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">disabled</text>
  <rect x="784" y="210" width="16" height="16" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>

  <line x1="750" y1="244" x2="944" y2="244" stroke="#1f2937"/>
  <text x="750" y="262" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUP PARAM BINDS</text>
  <text x="750" y="284" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">:APP_ID ← APP_ID</text>
  <text x="750" y="304" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Add binding</text>

  <line x1="750" y1="326" x2="944" y2="326" stroke="#1f2937"/>
  <text x="750" y="344" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONDITIONAL RULES</text>
  <text x="750" y="362" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">visible_when: (none)</text>
  <text x="750" y="378" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">required_when: (none)</text>
  <text x="750" y="394" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">disabled_when: (none)</text>
  <text x="750" y="416" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Add condition</text>
</svg>

| Region | What it does |
|---|---|
| **Palette** *(left)* | Source of new fields. Two sub-tabs: **Dictionary** (every entry available on the current connector scope) and **Columns** (every column the read query returns). A search box narrows the list. Click an entry to add a field card on the canvas; drag an entry to drop it at a specific position. |
| **Canvas** *(center)* | The dialog's tabs strip across the top + the field grid below. Click a tab to switch; *＋ Tab* adds one. Each field card shows the field name + a one-line summary of its key flags. The selected card has a coloured border; the inspector on the right reflects it. A separate **HIDDEN** group at the bottom collects fields with `hidden = true`. |
| **Inspector** *(right)* | The properties of the selected field (or a per-tab action editor when a tab action is selected — mutually exclusive). Properties are rendered as a generic form; the **Lookup param binds** and **Conditional rules** sections expand inline. |

---

## Building from scratch

### Step 1 — Open the Dialog tab

The first time, the canvas is empty with a *Create dialog* button. Click it to seed `dialog.tabs = [{id: 'general', label: 'General', fields: []}]` and reveal the three-column layout.

### Step 2 — Add the first tab's fields

Two ways:

| Method | When |
|---|---|
| **Click a Dictionary entry / column in the Palette** | Adds a field card at the end of the current tab's grid. |
| **Drag a Dictionary entry / column onto the Canvas** | Drops the field card where you released it — useful to insert mid-grid. |

The added field becomes the selected card; the Inspector switches to its properties. Set `colspan` to widen it (the grid is by default 2 columns; a `colspan = 2` field fills the row).

### Step 3 — Tune the field properties

In the Inspector:

| Field | What it does |
|---|---|
| **`dd`** | Dictionary entry the field inherits from. Defaults to the column's name on add. |
| **`colspan`** | How many grid cells the field spans. Defaults to 1. |
| **`required`** / **`hidden`** / **`disabled`** | Per-dialog overrides — leave blank to inherit from the column hint (see [Columns](./columns.md)). |
| **Lookup param binds** | Extra `:placeholder` bindings for a `LOOKUP` field. Each binding is `{param: <placeholder on the lookup query>, source: <field on this dialog>}`. The classic case: a role picker narrowed by the application id from another field. |
| **Conditional rules** | `visible_when` / `required_when` / `disabled_when` — see [Conditional fields](./conditional-fields.md). |

### Step 4 — Add tabs

Click **＋ Tab** above the canvas. The new tab is empty; drag fields in from the Palette. Common tab patterns:

| Tab name | What's on it |
|---|---|
| **General** | Identity + most-used fields. |
| **Audit** | Created at, created by, updated at, updated by — often `hidden_on_add` to hide them when inserting. |
| **Notes** | Free-text fields. |
| **Address** | A group of related fields (street, city, postcode, country). |

Two flags on each tab control visibility per mode:

| Flag | Effect |
|---|---|
| **`hide_on_add`** | Tab disappears when adding a new row. |
| **`hide_on_edit`** | Tab disappears when editing an existing row. |

### Step 5 — Reorder fields

Drag a field card within the same tab to reorder. Drag across to a different tab to move it between tabs. The drag is HTML5 native — the drop target highlights while you hover. When dragging is awkward, select the field and use the **Tab** picker in the Inspector to move it to another form tab — the field lands at the end of the target tab and stays selected.

### Step 6 — Hide a field

Two ways:

| Method | Effect |
|---|---|
| Set `hidden = true` in the Inspector. | The card moves to the **HIDDEN** group at the bottom of the canvas. The field still binds at save time. |
| Delete the field from the tab. | The field is removed from the dialog entirely. The column is still on the screen; it just doesn't surface in the form. |

The "hide but keep" pattern is useful for technical columns the dialog must submit (e.g. an audit timestamp) but the user shouldn't see.

---

## The three tab kinds

Tabs aren't all the same. Three types live under `dialog.tabs`, discriminated on the `type` field:

| Type | Purpose |
|---|---|
| **`form`** *(default)* | A grid of editable fields — the case described above. |
| **`nested_form`** | A child-record form embedded in the tab. The parent's PK binds into a separate read query; if a row comes back the nested form edits it, otherwise it inserts. See [Nested tabs](./nested-tabs.md). |
| **`nested_table`** | A related-rows TableView embedded in the tab. Renders another screen's grid scoped to the parent's PK. See [Nested tabs](./nested-tabs.md). |

The visual builder shows the same tab strip for all three — switching to a `nested_form` tab swaps the canvas for that tab's nested-form editor; `nested_table` shows the target-screen picker.

---

## Per-tab actions

Each tab can carry its own action list — buttons that fire from inside the tab footer. Common patterns:

| Pattern | Why per-tab |
|---|---|
| A *Recompute* button on a calculations tab. | Triggers a stored procedure only when the user is looking at those fields. |
| A *Test webhook* button on a notification tab. | Only meaningful in that context. |
| A *Refresh from source* button on a sync tab. | Re-pulls data the tab displays. |

The action editor opens in the **Inspector** when you click an action's row — the Inspector shows one thing at a time (a field OR an action). Selecting a field clears the action selection and vice versa.

See [Actions and lifecycle](./actions-and-lifecycle.md) for the full action types.

---

## Dialog title

The dialog's title sits at the top of the modal when it opens. Set it once in the Inspector's **Dialog** section (below the field properties when no field is selected). Blank → falls back to the screen's `label`, then to `id`.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Field on a tab references a column that doesn't exist in the read query. | The dialog shows the field but the value is always blank, and saving sends no value for it. | Either add the column to the read query or remove the field from the tab. |
| `lookup_param_binds` references a field that's not on the same tab. | The bind resolves to NULL at submit. | Either move the source field onto the same tab or use a cross-tab binding (the engine reads the whole form state, but the inspector's Param dropdown only lists fields visible on the current tab). |
| `colspan = 3` on a 2-column grid. | The field overflows; layout breaks. | Cap `colspan` at the tab's `cols`. |
| Two fields with the same `name` on the same tab. | The save sends two values for the same column; the second wins. | Each field's `name` must be unique within the dialog. |
| `hide_on_add = true` AND `hide_on_edit = true`. | The tab never appears. | Either flip one off or drop the tab. |

---

## What's next

- [Conditional fields](./conditional-fields.md) — make a field appear / be required / be locked only under specific form conditions.
- [Actions and lifecycle](./actions-and-lifecycle.md) — wire on_load / on_save / on_cancel to extend the dialog's behaviour.
- [Nested tabs](./nested-tabs.md) — embed a child-record form or a related-rows grid.
