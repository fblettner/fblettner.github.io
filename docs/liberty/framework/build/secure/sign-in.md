---
title: Sign-in — local and OIDC
description: "Pick the identity backend (TOML or DB), configure local users, optionally enable OIDC against any compliant provider (Keycloak, Azure AD, Auth0, Okta…). What the user sees at sign-in."
keywords: [Liberty Framework, sign-in, login, authentication, OIDC, Keycloak, Azure AD, Auth0, Okta, local users, auth.toml]
---

# Sign-in — local and OIDC

A user signs into Liberty through one of two paths:

| Path | When |
|---|---|
| **Local username + password** | The user types credentials on the sign-in screen. The framework checks them against `auth.toml` (or the `ly2_users` table) and mints a JWT. |
| **OIDC** | The user clicks *Sign in with \<provider>*, is redirected to the IdP, signs in there, and returns to Liberty with their identity. The framework provisions / updates the user and mints a JWT. |

Both can coexist — a single install offers both buttons on the sign-in screen, and users pick whichever applies.

---

## The sign-in screen

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="si-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#si-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="500" y="60" fill="#e2e8f0" fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sign in to Liberty</text>

  <text x="300" y="100" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Username</text>
  <rect x="300" y="110" width="400" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="312" y="130" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">alice</text>

  <text x="300" y="158" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Password</text>
  <rect x="300" y="168" width="400" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="312" y="188" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">••••••••••</text>

  <rect x="300" y="216" width="400" height="36" rx="6" fill="#4a9eff"/>
  <text x="500" y="238" fill="#0b1220" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sign in</text>

  <line x1="300" y1="276" x2="430" y2="276" stroke="#334155"/>
  <text x="500" y="282" fill="#64748b" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">or</text>
  <line x1="570" y1="276" x2="700" y2="276" stroke="#334155"/>

  <rect x="300" y="296" width="400" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="500" y="318" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">Sign in with Keycloak</text>
</svg>

When OIDC is configured, a second button appears below the local form. When OIDC isn't configured, only the local form shows.

For installs that want to **force OIDC** (no local fallback), set `[auth] disable_local_login = true` in `app.toml` — the local form hides and only the OIDC button remains.

---

## Step 1 — Pick the identity backend

In `app.toml`:

```toml
[auth]
backend = "toml"   # or "db"
```

| Value | Stores users in | When |
|---|---|---|
| **`toml`** (default) | `config/auth.toml` | Single-instance installs, small teams. Edits land atomically on disk. |
| **`db`** | The framework's pool (tables `ly2_users`, `ly2_roles`, `ly2_user_roles`). | Multi-instance installs that need a shared user catalogue. |

Both backends are managed through the **same UI** — *Settings → Access*. The backend is a deployment choice; the UI doesn't care.

### Bootstrap the first user

On a fresh install with no users, run:

```bash
liberty-admin init-db --superuser <name>
```

The command prompts for a password and creates a superuser. Sign in once, then use *Settings → Access → Users* to add others (see [Users](./users.md)).

---

## Step 2 — Configure OIDC (optional)

OIDC is layered on top of the chosen backend. Any OIDC-compliant provider works — Liberty discovers endpoints, JWKS and supported scopes from the provider's `.well-known/openid-configuration`.

| Provider | Discovery URL pattern |
|---|---|
| **Keycloak** | `https://<host>/realms/<realm>/.well-known/openid-configuration` |
| **Azure AD** | `https://login.microsoftonline.com/<tenant>/v2.0/.well-known/openid-configuration` |
| **Auth0** | `https://<tenant>.auth0.com/.well-known/openid-configuration` |
| **Okta** | `https://<tenant>.okta.com/oauth2/default/.well-known/openid-configuration` |
| **Google** | `https://accounts.google.com/.well-known/openid-configuration` |

### Configuration

In `app.toml`:

```toml
[oidc]
enabled         = true
discovery_url   = "https://keycloak.corp.local/realms/liberty/.well-known/openid-configuration"
client_id       = "liberty-app"
client_secret   = "${OIDC_CLIENT_SECRET}"   # env var — never inline a secret
scopes          = "openid email profile"
username_claim  = "preferred_username"      # which claim becomes the Liberty username
email_claim     = "email"
name_claim      = "name"
redirect_url    = ""                        # blank = auto-derived as https://<host>/auth/oidc/callback
frontend_redirect = ""                      # blank = standard server-side flow
```

| Field | Required | Notes |
|---|---|---|
| `enabled` | yes | Turn OIDC on / off. When off, the OIDC button hides from the sign-in screen. |
| `discovery_url` | yes | The provider's `.well-known` URL. Liberty fetches once at startup, caches the result. |
| `client_id` | yes | The OAuth2 client id registered with the provider. |
| `client_secret` | yes | Read from env var (`${OIDC_CLIENT_SECRET}`). Never inline. |
| `scopes` | yes | At minimum `openid`; add `email` / `profile` to pull those claims. |
| `username_claim` | no (defaults to `preferred_username`) | Which claim becomes the Liberty username. Falls back to `email`, then `sub` if missing. |
| `email_claim` | no | Which claim becomes the user's email. |
| `name_claim` | no | Which claim becomes the user's full name. |
| `redirect_url` | no | Override only when the framework is behind a reverse proxy that rewrites the host. |
| `frontend_redirect` | no | Set for SPA-style flows that handle tokens in the URL fragment. Standard server-side flow leaves it blank. |

