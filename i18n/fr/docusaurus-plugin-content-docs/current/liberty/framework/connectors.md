---
title: Connecteurs
description: "Un connecteur est le moyen par lequel Liberty Next atteint une source de données : un connecteur SQL porte les requêtes nommées d'un pool de base de données, un connecteur API les points d'accès nommés d'une API web, son serveur étant un pool de type serveur HTTP. Les pools — bases de données, serveurs HTTP, annuaires LDAP — se règlent dans Liberty Next → Administrer → Pools, les connecteurs dans Liberty Next → Données → Connecteurs."
keywords: [Liberty Next, connecteur, SQL, API, pool, serveur HTTP, annuaire LDAP, Active Directory, requête nommée, point d'accès, endpoint, tables, requêtes, séquences, lookups, permissions, multi-pools, Oracle thick]
---

# Connecteurs

Un **connecteur** est le moyen par lequel Liberty Next atteint une source de données. Chaque écran, graphique, tableau de bord, action, étape de tâche et réponse de l'assistant désigne le connecteur et la requête — ou le point d'accès — qu'il utilise.

| Type | Atteint | Contient |
|---|---|---|
| **SQL** | Une base de données, par un [pool](#pools). | Des **requêtes** nommées, de quatre types : tables, requêtes, séquences, lookups. |
| **API** | Une API web (REST, JSON), par un [pool de type serveur HTTP](#pool-http) ou sa propre adresse. | Des **points d'accès** nommés : méthode, chemin, en-têtes, corps, extraction de la réponse. |

Un connecteur doté d'un menu, avec **Show in the application list** activé, est une **application**, choisie dans le sélecteur — voir [Applications](./apps/overview.md).

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
  <text x="270" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sql · 3 table(s) · 3 requête(s)…</text>
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

La liste de gauche a un filtre et deux groupes : **Applications** (connecteurs dotés d'un menu) et **Sources de données** (les autres). Chaque ligne indique ce que contient le connecteur, chaque type sous son propre nom — `sql · 118 table(s) · 34 requête(s) · 19 séquence(s) · 14 liste(s) de valeurs`, `api · 68 point(s) d'accès`. L'en-tête de la page regroupe **＋ Connecteur** (un nom, le type SQL ou API), **Abandonner** (annule les modifications en attente), **Enregistrer** (écrit `connectors.toml` et applique la modification sans redémarrage) et **Recharger la config**. Le connecteur choisi s'ouvre à droite, avec ses boutons dans son en-tête — **Rechercher les usages**, **Cloner** (avec sa portée du dictionnaire, ses écrans, son menu, ses graphiques et tableaux de bord), **Renommer** (toutes les références réécrites), **Supprimer** (avec tout ce qui lui appartient).

### Pools \{#pools\}

Un pool est une connexion de l'installation, définie dans **Liberty Next → Administrer → Pools** et désignée par ce qui l'utilise. Tout ce qui est propre à l'installation — une adresse, un compte, un mot de passe, une clé — s'y règle une seule fois, et nulle part ailleurs. Le début de son URL indique ce que le pool atteint :

| Type | URL | Désigné par |
|---|---|---|
| **Une base de données** — PostgreSQL, Oracle, MySQL, MariaDB, SQL Server, Db2, Db2 for i (IBM i, AS/400), SQLite | `postgresql+asyncpg://…`, `oracle+oracledb://…`, `mssql+pymssql://…`, `db2+ibm_db://…`, `ibmi://…` | Les connecteurs SQL, les étapes de tâche, l'environnement d'un écran. |
| **Un serveur HTTP** | `http://…` ou `https://…` | Les connecteurs API et chacun de leurs environnements — voir [Un serveur HTTP](#pool-http). |
| **Un annuaire LDAP** | `ldap://…` ou `ldaps://…` | L'étape `ldap_sync` d'une tâche et le code d'une application — voir [Un annuaire LDAP](#pool-ldap). |

La liste indique la cible de chaque pool — `postgresql · hôte:5432 / base`, `http · hôte:8443/api/v2`, `ldap · hôte:636 / dc=example,dc=com` — et l'en-tête regroupe **＋ Ajouter un pool**, **Abandonner**, **Enregistrer** et **Recharger la config**. Un champ d'écran peut proposer les pools sous forme de liste : c'est la règle [`POOL`](./dictionary.md#rules) du dictionnaire.

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="450" rx="14" fill="url(#pol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Pools</text>
  <rect x="956" y="32" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1020.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <rect x="867" y="32" width="83" height="22" rx="5" fill="url(#pol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="783" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="660" y="32" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="718.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un pool</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="80" width="210" height="370" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="90" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="112" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="104" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">default</text>
  <text x="270" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql · db-host:5432 / liberty</text>
  <rect x="244" y="132" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="154" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp</text>
  <text x="270" y="159" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">oracle · erp-db:1521 / ORCL</text>
  <rect x="244" y="174" width="194" height="36" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="196" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="188" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">erp_api</text>
  <text x="270" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">http · api.example.com:8443/api/v2</text>
  <rect x="244" y="216" width="194" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="238" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">⛁</text>
  <text x="270" y="230" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">corp_directory</text>
  <text x="270" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ldap · ad.example.com:636 / dc=exa…</text>
  <rect x="458" y="80" width="626" height="370" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="104" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">erp_api</text>
  <rect x="1011" y="90" width="61" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1041.5" y="104.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="859" y="90" width="147" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger depuis le disque</text>
  <rect x="798" y="90" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="826.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="672" y="90" width="121" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="556" y="90" width="111" height="22" rx="5" fill="url(#pol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="611.5" y="104.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tester la connexion</text>
  <rect x="470" y="122" width="602" height="24" rx="6" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="480" y="138" fill="#4ade80" fontSize="9.2" fontFamily="system-ui, sans-serif">Connecté en 85 ms — http HTTP 404 Le serveur répond à cette adresse, quel que soit le statut.</text>
  <rect x="470" y="156" width="290" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="479" y="165" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="500" y="176" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <text x="480" y="194" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">http · api.example.com:8443/api/v2</text>
  <text x="480" y="207" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">https</text>
  <line x1="761" y1="186" x2="779" y2="186" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pol-flow)"/>
  <rect x="782" y="156" width="290" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="791" y="165" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="812" y="176" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPTE</text>
  <text x="792" y="194" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">svc_liberty</text>
  <text x="792" y="207" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">mot de passe réglé</text>
  <text x="470" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE BASE</text>
  <rect x="470" y="246" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Serveur HTTP (une API)</text>
  <text x="648" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="675" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <rect x="675" y="246" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">api.example.com</text>
  <text x="880" y="240" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="880" y="246" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="889" y="261.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">8443</text>
  <rect x="470" y="276" width="192" height="172" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="291.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="482" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle</text>
  <text x="482" y="324.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">MySQL</text>
  <text x="482" y="340.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">MariaDB</text>
  <text x="482" y="357.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">SQL Server</text>
  <text x="482" y="373.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Db2</text>
  <text x="482" y="390.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Db2 for i (IBM i, AS/400)</text>
  <text x="482" y="406.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">SQLite</text>
  <text x="482" y="423.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Annuaire LDAP</text>
  <rect x="472" y="428.0" width="188" height="16" rx="4" fill="rgba(74,158,255,0.14)"/>
  <text x="482" y="439.5" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur HTTP (une API)</text>
  <text x="650" y="439.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">✓</text>
  <text x="675" y="290" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHEMIN DE BASE</text>
  <rect x="675" y="296" width="192" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="311.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">api/v2</text>
  <text x="676" y="352" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">›  Avancé : pilote, options, URL</text>
  <text x="676" y="376" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">URL composée à partir des champs :</text>
  <rect x="676" y="384" width="396" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="686" y="398.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">https://svc_liberty@api.example.com:8443/api/v2</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un pool par ligne</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type · adresse</text>
  <line x1="200" y1="113.0" x2="256" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un serveur HTTP</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appelé par un connecteur API</text>
  <line x1="200" y1="213.0" x2="256" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="256" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="271" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un annuaire LDAP</text>
  <text x="30" y="284" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lu par l'étape ldap_sync</text>
  <line x1="200" y1="273.0" x2="256" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le type</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dix types, une seule liste</text>
  <line x1="200" y1="367.0" x2="470" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tester la connexion</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">serveur : répond-il ?</text>
  <line x1="1120" y1="57.0" x2="586" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La réponse</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">durée et statut HTTP</text>
  <line x1="1120" y1="137.0" x2="1072" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux étapes</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ni schémas ni réglages fins</text>
  <line x1="1120" y1="207.0" x2="1072" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
  <rect x="1120" y="290" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chemin de base</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui suit l'hôte</text>
  <line x1="1120" y1="307.0" x2="867" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pol-arrow)"/>
</svg>

#### Un pool, étape par étape \{#pool-stages\}

Le pool choisi est dessiné en cartes d'étape, chacune résumant son contenu : **Base de données**, **Compte**, **Schémas**, **Liens de base**, **Réglages fins** pour une base — seulement **Base de données** et **Compte** pour un serveur HTTP ou un annuaire, qui n'exécutent pas de SQL. Ses boutons sont **Tester la connexion**, **Rechercher les usages**, **Renommer**, **Recharger depuis le disque** et **Supprimer**.

| Étape | Champs |
|---|---|
| **Base de données** | L'adresse, saisie comme une adresse : le **Type de base** (PostgreSQL, Oracle, MySQL, MariaDB, SQL Server, Db2, *Db2 for i (IBM i, AS/400)*, SQLite, *Annuaire LDAP*, *Serveur HTTP (une API)*), l'**Hôte**, le **Port**, et le nom propre au type — **Base**, un **Nom de service** Oracle (un **SID** si l'URL est écrite ainsi), un **Fichier** SQLite, le **DN de base** d'un annuaire, le **Chemin de base** d'un serveur. Choisir un autre type y fait passer le pool : son pilote, son port habituel ; le type choisit aussi la [variante par dialecte](./build/queries/per-dialect-sql.md) d'une requête. **Avancé : pilote, options, URL** contient le **Pilote**, les **Options** (ce qui suit le `?` de l'URL) et l'**URL** composée à partir des champs, qui reste modifiable (`${VARIABLE}` accepté). Une URL que la page ne sait pas présenter champ par champ est gardée telle qu'elle est écrite. |
| **Compte** | L'**Utilisateur** et le **Password**, tenu hors de l'URL et chiffré à l'enregistrement ; le champ du mot de passe a un bouton afficher / masquer. Un mot de passe écrit dans l'URL est signalé, avec le bouton **Le déplacer dans le champ mot de passe**. Le compte d'un annuaire se saisit tel quel dans **Compte (DN de liaison, DOMAINE\utilisateur ou utilisateur@domaine)** ; celui d'un serveur HTTP dans **Compte**, avec sa **Signing key**, son **Certificate** et **Verify SSL** — voir [plus bas](#pool-http). |
| **Schémas**, **Liens de base** | Les valeurs des jetons `#SCHEMA.<NOM>#` et `#DBLINK.<NOM>#` — voir [plus bas](#schema-and-db-link-tokens). |
| **Réglages fins** | Le nombre de connexions gardées par le pool, leur renouvellement, ce qui est journalisé, et ce que demande chaque base (lignes par aller-retour sur Oracle, espaces de fin, valeurs vides, compilation des requêtes sur PostgreSQL) — voir [Réglages fins](#pool-tuning). |

**Tester la connexion** ouvre une connexion avec le pool tel qu'il est à l'écran — enregistré ou non — et répond *Connecté en N ms* avec la version du serveur, ou *Connexion impossible* avec les termes du pilote. Sur un annuaire, le test s'authentifie une fois avec le compte puis se déconnecte. Sur un serveur HTTP, il envoie une requête à l'adresse, et tout statut HTTP vaut réponse : *Connecté en 85 ms — http HTTP 404 Le serveur répond à cette adresse, quel que soit le statut…* ; l'acceptation du compte se vérifie par le **Test** du connecteur API, qui connaît sa façon de s'authentifier. Rien n'est enregistré et les pools en service ne sont pas touchés.

Sur Oracle, le test exécute `SELECT 1 FROM DUAL`, sur Db2 et Db2 for i `SELECT 1 FROM SYSIBM.SYSDUMMY1`, ailleurs `SELECT 1`.

#### Réglages fins \{#pool-tuning\}

L'étape **Réglages fins** d'un pool de base de données. Chaque champ affiche une aide d'une ligne sous son libellé ; **plus** déplie la description complète. Les libellés sont cités tels que l'application les affiche.

| Champ | Par défaut | Effet |
|---|---|---|
| **Connections kept open** | 5 | Nombre de connexions gardées ouvertes, prêtes à l'emploi. |
| **Extra connections** | 10 | Nombre de connexions supplémentaires autorisées quand le serveur est chargé. |
| **Test before use** | activé | Vérifie qu'une connexion répond encore avant de la fournir. |
| **Renew after (seconds)** | -1 | Une connexion plus ancienne que cette durée est remplacée ; -1 la conserve indéfiniment. |
| **Log every statement** | désactivé | Écrit chaque instruction dans le journal du serveur. Pour un diagnostic uniquement. |
| **Let PostgreSQL compile queries** | désactivé | PostgreSQL uniquement — voir [plus bas](#pool-jit). |
| **Rows read at most** | vide (1 000) | Nombre de lignes qu'un écran lit dans cette base, sauf indication contraire de l'écran. |
| **Rows per round trip** | vide (valeur du pilote) | Oracle uniquement : nombre de lignes lues à chaque aller-retour. À relever entre 500 et 1 000 pour les gros volumes. |
| **Trim trailing spaces** | désactivé | Retire les espaces qu'une colonne texte de longueur fixe ajoute en fin de valeur (Oracle `CHAR`, JD Edwards). |
| **Fill empty values** | désactivé | À l'écriture, met un espace ou un zéro à la place d'une valeur laissée vide, pour les colonnes qui refusent le vide (colonnes texte Oracle `NOT NULL`). |
| **Log statements and values** | désactivé | Écrit chaque instruction avec ses valeurs dans le journal du serveur. Pour un diagnostic uniquement. |

##### Compilation des requêtes sur PostgreSQL \{#pool-jit\}

PostgreSQL compile (JIT) une requête qu'il estime lourde avant de l'exécuter, et ce à chaque exécution. Sur les requêtes courtes des écrans, des recherches et des tableaux de bord, l'estimation est souvent fausse et la compilation coûte alors bien plus que la requête elle-même — mesuré sur une recherche : 145 ms de compilation pour 4 ms de travail, et plusieurs secondes sur un serveur à un seul processeur. Chaque pool PostgreSQL désactive donc la compilation pour ses propres sessions ; les autres utilisateurs de la base gardent le réglage du serveur. Les collectes et les tâches Nomaflow passent par les mêmes pools, et leurs lectures lourdes sont aussi rapides, voire plus rapides, sans elle.

Activer **Let PostgreSQL compile queries** rend aux sessions du pool le réglage propre à la base. Le champ est sans effet sur les autres bases.

#### SQL Server, Db2 et IBM i \{#pool-sql-server-db2\}

Un pool atteint ces bases comme n'importe quelle autre : les écrans, les requêtes, les tâches et les applications les lisent de la même façon. Leurs pilotes ne sont pas fournis avec le paquet de base :

| Type de base | Pilote (URL) | Port habituel | Champ de la base | Pilote à installer |
|---|---|---|---|---|
| **SQL Server** | `mssql+pymssql` — `mssql+aioodbc` reste proposé sous *Avancé* | 1433 | **Base** | `liberty-next[mssql]` — rien d'autre à installer sur le serveur. `mssql+aioodbc` demande le pilote ODBC de Microsoft sur le serveur. |
| **Db2** (Linux, UNIX, Windows) | `db2+ibm_db` — `db2+pyodbc` est aussi proposé | 50000 | **Base** | `liberty-next[db2]`. IBM publie le pilote pour Linux x86-64, macOS et Windows, pas pour Linux arm64. |
| **Db2 for i (IBM i, AS/400)** | `ibmi` (via ODBC) | aucun | **Base** — le nom du système | `liberty-next[ibmi]`, ainsi qu'unixODBC et le pilote *IBM i Access ODBC Driver* d'IBM (téléchargement IBM, sous sa propre licence) sur le serveur. |

L'image Docker contient le pilote SQL Server, et le pilote Db2 en amd64 uniquement ; le pilote IBM i n'est pas dans l'image. Sur une [installation Python](../installation/python-server.md#install), ajouter les extras qui correspondent aux pools. Quand le pilote d'un pool manque, l'erreur du pool comme le résultat de **Tester la connexion** indiquent l'extra à installer — *no driver for a 'db2+ibm_db' database is installed — install it with: pip install 'liberty-next[db2]'*.

#### Un serveur HTTP \{#pool-http\}

Un pool dont l'URL commence par `http://` ou `https://` est le serveur qu'appelle un connecteur API — `https://svc_liberty@api.example.com:8443/api/v2`. Le connecteur API le désigne dans son champ **Serveur**, chacun de ses environnements aussi : l'adresse, le compte et les secrets sont alors ceux du pool, et le connecteur ne garde que sa façon de s'authentifier et ses points d'accès — voir [Le serveur d'un connecteur API](#api-server).

| Étape | Champ | Effet |
|---|---|---|
| Base de données | **Hôte**, **Port**, **Chemin de base** | L'adresse à laquelle s'ajoutent les chemins des points d'accès. Le schéma (`https` ou `http`) est le **Pilote**, sous *Avancé*. |
| Compte | **Compte** | Le compte avec lequel le connecteur s'authentifie. Vide quand le serveur prend un jeton : le champ **Password** porte alors le jeton. |
| Compte | **Password** | Le mot de passe du compte — ou le jeton. Chiffré à l'enregistrement ; `${VARIABLE}` accepté. |
| Compte | **Signing key** | Pour un connecteur qui fait chaque appel au nom de l'utilisateur connecté : la clé privée qui signe les jetons — le texte PEM, ou le chemin d'un fichier PEM sur le serveur ; une valeur `ENC:` est acceptée. Qui la détient peut agir au nom de n'importe quel utilisateur de ce serveur : elle se protège comme la clé maître. |
| Compte | **Certificate** | Facultatif : le certificat de la clé de signature (le texte PEM, ou le chemin du fichier `.cer` / `.pem` remis au serveur) ; son empreinte est alors écrite dans l'en-tête du jeton. |
| Compte | **Verify SSL** | Contrôle le certificat TLS du serveur. À désactiver seulement pour un serveur de test au certificat auto-signé. |

Un serveur HTTP n'exécute pas de SQL : une requête, un écran ou une copie qui le désigne est refusé, avec la raison.

#### Un annuaire LDAP \{#pool-ldap\}

Un pool dont l'URL commence par `ldap://` ou `ldaps://` (chiffré par TLS) est un annuaire — un Active Directory, un OpenLDAP. Il se crée comme une base de données, avec le type **Annuaire LDAP** : **Hôte**, **Port** (636 en `ldaps`, 389 en `ldap`), **DN de base** — point de départ des recherches, facultatif —, le compte saisi tel quel dans **Compte (DN de liaison, DOMAINE\utilisateur ou utilisateur@domaine)** (`cn=liberty,ou=services,dc=example,dc=com`, `EXAMPLE\svc_liberty`, `svc_liberty@example.com`), et le **Password**, conservé comme celui de tout pool (`ENC:` ou `${VARIABLE}`). **Tester la connexion** s'authentifie une fois avec le compte puis se déconnecte.

Ce qui lit un annuaire désigne le pool au lieu de porter un serveur et un compte : le **Pool d'annuaire** de l'[étape `ldap_sync`](../nomaflow/steps.md#ldap-sync) d'une tâche, et le code d'une application par `connectors.pools.directory(name)`. Un annuaire n'exécute pas de SQL, et un pool de base de données n'est pas un annuaire : l'une ou l'autre erreur est refusée, avec le nom du pool. `connectors.pools.where(name)` indique où pointe un pool — hôte, port, base ou DN de base — sans son compte : ce qu'un rapport imprime d'un système.

Le client d'annuaire est une partie facultative du serveur : s'il manque, le test le signale et nomme l'extra `ldap` à installer.

### Tables et requêtes à côté de leur liste \{#list-beside\}

Les sections d'un connecteur SQL sont des cartes d'étape avec leur compteur : **Réglages** (son pool), **Tables**, **Requêtes**, **Séquences**, **Lookups**. Choisir une carte affiche son contenu ; **＋ Ajouter des requêtes** (Tables), **＋ Ajouter une requête**, **＋ Ajouter une séquence** ou **＋ Ajouter un lookup** se trouve dans l'en-tête du connecteur.

Ouvrir une table garde la liste à côté : la liste se réduit à une colonne — les quatre requêtes de chaque table sous forme de points — et la table s'ouvre à droite, si bien que passer d'une table à la suivante prend un clic ; de même pour une requête, une séquence, un lookup. Les sections du connecteur et les étapes de la table se replient alors sur une ligne chacune, pour que l'instruction commence haut dans la page. Une table est dessinée par ses étapes — **Général**, puis **Lecture**, **Mise à jour**, **Insertion**, **Suppression** —, chacune indiquant si la requête est *réglée* ou *non réglée*, et en orange *non inscriptible : refusée à l'exécution* quand une requête d'écriture existe sans être autorisée. Ses actions forment une rangée d'icônes à côté de **Ouvrir l'éditeur visuel** (rechercher les usages, renommer, changer le type, déplacer, cloner, supprimer). Les fenêtres **Construire un SELECT / INSERT / UPDATE / DELETE** écrivent la requête à partir des colonnes de la table, avec un aperçu. Voir [Requêtes — vue d'ensemble](./build/queries/overview.md).

## Connecteur SQL \{#sql\}

Un connecteur SQL a cinq cartes d'étape : **Réglages**, **Tables**, **Requêtes**, **Séquences**, **Lookups**. Les quatre sections de requêtes sont décrites dans [Requêtes — vue d'ensemble](./build/queries/overview.md).

### Réglages \{#connection-fields\}

La carte **Réglages** d'un connecteur SQL regroupe ses réglages de connexion.

| Champ | Effet |
|---|---|
| **Database** | Le pool sur lequel s'exécutent les requêtes — une liste des pools définis dans *Liberty Next → Administrer → Pools*. Le connecteur reprend l'adresse, les identifiants et le type de base du pool. |
| **Other databases** | Les pools supplémentaires sur lesquels les mêmes requêtes peuvent s'exécuter — voir [Connecteurs multi-pools](#multi-pool). |
| **Show in the application list** | Affiche le connecteur comme une application dans le sélecteur en haut du menu latéral — avec un menu, voir [Faire d'un connecteur une application](./build/menus/make-connector-an-app.md). |
| **Home page** | L'entrée de menu ouverte quand l'application est choisie. |
| **Home page per role** | Une entrée d'accueil par rôle : un utilisateur arrive sur l'entrée du premier de ses rôles listé ici, sinon sur **Home page**. |
| **Serves the applications** | Les applications sous licence dont le connecteur fait partie : il est chargé si la licence couvre l'une d'elles. Vide : il est indépendant. Voir [Ce que couvre une clé](./build/secure/license-key.md#connector-applications). |
| **Rows read at most** | Nombre maximal de lignes d'une lecture par défaut ; sinon celui du pool, puis 1 000. La limite d'un écran ou d'une requête l'emporte. |
| **Column prefix length** | Longueur du préfixe de table dans les noms de colonnes (JD Edwards : `2`, pour que `ABCO`, `MCCO` et `SDCO` portent tous l'élément `CO`). Utilisé par le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) des rôles. `0` : les noms de colonnes sont les éléments. |

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

Un connecteur API appelle une API web. Son serveur — adresse, compte, secrets, contrôle TLS — est de préférence un [pool de type serveur HTTP](#pool-http), désigné dans **Serveur** ; le connecteur garde alors sa façon de s'authentifier et ses points d'accès. Il est dessiné en six cartes d'étape, chacune résumant ce qu'elle contient ou ce qui lui manque encore — le pool de serveur désigné (`→ erp_api`) ou l'hôte du serveur, le type d'authentification et ce qui lui manque, les environnements, le nombre de points d'accès et combien écrivent, les webhooks, le test :

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cna-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cna-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cna-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cna-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="425" rx="14" fill="url(#cna-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.erp_api]  ·  api</text>
  <rect x="1017" y="32" width="67" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1050.5" y="46.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="949" y="32" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="892" y="32" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="917.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="755" y="32" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="820.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="238" y="66" width="134" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="247" y="75" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268" y="86" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <text x="248" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">→ erp_api</text>
  <line x1="373" y1="96" x2="382" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="383" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="392" y="75" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="413" y="86" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTIFICATION</text>
  <text x="393" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Utilisateur et mot…</text>
  <line x1="518" y1="96" x2="527" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="528" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="537" y="75" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="558" y="86" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONNEMENTS</text>
  <text x="538" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">un serveur pour tous</text>
  <line x1="663" y1="96" x2="672" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="673" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="682" y="75" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="703" y="86" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS D'ACCÈS</text>
  <text x="683" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">12 point(s) d'accès</text>
  <text x="683" y="117" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 qui écrivent</text>
  <line x1="808" y1="96" x2="817" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="818" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="827" y="75" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="848" y="86" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <text x="828" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">pas encore disponible</text>
  <line x1="953" y1="96" x2="962" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#cna-flow)"/>
  <rect x="963" y="66" width="134" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="972" y="75" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="993" y="86" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="973" y="104" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">essayer un point d'accès</text>
  <rect x="238" y="142" width="470" height="280" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="162" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <text x="252" y="184" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVEUR</text>
  <rect x="252" y="190" width="442" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="205.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">erp_api</text>
  <text x="310.23" y="205.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">api.example.com:8443/api/v2</text>
  <text x="680" y="205.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="252" y="228" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">L'adresse, le compte, le mot de passe ou le jeton et le contrôle TLS sont lus dans ce pool.</text>
  <text x="252" y="250" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉLAI (MS)</text>
  <rect x="252" y="256" width="442" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="271.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">30000</text>
  <text x="252" y="304" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EN-TÊTES PAR DÉFAUT</text>
  <text x="252" y="322" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EN-TÊTES</text>
  <rect x="252" y="328" width="442" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="343.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Accept: application/json</text>
  <text x="252" y="372" fill="#64748b" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">Sans serveur : URL de base et Vérification SSL se règlent ici.</text>
  <rect x="720" y="142" width="362" height="280" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="734" y="162" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE D'AUTHENTIFICATION</text>
  <text x="734" y="184" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">Le compte et ses secrets sont ceux du pool erp_api :</text>
  <text x="734" y="197" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">seule la façon de s'authentifier se règle ici.</text>
  <text x="734" y="218" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉTHODE</text>
  <rect x="734" y="224" width="334" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="239.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Basic (identifiant + mot de passe)</text>
  <text x="1054" y="239.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="734" y="278" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Sans serveur, les champs de la méthode :</text>
  <text x="734" y="296" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="734" y="302" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="317.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">svc_liberty</text>
  <text x="908" y="296" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE</text>
  <rect x="908" y="302" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="917" y="317.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">••••••••</text>
  <text x="1054" y="317.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="734" y="302" width="160" height="24" rx="5" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="734" y="350" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Chaque utilisateur sous son nom : Clé de signature,</text>
  <text x="734" y="363" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Certificat — ceux du pool quand un serveur est nommé.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résumé de la carte</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">serveur nommé, ou ce qui manque</text>
  <line x1="200" y1="87.0" x2="250" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un pool de type Serveur HTTP</text>
  <line x1="200" y1="203.0" x2="252" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">URL de base, Vérification SSL</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seulement sans serveur</text>
  <line x1="200" y1="317.0" x2="252" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="70" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six cartes d'étape</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que chaque partie contient</text>
  <line x1="1120" y1="87.0" x2="1097" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="176" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Façon de s'authentifier</text>
  <text x="1130" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reste sur le connecteur</text>
  <line x1="1120" y1="193.0" x2="1068" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
  <rect x="1120" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Secrets</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bouton afficher / masquer</text>
  <line x1="1120" y1="317.0" x2="1054" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cna-arrow)"/>
</svg>

| Étape | Contenu |
|---|---|
| **Connexion** | Section *Application* : **Afficher dans le sélecteur**, **Accueil**, **Accueil par rôle** — une page d'accueil différente pour les utilisateurs d'un rôle : le rôle et l'entrée de menu se choisissent tous deux, une ligne par rôle —, et **Sert les applications** — les applications sous licence dont le connecteur fait partie, choisies parmi les autres connecteurs : il est chargé si la licence couvre l'une d'elles (voir [Ce que couvre une clé](./build/secure/license-key.md#connector-applications)). Section *Connexion* : **Serveur** — un pool de type serveur HTTP, ou *Réglé sur ce connecteur* ; avec un pool, l'adresse, le compte, le mot de passe ou le jeton et le contrôle TLS sont lus dans ce pool. Sans pool, **URL de base** (`https://api.example.com`, `${VARIABLE}` accepté) et **Vérification SSL** (*true*, *false*, ou une variable comme `${API_VERIFY_SSL:-true}`, conservée telle quelle) se règlent ici. **Délai (ms)** dans les deux cas. Section *En-têtes par défaut* : **En-têtes**, des paires `Clé:Valeur` séparées par des points-virgules, envoyées avec chaque requête. |
| **Authentification** | **Méthode** : *Aucune*, *Basic* (identifiant et mot de passe), *Bearer* (jeton statique), *Clé API* (nom de l'en-tête et clé), *OAuth2 / JWT* (chemin du point d'accès de jeton, corps et Content-Type de la demande, en-têtes de la demande de jeton, champ du jeton, durée de vie du jeton), *Chaque utilisateur sous son nom (jeton signé)* — chaque appel fait au nom de l'utilisateur connecté, voir [Chaque appel au nom de l'utilisateur connecté](#api-user-jwt). Quand le connecteur désigne un serveur, seule la méthode et ses propres réglages se règlent ici : le compte, le mot de passe ou le jeton, la clé de signature et son certificat sont ceux du pool. Sinon, les champs de la méthode sont ici ; les secrets sont chiffrés à l'enregistrement, et le mot de passe, le jeton et la clé de signature ont un bouton afficher / masquer. La carte nomme la méthode et ce qui lui manque : *pas encore d'utilisateur*, *ni jeton ni adresse de jeton*, *pas d'adresse de jeton*, *pas encore de clé de signature*. |
| **Environnements** | Un serveur par environnement, pour un connecteur utilisé avec plusieurs environnements JDE — voir [Un serveur par environnement](#api-environments). |
| **Points d'accès** | Les points d'accès nommés — voir [Points d'accès d'API](./build/api-endpoints.md). |
| **Webhooks** | Pas encore disponible : un système externe ne peut pas pousser d'événements vers Liberty Next. |
| **Test** | Choisir un **Point d'accès**, renseigner ses **Paramètres**, **Exécuter** : le **Résultat** s'affiche, rien n'est enregistré. Sur un connecteur sans point d'accès, **Tester la connexion** vérifie l'adresse et l'authentification. |

Un point d'accès est un appel nommé — **Ce qu'il est** (nom, libellé, description, *Modifie des données*, groupe), **Entrées** (ses paramètres), **L'appel** (méthode, chemin de l'URL, en-têtes, corps, paramètres de requête — ou une fonction, ou un service qui répond à la place) et **La réponse** (lignes, colonnes, champs d'erreur et d'avertissement, champ et correspondances de réponse). Chaque étape est décrite dans [Points d'accès d'API](./build/api-endpoints.md).

### Le serveur d'un connecteur API \{#api-server\}

Le champ **Serveur** désigne un [pool de type serveur HTTP](#pool-http) : ce qui est propre à l'installation — l'adresse, le compte, le mot de passe ou le jeton, la clé de signature et son certificat, le contrôle TLS — se trouve alors à un seul endroit, sous Liberty Next → Administrer → Pools, et un identifiant se change là une fois pour tous les connecteurs qui l'utilisent. Le connecteur garde sa façon de s'authentifier (la méthode et ses réglages : point d'accès de jeton, attribut de l'utilisateur, signature…) et ses points d'accès.

Un connecteur livré par une application ne porte aucune valeur de l'installation : une mise à jour le rafraîchit quelle que soit l'adresse, et conserve le **Serveur** choisi par l'installation. Un connecteur qui ne désigne aucun serveur garde ses propres champs **URL de base** et identifiants.

Un pool de serveur absent, ou encore sans adresse, n'empêche pas le serveur de démarrer : chaque appel passé par le connecteur échoue en indiquant quoi régler — *the connector names the server pool 'erp_api': there is no such pool — create it under Liberty → Pools (kind HTTP server)*. Le **Test** du connecteur s'exécute avec l'adresse et le compte du pool : il vérifie que le compte est accepté, là où *Tester la connexion* sur le pool vérifie seulement que le serveur répond.

```toml
[pools.erp_api]
url = "https://svc_liberty@api.example.com:8443/api/v2"
password = "ENC:…"

[connectors.erp_api]
type = "api"
server = "erp_api"          # adresse, compte, secrets : ceux du pool
auth_type = "basic"         # façon de s'authentifier : celle du connecteur
```

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
| **Clé de signature** | — | La clé privée : le chemin d'un fichier PEM sur le serveur Liberty, ou le texte PEM (une valeur `ENC:` est acceptée). Qui la détient peut agir au nom de n'importe quel utilisateur du serveur : elle se protège comme la clé maître. Quand le connecteur désigne un serveur, c'est un champ du [pool](#pool-http), absent d'ici. |
| **Certificat (facultatif)** | — | Le certificat remis au serveur (son fichier, ou son texte PEM). Son empreinte est écrite dans le jeton (`x5t`) ; certains serveurs s'en servent pour choisir le certificat. C'est aussi un champ du pool quand le connecteur désigne un serveur. |
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
| **Environnement (pool)** | L'environnement (pool) du serveur du connecteur — son **Serveur**, ou son **URL de base** et ses identifiants. Obligatoire dès qu'il y a un autre environnement. |
| **Autres environnements** | Une entrée par autre pool : son **Serveur** — un pool de type serveur HTTP, dont sont alors lus l'adresse, le compte, les secrets et le contrôle TLS —, ou, réglés sur le connecteur, **URL de base**, **Identifiant**, **Mot de passe**, **Jeton**, **Vérification SSL**. Un champ vide reprend la valeur du connecteur. Mots de passe et jetons sont chiffrés à l'enregistrement. La ligne d'un environnement affiche `→ pool` ou son URL de base. |

Personne ne choisit le serveur. Un appel suit l'environnement de l'écran — le **Pool** choisi dans la barre latérale, ou celui par défaut — et le `pool` d'une étape de tâche (tout type d'étape). Cela couvre les actions d'écran (`call_api`), les plugins, `/api/http` et l'assistant IA.

Un appel fait pour un des environnements du connecteur sans serveur est **refusé** (« no target for pool … ») ; il n'est jamais envoyé au serveur du connecteur, qui est un autre environnement — souvent la production. Les environnements sont le pool du connecteur plus tous les pools des connecteurs SQL qui s'appuient dessus : un environnement JDE ajouté côté SQL et oublié ici est refusé lui aussi. La carte liste ces environnements sans serveur, *Paramètres → Intégrité* aussi.

```toml
[connectors.ais_connection]
server = "jde_ais"                          # le pool de serveur HTTP de la production
pool = "jdedwards"                          # l'environnement de ce serveur

[connectors.ais_connection.targets.jdedwards_dev]
server = "jde_ais_dev"                      # le pool de serveur HTTP de cet environnement
```

Pour nommer l'environnement avant un appel sensible, utilisez `#POOL#` dans le message d'un `confirm` : `Reset the password of {INPUT.user} on #POOL#?`. Une mise à jour des applications sous licence conserve le `server`, le `pool` et les `targets` d'une installation.

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
- **Placer l'adresse et le compte d'un serveur dans un pool**, pas sur le connecteur API : un seul endroit pour changer un mot de passe, et un connecteur qu'une mise à jour peut rafraîchir.
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
