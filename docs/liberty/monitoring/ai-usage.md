---
title: AI usage
description: "Monitoring → AI usage in Liberty Next: who uses the AI assistant, the estimated cost, the tokens with the share read from the cache, the tools called and their failures — by user, day, model, channel and tool —, the changes made through the assistant, and the latest activity with its tool calls. What is recorded, what never is, and how long it is kept."
keywords: [Liberty Next, monitoring, AI usage, AI assistant, tokens, estimated cost, prompt cache, tool calls, channels, changes, audit, usage record, retention, MCP]
---

# AI usage

**Monitoring → AI usage** shows how the [AI assistant](../framework/ai-assistant.md) is used: who asks, what it costs, which tools it calls and which fail, and what was changed through it. It is for superusers, from **Liberty Next → Operate → Monitoring**.

---

## At a glance

<svg viewBox="0 0 1320 713" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="673" rx="14" fill="url(#monai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Monitoring</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Connected users, locks, pools and …</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The log file: search, export, down…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Who uses the assistant, the tokens…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What each store keeps, its size, a…</text>
  <rect x="236" y="126" width="140" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Last 30 days</text>
  <text x="364" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="386" y="142" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Recorded: who, model, tokens, tools — never the question, the answer or a row. Kept 90 days.</text>
  <rect x="1028" y="126" width="56" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload</text>
  <rect x="236.0" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246.0" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <text x="246.0" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Questions</text>
  <rect x="358.2857142857143" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="368.2857142857143" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <text x="368.2857142857143" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Users</text>
  <rect x="480.57142857142856" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490.57142857142856" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">$38.20</text>
  <text x="490.57142857142856" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Estimated cost, at list</text>
  <text x="490.57142857142856" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">price</text>
  <rect x="602.8571428571429" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="612.8571428571429" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">9.60 M</text>
  <text x="612.8571428571429" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tokens in · 71 % from</text>
  <text x="612.8571428571429" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">cache</text>
  <rect x="725.1428571428571" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.1428571428571" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">184 k</text>
  <text x="735.1428571428571" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tokens out</text>
  <rect x="847.4285714285714" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="857.4285714285714" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">1038</text>
  <text x="857.4285714285714" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tool calls · 12 failed</text>
  <rect x="969.7142857142858" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="979.7142857142858" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="979.7142857142858" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Changes made through</text>
  <text x="979.7142857142858" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">the assistant</text>
  <text x="248" y="242" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By user</text>
  <text x="248" y="260" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">User</text>
  <text x="390" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Questions</text>
  <text x="444" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens in</text>
  <text x="496" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">From cache</text>
  <text x="548" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens out</text>
  <text x="598" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cost</text>
  <line x1="236" y1="266" x2="654.0" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="280" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="390" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">148</text>
  <text x="444" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3.40 M</text>
  <text x="496" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">72 %</text>
  <text x="548" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">61 k</text>
  <text x="598" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">$14.10</text>
  <line x1="242" y1="286" x2="648.0" y2="286" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="300" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="390" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">96</text>
  <text x="444" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2.10 M</text>
  <text x="496" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">68 %</text>
  <text x="548" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">44 k</text>
  <text x="598" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">$9.85</text>
  <line x1="242" y1="306" x2="648.0" y2="306" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="224" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="242" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By day</text>
  <text x="678.0" y="260" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Day</text>
  <text x="820.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Questions</text>
  <text x="874.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens in</text>
  <text x="926.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">From cache</text>
  <text x="978.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens out</text>
  <text x="1028.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cost</text>
  <line x1="666.0" y1="266" x2="1084.0" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="280" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <text x="820.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">42</text>
  <text x="874.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1.10 M</text>
  <text x="926.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">80 %</text>
  <text x="978.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 k</text>
  <text x="1028.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">$4.17</text>
  <line x1="672.0" y1="286" x2="1078.0" y2="286" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="300" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20</text>
  <text x="820.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">89</text>
  <text x="874.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1.90 M</text>
  <text x="926.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">82 %</text>
  <text x="978.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">28 k</text>
  <text x="1028.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">$7.64</text>
  <line x1="672.0" y1="306" x2="1078.0" y2="306" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="224" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="340" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By model</text>
  <text x="300.81600000000003" y="340" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">the questions of the chat</text>
  <text x="248" y="358" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Model</text>
  <text x="390" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Questions</text>
  <text x="444" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens in</text>
  <text x="496" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">From cache</text>
  <text x="548" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens out</text>
  <text x="598" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cost</text>
  <line x1="236" y1="364" x2="654.0" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="378" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">claude-sonnet-4-5</text>
  <text x="390" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">380</text>
  <text x="444" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8.90 M</text>
  <text x="496" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">71 %</text>
  <text x="548" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">170 k</text>
  <text x="598" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">$36.90</text>
  <line x1="242" y1="384" x2="648.0" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="322" width="418.0" height="68" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="340" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By channel</text>
  <text x="678.0" y="358" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Channel</text>
  <text x="864.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Entries</text>
  <text x="926.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tool calls</text>
  <text x="976.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Failed</text>
  <text x="1026.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cost</text>
  <line x1="666.0" y1="364" x2="1084.0" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="378" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty chat</text>
  <text x="864.0" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">412</text>
  <text x="926.0" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">802</text>
  <text x="976.0" y="378" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="1026.0" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">$38.20</text>
  <line x1="672.0" y1="384" x2="1078.0" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="398" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">External client (MCP)</text>
  <text x="864.0" y="398" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">236</text>
  <text x="926.0" y="398" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">236</text>
  <text x="976.0" y="398" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <text x="1026.0" y="398" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <line x1="672.0" y1="404" x2="1078.0" y2="404" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="322" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="438" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">By tool</text>
  <text x="248" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tool</text>
  <text x="414" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Calls</text>
  <text x="466" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Failed</text>
  <text x="546" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Average time</text>
  <text x="616" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Average size</text>
  <line x1="236" y1="462" x2="654.0" y2="462" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="414" y="476" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">522</text>
  <text x="466" y="476" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <text x="546" y="476" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1.2 s</text>
  <text x="616" y="476" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8.2 k</text>
  <line x1="242" y1="482" x2="648.0" y2="482" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">explorer_query</text>
  <text x="414" y="496" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">301</text>
  <text x="466" y="496" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <text x="546" y="496" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0.9 s</text>
  <text x="616" y="496" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1.6 k</text>
  <line x1="242" y1="502" x2="648.0" y2="502" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="420" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="438" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Changes made through the assistant</text>
  <text x="678.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">When</text>
  <text x="752.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">User</text>
  <text x="812.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Channel</text>
  <text x="892.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">What</text>
  <line x1="666.0" y1="462" x2="1084.0" y2="462" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:44</text>
  <text x="752.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="812.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Card applied</text>
  <text x="892.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">screen_write crm/orders</text>
  <line x1="672.0" y1="482" x2="1078.0" y2="482" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 09:12</text>
  <text x="752.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="812.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MCP</text>
  <text x="892.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">job_run load_prices</text>
  <line x1="672.0" y1="502" x2="1078.0" y2="502" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="420" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="538" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Latest activity</text>
  <rect x="830" y="526" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="540.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Every channel</text>
  <text x="958" y="540.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="984" y="532" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1001" y="541" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Failures only</text>
  <text x="248" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif"></text>
  <text x="262" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">When</text>
  <text x="352" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">User</text>
  <text x="414" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="484" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Model</text>
  <text x="682" y="562" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tokens in</text>
  <text x="738" y="562" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Tool calls</text>
  <text x="794" y="562" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Time</text>
  <text x="800" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Outcome</text>
  <line x1="236" y1="568" x2="1084" y2="568" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:44</text>
  <text x="352" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="414" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="484" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Card applied</text>
  <text x="682" y="583" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <text x="738" y="583" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="794" y="583" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0.4 s</text>
  <text x="800" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Applied</text>
  <line x1="242" y1="589" x2="1078" y2="589" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:42</text>
  <text x="352" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="414" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="484" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">claude-sonnet-4-5</text>
  <text x="682" y="604" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">57 k</text>
  <text x="738" y="604" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <text x="794" y="604" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8.1 s</text>
  <text x="800" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Answered</text>
  <line x1="242" y1="610" x2="1078" y2="610" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="262" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:37</text>
  <text x="352" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="414" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="484" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">External client (MCP)</text>
  <text x="682" y="625" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <text x="738" y="625" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <text x="794" y="625" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2.6 s</text>
  <text x="800" y="625" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">1 failed</text>
  <line x1="242" y1="631" x2="1078" y2="631" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="646" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"> </text>
  <text x="262" y="646" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="352" y="646" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="414" y="646" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="484" y="646" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sql_query  orders_get · 210 ms</text>
  <text x="682" y="646" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <text x="738" y="646" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <text x="794" y="646" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <text x="800" y="646" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <line x1="242" y1="652" x2="1078" y2="652" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:31</text>
  <text x="352" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="414" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="484" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">claude-sonnet-4-5</text>
  <text x="682" y="667" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">43 k</text>
  <text x="738" y="667" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="794" y="667" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14.6 s</text>
  <text x="800" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Round limit</text>
  <line x1="242" y1="673" x2="1078" y2="673" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="518" width="848" height="161" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a view of Monitoring</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 or 90 days</text>
  <line x1="200" y1="167.0" x2="236" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a user</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">narrows the latest activity</text>
  <line x1="200" y1="307.0" x2="236" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A run of MCP calls</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line, its calls when opened</text>
  <line x1="200" y1="577.0" x2="248" y2="621" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seven figures</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cost estimated in USD</text>
  <line x1="1120" y1="137.0" x2="1084" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Channels</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click filters the list</text>
  <line x1="1120" y1="317.0" x2="1084" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who changed what</text>
  <text x="1130" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen, record, job</text>
  <line x1="1120" y1="427.0" x2="1084" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="520" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="535" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="1130" y="548" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a channel, the failures</text>
  <line x1="1120" y1="537.0" x2="1084" y2="537" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
