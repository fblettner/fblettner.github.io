---
title: CRUD sur une table existante
description: "Recette — poser une interface de liste, ajout, modification et suppression sur une table existante depuis les Paramètres : pool, requêtes générées par l'assistant CRUD, écran, entrée de menu."
keywords: [Liberty Next, cookbook, CRUD, recette, table existante, assistant CRUD, connecteur, écran, menu]
---

# CRUD sur une table existante

## Le besoin

Une table de la base — `products`, `tickets`, `contracts` — et une équipe qui doit la consulter et la modifier, sans développer d'interface.

## La démarche

```
table → connecteur avec 4 requêtes générées → écran → entrée de menu
```

## La recette

### 1. Atteindre la base

**Liberty Next → Administrer → Pools** : le pool `default` convient quand la table se trouve dans la base du framework ; sinon, ajouter un pool avec l'URL de la base. Voir [Connecteurs](../connectors.md#pools).

### 2. Générer les requêtes

**Liberty Next → Construire → Connecteurs** : créer (ou choisir) le connecteur SQL, passer dans la vue **Tables**, puis **＋ Ajouter des requêtes → Générer depuis la BDD**. Choisir la table `products`, garder les colonnes à afficher, cocher **clé** sur `ID`, conserver les quatre instructions et enregistrer. L'assistant écrit :

```sql
-- products_get
SELECT ID, NAME, PRICE, STOCK FROM products

-- products_post
INSERT INTO products (ID, NAME, PRICE, STOCK) VALUES (:ID, :NAME, :PRICE, :STOCK)

-- products_put
UPDATE products SET NAME = :NAME, PRICE = :PRICE, STOCK = :STOCK WHERE ID = :ID_ORIGINAL

-- products_delete
DELETE FROM products WHERE ID = :ID
```

Pour enregistrer l'auteur et la date d'une modification, ajouter les colonnes d'audit aux requêtes d'écriture avec des jetons serveur — le navigateur n'a aucun moyen de les modifier :

```sql
UPDATE products
SET NAME = :NAME, PRICE = :PRICE, STOCK = :STOCK,
    UPDATED_BY = {{LOGIN}}, UPDATED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID_ORIGINAL
```

Autre solution : donner aux entrées `UPDATED_BY` / `UPDATED_AT` du dictionnaire les règles `LOGIN` / `SYSDATE`. Voir [Liaison de paramètres → Jetons](../build/queries/parameter-binding.md#tokens).

### 3. Construire l'écran

**Liberty Next → Construire → Écrans**, pastille du connecteur (**＋ Ajouter une portée** la première fois), **＋ Ajouter un écran** `products`, puis dans l'éditeur d'écran :

| Onglet | Réglage |
|---|---|
| **Général** | Libellé `Produits` ; **Editable** pour la saisie dans la grille ; **uploadable** pour l'import Excel / CSV. |
| **Requêtes** | Lecture `products_get`, mise à jour `products_put`, insertion `products_post`, suppression `products_delete`. |
| **Colonnes** | Libellés, formats, largeurs, filtres. |
| **Dialogue** | Glisser les colonnes sur le formulaire. |

L'[Assistant de création d'écran](../build/screen-assistant.md) réalise les étapes 2 et 3 en une fois.

### 4. Ajouter l'entrée de menu

**Liberty Next → Construire → Menus**, pastille du connecteur (**+ Ajouter une portée** la première fois), **＋ Élément** : libellé `Produits`, type `screen`, cible `products_get`. Enregistrer.

## Résultat

Un clic sur *Produits* ouvre la grille : tri et filtres par colonne, regroupement, vues enregistrées ; une ligne ouvre le dialogue de modification, **＋ Ajouter** un dialogue vide, **Supprimer** retire la ligne. Chaque requête a sa propre permission — `sql:<connecteur>:products_get`, `sql:<connecteur>:products_put`… — à accorder par les rôles.

## Variantes

| Besoin | Moyen |
|---|---|
| **Libellés et listes de valeurs** | Des entrées du dictionnaire sur les colonnes, avec une règle `ENUM` ou `LOOKUP` — voir [Dictionnaire](../dictionary.md). |
| **Lecture seule pour certains utilisateurs** | N'accorder à leur rôle que la permission de la requête de lecture : les écritures sont refusées. Pour un écran en lecture seule pour tous, cocher **Read-only** dans l'onglet Général. |
| **Export Excel** | L'onglet **Export** de l'écran — voir [Export Excel](./excel-export.md). |
| **Lignes liées dans le dialogue** | Un onglet `nested_table` — voir [Onglets imbriqués](../build/screens/nested-tabs.md). |
| **Chargement en masse depuis un fichier** | Voir [Import en masse](./bulk-import.md). |

## Pour aller plus loin

- [Créer depuis une table de la base](../build/queries/create-from-database.md) — l'assistant CRUD en détail.
- [Écrans](../build/screens/overview.md) — tous les réglages d'un écran.
- [Rôles et permissions](../build/secure/roles-and-permissions.md) — qui voit et modifie quoi.
