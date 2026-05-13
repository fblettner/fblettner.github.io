---
title: Processing Log
description: "Browse the NomaUBL runtime log — every START / END / intermediate event recorded during XML, UBL, BIP and FTP processing. Group events by job to see status and duration at a glance, or switch to the flat event stream for forensic analysis."
keywords: [NomaUBL, processing log, runtime log, F564237, START, END, lifecycle, AUTO, SINGLE, BURST, UBL, processing trace, orphan jobs, JD Edwards, SAP, NetSuite, custom ERP]
---

# Processing Log

The **Processing Log** screen is the audit-trail viewer for the NomaUBL **runtime log table** (`F564237`). Every job that goes through the platform — XML transformation, UBL generation, validation, BIP extraction, FTP download — emits a stream of events: a `START`, intermediate steps (transformation, conversion, render…), and an `END` with a final outcome (`SUCCESSFUL` or a fatal-error message).

The page exposes that stream in two complementary views — a **grouped** view that pairs every `START` with its matching `END` so each job appears as one row with a status and a duration, and a **flat** view that lists every individual event for forensic-grade tracing. The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP.

---

## At a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#pl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Processing Log</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#pl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">↻ Refresh</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="180" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <rect x="240" y="84" width="90" height="28" rx="6" fill="url(#pl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="285" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Grouped</text>
  <text x="375" y="102" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Flat</text>

  <rect x="430" y="84" width="180" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="102" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Filter file / template…</text>
  <rect x="622" y="84" width="158" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="634" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">All modes ▾</text>

  <rect x="240" y="124" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="145" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START · END · TEMPLATE · MODE · FILE · OUTCOME · DURATION</text>

  <rect x="240" y="162" width="540" height="30" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12:34:08 · 12:34:42 · invoices · AUTO · INV-0142.xml</text>
  <rect x="588" y="170" width="92" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="634" y="181" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">SUCCESSFUL</text>
  <text x="690" y="181" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">34 s</text>

  <rect x="240" y="196" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12:34:46 · 12:35:08 · invoices · AUTO · INV-0143.xml</text>
  <rect x="588" y="204" width="92" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="634" y="215" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">SUCCESSFUL</text>
  <text x="690" y="215" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">22 s</text>

  <rect x="240" y="230" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="249" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12:35:14 · 12:35:18 · invoices · AUTO · INV-0144.xml</text>
  <rect x="588" y="238" width="92" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="634" y="249" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">FATAL ERROR</text>
  <text x="690" y="249" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">4 s</text>

  <rect x="240" y="264" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12:35:30 · 12:36:01 · credit_notes · SINGLE · CR-0021.xml</text>
  <rect x="588" y="272" width="92" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="634" y="283" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">SUCCESSFUL</text>
  <text x="690" y="283" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">31 s</text>

  <rect x="240" y="298" width="540" height="30" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="252" y="317" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">⤓ Click row → expand step-by-step events (FATAL highlighted)</text>

  <rect x="240" y="338" width="540" height="106" rx="8" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="358" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXPANDED — INV-0144.xml</text>

  <rect x="252" y="366" width="44" height="16" rx="3" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="274" y="377" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">START</text>
  <text x="304" y="377" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:35:14 · invoices · AUTO</text>

  <rect x="252" y="386" width="100" height="16" rx="3" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="302" y="397" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">TRANSFORM_XSL</text>
  <text x="360" y="397" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:35:15 · ok</text>

  <rect x="252" y="406" width="44" height="16" rx="3" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="274" y="417" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">FATAL</text>
  <text x="304" y="417" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">12:35:18 · UBL_CREATION · XSL transform threw</text>

  <rect x="252" y="424" width="32" height="16" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="435" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">END</text>
  <text x="292" y="435" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:35:18 · FAILED</text>

  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two views</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Grouped (1 row / job) · Flat</text>
  <line x1="200" y1="100" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pl-arrow)"/>

  <rect x="820" y="172" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Outcome badge</text>
  <text x="830" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SUCCESSFUL / FATAL / FAILED</text>
  <line x1="820" y1="188" x2="680" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pl-arrow)"/>

  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Step-by-step expand</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">START / END · FATAL highlighted</text>
  <line x1="200" y1="396" x2="252" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pl-arrow)"/>
