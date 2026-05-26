---
title: Présentation de Nomaflow
description: "Nomaflow est le planificateur et le moteur d'orchestration intégrés au Liberty Framework — tâches planifiées par cron, pipelines d'étapes linéaires, nouvelles tentatives avec backoff, historique des exécutions et flux de logs en direct. Aucun worker externe, aucun broker, aucun démon compagnon."
keywords: [Nomaflow, planificateur, orchestration, cron, tâches, exécutions, workflow, ETL, Liberty Framework, in-process]
---

# Présentation de Nomaflow

**Nomaflow** est le planificateur et le moteur d'orchestration livré avec le Liberty Framework. Il s'exécute **dans le processus du framework** — pas de worker séparé, pas de broker (Redis / RabbitMQ), pas de démon compagnon. Le framework déjà installé pour les écrans et les tableaux de bord planifie maintenant aussi les tâches cron, exécute des pipelines ETL, synchronise les annuaires LDAP, distribue des appels HTTP et permet aux opérateurs de suivre chaque exécution en direct depuis une interface.

Si une équipe dispose déjà du framework, elle dispose de Nomaflow. Sinon, le framework est le chemin d'installation.

---

## Ce que Nomaflow résout

La plupart des équipes qui exploitent des applications internes finissent par avoir besoin du même type d'infrastructure de « travail en arrière-plan » :

- Un **rafraîchissement nocturne de base de données** qui rapatrie les données d'un magasin opérationnel vers un magasin de reporting.
- Une **récupération périodique d'API** depuis un service tiers, avec nouvelle tentative en cas d'échec.
- Une **synchronisation LDAP / Active Directory** qui réplique les utilisateurs et les groupes dans l'application.
- Une **tâche de nettoyage** qui purge les anciens enregistrements, archive les PDF, supprime les sessions expirées.
- Un **flux conditionnel** qui ne s'exécute que si un événement précis s'est produit (un fichier est arrivé, un compteur a dépassé un seuil).
- Une **exécution manuelle ponctuelle** qu'un opérateur déclenche depuis un bouton après une livraison.

Faire cela sans Nomaflow revient généralement à éparpiller des entrées cron sur plusieurs hôtes, à maintenir des scripts Python dans différents dépôts, sans logique de reprise commune ni point unique pour visualiser « ce qui vient de tourner ». Avec Nomaflow, on dispose d'**un seul catalogue de tâches, d'un seul historique d'exécutions, d'un seul flux de logs en direct**, le tout dans la même interface que le reste de l'application.

---

## En un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="nf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#nf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow — son rôle, de bout en bout</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · CATALOGUE</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">tâches définies</text>
  <text x="160" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron + manuel</text>
  <text x="160" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">Paramètres → Tâches</text>

  <rect x="280" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · PLANIFICATEUR</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">in-process</text>
  <text x="380" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · intervalle · déclencheur</text>
  <text x="380" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">verrou mono-instance</text>

  <rect x="500" y="100" width="200" height="80" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · MOTEUR D'ÉTAPES</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL · Python · HTTP</text>
  <text x="600" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">retry · timeout · branchement</text>
  <text x="600" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">asynchrone, annulable</text>

  <rect x="720" y="100" width="220" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · HISTORIQUE</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">chronologie des exécutions</text>
  <text x="830" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">logs en direct · abandon · rejeu</text>
  <text x="830" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">rétention 90 jours</text>

  <line x1="260" y1="140" x2="280" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="480" y1="140" x2="500" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="700" y1="140" x2="720" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>

  <rect x="60" y="210" width="880" height="120" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SURFACES OPÉRATEUR</text>
  <text x="76" y="256" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Page Tâches</tspan> — catalogue, recherche, ▶ Lancer maintenant, ▶▶ Exécuter avec paramètres</text>
  <text x="76" y="274" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Page Exécutions</tspan> — chronologie, statut par étape, ouvrir une exécution pour entrer dans le détail</text>
  <text x="76" y="292" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Détail d'exécution</tspan> — entrées/sorties par étape, flux de logs en direct, Abandonner / Rejouer</text>
  <text x="76" y="310" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Notifications</tspan> — Slack / e-mail / webhook en cas de succès ou d'échec</text>
