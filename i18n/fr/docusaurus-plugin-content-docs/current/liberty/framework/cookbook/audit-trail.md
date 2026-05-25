---
title: Piste d'audit
description: "Recette — peupler automatiquement les colonnes created_by, created_at, updated_by, updated_at à chaque écriture, sans faire confiance au client. Les valeurs par défaut LOGIN et SYSDATE de la couche formulaire du framework font le travail."
keywords: [Liberty Framework, cookbook, audit, created_by, updated_at, valeurs par défaut couche formulaire, LOGIN, SYSDATE]
---

# Piste d'audit

## Le problème

Conformité, débogage, savoir qui-a-fait-quoi : chaque écriture doit enregistrer qui l'a faite et quand. Le faire dans le code client est mauvais (l'utilisateur peut falsifier) ; le faire dans chaque `INSERT` / `UPDATE` est fragile (une requête manquante et le trou d'audit apparaît).

## Le modèle

Les **valeurs par défaut de la couche formulaire** du framework peuplent les colonnes d'audit côté serveur au moment de l'enregistrement. Le client ne les voit jamais ; l'opérateur ne les saisit jamais ; chaque connecteur qui écrit dans la table obtient les mêmes données d'audit par construction.

Deux couches :

| Couche | Ce qu'elle fait |
|---|---|
| **Schéma** | Quatre colonnes sur la table — `created_by`, `created_at`, `updated_by`, `updated_at`. |
| **Dictionnaire** | Deux entrées dictionnaire avec *Valeurs par défaut couche formulaire* `LOGIN` + `SYSDATE`. |

Les requêtes d'écriture du connecteur référencent ces colonnes et le framework substitue les valeurs côté serveur.

## La recette

### 1. Ajouter les colonnes à la table

```sql
ALTER TABLE customers
  ADD COLUMN created_by VARCHAR(64),
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN updated_by VARCHAR(64),
  ADD COLUMN updated_at TIMESTAMP;
```

### 2. Entrées dictionnaire

**Paramètres → Dictionnaire → Colonnes → + Nouvelle colonne** :

| Champ | `audit_created_by` | `audit_updated_by` |
|---|---|---|
| **Type** | string | string |
| **Règle** | LOOKUP sur users *(optionnel, pour l'affichage en puce)* | LOOKUP sur users |
| **Valeur par défaut couche formulaire — Création** | `LOGIN` | — |
| **Valeur par défaut couche formulaire — Mise à jour** | — | `LOGIN` |
| **Lecture seule sur les formulaires** | ✓ | ✓ |
| **Masquer à la création** | ✓ | ✓ |

Même forme pour `audit_created_at` / `audit_updated_at` :

| Champ | `audit_created_at` | `audit_updated_at` |
|---|---|---|
| **Type** | datetime | datetime |
| **Format** | `dd/MM/yyyy HH:mm` | `dd/MM/yyyy HH:mm` |
| **Valeur par défaut couche formulaire — Création** | `SYSDATE` | — |
| **Valeur par défaut couche formulaire — Mise à jour** | — | `SYSDATE` |
| **Lecture seule** | ✓ | ✓ |

### 3. Câbler les indices de colonnes sur la requête de lecture

Sur la requête `list` du connecteur, ajoutez les indices de colonnes :

| Colonne | Dictionnaire |
|---|---|
| `created_by` | `audit_created_by` |
| `created_at` | `audit_created_at` |
| `updated_by` | `audit_updated_by` |
| `updated_at` | `audit_updated_at` |

### 4. Référencer les colonnes dans les requêtes d'écriture

```sql
-- create
INSERT INTO customers (name, status, created_by, created_at)
VALUES (:name, :status, :session_user, CURRENT_TIMESTAMP);

-- update
UPDATE customers SET
  name = :name, status = :status,
  updated_by = :session_user, updated_at = CURRENT_TIMESTAMP
WHERE id = :id;
```

Le placeholder `:session_user` est ce qui rend cela sûr — il est lié côté serveur depuis le JWT, pas depuis le payload du dialogue.

### 5. Terminé

Le dialogue affiche maintenant les quatre colonnes d'audit comme champs en lecture seule sur l'onglet *Historique* (ou là où vous choisissez de les placer dans l'éditeur de dialogue). La grille affiche optionnellement *Dernière modification* avec la valeur `updated_at` comme puce alignée à droite.

## Où cela apparaît

| Surface | Ce qui s'affiche |
|---|---|
| Grille | Colonnes optionnelles *Dernière modification* / *Créé par* (vous décidez). |
| Dialogue | Champs en lecture seule, typiquement sur un onglet *Audit* ou *Historique*. |
| API REST | Les colonnes passent sans modification. |
| Export Excel | Inclus si vous activez *Inclure dans l'export*. |
| Assistant IA | Visible pour les requêtes que l'assistant peut exécuter. |

## Pourquoi c'est sûr

| Ce qu'un utilisateur malveillant pourrait essayer | Ce que fait le framework |
|---|---|
| Modifier le HTML du formulaire pour envoyer `created_by = "victime"` à l'enregistrement. | Le serveur ignore la valeur du formulaire pour ce champ — la valeur par défaut `LOGIN` du dictionnaire l'emporte. |
| POSTer directement sur l'endpoint REST avec un corps `created_by` falsifié. | Idem — la valeur par défaut de la couche formulaire est appliquée **côté serveur** au moment de l'enregistrement, après l'analyse du corps de la requête. |
| Utiliser `liberty-connectors run` (CLI) pour contourner l'auth. | La CLI s'exécute comme l'utilisateur local ; la même valeur par défaut `LOGIN` substitue l'utilisateur OS. Piste d'audit intacte. |

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Une colonne `version`** | Ajoutez une colonne `version`, incrémentez-la dans la requête `update` (`SET version = version + 1`). Combinée avec les verrous d'enregistrement du framework, vous obtenez un contrôle de concurrence optimiste. |
| **Un journal d'audit immuable** (chaque modification, pas seulement la dernière) | Ajoutez une table enfant `audit_log` ; écrivez une ligne depuis une étape Python à chaque enregistrement. Voir [Plugins](../apps/plugins.md). |
| **Tracer qui a *consulté* une ligne** | Problème différent. Le framework enregistre chaque appel API dans le journal des requêtes ; pour l'audit de lecture au niveau ligne, écrivez un `hook` Python sur `screen.before_read`. |

## Pour aller plus loin

- [Dictionnaire → Valeurs par défaut couche formulaire](../dictionary.md#form-layer-defaults).
- [Cookbook → CRUD sur une table existante](./crud-existing-table.md).
- [Concepts → Écrans](../screens.md) pour l'onglet de dialogue où les colonnes d'audit se trouvent.
