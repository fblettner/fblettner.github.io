---
title: Services
description: "Logic → Services in Liberty Next: a service is a sequence of steps — queries, endpoint calls, plugin functions, conditions, loops — drawn as a flow and edited beside it; Run tries it with inputs and shows the answer and the steps that ran, Expose turns it into an API endpoint that a screen, a job, the assistant or an outside caller uses like any other."
keywords: [Liberty Next, services, shared actions, notification step, flow designer, low-code, steps, condition, loop, run, expose, API endpoint, composed service, orchestration]
---

# Services

A **service** composes several steps into one call: read a row, check it, call an endpoint, branch on the answer, write, answer. It is built by drawing — no code — and used two ways: a screen calls it from a button, or it is **exposed as an API endpoint** that a job, the assistant or an outside system calls like any other.

Access: **Liberty Next → Logic → Services**, for superusers. A screen calls a service with `call_action`; see [Actions and lifecycle](./screens/actions-and-lifecycle.md) for the actions of a screen.

---

## At a glance

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="432" rx="14" fill="url(#svd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Service</text>
  <text x="293" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">· Check the credit</text>
  <text x="425" y="44" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">check_credit</text>
  <rect x="1036" y="30" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1047.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <rect x="1062" y="30" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="220" y1="62" x2="1100" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="90" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="75" width="43" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="262.5" y="88.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Flow</text>
  <line x1="285" y1="79" x2="285" y2="91" stroke="#334155" strokeWidth="1"/>
  <text x="307.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">List</text>
  <rect x="240" y="104" width="530" height="290" rx="8" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <rect x="682" y="114" width="78" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="693" y="128" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <text x="721" y="127.5" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="749" y="128" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="254" y="135" width="168" height="26" rx="13.0" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="266" y="151.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="280" y="151.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <text x="317.79200000000003" y="151.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">customer, amount</text>
  <line x1="422" y1="148" x2="454" y2="148" stroke="#475569" strokeWidth="1"/>
  <circle cx="438" cy="148" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="438" y="151.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="454" y="123" width="158" height="50" rx="8" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="463" y="130" width="12" height="12" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="480" y="140" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY</text>
  <text x="464" y="155" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Read the customer</text>
  <text x="464" y="166" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <line x1="612" y1="148" x2="644" y2="148" stroke="#475569" strokeWidth="1"/>
  <circle cx="628" cy="148" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="628" y="151.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <line x1="246" y1="236" x2="266" y2="236" stroke="#475569" strokeWidth="1"/>
  <circle cx="256" cy="236" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="256" y="239.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="270" y="211" width="150" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="279" y="218" width="12" height="12" rx="3" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="296" y="228" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONDITION</text>
  <text x="280" y="243" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Over the limit?</text>
  <text x="280" y="254" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">amount &gt; LIMIT</text>
  <rect x="432" y="174" width="318" height="124" rx="8" fill="none" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="440" y="196" width="35" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="457.5" y="207.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">True</text>
  <line x1="486" y1="204" x2="510" y2="204" stroke="#475569" strokeWidth="1"/>
  <circle cx="498" cy="204" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="498" y="207.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="510" y="179" width="150" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="519" y="186" width="12" height="12" rx="3" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="536" y="196" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="520" y="211" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Refuse</text>
  <rect x="440" y="262" width="40" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="460.0" y="273.2" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">False</text>
  <line x1="486" y1="270" x2="510" y2="270" stroke="#475569" strokeWidth="1"/>
  <circle cx="498" cy="270" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="498" y="273.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="510" y="245" width="150" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="519" y="252" width="12" height="12" rx="3" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="536" y="262" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT</text>
  <text x="520" y="277" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Reserve</text>
  <text x="520" y="288" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">erp.reserve_credit</text>
  <line x1="420" y1="236" x2="432" y2="236" stroke="#475569" strokeWidth="1"/>
  <line x1="246" y1="352" x2="270" y2="352" stroke="#475569" strokeWidth="1"/>
  <circle cx="256" cy="352" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="256" y="355.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="270" y="339" width="140" height="26" rx="13.0" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="282" y="355.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="296" y="355.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Answer</text>
  <text x="339.7504" y="355.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">status</text>
  <rect x="786" y="74" width="294" height="320" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="800" y="94" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="872.96" y="94" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">›  Read the customer</text>
  <line x1="798" y1="104" x2="1068" y2="104" stroke="#1f2937" strokeWidth="1"/>
  <text x="800" y="120" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="800" y="125" width="266" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="138.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">run_query ▾</text>
  <text x="800" y="158" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="800" y="163" width="266" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="176.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm ▾</text>
  <text x="800" y="196" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="800" y="201" width="238" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="214.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customers_get ▾</text>
  <rect x="1042" y="201" width="24" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="214.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="800" y="232" width="55" height="19" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="827.5" y="245.0" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="867.32" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Prompt</text>
  <text x="800" y="266" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="800" y="271" width="266" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="284.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">customer</text>
  <text x="800" y="304" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STOP ON ERROR</text>
  <text x="936" y="304" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">KEEP THE RESULT</text>
  <rect x="800" y="311" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M802.5,316.5 L804.8,318.8 L808.8,314" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="817" y="320" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">enabled</text>
  <rect x="936" y="311" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M938.5,316.5 L940.8,318.8 L944.8,314" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="953" y="320" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="800" y="336" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Values passed</text>
  <rect x="800" y="343" width="62" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="356.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">ID ▾</text>
  <rect x="866" y="343" width="34" height="20" rx="5" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="883.0" y="356.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Fixed</text>
  <rect x="900" y="343" width="58" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="929.0" y="356.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Taken from</text>
  <rect x="962" y="343" width="104" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="970" y="356.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Input · Customer</text>
  <line x1="220" y1="406" x2="1100" y2="406" stroke="#1f2937" strokeWidth="1"/>
  <rect x="922" y="416" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="430.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="998" y="416" width="84" height="22" rx="5" fill="url(#svd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1040.0" y="430.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Flow or List</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same steps, two views</text>
  <line x1="200" y1="87.0" x2="242" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shows the service's inputs</text>
  <line x1="200" y1="145.0" x2="260" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + on a link</text>
  <text x="30" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">adds a step at that place</text>
  <line x1="200" y1="239.0" x2="252" y2="242" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A condition forks</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">True and False lanes</text>
  <line x1="200" y1="307.0" x2="440" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="356" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="371" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Answer</text>
  <text x="30" y="384" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the service returns</text>
  <line x1="200" y1="373.0" x2="280" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="1120" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The picked step</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edited beside the flow</text>
  <line x1="1120" y1="107.0" x2="1080" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Keep the result</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ticked once a later step reads it</text>
  <line x1="1120" y1="307.0" x2="1006" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="1120" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1130" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes and reloads</text>
  <line x1="1120" y1="409.0" x2="1082" y2="427" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
</svg>

---

## The list \{#list\}

<svg viewBox="0 0 1320 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="276" rx="14" fill="url(#svl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Services</text>
  <rect x="974" y="30" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1027.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="240" y="62" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="287.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New service</text>
  <text x="240" y="104" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Services built from steps — queries, endpoint calls, plugin functions, conditions, loops. Click a service to design its steps.</text>
  <rect x="240" y="116" width="840" height="62" rx="7" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="132" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="274" y="131" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="274" y="143" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Check the credit limit</text>
  <text x="274" y="155" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">4 step(s) · 2 input(s)</text>
  <text x="274" y="167" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">POST /api/http/studio/check_credit</text>
  <rect x="681" y="137.0" width="30" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="696.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="715" y="137.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="737.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Expose</text>
  <rect x="763" y="137.0" width="68" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="835" y="137.0" width="96" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find dependencies</text>
  <rect x="935" y="137.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="983" y="137.0" width="39" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.5" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="1026" y="137.0" width="44" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1048.0" y="150.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="240" y="184" width="840" height="50" rx="7" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="200" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="274" y="199" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">close_order</text>
  <text x="274" y="211" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Close an order</text>
  <text x="274" y="223" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 step(s) · 1 input(s)</text>
  <rect x="681" y="199.0" width="30" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="696.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="715" y="199.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="737.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Expose</text>
  <rect x="763" y="199.0" width="68" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="835" y="199.0" width="96" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find dependencies</text>
  <rect x="935" y="199.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="983" y="199.0" width="39" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.5" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="1026" y="199.0" width="44" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1048.0" y="212.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="240" y="240" width="840" height="40" rx="7" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="256" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="274" y="255" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">reset_password</text>
  <text x="274" y="267" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">1 step(s) · 1 input(s)</text>
  <rect x="681" y="250.0" width="30" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="696.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="715" y="250.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="737.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Expose</text>
  <rect x="763" y="250.0" width="68" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="835" y="250.0" width="96" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Find dependencies</text>
  <rect x="935" y="250.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="983" y="250.0" width="39" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.5" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="1026" y="250.0" width="44" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1048.0" y="263.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New service</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an id, then the designer</text>
  <line x1="200" y1="79.0" x2="240" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on the line</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the designer</text>
  <line x1="200" y1="149.0" x2="240" y2="149" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoints it serves</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listed once exposed</text>
  <line x1="200" y1="213.0" x2="272" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The buttons of a line</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run, expose, usages, rename…</text>
  <line x1="1120" y1="147.0" x2="1080" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
</svg>

Each line gives the service's identifier, its label, its number of steps and inputs and, once it is exposed, the endpoints it serves (`POST /api/http/<connector>/<endpoint>`). A click on the line opens its designer. On a line: **Run**, **Expose**, **Find usages**, **Find dependencies**, **Rename**, **Clone**, **Delete**.

- **New service** asks for its name — *Its name:*, *Close the period* —, makes its identifier from it (*Its technical id will be close_the_period.*) and opens the designer of the new, empty service.
- **Rename** and **Clone** ask for the new identifier; a rename also rewrites the screens that call the service.
- **Delete** asks for a confirmation: a screen that still calls the service then fails the integrity check — **Find usages** first.

---

## The flow \{#flow\}

The designer opens over the whole window, titled *Service ·* with the service's label, then its identifier in small, on the **Flow** view; **List** gives the same service as a form — label, description, inputs, then the steps one per line, with **Add action**. **Save** writes the service and reloads the configuration; **Cancel** with unsaved changes asks whether to save them, discard them or keep editing.

The flow reads left to right: **Start**, which shows the inputs; one card per step; **Answer**, which shows what the service returns. A **condition** forks into its **True** and **False** lanes; a **loop** or a **group** frames its own steps. The layout follows the structure of the service: nothing is placed by hand. A long flow continues on the next row, and the zoom (− / % / +) is kept on the device.

- **A click on a card** edits that step in the side panel, under the path *service › step*: its **Type**, its target — **Connector** and **Query** for a query (the pencil opens the query), the endpoint, the function or the service otherwise —, its **Id** and **Label**, **Stop on error**, **Keep the result**, and its **Values passed** — see [Values passed](#values). The bin of the card deletes the step.
- **The + on a link** opens the list of step kinds and adds the chosen one at that place.
- **With nothing picked**, the panel edits *The service*: **Label**, **Description**, **Inputs** and **Questions asked first** — see [Inputs and questions](#inputs).

| Step | Does |
|---|---|
| **Query** | Runs a query of a connector. |
| **Endpoint** | Calls an API endpoint. When the endpoint says where its rows are, the next steps read them by column name: `<step>.first_row.<COLUMN>`, `<step>.rows`. |
| **Function** | Calls a function of an application's plugin, picked in a list grouped by application and module — the same picker as a job's [Python step](../../nomaflow/steps.md#python). |
| **Service** | Calls another service. |
| **Condition** | Forks on a test. |
| **For each** | Repeats its steps for each row. |
| **Message**, **Notification** | Tells the user, or sends a notification rule — see [below](#notification). |
| **Answer** | Says what the service returns. |

### Inputs and questions \{#inputs\}

**Inputs** — **Add input** — are what the service receives from what calls it. Each input is a card:

| Field | Meaning |
|---|---|
| **Name** | What the steps read it by (`COMPANY`, read as `INPUT.COMPANY`). |
| **Label** | The name shown where the service is called (*Company*). |
| **Default value** | Used when the caller gives none: a value, or a built-in — the signed-in user, today… (`#LOGIN_USER#`, `#SYSDATE#`, `#NOW#`, `#CURRENT_TIME#`, `#LANGUAGE#`). |
| **What it is for** | A sentence on the input (*The company whose period is closed*). |

**Questions asked first** — **add** — are the fields the user fills in before the service runs, the same list of fields as the questions of a screen's button: a **Name** the steps read the answer by, a **Dictionary item** or a **Label**, a **Format**, **Required**, a **Default value**…

### Values passed \{#values\}

Under **Values passed**, each parameter of the step's target — the query, the endpoint, the function, the service called — receives a value, either **Fixed** (written there) or **Taken from**, picked in a list:

- the service's inputs (*Input · Company*) and the answers to its questions (*Answer · …*);
- what an earlier query, endpoint or function step returned: *first row of "Find the customer"*, completed by a column, or *every row of "…"*; when that step reads the query of a screen, each column of its first row is offered by itself (*EMAIL — first row of "Find the customer"*);
- the record, and the built-ins: the signed-in user, today.

A value picked replaces what the field held. Picking an earlier step's result ticks **Keep the result** on that step by itself. **+ a value to use when that one is empty** gives a fallback when the source is empty at run time. In the saved service, an input reads `INPUT.<name>` and an earlier step's result `<step>.first_row.<COLUMN>` or `<step>.rows`.

### The Notification step \{#notification\}

A **Notification** step sends one of the rules of [Logic → Notifications](../../nomaflow/notifications.md) whose trigger is *A screen action*: the rule says who receives the message and through which channels, the step says when.

| Field | Content |
|---|---|
| **Notification rule** | The rules triggered *by an action*, by label. A disabled rule is listed as *(disabled)* and the step sends nothing until it is enabled; a rule that does not exist, or has another trigger, is said too — the step would send nothing. With no such rule yet, the field says to create one first. |
| **Values of the message** | The values of the current record are sent by themselves. Each line adds what the message needs besides — a **name in the message** (a `{name}` of its subject, body or link) and its value or source: what the user typed (`INPUT.<name>`), the result of an earlier step. |


---

## Run \{#run\}

**Run** tries the service as it is saved: one field per input (its default as a placeholder), then **Run** in the dialog gives the result — *Done in N ms*, the **Answer** it would give as an endpoint (what it returns, with its messages), and the **Steps that ran**. A service without input runs as it is; a failure shows the error of the step that failed.

:::warning[The steps really run]
A step that writes, writes. Run a service that changes data on a test environment, or with inputs made for it.
:::

---

## Expose as an endpoint \{#expose\}

**Expose** creates an API endpoint served by the service. A screen, an action, a job, the assistant or an outside caller then calls it like any endpoint.

| Field | Meaning |
|---|---|
| **On the connector** | An API connector of the installation, or the Studio's own — `studio`, created on first use. |
| **Endpoint name** | The service's identifier by default. |
| **It changes data** | Tick it when a step writes: the assistant then asks before calling it. |

The service's inputs become the endpoint's parameters — the dialog lists them, *Its parameters: …*; an `INPUT.<name>` the steps read counts even when the service does not declare it. The connector proposed is the Studio's own when it exists, otherwise the first API connector of the installation. The dialog answers with the address and the permission: *Exposed: POST … — permission `api:<connector>:<endpoint>`*.

**The service runs with the endpoint's permission**: who may call the endpoint runs all its steps, which are not checked again one by one — a composed service is granted as a whole. The caller's row-level data scope still applies to every query. What the service returns is the answer; its messages come with it; a step that fails is the endpoint's error.

---

## Where a service is used \{#usage\}

**Find usages** lists the screens that call the service and the endpoints it serves; renaming it follows them. In the [Studio](../studio.md), a selected service lights the screens that call it. A service is carried in a [package](./packages.md) with the screens and endpoints that need it.

---

## Tips & best practices \{#tips\}

- Give each step a name that says what it holds (`customer`, `open_orders`): the next steps read it by that name.
- Put the checks first and the writes last: a condition that stops early leaves nothing half done.
- Expose a service when the same sequence is needed by a screen **and** by a job or an outside system: one definition, one permission.
- Cover an exposed service with a [test](./tests.md) case.

---

## Related

- [Overview and Studio](../studio.md) · [API endpoints](./api-endpoints.md) · [Tests](./tests.md)
- [Actions and lifecycle](./screens/actions-and-lifecycle.md) — the actions of a screen.
