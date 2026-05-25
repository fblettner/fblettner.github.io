---
title: Step types
description: "Inside the Jobs builder, each step picks a type — SQL Query, SQL Copy, Python, HTTP, LDAP Sync — and the editor expands the matching form. This page documents every field, every option, what gets recorded on the run row and which permission gates each type."
keywords: [Liberty Framework, Nomaflow, step editor, SQL Query, SQL Copy, Python, HTTP, LDAP Sync, type coercion, settings]
---

# Step types

In the [Jobs builder](./jobs-toml.md), a step is added by clicking *➕ Add step* in the *Steps* section. The step editor opens on the right with a **Type** picker; selecting a type expands the form to the fields that type needs. Five types are supported.

This page covers each type with the form it shows, the validations it runs and the result it records.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '4px'}}>SQL Query</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Run a named connector query — read or write — on a pool.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '4px'}}>SQL Copy</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Stream rows between pools, type-coerce, swap target atomically.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '4px'}}>Python</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Call a custom function in <code>liberty-apps/plugins/</code> — the escape hatch.</div>
  </div>
  <div style={{border: '1px solid rgba(34,197,94,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#22c55e', marginBottom: '4px'}}>HTTP</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Call a named HTTP endpoint or a raw URL.</div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '4px'}}>LDAP Sync</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Mirror an LDAP subtree into a connector upsert.</div>
  </div>
</div>

---

## SQL Query

Run a **named SQL query** of a connector. Read queries surface their row count; write queries surface the affected row count. The query and its parameters live in the connector catalogue — this step just picks one and binds the values for this job.

| Form field | Description |
|---|---|
| **Connector** | Dropdown of every SQL connector defined on the install. Filtered to the connectors the caller can run (`sql:<connector>:*`). |
| **Query** | Dropdown of the queries declared on the picked connector. Read queries have a *read* badge; write queries have a *write* badge. |
| **Parameters** | One row per parameter declared on the query. Each row is `name` (read-only) + `value`. Values support the `${...}` substitutions documented in [Query & parameter binding](../query-params-binding.md). |
| **Fetch mode** | `All` *(default)* / `First` / `None`. `None` discards the rows and only records the affected count — useful for large reads where the count is the only signal. |
| **Result alias** | Name under which the result is exposed to the next step as `${steps.<alias>.…}`. Default is the step's *Name*. |

The step records `row_count` (read), `rows_affected` (write), the first 100 rows of the result and the elapsed time. The run-detail page expands them inline.

---

## SQL Copy

Stream rows from a **source connector** to a **target pool**, with optional type coercion and an atomic table swap. The canonical pattern for ETL from operational databases into reporting stores.

| Form field | Description |
|---|---|
| **Source connector** | Dropdown of SQL connectors. |
| **Source query** | Dropdown of the connector's read queries. |
| **Source parameters** | Same as for *SQL Query*. |
| **Target pool** | Dropdown of pools (a pool, not a connector — the step writes directly). |
| **Target table** | Free-text — the stage table where rows are inserted. Created from the source schema if missing. |
| **Final table** | Optional. Name of the final table that *Target table* is renamed to after the copy. When set, the copy is **atomic** (the application sees the old table until the rename swaps them). Leave empty to skip the swap and keep rows in the stage table. |
| **Chunk size** | Rows per batch. Default 1000. |
| **Type coercion** | `Strict` *(default)* / `JDE` / `Truncate`. Drives how source types map to target types. `JDE` converts decimal-zero columns to ints; `Truncate` shortens strings to fit a narrower target column. |
| **Truncate target** | Toggle. When on, the stage table is `TRUNCATE`d before the copy. Default **on** when *Final table* is set, **off** otherwise. |
| **Where filter** | Optional `WHERE` clause appended to the source query — useful for incremental copies. |
| **Transform** | Optional reference to a Python callable in `liberty-apps/plugins/`. The function receives each row as a `dict`, returns a `dict` (or `None` to drop the row). |

The step records `rows_read`, `rows_written`, `rows_dropped` (by the transform), `chunks` and the elapsed time. Schema mismatches (missing column on the target) fail the step with the column name in the error.

---

## Python

Call a **Python function** in `liberty-apps/plugins/`. The escape hatch for anything the declarative types can't express.

| Form field | Description |
|---|---|
| **Callable** | Reference of the form `module.path:function`. The builder verifies the function imports cleanly on save; a missing function fails. |
| **Keyword arguments** | A table of `name` + `value` rows. The values are passed as `**kwargs` to the callable. Supports `${params.*}` and `${steps.<name>.…}` substitution. |

See [Apps & Plugins → Plugins](../apps/plugins.md) for the function signature, the runtime context the framework injects (`connectors`, `pools`, `job_id`, etc.) and the packaging conventions.

The step records the dict returned by the function, the timing and any exception traceback when the function raises.

---

## HTTP

