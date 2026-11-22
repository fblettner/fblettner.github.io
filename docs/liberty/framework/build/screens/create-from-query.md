---
title: Create a screen from a query
description: "Wire a `_get` query to a fresh Liberty Next screen — the What it is and Data stages of the Screen Designer walked through field by field; the grid appears, edits land via the write queries."
keywords: [Liberty Framework, create screen, read query, ScreensBuilder, ScreenEditor, Data stage, Record form]
---

# Create a screen from a query

You have a `<base>_get` query (and ideally its `_put` / `_post` / `_delete` siblings) — the [CRUD Wizard](../queries/create-from-database.md) is the fastest way to land them. Now you wire a screen on top so users can see and edit the rows.

This page walks the **What it is** and **Data** stages of the Screen Designer. Columns, record form, actions and hooks come in the next pages.

---

## Step 1 — Register the app, if needed

On **Liberty Next → Screens → Screens**, the connector bar lists every app (= connector) that already has at least one screen. If the connector you want to add a screen to isn't there:

1. Click **＋ Add scope**.
2. Pick the connector from the dropdown (only connectors **without** a screens namespace are listed — once registered, the connector becomes an app chip).
3. The chip appears at the top; the screen list below is empty.

If the connector is already a chip, just click it.

---

## Step 2 — Add a screen

At the right of the connector bar, click **＋ Add screen**. The page prompts for a screen id — letters, digits, underscores, leading letter. Conventions:

| Pattern | Example |
|---|---|
| Match the table base. | `customers` for a screen on `customers_get`. |
| Match the JD Edwards object. | `F0005` for the JDE UDC table. |
| `<entity>_<purpose>` for screens that don't map 1-1 to a table. | `customer_balance_report`, `invoice_send_dialog`. |

The id is **stable** — it's the URL segment (`/screen/<app>/<id>`), the configuration key (`[screens.<app>.<id>]`) and the cross-file reference target. Renaming later goes through the *Rename* button on the card, which propagates the change across screens / menus / dictionary.

The empty screen appears in the list; click it to open the **Screen Designer**.

---

## Step 3 — What it is

The designer opens on its first stage, **What it is**: identity, the connector override and the behaviour flags. The fields are a single scrolling list, in this order; a dropdown shows the connector the screen runs against, the app's own by default.

<svg viewBox="0 0 1320 614" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="578" rx="14" fill="url(#cfq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer ·</text>
  <text x="349.1008" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1017" y="32" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="987" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <text x="238" y="152" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Behaviour flags for this screen — auto-load, audit table, row cap, key columns.</text>
  <text x="238" y="176" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="238" y="181" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="195.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">crm</text>
  <text x="1070" y="195.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="238" y="220" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="238" y="225" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="239.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="238" y="259" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Short label shown in the menu / list.</text>
  <text x="238" y="272" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="238" y="277" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="291.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer portfolio</text>
  <text x="238" y="311" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Longer description shown as the page title.</text>
  <text x="238" y="324" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUDIT TABLE</text>
  <rect x="238" y="329" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="343.3" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">e.g. AUD_USERS — leave blank to disable</text>
  <text x="660.0" y="368" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="238.0" y="386" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUTO LOAD</text>
  <rect x="238.0" y="396" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M240.5,401.5 L242.8,403.8 L246.8,399" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="255.0" y="405" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="238.0" y="420" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Run the read query as soon as the screen opens.</text>
  <text x="660.0" y="386" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EDITABLE</text>
  <rect x="660.0" y="396" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M662.5,401.5 L664.8,403.8 L668.8,399" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="677.0" y="405" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="660.0" y="420" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Allow inline grid editing on this screen.</text>
  <text x="238.0" y="438" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UPLOADABLE</text>
  <rect x="238.0" y="448" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="255.0" y="457" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="238.0" y="472" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Show the Excel / CSV import button.</text>
  <text x="660.0" y="438" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">READ ONLY</text>
  <rect x="660.0" y="448" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="677.0" y="457" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="660.0" y="472" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Make the whole screen view-only.</text>
  <line x1="238" y1="486" x2="1082" y2="486" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="504" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHEN A ROW IS CLICKED</text>
  <text x="238" y="520" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BEHAVIOR</text>
  <rect x="238" y="525" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="539.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Do nothing (or fall through to the screen's own dialog)</text>
  <text x="556" y="539.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="220" y1="556" x2="1100" y2="556" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="566" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="580.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="566" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="580.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Opens on What it is</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identity and behaviour</text>
  <line x1="200" y1="99.0" x2="258.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="20" y="175" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="190" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector</text>
  <text x="30" y="203" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the app's, unless set otherwise</text>
  <line x1="200" y1="192.0" x2="238" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="20" y="219" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="234" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Label and description</text>
  <text x="30" y="247" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menu text and page title</text>
  <line x1="200" y1="236.0" x2="238" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="20" y="323" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="338" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Audit table</text>
  <text x="30" y="351" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mirrors every write</text>
  <line x1="200" y1="340.0" x2="238" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="1120" y="383" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="398" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Behaviour flags</text>
  <text x="1130" y="411" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">auto-load, grid editing…</text>
  <line x1="1120" y1="400.0" x2="720.0" y2="405" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="1120" y="448" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="463" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read only</text>
  <text x="1130" y="476" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no write control at all</text>
  <line x1="1120" y1="465.0" x2="820.0" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="1120" y="519" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="534" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row click</text>
  <text x="1130" y="547" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dialog, sibling screen or route</text>
  <line x1="1120" y1="536.0" x2="568" y2="536" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
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

