---
title: Téléversement de fichier
description: "Recette — permettre aux utilisateurs d'attacher des fichiers à une ligne (contrats, factures, photos) et de les retrouver depuis la même ligne. Deux modèles : stocker le fichier en base, ou stocker une référence et déporter vers un stockage objet."
keywords: [Liberty Framework, cookbook, téléversement, pièce jointe, blob, S3, MinIO, écrans]
---

# Téléversement de fichier

## Le problème

Une ligne a un fichier associé — un PDF de contrat sur le client, un reçu numérisé sur la note de frais, une photo sur l'ordre de maintenance. Les opérateurs doivent pouvoir le téléverser, le voir, le remplacer, le télécharger.

## Le modèle

Deux modèles de stockage, choisissez-en un :

| Modèle | Avantage | Inconvénient |
|---|---|---|
| **A. Blob en base de données** | Sauvegarde unique, pas d'infra supplémentaire, ACID avec la ligne. | La base gonfle ; pas adapté aux gros fichiers (>10 Mo). |
| **B. Référence en base, fichier dans un stockage objet** (S3, MinIO, Azure Blob, Google Cloud Storage) | Passe à l'échelle. Bon marché. Facile à changer. | Deux systèmes à sauvegarder. Deux systèmes qui peuvent diverger. |

A convient jusqu'à peut-être quelques Go de fichiers totaux ; au-delà, B.

## Modèle A — blob en base de données

### Schéma

Ajoutez une colonne `BYTEA` (PostgreSQL) / `BLOB` (Oracle, SQLite) à la table :

```sql
ALTER TABLE customers
  ADD COLUMN contract_pdf      BYTEA,
  ADD COLUMN contract_filename VARCHAR(255),
  ADD COLUMN contract_mime     VARCHAR(64);
```

Les colonnes de métadonnées (nom de fichier, type MIME) aident à servir le fichier en retour.

### Entrée dictionnaire

| Champ | Valeur |
|---|---|
| **Nom** | `file_attachment` |
| **Type** | `bytea` *(ou `blob`)* |
| **Règle** | `—` |
| **Surcharge widget** | `FileUpload` |

Puis sur la requête `list` du connecteur customers, ajoutez un indice de colonne pour `contract_pdf` pointant vers `file_attachment`.

### Écran

Le dialogue rend le champ comme une **zone de glisser-déposer de téléversement** :

- Si vide, une zone « Déposez le fichier ici ou cliquez pour parcourir ».
- Si rempli, une ligne « 📎 contract.pdf (412 Ko) — Remplacer / Télécharger / Supprimer ».

Enregistrer téléverse le fichier dans le payload du dialogue (multipart/form-data) ; le framework écrit le BYTEA à l'`update`.

### Limites

Le framework plafonne un téléversement unique à la valeur de `[app] max_upload_size_mb` (défaut 25 Mo). Au-delà, basculez vers le Modèle B.

## Modèle B — stockage objet avec colonne de référence

### Schéma

Juste les références :

```sql
ALTER TABLE customers
  ADD COLUMN contract_s3_key VARCHAR(255),
  ADD COLUMN contract_filename VARCHAR(255);
```

### Configuration du stockage objet

**Paramètres → Framework → Stockage** (sous-formulaire) :

| Champ | Valeur |
|---|---|
| **Fournisseur** | `S3` / `Azure Blob` / `GCS` / `Local filesystem` (développement uniquement) |
| **Endpoint** | L'endpoint du bucket (URL compatible S3). |
| **Bucket** | Le nom du bucket. |
| **Identifiants** | Clé d'accès + secret (chiffrés au repos). |

### Widget dictionnaire

| Champ | Valeur |
|---|---|
| **Nom** | `s3_attachment` |
| **Surcharge widget** | `S3Upload` |
| **Colonne de référence** | `contract_s3_key` |
| **Colonne nom de fichier** | `contract_filename` |

Le widget gère :

- Le téléversement (stream directement vers S3, ne passe pas par le framework — économe en bande passante).
- L'URL pré-signée au téléchargement (le framework ne fait jamais proxy du fichier).
- L'action « supprimer » qui supprime l'objet S3 + met à null la colonne de référence.

### Permissions

Deux codes de permission sont générés automatiquement :

| Code | Accordé à |
|---|---|
| `storage:read:<bucket>` | Émettre une URL pré-signée de téléchargement. |
| `storage:write:<bucket>` | Émettre une URL pré-signée de téléversement. |

Accordez-les sur les rôles concernés.

## Pièces jointes multi-fichiers

Les deux modèles fonctionnent pour un-fichier-par-ligne. Pour le multi-fichier (un client peut avoir N contrats), suivez le modèle de sous-grille du [Tutoriel CRM → Étape 3](../tutorial-crm/03-deals.md) — faites de `attachments` une table enfant jointe par `customer_id`, avec une ligne par fichier.

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Seulement PDF / image / etc** | Définissez le champ `accept` sur le widget dictionnaire — `application/pdf`, `image/*`. |
| **Analyse antivirus avant enregistrement** | Ajoutez une étape Nomaflow `python` sur l'événement de téléversement qui appelle votre service antivirus. Rejeter si positif. |
| **Glisser-déposer multi-fichiers** | Utilisez le modèle de sous-grille ci-dessus ; le widget du framework gère le téléversement en masse vers la même cible. |
| **Un aperçu en miniature** | Ajoutez une requête `&lt;connector&gt;.thumbnail` qui renvoie un aperçu base64 ; affichez-le dans la grille via une règle `Image`. |

## Pour aller plus loin

- [Concepts → Écrans](../build/screens/overview.md) pour le modèle de champ du dialogue.
- [Interface Paramètres → Framework](../configuration/app-toml.md) pour le sous-formulaire *Stockage*.
- [Cookbook → CRUD sur une table existante](./crud-existing-table.md) — le modèle d'écran environnant.
