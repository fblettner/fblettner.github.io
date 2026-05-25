---
title: Row-level access
description: "Recipe — give each user access to only their own rows. Salesperson sees only their customers; tenant sees only their data. The :session_user placeholder and a per-query WHERE clause do the work — no app code, no extra middleware."
keywords: [Liberty Framework, cookbook, row-level access, multi-tenant, session_user, security]
---

# Row-level access

## The problem

In a CRM, salespeople should only see their own customers. In a multi-tenant SaaS, each customer should only see their own data. In an HR app, an employee should only see their own expense claims (their manager sees their team's).

You don't want to enforce this in the frontend — too easy to bypass. You don't want to write an authorisation middleware per connector — too easy to forget. You want the database to do it.

## The pattern

Every query the framework runs has access to **`:session_user`** — a placeholder bound on the server from the caller's JWT, never from the client. Adding `WHERE owner = :session_user` to a query restricts the rows the caller can see, at the SQL level, **without any framework or client code involved**.

A few variations of the same idea:

| Use case | Predicate |
|---|---|
| **One row per owner** | `WHERE owner = :session_user` |
| **Multi-tenant** | `WHERE tenant_id = (SELECT tenant FROM users WHERE id = :session_user)` |
| **Manager sees team** | `WHERE owner IN (SELECT id FROM users WHERE manager = :session_user OR id = :session_user)` |
| **Role-based escalation** | `WHERE owner = :session_user OR :session_user IN ('admin', 'sales-manager')` |

The framework's permission system stays in place — `sql:customers:list` still gates whether the caller can run the query at all. Row-level access narrows the **rows returned by that query**.

## The recipe

### 1. Schema — add the owner column

```sql
ALTER TABLE customers ADD COLUMN owner VARCHAR(64);
UPDATE customers SET owner = 'alice' WHERE …;   -- backfill existing rows
```

The owner is whatever identifier matches the JWT's `sub` claim — typically the username, or an email, or an internal user ID — pick one and stay consistent.

### 2. Filter the read query

```sql
SELECT id, name, status, industry
FROM   customers
WHERE  owner = :session_user
ORDER  BY name;
```

Test the query as the `admin` user — empty result. Test as `alice` after assigning her ownership of some rows — only her rows return.

### 3. Filter writes too

The same pattern for `UPDATE` and `DELETE`:

```sql
-- update
UPDATE customers SET name = :name, status = :status
WHERE id = :id AND owner = :session_user;

-- delete
DELETE FROM customers WHERE id = :id AND owner = :session_user;
```

The `AND owner = :session_user` guard prevents the API call `DELETE /api/sql/customers/delete?id=42` from succeeding when row 42 belongs to someone else. The query returns "0 rows affected"; the framework treats this as a 404 and the response is exactly the same as "row doesn't exist". No information leak.

### 4. Force the owner on insert

```sql
INSERT INTO customers (name, status, owner, created_at)
VALUES (:name, :status, :session_user, CURRENT_TIMESTAMP);
```

Notice `:session_user` instead of `:owner` — even if the form payload sneaks an `owner` parameter, the SQL ignores it and uses the server-side value. The user can only create rows owned by themselves.

### 5. Role-based escalation

When the manager should see everything, drop the predicate based on the JWT's role list:

```sql
SELECT id, name, status, industry, owner
FROM   customers
WHERE  owner = :session_user
   OR  'manager' = ANY(string_to_array(:session_roles, ','))
ORDER  BY name;
```

The framework binds `:session_roles` (comma-separated list of the caller's roles) on every call. The expression "either it's mine or I'm a manager" handles both cases in one query.

For Oracle / SQL Server, replace the array trick with `INSTR(:session_roles, 'manager') > 0`.

## Multi-tenant pattern

For SaaS / multi-tenant apps, the predicate moves from per-row owner to per-tenant filtering. A typical setup:

```sql
-- The tenant lookup needs to happen inside the query (we can't trust a 'tenant' parameter from the client)
WITH user_tenant AS (
  SELECT tenant_id FROM ly2_users WHERE username = :session_user
)
SELECT *
FROM   invoices
WHERE  tenant_id = (SELECT tenant_id FROM user_tenant);
```

Or with a JWT custom claim — the framework's OIDC layer surfaces every claim under `:session_<claim_name>`:

```sql
WHERE tenant_id = :session_tenant_id
```

The `tenant_id` claim is set by the IdP / SSO layer; the framework binds it like any other session value.

## Performance notes

| Concern | Mitigation |
|---|---|
| **Index the `owner` column** | Critical. Every read query filters by it; an index turns it from full-scan to single-row lookup. |
| **N+1 anti-pattern** | Don't loop per-row in the application; let one query with `WHERE owner = :session_user` return the right set. The framework does this naturally. |
| **Per-tenant materialized views** | For massive tenants, a per-tenant view (`vw_invoices_tenant_42`) might outperform a generic `WHERE` predicate. Switch the connector's query target accordingly. |

## What this gives you

| Property | Why |
|---|---|
| **Frontend can't bypass the gate** | The frontend never sees rows for other users; row-level filtering is in SQL. |
| **Direct REST calls can't bypass it** | The framework binds `:session_user` from the verified JWT, not from the request body. |
| **The AI assistant inherits the gate** | The same `:session_user` placeholder applies to AI-triggered queries. An admin asks "how many customers do I have?" → all rows. A salesperson asks the same → their rows only. |
| **Excel export inherits the gate** | The export endpoint runs the same query; the rows it ships are the filtered set. |
| **Audit trail is preserved** | `created_by = :session_user` records who created each row; nobody can impersonate. |

## Variations

| You want… | Do this |
|---|---|
| **Public rows + private rows on the same table** | `WHERE owner = :session_user OR is_public = true`. |
| **Read-only access to other-owner rows** | The read query has no `WHERE`; the write queries do. A salesperson sees everyone's customers but can only edit their own. |
| **Time-bound access** | `WHERE owner = :session_user OR (shared_until > CURRENT_TIMESTAMP AND shared_with = :session_user)` — the row goes back to private once the share expires. |
| **Per-role row visibility** | Combine `:session_user` with `:session_roles` as in the manager example. Or define separate queries (`list-mine` / `list-team` / `list-all`) and gate each with its own permission code. |

## What's next

- [Authentication](../auth/authentication.md) for the `:session_user` binding.
- [Roles & permissions](../auth/roles-permissions.md) for the `:session_roles` value and the per-query permission codes.
- [Cookbook → Audit trail](./audit-trail.md) for the `created_by` companion pattern.
