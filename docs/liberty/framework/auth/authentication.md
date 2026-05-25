---
title: Authentication
description: "Sign-in surface for the Liberty Framework — local users (TOML or database), OpenID Connect (Authentik, Keycloak, Azure AD, Okta), JWT lifecycle, configured from Settings → Framework → Authentication. End-to-end setup for each backend, claim mapping, session lifetime."
keywords: [Liberty Framework, authentication, login, JWT, refresh token, OIDC, OpenID Connect, Keycloak, Authentik, Azure AD, Okta, users, settings]
---

# Authentication

The framework supports two ways for a user to sign in: a **local username + password** (with the user store on disk or in the database) and **OpenID Connect** (any standards-compliant IdP). Both produce the same artefact — a short-lived **JWT access token** + a longer-lived **refresh token** — which the frontend stores in memory and the backend verifies on every API call.

The decision between local and OIDC, plus the JWT lifetimes and the OIDC claim mapping, are set under **Settings → Framework → Authentication**. The two can coexist: OIDC enabled for SSO users, the local backend kept for break-glass administration.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>LOCAL USERS</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}><b>Settings → Users</b><br/>Two storage variants:<br/>• TOML file on the host<br/>• Database tables (ly2_users)<br/>Argon2id password hashes.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '8px'}}>OIDC SSO</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Authentik · Keycloak · Azure AD · Okta · Google.<br/>Configured under Authentication → OIDC.<br/>Maps the IdP's groups claim to Liberty roles 1:1.</div>
  </div>
  <div style={{border: '1px solid rgba(34,197,94,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#22c55e', marginBottom: '8px'}}>SESSIONS</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>HS256 JWT access token (default 15 min).<br/>Refresh token rotated on use (default 7 days).<br/>Lifetimes editable per install.</div>
  </div>
</div>

---

## Picking a local backend

In **Settings → Framework → Authentication**, the **Backend** dropdown offers two values:

| Backend | Storage | Pro | Con |
|---|---|---|---|
| **Local — TOML** *(default)* | `config/auth.toml` on the host. | Zero infrastructure — works without an external DB. | Doesn't survive container rebuilds when the file isn't mounted; doesn't share state across replicas. Not appropriate past ~100 users. |
| **Local — Database** | `ly2_users` / `ly2_roles` / `ly2_permissions` tables on the default pool. | Survives container rebuilds when the DB is external. Shared across replicas — sign-in on one node works on every node. Scales to thousands of users. | Requires the default pool to be reachable at startup. One more thing to back up. |

The first time the framework is run on a fresh install, `./start.sh init-db` bootstraps whichever backend is configured and seeds an `admin` user (the password is printed once on stdout).

Switching the backend is a **restart-required** change — the form highlights the field with a *Restart required* badge.

---

## Managing local users — Settings → Users

The **Users** tab is the canonical editor for the local backend (both variants). The page lists every user with their roles, active flag and last sign-in:

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Users</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Refresh</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New user</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Username</div><div>Display name</div><div>Roles</div><div>Active</div><div>Last sign-in</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>admin</div><div>Administrator</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>admin</span></div><div>●</div><div>09:42</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>alice</div><div>Alice Dupont</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>editor</span> <span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>viewer</span></div><div>●</div><div>2 days</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>bob</div><div>Bob Martin</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>viewer</span></div><div style={{opacity: 0.45}}>○</div><div>30 days</div>
  </div>
</div>

| Action | How |
|---|---|
| **Create a user** | *+ New user* — username, display name, roles (multi-select from the configured roles), password. |
| **Reset password** | Click a user, *Reset password* — prompts for the new password (twice). |
| **Add / remove roles** | Click a user, edit the *Roles* multi-select. |
| **Deactivate** | Click a user, toggle *Active* off. Soft-deactivates the user (preserves history). |
| **Revoke sessions** | Click a user, *Revoke all sessions* — invalidates every active access + refresh token. |

The same operations are available via the [CLI](../cli-reference.md#liberty-admin) for shell scripting.

### Password policy

Passwords are hashed with **argon2id**. The Argon2 tuning is editable under *Settings → Framework → Authentication* — defaults are `Time cost = 2`, `Memory cost = 64 MiB`, `Parallelism = 1`, tuned for a ~50 ms server cost on a modern CPU. Raise *Memory cost* on installs with stricter threat models.

A pluggable validator rejects weak passwords. The bundled validator enforces:

- 10+ characters.
- At least one digit, one upper-case, one lower-case.
- Not equal to the username.

To override, set *Password validator* under *Settings → Framework → Authentication* to a callable from your apps repo (e.g. `myapp.security:validate`). See [Apps & Plugins → Plugins](../apps/plugins.md) for the function signature.

---

## OIDC SSO \{#oidc\}

In **Settings → Framework → Authentication**, flip the **OIDC enabled** toggle on. The OIDC sub-form appears:

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '0 0 10px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c084fc'}}>OIDC</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Enabled</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● On</span></div>
    <div style={{opacity: 0.75}}>Issuer URL</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>https://auth.example.com/application/o/liberty/</span></div>
    <div style={{opacity: 0.75}}>Client ID</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>liberty</span></div>
    <div style={{opacity: 0.75}}>Client secret</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>🔒 ENC:…   <span style={{marginLeft: '8px', opacity: 0.6, fontStyle: 'italic'}}>Reveal</span></span></div>
    <div style={{opacity: 0.75}}>Redirect URI</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>https://liberty.example.com/auth/oidc/callback</span></div>
    <div style={{opacity: 0.75}}>Email claim</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>email</span></div>
    <div style={{opacity: 0.75}}>Groups claim</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>groups</span></div>
    <div style={{opacity: 0.75}}>Auto-provision</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● On</span></div>
  </div>
