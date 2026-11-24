---
title: Architecture
description: "Monitoring → Architecture in Nomajde: the JD Edwards EnterpriseOne platform drawn from what is found — Server Manager's instances by tier and host, the application server and its version, the database, the machines connected to it — with a dashed outline for what Server Manager does not declare, lines drawn only on evidence, a card that opens its details, and a download as SVG."
keywords: [Nomajde, JD Edwards, JDE E1, architecture, diagram, Server Manager, enterprise server, web server, AIS server, WebLogic, WebSphere, database, Oracle, database sessions, business function calls, SVG, audit report]
---

# Architecture

**Monitoring → Architecture** draws the JD Edwards EnterpriseOne platform **from what is found**, not from a drawing kept by hand: the instances Server Manager declares, grouped by tier and by host, the database the JD Edwards connection points at, and the machines the database sees connected. What only the database side shows has a dashed outline; a line between two cards is drawn only when something proves it. The page reads Server Manager and the database live, each time it is opened or **Read again** is clicked, and changes nothing.

The same diagram is the **Architecture** tab of the [Platform synthesis](../synthesis.md).

---

## At a glance

<svg viewBox="0 0 1320 482" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="narch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="narch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="narch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="narch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="442" rx="14" fill="url(#narch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The JD Edwards platform as it is found now: what Server Manager declares, and what only the database shows.</text>
  <rect x="1005" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="723" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Read at 14:02</text>
  <rect x="896" y="34" width="101" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Download as SVG</text>
  <rect x="733" y="34" width="155" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="810.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Keep for the audit report</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="92" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Nothing is kept for the audit report yet: its architecture page stays out unless a picture is put there by hand.</text>
  <rect x="240.0" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="119" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">5 / 5</text>
  <text x="250.0" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCES RUNNING</text>
  <rect x="409.6" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="419.6" y="119" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="419.6" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOSTS IN SERVER MANAGER</text>
  <rect x="579.2" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="589.2" y="119" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="589.2" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <rect x="748.8" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="758.8" y="119" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="758.8" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOT DECLARED IN SERVER MANAGER</text>
  <rect x="918.4" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="928.4" y="119" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="928.4" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINKS WITH THEIR EVIDENCE</text>
  <circle cx="243" cy="153" r="3" fill="#4ade80"/>
  <text x="250" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Server Manager instances</text>
  <text x="356.144" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· read</text>
  <circle cx="397.336" cy="153" r="3" fill="#4ade80"/>
  <text x="404.336" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Business function calls</text>
  <text x="506.22400000000005" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· read</text>
  <circle cx="547.416" cy="153" r="3" fill="#4ade80"/>
  <text x="554.416" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">JD Edwards pool</text>
  <text x="622.2560000000001" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· read</text>
  <circle cx="663.4480000000001" cy="153" r="3" fill="#4ade80"/>
  <text x="670.4480000000001" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Database instance</text>
  <text x="746.8000000000001" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· read</text>
  <circle cx="787.9920000000001" cy="153" r="3" fill="#4ade80"/>
  <text x="794.9920000000001" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Database sessions</text>
  <text x="871.344" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· read</text>
  <rect x="240" y="166" width="600" height="250" rx="8" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <rect x="764" y="174" width="68" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="798.0" y="185.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">−  100%  +</text>
  <rect x="252" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WEB AND AIS</text>
  <rect x="398" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="406" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENTERPRISE SERVERS</text>
  <rect x="544" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="552" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <rect x="690" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="698" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OTHER DATABASE CLIENTS</text>
  <rect x="258" y="216" width="116" height="168" rx="5" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="226" fill="#cbd5e1" fontSize="6.8" fontFamily="system-ui, sans-serif">jde-web01.example.com</text>
  <rect x="263" y="230" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="267" y="235" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="274" y="242" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">WLS_PD</text>
  <text x="274" y="253" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Application server…</text>
  <text x="274" y="264" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Running</text>
  <text x="307.44" y="264" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="263" y="276" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="267" y="281" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="274" y="288" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">AIS_PD</text>
  <text x="274" y="299" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">AIS server</text>
  <text x="274" y="310" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Running</text>
  <text x="307.44" y="310" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Version 9.2.8</text>
  <rect x="263" y="322" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="267" y="327" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="274" y="334" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">HTML_PD</text>
  <text x="274" y="345" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Web server</text>
  <text x="274" y="356" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Running</text>
  <text x="307.44" y="356" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Version 9.2.8</text>
  <rect x="404" y="216" width="116" height="60" rx="5" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="226" fill="#cbd5e1" fontSize="6.8" fontFamily="system-ui, sans-serif">jde-ent01.example.com</text>
  <rect x="409" y="230" width="106" height="40" rx="5" fill="#111827" stroke="#4a9eff" strokeWidth="1.5"/>
  <rect x="413" y="235" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="420" y="242" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">ENT_PD</text>
  <text x="420" y="253" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Enterprise server</text>
  <text x="420" y="264" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Running</text>
  <text x="453.44" y="264" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Version 9.2.8</text>
  <rect x="550" y="216" width="116" height="60" rx="5" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="226" fill="#cbd5e1" fontSize="6.8" fontFamily="system-ui, sans-serif">jde-db01</text>
  <rect x="555" y="230" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="559" y="235" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="566" y="242" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">JDEPD</text>
  <text x="566" y="253" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Oracle 19.0.0.0</text>
  <text x="566" y="264" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Running</text>
  <text x="599.44" y="264" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Sessions 112</text>
  <rect x="698" y="220" width="112" height="40" rx="5" fill="#0d1220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2"/>
  <rect x="702" y="225" width="2.5" height="30" rx="1" fill="#94a3b8"/>
  <text x="709" y="232" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">jde-dep01</text>
  <text x="709" y="243" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Database client</text>
  <text x="709" y="254" fill="#94a3b8" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Not known</text>
  <text x="750.28" y="254" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Sessions 6</text>
  <rect x="698" y="268" width="112" height="40" rx="5" fill="#0d1220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2"/>
  <rect x="702" y="273" width="2.5" height="30" rx="1" fill="#94a3b8"/>
  <text x="709" y="280" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">etl01</text>
  <text x="709" y="291" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Database client</text>
  <text x="709" y="302" fill="#94a3b8" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Not known</text>
  <text x="750.28" y="302" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Sessions 2</text>
  <path d="M369,342 L389.0,342 L389.0,250 L409,250" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="363.056" y="289.0" width="51.888000000000005" height="12" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
  <text x="389.0" y="298.0" fill="#cbd5e1" fontSize="6.8" textAnchor="middle" fontFamily="system-ui, sans-serif">4,803 calls</text>
  <path d="M515,250 L555,250" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="509.056" y="241" width="51.888000000000005" height="12" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
  <text x="535.0" y="250" fill="#cbd5e1" fontSize="6.8" textAnchor="middle" fontFamily="system-ui, sans-serif">42 sessions</text>
  <path d="M316.0,384 L316.0,400 L585,400 L585,270" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="424.556" y="393" width="51.888000000000005" height="12" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
  <text x="450.5" y="402" fill="#cbd5e1" fontSize="6.8" textAnchor="middle" fontFamily="system-ui, sans-serif">59 sessions</text>
  <path d="M698,240 L679.5,240 L679.5,250 L661,250" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <text x="694" y="237" fill="#cbd5e1" fontSize="6.6" textAnchor="end" fontFamily="system-ui, sans-serif">6 sessions</text>
  <path d="M698,288 L679.5,288 L679.5,250 L661,250" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <text x="694" y="285" fill="#cbd5e1" fontSize="6.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 sessions</text>
  <rect x="240" y="423" width="2.5" height="9" fill="#4ade80"/>
  <text x="246" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">Running</text>
  <rect x="291.00800000000004" y="423" width="2.5" height="9" fill="#94a3b8"/>
  <text x="297.00800000000004" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">Not known</text>
  <rect x="350.30400000000003" y="423" width="12" height="9" rx="2" fill="none" stroke="#94a3b8" strokeDasharray="2 2"/>
  <text x="366.30400000000003" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">Not declared in Server Manager</text>
  <line x1="506.624" y1="427" x2="520.624" y2="427" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="524.624" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">business function calls</text>
  <line x1="635.936" y1="427" x2="649.936" y2="427" stroke="#c084fc" strokeWidth="1.6"/>
  <text x="653.936" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">database sessions</text>
  <text x="240" y="444" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Read on 2026-11-22 13:22 UTC.</text>
  <rect x="850" y="166" width="230" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="860" y="182" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ENT_PD</text>
  <text x="860" y="194" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Enterprise server</text>
  <text x="860" y="212" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">State</text>
  <text x="860" y="222" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">Running</text>
  <text x="860" y="234" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Declared in Server Manager</text>
  <text x="860" y="244" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">yes</text>
  <text x="860" y="256" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Host</text>
  <text x="860" y="266" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">jde-ent01.example.com</text>
  <text x="860" y="278" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Tier</text>
  <text x="860" y="288" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">Enterprise servers</text>
  <text x="860" y="300" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Version</text>
  <text x="860" y="310" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">9.2.8.1</text>
  <text x="860" y="322" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Type</text>
  <text x="860" y="332" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">entserver</text>
  <text x="860" y="346" fill="#64748b" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ITS LINES</text>
  <rect x="858" y="352" width="214" height="26" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="864" y="363" fill="#e2e8f0" fontSize="7" fontFamily="system-ui, sans-serif">from HTML_PD to ENT_PD — 4,803 calls</text>
  <text x="864" y="373" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">evidence: business function calls</text>
  <rect x="858" y="382" width="214" height="26" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="864" y="393" fill="#e2e8f0" fontSize="7" fontFamily="system-ui, sans-serif">from jde-ent01 to JDEPD — 42 sessions</text>
  <text x="864" y="403" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">evidence: database sessions</text>
  <rect x="1120" y="20" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kept for the audit report</text>
  <text x="1130" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">this reading, in the report</text>
  <line x1="1120" y1="37.0" x2="840" y2="34" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="1120" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Download as SVG</text>
  <text x="1130" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the picture, as drawn</text>
  <line x1="1120" y1="97.0" x2="980" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="104" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="119" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five figures</text>
  <text x="30" y="132" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">undeclared in amber</text>
  <line x1="200" y1="121.0" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The sources read</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one missing is said, the rest drawn</text>
  <line x1="200" y1="177.0" x2="242" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One column per tier</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hosts inside, then instances</text>
  <line x1="200" y1="253.0" x2="252" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application server</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">WebLogic or WebSphere + version</text>
  <line x1="200" y1="347.0" x2="263" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A line = evidence</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">calls or sessions, with a count</text>
  <line x1="200" y1="417.0" x2="369.0" y2="301.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dashed outline</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">not declared in Server Manager</text>
  <line x1="1120" y1="253.0" x2="810" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a card</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what is known, why each line</text>
  <line x1="1120" y1="167.0" x2="1070" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
