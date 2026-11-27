---
title: A user or role
description: "Security Management → a user or role in Nomajde: every JD Edwards EnterpriseOne security line that applies to a user or a role, in the order JD Edwards reads them, compared with another, copied, exported to Excel and imported; the roles it holds; its Security Workbench and UDO security a kind at a time; its menus shown and hidden in the task view itself."
keywords: [Nomajde, JD Edwards, JDE E1, security management, user, role, parent role, child role, "*PUBLIC", Security Workbench, F00950, UDO security, F00950W, menu filtering, F9006, role relationships, F95921, Import Security, Merge Roles, Excel export, Excel import]
---

# A user or role

The **a user or role** starting point of [Security Management](./overview.md) gathers the JD Edwards EnterpriseOne security of one user, one role or `*PUBLIC`. Five tabs read it from five angles — every line that applies, the roles held, the Security Workbench, the UDO security, the menus — and each tab changes the lines it shows.

Access: **Security Management** → *Start from* **a user or role**.

---

## At a glance

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsme-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsme-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsme-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsme-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="410" rx="14" fill="url(#njsme-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="34" width="840" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="54" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START FROM</text>
  <rect x="312.4" y="42" width="84" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="354.4" y="54.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a user or role</text>
  <rect x="402.4" y="42" width="160" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="482.4" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">an application, form or report</text>
  <rect x="568.4" y="42" width="51" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="593.9" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a table</text>
  <rect x="625.4" y="42" width="46" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="648.4" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a menu</text>
  <rect x="677.4" y="42" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="697.9" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a UDO</text>
  <rect x="724.4" y="42" width="56" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="752.4" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a module</text>
  <rect x="252" y="62" width="420" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="72.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="262" y="72.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="298.89" y="72.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">user</text>
  <rect x="240.0" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.04)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="249.0" y="99" width="18" height="18" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <text x="274.0" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Everything</text>
  <text x="274.0" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">all the lines that apply</text>
  <rect x="409.6" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="418.6" y="99" width="18" height="18" rx="5" fill="#f87171" fillOpacity="0.18"/>
  <text x="443.6" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="443.6" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">what it holds, who holds it</text>
  <rect x="579.2" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="588.2" y="99" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="613.2" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="613.2" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">the Security Workbench, a kind…</text>
  <rect x="748.8" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="757.8" y="99" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="782.8" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="782.8" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">user defined objects: feature…</text>
  <rect x="918.4" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="927.4" y="99" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="952.4" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="952.4" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">the tasks shown and hidden</text>
  <rect x="240" y="132" width="840" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARE WITH, OR COPY FROM</text>
  <rect x="252" y="150" width="420" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="162.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">another user or role…</text>
  <rect x="240.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">64</text>
  <text x="250.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES</text>
  <rect x="387.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="397.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="397.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ITS OWN</text>
  <rect x="534.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">31</text>
  <text x="544.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM ITS ROLES</text>
  <rect x="681.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="691.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">30</text>
  <text x="691.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM &#42;PUBLIC</text>
  <rect x="828.0" y="180" width="252.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="838.0" y="197" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JD EDWARDS LOOKS IN THIS ORDER</text>
  <text x="838.0" y="213" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JSMITH › AP_MANAGER › AP_CLERK › &#42;PUBLIC</text>
  <rect x="240" y="234" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="767" y="234" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="788.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="815" y="234" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="873" y="234" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="921" y="234" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="979" y="234" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1003.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="1032" y="234" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="240" y="264" width="840" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHERE</text>
  <text x="326" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="442" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON WHAT</text>
  <text x="678" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT SAYS</text>
  <text x="968" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <rect x="240" y="290" width="840" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Menu</text>
  <text x="326" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="442" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Void Payment Entry · P0413M</text>
  <text x="678" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="304.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">its own</text>
  <rect x="240" y="316" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="326" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="442" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="678" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="330.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">its own</text>
  <rect x="240" y="342" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="326" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Action Security</text>
  <text x="442" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="678" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="356.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">role AP_MANAGER</text>
  <rect x="240" y="368" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="326" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="442" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">One View Watchlist · OVW0411A_01</text>
  <text x="678" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="382.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">role AP_CLERK</text>
  <rect x="240" y="394" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="326" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="442" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="678" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="408.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">&#42;PUBLIC</text>
  <text x="678" y="304.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Shown</text>
  <text x="706.8" y="304.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="678" y="330.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="786.16" y="330.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="795.16" y="330.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="810.04" y="330.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Install Application (Y/N)</text>
  <text x="938.04" y="330.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="678" y="356.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Add Action</text>
  <text x="731.6" y="356.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="740.6" y="356.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="755.48" y="356.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Update Action</text>
  <text x="823.96" y="356.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="832.96" y="356.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="847.84" y="356.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Delete Action</text>
  <text x="916.32" y="356.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="678" y="382.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Viewable: 1</text>
  <text x="678" y="408.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="786.16" y="408.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A user or a role</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its kind beside its name</text>
  <line x1="200" y1="57.0" x2="252" y2="69" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compare or copy</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a second user or role</text>
  <line x1="200" y1="149.0" x2="252" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where the lines come from</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its own, its roles, &#42;PUBLIC</text>
  <line x1="200" y1="207.0" x2="240" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where · Kind · On what</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menu, application or UDO</text>
  <line x1="200" y1="317.0" x2="250" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards order</text>
  <text x="1130" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the user, its roles, &#42;PUBLIC</text>
  <line x1="1120" y1="203.0" x2="988.0" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export · Import</text>
  <text x="1130" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its own lines, a sheet per table</text>
  <line x1="1120" y1="249.0" x2="1056.0" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="278" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it says</text>
  <text x="1130" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only the settings it carries</text>
  <line x1="1120" y1="295.0" x2="780" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">From</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the line's holder</text>
  <line x1="1120" y1="397.0" x2="1040" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
