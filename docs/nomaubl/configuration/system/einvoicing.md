---
title: E-Invoicing
description: "Configure how NomaUBL talks to a Plateforme Agréée (PA) — through a reusable api-connector reference, an optional SFTP fallback for outbound submission, and a status-retrieval section. Four-tab layout: UBL Validation · PA Connection · FTP/SFTP · Status. The api-connector holds the auth flow and endpoints; this page only references it by name and overrides per-task endpoint names when needed."
keywords: [NomaUBL, e-invoicing, Plateforme Agréée, PA, api-connector, paMode, OAUTH2, REST API, SFTP, UBL validation, French e-invoicing, réforme facturation électronique, status retrieval, lifecycle, JD Edwards, SAP, NetSuite]
---

# E-Invoicing

The **E-Invoicing** editor tells NomaUBL **how to talk to a Plateforme Agréée (PA)** — the certified platform that receives, validates and dispatches e-invoices to the French e-invoicing public infrastructure. It also defines the local UBL transformation step (XSL directory) and the parameters of the lifecycle-status retrieval loop.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — once the source is mapped to UBL.

:::info[Refreshed in 2026.05.8]
The PA configuration story is now consistent across **e-invoicing**, **[e-directory](./edirectory.md)** and **[e-reporting](./ereporting.md)** — every system template references a reusable [api-connector](../api-connectors.md) instead of carrying inline auth and endpoints, and the legacy inline shape is gone (no fallback). The editor went from five tabs to **four** — the *Mock / Testing* tab was retired (point an api-connector at a Postman mock or a local stub when you need offline tests) and the *Actions* tab moved to a dedicated page under [Management → Action Bindings](../../management/actions.md). *Send Mode* migrated from *PA Connection* to *FTP/SFTP* where it logically belongs, and the *Background Scheduling* group disappeared (those intervals only ever did anything when set on the [global](./global.md) template).
:::

The editor has **four tabs**:

1. **UBL Validation** — directory of XSL transforms used to convert the source XML into UBL.
2. **PA Connection** — picks the api-connector that holds the PA's HTTP transport, plus per-task endpoint name overrides and connection-level parameters.
3. **FTP/SFTP** — Send Mode toggle and the SFTP server credentials used when the toggle is set to `FTP`.
4. **Status** — Status-retrieval cursor and hint that points to the polling intervals on `global`.

---

## Opening the editor

- *Settings* → **e-invoicing** template (the system-level resource).
- The default scope is the platform-wide `e-invoicing` template. Per-company overrides live on `e-invoicing-{kco}` templates and follow the same shape; the runtime resolver looks at the per-company template first and falls back to the platform-wide one.

---

## At a glance

