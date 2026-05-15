---
title: Security Workbench
description: "Maintain every JD Edwards security entry — application, action, row, column, processing-option, tab, exit, image — on a single grid with inline edit."
keywords: [Nomajde, JD Edwards, JDE security, Security Workbench, F00950, P00950, application security, action security, row security, column security, processing-option security]
---

# Security Workbench

The **Security Workbench** screen is the single editor for every JD Edwards security entry. One line per `(Security Type, User / Role, Object)`. The same data the JDE *P00950 Work With User / Role Security* form maintains — but on one grid, with filters, sort and bulk edits.

Add, change or remove an entry directly on the row. The dialog adapts its fields to the security type: Object Name and Action flags for application security, Data Item for column security, From / Thru actions for action security, etc.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njsw-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#njsw-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · Security Workbench</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATEGORY</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATA ITEM</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="750" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHG</text>
  <text x="900" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEL</text>

  <rect x="60" y="132" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OBJECTS</text>
  <text x="200" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="280" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="450" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="580" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="708" cy="143" r="4" fill="#22c55e"/>
  <circle cx="758" cy="143" r="4" fill="#22c55e"/>
  <circle cx="808" cy="143" r="4" fill="#22c55e"/>
  <circle cx="858" cy="143" r="4" fill="#22c55e"/>
  <circle cx="908" cy="143" r="4" fill="#ef4444"/>

  <rect x="60" y="156" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OBJECTS</text>
  <text x="200" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="280" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="450" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="580" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VLDGJ</text>
  <text x="708" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="758" cy="167" r="4" fill="#ef4444"/>
  <text x="808" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="858" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="908" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="180" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ALIAS</text>
  <text x="200" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">4</text>
  <text x="280" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="450" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="580" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPER</text>
  <text x="708" y="195" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="758" y="195" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="808" cy="191" r="4" fill="#22c55e"/>
  <circle cx="858" cy="191" r="4" fill="#22c55e"/>
  <circle cx="908" cy="191" r="4" fill="#ef4444"/>

  <rect x="60" y="204" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OTHERS</text>
  <text x="200" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">A</text>
  <text x="280" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="450" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="580" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PORLSE</text>
  <text x="708" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="758" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="808" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="858" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="908" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="240" width="880" height="32" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="72" y="260" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READING THE DOTS</text>
  <text x="72" y="272" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Green = the action is granted · red = the action is denied · dash = the column does not apply to this security type.</text>
</svg>

---

## Goal of the view

For each security entry that exists in JDE:

- **Every security type in one place.** Application security, action security, row security, column security, processing-option security, tab security — instead of separate forms in the JDE security workbench, every type sits on one grid filtered by *Type*.
- **The action flags side by side.** *Run*, *View*, *Add*, *Change*, *Delete* — the per-row grant / deny indicators are visible without opening the row.
- **The dialog adapts.** Only the fields that apply to the selected security type are shown — Object Name for application security, Data Item for column security, From / Thru action codes for action security. No clutter.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Category** | `SEC_TYPE` — broad category. | `OBJECTS`, `ALIAS` or `OTHERS` — groups the JDE security types into the three buckets the dialog uses to decide which fields to show. |
| **Type** | `FSSETY` — specific security type code. | The JDE security type: `1` for application, `2` for column, `3` for processing option, `4` for row, `5` for tab, `6` / `7` / `9` for processing-option variants, `A` for action, `S` for solution explorer, etc. |
| **User / Role** | `FSUSER` — JDE identifier. | The user or role the entry applies to. |
| **Object** | `FSOBNM` — object name. | The application, form or table the entry applies to. |
| **Data Item** | `FSDTAI` — data item alias. | The data dictionary item (for column and action security). |
| **From / Thru** | `FSFRDV`, `FSTHDV` — action / version range. | The action code range (for action security). |
| **Run / View / Add / Change / Delete** | `FSRUN`, `FSVWYN`, `FSA`, `FSCHNG`, `FSDLT` — `Y` / `N` flags. Displayed as green / red dots. | Per-action grant or deny. A dash means the action does not apply to the security type on that row. |

Additional JDE flags carried on the row but hidden by default: install, OK, copy, update, attention markers, system code, owner display, function name, function number, exit ID, table ID, text ID, path — and the audit columns (program, job, date, time).

---

## Edit dialog

Click **Add** in the toolbar to register a new security entry, or double-click a row to edit. The dialog has one tab, three columns wide. The fields shown depend on the *Type* — the dialog hides the columns that do not apply.

| Field | When it appears |
|---|---|
| **Category** | Always — sets the broad category (`OBJECTS`, `ALIAS`, `OTHERS`). |
| **Type** | Always — the specific JDE security type. Mandatory. |
| **User / Role** | Always. Mandatory. The lookup filters by the *Category*. |
| **Object** | When *Category* is `ALIAS`, `OBJECTS` or `OTHERS`. Mandatory for most types. |
| **Data Item** | When *Category* is `ALIAS` or `OTHERS` and the type is column, action, row or similar. |
| **From action** | Action-security types — the start of the action range. |
| **Thru action** | When *Type* = `4` (row security on alias) — the end of the action range. |
| **Run** | Types that grant *run* (`3`, `6`, `7`, `9`, `A`, `B`, `M`, `S`). |
| **View** | Types that grant *view* (`2`, `4`, `5`, `7`, `8`, `9`, `A`, `G`, `I`, `K`, `U`). |
| **Add / Change / Delete** | Action-security types — turn the row into a grant or a deny. |
| **OK / Copy / Update / Attention** | Object-level action codes for specific JDE types. |

