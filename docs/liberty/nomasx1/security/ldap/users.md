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

<svg viewBox="0 0 1320 317" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxldu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxldu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxldu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxldu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="277" rx="14" fill="url(#nxldu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Users</text>
  <rect x="345.472" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="367.472" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_users_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">512 rows · 12.3 ms</text>
  <rect x="982" y="100" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="101" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="105" x2="1039" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="128" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="128" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SAMACCOUNTNAME</text>
  <text x="333" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DISTINGUISHEDNAME</text>
  <text x="469" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="550" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USERPRINCIPALNAME</text>
  <text x="675" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPANY</text>
  <text x="740" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CITY</text>
  <text x="783" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DEPARTMENT</text>
  <text x="847" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="916" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DISPLAYNAME</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="333" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CN=John Doe,OU=Finance</text>
  <text x="469" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="550" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">jdoe@acme.example</text>
  <text x="675" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="740" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Lyon</text>
  <text x="783" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="847" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1001</text>
  <text x="916" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">asmith</text>
  <text x="333" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CN=Anna Smith,OU=Sales</text>
  <text x="469" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="550" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">asmith@acme.example</text>
  <text x="675" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="740" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Paris</text>
  <text x="783" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <text x="847" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1002</text>
  <text x="916" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">bmartin</text>
  <text x="333" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CN=Bruno Martin,OU=Ops</text>
  <text x="469" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="550" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">bmartin@acme.example</text>
  <text x="675" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Beta SARL</text>
  <text x="740" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Lille</text>
  <text x="783" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LOG</text>
  <text x="847" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1003</text>
  <text x="916" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="240" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="265" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="278.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–50 of 512</text>
  <rect x="992" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="265" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Directory account</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Windows login (sAMAccountName)</text>
  <line x1="200" y1="227.0" x2="270" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">department</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grouped in LDAP › Settings</text>
  <line x1="200" y1="137.0" x2="793" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">AD attributes, side by side</text>
  <line x1="1120" y1="137.0" x2="983.5" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…and further right</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">manager, phone, title, expiry</text>
  <line x1="1120" y1="267.0" x2="1070" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
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
| **sAMAccountName** | `LDAP_ACCOUNT` — `samAccountName`. | The Windows login name. This is what most source systems use to match a JDE / SAP / etc. account against the AD identity. |
| **distinguishedName** | `LDAP_DN` — `distinguishedName`. | Full LDAP path — useful when the directory has nested OUs and the AD admin needs to find the entry. |
| **name** | `LDAP_NAME` — `name`. | First "name" attribute of the directory entry — typically the legal full name. |
| **userPrincipalName** | `LDAP_LOGON` — `userPrincipalName`. | Federation-style login (`user@domain`). Used by SSO scenarios. |
| **company** | `LDAP_COMPANY` — `company`. | Legal entity the person belongs to — useful when the AD covers several subsidiaries. |
| **city** | `LDAP_CITY` — `l` (locality). | Geographic location. |
| **department** | `LDAP_DEPARTMENT` — `department`. | The grouping key that drives the *Users by applications* mapping. |
| **description** | `LDAP_DESCRIPTION` — `description`. | Free text — often carries the HR registration / matricule used to match the AD entry to the source-system account. |
| **displayName** | `LDAP_DISPLAY_NAME` — `displayName`. | What appears in the AD address book. |
| **mail** | `LDAP_MAIL` — `mail`. | Email address, as a `mailto:` link. |
| **manager** | `LDAP_MANAGER` — `manager`. | DN of the manager — useful for approval workflows. |
| **physicalDeliveryOfficeName** | `LDAP_OFFICE` — `physicalDeliveryOfficeName`. | Office location. |
| **telephoneNumber** | `LDAP_TELEPHONE` — `telephoneNumber`. | Office phone. |
| **mobile** | `LDAP_MOBILE` — `mobile`. | Mobile phone. |
| **title** | `LDAP_TITLE` — `title`. | Job title. |
| **whenCreated** | `LDAP_CREATION` — `whenCreated`. | Date the AD entry was provisioned. |
| **accountExpires** | `LDAP_EXPIRES` — `accountExpires`. | Scheduled expiration date — empty / `Never` for permanent staff. |
| **userAccountControl** | `LDAP_NEVER_EXPIRES` — `userAccountControl` flag. | Boolean derived flag indicating that the account is set to never expire. |

Hidden columns kept on the row: `LDAP_REFRESH` (last sync timestamp), `LDAP_UKID` (technical row id).

---

## Tips & best practices

- **Sort by *accountExpires* ascending** to surface every contractor about to lose AD access. Cross-check with the *Assignments* screen — every soon-to-expire account that still holds a role on a source system must be deprovisioned there too.
- **The *Description* attribute often carries the HR matricule** — when present, it makes the join to the source-system *Registration* field straightforward. Inconsistent values in that field are the typical cause of *Users without AD* false positives.
- **Look at *Title* and *Department* together** to spot misconfigurations (e.g. an accountant marked in the IT department) before they impact the *Users by applications* mapping.
- **The directory is read by the collection's LDAP step**, which the *Everything* collection switches on — see [Jobs](../../jobs.md#steps). **Last Refresh** gives the date of the last read: an old date means the figures here are old too.
