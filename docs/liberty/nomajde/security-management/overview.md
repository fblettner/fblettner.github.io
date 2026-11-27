---
title: Security Management
description: "Security Management in Nomajde: the JD Edwards EnterpriseOne security of a user or a role — or of an application, a table, a menu task, a UDO or a module — read and changed on one page, each change made through the Security Workbench, UDO Security, Menu Filtering and Role Relationships screens and captured in the change package."
keywords: [Nomajde, JD Edwards, JDE E1, security management, Security Workbench, F00950, UDO security, F00950W, menu filtering, F9006, role relationships, F95921, "*PUBLIC", user, role, change package]
---

# Security Management

**Security Management** gathers the JD Edwards EnterpriseOne security of one user or one role on a single page, and changes it **where it is read**: the lines that apply, the roles held, the Security Workbench, the UDO security and the menus. A *Start from* switch turns the question round — start from an application, a table, a menu task, a UDO or a module, and the page answers *who* can use it.

Access: **Security Management**, the menu entry right after **Reviews**.

---

## At a glance

<svg viewBox="0 0 1320 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsmo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsmo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsmo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsmo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="440" rx="14" fill="url(#njsmo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security Management</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The security of a user or a role, edited where it is read.</text>
  <rect x="240" y="78" width="840" height="72" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START FROM</text>
  <rect x="312.4" y="88" width="84" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="354.4" y="100.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a user or role</text>
  <rect x="402.4" y="88" width="160" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="482.4" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">an application, form or report</text>
  <rect x="568.4" y="88" width="51" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="593.9" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a table</text>
  <rect x="625.4" y="88" width="46" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="648.4" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a menu</text>
  <rect x="677.4" y="88" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="697.9" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a UDO</text>
  <rect x="724.4" y="88" width="56" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="752.4" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a module</text>
  <rect x="252" y="114" width="500" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="129.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="262" y="130" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="326.79" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accounts Payable Manager</text>
  <text x="742" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240.0" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="249.0" y="171" width="18" height="18" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <text x="274.0" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Everything</text>
  <text x="274.0" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">all the lines that apply</text>
  <rect x="409.6" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="418.6" y="171" width="18" height="18" rx="5" fill="#f87171" fillOpacity="0.18"/>
  <text x="443.6" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="443.6" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">what it holds, who holds it</text>
  <rect x="579.2" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="588.2" y="171" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="613.2" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="613.2" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">the Security Workbench, a kind…</text>
  <rect x="748.8" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="757.8" y="171" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="782.8" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="782.8" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">user defined objects: feature…</text>
  <rect x="918.4" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="927.4" y="171" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="952.4" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="952.4" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">the tasks shown and hidden</text>
  <rect x="240" y="212" width="840" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARE WITH, OR COPY FROM</text>
  <rect x="252" y="230" width="420" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="242.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">another user or role…</text>
  <rect x="240.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">42</text>
  <text x="250.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES</text>
  <rect x="387.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="397.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="397.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ITS OWN</text>
  <rect x="534.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="544.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM ITS ROLES</text>
  <rect x="681.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="691.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">30</text>
  <text x="691.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM &#42;PUBLIC</text>
  <rect x="828.0" y="262" width="252.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="838.0" y="279" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JD EDWARDS LOOKS IN THIS ORDER</text>
  <text x="838.0" y="295" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_MANAGER › &#42;PUBLIC</text>
  <rect x="240" y="316" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="767" y="316" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="788.5" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="815" y="316" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.5" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="873" y="316" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="921" y="316" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.5" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="979" y="316" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1003.0" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="1032" y="316" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="240" y="346" width="840" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHERE</text>
  <text x="336" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="460" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON WHAT</text>
  <text x="670" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT SAYS</text>
  <text x="990" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <rect x="240" y="372" width="840" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="336" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="460" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="670" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="990" y="386.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">its own</text>
  <rect x="240" y="398" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="336" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="460" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">One View Watchlist · OVW0411A_01</text>
  <text x="670" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="990" y="412.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">its own</text>
  <rect x="240" y="424" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="336" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="460" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="670" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="990" y="438.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">&#42;PUBLIC</text>
  <text x="670" y="386.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="778.16" y="386.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="787.16" y="386.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="802.04" y="386.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Install Application (Y/N)</text>
  <text x="930.04" y="386.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="670" y="412.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Viewable: 1</text>
  <text x="670" y="438.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="778.16" y="438.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start from</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">six starting points</text>
  <line x1="200" y1="97.0" x2="252" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The user or role</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picker filtered by kind</text>
  <line x1="200" y1="147.0" x2="252" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for a user or a role</text>
  <line x1="200" y1="197.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What applies, and from where</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its own, its roles, &#42;PUBLIC</text>
  <line x1="200" y1="297.0" x2="240" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An object, a table, a menu…</text>
  <text x="1130" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the other starting points</text>
  <line x1="1120" y1="99.0" x2="446" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applications · UDO · Menus</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one tab per security table</text>
  <line x1="1120" y1="197.0" x2="999.1999999999999" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards order</text>
  <text x="1130" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the user, its roles, &#42;PUBLIC</text>
  <line x1="1120" y1="279.0" x2="948.0" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export · Import</text>
  <text x="1130" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a workbook, a sheet per table</text>
  <line x1="1120" y1="333.0" x2="1056.0" y2="327" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
</svg>

---

## Start from \{#start-from\}

The **Start from** switch at the top of the page chooses what the page is about. Each starting point has its own picker and its own tabs.

| Start from | What to pick | What the page shows | Page |
|---|---|---|---|
| **a user or role** | A user, a role or `*PUBLIC` | *Everything*, *Roles*, *Applications*, *UDO*, *Menus* | [A user or role](./user-or-role.md) |
| **an application, form or report** | An object, and optionally one version | *Who can use it*: every role with run, add, change, delete | [An application, form or report](./object.md) |
| **a table** | A table | *Who sees a column*, *Ranges of values* | [A table](./table.md) |
| **a menu** | A task view, then a task or a folder in the tree | The roles, with whether the task is shown to them | [A menu](./menu.md) |
| **a UDO** | A kind of UDO, then a UDO | The roles, with whether they see it | [A UDO](./udo.md) |
| **a module** | A module and a role, in the tab | *Secure a module*: the lines that open the module to the role | [Secure a module](./secure-a-module.md) |

The views are linked: a role listed in an object's view opens that role's security, and an object named in a role's lines opens the object's view.

---

## How changes are written \{#writes\}

The page holds no writing logic of its own. Every change goes through the JD Edwards screen that keeps the line:

- the **Security Workbench** screen for application, action, row, column and the other Security Workbench lines;
- the **UDO Security** screen for the UDO lines;
- the **Menu Filtering** screen for the menu tasks shown or hidden;
- the **Role Relationships** screen for the roles a user or a role holds.

A change is therefore checked against the screen's rules, stamped with who made it and when, and captured in the active [change package](../../nomaflow/change-packages.md) exactly as if it had been made in that screen. *Add a line* and *Copy* open the screen's own form over the page, with all its rules. The two actions that rebuild a whole security — copying one user's or role's security to another, rebuilding a role from the roles it holds — run the application's own *Import Security* and *Merge Roles* actions, step by step.

Changes made in a grid wait for **Save**; **Discard** drops them. Leaving the user or role with unsaved menu changes asks for a confirmation first.

---

## Access \{#access\}

The predefined roles **Security administrator** and **Administrator** include the page with the right to change, and the **Security Maintenance** screens the changes go through (see [Predefined roles](../overview.md#roles)).

---

## Tips & best practices \{#tips\}

- **Read before changing.** The *Everything* tab of a user lists every line that applies, from the user, its roles and `*PUBLIC`, in the order JD Edwards reads them.
- **Start from the question.** "What may this role do?" starts from the role; "who may run this application?" starts from the application. Both views change the same lines.
- **Simulate a large change first.** [Simulate Security](../reviews/simulate-security.md) shows what a user or a role would be allowed after a change, before anything is written.
- **Promote with the change package.** Every change made here is captured like one made in the screens: a security prepared in development travels to production as a reviewed bundle.
