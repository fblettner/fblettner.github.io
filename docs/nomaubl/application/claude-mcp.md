---
title: Claude (MCP)
description: "NomaUBL in Claude Desktop, Claude Code and claude.ai through the MCP endpoint of the instance: turning it on, the MCP access role feature, the Claude Desktop extension, the sign-in from the client, personal tokens, what Claude can read, sample files, mapping work, changes when allowed, and the usage per user. For JD Edwards, SAP, NetSuite or a custom ERP alike."
keywords: [NomaUBL, MCP, Model Context Protocol, Claude, Claude Desktop, Claude Code, personal token, OAuth, extension, sample files, mapping, Explorer, JD Edwards, SAP, NetSuite, custom ERP]
---

# Claude (MCP)

The **MCP endpoint** lets a user question their NomaUBL instance from **Claude Desktop**, **Claude Code** or a **claude.ai connector**, under their own account: invoices and their history, validation errors, e-reporting, dashboards and period figures, the server log, the settings, the documentation. Invoices and e-reporting runs are those of the user's companies and data scope, as in the lists of the application. It is read-only unless the instance allows changes, off by default, and it needs a valid licence.

What goes to Anthropic in that case, and what does not, is described on [Data sent to Anthropic](./ai-data-sent.md).

---

## At a glance

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="umc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="umc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="umc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="umc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="350" rx="14" fill="url(#umc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Profile</text>
  <rect x="240" y="62" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="270.5" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Profile</text>
  <rect x="307" y="62" width="89" height="22" rx="5" fill="url(#umc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="351.5" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Claude (MCP)</text>
  <rect x="402" y="62" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="444.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Sample files</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="114" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connect Claude Desktop or Claude Code to NomaUBL under your account.</text>
  <text x="240" y="140" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVER ADDRESS</text>
  <rect x="240" y="146" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="160.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">https://nomaubl.example.com/mcp</text>
  <rect x="578" y="146" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <text x="240" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALIDITY</text>
  <rect x="240" y="198" width="194" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271.5" y="213.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">30 days</text>
  <rect x="304" y="199" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="334.5" y="213.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">90 days</text>
  <line x1="366" y1="203" x2="366" y2="217" stroke="#334155" strokeWidth="1"/>
  <text x="400.0" y="213.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">365 days</text>
  <rect x="444" y="199" width="100" height="22" rx="5" fill="url(#umc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="494.0" y="213.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Create a token</text>
  <text x="240" y="246" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLAUDE DESKTOP</text>
  <text x="240" y="262" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Download, open the file, then paste your token.</text>
  <rect x="240" y="270" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="281.5" y="284.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Extension</text>
  <text x="240" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">YOUR TOKENS</text>
  <rect x="240" y="322" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="339" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">nmu_4f2a91c7…</text>
  <text x="345" y="339" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">created here</text>
  <text x="425" y="339" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">created 19/11/2026 · expires 17/02/2027</text>
  <rect x="895" y="324" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="338.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Revoke</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Claude (MCP) tab</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">roles with MCP access</text>
  <line x1="200" y1="93.0" x2="337" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server address</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to give to Claude</text>
  <line x1="200" y1="157.0" x2="240" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Claude Desktop extension</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">address already filled in</text>
  <line x1="200" y1="279.0" x2="240" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="1000" y="192" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="207" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Token</text>
  <text x="1010" y="220" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown once, 30 / 90 / 365 days</text>
  <line x1="1000" y1="209.0" x2="546" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="1000" y="318" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Revoke</text>
  <text x="1010" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tokens and sign-ins from Claude</text>
  <line x1="1000" y1="335.0" x2="952" y2="335" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sample files tab</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every user · kept 7 days</text>
  <line x1="1000" y1="73.0" x2="488" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
</svg>

---

## Turn it on \{#enable\}

In **Settings → Global → AI**, group **MCP server** (this editor is in English in the application):

