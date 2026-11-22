---
title: Connect Claude (MCP)
description: "Use the Liberty Next assistant's tools from Claude Desktop, claude.ai or Claude Code: the MCP endpoint of the server, the mcp:use permission, the sign-in from the client, the Claude Desktop extension for a server that is not on the internet, personal access tokens, sending a file for a job, changes over MCP behind their own switch, and how an access is ended."
keywords: [Liberty Next, MCP, Model Context Protocol, Claude, Claude Desktop, Claude Code, custom connector, OAuth, sign-in, extension, personal access token, mcp:use, AI assistant, tools]
---

# Connect Claude (MCP)

The tools of the [AI assistant](./ai-assistant.md) can answer an external client — Claude Desktop, claude.ai, Claude Code — through the server's **MCP endpoint**, `/mcp`. The client acts as a Liberty Next user: it is offered what that user is offered in the chat drawer, each call goes through the same permission checks and the same data scope, and each call is recorded.

Three things are needed: the endpoint turned on, the `mcp:use` permission, and a way to connect — a sign-in from the client, the Claude Desktop extension, or a pasted **personal access token**.

What goes to Anthropic in that case, and what does not, is described on [Data sent to Anthropic](./ai-data-sent.md).

---

## At a glance

<svg viewBox="0 0 1200 544" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="504" rx="14" fill="url(#mcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <circle cx="300" cy="54" r="18" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="300" y="59" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <text x="328" y="58" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">John Doe</text>
  <rect x="400" y="47" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="420.0" y="58.2" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">admin</text>
  <rect x="898" y="42" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.0" y="57.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="260" y1="86" x2="940" y2="86" stroke="#1f2937" strokeWidth="1"/>
  <text x="284" y="106" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Profile</text>
  <text x="353.2" y="106" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Security</text>
  <text x="428.0" y="106" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Access tokens</text>
  <line x1="422.0" y1="116" x2="506.8" y2="116" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="260" y1="117" x2="940" y2="117" stroke="#1f2937" strokeWidth="1"/>
  <rect x="280" y="130" width="640" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="147" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">A personal access token lets an external client — Claude, through a custom connector —</text>
  <text x="292" y="161" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">use the assistant's tools as you: with your permissions and your data scope, never more.</text>
  <text x="280" y="192" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Connector URL</text>
  <text x="920" y="192" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">https://liberty.example.com/mcp</text>
  <text x="280" y="214" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">YOUR TOKEN — THE CONNECTOR'S REQUEST HEADER: AUTHORIZATION: BEARER &lt;TOKEN&gt;</text>
  <rect x="280" y="220" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="235.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">eyJhbGciOiJIUzI1NiJ9…x9Lk</text>
  <rect x="280" y="252" width="640" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="268" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Copy it now: it is shown once and not stored. It expires on 02/20/2027.</text>
  <rect x="280" y="284" width="50" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="305.0" y="297.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Copy</text>
  <rect x="280" y="316" width="640" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">A token also ends when your account is deactivated or loses the permission, and when you change</text>
  <text x="292" y="347" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">your password — do that if a token leaks. End access stops a client connected by sign-in.</text>
  <text x="280" y="374" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNECTED BY SIGN-IN</text>
  <text x="280" y="397" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Claude · last used 11/19/2026</text>
  <rect x="851" y="385" width="69" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="885.5" y="398.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">End access</text>
  <text x="280" y="425" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Claude Code · last used 11/17/2026</text>
  <rect x="851" y="413" width="69" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="885.5" y="426.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">End access</text>
  <rect x="280" y="444" width="145" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="458.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Claude Desktop extension</text>
  <line x1="260" y1="480" x2="940" y2="480" stroke="#1f2937" strokeWidth="1"/>
  <rect x="860" y="490" width="60" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="890.0" y="505.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="20" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Access tokens tab</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the mcp:use permission</text>
  <line x1="220" y1="109.0" x2="422.0" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="176" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector URL</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to give to Claude</text>
  <line x1="220" y1="193.0" x2="280" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="236" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown once</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never stored on the server</text>
  <line x1="220" y1="253.0" x2="280" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="438" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="453" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Claude Desktop extension</text>
  <text x="30" y="466" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">named after its instance</text>
  <line x1="220" y1="455.0" x2="280" y2="455" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="980" y="214" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="229" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The request header</text>
  <text x="990" y="242" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Authorization: Bearer …</text>
  <line x1="980" y1="231.0" x2="920" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="980" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients that signed in</text>
  <text x="990" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one ended, the others kept</text>
  <line x1="980" y1="307.0" x2="920" y2="397" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="980" y="476" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="491" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before a token: Valid for (days)</text>
  <text x="990" y="504" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then Create a token</text>
  <line x1="980" y1="493.0" x2="920" y2="502" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
