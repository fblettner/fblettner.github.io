---
title: Conflicts — Roles
description: "Distinct pairs of roles that produce a segregation-of-duties conflict — the role couples to redesign."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, roles, role pair, role design]
---

# Conflicts — Roles

The **Conflicts — Roles** screen lists the distinct **pairs of roles** that produce an SoD conflict on a connected application. One line per `(Application, Role 1, Role 2)` triplet, derived from the *Details* dataset.

Where *Conflicts — Users* drives short-term remediation (revoke or deactivate), *Conflicts — Roles* drives the **structural fix**: redesign the role pair so the combination cannot occur at all.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodr-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#sodr-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflicts · Roles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE 1</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE 2</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_OWNER</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_RECEIVER</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SALES_ADMIN</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AR_ADJUSTER</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Production</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_PAY_RATE</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_PAYROLL_APV</text>
</svg>

---

## Goal of the view

For each connected application:

- **Spot the structurally incompatible roles.** A pair appearing here means *any* user holding both will be in conflict. Trimming the role design once closes the issue for every current and future holder.
- **Prioritise the redesign.** Pairs producing many *Details* rows are the highest-impact fix. Use the *Summary* or *Details* counts to rank them.
- **Plan the communication.** The role pair is the unit of conversation with the security administrator and the role owners — far more actionable than discussing individual users.

The query simply distinct-counts the `(CFD_APPS_ID, CFD_ROLE1_ID, CFD_ROLE2_ID)` tuples in `SOD_CONFLICT_DETAILS`, sorted by *Role 1*.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — application identifier. | The connected application. |
| **Role 1** | `CFD_ROLE1_ID` — role granting Activity 1. Looked up against the role catalog. | First half of the incompatible pair. |
| **Role 2** | `CFD_ROLE2_ID` — role granting Activity 2. Looked up against the role catalog. | Second half of the incompatible pair. |

---

## Tips & best practices

- **Compare each pair with *Roles matrix*** — if the same pair appears in a high-count combination, the conflict is broadly distributed and worth fixing structurally.
- **The pair is symmetric.** If `(A, B)` appears, the redesign discussion is the same as for `(B, A)`. Treat them as a single decision.
- **Three structural fixes are common**: split one role into two, narrow one role's object scope, or move an object out of one role and require explicit user-level grant (with documented justification).
- **Re-run the SoD scan** after the redesign — proven and theoretical counts should both drop. A drop only in *Details* but not in *Proven* points to compensating controls that may still be needed.
