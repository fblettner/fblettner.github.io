---
title: SQL Connectors
description: "Define generic SQL connectors used by NomaUBL to read or write rows on any reachable database — Oracle or PostgreSQL — through named parameterised queries. Each query carries a name, label, description, parameter spec, the SQL itself with :param placeholders, and a Writable flag. The editor has Connection / Queries / Test tabs and the runtime binds parameters through PreparedStatement so values are never string-substituted into SQL."
keywords: [NomaUBL, SQL connectors, SQL queries, named queries, JDBC, Oracle, PostgreSQL, Microsoft SQL Server, Custom JDBC, DB2, MariaDB, Snowflake, PreparedStatement, parameter binding, writable, action bindings, notification rules, JD Edwards, SAP, NetSuite, custom ERP]
---

# SQL Connectors

The **SQL Connectors** editor is where named SQL queries are declared. A SQL connector is a reusable *"talks to one database"* definition — a JDBC connection plus a list of named queries — that the rest of NomaUBL references by name. It mirrors the structure of [API Connectors](./api-connectors.md): the same picker drives [Action Bindings](../management/actions.md) and [Notification Rules](../management/notification-rules.md), with a `· SQL` suffix in the dropdown so the kind is visible.

Typical targets are:

- A **second NomaUBL database** for cross-environment lookups.
- A **source ERP database** — JD Edwards, SAP, NetSuite or a custom schema — when an action needs to read a customer email, a payment date, a status code that the HTTP API does not expose.
- An **operational database** that an action must update — for example flagging an invoice as *sent* in a downstream system, archiving a row, recording an audit entry.

The page applies to documents from any source system, since the SQL connector can point at any reachable JDBC database.

