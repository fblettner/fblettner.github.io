---
title: Étape 2 — L'écran Clients
description: "Premier écran du CRM : les requêtes des clients générées par l'assistant CRUD, des colonnes d'audit renseignées par le serveur, un écran avec grille et dialogue de modification, et le menu qui fait du connecteur crm une application."
keywords: [Liberty Next, tutoriel, CRM, clients, assistant CRUD, écran, menu, dialogue, "{{LOGIN}}"]
---

# Étape 2 — L'écran Clients

La table `customers` devient un écran : une grille avec filtres, un dialogue de modification, l'ajout et la suppression. Trois endroits des Paramètres, dans cet ordre : **Connecteurs** (les requêtes), **Écrans** (l'interface), **Menus** (l'entrée qui l'ouvre).

---

## Les requêtes

1. **Paramètres → Connecteurs**, sélectionner `crm`, choisir **Tables** dans la barre de modes.
2. **＋ Ajouter des requêtes → Générer depuis la BDD**, choisir la table `customers`.
3. Garder toutes les colonnes, cocher **clé** sur `ID`, conserver les quatre instructions. Enregistrer.

Le connecteur contient désormais `customers_get`, `customers_post`, `customers_put` et `customers_delete`. Deux ajustements dans l'éditeur de requête :

- **`customers_post`** — la base numérote les lignes (`SERIAL`) : retirer `ID` de l'insertion, et renseigner la création :

```sql
INSERT INTO customers (NAME, INDUSTRY, COUNTRY, STATUS, PRIMARY_EMAIL, CREATED_BY, CREATED_AT)
VALUES (:NAME, :INDUSTRY, :COUNTRY, :STATUS, :PRIMARY_EMAIL, {{LOGIN}}, {{SYSTIMESTAMP}})
```

- **`customers_put`** — ne pas toucher aux colonnes de création, et renseigner la modification :

```sql
UPDATE customers
SET NAME = :NAME, INDUSTRY = :INDUSTRY, COUNTRY = :COUNTRY, STATUS = :STATUS,
    PRIMARY_EMAIL = :PRIMARY_EMAIL, UPDATED_BY = {{LOGIN}}, UPDATED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID_ORIGINAL
```

`{{LOGIN}}` et `{{SYSTIMESTAMP}}` sont renseignés par le serveur — nom de l'utilisateur et heure courante — quelles que soient les valeurs envoyées par le formulaire. Enregistrer la page des connecteurs.

Chaque requête a sa propre permission — `sql:crm:customers_get`, `sql:crm:customers_put`… — utilisée à l'[étape 5](./05-auth.md). Les superutilisateurs les ont toutes.

---

## L'écran

1. **Paramètres → Écrans → ＋ Ajouter une portée**, choisir `crm` : la pastille `crm` apparaît.
2. **＋ Ajouter un écran**, identifiant `customers`, puis cliquer sur la carte pour ouvrir l'éditeur d'écran.

| Onglet | Réglage |
|---|---|
| **Général** | Libellé `Clients`. |
| **Requêtes** | Lecture `customers_get`, mise à jour `customers_put`, insertion `customers_post`, suppression `customers_delete`. |
| **Colonnes** | **Importer depuis la requête de lecture**, puis : donner un libellé à chaque colonne, masquer `ID`, `CREATED_BY`, `CREATED_AT`, `UPDATED_BY` (**hidden**), cocher **filter** sur `STATUS`, `COUNTRY` et `INDUSTRY`. |
| **Dialogue** | Un onglet `Détails` avec `NAME`, `INDUSTRY`, `COUNTRY`, `STATUS`, `PRIMARY_EMAIL`. |

Enregistrer. Les libellés saisis sur les colonnes pourront ensuite passer dans le dictionnaire, qui sert tous les écrans — voir l'[étape 3](./03-deals.md).

---

## Le menu

1. **Paramètres → Menus → + Ajouter une portée**, choisir `crm` : l'arborescence vide de l'application apparaît.
2. **＋ Dossier** : libellé `Ventes`, icône `briefcase`.
3. Sur le dossier, **Ajouter un enfant** : libellé `Clients`, type `screen`, cible `customers_get`, icône `users`.
4. Enregistrer.

`crm` a désormais un menu : c'est une **application**, proposée dans le sélecteur d'application en haut du menu latéral (à partir de deux applications). Son menu affiche **Ventes → Clients**.

---

## Résultat à l'écran

Ouvrir **Clients** : la grille présente ACME Industries, Beta SARL et Gamma SA.

- Un clic sur une ligne ouvre le dialogue avec les cinq champs ; en modifier un et **Enregistrer** — *Updated by* et *Updated at* sont renseignés (les afficher par le menu **Colonnes** de la grille).
- **＋ Ajouter** ouvre un dialogue vide pour un nouveau client.
- **Supprimer** dans le dialogue retire la ligne.

---

## Bilan

Un écran Clients — liste, filtres, ajout, modification, suppression — construit à partir d'une table, avec des colonnes d'audit renseignées par le serveur.

→ **[Étape 3 — Affaires et relations](./03-deals.md)** : listes de valeurs du dictionnaire, affaires liées aux clients, activités dans un onglet.
