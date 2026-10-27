---
title: Step 5 — Roles and sign-in
description: "Decide who sees what in the CRM: a read-only role and a sales role built on the app's menu tree, writes granted beyond the menus, two test users, a data scope by country from a user attribute, and sign-in with the company's identity provider."
keywords: [Liberty Next, tutorial, CRM, roles, permissions, menu tree, beyond the menus, users, data scope, attributes, OIDC]
---

# Step 5 — Roles and sign-in

So far everything was done as a superuser, who sees everything. This step adds two roles, two users to test them, a data scope, and sign-in with the company account.

---

## Two roles

**Settings → Access → Roles**: create each role. The **Access** tab shows the menu tree of every app, with a three-state control on each node (inherit, allow, deny); allowing a menu entry also grants the query or the dashboard it opens. See [Roles & permissions](../build/secure/roles-and-permissions.md).

### `crm-viewer` — reads the CRM

| Setting | Value |
|---|---|
| Baseline | **No access** |
| Menus | **Allow** on the `crm` app's *Sales* folder and on *Pipeline*. |

The holders see the screens and the dashboard, but every write is refused: the write queries (`customers_put`, `deals_post`…) are not granted.

### `crm-sales` — works the deals

| Setting | Value |
|---|---|
| Baseline | **No access** |
| Menus | **Allow** on *Sales* and *Pipeline*. |
| Beyond the menus | **Allow** — Connector (all queries) — `crm`. |

The connector rule grants every query of `crm`, writes included. **Save** each role.

---

## Two users

**Settings → Access → Users → ＋ Add user**:

| User | Role | Attribute |
|---|---|---|
| `alice` | `crm-viewer` | — |
| `bob` | `crm-sales` | `country = FR` |

Give each a password. Sign in as `alice` in a private window: the CRM shows *Sales* and *Pipeline*; changing a customer is refused. As `bob`: the dialogs save. See [Users](../build/secure/users.md).

---

## A data scope — each salesperson's country

Bob should only see the customers of his country.

1. Make the deals carry the country: in `deals_get`, join the customer and select its country:

```sql
SELECT d.ID, d.CUSTOMER_ID, d.NAME, d.STAGE, d.AMOUNT, d.CLOSE_DATE, d.OWNER, c.COUNTRY
FROM deals d JOIN customers c ON c.ID = d.CUSTOMER_ID
```

2. In the `crm-sales` role, **Data scope** tab, a rule: column `COUNTRY`, connector `crm`, **From the user's attribute** `country`. Save.

Bob signs out and in again: Customers and Deals show the French customers only — ACME Industries and Beta SARL — and a write outside his scope is refused. The scope is applied by the server, to the screens, the dashboard and the AI assistant alike. Alice's role has no rule: she still sees everything. See [Roles & permissions → Data scope](../build/secure/roles-and-permissions.md#data-scope).

---

## Sign in with the company account

To let users sign in with their company account (Entra ID, Keycloak, Okta…), fill **Settings → App → OpenID Connect (SSO)** with the values of the application registered at the provider. A **Sign in with OIDC** button appears on the sign-in page; new users arrive without roles, an administrator gives them `crm-viewer` or `crm-sales`.

The attribute `country` can come from the directory with `attribute_claims` — the data scope then follows the directory. Full recipe: [OIDC sign-in](../cookbook/oidc-sso.md).

---

## What you have now

Two roles cut from the app's own menu, users who see their part, and rows filtered by the server according to each user.

→ **[Step 6 — AI and jobs](./06-ai-and-jobs.md)**: questions in plain language and a daily job.
