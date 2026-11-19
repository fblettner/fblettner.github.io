---
title: AI assistant
description: "The Liberty Next AI assistant: the drawer opened from the Assistant button, the page context it receives, files attached to a question, saved conversations and notes, starter questions and follow-ups, the model picker, what it can do (read the connectors' queries, search the catalogue, describe the installation, follow playbooks, call the applications' tools, read the jobs and the server log, call API endpoints, propose configuration), how it is restricted (ai:chat, the permissions of each tool, allowed connectors, read-only queries, data scope), and its settings."
keywords: [Liberty Next, AI assistant, Anthropic, Claude, ai:chat, page context, starter questions, playbooks, operations tools, model picker, tools, list_connectors, sql_query, search_catalog, screen_write, screen_write_many, screen_action, job_run, ai:write, sensitive data, api_call, scaffold, data scope, attach a file, conversations, notes, application tools, MCP]
---

# AI assistant

**Assistant**, at the right of the top bar (and at the bottom of the sidebar), opens a drawer where users ask questions about their data in plain language. The assistant answers by running the connectors' queries, with the user's rights.

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
  <rect x="590" y="32" width="92" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="690" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
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
  <rect x="736" y="452" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <path d="M743,466 l6,-6 a2.6,2.6 0 0 1 3.7,3.7 l-6.6,6.6 a1.5,1.5 0 0 1 -2.1,-2.1 l5.6,-5.6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <rect x="1000" y="12" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="27" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model picker</text>
  <text x="1010" y="40" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">when several are allowed</text>
  <line x1="1000" y1="29.0" x2="686" y2="38" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
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
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conversations and notes</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">resume, delete, kept per user</text>
  <line x1="1000" y1="137.0" x2="706" y2="55" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="446" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="461" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Attach a file</text>
  <text x="1010" y="474" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">image, PDF, sheet, text</text>
  <line x1="1000" y1="463.0" x2="762" y2="463" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
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

A chip under the drawer's header shows what is sent — *Page: Sales lines · filters: 2 · the clicked row*. Its **×** stops sending the page for as long as the user stays on it. The context is limited to 4,000 characters.

---

## Starter questions \{#starters\}

On an empty conversation, the drawer offers questions suited to where the user is: those of the current screen (or of the Data Explorer page), else those of the application, else those set for everywhere — the most specific place that has questions wins. An application can group them under headings, shown as pills above the questions; after an answer, the follow-ups take their place. When an application ships its questions in several languages, the drawer shows them in the user's language.

Questions come from two sources:

- **Liberty Next → Build → AI**: the questions an application ships, per application and per screen — see [below](#settings-ai);
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
| Application tools | Functions an application ships for its own subject, named `<app>_<id>`. Read-only. See [Liberty Next → Build → AI](#settings-ai). | **The applications' tools** (on by default). |
| `remember_note` | Proposes a note for later conversations — see [Conversations and notes](#history). | Always. |
| `screen_form`, `screen_write`, `screen_write_many`, `screen_action`, `job_form`, `job_run` | Read what a screen lets its user do, then add, change or delete a record — or up to 50 records on one card —, or run an action of the screen, through the screen's own queries and rules; read a job as its page shows it, then run it — see [Write through a screen](#write). | **Write tools** (off by default), with the `ai:write` permission. |
| Playbooks | Lists the applications' procedures and loads the one that fits — see [Playbooks](#playbooks). | Always. |
| `jobs_status`, `server_log`, `integrity_checks` | The Nomaflow jobs with their schedule, last run and next start, and one job's recent runs with the failing step; the recent server log lines, by level and text; the configuration cross-checks. | **Operations tools** (off by default); superusers only. |
| `api_call` | Calls an endpoint of an API connector. | **API tool** (off by default — an endpoint may change data). |
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

## Liberty Next → Build → AI \{#settings-ai\}

**Liberty Next → Build → AI** edits what each application ships for the assistant. The **App** row lists the applications that already have some, plus `*` for everywhere; **Add scope** picks another one. For each:

| Part | Content |
|---|---|
| **Starter questions anywhere in** *app* | The questions offered everywhere in the application. |
| **Starter questions per screen** | **+ a screen…** adds a screen and its own questions. |
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

- Give queries a clear label and description (Liberty Next → Build → Connectors): the assistant chooses its queries from them.
- Write dedicated read queries for the questions users ask often (totals per company, per month), rather than expecting the assistant to aggregate thousands of rows.
- Write a playbook for each procedure users ask about more than once: the answer is then the application's procedure, not a guess.
- Keep **API tool** and **Operations tools** off unless the endpoints are read-only and the chat users are administrators.
