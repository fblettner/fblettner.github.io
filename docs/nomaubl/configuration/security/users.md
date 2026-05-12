---
title: Users
description: "Manage NomaUBL user accounts: create, edit, deactivate or delete users, assign them a role and reset their password."
keywords: [NomaUBL, users, accounts, role assignment, password reset, deactivate, RBAC]
---

# Users

This screen manages NomaUBL user accounts: create new users, assign each one a **role** (defined in *Configuration → Security → Roles*), edit profile data, deactivate accounts and reset passwords.

User accounts are application-wide and source-agnostic — they apply equally whether NomaUBL is plugged into JD Edwards, SAP, NetSuite or a custom ERP. The default `admin` user (and the seed roles) is provisioned by the **Initialize Database** action in *Database Connectors → NomaUBL*.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#usr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <rect x="694" y="30" width="86" height="22" rx="5" fill="url(#usr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="737" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ New User</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="105" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERNAME · FULL NAME · EMAIL · ROLE · ACTIVE · ACTIONS</text>

  <rect x="240" y="124" width="540" height="32" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="143" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin · Marie Dupont · marie.dupont@acme.fr · admin</text>
  <rect x="660" y="132" width="44" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682" y="143" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Yes</text>
  <text x="724" y="143" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="143" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="160" width="540" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">jdoe · John Doe · john.doe@acme.fr · operator</text>
  <rect x="660" y="168" width="44" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682" y="179" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Yes</text>
  <text x="724" y="179" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="179" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="196" width="540" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">smartin · Sophie Martin · s.martin@acme.fr · viewer</text>
  <rect x="660" y="204" width="44" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682" y="215" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Yes</text>
  <text x="724" y="215" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="215" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="232" width="540" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="251" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">paudit · Paul Auditor · p.auditor@acme.fr · auditor</text>
  <rect x="660" y="240" width="40" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="680" y="251" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">No</text>
  <text x="724" y="251" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="251" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="296" width="540" height="124" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="252" y="316" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EDIT FORM</text>

  <text x="252" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERNAME</text>
  <rect x="332" y="328" width="180" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="342" y="344" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="528" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <rect x="572" y="328" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="582" y="344" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">operator ▾</text>

  <text x="252" y="370" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FULL NAME</text>
  <rect x="332" y="360" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="342" y="376" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="568" y="370" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <rect x="618" y="362" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="625" y="373" fill="white" fontSize="10" textAnchor="middle">✓</text>

  <rect x="252" y="394" width="90" height="22" rx="5" fill="url(#usr-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="297" y="409" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Save</text>
  <rect x="352" y="394" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="412" y="409" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔑 Reset password</text>

  <rect x="20" y="118" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users table</text>
  <text x="30" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">login · name · email · role · status</text>
  <line x1="200" y1="134" x2="240" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usr-arrow)"/>

  <rect x="820" y="232" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Active toggle</text>
  <text x="830" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">disable without deleting</text>
  <line x1="820" y1="248" x2="704" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usr-arrow)"/>

  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit form</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">role + active + password reset</text>
  <line x1="200" y1="356" x2="332" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usr-arrow)"/>
</svg>

---

## Users list

The table at the bottom of the page lists every user account.

| Column | Description |
|---|---|
| **Username** | Login identifier of the account. |
| **Full Name** | Display name shown in the UI. |
| **Email** | Account email — used for notifications and password-reset workflows. |
| **Role** | Role currently assigned to the user (one of the entries from *Configuration → Security → Roles*). |
| **Active** | `Yes` (green) when the account can log in; `No` (red) when it is disabled but kept for traceability. |
| **Actions** | **✏️** opens the edit form for the user; **🗑** deletes the user after a browser confirmation prompt. |

When the table is empty, a message points to *Initialize Database* — the seed `admin` account is created during that step.

---

## New User

Click **+ New User** at the top right of the section to open the create form. Fields:

| Field | Description |
|---|---|
| **Username** | Login identifier. Must be unique. **Cannot be changed after creation.** |
| **Password** | Initial password set on the account. |
| **Full Name** | Display name shown in the UI. |
| **Email** | Account email. |
| **Role** | Role assigned to the user (dropdown listing roles defined in *Security → Roles*). |

Click **Create** to persist or **Cancel** to discard.

---

## Edit user

Click **✏️** on any row to open the edit form for that user. The form is the same as for creation, with three differences:

| Field | Behaviour when editing |
|---|---|
| **Username** | Hidden — usernames are immutable. |
| **Password** | Hidden — use **Reset Password** below instead. |
| **Active** | `Yes` / `No` — toggles whether the account can log in. Disabling preserves the user's history without granting access. |
| **Reset Password** | Optional field. **Leave empty to keep the current password**; type a new value to overwrite it. |

Click **Save** to persist or **Cancel** to discard.

---

## Delete a user

Click **🗑** on any row. A native browser confirmation appears (`Delete user "X"?`). Confirming deletes the account immediately — there is no soft-delete recovery, so prefer **Active = No** when you only need to revoke access temporarily.

---

## Status messages

Inline feedback appears below the table:

- `User created` / `User updated` / `User deleted` on success.
- The original error message from the API on failure (e.g. duplicate username, missing field).

---

## Tips & best practices

- **Match Username to your SSO / corporate identifier** when applicable, even if NomaUBL is not federated yet — it makes future SSO migration painless.
- **Set a strong initial password** on creation, then ask the user to change it on first login.
- **Prefer *Active = No* over deletion** when an employee leaves — keeps the audit trail intact while immediately revoking access.
- **Use Reset Password sparingly.** When users can change their own password elsewhere, this field is mostly for unlocking accounts after a password loss.
- **Re-run *Initialize Database*** *(Database Connectors → NomaUBL)* on a fresh deployment if no users exist — it provisions the seed `admin`.
- **Bind every user to a role.** Without a valid role, the user lands without permissions and sees an empty navigation.
