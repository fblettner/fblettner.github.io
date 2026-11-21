---
title: Screens — overview
description: "The Screens page of Liberty Next — the applications, the list of screens — and the Screen Designer, which reads like the screen: six stages drawn as a flow (What it is, Data, Grid, Record form, Actions, Output), each card saying what the screen holds, and the columns as a list with the picked column's settings beside it."
keywords: [Liberty Framework, screens, ScreensBuilder, Screen Designer, tabs, dialog, columns, actions, permissions]
---

# Screens — overview

A **screen** in Liberty is the page a user sees: a table of rows, optional filters, optional add/edit dialog, optional actions, optional row context menu. One screen = one `<base>_get` query + (optionally) `<base>_put` / `<base>_post` / `<base>_delete` for writes + a dialog form on top.

The page that manages screens is **Liberty Next → Screens → Screens**. This overview maps it; the next pages walk through each task.

---

## The Screens page at a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#sov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Screens</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="216" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="256" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="306" y="78" width="240" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="426" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add scope</text>
  <rect x="700" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="740" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="788" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="828" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>

  <rect x="40" y="120" width="828" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Filter screens…</text>

  <rect x="40" y="168" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="190" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="76" y="208" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Customers · 2 tabs · 9 fields · 3 actions</text>
  <text x="76" y="220" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=customers_get</text>
  <rect x="700" y="180" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="762" y="180" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Clone</text>
  <rect x="818" y="180" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="195" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="232" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="254" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="76" y="272" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Deals pipeline · 1 tab · 6 fields · row menu</text>
  <text x="76" y="284" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=deals_get</text>
  <rect x="700" y="244" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="762" y="244" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Clone</text>
  <rect x="818" y="244" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="259" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="296" width="828" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="454" y="324" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add screen (lands at the top of the list)</text>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Top scope bar** | One chip per app (a connector that has a menu). Click a chip → its screens load below. The *＋ Add scope* button registers a brand-new connector under the Screens namespace. *Discard* / *Save* on the right commit or revert page-wide edits. |
| **Filter bar** | A search input for the screen list. Visible when the selected app has more than a handful of screens. |
| **Screen list** | One card per screen, vertical scroll. Each card shows the id, label, read query, tab count, field count and per-card actions: *Rename*, *Clone*, *Delete*. **Clicking a card opens the Screen Designer modal.** |

---

## The Screen Designer \{#designer\}

Clicking a card opens the **Screen Designer** in a near-fullscreen window. The header has *Maximize / Restore*, *Cancel* and *Save* — Save commits **just this screen's edits** and closes — in `screens.toml`, only that screen is rewritten, without its default values and in the file's key order, every other screen staying as it is; Cancel prompts on unsaved changes.