</svg>

---

## Picking the user or role \{#picker\}

The picker lists the users and roles of JD Edwards, each with its description and its **kind**: *user*, *role*, *parent role* (it holds roles), *child role* (a role holds it). The kind is a column of the list and a filter: a click on *child role*, *parent role*, *role* or *user* at the top of the list keeps that kind only. `*PUBLIC` is always offered, first.

The tabs follow the user or role picked. The page can also be opened on a user or role from another view: a role named in the view of an object, a table, a menu task or a UDO opens its security here.

---

## Everything \{#everything\}

The first tab lists, in one grid, **every security line that applies** to the user or role: menu filtering, Security Workbench and UDO security together.

- For a **role**: its own lines, then those of `*PUBLIC`.
- For a **user**: its own lines, those of the roles it holds today (the highest sequence first), then those of `*PUBLIC`.

The figures at the top count the lines — in all, its own, from its roles, from `*PUBLIC` — and **JD Edwards looks in this order** gives the order the lines are read in, which is the order of the grid.

| Column | What it shows |
|---|---|
| **Where** | *Menu*, *Application* (a Security Workbench line) or *UDO* |
| **Kind** | The kind of security, as JD Edwards names it (*Application Security*, *Action Security*, *Column Security*… or the UDO kind) |
| **On what** | What the line secures: an object, a form, a menu task, a UDO |
| **What it says** | Only the settings the line carries, Y/N settings as ✓ and ✕ |
| **From** | *its own*, *role …* or `*PUBLIC` |
| **Changed by**, **On** | Who changed the line last, and when |

The grid searches, filters, groups and changes its columns like every list of the application.

:::info[A role that holds roles]
A parent role inherits nothing from the roles it holds when it is used: its security is what a merge wrote into its own lines. The tab names those roles — *its own lines are rebuilt from (Roles tab)* — without adding their lines.
:::

### Compare with, or copy from \{#compare\}

**Compare with, or copy from** takes a second user or role. The grid then compares the **own lines** of the two: the lines only the first holds, those only the second holds, and those that differ, with what each says. The figures count each case, and how many lines are the same. **Back to all the lines** returns to the full list.