</svg>

---

## The figures and the sources \{#figures\}

Five figures head the page: **instances running** (out of those Server Manager declares), **hosts in Server Manager**, **database**, **not declared in Server Manager** (amber when there is one) and **links with their evidence**.

Under them, each source of the diagram says whether it was read: **Server Manager instances**, **Business function calls**, **JD Edwards pool**, **Database instance**, **Database sessions** — *read*, *not read* or *not read on this database*. A source that did not answer is named in a warning with the reason, and the rest is still drawn.

What the page read is kept while the browser session lasts: opening it again draws it at once, and the header says when it was read (*Read at 14:02*). **Read again** reads anew. The Monitoring pages — Platform synthesis, Architecture, Platform analysis, Performance and Database audit — share their readings: what one page has read, the others draw at once, and what one page reads again is fresh in the others. The readings are kept per user, in the browser's memory only: reloading the browser reads again.

---

## The diagram \{#diagram\}

One column per tier, left to right — a tier with nothing in it is not drawn:

| Tier | What it holds |
|---|---|
| **Web and AIS** | The web servers and the AIS servers, and the **application server** they run in — WebLogic or WebSphere, with its version (*Application server · WebLogic 14.1.1*). |
| **Enterprise servers** | The enterprise servers. |
| **Database** | The database the JD Edwards connection points at: its product (Oracle, SQL Server, Db2, Db2 for i…) and version, its sessions. |
| **Other database clients** | The other machines connected to the database — a tool, an interface: the busiest ones one by one, the rest gathered on one card (*12 other machines*). |
| **Other servers** | The instances of another type. |
| **Administration** | The Server Manager console. |

