---
title: E-Reporting
description: "Configure how NomaUBL produces and submits e-Reporting bundles — Sender / Issuer identity, schedule, the api-connector that holds the PA's HTTP transport, and the SFTP fallback for outbound submission. Four sections shown as step cards: Identity · Reporting · PA Connection · FTP/SFTP. paMode = API / FTP / empty replaces the legacy sendToPA Y/N flag."
keywords: [NomaUBL, e-reporting, French e-reporting, AFNOR XP Z12-014, Flux 10.1, Flux 10.3, B2BINT, B2C, OUTOFSCOPE, sender, issuer, SIREN, frequency, MONTHLY, paMode, api-connector, SFTP, JD Edwards, SAP, NetSuite, custom ERP]
---

# E-Reporting

The **E-Reporting** editor configures how NomaUBL **produces and submits the periodic e-Reporting bundles** required by the French e-invoicing reform. Each company files a regulatory report covering its B2BINT, B2C and out-of-scope flows on a fixed cadence (monthly by default); this page controls the sender / issuer identity emitted in the bundle, the cadence, and the PA transport used to upload the bundle once generated.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — once the source is mapped to UBL.

The editor shows its **four sections as step cards** across the top. Each card gives the section's name and its state — the first values set among its fields — and a click shows its fields ([how the cards work](../settings-overview.md#section-cards)):

1. **Identity** — Sender (PA) and Issuer (Declarant) identification fields emitted in the bundle.
2. **Reporting** — Business Process (B2BINT) plus Schedule.
3. **PA Connection** — picks the api-connector that holds the PA's HTTP transport, plus the per-task endpoint name override and connection-level parameters.
4. **FTP/SFTP** — Send Mode toggle and the SFTP server credentials used when the toggle is set to `FTP`.

---

## Opening the editor

- *Settings* → **E-reporting** area → **E-reporting** card (the `e-reporting` system template).
- A **Scope** bar at the top picks the setup being edited: **Default (e-reporting)** or **Company *kco* (e-reporting-*kco*)**. Type a company code and click **Add override** to create a company setup seeded from the default; **Delete override** removes the selected one. Each company can thus carry its own issuer, frequency and PA connection.
- The runtime looks at the company setup first and falls back to the default. The companies to run are detected from the company setups; **Companies (kco) override**, on the default, only names the companies to run **with the default settings** — a company with its own setup uses that setup instead.

---

## At a glance

<svg viewBox="0 0 1000 644" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="erep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="erep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="erep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <marker id="erep-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="580" height="604" rx="14" fill="url(#erep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="232" y="30" width="127" height="44" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="240" y="37" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="248.0" y="48.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣</text>
  <text x="262" y="48.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTITY</text>
  <text x="241" y="66" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PA01 · WK</text>
  <line x1="360" y1="52.0" x2="372" y2="52.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#erep-flow)"/>
  <rect x="375" y="30" width="127" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="383" y="37" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="391.0" y="48.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="405" y="48.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORTING</text>
  <text x="384" y="66" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">MONTHLY · 10.1,…</text>
  <line x1="503" y1="52.0" x2="515" y2="52.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#erep-flow)"/>
  <rect x="518" y="30" width="127" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="526" y="37" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="534.0" y="48.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⇄</text>
  <text x="548" y="48.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PA CONNECTION</text>
  <text x="527" y="66" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">pa-default · repo…</text>
  <line x1="646" y1="52.0" x2="658" y2="52.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#erep-flow)"/>
  <rect x="661" y="30" width="127" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="669" y="37" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="677.0" y="48.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">≡</text>
  <text x="691" y="48.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FTP/SFTP</text>
  <text x="670" y="66" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">API</text>
  <line x1="220" y1="84" x2="800" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <g transform="translate(0,24)">

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

  <text x="240" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Reporting section — preview</text>
  <text x="240" y="254" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FREQUENCY</text>
  <rect x="320" y="244" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="261" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">MONTHLY ▾</text>
  <text x="490" y="254" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FLUX</text>
  <rect x="528" y="244" width="252" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="261" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">10.1,10.3</text>

  <line x1="240" y1="292" x2="780" y2="292" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="316" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">PA Connection section — preview</text>
  <text x="240" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="320" y="328" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="345" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">pa-default ▾</text>
  <text x="610" y="345" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">independent of e-invoicing</text>

  <text x="240" y="378" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT IMPORT ENDPOINT</text>
  <rect x="380" y="368" width="260" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="385" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">report-import</text>

  <line x1="240" y1="412" x2="780" y2="412" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="436" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">FTP/SFTP section — preview</text>
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

  </g></svg>

