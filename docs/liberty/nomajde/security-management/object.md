---
title: An application, form or report
description: "Security Management → Start from an application, form or report in Nomajde: who can use one JD Edwards EnterpriseOne object, role by role — run, add, change, delete — with Everybody (*PUBLIC) first, full and pale boxes, and the Security Workbench lines written from the boxes."
keywords: [Nomajde, JD Edwards, JDE E1, Security Management, Security Workbench, F00950, application security, action security, "*PUBLIC", "*ALL", version, role]
---

# An application, form or report

In **Security Management**, the starting point **an application, form or report** answers one question: *who can use this object?* Pick an application, one of its forms or a report — and, if needed, one version: every role is listed with what it may do on it, **Everybody** (`*PUBLIC`) first, and a box changes it.

Open it from **Security Management**, then **Start from → an application, form or report**. The other starting points are described in the [Security Management overview](./overview.md).

---

## At a glance

<svg viewBox="0 0 1200 451" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njob-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njob-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njob-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njob-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="419" rx="14" fill="url(#njob-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security Management</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The security of a user or a role, edited where it is read.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START FROM</text>
  <rect x="326.48" y="79" width="80" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="366.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a user or role</text>
  <rect x="411.48" y="79" width="152" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="487.48" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">an application, form or report</text>
  <rect x="568.48" y="79" width="49" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="592.98" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a table</text>
  <rect x="622.48" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="644.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a menu</text>
  <rect x="671.48" y="79" width="40" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="691.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a UDO</text>
  <rect x="716.48" y="79" width="53" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="742.98" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a module</text>
  <rect x="252" y="104" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="118.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">P01012  Address Book  ▾</text>
  <text x="600" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <rect x="600" y="104" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="118.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">every version  ▾</text>
  <rect x="840" y="104" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="905" y="104" width="43" height="22" rx="5" fill="url(#njob-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="926.5" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(255,159,10,0.07)" stroke="rgba(255,159,10,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Who can use it</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">role by role: run, and for an application add, change, delete</text>
  <rect x="240" y="192" width="720" height="228" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="200" width="696" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="214.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Find a role…</text>
  <rect x="241" y="230" width="718" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="252" y="251" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="510" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">RUN</text>
  <g><rect x="503.5" y="247" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="510.0" y="256.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="560" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">ADD</text>
  <g><rect x="553.5" y="247" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="256.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="610" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">CHANGE</text>
  <g><rect x="603.5" y="247" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="256.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="660" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">DELETE</text>
  <g><rect x="653.5" y="247" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="660.0" y="256.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="690" y="251" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHY</text>
  <text x="252" y="283" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Everybody</text>
  <text x="302.84000000000003" y="283" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="252" y="292" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">what a role gets when it says nothing itself</text>
  <g><rect x="503.5" y="273" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="510.0" y="282.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g opacity="0.42"><rect x="553.5" y="273" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="282.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="273" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="282.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="273" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="282.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="283" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="241" y1="294" x2="959" y2="294" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="312" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="310.7" y="312" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <g><rect x="503.5" y="302" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="510.0" y="311.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="553.5" y="302" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="311.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="603.5" y="302" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="311.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="653.5" y="302" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="660.0" y="311.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="690" y="312" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="241" y1="323" x2="959" y2="323" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="341" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AR_MANAGER</text>
  <text x="310.7" y="341" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <g opacity="0.42"><rect x="503.5" y="331" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="510.0" y="340.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g opacity="0.42"><rect x="553.5" y="331" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="340.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="331" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="340.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="331" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="340.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="341" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">as everybody</text>
  <line x1="241" y1="352" x2="959" y2="352" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="353" width="3" height="28" fill="#fb923c"/>
  <text x="252" y="370" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="284.35" y="370" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Buyer</text>
  <g><rect x="503.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="510.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="553.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="370" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="241" y1="381" x2="959" y2="381" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="399" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="305.43" y="399" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Representative</text>
  <g opacity="0.42"><rect x="503.5" y="389" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="510.0" y="398.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g opacity="0.42"><rect x="553.5" y="389" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="398.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="389" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="398.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="389" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="398.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="399" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">as everybody</text>
  <line x1="241" y1="410" x2="959" y2="410" stroke="#1f2937" strokeWidth="1"/>
  <rect x="840" y="300" width="108" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.0" y="312.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Back to "as everybody"</text>
  <rect x="892" y="359" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="920.0" y="370.2" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changed</text>
  <text x="252" y="425" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">A full box is the role's own line; a pale one is what it gets from everybody. Ticking a pale box gives the role its own line.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start from</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an application, form or report</text>
  <line x1="200" y1="87.0" x2="451.48" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Everybody first</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#42;PUBLIC: the default answer</text>
  <line x1="200" y1="279.0" x2="252" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Full or pale box</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">own line · from everybody</text>
  <line x1="200" y1="367.0" x2="503" y2="337" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Version (optional)</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the answer for that version</text>
  <line x1="1000" y1="117.0" x2="750" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changing Everybody asks first</text>
  <line x1="1000" y1="177.0" x2="935" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Heading box</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sets every role listed</text>
  <line x1="1000" y1="247.0" x2="567" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Back to "as everybody"</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">removes the role's own lines</text>
  <line x1="1000" y1="317.0" x2="940" y2="309" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changed, not saved</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">written at Save</text>
  <line x1="1000" y1="377.0" x2="920" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
