---
title: NomaUBL Database
description: "Configure the connection to the NomaUBL application database (Oracle or PostgreSQL): JDBC URL, credentials, schema, the full table catalogue (invoice, e-reporting, auth, notifications), the Columns mapping editor, a Validate Schema panel that compares the bundled DDL to the live schema, and a one-click Initialize action."
keywords: [NomaUBL, database, Oracle, PostgreSQL, JDBC, schema, tables, F564230, F564231, F564233, F564234, F564235, F564236, F564237, F564250, F564251, F564252, F564253, F564254, F564260, F564261, F564262, columns, UBLColumnConfig, validate, initialization, bootstrap]
---

# NomaUBL Database

This screen configures the access to the **database NomaUBL uses to store its own data**: JDBC connection settings, credentials, schema, table names, the column-name mapping, and a one-click bootstrap. Both **Oracle** and **PostgreSQL** are supported.

The tables hold invoice headers, lines, VAT summary, lifecycle events, validation results, runtime logs, e-reporting data, the auth model (users / roles / sessions / permissions) and the notifications inbox. The default names follow the JDE convention (`F564xxx`) — a legacy of NomaUBL's original deployment alongside JD Edwards — but every table name *and every column name* is configurable, so the connector works equally well in a non-JDE context.

The editor has **four tabs**:

1. **Connection** — database type, JDBC URL, credentials.
2. **Tables** — schema, the full table catalogue, the *Validate Schema* panel and the detail-storage strategy.
3. **Columns** — per-table column-name overrides resolved at runtime via `UBLColumnConfig`.
4. **Initialize** — one-click creation of every NomaUBL table and provisioning of the default `admin` user and roles.

:::info[Refreshed in 2026.05.5]
- **All tables are now first-class entries** — the auth tables (`F564250` users, `F564251` roles, `F564252` sessions, new `F564254` permissions) and the notifications table (`F564253`) joined the catalogue under the *Tables* tab. They participate in DDL substitution if renamed, on the same footing as invoice / e-reporting tables.
- **E-Reporting tables renumbered** — `F564240` / `F564241` / `F564242` became `F564260` / `F564261` / `F564262`. The XML payload column moved from `TEXT` / `CLOB` to `BYTEA` / `BLOB` (UTF-8 bytes via `dialect.writeBlob`).
- **Validate Schema panel** — a new section under *Tables* compares the bundled DDL (the canonical `.sql` files inside the JAR) against the live schema using the names configured here. Reports missing tables, missing or extra columns, and type / size mismatches. Read-only — never alters the schema. Same machinery as the `-validate-ddl` CLI mode.
- **Columns tab** — dedicated tab to override column names per table; resolves through `UBLColumnConfig` so customer-renamed columns no longer drift silently.
- **Init log fills the height** — the *Initialize* tab's log area now flexes to fill the available space instead of capping at 200 px.
:::

---

## Opening the editor

- Sidebar → **Configuration → Database Connectors → NomaUBL**.
- The configuration is stored as a `db-nomaubl` resource in the main config file. Saving the form writes it back through the standard Settings save flow.

---

