---
title: Screen Creation Assistant
description: "A guided wizard that turns a set of database tables — or an existing connector query — into a working screen, dialog and menu item in one pass. Pick the source, choose the grid columns (default shared view), optionally lay dialog columns into tabs, review the dictionary, place a menu entry, create."
keywords: [Liberty Framework, screen assistant, screen builder, scaffold, wizard, tables, joins, query-backed screen, grid view, dialog columns, dictionary, menu, catalog presets, JD Edwards Address Book, superuser]
---

# Screen Creation Assistant

The **Screen Creation Assistant** is a guided wizard that builds a complete screen in a single pass. Two starting points are supported:

- **From tables** — a base table and any joined tables. The assistant writes a fresh `SELECT` on the connector.
- **From an existing query** — a read-only reuse of a connector query already in place. The assistant reads its columns and builds the screen on top; no duplicate query is generated. A catalog preset that names a query goes through the same path.

Once the source is picked, you choose which columns the grid shows (that becomes the screen's default shared view), optionally arrange columns into dialog tabs for editing, review the dictionary entries and drop a menu item — the assistant writes the read query (when from tables), the screen, its dialog, the default view and the menu entry together.

It is the fast path to a working screen: what you would otherwise assemble by hand across the Connectors, Dictionary, Screens and Menus pages, the assistant produces in one reviewed step.

:::info[Superuser tool]
The assistant is a **superuser** tool. It appears in the sidebar, just above *Monitoring*, only for superusers. It opens as a modal over your current page — there is no separate route.
:::

:::note[Not the AI chat]
This wizard is **deterministic** — it reads your schema and generates standard SQL and config; it does not call a model. It is a different feature from the [AI Assistant](../ai-assistant.md) chat drawer, which proposes the same kinds of artifacts conversationally. Use the wizard when you already know the tables; use the AI chat when you want to explore.
:::

---

## The pass

<svg viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sa-pill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b"/><stop offset="100%" stopColor="#0f172a"/></linearGradient>
    <marker id="sa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
  </defs>
  <g fontFamily="system-ui, sans-serif">
    <rect x="10" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#4a9eff" strokeWidth="1.4"/>
    <text x="85" y="73" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle">1 · Source</text>
    <text x="85" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">tables + joins or query</text>
    <line x1="162" y1="75" x2="184" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="188" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="263" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">2 · Grid view</text>
    <text x="263" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">default shared view</text>
    <line x1="340" y1="75" x2="362" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="366" y="50" width="150" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="3 3"/>
    <text x="441" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">3 · Dialog columns</text>
    <text x="441" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">optional — into tabs</text>
    <line x1="518" y1="75" x2="540" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="544" y="50" width="130" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="609" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">4 · Dictionary</text>
    <text x="609" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">review proposals</text>
    <line x1="676" y1="75" x2="698" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="702" y="50" width="120" height="50" rx="10" fill="url(#sa-pill)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="762" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">5 · Menu</text>
    <text x="762" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">place the entry</text>
    <line x1="824" y1="75" x2="846" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow)"/>

    <rect x="850" y="50" width="140" height="50" rx="10" fill="url(#sa-pill)" stroke="rgba(50,215,75,0.5)" strokeWidth="1.4"/>
    <text x="920" y="73" fill="#4ade80" fontSize="11" fontWeight="700" textAnchor="middle">6 · Review &amp; create</text>
    <text x="920" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">one validated write</text>
  </g>
</svg>

Before the steps above, a short **Target** step asks for the **Source connector** (a SQL connector) and the **App** the new screen and menu belong to. From there the assistant walks you through:

### 1 · Source
Two mutually-exclusive choices:

