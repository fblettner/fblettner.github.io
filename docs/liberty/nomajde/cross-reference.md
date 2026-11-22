---
title: Cross Reference
description: "The Nomajde Cross Reference page: one search over the JD Edwards EnterpriseOne specifications — applications, reports, data items, business views, tables, data structures, business functions, user defined objects — to see what an object holds and where it is used, with its last use, its event rules and its UDOs."
keywords: [Nomajde, JD Edwards, JDE E1, cross reference, where used, impact analysis, application, form, report, data item, business view, table, data structure, business function, event rules, UDO, user defined objects, object usage]
---

# Cross Reference

**Cross Reference**, right under **Data Explorer** in the Nomajde menu, answers the two questions every JD Edwards change starts with: **what is in this object**, and **where is it used**. One search box finds an application, a report, a data item, a business view, a table, a data structure, a business function or a user defined object; the page then opens on what the object holds, and a click on **Where used** switches to the other question.

The page reads the cross reference collected from the JD Edwards EnterpriseOne specifications — forms, report sections, event rules, views, tables, data structures, business functions, user defined objects — and the object usage kept over time. It is read-only: nothing is written to JD Edwards.

---

## At a glance

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xra-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xra-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xra-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="xra-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="410" rx="14" fill="url(#xra-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Cross reference</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">What is in a JD Edwards application or report, and where an item, a view or a table is used.</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="88" width="250" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="98" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌕ P01012</text>
  <rect x="246" y="128" width="60" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276.0" y="138.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Everything</text>
  <rect x="311" y="128" width="68" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="345.0" y="138.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications</text>
  <rect x="384" y="128" width="47" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="407.5" y="138.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Reports</text>
  <rect x="436" y="128" width="39" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="455.5" y="138.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="246" y="148" width="43" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <rect x="294" y="148" width="81" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="334.5" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Data structures</text>
  <rect x="380" y="148" width="55" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="407.5" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Functions</text>
  <rect x="440" y="148" width="34" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="457.0" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">UDOs</text>
  <text x="248" y="182" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <rect x="244" y="190" width="234" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="204.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="291.62" y="204.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book</text>
  <text x="472" y="204.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">6 form(s)</text>
  <rect x="244" y="216" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="230.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012BR</text>
  <text x="302.15999999999997" y="230.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Additional Info…</text>
  <text x="472" y="230.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">2 form(s)</text>
  <rect x="244" y="242" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="256.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012D</text>
  <text x="296.89" y="256.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Translations</text>
  <text x="472" y="256.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">2 form(s)</text>
  <rect x="244" y="268" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="282.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012SS</text>
  <text x="302.15999999999997" y="282.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Self Service - Update Addr…</text>
  <text x="472" y="282.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">1 form(s)</text>
  <text x="248" y="308" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DATA STRUCTURES</text>
  <rect x="244" y="316" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="330.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">D7000150</text>
  <text x="312" y="330.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">P01012 - Plug &amp; Play - 01</text>
  <text x="472" y="330.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">BSFN</text>
  <rect x="498" y="88" width="586" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="110" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="564" y="110" fill="#cbd5e1" fontSize="10.5" fontFamily="system-ui, sans-serif">Address Book</text>
  <text x="648" y="110" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">template T01012 · 6 form(s) · collected on 21/11/2026</text>
  <rect x="947" y="96" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1009.5" y="110.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Create its endpoints…</text>
  <rect x="510" y="122" width="174" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="597.0" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Last used 29/10/2026 · 3 user(s)</text>
  <rect x="690" y="122" width="98" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="739.0" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Refresh from JDE</text>
  <rect x="510.0" y="152" width="182.0" height="56" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="518.0" y="166" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">W01012A</text>
  <text x="518.0" y="178" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Revision</text>
  <text x="518.0" y="189" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">view V0101E</text>
  <text x="518.0" y="200" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">84 fields · 13 UDO(s)</text>
  <rect x="700.0" y="152" width="182.0" height="56" rx="7" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="708.0" y="166" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">W01012B</text>
  <text x="708.0" y="178" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Work With Addresses</text>
  <text x="708.0" y="189" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">view V0101E · entry point</text>
  <text x="708.0" y="200" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">19 grid columns · 18 UDO(s)</text>
  <rect x="890.0" y="152" width="182.0" height="56" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="898.0" y="166" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">W01012C</text>
  <text x="898.0" y="178" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Formatted Address</text>
  <text x="898.0" y="189" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">view V0101E</text>
  <text x="898.0" y="200" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">14 fields</text>
  <rect x="510" y="218" width="529" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="511" y="219" width="51" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="536.5" y="231.0" fill="#4a9eff" fontSize="7.4" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fields (3)</text>
  <line x1="563" y1="222" x2="563" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="604.0" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Grid columns (19)</text>
  <line x1="645" y1="222" x2="645" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="696.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Buttons and exits (16)</text>
  <line x1="748" y1="222" x2="748" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="785.0" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Everything (42)</text>
  <line x1="822" y1="222" x2="822" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="861.0" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Event rules (23)</text>
  <line x1="900" y1="222" x2="900" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="945.0" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Interconnection (2)</text>
  <line x1="990" y1="222" x2="990" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="1014.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">UDOs (18)</text>
  <text x="510" y="254" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">In grey: the form gives no text — JDE shows the data dictionary's title.</text>
  <rect x="510" y="264" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="520" y="278.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="1017" y="264" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="961" y="264" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="914" y="264" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.0" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="858" y="264" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="811" y="264" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.0" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="510" y="294" width="562" height="94" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="510" y="294" width="562" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="520" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DATA ITEM</text>
  <text x="600" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TEXT ON THE FORM</text>
  <text x="760" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TABLE</text>
  <text x="896" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">CONTROL</text>
  <text x="910" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">WHERE USED</text>
  <text x="520" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AT1</text>
  <text x="600" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Search Type</text>
  <text x="760" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="896" y="332.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">54</text>
  <text x="910" y="332.5" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">Where used</text>
  <line x1="511" y1="340" x2="1071" y2="340" stroke="#1f2937" strokeWidth="1"/>
  <text x="520" y="354.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ALPH</text>
  <text x="600" y="354.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Alpha Name</text>
  <text x="760" y="354.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="896" y="354.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">58</text>
  <text x="910" y="354.5" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">Where used</text>
  <line x1="511" y1="362" x2="1071" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <text x="520" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">DC</text>
  <text x="600" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Compressed Description</text>
  <text x="760" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="896" y="376.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">60</text>
  <text x="910" y="376.5" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">Where used</text>
  <line x1="511" y1="384" x2="1071" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One search</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, report, item, UDO…</text>
  <line x1="200" y1="113.0" x2="246" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">List a whole kind</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">first 300 by id, with the total</text>
  <line x1="200" y1="167.0" x2="246" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Results by kind</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its description</text>
  <line x1="200" y1="237.0" x2="244" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data structures</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and the functions that take them</text>
  <line x1="200" y1="357.0" x2="244" y2="329" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Create its endpoints…</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens Create from… on it</text>
  <line x1="1120" y1="57.0" x2="1054" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="104" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="119" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage and refresh</text>
  <text x="1130" y="132" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">who used it · read it again</text>
  <line x1="1120" y1="121.0" x2="724" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Forms as cards</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entry point, counts, UDOs</text>
  <line x1="1120" y1="197.0" x2="1070" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tabs of the form</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fields … event rules, UDOs</text>
  <line x1="1120" y1="267.0" x2="798" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where used</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">switches to the other question</text>
  <line x1="1120" y1="347.0" x2="1014" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
</svg>

---

## Search \{#search\}

Type part of a name, an identifier or a description; the examples under the search box start one in a click: `P01012`, `P4210`, `R42565`, `AN8`, `V0101E`, `F0101`, `F4211`, `D0100033`, `B4200310`, `F4211FSBeginDoc`, *address number*, *sales order*. The results are grouped by kind — **Applications**, **Reports**, **Data items**, **Business views**, **Tables**, **Data structures**, **Business functions**, **User defined objects** — each line with its description from the Object Librarian. A click opens the object on the right.

A user defined object is found by any part of its identifier, its name or its description; its line says its type and the application, form and version it sits on.

### List a whole kind \{#browse\}

The chips under the search box — **Everything**, **Applications**, **Reports**, **Views**, **Tables**, **Data structures**, **Functions**, **UDOs** — list every object of that kind in the left column, sorted by identifier, with the total: the first 300, then a line says how many there are. With a kind chosen, the search box becomes **Narrow the list…**: what is typed narrows that kind only — the identifiers that start with it, the titles that contain it. **Everything** returns to the search over all kinds. A UDO line shows its name, its identifier and its type.

---

## What is in it \{#content\}

| Object | Opens on |
|---|---|
| **Application** | Its forms as cards: identifier, title, business view, counts of fields, grid columns, buttons and exits, UDOs. A form the application calls from outside is tagged **entry point**. A form's tabs: **Fields**, **Grid columns**, **Buttons and exits**, **Everything**, **Event rules**, **Interconnection** (the data items a caller hands it) and **UDOs** (the user defined objects that sit on it, the service requests that run it, the pages and links that open it). |
| **Report** | Its sections as cards (kind, business view, counts), and in a section its **Fields**, **Labels**, **Data selection**, **Data sequencing** — in their rank, ascending or descending —, **Everything** and **Event rules**. |
| **Business view** | The tables it reads (the primary one first), its columns, its **Joins** — which two tables, the join type, the columns they are joined on. |
| **Table** | Who uses it, then its **Columns** (data item and SQL name, in order), its **Indexes** (primary, unique, their columns) and its **Triggers**. |
| **Data structure** | Its items in their order, and the business functions that take it. |
| **Business function object** | Its functions, each with its data structure and its module; **Where called** lists the objects whose event rules call a function, and where in each. |
| **User defined object** | What it is — type, system code, owner, status, who changed it and when — and the **objects it uses**, each line with **How** it uses it and **Where in the page**: see [User defined objects](#udo). The **Objects that carry it** list the pages, orchestrations or other UDOs that hold this one. |

A control the form gives no text to shows the data dictionary's title **in grey**: it is what JD Edwards displays. The **Event rules** tab lists what the rules of a form, a section or a function do — the business functions they call, the tables and views they read and write with the operations, the forms they open, the reports they run.

Every list is a grid of its own: search, filters, grouping, columns and export.

### User defined objects \{#udo\}

A user defined object opens on what it names, and each line leads on — to the application (on its form), the report, the table, the view, the data item or the other UDO.

| UDO type | What it uses |
|---|---|
| **Composite page** | The applications and reports its tiles open, the forms shown in its panes, the task of a task tile, the menu of a landing page, the watchlists, queries, personal forms and other pages it carries — each with where in the page. |
| **E1 page** | The applications and reports its code calls or names — for a page built with HTML and JavaScript as for a classic one. |
| **Orchestration** | Its steps — service requests, rules, cross references, white lists, other orchestrations, notifications — and its schedule. |
| **Service request** | The forms it runs (application, form, version), the tables and views its data requests read, the reports it launches, the orchestration a connector calls, the form a message links to. |
| **Notification** | Its orchestration, rule, watchlist and schedule, and the forms its links open. |
| **CafeOne layout**, **One View report** | The forms it shows, the forms its links open. |
| **Search**, **Process** | What it reads and the forms it opens; what a process depends on and the table it reads. |
| **Form extension** | The columns it adds: the data item and its table. |
| **Watchlist** | Its query. |
| **Query**, **Grid format**, **Personal form** | The application, form and version it sits on. |

A rule, a cross reference, a white list, a schedule and an image name no object, and the page says so; a logic extension is not read. When the content of a type has not been collected yet, the page says to run the UDO step of the cross-reference job.

In the other direction, a form's **UDOs** tab lists the UDOs that sit on it, the service requests that run it and the pages and links that show or open it; a table, a view and a data item have a **UDOs** tab too — the data requests and searches that read them, the form extensions that add them.

---

## Where is it used \{#where-used\}

**Where used**, on a line of a list, opens the data item, the view or the table on its usages.

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xrb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xrb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xrb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="xrb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="370" rx="14" fill="url(#xrb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Cross reference</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">What is in a JD Edwards application or report, and where an item, a view or a table is used.</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="88" width="848" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="98" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="289.5" y="112.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back to AT1</text>
  <text x="248" y="140" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="296" y="140" fill="#cbd5e1" fontSize="10.5" fontFamily="system-ui, sans-serif">Address Book Master</text>
  <text x="416" y="140" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Tables · collected on 21/11/2026</text>
  <rect x="972" y="126" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1022.0" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Refresh from JDE</text>
  <rect x="248" y="154" width="625" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="249" y="155" width="94" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="296.0" y="167.0" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications (104)</text>
  <line x1="344" y1="158" x2="344" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="381.0" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Reports (182)</text>
  <line x1="418" y1="158" x2="418" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="470.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Business views (253)</text>
  <line x1="523" y1="158" x2="523" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="569.0" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Event rules (806)</text>
  <line x1="615" y1="158" x2="615" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="640.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">UDOs (2)</text>
  <line x1="666" y1="158" x2="666" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="700.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns (95)</text>
  <line x1="735" y1="158" x2="735" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="769.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Indexes (15)</text>
  <line x1="804" y1="158" x2="804" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Triggers (1)</text>
  <rect x="248.0" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="258.0" y="203" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">104</text>
  <text x="258.0" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USED IN APPLICATION(S)</text>
  <rect x="414.4" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="424.4" y="203" fill="#4ade80" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">156</text>
  <text x="424.4" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORM(S)</text>
  <rect x="580.8" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="590.8" y="203" fill="#c084fc" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">197</text>
  <text x="590.8" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AS A FIELD</text>
  <rect x="747.2" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="757.2" y="203" fill="#c084fc" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">650</text>
  <text x="757.2" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AS A GRID COLUMN</text>
  <rect x="913.6" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="923.6" y="203" fill="#fb923c" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="923.6" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AS A LABEL</text>
  <rect x="250" y="229" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="267" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Only the customer's own objects (55 to 59)</text>
  <rect x="486.92" y="229" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="503.92" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Only the applications of the upgrade analysis</text>
  <rect x="248" y="248" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="262.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="1017" y="248" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="961" y="248" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="914" y="248" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.0" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="858" y="248" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="811" y="248" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.0" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="248" y="278" width="824" height="94" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="278" width="824" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">APPLICATION</text>
  <text x="368" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TITLE</text>
  <text x="774" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">PLACE(S)</text>
  <text x="864" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">FORM(S)</text>
  <text x="944" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">FIELD</text>
  <text x="258" y="316.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="368" y="316.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="774" y="316.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">80</text>
  <text x="864" y="316.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="944" y="316.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">41</text>
  <line x1="249" y1="324" x2="1071" y2="324" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="338.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0101SL</text>
  <text x="368" y="338.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book Long Search</text>
  <text x="774" y="338.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">27</text>
  <text x="864" y="338.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="944" y="338.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <line x1="249" y1="346" x2="1071" y2="346" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="360.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P03B305</text>
  <text x="368" y="360.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Credit Granting / Management</text>
  <text x="774" y="360.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">23</text>
  <text x="864" y="360.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="944" y="360.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">8</text>
  <line x1="249" y1="368" x2="1071" y2="368" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Back</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to where you were, same tab</text>
  <line x1="200" y1="113.0" x2="248" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sides of the answer</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applications, reports, views…</text>
  <line x1="200" y1="197.0" x2="248" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Narrow the list</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">own objects · upgrade analysis</text>
  <line x1="200" y1="307.0" x2="250" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A table's own tabs</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">columns, indexes, triggers</text>
  <line x1="1120" y1="137.0" x2="796" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The totals</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">places, forms, as field / column</text>
  <line x1="1120" y1="217.0" x2="1004" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ranked list</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens the application</text>
  <line x1="1120" y1="317.0" x2="1024" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
</svg>

| Part | Content |
|---|---|
| **Tabs** | One per kind of user: **Applications**, **Reports**, **Business views**, **Tables**, **Data structures**, **Event rules**, **UDOs** (the data requests, searches and form extensions that read or add the object) — and, for a table, its own **Columns**, **Indexes** and **Triggers**. |
| **Totals** | In how many applications, forms and places the object is used, and as what: a field, a grid column, a label. |
| **Only the customer's own objects (55 to 59)** | Keeps the objects of the customer's system codes. |
| **Only the applications of the upgrade analysis** | Keeps the objects the [upgrade analysis](./upgrade/analysis.md) holds: the impact view of an upgrade. |
| **The list** | The applications or reports ranked by places; a click opens one. |

**Back to …**, at the top, returns to where the search came from — same object, same form or section, same tab.

---

## Who uses it \{#usage\}

An application and a report say in their heading **Last used … · n user(s)**, or **Not used since …** — the first day the history knows. A click opens **Who uses it**: each user and version with their last use. The figures come from JD Edwards' object usage tracking, as collected over time: they reach further back than JD Edwards' own table, which is purged. Nothing is shown when no usage was ever collected for that JD Edwards.

---

## Actions \{#actions\}

| Button | Does |
|---|---|
| **Create its endpoints…** | On an application: opens [Create from…](./ais/create-from.md) of the AIS connector on it, to build the endpoints and the screen that read and save its records. |
| **Refresh from JDE** | Reads the object again from the JD Edwards specifications — a job of a few seconds that runs in a window on the page; the page then shows the new content without leaving the object. |

---

## Access \{#access\}

The page shows to the roles that hold its menu entry; the functions it reads need the permissions `plugin:nomajde.xref:*`. **Refresh from JDE** needs the right to run the job that reads one object again.

---

## Tips & best practices \{#tips\}

- Before changing a table or a business view, open it and read the **Applications** and **Reports** tabs with **Only the customer's own objects** ticked: that is the list of what to test.
- During an upgrade, tick **Only the applications of the upgrade analysis** to see what a change of Oracle reaches in the customer's code.
- Look at **Who uses it** before retrofitting a modified report: nobody may have run it for years.
- A form's **UDOs** tab lists what the users built on it — queries, grid formats, personal forms, form extensions, the pages and service requests that open it: what to check again when the form changes with a release.
- To review the user defined objects one by one, choose the **UDOs** chip: each line gives the type, and a word of the name narrows the list.

---

## Related

- [Upgrade analysis](./upgrade/analysis.md) — what to retrofit, in which order, with the UDOs to test again.
- [Create from…](./ais/create-from.md) — an endpoint or a screen from a JD Edwards application.
- [Performance](./monitoring/performance.md) — the business functions that cost the most, with who calls them.
