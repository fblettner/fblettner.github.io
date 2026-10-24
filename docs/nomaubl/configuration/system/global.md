---
title: Global
description: "Application-wide NomaUBL settings in nine tabs: directories and environment, processing, server log, PDF rendering, email, AI assistant, job defaults (quiet window, bulk send, retention, BIP watermarks), license and authentication."
keywords: [NomaUBL, global settings, directories, SMTP, Ghostscript, XSL, Anthropic, license, server log, retention, job defaults, AI assistant, JD Edwards, SAP, NetSuite]
---

# Global

The **Global** settings hold what applies to the **whole NomaUBL application**: file system layout and environment, processing options, the server log, PDF rendering, the email server, the AI assistant, the defaults shared by the scheduled jobs, the license and the authentication. They apply whatever the source system — JD Edwards, SAP, NetSuite or a custom ERP; the few BIP-specific settings are flagged where they appear.

The editor has **nine tabs**: Directories, Processing, Logs, PDF, Email, AI, Job defaults, License, Authentication. In the [Settings navigation](../settings-overview.md) each tab is an entry of its own — *Directories & environment*, *Processing*, *Server log*, *PDF rendering*, *Email*, *AI assistant* and *License* in **Platform**, *Authentication* in **Security**, *Job defaults* in **Jobs & inbound** — and opens that part only, without the row of tabs. The search box of Settings finds any field of these tabs by its label, hint or key.

The jobs themselves — polls, batch document jobs, daily digests, auto-retries, lifecycle checks, retention purge — are not set here: they are on the [Scheduled jobs](../../sync/scheduled-jobs/overview.md) page.

---

## At a glance

<svg viewBox="0 0 1200 338" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="gl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="gl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="gl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="292" rx="14" fill="url(#gl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="320" y="48" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">global</text>
  <rect x="900" y="32" width="60" height="22" rx="5" fill="url(#gl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Save</text>
  <rect x="240" y="72" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="280.0" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Directories</text>
  <rect x="325" y="72" width="75" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="362.5" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing</text>
  <rect x="405" y="72" width="43" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="426.5" y="86.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Logs</text>
  <rect x="453" y="72" width="37" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="471.5" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="495" y="72" width="48" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="519.0" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Email</text>
  <rect x="548" y="72" width="32" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="564.0" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">AI</text>
  <rect x="585" y="72" width="85" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="627.5" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Job defaults</text>
  <rect x="675" y="72" width="59" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="704.5" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">License</text>
  <rect x="739" y="72" width="96" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Authentication</text>
  <text x="240" y="124" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVER LOG</text>
  <text x="240" y="153" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Server log file</text>
  <rect x="420" y="138" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="152.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">auto (stdout of the server)</text>
  <text x="240" y="185" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Log size cap (MB)</text>
  <rect x="420" y="170" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="184.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">100</text>
  <text x="240" y="217" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Log files kept</text>
  <rect x="420" y="202" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="216.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">5</text>
  <text x="240" y="249" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Log repeat window (s)</text>
  <rect x="420" y="234" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="248.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">600</text>
  <text x="240" y="281" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Log levels</text>
  <rect x="420" y="266" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="280.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STATUS=WARN, API=INFO, ·=INFO</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nine tabs</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one per area of the instance</text>
  <line x1="200" y1="83.0" x2="240" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gl-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server log file</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read by Diagnostics → Server log</text>
  <line x1="200" y1="157.0" x2="420" y2="149" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gl-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Repeat window</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identical lines counted, not written</text>
  <line x1="200" y1="247.0" x2="420" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gl-arrow)"/>
  <rect x="1000" y="172" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Built-in rotation</text>
  <text x="1010" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy to .1 and truncate, 5 kept</text>
  <line x1="1000" y1="189.0" x2="720" y2="197" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gl-arrow)"/>
  <rect x="1000" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Levels per module</text>
  <text x="1010" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">MODULE=LEVEL, · = all others</text>
  <line x1="1000" y1="287.0" x2="720" y2="277" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gl-arrow)"/>
  <rect x="1000" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1010" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the global template</text>
  <line x1="1000" y1="43.0" x2="960" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gl-arrow)"/>
</svg>

---

## Tab 1 — Directories

### Home Directories

