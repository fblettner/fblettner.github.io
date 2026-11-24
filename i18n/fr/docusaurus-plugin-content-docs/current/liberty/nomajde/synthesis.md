---
title: Synthèse de la plateforme
description: "La synthèse de la plateforme dans Nomajde : JD Edwards EnterpriseOne en un coup d'œil — six chiffres, une seule liste de ce que signalent les analyses des serveurs, des performances et de la base, le plus sérieux d'abord, le schéma d'architecture, un onglet par analyse, la capacité de la plateforme et l'évolution de ses chiffres, ce qui peut être amélioré dans l'architecture, et le PDF de synthèse de la plateforme. Lecture seule."
keywords: [Nomajde, JD Edwards, JDE E1, synthèse de la plateforme, supervision, Server Manager, architecture, performance, audit de la base, points à revoir, instances en marche, utilisateurs en ligne, fonctions métier, taille de la base, capacité, traitements batch, relevé de la plateforme, améliorations, dimensionnement, rapport PDF]
---

# Synthèse de la plateforme

**Synthèse de la plateforme**, juste sous **Vue d'ensemble** dans le menu de Nomajde, rassemble la plateforme JD Edwards EnterpriseOne sur une seule page : six chiffres, puis **ce qui demande attention** dans les trois analyses du dossier Supervision — [Analyse de la plateforme](./monitoring/platform-analysis.md), [Performance](./monitoring/performance.md) et [Audit de la base de données](./monitoring/database-audit.md) — en une seule liste, le plus sérieux d'abord, et l'[architecture](./monitoring/architecture.md) telle qu'elle est trouvée. C'est la page à ouvrir en premier pour savoir comment se porte la plateforme ; chaque onglet mène à la page complète correspondante. Deux onglets vont plus loin : **Capacité** — la taille de la plateforme et l'évolution de ses chiffres — et **Améliorations** — ce qui peut être amélioré dans l'architecture. **Obtenir le rapport (PDF)** rassemble le tout dans un document à diffuser.

