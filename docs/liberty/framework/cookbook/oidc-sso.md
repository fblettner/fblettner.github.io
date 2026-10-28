---
title: OIDC sign-in
description: "Recipe — let users sign in with the company's identity provider (Microsoft Entra ID, Keycloak, Okta, Auth0…): register the application at the provider, fill Liberty Next → Administer → App → OpenID Connect (SSO), then give the new users their roles."
keywords: [Liberty Next, cookbook, OIDC, SSO, OpenID Connect, Entra ID, Azure AD, Keycloak, Okta, sign-in]
---

# OIDC sign-in

## The problem

Users should sign in with their company account, not with a separate password.

## The pattern

Liberty Next signs users in through any OpenID Connect provider. The local sign-in form stays available; a **Sign in with OIDC** button is added below it.

## The recipe

### 1. Register the application at the provider

At the provider (Entra ID, Keycloak, Okta…), create a web application (confidential client) with:

- **Redirect URI**: `https://<host>/auth/oidc/callback`;
- the scopes `openid email profile`;
- a **client secret**.

Note the **client ID**, the **client secret** and the **discovery URL** (`…/.well-known/openid-configuration`).

### 2. Fill the settings

**Liberty Next → Administer → App → OpenID Connect (SSO)**:

| Field | Value |
|---|---|
| **Enabled** | On. |
| **Discovery URL** | The provider's `.well-known/openid-configuration`. |
| **Client ID**, **Client secret** | As registered — the secret is encrypted when saved. |
| **Scopes** | `openid email profile`. |
| **Username claim** | `preferred_username` by default; `email` or `upn` depending on the provider. |

Save: the change applies without a restart. See [App settings → OpenID Connect](../build/settings-app.md#section-4--openid-connect-sso).

### 3. First sign-in and roles

Users appear in **Liberty Next → Administer → Access → Users** at their first sign-in, active and **without roles**: they see an empty application until a role is given to them. The usual onboarding: the person signs in once, an administrator assigns the roles. See [Users](../build/secure/users.md).

## Check

| Symptom | Cause |
|---|---|
| No OIDC button | **Enabled** is off. |
| The provider refuses the redirect | The redirect URI registered at the provider is not exactly `https://<host>/auth/oidc/callback`. |
| Signed in, empty application | Expected for a new user: assign roles. |
| Wrong user name | Change **Username claim** to the claim the provider fills. |

## What's next

- [Sign-in](../build/secure/sign-in.md) — local and OIDC sign-in in detail.
- [Roles & permissions](../build/secure/roles-and-permissions.md) — what the new users may open.
