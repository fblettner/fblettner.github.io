---
title: Security simulation
description: "Security Maintenance → Security simulation in Nomajde: what a JD Edwards EnterpriseOne user, role or *PUBLIC may run, add, change and delete on the applications and reports of a module, a system code or a list of objects, the rule that decides each right, and a what-if (roles added or taken away, rules tried) that is never written to JD Edwards."
keywords: [Nomajde, JD Edwards, JDE E1, security simulation, Security Workbench, F00950, application security, action security, what-if, "*PUBLIC", "*ALL", role sequence, test cases]
---

# Security simulation

**Security Maintenance → Security simulation** answers the question the Security Workbench cannot answer at a glance: *what would this person be allowed to do?* A JD Edwards EnterpriseOne security grows line by line — on users, on roles, on `*PUBLIC`, on one object or on `*ALL` — and the result is hard to read from the lines themselves. The page evaluates them the way JD Edwards does and gives, for each application and report, what may be **run, added, changed and deleted**, with the rule that decides. A **what-if** tries roles and rules before anyone writes them.

Nothing on the page writes to JD Edwards. The test cases are kept in Nomajde's own database.

The page has four tabs:

| Tab | What it is for |
|---|---|
| **Simulate** | A user, a role or `*PUBLIC` on a module, a system code or a list of objects; the what-if. This page. |
| **Secure a module** | The [Security Workbench lines that secure a whole module](./secure-a-module.md) for a role, proposed and never written. |
| **Consistency** | The [Security Workbench read for what does not add up](./workbench-consistency.md): twelve checks, each finding with what to do. |
| **Test cases** | [Expectations replayed against the security](./security-test-cases.md) after every change, with five samples to adapt. |

---

## At a glance

<svg viewBox="0 0 1200 530" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njss-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njss-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njss-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njss-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="494" rx="14" fill="url(#njss-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security simulation</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What a user would be allowed, before it is written — and the cases that check it stays so.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simulate</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A user, a module, a what-if</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Secure a module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A whole module for a role</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Consistency</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Lines that serve nothing or contradict</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Test cases</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Expectations replayed against the security · 7</text>
  <rect x="240" y="126" width="720" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">USER, ROLE OR &#42;PUBLIC</text>
  <rect x="250" y="145" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH ▾</text>
  <text x="410" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="410" y="145" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="159.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="540" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OR ONE SYSTEM CODE</text>
  <rect x="540" y="145" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="159.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="670" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OR OBJECTS (COMMA SEPARATED)</text>
  <rect x="670" y="145" width="185" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">P4210, P4310, P4106, R42565</text>
  <rect x="865" y="145" width="85" height="22" rx="5" fill="url(#njss-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="907.5" y="159.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Simulate</text>
  <rect x="240" y="178" width="720" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="192" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT IF… (NOTHING IS WRITTEN)</text>
  <text x="250" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLES ADDED</text>
  <rect x="250" y="213" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276.5" y="225.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BUYER ×</text>
  <text x="600" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLES TAKEN AWAY</text>
  <rect x="600" y="213" width="330" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="225.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">…</text>
  <text x="250" y="244" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Rules tried</text>
  <rect x="340" y="233" width="69" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="374.5" y="244.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add a rule</text>
  <rect x="240.0" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="278" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="250.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECTS</text>
  <text x="250.0" y="299" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">JSMITH · 2 roles</text>
  <rect x="421.5" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="278" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="431.5" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CAN RUN</text>
  <text x="431.5" y="299" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">before: 2</text>
  <rect x="603.0" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="278" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="613.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLOSED</text>
  <text x="613.0" y="299" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">before: 2</text>
  <rect x="784.5" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="278" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="794.5" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGED BY THE WHAT-IF</text>
  <rect x="240" y="308" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="306" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="418" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="454" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="510" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="564" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGE</text>
  <text x="620" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELETE</text>
  <text x="684" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN DECIDED BY</text>
  <text x="824" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT CHANGES</text>
  <rect x="240" y="336" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="306" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="418" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="454" y="339.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="470.0" y="350.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="510" y="339.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="350.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="564" y="339.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="350.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="620" y="339.0" width="27" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="633.5" y="350.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NO</text>
  <text x="684" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALESORDER on P4210</text>
  <text x="824" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="362" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="306" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Purchase Orders</text>
  <text x="418" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="454" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="470.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="510" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="564" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="620" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="636.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <text x="684" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER on &#42;ALL</text>
  <text x="824" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">run: no → yes</text>
  <rect x="240" y="388" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4106</text>
  <text x="306" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Advanced Price</text>
  <text x="418" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="454" y="391.0" width="27" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="467.5" y="402.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NO</text>
  <rect x="510" y="391.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="402.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="564" y="391.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="402.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="620" y="391.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="636.0" y="402.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <text x="684" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC on P4106</text>
  <text x="824" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="414" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="306" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoice Print</text>
  <text x="418" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="454" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="470.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="510" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="564" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="620" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="636.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <text x="684" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">no rule</text>
  <text x="824" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="444" width="720" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="458" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SAVE AS A TEST CASE</text>
  <rect x="250" y="466" width="220" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="479.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">name of the case</text>
  <rect x="478" y="466" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="536.5" y="479.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Save as a test case</text>
  <text x="250" y="496" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">How it is decided — JD Edwards allows what no rule forbids…</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a user, a role or &#42;PUBLIC</text>
  <line x1="200" y1="157.0" x2="250" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What-if</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">roles added / taken away, rules</text>
  <line x1="200" y1="217.0" x2="250" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before and after</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">figures with the what-if</text>
  <line x1="200" y1="307.0" x2="250" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four rights per object</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run · add · change · delete</text>
  <line x1="200" y1="397.0" x2="510" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save as a test case</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">answers become expectations</text>
  <line x1="200" y1="467.0" x2="250" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Module, code or objects</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one of the three</text>
  <line x1="1000" y1="157.0" x2="820" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="1000" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The rule that decides</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or “no rule”: allowed</text>
  <line x1="1000" y1="397.0" x2="780" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="1000" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What changes</text>
  <text x="1010" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">marked by the what-if</text>
  <line x1="1000" y1="477.0" x2="920" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
