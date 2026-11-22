---
title: Menus — overview
description: "The Menus page, the flat-items-linked-by-parent model, the seven leaf kinds (screen / query / endpoint / dashboard / page / job / url), and how a menu plus show_in_switcher turns a connector into an app."
keywords: [Liberty Framework, menus, MenusBuilder, app, navigation, tree, folder, leaf, items, parent]
---

# Menus — overview

A **menu** in Liberty is what the user sees in the left navigation panel when they open one of your apps. It groups screens, endpoints, dashboards and routes into a tree of folders and leaves.

Three things are worth knowing up front:

| Fact | Implication |
|---|---|
| There is **no separate "app" object** in Liberty. | An "app" is just a **connector that has a menu attached** *and* whose `show_in_switcher` flag is on. Both conditions are required for the application picker of the sidebar to list it. |
| Menus are stored as a **flat list of items** linked by `parent`. | The tree is assembled by the backend — easier to hand-edit, round-trips cleanly through TOML, drag operations only ever mutate one list. |
| Every menu key is a connector name (`[menus.<connector>]`). | The connector named `crm` carries the menu under `[menus.crm]`; the screen `customers` on `crm` is reached from a `screen` leaf with `target = "customers"`. |

The page that manages menus is **Liberty Next → Screens → Menus**.

---

## In the application \{#sidebar\}

At the bottom of the sidebar, **Open on hover** folds the menu to its icons: it opens over the page while the mouse is on it and folds back once a page is picked, leaving the whole width to the screens. **Keep open** brings back the fixed menu. The choice is kept in the browser.

The menu is as wide as you make it: drag its right edge (from 180 to 460 pixels, kept in this browser); a double click on the edge brings back the default width. An entry's label takes up to two lines, its full text staying in the tooltip. On a tablet held upright the menu is the icon rail, opened over the page by its button; on a phone it is a drawer — see [Phone and tablet](../../mobile.md).

## The Menus page at a glance

<svg viewBox="0 0 1320 490" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mov-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="446" rx="14" fill="url(#mov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="47" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▱</text>
  <text x="260" y="47" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="987" y="33" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="941" y="33" width="40" height="22" rx="5" fill="url(#mov-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="961.0" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="870" y="33" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="902.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Discard</text>
  <rect x="814" y="33" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="839.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Item</text>
  <rect x="748" y="33" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="778.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Folder</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="92" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Connector:</text>
  <rect x="296.4" y="80" width="35" height="20" rx="10" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="313.9" y="93.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="336.4" y="80" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="363.9" y="93.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="396.4" y="80" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="423.9" y="93.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="456.4" y="80" width="75" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="493.9" y="93.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add scope</text>
  <rect x="238" y="110" width="330" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="130" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="267.876" y="130" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">· 9 items</text>
  <rect x="248" y="138" width="310" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="152.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ filter 9…</text>
  <text x="270" y="183" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="183" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▣</text>
  <text x="296" y="183" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="556" y="183" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">overview</text>
  <text x="270" y="211" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="211" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▭</text>
  <text x="296" y="211" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="556" y="211" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">explorer</text>
  <text x="258" y="239" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="270" y="239" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="239" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="296" y="239" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="556" y="239" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">sales</text>
  <rect x="246" y="252" width="314" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286" y="267" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="298" y="267" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="312" y="267" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="408" y="255" width="150" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="421" y="267.5" fill="#475569" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <text x="446" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <text x="471" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <text x="496" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <text x="521" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="546" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="286" y="295" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="298" y="295" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="312" y="295" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="556" y="295" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">deals</text>
  <text x="286" y="323" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="298" y="323" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="312" y="323" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Open orders</text>
  <text x="556" y="323" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">open_orders</text>
  <text x="258" y="351" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="270" y="351" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="351" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="296" y="351" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Reports</text>
  <text x="556" y="351" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">reports</text>
  <text x="258" y="379" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="270" y="379" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="379" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="296" y="379" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Import</text>
  <text x="556" y="379" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">import</text>
  <rect x="580" y="110" width="502" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="132" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="652.92" y="132" fill="#94a3b8" fontSize="8.6" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="971" y="120" width="99" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1020.5" y="133.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Find dependencies</text>
  <rect x="895" y="120" width="72" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="133.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="846" y="120" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="868.5" y="133.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="797" y="122.5" width="41" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="817.5" y="133.3" fill="#4a9eff" fontSize="7.8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">screen</text>
  <line x1="580" y1="148" x2="1082" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <rect x="592" y="158" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="618.5" y="172.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="678.0" y="172.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="749.5" y="172.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="592" y1="186" x2="1070" y2="186" stroke="#1f2937" strokeWidth="1"/>
  <text x="592" y="200" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID ∗</text>
  <rect x="592" y="205" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="219.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">customers</text>
  <text x="592" y="240" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL ∗</text>
  <rect x="592" y="245" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="259.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="592" y="280" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ICON</text>
  <rect x="592" y="285" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="299.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">users</text>
  <text x="592" y="320" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="592" y="325" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="339.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">screen  Screen (designed view)</text>
  <text x="1058" y="339.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="592" y="360" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="592" y="365" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="379.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="379.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="592" y="400" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET</text>
  <rect x="592" y="405" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="419.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">customers  Customers</text>
  <text x="1058" y="419.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="20" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One chip per application</text>
  <text x="30" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ Add scope: a menu for a connector</text>
  <line x1="200" y1="89.0" x2="296.4" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The tree</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">icon, label and id of each entry</text>
  <line x1="200" y1="157.0" x2="260" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drag and drop</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">above, below or into a folder</text>
  <line x1="200" y1="247.0" x2="270" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions on hover</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">up · down · indent · outdent · + · 🗑</text>
  <line x1="200" y1="337.0" x2="412" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Folder · Item</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add at the top level</text>
  <line x1="1120" y1="43.0" x2="839.0" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="114" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="129" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The picked entry</text>
  <text x="1130" y="142" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clone, usages, dependencies</text>
  <line x1="1120" y1="131.0" x2="1070" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="174" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="189" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three tabs</text>
  <text x="1130" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">General · Advanced · Translations</text>
  <line x1="1120" y1="191.0" x2="788" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type and target</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the entry opens</text>
  <line x1="1120" y1="347.0" x2="1060" y2="428" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Header and connector bar** | **＋ Folder** and **＋ Item** add an entry at the top level; **Discard**, **Save** and **Reload config** act on the whole page. Below, one chip per app (a connector that has a menu): a click loads its tree. **+ Add scope** gives an existing connector a menu. |
