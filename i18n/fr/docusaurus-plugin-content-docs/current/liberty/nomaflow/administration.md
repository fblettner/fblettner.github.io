---
title: Administration
description: "Exploiter Nomaflow à l'échelle — réplique unique vs multi-réplique, verrou d'ordonnanceur, comportement au redémarrage, rétention de l'historique d'exécution, permissions, sauvegarde."
keywords: [Nomaflow, administration, multi-réplique, verrou d'ordonnanceur, rétention, redémarrage, permissions, sauvegarde, Liberty Framework]
---

# Administration

Nomaflow se veut **opérationnellement banal** — installer une fois, planifier, surveiller. Mais en production, certains détails comptent : quelle réplique a le droit de déclencher le cron, ce qu'il advient des exécutions en cours lors d'un redémarrage, combien de temps l'historique d'exécution est conservé, qui voit quoi.

Cette page rassemble les paramètres au niveau du framework qui façonnent le comportement de Nomaflow.

---

## Réplique unique vs multi-réplique

### Réplique unique (par défaut)

Un seul processus du framework sert l'interface **et** exécute l'ordonnanceur. Chaque cron planifié se déclenche depuis ce processus ; chaque ▶ Exécution manuelle s'y exécute également. Aucune coordination requise.

C'est la forme adaptée à la **plupart des installations**. Un hôte moderne avec CPU et mémoire suffisants prend en charge des dizaines de tâches concurrentes (le travail est majoritairement lié aux E/S — appels BD, appels HTTP, opérations de fichiers) et la simplicité d'un « endroit unique à consulter » prime sur les préoccupations de redondance.

### Multi-réplique

Certaines installations exécutent le framework derrière un répartiteur de charge avec deux ou trois répliques — pour la redondance ou pour répartir le trafic d'interface. Avec plusieurs processus, il faut épingler les fonctions d'ordonnanceur à **une seule** réplique :

| Réplique | `scheduler_enabled` | Comportement |
|---|---|---|
| Réplique A (primaire) | `true` | Sert l'interface · exécute les crons planifiés · accepte les déclenchements manuels. |
| Réplique B (secondaire) | `false` | Sert l'interface · accepte les déclenchements manuels (qui s'exécutent **localement** sur B). · ne déclenche pas les crons. |
| Réplique C (secondaire) | `false` | Identique à B. |

Régler cela dans *Paramètres → Moteur de tâches* (ou dans le fichier d'environnement du framework via `LIBERTY_SCHEDULER_ENABLED=true|false`).

### Le verrou d'ordonnanceur

Même avec le paramètre explicite `scheduler_enabled`, Nomaflow prend un **verrou consultatif** sur une ligne dédiée au démarrage. Deux processus qui tentent tous deux d'activer l'ordonnanceur contre la même base voient l'un d'eux perdre le verrou et basculer en mode ordonnanceur désactivé. Le journal le consigne clairement :

```
INFO  scheduler: acquired lock · this replica is the scheduler primary
INFO  scheduler: failed to acquire lock · running scheduler-disabled
```

C'est un **garde-fou**, pas le mécanisme principal. Le paramètre explicite représente la source de vérité ; le verrou rattrape les erreurs de configuration.

### ▶ Exécution manuelle sur une secondaire

Une ▶ Exécution manuelle sur la réplique B ne rebondit pas vers la primaire — elle s'exécute **localement** sur B. Le résultat est identique (la ligne d'exécution, les lignes d'étape, le journal atterrissent tous dans la base partagée) mais le travail consomme le CPU et les connexions de B. Cela implique :

- Les **tâches lourdes pilotées par l'opérateur** qui ne tiennent pas sur la primaire peuvent être dirigées vers une secondaire via le répartiteur de charge (s'assurer que la session d'interface de l'opérateur est collante à cette réplique).
- L'**annulation** d'une exécution ne fonctionne qu'à partir de la réplique sur laquelle elle s'exécute — cliquer sur ✕ depuis une autre réplique envoie la demande à la base, mais le signal d'annulation effectif n'atteint que le worker qui exécute l'exécution.