</div>

| Field | Description |
|---|---|
| **Issuer URL** | URL of the OIDC provider. The framework fetches `${issuer}/.well-known/openid-configuration` at startup to discover the endpoints. |
| **Client ID** / **Client secret** | OAuth2 client credentials registered with the IdP. The secret is always encrypted in storage — the 🔒 icon is locked on. |
| **Redirect URI** | The framework's callback URL. Must be registered on the IdP side. |
| **Email claim** | JWT claim used as the local username. Default `email`. |
| **Groups claim** | JWT claim mapped to Liberty roles 1:1. Default `groups`. A group named `editor` on the IdP grants the Liberty role `editor`. |
| **Auto-provision** | When *on*, a Liberty user is created on first sign-in. When *off*, the user has to exist already — convenient when group membership is broader than the Liberty allow-list. |

A **Test sign-in** button at the bottom of the OIDC sub-form opens the IdP redirect in a new tab and reports the result. Use it before saving — a wrong issuer URL is much easier to spot here than from the login page.

### IdP-specific issuer formats

| IdP | Issuer URL template |
|---|---|
| **Authentik** | `https://auth.example.com/application/o/liberty/` (trailing slash matters) |
| **Keycloak** | `https://kc.example.com/realms/<realm>` (and enable the *groups* mapper on the Liberty client) |
| **Azure AD / Entra** | `https://login.microsoftonline.com/<tenant>/v2.0` (set *Groups claims* in token config) |
| **Okta** | `https://<your-domain>.okta.com/oauth2/default` |
| **Google Workspace** | `https://accounts.google.com` (no group claim — use HD claim for domain restriction, manage roles in Liberty's Users tab) |

### The sign-in page

With OIDC on, the **Sign in with SSO** button appears next to the username/password form on the login page. The local form stays available for break-glass admins.

---

## Token lifecycle

The lifetimes are editable in **Settings → Framework → Authentication**:

| Token | Default | Editor field | Storage | Use |
|---|---|---|---|---|
| **Access token** | 15 min | *Access token lifetime* | Frontend `localStorage` (key `liberty_access`) | Sent as `Authorization: Bearer …` on every API call. |
| **Refresh token** | 7 days | *Refresh token lifetime* | `httpOnly` cookie (`liberty_refresh`), `SameSite=Strict` | Exchanged for a new access token when the previous one expires. |

The frontend's API client transparently refreshes the access token when it gets a `401` with `WWW-Authenticate: Bearer error="invalid_token"`. The failing request replays once with the new token.

### Revocation

| Trigger | Effect |
|---|---|
| User logs out | The refresh token is dropped from the server-side store; the access token expires within the access TTL. |
| Operator clicks *Revoke all sessions* on the user | Same as logout for every active session of the user. |
| Operator marks the user *Inactive* | Subsequent token refreshes fail. |
| Restart of the framework with a new JWT signing key | Every active access token becomes invalid immediately. Refresh tokens fail too — every user has to sign in again. |

The JWT signing key is referenced by env-var name in the Authentication form (default `${LIBERTY_JWT_SECRET}`). Rotating the key is a **restart-required** action.

---

## Permissions

The Users tab is gated by `users:read` (view) / `users:write` (edit). The Roles tab follows the same model — see [Roles & permissions](./roles-permissions.md). The Authentication sub-form on the Framework tab is gated by `settings:framework`.

---

## Tips & best practices

- **Set the JWT signing key in production.** An ephemeral key works for development but invalidates every session on each restart.
- **Use the database backend past a handful of users.** TOML breaks down under concurrent edits; the DB backend handles it cleanly.
- **Keep at least one local admin even on OIDC installs.** Break-glass access when the IdP is down is invaluable.
- **Mirror the IdP groups to Liberty roles 1:1.** Cleanest contract — name your Liberty roles to match the IdP group names.
- **Rotate the JWT signing key on a schedule.** Annual cadence is reasonable; the disruption is one re-sign-in per user.
- **Use *Test sign-in* on the OIDC form** before saving. Catches wrong issuer URLs / unregistered redirect URIs early.

---

## Under the hood

The Authentication settings live in `config/app.toml` under the `[auth]` and `[auth.oidc]` sections. Local user entries live in `config/auth.toml` (TOML backend) or the `ly2_users` tables (Database backend). Operators **do not edit these files by hand** — the Settings UI is the canonical interface. Advanced operators can still use the *Raw TOML* tab or the [CLI](../cli-reference.md) for scripted setup.

---

## What's next

- [Roles & permissions](./roles-permissions.md) — what a role can do, the permission codes, the assignment matrix.
- [License key](./license-key.md) — RS256-signed feature gates.
- [Apps & Plugins → Plugins](../apps/plugins.md) — custom password validator and other auth hooks.
