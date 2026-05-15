---
title: Roles matrix
description: "Distinct role combinations held by users on each connected application, with the number of users behind each combination."
keywords: [Nomasx-1, security, role combinations, role matrix, role wallet, audit]
---

# Roles matrix

The **Roles matrix** screen groups users by their **exact combination of roles**. One line per `(Application, Role combination)`. For every distinct role wallet found across the active user base of an application, the screen shows how many users hold exactly that combination and a sample user as a starting point.

This is the most concise way to see *what the security model actually looks like in practice* — not what was designed on paper, but what users effectively carry.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mtx-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#mtx-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Roles matrix</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="240" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE COMBINATION</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SAMPLE USER</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">82</text>
  <text x="240" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR_RO</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZZ_USR_001</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">37</text>
  <text x="240" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">YZ_USR_004</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">3</text>
  <text x="240" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP,ACCT_AR,APPROVER</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XX_USR_002</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">1</text>
  <text x="240" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ADMIN,FIN_HISTO,LEGACY,PRJMGR</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XX_USR_003</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Sorted by user count desc — combinations held by 1 user are the outliers to investigate</text>
</svg>

---

## Goal of the view

For each connected application, group its active users by the **exact set of roles** they hold and answer:

- **What is the standard role combination?** The line with the largest *Users* count usually matches the typical onboarding template — every value below it deserves a look.
- **What are the outliers?** Combinations held by one or two users only often hide leftover roles from past responsibilities, mis-assignments, or accumulating permissions over time.
- **Where do segregation-of-duties risks live?** A combination that mixes incompatible roles (e.g. *Create vendor* + *Approve payment*) is the single most useful starting point for an SoD analysis — the matrix surfaces it directly.

The screen complements *Assignments* by collapsing thousands of rows into a few dozen lines — easier to scan, easier to discuss with the business.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier from the source system. | The application the combination belongs to. |
| **Users count** | `USERS_COUNT` — `COUNT(DISTINCT USR_ID)` on the combination. | How many active users hold this exact role wallet. |
| **Role combination** | `RLU_ROLE_ID` — `STRING_AGG(RLU_ROLE_ID, ',' ORDER BY RLU_ROLE_ID)` per user. | The comma-separated list of roles, deterministically ordered so identical combinations group together. |
| **Sample user** | `USR_ID` — `MAX(USR_ID)` per combination, scoped to the application. | One real user holding the combination — convenient handle to jump to the *Users Audit* screen. |

Rows are sorted by *Users count* descending — the most common combinations appear first.

---

## Tips & best practices

- **Pivot the discussion** — instead of arguing about thousands of individual assignments, focus on the dozen most common combinations. Each combination is a *de facto* role template the company actually uses.
- **Hunt outliers from the bottom of the list** — combinations held by 1 to 3 users. They tend to accumulate quietly when access changes are made one-off rather than via a template.
- **Cross-check incompatible pairs** — pick a known *can't co-exist* pair (e.g. *Create vendor* + *Approve payment*) and grep through the *Role combination* column. Every hit is an SoD exception to be confirmed or remediated.
- **Use the *Sample user* column** as a quick teleport into the *Users Audit* screen — it confirms what the combination concretely enables in the source system.
