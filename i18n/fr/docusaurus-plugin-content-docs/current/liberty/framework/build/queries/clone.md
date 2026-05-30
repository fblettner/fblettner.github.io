---
title: Dupliquer une requête ou un connecteur
description: "Dupliquer une requête au sein d'un connecteur, dupliquer toutes les requêtes CRUD d'une table, ou dupliquer une application entière (connecteur + dictionnaire + écrans + menu + tableaux de bord + graphiques)."
keywords: [Liberty Framework, dupliquer requête, duplication, dupliquer connecteur, dupliquer application, ConnectorsBuilder]
---

# Dupliquer une requête ou un connecteur

La page Connecteurs de Liberty propose **trois** dispositifs de duplication, chacun avec une portée différente. Ils se ressemblent — boutons Dupliquer juxtaposés — mais touchent des fichiers différents et demandent des saisies différentes. Choisissez le bon, sans quoi vous écrirez plus que prévu.

| Dispositif | Portée | Fichiers touchés |
|---|---|---|
| **Duplication par requête** | Une seule requête. | Le fichier connecteur uniquement. |
| **Dupliquer une table** | Les quatre requêtes CRUD d'une table. | Le fichier connecteur uniquement. |
| **Dupliquer l'application** | Le connecteur entier + tout ce qui en dépend. | Fichier connecteur + dictionnaire + écrans + menu + tableaux de bord + graphiques. |

Chacun est détaillé ci-dessous avec ses cas d'usage.

---

## Duplication par requête

Un bouton *Dupliquer* se trouve en haut à droite de l'éditeur de requête unique (onglets Non classées / Séquences / Recherches). Le clic :

1. Demande un nouveau nom (par défaut `<original>_copy`).
2. Copie en profondeur la requête — seul le nom diffère ; SQL, params, `writable`, `label`, `description`, map SQL par dialecte, chaque champ imbriqué est cloné en JSON et indépendant.
3. Ajoute la copie à la liste des requêtes du connecteur.
4. Sélectionne la copie pour que vous puissiez l'éditer immédiatement.

La page est alors modifiée — appuyez sur **Enregistrer** dans la barre d'outils du haut pour persister.

### Quand l'utiliser

| Motif | Pourquoi dupliquer |
|---|---|
| Vous voulez une variante d'une requête existante — même forme, filtre différent. | La copie préserve les params et le SQL par dialecte ; vous n'éditez que la clause WHERE. |
| Vous avez besoin d'un `_v2` d'une requête pendant que l'ancienne reste en place. | Permet à un écran de continuer à utiliser l'ancienne requête pendant qu'un nouvel écran câble la nouvelle. |
| Vous expérimentez. | Dupliquez, malmenez la copie, conservez l'original à l'abri. |

### Ce qui change — et ce qui ne change pas

| Identique | Modifié |
|---|---|
| SQL, params, writable, label, description, map par dialecte. | Seul le `name`. |
| | Les références multi-fichiers vers l'original — elles continuent de pointer sur l'original. La copie est une toute nouvelle requête que personne ne référence encore. |

Si vous voulez que les références soient **déplacées** vers la copie, c'est un Renommer, pas une Duplication (et le Renommage est destructif — il supprime l'ancien nom une fois les références reportées).

---

## Dupliquer une table

Quand le volet droit est en mode **Tables**, chaque ligne porte une icône *Dupliquer* (l'icône de copie à droite des badges d'emplacement CRUD). Le clic :

1. Demande un nouveau nom de base (par défaut `<base>_copy`).
2. Copie en profondeur **chaque emplacement CRUD** de la table — `<base>_get` → `<copy>_get`, `<base>_put` → `<copy>_put`, etc. Seuls les emplacements présents sont dupliqués (une table en lecture seule avec seulement `_get` produit une seule copie de requête).
3. Ajoute les copies à la liste des requêtes.
4. Sélectionne le nouveau nom de base dans la liste Tables.

### Quand l'utiliser

