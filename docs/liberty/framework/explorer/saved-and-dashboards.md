---
title: Saved analyses and dashboards
description: "Keeping Data Explorer work in Liberty Next: saved analyses, private or shared, with an audience; dashboards of saved analyses with their own period and layout; Excel and PDF export; a menu entry for a shared analysis or dashboard (Add to a menu); the analyses and dashboards an app ships."
keywords: [Liberty Next, Data Explorer, saved analysis, shared, audience, dashboard, tiles, layout, export, Excel, PDF]
---

# Saved analyses and dashboards

The mode bar at the top of the explorer has two modes: **Analyses**, the editor with its saved analyses, and **Dashboards**, grids of saved analyses. Each mode shows how many items it holds.

---

## At a glance

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#exd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">CRM pipeline — deals, customers, activities</text>
  <rect x="930" y="31" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="45.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">crm · CRM pipeline     ▾</text>
  <rect x="892" y="31" width="30" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="907.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="848" y="31" width="39" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="766" y="31" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add to a menu</text>
  <rect x="717" y="31" width="44" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="739.0" y="45.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="663" y="31" width="49" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="687.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save as</text>
  <rect x="623" y="31" width="35" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="640.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="221" y1="72" x2="1099" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="84" width="198" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="287.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Analyses (3)</text>
  <rect x="335" y="85" width="102" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="386.0" y="99.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Dashboards (1)</text>
  <rect x="446" y="84" width="240" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="456" y="99.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sales_review  sales · Sales review   ▾</text>
  <rect x="694" y="84" width="87" height="24" rx="5" fill="url(#exd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="737.5" y="99.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Edit layout</text>
  <rect x="240" y="118" width="840" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="127" width="20" height="20" rx="6" fill="#c084fc" fillOpacity="0.15" stroke="#c084fc" strokeWidth="1"/>
  <text x="260" y="140.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="278" y="140.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="370" y="126" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ This quarter  ▾</text>
  <text x="490" y="141" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">applies to the analyses that have a period field</text>
  <rect x="880" y="126" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="890" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Add an analysis…                 ▾</text>
  <rect x="240.0" y="168" width="201.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="168" width="201.0" height="120" rx="8" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250.0" y="186" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264.0" y="186" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">KPI</text>
  <text x="415.0" y="186" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1 × S</text>
  <text x="429.0" y="186" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="340.5" y="238" fill="#e2e8f0" fontSize="17" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">192 000</text>
  <text x="340.5" y="256" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Sum of Amount</text>
  <path d="M429.0,289 L442.0,289 L442.0,276" fill="none" stroke="#4a9eff" strokeWidth="3"/>
  <rect x="453.0" y="168" width="414.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="463.0" y="186" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="477.0" y="186" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline by stage</text>
  <text x="841.0" y="186" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2 × M</text>
  <text x="855.0" y="186" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="497.9" y="244.4" width="74.8" height="23.6" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="535.3333333333334" y="279" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualified</text>
  <rect x="622.6" y="231.5" width="74.8" height="36.5" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="660.0" y="279" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposal</text>
  <rect x="747.3" y="212.0" width="74.8" height="56.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="784.6666666666667" y="279" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Negotiation</text>
  <rect x="879.0" y="168" width="201.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.0" y="186" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="903.0" y="186" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By country</text>
  <text x="1054.0" y="186" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1 × M</text>
  <text x="1068.0" y="186" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <circle cx="979.5" cy="238" r="30" fill="none" stroke="#4a9eff" strokeWidth="14"/>
  <path d="M979.5,208 A30,30 0 0,1 1008.0,228.7" fill="none" stroke="#c084fc" strokeWidth="14"/>
  <rect x="240.0" y="300" width="840.0" height="86" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="318" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264.0" y="318" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Won deals by country</text>
  <text x="1054.0" y="318" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4 × S</text>
  <text x="1068.0" y="318" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="254.0" y="342" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ France</text>
  <text x="1066.0" y="342" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">165 000</text>
  <text x="254.0" y="362" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">    Negotiation</text>
  <text x="1066.0" y="362" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">120 000</text>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dashboards mode</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grids of saved analyses</text>
  <line x1="200" y1="109.0" x2="378" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One period</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for the tiles with a period field</text>
  <line x1="200" y1="167.0" x2="370" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grip: drag to move</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">arrows move, Shift + arrows size</text>
  <line x1="200" y1="257.0" x2="252.0" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Corner: drag to size</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">1–4 columns · S / M / L</text>
  <line x1="200" y1="347.0" x2="442.0" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save, export, menu</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the whole dashboard</text>
  <line x1="1140" y1="47.0" x2="907.0" y2="31" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit layout</text>
  <text x="1150" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">move, size, add, remove</text>
  <line x1="1140" y1="101.0" x2="781" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="160" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add an analysis…</text>
  <text x="1150" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a tile per saved analysis</text>
  <line x1="1140" y1="177.0" x2="1070" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="250" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Size, remove</text>
  <text x="1150" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">columns × height · 🗑</text>
  <line x1="1140" y1="267.0" x2="1050.0" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