The unique key is the full combination — JDE allows several rows for the same `(User, Object)` when the security type differs.

---

## Bulk edit on the grid

The security workbench is the screen where the security administrator spends most of their time — and most of the work is repetitive: copy an entry to ten more users, flip *View* from `Y` to `N` on every action row of an application, deny a sensitive form across a whole role family. Nomajde supports this directly on the grid.

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njsw-bulk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#njsw-bulk)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Bulk edit — three patterns covered on the grid</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="280" height="100" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="120" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MULTI-SELECT</text>
  <text x="76" y="142" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Select N rows, edit once</text>
  <text x="76" y="158" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Tick the rows that need the same</text>
  <text x="76" y="172" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">change, modify the column on one</text>
  <text x="76" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">row, the change applies to all.</text>

  <rect x="360" y="100" width="280" height="100" rx="10" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.30)" strokeWidth="1"/>
  <text x="376" y="120" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COPY TO USER / ROLE</text>
  <text x="376" y="142" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Replicate a row to several targets</text>
  <text x="376" y="158" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Right-click an entry, pick the</text>
  <text x="376" y="172" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">target list, the same row is</text>
  <text x="376" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">inserted for each one.</text>

  <rect x="660" y="100" width="280" height="100" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.30)" strokeWidth="1"/>
  <text x="676" y="120" fill="#22c55e" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXCEL UPLOAD</text>
  <text x="676" y="142" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Hundreds of rows in one import</text>
  <text x="676" y="158" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Export the grid, edit offline,</text>
  <text x="676" y="172" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">re-upload — the SI's bundle</text>
  <text x="676" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">becomes live in one click.</text>
</svg>

| Pattern | When to use it |
|---|---|
| **Multi-select** | Tick the rows that need the same change (e.g. set *View* to `N` on five application-security entries for the same role), then edit the column on one of the ticked rows — the change is written to every selected row in a single save. |
| **Copy to user / role** | Right-click a row, pick *Copy to user* or *Copy to role*, choose the target list — the same security entry is inserted for every target. Use this to extend a single grant to a set of users without retyping. |
| **Excel upload** | Export the grid (filtered as needed), edit hundreds of rows offline, then re-import via the toolbar's upload action. The standard *Add* dialog handles single rows; the upload is meant for the bundles that ship with a new module. |

Every bulk action follows the same row-level validation as the single-row edit — a missing required field or an invalid flag combination stops the save, and the operator sees which row failed.

---

## Dynamic columns and filters

The security workbench table holds 35+ columns, but only a subset applies to any single security type. The grid takes advantage of this by **hiding the columns that do not apply** to the rows currently visible.

| When the filter is | The columns that surface | The columns that hide |
|---|---|---|
| *Type = 1* (Application security) | Object, Run, View, Add, Change, Delete | Data Item, From / Thru action |
| *Type = 2* (Column security) | Object, Data Item, View, Change | Run, Add, Delete, From / Thru |
| *Type = 3 / 6 / 7 / 9* (Processing options) | Object, Run, View | Add, Change, Delete, Data Item |
| *Type = 4* (Row security) | Object, Data Item, From / Thru, View, Add, Change, Delete | (all action columns visible) |
| *Type = A* (Action security) | Object, Data Item, From action, Add, Change | View, Thru action |

The same logic drives the **edit dialog**: when the type is `2` (column security), the dialog only shows the fields meaningful for column security; when the type is `1` (application security), it switches to the application columns. There is never a stale, unused field to ignore.

Column visibility can also be overridden manually from the *Columns* button on the toolbar — useful when an administrator wants a specific column visible across all types for an audit export.

---

## Tips & best practices

- **Filter on *Type*** first — the screen carries every JDE security type, and the right filter (e.g. *Type = 1* for application security) collapses both the rows and the visible columns to a focused view.
- **Multi-select before bulk edit.** Hold *Shift* to select a range or *Ctrl* to pick individual rows, then edit any column — the change applies to every selected row.
- **Use *Copy to user / role*** to extend a row to a list of targets. Faster than retyping, and the copies carry the standard audit columns automatically.
- **Excel upload** for SI-delivered security bundles. The standard *Add* flow handles single rows; the upload is meant for the dozens of rows that ship with a new module.
- **A deny on *All Actions* with `User = *PUBLIC` plus targeted grants on roles** is the standard JDE pattern. The grid makes it easy to read whether the deny is in place for every object.
- **After bulk changes**, run *Nomasx-1 → Applications → Rights* to confirm the effective rights match the intent — the workbench shows what is configured, *Rights* shows what JDE will compute at sign-on.
