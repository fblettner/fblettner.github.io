---
title: Vues de liste
description: "Modifier la spécification de colonnes par vue (libellés, format, alignement, largeur, liste blanche de filtres) pour chaque page de liste NomaUBL — Factures, Erreurs d'intégration, Journal de traitement, E-Reporting — et ajouter de nouvelles colonnes depuis le catalogue de la vue sans écrire de code."
keywords: [NomaUBL, vues de liste, spécification, catalogue de colonnes, DataTableV2, factures, erreurs d'intégration, journal de traitement, e-reporting, listviewspec, filtres avancés]
---

# Vues de liste

L'éditeur **Vues de liste** est la page de configuration des quatre pages de liste pilotées par spécification : [Factures](../application/invoices.md), [Erreurs d'intégration](../application/integration-errors.md), [E-Reporting](../application/ereporting.md) et [Journal de traitement](../management/processing-log.md). Une spec JSON par vue pilote la forme des colonnes sur chaque page — libellés, type, format, alignement, largeur, tri par défaut et la liste blanche des filtres — modifiable ici sans toucher au code.

Un second concept vit à côté de la spec : le **catalogue de colonnes**. Chaque vue livre un catalogue de toutes les colonnes que les tables sous-jacentes peuvent produire — le catalogue est la source de vérité de ce qui est adressable, la spec en sélectionne un sous-ensemble et le présente. Le picker `+ Ajouter une colonne` est juste une vue filtrée du catalogue.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#lv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vues de liste</text>
  <rect x="690" y="30" width="90" height="22" rx="5" fill="url(#lv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enregistrer</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="80" width="120" height="22" rx="11" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="300" y="95" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Factures</text>
  <rect x="368" y="80" width="160" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="448" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <rect x="536" y="80" width="120" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">E-Reporting</text>
  <rect x="664" y="80" width="116" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="722" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal</text>

  <rect x="240" y="116" width="540" height="48" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="252" y="134" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">view.invoices</text>
  <rect x="360" y="124" width="80" height="14" rx="3" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="400" y="134" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">override</text>
  <text x="252" y="153" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Source : propriété db-nomaubl · retour au défaut embarqué sinon</text>

  <rect x="240" y="174" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="189" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">⠿ · NOM · LIBELLÉ EN · LIBELLÉ FR · TYPE · FORMAT · LARGEUR · VISIBLE · FILTRE · ⌫</text>

  <rect x="240" y="200" width="540" height="28" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="218" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="218" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">statusCode</text>
  <rect x="356" y="206" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="218" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="480" y="206" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="218" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="592" y="218" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">string</text>
  <text x="630" y="218" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">badge</text>
  <text x="668" y="218" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">90</text>
  <rect x="696" y="206" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="703" y="217" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <rect x="720" y="206" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727" y="217" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="754" y="218" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="232" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="250" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="250" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customerName</text>
  <rect x="356" y="238" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="250" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <rect x="480" y="238" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="250" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <text x="592" y="250" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">string</text>
  <text x="630" y="250" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">—</text>
  <text x="668" y="250" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">180</text>
  <rect x="696" y="238" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="703" y="249" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <rect x="720" y="238" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727" y="249" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="754" y="250" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="264" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="282" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="282" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">grossAmount</text>
  <rect x="356" y="270" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Total TTC</text>
  <rect x="480" y="270" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="592" y="282" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">number</text>
  <text x="630" y="282" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">amount</text>
  <text x="668" y="282" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">120</text>
  <rect x="696" y="270" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="703" y="281" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <rect x="720" y="270" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="754" y="282" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="296" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="314" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="314" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">logPaUuid</text>
  <rect x="356" y="302" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="314" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">PA UUID</text>
  <rect x="480" y="302" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="314" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">UUID PA</text>
  <text x="592" y="314" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">string</text>
  <text x="630" y="314" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">—</text>
  <text x="668" y="314" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">200</text>
  <rect x="696" y="302" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="720" y="302" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727" y="313" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="754" y="314" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="340" width="180" height="26" rx="13" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="330" y="357" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter une colonne</text>

  <rect x="240" y="378" width="540" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="396" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix depuis le catalogue de colonnes</text>
  <text x="252" y="412" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">logSourceFile · logActivityCode · logBusinessUnit · logDueDate · logUser · logJobn …</text>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par vue</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pliable, sélectionnable</text>
  <line x1="220" y1="96" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>

  <rect x="820" y="116" width="160" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">override / default</text>
  <text x="830" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">badge selon l'état de</text>
  <text x="830" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stockage de la spec</text>
  <line x1="820" y1="140" x2="780" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>

  <rect x="20" y="200" width="200" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Poignée ⠿</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réordonne les colonnes</text>
  <text x="30" y="240" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans la grille</text>
  <line x1="220" y1="224" x2="240" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>

  <rect x="20" y="340" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ Ajouter une colonne</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picker catalogue filtré</text>
  <line x1="220" y1="356" x2="240" y2="353" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>