</svg>

---

## Saved analyses \{#analyses\}

In **Analyses** mode, the picker lists the saved analyses of the model, grouped by audience, the user's own ones flagged *mine*. *New analysis* starts an empty one.

| Button | Effect |
|---|---|
| **Save** | Saves the current analysis — rows, measures, filters, period, view, calculated fields. |
| **Save as** | Saves a copy under a new name, always private to start with. |
| **Delete** | Shown to the owner of the analysis and to superusers. |
| **Add to a menu** | Publishes the analysis as a menu entry — see [below](#menu). |
| **Excel**, **PDF** | Export — see [below](#export). |

The save window asks for:

| Field | Use |
|---|---|
| **Name** | The name in the picker. |
| **Description** | Free text. |
| **Audience** | A group for the picker: *finance*, *sales*, *it*… |
| **Visible to everyone** | Off: private to its owner. On: **shared** — every user who has access to the model sees it. |

Saving a shared analysis changes it for everyone; the window says so. **Save as** makes a personal copy instead.

---

## Dashboards \{#dashboards\}

In **Dashboards** mode, a dashboard is a grid of **tiles**, four columns wide, each running one saved analysis in its own view — table, pivot, chart, KPI or detail.

- **The period** at the top applies to every tile whose analysis has a period field; the others keep theirs.
- **Edit layout** lays the tiles out like a dashboard's cards: a tile moves by drag and drop — its grip, a bar showing where it lands — and is sized by its corner, in whole columns (1 to 4) and the closest of the three heights (`2 × M`). The grip takes the keyboard too: arrows move, Shift + arrows size. **Add an analysis…** adds a tile.
- **The pencil** of a tile opens its analysis in the editor; a drill from a tile does the same, with the clicked values as filters.
- In view mode a tile shows its title and its pencil; in **Edit layout**, its grip, its size (`1 × S`) and a bin to remove it.
- **Save**, **Save as**, **Delete**, **Add to a menu**, **Excel** and **PDF**, in the page header, work as for analyses. A tile whose analysis was deleted says so.

---

## Add to a menu \{#menu\}

On a saved analysis or dashboard, **Add to a menu** publishes it as an entry of an application's menu. The button is shown to superusers only: the menus are configuration. The window *Add “…” to a menu* asks for:

| Field | Use |
|---|---|
| **Menu of** | The application whose menu receives the entry. |
| **Folder** | A folder of that menu; *At the top of the menu* when none is picked. |
| **Label in the menu** | The entry's label — the analysis's name to start with. |

**Add to the menu** adds the entry. One click on it opens the explorer on that analysis — its result at once, the definition one click away — or on that dashboard. The entry is shown to the users who may use the model. A private analysis cannot be published: the window asks to share it first (**Save**, *Visible to everyone*), and **Add to the menu** stays disabled until then. An entry whose analysis or dashboard was deleted, or is no longer shared, says so when it is opened.

---

## Export \{#export\}

**Excel** and **PDF** export the current analysis, or the whole dashboard (one section per tile):

| | Excel | PDF |
|---|---|---|
| Layout | One sheet per section, bold headers and subtotals, period and filters as a note. | A synthesis: a cover with the application, the period, the date, the author and the version, then the sections one after the other, in the install's PDF branding. |
| A pivot | Flattened, with its subtotals. | A table with bold group rows. |
| A chart | Its data table. | The chart drawn — bars (grouped, stacked or horizontal), line, pie or donut — in print colours, with a legend, compact axis ticks and the values on the bars. |
| KPI | A row of totals. | Cards. |
| Detail | Its rows. | A table. |

Numbers in the PDF follow the reader's language (`1 234,5` / `1,234.5`). The same document is produced when a Nomaflow job renders the analysis on a schedule — see [Steps → Report](../../nomaflow/steps.md#report). Each section holds up to 3,000 rows. The pivot view also has its own Excel button, which exports the pivot as shown. PDF branding is set in [Liberty Next → Administer → App](../build/settings-app.md).

---

## Analyses shipped with an app \{#bundled\}

An app can ship ready-made analyses and dashboards with its model. They appear as **shared** items when the app is installed, and are updated with new versions of the app — until someone saves changes to them, after which the local version is kept. A shipped item that a user deleted is not installed again.

---

## What's next

- [Analyse data](./analysis.md) — build what you save.
- [Data Explorer](./overview.md) — the whole picture.
