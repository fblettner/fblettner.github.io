---
title: AI assistant
description: "The Liberty Next AI assistant: the drawer opened from the AI Assistant button, the page context it receives, starter questions and follow-ups, the model picker, what it can do (read the connectors' queries, describe the installation, follow playbooks, read the jobs and the server log, call API endpoints, propose configuration), how it is restricted (ai:chat, allowed connectors, read-only queries, data scope), and its settings."
keywords: [Liberty Next, AI assistant, Anthropic, Claude, ai:chat, page context, starter questions, playbooks, operations tools, model picker, tools, list_connectors, sql_query, api_call, scaffold, data scope]
---

# AI assistant

**AI Assistant**, at the right of the top bar, opens a drawer where users ask questions about their data in plain language. The assistant answers by running the connectors' queries, with the user's rights.

---

## At a glance

<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aid-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aid-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aid-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aid-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="492" rx="14" fill="url(#aid-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#64748b" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Sales lines</text>
  <rect x="240" y="60" width="164" height="420" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="68" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="82" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="246" y="94" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="108" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="246" y="120" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="134" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <rect x="246" y="146" width="152" height="20" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="252" y="160" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="246" y="172" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="186" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Delta Ltd</text>
  <rect x="246" y="198" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="212" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="246" y="224" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="238" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="246" y="250" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="264" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <rect x="246" y="276" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="290" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Delta Ltd</text>
  <rect x="420" y="24" width="360" height="470" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="434" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">✦ AI Assistant</text>
  <rect x="590" y="32" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="600" y="46.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sonnet 5.5 ▾</text>
  <rect x="718" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="746" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="757.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <line x1="420" y1="62" x2="780" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="434" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Page:</text>
  <rect x="470" y="69" width="219" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="579.5" y="80.2" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Sales lines · filters: 2 · the clicked row  ×</text>
  <rect x="434" y="96" width="300" height="58" rx="8" fill="#1e293b"/>
  <text x="444" y="114" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Hello! I answer from this installation's</text>
  <text x="444" y="127" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">configuration and its data. Pick a</text>
  <text x="444" y="140" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">suggestion or ask your question.</text>
  <rect x="500" y="166" width="266" height="24" rx="8" fill="rgba(74,158,255,0.18)"/>
  <text x="510" y="182" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Sum the quantities of these rows by unit</text>
  <rect x="434" y="200" width="320" height="96" rx="8" fill="#1e293b"/>
  <text x="444" y="218" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▸ 2 tool calls</text>
  <rect x="444" y="226" width="300" height="18" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="238.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UNIT</text>
  <text x="594" y="238.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUANTITY</text>
  <rect x="444" y="248" width="300" height="18" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="260.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">North</text>
  <text x="594" y="260.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12,400</text>
  <rect x="444" y="270" width="300" height="18" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="282.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">South</text>
  <text x="594" y="282.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">8,150</text>
  <rect x="434" y="308" width="151" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="509.5" y="320.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Which company sold the most?</text>
  <rect x="434" y="332" width="127" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="497.5" y="344.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Compare with last month</text>
  <line x1="420" y1="368" x2="780" y2="368" stroke="#1f2937" strokeWidth="1"/>
  <rect x="434" y="378" width="41" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="454.5" y="390.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sales</text>
  <rect x="500" y="378" width="51" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="525.5" y="390.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Periods</text>
  <rect x="434" y="402" width="232" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="550.0" y="414.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Which business unit sold the most last month?</text>
  <rect x="434" y="432" width="332" height="48" rx="8" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="444" y="452" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Type a message…</text>
  <rect x="1000" y="12" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="27" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model picker</text>
  <text x="1010" y="40" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">when several are allowed</text>
  <line x1="1000" y1="29.0" x2="650" y2="32" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="66" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page context</text>
  <text x="1010" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× stops sending it</text>
  <line x1="1000" y1="83.0" x2="750" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tool calls</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folded into one line</text>
  <line x1="1000" y1="213.0" x2="520" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Follow-ups</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click sends the question</text>
  <line x1="1000" y1="317.0" x2="650" y2="317" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="384" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="399" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Starter questions</text>
  <text x="1010" y="412" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by heading, per app or screen</text>
  <line x1="1000" y1="401.0" x2="550" y2="387" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The clicked row</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">travels with the question</text>
  <line x1="210" y1="167.0" x2="246" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
</svg>

---

## Using it \{#use\}

Type a question and press Enter (Shift+Enter for a new line), or click one of the **starter questions** shown on an empty conversation. The answer arrives as it is written; **Stop** interrupts it and keeps what was received.

- **Tool calls** are folded into one muted line — *3 tool call(s)* — that opens to show them; a failed call keeps its message visible.
- A table in an answer scrolls sideways, each figure on one line.
- Each answer ends with two or three **follow-up questions** as chips; a click sends one.
- The conversation stays when the drawer is closed and after a reload: the last 40 messages, on this device. **+** (*new conversation*) clears it.
- When several models are allowed, a **Model** picker in the drawer's header chooses the one that answers. The choice is kept on this device.

The assistant knows today's date: *last month* or *this quarter* need no explanation.

Examples: *How many open orders per company this month?* — *Which users have not signed in since June?* — *Where do I close a period?*