</svg>

---

## Sélecteur de vue

Une barre de pastilles en haut de page bascule entre les quatre vues actuellement pilotées par une spec :

| Vue | Page pilotée |
|---|---|
| **Factures** | [Factures](../application/invoices.md) — `view.invoices`. |
| **Erreurs d'intégration** | [Erreurs d'intégration](../application/integration-errors.md) — `view.integration-errors`. |
| **E-Reporting** | [E-Reporting](../application/ereporting.md) — `view.ereporting`. |
| **Journal de traitement** | [Journal de traitement](../management/processing-log.md) — `view.processing-log`. |

Une seule vue à la fois est chargée dans l'éditeur. Le changement de vue ne perd pas les modifications non enregistrées sur la vue précédente tant que la page reste ouverte ; **Enregistrer** écrit uniquement la carte active.

Un petit badge à côté du nom de vue indique si la spec active vient du défaut embarqué dans le JAR (`default`) ou d'une entrée stockée sur `db-nomaubl` (`override`) :

- **default** — aucune propriété `view.<nom>` n'existe sur `db-nomaubl`. C'est le JSON embarqué dans `config/list-views/view.<nom>.json` qui pilote l'affichage. Enregistrer depuis l'éditeur écrit une propriété et fait basculer le badge en `override`.
- **override** — une propriété a été stockée. L'éditeur lit la valeur stockée, la page lit la valeur stockée, le défaut embarqué est ignoré.

---

## Lignes de colonne

Chaque carte porte une table des colonnes actuellement dans la spec. Une ligne par colonne.

