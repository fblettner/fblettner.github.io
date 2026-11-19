---
title: AI usage
description: "The AI usage view of NomaUBL Diagnostics shows what the in-app assistant, the mapping auto-map and Claude (MCP) were used for: turns, users, tokens with the share read from the cache, tool calls and failures — by user, day, channel, model and tool — and each turn with its tools. What is kept, what never is, and for how long."
keywords: [NomaUBL, AI usage, diagnostics, AI assistant, Claude, MCP, auto-map, tokens, prompt cache, tool calls, audit, retention, JD Edwards, SAP, NetSuite, custom ERP]
---

# AI usage

The **AI usage** view of [Diagnostics](./overview.md) shows what the AI was used for on the instance, by whom, and what it cost in tokens. It covers the three ways the AI is reached: the [in-app assistant](../ai-capabilities.md), the auto-map of the [mapping editor](../../ubl-tools/xsl-editor.md) and [Claude connected through MCP](../claude-mcp.md).

Open it from **Diagnostics → AI usage**. The view is granted per role, as **AI usage view** ([Roles](../../configuration/security/roles.md)).

---

## At a glance

<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="460" rx="14" fill="url(#nau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostics</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Errors, failures and logs of the instance.</text>
  <rect x="240.0" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247.0" y="92" width="16" height="16" rx="5" fill="#f87171" fillOpacity="0.18"/>
  <text x="269.0" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Integration errors</text>
  <text x="269.0" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Findings by rule, by event …</text>
  <rect x="385.2" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="392.2" y="92" width="16" height="16" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="414.2" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Processing log</text>
  <text x="414.2" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Every run with its files a …</text>
  <rect x="530.4" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="537.4" y="92" width="16" height="16" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="559.4" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Failures</text>
  <text x="559.4" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Every unresolved failure i …</text>
  <rect x="675.6" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="682.6" y="92" width="16" height="16" rx="5" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="704.6" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="704.6" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">By severity and module</text>
  <rect x="820.8" y="80" width="139.2" height="40" rx="8" fill="#a78bfa" fillOpacity="0.1" stroke="#a78bfa" strokeWidth="1.4"/>
  <rect x="827.8" y="92" width="16" height="16" rx="5" fill="#a78bfa" fillOpacity="0.18"/>
  <text x="849.8" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="849.8" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">The assistant and Claude: …</text>
  <rect x="240" y="134" width="183" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="268.5" y="149.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">7 days</text>
  <rect x="298" y="135" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="328.5" y="149.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 days</text>
  <line x1="360" y1="139" x2="360" y2="153" stroke="#334155" strokeWidth="1"/>
  <text x="391.5" y="149.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">90 days</text>
  <text x="435" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Who, model, tokens and tools — never the question or the answer. Kept 90 days.</text>
  <rect x="240.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246.0" y="168" width="103.0" height="2" rx="1" fill="#4a9eff"/>
  <text x="248.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Turns</text>
  <text x="248.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">286</text>
  <rect x="361.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="367.0" y="168" width="103.0" height="2" rx="1" fill="#4ade80"/>
  <text x="369.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Users</text>
  <text x="369.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="488.0" y="168" width="103.0" height="2" rx="1" fill="#fb923c"/>
  <text x="490.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Tokens in · 68 % cached</text>
  <text x="490.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">812.6k</text>
  <rect x="603.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="609.0" y="168" width="103.0" height="2" rx="1" fill="#a78bfa"/>
  <text x="611.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Tokens out</text>
  <text x="611.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">121.3k</text>
  <rect x="724.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="730.0" y="168" width="103.0" height="2" rx="1" fill="#f87171"/>
  <text x="732.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Tool calls · 9 failed</text>
  <text x="732.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">742</text>
  <rect x="845.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="851.0" y="168" width="103.0" height="2" rx="1" fill="#7dd3fc"/>
  <text x="853.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Average turn</text>
  <text x="853.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">7.8 s</text>
  <rect x="244.3" y="272.2" width="15.4" height="15.8" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="268.3" y="264.4" width="15.4" height="23.6" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="292.3" y="256.5" width="15.4" height="31.5" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="316.3" y="267.0" width="15.4" height="21.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="340.3" y="280.1" width="15.4" height="7.9" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="364.3" y="282.8" width="15.4" height="5.2" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="388.3" y="259.1" width="15.4" height="28.9" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="412.3" y="251.2" width="15.4" height="36.8" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="436.3" y="261.8" width="15.4" height="26.2" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="460.3" y="253.9" width="15.4" height="34.1" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="484.3" y="264.4" width="15.4" height="23.6" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="508.3" y="277.5" width="15.4" height="10.5" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="532.3" y="285.4" width="15.4" height="2.6" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="556.3" y="256.5" width="15.4" height="31.5" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="580.3" y="248.6" width="15.4" height="39.4" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="604.3" y="259.1" width="15.4" height="28.9" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="628.3" y="264.4" width="15.4" height="23.6" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="652.3" y="253.9" width="15.4" height="34.1" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="676.3" y="274.9" width="15.4" height="13.1" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="700.3" y="282.8" width="15.4" height="5.2" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="724.3" y="261.8" width="15.4" height="26.2" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="748.3" y="251.2" width="15.4" height="36.8" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="772.3" y="256.5" width="15.4" height="31.5" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="796.3" y="246.0" width="15.4" height="42.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="820.3" y="259.1" width="15.4" height="28.9" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="844.3" y="280.1" width="15.4" height="7.9" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="868.3" y="282.8" width="15.4" height="5.2" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="892.3" y="253.9" width="15.4" height="34.1" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="916.3" y="256.5" width="15.4" height="31.5" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="940.3" y="264.4" width="15.4" height="23.6" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="240" y="304" width="383" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="305" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="319.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Turns</text>
  <line x1="292" y1="309" x2="292" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="323.5" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By user</text>
  <line x1="355" y1="309" x2="355" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="383.5" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By day</text>
  <line x1="412" y1="309" x2="412" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="452.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By channel</text>
  <line x1="492" y1="309" x2="492" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="526.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By model</text>
  <line x1="560" y1="309" x2="560" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="591.5" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By tool</text>
  <rect x="240" y="338" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN</text>
  <text x="362" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="436" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANNEL</text>
  <text x="554" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAGE</text>
  <text x="610" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODEL</text>
  <text x="722" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="790" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOLS</text>
  <text x="840" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTCOME</text>
  <rect x="240" y="366" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 10:42</text>
  <text x="362" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">alice</text>
  <text x="436" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">In-app assistant</text>
  <text x="554" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">errors</text>
  <text x="610" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">claude-sonnet-5-5</text>
  <text x="722" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">40382</text>
  <text x="790" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">7</text>
  <text x="840" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="392" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 10:37</text>
  <text x="362" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">bruno</text>
  <text x="436" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">Claude (MCP)</text>
  <text x="554" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="610" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="722" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">0</text>
  <text x="790" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">1</text>
  <text x="840" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="418" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 10:20</text>
  <text x="362" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">chloe</text>
  <text x="436" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">Mapping auto-map</text>
  <text x="554" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="610" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">claude-sonnet-5-5</text>
  <text x="722" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">58204</text>
  <text x="790" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">0</text>
  <text x="840" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Cut short</text>
  <rect x="240" y="444" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 09:58</text>
  <text x="362" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">alice</text>
  <text x="436" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">In-app assistant</text>
  <text x="554" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">invoices</text>
  <text x="610" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">claude-sonnet-5-5</text>
  <text x="722" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">31902</text>
  <text x="790" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">5</text>
  <text x="840" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Failed</text>
  <rect x="20" y="129" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 or 90 days</text>
  <line x1="200" y1="146.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="299" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="314" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Breakdown</text>
  <text x="30" y="327" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">turns, user, day, channel…</text>
  <line x1="200" y1="316.0" x2="240" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="376" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a turn</text>
  <text x="30" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens its tool calls</text>
  <line x1="200" y1="393.0" x2="240" y2="377" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="83" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage view</text>
  <text x="1010" y="111" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">granted per role</text>
  <line x1="1000" y1="100.0" x2="962.0" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The period in figures</text>
  <text x="1010" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">turns, tokens, tools, time</text>
  <line x1="1000" y1="195.0" x2="962" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Turns per day</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">over the period</text>
  <line x1="1000" y1="257.0" x2="962" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="299" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="314" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three channels</text>
  <text x="1010" y="327" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">assistant, auto-map, Claude</text>
  <line x1="1000" y1="316.0" x2="625" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