| Field | Description |
|---|---|
| **Application Home** | Root install directory of NomaUBL (e.g. `/app/nomaubl`). Resolved by the `%APP_HOME%` placeholder used in document paths. |
| **Environment** | Short environment name (e.g. `demo`, `PD`). Resolves the `%ENV%` placeholder used in document paths (`rtf`, `xsl`, `ublXslt`) so the same template can target multiple environments. The name is also shown as a **badge right of the application title** and in the browser tab. |
| **Theme colour** | Colour picker, next to the environment. Replaces the accent blue of the whole interface — title, environment badge, primary buttons, links, focus rings — so each environment is told apart at a glance. Badge and colour are served by a public endpoint, so the login page already carries them. Blank keeps the default blue. |
| **Process Home** | Working directory used by NomaUBL during processing (e.g. `/app/nomaubl/process`). |

### File Paths

| Field | Description |
|---|---|
| **Input Directory** | Where new documents to process are dropped (XML spools, attachments…). |
| **Process Directory** | Where in-flight files live during processing. |
| **Temp Directory** | Scratch space for temporary artefacts. |
| **Single Output Dir** | Output directory for documents processed in *single* mode. |
| **Bursting Directory** | Output directory for documents produced by *bursting* mode (one file per invoice). |
| **Errors Directory** | Where a file that fails processing is moved. During a directory run, moving the failed file aside stops a repeated scan from retrying the same file endlessly. Leave it blank to keep the file in place (the previous behaviour). |

---

## Tab 2 — Processing

### XSL Paths

| Field | Description |
|---|---|
| **XDO Config** | Path to the BI Publisher `xdo.cfg` configuration file used during PDF generation. |

### Options

| Field | Values | Description |
|---|---|---|
| **Update DB** | `Y` / `N` | When `Y`, processing runs persist their results to the database. Set to `N` only for dry runs / debugging. |
| **Max threads** | *(blank = all cores)* | Caps how many invoices are processed at once. An XML-spool template can process its whole input folder in a single **parallel** pass — much faster on a folder of thousands of single-invoice files, and used the same way by a scheduled scan, an on-demand run and the command-line batch. Each file stays its own unit (name, source archive and traceability kept) and one file's failure doesn't stop the others. Set a value to keep headroom for other services on a shared host; leave it blank to use every available core. UBL templates and per-job (BIP) processing are unaffected. It also bounds the bulk reprocess, which runs one batch per template. |
| **`debugProfile`** | `Y` / `N` | When `Y`, every processing run writes **per-step timing rows** to `F564237` covering each pipeline stage: header parsing, lines parsing, validation, UBL emit, PA send. The rows surface on the [Tech Dashboard](../../application/tech-dashboard.md) — the *Live process events* tail flags them with their step name, and the *Template processing time* widget breaks the average down by stage. Leave at `N` in production; flip to `Y` for the duration of a batch run when triaging a slow pipeline. Disable once the slow stage is identified — the extra rows inflate `F564237` quickly under load. |

:::info[Advanced]
The **Ghostscript** group is folded under *Advanced* at the bottom of the tab.
:::

### Ghostscript

| Field | Description |
|---|---|
| **GS Command** | Full Ghostscript command line used for PDF post-processing (e.g. `gs -dBATCH ...`). Multi-line values are accepted. |

---

## Tab 3 — Logs

### Server log

| Field | Default | Description |
|---|---|---|
| **Server log file** | *(blank = automatic)* | File read by the [Server log](../../application/diagnostics/server-log.md) view. Blank = the file the launcher redirects the server output to (`nomaubl-<env>.log`); set it when the server runs under another launcher. |
| **Log size cap (MB)** | `100` | Above this size the live log is copied to `.1` and truncated in place, the older copies being shifted. The launcher keeps writing to the same file. `0` = never rotate. |
| **Log files kept** | `5` | Rotated copies kept next to the log. |
| **Log repeat window (s)** | `600` | A WARN or ERROR line identical to one written within this window is counted, not written; one summary line follows with the count. `0` = off. |
| **Log levels** | *(blank = everything)* | Minimum level per module — `DEBUG`, `INFO`, `WARN`, `ERROR` — as `MODULE=LEVEL` pairs separated by commas; `*` stands for all other modules (e.g. `STATUS=WARN, API=INFO, *=INFO`). |

The rotation, the repeat suppression and the levels apply in server mode only; a command-line run writes to its own output. For a PA code missing from the status catalogue or an invoice unknown to NomaUBL, the status poll writes no warning per event: the run ends with one line per code, with its count and a sample invoice, and the unmapped codes are listed by the configuration check of the [Tech dashboard](../../application/tech-dashboard.md).

