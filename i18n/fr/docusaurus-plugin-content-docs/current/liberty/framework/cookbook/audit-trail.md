---
title: Piste d'audit
description: "Recette — enregistrer l'auteur de la création et de la dernière modification de chaque ligne, et conserver l'historique de chaque écriture, sans se fier au navigateur : jetons {{LOGIN}} / {{SYSTIMESTAMP}} dans les requêtes d'écriture, règles du dictionnaire et table d'audit de l'écran."
keywords: [Liberty Next, cookbook, audit, created_by, updated_by, "{{LOGIN}}", "{{SYSTIMESTAMP}}", LOGIN, SYSDATE, audit_table, AUD_ACTION]
---

# Piste d'audit

## Le besoin

Qui a créé cette ligne, qui l'a modifiée en dernier, et quel était son contenu auparavant ? La réponse ne doit pas dépendre de ce qu'envoie le navigateur.

## La démarche

Deux niveaux, qui se combinent :

| Niveau | Mécanisme | Résultat |
|---|---|---|
| **Dernière modification, sur la ligne** | Jetons `{{LOGIN}}` / `{{SYSTIMESTAMP}}` dans les requêtes d'écriture. | `CREATED_BY`, `CREATED_AT`, `UPDATED_BY`, `UPDATED_AT` renseignés par le serveur. |
| **Chaque écriture, dans une table d'historique** | Le réglage **audit_table** de l'écran. | Une ligne par insertion, mise à jour ou suppression, avec l'action, l'utilisateur et la date. |

## La recette

### 1. Colonnes d'audit sur la table

```sql
ALTER TABLE customers ADD created_by VARCHAR(64);
ALTER TABLE customers ADD created_at TIMESTAMP;
ALTER TABLE customers ADD updated_by VARCHAR(64);
ALTER TABLE customers ADD updated_at TIMESTAMP;
```

### 2. Les renseigner dans les requêtes d'écriture

Dans **Liberty Next → Construire → Connecteurs**, modifier les requêtes d'insertion et de mise à jour de la table :

```sql
-- customers_post
INSERT INTO customers (ID, NAME, STATUS, CREATED_BY, CREATED_AT)
VALUES (:ID, :NAME, :STATUS, {{LOGIN}}, {{SYSTIMESTAMP}})

-- customers_put
UPDATE customers
SET NAME = :NAME, STATUS = :STATUS,
    UPDATED_BY = {{LOGIN}}, UPDATED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID_ORIGINAL
```

Le serveur remplace les jetons à l'exécution — nom de l'utilisateur connecté en majuscules, date et heure courantes — quelles que soient les valeurs envoyées par le formulaire. La requête de mise à jour ne touche pas à `CREATED_BY` / `CREATED_AT`, qui conservent leur valeur.

:::note[Règles du dictionnaire plutôt que jetons]
Les [règles du dictionnaire](../dictionary.md#rules) `LOGIN` et `SYSDATE` font de même pour toute écriture qui lie la colonne — mais `LOGIN` réécrit la colonne à **chaque** écriture, mises à jour comprises, et `SYSDATE` ne complète qu'une valeur **vide**. Elles conviennent à `UPDATED_BY` sur une requête qui le lie ; pour les colonnes de création, les jetons dans la requête d'insertion sont le choix le plus sûr.
:::

### 3. Afficher les colonnes

Sur l'écran, donner aux quatre colonnes un libellé (entrées du dictionnaire) et un format date-heure, cocher **disabled** (lecture seule) et les placer dans un onglet *Historique* du dialogue — ou les laisser hors du dialogue et ne les afficher que dans la grille.

### 4. Conserver chaque écriture — `audit_table`

Dans l'onglet **Général** de l'écran, renseigner **audit_table** avec `AUD_CUSTOMERS`. Dès lors, chaque insertion, mise à jour ou suppression faite depuis l'écran écrit aussi une ligne dans `AUD_CUSTOMERS` :

| Colonne | Contenu |
|---|---|
| Les colonnes de la table | Les valeurs envoyées avec l'écriture. |
| `AUD_ACTION` | `INSERT`, `UPDATE` ou `DELETE`. |
| `AUD_USER` | Le nom de l'utilisateur. |
| `AUD_DATE` | La date et l'heure du serveur. |

La table est créée à la première écriture, à partir de la structure de la table source. Plusieurs écrans peuvent partager la même table d'audit.

## Pourquoi c'est sûr

| Tentative | Résultat |
|---|---|
| Modifier le formulaire pour envoyer `UPDATED_BY = 'quelqu'un d'autre'`. | Le jeton est résolu par le serveur ; la valeur du formulaire n'est pas utilisée. |
| Appeler directement l'API REST avec un contenu forgé. | Même chose : jetons et règles sont appliqués par le serveur, après lecture de la requête. |
| Écrire sans être connecté. | L'écriture exige un utilisateur authentifié disposant de la permission de la requête. |

## Variantes

| Besoin | Moyen |
|---|---|
| **Un numéro de version** | `SET VERSION = VERSION + 1` dans la requête de mise à jour. |
| **L'historique de toute une application** | Une table d'audit commune à ses écrans (`AUD_SECURITY`). |
| **Des modifications livrées d'un environnement à l'autre** | Le suivi des modifications sur l'écran — voir [Paquets de modifications](../../nomaflow/change-packages.md). |

## Pour aller plus loin

- [Liaison de paramètres → Jetons](../build/queries/parameter-binding.md#tokens)
- [Dictionnaire → Règles](../dictionary.md#rules)
- [CRUD sur une table existante](./crud-existing-table.md)
