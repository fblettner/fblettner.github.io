---
title: Services
description: "Logique → Services dans Liberty Next : un service est un enchaînement d'étapes — requêtes, appels de points d'accès, fonctions de plugin, conditions, boucles — dessiné comme un flux et modifié à côté ; Exécuter l'essaie avec des entrées et montre la réponse et les étapes exécutées, Exposer en fait un point d'accès d'API qu'un écran, une tâche, l'assistant ou un appelant extérieur utilise comme un autre."
keywords: [Liberty Next, services, actions partagées, concepteur de flux, low-code, étapes, condition, boucle, exécuter, exposer, point d'accès d'API, service composé, orchestration]
---

# Services

Un **service** compose plusieurs étapes en un seul appel : lire une ligne, la contrôler, appeler un point d'accès, bifurquer selon la réponse, écrire, répondre. Il se construit en le dessinant — sans code — et s'utilise de deux façons : un écran l'appelle depuis un bouton, ou il est **exposé comme point d'accès d'API**, qu'une tâche, l'assistant ou un système extérieur appelle comme un autre.

Accès : **Liberty Next → Logique → Services**, pour les superutilisateurs. Un écran appelle un service avec `call_action` ; voir [Actions et cycle de vie](./screens/actions-and-lifecycle.md) pour les actions d'un écran.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="432" rx="14" fill="url(#svd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Service</text>
  <text x="293" y="44" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">· [actions.check_credit]</text>
  <rect x="1036" y="30" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1047.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <rect x="1062" y="30" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="220" y1="62" x2="1100" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="95" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="75" width="43" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="262.5" y="88.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Flux</text>
  <line x1="285" y1="79" x2="285" y2="91" stroke="#334155" strokeWidth="1"/>
  <text x="310.0" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste</text>
  <rect x="240" y="104" width="530" height="290" rx="8" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <rect x="682" y="114" width="78" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="693" y="128" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <text x="721" y="127.5" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="749" y="128" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="254" y="135" width="168" height="26" rx="13.0" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="266" y="151.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="280" y="151.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <text x="317.79200000000003" y="151.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">customer, amount</text>
  <line x1="422" y1="148" x2="454" y2="148" stroke="#475569" strokeWidth="1"/>
  <circle cx="438" cy="148" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="438" y="151.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="454" y="123" width="158" height="50" rx="8" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="463" y="130" width="12" height="12" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="480" y="140" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <text x="464" y="155" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Lire le client</text>
  <text x="464" y="166" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <line x1="612" y1="148" x2="644" y2="148" stroke="#475569" strokeWidth="1"/>
  <circle cx="628" cy="148" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="628" y="151.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <line x1="246" y1="236" x2="266" y2="236" stroke="#475569" strokeWidth="1"/>
  <circle cx="256" cy="236" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="256" y="239.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="270" y="211" width="150" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="279" y="218" width="12" height="12" rx="3" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="296" y="228" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONDITION</text>
  <text x="280" y="243" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Limite dépassée ?</text>
  <text x="280" y="254" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">amount &gt; LIMIT</text>
  <rect x="432" y="174" width="318" height="124" rx="8" fill="none" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="440" y="196" width="35" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="457.5" y="207.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Vrai</text>
  <line x1="486" y1="204" x2="510" y2="204" stroke="#475569" strokeWidth="1"/>
  <circle cx="498" cy="204" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="498" y="207.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="510" y="179" width="150" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="519" y="186" width="12" height="12" rx="3" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="536" y="196" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="520" y="211" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Refuser</text>
  <rect x="440" y="262" width="35" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="457.5" y="273.2" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Faux</text>
  <line x1="486" y1="270" x2="510" y2="270" stroke="#475569" strokeWidth="1"/>
  <circle cx="498" cy="270" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="498" y="273.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="510" y="245" width="150" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="519" y="252" width="12" height="12" rx="3" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="536" y="262" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS</text>
  <text x="520" y="277" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Réserver</text>
  <text x="520" y="288" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">erp.reserve_credit</text>
  <line x1="420" y1="236" x2="432" y2="236" stroke="#475569" strokeWidth="1"/>
  <line x1="246" y1="352" x2="270" y2="352" stroke="#475569" strokeWidth="1"/>
  <circle cx="256" cy="352" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="256" y="355.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="270" y="339" width="140" height="26" rx="13.0" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="282" y="355.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="296" y="355.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Réponse</text>
  <text x="345.7088" y="355.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">status</text>
  <rect x="786" y="74" width="294" height="320" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="800" y="94" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="872.96" y="94" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">›  Lire le client</text>
  <line x1="798" y1="104" x2="1068" y2="104" stroke="#1f2937" strokeWidth="1"/>
  <text x="800" y="120" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="800" y="125" width="266" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="138.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">run_query ▾</text>
  <text x="800" y="158" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="800" y="163" width="266" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="176.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm ▾</text>
  <text x="800" y="196" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="800" y="201" width="238" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="214.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customers_get ▾</text>
  <rect x="1042" y="201" width="24" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="214.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="800" y="232" width="55" height="19" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="827.5" y="245.0" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="867.32" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Prompt</text>
  <text x="800" y="266" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="800" y="271" width="266" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="284.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">customer</text>
  <text x="800" y="304" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STOP ON ERROR</text>
  <text x="936" y="304" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BIND RESULT</text>
  <rect x="800" y="311" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M802.5,316.5 L804.8,318.8 L808.8,314" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="817" y="320" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">enabled</text>
  <rect x="936" y="311" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M938.5,316.5 L940.8,318.8 L944.8,314" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="953" y="320" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="800" y="336" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Liaisons de paramètres</text>
  <rect x="800" y="343" width="62" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="356.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">ID ▾</text>
  <rect x="866" y="343" width="30" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="881.0" y="356.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">src</text>
  <rect x="900" y="343" width="166" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="910" y="356.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">INPUT.customer</text>
  <line x1="220" y1="406" x2="1100" y2="406" stroke="#1f2937" strokeWidth="1"/>
  <rect x="922" y="416" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="430.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="998" y="416" width="84" height="22" rx="5" fill="url(#svd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1040.0" y="430.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Flux ou Liste</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les mêmes étapes, deux vues</text>
  <line x1="200" y1="87.0" x2="242" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">montre les entrées du service</text>
  <line x1="200" y1="145.0" x2="260" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le + d'un lien</text>
  <text x="30" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajoute une étape à cet endroit</text>
  <line x1="200" y1="239.0" x2="252" y2="242" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une condition bifurque</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">voies Vrai et Faux</text>
  <line x1="200" y1="307.0" x2="440" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="20" y="356" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="371" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réponse</text>
  <text x="30" y="384" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que le service retourne</text>
  <line x1="200" y1="373.0" x2="280" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="1120" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'étape choisie</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifiée à côté du flux</text>
  <line x1="1120" y1="107.0" x2="1080" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bind result</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les étapes suivantes lisent ses lignes</text>
  <line x1="1120" y1="307.0" x2="1006" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
  <rect x="1120" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1130" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit et recharge</text>
  <line x1="1120" y1="409.0" x2="1082" y2="427" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svd-arrow)"/>
