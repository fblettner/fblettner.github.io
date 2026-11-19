---
title: AI usage
description: "Monitoring → AI usage in Liberty Next: who uses the AI assistant, the tokens with the share read from the cache, the tools called and their failures, the average time — by user, day, model and tool — and the latest questions with their tool calls. What is recorded, what never is, and how long it is kept."
keywords: [Liberty Next, monitoring, AI usage, AI assistant, tokens, prompt cache, tool calls, audit, usage record, retention, MCP]
---

# AI usage

**Monitoring → AI usage** shows how the [AI assistant](../framework/ai-assistant.md) is used: who asks, how many tokens it costs, which tools it calls and which fail. It is for superusers, from **Liberty Next → Operate → Monitoring**.

---

## At a glance

<svg viewBox="0 0 1200 514" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aiu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aiu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aiu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aiu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="474" rx="14" fill="url(#aiu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Monitoring</text>
  <rect x="240" y="62" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="262.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Live</text>
  <rect x="290" y="62" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="329.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Server log</text>
  <rect x="374" y="62" width="66" height="22" rx="5" fill="url(#aiu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="407.0" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AI usage</text>
  <rect x="446" y="62" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="482.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Retention</text>
  <rect x="830" y="62" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="76.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 30 days ▾</text>
  <text x="240" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Recorded: who, model, tokens, tools — never the question, the answer or a row. Kept 90 days.</text>
  <rect x="240.0" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="252.0" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <rect x="361.3333333333333" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="373.3333333333333" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="373.3333333333333" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <rect x="482.66666666666663" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="494.66666666666663" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="494.66666666666663" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9.6 M</text>
  <text x="494.66666666666663" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">71 % from cache</text>
  <rect x="604.0" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS OUT</text>
  <text x="616.0" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">184 k</text>
  <rect x="725.3333333333333" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="737.3333333333333" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL CALLS</text>
  <text x="737.3333333333333" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 038</text>
  <text x="737.3333333333333" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 failed</text>
  <rect x="846.6666666666666" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="858.6666666666666" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AVERAGE TIME</text>
  <text x="858.6666666666666" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9.4 s</text>
  <text x="858.6666666666666" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">per question</text>
  <text x="240" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BY USER</text>
  <rect x="240" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="360" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="430" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="500" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL CALLS</text>
  <rect x="240" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="360" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">148</text>
  <text x="430" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3.4 M</text>
  <text x="500" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">402</text>
  <rect x="240" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="360" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">96</text>
  <text x="430" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2.1 M</text>
  <text x="500" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">233</text>
  <rect x="240" y="300" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="314.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="360" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">61</text>
  <text x="430" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1.5 M</text>
  <text x="500" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">170</text>
  <text x="606.0" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BY TOOL</text>
  <rect x="606.0" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL</text>
  <text x="746.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALLS</text>
  <text x="806.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="866.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AVERAGE TIME</text>
  <rect x="606.0" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="746.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">522</text>
  <text x="806.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">7</text>
  <text x="866.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1.2 s</text>
  <rect x="606.0" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">explorer_query</text>
  <text x="746.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">301</text>
  <text x="806.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="866.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0.9 s</text>
  <rect x="606.0" y="300" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">search_catalog</text>
  <text x="746.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">118</text>
  <text x="806.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <text x="866.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0.1 s</text>
  <text x="240" y="344" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LATEST QUESTIONS</text>
  <rect x="240" y="352" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN</text>
  <text x="358" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="442" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="530" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODEL</text>
  <text x="640" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="710" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL CALLS</text>
  <text x="786" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIME</text>
  <text x="846" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTCOME</text>
  <rect x="240" y="380" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:42</text>
  <text x="358" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="442" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="530" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">claude-sonnet-5-5</text>
  <text x="640" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24 310</text>
  <text x="710" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="786" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">8.1 s</text>
  <rect x="846" y="383.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="874.0" y="394.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="406" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:37</text>
  <text x="358" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="442" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="530" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">mcp</text>
  <text x="640" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="710" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="786" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1.4 s</text>
  <rect x="846" y="409.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="874.0" y="420.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="432" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:31</text>
  <text x="358" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="442" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="530" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">claude-sonnet-5-5</text>
  <text x="640" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">31 902</text>
  <text x="710" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="786" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">14.6 s</text>
  <rect x="846" y="435.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="869.0" y="446.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failed</text>
  <rect x="240" y="458" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:20</text>
  <text x="358" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="442" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="530" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">claude-sonnet-5-5</text>
  <text x="640" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12 004</text>
  <text x="710" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="786" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3.0 s</text>
  <rect x="846" y="461.0" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="876.0" y="472.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandoned</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a view of the Monitoring page</text>
  <line x1="200" y1="93.0" x2="404" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a user</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">narrows the questions below</text>
  <line x1="200" y1="253.0" x2="250" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="398" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row opens</text>
  <text x="30" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its tool calls, one by one</text>
  <line x1="200" y1="415.0" x2="240" y2="393" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 or 90 days</text>
  <line x1="1000" y1="73.0" x2="960" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="136" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The period in figures</text>
  <text x="1010" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">questions, tokens, tools, time</text>
  <line x1="1000" y1="153.0" x2="962" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="406" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="421" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model: mcp</text>
  <text x="1010" y="434" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a call from an external client</text>
  <line x1="1000" y1="423.0" x2="962" y2="417" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
