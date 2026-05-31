---
title: Secure — overview
description: "Who can sign in (local or OIDC), what they can do (roles + permissions with allow/deny grammar), and what's encrypted at rest. The two layers of Liberty's security model."
keywords: [Liberty Framework, secure, authentication, authorization, roles, permissions, OIDC, encrypted secrets, license]
---

# Secure — overview

Securing a Liberty install splits into two layers:

| Layer | What it decides | Where you configure it |
|---|---|---|
| **Identity** | *Who is signing in?* | `app.toml` — pick the backend (`toml` or `db`), optionally enable OIDC. |
| **Authorization** | *What can they do once signed in?* | The Settings → Access page — create roles, assign permissions, attach roles to users. |

Plus two cross-cutting concerns:

| Concern | What it does | Where |
|---|---|---|
| **Encrypted secrets** | Pool passwords, OIDC client secret, API tokens are stored as `ENC:<base64>` on disk (AES-256-GCM). | The 🔒 toggle on the corresponding field in any Settings page. |
| **License key** | Gates the bundled vendor products — Nomasx-1, Nomajde, NomaUBL …. | *Settings → App → License* (encrypted at rest, live on save). `LIBERTY_LICENSE_KEY` env var is the legacy fallback. |

This page is the map; each task gets its own page.

---

## Identity — the two backends

Liberty doesn't ship with its own user database by default — it reads users from a TOML file unless you opt into the database backend.

| Backend | When |
|---|---|
| **`toml`** (default) | Single instance, small team. Users + roles live in `config/auth.toml`. Edits are atomic; no DB required. |
| **`db`** | Multi-instance / shared user catalogue. Tables `ly2_users` / `ly2_roles` / `ly2_user_roles` on the framework's pool. |

Either backend can be **layered with OIDC** — users sign in through their corporate IdP (Keycloak, Azure AD, Auth0, Okta, Google …) and are auto-provisioned on first sign-in. OIDC users still need their roles assigned manually on the Access page; **groups are not auto-mapped** (this is a deliberate design choice, not a missing feature).

See [Sign-in](./sign-in.md) for the full setup of either path.

---

## Authorization — the permission grammar

Every action goes through a **permission check** before the user gets to do it. Liberty uses colon-segmented permission strings with **allow + deny** semantics:

| Pattern | Grants |
|---|---|
| `sql:<connector>:<query>` | Run that specific SQL query. |
| `sql:<connector>:*` | Run every query on that connector. |
| `api:<connector>:<endpoint>` | Call that specific API endpoint. |
| `menu:<app>:<id>` | See that menu item (folder or leaf). |
| `dashboard:<id>` | Open that dashboard. |
| `ai:chat` | Use the AI assistant. |
| `*` | Wildcard — everything. The superuser baseline. |
| `!<any pattern>` | Explicit **deny** — wins over any allow. |

The deny prefix is the key feature that makes the grammar expressive: instead of listing every permission a role should have, you start with a `*` baseline and **subtract** with `!<pattern>` rules.

| Recipe | Permissions |
|---|---|
| Full superuser. | `["*"]` |
| Everything except deleting customers. | `["*", "!sql:crm:customers_delete"]` |
| Everything except the Admin menu. | `["*", "!menu:crm:admin", "!menu:crm:admin:*"]` |
| Only the Reports menu (and its data). | `["menu:crm:reports", "menu:crm:reports:*"]` |
| Reader on one connector. | `["sql:crm:*", "menu:crm:*"]` |

Allow / deny resolution order:

1. **Superuser bypass** — `is_superuser = true` skips every check (deny rules ignored).
2. **Explicit deny** — if any `!<pattern>` matches, the request is rejected.
3. **Explicit allow** — if any non-`!` pattern matches, the request is allowed.
4. **Default deny** — otherwise, rejected.

The full reference and the AccessBuilder UI for composing rules: [Roles and permissions](./roles-and-permissions.md).

---

## What a permission gates — by surface

| Surface | Permission(s) required |
|---|---|
| Sign in | A valid local / OIDC identity + `is_active = true`. |
| See a menu item | `menu:<app>:<id>`. Items the user can't see are pruned from the rendered tree. |
| Open a screen | `sql:<connector>:<read_query>` — the screen inherits its read query's permission. |
| Edit a row (dialog or grid) | `sql:<connector>:<update_query>` / `<insert_query>` / `<delete_query>`. |
| Open a dashboard | `dashboard:<id>`. Underlying chart queries still need their own `sql:` permissions. |
| Run an API endpoint | `api:<connector>:<endpoint>`. |
| Use the AI assistant | `ai:chat` + the underlying query permissions for whatever the assistant calls. |
| Run a Nomaflow job | The job's `job:<name>` permission (covered in [Nomaflow → Permissions](../../../nomaflow/administration.md#permissions)). |
| Edit Settings (Access, Connectors, Screens, Menus, Pools, Notifications) | `is_superuser = true`. Granular `settings:<section>` permissions exist for finer control. |

