---
title: Overview and Studio
description: "The two pages Liberty Next opens on for whoever builds: Overview — the applications of the installation with their figures and the eight steps an application is built in — and the Studio, the map of one application (menu, screens, data, services) where a selection lights what it is linked to, what nothing uses is shown, and every editor opens in place."
keywords: [Liberty Next, Studio, Overview, application map, low-code, screens, queries, endpoints, services, dependencies, unused, integrity, edit in place]
---

# Overview and Studio

Two pages give the whole picture before any editor is opened. **Overview** lists the applications of the installation and the path that builds one. The **Studio** shows one application as a **map** — its menu, its screens, the data they use, the services they call — and edits any of it without leaving the page.

Access: **Liberty Next → Overview** and **Liberty Next → Build → Studio**, for superusers.

---

## At a glance

<svg viewBox="0 0 1400 448" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="stu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="stu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="stu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="stu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="960" height="398" rx="14" fill="url(#stu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Studio</text>
  <rect x="240" y="62" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="76.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">crm</text>
  <text x="348" y="77" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="370" y="62" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="76.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Find a screen, a query, a service…</text>
  <rect x="610" y="62" width="67" height="22" rx="11" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="621" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="630.04" y="76.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Screens</text>
  <rect x="683" y="62" width="52" height="22" rx="11" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="703.04" y="76.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Data</text>
  <rect x="741" y="62" width="72" height="22" rx="11" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="752" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="761.04" y="76.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Services</text>
  <rect x="819" y="62" width="158" height="22" rx="11" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="898.0" y="76.5" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚠ 1 screen(s) nothing opens</text>
  <rect x="1058" y="62" width="102" height="22" rx="11" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="1109.0" y="76.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Nothing broken</text>
  <rect x="240" y="98" width="600" height="300" rx="10" fill="#0b1120" stroke="#1f2937" strokeWidth="1"/>
  <defs><pattern id="stu-dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="9" cy="9" r="0.8" fill="#1f2937"/></pattern></defs>
  <rect x="240" y="98" width="600" height="300" rx="10" fill="url(#stu-dots)"/>
  <path d="M250,112 h4 l1.5,1.5 h5.5 v7 h-11 Z" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="266" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MENU</text>
  <text x="350" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <rect x="382.0" y="110" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="382.0" y="116" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="388.0" y="110" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="388.0" y="116" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="398.0" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SCREENS</text>
  <text x="510.0" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <ellipse cx="547.5" cy="112" rx="5" ry="2" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <path d="M542.5,112 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="558.0" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="692.0" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <rect x="724.0" y="110" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="730.0" y="116" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <path d="M726.2,114.5 v3.5 h3.8" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="740.0" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVICES</text>
  <text x="830.0" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <g opacity="0.3">
  <rect x="250" y="132" width="100" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <path d="M258,140.5 h4 l1.5,1.5 h5.5 v7 h-11 Z" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="275" y="147.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Sales</text>
  </g>
  <g>
  <rect x="262" y="162" width="88" height="24" rx="6" fill="#111827" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <rect x="270" y="168.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="270" y="174.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="168.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="174.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <text x="287" y="177.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  </g>
  <g opacity="0.3">
  <rect x="262" y="192" width="88" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="270" y="198.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="270" y="204.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="198.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="204.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <text x="287" y="207.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Deals</text>
  </g>
  <g opacity="0.3">
  <rect x="250" y="222" width="100" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="258" y="228.5" width="11" height="11" rx="2" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <line x1="263" y1="228.5" x2="263" y2="239.5" stroke="#fb923c" strokeWidth="1"/>
  <text x="275" y="237.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline</text>
  </g>
  <g opacity="0.3">
  <rect x="250" y="252" width="100" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="258" y="258.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="258" y="264.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="264" y="258.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="264" y="264.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <text x="275" y="267.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Activities</text>
  </g>
  <g>
  <rect x="382.0" y="132" width="128" height="32" rx="6" fill="#111827" stroke="#4ade80" strokeWidth="1.6"/>
  <rect x="390.0" y="142.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="148.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="142.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="148.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="145.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="407.0" y="157" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="495.0" y="143.0" width="9" height="10" rx="1.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <line x1="497.0" y1="147.0" x2="502.0" y2="147.0" stroke="#94a3b8" strokeWidth="1"/>
  <line x1="497.0" y1="150.0" x2="502.0" y2="150.0" stroke="#94a3b8" strokeWidth="1"/>
  </g>
  <g>
  <rect x="382.0" y="172" width="128" height="32" rx="6" fill="#111827" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <rect x="390.0" y="182.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="188.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="182.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="188.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="185.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contacts</text>
  <text x="407.0" y="197" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">contacts</text>
  </g>
  <g opacity="0.3">
  <rect x="382.0" y="212" width="128" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="390.0" y="222.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="228.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="222.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="228.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="225.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="407.0" y="237" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">deals</text>
  <rect x="495.0" y="223.0" width="9" height="10" rx="1.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <line x1="497.0" y1="227.0" x2="502.0" y2="227.0" stroke="#94a3b8" strokeWidth="1"/>
  <line x1="497.0" y1="230.0" x2="502.0" y2="230.0" stroke="#94a3b8" strokeWidth="1"/>
  </g>
  <g opacity="0.3">
  <rect x="382.0" y="252" width="128" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="390.0" y="262.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="268.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="262.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="268.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="265.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Activities</text>
  <text x="407.0" y="277" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">activities</text>
  <rect x="495.5" y="267.0" width="9" height="7" rx="1.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <path d="M497.5,267.0 v-2.5 a2.5,2.5 0 0 1 5,0 v2.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  </g>
  <g opacity="0.3">
  <rect x="382.0" y="292" width="128" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="390.0" y="302.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="308.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="302.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="308.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="305.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Old import</text>
  <text x="407.0" y="317" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">old_import</text>
  <path d="M495.0,312.0 L500.0,303.0 L505.0,312.0 Z" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="500.0" y="311.0" fill="#fb923c" fontSize="6.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">!</text>
  </g>
  <g>
  <rect x="542.0" y="132" width="150" height="32" rx="6" fill="#111827" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <ellipse cx="555.5" cy="144.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,144.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="145.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="567.0" y="157" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  </g>
  <g>
  <rect x="542.0" y="172" width="150" height="32" rx="6" fill="#111827" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <ellipse cx="555.5" cy="184.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,184.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="185.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="567.0" y="197" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.customers_put</text>
  <path d="M678.0,193.0 L678.0,190.0 L684.0,184.0 L687.0,187.0 L681.0,193.0 Z" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  </g>
  <g>
  <rect x="542.0" y="212" width="150" height="32" rx="6" fill="#111827" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <ellipse cx="555.5" cy="224.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,224.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="225.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contacts</text>
  <text x="567.0" y="237" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.contacts_get</text>
  </g>
  <g opacity="0.3">
  <rect x="542.0" y="252" width="150" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <ellipse cx="555.5" cy="264.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,264.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="265.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="567.0" y="277" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.deals_get</text>
  </g>
  <g opacity="0.3">
  <rect x="542.0" y="292" width="150" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <circle cx="555.5" cy="308.0" r="5" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <ellipse cx="555.5" cy="308.0" rx="2.2" ry="5" fill="none" stroke="#4a9eff" strokeWidth="1"/>
  <line x1="550.5" y1="308.0" x2="560.5" y2="308.0" stroke="#4a9eff" strokeWidth="1"/>
  <text x="567.0" y="305.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Credit check</text>
  <text x="567.0" y="317" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">erp.credit_check</text>
  </g>
  <rect x="542.0" y="332" width="150" height="24" rx="6" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="551.0" y="347.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Show the 2 no screen uses</text>
  <g>
  <rect x="724.0" y="132" width="106" height="32" rx="6" fill="#111827" stroke="rgba(168,85,247,0.45)" strokeWidth="1"/>
  <rect x="732.0" y="142.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <rect x="738.0" y="148.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <path d="M734.2,147.0 v3.5 h3.8" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <text x="749.0" y="145.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Check credit</text>
  <text x="749.0" y="157" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">check_credit</text>
  </g>
  <g opacity="0.3">
  <rect x="724.0" y="172" width="106" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="732.0" y="182.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <rect x="738.0" y="188.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <path d="M734.2,187.0 v3.5 h3.8" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <text x="749.0" y="185.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Close deal</text>
  <text x="749.0" y="197" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">close_deal</text>
  </g>
  <rect x="724.0" y="212" width="106" height="24" rx="6" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="733.0" y="227.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">All services…</text>
  <path d="M 350 174.0 C 366.0 174.0, 366.0 148.0, 382.0 148.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 526.0 148.0, 526.0 148.0, 542.0 148.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 526.0 148.0, 526.0 188.0, 542.0 188.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 534.0 148.0, 534.0 188.0, 510.0 188.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 188.0 C 526.0 188.0, 526.0 228.0, 542.0 228.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 600.0 122.0, 634.0 122.0, 724.0 148.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <rect x="854" y="98" width="306" height="300" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="870" y="120" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SCREEN</text>
  <text x="870" y="140" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="870" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">crm.customers</text>
  <rect x="870" y="166" width="62" height="22" rx="5" fill="url(#stu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="901.0" y="180.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Design</text>
  <rect x="940" y="166" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="993.5" y="180.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↗ Open the screen</text>
  <text x="870" y="206" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Data it uses</text>
  <rect x="870" y="213" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="226.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <text x="1136" y="226.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">reads</text>
  <rect x="870" y="237" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="250.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">crm.customers_put</text>
  <text x="1136" y="250.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">saves</text>
  <text x="870" y="274" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Services it calls</text>
  <rect x="870" y="281" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="294.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="870" y="318" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Screens inside its form</text>
  <rect x="870" y="325" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="338.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">contacts</text>
  <rect x="20" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One application</text>
  <text x="30" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its map; the search narrows all</text>
  <line x1="200" y1="73.0" x2="240" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="108" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click selects</text>
  <text x="30" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the links light up, the rest fades</text>
  <line x1="200" y1="125.0" x2="384.0" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu entry → screen</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folders indent their entries</text>
  <line x1="200" y1="193.0" x2="262" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nothing opens it</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no menu entry, no form</text>
  <line x1="200" y1="267.0" x2="500.0" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What no screen uses</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listed on demand, at the end</text>
  <line x1="200" y1="357.0" x2="542.0" y2="344" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="1210" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the full check</text>
  <line x1="1200" y1="47.0" x2="1160" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="98" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="113" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The selection</text>
  <text x="1210" y="126" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its kind, its name, its key</text>
  <line x1="1200" y1="115.0" x2="954" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit in place</text>
  <text x="1210" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Design opens over the map</text>
  <line x1="1200" y1="177.0" x2="1047" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it uses</text>
  <text x="1210" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reads · saves · calls — a click jumps</text>
  <line x1="1200" y1="249.0" x2="1144" y2="223" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inside its form</text>
  <text x="1210" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the screens its record form holds</text>
  <line x1="1200" y1="347.0" x2="1144" y2="335" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
