---
title: Roles and permissions
description: "Liberty Next roles: what a role grants, edited on the application's own menu tree (inherit / allow / deny per folder or entry, sidebar preview), the rules beyond the menus, and the data scope that restricts which rows a role sees — by company, by any dictionary item, from a user attribute."
keywords: [Liberty Next, roles, permissions, Settings Access, menu tree, allow, deny, data scope, row-level security, dd_prefix, user attributes, "#USER", auth.toml]
---

# Roles and permissions

A role answers two questions: **what** its holders may open (menus, queries, dashboards, the assistant) and **which rows** they see. Users receive roles; a user with several roles gets the sum of them.

Roles are edited in **Liberty Next → Administer → Access → Roles**. The role list is on the left; the selected role opens in a panel with two tabs: **Access** and **Data scope**.

:::info[JD Edwards roles]
This page is about the roles of Liberty Next itself. JD Edwards EnterpriseOne roles and their security are managed in Nomajde.
:::

---

## At a glance

<svg viewBox="0 0 1320 680" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="640" rx="14" fill="url(#accr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <rect x="985" y="28" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="419.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Accounts, their roles and attributes</text>
  <rect x="665.0" y="74" width="419.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What each role may open and the data it sees</text>
  <rect x="391" y="124" width="75" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.5" y="138.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add role</text>
  <rect x="244" y="164" width="214" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="182" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="256" y="196" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Full access (wildcard).</text>
  <rect x="365.04" y="187" width="64" height="14" rx="7.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="397.04" y="197.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <text x="256" y="211" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="244" y="226" width="214" height="56" rx="7" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="244" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">sales</text>
  <text x="256" y="258" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Sales team</text>
  <text x="256" y="273" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">12 rule(s)</text>
  <rect x="244" y="288" width="214" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="306" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">reader</text>
  <text x="256" y="320" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Read-only users</text>
  <text x="256" y="335" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">5 rule(s)</text>
  <rect x="236" y="156" width="230" height="470" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="136" width="12" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="512" y="148" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <text x="1070" y="148" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <line x1="478" y1="162" x2="1084" y2="162" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="180" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="492" y1="188" x2="558" y2="188" stroke="#4a9eff" strokeWidth="2"/>
  <text x="578" y="180" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Data scope · 1</text>
  <line x1="478" y1="189" x2="1084" y2="189" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE NAME</text>
  <rect x="492" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales</text>
  <text x="787.0" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="787.0" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales team</text>
  <text x="492" y="267" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <rect x="548" y="252" width="168" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="549" y="253" width="77" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="587.5" y="266.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ No access</text>
  <line x1="627" y1="257" x2="627" y2="269" stroke="#334155" strokeWidth="1"/>
  <text x="671.5" y="266.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Full access</text>
  <text x="726" y="267" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">nothing, plus what you allow below</text>
  <text x="492" y="290" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="492" y="300" width="578" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="316" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="524" y="316" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 4 of 9 shown</text>
  <text x="500" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="344" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="956" y="344" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">allowed</text>
  <rect x="990" y="331" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="1013" y="332" width="20" height="18" rx="4" fill="#4ade80" fillOpacity="0.2"/>
  <text x="1023" y="345" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="352" x2="1070" y2="352" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="370" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="594.668" y="370" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:customers_get</text>
  <text x="956" y="370" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="972" y="370" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="357" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="358" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="371" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="378" x2="1070" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="396" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="577.112" y="396" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:orders_get</text>
  <text x="956" y="396" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="972" y="396" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="383" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="384" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="397" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="404" x2="1070" y2="404" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="422" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Dashboard</text>
  <text x="594.668" y="422" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">dashboard:crm.sales</text>
  <text x="956" y="422" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="972" y="422" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="409" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="410" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="423" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="430" x2="1070" y2="430" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="448" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="448" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="956" y="448" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">denied</text>
  <rect x="990" y="435" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="449" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="449" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1035" y="436" width="20" height="18" rx="4" fill="#f87171" fillOpacity="0.2"/>
  <text x="1045" y="449" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="456" x2="1070" y2="456" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="474" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Price lists</text>
  <text x="606.3720000000001" y="474" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:prices_get</text>
  <text x="956" y="474" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: denied</text>
  <text x="972" y="474" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="990" y="461" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="462" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="475" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="475" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="475" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="482" x2="1070" y2="482" stroke="#1f2937" strokeWidth="1"/>
  <text x="514" y="500" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Reports</text>
  <text x="564.964" y="500" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">page</text>
  <text x="956" y="500" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: no access</text>
  <text x="972" y="500" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="990" y="487" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="488" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="501" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="501" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="501" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="508" x2="1070" y2="508" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="326" width="578" height="188" rx="0" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="534" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <rect x="492" y="542" width="84" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="534.0" y="554.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AI assistant ×</text>
  <rect x="582" y="542" width="117" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="640.5" y="554.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboard crm.sales ×</text>
  <rect x="492" y="568" width="113" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="493" y="569" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="521.5" y="582.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Allow</text>
  <line x1="551" y1="573" x2="551" y2="585" stroke="#334155" strokeWidth="1"/>
  <text x="578.0" y="582.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ Deny</text>
  <rect x="613" y="568" width="156" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="623" y="582.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connector (all queries)</text>
  <text x="757" y="582.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="777" y="568" width="229" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="787" y="582.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Pick…</text>
  <text x="994" y="582.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="1014" y="568" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="582.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <line x1="478" y1="604" x2="1084" y2="604" stroke="#1f2937" strokeWidth="1"/>
  <rect x="934" y="614" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="966.0" y="628.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="1004" y="614" width="64" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1036.0" y="628.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="478" y="124" width="606" height="522" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">description, Full access, rule count</text>
  <line x1="200" y1="177.0" x2="244" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">start from nothing or everything</text>
  <line x1="200" y1="307.0" x2="548" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A folder cascades</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its entries inherit allow / deny</text>
  <line x1="200" y1="417.0" x2="502" y2="341" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">query, endpoint, dashboard, AI…</text>
  <line x1="200" y1="577.0" x2="492" y2="579" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two tabs</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menus · rows (data scope)</text>
  <line x1="1120" y1="147.0" x2="1084" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown in the sidebar</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the eye, after inheritance</text>
  <line x1="1120" y1="347.0" x2="972" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inherit · Allow · Deny</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one control per entry</text>
  <line x1="1120" y1="447.0" x2="1056" y2="445" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
