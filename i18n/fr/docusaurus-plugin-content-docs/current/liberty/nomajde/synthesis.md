---
title: Synthèse de la plateforme
description: "La synthèse de la plateforme dans Nomajde : JD Edwards EnterpriseOne en un coup d'œil — six chiffres, une seule liste de ce que signalent les analyses des serveurs, des performances et de la base, le plus sérieux d'abord, puis le schéma d'architecture et un onglet par analyse avec un accès à sa page complète. Lecture en direct, sans aucune écriture."
keywords: [Nomajde, JD Edwards, JDE E1, synthèse de la plateforme, supervision, Server Manager, architecture, performance, audit de la base, points à revoir, instances en marche, utilisateurs en ligne, fonctions métier, taille de la base]
---

# Synthèse de la plateforme

**Synthèse de la plateforme**, juste sous **Vue d'ensemble** dans le menu de Nomajde, rassemble la plateforme JD Edwards EnterpriseOne sur une seule page : six chiffres, puis **ce qui demande attention** dans les trois analyses du dossier Supervision — [Analyse de la plateforme](./monitoring/platform-analysis.md), [Performance](./monitoring/performance.md) et [Audit de la base de données](./monitoring/database-audit.md) — en une seule liste, le plus sérieux d'abord, et l'[architecture](./monitoring/architecture.md) telle qu'elle est trouvée. C'est la page à ouvrir en premier pour savoir comment se porte la plateforme ; chaque onglet mène à la page complète correspondante.

Tout est lu en direct, à chaque ouverture de la page ou clic sur **Relire**, et rien n'est conservé : la page ne fait que lire.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 388" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsyn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsyn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsyn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsyn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="344" rx="14" fill="url(#nsyn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse de la plateforme</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La plateforme JD Edwards en un coup d'œil : ce qui demande attention, son architecture, et ce que dit chaque analyse.</text>
  <rect x="907" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="105" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4 / 5</text>
  <text x="250.0" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCES EN MARCHE</text>
  <rect x="361.3333333333333" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="105" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="371.3333333333333" y="120" fill="#64748b" fontSize="7.01" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS EN LIGNE</text>
  <rect x="482.66666666666663" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12 480</text>
  <text x="492.66666666666663" y="120" fill="#64748b" fontSize="5.67" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS DE FONCTIONS MÉTIER</text>
  <rect x="604.0" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">214 GB</text>
  <text x="614.0" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAILLE DE LA BASE</text>
  <rect x="725.3333333333333" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="105" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="735.3333333333333" y="120" fill="#64748b" fontSize="5.6" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NON DÉCLARÉS DANS SERVER MANAGER</text>
  <rect x="846.6666666666666" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="105" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="856.6666666666666" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS À REVOIR</text>
  <rect x="240.0" y="138" width="137.6" height="34" rx="7" fill="rgba(74,158,255,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <rect x="248.0" y="146" width="18" height="18" rx="4" fill="#fb923c" fillOpacity="0.18"/>
  <text x="272.0" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Attention</text>
  <text x="272.0" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Ce que signalent les…</text>
  <rect x="385.6" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="393.6" y="146" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="417.6" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="417.6" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Ce que Server Manager…</text>
  <rect x="531.2" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="539.2" y="146" width="18" height="18" rx="4" fill="#4ade80" fillOpacity="0.18"/>
  <text x="563.2" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Serveurs</text>
  <text x="563.2" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Instances, processus…</text>
  <rect x="676.8" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="684.8" y="146" width="18" height="18" rx="4" fill="#c084fc" fillOpacity="0.18"/>
  <text x="708.8" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="708.8" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">… · 3 à revoir</text>
  <rect x="822.4" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="830.4" y="146" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="854.4" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Base de données</text>
  <text x="854.4" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">… · 1 à revoir</text>
  <rect x="240" y="184" width="720" height="164" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="184" width="720" height="24" rx="8" fill="rgba(255,255,255,0.04)"/>
  <text x="252" y="200" fill="#e2e8f0" fontSize="8.2" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUI DEMANDE ATTENTION</text>
  <text x="252" y="224" fill="#64748b" fontSize="7.2" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">À TRAITER D'ABORD</text>
  <circle cx="256" cy="237" r="3.2" fill="#f87171"/>
  <text x="266" y="240" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERFORMANCE</text>
  <text x="354" y="240" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Fonctions métier</text>
  <text x="452" y="240" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">B4200310 prend 41 % de tout le temps mesuré — 38 s sur 920 appel(s), 41 ms chacun</text>
  <text x="252" y="258" fill="#64748b" fontSize="7.2" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">À EXAMINER</text>
  <circle cx="256" cy="271" r="3.2" fill="#fb923c"/>
  <text x="266" y="274" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVEURS</text>
  <text x="354" y="274" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="452" y="274" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">L'instance AIS_PD (restserver) n'est pas en marche : STOPPED.</text>
  <circle cx="256" cy="289" r="3.2" fill="#fb923c"/>
  <text x="266" y="292" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVEURS</text>
  <text x="354" y="292" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Serveur d'entreprise</text>
  <text x="452" y="292" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">2 processus zombie(s) sur ENT_PD : des processus terminés sans être nettoyés — …</text>
  <circle cx="256" cy="307" r="3.2" fill="#fb923c"/>
  <text x="266" y="310" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERFORMANCE</text>
  <text x="354" y="310" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Caches</text>
  <text x="452" y="310" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">JDBj Security Cache sur HTML_PD répond 72 % du temps (184 210 accès, 3 éléments)</text>
  <circle cx="256" cy="325" r="3.2" fill="#fb923c"/>
  <text x="266" y="328" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <text x="354" y="328" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">L'instance</text>
  <text x="452" y="328" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">La base est en mode NOARCHIVELOG : pas de restauration à un instant donné.</text>
  <rect x="1000" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="1010" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque analyse, séparément</text>
  <line x1="1000" y1="53.0" x2="960" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six chiffres</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange ou rouge s'il faut regarder</text>
  <line x1="200" y1="107.0" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Points à revoir</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la liste Attention, comptée</text>
  <line x1="1000" y1="117.0" x2="940" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le nombre à revoir sur chacun</text>
  <line x1="200" y1="167.0" x2="240" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les autres onglets</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qu'elle dit + sa page complète</text>
  <line x1="1000" y1="177.0" x2="880" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le plus sérieux d'abord</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à traiter, puis à examiner</text>
  <line x1="200" y1="257.0" x2="252" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">D'où vient le point</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'analyse et son domaine</text>
  <line x1="200" y1="337.0" x2="266" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque fait une fois</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">formulé comme sur sa page</text>
  <line x1="1000" y1="307.0" x2="780" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
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

