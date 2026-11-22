---
title: Connecteurs
description: "Un connecteur est le moyen par lequel Liberty Next atteint une source de données : un connecteur SQL porte les requêtes nommées d'un pool de base de données, un connecteur API les points d'accès nommés d'une API web. Modifiés dans Liberty Next → Données → Connecteurs ; un connecteur doté d'un menu et de Show in switcher est une application."
keywords: [Liberty Next, connecteur, SQL, API, pool, requête nommée, point d'accès, endpoint, tables, requêtes, séquences, lookups, permissions, multi-pools, Oracle thick]
---

# Connecteurs

Un **connecteur** est le moyen par lequel Liberty Next atteint une source de données. Chaque écran, graphique, tableau de bord, action, étape de tâche et réponse de l'assistant désigne le connecteur et la requête — ou le point d'accès — qu'il utilise.

| Type | Atteint | Contient |
|---|---|---|
| **SQL** | Une base de données, par un [pool](#pools). | Des **requêtes** nommées, de quatre types : tables, requêtes, séquences, lookups. |
| **API** | Une API web (REST, JSON). | Des **points d'accès** nommés : méthode, chemin, en-têtes, corps, extraction de la réponse. |

Un connecteur doté d'un menu, avec **Show In Switcher** activé, est une **application**, choisie dans le sélecteur — voir [Applications](./apps/overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="415" rx="14" fill="url(#cnp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <rect x="688" y="32" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Connecteur</text>
  <rect x="783" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="867" y="32" width="83" height="22" rx="5" fill="url(#cnp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="956" y="32" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1020.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="80" width="196" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="88" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="102.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filtrer 4…</text>
  <text x="246" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <rect x="244" y="134" width="180" height="36" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="156.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="270" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 3 table(s) · 6 requête(s)</text>
  <rect x="244" y="176" width="180" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="198.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <text x="270" y="203" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 2 table(s) · 4 requête(s)</text>
  <text x="246" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCES DE DONNÉES</text>
  <rect x="244" y="238" width="180" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="260.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◍</text>
  <text x="270" y="252" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp_api</text>
  <text x="270" y="265" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">api · 12 point(s) d'accès</text>
  <rect x="244" y="280" width="180" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="302.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="294" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">reporting</text>
  <text x="270" y="307" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 9 requête(s)</text>
  <rect x="444" y="80" width="640" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="458" y="104" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]  ·  sql</text>
  <rect x="925" y="90" width="145" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="997.5" y="104.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter des requêtes</text>
  <rect x="456" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="465" y="127" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="486" y="138" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉGLAGES</text>
  <text x="466" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="569" y1="143" x2="578" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="579" y="118" width="112" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1.3"/>
  <rect x="588" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="609" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="589" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="692" y1="143" x2="701" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="702" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="711" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="732" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES</text>
  <text x="712" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 requête(s)</text>
  <line x1="815" y1="143" x2="824" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="825" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="834" y="127" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="855" y="138" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉQUENCES</text>
  <text x="835" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">1 séquence(s)</text>
  <line x1="938" y1="143" x2="947" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#cnp-flow)"/>
  <rect x="948" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="957" y="127" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="978" y="138" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="958" y="156" fill="#e2e8f0" fontSize="8.0" fontFamily="system-ui, sans-serif">2 liste(s) de valeurs</text>
  <rect x="456" y="182" width="616" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="466" y="196.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filtrer 3…</text>
  <rect x="456" y="214" width="616" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="468" y="230" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="468" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="884" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="900" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="920" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="936" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="956" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="972" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="992" y="226" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="1008" y="237" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
  <rect x="1034" y="222" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="237" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="456" y="260" width="616" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="468" y="276" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="468" y="289" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affaires en cours</text>
  <rect x="884" y="272" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="900" y="283" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="920" y="272" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="936" y="283" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="956" y="272" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="972" y="283" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="992" y="272" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="1008" y="283" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
  <rect x="1034" y="268" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="283" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="456" y="306" width="616" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="468" y="322" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">activities</text>
  <text x="468" y="335" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notes et appels</text>
  <rect x="884" y="318" width="32" height="15" rx="3" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="900" y="329" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="920" y="318" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="936" y="329" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="956" y="318" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="329" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="992" y="318" width="32" height="15" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="1008" y="329" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
  <rect x="1034" y="314" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="329" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="458" y="366" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Un clic sur une table : la liste se réduit à une colonne et la table s'ouvre à côté.</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applications et sources</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">regroupés selon leur menu</text>
  <line x1="200" y1="157.0" x2="244" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'il contient</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables, requêtes, points d'accès</text>
  <line x1="200" y1="317.0" x2="420" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la page</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Enregistrer écrit et recharge</text>
  <line x1="1120" y1="57.0" x2="908.5" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq cartes d'étape</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune avec son compteur</text>
  <line x1="1120" y1="137.0" x2="1054" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une table, quatre requêtes</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lecture · MAJ · insertion · suppr.</text>
  <line x1="1120" y1="247.0" x2="994" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1120" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner la table</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses quatre requêtes</text>
  <line x1="1120" y1="347.0" x2="1054" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
</svg>

---

## Liberty Next → Données → Connecteurs \{#page\}

La liste de gauche a un filtre et deux groupes : **Applications** (connecteurs dotés d'un menu) et **Sources de données** (les autres). Chaque ligne indique ce que contient le connecteur — `sql · 117 table(s) · 34 requête(s)`, `api · 68 point(s) d'accès`. L'en-tête de la page regroupe **＋ Connecteur** (un nom, le type SQL ou API), **Abandonner** (annule les modifications en attente), **Enregistrer** (écrit `connectors.toml` et applique la modification sans redémarrage) et **Recharger la config**. Le connecteur choisi s'ouvre à droite, avec ses boutons dans son en-tête — **Rechercher les usages**, **Cloner** (avec sa portée du dictionnaire, ses écrans, son menu, ses graphiques et tableaux de bord), **Renommer** (toutes les références réécrites), **Supprimer** (avec tout ce qui lui appartient).

### Pools \{#pools\}

Un pool est une connexion à une base de données, définie dans **Liberty Next → Administrer → Pools** et partagée par les connecteurs qui l'utilisent. La liste indique la cible de chaque pool — `postgresql · hôte:5432 / base` — et l'en-tête regroupe **＋ Ajouter un pool**, **Abandonner**, **Enregistrer** et **Recharger la config**.

<svg viewBox="0 0 1320 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="440" rx="14" fill="url(#pol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Pools</text>
  <rect x="660" y="32" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="718.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un pool</text>
  <rect x="783" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="867" y="32" width="83" height="22" rx="5" fill="url(#pol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="956" y="32" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1020.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="80" width="210" height="350" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="90" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="112.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="104" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">default</text>
  <text x="270" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql · db-host:5432 / liberty</text>
  <rect x="244" y="132" width="194" height="36" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="154.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="270" y="159" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql · db-host:5432 / crm</text>
  <rect x="244" y="174" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="196.0" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="188" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp</text>
  <text x="270" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">oracle · erp-db:1521 / ORCL</text>
  <rect x="458" y="80" width="626" height="350" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="104" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <rect x="546" y="90" width="113" height="22" rx="5" fill="url(#pol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="602.5" y="104.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tester la connexion</text>
  <rect x="664" y="90" width="123" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="725.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="792" y="90" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="855" y="90" width="149" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="929.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger depuis le disque</text>
  <rect x="1009" y="90" width="63" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.5" y="104.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="470" y="122" width="602" height="24" rx="6" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="480" y="138" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">Connecté en 33 ms — postgresql 16.4</text>
  <rect x="470" y="156" width="113" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="479" y="165" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="500" y="176" fill="#4a9eff" fontSize="8.0" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <text x="480" y="194" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql · db-host</text>
  <text x="480" y="207" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">postgresql+asyncpg</text>
  <line x1="584" y1="186" x2="591" y2="186" stroke="#475569" strokeWidth="1" markerEnd="url(#pol-flow)"/>
  <rect x="592" y="156" width="113" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="601" y="165" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="622" y="176" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPTE</text>
  <text x="602" y="194" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">crm_app</text>
  <text x="602" y="207" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">mot de passe réglé</text>
  <line x1="706" y1="186" x2="713" y2="186" stroke="#475569" strokeWidth="1" markerEnd="url(#pol-flow)"/>
  <rect x="714" y="156" width="113" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="723" y="165" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="744" y="176" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHÉMAS</text>
  <text x="724" y="194" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">0 schéma(s)</text>
  <line x1="828" y1="186" x2="835" y2="186" stroke="#475569" strokeWidth="1" markerEnd="url(#pol-flow)"/>
  <rect x="836" y="156" width="113" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="845" y="165" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="866" y="176" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIENS DE BASE</text>
  <text x="846" y="194" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">0 lien(s)</text>
  <line x1="950" y1="186" x2="957" y2="186" stroke="#475569" strokeWidth="1" markerEnd="url(#pol-flow)"/>
  <rect x="958" y="156" width="113" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="165" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="988" y="176" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉGLAGES FINS</text>
  <text x="968" y="194" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">10 connexions + 5</text>
  <text x="470" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE BASE</text>
  <rect x="470" y="246" width="192.66666666666666" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="648.6666666666666" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="674.6666666666666" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <rect x="674.6666666666666" y="246" width="192.66666666666666" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683.6666666666666" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">db-host</text>
  <text x="879.3333333333333" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="879.3333333333333" y="246" width="192.66666666666666" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="888.3333333333333" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">5432</text>
  <text x="470" y="290" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE</text>
  <rect x="470" y="296" width="192.66666666666666" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="311.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">crm</text>
  <text x="470" y="342" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">›  Avancé : pilote, options, URL</text>
  <text x="470" y="366" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">URL composée à partir des champs :</text>
  <rect x="470" y="374" width="602" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="388.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">postgresql+asyncpg://crm_app@db-host:5432/crm</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un pool par ligne</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type · hôte:port / base</text>
  <line x1="200" y1="127.0" x2="256" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'adresse en champs</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type, hôte, port, base</text>
  <line x1="200" y1="267.0" x2="470" y2="258" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avancé</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pilote, options, URL modifiable</text>
  <line x1="200" y1="377.0" x2="470" y2="345" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tester la connexion</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tel qu'à l'écran, sans enregistrer</text>
  <line x1="1120" y1="57.0" x2="586" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La réponse</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">durée et version du serveur</text>
  <line x1="1120" y1="147.0" x2="1072" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="220" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq étapes</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte résume son contenu</text>
  <line x1="1120" y1="237.0" x2="1044" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
</svg>

#### Un pool, étape par étape \{#pool-stages\}

Le pool choisi est dessiné en cinq cartes d'étape, chacune résumant son contenu : **Base de données**, **Compte**, **Schémas**, **Liens de base**, **Réglages fins**. Ses boutons sont **Tester la connexion**, **Rechercher les usages**, **Renommer**, **Recharger depuis le disque** et **Supprimer**.

| Étape | Champs |
|---|---|
| **Base de données** | L'adresse, saisie comme une adresse : le **Type de base** (PostgreSQL, Oracle, MySQL, MariaDB, SQL Server, SQLite), l'**Hôte**, le **Port**, et le nom propre au type — **Base**, un **Nom de service** Oracle (un **SID** si l'URL est écrite ainsi), un **Fichier** SQLite. Choisir un autre type y fait passer le pool : son pilote, son port habituel ; le type choisit aussi la [variante par dialecte](./build/queries/per-dialect-sql.md) d'une requête. **Avancé : pilote, options, URL** contient le **Pilote**, les **Options** (ce qui suit le `?` de l'URL) et l'**URL** composée à partir des champs, qui reste modifiable (`${VARIABLE}` accepté). Une URL que la page ne sait pas présenter champ par champ est gardée telle qu'elle est écrite. |
| **Compte** | L'**Utilisateur** et le **Password**, tenu hors de l'URL et chiffré à l'enregistrement. Un mot de passe écrit dans l'URL est signalé, avec le bouton **Le déplacer dans le champ mot de passe**. |
| **Schémas**, **Liens de base** | Les valeurs des jetons `#SCHEMA.<NOM>#` et `#DBLINK.<NOM>#` — voir [plus bas](#schema-and-db-link-tokens). |
| **Réglages fins** | **Pool size**, **Max overflow** (connexions gardées ouvertes, connexions supplémentaires sous charge), **Pool pre ping** (contrôle de validité), **Pool recycle** (secondes avant le renouvellement d'une connexion), **Echo** (journalise chaque instruction, pour la mise au point), **Max rows** (limite de lignes par défaut des lectures du pool, 1 000 si vide), **Arraysize** (Oracle : lignes lues par aller-retour ; à relever entre 500 et 1 000 pour les gros volumes), **Trim strings** (retire les espaces de fin des textes de longueur fixe — Oracle `CHAR`, JD Edwards), **Coalesce nulls** (à l'écriture, remplace les valeurs vides par un espace ou 0 — colonnes texte Oracle `NOT NULL`), **Debug sql** (journalise chaque instruction avec ses valeurs finales). |

**Tester la connexion** ouvre une connexion avec le pool tel qu'il est à l'écran — enregistré ou non — et répond *Connecté en N ms* avec la version du serveur, ou *Connexion impossible* avec les termes du pilote. Rien n'est enregistré et les pools en service ne sont pas touchés.

### Tables et requêtes à côté de leur liste \{#list-beside\}

Les sections d'un connecteur SQL sont des cartes d'étape avec leur compteur : **Réglages** (son pool), **Tables**, **Requêtes**, **Séquences**, **Lookups**. Choisir une carte affiche son contenu ; **＋ Ajouter des requêtes** (Tables), **＋ Ajouter une requête**, **＋ Ajouter une séquence** ou **＋ Ajouter un lookup** se trouve dans l'en-tête du connecteur.

Ouvrir une table garde la liste à côté : la liste se réduit à une colonne — les quatre requêtes de chaque table sous forme de points — et la table s'ouvre à droite, si bien que passer d'une table à la suivante prend un clic ; de même pour une requête, une séquence, un lookup. Les sections du connecteur et les étapes de la table se replient alors sur une ligne chacune, pour que l'instruction commence haut dans la page. Une table est dessinée par ses étapes — **Général**, puis **Lecture**, **Mise à jour**, **Insertion**, **Suppression** —, chacune indiquant si la requête est *réglée* ou *non réglée*, et en orange *non inscriptible : refusée à l'exécution* quand une requête d'écriture existe sans être autorisée. Ses actions forment une rangée d'icônes à côté de **Ouvrir l'éditeur visuel** (rechercher les usages, renommer, changer le type, déplacer, cloner, supprimer). Les fenêtres **Construire un SELECT / INSERT / UPDATE / DELETE** écrivent la requête à partir des colonnes de la table, avec un aperçu. Voir [Requêtes — vue d'ensemble](./build/queries/overview.md).

## Connecteur SQL \{#sql\}

Un connecteur SQL a cinq cartes d'étape : **Réglages**, **Tables**, **Requêtes**, **Séquences**, **Lookups**. Les quatre sections de requêtes sont décrites dans [Requêtes — vue d'ensemble](./build/queries/overview.md).