---

## Tab 4 — PDF

### PDF

| Field | Description |
|---|---|
| **Logo path** | Path to the company logo drawn at the top of the supplier block when a PDF template has *Show logo* on (see [PDF Templates](../../management/pdf-templates.md)). Accepts the path variables `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`, `%KCO%`, `%DOC%`, `%DCT%` and any `{{token}}` from the invoice catalogue — e.g. `%APP_HOME%/logos/{{kco}}.png`, so each company resolves to its own logo. A `{ }` button opens a searchable token list. PNG, JPG and GIF are supported. |
| **Logo offset X (pt)** | Horizontal shift of the logo, in points, to absorb whitespace baked into the source image. Default `0`. |
| **Logo width (pt)** / **Logo height (pt)** | Box the logo is scaled to fit, in points: ratio kept, enlarged when the image is smaller; one dimension alone lets the other follow the image. Blank = the previous cap of 200 × 80 points, without enlarging. The visual builder preview uses the same size as the produced PDF. |

---

## Tab 5 — Email

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

## Tab 6 — AI

Settings of the in-app [AI assistant](../../application/ai-capabilities.md).

### Anthropic AI

| Field | Description |
|---|---|
| **API Key** | Anthropic API key. Without a valid key, the assistant panel is disabled. |
| **Model** | Model used unless the panel picks another one. Default *Sonnet 5.5*; Opus, Fable and Haiku are also offered. |
| **Max output tokens** | Length cap of one answer, from `1024` to `32000` (default `8192`). |

### Documentation

| Field | Description |
|---|---|
| **Source** | `llms` *(default)*: the documentation file is downloaded and searched on this server. `sitemap`: the model fetches the pages itself (previous behaviour). |
| **llms-full.txt URL** | English pages (default `https://docs.nomana-it.fr/llms-full.txt`). Refreshed every 6 hours; a URL, a local path or a `file:` URL. If it cannot be reached at start, the copy bundled in the application is used. |
| **llms-full.fr.txt URL** | French pages, used when the interface is in French. Empty = English pages for every language. |
| **Section** | Part of the file to index (its `# === … ===` header, e.g. `NomaUBL`). Blank = the whole file. |

### Playbooks

| Field | Description |
|---|---|
| **Custom playbooks** | Diagnostic procedures the assistant loads on demand, one per `## name` heading. A built-in name — `refused-invoice`, `missing-invoice`, `ereporting-error`, `status-not-updated` — replaces the built-in procedure. |

### Assistant behaviour

| Field | Description |
|---|---|
| **System Prompt** | Optional prompt prepended to every chat. Empty = the built-in NomaUBL prompt. |
| **Allowed Doc Domains** / **Docs Sitemap URL** / **Docs Path Prefix** | *Sitemap* mode only: domains the model may fetch, sitemap address (cached 6 hours), prefix of the entries kept. |
| **Custom Tools** | Read-only tools on this instance's data offered to the model (invoices, errors, history, dashboards, server log, settings with secrets masked). |

The **TLS / corporate proxy** group (custom truststore path and password, *Disable TLS validation* for a short diagnosis only) is folded under *Advanced*.

---

## Tab 7 — Job defaults

Settings shared by the background jobs. The jobs themselves — intervals, daily times, batch document jobs, digests, auto-retries and lifecycle checks — are managed on **Synchronization → [Scheduled jobs](../../sync/scheduled-jobs/overview.md)**; saving there reloads the schedules at once.

### Quiet window

| Field | Description |
|---|---|
| **Quiet window from / to (HH:mm)** | A daily window during which both PA pollers (import poll and status retrieval) skip their runs automatically — set it over a send campaign so per-invoice import polls don't pile up while the PA is integrating the batch. May cross midnight; leave both empty to disable. It applies without a restart and shows on the Tech Dashboard's *Scheduler* card, highlighted while active. |

### Bulk Send

