---
title: App settings
description: "Liberty Next → Administer → App: every setting of the install, section by section — App (name, address, sub-path, language, UI defaults, hot reload, Oracle thick mode), Server log, Sign-in, Nomaflow, Change packages, License, AI Assistant, Notifications (email), OpenID Connect (SSO), PDF branding, and the read-only Deployment values — what each field does, which secrets are encrypted, and what needs a restart."
keywords: [Liberty Next, App settings, server log, sign-in, tokens, login throttle, nomaflow, change packages, sub-path, base path, license, AI assistant, notifications, SMTP, OpenID Connect, SSO, PDF branding, default period, page size, Oracle thick]
---

# App settings

**Liberty Next → Administer → App** holds every setting of the install: nothing needs to be edited in a file. The sections are a list on the left, in four groups that follow the order an installation is set up — **The installation** (Server, Display, External addresses, PDF branding, License), **Signing in** (Sign-in, OpenID Connect), **What is switched on** (AI Assistant, Notifications, nomaflow, Change packages), **Running it** (Server log, and the read-only Deployment). One section is open at a time, beside the list, with its fields on one grid — each label above its field, the explanation on a line under it — and the page remembers which. Each line of the list shows the section's state (*configured*, *not set — restricted mode*, *no API key*, *disabled*, *restart after a change*…). **Save** and **Discard** are in the page header, beside **Reload config**; Save validates and applies the whole page at once.

Secret fields — the licence key, the Anthropic API key, the SMTP password, the OIDC client secret and session secret — are masked inputs with an eye; they are encrypted with the master key when saved ([Encryption](../configuration/encryption-secrets.md)).

---

## At a glance

<svg viewBox="0 0 1320 584" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="544" rx="14" fill="url(#sapp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">App</text>
  <rect x="985" y="28" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <rect x="938" y="28" width="41" height="22" rx="5" fill="url(#sapp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="958.5" y="42.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="865" y="28" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="898.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Discard</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="236" y="78" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The installation's settings (app.toml). Secrets are encrypted in the file; a restart is asked for when one is needed.</text>
  <text x="246" y="104" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">The installation</text>
  <rect x="242" y="112" width="238" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <circle cx="256" cy="125" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="123" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Server</text>
  <text x="268" y="133" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">ACME ERP · :8000 · info</text>
  <rect x="242" y="142" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="155" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="153" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Display</text>
  <text x="268" y="163" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">en · This month · 50</text>
  <rect x="242" y="172" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="185" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="183" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">External addresses</text>
  <text x="268" y="193" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">JDE_WEB</text>
  <rect x="242" y="202" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="215" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="213" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">PDF branding</text>
  <text x="268" y="223" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">framework defaults</text>
  <rect x="242" y="232" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="245" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="243" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">License</text>
  <text x="268" y="253" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">configured</text>
  <text x="246" y="278" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Signing in</text>
  <rect x="242" y="286" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="299" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="297" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Sign-in</text>
  <text x="268" y="307" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">File (auth.toml) · restart after a change</text>
  <rect x="242" y="316" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="329" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">OpenID Connect (SSO)</text>
  <text x="268" y="337" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="246" y="362" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">What is switched on</text>
  <rect x="242" y="370" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="383" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="381" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <text x="268" y="391" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">claude-sonnet-4-5</text>
  <rect x="242" y="400" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="413" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="411" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications (email)</text>
  <text x="268" y="421" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">no SMTP — portal only</text>
  <rect x="242" y="430" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="443" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="441" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">nomaflow</text>
  <text x="268" y="451" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">default · restart after a change</text>
  <rect x="242" y="460" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="473" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="471" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Change packages</text>
  <text x="268" y="481" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">default · restart after a change</text>
  <text x="246" y="506" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Running it</text>
  <rect x="242" y="514" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="527" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="525" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="268" y="535" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">text · 10 MB × 5 · restart after a change</text>
  <rect x="236" y="86" width="250" height="464" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="106" fill="#e2e8f0" fontSize="9.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVER</text>
  <text x="1070" y="106" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">ACME ERP · :8000 · info</text>
  <line x1="498" y1="118" x2="1084" y2="118" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APP NAME</text>
  <rect x="512" y="142" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="156.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME ERP</text>
  <text x="798.0" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONMENT</text>
  <rect x="798.0" y="142" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="156.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">production</text>
  <text x="798.0" y="176" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">production, test… — named in the licence usage report</text>
  <text x="512" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BIND HOST</text>
  <rect x="512" y="198" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="212.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">0.0.0.0</text>
  <text x="798.0" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="798.0" y="198" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="212.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">8000</text>
  <text x="512" y="238" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOG LEVEL</text>
  <rect x="512" y="244" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="258.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">info</text>
  <text x="772.0" y="258.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="512" y="275" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M514.5,280.5 L516.8,282.8 L520.8,278" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="529" y="284" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Hot-reload config TOML files on change</text>
  <rect x="512" y="295" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="529" y="304" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle thick mode (python-oracledb OCI — required for Native Network Encryption / NNE)</text>
  <text x="512" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUB-PATH BEHIND A REVERSE PROXY</text>
  <rect x="512" y="330" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="344.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">/liberty</text>
  <text x="512" y="364" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">e.g. /liberty; blank = the site root — restart</text>
  <text x="798.0" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PUBLIC ADDRESS</text>
  <rect x="798.0" y="330" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="344.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">https://erp.example.com</text>
  <text x="798.0" y="364" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">password-reset links, MCP sign-in; blank = the browser's</text>
  <rect x="498" y="86" width="586" height="298" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four groups</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the order of a setup</text>
  <line x1="200" y1="127.0" x2="242" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per section</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with its state</text>
  <line x1="200" y1="267.0" x2="242" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="20" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Restart needed</text>
  <text x="30" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">said on the line</text>
  <line x1="200" y1="437.0" x2="242" y2="527" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save, Discard</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the page header</text>
  <line x1="1120" y1="47.0" x2="968" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The picked section</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one grid, label above</text>
  <line x1="1120" y1="167.0" x2="1084" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Help under the field</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the former parentheses</text>
  <line x1="1120" y1="347.0" x2="1070.0" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