</svg>

---

## Ce que vous pouvez construire

| Schéma | À quoi cela ressemble avec Nomaflow |
|---|---|
| **Synchronisation planifiée de base de données** | Cron à 02 h 00 → étape SQL Copy d'un pool source vers un pool cible → notification de succès. [Recette](./workflows/scheduled-sync.md). |
| **Récupération d'API externe** | Cron toutes les heures → étape HTTP avec authentification bearer → étape Python transformant le payload → écriture SQL dans la table cible. [Recette](./workflows/api-pull.md). |
| **Miroir LDAP / AD** | Cron toutes les 4 heures → étape LDAP Sync → upsert dans la table des utilisateurs. |
| **Nettoyage conditionnel** | Cron quotidien → étape SQL Query pour compter les anciennes lignes → étape Python conditionnelle qui les supprime au-delà d'un seuil. [Recette](./workflows/conditional-cleanup.md). |
| **Exécution manuelle ponctuelle** | Sans planification → l'opérateur ouvre la page *Tâches* → ▶ Lancer maintenant avec paramètres → suit les logs en direct. |
| **Surveillance de fichiers → lot** | Cron toutes les 5 minutes → étape Python listant un dossier → pour chaque nouveau fichier, SQL Copy + déplacement vers l'archive. |
| **Test de bon fonctionnement** | Cron toutes les 5 minutes → étape HTTP sur votre propre healthz → alerte e-mail après 3 échecs consécutifs. |

Les briques sont volontairement petites (une étape fait une seule chose). Les pipelines les composent ; l'historique des exécutions rend visible ce qui s'est passé.

---

## Quand utiliser Nomaflow

| Choisir Nomaflow quand… | Choisir autre chose quand… |
|---|---|
| Les charges restent à l'échelle d'une installation et ne traversent pas plusieurs systèmes. | Les charges couvrent une douzaine de services et nécessitent une vue DAG globale. |
| Le pipeline complet se termine en quelques secondes à quelques minutes. | Une seule étape dure plusieurs heures et requiert de l'autoscaling. |
| Cron + étapes linéaires + nouvelle tentative suffisent. | Vous avez besoin d'expansion dynamique de tâches, de DAG fan-out / fan-in, de calcul distribué. |
| Vous voulez un seul outil, une seule interface, un seul flux de logs. | Vous exploitez déjà Airflow / Dagster / Prefect pour le reste, et un second outil constitue un surcoût. |
| L'alternative serait d'écrire à la main un script Python + un timer systemd. | L'alternative serait d'écrire à la main un CronJob Kubernetes avec sidecars. |

Le point de conception du framework, c'est « la colle opérationnelle dont la plupart des applications internes ont besoin » — pas « tous les cas d'orchestration ». Pour le cas des 80 %, il évite une bonne partie de la plomberie.

---

## Comment Nomaflow s'intègre au framework

Nomaflow s'appuie sur les **connecteurs** du framework pour atteindre les bases de données et les API (les mêmes connecteurs qu'utilisent vos écrans et tableaux de bord), sur le **modèle de permissions** du framework pour décider qui peut déclencher quoi, sur la **couche de chiffrement** du framework pour conserver les identifiants en sécurité, et sur l'**interface Paramètres** du framework pour tout définir. Pas de « base Nomaflow » à installer, pas de « comptes utilisateurs Nomaflow » à gérer.