Defaults for every bulk send to the PA — *Send all waiting* and *Resend all* on the [Tech Dashboard](../../application/tech-dashboard.md), the [invoice-list bulk resend](../../application/invoices.md#bulk-resend), and the `-send-waiting` CLI. Each nightly [Auto-Retry](../../sync/scheduled-jobs/auto-retry.md) routine can override them on its own row.

| Field | Description |
|---|---|
| **Parallel workers** | *(default `4`)* How many invoices are sent to the PA at the same time. Set `1` for sequential sending. |
| **Delay per worker (ms)** | *(default `100`)* Pause each worker waits between two calls, to stay inside the PA's rate budget. |

### Retention \{#retention\}

Database rows kept per store by the daily **Retention purge** job. Off by default: nothing is deleted until a number of days is set, except the notifications, which keep their 90 days, so an upgrade deletes nothing by itself. The server log file is bounded separately (Tab 3).

| Field | Default | Description |
|---|---|---|
| **Processing log (days)** | `0` | Per-file START / END / error rows of the runtime log (`F564237`). Empty or `0` = keep forever; suggested `180`. |
| **Step timings (days)** | `0` | Per-step timing rows written by `debugProfile` (`F564237`). Suggested `30`. |
| **Job runs (days)** | `0` | Run rows of the scheduled jobs (`F564237`). Suggested `90`. |
| **Validation errors of finished invoices (days)** | `0` | Errors (`F564236`) of invoices in a terminal status (completed, deposited, refused…). Suggested `365`. |
| **Notifications (days)** | `90` | Inbox notifications (`F564253`). Empty = 90 days; `0` = keep forever. |

Before setting a value, the **Count only** button of the Retention purge job (or `java -jar nomaubl.jar -purge <configFile> --dry-run`) reports what each store would lose with the saved values.

### BIP print queue

| Field | Description |
|---|---|
| **BIP job hosts** | One high-water mark **per JDE execution host** (`RJRPDEXHST`). The mark tracks each host by **job completion time**, not by job number — a job number is assigned at submission, so a long-running job that finishes after a shorter, higher-numbered one could otherwise fall below the mark and never be fetched. The completion date is shown next to the job number for each host, and is **editable**. Add each host with its starting number (the first batch after an upgrade fills the date automatically), or click *Retrieve last job # per host* to seed them all from the current maximum; from then on they advance after each job, so an interrupted batch resumes exactly where it stopped. **Only listed hosts are scanned.** *(BIP / JDE-specific.)* |
| **BIP Lookback (days)** | Date floor on the BIP scan. `0` = no floor — every job after the watermark is eligible. `N > 0` = only jobs updated in the last N days. Handy on a first install or after a long gap, to skip years of history rather than walking the whole queue. Applies to the manual scan, the scheduled batch and the `nomaubl -fetch-all` command. *(BIP / JDE-specific.)* |

---

## Tab 8 — License

### License

| Field | Description |
|---|---|
| **License Key** | Full NomaUBL license key. **Without a valid key, the *Navigation*, *Synchronisation* and *UBL* menus are disabled** — only Configuration remains accessible. |

---

## Tab 9 — Authentication

### Authentication

| Field | Description |
|---|---|
| **Enable Authentication** | `Y` / `N` — turn on password-based user login. When `N`, NomaUBL runs without a login wall (typically dev / on-prem behind a corporate VPN). |
| **Auth Mode** | `internal` / `oidc` / `both` — drives the login screen. `internal` *(default)* keeps the local username + password form. `oidc` switches to a single-sign-on button only. `both` shows the SSO button above the local form, so operators with a database account can still sign in if the IdP is unavailable. Pair with the [OIDC template](./oidc.md) to configure the SSO side. |
| **Session Timeout (minutes)** | How long an authenticated user session remains valid. Default `480` (8 hours). |

:::info[Self-service password reset]
With **Auth Mode = `internal`** (or `both`), the login screen exposes a *Forgot password?* link. The user is prompted for both username and email; if they match an active account, a one-shot link valid 60 minutes is sent to the email on file. The link lands on a dedicated page that lets the user choose a new password.

Requires **SMTP** configured under *Tab 5 — Email*. Tokens are persisted in `F564255` (see [Database tables](../../references/database-tables.md#f564255--password-reset-tokens)) and expire after a single use.
:::

---

## Tips & best practices

- **Set Environment and Theme colour.** The `%ENV%` placeholder lets one configuration roll forward from `demo` to `PD` without editing every path, and a distinct colour per environment avoids working on production by mistake.
- **Bound the server log before going live.** The defaults (100 MB, 5 copies) suit most servers; add `STATUS=WARN` to the levels when the status poll is verbose.
- **Turn the retention on once the volumes are known.** Start with the suggested values, run *Count only*, then enable the purge job.
- **License gates the runtime.** If the Navigation, Synchronization and UBL menus disappear, check the License Key first.
- **Point the assistant at the French pages** for French-speaking users: fill *llms-full.fr.txt URL*.