</svg>

---

## What is recorded \{#record\}

Each question to the assistant leaves one record: who asked, from which application's page, the model, the tokens (in, out, read from and written to the cache), the time it took and how it ended. Each tool call of the question is kept with its name, what it was called on (the connector and the query, the model, the keywords, the screen and the key of the record), whether it failed and why, its size and its time.

**The question, the answer, the rows a tool returned and the values written are never recorded.** A question the user abandons half-way is recorded with what had happened until then.

Three **channels** feed the record:

| Channel | One entry is |
|---|---|
| **Liberty chat** | A question asked in the assistant's drawer, with its model and its tokens. |
| **External client (MCP)** | A tool called by a Claude client — see [Connect Claude (MCP)](../framework/mcp.md). No model and no tokens: they are the client's. |
| **Card applied** | A card the user applied in the drawer: a record written, an action or a job run — see [Write through a screen](../framework/ai-assistant.md#write). |

---

## The period in figures \{#figures\}

The period is **Last 7 days**, **Last 30 days** (default) or **Last 90 days**, picked at the top left; beside it, a line recalls what is recorded and how long it is kept, and **Reload** reads the figures again.

| Tile | Shows |
|---|---|
| **Questions** | Entries over the period. |
| **Users** | Users with at least one. |
| **Estimated cost, at list price** | What the tokens of the chat's questions cost at Anthropic's list price, in US dollars written in the reader's language (*$38.20*). A model without a listed price is left out and named (*without … (no listed price)*). |
| **Tokens in** | Input tokens, with the share read from the cache (*71 % from cache*): the part of a conversation sent again at each tool round is read from the cache, at a lower price. |
| **Tokens out** | Output tokens. |
| **Tool calls** | Tools called, with the number that failed. |
| **Changes made through the assistant** | Their number over the period — see [below](#changes). |

The cost is an estimate: the prices are the list prices known to the installed release, and the contract of the installation's API key may differ. A call over MCP costs the installation nothing: it has no tokens here.

---

## Breakdowns \{#breakdowns\}

Six panels, two a row:

| Panel | Columns |
|---|---|
| **By user**, **By day** | Questions, Tokens in, From cache, Tokens out, Cost. |
| **By model** — *the questions of the chat* | The same columns, one row per model that answered a question. |
| **By channel** | Entries, Tool calls, Failed, Cost — the cost for the *Liberty chat* only. |
| **By tool** | Calls, Failed, Average time, Average size. |
| **Changes made through the assistant** | When, User, Channel, What. |

A click on a user narrows the questions below to theirs (*Questions of …*); a click on a channel narrows them to that channel.

---

## Changes made through the assistant \{#changes\}

The panel lists what was changed through the assistant over the period, newest first, 200 at most — *cards applied, and saving tools called over MCP*:

| Column | Content |
|---|---|
| **When**, **User** | Who made the change, and when. |
| **Channel** | *Card applied* for a card of the drawer, *External client (MCP)* for a tool a Claude client called. |
| **What** | The tool, then the screen and the operation or the action with the key of the record, or the job; in red with its reason when the change was refused. |

The values written are not kept. On a screen under [change tracking](../nomaflow/change-packages.md), the change package names these entries *AI assistant*.

---

## Latest activity \{#recent\}

One row per entry: When, User, Application, Model, Tokens in, From cache, Tokens out, Tool calls, Time and **Outcome**.

| Entry | Model column | Outcome |
|---|---|---|
| A question of the chat | The model. | *Answered*, *Failed*, *Abandoned* or *Round limit* (the question used all its tool rounds and ended on a closing answer). |
| A card applied | *Card applied*. | *Applied* or *Refused*. |
| A run of MCP calls | *External client (MCP)*. The calls of one user less than two minutes apart are one row. | *Answered*, or the number of calls that failed. |

A row opens on its tool calls, each with what it was called on, its size in characters and its time. Above the list, **Every channel** narrows it to one channel and **Failures only** to the entries with a failure.

---

## How long it is kept \{#retention\}

**Usage record kept (days; 0 = without limit)**, in Liberty Next → Administer → App → AI Assistant, is 90 by default. Older entries are deleted with the notifications' clean-up, and the store appears as **AI usage** on the [Retention](./retention.md) view, with its number of entries, **Preview** and **Run now**.

---

## Tips \{#tips\}

- A tool that fails often points at a missing permission or at a query whose description misleads the assistant: open the question's tool calls to read the reason.
- A user with many questions and few tool calls is probably asking for what the assistant cannot reach: check the role's `sql:` and `explorer:` permissions.
- Read the **Changes** panel after turning the write tools on: it says who uses them, on which screens, and what is refused.
- The same figures are served by `GET /admin/ai-usage` for an external report.
