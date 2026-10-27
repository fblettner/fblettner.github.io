---
title: Import en masse
description: "Recette — charger de nombreuses lignes depuis un fichier Excel ou CSV : la fenêtre d'import d'un écran, qui vérifie chaque ligne au regard des règles de l'écran et de la base avant d'enregistrer les lignes valides, et l'étape Nomaflow file_load pour les chargements récurrents."
keywords: [Liberty Next, cookbook, import en masse, Excel, CSV, import, uploadable, upsert, validation, file_load, Nomaflow]
---

# Import en masse

## Le besoin

Un fichier de plusieurs centaines de lignes — clients rencontrés sur un salon, catalogue d'un fournisseur — à charger dans une table, sans les saisir une à une.

## La démarche

| Besoin | Outil |
|---|---|
| Un utilisateur charge ponctuellement un fichier depuis un écran. | La fenêtre **Importer** de l'écran. |
| Un fichier arrive régulièrement et doit être chargé sans intervention. | Une tâche Nomaflow avec une étape **`file_load`**. |

## Import depuis un écran

### 1. Activer l'import

Dans l'éditeur d'écran, onglet **Général**, cocher **uploadable**. L'écran doit avoir une requête d'insertion (et une requête de mise à jour pour modifier les lignes existantes). Les utilisateurs autorisés à insérer voient un bouton **Importer** au-dessus de la grille.

### 2. Préparer le fichier

Un fichier `.xlsx` (première feuille) ou `.csv` avec une ligne d'en-têtes. Chaque en-tête est rapproché d'une colonne de l'écran, sans tenir compte de la casse :

- par le nom de la colonne (`NAME`, `PRICE`) ou par son libellé (`Nom`, `Prix`) ;
- pour une colonne à liste de valeurs (`LOOKUP` ou `ENUM`), par le code : l'en-tête `<libellé> (ID)` ou le nom de la colonne — la disposition de l'export Excel de l'écran, si bien qu'un fichier exporté peut être réimporté.

Les colonnes non reconnues sont ignorées.

### 3. Vérifier, puis enregistrer

La fenêtre **Importer depuis Excel** demande le fichier et le traitement des **lignes existantes** : *Mettre à jour ou insérer*, *Insérer seulement* ou *Mettre à jour seulement*. **Vérifier** procède en deux passes :

1. **Règles de l'écran** — chaque valeur au regard de sa colonne : un code de lookup doit exister, une valeur d'énumération doit être autorisée, un booléen doit prendre l'une des deux valeurs.
2. **Base de données** — les lignes retenues exécutent l'insertion ou la mise à jour réelle dans une transaction annulée ensuite : violations de contraintes, valeurs manquantes et clés existantes apparaissent comme lors d'un véritable enregistrement.

Le rapport liste les lignes valides et invalides, avec l'erreur de chacune. **Enregistrer N lignes valides** n'écrit que les lignes valides, par lots.

Les requêtes d'insertion et de mise à jour s'appliquent comme pour un enregistrement de dialogue : jetons, règles du dictionnaire (`LOGIN`, `SYSDATE`, `SEQUENCE`), table d'audit de l'écran et hooks de ligne.

### Coller depuis Excel

En mode édition, des lignes copiées depuis Excel peuvent aussi être collées dans la grille : elles s'ajoutent comme nouvelles lignes, enregistrées par le bouton **Enregistrer** de la grille.

## Chargements récurrents — `file_load`

Pour un fichier qui revient régulièrement, une tâche Nomaflow avec une étape **`file_load`** le charge dans une table : fichier choisi au lancement, chemin sur le serveur ou dossier surveillé ; correspondance en-têtes-colonnes et constantes ; mode `append` ou `replace_partition` (remplacement d'une période, en une transaction) ; requête de refus et total de contrôle ; lignes rejetées téléchargeables en CSV. Voir [Étapes → Chargement de fichier](../../nomaflow/steps.md#file-load).

## Variantes

| Besoin | Moyen |
|---|---|
| **Une clé autre que celle de la table** pour décider entre insertion et mise à jour | Marquer cette colonne comme **clé** sur l'écran. |
| **Des valeurs calculées pendant l'import** | Les placer dans les requêtes (`{{LOGIN}}`, `{{SYSDATE}}`) ou dans les règles du dictionnaire. |
| **Compléter des colonnes liées depuis un lookup** | Les `return_binds` de la colonne : à l'import, ils renseignent la colonne cible quand le fichier la laisse vide. |

## Pour aller plus loin

- [CRUD sur une table existante](./crud-existing-table.md) — l'écran qui reçoit l'import.
- [Export Excel](./excel-export.md) — la disposition de fichier que l'import relit.
- [Étapes → Chargement de fichier](../../nomaflow/steps.md#file-load) — les chargements par tâche.
