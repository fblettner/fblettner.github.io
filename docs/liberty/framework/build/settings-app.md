---
title: App settings
description: "Liberty Next → Administer → App: every setting of the install, section by section — App (name, address, sub-path, language, UI defaults, hot reload, Oracle thick mode), Server log, Sign-in, Nomaflow, Change packages, License, AI Assistant, Notifications (email), OpenID Connect (SSO), PDF branding, and the read-only Deployment values — what each field does, which secrets are encrypted, and what needs a restart."
keywords: [Liberty Next, Settings App, server log, sign-in, tokens, login throttle, nomaflow, change packages, sub-path, base path, license, AI assistant, notifications, SMTP, OpenID Connect, SSO, PDF branding, default period, page size, Oracle thick]
---

# App settings

**Liberty Next → Administer → App** holds every setting of the install: nothing needs to be edited in a file. The sections are listed in alphabetical order, the read-only *Deployment* last; each folds and its header shows a summary (*configured*, *not set — restricted mode*, *no API key*, *disabled*, *restart after a change*…). **Save** validates and applies the whole page at once.

Secret fields — the licence key, the Anthropic API key, the SMTP password, the OIDC client secret and session secret — are masked inputs with an eye; they are encrypted with the master key when saved ([Encryption](../configuration/encryption-secrets.md)).

---

## At a glance

<svg viewBox="0 0 1200 530" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sap-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sap-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sap-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sap-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="506" rx="14" fill="url(#sap-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · App</text>
  <rect x="880" y="28" width="80" height="22" rx="5" fill="url(#sap-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="720" height="26" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="91" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  App</text>
  <rect x="840" y="78" width="78" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="90.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="260" y="125" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="450" y="110" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="124.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="260" y="155" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Host · Port</text>
  <rect x="450" y="140" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="154.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0.0.0.0 · 8000</text>
  <text x="260" y="185" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Log level</text>
  <rect x="450" y="170" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="184.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">info ▾</text>
  <text x="260" y="215" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default language</text>
  <rect x="450" y="200" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="214.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">fr ▾</text>
  <text x="260" y="245" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default period (dashboards)</text>
  <rect x="450" y="230" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="244.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">This month ▾</text>
  <text x="260" y="275" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Grid page size</text>
  <rect x="450" y="260" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="274.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50</text>
  <text x="260" y="305" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Dashboard cache (seconds)</text>
  <rect x="450" y="290" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="304.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">60</text>
  <rect x="260" y="323" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M262.5,328.5 L264.8,330.8 L268.8,326" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="277" y="332" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Hot reload</text>
  <rect x="420" y="323" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="437" y="332" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Oracle thick mode</text>
  <rect x="240" y="350" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="366" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  License</text>
  <rect x="862" y="353" width="68" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.0" y="365.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">configured</text>
  <rect x="240" y="380" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="396" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  AI Assistant</text>
  <rect x="862" y="383" width="68" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="896.0" y="395.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">no API key</text>
  <rect x="240" y="410" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="426" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Notifications (email)</text>
  <rect x="832" y="413" width="98" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="881.0" y="425.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">smtp.example.com</text>
  <rect x="240" y="440" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="456" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  OpenID Connect (SSO)</text>
  <rect x="872" y="443" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="901.0" y="455.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">disabled</text>
  <rect x="240" y="470" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="486" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  PDF branding</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six sections</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each folds, with a summary</text>
  <line x1="210" y1="91.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">App section</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name, address, language…</text>
  <line x1="210" y1="217.0" x2="260" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One Save</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">most changes apply at once</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status chips</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">licence, AI key, SMTP, SSO</text>
  <line x1="1000" y1="347.0" x2="940" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
</svg>

---

## Server \{#app\}

| Field | Notes |
|---|---|
| **App name** | The application's name. |
| **Bind host**, **Port** | Listening address and port. **Restart needed.** |
| **Sub-path behind a reverse proxy** | `/liberty` to serve the application under that path behind a reverse proxy; blank = the site root. The page, the API, the downloads, the live connection and the single sign-on callback follow it. **Restart needed.** |
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
| **Close the tabs when switching application** | Off by default. On: picking another application in the switcher closes the tabs of the other applications; the Settings, Monitoring and run tabs stay. |
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

---

## AI Assistant \{#ai\}

| Field | Notes |
|---|---|
| **Enabled** | The assistant answers; users need the `ai:chat` permission. |
| **Anthropic API key** | Without it, the assistant says it is not configured. |
| **Model**, **Effort**, **Max tokens**, **Adaptive thinking** | The model and how much it reasons and writes. |
| **Max tool iterations** | Tool calls per answer, at most (default 8). |
| **Request timeout (s)** | Default 120. |
| **System prompt** | Empty: the built-in instructions. |
| **Connector tools** | The assistant may list connectors and run their **read** queries. |
| **Data Explorer tools** | On by default: the assistant computes totals, rankings and trends on the [Data Explorer](../explorer/overview.md) models, and saves analyses and dashboards. |
| **API tool** | The assistant may call API endpoints — off by default, since an endpoint may change data. |
| **Scaffold tools** | The assistant may propose queries, dictionary entries, screens and menu items; the user applies the proposal. |
| **Allowed connectors** | The connectors the assistant may use; empty means all. |
| **Allowed domains**, **Max fetches per turn** | Web pages the assistant may read; no domain means no web access. |
| **Operations tools** | The assistant may read the jobs' status, the server log tail and the integrity checks — off by default, for installations whose chat users are administrators. |
| **Models users may pick** | The models offered in the drawer's **Model** picker besides the one above; empty → the model above only, and no picker. |
| **Starter questions** | Questions shown on an empty conversation: everywhere (`*`), per application, or per *application/screen* — the most specific set wins. They take precedence over the questions an application ships ([Liberty Next → Build → AI](../ai-assistant.md#settings-ai)). |

See [AI assistant](../ai-assistant.md).

---

## Notifications (email) \{#notifications\}

**Notifications enabled**, then the **Server** (SMTP host, Port, Encryption — STARTTLS, implicit TLS or none —, Timeout), the **Account** (User, Password) and **Sending** (From address, Keep read notifications — days, `0` = forever). **Inbox database pool** sets where the notifications of the bell are kept (`default`). See [Notifications](../../nomaflow/notifications.md#smtp).

---

## OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

| Field | Notes |
|---|---|
| **Enabled** | Shows the OIDC button on the sign-in page. |
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

The last section lists the values set by the installation, not from this page — the value in force and why: the master key and the JWT secret, only *set* or *not set*, which come from the environment; the token signing algorithm; the location of each configuration file, which follows the install's layout.

---

## Not on this page \{#elsewhere\}

| Setting | Where |
|---|---|
| Pools and their passwords | Liberty Next → Administer → Pools. |
| Users and roles | Liberty Next → Administer → Access. |
| The master key and the JWT secret | The environment — see [Environment variables](../configuration/environment-variables.md). |
