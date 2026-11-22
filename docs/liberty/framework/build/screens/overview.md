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

<svg viewBox="0 0 1320 362" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="318" rx="14" fill="url(#scl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="47" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="47" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screens</text>
  <rect x="987" y="33" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="94" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Connector:</text>
  <rect x="296.4" y="82" width="35" height="20" rx="10" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="313.9" y="95.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="336.4" y="82" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="363.9" y="95.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="396.4" y="82" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="423.9" y="95.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="456.4" y="82" width="75" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="493.9" y="95.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add scope</text>
  <rect x="1042" y="80" width="40" height="22" rx="5" fill="url(#scl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1062.0" y="94.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="971" y="80" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1003.5" y="94.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Discard</text>
  <rect x="885" y="80" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="94.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add screen</text>
  <rect x="238" y="114" width="844" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="129.3" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Filter…</text>
  <rect x="238" y="144" width="844" height="182" rx="10" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="150" width="828" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="180" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="167" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="280" y="180" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="280" y="192" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">crm.customers_get · 2 tabs · 8 fields · 2 row-menu items</text>
  <rect x="1023" y="164" width="41" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1043.5" y="178.5" fill="#f87171" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="973" y="164" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="996.0" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="919" y="164" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="814" y="164" width="101" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="864.5" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Find dependencies</text>
  <rect x="737" y="164" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.5" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="246" y="208" width="828" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="238" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="225" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="280" y="238" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="280" y="250" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">crm.deals_get · 1 tab · 6 fields</text>
  <rect x="1023" y="222" width="41" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1043.5" y="236.5" fill="#f87171" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="973" y="222" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="996.0" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="919" y="222" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="814" y="222" width="101" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="864.5" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Find dependencies</text>
  <rect x="737" y="222" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.5" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="246" y="266" width="828" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="296" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="283" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">orders</text>
  <text x="280" y="296" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="280" y="308" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">crm.orders_get · 0 tabs · 0 fields</text>
  <rect x="1023" y="280" width="41" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1043.5" y="294.5" fill="#f87171" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="973" y="280" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="996.0" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="919" y="280" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="814" y="280" width="101" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="864.5" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Find dependencies</text>
  <rect x="737" y="280" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.5" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One chip per application</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its screens load below</text>
  <line x1="200" y1="93.0" x2="296.4" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="20" y="146" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="161" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a card</text>
  <text x="30" y="174" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the Screen Designer</text>
  <line x1="200" y1="163.0" x2="278" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What the screen holds</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read query · tabs · fields</text>
  <line x1="200" y1="213.0" x2="278" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reload config</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">re-reads the files</text>
  <line x1="1120" y1="43.0" x2="1040" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="1120" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add screen</text>
  <text x="1130" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">asks for its id</text>
  <line x1="1120" y1="99.0" x2="925.0" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="1120" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usages and dependencies</text>
  <text x="1130" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">before a rename or a delete</text>
  <line x1="1120" y1="223.0" x2="757" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Header** | The page title and **Reload config**, which re-reads the configuration files. |