Tout est lu en direct à la première ouverture de la page ; la page ne fait que lire. Ce qu'elle a lu est ensuite conservé pendant toute la session du navigateur : la rouvrir l'affiche aussitôt, et l'en-tête indique l'heure de la plus ancienne de ses lectures (*Lu à 14:02*). **Relire** relit l'ensemble. Les pages de la supervision — Synthèse de la plateforme, Architecture, Analyse de la plateforme, Performance et Audit de la base de données — partagent leurs lectures : ce qu'une page a lu, les autres l'affichent aussitôt, et ce qu'une page relit est à jour dans les autres. Les lectures sont conservées par utilisateur, dans la mémoire du navigateur seulement : un rechargement du navigateur relit tout. L'historique des chiffres est celui que conserve la tâche *Relevé de la plateforme*.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsyn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsyn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsyn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsyn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="374" rx="14" fill="url(#nsyn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse de la plateforme</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La plateforme JD Edwards en un coup d'œil : ce qui demande attention, son architecture, et ce que dit chaque analyse.</text>
  <rect x="907" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="740" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Lu à 14:02</text>
  <rect x="750" y="34" width="149" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="824.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Obtenir le rapport (PDF)</text>
  <rect x="240.0" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="98" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">5 / 5</text>
  <text x="250.0" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">INSTANCES EN MARCHE</text>
  <rect x="361.3333333333333" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="98" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="371.3333333333333" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">UTILISATEURS EN LIGNE</text>
  <rect x="482.66666666666663" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="98" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">12 480</text>
  <text x="492.66666666666663" y="107" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">APPELS DE FONCTIONS</text>
  <text x="492.66666666666663" y="117" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MÉTIER</text>
  <rect x="604.0" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="98" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">214 Go</text>
  <text x="614.0" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">TAILLE DE LA BASE</text>
  <rect x="725.3333333333333" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="98" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="735.3333333333333" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NON DÉCLARÉS DANS SM</text>
  <rect x="846.6666666666666" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="98" fill="#f87171" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="856.6666666666666" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">POINTS À REVOIR</text>
  <rect x="240.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,159,10,0.08)" stroke="#fb923c" strokeWidth="1"/>
  <rect x="248.0" y="140" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.2"/>
  <text x="272.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Attention</text>
  <text x="272.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Ce que signalent les analyses…</text>
  <rect x="422.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="430.0" y="140" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="454.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="454.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Ce que Server Manager déclare…</text>
  <rect x="604.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="612.0" y="140" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.2"/>
  <text x="636.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Serveurs</text>
  <text x="636.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Instances, processus… · 2 à revoir</text>
  <rect x="786.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="794.0" y="140" width="18" height="18" rx="5" fill="#c084fc" fillOpacity="0.2"/>
  <text x="818.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="818.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Où va le temps · 3 à revoir</text>
  <rect x="240.0" y="174" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="248.0" y="182" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="272.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Base de données</text>
  <text x="272.0" y="202" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Taille, espace, activité · 1 à revoir</text>
  <rect x="422.0" y="174" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="430.0" y="182" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.2"/>
  <text x="454.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Capacité</text>
  <text x="454.0" y="202" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">La taille de la plateforme…</text>
  <rect x="604.0" y="174" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="612.0" y="182" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.2"/>
  <text x="636.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Améliorations</text>
  <text x="636.0" y="202" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">… · 3 à prévoir</text>
  <rect x="240" y="222" width="720" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="240" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUI DEMANDE ATTENTION</text>
  <line x1="240" y1="248" x2="960" y2="248" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">À TRAITER D'ABORD</text>
  <circle cx="256" cy="283" r="3.5" fill="#f87171"/>
  <text x="266" y="286" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERFORMANCE</text>
  <text x="356" y="286" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Fonctions métier</text>
  <text x="476" y="286" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">B4200310 prend 41 % du temps mesuré — 38 s sur 920 appel(s)</text>
  <text x="252" y="306" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">À EXAMINER</text>
  <circle cx="256" cy="323" r="3.5" fill="#fb923c"/>
  <text x="266" y="326" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVEURS</text>
  <text x="356" y="326" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="476" y="326" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">L'instance AIS_PD (restserver) n'est pas en marche : STOPPED.</text>
  <circle cx="256" cy="343" r="3.5" fill="#fb923c"/>
  <text x="266" y="346" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVEURS</text>
  <text x="356" y="346" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Serveur d'entreprise</text>
  <text x="476" y="346" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">2 processus zombie(s) sur ENT_PD</text>
  <circle cx="256" cy="363" r="3.5" fill="#fb923c"/>
  <text x="266" y="366" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <text x="356" y="366" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">L'instance</text>
  <text x="476" y="366" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">La base est en mode NOARCHIVELOG : pas de restauration à un instant donné.</text>
  <rect x="20" y="78" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="93" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six chiffres</text>
  <text x="30" y="106" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange ou rouge s'il faut regarder</text>
  <line x1="200" y1="95.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sept onglets</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le nombre à revoir sur chacun</text>
  <line x1="200" y1="157.0" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le plus sérieux d'abord</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à traiter d'abord, puis à examiner</text>
  <line x1="200" y1="279.0" x2="252" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">D'où vient la ligne</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'analyse et son domaine</text>
  <line x1="200" y1="347.0" x2="266" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Obtenir le rapport</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la synthèse en PDF</text>
  <line x1="1000" y1="77.0" x2="933.5" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Capacité · Améliorations</text>
  <text x="1010" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">taille, évolution, propositions</text>
  <line x1="1000" y1="193.0" x2="778.0" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque fait une fois</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">formulé comme sur sa page</text>
  <line x1="1000" y1="317.0" x2="860" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
</svg>

---

## Les chiffres \{#figures\}