</svg>

---

## La liste \{#list\}

<svg viewBox="0 0 1320 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="276" rx="14" fill="url(#svl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Services</text>
  <rect x="941" y="30" width="139" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.5" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="240" y="62" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="298.5" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouveau service</text>
  <text x="240" y="104" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Des services construits à partir d'étapes — requêtes, appels de points d'accès, fonctions de plugin, conditions, boucles.</text>
  <rect x="240" y="116" width="840" height="62" rx="7" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="132" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="274" y="131" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="274" y="143" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Contrôler l'encours</text>
  <text x="274" y="155" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">4 étape(s) · 2 entrée(s)</text>
  <text x="274" y="167" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">POST /api/http/studio/check_credit</text>
  <rect x="533" y="137.0" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="560.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <rect x="591" y="137.0" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="615.5" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exposer</text>
  <rect x="644" y="137.0" width="115" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.5" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="763" y="137.0" width="139" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.5" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les dépendances</text>
  <rect x="906" y="137.0" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="964" y="137.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="150.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="1012" y="137.0" width="58" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1041.0" y="150.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="240" y="184" width="840" height="50" rx="7" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="200" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="274" y="199" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">close_order</text>
  <text x="274" y="211" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Clôturer une commande</text>
  <text x="274" y="223" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 étape(s) · 1 entrée(s)</text>
  <rect x="533" y="199.0" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="560.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <rect x="591" y="199.0" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="615.5" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exposer</text>
  <rect x="644" y="199.0" width="115" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.5" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="763" y="199.0" width="139" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.5" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les dépendances</text>
  <rect x="906" y="199.0" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="964" y="199.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="212.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="1012" y="199.0" width="58" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1041.0" y="212.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="240" y="240" width="840" height="40" rx="7" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="256" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="274" y="255" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">reset_password</text>
  <text x="274" y="267" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">1 étape(s) · 1 entrée(s)</text>
  <rect x="533" y="250.0" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="560.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <rect x="591" y="250.0" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="615.5" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exposer</text>
  <rect x="644" y="250.0" width="115" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.5" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="763" y="250.0" width="139" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.5" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les dépendances</text>
  <rect x="906" y="250.0" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="964" y="250.0" width="44" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="263.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="1012" y="250.0" width="58" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1041.0" y="263.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau service</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un identifiant, puis le concepteur</text>
  <line x1="200" y1="79.0" x2="240" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur la ligne</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le concepteur</text>
  <line x1="200" y1="149.0" x2="240" y2="149" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Points d'accès servis</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listés une fois exposé</text>
  <line x1="200" y1="213.0" x2="272" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les boutons d'une ligne</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécuter, exposer, usages…</text>
  <line x1="1120" y1="147.0" x2="1080" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svl-arrow)"/>
