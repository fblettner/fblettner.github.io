---
title: Environments
description: "Maintain the JD Edwards environment list per user and per role — production, test, development, conference room, with the order in which they appear at sign-on."
keywords: [Nomajde, JD Edwards, JDE security, environments, F0093, PD, PY, DV, CRP, sign-on environments]
---

# Environments

The **Environments** screen lists, for each user and each role, the JDE environments they are entitled to sign on to. One line per `(User or Role, Environment)`. The screen drives the environment picker JDE shows at sign-on.

Maintain the production / test / development / conference-room assignments here, in one grid, instead of opening the JDE *User Environment Revisions* form for every account.

---

## At a glance

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njev-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njev-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · Environments</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENVIRONMENT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SEQUENCE</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">IS PARENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PD910 — Production</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <circle cx="830" cy="145" r="5" fill="#64748b"/>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PY910 — Prototype</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>
  <circle cx="830" cy="177" r="5" fill="#64748b"/>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PD910 — Production</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <circle cx="830" cy="209" r="5" fill="#22c55e"/>
</svg>

---

## Goal of the view

For each user or role:

- **The sign-on list.** Each row says: *this user / role is entitled to sign on to this environment, with this display order*. JDE uses the list to populate the environment picker at sign-on.
- **Inheritance-aware.** The *Is parent* indicator turns green when the row applies to a role that is the source of an inheritance — meaning the environment list is propagated to other users via *Role Relationships*.
- **Bulk-loadable.** When a new environment is added to the JDE estate, the new assignments can be uploaded from Excel rather than typed account by account.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **User / Role** | `LLUSER` — JDE identifier. | The user or the role the environment applies to. |
| **Environment** | `LLLL` — environment code. | The JDE environment (`PD910`, `PY910`, `DV910`, `CRP910`, …). |
| **Sequence** | `LLSEQ` — display order. | Order in which environments appear in the JDE sign-on picker. |
| **Menu** | `LLMNI` — initial menu. Hidden by default. | The JDE menu the user lands on after sign-on for this environment. |
| **Is parent** | `IS_PARENT` — `Y` / `N`. Green dot when `Y`. | `Y` when the user / role is the source of at least one role relationship — the environment list is inherited by downstream users. |

---

## Edit dialog

Click **Add** in the toolbar to declare a new environment assignment, or double-click a row to edit. The dialog is a single form.

| Field | What to enter |
|---|---|
| **User / Role** | The user or role the assignment is for. Mandatory. |
| **Environment** | The JDE environment code — the lookup is filtered by the selected user / role. Mandatory. |
| **Sequence** | Display order on the sign-on screen. Lower number first. |

The *Initial menu* and the *Is parent* indicator are kept on the row but are not editable from the dialog — they are derived attributes.

---

## Tips & best practices

- **Set the *Sequence* deliberately.** The first environment in the list is the JDE default — pick `PD910` for an end user and `DV910` for a developer.
- **Attach the environments on the role, not on each user.** When a user inherits from a role (see *Role Relationships*), they automatically pick up the role's environments — much easier to maintain.
- **A *Is parent* green dot** signals an environment list that propagates to many downstream users. Edits to that row affect everyone who inherits — review the impact before saving.
- **Use the Excel upload** when adding a brand-new environment (e.g. a new test environment for a roll-out) — generate the assignments offline and import in one go.