## Step 4 — Data

Click the **Data** stage. This is where the screen learns which queries to fire on read and on each write.

<svg viewBox="0 0 1320 594" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfqd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfqd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfqd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfqd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="558" rx="14" fill="url(#cfqd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <text x="238" y="152" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">CRUD query refs — the read query is required; the rest are optional and used by the dialog / inline grid editor.</text>
  <text x="238" y="174" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FILL FROM TABLE</text>
  <rect x="238" y="179" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="193.3" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Pick…</text>
  <text x="1070" y="193.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="238" y="218" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">READ QUERY ∗</text>
  <rect x="238" y="223" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="237.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_get</text>
  <text x="327.54" y="237.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="980" y="237.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="223" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="237.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="223" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="237.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="223" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="237.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="238" y="262" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SAVES THROUGH</text>
  <rect x="238" y="267" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1070" y="281.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="238" y="301" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Another connector whose endpoints save the rows this screen reads.</text>
  <text x="238" y="314" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UPDATE QUERY</text>
  <rect x="238" y="319" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="333.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_put</text>
  <text x="327.54" y="333.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="980" y="333.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="319" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="333.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="319" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="333.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="319" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="333.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="238" y="358" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSERT QUERY</text>
  <rect x="238" y="363" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="377.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_post</text>
  <text x="333.12" y="377.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="980" y="377.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="363" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="377.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="363" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="377.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="363" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="377.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="238" y="402" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DELETE QUERY</text>
  <rect x="238" y="407" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="421.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_delete</text>
  <text x="344.28" y="421.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="980" y="421.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="407" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="421.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="407" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="421.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="407" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="421.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="238" y="442" width="844" height="20" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="660.0" y="455.5" fill="#64748b" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">+ All read-query columns added</text>
  <line x1="238" y1="474" x2="1082" y2="474" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="492" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Column groups — related 1:1 tables whose columns are edited inline and written back on Save.</text>
  <rect x="238" y="502" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="294.0" y="516.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add column group</text>
  <line x1="220" y1="536" x2="1100" y2="536" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="546" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="560.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="546" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="560.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="173" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="188" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fill from table</text>
  <text x="30" y="201" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the four queries at once</text>
  <line x1="200" y1="190.0" x2="238" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="20" y="217" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="232" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read query</text>
  <text x="30" y="245" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the only one required</text>
  <line x1="200" y1="234.0" x2="238" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="20" y="261" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="276" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saves through</text>
  <text x="30" y="289" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read by SQL, saved by an API</text>
  <line x1="200" y1="278.0" x2="238" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="20" y="357" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="372" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Write queries</text>
  <text x="30" y="385" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">update · insert · delete</text>
  <line x1="200" y1="374.0" x2="238" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="1120" y="204" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="219" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · clone · new</text>
  <text x="1130" y="232" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the query, without leaving</text>
  <line x1="1120" y1="221.0" x2="1030" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="1120" y="435" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="450" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import columns</text>
  <text x="1130" y="463" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">those of the read query</text>
  <line x1="1120" y1="452.0" x2="900" y2="452" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="1120" y="503" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="518" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Column groups</text>
  <text x="1130" y="531" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">related one-to-one tables</text>
  <line x1="1120" y1="520.0" x2="420" y2="513" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
</svg>

| Field | Required | Notes |
|---|---|---|
| **Read query** | Yes | The SELECT that fills the grid. The dropdown is fed from the selected connector's queries list. |
| **Update query** | No | The writable query fired by the dialog's *Save* in edit mode and the grid's *Save* button. Convention: `<base>_put`. |
| **Insert query** | No | The writable query fired by the dialog's *Save* in add mode. Convention: `<base>_post`. |
| **Delete query** | No | The writable query fired by the dialog's *Delete* button (or the grid's per-row delete). Convention: `<base>_delete`. |

Beside each query, three buttons: the pencil (✎) opens the query in its own editor — quick edits don't require leaving the Screen Designer, and that editor saves to `connectors.toml` directly; the second clones it under a new name; **+** creates a new one.

Three more settings sit on this stage:

| Setting | What it does |
|---|---|
| **Fill from table** | Picks a table and fills the four queries at once from its CRUD queries. |
| **Saves through** | Another connector whose endpoints save the rows this screen reads — see [A screen on an API endpoint](./api-screens.md#saves-through). |
| **Import N column(s) from the read query** | Adds to the grid the columns the read query returns and the screen does not list yet; it reads *All read-query columns added* when there is none left. |

Below, **Add column group** declares a related one-to-one table whose columns are edited inline and written back on Save; each related column is then tagged with that group (its **Group** setting, in the column's **General** tab).

### Picking from the CRUD wizard's output

If you generated the four queries via the [CRUD Wizard](../queries/create-from-database.md), they're already in the dropdown — `customers_get`, `customers_put`, `customers_post`, `customers_delete`. Wire them in order and the screen has full CRUD.

For read-only screens (reports, dashboards, audit views) leave the three write fields blank. The grid still works; the dialog (if any) is read-only; the *＋ Add* / *🗑 Delete* buttons disappear.

---

## Step 5 — Save and see the result

Click **Save** at the bottom right of the designer. The screen is persisted, the hot reload fires, and:

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
