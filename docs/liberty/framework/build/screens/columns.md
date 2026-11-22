---
title: Columns
description: "The columns of a Liberty Next screen, in the Screen Designer (Grid → Columns) — set each column's label, format, dictionary item, kind of field, default and filtering once; a list read from a table made in one step; both the grid and the dialog use them."
keywords: [Liberty Framework, columns, dictionary item, kind of field, format, lookup, list from a table, filter, hidden, key, default]
---

# Columns

**Grid → Columns**, in the [Screen Designer](./overview.md#designer), is where you set each column's settings: how the column renders in the grid, how it appears in the dialog form, whether it filters, whether it's required, whether it's part of the row's primary key. Set each column once — both surfaces (grid and dialog) use the same configuration.

---

## The columns at a glance

<svg viewBox="0 0 1320 610" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svcol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svcol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svcol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svcol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="572" rx="14" fill="url(#svcol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer · Customers</text>
  <text x="443.44000000000005" y="46" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">crm · customers</text>
  <rect x="1010" y="31" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="240.0" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="78" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="250.0" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="381.3" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="391.3" y="78" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="391.3" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="391.3" y="105" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <rect x="522.7" y="62" width="133.3" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="532.7" y="78" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.7" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.7" y="105" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">3 filter(s)</text>
  <rect x="664.0" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="78" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="674.0" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="674.0" y="105" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <rect x="805.3" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="815.3" y="78" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="815.3" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <rect x="946.7" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="956.7" y="78" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="956.7" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <rect x="240" y="124" width="167" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="125" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.5" y="138.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <line x1="299" y1="129" x2="299" y2="141" stroke="#334155" strokeWidth="1"/>
  <text x="323.5" y="138.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <line x1="348" y1="129" x2="348" y2="141" stroke="#334155" strokeWidth="1"/>
  <text x="377.5" y="138.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <rect x="240" y="158" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="173" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="173" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="264" y="186" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Customer</text>
  <rect x="426" y="168" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="179.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <rect x="395" y="168" width="27" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="408.5" y="179.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">key</text>
  <text x="484" y="180" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="200" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="215" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="215" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="264" y="228" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="426" y="210" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="221.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <text x="484" y="222" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="242" width="260" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250" y="257" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="257" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="264" y="270" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="426" y="252" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="263.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <rect x="382" y="252" width="40" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="402.0" y="263.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <text x="484" y="264" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="284" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="299" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="299" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="264" y="312" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Country</text>
  <rect x="426" y="294" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="305.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <text x="484" y="306" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="326" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="264" y="354" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Credit limit</text>
  <text x="484" y="348" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="368" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="383" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="383" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="264" y="396" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Updated at</text>
  <rect x="412" y="378" width="54" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="439.0" y="389.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">read only</text>
  <text x="484" y="390" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="412" width="140" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="310.0" y="426.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add a column</text>
  <rect x="516" y="158" width="564" height="376" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="530" y="178" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">≋  STATUS</text>
  <rect x="530" y="188" width="53" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="556.5" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="587" y="188" width="53" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="613.5" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <rect x="644" y="188" width="48" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="668.0" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <rect x="696" y="188" width="43" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="717.5" y="201.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="743" y="188" width="38" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="762.0" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <rect x="785" y="188" width="58" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="814.0" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <text x="530" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND OF FIELD</text>
  <rect x="530" y="232" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="247" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <text x="587.312" y="247" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">A list read from a table</text>
  <text x="1054" y="247" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="530" y="268" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What the field is: free text, a list, a yes / no box… Blank uses the dictionary's.</text>
  <text x="887.288" y="268" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">more</text>
  <text x="530" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST FROM A TABLE</text>
  <rect x="530" y="296" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="311" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">customer_status</text>
  <text x="1054" y="311" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="530" y="324" width="146" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="603.0" y="337.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ New list from a table…</text>
  <text x="530" y="356" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What the kind of field uses: the list, the numbering rule, the value that means yes.</text>
  <text x="895.856" y="356" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">more</text>
  <text x="530" y="378" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ANOTHER KIND WHEN</text>
  <rect x="530" y="384" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="555.0" y="396.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="530" y="420" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE ONLY</text>
  <rect x="530" y="431" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="547" y="440" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="530" y="464" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALUES GIVEN TO THE LIST</text>
  <rect x="530" y="470" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="555.0" y="482.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <line x1="240" y1="548" x2="1080" y2="548" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1018" y="558" width="62" height="22" rx="5" fill="url(#svcol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.0" y="572.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Save</text>
  <rect x="943" y="558" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="976.5" y="572.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Named by its label</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then application · id</text>
  <line x1="200" y1="47.0" x2="240" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marks worth seeing</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">key, filter, kind, read only…</text>
  <line x1="200" y1="157.0" x2="440" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a column</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag ⠿ to reorder, ✕ to remove</text>
  <line x1="200" y1="397.0" x2="310" y2="422" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six tabs</text>
  <text x="1135" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Rules holds the kind of field</text>
  <line x1="1125" y1="137.0" x2="717.5" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind of field</text>
  <text x="1135" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one choice in plain words</text>
  <line x1="1125" y1="227.0" x2="1050" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Field of that kind only</text>
  <text x="1135" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">named after the kind</text>
  <line x1="1125" y1="307.0" x2="1050" y2="305" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New list from a table…</text>
  <text x="1135" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">query + list in one step</text>
  <line x1="1125" y1="377.0" x2="746" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Short help · more</text>
  <text x="1135" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the long text behind more</text>
  <line x1="1125" y1="457.0" x2="903.856" y2="357" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
</svg>

The list shows one line per column with its marks — key, filter, its kind of field, read only…; a click on a line opens its settings beside the list, in six tabs. Each field carries one short sentence of help; **more** opens the longer explanation.

| Tab | Holds |
|---|---|
| **General** | **Column**, **Dictionary item**, **Key**, **Sensitive data**, **Related table** (the related one-to-one table the column is written to). |
| **Display** | **Label**, **Hidden**, **Format**, **Alignment**, **Width**, **Wrap long text**, **Parameters of the service in**, **On a phone**, **Width in the form**, **Link that runs**. |
| **Filter** | **Filter**, **Period shown at first**, **Narrowed by**, **Shown only when**. |
| **Rules** | **Kind of field**, the field that kind needs, **Another kind when** — and, for a list read from a table, **Code only**, **Values given to the list**, **Fills other fields**. |
| **Edit** | **Required**, **Required only when**, **Read only**, **Read only when**, **Read only when adding**, **Read only when changing**, **Align when saving**, **Align as the item in**. |
| **Defaults** | **Default value**, **Forced value when**, **Saved only when**. |

A list setting (a condition, a cascading filter) opens in the same panel; the breadcrumb at the top leads back to the column.

---

## Field by field

Every column carries the same settings. They are described below by purpose.

### Identity

| Field | Notes |
|---|---|
| **Column** | The result column these settings apply to. Case-insensitive match against the read query's columns. Normalised to UPPERCASE on save. |
| **Dictionary item** | The dictionary entry that gives the column its label, format and list. *(default)* uses the column's name as the key. |
| **Sensitive data** | Whether the column holds sensitive data, for the AI assistant: left out of what the assistant is given when the installation hides sensitive data. Three choices: *(default)* follows the column's dictionary entry, *yes* flags the column, *no* exempts it even when its entry is flagged. See [Sensitive data](../../ai-data-sent.md#sensitive). |

The dictionary is Liberty's shared vocabulary — one entry defines a field's label, format, kind of field and list once; every screen that has a column with that name inherits it. See [Concepts → Dictionary](../../dictionary.md).

### Display in the grid

| Field | Notes |
|---|---|
| **Label** | The title of the grid header and the label of the form field. Falls back to the dictionary's label, then to the column name. |
| **Hidden** | The column is hidden at first. The operator can show it from the grid's *Columns* menu. |
| **Wrap long text** | Long text wraps over several lines in the grid instead of being cut. |
| **Width** | Fixed column width in pixels. Blank fits the content. |
| **Alignment** | Left, right or centred. Blank follows the kind of value (numbers right, text left). |
| **Format** | How to render the value — date, number, yes / no, currency… Overrides the dictionary format. Drives both the grid cell and the form field. |
| **Long Text**, **Name = value list** | Two formats worth knowing. *Long Text* is typed in a multi-line box, in the record form and in the grid's edit mode, and keeps its line breaks. *Name = value list* shows a text of `name = value` lines as rows of fields in the record form (add, remove, **As text** / **As fields**); with **Parameters of the service in** — the column of the screen that names an endpoint — it becomes that endpoint's own form, one labelled field per parameter. |
| **On a phone** | Where the column goes on a card, when the grid is a list of cards: `title` puts it in the card's heading, `show` always gives it a line, `hide` never shows it. Blank: the grid decides. See [Phone and tablet](../../mobile.md#card-setting). |

### Kind of field \{#kind\}

**Kind of field** (Rules tab) says what the field is, in plain words, with its code beside it. *(default)* uses the dictionary's — the line under the field says which (*What the dictionary says for this item: ENUM (PERIOD_STATUS)*).

| Kind of field | Code | In the form | The field it needs |
|---|---|---|---|
| *A yes / no box* | `BOOLEAN` | A check box. | **Value that means yes** (`Y`, `1`, `true`…), and **Value for no**. |
| *A fixed list of values* | `ENUM` | A dropdown of the list's values. | **List of values** — an enum of the dictionary. |
| *A list read from a table* | `LOOKUP` | A searchable list of the table's rows. | **List from a table** — a lookup of the dictionary, or a new one made from here: see [below](#list-from-table). |
| *A number given automatically* | `SEQUENCE` | Filled by the server on insert. | **Numbering rule** — a sequence of the dictionary. |
| *The signed-in user* | `LOGIN` | Filled with the user's name. | — |
| *Today's date* | `SYSDATE` | Filled with today's date. | — |
| *A password (hidden, stored encrypted)* | `PASSWORD` | Encrypted on write. | — |
| *A database of this installation* | `POOL` | A dropdown of the pools. | **Only the databases of** — blank offers every pool. |
| *Free text; left empty, it takes its default value* | `DEFAULT` | Free text. | — (the **Default value** of the Defaults tab). |
| *Free text, whatever the dictionary says* | `DISABLED` | Free text: cancels the kind the dictionary gives, for this screen. | — |

Only the field the chosen kind needs is shown, under the name of what it is for that kind. The effect of each kind on writes is described in [Dictionary → Kinds of field](../../dictionary.md#rules).

A list read from a table adds three settings:

| Field | Notes |
|---|---|
| **Code only** | Shows the code alone in the grid, without its description. |
| **Values given to the list** | Values of the record that narrow the list's query — for instance the application of the row, to offer only that application's roles. See [Parameter binding](../queries/parameter-binding.md). |
| **Fills other fields** | When a line is picked, copies columns of that line into other fields of the record. |

**Another kind when** gives the field another kind — another list, another enum, a yes / no box — while another column has a given value. See [Form conditions](../../form-conditions.md).

### A list read from a table, in one step \{#list-from-table\}

When the list does not exist yet, **New list from a table…**, under **List from a table**, makes it without leaving the column. The *New lookup* window asks for:

| Field | Notes |
|---|---|
| **Table** | A table of the screen's database. |
| **Value column** | The code stored on the row. |
| **Label column** | The description shown to the user. |
| **Optional WHERE clause** | Written without the keyword. |
| **Query name**, **Id**, **Description** | Filled from the table; they can be changed. |
| **Generated SQL — editable** | The query, as it will be saved. |

**Save** adds the query to the application's list queries and the list to its dictionary — two new objects, nothing existing is changed —, reloads the configuration and picks the new list in the column.

### Edit

| Field | Notes |
|---|---|
| **Required** | The field is marked with an asterisk and **Save** stays blocked while it is empty. |
| **Read only** | The operator sees the value but cannot change it. |
| **Read only when adding** / **Read only when changing** | Read only only when a record is added, or only once it exists — the second one for keys that must not change. |
| **Required only when** / **Read only when** | Required or read only only while conditions on other fields hold. A required field blocks **Save** only while it is visible. |
| **Align when saving** | How the written value is padded, for codes stored right-aligned. Blank does as the dictionary says. |
| **Align as the item in** | The column naming the dictionary item whose alignment and width this value follows. |

### Defaults

| Field | Notes |
|---|---|
| **Default value** | The value a new record starts with. |
| **Forced value when** | A value set (and locked, unless **Locked** is unticked) while another column has a given value. |
| **Saved only when** | The column is saved only while the condition holds; otherwise it is saved empty. |

### Key

| Field | Notes |
|---|---|
| **Key** | This column identifies the record, alone or with the other key columns. Drives:<br/>– Excel-import update-vs-insert matching.<br/>– In add mode, a key column shows a plain input instead of its list (a new key is typed, not picked).<br/>– The `_put` query's `:NAME_ORIGINAL` binding (the CRUD Wizard's convention). |

A key is not locked automatically when a record is edited: tick **Read only when changing** (Edit tab) on the key columns that must not change once the record exists. Mark every column that uniquely identifies a record. Multi-column keys are supported — tick **Key** on each. When the screen's **Key columns** is empty (the usual case), the columns marked **Key** are used.

### Filtering

| Field | Notes |
|---|---|
| **Filter** | The column appears in the filters above the grid. The user picks a value to narrow the grid; on a column with a fixed list of values, several values at once, and a code typed beyond the list is accepted. A list read from a table keeps a single choice. A date column (`date`, `datetime`, `timestamp` format, or a date type in the database) filters by a [period](#period). |
| **Period shown at first** | On a date column with **Filter**, the period the screen opens on: today, yesterday, last 7 or 30 days, this or last month, this quarter, this or last year, last 12 months. Blank or *all*: no period, every row. The screen's first automatic run already applies it. |
| **Narrowed by** | Cascading filter — narrows this column's choices with another filter's value: **Filter** (the other filter) and **Matched on** (the column of this list compared with that filter's value). |
| **Shown only when** | In the grid, hides the column when a filter is set to a value outside the condition; in the form, shows the field only while the form's values match. |

The conditions are described on [Form conditions](../../form-conditions.md), with examples on [Conditional fields](./conditional-fields.md).

### A typical column

For a `STATUS` column on a customers screen, the settings usually are:

| Field | Value |
|---|---|
| **Column** | `STATUS` |
| **Dictionary item** | *(default)* — uses `STATUS` as the key |
| **Label**, **Format** | blank — inherited from the dictionary |
| **Kind of field** | *A fixed list of values* |
| **List of values** | `STATUS_CODES` (an enum of the dictionary) |
| **Default value** | `OPEN` |
| **Required** | ✓ |
| **Filter** | ✓ |

That renders a dropdown in the form (sourced from the `STATUS_CODES` enum), pre-fills new records with `OPEN`, requires a value, and adds a filter to the grid.

---

## Inheriting from the dictionary

The default behaviour — when most fields are blank — is to **inherit from the dictionary**. The chain:

| Column setting | Blank → taken from |
|---|---|
| **Label** | the entry's label, then the column name |
| **Format** | the entry's format, then the type of the value |
| **Kind of field** and its list | the entry's kind of field and its list |

This means a column named `USR_ID` on a screen automatically reads its label, format, kind of field and list from the dictionary entry `USR_ID` (or the one picked in **Dictionary item**). The screen overrides only when **this** screen needs different behaviour from the rest.

The column list is therefore mostly **empty** for well-dictionary'd installs — entries only appear when there's something to override.

---

## Filtering and cascading filters

When a column has **Filter** ticked, a chip for it appears in the grid's filter panel. The user picks a value, the grid re-runs the read query with that value bound to the matching `:placeholder` param. The query is responsible for accepting the bind.

### A period on a date column \{#period\}

On a date column, the filter panel shows a period instead of a single date: the same picker as the dashboards, with its presets (*Today*, *Yesterday*, *Last 7 days*, *Last 30 days*, *This month*, *Last month*, *This quarter*, *This year*, *Last year*, *Last 12 months*, *All dates*) and a two-month calendar for a custom range. The run sends the two bounds as `<COL>_from` and `<COL>_to`, and the server bounds the column itself — the read query needs no placeholder for them. A period ending on a day keeps all of that day's rows, times included.

A drill or a link that passes a date to a date column opens the screen on that one day.

**Cascading filters** narrow one filter's options based on another. The classic case: a *Role* dropdown that shows only roles for the currently-picked *Application*:

| Field | Value on `ROLE_ID` |
|---|---|
| **Kind of field** | *A list read from a table* |
| **List from a table** | `get_roles` |
| **Filter** | ✓ |
| **Narrowed by → Filter** | `APPS_ID` (the parent filter) |
| **Narrowed by → Matched on** | `APP_ID` (the column of the list's query that matches the parent filter's value) |

When the user picks an application, the role lookup re-runs with the application id bound — the user only sees that application's roles.

---

## Order of columns

The order of the column list = the display order in the grid. Columns the read query returns but that aren't listed here keep their discovery order and follow the hinted ones.

To reorder:

| Goal | Action |
|---|---|
| Move a column up / down. | Drag its row in the list (the drag handle is the left edge of the row). |
| Hide a column entirely. | Tick **Hidden**. The operator can still un-hide it from the grid's *Columns* menu. |
| Drop a column from both grid and dialog. | Remove it from the list (✕) AND make sure it's not on any dialog tab's fields. (Or alter the read query to not return it.) |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| **Dictionary item** `USR_ID` but no dictionary entry named `USR_ID`. | Label and format fall back to the column name verbatim. | Add the dictionary entry, or set **Label** and **Format** on the column. |
| *A list read from a table* but **List from a table** blank. | The dropdown is empty. | Pick a list, or make one with **New list from a table…**. |
| **Narrowed by** set but **Filter** not ticked. | The cascade does nothing — the source filter never fires. | Tick **Filter** AND set **Narrowed by**. |
| **Required** on a column the read query doesn't return. | The dialog saves with NULL; if the DB has a NOT NULL constraint, the write fails. | Add the column to the read query, or untick **Required**. |
| **Key** on a non-unique column. | Excel import treats duplicate values as updates of the same row. | Verify the key columns genuinely identify a row uniquely. |
| **Format** *currency* but the value is in cents (integer). | The grid renders `1,234.00` for `123456`. | Format expects the value in the unit you want displayed — divide by 100 in the query, or use a Python step before display. |

---

## What's next

- [Dialog builder](./dialog-builder.md) — fields you've configured here become drag-droppable cards on the canvas.
- [Conditional fields](./conditional-fields.md) — make a column appear / be required / be locked only under specific form conditions.
- [Concepts → Dictionary](../../dictionary.md) — the shared vocabulary that columns inherit from.
