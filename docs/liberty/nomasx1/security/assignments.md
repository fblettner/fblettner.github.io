---
title: Assignments
description: "Active role assignments — which user holds which role, on which application, with effective and expiration dates."
keywords: [Nomasx-1, security, assignments, role assignments, user-role, effective date, expiration]
---

# Assignments

The **Assignments** screen lists every active link between a user and a role, on every connected application. One line per `(Application, User, Role)` triplet. It is the table everyone goes back to in order to answer the single most common audit question: *"who holds what?"*

The query only returns assignments for users whose `USR_STATUS = '01'` — i.e. active accounts. Inactive accounts may still hold rows in the underlying table, but they are excluded from this view to keep the audit trail focused.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="asg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#asg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Assignments</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EFFECTIVE</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXPIRATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="580" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*APPROVER</text>
  <text x="580" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CONTRACTOR</text>
  <text x="580" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-01-15</text>
  <text x="780" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2026-06-30</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="140" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">BENEMGR</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HR_BEN</text>
  <text x="580" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 4 312 · 3 expiring this quarter</text>
</svg>

---

## Goal of the view

For every active role assignment on **any connected application**:

- **Who holds what?** This is the canonical table for the access review — one line per active user × granted role.
- **Since when?** The effective date drives the *new access this quarter* question. Filter the column on the review period to list every new grant.
- **For how long?** Time-bounded assignments (contractor accounts, project-based access, temporary delegations) carry an expiration date. Sort it ascending to spot what is about to expire.

The screen is the second stop after *Users* in every quarterly access review.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `RLU_APPS_ID` — application identifier from the source system. Filterable. | Which application the assignment applies to. |
| **User ID** | `RLU_USER_ID` — linked to the user catalog (`USR_APPS_ID, USR_ID`). Filterable, filtered down by the selected application. | The user holding the role. |
| **Role ID** | `RLU_ROLE_ID` — linked to the role catalog (`ROL_APPS_ID, ROL_ID`). Filterable, filtered down by the selected application. | The role granted to the user. |
| **Effective Date** | `RLU_DT_EFFECTIVE` — date. | When the assignment took effect in the source system. |
| **Expiration Date** | `RLU_DT_EXPIRATION` — date, may be empty. | When the assignment is scheduled to expire. Empty means permanent. |

Hidden columns kept on the row: `RLU_DT_REFRESH`, `RLU_UKID`.

The three filter inputs above the grid (**Application ID**, **User ID**, **Role ID**) all support the standard *contains* / *equals* / *not equals* / *starts with* / *ends with* operators, and the *User ID* / *Role ID* lookups are scoped to the application chosen above.

:::info[JDE-specific]
On JD Edwards EnterpriseOne, `*ALL` is the **default sign-on role**: when a user signs on with `*ALL`, the security of every role assigned to them is combined and applied together. Assigning a role to a user therefore *includes* it in that user's `*ALL` bundle. The alternative is to sign on under a single specific role, applying only that role's security.
:::

---

## Tips & best practices

- **Filter *Effective Date* on the current quarter** to list every new assignment granted in that window — the baseline for the *new access* section of the audit report.
- **Sort *Expiration Date* ascending** to bring time-bounded assignments to the top. Compare with HR to confirm departures and project ends.
- **Filter *User ID* on a single user** to obtain that user's full role wallet — the same data appears richer on the *Users Audit* screen.
- **Filter *Role ID* on a single role** to count its holders. Combined with the *Roles* screen sequence, this is what tells you whether a role can be retired safely.
