---
title: Data sent to Anthropic
description: "What NomaUBL sends to Anthropic and what it never sends: the AI assistant of the application (the question, the page context, the tool results, the attached file, with the API key of the instance) and Claude connected through MCP (NomaUBL only answers tool calls; the user's Claude client talks to Anthropic). What stays on the server, what is never exposed, and the switches that decide."
keywords: [NomaUBL, Anthropic, Claude, AI assistant, MCP, data sent, privacy, confidentiality, personal data, secrets masked, API key, sample files, GDPR, JD Edwards, SAP, NetSuite, custom ERP]
---

# Data sent to Anthropic

NomaUBL uses Anthropic's models in two ways, and the path of the data is not the same:

- the **[AI assistant](./ai-capabilities.md)** of the application — the server calls Anthropic's API with the API key of the instance;
- **[Claude connected through MCP](./claude-mcp.md)** — NomaUBL calls nobody: it answers the tool calls of the user's Claude client, and that client talks to Anthropic under the user's own Claude account.

Nothing is sent while nobody asks a question: no background send, no telemetry, no other AI provider.

---

## At a glance

<svg viewBox="0 0 1200 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="uds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="uds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="uds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="uds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="20" y="14" width="1160" height="400" rx="14" fill="url(#uds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="180.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">THE USER'S COMPUTER</text>
  <text x="600.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">THE NOMAUBL SERVER</text>
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
  <line x1="300" y1="101.0" x2="476" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <line x1="720" y1="101.0" x2="896" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <text x="390.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question, page, file</text>
  <text x="810.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question + tool results</text>
  <text x="810.0" y="116.0" fill="#c084fc" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">with the API key of the instance</text>
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
  <line x1="300" y1="224" x2="476" y2="224" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <line x1="480" y1="248" x2="304" y2="248" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <text x="390.0" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">tool call + personal token</text>
  <text x="390.0" y="262" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">result</text>
  <path d="M180.0,266 V300 H1020.0 V271" fill="none" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <text x="600.0" y="293" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">the conversation, with the results the client received</text>
  <line x1="728" y1="235.0" x2="892" y2="235.0" stroke="#f87171" strokeWidth="1.2" strokeDasharray="4 4"/>
  <text x="810.0" y="227.0" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">no call</text>
  <line x1="40" y1="338" x2="1160" y2="338" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="362" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Never sent in either case: passwords, tokens, API keys and the licence key.</text>
  <text x="60" y="380" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A tool returns only what it was asked for; a tool that is switched off returns nothing.</text>
</svg>

---

## The AI assistant \{#assistant\}

Each question is sent to `api.anthropic.com` with the **API Key** of **Settings → Global → AI**. A request holds:

| Sent | Content |
|---|---|
| **Instructions** | The built-in NomaUBL prompt, or the *System Prompt* of the instance in its place; the status catalogue; the names of the playbooks. |
| **Page context** | The current page and its filter, the language, and the open invoice: document, type, company, number, status, customer. 4,000 characters at most. |
| **Conversation** | The questions and the answers of the conversation in progress — the last 40 messages, kept in the user's browser. |
| **Tool results** | What each tool read to answer, as it read it: invoices (customer name, amounts, VAT, status, messages), lines, lifecycle, validation errors, period figures, dashboards, e-reporting runs, e-directory data, lines of the server log, sections of the implementation report, settings with secrets masked. A result is cut at 60,000 characters; a list holds 50 invoices at most, the server log 300 lines. |
| **Attached file** | An XML as text, up to 150,000 characters; a PDF as it is, up to 10 MB. The file is sent again with each later question of the same conversation. |

Two other screens call the same API:

| Screen | Sent |
|---|---|
| **AI mapping** of the [XSL editor](../ubl-tools/xsl-editor.md) | The paths of the sample with the first value of each (120 characters at most), the text rows of a PDF, the list of variables — and the PDF itself when the sample is one. |
| Documentation in *Sitemap* mode | Nothing more from NomaUBL: Anthropic fetches the pages of the allowed documentation domains itself. |

Business data is sent as the tools read it: no customer name, amount or e-mail address is replaced or hidden. Only the secrets are masked — see [below](#never).

---

## Claude through MCP \{#mcp\}

| Step | Who talks to whom |
|---|---|
| The user asks Claude a question. | The Claude client ↔ Anthropic, under the user's Claude account. |
| Claude calls a NomaUBL tool. | The client → the instance, with the user's personal token. |
| NomaUBL answers. | The instance → the client: the result of that tool, 60,000 characters at most. |
| Claude writes its answer. | The client → Anthropic: the conversation, with the results it received. |

**NomaUBL makes no call to Anthropic here, and the API key of the instance is not used.** What a tool returned leaves the instance towards the user's Claude client, and from there to Anthropic on the terms of the user's Claude plan — not on those of the instance's API key.

Where the call comes from depends on the client:

| Client | The instance is called from |
|---|---|
| Claude Desktop with the extension, Claude Code | The user's computer: an internal address or a VPN is enough. |
| A claude.ai connector | Anthropic's servers: the instance must be reachable from the internet. |

The Claude Desktop extension runs a small relay on the user's computer. It reads one folder only — the **Samples folder** chosen in its settings — and sends NomaUBL a file of that folder only when the user asks Claude to work on it.

---

## What is never sent \{#never\}

| Never sent | How |
|---|---|
| Passwords, tokens, API keys, client secrets, the licence key | A setting whose name marks it as a secret is given as `***`; the licence is described by its state, never by its key. |
| The personal tokens | The server keeps their fingerprint only. |
| A file nobody attached or asked for | The assistant reads the attached file; over MCP, Claude reads the user's own samples. |
| Anything a switched-off tool would read | *Custom Tools* at `N`: the assistant keeps the documentation only. *MCP endpoint* at `N`: no client can connect. |
| Changes | The assistant only reads. Over MCP, a change needs *Allow changes over MCP*, and secrets cannot be set that way. |

---

## What stays on the server \{#stays\}

| Kept | Where, how long |
|---|---|
| The conversation of the assistant | In the user's browser (the last 40 messages); not on the server. |
| Sample files and files attached in the assistant | On the server, per user, 7 days. |
| MCP usage | Counts per user and per day — calls, failures, changes — for 90 days; never what was asked. |
| MCP calls in the server log | One line per failed call and one per change, with the user, the tool and the beginning of its arguments and of its result. A successful read leaves no line. |

---

## What decides \{#controls\}

| Switch | Where | Effect |
|---|---|---|
| **API Key** | Settings → Global → AI | No key: no assistant, nothing sent. |
| **Custom Tools** | Settings → Global → AI | `N`: the assistant answers from the documentation, without reading the data of the instance. |
| **MCP endpoint** | Settings → Global → AI → MCP server | `N` (default): no Claude client can connect. |
| **Allow changes over MCP** | Same group | `N` (default): read only. |
| **MCP access** | [Roles](../configuration/security/roles.md) → Access → Features | Which users may connect Claude; no role by default. |
| **Explorer** page, **Settings access** | Roles | Which tool groups a user's Claude reaches. |

---

## To know before opening it widely \{#limits\}

- **The tools read what the screens show.** A customer name, an amount, an e-mail address of the users list in the implementation report go to the model when a tool reads them.
- **The server log, the IT dashboard and the implementation report are those of the whole instance.** Grant the assistant and *MCP access* to users who may read them.
- **What the user types or attaches is theirs to check.** A file attached in the assistant is sent as it is.
- **The use Anthropic makes of what it receives** depends on the contract of the instance's API key for the assistant, and on the user's Claude plan for MCP.
