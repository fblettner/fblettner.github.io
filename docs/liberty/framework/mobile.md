---
title: Phone and tablet
description: "Liberty Next applications on a phone and a tablet: the menu as a drawer or an icon rail, a grid shown as a list of cards with a heading, full-screen dialogs, a record form in one column, the period picker and filters fitted to a narrow screen, the Card setting of a column — and the resizable menu on a desktop."
keywords: [Liberty Next, mobile, phone, tablet, responsive, grid as cards, drawer menu, icon rail, record form, card heading, resizable menu]
---

# Phone and tablet

An application built with Liberty Next is used as it is on a phone and a tablet: nothing is designed twice. The layout follows the width of the screen; on a desktop nothing changes for a mouse.

The builders — the Studio, the designers — and the authoring of an Explorer analysis remain desktop layouts.

---

## At a glance

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mob-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mob-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mob-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mob-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="480" y="24" width="240" height="424" rx="26" fill="url(#mob-g-card)" stroke="#334155" strokeWidth="2"/>
  <rect x="496" y="44" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="509.0" y="58.5" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">☰</text>
  <text x="532" y="59" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="496" y="76" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="90.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="652" y="76" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="678.0" y="90.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="494" y="110" width="212" height="132" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="132" fill="#4a9eff" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">1001</text>
  <text x="554" y="132" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="694" y="132" fill="#94a3b8" fontSize="13" textAnchor="end" fontFamily="system-ui, sans-serif">⋮</text>
  <text x="506" y="154" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">City</text>
  <text x="694" y="154" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Lyon</text>
  <text x="506" y="172" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Status</text>
  <text x="694" y="172" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Open</text>
  <text x="506" y="190" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Sales rep</text>
  <text x="694" y="190" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">M. Dupont</text>
  <text x="506" y="208" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Credit limit</text>
  <text x="694" y="208" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">50 000</text>
  <rect x="506" y="218" width="27" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="519.5" y="229.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+3</text>
  <rect x="494" y="252" width="212" height="132" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="274" fill="#4a9eff" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">1002</text>
  <text x="554" y="274" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="694" y="274" fill="#94a3b8" fontSize="13" textAnchor="end" fontFamily="system-ui, sans-serif">⋮</text>
  <text x="506" y="296" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">City</text>
  <text x="694" y="296" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Nantes</text>
  <text x="506" y="314" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Status</text>
  <text x="694" y="314" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">On hold</text>
  <text x="506" y="332" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Sales rep</text>
  <text x="694" y="332" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">A. Martin</text>
  <text x="506" y="350" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Credit limit</text>
  <text x="694" y="350" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 000</text>
  <rect x="506" y="360" width="27" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="519.5" y="371.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+3</text>
  <text x="600.0" y="412" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Showing 1–50 of 312</text>
  <rect x="550" y="420" width="26" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="563.0" y="432.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="624" y="420" width="26" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="637.0" y="432.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="250" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The menu is a drawer</text>
  <text x="260" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opened by this button</text>
  <line x1="440" y1="57.0" x2="496" y2="55" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The card's heading</text>
  <text x="260" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the first two columns</text>
  <line x1="440" y1="137.0" x2="506" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four lines</text>
  <text x="260" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label · value, blanks skipped</text>
  <line x1="440" y1="217.0" x2="506" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+N opens the rest</text>
  <text x="260" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the other columns</text>
  <line x1="440" y1="317.0" x2="506" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="70" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search and filters</text>
  <text x="770" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the filter panel, full width</text>
  <line x1="760" y1="87.0" x2="704" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions</text>
  <text x="770" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same menu as on a desktop</text>
  <line x1="760" y1="167.0" x2="698" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="390" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The pager</text>
  <text x="770" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counts the whole result</text>
  <line x1="760" y1="407.0" x2="670" y2="408" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
</svg>

---

## On a phone \{#phone\}

Below 768 px:

| Element | Becomes |
|---|---|
| **Menu** | A drawer, opened by the **Menu** button at the top left. |
| **Header** | Its buttons sit in a row of their own above the tabs, which scroll sideways. |
| **Dialogs** | Full screen. |
| **Grid** | A list: each row a card. |
| **Record form** | Its fields in one column; its tabs scroll. |
| **Filters, period** | Each filter takes the whole width; the period picker shows its presets as a row above one month. |

### A row as a card \{#card\}

A card has a **heading** — the first two columns, side by side and larger — then four lines *label · value*; **+N** opens the rest. A blank value gives no line, and a field shown as a code and its label is one line.

The search, the pager, the row menu (**Row actions**) and **Bulk edit** are there. Sorting and the header filters are wide-screen gestures: use the filter panel.

### Choosing what a card shows \{#card-setting\}

A column decides for itself with its **Card** setting, in the [column settings](./build/screens/columns.md):

| Value | Effect |
|---|---|
| `title` | The column is in the card's heading. |
| `show` | The column always has a line. |
| `hide` | The column is never shown on a card. |
| blank | The grid decides: the first two columns are the heading, the next four are lines, the others open with **+N**. |

---

## On a tablet \{#tablet\}

From 768 to 1100 px — a tablet in portrait — the menu is the **icon rail**, whatever the mode saved on a desktop: its button opens it over the page, a tap elsewhere folds it back. The header's buttons take their short form so that the tabs keep their room. Grids and forms keep their desktop layout.

---

## On a desktop: a menu as wide as needed \{#menu\}

The menu's right edge is dragged to resize it, from 180 to 460 px; the width is remembered on the browser, and a double click gives the default back. A menu entry's label takes two lines instead of being cut; its full text stays in the tooltip.

---

## Tips & best practices \{#tips\}

- Put the two columns that identify a row first — a number and a name — or set them to `title`: they are the heading of every card.
- Set to `hide` the technical columns a phone user never reads.
- Give long labels a short form in the dictionary: a card line is *label · value*.
- Check the screens meant for the field on a real phone before delivering.

---

## Related

- [Columns](./build/screens/columns.md) · [Bulk edit](./bulk-edit.md) · [Saved views](./saved-views.md)
