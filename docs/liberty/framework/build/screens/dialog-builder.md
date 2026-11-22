---
title: Dialog builder
description: "The record form of a Liberty Next screen, built in the Screen Designer — three panels (Add a field / Dialog / Inspector) where you add fields to tabs, set their column settings, choose the tab types and add per-tab actions."
keywords: [Liberty Framework, dialog builder, visual builder, ScreenVisualBuilder, palette, canvas, inspector, tabs, fields, drag-drop]
---

# Dialog builder

The **Record form** stage of the Screen Designer opens the **visual builder** — a WYSIWYG editor for the add/edit form. The data model is the same `ScreenDialog` shape stored in `screens.toml`, but instead of editing TOML you add fields to tabs and tune them in a side inspector.

A screen without a dialog still works as a read-only / grid-edit table. Build a dialog when the user needs a full form to add or edit rows.

---

## Three-column layout

<svg viewBox="0 0 1320 574" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dlb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dlb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dlb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dlb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="538" rx="14" fill="url(#dlb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <rect x="988" y="144" width="94" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1035.0" y="158.5" fill="#f87171" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete dialog</text>
  <rect x="238" y="174" width="190" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ADD A FIELD</text>
  <text x="416" y="192" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="248" y="202" width="125" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="249" y="203" width="67" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="282.5" y="215.5" fill="#4a9eff" fontSize="8.2" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionary</text>
  <line x1="317" y1="207" x2="317" y2="217" stroke="#334155" strokeWidth="1"/>
  <text x="345.0" y="215.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="248" y="230" width="170" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="242.3" fill="#475569" fontSize="8.2" fontFamily="system-ui, sans-serif">⌕ filter…</text>
  <text x="254" y="268" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="268" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">ACTIVE</text>
  <text x="414" y="268" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Active</text>
  <text x="254" y="290" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="290" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">ADDRESS</text>
  <text x="414" y="290" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Address</text>
  <text x="254" y="312" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="312" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">CITY</text>
  <text x="414" y="312" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">City</text>
  <text x="254" y="334" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="334" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="414" y="334" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Country</text>
  <text x="254" y="356" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="356" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="414" y="356" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Credit limit</text>
  <text x="254" y="378" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="378" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="414" y="378" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="254" y="400" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="400" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">EMAIL</text>
  <text x="414" y="400" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">E-mail</text>
  <text x="254" y="422" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="422" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="414" y="422" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Name</text>
  <text x="254" y="444" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="444" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="414" y="444" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Status</text>
  <text x="248" y="478" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Click an item to add it to the current tab.</text>
  <rect x="440" y="174" width="410" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOG</text>
  <text x="838" y="192" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">cols: 2 · fields: 4</text>
  <rect x="452" y="202" width="80" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="492.0" y="216.5" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ General · 4</text>
  <rect x="536" y="202" width="80" height="22" rx="5" fill="transparent" stroke="transparent" strokeWidth="1"/>
  <text x="576.0" y="216.5" fill="#cbd5e1" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Address · 4</text>
  <rect x="620" y="202" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="650.5" y="216.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add tab</text>
  <line x1="452" y1="232" x2="838" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <rect x="452" y="240" width="386" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="462" y="256" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">›  Tab settings</text>
  <rect x="798" y="244.5" width="30" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="#475569" strokeWidth="1"/>
  <text x="813.0" y="255.3" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">form</text>
  <rect x="452.0" y="274" width="188.0" height="66" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="462.0" y="290" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">#  Customer</text>
  <rect x="462.0" y="297" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="309.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">123</text>
  <text x="462.0" y="330" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <rect x="522.56" y="320" width="25" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="535.06" y="330.8" fill="#4ade80" fontSize="7.4" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">key</text>
  <rect x="650.0" y="274" width="188.0" height="66" rx="7" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="660.0" y="290" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">≡  Name</text>
  <rect x="660.0" y="297" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="668.0" y="309.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">…</text>
  <text x="660.0" y="330" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">NAME</text>
  <rect x="452.0" y="348" width="188.0" height="66" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="462.0" y="364" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">≡  Country</text>
  <rect x="462.0" y="371" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="383.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">…</text>
  <text x="462.0" y="404" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <rect x="650.0" y="348" width="188.0" height="66" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="364" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">⌕  Status</text>
  <rect x="660.0" y="371" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="668.0" y="383.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">lookup: get_status</text>
  <text x="660.0" y="404" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">STATUS</text>
  <rect x="452" y="422" width="188.0" height="30" rx="7" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="546.0" y="441" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add field</text>
  <rect x="862" y="174" width="220" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="874" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSPECTOR</text>
  <text x="1070" y="192" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">›</text>
  <text x="874" y="210" fill="#4a9eff" fontSize="8.4" fontFamily="system-ui, sans-serif">Dialog title</text>
  <text x="932.448" y="210" fill="#e2e8f0" fontSize="8.4" fontFamily="system-ui, sans-serif">›  NAME</text>
  <line x1="872" y1="218" x2="1072" y2="218" stroke="#1f2937" strokeWidth="1"/>
  <text x="874" y="234" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">▤  NAME</text>
  <text x="874" y="248" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">This field renders its column.</text>
  <line x1="872" y1="258" x2="1072" y2="258" stroke="#1f2937" strokeWidth="1"/>
  <text x="874" y="274" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">≋  Column configuration</text>
  <rect x="872" y="282" width="50" height="19" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="897.0" y="294.8" fill="#4a9eff" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="951.0" y="294.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="1003.0" y="294.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="892.5" y="317.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="935.5" y="317.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="985.0" y="317.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <text x="874" y="342" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME ∗</text>
  <rect x="874" y="347" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="883" y="361.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="874" y="386" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DD</text>
  <rect x="874" y="391" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="883" y="405.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="405.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="874" y="430" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="874" y="439" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="891" y="448" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">disabled</text>
  <line x1="220" y1="516" x2="1100" y2="516" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="526" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="526" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tabs of the form</text>
  <text x="30" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ Add tab; drag a card across</text>
  <line x1="200" y1="195.0" x2="454" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tab settings</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label, type, columns, tab actions</text>
  <line x1="200" y1="249.0" x2="454" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="20" y="304" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="319" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a field</text>
  <text x="30" y="332" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dictionary entries or columns</text>
  <line x1="200" y1="321.0" x2="250" y2="324" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="20" y="404" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="419" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click to add</text>
  <text x="30" y="432" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to the current tab</text>
  <line x1="200" y1="421.0" x2="254" y2="434" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete dialog</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">back to a grid-only screen</text>
  <line x1="1120" y1="177.0" x2="1070" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="204" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="219" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inspector</text>
  <text x="1130" y="232" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the picked field and its column</text>
  <line x1="1120" y1="221.0" x2="1072" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="284" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="299" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Same settings as the grid</text>
  <text x="1130" y="312" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Display ▸ Colspan for the span</text>
  <line x1="1120" y1="301.0" x2="1072" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="424" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="439" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selected card</text>
  <text x="1130" y="452" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its column opens on the right</text>
  <line x1="1120" y1="441.0" x2="858" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