</svg>

---

## Turn the endpoint on \{#enable\}

In **Liberty Next → Administer → App → AI Assistant**:

| Field | Default | Description |
|---|---|---|
| **MCP endpoint (/mcp)** | Off | The server answers on `/mcp`. Applied on save, without a restart. |
| **Allow changes over MCP** | Off | Off: an external client reads only. On: the tools that save something are offered to it — see [Changes](#changes). Read at each request. |
| **Personal access token: longest life (days)** | 366 | The longest validity a user may ask for a token, and how long a sign-in from a client lasts before the user allows it again. |

Behind a reverse proxy, also set **Public address** (same page, *Server*) to the address users reach the server at: the addresses the sign-in publishes are built on it.

The endpoint needs the `mcp` extra of the package (`pip install "liberty-next[mcp]"`); `liberty-next[all]` and the Docker image include it.

---

## Grant the permission \{#permission\}

In **Liberty Next → Administer → Access**, give the role the rule **AI assistant → AI tools from an external client (MCP) — create a personal access token** (`mcp:use`), in **Beyond the menus**. The user then sees the **Access tokens** tab in their profile; a superuser always does.

`mcp:use` only opens the endpoint: what the client reaches still depends on the user's other permissions — see [Who can use it, and on what](./ai-assistant.md#access).

---

## Connect the client \{#connect\}

| Way | For | Steps |
|---|---|---|
| **Sign-in from the client** | A custom connector in Claude Desktop or claude.ai. The connector is called from Anthropic's servers: the Liberty server must be reachable from the internet. | Give the connector the address of `/mcp` only. The browser opens Liberty: the user signs in the usual way (password or SSO), then, on the **Allow access** page — *the client asks to use the application as the user* — clicks **Allow** (or **Refuse**). The page says whether the server lets the client make changes, and how many days the access lasts. Nothing to create, nothing to paste. |
| **Claude Desktop extension** | A server that is not on the internet: an internal address, a VPN. | In the profile's **Access tokens** tab, **Claude Desktop extension** downloads a `.mcpb` file named after the server. Open the file with Claude Desktop and paste a token created in the same tab — see [below](#extension). |
| **Pasted token** | Claude Code, a script. | [Create a token](#token) and give it to the client as the request header `Authorization: Bearer <token>`, with the **Connector URL** of the tab — `https://<server>/mcp`. |

| Answer | Meaning |
|---|---|
| `404` | The endpoint is off. |
| `401` | No token, or a token that is invalid or ended. |

---

## Create a token \{#token\}

The user opens their profile — their name in the top bar — then **Access tokens**:

1. **Valid for (days)**: 90 by default. A longer validity than the server allows is shortened to the server's maximum; the expiry date shown with the token is the one that applies.
2. **Create a token**.
3. The token takes the place of the validity field, with its expiry date: copy it (**Copy**) — *it is shown once and not stored*. **Close** leaves the tab; the next visit offers a new token.

The tab also gives the **Connector URL**, the address of the server followed by `/mcp`.

---

## The Claude Desktop extension \{#extension\}

The extension runs a small relay on the user's own computer: it passes Claude's messages to `/mcp` with the user's personal access token, so the server only has to be reachable from that computer. The file is built at download with the server's address filled in and carries no secret. Nothing to install: Claude Desktop brings what the relay needs.

| Setting in Claude Desktop | Content |
|---|---|
| **Liberty address** | The address of the server, ending with `/mcp` — already filled in. |
| **Personal access token** | A token created in the profile's **Access tokens** tab. |
| **Files folder** | Optional. The folder Claude may send a file from, for a job that loads one — see [below](#files). |
| **Accept an internal certificate** | To turn on only when the server uses a self-signed or company certificate. |

The settings are in French when the extension is downloaded from a French interface.

**Several servers in one Claude Desktop.** The extension is named after its instance — the installation's **Environment** (Administer → App → Server) and the host of its address: *Liberty Next – Test · liberty-test.example.com*. The extensions of a production and a test server, or of two customers, install side by side, each with its own token. The server also tells Claude which instance it is, so an answer or a change names the instance it concerns.

### Send a file for a job \{#files\}

With a **Files folder**, the extension offers two tools that run on the user's computer: one lists the spreadsheets and delimited files of that folder — `.xlsx`, `.xlsm`, `.csv`, `.txt`, `.tsv` —, the other sends one of them to Liberty for a job. The file lands in the job's own upload area, as from the job's page, with the same size limit; nothing runs on the upload, and `job_run` then names the file.

Sending a file needs what running the job needs: the **Write tools** and **Allow changes over MCP** settings, `ai:write` and `job:<id>`. A connector by sign-in has no access to the user's disk: the file is then loaded from the job's page.

---

## What the client can do \{#tools\}

- The client is offered the tools the user is offered in the chat drawer, with the same descriptions; a tool the user cannot use is not listed.
- Every call checks the user's permissions and applies their [data scope](./build/secure/roles-and-permissions.md#data-scope), as in the drawer; the columns the installation [marks as sensitive](./ai-data-sent.md#sensitive) are left out in the same way.
- The tools whose result is a card of the chat drawer are not offered: the scaffold proposals and the notes.
- A personal access token opens the MCP endpoint only: the rest of the API refuses it.

---

## Changes over MCP \{#changes\}

In the drawer a change is a card the user applies. Over MCP the only gate is the client's own approval, which its user can set to *always allow*: an administrator therefore decides whether changes are made from an external client at all.

| **Allow changes over MCP** | The client |
|---|---|
| Off (default) | Reads only. The tools that save are not listed; called anyway, they answer that changes over MCP are off on this server. |
| On | Is also offered the tools that save: a Data Explorer analysis or dashboard, [a record, an action or a job through the write tools](./ai-assistant.md#write). Each still needs its own switch and the user's permissions, and tells the client it changes something — the client asks its user before calling it. |

Every change made this way is listed in [Monitoring → AI usage](../monitoring/ai-usage.md#changes).

---

## When an access ends \{#end\}

The account is read again at every call, so an access carries the user's rights of the moment, never more.

| Access | Ends |
|---|---|
| **A sign-in from a client** | When its user ends it: the profile's **Access tokens** tab lists the clients under **Connected by sign-in** — the client's name and its last use — and **End access** stops one from its next call, the others kept. Otherwise after the **longest life** set above; the user then allows the client again. |
| **A pasted token** | At its expiry date. It is not stored, so it is not listed. |
| **Both** | When the account is deactivated or loses `mcp:use`, and when the account's password changes. |

**Changing the password ends every access of the account** — tokens and sign-ins alike. That is what to do when a token has leaked.

A superuser reads every user's clients with `GET /oauth/grants?everyone=1`.

---

## What is recorded \{#usage\}

Each call is in the usage record, under the channel *External client (MCP)*: the user, the tool, what it was called on, whether it failed, its size and its time — never a row it returned nor a value it wrote. See [Monitoring → AI usage](../monitoring/ai-usage.md).

---

## Tips \{#tips\}

- Prefer the sign-in for a server on the internet, the extension for an internal one: neither asks the user to handle a secret by hand more than once.
- Grant `mcp:use` to the roles that already use the assistant in the application; the answers depend on the same `sql:` and `explorer:` permissions.
- Serve the endpoint over HTTPS only: the token travels in a request header.
