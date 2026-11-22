---
title: Roles and permissions
description: "Liberty Next roles: what a role grants, edited on the application's own menu tree (follows its folder / read / read and change / hidden per folder or entry, the server working out what the screens need), the predefined roles the applications ship, the rules beyond the menus, and the data scope that restricts which rows a role sees — by company, by any dictionary item, from a user attribute."
keywords: [Liberty Next, roles, permissions, Settings Access, menu tree, read, read and change, hidden, predefined roles, duplicate role, data scope, row-level security, dd_prefix, user attributes, "#USER", auth.toml]
---

# Roles and permissions

A role answers two questions: **what** its holders may open (menus, queries, dashboards, the assistant) and **which rows** they see. Users receive roles; a user with several roles gets the sum of them. A role is mostly a few ticks on the application's menu — a folder in read, another in read and change —, and the applications ship ready-made ones.

Roles are edited in **Liberty Next → Administer → Access → Roles**. The role list is on the left, under **Add role** and **Add a predefined role…**; the selected role opens in a panel with two tabs: **Access** and **Data scope**.

:::info[JD Edwards roles]
This page is about the roles of Liberty Next itself. JD Edwards EnterpriseOne roles and their security are managed in Nomajde.
:::

---

## At a glance

<svg viewBox="0 0 1320 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="724" rx="14" fill="url(#accr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <rect x="974" y="32" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1027.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <rect x="240" y="66" width="415.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="254" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Accounts, their roles and attributes</text>
  <rect x="665.0" y="66" width="415.0" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="679.0" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="679.0" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What each role may open and the data it sees</text>
  <rect x="334" y="120" width="96" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="382.0" y="134.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add role</text>
  <rect x="240" y="150" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Add a predefined role…  ▾</text>
  <rect x="240" y="184" width="190" height="50" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="202" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="252" y="216" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Full access (wildcard).</text>
  <rect x="369.48" y="207" width="64" height="13" rx="6.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="401.48" y="216.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <text x="252" y="228" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="240" y="242" width="190" height="50" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="260" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">sales_manager</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales team</text>
  <text x="252" y="286" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">5 rule(s)</text>
  <rect x="240" y="300" width="190" height="50" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="318" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">reader</text>
  <text x="252" y="332" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Read-only users</text>
  <text x="252" y="344" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 rule(s)</text>
  <rect x="444" y="120" width="636" height="614" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="144" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales_manager</text>
  <rect x="984" y="130" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1024.0" y="144.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <line x1="444" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="173" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="456" y1="181" x2="495.92" y2="181" stroke="#4a9eff" strokeWidth="2"/>
  <text x="524" y="173" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Data scope</text>
  <line x1="444" y1="182" x2="1080" y2="182" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE NAME</text>
  <text x="624" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="460" y="205" width="154" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="470" y="219.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales_manager</text>
  <rect x="624" y="205" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="634" y="219.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Orders and customers: read and change. The rest: read.</text>
  <text x="460" y="250" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <rect x="510" y="237" width="168" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="511" y="238" width="77" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="549.5" y="250.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ No access</text>
  <line x1="589" y1="242" x2="589" y2="252" stroke="#334155" strokeWidth="1"/>
  <text x="633.5" y="250.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Full access</text>
  <text x="688" y="250" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">nothing, plus what you allow below</text>
  <text x="460" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="460" y="295" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Tick a folder or an entry. The role is given what its screens need: their lists, the tabs of their record form and —</text>
  <text x="460" y="306" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">with “Read and change” — what they save and run. A folder ticked once also covers the screens an upgrade adds to it.</text>
  <text x="460" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">– Follows its folder</text>
  <text x="585.2" y="324" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">Read</text>
  <path d="M561.2,317 L565.2,318.2 L569.2,317 L569.2,324 L565.2,325.2 L561.2,324 Z M565.2,318.2 L565.2,325.2" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="622.24" y="324" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">✎ Read and change</text>
  <text x="721.16" y="324" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">⊘ Hidden</text>
  <rect x="460" y="334" width="604" height="284" rx="7" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <rect x="460" y="334" width="604" height="28" rx="7" fill="#1e293b" stroke="#1f2937" strokeWidth="1"/>
  <text x="470" y="352" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="494" y="352" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 6 of 7 shown</text>
  <text x="958" y="352" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">the whole application</text>
  <rect x="966" y="339" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="351.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="989" y="340" width="20" height="16" rx="3" fill="rgba(50,215,75,0.18)"/>
  <line x1="988" y1="342" x2="988" y2="354" stroke="#334155" strokeWidth="1"/>
  <path d="M994,344 L999,345.5 L1004,344 L1004,352 L999,353.5 L994,352 Z M999,345.5 L999,353.5" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <line x1="1010" y1="342" x2="1010" y2="354" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="351.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="342" x2="1032" y2="354" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="351.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="364" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="392" x2="1064" y2="392" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="382" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Sales</text>
  <rect x="966" y="369" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="381.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="372" x2="988" y2="384" stroke="#334155" strokeWidth="1"/>
  <path d="M994,374 L999,375.5 L1004,374 L1004,382 L999,383.5 L994,382 Z M999,375.5 L999,383.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <rect x="1011" y="370" width="20" height="16" rx="3" fill="rgba(74,158,255,0.20)"/>
  <line x1="1010" y1="372" x2="1010" y2="384" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="381.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="372" x2="1032" y2="384" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="381.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="392" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="420" x2="1064" y2="420" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="410" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="602" y="410" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">3 to read · 4 to change</text>
  <text x="938" y="410" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <text x="952" y="410" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="397" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="398" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="409.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="400" x2="988" y2="412" stroke="#334155" strokeWidth="1"/>
  <path d="M994,402 L999,403.5 L1004,402 L1004,410 L999,411.5 L994,410 Z M999,403.5 L999,411.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="400" x2="1010" y2="412" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="409.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="400" x2="1032" y2="412" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="409.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="420" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="448" x2="1064" y2="448" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="438" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="602" y="438" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">4 to read · 22 to change</text>
  <text x="938" y="438" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <text x="952" y="438" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="425" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="426" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="437.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="428" x2="988" y2="440" stroke="#334155" strokeWidth="1"/>
  <path d="M994,430 L999,431.5 L1004,430 L1004,438 L999,439.5 L994,438 Z M999,431.5 L999,439.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="428" x2="1010" y2="440" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="437.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="428" x2="1032" y2="440" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="437.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="448" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="476" x2="1064" y2="476" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="466" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales overview</text>
  <text x="602" y="466" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 to read · 0 to change</text>
  <text x="938" y="466" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <text x="952" y="466" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="453" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="454" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="465.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="456" x2="988" y2="468" stroke="#334155" strokeWidth="1"/>
  <path d="M994,458 L999,459.5 L1004,458 L1004,466 L999,467.5 L994,466 Z M999,459.5 L999,467.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="456" x2="1010" y2="468" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="465.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="456" x2="1032" y2="468" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="465.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="476" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="504" x2="1064" y2="504" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="494" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Settings</text>
  <text x="938" y="494" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read</text>
  <rect x="966" y="481" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="482" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="493.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="484" x2="988" y2="496" stroke="#334155" strokeWidth="1"/>
  <path d="M994,486 L999,487.5 L1004,486 L1004,494 L999,495.5 L994,494 Z M999,487.5 L999,495.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="484" x2="1010" y2="496" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="493.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="484" x2="1032" y2="496" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="493.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="504" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="532" x2="1064" y2="532" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="522" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales reps</text>
  <text x="602" y="522" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 to read · 3 to change</text>
  <text x="938" y="522" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read</text>
  <text x="952" y="522" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="509" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="510" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="521.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="512" x2="988" y2="524" stroke="#334155" strokeWidth="1"/>
  <path d="M994,514 L999,515.5 L1004,514 L1004,522 L999,523.5 L994,522 Z M999,515.5 L999,523.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="512" x2="1010" y2="524" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="521.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="512" x2="1032" y2="524" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="521.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="532" width="602" height="28" fill="rgba(255,69,58,0.08)"/>
  <line x1="460" y1="560" x2="1064" y2="560" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="550" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Price lists</text>
  <text x="602" y="550" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 to read · 3 to change</text>
  <text x="952" y="550" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◌</text>
  <rect x="966" y="537" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="549.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="540" x2="988" y2="552" stroke="#334155" strokeWidth="1"/>
  <path d="M994,542 L999,543.5 L1004,542 L1004,550 L999,551.5 L994,550 Z M999,543.5 L999,551.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="540" x2="1010" y2="552" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="549.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1033" y="538" width="20" height="16" rx="3" fill="rgba(255,69,58,0.18)"/>
  <line x1="1032" y1="540" x2="1032" y2="552" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="549.5" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="560" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="588" x2="1064" y2="588" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="578" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Jobs</text>
  <text x="938" y="578" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read</text>
  <rect x="966" y="565" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="566" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="577.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="568" x2="988" y2="580" stroke="#334155" strokeWidth="1"/>
  <path d="M994,570 L999,571.5 L1004,570 L1004,578 L999,579.5 L994,578 Z M999,571.5 L999,579.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="568" x2="1010" y2="580" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="577.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="568" x2="1032" y2="580" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="577.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="588" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="616" x2="1064" y2="616" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="606" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Monthly close</text>
  <text x="602" y="606" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 to read · 1 to change</text>
  <text x="938" y="606" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read</text>
  <text x="952" y="606" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◌</text>
  <rect x="966" y="593" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="594" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="605.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="596" x2="988" y2="608" stroke="#334155" strokeWidth="1"/>
  <path d="M994,598 L999,599.5 L1004,598 L1004,606 L999,607.5 L994,606 Z M999,599.5 L999,607.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="596" x2="1010" y2="608" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="605.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="596" x2="1032" y2="608" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="605.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="460" y="620" fill="#cbd5e1" fontSize="1" fontFamily="system-ui, sans-serif"></text>
  <text x="460" y="640" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <rect x="460" y="648" width="65" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="492.5" y="660.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ai:chat  ×</text>
  <rect x="460" y="674" width="90" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="461" y="675" width="45" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="483.5" y="687.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow</text>
  <line x1="507" y1="679" x2="507" y2="689" stroke="#334155" strokeWidth="1"/>
  <text x="528.5" y="687.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Deny</text>
  <rect x="558" y="674" width="141" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="568" y="687.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Connector (all queries) ▾</text>
  <rect x="707" y="674" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="717" y="687.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pick…</text>
  <rect x="835" y="674" width="36" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="687.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="984" y="704" width="80" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1024.0" y="718.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="912" y="704" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="718.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Predefined roles</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shipped by the applications</text>
  <line x1="200" y1="157.0" x2="240" y2="161" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">description, Full access, rule count</text>
  <line x1="200" y1="247.0" x2="240" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What a tick gives</text>
  <text x="30" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counts; the names on hover</text>
  <line x1="200" y1="447.0" x2="655.475" y2="414" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="540" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nearest choice decides</text>
  <text x="30" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a hidden entry in a read folder</text>
  <line x1="200" y1="557.0" x2="490" y2="546" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="640" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="655" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <text x="30" y="668" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">query, endpoint, plugin, AI…</text>
  <line x1="200" y1="657.0" x2="460" y2="657" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Duplicate</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">same rights, same data scope</text>
  <line x1="1120" y1="137.0" x2="1064" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Whole application</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what every folder follows</text>
  <line x1="1120" y1="247.0" x2="1054" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four levels per node</text>
  <text x="1130" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">follows · read · change · hidden</text>
  <line x1="1120" y1="327.0" x2="1054" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A folder in Read and change</text>
  <text x="1130" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its entries follow it</text>
  <line x1="1120" y1="427.0" x2="1024" y2="434" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Running a job</text>
  <text x="1130" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">needs Read and change</text>
  <line x1="1120" y1="577.0" x2="952" y2="602" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
</svg>

---

## The Access tab \{#access\}

### Baseline

| Choice | Meaning |
|---|---|
| **No access** | Nothing, plus what you allow below. |
| **Full access** | Everything, minus what you deny below. The role card shows a **Full access** tag. |

### The menu tree

The **Menus** block shows the sidebar of every application, one block per application (`crm · 6 of 7 shown`). A role says, per menu folder or entry, how far its holders go; **the server works out what the screens under it need**. Each folder and each entry has a four-level control:

| Level | Effect |
|---|---|
| **Follows its folder** (–) | The node takes the choice of its folder, else of its application, else the baseline. The row says *follows its folder: read* / *read and change* / *hidden* / *no access*. |
| **Read** (book) | The screens under the node open, with what they read: their read query, the lists behind their dropdowns, the tabs of their record form, their dashboards' queries. |
| **Read and change** (pencil) | Read, plus what writes or acts: the screen's update / insert / delete, the queries and endpoints marked as changing data that its actions run, the functions they call — and **running a job**. |
| **Hidden** (⊘) | The node and everything under it are taken away, even from a role with full access. |

That is all the role stores: the node in read, or in read and change — so a role is a few lines whatever the size of the application, and **it follows its folder**: a screen an upgrade adds to a folder the role allows is covered without touching the role.

**The whole application.** Above its menu, each application block has its own choice — nothing, **Read**, **Read and change** or **Hidden** — that every folder follows unless it says otherwise: *the application in read, this folder in read and change* is two ticks.

**What a tick gives.** Each entry says, in grey, what its screens need at each level — `4 to read · 22 to change` —, and hovering the figures lists the names. An entry that opens a page shows *page*: a page of the framework asks its own permission — the Explorer on a model `explorer:<app>:<model>`, the jobs' pages `nomaflow:view`, the tests' pages `tests:view` —, and a page an application ships asks `page:<app>:<page>`: allowing the entry grants it.

**The eye** on each entry previews the result: green, the entry appears in the holder's sidebar; crossed out, it does not.

How the choices combine:

- **The nearest choice decides.** An entry set to **Read** inside a folder in **Read and change** stays read-only; a **Hidden** entry is taken out of an allowed folder.
- **A deny by name wins over everything**: a rule *Deny* on a query under *Beyond the menus* refuses that query whatever the menus give.
- **Following a row click to another screen gives that screen in read only**: changing it needs its own entry in **Read and change**.
- **Running a job is part of Read and change**: reading never starts anything. A job entry is shown to who may run it.

Typical roles:

- *Everything except the Security folder*: **Full access**, then **Hidden** on the Security folder.
- *Only the Reports folder*: **No access**, then **Read** on the Reports folder.
- *Orders and customers in change, the rest in read*: **Read** on the whole application, **Read and change** on the Sales folder.

A role written with one permission per entry and per query — by hand, with the CLI — is read as the same choices; saved from the editor, it is written in the short form.

### Beyond the menus

Some rights are not tied to a menu entry. The **Beyond the menus** block adds them as green (allow) or red (deny) chips: pick **Allow** or **Deny**, the type, the item, then **Add**.

| Type | Grants |
|---|---|
| Connector (all queries) | Every query of a connector. |
| Query | One query — for a screen reached from a button or a link rather than from the menu. |
| API endpoint | One endpoint of an API connector. |
| Dashboard | One dashboard. |
| Data Explorer | One explorer model, or every model of an app — see [Data Explorer](../../explorer/overview.md#access). |
| nomaflow | **Follow the jobs** (`nomaflow:view`) — the Jobs, Schedule and Job Runs pages, the runs and their logs; **Create and edit jobs** (`nomaflow:edit`) — create, change, pause and resume jobs; it runs SQL and Python without row scope. See [Nomaflow administration](../../../nomaflow/administration.md#permissions). |
| Job | One Nomaflow job, or **Every job (run)** (`job:*`), for a job no menu entry in **Read and change** covers: its menu item and its page — files, parameters, run, cancel, logs of every run. See [Run a job from an application's menu](../../../nomaflow/jobs/run-from-menu.md#access). |
| AI assistant | **AI assistant** (`ai:chat`): the assistant's drawer. **AI tools from an external client (MCP) — create a personal access token** (`mcp:use`): see [Connect Claude (MCP)](../../mcp.md). **AI assistant — add, change or delete a record through its screen, run one of its actions, run a job (with the screen's or the job's own permissions)** (`ai:write`): see [Write through a screen](../../ai-assistant.md#write). What the assistant then reaches depends on the role's other rules — see [AI assistant](../../ai-assistant.md#access). |
| Tests | **See the test suites and their results** (`tests:view`), **Play the tests (and see them)** (`tests:run`), **Write the tests: suites, cases, steps (and play them)** (`tests:edit`) — each includes the one before. See [Tests](../tests.md#access). |
| Pattern (expert) | A permission written by hand, such as `sql:sales:report_*`. |

A page an application ships gives the page, not the functions it calls: to let a role use them, add a **Pattern (expert)** rule `plugin:<module>:*` here.

**Save** writes the role; **Cancel** drops the changes. The role name cannot be changed after creation.

### Predefined roles \{#predefined\}

The applications ship ready-made roles — Nomasx-1 an *Auditor*, a *Security officer*, a *Licence manager*, an *Administrator*; Nomajde a *Master data steward*, a *Security administrator*, a *Developer*, a *Platform operator*, an *Administrator*. **Add a predefined role…**, under **Add role**, lists them by application; picking one opens it as a new role, its name, description and rights filled in, ready to **Save**. Once saved it is a role like any other, to change as needed. One already added shows *— already added* and opens as it is. The list follows the applications installed: an install or an upgrade brings their new predefined roles.

A predefined role names menu folders in **Read** or in **Read and change**, plus the few rules beyond the menus it needs; it follows its folders when a version adds screens to them. It never takes anything away: a person may hold several roles — a security officer who is also the licence manager — and **their rights add up**.

### Duplicate a role \{#duplicate\}

**Duplicate**, at the top of an open role, opens a new role with the same rights and the same data scope, titled *Copy of …*, its role name left to fill in. The button stays inactive while the role has unsaved changes.

---

## Data scope — which rows \{#data-scope\}

The **Data scope** tab restricts the rows a role sees, on every screen, export, dashboard, report and assistant answer that reads a SQL connector. A role without any rule sees every row.

<svg viewBox="0 0 1200 408" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="368" rx="14" fill="url(#accs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="34" width="12" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="256" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="78" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Access</text>
  <text x="320" y="78" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Data scope · 2</text>
  <line x1="306" y1="86" x2="460" y2="86" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="220" y1="87" x2="980" y2="87" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="100" width="728" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="119" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Company (CO) = user.company</text>
  <rect x="790" y="107" width="80" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="830.0" y="118.2" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">deny if absent</text>
  <rect x="890" y="107" width="31" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="905.5" y="118.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="236" y="136" width="728" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="155" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">and MCU not in 00099</text>
  <text x="250" y="200" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">New rule</text>
  <rect x="310.81600000000003" y="186" width="178" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="311.81600000000003" y="187" width="97" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="360.31600000000003" y="200.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionary item</text>
  <line x1="409.81600000000003" y1="191" x2="409.81600000000003" y2="203" stroke="#334155" strokeWidth="1"/>
  <text x="449.31600000000003" y="200.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Column name</text>
  <text x="250" y="222" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DICTIONARY ITEM</text>
  <rect x="250" y="228" width="344.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="242.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">CO — Company</text>
  <text x="582.0" y="242.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="606.0" y="222" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="606.0" y="228" width="344.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="242.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Any connector</text>
  <text x="938.0" y="242.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="250" y="262" width="234" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="251" y="263" width="82" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="292.0" y="276.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fixed values</text>
  <line x1="334" y1="267" x2="334" y2="279" stroke="#334155" strokeWidth="1"/>
  <text x="409.0" y="276.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">From the user's attribute</text>
  <rect x="606.0" y="268" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="277" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exclude these values instead</text>
  <text x="250" y="296" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALUES</text>
  <rect x="250" y="302" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="258" y="306" width="49" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="282.5" y="317.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00001 ×</text>
  <rect x="313" y="306" width="49" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="337.5" y="317.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00050 ×</text>
  <text x="250" y="353" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A query without this item:</text>
  <rect x="391.04" y="338" width="198" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="392.04" y="339" width="97" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="440.54" y="352.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">is unrestricted</text>
  <line x1="490.04" y1="343" x2="490.04" y2="355" stroke="#334155" strokeWidth="1"/>
  <text x="539.54" y="352.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">returns nothing</text>
  <rect x="890" y="338" width="60" height="22" rx="5" fill="url(#accs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="352.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <rect x="236" y="180" width="728" height="192" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per rule</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a role's rules are ANDed</text>
  <line x1="200" y1="77.0" x2="236" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Item or column</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an item reaches every column</text>
  <line x1="200" y1="187.0" x2="310.81600000000003" y2="197" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Values or attribute</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">#USER.company# per user</text>
  <line x1="200" y1="277.0" x2="250" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tags</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">absent mode · connector</text>
  <line x1="1000" y1="77.0" x2="964" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Item absent</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">unrestricted, or nothing</text>
  <line x1="1000" y1="347.0" x2="541.04" y2="360" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
</svg>

### A rule

| Field | Choice |
|---|---|
| **Dictionary item** or **Column name** | What to restrict. A dictionary item (`CO — Company`) reaches every column that carries it, in every query; a column name restricts that column only. |
| **Connector** | *Any connector*, or one connector — the rule then says nothing about the others. |
| **Fixed values** or **From the user's attribute** | The allowed values, picked from the item's list when it has one; or a user attribute (`company`), so that one role serves every company — each user carries their own value (see [Users](./users.md#attributes)). |
| **Exclude these values instead** | Turns the list into exclusions: `SY not in 00`. Empty values stay visible. |
| **A query without this item** | *is unrestricted*: a query that has no such column is not limited by this rule. *returns nothing*: such a query returns no row for this role (tag **deny if absent**). |

Each rule appears as one line: `Company (CO) in 00001, 00050`, `SY not in 00`, `Company (CO) = user.company`. Clicking a line loads it in the form; the bin removes it. Rules are saved with the role.

### How rules combine

- Within a role, rules add up: *company in 00001* **and** *SY not in 00*.
- Across a user's roles, the most open role wins: a user holding *subsidiary* and *group* sees what *group* sees.
- A role without rules removes every restriction for its holders.
- Superusers are never restricted.

### Where it applies

- **Reads**: every query of a SQL connector is filtered on the server, whatever calls it — screens, exports, dashboards, reports, the assistant.
- **Writes**: creating, changing or deleting a row outside the scope is refused (*403*).
- Not filtered: API connectors and Nomaflow jobs, which run without a user.

### Finding the column of an item

A query column carries a dictionary item when the screen says so, when it has the item's name, or — on a connector with a **Dd Prefix** (JD Edwards: `2`) — when its name without the table prefix is the item: `ABCO`, `MCCO` and `SDCO` all carry `CO`. A join of two tables restricts both columns. On a pool that trims fixed-length text (JD Edwards), values are compared trimmed.

### When a change takes effect

The scope is computed at sign-in and travels with the session. A change of role or of user attribute applies when the session is renewed — within the hour, or at once after signing out and in. The **Profile** window shows a user their attributes and their data scope in words.

### Without the editor

The same rules can be set with `liberty-admin set-scope` and `set-attributes` ([CLI](../../../references/cli.md#liberty-admin)), or in `auth.toml`:

```toml title="auth.toml"
[roles.subsidiary]
permissions = ["menu:sales:*", "sql:sales:*"]
scope = [
  { dd = "CO", source = "#USER.company#", mode = "deny" },
  { dd = "SY", values = ["00"], exclude = true },
]
```

---

## How permissions are checked \{#resolution\}

Every permission is a colon-separated string — `menu:sales:orders`, `sql:sales:orders_get`, `dashboard:sales_overview`, `ai:chat` — and the editor writes them for you. A menu choice is stored as `menu:<app>:<id>` (read) and `edit:<app>:<id>` (read and change), on the folder or entry ticked; `menu:<app>:*` and `edit:<app>:*` are the whole application. For a request, Liberty Next takes all the permissions of all the user's roles, then:

1. a superuser is always allowed;
2. a matching **deny** refuses — a deny in one role wins over an allow in another;
3. a matching **allow** grants;
4. otherwise, a menu choice grants it when the permission is one the screens under an allowed folder or entry need — at the level chosen on the nearest node that has a choice; a choice on the whole application counts only when no node on the way has one;
5. otherwise, refused.

`*` matches one segment, or everything when it ends the string (`sql:sales:*`).

---

## Common pitfalls \{#pitfalls\}

| Situation | Explanation |
|---|---|
| A user still sees a menu after its role changed | The session carries the rights: sign out and in, or wait for the renewal (within the hour). |
| A deny meant for one role blocks another | Denies apply across all the user's roles. Prefer *No access* plus allows for narrow roles. |
| A user opens a screen but cannot save in it | The screen's entry or folder is in **Read**: set it, or its folder, to **Read and change**. |
| A screen reached by a row click is read-only | A row click gives the next screen in read only. Set that screen's own entry to **Read and change**. |
| A job entry is missing from a user's menu | The entry is in **Read**: running a job needs **Read and change** on the entry or its folder, or a **Job** rule under *Beyond the menus*. |
| A page of an application opens but its actions are refused | The page is given, not the functions it calls: add `plugin:<module>:*` under *Beyond the menus*. |
| A query of the role returns nothing | A rule in *returns nothing* mode, and the query has no column carrying the item. Use *is unrestricted* or add the column. |
| A user with an attribute rule sees nothing | The user has no value for the attribute — see [Users](./users.md#attributes). |
| Roles cannot be deleted from the editor | Remove the role from its users; an unused role grants nothing. |
