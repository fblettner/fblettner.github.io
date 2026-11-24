---
title: Oracle Analytics Server
description: "Nomasx-1 Licences → Oracle Analytics Server page — a questionnaire on an on-premise installation (its servers, the cluster behind a virtual machine, the repository and data warehouse databases, where the users are kept and how many), the users kept in WebLogic counted through a directory pool, and beside it the processors and Named User Plus needed against subscribed, the estimated risk and the findings."
keywords: [Nomasx-1, licences, Oracle Analytics Server, OAS, Business Intelligence, WebLogic, embedded LDAP, directory pool, Named User Plus, processor licence, data warehouse, Express Edition]
---

# Oracle Analytics Server

The **Oracle Analytics Server** page describes an on-premise installation of Analytics Server (the former Business Intelligence) for a licence contract, and says beside it what its licences should be. Nothing of Analytics Server is read on the machines, except the users kept in WebLogic: the page **asks** — its servers, the cluster behind a virtual machine, the repository and data warehouse databases with their edition, where the users are kept and how many — **stores each answer as it is given**, and reads the analysis again after each one: **processors and Named User Plus needed against subscribed**, the **estimated risk** and the **findings**.

Open it from **Licences → Oracle Analytics Server**.

:::warning[An assumption]
The page says it on top: *an assumption built from your answers and Oracle's public rules, to discuss with Oracle — never a certified position. On premise only: in Oracle's cloud the licences are included.*
:::

---

## At a glance

<svg viewBox="0 0 1320 606" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oasl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oasl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oasl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oasl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="568" rx="14" fill="url(#oasl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle Analytics Server</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Its servers, its databases and its users, against what is subscribed.</text>
  <rect x="1002" y="36" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="824" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="834" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">123456789 · ERP ▾</text>
  <text x="808" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Contract</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="22" rx="6" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.5)" strokeWidth="1"/>
  <text x="250" y="105" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">An assumption built from your answers and Oracle's public rules, to discuss with Oracle — never a certified position. On premise only.</text>
  <rect x="240" y="124" width="500" height="114" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="138" r="8" fill="#4a9eff"/>
  <text x="256" y="141.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="270" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Which servers run Analytics Server?</text>
  <line x1="241" y1="152" x2="739" y2="152" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MACHINE</text>
  <text x="342" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CORES</text>
  <text x="392" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSOR FAMILY</text>
  <text x="512" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIRTUALISATION</text>
  <text x="632" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLUSTER</text>
  <text x="252" y="189" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">OASSRV01</text>
  <rect x="342" y="176" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">16</text>
  <rect x="392" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD… ▾</text>
  <rect x="512" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Physical machine ▾</text>
  <rect x="632" y="176" width="60" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="189.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Cluster</text>
  <rect x="696" y="176" width="38" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="189.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="252" y="204" width="190" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="217.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">a known server… ▾</text>
  <rect x="450" y="204" width="230" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="217.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">or its name</text>
  <rect x="688" y="204" width="46" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="711.0" y="217.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="240" y="248" width="500" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="262" r="8" fill="#4a9eff"/>
  <text x="256" y="265.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="270" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The clusters behind the virtual machines</text>
  <line x1="241" y1="276" x2="739" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="292" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">No virtual machine names a cluster.</text>
  <rect x="240" y="308" width="500" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="322" r="8" fill="#4a9eff"/>
  <text x="256" y="325.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="270" y="326" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The databases</text>
  <line x1="241" y1="336" x2="739" y2="336" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="359" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">JDEDB01</text>
  <text x="342" y="359" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Repository</text>
  <rect x="462" y="346" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="359.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Enterprise Edition ▾</text>
  <rect x="592" y="351" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M594.5,356.5 L596.8,358.8 L600.8,354" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="609" y="360" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards uses it too</text>
  <text x="252" y="385" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">DWHDB01</text>
  <text x="342" y="385" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Data warehouse</text>
  <rect x="462" y="372" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="385.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Express Edition ▾</text>
  <rect x="592" y="377" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="609" y="386" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards uses it too</text>
  <rect x="240" y="418" width="500" height="154" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="432" r="8" fill="#4a9eff"/>
  <text x="256" y="435.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="270" y="436" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The users</text>
  <line x1="241" y1="446" x2="739" y2="446" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="467" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Where are the users kept?</text>
  <rect x="578" y="454" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="467.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">In WebLogic ▾</text>
  <text x="252" y="493" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">How many users does Analytics Server have?</text>
  <rect x="578" y="480" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="493.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">240</text>
  <line x1="252" y1="506" x2="728" y2="506" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="252" y="522" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Count them in WebLogic</text>
  <rect x="252" y="530" width="300" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="543.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">WLS_LDAP ▾</text>
  <rect x="560" y="530" width="60" height="20" rx="5" fill="url(#oasl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="590.0" y="543.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Count</text>
  <text x="252" y="564" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">240 users counted on 2026-11-20 (pool WLS_LDAP)</text>
  <rect x="752.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="143" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">8</text>
  <text x="762.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS NEEDED</text>
  <rect x="920.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="143" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="930.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS SUBSCRIBED</text>
  <rect x="752.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="189" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">240</text>
  <text x="762.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAMED USER PLUS NEEDED</text>
  <rect x="920.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="189" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">100</text>
  <text x="930.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAMED USER PLUS SUBSCRIBED</text>
  <rect x="752.0" y="216" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="235" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">350 000 €</text>
  <text x="762.0" y="248" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ESTIMATED RISK</text>
  <rect x="920.0" y="216" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="235" fill="#4ade80" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="930.0" y="248" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STILL TO ANSWER</text>
  <rect x="752" y="266" width="328" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="284" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it means</text>
  <rect x="760" y="296" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="296" width="3" height="24" fill="#f87171"/>
  <text x="770" y="311" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="824" y="311" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">240 Named User Plus needed (240 users, minimum 200…</text>
  <rect x="760" y="326" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="326" width="3" height="24" fill="#fb923c"/>
  <text x="770" y="341" fill="#fb923c" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">TO CHECK</text>
  <text x="824" y="341" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">DWHDB01 is a data warehouse on Express Edition…</text>
  <rect x="760" y="356" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="356" width="3" height="24" fill="#4ade80"/>
  <text x="770" y="371" fill="#4ade80" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">FINE</text>
  <text x="824" y="371" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">JDEDB01 is also JD Edwards' database…</text>
  <rect x="752" y="394" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="412" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is counted</text>
  <text x="762" y="432" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">OASSRV01: 16 cores → 8</text>
  <rect x="752" y="452" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="470" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Subscribed on this contract</text>
  <text x="762" y="490" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Analytics Server · 100 Named User Plus</text>
  <rect x="20" y="132" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Machines</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">servers, sized in Server sizes</text>
  <line x1="205" y1="149.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="258" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Clusters</text>
  <text x="30" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every physical host, with cores</text>
  <line x1="205" y1="275.0" x2="240" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="318" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Databases</text>
  <text x="30" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repository, warehouse, edition</text>
  <line x1="205" y1="335.0" x2="240" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="428" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Users</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each answer stored as given</text>
  <line x1="205" y1="445.0" x2="240" y2="442" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="536" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="551" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Count them in WebLogic</text>
  <text x="30" y="564" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">through a directory pool</text>
  <line x1="205" y1="553.0" x2="252" y2="550" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contract</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one installation per contract</text>
  <line x1="1115" y1="53.0" x2="909" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="130" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Needed against subscribed</text>
  <text x="1125" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and the estimated risk</text>
  <line x1="1115" y1="147.0" x2="1080" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="316" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Findings</text>
  <text x="1125" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">risk · to check · not known · fine</text>
  <line x1="1115" y1="333.0" x2="1080" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="415" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="430" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is counted</text>
  <text x="1125" y="443" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each machine or whole cluster</text>
  <line x1="1115" y1="432.0" x2="1080" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="493" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="508" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Subscribed</text>
  <text x="1125" y="521" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the contract's lines on the product</text>
  <line x1="1115" y1="510.0" x2="1080" y2="481" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
