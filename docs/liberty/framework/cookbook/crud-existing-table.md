---
title: CRUD over an existing table
description: "Recipe — take any existing database table and produce a working list / edit / add / delete UI on top of it in five Settings clicks. The fastest path from 'I have a table' to 'users are using it'."
keywords: [Liberty Framework, cookbook, CRUD, recipe, existing table, connector, screen, menu]
---

# CRUD over an existing table

## The problem

You have a database table — `products`, `tickets`, `contracts`, anything — and you need a clean UI for the team to look at it and edit it. You don't want to write a frontend.

## The pattern

Five Settings clicks, four SQL queries, one screen, one menu entry. Total time: **5–10 minutes**.

```
table → connector with 4 queries → screen → menu leaf → done
```

## The recipe

### 1. Make sure the framework can reach the table

Open **Settings → Pools**. If the table sits in the same database as the framework, the `default` pool works. Otherwise add a new pool pointing at the right database and *Test connection*.

### 2. Define the connector — four queries

**Settings → Connectors → + New connector**. Type `SQL`, pool of your choice. Then four queries:

```sql
-- list (read)
SELECT * FROM products ORDER BY name;

-- create (write)
INSERT INTO products (name, price, stock, created_by, created_at)
VALUES (:name, :price, :stock, :session_user, CURRENT_TIMESTAMP)
RETURNING id;

-- update (write)
UPDATE products
SET name = :name, price = :price, stock = :stock,
    updated_by = :session_user, updated_at = CURRENT_TIMESTAMP
WHERE id = :id;

-- delete (write)
DELETE FROM products WHERE id = :id;
```

The `:session_user` placeholder is the framework's audit shorthand — it binds to the calling user's identifier (the JWT's `sub`).

Click **▶ Test** on the `list` query to confirm connectivity + let the framework discover the schema.

### 3. Build the screen

**Settings → Screens → + New screen**:

| Field | Value |
|---|---|
| **Id** | `&lt;app&gt;/products` |
| **Title** | `Products` |
| **Key columns** | `id` |
| **Editable** | ✓ |
| **Connector / Query** | `products` / `list` |
| **Actions → Add** | `products` / `create` |
| **Actions → Save** | `products` / `update` |
| **Actions → Delete** | `products` / `delete` |

The Grid tab lets you pick which columns appear (drag from the catalog into the visible list). The Dialog tab does the same for the edit form.

### 4. Wire the menu

**Settings → Menus → &lt;app&gt; → + Add leaf**:

| Field | Value |
|---|---|
| **Label** | `Products` |
| **Type** | `Screen` |
| **Screen** | `&lt;app&gt;/products` |

### 5. Save & reload

The sidebar updates immediately. Click *Products* → grid renders, edit dialog opens on row click, *+ Add* opens an empty form.

## Result

A working CRUD interface over your existing table, with:

- Filtering (per-column filter chips in the toolbar)
- Sorting (click column headers)
- Pagination (50 rows by default)
- An *Excel export* button (always included)
- Per-action permission codes (`sql:products:list`, `sql:products:update:write`, etc.) ready for role assignment
- Audit trail on `created_by` / `updated_by` automatic

## Variations

| You want… | Do this |
|---|---|
| **Coloured status chips** | Add a dictionary entry with `Rule = ENUM` on the status column — see [Dictionary](../dictionary.md). |
| **Dropdown sourced from another table** | Add a Lookup in *Settings → Dictionary → Lookups* — see [Cookbook → CRUD over an existing table](#) (this recipe) for the pattern. |
| **Read-only mode for one role** | Don't give the role the `:write` codes; the screen renders without Add / Edit / Delete buttons for them. |
| **A second related table inside the dialog** | See the [CRM tutorial → Step 3](../tutorial-crm/03-deals.md) — the *Activities sub-grid in Deals* pattern. |
| **A bulk import from CSV** | See [Cookbook → Bulk import](./bulk-import.md). |
| **A scheduled report mailed nightly** | See [Cookbook → Scheduled report email](./scheduled-report-email.md). |

## What's next

- For JD Edwards admin specifically, the packaged [Nomajde](https://docs.nomana-it.fr/liberty/nomajde/overview) app ships every screen you'd build here — pre-built, license-gated.
- The full mental model: [Concepts → Connectors](../connectors.md).
