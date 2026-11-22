---
title: Usage de l'IA
description: "Surveillance → Usage de l'IA dans Liberty Next : qui utilise l'assistant IA, le coût estimé, les jetons avec la part lue depuis le cache, les outils appelés et leurs échecs — par utilisateur, jour, modèle, canal et outil —, les modifications faites par l'assistant, et la dernière activité avec ses appels d'outils. Ce qui est enregistré, ce qui ne l'est jamais, et la durée de conservation."
keywords: [Liberty Next, surveillance, usage de l'IA, assistant IA, jetons, cache, appels d'outils, audit, enregistrement d'usage, rétention, MCP]
---

# Usage de l'IA

**Surveillance → Usage de l'IA** montre l'utilisation de l'[assistant IA](../framework/ai-assistant.md) : qui pose des questions, ce qu'elles coûtent, quels outils sont appelés et lesquels échouent, et ce qui a été modifié par son intermédiaire. La vue est réservée aux superutilisateurs. Accès : **Liberty Next → Exploiter → Surveillance**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 713" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="673" rx="14" fill="url(#monai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En direct</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisateurs connectés, verrous, p…</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Le fichier journal : recherche, ex…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l’IA</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Qui utilise l’assistant, les jeton…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rétention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que garde chaque stockage, sa t…</text>
  <rect x="236" y="126" width="140" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">30 derniers jours</text>
  <text x="364" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="386" y="142" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Enregistré : qui, modèle, jetons, outils — jamais la question, la réponse ni une ligne. Conservé 90 jours.</text>
  <rect x="1014" y="126" width="70" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger</text>
  <rect x="236.0" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246.0" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <text x="246.0" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Questions</text>
  <rect x="358.2857142857143" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="368.2857142857143" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <text x="368.2857142857143" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <rect x="480.57142857142856" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490.57142857142856" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">38,20 $</text>
  <text x="490.57142857142856" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Coût estimé, au prix</text>
  <text x="490.57142857142856" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">public</text>
  <rect x="602.8571428571429" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="612.8571428571429" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">9.60 M</text>
  <text x="612.8571428571429" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Jetons en entrée · 71 %</text>
  <text x="612.8571428571429" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">depuis le cache</text>
  <rect x="725.1428571428571" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.1428571428571" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">184 k</text>
  <text x="735.1428571428571" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Jetons en sortie</text>
  <rect x="847.4285714285714" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="857.4285714285714" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">1038</text>
  <text x="857.4285714285714" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Appels d’outils · 12 en</text>
  <text x="857.4285714285714" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">échec</text>
  <rect x="969.7142857142858" y="160" width="114.28571428571429" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="979.7142857142858" y="182" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="979.7142857142858" y="195" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Modifications faites</text>
  <text x="979.7142857142858" y="205" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">par l’assistant</text>
  <text x="248" y="242" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par utilisateur</text>
  <text x="248" y="260" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <text x="390" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Questions</text>
  <text x="444" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Entrée</text>
  <text x="496" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cache</text>
  <text x="548" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Sortie</text>
  <text x="598" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Coût</text>
  <line x1="236" y1="266" x2="654.0" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="280" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="390" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">148</text>
  <text x="444" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3.40 M</text>
  <text x="496" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">72 %</text>
  <text x="548" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">61 k</text>
  <text x="598" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14,10 $</text>
  <line x1="242" y1="286" x2="648.0" y2="286" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="300" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="390" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">96</text>
  <text x="444" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2.10 M</text>
  <text x="496" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">68 %</text>
  <text x="548" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">44 k</text>
  <text x="598" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9,85 $</text>
  <line x1="242" y1="306" x2="648.0" y2="306" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="224" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="242" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par jour</text>
  <text x="678.0" y="260" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Jour</text>
  <text x="820.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Questions</text>
  <text x="874.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Entrée</text>
  <text x="926.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cache</text>
  <text x="978.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Sortie</text>
  <text x="1028.0" y="260" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Coût</text>
  <line x1="666.0" y1="266" x2="1084.0" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="280" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <text x="820.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">42</text>
  <text x="874.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1.10 M</text>
  <text x="926.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">80 %</text>
  <text x="978.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 k</text>
  <text x="1028.0" y="280" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4,17 $</text>
  <line x1="672.0" y1="286" x2="1078.0" y2="286" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="300" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20</text>
  <text x="820.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">89</text>
  <text x="874.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1.90 M</text>
  <text x="926.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">82 %</text>
  <text x="978.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">28 k</text>
  <text x="1028.0" y="300" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">7,64 $</text>
  <line x1="672.0" y1="306" x2="1078.0" y2="306" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="224" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="340" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par modèle</text>
  <text x="312.52" y="340" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">les questions du chat</text>
  <text x="248" y="358" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Modèle</text>
  <text x="390" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Questions</text>
  <text x="444" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Entrée</text>
  <text x="496" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Cache</text>
  <text x="548" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Sortie</text>
  <text x="598" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Coût</text>
  <line x1="236" y1="364" x2="654.0" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="378" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">claude-sonnet-4-5</text>
  <text x="390" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">380</text>
  <text x="444" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8.90 M</text>
  <text x="496" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">71 %</text>
  <text x="548" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">170 k</text>
  <text x="598" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">36,90 $</text>
  <line x1="242" y1="384" x2="648.0" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="322" width="418.0" height="68" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="340" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par canal</text>
  <text x="678.0" y="358" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Canal</text>
  <text x="864.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Entrées</text>
  <text x="926.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Appels</text>
  <text x="976.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Échecs</text>
  <text x="1026.0" y="358" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Coût</text>
  <line x1="666.0" y1="364" x2="1084.0" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="378" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">Chat Liberty</text>
  <text x="864.0" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">412</text>
  <text x="926.0" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">802</text>
  <text x="976.0" y="378" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="1026.0" y="378" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">38,20 $</text>
  <line x1="672.0" y1="384" x2="1078.0" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="398" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">Client externe (MCP)</text>
  <text x="864.0" y="398" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">236</text>
  <text x="926.0" y="398" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">236</text>
  <text x="976.0" y="398" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <text x="1026.0" y="398" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <line x1="672.0" y1="404" x2="1078.0" y2="404" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="322" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="438" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par outil</text>
  <text x="248" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Outil</text>
  <text x="414" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Appels</text>
  <text x="466" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Échecs</text>
  <text x="546" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Durée moy.</text>
  <text x="616" y="456" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Taille moy.</text>
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
  <text x="678.0" y="438" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifications faites par l’assistant</text>
  <text x="678.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Quand</text>
  <text x="752.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <text x="812.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Canal</text>
  <text x="892.0" y="456" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Quoi</text>
  <line x1="666.0" y1="462" x2="1084.0" y2="462" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:44</text>
  <text x="752.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="812.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Carte appliquée</text>
  <text x="892.0" y="476" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">screen_write crm/orders</text>
  <line x1="672.0" y1="482" x2="1078.0" y2="482" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 09:12</text>
  <text x="752.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="812.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MCP</text>
  <text x="892.0" y="496" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">job_run load_prices</text>
  <line x1="672.0" y1="502" x2="1078.0" y2="502" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="420" width="418.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="538" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière activité</text>
  <rect x="830" y="526" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="540.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Tous les canaux</text>
  <text x="958" y="540.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="984" y="532" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1001" y="541" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Échecs seulement</text>
  <text x="248" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif"></text>
  <text x="262" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Quand</text>
  <text x="352" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <text x="414" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="484" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Modèle</text>
  <text x="682" y="562" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Entrée</text>
  <text x="738" y="562" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Appels</text>
  <text x="794" y="562" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Durée</text>
  <text x="800" y="562" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Issue</text>
  <line x1="236" y1="568" x2="1084" y2="568" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:44</text>
  <text x="352" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="414" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="484" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Carte appliquée</text>
  <text x="682" y="583" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <text x="738" y="583" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="794" y="583" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0.4 s</text>
  <text x="800" y="583" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Appliquée</text>
  <line x1="242" y1="589" x2="1078" y2="589" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:42</text>
  <text x="352" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="414" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="484" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">claude-sonnet-4-5</text>
  <text x="682" y="604" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">57 k</text>
  <text x="738" y="604" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <text x="794" y="604" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8.1 s</text>
  <text x="800" y="604" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Répondu</text>
  <line x1="242" y1="610" x2="1078" y2="610" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="262" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21 10:37</text>
  <text x="352" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="414" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="484" y="625" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Client externe (MCP)</text>
  <text x="682" y="625" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <text x="738" y="625" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <text x="794" y="625" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2.6 s</text>
  <text x="800" y="625" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">1 en échec</text>
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
  <text x="800" y="667" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Limite de tours</text>
  <line x1="242" y1="673" x2="1078" y2="673" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="518" width="848" height="161" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l’IA</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une vue de la Surveillance</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 ou 90 jours</text>
  <line x1="200" y1="167.0" x2="236" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur un utilisateur</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">restreint la dernière activité</text>
  <line x1="200" y1="307.0" x2="236" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une série d'appels MCP</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne, ses appels à l'ouverture</text>
  <line x1="200" y1="577.0" x2="248" y2="621" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sept chiffres</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">coût estimé en dollars</text>
  <line x1="1120" y1="137.0" x2="1084" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Canaux</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic filtre la liste</text>
  <line x1="1120" y1="317.0" x2="1084" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui a modifié quoi</text>
  <text x="1130" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écran, enregistrement, tâche</text>
  <line x1="1120" y1="427.0" x2="1084" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
  <rect x="1120" y="520" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="535" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1130" y="548" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un canal, les échecs</text>
  <line x1="1120" y1="537.0" x2="1084" y2="537" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monai-arrow)"/>
</svg>

---

## Ce qui est enregistré \{#record\}

Chaque question posée à l'assistant laisse un enregistrement : qui l'a posée, depuis la page de quelle application, le modèle, les jetons (entrée, sortie, lus depuis le cache et écrits dans le cache), la durée et l'issue. Chaque appel d'outil de la question est conservé avec son nom, ce sur quoi il a porté (le connecteur et la requête, le modèle, les mots-clés, l'écran et la clé de l'enregistrement), son échec éventuel et sa cause, sa taille et sa durée.

**La question, la réponse, les lignes renvoyées par un outil et les valeurs écrites ne sont jamais enregistrées.** Une question abandonnée en cours de route est enregistrée avec ce qui s'était passé jusque-là.

Trois **canaux** alimentent l'enregistrement :

| Canal | Une entrée correspond à |
|---|---|
| **Chat Liberty** | Une question posée dans le panneau de l'assistant, avec son modèle et ses jetons. |
| **Client externe (MCP)** | Un outil appelé par un client Claude — voir [Connecter Claude (MCP)](../framework/mcp.md). Ni modèle ni jetons : ils sont ceux du client. |
| **Carte appliquée** | Une carte appliquée par l'utilisateur dans le panneau : un enregistrement écrit, une action ou une tâche lancée — voir [Écrire par un écran](../framework/ai-assistant.md#write). |

---

## La période en chiffres \{#figures\}

La période est **7 derniers jours**, **30 derniers jours** (par défaut) ou **90 derniers jours**, choisie en haut à gauche ; à côté, une ligne rappelle ce qui est enregistré et la durée de conservation, et **Recharger** relit les chiffres.

| Tuile | Contenu |
|---|---|
| **Questions** | Les entrées de la période. |
| **Utilisateurs** | Les utilisateurs qui en ont au moins une. |
| **Coût estimé, au prix public** | Le coût des jetons des questions du chat au prix public d'Anthropic, en dollars américains écrits dans la langue du lecteur (*38,20 $*). Un modèle sans prix connu est écarté du calcul et nommé (*hors … (pas de prix connu)*). |
| **Jetons en entrée** | Les jetons d'entrée, avec la part lue depuis le cache (*71 % depuis le cache*) : la partie d'une conversation renvoyée à chaque appel d'outil est lue depuis le cache, à un tarif réduit. |
| **Jetons en sortie** | Les jetons de sortie. |
| **Appels d'outils** | Les outils appelés, avec le nombre d'échecs. |
| **Modifications faites par l'assistant** | Leur nombre sur la période — voir [plus bas](#changes). |

Le coût est une estimation : les prix sont les prix publics connus de la version installée, et le contrat de la clé d'API de l'installation peut s'en écarter. Un appel en MCP ne coûte rien à l'installation : il n'a pas de jetons ici.

---

## Répartitions \{#breakdowns\}

Six panneaux, deux par ligne :

| Panneau | Colonnes |
|---|---|
| **Par utilisateur**, **Par jour** | Questions, Jetons en entrée, Depuis le cache, Jetons en sortie, Coût. |
| **Par modèle** — *les questions du chat* | Les mêmes colonnes, une ligne par modèle ayant répondu à une question. |
| **Par canal** | Entrées, Appels d'outils, Échecs, Coût — le coût pour le *Chat Liberty* seulement. |
| **Par outil** | Appels, Échecs, Durée moyenne, Taille moyenne. |
| **Modifications faites par l'assistant** | Quand, Utilisateur, Canal, Quoi. |

Un clic sur un utilisateur limite les questions du bas aux siennes (*Questions de …*) ; un clic sur un canal les limite à ce canal.

---

## Modifications faites par l'assistant \{#changes\}

Le panneau liste ce qui a été modifié par l'intermédiaire de l'assistant sur la période, du plus récent au plus ancien, 200 au plus — *cartes appliquées, et outils d'écriture appelés en MCP* :

| Colonne | Contenu |
|---|---|
| **Quand**, **Utilisateur** | L'auteur de la modification et sa date. |
| **Canal** | *Carte appliquée* pour une carte du panneau, *Client externe (MCP)* pour un outil appelé par un client Claude. |
| **Quoi** | L'outil, puis l'écran et l'opération ou l'action avec la clé de l'enregistrement, ou la tâche ; en rouge avec son motif quand la modification a été refusée. |

Les valeurs écrites ne sont pas conservées. Sur un écran soumis au [suivi des modifications](../nomaflow/change-packages.md), le paquet de modifications désigne ces entrées par *Assistant IA*.

---

## Dernière activité \{#recent\}

Une ligne par entrée : Quand, Utilisateur, Application, Modèle, Jetons en entrée, Depuis le cache, Jetons en sortie, Appels d'outils, Durée et **Issue**.

| Entrée | Colonne Modèle | Issue |
|---|---|---|
| Une question du chat | Le modèle. | *Répondu*, *Échec*, *Abandonné* ou *Limite de tours* (la question a épuisé ses tours d'outils et s'est terminée par une réponse de clôture). |
| Une carte appliquée | *Carte appliquée*. | *Appliquée* ou *Refusée*. |
| Une série d'appels MCP | *Client externe (MCP)*. Les appels d'un même utilisateur espacés de moins de deux minutes forment une seule ligne. | *Répondu*, ou le nombre d'appels en échec. |

Une ligne se déplie sur ses appels d'outils, chacun avec ce sur quoi il a porté, sa taille en caractères et sa durée. Au-dessus de la liste, **Tous les canaux** la limite à un canal et **Échecs seulement** aux entrées comportant un échec.

---

## Durée de conservation \{#retention\}

**Enregistrement d'usage conservé (jours ; 0 = sans limite)**, dans Liberty Next → Administrer → App → Assistant IA, vaut 90 par défaut. Les entrées plus anciennes sont supprimées avec le nettoyage des notifications, et le stockage figure sous **Usage de l'IA** dans la vue [Rétention](./retention.md), avec son nombre d'entrées, **Aperçu** et **Purger**.

---

## Conseils \{#tips\}

- Un outil souvent en échec signale une permission manquante ou une requête dont la description égare l'assistant : déplier les appels d'outils de la question pour en lire la cause.
- Un utilisateur avec beaucoup de questions et peu d'appels d'outils demande sans doute ce que l'assistant ne peut pas atteindre : vérifier les permissions `sql:` et `explorer:` du rôle.
- Consulter le panneau des **modifications** après l'activation des outils d'écriture : il indique qui les utilise, sur quels écrans, et ce qui est refusé.
- Les mêmes chiffres sont servis par `GET /admin/ai-usage` pour un rapport externe.
