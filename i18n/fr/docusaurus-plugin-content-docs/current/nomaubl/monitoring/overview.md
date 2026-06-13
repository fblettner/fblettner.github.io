---
title: Supervision — vue d'ensemble
description: "Où regarder quand NomaUBL s'exécute en production — le Tableau de bord technique in-app, le Journal de traitement, le fichier de log du service, les points HTTP build-info / license. Plus les schémas pour raccorder une supervision externe."
keywords: [NomaUBL, supervision, tableau de bord technique, journal de traitement, build-info, license, fichier de log, supervision externe]
---

# Supervision — vue d'ensemble

La visibilité sur une installation NomaUBL en production se répartit sur quatre surfaces — trois dans l'interface web, une sur l'hôte. Cette page sert de carte : quelle surface répond à quelle question opérationnelle, quand regarder où, ce qui manque et où raccorder une supervision externe.

| Surface | Ce à quoi elle répond | Où |
|---|---|---|
| **Tableau de bord technique** | KPI en direct — factures traitées aujourd'hui, en cours, en échec ; état de soumission par PA ; activité de l'ordonnanceur. | *Application → Tableau de bord technique* (page existante). |
| **Journal de traitement** | Trace par document — chaque étape de chaque facture, avec le timing, le résultat XSD/Schematron, l'appel à la PA. | *Gestion → Journal de traitement* (page existante). |
| **Fichier de log du service** | Le stderr / stdout de la JVM — démarrage, chargement de configuration, ticks de l'ordonnanceur, erreurs base de données. | `<APP_HOME>/nomaubl-<env>.log` sur l'hôte. |
| **Points HTTP** | Build info et état de licence au format machine. | `/api/build-info` et `/api/license` sur le service en cours d'exécution. |

Les deux surfaces de l'interface web forment la vue **opérateur** ; le fichier de log et les points HTTP forment la vue **infrastructure** (load balancers, supervision externe, smoke tests CI).

---

## Quand regarder où

| Situation | Surface |
|---|---|
| « Le batch du jour s'est-il bien passé ? » | **Tableau de bord technique** — panneau des factures traitées aujourd'hui. |
| « Quel est le statut de la facture #12345 ? » | **Journal de traitement** — recherche par numéro de document. |
| « Pourquoi la facture #12345 est-elle bloquée ? » | **Journal de traitement** — descendre dans la trace par étape. |
| « Pourquoi l'ordonnanceur ne se déclenche-t-il pas ? » | **Fichier de log du service** — chercher les lignes `scheduler tick`. |
| « La JVM s'est-elle arrêtée brutalement ? » | **Fichier de log du service** + `./nomaubl.sh status` (Linux / macOS) ou `nomaubl.cmd status` (Windows). |
| « La base est-elle joignable ? » | **Fichier de log du service** — chercher `Connected to db-nomaubl` au démarrage. |
| « La PA est-elle joignable ? » | **Fichier de log du service** — chercher les lignes `pa-default API call`. |
| « La licence est-elle encore valide ? » | `curl /api/license` — renvoie `valid` / `expired` / `restricted`. |
| « Quelle version est en service ? » | `curl /api/build-info` — renvoie la version et l'horodatage de build. |
| « Un redémarrage de processus a-t-il eu lieu cette nuit ? » | `./nomaubl.sh status` / `nomaubl.cmd status` montre le PID courant ; le fichier de log montre la bannière de démarrage. |

Les deux premières lignes passent par l'interface ; tout ce qui suit passe par la CLI ou par un `curl`. La page suivante ([Service et logs](./service-and-logs.md)) détaille le côté CLI.

---

## Permissions

Visibilité :

| Surface | Permission |
|---|---|
| Tableau de bord technique | Disponible pour tout utilisateur connecté — mais les KPI eux-mêmes respectent le filtre de données de chaque utilisateur (ex. portée par société). |
| Journal de traitement | Restreint aux rôles disposant de la permission `processing-log` (typiquement opérateurs + administrateurs). |
| Fichier de log du service / points HTTP | Accessibles à quiconque dispose d'un accès SSH / RDP / HTTP à l'hôte. **À restreindre via le pare-feu et le reverse proxy** — `/api/build-info` et `/api/license` ne sont pas authentifiés. |

Les deux points HTTP non authentifiés ne divulguent aucun secret (pas de mots de passe, pas de jetons, uniquement des métadonnées de build et un résumé de licence), mais ils révèlent la **version** de NomaUBL en service. Pour les installations exposées publiquement, il convient de les filtrer derrière le reverse proxy ou le VPN si ce point est sensible.

---

