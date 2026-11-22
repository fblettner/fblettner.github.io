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

<svg viewBox="0 0 1320 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="clq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="clq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="clq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="clq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="330" rx="14" fill="url(#clq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="248" y="34" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="279.0" y="48.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← retour</text>
  <text x="320" y="49" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <rect x="248" y="64" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="310.5" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="378" y="64" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="408.0" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="443" y="64" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="490.5" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Changer le type</text>
  <rect x="543" y="64" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="573.0" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Déplacer</text>
  <rect x="608" y="64" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="633.0" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="248" y="92" width="65" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="280.5" y="106.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="248" y="128" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="133" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="275" y="143.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="355.88800000000003" y="143.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MONTHLY_REVENUE</text>
  <line x1="449" y1="140" x2="459" y2="140" stroke="#475569" strokeWidth="1" markerEnd="url(#clq-flow)"/>
  <rect x="460" y="128" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="467" y="133" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="487" y="143.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTRUCTION</text>
  <text x="562.064" y="143.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">SELECT</text>
  <line x1="611" y1="140" x2="621" y2="140" stroke="#475569" strokeWidth="1" markerEnd="url(#clq-flow)"/>
  <rect x="622" y="128" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="629" y="133" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="649" y="143.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="718.24" y="143.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">aucun déclaré</text>
  <rect x="248" y="166" width="824" height="44" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="182" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="272" y="182" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS MONTH,</text>
  <text x="262" y="197" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="272" y="197" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">       SUM(total) AS REVENUE FROM invoices GROUP BY 1</text>
  <rect x="450" y="170" width="420" height="150" rx="10" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="466" y="196" fill="#e2e8f0" fontSize="11.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner</text>
  <line x1="450" y1="210" x2="870" y2="210" stroke="#1f2937" strokeWidth="1"/>
  <text x="466" y="234" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Nom de la copie :</text>
  <rect x="466" y="244" width="388" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="260.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">monthly_revenue_copy</text>
  <rect x="720" y="284" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="755.0" y="298.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="798" y="284" width="56" height="22" rx="5" fill="url(#clq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="826.0" y="298.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la requête</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">renommer, déplacer, cloner…</text>
  <line x1="200" y1="57.0" x2="248" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
  <rect x="1120" y="14" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="29" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner</text>
  <text x="1130" y="42" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">même SQL, paramètres, variantes</text>
  <line x1="1120" y1="31.0" x2="633.0" y2="64" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
  <rect x="1120" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau nom</text>
  <text x="1130" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;nom&gt;_copy proposé</text>
  <line x1="1120" y1="257.0" x2="854" y2="257" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
</svg>

---

## Duplication par requête

**Cloner** fait partie des boutons de l'en-tête de l'éditeur de requête (sections Requêtes, Séquences et Lookups), avec Rechercher les usages, Renommer, Changer le type, Déplacer et Supprimer. Le clic :

1. Ouvre la fenêtre *Cloner* — *Nom de la copie :*, `<original>_copy` proposé.
2. Copie en profondeur la requête — seul le nom diffère ; SQL, params, `writable`, `label`, `description`, map SQL par dialecte, chaque champ imbriqué est cloné en JSON et indépendant.
3. Ajoute la copie à la liste des requêtes du connecteur.
4. Sélectionne la copie, prête à être modifiée.

La page porte alors des modifications non enregistrées : **Enregistrer**, dans l'en-tête de la page, les écrit.

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

Dans la section **Tables**, chaque ligne porte une icône *Cloner* (l'icône de copie à droite des badges d'emplacement CRUD) ; une table ouverte a la même icône parmi ses actions. Le clic :

1. Demande le nom de la copie (`<base>_copy` proposé).
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

- Le bouton **Cloner** de l'en-tête du connecteur sélectionné (avec Rechercher les usages, Renommer et Supprimer), ou
- Ce même bouton Dupliquer pour n'importe quel connecteur — la fenêtre permet de choisir lequel dupliquer.

La fenêtre demande trois valeurs :

| Champ | Rôle |
|---|---|
| **Connecteur source** | Le connecteur à copier. Par défaut, celui qui était sélectionné. |
| **Nouveau nom** | La nouvelle clé de connecteur (minuscules, commence par une lettre — mêmes règles d'identifiant qu'ailleurs). |
| **Pool** | Le pool sur lequel le nouveau connecteur doit s'exécuter. Doit déjà exister dans *Liberty Next → Administrer → Pools*. |

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
| Le nouveau pool doit déjà exister. | La duplication ne crée pas de bases — câblez d'abord le pool via *Liberty Next → Administrer → Pools*. |
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
| La même requête s'exécutant sur une autre base. | Ne dupliquez pas — changez le **pool** du connecteur dans *Liberty Next → Administrer → Pools*, ou utilisez une **map SQL par dialecte**. |

---

## Et ensuite

- [Liaison de paramètres](./parameter-binding.md) — une fois la copie faite, la requête dupliquée peut nécessiter des valeurs liées différentes de l'originale.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — pour « même requête, SQL différent » sans duplication.
- [Séquences et lookups](./sequences-and-lookups.md) — pour ajouter une séquence ou un lookup à l'application dupliquée.