</svg>

---

## What is recorded \{#record\}

Each question to the assistant leaves one record: who asked, from which application's page, the model, the tokens (in, out, read from and written to the cache), the time it took and how it ended. Each tool call of the question is kept with its name, what it was called on (the connector and the query, the model, the keywords), whether it failed and why, its size and its time.

**The question, the answer and the rows a tool returned are never recorded.** A question the user abandons half-way is recorded with what had happened until then. A call from an external client is recorded the same way, with the model `mcp` — see [Connect Claude (MCP)](../framework/mcp.md).

---

## The period in figures \{#figures\}

The period is **Last 7 days**, **Last 30 days** (default) or **Last 90 days**.

| Tile | Shows |
|---|---|
| **Questions** | Questions asked over the period. |
| **Users** | Users who asked at least one. |
| **Tokens in** | Input tokens, with the share read from the cache (*71 % from cache*): the part of a conversation sent again at each tool round is read from the cache, at a lower price. |
| **Tokens out** | Output tokens. |
| **Tool calls** | Tools called, with the number that failed. |
| **Average time per question** | From the question to the end of the answer. |

---

## Breakdowns \{#breakdowns\}

| Table | Columns |
|---|---|
| **By user**, **By day**, **By model** | Questions, Tokens in, From cache, Tokens out, Tool calls. |
| **By tool** | Calls, Failed, Average time, Average size. |

A click on a user narrows the questions below to theirs (*Questions of …*).

---

## Latest questions \{#recent\}

One row per question: When, User, Application, Model, Tokens in, From cache, Tokens out, Tool calls, Time and **Outcome** — *Answered*, *Failed*, *Abandoned* or *Round limit* (the question used all its tool rounds and ended on a closing answer). A row opens on its tool calls, each with its size in characters and its time.

---

## How long it is kept \{#retention\}

**Usage record kept (days; 0 = without limit)**, in Liberty Next → Administer → App → AI Assistant, is 90 by default. Older questions are deleted with the notifications' clean-up, and the store appears as **AI usage** on the [Retention](./retention.md) view, with its number of questions, **Preview** and **Run now**.

---

## Tips \{#tips\}

- A tool that fails often points at a missing permission or at a query whose description misleads the assistant: open the question's tool calls to read the reason.
- A user with many questions and few tool calls is probably asking for what the assistant cannot reach: check the role's `sql:` and `explorer:` permissions.
- The same figures are served by `GET /admin/ai-usage` for an external report.
