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

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#nau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostic</text>
  <rect x="240" y="62" width="139" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="309.5" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <rect x="385" y="62" width="150" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="460.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal des traitements</text>
  <rect x="541" y="62" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="577.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Anomalies</text>
  <rect x="619" y="62" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="672.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal serveur</text>
  <rect x="731" y="62" width="128" height="22" rx="5" fill="url(#nau-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="795.0" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Utilisation de l'IA</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="104" width="199" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">7 jours</text>
  <rect x="304" y="105" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="337.0" y="119.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 jours</text>
  <line x1="371" y1="109" x2="371" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="405.0" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">90 jours</text>
  <text x="451" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Qui, modèle, jetons et outils — jamais la question ni la réponse. Conservé 90 jours.</text>
  <rect x="240.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOURS</text>
  <text x="252.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">286</text>
  <rect x="361.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="373.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS</text>
  <text x="373.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="494.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS LUS</text>
  <text x="494.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">6,4 M</text>
  <text x="494.0" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">68 % en cache</text>
  <rect x="603.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="615.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS ÉCRITS</text>
  <text x="615.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">121 k</text>
  <rect x="724.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="736.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS D'OUTILS</text>
  <text x="736.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">742</text>
  <text x="736.0" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">9 en échec</text>
  <rect x="845.0" y="140" width="115.0" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="857.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE D'UN TOUR</text>
  <text x="857.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">7,8 s</text>
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
  <rect x="240" y="296" width="456" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="297" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="311.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tours</text>
  <line x1="292" y1="301" x2="292" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="346.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par utilisateur</text>
  <line x1="400" y1="301" x2="400" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par jour</text>
  <line x1="468" y1="301" x2="468" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="505.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par canal</text>
  <line x1="542" y1="301" x2="542" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="582.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par modèle</text>
  <line x1="622" y1="301" x2="622" y2="315" stroke="#334155" strokeWidth="1"/>
  <text x="659.0" y="311.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Par outil</text>
  <rect x="240" y="330" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND</text>
  <text x="354" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="432" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CANAL</text>
  <text x="556" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="680" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS LUS</text>
  <text x="758" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTILS</text>
  <text x="814" y="345.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUE</text>
  <rect x="240" y="358" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:42</text>
  <text x="354" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="432" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Assistant intégré</text>
  <text x="556" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="680" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24 310</text>
  <text x="758" y="372.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <rect x="814" y="361.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="839.5" y="372.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="384" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:37</text>
  <text x="354" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="432" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Claude (MCP)</text>
  <text x="556" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="680" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="758" y="398.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="814" y="387.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="839.5" y="398.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="410" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:20</text>
  <text x="354" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="432" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Mapping automatique</text>
  <text x="556" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="680" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">58 204</text>
  <text x="758" y="424.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <rect x="814" y="413.0" width="94" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="861.0" y="424.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Réponse tronquée</text>
  <rect x="240" y="436" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 09:58</text>
  <text x="354" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="432" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Assistant intégré</text>
  <text x="556" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="680" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">31 902</text>
  <text x="758" y="450.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <rect x="814" y="439.0" width="56" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="842.0" y="450.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En échec</text>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue Utilisation de l'IA</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accordée par rôle</text>
  <line x1="1000" y1="73.0" x2="861" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="99" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="114" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="127" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 ou 90 jours</text>
  <line x1="200" y1="116.0" x2="240" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="291" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="306" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Répartition</text>
  <text x="30" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tours, utilisateur, jour, canal…</text>
  <line x1="200" y1="308.0" x2="240" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="20" y="370" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur un tour</text>
  <text x="30" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre ses appels d'outils</text>
  <line x1="200" y1="387.0" x2="240" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="156" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="171" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La période en chiffres</text>
  <text x="1010" y="184" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tours, jetons, outils, durée</text>
  <line x1="1000" y1="173.0" x2="962" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tours par jour</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur la période</text>
  <line x1="1000" y1="245.0" x2="962" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
  <rect x="1000" y="291" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="306" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois canaux</text>
  <text x="1010" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">assistant, mapping, Claude</text>
  <line x1="1000" y1="308.0" x2="698" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nau-arrow)"/>
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
