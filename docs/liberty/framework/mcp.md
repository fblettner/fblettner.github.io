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

<svg viewBox="0 0 1200 432" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="392" rx="14" fill="url(#mcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <text x="240" y="256" fill="#fb923c" fontSize="9.5" fontFamily="system-ui, sans-serif">Copy it now: it is shown once and not stored. It expires on 17/02/2027.</text>
  <text x="240" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTED BY SIGN-IN</text>
  <rect x="240" y="290" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="307" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Claude · last used 19/11/2026</text>
  <rect x="876" y="292" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.0" y="306.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">End access</text>
  <rect x="240" y="320" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="337" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Claude Code · last used 17/11/2026</text>
  <rect x="876" y="322" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.0" y="336.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">End access</text>
  <line x1="240" y1="362" x2="960" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="374" width="156" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="318.0" y="388.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Claude Desktop extension</text>
  <rect x="860" y="374" width="100" height="22" rx="5" fill="url(#mcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="910.0" y="388.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Create a token</text>
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
  <rect x="20" y="368" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Claude Desktop extension</text>
  <text x="30" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">named after its instance</text>
  <line x1="200" y1="385.0" x2="240" y2="385" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Validity</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">90 days, capped by the server</text>
  <line x1="1000" y1="167.0" x2="692" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="208" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="223" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The request header</text>
  <text x="1010" y="236" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Authorization: Bearer …</text>
  <line x1="1000" y1="225.0" x2="856" y2="225" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="286" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="301" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients that signed in</text>
  <text x="1010" y="314" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one ended, the others kept</text>
  <line x1="1000" y1="303.0" x2="956" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="368" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One token per click</text>
  <text x="1010" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pasted tokens are not listed</text>
  <line x1="1000" y1="385.0" x2="958" y2="385" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
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
3. Copy the token (**Copy**): *it is shown once and not stored*.

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