| **Tree (left)** | The app's name and its number of entries, a filter, then the tree. Each row shows a grip, the icon of what it opens (folder, screen, dashboard, job, query, endpoint, page), the label and the id. A click selects the row; on hover, the id gives way to *Move up / down*, *Indent / Outdent*, *Add child item*, *Delete*. Rows are dragged above, below or into a folder. |
| **Picked entry (right)** | Its label, id and kind, with **Clone**, **Find usages** and **Find dependencies**; then the form of the entry in three tabs: **General** (id, label, icon, type, connector, target), **Advanced** (parent, params, roles, override) and **Translations**. With nothing picked, the panel reads *Pick an item in the tree.* |

---

## What a menu carries

The schema's top-level shape:

| Field | Notes |
|---|---|
| `label` | The app's display name. Falls back to the connector name. Shown in the application picker. |
| `items` | A flat list of menu items, linked by their `parent` field. |

Each item:

| Field | Required | What it does |
|---|---|---|
| `id` | yes | Unique inside this menu. Referenced by children's `parent`. |
| `parent` | no | Pick a folder, or leave blank for a top-level item. |
| `label` | yes | The sidebar text. |
| `l` | no | Per-language label overrides — `l.fr`, `l.de`, etc. |
| `icon` | no | One of the icon names the sidebar draws (`shield`, `users`, `barchart`, …) — see [Translations and icons](./translations-and-icons.md). |
| `type` | no | Blank = folder. Otherwise one of `screen`, `query`, `endpoint`, `dashboard`, `page`, `job`, `url` (see [Item types](./item-types.md)). |
| `connector` | no | Connector hosting the target. Blank = the app's own connector (the menu key). |
| `target` | conditional | Required on every leaf; ignored on folders. |
| `params` | no | Fixed parameters passed to the target when the item opens. |
| `roles` | no | Restrict to these roles. Empty = visible whenever the user can run the target. |

---

## Folder vs leaf

The `type` field decides:

| Setting | Behaviour |
|---|---|
| `type` blank | The item is a **folder** — groups children. No `target`, no `connector`, no `params`. A folder is hidden when none of its descendants are visible (the runtime collapses empty folders). |
| `type` set | The item is a **leaf** — points at a thing the user can open. Must have a `target`. |