### Réglages \{#connection-fields\}

La carte **Réglages** d'un connecteur SQL regroupe ses réglages de connexion.

| Champ | Effet |
|---|---|
| **Pool** | Le pool sur lequel s'exécutent les requêtes — une liste des pools définis dans *Liberty Next → Administrer → Pools*. Le connecteur reprend l'adresse, les identifiants et le type de base du pool. |
| **Pools** | Les pools supplémentaires sur lesquels les mêmes requêtes peuvent s'exécuter — voir [Connecteurs multi-pools](#multi-pool). |
| **Show In Switcher** | Affiche le connecteur comme une application dans le sélecteur en haut du menu latéral — avec un menu, voir [Faire d'un connecteur une application](./build/menus/make-connector-an-app.md). |
| **Home** | L'entrée de menu ouverte quand l'application est choisie. |
| **Home By Role** | Une entrée d'accueil par rôle : un utilisateur arrive sur l'entrée du premier de ses rôles listé ici, sinon sur **Home**. |
| **Max Rows** | Nombre maximal de lignes d'une lecture par défaut ; sinon celui du pool, puis 1 000. La limite d'un écran ou d'une requête l'emporte. |
| **Dd Prefix** | Longueur du préfixe de table dans les noms de colonnes (JD Edwards : `2`, pour que `ABCO`, `MCCO` et `SDCO` portent tous l'élément `CO`). Utilisé par le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) des rôles. `0` : les noms de colonnes sont les éléments. |

### Éditeur de requête

**＋ Ajouter une requête**, ou un clic sur une requête, ouvre l'éditeur de requête à côté de la liste. Son en-tête regroupe **retour**, le nom de la requête et ses boutons — **Rechercher les usages**, **Renommer**, **Changer le type**, **Déplacer**, **Cloner**, **Supprimer** (décrits dans [Créer une requête personnalisée](./build/queries/create-custom.md)). La requête est dessinée en trois cartes d'étape :

| Étape | Champs |
|---|---|
| **Ce que c'est** | **Label** et **Description** — affichés dans les listes de choix, et lus par l'assistant IA pour choisir ses requêtes. Le nom utilisé dans l'URL (`/api/sql/billing/<nom>`) et dans la permission (`sql:billing:<nom>`) est celui de l'en-tête. |
| **Instruction** | **SQL** — l'instruction, avec ses paramètres `:nom` et ses valeurs serveur `{{JETON}}` ; un texte unique, ou une variante par base de données (voir [Variantes SQL par dialecte](./build/queries/per-dialect-sql.md)). **Writable** — désactivé : seul un SELECT est accepté ; activé : INSERT / UPDATE / DELETE / CALL / MERGE. |
| **Paramètres** | Les paramètres déclarés, une ligne chacun : **Name**, **Label**, **Default**, **Help**, **Example**, **Choices**, **Required** — voir [Liaison de paramètres](./build/queries/parameter-binding.md). |

L'éditeur SQL colore la syntaxe et complète les noms de tables et de colonnes à partir du pool. Au-dessus, **Jeton** insère une valeur serveur (`{{LOGIN}}`, `{{SYSDATE}}`…) ou l'un des schémas du pool, **Assistant** ouvre le constructeur de SELECT, et **Tester** essaie une instruction de lecture sur le pool du connecteur.

### Jetons de schéma et de DB link \{#schema-and-db-link-tokens\}

Une requête SQL peut porter deux jetons de substitution : le même texte s'exécute alors sur n'importe quel pool — local ou distant — sans qu'il faille maintenir une variante de la requête par environnement.

| Jeton | Résout en | Où le configurer |
|---|---|---|
| `#SCHEMA.<NOM>#` | Le mappage du pool pour le schéma `<NOM>` (par ex. `SY920.`). Vide quand le pool n'a pas d'entrée — le jeton disparaît et le nom de table est écrit brut. | L'étape **Schémas** du pool. |
| `#DBLINK.<NOM>#` | Le suffixe de DB link du pool pour le schéma `<NOM>` (par ex. `@ORCLPROD`). Ajouté **après** le nom de table : `#SCHEMA.SY#F0092#DBLINK.SY#` devient donc `SY920.F0092@ORCLPROD`. Vide quand il n'y a pas d'entrée — rien n'est ajouté et la requête reste locale. | L'étape **Liens de base** du pool (`SY` = `@ORCLPROD`). |

Les deux jetons sont indépendants : `#SCHEMA.…#` préfixe la table, `#DBLINK.…#` la suffixe. Une même requête s'exécute en local (les deux mappages vides), sur un schéma distant sans lien (schéma mappé, dblink vide), ou via un DB link (les deux mappés) — c'est le pool qui décide quelle forme émettre.

Une valeur de DB link non vide doit être une référence `@lien` nue (commence par `@`, puis uniquement lettres, chiffres, `_`, `$`, `#` et `.`). Toute autre valeur fait échouer la requête à son exécution — garde-fou contre une valeur qui tenterait d'introduire du SQL dans l'instruction.

### Mode thick d'Oracle \{#oracle-thick\}

Le pilote Oracle fonctionne par défaut en mode *thin* : aucun client Oracle nécessaire, chaque appel s'exécute dans la boucle d'événements du serveur. Deux cas demandent le mode *thick*, qui passe par l'Oracle Instant Client :

- le **chiffrement réseau natif** (NNE) exigé par la base — le mode thin échoue avec `DPY-3001` ;
- la lecture d'un **LOB au travers d'un DB link** — le mode thin échoue avec `ORA-22992` / `ORA-03149`.

Cocher **Oracle thick mode** dans **Liberty Next → Administrer → App** (section *App*) et redémarrer le serveur : tous les pools Oracle passent alors en mode thick — le réglage vaut pour tout le serveur, pas pour un pool. Les pools PostgreSQL ne sont pas concernés. L'Instant Client est inclus dans l'image Docker (amd64 et arm64) ; une installation Python en a besoin sur l'hôte.

---

### Connecteurs multi-pools \{#multi-pool\}

Un même connecteur SQL peut desservir **plusieurs pools** — plusieurs bases ou instances JDE — sans cloner le connecteur ni dupliquer ses écrans. À côté du **Pool** par défaut, listez les autres dans **Pools** (deux listes déroulantes de pools configurés, sur la carte **Réglages** du connecteur) ; les mêmes requêtes nommées et les mêmes écrans s'exécutent alors sur n'importe quel pool de l'ensemble.

Le pool se choisit à l'exécution :

- **Dans l'application** — quand l'application courante passe par un connecteur multi-pools, un choix **Pool** apparaît dans le menu latéral, sous le sélecteur d'applications (*Default* désigne le pool propre du connecteur). Choisir un pool relance les écrans de l'application sur l'instance retenue. Le choix est conservé par application dans le navigateur, et ne s'applique qu'aux connecteurs qui déclarent réellement ce pool — les autres connecteurs (mono-pool) de l'application gardent leur pool par défaut au lieu d'échouer.
- **Dans les tâches** — une étape `sql_copy` accepte `pool` dans son bloc `source` ou `target`, une étape `sql_query` accepte `pool`, pour cibler une instance précise sans nouveau connecteur ([étapes](../nomaflow/steps.md)). Ces clés se définissent dans `jobs.toml` ; l'éditeur d'étape ne les affiche pas.

L'ensemble atteignable est le `pool` par défaut plus `pools` ; une requête ou une tâche ne peut jamais atteindre un pool en dehors, et seuls les **noms** de pool arrivent au sélecteur — jamais d'URL ni d'identifiants. Un connecteur avec un seul `pool` ne s'exécute que sur ce pool.

Un connecteur API appelé depuis ces écrans — AIS, pour JD Edwards — peut suivre les mêmes environnements : voir [Un serveur par environnement](#api-environments).

---

## Connecteur API \{#api\}

Un connecteur API appelle une API web. Il est dessiné en six cartes d'étape, chacune résumant ce qu'elle contient ou ce qui lui manque encore — l'hôte du serveur, le type d'authentification, les environnements, le nombre de points d'accès et combien écrivent, les webhooks, le test :

<svg viewBox="0 0 1320 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cna-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cna-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cna-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cna-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="398" rx="14" fill="url(#cna-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="242" y="46" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.erp_api]  ·  api</text>
  <rect x="777" y="32" width="123" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="905" y="32" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="929.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="958" y="32" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="987.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="1021" y="32" width="63" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1052.5" y="46.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="242" y="64" width="129" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="251" y="73" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="272" y="84" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <text x="252" y="102" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">erp.example.com</text>
  <line x1="372" y1="94" x2="380" y2="94" stroke="#475569" strokeWidth="1" markerEnd="url(#cna-flow)"/>
  <rect x="381" y="64" width="129" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="390" y="73" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="411" y="84" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTIFICATION</text>
  <text x="391" y="102" fill="#e2e8f0" fontSize="7.5" fontFamily="system-ui, sans-serif">Utilisateur et mot de passe</text>
  <line x1="511" y1="94" x2="519" y2="94" stroke="#475569" strokeWidth="1" markerEnd="url(#cna-flow)"/>
  <rect x="520" y="64" width="129" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="529" y="73" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="550" y="84" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONNEMENTS</text>
  <text x="530" y="102" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">un serveur pour tous</text>
  <line x1="650" y1="94" x2="658" y2="94" stroke="#475569" strokeWidth="1" markerEnd="url(#cna-flow)"/>
  <rect x="659" y="64" width="129" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="668" y="73" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="689" y="84" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS D'ACCÈS</text>
  <text x="669" y="102" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">12 point(s) d'accès</text>
  <text x="669" y="115" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 qui écrivent</text>
  <line x1="789" y1="94" x2="797" y2="94" stroke="#475569" strokeWidth="1" markerEnd="url(#cna-flow)"/>
  <rect x="798" y="64" width="129" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="807" y="73" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="828" y="84" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <text x="808" y="102" fill="#e2e8f0" fontSize="9.4" fontFamily="system-ui, sans-serif">pas encore disponible</text>
  <line x1="928" y1="94" x2="936" y2="94" stroke="#475569" strokeWidth="1" markerEnd="url(#cna-flow)"/>
  <rect x="937" y="64" width="129" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="946" y="73" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="967" y="84" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="947" y="102" fill="#e2e8f0" fontSize="8.3" fontFamily="system-ui, sans-serif">essayer un point d'accès</text>
  <text x="242" y="150" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <line x1="242" y1="156" x2="1078" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="242" y="176" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AFFICHER DANS LE SÉLECTEUR</text>
  <rect x="242" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M244.5,192.5 L246.8,194.8 L250.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="259" y="196" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">activé</text>
  <text x="542" y="176" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACCUEIL</text>
  <rect x="542" y="182" width="536" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="551" y="197.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">orders_list</text>
  <text x="1064" y="197.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="242" y="236" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <line x1="242" y1="242" x2="1078" y2="242" stroke="#1f2937" strokeWidth="1"/>
  <text x="242" y="262" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">URL DE BASE</text>
  <rect x="242" y="268" width="836" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="251" y="283.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">https://erp.example.com/api/v2</text>
  <text x="242" y="314" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉLAI (MS)</text>
  <rect x="242" y="320" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="251" y="335.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">30000</text>
  <text x="462" y="314" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VÉRIFICATION SSL</text>
  <rect x="462" y="320" width="616" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="471" y="335.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">true (vérifier le certificat)</text>
  <text x="1064" y="335.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="242" y="372" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EN-TÊTES PAR DÉFAUT</text>
  <rect x="242" y="382" width="836" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="397.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Accept: application/json</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six cartes d'étape</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que chaque partie contient</text>
  <line x1="200" y1="87.0" x2="242" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une application</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sélecteur + entrée d'accueil</text>
  <line x1="200" y1="197.0" x2="242" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le serveur</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">$&#123;VARIABLE&#125; accepté</text>
  <line x1="200" y1="307.0" x2="242" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons du connecteur</text>
  <text x="1130" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, cloner, renommer, supprimer</text>
  <line x1="1120" y1="41.0" x2="1084" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Points d'accès qui écrivent</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comptés sur la carte</text>
  <line x1="1120" y1="137.0" x2="719" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérification SSL</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">true, false ou une variable</text>
  <line x1="1120" y1="317.0" x2="1058" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
</svg>

| Étape | Contenu |
|---|---|
| **Connexion** | Section *Application* : **Afficher dans le sélecteur**, **Accueil**. Section *Connexion* : **URL de base** (`https://api.example.com`, `${VARIABLE}` accepté), **Délai (ms)**, **Vérification SSL** (*true*, *false*, ou une variable comme `${JDE_AIS_VERIFY_SSL:-true}`, conservée telle quelle). Section *En-têtes par défaut* : **En-têtes**, des paires `Clé:Valeur` séparées par des points-virgules, envoyées avec chaque requête. |
| **Authentification** | **Méthode** : *Aucune*, *Basic* (identifiant et mot de passe), *Bearer* (jeton statique), *Clé API* (nom de l'en-tête et clé), *OAuth2 / JWT* (chemin du point d'accès de jeton, corps et Content-Type de la demande, en-têtes de la demande de jeton, champ du jeton, durée de vie du jeton), *Chaque utilisateur sous son nom (jeton signé)* — chaque appel fait au nom de l'utilisateur connecté, voir [Chaque appel au nom de l'utilisateur connecté](#api-user-jwt). Les secrets sont chiffrés à l'enregistrement. |
| **Environnements** | Un serveur par environnement, pour un connecteur utilisé avec plusieurs environnements JDE — voir [Un serveur par environnement](#api-environments). |
| **Points d'accès** | Les points d'accès nommés — voir [Points d'accès d'API](./build/api-endpoints.md). |
| **Webhooks** | Pas encore disponible : un système externe ne peut pas pousser d'événements vers Liberty Next. |
| **Test** | Choisir un **Point d'accès**, renseigner ses **Paramètres**, **Exécuter** : le **Résultat** s'affiche, rien n'est enregistré. Sur un connecteur sans point d'accès, **Tester la connexion** vérifie l'adresse et l'authentification. |

Un point d'accès est un appel nommé — **Ce qu'il est** (nom, libellé, description, *Modifie des données*, groupe), **Entrées** (ses paramètres), **L'appel** (méthode, chemin de l'URL, en-têtes, corps, paramètres de requête — ou une fonction, ou un service qui répond à la place) et **La réponse** (lignes, colonnes, champs d'erreur et d'avertissement, champ et correspondances de réponse). Chaque étape est décrite dans [Points d'accès d'API](./build/api-endpoints.md).

Les points d'accès sont appelés par les écrans (un point d'accès qui renvoie des lignes se lit comme une requête), les actions d'écran (`call_api`), les [services](./build/services.md), les entrées de menu (type `endpoint`), les règles de notification (canal `action`), les plugins (`connectors.api(…).call(…)`), les [tests](./build/tests.md) et — s'il y est autorisé — l'assistant IA. Une étape Nomaflow `http` appelle directement une URL, sans connecteur.

### Chaque appel au nom de l'utilisateur connecté \{#api-user-jwt\}

Avec la méthode **Chaque utilisateur sous son nom (jeton signé)**, le connecteur n'appelle plus le serveur sous un compte de service unique : chaque appel est fait **au nom de l'utilisateur connecté à Liberty**. Liberty signe un jeton JSON Web Token de courte durée qui nomme l'utilisateur et l'envoie dans l'en-tête `Authorization: Bearer` ; le serveur fait confiance au certificat de la clé du connecteur. Aucun mot de passe de l'utilisateur n'est conservé, nulle part. La méthode est conçue pour JD Edwards AIS — la confiance JWT externe de son serveur HTML — et convient à tout serveur qui accepte un jeton signé.

<svg viewBox="0 0 1200 425" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="396" rx="14" fill="url(#cnj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.erp_api]  ·  api</text>
  <rect x="240.0" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="296.6666666666667" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <rect x="361.3" y="60" width="113.3" height="26" rx="6" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="418.0" y="76" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">AUTHENTIFICATION</text>
  <rect x="482.7" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="539.3333333333333" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">ENVIRONNEMENTS</text>
  <rect x="604.0" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="660.6666666666666" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">POINTS D'ACCÈS</text>
  <rect x="725.3" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="781.9999999999999" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <rect x="846.7" y="60" width="113.3" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="903.3333333333333" y="76" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="240" y="112" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE D'AUTHENTIFICATION</text>
  <line x1="240" y1="118" x2="585" y2="118" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="134" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉTHODE</text>
  <rect x="240" y="140" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="154.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Chaque utilisateur sous son nom (jeton signé)  ⌄</text>
  <text x="240" y="184" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">L'UTILISATEUR DE CHAQUE APPEL</text>
  <line x1="240" y1="190" x2="585" y2="190" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="204" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Chaque appel est fait au nom de l'utilisateur connecté : Liberty signe un</text>
  <text x="240" y="215" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">jeton de courte durée qui le nomme sur le serveur, lequel fait confiance</text>
  <text x="240" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">au certificat de cette clé. Aucun mot de passe de l'utilisateur n'est</text>
  <text x="240" y="237" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conservé.</text>
  <text x="240" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ DE SIGNATURE</text>
  <rect x="240" y="268" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="282.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••••••••••••</text>
  <text x="240" y="304" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CERTIFICAT (FACULTATIF)</text>
  <rect x="240" y="310" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="324.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">/etc/liberty/liberty-jde.cer</text>
  <text x="240" y="346" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTRIBUT DE L'UTILISATEUR</text>
  <rect x="240" y="352" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="366.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">jde_user</text>
  <text x="615" y="134" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM ENVOYÉ</text>
  <rect x="615" y="140" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="154.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">En majuscules (JD Edwards)  ⌄</text>
  <text x="615" y="178" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND AUCUN UTILISATEUR NE PEUT ÊTRE NOMMÉ</text>
  <rect x="615" y="184" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="198.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Refuser l'appel  ⌄</text>
  <text x="615" y="218" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Un traitement ou une planification n'a pas d'utilisateur ; un utilisateur</text>
  <text x="615" y="229" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">peut ne pas avoir de nom sur le serveur.</text>
  <text x="615" y="252" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LE JETON</text>
  <line x1="615" y1="258" x2="960" y2="258" stroke="#1f2937" strokeWidth="1"/>
  <text x="615" y="274" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHAMP QUI PORTE L'UTILISATEUR</text>
  <rect x="615" y="280" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="294.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">sub</text>
  <text x="792.5" y="274" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIGNATURE</text>
  <rect x="792.5" y="280" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="294.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">RS256  ⌄</text>
  <text x="615" y="318" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉMETTEUR (ISS)</text>
  <rect x="615" y="324" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="338.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="792.5" y="318" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIENCE (AUD)</text>
  <rect x="792.5" y="324" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="338.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="615" y="362" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALIDE PENDANT (SECONDES)</text>
  <rect x="615" y="368" width="167.5" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="382.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">300</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sous son propre nom</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque appel au nom de l'utilisateur</text>
  <line x1="200" y1="145.0" x2="240" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="20" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clé de signature</text>
  <text x="30" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichier ou texte PEM, ENC: accepté</text>
  <line x1="200" y1="275.0" x2="240" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="20" y="345" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="360" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Attribut de l'utilisateur</text>
  <text x="30" y="373" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son nom sur le serveur</text>
  <line x1="200" y1="362.0" x2="240" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom envoyé</text>
  <text x="1010" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en majuscules pour JD Edwards</text>
  <line x1="1000" y1="145.0" x2="960" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aucun utilisateur</text>
  <text x="1010" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refus, ou compte de service</text>
  <line x1="1000" y1="195.0" x2="960" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le jeton</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champ, RS256/384/512, iss, aud</text>
  <line x1="1000" y1="317.0" x2="960" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
  <rect x="1000" y="356" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="371" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Courte durée</text>
  <text x="1010" y="384" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">300 s par défaut, de 30 à 3600</text>
  <line x1="1000" y1="373.0" x2="782.5" y2="379" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnj-arrow)"/>
</svg>

| Champ | Défaut | Effet |
|---|---|---|
| **Clé de signature** | — | La clé privée : le chemin d'un fichier PEM sur le serveur Liberty, ou le texte PEM (une valeur `ENC:` est acceptée). Qui la détient peut agir au nom de n'importe quel utilisateur du serveur : elle se protège comme la clé maître. |
| **Certificat (facultatif)** | — | Le certificat remis au serveur (son fichier, ou son texte PEM). Son empreinte est écrite dans le jeton (`x5t`) ; certains serveurs s'en servent pour choisir le certificat. |
| **Attribut de l'utilisateur** | `jde_user` | L'attribut de l'utilisateur Liberty qui porte son nom sur le serveur — renseigné par un administrateur dans les [attributs de périmètre de données](./build/secure/users.md#attributes) de l'utilisateur, jamais par l'utilisateur lui-même. Vide : le nom d'utilisateur Liberty. |
| **Nom envoyé** | *En majuscules (JD Edwards)* | Ou *Tel qu'écrit*. |
| **Quand aucun utilisateur ne peut être nommé** | *Refuser l'appel* | Ou *Utiliser le compte de service ci-dessous* : la section **Identifiants** apparaît alors, et l'appel part avec cet identifiant et ce mot de passe. Un traitement ou une planification n'a pas d'utilisateur ; un utilisateur peut ne pas avoir l'attribut. |
| **Champ qui porte l'utilisateur** | `sub` | La revendication (claim) du jeton qui contient le nom. |
| **Signature** | `RS256` | `RS256`, `RS384` ou `RS512`. |
| **Émetteur (iss)**, **Audience (aud)** | vide | Écrits dans le jeton quand le serveur les contrôle. |
| **Valide pendant (secondes)** | `300` | De 30 à 3600. Un même jeton sert pour un utilisateur jusqu'à peu avant son expiration ; un nouveau est alors signé. |

Un appel sans personne à nommer — avec le repli laissé sur *Refuser l'appel* — n'est pas envoyé : il échoue avec un message qui en donne la raison (personne n'est connecté, ou le compte n'a pas cet attribut) et renvoie vers un administrateur. Le choix se fait connecteur par connecteur : un connecteur resté sur une autre méthode garde son compte de service.

### Un serveur par environnement \{#api-environments\}

Quand les écrans s'appuient sur un [connecteur multi-pools](#multi-pool) — plusieurs environnements JD Edwards — chaque environnement a en général son propre serveur AIS. La carte **Environnements** donne au connecteur API un serveur par environnement ; les points d'accès restent définis une seule fois.

| Champ | Effet |
|---|---|
| **Environnement (pool)** | L'environnement (pool) du serveur du connecteur — sa **Base URL** et ses identifiants. Obligatoire dès qu'il y a un autre environnement. |
| **Autres environnements** | Une entrée par autre pool : **Base URL**, **Username**, **Password**, **Token**, **Vérification SSL**. Un champ vide reprend la valeur du connecteur. Mots de passe et jetons sont chiffrés à l'enregistrement. |

Personne ne choisit le serveur. Un appel suit l'environnement de l'écran — le **Pool** choisi dans la barre latérale, ou celui par défaut — et le `pool` d'une étape de tâche (tout type d'étape). Cela couvre les actions d'écran (`call_api`), les plugins, `/api/http` et l'assistant IA.

Un appel fait pour un des environnements du connecteur sans serveur est **refusé** (« no target for pool … ») ; il n'est jamais envoyé au serveur du connecteur, qui est un autre environnement — souvent la production. Les environnements sont le pool du connecteur plus tous les pools des connecteurs SQL qui s'appuient dessus : un environnement JDE ajouté côté SQL et oublié ici est refusé lui aussi. La carte liste ces environnements sans serveur, *Paramètres → Intégrité* aussi.

```toml
[connectors.ais_connection]
base_url = "${JDE_AIS_URL}"
pool = "jdedwards"                          # l'environnement de base_url

[connectors.ais_connection.targets.jdedwards_dev]
base_url = "https://ais-dev.example.com:7077/jderest/v2"
auth_password = "ENC:…"                     # seulement ce qui diffère
```

Pour nommer l'environnement avant un appel sensible, utilisez `#POOL#` dans le message d'un `confirm` : `Reset the password of {INPUT.user} on #POOL#?`. Une mise à jour des applications sous licence conserve le `pool` et les `targets` d'une installation.

---

## Découverte de schéma et indices de colonnes \{#schema-discovery-and-column-hints\}

Une requête ne déclare pas de liste de colonnes : ses colonnes sont celles que renvoie la base à l'exécution. L'apparence d'une colonne sur un écran est déterminée, dans cet ordre, par :

1. les **réglages de colonne de l'écran** (onglet Colonnes) — libellé, format, largeur, règle, conditions ;
2. l'**entrée du dictionnaire** dont la clé est le nom de la colonne, ou celle indiquée dans le champ `dd` de la colonne — libellé par langue, format, règle (booléen, énumération, lookup…) ;
3. à défaut, le nom de la colonne et l'affichage par défaut de son type.

Une colonne n'a pas besoin de réglage propre : une entrée du dictionnaire portant son nom suffit. Voir [Dictionnaire](./dictionary.md#column-reference) et [Écrans → Colonnes](./build/screens/columns.md).

---

## Permissions

Chaque requête et chaque point d'accès a sa propre permission :

| Permission | Autorise |
|---|---|
| `sql:<connecteur>:<requête>` | L'exécution de la requête — en lecture comme en écriture. |
| `api:<connecteur>:<point d'accès>` | L'appel du point d'accès. |

Elles s'accordent par les rôles : autoriser une entrée de menu accorde ce qu'elle ouvre, et **Au-delà des menus** accorde une requête, un point d'accès ou un connecteur entier — des motifs comme `sql:billing:report_*` sont acceptés. Voir [Rôles et permissions](./build/secure/roles-and-permissions.md).

---

## Conseils

- **Nommer les requêtes d'après l'entité** — `invoices_get`, `invoices_by_status_get` — les listes se lisent d'elles-mêmes.
- **Décrire les requêtes** que doit utiliser l'assistant IA : libellé et description (étape *Ce que c'est*).
- **Préférer le dictionnaire aux libellés par écran** : une entrée sert tous les écrans.
- **Tenir les secrets hors des fichiers** par des références `${VARIABLE}` quand un gestionnaire de secrets est en place — voir [Chiffrement et secrets](./configuration/encryption-secrets.md).

---

## Sous le capot

Connecteurs et pools sont enregistrés dans `connectors.toml`, dans le dossier de configuration des applications. Les pages de Liberty Next sont le moyen normal de les modifier ; la même configuration est accessible par l'API REST sous `/admin/config/connectors` — voir [API REST](../references/rest-api.md#admin-config).

---

## Pour aller plus loin

- [Requêtes — vue d'ensemble](./build/queries/overview.md) — les quatre types de requêtes et leurs éditeurs.
- [Dictionnaire](./dictionary.md) — libellés, formats et listes de valeurs des colonnes.
- [Liaison de paramètres](./build/queries/parameter-binding.md) — paramètres, sources intégrées et jetons.
- [Écrans](./build/screens/overview.md) — grilles et dialogues sur les requêtes.
