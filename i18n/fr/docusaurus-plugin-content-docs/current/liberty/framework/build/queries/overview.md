---
title: Requêtes — vue d'ensemble
description: "Organisation de la page Connecteurs de Liberty Next — les cartes d'étape Réglages, Tables, Requêtes, Séquences et Lookups, une table ouverte à côté de sa liste — et les quatre types de requêtes qu'elle range."
keywords: [Liberty Framework, requêtes, connecteurs, CRUD, séquences, lookups, ConnectorsBuilder, pages de Liberty Next]
---

# Requêtes — vue d'ensemble

Une **requête** dans Liberty est une instruction SQL nommée rattachée à un **connecteur** (lui-même rattaché à un **pool**, c'est-à-dire à une base de données). Les écrans, tableaux de bord, graphiques, lookups et séquences du dictionnaire, ainsi que l'assistant IA, s'appuient tous sur des requêtes — ajouter une requête est donc la modification la plus fréquente dans les pages de Liberty Next.

La page qui gère les requêtes est **Liberty Next → Données → Connecteurs**. Cette vue d'ensemble en dresse la carte ; les pages suivantes détaillent chaque chemin d'ajout.

---

## La page Connecteurs en un coup d'œil

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ov-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="415" rx="14" fill="url(#ov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <rect x="688" y="32" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Connecteur</text>
  <rect x="783" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="867" y="32" width="83" height="22" rx="5" fill="url(#ov-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
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
  <line x1="569" y1="143" x2="578" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="579" y="118" width="112" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1.3"/>
  <rect x="588" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="609" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="589" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="692" y1="143" x2="701" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="702" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="711" y="127" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="732" y="138" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES</text>
  <text x="712" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 requête(s)</text>
  <line x1="815" y1="143" x2="824" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
  <rect x="825" y="118" width="112" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="834" y="127" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="855" y="138" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉQUENCES</text>
  <text x="835" y="156" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">1 séquence(s)</text>
  <line x1="938" y1="143" x2="947" y2="143" stroke="#475569" strokeWidth="1" markerEnd="url(#ov-flow)"/>
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
  <line x1="200" y1="157.0" x2="244" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'il contient</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables, requêtes, points d'accès</text>
  <line x1="200" y1="317.0" x2="420" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la page</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Enregistrer écrit et recharge</text>
  <line x1="1120" y1="57.0" x2="908.5" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq cartes d'étape</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune avec son compteur</text>
  <line x1="1120" y1="137.0" x2="1054" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une table, quatre requêtes</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lecture · MAJ · insertion · suppr.</text>
  <line x1="1120" y1="247.0" x2="994" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
  <rect x="1120" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner la table</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses quatre requêtes</text>
  <line x1="1120" y1="347.0" x2="1054" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ov-arrow)"/>
</svg>

Trois zones :

