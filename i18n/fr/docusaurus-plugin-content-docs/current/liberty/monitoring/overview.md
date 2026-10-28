---
title: Surveillance — vue d'ensemble
description: "Surveiller un serveur Liberty Next en fonctionnement : la page Surveillance pour les superutilisateurs (sessions, verrous d'enregistrement, pools de base, runtime, journal en direct), les points de santé pour les sondes, et les commandes status et doctor."
keywords: [Liberty Next, surveillance, tableau de bord technique, utilisateurs connectés, verrous d'enregistrement, pools, journal, health, ready, info]
---

# Surveillance — vue d'ensemble

| Outil | Affiche | Pour |
|---|---|---|
| **La page Surveillance** | Ce qui se passe maintenant : utilisateurs connectés, verrous d'enregistrement, pools de base, runtime, journal en direct. | Les superutilisateurs, depuis l'entrée **Surveillance** du menu latéral. Voir [La page Surveillance](./dashboard.md). |
| **Journal du serveur** et **Rétention** | Toutes les lignes écrites par le serveur, avec recherche ; ce que le serveur conserve et la place occupée. | Les superutilisateurs, dans les deux autres onglets de la page Surveillance. Voir [Journal du serveur](./server-log.md) et [Rétention](./retention.md). |
| **Points de santé** | `/health` (le processus fonctionne), `/ready` (la base du framework répond), `/info` (version et compteurs). | Répartiteurs de charge, contrôles de santé des conteneurs, sondes externes. Voir [Points de santé](./health-endpoints.md). |
| **`./liberty status` / `doctor`** | Versions, santé, migrations en attente, problèmes de configuration. | Les administrateurs sur le serveur. Voir [Exploitation](../installation/operations.md). |

---

## Que regarder \{#when\}

| Situation | Premier contrôle |
|---|---|
| Les utilisateurs trouvent l'application lente | **Database pools** : toutes les connexions *In use*, ou *Overflow* supérieur à 0. |
| Une erreur sur un écran | Le [journal du serveur](./server-log.md), en cherchant l'identifiant de requête donné par le message de l'utilisateur. |
| Le disque se remplit | La [rétention](./retention.md) : la taille de chaque stockage, puis **Aperçu** et **Purger**. |
| Un enregistrement ne peut pas être sauvegardé | **Record locks** : quelqu'un d'autre l'a peut-être ouvert. |
| Le serveur semble bloqué | `/ready`, puis `./liberty status`. |
| Une tâche planifiée ne s'est pas exécutée | L'[historique des exécutions](../nomaflow/runs/history.md) Nomaflow — une exécution **MISSED** l'enregistre. |

---

## Ce qu'elle n'affiche pas \{#limits\}

La page Surveillance est une vue en direct tenue en mémoire par le serveur : un redémarrage la vide. Pour l'historique — temps de réponse, charge de la base, ressources des conteneurs — utiliser les outils prévus pour cela (un APM, les statistiques propres à la base, `docker stats`). Le journal du serveur va sur la sortie standard : `log_format = "json"` dans `[app]` facilite sa collecte, et chaque ligne porte l'identifiant de la requête.
