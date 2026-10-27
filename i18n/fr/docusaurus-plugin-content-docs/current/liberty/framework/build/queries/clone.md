---
title: Dupliquer une requête ou un connecteur
description: "Dupliquer une requête au sein d'un connecteur, dupliquer toutes les requêtes CRUD d'une table, ou dupliquer une application entière (connecteur + dictionnaire + écrans + menu + tableaux de bord + graphiques)."
keywords: [Liberty Framework, dupliquer requête, duplication, dupliquer connecteur, dupliquer application, ConnectorsBuilder]
---

# Dupliquer une requête ou un connecteur

La page Connecteurs de Liberty propose **trois** dispositifs de duplication, chacun avec une portée différente. Ils se ressemblent — boutons Cloner juxtaposés — mais touchent des fichiers différents et demandent des saisies différentes. Mieux vaut choisir le bon : chacun écrit plus ou moins de choses.

| Dispositif | Portée | Fichiers touchés |
|---|---|---|
| **Duplication par requête** | Une seule requête. | Le fichier connecteur uniquement. |
| **Dupliquer une table** | Les quatre requêtes CRUD d'une table. | Le fichier connecteur uniquement. |
| **Dupliquer l'application** | Le connecteur entier + tout ce qui en dépend. | Fichier connecteur + dictionnaire + écrans + menu + tableaux de bord + graphiques. |

Chacun est détaillé ci-dessous avec ses cas d'usage.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="clq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="clq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="clq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="clq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="320" rx="14" fill="url(#clq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">monthly_revenue</text>
  <rect x="240" y="56" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="273.0" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour</text>
  <rect x="312" y="56" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="353.5" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="401" y="56" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="473" y="56" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="526.0" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Changer le type</text>
  <rect x="585" y="56" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Déplacer</text>
  <rect x="657" y="56" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="684.5" y="70.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="718" y="56" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="754.0" y="70.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <line x1="240" y1="92" x2="960" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="104" width="720" height="80" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="126" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS MONTH,</text>
  <text x="254" y="146" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">       SUM(total) AS REVENUE FROM invoices GROUP BY 1</text>
  <rect x="380" y="196" width="440" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="396" y="220" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner la requête</text>
  <text x="396" y="242" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Nouveau nom pour la copie de « monthly_revenue » :</text>
  <rect x="396" y="252" width="408" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="406" y="266.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">monthly_revenue_copy</text>
  <rect x="640" y="284" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="678.0" y="298.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="724" y="284" width="80" height="22" rx="5" fill="url(#clq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="764.0" y="298.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la requête</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">renommer, déplacer, cloner…</text>
  <line x1="210" y1="67.0" x2="240" y2="67" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">même SQL, params, variantes</text>
  <line x1="1000" y1="137.0" x2="618" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau nom</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;nom&gt;_copy proposé</text>
  <line x1="1000" y1="247.0" x2="804" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
</svg>

---

## Duplication par requête

Un bouton *Cloner* se trouve en haut à droite de l'éditeur de requête unique (vues Requêtes, Séquences et Lookups). Le clic :

1. Demande un nouveau nom (par défaut `<original>_copy`).
2. Copie en profondeur la requête — seul le nom diffère ; SQL, params, `writable`, `label`, `description`, map SQL par dialecte, chaque champ imbriqué est cloné en JSON et indépendant.
3. Ajoute la copie à la liste des requêtes du connecteur.
4. Sélectionne la copie, prête à être modifiée.

La page est alors modifiée — appuyez sur **Enregistrer** dans la barre d'outils du haut pour persister.

### Quand l'utiliser

| Motif | Pourquoi dupliquer |
|---|---|
| Une variante d'une requête existante — même forme, filtre différent. | La copie conserve les params et les variantes SQL ; seule la clause WHERE reste à modifier. |
| Un `_v2` d'une requête, l'ancienne restant en place. | Permet à un écran de continuer à utiliser l'ancienne requête pendant qu'un nouvel écran câble la nouvelle. |
| Un essai. | La copie se modifie librement, l'original reste intact. |

### Ce qui change — et ce qui ne change pas

| Identique | Modifié |
|---|---|
| SQL, params, writable, label, description, map par dialecte. | Seul le `name`. |
| | Les références multi-fichiers vers l'original — elles continuent de pointer sur l'original. La copie est une toute nouvelle requête que personne ne référence encore. |

Pour **reporter** les références sur la copie, il faut un Renommer, pas une Duplication (et le Renommage est destructif — il supprime l'ancien nom une fois les références reportées).

---

## Dupliquer une table

Quand le volet droit est en mode **Tables**, chaque ligne porte une icône *Cloner* (l'icône de copie à droite des badges d'emplacement CRUD). Le clic :

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

- Le bouton **Cloner** dans l'onglet *Paramètres* du volet droit quand un connecteur de classe Applications est sélectionné, ou
- Ce même bouton Dupliquer pour n'importe quel connecteur — la fenêtre permet de choisir lequel dupliquer.

La fenêtre demande trois valeurs :

| Champ | Rôle |
|---|---|
| **Connecteur source** | Le connecteur à copier. Par défaut, celui qui était sélectionné. |
| **Nouveau nom** | La nouvelle clé de connecteur (minuscules, commence par une lettre — mêmes règles d'identifiant qu'ailleurs). |
| **Pool** | Le pool sur lequel le nouveau connecteur doit s'exécuter. Doit déjà exister dans *Paramètres → Pools*. |

Cliquer sur **Cloner** déclenche une copie multi-fichiers via un endpoint dédié. Liberty :

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
- [Séquences et lookups](./sequences-and-lookups.md) — pour ajouter une séquence ou un lookup à l'application dupliquée.
