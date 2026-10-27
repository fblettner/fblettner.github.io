---
title: Rapport planifié par e-mail
description: "Recette — un rapport envoyé par e-mail selon une planification : une tâche Nomaflow qui calcule les chiffres, une règle de notification sur la réussite de la tâche qui les envoie, et le tableau de bord ou l'écran où les lecteurs trouvent le détail. Que faire quand un fichier joint est exigé."
keywords: [Liberty Next, cookbook, rapport planifié, e-mail, Nomaflow, notifications, SMTP, tâche, tableau de bord]
---

# Rapport planifié par e-mail

## Le besoin

La direction veut recevoir les chiffres de la veille par e-mail à 8 h les jours ouvrés, sans script à part.

## La démarche

| Élément | Mécanisme |
|---|---|
| Calculer les chiffres | Une tâche Nomaflow planifiée, avec une étape `sql_query` qui les écrit dans une table de rapport. |
| Les envoyer | Une règle de notification sur l'événement **succeeded** de la tâche, canal `email`, vers un rôle ou des adresses. |
| Présenter le détail | Un tableau de bord ou un écran sur la table de rapport. |

## La recette

### 1. Le compte e-mail

**Paramètres → App → Notifications** : serveur SMTP, port, sécurité, compte et adresse d'expédition. **Send a test** le vérifie. Voir [Notifications → Le compte e-mail](../../nomaflow/notifications.md#smtp).

### 2. La table de rapport et sa requête

```sql
CREATE TABLE daily_pipeline (
  report_date DATE,
  stage       VARCHAR(30),
  deals       INTEGER,
  amount      DECIMAL(14,2)
);
```

Une requête d'écriture `compute_daily_pipeline` sur le connecteur du CRM :

```sql
INSERT INTO daily_pipeline (report_date, stage, deals, amount)
SELECT CURRENT_DATE - 1, stage, COUNT(*), SUM(amount)
FROM deals
WHERE updated_at >= CURRENT_DATE - 1 AND updated_at < CURRENT_DATE
GROUP BY stage
```

### 3. La tâche

Dans Nomaflow, une tâche `crm-daily-pipeline` avec :

- une planification `0 8 * * 0-4` — 8 h du lundi au vendredi (dans le cron de Liberty Next, le jour 0 est le lundi ; voir [Planifications → Cron](../../nomaflow/jobs/schedules.md#cron)) ;
- une étape `sql_query` qui exécute `compute_daily_pipeline`.

**Run now** permet de la vérifier aussitôt. Voir [Créer une tâche](../../nomaflow/jobs/create.md).

### 4. L'e-mail

**Paramètres → Notifications**, une nouvelle règle :

| Champ | Valeur |
|---|---|
| Déclencheur | **Un événement de tâche**, tâche `crm-daily-pipeline`, événement `succeeded`. |
| Canaux | `email` (et `portal` pour la cloche). |
| Destinataires | `role:management`, ou `email:direction@example.com`. |
| Objet | `Pipeline du jour — {ROWS} lignes calculées` |
| Corps | `Le pipeline du jour est prêt. Le détail se trouve dans le tableau de bord du CRM.` |

Les variables d'un événement de tâche sont `JOB`, `RUN_ID`, `STATE`, `ERROR`, `DURATION_MINUTES` et `ROWS`. **Send a test** envoie la règle avec des valeurs d'exemple. Voir [Notifications → Règles](../../nomaflow/notifications.md#rules).

### 5. Le détail

Un widget de tableau de bord ou un écran sur `daily_pipeline` (par exemple un graphique en barres par étape, filtré sur la dernière `report_date`), accessible depuis le menu. Voir [Tableaux de bord](../dashboards.md).

### 6. En cas d'échec

Les alertes propres à la tâche préviennent les exploitants par e-mail en cas d'échec — voir [Notifications → Les alertes propres à une tâche](../../nomaflow/notifications.md#job-alerts).

## Quand un fichier doit être joint

Les notifications envoient un objet et un corps, sans pièce jointe. Pour un fichier joint à l'e-mail, deux solutions :

- les lecteurs le téléchargent eux-mêmes : menu **Exporter** de l'écran, ou ses classeurs configurés — voir [Export Excel](./excel-export.md) ;
- une étape `python` de la tâche construit le fichier et l'envoie avec la bibliothèque de messagerie de l'entreprise — du code spécifique, voir [Plugins](../apps/plugins.md).

## Variantes

| Besoin | Moyen |
|---|---|
| **Chaque lundi** | Cron `0 8 * * 0`. |
| **Un message dans Teams ou un autre outil** | Une règle de notification avec le canal `action`, qui appelle un endpoint d'un connecteur API (un webhook). |
| **Un avertissement seulement en cas d'anomalie** | Une étape qui échoue quand un contrôle n'est pas satisfait, et une règle sur l'événement `failure`. |

## Pour aller plus loin

- [Notifications](../../nomaflow/notifications.md) — règles, canaux, destinataires, variables.
- [Planifications](../../nomaflow/jobs/schedules.md) — cron et préréglages.
- [Tableaux de bord](../dashboards.md) — présenter les chiffres.