The designer **reads like the screen**: six stages drawn as a flow — **What it is → Data → Grid → Record form → Actions → Output** — and each card says what the screen holds there. A click on a card opens it; a stage with several sections shows them under the flow.

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="362" rx="14" fill="url(#sds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · [screens.crm.customers]</text>
  <rect x="236" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="244" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">What it is</text>
  <text x="244" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="244" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif"></text>
  <line x1="346" y1="94" x2="357" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="358" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="366" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Data</text>
  <text x="366" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="366" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 save query(ies)</text>
  <line x1="468" y1="94" x2="479" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="480" y="64" width="110" height="60" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="488" y="82" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Grid</text>
  <text x="488" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">9 column(s)</text>
  <text x="488" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="590" y1="94" x2="601" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="602" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="610" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Record form</text>
  <text x="610" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="610" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">9 field(s)</text>
  <line x1="712" y1="94" x2="723" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="724" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="732" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="732" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="732" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu</text>
  <line x1="834" y1="94" x2="845" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="846" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="854" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Output</text>
  <text x="854" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <text x="854" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif"></text>
  <rect x="480" y="134" width="167" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="481" y="135" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="509.5" y="148.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <line x1="539" y1="139" x2="539" y2="151" stroke="#334155" strokeWidth="1"/>
  <text x="563.5" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <line x1="588" y1="139" x2="588" y2="151" stroke="#334155" strokeWidth="1"/>
  <text x="617.5" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <rect x="240" y="170" width="330" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="180" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="194.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">filter 9 columns…</text>
  <rect x="458" y="180" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="509.0" y="194.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add a column</text>
  <rect x="248" y="212" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="227.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="227.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">ID</text>
  <text x="354" y="227.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Number</text>
  <rect x="416" y="216" width="30" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="431.0" y="227.2" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">key</text>
  <rect x="248" y="242" width="314" height="24" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="257.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="257.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="354" y="257.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="416" y="246" width="43" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="437.5" y="257.2" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <rect x="463" y="246" width="52" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="489.0" y="257.2" fill="#c084fc" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">required</text>
  <rect x="248" y="272" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="287.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="287.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="354" y="287.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="416" y="276" width="43" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="437.5" y="287.2" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <rect x="463" y="276" width="35" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="480.5" y="287.2" fill="#c084fc" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ENUM</text>
  <rect x="248" y="302" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="317.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="317.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="354" y="317.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Credit limit</text>
  <rect x="416" y="306" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="444.0" y="317.2" fill="#fb923c" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sensitive</text>
  <rect x="248" y="332" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="347.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="347.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="354" y="347.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Updated</text>
  <rect x="416" y="336" width="56" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="444.0" y="347.2" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">read only</text>
  <rect x="582" y="170" width="378" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="596" y="190" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="596" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="596" y="218" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="232.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Name</text>
  <text x="776" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="776" y="218" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="786" y="232.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Text ▾</text>
  <rect x="596" y="263" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M598.5,268.5 L600.8,270.8 L604.8,266" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="613" y="272" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Filter</text>
  <rect x="682" y="263" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M684.5,268.5 L686.8,270.8 L690.8,266" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="699" y="272" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Required</text>
  <rect x="796" y="263" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="813" y="272" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Hidden</text>
  <text x="596" y="300" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CARD</text>
  <rect x="596" y="306" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="320.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">title ▾</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six stages, as a flow</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card says what it holds</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The columns, as a list</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag to reorder, filter</text>
  <line x1="200" y1="217.0" x2="248" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is worth seeing</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">key, filter, required, rule…</text>
  <line x1="200" y1="317.0" x2="248" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In orange when unset</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no read or no save query</text>
  <line x1="200" y1="145.0" x2="368" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1000" y="134" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="149" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections of a stage</text>
  <text x="1010" y="162" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Columns · Views · Summary</text>
  <line x1="1000" y1="151.0" x2="647" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1000" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The picked column</text>
  <text x="1010" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its settings beside the list</text>
  <line x1="1000" y1="277.0" x2="960" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
</svg>

