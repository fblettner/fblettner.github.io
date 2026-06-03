---
title: Tech Dashboard
description: "Operational health page for the IT team: 14 widgets covering JVM heap, GC, threads and uptime, database ping, build info, filesystem free space and file counts, processing throughput, error trend, retry rate, template processing time, active sessions, live process events (START / END pairs from running jobs, plus inline errors), configuration check, database tables, recent errors, and the background scheduler. One round-trip per refresh, no auth required to render the system block."
keywords: [NomaUBL, tech dashboard, IT, operations, system health, JVM, heap, GC, database ping, filesystem, throughput, error trend, retry rate, template processing time, active sessions, live process events, scheduler events, configuration check, scheduler, F564237]
---

# Tech Dashboard

The **Tech Dashboard** is the IT team's operational view of NomaUBL — a single page bundling 14 widgets that cover the JVM, the database, the filesystem, the processing pipeline, the scheduler and a live feed of running jobs. It complements the [business Dashboard](./dashboard.md): the business audience sees invoice volumes and PA round-trip times, the IT team sees heap pressure, scheduler-driven START / END events and disk usage.

Every refresh hits four backend endpoints in parallel — `/api/system`, `/api/dashboard/tech`, `/api/dashboard/log-tail`, `/api/dashboard/config-check` — so the page lands in one round-trip and stays light on the database.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The widgets read host-level metrics and the NomaUBL processing log; the source format is transparent here.

:::info[New in 2026.05.6]
The Tech Dashboard is brand new. The Scheduler widget that used to sit on the business Dashboard moved here, and the in-memory `ActivityTracker` introduced in the same release fills in the *Active sessions* card when authentication is disabled.
:::

---

## Opening the page

- Sidebar → **Documentation → Tech Dashboard**.
- The page renders even without authentication — the System Health block reports the JVM, the build, the OS and the PA mode regardless. Database-backed widgets show *Not configured* until a connector is set up.

---

## At a glance

