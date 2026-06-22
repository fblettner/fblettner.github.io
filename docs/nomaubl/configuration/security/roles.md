---
title: Roles
description: "Manage NomaUBL roles: row-based grants stored in F564254 across four tabs — Access (pages + dashboard cards + features), Actions (per-action whitelist), Data scope (companies + row filters), Members. Card list with copy / delete, friendly page labels from the sidebar i18n, granular per-button action grants and column-based row filters that gate the list views, the per-row endpoints and the rendered PDF stream."
keywords: [NomaUBL, roles, permissions, RBAC, F564254, PMROLE, PMCRAPPID, page permissions, action whitelist, row filter, dashboard cards, settings access, read-only, companies, copy role, JD Edwards, SAP, NetSuite]
---

# Roles

This screen manages NomaUBL's **role-based access control**. Each role bundles four kinds of grant:

- A list of **pages** the role can reach (plus a list of **dashboard cards** visible to it).
- A per-action **whitelist** of operations the role is allowed to perform (Edit, Delete, Resend, Push status…).
- A **data scope** — the companies the role is restricted to **and** optional row filters that narrow the visible rows by column value.
- The **members** assigned to the role.

Roles are application-wide and source-agnostic — they apply equally whether NomaUBL is plugged into JD Edwards, SAP, NetSuite or a custom ERP. Default roles (`admin`, `viewer`) are seeded by the **Initialize Database** action in *Database Connectors → NomaUBL*.

:::info[Refreshed in 2026.06.21]
The editor has been reorganised around purpose-built tabs and the grant model now goes much finer than pages and read-only:

- **Four tabs** — *Access* (pages, dashboard cards, features), *Actions* (the new per-button whitelist), *Data scope* (companies + row filters), *Members*. The role *Name* and *Description* sit above the tab bar so they stay visible from any tab.
- **Granular action permissions** — the old all-or-nothing `readonly` flag is replaced by an explicit whitelist over Invoices, E-Reporting and Integration ops. A role with no whitelist set continues to allow every action (legacy behaviour); turning the whitelist on pre-populates with everything so the role does not suddenly lose actions.
- **Role-level row filters** — pick a column (e.g. the invoice's customer alpha key `UHALKY`) and one or more values; the filter applies to the list views, the dashboard, every per-row endpoint and the rendered PDF stream. Multiple values on the same column are combined as OR; filters on different columns combine as AND, side-by-side with the existing Companies grant.
- **Per-card dashboard whitelist** — each dashboard widget is its own permission. An empty list shows every card (existing behaviour); a populated list is a strict whitelist and hidden cards never run their SQL nor reach the wire.
:::

---

## Opening the editor

- Sidebar → **Configuration → Security → Roles**.
- The page opens with every existing role as a card. Click any card to expand the edit panel below the list. Use **+ New Role** at the top right to start from scratch — the same edit panel opens with the **Name** field unlocked.

---

## At a glance

<svg viewBox="0 0 1040 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="role-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="role-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="role-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="620" height="720" rx="14" fill="url(#role-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <rect x="740" y="30" width="80" height="22" rx="5" fill="url(#role-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="780" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ New Role</text>
  <line x1="220" y1="68" x2="840" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="580" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="108" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">admin</text>
  <text x="316" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Full access — settings, all pages, all companies</text>
  <text x="630" y="108" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">2 users</text>
  <rect x="682" y="96" width="48" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="706" y="107" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Admin</text>
  <rect x="746" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="108" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="772" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="783" y="108" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="130" width="580" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="260" y="154" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">customer_acme</text>
  <text x="346" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">External customer — only their own invoices (UHALKY = 123456)</text>
  <text x="630" y="154" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 users</text>
  <rect x="682" y="142" width="48" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="706" y="153" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="746" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="154" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="772" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="783" y="154" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="180" width="580" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="204" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">operator</text>
  <text x="316" y="204" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Day-to-day operations — no delete, no DB status push</text>
  <text x="630" y="204" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">5 users</text>
  <rect x="682" y="192" width="48" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="706" y="203" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="746" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="204" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="772" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="783" y="204" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="240" width="580" height="490" rx="10" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1.2"/>

  <text x="262" y="262" fill="#cbd5e1" fontSize="10" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="262" y="270" width="538" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="287" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">External customer — only their own invoices (UHALKY = 123456)</text>

  <line x1="240" y1="310" x2="820" y2="310" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="310" width="580" height="34" fill="rgba(255,255,255,0.03)"/>
  <line x1="345" y1="310" x2="345" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <line x1="450" y1="310" x2="450" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <line x1="560" y1="310" x2="560" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <text x="292" y="331" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🛡 Access</text>
  <text x="397" y="331" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Actions</text>
  <text x="505" y="331" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">🔎 Data scope</text>
  <line x1="466" y1="342" x2="544" y2="342" stroke="#4a9eff" strokeWidth="2"/>
  <text x="600" y="331" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Members (3)</text>

  <text x="262" y="362" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Companies</text>
  <text x="334" y="362" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(empty list = all companies)</text>
  <rect x="262" y="372" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="389" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="428" y="372" width="22" height="26" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="439" y="389" fill="#f87171" fontSize="11" textAnchor="middle">×</text>
  <rect x="262" y="404" width="160" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="342" y="421" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add company</text>

  <text x="262" y="458" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Row filters</text>
  <text x="338" y="458" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(empty = no row restriction — combined with Companies via AND)</text>

  <rect x="262" y="468" width="538" height="120" rx="6" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="272" y="478" width="280" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="282" y="494" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Invoices › Customer alpha key</text>
  <text x="466" y="494" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">UHALKY</text>
  <rect x="556" y="478" width="22" height="24" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="567" y="494" fill="#f87171" fontSize="10" textAnchor="middle">×</text>

  <rect x="288" y="510" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="525" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">123456</text>
  <rect x="532" y="510" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="543" y="525" fill="#f87171" fontSize="10" textAnchor="middle">×</text>

  <rect x="288" y="538" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="553" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">789012</text>
  <rect x="532" y="538" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="543" y="553" fill="#f87171" fontSize="10" textAnchor="middle">×</text>

  <rect x="288" y="566" width="140" height="20" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="358" y="581" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">+ Add value (OR)</text>

  <rect x="262" y="600" width="140" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332" y="615" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add row filter</text>

  <line x1="262" y1="640" x2="800" y2="640" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="660" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontStyle="italic">Effective scope</text>
  <text x="262" y="678" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Company IN (00001) AND UHALKY IN (123456, 789012)</text>

  <rect x="262" y="696" width="80" height="26" rx="5" fill="url(#role-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="302" y="713" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Save</text>
  <rect x="350" y="696" width="80" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="713" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Card list</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy / delete per role</text>
  <line x1="200" y1="115" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="860" y="304" width="170" height="46" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="320" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four tabs</text>
  <text x="870" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Access · Actions · Data scope · Members</text>
  <line x1="860" y1="324" x2="820" y2="324" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="20" y="460" width="180" height="46" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="476" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row filter</text>
  <text x="30" y="490" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">column + values (OR); pairs of</text>
  <text x="30" y="501" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filters combine via AND</text>
  <line x1="200" y1="478" x2="262" y2="478" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="860" y="600" width="170" height="46" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="616" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Effective scope</text>
  <text x="870" y="630" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">live preview of the AND/OR</text>
  <text x="870" y="641" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">combination written to F564254</text>
  <line x1="860" y1="620" x2="820" y2="620" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>
</svg>

---

## Roles list

The top of the page lists every existing role as a card.

| Element | Description |
|---|---|
| **Name** | Internal identifier of the role (e.g. `admin`, `operator`, `customer_acme`). Used to bind users to the role from the Users editor. |
| **Description** | Free-text human-readable summary. |
| **Member count** | Number of users currently assigned to the role. |
| **Badge** | `Admin` when the role has the *Settings access* feature, `User` otherwise. Quick read of the role's reach. |
| **⎘ Copy** | Duplicates the role: pre-fills the edit panel with all grants of the source role; the *Name* field is empty for the operator to choose a new one; the description gets `(copy)` appended. |
| **🗑 Delete** | Removes the role after confirmation. Users assigned to it lose every permission until reassigned. |

Click any card to open the **Edit panel** below the list. Use **+ New Role** at the top right to create a role from scratch.

---

## Identity (always visible)

The role's **Name** *(visible only when creating)* and **Description** sit above the tab bar, so the operator never has to switch tabs to relabel a role.

| Field | Description |
|---|---|
| **Name** | Internal identifier of the role. Must be unique. Locked once created. |
| **Description** | Human-readable summary shown in the role list. |

---

## Tab — Access

Defines **what the role can reach**: features, pages and dashboard cards.

### Features

A short list of binary feature flags. Each row carries a checkbox plus a one-line helper that explains what the flag does.

| Feature | Helper text | Effect |
|---|---|---|
| **Settings access** | *Can open the Settings page (template / connector editing).* | Opens the entire Configuration menu. The role is then displayed with the `Admin` badge in the list. |
| **Read-only mode** | *No edit / delete / resend actions, even on permitted pages.* | Members can browse the application but every write action is disabled — overrides the *Actions* tab entirely. |

### Allowed Pages

A grouped checklist mirroring the application's left-hand navigation. Each page checkbox shows the **friendly label** (the same i18n `nav.*` key the Sidebar uses) plus the **page id** in muted monospace beside it — so the row stays informative when localised yet still searchable by id.

| Group | Pages |
|---|---|
| **Navigation** | `dashboard`, `techdashboard`, `invoices`, `vatdeclaration`, `ereporting`, `edirectory`, `notifications`, `integrationerrors`, `processinglog` |
| **Processing** | `fetchinput`, `import`, `retrievestatuses` |
| **Operations** | `process`, `extractandprocess`, `processapi` |
| **UBL** | `validate`, `xsleditor`, `xmlviewer`, `ubldefaults` |
| **Extract** | `extractbip` *(JD Edwards-specific)*, `extract`, `extractftp` |
| **Documentation** | `releasenotes`, `upgradehistory`, `statusreference`, `reasoncodes`, `ublreference`, `xref`, `apireference` |
| **Management** | `documents`, `pdftemplates`, `actions`, `notificationrules`, `dailydigest`, `autoretry`, `fileversions` |

Helpers:

- **All** / **None** buttons above the groups — instantly grant or revoke every page.
- Per-group **check all / uncheck all** toggle — flip an entire group in one click.
- A group's checkbox shows an **indeterminate state** when only some of its pages are selected.
- **Empty list = all pages allowed.** Same convention as the other lists: an unfiltered role sees everything.

### Dashboard cards

Each dashboard widget is an individual permission keyed by `dashboard.<card>`. The grouping below mirrors the dashboard layout:

| Group | Cards |
|---|---|
| **Hero metrics** | `dashboard.total`, `dashboard.inflight`, `dashboard.errors-tech`, `dashboard.errors-business` |
| **Charts & widgets** | `dashboard.pipeline`, `dashboard.volume`, `dashboard.recent`, `dashboard.stale`, `dashboard.error-rules`, `dashboard.per-company`, `dashboard.ereporting`, `dashboard.round-trip` |
| **Sections** | `dashboard.quick-actions` |

- **Empty list = every card visible** (legacy behaviour).
- A populated list is a strict whitelist — hidden cards are **skipped server-side**, so their SQL never runs and their data never reaches the wire.
- The same **All** / **None** / per-group toggles are available as on the Allowed Pages list.

---

## Tab — Actions

Defines **what the role can do** on the pages it can reach.

### Restrict toggle

| Toggle | Effect |
|---|---|
| **Off** *(default)* | Empty whitelist on the server — the role can perform every action allowed by its pages. Equivalent to the legacy behaviour. |
| **On** | Only the actions checked below are allowed. Switching on **pre-fills the list with every action** so the role does not suddenly lose access — uncheck from there. |

The helper text under the toggle states *Off (default) = role can perform every action allowed by its pages. On = only the checked actions below are allowed.*

The section header above the toggle reflects the current state:

- `(every action is allowed — no whitelist set)` when the toggle is off.
- `(N actions explicitly allowed — everything else is blocked)` when the toggle is on and N actions are checked.
- `(0 actions allowed — same effect as Read-only)` when the whitelist is on but empty.
- `(Read-only mode is on under Access — every action is blocked)` when the *Read-only* feature is on — the whole tab is greyed out.

**Check all** / **Uncheck all** buttons appear under the toggle (disabled when the whitelist is off).

### Action catalog

Grouped by the page where the button lives — the same key can power buttons on more than one page.

| Group | Action | Key | Effect |
|---|---|---|---|
| **Invoices** | Create | `invoice.create` | Dashboard *Quick action* and the *New invoice* button on the list. |
| **Invoices** | Edit | `invoice.edit` | Update invoice fields from the detail modal / edit panel. |
| **Invoices** | Delete | `invoice.delete` | Hard-delete an invoice and all its child records. |
| **Invoices** | Resend to PA | `invoice.resend` | Submit / re-submit an invoice (or a bulk batch) to the PA. |
| **Invoices** | Push status (PA) | `invoice.status.pa` | Send a status event through the PA — payment received, in dispute, etc. (the *Set Status* modal's *PA* tab). |
| **Invoices** | Push status (DB) | `invoice.status.db` | Directly update a status in the database, bypassing the PA — admin break-fix path used when the PA round-trip is broken. |
| **Invoices** | Validate UBL | `invoice.validate` | Run XSD + Schematron validation against the stored UBL XML (*Validate* button in the *History* tab). |
| **Invoices** | Download UBL | `invoice.download` | Read the raw UBL XML BLOB — the *Download UBL* button and the underlying `/xml` endpoint. |
| **Invoices** | Preset actions | `invoice.preset-action` | Use the per-status preset buttons (Resend on 9904, …) in the seller actions row. |
| **Invoices** | Custom actions | `invoice.custom-action` | Use the admin-defined custom buttons in the custom actions row. |
| **Invoices** | Email PDF | `invoice.email` | Send the rendered PDF via the configured SMTP relay. |
| **E-Reporting** | Generate batch | `ereporting.generate` | Build a new e-reporting batch from the *Generate* dialog. |
| **E-Reporting** | Resend batch | `ereporting.resend` | Re-submit an existing e-reporting batch to the PA. |
| **Integration ops** | Run batch jobs | `integration.run` | Trigger *Import statuses* / *Fetch received* / *Retrieve statuses* from the toolbar. |

:::info
The detail modal renders Parties, Invoice Lines, TVA recap and Notes from the UBL XML endpoint, which is **read-open** (still subject to row filters and page visibility). Only the explicit *Download UBL* button is gated by `invoice.download` — view-only roles can therefore inspect the invoice content without the right to extract the raw XML.
:::

---

## Tab — Data scope

Defines **which rows the role can see** — companies and optional row filters.

### Companies

An add-row table of company codes (`KCO`) the role is scoped to. Each row carries a free-form input and a **×** button to remove it; **+ Add company** at the bottom appends a new row.

- **Empty list = all companies.** This is the typical default — leaving the table empty grants the role access to every company in the database.
- Adding even one row restricts the role to just the listed companies.
- The placeholder hint reads *KCO code (e.g. 00001)* and the input uses a monospace font to make typos easier to spot.

### Row filters

A more granular restriction: for any catalog column flagged as filterable, the role can be restricted to one or more **exact values**. Typical use case — an external customer who should only see invoices issued to its own alpha key (`UHALKY`).

Each row filter is a card with:

1. A **searchable column picker** showing every filterable column across the four catalogs:
   - **Invoices** (header columns: `UHALKY`, `UHAN8`, customer name, contract reference, …).
   - **Integration errors** (the integration error catalog's row-filterable columns).
   - **Processing log** (processing-log catalog columns).
   - **E-Reporting** (e-reporting catalog columns).
2. A list of **values** for the picked column, each on its own row with its own remove button. **+ Add value (OR)** appends another value.
3. A row-level remove button to drop the entire filter.

Below the list, **+ Add row filter** lets a single role combine filters on different columns.

#### Combination rules

| Pattern | Combined as |
|---|---|
| Multiple **values** on the **same column** | `OR` — the role sees rows that match **any** of the values. |
| Multiple **columns** in the filter list | `AND` — the role sees only rows that match **every** column constraint. |
| **Companies** grant + row filters | `AND` — both must be satisfied. |

#### Where row filters apply

A row filter is **not** a UI hint — it is enforced everywhere a forbidden row could otherwise leak:

- The **list views** (Invoices, E-Reporting, Integration Errors, Processing Log) — the filter is appended to the SQL.
- The **Dashboard** counters, charts and widgets — every card respects the role's row filter.
- **Per-row endpoints** — lifecycle, lines, XML download, PDF render, status push, delete, resend, email PDF.
- The **rendered PDF byte stream** — a forbidden row cannot even be turned into a PDF.

Forbidden rows return the same **"not found"** shape the UI uses for genuinely missing data, so the response cannot be used to probe for invoices a role should not know exist.

---

## Tab — Members

Available only when editing an existing role (hidden during creation).

Lists every user currently bound to the role:

| Column | Description |
|---|---|
| **Username** | The user's login. |
| **Full name** | The user's display name (or `–` when not set). |
| **Status** | `Active` (green) or `Inactive` (red). |

This view is **read-only** — to add or remove a user from a role, edit the user from *Configuration → Security → Users*.

---

## Save / Cancel

- **Create** *(when creating)* / **Save** *(when editing)* persists the role and refreshes the list — available on every tab except *Members*.
- **Cancel** discards changes and closes the panel.
- Inline status messages appear below the panel (`Role created`, `Role updated`, `Role deleted`, error messages).

---

## How grants are stored

Every grant is one row in `F564254`. The shape:

```text
F564254
  PMROLE       — role name (FK to F564251.RLNAME)
  PMCRAPPID    — grant type: 'page' / 'company' / 'feature' / 'action'
                              / 'dashboard-card' / 'row-filter'
  PMCRAPPVAL   — grant value, encoded per type:
                   page             → page id          (e.g. 'invoices')
                   company          → KCO code         (e.g. '00001')
                   feature          → flag             ('settings', 'readonly', 'actions-whitelist')
                   action           → action key       (e.g. 'invoice.delete')
                   dashboard-card   → card key         (e.g. 'dashboard.volume')
                   row-filter       → 'column=value'   (e.g. 'UHALKY=123456')
  PMENABL      — '1' enabled / '0' disabled (used during dialect-specific bootstrapping)
```

Row-filter grants are persisted as flat `column=value` strings — one row per `(column, value)` pair. The editor groups them by column on load and re-flattens them on save, so the operator never sees the raw shape.

Adding a future permission dimension becomes an INSERT in this same table — no DDL change required.

The bootstrap is **idempotent**: dropping `F564254` and re-running *Initialize Database* re-seeds the default `admin` and `viewer` grants without touching role rows. The init log reports the count of newly-inserted grants for visibility.

---

## Delete a role

Clicking the **🗑** icon on a role card opens a confirmation modal:

> *Delete role "X"? Users assigned to this role will lose their permissions.*

Confirming removes the role and every grant row in `F564254` keyed by it. Users previously bound to the role keep their account but lose every permission until they are reassigned to another role.

---

## Tips & best practices

- **Create one role per profile, not per individual.** `operator`, `auditor`, `customer_<name>` are simpler to maintain than per-user roles.
- **Grant *Settings access* sparingly.** It opens the entire Configuration menu — limit it to a small admin group.
- **Pair *Read-only* with *Actions* off** for compliance / audit accounts — both layers reinforce each other.
- **Use the Companies table to enforce multi-tenant isolation.** Leaving it empty defeats company-level filtering for the role.
- **Row filters first, action whitelist second** when scoping an external user. The row filter hides everything the user should not see; the action whitelist controls what they can do with what they see.
- **The dashboard card whitelist runs server-side** — disabled cards never query the database. Use it to hide cost-sensitive widgets from low-trust roles.
- **Use Copy when forking a role.** Starting from an existing role with one or two grants flipped is faster than rebuilding the checklists from scratch — and the result is closer to the source role's intent.
- **Re-run *Initialize Database*** *(Database Connectors → NomaUBL)* if the default `admin` or `viewer` grants are missing — it re-seeds the rows without touching custom roles.
- **Delete a role only after re-binding its members.** Once deleted, members lose access to everything until reassigned. The Members tab is the fastest way to check who would be affected.
