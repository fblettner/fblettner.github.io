---
title: Listes personnalisées
description: "Créer des listes de référence définies par l'opérateur (code / libellés FR / EN) et les rattacher aux colonnes d'une grille — dropdowns et filtres s'activent automatiquement. Chaque liste se saisit ligne par ligne ou se synchronise depuis un connecteur API / SQL."
keywords: [NomaUBL, listes personnalisées, liste de référence, dropdown, picker, filtre, grille, vues de liste, refList, sync, connecteur api, connecteur sql]
---

# Listes personnalisées

Une **liste personnalisée** est une liste de référence définie par l'opérateur — une table `code → libelléFr / libelléEn` gérée à côté des catalogues réglementaires de [Listes de référence](./reference-lists.md). Son rôle : alimenter une grille. Rattacher une liste personnalisée à une colonne dans l'éditeur [Vues de liste](./list-views.md) et la colonne reçoit automatiquement un dropdown de filtre, un picker multi-sélection dans *Filtres avancés* et un renderer de cellule `code — libellé` — sans aucune modification de code.

Chaque liste se saisit ligne par ligne, ou se **synchronise depuis un connecteur** ([API](./api-connectors.md) ou [SQL](./sql-connectors.md)) quand la source de vérité vit dans un système externe. La même requête / le même endpoint peut alimenter plusieurs listes en passant des paramètres différents par liste.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#cl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Listes personnalisées</text>
  <rect x="588" y="30" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ Nouvelle liste</text>
  <rect x="694" y="30" width="86" height="22" rx="5" fill="url(#cl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="737" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enregistrer</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LISTE</text>
  <rect x="290" y="82" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">business-units ▾</text>
  <text x="524" y="98" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">id référencé par les Vues de liste</text>

  <text x="240" y="128" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes</text>

  <rect x="240" y="142" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="157" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE · LIBELLÉ FR · LIBELLÉ EN · ⌫</text>

  <rect x="240" y="168" width="540" height="24" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="184" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">PAR</text>
  <rect x="320" y="172" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="184" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Paris</text>
  <rect x="528" y="172" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="184" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Paris</text>
  <text x="752" y="184" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="194" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="210" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">LYO</text>
  <rect x="320" y="198" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Lyon</text>
  <rect x="528" y="198" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Lyon</text>
  <text x="752" y="210" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="220" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">MRS</text>
  <rect x="320" y="224" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="236" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Marseille</text>
  <rect x="528" y="224" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="236" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Marseille</text>
  <text x="752" y="236" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="252" width="140" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="310" y="268" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter une ligne</text>

  <line x1="240" y1="288" x2="780" y2="288" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="310" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source de sync <text fill="#64748b" fontSize="9" fontStyle="italic">(optionnelle)</text></text>

  <text x="240" y="336" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="330" y="326" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="340" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">erp-master · SQL ▾</text>
  <text x="548" y="341" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="600" y="326" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">listBusinessUnits ▾</text>

  <text x="240" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE</text>
  <rect x="290" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">MCU</text>
  <text x="420" y="373" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ FR</text>
  <rect x="490" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">DESCRIPTION_FR</text>
  <text x="620" y="373" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ EN</text>
  <rect x="685" y="358" width="95" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="695" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">DESCRIPTION_EN</text>

  <text x="240" y="400" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMS</text>
  <rect x="296" y="390" width="320" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="306" y="405" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">company=00070; activeOnly=Y</text>
  <rect x="626" y="390" width="150" height="22" rx="5" fill="url(#cl-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="701" y="405" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">↻ Synchroniser</text>

  <rect x="240" y="420" width="540" height="14" rx="3" fill="rgba(74,222,128,0.10)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="248" y="431" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ 47 ligne(s) synchronisée(s) depuis erp-master · listBusinessUnits</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Id de liste</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">référencé par les Vues de liste</text>
  <line x1="220" y1="98" x2="290" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="20" y="168" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">code → FR / EN</text>
  <text x="30" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes du picker + libellés</text>
  <line x1="220" y1="184" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="820" y="252" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="267" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes manuelles</text>
  <text x="830" y="280" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">saisie ligne par ligne</text>
  <line x1="820" y1="268" x2="780" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="20" y="326" width="200" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sync depuis connecteur</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">API ou SQL</text>
  <text x="30" y="366" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplace les lignes en place</text>
  <line x1="220" y1="342" x2="330" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="820" y="390" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une requête, plusieurs listes</text>
  <text x="830" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">params par liste</text>
  <line x1="820" y1="406" x2="780" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>