---

## Comportement au redémarrage

Que deviennent les exécutions quand le framework redémarre ?

### Exécutions en cours

Un cron planifié qui se déclenche pendant un redémarrage est **perdu** — Nomaflow ne met pas en file les déclenchements manqués pour rejeu. Le prochain déclenchement planifié correspond à la prochaine occurrence du cron ; celui qui a été manqué ne s'exécute jamais.

Une exécution **`RUNNING` au moment où le processus se termine** reste à `RUNNING` dans la base. Au redémarrage, le **balayeur de récupération** s'exécute une fois : chaque exécution à l'état `RUNNING` sans propriétaire vivant est marquée `FAILED` avec la raison `lost in restart`. Cela se produit avant que l'ordonnanceur ne commence à déclencher les crons, donc le catalogue affiche l'état correct au moment où les opérateurs le consultent.

### État persistant

| Survit à un redémarrage ? | Quoi |
|---|---|
| ✓ | Historique d'exécution (`ly2_job_runs`, `ly2_step_runs`, table de log). |
| ✓ | Catalogue de tâches (enregistré dans le magasin de catalogue configuré). |
| ✓ | Identifiants de transport enregistrés (chiffrés au repos). |
| ✗ | Trackers d'exécution en mémoire (les abonnés au journal en direct se reconnectent lors du rechargement de la page). |
| ✗ | Les temps de « prochain déclenchement » mis en cache (recalculés à partir du cron au démarrage). |

En pratique, les redémarrages sont sans incident — les opérateurs constatent une brève interruption dans l'historique d'exécution (les déclenchements de cron manqués), le catalogue reprend où il s'était arrêté, les tâches planifiées reprennent leurs déclenchements.

### Redémarrage progressif en multi-réplique

Un redémarrage progressif typique contre une installation à 2 répliques :

1. Retirer la secondaire du répartiteur de charge ; la redémarrer.
2. Une fois la secondaire saine, retirer la primaire, **la rétrograder** (régler `scheduler_enabled = false`), redémarrer.
3. Pendant que la primaire redémarre, la tentative de verrouillage de la secondaire réussit — elle devient la nouvelle primaire.
4. Quand l'ancienne primaire revient, elle voit le verrou détenu par l'autre réplique et fonctionne en ordonnanceur désactivé — l'ancienne primaire est désormais une secondaire.

La primaire d'ordonnanceur a effectivement été déplacée. Les crons déclenchés pendant la fenêtre de redémarrage ont été portés par la nouvelle primaire ; rien n'a été perdu.

---

## Rétention de l'historique d'exécution

Par défaut, **les exécutions de plus de 90 jours sont purgées** par une tâche de nettoyage intégrée qui se déclenche une fois par jour à 03 h 00. La purge s'effectue en deux passes :

| Passe | Ce qu'elle supprime |
|---|---|
| 1 | Les lignes de log pour les exécutions au-delà de la fenêtre de rétention. (La plus grosse table en nombre de lignes.) |
| 2 | Les lignes d'étape + les lignes d'exécution correspondantes. |