</svg>

---

## Overview \{#overview\}

The page has a header and two sections.

<svg viewBox="0 0 1400 522" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ovw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ovw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ovw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ovw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="960" height="480" rx="14" fill="url(#ovw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next builds applications from configuration: no table of metadata, no code to deploy for a screen.</text>
  <rect x="240" y="80" width="112" height="24" rx="5" fill="url(#ovw-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="296.0" y="95.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⇄ Open the Studio</text>
  <rect x="360" y="80" width="202" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="95.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ A new screen, with the assistant</text>
  <text x="1160" y="96" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">v7.0.x</text>
  <rect x="901" y="81" width="213" height="22" rx="11" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="1007.5" y="95.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tests: 4 passed · 0 failed · 0 changed</text>
  <rect x="791" y="81" width="102" height="22" rx="11" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="842.0" y="95.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Nothing broken</text>
  <text x="240" y="128" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">The applications</text>
  <text x="346.56" y="128" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">each one opens in the Studio: its map, edited in place</text>
  <rect x="240.0" y="140" width="298.6666666666667" height="82" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="526.6666666666667" y="160" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Studio →</text>
  <text x="252.0" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="252.0" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="312.4266666666667" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">8</text>
  <text x="312.4266666666667" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">menu entries</text>
  <text x="405.8133333333334" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="405.8133333333334" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Data</text>
  <text x="466.24" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="466.24" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="252.0" y="212" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">⚠ 1 screen(s) nothing opens</text>
  <rect x="550.6666666666667" y="140" width="298.6666666666667" height="82" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="562.6666666666667" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">hr</text>
  <text x="837.3333333333335" y="160" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Studio →</text>
  <text x="562.6666666666667" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="562.6666666666667" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="623.0933333333334" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="623.0933333333334" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">menu entries</text>
  <text x="716.4800000000001" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">7</text>
  <text x="716.4800000000001" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Data</text>
  <text x="776.9066666666668" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="776.9066666666668" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="562.6666666666667" y="212" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">✓ Every screen is reachable</text>
  <rect x="861.3333333333334" y="140" width="298.6666666666667" height="82" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="873.3333333333334" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <text x="1148.0" y="160" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Studio →</text>
  <text x="873.3333333333334" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="873.3333333333334" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="933.76" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="933.76" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">menu entries</text>
  <text x="1027.1466666666668" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <text x="1027.1466666666668" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Data</text>
  <text x="1087.5733333333333" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="1087.5733333333333" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="873.3333333333334" y="212" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">✓ Every screen is reachable</text>
  <text x="240" y="252" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">How an application is built</text>
  <text x="414.32000000000005" y="252" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">eight steps, in this order — each one opens where it is done</text>
  <rect x="240.0" y="264" width="222.5" height="104" rx="9" fill="rgba(74,158,255,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="274" width="22" height="22" rx="5" fill="rgba(74,158,255,0.07)" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <ellipse cx="261.0" cy="281.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M256.0,281.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="280.0" y="289" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">1</text>
  <text x="292.0" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connect the data</text>
  <text x="250.0" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">A connector reaches a database or an API. Its</text>
  <text x="250.0" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">queries and endpoints are the only place where</text>
  <text x="250.0" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">data is read and written.</text>
  <text x="250.0" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">3 connectors · 42 queries · 6 endpoints</text>
  <rect x="472.5" y="264" width="222.5" height="104" rx="9" fill="rgba(74,158,255,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482.5" y="274" width="22" height="22" rx="5" fill="rgba(74,158,255,0.07)" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="488.0" y="279.5" width="11" height="11" rx="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <line x1="493.0" y1="279.5" x2="493.0" y2="290.5" stroke="#4a9eff" strokeWidth="1"/>
  <text x="512.5" y="289" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">2</text>
  <text x="524.5" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name the fields</text>
  <text x="482.5" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The dictionary gives every field its label, its</text>
  <text x="482.5" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">format, its list of values — once, for every</text>
  <text x="482.5" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">screen that shows it.</text>
  <text x="482.5" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">180 dictionary entries</text>
  <rect x="705.0" y="264" width="222.5" height="104" rx="9" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="715.0" y="274" width="22" height="22" rx="5" fill="rgba(50,215,75,0.06)" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="720.5" y="279.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="720.5" y="285.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="726.5" y="279.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="726.5" y="285.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="745.0" y="289" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">3</text>
  <text x="757.0" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Build the screens</text>
  <text x="715.0" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">A screen is a query shown as a grid, with its</text>
  <text x="715.0" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">filters, its record form, its actions. The</text>
  <text x="715.0" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Studio shows them with what they use.</text>
  <text x="715.0" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">19 screens · 8 with a record form</text>
  <rect x="937.5" y="264" width="222.5" height="104" rx="9" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="947.5" y="274" width="22" height="22" rx="5" fill="rgba(50,215,75,0.06)" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <path d="M953.0,281.5 h4 l1.5,1.5 h5.5 v7 h-11 Z" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="977.5" y="289" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">4</text>
  <text x="989.5" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Organise the menu</text>
  <text x="947.5" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The menu is what the users see first: folders</text>
  <text x="947.5" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">and entries that open a screen, a dashboard, a</text>
  <text x="947.5" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">page.</text>
  <text x="947.5" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">25 menu entries</text>
  <rect x="240.0" y="378" width="222.5" height="104" rx="9" fill="rgba(168,85,247,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="388" width="22" height="22" rx="5" fill="rgba(168,85,247,0.07)" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="255.5" y="393.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <rect x="261.5" y="399.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <path d="M257.7,398.0 v3.5 h3.8" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <text x="280.0" y="403" fill="#c084fc" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">5</text>
  <text x="292.0" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add the logic</text>
  <text x="250.0" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">A service is steps composed into one call; a job</text>
  <text x="250.0" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">runs steps on a schedule; a notification tells</text>
  <text x="250.0" y="446" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">someone.</text>
  <text x="250.0" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">5 services · 4 jobs</text>
  <rect x="472.5" y="378" width="222.5" height="104" rx="9" fill="rgba(255,159,10,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482.5" y="388" width="22" height="22" rx="5" fill="rgba(255,159,10,0.07)" stroke="#fb923c" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="488.0" y="393.5" width="11" height="11" rx="2" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <line x1="493.0" y1="393.5" x2="493.0" y2="404.5" stroke="#fb923c" strokeWidth="1"/>
  <text x="512.5" y="403" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">6</text>
  <text x="524.5" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Show the figures</text>
  <text x="482.5" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Dashboards and charts for what is watched every</text>
  <text x="482.5" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">day; the Data Explorer for what is asked freely.</text>
  <text x="482.5" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">3 dashboards · 2 Explorer models</text>
  <rect x="705.0" y="378" width="222.5" height="104" rx="9" fill="rgba(250,204,21,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="715.0" y="388" width="22" height="22" rx="5" fill="rgba(250,204,21,0.06)" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="720.5" y="393.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <rect x="720.5" y="399.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <rect x="726.5" y="393.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <rect x="726.5" y="399.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <text x="745.0" y="403" fill="#facc15" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">7</text>
  <text x="757.0" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Give access</text>
  <text x="715.0" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Roles say who sees which menu, runs which query,</text>
  <text x="715.0" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">and which rows of the data are theirs.</text>
  <text x="715.0" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">roles, permissions, data scope</text>
  <rect x="937.5" y="378" width="222.5" height="104" rx="9" fill="rgba(250,204,21,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="947.5" y="388" width="22" height="22" rx="5" fill="rgba(250,204,21,0.06)" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="953.0" y="393.5" width="11" height="11" rx="2" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <line x1="958.0" y1="393.5" x2="958.0" y2="404.5" stroke="#facc15" strokeWidth="1"/>
  <text x="977.5" y="403" fill="#facc15" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">8</text>
  <text x="989.5" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Check and deliver</text>
  <text x="947.5" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The integrity check finds what is broken; a</text>
  <text x="947.5" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">package carries the configuration to another</text>
  <text x="947.5" y="446" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">environment.</text>
  <text x="947.5" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">integrity · package · history</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start here</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the Studio, or the screen assistant</text>
  <line x1="200" y1="87.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card per application</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screens · menu · data · services</text>
  <line x1="200" y1="167.0" x2="240" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is loose</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screens nothing opens, broken refs</text>
  <line x1="200" y1="247.0" x2="252" y2="209" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Eight steps, in order</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what it is for · what exists</text>
  <line x1="200" y1="347.0" x2="240" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1200" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity · tests</text>
  <text x="1210" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each pill opens its page</text>
  <line x1="1200" y1="47.0" x2="831" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1200" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Opens in the Studio</text>
  <text x="1210" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application's map</text>
  <line x1="1200" y1="167.0" x2="1150" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1200" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click opens the page</text>
  <text x="1210" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the step is done</text>
  <line x1="1200" y1="347.0" x2="1160" y2="312" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
