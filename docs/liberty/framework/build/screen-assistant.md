---
title: Screen Creation Assistant
description: "A guided wizard that turns a set of database tables into a working screen, dialog and menu item in one pass — pick tables and joins, lay columns into tabs, review the dictionary, place a menu entry, create."
keywords: [Liberty Framework, screen assistant, screen builder, scaffold, wizard, tables, joins, dictionary, menu, catalog presets, JD Edwards Address Book, superuser]
---

# Screen Creation Assistant

The **Screen Creation Assistant** is a guided wizard that builds a complete screen from database tables in a single pass. You pick a base table (and any joined tables), arrange the columns into dialog tabs, review the dictionary entries, optionally place a menu item — and the assistant writes the connector query, the screen, its dialog and the menu entry together.

It is the fast path to a working screen: what you would otherwise assemble by hand across the Connectors, Dictionary, Screens and Menus pages, the assistant produces in one reviewed step.

:::info[Superuser tool]
The assistant is a **superuser** tool. It appears in the sidebar, just above *Monitoring*, only for superusers. It opens as a modal over your current page — there is no separate route.
:::

:::note[Not the AI chat]
This wizard is **deterministic** — it reads your schema and generates standard SQL and config; it does not call a model. It is a different feature from the [AI Assistant](../ai-assistant.md) chat drawer, which proposes the same kinds of artifacts conversationally. Use the wizard when you already know the tables; use the AI chat when you want to explore.
:::

---

## The five-stop pass

<svg viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sa-pill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b"/><stop offset="100%" stopColor="#0f172a"/></linearGradient>
    <marker id="sa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
  </defs>
  <g fontFamily="system-ui, sans-serif">
    <rect x="20" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#4a9eff" strokeWidth="1.4"/>
    <text x="95" y="73" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle">1 · Tables &amp; joins</text>
    <text x="95" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">base table + joins</text>
    <line x1="172" y1="75" x2="200" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="204" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="279" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">2 · Columns → tabs</text>
    <text x="279" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">lay out the dialog</text>
    <line x1="356" y1="75" x2="384" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="388" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="463" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">3 · Dictionary</text>
    <text x="463" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">review proposals</text>
    <line x1="540" y1="75" x2="568" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="572" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="647" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">4 · Menu</text>
    <text x="647" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">place the entry</text>
    <line x1="724" y1="75" x2="752" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="756" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="rgba(50,215,75,0.5)" strokeWidth="1.4"/>
    <text x="831" y="73" fill="#4ade80" fontSize="11" fontWeight="700" textAnchor="middle">5 · Review &amp; create</text>
    <text x="831" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">one validated write</text>
  </g>
</svg>

Before the five stops above, a short **Target** step asks for the **Source connector** (a SQL connector) and the **App** the new screen and menu belong to. From there the assistant walks you through:

### 1 · Tables & joins
Pick a **Base table** from the connector. Optionally **add a joined table** — choose the join type and the ON conditions — or start from a [catalog preset](#catalog-presets) that pre-wires the joins for you. The assistant introspects each table's live columns so the next step has real fields to work with.

### 2 · Columns → tabs
A two-pane layout: **Available columns** on one side, your dialog **tabs** on the other. Assign columns into tabs, add / rename / remove tabs, and mark the **key** columns (the ones that identify a row). The grid columns and the dialog form are both derived from these choices.

### 3 · Dictionary
The assistant scans the base table and proposes the [dictionary entries](../dictionary.md) the screen needs. Entries that already exist are shown but greyed out and left untouched — only the **missing** ones are pre-ticked to be created. For each proposed entry you can set the **Label**, **Format**, **Rule**, **Rule value**, **Lookup params** (for a UDC / lookup rule) and **Default**. This is the same scan table used by the Dictionary editor.

### 4 · Menu
Tick **Add a menu item under this app** to place the screen in the navigation, then set the **Menu label**, an optional **Parent menu** and an **Icon**. Leave it unticked to create the screen without a menu entry — useful for a screen reached only as a nested tab.

### 5 · Review & create
Name the **Table / query** and the **Screen label**, check the *Will create* summary and the generated read-SQL preview, then **Create screen**. On success the assistant reports the screen is created and live, and offers to open it.

---

## What it creates

In one validated pass — nothing is written unless every piece validates — the assistant adds:

| Artifact | What lands |
|---|---|
| **Connector query** | A new table on the source connector with a `get` query, plus `post` / `put` / `delete` write queries so the screen is editable. |
| **Dictionary entries** | The proposed entries you kept (existing ones are never overwritten). |
| **Screen + dialog** | The screen under the chosen app, with its grid columns and an embedded dialog whose tabs hold the form fields. |
| **Menu item** | Optional — a leaf under the app's menu pointing at the new screen. |

A table or screen whose name already exists is refused rather than overwritten. Because the assistant **snapshots the configuration before it writes**, the change is captured in [config history](../configuration/config-history.md) exactly like a manual edit, so you can review or roll it back.

---

## Catalog presets

A **catalog preset** is a ready-made starting point: a base table plus pre-wired joins, so an operator skips browsing the schema. When the connector has presets, the *Tables & joins* step shows **Start from a catalog preset** and a **Browse catalog** button that opens a searchable list grouped by family. Selecting one introspects each table's columns and wires the joins — including resolving each join condition from its data item to the real physical column.

Presets are operator-managed files under the deployment's `presets/` directory; each file holds one or more `[[presets]]` entries with a base table and its joined tables. They are configuration, not code — add your own to seed the screens your team builds most often.

:::info[JDE-specific]
Liberty Apps ships a **JD Edwards Address Book** catalog (`config/presets/jdedwards/address_book.toml`): the `F0101` master left-joined to who's-who, phones, email, addresses, customer and supplier, plus each related table as its own base preset. The join conditions are written by **data item** (e.g. `F0101.AN8`); the assistant resolves the JDE prefix to the real column (`ABAN8`, `AIAN8`, …) so the joins auto-fill. A preset table can name a `query` (a `SELECT * FROM <table>` already defined on the connector) so the assistant reads its columns by describing that query — much faster on a large JDE catalog.
:::

---

## Tips & best practices

- **Start from a preset when one fits.** It is the difference between picking one entry and hand-wiring five joins.
- **Mark your keys in step 2.** The key columns drive the update / delete queries; a screen without keys is read-only by construction.
- **Review the dictionary, don't rubber-stamp it.** The scan infers the format from the column type (or, on JDE, from the data dictionary); a quick pass over the Format and Rule columns saves a round-trip later.
- **Open the screen and refine it in the Designer.** The assistant gets you a working screen fast; nested tabs, conditional fields and actions are then yours to add in the [Screen Designer](screens/overview.md).
