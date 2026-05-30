---
title: Import en masse
description: "Recette — permettre aux opérateurs de téléverser un fichier CSV ou Excel et d'importer ses lignes dans une table. Validation par ligne, rapport des succès et échecs, base de données intacte en cas d'erreurs."
keywords: [Liberty Framework, cookbook, import en masse, CSV, Excel, upsert, validation]
---

# Import en masse

## Le problème

Un utilisateur a un CSV (ou XLSX) avec des centaines de lignes et veut les importer dans une table — nouveaux clients d'un salon professionnel, produits d'un catalogue fournisseur, contrats d'une migration. Il ne veut pas saisir chacun via le dialogue d'édition.

## Le modèle

Deux parties :

1. **Une action d'écran** qui ouvre un dialogue d'*Import* avec un sélecteur de fichier.
2. **Un job Nomaflow** déclenché par le téléversement qui parse le fichier, valide chaque ligne, effectue des upserts, renvoie un rapport par ligne.

Le framework parse le fichier (CSV / XLSX / TSV) ; votre seul travail est de déclarer le **mapping** entre colonnes source et colonnes cibles.

## La recette

### 1. Préparation du schéma

Si votre table cible a besoin d'une **clé externe** pour détecter les doublons (et décider insert vs update), assurez-vous qu'elle existe :

```sql
ALTER TABLE customers
  ADD COLUMN external_code VARCHAR(64) UNIQUE;
```

L'import en masse mettra en correspondance les lignes entrantes avec cette colonne.

### 2. Définir le connecteur d'import

**Paramètres → Connecteurs → customers → + Ajouter requête** :

```sql
-- upsert
INSERT INTO customers (external_code, name, status, country)
VALUES (:external_code, :name, :status, :country)
ON CONFLICT (external_code) DO UPDATE SET
  name = EXCLUDED.name,
  status = EXCLUDED.status,
  country = EXCLUDED.country,
  updated_by = :session_user,
  updated_at = CURRENT_TIMESTAMP;
```

Opération : `Write`. Déclarez les quatre paramètres.

Pour Oracle / SQLite, remplacez `ON CONFLICT` par l'équivalent (`MERGE` sur Oracle, `INSERT OR REPLACE` sur SQLite).

### 3. Construire le job d'import

**Paramètres → Jobs → + Nouveau job** :

| Champ | Valeur |
|---|---|
| **Nom** | `customers-bulk-import` |
| **Application** | `&lt;app&gt;` |
| **Planification** | vide *(déclenchement manuel uniquement)* |
| **Instance unique** | ✓ |

Deux étapes :

#### Étape 1 — parser le fichier

| Champ | Valeur |
|---|---|
| **Nom** | `parse` |
| **Type** | `Python` |
| **Callable** | `liberty.builtin.bulk_import:parse_file` *(helper du framework)* |
| **Kwargs** | `file_url = ${params.file_url}`, `mapping = { "Customer code": "external_code", "Name": "name", "Country": "country", "Status": "status" }` |

Le helper :

- Détecte CSV / XLSX depuis l'extension du fichier.
- Parse les en-têtes ; les met en correspondance avec le mapping.
- Renvoie une liste de lignes avec les noms de colonnes cibles.

#### Étape 2 — upsert chaque ligne

| Champ | Valeur |
|---|---|
| **Nom** | `upsert` |
| **Type** | `Python` |
| **Callable** | `liberty.builtin.bulk_import:upsert_rows` |
| **Kwargs** | `rows = ${steps.parse.rows}`, `connector = "customers"`, `query = "upsert"`, `chunk_size = 500` |

Le helper :

- Découpe les lignes en morceaux de 500.
- Appelle la requête upsert par ligne, capture succès et échecs.
- Renvoie `{ "ok": 487, "failed": 13, "failures": [...] }`.

Les paramètres du job déclarent `file_url` — défini sur l'onglet *Paramètres*.

### 4. Ajouter l'action d'écran

**Paramètres → Écrans → customers → onglet Actions → + Bouton personnalisé** au niveau de la barre d'outils (pas le dialogue) :

| Champ | Valeur |
|---|---|
| **Libellé** | `↑ Importer` |
| **Icône** | `upload` |
| **Variante** | `Secondary` |
| **Action** | `Exécuter le job` |
| **Job** | `customers-bulk-import` |
| **Dialogue de paramètres** | ✓ *(affiche le sélecteur de fichier avant exécution)* |

### 5. Permissions

Accordez `job:customers-bulk-import` aux rôles autorisés à importer. Passez pour les rôles en lecture seule.

## Voir le résultat

Ouvrez l'écran *Customers*, cliquez sur **↑ Importer**. Le framework affiche un dialogue avec un sélecteur de fichier. Déposez un CSV, cliquez sur *Exécuter*. La page de détail d'exécution du job s'ouvre avec une queue de log en direct ; à la fin vous voyez « 487 importés, 13 échoués », avec les échecs listés par ligne (numéro de ligne + message d'erreur).

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Valider avant d'importer** | Ajoutez une étape entre `parse` et `upsert` qui exécute une validation par ligne. Renvoyez la liste d'erreurs ; arrêtez le job s'il y en a. |
| **Afficher un aperçu avant validation** | Exécutez le job en mode `dry_run = true` ; le helper `upsert_rows` accepte ce flag et ne journalise que ce qu'il ferait. Puis un second clic déclenche l'exécution réelle. |
| **Annuler sur toute erreur** | Encadrez les upserts dans une transaction ; le helper a un mode `transactional = true`. |
| **Planifier un import quotidien depuis S3** | Même job, définissez un planning cron + remplacez l'étape 1 par une étape `http` qui tire depuis S3. |

## Pour aller plus loin

- [Jobs → Types d'étape → python](../jobs/step-types.md) pour la signature du helper.
- [Cookbook → Téléversement de fichier](./file-upload.md) pour la couche de stockage de fichier que l'import utilise.
