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

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#nau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostics</text>
  <rect x="240" y="62" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="301.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Integration errors</text>
  <rect x="368" y="62" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="418.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing log</text>
  <rect x="474" y="62" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="507.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Failures</text>
  <rect x="546" y="62" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="585.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Server log</text>
  <rect x="630" y="62" width="66" height="22" rx="5" fill="url(#nau-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="663.0" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AI usage</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="104" width="183" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="268.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">7 days</text>
  <rect x="298" y="105" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="328.5" y="119.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 days</text>
  <line x1="360" y1="109" x2="360" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="391.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">90 days</text>
  <text x="435" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Who, model, tokens and tools — never the question or the answer. Kept 90 days.</text>
  <rect x="240.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TURNS</text>
  <text x="252.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">286</text>
  <rect x="361.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="373.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="373.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="494.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="494.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">6.4 M</text>
  <text x="494.0" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">68 % cached</text>
  <rect x="603.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="615.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS OUT</text>
  <text x="615.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">121 k</text>
  <rect x="724.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="736.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOL CALLS</text>
  <text x="736.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">742</text>
  <text x="736.0" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">9 failed</text>
  <rect x="845.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="857.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AVERAGE TURN</text>
  <text x="857.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">7.8 s</text>
  <rect x="244.3" y="260.0" width="15.4" height="18.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="268.3" y="251.0" width="15.4" height="27.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="292.3" y="242.0" width="15.4" height="36.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="316.3" y="254.0" width="15.4" height="24.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="340.3" y="269.0" width="15.4" height="9.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="364.3" y="272.0" width="15.4" height="6.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="388.3" y="245.0" width="15.4" height="33.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="412.3" y="236.0" width="15.4" height="42.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="436.3" y="248.0" width="15.4" height="30.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="460.3" y="239.0" width="15.4" height="39.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="484.3" y="251.0" width="15.4" height="27.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="508.3" y="266.0" width="15.4" height="12.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="532.3" y="275.0" width="15.4" height="3.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="556.3" y="242.0" width="15.4" height="36.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="580.3" y="233.0" width="15.4" height="45.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="604.3" y="245.0" width="15.4" height="33.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="628.3" y="251.0" width="15.4" height="27.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="652.3" y="239.0" width="15.4" height="39.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="676.3" y="263.0" width="15.4" height="15.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="700.3" y="272.0" width="15.4" height="6.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="724.3" y="248.0" width="15.4" height="30.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="748.3" y="236.0" width="15.4" height="42.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="772.3" y="242.0" width="15.4" height="36.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="796.3" y="230.0" width="15.4" height="48.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="820.3" y="245.0" width="15.4" height="33.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="844.3" y="269.0" width="15.4" height="9.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="868.3" y="272.0" width="15.4" height="6.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="892.3" y="239.0" width="15.4" height="39.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="916.3" y="242.0" width="15.4" height="36.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="940.3" y="251.0" width="15.4" height="27.0" fill="#a78bfa" fillOpacity="0.85"/>
  <rect x="240" y="296" width="383" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="297" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="311.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Turns</text>
  <line x1="292" y1="301" x2="292" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="323.5" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By user</text>
  <line x1="355" y1="301" x2="355" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="383.5" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By day</text>
  <line x1="412" y1="301" x2="412" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="452.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By channel</text>
  <line x1="492" y1="301" x2="492" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="526.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By model</text>
  <line x1="560" y1="301" x2="560" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="591.5" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">By tool</text>
  <rect x="240" y="330" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN</text>
  <text x="354" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="432" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANNEL</text>
  <text x="556" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODEL</text>
  <text x="680" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOKENS IN</text>
  <text x="758" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOLS</text>
  <text x="814" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTCOME</text>
  <rect x="240" y="358" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:42</text>
  <text x="354" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="432" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">In-app assistant</text>
  <text x="556" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="680" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24 310</text>
  <text x="758" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <rect x="814" y="361.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="842.0" y="372.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="384" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:37</text>
  <text x="354" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="432" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Claude (MCP)</text>
  <text x="556" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="680" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="758" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="814" y="387.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="842.0" y="398.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Answered</text>
  <rect x="240" y="410" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:20</text>
  <text x="354" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="432" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Mapping auto-map</text>
  <text x="556" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="680" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">58 204</text>
  <text x="758" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <rect x="814" y="413.0" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="844.0" y="424.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Cut short</text>
  <rect x="240" y="436" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 09:58</text>
  <text x="354" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="432" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">In-app assistant</text>
  <text x="556" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="680" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">31 902</text>
  <text x="758" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <rect x="814" y="439.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="837.0" y="450.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failed</text>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage view</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">granted per role</text>
  <line x1="1000" y1="73.0" x2="698" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="99" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="114" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="127" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 or 90 days</text>
  <line x1="200" y1="116.0" x2="240" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="291" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="306" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Breakdown</text>
  <text x="30" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">turns, user, day, channel…</text>
  <line x1="200" y1="308.0" x2="240" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="370" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a turn</text>
  <text x="30" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens its tool calls</text>
  <line x1="200" y1="387.0" x2="240" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="156" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="171" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The period in figures</text>
  <text x="1010" y="184" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">turns, tokens, tools, time</text>
  <line x1="1000" y1="173.0" x2="962" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Turns per day</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">over the period</text>
  <line x1="1000" y1="245.0" x2="962" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="291" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="306" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three channels</text>
  <text x="1010" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">assistant, auto-map, Claude</text>
  <line x1="1000" y1="308.0" x2="625" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
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