<svg viewBox="0 0 1000 880" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tech-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tech-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tech-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="tech-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.04"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="840" rx="14" fill="url(#tech-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tech Dashboard</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#tech-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">↻ Refresh</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="362" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="104" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SYSTEM HEALTH</text>
  <text x="540" y="104" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">2026.05.6 · 2026-05-09</text>
  <text x="252" y="128" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Java</text>
  <text x="252" y="142" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">21.0.5</text>
  <text x="332" y="128" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Heap</text>
  <text x="332" y="142" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">412 / 2048 MB · 20%</text>
  <text x="252" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Uptime</text>
  <text x="252" y="180" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">7d 3h</text>
  <text x="332" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Database</text>
  <text x="332" y="180" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">postgres · 18ms</text>
  <text x="500" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">PA mode</text>
  <text x="500" y="180" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">Live</text>

  <rect x="612" y="84" width="168" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="104" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">QUICK LINKS</text>
  <text x="624" y="128" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Settings</text>
  <text x="624" y="146" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Processing Log</text>
  <text x="624" y="164" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ File Versions</text>
  <text x="624" y="182" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Cross-Reference</text>

  <rect x="240" y="216" width="178" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHEDULER</text>
  <text x="372" y="236" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">3 active</text>
  <rect x="252" y="246" width="156" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="258" y="256" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">retrieve-statuses · 5m</text>
  <rect x="252" y="264" width="156" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="258" y="274" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">notif-purge · daily</text>
  <rect x="252" y="282" width="156" height="14" rx="3" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="258" y="292" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">fetch-all · 15m</text>

  <rect x="428" y="216" width="174" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="440" y="236" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ERROR TREND · 14d</text>
  <polyline points="446,302 458,290 470,294 482,280 494,288 506,272 518,278 530,260 542,266 554,258 566,272 578,266 590,260" fill="none" stroke="#f87171" strokeWidth="1.6"/>
  <circle cx="590" cy="260" r="3" fill="#f87171"/>
  <text x="446" y="312" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">avg 12/day · today 4</text>

  <rect x="612" y="216" width="168" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="236" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RETRY RATE · 14d</text>
  <text x="624" y="266" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="ui-monospace, monospace">3.2%</text>
  <text x="624" y="284" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">142 retries / 4 480 runs</text>
  <text x="624" y="300" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">↓ -0.4 vs prev. period</text>

  <rect x="240" y="328" width="178" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="348" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JVM · THREADS + GC</text>
  <text x="252" y="370" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Threads</text>
  <text x="252" y="384" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">28 / peak 36</text>
  <text x="332" y="370" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">GC</text>
  <text x="332" y="384" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">G1 · 18ms</text>
  <text x="252" y="406" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Loaded classes</text>
  <text x="252" y="420" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">12 446</text>

  <rect x="428" y="328" width="174" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="440" y="348" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THROUGHPUT · 14d</text>
  <rect x="446" y="392" width="9" height="22" fill="rgba(74,158,255,0.30)"/>
  <rect x="458" y="386" width="9" height="28" fill="rgba(74,158,255,0.40)"/>
  <rect x="470" y="378" width="9" height="36" fill="rgba(74,158,255,0.55)"/>
  <rect x="482" y="372" width="9" height="42" fill="rgba(74,158,255,0.65)"/>
  <rect x="494" y="380" width="9" height="34" fill="rgba(74,158,255,0.50)"/>
  <rect x="506" y="368" width="9" height="46" fill="rgba(74,158,255,0.70)"/>
  <rect x="518" y="372" width="9" height="42" fill="rgba(74,158,255,0.65)"/>
  <rect x="530" y="364" width="9" height="50" fill="rgba(74,158,255,0.80)"/>
  <rect x="542" y="358" width="9" height="56" fill="rgba(74,158,255,0.90)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="554" y="370" width="9" height="44" fill="rgba(74,158,255,0.65)"/>
  <rect x="566" y="382" width="9" height="32" fill="rgba(74,158,255,0.45)"/>
  <rect x="578" y="392" width="9" height="22" fill="rgba(74,158,255,0.30)"/>
  <text x="446" y="424" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">peak 2026-05-04 · 198 docs</text>

  <rect x="612" y="328" width="168" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="348" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ACTIVE CLIENTS · 15M</text>
  <text x="624" y="370" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="ui-monospace, monospace">4</text>
  <text x="624" y="390" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">10.0.0.42 · 32 hits</text>
  <text x="624" y="404" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">10.0.0.55 · 18 hits</text>
  <text x="624" y="418" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">10.0.0.61 · 9 hits</text>

  <rect x="240" y="440" width="362" height="80" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="460" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FILESYSTEM</text>
  <text x="540" y="460" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">disk usage + file count</text>
  <text x="252" y="478" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">appHome · /opt/nomaubl</text>
  <text x="490" y="478" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">free 64 GB · 412 files</text>
  <text x="252" y="492" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">dirInput · /data/in</text>
  <text x="490" y="492" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">free 64 GB · 86 files</text>
  <text x="252" y="506" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">dirArchive · /data/archive</text>
  <text x="490" y="506" fill="rgb(255,159,10)" fontSize="9" fontFamily="ui-monospace, monospace">free 8 GB · 4 800 files</text>

  <rect x="612" y="440" width="168" height="80" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="460" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TEMPLATE TIME · 14d</text>
  <text x="624" y="480" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">invoices · 3.2s</text>
  <text x="624" y="494" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">credit_notes · 2.8s</text>
  <text x="624" y="508" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">e-reporting · 5.1s</text>

  <rect x="240" y="532" width="540" height="80" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="552" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIVE PROCESS EVENTS</text>
  <circle cx="358" cy="549" r="3.5" fill="rgb(50,215,75)"/>
  <text x="368" y="552" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">process running · 5s poll</text>
  <text x="668" y="552" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">START / END · errors in red</text>
  <text x="252" y="572" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">START</text>
  <text x="290" y="572" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:34:08  fetch-all · invoices · scheduler · 84 docs to process</text>
  <text x="252" y="586" fill="rgb(0,122,255)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">END</text>
  <text x="290" y="586" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:34:42  fetch-all · invoices · 84 / 84 OK · 34 s</text>
  <text x="252" y="600" fill="rgb(255,69,58)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">ERROR</text>
  <text x="290" y="600" fill="rgb(255,69,58)" fontSize="9" fontFamily="ui-monospace, monospace">12:35:14  retrieve-statuses · 12399 · UBL_CREATION FAILED</text>

  <rect x="240" y="624" width="540" height="80" rx="8" fill="url(#tech-g-green)" stroke="rgba(50,215,75,0.40)" strokeWidth="1.2"/>
  <text x="252" y="644" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONFIGURATION CHECK</text>
  <text x="676" y="644" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">✔ 0 issues</text>
  <text x="252" y="664" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PA connector — baseUrl, OAUTH2 credentials, import endpoint, import-status endpoint</text>
  <text x="252" y="680" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">e-Directory — directory-check endpoint when checkDirectory=Y</text>
  <text x="252" y="696" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">e-Reporting — issuerSiren, frequency, flux when sendToPA=Y</text>

  <rect x="240" y="716" width="220" height="124" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="736" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DATABASE TABLES</text>
  <text x="436" y="736" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">12 480 rows</text>
  <text x="252" y="756" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564231 invoices</text>
  <text x="436" y="756" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">3 826</text>
  <text x="252" y="772" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564235 lifecycle</text>
  <text x="436" y="772" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">15 442</text>
  <text x="252" y="788" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564236 validation</text>
  <text x="436" y="788" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">6 138</text>
  <text x="252" y="804" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564237 runtime log</text>
  <text x="436" y="804" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">42 116</text>
  <text x="252" y="820" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564253 notifications</text>
  <text x="436" y="820" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">812</text>

  <rect x="470" y="716" width="310" height="124" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="482" y="736" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RECENT ERRORS</text>
  <text x="766" y="736" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">8 entries</text>
  <rect x="478" y="746" width="34" height="14" rx="3" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="495" y="757" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">FATAL</text>
  <text x="518" y="757" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBL_CREATION · 12399 · XSL threw NPE</text>
  <text x="766" y="757" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">2m ago</text>
  <rect x="478" y="764" width="34" height="14" rx="3" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="495" y="775" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">ERROR</text>
  <text x="518" y="775" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA_SEND · 12345 · HTTP 502 → retried</text>
  <text x="766" y="775" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">14m ago</text>
  <rect x="478" y="782" width="34" height="14" rx="3" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="495" y="793" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">ERROR</text>
  <text x="518" y="793" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">DB_INSERT · 12298 · unique violation</text>
  <text x="766" y="793" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">1h ago</text>
  <rect x="478" y="800" width="34" height="14" rx="3" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="495" y="811" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">WARN</text>
  <text x="518" y="811" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA_TIMEOUT · 12277 · auto-retry</text>
  <text x="766" y="811" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">3h ago</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">System Health</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JVM / DB / OS / build</text>
  <line x1="200" y1="115" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retry rate</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">14-day moving ratio</text>
  <line x1="820" y1="256" x2="780" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JVM extras</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">threads, GC, classes</text>
  <line x1="200" y1="366" x2="240" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="350" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Active clients</text>
  <text x="830" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">IP tracker · 15-min window</text>
  <line x1="820" y1="366" x2="780" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="20" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filesystem</text>
  <text x="30" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">free space + file count</text>
  <line x1="200" y1="476" x2="240" y2="480" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live process events</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">START / END · 5 s poll · pause</text>
  <line x1="200" y1="576" x2="240" y2="566" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="650" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="665" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Configuration check</text>
  <text x="830" y="678" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connector schema validation</text>
  <line x1="820" y1="666" x2="780" y2="650" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="780" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="795" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recent errors</text>
  <text x="830" y="808" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click → opens log entry</text>
  <line x1="820" y1="796" x2="780" y2="780" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>
