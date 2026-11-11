---
title: Saved views
description: "NomaUBL saved views: save the display of a list (columns, order, grouping, sort, rows per page, column filters, Advanced Filters, period) under a name, open a list on one's own view, share views with every user, and resize columns."
keywords: [NomaUBL, saved views, list views, shared views, default view, column width, resize, invoices, documents, integration errors, processing log, e-reporting, JD Edwards, SAP, NetSuite, custom ERP]
---

# Saved views

Every list of NomaUBL — invoices, documents, e-reporting, integration errors, processing log, scheduled jobs, promotion, server log and the other grids — has a **view picker** in its toolbar. It saves the current display of the list under a name and brings it back in one click. Each user has their own views, kept in the database: the same views appear from any browser and on every server of the environment.

**Standard** is the layout set by the administrator in [Settings › List views](../configuration/list-views.md); it is always listed first.

---

## At a glance

<svg viewBox="0 0 1200 406" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="372" rx="14" fill="url(#sv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Invoices</text>
  <rect x="240" y="66" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="80.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="418" y="66" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="448.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="487" y="66" width="170" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="572.0" y="80.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Month-end ▾</text>
  <circle cx="647" cy="71" r="4" fill="#fb923c"/>
  <rect x="665" y="66" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="690.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="723" y="66" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="753.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="792" y="66" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="819.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="240" y="104" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NUMBER</text>
  <text x="360" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CUSTOMER</text>
  <text x="540" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUE DATE</text>
  <text x="640" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AMOUNT</text>
  <text x="740" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="890" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="136" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0412</text>
  <text x="360" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">05/10/2026</text>
  <text x="640" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 189,55</text>
  <rect x="740" y="141.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="758.5" y="152.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sent</text>
  <text x="890" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="166" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0413</text>
  <text x="360" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">06/10/2026</text>
  <text x="640" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">540,00</text>
  <rect x="740" y="171.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="768.0" y="182.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approved</text>
  <text x="890" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="196" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0414</text>
  <text x="360" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">06/10/2026</text>
  <text x="640" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">98,26</text>
  <rect x="740" y="201.0" width="70" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="775.0" y="212.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Send failed</text>
  <text x="890" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="226" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0415</text>
  <text x="360" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">07/10/2026</text>
  <text x="640" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 310,00</text>
  <rect x="740" y="231.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="758.5" y="242.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sent</text>
  <text x="890" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="256" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0416</text>
  <text x="360" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">08/10/2026</text>
  <text x="640" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">75,40</text>
  <rect x="740" y="261.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="768.0" y="272.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approved</text>
  <text x="890" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="286" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0417</text>
  <text x="360" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">08/10/2026</text>
  <text x="640" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">812,10</text>
  <rect x="740" y="291.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="758.5" y="302.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sent</text>
  <text x="890" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="316" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0418</text>
  <text x="360" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">09/10/2026</text>
  <text x="640" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 004,00</text>
  <rect x="740" y="321.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="768.0" y="332.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approved</text>
  <text x="890" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="346" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0419</text>
  <text x="360" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10/10/2026</text>
  <text x="640" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">63,90</text>
  <rect x="740" y="351.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="758.5" y="362.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sent</text>
  <text x="890" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <line x1="880" y1="106" x2="880" y2="376" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 3"/>
  <rect x="878" y="110" width="4" height="16" rx="2" fill="#4a9eff"/>
  <rect x="487" y="94" width="250" height="284" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.2"/>
  <text x="499" y="118" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Standard</text>
  <text x="499" y="139" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">MY VIEWS</text>
  <rect x="491" y="148" width="242" height="20" rx="4" fill="rgba(74,158,255,0.12)"/>
  <text x="499" y="162" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">✓ Month-end  ★ 👥</text>
  <text x="499" y="184" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">To correct</text>
  <text x="499" y="205" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">SHARED VIEWS</text>
  <text x="499" y="228" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Customer service</text>
  <text x="725" y="228" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">a.martin</text>
  <line x1="495" y1="238" x2="729" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <text x="499" y="258" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Save</text>
  <text x="499" y="280" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Save as…</text>
  <text x="499" y="302" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rename…</text>
  <text x="499" y="324" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Open the list on Standard</text>
  <text x="499" y="346" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Stop sharing</text>
  <text x="499" y="368" fill="#f87171" fontSize="10" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">View picker</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange dot = changed, not saved</text>
  <line x1="200" y1="77.0" x2="487" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">My views</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">★ opens the list · 👥 shared</text>
  <line x1="200" y1="187.0" x2="499" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared views</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their owner · Save as… to copy</text>
  <line x1="200" y1="267.0" x2="499" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">View actions</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">own views only, except Save as…</text>
  <line x1="200" y1="337.0" x2="499" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns menu</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Reset widths</text>
  <line x1="1000" y1="77.0" x2="763" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="1000" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drag to resize</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">widths saved with the view</text>
  <line x1="1000" y1="197.0" x2="880" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Share with every user</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">needs the Share views action</text>
  <line x1="1000" y1="347.0" x2="617" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
