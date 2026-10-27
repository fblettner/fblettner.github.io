---
title: Saved analyses and dashboards
description: "Keeping Data Explorer work in Liberty Next: saved analyses, private or shared, with an audience; dashboards of saved analyses with their own period and layout; Excel and PDF export; the analyses and dashboards an app ships."
keywords: [Liberty Next, Data Explorer, saved analysis, shared, audience, dashboard, tiles, layout, export, Excel, PDF]
---

# Saved analyses and dashboards

The mode bar at the top of the explorer has two modes: **Analyses**, the editor with its saved analyses, and **Dashboards**, grids of saved analyses. Each mode shows how many items it holds.

---

## At a glance

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="386" rx="14" fill="url(#exd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="185" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="283.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (3)</text>
  <rect x="328" y="31" width="96" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="376.0" y="45.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards (1)</text>
  <rect x="435" y="31" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="445" y="45.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales review ▾</text>
  <rect x="603" y="31" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="648.5" y="45.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Edit layout</text>
  <rect x="700" y="31" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="721.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="749" y="31" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.0" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="803" y="31" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <line x1="240" y1="64" x2="960" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">▣</text>
  <rect x="258" y="74" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="268" y="88.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">This quarter ▾</text>
  <text x="390" y="88" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">applies to the analyses that have a period field</text>
  <rect x="780" y="74" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="88.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Add an analysis… ▾</text>
  <rect x="240.0" y="104" width="355.0" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="122" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline by stage</text>
  <text x="585.0" y="122" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 2  ⤡ m  ✕</text>
  <rect x="280.0" y="198" width="60" height="40" rx="2" fill="#4a9eff" opacity="0.85"/>
  <text x="310.0" y="250" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualified</text>
  <rect x="390.0" y="178" width="60" height="60" rx="2" fill="#4a9eff" opacity="0.85"/>
  <text x="420.0" y="250" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposal</text>
  <rect x="500.0" y="138" width="60" height="100" rx="2" fill="#4a9eff" opacity="0.85"/>
  <text x="530.0" y="250" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Negotiation</text>
  <rect x="605.0" y="104" width="172.5" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="615.0" y="122" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">KPI</text>
  <text x="767.5" y="122" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 1  ⤡ m  ✕</text>
  <text x="691.25" y="176" fill="#e2e8f0" fontSize="16" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">192 000</text>
  <text x="691.25" y="196" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Sum of Amount</text>
  <rect x="787.5" y="104" width="172.5" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="797.5" y="122" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By country</text>
  <text x="950.0" y="122" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 1  ⤡ m  ✕</text>
  <circle cx="873.75" cy="184" r="42" fill="#4a9eff" opacity="0.85"/>
  <path d="M 873.75 184 L 873.75 142 A 42 42 0 0 1 906.75 158 Z" fill="#c084fc"/>
  <rect x="240.0" y="264" width="720.0" height="120" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="282" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Won deals by country</text>
  <text x="950.0" y="282" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 4  ⤡ m  ✕</text>
  <text x="252.0" y="304" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  France</text>
  <text x="948.0" y="304" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">165 000</text>
  <text x="272.0" y="326" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Negotiation</text>
  <text x="948.0" y="326" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">120 000</text>
  <text x="252.0" y="348" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Belgium</text>
  <text x="948.0" y="348" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">27 000</text>
  <rect x="10" y="30" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dashboards mode</text>
  <text x="20" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grids of saved analyses</text>
  <line x1="210" y1="47.0" x2="240" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One period</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">overrides the tiles' periods</text>
  <line x1="210" y1="167.0" x2="258" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="10" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A tile</text>
  <text x="20" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one analysis in its own view</text>
  <line x1="210" y1="337.0" x2="240" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit layout, export</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tiles; Excel and PDF</text>
  <line x1="1000" y1="47.0" x2="840" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tile tools</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pencil opens the analysis</text>
  <line x1="1000" y1="167.0" x2="940" y2="122" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
</svg>

---

## Saved analyses \{#analyses\}

In **Analyses** mode, the picker lists the saved analyses of the model, grouped by audience, the user's own ones flagged *mine*. *New analysis* starts an empty one.

| Button | Effect |
|---|---|
| **Save** | Saves the current analysis — rows, measures, filters, period, view, calculated fields. |
| **Save as** | Saves a copy under a new name, always private to start with. |
| **Delete** | Shown to the owner of the analysis and to superusers. |
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
- **Edit layout** shows the tile tools: move left or right, width (1 to 4 columns), height (*s*, *m*, *l*), remove. **Add an analysis…** adds a tile.
- **The pencil** of a tile opens its analysis in the editor; a drill from a tile does the same, with the clicked values as filters.
- **Save**, **Save as**, **Delete** work as for analyses. A tile whose analysis was deleted says so.

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

Numbers in the PDF follow the reader's language (`1 234,5` / `1,234.5`). The same document is produced when a Nomaflow job renders the analysis on a schedule — see [Steps → Report](../../nomaflow/steps.md#report). Each section holds up to 3,000 rows. The pivot view also has its own Excel button, which exports the pivot as shown. PDF branding is set in [Settings → App](../build/settings-app.md).

---

## Analyses shipped with an app \{#bundled\}

An app can ship ready-made analyses and dashboards with its model. They appear as **shared** items when the app is installed, and are updated with new versions of the app — until someone saves changes to them, after which the local version is kept. A shipped item that a user deleted is not installed again.

---

## What's next

- [Analyse data](./analysis.md) — build what you save.
- [Data Explorer](./overview.md) — the whole picture.