| Field | Default | Description |
|---|---|---|
| **MCP endpoint** | `N` | The instance answers at `/mcp`, for the users whose role has *MCP access*. |
| **Allow changes over MCP** | `N` | Claude may save analyses, mappings and documents when the user asks — see [Changes](#changes). Off: read only. |

Sign-in must be enabled on the instance: Claude always acts as a named user.

Behind a reverse proxy, fill in **Public address** in **Settings → Global → Authentication**: the sign-in from Claude uses it, as the password reset links do.

---

## Who may connect \{#access\}

Only the roles that have the **MCP access** feature ([Roles](../configuration/security/roles.md), tab *Access*) can connect Claude; no role has it by default. The other grants of the role then decide what Claude reaches:

| Tools | The role needs |
|---|---|
| Invoices, errors, lifecycle, e-reporting, dashboards, period figures, documentation | *MCP access*. Invoices and e-reporting runs are limited to the companies and the row filters of the role. |
| Server log | The **Server log** page. |
| IT dashboard | The **IT dashboard** page. |
| Data Explorer — model, fields, aggregations, saved analyses | The **Explorer** page. |
| PDF to XML conversion of a sample | The **Process Document** page, or **Settings access**. |
| Implementation report; setup review — configuration objects, configuration check, scheduled jobs, rule sets, licence state, system —; mapping work | **Settings access**. |

A role without a list of allowed pages reaches every page. An invoice outside the user's scope is answered as not found.

---

## Connect Claude \{#connect\}

The server address, the tokens and the extension are in the **Claude (MCP)** tab of the profile window (the user button of the top bar).

| Way | For | Steps |
|---|---|---|
| **Claude Desktop extension** | Claude Desktop, including for an instance that is not reachable from the internet. | **Extension** downloads a `.mcpb` file. Open it with Claude Desktop: the server address is already filled in, and the extension asks for the personal token. Nothing else to install. |
| **Sign-in from the client** | Claude Code; a claude.ai connector when the instance is reachable from the internet. | Give the client the **Server address** only. The browser opens NomaUBL: sign in as usual (password or SSO), then on *Connect Claude to NomaUBL* choose 30, 90 or 365 days and click **Allow** (or **Refuse**). |
| **Pasted token** | Claude Code, a script. | **Create a token**, copy it — *shown once, copy it now* — and give it to the client as the request header `Authorization: Bearer <token>`. |

The extension has four settings in Claude Desktop: **NomaUBL address**, **Personal token**, **Samples folder** (optional — the only folder Claude may send files from) and **Accept an internal certificate** (for a self-signed or company certificate). They are in the language of the interface the extension was downloaded from.

The extension carries the environment and the address of its instance in its name — *NomaUBL – prod · nomaubl.example.com* — so the extensions of several instances install side by side, each with its own token. Claude is told which instance it is talking to and says which one an answer concerns.

| Answer of the endpoint | Meaning |
|---|---|
| `404` | The MCP endpoint is off. |
| `401` | No token, or a token that is unknown, expired or revoked. |
| `403` | The role has no *MCP access*, or the instance has no valid licence. |

---

## Tokens \{#tokens\}

**Your tokens** lists the user's tokens and the accesses opened by a sign-in from Claude. Each line gives its origin — the name of the client the access was allowed for, or *created here* for a token created in this tab — and its creation and expiry dates; **Revoke** ends one at once. A token is valid 30, 90 or 365 days.

A password change — by the user or by an administrator — and the deactivation of the account remove the user's tokens: an account enabled again starts without any. A token also stops working when the role loses *MCP access*.

The server keeps a fingerprint of the token, never the token itself.

---

## What Claude can do \{#tools\}

| Subject | Claude can |
|---|---|
| **Invoices** | List invoices, read one in full (header, lines, VAT, validation errors, lifecycle with the platform's reasons), list the e-reporting runs. |
| **Figures** | Read the [Billing overview](./billing-overview.md), [Statistics](./statistics.md), [Operations](./dashboard.md) and [IT dashboard](./tech-dashboard.md) figures and the summary of a period. |
| **Data Explorer** | Run any aggregation of the [Explorer](./explorer.md) — grouping, measures, filters, period, Top N — and the saved analyses. |
| **Diagnosis** | Read the server log, the integrity checks, the status and reason codes, the e-directory, and follow the diagnostic playbooks. |
| **Setup review** | Read the configuration objects, the configuration check, the scheduled jobs, the rule sets, the licence state and the settings — secrets are never shown. |
| **Documentation** | Search and read the NomaUBL documentation and the implementation report of the instance. |
| **Samples and mapping** | Read the structure of an XML sample, convert a PDF sample with a document's settings, propose and check a mapping — see below. |

A result longer than 60,000 characters is cut, and Claude is asked to narrow its request.

---

## Sample files \{#samples\}

A customer's XML or PDF can be given to Claude to work on:

- from the profile window: **Sample files** tab, button **Add**;
- from Claude Desktop, which sends a file of the **Samples folder** chosen in the extension's settings, and of no other folder, when the user asks it to work on one.

Samples are `.xml` or `.pdf` files of 20 MB at most, 50 per user, kept 7 days and then removed by the server. They are working copies of one user: they are never processed as invoices nor sent to the platform.

The **Sample files** tab is shown to every user, with or without *MCP access*: a file attached in the [AI assistant](./ai-capabilities.md) is listed there too, and deleted there.

With a sample, Claude reads the structure of an XML, or converts a PDF with a document's settings and tries table anchors without saving. With **Settings access** it also does the mapping work of the [XSL editor](../ubl-tools/xsl-editor.md): it proposes the mapping of a sample (and, for a text PDF, the extraction rules), reads a document's saved mapping and the variables its rule set requires, checks a mapping on a sample and shows the UBL it gives. The sample follows the steps of a real run: a PDF converted as a text PDF or a JD Edwards PDF according to the document, the pre-processing stylesheet, the split into invoices, the sign inversion. Nothing is saved: Claude gives the values to enter in the mapping editor.

---

## Changes \{#changes\}

With **Allow changes over MCP**, Claude can, when the user asks:

| Change | The role needs |
|---|---|
| Save an Explorer analysis. | The **Explorer** page. |
| Save mapping values in a document's stylesheet. | **Settings access**. |
| Save a document's PDF to XML settings. | **Settings access**. |
| Create a document — by source: XML, PDF, UBL or connector, with its own blank stylesheet or from an existing one — or update its settings. | **Settings access**. |

Each source keeps its own rules: text PDF settings are refused on a JD Edwards document and the reverse, and a UBL document has no mapping. Passwords, tokens and keys cannot be set this way. The previous version stays in the [file history](../management/file-versions.md) or the configuration history, and every change is written to the server log with the user's name. Claude asks the user before a call that changes something.

---

## Usage \{#usage\}

The [AI usage](./diagnostics/ai-usage.md) view of Diagnostics lists the calls made from Claude under the channel *Claude (MCP)* — by user, by day and by tool, with those that failed and those that saved a change. The [server log](./diagnostics/server-log.md) holds one line per failed call and one per change; a successful read leaves no line.

---

## Tips & best practices

- **Grant *MCP access* to a dedicated role first.** The grants of the role are what Claude reaches: the Explorer page and Settings access open the corresponding tools.
- **Keep *Allow changes over MCP* off on production** until the mapping work is finished on a test instance; [Promotion](../management/promotion.md) then carries the result.
- **Prefer the extension for an internal server.** A claude.ai connector is called from the internet; the extension calls the instance from the user's computer.
- **Revoke rather than wait.** A token no longer used is ended from the profile in one click.
