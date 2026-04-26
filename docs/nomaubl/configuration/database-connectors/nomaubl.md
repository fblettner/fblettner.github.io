---
title: NomaUBL Database
description: "Configure the connection to the NomaUBL application database (Oracle or PostgreSQL): JDBC URL, credentials, schema, table names and one-click initialization."
keywords: [NomaUBL, database, Oracle, PostgreSQL, JDBC, schema, tables, F564230, F564231, F564233, initialization, bootstrap]
---

# NomaUBL Database

This screen configures the access to the **database NomaUBL uses to store its own data**: JDBC connection settings, credentials, schema and table names. Both **Oracle** and **PostgreSQL** are supported.

The tables hold invoice headers, lines, VAT summary, lifecycle events, validation results and runtime logs. The default names follow the JDE convention (`F564230` and friends) — a legacy of NomaUBL's original deployment alongside JD Edwards — but remain fully configurable, so the connector works equally well in a non-JDE context.

The editor has **three tabs**:

1. **Connection** — database type, JDBC URL, credentials.
2. **Tables** — schema, table names, detail-storage strategy.
3. **Initialize** — one-click creation of the NomaUBL tables and provisioning of the default admin user / roles.

---

## Tab 1 — Connection

### Connection

| Field | Values | Description |
|---|---|---|
| **Database Type** | `Oracle` / `PostgreSQL` | Backend type. Determines the JDBC URL format and the default placeholders. |
| **JDBC URL** | text | Full JDBC connection string. Format depends on the database type: `jdbc:oracle:thin:@host:1521/service_name` for Oracle, `jdbc:postgresql://host:5432/database_name` for PostgreSQL. |

### Credentials

| Field | Description |
|---|---|
| **DB User** | Database account name with the privileges required to read/write all NomaUBL tables (and create them when initializing). |
| **DB Password** | Password for the DB account. |

---

## Tab 2 — Tables

### Schema

| Field | Description |
|---|---|
| **Schema** | Database schema containing all NomaUBL tables (e.g. `public` on PostgreSQL, the JDE library / owner on Oracle). All table names below are resolved within this schema. |

### Table Names

NomaUBL distributes its data across seven tables. The defaults follow the JDE `F564xxx` naming, but any name can be used as long as the DB account has the right privileges on it.

| Field | Default | Stores |
|---|---|---|
| **Log / Archive** | `F564230` | Persistent log / archive of every processing run. |
| **Runtime Log** | `F564237` | Live runtime log used by the in-app log viewer. |
| **Invoice Header** | `F564231` | One row per invoice with its identification, totals, status, addressing data. |
| **Invoice Lines** | `F564233` | Invoice line items (when *Detail Storage* is set to `db`). |
| **VAT Summary** | `F564234` | Per-invoice VAT summary by category (when *Detail Storage* is set to `db`). |
| **Lifecycle** | `F564235` | Status-change history of each invoice (transitions between regulatory codes). |
| **Validation** | `F564236` | Schematron / business-rule validation results per invoice. |

### Detail Storage

Controls **how invoice line items and VAT summary are persisted**.

| Field | Values | Description |
|---|---|---|
| **Lines & VAT** | `Save to Database` / `Save UBL Only` | `db` = write lines & VAT into `F564233` / `F564234` (queryable from SQL); `ubl` = skip the detail tables and parse lines & VAT from the stored UBL document on demand. |

`Save to Database` is the safest choice when downstream reporting tools query the database directly. `Save UBL Only` reduces write volume and keeps the UBL as the single source of truth for line-level data.

---

## Tab 3 — Initialize

One-click bootstrap of a fresh NomaUBL database.

| Element | Description |
|---|---|
| **Initialize Database** button | Creates all NomaUBL tables that do not yet exist and bootstraps the default admin user and roles. |
| **Log area** | Shows the output of the initialization run (created tables, seeded users, errors). |

The operation is **idempotent**: existing tables and users are not modified, so the button is safe to run multiple times — typically once on a new deployment, then again after every NomaUBL upgrade that introduces a new table.

---

## Tips & best practices

- **Pick the database type before filling the JDBC URL.** The placeholder and hint adapt to the chosen type, which avoids URL-format mistakes.
- **Use a dedicated DB account.** Give it `SELECT / INSERT / UPDATE / DELETE` on the NomaUBL schema and `CREATE TABLE` permission for the initial bootstrap.
- **Keep the default `F564xxx` table names when sitting next to JDE.** This makes joining NomaUBL tables to JDE tables in reporting tools straightforward.
- **Choose a custom naming when standalone.** When NomaUBL runs against PostgreSQL with no JDE in sight, names like `nomaubl_invoice_header` read better in the admin console.
- **Leave Detail Storage at `db` unless you need otherwise.** It enables SQL-based reporting on lines and VAT without parsing the UBL on every query.
- **Run Initialize after every upgrade.** New NomaUBL versions occasionally add tables; the idempotent script picks them up without touching existing data.