</svg>

---

## The contract \{#contract\}

An installation belongs to a contract: **Contract** in the header picks it (`number · description`), and the page reopens on the last one — at first, on a contract that already has a line on Analytics Server or a machine stated. With no contract at all, the page says to create one under **Licences → [CSI](./csi.md)**. **Read again** reads the installation again.

The contract lines read as Analytics Server are those on *Analytics Server* and on *Business Intelligence Suite Foundation Edition* (and its *for Oracle Applications* version).

---

## The questionnaire \{#questionnaire\}

Four numbered steps on the left. Every change is saved at once — a list when a value is picked, a number when the field is left — and the analysis on the right is read again.

### 1 · Which servers run Analytics Server? \{#step-servers\}

Every machine where Analytics Server is installed or running. Add a machine from **a known server…** (the machines of nomajde's [Server sizes](../../nomajde/monitoring/server-sizes.md)) or type **its name**, then **Add**.

| Field | What to enter |
|---|---|
| **Cores** | The cores of the machine. |
| **Processor family** | Its chip, with the core factor of Oracle's *Processor Core Factor Table* (0.5 for Intel Xeon and AMD EPYC, 1 for IBM POWER6 and later…). |
| **Virtualisation** | *Physical machine*, *Hardware partition*, *VMware virtual machine*, *Other virtual machine*. |
| **Cluster** | For a virtual machine, the cluster it runs on. |

These values are those of [Server sizes](../../nomajde/monitoring/server-sizes.md#processor-licences): one table of machines, shared with the sizing of the platform. **Remove** takes the machine out of the installation; its row in Server sizes stays.

### 2 · The clusters behind the virtual machines \{#step-clusters\}

A virtual machine that is not a hardware partition counts **every** physical host of its cluster. For each cluster named in step 1, state its hosts with their cores and processor family; they are kept in Server sizes as *Physical host of a cluster (hypervisor)*. *No virtual machine names a cluster.* when none does.

### 3 · The databases \{#step-databases\}

The repository database, and every database Analytics Server reads (the data warehouse). Add each one under **Repository** or **Data warehouse**, pick its **Edition** — *Express Edition*, *Standard Edition 2*, *Enterprise Edition* or *Not Oracle* — and tick **JD Edwards uses it too** when it is the JD Edwards database.

### 4 · The users \{#step-users\}

| Question | Answer |
|---|---|
| **Where are the users kept?** | *In WebLogic*, *In a database* or *Single sign-on*. |
| **How many users does Analytics Server have?** | A number; *not known* while empty. |
| **Size of the Express Edition repository (GB)** | Asked only when the repository is on Express Edition. |

An empty answer goes back to *not known*.

---

## Count the users kept in WebLogic \{#weblogic\}

When the users are *In WebLogic*, the step offers **Count them in WebLogic**: WebLogic keeps its users in an embedded directory, which Nomasx-1 reads through a **directory pool** (Liberty → Pools, see [An LDAP directory](../../framework/connectors.md#pool-ldap)):

| Pool field | Value |
|---|---|
| **Host**, **Port** | The WebLogic administration server and its port, over `ldap://` (`ldap://<administration server>:<its port>`). |
| **Base DN** | `dc=<the domain's name>` |
| **Account** | `cn=Admin` |
| **Password** | The domain's *Embedded LDAP* credential (WebLogic console → the domain → Security → Embedded LDAP). |

Pick the pool and click **Count**. The users of the default realm are counted under `ou=people,ou=myrealm` of that base (a pool whose base already starts with `ou=` is read as it is). The figure becomes the answer to *How many users*, with its date and its pool: *N users counted on … (pool …)*. Typing a number by hand takes over, and the line goes away. *No directory pool exists yet.* when there is none to pick; a directory that cannot be read says why (wrong credential, base not found).

Users kept in a database or behind single sign-on stay a declared number.

---

## What it means \{#analysis\}

The right-hand side is the server's reading of the answers.

| Block | What it shows |
|---|---|
| **Figures** | *Processors needed* (red when above those subscribed), *Processors subscribed*, *Named User Plus needed* and *subscribed* (when the contract has a Named User Plus line), *Estimated risk* in euros, *Still to answer*. |
| **What it means** | The findings, the risks first, each with its level: **risk**, **to check**, **not known**, **fine**. |
| **What is counted** | Each server (`name: cores → processors`) or whole cluster (`cluster name: cores on hosts → processors`). |
| **Subscribed on this contract** | The contract's lines on Analytics Server, with their quantity and metric — *no line for this product* otherwise. |

### How the licences are counted \{#processors\}

Each server's cores × the core factor of its chip, added up per factor before the factor is applied, then rounded up once; a virtual machine on VMware or another hypervisor counts the whole cluster it names. **Named User Plus needed** is the users stated, never below the minimum per processor of the price list × the processors needed. What is beyond the subscription is priced at the public list price with three years of support.

### The findings \{#findings\}

| Level | Finding |
|---|---|
| risk | **Cluster counted whole** — its cores on its hosts give the processor licences, because of the server that names it. |
| risk | **No line for this product** — the processor licences an audit would claim, priced. |
| risk | **Processor licences missing** — needed, subscribed, missing, priced. |
| risk | **Named User Plus missing** — needed (users, minimum per processor), subscribed, missing, priced. |
| risk | **Repository beyond Express Edition** — more than 12 GB: it needs a licensed edition. |
| risk | **Database with no line** — a repository or data warehouse on Standard Edition 2 or Enterprise Edition, not used by JD Edwards, with no line for that edition. |
| to check | **Data warehouse on Express Edition** — check its size and use stay within the edition's limits. |
| not known | No server stated · a server with no cores · a virtual machine whose cluster hosts are not stated (its own cores are only a floor) · a cluster host with no cores · where the users are kept or how many, not answered · no repository · an edition not stated. |
| fine | Repository within the 12 GB of Express Edition · database also used by JD Edwards (check the contract allows this use) · database covered by a line. |

The same sentences, in the language of the reader, appear for the installation on **Reviews → Licences**, in its PDF and in the licence audit report; what it is short of is part of the estimated risk there.

---

## Tips & best practices

- **Count the WebLogic users rather than typing them**: the figure keeps its date and its pool, and is counted again in one click before a discussion.
- **State the data warehouse databases too**: a warehouse on Enterprise Edition with no line is a licence of its own.
- **Name the cluster of each virtual machine and state its hosts.** Without them, the figure is only a floor and says so.
- **Keep the page for the discussion with Oracle**, as an assumption at public list prices, never as a certified count.