</svg>

---

## Where the events come from

Every NomaUBL processing path writes its trace into `F564237` through the same logger. The key fields are populated at runtime: the **file** being processed, the **mode** (`AUTO`, `SINGLE`, `BURST`, `UBL`, `PROCESS`), the source **template**, the current **step** (`START`, `END`, or a method name such as `TRANSFORM_XSL`, `CONVERT_RTF`, `RUN_TASKS`), the **message** and the **timestamp**. The grouping engine on this page reconstructs jobs from those raw events on the fly.

<svg viewBox="0 0 1000 160" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="plog-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="plog-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="plog-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="plog-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="40" width="220" height="80" rx="12" fill="url(#plog-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="130" y="70" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📥 Processing entry</text>
  <text x="130" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">XML · UBL · BIP · FTP</text>
  <rect x="275" y="40" width="240" height="80" rx="12" fill="url(#plog-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="395" y="70" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙️ NomaUBL pipeline</text>
  <text x="395" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">transform · render · validate · send</text>
  <rect x="555" y="40" width="200" height="80" rx="12" fill="url(#plog-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="655" y="70" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">📜 F564237</text>
  <text x="655" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">runtime event stream</text>
  <rect x="795" y="40" width="185" height="80" rx="12" fill="url(#plog-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="887" y="70" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📊 Processing Log</text>
  <text x="887" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">grouped & flat views</text>
  <line x1="240" y1="80" x2="275" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#plog-arrow)"/>
  <line x1="515" y1="80" x2="555" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#plog-arrow)"/>
  <text x="535" y="73" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">events</text>
  <line x1="755" y1="80" x2="795" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#plog-arrow)"/>
</svg>

The log is **append-only** — events are written by the pipeline and never modified. The page is read-only.

---

## Two views, one dataset

| View | When to use |
|---|---|
| **Grouped** *(default)* | Day-to-day monitoring. Each job is one row with its status (OK / ERROR / PARTIAL), duration and the last message. Expanding a row reveals every intermediate step. |
| **Flat** | Detailed analysis when grouping would hide useful context — e.g. inspecting the order of events during a hung job, or chasing a stray `WARNING` between two unrelated runs. One row per event. |

The toggle at the top of the toolbar switches between the two; the choice is persisted in the browser (`processing-log:grouped` in `localStorage`) so the next session opens on the same view. The **default tab** is **Grouped** — restored in 2026.05.10 after a previous build had drifted to *Flat* on first paint; operators get the day-to-day reading mode without having to flip the toggle.

---

## Toolbar

