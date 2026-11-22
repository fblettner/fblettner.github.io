---
title: Create a custom query
description: "Write a standalone query by hand in Liberty Next — the Queries section, the three-stage editor, the writable checkbox, the declared parameters, the SQL editor with autocompletion, tokens, SELECT wizard and Run."
keywords: [Liberty Framework, custom query, hand-written SQL, Queries, QueryDef, writable, params]
---

# Create a custom query

When the wizard doesn't fit — analytics, reports, multi-table joins, stored-procedure calls, anything that doesn't map 1-1 to a single table — write the query by hand in the **Queries** view.

This page walks the editor form field by field.

---

## Where it lives

**Liberty Next → Data → Connectors → pick a connector → stage card Queries → ＋ Add query**.

The page prompts for a name, creates an empty query and opens its editor beside the list. The editor draws the query as three stage cards — **What it is** (label, description), **Statement** (SQL, writable) and **Parameters** — and shows the fields of the picked one.

---

## The editor form

<svg viewBox="0 0 1320 435" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ce-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ce-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ce-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ce-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="405" rx="14" fill="url(#ce-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="236" y="46" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]  ·  sql</text>
  <rect x="236" y="60" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="65" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="75.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SETTINGS</text>
  <text x="320.592" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="387" y1="72" x2="397" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="398" y="60" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="405" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="425" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="470.944" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="549" y1="72" x2="559" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="560" y="60" width="170" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="567" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="587" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERIES</text>
  <text x="638.768" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 query(ies)</text>
  <line x1="731" y1="72" x2="741" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="742" y="60" width="140" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="749" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="769" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEQUENCES</text>
  <text x="832.416" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <line x1="883" y1="72" x2="893" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="894" y="60" width="120" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="901" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="921" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="972.768" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="236" y="98" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="112.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filter 3…</text>
  <rect x="236" y="128" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="144" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customer_balance</text>
  <text x="246" y="157" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Balance per customer</text>
  <rect x="236" y="172" width="200" height="38" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="246" y="188" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <text x="246" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Revenue per month</text>
  <rect x="236" y="216" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="232" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">purge_old_logs</text>
  <text x="246" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Delete logs older than a year</text>
  <rect x="462" y="98" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="488.0" y="112.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← back</text>
  <text x="524" y="113" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <rect x="462" y="128" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="499.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="542" y="128" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="567.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="597" y="128" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="634.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Change type</text>
  <rect x="677" y="128" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="697.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Move</text>
  <rect x="722" y="128" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="744.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="772" y="128" width="50" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="797.0" y="142.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="462" y="164" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="469" y="169" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="489" y="179.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="558.24" y="179.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MONTHLY_REVENUE</text>
  <line x1="663" y1="176" x2="673" y2="176" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="674" y="164" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="681" y="169" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="701" y="179.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATEMENT</text>
  <text x="764.416" y="179.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">SELECT</text>
  <line x1="825" y1="176" x2="835" y2="176" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="836" y="164" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="843" y="169" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="863" y="179.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <text x="932.24" y="179.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 declared</text>
  <text x="462" y="210" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL ∗</text>
  <rect x="462" y="218" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="493.0" y="232.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Token</text>
  <rect x="944" y="218" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="979.0" y="232.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Wizard</text>
  <rect x="1020" y="218" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="232.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="462" y="246" width="610" height="89" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="262" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="486" y="262" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS MONTH,</text>
  <text x="476" y="277" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="486" y="277" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">       SUM(total_ht) AS REVENUE</text>
  <text x="476" y="292" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="486" y="292" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM invoices</text>
  <text x="476" y="307" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="486" y="307" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">WHERE invoice_date BETWEEN :FROM_DATE AND :TO_DATE</text>
  <text x="476" y="322" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="486" y="322" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">GROUP BY 1 ORDER BY 1</text>
  <rect x="462" y="343" width="132" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="528.0" y="357.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ per-dialect variants</text>
  <text x="462" y="385" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITABLE</text>
  <rect x="462" y="394" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="479" y="403" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="550" y="403" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Allow non-SELECT statements (INSERT / UPDATE / DELETE).</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The list stays beside</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one click to another query</text>
  <line x1="200" y1="137.0" x2="266" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three stages</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what it is, statement, parameters</text>
  <line x1="200" y1="197.0" x2="462" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server tokens</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;&#123;LOGIN&#125;&#125;, &#123;&#123;SYSDATE&#125;&#125;, schemas</text>
  <line x1="200" y1="257.0" x2="462" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="20" y="339" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="354" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-dialect variants</text>
  <text x="30" y="367" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one statement per database</text>
  <line x1="200" y1="356.0" x2="462" y2="354" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="1120" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Query buttons</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, rename, type, move…</text>
  <line x1="1120" y1="107.0" x2="822" y2="139" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="1120" y="206" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Wizard · Run</text>
  <text x="1130" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SELECT builder · try a read</text>
  <line x1="1120" y1="223.0" x2="1072" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="1120" y="365" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="380" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Writable</text>
  <text x="1130" y="393" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">off: SELECT only</text>
  <line x1="1120" y1="382.0" x2="472" y2="399" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
