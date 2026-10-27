---
title: Étape 6 — Assistant IA et tâche quotidienne
description: "Finaliser le CRM : l'assistant IA répond aux questions à partir des requêtes du CRM, dans les droits de chaque utilisateur, et une tâche Nomaflow signale chaque matin les affaires en sommeil et prévient l'équipe commerciale."
keywords: [Liberty Next, tutoriel, CRM, assistant IA, ai:chat, connecteurs autorisés, Nomaflow, tâche, planification, notifications]
---

# Étape 6 — Assistant IA et tâche quotidienne

Deux ajouts : l'**assistant IA**, pour que les utilisateurs posent leurs questions en langage courant, et une **tâche Nomaflow** qui repère les affaires laissées sans nouvelles et prévient l'équipe commerciale.

---

## L'assistant IA

### Réglages

**Paramètres → App → AI Assistant** : **Enabled**, la **Anthropic API key**, le **Model**, et **Allowed connectors** `crm`. Enregistrer. Voir [Assistant IA](../ai-assistant.md).

### Accès

Dans le rôle `crm-sales`, **Beyond the menus** : **Allow** — *AI assistant*. Enregistrer. Bob dispose désormais d'un bouton **AI Assistant** en haut à droite.

### Descriptions

L'assistant choisit ses requêtes d'après leur libellé et leur description. Sur les requêtes de lecture du CRM (onglet Advanced de l'éditeur de requête), écrire deux phrases — ce que contiennent les lignes, à quelles questions la requête répond :

| Requête | Description |
|---|---|
| `customers_get` | `Clients avec secteur, pays, statut et e-mail. Pour les questions sur le portefeuille clients.` |
| `deals_get` | `Affaires avec client, étape, montant et date de clôture prévue. Pour les questions sur le pipeline.` |
| `pipeline_by_stage_get` | `Montant en cours par étape du pipeline. Pour les questions de répartition du pipeline.` |

### Essai

En Bob : *Quelles affaires sont en négociation ?* — *Quel est le montant en cours par étape ?* — *Quels clients n'ont aucune affaire ?*

L'assistant n'exécute que des requêtes de lecture, avec les droits et le périmètre de données de Bob : il ne voit que les clients français, et ne modifie jamais les données. Voir [Donner accès aux données à l'assistant IA](../cookbook/expose-to-ai.md).

---

## Une tâche quotidienne — les affaires en sommeil

Une affaire sans mise à jour depuis 14 jours est signalée, et l'équipe commerciale reçoit une notification.

### La requête

Ajouter une colonne `stalled` aux affaires, puis une requête d'écriture `flag_stalled_deals` :

```sql
ALTER TABLE deals ADD stalled VARCHAR(1) DEFAULT 'N';
```

```sql
UPDATE deals SET STALLED = 'Y'
WHERE STAGE NOT IN ('WON', 'LOST')
  AND COALESCE(UPDATED_AT, CURRENT_TIMESTAMP - INTERVAL '30' DAY) < CURRENT_TIMESTAMP - INTERVAL '14' DAY
  AND STALLED = 'N'
```

Ajouter `STALLED = 'N'` à `deals_put` : toute modification d'une affaire efface le signalement.

### La tâche

**Nomaflow → Jobs → + New job** :

| Champ | Valeur |
|---|---|
| Id | `crm-stalled-deals` |
| Description | `Signale les affaires sans nouvelles depuis 14 jours.` |
| Schedule | `0 8 * * 0-4` — 8 h, du lundi au vendredi (le jour 0 est le lundi) |
| Timezone | `Europe/Paris` |
| Étape | **Add step: `sql_query`**, nom `flag-stalled`, connecteur `crm`, requête `flag_stalled_deals`. |
| Alerts | **Send alerts**, **On failure**, destinataires `user:<identifiant>`. |

Enregistrer, puis **Run with parameters** pour l'exécuter une fois : le détail de l'exécution indique les lignes mises à jour. Voir [Créer une tâche](../../nomaflow/jobs/create.md).

### La notification

**Paramètres → Notifications**, une règle :

| Champ | Valeur |
|---|---|
| Déclencheur | Un événement de tâche — tâche `crm-stalled-deals`, événement `succeeded`. |
| Canaux | `portal` |
| Destinataires | `role:crm-sales` |
| Objet | `{ROWS} affaires sans nouvelles depuis 14 jours` |

L'équipe commerciale la trouve chaque matin dans la cloche. Un filtre sur `STALLED` dans l'écran Affaires les liste. Voir [Notifications](../../nomaflow/notifications.md).

---

## Bilan

Un CRM complet construit depuis les Paramètres :

- **Des écrans** — Clients, Affaires, et les Activités de chaque affaire.
- **Un tableau de bord** — le pipeline avec indicateurs, graphique et dernières activités.
- **Des rôles** — consultation et commercial, avec un périmètre de données par pays, et la connexion d'entreprise.
- **Un assistant IA** sur les requêtes du CRM, dans les droits de chaque utilisateur.
- **Une tâche quotidienne** qui signale les affaires en sommeil, avec une notification.

Le seul code écrit est du SQL.

---

## Pour aller plus loin

| Objectif | À lire |
|---|---|
| Appliquer la démarche à une autre base ou à un ERP | [Cas d'usage](../what-you-can-build.md) |
| Passer le CRM en production | [Liste de contrôle de production](../../installation/production.md) |
| Le transférer vers un autre environnement | [Packages](../build/packages.md) |
| Trouver une recette précise | [Cookbook](../cookbook/crud-existing-table.md) |
