---
title: AI usage
description: "Monitoring → AI usage in Liberty Next: who uses the AI assistant, the estimated cost, the tokens with the share read from the cache, the tools called and their failures — by user, day, model, channel and tool —, the changes made through the assistant, and the latest questions with their tool calls. What is recorded, what never is, and how long it is kept."
keywords: [Liberty Next, monitoring, AI usage, AI assistant, tokens, estimated cost, prompt cache, tool calls, channels, changes, audit, usage record, retention, MCP]
---

# AI usage

**Monitoring → AI usage** shows how the [AI assistant](../framework/ai-assistant.md) is used: who asks, what it costs, which tools it calls and which fail, and what was changed through it. It is for superusers, from **Liberty Next → Operate → Monitoring**.

---

## At a glance

<svg viewBox="0 0 1200 594" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aiu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aiu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aiu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aiu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="554" rx="14" fill="url(#aiu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="240.0" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="252.0" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <rect x="343.7142857142857" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="355.7142857142857" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="355.7142857142857" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <rect x="447.42857142857144" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="459.42857142857144" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COST</text>
  <text x="459.42857142857144" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">$38.20</text>
  <text x="459.42857142857144" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">estimated, list price</text>
  <rect x="551.1428571428571" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="563.1428571428571" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="563.1428571428571" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9.6 M</text>
  <text x="563.1428571428571" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">71 % from cache</text>
  <rect x="654.8571428571429" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="666.8571428571429" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS OUT</text>
  <text x="666.8571428571429" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">184 k</text>
  <rect x="758.5714285714286" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="770.5714285714286" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL CALLS</text>
  <text x="770.5714285714286" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 038</text>
  <text x="770.5714285714286" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 failed</text>
  <rect x="862.2857142857142" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="874.2857142857142" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGES</text>
  <text x="874.2857142857142" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="874.2857142857142" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">through the assistant</text>
  <text x="240" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BY USER</text>
  <rect x="240" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="350" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="422" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="492" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COST</text>
  <rect x="240" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="350" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">148</text>
  <text x="422" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3.4 M</text>
  <text x="492" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">$14.10</text>
  <rect x="240" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="350" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">96</text>
  <text x="422" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2.1 M</text>
  <text x="492" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">$9.85</text>
  <text x="606.0" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BY CHANNEL</text>
  <rect x="606.0" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANNEL</text>
  <text x="752.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRIES</text>
  <text x="814.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="872.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COST</text>
  <rect x="606.0" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="262.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty chat</text>
  <text x="752.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">412</text>
  <text x="814.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="872.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">$38.20</text>
  <rect x="606.0" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="288.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">External client (MCP)</text>
  <text x="752.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">236</text>
  <text x="814.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">6</text>
  <text x="872.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="240" y="318" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BY TOOL</text>
  <rect x="240" y="326" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL</text>
  <text x="374" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALLS</text>
  <text x="434" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="494" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AVERAGE TIME</text>
  <rect x="240" y="354" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="374" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">522</text>
  <text x="434" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">7</text>
  <text x="494" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1.2 s</text>
  <rect x="240" y="380" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">explorer_query</text>
  <text x="374" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">301</text>
  <text x="434" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="494" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0.9 s</text>
  <text x="606.0" y="318" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHANGES MADE THROUGH THE ASSISTANT</text>
  <rect x="606.0" y="326" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN</text>
  <text x="692.0" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="776.0" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT</text>
  <rect x="606.0" y="354" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="368.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19/11 10:44</text>
  <text x="692.0" y="368.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">alice</text>
  <text x="776.0" y="368.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">screen_write update sales/orders</text>
  <rect x="606.0" y="380" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="394.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19/11 09:12</text>
  <text x="692.0" y="394.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="776.0" y="394.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">job_run load_prices</text>
  <text x="240" y="424" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LATEST QUESTIONS</text>
  <rect x="866" y="403" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="883" y="412" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Failures only</text>
  <rect x="724" y="409" width="130" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="422.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Every channel ▾</text>
  <rect x="240" y="432" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="272" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN</text>
  <text x="364" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="448" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="532" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODEL</text>
  <text x="682" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL CALLS</text>
  <text x="754" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIME</text>
  <text x="814" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTCOME</text>
  <rect x="240" y="460" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="474.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="272" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:44</text>
  <text x="364" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="448" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="532" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Card applied</text>
  <text x="682" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="754" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0.4 s</text>
  <rect x="814" y="463.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="839.5" y="474.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Applied</text>
  <rect x="240" y="486" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="500.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="272" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:42</text>
  <text x="364" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="448" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="532" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="682" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="754" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">8.1 s</text>
  <rect x="814" y="489.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="842.0" y="500.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="512" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="526.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="272" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:37</text>
  <text x="364" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="448" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="532" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">External client (MCP)</text>
  <text x="682" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="754" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2.6 s</text>
  <rect x="814" y="515.0" width="56" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="842.0" y="526.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 failed</text>
  <rect x="240" y="538" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="552.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="272" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:31</text>
  <text x="364" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="448" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="532" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="682" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="754" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">14.6 s</text>
  <rect x="814" y="541.0" width="70" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="849.0" y="552.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Round limit</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a view of the Monitoring page</text>
  <line x1="200" y1="93.0" x2="404" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a user</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">narrows the questions below</text>
  <line x1="200" y1="253.0" x2="250" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="506" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="521" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A run of MCP calls</text>
  <text x="30" y="534" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line, its calls when opened</text>
  <line x1="200" y1="523.0" x2="244" y2="523" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 or 90 days</text>
  <line x1="1000" y1="73.0" x2="960" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="136" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Estimated cost</text>
  <text x="1010" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">USD, the questions of the chat</text>
  <line x1="1000" y1="153.0" x2="962" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Channels</text>
  <text x="1010" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click filters the list below</text>
  <line x1="1000" y1="249.0" x2="962" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="348" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="363" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who changed what</text>
  <text x="1010" y="376" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen, record's key, job</text>
  <line x1="1000" y1="365.0" x2="962" y2="365" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="402" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="417" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="1010" y="430" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a channel, the failures</text>
  <line x1="1000" y1="419.0" x2="962" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
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

The period is **Last 7 days**, **Last 30 days** (default) or **Last 90 days**.

| Tile | Shows |
|---|---|
| **Questions** | Entries over the period. |
| **Users** | Users with at least one. |
| **Estimated cost, at list price** | What the tokens of the chat's questions cost at Anthropic's list price, in USD. A model without a listed price is left out and named (*without … (no listed price)*). |
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

## Latest questions \{#recent\}

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
