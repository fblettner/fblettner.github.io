---
title: E-Reporting
description: "Configure how NomaUBL produces and submits e-Reporting bundles — Sender / Issuer identity, schedule and flux, the api-connector that holds the PA's HTTP transport, and the SFTP fallback for outbound submission. Four-tab layout: Identity · Reporting · PA Connection · FTP/SFTP. paMode = API / FTP / empty replaces the legacy sendToPA Y/N flag."
keywords: [NomaUBL, e-reporting, French e-reporting, AFNOR XP Z12-014, Flux 10.1, Flux 10.3, B2BINT, B2C, OUTOFSCOPE, sender, issuer, SIREN, frequency, MONTHLY, paMode, api-connector, SFTP, JD Edwards, SAP, NetSuite, custom ERP]
---

# E-Reporting

The **E-Reporting** editor configures how NomaUBL **produces and submits the periodic e-Reporting bundles** required by the French e-invoicing reform. Each company files a regulatory report covering its B2BINT, B2C and out-of-scope flows on a fixed cadence (monthly by default); this page controls the sender / issuer identity emitted in the bundle, the cadence and flux selection, and the PA transport used to upload the bundle once generated.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — once the source is mapped to UBL.

:::info[Refreshed in 2026.05.8]
E-Reporting is now **fully decoupled** from [E-Invoicing](./einvoicing.md). It picks its own [api-connector](../api-connectors.md), its own `endpoint.report-import` and its own `paMode`, so reporting can target a different platform — or use different credentials on the same platform — than invoice import. A new **SFTP transport** lets the bundle be uploaded as a file drop instead of a REST POST. The legacy `sendToPA` Y/N flag was replaced by `paMode` (`API` / `FTP` / empty) for consistency with E-Invoicing. The configuration check now flags `paMode=API` without a `connector` and `paMode=FTP` without `paFtpHost` as errors.
:::

The editor has **four tabs**:

1. **Identity** — Sender (PA) and Issuer (Declarant) identification fields emitted in the bundle.
2. **Reporting** — Business Process (B2BINT) plus Schedule and Flux selection.
3. **PA Connection** — picks the api-connector that holds the PA's HTTP transport, plus the per-task endpoint name override and connection-level parameters.
4. **FTP/SFTP** — Send Mode toggle and the SFTP server credentials used when the toggle is set to `FTP`.

---

## Opening the editor

- *Settings* → **e-reporting** template (the system-level resource).
- The default scope is the platform-wide `e-reporting` template. Per-company overrides live on `e-reporting-{kco}` templates and follow the same shape; the runtime resolver looks at the per-company template first and falls back to the platform-wide one.

---

