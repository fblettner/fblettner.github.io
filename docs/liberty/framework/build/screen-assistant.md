---
title: Screen Creation Assistant
description: "A guided wizard that turns a set of database tables — or an existing connector query — into a working screen, dialog and menu item in one pass. Pick the source, choose the grid columns (default shared view), optionally lay dialog columns into tabs, review the dictionary, place a menu entry, create."
keywords: [Liberty Framework, screen assistant, screen builder, scaffold, wizard, tables, joins, query-backed screen, grid view, dialog columns, dictionary, menu, catalog presets, JD Edwards Address Book, superuser]
---

# Screen Creation Assistant

The **Screen Creation Assistant** is a guided wizard that builds a complete screen in a single pass. Two starting points are supported:

- **Database table** — a base table and any joined tables. The assistant writes a fresh `SELECT` on the connector.
- **Existing query** — a read-only reuse of a connector query already in place. The assistant reads its columns and builds the screen on top; no duplicate query is generated. A catalog preset that names a query goes through the same path.

Once the source is picked, you choose which columns the grid shows (that becomes the screen's default shared view), optionally arrange columns into dialog tabs for editing, review the dictionary entries and drop a menu item — the assistant writes the read query (when from tables), the screen, its dialog, the default view and the menu entry together.

It is the fast path to a working screen: what you would otherwise assemble by hand across the Connectors, Dictionary, Screens and Menus pages, the assistant produces in one reviewed step.

:::info[Superuser tool]
The assistant is a **superuser** tool. Open it from **Liberty Next → Build → Assistant**, or from **A new screen, with the assistant** on the [Overview](../studio.md#overview) page. It opens as a window over the current page — there is no separate route — and closes only with its **×** or **Cancel**: a click outside or Esc does not wipe a half-built screen.
:::

:::note[Not the AI chat]
This wizard is **deterministic** — it reads your schema and generates standard SQL and config; it does not call a model. It is a different feature from the [AI Assistant](../ai-assistant.md) chat drawer, which proposes the same kinds of artifacts conversationally. Use the wizard when you already know the tables; use the AI chat when you want to explore.
:::

---

## The steps \{#steps\}

<svg viewBox="0 0 1320 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sca-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sca-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sca-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="374" rx="14" fill="url(#sca-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontFamily="system-ui, sans-serif">✦</text>
  <text x="258" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Creation Assistant</text>
  <rect x="1052" y="32" width="28" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1066.0" y="47.5" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="1018" y="32" width="28" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032.0" y="47.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="948" y="32" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="979.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">A module</text>
  <rect x="880" y="32" width="62" height="24" rx="5" fill="url(#sca-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="911.0" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen</text>
  <line x1="221" y1="68" x2="1099" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="82" width="76" height="24" rx="12" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="266" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Target</text>
  <text x="306" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="322" y="82" width="114" height="24" rx="12" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="335" cy="94" r="7" fill="#4a9eff"/>
  <text x="335" y="97" fill="#0f172a" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="348" y="97.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Tables &amp; joins</text>
  <text x="426" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="442" y="82" width="90" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="455" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="468" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Grid view</text>
  <text x="522" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="538" y="82" width="114" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="551" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="564" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Dialog columns</text>
  <text x="642" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="658" y="82" width="95" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="671" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <text x="684" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Dictionary</text>
  <text x="743" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="759" y="82" width="67" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="772" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">6</text>
  <text x="785" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Menu</text>
  <text x="816" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="832" y="82" width="119" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="845" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">7</text>
  <text x="858" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Review &amp; create</text>
  <text x="941" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="240" y="126" width="188" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="127" width="92" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="287.0" y="140.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Database table</text>
  <line x1="334" y1="131" x2="334" y2="143" stroke="#334155" strokeWidth="1"/>
  <text x="381.0" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Existing query</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START FROM A CATALOG PRESET</text>
  <rect x="240" y="178" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="298.5" y="192.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Browse catalog (12)</text>
  <text x="240" y="222" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE TABLE</text>
  <rect x="240" y="230" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="244.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">F0101</text>
  <rect x="378" y="230" width="702" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="388" y="244.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">F0101 — Address Book Master        ▾</text>
  <rect x="240" y="264" width="840" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="284" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">+ Add a joined table</text>
  <text x="254" y="304" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">LEFT JOIN F0111 ON F0101.AN8 = F0111.AN8 · + Add condition</text>
  <line x1="221" y1="348" x2="1099" y2="348" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="360" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="374.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="300.24" y="360" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="326.24" y="374.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">‹ back</text>
  <rect x="1028" y="360" width="52" height="22" rx="5" fill="url(#sca-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1054.0" y="374.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Next ›</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seven steps</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">done ones are ticked</text>
  <line x1="200" y1="127.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two sources</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables + joins, or a query</text>
  <line x1="200" y1="187.0" x2="240" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base table</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filter, then pick</text>
  <line x1="200" y1="253.0" x2="240" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Catalog presets</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">joins wired in one click</text>
  <line x1="1120" y1="127.0" x2="390" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Joined tables</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">join type and conditions</text>
  <line x1="1120" y1="207.0" x2="1080" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Next</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enabled once the step is complete</text>
  <line x1="1120" y1="307.0" x2="1080" y2="371" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A screen or a module</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">two modes, one assistant</text>
  <line x1="1120" y1="57.0" x2="911.0" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
</svg>

The header switches between **A screen** (the seven steps below) and **A module** ([a whole module](#module)); **↺** resets the assistant. The steps are shown as a row at the top — a step done is ticked, and **Next** is enabled once the current step is complete; **back** returns to the previous one.

### 1 · Target
The **Source connector** (a SQL connector) and the **App (for the screen + menu)** — pick an application or type a new one.

### 2 · Tables & joins
Two mutually-exclusive choices:

- **Database table** — type a filter (e.g. `F009%`) to list the tables, pick the **Base table**, then optionally **Add a joined table** (choose the join type and the ON conditions). A [catalog preset](#catalog-presets) can pre-wire the joins in one click.
- **Existing query** — pick a read query already defined on the connector. The assistant introspects its columns instead of writing a new `SELECT`; the screen reads through the existing query.

Either way, the assistant introspects live columns so the next steps have real fields to work with.

### 3 · Grid view
The read query selects **every** column of the source; this step chooses which of those show up on the grid. The picked set is written as the screen's **default shared view** — a shared view a regular user can override with their own [saved views](../saved-views.md).

### 4 · Dialog columns *(optional)*
Skip it to ship a read-only screen — no dialog. Otherwise, a two-pane layout: **Available columns** on one side, your dialog **tabs** on the other. Assign columns into tabs, add / rename / remove tabs, and tick the **key** columns (the ones that identify a row): they drive the update / delete queries. Only the columns you place here appear in the edit dialog; the grid keeps whatever step 3 defined.

### 5 · Dictionary
The assistant scans the source and proposes the [dictionary entries](../dictionary.md) the screen needs. Entries that already exist are shown but greyed out and left untouched — only the **missing** ones are pre-ticked to be created. For each proposed entry you can set the **Label**, **Format**, **Rule**, **Rule value**, **Lookup params** (for a UDC / lookup rule) and **Default**. This is the same scan table used by the Dictionary editor.

### 6 · Menu
Tick **Add a menu item under this app** to place the screen in the navigation, then set the **Menu label**, an optional **Parent menu** and an **Icon**. Leave it unticked to create the screen without a menu entry — useful for a screen reached only as a nested tab.

### 7 · Review & create
Name the **Table / query name** and the **Screen label**, check the *Will create* summary and the generated read-SQL preview, then **Create screen**. On success the assistant reports *Screen … created and live.* and offers **Open the new screen** or **Create another**.

The scaffolded screen has **`auto_load` on**, and the workspace refreshes on close — the new screen opens right where the menu points, no manual browser reload needed.

---

## What it creates

In one validated pass — nothing is written unless every piece validates — the assistant adds:

| Artifact | What lands |
|---|---|
| **Connector query** | *Database table* — a new table on the source connector with a `get` query, plus `post` / `put` / `delete` write queries so the screen is editable. *Existing query* — nothing added on the connector; the screen reads through the query you picked. |
| **Dictionary entries** | The proposed entries you kept (existing ones are never overwritten). |
| **Screen + dialog** | The screen under the chosen app, its grid columns and — if step 4 was filled — an embedded dialog whose tabs hold the form fields. |
| **Default shared view** | The grid selection from step 3, saved as the screen's default shared view. |
| **Menu item** | Optional — a leaf under the app's menu pointing at the new screen. |

A table or screen whose name already exists is refused rather than overwritten. Because the assistant **snapshots the configuration before it writes**, the change is captured in [config history](../configuration/config-history.md) exactly like a manual edit, so you can review or roll it back.

---

## Catalog presets \{#catalog-presets\}

A **catalog preset** is a ready-made starting point: a base table plus pre-wired joins, so an operator skips browsing the schema. When the connector has presets, the *Tables & joins* step shows **Start from a catalog preset** and a **Browse catalog** button that opens a searchable list grouped by family. Selecting one introspects each table's columns and wires the joins — including resolving each join condition from its data item to the real physical column.

Presets are operator-managed files under the deployment's `presets/` directory; each file holds one or more `[[presets]]` entries with a base table and its joined tables. They are configuration, not code — add your own to seed the screens your team builds most often.

:::info[JDE-specific]
Liberty Apps ships ten JD Edwards catalogs, built from the Oracle E1 data models: **Address Book**, **General Accounting**, **Accounts Payable**, **Accounts Receivable**, **Inventory**, **Sales**, **Procurement**, **Manufacturing**, **Product Data Management** and **Product Costing**. **Procurement** covers purchase orders, receipts and voucher matches, receipt routing, the P.O. detail ledger, supplier / item relationships, the supplier price catalog, landed cost rules and order addresses, combined with the supplier, the item, the branch and the A/P voucher. The *full* presets of each area (the A/P ledger with supplier, address and company; the sales order with lines, customer, item and branch…) also give the [Data Explorer](../explorer/model.md#preset) a ready-made model.

The **Address Book** catalog (`config/presets/jdedwards/address_book.toml`): the `F0101` master left-joined to who's-who, phones, email, addresses, customer and supplier, plus each related table as its own base preset. The join conditions are written by **data item** (e.g. `F0101.AN8`); the assistant resolves the JDE prefix to the real column (`ABAN8`, `AIAN8`, …) so the joins auto-fill. A preset table can name a `query` (a `SELECT * FROM <table>` already defined on the connector) so the assistant reads its columns by describing that query — much faster on a large JDE catalog.
:::

---

## A whole module \{#module\}

**A module**, beside **A screen** in the assistant's header, builds an entire functional module in one go — several screens linked to each other, their menu folder and their dictionary entries — from a **module catalogue** shipped with the presets.

1. Pick a module in the list — searchable, grouped by area (*JDE · Address Book*); each shows its application, its connector and its number of screens.
2. The preview reads the live tables at once and shows the screen tree, the details indented under their parent: **Screen**, **Table**, **Prefix** (the column prefix found in the database), **Columns**, **Not in the table** (the items the table lacks), and the **State** of each — *new*, *exists* or *replace*. The **Menu** line shows the folder and its items the same way. A table or a key that cannot be found stops the module, with the reason.
3. **Apply the module** writes everything at once: *Applied: 7 queries, 7 screens, 4 menu entries, 244 dictionary entries.* The sidebar shows the new folder at once, and **Open the new screen** opens its first screen.

What a module creates:

- one **read query** per screen, ordered by the key, with the lookup tables joined for their descriptions;
- **read-only screens** whose dialog carries the module's tabs, and one tab per related table — a list for a one-to-many link, a form for a one-to-one link —, bound on the parent's key;
- the **filters** the module names, applied in the database;
- the **menu folder** of the module, with an item per main screen;
- the **dictionary entries** of the columns, from the source's data dictionary — labels, formats, value lists.

Applying is additive: what already exists is kept. **Replace the module's existing entries** rewrites the module's own queries, screens and menu items — a change made to them since is lost. When everything exists already, there is nothing to apply. The three files are validated before anything is written: everything is written, or nothing. Superusers only.

Liberty Apps ships the **Address Book** module for JD Edwards EnterpriseOne: the address book with its contacts, phones, e-mails and dated addresses, the customer and supplier masters — see [Nomajde → Address Book](../../nomajde/master-data/address-book.md).

## Column picker

The pickers of the Grid view and Dialog columns steps are built for wide sources — a full JDE `F0101` scan is not fun in a flat list. They share a few conventions:

- **Tree-style parent grouping.** Columns are grouped by their source table, and a parent menu row folds every column of that table underneath. Collapse the tables you don't need.
- **Searchable groups.** Each table group has its own filter — type the column name (or its label) to narrow just that group; other groups stay expanded as they were.
- **Per-table Add all.** Beside each table group, a button pushes every column of that table into the layout at once. Useful when you want a full parent table on the grid and only the child records in the dialog.
- **Full-height scroll panes.** Both panes take the modal's full height and scroll independently, so a picker with thousands of columns doesn't collapse the other side.
- **Loading spinners** while the schema is being read — visible on a slow catalog / slow query.

---

## Tips & best practices

- **Start from a preset when one fits.** It is the difference between picking one entry and hand-wiring five joins.
- **Mark your keys in the Dialog columns step.** The key columns drive the update / delete queries; a screen without keys is read-only by construction.
- **Reuse an existing query for read-only reports.** *Existing query* is the shortest path when the SQL already exists — no duplicate query gets added and the screen still gets a dialog / dictionary review.
- **Skip the Dialog columns step for read-only screens.** Leaving *Dialog columns* empty ships the screen without an edit dialog — useful for observability screens where nothing should be editable.
- **Review the dictionary, don't rubber-stamp it.** The scan infers the format from the column type (or, on JDE, from the data dictionary); a quick pass over the Format and Rule columns saves a round-trip later.
- **Open the screen and refine it in the Designer.** The assistant gets you a working screen fast; nested tabs, conditional fields and actions are then yours to add in the [Screen Designer](screens/overview.md).