</svg>

| Region | What it does |
|---|---|
| **Add a field** *(left)* | Source of new fields. Two sub-tabs: **Dictionary** (every entry available on the current connector scope) and **Columns** (every column the read query returns). A filter narrows the list; a click on an entry adds a field card to the current tab. The panel folds away with its arrow. |
| **Dialog** *(center)* | The tabs strip across the top — each tab with its field count, **＋ Add tab** at the end — then **Tab settings** (folded: tab label, tab type, columns, the title in the other languages, the two *Left out* boxes, tab actions) and the field cards. Each card shows the label, a preview of the input (a number, a date, a lookup and its query…), the column name and its *key* mark; the picked card has a blue border. The header counts the grid's columns and the tab's fields. A **Hidden fields** group at the bottom collects the fields with `hidden = true`. |
| **Inspector** *(right)* | The picked field and its **Column configuration** — see Step 3 —, or, with no field picked, the dialog's title and its events. It folds away with its arrow. |

**Delete dialog**, above the panels, removes the whole form: the screen becomes a read-only or grid-edit table again.

---

## Building from scratch

### Step 1 — Open the Record form stage

The first time, the canvas is empty with a *Create dialog* button. Click it to seed `dialog.tabs = [{id: 'general', label: 'General', fields: []}]` and reveal the three-column layout.

### Step 2 — Add the first tab's fields

Two ways:

| Method | When |
|---|---|
| **Click a Dictionary entry or a column in Add a field** | Adds a field card at the end of the current tab. A dictionary entry pre-fills `dd`, so the field picks up the entry's rule; a column adds a plain field bound to the read query. |
| **Click + Add field at the end of the tab** | Asks for the field name (a column of the read query) and adds it. |

