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

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="300" rx="14" fill="url(#svw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="730" y="28" width="167" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="731" y="29" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="756.0" y="43.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="782" y1="33" x2="782" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <line x1="834" y1="33" x2="834" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="865.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="72" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280.0" y="86.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Views ▾</text>
  <rect x="328" y="72" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="364.0" y="86.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns ▾</text>
  <rect x="408" y="72" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="441.0" y="86.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="880" y="72" width="80" height="22" rx="5" fill="url(#svw-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="86.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <rect x="240" y="100" width="230" height="196" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="120" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHARED</text>
  <text x="256" y="140" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Standard</text>
  <rect x="380" y="129" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="406.5" y="141.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">default</text>
  <text x="256" y="160" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Month-end</text>
  <text x="252" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MY VIEWS</text>
  <text x="256" y="206" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">My French customers</text>
  <text x="448" y="206" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <line x1="248" y1="220" x2="462" y2="220" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="240" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Save as…</text>
  <text x="256" y="262" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Save</text>
  <text x="256" y="284" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Reset</text>
  <rect x="486" y="100" width="474" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="666" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COUNTRY</text>
  <text x="746" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="856" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPDATED</text>
  <rect x="486" y="132" width="474" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME Industries</text>
  <text x="666" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="746" y="137.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="769.0" y="148.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Active</text>
  <text x="856" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">27/10/2026</text>
  <rect x="486" y="162" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="666" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="746" y="167.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="769.0" y="178.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Active</text>
  <text x="856" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">25/10/2026</text>
  <rect x="486" y="192" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="666" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="746" y="197.0" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="774.0" y="208.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Prospect</text>
  <text x="856" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12/10/2026</text>
  <rect x="10" y="72" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views menu</text>
  <text x="20" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared and personal</text>
  <line x1="210" y1="89.0" x2="240" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Personal views</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">follow the user everywhere</text>
  <line x1="210" y1="217.0" x2="256" y2="206" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Summary</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counts per group, server-side</text>
  <line x1="1000" y1="47.0" x2="910" y2="40" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The grid</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">columns, sort, filters saved</text>
  <line x1="1000" y1="177.0" x2="960" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
</svg>

---

## Your views vs shared views

The **Views** menu on the grid toolbar lists two groups:

- **Shared** — published, read-only views available to everyone on that screen. An admin authors them in the [Screen Designer](build/screens/overview.md)'s *Views* tab, and may mark one as the **default** — the layout the grid opens with.
- **My views** — the views you save yourself. They are stored per user on the server, so they **follow you across devices and sessions**. You can have as many as you like per grid.

A regular user reads shared views and manages their own; publishing a view for everyone is an admin action in the Designer.

---

## Working with views

| Action | What it does |
|---|---|
| **Save as…** | Names the current columns, sort, filters and grouping as a new personal view. Reusing a name overwrites that view. |
| **Save** | Overwrites the active personal view in place (shown only when the active view is one of yours). |
| Select a view | Applies a shared or personal view. |
| **Delete view** | Removes one of your own views (the trash icon). |
| **Reset** | Reverts to the screen's default shared view, or to its base column layout if there is none. Handy when an older saved state conflicts with a column that is now conditionally hidden. *Reset* lives in the Columns menu. |

The grid also remembers, **per device**, the last view you opened on each table — so you land back where you left off — while the views themselves live on the server.

---

## Summary view \{#summary\}

The **Summary** view is set on the screen, not saved by the user: when the screen editor's **Summary** tab lists grouping columns, the grid gains a **Summary** button next to **Table** and **Chart**.

In that mode the grid shows one parent row per combination of the grouping columns, with the number of rows behind it (the count column's header is set in the same tab). The count is computed by the database over the whole result, so it stays exact even when the grid caps the rows it loads. A chevron on each parent row loads its detail rows — the screen's own query, narrowed to that group — only when it is opened.

A date or timestamp grouping column can be bucketed by **day**, **month** or **year**: the parent row then shows the period, and the detail rows are the records that fall into it.

---

## Day-grain filter on timestamp columns

Filtering a timestamp column doesn't force you to type a full `YYYY-MM-DD HH:MM:SS` bound. The column-header filter lets you pick a **day** and matches every row whose timestamp falls on that day (server-side lower / upper bound).

---

## Tips & best practices

- **Save the layouts you reuse.** A "month-end" view with the right columns, filter and sort is one click away every time.
- **Publish the team's standard as a shared default.** Author it once in the Designer's *Views* tab and mark it default, so everyone opens the grid on the agreed layout.
- **Reach for *Reset* when a grid looks wrong after an upgrade.** If a column became conditionally hidden, an old saved state can fight the new rule — *Reset* clears it back to the screen's default.