- **From tables** — pick a **Base table** from the connector, then optionally add a **joined table** (choose the join type and the ON conditions). A [catalog preset](#catalog-presets) can pre-wire the joins in one click.
- **From an existing query** — pick a read query already defined on the connector. The assistant introspects its columns instead of writing a new `SELECT`; the screen reads through the existing query.

Either way, the assistant introspects live columns so the next steps have real fields to work with.

### 2 · Grid view
The read query selects **every** column of the source; this step chooses which of those show up on the grid. The picked set is written as the screen's **default shared view** — a shared view a regular user can override with their own [saved views](../saved-views.md). Also mark the **key** columns (the ones that identify a row): they drive the update / delete queries, and a screen without keys is read-only by construction.

### 3 · Dialog columns *(optional)*
Skip it to ship a read-only screen — no dialog. Otherwise, a two-pane layout: **Available columns** on one side, your dialog **tabs** on the other. Assign columns into tabs, add / rename / remove tabs. Only the columns you place here appear in the edit dialog; the grid keeps whatever step 2 defined.

### 4 · Dictionary
The assistant scans the source and proposes the [dictionary entries](../dictionary.md) the screen needs. Entries that already exist are shown but greyed out and left untouched — only the **missing** ones are pre-ticked to be created. For each proposed entry you can set the **Label**, **Format**, **Rule**, **Rule value**, **Lookup params** (for a UDC / lookup rule) and **Default**. This is the same scan table used by the Dictionary editor.

### 5 · Menu
Tick **Add a menu item under this app** to place the screen in the navigation, then set the **Menu label**, an optional **Parent menu** and an **Icon**. Leave it unticked to create the screen without a menu entry — useful for a screen reached only as a nested tab.

### 6 · Review & create
Name the **Table / query** and the **Screen label**, check the *Will create* summary and the generated read-SQL preview, then **Create screen**. On success the assistant reports the screen is created and live, and offers to open it.

The scaffolded screen has **`auto_load` on**, and the workspace refreshes on close — the new screen opens right where the menu points, no manual browser reload needed.

---

## What it creates

In one validated pass — nothing is written unless every piece validates — the assistant adds:

| Artifact | What lands |
|---|---|
| **Connector query** | *From tables* — a new table on the source connector with a `get` query, plus `post` / `put` / `delete` write queries so the screen is editable. *From an existing query* — nothing added on the connector; the screen reads through the query you picked. |
| **Dictionary entries** | The proposed entries you kept (existing ones are never overwritten). |
| **Screen + dialog** | The screen under the chosen app, its grid columns and — if step 3 was filled — an embedded dialog whose tabs hold the form fields. |
| **Default shared view** | The grid selection from step 2, saved as the screen's default shared view. |
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

## Column picker

The pickers on steps 2 and 3 are built for wide sources — a full JDE `F0101` scan is not fun in a flat list. They share a few conventions:

- **Tree-style parent grouping.** Columns are grouped by their source table, and a parent menu row folds every column of that table underneath. Collapse the tables you don't need.
- **Searchable groups.** Each table group has its own filter — type the column name (or its label) to narrow just that group; other groups stay expanded as they were.
- **Per-table Add all.** Beside each table group, a button pushes every column of that table into the layout at once. Useful when you want a full parent table on the grid and only the child records in the dialog.
- **Full-height scroll panes.** Both panes take the modal's full height and scroll independently, so a picker with thousands of columns doesn't collapse the other side.
- **Loading spinners** while the schema is being read — visible on a slow catalog / slow query.

---

## Tips & best practices

- **Start from a preset when one fits.** It is the difference between picking one entry and hand-wiring five joins.
- **Mark your keys in step 2.** The key columns drive the update / delete queries; a screen without keys is read-only by construction.
- **Reuse an existing query for read-only reports.** *From an existing query* is the shortest path when the SQL already exists — no duplicate query gets added and the screen still gets a dialog / dictionary review.
- **Skip step 3 for read-only screens.** Leaving *Dialog columns* empty ships the screen without an edit dialog — useful for observability screens where nothing should be editable.
- **Review the dictionary, don't rubber-stamp it.** The scan infers the format from the column type (or, on JDE, from the data dictionary); a quick pass over the Format and Rule columns saves a round-trip later.
- **Open the screen and refine it in the Designer.** The assistant gets you a working screen fast; nested tabs, conditional fields and actions are then yours to add in the [Screen Designer](screens/overview.md).
