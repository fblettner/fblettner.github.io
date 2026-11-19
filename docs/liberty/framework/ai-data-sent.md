---
title: Data sent to Anthropic
description: "What Liberty Next sends to Anthropic and what it never sends: the AI assistant (instructions, page context, notes, conversation, tool results, attached files, with the installation's API key) and Claude connected through MCP (Liberty only answers tool calls). The Sensitive flag and the switch that keeps flagged columns from the assistant, what stays on the server, and the settings that decide."
keywords: [Liberty Next, Anthropic, Claude, AI assistant, MCP, data sent, privacy, confidentiality, sensitive data, hide sensitive, personal data, dictionary, data scope, API key, GDPR]
---

# Data sent to Anthropic

Liberty Next uses Anthropic's models in two ways, and the path of the data is not the same:

- the **[AI assistant](./ai-assistant.md)** — the server calls Anthropic's API with the API key of the installation;
- **[Claude connected through MCP](./mcp.md)** — Liberty calls nobody: it answers the tool calls of the user's Claude client, and that client talks to Anthropic under the user's own Claude account.

Nothing is sent while nobody asks a question: no background send, no telemetry, no other AI provider. An installation can also name its [sensitive data](#sensitive) and keep it from the assistant.

---

## At a glance

<svg viewBox="0 0 1200 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="20" y="14" width="1160" height="400" rx="14" fill="url(#lds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="180.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">THE USER'S COMPUTER</text>
  <text x="600.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">THE LIBERTY NEXT SERVER</text>
  <text x="1020.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">ANTHROPIC</text>
  <text x="60" y="64" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">1 · THE AI ASSISTANT OF THE APPLICATION</text>
  <rect x="60" y="70" width="240" height="62" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="180.0" y="98.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Assistant panel</text>
  <text x="180.0" y="113.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">in the browser</text>
  <rect x="480" y="70" width="240" height="62" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="600.0" y="98.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Runs the tools</text>
  <text x="600.0" y="113.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">with the user's rights</text>
  <rect x="900" y="70" width="240" height="62" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="1020.0" y="98.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Anthropic API</text>
  <text x="1020.0" y="113.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">the model answers</text>
  <line x1="300" y1="101.0" x2="476" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <line x1="720" y1="101.0" x2="896" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <text x="390.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question, page, file</text>
  <text x="810.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question + tool results</text>
  <text x="810.0" y="116.0" fill="#c084fc" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">with the API key of the installation</text>
  <line x1="40" y1="168" x2="1160" y2="168" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">2 · CLAUDE CONNECTED TO THE SERVER (MCP)</text>
  <rect x="60" y="204" width="240" height="62" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="180.0" y="232.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Claude Desktop · Claude Code</text>
  <text x="180.0" y="247.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">or a claude.ai connector</text>
  <rect x="480" y="204" width="240" height="62" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="600.0" y="232.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">MCP endpoint /mcp</text>
  <text x="600.0" y="247.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">answers tool calls, nothing else</text>
  <rect x="900" y="204" width="240" height="62" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="1020.0" y="232.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Anthropic</text>
  <text x="1020.0" y="247.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">the user's own Claude account</text>
  <line x1="300" y1="224" x2="476" y2="224" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <line x1="480" y1="248" x2="304" y2="248" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <text x="390.0" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">tool call + personal token</text>
  <text x="390.0" y="262" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">result</text>
  <path d="M180.0,266 V300 H1020.0 V271" fill="none" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <text x="600.0" y="293" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">the conversation, with the results the client received</text>
  <line x1="728" y1="235.0" x2="892" y2="235.0" stroke="#f87171" strokeWidth="1.2" strokeDasharray="4 4"/>
  <text x="810.0" y="227.0" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">no call</text>
  <line x1="40" y1="338" x2="1160" y2="338" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="362" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Never sent in either case: passwords, tokens, API keys and the licence key.</text>
  <text x="60" y="380" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A tool returns only what it was asked for; a tool that is switched off returns nothing.</text>
</svg>

---

## The AI assistant \{#assistant\}

Each question is sent to Anthropic's API with the **Anthropic API key** of **Liberty Next → Administer → App → AI Assistant**. A request holds:

| Sent | Content |
|---|---|
| **Instructions** | The built-in instructions, or the installation's **System prompt** in their place, and today's date. |
| **Tool list** | The name and the description of each tool offered to this user. |
| **Page context** | What the user is looking at: the application, the screen and its read query, the active filters, the number of rows loaded and their columns, the row last clicked. 4,000 characters at most; the **×** of its chip stops sending it. |
| **Notes** | The user's notes for the application, 2,000 characters at most. |
| **Conversation** | The questions and the answers of the conversation in progress — the last 40 messages. |
| **Tool results** | What each tool read to answer: the rows of a read query (200 by default), Data Explorer figures, the description of the installation (ids and labels — no data, no SQL), a playbook, the form of a screen, the record before and after a write. With the tools an installation turns on: the jobs, the server log lines and the integrity checks (operations tools, superusers only), the answer of an API endpoint (API tool), what an application's own tool returns. A result is cut at 60,000 characters. |
| **Attached files** | An image or a PDF as it is; a spreadsheet (its first sheet), a CSV or a text file as text, cut at 60,000 characters. A file stays with its conversation while the page is open, and is sent again with each question of it. A file chosen on the card of a job is not one of them: it goes to the job's own upload, never to the model. |

When domains are listed under **Allowed domains**, Anthropic reads those web pages itself; Liberty sends nothing more.

Within one question, each tool round sends the earlier rounds again; Anthropic reads the repeated part from its prompt cache for a few minutes, at a lower price. It is not a storage kept by Liberty.

---

## Claude through MCP \{#mcp\}

| Step | Who talks to whom |
|---|---|
| The user asks Claude a question. | The Claude client ↔ Anthropic, under the user's Claude account. |
| Claude calls a Liberty tool. | The client → the server, with the user's access. |
| Liberty answers. | The server → the client: the result of that tool, 60,000 characters at most. |
| Claude writes its answer. | The client → Anthropic: the conversation, with the results it received. |

**Liberty makes no call to Anthropic here, and the API key of the installation is not used.** What a tool returned leaves the server towards the user's Claude client, and from there to Anthropic on the terms of the user's Claude plan. There is no page context and there are no notes over MCP. A file the Claude Desktop extension sends for a job goes from the user's computer to the server, not to Anthropic.

| Client | The server is called from |
|---|---|
| A custom connector in Claude Desktop or claude.ai | Anthropic's servers: the server must be reachable from the internet. |
| The Claude Desktop extension, Claude Code | The user's computer: an internal address or a VPN is enough. |

---

## Sensitive data \{#sensitive\}

An installation decides what is sensitive, and Liberty keeps it from the assistant — in the chat and through MCP alike. Nothing is flagged in what the applications ship: the flags are the installation's to set and to maintain.

| Step | Where | Effect |
|---|---|---|
| **Flag an item** | Liberty Next → Build → Dictionary → an entry → *Rule* → **Sensitive** | Covers every column carrying the item, on every screen, query and Data Explorer model. A column is matched by its dictionary item, by its name, or by its name without the connector's prefix (`ABALPH` → `ALPH`) — as the [data scope](./build/secure/roles-and-permissions.md#data-scope) finds its columns. |
| **Flag a column** | Liberty Next → Build → Screens → a column → *General* → **Sensitive** | Three choices: *(default)* follows the column's item, *yes* covers a column that carries no item, *no* exempts a column whose item is flagged. |
| **Turn the hiding on** | Liberty Next → Administer → App → AI Assistant → **Hide sensitive data from the assistant** | Off by default. Applied at the next call, without a restart. |

With the hiding on, the flagged columns are left out of:

| Place | What happens |
|---|---|
| **Rows a read query returns** | The flagged columns are removed from the rows. The assistant is told which columns are hidden, so it can say so and point the user to the screen. |
| **Write and action cards** | The values of the record are shown as *(hidden: sensitive)*: the record before a change, the record of a delete, the screen's confirmation of an action, and the messages of the actions the screen runs after a save. The value the user asked to write is theirs, and is shown. |
| **Page context** | The flagged columns leave the column list and the clicked row, and a filter typed on one of them is not sent. |
| **Data Explorer** | A flagged field cannot be a row heading nor be read by a measure other than a count — no sum, average, minimum or maximum. It can be counted, and filtered on a whole value the user gives (*equals*) only: a range, a *contains* or a period on it is refused, as it would let the values be found out count by count. |
| **Filters of a read query** | The same rule: a flagged column is filtered on a whole value, not on a range. |

The screens themselves do not change: the users who may open them see the values as before.

**What the hiding does not cover:**

- what a user types in a question, or attaches;
- a free-text column that is not flagged;
- what an API endpoint (API tool), an application's own tool or the operations tools return — Liberty does not know their columns;
- the key of a record on a write card.

---

## What is never sent \{#never\}

| Never sent | How |
|---|---|
| Pool passwords, API keys, encrypted secrets | The tools give descriptions only — never credentials. A password field of a form is shown as `••••••`. |
| The SQL text of a query | The assistant sees the name, the label and the description of a query. |
| Rows the user may not read | Each tool checks the permission the screens check, and the user's [data scope](./build/secure/roles-and-permissions.md#data-scope) filters the rows. |
| Connectors left out of **Allowed connectors** | The assistant is told they are not available. |
| What a switched-off tool would read | A tool that is off is not offered at all. |

---

## What stays on the server \{#stays\}

| Kept | Content, how long |
|---|---|
| **Conversations** | What the user saw — questions, answers, the names of the attached files — for the 30 latest conversations of each user. |
| **Notes** | The user's own, until they delete them. |
| **Usage record** | Who asked, the model, the tokens, the time, and for each tool its name and a short summary of what it was called on; for a change made through the assistant, the screen, the operation, the key of the record or the job — never the question, the answer, a row, a value written or the text of a note. 90 days by default; see [AI usage](../monitoring/ai-usage.md). |
| **Clients connected by sign-in** | The client's name, when it connected, its last use and the day its access ends — never a token. An ended access is dropped after 30 days. |
| **Attached files** | Not stored. |

The [licence usage report](./build/secure/license-key.md#usage-report) goes to the licence management tool, not to Anthropic, and carries nothing of the assistant.

---

## What decides \{#controls\}

| Setting | Where | Effect |
|---|---|---|
| **Enabled**, **Anthropic API key** | Administer → App → AI Assistant | Off, or no key: no assistant, nothing sent. |
| The tool switches | Same section | **Connector tools**, **Data Explorer tools**, **The applications' tools**: on by default. **API tool**, **Operations tools**, **Scaffold tools**, **Write tools**: off by default. |
| **Allowed connectors** | Same section | The connectors the assistant may read; empty means all. |
| **Hide sensitive data from the assistant** | Same section | Off by default — see [above](#sensitive). |
| **File attached to a question** | Same section | `0`: no attachment. |
| **MCP endpoint (/mcp)** | Same section | Off by default: no Claude client can connect. |
| **Allow changes over MCP** | Same section | Off by default: a Claude client reads only — see [Changes over MCP](./mcp.md#changes). |
| `ai:chat`, `ai:write`, `mcp:use` | Administer → Access → a role → Beyond the menus | Who uses the assistant, who writes through it, who connects Claude. |
| `sql:`, `explorer:`, `api:` permissions and the data scope | The role | What the assistant reads for that user. |

---

## To know before opening it widely \{#limits\}

- **The tools read what the screens show.** Without the hiding, a name, an e-mail address or an amount goes to the model when a query returns it.
- **Flag before turning the hiding on.** The switch hides what is flagged, nothing else: review the dictionary entries of the personal and banking data first.
- **Keep the API tool and the operations tools for installations that need them.** Their answers are not covered by the hiding.
- **The use Anthropic makes of what it receives** depends on the contract of the installation's API key for the assistant, and on the user's Claude plan for MCP.
