---
title: Synchronisation planifiée de base
description: "Recette — une tâche nocturne qui diffuse des lignes d'une base opérationnelle vers une base de reporting via SQL Copy, avec nouvelle tentative sur échec et notification Slack en cas de succès."
keywords: [Nomaflow, recette, synchronisation planifiée, ETL, sql_copy, tâche nocturne, reporting, Liberty Framework]
---

# Recette — Synchronisation planifiée de base

La charge de travail Nomaflow la plus courante : toutes les nuits, copier un ensemble de tables d'une base opérationnelle vers une base de reporting. Deux étapes SQL Copy, une politique de nouvelle tentative, une notification Slack en sortie.

Cette recette représente le **modèle** à adapter pour chaque cas d'usage « rafraîchir la table X de la base A vers la base B ».

---

## Ce que vous construisez

| Élément | Valeur |
|---|---|
| **Déclencheur** | Cron — tous les jours à 02 h 00 heure de Paris. |
| **Source** | Un PostgreSQL opérationnel avec les tables `customers` et `orders`. |
| **Cible** | Un PostgreSQL de reporting avec `reporting.customers` et `reporting.orders`. |
| **Étapes** | 2 × `sql_copy` (une par table) + 1 × `http` (webhook Slack). |
| **Nouvelles tentatives** | 2 essais, attente fixe de 60 secondes. |
| **Alertes** | En cas d'échec, notification sur le canal Slack d'astreinte. |

Résultat final : chaque matin, les tables de reporting sont fraîches ; en cas d'échec de la synchronisation, l'astreinte reçoit un message Slack en quelques minutes.

---

## Prérequis

| Ce qu'il faut | Comment l'obtenir |
|---|---|
| Un **connecteur source** vers la base opérationnelle. | *Paramètres → Connecteurs → ＋ Nouveau* — pointez vers la base opérationnelle. |
| Un **connecteur cible** vers la base de reporting. | Idem — pointez vers la base de reporting. Le pool `default` du framework convient pour un test rapide. |
| Une **URL de webhook Slack**, stockée en variable d'environnement. | L'administrateur Slack fournit l'URL ; ajoutez `SLACK_WEBHOOK_URL` au fichier d'environnement du framework. |

Les deux connecteurs doivent répondre en vert dans *Paramètres → Connecteurs → Tester la connexion*.

---

## Étape 1 — Créer la coque de la tâche

Sur la page Nomaflow, cliquez sur **＋ Nouvelle tâche**.

| Champ | Valeur |
|---|---|
| Id | `reporting-nightly-sync` |
| Description | *Rafraîchissement nocturne de la base de reporting à partir de la base opérationnelle.* |
| Tags | `etl`, `nightly`, `reporting` |
| Activée | ✓ |

Planification :

| Champ | Valeur |
|---|---|
| Cron | `0 2 * * *` |
| Fuseau horaire | `Europe/Paris` |

L'aperçu en direct doit afficher *prochaine : demain 02 h 00 · le lendemain 02 h 00 · le surlendemain 02 h 00*. Enregistrez.

---

## Étape 2 — Ajouter la copie de customers

Cliquez sur **＋ Ajouter une étape** → **SQL Copy**.

| Champ | Valeur |
|---|---|
| Nom | `copy-customers` |
| Connecteur **Source** | Votre connecteur source (par exemple `ops-db`). |
| Schéma **Source** | `public` |
| Table **Source** | `customers` |
| Connecteur **Cible** | Votre connecteur cible (par exemple `reporting-db`). |
| Schéma **Cible** | `reporting` |
| Table **Cible** | `customers` |
| Mode | `overwrite` |
| Taille de lot | `10000` (par défaut) |
| Timeout | `1800` (30 min — généreux pour une table quotidienne) |

Enregistrez l'étape.

**Pourquoi le mode `overwrite` ?** Il écrit d'abord dans une table tampon, puis bascule de manière atomique. La table `customers` du reporting **n'est jamais vide** en cours d'exécution — les opérateurs qui consultent les écrans de reporting à 02 h 00 min 30 voient encore les données de la veille jusqu'à la bascule, puis celles du jour.

---

## Étape 3 — Ajouter la copie de orders