| Chiffre | Ce qu'il compte |
|---|---|
| **Instances en marche** | Les instances de Server Manager en marche, sur toutes celles qu'il déclare — en orange dès qu'une instance est arrêtée. |
| **Utilisateurs en ligne** | Les utilisateurs connectés aux serveurs web et AIS. |
| **Appels de fonctions métier** | Les appels des serveurs web aux serveurs d'entreprise depuis leur démarrage. |
| **Taille de la base** | La taille de la base de JD Edwards, en Go. |
| **Non déclarés dans Server Manager** | Ce que la base laisse voir sans que Server Manager le déclare — un serveur de base de données, une machine qui exécute des noyaux, un autre client de la base (voir [Architecture](./monitoring/architecture.md#undeclared)). En orange dès qu'il y en a un. |
| **Points à revoir** | Les lignes de l'onglet **Attention** — en rouge quand l'une est à traiter d'abord, en orange quand il n'y a que des points à examiner, en vert quand il n'y a rien. |

---

## Les onglets \{#tabs\}

La page s'ouvre sur le dernier onglet choisi. La description de chaque onglet indique combien de points il compte à revoir.

| Onglet | Contenu |
|---|---|
| **Attention** | Ce que signalent les trois analyses, en une seule liste : **À traiter d'abord**, puis **À examiner**. Chaque ligne indique l'analyse d'origine (*Serveurs*, *Performance*, *Base de données*), son domaine et le constat, formulé comme sur sa propre page. Un fait relevé par deux analyses sur la même instance — des processus zombies, par exemple — n'apparaît qu'une fois. |
| **Architecture** | Le [schéma d'architecture](./monitoring/architecture.md) : les niveaux, les hôtes, les instances, la base et les liens tracés sur preuve. Un clic sur une carte ouvre la page Architecture complète. |
| **Serveurs** | Ce que dit l'[Analyse de la plateforme](./monitoring/platform-analysis.md) : instances, processus, fonctions métier, nœuds web et AIS. |
| **Performance** | Ce que disent les conseils de [Performance](./monitoring/performance.md) : où va le temps. |
| **Base de données** | Ce que dit l'[Audit de la base de données](./monitoring/database-audit.md) : taille, espace, activité. |
| **Capacité** | La taille de la plateforme et l'évolution de ses chiffres — voir [Capacité](#capacity). |
| **Améliorations** | Ce qui peut être amélioré dans l'architecture, chaque proposition avec ce sur quoi elle repose et ce qu'il faut faire — voir [Améliorations](#improvements). La description de l'onglet compte les propositions *à prévoir*. |

Les onglets **Serveurs**, **Performance** et **Base de données** listent toutes les lignes de leur analyse — celles à revoir comme celles qui sont correctes — et **Ouvrir la page complète** mène à la page qui porte les chiffres, les détails et les grilles.

Chaque analyse est lue séparément : une analyse en échec ou lente ne masque pas les autres. Une analyse qui n'a pas répondu est signalée par un avertissement (*Non lu — Performance : …*) et le reste de la page s'affiche.

---

## Capacité \{#capacity\}

L'onglet **Capacité** indique la taille de la plateforme, sa charge et l'évolution de ses chiffres, en quatre blocs.

### La taille de la plateforme

Lus maintenant : les **processeurs** du serveur de base de données avec ses cœurs, sa **mémoire** et sa charge, la **taille de la base**, et le volume batch — **traitements batch par jour** en moyenne sur les jours qui en comptent, **le jour le plus chargé**, **traitements batch en erreur** et **traitements batch en attente**. Les chiffres du serveur de base se lisent sur une base Oracle, SQL Server ou Db2 (Db2 for i compris), chacune dans son propre dictionnaire.

**Traitements batch par jour** trace les traitements des 30 derniers jours, une barre par jour, avec les files d'attente par lesquelles ils sont passés. Ces chiffres viennent de la table des traitements de JD Edwards (F986110, dans la carte des serveurs), qui conserve son historique : rien n'est à collecter au préalable. Sur SQL Server, la table est recherchée dans les bases que désigne le pool. Quand la base de JD Edwards est atteinte par un lien de base de données, la table est lue par le lien que le pool indique sous la clé `SVM` dans ses **Liens de base** (voir [Connecteurs → Jetons de schéma et de DB link](../framework/connectors.md#schema-and-db-link-tokens)) ; si le pool ne désigne pas de bibliothèque `SVM`, la table est recherchée dans le dictionnaire de la base distante.

### Les serveurs et leur taille

Chaque machine de la plateforme avec ce qu'elle porte (base de données, serveur d'entreprise, serveur web, serveur AIS…) et ses processeurs, cœurs physiques, mémoire et disque, tels que les conserve [Taille des serveurs](./monitoring/server-sizes.md). Chaque chiffre est marqué *renseigné*, *mesuré par la base* ou *configuration standard*, et l'en-tête compte les machines de chaque catégorie. **Renseigner les tailles** ouvre Taille des serveurs.

### Les serveurs JD Edwards, utilisation actuelle

Tels que Server Manager les mesure : le **processeur** et la **mémoire** utilisés par le serveur d'entreprise, ses **kernels en marche**, et la **mémoire Java** des instances web et AIS rapportée au maximum qu'elle peut atteindre. Server Manager indique ce qu'un serveur utilise, pas la taille de la machine. **Ouvrir la page complète** mène à l'[Analyse de la plateforme](./monitoring/platform-analysis.md).

### L'évolution des chiffres

Un petit graphique par chiffre conservé par les relevés — utilisateurs en ligne, sessions, réponse des fonctions métier, délais dépassés, requêtes en attente, processeur et mémoire du serveur d'entreprise, kernels, mémoire Java, succès du cache ; sessions, charge, succès du cache, sessions bloquées et taille de la base ; traitements batch du jour, en erreur et en attente, processus zombies, instances en marche — avec sa valeur **la plus basse** et **la plus haute**. L'en-tête indique le nombre de relevés conservés et la période couverte.

Les relevés sont écrits par la tâche **Relevé de la plateforme** (toutes les heures telle que livrée, inactive tant qu'elle n'est pas activée) : une ligne par chiffre dans la base de Nomajde, conservée 400 jours par défaut. Sans relevé, le bloc le signale ; une évolution en demande au moins deux. **Ouvrir le job** ouvre la tâche (voir [Tâches](./jobs.md)).

---

## Améliorations \{#improvements\}

Les analyses signalent ce qui ne va pas maintenant. L'onglet **Améliorations** reprend les mêmes éléments un cran au-dessus — la construction de la plateforme et sa charge — et formule ce que proposerait un consultant, à partir de l'architecture, des chiffres lus maintenant et de ceux que les relevés ont conservés.

<svg viewBox="0 0 1200 452" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsynimp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsynimp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsynimp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsynimp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="424" rx="14" fill="url(#nsynimp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="34" width="720" height="262" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="52" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUI PEUT ÊTRE AMÉLIORÉ</text>
  <text x="429.8" y="52" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">tiré de l'architecture, des chiffres lus maintenant et des relevés</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="78" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">À PRÉVOIR · 2</text>
  <rect x="252" y="86" width="696" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="86" width="3" height="50" fill="#fb923c"/>
  <text x="264" y="100" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">La base de données partage sa machine</text>
  <text x="264" y="113" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR QUOI CELA REPOSE</text>
  <text x="264" y="126" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">JDEDB01 porte le serveur d'entreprise et la base de données.</text>
  <text x="600" y="113" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUE FAIRE</text>
  <text x="600" y="124" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">Donner à la base son propre serveur : elle ne dispute plus</text>
  <text x="600" y="133" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">le processeur et la mémoire aux kernels JD Edwards.</text>
  <rect x="252" y="142" width="696" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="142" width="3" height="50" fill="#fb923c"/>
  <text x="264" y="156" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Une seule instance web sert tous les utilisateurs</text>
  <text x="264" y="169" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR QUOI CELA REPOSE</text>
  <text x="264" y="182" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">HTML_PD est la seule instance web — 38 utilisateur(s) en ligne.</text>
  <text x="600" y="169" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUE FAIRE</text>
  <text x="600" y="180" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">Une seconde instance web derrière un répartiteur de charge :</text>
  <text x="600" y="189" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">les utilisateurs continuent quand l'une s'arrête.</text>
  <text x="252" y="208" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">À CONNAÎTRE AVANT UN DIMENSIONNEMENT · 1</text>
  <rect x="252" y="216" width="696" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="216" width="3" height="50" fill="#4a9eff"/>
  <text x="264" y="230" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">1 serveur(s) n'ont pas de taille renseignée</text>
  <text x="264" y="243" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR QUOI CELA REPOSE</text>
  <text x="264" y="256" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">JDEWEB01 : processeurs et mémoire de la configuration standard.</text>
  <text x="600" y="243" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUE FAIRE</text>
  <text x="600" y="254" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">Les renseigner dans Supervision → Taille des serveurs :</text>
  <text x="600" y="263" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">une cible se dimensionne sur ce qu'est chaque serveur.</text>
  <rect x="240" y="306" width="720" height="122" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="324" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUI A ÉTÉ VÉRIFIÉ</text>
  <line x1="240" y1="332" x2="960" y2="332" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="255.0" cy="347" r="3" fill="#4ade80"/>
  <text x="263.0" y="350" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Mémoire Java des instances web et AIS — rien à proposer</text>
  <circle cx="487.0" cy="347" r="3" fill="#4ade80"/>
  <text x="495.0" y="350" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Processeur des serveurs d'entreprise — rien à proposer</text>
  <circle cx="719.0" cy="347" r="3" fill="#4ade80"/>
  <text x="727.0" y="350" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Charge du serveur de base de données — rien à proposer</text>
  <circle cx="255.0" cy="364" r="3" fill="#4ade80"/>
  <text x="263.0" y="367" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Traitements batch en attente — rien à proposer</text>
  <circle cx="487.0" cy="364" r="3" fill="#4ade80"/>
  <text x="495.0" y="367" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Machines face au minimum d'Oracle — rien à proposer</text>
  <circle cx="719.0" cy="364" r="3" fill="#4ade80"/>
  <text x="727.0" y="367" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Tout sur une seule machine — rien à proposer</text>
  <circle cx="255.0" cy="381" r="3" fill="#fb923c"/>
  <text x="263.0" y="384" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">La base sur sa propre machine — une proposition</text>
  <circle cx="487.0" cy="381" r="3" fill="#4ade80"/>
  <text x="495.0" y="384" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Serveurs web et d'entreprise séparés — rien à proposer</text>
  <circle cx="719.0" cy="381" r="3" fill="#4ade80"/>
  <text x="727.0" y="384" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Plus d'un serveur d'entreprise — rien à proposer</text>
  <circle cx="255.0" cy="398" r="3" fill="#fb923c"/>
  <text x="263.0" y="401" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Plus d'une instance web — une proposition</text>
  <circle cx="487.0" cy="398" r="3" fill="#4ade80"/>
  <text x="495.0" y="401" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Plus d'une instance AIS — rien à proposer</text>
  <circle cx="719.0" cy="398" r="3" fill="#4ade80"/>
  <text x="727.0" y="401" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Serveurs inconnus de Server Manager — rien à proposer</text>
  <circle cx="255.0" cy="415" r="3" fill="#475569"/>
  <text x="263.0" y="418" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Croissance de la base — non vérifié</text>
  <circle cx="487.0" cy="415" r="3" fill="#4ade80"/>
  <text x="495.0" y="418" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Historique des chiffres — rien à proposer</text>
  <circle cx="719.0" cy="415" r="3" fill="#fb923c"/>
  <text x="727.0" y="418" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Taille des serveurs — une proposition</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois rangs</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à sa limite · à prévoir · à connaître</text>
  <line x1="200" y1="87.0" x2="252" y2="74" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sur quoi cela repose</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les chiffres, vérifiables</text>
  <line x1="200" y1="157.0" x2="264" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="20" y="326" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quinze vérifications</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune avec son résultat</text>
  <line x1="200" y1="343.0" x2="250" y2="347" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Que faire</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">formulé comme un consultant</text>
  <line x1="1000" y1="117.0" x2="600" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="20" y="398" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Non vérifié</text>
  <text x="30" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">trop peu de données : signalé</text>
  <line x1="200" y1="415.0" x2="250" y2="415" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
</svg>

Chaque proposition indique **Sur quoi cela repose** — les chiffres, vérifiables — et **Que faire**. Elles se répartissent en trois groupes, le plus pressant d'abord :

| Groupe | Contenu |
|---|---|
| **Mesuré à sa limite** | Une mémoire Java proche de son maximum, un processeur de serveur d'entreprise au-delà de 80 %, un serveur de base dont la charge dépasse le nombre de processeurs — au pic conservé par les relevés, sinon tel que lu maintenant. |
| **À prévoir** | Tout sur une seule machine, la base ou le niveau web qui partage une machine, un seul serveur d'entreprise pour les utilisateurs et les traitements batch, une seule instance web, des traitements batch qui s'accumulent en file d'attente, une machine sous le minimum publié par Oracle pour ce qu'elle porte, des machines qui se comportent en serveurs d'entreprise sans être connues de Server Manager. |
| **À connaître avant un dimensionnement** | Pas encore d'historique des chiffres (les pics ne sont pas connus), des serveurs dont la taille n'est ni renseignée ni mesurée, une base qui grossit (avec le volume annuel au rythme observé). |

### Ce qui a été vérifié \{#checked\}

Le bloc liste les quinze vérifications avec leur résultat — **une proposition**, **rien à proposer** ou **non vérifié — pas assez de données lues** : l'absence de proposition n'est jamais silencieuse.

| Vérifications |
|---|
| Mémoire Java des instances web et AIS · Processeur des serveurs d'entreprise · Charge du serveur de base de données · Traitements batch en attente · Machines face au minimum d'Oracle |
| Tout sur une seule machine · La base sur sa propre machine · Serveurs web et d'entreprise séparés · Plus d'un serveur d'entreprise · Plus d'une instance web |
| Plus d'une instance AIS · Serveurs inconnus de Server Manager · Croissance de la base · Historique des chiffres · Taille des serveurs |

---

## Obtenir le rapport \{#report\}

**Obtenir le rapport (PDF)**, en haut de la page, produit la synthèse de la plateforme sous forme de document, pour un lecteur qui n'avait pas la page sous les yeux, dans la langue de la page : ce qui demande attention, l'architecture sur une page à l'italienne avec la taille de chaque serveur et l'origine de chaque chiffre, la capacité (taille de la plateforme, traitements batch par jour, évolution des chiffres) et ce qui peut être amélioré. Les sections de la base prennent les termes de la base lue (*Fichiers de données*, *Journaux de transactions*, *Pools de disques*, *Journaux*…). Une source qui n'a pas répondu est nommée dans le document.

Le même document figure sur la page **Rapports** (*JD Edwards platform synthesis*), avec en paramètres la langue, le nom du client inscrit sur la couverture et **With the OCI estimate** : la [Cible OCI](./monitoring/oci-target.md) et son estimation y sont alors ajoutées en chapitre, avec leurs propres choix (devise, licence, édition, haute disponibilité, site de reprise, plateformes hors production). La tâche *Rapport de synthèse de la plateforme* l'envoie chaque mois par e-mail (voir [Tâches](./jobs.md)).

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu. Elle lit avec les fonctions des quatre pages de supervision — `plugin:nomajde.architecture:*`, `plugin:nomajde.platform:*`, `plugin:nomajde.performance:*` et `plugin:nomajde.dbaudit:*` — et, pour Capacité et Améliorations, `plugin:nomajde.capacity:*`, `plugin:nomajde.sizing:*` et `plugin:nomajde.proposals:*` : un rôle qui n'en a pas une voit l'onglet correspondant non lu. Le PDF demande le droit d'exécuter les rapports de l'application. Les rôles prédéfinis **Exploitant de la plateforme** et **Administrateur** les détiennent toutes (voir [Rôles prédéfinis](./overview.md#roles)).

Elle lit Server Manager par le pool `jde_server_manager` (voir [Server Manager](./monitoring/server-manager.md#connection)) et la base de JD Edwards.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **Attention** : une ligne rouge signale des utilisateurs qui attendent maintenant ; les lignes orange concernent le réglage.
- Après un redémarrage des serveurs, les compteurs repartent de zéro : relire la page une fois que la plateforme a travaillé un moment.
- Pour préparer une réunion ou un audit, **Obtenir le rapport** fournit toute la synthèse en PDF ; l'onglet **Architecture** donne le schéma, que la page Architecture enregistre en SVG.
- Activer tôt la tâche *Relevé de la plateforme* : **Capacité** et **Améliorations** ne lisent les pics qu'à partir d'une semaine de relevés.
- Renseigner la taille des serveurs avant de lire **Améliorations** : une machine sur la configuration standard donne une proposition *à connaître avant un dimensionnement*, pas un constat.
- L'assistant connaît ce qu'affiche la page — les chiffres et les points à traiter d'abord : lui demander *JD Edwards est lent : par où commencer ?* (voir [Assistant IA](./ai-assistant.md)).

---

## Voir aussi

- [Architecture](./monitoring/architecture.md) · [Analyse de la plateforme](./monitoring/platform-analysis.md) · [Performance](./monitoring/performance.md) · [Audit de la base de données](./monitoring/database-audit.md).
- [Taille des serveurs](./monitoring/server-sizes.md) et [Cible OCI](./monitoring/oci-target.md) — les tailles que lit Capacité, et la plateforme proposée sur Oracle Cloud Infrastructure.
- [Préparer la montée de version](./upgrade/analysis.md) — l'autre page placée sous la synthèse.
- [Vue d'ensemble](./home.md) — le point d'entrée.