## At a glance — Tables tab

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="db-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="db-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="db-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="680" rx="14" fill="url(#db-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="92" height="24" rx="4" fill="transparent"/>
  <text x="286" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Connection</text>
  <rect x="338" y="28" width="64" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="370" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Tables</text>
  <rect x="408" y="28" width="72" height="24" rx="4" fill="transparent"/>
  <text x="444" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="486" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="524" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Initialize</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Schema</text>
  <rect x="240" y="94" width="540" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="111" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">public</text>

  <text x="240" y="142" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Table Names</text>

  <rect x="240" y="152" width="540" height="20" rx="3" fill="rgba(74,158,255,0.04)"/>
  <text x="252" y="166" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">INVOICE</text>
  <text x="290" y="186" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Log / Archive</text>
  <text x="490" y="186" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564230</text>
  <text x="290" y="204" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Runtime Log</text>
  <text x="490" y="204" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564237</text>
  <text x="290" y="222" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoice Header</text>
  <text x="490" y="222" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564231</text>
  <text x="290" y="240" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoice Lines</text>
  <text x="490" y="240" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564233</text>
  <text x="290" y="258" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">VAT Summary</text>
  <text x="490" y="258" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564234</text>
  <text x="290" y="276" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Lifecycle</text>
  <text x="490" y="276" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564235</text>
  <text x="290" y="294" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Validation</text>
  <text x="490" y="294" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564236</text>

  <rect x="240" y="306" width="540" height="20" rx="3" fill="rgba(255,159,10,0.04)"/>
  <text x="252" y="320" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">E-REPORTING</text>
  <text x="290" y="340" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">E-Reporting Log</text>
  <text x="490" y="340" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564260</text>
  <rect x="546" y="328" width="56" height="14" rx="7" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="574" y="338" fill="rgb(251,146,60)" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">renumb.</text>
  <text x="290" y="358" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">E-Reporting Lifecycle</text>
  <text x="490" y="358" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564261</text>
  <text x="290" y="376" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">E-Reporting Map</text>
  <text x="490" y="376" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564262</text>

  <rect x="240" y="388" width="540" height="20" rx="3" fill="rgba(50,215,75,0.04)"/>
  <text x="252" y="402" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">NOTIFICATIONS</text>
  <text x="290" y="422" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="490" y="422" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564253</text>
  <rect x="546" y="410" width="42" height="14" rx="7" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="567" y="420" fill="rgb(50,215,75)" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">new</text>

  <rect x="240" y="434" width="540" height="20" rx="3" fill="rgba(74,158,255,0.04)"/>
  <text x="252" y="448" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">AUTH</text>
  <text x="290" y="468" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Users</text>
  <text x="490" y="468" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564250</text>
  <text x="290" y="486" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Roles</text>
  <text x="490" y="486" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564251</text>
  <text x="290" y="504" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Sessions</text>
  <text x="490" y="504" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564252</text>
  <text x="290" y="522" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Permissions</text>
  <text x="490" y="522" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564254</text>
  <rect x="546" y="510" width="42" height="14" rx="7" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="567" y="520" fill="rgb(50,215,75)" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">new</text>

  <line x1="240" y1="540" x2="780" y2="540" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="562" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Validate Schema</text>
  <text x="240" y="580" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Compares bundled DDL against the live database — read-only.</text>
  <rect x="240" y="588" width="148" height="28" rx="6" fill="url(#db-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="314" y="606" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Validate schema</text>

  <rect x="240" y="624" width="540" height="62" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="640" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Dialect: postgres   Schema: public</text>
  <text x="252" y="654" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">✔ OK — live schema matches bundled DDL.</text>
  <text x="252" y="668" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Last run: 2 minutes ago</text>
  <text x="252" y="681" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Same machinery as -validate-ddl CLI mode.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schema</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">resolves all table names</text>
  <line x1="200" y1="115" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="820" y="180" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Invoice tables</text>
  <text x="830" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 tables — header / lines / VAT</text>
  <line x1="820" y1="196" x2="780" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">E-Reporting renumbered</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">F564240/41/42 → 60/61/62</text>
  <line x1="200" y1="356" x2="240" y2="350" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="820" y="420" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="830" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">F564253, configurable</text>
  <line x1="820" y1="436" x2="780" y2="422" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="20" y="480" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="495" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Auth · 4 tables</text>
  <text x="30" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users / roles / sessions / perm.</text>
  <line x1="200" y1="496" x2="240" y2="490" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="820" y="600" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Validate Schema</text>
  <text x="830" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">DDL drift detector — read-only</text>
  <line x1="820" y1="616" x2="780" y2="608" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>
</svg>

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
| **DB Password** | Password for the DB account. Stored Base64-encoded in the config file. |

---

## Tab 2 — Tables

### Schema

| Field | Description |
|---|---|
| **Schema** | Database schema containing every NomaUBL table (e.g. `public` on PostgreSQL, the JDE library / owner on Oracle). All table names below are resolved within this schema. |

### Table Names

NomaUBL distributes its data across **15 tables** grouped by purpose. The defaults follow the JDE `F564xxx` naming, but any name can be used as long as the DB account has the right privileges on it.

#### Invoice tables

| Field | Default | Stores |
|---|---|---|
| **Log / Archive** | `F564230` | Persistent log / archive of every processing run. |
| **Runtime Log** | `F564237` | Live runtime log used by the in-app *Processing Log* viewer. New `FEUKID` PK, columns `FERMK` / `FERMK2` / `FEK74MSG1` (renamed in 2026.05.5). |
| **Invoice Header** | `F564231` | One row per invoice with its identification, totals, status, addressing data. |
| **Invoice Lines** | `F564233` | Invoice line items (when *Store line subtotals* is on). |
| **VAT Summary** | `F564234` | Per-invoice VAT summary by category (when *Store VAT details* is on). |
| **Lifecycle** | `F564235` | Status-change history of each invoice (transitions between regulatory codes). |
| **Validation** | `F564236` | Schematron / business-rule validation results per invoice. |

#### E-Reporting tables

| Field | Default | Stores |
|---|---|---|
| **E-Reporting Log** | `F564260` | One row per e-Reporting submission. The XML payload column is `BYTEA` / `BLOB` since 2026.05.5 (UTF-8 bytes via `dialect.writeBlob`). |
| **E-Reporting Lifecycle** | `F564261` | Status-change history of each submission. FK column renamed to `RHUKID` in 2026.05.5. |
| **E-Reporting Map** | `F564262` | Per-submission mapping of original invoice → e-Reporting line. FK column renamed to `RIUKID` in 2026.05.5. |

:::warning[Schema migration]
The e-Reporting tables changed numbering in 2026.05.5 — the previous `F564240` / `F564241` / `F564242` are renamed to `F564260` / `F564261` / `F564262`. If your install pre-dates 2026.05.5 and the data is worth keeping, copy the rows over before re-running *Initialize Database* with the new names. The bundled DDL only creates the new names.
:::

#### Notifications + Auth

| Field | Default | Stores |
|---|---|---|
| **Notifications** | `F564253` | Inbox rows surfaced by the navbar bell and the *Application → Notifications* page (introduced in 2026.05.3). |
| **Auth · Users** | `F564250` | User identities (login, hashed password, full name, active flag). |
| **Auth · Roles** | `F564251` | Role identity (name + description). The CSV grant columns from previous versions are gone — see *Auth · Permissions*. |
| **Auth · Sessions** | `F564252` | Active sessions: `SSLSID` UUID token, `SSUSER`, `SSSTDTIM` start, `SSETDTIM` end. |
| **Auth · Permissions** | `F564254` | Row-based grants — `PMROLE`, `PMCRAPPID` (`page` / `company` / `feature`), `PMCRAPPVAL`, `PMENABL`. New in 2026.05.5. |

### Validate Schema

A new section under *Tables* exposes a **Validate schema** button. It calls `/api/auth/validate-ddl` (same machinery as the `-validate-ddl` CLI mode) which compares the **bundled DDL** — the canonical `.sql` files inside the JAR — against the live schema, using the table names configured here.

The result panel reports four kinds of drift:

| Section | Meaning |
|---|---|
| **Missing tables** | Declared in the bundled DDL but absent in the database. Re-run *Initialize Database* to create them. |
| **Missing columns** | The DDL declares a column that the database does not have. Typically appears after an upgrade that adds a column to an existing table. |
| **Type / size mismatches** | Column exists, but with a different type or width than the bundled DDL declares. Lists `expected` vs `actual` per column. |
| **Extra columns** | The database has a column the DDL no longer declares. Informational only — the application ignores them. |

The check is **read-only** — it never alters the schema. A clean run prints `✔ OK — live schema matches bundled DDL.`

### Detail Storage

Controls **what gets saved on each invoice** beyond the header. Two independent switches sit under *Tables* — one for invoice line subtotals, one for VAT details — so each level of detail can be turned on or off on its own.

| Switch | Effect when on | Used by |
|---|---|---|
| **Store line subtotals** | Writes every line of every invoice into `F564233` at insert. | SQL-based reporting that needs line-level totals; the *Lines* tab of the invoice detail modal reads from the UBL either way. |
| **Store VAT details** | Writes the per-rate VAT breakdown of every invoice into `F564234` at insert. | The [VAT Declaration](../../application/vat-declaration.md) page — keeping this switch on is what lets the page open in seconds even on a 200 000-invoice month. |

Either switch turned off keeps the corresponding detail in the stored UBL document only — the application still parses it on demand when the *Lines* or *VAT* tab of the invoice detail modal is opened.

The two switches default to whatever was previously configured. Existing installations keep their current behaviour after the upgrade — no file edit required.

#### Backfilling VAT details for past periods

When *Store VAT details* is turned on for the first time, only new invoices land with the details in `F564234`. To fill `F564234` for invoices that existed before the switch was turned on — the historical periods you want to see on the VAT page — use the [`backfill-vat`](../../management/command-line.md#backfill-vat) command:

```bash
./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
```

The command parses the UBL document already kept on each invoice header and re-inserts the per-rate breakdown — safe to re-run on the same period without creating duplicates.

---

## Tab 3 — Columns

The Columns tab is a per-table editor that overrides **column names** at runtime via `UBLColumnConfig`. Every Java sub-handler that reads or writes a NomaUBL column resolves its name through `cols.<accessor>` instead of hardcoded literals — so renaming a column in the database (and recording it here) keeps the application running without a recompile.

The editor groups overrides by table and exposes the same accessor names referenced by Java code. The default values match the JDE `F564xxx` columns (`UHKCO`, `FETXFT`, `RGUKID`, …); changing them is a customer-side concern and rarely needed unless the schema diverges from the bundled DDL.

The new build-time **Cross-Reference** page (*Documentation → Cross-Ref*) lists every Java call site that reads `tables.<X>` or `cols.<X>`, with an "unused accessors" toggle to surface dead code. Generated by `XrefScanner` on every build, no manual upkeep.

---

## Tab 4 — Initialize

One-click bootstrap of a fresh NomaUBL database.

| Element | Description |
|---|---|
| **Initialize Database** button | Creates every NomaUBL table that does not yet exist and bootstraps the default `admin` user along with the `admin` and `viewer` roles. |
| **Log area** | Streams the output of the run line by line, with per-prefix colours: `OK:` green for executed statements, `EXISTS:` muted for already-present objects, `FAIL:` / `ERROR:` red for genuine failures. The log area now flexes to fill the available height (no more fixed 200 px cap). |

The operation is **safe to re-run** — existing tables and users are not modified, so each post-upgrade run only creates the new tables and re-seeds missing default grants. Typical lifecycle:

1. Fresh deployment → run *Initialize Database* once. Every table is created, the default `admin` user is seeded.
2. Upgrade to a new NomaUBL version that adds tables (e.g. 2026.05.3 added `F564253`, 2026.05.5 added `F564254`) → run *Initialize Database* again. Only the missing tables are created.
3. Wiped permissions table → drop `F564254` and re-run *Initialize Database*. The default `admin` and `viewer` grants are re-seeded; existing role rows are untouched.

---

## Tips & best practices

- **Pick the database type before filling the JDBC URL.** The placeholder and hint adapt to the chosen type, which avoids URL-format mistakes.
- **Use a dedicated DB account.** Give it `SELECT / INSERT / UPDATE / DELETE` on the NomaUBL schema and `CREATE TABLE` permission for the initial bootstrap.
- **Keep the default `F564xxx` table names when sitting next to JDE.** This makes joining NomaUBL tables to JDE tables in reporting tools straightforward.
- **Use the Columns tab when migrating an existing schema.** A customer install that pre-dates a column rename can stay on its existing names — record the override here and the application code keeps working.
- **Run *Validate schema* after every upgrade.** It catches missing columns introduced by the upgrade and type mismatches that would otherwise produce silent runtime errors. The check is read-only — safe to run anywhere.
- **Leave *Store VAT details* on when the VAT declaration page is in use.** Without it the page falls back to parsing every UBL on each load — fine on a quiet month, painful on a busy quarter.
- **Turn *Store line subtotals* off only on volume-constrained installations.** The *Lines* tab of the invoice detail modal still works from the UBL; only third-party SQL reporting on line items goes away.
- **Re-run *Initialize* after every upgrade.** New NomaUBL versions occasionally add tables (notifications in 2026.05.3, permissions in 2026.05.5); the safe-to-re-run script picks them up without touching existing data.
- **The init log is colour-coded.** Scan for red lines first — those are real failures that need fixing. Muted `EXISTS:` lines on a re-run are expected.
