---
title: Paquets de modifications
description: "Capturez chaque écriture de donnée suivie dans un paquet revu et promouvable — diffs ancien → nouveau groupés par entité, exclusion d'entrées à la carte, soumission / approbation / rejet du paquet, export d'un paquet JSON et application sur un autre environnement avec détection complète de dérive sur l'image avant. Le cas d'usage canonique est la promotion de la sécurité JD Edwards du développement vers la production."
keywords: [Liberty Framework, paquets de modifications, change packages, changesets, promotion sécurité JDE, brouillon / soumis / approuvé / exporté / promu / rejeté, détection de dérive, rejeu, CALL_API, CALL_PLUGIN, change_replay, change_tracked, change_entity, post-apply, AppliedBundle, ly_change_packages, ly_change_entries, Nomaflow]
---

# Paquets de modifications

La page **Paquets de modifications** capture chaque écriture de donnée suivie dans un ensemble groupé, revu et promouvable. Le cas d'usage qui a motivé la fonctionnalité est la **promotion de la sécurité JD Edwards d'un environnement de développement vers la production** — copier un rôle, attacher quelques menus, enregistrer → les écritures arrivent dans les tables de développement, ET dans un *paquet de modifications* que l'opérateur peut revoir, approuver et expédier vers la production sous forme de paquet JSON.

Le même schéma convient à tout autre flux « faire les modifications ici, les rejouer là-bas » : un rafraîchissement de catalogue UDC curé, un lot de nouvelles permissions sur un écran spécifique, une mise à jour de règle de routage sur une table de configuration. Quand un écran est **`change_tracked`**, ses insertions / mises à jour / suppressions rejoignent le paquet brouillon actif en parallèle de l'écriture de production.