**Copy its security to …** replaces the security of the user or role picked first by a copy of the second's: every Security Workbench, UDO and menu-filtering line it holds is deleted, then those of the other are copied. A confirmation comes first; the copy then runs the application's own *Import Security* action, step by step, and is captured in the change package as that action is. Nothing is copied onto `*PUBLIC`.

### Export and import with Excel \{#excel\}

**Export** writes one Excel workbook with the **own lines** of the user or role, a sheet per table — *Security Workbench*, *UDO Security*, *Menu Filtering* — plus an *Everything* sheet to read, with every line that applies.

**Import** loads such a workbook back. It opens the same **Import from Excel** dialog as the screens, with the same modes (*Update or insert*, *Insert only*, *Update only*), the same check against the screen's rules then against the database, and the same report. Each sheet is loaded through its own screen: lines are added or changed, and the changes are captured as if made in that screen.

---

## Roles \{#roles\}

<svg viewBox="0 0 1320 270" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsmr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsmr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsmr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsmr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="232" rx="14" fill="url(#njsmr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Roles · AP_MANAGER</text>
  <rect x="862" y="32" width="218" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Rebuild its security from its roles</text>
  <rect x="240.0" y="66" width="414.0" height="166" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="86" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles AP_MANAGER holds</text>
  <rect x="400.0" y="75" width="22" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="411.0" y="85.7" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <rect x="569.0" y="74" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="605.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add a role</text>
  <line x1="240.0" y1="100" x2="654.0" y2="100" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="400.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <text x="465.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UNTIL</text>
  <text x="252.0" y="136" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_INQUIRY</text>
  <text x="330.0" y="136" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">role</text>
  <text x="400.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-01-05</text>
  <text x="465.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">no end</text>
  <rect x="598.0" y="123" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="620.0" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="555.0" y="123" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="574.5" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <text x="252.0" y="166" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_ENTRY</text>
  <text x="330.0" y="166" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">role</text>
  <text x="400.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-01-05</text>
  <text x="465.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-12-31</text>
  <rect x="598.0" y="153" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="620.0" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="555.0" y="153" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="574.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <rect x="666.0" y="66" width="414.0" height="166" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="86" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who holds AP_MANAGER</text>
  <rect x="813.4" y="75" width="22" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="824.4" y="85.7" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <rect x="990.0" y="74" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1029.0" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Give it to…</text>
  <line x1="666.0" y1="100" x2="1080.0" y2="100" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER OR ROLE</text>
  <text x="826.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <text x="891.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UNTIL</text>
  <text x="678.0" y="136" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="756.0" y="136" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">user</text>
  <text x="826.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-02-01</text>
  <text x="891.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">no end</text>
  <rect x="1024.0" y="123" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="981.0" y="123" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.5" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <text x="678.0" y="166" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">MBROWN</text>
  <text x="756.0" y="166" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">user</text>
  <text x="826.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-03-15</text>
  <text x="891.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">no end</text>
  <rect x="1024.0" y="153" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="981.0" y="153" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <text x="678.0" y="196" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FIN_ALL</text>
  <text x="756.0" y="196" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">role</text>
  <text x="826.0" y="196" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-01-05</text>
  <text x="891.0" y="196" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">no end</text>
  <rect x="1024.0" y="183" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="981.0" y="183" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.5" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles it holds</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their dates</text>
  <line x1="200" y1="87.0" x2="252" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dates · Remove</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the relationship's own form</text>
  <line x1="200" y1="167.0" x2="578" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
  <rect x="1120" y="22" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="37" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rebuild from its roles</text>
  <text x="1130" y="50" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a role only: Merge Roles</text>
  <line x1="1120" y1="39.0" x2="1080" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who holds it</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users and parent roles</text>
  <line x1="1120" y1="127.0" x2="990" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
</svg>

The **Roles** tab lists the roles the user or role holds, with their dates (*From*, *Until*; *no end* when no expiration date is set). For a role, a second list gives **who holds it**: the users and the roles that hold it.

| Action | What it does |
|---|---|
| **Add a role** | Opens the role-relationship screen's own form on the user or role, to pick the role and its dates. |
| **Give it to…** | For a role: the same form, to give the role to a user or another role. |
| **Dates** | Opens the form on the relationship, to change its dates. |
| **Remove** | Removes the relationship, after a confirmation. |
| **Rebuild its security from its roles** | For a role that holds roles: runs the application's *Merge Roles* action, after a confirmation. |