</svg>

---

## The Access tab \{#access\}

### Baseline

| Choice | Meaning |
|---|---|
| **No access** | Nothing, plus what you allow below. |
| **Full access** | Everything, minus what you deny below. The role card shows a **Full access** tag. |

### The menu tree

The **Menus** block shows the sidebar of every application, one block per application (`sales · 4 of 6 shown`). Each folder and each entry has a three-state control:

| Control | Effect |
|---|---|
| **Inherit** (–) | The node takes the state of its folder, or the baseline. The row says *inherits: allowed* / *denied* / *no access*. |
| **Allow** (✓) | The node and everything under it are granted. |
| **Deny** (⊘) | The node and everything under it are refused, even if another rule would grant them. |

A folder cascades to its children; a child can override it. An entry shows, in grey, what it runs (`sql:sales:orders_get`, a dashboard…): allowing the entry grants both the menu entry and what it runs. The **eye** on each entry previews the result: green, the entry appears in the holder's sidebar; crossed out, it does not.

An entry that opens a page shows *page*. A page of the framework asks its own permission — the Explorer on a model `explorer:<app>:<model>`, the jobs' pages `nomaflow:view`, the tests' pages `tests:view` —, and a page an application ships asks `page:<app>:<page>`: allowing the entry grants it.

Two typical roles:

- *Everything except the Security folder*: **Full access**, then **Deny** on the Security folder.
- *Only the Reports folder*: **No access**, then **Allow** on the Reports folder.

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
| Job | One Nomaflow job, or **Every job** (`job:*`): its menu item and its page — files, parameters, run, cancel, logs of every run. See [Run a job from an application's menu](../../../nomaflow/jobs/run-from-menu.md#access). |
| AI assistant | **AI assistant** (`ai:chat`): the assistant's drawer. **AI tools from an external client (MCP) — create a personal access token** (`mcp:use`): see [Connect Claude (MCP)](../../mcp.md). **AI assistant — add, change or delete a record through its screen, run one of its actions, run a job (with the screen's or the job's own permissions)** (`ai:write`): see [Write through a screen](../../ai-assistant.md#write). What the assistant then reaches depends on the role's other rules — see [AI assistant](../../ai-assistant.md#access). |
| Tests | **See the test suites and their results** (`tests:view`), **Play the tests (and see them)** (`tests:run`), **Write the tests: suites, cases, steps (and play them)** (`tests:edit`) — each includes the one before. See [Tests](../tests.md#access). |
| Pattern (expert) | A permission written by hand, such as `sql:sales:report_*`. |

**Save** writes the role; **Cancel** drops the changes. The role name cannot be changed after creation.

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

Every permission is a colon-separated string — `menu:sales:orders`, `sql:sales:orders_get`, `dashboard:sales_overview`, `ai:chat` — and the editor writes them for you. For a request, Liberty Next takes all the permissions of all the user's roles, then:

1. a superuser is always allowed;
2. a matching **deny** refuses — a deny in one role wins over an allow in another;
3. a matching **allow** grants;
4. otherwise, refused.

`*` matches one segment, or everything when it ends the string (`sql:sales:*`).

---

## Common pitfalls \{#pitfalls\}

| Situation | Explanation |
|---|---|
| A user still sees a menu after its role changed | The session carries the rights: sign out and in, or wait for the renewal (within the hour). |
| A deny meant for one role blocks another | Denies apply across all the user's roles. Prefer *No access* plus allows for narrow roles. |
| A query of the role returns nothing | A rule in *returns nothing* mode, and the query has no column carrying the item. Use *is unrestricted* or add the column. |
| A user with an attribute rule sees nothing | The user has no value for the attribute — see [Users](./users.md#attributes). |
| Roles cannot be deleted from the editor | Remove the role from its users; an unused role grants nothing. |