</svg>

---

## Sélecteur de liste

La page liste toutes les listes personnalisées définies. Choisir une liste pour l'éditer ; **+ Nouvelle liste** au-dessus du tableau crée une entrée amorcée avec une ligne vide.

| Champ | Description |
|---|---|
| **Liste** | Liste déroulante de toutes les listes personnalisées (`name`). Le nom est l'identifiant référencé par l'éditeur [Vues de liste](./list-views.md) — choisir une liste ici revient à l'éditer, indiquer le même nom dans une spec de colonne sous *Vues de liste* relie la colonne à cette liste. |
| **+ Nouvelle liste** | Crée une nouvelle liste. Une boîte *Nom* demande l'identifiant ; ce nom est la valeur que les specs de colonne référenceront. |
| **Enregistrer** | Écrit la liste active. Basculer sur une autre liste avant l'enregistrement perd les modifications non enregistrées. |

---

## Lignes

Le tableau de lignes est le contenu canonique de la liste. Une ligne par entrée, trois colonnes.

| Colonne | Description |
|---|---|
| **Code** | La valeur stockée — ce que la cellule de la colonne porte dans la grille (par ex. `PAR`, `MCU0070`, `01`). |
| **Libellé FR** | Libellé français rendu à côté du code dans le picker et dans la cellule (`code — libellé`). Obligatoire. |
| **Libellé EN** | Libellé anglais rendu quand la locale active commence par l'anglais. Optionnel — quand vide, le libellé FR est réutilisé. |
| **⌫** | Retire la ligne. |

**+ Ajouter une ligne** en bas ajoute une ligne vide. Les lignes sont triées alphabétiquement par code dans les dropdowns et les pickers ; l'éditeur préserve l'ordre d'ajout pour permettre un réordonnancement manuel.

---

## Source de synchronisation

Une liste personnalisée peut s'appuyer sur un système externe au lieu d'être saisie à la main. Le groupe *Source de sync (optionnelle)* se trouve sous le tableau des lignes. Choisir un [connecteur API](./api-connectors.md) ou un [connecteur SQL](./sql-connectors.md), puis un endpoint / une requête, puis mapper les champs de la réponse vers les trois colonnes de la liste.

| Champ | Description |
|---|---|
| **Connecteur** | Liste déroulante de tous les modèles `api-connector` et `sql-connector` définis. Le choix restreint le champ suivant aux cibles de ce connecteur. |
| **Endpoint / Requête** | Liste déroulante des endpoints (API) ou des requêtes (SQL) du connecteur. Désactivée tant qu'aucun connecteur n'est choisi. |
| **Code field** | Nom de colonne (SQL) ou clé JSON (API) que la sync lit comme `code` de chaque ligne. Obligatoire. |
| **Label FR field** | Colonne / clé du libellé français. Obligatoire. |
| **Label EN field** | Colonne / clé du libellé anglais. Optionnel. |
| **List path** *(API seulement)* | Chemin pointé vers le tableau dans le corps JSON. Supporte `data.items` et `items[0]`. Vide quand le corps est déjà un tableau JSON. |
| **Paramètres** | Couples clé / valeur par liste envoyés au connecteur comme valeurs fixes (pas de substitution de variables). La même requête peut alimenter plusieurs listes en enregistrant des valeurs différentes par liste ; les valeurs par défaut de la définition d'endpoint s'appliquent quand un champ est laissé vide. |
| **Synchroniser** | Appelle le connecteur, parcourt la réponse, construit l'ensemble de lignes et remplace les lignes en place. Un bandeau traduit indique `N ligne(s) synchronisée(s) depuis connecteur · endpoint` en cas de succès ou l'erreur sous-jacente en cas d'échec. |

