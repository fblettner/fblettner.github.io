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

<svg viewBox="0 0 1320 574" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="538" rx="14" fill="url(#nst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer ·</text>
  <text x="349.1008" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1017" y="32" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="987" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <rect x="238" y="174" width="632" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOG</text>
  <text x="858" y="192" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">cols: 2 · fields: 0</text>
  <rect x="250" y="202" width="80" height="22" rx="5" fill="transparent" stroke="transparent" strokeWidth="1"/>
  <text x="290.0" y="216.5" fill="#cbd5e1" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ General · 6</text>
  <rect x="334" y="202" width="51" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="359.5" y="216.5" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Deals</text>
  <rect x="389" y="202" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="419.5" y="216.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add tab</text>
  <line x1="250" y1="232" x2="858" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="240" width="608" height="228" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="256" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Tab settings</text>
  <rect x="778" y="244.5" width="68" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="#475569" strokeWidth="1"/>
  <text x="812.0" y="255.3" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">nested_table</text>
  <text x="262" y="278" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAB LABEL</text>
  <rect x="262" y="283" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271" y="297.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="414" y="278" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAB TYPE</text>
  <rect x="414" y="283" width="432" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="423" y="297.3" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">nested_table  Nested table — an inline related-rows TableView</text>
  <text x="834" y="297.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="262" y="322" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET SCREEN ∗</text>
  <rect x="262" y="327" width="286.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271" y="341.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">deals  Deals</text>
  <text x="536.0" y="341.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="560.0" y="322" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="560.0" y="327" width="286.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="569.0" y="341.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">crm</text>
  <text x="834.0" y="341.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="262" y="366" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PARAMETER BINDINGS — PARENT COLUMN → NESTED QUERY PARAM</text>
  <rect x="262" y="372" width="584" height="60" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="270" y="379" width="266.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="279" y="393.3" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">CUSTOMER_ID  Customer</text>
  <text x="524.0" y="393.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="544.0" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <rect x="558.0" y="379" width="252.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="567.0" y="393.3" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">CUSTOMER_ID</text>
  <text x="798.0" y="393.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="820" y="379" width="20" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="393.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="270" y="406" width="83" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="311.5" y="419.5" fill="#94a3b8" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add binding</text>
  <text x="262" y="450" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">Tab actions</text>
  <rect x="328.976" y="439" width="77" height="19" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="367.476" y="452.0" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add action</text>
  <text x="252" y="490" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">A nested-table tab embeds another screen's TableView — its rows and columns come from that screen.</text>
  <rect x="882" y="174" width="200" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="894" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSPECTOR</text>
  <text x="894" y="210" fill="#e2e8f0" fontSize="8.4" fontFamily="system-ui, sans-serif">Dialog title</text>
  <line x1="892" y1="218" x2="1072" y2="218" stroke="#1f2937" strokeWidth="1"/>
  <text x="894" y="244" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Pick a field on the canvas</text>
  <text x="894" y="256" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">to edit its properties.</text>
  <line x1="220" y1="516" x2="1100" y2="516" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="526" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="526" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="144" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="159" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A tab per related set</text>
  <text x="30" y="172" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ Add tab, then its type</text>
  <line x1="200" y1="161.0" x2="334" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="20" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Target screen</text>
  <text x="30" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its grid, dialog and row menu</text>
  <line x1="200" y1="327.0" x2="262" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parameter bindings</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">parent column → :param</text>
  <line x1="200" y1="397.0" x2="270" y2="390" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="20" y="436" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="451" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tab actions</text>
  <text x="30" y="464" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">buttons inside this tab</text>
  <line x1="200" y1="453.0" x2="262" y2="447" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="1120" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tab type</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">form · nested_form · nested_table</text>
  <line x1="1120" y1="287.0" x2="840" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="1120" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector</text>
  <text x="1130" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank = the parent's</text>
  <line x1="1120" y1="377.0" x2="830" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
</svg>

In the Screen Designer, stage **Record form**: **＋ Add tab**, then open **Tab settings** and choose **Tab type** = *Nested table*. The panel then asks for the **Target screen**, its **Connector** and the **Parameter bindings — parent column → nested query param** (**Add binding** for each); **Tab actions** add buttons inside the tab.

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
