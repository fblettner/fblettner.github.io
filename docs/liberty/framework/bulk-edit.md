---
title: Bulk edit
description: "Edit a screen's rows directly in the grid — change cells, add, clone, copy, paste and delete rows, paste from Excel or import a file — then write every change with one Save, the row hooks included."
keywords: [Liberty Next, bulk edit, grid, inline edit, add row, clone row, copy, paste, paste from Excel, delete selected, import, SEQUENCE, on_duplicate, editable]
---

# Bulk edit

**Bulk edit** turns a screen's grid into an editor: cells are changed in place, rows are added, cloned, copied, pasted or marked for deletion, and a single **Save** writes everything — through the same queries as the dialog, with the same row hooks.

---

## At a glance

<svg viewBox="0 0 1320 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bke-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bke-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bke-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bke-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="346" rx="14" fill="url(#bke-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="332.15" y="35" width="40" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="352.15" y="45.8" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <line x1="220" y1="70" x2="1100" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238" y="82" width="56" height="22" rx="5" fill="url(#bke-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="96.5" fill="#e2e8f0" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save (3)</text>
  <rect x="299" y="82" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="327.0" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="360" y="82" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="390.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="426" y="82" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="459.0" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Copy (1)</text>
  <rect x="497" y="82" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="532.0" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Paste (1)</text>
  <rect x="572" y="82" width="109" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="626.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete selected (1)</text>
  <rect x="690" y="82" width="322" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="699" y="96.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="1020" y="82" width="62" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1051.0" y="96.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="238" y="112" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="263.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="294" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="324.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="360" y="112" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="385.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞ Group</text>
  <rect x="416" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="446.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="482" y="112" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="515.0" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Export ▾</text>
  <rect x="238" y="146" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="340" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="430" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CUSTOMER NAME</text>
  <text x="650" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="760" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="910" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPANY</text>
  <rect x="247" y="154" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <rect x="238" y="176" width="844" height="32" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="187" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="196" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="286" y="183" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="183" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="336" y="182" width="76" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="426" y="182" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="435" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="646" y="182" width="96" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="756" y="182" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Active</text>
  <text x="880" y="195.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="906" y="182" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="915" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">00001</text>
  <rect x="238" y="212" width="844" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="223" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="232" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="286" y="219" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="231.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="219" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="231.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="340" y="232" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1002</text>
  <rect x="426" y="218" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="435" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="646" y="218" width="96" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="756" y="218" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Prospect</text>
  <text x="880" y="231.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="906" y="218" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="915" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">00001</text>
  <rect x="238" y="248" width="844" height="32" rx="4" fill="rgba(255,69,58,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="259" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="268" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <rect x="286" y="255" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="267.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="255" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="267.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="340" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">1003</text>
  <line x1="340" y1="265" x2="362.32" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="430" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Gamma SA</text>
  <line x1="430" y1="265" x2="474.64" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="650" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">CH</text>
  <line x1="650" y1="265" x2="661.16" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="760" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Inactive</text>
  <line x1="760" y1="265" x2="804.64" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="910" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">00002</text>
  <line x1="910" y1="265" x2="937.9" y2="265" stroke="#64748b" strokeWidth="1"/>
  <rect x="238" y="284" width="844" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="295" width="10" height="10" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="286" y="291" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="303.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="291" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="303.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="340" y="304" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1004</text>
  <rect x="426" y="290" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="435" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Delta GmbH</text>
  <rect x="646" y="290" width="96" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">DE</text>
  <rect x="756" y="290" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Active</text>
  <text x="880" y="303.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="906" y="290" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="915" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">00001</text>
  <rect x="238" y="320" width="844" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="331" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="340" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="340" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1005</text>
  <text x="430" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Epsilon SpA</text>
  <text x="650" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">IT</text>
  <text x="760" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Closed</text>
  <text x="910" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00002</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bulk edit toolbar</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Save writes every change</text>
  <line x1="200" y1="87.0" x2="238" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="20" y="175" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="190" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New row</text>
  <text x="30" y="203" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">added at the top</text>
  <line x1="200" y1="192.0" x2="268" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="20" y="247" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="262" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marked for deletion</text>
  <text x="30" y="275" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deleted on Save; ✕ undoes</text>
  <line x1="200" y1="264.0" x2="268" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="20" y="326" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only row</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">editable_when excludes it</text>
  <line x1="200" y1="343.0" x2="268" y2="336" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1120" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copy · Paste · Delete</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">act on the ticked rows</text>
  <line x1="1120" y1="87.0" x2="661" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1120" y="211" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="226" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edited row</text>
  <text x="1130" y="239" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cells edited in place</text>
  <line x1="1120" y1="228.0" x2="1070" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1120" y="283" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="298" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clone row ⧉</text>
  <text x="1130" y="311" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a sequence key is left empty</text>
  <line x1="1120" y1="300.0" x2="295" y2="295" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
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