### Register the redirect URL with the provider

The redirect URL Liberty expects is:

```
https://<your-framework-host>/auth/oidc/callback
```

Add it to the OAuth2 client's *Redirect URIs* in the provider's console. Without this, the provider rejects the callback with `redirect_uri_mismatch`.

---

## Step 3 — What happens on OIDC sign-in

1. User clicks **Sign in with \<provider>** on the sign-in screen.
2. Liberty redirects to the provider's authorization endpoint (`/auth/oidc/login`).
3. User signs in at the provider — including MFA, password resets, all the IdP's own flows.
4. The provider redirects back to `https://<host>/auth/oidc/callback?code=…&state=…`.
5. Liberty exchanges the code for an ID token, validates the signature via JWKS, extracts the claims.
6. Liberty **provisions** or **updates** the local user:
   - First sign-in: a new user row is created with `provider = "oidc"`, `provider_subject = <sub>`, `username = <username_claim>`, `email`, `full_name` from claims. `is_active = true`, **no roles**.
   - Subsequent sign-ins: the email + full name fields are refreshed from the latest claims; roles stay as configured in Liberty.
7. Liberty mints its own JWT pair (access + refresh) and the user is signed in.

The provider's tokens are **not propagated** — Liberty issues fresh tokens with its own signing key. The provider's session ends; Liberty's begins.

---

## OIDC users in the Access page

OIDC users **appear in *Settings → Access → Users* only after their first sign-in** — Liberty doesn't pre-create them. So the typical onboarding pattern is:

1. The new hire signs in via OIDC. They land with no roles → they see an empty app.
2. The operator opens *Settings → Access → Users*, finds the new user, assigns the right roles.
3. The user refreshes (or signs back in) and now has access.

For installs with many OIDC users, an automation script can pre-create them via `POST /admin/access/users` so roles are ready at first sign-in — but the standard flow assumes manual role assignment.

See [Users](./users.md) for the assignment UI.

---

## Disabling local login

For OIDC-only installs that want to force every user through the IdP:

```toml
[auth]
disable_local_login = true
```

The sign-in screen hides the local form; only the OIDC button shows. **Don't disable local login until you've verified OIDC works** — locking yourself out of the only sign-in path is a frustrating recovery exercise.

For an emergency rescue with `disable_local_login = true`, edit `app.toml` directly on disk to flip the flag back, restart the framework, sign in locally, then re-enable.

---

## Tokens — the JWT pair

When sign-in succeeds (local or OIDC), Liberty mints two tokens:

| Token | Default lifetime | What it carries |
|---|---|---|
| **Access token** | 1 hour | The user's `username`, roles list, permissions snapshot. Sent on every API call as `Authorization: Bearer <token>`. |
| **Refresh token** | 14 days | Used at `POST /auth/refresh` to mint a new access token without re-typing credentials. |

Lifetimes are configurable:

```toml
[auth]
access_token_ttl_seconds  = 3600     # default 1h
refresh_token_ttl_seconds = 1209600  # default 14 days
```

Short access TTLs (e.g. 15 minutes) make permission changes propagate faster but increase the refresh load. The default 1-hour balance fits most installs.

---

## Sign-out

Sign-out is **client-side only** — the access token is removed from local storage and the user redirects to the sign-in screen. The token itself remains valid until its TTL expires (it just can't be re-presented without the storage).

For OIDC installs that want **provider sign-out** (terminate the IdP session too), point the provider's *Post-logout redirect URI* at Liberty and configure the provider's end-session endpoint. Liberty doesn't initiate provider logout itself.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Inlined `client_secret` in `app.toml`. | The secret leaks into version control. | Use `${OIDC_CLIENT_SECRET}` and set the env var. |
| `redirect_url` doesn't match what's registered with the provider. | Sign-in returns `redirect_uri_mismatch`. | Register the exact URL Liberty sends — including the scheme and port. |
| `discovery_url` returns 404 or HTML. | Sign-in fails at startup with a config error. | Verify the URL — most providers add `/.well-known/openid-configuration` to a base URL; Liberty needs the full path. |
| `username_claim` not present in the token. | First sign-in fails with "no username". | Either change the claim to one the IdP actually emits (`email` works for most) or configure the IdP to emit the expected claim. |
| OIDC user signs in but sees an empty app. | Expected — OIDC users land with no roles. | Operator assigns roles via *Settings → Access → Users*. |
| Forgot to enable OIDC after configuring it. | The OIDC button doesn't show. | `enabled = true`. |
| `disable_local_login = true` without a working OIDC setup. | Nobody can sign in. | Disable the flag in `app.toml` directly on disk, restart, fix OIDC, then re-enable. |

---

## What's next

- [Users](./users.md) — add local users, manage OIDC users post-first-sign-in, assign roles.
- [Roles and permissions](./roles-and-permissions.md) — what to assign once a user has signed in.
- [Concepts → Authentication](../../auth/authentication.md) — the deep reference.