| Brique du framework | Ce que Nomaflow en tire |
|---|---|
| **Connecteurs** (SQL / HTTP / LDAP) | Accès aux sources de données et aux API via des requêtes / endpoints déclarés. |
| **Pools** | Connexions aux bases de données. |
| **Authentification + rôles** | Permissions `job:<name>` par rôle. `:session_user` pour l'audit des déclenchements. |
| **Chiffrement** | Identifiants des connecteurs, URL de webhooks, secrets OAuth — tous 🔒 chiffrés. |
| **Interface Paramètres** | Le constructeur de tâches et l'éditeur d'étapes y résident. |
| **Socket.IO** | Mises à jour en direct de l'état des exécutions, des transitions d'étapes, du flux de logs. |
| **Canaux de notification** | Slack / e-mail / webhook — définis une seule fois au niveau du framework, utilisés par toutes les tâches. |

La documentation du Liberty Framework couvre ces briques sous-jacentes ; la documentation Nomaflow se concentre sur ce que vous construisez **avec elles**.

---

## Visite guidée de la documentation

| Page | À lire pour… |
|---|---|
| [Démarrage rapide](./getting-started.md) | Construire une première tâche planifiée en 10 minutes. |
| [Concepts](./concepts.md) | Comprendre le modèle mental *tâche / exécution / étape / planification*. |
| [Tâches → Catalogue](./jobs/catalog.md) | Parcourir, rechercher et déclencher des tâches depuis la page Tâches. |
| [Tâches → Créer une tâche](./jobs/create.md) | Suivre pas à pas le constructeur de tâches. |
| [Tâches → Planifications](./jobs/schedules.md) | Syntaxe cron, intervalles, aperçu calendrier. |
| [Étapes](./steps.md) | Le rôle de chaque type d'étape (SQL Query, SQL Copy, Python, HTTP, LDAP Sync). |
| [Exécutions → Historique](./runs/history.md) | La page Exécutions — filtres, statut, accès au détail d'une exécution. |
| [Exécutions → Dépannage](./runs/troubleshoot.md) | Quand une exécution échoue — comment en trouver la cause. |
| [Recettes de workflows](./workflows/scheduled-sync.md) | Trois schémas de bout en bout prêts à adapter. |
| [Étapes Python personnalisées](./custom-python.md) | Brancher votre propre logique quand les étapes déclaratives ne suffisent pas. |
| [Notifications](./notifications.md) | Slack / e-mail / webhook selon les résultats. |
| [Administration](./administration.md) | Planificateur multi-réplique, rétention, comportement au redémarrage. |

---

## Là où Nomaflow ne va pas

Une courte liste honnête, pour que les attentes correspondent à la réalité :

- **Pas de DAG de tâches avec branches parallèles.** Les étapes d'une tâche sont linéaires ; vous pouvez chaîner des tâches via *Dépendances*, mais le modèle reste « étape par étape » et non « graphe ». La plupart des charges opérationnelles s'y prêtent sans difficulté.
- **Pas de pool de workers autoscalable.** Le planificateur s'exécute dans le processus du framework. Les gros lots parallèles (milliers d'étapes simultanées) ne sont pas son point fort.
- **Pas de lignage / catalogue de données.** Nomaflow sait quelles étapes se sont exécutées ; il ne trace pas quelles colonnes ont circulé de quelle source vers quelle cible. Utilisez un outil de catalogue dédié si ce point est important.
- **Pas d'interface de backfill de niveau SaaS.** Vous pouvez rejouer une exécution terminée ; vous n'obtenez pas nativement « rejouer pour chaque jour des 90 derniers jours » (écrivez une étape Python pour cela).

Ce sont des arbitrages, pas des manques à combler — le point de conception, c'est le cas petit, à l'échelle d'une installation.

---

## Prêt à démarrer

→ **[Démarrage rapide](./getting-started.md)** — votre première tâche planifiée en 10 minutes.

Ou, si vous préférez lire d'abord : **[Concepts](./concepts.md)** pour le modèle mental, puis **[Tâches → Créer une tâche](./jobs/create.md)** pour le pas à pas.
