---
title: Users
description: "The Liberty Next → Administer → Access → Users tab — add local users, manage OIDC users that landed at first sign-in, assign roles, toggle is_active and is_superuser, reset passwords."
keywords: [Liberty Framework, users, AccessBuilder, local user, OIDC user, password, is_active, is_superuser, roles assignment]
---

# Users

A **user** in Liberty is the identity that signs in and carries roles. The Liberty Next → Administer → Access → Users tab is where you create local users, see OIDC users that have signed in at least once, assign roles, and toggle the active and superuser flags.

The same UI manages both identity backends (TOML / DB) and both identity sources (local / OIDC). The differences land on **what fields are editable**: OIDC users have no password (it's at the IdP), and their `provider` field is read-only.

---

## The Users tab

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="360" rx="14" fill="url(#accu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <rect x="865" y="28" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="914.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="359.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Accounts, their roles and attributes</text>
  <rect x="605.0" y="74" width="359.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="614.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="624.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="641.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="641.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What each role may open and the data it sees</text>
  <rect x="889" y="124" width="75" height="22" rx="5" fill="url(#accu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="926.5" y="138.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add user</text>
  <rect x="244" y="164" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="186" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="182" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin — Admin User</text>
  <rect x="278" y="189" width="58" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="307.0" y="199.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">superuser</text>
  <rect x="244" y="214" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="236" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="232" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">jdoe — John Doe</text>
  <rect x="278" y="239" width="40" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="298.0" y="249.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="323" y="239" width="44" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="345.0" y="249.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">reader</text>
  <text x="374" y="250" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">company=00001,00050</text>
  <rect x="244" y="264" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="286" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="282" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">asmith — Ann Smith</text>
  <rect x="278" y="289" width="49" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="302.5" y="299.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">auditor</text>
  <rect x="244" y="314" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="336" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="332" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">bmartin — Bob Martin</text>
  <rect x="278" y="339" width="53" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="304.5" y="349.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">inactive</text>
  <rect x="336" y="339" width="44" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="358.0" y="349.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">reader</text>
  <rect x="236" y="156" width="728" height="210" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users · Roles</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">two cards at the top</text>
  <line x1="200" y1="87.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a row</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the user</text>
  <line x1="200" y1="217.0" x2="244" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inactive</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cannot sign in</text>
  <line x1="200" y1="337.0" x2="278" y2="346" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add user</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a local account</text>
  <line x1="1000" y1="147.0" x2="964" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles, attributes</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">under the name</text>
  <line x1="1000" y1="247.0" x2="494" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
</svg>

Each line shows the username and the full name, then the chips — inactive, superuser, the assigned roles — and the data-scope attributes (`company=00001,00050`). A click on a line opens the user.

| Chip | Meaning |
|---|---|
| **superuser** (orange) | `is_superuser = true` — bypasses every permission check. |
| **inactive** (red) | `is_active = false` — the user can't sign in. Their existing sessions stop on next token refresh. |
| **No roles** (muted) | No roles assigned and not a superuser — the user signs in but sees nothing. |
| **Role names** (blue) | Each assigned role, one chip per role. |

---

## Add a local user

Click **＋ Add user**. The **Add user** dialog opens with every field empty: Username, then Full name and Email side by side, Roles, Data-scope attributes, the **Active** and **superuser** boxes, Password and **Ask for a new password at the next sign-in**.

<svg viewBox="0 0 1200 442" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="280" y="20" width="640" height="402" rx="14" fill="url(#accd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="300" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Add user</text>
  <line x1="280" y1="66" x2="920" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="300" y="86" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERNAME</text>
  <rect x="300" y="92" width="600" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="106.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="300" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FULL NAME</text>
  <rect x="300" y="138" width="294.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="152.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">John Doe</text>
  <text x="606.0" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <rect x="606.0" y="138" width="294.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="152.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">jdoe@example.com</text>
  <text x="300" y="178" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLES</text>
  <rect x="300" y="187" width="56" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="328.0" y="199.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales  ×</text>
  <rect x="362" y="184" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="198.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Add role</text>
  <text x="530" y="198.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="300" y="224" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA-SCOPE ATTRIBUTES</text>
  <rect x="300" y="230" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="244.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">company</text>
  <rect x="416" y="230" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="244.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="562" y="230" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="574.0" y="244.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="300" y="258" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="272.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Add an attribute…</text>
  <text x="508" y="272.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="300" y="289" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M302.5,294.5 L304.8,296.8 L308.8,292" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="317" y="298" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Active</text>
  <rect x="366.92" y="289" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="383.92" y="298" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">superuser</text>
  <text x="300" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSWORD</text>
  <rect x="300" y="322" width="600" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="336.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">••••••••••</text>
  <text x="886" y="337" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="300" y="351" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M302.5,356.5 L304.8,358.8 L308.8,354" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="317" y="360" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Ask for a new password at the next sign-in (the password given here is a temporary one)</text>
  <line x1="280" y1="376" x2="920" y2="376" stroke="#1f2937" strokeWidth="1"/>
  <rect x="770" y="388" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="802.0" y="402.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="840" y="388" width="64" height="22" rx="5" fill="url(#accd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="872.0" y="402.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="40" y="110" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="50" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identity</text>
  <text x="50" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">username, full name, e-mail</text>
  <line x1="240" y1="127.0" x2="300" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="40" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="50" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="50" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked from the list</text>
  <line x1="240" y1="217.0" x2="300" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="40" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="50" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data-scope attributes</text>
  <text x="50" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">feed the roles' row rules</text>
  <line x1="240" y1="307.0" x2="300" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="960" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="970" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Active, superuser</text>
  <text x="970" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sign in; every permission</text>
  <line x1="960" y1="317.0" x2="448.92" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="960" y="380" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="970" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Temporary password</text>
  <text x="970" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changed at the next sign-in</text>
  <line x1="960" y1="397.0" x2="900" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
</svg>

### Fields

| Field | Required | Notes |
|---|---|---|
| **Username** | yes | Letters, digits, underscores, dots and hyphens. Used as the sign-in handle, the JWT subject, and the audit identity. **Immutable** after creation. |
| **Full name** | no | The display name shown in headers and audit columns. |
| **Email** | no | Where a *Forgot password?* link is mailed (see [below](#forgot)), and the notifications' address. |
| **Password** | yes (for new users) | At least 8 characters. Stored as an Argon2id hash, never readable back. Leave blank on edit to keep the current password. |
| **Ask for a new password at the next sign-in** | default on for a new user | The password given here is a temporary one: the user chooses their own at the first sign-in (see [below](#first-sign-in)). Local accounts only. |
| **Roles** | no | Chip picker — type or pick from the dropdown. The dropdown lists every role configured under the Roles tab. |
| **Active** | yes (default on) | When off, the user can't sign in; existing sessions die on next token refresh. |
| **Superuser** | no | When on, bypasses every permission check and every data scope. Use sparingly. |
| **Data-scope attributes** | no | Key / value pairs read by the roles' data scope — see [below](#attributes). |

Click **Save** — the user is created and the modal closes. The new user appears at the top of the list.

### Endpoints behind the scenes

| Action | Endpoint |
|---|---|
| Create | `POST /admin/access/users` |
| Update | `PATCH /admin/access/users/{username}` |
| Password change | `POST /admin/access/users/{username}/password` |

The TOML backend writes to `config/auth.toml` atomically; the DB backend commits to `ly2_users` / `ly2_user_roles`. Either way, the change takes effect immediately — the user can sign in with the new password right away.

---

## Edit an existing user

Click any user row to open the editor with their current values:

| Field | Editable | Notes |
|---|---|---|
| **Username** | no | Pinned at creation. |
| **Full name** / **Email** | yes | Update freely. |
| **Password** | yes (local users only) | Leave blank to keep the current password. Typing a new one (8+ chars) sets it on Save. |
| **Roles** | yes | Add / remove chips. |
| **Active** | yes | Untick to deactivate. |
| **Superuser** | yes | Tick or untick to grant or revoke superuser. |
| **Data-scope attributes** | yes | See [below](#attributes). |

Saves go through `PATCH /admin/access/users/{username}` for the property updates and `POST /admin/access/users/{username}/password` if a new password was typed.

:::tip[When the user is signed in]
Changes don't break their current session. The new roles / disabled flag / password take effect on the next **refresh** (within the access token TTL — default 1 hour) or **sign-out + sign-in**.
:::

---

## A new password at the first sign-in \{#first-sign-in\}

An account created — or reset by an administrator — with **Ask for a new password at the next sign-in** opens on *Choose your password*: the temporary password, the new one (8+ characters) and its confirmation. Until it's done, the server refuses every call but the change itself (HTTP 403 *password change required*), so the temporary password can't be used for anything else, through the page or the API. The new password takes effect at once — no new sign-in. The same from the command line: `liberty-admin create-user … --must-change`, `liberty-admin set-password … --must-change`. An OIDC account is never asked (its password is the identity provider's).

## Forgot password \{#forgot\}

When SMTP is configured (*Liberty Next → Administer → App*, notifications), the sign-in page shows **Forgot password?**. The user gives their **username and the account's e-mail**; when both match an active local account, a link is mailed to that address. The link works **once and for an hour** — it is bound to the password it was issued for, so any password change, the reset included, ends it. The page answers the same whether or not the two match, so it never tells who has an account; requests are limited per address. The link points at **Public address** (*App*, `[app] public_url`) — set it when users reach the server through a reverse proxy or another name; blank, the browser's address is used.

## Data-scope attributes \{#attributes\}

A role's [data scope](./roles-and-permissions.md#data-scope) can take its values from the user instead of listing them: a rule *Company (CO) = user.company* lets one role serve every subsidiary, each user seeing their own companies.

In the user form, **Data-scope attributes** holds one row per attribute: a key (`company`) and a value (`00001, 00050` — a comma makes a list). **Add an attribute…** suggests the keys the roles already use. A user who lacks the attribute a rule needs sees no row through that rule.

The users list shows the attributes on each card (`company=00001,00050`), and the user sees them, with their data scope in words, in their **Profile** window. A user holding `mcp:use` also finds an **Access tokens** tab there — see [Connect Claude (MCP)](../../mcp.md#token). From the command line: `liberty-admin set-attributes alice company=00001,00050`.

---

## OIDC users — the differences

OIDC users land in the Users list **after their first sign-in** — Liberty auto-creates them with `provider = "oidc"`. The editor for an OIDC user looks the same, but:

| Field | Editable for OIDC? | Notes |
|---|---|---|
| **Username** | no | Same as local. |
| **Full name** / **Email** | technically yes, but… | On every OIDC sign-in, these fields are **refreshed from the IdP claims**. Manual edits get overwritten. Edit them at the IdP instead. |
| **Password** | no | The IdP holds the password. The field is disabled or rejected with HTTP 400. |
| **Roles** | yes | This is the main reason operators visit OIDC users — to assign roles. |
| **Active** | yes | When off, sign-in is rejected even with valid OIDC tokens. |
| **Superuser** | yes | Tick to grant the bypass. |

The standard onboarding sequence:

1. The new hire signs in via OIDC for the first time.
2. They land with **no roles** → they see an empty app.
3. They tell their admin "I'm in but see nothing".
4. The admin opens *Liberty Next → Administer → Access → Users*, finds them, assigns the right roles, saves.
5. The user refreshes the page (or signs out + back in) and now has access.

For installs that want to pre-create OIDC users with roles already attached, scripts can hit `POST /admin/access/users` with `provider = "oidc"` and the expected `provider_subject` (the `sub` claim). On first sign-in the framework finds the pre-created user and uses it. Standard installs skip this and assign roles after first sign-in.

---

## Deactivating a user \{#deactivate\}

Users are not deleted: to take someone out, untick **Active** and save. They can no longer sign in; their current session ends when its access token expires (one hour at most), since the renewal is refused. Roles, attributes and history are kept, and ticking **Active** again restores the account as it was.

---

## What you actually do — typical workflows

### Onboard a local hire

1. *Liberty Next → Administer → Access → Users → ＋ Add user*.
2. Username = corporate handle, password = a one-time string they'll change, email = their address.
3. Assign roles per their team (`analyst`, `reporter`, …).
4. Save.
5. Send them the temporary credentials through whatever channel your company uses.
6. They sign in with it and land on *Choose your password* — with **Ask for a new password at the next sign-in** ticked (the default), nothing else opens until they've set their own.

### Onboard an OIDC hire

1. They sign in via OIDC the first time — Liberty auto-creates the account.
2. They report no access.
3. *Liberty Next → Administer → Access → Users*, find them, assign roles, save.
4. They refresh → they're in.

### Change a user's password (you're the admin)

1. *Liberty Next → Administer → Access → Users*, click the user.
2. Type the new password in the **Password** field (8+ chars); tick **Ask for a new password at the next sign-in** to make it a temporary one.
3. Save.
4. Tell the user. They sign in with the new password (and, if temporary, choose their own); their existing session keeps working until the access token expires.

With SMTP configured, users can also reset it themselves — [Forgot password?](#forgot).

### Revoke an account immediately

1. Untick **Active** and save.
2. If you can't tolerate the up-to-1-hour delay until their current access token expires, rotate the JWT signing secret (`LIBERTY_JWT_SECRET`) and restart. Every existing token is invalidated — a heavy hammer but the only **immediate** revocation Liberty offers.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| OIDC user has no roles after sign-in. | Expected — the operator hasn't assigned any yet. | Open *Liberty Next → Administer → Access → Users*, assign roles. |
| Editing an OIDC user's email reverts on next sign-in. | The IdP claim wins; the framework refreshes from the latest token. | Edit the email at the IdP. |
| Trying to set a password for an OIDC user. | Backend rejects with 400. | OIDC users have no local password — they sign in through the provider. |
| Changing a user's role doesn't take effect immediately. | The user's JWT still has the old roles. | They refresh (or sign-out + sign-in) — within the access token TTL the new roles apply. |
| A user with an attribute-based scope sees nothing. | The user has no value for the attribute the rule reads. | Add it under **Data-scope attributes**. |
| Marking a user superuser to fix a permission gap. | Works, but bypasses every check — including ones the user shouldn't be bypassing. | Add the missing permission to one of their roles instead. |

---

## What's next

- [Roles and permissions](./roles-and-permissions.md) — what to assign once a user is created.
- [Sign-in](./sign-in.md) — how users actually authenticate.
- [Encrypted secrets](./encrypted-secrets.md) — the 🔒 toggle for credentials elsewhere in the framework.