The pattern: **most checks reduce to `sql:` or `api:`** because that's where the work actually happens. The other patterns (`menu:`, `dashboard:`, `ai:`) are visibility / surface controls layered on top.

---

## JWT and refresh — when permission changes take effect

Liberty issues two tokens at sign-in:

| Token | Lifetime | Purpose |
|---|---|---|
| **Access token** | ~1 hour (default) | Sent on every API call. Embeds the user's roles + permissions snapshot. |
| **Refresh token** | ~14 days (default) | Used to mint a new access token without re-typing the password. |

A consequence: **permission changes don't take effect until the user's next access token mint** — either a refresh or a fresh sign-in. So:

| Action | When the user sees the effect |
|---|---|
| You add a role to a user. | On their next refresh (within ~1 hour) or sign-out + sign-in (immediately). |
| You remove a role. | Same. |
| You disable a user (`is_active = false`). | On their next refresh — until then the existing access token still works. |

For genuinely urgent revocations, the operational pattern is: disable the user **and** rotate the JWT signing secret (forces every existing token to be rejected). The framework doesn't offer per-user token revocation at the moment.

---

## Encrypted secrets — at-rest protection

Every secret field across the framework — pool passwords, OIDC client secret, API connector tokens, custom connector credentials — is encrypted at rest with the framework's **master key**. The UI shows a 🔒 toggle on every such field; the value lands on disk as `ENC:<base64>`.

The encryption is AES-256-GCM with PBKDF2-HMAC-SHA512 key derivation; the master key comes from `[crypto] master_key` in `app.toml` (or the `LIBERTY_MASTER_KEY` env var). Without the master key the encrypted values can't be decrypted — back it up alongside the configuration.

Full coverage: [Encrypted secrets](./encrypted-secrets.md).

---

## License — gating licensed connectors

Some bundled vendor products — Nomasx-1, Nomajde, NomaUBL and similar — are loaded only when the framework has a valid license key.

The license is an RS256 JWT signed by the vendor; the canonical place to set it is *Settings → App → License* (encrypted at rest with the install master key, live on save — no restart). The `LIBERTY_LICENSE_KEY` env var still works as a fallback for installs that prefer to keep the secret in an orchestrator's secret store. With a missing or expired license, the licensed connectors don't load — their routes return 404 — but the rest of the framework still works.

Full coverage: [License key](./license-key.md).

---

## What's NOT in the framework

Knowing what's missing prevents wrong assumptions when you design your security policy:

| Feature | Status |
|---|---|
| **Multi-factor authentication (MFA)** | Not implemented. For MFA, delegate to an OIDC provider that enforces it. |
| **Password expiry / forced rotation** | Not implemented. |
| **Account lockout after failed logins** | Not implemented. |
| **Rate limiting on `/auth/login`** | Not implemented at the framework layer — handle at the reverse proxy (nginx / Traefik). |
| **OIDC group → Liberty role auto-mapping** | Not implemented. OIDC users land with no roles; an operator assigns them. |
| **Audit log of role / permission changes** | Not implemented at the framework layer. The `audit_table` mechanism on screens covers data writes, not auth changes. |
| **LDAP authentication** | Not implemented — use an OIDC bridge in front of LDAP (Keycloak does this well). |
| **API key authentication** (in addition to JWT) | Not implemented. JWT bearer tokens only. |
| **Per-user JWT revocation** | Not implemented. Rotating the JWT signing secret invalidates **every** token. |

Most of these can be handled by an upstream OIDC provider (MFA, rate limiting, account lockout, audit) — push them to the IdP rather than expecting the framework to do them.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Configure how users sign in — local or OIDC. | [Sign-in](./sign-in.md). |
| Create roles and compose permissions. | [Roles and permissions](./roles-and-permissions.md). |
| Add local users and assign roles. | [Users](./users.md). |
| Encrypt secret fields at rest. | [Encrypted secrets](./encrypted-secrets.md). |
| Install a license key for licensed connectors. | [License key](./license-key.md). |

---

## What's next

- [Sign-in](./sign-in.md) — local backend, OIDC, the sign-in screen.
- [Concepts → Authentication](./sign-in.md) — deep reference.
