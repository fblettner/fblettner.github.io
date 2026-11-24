---
title: Oracle Data Integrator
description: "Nomasx-1 Licences → Oracle Data Integrator page — a questionnaire on an on-premise installation (where the agents run, the cluster behind a virtual machine, the repository database and its edition, the users), each answer stored, and beside it the processors needed against subscribed, the estimated risk and the findings."
keywords: [Nomasx-1, licences, Oracle Data Integrator, ODI, agent, processor licence, core factor, VMware cluster, repository, Express Edition, Named User Plus, JD Edwards]
---

# Oracle Data Integrator

The **Oracle Data Integrator** page describes an on-premise installation of Data Integrator for a licence contract, and says beside it what its licences should be. Nothing of Data Integrator is read on the machines: the page **asks** — where an agent runs, the cluster behind a virtual machine, the repository database and its edition, the users — **stores each answer as it is given**, and reads the analysis again after each one: **processors needed against subscribed**, **Named User Plus against the minimum**, the **estimated risk** and the **findings**.

Open it from **Licences → Oracle Data Integrator**.

:::warning[An assumption]
The page says it on top: *an assumption built from your answers and Oracle's public rules, to discuss with Oracle — never a certified position. On premise only: in Oracle's cloud the licences are included.*
:::

---

## At a glance