:::info[New in 2026.05.7]
SQL connectors are brand new in 2026.05.7. They sit alongside API connectors in *Settings*, and both kinds can be wired into action bindings and notification rules — including the new multi-call list with `Stop on failure` and `{call.N.fieldName}` response chaining. See the [2026.05.7 release notes](../release-notes.md#v2026-05-7) for the full list of changes.
:::

The editor has **three tabs**:

1. **Connection** — database type, JDBC URL, credentials, schema and query limits.
2. **Queries** — collapsible per-query cards: name, label, description, SQL, parameters, `Writable` flag.
3. **Test** — runs a query against the live database and shows columns + rows or affected count.

---

## Opening the editor

- *Settings* → **+ Add SQL** at the top right of the resource sidebar to create a new SQL connector.
- Existing SQL connectors live under the **SQL** group of the resource sidebar with an `sql` badge — click any of them to open the editor.

---

## At a glance

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sql-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sql-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sql-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="680" rx="14" fill="url(#sql-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="92" height="24" rx="4" fill="transparent"/>
  <text x="286" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Connection</text>
  <rect x="338" y="28" width="64" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="370" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Queries</text>
  <rect x="408" y="28" width="48" height="24" rx="4" fill="transparent"/>
  <text x="432" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Test</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">QUERIES</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Use :name placeholders for parameters. Allowed: SELECT / INSERT / UPDATE / DELETE / MERGE.</text>

  <rect x="240" y="120" width="540" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="143" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <rect x="270" y="132" width="46" height="16" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.25)" strokeWidth="1"/>
  <text x="293" y="143" fill="rgb(50,215,75)" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace" textAnchor="middle">READ</text>
  <text x="324" y="143" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">findCustomerEmail</text>
  <text x="448" y="143" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Returns the routing email for the given company code</text>

  <rect x="240" y="168" width="540" height="324" rx="10" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="190" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <rect x="270" y="180" width="46" height="16" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="293" y="191" fill="rgb(255,159,10)" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace" textAnchor="middle">WRITE</text>
  <text x="324" y="191" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">markInvoiceSent</text>
  <text x="450" y="191" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Mark the source-ERP invoice row as sent</text>

  <text x="262" y="218" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <rect x="262" y="224" width="216" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="241" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">markInvoiceSent</text>

  <text x="490" y="218" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="490" y="224" width="282" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="241" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Mark the source-ERP invoice row as sent</text>

  <text x="262" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITABLE</text>
  <rect x="262" y="272" width="160" height="26" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="272" y="289" fill="rgb(255,159,10)" fontSize="11" fontFamily="ui-monospace, monospace">Yes — allow writes</text>

  <text x="262" y="318" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL</text>
  <rect x="262" y="324" width="510" height="106" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="342" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE F0411</text>
  <text x="272" y="356" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">   SET RPSTAT = 'S',</text>
  <text x="272" y="370" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">       RPSTDJ = TO_NUMBER(TO_CHAR(SYSDATE, 'YYYYDDD'))</text>
  <text x="272" y="384" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"> WHERE RPDOCO = :doc</text>
  <text x="272" y="398" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">   AND RPDCT  = :dct</text>
  <text x="272" y="412" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">   AND RPKCO  = :kco</text>

  <text x="262" y="448" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <text x="350" y="448" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">declare :placeholder tokens used in the SQL</text>
  <rect x="262" y="456" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="471" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">doc | Document number |        — required at call time</text>
  <rect x="262" y="480" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="495" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dct | Document type   | RI     — defaulted, can be overridden</text>

  <rect x="240" y="500" width="540" height="42" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="525" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <rect x="270" y="514" width="46" height="16" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.25)" strokeWidth="1"/>
  <text x="293" y="525" fill="rgb(50,215,75)" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace" textAnchor="middle">READ</text>
  <text x="324" y="525" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">paymentDateForInvoice</text>
  <text x="478" y="525" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Looks up the payment timestamp on F03B14</text>

  <text x="240" y="566" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TEST · LIVE RUN</text>
  <rect x="240" y="576" width="540" height="110" rx="10" fill="rgba(50,215,75,0.04)" stroke="rgba(50,215,75,0.40)" strokeWidth="1.2"/>
  <text x="252" y="596" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Query: markInvoiceSent</text>
  <text x="252" y="610" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">doc=12345 · dct=RI · kco=00070</text>
  <rect x="252" y="618" width="80" height="22" rx="5" fill="url(#sql-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="292" y="633" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <text x="346" y="633" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">UPDATE ✓</text>
  <text x="430" y="633" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">— 1 row affected · 18 ms</text>
  <text x="252" y="666" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Statement parsed → :doc :dct :kco bound positionally · no string interpolation.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three tabs</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Connection / Queries / Test</text>
  <line x1="200" y1="115" x2="240" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="820" y="172" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">READ / WRITE badge</text>
  <text x="830" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">guards non-SELECT statements</text>
  <line x1="820" y1="188" x2="780" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL with :placeholders</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bound via PreparedStatement</text>
  <line x1="200" y1="336" x2="262" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="820" y="450" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parameter spec</text>
  <text x="830" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name | label | default</text>
  <line x1="820" y1="466" x2="780" y2="468" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="20" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Test panel · live run</text>
  <text x="30" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">columns + rows or affected count</text>
  <line x1="200" y1="626" x2="240" y2="616" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>
</svg>

---

## Tab 1 — Connection

### Connection

| Field | Values | Description |
|---|---|---|
| **Database Type** | `Oracle` / `PostgreSQL` / `Microsoft SQL Server` / `Custom JDBC (driver class below)` | Backend type. Drives the JDBC URL placeholder and the dialect-specific parsing in the runtime. **Microsoft SQL Server** needs the `mssql-jdbc` jar in `lib/`. **Custom JDBC** points at any other database (DB2, MariaDB, Snowflake, …) by naming its driver class — no new NomaUBL release is required to add one. |
| **Driver class** | text *(Custom JDBC only)* | Fully-qualified JDBC driver class name, e.g. `com.example.jdbc.MyDriver`. Shown only when *Database Type* is *Custom JDBC*; drop the matching driver jar in `lib/`. |
| **JDBC URL** | text | Full JDBC connection string — `jdbc:oracle:thin:@host:1521/service_name` (Oracle), `jdbc:postgresql://host:5432/database_name` (PostgreSQL), `jdbc:sqlserver://host:port;databaseName=name` (SQL Server), or the format your custom driver expects. |
| **Schema** | text *(optional)* | Default schema. Used by the SQL — no automatic prefixing happens at runtime, the value is informational and lets you write unqualified table names when the JDBC user already has the right `current_schema`. |

### Credentials

