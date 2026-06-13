---
title: Supervision — vue d'ensemble
description: "La page Supervision intégrée de Liberty montre ce qui se passe à l'instant présent — utilisateurs connectés, verrous de lignes détenus, statistiques SQLAlchemy par pool, informations runtime et fil de journaux en direct. Ainsi que les endpoints de santé du framework pour la supervision externe."
keywords: [Liberty Framework, supervision, tableau de bord technique, utilisateurs connectés, verrous détenus, statistiques de pool, fil de journaux, healthz, runtime]
---

# Supervision — vue d'ensemble

Deux surfaces donnent de la visibilité sur ce que fait une installation Liberty en cours d'exécution :

| Surface | Ce qu'elle montre | Public |
|---|---|---|
| **La page Supervision** | Vue runtime en direct — bandeau de KPI, statistiques par pool, utilisateurs connectés, verrous détenus, fil de journaux. Accessible depuis la barre latérale (icône `📊 Supervision`). | Les exploitants de garde. |
| **Les endpoints de santé** | État lisible par les machines — `/health`, `/health`. Utilisé par les load balancers, les sondes Kubernetes, la supervision externe (Prometheus, Datadog…). | L'automatisation. |

Cette page est la carte des deux. Les cartes du tableau de bord ont leur page dédiée ; les endpoints de santé aussi.

---

## La page Supervision

Cliquer sur **Supervision** dans la barre latérale gauche. La page est une vue défilante unique avec cinq sections, chacune dans sa propre carte :

| Carte | Ce qu'elle contient |
|---|---|
| **Bandeau de KPI** | Chiffres rapides : temps d'activité, nombre d'utilisateurs connectés, nombre de verrous actifs, total des connexions de pool. |
| **Pools** | Une ligne par pool — taille du pool, connexions en cours d'utilisation, débordement, profondeur de la file d'attente. Aide à repérer un pool saturé. |
| **Utilisateurs connectés** | Une ligne par utilisateur connecté — nom d'utilisateur, depuis quand, dernière activité. |
| **Verrous détenus** | Les verrous au niveau ligne actuellement détenus par le framework (à l'ouverture d'une boîte de dialogue d'édition, un verrou logique évite que deux exploitants n'écrasent mutuellement leurs modifications). |
| **Journaux** | Les dernières centaines de lignes de journal du framework — colorées par niveau, filtrables par niveau + texte. |

La présentation complète de chaque carte se trouve sur [Tableau de bord](./dashboard.md).

---

## Permissions requises pour voir la page

Visibilité :

| Rôle | Effet |
|---|---|
| **Superutilisateur** | Accès complet — voit chaque section. |
| `monitoring:view` (permission granulaire) | Idem — accès complet. |
| Tout autre | L'entrée Supervision n'apparaît pas dans la barre latérale. La page renvoie 403 si l'URL est saisie directement. |

Accorder la permission `monitoring:view` aux rôles d'exploitation qui doivent garder un œil sur l'installation en cours d'exécution sans hériter du reste des pouvoirs admin.

---

## Quand consulter la Supervision

| Situation | Quoi vérifier en premier |
|---|---|
| Des utilisateurs se plaignent de lenteurs. | Carte **Pools** — un pool est-il saturé (profondeur de file > 0) ? |
| Erreur mystérieuse dans un écran. | Carte **Journaux** — filtrer par `ERROR` et remonter. |
| « Bob a-t-il supprimé cette ligne par erreur ? » | Carte **Utilisateurs connectés** — confirmer que Bob était connecté à ce moment-là. Carte **Verrous** — voir si Bob détenait le verrou de la ligne. |
| Le framework semble figé. | **Bandeau de KPI** — le temps d'activité doit être raisonnable. **Pools** — les connexions ne doivent pas être toutes en cours d'utilisation. |

Pour une investigation plus poussée (temps de réponse par écran, journaux de requêtes lentes par requête), câbler un système de supervision externe — voir [Endpoints de santé](./health-endpoints.md).

---

## Quand câbler une supervision externe

La page Supervision intégrée vit **en mémoire** — un redémarrage du processus efface la carte des verrous, la liste des utilisateurs connectés et le fil de journaux. C'est une *vue d'exploitation en direct*, pas un enregistrement historique.

Pour les métriques historiques et les alertes, il faut un système externe. Liberty fournit les briques :

- **`/health`** — sonde de vivacité (le processus est démarré).
- **`/health`** — sonde de disponibilité (le framework a fini d'amorcer et la base de données est joignable).
- Journaux du processus sur `stdout` — à récupérer avec Loki / Fluentd / Datadog Agent.
- La variable `LIBERTY_LOG_LEVEL` du framework — à passer à `DEBUG` pour une trace détaillée pendant un incident.

La mise en place et les schémas de supervision externe sont couverts sur [Endpoints de santé](./health-endpoints.md).

---

## Ce que la page NE montre PAS

Connaître les limites évite les recherches frustrantes :

| Vous n'y trouverez pas | Où regarder à la place |
|---|---|
| Histogrammes de temps de réponse par écran ou par requête. | Un APM (Datadog APM, New Relic, collecteur OpenTelemetry) — à câbler via le schéma de middleware FastAPI standard. |
| Métriques du serveur de base de données (CPU Postgres, plans de requêtes). | La supervision propre à Postgres (`pg_stat_statements`, pgbadger) ou les outils de votre plateforme BDD. |
| Utilisation des ressources du conteneur (RAM, CPU). | Docker (`docker stats`), la vue conteneur de Portainer, ou les métriques kubelet de Kubernetes. |
| Historique des connexions. | Le journal d'audit du framework (quand il est configuré par écran via `audit_table`) — voir [Construire → Écrans → Général](../framework/build/screens/create-from-query.md). |
| L'historique d'exécution Nomaflow. | La page [Nomaflow → Exécutions](../nomaflow/runs/history.md) — séparée de la Supervision. |

La page Supervision est une vue d'**introspection de processus**. L'historique applicatif (qui a fait quoi quand, quelle exécution a réussi) se trouve sur des surfaces dédiées d'audit et Nomaflow.

---

## Ce que vous faites concrètement — carte rapide

| Objectif | À lire |
|---|---|
| Lire la page Supervision carte par carte. | [Tableau de bord](./dashboard.md). |
| Câbler `/health` à votre load balancer. | [Endpoints de santé](./health-endpoints.md). |
| Mettre en place une collecte de métriques externe. | [Endpoints de santé → Supervision externe](./health-endpoints.md#external-monitoring). |

---

## La suite

- [Tableau de bord](./dashboard.md) — chaque carte de la page Supervision.
- [Endpoints de santé](./health-endpoints.md) — le contrat `/health` / `/health`.