</svg>

---

## Simulate \{#simulate\}

### Who \{#who\}

**User, role or \*PUBLIC** lists the users and the roles of JD Edwards (a role is marked *(role)*), and `*PUBLIC`.

| Choice | What is evaluated |
|---|---|
| A **user** | The user's own lines, then the lines of every role the user holds today — assignments already effective and not expired — then `*PUBLIC`. This is what the user gets when signing on with `*ALL`, the default sign-on role that combines all the roles assigned to them. |
| A **role** | The role's own lines, then `*PUBLIC`. |
| **\*PUBLIC** | The `*PUBLIC` lines alone: what anybody gets that no other line overrides. |

### What \{#what\}

Fill one of three fields; **Simulate** reads the security for them.

| Field | Content |
|---|---|
| **Module** | A licence component as Nomasx-1 defines it (*Settings → Licences → JD Edwards → System codes*), listed by name with its system codes and the number of applications and reports: every object of those system codes, and the objects reclassified into the module. Without these settings, a line says so and a system code is picked instead. |
| **or one system code** | One system code, with its description and how many applications and reports it holds. Picking a module clears the system code, and the other way round. |
| **or objects (comma separated)** | Named objects, for example `P4210, R42565`. When filled, they take precedence over the module and the system code. |

Only the interactive applications and the reports of the Object Librarian are listed. Beyond 5,000 objects the list is cut and a banner asks to narrow it.

### The answer \{#answer\}

Figures above the list: **objects** (with who and how many roles were read), **can run**, **closed**, and with a what-if **changed by the what-if**; under *can run* and *closed*, *before: n* gives the figure without the what-if.

| Column | Content |
|---|---|
| **Object**, **Description**, **System**, **Type** | The application (`APPL`) or report (`UBE`) and its system code. |
| **Run**, **Add**, **Change**, **Delete** | *yes* or **NO** for each right. Hovering a value shows the rule that decides that right. |
| **Run decided by** | The line that decides the right to run, as *who on what* — `SALESORDER on P4210`, `BUYER on *ALL` — or *no rule*. |
| **What changes** | With a what-if only: the rights that differ, as `run: no → yes`. |

The grid has the usual search, filters, columns and **Export**.

---

## How it is decided \{#rule\}

Under the list, **How it is decided** restates the rule the page applies:

- JD Edwards **allows what no rule forbids**: an object no line names is allowed (*no rule*).
- The **user's own lines** come first, then the **roles'**, from the **highest sequence** first, then **`*PUBLIC`**. The first level that says something about a right decides it.
- At one level, the **most precise line wins**: a line on the object before a line on `*ALL`, a line on a form or a version before a line on the whole object.

---

## What-if \{#what-if\}

The **What if… (nothing is written)** panel tries a change before it is made:

| Field | Use |
|---|---|
| **Roles added** | Roles the user would hold in addition, picked one at a time; each appears as a chip, **×** takes it back. |
| **Roles taken away** | Roles the user would no longer hold. |
| **Rules tried** | **Add a rule** adds a line: *for* (user, role or `*PUBLIC`), *object* (`*ALL` when left empty), *right* (run, add, change, delete, or all four), *allow* or *deny*. **Remove** takes it away. |

**Simulate** then gives the answer as it would be: the figures show *before: n*, and the **What changes** column marks each right that moves. Nothing is written to JD Edwards: the roles and the rules tried stay on the page.

---

## Save as a test case \{#save\}

Under an answer, **Save as a test case** with a name keeps it as a [test case](./security-test-cases.md): every object and every right becomes an expectation — four per object. A case of the same name is replaced.

The expectations are taken from **the security as it is**, not from the what-if: a what-if is a hypothesis, not a fact to keep. Once the change is made in the Security Workbench, simulate again and save.

---

## Opening the page on someone \{#link\}

The page reads its address: `…/app/nomajde/secsim?who=JSMITH&sy=42` opens it on user `JSMITH` and system code 42 and simulates at once; `&objects=P4210,P0411` names objects instead of a system code. A link of this kind fits in a ticket or a mail asking *"may this person do this?"*.

---

## Access \{#access\}

The page is in the **Security Maintenance** folder of the Nomajde menu. The predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The connection used to read JD Edwards needs read access to the Security Workbench (`F00950`), the profiles (`F0092`), the roles and their sequence (`F00926`), the role assignments (`F95921`) and the Object Librarian (`F9860`). The modules come from the licence settings of Nomasx-1; without them, the page works by system code or by objects.

---

## Tips & best practices \{#tips\}

- **Simulate before writing.** A role about to be given, a `*PUBLIC` line about to be closed: the what-if shows what moves, object by object, before the Security Workbench is touched.
- **Read *Run decided by*** when an answer surprises: the line that decides is named, so the fix goes to the right user, role or `*ALL` line.
- **Check the role sequence** when a user holds roles that disagree: the role with the highest sequence is read first.
- **Save the answer as a test case** once the security is right, and replay it after every change: [Test cases](./security-test-cases.md).
- **Run [Consistency](./workbench-consistency.md)** first on a security inherited from years of changes: lines for nobody or that say nothing new make every simulation harder to read.