</svg>

The grid uses `align-items: stretch` and each card grows with `flex: 1` inside its column span — cards in the same row align bottoms, regardless of their internal content height.

---

## Layout

The 12-column grid is laid out as eight rows:

| Row | Layout | Widgets |
|---|---|---|
| 1 | `8 + 4` | **System Health** · **Quick links** |
| 2 | `4 + 4 + 4` | **Send Failed** · **Error trend · 14d** · **Retry rate · 14d** |
| 3 | `4 + 4 + 4` | **Scheduler** · **Throughput · 14d** · **Active sessions / clients** |
| 4 | `4 + 8` | **JVM · threads + GC** · **Filesystem** |
| 5 | `8 + 4` | *(reserved)* · **Template processing time · 14d** |
| 6 | `12` | **Live process events** |
| 7 | `12` | **Configuration check** |
| 8 | `5 + 7` | **Database tables** · **Recent errors** |

A **Refresh** button in the page header re-runs all four endpoints in parallel.

The **Send Failed** card landed in 2026.06.03 alongside the [Auto-Retry](../configuration/system/auto-retry.md) page in Settings — the manual one-click retry on the dashboard and the scheduled overnight sweep both call the same underlying replay path.

---

## Widgets

### System Health (row 1, span 8)

JVM, database and host metrics. The most-watched values are colour-coded:

