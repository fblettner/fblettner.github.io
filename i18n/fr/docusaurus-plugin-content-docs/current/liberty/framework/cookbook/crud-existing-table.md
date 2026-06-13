---
title: CRUD sur une table existante
description: "Recette — prendre n'importe quelle table de base de données existante et produire une interface liste / édition / ajout / suppression fonctionnelle par-dessus en cinq clics dans les Paramètres. Le chemin le plus rapide de « j'ai une table » à « les utilisateurs s'en servent »."
keywords: [Liberty Framework, cookbook, CRUD, recette, table existante, connecteur, écran, menu]
---

# CRUD sur une table existante

## Le problème

Vous avez une table de base de données — `products`, `tickets`, `contracts`, n'importe quoi — et il vous faut une interface propre pour que l'équipe puisse la consulter et la modifier. Vous ne voulez pas écrire de frontend.

## Le modèle

Cinq clics dans Paramètres, quatre requêtes SQL, un écran, une entrée de menu. Durée totale : **5 à 10 minutes**.

```
table → connecteur avec 4 requêtes → écran → feuille de menu → terminé
```

## La recette

### 1. Vérifier que le framework peut atteindre la table

Ouvrez **Paramètres → Pools**. Si la table est dans la même base que le framework, le pool `default` fonctionne. Sinon, ajoutez un nouveau pool pointant vers la bonne base et *Tester la connexion*.

### 2. Définir le connecteur — quatre requêtes

**Paramètres → Connecteurs → + Nouveau connecteur**. Type `SQL`, pool de votre choix. Puis quatre requêtes :

```sql
-- list (lecture)
SELECT * FROM products ORDER BY name;

-- create (écriture)
INSERT INTO products (name, price, stock, created_by, created_at)
VALUES (:name, :price, :stock, :session_user, CURRENT_TIMESTAMP)
RETURNING id;

-- update (écriture)
UPDATE products
SET name = :name, price = :price, stock = :stock,
    updated_by = :session_user, updated_at = CURRENT_TIMESTAMP
WHERE id = :id;

-- delete (écriture)
DELETE FROM products WHERE id = :id;
```

Le placeholder `:session_user` est le raccourci d'audit du framework — il se lie à l'identifiant de l'utilisateur appelant (le `sub` du JWT).

Cliquez sur **▶ Tester** sur la requête `list` pour confirmer la connectivité + laisser le framework découvrir le schéma.

### 3. Construire l'écran

**Paramètres → Écrans → + Nouvel écran** :

| Champ | Valeur |
|---|---|
| **Id** | `&lt;app&gt;/products` |
| **Titre** | `Products` |
| **Colonnes clés** | `id` |
| **Modifiable** | ✓ |
| **Connecteur / Requête** | `products` / `list` |
| **Actions → Ajouter** | `products` / `create` |
| **Actions → Enregistrer** | `products` / `update` |
| **Actions → Supprimer** | `products` / `delete` |

L'onglet Grille vous laisse choisir quelles colonnes apparaissent (faites glisser depuis le catalogue vers la liste visible). L'onglet Dialogue fait pareil pour le formulaire d'édition.

### 4. Câbler le menu

**Paramètres → Menus → &lt;app&gt; → + Ajouter feuille** :

| Champ | Valeur |
|---|---|
| **Libellé** | `Products` |
| **Type** | `Écran` |
| **Écran** | `&lt;app&gt;/products` |

### 5. Enregistrer et recharger

La barre latérale se met à jour immédiatement. Cliquez sur *Products* → la grille s'affiche, le dialogue d'édition s'ouvre au clic sur une ligne, *+ Ajouter* ouvre un formulaire vide.

## Résultat

Une interface CRUD fonctionnelle sur votre table existante, avec :

- Filtrage (puces de filtre par colonne dans la barre d'outils)
- Tri (clic sur les en-têtes de colonnes)
- Pagination (50 lignes par défaut)
- Un bouton *Export Excel* (toujours présent)
- Des codes de permission par action (`sql:products:list`, `sql:products:update:write`, etc.) prêts pour l'affectation de rôle
- Une piste d'audit automatique sur `created_by` / `updated_by`

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Des puces de statut colorées** | Ajoutez une entrée dictionnaire avec `Règle = ENUM` sur la colonne de statut — voir [Dictionnaire](../dictionary.md). |
| **Une liste déroulante alimentée par une autre table** | Ajoutez un Lookup dans *Paramètres → Dictionnaire → Lookups* — voir [Cookbook → CRUD sur une table existante](#) (cette recette) pour le modèle. |
| **Mode lecture seule pour un rôle** | Ne donnez pas au rôle les codes `:write` ; l'écran s'affiche sans les boutons Ajouter / Modifier / Supprimer pour eux. |
| **Une seconde table liée dans le dialogue** | Voir le [Tutoriel CRM → Étape 3](../tutorial-crm/03-deals.md) — le modèle *sous-grille Activities dans Deals*. |
| **Un import en masse depuis CSV** | Voir [Cookbook → Import en masse](./bulk-import.md). |
| **Un rapport planifié envoyé chaque nuit** | Voir [Cookbook → Rapport planifié par email](./scheduled-report-email.md). |

## Pour aller plus loin

- Pour une admin JD Edwards spécifiquement, l'app packagée [Nomajde](https://docs.nomana-it.fr/liberty/nomajde/overview/) livre tous les écrans que vous bâtiriez ici — pré-construits, sous licence.
- Le modèle mental complet : [Concepts → Connecteurs](../connectors.md).
