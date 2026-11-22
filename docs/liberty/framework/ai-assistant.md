---
title: AI assistant
description: "The Liberty Next AI assistant: the drawer opened from the Assistant button, the page context it receives, files attached to a question, saved conversations and notes, starter questions and follow-ups, the model picker, what it can do (read the connectors' queries, search the catalogue, describe the installation, follow playbooks, call the applications' tools, read the jobs and the server log, call API endpoints, propose configuration), how it is restricted (ai:chat, the permissions of each tool, allowed connectors, read-only queries, data scope), and its settings."
keywords: [Liberty Next, AI assistant, Anthropic, Claude, ai:chat, page context, starter questions, playbooks, operations tools, model picker, tools, list_connectors, sql_query, search_catalog, screen_write, screen_write_many, screen_action, job_run, ai:write, sensitive data, api_call, scaffold, data scope, attach a file, conversations, notes, application tools, MCP]
---

# AI assistant

**Assistant**, at the right of the top bar (its icon alone on a narrow screen), opens a drawer on the right of the page where users ask questions about their data in plain language. The assistant answers by running the connectors' queries, with the user's rights.

---

## At a glance

<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aia-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aia-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aia-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aia-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="480" rx="14" fill="url(#aia-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#64748b" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="240" y="64" fill="#475569" fontSize="8.5" fontFamily="ui-monospace, monospace">sales.orders_get</text>
  <text x="250" y="92" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">ORDER</text>
  <text x="360" y="92" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CUSTOMER</text>
  <text x="470" y="92" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">STATUS</text>
  <rect x="240" y="104" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="120" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00001</text>
  <text x="360" y="120" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="470" y="120" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="240" y="132" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="148" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00002</text>
  <text x="360" y="148" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="470" y="148" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="160" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="176" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00003</text>
  <text x="360" y="176" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="470" y="176" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="240" y="188" width="330" height="24" rx="4" fill="rgba(74,158,255,0.16)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="204" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00004</text>
  <text x="360" y="204" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="470" y="204" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="216" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="232" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00005</text>
  <text x="360" y="232" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Delta Ltd</text>
  <text x="470" y="232" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="244" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="260" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00006</text>
  <text x="360" y="260" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="470" y="260" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="240" y="272" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00007</text>
  <text x="360" y="288" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="470" y="288" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="300" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="316" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00008</text>
  <text x="360" y="316" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="470" y="316" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="600" y="26" width="372" height="468" rx="10" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="46" fill="#c084fc" fontSize="12" fontFamily="system-ui, sans-serif">✦</text>
  <text x="634" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant</text>
  <rect x="886" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="897.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟲</text>
  <rect x="912" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="938" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="949.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="600" y1="62" x2="972" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="614" y="80" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Page:</text>
  <text x="643.8" y="80" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">orders · filters: 2 · the clicked row</text>
  <text x="956" y="80" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="600" y1="92" x2="972" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="752.56" y="104" width="205.44000000000003" height="26" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.4)" strokeWidth="1"/>
  <text x="764.56" y="121" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Sum the open orders of this customer</text>
  <rect x="614" y="140" width="312" height="128" rx="8" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="158" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">› 2 tool call(s)</text>
  <text x="626" y="178" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">ACME has 3 open orders:</text>
  <rect x="626" y="186" width="288" height="20" rx="4" fill="rgba(255,255,255,0.04)"/>
  <text x="634" y="200" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">ORDER</text>
  <text x="800" y="200" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">AMOUNT</text>
  <text x="634" y="220" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00004</text>
  <text x="800" y="220" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">12,400.00</text>
  <text x="634" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00007</text>
  <text x="800" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">8,150.00</text>
  <text x="626" y="255" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Total: 20,550.00</text>
  <rect x="614" y="280" width="155.28" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="294.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Which of them is the oldest?</text>
  <rect x="614" y="308" width="131.48000000000002" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="322.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Compare with last month</text>
  <line x1="600" y1="446" x2="972" y2="446" stroke="#1f2937" strokeWidth="1"/>
  <rect x="614" y="458" width="28" height="30" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="628.0" y="476.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📎</text>
  <rect x="648" y="458" width="272" height="30" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="477" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Type a message… (Enter to send, Shift+Enter for newline)</text>
  <rect x="926" y="458" width="32" height="30" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="942.0" y="476.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <rect x="20" y="194" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="209" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The clicked row</text>
  <text x="30" y="222" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">travels with the question</text>
  <line x1="200" y1="211.0" x2="240" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="20" y="456" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="471" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Attach a file</text>
  <text x="30" y="484" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">image, PDF, sheet, text</text>
  <line x1="200" y1="473.0" x2="614" y2="473" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="24" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conversations and notes</text>
  <text x="1010" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then new conversation, close</text>
  <line x1="1000" y1="41.0" x2="960" y2="40" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page context</text>
  <text x="1010" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× stops sending it</text>
  <line x1="1000" y1="89.0" x2="956" y2="78" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tool calls</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folded into one line</text>
  <line x1="1000" y1="157.0" x2="720" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Follow-ups</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click sends the question</text>
  <line x1="1000" y1="297.0" x2="769.28" y2="285" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