| Stage | Sections | The card says | Carries |
|---|---|---|---|
| **What it is** | General | The screen's label, *read only*. | Identity, connector override, audit table, row cap, key columns, behaviour flags (auto-load, editable, uploadable), grouping, treeview, default chart, row-click behaviour. |
| **Data** | Queries | The read query and the number of save queries — in **orange** when no read query is set, or when an editable screen has nothing to save through. | The read (required), update, insert and delete — queries of the connector, or [API endpoints](./api-screens.md); **Saves through** for a screen read by SQL and saved by an API. |
| **Grid** | Columns · Views · Summary | The number of columns, filters and views, *a summary*. | The columns; the shared [views](../../saved-views.md) of the grid; the grouping columns of the [Summary view](../../saved-views.md#summary). |
| **Record form** | Dialog | The number of tabs and fields, or *no record form*. | The **Visual Builder** — Palette / Canvas / Inspector — where fields are dragged onto tabs. Optional: a screen without a record form still works as a read-only or grid-edit table. |
| **Actions** | Actions · Row menu | The toolbar actions, those of the row menu, those on save and load. | *Dialog hooks* (on_load / on_save / on_cancel), *Toolbar* buttons, *Row hooks* (on_insert / on_update / on_delete), and the row's context menu. |
| **Output** | Export | *export: N sheet(s)*, or *the grid's own export*. | The multi-sheet xlsx export — optional. |

### The columns \{#columns-list\}

**Grid → Columns** is a list with the picked column's settings beside it. Each line gives the column's name, its label — the screen's own, else the dictionary's — and what is worth seeing without opening it: *key*, *filter*, *hidden*, *required*, *read only*, *sensitive*, and its rule. Drag a line to reorder, type in the filter box to narrow the list, **Add a column**, remove one with its cross. The settings are those of [Columns](./columns.md); nested rules open in the same panel.

The next pages of this section walk through each stage as a separate task.

---

## What a screen carries

The schema's top-level fields, grouped by purpose:

| Group | Fields |
|---|---|
| **Identity** | `id`, `label`, `description`, `connector` *(blank = the app's own connector)* |
| **Read query** | `read_query` (required), `auto_load`, `max_rows`, `page_size` (rows per page of the grid; blank = the app's default), `key_columns` |
| **Write queries** | `update_query`, `insert_query`, `delete_query` |
| **Editing & display** | `columns`, `column_groups`, `editable`, `editable_when`, `read_only` (a click on a row opens the dialog view only — no save, no record lock —, its detail tabs loading from the row), `disable_add`, `uploadable`, `initial_group_by`, `treeview`, `chart_id` |
| **Views & summary** | `views` (shared views), `summary`, `value_diff` |
| **Change packages** | `change_tracked`, `change_entity`, `post_apply` — see [Change packages](../../../nomaflow/change-packages.md) |
| **Audit** | `audit_table` (e.g. `AUD_USERS` — mirrors writes with AUD_ACTION / AUD_USER / AUD_DATE) |
| **Form** | `dialog` *(optional — the form on top of the table)* |
| **Actions / hooks** | `actions` (toolbar), `row_menu` (right-click), `on_insert` / `on_update` / `on_delete` / `on_duplicate` (row hooks) |
| **Row-click target** | `row_click_screen` + `row_click_connector` + `row_click_binds` *(open a sibling screen as a dialog)* OR `row_click_route` *(open a SPA route)* |
| **Export** | `export` *(workbook xlsx config)* |

---

## Read-only mode

Set **Read-only** on a screen (a checkbox of the *What it is* stage) to make the whole view non-editable. It hides the dialog's *Save*, *Delete* and *Duplicate*, the grid's *Add* and *Delete selected*, inline cell editing, paste and Excel import — in the nested-table editors too. It is stronger than *Disable add* (which only blocks inserts) and is the right setting for a reference or audit screen that should never be changed from the UI. Server-side permissions still apply on top, independently.

---

## Screen kinds — by what's set

There's no `kind` discriminator; you get different screen shapes by which fields you fill in:

| Filled in | Behaviour |
|---|---|
| `read_query` only | Read-only grid. The user sees rows; no edit, no add. |
| `read_query` + `editable = true` | Inline grid editing — [Bulk edit](../../bulk-edit.md): cells edited in place, rows added, cloned, pasted or deleted, the grid's *Save* writing everything. Requires `update_query` or `insert_query`. |
| `read_query` + `dialog` | Grid + dialog. The user adds/edits rows through the form. Requires the matching `insert_query` / `update_query`. |
| `read_query` + `row_click_screen` | Master/detail. Clicking a row opens a sibling screen's dialog narrowed to that row. |
| `read_query` + `row_click_route` | Master/page. Clicking a row navigates to a SPA route — escape hatch for hand-written React pages (live-streamed logs, multi-source merges). |
| Any of the above + `treeview` | Tree view toggle in addition to the default Table / Chart toggles. Parent/child columns build a recursive node tree. |

The same screen can layer several: a screen with `dialog` AND `row_click_route` opens the route on click (route wins), and the dialog is reached only via the toolbar's *＋ Add* button.

---

## Permissions — gated by the read query

The screen itself **does not** have its own permission string. A user can see a screen when they have the permission to run its **read query**:

```
sql:<connector>:<read_query>
```

So a screen `customers` on connector `crm` with `read_query = customers_get` is visible to anyone with `sql:crm:customers_get`. Granting `sql:crm:*` opens every query on the connector — and therefore every screen that uses it.

The same logic applies to writes: the dialog's *Save* and the grid's *Save* succeed only when the user has `sql:<connector>:<update_query>` / `<insert_query>` / `<delete_query>`. A user with read but no write permission sees the grid but no *＋ Add* button and gets a read-only dialog.

---

## Save and reload

The Screens page's *Save* button writes the whole `screens.toml` (the `[screens]` table is replaced wholesale) and triggers a hot reload. The status banner reports which apps were touched.

The hot reload means **no process restart** — a new screen is callable immediately at `/screen/<app>/<id>`, and the menu picks it up if a menu entry points at it.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Wire a fresh screen to a `_get` query and see the grid. | [Create a screen from a query](./create-from-query.md). |
| Configure columns — labels, formats, defaults, filtering. | [Columns](./columns.md). |
| Build the add/edit dialog with the visual designer. | [Dialog builder](./dialog-builder.md). |
| Make fields appear / be required / be locked under specific conditions. | [Conditional fields](./conditional-fields.md). |
| Add toolbar buttons, row menus and lifecycle hooks. | [Actions and lifecycle](./actions-and-lifecycle.md). |
| Embed a child-record form or a related-rows grid in a tab. | [Nested tabs](./nested-tabs.md). |

---

## What's next

- [Create a screen from a query](./create-from-query.md) — start with a `_get`, see the grid.
- [Concepts → Screens](./overview.md) — the deep reference behind this page.