</svg>

**Header** — **Open the Studio**, **A new screen, with the assistant** (the [Screen Assistant](./build/screen-assistant.md)), the version of the installation at the far right, and two status pills: the integrity of the configuration — *Nothing broken*, or the number of errors and warnings, which opens **Deploy → Integrity** — and, once test cases exist, the totals of the [tests](./build/tests.md), which opens **Operate → Test results**.

**The applications** — one card per application: its number of **screens**, **menu entries**, **data** (queries and endpoints) and **services**, and one line on its state: *Every screen is reachable*, or how many screens nothing opens and how many references are broken. A card — its **Studio →** link — opens the application in the Studio.

**How an application is built** — eight steps, in order; each says in one sentence what it is for, shows what the installation already holds, and opens the page where it is done.

| # | Step | Opens |
|---|---|---|
| 1 | **Connect the data** — a connector reaches a database or an API; its queries and endpoints are the only place where data is read and written. | Data → Connectors |
| 2 | **Name the fields** — the dictionary gives every field its label, its format, its list of values, once for every screen. | Data → Dictionary |
| 3 | **Build the screens** — a screen is a query shown as a grid, with its filters, its record form, its actions. | Build → Studio |
| 4 | **Organise the menu** — folders and entries that open a screen, a dashboard, a page. | Screens → Menus |
| 5 | **Add the logic** — a service is steps composed into one call; a job runs steps on a schedule; a notification tells someone. | Logic → Services |
| 6 | **Show the figures** — dashboards and charts for what is watched every day; the Data Explorer for what is asked freely. | Insight → Dashboards |
| 7 | **Give access** — roles say who sees which menu, runs which query, and which rows are theirs. | Administer → Access |
| 8 | **Check and deliver** — the integrity check finds what is broken; a package carries the configuration to another environment. | Deploy → Package |

