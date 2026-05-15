---
title: Users by applications
description: "Cross-tab of LDAP departments mapped to applications — who, by AD department, is expected to hold access on which application."
keywords: [Nomasx-1, security, LDAP, Active Directory, department mapping, application access, expected vs actual]
---

# Users by applications

The **Users by applications** screen is the *expected access* matrix: for each (AD group, application, AD department) combination, it shows every LDAP user that should hold access on that application, side-by-side with the actual source-system account and roles they carry.

It is the cleanest answer to the *"who is expected to be on which application"* question — the chart that comes out of HR and IT, not the chart that the source system actually shows.

---

## At a glance

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lba-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#lba-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · LDAP · Users by applications</text>
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
  <text x="590" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">—</text>
  <text x="700" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">No account</text>
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

  <rect x="60" y="264" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="282" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPECTED VS ACTUAL</text>
  <text x="72" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Empty "User ID" on an AD-mapped row = expected access never provisioned. Account present but no roles = provisioned without grants. Both are gaps to close with the security administrator.</text>
</svg>

---

## Goal of the view

For every combination of *AD group / Application / AD department*:

- **Who is supposed to have access?** The LDAP-side columns (Name, Department, Description, Expiration) describe the expected user.
- **Are they actually provisioned?** The source-system columns (User ID, Status, Login, Creation, Roles) describe the actual account. Empty source-system columns on an LDAP row mean: *expected access never provisioned*.
- **Does the role wallet match the department?** A user in the FINANCE department holding nothing but a sales role is a misconfiguration.
- **What about extra accounts?** The screen surfaces both gaps (LDAP without source account) and matched pairs. Combined with *Users without AD*, you cover the full expected/actual delta.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Group** | `LDAPD_GROUP` — text. | High-level grouping (Finance, Supply, HR, IT, etc.). Defined in *Settings* below. |
| **Application** | `APPS_NAME` — text. | The application the group maps to. |
| **AD Name** | `LDAP_NAME` — text. | Display name of the LDAP user. |
| **AD Department** | `LDAPD_DEPARTEMENT` — text. | The AD department that drives the access expectation. |
| **AD Description** | `LDAP_DESCRIPTION` — text. | HR matricule / free text — the join key against the source-system user. |
| **AD Expires** | `LDAP_EXPIRES` — date. | When the AD account is scheduled to expire. |
| **AD Company** | `LDAP_COMPANY` — text. | Legal entity from AD. |
| **AD Title** | `LDAP_TITLE` — text. | Job title from AD. |
| **User ID** | `USR_ID` — source-system user identifier. | The matched source-system account. Empty = expected access never provisioned. |
| **User Name** | `USR_NAME` — source-system display name. | Display name on the source-system side. |
| **Registration** | `USR_REGISTRATION` — HR matricule on the source side. | The value that was used to perform the join. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Source-system status. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication on the source system. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the source-system account was created. |
| **Roles** | `RLU_ROLE_ID` — comma-separated list. | The actual role wallet on the source side, sorted alphabetically. Empty = account present but no role granted. |

---

## Tips & best practices

- **Sort by *Group* + *Department*** to focus on one functional area at a time. Run the access review department-by-department; it scales much better than user-by-user.
- **Look for empty *User ID* lines first** — they are the expected accesses that were never provisioned. A new hire who hasn't been given a JDE account yet, a contract renewal whose AD entry exists but who lost their source-system account on the previous off-boarding.
- **Look for non-empty *User ID* with empty *Roles* second** — the account exists but holds nothing. Usually a provisioning step that stopped mid-way.
- **The grouping mechanism is configured in *Settings*** (next page). Adding a new department mapping changes how rows are grouped from the next scan onward.
