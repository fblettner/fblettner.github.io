---
title: Users properties
description: "Per-user flags — technical, generic, linked, privileged — that drive licence calculations and audit filtering."
keywords: [Nomasx-1, settings, users properties, technical accounts, generic accounts, linked accounts, privileged]
---

# Users properties

The **Users properties** screen carries the per-user flags Nomasx-1 uses to interpret usage data. One line per `(Application, User)`. Each row is the place to mark an account as *technical*, *generic*, *linked* to another login, *privileged*, or attached to a previous account.

These flags are read by *OUT — Users / Roles*, the *Licenses* reports and several account-hygiene views — they let the analysis distinguish a real human from a batch service account or a shared login.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="susrp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#susrp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Security · Users properties</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="130" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECHNICAL</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GENERIC</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COUNT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRIVILEGED</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LINKED</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LINKED USER</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="280" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="730" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="820" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SHARED01</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="400" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="730" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="820" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">J.DOE</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="730" y="213" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="820" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
</svg>

---

## Goal of the view

Tag each user account so downstream views can filter intelligently:

- **Technical accounts** — batch / service users. Excluded from headcount-based licence calculations.
- **Generic accounts** — shared logins. *Generic count* lets you state how many real people are behind it.
- **Privileged accounts** — flagged for special audit attention.
- **Linked / Previous accounts** — duplicate or successor relationships. *Linked User* and *Previous User* hold the reference to the primary login.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USRP_APPS_ID` — application. | The application. |
| **User ID** | `USRP_ID` — user identifier. | The account being tagged. |
| **Technical** | `USRP_TECHNICAL` — `Y` / `N`. | Marks the account as a service / batch user. |
| **Generic** | `USRP_GENERIC` — `Y` / `N`. | Marks the account as shared by several people. |
| **Generic count** | `USRP_GENERIC_COUNT` — number. | How many real people share the generic account. |
| **Privileged** | `USRP_PRIVILEGED` — `Y` / `N`. | Marks the account as carrying elevated privileges. |
| **Linked** | `USRP_IS_LINKED` — `Y` / `N`. | Whether the account is declared as duplicate of another. |
| **Linked User** | `USRP_ID_LINKED` — login. | If linked, the primary login it points to. |
| **Previous** | `USRP_IS_PREVIOUS` — `Y` / `N`. | Whether the account is the successor of a previously used login. |
| **Previous User** | `USRP_ID_PREVIOUS` — login. | If marked, the previous login. |

---

## Tips & best practices

- **Tag technical and generic accounts early.** Every untagged technical user pollutes the licence headcount.
- **Use *Linked* for duplicate pairs the *Duplicate users* screen surfaced as known-good.** Declared once, removed from the audit noise.
- **Privileged should be sparing.** Setting `Privileged = Y` is a deliberate audit signal — limit it to accounts that truly carry elevated rights.
