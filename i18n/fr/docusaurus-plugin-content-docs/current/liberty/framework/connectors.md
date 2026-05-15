---
title: Connectors
description: "Define SQL and API connectors in TOML. A SQL connector is a list of named queries against a pool; an API connector is a list of named endpoints against an HTTP client. Schema is discovered at query time — no metadata tables."
keywords: [Liberty Next, connector, SQL, API, TOML, pool, query, endpoint, writable, dialect, schema discovery, param bind]
---

# Connectors

A **connector** is the named target the rest of Liberty Next talks to. Two kinds:

- **SQL connector** — a list of named queries against a pool. The schema of a result is discovered from `cursor.description`; display hints sit on the query, label and rule sit on the [dictionary](./dictionary.md).
- **API connector** — a list of named endpoints against an `httpx.AsyncClient`. Auth, base URL and placeholder substitution live on the connector.

Connectors are defined in `config/connectors.toml`. The file is hot-reloadable — `POST /admin/reload` rebuilds the registry while in-flight requests keep the version they started with.

---

## At a glance

<svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="280" height="340" rx="14" fill="url(#cn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 connectors.toml</text>

  <rect x="56" y="84" width="248" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="104" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[pools.myapp]</text>
  <text x="68" y="120" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">url = "postgresql+asyncpg://…"</text>
  <text x="68" y="134" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">password = "ENC:…"</text>
  <text x="68" y="148" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">max_rows = 5000</text>

  <rect x="56" y="172" width="248" height="90" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="192" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.myapp]</text>
  <text x="68" y="208" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">type = "sql"</text>
  <text x="68" y="222" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">pool = "myapp"</text>
  <text x="68" y="238" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">licensed = false</text>
  <text x="68" y="254" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">queries = [...]</text>

  <rect x="56" y="270" width="248" height="100" rx="8" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.30)" strokeWidth="1"/>
  <text x="68" y="290" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[[connectors.myapp.queries]]</text>
  <text x="68" y="306" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">name = "users_get"</text>
  <text x="68" y="320" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Users"</text>
  <text x="68" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">auto_load = true</text>
  <text x="68" y="348" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">sql = "SELECT id, name, status …"</text>
  <text x="68" y="362" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">columns = [...]</text>

  <line x1="320" y1="220" x2="420" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#cn-arrow)"/>

  <rect x="420" y="40" width="280" height="340" rx="14" fill="url(#cn-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="440" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ SQLConnector</text>

  <rect x="436" y="84" width="248" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="104" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">execute(name, params, lang)</text>
  <text x="448" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">→ rows + Column[]</text>
  <text x="448" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">label / format / rule resolved</text>

  <rect x="436" y="152" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="170" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">writable gate</text>
  <text x="448" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">UPDATE / INSERT / DELETE → writable=true</text>

  <rect x="436" y="202" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="220" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">:name → ? bind</text>
  <text x="448" y="236" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">never string-substituted into SQL</text>

  <rect x="436" y="252" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="270" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">#SCHEMA.X# resolution</text>
  <text x="448" y="286" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">from pool's `schemas` map</text>

  <rect x="436" y="302" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="320" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">per-dialect SQL</text>
  <text x="448" y="336" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sql = {`{ default, oracle, postgresql }`}</text>

  <line x1="700" y1="220" x2="780" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#cn-arrow)"/>

  <rect x="780" y="40" width="180" height="340" rx="14" fill="url(#cn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="800" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">REST</text>

  <rect x="796" y="84" width="148" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="100" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">POST</text>
  <text x="804" y="116" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/api/query/&#123;c&#125;/&#123;q&#125;</text>

  <rect x="796" y="132" width="148" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="148" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">POST</text>
  <text x="804" y="164" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/api/http/&#123;c&#125;/&#123;e&#125;</text>

  <rect x="796" y="180" width="148" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="196" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">GET</text>
  <text x="804" y="212" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/api/lookup/…</text>

  <rect x="796" y="228" width="148" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="246" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Permissions</text>
  <text x="804" y="262" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">sql:&#123;c&#125;:&#123;q&#125;</text>
  <text x="804" y="276" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">api:&#123;c&#125;:&#123;e&#125;</text>

  <rect x="796" y="296" width="148" height="78" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="804" y="314" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Consumers</text>
  <text x="804" y="328" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">TableView grid</text>
  <text x="804" y="342" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Dashboard panels</text>
  <text x="804" y="356" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AI assistant tools</text>
  <text x="804" y="370" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lookup picker</text>