Folders can nest indefinitely. Leaves can't have children — they're terminal nodes.

---

## The seven leaf kinds

| `type` | Opens | `target` is | `connector` |
|---|---|---|---|
| **`screen`** | A designed screen. | The screen's id (`customers`), picked from the application's screens. | Usually blank — the screen's own connector runs it. |
| **`query`** | The same grid view, picked from the raw queries — a query with no designed screen opens as a plain table. | A SELECT query name. | The connector that owns the query. Blank = the app's. |
| **`endpoint`** | The HttpRunner — fires an API connector endpoint. | An endpoint name. | The API connector. Blank = the app's. |
| **`dashboard`** | A dashboard (charts + KPIs). | A dashboard id (from `[dashboards.*]`). | Must NOT be set (dashboards live in their own flat namespace). |
| **`page`** | A registered frontend route (a custom feature area, e.g. `/nomaflow`), or a page an application ships (`/app/<app>/<page>`). | The route path. | Must NOT be set (the target is a route, not a connector resource). |
| **`job`** | The page of a Nomaflow job: its files and parameters, Run, the live log. | The job id. | Must NOT be set. |
| **`url`** | An external address, in a new browser tab. | The address (`https://…`, a path of this server, or `#URL.NAME#/…`). | Must NOT be set. |

The schema validator enforces:

- A leaf needs a `target` — saving fails without one.
- A `dashboard`, `page`, `job` or `url` leaf with a `connector` is rejected (misconfiguration); a `url` must start with `http://`, `https://`, `/` or `#URL.`.
- A folder with `target` / `connector` / `params` is rejected (those fields only make sense on leaves).

---

## Save and reload

The *Save* button validates the whole `MenusFile` (unique ids, parents exist, no cycles), writes `menus.toml` and triggers a hot reload. New menus apply immediately — no process restart.

The validation is strict on three things:

| Check | Why |
|---|---|
| Every `parent` reference must point at an existing item. | A dangling parent would orphan the subtree. |
| No cycles (a parent chain that loops). | An infinite-loop guard. |
| No duplicate `id` within the same menu. | Children reference parents by id; duplicates break the link. |

Cross-menu duplicates are fine — `[menus.crm.security]` and `[menus.nomasx1.security]` coexist without conflict.

---

## How a connector becomes an app

**A connector is listed in the application picker of the sidebar only when both conditions are true:**

1. A menu exists — `[menus.<connector>]` is set up in *Liberty Next → Screens → Menus*.
2. **Show In Switcher** on the connector — set in *Liberty Next → Data → Connectors → \<connector> → Settings* (on by default).

Miss either one and the connector exists but is not listed. The picker itself appears only when there is more than one application. Setting up the menu first and **then** ticking `show_in_switcher` is the usual order.

Note: the Connectors page's own *Apps* / *Data sources* grouping is based on menu existence alone — connectors with a menu but `show_in_switcher = false` still show under *Apps* there. That grouping is an internal Settings-UI affordance; the user-facing picker is what **Show In Switcher** gates.

The next page covers the wiring from both sides.

---

## Permission pruning

When the user opens the app, `GET /api/menus` returns the tree **filtered to what the user can run**:

- A leaf is kept when the user may run what it opens (`sql:<connector>:<target>` for `screen` / `query`, `api:<connector>:<target>` for `endpoint`), or when a role sets the leaf, its folder or the whole application to **Read** or **Read and change** (a job: **Read and change**) — see [Permissions and roles](./permissions-and-roles.md).
- A `menu:` or `dashboard:` deny removes it.
- A folder with no surviving children is collapsed away.
- Items with a `roles` filter are kept only when the user's roles intersect the list.

A user sees only the parts of the menu they can actually use — no greyed-out items, no clicks on dead-end links.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Make a connector show up as an app in the application picker. | [Make a connector an app](./make-connector-an-app.md). |
| Build the tree — folders, leaves, drag/reorder, indent. | [Build the tree](./build-the-tree.md). |
| Pick the right leaf type (screen / endpoint / dashboard / route). | [Item types](./item-types.md). |
| Restrict items to specific roles. | [Permissions and roles](./permissions-and-roles.md). |
| Add icons + per-language labels. | [Translations and icons](./translations-and-icons.md). |

---

## What's next

- [Make a connector an app](./make-connector-an-app.md) — wire `show_in_switcher`, `home` and the menu.
- [Concepts → Menus](./overview.md) — the deep reference.
