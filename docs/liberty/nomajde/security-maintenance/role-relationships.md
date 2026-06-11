---
title: Role Relationships
description: "Maintain the JD Edwards role-inheritance graph in a single grid — pair source and target roles, set effective and expiration dates, bulk-upload from Excel."
keywords: [Nomajde, JD Edwards, JDE security, role relationships, role inheritance, F95921, effective date, expiration date]
---

# Role Relationships

The **Role Relationships** screen maintains the JD Edwards role-inheritance graph. One line per `(FROM Role, TO Role, Effective Date)`. Each row says: *the TO role inherits the security setup of the FROM role, during this date window*.

It is the screen the security team opens to grant a junior role the rights of a senior one — or to extend the effective window of an inheritance that is about to expire.

---

## At a glance

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrr-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njrr-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · Role Relationships</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FROM ROLE</text>
  <text x="300" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO ROLE</text>
  <text x="520" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EFFECTIVE</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXPIRATION</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FU ROLE 1</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="300" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="520" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="300" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MARTIN.S</text>
  <text x="520" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-09-01</text>
  <text x="700" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2026-06-30</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AR_CASHIER</text>
  <text x="300" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GARCIA.L</text>
  <text x="520" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-03-15</text>
  <text x="700" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="870" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
</svg>

---

## Goal of the view

For each role-inheritance line:

- **Inheritance, in plain rows.** A relationship row says: *FROM Role grants its security setup to TO Role, between Effective Date and Expiration Date*. The TO Role can be a junior role or a user — JDE treats both the same way.
- **Date-driven access windows.** Effective and Expiration dates make the inheritance temporary by default. Expirations that fall in the next 30 days surface in amber; expirations in the past in red — both call for review.
- **Bulk-loadable.** The screen supports Excel upload — when the SI delivers a new bundle of role relationships for a roll-out, import the file instead of typing 200 rows by hand.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **FROM Role** | `RLFRROLE` — source role. | The role that *contributes* its security setup. |
| **TO Role** | `RLTOROLE` — target role or user. | The role or user that *inherits* the security. JDE treats users and roles in the same table. |
| **Effective Date** | `RLEFFDATE` — start date. | Day the inheritance starts. |
| **Expiration Date** | `RLEXPIRDATE` — end date. | Day the inheritance ends. Empty means no end date. |
| **FU Role 1** | `RLFUROLE1` — secondary role. | Optional second role mixed into the inheritance — used for *role mixes* (the FROM role plus a side role). |

Internal JDE fields kept on the row but hidden: role type, system role flag, default role flag, FU roles 2 to 9, plus the audit columns.

---

## Edit dialog

Click **Add** in the toolbar to register a new relationship, or double-click a row to edit one. The dialog is a single form with the five visible fields.

| Field | What to enter |
|---|---|
| **TO Role** | The user or role that receives the security inheritance. Mandatory. |
| **FROM Role** | The role that contributes its security. Mandatory. |
| **Effective Date** | Start of the inheritance window. Mandatory. |
| **Expiration Date** | End of the window. Leave empty for an open-ended inheritance. |
| **FU Role 1** | Optional second role to mix into the inheritance — used in rare role-blend setups. |

The triple `(TO Role, FROM Role, Effective Date)` is the unique key — JDE uses it to look up the inheritance at sign-on time.

---

## Change tracking

Assignments edited here are **captured into the active [change package](../../nomaflow/change-packages.md)** under the `assignments` entity. Each link added or removed becomes a reviewable entry, so an assignment change promotes from development to production as a reviewed bundle.

A parent role's effective security derives from these assignments, so wire the [`nomajde-remerge-security`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security) job as a post-apply step on this screen — the impacted parents are then re-merged on the target after the assignment writes land.

---

## Tips & best practices

- **Always set an Expiration Date** unless the relationship is genuinely permanent. Time-boxed inheritances surface on the dashboard before they expire — a much safer pattern than open-ended grants.
- **Use the Excel upload** for SI-delivered bundles. The standard *Add* flow handles single rows; the upload is meant for the dozen or two dozen rows that ship with a new module.
- **Sort by *Expiration Date* ascending** to bring the next expirations to the top — the natural list for the monthly access-review.
- **Check *Nomasx-1 → Conflicts → Summary by Role*** after granting a new inheritance — combining two roles often creates a SoD conflict that was not visible on either role alone.
