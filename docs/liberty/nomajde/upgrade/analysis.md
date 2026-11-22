---
title: Prepare for upgrade
description: "The Prepare for upgrade page of Nomajde: load the object list Oracle publishes for a JD Edwards EnterpriseOne release or update, run the analysis of a path code, and follow on one page what has to be retrofitted, how complex it is, how many days it takes, in which order, who does it and how far it is — with the dependencies, the user defined objects to test again, the objects left in other path codes and Oracle's list."
keywords: [Nomajde, JD Edwards, JDE E1, upgrade, retrofit, object list, release, update, UN9, path code, Object Librarian, custom objects, complexity, days, waves, dependencies, cross reference, UDO, user defined objects]
---

# Prepare for upgrade

**Prepare for upgrade**, right under **Platform synthesis** in the Nomajde menu, answers the first question of a JD Edwards EnterpriseOne upgrade or update: **what has to be retrofitted, and for how many days?** Nomajde reads the customer's objects of a path code, compares them with the list of objects Oracle changed in the target release, and gives each object a kind, a retrofit decision, a complexity and a number of days. Everything then sits on one page: the work and the progress in figures, where the work is (type, complexity, status, person), in which order to do it, and five tabs — **Overview**, **Objects**, **User defined objects**, **Other path codes**, **Oracle's list**. JD Edwards is only read; the analysis and the planning are kept in Nomajde's own database.

---

## At a glance

