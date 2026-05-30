---
title: Users
description: "The Settings → Access → Users tab — add local users, manage OIDC users that landed at first sign-in, assign roles, toggle is_active and is_superuser, reset passwords."
keywords: [Liberty Framework, users, AccessBuilder, local user, OIDC user, password, is_active, is_superuser, roles assignment]
---

# Users

A **user** in Liberty is the identity that signs in and carries roles. The Settings → Access → Users tab is where you create local users, see OIDC users that have signed in at least once, assign roles, and toggle the active and superuser flags.

The same UI manages both identity backends (TOML / DB) and both identity sources (local / OIDC). The differences land on **what fields are editable**: OIDC users have no password (it's at the IdP), and their `provider` field is read-only.

---

## The Users tab

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="us-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#us-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Access</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Users</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">🛡 Roles</text>
  <rect x="880" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="920" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add user</text>

  <rect x="40" y="118" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">admin</text>
  <text x="56" y="158" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Admin User · admin@corp.local · local</text>
  <rect x="800" y="130" width="64" height="22" rx="4" fill="rgba(251,146,60,0.18)" stroke="rgba(251,146,60,0.40)"/>
  <text x="832" y="145" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">superuser</text>
  <rect x="870" y="130" width="80" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="910" y="145" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">admin</text>

  <rect x="40" y="182" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="204" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">alice</text>
  <text x="56" y="222" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Alice Martin · alice.martin@corp.local · oidc</text>
  <rect x="800" y="194" width="80" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="840" y="209" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">analyst</text>
  <rect x="886" y="194" width="64" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="918" y="209" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">reporter</text>

  <rect x="40" y="246" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="268" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">bob</text>
  <text x="56" y="286" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Bob Dupont · bob@corp.local · local</text>
  <rect x="828" y="258" width="60" height="22" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.40)"/>
  <text x="858" y="273" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">inactive</text>
  <rect x="894" y="258" width="56" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="922" y="273" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">reader</text>

  <rect x="40" y="310" width="920" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="500" y="338" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Click a row to open the User editor.</text>
</svg>

Each card shows the username (monospace), full name, email, provider (local / oidc), the status chips and the assigned roles.

| Chip | Meaning |
|---|---|
| **superuser** (orange) | `is_superuser = true` — bypasses every permission check. |
| **inactive** (red) | `is_active = false` — the user can't sign in. Their existing sessions stop on next token refresh. |
| **No roles** (muted) | No roles assigned and not a superuser — the user signs in but sees nothing. |
| **Role names** (purple) | Each assigned role, one chip per role. |

---

## Add a local user

Click **＋ Add user**. The User editor opens with every field empty.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ue-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#ue-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Add user</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Username *</text>
  <rect x="200" y="80" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="96" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">alice</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Full name</text>
  <text x="40" y="138" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(optional)</text>
  <rect x="200" y="116" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="132" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Alice Martin</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Email</text>
  <text x="40" y="174" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(optional)</text>
  <rect x="200" y="152" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="168" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">alice@corp.local</text>

  <text x="40" y="196" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Password *</text>
  <text x="40" y="210" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(8+ chars)</text>
  <rect x="200" y="188" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="204" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••</text>

  <text x="40" y="240" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Roles</text>
  <rect x="200" y="224" width="500" height="46" rx="6" fill="rgba(0,0,0,0.30)" stroke="#334155"/>
  <rect x="210" y="232" width="64" height="20" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="242" y="246" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">analyst ✕</text>
  <rect x="282" y="232" width="64" height="20" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="314" y="246" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">reporter ✕</text>
  <rect x="354" y="232" width="160" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="364" y="246" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick a role…</text>

  <text x="40" y="294" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Active</text>
  <rect x="200" y="282" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="297" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="296" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">the user can sign in</text>

  <text x="40" y="326" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Superuser</text>
  <rect x="200" y="314" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="234" y="328" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">bypasses every permission check</text>

  <line x1="20" y1="364" x2="980" y2="364" stroke="#1f2937"/>
  <rect x="780" y="380" width="80" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="400" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="868" y="380" width="80" height="32" rx="6" fill="#4a9eff"/>
  <text x="908" y="400" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
</svg>

### Fields