*Rebuild its security from its roles* deletes every Security Workbench, UDO and menu-filtering line of the role, then rebuilds them from the roles it holds: for each line, the most permissive setting wins. It cannot be undone. A user has no such button: it takes its roles' security as it is when it signs on.

`*PUBLIC` has no tab content: everybody holds it, with no assignment of its own.

---

## Applications \{#applications\}

The **Applications** tab is the Security Workbench of the user or role, **one kind of security at a time**.

<svg viewBox="0 0 1320 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsma-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsma-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsma-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsma-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="366" rx="14" fill="url(#njsma-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Applications · AP_MANAGER</text>
  <rect x="1036" y="32" width="44" height="22" rx="5" fill="url(#njsma-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1058.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="969" y="32" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="885" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add a line</text>
  <text x="875" y="47" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2 change(s) not saved</text>
  <rect x="240" y="66" width="220" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="84" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind of security</text>
  <rect x="240" y="94" width="220" height="18" fill="#0a0e1a"/>
  <text x="252" y="106.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJECTS</text>
  <text x="448" y="106.5" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="240" y="112" width="220" height="24" fill="rgba(74,158,255,0.18)"/>
  <text x="262" y="127.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="448" y="127.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <text x="262" y="151.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Action Security</text>
  <text x="448" y="151.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="262" y="175.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Processing Option Security</text>
  <text x="448" y="175.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="262" y="199.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Exclusive Application Security</text>
  <text x="448" y="199.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="208" width="220" height="18" fill="#0a0e1a"/>
  <text x="252" y="220.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DICTIONARY ITEM</text>
  <text x="448" y="220.5" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="262" y="241.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Column Security</text>
  <text x="448" y="241.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="262" y="265.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Row Security</text>
  <text x="448" y="265.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="274" width="220" height="18" fill="#0a0e1a"/>
  <text x="252" y="286.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OTHERS</text>
  <text x="448" y="286.5" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="262" y="307.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Hyper Exit Security</text>
  <text x="448" y="307.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="262" y="331.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Tab Exit Security</text>
  <text x="448" y="331.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="252" y="360" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">the count is the lines of AP_MANAGER</text>
  <rect x="472" y="66" width="608" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482" y="74" width="588" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="88.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Find an object, a form, a data item…</text>
  <rect x="472" y="104" width="608" height="28" fill="rgba(255,255,255,0.03)"/>
  <text x="484" y="122" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">2 selected</text>
  <rect x="550.448" y="109" width="101" height="18" rx="5" fill="url(#njsma-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="600.948" y="121.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Allow everything</text>
  <rect x="656.448" y="109" width="96" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="704.448" y="121.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Deny everything</text>
  <rect x="757.448" y="109" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="779.448" y="121.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="806.448" y="109" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.948" y="121.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Clear</text>
  <text x="484" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT NAME</text>
  <text x="558" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM DATA VALUE</text>
  <text x="664" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTALL APPLICATION (Y/N)</text>
  <text x="792" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN APPLICATION (Y/N)</text>
  <line x1="472" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <rect x="473" y="162" width="606" height="28" fill="#0a0e1a"/>
  <text x="484" y="180" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <rect x="712" y="170" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="179.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="170" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="840.0" y="179.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1024" y="167" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="179.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="985" y="167" width="35" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.5" y="179.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <rect x="473" y="192" width="606" height="28" fill="#0a0e1a"/>
  <text x="484" y="210" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0413M</text>
  <rect x="712" y="200" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="209.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="200" width="12" height="12" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="840.0" y="209.5" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="1019" y="198" width="49" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="1043.5" y="208.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changed</text>
  <rect x="969" y="197" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="991.0" y="209.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="930" y="197" width="35" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.5" y="209.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <text x="484" y="240" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <rect x="712" y="230" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="239.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="230" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="840.0" y="239.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1024" y="227" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="239.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="985" y="227" width="35" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.5" y="239.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <text x="484" y="270" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">P0401</text>
  <line x1="484" y1="267" x2="511.9" y2="267" stroke="#64748b" strokeWidth="1"/>
  <rect x="712" y="260" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="269.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="260" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="840.0" y="269.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1010" y="258" width="58" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1039.0" y="268.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">to delete</text>
  <rect x="969" y="257" width="35" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="269.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Keep</text>
  <rect x="930" y="257" width="35" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.5" y="269.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <line x1="472" y1="340" x2="1080" y2="340" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="356" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Click a box to change it. Each kind shows only its own settings.</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A kind at a time</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">under its group, with its count</text>
  <line x1="200" y1="107.0" x2="260" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groups of kinds</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as the Security Workbench names them</text>
  <line x1="200" y1="317.0" x2="300" y2="217" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="0" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="15" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a line</text>
  <text x="1130" y="28" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the Security Workbench form</text>
  <line x1="1120" y1="17.0" x2="924.0" y2="32" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selection</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">allow, deny or delete together</text>
  <line x1="1120" y1="117.0" x2="846.448" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Y/N settings as boxes</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click changes one</text>
  <line x1="1120" y1="177.0" x2="848" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copy · Delete</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per line; nothing written before Save</text>
  <line x1="1120" y1="267.0" x2="1002.5" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
</svg>

### Kinds of security \{#kinds\}

The left list gives the kinds of security under their group — *Objects*, *Dictionary item*, *Others* — as the Security Workbench screen names them, each with the number of lines the user or role holds. In a group, the kinds that hold lines come first. A click on a kind lists its lines.

A kind shows **only its own settings**, the columns the Security Workbench screen shows for it: run and install for application security, the actions for action security, the data item for column and row security… The search box narrows the lines on any of their values.

### Changing lines \{#change-lines\}

- **A Y/N setting is a box**: a click changes it.
- **A click on a line selects it**; with several lines selected, **Allow everything** and **Deny everything** set every box of the selection, **Delete** marks them for deletion, **Clear** drops the selection.
- **Copy**, on each line, opens the Security Workbench form on a copy of the line: change the user or role, the object or a setting, then save.
- **Delete**, on each line, marks it for deletion; **Keep** takes the mark back.
- **Add a line** opens the Security Workbench form over the page, on the user or role and the kind picked, with all the screen's rules.

A changed line is marked *changed*, a line to delete *to delete*, and the number of changes not saved is shown beside the buttons. **Save** writes them through the Security Workbench screen's own queries, each line handed back as it was read — what the screen's bulk edit does; **Discard** drops them. When a line is refused, saving stops on it and says how many lines were saved before.

An object name in the list opens that object's view in Security Management (start from [an application, form or report](./object.md)).

---

## UDO \{#udo\}

The **UDO** tab is the same tab on the **UDO Security** screen. The kinds are those JD Edwards names for user defined objects — *Enable Features*, *Object Action Security*, *Object View Authorization*, *Content-Composite Framework* — each with its count and its own settings as boxes. Boxes, selection, *Copy*, *Delete*, *Add a line* (the UDO Security form) and *Save* work as on the *Applications* tab.

JD Edwards keeps **enabling a feature** for `*PUBLIC` only. On another user or role, that kind says so — *pick `*PUBLIC` to add or change it* — and *Add a line* is not offered.

---

## Menus \{#menus\}

The **Menus** tab draws a task view as JD Edwards draws it and shows, for a role, each task as **shown**, **hidden** or **without a line** — the task then follows the user's roles.

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsmm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsmm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsmm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsmm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#njsmm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="40" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <rect x="240" y="46" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="60.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="250" y="61" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="482" y="40" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW</text>
  <rect x="482" y="46" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="60.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="492" y="61" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">91</text>
  <text x="512" y="61" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <rect x="1036" y="46" width="44" height="22" rx="5" fill="url(#njsmm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1058.0" y="60.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="969" y="46" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.5" y="60.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <text x="963" y="61" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2 change(s) not saved</text>
  <rect x="240" y="80" width="560" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="90" width="12" height="12" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="258.0" y="99.5" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="270" y="100" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">all listed</text>
  <rect x="325.6" y="86" width="220" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="335.6" y="99.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Find a task, a menu, an object…</text>
  <rect x="553.6" y="87" width="30" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="568.6" y="98.7" fill="#4a9eff" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">All</text>
  <rect x="586.6" y="87" width="43" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="608.1" y="98.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="632.6" y="87" width="64" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="664.6" y="98.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">With a line</text>
  <rect x="699.6" y="87" width="47" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="723.1" y="98.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Changed</text>
  <rect x="240" y="112" width="560" height="26" fill="rgba(255,255,255,0.03)"/>
  <text x="252" y="129" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">2 selected</text>
  <rect x="751" y="116" width="37" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="769.5" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Clear</text>
  <rect x="653" y="116" width="94" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="700.0" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↺ Remove the line</text>
  <rect x="607" y="116" width="42" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="628.0" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Hide</text>
  <rect x="561" y="116" width="42" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="582.0" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Show</text>
  <text x="254" y="160" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="266" y="150" width="12" height="12" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="272.0" y="159.5" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="286" y="160" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="347.44" y="160" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G1</text>
  <rect x="694" y="148" width="94" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="741.0" y="158.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">some hidden below</text>
  <text x="274" y="190" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="286" y="180" width="12" height="12" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="292.0" y="189.5" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="306" y="190" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="400.704" y="190" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G04</text>
  <rect x="694" y="178" width="94" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="741.0" y="188.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">some hidden below</text>
  <rect x="241" y="202" width="558" height="28" fill="#0a0e1a"/>
  <text x="294" y="220" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="306" y="210" width="12" height="12" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="326" y="220" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Supplier &amp; Voucher Entry</text>
  <text x="465.05600000000004" y="220" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0411</text>
  <rect x="241" y="232" width="558" height="28" fill="#0a0e1a"/>
  <rect x="241" y="232" width="3" height="28" fill="#fb923c"/>
  <text x="294" y="250" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="306" y="240" width="12" height="12" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="312.0" y="249.5" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="326" y="250" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Manual Payment Processing</text>
  <text x="470.6" y="250" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0412</text>
  <rect x="744" y="238" width="44" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="766.0" y="248.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">hidden</text>
  <rect x="691" y="238" width="49" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="715.5" y="248.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changed</text>
  <text x="314" y="280" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="326" y="270" width="12" height="12" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="346" y="280" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Void Payment Entry</text>
  <text x="442.72" y="280" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">P0413M</text>
  <rect x="672" y="268" width="116" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="730.0" y="278.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">hidden with its folder</text>
  <text x="294" y="310" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="306" y="300" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="312.0" y="309.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="326" y="310" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Automatic Payment Processing</text>
  <text x="487.232" y="310" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0413</text>
  <rect x="748" y="298" width="40" height="15" rx="7.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="768.0" y="308.7" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shown</text>
  <text x="274" y="340" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="286" y="330" width="12" height="12" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="306" y="340" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="417.336" y="340" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G03B</text>
  <rect x="252" y="353" width="10" height="10" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="257.0" y="360.5" fill="#0f172a" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="266" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">shown (a line says so)</text>
  <rect x="370.4" y="353" width="10" height="10" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="375.4" y="360.5" fill="#f87171" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="384.4" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">hidden</text>
  <rect x="421.59999999999997" y="353" width="10" height="10" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="426.59999999999997" y="360.5" fill="#fb923c" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="435.59999999999997" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">something hidden below</text>
  <rect x="540.0" y="353" width="10" height="10" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="554.0" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">no line: follows the roles</text>
  <rect x="812" y="80" width="268" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="98" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What will be saved</text>
  <rect x="1050" y="88" width="20" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="1060.0" y="98.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <line x1="812" y1="108" x2="1080" y2="108" stroke="#1f2937" strokeWidth="1"/>
  <rect x="824" y="120" width="11" height="11" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="829.5" y="128.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="842" y="129" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Hide Manual Payment Processing</text>
  <text x="842" y="142" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable</text>
  <rect x="824" y="156" width="11" height="11" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="842" y="165" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Remove the line of Electronic Payments</text>
  <text x="842" y="178" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable</text>
  <line x1="812" y1="270" x2="1080" y2="270" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="287" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">The lines of AP_MANAGER in this view</text>
  <text x="1010" y="305" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">lines</text>
  <text x="1068" y="305" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">after saving</text>
  <text x="824" y="322" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">hidden</text>
  <text x="1004" y="322" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <text x="1050" y="322" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="824" y="338" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">shown</text>
  <text x="1004" y="338" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="1050" y="338" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="824" y="366" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">A hidden folder hides everything below it.</text>
  <rect x="20" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A role and a task view</text>
  <text x="30" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menus are filtered by role</text>
  <line x1="200" y1="51.0" x2="240" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search and filters</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hidden, with a line, changed</text>
  <line x1="200" y1="117.0" x2="252" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The menu as a tree</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a box per task: a click flips it</text>
  <line x1="200" y1="217.0" x2="286" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hidden with its folder</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line on the folder is enough</text>
  <line x1="200" y1="317.0" x2="314" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="1120" y="4" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="19" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save · Discard</text>
  <text x="1130" y="32" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing is written before Save</text>
  <line x1="1120" y1="21.0" x2="1058.0" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Several lines at once</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">show, hide or remove the line</text>
  <line x1="200" y1="167.0" x2="561" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What will be saved</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every pending change, listed</text>
  <line x1="1120" y1="137.0" x2="1068" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before / after</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hidden and shown lines</text>
  <line x1="1120" y1="317.0" x2="1050" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
</svg>

JD Edwards filters menus **by role only**. With a user picked, the tab says so and offers the roles the user holds as buttons: the menus a user sees are those of its roles. On this tab, the picker lists the roles only. The **Task view** picker opens on the largest task view.

### Reading the tree \{#menus-tree\}

| Box | Meaning |
|---|---|
| ✓ green | Shown: a line of the role says so |
| ✕ red | Hidden by a line of the role |
| – orange | Something is hidden below this folder |
| empty | No line: the task follows the roles |

A hidden folder hides everything below it: the tasks under it are marked *hidden with its folder*, and one line on the folder is enough. The search box finds a task, a menu or an object; the filters keep the tasks **Hidden**, **With a line** or **Changed**; **Collapse all** closes every folder. Hovering a task with a line shows who changed it last, and when.

### Changing the menus \{#menus-change\}

- **A click on a box** hides the task. A second click shows it again: the change is dropped — or, when a line of the role hid the task, that line is changed to show it.
- **A click on a line selects it**, **Shift-click** selects a range; the selection is then **Shown**, **Hidden** or cleared of its line (**Remove the line**) together.
- **All listed**, in the tree's bar, hides every task listed (the open folders, or what a search found) — or, when they all are, shows them again. Untick then the ones to keep.

Nothing is written before **Save**. **What will be saved** lists every pending change — *Hide*, *Show (add a line)*, *Show again*, *Remove the line of* — with the path of each task, and the figures below compare the hidden and shown lines of the role in this view, now and after saving. **Save** writes the lines through the **Menu Filtering** screen's own queries; **Discard** drops the changes.

---

## Access \{#access\}

See [Security Management → Access](./overview.md#access).

---

## Tips & best practices \{#tips\}

- **Read a user from *Everything*.** The lines are listed holder by holder, in the order JD Edwards reads them: where the user or one of its roles already says something on an object, a `*PUBLIC` line further down does not decide.
- **Compare before copying.** Picking a second user or role shows what the copy would change — the lines only one holds and those that differ — before *Copy its security to …* replaces anything.
- **Prepare a role in Excel.** *Export* the role, change the sheets, then *Import*: the check against the screens' rules shows the errors before anything is saved.
- **Rebuild a parent role after changing its children.** A parent role reads only its own lines: after a change on a role it holds, *Rebuild its security from its roles* brings it up to date.
- **Hide a folder rather than its tasks.** One menu-filtering line on a folder hides everything below it, and stays right when a task is added to the folder.