## At a glance

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="erep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="erep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="erep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="580" rx="14" fill="url(#erep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="68" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="274" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Identity</text>
  <rect x="314" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="352" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Reporting</text>
  <rect x="396" y="28" width="100" height="24" rx="4" fill="transparent"/>
  <text x="446" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">PA Connection</text>
  <rect x="502" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="540" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP/SFTP</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sender (PA)</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MATRICULE</text>
  <rect x="320" y="98" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="115" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">PA01</text>
  <text x="450" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE CODE</text>
  <rect x="530" y="98" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="115" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">WK</text>

  <text x="240" y="148" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Issuer (Declarant)</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIREN</text>
  <rect x="320" y="160" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">123456789</text>
  <text x="490" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEME</text>
  <rect x="558" y="160" width="92" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="568" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">0002 ▾</text>
  <text x="664" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <rect x="700" y="160" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="710" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">SE ▾</text>

  <line x1="240" y1="208" x2="780" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Reporting tab — preview</text>
  <text x="240" y="254" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FREQUENCY</text>
  <rect x="320" y="244" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="261" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">MONTHLY ▾</text>
  <text x="490" y="254" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FLUX</text>
  <rect x="528" y="244" width="252" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="261" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">10.1,10.3</text>

  <line x1="240" y1="292" x2="780" y2="292" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="316" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">PA Connection tab — preview</text>
  <text x="240" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="320" y="328" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="345" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">pa-default ▾</text>
  <text x="610" y="345" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">independent of e-invoicing</text>

  <text x="240" y="378" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT IMPORT ENDPOINT</text>
  <rect x="380" y="368" width="260" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="385" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">report-import</text>

  <line x1="240" y1="412" x2="780" y2="412" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="436" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">FTP/SFTP tab — preview</text>
  <text x="240" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND MODE</text>
  <rect x="320" y="448" width="180" height="26" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="330" y="465" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">API ▾</text>
  <text x="510" y="465" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">empty = generate without submission</text>

  <rect x="240" y="486" width="540" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1" opacity="0.5"/>
  <text x="252" y="506" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SFTP SERVER</text>
  <text x="660" y="506" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">used when Send Mode = FTP</text>
  <text x="252" y="524" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Host       |  ftp.plateformeagree.fr</text>
  <text x="252" y="540" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Port       |  22</text>
  <text x="252" y="556" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Outbound   |  /out/reports/</text>
  <text x="252" y="572" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Inbound    |  /in/reports/</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sender + Issuer identity</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">emitted in every report bundle</text>
  <line x1="200" y1="115" x2="320" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Frequency + Flux</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drives the scheduler period</text>
  <line x1="820" y1="256" x2="780" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>

  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Own api-connector</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">independent from e-invoicing</text>
  <line x1="200" y1="346" x2="320" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>

  <rect x="820" y="450" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">paMode = API/FTP/empty</text>
  <text x="830" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">replaces sendToPA Y/N</text>
  <line x1="820" y1="466" x2="500" y2="466" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>
</svg>

---

## Tab 1 — Identity

The Identity tab carries the actors emitted on every report bundle. Both blocks are rendered as XML elements inside the AFNOR XP Z12-014 envelope (`<Sender>` and `<Issuer>`).

### Sender (PA)

| Field | Default | Description |
|---|---|---|
| **Matricule** | — | PA matricule (4 chars), emitted as `<Sender><Id schemeId="0238">`. |
| **Name** | — | Optional. Emitted as `<Sender><Name>`. |
| **Role Code** | `WK` | Default `WK` (PA). Emitted as `<Sender><RoleCode>`. |

### Issuer (Declarant)

| Field | Default | Description |
|---|---|---|
| **Identifier (SIREN)** | — | Declarant identifier emitted as `<Issuer><Id schemeId="0002">`. |
| **Name** | — | Optional. Emitted as `<Issuer><Name>`. |
| **Scheme ID** | `0002` | ISO 6523 ICD scheme. Default `0002` (SIREN France). |
| **Role Code** | `SE` | `SE` for sales reporting (default), `BY` when reporting purchases. |
| **Companies (kco) override** | *(empty)* | Comma-separated list of companies to process. Leave blank to auto-detect from invoices and per-company override templates. |

---

## Tab 2 — Reporting

### Business Process (B2BINT only)

These fields are emitted on per-invoice `<BusinessProcess>` elements, **only for `B2BINT`** invoices.

| Field | Description |
|---|---|
| **Business Process ID** | Optional. TT-28 *cadre de facturation* (e.g. `B1`, `P1`). |
| **Business Process Type ID** | Optional. TT-29 specification identifier. |
| **Flow Name** | Optional. TT-2 emitted as `<ReportDocument><Name>`. |

### Schedule & Flux

| Field | Default | Description |
|---|---|---|
| **Frequency** | `MONTHLY` | Drives the period auto-computed by the scheduler and the *Generate* dialog default. |
| **Flux** | `10.1,10.3` | Comma-separated flux codes. Default covers Flux 10.1 (B2BINT detail) and Flux 10.3 (B2C / OUTOFSCOPE aggregated). |
| **Default Type Code** | `IN` | Default report type code. |

---

## Tab 3 — PA Connection

### API connector

The PA's HTTP transport — authentication flow, base URL, endpoints — lives in a reusable [api-connector](../api-connectors.md). E-Reporting **picks its own connector** rather than sharing the one set on [E-Invoicing](./einvoicing.md), so reporting can target a different platform — or use different credentials on the same platform — than invoice import.

| Field | Description |
|---|---|
| **Connector** | Dropdown listing every `api-connector` template. Use a different connector than e-invoicing if the reporting flow goes to a separate platform or uses different credentials. Edit the connector itself under [API Connectors](../api-connectors.md). |

### Per-task endpoint override

| Field | Default | Description |
|---|---|---|
| **Report import** | `report-import` | Endpoint name on the picked connector for report submission. Leave blank to use the default. |

### Connection

| Field | Default | Description |
|---|---|---|
| **Timeout (ms)** | `30000` | HTTP request timeout in milliseconds. Long-running submissions are aborted past this. |
| **SSL Verify** | `true` | Whether to validate the PA's TLS certificate. Set to `false` only in non-production environments using self-signed certificates. |

---

## Tab 4 — FTP/SFTP

### Send Mode

| Field | Values | Description |
|---|---|---|
| **Send Mode** *(`paMode`)* | `API` *(default)* / `FTP` / *(empty)* | Transport used to **submit generated reports** to the PA. `API` routes the bundle through the api-connector picked on the previous tab; `FTP` spools the report XML to a temp file and uploads it via SFTP using the server below; *(empty)* lets NomaUBL **generate reports without submitting them** — useful while validating identity and flux selection before involving the PA. |

The `paMode` field replaces the legacy `sendToPA` Y/N flag in 2026.05.8. Same semantics, single field, consistent with E-Invoicing.

### SFTP Server

The whole card is dimmed when *Send Mode* ≠ `FTP` — these fields only apply to the SFTP transport.

| Field | Description |
|---|---|
| **Host** | SFTP host (e.g. `ftp.plateformeagree.fr`). |
| **Port** | SFTP port. Default `22`. |
| **User** | SFTP user. |
| **Password** | SFTP password. |
| **Outbound Dir** | Remote directory where NomaUBL drops report bundles for the PA (e.g. `/out/reports/`). |
| **Inbound Dir** | Remote directory where the PA writes acknowledgements (e.g. `/in/reports/`). |

---

## Configuration check

The configuration check on the [Tech Dashboard](../../application/tech-dashboard.md) validates the template against the new shape:

- `paMode=API` without a `connector` is reported as an error (the API transport has nothing to call).
- `paMode=FTP` without `paFtpHost` is reported as an error (the SFTP transport has no server).
- `paMode=` (empty) with a `connector` is fine — reports generate locally and are not submitted.
- `issuerSiren`, `frequency` and `flux` are validated whenever `paMode` is non-empty (i.e. the bundle will actually be submitted).

The legacy `sendToPA=Y` / `issuerSiren` check is gone — replaced by the per-`paMode` rules above.

---

## Tips & best practices

- **Pick a separate api-connector when the reporting platform differs.** A multi-platform install often has e-invoicing on one PA and e-reporting on another — that's why each system template carries its own connector reference. Set both to the same connector name when they share a platform.
- **Start with `paMode=` (empty)** when first wiring the company up. NomaUBL generates the report locally so identity and flux selection can be validated against a sample without touching the PA. Flip to `API` once the bundle reads correctly.
- **Use SFTP only when the PA mandates file drop.** REST submission is simpler to debug and works with the api-connector test panel; SFTP is appropriate for high-volume submissions or when the PA does not expose a REST report-import endpoint.
- **Per-company overrides go on `e-reporting-{kco}`.** Copy the platform-wide `e-reporting` template under the new name from *Settings* and edit only the fields that differ — typically `issuerSiren`, the `connector` reference, or the SFTP credentials when company `00070` reports through a different platform.
- **Frequency drives the auto-computed period.** Setting it to `MONTHLY` makes the scheduler emit one bundle per month covering the previous month; `QUARTERLY` extends the window. The *Generate* dialog still lets the user override the period at run time.
- **Companies (kco) override is rarely needed.** NomaUBL auto-detects companies from the invoices it processes and from the existence of `e-reporting-{kco}` templates. Set the field manually only when reporting must be limited to a subset (e.g. one division during a phased rollout).