<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="einv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="einv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="einv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="560" rx="14" fill="url(#einv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="106" height="24" rx="4" fill="transparent"/>
  <text x="293" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL Validation</text>
  <rect x="352" y="28" width="100" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="402" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">PA Connection</text>
  <rect x="458" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="496" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP/SFTP</text>
  <rect x="540" y="28" width="60" height="24" rx="4" fill="transparent"/>
  <text x="570" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Status</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">API connector</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">The PA's HTTP transport — auth flow, base URL, endpoints — lives in a reusable api-connector.</text>

  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="320" y="118" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="135" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">pa-default ▾</text>
  <text x="610" y="135" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">edit under API Connectors</text>

  <text x="240" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Per-task endpoint overrides</text>
  <text x="240" y="186" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Endpoint name on pa-default for each PA task. Leave blank to use the default name shown.</text>

  <rect x="240" y="196" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="211" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Import            |  import</text>
  <rect x="240" y="220" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="235" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Import status     |  import-status</text>
  <rect x="240" y="244" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="259" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Invoice statuses  |  invoice-statuses</text>
  <rect x="240" y="268" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="283" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Resolve invoice   |  resolve-invoice</text>
  <rect x="240" y="292" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="307" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Post status       |  post-status</text>
  <rect x="240" y="316" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="331" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Report import     |  report-import</text>

  <line x1="240" y1="358" x2="780" y2="358" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="382" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Connection</text>
  <text x="240" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIMEOUT (MS)</text>
  <rect x="320" y="394" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="411" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">30000</text>

  <text x="460" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SSL VERIFY</text>
  <rect x="540" y="394" width="240" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="411" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">true ▾</text>

  <line x1="240" y1="438" x2="780" y2="438" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="462" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">FTP / SFTP tab — preview</text>
  <text x="240" y="484" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND MODE</text>
  <rect x="320" y="474" width="200" height="26" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="330" y="491" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">API ▾</text>
  <text x="540" y="491" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">SFTP card dimmed when not FTP</text>

  <rect x="240" y="510" width="540" height="60" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1" opacity="0.5"/>
  <text x="252" y="528" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SFTP SERVER</text>
  <text x="252" y="542" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Host / Port / User / Password / Outbound / Inbound</text>
  <text x="252" y="558" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">used when Send Mode = FTP</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reusable api-connector</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no inline auth or endpoints here</text>
  <line x1="200" y1="115" x2="320" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>

  <rect x="820" y="220" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-task overrides</text>
  <text x="830" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">match endpoint names on connector</text>
  <line x1="820" y1="236" x2="780" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>

  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Timeout + SSL verify</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connection-level only</text>
  <line x1="200" y1="412" x2="320" y2="406" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>

  <rect x="820" y="476" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="491" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">paMode = API / FTP</text>
  <text x="830" y="504" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">empty = skip outbound send</text>
  <line x1="820" y1="492" x2="520" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>
</svg>

---

## Tab 1 — UBL Validation

This tab configures the **directory of XSL files** used to **transform the source XML into UBL**. The local UBL conformity check runs through standard schematrons and is documented separately on the [Validate](../../ubl-tools/validate.md) page.

| Field | Description |
|---|---|
| **XSLT Directory** | Directory containing the `.xsl` transform files used to convert the source XML into UBL. The placeholder `%APP_HOME%` expands to the NomaUBL install root. |

---

## Tab 2 — PA Connection

### API connector

The PA's HTTP transport — authentication flow, base URL, endpoints — lives in a reusable [api-connector](../api-connectors.md). This page **references it by name only** and never carries auth fields or HTTP endpoints inline. The bundled `pa-default` connector covers the standard flow; pick another one when the PA exposes a non-standard auth scheme or when several PAs need different connectors.

| Field | Description |
|---|---|
| **Connector** | Dropdown listing every `api-connector` template. The selected connector holds the PA's `baseUrl`, `authType`, credentials, token endpoint and the catalogue of HTTP endpoints. Edit the connector itself under [API Connectors](../api-connectors.md). |

### Per-task endpoint overrides

Each PA task in NomaUBL has a default endpoint name. When the api-connector exposes a different name for the same task, set an override below. Leave a field blank to use the default name shown.

| Field | Default | Used by |
|---|---|---|
| **Import** | `import` | Submitting an invoice to the PA. |
| **Import status** | `import-status` | Polling whether the PA has accepted an import. |
| **Invoice statuses** | `invoice-statuses` | The lifecycle-status retrieval loop. |
| **Resolve invoice** | `resolve-invoice` | Looking up a PA-assigned identifier from a NomaUBL document key. |
| **Post status** | `post-status` | Pushing seller statuses (regulatory actions) back to the PA. |
| **Report import** | `report-import` | E-Reporting submission when the [e-reporting](./ereporting.md) template falls back to the e-invoicing connector. |

### Connection

Connection-level parameters that apply to **every call routed through the picked api-connector**.

| Field | Default | Description |
|---|---|---|
| **Timeout (ms)** | `30000` | HTTP request timeout in milliseconds. Long-running calls are aborted past this. |
| **SSL Verify** | `true` | Whether to validate the PA's TLS certificate. Set to `false` only in non-production environments using self-signed certificates. |

---

## Tab 3 — FTP/SFTP

### Send Mode

| Field | Values | Description |
|---|---|---|
| **Send Mode** *(`paMode`)* | `API` *(default)* / `FTP` / *(empty)* | Transport used to **send invoices to the PA**. `API` routes the submission through the api-connector picked on the previous tab; `FTP` spools the UBL to a temp file and uploads it via SFTP using the server below; *(empty)* skips outbound submission entirely (useful while wiring up a new document type). Status retrieval, import polling and seller actions always go through the API regardless of this choice. |

### SFTP Server

The whole card is dimmed when *Send Mode* ≠ `FTP` — these fields only apply to the SFTP transport.

| Field | Description |
|---|---|
| **Host** | SFTP host (e.g. `ftp.plateformeagree.fr`). |
| **Port** | SFTP port. Default `22`. |
| **User** | SFTP user. |
| **Password** | SFTP password. |
| **Outbound Dir** | Remote directory where NomaUBL drops UBL files for the PA (e.g. `/out/invoices/`). |
| **Inbound Dir** | Remote directory where the PA writes status updates that NomaUBL pulls back (e.g. `/in/status/`). |

---

## Tab 4 — Status

The **Status Retrieval** section drives the lifecycle-status retrieval loop.

| Field | Default | Description |
|---|---|---|
| **Page size** | `100` | Number of statuses fetched per page when polling the PA. |
| **Last retrieved at** | *(updated automatically)* | ISO datetime of the most recent successful retrieval (e.g. `2025-01-01T00:00:00Z`). Updated automatically after each retrieval run; manual edits act as a starting point — useful to re-replay a window. |

:::info[Polling intervals live on `global`]
The intervals that drive how often the background scheduler polls the PA — `fetchImportInterval`, `fetchStatusInterval`, e-reporting cadence — are read from the [`global` template](./global.md), under *Scheduling*. The *Background Scheduling* group on this page used to write those keys here, but the scheduler never read them from this template — the dead-write was retired in 2026.05.8. Edit the intervals on `global → Scheduling` and they apply across all companies.
:::

---

## Action bindings — moved

The **Actions** tab that used to live on this page in the previous version was retired in 2026.05.7 and the multi-call action bindings ship as their own page under [Management → Action Bindings](../../management/actions.md). The storage shape (`action.N.id` / `.connector` / `.endpoint` / `.params` on this template) is unchanged — only the editor moved. The new page handles the multi-call list, the per-call *Stop on failure* flag, and the response chaining via `{call.N.fieldName}` placeholders.

---

## Tips & best practices

- **Pick the api-connector first.** Without a connector, the *Per-task endpoint overrides* fields stay hidden and the PA cannot be reached. The bundled `pa-default` connector is a reasonable starting point.
- **Leave the per-task overrides blank when the connector's endpoint names already match.** A `pa-default` connector with an endpoint literally named `import` does not need an override on the *Import* row. The page only stores values that differ from the default — typing the default name is harmless but adds noise.
- **Start with `paMode=` (empty)** when first wiring up a new document type. The UBL pipeline runs end-to-end without involving the PA, so source mappings and Schematron failures surface before the network is in the loop. Flip to `API` once the data side is clean.
- **Use SFTP only when the PA actually requires it.** REST is simpler to debug, and the api-connector test runner gives clear feedback. SFTP is appropriate when the PA mandates file drop or for high-volume batch submissions.
- **Edit polling intervals on `global → Scheduling`, not here.** The fields on this page were retired in 2026.05.8 because they had no effect.
- **Test against a Postman mock or a local stub** when offline. The retired in-process mock was only useful before the api-connector refactor — point the api-connector at the mock URL instead.
- **Per-company overrides go on `e-invoicing-{kco}`.** Copy the platform-wide `e-invoicing` template under the new name from *Settings* and edit only the fields that differ — typically `connector`, a couple of endpoint overrides, or the SFTP credentials when company `00070` uses a separate PA.
