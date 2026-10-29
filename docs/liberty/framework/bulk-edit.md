---
title: Bulk edit
description: "Edit a screen's rows directly in the grid — change cells, add, clone, copy, paste and delete rows, paste from Excel or import a file — then write every change with one Save, the row hooks included."
keywords: [Liberty Next, bulk edit, grid, inline edit, add row, clone row, copy, paste, paste from Excel, delete selected, import, SEQUENCE, on_duplicate, editable]
---

# Bulk edit

**Bulk edit** turns a screen's grid into an editor: cells are changed in place, rows are added, cloned, copied, pasted or marked for deletion, and a single **Save** writes everything — through the same queries as the dialog, with the same row hooks.

---

## At a glance

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bke-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bke-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bke-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bke-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="256" rx="14" fill="url(#bke-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="240" y="62" width="62" height="22" rx="5" fill="url(#bke-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="271.0" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save (3)</text>
  <rect x="308" y="62" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="334.0" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="366" y="62" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="394.5" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Add row</text>
  <rect x="429" y="62" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="455.0" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="487" y="62" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="518.0" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy (1)</text>
  <rect x="555" y="62" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="588.5" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Paste (1)</text>
  <rect x="628" y="62" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="686.5" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete selected (1)</text>
  <rect x="240" y="102" width="720" height="24" fill="rgba(255,255,255,0.03)"/>
  <text x="248" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif"></text>
  <text x="348" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">ID</text>
  <text x="418" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Name</text>
  <text x="638" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Country</text>
  <text x="768" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Status</text>
  <line x1="240" y1="126" x2="960" y2="126" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="126" width="720" height="30" fill="rgba(50,215,75,0.05)"/>
  <rect x="250" y="136" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="280" y="145" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="302" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="145" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="344" y="131" width="58" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="354" y="144.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <rect x="414" y="131" width="208" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="634" y="131" width="118" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="644" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="764" y="131" width="188" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="774" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Active</text>
  <line x1="240" y1="156" x2="960" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="166" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="280" y="175" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <text x="302" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="175" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="344" y="161" width="58" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="354" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1002</text>
  <rect x="414" y="161" width="208" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="634" y="161" width="118" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="644" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="764" y="161" width="188" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="774" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Prospect</text>
  <line x1="240" y1="186" x2="960" y2="186" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="186" width="720" height="30" fill="rgba(255,69,58,0.05)"/>
  <rect x="250" y="196" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="280" y="205" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <text x="302" y="205" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="205" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="348" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">1003</text>
  <line x1="348" y1="201.5" x2="368.16" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <text x="418" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Gamma Ltd</text>
  <line x1="418" y1="201.5" x2="463.36" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <text x="638" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">UK</text>
  <line x1="638" y1="201.5" x2="648.08" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <text x="768" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Inactive</text>
  <line x1="768" y1="201.5" x2="808.32" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <line x1="240" y1="216" x2="960" y2="216" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="226" width="10" height="10" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M252.2,231 L254.4,233.3 L258,228.6" fill="none" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="302" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="235" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="348" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">1001</text>
  <text x="418" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="638" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">FR</text>
  <text x="768" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Active</text>
  <line x1="240" y1="246" x2="960" y2="246" stroke="#1f2937" strokeWidth="1"/>
  <rect x="10" y="56" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bulk edit</text>
  <text x="20" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Save writes every change</text>
  <line x1="210" y1="73.0" x2="240" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="10" y="136" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clone row</text>
  <text x="20" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a sequence key left empty</text>
  <line x1="210" y1="153.0" x2="302" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="10" y="216" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="231" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ticked rows</text>
  <text x="20" y="244" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy, paste, delete</text>
  <line x1="210" y1="233.0" x2="255" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1000" y="112" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New row</text>
  <text x="1010" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">added at the top</text>
  <line x1="1000" y1="129.0" x2="960" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1000" y="162" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="177" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edited row</text>
  <text x="1010" y="190" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cells edited in place</text>
  <line x1="1000" y1="179.0" x2="960" y2="171" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1000" y="212" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="227" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marked for deletion</text>
  <text x="1010" y="240" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deleted on Save; × undoes</text>
  <line x1="1000" y1="229.0" x2="960" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
</svg>

---

## Opening bulk edit \{#open\}

The grid's toolbar shows **Bulk edit** when the screen has an update or an insert query — **Edit** when the screen has no dialog. The button is hidden on a screen that is [read-only](./build/screens/overview.md) or whose `editable` setting is off; the server's permissions still apply on top.

In bulk edit, the toolbar becomes:

| Button | Effect |
|---|---|
| **Save (n)** | Writes the pending changes; *n* counts the edited, new and deleted rows. |
| **Cancel** | Drops every pending change and leaves bulk edit. |
| **Add row** | Adds an empty row at the top of the grid, filled with the columns' default values. |
| **Import** | Reads an Excel or CSV file into the grid — see [Import a file](#import). Shown when the screen allows imports. |
| **Copy (n)** | Copies the ticked rows. |
| **Paste (n)** | Adds the copied rows as new rows. |
| **Delete selected (n)** | Marks the ticked rows for deletion; a ticked new row is simply removed. |

**Add row**, **Paste**, **Clone row** and **Import** need an insert query and are hidden when the screen disables adding. A refresh of the grid ends bulk edit without saving; the copied rows stay available.

## Rows and cells \{#rows\}

Each row starts with a check box, a marker and two buttons:

| Element | Meaning |
|---|---|
| **+** | A new row, not written yet. |
| **●** | An existing row with edited cells. |
| **−** | A row marked for deletion. |
| **Clone row** | Adds a copy of the row at the top — see [Clone, copy and paste](#clone). |
| **×** | Marks the row for deletion (a second click undoes it); on a new row, removes it. |
| Padlock | The row is read-only: the screen's `editable_when` rule excludes it, so its cells stay plain and it cannot be deleted. |

A cell stays read-only when its column is disabled — `disabled`, or `disabled_when` for the row's values —, or locked for that kind of row: `disable_on_add` on a new row, `disable_on_edit` on an existing one. See [Conditional fields](./build/screens/conditional-fields.md).

## Clone, copy and paste \{#clone\}

**Clone row**, and **Paste** of copied rows, add new rows that keep every value of the source, keys included — copy a row, then change the one value that differs. The only exception is a column filled by a `SEQUENCE` rule: it is left empty, and the insert takes a new number from the sequence; the related one-to-one tables of the screen follow that new key.

A row born from a clone or a paste is a duplicate: on Save it fires the screen's `on_duplicate` hook, with the source row's values under `SOURCE_<column>`, exactly as the dialog's **Duplicate** does — see [Actions and lifecycle](./build/screens/actions-and-lifecycle.md).

## Paste from Excel \{#paste-excel\}

Cells copied from Excel (or any tab-separated text) and pasted into the grid — with no cell being edited — become new rows:

- when the first pasted line matches at least two column headers, it is read as a header line and each value goes to the column of that name, whatever the order;
- otherwise the values follow the order of the visible columns, as an export of the grid lays them out.

A column with a lookup fills its dependent columns from the pasted code, as when the code is picked in the list.

## Import a file \{#import\}

**Import** in bulk edit reads an Excel or CSV file whose first line holds the column headers. A line whose key columns match a row already in the grid becomes an edit of that row; the other lines become new rows. Nothing is written until **Save**, so the result can be reviewed and corrected first.

Outside bulk edit, the toolbar's **Import** opens the Import dialog instead, which checks every line against the screen's rules before saving — see [Bulk import](./cookbook/bulk-import.md).

## Save \{#save\}

**Save** writes the rows in one pass:

- each edited row through the update query, each new row through the insert query, each row marked for deletion through the delete query — together with the columns stored in the screen's related one-to-one tables;
- a column whose default is forced by a condition (`default_when`) is written with that value even when its cell was not edited;
- then, row by row, the hooks: `on_update`, `on_insert` (or `on_duplicate` for a cloned or pasted row) and `on_delete`.

When a write or a hook fails, its message shows and bulk edit stays open. After a successful save, bulk edit closes and the grid reloads.