<svg viewBox="0 0 1320 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="odil-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="odil-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="odil-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="odil-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="542" rx="14" fill="url(#odil-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle Data Integrator</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Where the agents run, and what that means in processor licences.</text>
  <rect x="1002" y="36" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="824" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="834" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">123456789 · ERP ▾</text>
  <text x="808" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Contract</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="22" rx="6" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.5)" strokeWidth="1"/>
  <text x="250" y="105" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">An assumption built from your answers and Oracle's public rules, to discuss with Oracle — never a certified position. On premise only.</text>
  <rect x="240" y="124" width="500" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="138" r="8" fill="#4a9eff"/>
  <text x="256" y="141.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="270" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where does an agent run?</text>
  <line x1="241" y1="152" x2="739" y2="152" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MACHINE</text>
  <text x="342" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CORES</text>
  <text x="392" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSOR FAMILY</text>
  <text x="512" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIRTUALISATION</text>
  <text x="632" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLUSTER</text>
  <text x="252" y="189" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">JDEENT01</text>
  <rect x="342" y="176" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <rect x="392" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD… ▾</text>
  <rect x="512" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">VMware virtual… ▾</text>
  <rect x="632" y="176" width="60" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">PRODCL</text>
  <rect x="696" y="176" width="38" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="189.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <text x="252" y="217" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ODIAGT01</text>
  <rect x="342" y="204" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="217.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <rect x="392" y="204" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="217.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD… ▾</text>
  <rect x="512" y="204" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="217.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Physical machine ▾</text>
  <rect x="632" y="204" width="60" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="217.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Cluster</text>
  <rect x="696" y="204" width="38" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="217.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="252" y="232" width="190" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="245.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">a known server… ▾</text>
  <rect x="450" y="232" width="230" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="245.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">or its name</text>
  <rect x="688" y="232" width="46" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="711.0" y="245.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="240" y="270" width="500" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="284" r="8" fill="#4a9eff"/>
  <text x="256" y="287.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="270" y="288" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The clusters behind the virtual machines</text>
  <line x1="241" y1="298" x2="739" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="316" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODCL</text>
  <text x="252" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ESXHOST01</text>
  <rect x="342" y="321" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="334.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">32</text>
  <text x="252" y="354" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ESXHOST02</text>
  <rect x="342" y="341" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="354.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">32</text>
  <text x="392" y="354" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">… one line per physical host</text>
  <rect x="240" y="372" width="500" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="386" r="8" fill="#4a9eff"/>
  <text x="256" y="389.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="270" y="390" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The databases</text>
  <line x1="241" y1="400" x2="739" y2="400" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="423" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ODIREP01</text>
  <text x="342" y="423" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Repository</text>
  <rect x="462" y="410" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="423.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Express Edition ▾</text>
  <rect x="592" y="415" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="609" y="424" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards uses it too</text>
  <rect x="240" y="456" width="500" height="90" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="470" r="8" fill="#4a9eff"/>
  <text x="256" y="473.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="270" y="474" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The users</text>
  <line x1="241" y1="484" x2="739" y2="484" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="505" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">How many people run or access the transformations?</text>
  <rect x="578" y="492" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="505.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">not known</text>
  <text x="252" y="531" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Size of the Express Edition repository (GB)</text>
  <rect x="578" y="518" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="531.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">6</text>
  <rect x="752.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="143" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">52</text>
  <text x="762.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS NEEDED</text>
  <rect x="920.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="143" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="930.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS SUBSCRIBED</text>
  <rect x="752.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="189" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">1 980 000 €</text>
  <text x="762.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ESTIMATED RISK</text>
  <rect x="920.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="189" fill="#c084fc" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="930.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STILL TO ANSWER</text>
  <rect x="752" y="220" width="328" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it means</text>
  <rect x="760" y="250" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="250" width="3" height="24" fill="#f87171"/>
  <text x="770" y="265" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="824" y="265" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Cluster PRODCL is counted whole: 96 cores…</text>
  <rect x="760" y="280" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="280" width="3" height="24" fill="#f87171"/>
  <text x="770" y="295" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="824" y="295" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">An agent runs on JDEENT01, a JD Edwards server…</text>
  <rect x="760" y="310" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="310" width="3" height="24" fill="#f87171"/>
  <text x="770" y="325" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="824" y="325" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">52 processor licences needed, 4 subscribed…</text>
  <rect x="760" y="340" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="340" width="3" height="24" fill="#4ade80"/>
  <text x="770" y="355" fill="#4ade80" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">FINE</text>
  <text x="824" y="355" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">The repository on ODIREP01 (6 GB) is within…</text>
  <rect x="752" y="378" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="396" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is counted</text>
  <text x="762" y="416" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">cluster PRODCL: 96 cores on ESXHOST01… → 48</text>
  <rect x="752" y="436" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="454" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Subscribed on this contract</text>
  <text x="762" y="474" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Data Integrator Enterprise Edition · 4 Processor</text>
  <rect x="20" y="132" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Machines</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">agents, sized in Server sizes</text>
  <line x1="205" y1="149.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="20" y="280" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Clusters</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every physical host, with cores</text>
  <line x1="205" y1="297.0" x2="240" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="20" y="382" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Databases</text>
  <text x="30" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repository, edition</text>
  <line x1="205" y1="399.0" x2="240" y2="396" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="20" y="466" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="481" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Users</text>
  <text x="30" y="494" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each answer stored as given</text>
  <line x1="205" y1="483.0" x2="240" y2="480" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contract</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one installation per contract</text>
  <line x1="1115" y1="53.0" x2="909" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="130" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Needed against subscribed</text>
  <text x="1125" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and the estimated risk</text>
  <line x1="1115" y1="147.0" x2="1080" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="270" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Findings</text>
  <text x="1125" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">risk · to check · not known · fine</text>
  <line x1="1115" y1="287.0" x2="1080" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="399" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="414" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is counted</text>
  <text x="1125" y="427" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each machine or whole cluster</text>
  <line x1="1115" y1="416.0" x2="1080" y2="403" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="477" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="492" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Subscribed</text>
  <text x="1125" y="505" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the contract's lines on the product</text>
  <line x1="1115" y1="494.0" x2="1080" y2="465" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
</svg>

---

## The contract \{#contract\}

An installation belongs to a contract: **Contract** in the header picks it (`number · description`), and the page reopens on the last one — at first, on a contract that already has a line on Data Integrator or a machine stated. With no contract at all, the page says to create one under **Licences → [CSI](./csi.md)**. **Read again** reads the installation again.

---

## The questionnaire \{#questionnaire\}

Four numbered steps on the left. Every change is saved at once — a list when a value is picked, a number when the field is left — and the analysis on the right is read again.

### 1 · Where does an agent run? \{#step-agents\}

