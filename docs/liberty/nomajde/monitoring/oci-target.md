---
title: OCI target
description: "Monitoring → OCI target in Nomajde: the JD Edwards EnterpriseOne platform proposed on Oracle Cloud Infrastructure and its estimated cost — your choices (currency, BYOL or licence included, database edition, high availability, disaster recovery, non-production platforms), the estimate per platform and line by line with Oracle's part numbers, the rules it rests on, the dated price list and the OCI target PDF. An estimate, not a quotation."
keywords: [Nomajde, JD Edwards, JDE E1, Oracle Cloud Infrastructure, OCI, cloud migration, sizing, cost estimate, BYOL, licence included, Base Database Service, high availability, disaster recovery, Data Guard, OCPU, ECPU, price list, PDF]
---

# OCI target

**Monitoring → OCI target** proposes the JD Edwards EnterpriseOne platform on **Oracle Cloud Infrastructure** and says what it would cost. The target starts from what the platform is today — the machines the [Architecture](./architecture.md) reading finds and their size as stated in [Server sizes](./server-sizes.md) — and is priced with Oracle's public price list. Each choice made on the page (currency, database licence, high availability…) is applied at once.

:::warning[An estimate, not a quotation]
The figures are Oracle's public list prices, pay as you go, without discount or commitment. They are not contractual. The page says so at its top, on its diagram and above its table; the PDF says it on its cover, above and under its table and at the foot of every page.
:::

---

## At a glance

