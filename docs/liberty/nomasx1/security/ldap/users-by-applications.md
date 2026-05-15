---
title: Users by applications
description: "Cross-tab of LDAP departments and applications, with each user's source-system account and roles — the source view for the per-department Excel export."
keywords: [Nomasx-1, security, LDAP, AD department, application access, Excel export, audit deliverable]
---

# Users by applications

The **Users by applications** screen is the cross-tab that joins the corporate **LDAP / Active Directory** catalog to each connected application, for the AD departments declared in *Settings*. One line per *(Group, Application, AD department, LDAP user)*.

It is the source of the per-department Excel export auditors expect — one file per department, one sheet per application, plus a sheet listing all LDAP entries. Open the grid, apply any filter, hit the export button.

---

## At a glance

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lba-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#lba-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · LDAP · Users by applications</text>
  <rect x="820" y="50" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="880" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Export Excel</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AD NAME</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEPARTMENT</text>
  <text x="590" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER ID</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLES</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="700" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP,APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Mary Smith</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MSMITH</text>
  <rect x="700" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Pierre Durand</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="700" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="800" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Anna Khan</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>
  <text x="590" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AKHAN</text>
  <rect x="700" y="232" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="800" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC_PLANNER</text>

  <rect x="60" y="264" width="880" height="48" rx="8" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="72" y="282" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXCEL EXPORT</text>
  <text x="72" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">One file per department, one sheet per application inside, plus one sheet with every LDAP entry as appendix. Filter the grid first, then export — only matching rows ship to the file.</text>
</svg>

---

## Goal of the view

For each combination of *(Group, Application, AD department)* defined in *Settings*:

- **List every AD user in the department**, with their corporate identity (name, description, expiration, company, title).
- **Pair each AD user with their source-system account**, when one exists — user ID, status, creation, last login, registration and the comma-separated list of roles they carry.
- **Slice the result for export.** The grid feeds the Excel export auditors usually request: one file per department, one sheet per application inside, plus an appendix sheet with the full LDAP catalog.

If an AD user has no matched account on the application, the source-system columns stay empty on the row — the row still ships in the export, so the auditor can see that the person is *in scope* for the department but does not actually hold an account.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Group** | `LDAPD_GROUP` — text. | High-level grouping (Finance, Supply, HR, IT, …) declared in *Settings*. |
| **Application** | `APPS_NAME` — text. | The application the row covers. |
| **AD Name** | `LDAP_NAME` — text. | Display name of the LDAP user. |
| **AD Department** | `LDAPD_DEPARTEMENT` — text. | The AD department declared in *Settings* and matched to the user's `department` attribute. |
| **AD Description** | `LDAP_DESCRIPTION` — text. | HR registration / free text used to join the AD user to the source-system account. |
| **AD Expires** | `LDAP_EXPIRES` — date. | When the AD account is scheduled to expire. |
| **AD Company** | `LDAP_COMPANY` — text. | Legal entity from AD. |
| **AD Title** | `LDAP_TITLE` — text. | Job title from AD. |
| **User ID** | `USR_ID` — source-system user identifier. | The matched source-system account. Empty if the AD user has no account on this application. |
| **User Name** | `USR_NAME` — source-system display name. | Display name on the source side. |
| **Registration** | `USR_REGISTRATION` — HR matricule on the source side. | The value that was used for the join. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Source-system status. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication on the source system. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the source-system account was created. |
| **Roles** | `RLU_ROLE_ID` — comma-separated list. | Effective role wallet on the source side, alphabetically sorted. Empty if the account holds no role. |

---

## Tips & best practices

- **Filter before exporting.** Limiting the grid to one *Group* gives a leaner export — useful when the audit covers a single business area.
- **Sort by *Group* + *Department*** to read the grid the same way the export file lays it out — easier to verify a row before sending.
- **A row without User ID is not a gap by itself** — it simply means the AD user has no account on that application. Whether that is expected is a business judgement, but the row stays in the export so the auditor can confirm it.
- **An AD department missing from the grid** means it was not added to *Settings*. Open the Settings page, add the row, re-run the LDAP scan.