---

## Card 1 — Identity

The Identity section carries the actors emitted on every report bundle. Both blocks are rendered as XML elements inside the AFNOR XP Z12-014 envelope (`<Sender>` and `<Issuer>`).

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

## Card 2 — Reporting

### Business Process (B2BINT only)

These fields are emitted on per-invoice `<BusinessProcess>` elements, **only for `B2BINT`** invoices.

| Field | Description |
|---|---|
| **Business Process ID** | Optional. TT-28 *cadre de facturation* (e.g. `B1`, `P1`). |
| **Business Process Type ID** | Optional. TT-29 specification identifier. |
| **Flow Name** | Optional. TT-2 emitted as `<ReportDocument><Name>`. |

### Schedule

| Field | Default | Description |
|---|---|---|
| **Frequency** | `MONTHLY` | Drives the period auto-computed by the scheduler and the *Generate* dialog default. |
| **Default Type Code** | `IN` | Default report type code. |

Each report carries both flows — 10.1 (B2B international, detail) and 10.3 (B2C, aggregated) — for one company and one direction; the direction is chosen in the *Generate* dialog of [E-Reporting](../../application/ereporting.md#generate-dialog).

---

## Card 3 — PA Connection

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

## Card 4 — FTP/SFTP

### Send Mode

| Field | Values | Description |
|---|---|---|
| **Send Mode** *(`paMode`)* | `API` *(default)* / `FTP` / *(empty)* | Transport used to **submit generated reports** to the PA. `API` routes the bundle through the api-connector picked on the previous card; `FTP` spools the report XML to a temp file and uploads it via SFTP using the server below; *(empty)* lets NomaUBL **generate reports without submitting them** — useful while validating the identity before involving the PA. |

The `paMode` field works the same way as on the E-Invoicing page.

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

The configuration check on the [IT dashboard](../../application/tech-dashboard.md) validates the template against these rules:

- `paMode=API` without a `connector` is reported as an error (the API transport has nothing to call).
- `paMode=FTP` without `paFtpHost` is reported as an error (the SFTP transport has no server).
- `paMode=` (empty) with a `connector` is fine — reports generate locally and are not submitted.
- `issuerSiren` and the `connector` are checked whenever `paMode` is non-empty (i.e. the bundle will actually be submitted).

---

## Tips & best practices

- **Pick a separate api-connector when the reporting platform differs.** A multi-platform install often has e-invoicing on one PA and e-reporting on another — that's why each system template carries its own connector reference. Set both to the same connector name when they share a platform.
- **Start with `paMode=` (empty)** when first wiring the company up. NomaUBL generates the report locally so the identity can be validated against a sample without touching the PA. Flip to `API` once the bundle reads correctly.
- **Use SFTP only when the PA mandates file drop.** REST submission is simpler to debug and works with the api-connector test panel; SFTP is appropriate for high-volume submissions or when the PA does not expose a REST report-import endpoint.
- **Per-company overrides go on `e-reporting-{kco}`.** Copy the platform-wide `e-reporting` template under the new name from *Settings* and edit only the fields that differ — typically `issuerSiren`, the `connector` reference, or the SFTP credentials when company `00070` reports through a different platform.
- **Frequency drives the auto-computed period.** Setting it to `MONTHLY` makes the scheduler emit one bundle per month covering the previous month; `QUARTERLY` extends the window. The *Generate* dialog still lets the user override the period at run time.
- **Companies (kco) override is rarely needed.** NomaUBL auto-detects companies from the invoices it processes and from the existence of `e-reporting-{kco}` templates. Set the field manually only when reporting must be limited to a subset (e.g. one division during a phased rollout).