---

## What the page tells it \{#context\}

While a data screen is the active tab, every message carries what the user is looking at: the application, the screen and its read query, the active filters, the number of rows loaded and their columns, and the row last clicked (or whose row menu was opened). *This screen*, *these rows* or *the selected row* need no further explanation, and the assistant runs the screen's own query when it needs more data.

A chip under the drawer's header shows what is sent — *Page: Sales lines · filters: 2 · the clicked row*. Its **×** stops sending the page for as long as the user stays on it. The context is limited to 4,000 characters.

---

## Starter questions \{#starters\}

On an empty conversation, the drawer offers questions suited to where the user is: those of the current screen, else those of the application, else those set for everywhere. An application can group them under headings, shown as pills above the questions; after an answer, the follow-ups take their place.

Questions come from two sources:

- **Settings → AI**: the questions an application ships, per application and per screen — see [below](#settings-ai);
- **Settings → App → AI Assistant → Starter questions**: the operator's own, for everywhere, an application or an *application/screen*. They win over the application's questions for the same place.

---

## What it can do \{#tools\}

| Tool | Does | Setting |
|---|---|---|
| `list_connectors` | Lists the connectors, their queries and endpoints (descriptions, no SQL, no credentials). | **Connector tools** (on by default). |
| `sql_query` | Runs a **read** query of a SQL connector. Write queries are always refused. | **Connector tools**. |
| `describe_instance` | Summarises what the installation holds: applications, menus, screens with their read query, dashboards, Data Explorer models, jobs, playbooks. *Where do I find…* is answered from the real configuration. | Always. |
| Playbooks | Lists the applications' procedures and loads the one that fits — see [Playbooks](#playbooks). | Always. |
| `jobs_status`, `server_log`, `integrity_checks` | The Nomaflow jobs with their schedule, last run and next start, and one job's recent runs with the failing step; the recent server log lines, by level and text; the configuration cross-checks. | **Operations tools** (off by default). |
| `api_call` | Calls an endpoint of an API connector. | **API tool** (off by default — an endpoint may change data). |
| Scaffold tools | Propose a query, a dictionary entry, a screen or a menu item; the user reviews the proposal and applies it. | **Scaffold tools** (off by default). |
| Web fetch | Reads pages of the allowed domains. | **Allowed domains** (none by default). |

The assistant only uses existing named queries: it does not write SQL against the database. A tool result above 60,000 characters is cut, and the assistant is asked to narrow its call.

The **Operations tools** let the assistant read the running server rather than guess when a job failed, is late or is missing. They are meant for installations whose chat users are administrators: the server log can hold anything the server wrote.

---

## Playbooks \{#playbooks\}

A **playbook** is a step-by-step procedure an application ships for the assistant: *Close a period*, *Add a user to a role*. When a user asks how to do something in an application, the assistant looks for a playbook that fits, loads it and follows its steps in order, saying which one it follows. Without a suitable playbook, it says so and answers from what it can read.

---

## Settings → AI \{#settings-ai\}

**Settings → AI** edits what each application ships for the assistant. **Add an app** picks an application; for each one:

| Part | Content |
|---|---|
| **Starter questions anywhere in** *app* | The questions offered everywhere in the application. |
| **Starter questions per screen** | **+ a screen…** adds a screen and its own questions. |
| **Playbooks** | **Add playbook**: an **Id** (letters, digits, `_` and `-`, unique in the application), a **Title** — what the procedure achieves, the assistant picks a playbook by it —, **When it applies** (one line, optional) and **The procedure** in Markdown. |

**Save** writes and reloads at once. This material travels with the application: it is installed and upgraded with it, versioned like the rest of the configuration. The questions set under **Settings → App → AI Assistant** win over the application's, place by place.

---

## Who can use it, and on what \{#access\}

- The user needs the `ai:chat` permission (a role's *AI assistant* rule, in **Beyond the menus**).
- **Allowed connectors** in Settings → App limits the connectors the assistant may reach, and the applications `describe_instance` and the playbooks cover; empty means all.
- Every query it runs goes through the same server checks as a screen: the user's [data scope](./build/secure/roles-and-permissions.md#data-scope) filters the rows.
- **Model** in the drawer only offers the models allowed in the settings; the server refuses any other.

---

## Settings \{#settings\}

In **Settings → App → AI Assistant**: **Enabled**, **Anthropic API key** (encrypted), **Model**, **Effort**, **Max tokens**, **Max tool iterations** (8), **Request timeout (s)**, **Adaptive thinking**, **System prompt**, the tools above, **Allowed connectors**, and for the chat drawer the **Models users may pick** and the **Starter questions**. See [App settings](./build/settings-app.md#ai). Without a key, the drawer says the assistant is not configured.

---

## Tips \{#tips\}

- Give queries a clear label and description (Settings → Connectors): the assistant chooses its queries from them.
- Write dedicated read queries for the questions users ask often (totals per company, per month), rather than expecting the assistant to aggregate thousands of rows.
- Write a playbook for each procedure users ask about more than once: the answer is then the application's procedure, not a guess.
- Keep **API tool** and **Operations tools** off unless the endpoints are read-only and the chat users are administrators.
