---
title: LDAP Settings
description: "Mapping of LDAP / Active Directory departments to connected applications, grouped into functional buckets."
keywords: [Nomasx-1, security, LDAP, settings, department mapping, group, application access rule]
---

# LDAP Settings

The **LDAP Settings** screen is the mapping table that drives the *Users by applications* matrix. Each row declares: *"users whose AD department is X are expected to have access to application Y, under group bucket Z"*.

This is the screen to maintain when the company reorganises, when a new department is created, when a new application comes online, or when the access rules are revisited at the quarterly review.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lds-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#lds-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · LDAP · Settings</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION NAME</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUP</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AD DEPARTMENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP Production</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HR</text>
  <text x="660" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">HR-PAYROLL</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">12 rules across 2 applications · last department added 2026-04-22</text>
</svg>

---

## Goal of the view

The rows of this screen are the *rules* that say which AD departments are expected to gain access to which application.

- **One row, one rule.** Each row is the building block of the *expected access* matrix.
- **Group is the human label.** *Group* is a free label used to gather several departments into a single bucket (e.g. *FINANCE* covers `FIN-AP`, `FIN-AR`, `FIN-CONTROL`).
- **No row, no expectation.** A department that does not appear here is never expected to access any application — the *Users by applications* matrix simply doesn't include it.

The screen is short, declarative and lives at the centre of the LDAP review loop: maintain it, the matrix is correct; ignore it, the matrix drifts.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier from the source system. | The application granted by the rule. |
| **Application Name** | `APPS_NAME` — name from `SETTINGS_APPLICATIONS`. | Friendly label of the application. |
| **Group** | `LDAPD_GROUP` — free text. | Human label grouping several departments into one functional bucket. |
| **AD Department** | `LDAP_DEPARTMENT` — must match the `department` attribute of an LDAP entry. | The AD department covered by the rule. |

The grid is read-only here. Mappings are maintained through the underlying configuration table (`SECURITY_LDAP_DPT`); for now the screen surfaces what is configured.

---

## Tips & best practices

- **Keep the *Group* labels stable** — every change ripples through the *Users by applications* matrix and breaks the comparison with the previous review.
- **Add a new department mapping** when a new business unit is created or an AD reorganisation moves people around — otherwise the new users will all surface as expected-without-access on the matrix.
- **Remove a department mapping** when an application is decommissioned. Existing access rows in the source system are not deleted automatically; that is the job of *Settings → Users management* or the source-system administrator.
- **Re-run the LDAP scan** after every mapping change so the next *Users by applications* render reflects the new rules.