The added field becomes the selected card; the Inspector switches to it. Drag a card to put it elsewhere in the grid. Set `colspan` to widen it (the grid is by default 2 columns; a `colspan = 2` field fills the row).

### Step 3 — Tune the field properties

A dialog field displays a screen column, and the column carries every behaviour. The Inspector shows:

| Section | What it holds |
|---|---|
| **Breadcrumb** | *Dialog title › FIELD* — a click on *Dialog title* goes back to the dialog's own settings. |
| **Field** | The field's name and, with several form tabs, the **Tab** it sits on. |
| **Column configuration** | The column's full editor — the same as in Grid → Columns: label, format, dictionary entry (`dd`), rule and lookup binds, required / read-only flags, conditions, defaults, and the field's span on the dialog grid (**Display ▸ Colspan**). A change applies to the grid as well. |
| **Events** | The hooks wired on the screen, by event, for information — they are edited on the **Actions** stage. |
| **Delete field** | Removes the field from the tab; the column stays on the screen. |

See [Columns](./columns.md) for each setting and [Conditional fields](./conditional-fields.md) for the conditions.

### Step 4 — Add tabs

Click **＋ Add tab** at the end of the tab strip; it asks for the tab's id. The new tab is empty; add fields from **Add a field**. Common tab patterns:

| Tab name | What's on it |
|---|---|
| **General** | Identity + most-used fields. |
| **Audit** | Created at, created by, updated at, updated by — often `hide_on_add` to hide the tab when inserting. |
| **Notes** | Free-text fields. |
| **Address** | A group of related fields (street, city, postcode, country). |

### Tab settings \{#tab-settings\}

**Tab settings**, above the field cards, sets the picked tab: its label, its type, its columns — and how it reads in other languages and when it is shown.

<svg viewBox="0 0 1200 302" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbts-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbts-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbts-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbts-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="260" rx="14" fill="url(#dbts-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#94a3b8" fontSize="8.5" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOG</text>
  <text x="960" y="46" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">cols: 2 · fields: 6</text>
  <rect x="240" y="58" width="82" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.0" y="72.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Customer · 4</text>
  <rect x="328" y="58" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="361.5" y="72.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit · 2</text>
  <rect x="401" y="58" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="434.5" y="72.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add tab</text>
  <rect x="240" y="94" width="720" height="168" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="114" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Tab settings</text>
  <rect x="910" y="103" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="927.5" y="114.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">form</text>
  <text x="254" y="136" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAB LABEL</text>
  <rect x="254" y="141" width="235" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="499" y="136" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAB TYPE</text>
  <rect x="499" y="141" width="276" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="509" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="508" y="155.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">form</text>
  <text x="534.328" y="155.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Form — a grid of editable fields</text>
  <text x="763" y="155.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="785" y="136" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLUMNS</text>
  <rect x="785" y="141" width="161" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="795" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <text x="254" y="184" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TITLE IN THE OTHER LANGUAGES</text>
  <rect x="254" y="189" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="203.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="263" y="203.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="278.664" y="203.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Franç…</text>
  <text x="332" y="203.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="350" y="189" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="203.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <rect x="508" y="189" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="519.0" y="203.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="254" y="218" width="56" height="17" rx="4" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="263" y="230" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">+ add</text>
  <rect x="546" y="191" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="563" y="200" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Left out when a record is added</text>
  <rect x="546" y="211" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="563" y="220" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Left out when a record is edited</text>
  <text x="254" y="254" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Tab actions</text>
  <rect x="20" y="52" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tabs of the form</text>
  <text x="30" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its field count</text>
  <line x1="200" y1="69.0" x2="240" y2="69" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbts-arrow)"/>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Label, type, columns</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as written</text>
  <line x1="200" y1="145.0" x2="254" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbts-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Title per language</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the user's language</text>
  <line x1="200" y1="203.0" x2="254" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbts-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Left out on add</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e.g. an audit tab</text>
  <line x1="1000" y1="187.0" x2="725.24" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbts-arrow)"/>
  <rect x="1000" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Left out on edit</text>
  <text x="1010" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e.g. a creation-only tab</text>
  <line x1="1000" y1="239.0" x2="730.28" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbts-arrow)"/>
</svg>

