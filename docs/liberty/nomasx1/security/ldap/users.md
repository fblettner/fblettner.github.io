---
title: LDAP Users
description: "Raw LDAP / Active Directory user catalog fed into Nomasx-1 — Active Directory attributes side-by-side."
keywords: [Nomasx-1, security, LDAP, Active Directory, users, identity provider, samAccountName]
---

# LDAP Users

The **LDAP Users** screen is the raw catalog of accounts read from the corporate **LDAP / Active Directory** directory. One line per directory entry, with the Active Directory attributes side-by-side.

This list is the *identity reference* against which Nomasx-1 reconciles the user accounts found in each connected application. A user known to the source system but absent from this list lands on *Users without AD*; a department here drives the *Users by applications* matrix.

---

## At a glance

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ldu-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#ldu-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · LDAP · Users</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SAM ACCOUNT</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DISPLAY NAME</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEPARTMENT</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UPN</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXPIRES</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">jdoe@corp.local</text>
  <text x="760" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Never</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">msmith</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Mary Smith</text>
  <text x="400" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HR</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">msmith@corp.local</text>
  <text x="760" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Never</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ext.acme01</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">External Acme 01</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EXT</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ext.acme01@corp.local</text>
  <text x="760" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2026-06-30</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">svc.batch</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Batch service account</text>
  <text x="400" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">IT-OPS</text>
  <text x="560" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">svc.batch@corp.local</text>
  <text x="760" y="245" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Never</text>

  <line x1="60" y1="268" x2="940" y2="268" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="290" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 2 463 directory entries · 14 expiring next 90 days</text>
</svg>

---

## Goal of the view

The directory pull is the *single source of truth* for human identity. The screen answers:

- **Does this person exist in the corporate directory?** Every account on a connected application that does not show up here is either a technical / batch account, an externally-managed identity (e.g. service account, legacy login) or an outright ghost — the *Users without AD* screen lists them explicitly.
- **What department do they belong to?** The *Department* attribute drives the *Users by applications* matrix — it is the lever that maps people to the applications they should have access to.
- **When does the account expire?** Contractors usually have an `accountExpires` date — sorting by this column surfaces who is about to lose AD access (and therefore likely needs to be deprovisioned in every connected application too).
- **What is the corporate communication context?** Mail, phone, manager — useful when an audit finding requires reaching the person quickly.

---

## Columns

| Column | Source (AD attribute) | What it tells you |
|---|---|---|
| **SAM Account** | `LDAP_ACCOUNT` — `samAccountName`. | The Windows login name. This is what most source systems use to match a JDE / SAP / etc. account against the AD identity. |
| **DN** | `LDAP_DN` — `distinguishedName`. | Full LDAP path — useful when the directory has nested OUs and the AD admin needs to find the entry. |
| **Name** | `LDAP_NAME` — `name`. | First "name" attribute of the directory entry — typically the legal full name. |
| **UPN** | `LDAP_LOGON` — `userPrincipalName`. | Federation-style login (`user@domain`). Used by SSO scenarios. |
| **Company** | `LDAP_COMPANY` — `company`. | Legal entity the person belongs to — useful when the AD covers several subsidiaries. |
| **City** | `LDAP_CITY` — `l` (locality). | Geographic location. |
| **Department** | `LDAP_DEPARTMENT` — `department`. | The grouping key that drives the *Users by applications* mapping. |
| **Description** | `LDAP_DESCRIPTION` — `description`. | Free text — often carries the HR registration / matricule used to match the AD entry to the source-system account. |
| **Display Name** | `LDAP_DISPLAY_NAME` — `displayName`. | What appears in the AD address book. |
| **Mail** | `LDAP_MAIL` — `mail`. | Email address. |
| **Manager** | `LDAP_MANAGER` — `manager`. | DN of the manager — useful for approval workflows. |
| **Office** | `LDAP_OFFICE` — `physicalDeliveryOfficeName`. | Office location. |
| **Telephone** | `LDAP_TELEPHONE` — `telephoneNumber`. | Office phone. |
| **Mobile** | `LDAP_MOBILE` — `mobile`. | Mobile phone. |
| **Title** | `LDAP_TITLE` — `title`. | Job title. |
| **WhenCreated** | `LDAP_CREATION` — `whenCreated`. | Date the AD entry was provisioned. |
| **AccountExpires** | `LDAP_EXPIRES` — `accountExpires`. | Scheduled expiration date — empty / `Never` for permanent staff. |
| **userAccountControl** | `LDAP_NEVER_EXPIRES` — `userAccountControl` flag. | Boolean derived flag indicating that the account is set to never expire. |

Hidden columns kept on the row: `LDAP_REFRESH` (last sync timestamp), `LDAP_UKID` (technical row id).

---

## Tips & best practices

- **Sort by *AccountExpires* ascending** to surface every contractor about to lose AD access. Cross-check with the *Assignments* screen — every soon-to-expire account that still holds a role on a source system must be deprovisioned there too.
- **The *Description* attribute often carries the HR matricule** — when present, it makes the join to the source-system *Registration* field straightforward. Inconsistent values in that field are the typical cause of *Users without AD* false positives.
- **Look at *Title* and *Department* together** to spot misconfigurations (e.g. an accountant marked in the IT department) before they impact the *Users by applications* mapping.
- **The LDAP scan runs on the schedule configured at the connector level.** A stale `WhenCreated` column on every row usually means the LDAP connector hasn't run lately.