| Field | Required | Notes |
|---|---|---|
| **Username** | yes | Letters, digits, underscores, dots and hyphens. Used as the sign-in handle, the JWT subject, and the audit identity. **Immutable** after creation. |
| **Full name** | no | The display name shown in headers and audit columns. |
| **Email** | no | Recipient address for invites, password reset (when implemented), notification routes. |
| **Password** | yes (for new users) | At least 8 characters. Stored as an Argon2id hash, never readable back. Leave blank on edit to keep the current password. |
| **Roles** | no | Chip picker — type or pick from the dropdown. The dropdown lists every role configured under the Roles tab. |
| **Active** | yes (default on) | When off, the user can't sign in; existing sessions die on next token refresh. |
| **Superuser** | no | When on, bypasses every permission check. Use sparingly. |

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
| **Active** | yes | Toggle to deactivate. |
| **Superuser** | yes | Toggle to grant / revoke superuser. |

Saves go through `PATCH /admin/access/users/{username}` for the property updates and `POST /admin/access/users/{username}/password` if a new password was typed.

:::tip[When the user is signed in]
Changes don't break their current session. The new roles / disabled flag / password take effect on the next **refresh** (within the access token TTL — default 1 hour) or **sign-out + sign-in**.
:::

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
| **Superuser** | yes | Toggle to grant the bypass. |

The standard onboarding sequence:

1. The new hire signs in via OIDC for the first time.
2. They land with **no roles** → they see an empty app.
3. They tell their admin "I'm in but see nothing".
4. The admin opens *Settings → Access → Users*, finds them, assigns the right roles, saves.
5. The user refreshes the page (or signs out + back in) and now has access.

For installs that want to pre-create OIDC users with roles already attached, scripts can hit `POST /admin/access/users` with `provider = "oidc"` and the expected `provider_subject` (the `sub` claim). On first sign-in the framework finds the pre-created user and uses it. Standard installs skip this and assign roles after first sign-in.

---

## Deactivating vs deleting

Two ways to take a user out:

| Option | Effect | When |
|---|---|---|
| Toggle **Active** off | User can't sign in. Their current session continues until the access token expires (default 1 h), then refresh fails. Roles, history and audit trail preserved. | Maintenance, leave of absence, suspended account. |
| **🗑 Delete** (per-row action, with confirm) | User removed entirely. Their history is preserved (audit rows are immutable), but the username can be re-used. | Departure, GDPR right-to-erasure. |

Deactivation is **reversible in one click**. Deletion is final — the user re-signing in (OIDC) would auto-create a new account with the same username but fresh `id` and no carryover of roles.

---

## What you actually do — typical workflows

### Onboard a local hire

1. *Settings → Access → Users → ＋ Add user*.
2. Username = corporate handle, password = a one-time string they'll change, email = their address.
3. Assign roles per their team (`analyst`, `reporter`, …).
4. Save.
5. Send them the temporary credentials through whatever channel your company uses.
6. They sign in, they reach the AI assistant or change-password flow to set their own password.

### Onboard an OIDC hire

1. They sign in via OIDC the first time — Liberty auto-creates the account.
2. They report no access.
3. *Settings → Access → Users*, find them, assign roles, save.
4. They refresh → they're in.

### Change a user's password (you're the admin)

1. *Settings → Access → Users*, click the user.
2. Type the new password in the **Password** field (8+ chars).
3. Save.
4. Tell the user. They sign in with the new password; their existing session keeps working until the access token expires.

### Revoke an account immediately

1. Toggle **Active** off and save.
2. If you can't tolerate the up-to-1-hour delay until their current access token expires, rotate the JWT signing secret (`[auth] jwt_secret` in `app.toml` or `LIBERTY_JWT_SECRET` env var) and restart. Every existing token is invalidated — a heavy hammer but the only **immediate** revocation Liberty offers.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| OIDC user has no roles after sign-in. | Expected — the operator hasn't assigned any yet. | Open *Settings → Access → Users*, assign roles. |
| Editing an OIDC user's email reverts on next sign-in. | The IdP claim wins; the framework refreshes from the latest token. | Edit the email at the IdP. |
| Trying to set a password for an OIDC user. | Backend rejects with 400. | OIDC users have no local password — they sign in through the provider. |
| Changing a user's role doesn't take effect immediately. | The user's JWT still has the old roles. | They refresh (or sign-out + sign-in) — within the access token TTL the new roles apply. |
| Deleting and recreating a user to "reset" them. | Their audit history detaches (now references a deleted username). | Use deactivate + reactivate; only delete when the user is truly gone. |
| Marking a user superuser to fix a permission gap. | Works, but bypasses every check — including ones the user shouldn't be bypassing. | Add the missing permission to one of their roles instead. |

---

## What's next

- [Roles and permissions](./roles-and-permissions.md) — what to assign once a user is created.
- [Sign-in](./sign-in.md) — how users actually authenticate.
- [Encrypted secrets](./encrypted-secrets.md) — the 🔒 toggle for credentials elsewhere in the framework.
