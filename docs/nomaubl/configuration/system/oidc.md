---
title: OIDC
description: "Configure single sign-on for NomaUBL: OIDC Authorization Code + PKCE flow, IdP issuer / client / scopes, claim mapping keyed by email, allowed email domains, Google Workspace hd claim enforcement, auto-provisioning with a default role. Drives the login screen jointly with the Auth Mode field on the Global template."
keywords: [NomaUBL, OIDC, SSO, single sign-on, OpenID Connect, PKCE, Authorization Code, Keycloak, Auth0, Azure AD, Microsoft Entra, Okta, Google Workspace, hd claim, allowed domains, auto-provisioning, F564250]
---

# OIDC

NomaUBL ships a built-in **OIDC** single-sign-on integration that lets users authenticate against an external identity provider (Keycloak, Auth0, Azure AD / Microsoft Entra, Okta, Google Workspace…) instead of — or alongside — the local username + password.

The integration uses the standard **Authorization Code + PKCE** flow, fetches the IdP's metadata from its `/.well-known/openid-configuration`, and keys NomaUBL users by their **email** claim.

The login screen's behaviour is driven by the **Auth Mode** field on the [Global template](./global.md#tab-5--authentication):

| Auth Mode | Login screen |
|---|---|
| `internal` *(default)* | Local username + password form. |
| `oidc` | Single sign-on button only. |
| `both` | SSO button above the local form — fallback path for break-glass admin access when the IdP is unavailable. |

A default OIDC template is created automatically on fresh installs and upgrades, and can also be created with one click from the **+ Add OIDC** button in the *Configuration Manager* header.

:::info[Introduced in 2026.06.22.5]
SSO is a new capability — operators upgrading from a prior version should review the *Switching on* checklist at the bottom of this page before flipping `authMode` away from `internal`.
:::

---

## Opening the editor

- Sidebar → **Configuration → System → OIDC**.
- The editor is grouped into five sections — *Identity provider*, *Claim mapping*, *Domain allow-list*, *Provisioning* and *Switching on*.

---

## At a glance

<svg viewBox="0 0 1020 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oidc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <marker id="oidc-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="oidc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oidc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="oidc-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.24"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.08"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="200" height="100" rx="14" fill="url(#oidc-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="140" y="68" fill="#4a9eff" fontSize="12" textAnchor="middle" fontWeight="800" fontFamily="system-ui, sans-serif">Browser</text>
  <text x="140" y="92" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">user@example.com</text>
  <text x="140" y="110" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">clicks "Sign in with SSO"</text>
  <text x="140" y="126" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.6">PKCE: code_verifier</text>

  <rect x="400" y="40" width="220" height="100" rx="14" fill="url(#oidc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="510" y="68" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontWeight="800" fontFamily="system-ui, sans-serif">NomaUBL</text>
  <text x="510" y="92" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">/api/auth/oidc/start</text>
  <text x="510" y="106" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">/api/auth/oidc/callback</text>
  <text x="510" y="124" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.6">F564250 row by USEMAIL</text>

  <rect x="780" y="40" width="200" height="100" rx="14" fill="url(#oidc-g-green)" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="880" y="68" fill="#4ade80" fontSize="12" textAnchor="middle" fontWeight="800" fontFamily="system-ui, sans-serif">Identity Provider</text>
  <text x="880" y="92" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Keycloak / Auth0 / Entra…</text>
  <text x="880" y="110" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.65">/.well-known/openid-configuration</text>
  <text x="880" y="126" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.65">issues ID token</text>

  <line x1="240" y1="74" x2="400" y2="74" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#oidc-arrow-blue)"/>
  <text x="320" y="68" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">1. /oidc/start</text>

  <line x1="620" y1="74" x2="780" y2="74" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#oidc-arrow-blue)"/>
  <text x="700" y="68" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">2. authorize + state + PKCE</text>

  <line x1="780" y1="106" x2="240" y2="106" stroke="#4ade80" strokeWidth="1.4" markerEnd="url(#oidc-arrow)"/>
  <text x="500" y="100" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">3. redirect back with auth code</text>

  <line x1="240" y1="130" x2="400" y2="130" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#oidc-arrow-blue)"/>
  <text x="320" y="124" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">4. /oidc/callback</text>

  <rect x="40" y="200" width="940" height="380" rx="14" fill="url(#oidc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="228" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">OIDC template — editor preview</text>
  <line x1="40" y1="246" x2="980" y2="246" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="270" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ IDENTITY PROVIDER</text>
  <text x="70" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUER URL</text>
  <rect x="220" y="280" width="380" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="295" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">https://idp.example.com/realms/myrealm</text>
  <text x="70" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT ID</text>
  <rect x="220" y="306" width="200" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="321" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">nomaubl</text>
  <text x="440" y="321" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">+ Client secret · Redirect URI · Scopes</text>

  <text x="60" y="356" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ CLAIM MAPPING</text>
  <text x="70" y="376" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL CLAIM</text>
  <rect x="220" y="366" width="120" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="381" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">email</text>
  <text x="360" y="381" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">matched against USEMAIL on F564250</text>

  <text x="60" y="416" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ DOMAIN ALLOW-LIST</text>
  <text x="70" y="436" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ALLOWED DOMAINS</text>
  <rect x="220" y="426" width="380" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="441" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">nomana-it.fr, partner.com</text>
  <text x="70" y="466" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUIRE GOOGLE hd</text>
  <rect x="220" y="456" width="160" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="471" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">nomana-it.fr</text>
  <text x="400" y="471" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">refuses personal Gmail with the same address</text>

  <text x="60" y="506" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ PROVISIONING</text>
  <text x="70" y="526" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTO-CREATE</text>
  <rect x="220" y="516" width="80" height="22" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="260" y="531" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Y ▾</text>
  <text x="310" y="531" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT ROLE</text>
  <rect x="420" y="516" width="160" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="531" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">viewer ▾</text>

  <text x="60" y="568" fill="#cbd5e1" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Pair with</text>
  <text x="120" y="568" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">global.authMode = oidc</text>
  <text x="300" y="568" fill="#cbd5e1" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">to switch the login screen.</text>
