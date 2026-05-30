---
title: OIDC sign-in
description: "Recipe — wire the framework against Authentik, Keycloak, Azure AD or Okta in 10 minutes. Single sign-on, group-to-role mapping, auto-provisioning, break-glass admin."
keywords: [Liberty Framework, cookbook, OIDC, SSO, Authentik, Keycloak, Azure AD, Okta]
---

# OIDC sign-in

## The problem

Users sign in with the company's identity provider, not a per-app password. You want SSO without bespoke code, with the IdP's group membership translating to Liberty roles.

## The pattern

Two halves:

1. **On the IdP** — register the framework as an OAuth2/OIDC client, expose a `groups` claim, register the redirect URI.
2. **On the framework** — flip *OIDC enabled* on under *Settings → Framework → Authentication*, fill in the four standard values, click *Test sign-in*.

## The recipe

### Step 1 — register Liberty on the IdP

The procedure depends on the IdP but the shape is identical.

#### Authentik

1. *Applications → Providers* → *Create* → **OAuth2/OpenID Provider**.
2. *Redirect URIs*: `https://liberty.example.com/auth/oidc/callback`.
3. *Property mappings*: add the default `openid email groups` set.
4. Note the **Client ID** + **Client secret**.
5. *Applications → Applications* → *Create* → link to the provider; pick which groups to expose.

#### Keycloak

1. *Realm* → *Clients* → *Create* — Client ID `liberty`, OpenID Connect protocol.
2. *Valid redirect URIs*: `https://liberty.example.com/auth/oidc/callback`.
3. *Credentials* tab → note the secret.
4. *Client scopes* → *liberty-dedicated* → *Add mapper* → **Group Membership** → claim name `groups`, omit `/` prefix.

#### Azure AD / Entra

1. *App registrations* → *New registration*.
2. *Redirect URI*: `https://liberty.example.com/auth/oidc/callback` (Web).
3. *Certificates & secrets* → *New client secret* — note the value.
4. *Token configuration* → *Add groups claim* → All groups; emit as `groups` (not object IDs).

#### Okta

1. *Applications* → *Create App Integration* → OIDC, Web Application.
2. *Sign-in redirect URI*: `https://liberty.example.com/auth/oidc/callback`.
3. *Assignments* — choose the groups.
4. *Authorization servers → default → Claims* → add a `groups` claim, type Groups.

### Step 2 — configure Liberty

**Settings → Framework → Authentication**:

| Field | Value |
|---|---|
| **OIDC enabled** | ✓ |
| **Issuer URL** | The IdP's issuer. Examples: `https://auth.example.com/application/o/liberty/` *(Authentik, trailing slash matters)* — `https://kc.example.com/realms/<realm>` *(Keycloak)* — `https://login.microsoftonline.com/<tenant>/v2.0` *(Azure)* — `https://<domain>.okta.com/oauth2/default` *(Okta)*. |
| **Client ID** | From the IdP. |
| **Client secret** | 🔒 From the IdP — paste in encrypted mode. |
| **Redirect URI** | `https://liberty.example.com/auth/oidc/callback` *(must match what's registered on the IdP)*. |
| **Email claim** | `email` *(default)*. |
| **Groups claim** | `groups` *(default)*. |
| **Auto-provision** | ✓ *(creates a Liberty user on first SSO sign-in)*. |

Click **▶ Test sign-in** at the bottom of the OIDC sub-form. A new tab opens, you sign in on the IdP, the tab returns "OIDC test successful" plus the resolved claims (email, groups) so you can confirm the mapping.

**Save & reload**.

### Step 3 — map IdP groups to Liberty roles

The framework maps the `groups` claim 1:1 to Liberty role identifiers. Open **Settings → Roles**, make sure each IdP group you care about has a matching Liberty role with the right permissions.

| IdP group | Liberty role | Permissions |
|---|---|---|
| `crm-sales` | `crm-sales` | `sql:customers:*`, `sql:deals:*`, `screen:crm:*`, `menu:crm:*` |
| `crm-managers` | `crm-managers` | `crm-sales` *(inherits)* + dashboard access |
| `admins` | `admin` | `*` |

### Step 4 — test as a real user

Sign out as `admin`. The login page now has a **Sign in with SSO** button. Click it, authenticate on the IdP, return to the framework — you have the roles the IdP claims you do, you see what those roles let you see.

## Break-glass access

The local username/password form **stays available** alongside the SSO button. The `admin` user can still sign in directly even when the IdP is unreachable. Keep at least one local admin for this reason — never delete it.

## Single sign-out

For end-session propagation back to the IdP, set **End-session endpoint** in the OIDC sub-form. The framework redirects through it on `POST /auth/logout`.

## Variations

| You want… | Do this |
|---|---|
| **Restrict to a specific email domain** | The framework refuses sign-in if `email_claim` doesn't end with the value of `[auth.oidc] allowed_domains` (set in the sub-form). Multiple domains supported as a comma list. |
| **Prevent auto-provisioning** | Turn *Auto-provision* off. Users must exist in *Settings → Users* before they can sign in. The IdP provides authentication; you control authorisation. |
| **Multiple IdPs** | Not supported in one form; the typical alternative is to use the IdP-of-IdPs (Authentik / Keycloak federating Azure + Google + …) and point Liberty at the broker. |
| **A custom claim instead of `email`** | Set *Email claim* to whatever the IdP exposes (`preferred_username`, `upn`, etc.). |

## What's next

- [Authentication → OIDC](../build/secure/sign-in.md#oidc) for the full field reference.
- [Roles & permissions](../build/secure/roles-and-permissions.md) for the IdP-group-to-role mapping.
- [CRM tutorial → Step 5](../tutorial-crm/05-auth.md) for a worked example.