---

## The Studio \{#studio\}

Pick an application at the top left. Beside it, the search box and the counts: screens, data, services, and — in orange — the screens nothing opens; at the far right, the integrity pill (*Nothing broken*, or the number of errors and warnings). Below, the map has four columns, each with its count, and the panel on the right.

| Column | Holds |
|---|---|
| **Menu** | The entries of the application's menu, in its order: a folder's entries are indented under it; the icon tells a folder, a screen or a dashboard. |
| **Screens** | Its screens, each with its label and its id. Icons say *Has a record form* and *Read only*. |
| **Data** | The queries (a database icon) and the endpoints (a globe) its screens use, each with its label and its key `connector.name`. A pen marks what *changes data*. |
| **Services** | The services its screens call, with their id. **All services…** opens the [Services](./build/services.md) page. |

The search box — *Find a screen, a query, a service…* — narrows every column at once (the menu is then shown flat).

### Follow the links \{#links\}

A click selects an item: **everything it is linked to lights up**, the links are drawn as curves across the columns, and the rest fades. Each column scrolls to bring a linked item into view. The selection follows the links all the way — a query lights the screens that use it and their menu entries; a menu entry lights its screen and everything that screen leads to. A screen opened inside another screen's record form is linked to it by a curve along the Screens column; an endpoint served by a service is linked to that service. A second click clears the selection, and a click on an item of the panel selects it in turn.

