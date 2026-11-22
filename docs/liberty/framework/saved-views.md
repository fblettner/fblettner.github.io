---
title: Saved grid views
description: "Save a data grid's columns, sort, filters and grouping as a named view — your own views follow you across devices, and an admin can publish shared views with one set as the default. Also covers the screen's Summary view — parent rows counted by the database, detail rows loaded on demand — and day-grain filtering on timestamp columns."
keywords: [Liberty Framework, grid views, saved views, table view, summary view, columns, filters, sort, grouping, default view, shared views, day-grain filter, timestamp filter, lazy load]
---

# Saved grid views

Any data grid — a screen's table or an ad-hoc Table View — can remember how you set it up. A **view** captures the grid's full presentation and lets you switch back to it in one click:

- which **columns** are visible, and their **order**;
- the **sort**;
- the per-column **filters**;
- the **grouping**;
- the **page size**.

---

## At a glance

<svg viewBox="0 0 1320 354" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="314" rx="14" fill="url(#svw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="332.15" y="35" width="40" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="352.15" y="45.8" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <line x1="220" y1="70" x2="1100" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="882" y="78" width="178" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="883" y="79" width="54" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="910.0" y="92.5" fill="#4a9eff" fontSize="8.4" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="938" y1="83" x2="938" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="966.0" y="92.5" fill="#94a3b8" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <line x1="994" y1="83" x2="994" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="1027.0" y="92.5" fill="#94a3b8" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">≡ Summary</text>
  <rect x="238" y="110" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="124.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="304" y="110" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="339.0" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="383" y="110" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="392" y="124.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="561" y="110" width="62" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="592.0" y="124.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="722" y="110" width="51" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="747.5" y="124.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="778" y="110" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="808.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="844" y="110" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞ Group</text>
  <rect x="900" y="110" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="966" y="110" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Export ▾</text>
  <rect x="238" y="142" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="360" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER NAME</text>
  <text x="620" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="740" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="890" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">UPDATED</text>
  <rect x="238" y="172" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00001</text>
  <text x="360" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="620" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="740" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Active</text>
  <text x="890" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">27/10/2026</text>
  <rect x="238" y="202" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00002</text>
  <text x="360" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Beta SARL</text>
  <text x="620" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="740" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Active</text>
  <text x="890" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">25/10/2026</text>
  <rect x="238" y="232" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00003</text>
  <text x="360" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Gamma SA</text>
  <text x="620" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BE</text>
  <text x="740" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Prospect</text>
  <text x="890" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">12/10/2026</text>
  <rect x="238" y="262" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00004</text>
  <text x="360" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Delta GmbH</text>
  <text x="620" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">DE</text>
  <text x="740" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Active</text>
  <text x="890" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">02/10/2026</text>
  <rect x="553" y="138" width="280" height="176" rx="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="565" y="156" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VIEWS</text>
  <text x="748.73952" y="156" fill="#4a9eff" fontSize="7.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RESET TO SHIPPED</text>
  <text x="701.6092799999999" y="156" fill="#4a9eff" fontSize="7.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SAVE AS…</text>
  <text x="673.0441599999999" y="156" fill="#4a9eff" fontSize="7.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SAVE</text>
  <line x1="561" y1="166" x2="825" y2="166" stroke="#1f2937" strokeWidth="1"/>
  <text x="565" y="184" fill="#64748b" fontSize="7.6" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SHARED</text>
  <rect x="567" y="195" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M569.5,200.5 L571.8,202.8 L575.8,198" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="584" y="204" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Standard · default</text>
  <rect x="567" y="217" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="584" y="226" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Month-end</text>
  <text x="565" y="250" fill="#64748b" fontSize="7.6" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MY VIEWS</text>
  <rect x="567" y="261" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="584" y="270" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">My French customers</text>
  <text x="817" y="270" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="567" y="283" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="584" y="292" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Month-end check</text>
  <text x="817" y="292" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views menu</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared and personal views</text>
  <line x1="200" y1="117.0" x2="732" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="20" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared</text>
  <text x="30" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">published in the Screen Designer</text>
  <line x1="200" y1="195.0" x2="567" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="20" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">My views</text>
  <text x="30" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stored per user, on every device</text>
  <line x1="200" y1="275.0" x2="567" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1120" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table · Chart · Summary</text>
  <text x="1130" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Summary when the screen has one</text>
  <line x1="1120" y1="51.0" x2="1072" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1120" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save as… · Reset to shipped</text>
  <text x="1130" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Save shows on one of your views</text>
  <line x1="1120" y1="145.0" x2="823" y2="154" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1120" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete view</text>
  <text x="1130" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only your own views</text>
  <line x1="1120" y1="275.0" x2="817" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
</svg>

---

## Your views vs shared views

The **Views** menu on the grid toolbar lists two groups:

- **Shared** — published, read-only views available to everyone on that screen. An admin authors them in the [Screen Designer](build/screens/overview.md) (*Grid* stage, *Views* section), and may mark one as the **default** — the layout the grid opens with.
- **My views** — the views you save yourself. They are stored per user on the server, so they **follow you across devices and sessions**. You can have as many as you like per grid.

A regular user reads shared views and manages their own; publishing a view for everyone is an admin action in the Designer. The menu's header carries **Save** (on one of your views), **Save as…** and **Reset to shipped**; the default shared view reads *Standard · default*, a tick marks the view in use, and the button takes the name of the active view.

---

## Working with views

| Action | What it does |
|---|---|
| **Save as…** | Names the current columns, sort, filters and grouping as a new personal view. Reusing a name overwrites that view. |
| **Save** | Overwrites the active personal view in place (shown only when the active view is one of yours). |
| Select a view | Applies a shared or personal view. |
| **Delete view** | Removes one of your own views (the trash icon). |
| **Reset to shipped** | In the Views menu: back to the layout the screen ships with — its default shared view, else its base layout. |
| **Reset** | Reverts to the screen's default shared view, or to its base column layout if there is none. Handy when an older saved state conflicts with a column that is now conditionally hidden. *Reset* lives in the Columns menu. |

The grid also remembers, **per device**, the last view you opened on each table — so you land back where you left off — while the views themselves live on the server.

---

## Summary view \{#summary\}

The **Summary** view is set on the screen, not saved by the user: when the **Summary** section of the Screen Designer's *Grid* stage lists grouping columns, the grid gains a **Summary** button next to **Table** and **Chart**.

In that mode the grid shows one parent row per combination of the grouping columns, with the number of rows behind it (the count column's header is set in the same tab). The count is computed by the database over the whole result, so it stays exact even when the grid caps the rows it loads. A chevron on each parent row loads its detail rows — the screen's own query, narrowed to that group — only when it is opened.

A date or timestamp grouping column can be bucketed by **day**, **month** or **year**: the parent row then shows the period, and the detail rows are the records that fall into it.

---

## Day-grain filter on timestamp columns

Filtering a timestamp column doesn't force you to type a full `YYYY-MM-DD HH:MM:SS` bound. The column-header filter lets you pick a **day** and matches every row whose timestamp falls on that day (server-side lower / upper bound).

---

## Tips & best practices

- **Save the layouts you reuse.** A "month-end" view with the right columns, filter and sort is one click away every time.
- **Publish the team's standard as a shared default.** Author it once in the Designer (*Grid → Views*) and mark it default, so everyone opens the grid on the agreed layout.
- **Reach for *Reset* when a grid looks wrong after an upgrade.** If a column became conditionally hidden, an old saved state can fight the new rule — *Reset* clears it back to the screen's default.
