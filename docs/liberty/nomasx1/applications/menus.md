---
title: Menus
description: "Application menu tree, level by level, with the JDE objects each leaf launches and the licence component they belong to."
keywords: [Nomasx-1, applications, menus, menu tree, JDE menus, licence component]
---

# Menus

The **Menus** screen lists every application menu entry known to Nomasx-1. One line per leaf — i.e. the action a user can actually launch from the source-system menu. Each row carries the full hierarchy of parent menus, the technical object the leaf invokes, and the licence component the object falls under.

The screen is what you open to *understand the navigation* of a connected application from a security perspective: what is reachable from where, under which licence weight.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mnu-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#mnu-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Menus</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROOT</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL 1</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL 2</text>
  <text x="610" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="810" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Daily Processing</text>
  <text x="610" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="730" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="810" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Setup</text>
  <text x="610" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="730" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0401A</text>
  <text x="810" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G42</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Sales Order Mgmt</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Sales Order Inquiries</text>
  <text x="610" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="730" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W4210E</text>
  <text x="810" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 4 280 menu leaves · 7 licence components</text>
</svg>

---

## Goal of the view

For each menu leaf in a connected application, answer three questions:

- **What does the leaf launch?** Object, form and version — the three values the source system needs to open the screen.
- **Where does it live?** Root + up to 9 nested levels — the breadcrumb that explains *how* a user gets there.
- **What licence does it consume?** The component groups the underlying object into a billable bucket — see *Licenses → JD Edwards* for the volume rules.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `MENU_APPS_ID` — application identifier from the source system. Filterable. | Which application the menu belongs to. |
| **Root** | `MENU_ROOT` — top-level menu identifier (e.g. `G0911`). Filterable. | The role-level entry point. |
| **Object** | `MENU_OBJECT` — technical object launched (program, application, batch). Filterable. | What the leaf actually calls. |
| **Form** | `MENU_FORM` — form code within the object. | The specific form (interactive screen) within the program. |
| **Version** | `MENU_VERSION` — processing version. | Configuration variant used at runtime. |
| **Component** | `CPT_ID` — licence component the object falls under. Filterable. | The billable bucket — drives licence reporting. |
| **Menu ID** | `MENU_ID` — task identifier on the leaf. Filterable. | Source-system task code (e.g. JDE menu task ID). |
| **Level 1 … Level 3** | `MENU_LEVEL1`, `MENU_LEVEL2`, `MENU_LEVEL3` — nested labels. Level 1 is filterable. | First three depths of the breadcrumb. |
| **Level 4 … Level 10** | `MENU_LEVEL4` … `MENU_LEVEL10`. | Deeper levels — hidden by default but stored on the row for downstream screens. |

Hidden columns kept on the row: `MENU_SEQ_UKID` (stable sequence), `MENU_REFRESH` (last sync), `MENU_UKID` (technical id).

:::info[JDE-specific]
On JD Edwards EnterpriseOne, the menu tree is read directly from the JDE Solution Explorer tables. `Object`, `Form` and `Version` are the canonical JDE triplet to launch an interactive application or a batch UBE. The licence component is derived from the JDE System Code mapping (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`).
:::

---

## Context menu

Right-click a row to open the row menu.

| Action | Where it lands |
|---|---|
| **Display Users** | List of users that can reach the selected menu leaf. |
| **Display Roles** | List of roles that grant access to the selected menu leaf. |

---

## Tips & best practices

- **Filter by *Level 1*** to focus on a single business area (Accounts Payable, Sales Order Mgmt, etc.) before tackling its security review.
- **Filter by *Component*** to bring up every menu entry that consumes a specific licence — useful before re-negotiating module volumes.
- **Filter by *Object*** to find every place a given program is exposed in the menu tree. A program reachable from multiple roots may need different security rules per entry point.
- **Cross-reference with *Rights / Roles*** to confirm which roles grant access to each menu leaf.
