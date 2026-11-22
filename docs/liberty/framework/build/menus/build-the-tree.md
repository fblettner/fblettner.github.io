---
title: Build the tree
description: "The tree editor — add folders and items, drag to reorder, indent/outdent to reparent, clone, rename, find usages. Every action's exact button and behaviour."
keywords: [Liberty Framework, menu tree, folder, leaf, drag, reorder, indent, outdent, rename, clone, find usages]
---

# Build the tree

Once a connector has a menu attached (see [Make a connector an app](./make-connector-an-app.md)), the tree editor on the right is where you compose the navigation: folders that group, leaves that open screens / endpoints / dashboards / routes.

The model is a **flat list of items linked by `parent`** — but the editor lets you work with it as a tree. Drag operations mutate the underlying flat order; the tree on screen always reflects what's saved.

---

## The toolbar

In the page header:

| Button | What it does |
|---|---|
| **＋ Folder** | Adds a folder at the top level. The folder is the only item kind without a `type`. |
| **＋ Item** | Adds a leaf at the top level — set its type and target in the panel on the right. To add under a folder, use the row's **＋** (*Add child item*). |
| **Discard** / **Save** | Revert or write the whole menu. |
| **Reload config** | Re-reads the configuration files. |

On the panel of the picked entry, next to its kind:

| Button | What it does |
|---|---|
| **Clone** | Duplicates the entry (subtree included). Prompts for a new id. |
| **Find usages** | Lists every place this menu entry is referenced (e.g. another connector's `home` field). Helps before a rename / delete. |
| **Find dependencies** | Lists what the entry relies on — its connector and its target (a screen, a query, an endpoint, a dashboard or a job) — and what they rely on in turn. |

---

## The tree rows

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mbt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mbt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mbt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mbt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="400" y="20" width="520" height="300" rx="12" fill="url(#mbt-g-card)" stroke="#1f2937" strokeWidth="1"/>
  <text x="420" y="46" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="439.876" y="46" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">· 9 items</text>
  <rect x="420" y="54" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="429" y="68.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ filter 9…</text>
  <text x="442" y="99" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="99" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▣</text>
  <text x="468" y="99" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="898" y="99" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">overview</text>
  <text x="442" y="127" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="127" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▭</text>
  <text x="468" y="127" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="898" y="127" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">explorer</text>
  <text x="430" y="155" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="442" y="155" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="155" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="468" y="155" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="898" y="155" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">sales</text>
  <text x="458" y="183" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="470" y="183" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="484" y="183" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="898" y="183" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">customers</text>
  <line x1="456" y1="191" x2="896" y2="191" stroke="#4a9eff" strokeWidth="2"/>
  <rect x="418" y="196" width="484" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458" y="211" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="470" y="211" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="484" y="211" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Deals</text>
  <rect x="750" y="199" width="150" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="763" y="211.5" fill="#475569" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <text x="788" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <text x="813" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <text x="838" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <text x="863" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="888" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="458" y="239" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="470" y="239" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="484" y="239" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Open orders</text>
  <text x="898" y="239" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">open_orders</text>
  <text x="430" y="267" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="442" y="267" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="267" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="468" y="267" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Reports</text>
  <text x="898" y="267" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">reports</text>
  <text x="430" y="295" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="442" y="295" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="295" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="468" y="295" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Import</text>
  <text x="898" y="295" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">import</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by id or label; drag is off</text>
  <line x1="200" y1="57.0" x2="422" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Folder ▾ open / › closed</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">double-click toggles it</text>
  <line x1="200" y1="137.0" x2="430" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drop line</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the dragged row lands</text>
  <line x1="200" y1="207.0" x2="460" y2="191" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grip ⠿</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag the row (and its subtree)</text>
  <line x1="200" y1="277.0" x2="452" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="1120" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Id, monospace</text>
  <text x="1130" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">replaced by the actions on hover</text>
  <line x1="1120" y1="67.0" x2="896" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="1120" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">↑ ↓ → ←</text>
  <text x="1130" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">move, indent, outdent</text>
  <line x1="1120" y1="157.0" x2="800" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ child · 🗑 delete</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a folder goes with its subtree</text>
  <line x1="1120" y1="237.0" x2="885" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
</svg>

Each row carries:

| Element | What it shows |
|---|---|
| Indent | Visual depth — each level is 16 pixels in. |
| Chevron | ▾ for an expanded folder, ▸ for collapsed; a double click on the folder's row toggles it too. |
| Icon | The kind of the entry: an open or closed folder, a screen, a dashboard, a job, a query, an endpoint, a page. The item's own `icon` is the one the application's sidebar draws. |
| Label | The `label` field. |
| Id | Monospace, muted, after the label. Fades out on hover to make room for the actions. |
| Per-row actions (hover) | *Move up* (↑), *Move down* (↓), *Indent* (→), *Outdent* (←), *Add child item* (＋), *Delete* (🗑). |

Click anywhere on the row to **select** the item — the Inspector on the right loads its full form.

---

## Drag and drop \{#drag\}

A row is dragged onto another: **above** it, **below** it, or **into** it when it is a folder — with everything under it. A line or a highlight shows where it will land. Dragging is off while the tree is filtered.

Each row carries the icon of what it opens — folder, screen, dashboard, job, query, endpoint, page. The tree and the picked entry are two panels side by side; the entry's own actions — **Clone**, **Find usages**, **Find dependencies** — are on its panel, and **Folder**, **Item**, **Discard** and **Save** are in the page header.

---

## The per-row actions

The icons that appear on hover, left to right:

| Action | What it does |
|---|---|
| **↑ Move up** | Swap with the previous sibling. Disabled when the item is the first child of its parent. Moves the whole subtree together — child links follow. |
| **↓ Move down** | Swap with the next sibling. Disabled at the end. |
| **→ Indent** | Reparent the item under the previous sibling. The previous sibling becomes the new parent. Disabled when there's no previous sibling. |
| **← Outdent** | Move the item up one level — its grand-parent becomes the new parent. Disabled when the item is already at the top level. |
| **＋ Add child item** | Adds an item as a child of this row. |
| **🗑 Delete** | Removes the item — with its whole subtree, after a confirmation, when it has children. |

The icons are intentionally compact and only show on hover — the tree stays scannable in steady state.

---

## Building a tree from scratch

A typical flow for a new app's menu:

### Step 1 — Add the top-level folders

Click **＋ Folder** to add a folder. The default `id` is something like `folder_1`; the Inspector lets you rename it.

| Top-level pattern | Examples |
|---|---|
| One folder per domain. | `security`, `pipeline`, `reports`, `admin`. |
| One folder per workflow phase. | `setup`, `daily-ops`, `month-end`, `audit`. |
| One folder per audience. | `for-managers`, `for-operators`, `for-analysts`. |

Pick the convention that maps to how your users think — not how the data is shaped.

### Step 2 — Add the leaves under each folder

On the folder's row, click **＋** (*Add child item*). The new item appears under the folder. Set its `type`, `connector`, `target` in the Inspector — see [Item types](./item-types.md).

### Step 3 — Reorder

Use ↑ / ↓ on each row to put items in the order the user should see. The order in the tree = the order in the rendered sidebar.

### Step 4 — Nest where needed

Use → (Indent) to push an item under the previous sibling — useful when a folder grows long and you need a sub-folder. Use ← (Outdent) to pull it back out.

### Step 5 — Save

The page-level **Save** validates the whole menu (unique ids, parents exist, no cycles) and writes `menus.toml`. The hot reload picks up the changes; the user's next page load shows the new tree.

---

## The Inspector form

Click a row → the panel on the right loads the form of the entry, in three tabs — **General** (`id`, `label`, `icon`, `type`, `connector`, `target`), **Advanced** (`parent`, `params`, `roles`, `override`) and **Translations** (`l`). The fields adapt to the `type`:

| Field | Always shown | Notes |
|---|---|---|
| `id` | Yes | Renaming here updates every child's `parent` reference automatically. Cross-file references (e.g. another connector's `home` pointing at this item) need a manual fix — use *Find usages* first. |
| `parent` | Yes | A SearchSelect populated with the valid candidates. The tree's indent/outdent actions mutate this field too. |
| `label` | Yes | The sidebar text. |
| `l` (Translations tab) | Yes | Per-language overrides. See [Translations and icons](./translations-and-icons.md). |
| `icon` | Yes | One of the [sidebar icons](./translations-and-icons.md#icons). |
| `type` | Yes | Dropdown. Blank = folder. Switching from leaf to folder clears `target` / `connector` / `params`. |
| `connector` | Only for `query` / `endpoint` leaves | Blank = the app's own connector. |
| `target` | Only for leaves | A SearchSelect populated with valid targets for the chosen `type` + `connector`. |
| `params` | Only for leaves | Fixed parameters passed to the target when it opens. |
| `roles` | Always | Restrict to these roles. See [Permissions and roles](./permissions-and-roles.md). |

Edits are **live in memory** — the tree row updates as you type. Page-level *Save* is what writes to disk.

---

## Renaming an item

Renaming an `id` is more involved than other fields because every reference must update:

1. **Children**: the tree's `parent` references update automatically.
2. **Cross-file**: a connector's `home` field, or another menu's item that references this one, doesn't update. Use **Find usages** (on the entry's panel) before renaming to see every place that references the item.

