---
title: Columns
description: "The columns of a Liberty Next screen, in the Screen Designer (Grid → Columns) — set each column's display title, format, dictionary reference, edit rule, default and filtering once; both the grid and the dialog use them."
keywords: [Liberty Framework, columns, ColumnHint, dictionary, format, lookup, filter, hidden, key, default]
---

# Columns

**Grid → Columns**, in the [Screen Designer](./overview.md#designer), is where you set per-column metadata: how the column renders in the grid, how it appears in the dialog form, whether it filters, whether it's required, whether it's part of the row's primary key. Set each column once — both surfaces (grid and dialog) use the same configuration.

---

## The columns at a glance

<svg viewBox="0 0 1320 550" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="514" rx="14" fill="url(#scol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
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
  <rect x="238" y="218" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
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
  <rect x="238" y="294" width="300" height="32" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
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
  <text x="588" y="206" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="590.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="621" y="222" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="647.5" y="236.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="702.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="752.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="797.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="850.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <line x1="564" y1="250" x2="1072" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="566" y="266" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="566" y="271" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="566" y="305" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Display title in the grid header and the dialog field.</text>
  <text x="566" y="322" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HIDDEN</text>
  <rect x="566" y="331" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="583" y="340" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="566" y="362" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="566" y="367" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="381.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="381.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="566" y="406" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ALIGN</text>
  <rect x="566" y="411" width="247" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="425.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="801" y="425.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="823" y="406" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WIDTH</text>
  <rect x="823" y="411" width="247" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="566" y="450" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WRAP · CARD · COLSPAN · DRILL …</text>
  <line x1="220" y1="492" x2="1100" y2="492" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="502" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="502" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six stages, as a flow</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card says what it holds</text>
  <line x1="200" y1="99.0" x2="238" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="20" y="188" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="203" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The columns, as a list</text>
  <text x="30" y="216" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag ⠿ to reorder, ✕ to remove</text>
  <line x1="200" y1="205.0" x2="244" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marks worth seeing</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">key, filter, required, hidden…</text>
  <line x1="200" y1="317.0" x2="478" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a column</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the read query</text>
  <line x1="200" y1="417.0" x2="244" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections of the stage</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Columns · Views · Summary</text>
  <line x1="1120" y1="177.0" x2="420" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six tabs of settings</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">General · Display · Filter · Rules…</text>
  <line x1="1120" y1="227.0" x2="879" y2="233" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Display in the grid</text>
  <text x="1130" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label, hidden, format, width…</text>
  <line x1="1120" y1="297.0" x2="1070" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Blank = inherited</text>
  <text x="1130" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the dictionary entry</text>
  <line x1="1120" y1="367.0" x2="1070" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="484" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="499" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save this screen only</text>
  <text x="1130" y="512" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Cancel asks on unsaved changes</text>
  <line x1="1120" y1="501.0" x2="1040" y2="514" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
</svg>

The list shows one line per column (**ColumnHint**) with its marks; a click on a line opens its settings beside the list, in six tabs:

| Tab | Holds |
|---|---|
| **General** | `name`, `dd`, `key`, `sensitive`, `group` (the related one-to-one table the column is written to). |
| **Display** | `label`, `hidden`, `format`, `align`, `width`, `wrap`, `params_of`, the card setting, the span in the record form, the drill link. |
| **Filter** | `filter`, `filter_period`, `filter_from`, `visible_when`. |
| **Rules** | `rules`, `rules_values`, `rules_when` — and the lookup settings when the rule is a lookup. |
| **Edit** | `required`, `required_when`, `disabled`, `disabled_when`, `disable_on_add`, `disable_on_edit`, `justify` (how the written value is padded — blank inherits the dictionary). |
| **Defaults** | `default`, `default_when`, `write_when`. |

A list setting (a condition, a cascading filter) opens in the same panel; the breadcrumb at the top leads back to the column.

---

## Field by field

Every column hint carries the same shape. The fields are described below by purpose.

### Identity

| Field | Notes |
|---|---|
| **`name`** | The result column this hint applies to. Case-insensitive match against the read query's columns. Normalised to UPPERCASE on save. |
| **`dd`** | Dictionary entry to inherit `label` / `format` / `rule` from. Blank uses the column `name` as the key. Set to `""` (empty quoted string) to opt out of the dictionary entirely. |
| **`sensitive`** (*Sensitive*) | Whether the column holds sensitive data, for the AI assistant: hidden from what the assistant is given when the installation hides sensitive data. Three choices in the editor: *(default)* follows the column's dictionary entry, *yes* flags the column, *no* exempts it even when its entry is flagged. See [Sensitive data](../../ai-data-sent.md#sensitive). |

The dictionary system (`dictionary.toml`) is Liberty's centralised vocabulary — one entry defines a field's display title, format, rule and lookup once; every screen that has a column with that name inherits it. See [Concepts → Dictionary](../../dictionary.md).

### Display in the grid

| Field | Notes |
|---|---|
| **`label`** | Display title in the grid header and the dialog field label. Falls back to the dictionary's `label`, then to the column `name`. |
| **`hidden`** | When on, the column is hidden by default. The operator can un-hide it via the grid's *Columns* menu. |
| **`wrap`** | When on, long text wraps over several lines in the grid instead of being cut. |
| **`width`** | Fixed column width in pixels. Blank = auto-size. |
| **`align`** | Text alignment — `left`, `right`, `center`. Blank auto-picks based on type (numbers right, text left). |
| **`format`** | How to render the value — `date`, `number`, `boolean`, `currency`, etc. Overrides the dictionary format. Drives both the grid cell and the dialog field. |
| **Long Text**, **Name = value list** | Two formats worth knowing. *Long Text* is typed in a multi-line box, in the record form and in the grid's edit mode, and keeps its line breaks. *Name = value list* shows a text of `name = value` lines as rows of fields in the record form (add, remove, **As text** / **As fields**); with **Params Of** — the column of the screen that names an endpoint — it becomes that endpoint's own form, one labelled field per parameter. |
| **Card** | On a phone, where the grid is a list of cards: `title` puts the column in the card's heading, `show` always gives it a line, `hide` never shows it. Blank: the grid decides. See [Phone and tablet](../../mobile.md#card-setting). |

### Edit rule

| Field | Notes |
|---|---|
| **`rules`** | How to render and validate the column. `BOOLEAN` renders a checkbox, `ENUM` a dropdown, `LOOKUP` a searchable picker. Blank inherits from the dictionary. |
| **`rules_values`** | The rule's value — `BOOLEAN` → the true marker (`Y` / `1` / `true`); `ENUM` → the enum id; `LOOKUP` → the lookup id; `SEQUENCE` / `NN` → the sequence id. |
| **`default`** | Pre-fill value when adding a new row. |
| **`required`** | When on, the field is marked with an asterisk and **Save** stays blocked while it is empty. |
| **`disabled`** | When on, the column is read-only — the operator sees the value but can't change it. |
| **`disable_on_add`** / **`disable_on_edit`** | Read-only only when a row is added, or only once it exists — the second one for keys that must not change. |
| **`required_when`** / **`disabled_when`** | Required or read-only only while conditions on other fields hold. A required field blocks **Save** only while it is visible. |
| **`default_when`** | A value forced (and locked, unless **lock** is off) while a condition holds. |
| **`rules_when`** | Another rule (lookup, enum, Boolean) while a condition holds. |
| **`write_when`** | The column is written only while a condition holds. |
| **`lookup_param_binds`** | Narrow a `LOOKUP` rule's query by binding extra parameters. Used when the lookup depends on another field's value (e.g. picking a role narrows by the row's current application). See [Parameter binding](../queries/parameter-binding.md). |

### Primary key

| Field | Notes |
|---|---|
| **`key`** | Mark this column as part of the row's primary key. Drives:<br/>– Excel-import update-vs-insert matching.<br/>– In add mode, a key column shows a plain input instead of its lookup list (a new key is typed, not picked).<br/>– The `_put` query's `:NAME_ORIGINAL` binding (the CRUD Wizard's convention). |

A key is not locked automatically when a row is edited: tick **disable_on_edit** (Edit tab) on the key columns that must not change once the row exists. Mark every column that uniquely identifies a row. Multi-column keys are supported — tick the flag on each. When the screen's `key_columns` is empty (the usual case), the runtime falls back to columns whose `key` flag is on.

### Filtering

| Field | Notes |
|---|---|
| **`filter`** | When on, the column appears in the table's filter panel. The user picks a value to narrow the grid; on a column with a list of values (an enum), several values at once, and a code typed beyond the list is accepted. A lookup column keeps a single choice. A date column (`date`, `datetime`, `timestamp` format, or a date type in the database) filters by a [period](#period). |
| **`filter_period`** | On a date column with `filter`, the period the filter opens on: `today`, `yesterday`, `last7`, `last30`, `thisMonth`, `lastMonth`, `thisQuarter`, `thisYear`, `lastYear`, `last12`. Blank or `all`: no period, every row. The screen's first automatic run already applies it. |
| **`filter_from`** | Cascading filter — narrow this column's options based on another filter's value. Picks a `source` column (already-filtered) and a `column` on the lookup query's result that the source matches against. |
| **`visible_when`** | In the grid, hides the column when a filter is set to a value outside the condition; in the dialog, shows the field only while the form's values match. |

The conditions are described on [Form conditions](../../form-conditions.md), with examples on [Conditional fields](./conditional-fields.md).

### A typical column

For a `STATUS` column on a customers screen, the configuration usually looks like:

| Field | Value |
|---|---|
| `name` | `STATUS` |
| `dd` | (blank — uses `STATUS` as the dict key) |
| `label` | (blank — inherits from the dictionary) |
| `format` | (blank — inherits) |
| `rules` | `ENUM` |
| `rules_values` | `STATUS_CODES` (an enum id declared in dictionary) |
| `default` | `OPEN` |
| `required` | ✓ |
| `filter` | ✓ |

That renders a dropdown in the dialog (sourced from the `STATUS_CODES` enum), pre-fills new rows with `OPEN`, requires a value, and adds a filter chip to the grid.

---

## Inheriting from the dictionary

The default behaviour — when most fields are blank — is to **inherit from the dictionary**. The chain:

```
ColumnHint.label  → DD entry.label  → column name
ColumnHint.format → DD entry.format → engine-picks-by-type
ColumnHint.rules  → DD entry.rule
ColumnHint.rules_values → DD entry.rule_values
```

This means a column named `USR_ID` on a screen automatically reads its label, format, lookup rule and lookup id from the dictionary entry `USR_ID` (or whatever you set `dd` to). The screen overrides only when **this** screen needs different behaviour from the rest.

The column list is therefore mostly **empty** for well-dictionary'd installs — entries only appear when there's something to override.

---

## Filtering and cascading filters

When a column has `filter = true`, a chip for it appears in the grid's filter panel. The user picks a value, the grid re-runs the read query with that value bound to the matching `:placeholder` param. The query is responsible for accepting the bind.

### A period on a date column \{#period\}

On a date column, the filter panel shows a period instead of a single date: the same picker as the dashboards, with its presets (*Today*, *Yesterday*, *Last 7 days*, *Last 30 days*, *This month*, *Last month*, *This quarter*, *This year*, *Last year*, *Last 12 months*, *All dates*) and a two-month calendar for a custom range. The run sends the two bounds as `<COL>_from` and `<COL>_to`, and the server bounds the column itself — the read query needs no placeholder for them. A period ending on a day keeps all of that day's rows, times included.

A drill or a link that passes a date to a date column opens the screen on that one day.

**Cascading filters** narrow one filter's options based on another. The classic case: a *Role* dropdown that shows only roles for the currently-picked *Application*:

| Field | Value on `ROLE_ID` |
|---|---|
| `rules` | `LOOKUP` |
| `rules_values` | `get_roles` |
| `filter` | ✓ |
| `filter_from.source` | `APPS_ID` (the parent filter's source column) |
| `filter_from.column` | `APP_ID` (the column on the lookup query's result that matches the source) |

When the user picks an application, the role lookup re-runs with the application id bound — the user only sees that application's roles.

---

## Order of columns

The order of the **ColumnHint** list = the display order in the grid. Columns the read query returns but that aren't listed here keep their discovery order and follow the hinted ones.

To reorder:

| Goal | Action |
|---|---|
| Move a column up / down. | Drag its row in the list (the drag handle is the left edge of the row). |
| Hide a column entirely. | Set `hidden = true`. The operator can still un-hide it from the grid's *Columns* menu. |
| Drop a column from both grid and dialog. | Remove its hint AND make sure it's not on any dialog tab's fields. (Or alter the read query to not return it.) |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `dd = "USR_ID"` but no dictionary entry named `USR_ID`. | Label and format fall back to the column name verbatim. | Add the dictionary entry, or set `dd = ""` to opt out and configure `label`/`format` inline. |
| `rules = LOOKUP` but `rules_values` blank. | The dropdown is empty. | Set `rules_values` to a lookup id from the dictionary. |
| `filter_from` set but the column is not `filter`. | The cascade does nothing — the source filter never fires. | Tick `filter = true` AND set `filter_from`. |
| `required = true` on a column the read query doesn't return. | The dialog saves with NULL; if the DB has a NOT NULL constraint, the write fails. | Add the column to the read query, or remove `required` from the hint. |
| `key = true` on a non-unique column. | Excel import treats duplicate values as updates of the same row. | Verify the key columns genuinely identify a row uniquely. |
| `format = currency` but the value is in cents (integer). | The grid renders `1,234.00` for `123456`. | Format expects the value in the unit you want displayed — divide by 100 in the query, or use a Python step before display. |

---

## What's next

- [Dialog builder](./dialog-builder.md) — fields you've configured here become drag-droppable cards on the canvas.
- [Conditional fields](./conditional-fields.md) — make a column appear / be required / be locked only under specific form conditions.
- [Concepts → Dictionary](../../dictionary.md) — the shared vocabulary that columns inherit from.
