---
title: Créer depuis une table de base
description: "L'Assistant CRUD — pointez Liberty sur une table existante, cochez les colonnes, obtenez les quatre requêtes CRUD générées et enregistrées en un clic."
keywords: [Liberty Framework, requêtes, CRUD, assistant, générer depuis la base, introspection, ConnectorsBuilder]
---

# Créer depuis une table de base

Quand la table existe déjà dans la base, le chemin le plus rapide est l'**Assistant CRUD**. Vous le pointez sur un schéma et une table, cochez les colonnes que l'écran doit voir, marquez celles qui identifient une ligne, et Liberty écrit les quatre requêtes (`_get`, `_put`, `_post`, `_delete`) à votre place — y compris la reliaison `:NAME_ORIGINAL` sur UPDATE pour que l'Enregistrer d'un dialogue sache quelle ligne retrouver.

C'est le chemin recommandé pour toute table déjà existante. À éviter uniquement quand la table n'existe pas encore ou quand vous voulez du SQL écrit à la main — voir [Créer une requête personnalisée](./create-custom.md).

---

## Où le trouver

L'assistant est accessible depuis **Paramètres → Connecteurs** :

1. Sélectionnez un connecteur dans la liste de gauche.
2. Basculez la barre de modes du volet droit sur **Tables**.
3. Cliquez sur **＋ Ajouter une table** en haut à droite.
4. Une fenêtre de choix s'ouvre. Sélectionnez **Générer depuis la base**.

L'assistant parcourt alors le pool du connecteur (`GET /api/sql/<connector>/_schemas`) et présente les schémas trouvés.

---