La rétention se configure dans *Paramètres → Moteur de tâches → Jours de rétention* (ou via `LIBERTY_RUN_HISTORY_DAYS` dans l'environnement). La tâche de nettoyage elle-même est visible dans le catalogue sous `_internal-prune-runs` — ses lignes d'historique indiquent le nombre de lignes purgées par passe.

| Motif | Jours |
|---|---|
| Petite installation, développement mono-utilisateur. | 30 |
| Production standard. | 90 (par défaut). |
| Installation à forte exigence de conformité. | 365 ou 730. |

À noter : **une rétention plus longue alourdit la base**. La table de log représente la principale contribution — surtout pour les exécutions en niveau DEBUG. Calibrer la rétention sur ce que vous interrogerez réellement, non sur « le plus possible ».

Pour des enregistrements permanents, écrire dans une **table d'audit au niveau applicatif** depuis les étapes elles-mêmes (voir la [recette Nettoyage conditionnel](./workflows/conditional-cleanup.md)) — ces données survivent à la purge de l'historique d'exécution.

---

## Permissions

Trois formes de permission encadrent Nomaflow :

| Permission | Octroie |
|---|---|
| **`superuser`** | Tout. |
| **`job:*`** | Parcourir le catalogue, voir chaque tâche, ▶ Exécuter n'importe quelle tâche, consulter chaque exécution. |
| **`job:<name>`** | Parcourir le catalogue (filtré sur cette tâche), ▶ Exécuter **uniquement** cette tâche, consulter uniquement ses exécutions. |

Un utilisateur sans aucune permission Nomaflow **ne voit pas du tout l'entrée de menu Nomaflow** — le framework masque les liens que l'utilisateur ne peut atteindre.

La forme granulaire `job:<name>` est utile quand une équipe métier doit posséder une tâche spécifique (par exemple le rafraîchissement quotidien du reporting) sans voir la flotte d'ETL de l'équipe data-platform. La plupart des installations se contentent de `job:*` pour le rôle data-platform et n'utilisent pas les permissions granulaires ; la simplicité opérationnelle prime sur le verrouillage de la visibilité des tâches.

Modifier ou créer des tâches est encadré par **`settings:jobs`** — une permission distincte et plus restreinte. Le flux :

| Action | Permission requise |
|---|---|
| Voir une tâche dans le catalogue | `job:<name>` ou `job:*`. |
| ▶ Exécuter une tâche | Idem. |
| ✕ Annuler une exécution | Idem. |
| ✎ Modifier / 🗑 Supprimer une tâche | `settings:jobs`. |
| Modifier les transports / règles de routage | `settings:notifications`. |

La séparation permet de donner aux analystes la capacité de **déclencher** des workflows sans la capacité de les **modifier**.

---

## Pooling de connexions

Nomaflow utilise les connecteurs du framework directement — mêmes pools, même configuration. La conséquence : **une étape Python qui ouvre 20 connexions concurrentes** vers un connecteur dont le pool est de 10 va se mettre en file.

| Motif | Comment |
|---|---|
| Réduire la concurrence par étape. | Utiliser un sémaphore dans l'étape Python : `async with sem: ...`. |
| Étaler les étapes dans le temps. | Planifier les tâches lourdes à des minutes différentes (la page [Planifications](./jobs/schedules.md) le couvre). |
| Augmenter la taille du pool. | *Paramètres → Connecteurs → \<name>* → augmenter `pool_size`. Attention à ne pas saturer la BD en amont. |

Pour les tâches qui **ne touchent pas** la base principale du framework, déclarer un pool dédié à la charge de la tâche — `default` est destiné aux métadonnées du framework + à l'historique d'exécution ; les charges ETL doivent utiliser leur propre pool pour ne pas affamer l'interface.

---

## Sauvegarde

Trois éléments méritent une sauvegarde explicite :

| Quoi | Où | Comment |
|---|---|---|
| **Le catalogue de tâches** | Le magasin de catalogue du framework. | Exporter via *Paramètres → Moteur de tâches → Exporter les tâches*. Dépose un instantané dans votre fichier de sauvegarde. |
| **Identifiants de connecteur** | Chiffrés, stockés à côté du catalogue. | Sauvegarder le magasin de catalogue + la clé de chiffrement ensemble — ni l'un ni l'autre n'est utile seul. |
| **Historique d'exécution** | `ly2_job_runs`, `ly2_step_runs`, `ly2_job_logs` dans la BD du framework. | La sauvegarde régulière de la BD suffit. L'historique d'exécution représente des **données opérationnelles** — récupérables au sens de « il y aura une coupure, mais les tâches elles-mêmes continuent de fonctionner ». |

Pour la **reprise après sinistre**, ordre de restauration :

1. Restaurer la BD du framework (fournit les connecteurs, les utilisateurs, le dictionnaire).
2. Restaurer le fichier de clé de chiffrement.
3. Restaurer l'instantané du magasin de catalogue.
4. Démarrer le framework. L'ordonnanceur lit le catalogue, reprend là où il s'est arrêté.
5. L'historique d'exécution antérieur à l'instantané est perdu ; les nouvelles exécutions atterrissent normalement.

---

## Utilisation du disque

Trois éléments consomment de l'espace disque dans la BD du framework :

| Table | Croissance typique |
|---|---|
| **Logs d'exécution** (la plus volumineuse) | Une ligne par ligne de log. Une tâche émettant 100 lignes × exécution horaire = 2,4 Mo/jour = ~250 Mo / 90 jours pour de petites lignes de log. Les exécutions DEBUG en consomment 10× plus. |
| **Lignes d'étape** | Quelques centaines d'octets par étape. Négligeable comparé aux logs. |
| **Lignes d'exécution** | Une ligne par exécution. Négligeable. |

Pour une installation comprenant une centaine de tâches quotidiennes, l'historique d'exécution se stabilise généralement à quelques centaines de Mo. Plus important uniquement si :

- Plusieurs tâches s'exécutent à `* * * * *` (cadence élevée soutenue).
- Certaines tâches tournent régulièrement en niveau DEBUG.
- La rétention est réglée très haut.

Surveiller la taille de la BD ; si elle croît, appliquer la [recette Nettoyage conditionnel](./workflows/conditional-cleanup.md) sur les tables d'historique d'exécution elles-mêmes représente un remède auto-administré raisonnable.

---

## Sondes de santé

Deux sondes de santé sont mises à disposition :

| Endpoint | Ce qu'il renvoie |
|---|---|
| **`GET /health`** | Vivacité — le processus est en marche. Utilisé par Kubernetes / Docker / le répartiteur de charge pour décider du routage du trafic. |
| **`GET /admin/jobs/health`** | Disponibilité — l'ordonnanceur détient le verrou, le registre cron est parsé, aucune alarme interne. Utilisé par le monitoring pour alerter sur « l'ordonnanceur est en panne ». |

Pour une installation multi-réplique, le second endpoint diffère entre primaire et secondaires — la primaire rapporte `scheduler: active`, les secondaires rapportent `scheduler: standby`. Les deux représentent des états sains ; l'alerte doit se déclencher sur `scheduler: error`.

---

## Tâches opérationnelles courantes

### Mettre en pause l'ordonnanceur entier

Pour une fenêtre de maintenance : régler `scheduler_enabled = false` sur chaque réplique, puis redémarrer. Les déclenchements planifiés s'arrêtent ; ▶ Exécution manuelle reste fonctionnelle. Réactiver une fois terminé.

Pour une pause **brève** sans redémarrage, désactiver chaque tâche tour à tour — fastidieux mais fonctionne sans changement de configuration.

### Migrer des tâches entre environnements

| De | Vers | Comment |
|---|---|---|
| Dev → Recette | Même schéma BD. | Exporter le catalogue depuis dev, importer dans recette. Les noms de connecteurs doivent correspondre entre environnements. |
| Recette → Production | Idem. | Même export/import. La clé de chiffrement diffère entre environnements, donc les identifiants doivent être ressaisis. |

L'export est un instantané JSON du catalogue (sans historique d'exécution). L'import valide chaque tâche avant d'en activer une seule — un export malformé n'atterrit pas partiellement.

### Mettre en quarantaine une tâche pour investigation

Une tâche qui se comporte mal mais que vous ne souhaitez pas supprimer :

1. La désactiver (basculer la carte du catalogue).
2. Ajouter une étiquette `quarantine` pour la visibilité.
3. Investiguer via l'historique de détail d'exécution.
4. Corriger ; retirer l'étiquette ; réactiver.

L'étiquette la rend évidente dans la vue calendrier et dans la recherche du catalogue.

---

## Pour aller plus loin

- [Notifications](./notifications.md) — câbler les transports pour la production.
- [Dépannage](./runs/troubleshoot.md) — manuel d'incident.
- [Concepts](./concepts.md) — le modèle mental derrière ces réglages.