</svg>

---

## Using it \{#use\}

Type a question and press Enter (Shift+Enter for a new line), or click one of the **starter questions** shown on an empty conversation. The answer arrives as it is written; **Stop** interrupts it and keeps what was received.

- **Tool calls** are folded into one muted line — *3 tool call(s)* — that opens to show them; a failed call keeps its message visible.
- A table in an answer scrolls sideways, each figure on one line.
- Each answer ends with two or three **follow-up questions** as chips; a click sends one.
- The conversation stays when the drawer is closed and after a reload, and it is saved for the user — see [Conversations and notes](#history). **+** (*new conversation*) starts another one.
- The **paperclip** in the message box gives the assistant a file to read — see [Attach a file](#attach).
- When several models are allowed, a **Model** picker in the drawer's header chooses the one that answers. The choice is kept on this device.

The assistant knows today's date: *last month* or *this quarter* need no explanation.

Examples: *How many open orders per company this month?* — *Which users have not signed in since June?* — *Where do I close a period?*

---

## Attach a file \{#attach\}

The paperclip (*attach a file for the assistant to read*) adds a file to the question: a screenshot of an error, a procedure in PDF, a list to compare with what the installation holds, a log.

| File | Sent to the assistant |
|---|---|
| Image — `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp` | As it is; 5 MB at most. |
| PDF | As it is. |
| Spreadsheet — `.xlsx`, `.xlsm` | As text: the first sheet. |
| Delimited file — `.csv`, `.tsv` | As text, the delimiter detected. |
| Text — `.txt`, `.log`, `.md`, `.json`, `.xml`, `.sql`, `.toml`, `.yaml`, `.ini`, `.html`… | As text. |

A sheet or a text longer than 60,000 characters is cut: the file's chip then ends with `*`, and its tooltip says what was attached. The assistant only reads the file: nothing is loaded into a table, nothing is stored on the server. The file stays with the conversation while it is open; a saved conversation keeps its name only, and the assistant is told the file is gone when the conversation is resumed.

The largest file is set by **File attached to a question: megabytes at most** in Liberty Next → Administer → App → AI Assistant — 10 by default, `0` removes the paperclip. A file counts as input tokens at every question of its conversation.

---

## Conversations and notes \{#history\}

The history button of the drawer's header (*conversations and notes*) opens a panel with two lists.

**Conversations** — each conversation is saved on the server for the user and follows them from one device to another. A click on a row (*Resume this conversation*) reopens it; the bin deletes it. What is kept is what the user saw — the questions and the answers; a resumed conversation reads its data again. The 30 latest conversations are kept.

**Notes — what the assistant remembers for you** — ask the assistant to remember something for later conversations: a convention, a preference, how a figure is defined. It proposes the note on a card: **Apply** saves it, **Skip** drops it, and nothing is saved without that click. A note is 300 characters at most; it belongs to the application of the page, or to *every application*, and then travels with the user's questions. Notes are private to the user; the bin deletes one.

---

## What the page tells it \{#context\}

While a data screen is the active tab, every message carries what the user is looking at: the application, the screen and its read query, the active filters, the number of rows loaded and their columns, and the row last clicked (or whose row menu was opened). *This screen*, *these rows* or *the selected row* need no further explanation, and the assistant runs the screen's own query when it needs more data.

On the **Data Explorer** page, the context is the model and the analysis on the canvas (entity, rows, measures, period) or the saved analysis open: *Save this as an analysis* or *Make a dashboard of these* need no further explanation.

On a page an application ships (see [Pages an application ships](./apps/plugins.md#pages)), the page itself says what the user is looking at: a title and a few facts — the object open, the tab, a filter, never rows. A question about *this* then needs no name there either.

A line under the drawer's header shows what is sent — *Page: orders · filters: 2 · the clicked row*, with the screen's identifier. Its **×** stops sending the page for as long as the user stays on it. The context is limited to 4,000 characters.

---

## Starter questions \{#starters\}

On an empty conversation, the drawer offers questions suited to where the user is: those of the current screen (or of the Data Explorer page, or of the page an application ships), else those of the application, else those set for everywhere — the most specific place that has questions wins. An application can group them under headings, shown as pills above the questions; after an answer, the follow-ups take their place. When an application ships its questions in several languages, the drawer shows them in the user's language.

Questions come from two sources:

- **Liberty Next → Logic → AI**: the questions an application ships, per application, by heading and per screen, in each language — see [below](#settings-ai);
- **Liberty Next → Administer → App → AI Assistant → Starter questions**: the operator's own, for everywhere, an application or an *application/screen*. They win over the application's questions for the same place.

---

## What it can do \{#tools\}

| Tool | Does | Setting |
|---|---|---|
| `list_connectors` | Lists the connectors with the **read** queries and the endpoints the user may run (descriptions, no SQL, no credentials). On a large installation it answers with an overview, then narrows to one connector or to keywords. | **Connector tools** (on by default). |
| `sql_query` | Runs a **read** query of a SQL connector the way its screen does: column labels and formats, the screen's filters, the environment of the page. It filters by column — a value or a range — and a filter that matches no column is refused. Write queries are always refused. | **Connector tools**; **Rows per query, at most** (200). |
| `explorer_models`, `explorer_fields`, `explorer_query` | List the [Data Explorer](./explorer/overview.md) models and their fields, then compute a total, a ranking, a trend or a comparison on a model — rows, measures, filters, period, sort, Top N (100 rows by default, 10,000 at most) — under the user's data scope. | On by default. |
| `explorer_saved`, `explorer_save_analysis`, `explorer_save_dashboard` | List the user's saved analyses and dashboards, and save what the user asks for: an analysis is run once before it is stored, so a wrong field is refused; a dashboard gathers saved analyses as tiles. Both are **private** unless the user asks to share them. | On by default. |
| `describe_instance` | Summarises what the installation holds, or one application: menus, screens with their read query, dashboards, Data Explorer models, jobs, playbooks. *Where do I find…* is answered from the real configuration. | Always. |
| `search_catalog` | Finds a screen, a menu entry, a dashboard, a Data Explorer model, a job or a playbook by keyword, without reading the whole configuration. | Always. |
| Application tools | Functions an application ships for its own subject, named `<app>_<id>`. Read-only. See [Liberty Next → Logic → AI](#settings-ai). | **The applications' tools** (on by default). |
| `remember_note` | Proposes a note for later conversations — see [Conversations and notes](#history). | Always. |
| `screen_form`, `screen_write`, `screen_write_many`, `screen_action`, `job_form`, `job_run` | Read what a screen lets its user do, then add, change or delete a record — or up to 50 records on one card —, or run an action of the screen, through the screen's own queries and rules; read a job as its page shows it, then run it — see [Write through a screen](#write). | **Write tools** (off by default), with the `ai:write` permission. |
| Playbooks | Lists the applications' procedures and loads the one that fits — see [Playbooks](#playbooks). | Always. |
| `jobs_status`, `server_log`, `integrity_checks` | The Nomaflow jobs with their schedule, last run and next start, and one job's recent runs with the failing step; the recent server log lines, by level and text; the configuration cross-checks. | **Operations tools** (off by default); superusers only. |
| `api_call` | Calls an endpoint of an API connector. | **API tool** (off by default — an endpoint may change data). |
| `api_run` | Calls an endpoint marked **Changes data** — a report submitted, an orchestration run. `api_call` refuses such an endpoint. In the chat it proposes a card; nothing is sent until the user applies it. See [API endpoints](./build/api-endpoints.md#writable). | **API tool** and **Write tools**, for a user holding `ai:write` and the endpoint's permission; over MCP, **Allow changes over MCP** as well. |
| Scaffold tools | Propose a query, a dictionary entry, a screen or a menu item; the user reviews the proposal and applies it. | **Scaffold tools** (off by default); superusers only. |
| Web fetch | Reads pages of the allowed domains. | **Allowed domains** (none by default). |

The assistant only uses existing named queries: it does not write SQL against the database. Beyond **Rows per query, at most**, a result is marked as truncated and the assistant is told not to count or add up the rows it received: it narrows its filters, or computes the figure with the Data Explorer tools. A tool result above 60,000 characters is cut, and the assistant is asked to narrow its call. A question that uses all its tool rounds (**Max tool iterations**, 15 by default) ends on a closing answer: what was done, what was found, what is left — and the user can ask to continue.

The **Operations tools** let the assistant read the running server rather than guess when a job failed, is late or is missing. They are meant for installations whose chat users are administrators: the server log can hold anything the server wrote.

---

## Write through a screen \{#write\}

With the **Write tools** on, the assistant can do what a user does in a screen or on a job's page — nothing by another path:

| Tool | Does |
|---|---|
| `screen_form` | Reads what the screen lets this user add, change, delete and run: the key, each column with its label, whether it is required or locked, its default and the values it accepts, the columns a picked value fills, and the screen's actions. |
| `screen_write` | Adds, changes or deletes **one** record. |
| `screen_write_many` | Adds, changes or deletes **several** records of one screen — the same operation for all, 50 at most — on one card. |
| `screen_action` | Runs **one** action of the screen — a row menu's *Validate* or *Close*, a button of the toolbar or of a form tab. |
| `job_form` | Reads a job as its page shows it: what it does, the parameters a user may set with their choices, its presets, whether it is running, its last runs with their state and error. |
| `job_run` | Runs the job — the page's **Run now** — with its declared parameters and presets only. |

The record is read through the screen's read query, and the form's rules apply: a missing required column, a value outside its list, a column or a record the screen holds read-only are refused with the reason. The save then runs as from the form — dictionary rules, sequences, related tables, audit, data scope, change package, notification rules — and so do the screen's save hooks and the steps of its actions, each under its own permission. A value picked in a list fills its sibling columns, as in the form; a sibling the request gives is kept.

**Three locks, all needed:** the **Write tools** setting, the `ai:write` permission of the role, and the permission of each query, endpoint or plugin that runs, as in the screen — `job:<id>` for a job.

**Who confirms.** In the drawer the tools only propose: the user gets a card — *Change sales/orders — … — STATUS: 'OPEN' → 'CLOSED'*, or the action with the screen's confirmation and what it runs — and nothing happens until **Apply**; **Skip** drops the step. Over [MCP](./mcp.md#changes), these tools exist only where **Allow changes over MCP** is on, and the client asks its user before calling one.

**Several records.** Every record of the list is checked before the first is written: if the screen refuses one, nothing is written and the answer names each refused record with its reason. One **Apply** then writes them in order, each as `screen_write` writes one. Should a save still fail midway, it stops there: the records before it stay written, and the answer says how many. Beyond 50 records, the grid's Excel import is the way.

**Jobs.** A run is queued and goes on in the background; the assistant follows it with `job_form`, and the user sees it in the Nomaflow [run history](../nomaflow/runs/history.md). A job that is already running is refused. A job that loads a file the user brings asks for it **on the card** — one picker per file step, with the kinds of file the job's upload takes: **Apply** sends the file through the job's own upload and runs the job with it. The file never goes through the model. From Claude Desktop, the file comes from the [extension's folder](./mcp.md#files).

| Refused | Reason given |
|---|---|
| A record open in its form | The form holds the record: it cannot be changed or deleted until the form is closed — by another user, or by the user's own open form. |
| A screen that cannot be written | The screen is read-only, has no query for the operation, runs actions when its form opens, or reads its data from a connector left out of **Allowed connectors**. |
| An action made only of what a browser does | Opening a page or an address is noted, not run. |

As in the screen, a save, its related tables and its hooks are separate statements: when a hook or a step fails, what ran before stays, and the answer says so.

**What is kept.** Each applied card and each saving tool called over MCP is in the usage record — who, the screen, the operation or the action, the key of the record, the job, and the reason of a refusal; never the values. [Monitoring → AI usage](../monitoring/ai-usage.md#changes) lists them, and on a change-tracked screen the change package names these entries *AI assistant*.

---

## Playbooks \{#playbooks\}

A **playbook** is a step-by-step procedure an application ships for the assistant: *Close a period*, *Add a user to a role*. When a user asks how to do something in an application, the assistant looks for a playbook that fits, loads it and follows its steps in order, saying which one it follows. Without a suitable playbook, it says so and answers from what it can read.

---

## Liberty Next → Logic → AI \{#settings-ai\}

<svg viewBox="0 0 1200 614" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aip-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aip-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aip-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="574" rx="14" fill="url(#aip-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">✦</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">AI</text>
  <rect x="867" y="31" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="913.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="820" y="31" width="41" height="22" rx="5" fill="url(#aip-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="840.5" y="45.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="750" y="31" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="782.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↺ Discard</text>
  <line x1="220" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">App:</text>
  <rect x="268.16" y="76" width="22" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="279.16" y="89.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">∗</text>
  <rect x="296.16" y="76" width="32" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="312.16" y="89.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="334.16" y="76" width="41" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="354.66" y="89.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="381.16" y="76" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="418.16" y="89.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add scope</text>
  <text x="240" y="114" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What the application ships for the assistant — starter questions for the app and for its screens.</text>
  <rect x="240" y="126" width="720" height="50" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="146" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">文A  Language</text>
  <rect x="728" y="134" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="738" y="148.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="737" y="148.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="752.664" y="148.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">French</text>
  <text x="936" y="148.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="252" y="166" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The questions shown to the users whose language is French. A list left empty here shows the one as written.</text>
  <rect x="240" y="188" width="720" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="206" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✦  Starter questions anywhere in sales</text>
  <text x="252" y="224" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Quelles commandes sont en retard ?</text>
  <text x="948" y="224" fill="#94a3b8" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="252" y="232" width="672" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="246.5" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">A question the user can click…</text>
  <rect x="930" y="232" width="20" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="940.0" y="246.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="240" y="274" width="720" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="292" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">☰  Starter questions by heading</text>
  <rect x="855" y="281" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="295.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add a heading</text>
  <text x="252" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The chat shows the headings, then the picked heading's questions. When headings are set, they are shown instead of the list above.</text>
  <rect x="252" y="320" width="696" height="72" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="264" y="328" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="274" y="342.5" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">Commandes</text>
  <rect x="914" y="328" width="22" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="925.0" y="342.5" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="264" y="366" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Quelles commandes sont en retard ?</text>
  <text x="264" y="382" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Quel client a le plus commandé ce mois-ci ?</text>
  <rect x="240" y="414" width="720" height="84" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="432" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▤  Starter questions per screen</text>
  <rect x="728" y="420" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="738" y="434.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="737" y="434.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">+ a screen…</text>
  <text x="936" y="434.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="252" y="444" width="696" height="44" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="461" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">orders</text>
  <text x="303.992" y="461" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">— Orders</text>
  <text x="264" y="478" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Pourquoi cette commande est-elle bloquée ?</text>
  <rect x="240" y="510" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="529" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">📖  Playbooks</text>
  <rect x="240" y="548" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="567" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">🔧  Tools</text>
  <rect x="1000" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add scope</text>
  <text x="1010" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">another application</text>
  <line x1="1000" y1="89.0" x2="455.16" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="135" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="150" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <text x="30" y="163" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as written, or another language</text>
  <line x1="200" y1="152.0" x2="240" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="1000" y="155" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="170" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Empty list in a language</text>
  <text x="1010" y="183" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">= the one as written</text>
  <line x1="1000" y1="172.0" x2="840" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="204" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="219" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Everywhere in the app</text>
  <text x="30" y="232" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the default questions</text>
  <line x1="200" y1="221.0" x2="240" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="329" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="344" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Headings</text>
  <text x="30" y="357" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grouped questions, shown first</text>
  <line x1="200" y1="346.0" x2="264" y2="339" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="1000" y="359" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="374" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ Add a heading</text>
  <text x="1010" y="387" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a label and its questions</text>
  <line x1="1000" y1="376.0" x2="900" y2="299" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="446" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="461" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per screen</text>
  <text x="30" y="474" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the most specific place wins</text>
  <line x1="200" y1="463.0" x2="264" y2="462" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="1000" y="534" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="549" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Playbooks, tools</text>
  <text x="1010" y="562" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same for every language</text>
  <line x1="1000" y1="551.0" x2="960" y2="558" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
</svg>

**Liberty Next → Logic → AI** edits what each application ships for the assistant; **Discard** and **Save** are in the page header. The **App** row lists the applications that already have some, plus `*` for everywhere; **Add scope** picks another one. For each:

| Part | Content |
|---|---|
| **Language** | The language whose questions are shown and edited: **As written** (the questions as the application ships them), or another language — then the lists below are the questions shown to the users of that language. A list left empty in a language shows the one as written. Shown when the interface has another language than the one the configuration is written in. |
| **Starter questions anywhere in** *app* | The questions offered everywhere in the application. |
| **Starter questions by heading** | **Add a heading**: a **Heading** and its questions. The chat shows the headings first, then the questions of the heading picked; when headings are set, they are shown instead of the list above. *No heading: the chat shows the list above.* |
| **Starter questions per screen** | **+ a screen…** adds a screen — or a page the application ships, by its name — and its own questions. **Add a heading for this screen** groups them under headings, as for the application: a **Heading** and its questions; when a screen has headings, they are shown instead of its plain questions. A screen taken out leaves every language with it. |
| **Playbooks** | **Add playbook**: an **Id** (letters, digits, `_` and `-`, unique in the application), a **Title** — what the procedure achieves, the assistant picks a playbook by it —, **When it applies** (one line, optional) and **The procedure** in Markdown. |
| **Tools** | **Add tool**: an **Id** (lowercase letters, digits and `_`, unique in the application — the assistant sees the tool as `<app>_<id>`), the **Function (module:function)** — one of the entry points of the application's [plugins](./build/plugins/overview.md), whose parameters become the tool's arguments —, the **Description** (what it answers and when to use it: the assistant picks a tool by it) and the **Permission the user needs** (blank: the function's own). A tool must not change anything. Tools belong to an application: none on the `*` scope. |

**Save** writes and reloads at once. This material travels with the application: it is installed and upgraded with it, versioned like the rest of the configuration. The questions set under **Liberty Next → Administer → App → AI Assistant** win over the application's, place by place.

---

## Who can use it, and on what \{#access\}

- The user needs the `ai:chat` permission (a role's *AI assistant* rule, in **Beyond the menus**).
- `ai:chat` opens the drawer; each tool then checks what the screens check, for the signed-in user:

  | Tool | The user needs |
  |---|---|
  | `sql_query` | `sql:<connector>:<query>`. |
  | `api_call` | `api:<connector>:<endpoint>`. |
  | Data Explorer tools | `explorer:<app>:<model>`. |
  | `list_connectors`, `describe_instance`, `search_catalog`, playbooks | Nothing more, and they show only what the user can open: a screen by its read query, a menu entry by the [menu's rule](./build/menus/permissions-and-roles.md#gating), a job by `job:<id>`. An application with nothing for the user is not named. |
  | Application tools | The tool's permission. |
  | `screen_form`, `screen_write`, `screen_write_many`, `screen_action` | `ai:write`, and the permission of each query, endpoint or plugin the screen runs. |
  | `job_form`, `job_run` | `ai:write` and `job:<id>`. |
  | Operations and scaffold tools | Superuser. |

  A user holding `ai:chat` without the `sql:` or `explorer:` permissions of an application gets no figure from it: grant them, as for the screens. A refusal reads the same for a query that exists and for one that does not.
- **Allowed connectors** in Liberty Next → Administer → App limits the connectors the assistant may reach, and the applications `describe_instance` and the playbooks cover; empty means all. The write tools follow it too: a screen whose data is on another connector does not exist for them.
- Every query it runs goes through the same server checks as a screen: the user's [data scope](./build/secure/roles-and-permissions.md#data-scope) filters the rows.
- **Model** in the drawer only offers the models allowed in the settings; the server refuses any other.

---

## From Claude, and what is recorded \{#beyond\}

- The same tools answer an external client — Claude Desktop, claude.ai, Claude Code — through the server's MCP endpoint, each user with a personal access token and their own rights. See [Connect Claude (MCP)](./mcp.md).
- An installation can flag its sensitive columns and keep them from the assistant, and [Data sent to Anthropic](./ai-data-sent.md) lists what a question sends and what it never does.
- Every question is recorded: who asked, the model, the tokens, the tools called — never the question, the answer or a row. Superusers read it in [Monitoring → AI usage](../monitoring/ai-usage.md).

---

## Settings \{#settings\}

In **Liberty Next → Administer → App → AI Assistant**: **Enabled**, **Anthropic API key** (encrypted), **Model**, **Effort**, **Max tokens**, **Max tool iterations** (15), **Request timeout (s)**, **Adaptive thinking**, **System prompt**, the tools above, **Allowed connectors**, **Rows per query, at most**, **File attached to a question**, **Usage record kept**, **Write tools**, **Hide sensitive data from the assistant**, the **MCP endpoint**, and for the chat drawer the **Models users may pick** and the **Starter questions**. See [App settings](./build/settings-app.md#ai). Without a key, the drawer says the assistant is not configured.

---

## Tips \{#tips\}

- Give queries a clear label and description (Liberty Next → Data → Connectors): the assistant chooses its queries from them.
- Write dedicated read queries for the questions users ask often (totals per company, per month), rather than expecting the assistant to aggregate thousands of rows.
- Write a playbook for each procedure users ask about more than once: the answer is then the application's procedure, not a guess.
- Keep **API tool** and **Operations tools** off unless the endpoints are read-only and the chat users are administrators.