| Colonne | Description |
|---|---|
| **⠿ (poignée)** | Glisser-déposer pour réordonner. L'ordre dans l'éditeur est l'ordre dans la grille. |
| **Nom** | Le nom de colonne de la spec — doit correspondre à une colonne du catalogue de la vue. Lecture seule sur les lignes existantes (le nom est la clé de jointure avec le catalogue) ; modifiable uniquement à l'ajout via le picker. |
| **Libellé EN / Libellé FR** | Les libellés affichés dans l'en-tête de la grille. `Libellé FR` est utilisé quand la locale active commence par `fr`, sinon `Libellé EN`. Les deux champs sont libres. |
| **Type** | `string` / `number` / `date` / `datetime`. Pilote le tri et l'alignement par défaut des cellules. |
| **Format** | Renderer optionnel : `date` / `datetime` / `amount` / `percent` / `badge`. Appliqué par-dessus le type. |
| **Largeur** | Largeur en pixels passée au `<colgroup>` de la table. Les colonnes sans largeur se partagent l'espace horizontal restant. |
| **Visible** | Bascule maître. Désactivé = la colonne est dans la spec mais cachée dans la grille (toujours interrogeable). |
| **Filtre** | Liste blanche pour le panneau [Filtres avancés](#panneau-filtres-avances). Désactivé = aucune pastille de filtre n'est proposée pour cette colonne. |
| **⌫ (retirer)** | Retire la colonne de la spec. L'entrée du catalogue est intacte — la rajouter plus tard reproduit la même forme. |

Le tri par défaut vit sur la spec mais se définit ailleurs (aujourd'hui en modifiant le JSON embarqué ou la propriété stockée directement ; un toggle UI est prévu pour une version future). Chaque vue livre un défaut adapté.

---

## + Ajouter une colonne

Le bouton sous la liste des lignes ouvre le **picker du catalogue** — une liste recherchable de toutes les entrées de catalogue absentes de la spec courante. Chaque entrée affiche :

| Champ | Contenu |
|---|---|
| **Nom** | Le nom de colonne dans le catalogue — c'est la valeur que la spec stocke. |
| **Libellé** | Le libellé anglais par défaut proposé par le catalogue. Le libellé français dérive du `labelFr` du catalogue s'il existe ; les deux libellés sont modifiables une fois la colonne dans la spec. |
| **Type** | `STRING` / `NUMBER` / `DATE` / `JDE_DATE` / `JDE_DATETIME`. Pilote le `type` par défaut de la ligne de spec. Les dates JDE intègrent un décodeur (julien ou composite UPMJ+UPMT). |

Choisir une entrée insère une nouvelle ligne en bas de la table, amorcée avec les défauts du catalogue. **Enregistrer** valide ; la colonne apparaît dans la page au prochain rendu.

Le catalogue lui-même est côté serveur et n'est pas modifiable depuis l'IHM. Ajouter une colonne réellement nouvelle (que le back-end ne sait pas projeter) demande une modification de code dans le handler Java.

---

## Ligne Défauts \{#ligne-defauts\}

Au-dessus des lignes de colonne, chaque carte de vue a une ligne *Défauts* avec les réglages par vue qui s'appliquent en dehors de la forme des colonnes.

| Champ | Description |
|---|---|
| **Page size** | Taille de page initiale du paginateur TanStack en grille. Persiste sous `spec.defaultPageSize`. Défaut : `50`. |
| **Max rows** *(2026.05.12)* | Cap dur sur la tranche chargée par un seul *Exécuter*. Les quatre vues pilotées par spec fonctionnent maintenant en **mode hybride client-side** : chaque *Exécuter* charge une tranche capée depuis le serveur et TanStack pagine / trie / filtre dans cette tranche — pas d'aller-retour quand on tape dans la ligne de filtre par colonne. Persiste sous `spec.maxRows`. Défaut : `5000`. |

Quand le cap de la tranche est atteint pendant un *Exécuter*, la barre d'outils de la page affiche un message traduit `X / Y lignes` à côté du bouton *Exécuter* — indication que l'opérateur devrait affiner la plage de dates ou les *Filtres avancés* pour obtenir la tranche la plus pertinente. Le message est informatif ; la page continue de fonctionner.

---

## Panneau Filtres avancés \{#panneau-filtres-avances\}

La liste blanche `filter: true` de la spec alimente une seconde IHM sur la page destination : le panneau **Filtres avancés** — pliable, indexé par nom de colonne de spec, avec un sélecteur d'opérateur par colonne (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). Le panneau émet un état brouillon ; un bouton **Exécuter** explicite le valide en `appliedFilters` — taper ne sature pas le back-end.

La liste d'opérateurs proposée par colonne dépend du comportement de filtre de l'entrée du catalogue :

| `filterKind` du catalogue | Opérateurs proposés |
|---|---|
| `exact` | `equals`, `≠`, `empty`, `not empty`. |
| `LIKE` | `contains`, `equals`, `≠`, `empty`, `not empty`. |
| `inList` | `equals` (multi-choix — le catalogue éclate les buckets séparés par virgule en clause `IN (?,?,?,?,?)`). |
| `between` | `<`, `≤`, `>`, `≥`, `between`. S'applique aux colonnes numériques et de date. |

Marquer une colonne **Filtre** = désactivé dans la spec la laisse visible dans la grille mais retire sa pastille du panneau — utile pour les champs en lecture seule que l'opérateur n'a pas besoin d'interroger.

### Colonnes refList — picker multi-sélection *(2026.05.13)*

Quand le catalogue déclare une colonne comme liste de référence (`refList: …`) — le picker *statuses* sur Factures, *eReporting statuses* sur E-Reporting, les listes personnalisées — le panneau Filtres avancés et la ligne de filtre par colonne rendent tous les deux un **picker multi-sélection** au lieu d'un dropdown simple. Chaque ligne du picker est une bascule (`code — libellé`), le déclencheur affiche `N sélectionné(s)` au-delà du plafond inline, et un bouton `✕` à droite réinitialise la sélection en un clic sans ouvrir le popover.

La sélection multi-sélection est encodée en chaîne jointe par virgule dans `OpFilter.a` (par ex. `200,210,9907`) ; côté serveur, le flag `filterInList` du catalogue la décompose en clause `IN (?,?,?,?,?)` — choisir trois statuts renvoie bien l'union, pas un `LIKE` sur la chaîne jointe.

L'opérateur `between` sur une colonne date / nombre / texte élargit la colonne pour accueillir les deux champs opérandes (`BETWEEN_COL_WIDTH = 340px`) afin que les deux inputs s'affichent côte à côte sans être tronqués. Revenir à un opérateur à opérande unique remet la colonne à sa largeur de spec au rendu suivant.

---

## Référence du schéma

Le fichier de spec ressemble à ceci (extrait) :

```json
{
  "name": "view.invoices",
  "defaultSort": [{"column": "creationDate", "direction": "desc"}],
  "columns": [
    {
      "name": "statusCode",
      "label": "Status",
      "labelFr": "Statut",
      "type": "string",
      "format": "badge",
      "align": "left",
      "width": 90,
      "visible": true,
      "filter": true
    },
    {
      "name": "customerName",
      "label": "Customer",
      "labelFr": "Client",
      "type": "string",
      "width": 180,
      "visible": true,
      "filter": true
    }
  ]
}
```

Le `name` se joint à l'entrée de catalogue qui a la clé correspondante ; tout le reste de la ligne est de la présentation. Enregistrer depuis l'éditeur écrit la même forme sous `db-nomaubl.view.<nom>`. Réinitialiser la propriété — plus simple via `Configuration → Système → Global` quand il porte les propriétés JSON — fait basculer la page vers le défaut embarqué et le badge passe à `default`.

---

## Conseils & bonnes pratiques

- **Partir du défaut embarqué.** Chaque vue livre un défaut soigné ; ne modifier que quand un besoin spécifique apparaît. Le badge `override` signale à l'opérateur que la spec s'écarte de la configuration livrée.
- **Utiliser le catalogue avant de demander une modification de code.** Quand la colonne souhaitée est déjà dans le catalogue (par ex. `logBusinessUnit`, `logDueDate`), `+ Ajouter une colonne` règle le sujet en quelques clics. Une modification de code n'est nécessaire que quand la colonne est absente du catalogue.
- **Garder la liste blanche de filtres courte.** Marquer toutes les colonnes `filter: true` encombre le panneau Filtres avancés — limiter la liste aux colonnes que les opérateurs interrogent réellement.
- **Définir une largeur pour les colonnes qui en ont besoin.** Les badges de statut, les dates, les codes ont des largeurs naturelles ; les longues chaînes restent sans largeur pour prendre l'espace restant. `width` est aussi le `min-width` CSS de la colonne — une valeur trop grande écrase le reste de la grille.
- **Caché ≠ retiré.** Mettre `Visible = désactivé` garde la colonne interrogeable par le panneau Filtres avancés. À utiliser pour les champs techniques que l'opérateur filtre sans avoir besoin de les lire.