Inside a tier, the cards sit on their **host**: a machine is one host whatever a source calls it (`ENT01.example.com`, `ent01` and `EXAMPLE\ENT01` are the same machine). Each card gives its name, its kind, its state — **Running**, **To review**, **Stopped**, **Not known** — and a key fact (version, home, sessions).

### What Server Manager does not declare \{#undeclared\}

Server Manager declares servers, not databases. What the database side shows and the console does not list is drawn with a **dashed outline**: the database server when its host is none of the console's hosts, a machine that runs JD Edwards kernels without being an instance, the other machines connected to the database. The figure **not declared in Server Manager** counts them: a machine nobody declared is often the first thing an audit asks about.

### The lines \{#lines\}

A line is drawn **only on evidence**, and says which:

| Line | Evidence |
|---|---|
| Blue — **business function calls** | A web server's own counters of the calls it sent to an enterprise server (*4,803 calls*). |
| Purple — **database sessions** | The sessions open on the database at this moment, by machine (*42 sessions*). |

Nothing is drawn because it is usual: two servers without a line are servers between which nothing was measured.

### A card's details \{#details\}

A click on a card opens, on the right, what is known of it: its **State**, whether it is **Declared in Server Manager** (*no — found on the database side only* for a dashed card), its **Host**, its **Tier**, then its own facts (version, home, type, port, sessions, programs, accounts…), and **Its lines** — each line from or to it, with its evidence. A second click closes it. The **−** / **+** buttons zoom the diagram.