Même structure qu'à l'étape 2 avec `orders` à la place de `customers`. Portez le timeout à `3600` (1 h) — orders est en général plus volumineuse que customers, accordez-lui de la marge.

L'éditeur de tâche affiche désormais deux étapes `sql_copy` dans l'ordre. Enregistrez.

---

## Étape 4 — Ajouter la notification de succès \{#step-4--add-the-success-notification\}

Cliquez sur **＋ Ajouter une étape** → **HTTP**.

| Champ | Valeur |
|---|---|
| Nom | `notify-slack` |
| URL | `${env:SLACK_WEBHOOK_URL}` |
| Méthode | `POST` |
| En-têtes | `Content-Type: application/json` |
| Corps | `{ "text": "✅ reporting-nightly-sync succeeded" }` |
| Timeout | `30` |

Enregistrez l'étape. Le corps est rédigé en JSON ; l'étape HTTP sérialise le dictionnaire en JSON au moment de l'envoi.

La tâche compte maintenant trois étapes ; l'étape HTTP ne s'exécute **que si les deux SQL Copies ont réussi** (les étapes s'enchaînent dans l'ordre ; un échec arrête l'exécution).

---

## Étape 5 — Ajouter la politique de nouvelle tentative

Dans le bloc **Retry** de l'éditeur :

| Champ | Valeur |
|---|---|
| Essais | `2` |
| Backoff | `fixed` |
| Base seconds | `60` |

Cette politique s'applique par étape — si `copy-orders` échoue une fois sur un soubresaut réseau transitoire, l'exécuteur attend 60 secondes puis réessaie. Deux essais offrent une seule nouvelle tentative, ce qui suffit pour les défaillances transitoires sans masquer un vrai bug.

---

## Étape 6 — Ajouter l'alerte d'échec

Dans le bloc **Alerts** :

| Champ | Valeur |
|---|---|
| En cas d'échec | ✓ |
| Sur exécution longue (minutes) | `90` (alerter si la tâche tourne encore au bout de 90 minutes — normalement elle se termine en 10) |
| Destinataires | vide (utiliser les valeurs par défaut du framework) |

L'alerte sur échec est routée par le canal de notification configuré globalement dans le framework. Voir [Notifications](../notifications.md) pour le câblage.

Enregistrez l'ensemble de la tâche.

---

## Étape 7 — Test rapide

N'attendez pas 02 h 00 pour vérifier que tout fonctionne. Dans le catalogue de tâches :

1. Cliquez sur **▶ Lancer maintenant** sur `reporting-nightly-sync`.
2. La fenêtre Exécuter avec paramètres s'ouvre, car la tâche compte plusieurs étapes (et non parce qu'elle a des paramètres — elle n'en a pas).
3. Cliquez sur **▶ Exécuter** sans rien modifier.
4. L'exécution apparaît dans le catalogue en `RUNNING`. Cliquez sur le badge pour ouvrir le Détail d'exécution.
5. Regardez les trois étapes passer au vert.
6. À la réussite de la troisième étape, votre canal Slack reçoit le message ✅.

En cas d'échec, voir [Diagnostic](../runs/troubleshoot.md).

---

## Ce que vous avez construit

```
JOB reporting-nightly-sync
├── schedule: "0 2 * * *" (Europe/Paris)
├── retry: { attempts: 2, backoff: fixed, base_seconds: 60 }
├── alerts: { on_failure: true, on_long_run_minutes: 90 }
└── steps:
    1. copy-customers  (sql_copy · overwrite · 30 min timeout)
    2. copy-orders     (sql_copy · overwrite ·  1 h timeout)
    3. notify-slack    (http · POST · 30s timeout)
```

Chaque nuit à 02 h 00 heure de Paris, les tables `customers` et `orders` du reporting sont rafraîchies de manière atomique. Le canal Slack est informé du succès ; l'astreinte est alertée en cas d'échec.

---

## Adapter à votre cas

### Plus de tables

Ajoutez des étapes `sql_copy` avant `notify-slack`. Elles s'enchaînent dans l'ordre ; la notification de succès n'est émise que si **toutes** les copies réussissent. Pour 20 tables, l'historique d'exécution reste lisible — la chronologie affiche 21 lignes, une par étape.

Si la liste de tables devient assez longue pour rendre l'éditeur encombrant, envisagez :

| Motif | Quand |
|---|---|
| Regrouper les tables par fréquence. | Une tâche `daily` + une tâche `weekly` qui copie les dimensions peu volatiles. |
| Regrouper les tables par source. | Une tâche par base source. |
| Utiliser une étape Python qui pilote une boucle. | Une étape qui lit une configuration et copie N tables. Perte de la chronologie par table ; gain en compacité. |

### Mode de copie différent

| Motif source | Mode |
|---|---|
| Base opérationnelle, cible remplacée intégralement chaque nuit. | `overwrite` (cette recette). |
| Motif snapshot — garder les lignes d'hier, ajouter celles d'aujourd'hui. | `append`. |
| Dimensions à évolution lente — mettre à jour les lignes existantes, insérer les nouvelles. | `upsert` (la cible doit avoir une clé primaire). |

### Routage d'alerte différent

Remplacez l'étape `notify-slack` par :

| Destination | Type d'étape | Notes |
|---|---|---|
| E-mail | `http` vers une passerelle SMTP, ou une étape `python` utilisant le canal de notification du framework. | La voie `python` représente la voie canonique — voir [Notifications](../notifications.md). |
| Microsoft Teams | `http` vers un webhook entrant Teams. | La forme du corps diffère de celle de Slack. |
| Webhook générique | `http` vers votre endpoint. | Charge utile auto-descriptive. |

### Ajouter une assertion sur le nombre de lignes

Vérification de sûreté courante : interrompre la tâche si le nombre de lignes source du jour diffère **fortement** de celui de la veille (signal que le pipeline source s'est cassé en amont). Insérez une étape `python` avant les copies :

```python
# plugins/reporting/sanity.py
async def assert_row_counts(ctx, *, threshold_percent: float = 50.0, **_) -> dict:
    source = ctx.get_connector("ops-db")
    target = ctx.get_connector("reporting-db")
    src_count = await source.scalar("select count(*) from public.customers")
    tgt_count = await target.scalar("select count(*) from reporting.customers")
    delta = abs(src_count - tgt_count) / max(tgt_count, 1) * 100
    ctx.log.info(f"source={src_count} · target={tgt_count} · delta={delta:.1f}%")
    if delta > threshold_percent:
        raise RuntimeError(f"row-count delta {delta:.1f}% > threshold {threshold_percent}%")
    return {"source_rows": src_count, "target_rows": tgt_count, "delta_percent": delta}
```

Câblée comme étape `python` avec `op_kwargs = { threshold_percent: 50 }`. Si la source du jour compte moitié moins de lignes que la veille, l'étape échoue et l'astreinte est alertée — avant que des données erronées n'atterrissent dans la base de reporting.

---

## Pièges fréquents

| Erreur | Symptôme | Correctif |
|---|---|---|
| Planification en UTC, heure de Paris attendue. | La tâche se déclenche à 03 h 00 / 04 h 00 locales. | Réglez le fuseau sur `Europe/Paris`. |
| Trop d'essais. | Une requête mal configurée réessaie pendant 15 minutes avant de tomber. | Plafonnez à 2 ou 3 essais. |
| Étape HTTP avec URL de webhook codée en dur. | L'URL finit dans le contrôle de version / les résultats de recherche. | Utilisez `${env:SLACK_WEBHOOK_URL}` et placez le secret dans le fichier d'environnement. |
| Aucune alerte. | Un échec silencieux que personne ne remarque pendant des jours. | Activez toujours `alerts.on_failure = true`. |
| Mode `append` sur une tâche de rafraîchissement. | La cible grossit sans fin ; les requêtes ralentissent. | Utilisez `overwrite` pour les motifs de rafraîchissement. |

---

## Pour la suite

- [Recette — Récupération horaire d'API](./api-pull.md) — la même forme avec une source HTTP et une transformation Python.
- [Recette — Nettoyage conditionnel](./conditional-cleanup.md) — une tâche qui ne s'exécute que si une condition est remplie.
- [Notifications](../notifications.md) — les canaux de notification du framework en détail.
- [Étapes → SQL Copy](../steps.md#sql-copy--sql_copy) — chaque champ du type d'étape SQL Copy.