## La disposition de l'assistant

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="cw-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="500" rx="14" fill="url(#cw-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Générer une table depuis la base · [connectors.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="86" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · SCHÉMA</text>
  <rect x="40" y="92" width="280" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="52" y="109" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">public ▾</text>

  <text x="340" y="86" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · FILTRE PAR NOM</text>
  <rect x="340" y="92" width="280" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="352" y="109" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">customers%</text>

  <text x="640" y="86" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · TABLE</text>
  <rect x="640" y="92" width="300" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="652" y="109" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers ▾</text>

  <rect x="40" y="138" width="450" height="270" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="158" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · COLONNES · 7 / 9</text>
  <rect x="58" y="170" width="200" height="22" rx="4" fill="rgba(74,158,255,0.08)"/>
  <text x="76" y="184" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ customer_id</text>
  <text x="200" y="184" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">INT4</text>
  <rect x="270" y="170" width="50" height="20" rx="3" fill="rgba(251,146,60,0.20)"/>
  <text x="295" y="184" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CLÉ</text>

  <text x="76" y="208" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ name</text>
  <text x="200" y="208" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(120)</text>
  <text x="76" y="226" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ email</text>
  <text x="200" y="226" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(255)</text>
  <text x="76" y="244" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ created_at</text>
  <text x="200" y="244" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">TIMESTAMP</text>
  <text x="76" y="262" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ owner_id</text>
  <text x="200" y="262" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">INT4</text>
  <text x="76" y="280" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ status</text>
  <text x="200" y="280" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(20)</text>
  <text x="76" y="298" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">☑ region</text>
  <text x="200" y="298" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">VARCHAR(60)</text>
  <text x="76" y="316" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">☐ notes_blob</text>
  <text x="200" y="316" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">BLOB</text>
  <text x="76" y="334" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">☐ search_vector</text>
  <text x="200" y="334" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">TSVECTOR</text>

  <text x="58" y="368" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · REQUÊTES À ÉMETTRE</text>
  <rect x="58" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="98" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="ui-monospace, monospace">☑ SELECT</text>
  <rect x="144" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="184" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">☑ UPDATE</text>
  <rect x="230" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="270" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">☑ INSERT</text>
  <rect x="316" y="376" width="80" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="356" y="391" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">☑ DELETE</text>

  <rect x="510" y="138" width="450" height="270" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="528" y="158" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">6 · APERÇU EN DIRECT</text>
  <rect x="528" y="170" width="40" height="18" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="548" y="183" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <text x="578" y="183" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">customers_get</text>
  <text x="528" y="202" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="528" y="216" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">  customer_id, name, email,</text>
  <text x="528" y="230" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">  created_at, owner_id, status,</text>
  <text x="528" y="244" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">  region</text>
  <text x="528" y="258" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">FROM public.customers</text>

  <rect x="528" y="278" width="40" height="18" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="548" y="291" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <text x="578" y="291" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">customers_put</text>
  <text x="528" y="310" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE public.customers</text>
  <text x="528" y="324" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">SET name = :name, email = :email,</text>
  <text x="528" y="338" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">    created_at = :created_at,</text>
  <text x="528" y="352" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">    owner_id = :owner_id,</text>
  <text x="528" y="366" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">    status = :status, region = :region</text>
  <text x="528" y="380" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">WHERE customer_id = :customer_id_ORIGINAL</text>

  <line x1="20" y1="430" x2="980" y2="430" stroke="#1f2937" strokeWidth="1"/>
  <rect x="780" y="450" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="468" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="870" y="450" width="80" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="910" y="468" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
</svg>

---

## Étape 1 — Sélectionner un schéma

Le sélecteur de schéma n'apparaît que si le pool en compte plusieurs. PostgreSQL avec un seul `public` et SQLite le sautent ; Oracle (plusieurs schémas) l'exige.

L'assistant récupère les schémas de manière différée — l'ouverture initiale liste juste les noms, le parcours table par table d'un schéma a lieu après votre choix. Sur un pool Oracle volumineux, ce comportement épargne la dizaine de secondes que prendrait un parcours multi-schémas complet.

---

## Étape 2 — Filtrer les noms de tables (facultatif)

Un motif SQL `LIKE` (`customers%`, `F00%`) saisi dans le champ **Filtre par nom** restreint la liste des tables **côté serveur**, avant que l'introspection des colonnes ne s'exécute pour chacune. Pour des pools qui comptent des milliers de tables, c'est la différence entre un sélecteur réactif et un sélecteur lent.

Le filtre est temporisé — tapez librement ; la requête part environ 350 ms après l'arrêt de la frappe.

---

## Étape 3 — Sélectionner la table

Une fois la table choisie, l'assistant récupère ses colonnes et pré-remplit deux ensembles :

| Ensemble | Règle de pré-remplissage |
|---|---|
| **Incluses** | Toutes les colonnes sont cochées. |
| **Clés** | Toutes les colonnes que la base marque `NOT NULL` sont cochées. |

Ce sont des suppositions — décochez les colonnes à ne pas exposer (BLOB, colonnes d'audit, champs calculés) et confirmez les clés.

---

## Étape 4 — Cocher colonnes et clés

Chaque ligne de la liste **Colonnes** porte :

| Élément | Rôle |
|---|---|
| **Case Inclure** | Décochée, la colonne disparaît du `SELECT` de `_get` et de l'`INSERT` de `_post`. Le dialogue ne la verra pas. |
| **Nom + type de colonne** | En lecture seule — proviennent de la base en direct. |
| **Bascule CLÉ** | Fixée à droite. Cochée, cette colonne pilote la clause `WHERE` du `_put` (avec `:NAME_ORIGINAL`) et la clause `WHERE` du `_delete`. |

Une ligne avec **au moins une** clé est requise pour que UPDATE / DELETE produisent quoi que ce soit. L'assistant refuse d'enregistrer sans cela.

---

## Étape 5 — Choisir les requêtes à émettre

Quatre cases à cocher — **SELECT (`_get`)**, **UPDATE (`_put`)**, **INSERT (`_post`)**, **DELETE (`_delete`)**. Cochez celles dont la table a besoin.

| Motif | À cocher |
|---|---|
| Table de référence en lecture seule. | SELECT uniquement. |
| Table CRUD standard. | Les quatre. |
| Ajouts seulement (journal d'audit). | SELECT + INSERT. |
| Table de référence éditée seulement par INSERT puis purge. | SELECT + INSERT + DELETE. |

La requête **SELECT** est toujours émise — au minimum, l'écran a besoin de lire la table.

---

## Étape 6 — Lire l'aperçu, surcharger au besoin

La colonne de droite affiche le SQL généré pour chaque emplacement CRUD coché, en direct. Modifiez n'importe quel aperçu directement — votre modification prime sur la génération automatique tant que vous ne changez pas la sélection de colonnes/clés, ce qui restaure la version générée.

### Les quatre formes

```sql
-- _get : SELECT direct sur les colonnes incluses
SELECT col1, col2, …
FROM   <schema>.<table>

-- _post : INSERT lié à des placeholders :col
INSERT INTO <schema>.<table> (col1, col2, …)
VALUES                       (:col1, :col2, …)

-- _put  : UPDATE des colonnes non-clés, WHERE sur la clé avec :NAME_ORIGINAL
UPDATE <schema>.<table>
SET    non_key1 = :non_key1, non_key2 = :non_key2, …
WHERE  key1 = :key1_ORIGINAL
   AND key2 = :key2_ORIGINAL

-- _delete : DELETE sur la clé avec :NAME (le dialogue lie les valeurs actuelles de la ligne)
DELETE FROM <schema>.<table>
WHERE  key1 = :key1
   AND key2 = :key2
```

### Pourquoi `:NAME_ORIGINAL` sur UPDATE ? \{#why-name_original-on-update\}

L'Enregistrer d'un dialogue envoie deux instantanés de chaque colonne clé : la valeur actuelle (`:key1`) et celle qu'avait la ligne à l'ouverture du dialogue (`:key1_ORIGINAL`). L'UPDATE filtre sur l'*originale* pour que la ligne soit retrouvée même quand l'opérateur a modifié la clé elle-même. L'Assistant CRUD câble cette convention pour vous — si vous écrivez plus tard un `_put` à la main, reproduisez-la.

---

## Étape 7 — Enregistrer

Le bouton **Enregistrer** :

1. Ajoute les requêtes cochées à la liste des requêtes du connecteur.
2. Sauvegarde le fichier connecteur.
3. Déclenche un rechargement à chaud — les nouvelles requêtes sont appelables immédiatement.

Les quatre nouvelles requêtes apparaissent dans l'onglet **Tables** regroupées sous leur nom de base commun, avec les quatre badges d'emplacement CRUD indiquant celles qui ont été émises.

---

## Validation — ce qui bloque l'enregistrement

| Erreur | Cause | Correction |
|---|---|---|
| *Sélectionnez une table.* | Aucune table sélectionnée. | Sélectionnez-en une. |
| *Nommez la table.* | Le champ **nom de base** est vide (déduit du nom de la table ; effacez-le pour le surcharger). | Saisissez un nom de base — lettres, chiffres, tirets bas. |
| *Incluez au moins une colonne.* | Toutes les colonnes ont été décochées. | Cochez-en au moins une. |
| *La requête de lecture (\_get) est obligatoire.* | SELECT a été décoché. | Recochez-le. |
| *Choisissez au moins une colonne clé pour UPDATE / DELETE.* | UPDATE ou DELETE est coché mais aucune colonne n'a CLÉ activée. | Marquez la ou les colonnes clés. |
| *Une requête nommée « X » existe déjà.* | Le nom de base produit un `<base>_get` (ou `_put` / `_post` / `_delete`) en collision avec une requête existante sur ce connecteur. | Choisissez un autre nom de base, ou supprimez d'abord l'ancienne. |

---

## Ce que vous venez de bâtir

Pour une table `customers` avec `customer_id` comme clé, l'assistant a généré quatre requêtes :

| Nom | Type | Utilisée par |
|---|---|---|
| `customers_get` | `table` (lecture) | La lecture de la grille + formulaire. |
| `customers_put` | `table` (écriture) | L'Enregistrer du dialogue (UPDATE). |
| `customers_post` | `table` (écriture) | L'Enregistrer du dialogue (INSERT). |
| `customers_delete` | `table` (écriture) | L'action Supprimer de la grille. |

Elles atterrissent dans l'onglet **Tables** sur une ligne libellée `customers` avec les quatre badges GET / PUT / POS / DEL tous verts. L'étape suivante est de **construire un écran par-dessus** — couverte dans la prochaine section Écrans.

---

## Quand utiliser l'assistant ou écrire à la main

| Utiliser l'assistant | Écrire à la main (`Ajouter une requête` sur Non classées) |
|---|---|
| La table existe en base. | La requête est un rapport personnalisé, un agrégat ou un appel de procédure stockée. |
| Vous voulez les quatre formes CRUD standard. | Vous avez besoin d'un `JOIN`, d'un `GROUP BY`, d'une CTE `RECURSIVE`. |
| Vous partez de zéro et les colonnes sont la source de vérité. | Vous voulez une requête qui ne se projette pas 1 pour 1 sur une table. |

L'assistant est le bon outil pour **80 % des tables opérationnelles**. Les 20 % restants — analytique, rapports, jointures multi-tables — passent par [Créer une requête personnalisée](./create-custom.md).

---

## Et ensuite

- [Créer une requête personnalisée](./create-custom.md) — quand l'assistant ne convient pas.
- [Dupliquer une requête ou un connecteur](./clone.md) — partir d'une requête existante plutôt que de zéro.
- [Liaison de paramètres](./parameter-binding.md) — donner aux paramètres `:placeholder` libellés, valeurs par défaut et valeurs liées depuis les écrans.