</svg>

---

## Server \{#app\}

| Field | Notes |
|---|---|
| **App name** | The application's name. |
| **Environment** | What the installation is — `production`, `test`… It is named in the [licence usage report](./secure/license-key.md#usage-report). |
| **Public address** | The address users reach the server at: what a password-reset mail links to, and what the sign-in of a Claude client ([MCP](../mcp.md#connect)) is published on. Blank = the browser's address. Set it behind a reverse proxy. |
| **Bind host**, **Port** | Listening address and port. **Restart needed.** |
| **Sub-path behind a reverse proxy** | `/liberty` to serve the application under that path behind a reverse proxy; blank = the site root. The page, the API, the downloads, the live connection and the single sign-on callback follow it — see [Serving under a sub-path](../../installation/traefik.md#sub-path). **Restart needed.** |
| **Log level** | `debug`, `info`, `warning`, `error`, `critical`. **Restart needed.** |
| **Hot-reload config TOML files on change** | Apply configuration files as soon as they change — see [Hot reload](../configuration/hot-reload.md). |
| **Oracle thick mode (…)** | Oracle Instant Client for every Oracle pool — needed for Native Network Encryption and LOBs over a database link. Takes effect after a restart. See [Connectors](../connectors.md#oracle-thick). |

## Display \{#display\}

| Field | Notes |
|---|---|
| **Default language** | Labels when a request names no language. |
| **Default period (dashboards)** | The preset a dashboard opens on when it names none — see [Dashboards](../dashboards.md#period). |
| **Grid page size** | The grids' initial page size (10 to 10 000, default 50). A saved view's own size wins. |
| **Dashboard cache (seconds, 0 = none)** | How long a reopened dashboard reuses its widgets' results (default 60). |
| **Several tabs at once (off: one page at a time)** | On by default. Off: opening a page replaces the current one. |
| **Close the tabs when switching application** | Off by default. On: picking another application in the switcher closes the tabs of the other applications; the tabs of the Liberty Next pages, of Monitoring and of the runs stay. |
| **Tabs at most** | 5 by default (1 to 50). When the limit is reached, opening a page closes the oldest tab. |
| **Drill-downs open inside the current tab (…)** | Off by default. On: a row's drill-down opens as a panel inside the current tab, with a breadcrumb and **Back**, unless the action itself decides — see [Actions](./screens/actions-and-lifecycle.md#drill). |

## External addresses \{#external-urls\}

The systems this install links to — the JD Edwards web client, an intranet. One line per address: a **name** in capitals (`JDE_WEB`) and its **URL** (`https://jde.example.com:8080/jde`); **Add an address** adds one. An *Open in* action or a link menu item writes `#URL.JDE_WEB#` at the start of its address instead of the address itself: the screens and menus shipped with an application then carry no customer address, and each install sets its own. A change applies at once. An address the install does not set gives no link: the action opens nothing.

When a saved change needs a restart, the page says *Saved. Restart the server to apply the new settings.*

---

## Server log \{#server-log\}

| Field | Notes |
|---|---|
| **Console log format** | `text`, a readable line (default), or `json`, one object per line for a log shipper. |
| **Keep the server log on disk** | On by default: the log searched in [Monitoring → Server log](../../monitoring/server-log.md). |
| **Log file** | Blank = `.logs/liberty.log` in the configuration folder. |
| **Size per file (MB)**, **Files kept** | The rotation: 10 MB and 5 previous files by default. |

**Restart needed** for every field of the section.

---

## Sign-in \{#sign-in\}

| Field | Notes |
|---|---|
| **Accounts store** | *File (auth.toml)* (default) or *Database*, with its **Database pool**. Switching does not move the accounts from one store to the other. |
| **Token issuer** | The name written in the session tokens (`liberty-next`). |
| **Session (access token) lifetime (s)** | 3600 by default: how long a session stays valid before it is renewed. |
| **Sign-in (refresh token) lifetime (s)** | 1,209,600 by default — 14 days: how long a user stays signed in. |
| **Refresh reuse grace (s)** | 60 by default: a renewal already used is still accepted for that time — two tabs renewing together; `0` = strict single use. |
| **Failed sign-ins before a pause**, **Counting window (s)** | 10 failures within 300 seconds pause the sign-ins of that account — see [Sign-in](./secure/sign-in.md#throttle). |

**Restart needed** for every field of the section.

---

## Nomaflow \{#nomaflow\}

| Field | Notes |
|---|---|
| **Scheduler and runner on** | On by default. Off: the jobs are listed but neither scheduled nor run. |
| **Run history pool** | The database of the run history (`default`). |
| **Run log lines kept per run** | 5,000 by default. |
| **Work area** | Blank = `.nomaflow/files` next to the configuration: uploads, rejects, reports, exports. |
| **Largest upload (MB)** | 200 by default. |

**Restart needed** for every field of the section.

---

## Change packages \{#changesets\}

| Field | Notes |
|---|---|
| **Capture tracked writes into change packages** | On by default. Off: the screens marked for tracking capture nothing. See [Change packages](../../nomaflow/change-packages.md). |
| **Database pool** | Where the change packages are kept (`default`). |
| **Keep exported / promoted packages (days, 0 = always)** | 0 by default; see [Monitoring → Retention](../../monitoring/retention.md). |

**Restart needed** for every field of the section.

---

## License \{#license\}

**License key**: paste the key delivered by Nomana-IT. The licensed connectors load at once, without a restart. See [Licence key](./secure/license-key.md).

**Usage report address (blank = nothing is sent)**: where a licensed installation reports once a day — its environment, its version and its number of enabled accounts. See [Usage report](./secure/license-key.md#usage-report).

---

## AI Assistant \{#ai\}

| Field | Notes |
|---|---|
| **Enabled** | The assistant answers; users need the `ai:chat` permission. |
| **Anthropic API key** | Without it, the assistant says it is not configured. |
| **Model**, **Effort**, **Max tokens**, **Adaptive thinking** | The model and how much it reasons and writes. |
| **Max tool iterations** | Tool rounds one question may use (default 15). A procedure that writes several records through its screens needs more rounds than a question. |
| **Request timeout (s)** | Default 120. |
| **System prompt** | Empty: the built-in instructions. |
| **Connector tools** | The assistant may list connectors and run their **read** queries. |
| **Rows per query, at most (the assistant's own cap, not the pool's)** | 200 by default (1 to 10,000). Beyond it, a result is marked as truncated and the assistant is told not to count or add up its rows. |
| **Data Explorer tools** | On by default: the assistant computes totals, rankings and trends on the [Data Explorer](../explorer/overview.md) models, and saves analyses and dashboards. |
| **API tool** | The assistant may call API endpoints — off by default, since an endpoint may change data. |
| **Scaffold tools** | The assistant may propose queries, dictionary entries, screens and menu items; the user applies the proposal. |
| **Write tools** | Off by default. The assistant adds, changes or deletes a record — or several on one card —, runs an action through its screen, or runs a job — for users holding `ai:write` and the screen's or the job's own permissions; applied from a card in the drawer. Over MCP they also need **Allow changes over MCP**. See [Write through a screen](../ai-assistant.md#write). |
| **Hide sensitive data from the assistant** | Off by default. The columns whose dictionary item or screen column is flagged **Sensitive** are not given to the assistant, in the drawer and over MCP. It does not cover what a user types or attaches, an unflagged free-text column, nor what an API endpoint or an application's own tool returns. See [Sensitive data](../ai-data-sent.md#sensitive). |
| **Allowed connectors** | The connectors the assistant may use; empty means all. |
| **Allowed domains**, **Max fetches per turn** | Web pages the assistant may read; no domain means no web access. |
| **Operations tools** | The assistant may read the jobs' status, the server log tail and the integrity checks — off by default, for installations whose chat users are administrators. |
| **The applications' tools** | On by default: the tools each application ships under [Liberty Next → Logic → AI](../ai-assistant.md#settings-ai). Off: none is offered. |
| **File attached to a question: megabytes at most** | 10 by default (0 to 30); `0` removes the paperclip of the drawer — see [Attach a file](../ai-assistant.md#attach). |
| **Usage record kept (days; 0 = without limit)** | 90 by default — see [AI usage](../../monitoring/ai-usage.md#retention). |
| **MCP endpoint (/mcp)** | Off by default: the same tools for an external client — Claude Desktop, claude.ai, Claude Code —, each user with a personal access token. Applied without a restart. See [Connect Claude (MCP)](../mcp.md). |
| **Allow changes over MCP** | Off by default: an external client reads only. On: a tool that saves — a record through its screen, an action, a job, a saved analysis or dashboard — is offered to it; in the drawer the user applies a card, here the only gate is the client's own approval. See [Changes over MCP](../mcp.md#changes). |
| **Personal access token: longest life (days)** | 366 by default: the longest validity of a token, and how long a sign-in from a Claude client lasts before the user allows it again. |
| **Models users may pick** | The models offered in the drawer's **Model** picker besides the one above; empty → the model above only, and no picker. |
| **Starter questions** | Questions shown on an empty conversation: everywhere (`*`), per application, or per *application/screen* — the most specific set wins. They take precedence over the questions an application ships ([Liberty Next → Logic → AI](../ai-assistant.md#settings-ai)). |

See [AI assistant](../ai-assistant.md), and [Data sent to Anthropic](../ai-data-sent.md) for what these settings let out of the installation.

---

## Notifications (email) \{#notifications\}

**Notifications enabled**, then the **Server** (SMTP host, Port, Encryption — STARTTLS, implicit TLS or none —, Timeout), the **Account** (User, Password) and **Sending** (From address, Keep read notifications — days, `0` = forever). **Inbox database pool** sets where the notifications of the bell are kept (`default`). See [Notifications](../../nomaflow/notifications.md#smtp).

---

## OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

| Field | Notes |
|---|---|
| **Enabled** | Makes **Sign in with OIDC**, always on the sign-in page, lead to the provider; off, the button answers 404. |
| **Discovery URL** | The provider's `.well-known/openid-configuration`. |
| **Client ID**, **Client secret**, **Scopes** | As registered at the provider (`openid email profile` by default). |
| **Username claim**, **Email claim**, **Name claim** | Which ID-token claims fill the user (`preferred_username`, `email`, `name`). |
| **Redirect URL override (proxy)**, **Frontend redirect** | Only behind a proxy that rewrites the host, or for a front-end that handles the tokens itself. |
| **Attributes from claims** | One line per attribute: the user attribute ← the ID-token claim (`company` ← `org_id`). The attributes feed the roles' [data scope](./secure/roles-and-permissions.md#data-scope) and are refreshed at every sign-in; a claim missing from the token removes the attribute. |
| **Session secret** | Signs the sign-in cookie; blank = the JWT secret. Encrypted. **Restart needed.** |

Register `https://<host>/auth/oidc/callback` as redirect URI at the provider. See [Sign-in](./secure/sign-in.md#oidc).

---

## PDF branding \{#branding\}

The cover and page settings of the PDF reports: author, primary colours, cover texts, footer. Empty fields keep the framework's defaults.

---

## Deployment (read-only) \{#deployment\}

The last section, shown only when the installation sets values outside this page, lists them — the value in force and why: the master key and the JWT secret, only *set* or *not set*, which come from the environment; the token signing algorithm; the location of each configuration file, which follows the install's layout.

---

## Not on this page \{#elsewhere\}

| Setting | Where |
|---|---|
| Pools and their passwords | Liberty Next → Administer → Pools. |
| Users and roles | Liberty Next → Administer → Access. |
| The master key and the JWT secret | The environment — see [Environment variables](../configuration/environment-variables.md). |