This answers, in one click, the questions that otherwise mean opening five editors: *what breaks if I change this query? which screens call this service? how does a user reach this screen?*

### What is loose \{#loose\}

The Studio shows what an application carries for nothing, and what is broken:

| Sign | Meaning |
|---|---|
| Warning on a screen | *No menu entry and no form opens this screen.* |
| Warning on a data item or a service | *It no longer exists: what points at it is broken.* |
| **Show the N no screen uses** (end of the Data column) | Lists the application's queries and endpoints no screen uses; **Hide the N no screen uses** folds them again. |
| Orange chip at the top | The number of screens nothing opens. |

The integrity chip beside it opens the full check.

### Edit in place \{#edit\}

The panel on the right says what the selection is, what it uses and what uses it — and carries the way to change it:

| Selection | The panel shows | Buttons |
|---|---|---|
| Nothing | The application's name, **To look at** (what is loose, or *Every screen is reachable and every query is used.*) and the application's **Dashboards**, tagged *not in the menu* when no entry opens them; a dashboard opens the dashboards editor. | — |
| A **screen** | Its key `application.screen`, *Data it uses* — each tagged *reads*, *saves* or *calls* —, *Services it calls*, *Screens inside its form*. | **Design**, **Open the screen** |
| A **query** or an **endpoint** | Its key, *Used by* (each screen with *reads*, *saves* or *calls*), *Served by the service*. | **Edit the query** / **Edit the endpoint** |
| A **service** | Its id and number of steps, *Used by*, *Exposed as* (`POST /api/http/<connector>/<endpoint>`). | **Design the flow**, **Run** |
| A **menu entry** | Its id and type, *Opens*. | **Edit the menu** |

