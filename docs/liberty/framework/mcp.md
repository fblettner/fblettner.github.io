---
title: Connect Claude (MCP)
description: "Use the Liberty Next assistant's tools from Claude Desktop, claude.ai or Claude Code: the MCP endpoint of the server, the mcp:use permission, personal access tokens created in the user's profile, the custom connector to declare, what the client can do and when a token ends."
keywords: [Liberty Next, MCP, Model Context Protocol, Claude, Claude Desktop, Claude Code, custom connector, personal access token, mcp:use, AI assistant, tools]
---

# Connect Claude (MCP)

The tools of the [AI assistant](./ai-assistant.md) can answer an external client — Claude Desktop, claude.ai, Claude Code — through the server's **MCP endpoint**, `/mcp`. The client acts as a Liberty Next user: it is offered what that user is offered in the chat drawer, each call goes through the same permission checks and the same data scope, and each call is recorded.

Three things are needed: the endpoint turned on, the `mcp:use` permission, and a **personal access token** the user creates in their profile.

---

## At a glance

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#mcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Profile</text>
  <rect x="240" y="62" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="270.5" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Profile</text>
  <rect x="307" y="62" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="340.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Security</text>
  <rect x="379" y="62" width="94" height="22" rx="5" fill="url(#mcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="426.0" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Access tokens</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="116" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A personal access token lets an external client — Claude, through a custom connector —</text>
  <text x="240" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">use the assistant's tools as you: with your permissions and your data scope, never more.</text>
  <text x="240" y="156" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR URL</text>
  <rect x="240" y="162" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">https://liberty.example.com/mcp</text>
  <text x="600" y="156" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALID FOR (DAYS)</text>
  <rect x="600" y="162" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="176.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <text x="240" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">YOUR TOKEN — THE CONNECTOR'S REQUEST HEADER: AUTHORIZATION: BEARER &lt;TOKEN&gt;</text>
  <rect x="240" y="214" width="560" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">7Qd2mVx4…x9Lk</text>
  <rect x="810" y="214" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.0" y="228.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <text x="240" y="256" fill="#fb923c" fontSize="9.5" fontFamily="system-ui, sans-serif">Copy it now: it is shown once and not stored. It expires on 16/02/2027.</text>
  <text x="240" y="278" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A token also ends when your account is deactivated or loses the permission,</text>
  <text x="240" y="292" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">and when you change your password — do that if a token leaks.</text>
  <line x1="240" y1="310" x2="960" y2="310" stroke="#1f2937" strokeWidth="1"/>
  <rect x="860" y="322" width="100" height="22" rx="5" fill="url(#mcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="910.0" y="336.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Create a token</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Access tokens tab</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the mcp:use permission</text>
  <line x1="200" y1="93.0" x2="409" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="156" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="171" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector URL</text>
  <text x="30" y="184" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to paste in Claude</text>
  <line x1="200" y1="173.0" x2="240" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown once</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never stored on the server</text>
  <line x1="200" y1="257.0" x2="240" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Validity</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">90 days, capped by the server</text>
  <line x1="1000" y1="167.0" x2="692" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="208" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="223" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The request header</text>
  <text x="1010" y="236" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Authorization: Bearer …</text>
  <line x1="1000" y1="225.0" x2="856" y2="225" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One token per click</text>
  <text x="1010" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no list, no revoke button</text>
  <line x1="1000" y1="333.0" x2="958" y2="333" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
</svg>

---

## Turn the endpoint on \{#enable\}

In **Liberty Next → Administer → App → AI Assistant**:

| Field | Default | Description |
|---|---|---|
| **MCP endpoint (/mcp)** | Off | The server answers on `/mcp`. Applied on save, without a restart. |
| **Personal access token: longest life (days)** | 366 | The longest validity a user may ask for. |

The endpoint needs the `mcp` extra of the package (`pip install "liberty-next[mcp]"`); `liberty-next[all]` and the Docker image include it.

---

## Grant the permission \{#permission\}

In **Liberty Next → Administer → Access**, give the role the rule **AI assistant → AI tools from an external client (MCP) — create a personal access token** (`mcp:use`), in **Beyond the menus**. The user then sees the **Access tokens** tab in their profile; a superuser always does.

`mcp:use` only opens the endpoint: what the client reaches still depends on the user's other permissions — see [Who can use it, and on what](./ai-assistant.md#access).

---

## Create a token \{#token\}

The user opens their profile — their name in the top bar — then **Access tokens**:

1. **Valid for (days)**: 90 by default. A longer validity than the server allows is shortened to the server's maximum; the expiry date shown with the token is the one that applies.
2. **Create a token**.
3. Copy the token (**Copy**): *it is shown once and not stored*.

The tab also gives the **Connector URL**, the address of the server followed by `/mcp`.

---

## Declare the connector in Claude \{#connect\}

In the client, add a custom connector with:

| Setting | Value |
|---|---|
| URL | The **Connector URL** of the tab — `https://<server>/mcp`. |
| Request header | `Authorization: Bearer <token>` |

| Answer | Meaning |
|---|---|
| `404` | The endpoint is off. |
| `401` | No token, or a token that is invalid or ended. |

---

## What the client can do \{#tools\}

- The client is offered the tools the user is offered in the chat drawer, with the same descriptions; a tool the user cannot use is not listed.
- Every call checks the user's permissions and applies their [data scope](./build/secure/roles-and-permissions.md#data-scope), as in the drawer.
- The tools whose result is a card of the chat drawer are not offered: the scaffold proposals and the notes.
- A tool that saves something — a Data Explorer analysis or dashboard — tells the client so, which lets it ask for a confirmation.
- A personal access token opens the MCP endpoint only: the rest of the API refuses it.

---

## When a token ends \{#end\}

The account is read again at every call, so a token carries the user's rights of the moment, never more. It ends:

- at its expiry date;
- when the account is deactivated, or loses `mcp:use`;
- when the account's password changes.

There is no list of tokens and no button to revoke one: **changing the password ends every token of the account**. That is what to do when a token has leaked.

---

## What is recorded \{#usage\}

Each call is in the usage record, with the model `mcp`: the user, the tool, what it was called on, whether it failed, its size and its time — never a row it returned. See [Monitoring → AI usage](../monitoring/ai-usage.md).

---

## Tips \{#tips\}

- Keep the validity short for a first trial, and create a new token rather than sharing one: a token is the user's own access.
- Grant `mcp:use` to the roles that already use the assistant in the application; the answers depend on the same `sql:` and `explorer:` permissions.
- Serve the endpoint over HTTPS only: the token travels in a request header.
