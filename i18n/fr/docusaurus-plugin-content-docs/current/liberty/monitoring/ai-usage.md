---
title: Usage de l'IA
description: "Surveillance → Usage de l'IA dans Liberty Next : qui utilise l'assistant IA, les jetons avec la part lue depuis le cache, les outils appelés et leurs échecs, la durée moyenne — par utilisateur, par jour, par modèle et par outil — et les dernières questions avec leurs appels d'outils. Ce qui est enregistré, ce qui ne l'est jamais, et la durée de conservation."
keywords: [Liberty Next, surveillance, usage de l'IA, assistant IA, jetons, cache, appels d'outils, audit, enregistrement d'usage, rétention, MCP]
---

# Usage de l'IA

**Surveillance → Usage de l'IA** montre l'utilisation de l'[assistant IA](../framework/ai-assistant.md) : qui pose des questions, combien de jetons elles coûtent, quels outils sont appelés et lesquels échouent. La vue est réservée aux superutilisateurs. Accès : **Liberty Next → Exploiter → Surveillance**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 514" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aiu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aiu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aiu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aiu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="474" rx="14" fill="url(#aiu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <rect x="240" y="62" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="276.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">En direct</text>
  <rect x="318" y="62" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="379.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <rect x="446" y="62" width="94" height="22" rx="5" fill="url(#aiu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="493.0" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Usage de l'IA</text>
  <rect x="546" y="62" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="582.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Rétention</text>
  <rect x="830" y="62" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="76.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">30 derniers jours ▾</text>
  <text x="240" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Enregistré : qui, modèle, jetons, outils — jamais la question, la réponse ni une ligne. Conservé 90 jours.</text>
  <rect x="240.0" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="252.0" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <rect x="361.3333333333333" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="373.3333333333333" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS</text>
  <text x="373.3333333333333" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <rect x="482.66666666666663" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="494.66666666666663" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS EN ENTRÉE</text>
  <text x="494.66666666666663" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9,6 M</text>
  <text x="494.66666666666663" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">71 % depuis le cache</text>
  <rect x="604.0" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS EN SORTIE</text>
  <text x="616.0" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">184 k</text>
  <rect x="725.3333333333333" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="737.3333333333333" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS D'OUTILS</text>
  <text x="737.3333333333333" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 038</text>
  <text x="737.3333333333333" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 en échec</text>
  <rect x="846.6666666666666" y="120" width="113.33333333333333" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="858.6666666666666" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE MOYENNE</text>
  <text x="858.6666666666666" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9,4 s</text>
  <text x="858.6666666666666" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">par question</text>
  <text x="240" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PAR UTILISATEUR</text>
  <rect x="240" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="360" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="430" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRÉE</text>
  <text x="500" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTILS</text>
  <rect x="240" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="360" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">148</text>
  <text x="430" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3,4 M</text>
  <text x="500" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">402</text>
  <rect x="240" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="360" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">96</text>
  <text x="430" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,1 M</text>
  <text x="500" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">233</text>
  <rect x="240" y="300" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="314.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="360" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">61</text>
  <text x="430" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,5 M</text>
  <text x="500" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">170</text>
  <text x="606.0" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PAR OUTIL</text>
  <rect x="606.0" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTIL</text>
  <text x="746.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS</text>
  <text x="806.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCHECS</text>
  <text x="866.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE MOY.</text>
  <rect x="606.0" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="746.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">522</text>
  <text x="806.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">7</text>
  <text x="866.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,2 s</text>
  <rect x="606.0" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">explorer_query</text>
  <text x="746.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">301</text>
  <text x="806.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="866.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0,9 s</text>
  <rect x="606.0" y="300" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">search_catalog</text>
  <text x="746.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">118</text>
  <text x="806.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <text x="866.0" y="314.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0,1 s</text>
  <text x="240" y="344" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DERNIÈRES QUESTIONS</text>
  <rect x="240" y="352" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND</text>
  <text x="358" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="442" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="530" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="640" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRÉE</text>
  <text x="710" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTILS</text>
  <text x="786" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE</text>
  <text x="846" y="367.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUE</text>
  <rect x="240" y="380" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:42</text>
  <text x="358" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="442" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="530" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">claude-sonnet-5-5</text>
  <text x="640" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24 310</text>
  <text x="710" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="786" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">8,1 s</text>
  <rect x="846" y="383.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="871.5" y="394.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="406" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:37</text>
  <text x="358" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="442" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="530" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">mcp</text>
  <text x="640" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="710" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="786" y="420.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,4 s</text>
  <rect x="846" y="409.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="871.5" y="420.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="432" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:31</text>
  <text x="358" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="442" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="530" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">claude-sonnet-5-5</text>
  <text x="640" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">31 902</text>
  <text x="710" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="786" y="446.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">14,6 s</text>
  <rect x="846" y="435.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="866.5" y="446.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Échec</text>
  <rect x="240" y="458" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">18/11 10:20</text>
  <text x="358" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="442" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="530" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">claude-sonnet-5-5</text>
  <text x="640" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12 004</text>
  <text x="710" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="786" y="472.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3,0 s</text>
  <rect x="846" y="461.0" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="876.0" y="472.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonné</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l'IA</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une vue de la page Surveillance</text>
  <line x1="200" y1="93.0" x2="476" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur un utilisateur</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtre les questions du bas</text>
  <line x1="200" y1="253.0" x2="250" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="398" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne se déplie</text>
  <text x="30" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur ses appels d'outils</text>
  <line x1="200" y1="415.0" x2="240" y2="393" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 ou 90 jours</text>
  <line x1="1000" y1="73.0" x2="960" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="136" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La période en chiffres</text>
  <text x="1010" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">questions, jetons, outils, durée</text>
  <line x1="1000" y1="153.0" x2="962" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="406" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="421" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle : mcp</text>
  <text x="1010" y="434" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appel d'un client externe</text>
  <line x1="1000" y1="423.0" x2="962" y2="417" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
</svg>

---

## Ce qui est enregistré \{#record\}

Chaque question posée à l'assistant laisse un enregistrement : qui l'a posée, depuis la page de quelle application, le modèle, les jetons (entrée, sortie, lus depuis le cache et écrits dans le cache), la durée et l'issue. Chaque appel d'outil de la question est conservé avec son nom, ce sur quoi il a porté (le connecteur et la requête, le modèle, les mots-clés), son échec éventuel et sa cause, sa taille et sa durée.

**La question, la réponse et les lignes renvoyées par un outil ne sont jamais enregistrées.** Une question abandonnée en cours de route est enregistrée avec ce qui s'était passé jusque-là. Un appel venu d'un client externe est enregistré de la même façon, avec le modèle `mcp` — voir [Connecter Claude (MCP)](../framework/mcp.md).

---

## La période en chiffres \{#figures\}

La période est **7 derniers jours**, **30 derniers jours** (par défaut) ou **90 derniers jours**.

| Tuile | Contenu |
|---|---|
| **Questions** | Les questions posées sur la période. |
| **Utilisateurs** | Les utilisateurs qui en ont posé au moins une. |
| **Jetons en entrée** | Les jetons d'entrée, avec la part lue depuis le cache (*71 % depuis le cache*) : la partie d'une conversation renvoyée à chaque appel d'outil est lue depuis le cache, à un tarif réduit. |
| **Jetons en sortie** | Les jetons de sortie. |
| **Appels d'outils** | Les outils appelés, avec le nombre d'échecs. |
| **Durée moyenne par question** | De la question à la fin de la réponse. |

---

## Répartitions \{#breakdowns\}

| Tableau | Colonnes |
|---|---|
| **Par utilisateur**, **Par jour**, **Par modèle** | Questions, Jetons en entrée, Depuis le cache, Jetons en sortie, Appels d'outils. |
| **Par outil** | Appels, Échecs, Durée moyenne, Taille moyenne. |

Un clic sur un utilisateur limite les questions du bas aux siennes (*Questions de …*).

---

## Dernières questions \{#recent\}

Une ligne par question : Quand, Utilisateur, Application, Modèle, Jetons en entrée, Depuis le cache, Jetons en sortie, Appels d'outils, Durée et **Issue** — *Répondu*, *Échec* ou *Abandonné*. Une ligne se déplie sur ses appels d'outils, chacun avec sa taille en caractères et sa durée.

---

## Durée de conservation \{#retention\}

**Enregistrement d'usage conservé (jours ; 0 = sans limite)**, dans Liberty Next → Administrer → App → Assistant IA, vaut 90 par défaut. Les questions plus anciennes sont supprimées avec le nettoyage des notifications, et le stockage figure sous **Usage de l'IA** dans la vue [Rétention](./retention.md), avec son nombre de questions, **Aperçu** et **Purger**.

---

## Conseils \{#tips\}

- Un outil souvent en échec signale une permission manquante ou une requête dont la description égare l'assistant : déplier les appels d'outils de la question pour en lire la cause.
- Un utilisateur avec beaucoup de questions et peu d'appels d'outils demande sans doute ce que l'assistant ne peut pas atteindre : vérifier les permissions `sql:` et `explorer:` du rôle.
- Les mêmes chiffres sont servis par `GET /admin/ai-usage` pour un rapport externe.