</svg>

---

## What a view holds \{#content\}

| Held by the view | Not held |
|---|---|
| Visible columns and their order, column widths | Direction, status tabs, search box |
| Grouping, sort, rows per page | Labels, formats and value lists — set in [List views](../configuration/list-views.md) |
| Column filters (the filter row opens when the view has some) | |
| Advanced Filters — invoices, documents, integration errors, processing log, e-reporting | |
| Period and date basis — invoices, documents, integration errors, processing log | |

A period saved as *Today*, *Yesterday*, *This month*, *Last month*, *This quarter*, *This year* or *Last 12 months* follows the calendar: it is computed again the day the view opens. Only a *Custom* range keeps its dates. A view saved without a period leaves the current one unchanged.

A list opened from another page on given filters or a given period — a dashboard tile, the processing log reached from a file — keeps them over the view it opens on.

---

## The view menu \{#menu\}

| Item | Effect |
|---|---|
| **Standard** | Returns to the Settings layout. |
| **My views** | The user's views. ★ marks the view the list opens on, the users icon a view shared with everyone. |
| **Shared views** | The views other users share, with the owner's name. |
| **Save** | Saves the changes into the active view (own views only). An orange dot on the picker means the active view has changed and is not saved; the changes stay until the browser tab is closed. |
| **Save as…** | Saves the display as a new view (name, 60 characters at most). On a shared view, this is how a user keeps a copy of their own. Reusing the name of one of one's views replaces it. |
| **Rename…** · **Delete** | Own views only. After a delete, the list returns to Standard. |
| **Open the list on this view** / **Open the list on Standard** | Chooses the view the list opens on, among one's own views. |
| **Share with every user** / **Stop sharing** | Own views only, with the *Share views* action (see [Access](#access)). |

The list opens on the view picked earlier in the same browser session, else on the user's view marked ★, else on Standard. A shared view cannot be the one a list opens on: save a copy with **Save as…** and mark the copy. Only its owner changes a shared view; when its owner stops sharing it, the others go back to Standard.

---

## Column widths \{#column-widths\}

Drag the right border of a column header to widen or narrow the column (60 px at least). Once a width is changed, the list is exactly as wide as its columns: it scrolls sideways when they exceed the screen. **Reset widths**, in the header of the **Columns** menu, returns to the widths set in [List views](../configuration/list-views.md).

Widths are saved with the view. Under Standard, the order, visibility and widths of the columns stay in the browser, as the layout before views existed: **Save as…** turns them into a view.

The Explorer results, dashboard tiles, drill windows and the integrity report have no view picker.

---

## Access \{#access\}

- Saving, renaming and deleting one's own views needs no grant: every signed-in user can.
- Sharing needs the **Share views** action (group *Lists*) on the [Roles](../configuration/security/roles.md) page. A role without an action list has it; a role with a restricted action list has it only once ticked; a read-only role never has it.
- A view never widens what the user sees: company and row grants apply as usual.

Views are stored in table `F564256`, created by `nomaubl.sh upgrade <env>` (see [Upgrade](../installation/upgrade.md)). Until the upgrade, the lists work without the picker.

---

## Tips & best practices

- **One view per recurring task.** *Month-end*, *To correct*, *Customer service*: each brings back its columns, filters and period in one click.
- **Save relative periods.** A view on *This month* stays right every month; a custom range is for a one-off analysis.
- **Share the views of a team rather than describing them.** One person builds the view, shares it, and each colleague keeps a copy to adjust.
- **Keep Standard simple.** It is the common layout; personal needs go into views.