| Stat | Source | Tone rules |
|---|---|---|
| **Java** | `Runtime.version()` | neutral. |
| **Heap** | `MemoryMXBean.getHeapMemoryUsage()` | green &lt; 60 %, orange &lt; 85 %, red ≥ 85 %. |
| **Uptime** | `RuntimeMXBean.getUptime()` | neutral, formatted as `Xd Yh` / `Xh Ym`. |
| **CPU cores** | `Runtime.availableProcessors()` | neutral. |
| **Database** | `dialect.ping()` | green &lt; 100 ms, orange &lt; 500 ms, red beyond or on error. |
| **Schema** | `db-nomaubl` config | neutral. |
| **OS** | `os.name` + `os.arch` | neutral. |
| **PA mode** | `paUseMock` flag | green when *Live*, orange when *Mock*. |

The card subtitle on the right shows the **build version + build date** baked into `nomaubl-version.properties`.

### Quick links (row 1, span 4)

Static shortcut list — the IT operator's most-used pages. Each link uses the same `onNavigate` mechanism as the sidebar so it lands on the target page directly. Default targets: **Settings**, **Processing Log**, **File Versions**, **Cross-Reference**.

### Send Failed (row 2, span 4) *(2026.06.03)*

A single big-number card showing how many invoices are currently in *Send failed* (status `9904`). When the count is non-zero, a **Resend all N** button below the number replays every matching invoice to the [Plateforme Agréée](../configuration/system/einvoicing.md). Clicking it opens the [shared progress window](#shared-progress-window) — live counters, a *Cancel* button and a *Run in background* button that hides the window while the work keeps going server-side. The resend is throttled at **100 ms per call** so the PA stays inside its rate budget.

| Element | Behaviour |
|---|---|
| Count | Live total — refreshed by the page's *Refresh* button and at every dashboard mount. Coloured red when non-zero. |
| **Resend all N** button | Disabled when the count is zero. Click to replay every status-`9904` invoice; opens the progress window. |
| Progress window | Live counters (*processed* / *succeeded* / *failed*), a *Cancel* button and a *Run in background* button — same component as every long-running operation on the platform. |
| Throttle | 100 ms between calls — fixed in code; not operator-tunable here. The [Auto-Retry](../configuration/system/auto-retry.md) schedule exposes its own throttle for the scheduled equivalent. |

Use the manual button for a one-shot replay during business hours (a brief PA outage that cleared, a small batch you want resent now). For unattended overnight retries, schedule a row on the [Auto-Retry](../configuration/system/auto-retry.md) page — same code path, no operator action required.

### Scheduler (row 3, span 4)

Lists every active scheduler job:

- **Built-ins** — `retrieve-statuses`, `notif-purge`, `clean-archive`, etc. — driven by `BackgroundScheduler` polling intervals.
- **Per-template `fetch-all`** — one row per template that has a scheduled extract / sync.
- **Per-row Auto-Retry sweeps** *(2026.06.03)* — one row per saved entry on the [Auto-Retry](../configuration/system/auto-retry.md) page, with the scheduled hour and the matched status list as the cadence.

Each row shows the job name, the cadence, and a status pill (green active, blue scheduled-soon, orange paused). The card subtitle reports the active count.

### Error trend · 14d (row 2, span 4)

A 14-day sparkline of error events recorded in `F564237` (level `ERROR` or `FATAL`). Hovering a point reveals the day and count; the subtitle shows the daily average plus today's running count.

### Retry rate · 14d (row 2, span 4)

Single big number: ratio of *runs that succeeded only after one or more retries* over total runs in the trailing 14 days. The subtitle gives the absolute counts and the delta against the previous 14-day window (green when down, orange when up).

### JVM · threads + GC (row 3, span 4)

Companion card to System Health for deeper JVM diagnostics:

- **Threads** — current count + peak.
- **Daemon threads** — running daemons.
- **GC** — collector name + total time spent in GC.
- **Loaded classes** — class-loader counter, useful for spotting metaspace leaks.

### Throughput · 14d (row 3, span 4)

Daily processed-document bar chart over the last 14 days. **Click a bar** to jump to *Processing Log* pre-filtered on that day — a quick path from "today's column is short" to "show me what actually ran".

### Active sessions / Active clients · 15m (row 3, span 4)

Two modes:

- **Auth enabled** — title reads *Active sessions*. Lists every session present in `F564252` whose `SSETDTIM` is within the last hour.
- **Auth disabled** — title reads *Active clients · 15m*. Lists every IP touched by `WebServer.handle()` in the last 15 minutes, sourced from the new in-memory `ActivityTracker` (no `F564252` rows exist when auth is off).

Either way, each row shows IP / user, the last-seen timestamp, and the running hit count.

### Filesystem (row 4, span 8)

For each configured path (`appHome`, `processHome`, `dirInput`, `singleOutput`, `burstOutput`, `dirArchive`, `dirError`):

- **Free / total** disk space on the underlying volume.
- **File count** of a recursive walk through the path, **capped at 5000 files** to keep the call cheap.

Path values that contain runtime placeholders (`%TEMPLATE%`, `%FILE_NAME%`) are truncated at the first placeholder, and the report runs against the deepest **existing-by-shape** directory above it. `dirOutput` is excluded because it is always covered by `processHome`.

### Template processing time · 14d (row 4, span 4)

Average end-to-end processing time per template, in seconds, over the last 14 days. The card pulls flat `START` / `END` events from `F564237` and pairs them in Java keyed on `(FEWDS1|FEUPMJ)` — the prior implementation used a self-join SQL with ambiguous `FETMPL` and incorrect `e.FEUPMT - s.FEUPMT` math, which is now fixed.

#### Per-step breakdown when `debugProfile` is on *(2026.05.9)*

When the [`debugProfile`](../configuration/system/global.md) toggle on the `global` template is set to `Y`, every processing run writes one row per pipeline stage to `F564237` — **header parsing**, **lines parsing**, **validation**, **UBL emit**, **PA send**. The Template processing time card surfaces them as a stacked breakdown under the per-template totals, so a slow stage is visible at a glance without digging into the runtime log.

The Live process events tail below also tags the rows with the step name so a slow batch can be triaged in real time. Leave `debugProfile` at `N` in production; flip it to `Y` for the duration of a batch run when triaging a slow pipeline — the extra rows inflate `F564237` quickly under load.

### Live process events (row 5, span 12)

A live feed of jobs starting and finishing in real time — most of them launched by the background scheduler. Polls `F564237` every **5 seconds** with an incremental `since=` cursor; each row carries a coloured **method badge**:

| Badge | Meaning |
|---|---|
| **START** *(green)* | A job has just started — `fetch-all`, `retrieve-statuses`, an inbound process, etc. |
| **END** *(blue)* | The matching `END` event for a previously-started job, with the elapsed time when available. |
| **ERROR** *(red)* | An inline error emitted while the job ran — `ERROR`, `FATAL`, `FAILED` keywords promote any row to this kind, even when its method was `START` or `END`. |
| **INFO** *(muted)* | Anything else the runtime logger wrote during the job. |

Each row shows the badge, the **template** + **mode** + **source file** when present, the message, and the timestamp. A **pulsing green dot** appears next to the title when an event has been observed in the last 30 seconds (a job is running right now); it switches to grey when the feed has been idle longer.

The feed is **deduplicated on `FEUKID`** so the same row never appears twice across polls, even when the clock jitters. A **Pause / Resume** button on the right of the title freezes polling — useful when reading a long line without it scrolling away.

The scrollable list is capped at the latest 100 events; older rows fall off the bottom as new ones come in. For deeper investigation use the [Processing Log](../management/processing-log.md) page, which keeps the full history with grouped-job views.

### Configuration check (row 6, span 12)

Validates the *connector-style* configuration the application uses today. Issues are listed by area with severity (red error, orange warning, blue info). The check runs against:

| Area | Validates |
|---|---|
| **PA connector** | `baseUrl`; `authType`; credentials per auth type — `OAUTH2` (clientId/secret/token endpoint), `BASIC` (username/password), `BEARER` (token); presence of an endpoint named `import` (warns when `import-status` is missing). |
| **e-Directory** | `baseUrl` and `directory-check` endpoint when `checkDirectory=Y`. |
| **e-Reporting** | `issuerSiren`, `frequency`, `flux` when `sendToPA=Y`. |

Old checks against `paApiBaseUrl` / `paApiUsername` / `ublXsdPath` / `ublSchematronPath` are **gone** — those properties no longer exist on the connector schema. The validation assets (XSD / Schematron) are bundled in the JAR.

A clean check renders as `✔ 0 issues` in green; otherwise the card lists the issues in order of severity.

### Database tables (row 7, span 5)

Per-table row count for every NomaUBL table — invoices (`F564231`), lifecycle (`F564235`), validation (`F564236`), runtime log (`F564237`), notifications (`F564253`), e-Reporting (`F564260`–`F564262`), auth (`F564250`–`F564252`, `F564254`). Useful for spotting unexpected growth (e.g. a notifications table that should be ~hundreds of rows but holds millions).

### Recent errors (row 7, span 7)

Last 8 events from `F564237` filtered on `level IN ('ERROR', 'FATAL')`. Each row shows the level badge, the lifecycle code and triplet, the message, and a relative timestamp (*2m ago*, *1h ago*). Clicking a row opens the corresponding entry in *Processing Log*, where the full stack and replay options live.

---

## Shared progress window \{#shared-progress-window\}

*Added 2026.06.03.* Every long-running operation in the platform — Resend All from this page, the [Auto-Retry](../configuration/system/auto-retry.md) sweep, the *Detailed view* export on [Integration Errors](./integration-errors.md), the upcoming bulk re-imports — opens the **same modal**. One component, one set of habits.

The window stays open by default while the operation runs; closing it is a deliberate action.

| Element | What it does |
|---|---|
| **Progress bar** | Visual counter of processed-vs-total. Updates every ~250 ms as the server pushes increments. |
| **Live counters** | Three numbers: *Processed* (total touched so far), *Succeeded*, *Failed*. Each is clickable when non-zero and opens a small drawer with the per-invoice triplets, so a failure on invoice `12345 / RI / 00070` is one click away from its log entry. |
| **Cancel** | Stops the operation cleanly between two invoices. Already-processed invoices keep their new state; the rest are left untouched. The button is replaced by *Cancelled* (greyed) once the signal lands. |
| **Run in background** | Hides the modal without stopping the operation. The work continues server-side; a small persistent banner at the top of the page surfaces the count + a *Show progress* link. Click the link to reopen the modal at any time. |
| **Done** | Replaces *Cancel* / *Run in background* when the operation finishes. A summary line shows total / succeeded / failed and the elapsed time. |

Multiple operations can run side by side — each gets its own banner when sent to the background. Closing the browser tab does **not** cancel the work; the server-side run keeps going. Reopening the page surfaces the banner again until the run completes.

---

## How widgets refresh

The Refresh button (or page mount) calls four endpoints in parallel:

| Endpoint | Feeds |
|---|---|
| `GET /api/system` | System Health, JVM extras, Filesystem |
| `GET /api/dashboard/tech` | Throughput, Error trend, Retry rate, Template stats, Active sessions, Database tables, Recent errors |
| `GET /api/dashboard/log-tail` | Live process events (incremental, polled every 5 s with `since=`) |
| `GET /api/dashboard/config-check` | Configuration check |

The Scheduler card consumes the existing `GET /api/scheduler/status` so it shares the data already loaded by the business Dashboard during a same-session navigation. Each call fails independently — a misconfigured database returns *Not configured* on the data card without breaking System Health or the live tail.

---

## Tips & best practices

- **Watch Heap, Database ping and Filesystem free space.** The three early-warning signals — heap drift before an OOM, database latency before a stall, archive volume before disk fills.
- **Live process events beats `tail -f`.** It shows scheduler jobs starting and ending in real time, errors stand out in red, and the feed survives an SSH disconnect. Keep it open during a release window or a batch import — most regressions surface here within seconds, and the green pulsing dot tells you whether anything is actually running right now.
- **Configuration check should always read green.** A non-zero issue count after a deploy is the fastest path to "what changed". Run it on every environment after every config edit.
- **Recent errors over Database tables.** When triaging an incident the recent-errors feed is denser per pixel; the table stats card is for trend-watching across days.
- **Empty Active clients does not mean nobody is using the app.** With auth enabled, sessions older than an hour drop off the list — the database lifecycle still records them. The card shows *who is on right now*, not *who was on this morning*.
- **Template processing time spikes pair with Throughput dips.** When you see a tall blue bar in Throughput followed by a slow template the next day, expect the queue to back up — the IT team can pre-empt by adjusting the scheduler cadence.
