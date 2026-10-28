---
title: Fichiers et pièces jointes
description: "Recette — ce que Liberty Next propose pour les fichiers : les écrans n'ont pas de champ pièce jointe, mais une ligne peut porter l'adresse d'un document stocké ailleurs, les lignes d'un fichier peuvent être importées dans un écran, et une tâche Nomaflow peut charger un fichier choisi au lancement."
keywords: [Liberty Next, cookbook, fichiers, pièces jointes, url, lien, import, file_load, téléversement]
---

# Fichiers et pièces jointes

## Le besoin

Une ligne s'accompagne d'un fichier — le contrat signé d'un client, le scan d'un justificatif — ou un fichier contient des lignes à charger dans une table.

## L'existant

Les écrans n'ont **pas de champ pièce jointe** : un dialogue ne peut ni enregistrer un fichier dans une ligne ni le rendre téléchargeable. Trois mécanismes couvrent les besoins courants :

| Besoin | Mécanisme |
|---|---|
| Retrouver le document d'une ligne | Une **colonne d'adresse** : la ligne enregistre l'adresse du document dans le stockage documentaire déjà en place (partage de fichiers, SharePoint, stockage objet). |
| Charger les lignes d'un fichier Excel / CSV dans une table, depuis un écran | L'**import** de l'écran — voir [Import en masse](./bulk-import.md). |
| Charger un fichier dans une table, par une tâche | Une étape Nomaflow **`file_load`** : le fichier est choisi dans la fenêtre **Exécuter avec des paramètres**, lu sur un chemin du serveur ou pris dans un dossier surveillé — voir [Étapes → Chargement de fichier](../../nomaflow/steps.md#file-load). |

## Adresse d'un document

### 1. Une colonne pour l'adresse

```sql
ALTER TABLE contracts ADD document_url VARCHAR(500);
```

### 2. L'afficher

Donner à l'entrée `DOCUMENT_URL` du dictionnaire un libellé et le format **url** (Paramètres → Dictionnaire → Entrées). La grille et le dialogue affichent l'adresse sous forme de texte, à copier dans le navigateur — elle n'est pas transformée en lien cliquable.

### 3. La renseigner

Les utilisateurs collent l'adresse dans le dialogue, ou une tâche la renseigne — par exemple une étape `python` qui range les documents d'un dossier dans le stockage et écrit leurs adresses dans la table (voir [Plugins](../apps/plugins.md)).

L'accès au document lui-même relève du stockage documentaire, pas de Liberty Next.

## Pour aller plus loin

- [Import en masse](./bulk-import.md) — charger les lignes d'un fichier depuis un écran.
- [Étapes → Chargement de fichier](../../nomaflow/steps.md#file-load) — charger un fichier par une tâche.
- [Dictionnaire → Formats](../dictionary.md#formats) — les formats d'affichage.
