---
title: Menus
description: "The sidebar tree — folders, leaves, permissions. Built from Settings → Menus with a drag-and-drop tree editor; every leaf points at a screen, dashboard, endpoint or external page, and the tree is pruned per caller against their effective permissions."
keywords: [Liberty Framework, menu, sidebar, navigation, permission, folder, leaf, screen, dashboard, endpoint, settings, workspace]
---

# Menus

The **menu** is the sidebar tree the user sees on the left of every page — folders, leaves, icons, badges. The framework treats menus per app: each app's menu defines its workspace, and the workspace selector at the top of the header switches between them.

Menus are built and edited in **Settings → Menus** with a drag-and-drop tree editor. Each leaf points at one of five targets — a screen, a dashboard, a connector endpoint, a custom page or an external link — and is **pruned per caller** so users only see the entries their permissions actually unlock.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mn-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="mn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#mn-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">From editor to rendered sidebar — and the per-caller prune</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="260" height="160" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="190" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EDITOR — Settings → Menus</text>
  <text x="80" y="152" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📂 Billing</text>
  <text x="100" y="172" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Invoices</text>
  <text x="100" y="190" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Credit notes</text>
  <text x="100" y="208" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Overview dashboard</text>
  <text x="80" y="232" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📂 Admin</text>
  <text x="100" y="248" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Settings</text>

  <rect x="380" y="100" width="280" height="160" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="520" y="124" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERMISSION FILTER</text>
  <text x="520" y="160" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">caller has: viewer</text>
  <text x="520" y="186" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen:billing:invoices  ✓</text>
  <text x="520" y="202" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen:billing:credit_notes  ✓</text>
  <text x="520" y="218" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">dashboard:billing-overview  ✓</text>
  <text x="520" y="234" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen:admin:settings  ✕</text>

  <rect x="720" y="100" width="220" height="160" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RENDERED SIDEBAR</text>
  <text x="740" y="160" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📂 Billing</text>
  <text x="760" y="180" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Invoices</text>
  <text x="760" y="198" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Credit notes</text>
  <text x="760" y="216" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Overview</text>
  <text x="830" y="252" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">empty Admin folder hidden</text>

  <line x1="320" y1="180" x2="380" y2="180" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>
  <line x1="660" y1="180" x2="720" y2="180" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>
</svg>

---

## Settings → Menus