Les onglets **Serveurs**, **Performance** et **Base de données** listent toutes les lignes de leur analyse — celles à revoir comme celles qui sont correctes — et **Ouvrir la page complète** mène à la page qui porte les chiffres, les détails et les grilles.

Chaque analyse est lue séparément : une analyse en échec ou lente ne masque pas les autres. Une analyse qui n'a pas répondu est signalée par un avertissement (*Non lu — Performance : …*) et le reste de la page s'affiche.

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu. Elle lit avec les fonctions des quatre pages de supervision — `plugin:nomajde.architecture:*`, `plugin:nomajde.platform:*`, `plugin:nomajde.performance:*` et `plugin:nomajde.dbaudit:*` : un rôle qui n'en a pas une voit l'onglet correspondant non lu. Les rôles prédéfinis **Exploitant de la plateforme** et **Administrateur** les détiennent toutes (voir [Rôles prédéfinis](./overview.md#roles)).

Elle lit Server Manager par le pool `jde_server_manager` (voir [Server Manager](./monitoring/server-manager.md#connection)) et la base de JD Edwards.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **Attention** : une ligne rouge signale des utilisateurs qui attendent maintenant ; les lignes orange concernent le réglage.
- Après un redémarrage des serveurs, les compteurs repartent de zéro : relire la page une fois que la plateforme a travaillé un moment.
- Pour préparer une réunion ou un audit, l'onglet **Architecture** donne le schéma, que la page Architecture enregistre en SVG.
- L'assistant connaît ce qu'affiche la page — les chiffres et les points à traiter d'abord : lui demander *JD Edwards est lent : par où commencer ?* (voir [Assistant IA](./ai-assistant.md)).

---

## Voir aussi

- [Architecture](./monitoring/architecture.md) · [Analyse de la plateforme](./monitoring/platform-analysis.md) · [Performance](./monitoring/performance.md) · [Audit de la base de données](./monitoring/database-audit.md).
- [Préparer la montée de version](./upgrade/analysis.md) — l'autre page placée sous la synthèse.
- [Vue d'ensemble](./home.md) — le point d'entrée.