## En un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#mov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Supervision NomaUBL — quatre surfaces</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="80" width="220" height="120" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="150" y="106" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLEAU DE BORD TECHNIQUE</text>
  <text x="150" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI en direct</text>
  <text x="150" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">État du batch du jour</text>
  <text x="150" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Soumission par PA</text>
  <text x="150" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Application → Tableau de bord technique</text>

  <rect x="272" y="80" width="220" height="120" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="382" y="106" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURNAL DE TRAITEMENT</text>
  <text x="382" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Trace par document</text>
  <text x="382" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Timing par étape, résultat XSD</text>
  <text x="382" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Détail des appels PA</text>
  <text x="382" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Gestion → Journal de traitement</text>

  <rect x="504" y="80" width="220" height="120" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="614" y="106" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHIER DE LOG DU SERVICE</text>
  <text x="614" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl-&lt;env&gt;.log</text>
  <text x="614" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Démarrage, ticks ordonnanceur</text>
  <text x="614" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Erreurs JDBC / PA / FTP</text>
  <text x="614" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">nomaubl.sh / nomaubl.cmd log env</text>

  <rect x="736" y="80" width="224" height="120" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.40)"/>
  <text x="848" y="106" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS HTTP</text>
  <text x="848" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/build-info</text>
  <text x="848" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/license</text>
  <text x="848" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Statut au format machine</text>
  <text x="848" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Supervision externe · sondes LB</text>

  <rect x="40" y="220" width="920" height="60" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="242" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PUBLIC VISÉ</text>
  <text x="58" y="262" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Surfaces interface web (deux de gauche) → opérateurs et comptables — exploitation quotidienne.</text>
  <text x="58" y="276" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Surfaces hôte (deux de droite) → ops / SRE — réponse aux incidents, smoke tests, alerting automatisé.</text>

  <rect x="40" y="298" width="920" height="50" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="320" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI N'EST PAS DIVULGUÉ EN STANDARD</text>
  <text x="58" y="338" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Prometheus /metrics · traces OpenTelemetry · histogrammes de latence par requête — à raccorder en externe (voir ci-dessous).</text>
</svg>

---

## Ce que NomaUBL ne met PAS à disposition

Connaître ces manques évite de chercher au mauvais endroit :

| Manquant | Où l'obtenir à la place |
|---|---|
| **Prometheus `/metrics`** | Non intégré. Scraper l'hôte avec `node_exporter` ; extraire des compteurs applicatifs depuis le fichier de log ; ou bâtir un petit exporteur JMX au-dessus de la JVM. |
| **Traces OpenTelemetry** | Non intégrées. Le pipeline de traitement émet des logs structurés par étape — les rediriger vers un système de tracing log-based pour obtenir des vues en cascade. |
| **Histogrammes de latence par requête** | Le Tableau de bord technique affiche les agrégats ; pour les percentiles et le détail requête par requête, placer un APM devant le reverse proxy. |
| **Stats heap / GC** | JMX JVM standard — connecter VisualVM ou JConsole en JMX, ou exposer JMX via un exporteur JMX-to-Prometheus. |
| **Métriques live du pool de connexions BD** | NomaUBL utilise un modèle de connexion simple par appel, sans pool. Le nombre de connexions est fonction des requêtes en cours — observable via `V$SESSION` d'Oracle ou `pg_stat_activity` de PostgreSQL. |

La plupart des besoins de supervision externe se résument à : **scraper l'hôte avec les outils standard, extraire depuis le fichier de log, placer un APM en amont**. Le framework lui-même reste centré sur les surfaces in-app.

---

## Supervision day-zero

Une posture de supervision minimale prête pour la production sur une installation mono-hôte :

1. **Démarrage automatique via systemd** avec `Restart=on-failure` — voir [Service et systemd](../installation/service-and-systemd.md).
2. **Rotation des logs** avec logrotate (`copytruncate`) — même page.
3. **Sonde de vivacité** depuis le load balancer / l'outil de monitoring d'uptime qui interroge `/api/build-info` toutes les 30 secondes.
4. **Alerte de licence** — un petit script qui interroge `/api/license` chaque jour et lève une alerte si `valid: false`.
5. **Transfert de logs** — rediriger `nomaubl-<env>.log` vers le stockage central de logs (Loki, ELK, Datadog Logs). Le framework écrit en stderr/stdout standard — tout shipper de logs ligne par ligne le capte.
6. **Supervision base de données** — l'outillage natif du moteur (Oracle : `V$SESSION`, AWR ; PostgreSQL : `pg_stat_activity`, `pg_stat_statements` ; ou les tableaux de bord déjà en place chez le DBA).

Les éléments 3, 4 et 5 sont les gains rapides qui couvrent 80 % des incidents de production.

---

## Ce qui est fait concrètement — carte rapide

| Objectif | À lire |
|---|---|
| Parcourir les cartes du Tableau de bord technique. | [Application → Tableau de bord technique](../application/tech-dashboard.md). |
| Investiguer une facture bloquée ou en échec. | [Gestion → Journal de traitement](../management/processing-log.md). |
| Utiliser `status` du wrapper + suivi des logs pour les incidents (Linux ou Windows). | [Service et logs](./service-and-logs.md). |
| Raccorder une supervision externe (sondes LB, alerting, transfert de logs). | [Service et logs](./service-and-logs.md). |

---

## Et ensuite

- [Service et logs](./service-and-logs.md) — la couche CLI + points HTTP en détail.
- [Application → Tableau de bord technique](../application/tech-dashboard.md) — la vue live in-app.
- [Gestion → Journal de traitement](../management/processing-log.md) — trace par document.
