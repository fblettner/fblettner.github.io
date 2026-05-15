---
title: Roles
description: "Catalog of all roles defined in each connected application — application, role identifier, role name, sequence."
keywords: [Nomasx-1, security, roles, JDE roles, SAP roles, role catalog]
---

# Roles

The **Roles** screen lists every role defined in the security tables of each connected application. One line per `(Application, Role)` pair: it is the authoritative inventory of the role names users are allowed to be assigned to.

A role is the *permission container* the source system exposes — `*ROLE` on JD Edwards EnterpriseOne, *PFCG profiles* on SAP, *permission sets* on NetSuite. Nomasx-1 reads the catalog as-is from the source.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rol-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rol-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Roles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE ID</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE NAME</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SEQ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*APPROVER</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approver — generic</text>
  <text x="820" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounting — Accounts Payable</text>
  <text x="820" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AR</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounting — Accounts Receivable</text>
  <text x="820" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRJMGR</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Project Manager</text>
  <text x="820" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">30</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 218</text>
</svg>

---

## Goal of the view

For each role known to **any connected application**, answer three questions in one glance:

- **Which roles exist?** The role catalog drives every other security view — assignments, conflicts, segregation-of-duties matrices.
- **What does the role represent?** The role name is the human-readable label visible to administrators. It should be self-explanatory and follow the company naming convention.
- **In what order is the role evaluated?** The sequence drives the precedence at login when the source system lets a user inherit configuration from several roles. Lower number = earlier evaluation = stronger precedence (JDE convention).

The screen is the entry point when an auditor asks *"give me the list of roles in scope"* or when a new SoD matrix is being built.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ROL_APPS_ID` — application identifier from the source system (numeric reference). | Which application the role belongs to. |
| **Role ID** | `ROL_ID` — role identifier (technical name). | The role's technical name as known to the source system. |
| **Role Name** | `ROL_NAME` — descriptive name. | Human-readable label. |
| **Sequence** | `ROL_SEQ` — numeric. | Evaluation order at login. Lower runs first; used by the source system to resolve precedence between several roles held by the same user. |

Hidden columns kept on the row: `ROL_DT_REFRESH`, `ROL_UKID` (used by downstream screens and reconciliation).

The single filter input above the grid (**Application ID**) supports the standard *contains* / *equals* / *not equals* / *starts with* / *ends with* operators.

:::info[JDE-specific]
On JD Edwards EnterpriseOne, `*ALL` is the **default sign-on role** — when a user signs on with `*ALL`, the security of every role assigned to them is combined and applied at once. The alternative is to sign on under a single specific role, applying only that role's security. Whether or not `*ALL` appears as a literal row on the *Roles* catalog depends on the installation: most do not need explicit `*ALL`-level overrides.
:::

---

## Tips & best practices

- **Compare the catalog with the *Roles not used* screen** to spot roles that exist but were never assigned. These are typically the leftover of past reorganisations.
- **Look for near-duplicate role names** (e.g. `ACCT_AP` vs `ACCT_AP_OLD`). A role rename in the source system creates a new row — the old one usually stays around until a manual cleanup.
- **Use the *Sequence* column** to identify the role with the lowest sequence that a user holds — this is the role driving most of the runtime behavior on JDE.
- **Click on a role** to open the *Assignments* screen filtered on that role — the fastest way to count holders before deciding to delete it.