For a heavy rename, the safe pattern is **Find usages → Clone → fix references → delete the old one** — the new id can take over while every reference is updated.

---

## Cloning an item

**Clone**, on the panel of the picked entry, duplicates it:

- The whole subtree is cloned (a folder with children clones every descendant).
- The new ids are prompted from a modal — the default is the old id with a suffix.
- Cross-file references are **not** rewritten — the clones are brand-new items nobody references yet.

Useful when:

- You're building a variant of a section (e.g. `reports` for managers, `reports_admin` for admins).
- The same shape applies to two apps and you copy-pasted the tree.
- You want a sandbox version to experiment with.

---

## Deleting an item

The row's 🗑 icon removes the item. When it has children, a confirmation asks first, and confirming removes the whole subtree.

There's no soft delete — the item disappears immediately from memory. The page-level *Save* is what persists. Until you Save, you can **Discard** to revert.

For cross-file references (a `home` field pointing at the deleted item), the connector's `home` becomes invalid — the app falls back to the first visible top-level item on next load. Use *Find usages* before deleting heavy items.

---

## Filtering long trees

A search box above the tree narrows the visible items by id / label substring. Useful when a menu grows past 30-40 entries.

The filter is case-insensitive and matches anywhere in the id or label. Folders whose children match are kept (with the matching descendants visible).

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Two items with the same `id` in the same menu. | Save validation fails. | Pick a unique id; the inspector flags duplicates inline. |
| `parent` references an item that doesn't exist. | Save validation fails ("unknown parent"). | Pick a parent from the dropdown — only valid ids are listed. |
| Parent cycle (A → B → A). | Save validation fails ("parent cycle"). | The tree editor's indent/outdent never creates a cycle; only direct TOML edits do. |
| Leaf without a `target`. | Save validation fails. | Set `target` in the Inspector. |
| Folder with `target` set. | Save validation fails ("folder cannot carry target"). | Either remove the target or set a non-folder type. |
| `dashboard` or `page` leaf with a `connector`. | Save validation fails. | These two leaf types don't carry a connector; leave the field blank. |
| Renaming an item without checking *Find usages*. | Another connector's `home` or another menu's reference breaks silently. | Always check Find usages before renaming. |

---

## What's next

- [Item types](./item-types.md) — what `query` / `endpoint` / `dashboard` / `page` open and the fields they take.
- [Permissions and roles](./permissions-and-roles.md) — the `roles` filter and how the menu prunes for each user.
- [Translations and icons](./translations-and-icons.md) — `l.fr`, `l.de`, icon picking.
