---
title: Prise en main
description: "Une première tâche Nomaflow en quelques minutes : ouvrir la page des Tâches, créer une tâche, ajouter une étape sql_query, définir une planification, la lancer à la main et lire l'exécution."
keywords: [Nomaflow, prise en main, première tâche, sql_query, planification, exécuter, détail de l'exécution, Liberty Next]
---

# Prise en main

Une première tâche : rafraîchir chaque nuit une table de synthèse, puis la lancer à la main pour la vérifier.

---

## Avant de commencer \{#before\}

- Un compte **superutilisateur** — les pages des Tâches leur sont réservées.
- Un connecteur SQL avec une **requête d'écriture** qui fait le travail, par exemple `daily_summary_refresh` (`INSERT … SELECT …`, `REFRESH MATERIALIZED VIEW …`, `CALL …`). Une étape appelle une requête nommée d'un connecteur, pas du SQL saisi dans la tâche. Voir [Créer une requête personnalisée](../framework/build/queries/create-custom.md).

---

## 1 — Ouvrir la page des Tâches \{#open\}

Ouvrir **Tâches** depuis le menu Nomaflow (adresse `/nomaflow`). Chaque tâche est une carte ; la barre d'outils propose **+ Nouvelle tâche** et **Planning**. Voir [Page des Tâches](./jobs/catalog.md).

## 2 — Créer la tâche \{#create\}

**+ Nouvelle tâche**. Dans la section **Tâche** : **Identifiant** `daily-summary`, une **Description**, l'étiquette `reporting`, **Activée**.

## 3 — Ajouter une étape \{#step\}

Dans **Étapes**, la barre **Ajouter une étape :** : cliquer sur `sql_query`. Donner un **Nom de l'étape** (`refresh-summary`), choisir le **Connecteur**, puis la **Requête** `daily_summary_refresh`.

## 4 — Définir la planification \{#schedule\}

Dans la section **Tâche** : **Planification (cron)** `0 2 * * *`, **Fuseau horaire** `Europe/Paris`. **Prochaines exécutions** liste les cinq prochaines nuits — les vérifier. Puis **Enregistrer** en haut : la tâche apparaît dans la page des Tâches avec sa prochaine exécution.

## 5 — La lancer à la main \{#run\}

Sur la carte, **▶ Exécuter**. La carte montre l'exécution en cours, puis *dernière SUCCEEDED* ; un clic ouvre le détail de l'exécution : le résumé, l'étape avec son état, les lignes affectées et le journal. Voir [Historique des exécutions](./runs/history.md).

## 6 — Être prévenu en cas d'échec \{#notify\}

Dans **Paramètres → Notifications**, ajouter une règle : déclencheur *A job event*, tâche `daily-summary`, événements `failure` et `missed`, canal `email`, destinataire `role:ops`. Voir [Notifications](./notifications.md).

---

## Et ensuite \{#next\}

- D'autres types d'étapes — charger des fichiers, copier des tables, appeler une API : [Étapes](./steps.md).
- Lancer la même tâche avec d'autres paramètres selon plusieurs planifications : [Préréglages planifiables](./jobs/schedules.md#schedulable-presets).
- Des modèles prêts à adapter : [Recettes](./workflows/scheduled-sync.md).