The editors open **over the map** and come back to it, reloaded, with the selection kept:

| Button | Opens |
|---|---|
| **Design** (or a double click on a screen) | The [Screen Designer](./build/screens/overview.md), full window, on that screen: its stages *What it is*, *Data*, *Grid*, *Record form*, *Actions*, *Output*; **Cancel** comes back to the map. |
| **Edit the query** | The query editor (*Edit query*), on that query. |
| **Edit the endpoint** | The [endpoint editor](./build/api-endpoints.md). |
| **Design the flow** (or a double click on a service) | The [service designer](./build/services.md): the flow from **Start** to **Answer**, the service's label, description and inputs on the right. |
| **Run** | Runs the service as it is saved, with the inputs typed, and shows its answer; its steps really run. |
| **Edit the menu**, a dashboard | The menus or the dashboards editor, in a window with **Close**. |

**Open the screen** leaves the Studio for the screen itself.

---

## Tips & best practices \{#tips\}

- Open the Studio **before** changing a shared query or service: the lit items are the test plan.
- Clear the loose items before a delivery — a screen nothing opens is either a missing menu entry or dead configuration. A screen that only an [Explorer entity](./explorer/model.md) opens still shows here, while **Deploy → Integrity** counts it as reached.
- New to an application? Select its menu entries one by one: the map is its documentation.
- The Studio is one application at a time; **Find usages**, in each editor, searches the whole installation.

---

## Related

- [The Liberty Next workspace](./configuration/settings-ui.md) — the menu and how a save is applied.
- [Services](./build/services.md), [Tests](./build/tests.md), [API endpoints](./build/api-endpoints.md).