| Zone | Contenu |
|---|---|
| **En-tête de la page** | Actions globales — *＋ Connecteur*, *Abandonner*, *Enregistrer*, *Recharger la config*. *Enregistrer* écrit le fichier des connecteurs et déclenche un rechargement à chaud — aucun redémarrage de processus n'est nécessaire. |
| **Liste de gauche** | Un filtre et deux groupes : *Applications* (connecteurs dotés d'un menu et affichés dans le sélecteur — les applications que voient les utilisateurs) et *Sources de données* (connecteurs qui fournissent des données sans figurer dans le sélecteur). Chaque ligne indique ce que contient le connecteur (`sql · 3 table(s) · 6 requête(s)`). Un clic sur un nom l'ouvre à droite. |
| **Volet droit** | L'éditeur du connecteur sélectionné. Cinq cartes d'étape en haut, chacune avec son compteur, choisissent une section — *Réglages*, *Tables*, *Requêtes*, *Séquences*, *Lookups*. |

---

## Les quatre types de requêtes \{#kinds\}

Un connecteur range ses requêtes en quatre sections ; la section où se trouve une requête en définit le type :

| Vue | Contenu |
|---|---|
| **Tables** | Une entrée par table, avec jusqu'à quatre requêtes : **get** (lecture), **post** (insertion), **put** (mise à jour), **delete** (suppression). Elles se nomment `<table>_get`, `<table>_post`, `<table>_put`, `<table>_delete`. La liste affiche une ligne par table avec ses badges (GET / PUT / POS / DEL). |
| **Requêtes** | Les requêtes indépendantes d'une table — rapports, traitements en masse, requêtes appelées par des actions, des graphiques ou des tableaux de bord. Exemple : `monthly_revenue`, `purge_old_logs`. |
| **Séquences** | Les requêtes qui renvoient le numéro suivant d'une séquence du dictionnaire. Corps typique : `SELECT COALESCE(MAX(<col>), 0) + 1 FROM <table>`. |
| **Lookups** | Les requêtes qui renvoient codes et libellés pour un lookup du dictionnaire. Corps typique : `SELECT <value>, <label> FROM <table>`. |

### Une table ouverte à côté de sa liste \{#table-open\}

Ouvrir une table, une requête, une séquence ou un lookup garde la liste à côté, réduite à une colonne : un clic suffit pour passer au suivant. Les sections du connecteur se replient sur une ligne, comme les étapes de la table — **Général** (libellé et description), puis **Lecture**, **Mise à jour**, **Insertion**, **Suppression**, chacune indiquant si sa requête est *réglée*, *non réglée*, ou en orange *non inscriptible : refusée à l'exécution*.

<svg viewBox="0 0 1320 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ovw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ovw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ovw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ovw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="370" rx="14" fill="url(#ovw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="236" y="46" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]  ·  sql</text>
  <rect x="236" y="60" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="65" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="75.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉGLAGES</text>
  <text x="320.592" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="387" y1="72" x2="397" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="398" y="60" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="405" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="425" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="470.944" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="549" y1="72" x2="559" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="560" y="60" width="170" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="567" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="587" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES</text>
  <text x="644.592" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 requête(s)</text>
  <line x1="731" y1="72" x2="741" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="742" y="60" width="140" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="749" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="769" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉQUENCES</text>
  <text x="832.416" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <line x1="883" y1="72" x2="893" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="894" y="60" width="120" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="901" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="921" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="972.768" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="236" y="98" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="112.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filtrer 3…</text>
  <rect x="236" y="128" width="200" height="38" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="246" y="144" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="246" y="157" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Clients</text>
  <circle cx="398" cy="147" r="3" fill="#4ade80"/>
  <circle cx="407" cy="147" r="3" fill="#4ade80"/>
  <circle cx="416" cy="147" r="3" fill="#4ade80"/>
  <circle cx="425" cy="147" r="3" fill="#4ade80"/>
  <rect x="236" y="172" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="188" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="246" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affaires en cours</text>
  <circle cx="398" cy="191" r="3" fill="#4ade80"/>
  <circle cx="407" cy="191" r="3" fill="#4ade80"/>
  <circle cx="416" cy="191" r="3" fill="#4ade80"/>
  <circle cx="425" cy="191" r="3" fill="#334155"/>
  <rect x="236" y="216" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="232" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">activities</text>
  <text x="246" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notes et appels</text>
  <circle cx="398" cy="235" r="3" fill="#4ade80"/>
  <circle cx="407" cy="235" r="3" fill="#334155"/>
  <circle cx="416" cy="235" r="3" fill="#334155"/>
  <circle cx="425" cy="235" r="3" fill="#334155"/>
  <rect x="450" y="98" width="634" height="270" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="108" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="520.5" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← Toutes les tables</text>
  <text x="591" y="123" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="669" y="123" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">· 4 requêtes présentes</text>
  <rect x="777" y="136" width="146" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="150.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↗ Ouvrir l'éditeur visuel</text>
  <rect x="929" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="941.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂</text>
  <rect x="958" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="970.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="987" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇄</text>
  <rect x="1016" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1028.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇆</text>
  <rect x="1045" y="136" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1057.0" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1074" y="136" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1086.0" y="151" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="462" y="172" width="80" height="24" rx="12" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="469" y="177" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="489" y="187.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GÉNÉRAL</text>
  <line x1="543" y1="184" x2="544.25" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="545.25" y="172" width="115" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="552.25" y="177" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="572.25" y="187.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LECTURE</text>
  <text x="624.018" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">réglée</text>
  <line x1="661.25" y1="184" x2="662.5" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="663.5" y="172" width="138" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="670.5" y="177" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="690.5" y="187.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MISE À JOUR</text>
  <text x="765.564" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">réglée</text>
  <line x1="802.5" y1="184" x2="803.75" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="804.75" y="172" width="126" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="811.75" y="177" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="831.75" y="187.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSERTION</text>
  <text x="895.166" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">réglée</text>
  <line x1="931.75" y1="184" x2="933.0" y2="184" stroke="#475569" strokeWidth="1" markerEnd="url(#ovw-flow)"/>
  <rect x="934.0" y="172" width="138" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="941.0" y="177" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="961.0" y="187.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUPPRESSION</text>
  <text x="1036.064" y="187.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">réglée</text>
  <text x="462" y="214" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Métadonnées partagées de cette table (portées par la requête de lecture).</text>
  <text x="462" y="236" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="462" y="242" width="610" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="471" y="257.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="462" y="284" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="462" y="290" width="610" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="471" y="305.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients du portefeuille</text>
  <text x="462" y="346" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Lecture · Mise à jour · Insertion · Suppression ouvrent la requête _get, _put, _post, _delete de la table.</text>
  <rect x="20" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections, repliées</text>
  <text x="30" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tables choisie</text>
  <line x1="200" y1="67.0" x2="236" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La liste reste à côté</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque point : une requête</text>
  <line x1="200" y1="167.0" x2="398" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic pour la suivante</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deals, activities…</text>
  <line x1="200" y1="307.0" x2="276" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1120" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la table</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, renommer, cloner, supprimer</text>
  <line x1="1120" y1="107.0" x2="1044" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1120" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq étapes</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réglée · non réglée · non inscriptible</text>
  <line x1="1120" y1="197.0" x2="1064" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1120" y="270" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Général</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé et description</text>
  <line x1="1120" y1="287.0" x2="1072" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
</svg>

**Changer le type** déplace une requête vers une autre section — par exemple une requête écrite sous *Requêtes* qui sert finalement à un lookup. Quand le déplacement change le nom de la requête (une requête de table devient indépendante, ou l'inverse), un avertissement indique le nouveau nom : les écrans, actions et entrées du dictionnaire qui utilisent l'ancien nom sont à mettre à jour.

---

## Les boutons d'ajout — un par vue \{#add\}

| Vue | Bouton | Ce qui s'ouvre |
|---|---|---|
| **Tables** | *＋ Ajouter des requêtes* | Un choix : **Générer depuis la BDD** (l'assistant CRUD — lit la table dans la base et génère les quatre requêtes) ou **Squelette vide** (demande un nom de table et crée une requête de lecture vide). |
| **Requêtes** | *＋ Ajouter une requête* | La saisie d'un nom, puis une requête vide à écrire à la main. |
| **Séquences** | *＋ Ajouter une séquence* | L'assistant de génération — choix d'une table et d'une colonne clé, aperçu du SQL, enregistrement : il écrit la requête **et** la séquence du dictionnaire. |
| **Lookups** | *＋ Ajouter un lookup* | L'assistant de génération — choix d'une table, d'une colonne valeur, d'une colonne libellé et d'un filtre facultatif, enregistrement : il écrit la requête **et** le lookup du dictionnaire. |

Les pages suivantes détaillent chaque chemin.

---

## Contenu d'une requête \{#fields\}

L'éditeur de requête dessine une requête en trois cartes d'étape — **Ce que c'est**, **Instruction**, **Paramètres** — sous un en-tête qui porte son nom et ses boutons :

| Étape | Champ | Requis | Rôle |
|---|---|---|---|
| — | **Nom** (en-tête) | Oui | Unique au sein du connecteur. La permission de la requête est `sql:<connecteur>:<nom>`. Se modifie avec *Renommer*, qui met à jour toutes les références. |
| Ce que c'est | **Label** | Non | Nom court affiché dans les listes. |
| Ce que c'est | **Description** | Non | Ce que renvoie la requête — affiché sous le nom dans les listes. |
| Instruction | **SQL** | Oui | L'instruction, avec ses paramètres `:nom`. Un texte unique, ou une variante par base de données (`default` obligatoire) — voir [Variantes SQL par dialecte](./per-dialect-sql.md). |
| Instruction | **Writable** | Non (désactivé) | Désactivé, seul un SELECT est accepté. Activé pour INSERT / UPDATE / DELETE / CALL. |
| Paramètres | **Params** | Non | Les paramètres déclarés, une ligne chacun : **Name**, **Label**, **Default**, **Help**, **Example**, **Choices**, **Required** — voir [Liaison de paramètres](./parameter-binding.md#declare). |

La carte **Instruction** affiche le premier mot de l'instruction et les bases pour lesquelles elle est écrite, en orange quand elle est vide ou qu'elle écrit sans être marquée inscriptible ; la carte **Paramètres** indique combien sont déclarés et quels `:paramètres` contient l'instruction.

---

## Enregistrer et recharger — ce que fait un clic

L'enregistrement de cette page est atomique sur deux fichiers quand c'est nécessaire :

| Action effectuée | Ce qui est écrit |
|---|---|
| Création ou modification d'une table ou d'une requête | Le fichier du connecteur. |
| Utilisation de l'assistant de génération pour une séquence ou un lookup | Le fichier du connecteur **et** le dictionnaire (la nouvelle séquence ou le nouveau lookup dans la portée du connecteur). |
| Duplication d'un connecteur (application entière) | Une écriture multi-fichiers qui copie la surcouche du dictionnaire, les écrans, le menu, les graphiques et les tableaux de bord sous le nouveau nom. Passe par une route dédiée du serveur. |
| Renommage d'un connecteur, d'une requête ou d'une table | Une mise à jour multi-fichiers qui touche chaque référence (écrans, menus, dictionnaire, graphiques, tableaux de bord). Refuse de s'exécuter quand des modifications locales ne sont pas enregistrées. |

Après chaque enregistrement, le framework lance automatiquement un **rechargement à chaud**. La nouvelle requête est appelable immédiatement — pas de redémarrage, pas de déconnexion.

---

## Carte rapide

| Objectif | À lire |
|---|---|
| Générer les quatre requêtes CRUD à partir d'une table réelle de la base. | [Créer depuis une table de base](./create-from-database.md) — le parcours par assistant, recommandé quand la table existe. |
| Écrire une requête personnalisée (isolée, manuelle). | [Créer une requête personnalisée](./create-custom.md). |
| Faire une copie d'une requête existante ou de toute une application. | [Dupliquer une requête ou un connecteur](./clone.md). |
| Ajouter une séquence (numéro suivant) ou un lookup (source d'une liste déroulante). | [Séquences et lookups](./sequences-and-lookups.md). |
| Passer des valeurs à une requête — valeurs fixes, autres colonnes, utilisateur connecté. | [Liaison de paramètres](./parameter-binding.md). |
| Livrer un SQL différent pour Postgres et Oracle. | [Variantes SQL par dialecte](./per-dialect-sql.md). |

---

## Et ensuite

- [Créer depuis une table de base](./create-from-database.md) — à lire en premier quand la table existe déjà dans la base.
- [Concepts → Connecteurs](../../connectors.md) — la référence détaillée derrière cette page (types de connecteurs, pools, cycle de vie d'une requête).
