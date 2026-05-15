---
title: Users Audit
description: "Per-user audit view — identity, organisation, country and last usage by module — for a deep dive on a single account."
keywords: [Nomasx-1, security, users audit, user profile, last usage by module, country, business unit, audit drilldown]
---

# Users Audit

The **Users Audit** screen is the *drill-down* view of a single user account. One line per `(Application, User, Module)` triplet — meaning a user used on five different modules of the source system produces five rows on this screen, one per module.

It is what you open after clicking on a row in *Users*, *Users without roles* or *Duplicate users*: rather than a one-line summary, it shows the full identity card plus the per-module usage trail.

---

## At a glance

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="usa-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#usa-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Users Audit · APMGR</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="106" fill="#94a3b8" fontSize="10" letterSpacing="0.05em" fontFamily="system-ui, sans-serif" fontWeight="700">IDENTITY</text>
  <text x="60" y="126" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">App 12 · APMGR · Accounts Payable Manager</text>
  <rect x="60" y="138" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="85" y="150" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="120" y="150" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Country FR · Company 00010 · BU 30 · Cat 8 SALES</text>
  <text x="120" y="166" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Created 2019-03-14</text>

  <line x1="60" y1="180" x2="940" y2="180" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="200" fill="#94a3b8" fontSize="10" letterSpacing="0.05em" fontFamily="system-ui, sans-serif" fontWeight="700">LAST USAGE BY MODULE</text>

  <rect x="60" y="212" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="229" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="780" y="229" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="244" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="261" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">General Ledger</text>
  <text x="780" y="261" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-02</text>

  <rect x="60" y="276" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="293" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="780" y="293" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-11-18</text>

  <rect x="60" y="308" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="325" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procurement</text>
  <text x="780" y="325" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2023-09-04</text>
</svg>

---

## Goal of the view

For a single user on a single application:

- **Who is this person?** Identity (name), the organisation context (country, company, business unit, category code) and the account status — everything an auditor needs to recognise the user without leaving the screen.
- **What does this user use?** A line per module of the source system, with the date of the last operation in that module. This is the trail that answers *"is the wallet of roles this user holds actually justified?"*.
- **What can be revoked?** A role that grants access to a module not used in the last twelve months is a candidate for revocation.

The screen is the **second click** in every per-user investigation — one row, all context.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — application identifier from the source system. | The application the user belongs to. |
| **User ID** | `USR_ID` — user identifier (technical login). | Carried from the calling screen. |
| **User Name** | `USR_NAME` — display name. | Human-readable name. |
| **Status** | `USR_STATUS` — normalised: `01` for *Active*, `N` otherwise. | Account state in the source system. |
| **Country** | `USRD_ULCTR` — text. | Country attached to the user in the source system. |
| **Company** | `USRD_MCCO` — text. | Default company assigned to the user. |
| **Business Unit** | `USRD_MCMCU` — text. | Default business unit assigned to the user. |
| **BU Code Cat 8** | `USRD_MCRP08` — text. | Category code 8 of the business unit — typical breakdown axis for analytical reporting. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the account was created. |
| **Component** | `CPT_COMPONENT` — text. | Functional module of the source system (Accounts Payable, General Ledger, etc.). One row per module the user has used at least once. |
| **Last Usage** | `LAST_USAGE` — date. | Last activity recorded by the source system on the module. |

:::info[JDE-specific]
On JD Edwards EnterpriseOne, *Component* and *Last Usage* are computed from **Object Usage Tracking** (`LICENSE_JDE_OUT`) joined to the JDE objects table and to the System Code → License Component mapping (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`). The organisation columns (Country, Company, Business Unit, BU Category 8) are JDE defaults stored in the user data. Other source systems can populate the same columns with their own equivalents — for example HR cost-center mapping for SAP, location and department on NetSuite.
:::

---

## Tips & best practices

- **Read the last-usage column from the bottom up.** Modules with no activity in the last twelve months are the strongest signal for role revocation — the user is paying the audit cost of a role they no longer exercise.
- **Use *Country* and *Business Unit*** to cross-check with HR. A user whose source-system country no longer matches the HR record is either a relocation never reflected in the system or a stale account.
- **For technical / batch users**, expect a single module with a recent date and nothing else. Tag them via the *Settings → Users properties* screen so they stop being flagged by the dormant-account review.
- **Click *Print*** to export the audit card as a PDF — handy for evidence packs delivered to external auditors.