<svg viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="noci-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="noci-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="noci-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="noci-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="538" rx="14" fill="url(#noci-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">OCI target</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The platform proposed on Oracle Cloud Infrastructure and its estimated cost.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="717" y="34" width="160" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Get it as a document (PDF)</text>
  <rect x="240" y="76" width="720" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="90.5" fill="#4a9eff" fontSize="8.3" fontFamily="system-ui, sans-serif">An estimate, not a quotation: Oracle's public list prices, pay as you go, without discount or commitment. It is not contractual.</text>
  <rect x="240" y="106" width="720" height="104" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="123" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">YOUR CHOICES</text>
  <line x1="240" y1="130" x2="960" y2="130" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CURRENCY</text>
  <rect x="252.0" y="151" width="222.66666666666666" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262.0" y="164.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">EUR ▾</text>
  <text x="488.66666666666663" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE LICENCE</text>
  <rect x="488.66666666666663" y="151" width="222.66666666666666" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="498.66666666666663" y="164.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">your own licences (BYOL) ▾</text>
  <text x="725.3333333333333" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE EDITION</text>
  <rect x="725.3333333333333" y="151" width="222.66666666666666" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="735.3333333333333" y="164.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Enterprise Edition ▾</text>
  <text x="252" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NON-PRODUCTION PLATFORMS</text>
  <rect x="252" y="190" width="222.66666666666666" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="201.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="488.66666666666663" y="179" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M491.16666666666663,184.5 L493.46666666666664,186.8 L497.46666666666664,182" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="505.66666666666663" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">High availability</text>
  <text x="488.66666666666663" y="202" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">web and enterprise servers doubled, a standby database</text>
  <rect x="725.3333333333333" y="179" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="742.3333333333333" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Disaster recovery site</text>
  <text x="725.3333333333333" y="202" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">a standby database in a second region</text>
  <rect x="240" y="218" width="356.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="238" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">€2,480</text>
  <text x="250" y="250" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">A MONTH, ESTIMATED</text>
  <rect x="604.0" y="218" width="356.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="238" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">€29,760</text>
  <text x="614.0" y="250" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">A YEAR, ESTIMATED</text>
  <rect x="240.0" y="264" width="234.66666666666666" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="284" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">€1,560</text>
  <text x="250.0" y="294" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">PRODUCTION · A MONTH</text>
  <rect x="482.66666666666663" y="264" width="234.66666666666666" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="284" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">€610</text>
  <text x="492.66666666666663" y="294" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NON-PRODUCTION 1 · A MONTH</text>
  <rect x="725.3333333333333" y="264" width="234.66666666666666" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="284" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">€310</text>
  <text x="735.3333333333333" y="294" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">SHARED BY EVERY PLATFORM · A MONTH</text>
  <rect x="240" y="308" width="720" height="72" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="325" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PRODUCTION AS PROPOSED</text>
  <line x1="240" y1="332" x2="960" y2="332" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="252.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="262.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEB AND AIS</text>
  <text x="262.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">2 × 2 OCPU · 30 GB</text>
  <line x1="410.0" y1="356" x2="430.0" y2="356" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#noci-flow)"/>
  <rect x="432.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="432.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="442.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTERPRISE SERVERS</text>
  <text x="442.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">2 × 4 OCPU · 32 GB</text>
  <line x1="590.0" y1="356" x2="610.0" y2="356" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#noci-flow)"/>
  <rect x="612.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="612.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="622.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <text x="622.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">16 ECPU · 32 GB</text>
  <rect x="792.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="792.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="802.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADMINISTRATION</text>
  <text x="802.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">Deployment · Server Manager</text>
  <rect x="240" y="388" width="720" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="405" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE ESTIMATE, LINE BY LINE</text>
  <line x1="240" y1="412" x2="960" y2="412" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IS BILLED</text>
  <text x="590" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUANTITY</text>
  <text x="720" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ORACLE PART</text>
  <text x="870" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">A MONTH</text>
  <rect x="252" y="433" width="696" height="15" fill="rgba(255,255,255,0.04)"/>
  <text x="260" y="444" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCTION</text>
  <text x="940" y="444" fill="#e2e8f0" fontSize="8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">€1,560</text>
  <text x="260" y="461" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Web and AIS server — virtual machines</text>
  <text x="590" y="461" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">2 × 2 OCPU, 30 GB</text>
  <text x="720" y="461" fill="#94a3b8" fontSize="7.8" fontFamily="ui-monospace, monospace">B97384 + B97385</text>
  <text x="940" y="461" fill="#e2e8f0" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">€166</text>
  <text x="260" y="478" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Database — Base Database Service, Enterprise Edition, your own licen…</text>
  <text x="590" y="478" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">16 ECPU (32 GB)</text>
  <text x="720" y="478" fill="#94a3b8" fontSize="7.8" fontFamily="ui-monospace, monospace">B112728 + B112724</text>
  <text x="940" y="478" fill="#e2e8f0" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">€814</text>
  <text x="260" y="495" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Load balancer</text>
  <text x="590" y="495" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">1 × 100 Mbps</text>
  <text x="720" y="495" fill="#94a3b8" fontSize="7.8" fontFamily="ui-monospace, monospace">B93030 + B93031</text>
  <text x="940" y="495" fill="#e2e8f0" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">€28</text>
  <text x="240" y="516" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What the estimate rests on — every sizing rule, what was not known, what is left out</text>
  <rect x="834" y="503" width="126" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="897.0" y="515.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">State the server sizes</text>
  <text x="240" y="538" fill="#64748b" fontSize="8.3" fontFamily="system-ui, sans-serif">Oracle's public price list of 2026-11-02 — as shipped with the application.</text>
  <rect x="834" y="525" width="126" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="897.0" y="537.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Fetch the prices again</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An estimate, not a quotation</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">at the top, on the diagram, the table</text>
  <line x1="200" y1="87.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Your choices</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each applied at once</text>
  <line x1="200" y1="157.0" x2="252" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A month · a year</text>
  <text x="30" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then per platform</text>
  <line x1="200" y1="239.0" x2="240" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Production drawn</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tiers, sizes, administration</text>
  <line x1="200" y1="347.0" x2="252" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Line by line</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quantity, Oracle part, amount</text>
  <line x1="200" y1="457.0" x2="260" y2="460" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Get it as a document</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the OCI target PDF</text>
  <line x1="1000" y1="77.0" x2="797.0" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">HA · disaster recovery</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">doubled servers, standby database</text>
  <line x1="1000" y1="167.0" x2="736.3333333333333" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle part numbers</text>
  <text x="1010" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the dated price file</text>
  <line x1="1000" y1="457.0" x2="780" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="496" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="511" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State the server sizes</text>
  <text x="1010" y="524" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens Server sizes</text>
  <line x1="1000" y1="513.0" x2="960" y2="512" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="538" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="553" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fetch the prices again</text>
  <text x="1010" y="566" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Oracle's public price list</text>
  <line x1="1000" y1="555.0" x2="960" y2="534" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
</svg>

---

## The target \{#target\}

The proposal keeps the three tiers of JD Edwards apart, on Linux virtual machines, with the database on Base Database Service:

| Tier | Proposed as |
|---|---|
| **Web and AIS** | Virtual machines carrying the web and AIS instances. |
| **Enterprise servers** | Virtual machines carrying the enterprise servers. |
| **Database** | **Base Database Service**, billed per ECPU, with its storage and its backups in object storage. |
| **Administration** | A deployment server (Windows) and Server Manager on a small machine of its own (optional), **shared by every platform**. |

**Production** is sized like for like from what each server is today: a physical core is an OCPU (one core with its two threads, that is 2 vCPU), the memory is kept, and no server goes below Oracle's published minimum for JD Edwards on OCI (2 OCPU, 30 GB). A machine that carries several tiers today is divided between them in proportion to their standard size. Each **non-production** platform is one web server, one enterprise server and one database, at that minimum, running all month.

