---
title: Getting Started
description: "Liberty Next — connector-driven low-code framework. Configuration drives discovery: define a SQL or API connector in TOML, expose its queries to a screen or a dashboard, and the React UI builds the grid, the form and the filters automatically."
keywords: [Liberty, Liberty Next, low-code, framework, connector, TOML, SQL, API, screen, dashboard, dictionary, nomasx1, nomajde]
---

# Liberty Next

**Liberty Next** is a connector-driven low-code framework — the successor of Liberty v1. The shift in one sentence: **configuration drives discovery, not code drives configuration**. A SQL connector is a few lines of TOML pointing at a database pool and a list of queries; the React UI then builds a typed grid, a filter row, a modal form and lookups from what the cursor describes at query time — no metadata tables, no per-screen code.

Two paid applications ship on Liberty Next:

- **[Nomasx-1](/liberty/nomasx1/overview)** — enterprise security and compliance. Centralised view of users and roles, Oracle and JD Edwards licence compliance, automated Segregation of Duties analysis. For auditors, security officers and licence managers.
- **[Nomajde](/liberty/nomajde/overview)** — JD Edwards companion. Live screens on the JDE data: master data, security maintenance workbench, transactions, scheduled BIP reporting, live monitoring. For JDE operators, security administrators and ops engineers.

The framework itself (without the licensed connectors) is free.