---

## Download and keep \{#download\}

| Button | What it does |
|---|---|
| **Download as SVG** | Reads the platform again and saves the picture as an SVG file (`jde-architecture.svg`), at the size of a landscape report page. |
| **Keep for the audit report** | Reads the platform again and keeps that reading for the licence audit report of the application on this JD Edwards pool: the report draws it on its architecture page, in its own language — unless a picture was put there by hand. Only the last reading is kept. |

The line under the header says what is kept: *Nothing is kept for the audit report yet*, or the date of the reading kept and its pool.

---

## When a source does not answer \{#partial\}

The diagram is drawn from what was read:

- **Server Manager does not answer** — the servers shown are those the database sessions name, and the page says that what is declared is not known;
- **the database sessions are not read** — who connects to the database is not shown;
- **the database is none of Oracle, SQL Server and Db2** — the database audit is not read, but the pool still says where the database is;
- **nothing answers** — the page says that neither Server Manager nor the database answered.

---

## Access \{#access\}

The page shows to the roles that hold its menu entry and the permissions `plugin:nomajde.architecture:*`. The predefined roles **Platform operator** and **Administrator** hold both (see [Predefined roles](../overview.md#roles)). It reads Server Manager through the `jde_server_manager` pool (see [Server Manager](./server-manager.md#connection)) and the JD Edwards database, with the statements the [Database audit](./database-audit.md) already sends: no new statement, no AWR, no ASH.

---

## Tips & best practices \{#tips\}

- A dashed card deserves a question: a machine that runs kernels or holds sessions on the database without being declared is either forgotten in Server Manager or not JD Edwards at all.
- Read the page at a busy hour: the database sessions are those of the moment, and a quiet platform draws fewer lines.
- Keep a reading for the audit report once the platform is complete — after a restart, servers not yet called draw no line.

---

## Related

- [Platform synthesis](../synthesis.md) — the diagram with the points to review.
- [Server Manager](./server-manager.md) — the instances, one grid per subject.
- [Database audit](./database-audit.md) — the sessions by machine and program.
