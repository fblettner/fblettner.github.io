---
title: Concepts
description: "Le vocabulaire de Nomaflow : tâche, étape, planification, préréglage, déclencheur, exécution, paramètres, politique de réessai, niveau de journal, alertes — ce qu'est chacun et où il se règle."
keywords: [Nomaflow, concepts, tâche, étape, planification, préréglage, déclencheur, exécution, paramètres, op_kwargs, réessai, niveau de journal, Liberty Next]
---

# Concepts

---

## Tâche \{#job\}

Une **tâche** est une entrée de `jobs.toml` : un **identifiant** (lettres, chiffres, `-`, `_` ; figé après création), une description, des étiquettes, une planification et un fuseau horaire, un switch d'activation, des paramètres partagés, des préréglages, une politique de réessai, des alertes, un niveau de journal, un délai maximal — et une suite ordonnée d'étapes. Elle se modifie dans les pages des Tâches ([Créer une tâche](./jobs/create.md)).

## Étape \{#step\}

Une **étape** est une unité de travail, de l'un des sept types : `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job` ([Étapes](./steps.md)). Les étapes s'exécutent dans l'ordre ; une étape en échec arrête la tâche, et les suivantes sont enregistrées comme sautées.

## Planification \{#schedule\}

Un **cron** à cinq zones évalué dans le **fuseau horaire** de la tâche. Les jours de la semaine se comptent à partir de 0 = lundi : les écrire en toutes lettres (`mon-fri`). Sans planification, la tâche ne s'exécute qu'à la demande ([Planifications](./jobs/schedules.md)).

## Préréglage \{#preset\}

Un jeu de valeurs d'exécution enregistré — paramètres partagés, arguments d'étapes, étapes désactivées, niveau de journal — créé depuis **Run with parameters**. Un préréglage peut avoir sa propre planification : une tâche, plusieurs planifications avec des entrées différentes.

## Déclencheur \{#trigger\}

Ce qui a lancé une exécution : `scheduled` (la planification de la tâche ou d'un préréglage) ou `manual` (un utilisateur, enregistré par son nom). Une tâche lancée par une étape `call_job` enregistre `call_job:<tâche>@<exécution>` comme origine.

## Exécution \{#run\}

Un passage d'une tâche, avec un identifiant, son déclencheur, son début et sa fin, les lignes affectées, ses étapes et son journal. États : `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELED`, et `MISSED` pour une heure planifiée qui ne s'est pas exécutée ([Historique des exécutions](./runs/history.md)).

## Paramètres \{#parameters\}

| Niveau | Où | S'applique à |
|---|---|---|
| Paramètres partagés | La tâche | Les arguments de chaque étape `python`. |
| Arguments d'étape (`op_kwargs`) | L'étape | Cette étape — ils l'emportent sur les paramètres partagés. |
| Run with parameters | Une exécution | Cette exécution seulement ; `jobs.toml` n'est pas modifié. |

`file_load` lit les paramètres d'exécution sous la forme `${params.x}` dans son chemin et ses constantes ; `sql_query` prend ses propres `params`.

## Politique de réessai \{#retry\}

`attempts` (tentatives au total, 1 = aucune nouvelle tentative), `backoff` (`fixed` ou `exponential`), `base_seconds`. S'applique à chaque étape.

## Niveau de journal \{#log-level\}

`WARNING`, `INFO` (défaut) ou `DEBUG` (ajoute le SQL de chaque requête). Le niveau de la tâche vaut pour les exécutions planifiées ; une exécution manuelle choisit le sien.

## Alertes \{#alerts\}

Une tâche peut prévenir ses **destinataires** quand une exécution échoue, sans aucune règle. Tout le reste — succès, annulation, planification manquée, exécution longue, un ensemble de tâches — passe par les règles de notification ([Notifications](./notifications.md)).

---

## Un exemple \{#example\}

La tâche `sales-load` a trois étapes : `file_load` (charger le fichier du mois), `sql_query` (rafraîchir les agrégats), `http` (appeler un service en aval). Sa planification est `0 2 * * *` en `Europe/Paris` ; un préréglage *fin-de-mois* la lance selon `0 6 1 * *` avec `period` égal au mois précédent. Chaque nuit, une exécution est enregistrée ; si le serveur était arrêté à 02:00, une exécution `MISSED` est enregistrée et le rôle `ops` reçoit un e-mail de la règle sur `missed`.