The toolbar above the table combines a view toggle, a free-text search, two dropdown filters, a date range and a refresh button.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <div style={{display: 'inline-flex', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)', overflow: 'hidden'}}>
      <span style={{padding: '5px 12px', fontSize: '11px', fontWeight: 700, background: 'rgba(74,158,255,0.15)', color: '#4a9eff'}}>Grouped</span>
      <span style={{padding: '5px 12px', fontSize: '11px', fontWeight: 600, opacity: 0.7}}>Flat</span>
    </div>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic', minWidth: '180px'}}>🔎 Search file name…</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>All templates ▾</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>All modes ▾</span>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 Yesterday → Today</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>↻ Refresh</span>
  </div>
</div>

| Control | Behaviour |
|---|---|
| **Grouped / Flat toggle** | Switches the data presentation. Persisted per-browser. |
| **Search file name** | Substring match against the `file` column (e.g. `12345_RI_00070`). Empty disables the filter. |
| **Templates** | Dropdown populated dynamically from the `document` templates declared in `config.json`. *All templates* removes the filter. |
| **Modes** | Dropdown of the well-known processing modes — `AUTO`, `SINGLE`, `BURST`, `UBL`, `PROCESS`. *All modes* removes the filter. |
| **Date range** | Restricts to events whose timestamp falls within the chosen window. Default preset: *Yesterday → Today*. The standard presets (*Today*, *Yesterday*, *Last 7 days*, *This month*, *Last month*, *Custom range*) all apply. |
| **Refresh** | Re-runs the current query without changing filters. |

When grouped, the page over-fetches (`pageSize × 4`, capped at 200) so START / END pairs and intermediate steps land on the same page and the grouping engine has the full job in hand.

### Advanced Filters *(2026.05.10)*

A collapsible **Advanced Filters** panel below the toolbar exposes one row per filterable column from the active [List Views](../configuration/list-views.md) spec (`view.processing-log`) — with per-column operator pickers (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). Edits stay in draft until **Run** commits them.

The Tech Dashboard's throughput-bar drill-through into this page now seeds the V2 `DateRangeFilter` via `initialRange`, so the period clicked on the bar stays applied here.

Since 2026.05.10 the Flat view renders through **DataTableV2** in spec-driven mode: the column shape comes from the `view.processing-log` spec on `db-nomaubl` and the bundled default ships every column described below. Adding columns from the catalog or trimming the filter allow-list is done from the [List Views](../configuration/list-views.md) editor. The Grouped view keeps its dedicated layout — grouping is not a DataTableV2 feature.

---

## Grouped view — one row per job

Each row represents one **(file, mode, template) job**, reconstructed from its raw events. The row carries the job's status, flow shape, duration and last message. Click any row to expand and see every intermediate step.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '10px'}}>
    <div></div><div>Date</div><div>File</div><div>Mode</div><div>Template</div><div>Flow</div><div>Duration</div><div>Status</div><div>Message</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{opacity: 0.55}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:42</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div style={{opacity: 0.7}}>START → END</div>
    <div style={{opacity: 0.7}}>1.2s</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '10px', fontWeight: 700}}>OK</span></div>
    <div style={{opacity: 0.78}}>SUCCESSFUL</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{opacity: 0.55}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 13:54:11</div>
    <div style={{fontFamily: 'monospace'}}>spool_R12_2026_120</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(192,132,252,0.15)', border: '1px solid rgba(192,132,252,0.45)', fontSize: '10px', fontWeight: 700, color: '#c084fc'}}>BURST</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div style={{opacity: 0.7}}>START → END</div>
    <div style={{opacity: 0.7}}>42s</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '10px', fontWeight: 700}}>OK</span></div>
    <div style={{opacity: 0.78}}>SUCCESSFUL — 248 invoices</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center', background: 'rgba(255,69,58,0.06)'}}>
    <div style={{transform: 'rotate(90deg)', color: '#f87171'}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.85, fontSize: '11px'}}>2026-04-29 11:22:05</div>
    <div style={{fontFamily: 'monospace'}}>12347_RN_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.4)', fontSize: '10px', fontWeight: 700, color: '#4ade80'}}>UBL</span></div>
    <div style={{fontFamily: 'monospace'}}>credit_notes</div>
    <div style={{opacity: 0.7}}>START → END</div>
    <div style={{opacity: 0.7}}>340ms</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,69,58,0.12)', border: '1px solid rgba(255,69,58,0.4)', color: '#f87171', fontSize: '10px', fontWeight: 700}}>FATAL ERROR</span></div>
    <div style={{opacity: 0.85}}>FATAL ERROR : Schematron BR-CL-21 failed</div>
  </div>
  <div style={{padding: '10px 14px 14px 56px', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,69,58,0.03)'}}>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#4a9eff', fontSize: '10px', fontWeight: 600}}>START</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.78}}>Job started</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#4a9eff', fontSize: '10px', fontWeight: 600}}>TRANSFORM_XSL</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.78}}>XSLT applied — 1 document, 8 lines</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#f87171', fontSize: '10px', fontWeight: 600}}>VALIDATE_UBL_ERROR</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.85}}>BR-CL-21 — Tax category code MUST be from UNCL5305</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>END</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.85}}>FATAL ERROR : Schematron BR-CL-21 failed</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', alignItems: 'center', background: 'rgba(255,159,10,0.06)'}}>
    <div style={{opacity: 0.55}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 09:14:18</div>
    <div style={{fontFamily: 'monospace'}}>12348_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '10px', fontWeight: 700, opacity: 0.85}}>AUTO</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div style={{opacity: 0.7}}>START → ?</div>
    <div style={{opacity: 0.4}}>—</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', border: '1px solid rgba(255,159,10,0.4)', color: '#fb923c', fontSize: '10px', fontWeight: 700}}>PARTIAL</span></div>
    <div style={{opacity: 0.78}}>RUN_TASKS — splitting 1 of 4</div>
  </div>