</svg>

---

## SQL connector

### Pool

A SQL connector points at a **pool** — one SQLAlchemy async engine.

```toml
[pools.myapp]
url       = "postgresql+asyncpg://myapp@db:5432/myapp"
password  = "ENC:…"              # decrypted via [crypto] master_key — or a ${ENV} ref / plaintext
pool_size = 10
max_rows  = 5000                  # default SELECT row cap for this pool
dialect   = "postgresql"          # optional override; otherwise derived from the URL

[pools.myapp.schemas]
PROD = "myapp_prod"               # `#SCHEMA.PROD#` in a query → `myapp_prod` at execute time
```

The pool's password may be carried separately from the URL (cleaner, keeps it out of logs) or embedded as `ENC:…` inside the URL. Either way the engine is built with URL-safe escaping. A wrong / missing master key when the password is `ENC:` keeps the value as-is and logs a warning.

Engines are created lazily — an unreachable DB never blocks startup; tests inject their own engine.

### Connector

```toml
[connectors.myapp]
type     = "sql"
pool     = "myapp"
licensed = false                   # set true to gate behind the license key
max_rows = 5000                    # overrides the pool default
```

### Queries

A connector carries an ordered list of named queries.

```toml
[[connectors.myapp.queries]]
name        = "users_get"
label       = "Users"               # tab title in the React UI
description = "Application users"
auto_load   = true                  # run a SELECT on screen open
sql         = "SELECT id, name, status FROM users ORDER BY name"
columns = [
  { name = "id",     filter = true },
  { name = "name" },
  { name = "status", dd = "USER_STATUS" },
]
```

| Field | Description |
|---|---|
| `name` | The connector-scoped name. Permissions reference it as `sql:<connector>:<name>`. |
| `label` / `description` | Display names. The React UI titles the TableView with `description`, else `label`, else the menu label. |
| `sql` | The SQL text — string, or a per-dialect map: `sql = { default = "…", oracle = "…" }` keyed by the SQLAlchemy backend name. A `default` is required. |
| `writable` | `true` for non-`SELECT` statements. Combined with the caller's `sql:<c>:<name>` permission. |
| `auto_load` | Runs the SELECT immediately on screen open instead of waiting for a *Run* click. |
| `max_rows` | Per-query SELECT row cap. Overrides connector → pool → global default (1000). |
| `key_columns` | Result columns that identify a row. Surfaced in `describe()` for the TableView's Excel-import update-vs-insert match. |
| `columns` | Optional display hints — see *Column hints* below. |
| `params` | Optional list of `ParamDef` — declares each `:name` the query expects, with a default, a `dd` for the input widget and a `label`. |

#### Column hints

A `columns` entry **augments** the discovered schema; it does not replace it. Anything omitted comes from `cursor.description`.

```toml
columns = [
  { name = "id",     hidden = true, filter = true },
  { name = "status", dd = "USER_STATUS", width = 120 },
  { name = "amount", format = "amount", align = "right" },
  { name = "score",  visible_when = { field = "view_mode", value = "advanced" } },
]
```

| Hint | Effect |
|---|---|
| `dd` | Dictionary entry key — pulls `label`, `format` and the BOOLEAN / ENUM / LOOKUP rule. `dd = ""` opts out. |
| `label`, `format` | Per-column override when the dictionary entry is not enough. |
| `hidden` | Drops the column from the grid (stays available for filters and forms). |
| `filter` | Adds the column to the per-column filter row (v1's `col_filter`). |
| `filter_from` | List of `{ source, column }` — cascading-filter deps. When `source` has a value, this column's LOOKUP options narrow to the lookup rows whose `column` matches it. |
| `visible_when` | A `{ field, value }` rule (or a list, all AND-ed). The column is dropped entirely when a rule does not pass. |
| `width`, `align` | Grid layout hints. |

### Statement gates

Every statement is parsed and classified before binding:

- **Allowed**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `MERGE`. A `WITH … SELECT` resolves to `SELECT`; a `WITH … DELETE` resolves to `DELETE`. An unparseable `WITH` → rejected.
- **Writable gate**: `INSERT` / `UPDATE` / `DELETE` / `MERGE` require `writable = true` *and* the caller's `sql:<c>:<name>` permission. Either side missing → `403`.

### `:name` → `?` binding

Every `:name` token in the SQL is rewritten to a positional `?` and bound via `PreparedStatement`. Values are **never** string-substituted. The parser respects:

- single-quote string literals (`'O''Brien'`),
- double-quoted identifiers (`"customer.name"`),
- line and block comments (`-- …` / `/* … */`),
- the PostgreSQL `::type` cast operator (`'foo'::text`).

A `:name` the caller omits binds to SQL `NULL` — keeps the same query usable in *create* and *update* paths.

### `#SCHEMA.X#` placeholders

