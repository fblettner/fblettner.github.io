---
title: Sign-in — local and OIDC
description: "Local users, optional OIDC sign-in against any compliant provider (Keycloak, Azure AD, Auth0, Okta…). What the user sees at sign-in."
keywords: [Liberty Framework, sign-in, login, authentication, OIDC, Keycloak, Azure AD, Auth0, Okta, local users]
---

# Sign-in — local and OIDC

A user signs into Liberty through one of two paths:

| Path | When |
|---|---|
| **Local username + password** | The user types credentials on the sign-in screen. The framework checks them against the stored users and mints a JWT. |
| **OIDC** | The user clicks *Sign in with OIDC*, is redirected to the IdP, signs in there, and returns to Liberty with their identity. The framework provisions / updates the user and mints a JWT. |

Both can coexist — the sign-in screen carries both buttons, and users pick whichever applies.

---

## The sign-in screen

<svg viewBox="0 0 1200 344" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="login-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="login-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="login-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="login-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="440" y="20" width="320" height="304" rx="14" fill="url(#login-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="464" y="58" fill="#4a9eff" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="464" y="76" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">low-code framework</text>
  <text x="464" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERNAME</text>
  <rect x="464" y="108" width="272" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="122.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="464" y="152" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSWORD</text>
  <rect x="464" y="158" width="272" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="173.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">••••••••••</text>
  <rect x="464" y="194" width="272" height="28" rx="5" fill="url(#login-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="600.0" y="211.5" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sign in</text>
  <text x="600.0" y="238" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Forgot password?</text>
  <rect x="464" y="252" width="272" height="28" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600.0" y="269.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Sign in with OIDC</text>
  <text x="464" y="294" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">OIDC must be enabled in config/app.toml; otherwise</text>
  <text x="464" y="306" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">that button 404s.</text>
  <rect x="160" y="40" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="170" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The application's name</text>
  <text x="170" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">App name, else Liberty Next</text>
  <line x1="360" y1="57.0" x2="440" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
  <rect x="160" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="170" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Local account</text>
  <text x="170" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">username and password</text>
  <line x1="360" y1="177.0" x2="464" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
  <rect x="840" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="850" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Forgot password?</text>
  <text x="850" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only when e-mail is set up</text>
  <line x1="840" y1="187.0" x2="660.0" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
  <rect x="840" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="850" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Single sign-on</text>
  <text x="850" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to the OIDC provider</text>
  <line x1="840" y1="277.0" x2="736" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
</svg>

The screen shows the application's name (**App name**, else *Liberty Next*), the local form, then **Sign in with OIDC** and a line under it saying that OIDC must be enabled. The OIDC button is always there: while OIDC is not enabled, it leads to an error page (404). **Forgot password?** appears under **Sign in** only when e-mail notifications are set up — see [Users → Forgot password](./users.md#forgot).

---

## Step 1 — Local users

Local users and roles are managed in **Liberty Next → Administer → Access**. The installation chooses where they are stored (the server's configuration folder, or the framework's database for several instances sharing one user list); the screens are the same either way.

### Bootstrap the first user

On a fresh install with no users, run:

```bash
liberty-admin init-db
```

The command creates the `admin` superuser and prints a random password once (`--admin-username`, `--password-env` to choose them). The Docker installation runs it for you. Sign in once, then use *Liberty Next → Administer → Access → Users* to add others (see [Users](./users.md)).

---

## Step 2 — Configure OIDC (optional) \{#oidc\}

OIDC is layered on top of the local users. Any OIDC-compliant provider works — Liberty discovers endpoints, JWKS and supported scopes from the provider's `.well-known/openid-configuration`.

| Provider | Discovery URL pattern |
|---|---|
| **Keycloak** | `https://<host>/realms/<realm>/.well-known/openid-configuration` |
| **Azure AD** | `https://login.microsoftonline.com/<tenant>/v2.0/.well-known/openid-configuration` |
| **Auth0** | `https://<tenant>.auth0.com/.well-known/openid-configuration` |
| **Okta** | `https://<tenant>.okta.com/oauth2/default/.well-known/openid-configuration` |
| **Google** | `https://accounts.google.com/.well-known/openid-configuration` |

### Configuration

OIDC is set in **Liberty Next → Administer → App → OpenID Connect (SSO)**. The client secret is encrypted when saved, in a masked input with an eye to show it. Saving applies the change at once — **no restart**; the next sign-in uses it.

| Field | Required | Notes |
|---|---|---|
| **Enabled** | yes | Makes **Sign in with OIDC** lead to the provider; off, the button answers 404. |
| **Discovery URL** | yes | The provider's `.well-known/openid-configuration` URL. |
| **Client ID** | yes | The client id registered at the provider. |
| **Client secret** | yes | Encrypted when saved. |
| **Scopes** | yes | At least `openid`; `email` and `profile` bring those claims (`openid email profile` by default). |
| **Username claim** | no | The claim that becomes the Liberty user name (`preferred_username` by default; then `email`, then `sub` when absent). |
| **Email claim**, **Name claim** | no | The claims that fill the e-mail address and the full name. |
| **Redirect URL override (proxy)** | no | Only behind a reverse proxy that rewrites the host. |
| **Frontend redirect** | no | Only for a front end that handles the tokens itself. |

