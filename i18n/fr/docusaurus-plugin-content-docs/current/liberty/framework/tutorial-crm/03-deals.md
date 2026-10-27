---
title: Étape 3 — Affaires et relations
description: "Second écran du CRM : le dictionnaire apporte libellés et listes de valeurs (une énumération pour le statut client, des lookups pour le client et l'étape d'une affaire), l'écran Affaires rattache chaque affaire à son client, et les activités de l'affaire apparaissent dans un onglet de son dialogue."
keywords: [Liberty Next, tutoriel, CRM, affaires, dictionnaire, ENUM, LOOKUP, analyser une table, nested_table, param_binds]
---

# Étape 3 — Affaires et relations

Trois volets dans cette étape :

1. Le **dictionnaire** : des libellés communs à tous les écrans, et des listes de valeurs au lieu de texte libre.
2. L'écran **Affaires**, où chaque affaire choisit son client et son étape dans une liste.
3. Les **activités** de l'affaire, dans un onglet de son dialogue.

---

## Le dictionnaire

### Les entrées tirées des tables

**Paramètres → Dictionnaire**, choisir la portée `crm`, puis **Scan a table** (libellé anglais) :

1. Connecteur `crm`, table `customers`, **Scan** : une proposition par colonne, les manquantes cochées.
2. Renseigner le **Label** de chacune (`Nom`, `Secteur`, `Pays`, `Statut`, `E-mail`…), puis **Add**.
3. Même chose pour `deals` et `activities`.

Tous les écrans de l'application affichent désormais ces libellés — ceux saisis sur les colonnes de l'écran Clients à l'étape 2 peuvent être effacés.

### Le statut client — une énumération

Onglet **Énumérations**, **＋ Ajouter une énumération** `CUSTOMER_STATUS`, avec les valeurs `ACTIVE` (Actif), `PROSPECT` (Prospect), `INACTIVE` (Inactif). Puis sur l'entrée `STATUS` : **Rules** `ENUM`, **Rules values** `CUSTOMER_STATUS`.

La grille affiche *Actif* au lieu de `ACTIVE`, et le dialogue propose les trois valeurs.

### Le client d'une affaire — un lookup

Un lookup remplace un code (l'identifiant du client) par un libellé (son nom), à partir d'une requête.

1. **Paramètres → Connecteurs → crm → Lookups → ＋ Ajouter un lookup** : table `customers`, colonne valeur `ID`, colonne libellé `NAME`. L'assistant écrit la requête et le lookup `customers` du dictionnaire.
2. Même chose pour les étapes : table `deal_stages`, valeur `CODE`, libellé `LABEL`.
3. Dans le dictionnaire, entrée `CUSTOMER_ID` : **Rules** `LOOKUP`, **Rules values** `customers` ; entrée `STAGE` : **Rules** `LOOKUP`, **Rules values** `deal_stages`.

Enregistrer le dictionnaire. Voir [Dictionnaire](../dictionary.md) et [Séquences et lookups](../build/queries/sequences-and-lookups.md).

---

## L'écran Affaires

1. **Connecteurs → crm → Tables → ＋ Ajouter des requêtes → Générer depuis la BDD**, table `deals`, clé `ID`. Comme à l'étape 2, retirer `ID` de `deals_post`, et ajouter `UPDATED_AT = {{SYSTIMESTAMP}}` à `deals_put`.
2. **Écrans**, pastille `crm`, **＋ Ajouter un écran** `deals` : libellé `Affaires`, les quatre requêtes, **Importer depuis la requête de lecture** dans Colonnes, un onglet de dialogue `Affaire` avec `CUSTOMER_ID`, `NAME`, `STAGE`, `AMOUNT`, `CLOSE_DATE`, `OWNER`.
3. **Menus**, sous *Ventes* : une entrée `Affaires`, type `screen`, cible `deals_get`, icône `trendingup`.

La grille affiche le nom du client et le libellé de l'étape ; le dialogue les propose dans des listes avec recherche. Cocher **filter** sur `STAGE` et `CUSTOMER_ID` pour filtrer la grille sur ces colonnes.

---

## Les activités dans un onglet

Les activités d'une affaire apparaissent dans son dialogue, sous forme de grille.

### L'écran Activités

1. **Générer depuis la BDD** sur `activities`, clé `ID`. Dans `activities_post`, retirer `ID` et enregistrer l'auteur :

```sql
INSERT INTO activities (DEAL_ID, KIND, NOTES, HAPPENED_AT, RECORDED_BY)
VALUES (:DEAL_ID, :KIND, :NOTES, :HAPPENED_AT, {{LOGIN}})
```

2. Un écran `activities` sur ces requêtes, avec un dialogue contenant `KIND`, `NOTES`, `HAPPENED_AT`. Sa requête de lecture a besoin de l'identifiant de l'affaire — ajouter `WHERE DEAL_ID = :DEAL_ID` à `activities_get`.

### L'onglet

Dans l'écran `deals`, onglet **Dialogue**, **＋ Ajouter un onglet**, puis dans **Paramètres de l'onglet** :

| Réglage | Valeur |
|---|---|
| Libellé de l'onglet | `Activités` |
| Type d'onglet | *Table imbriquée* |
| Écran cible | `activities` |
| Liaisons de paramètres | colonne parent `ID` → paramètre `DEAL_ID` |

L'onglet affiche les activités de l'affaire ouverte ; **＋ Ajouter** y crée une activité dont `DEAL_ID` est déjà renseigné. Activer **hide_on_add** sur l'onglet : une affaire en cours de création n'a pas encore d'identifiant. Voir [Onglets imbriqués](../build/screens/nested-tabs.md).

---

## Résultat à l'écran

- **Clients** : le statut s'affiche par son libellé et se choisit dans une liste.
- **Affaires** : quatre affaires, avec leur client et leur étape ; filtrer sur *Négociation*.
- Ouvrir *Plateforme logistique*, onglet **Activités**, **＋ Ajouter** : enregistrer un appel. *Recorded by* contient le nom de l'utilisateur.

---

## Bilan

Deux écrans liés, des libellés et des listes de valeurs partagés par le dictionnaire, et des lignes enfants dans un dialogue.

→ **[Étape 4 — Tableau de bord](./04-dashboard.md)** : le pipeline d'un coup d'œil.