</svg>

---

## Field by field

### `name`

Shown in the editor's header, not editable there. The name is set when you click *＋ Add query* and is the permission key for the query — `sql:<connector>:<name>`. Rename via the **Rename** button of the header (cross-file — every screen / menu / dictionary reference is updated in one pass; refuses to run on unsaved local edits).

Naming rules:

| Rule | Why |
|---|---|
| Letters, digits, underscores. | TOML key, URL segment and permission string in one go. |
| Starts with a letter or underscore. | Same. |

Naming conventions that scale well:

| Pattern | Example |
|---|---|
| `<entity>_<action>` | `customer_balance`, `invoice_send` |
| `<verb>_<noun>` | `get_top_clients`, `mark_paid` |
| `report_<topic>` | `report_monthly_revenue`, `report_overdue_invoices` |

### `writable`

A checkbox under the SQL, in the **Statement** stage.

| State | Allowed |
|---|---|
| **Off** (default) | `SELECT` and CTE-only statements. |
| **On** | `INSERT` / `UPDATE` / `DELETE` / `CALL` / `MERGE` / DDL — anything that mutates the database. |

Leave it off for read queries — the safety gate refuses non-SELECT execution otherwise. The CRUD Wizard already sets it for `_put` / `_post` / `_delete`; on a hand-written query you flip it yourself when needed.

### `sql`

The **Statement** stage holds the SQL editor. It accepts a single statement (the common case) or a per-dialect map (**+ per-dialect variants**) — see [Per-dialect SQL variants](./per-dialect-sql.md).

What the editor offers:

| Feature | What it does |
|---|---|
| **Syntax highlighting** | Keywords coloured. |
| **Autocompletion** | Tables after `FROM` / `JOIN` / `INTO` / `UPDATE`, columns after `<table>.`, read from the connector's pool. Ctrl+Space opens the list. |
| **Token** | Inserts a value the server fills at execution: `{{LOGIN}}`, `{{SYSDATE}}`, `{{SYSTIME}}`, `{{SYSTIMESTAMP}}`, `{{JDEDATE}}`, `{{JDETIME}}`, `{{PID}}`, `{{JOBN}}` — see [Parameter binding](./parameter-binding.md#tokens). The end of the menu, **Pool schemas**, inserts a schema token of the pool, so the same SQL runs against another environment's schema. |
| **Wizard** | Opens the SELECT builder: pick a table, its columns, the WHERE and ORDER BY clauses. |
| **Run** | Tries the statement on the connector's pool and shows the rows. Offered on a read statement only (SELECT, WITH). |
| **`:name` placeholders** | Any `:identifier` in the SQL is a bind parameter — declare it in the **Parameters** stage. |

A few rules from how the engine binds:

- Use `:name` for parameters, never literal string interpolation. The engine binds them through the SQLAlchemy driver — `'%' || :search || '%'` is the LIKE pattern you want, not `'%' + search + '%'`.
- Reserved suffix `_ORIGINAL` is used by the dialog Save for UPDATE WHERE matching (see [Create from a database table](./create-from-database.md#why-name_original-on-update) for the convention).
- A single statement per query. For chained statements, use a `CALL` to a stored procedure or split into multiple Liberty queries.

### `params`

The **Parameters** stage lists the declared parameters — one line per `:placeholder`, opened to edit it (**add** declares another one). Each entry carries:

| Field | What it does |
|---|---|
| **Name** | The placeholder name (without the colon). Matched case-insensitively. |
| **Label** | What the form input shows above the field. Falls back to the name when empty. |
| **Default** | Pre-filled value. Blank means the caller can omit it (the engine binds SQL `NULL`). |
| **Help**, **Example** | What to put in it, in a sentence, and an example value — shown under the field where the parameter is filled, and given to the AI assistant. |
| **Choices** | The only values allowed, when there are a few: the field becomes a dropdown. |
| **Required** | A call without a value (and without a default) is refused before the query runs. |

Adding rows here doesn't change the SQL — it just tells screens and the AI assistant how to render an input for each placeholder. Skip this block when the query has no `:placeholders`; the engine accepts undeclared params at runtime (a column dialog can bind any `:column_name` it sees).

For binding values from other screens / sources (a row click, a parent filter, a chained action), see [Parameter binding](./parameter-binding.md).

### `label` (What it is)

Short name shown in dropdowns elsewhere — the screen designer, the menu target picker, the action editor. Defaults to the query name.

### `description` (What it is)

Longer text. Shows in the lists under the query's name, and as a tooltip when the operator hovers the query in the screen designer's read-query picker.

---

## Top-bar actions

The buttons of the query editor's header:

| Action | What it does | Notes |
|---|---|---|
| **← back** | Closes the editor; the list takes the whole width again (no save). | Unsaved edits stay pending — *Save* in the page header writes them. |
| **Find usages** | Lists where the query is used (screens, charts, dashboards, dictionary…). | |
| **Rename** | Cross-file rename. | Refuses on unsaved local edits; updates every reference. |
| **Change type** | Moves the query to Tables, Sequences or Lookups. | See [the four kinds of queries](./overview.md#kinds). |
| **Move** | Moves the query to another SQL connector and rewrites the references. | |
| **Clone** | Per-query duplicate — prompts for the name of the copy. | Default suggestion `<name>_copy`. See [Clone a query or a connector](./clone.md). |
| **Delete** | Removes the query from the connector. | A confirm modal first. |

---

## Save and reload

The page-level **Save** at the top of the Connectors page commits the connector file and triggers a hot reload. The new query is callable immediately at `/api/sql/<connector>/<name>` (with the bound params as query-string values for GET, JSON body for writable POST).

---

## Verifying the query works

**Run**, above the SQL editor, tries a read statement on the connector's pool and shows the rows — the quickest check while writing. Beyond it:

| Path | When |
|---|---|
| Use it from a screen. | When the next step is building the screen anyway. |
| Hit the REST endpoint directly. | For a quick smoke test — `GET /api/sql/<connector>/<query>?from_date=2026-01-01&to_date=2026-01-31`. |
| Ask the AI assistant. | "Show me the result of `monthly_revenue` for last month" — when the connector is open to the assistant, it runs the read query and returns the rows. |

The REST path is the fastest debug — error messages come back verbatim, and you can pass params via URL.

---

## When to use this vs the wizard

| Use the wizard | Use the custom editor |
|---|---|
| The table exists in the DB and you want the standard CRUD shapes. | The query joins multiple tables. |
| You want consistent `:NAME_ORIGINAL` wiring on UPDATE. | The query is a `GROUP BY` aggregate. |
| You want a `_delete` keyed on the primary key. | The query returns a derived column the table doesn't have. |
| | The query is a stored-procedure call. |
| | The query is a write that's not a simple UPDATE / INSERT / DELETE (a `MERGE`, a `TRUNCATE`). |

---

## What's next

- [Clone a query or a connector](./clone.md) — start from an existing query instead of from scratch.
- [Parameter binding](./parameter-binding.md) — give the `:placeholder` params labels, defaults and bound sources.
- [Per-dialect SQL variants](./per-dialect-sql.md) — ship one query with different SQL on Postgres vs Oracle.