Call an **HTTP / API endpoint** — either a named endpoint of an existing HTTP connector or a raw URL — and record the response.

The form has a top-level toggle: *Use a connector endpoint* / *Use a raw URL*.

### Variant A — connector endpoint

| Form field | Description |
|---|---|
| **Connector** | Dropdown of HTTP / API connectors. |
| **Endpoint** | Dropdown of named endpoints on the picked connector. |
| **Parameters** | One row per declared parameter, name + value. |
| **Expected statuses** | Multi-select of acceptable HTTP statuses. Default `200 201 202 204`. Anything else fails the step. |
| **Result alias** | Same as for *SQL Query*. |

### Variant B — raw URL

| Form field | Description |
|---|---|
| **Method** | `GET` / `POST` / `PUT` / `DELETE` / `PATCH`. |
| **URL** | Full URL. `${env.VAR}` substitutes from the process environment. |
| **Body** | Optional JSON body (object or array). |
| **Headers** | Optional `name`/`value` table. |
| **Authentication** | `None` / `Basic` / `Bearer`. The Bearer form takes a single field — wired to the 🔒 encrypted-value toggle. |

The response body is recorded as the step result (truncated to 100 KiB for the run-detail preview). Use the raw URL variant only for one-off calls — recurring calls should be defined as a connector endpoint so they live in the catalogue.

---

## LDAP Sync

Pull a subtree from an **LDAP** directory and upsert the resulting rows into a connector. Replaces the bespoke LDAP scripts most installs end up writing.

| Form field | Description |
|---|---|
| **LDAP pool** | Dropdown of LDAP pools (separate from SQL pools — defined on the *Pools* tab when *Type* is *LDAP*). |
| **Base DN** | Base of the subtree to read. |
| **Filter** | LDAP filter. Defaults to `(objectClass=*)`. |
| **Scope** | `Base` / `One level` / `Subtree`. Default *Subtree*. |
| **Attribute mapping** | One row per `ldap_attribute → target_column`. Repeating attributes are joined with `;`. |
| **Target connector** | Dropdown of SQL connectors. |
| **Target query** | Dropdown of the connector's write queries (only `:write` queries appear). |
| **Key column** | The column the upsert matches on. |
| **Deletion mode** | `None` *(default)* / `Hard` / `Soft`. *Hard* deletes rows that no longer match the LDAP filter; *Soft* flips a flag column (*Deletion column* field appears). |

The step records `read`, `upserted`, `deleted`. A failure to bind to LDAP fails fast (no retry, since the credentials won't fix themselves); per-row failures are recorded but the step continues.

---

## Result chaining

Every step records its result on the run row. The next step can reference it via `${previous_step.<key>}` (the immediately preceding step) or `${steps.<name>.<key>}` (any earlier step). The reference is typed directly in the consuming field — *Parameters*, *Keyword arguments*, *Body*, etc.

Example: a first step *find-batch* runs a SQL query with `Fetch mode = First`; a second step *send-batch* reads `${steps.find-batch.first_row.id}` to send only that batch. The *Condition* field of *send-batch* can short-circuit when no batch was found: `${steps.find-batch.row_count} > 0`.

The expression syntax is the same one documented under [Form conditions](../form-conditions.md).

---

## When a step fails

| Failure | Behaviour |
|---|---|
| **Exception in the callable / driver / endpoint** | Step recorded as `failed` with the traceback. Retry policy applies. |
| **Timeout reached** | Step is cancelled. Recorded as `failed` with `error = "timeout"`. Retry policy applies. |
| **Database connection lost mid-step** | Same as exception. |
| **Continue on error = on** | Step `failed` but the job continues. The job's final status is `partial-success`. |
| **All retries exhausted** | Job's final status is `failed`. No further steps run. |

The retry policy is set in the [Jobs builder](./jobs-toml.md#retry-policy) — job-level default, with per-step overrides in the step editor.

---

## Permissions

Step types inherit the underlying connector / endpoint permission — `sql:<connector>:<query>`, `api:<connector>:<endpoint>`. A step that references a connector the caller can't run is **refused at save** with the missing permission in the error.

Saving and running the job itself is gated by `settings:jobs` + `job:<name>`.

---

## Under the hood

Step definitions are stored inside each job's TOML block under `liberty-apps/plugins/<app>/jobs.toml`. Operators **do not edit this file by hand**; the step editor is the canonical interface. Advanced operators can still use the *Raw TOML* tab of the [Jobs builder](./jobs-toml.md) when a builder gap blocks them.

---

## What's next

- [Jobs builder](./jobs-toml.md) — where steps are organised in the job pipeline.
- [Runs & monitoring](./runs-monitoring.md) — where step results are surfaced.
- [Apps & Plugins → Plugins](../apps/plugins.md) — writing the Python callables behind *Python* steps.
- [Concepts → Connectors](../connectors.md) — the SQL / HTTP / LDAP connectors the steps target.