</div>

### Columns

| Column | Description |
|---|---|
| **▸** | Chevron — shown when the job has at least one intermediate step or is an orphan. Click anywhere on the row to expand. |
| **Date** | Sort timestamp — `END` time when known, otherwise `START` or the first intermediate step. |
| **File** | The file or job key being processed (typically `DOC_DCT_KCO`). Mono-spaced; full value visible on hover. |
| **Mode** | Coloured badge — `SINGLE` (blue), `BURST` (purple), `UBL` / `UBL_VALIDATE` (green), `BOTH` (orange), other modes (neutral). |
| **Template** | The source template that drove the run (e.g. `invoices`, `credit_notes`). |
| **Flow** | Indicates the START / END pairing — `START → END` for complete jobs, `START → ?` when no END is found, `? → END` when an END appears with no matching START, or `—` for free-floating intermediate steps. |
| **Duration** | Computed from `END − START`. Formatted compactly: `120ms` / `1.2s` / `1m 23s`. Empty when one of the bounds is missing. |
| **Status** | The job outcome — see below. |
| **Message** | The end-of-job message, or the last intermediate step's message when the END is missing. Truncated; full value on hover. |

### Status badges

| Variant | When | Visual cue |
|---|---|---|
| **OK** | Both `START` and `END` present, no error in the message or any intermediate step. | Green badge. |
| **ERROR** | The `END` message matches `ERROR / FAIL / EXCEPTION / FATAL`, **or** any intermediate step does. The badge label is the upper-cased end message. | Red badge, the row's background is tinted red. |
| **PARTIAL** | The `START` or `END` is missing on the current page (orphan job), or only intermediate steps were found. | Orange badge, the row's background is tinted orange. |

### Expanded steps

Clicking an expandable row opens a **step area** below it that lists every event tied to that job in chronological order:

- The synthetic `START` row repeats the start timestamp and a generic *"Job started"* message.
- Every intermediate event is listed with its method (`TRANSFORM_XSL`, `CONVERT_RTF`, `RUN_TASKS`, `VALIDATE_UBL_ERROR`, …) and free-text message — error methods are coloured red.
- The `END` row repeats the end timestamp and the final message.
- For **PARTIAL** jobs, an italic note reminds you that the START or END is on a different page.

The same area is what makes the grouped view a one-click drill-down for triage — the headline tells you *what* happened, the expanded list tells you *where* in the pipeline.

---

## Flat view — one row per event

