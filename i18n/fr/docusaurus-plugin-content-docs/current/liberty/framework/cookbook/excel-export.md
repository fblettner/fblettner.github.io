---
title: Export Excel
description: "Recette — exporter un écran vers Excel : le menu Exporter de la grille (vue courante, Excel ou CSV, colonnes visibles ou toutes), et les classeurs configurés dans l'onglet Export de l'écran — plusieurs feuilles, un fichier par groupe, construits par le serveur."
keywords: [Liberty Next, cookbook, Excel, export, XLSX, CSV, classeur, feuilles, split_by, écran]
---

# Export Excel

## Le besoin

Les utilisateurs veulent les données d'un écran dans Excel — pour les retravailler hors ligne, les transmettre à une personne sans accès, ou produire un rapport récurrent.

## La démarche

| Niveau | Réglage | Résultat |
|---|---|---|
| **L'export de la grille** | Aucun — toute grille le propose. | La vue courante en `.xlsx` ou `.csv`. |
| **Les classeurs configurés** | L'onglet **Export** de l'écran. | Un ou plusieurs fichiers `.xlsx` à plusieurs feuilles, construits par le serveur. |

## L'export de la grille

Le menu **Exporter** au-dessus de chaque grille propose **Excel (.xlsx)** et **CSV (.csv)**. Le fichier contient les lignes chargées dans la grille, avec ses filtres, son tri et ses colonnes visibles ; **Toutes les colonnes (masquées incluses)** ajoute les colonnes masquées.

Une colonne à liste de valeurs donne deux colonnes dans le fichier : le libellé, et le code sous `<libellé> (ID)` — la disposition que relit l'[import](./bulk-import.md) de l'écran.

L'export porte sur les lignes chargées par la grille : pour un fichier complet, relever le plafond de lignes de l'écran ou resserrer les filtres.

## Les classeurs configurés

Pour un rapport structuré — plusieurs feuilles, un fichier par service —, renseigner l'onglet **Export** de l'écran. Un bouton **Export workbooks** (libellé anglais) apparaît alors au-dessus de la grille ; le serveur construit les fichiers et le navigateur les télécharge (dans un `.zip` quand il y en a plusieurs).

| Réglage | Effet |
|---|---|
| **split_by** | Une colonne de la requête de lecture de l'écran : un fichier par valeur distincte. Vide : un seul fichier. |
| **sheets** | Les feuilles de chaque fichier, dans l'ordre. Chaque feuille a un **name**, une **query** (avec son **connector**) et des **param_binds** — `source = "split_value"` transmet à la requête la valeur de groupe du fichier. |
| **split_by** d'une feuille | Une colonne de la requête de la feuille : un onglet par valeur distincte. |
| **file_name_template** | Le nom du fichier ; `{{split_value}}` et `{{screen}}` sont remplacés. Par défaut : `<écran>_<valeur>.xlsx`. |

Les noms de feuilles acceptent `{{split_value}}` et `{{sheet_value}}` ; ils sont ramenés aux 31 caractères admis par Excel.

### Exemple — un fichier par service

```toml
[screens.hr.employees.export]
split_by = "DEPARTMENT"
file_name_template = "effectif_{{split_value}}.xlsx"

[[screens.hr.employees.export.sheets]]
name  = "Salariés"
query = "employees_by_department"
param_binds = [{ param = "DEPARTMENT", source = "split_value" }]

[[screens.hr.employees.export.sheets]]
name  = "Applications"
query = "applications_by_department"
param_binds = [{ param = "DEPARTMENT", source = "split_value" }]
```

Le bouton produit un `.zip` contenant un classeur par service, chacun avec une feuille *Salariés* et une feuille *Applications*.

## Variantes

| Besoin | Moyen |
|---|---|
| **Un export agrégé** | Une requête (ou une vue de la base) qui agrège, utilisée comme requête de feuille — ou un écran sur cette vue. |
| **Un rapport envoyé chaque semaine** | Voir [Rapport planifié par e-mail](./scheduled-report-email.md). |

## Pour aller plus loin

- [Import en masse](./bulk-import.md) — recharger la disposition exportée.
- [Écrans](../build/screens/overview.md) — l'onglet Export parmi les autres.
- [API REST](../../references/rest-api.md) — `POST /api/screens/{app}/{id}/export` construit les classeurs.