<svg viewBox="0 0 1320 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upa-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upa-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upa-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="424" rx="14" fill="url(#upa-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Prepare for upgrade</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PD920 against UN9 · analysed 2026-11-22 — What there is to retrofit for the release…</text>
  <rect x="1005" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="890" y="34" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="943.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run the analysis</text>
  <rect x="765" y="34" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="823.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Load Oracle's list</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#4a9eff" strokeWidth="1"/>
  <text x="248.0" y="107" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">86</text>
  <text x="248.0" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">TO RETROFIT</text>
  <text x="248.0" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">of 1,240 objects of yours</text>
  <rect x="360.9" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="368.8571428571429" y="107" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">142</text>
  <text x="368.8571428571429" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DAYS LEFT</text>
  <text x="368.8571428571429" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">of 160</text>
  <rect x="481.7" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="489.7142857142857" y="107" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <text x="489.7142857142857" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">% DONE</text>
  <text x="489.7142857142857" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">9 object(s) done</text>
  <rect x="602.6" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="610.5714285714286" y="107" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="610.5714285714286" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">READY TO START</text>
  <text x="610.5714285714286" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">nothing they wait for is left</text>
  <rect x="723.4" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="731.4285714285714" y="107" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="731.4285714285714" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NO USE RECORDED</text>
  <text x="731.4285714285714" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">30 day(s) to question first</text>
  <rect x="844.3" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="852.2857142857143" y="107" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="852.2857142857143" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">UDOS OF YOURS TO TEST</text>
  <text x="852.2857142857143" y="133" fill="#64748b" fontSize="5.3" fontFamily="system-ui, sans-serif">on 4 object(s) the upgrade touches</text>
  <rect x="965.1" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="973.1428571428571" y="107" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">23</text>
  <text x="973.1428571428571" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">IN OTHER PATH CODES ONLY</text>
  <text x="973.1428571428571" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">to promote or to delete</text>
  <rect x="240" y="152" width="456" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="153" width="53" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.5" y="165.0" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Overview</text>
  <line x1="295" y1="156" x2="295" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="336.0" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Objects  1,240</text>
  <line x1="377" y1="156" x2="377" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="443.0" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">User defined objects  214</text>
  <line x1="509" y1="156" x2="509" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="563.5" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Other path codes  23</text>
  <line x1="618" y1="156" x2="618" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="657.0" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle's list</text>
  <rect x="240" y="182" width="840" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="196" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROGRESS</text>
  <rect x="252" y="202" width="816" height="6" rx="3" fill="#c084fc"/>
  <rect x="252" y="202" width="750.7" height="6" rx="3" fill="#4a9eff"/>
  <rect x="252" y="202" width="49.0" height="6" rx="3" fill="#4ade80"/>
  <rect x="252" y="211" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="265" y="219" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">10 d done (9)</text>
  <rect x="338.88" y="211" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="351.88" y="219" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">142 d left (77)</text>
  <rect x="435.28" y="211" width="9" height="9" rx="2" fill="#c084fc"/>
  <text x="448.28" y="219" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">8 d dropped (3)</text>
  <text x="242" y="240" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHERE THE WORK IS</text>
  <rect x="240" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BY TYPE OF OBJECT</text>
  <text x="250" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="318" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <rect x="318" y="279" width="4.0" height="6" rx="3" fill="#4ade80"/>
  <text x="434.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">18 · 54 d</text>
  <text x="250" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="318" y="297" width="33.3" height="6" rx="3" fill="#4a9eff"/>
  <rect x="318" y="297" width="2.3" height="6" rx="3" fill="#4ade80"/>
  <text x="434.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">15 · 45 d</text>
  <text x="250" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">BSFN</text>
  <rect x="318" y="315" width="15.6" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">21 · 21 d</text>
  <rect x="452.0" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BY COMPLEXITY</text>
  <text x="462.0" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Hard</text>
  <rect x="530.0" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <rect x="530.0" y="279" width="2.4" height="6" rx="3" fill="#4ade80"/>
  <text x="646.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">33 · 99 d</text>
  <text x="462.0" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Medium</text>
  <rect x="530.0" y="297" width="8.5" height="6" rx="3" fill="#4a9eff"/>
  <text x="646.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">21 · 21 d</text>
  <text x="462.0" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Easy</text>
  <rect x="530.0" y="315" width="6.5" height="6" rx="3" fill="#4a9eff"/>
  <rect x="530.0" y="315" width="0.6" height="6" rx="3" fill="#4ade80"/>
  <text x="646.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">32 · 16 d</text>
  <rect x="664.0" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BY STATUS</text>
  <text x="674.0" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">To do</text>
  <rect x="742.0" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <text x="858.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">70 · 118 d</text>
  <text x="674.0" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">In progress</text>
  <rect x="742.0" y="297" width="4.7" height="6" rx="3" fill="#4a9eff"/>
  <text x="858.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">7 · 14 d</text>
  <text x="674.0" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Done</text>
  <rect x="742.0" y="315" width="3.4" height="6" rx="3" fill="#4a9eff"/>
  <rect x="742.0" y="315" width="3.4" height="6" rx="3" fill="#4ade80"/>
  <text x="858.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 · 10 d</text>
  <rect x="876.0" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BY PERSON</text>
  <text x="886.0" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Not assigned</text>
  <rect x="954.0" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <text x="1070.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">52 · 88 d</text>
  <text x="886.0" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">jdoe</text>
  <rect x="954.0" y="297" width="15.5" height="6" rx="3" fill="#4a9eff"/>
  <rect x="954.0" y="297" width="3.1" height="6" rx="3" fill="#4ade80"/>
  <text x="1070.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 · 34 d</text>
  <text x="886.0" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">asmith</text>
  <rect x="954.0" y="315" width="9.1" height="6" rx="3" fill="#4a9eff"/>
  <rect x="954.0" y="315" width="1.4" height="6" rx="3" fill="#4ade80"/>
  <text x="1070.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 · 20 d</text>
  <rect x="240" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">IN WHICH ORDER</text>
  <text x="250" y="378" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Wave 1</text>
  <rect x="318" y="373" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="378" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">38 · 62 d</text>
  <text x="250" y="396" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Wave 2</text>
  <rect x="318" y="391" width="33.5" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="396" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">30 · 52 d</text>
  <text x="250" y="414" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Wave 3</text>
  <rect x="318" y="409" width="18.1" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="414" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">18 · 28 d</text>
  <rect x="452.0" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">START WITH</text>
  <text x="462.0" y="378" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">D4200310</text>
  <text x="509.68" y="378" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Sales Order DS</text>
  <text x="646.0" y="378" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">7 wait for it · 0.5 d</text>
  <text x="462.0" y="395" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">B5500101</text>
  <text x="509.68" y="395" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Credit Check</text>
  <text x="646.0" y="395" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">3 wait for it · 1 d</text>
  <text x="462.0" y="412" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">F550101</text>
  <text x="504.72" y="412" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Customer Ext.</text>
  <text x="646.0" y="412" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">2 wait for it · 0.5 d</text>
  <rect x="664.0" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NO USE RECORDED</text>
  <text x="674.0" y="378" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">R5503B</text>
  <text x="711.76" y="378" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Statement Print</text>
  <text x="858.0" y="378" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">UBE · 3 d</text>
  <text x="674.0" y="395" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">P550401</text>
  <text x="716.72" y="395" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Supplier Rating</text>
  <text x="858.0" y="395" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">APPL · 3 d</text>
  <text x="674.0" y="412" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">R554201</text>
  <text x="716.72" y="412" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Sales Extract</text>
  <text x="858.0" y="412" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">UBE · 3 d</text>
  <rect x="876.0" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER DEFINED OBJECTS</text>
  <text x="886.0" y="378" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Query</text>
  <text x="1070.0" y="378" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">4 yours</text>
  <text x="886.0" y="395" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Grid format</text>
  <text x="1070.0" y="395" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">3 yours</text>
  <text x="886.0" y="412" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">delivered by Oracle</text>
  <text x="1070.0" y="412" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">205</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The figures</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens the list, filtered</text>
  <line x1="200" y1="113.0" x2="240" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one analysis, five views</text>
  <line x1="200" y1="167.0" x2="240" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where the work is</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a bar filters the Objects tab</text>
  <line x1="200" y1="289.0" x2="240" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Waves</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">wave 1 waits for nothing</text>
  <line x1="200" y1="397.0" x2="250" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The two jobs</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each opens with its values filled</text>
  <line x1="1120" y1="47.0" x2="943.5" y2="34" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDOs of yours</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to test again after the upgrade</text>
  <line x1="1120" y1="127.0" x2="935.1428571428571" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start with</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ready, the most awaited first</text>
  <line x1="1120" y1="317.0" x2="554.0" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="390" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No use recorded</text>
  <text x="1130" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to question before retrofitting</text>
  <line x1="1120" y1="407.0" x2="858.0" y2="394" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
</svg>

---

## The page \{#page\}

The heading names the path code, the list it is compared with and the date of the analysis. When several path codes were analysed, a list next to the buttons switches from one to the other.

| Button | Does |
|---|---|
| **Load Oracle's list** | Opens the [job that loads Oracle's object list](#load). |
| **Run the analysis** | Opens the [analysis job](#build), the path code and the list already filled in. |
| **Read again** | Reads the page again — after a run, or after a colleague changed the planning. |

Each button shows only to the users who may run its job. Before the first analysis, the page says so and points to the two steps.

### The figures \{#figures\}

Seven figures sit above the tabs; a click on one opens the list it counts.

| Figure | Counts |
|---|---|
| **to retrofit** | The objects Oracle's list makes the customer retrofit, out of all the customer's objects of the path code. |
| **days left** | The days of the objects still to do, out of the days of the whole work. |
| **% done** | The share of the days done, and the number of objects done. |
| **ready to start** | The objects not yet done whose dependencies are all done or dropped: nothing they wait for is left. |
| **no use recorded** | The applications and reports to retrofit that object usage tracking and the submitted jobs show unused, with the days they represent. A dash when no usage is known for the analysis. |
| **UDOs of yours to test** | The customer's user defined objects that sit on, show, open, run or read an object the upgrade touches. |
| **in other path codes only** | The customer's objects found in another path code but not in this one. |

A status **Done** counts as done; **Dropped** takes the object out of the work — its days show apart on the progress bar.

---

## Overview \{#overview\}

| Part | Content |
|---|---|
| **Progress** | The days done, left and dropped on one bar, with the number of objects of each. |
| **Where the work is** | The objects and days **By type of object**, **By complexity**, **By status**, **By person**. Each bar shows in green what is done; a click on a bar opens the **Objects** tab filtered on it. |
| **In which order** | The waves. An object waits for the objects it uses that are to retrofit too; wave 1 waits for nothing, wave 2 only for wave 1, and so on. Objects that wait for each other go together in the same wave. A click on a wave filters the objects. |
| **Start with** | The objects ready now, the ones the most other objects wait for first. |
| **No use recorded** | The applications and reports to retrofit with no use recorded, the largest first: to question before retrofitting them. |
| **User defined objects** | The customer's UDOs to test again, by type, and the number delivered by Oracle; a line opens the [User defined objects](#udos) tab. |

A line of **Start with** or **No use recorded** opens the [object window](#object).

The waves need the links between the customer's objects. When none is known, **In which order** says so: collect the cross reference in Nomasx-1, then run the analysis again.

---

## Objects \{#objects\}

<svg viewBox="0 0 1320 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="384" rx="14" fill="url(#upb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Prepare for upgrade</text>
  <rect x="240" y="60" width="456" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Overview</text>
  <rect x="296" y="61" width="80" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="336.0" y="73.0" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Objects  1,240</text>
  <line x1="377" y1="64" x2="377" y2="76" stroke="#334155" strokeWidth="1"/>
  <text x="443.0" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">User defined objects  214</text>
  <line x1="509" y1="64" x2="509" y2="76" stroke="#334155" strokeWidth="1"/>
  <text x="563.5" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Other path codes  23</text>
  <line x1="618" y1="64" x2="618" y2="76" stroke="#334155" strokeWidth="1"/>
  <text x="657.0" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle's list</text>
  <text x="242" y="112" fill="#94a3b8" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECTS (86)</text>
  <rect x="320" y="100" width="67" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="353.5" y="111.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">To retrofit</text>
  <rect x="393" y="100" width="40" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="413.0" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Ready</text>
  <rect x="439" y="100" width="85" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="481.5" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">No use recorded</text>
  <rect x="530" y="100" width="71" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="565.5" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Not assigned</text>
  <rect x="607" y="100" width="31" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="622.5" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">All</text>
  <rect x="240" y="126" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="140.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="1025" y="126" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="969" y="126" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="994.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="922" y="126" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="943.0" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="866" y="126" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="891.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="819" y="126" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="840.0" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="158" width="840" height="230" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="158" width="840" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">OBJECT</text>
  <text x="358" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="548" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="600" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">KIND</text>
  <text x="670" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">COMPLEXITY</text>
  <text x="780" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">DAYS</text>
  <text x="830" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">WAVE</text>
  <text x="844" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="934" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ASSIGNED TO</text>
  <text x="250" y="197" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="197" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="358" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="548" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APPL</text>
  <text x="600" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modified</text>
  <text x="670" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="197" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="197" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <rect x="844" y="186" width="39" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="863.5" y="196.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">To do</text>
  <text x="934" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jdoe</text>
  <line x1="241" y1="204" x2="1079" y2="204" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="264" y="219" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="358" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales Order Entry Master</text>
  <text x="548" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BSFN</text>
  <text x="600" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modified</text>
  <text x="670" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Medium</text>
  <text x="780" y="219" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="830" y="219" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <rect x="844" y="208" width="64" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="876.0" y="218.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">In progress</text>
  <text x="934" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">asmith</text>
  <line x1="241" y1="226" x2="1079" y2="226" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="226" width="838" height="92" fill="rgba(255,255,255,0.02)"/>
  <text x="280.0" y="240" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WAITS FOR (1)</text>
  <text x="280.0" y="253" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">D4200310</text>
  <text x="350.0" y="253" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">DSTR · Sales Order Master BSFN DS</text>
  <rect x="530.0" y="244" width="37" height="12" rx="6.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="548.5" y="253.2" fill="#fb923c" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">To do</text>
  <text x="700.0" y="240" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WAIT FOR IT (2)</text>
  <text x="700.0" y="253" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="770.0" y="253" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">APPL · Sales Order Entry</text>
  <rect x="950.0" y="244" width="59" height="12" rx="6.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="979.5" y="253.2" fill="#4a9eff" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">In progress</text>
  <text x="700.0" y="266" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="770.0" y="266" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">UBE · Invoice Print</text>
  <rect x="950.0" y="257" width="44" height="12" rx="6.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="972.0" y="266.2" fill="#fb923c" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">To test</text>
  <text x="280.0" y="284" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USES (2)</text>
  <text x="280.0" y="297" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">D4200310</text>
  <text x="350.0" y="297" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">DSTR · Sales Order Master BSFN DS</text>
  <text x="280.0" y="310" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="350.0" y="310" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">TBLE · Sales Order Detail File</text>
  <text x="700.0" y="284" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USED BY (2)</text>
  <text x="700.0" y="297" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="770.0" y="297" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">APPL · Sales Order Entry</text>
  <text x="700.0" y="310" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="770.0" y="310" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">UBE · Invoice Print</text>
  <line x1="241" y1="318" x2="1079" y2="318" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="333" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="333" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="358" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="548" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">UBE</text>
  <text x="600" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modified</text>
  <text x="670" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="333" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="333" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="844" y="322" width="47" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="867.5" y="332.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">To test</text>
  <text x="934" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jdoe</text>
  <line x1="241" y1="340" x2="1079" y2="340" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="355" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="355" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="358" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales Order Entry</text>
  <text x="548" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APPL</text>
  <text x="600" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modified</text>
  <text x="670" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="355" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="355" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="844" y="344" width="64" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="876.0" y="354.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">In progress</text>
  <text x="934" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">asmith</text>
  <line x1="241" y1="362" x2="1079" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="377" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="377" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">R554201</text>
  <text x="358" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales Extract</text>
  <text x="548" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">UBE</text>
  <text x="600" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Copied</text>
  <text x="670" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="377" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="377" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <rect x="844" y="366" width="34" height="14" rx="7.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="861.0" y="376.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Done</text>
  <text x="934" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">asmith</text>
  <line x1="241" y1="384" x2="1079" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Which objects</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to retrofit · ready · no use…</text>
  <line x1="200" y1="147.0" x2="330" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row opens on its links</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">› shows what it depends on</text>
  <line x1="200" y1="217.0" x2="252" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each link opens the object</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with its type and status</text>
  <line x1="200" y1="307.0" x2="282" y2="253" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">carries the four lists of links</text>
  <line x1="1120" y1="137.0" x2="1052.5" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Wave and status</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the order and the progress</text>
  <line x1="1120" y1="227.0" x2="844" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="1120" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a row</text>
  <text x="1130" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the object window</text>
  <line x1="1120" y1="377.0" x2="1020" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
</svg>

The **Objects** tab is the working list, in the shared grid: search, filters, grouping, columns, saved views and export. The chips above it choose the objects shown:

| Chip | Keeps |
|---|---|
| **To retrofit** | The objects to retrofit (the default). |
| **Ready** | The objects ready to start. |
| **No use recorded** | The applications and reports to retrofit, still to do, with no use recorded. |
| **Not assigned** | The objects to retrofit, still to do, assigned to no one. |
| **All** | Every customer object of the path code, retrofit or not. |

A filter set from the overview shows as a chip of its own, with **✕** to clear it.

| Columns | Content |
|---|---|
| **Object**, **Description**, **Type**, **Kind** | The object as the Object Librarian knows it, and its [kind](#rules). |
| **Complexity**, **Days**, **Wave** | The result of the analysis and the wave of the object. |
| **Status**, **Assigned to**, **Module**, **Finish** | The planning. |
| **Waits for**, **Blocks**, **Uses**, **Used by** | The names of the objects it waits for, of those that wait for it, of those it uses and of those that use it. |
| **Oracle changed it**, **Last used**, **UDOs** | The date of the object — or of its original — in Oracle's list, its last known use, the number of user defined objects on it. |

**›**, at the start of a row, opens it on its dependencies: **Waits for**, **Wait for it**, **Uses** and **Used by**, each object with its type, its description and, when it is to retrofit, its status. A click on a name opens that object. The four lists are columns of the grid, so the export carries them.

### The object window \{#object\}

A click on a row opens the object in a window, over the list.

<svg viewBox="0 0 1200 496" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="454" rx="12" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="322" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">— Sales Order Entry</text>
  <rect x="460" y="35" width="64" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="492.0" y="45.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">In progress</text>
  <line x1="261" y1="60" x2="939" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="280" y="80" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="430" y="80" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL · Modified · changed by jdoe 2026-03-12</text>
  <text x="280" y="97" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO RETROFIT</text>
  <text x="430" y="97" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Hard · 3 d · Wave 3 · Oracle changed it on 2026-06-30</text>
  <text x="280" y="114" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST USED</text>
  <text x="430" y="114" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 · 57 user(s)</text>
  <text x="280" y="131" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WAITS FOR</text>
  <text x="430" y="131" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="280" y="148" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WAIT FOR IT</text>
  <text x="430" y="148" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">nothing</text>
  <text x="280" y="165" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USES</text>
  <text x="430" y="165" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="482.15999999999997" y="165" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="280" y="182" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USED BY</text>
  <text x="430" y="182" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">nothing</text>
  <text x="280" y="199" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER DEFINED OBJECTS ON IT</text>
  <text x="430" y="199" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Open orders (QUERY, JDOE) · Late lines (FORMAT, ASMITH)</text>
  <text x="280" y="224" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLANNING</text>
  <text x="280.0" y="238" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <rect x="280.0" y="243" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="256.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">In progress ▾</text>
  <text x="606.0" y="238" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ASSIGNED TO</text>
  <rect x="606.0" y="243" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="256.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="280.0" y="274" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">START</text>
  <rect x="280.0" y="279" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="292.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-16</text>
  <text x="606.0" y="274" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FINISH</text>
  <rect x="606.0" y="279" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="292.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-27</text>
  <text x="280.0" y="310" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="280.0" y="315" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="328.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">42</text>
  <text x="280.0" y="346" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPLEXITY (YOURS)</text>
  <rect x="280.0" y="351" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="364.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">the analysis' own ▾</text>
  <text x="606.0" y="346" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DAYS (YOURS)</text>
  <rect x="606.0" y="351" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="364.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="280" y="382" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOTE</text>
  <rect x="280" y="387" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="400.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Price rules moved to the new form</text>
  <text x="280" y="420" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Your complexity and days are applied by the next analysis.</text>
  <line x1="261" y1="432" x2="939" y2="432" stroke="#1f2937" strokeWidth="1"/>
  <rect x="878" y="440" width="42" height="22" rx="5" fill="url(#upc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="899.0" y="454.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="823" y="440" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="846.5" y="454.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="980" y="30" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status pill</text>
  <text x="990" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">To do · In progress · To test · Done…</text>
  <line x1="980" y1="47.0" x2="526" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="20" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Its links</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens that object here</text>
  <line x1="220" y1="137.0" x2="276" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="20" y="190" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDOs on it</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name, type, creator</text>
  <line x1="220" y1="207.0" x2="276" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="980" y="230" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planning</text>
  <text x="990" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">status, person, dates, module, note</text>
  <line x1="980" y1="247.0" x2="920" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="980" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Your complexity and days</text>
  <text x="990" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applied by the next analysis</text>
  <line x1="980" y1="337.0" x2="920" y2="361" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="980" y="430" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="990" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">needs the right to change the plan</text>
  <line x1="980" y1="447.0" x2="920" y2="451" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
</svg>

| Part | Content |
|---|---|
| **What it is** | The type, the kind, the original of a copy, who changed it last and when. |
| **To retrofit** / **No retrofit** | The complexity, the days, the wave, the date Oracle changed it. |
| **Last used** | The last use and the number of users — or *no use recorded*. |
| **Waits for**, **Wait for it**, **Uses**, **Used by** | Links: a click opens that object in the same window. |
| **User defined objects on it** | The UDOs on the object: name, type and, when not delivered by Oracle, the user who created it. |
| **Planning** | **Status** (To do, In progress, To test, Done, Dropped), **Assigned to**, **Start**, **Finish**, **Module**, **Complexity (yours)**, **Days (yours)**, **Note**. |

**Save** writes the planning; the page is then read again. The planning survives every new analysis. A complexity typed in **Complexity (yours)** replaces the computed one and days typed in **Days (yours)** replace the computed days — both are applied by the next analysis. A user without the right to change the planning sees the fields greyed, with a line that says so.

---

## User defined objects \{#udos\}

The **User defined objects** tab lists the UDOs — queries, grid formats, watchlists, personal forms, form extensions, E1 pages, composite pages, One View reports, CafeOne layouts, orchestrations, service requests, notifications… — that sit on, show, open, run or read an object the upgrade touches: one of the customer's objects of the analysis, or a standard object Oracle changes in the release.

| Chip | Keeps |
|---|---|
| **Yours** | The UDOs the customer created (the default). |
| **On your objects** | The UDOs on one of the customer's objects of the analysis, whoever created them. |
| **All** | Every UDO listed, those delivered by Oracle included. |

| Columns | Content |
|---|---|
| **Why** | **Updated by Oracle**, or **Your object** (custom, copied or modified). |
| **Object**, **Type**, **Form**, **Version** | Where the UDO sits. |
| **How** | Sits on it, shows it, opens it, runs it, reads it, writes it, names it in its code. |
| **UDO type**, **Name**, **UDO** | The UDO itself and its identifier. |
| **Created by**, **Owner**, **Status** | The user in the UDO's identifier — `JDE` for one Oracle delivers —, its owner, its status (**Shared** for a shared UDO). |
| **Oracle changed it** | The date of the object in Oracle's list. |

A click on a row opens the object it sits on, when that object is in the analysis. The list is the shared grid: search, filters and export to hand the test campaign over.

---

## Other path codes \{#other-path-codes\}

The **Other path codes** tab lists the customer's objects found in another path code but not in the one analysed: work that never reached it, to promote or to delete before the upgrade. Columns: **Object**, **Description**, **Type**, **Found in**, **Merge flag**, **What to do**.

---

## Oracle's list \{#oracle-list\}

The **Oracle's list** tab shows the objects Oracle changes, as loaded from its file. One chip per loaded list, with its number of objects; the list of the analysis is chosen first. Columns: **Object**, **Version**, **Description**, **System code**, **Changed on**, **Yours** — the kind of the object when it is in the customer's analysis — and **As written in the file**. A click on one of the customer's objects opens its window.

---

## The two steps \{#steps\}

### 1. Load Oracle's object list \{#load\}

**Load Oracle's list** opens the job that takes the Excel file Oracle publishes for a release or an update — columns *Object*, *Version*, *Description*, *System Code*, *Date* — and stores it under the name given in **Name of the list (UN9)**. Loading a list again under the same name replaces it. The loaded lists show in the [Oracle's list](#oracle-list) tab.

Load two lists when the platform already runs an update: the target one (`UN9`) and the one in place (`UN2`).

### 2. Run the analysis \{#build\}

**Run the analysis** opens the job that reads JD Edwards and writes the result, with the path code and the list of the analysis already filled in.

| Parameter | Default | Meaning |
|---|---|---|
| **Path code the upgrade starts from** | `PD920` | The path code whose objects are analysed. |
| **Object list to compare with (its name; blank = none)** | blank | The target list. Without one, no object is marked as changed by Oracle. |
| **Object list the customer already runs** | blank | Optional. With it, only what Oracle changed **after** that list counts. |
| **Central objects schema, when not the pool's (PD920)** | blank | The schema of the central objects when it differs from the one of the connection. |
| **JDE of nomasx1 to read: usage kept, cross reference, UDOs (blank: the only one)** | blank | The JD Edwards whose usage history, cross reference and user defined objects are read, when Nomasx-1 collects several. |

The run collects, for the path code: the objects added or changed by the customer in the Object Librarian, the original of each copy, what is really used (object usage tracking and the history of submitted jobs), and the cross reference between the customer's objects. It can be run again at any time: the planning typed on the page is kept.

The run also reads what Nomasx-1 collects for the same JD Edwards, when it does:

- **the links between the customer's objects** — event rules calling a business function, reading or writing a table or a view, opening another application's form, launching a report; a view's tables; a function's or a form's data structure. JD Edwards' own cross reference is often not built: without these links, **Waits for**, **Uses**, **Used by** and the waves stay empty;
- **the usage kept over time** — the latest use known by JD Edwards' tracking, by the submitted jobs and by the history Nomasx-1 keeps, which reaches further back than JD Edwards' purged table;
- **the user defined objects** that sit on, show, open, run or read an object the upgrade touches (see [User defined objects](#udos)).

These need the cross reference and its UDO step collected first in Nomasx-1; run the analysis again to take them.

---

## How an object is judged \{#rules\}

| Kind | When | Retrofit |
|---|---|---|
| **Audit Trail** | An audit table of the database audit. | No — complexity `Configuration`, 0 day. |
| **Custom** | An object created by the customer, with no JD Edwards original. | No — `Retrofit not needed`. |
| **Copied** | A copy of a standard object: its original is found by the application identifier the copy kept. | Yes when Oracle changed **the original** in the list. |
| **Modified** | A standard object changed by the customer. | Yes when Oracle changed it in the list. |

An object Oracle did not change is `Not updated`: nothing to retrofit. For the others, the complexity and the days follow the object type:

| Object type | Complexity | Days |
|---|---|---|
| Applications, reports | `Hard` | 3 |
| Business functions | `Medium` | 1 |
| Everything else | `Easy` | 0.5 |

---

## Summaries \{#summaries\}

The [Data Explorer](../data-explorer.md) model **Upgrade analysis** gives the totals, with four saved analyses: *Retrofit by complexity and object type*, *Days of retrofit by complexity and object type*, *Days of retrofit by assignee and module*, *The customer's objects by kind*. The Nomajde [Overview](../home.md) leads here from its *Prepare for upgrade* group.

---

## Access \{#access\}

The page shows to the roles that hold its menu entry, with the permissions `page:nomajde:upgrade` and `plugin:nomajde.upgrade_view:*`. Saving the planning needs `sql:nomajde:jde_upg_object_put`; the two buttons need the `job:` permission of their job. The connection used to read JD Edwards needs read access to the Object Librarian tables of the central objects.

---

## Tips & best practices \{#tips\}

- Load the list **already in place** as well: without it every object Oracle ever touched counts, and the estimate is too high.
- Plan by wave: start with **Ready**, the objects of **Start with** first — the most other objects wait for them.
- Look at **No use recorded** before estimating: a modified report nobody has run for three years is a decision to take, not three days to plan. Set it to **Dropped** once decided.
- The days are a first estimate by object type; correct them in **Days (yours)** for the objects the team knows.
- Before the tests, export the **User defined objects** tab on **Yours**: each line is a screen to check again after the upgrade.
- Collect the cross reference in Nomasx-1 before running the analysis: the waves, **Waits for** and the UDOs depend on it.
- Export the **Objects** tab to share the plan: the dependencies travel as columns.
- The AI assistant knows the procedure: ask it to *prepare an upgrade* and it runs the two jobs and reads the result with you. It also knows the tab, the filter and the object open on the page: *Which objects can be started now?* — see [AI assistant](../ai-assistant.md).

---

## Related

- [Jobs](../jobs.md) — running a job from the Nomajde menu.
- [Non-regression tests](../tests.md) — check that JD Edwards still behaves the same once the upgrade is done.
- [Cross Reference](../cross-reference.md) — where an object is used, with **Only the applications of the upgrade analysis**.
