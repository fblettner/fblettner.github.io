---
title: Secure — overview
description: "The security of a Liberty Next install: who can sign in (local users, OpenID Connect, sign-in throttle), what they can open (roles, allow and deny permissions), which rows they see (data scope), how secrets are stored (ENC: values), and the licence."
keywords: [Liberty Next, security, authentication, authorization, roles, permissions, data scope, OIDC, encrypted secrets, licence, superuser]
---

# Secure — overview

| Question | Answer | Page |
|---|---|---|
| Who can sign in? | Local users (`auth.toml`, or database tables) and, optionally, OpenID Connect. | [Sign-in](./sign-in.md), [Users](./users.md) |
| What can they open? | Roles made of allow and deny permissions, edited on the application's menu tree. | [Roles and permissions](./roles-and-permissions.md) |
| Which rows do they see? | A role's data scope — by company, region or any dictionary item, possibly from the user's attributes. | [Data scope](./roles-and-permissions.md#data-scope) |
| How are secrets stored? | Encrypted `ENC:` values, with the install's master key. | [Encrypted secrets](./encrypted-secrets.md) |
| Which products are unlocked? | The licence key. | [Licence key](./license-key.md) |

---

## Identity \{#identity\}

| Backend | Users and roles stored in |
|---|---|
| `toml` (default) | `config/auth.toml` — no database needed to sign in. |
| `db` | The `ly2_users`, `ly2_roles` and `ly2_user_roles` tables of the framework pool. |

Either can be combined with **OpenID Connect**: users sign in at the company's identity provider and are created at their first sign-in, without roles; an administrator assigns them. Attributes for the data scope can come from the provider's claims.

Local passwords are hashed (Argon2id). After ten failed sign-ins in five minutes for a user, sign-in is refused for a while (*429*).

---

## Authorization \{#authorization\}

A permission is a colon-separated string — `sql:sales:orders_get`, `api:crm:get_customer`, `menu:sales:orders`, `dashboard:sales.overview`, `ai:chat` — and a role is a list of them, allows and denies (`!…`). The role editor writes them from the menu tree.

| Surface | Checked |
|---|---|
| Run a screen's read query, write a row | `sql:<connector>:<query>` of that query, then the data scope. |
| Call an API endpoint | `api:<connector>:<endpoint>`. |
| See a menu entry | The permission of what the entry runs, or an explicit `menu:` allow; a `menu:` or `dashboard:` deny hides it. |
| Use the assistant | `ai:chat`; the assistant's queries are filtered by the data scope. |
| Settings, Monitoring, Nomaflow, change packages | **Superuser** only. |

A deny wins over an allow, across all of a user's roles; superusers pass every check and every data scope.

---

## Sessions \{#sessions\}

A sign-in gives an access token (one hour) and a refresh token (14 days). Each renewal consumes the refresh token, reads the user again and applies changed roles, attributes or a deactivation. A change of rights therefore reaches a signed-in user within the hour, or at once after signing out and in.

---

## Secrets \{#secrets\}

Pool passwords, API credentials, the licence key, the AI key, the OIDC secret and the SMTP password are encrypted when saved from Settings. The master key that encrypts them comes from the environment and must never change on an existing install. See [Encrypted secrets](./encrypted-secrets.md).

---

## Not provided by the framework \{#not-provided\}

| Need | Where to handle it |
|---|---|
| Multi-factor authentication, password policies | The OpenID Connect provider. |
| Mapping the provider's groups to roles | Not provided: roles are assigned in Liberty Next → Administer → Access. |
| Revoking one session at once | Deactivate the user (effective at the next renewal, within the hour); changing the JWT secret signs everybody out. |
| LDAP sign-in | Through an OpenID Connect provider in front of the directory. |