See [App settings → OpenID Connect](../settings-app.md#section-4--openid-connect-sso).

### Register the redirect URL with the provider

The redirect URL Liberty expects is:

```
https://<your-framework-host>/auth/oidc/callback
```

Add it to the OAuth2 client's *Redirect URIs* in the provider's console. Without this, the provider rejects the callback with `redirect_uri_mismatch`.

---

## Step 3 — What happens on OIDC sign-in

1. User clicks **Sign in with OIDC** on the sign-in screen.
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

OIDC users **appear in *Liberty Next → Administer → Access → Users* only after their first sign-in** — Liberty doesn't pre-create them. So the typical onboarding pattern is:

1. The new hire signs in via OIDC. They land with no roles → they see an empty app.
2. The operator opens *Liberty Next → Administer → Access → Users*, finds the new user, assigns the right roles.
3. The user refreshes (or signs back in) and now has access.

For installs with many OIDC users, an automation script can pre-create them via `POST /admin/access/users` so roles are ready at first sign-in — but the standard flow assumes manual role assignment.

See [Users](./users.md) for the assignment UI.

A user signed in through OIDC has no local password: their **Profile** window has no Security tab.

---

## Tokens — the JWT pair

When sign-in succeeds (local or OIDC), Liberty mints two tokens:

| Token | Default lifetime | What it carries |
|---|---|---|
| **Access token** | 1 hour | The user's `username`, roles, permissions, attributes and resolved data scope. Sent on every API call as `Authorization: Bearer <token>`. |
| **Refresh token** | 14 days | Used at `POST /auth/refresh` to mint a new access token without re-typing credentials. |

**Refresh tokens are single-use.** Each `POST /auth/refresh` returns a new refresh token and consumes the one presented. The same token presented again more than 60 seconds later (two browser tabs racing) is refused. An API client must store the refresh token of every reply. The renewal also reads the user again: a deactivated user is refused, and changed roles, attributes and data scope apply from that moment.

### Silent refresh

The refresh is **silent** — the operator never sees a "session expired" prompt on an active browser session:

- A **proactive timer** runs the refresh a short window before the access token expires, so the next API call already carries a fresh token.
- Any API call that comes back **401** triggers a refresh-and-retry: Liberty asks the server for a new access token with the refresh token, replays the original request, and returns the result to the caller. The single 401 is transparent to the calling code.
- If the refresh itself is refused (refresh token expired or revoked), the sign-in screen takes over — this is the only path where the user has to re-authenticate.

The two paths are complementary. The proactive timer covers the common case where the session is quiet enough that no request would notice the expiring token; the 401-retry catches the corner case where the timer missed (a paused tab, a device coming out of sleep). Together they make an active session survive the access token's TTL without visible interruption.

---

## Too many failed sign-ins \{#throttle\}

After 10 failed sign-ins for one username within 5 minutes, `/auth/login` answers *429 — Too many failed logins — try again in N s* until the window has passed. From one client address the limit is five times higher. A successful sign-in clears the count for that user.

The counts are kept in the server's memory: a restart clears them.

---

## Sign-out

Sign-out is **client-side only** — the access token is removed from local storage and the user redirects to the sign-in screen. The token itself remains valid until its TTL expires (it just can't be re-presented without the storage).

For OIDC installs that want **provider sign-out** (terminate the IdP session too), point the provider's *Post-logout redirect URI* at Liberty and configure the provider's end-session endpoint. Liberty doesn't initiate provider logout itself.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| The redirect URL registered at the provider differs from Liberty's. | Sign-in returns `redirect_uri_mismatch`. | Register the exact URL Liberty sends — including the scheme and port. |
| The **Discovery URL** returns 404 or HTML. | Sign-in fails at startup with a config error. | Verify the URL — most providers add `/.well-known/openid-configuration` to a base URL; Liberty needs the full path. |
| The **Username claim** is not in the token. | First sign-in fails with "no username". | Either change the claim to one the IdP actually emits (`email` works for most) or configure the IdP to emit the expected claim. |
| OIDC user signs in but sees an empty app. | Expected — OIDC users land with no roles. | Operator assigns roles via *Liberty Next → Administer → Access → Users*. |
| OIDC configured but not enabled. | **Sign in with OIDC** leads to a 404 page. | Tick **Enabled**. |

---

## What's next

- [Users](./users.md) — add local users, manage OIDC users post-first-sign-in, assign roles.
- [Roles and permissions](./roles-and-permissions.md) — what to assign once a user has signed in.
- [Concepts → Authentication](./sign-in.md) — the deep reference.
