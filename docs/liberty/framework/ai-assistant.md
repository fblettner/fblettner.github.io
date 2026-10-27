---
title: AI assistant
description: "The Liberty Next AI assistant: the drawer opened from the AI Assistant button, what it can do (read the connectors' queries, call API endpoints, propose configuration, read allowed web pages), how it is restricted (ai:chat, allowed connectors, read-only queries, data scope), and its settings."
keywords: [Liberty Next, AI assistant, Anthropic, Claude, ai:chat, tools, list_connectors, sql_query, api_call, scaffold, data scope]
---

# AI assistant

**AI Assistant**, at the right of the top bar, opens a drawer where users ask questions about their data in plain language. The assistant answers by running the connectors' queries, with the user's rights.

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
