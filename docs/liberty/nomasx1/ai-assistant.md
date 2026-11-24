---
title: AI assistant
description: "What the AI assistant knows in Nomasx-1: two read-only tools that count on the server one user's segregation-of-duties conflicts and the licence position of any connected application, three procedures, the starter questions and the five screens that have their own — always under the screens' own permissions and the user's data scope."
keywords: [Nomasx-1, AI assistant, MCP, Claude Desktop, Claude Code, segregation of duties, SoD conflicts, licence position, licence compliance, exposure, playbooks, starter questions, JD Edwards, SAP, NetSuite, custom ERP]
---

# AI assistant

The assistant of Liberty Next — the **Assistant** button at the top right — knows Nomasx-1: it answers questions on the accounts, the roles, the segregation-of-duties conflicts and the licences of every connected application, with the same data as the screens, and follows Nomasx-1's procedures step by step. The same tools are offered to an MCP client (Claude Desktop, Claude Code…) connected to the installation.

How the assistant works — the drawer, the conversations, the cards to approve — is described in the [Liberty Next documentation](../framework/ai-assistant.md). This page lists what Nomasx-1 adds.

---

## At a glance

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="370" y="20" width="460" height="290" rx="14" fill="url(#nxai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="390" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="390" y="64" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Page: SOD - Details · filters: 1 · the clicked row</text>
  <text x="810" y="64" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">×</text>
  <line x1="378" y1="74" x2="822" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="390" y="88" width="250" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="515.0" y="101.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Which role pair explains the conflict I clicked?</text>
  <rect x="390" y="114" width="236" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="508.0" y="127.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Which users share the conflicts in this list?</text>
  <rect x="390" y="150" width="420" height="104" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="400" y="158" width="110" height="15" rx="7.5" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="455.0" y="168.7" fill="#c084fc" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1_user_conflicts</text>
  <text x="400" y="190" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">JDOE — 12 conflict lines, 3 proven, 4 risks in conflict.</text>
  <text x="400" y="203" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Highest first: Procure to Pay · Enter and approve a voucher (H).</text>
  <text x="400" y="216" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">AP_CLERK × AP_MGR gives both sides of 9 lines:</text>
  <text x="400" y="229" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">take one role away from the user, or split the duties.</text>
  <text x="400" y="242" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Account enabled, last login 18/11/2026.</text>
  <rect x="390" y="266" width="420" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="281.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Type a message…</text>
  <rect x="110" y="46" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="120" y="61" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The screen tells it</text>
  <text x="120" y="74" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen, filters, the clicked row</text>
  <line x1="340" y1="63.0" x2="390" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="110" y="100" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="120" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Starters of the screen</text>
  <text x="120" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">five screens have their own</text>
  <line x1="340" y1="117.0" x2="390" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="110" y="214" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="120" y="229" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Counted on the server</text>
  <text x="120" y="242" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">totals exact, first lines listed</text>
  <line x1="340" y1="231.0" x2="400" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="860" y="150" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two read-only tools</text>
  <text x="870" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conflicts of a user · licence position</text>
  <line x1="860" y1="167.0" x2="530" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="860" y="46" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="61" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stop sending the page</text>
  <text x="870" y="74" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× on the context line</text>
  <line x1="860" y1="63.0" x2="808" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="860" y="240" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Same tools over MCP</text>
  <text x="870" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Claude Desktop, Claude Code…</text>
  <line x1="860" y1="257.0" x2="810" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
</svg>

---

## What you can ask \{#tools\}

Two tools, **both read-only**: they read what Nomasx-1 has collected, never change anything. Each one answers in a single call a question that would otherwise take several screens and a count — and the count is made on the server, so the totals are exact even on a long list.

| Tool | What it answers | For example |
|---|---|---|
| **A user's conflicts** (`nomasx1_user_conflicts`) | One user's segregation-of-duties conflicts, counted. | *What are JDOE's conflicts, and which role should I take away?* |
| **Licence position** (`nomasx1_licence_position`) | Where the JD Edwards licences stand, for one application or all, as the [Licensing review](./licensing-review.md) reads them: missing seats, modules no line covers, lines counted another way, and the estimate. | *Which modules are missing seats, and what could it cost?* |

### A user's conflicts \{#user-conflicts\}

Given a user ID — and an application when the user exists in several — the tool returns:

- **the conflict lines** of the user, and how many of them belong to a conflict the user **exercised**: both activities done, according to Object Usage Tracking, the activity log or the tables written — the same reading as the [Segregation of duties review](./sod-review.md#same-statement) and [Conflicts — Proven](./applications/conflicts/proven.md);
- **the risks in conflict**, per process, with their level — the highest first, then the most exercised;
- **the role, or the pair of roles, that gives both sides**, with what to do about it: one role on both sides is corrected in the role itself, and every holder is fixed; two roles together call for taking one away from the user, or for splitting the duties;
- **the first conflict lines**, each with its two activities, objects and roles;
- **the account**: its status, its creation date and its last login, per application.

A user with no conflict gets a note saying so — with a reminder to check the user ID and the date of the SOD collection on **Last Refresh**. Beyond 5,000 lines, the counts cover the first 5,000 and the answer asks to narrow it to one application.

### Licence position \{#licence-position\}

For one application, or every application the user may see, the tool reads the same position as the [Licensing review](./licensing-review.md) and returns:

- **per application**: the people counted and on what basis — the modules they used, or the modules their security allows for those who signed in within the application's period —, the missing seats, the people on a module no line covers, and the **estimate** at public list price with three years of support;
- **the lines that are full**, the **missing seats** and the **modules not covered**, per module, with their estimate;
- **the lines counted another way** — revenue, employees, processors, Named User Plus — against what is declared or counted.

The answer always carries the same warning as the page: a reading of the contracts applied to what was collected, an assumption to discuss with Oracle, never a certified position — and the assistant says so. The rules are those of [How a contract is counted](./how-a-contract-is-counted.md).

The lists are cut to what a model can read — 20 risks, 15 role pairs, 15 conflict lines, 40 components — and the answer says how many lines it left out. The full lists stay on the screens, where they can be exported.

---

## The procedures it follows \{#playbooks\}

| Playbook | What the assistant does |
|---|---|
| **Run the Security & SoD assessment report** | Checks on **Last Refresh** that the SECURITY and SOD modules ran after the last change (and offers to run the collection), then walks through the [security report](./reports/security-sox.md): its parameters, its findings and their severity, and how to fix a self-conflicting role. |
| **Run the licence audit** | Checks the inputs — contracts, prices, system codes — and the usage collected, then walks through the [licence audit report](./reports/audit-licences.md) and the sections to read first. |
| **Investigate a segregation-of-duties conflict** | Starts from the user's conflict lines, tells a self-conflicting role from a pair of roles, puts the exercised conflicts first, and has the collections run again after the change in the source system. |

---

## Starter questions \{#starters\}

On an empty conversation in Nomasx-1, the questions are grouped by subject: **Accounts** (*How many users are enabled, and how many have not logged in for 90 days?*…), **Segregation of duties** (*Which users carry a segregation-of-duties conflict, and in which process?*…), **Licences** (*Which licence components are deployed beyond the subscription, and what is the exposure?*…) and **Data and reports** (*When was each module last collected?*…).

Five screens have questions of their own, which take the place of the application's:

| Screen | Questions |
|---|---|
| [Security → Users](./security/users.md) | *Which users in this list have not logged in for 90 days?* · *Which users here are privileged, technical or generic?* · *Explain the status and the dates of the user I clicked* |
| [Conflicts → Summary](./applications/conflicts/summary.md) | *Which process carries the most conflicts?* · *Which risks are the most critical in this summary?* · *How do I fix a self-conflicting role?* |
| [Conflicts → Details](./applications/conflicts/details.md) | *Which role pair explains the conflict I clicked?* · *Which users share the conflicts in this list?* |
| [Reviews → Licences](./licensing-review.md) | *Which modules are missing seats?* · *Who uses a module no line covers?* · *How is a bundle counted?* |
| **Last Refresh** | *Which module is the most out of date?* · *How do I refresh the security data?* |

Every screen tells the assistant what is on it — the screen, its filters, the row clicked — so that *this user* or *the conflict I clicked* needs no explanation. The line under the assistant's header shows what is sent; its **×** stops it for as long as the user stays on the page.

---

## Who can use it \{#access\}

A tool is offered to whoever reads the screens it stands on, **through the menu grants of their roles**: the conflicts tool to a role that opens **Applications → Conflicts → Details**, the licence tool to a role that may read the licence position, as the [Licensing review](./licensing-review.md#access) does. Nothing more to grant — the four [predefined roles](./overview.md#roles) (Auditor, Security officer, Licence manager, Administrator) have both, and the assistant itself needs `ai:chat`, which they hold as well.

The user's **data scope** applies as it does on the screens: a user limited to some applications gets the conflicts and the licences of those applications only, and *all applications* means all those the user may see.

---

## Related

- [AI assistant](../framework/ai-assistant.md) — how the assistant works in Liberty Next.
- [MCP](../framework/mcp.md) — the same tools from Claude Desktop or Claude Code.
- [Conflicts — Details](./applications/conflicts/details.md) · [Licensing review](./licensing-review.md) · [Audit synthesis](./audit-synthesis.md).