La configuration sync vit sur le même modèle de liste sous `sync.connector`, `sync.endpoint`, `sync.codeField`, `sync.labelFrField`, `sync.labelEnField`, `sync.listPath` et `sync.params`. Les consommateurs de liste (renderer de cellule, dropdown *Filtres avancés*, ligne de filtre par colonne) ne voient jamais ces clés comme des entrées — elles sont filtrées par `parseRefOptions`.

Une synchronisation n'enregistre pas la liste automatiquement ; elle ne fait que reconstruire le tableau des lignes. Cliquer sur **Enregistrer** pour valider les lignes synchronisées.

---

## Utiliser une liste personnalisée dans une grille

Une liste personnalisée se rattache à une grille via l'éditeur [Vues de liste](./list-views.md). Sur la ligne de colonne, renseigner le champ `refList` avec le `name` de la liste :

```json
{
  "name": "logBusinessUnit",
  "label": "Business unit",
  "labelFr": "Unité d'activité",
  "type": "string",
  "refList": "business-units",
  "width": 150,
  "visible": true,
  "filter": true
}
```

Effets sur la grille :

- **Renderer de cellule** — chaque cellule affiche `code — libellé` (FR ou EN selon la locale) au lieu du code brut. Les valeurs vides restent vides.
- **Ligne de filtre par colonne** — le champ texte est remplacé par un dropdown recherchable alimenté par les lignes de la liste. Chaque entrée est `code — libellé`.
- **Picker multi-sélection des Filtres avancés** — la liste alimente le picker multi-sélection. Choisir plusieurs entrées émet une clause `IN (?,?,?)` côté serveur.

Aucune modification de code n'est nécessaire — ajouter une ligne à la liste, la synchroniser depuis un connecteur ou renommer un libellé met à jour la grille au rendu suivant.

---

## Endpoints REST

L'éditeur de liste et les consommateurs de la grille partagent le même back-end :

| Méthode | Chemin | Rôle |
|---|---|---|
| `GET` | `/api/ref-lists` | Renvoie toutes les listes définies avec leurs lignes. La grille charge une fois par session et met en cache ; l'éditeur invalide le cache à l'enregistrement. |
| `GET` | `/api/ref-lists/{name}` | Renvoie une liste avec ses lignes + la config sync quand elle existe. |
| `PUT` | `/api/ref-lists/{name}` | Écrit la liste. Corps : `{ name, rows: [...], sync: {...} ou null }`. |
| `POST` | `/api/ref-lists/{name}/sync` | Déclenche la synchronisation. Renvoie l'ensemble de lignes reconstruit en cas de succès, l'erreur du connecteur sous-jacent en cas d'échec. |

---

## Conseils & bonnes pratiques

- **Choisir un nom stable.** Le nom de la liste est ce que les specs de colonne référencent sous `refList`. Renommer une liste plus tard casse toutes les specs qui pointent dessus — mieux vaut supprimer puis recréer sous le nouveau nom une fois les specs de colonne mises à jour.
- **Garder le libellé FR rempli.** Le renderer de cellule retombe sur le libellé FR quand la locale active est FR ; un libellé FR vide fait apparaître le code brut dans la grille, ce qui n'est rarement ce qu'un opérateur attend.
- **Une requête connecteur, plusieurs listes.** Quand plusieurs listes partagent la même requête back-end (par ex. *unités actives pour la société 00070* vs. *unités actives pour la société 00080*), enregistrer la requête une fois sur un connecteur SQL ou API et alimenter des *Paramètres* différents par liste. Les valeurs par défaut de l'endpoint complètent le reste.
- **La sync remplace, elle ne fusionne pas.** Une synchronisation retire toutes les lignes existantes avant d'insérer les nouvelles. Les modifications manuelles faites entre deux syncs sont perdues — quand des overrides manuels comptent, garder la liste soit manuelle, soit entièrement synchronisée, pas les deux.
- **Une colonne cachée reste filtrable.** Une colonne rattachée à une liste personnalisée peut être marquée `visible: false` dans la spec et continuer à apparaître dans *Filtres avancés* — utile pour les champs techniques comme `logBusinessUnit` qu'un opérateur veut filtrer sans les afficher.