C'est le pendant côté opérateur d'un moteur plus profond : le framework enregistre chaque écriture suivie dans les tables **`ly_change_packages`** + **`ly_change_entries`** (la **base change-set** — même pool que le framework, distincte du miroir d'audit), et le chemin d'application les rejoue sur la cible avec détection de dérive sur l'image avant.

:::info[Nouveauté du framework 2026.06]
La page se trouve sous Nomaflow parce que le flux — *capture → revue → soumission → approbation → export → application* — est un flux, pas un réglage. L'écran Paramètres → Package existe toujours pour les tranches de configuration (écrans / éléments de menu / tableaux de bord) ; les Paquets de modifications sont l'équivalent **données**. Les deux coexistent.
:::

---

## Ouvrir la page

- Barre latérale → **Nomaflow → Modifications**.
- Depuis la page Paramètres → Connecteurs, *Suivre les modifications* dans la carte de l'écran ouvre la page filtrée sur l'application correspondante.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cp-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="20" y="20" width="960" height="540" rx="14" fill="url(#cp-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Modifications</text>
  <line x1="20" y1="68" x2="980" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="240" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <rect x="40" y="84" width="100" height="28" rx="6" fill="url(#cp-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="90" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Modifications</text>
  <text x="190" y="102" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Appliquer</text>

  <rect x="40" y="128" width="280" height="412" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>

  <rect x="56" y="142" width="248" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="68" y="160" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">🔍 Filtrer les paquets…</text>

  <rect x="56" y="178" width="248" height="62" rx="8" fill="var(--hover-subtle)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="64" y="196" fill="#e2e8f0" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">JDE-PROD · Sécurité 2026-06-09</text>
  <text x="64" y="212" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">soumis · franck · 09/06 09:42 · 12 entrées</text>
  <rect x="64" y="222" width="76" height="16" rx="8" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="102" y="234" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">EN ATTENTE</text>

  <rect x="56" y="248" width="248" height="60" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="64" y="266" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">JDE-PROD · Rafraîchissement UDC</text>
  <text x="64" y="282" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">brouillon · franck · 09/06 08:15 · 4 entrées</text>
  <rect x="64" y="292" width="72" height="16" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="100" y="304" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">BROUILLON</text>

  <rect x="56" y="316" width="248" height="60" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="64" y="334" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">JDE-PROD · Permissions T2</text>
  <text x="64" y="350" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">approuvé · valeria · 06/06 17:10 · 47 entrées</text>
  <rect x="64" y="360" width="72" height="16" rx="8" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="100" y="372" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">APPROUVÉ</text>

  <rect x="56" y="384" width="248" height="60" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="64" y="402" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">JDE-PROD · Permissions T1</text>
  <text x="64" y="418" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">exporté · valeria · 04/06 12:01 · 23 entrées</text>
  <rect x="64" y="428" width="64" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="#475569"/>
  <text x="96" y="440" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">EXPORTÉ</text>

  <rect x="336" y="128" width="624" height="412" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>

  <text x="352" y="150" fill="#e2e8f0" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">Sécurité 2026-06-09</text>
  <text x="540" y="150" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">application = JDE-PROD · 12 entrées</text>
  <rect x="744" y="136" width="64" height="24" rx="6" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="776" y="151" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Approuver</text>
  <rect x="816" y="136" width="56" height="24" rx="6" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="844" y="151" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Rejeter</text>
  <rect x="880" y="136" width="64" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="912" y="151" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Exporter</text>

  <text x="352" y="186" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ RÔLES (3)</text>
  <text x="450" y="186" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">PRJM_NEW · UDC_ADM · BUYER_R2</text>
  <rect x="352" y="194" width="592" height="64" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="212" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">PRJM_NEW · INSERT · src : import sécurité</text>
  <rect x="364" y="220" width="44" height="14" rx="7" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="386" y="231" fill="#22c55e" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">INSERT</text>
  <text x="364" y="248" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">RLDF · ∅ → PRJM_NEW   |   RLDC · ∅ → 1   |   +6 autres</text>

  <text x="352" y="278" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ RELATIONS (5)</text>
  <text x="464" y="278" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">F95921 · F00926</text>
  <rect x="352" y="286" width="592" height="48" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="304" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">RLDF=PRJM_NEW · YRLE=A03 · INSERT</text>
  <rect x="364" y="312" width="44" height="14" rx="7" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="386" y="323" fill="#22c55e" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">INSERT</text>

  <text x="352" y="354" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ SÉCURITÉ (4)</text>
  <text x="448" y="354" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">F00950</text>
  <rect x="352" y="362" width="592" height="48" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="380" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">RLUSER=PRJM_NEW · RLAT1=8 · UPDATE</text>
  <rect x="364" y="388" width="48" height="14" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="388" y="399" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">UPDATE</text>

  <text x="352" y="430" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ REJEUX D'ACTION (1)</text>
  <text x="488" y="430" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">call_plugin · nomajde.security:j_remerge_security</text>
  <rect x="352" y="438" width="592" height="46" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="456" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CALL_PLUGIN · child_role=PRJM_NEW · rejeu = true</text>
  <rect x="364" y="464" width="68" height="14" rx="7" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="398" y="475" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">CALL_PLUGIN</text>

  <rect x="352" y="500" width="592" height="28" rx="6" fill="rgba(0,0,0,0.20)" stroke="#1f2937"/>
  <text x="364" y="518" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Post-application : 1 étape · nomajde-remerge-security  (s'exécute une fois sur la cible après l'écriture de chaque ligne capturée)</text>
</svg>

---

## Comment un paquet se remplit

Trois éléments doivent être en place pour qu'une écriture rejoigne un paquet.

| Requis | Description |
|---|---|
| **L'écran est `change_tracked = true`** | Un drapeau dans l'onglet *Général* de l'écran (ou son TOML). Sans lui, les écritures vont uniquement dans la table sous-jacente — pas de capture. |
| **Un brouillon actif existe pour l'application** | Le connecteur de l'écran → son `application`. Le framework garde **au plus un BROUILLON par application** (garanti par un index unique partiel). La première écriture suivie sur cette application en crée un s'il n'en existe pas. |
| **L'utilisateur est connecté** | Le paquet enregistre `captured_by` depuis la session. Les écritures anonymes ne sont pas suivies. |

Quand ces conditions sont réunies, chaque écriture suivie produit une **entrée de modification** :

| Opération | Ce qui est capturé |
|---|---|
| `INSERT` | `new_values` — les colonnes d'écriture liées. |
| `UPDATE` | `old_values` (l'image avant récupérée via le `read_query` de l'écran avant l'écriture) + `new_values`. L'image avant est ce qui pilote la détection de dérive à l'application. |
| `DELETE` | `old_values` uniquement. |
| `CALL_API` | Les paramètres d'appel résolus + le drapeau `change_replay` configuré — réémis tels quels à l'application quand `replay = true`. |
| `CALL_PLUGIN` | Pareil — l'id du plugin + les kwargs résolus, conditionnés par `change_replay`. |

Chaque entrée enregistre aussi :

- `connector` + `query` — le framework peut router le rejeu vers le connecteur correspondant sur la cible.
- `entity` — le `change_entity` optionnel de l'écran (`role`, `user`, `relationship`, `security`, …). L'interface groupe les entrées par cette étiquette sur la page de détail ; un écran sans `change_entity` capture quand même, simplement groupé par `query`.
- `entity_key` — la clé naturelle de la ligne (résolue depuis les `key_columns` de l'écran). Pilote la **compaction** à l'export — `INSERT puis UPDATE puis UPDATE` sur la même clé se réduit à une seule entrée nette ; `INSERT puis DELETE` s'annule entièrement.
- `source_action` — l'étiquette de l'action qui a déclenché l'écriture, transmise depuis le contexte d'origine. Permet à la vue de détail de grouper un lot comme « importé par *import sécurité* » au lieu d'un mur d'insertions sans attribution.
- `read_query` — la requête de lecture de l'écran, utilisée par le chemin d'application pour récupérer la ligne cible actuelle et la comparer à `old_values` pour la détection de dérive.
- `seq` — monotone par paquet, pour que le rejeu préserve l'ordre de capture. Un rôle doit exister avant d'être référencé ; le seq le garantit.

### Ce que `change_tracked` ne suit PAS

| Non suivi | Pourquoi |
|---|---|
| Les écritures d'un écran avec `change_tracked = false`. | Comportement par défaut. Les tables d'audit (journal de notifications, statistiques de relance) ne doivent pas polluer les paquets de promotion. |
| Les écritures d'un job Nomaflow, d'un import en masse, du CLI. | Le suivi est par écran et passe par le chemin d'écriture de l'écran. Les jobs utilisent les appelables `j_*` directement sur le connecteur. |
| Les lectures — aucun SELECT n'est jamais capturé. | Le paquet est un journal de *modifications*. |
| Les écritures de métadonnées propres au framework (`ly_jobs`, `ly_users`, les tables change-set elles-mêmes). | La boucle de capture vérifie `change_tracked` sur l'écran du connecteur, pas sur la table. |

---

## Le cycle de vie

Un paquet passe par ces états :

```text
    DRAFT ─── submit ───▶ PENDING ─── approve ──▶ APPROVED ─── export ──▶ EXPORTED
                              │
                              └── reject ──▶ REJECTED
```

| État | Signification |
|---|---|
| **`DRAFT`** | Le paquet actif de son application. Les nouvelles écritures suivies s'y rattachent. Les entrées peuvent être exclues / réincluses. |
| **`PENDING`** | Soumis à approbation. Aucune nouvelle écriture ne s'y rattache (un nouveau brouillon s'ouvre pour l'application à la capture suivante). Le relecteur peut approuver ou rejeter. |
| **`APPROVED`** | Figé, prêt à l'export. Les entrées ne peuvent plus être exclues. |
| **`EXPORTED`** | Un paquet JSON a été téléchargé. Le paquet reste côté source la trace de ce qui a été livré ; le fichier JSON est ce qui part vers la cible. |
| **`REJECTED`** | Le relecteur l'a refusé. Il reste rejeté ; la prochaine écriture suivie sur l'application ouvre un nouveau brouillon. |

Les quatre boutons de cycle de vie en en-tête du détail — *Soumettre*, *Approuver*, *Rejeter*, *Exporter* — appellent `POST /admin/changesets/<id>/submit` (ou `…/approve`, `…/reject`, `…/export`). Les paquets de modifications sont réservés aux superutilisateurs.

### Par entrée : exclure / réinclure

Tant que le paquet est `DRAFT`, chaque entrée capturée a un bouton **Exclure**. Les entrées exclues ne sont pas supprimées (aucune perte d'audit) ; elles sont marquées `status = excluded` et ignorées à la compaction et à l'export. La réinclusion se fait en un clic. Pratique pour trier : capturer un large ensemble de modifications dans la journée, exclure l'essai abandonné, livrer le reste.

La compaction est calculée à l'**export**, pas à la capture — les exclusions comptent dès la construction du paquet JSON.

---

## L'onglet Changements — relire et agir

La page a deux onglets : **Changements** (le catalogue des paquets) et **Appliquer** (décrit plus bas).

### Colonne de gauche — la liste des paquets

| Élément | Description |
|---|---|
| Zone de filtre | Recherche sur le nom ou le statut du paquet. |
| Paquet actif | Présélectionné à l'ouverture (le brouillon de la dernière application modifiée). Surligné en bleu. |
| Ligne de paquet | Nom + ligne d'informations (`statut · captured_by · horodatage · nombre d'entrées`) + un badge de statut coloré. |
| Couleurs de statut | `DRAFT` bleu, `PENDING` orange, `APPROVED` vert, `EXPORTED` gris, `REJECTED` rouge. |
| Corbeille | Supprime le journal du paquet — les lignes déjà écrites dans les tables ne sont PAS touchées ; seul l'enregistrement du paquet disparaît. Confirmation demandée. |

### Colonne de droite — détail du paquet

| Élément | Description |
|---|---|
| En-tête | Nom du paquet + application + nombre d'entrées + boutons de cycle de vie (*Soumettre* / *Approuver* / *Rejeter* / *Exporter*) + les étapes de post-application retenues (quand les écrans contributeurs en définissent). |
| Entrées groupées par entité | Groupes habituels : `ROLES`, `USERS`, `RELATIONSHIPS`, `SECURITY`, `MENUS`, `ACTION REPLAYS` (les entrées CALL_API / CALL_PLUGIN) — le libellé vient du `change_entity` de chaque entrée. Un clic sur l'en-tête du groupe le replie ou le déplie. |
| En-tête de groupe | Le libellé + le nombre d'entrées + un court échantillon des clés naturelles (par ex. `PRJM_NEW · UDC_ADM · BUYER_R2`). |
| Ligne d'entrée | Badge d'opération + la clé naturelle + l'action d'origine. Le chevron déplie l'écart `ancien → nouveau`. |
| Vue des écarts | Tableau `champ` / `valeur` à trois tons : rouge barré = ancien, vert = nouveau, discret = inchangé. Un switch *Show unchanged* affiche aussi les colonnes non modifiées. |
| Boutons par entrée | *Exclure* (paquets `DRAFT` uniquement) passe l'entrée en `EXCLUDED` et l'estompe. Un nouveau clic la réinclut. |

### Étapes de post-application en en-tête

Un écran peut nommer des **étapes de post-application** (`Screen.post_apply`) : des actions à exécuter une fois sur la cible après l'écriture des lignes du paquet — refusionner un modèle de sécurité, rafraîchir une vue matérialisée. Elles proviennent d'une bibliothèque d'étapes de post-application commune à l'application, chaque étape étant un appel de plugin (`call_plugin`), un endpoint d'API (`call_api`) ou une requête (`run_query`). Leurs identifiants s'accumulent en en-tête du paquet et, à l'export, s'ajoutent au paquet JSON comme dernières opérations.

---

## L'onglet Appliquer — importer un paquet

À lancer sur l'installation **cible** (en général la production) pour importer un paquet exporté depuis la source (en général le développement).

L'application se fait en deux temps : **d'abord un essai à blanc** pour voir le rapport des écarts par opération, puis l'application réelle, avec éventuellement certains conflits cochés pour les appliquer quand même.

| Étape | Description |
|---|---|
| 1. **Choisir le JSON** | Le paquet exporté. L'en-tête affiche son nom, son application et son nombre d'opérations une fois lu. |
| 2. **Essai à blanc** | `POST /admin/changesets/apply { bundle, dry_run: true }`. Le serveur parcourt chaque opération, lit la ligne actuelle de la cible avec la `read_query` capturée, la compare aux `old_values` capturées et attribue un statut. **Aucune écriture.** |
| 3. **Lire le rapport** | Chaque opération affiche son statut : `would_apply` (sans écart), `conflict` (la cible diffère de l'état capturé — voir plus bas), `would_force` (un conflit que l'opérateur a choisi d'appliquer), `unverified` (contrôle impossible), `skipped` (une action capturée pour relecture seulement), `error`. La ligne de synthèse totalise chaque statut. |
| 4. **Cocher ce qui doit s'appliquer quand même** | Chaque opération `conflict` — et chaque opération `unverified`, dont l'écart ne peut être contrôlé faute de requête de lecture sur l'écran — a une case **forcer**. La cocher **applique** l'opération malgré tout (elle devient `would_force`) ; une opération non cochée n'est pas appliquée. |
| 5. **Appliquer** | `POST /admin/changesets/apply { bundle, dry_run: false, force: [<index>] }`. Chaque opération s'exécute dans sa propre transaction ; le nombre de lignes et le statut de chacune reviennent dans le rapport. |
| 6. **Confirmation** | Une ligne s'ajoute au journal d'import de la cible (en haut de l'onglet *Appliquer*), avec la somme de contrôle du paquet. Le paquet source reste `EXPORTED`. |

### Promouvoir vers une autre instance \{#promote\}

Un paquet approuvé — ou déjà exporté — peut partir directement vers une autre instance, sans manipuler le JSON : **Promouvoir vers…** dans l'en-tête du paquet ouvre la fenêtre de promotion. Choisir la **Cible** et un **Commentaire** facultatif : la cible effectue aussitôt l'essai à blanc et renvoie son rapport d'écarts, avec les mêmes cases **forcer** ; **Appliquer sur &lt;cible&gt;** l'applique sur place et marque le paquet comme exporté. Les cibles se déclarent dans *Paquet → Promotion* — voir [Paquets → Promotion](../framework/build/packages.md#promotion) ; les promotions appliquées figurent dans son historique.

### Détection des écarts — ce qui est comparé

Pour chaque opération sur une ligne, l'application lit la ligne actuelle de la cible avec la `read_query` et la clé capturées, puis :

| Opération | Ligne cible | Statut |
|---|---|---|
| INSERT | absente | `would_apply` |
| INSERT | déjà présente | `conflict` |
| UPDATE / DELETE | identique à l'état capturé | `would_apply` |
| UPDATE / DELETE | différente, ou absente | `conflict` |
| toute | pas de requête de lecture ni de clé capturée, ou lecture impossible | `unverified` — appliquée sans contrôle |
| `CALL_API` / `CALL_PLUGIN` | — | `unverified` — relancée à l'application ; `skipped` quand l'action a été capturée sans `change_replay` |
| étape de post-application | — | `unverified` — toujours exécutée, après les opérations de modification |

Un conflit n'est appliqué que si sa case est cochée. Une opération dont l'écriture échoue est signalée `error` avec le message de la base.

### Réappliquer le même paquet

Le journal d'import identifie un paquet par sa **somme de contrôle** (un SHA-256 de ses opérations). Réappliquer le même fichier est détecté avant toute écriture — le rapport d'essai à blanc porte un bloc `already_applied` avec les `applied_at` / `applied_by` précédents. L'opérateur peut confirmer et réappliquer (les lignes s'écrivent de nouveau là où la cible correspond à l'état capturé ; les autres reviennent en conflit) ou fermer le fichier.

### Rejeu d'action (`CALL_API` / `CALL_PLUGIN`)

Un écran suivi capture **chaque** appel d'API ou de plugin qu'il déclenche (pour que le paquet l'affiche en relecture). Le **rejeu** de l'appel sur la cible dépend de l'option `change_replay` de l'action :

| `change_replay` | Ce qui est rejoué sur la cible |
|---|---|
| `true` *(à activer)* | L'action est relancée telle quelle avec les paramètres capturés. Sert aux plugins de fusion côté serveur comme `nomajde.security:j_remerge_security` — refusionner la sécurité sur la cible est correct une fois les lignes écrites. |
| `false` *(par défaut)* | La capture est affichée dans le paquet pour relecture mais **pas** relancée. Sert aux effets ponctuels qui ne doivent pas se produire deux fois (envoi d'e-mails, webhook externe). |

---

## Promouvoir la sécurité JD Edwards — le cas d'usage de référence

Le flux qui a motivé cette fonctionnalité. Sur l'instance de **développement** :

1. L'opérateur crée un rôle `PRJM_NEW`, lui attache trois menus, modifie les permissions de deux rôles existants. Chaque écriture rejoint au fil de l'eau le paquet brouillon de l'application **`JDE-PROD`**.
2. L'opérateur ouvre *Nomaflow → Changements*, relit le brouillon. Le détail regroupe les trois rôles sous `ROLES`, les menus attachés sous `MENUS`, la sécurité touchée sous `SECURITY`. Une entrée `CALL_PLUGIN` vers `nomajde.security:j_remerge_security` est aussi capturée.
3. L'opérateur exclut une entrée — une correction de coquille qu'il préfère annuler à la main. Il soumet, puis *Approuve*, puis *Exporte*.
4. Le navigateur télécharge `jde-prod-security-2026-06-09.changeset.json`.

Sur l'instance de **production** :

5. L'opérateur ouvre *Nomaflow → Changements → Appliquer*, dépose le JSON.
6. L'essai à blanc s'exécute. Le rapport affiche 11 `would_apply` et 1 `conflict` sur le rôle `BUYER_R2` (modifié en production depuis la capture). L'opérateur coche cette ligne pour l'appliquer quand même.
7. L'opérateur clique sur *Appliquer*. Toutes les lignes s'écrivent ; l'étape de post-application s'exécute en dernier et refusionne la sécurité des rôles parents concernés.
8. Le journal d'import de la production enregistre le paquet avec sa somme de contrôle.

Pour le détail du SQL de fusion exécuté par l'étape de post-application, voir [Nomaflow → Jobs intégrés → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all).

---

## Configurer un écran pour le suivi des modifications

L'onglet *Général* de l'écran porte trois réglages :

| Champ | Description |
|---|---|
| **`change_tracked`** | Réglage principal. Activé, les écritures de l'écran rejoignent le paquet actif de son application. |
| **`change_entity`** | Libellé facultatif qui regroupe les entrées dans le détail. Texte libre — `role`, `user`, `relationship`, `security` par convention. Vide : le nom de la requête. |
| **`Screen.post_apply`** | Identifiants d'étapes de post-application (de la bibliothèque des étapes de post-application) à exécuter **une fois sur la cible** après l'écriture des lignes du paquet. À utiliser avec parcimonie — ce sont les étapes transverses du type « refusionner la sécurité » ou « rafraîchir les vues matérialisées ». |

Pour une action intégrée à l'écran, un réglage supplémentaire dans l'onglet *Général* de l'action :

| Champ | Description |
|---|---|
| **`change_replay`** | Activé, un appel `CALL_API` / `CALL_PLUGIN` de cette action est rejoué sur la cible. Désactivé par défaut — capture seule. |

---

## Contrat d'API \{#api-contract\}

| Endpoint | Méthode | Description |
|---|---|---|
| `/admin/changesets` | `GET` | Liste les paquets. Filtres : `application=<id>`, `status=<valeur>`. Superutilisateur uniquement. |
| `/admin/changesets/<id>` | `GET` | Détail du paquet — en-tête + chaque entrée avec ses valeurs avant / après. |
| `/admin/changesets/<id>` | `DELETE` | Supprime seulement le journal du paquet (pas les écritures). |
| `/admin/changesets/<id>/submit` | `POST` | Passe `DRAFT` → `PENDING`. |
| `/admin/changesets/<id>/approve` | `POST` | Passe `PENDING` → `APPROVED`. |
| `/admin/changesets/<id>/reject` | `POST` | Passe `PENDING` → `REJECTED`. |
| `/admin/changesets/<id>/entries/<entry_id>/exclude` | `POST` | Passe une entrée en `EXCLUDED`. |
| `/admin/changesets/<id>/entries/<entry_id>/include` | `POST` | Repasse une entrée en `CAPTURED`. |
| `/admin/changesets/<id>/export` | `GET` | Renvoie le paquet JSON compacté ; passe le paquet en `EXPORTED`. |
| `/admin/changesets/apply` | `POST` | Corps : `{ bundle, dry_run, force: [<index>] }`. Renvoie le rapport par opération. |
| `/admin/changesets/applied` | `GET` | Le journal d'import de la cible (chaque paquet appliqué). |

La forme du paquet :

```json
{
  "format": "liberty-changeset/1",
  "package": { "id": "...", "name": "...", "application": "JDE-PROD", "approved_by": "...", "approved_at": "..." },
  "op_count": 12,
  "ops": [
    { "seq": 1, "connector": "jdedwards", "query": "roles", "read_query": "roles_by_key",
      "operation": "INSERT", "entity": "role", "entity_key": {"RLDF": "PRJM_NEW"},
      "new_values": {"RLDF": "PRJM_NEW", "RLDC": "1", ...},
      "source_action": "import security" }
  ],
  "checksum": "9f2c…"
}
```

Le format reste stable d'une version du framework à l'autre. Le champ `format` porte la version du paquet (`liberty-changeset/1`) ; les étapes de post-application voyagent comme dernières entrées de `ops`.

---

## Ce qui n'est PAS dans cette page

Le framework livre le moteur pour ce qui suit, mais l'interface aujourd'hui est volontairement minimale :

| Surface | État |
|---|---|
| **Planifier une soumission / approbation automatique** | Non. Cycle de vie manuel par choix de conception (un paquet approuvé part en prod — la validation humaine est précisément l'objectif). |
| **Diff entre deux paquets** | Non. Comparez sur la cible via le journal des paquets appliqués + la vue de détail côté source. |
| **Annuler un paquet appliqué** | Non. Le framework enregistre l'application mais ne construit pas de paquet inverse. Pour défaire, capturer sur la source un nouveau paquet qui annule les lignes, puis l'appliquer. |
| **Mises à jour multi-onglets en direct** | Non. Une capture sur un autre onglet ne rafraîchit pas cette page ; cliquer sur *Actualiser* (en haut à droite) pour recharger. |

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| L'écran n'a pas été marqué `change_tracked`. | Les écritures passent ; aucune entrée n'apparaît dans le paquet. | Ouvrir l'onglet *Général* de l'écran, activer la bascule, enregistrer. La modification ne s'applique qu'aux écritures suivantes — les écritures antérieures ne sont pas rétro-remplies. |
| Deux opérateurs ont un paquet `DRAFT` ouvert sur la même application. | Au plus un `DRAFT` existe à la fois ; les écritures du second opérateur s'attachent au même paquet. | Se coordonner. Le `created_by` du paquet enregistre l'auteur d'origine ; les captures suivantes marquent `captured_by` sur chaque entrée, l'attribution est donc conservée. |
| Paquet appliqué sur la mauvaise cible (recette au lieu de prod). | L'application réussit ; les lignes existent sur la recette. | Capturer un paquet inverse sur la recette, le promouvoir en production — le framework ne synthétise pas cela automatiquement. La discipline de flux compte plus que l'outil ici. |
| `conflict` sur chaque UPDATE à l'essai à blanc. | L'image avant de la cible a divergé largement — typiquement parce que la source et la cible n'étaient pas synchronisées au départ. | Auditer la divergence d'abord. Tout forcer propage l'état de la source en bloc ; parfois c'est juste, parfois c'est la source qui est obsolète. |
| `CALL_PLUGIN` capturé mais non déclenché à l'application. | `change_replay` est désactivé sur l'action. | Ouvrir l'onglet *Général* de l'action, activer `change_replay`, enregistrer. Les captures futures seront rejouées ; les précédentes dans des paquets déjà exportés restent telles quelles. |
| L'étape de post-application ne s'est jamais exécutée. | Le champ `Screen.post_apply` de l'écran contributeur est vide. | Ajouter l'identifiant de l'étape au `post_apply` de l'écran. Les nouvelles captures l'ajoutent en en-tête du paquet ; les paquets existants ne sont pas complétés. |
| Paquet réappliqué par accident. | L'essai à blanc affiche `already_applied` avec l'horodatage précédent. | Lire le rapport de l'application existante. Réappliquer est permis et ré-exécutable sans danger sur les lignes propres ; à ne faire qu'en connaissance de cause. |

---

## Pour aller plus loin

- [Nomaflow → Jobs intégrés → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all) — le plugin de re-fusion de sécurité le plus souvent câblé comme étape de post-application sur les promotions JDE.
- [Nomaflow → Concepts](./concepts.md) — le modèle mental Nomaflow plus large dans lequel s'inscrivent les Paquets de modifications.
- [Paramètres → Package](../framework/build/packages.md) — l'équivalent configuration : expédier écrans / éléments de menu / tableaux de bord entre installations. Les deux canaux coexistent.