A query may reference `#SCHEMA.PROD#` (or any other key) in its SQL. At execute time the placeholder is replaced from the pool's `schemas` map — `PROD = "myapp_prod"` → `myapp_prod`. A `#SCHEMA.X#` with no mapping (or a mapping that is not a plain identifier) raises `ConnectorError`. Right for dev / prod schema swaps and for several schemas under one DB user.

### `params` and `lookup_param_binds`

Declared on the query so the React form layer knows what to ask for. A `params` entry can carry a `dd` so the widget is dictionary-driven (BOOLEAN → checkbox, ENUM → searchable dropdown, LOOKUP → searchable dropdown). LOOKUP-type entries can also reference earlier form values via `lookup_param_binds` — a `value` literal or a `source` reading the live form state — so a UDC-style WHERE narrows correctly.

---

## API connector

```toml
[connectors.myservice]
type       = "api"
base_url   = "https://api.example.com"
auth       = "bearer"               # none / basic / bearer / api_key / oauth2
auth_token = "ENC:…"                # decrypted at runtime; ${ENV} ref also accepted

[[connectors.myservice.endpoints]]
name   = "ping"
method = "GET"
path   = "/health"

[[connectors.myservice.endpoints]]
name   = "lookup_user"
method = "GET"
path   = "/users/{{user_id}}"
```

| Field | Description |
|---|---|
| `auth` | `none` / `basic` (`auth_user` + `auth_pass`) / `bearer` (`auth_token`) / `api_key` / `oauth2`. |
| OAuth2 | Token-endpoint POST + dot-path extraction + TTL cache + one refresh on `401`. Body is form-encoded or JSON depending on `auth_token_content_type`. |
| `{{placeholder}}` | Substituted in the path, query string and body from the call's parameters. |
| `endpoint.response` | Dot-path map for the response — surfaces named values to action chains via `{call.N.fieldName}`. |
| `writable` | An endpoint emitting `POST` / `PUT` / `DELETE` needs `writable = true`. |

Endpoints emit `POST /api/http/{connector}/{endpoint}` and are gated by `api:<connector>:<endpoint>`.

---

## Hot reload

Edit `connectors.toml`, then call **`POST /admin/reload`** (superuser only). The framework rebuilds `ConnectorRegistry`, re-reads the dictionary and the menus, swaps them on `app.state` and disposes the previous registry. In-flight requests keep the version they started with — no race on a query mid-execute. The AI assistant's connector tools refresh on JVM restart, not on reload.

The same admin route surfaces in the React `Settings` tab — every config builder writes through `PUT /admin/config/<pools|connectors|dictionary|menus|screens>` and then prompts a Reload.

---

## Tips & best practices

- **Discover, do not declare.** Let `cursor.description` drive the schema. Use `columns` hints only for what the cursor cannot tell you (label, format, visibility, cascading filter).
- **Dictionary entries belong on the dictionary, not on every query.** Define `USER_STATUS` once under `[entries.USER_STATUS]`; reference it with `dd = "USER_STATUS"` from any query that returns it.
- **Per-dialect SQL only when needed.** A query that works on every backend stays a single string. Use the map form only for Oracle-specific syntax or a function that differs across backends.
- **Keep the pool password out of the URL.** A `password = "ENC:…"` (or `${ENV}` ref) lives next to the URL — easier to rotate, never logged as part of the connection string.
- **Always set `writable = true` on mutating queries.** A typo in the connector permission is still caught by the gate at execute time, but the TOML flag is the right place to declare intent.
- **`max_rows` floors deep**: per-request override → query → connector → pool → global default (1000). Set a sensible per-query value when an operator commonly wants the whole table.