| Field | Description |
|---|---|
| **DB User** | Database account name with the privileges required by the queries declared on this connector. Read-only access is enough for `SELECT`-only queries. |
| **DB Password** | Password for the DB account. Stored Base64-encoded in the config file, the same way as `db-nomaubl` and `db-jde`. |

### Limits

| Field | Default | Description |
|---|---|---|
| **Query timeout (ms)** | `30000` | Per-statement JDBC timeout. Long-running queries are cancelled past this. |
| **Max rows** | `1000` | Hard cap on rows returned per `SELECT` call. A runaway query cannot exhaust the JVM heap. |

---

## Tab 2 — Queries

The Queries tab is a list of collapsible cards. The card header shows a **READ / WRITE** badge, the query name, and the description as a secondary line so a connector with several queries reads as a punch-list at a glance. Click a header to expand the editor; click **+ Add query** to append a new one.

### Per-query fields

| Field | Description |
|---|---|
| **Name** | Identifier of the query. Used as the `endpoint` value when wiring the query into an action binding or a notification rule (`connector / name`). |
| **Label** | Short human-readable title shown next to the name in the dropdowns (`name — Label`). |
| **Description** | Free-form sentence shown as the collapsed-card secondary line. Reading the rule list out loud should make sense. |
| **Writable** | `Yes` / `No`. Required to be `Yes` when the SQL is anything other than `SELECT` — otherwise the runtime rejects the call before the connection opens. |
| **SQL** | The SQL itself, with `:name` placeholders for parameters. The first non-comment, non-string keyword decides the statement type (`SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`). |
| **Parameters** | Spec of `:placeholder` tokens used in the SQL. Format: `name|label|default;name|label|default;…` — the same shape as api-connector endpoints. |

### Statement-type allow-list

Only `SELECT`, `INSERT`, `UPDATE`, `DELETE` and `MERGE` are accepted. Anything else — `DROP`, `TRUNCATE`, `ALTER`, `GRANT`, `CREATE`, etc. — is rejected before the connection even opens. A query that begins with one of those keywords cannot be saved as `Writable=No` either: the runtime always re-parses the first keyword on call, so the gate is not bypassable by editing the resource by hand.

### Parameter binding (`:name` → `?`)

Parameter binding goes through `PreparedStatement`. The runtime parses the SQL, rewrites every `:name` token to a positional `?`, and binds the values positionally — values are **never** string-substituted into the SQL. The parser respects:

- single-quote string literals (`'O''Brien'`),
- double-quoted identifiers (`"customer.name"`),
- line comments (`-- …`) and block comments (`/* … */`),
- the PostgreSQL `::type` cast operator (`'foo'::text`).

Tokens inside any of those constructs are passed through unchanged.

The parameter spec drives the *Test* tab and the call-site editor: each declared `:name` becomes a labelled input pre-filled with its `default` value. Spec rows are semicolon-separated; each row has up to three pipe-delimited fields. Empty fields are accepted (a parameter with no default just renders an empty input).

#### Surrounding quotes stripped on string params *(2026.05.15)*

The runtime strips one matching pair of surrounding single or double quotes from each bound string param before the JDBC `setString`. Typing `'01'` in a default or in the test panel — the way a SQL literal is written — used to silently return 0 rows because JDBC bound the 4-character string verbatim; stripping the quotes lets either convention work.

:::warning[JDE CHAR comparison]
Stripping the quotes is **not** a substitute for the standard Oracle non-blank-padded comparison rule. Comparing against a JDE `CHAR(n)` column still needs `WHERE TRIM(col) = :p` in the query when one side of the comparison is bound as `VARCHAR2`. That is an Oracle rule, not a framework choice.
:::

### Writable flag

`Writable=No` is the safe default. Setting it to `Yes` is required for any non-`SELECT` statement and is what the runtime checks at call time:

- A `SELECT` query with `Writable=Yes` runs fine — the flag widens the allow-list, it does not narrow it.
- An `UPDATE` query with `Writable=No` is rejected with an error message in the test panel and `STOP` in the audit trail at runtime.
- A typo in a notification rule that points to a non-`Writable` query but tries to fire `DELETE FROM …` cannot succeed — the gate runs before the connection opens.

---

## Tab 3 — Test

A built-in runner that executes the selected query against the live database and shows the result.

