---
title: Row-level access
description: "Recipe — limit the rows each user sees in Liberty Next: by company, region or any dictionary item with a role's data scope and a user attribute; or to the rows a user owns with the {{USER}} token in the query."
keywords: [Liberty Next, cookbook, row-level access, data scope, user attributes, multi-company, "{{USER}}", owner, security]
---

# Row-level access

Two needs come up again and again:

- **By organisation** — a subsidiary sees its companies, a region its branches, the head office everything. Use a role's **data scope**: no change to any query.
- **By owner** — a salesperson sees the customers they created. Use the **`{{USER}}`** token in the query.

---

## Recipe 1 — one company per user \{#by-company\}

The goal: users of the *subsidiary* role see only the rows of their own companies, on every screen, export and dashboard, while the *group* role sees everything.

1. **Give each user their companies.** In **Liberty Next → Administer → Access → Users**, open the user and add a data-scope attribute: key `company`, value `00001, 00050`.
2. **Create the role.** In **Liberty Next → Administer → Access → Roles**, add *subsidiary*, grant its menus in the **Access** tab.
3. **Add the rule.** In the **Data scope** tab: **Dictionary item** `CO — Company`, **From the user's attribute** `company`, and *A query without this item*: **returns nothing** — a screen that does not carry the company shows nothing rather than everything.
4. **Leave *group* without any rule**: it sees every row.

Every query whose result has a company column is now filtered on the server for the holders of *subsidiary* — whatever the screen, and also exports, dashboards, reports and the assistant. A write on a row of another company is refused.

The same in `auth.toml`:

```toml title="auth.toml"
[roles.subsidiary]
permissions = ["menu:sales:*", "sql:sales:*"]
scope = [{ dd = "CO", source = "#USER.company#", mode = "deny" }]

[users.alice]
roles = ["subsidiary"]
attributes = { company = ["00001", "00050"] }
```

Variants:

| Need | Rule |
|---|---|
| A fixed list for everyone in the role | **Fixed values** `00001, 00050` instead of the attribute. |
| Hide some values instead | **Exclude these values instead**: `SY not in 00`. |
| A column that is not in the dictionary | **Column name** `REGION` instead of a dictionary item. |
| Only on one connector | Pick the **Connector**; the rule says nothing about the others. |
| JD Edwards tables (`ABCO`, `MCCO`, `SDCO`…) | Set **Dd Prefix** `2` on the connector: one `CO` rule reaches all of them. |

The full reference is on [Roles and permissions → Data scope](../build/secure/roles-and-permissions.md#data-scope).

---

## Recipe 2 — each user sees their own rows \{#by-owner\}

When rows belong to a person rather than to an organisation, store the owner in the table and filter on it in the query. The `{{USER}}` token is replaced on the server by the signed-in user's name, **in upper case**, as a bound value — the browser cannot change it.

```sql title="customers_get"
SELECT id, name, status, owner
FROM   customers
WHERE  owner = {{USER}}
```

```sql title="customers_post"
INSERT INTO customers (name, status, owner)
VALUES (:NAME, :STATUS, {{USER}})
```

```sql title="customers_put"
UPDATE customers
SET    name = :NAME, status = :STATUS
WHERE  id = :ID AND owner = {{USER}}
```

The `AND owner = {{USER}}` of the update and delete queries matters: without it, a user who knows another row's id could change it through the API.

`{{LOGIN}}` is the same value. Other tokens: `{{SYSDATE}}`, `{{SYSTIME}}`, `{{SYSTIMESTAMP}}` / `{{NOW}}`, and for JD Edwards audit columns `{{JDEDATE}}`, `{{JDETIME}}`, `{{PID}}`, `{{JOBN}}`.

Store user names in upper case (or compare with `UPPER(owner) = {{USER}}`), since the token is always upper case.

---

## Which one? \{#choose\}

| | Data scope | `{{USER}}` in the query |
|---|---|---|
| Filters on | Any dictionary item or column, values per role or per user | The owner column |
| Queries to change | None | Each query |
| Covers | Every SQL query, exports, dashboards, reports, assistant, writes | The queries that carry the condition |
| Managers see more | Give them a role without the rule | Needs a second query or a condition on the role |

Both can be combined: a subsidiary's salespeople see their own customers, within their companies.
