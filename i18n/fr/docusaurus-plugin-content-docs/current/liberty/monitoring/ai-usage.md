---
title: Usage de l'IA
description: "Surveillance → Usage de l'IA dans Liberty Next : qui utilise l'assistant IA, le coût estimé, les jetons avec la part lue depuis le cache, les outils appelés et leurs échecs — par utilisateur, jour, modèle, canal et outil —, les modifications faites par l'assistant, et la dernière activité avec ses appels d'outils. Ce qui est enregistré, ce qui ne l'est jamais, et la durée de conservation."
keywords: [Liberty Next, surveillance, usage de l'IA, assistant IA, jetons, cache, appels d'outils, audit, enregistrement d'usage, rétention, MCP]
---

# Usage de l'IA

**Surveillance → Usage de l'IA** montre l'utilisation de l'[assistant IA](../framework/ai-assistant.md) : qui pose des questions, ce qu'elles coûtent, quels outils sont appelés et lesquels échouent, et ce qui a été modifié par son intermédiaire. La vue est réservée aux superutilisateurs. Accès : **Liberty Next → Exploiter → Surveillance**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 594" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aiu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aiu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aiu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aiu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="554" rx="14" fill="url(#aiu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="240.0" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="252.0" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <rect x="343.7142857142857" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="355.7142857142857" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS</text>
  <text x="355.7142857142857" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <rect x="447.42857142857144" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="459.42857142857144" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COÛT</text>
  <text x="459.42857142857144" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">38,20 $</text>
  <text x="459.42857142857144" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">estimé, prix public</text>
  <rect x="551.1428571428571" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="563.1428571428571" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS ENTRÉE</text>
  <text x="563.1428571428571" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9,6 M</text>
  <text x="563.1428571428571" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">71 % du cache</text>
  <rect x="654.8571428571429" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="666.8571428571429" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JETONS SORTIE</text>
  <text x="666.8571428571429" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">184 k</text>
  <rect x="758.5714285714286" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="770.5714285714286" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS D'OUTILS</text>
  <text x="770.5714285714286" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 038</text>
  <text x="770.5714285714286" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 en échec</text>
  <rect x="862.2857142857142" y="120" width="97.71428571428571" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="874.2857142857142" y="138" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFICATIONS</text>
  <text x="874.2857142857142" y="164" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="874.2857142857142" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">par l'assistant</text>
  <text x="240" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PAR UTILISATEUR</text>
  <rect x="240" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="350" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUESTIONS</text>
  <text x="422" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRÉE</text>
  <text x="492" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COÛT</text>
  <rect x="240" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="350" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">148</text>
  <text x="422" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3,4 M</text>
  <text x="492" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">14,10 $</text>
  <rect x="240" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="350" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">96</text>
  <text x="422" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,1 M</text>
  <text x="492" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9,85 $</text>
  <text x="606.0" y="212" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PAR CANAL</text>
  <rect x="606.0" y="220" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CANAL</text>
  <text x="752.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRÉES</text>
  <text x="814.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCHECS</text>
  <text x="872.0" y="235.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COÛT</text>
  <rect x="606.0" y="248" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="262.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Chat Liberty</text>
  <text x="752.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">412</text>
  <text x="814.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="872.0" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">38,20 $</text>
  <rect x="606.0" y="274" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="288.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Client externe (MCP)</text>
  <text x="752.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">236</text>
  <text x="814.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">6</text>
  <text x="872.0" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="240" y="318" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PAR OUTIL</text>
  <rect x="240" y="326" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTIL</text>
  <text x="374" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS</text>
  <text x="434" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCHECS</text>
  <text x="494" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE MOY.</text>
  <rect x="240" y="354" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="374" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">522</text>
  <text x="434" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">7</text>
  <text x="494" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,2 s</text>
  <rect x="240" y="380" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">explorer_query</text>
  <text x="374" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">301</text>
  <text x="434" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="494" y="394.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0,9 s</text>
  <text x="606.0" y="318" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MODIFICATIONS FAITES PAR L'ASSISTANT</text>
  <rect x="606.0" y="326" width="354.0" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND</text>
  <text x="692.0" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="776.0" y="341.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUOI</text>
  <rect x="606.0" y="354" width="354.0" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="368.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19/11 10:44</text>
  <text x="692.0" y="368.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">alice</text>
  <text x="776.0" y="368.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">screen_write update sales/orders</text>
  <rect x="606.0" y="380" width="354.0" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616.0" y="394.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19/11 09:12</text>
  <text x="692.0" y="394.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="776.0" y="394.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">job_run load_prices</text>
  <text x="240" y="424" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DERNIÈRE ACTIVITÉ</text>
  <rect x="849" y="403" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="866" y="412" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Échecs seulement</text>
  <rect x="707" y="409" width="130" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="717" y="422.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Tous les canaux ▾</text>
  <rect x="240" y="432" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="272" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND</text>
  <text x="364" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="448" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="532" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="682" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTILS</text>
  <text x="754" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE</text>
  <text x="814" y="447.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUE</text>
  <rect x="240" y="460" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="474.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="272" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:44</text>
  <text x="364" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="448" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="532" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Carte appliquée</text>
  <text x="682" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="754" y="474.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0,4 s</text>
  <rect x="814" y="463.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="844.0" y="474.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Appliquée</text>
  <rect x="240" y="486" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="500.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="272" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:42</text>
  <text x="364" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="448" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sales</text>
  <text x="532" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="682" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="754" y="500.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">8,1 s</text>
  <rect x="814" y="489.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="839.5" y="500.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Répondu</text>
  <rect x="240" y="512" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="526.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="272" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:37</text>
  <text x="364" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="448" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="532" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Client externe (MCP)</text>
  <text x="682" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="754" y="526.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,6 s</text>
  <rect x="814" y="515.0" width="65" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="846.5" y="526.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 en échec</text>
  <rect x="240" y="538" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="552.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">›</text>
  <text x="272" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">19/11 10:31</text>
  <text x="364" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chloe</text>
  <text x="448" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="532" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">claude-opus-5-5</text>
  <text x="682" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="754" y="552.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">14,6 s</text>
  <rect x="814" y="541.0" width="89" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="858.5" y="552.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Limite de tours</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l'IA</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une vue de la page Surveillance</text>
  <line x1="200" y1="93.0" x2="476" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur un utilisateur</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtre la liste du bas</text>
  <line x1="200" y1="253.0" x2="250" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="20" y="506" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="521" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une série d'appels MCP</text>
  <text x="30" y="534" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne, ses appels au dépliage</text>
  <line x1="200" y1="523.0" x2="244" y2="523" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7, 30 ou 90 jours</text>
  <line x1="1000" y1="73.0" x2="960" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="136" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Coût estimé</text>
  <text x="1010" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">USD, les questions du chat</text>
  <line x1="1000" y1="153.0" x2="962" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Canaux</text>
  <text x="1010" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic filtre la liste du bas</text>
  <line x1="1000" y1="249.0" x2="962" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="348" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="363" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui a modifié quoi</text>
  <text x="1010" y="376" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écran, clé, tâche</text>
  <line x1="1000" y1="365.0" x2="962" y2="365" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
  <rect x="1000" y="402" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="417" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1010" y="430" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un canal, les échecs</text>
  <line x1="1000" y1="419.0" x2="962" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aiu-arrow)"/>
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

La période est **7 derniers jours**, **30 derniers jours** (par défaut) ou **90 derniers jours**.

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