</svg>

Chaque ligne donne l'identifiant du service, son libellé, son nombre d'étapes et d'entrées et, une fois le service exposé, les points d'accès qu'il sert (`POST /api/http/<connecteur>/<point d'accès>`). Un clic sur la ligne ouvre son concepteur. Sur une ligne : **Exécuter**, **Exposer**, **Rechercher les usages**, **Rechercher les dépendances**, **Renommer**, **Cloner**, **Supprimer**.

- **Nouveau service** demande un identifiant (`snake_case`) et ouvre le concepteur du nouveau service, vide.
- **Renommer** et **Cloner** demandent le nouvel identifiant ; un renommage met aussi à jour les écrans qui appellent le service.
- **Supprimer** demande une confirmation : un écran qui appelle encore le service échoue alors au contrôle d'intégrité — d'où l'intérêt de **Rechercher les usages** avant.

---

## Le flux \{#flow\}

Le concepteur s'ouvre sur toute la fenêtre, sous le titre *Service ·* `[actions.<id>]`, dans la vue **Flux** ; **Liste** présente le même service sous forme de formulaire — libellé, description, entrées, puis les étapes, une par ligne, avec **Ajouter une action**. **Enregistrer** écrit le service et recharge la configuration ; **Annuler** avec des modifications en cours propose de les enregistrer, de les abandonner ou de continuer.

Le flux se lit de gauche à droite : **Début**, qui montre les entrées ; une carte par étape ; **Réponse**, qui montre ce que le service retourne. Une **condition** se divise en deux voies, **Vrai** et **Faux** ; une **boucle** ou un **groupe** encadre ses propres étapes. La disposition découle de la structure du service : rien n'est placé à la main. Un flux long continue sur la ligne suivante, et le zoom (− / % / +) est mémorisé sur le poste.

- **Un clic sur une carte** ouvre l'étape dans le panneau latéral, sous le chemin *service › étape* : son **Type**, sa cible — **Connecteur** et **Requête** pour une requête (le crayon ouvre la requête), sinon le point d'accès, la fonction ou le service —, son **Id** et son **Label**, **Stop on error**, **Bind result**, et ses **Liaisons de paramètres** : chaque paramètre de la cible reçoit une valeur littérale ou une source (`INPUT.<nom>`, `<étape>.first_row.<COLONNE>`, une valeur intégrée comme `#LOGIN_USER#`). La corbeille de la carte supprime l'étape.
- **Le + d'un lien** ouvre la liste des types d'étape et ajoute celui choisi à cet endroit.
- **Sans sélection**, le panneau modifie *Le service* : **Libellé**, **Description**, **Entrées** (**Ajouter une entrée**).

