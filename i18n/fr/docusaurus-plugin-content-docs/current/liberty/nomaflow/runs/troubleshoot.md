---
title: Dépannage
description: "Corriger les exécutions Nomaflow : une exécution en échec, une étape qui fait autre chose que prévu, une exécution bloquée, une annulation qui n'arrête pas une étape Python, une planification qui ne se déclenche pas, une tâche absente de la liste, un journal vide."
keywords: [Nomaflow, dépannage, exécution en échec, délai, annulation, planification, MISSED, journal, Liberty Next]
---

# Dépannage

Partir du détail de l'exécution : la colonne **Erreur** de l'étape en échec, puis le **Journal**. Relancer avec **Run with parameters** en `DEBUG` pour voir le SQL de chaque requête.

---

## Une exécution est en FAILED \{#failed\}

| Erreur dans la ligne de l'étape | Cause habituelle |
|---|---|
| *step timed out after N s* | L'étape a dépassé son `timeout_seconds` (3 600 par défaut). L'augmenter dans `jobs.toml`, ou découper le traitement. |
| *→ 404*, *→ 500* (étape http) | L'URL appelée a répondu avec ce code. |
| Une erreur de base de données | Identifiants faux, table absente, contrainte. Tester le pool dans **Paramètres → Pools** et la requête dans la page du connecteur. |
| *cannot import module …* / *has no attribute …* (étape python) | Le plugin n'est pas là où l'indique `callable`, ou le serveur n'a pas été redémarré après une modification — voir [Déployer et déboguer](../../framework/build/plugins/deploy-and-debug.md). |
| *period … is closed* (file_load) | La requête de refus de l'étape a volontairement rejeté le chargement. |
| *control total mismatch …* (file_load) | Le total chargé diffère du total attendu ; rien n'a été écrit. |

Après correction, ne relancer que l'étape en échec : **Run with parameters**, décocher les étapes déjà réussies, **Run**.

---

## Une étape a réussi mais n'a pas fait ce qu'il fallait \{#wrong-result\}

Regarder les **Lignes affectées** et le détail de l'étape, puis relancer en `DEBUG` : le journal affiche chaque requête avec ses valeurs. Pour un `file_load`, comparer *read / inserted / rejected* et télécharger les lignes rejetées.

---

## Une exécution reste RUNNING \{#hangs\}

Une étape attend quelque chose de lent — une table verrouillée, une API distante, une longue synchronisation. Chaque étape s'arrête à son `timeout_seconds`, la tâche au sien (4 heures par défaut). **Annuler** sur la carte de la tâche l'arrête plus tôt.

---

## Annuler n'arrête pas mon étape \{#cancellation-doesnt-stop-my-step\}

Les étapes SQL, HTTP, de chargement de fichier et les fonctions Python `async` s'arrêtent aussitôt. Une fonction Python écrite avec `def` s'exécute dans un thread de travail qui ne peut pas être interrompu : l'exécution affiche **CANCELED**, mais la fonction continue jusqu'à son retour. Écrire les fonctions longues en `async` — voir [Écrire un callable](../../framework/build/plugins/write-a-callable.md).

---

## La planification ne se déclenche pas \{#schedule\}

| Vérification | Correction |
|---|---|
| La carte affiche **désactivée** ou **Manuelle** | Activer la tâche, ou lui donner une planification. |
| Le jour est faux | Le planificateur numérote les jours de la semaine à partir de 0 = lundi. Écrire `mon-fri`, pas `1-5` — voir [Planifications](../jobs/schedules.md#cron). |
| L'aperçu **Prochaines exécutions** n'est pas celui attendu | Corriger le cron ou le fuseau horaire. |
| Le serveur était arrêté à ce moment-là | L'exécution est enregistrée **MISSED** ; la lancer à la main. |
| `[jobs] enabled = false` dans `app.toml` | Le planificateur est arrêté ; seules les exécutions manuelles fonctionnent. Remettre `true` et redémarrer. |

---

## La tâche n'apparaît pas dans la liste \{#missing\}

`jobs.toml` a été modifié à la main et n'est plus valide : le journal du serveur indique l'erreur. Une clé absente du schéma est refusée — vérifier l'orthographe avec [Étapes](../steps.md) et [Créer une tâche](../jobs/create.md#toml-only). Après correction du fichier, **Paramètres → Recharger la config**.

---

## Le journal est vide \{#empty-log\}

Le niveau de journal de l'exécution est `WARNING`, ou un plugin Python écrit dans un espace de noms non enregistré — voir [Étapes Python personnalisées](../custom-python.md#logging).

---

## 403 sur la page des Tâches \{#forbidden\}

Les pages Nomaflow et leur API sont réservées aux superutilisateurs.
