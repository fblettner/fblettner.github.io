---
title: Conflicts — Details
description: "Line-by-line backing data for every segregation-of-duties conflict — user, both incompatible activities, the objects and the two source roles."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, details, user, role, activity]
---

# Conflicts — Details

The **Conflicts — Details** screen is the drill-down behind the *Summary* view. One line per *(User, Activity 1, Activity 2)* triplet — that is, every concrete realisation of an SoD risk on a single user. Each row carries the user, both incompatible activities, the underlying objects, and the two roles that brought the rights together.

This is the screen auditors read when they want to *see the conflict, not the count*.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodd-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#sodd-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflicts · Details</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 1</text>
  <text x="520" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 1</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE 1</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 2</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 2</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE 2</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="520" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="790" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MSMITH</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="520" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="700" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="790" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO-MOD</text>
  <text x="520" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_OWNER</text>
  <text x="700" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RCT-APV</text>
  <text x="790" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4312</text>
  <text x="870" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_RECEIVER</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="220" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-O2C-04</text>
  <text x="340" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PKHAN</text>
  <text x="430" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CUST-CR</text>
  <text x="520" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03013</text>
  <text x="600" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SALES_ADMIN</text>
  <text x="700" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ADJ-POST</text>
  <text x="790" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="870" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AR_ADJUSTER</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 247 raw conflict rows</text>
</svg>

---

## Goal of the view

For every concrete SoD breach:

- **Identify the user.** *User ID* + the two roles tell who carries the conflict and how.
- **Pinpoint the activities.** Activity 1 and Activity 2 are the named SoD-matrix actions in conflict. The associated objects connect the activity to the source-system program that backs it.
- **Reconstruct the path.** Combined with *Rights — Users / Roles*, the row tells which role pair generates the conflict — the lever to break it.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — application identifier. Filterable. | The connected application. |
| **Process ID** | `CFD_PROCESS_ID` — business process. Filterable, looked up against *SoD Process*. | Functional area the risk belongs to. |
| **Risk ID** | `CFD_RISK_ID` — incompatibility rule. Filterable, looked up against *SoD Risks*. | The risk being measured. |
| **User ID** | `CFD_USER_ID` — user in conflict. Filterable, scoped to the application. | The conflict holder. |
| **Activity 1** | `CFD_ACT1_ID` — named SoD activity. Looked up against *SoD Activities*. | First incompatible action. |
| **Object 1** | `CFD_ACT1_OBJECT` — technical object. Looked up against *SoD Objects*. | Source-system program backing activity 1. |
| **Role 1** | `CFD_ROLE1_ID` — role granting Activity 1. Looked up against the role catalog. | Where the user gets the first right from. |
| **Activity 2** | `CFD_ACT2_ID` — named SoD activity. | Second incompatible action. |
| **Object 2** | `CFD_ACT2_OBJECT` — technical object. | Source-system program backing activity 2. |
| **Role 2** | `CFD_ROLE2_ID` — role granting Activity 2. | Where the user gets the second right from. |

---

## Tips & best practices

- **Group by *User ID*** when discussing remediation — the same user can appear on several rows. A single role removal often closes multiple conflicts at once.
- **Filter by *Risk ID*** to obtain the full user list for one specific risk — the per-risk drilldown of the *Summary* screen.
- **Compare *Role 1* and *Role 2***. When two roles always show up together as the cause of a risk, the role pair is the structural issue — the SoD review should challenge the role design before challenging individual users.
- **Cross-reference with *Proven*** to know which of these rows have actual activity behind them (vs. theoretical conflicts where the user holds the rights but has never used them).