The page lists every menu on the install — one per app (`billing`, `crm`, `nomajde`…), plus the special `_default` menu for framework-wide entries. Clicking a row opens the **tree editor** on the right.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Menus → billing</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Preview as ▾</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save & reload</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '50% 50%', minHeight: '240px'}}>
    <div style={{padding: '14px 16px', borderRight: '1px solid rgba(255,255,255,0.05)'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Tree</div>
      <div style={{fontSize: '11px', lineHeight: '1.8'}}>
        <div style={{opacity: 0.5, marginRight: '6px', display: 'inline-block'}}>⋮⋮</div>📂 <b>Billing</b>
        <div style={{paddingLeft: '24px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📄 Invoices</div>
        <div style={{paddingLeft: '24px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.30)', borderRadius: '4px', paddingTop: '2px', paddingBottom: '2px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📄 Credit notes</div>
        <div style={{paddingLeft: '24px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📊 Overview</div>
        <div style={{opacity: 0.5, marginRight: '6px', display: 'inline-block'}}>⋮⋮</div>📂 <b>Admin</b>
        <div style={{paddingLeft: '24px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📄 Settings</div>
      </div>
      <div style={{marginTop: '12px'}}><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Add folder</span> <span style={{marginLeft: '6px', padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Add leaf</span></div>
    </div>
    <div style={{padding: '14px 16px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Leaf editor — Credit notes</div>
      <div style={{display: 'grid', gridTemplateColumns: '110px 1fr', rowGap: '8px', columnGap: '10px', alignItems: 'center'}}>
        <div style={{opacity: 0.75}}>Label</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Credit notes</span></div>
        <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '3px 8px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '11px', fontWeight: 600}}>Screen ▾</span></div>
        <div style={{opacity: 0.75}}>Screen</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing/credit_notes ▾</span></div>
        <div style={{opacity: 0.75}}>Icon</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>file-x ▾</span></div>
        <div style={{opacity: 0.75}}>Badge</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>—</span></div>
        <div style={{opacity: 0.75}}>Roles</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Any</span></div>
      </div>
    </div>
  </div>
</div>

The **tree editor** on the left supports drag-and-drop: re-order siblings, drop a leaf into a folder, drop a folder into another folder. Selection highlights the entry whose details appear in the **leaf editor** on the right.

---

## Tree controls

| Control | Effect |
|---|---|
| **⋮⋮ grip** on each row | Drag handle. Drop on a sibling to reorder, on a folder to nest inside, on the trash zone (at the bottom) to delete. |
| **+ Add folder** | Inserts an empty folder under the current selection. The folder editor opens in the leaf-editor panel — only *Label* and *Icon* fields. |
| **+ Add leaf** | Inserts a new leaf under the current selection. The leaf editor opens — see [Leaf editor](#leaf-editor). |
| **✕** on a row | Deletes the entry. A confirmation appears for folders that contain leaves. |
| **▼ / ▶ chevron** | Collapse / expand a folder in the tree (doesn't affect the saved order). |

The toolbar's **Preview as ▾** dropdown re-renders the tree as a specific role would see it after pruning — a quick way to confirm a viewer doesn't see admin entries.

---

## Leaf editor \{#leaf-editor}

The right panel exposes the fields for the currently-selected leaf:

| Field | Effect |
|---|---|
| **Label** | Display label shown in the sidebar. Localised through the dictionary. |
| **Type** | What the leaf opens — see [Leaf types](#leaf-types) below. Each type re-shapes the sub-form. |
| **Icon** | A [Lucide icon](https://lucide.dev/icons) name. Defaults to a sensible icon per type. |
| **Badge** | Optional. Static text ("New", "Beta") or a connector query name that returns a number (e.g. an unread-notifications count). |
| **Roles** | Optional. Restricts visibility to a list of roles — soft fence (UX). The **permission check** on the underlying screen / endpoint is the hard fence. |
| **Description** | Free text — appears as the leaf's tooltip on hover. |

Below the common fields, the *Type*-specific sub-form appears.

---

## Leaf types \{#leaf-types}

Five types are supported.

### Screen

| Field | Effect |
|---|---|
| **Screen** | Dropdown of screens defined under [Settings → Screens](./screens.md). The dropdown is filtered to the app the menu belongs to. |

The leaf opens the screen's grid + edit dialog. Permission code derived: `screen:<app>:<screen_id>`.

### Dashboard

| Field | Effect |
|---|---|
| **Dashboard** | Dropdown of dashboards defined under [Settings → Dashboards](./dashboards.md). |

The leaf opens the dashboard layout. Permission code derived: `dashboard:<id>`.

### Endpoint

| Field | Effect |
|---|---|
| **Connector** | Dropdown of HTTP / API connectors. |
| **Endpoint** | Dropdown of named endpoints on the picked connector. |
| **Parameters** | Optional default values for the endpoint's parameters. |

The leaf opens an **endpoint runner** page that shows the request shape, lets the user fill in parameters and renders the response. Permission code derived: `api:<connector>:<endpoint>`.

### Page (custom React route)

| Field | Effect |
|---|---|
| **Slug** | The URL slug under which the page is registered. Pages are React components shipped by the framework or a plugin — extension point for fully custom UI. |

Use sparingly — most menu leaves should map to a screen or a dashboard. Custom pages don't pick up the framework's standard chrome (filters, grid, dialog) and cost more to maintain.

### Link (external URL)

| Field | Effect |
|---|---|
| **URL** | External URL. Opens in a new browser tab. |

Useful for cross-referencing related apps, documentation, support portals. No permission gate — visible to anyone who can see the parent folder.

---

## Permission pruning

Every leaf carries an implicit permission code derived from its *Type* and target. At render time, the framework filters the tree:

| Caller has the permission? | Effect |
|---|---|
| **Yes** | Leaf renders normally. |
| **No** | Leaf is hidden. |
| **A folder ends up empty after pruning** | Folder is hidden too. |
| **A folder with at least one visible leaf** | Folder renders. |

The pruning is **silent** — there's no "you can't see this" message. The reason: a clean sidebar feels intentional, an "access denied" placeholder feels broken.

Two layers stack:

1. **`Roles` field on the leaf** — soft fence. Useful when two leaves point at the same screen but you want one labelled differently per role; the *Roles* field hides each leaf from non-matching callers, but a hand-typed URL still works (the permission gate downstream is what stops it).
2. **Permission code derived from the target** — hard fence. The framework refuses the underlying call from a caller without the right code, regardless of how they got there.

For most use cases, the permission code is enough — leave *Roles* empty.

---

## Workspace selector

Every menu is per-app. The header's workspace selector lists every app the caller has at least one visible leaf in, sorted by the *Order* field of the [app metadata](./apps/overview.md). Switching workspace swaps the sidebar to that app's menu.

A user with only one accessible app sees no selector — the framework defaults straight to that workspace.

---

## Saving and hot-reload

*Save & reload* writes the change and broadcasts a Socket.IO event to every connected client; the sidebar re-renders **immediately**, without a refresh. In-flight requests aren't affected.

The Settings UI's **Preview as ▾** dropdown is a useful sanity check before *Save* — flip to a viewer role and confirm the right entries appear.

---

## Tips & best practices

- **Group leaves by entity, not by frequency.** A *Billing* folder with everything billing-related is easier to navigate than a "Daily" folder mixing entities.
- **Use icons sparingly.** Icons are visual anchors for the **operator's** memory — a few well-chosen ones beat one icon per leaf.
- **Don't rely on the *Roles* field.** It's a UX nicety; the permission code on the target is what makes things safe. Keep the role-fencing logic in *Settings → Roles* instead, so it's all in one place.
- **Use badges for dynamic counts.** A *Pending approvals* badge that shows the live count from a connector query nudges the operator to act — much better than a static label.
- **Preview as the most restricted role before saving.** The fastest way to catch an accidentally-public admin leaf.

---

## Under the hood

Menu definitions are stored in `liberty-apps/config/menus.toml`. Operators **do not edit this file by hand** in normal operation; the tree editor is the canonical interface. The *Raw TOML* tab is the escape hatch for advanced edits the builder doesn't cover.

---

## What's next

- [Screens](./screens.md) — where the *Screen* leaf type points.
- [Dashboards](./dashboards.md) — where the *Dashboard* leaf type points.
- [Roles & permissions](./auth/roles-permissions.md) — the codes the pruning checks against.
- [Apps](./apps/overview.md) — the workspace selector that switches between menus.