</svg>

---

## Identity provider

| Field | Description |
|---|---|
| **Issuer URL** | Base URL of the OIDC IdP — for example `https://idp.example.com/realms/myrealm` for a Keycloak realm, an Auth0 tenant URL, or the Azure AD endpoint. NomaUBL fetches the IdP metadata from `<issuer>/.well-known/openid-configuration` so the individual endpoints (authorise, token, userinfo, JWKS) never need to be entered. |
| **Client ID** | The OIDC client registered on the IdP side for NomaUBL. |
| **Client secret** | Optional for public PKCE clients (the IdP can be configured without one). Stored Base64-encoded on disk. |
| **Redirect URI** | Must exactly match the redirect URI registered on the IdP side. Typical value: `https://<your-host>/api/auth/oidc/callback`. |
| **Scopes** | Space-separated. Defaults to `openid profile email`. Add provider-specific scopes here when extra claims are needed. |

---

## Claim mapping

NomaUBL keys OIDC users by their **email** — the `email` claim is matched against the `USEMAIL` column on `F564250`. The short `USUSER` column stays the audit / session key (10-char JDE convention); on auto-provisioning it is derived from the email's local-part.

| Field | Description |
|---|---|
| **Email claim** | ID-token claim that carries the user's email. Default `email` — works as-is for Google, Microsoft, Keycloak and Auth0. |
| **Full-name claim** | Used to populate `USFULLNAME` on first login and refreshed on every subsequent login. Default `name`. |
| **Username claim (fallback)** | Used only when the email claim is missing from the ID token (rare). Most setups leave this blank. |

---

## Domain allow-list

Restricts who can sign in through SSO to a curated set of email tenants. Useful when a corporate IdP also issues tokens to consumer accounts (Gmail being the canonical case).

| Field | Description |
|---|---|
| **Allowed email domains** | Comma-separated list. **Leave blank** to allow any verified email. When set, only emails whose domain matches one of these entries can sign in — a personal Google account or a different tenant gets refused at the callback. |
| **Require Google Workspace domain (`hd` claim)** | Google-only. When set, the ID token must carry an `hd` claim equal to this value — refuses a personal Gmail that happens to share an address with a Workspace user. Leave blank to skip the check; the field is meaningless for non-Google IdPs. |

