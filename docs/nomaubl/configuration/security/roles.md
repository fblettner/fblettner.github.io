---
title: Roles
description: "Manage NomaUBL roles: row-based grants stored in F564254, per-feature checkboxes (Settings access, Read-only mode), an add-row Companies table, and an Allowed Pages checklist with friendly labels reused from the sidebar i18n keys. Card list with copy / delete actions, expandable edit panel, Members tab listing every user assigned to the role."
keywords: [NomaUBL, roles, permissions, RBAC, F564254, PMROLE, PMCRAPPID, page permissions, settings access, read-only, companies, copy role, JD Edwards, SAP, NetSuite]
---

# Roles

This screen manages NomaUBL's **role-based access control**. Each role bundles four kinds of grant: a list of **pages** the role can reach, a list of **companies** the role is scoped to, a list of **features** (settings access, read-only mode), and the **members** assigned to the role.

Roles are application-wide and source-agnostic — they apply equally whether NomaUBL is plugged into JD Edwards, SAP, NetSuite or a custom ERP. Default roles (`admin`, `viewer`) are seeded by the **Initialize Database** action in *Database Connectors → NomaUBL*.

:::info[Refreshed in 2026.05.5]
The roles model went from CSV columns to row-based grants:

- **`F564254` permissions table** — each grant is a row keyed by type (`page` / `company` / `feature`). The four CSV columns `RLPAGES` / `RLCOMPANIES` / `RLSETTINGS` / `RLREADONLY` on `F564251` are gone. Adding a new permission dimension is now an INSERT, not a DDL change.
- **Editor redesign** — card list with **copy** and **delete** actions per role, expanded edit panel with per-feature checkbox + helper text, **companies as an add-row table** (no more comma-separated text), *Allowed Pages* with **friendly labels** (i18n `nav.*` keys reused from the sidebar) plus the page id beside it in muted monospace.
- **Idempotent bootstrap** — dropping `F564254` and re-running *Initialize Database* re-seeds the default `admin` and `viewer` grants without touching existing role rows. The log reports the count of newly-inserted grants.
- **Sessions table** — `F564252` columns aligned to JDE conventions (`SSLSID` UUID token, `SSUSER`, `SSSTDTIM` start time, `SSETDTIM` end time). `F564251` keeps identity only.
:::

---

## Opening the editor

- Sidebar → **Configuration → Security → Roles**.
- The page opens with every existing role as a card. Click any card to expand the edit panel below the list. Use **+ New Role** at the top right to start from scratch — the same edit panel opens with the **Name** field unlocked.

---

## At a glance

