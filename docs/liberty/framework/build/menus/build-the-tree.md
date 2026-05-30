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

Above the tree:

| Button | What it does |
|---|---|
| **＋ Folder** | Adds a folder at the top level (or as a child of the selected item, depending on the implementation). The folder is the only item kind without a `type`. |
| **＋ Item** | Adds a leaf, same scope. The leaf opens by default as a `query` type — change it in the Inspector. |
| **⎘ Clone** | Duplicates the selected item (subtree included). Prompts for a new id. Disabled when nothing is selected. |
| **🔗 Find usages** | Opens a modal listing every place this menu item is referenced (e.g. another connector's `home` field). Helps before a rename / delete. Disabled when nothing is selected. |

The scope bar above the toolbar carries the page-wide *Discard* / *Save* — the same as every Settings page.

---

## The tree rows

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="tr-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#tr-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Menus · [menus.crm] · tree</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="98" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Filter 7 items…</text>

  <rect x="40" y="118" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="56" y="138" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 🛡 Security <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  security</tspan></text>

  <rect x="40" y="154" width="920" height="30" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="76" y="174" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">📄 Users <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  security.users</tspan></text>
  <rect x="760" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="771" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="784" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="795" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="808" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="819" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <rect x="832" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="843" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <rect x="856" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="867" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋</text>
  <rect x="880" y="158" width="22" height="22" rx="3" fill="rgba(239,68,68,0.10)"/>
  <text x="891" y="173" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="190" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="76" y="210" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Roles <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  security.roles</tspan></text>

  <rect x="40" y="226" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="56" y="246" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 💼 Pipeline <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  pipeline</tspan></text>

  <rect x="40" y="262" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="76" y="282" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Customers <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  pipeline.customers</tspan></text>

  <rect x="40" y="298" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="76" y="318" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Deals dashboard <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  pipeline.deals_dashboard</tspan></text>
</svg>

Each row carries:

| Element | What it shows |
|---|---|
| Indent | Visual depth — each level is 16 pixels in. |
| Chevron | ▾ for an expanded folder, ▸ for collapsed. |
| Icon | The item's `icon` (Lucide name). Folders default to a folder icon; leaves default to a file icon. |
| Label | The `label` field. |
| Id | Monospace, muted, after the label. Fades out on hover to make room for the actions. |
| Per-row actions (hover) | *Move up* (↑), *Move down* (↓), *Indent* (→), *Outdent* (←), *Add child* (＋), *Delete* (🗑). |

Click anywhere on the row to **select** the item — the Inspector on the right loads its full form.

---

## The per-row actions

The icons that appear on hover, left to right:

| Action | What it does |
|---|---|
| **↑ Move up** | Swap with the previous sibling. Disabled when the item is the first child of its parent. Moves the whole subtree together — child links follow. |
| **↓ Move down** | Swap with the next sibling. Disabled at the end. |
| **→ Indent** | Reparent the item under the previous sibling. The previous sibling becomes the new parent. Disabled when there's no previous sibling. |
| **← Outdent** | Move the item up one level — its grand-parent becomes the new parent. Disabled when the item is already at the top level. |
| **＋ Add child** | Add a leaf as a child of this item (works on folders; on leaves it'll convert intent — typically add as next sibling, not child). |
| **🗑 Delete** | Remove the item **and its whole subtree** after a confirm modal. The descendant items are dropped in the same operation. |

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

Click on a folder row to select it, then **＋ Item** (or the per-row *＋ Add child*). The new leaf appears under the folder. Set its `type`, `connector`, `target` in the Inspector — see [Item types](./item-types.md).

### Step 3 — Reorder

Use ↑ / ↓ on each row to put items in the order the user should see. The order in the tree = the order in the rendered sidebar.

### Step 4 — Nest where needed

Use → (Indent) to push an item under the previous sibling — useful when a folder grows long and you need a sub-folder. Use ← (Outdent) to pull it back out.

### Step 5 — Save

The page-level **Save** validates the whole menu (unique ids, parents exist, no cycles) and writes `menus.toml`. The hot reload picks up the changes; the user's next page load shows the new tree.

---

## The Inspector form

Click a row → the Inspector on the right loads a form for the selected item. The fields adapt to the `type`:

| Field | Always shown | Notes |
|---|---|---|
| `id` | Yes | Renaming here updates every child's `parent` reference automatically. Cross-file references (e.g. another connector's `home` pointing at this item) need a manual fix — use *Find usages* first. |
| `parent` | Yes | A SearchSelect populated with the valid candidates. The tree's indent/outdent actions mutate this field too. |
| `label` | Yes | The sidebar text. |
| `l` (Translations tab) | Yes | Per-language overrides. See [Translations and icons](./translations-and-icons.md). |
| `icon` | Yes | Lucide icon name. |
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
2. **Cross-file**: a connector's `home` field, or another menu's item that references this one, doesn't update. Use **Find usages** (the toolbar button) before renaming to see every place that references the item.

For a heavy rename, the safe pattern is **Find usages → Clone → fix references → delete the old one** — the new id can take over while every reference is updated.

---

## Cloning an item

The **⎘ Clone** toolbar button duplicates the selected item:

- The whole subtree is cloned (a folder with children clones every descendant).
- The new ids are prompted from a modal — the default is the old id with a suffix.
- Cross-file references are **not** rewritten — the clones are brand-new items nobody references yet.

Useful when:

- You're building a variant of a section (e.g. `reports` for managers, `reports_admin` for admins).
- The same shape applies to two apps and you copy-pasted the tree.
- You want a sandbox version to experiment with.

---

## Deleting an item

The 🗑 icon (per-row) or the keyboard Delete key on a selected row opens a confirm modal: *Delete '\<name\>' **and** its descendants?*. Confirming removes the item plus every child, grandchild, etc.

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
