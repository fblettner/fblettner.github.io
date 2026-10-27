---
title: AI assistant
description: "The Liberty Next AI assistant: the drawer opened from the AI Assistant button, what it can do (read the connectors' queries, call API endpoints, propose configuration, read allowed web pages), how it is restricted (ai:chat, allowed connectors, read-only queries, data scope), and its settings."
keywords: [Liberty Next, AI assistant, Anthropic, Claude, ai:chat, tools, list_connectors, sql_query, api_call, scaffold, data scope]
---

# AI assistant

**AI Assistant**, at the right of the top bar, opens a drawer where users ask questions about their data in plain language. The assistant answers by running the connectors' queries, with the user's rights.

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aia-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aia-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aia-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aia-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#aia-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="380" height="380" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="54" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Deals</text>
  <rect x="252" y="66" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="96" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="126" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="156" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="186" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="216" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="640" y="30" width="340" height="380" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="654" y="54" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <text x="966" y="54" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">new conversation</text>
  <rect x="760" y="68" width="206" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="770" y="86" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Open amount per stage?</text>
  <rect x="654" y="120" width="204" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="756.0" y="132.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query · crm.pipeline_by_stage_get</text>
  <rect x="654" y="146" width="300" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="666" y="166" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Open pipeline by stage:</text>
  <text x="666" y="186" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">• Qualified — 8 500</text>
  <text x="666" y="206" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">• Proposal — 45 000</text>
  <text x="666" y="226" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">• Negotiation — 120 000</text>
  <text x="666" y="246" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total: 173 500</text>
  <rect x="654" y="370" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="664" y="384.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Ask a question…</text>
  <rect x="910" y="370" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="384.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Stop</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Any screen</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the drawer opens on top</text>
  <line x1="210" y1="77.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The question</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plain language</text>
  <line x1="1000" y1="77.0" x2="966" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tools used</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read queries only</text>
  <line x1="1000" y1="137.0" x2="940" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stop</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">keeps what was received</text>
  <line x1="1000" y1="347.0" x2="966" y2="381" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
</svg>

---

## Using it \{#use\}

Type a question and press Enter (Shift+Enter for a new line). The answer arrives as it is written, with the tools the assistant used; **Stop** interrupts it and keeps what was received; **new conversation** starts over. The conversation lives in the drawer: it is not kept after the page is reloaded.

Examples: *How many open orders per company this month?* — *Which users have not signed in since June?* — *Show the five largest invoices of ACME.*

---

## What it can do \{#tools\}

| Tool | Does | Setting |
|---|---|---|
| `list_connectors` | Lists the connectors, their queries and endpoints (descriptions, no SQL, no credentials). | **Connector tools** (on by default). |
| `sql_query` | Runs a **read** query of a SQL connector. Write queries are always refused. | **Connector tools**. |
| `api_call` | Calls an endpoint of an API connector. | **API tool** (off by default — an endpoint may change data). |
| Scaffold tools | Propose a query, a dictionary entry, a screen or a menu item; the user reviews the proposal and applies it. | **Scaffold tools** (off by default). |
| Web fetch | Reads pages of the allowed domains. | **Allowed domains** (none by default). |

The assistant only uses existing named queries: it does not write SQL against the database.

---

## Who can use it, and on what \{#access\}

- The user needs the `ai:chat` permission (a role's *AI assistant* rule, in **Beyond the menus**).
- **Allowed connectors** in Settings → App limits the connectors the assistant may reach; empty means all.
- Every query it runs goes through the same server checks as a screen: the user's [data scope](./build/secure/roles-and-permissions.md#data-scope) filters the rows.

---

## Settings \{#settings\}

In **Settings → App → AI Assistant**: **Enabled**, **Anthropic API key** (encrypted), **Model**, **Effort**, **Max tokens**, **Max tool iterations** (8), **Request timeout (s)**, **Adaptive thinking**, **System prompt**, the tools above and **Allowed connectors**. See [App settings](./build/settings-app.md#ai). Without a key, the drawer says the assistant is not configured.

---

## Tips \{#tips\}

- Give queries a clear label and description (Settings → Connectors): the assistant chooses its queries from them.
- Write dedicated read queries for the questions users ask often (totals per company, per month), rather than expecting the assistant to aggregate thousands of rows.
- Keep **API tool** off unless the endpoints are read-only.
