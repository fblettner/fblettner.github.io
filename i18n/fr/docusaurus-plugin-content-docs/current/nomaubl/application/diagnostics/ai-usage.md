---
title: Utilisation de l'IA
description: "La vue Utilisation de l'IA du Diagnostic de NomaUBL montre à quoi ont servi l'assistant intégré, le mapping automatique et Claude (MCP) : tours, utilisateurs, jetons avec la part lue depuis le cache, appels d'outils et échecs — par utilisateur, jour, canal, modèle et outil — et chaque tour avec ses outils. Ce qui est conservé, ce qui ne l'est jamais, et pendant combien de temps."
keywords: [NomaUBL, utilisation de l'IA, diagnostic, assistant IA, Claude, MCP, mapping automatique, jetons, cache, appels d'outils, audit, rétention, JD Edwards, SAP, NetSuite, ERP spécifique]
---

# Utilisation de l'IA

La vue **Utilisation de l'IA** du [Diagnostic](./overview.md) montre à quoi l'IA a servi sur l'instance, pour qui, et pour quel coût en jetons. Elle couvre les trois accès à l'IA : l'[assistant intégré](../ai-capabilities.md), le mapping automatique de l'[éditeur de mapping](../../ubl-tools/xsl-editor.md) et [Claude connecté en MCP](../claude-mcp.md).

Accès : **Diagnostic → Utilisation de l'IA**. La vue s'accorde par rôle, sous le nom **Vue Utilisation de l'IA** ([Rôles](../../configuration/security/roles.md)).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="460" rx="14" fill="url(#nau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostic</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Erreurs, échecs et journaux de l'instance.</text>
  <rect x="240.0" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247.0" y="92" width="16" height="16" rx="5" fill="#f87171" fillOpacity="0.18"/>
  <text x="269.0" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <text x="269.0" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Constats de validation et …</text>
  <rect x="385.2" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="392.2" y="92" width="16" height="16" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="414.2" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Journal des traitements</text>
  <text x="414.2" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Chaque exécution avec ses …</text>
  <rect x="530.4" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="537.4" y="92" width="16" height="16" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="559.4" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Anomalies</text>
  <text x="559.4" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Tous les échecs non résolu …</text>
  <rect x="675.6" y="80" width="139.2" height="40" rx="8" fill="#ffffff" fillOpacity="0.01" stroke="#1f2937" strokeWidth="1"/>
  <rect x="682.6" y="92" width="16" height="16" rx="5" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="704.6" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Journal serveur</text>
  <text x="704.6" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Le journal du serveur, par …</text>
  <rect x="820.8" y="80" width="139.2" height="40" rx="8" fill="#a78bfa" fillOpacity="0.1" stroke="#a78bfa" strokeWidth="1.4"/>
  <rect x="827.8" y="92" width="16" height="16" rx="5" fill="#a78bfa" fillOpacity="0.18"/>
  <text x="849.8" y="97" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisation de l'IA</text>
  <text x="849.8" y="111" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">L'assistant et Claude : qu …</text>
  <rect x="240" y="134" width="199" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271.5" y="149.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">7 jours</text>
  <rect x="304" y="135" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="337.0" y="149.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 jours</text>
  <line x1="371" y1="139" x2="371" y2="153" stroke="#334155" strokeWidth="1"/>
  <text x="405.0" y="149.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">90 jours</text>
  <text x="451" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Qui, modèle, jetons et outils — jamais la question ni la réponse. Conservé 90 jours.</text>
  <rect x="240.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246.0" y="168" width="103.0" height="2" rx="1" fill="#4a9eff"/>
  <text x="248.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Tours</text>
  <text x="248.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">286</text>
  <rect x="361.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="367.0" y="168" width="103.0" height="2" rx="1" fill="#4ade80"/>
  <text x="369.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="369.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="488.0" y="168" width="103.0" height="2" rx="1" fill="#fb923c"/>
  <text x="490.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Jetons lus · 68 % en cache</text>
  <text x="490.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">812.6k</text>
  <rect x="603.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="609.0" y="168" width="103.0" height="2" rx="1" fill="#a78bfa"/>
  <text x="611.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Jetons écrits</text>
  <text x="611.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">121.3k</text>
  <rect x="724.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="730.0" y="168" width="103.0" height="2" rx="1" fill="#f87171"/>
  <text x="732.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Appels d'outils · 9 en échec</text>
  <text x="732.0" y="211" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">742</text>
  <rect x="845.0" y="168" width="115.0" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="851.0" y="168" width="103.0" height="2" rx="1" fill="#7dd3fc"/>
  <text x="853.0" y="187" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Durée moyenne d'un tour</text>
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
  <rect x="240" y="304" width="456" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="305" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="319.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tours</text>
  <line x1="292" y1="309" x2="292" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="346.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par utilisateur</text>
  <line x1="400" y1="309" x2="400" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par jour</text>
  <line x1="468" y1="309" x2="468" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="505.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par canal</text>
  <line x1="542" y1="309" x2="542" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="582.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par modèle</text>
  <line x1="622" y1="309" x2="622" y2="323" stroke="#334155" strokeWidth="1"/>
  <text x="659.0" y="319.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par outil</text>
  <rect x="240" y="338" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND</text>
  <text x="362" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="436" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CANAL</text>
  <text x="554" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAGE</text>
  <text x="610" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="722" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS LUS</text>
  <text x="790" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTILS</text>
  <text x="840" y="353.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUE</text>
  <rect x="240" y="366" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 10:42</text>
  <text x="362" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">alice</text>
  <text x="436" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">Assistant intégré</text>
  <text x="554" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">errors</text>
  <text x="610" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">claude-sonnet-5-5</text>
  <text x="722" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">40382</text>
  <text x="790" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">7</text>
  <text x="840" y="380.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="392" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 10:37</text>
  <text x="362" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">bruno</text>
  <text x="436" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">Claude (MCP)</text>
  <text x="554" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="610" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="722" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">0</text>
  <text x="790" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">1</text>
  <text x="840" y="406.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="418" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 10:20</text>
  <text x="362" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">chloe</text>
  <text x="436" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">Mapping automatique</text>
  <text x="554" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="610" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">claude-sonnet-5-5</text>
  <text x="722" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">58204</text>
  <text x="790" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">0</text>
  <text x="840" y="432.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Réponse tronquée</text>
  <rect x="240" y="444" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">2026-11-19 09:58</text>
  <text x="362" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">alice</text>
  <text x="436" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">Assistant intégré</text>
  <text x="554" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">invoices</text>
  <text x="610" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">claude-sonnet-5-5</text>
  <text x="722" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">31902</text>
  <text x="790" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="ui-monospace, monospace">5</text>
  <text x="840" y="458.5" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">En échec</text>
  <rect x="20" y="129" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 ou 90 jours</text>
  <line x1="200" y1="146.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="299" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="314" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Répartition</text>
  <text x="30" y="327" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tours, utilisateur, jour, canal…</text>
  <line x1="200" y1="316.0" x2="240" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="376" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur un tour</text>
  <text x="30" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre ses appels d'outils</text>
  <line x1="200" y1="393.0" x2="240" y2="377" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="83" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue Utilisation de l'IA</text>
  <text x="1010" y="111" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accordée par rôle</text>
  <line x1="1000" y1="100.0" x2="962.0" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La période en chiffres</text>
  <text x="1010" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tours, jetons, outils, durée</text>
  <line x1="1000" y1="195.0" x2="962" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tours par jour</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur la période</text>
  <line x1="1000" y1="257.0" x2="962" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="299" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="314" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois canaux</text>
  <text x="1010" y="327" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">assistant, mapping, Claude</text>
  <line x1="1000" y1="316.0" x2="698" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