</svg>

---

## Pick the object \{#pick\}

| Field | Use |
|---|---|
| **Object** | The list the Security Workbench form offers: applications, forms and reports, each with its name and its type (`APPL`, `FORMS`, `UBE`) — the type can be filtered in the list. A table is picked from [a table](./table.md) instead: it is secured by columns and rows. |
| **Version** | Optional, **every version** by default. With a version, the answer is for that version — the line on the version decides before the line on the whole object — and the lines written are on that version. |

The page then shows one tab, **Who can use it**.

---

## Who can use it \{#who-can-use-it\}

One line per role, with a search (*Find a role…*):

| Column | Content |
|---|---|
| **Role** | **Everybody** `*PUBLIC` first — *what a role gets when it says nothing itself* — then every role with its description. |
| **Run**, **Add**, **Change**, **Delete** | What the role **ends up with** on the object. A report shows **Run** only: its three actions mean nothing. |
| **Why** | *its own line*, *as everybody*, or *its lines will be removed* when a reset is pending. |

A role is read as JD Edwards EnterpriseOne reads it: its own line on the object, else what everybody gets (`*PUBLIC` on the object, or a line on all objects, `*ALL`). Hovering a box gives the line that decides it.

### Full and pale boxes \{#boxes\}

- A **full** box is the role's own line on the object.
- A **pale** box is what the role gets from everybody — `*PUBLIC`, or a line on all objects.

Ticking a pale box gives the role its own line.

---

## Change what a role may do \{#change\}

- **Tick a box**: the role gets its own line — added, or changed when it already has one. The line is marked *changed* until it is saved.
- **The box in a right's heading** sets that right for every role listed — after a search, the roles found — never for *Everybody*, which is changed on its own line.
- **Back to "as everybody"** removes the role's own lines on the object: it then gets what everybody gets.
- **Save** writes the changes, role by role; **Discard** drops them. The count of roles changed is shown beside the buttons.
- **Changing Everybody asks first**: *Change it for everybody* — every user and role that says nothing itself is affected.

If a write fails, the page stops on that role, says how many lines were saved before it, and reads the object again.

### The lines written \{#lines-written\}

Each change goes through the Security Workbench screen's own queries — checked, stamped and captured in the change package as a change made in the [Security Workbench](../security-maintenance/security-workbench.md):

- **Run** writes the role's application security line (type **3**); a new one also allows install, as the form writes it.
- **Add**, **Change**, **Delete** write its action security line (type **1**). The three rights are written together: those not touched are written as they stand today.
- A new action line carries the **product code** of the object and leaves **OK**, **copy** and **scroll to end** allowed, as the Security Workbench form does — left blank, they would be read as forbidden.
- With a version picked, the lines are written on that version.

---

## Links to the other views \{#links\}

- A role's code is a link: it opens that role in the starting point **a user or role**, on its **Applications** tab.
- On that tab, an object named in a role's lines is a link back to this view.

---

## Access \{#access\}

The page is **Security Management** in the Nomajde menu; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The lines are written with the rights of the Security Workbench screen.

---

## Tips & best practices \{#tips\}

- **Start with Everybody**: a closed `*PUBLIC` line makes every other line an explicit opening, and the pale boxes show at once which roles depend on it.
- **Prefer a role to a version** unless the version really behaves differently: lines on versions multiply quickly.
- **Use the heading box after a search** to open or close a right for a family of roles in one go — *Everybody* is never caught by it.
- **Check the result** in [Simulate Security](../reviews/simulate-security.md), and keep it as a test case.