| **Connector bar** | One chip per application that has screens; a click loads its screens below. **＋ Add scope** gives screens to a connector that has none. On the right, **Add screen** (asks for the new screen's id), **Discard** and **Save** for the page-wide edits. Below, **Filter…** narrows the list. |
| **Screen list** | One card per screen: its id, its label, then its read query (`<connector>.<query>`) with the number of tabs, fields and row-menu items. Each card has **Find usages**, **Find dependencies**, **Rename**, **Clone** and **Delete**. **A click on the card opens the Screen Designer.** |

---

## The Screen Designer \{#designer\}

Clicking a card opens the **Screen Designer** in a near-fullscreen window. The title bar names the screen (`[screens.<app>.<id>]`) and has the *Restore / Maximize* button and **Cancel**; the bottom bar has **Cancel** and **Save** — Save commits **just this screen's edits** and closes — in `screens.toml`, only that screen is rewritten, without its default values and in the file's key order, every other screen staying as it is; Cancel prompts on unsaved changes.

The designer **reads like the screen**: six stages drawn as a flow — **What it is → Data → Grid → Record form → Actions → Output** — and each card says what the screen holds there. A click on a card opens it; a stage with several sections shows them under the flow.

<svg viewBox="0 0 1320 550" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="514" rx="14" fill="url(#sds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer ·</text>
  <text x="349.1008" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1017" y="32" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="987" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <rect x="238" y="146" width="167" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="239" y="147" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.5" y="160.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <line x1="297" y1="151" x2="297" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="321.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <line x1="346" y1="151" x2="346" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="375.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <rect x="238" y="180" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="200" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="194" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="260" y="206" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Customer</text>
  <rect x="472" y="188.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="492.0" y="199.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filter</text>
  <rect x="442" y="188.5" width="26" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="455.0" y="199.3" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">key</text>
  <text x="526" y="200" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="218" width="300" height="32" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="247" y="238" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="232" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="260" y="244" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="463" y="226.5" width="49" height="15" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.45)" strokeWidth="1"/>
  <text x="487.5" y="237.3" fill="#c084fc" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">required</text>
  <rect x="419" y="226.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="439.0" y="237.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filter</text>
  <text x="526" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="256" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="276" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="270" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="260" y="282" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Country</text>
  <rect x="472" y="264.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="492.0" y="275.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filter</text>
  <text x="526" y="276" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="294" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="314" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="308" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="260" y="320" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="472" y="302.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="492.0" y="313.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filter</text>
  <text x="526" y="314" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="332" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="352" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="346" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="260" y="358" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Credit limit</text>
  <rect x="458" y="340.5" width="54" height="15" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="485.0" y="351.3" fill="#fb923c" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">sensitive</text>
  <text x="526" y="352" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="370" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="390" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="384" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="260" y="396" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Updated at</text>
  <rect x="472" y="378.5" width="40" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="#475569" strokeWidth="1"/>
  <text x="492.0" y="389.3" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">hidden</text>
  <text x="526" y="390" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="410" width="86" height="20" rx="5" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="248" y="423.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+ Add a column</text>
  <rect x="554" y="180" width="528" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="564" y="190" width="508" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="574" y="206" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="588" y="206" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">NAME</text>
  <rect x="564" y="222" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="590.5" y="236.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="647.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="702.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="752.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="797.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="850.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <line x1="564" y1="250" x2="1072" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="566" y="266" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME ∗</text>
  <rect x="566" y="271" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="285.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="566" y="305" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Result column this entry applies to (case-insensitive match).</text>
  <text x="566" y="324" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DD</text>
  <rect x="566" y="329" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="343.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="343.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="566" y="363" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Inherit label / format / rule from this dictionary entry.</text>
  <text x="566" y="382" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="566" y="391" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="583" y="400" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="566" y="424" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SENSITIVE</text>
  <rect x="566" y="429" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="443.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="443.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="220" y1="492" x2="1100" y2="492" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="502" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="502" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six stages, as a flow</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card says what it holds</text>
  <line x1="200" y1="99.0" x2="238" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="188" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="203" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The columns, as a list</text>
  <text x="30" y="216" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag ⠿ to reorder, ✕ to remove</text>
  <line x1="200" y1="205.0" x2="244" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marks worth seeing</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">key, filter, required, hidden…</text>
  <line x1="200" y1="317.0" x2="478" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a column</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the read query</text>
  <line x1="200" y1="417.0" x2="244" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections of the stage</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Columns · Views · Summary</text>
  <line x1="1120" y1="177.0" x2="420" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The picked column</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its settings, grouped in tabs</text>
  <line x1="1120" y1="227.0" x2="879" y2="233" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1120" y="484" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="499" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save this screen only</text>
  <text x="1130" y="512" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Cancel asks on unsaved changes</text>
  <line x1="1120" y1="501.0" x2="1040" y2="514" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
</svg>

| Stage | Sections | The card says | Carries |
|---|---|---|---|
| **What it is** | General | The screen's label, *read only*. | Identity (label and description, each in the other languages too), connector override, audit table, row cap, key columns, behaviour flags (auto-load, editable, uploadable), grouping, treeview, default chart, row-click behaviour. |
| **Data** | Queries | The read query and the number of save queries — in **orange** when no read query is set, or when an editable screen has nothing to save through. | The read (required), update, insert and delete — queries of the connector, or [API endpoints](./api-screens.md); **Saves through** for a screen read by SQL and saved by an API. |
| **Grid** | Columns · Views · Summary | The number of columns, filters and views, *a summary*. | The columns; the shared [views](../../saved-views.md) of the grid; the grouping columns of the [Summary view](../../saved-views.md#summary). |
| **Record form** | Dialog | The number of tabs and fields, or *no record form*. | The visual builder — **Add a field** / **Dialog** / **Inspector** — where fields are added to tabs. Optional: a screen without a record form still works as a read-only or grid-edit table. |
| **Actions** | Actions · Row menu | The toolbar actions, those of the row menu, those on save and load. | *Dialog hooks* (on_load / on_save / on_cancel), *Toolbar* buttons, *Row hooks* (on_insert / on_update / on_delete / on_duplicate), and the row's context menu. |
| **Output** | Export | *export: N sheet(s)*, or *the grid's own export*. | The multi-sheet xlsx export — optional. |

### The columns \{#columns-list\}

**Grid → Columns** is a list with the picked column's settings beside it. Each line gives the column's name, its label — the screen's own, else the dictionary's — and what is worth seeing without opening it: *key*, *filter*, *hidden*, *required*, *read only*, *sensitive*, and its rule. Drag a line by its grip to reorder, **Add a column**, remove one with its cross; past six columns, a filter box narrows the list (dragging is off while it is filtered). Beside the list, the picked column's settings are grouped in six tabs — **General**, **Display**, **Filter**, **Rules**, **Edit**, **Defaults** — described on [Columns](./columns.md); a condition or a nested rule opens in the same panel, with a breadcrumb back to the column.

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
