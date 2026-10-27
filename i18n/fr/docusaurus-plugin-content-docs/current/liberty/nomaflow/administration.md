---
title: Administration
description: "Faire fonctionner Nomaflow sur un serveur : les réglages [jobs] d'app.toml, une seule instance, le comportement au redémarrage, la rétention de l'historique, le tampon du journal, l'accès aux pages des Tâches, la sauvegarde et l'état de santé."
keywords: [Nomaflow, administration, réglages jobs, rétention, journal d'exécution, redémarrage, reprise, superutilisateur, sauvegarde, Liberty Next]
---

# Administration

Nomaflow s'exécute dans le serveur Liberty Next : son planificateur, son moteur d'exécution et son historique ne demandent aucun service séparé.

---

## Réglages \{#settings\}

La section `[jobs]` d'`app.toml` :

| Clé | Défaut | Signification |
|---|---|---|
| `enabled` | `true` | `false` laisse le planificateur arrêté : aucune exécution planifiée (ni contrôle des planifications manquées), mais **Exécuter** fonctionne toujours. Un redémarrage l'applique. |
| `pool` | `default` | Le pool qui héberge l'historique. |
| `config_path` | `plugins/nomaflow/jobs.toml` à côté du dossier de configuration | Le fichier des tâches. |
| `run_log_max_lines` | `5000` | Le nombre de lignes conservées par journal d'exécution — à augmenter pour une tâche très bavarde. |
| `files_dir` | `.nomaflow/files` à côté de la configuration | Les fichiers envoyés et les fichiers de rejets des étapes `file_load`. |
| `max_upload_mb` | `200` | La taille maximale d'un fichier accepté par **Run with parameters**. |

L'historique est stocké dans cinq tables de ce pool : `nomaflow_job_runs`, `nomaflow_step_runs`, `nomaflow_run_logs`, `nomaflow_run_overrides`, `nomaflow_step_run_extras`. Le serveur les crée et les complète au démarrage.

---

## Une seule instance \{#one-instance\}

Exécuter **une seule** instance de Liberty Next : le planificateur se déclenche depuis le processus du serveur, sans verrou partagé entre instances ; deux instances lanceraient chaque tâche deux fois. Voir [Liste de contrôle de production](../installation/production.md#replicas).

---

## Redémarrage \{#restart\}

- Les exécutions en cours à l'arrêt du serveur sont clôturées **FAILED** avec *abandoned: process restart during run* au démarrage suivant.
- Les heures planifiées tombées pendant l'arrêt sont enregistrées **MISSED** — voir [Planifications manquées](./jobs/schedules.md#missed). Elles ne sont pas relancées d'elles-mêmes : les lancer à la main si besoin.
- Tâches, préréglages et politiques sont dans `jobs.toml` ; l'historique est en base — les deux survivent au redémarrage.

---

## Rétention de l'historique \{#retention\}

Le panneau **Run history retention** de la page des Tâches (libellés en anglais) :

| Réglage | Défaut | Signification |
|---|---|---|
| **Auto-sweep** | activé | Le nettoyage récurrent. |
| **Days kept** | 30 | Les exécutions terminées plus anciennes sont supprimées, avec leurs étapes et leurs journaux. |
| **Cap per job** | 100 | Chaque tâche garde au plus ce nombre d'exécutions récentes. |
| **Sweep interval (min)** | 60 | La fréquence du nettoyage. |

**Clean now** le lance aussitôt. La politique s'enregistre dans `jobs.toml`, sous `[meta.retention]`.

---

## Journal d'exécution \{#run-log\}

Chaque exécution collecte ses lignes de journal en mémoire — loggers `liberty.*`, lignes `nomaflow` et espaces de noms enregistrés par les plugins — et les écrit en base à sa fin. Le niveau est celui de l'exécution : `WARNING`, `INFO` ou `DEBUG` (`DEBUG` ajoute le SQL de chaque requête). Le journal du serveur reçoit les mêmes lignes.

---

## Qui peut utiliser Nomaflow \{#permissions\}

Les pages des Tâches et leur API (`/admin/jobs/…`) sont réservées aux **superutilisateurs**. Les autres utilisateurs sont informés des tâches par les règles de notification — voir [Notifications](./notifications.md).

---

## Sauvegarde \{#backup\}

`./liberty backup` (Docker) ou `liberty-ops backup` (Python) sauvegarde la configuration — `jobs.toml` compris — et la base qui contient l'historique. Voir [Exploitation](../installation/operations.md#backup).

---

## État de santé \{#health\}

Le `/ready` du serveur répond quand la base du framework — qui contient l'historique — est joignable. La page des Tâches montre le dernier état de chaque tâche ; une règle de notification sur `failure` et `missed` est la supervision la plus simple.

---

## Tâches courantes \{#tasks\}

| Tâche | Comment |
|---|---|
| Suspendre une tâche | Son switch **activée** dans la page des Tâches. |
| Suspendre toutes les planifications | `[jobs] enabled = false` dans `app.toml`, puis redémarrer — les exécutions manuelles restent possibles. |
| Déplacer une tâche vers un autre serveur | **Export** sur sa carte, puis reprendre l'entrée dans le `jobs.toml` de la cible — ou la transporter dans un package. Les connecteurs et requêtes utilisés doivent y exister. |
| Analyser une tâche sans arrêter les autres | La désactiver, la lancer à la main en `DEBUG`. |