| Motif | Pourquoi |
|---|---|
| Deux écrans qui partagent une même forme de table mais nécessitent des filtres ou listes de colonnes différents. | Dupliquez, modifiez la clause SELECT du `_get` sur la copie. Les deux écrans restent indépendants. |
| Version bac à sable d'une table de production. | Dupliquez vers `<base>_sandbox`, pointez sur un schéma bac à sable, les écrans conservent l'original. |
| Variante par locataire en mode multi-tenant. | Dupliquez par locataire, échangez le nom de schéma dans chacun. (Pour un identifiant de locataire unique passé à l'exécution, utilisez plutôt des paramètres `:placeholder` sur une requête partagée — voir [Liaison de paramètres](./parameter-binding.md).) |

La duplication est une copie ponctuelle — les éditions futures de l'original ne se propagent pas. Pour « une définition, plusieurs invocations », utilisez le **SQL par dialecte** (même pool de connecteur, bases différentes) ou des **params partagés** (une requête, valeurs liées différentes).

---

## Dupliquer l'application — l'application entière \{#clone-app--the-whole-application\}

La plus grosse des trois. Accessible depuis :

- Le bouton **Dupliquer** dans l'onglet *Paramètres* du volet droit quand un connecteur de classe Applications est sélectionné, ou
- Ce même bouton Dupliquer pour n'importe quel connecteur — la fenêtre permet de choisir lequel dupliquer.

La fenêtre demande trois valeurs :

| Champ | Rôle |
|---|---|
| **Connecteur source** | Le connecteur à copier. Par défaut, celui qui était sélectionné. |
| **Nouveau nom** | La nouvelle clé de connecteur (minuscules, commence par une lettre — mêmes règles d'identifiant qu'ailleurs). |
| **Pool** | Le pool sur lequel le nouveau connecteur doit s'exécuter. Doit déjà exister dans *Paramètres → Pools*. |

Cliquer sur **Dupliquer** déclenche une copie multi-fichiers via un endpoint dédié. Liberty :

1. Copie l'entrée du **connecteur** vers la nouvelle clé, avec le nouveau pool câblé.
2. Copie la **surcouche dictionnaire** du connecteur (le bloc `[connectors.<source>]` du dictionnaire).
3. Copie les **écrans** de ce connecteur.
4. Copie le **menu** de ce connecteur.
5. Copie les **tableaux de bord** et **graphiques** rattachés au connecteur.
6. Recharge le framework pour que la nouvelle application apparaisse immédiatement dans le sélecteur du haut.

La bannière de statut indique le nombre d'entrées copiées ; d'éventuels avertissements (par ex. clé d'application de menu non renommée) accompagnent le message.

### Quand l'utiliser

| Motif | Exemple |
|---|---|
| Déploiement parallèle pour tests. | Dupliquez `nomasx1` vers `nomasx1b`, pointez sur un pool de base fraîche, exécutez les tests de régression sur la copie. |
| Instance par client. | Dupliquez l'application de base par locataire ; chacun obtient son propre pool, sa surcouche dictionnaire et son menu. |
| Version majeure d'une application. | Dupliquez `crm` vers `crm_v2`, faites des refontes destructives sur `crm_v2`, gardez l'ancien en service jusqu'à la bascule. |

### Contraintes

| Contrainte | Pourquoi |
|---|---|
| Le nouveau pool doit déjà exister. | La duplication ne crée pas de bases — câblez d'abord le pool via *Paramètres → Pools*. |
| Le connecteur source ne doit pas comporter de modifications non enregistrées. | La duplication lit depuis le disque ; les modifications locales non enregistrées seraient manquées. Le bouton est désactivé dans l'état modifié, avec une infobulle explicative. |
| Le nouveau nom ne doit pas entrer en collision. | Le framework rejette les clés de connecteurs en doublon ; la fenêtre valide avant soumission. |

---

## Côte à côte

| Vous voulez… | Utilisez |
|---|---|
| Une copie d'une requête (filtre différent, variante SQL). | **Duplication par requête**. |
| Une copie de chaque emplacement CRUD d'une table. | **Dupliquer une table**. |
| Une copie de chaque requête + entrées de dictionnaire + écrans + menu + tableaux de bord + graphiques. | **Dupliquer l'application**. |
| Une nouvelle requête avec le même nom pointant ailleurs. | Ne dupliquez pas — **renommez** l'existante et créez-en une nouvelle. |
| La même requête s'exécutant sur une autre base. | Ne dupliquez pas — changez le **pool** du connecteur dans *Paramètres → Pools*, ou utilisez une **map SQL par dialecte**. |

---

## Et ensuite

- [Liaison de paramètres](./parameter-binding.md) — une fois la copie faite, la requête dupliquée peut nécessiter des valeurs liées différentes de l'originale.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — pour « même requête, SQL différent » sans duplication.
- [Séquences et recherches](./sequences-and-lookups.md) — pour ajouter une séquence ou une recherche à l'application dupliquée.