| Field | Effect |
|---|---|
| **Tab label** | The tab's title, as written. |
| **Tab type** | *Form* (a grid of editable fields), a nested table or another screen's form — see [Nested tabs](./nested-tabs.md). |
| **Columns** | The number of columns of the tab's grid. |
| **Title in the other languages** | The title for the users of another language: a language picked in the list, then its text; **+ add** for another. A language with no line shows the tab label as written. |
| **Left out when a record is added** (`hide_on_add`) | The tab is not shown when a new record is added. |
| **Left out when a record is edited** (`hide_on_edit`) | The tab is not shown when an existing record is edited. |
| **Tab actions** | Buttons shown inside the tab — see [Tab actions](#tab-actions). |

### Step 5 — Reorder fields

Drag a field card within the same tab to reorder. Drag across to a different tab to move it between tabs. The drag is HTML5 native — the drop target highlights while you hover. When dragging is awkward, select the field and use the **Tab** picker in the Inspector to move it to another form tab — the field lands at the end of the target tab and stays selected.

### Step 6 — Hide a field

Two ways:

| Method | Effect |
|---|---|
| Tick **hidden** in the column configuration (Display). | The card moves to the **Hidden fields** group at the bottom of the Dialog panel. The field still binds at save time. |
| Delete the field from the tab. | The field is removed from the dialog entirely. The column is still on the screen; it just doesn't surface in the form. |

The "hide but keep" pattern is useful for technical columns the dialog must submit (e.g. an audit timestamp) but the user shouldn't see.

---

## The three tab kinds

Tabs aren't all the same. Three types live under `dialog.tabs`, discriminated on the `type` field:

| Type | Purpose |
|---|---|
| **`form`** *(default)* | A grid of editable fields — the case described above. |
| **`nested_form`** | The form of another existing screen (`form_screen`), shown in the tab; `param_binds` pass the parent's values (usually its key) to that form's queries, and it is saved with the parent's **Save**. See [Nested tabs](./nested-tabs.md). |
| **`nested_table`** | A related-rows TableView embedded in the tab. Renders another screen's grid scoped to the parent's PK. See [Nested tabs](./nested-tabs.md). |

The visual builder shows the same tab strip for all three — switching to a `nested_form` or `nested_table` tab shows the target-screen picker and its `param_binds`.

---

## Per-tab actions \{#tab-actions\}

Each tab can carry its own action list — buttons shown inside the tab, set under **Tab settings → Tab actions** (**Add action**). Common patterns:

| Pattern | Why per-tab |
|---|---|
| A *Recompute* button on a calculations tab. | Triggers a stored procedure only when the user is looking at those fields. |
| A *Test webhook* button on a notification tab. | Only meaningful in that context. |
| A *Refresh from source* button on a sync tab. | Re-pulls data the tab displays. |

The action editor opens in the **Inspector** when you click an action's row — the Inspector shows one thing at a time (a field OR an action). Selecting a field clears the action selection and vice versa.

See [Actions and lifecycle](./actions-and-lifecycle.md) for the full action types.

---

## Dialog title

The dialog's title sits at the top of the modal when it opens. Set it in the Inspector when no field is picked, under **Dialog title**; blank falls back to the screen's `label` (*Falls back to the screen label*), then to `id`. Below it, **Events** lists the hooks wired on the screen, for information.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Field on a tab references a column that doesn't exist in the read query. | The dialog shows the field but the value is always blank, and saving sends no value for it. | Either add the column to the read query or remove the field from the tab. |
| `lookup_param_binds` references a field that's not on the same tab. | The bind resolves to NULL at submit. | Either move the source field onto the same tab or use a cross-tab binding (the engine reads the whole form state, but the inspector's Param dropdown only lists fields visible on the current tab). |
| `colspan = 3` on a 2-column grid. | The field overflows; layout breaks. | Cap `colspan` at the tab's `cols`. |
| Two fields with the same `name` on the same tab. | The save sends two values for the same column; the second wins. | Each field's `name` must be unique within the dialog. |
| `hide_on_add = true` AND `hide_on_edit = true`. | The tab never appears. | Either flip one off or drop the tab. |

---

## What's next

- [Conditional fields](./conditional-fields.md) — make a field appear / be required / be locked only under specific form conditions.
- [Actions and lifecycle](./actions-and-lifecycle.md) — wire on_load / on_save / on_cancel to extend the dialog's behaviour.
- [Nested tabs](./nested-tabs.md) — embed a child-record form or a related-rows grid.