The figures behind production come from [Server sizes](./server-sizes.md): stated, measured by the database, or the standard configuration. A server without a stated or measured size is named in [What the estimate rests on](#rests-on).

---

## Your choices \{#choices\}

| Choice | Values | Default |
|---|---|---|
| **Currency** | The currencies of Oracle's price list. | EUR |
| **Database licence** | **your own licences (BYOL)** or **licence included**. | BYOL |
| **Database edition** | Standard Edition, Enterprise Edition, Enterprise Edition High Performance. | Enterprise Edition |
| **Non-production platforms** | From 0 to 12. | 1 |
| **High availability** | Web and enterprise servers doubled behind a load balancer, and a standby database (Data Guard) in the same region. | Off |
| **Disaster recovery site** | A standby database of the same size in a second region; the application servers' disks are replicated there and the servers are started only when needed — their processors are not billed until then. | Off |

Standard Edition has no Data Guard: with high availability or a recovery site, no standby database is proposed and the protection of the database rests on its backups. With your own licences, the database licences held must cover the ECPU proposed — Oracle's conversion ratio is in its *Universal Credits Service Descriptions*, to check against the contract.

The page remembers the choices in the browser. **Read again** reads the platform again; a choice changed only recomputes the estimate.

---

## The estimate \{#estimate\}

Two figures first — **a month, estimated** and **a year, estimated** — then one per platform: *Production*, *Non-production 1*, *Non-production 2*…, *Shared by every platform* and, with a recovery site, *Disaster recovery site*.

**Production as proposed** draws the production platform: the tiers from left to right, each machine with its OCPU and memory (the database with its ECPU), the administration servers, and the second region when there is one.

**The estimate, line by line** lists, per platform, what is billed:

| Column | Content |
|---|---|
| **What is billed** | Virtual machines, disks, Windows licence, Base Database Service (edition and licence), database storage, database backups, load balancer, replicated disks. |
| **Quantity** | For example `2 × 2 OCPU, 30 GB`, `16 ECPU (32 GB)`, `256 GB`. |
| **Oracle part** | Oracle's part numbers for the line (`B97384 + B97385` for a virtual machine's OCPU and memory). |
| **A month** | The month's amount; the platform's heading carries its total, the last line the total of all. |

---

## What the estimate rests on \{#rests-on\}

Under the table, every rule that applies to this target is written out:

- the like-for-like sizing and Oracle's minimum per server;
- how the database is sized: 4 ECPU stand for a core and bring 8 GB of memory, so its size is the larger of what its cores and its memory ask, never below 8 ECPU;
- its storage — twice its size today, in steps of 256 GB — and its backups in object storage, twice its size;
- the servers whose size is neither stated nor measured, by name, with the advice to state them;
- the sizing does not look at the load: the peaks kept by the snapshots ([Platform synthesis → Capacity](../synthesis.md#capacity)) tell whether a tier can be reduced or must grow;
- high availability, the recovery site and the non-production platforms when chosen;
- the shared servers — Server Manager's lines can be left out of the total when it runs on another server;
- a month counts 744 hours, disks are at balanced performance, virtual machines are the standard x86 shape (E5);
- **what is left out**: network (VPN or FastConnect, data sent out beyond the free allowance), Oracle support for the JD Edwards and database licences, the JD Edwards licences themselves, migration work, free allowances.

**State the server sizes** opens [Server sizes](./server-sizes.md).

---

## The prices \{#prices\}

The prices come from a dated file shipped with the application: the foot of the page names the list in use (*Oracle's public price list of 2026-11-02 — as shipped with the application*, or *fetched on …*). **Fetch the prices again** reads Oracle's public price list and keeps it; the page is computed again with it. It is the only call the page makes outside, and it sends nothing about the platform.

---

## Get it as a document \{#document\}

**Get it as a document (PDF)** writes the OCI target as a PDF, with the choices made on the page and in the page's language: the estimate per platform and line by line with Oracle's part numbers, the servers proposed, production drawn on a landscape page, and every rule the estimate rests on.

The same document is on the **Reports** page (*JD Edwards on Oracle Cloud Infrastructure — target and estimate*), where the language, the customer name written on the cover and each choice are asked as parameters. The [Platform synthesis](../synthesis.md#report) report can also carry the OCI target as one of its chapters.

---

## Access \{#access\}

The page shows to the roles that hold its menu entry and reads with `plugin:nomajde.oci:*`; the PDF needs the right to run the application's reports. The predefined roles **Platform operator** and **Administrator** hold both (see [Predefined roles](../overview.md#roles)).

It reads Server Manager through the `jde_server_manager` pool (see [Server Manager](./server-manager.md#connection)) and the JD Edwards database. A source that does not answer is said in a warning (*Not read — …*).

---

## Tips & best practices \{#tips\}

- State the size of every server in [Server sizes](./server-sizes.md) before sharing an estimate: a target built on the standard configuration only says what the minimum would cost.
- Turn on the *Platform snapshot* job (see [Jobs](../jobs.md)) a few weeks before a sizing: the peaks it keeps tell whether production can be reduced or must grow.
- Compare the options rather than one figure: BYOL against licence included, with and without high availability.
- Fetch the prices again before a meeting: Oracle changes its list.

---

## Related

- [Server sizes](./server-sizes.md) — what production is sized from.
- [Platform synthesis](../synthesis.md) — capacity, improvements and the platform report.
- [Architecture](./architecture.md) — the machines the target starts from.