Oracle counts every processor where the transformations are executed: each machine with an agent, wherever it was installed. Add a machine from **a known server…** (the machines of nomajde's [Server sizes](../../nomajde/monitoring/server-sizes.md)) or type **its name**, then **Add**.

| Field | What to enter |
|---|---|
| **Cores** | The cores of the machine. |
| **Processor family** | Its chip, with the core factor of Oracle's *Processor Core Factor Table* (0.5 for Intel Xeon and AMD EPYC, 1 for IBM POWER6 and later…). |
| **Virtualisation** | *Physical machine*, *Hardware partition*, *VMware virtual machine*, *Other virtual machine*. |
| **Cluster** | For a virtual machine, the cluster it runs on. |

The cores, the family, the virtualisation and the cluster are those of [Server sizes](../../nomajde/monitoring/server-sizes.md#processor-licences): one table of machines, shared with the sizing of the platform. **Remove** takes the machine out of the installation; its row in Server sizes stays.

### 2 · The clusters behind the virtual machines \{#step-clusters\}

A virtual machine that is not a hardware partition counts **every** physical host of its cluster. For each cluster named in step 1, state its hosts with their cores and processor family; they are kept in Server sizes as *Physical host of a cluster (hypervisor)*. *No virtual machine names a cluster.* when none does.

### 3 · The databases \{#step-databases\}

The repository needs an Oracle database; Express Edition can do, within its limits. Add the repository machine, then pick its **Edition** — *Express Edition*, *Standard Edition 2*, *Enterprise Edition* or *Not Oracle* — and tick **JD Edwards uses it too** when the repository sits on the JD Edwards database.

### 4 · The users \{#step-users\}

| Question | Answer |
|---|---|
| **How many people run or access the transformations?** | A number; *not known* while empty. It counts when the contract has a Named User Plus line. |
| **Size of the Express Edition repository (GB)** | Asked only when the repository is on Express Edition. |

An empty answer goes back to *not known*.

---

## What it means \{#analysis\}

The right-hand side is the server's reading of the answers.

| Block | What it shows |
|---|---|
| **Figures** | *Processors needed* (red when above those subscribed), *Processors subscribed*, *Named User Plus needed* and *subscribed* (when the contract has a Named User Plus line), *Estimated risk* in euros, *Still to answer*. |
| **What it means** | The findings, the risks first, each with its level: **risk**, **to check**, **not known**, **fine**. |
| **What is counted** | Each machine (`name: cores → processors`) or whole cluster (`cluster name: cores on hosts → processors`). |
| **Subscribed on this contract** | The contract's lines on Data Integrator, with their quantity and metric — *no line for this product* otherwise. |

### How the processors are counted \{#processors\}

Each machine's cores × the core factor of its chip, added up per factor before the factor is applied, then rounded up once. A virtual machine on VMware or another hypervisor counts the whole cluster it names; a hardware partition counts only itself. Named User Plus needed is the users stated, never below the minimum per processor of the price list × the processors needed. What is beyond the subscription is priced at the public list price with three years of support.

### The findings \{#findings\}

| Level | Finding |
|---|---|
| risk | **Cluster counted whole** — its cores on its hosts give the processor licences, because of the machine that names it. |
| risk | **An agent on a JD Edwards server** — all the cores of that server count for Data Integrator. |
| risk | **No line for this product** — the processor licences an audit would claim, priced. |
| risk | **Processor licences missing** — needed, subscribed, missing, priced. |
| risk | **Named User Plus missing** — needed (users, minimum per processor), subscribed, missing, priced. |
| risk | **Repository beyond Express Edition** — more than 12 GB: it needs a licensed edition. |
| risk | **Database with no line** — a repository on Standard Edition 2 or Enterprise Edition, not used by JD Edwards, with no line for that edition. |
| not known | No machine stated · a machine with no cores · a virtual machine whose cluster hosts are not stated (its own cores are only a floor) · a cluster host with no cores · a question not answered · no repository · an edition not stated. |
| fine | Repository within the 12 GB of Express Edition · database also used by JD Edwards (check the contract allows this use) · database covered by a line. |

The same sentences, in the language of the reader, appear for the installation on **Reviews → Licences**, in its PDF and in the licence audit report; what it is short of is part of the estimated risk there.

---

## Tips & best practices

- **State every agent**, including the one installed on a JD Edwards server for convenience: it brings all the cores of that server into the count.
- **Name the cluster of each virtual machine and state its hosts.** Without them, the figure is only a floor and says so.
- **Answer until *Still to answer* reads 0**: a question left open is said *not known*, never read as fine.
- **Keep the page for the discussion with Oracle**, as an assumption at public list prices, never as a certified count.