| Element | Description |
|---|---|
| **Query** | Dropdown of every query declared on the Queries tab, with `name — Label` rendering. Selecting a query pre-fills the parameter rows from the spec. |
| **Parameters** | One row per declared `:placeholder`, plus an *Add param* button for ad-hoc parameters not in the spec. Each row has a name input and a value input. |
| **Run** | Sends the call to `/api/sql-connectors/{connector}/{query}` with the parameter values. The result is rendered next to the button. |

### Result panel

| Statement type | What's shown |
|---|---|
| **SELECT** | Statement label + row count + duration on the green-on-success line; below it, a compact table of columns × rows. The runtime caps the number of rows to *Max rows* on the Connection tab. |
| **INSERT / UPDATE / DELETE / MERGE** | Statement label + affected count + duration on the green-on-success line. No table — the runtime returns only the update count for non-`SELECT` calls. |
| **Error** | Red error box with the JDBC / parser error message (`SQLException`, allow-list violation, missing `:placeholder` value, etc.). |

The Test tab calls the live database — *Save* the connector first if you have just edited it; otherwise the test runs against the previously-saved version of the query.

---

## How SQL connectors are used

SQL connectors plug into the same call sites as API connectors:

- **[Action Bindings](../management/actions.md)** — the regulatory buttons in the invoice detail modal can call any SQL query, alone or in a chain, via the multi-call list shipped in 2026.05.7.
- **[Notification Rules](../management/notification-rules.md#actions-tab)** — same multi-call list, fires automatically whenever the rule matches a status change.

In both cases, the connector dropdown lists API connectors and SQL connectors merged with `· API` / `· SQL` suffixes; the target dropdown loads endpoints or queries depending on the picked connector kind.

### Outputs and response chaining

When a SQL call returns, its outputs land in the dispatch context under `call.N.*` keys, where `N` is the 1-based index of the call within the rule or binding. Subsequent calls reference them with `{call.N.fieldName}` placeholders in their parameter values.

| Field | Source |
|---|---|
| `call.N.success` | `true` when the call ran without error. |
| `call.N.statementType` | `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. |
| `call.N.rowCount` | For `SELECT` — number of rows returned. |
| `call.N.updateCount` | For non-`SELECT` — number of rows affected. |
| `call.N.error` | Error message when `success` is `false`. |
| `call.N.<column>` | For `SELECT` — every column of the **first row**, by name. |

Example: a rule that first looks up the customer's email via a SQL query, then sends a follow-up HTTP webhook, would set the webhook payload's `to` parameter to `{call.1.EMAIL}` (the `EMAIL` column of the first row of call #1).

---

## Tips & best practices

- **Keep one connector per database, not per query.** A *crm* connector with five named queries is easier to read than five connectors each holding one query. The dropdown groups queries under the parent connector.
- **Name queries by intent, not by SQL shape.** `findCustomerEmail` reads better than `selectKcoFromF0101`. The body of the SQL is one click away in the editor — the name is what the rule list shows.
- **Start every connector with `Writable=No`.** Flip the flag to `Yes` only on the queries that actually need to write. A `SELECT`-only connector cannot be coerced into running a `DELETE` even if a typo points the rule at the wrong query.
- **Use `:name` placeholders for everything user-supplied.** Concatenating values into the SQL string defeats the parameter-binding safety net. The parser deliberately ignores tokens inside literals and comments so `:` characters inside strings are safe.
- **Set Max rows tighter than the default for dashboard-style queries.** A widget that reads the top 10 rejected invoices does not need 1000 rows back; capping at 50 keeps the UI snappy and the JDBC fetch cheap.
- **Test before saving when changing an existing query.** The Test tab uses the in-memory edit of the query when you have unsaved changes, but the *Run* button calls the live database — there is no rollback. A `Writable=Yes` query under test will commit if the SQL says so.
- **Pair SQL connectors with API connectors via response chaining.** A notification rule can read a value from a SQL query and forward it as a parameter to an HTTP webhook, without code on either side. See the [Notification Rules — Actions tab](../management/notification-rules.md#actions-tab) for details.
- **Keep credentials in a dedicated DB account.** Even on a read-only connector, give the JDBC user just the privileges the queries need — `SELECT` on a small set of tables, no broad schema access.