:::info[Work in progress]
Liberty Next is in active development. This documentation is being written alongside the framework — pages may still be sparse, screenshots may be ahead of the deployed build, and some sections are placeholders. The [Framework](./framework/overview.md) section is the recommended entry point.
:::

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ln-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ln-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ln-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="ln-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.75"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.55"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="220" height="80" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="150" y="64" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 TOML CONFIG</text>
  <text x="150" y="84" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="150" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="150" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">screens.toml</text>

  <line x1="260" y1="80" x2="380" y2="80" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <text x="320" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">load</text>

  <rect x="380" y="40" width="240" height="80" rx="10" fill="url(#ln-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="500" y="64" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Liberty Next core</text>
  <text x="500" y="84" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FastAPI · async SQL · auth</text>
  <text x="500" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">PoolRegistry · ConnectorRegistry</text>
  <text x="500" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/* · /admin/* · /ai/chat</text>

  <line x1="620" y1="80" x2="740" y2="80" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <text x="680" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">REST</text>

  <rect x="740" y="40" width="220" height="80" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="850" y="64" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ REACT UI</text>
  <text x="850" y="84" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">TableView · Dashboard</text>
  <text x="850" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Settings · Chat</text>
  <text x="850" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">EN / FR</text>

  <rect x="40" y="180" width="280" height="100" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="180" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 SQL POOLS</text>
  <text x="180" y="224" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">PostgreSQL · Oracle · SQLite</text>
  <text x="180" y="240" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">schema discovered at query time</text>
  <text x="180" y="258" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">cursor.description → typed columns</text>

  <line x1="320" y1="230" x2="440" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <rect x="440" y="200" width="120" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1.2"/>
  <text x="500" y="220" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SQLConnector</text>
  <text x="500" y="238" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">named queries</text>
  <text x="500" y="252" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">writable gate</text>

  <line x1="560" y1="230" x2="680" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <rect x="680" y="180" width="280" height="100" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="820" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🌐 API CONNECTORS</text>
  <text x="820" y="224" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">REST endpoints</text>
  <text x="820" y="240" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">bearer / basic / OAuth2 / api_key</text>
  <text x="820" y="258" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">placeholder substitution</text>

  <rect x="40" y="320" width="920" height="100" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1.2"/>
  <text x="60" y="346" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">DICTIONARY · SCREENS · DASHBOARDS · MENUS</text>
  <text x="60" y="368" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Dictionary entries pin labels and BOOLEAN / ENUM / LOOKUP rules to a query column. Screens turn a row click into a typed modal form (tabs · per-field conditions · audit). Dashboards lay out charts and KPIs over named queries. Menus define what the operator sees in the sidebar, pruned to their permissions.</text>
  <text x="60" y="392" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Every config file is hot-reloadable. `POST /admin/reload` rebuilds the registry; in-flight requests keep the version they started with.</text>
  <text x="60" y="412" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">License key (RS256-signed JWT) unlocks the `licensed = true` connectors — that is what gates nomasx1 and nomajde.</text>
</svg>

---

## What changed from v1

| Concern | v1 (Liberty) | v2 (Liberty Next) |
|---|---|---|
| **Schema source** | ~50 `ly_*` metadata tables: queries, columns, forms, menus all stored as rows. | Discovered at query time from the cursor (`cursor.description`); display hints live in [`config/connectors.toml`](./framework/connectors.md). |
| **Layout** | Form / dialog / column tables (`ly_dialogs`, `ly_dlg_frm`, `ly_dlg_tab`, `ly_dlg_col`) chained for every screen. | A single [`Screen`](./framework/screens.md) per business object, with inline `dialog`, `actions`, `row_menu`. |
| **Lookups / enums** | `ly_lookup` / `ly_enum` rows. | [Dictionary](./framework/dictionary.md) entries — `BOOLEAN` / `ENUM` / `LOOKUP` rules pinned per field. |
| **Auth** | DB-only. | TOML *or* DB backend, JWT, OIDC against any provider. |
| **AI assistant** | Hardcoded OpenAI. | Anthropic SDK, tool-use over the connectors / screens / dashboards. |
| **Frontend** | Mixed React + jQuery + per-screen code. | React 19 + Vite + TypeScript, single-page, dark-default with light theme. |
| **Migration** | — | `liberty-migrate all / dictionary / menu / screen` reads v1 read-only and emits TOML fragments. |

The full design plan lives at `docs/PLAN.md` in the repository.

---

## Local development

```bash
python3.12 -m venv .venv
.venv/bin/pip install -e ".[dev]"

./start.sh init-config    # copy config/*.toml.example → real (uncommitted) files
./start.sh init-db        # FIRST RUN: create the auth store + an `admin` user
./start.sh                # build frontend if stale, then run FastAPI on :8000
./start.sh dev            # same, with auto-reload
./start.sh frontend       # Vite dev server on :5173 (HMR) — pair with `./start.sh api dev`
./start.sh help           # all commands
```

The backend serves the built frontend (`frontend/dist`) at `/`; no copy step. A fresh checkout with no `config/connectors.toml` runs API-only — the framework pool is the only connector configured by default.

Environment knobs:

| Variable | Purpose |
|---|---|
| `LIBERTY_DB_URL` | Framework pool (auth tables when `[auth] backend = "db"`). Defaults to a local SQLite file. |
| `LIBERTY_JWT_SECRET` | Token signing key — ephemeral when unset. |
| `LIBERTY_MASTER_KEY` | Crypto master key for `ENC:` values (matches v1's `MASTER_KEY`). |
| `LIBERTY_LICENSE_KEY` | RS256-signed JWT that unlocks licensed connectors (nomasx1 / nomajde). |
| `ANTHROPIC_API_KEY` | Enables the in-app AI assistant. |

Config files support `${NAME}` and `${NAME:-default}` references.

---

## Next steps

| Where to go | Why |
|---|---|
| [Framework → Overview](./framework/overview.md) | Layered model: pools, connectors, dictionary, screens, dashboards, menus. |
| [Framework → Connectors](./framework/connectors.md) | Define a SQL or API connector in TOML — schema, params, writable gate. |
| [Framework → Screens](./framework/screens.md) | Wrap a connector query in a Screen — grid, filters, modal form, audit. |
| [Nomasx-1 overview](/liberty/nomasx1/overview) | Enterprise security and compliance — users, roles, Oracle / JDE licence compliance, Segregation of Duties. |
| [Nomajde overview](/liberty/nomajde/overview) | JD Edwards companion — master data, security maintenance, transactions, reporting, monitoring. |
