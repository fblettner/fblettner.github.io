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