</svg>

---

## Ce qui est conservé \{#record\}

Chaque tour laisse un enregistrement : l'utilisateur, la date, le canal, la page d'où la question a été posée, le modèle, les jetons (lus, écrits, lus depuis le cache et écrits dans le cache), la durée et l'issue. Chaque outil appelé pendant le tour est conservé avec son nom, un résumé de son entrée, sa durée, la taille de sa réponse, son échec éventuel avec sa cause, et l'indication d'une modification enregistrée.

**La question, la réponse et ce qu'un outil a renvoyé ne sont jamais conservés.**

| Canal | Un tour correspond à |
|---|---|
| **Assistant intégré** | Une question posée dans l'assistant de l'application. |
| **Mapping automatique** | Un mapping automatique lancé depuis l'éditeur de mapping. |
| **Claude (MCP)** | Un outil appelé par le client Claude d'un utilisateur. Ni modèle ni jetons : ils dépendent de l'abonnement Claude de l'utilisateur. |

---

## La période en chiffres \{#figures\}

La période est **7 jours**, **30 jours** (par défaut) ou **90 jours**.

| Tuile | Contenu |
|---|---|
| **Tours** | Les tours de la période. |
| **Utilisateurs** | Les utilisateurs qui ont au moins un tour. |
| **Jetons lus** | Tout ce que le modèle a lu, avec la part lue depuis le cache (*68 % en cache*), facturée à une fraction du prix. |
| **Jetons écrits** | Ce que le modèle a écrit. |
| **Appels d'outils** | Les outils appelés, avec le nombre d'échecs. |
| **Durée moyenne d'un tour** | La durée moyenne d'un tour. |

Sous les tuiles, un histogramme donne les tours par jour.

---

## Répartitions \{#breakdowns\}

**Répartition** change la liste affichée :

| Choix | Lignes et colonnes |
|---|---|
| **Tours** | Les derniers tours : Quand, Utilisateur, Canal, Page, Modèle, Jetons lus, En cache %, Jetons écrits, Appels d'outils, Outils en échec, Durée (s), Issue, Outils. |
| **Par utilisateur**, **Par jour**, **Par canal**, **Par modèle** | Tours, Jetons lus, En cache %, Jetons écrits, Appels d'outils, Outils en échec, Tours en échec. |
| **Par outil** | Appels, En échec, Modifications, Durée moyenne (ms), Réponse moyenne (caractères). |

La liste se trie, se filtre et s'exporte comme les autres listes de l'application.

---

## Détail d'un tour \{#turn\}

Un clic sur un tour l'ouvre : son issue — *Répondu*, *En échec*, *Arrêté par l'utilisateur* ou *Réponse tronquée* (la réponse a atteint sa longueur maximale) —, sa durée, son modèle et ses jetons, la page d'où il a été lancé, puis une ligne par outil avec le résumé de son entrée, sa durée et la taille de sa réponse. Un outil qui a enregistré quelque chose porte la mention *modification enregistrée* ; un outil en échec affiche sa cause en rouge.

---

## Durée de conservation \{#retention\}

90 jours par défaut. **AI usage kept (days)**, dans **Paramètres → Global → AI**, fixe une autre durée.

---

## Conseils & bonnes pratiques

- **Consulter *Par outil* après l'ouverture de MCP.** La colonne **Modifications** indique les outils qui ont enregistré quelque chose, et **En échec** signale un droit manquant ou une question hors de portée des outils.
- **Une faible part en cache sur de longues conversations** révèle une consigne qui change à chaque tour : vérifier le *System Prompt* et les procédures personnalisées.
- **Accorder la vue aux personnes qui suivent les coûts**, pas seulement aux administrateurs : elle n'affiche ni question ni donnée de l'instance.