Switching to **Flat** turns off grouping and falls back to the underlying event stream. Sorting, paging and CSV export operate on individual events, which is the right shape for archival queries and detailed investigations.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Date / Time</div><div>File</div><div>Mode</div><div>Template</div><div>Step</div><div>Message</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:43</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '10px', fontWeight: 700}}>END</span></div>
    <div style={{opacity: 0.85}}>SUCCESSFUL</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:43</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: 'inherit', fontSize: '10px', fontWeight: 600, opacity: 0.85}}>RUN_SINGLE</span></div>
    <div style={{opacity: 0.85}}>PDF rendered (1 doc, 142 KB)</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:42</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '10px', fontWeight: 700}}>START</span></div>
    <div style={{opacity: 0.85}}>Processing SINGLE — template=invoices, file=12345_RI_00070</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 11:22:05</div>
    <div style={{fontFamily: 'monospace'}}>12347_RN_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.4)', fontSize: '10px', fontWeight: 700, color: '#4ade80'}}>UBL</span></div>
    <div style={{fontFamily: 'monospace'}}>credit_notes</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,69,58,0.12)', border: '1px solid rgba(255,69,58,0.4)', color: '#f87171', fontSize: '10px', fontWeight: 700}}>VALIDATE_UBL_ERROR</span></div>
    <div style={{opacity: 0.85}}>BR-CL-21 — Tax category code MUST be from UNCL5305</div>
  </div>
</div>

### Columns

| Column | Description |
|---|---|
| **Date / Time** | Event timestamp. Default sort: descending. |
| **File** | The file the event belongs to. |
| **Mode** | Coloured badge — same palette as the grouped view. |
| **Template** | The source template. |
| **Step** | The method label — coloured badge: `START` (blue), `END` (green), anything matching `ERROR / FAIL` (red), `WARN` (orange), other steps (neutral). |
| **Message** | Free-text message attached to the event. Truncated; full value on hover. Not sortable. |

The standard `Export` button writes the current view (filters applied, sort respected) to `processing-log.csv`.

---

## How jobs are reconstructed

The grouping engine walks the events in **ascending** time order and uses the triplet `file | mode | template` as the **job key**. Knowing the algorithm helps interpret edge cases:

| Event | Effect |
|---|---|
| `START` on a key with no open job | Opens a new job. |
| `START` on a key that already has an open job | Flushes the previous job as **PARTIAL** and opens a fresh one. |
| `END` on a key with an open job | Closes the job, computes the duration, sets the status (OK or ERROR depending on the END message). |
| `END` on a key with no open job | Emits a **PARTIAL** orphan with no START. |
| Any other method on a key with an open job | Attaches as an intermediate step. Sets `hasError = true` if the method or message matches `ERROR / FAIL / EXCEPTION / FATAL`. |
| Any other method on a key with no open job | Emits a **PARTIAL** orphan composed of just that step. |

Open jobs that never see an `END` on the current page are flushed as **PARTIAL** at the end of the walk.

The detection regex is intentionally broad — any method or message containing `ERROR`, `FAIL`, `EXCEPTION` or `FATAL` (case-insensitive) marks the job as errored, even if the formal `END` message is benign.

---

## Tips & best practices

- **Stay on Grouped for daily monitoring.** A scan of the *Status* column tells you, at a glance, what failed yesterday and what completed cleanly. Save *Flat* for forensic queries.
- **PARTIAL after a date filter is usually a paging artefact.** A job whose START is on day 1 and END on day 2 will look orphaned on either day's view alone — widen the date range before assuming a real failure.
- **Filter by mode to focus a triage session.** During an incident on the BIP path, restricting to `BURST` cuts out the noise of unrelated `SINGLE` runs and keeps every related step grouped on a single page.
- **The error label on the row is the END message, uppercased.** It is the same string the ERP / PA team will quote in a ticket — copying it from this page is the fastest way to surface the canonical failure reason.
- **Expand before quoting a job.** The headline says *what* failed; the expanded steps say *where* in the pipeline (transform vs. convert vs. validate vs. send). Always include the failing step in any incident report.
- **The log is append-only.** No row can be edited or deleted from this page — use *File Versions* or the database directly for any retroactive cleanup work.
