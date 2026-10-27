---
title: Créer une tâche
description: "L'éditeur de tâche de Nomaflow : la section Tâche (identifiant, planification, fuseau, étiquettes, activation), les préréglages et leurs planifications, la politique de réessai, les alertes, les paramètres partagés et la suite d'étapes — et ce qui ne se règle que dans jobs.toml."
keywords: [Nomaflow, créer une tâche, éditeur de tâche, planification, fuseau horaire, préréglages, politique de réessai, alertes, paramètres partagés, étapes, jobs.toml, Liberty Next]
---

# Créer une tâche

**+ Nouvelle tâche** dans la page des Tâches, ou **Modifier** sur une carte, ouvre l'éditeur de tâche. Un seul **Enregistrer**, en haut, écrit la tâche entière dans `jobs.toml`, recharge le planificateur et revient à la page des Tâches ; **Annuler** quitte sans enregistrer. Une tâche invalide est refusée avec un message en haut de l'éditeur.

---

## Les sections \{#sections\}

### Tâche

| Champ | Remarques |
|---|---|
| **Identifiant** | Lettres, chiffres, `-` et `_`. Figé une fois la tâche créée — il indexe l'historique des exécutions. Pour renommer : **Cloner** sous le nouvel identifiant, puis supprimer l'ancienne tâche. |
| **Description** | Affichée sur la carte. |
| **Planification (cron)** | Des choix tout faits (Manuelle, Horaire, Quotidienne, Hebdomadaire, Mensuelle) ou un cron à cinq zones ; **Prochaines exécutions** en affiche les cinq suivantes. Vide : tâche manuelle. Voir [Planifications](./schedules.md). |
| **Fuseau horaire** | Le nom IANA dans lequel la planification est évaluée. |
| **Étiquettes** | Libellés libres, utilisés par le filtre de la page des Tâches. |
| **Activée** | Active ou suspend la planification propre de la tâche. |

### Préréglages & plannings

Les préréglages s'enregistrent depuis **Run with parameters → Save as preset…**. Ici, chacun peut recevoir sa propre **Planification (cron)**, son **Fuseau horaire** et une case **Planning activé** — voir [Préréglages planifiables](./schedules.md#schedulable-presets).

### Politique de réessai

**Réessayer les étapes en échec**, puis **Tentatives** (au total), **Délai** (`fixed` ou `exponential`) et **Secondes de base** entre deux tentatives. La politique s'applique à chaque étape.

### Alertes

**Envoyer des alertes** avec **En cas d'échec** prévient les **Destinataires** quand une exécution échoue, dans la cloche et par e-mail. Écrire les destinataires sous la forme `user:alice`, `role:ops` ou `email:ops@example.com` — une entrée sans préfixe est prise pour une adresse e-mail. Pour être prévenu des exécutions longues, utiliser une règle de notification sur l'événement `long_run` : voir [Notifications](../notifications.md#job-alerts).

### Paramètres partagés

Des paires nom / valeur fusionnées dans les arguments de chaque étape `python` (la valeur propre d'une étape l'emporte). Elles apparaissent aussi, modifiables, dans **Run with parameters**. La section s'intitule *Shared params* dans l'éditeur.

### Étapes

La barre **Ajouter une étape :** propose un bouton par type — `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job`. Chaque étape est une carte : un clic ouvre ou replie son formulaire ; les flèches la montent ou la descendent ; l'icône de copie la clone ; la corbeille la supprime. Les champs de chaque type sont décrits dans [Étapes](../steps.md).

---

## Uniquement dans jobs.toml \{#toml-only\}

Quelques réglages n'ont pas de champ dans l'éditeur ; ils se définissent dans `jobs.toml` :

| Clé | Défaut | Signification |
|---|---|---|
| `log_level` (tâche) | `INFO` | Le niveau des exécutions planifiées : `WARNING`, `INFO` ou `DEBUG`. Une exécution manuelle choisit le sien dans **Run with parameters**. |
| `timeout_seconds` (tâche) | `14400` | L'exécution entière s'arrête après ce délai. |
| `enabled` (étape) | `true` | `false` saute toujours l'étape. |
| `timeout_seconds` (étape) | `3600` | L'étape s'arrête après ce délai. |
| `pool` (`sql_query`, blocs de `sql_copy`) | — | Un autre pool du connecteur — voir [Étapes](../steps.md#sql-query). |

```toml title="jobs.toml"
[[jobs]]
id = "sales-load"
description = "Fichiers de ventes mensuels vers la table de faits"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]
log_level = "INFO"

[jobs.params]
period = "2026-10"

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "file_load"
name = "load-sales"
# … voir Étapes → Chargement de fichier
```

---

## Conseils \{#tips\}

- Donner à chaque étape un nom court verbe-objet (`load-sales`, `refresh-totals`) : c'est ce qu'affiche le détail de l'exécution.
- Garder une tâche par flux métier ; enchaîner les tâches par une étape `call_job` plutôt que de copier des étapes.
- Enregistrer, puis lancer une fois à la main avec **Run with parameters** en `DEBUG` avant d'activer la planification.