---

## Provisioning

Controls what happens when an unknown user signs in successfully against the IdP for the first time.

| Field | Description |
|---|---|
| **Auto-create accounts** | `Y` / `N`. When `Y`, first sign-in creates the `F564250` row with the default role below — the user lands directly on the dashboard. When `N`, unknown users are refused with a *contact admin* message even after a successful authentication. |
| **Default role** | Role assigned to auto-provisioned accounts. Sourced from the actual role list (no hard-coded defaults). Existing accounts keep their current role and are **not** re-bound on subsequent logins. |

The auto-provisioned username is a short JDE-style 10-character handle derived from the email's local-part — e.g. `john.doe@example.com` → `JOHNDOE`. Collisions append a numeric suffix.

---

## OIDC sessions in NomaUBL

Sessions minted through OIDC behave slightly differently from local ones:

- The **Profile modal** locks the *Security* tab — password rotation happens at the IdP.
- Identity fields (email, full name) are **read-only** in the Profile modal — they refresh from the ID token on each sign-in.
- **Roles, grants and row filters stay managed in NomaUBL** — the IdP only verifies identity. The OIDC user picks up the role assigned to its account on `F564250`, exactly like a local user.
- Sign-out invalidates the local NomaUBL session; it does not call the IdP's `end_session_endpoint` by default.

---

## Switching on

Once the OIDC template is filled, the **Auth Mode** field on the [Global template](./global.md#tab-5--authentication) controls how the login screen behaves:

| Mode | Result |
|---|---|
| `internal` *(default)* | Local form only. OIDC is configured but not exposed. |
| `oidc` | SSO button only. Local form hidden. |
| `both` | SSO button above the local form — recommended during a rollout so admin accounts retain a fallback path. |

A safe rollout typically goes:

1. Fill the OIDC template and save.
2. Set **Auth Mode** to `both`. Sign in with an SSO test account end-to-end.
3. Confirm the auto-provisioned `F564250` row has the expected role and `USEMAIL`.
4. Flip **Auth Mode** to `oidc` once every account has signed in at least once (or once every account has the right role assigned manually if auto-provisioning is `N`).

:::warning[Keep one local admin]
When **Auth Mode** is `oidc`, the local form is hidden — there is no break-glass path if the IdP is unreachable. Keep at least one local `admin` account on `F564250` and **leave Auth Mode at `both`** if the operational risk of an IdP outage is unacceptable.
:::

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| *Sign-in refused at callback with a domain message.* | The user's email domain is not in *Allowed email domains*, or the Google `hd` claim does not match the required value. |
| *Sign-in refused with "user not found"* | *Auto-create accounts* is `N` and the user has no pre-existing `F564250` row — provision the user manually, or flip auto-create on. |
| *Login loops back to the IdP screen.* | The **Redirect URI** in NomaUBL does not exactly match the one registered on the IdP side (trailing slash, scheme, hostname). |
| *401 / metadata fetch error on startup.* | The **Issuer URL** is wrong, unreachable from the NomaUBL host, or its `/.well-known/openid-configuration` is gated behind authentication. |
| *Operator can sign in but lands on an empty dashboard.* | The **default role** assigned at provisioning has no page grants. Bind the account to a fuller role in *Configuration → Security → Users*. |

---

## Tips & best practices

- **Use `both` during rollout.** It keeps the local form alive as a fallback while the SSO is being shaken down. Flip to `oidc` only when every account is verified to work through the IdP.
- **Keep `Allowed email domains` populated** when the IdP can issue tokens to consumer accounts (Google Workspace, Microsoft Entra with B2B). It is cheap to set and removes a category of mistake.
- **Auto-provisioning saves operator time** — but only when paired with a deliberately low-privilege default role. Pick `viewer` (or a custom *new-user* role) so newly-created accounts can be reviewed before they get richer permissions.
- **The OIDC user's permissions live in NomaUBL.** Even with SSO on, granting a user access to a page is still a NomaUBL action — the IdP only attests identity.
