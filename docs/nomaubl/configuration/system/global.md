---
title: Global
description: "Application-wide NomaUBL settings: directories, processing helpers (XSL, Ghostscript), SMTP, AI assistant, license & authentication, and the batch / polling scheduler."
keywords: [NomaUBL, global settings, directories, SMTP, Ghostscript, XSL, Anthropic, license, scheduler, batch jobs, JD Edwards, SAP, NetSuite]
---

# Global

The **Global** editor holds settings that apply to the **whole NomaUBL application** — file system layout, processing helpers, email server, AI assistant, license / authentication, and the background scheduler that drives polling and batch document jobs.

Settings here are largely **source-agnostic** and apply whether documents come from JD Edwards, SAP, NetSuite or a custom ERP. A few BIP-specific knobs are explicitly called out where they appear.

The editor has **six tabs**:

1. **Directories** — application home, file paths, batch state.
2. **Processing** — XSL config path, Ghostscript command, processing options.
3. **Email / SMTP** — outbound mail server.
4. **AI** — Anthropic API key for the in-app AI Assistant.
5. **Authentication** — license key + user authentication / session timeout.
6. **Scheduling** — automatic PA polling intervals and recurring batch jobs.

---

## At a glance

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="glb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="glb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="glb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="500" rx="14" fill="url(#glb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="82" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Directories</text>
  <rect x="328" y="28" width="80" height="24" rx="4" fill="transparent"/>
  <text x="368" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing</text>
  <rect x="414" y="28" width="80" height="24" rx="4" fill="transparent"/>
  <text x="454" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Email</text>
  <rect x="500" y="28" width="44" height="24" rx="4" fill="transparent"/>
  <text x="522" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">AI</text>
  <rect x="550" y="28" width="96" height="24" rx="4" fill="transparent"/>
  <text x="598" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Authentication</text>
  <rect x="652" y="28" width="80" height="24" rx="4" fill="transparent"/>
  <text x="692" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Scheduling</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Home Directories</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APP HOME</text>
  <rect x="340" y="98" width="440" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="114" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">/opt/nomaubl</text>
  <text x="240" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS HOME</text>
  <rect x="340" y="126" width="440" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="142" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">%APP_HOME%/process</text>

  <line x1="240" y1="166" x2="780" y2="166" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="188" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">File Paths</text>
  <text x="240" y="210" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIR INPUT / DIR OUTPUT / DIR ARCHIVE / DIR ERROR</text>
  <rect x="240" y="218" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="233" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/in/%TEMPLATE%</text>
  <rect x="240" y="244" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="259" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/out/%TEMPLATE%</text>
  <rect x="240" y="270" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="285" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/archive</text>
  <rect x="240" y="296" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="311" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/error</text>

  <line x1="240" y1="338" x2="780" y2="338" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="360" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Processing tab — preview</text>

  <text x="240" y="382" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPDATE DB</text>
  <rect x="340" y="372" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="400" y="387" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Y ▾</text>

  <text x="240" y="410" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">debugProfile <text fill="#64748b" fontSize="8" fontStyle="italic">(2026.05.9)</text></text>
  <rect x="340" y="400" width="120" height="22" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="400" y="415" fill="#fb923c" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">N ▾</text>
  <text x="468" y="415" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">writes per-step timing rows to F564237</text>

  <line x1="240" y1="438" x2="780" y2="438" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="460" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduling tab — preview</text>
  <text x="240" y="482" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FETCH IMPORT INTERVAL (min)</text>
  <rect x="450" y="472" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="487" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">15</text>
  <text x="540" y="487" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FETCH STATUS INTERVAL (min)</text>
  <rect x="730" y="472" width="50" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="755" y="487" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">5</text>
  <text x="240" y="510" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">read by BackgroundScheduler — set here, used everywhere</text>

  <rect x="20" y="96" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six-tab editor</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">platform-wide settings</text>
  <line x1="220" y1="112" x2="240" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>

  <rect x="20" y="218" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="233" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">%PLACEHOLDER% paths</text>
  <text x="30" y="246" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">%APP_HOME% / %TEMPLATE% / etc.</text>
  <line x1="220" y1="234" x2="240" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>

  <rect x="820" y="394" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="409" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">debugProfile · 2026.05.9</text>
  <text x="830" y="422" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per-step timing in F564237</text>
  <line x1="820" y1="410" x2="700" y2="410" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>

  <rect x="20" y="470" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduling intervals</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">BackgroundScheduler reads from here</text>
  <line x1="220" y1="486" x2="240" y2="484" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>
</svg>

---

## Tab 1 — Directories

### Home Directories

| Field | Description |
|---|---|
| **Application Home** | Root install directory of NomaUBL (e.g. `/app/nomaubl`). Resolved by the `%APP_HOME%` placeholder used in document template paths. |
| **Environment** | Short environment name (e.g. `demo`, `PD`). Resolves the `%ENV%` placeholder used in document template paths (`rtf`, `xsl`, `ublXslt`) so the same template can target multiple environments. |
| **Process Home** | Working directory used by NomaUBL during processing (e.g. `/app/nomaubl/process`). |

### File Paths

| Field | Description |
|---|---|
| **Input Directory** | Where new documents to process are dropped (XML spools, attachments…). |
| **Process Directory** | Where in-flight files live during processing. |
| **Temp Directory** | Scratch space for temporary artefacts. |
| **Single Output Dir** | Output directory for documents processed in *single* mode. |
| **Bursting Directory** | Output directory for documents produced by *bursting* mode (one file per invoice). |

### Batch Processing

| Field | Description |
|---|---|
| **Last BIP Job Number** | High-water mark of the last JDE BIP job number consumed. Used by the BIP source to skip already-processed jobs. *(BIP / JDE-specific.)* |
| **BIP Lookback (days)** | Date floor on the BIP scan. `0` = no floor — every job after the watermark is eligible. `N > 0` = only jobs updated in the last N days. Handy on a first install or after a long gap, to skip years of history rather than walking the whole queue. Applies to the manual scan, the scheduled batch and the `nomaubl -fetch-all` command. *(BIP / JDE-specific.)* |

---

## Tab 2 — Processing

### XSL Paths

| Field | Description |
|---|---|
| **XDO Config** | Path to the BI Publisher `xdo.cfg` configuration file used during PDF generation. |

### Ghostscript

| Field | Description |
|---|---|
| **GS Command** | Full Ghostscript command line used for PDF post-processing (e.g. `gs -dBATCH ...`). Multi-line values are accepted. |

### Options

| Field | Values | Description |
|---|---|---|
| **Update DB** | `Y` / `N` | When `Y`, processing runs persist their results to the database. Set to `N` only for dry runs / debugging. |
| **`debugProfile`** *(2026.05.9)* | `Y` / `N` | When `Y`, every processing run writes **per-step timing rows** to `F564237` covering each pipeline stage: header parsing, lines parsing, validation, UBL emit, PA send. The rows surface on the [Tech Dashboard](../../application/tech-dashboard.md) — the *Live process events* tail flags them with their step name, and the *Template processing time* widget breaks the average down by stage. Leave at `N` in production; flip to `Y` for the duration of a batch run when triaging a slow pipeline. Disable once the slow stage is identified — the extra rows inflate `F564237` quickly under load. |

---

## Tab 3 — Email / SMTP

Configures the outbound mail server NomaUBL uses to send notifications and document deliveries by email.

### SMTP Server

| Field | Description |
|---|---|
| **Host** | SMTP host (e.g. `smtp.example.com`). |
| **Port** | SMTP port (typically `587` for STARTTLS, `465` for implicit SSL, `25` plain). |
| **TLS (STARTTLS)** | `Y` / `N` — upgrade the connection to TLS via `STARTTLS`. |
| **SSL** | `Y` / `N` — open the connection in implicit SSL mode (rare in modern SMTP, mutually exclusive with STARTTLS). |

### SMTP Credentials

| Field | Description |
|---|---|
| **Username** | SMTP authentication user. |
| **Password** | SMTP authentication password. |

### Sender

| Field | Description |
|---|---|
| **From address** | Default `From:` address on outbound mail (e.g. `facturation@example.com`). |

---

## Tab 4 — AI

### Anthropic AI

| Field | Description |
|---|---|
| **API Key** | Anthropic API key used by NomaUBL's in-app **AI Assistant** panel. Without a valid key, the AI Assistant is disabled. |

---

## Tab 5 — Authentication

### License

| Field | Description |
|---|---|
| **License Key** | Full NomaUBL license key. **Without a valid key, the *Navigation*, *Synchronisation* and *UBL* menus are disabled** — only Configuration remains accessible. |

### Authentication

| Field | Description |
|---|---|
| **Enable Authentication** | `Y` / `N` — turn on password-based user login. When `N`, NomaUBL runs without a login wall (typically dev / on-prem behind a corporate VPN). |
| **Session Timeout (minutes)** | How long an authenticated user session remains valid. Default `480` (8 hours). |

---

## Tab 6 — Scheduling

Background tasks executed by NomaUBL when running in serve mode. **Changes on this tab take effect after a server restart.**

### Import & Status Polling

| Field | Description |
|---|---|
| **Import poll interval (min)** | Minutes between automatic import-status polls for pending invoices (status `9906`). `0` = disabled. |
| **Status retrieval interval (min)** | Minutes between automatic lifecycle-status retrievals from the PA. `0` = disabled. |
| **Received fetch interval (min)** | Minutes between automatic *PA inbound* sweeps — the same flow as the *Sync → Fetch Input → PA inbound (supplier invoices)* mode and the `-fetch-received` CLI. `0` = disabled. Persists the cursor of the highest issue date processed in `lastFetchReceivedAt` so each sweep only pulls invoices that arrived since the previous one. |

### Batch Document Processing

A list of recurring **batch jobs**. Each job runs independently on its own interval and scans for new documents to process. Use **+ Add batch job** to create one and the **×** button to delete one.

#### Per-job header fields

| Field | Description |
|---|---|
| **Label** | Human-readable name displayed in the job list (e.g. `BIP invoices`). |
| **Interval (min)** | Minutes between two runs. `0` = disabled (job exists but is not scheduled). |

#### Per-job parameters

The remaining fields configure how the job picks up and processes documents:

| Field | Values | Description |
|---|---|---|
| **Process type** | `xml` / `ubl` | `xml` = full pipeline (transform + process); `ubl` = direct UBL processing (input is already UBL). |
| **Template** *(when Process type = `xml`)* | from list | Document template to apply. Lists templates of type `document`. |
| **Mode** *(when Process type = `xml`)* | `AUTO` / `SINGLE` / `BURST` / `UBL` | Processing mode — `AUTO` lets NomaUBL decide; `SINGLE` and `BURST` force the corresponding output strategy; `UBL` produces UBL only. |
| **Source** | `bip` / `directory` | Where to fetch documents from: `bip` = JDE Print Queue *(JDE-specific)*; `directory` = scan the **Input Directory** configured in Tab 1. |
| **Extract mode** *(when Source = `bip`)* | `input` / `output` / `both` | Which BIP artefacts to pull: `input` = source XML only; `output` = generated output files only; `both` = both. |
| **Language filter** *(when Source = `bip`)* | text | Optional BIP language filter (e.g. `FR`). Empty = all languages. |
| **Replace existing** | `Y` / `N` | When `Y`, re-import documents that already exist in NomaUBL (overwrite); when `N`, skip duplicates. |
| **Skip PA send** *(when Process type = `xml`)* | `Y` / `N` | When `Y`, the job never sends to the Plateforme Agréée — it only produces UBL/PDF locally. |
| **Validate only** *(when Process type = `ubl`)* | `Y` / `N` | When `Y`, validate the UBL without sending it to the PA. |
| **Send to PA** *(when Process type = `ubl`)* | *(use settings)* / `Y` / `N` | Override the per-document-type "send to PA" decision: empty = use default; `Y` = force send; `N` = force skip. |

---

## Tips & best practices

- **Set Environment**. The `%ENV%` placeholder in document templates is what lets one configuration roll forward from `demo` to `PD` without editing every path.
- **Restart after changing scheduler values.** All intervals on Tab 6 (and the batch jobs) are read once at startup; updating them in the UI only persists the value — you still need to restart.
- **License gates the runtime.** If you suddenly see Navigation / Sync / UBL menus disappear, double-check the License Key first.
- **Pick `bip` Source only when you actually have JDE.** For other ERPs (SAP, NetSuite, custom), use `directory` and drop their XML output into the Input Directory.
- **Use `validateOnly` to dry-run UBL.** Pair it with `Skip PA send` (or its UBL equivalent) when migrating templates so you exercise the pipeline without touching the PA.