</svg>

---

## What is kept \{#record\}

Each turn leaves one record: who, when, the channel, the page the question was asked from, the model, the tokens (read, written, read from and written to the cache), the time it took and how it ended. Each tool called during the turn is kept with its name, a summary of its input, its time, the size of its answer, whether it failed and why, and whether it saved a change.

**The question, the answer and what a tool returned are never kept.**

| Channel | One turn is |
|---|---|
| **In-app assistant** | A question asked in the assistant of the application. |
| **Mapping auto-map** | An auto-map run from the mapping editor. |
| **Claude (MCP)** | A tool called by a user's Claude client. No model and no tokens: they are those of the user's Claude plan. |

---

## The period in figures \{#figures\}

The period is **7 days**, **30 days** (default) or **90 days**.

| Tile | Shows |
|---|---|
| **Turns** | Turns over the period. |
| **Users** | Users with at least one turn. |
| **Tokens in** | Everything the model read, with the share read from the cache (*68 % cached*), billed at a fraction of the price. |
| **Tokens out** | What the model wrote. |
| **Tool calls** | Tools called, with the number that failed. |
| **Average turn** | Average time of a turn. |

Below the tiles, a bar chart gives the turns per day.

---

## Breakdowns \{#breakdowns\}

**Breakdown** switches the list:

| Choice | Rows and columns |
|---|---|
| **Turns** | The latest turns: When, User, Channel, Page, Model, Tokens in, Cached %, Tokens out, Tool calls, Tool failures, Time (s), Outcome, Tools. |
| **By user**, **By day**, **By channel**, **By model** | Turns, Tokens in, Cached %, Tokens out, Tool calls, Tool failures, Failed turns. |
| **By tool** | Calls, Failed, Changes, Average time (ms), Average answer (characters). |

The list sorts, filters and exports like the other lists of the application.

---

## One turn \{#turn\}

A click on a turn opens it: its outcome — *Answered*, *Failed*, *Stopped by the user* or *Cut short* (the answer reached its length limit) —, its time, its model and tokens, the page it was asked from, then one line per tool with the summary of its input, its time and the size of its answer. A tool that saved something is marked *saved a change*; a failed one shows its reason in red.

---

## How long it is kept \{#retention\}

90 days by default. **AI usage kept (days)**, in **Settings → Global → AI**, sets another duration.

---

## Tips & best practices

- **Read *By tool* after opening MCP.** The **Changes** column says which tools saved something, and **Failed** points at a missing grant or a question the tools cannot answer.
- **A low cached share on long conversations** means a prompt that changes at every turn: check the *System Prompt* and the custom playbooks.
- **Grant the view to those who follow the cost**, not only to administrators: it shows no question and no data of the instance.