<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="role-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="role-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="role-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="660" rx="14" fill="url(#role-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#role-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ New Role</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="540" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="108" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">admin</text>
  <text x="316" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Full access — settings, all pages, all companies</text>
  <text x="600" y="108" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">2 users</text>
  <rect x="652" y="96" width="48" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="676" y="107" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Admin</text>
  <rect x="708" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="719" y="108" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="734" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="745" y="108" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="130" width="540" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="260" y="154" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">operator</text>
  <text x="316" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Day-to-day operations — invoices, e-reporting</text>
  <text x="600" y="154" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">5 users</text>
  <rect x="652" y="142" width="48" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="676" y="153" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="708" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="719" y="154" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="734" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="745" y="154" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="180" width="540" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="204" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">viewer</text>
  <text x="316" y="204" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Read-only walk-through for auditors</text>
  <text x="600" y="204" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 users</text>
  <rect x="652" y="192" width="48" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="676" y="203" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="708" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="719" y="204" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="734" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="745" y="204" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="240" width="540" height="430" rx="10" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1.2"/>

  <rect x="240" y="240" width="540" height="36" fill="rgba(255,255,255,0.03)"/>
  <line x1="240" y1="276" x2="780" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <line x1="316" y1="240" x2="316" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <text x="278" y="262" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">🛡 Permissions</text>
  <line x1="252" y1="274" x2="304" y2="274" stroke="#4a9eff" strokeWidth="2"/>
  <text x="356" y="262" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Members (5)</text>

  <text x="262" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="262" y="304" width="498" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="321" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Day-to-day operations — invoices, e-reporting</text>

  <text x="262" y="354" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Features</text>
  <rect x="262" y="364" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="282" y="375" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Settings access</text>
  <text x="282" y="388" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Can open the Settings page (template / connector editing)</text>
  <rect x="262" y="404" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="282" y="415" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Read-only mode</text>
  <text x="282" y="428" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">No edit / delete / resend actions, even on permitted pages</text>

  <text x="262" y="456" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Companies</text>
  <text x="328" y="456" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(empty list = all companies)</text>
  <rect x="262" y="466" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="483" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="388" y="466" width="22" height="26" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="399" y="483" fill="#f87171" fontSize="11" textAnchor="middle">×</text>
  <rect x="262" y="498" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="515" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">00007</text>
  <rect x="388" y="498" width="22" height="26" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="399" y="515" fill="#f87171" fontSize="11" textAnchor="middle">×</text>
  <rect x="262" y="530" width="120" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="322" y="547" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add company</text>

  <text x="262" y="582" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Allowed Pages</text>
  <text x="356" y="582" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(empty = all pages allowed)</text>
  <rect x="500" y="572" width="40" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="520" y="586" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">All</text>
  <rect x="546" y="572" width="48" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="570" y="586" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">None</text>

  <line x1="262" y1="600" x2="760" y2="600" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="616" fill="#64748b" fontSize="9" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">NAVIGATION</text>
  <text x="370" y="616" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">uncheck all</text>

  <rect x="262" y="624" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269" y="635" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="282" y="635" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Dashboard</text>
  <text x="346" y="635" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">dashboard</text>

  <rect x="416" y="624" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="423" y="635" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="436" y="635" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">E-Invoicing</text>
  <text x="500" y="635" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">invoices</text>

  <rect x="566" y="624" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="573" y="635" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="586" y="635" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="660" y="635" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">notifications</text>

  <rect x="262" y="650" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269" y="661" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="282" y="661" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">E-Reporting</text>
  <text x="350" y="661" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ereporting</text>

  <rect x="416" y="650" width="14" height="14" rx="3" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="436" y="661" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">e-Directory</text>
  <text x="500" y="661" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">edirectory</text>

  <rect x="566" y="650" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="573" y="661" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="586" y="661" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Integration Errors</text>
  <text x="676" y="661" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">integrationerrors</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Card list</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy / delete per role</text>
  <line x1="200" y1="115" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit panel</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Permissions / Members tabs</text>
  <line x1="820" y1="256" x2="780" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-feature checkboxes</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">helper text under each label</text>
  <line x1="200" y1="376" x2="240" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="20" y="490" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="505" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Companies — add-row</text>
  <text x="30" y="518" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no more comma-separated text</text>
  <line x1="200" y1="506" x2="240" y2="498" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="820" y="640" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="655" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Friendly labels</text>
  <text x="830" y="668" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">i18n nav.* + page id beside</text>
  <line x1="820" y1="656" x2="780" y2="656" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>
</svg>

---

## Roles list

The top of the page lists every existing role as a card.

| Element | Description |
|---|---|
| **Name** | Internal identifier of the role (e.g. `admin`, `operator`, `viewer`). Used to bind users to the role from the Users editor. |
| **Description** | Free-text human-readable summary. |
| **Member count** | Number of users currently assigned to the role. |
| **Badge** | `Admin` when the role has the *Settings access* feature, `User` otherwise. Quick read of the role's reach. |
| **⎘ Copy** | Duplicates the role: pre-fills the edit panel with all grants of the source role; the *Name* field is empty for the user to choose a new one; the description gets `(copy)` appended. |
| **🗑 Delete** | Removes the role after confirmation. Users assigned to it lose every permission until reassigned. |

Click any card to open the **Edit panel** below the list. Use **+ New Role** at the top right to create a new role from scratch.

---

## Edit panel — Permissions tab

### Identity

| Field | Description |
|---|---|
| **Name** | *(visible only when creating)* Internal identifier of the role. Must be unique. |
| **Description** | Human-readable summary shown in the role list. |

### Features

A short list of binary feature flags. Each row carries a checkbox plus a one-line helper that explains what the flag does.

| Feature | Helper text | Effect |
|---|---|---|
| **Settings access** | *Can open the Settings page (template / connector editing).* | Opens the entire Configuration menu. The role is then displayed with the `Admin` badge in the list. |
| **Read-only mode** | *No edit / delete / resend actions, even on permitted pages.* | Members can browse the application but every write action is disabled — useful for auditors / observers. |

### Companies

An add-row table of company codes (`KCO`) the role is scoped to. Each row carries a free-form input and a **×** button to remove it; **+ Add company** at the bottom appends a new row.

- **Empty list = all companies.** This is the typical default — leaving the table empty grants the role access to every company in the database.
- Adding even one row restricts the role to just the listed companies.
- The placeholder hint reads *KCO code (e.g. 00001)* and the input uses a monospace font to make typos easier to spot.

### Allowed Pages

A grouped checklist mirroring the application's left-hand navigation. Each page checkbox shows the **friendly label** (the same i18n `nav.*` key the Sidebar uses) plus the **page id** in muted monospace beside it — so the row stays informative when localised yet still searchable by id.

| Group | Pages |
|---|---|
| **Navigation** | `dashboard`, `invoices`, `ereporting`, `edirectory`, `notifications`, `integrationerrors`, `processinglog` |
| **Processing** | `fetchinput`, `import`, `retrievestatuses` |
| **Operations** | `process`, `extractandprocess`, `processapi` |
| **UBL** | `validate`, `xsleditor`, `xmlviewer`, `ubldefaults` |
| **Extract** | `extractbip` *(JD Edwards-specific)*, `extract`, `extractftp` |
| **Documentation** | `releasenotes`, `statusreference`, `reasoncodes`, `ublreference`, `xref` |
| **Management** | `documents`, `pdftemplates`, `actions`, `notificationrules`, `fileversions` |

Helpers:

- **All** / **None** buttons above the groups — instantly grant or revoke every page.
- Per-group checkbox + **check all / uncheck all** toggle — flip an entire group in one click.
- A group's checkbox shows an **indeterminate state** when only some of its pages are selected.
- **Empty list = all pages allowed.** Same convention as the Companies field: an unfiltered role sees everything.

### Save / Cancel

- **Create** *(when creating)* / **Save** *(when editing)* persists the role and refreshes the list.
- **Cancel** discards changes and closes the panel.
- Inline status messages appear below the panel (`Role created`, `Role updated`, `Role deleted`, error messages).

---

## Edit panel — Members tab

Available only when editing an existing role (hidden during creation).

Lists every user currently bound to the role:

| Column | Description |
|---|---|
| **Username** | The user's login. |
| **Full name** | The user's display name (or `–` when not set). |
| **Status** | `Active` (green) or `Inactive` (red). |

This view is **read-only** — to add or remove a user from a role, edit the user from *Configuration → Security → Users*.

---

## How grants are stored

In 2026.05.5 the four CSV columns on `F564251` were replaced by a dedicated row-based grants table.

```text
F564254
  PMROLE       — role name (FK to F564251.RLNAME)
  PMCRAPPID    — grant type: 'page' / 'company' / 'feature'
  PMCRAPPVAL   — grant value: a page id, a KCO code, or a feature flag
  PMENABL      — '1' enabled / '0' disabled (used during dialect-specific bootstrapping)
```

Saving the role from the editor writes one row per page, one row per company, and one row per feature. Adding a future permission dimension (e.g. per-document-type access) becomes an INSERT in this same table — no DDL change required.

The bootstrap is **idempotent**: dropping `F564254` and re-running *Initialize Database* re-seeds the default `admin` and `viewer` grants without touching role rows. The init log reports the count of newly-inserted grants for visibility.

---

## Delete a role

Clicking the **🗑** icon on a role card opens a confirmation modal:

> *Delete role "X"? Users assigned to this role will lose their permissions.*

Confirming removes the role and every grant row in `F564254` keyed by it. Users previously bound to the role keep their account but lose every permission until they are reassigned to another role.

---

## Tips & best practices

- **Create one role per profile, not per individual.** `operator`, `auditor`, `admin` are simpler to maintain than per-user roles.
- **Grant *Settings access* sparingly.** It opens the entire Configuration menu — limit it to a small admin group.
- ***Read-only mode* is ideal for compliance / audit accounts.** Combined with *Settings access* off, it provides a non-destructive walk-through of the system.
- **Use the Companies table to enforce multi-tenant isolation.** Leaving the table empty defeats company-level filtering for the role.
- **Use Copy when forking a role.** Starting from an existing role with one or two grants flipped is much faster than rebuilding the checklist from scratch — and the result is closer to the source role's intent.
- **Re-run *Initialize Database*** *(Database Connectors → NomaUBL)* if the default `admin` or `viewer` grants are missing — it re-seeds the rows without touching custom roles.
- **Delete a role only after re-binding its members.** Once deleted, members lose access to everything until reassigned. The Members tab is the fastest way to check who would be affected.
