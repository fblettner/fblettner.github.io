---
title: API endpoints
description: "The endpoints of an API connector in Liberty Next: the editor drawn as four stages (what it is, inputs, the call, the answer), parameters that say what they expect, Create from… and Refresh from the server, endpoints that change data, error and warning fields, rows a screen can read, endpoints served by a function or by a service, groups, permissions and the safety of the values."
keywords: [Liberty Next, API connector, endpoint, REST, parameters, Create from, generator, changes data, error fields, rows, served by a function, served by a service, permissions, api_run]
---

# API endpoints

An **endpoint** is one named call of an API connector: *submit this report*, *read these customers*, *create an order*. Once declared it is used everywhere without a line of code — as the source of a [screen](./screens/api-screens.md), in a screen action, a [service](./services.md), a job step, a [test](./tests.md), by the AI assistant, or by an outside caller — and each endpoint has **its own permission**.

Access: **Liberty Next → Data → Connectors**, an API connector, stage card **Endpoints**.

---

## At a glance

<svg viewBox="0 0 1320 576" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="epe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="544" rx="14" fill="url(#epe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="35" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="45.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTION</text>
  <line x1="367" y1="42" x2="378" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="379" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="386" y="35" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="406" y="45.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTICATION</text>
  <line x1="510" y1="42" x2="521" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="522" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="529" y="35" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="549" y="45.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONMENTS</text>
  <line x1="653" y1="42" x2="664" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="665" y="30" width="130" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="672" y="35" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="692" y="45.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <text x="755.416" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12</text>
  <line x1="796" y1="42" x2="807" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="808" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="815" y="35" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="835" y="45.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <line x1="939" y1="42" x2="950" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="951" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="958" y="35" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="978" y="45.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <rect x="236" y="66" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="286.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add endpoint</text>
  <rect x="342" y="66" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="392.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Create from…</text>
  <rect x="448" y="66" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="512.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Check 2 generated</text>
  <rect x="582" y="66" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="632.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">› 3 generators</text>
  <rect x="236" y="96" width="848" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="111.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="236" y="128" width="848" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">›</text>
  <rect x="264" y="135" width="29" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="278.5" y="146.5" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <text x="305" y="147" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customers_list</text>
  <text x="399.8" y="147" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">· Customers</text>
  <text x="1042" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⤢</text>
  <text x="1064" y="147" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="236" y="164" width="848" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="183" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="264" y="171" width="35" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="281.5" y="182.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POST</text>
  <text x="311" y="183" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">order_create</text>
  <text x="393.4" y="183" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">· Create an order</text>
  <rect x="489.08" y="172" width="71" height="15" rx="7.5" fill="none" stroke="#fb923c" strokeWidth="1"/>
  <text x="524.5799999999999" y="183" fill="#fb923c" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">changes data</text>
  <text x="1042" y="183" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⤢</text>
  <text x="1064" y="183" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="246" y="202" width="240" height="300" rx="8" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1" strokeDasharray="1 5"/>
  <rect x="404" y="210" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="441" y="224" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–  100%  +</text>
  <rect x="260" y="238" width="200" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="269" y="247" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="290" y="258" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="270" y="276" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Create an order</text>
  <line x1="360" y1="287" x2="360" y2="299" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="260" y="300" width="200" height="48" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="269" y="309" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="290" y="320" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INPUTS</text>
  <text x="270" y="338" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 parameter(s)</text>
  <line x1="360" y1="349" x2="360" y2="361" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="260" y="362" width="200" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="269" y="371" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="290" y="382" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE CALL</text>
  <text x="270" y="400" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">POST /orders</text>
  <line x1="360" y1="411" x2="360" y2="423" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="260" y="424" width="200" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="269" y="433" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="290" y="444" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE ANSWER</text>
  <text x="270" y="462" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">the whole answer</text>
  <rect x="500" y="202" width="574" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="222" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">PARAMETERS — declare &#123;&#123;placeholder&#125;&#125; variables used in URL / headers / body</text>
  <line x1="512" y1="230" x2="1062" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <rect x="512" y="238" width="550" height="166" rx="6" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="522" y="255" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="536" y="255" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="591.12" y="255" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="1048" y="255" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <text x="524" y="276" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <rect x="524" y="282" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="533" y="295.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="792.0" y="276" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="792.0" y="282" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="801.0" y="295.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="524" y="314" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT VALUE</text>
  <rect x="524" y="320" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="792.0" y="314" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXAMPLE</text>
  <rect x="792.0" y="320" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="801.0" y="333.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">00001</text>
  <text x="524" y="352" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELP — WHAT TO PUT IN IT</text>
  <rect x="524" y="358" width="526" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="533" y="371.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">The customer number, as in the customer list.</text>
  <rect x="524" y="387" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M526.5,392.5 L528.8,394.8 L532.8,390" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="541" y="396" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Required</text>
  <text x="644" y="396" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Allowed values (separated by commas): —</text>
  <rect x="512" y="412" width="550" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="429" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="536" y="429" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">CURRENCY</text>
  <text x="591.12" y="429" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Currency</text>
  <text x="1034" y="429" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">= EUR</text>
  <text x="1048" y="429" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="512" y="444" width="550" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="461" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="536" y="461" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">LINES</text>
  <text x="573.45" y="461" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lines (JSON)</text>
  <text x="1048" y="461" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="512" y="478" width="97" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="560.5" y="492.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add parameter</text>
  <rect x="236" y="512" width="848" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="531" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">›</text>
  <rect x="264" y="519" width="29" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="278.5" y="530.5" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">ACT</text>
  <text x="305" y="531" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">order_check</text>
  <text x="381.2" y="531" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">· Check an order</text>
  <text x="1042" y="531" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⤢</text>
  <text x="1064" y="531" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector stages, folded</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Endpoints picked</text>
  <line x1="200" y1="43.0" x2="236" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sorted and searchable</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">method, name, label, tag</text>
  <line x1="200" y1="127.0" x2="264" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four stages</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the picked one's fields beside</text>
  <line x1="200" y1="317.0" x2="260" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="502" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="517" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ACT · FN</text>
  <text x="30" y="530" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">served by a service / a function</text>
  <line x1="200" y1="519.0" x2="276" y2="527" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="56" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Create from…</text>
  <text x="1130" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">written from the server</text>
  <line x1="1120" y1="73.0" x2="392" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changes data</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the assistant asks first</text>
  <line x1="1120" y1="167.0" x2="560.0799999999999" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Over the whole window</text>
  <text x="1130" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">same editor, same draft</text>
  <line x1="1120" y1="213.0" x2="1046" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="320" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A parameter, opened</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">help and example for the form</text>
  <line x1="1120" y1="337.0" x2="1044" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="430" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A parameter is a line</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name, label, default</text>
  <line x1="1120" y1="447.0" x2="1062" y2="425" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
</svg>

---

## The list \{#list\}

The endpoints are listed in alphabetical order, with a search box once there are more than five (name, label, path, method, description, group). Endpoints that share a **group** sit under its heading, which folds and shows their number.

Each line starts with a pill — the HTTP method, **FN** for an endpoint [served by a function](#function), **ACT** for one [served by a service](#service) — then the name, the label, and the tag **changes data** where it applies. A click on the line opens the endpoint under it; the **⤢** icon at the end of the line opens the same editor over the whole window (*Open over the whole window*), for an endpoint with a long body or many parameters — it edits the same draft, which **Save** on the Connectors page writes.

| Button | Does |
|---|---|
| **Add endpoint** | Asks for a name and opens a blank endpoint. |
| **Create from…** | Writes an endpoint from what the server describes — see [below](#create-from). Shown when the connector has generators. |
| **Check N generated** | Shown when the connector holds generated endpoints: asks the server again for each of them and lists those that no longer match. |
| **N generators** | Unfolds the generators the connector declares — an id, what it creates, the plugin function, a description — to edit them or **Add a generator**. |

The **Test** stage card runs an endpoint against the connector as it is on the page, without saving: pick the **Endpoint**, fill its **Parameters** (the help and the example under each field), **Run**, read the **Result**. On a connector without endpoints yet, **Test connection** checks the address and the authentication.

---

## The four stages \{#stages\}

An endpoint opens as a flow of four cards, one under the other on a canvas that zooms (**–** / **+**) — **What it is → Inputs → The call → The answer** — each saying what it holds: the label, the number of parameters, `POST /orders` (or the function or the service that serves it), where the rows are. The fields of the picked card are beside the flow.

### What it is \{#what\}

| Field | Meaning |
|---|---|
| **Name**, **Label**, **Description** | The identifier used by actions and permissions, the short label of the lists, one sentence of description. |
| **Changes data** | Tick it when the call submits, creates or runs something — see [Endpoints that change data](#writable). |
| **Group** | The heading the endpoint is listed under. Display only. |
| **Created from** | For a generated endpoint, what it was created from, with **Modify…** and **Refresh from the server** — see [below](#create-from). |

### Inputs \{#inputs\}

Each **parameter** is a line — its name, its label, its default, *Required* — opened to edit it.

| Field | Meaning |
|---|---|
| **Name**, **Label** | The `{{NAME}}` used in the path, the headers or the body, and the label of its field. |
| **Default value** | Taken when the caller leaves the parameter out or blank. |
| **Example**, **Help — what to put in it** | Shown under the field wherever the endpoint is filled, and given to the AI assistant. |
| **Allowed values** | A closed list: the field becomes a dropdown, another value is refused before anything is sent, and the letter case is corrected. |
| **Required** | A call without it is refused before anything is sent. |

### The call \{#call\}

**Method** and **URL path**, **Extra headers**, **Content-Type**, **Body** (with **Format JSON**) and **Query params**. **Leave out a query parameter whose value is blank** sends only the query parameters that have a value, for a server that reads an empty one as a filter on nothing.

Instead of an HTTP call, the endpoint can be **Served by a function** or **Served by a service** — see below.

### The answer \{#answer\}

| Field | Meaning |
|---|---|
| **Rows** | Where the list of records is in the answer. With it, a screen can read the endpoint as it reads a query. |
| **Columns** | One line per column — the **Column** and the **Key in a row** it is read from (`AN8` ← `z_AN8_19`): the columns, in order, named so that the dictionary recognises them. **Columns from an answer** calls the endpoint once with its parameters' examples and offers the keys of its first row: a click adds one. |
| **Column titles** | Where the answer gives each key its title — the label of a column neither the screen nor the dictionary names. |
| **Row limit parameter** | The parameter that carries the maximum number of rows: a screen fills it from its own *Max rows*. |
| **"More rows" flag** | Where the server says there is more than it returned: the screen then says the result is truncated. |
| **Refusals that mean “no rows”** | For a server that refuses when there is nothing to list: part of its error text, or its HTTP status (`404`), separated by commas — `404, no active users`. A screen then shows an empty list instead of an error; any other refusal stays an error. |
| **Error fields** | Where the server puts its errors when it answers 200 all the same: something there makes the call a failure, with that content as its error. |
| **Warning fields** | Where the server puts its warnings: reported with the answer, the call stands. |
| **Response field**, **Response mappings** | The part of the answer returned, and logical names mapped to paths of the answer. |

A path may end with a filter on the items of a list — `result.errors[errorLevel=1]` — for a server that puts its errors and its warnings in the same list.

---

## Create from… \{#create-from\}

A generic endpoint — *run any report*, with JSON for whatever depends on the report — is hard to fill. When the application behind the connector provides **generators**, **Create from…** writes a dedicated endpoint instead:

<svg viewBox="0 0 1320 378" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="epc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="26" width="800" height="332" rx="14" fill="url(#epc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="276" y="50" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Create an endpoint from the server</text>
  <line x1="260" y1="64" x2="1060" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="276" y="76" width="768" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">A JDE application (its list and its record)</text>
  <text x="1030" y="93" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="276" y="122" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The generator says in a sentence what it builds.</text>
  <text x="276" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIND</text>
  <rect x="276" y="156" width="680" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286" y="172.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">P01012</text>
  <rect x="964" y="158" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌕ Search</text>
  <text x="276" y="202" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 FOUND — PICK ONE</text>
  <rect x="276" y="210" width="768" height="26" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="288" y="227" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="360" y="227" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book</text>
  <rect x="276" y="238" width="768" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="288" y="255" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">P01012D</text>
  <text x="360" y="255" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book Translations</text>
  <rect x="276" y="266" width="768" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="288" y="283" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">P0101</text>
  <text x="360" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <line x1="260" y1="308" x2="1060" y2="308" stroke="#1f2937" strokeWidth="1"/>
  <rect x="810" y="320" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="334.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="900" y="320" width="144" height="22" rx="5" fill="url(#epc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="972.0" y="334.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Create the endpoint</text>
  <rect x="20" y="76" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A generator</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">declared by the connector's app</text>
  <line x1="220" y1="93.0" x2="276" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
  <rect x="20" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Find the object</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the server, as saved</text>
  <line x1="220" y1="177.0" x2="276" y2="169" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
  <rect x="20" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pick one</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then answer its questions</text>
  <line x1="220" y1="257.0" x2="276" y2="223" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
  <rect x="1100" y="294" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1110" y="309" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Create</text>
  <text x="1110" y="322" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">added unsaved, opened for review</text>
  <line x1="1100" y1="311.0" x2="1044" y2="331" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
</svg>

1. **Find** the object on the server.
2. **Answer** a few questions — which columns, which options.
3. **Create the endpoint**: one named parameter per input, with its label, its help and its default. It is added unsaved and opened for review.

A generator can also build several endpoints at once, or a **whole screen**: the dialog then asks for the application, the screen identifier, its title and whether to add it to the menu, and creates the endpoints and the screen in one validated pass — nothing is written when anything is invalid. An endpoint that already exists is kept as it is and used by the new screen, unless **Replace the N endpoint(s) that already exist** is ticked.

A generated endpoint remembers what it was created from (**Created from**, in *What it is*):

- **Modify…** reopens the dialog on what it was built from, with its choices as they were — tick a column, a field, a filter. What the generator builds is merged into the endpoint: the differences are listed first (*See what changes*), the name, the label and the parameter texts are kept, and an application's read, add, change and delete endpoints follow together.
- **Refresh from the server** builds it again from the same request and shows what changes before applying it: the address, the body and the parameters follow the server; the name, the label, the description and what was written on a parameter that stays are kept.

Nothing is saved until **Save** on the Connectors page.

The generators of the JD Edwards AIS connector are described in [Nomajde — Create from…](../../nomajde/ais/create-from.md).

---

## Endpoints that change data \{#writable\}

An endpoint marked **Changes data** is treated apart:

- a screen can name it as its insert, update or delete — see [A screen on an API endpoint](./screens/api-screens.md#save);
- the **AI assistant** does not call it like a read: it needs the *API tool* and the *Write tools* switched on in **Administer → App → AI Assistant**, a user allowed to change data through the assistant, and it proposes a **card** in the chat — nothing is sent until the user applies it. Over MCP, *Allow changes over MCP* is needed as well;
- the call is recorded in the [AI usage](../../monitoring/ai-usage.md) like the other changes made through the assistant.

An endpoint that is not marked is treated as a read: **mark every endpoint that writes**.

---

## Served by a function \{#function\}

One HTTP call cannot do everything: changing a record a server only offers through a form means finding it, checking that exactly one was found, then acting. **Served by a function** names a function of an application's plugin that answers instead of the HTTP call. Its arguments are the endpoint's parameters; its answer is treated like a response — rows, error and warning fields, mappings, *Changes data*. For a screen, an action, a job or the assistant, it is an endpoint like any other.

## Served by a service \{#service\}

**Served by a service** names a [service](./services.md): its steps — queries, other endpoints, functions, conditions, loops — run on the server and answer as one endpoint. The endpoint's parameters are the service's inputs; what the service returns is the answer. It runs with the endpoint's permission: who may call the endpoint runs its steps. **Expose**, on the Services page, creates such an endpoint in one click.

---

## Permissions and safety \{#security\}

Each endpoint has its permission, `api:<connector>:<endpoint>`: a role can be allowed one report or one orchestration, not all of them. The permission holds because a value can never redirect a call:

- in the **path**, a value cannot climb out of the endpoint's path nor give another address;
- in a **JSON body**, a value placed inside a string stays inside that string;
- in a **form body**, a value cannot add a pair;
- a **file** sent by a call made on behalf of a user stays inside the folder the endpoint names.

A call that would break one of these rules is refused before anything is sent.

---

## What the caller sees on a failure \{#errors\}

- A server that cannot be reached is named with its address: *cannot connect to https://host:8999 — check the connector's base URL*.
- An HTTP error carries the server's own words when the error fields find them.
- A list that is not where the endpoint says is an error naming what the answer holds, not an empty screen.

---

## Tips & best practices \{#tips\}

- Write the **help** and the **example** of every parameter: they serve the people who fill the form and the assistant alike.
- Prefer several specific endpoints to one generic endpoint with JSON: each gets its permission and its form.
- Declare the **error fields** of any server that answers 200 with its errors inside; otherwise a refused save looks like a success.
- Group the endpoints of one application or one subject under a heading.
- Cover the endpoints the business depends on with [tests](./tests.md).

---

## Related

- [Connectors](../connectors.md) — the connector itself: address, authentication, environments.
- [A screen on an API endpoint](./screens/api-screens.md) · [Services](./services.md) · [Tests](./tests.md)
- [REST API](../../references/rest-api.md)