| Étape | Rôle |
|---|---|
| **Requête** | Exécute une requête d'un connecteur. |
| **Point d'accès** | Appelle un point d'accès d'API. Si le point d'accès indique où se trouvent ses lignes, les étapes suivantes les lisent par nom de colonne : `<étape>.first_row.<COLONNE>`, `<étape>.rows`. |
| **Fonction** | Appelle une fonction du plugin d'une application, choisie dans une liste regroupée par application et par module — le même sélecteur que l'[étape Python](../../nomaflow/steps.md#python) d'une tâche. |
| **Service** | Appelle un autre service. |
| **Condition** | Bifurque selon un test. |
| **Pour chaque** | Répète ses étapes pour chaque ligne. |
| **Message**, **Notification** | Informe l'utilisateur, ou envoie une règle de notification — voir [plus bas](#notification). |
| **Réponse** | Indique ce que le service retourne. |

Une étape lit les entrées du service par `INPUT.<nom>`, et le résultat d'une étape précédente par l'identifiant de celle-ci — `<étape>.first_row.<COLONNE>`, `<étape>.rows` — à condition que **Bind result** y soit coché. La valeur par défaut d'une entrée (un littéral, ou `#LOGIN_USER#`, `#SYSDATE#`, `#NOW#`, `#CURRENT_TIME#`, `#LANGUAGE#`) sert quand l'appelant ne la fournit pas.

### L'étape Notification \{#notification\}

Une étape **Notification** envoie l'une des règles de [Logique → Notifications](../../nomaflow/notifications.md) dont le déclencheur est *Une action d'écran* : la règle fixe les destinataires et les canaux, l'étape fixe le moment.

| Champ | Contenu |
|---|---|
| **Règle de notification** | Les règles déclenchées « par une action », par libellé. Une règle désactivée est signalée *(désactivée)* et l'étape n'envoie rien tant qu'elle n'est pas réactivée ; une règle inexistante, ou d'un autre déclencheur, est signalée elle aussi — l'étape n'enverrait rien. Sans aucune règle de ce type, le champ invite à en créer une d'abord. |
| **Valeurs du message** | Les valeurs de l'enregistrement courant sont envoyées d'elles-mêmes. Chaque ligne ajoute ce que le message demande en plus : un **nom dans le message** (un `{nom}` de son objet, de son corps ou de son lien) et sa valeur ou sa source — ce que l'utilisateur a saisi (`INPUT.<nom>`), le résultat d'une étape précédente. |


---

## Exécuter \{#run\}

**Exécuter** essaie le service tel qu'il est enregistré : un champ par entrée (sa valeur par défaut en indication), puis **Exécuter** dans la fenêtre donne le résultat — *Terminé en N ms*, la **Réponse** qu'il donnerait comme point d'accès (ce qu'il retourne, avec ses messages), et les **Étapes exécutées**. Un service sans entrée s'exécute tel quel ; un échec affiche l'erreur de l'étape en cause.

:::warning[Les étapes s'exécutent réellement]
Une étape qui écrit, écrit. Un service qui modifie des données s'essaie sur un environnement de test, ou avec des entrées prévues pour cela.
:::

---

## Exposer comme point d'accès \{#expose\}

**Exposer** crée un point d'accès d'API servi par le service. Un écran, une action, une tâche, l'assistant ou un appelant extérieur l'appelle ensuite comme n'importe quel point d'accès.

| Champ | Signification |
|---|---|
| **Sur le connecteur** | Un connecteur d'API de l'installation, ou celui du Studio — `studio`, créé à la première utilisation. |
| **Nom du point d'accès** | L'identifiant du service par défaut. |
| **Il modifie des données** | À cocher si une étape écrit : l'assistant demande alors avant de l'appeler. |

Les entrées du service deviennent les paramètres du point d'accès — la fenêtre les rappelle, *Ses paramètres : …* ; un `INPUT.<nom>` lu par les étapes compte même si le service ne le déclare pas. Le connecteur proposé est celui du Studio s'il existe, sinon le premier connecteur d'API de l'installation. La fenêtre répond avec l'adresse et la permission : *Exposé : POST … — permission `api:<connecteur>:<point d'accès>`*.

**Le service s'exécute avec la permission du point d'accès** : qui peut appeler le point d'accès exécute toutes ses étapes, sans nouveau contrôle étape par étape — un service composé s'accorde en bloc. Le périmètre de données de l'appelant s'applique toujours à chaque requête. Ce que le service retourne est la réponse ; ses messages l'accompagnent ; une étape en échec est l'erreur du point d'accès.

---

## Où un service est utilisé \{#usage\}

**Rechercher les usages** liste les écrans qui appellent le service et les points d'accès qu'il sert ; un renommage les suit. Dans le [Studio](../studio.md), un service sélectionné éclaire les écrans qui l'appellent. Un service voyage dans un [paquet](./packages.md) avec les écrans et les points d'accès qui en ont besoin.

---

## Conseils & bonnes pratiques \{#tips\}

- Donner à chaque étape un nom qui dit ce qu'elle contient (`client`, `commandes_ouvertes`) : les étapes suivantes la lisent par ce nom.
- Placer les contrôles en premier et les écritures en dernier : une condition qui arrête tôt ne laisse rien à moitié fait.
- Exposer un service quand le même enchaînement sert à un écran **et** à une tâche ou à un système extérieur : une définition, une permission.
- Couvrir un service exposé par un cas de [test](./tests.md).

---

## Voir aussi

- [Vue d'ensemble et Studio](../studio.md) · [Points d'accès d'API](./api-endpoints.md) · [Tests](./tests.md)
- [Actions et cycle de vie](./screens/actions-and-lifecycle.md) — les actions d'un écran.
