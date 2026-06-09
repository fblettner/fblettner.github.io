---
title: Paquets de modifications
description: "Capturez chaque écriture de donnée suivie dans un paquet revu et promouvable — diffs ancien → nouveau groupés par entité, exclusion d'entrées à la carte, soumission / approbation / rejet du paquet, export d'un paquet JSON et application sur un autre environnement avec détection complète de dérive sur l'image avant. Le cas d'usage canonique est la promotion de la sécurité JD Edwards du développement vers la production."
keywords: [Liberty Framework, paquets de modifications, change packages, changesets, promotion sécurité JDE, brouillon / soumis / approuvé / exporté / promu / rejeté, détection de dérive, rejeu, CALL_API, CALL_PLUGIN, change_replay, change_tracked, change_entity, post-apply, AppliedBundle, ly_change_packages, ly_change_entries, Nomaflow]
---

# Paquets de modifications

La page **Paquets de modifications** capture chaque écriture de donnée suivie dans un ensemble groupé, revu et promouvable. Le cas d'usage qui a motivé la fonctionnalité est la **promotion de la sécurité JD Edwards d'un environnement de développement vers la production** — copier un rôle, attacher quelques menus, enregistrer → les écritures atterrissent dans les tables de production en développement, ET dans un *paquet de modifications* que l'opérateur peut revoir, approuver et expédier vers la production sous forme de paquet JSON.

Le même schéma convient à tout autre flux « faire les modifications ici, les rejouer là-bas » : un rafraîchissement de catalogue UDC curé, un lot de nouvelles permissions sur un écran spécifique, une mise à jour de règle de routage sur une table de configuration. Quand un écran est **`change_tracked`**, ses insertions / mises à jour / suppressions atterrissent dans le paquet brouillon actif en parallèle de l'écriture de production.

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
  <text x="190" y="102" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Appliquer un paquet</text>

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
  <text x="364" y="518" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Post-application : 1 étape · nomajde-remerge-security  (s'exécute une fois sur la cible après l'atterrissage de chaque ligne capturée)</text>
</svg>

---

## Comment un paquet se remplit

Trois éléments doivent être en place pour qu'une écriture atterrisse dans un paquet.

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

Un paquet traverse jusqu'à six états :

```text
    DRAFT ─── submit ───▶ PENDING ─── approve ──▶ APPROVED ─── export ──▶ EXPORTED ─── apply ──▶ PROMOTED
                              │                       │
                              └── reject ──▶ REJECTED (rouvre à DRAFT à la prochaine capture)
```

| État | Sens |
|---|---|
| **`DRAFT`** | Le paquet actif sur son application. Les nouvelles écritures suivies s'y attachent. Les entrées peuvent être exclues / réincluses. |
| **`PENDING`** | Soumis pour approbation. Aucune nouvelle écriture ne s'y attache (un nouveau DRAFT s'ouvre pour l'application à la prochaine capture). Le relecteur peut approuver ou rejeter. |
| **`APPROVED`** | Figé, prêt à exporter. Les entrées ne peuvent plus être exclues. |
| **`EXPORTED`** | Un paquet JSON a été téléchargé. Le paquet est désormais l'enregistrement côté source de ce qui a été expédié ; le paquet JSON est ce qui atteint la cible. |
| **`PROMOTED`** | Le chemin d'application de la cible a signalé un succès et a marqué la date `promoted_at` de ce paquet. |
| **`REJECTED`** | Le relecteur l'a renvoyé. Rouvre à `DRAFT` à la prochaine écriture capturée, pour que l'opérateur puisse amender et resoumettre. |

Les quatre boutons de cycle de vie en en-tête de la vue de détail — *Soumettre*, *Approuver*, *Rejeter*, *Exporter* — déclenchent `POST /admin/changesets/<id>/submit` (ou `…/approve`, `…/reject`, `…/export`). Le flux est soumis à permissions : les rôles `package:submit`, `package:approve`, `package:export` contrôlent les boutons individuellement (par défaut : superutilisateur).

### Par entrée : exclure / réinclure

Tant que le paquet est `DRAFT` ou `PENDING`, chaque entrée capturée a un bouton **Exclure**. Les entrées exclues ne sont pas supprimées (aucune perte d'audit) ; elles sont marquées `status = excluded` et ignorées à la compaction + à l'export. La réinclusion se fait en un clic. Utile pour le tri à la carte : capturer un large ensemble de modifications dans la journée, exclure l'expérimentation qui n'a pas abouti, expédier le reste.

La compaction est calculée à l'**export**, pas à la capture — les exclusions prennent effet immédiatement au moment où le paquet est construit.

---

## L'onglet Modifications — relire et agir

La page a deux onglets : **Modifications** (le catalogue de paquets) et **Appliquer un paquet** (traité plus bas).

### Colonne de gauche — la liste des paquets

| Élément | Description |
|---|---|
| Boîte de filtre | Correspondance par sous-chaîne sur le nom du paquet + l'application. Côté serveur. |
| Paquet actif | Présélectionné à l'ouverture (le brouillon de l'application que l'opérateur a touchée en dernier). Surligné en bleu. |
| Ligne de paquet | Nom + ligne méta (`statut · captured_by · horodatage · nombre_entrées`) + un badge de statut coloré. |
| Couleurs de statut | `DRAFT` bleu, `PENDING` orange, `APPROVED` vert, `EXPORTED` / `PROMOTED` gris, `REJECTED` rouge. |
| Icône corbeille | Supprime le journal du paquet — les lignes déjà écrites dans les tables sous-jacentes NE sont PAS affectées ; seul l'enregistrement du paquet de modifications est retiré. Confirmé via la boîte de dialogue thématisée. |

### Colonne de droite — détail du paquet

| Élément | Description |
|---|---|
| En-tête | Nom du paquet + application + nombre d'entrées + boutons de cycle de vie (*Soumettre* / *Approuver* / *Rejeter* / *Exporter*) + les ids des étapes de post-application résolues (quand elles sont définies sur les écrans contributeurs). |
| Entrées groupées par entité | Groupes par défaut : `RÔLES`, `UTILISATEURS`, `RELATIONS`, `SÉCURITÉ`, `MENUS`, `REJEUX D'ACTION` (les entrées CALL_API / CALL_PLUGIN) — l'étiquette de groupe vient du `change_entity` de chaque entrée. Cliquer sur l'en-tête du groupe pour plier / déplier. |
| En-tête de groupe | L'étiquette + le nombre d'entrées + un court échantillon des clés naturelles (par ex. `PRJM_NEW · UDC_ADM · BUYER_R2`). |
| Ligne d'entrée | Badge d'opération + clé naturelle + étiquette de l'action déclenchante. Cliquer sur le chevron pour développer le diff `ancien → nouveau`. |
| Vue diff | Tableau à deux colonnes `champ` / `valeur` avec trois tons : barré rouge = ancien, vert = nouveau, secondaire = inchangé. Un petit interrupteur *Voir les inchangés* dévoile le bruit des colonnes intactes quand on relit une entrée renommée mais non modifiée. |
| Boutons par entrée | *Exclure* (uniquement sur les paquets `DRAFT` / `PENDING`) bascule l'entrée en `EXCLUDED` et la grise. Cliquer à nouveau pour réinclure. |

### Ids d'étapes post-application en en-tête

Quand les écrans qui ont contribué au paquet ont des ids d'étapes `Screen.post_apply` définis (une liste d'ids d'étapes Nomaflow à exécuter une fois sur la cible après l'atterrissage du paquet), ces ids s'accumulent en en-tête du paquet. À l'export ils sont cousus dans une section `[changesets] post_apply` du paquet JSON ; le chemin d'application de la cible les exécute après la dernière écriture de ligne. Exemple d'usage : une promotion de sécurité JDE qui demande à `nomajde-remerge-security` de s'exécuter sur la cible une fois que chaque ligne capturée (rôle + affectation) a atterri.

L'éditeur des ids d'étapes — quoi enregistrer sur un écran, quoi y câbler — se trouve sur la sous-page *Paramètres → Post-application* à côté de l'éditeur de paquets de modifications. Définir une étape prend un id de job Nomaflow ; le job est ensuite exécutable sur la cible.

---

## L'onglet Appliquer — importer un paquet

À exécuter sur l'installation **cible** (typiquement la prod) pour importer un paquet exporté depuis la source (typiquement le dev).

Le flux d'application se fait en deux passes : **essai à blanc d'abord** pour voir le rapport de dérive par opération, puis application réelle, avec éventuellement *Forcer* coché sur les lignes que l'on veut écraser.

| Étape | Description |
|---|---|
| 1. **Choisir le JSON** | Le fichier `.changeset.json` exporté. L'en-tête affiche son nom, son application et le nombre d'opérations une fois parsé. |
| 2. **Essai à blanc** | `POST /admin/changesets/apply { bundle, dry_run: true }`. Le serveur parcourt chaque opération, récupère la ligne cible actuelle via le `read_query` capturé, la compare à l'`old_values` capturé et tague l'opération avec un statut. **Aucune écriture n'a lieu.** |
| 3. **Lire le rapport** | Chaque opération affiche son badge de statut : `would_apply` (propre), `would_force` (dérive sur UPDATE / DELETE — exige le coche *Forcer*), `unverified` (pas de read_query dans le paquet — l'application atterrira mais sans contrôle de dérive), `conflict` (insertion sur une ligne déjà existante, ou suppression sur une ligne absente), `error` (échec par opération). La ligne de résumé totalise chaque statut. |
| 4. **Cocher *Forcer* sur les lignes à écraser** | Chaque opération `would_force` a une case à cocher. Confirme l'intention de l'opérateur d'écraser une ligne dérivée. Les opérations `conflict` reçoivent aussi une case ; la cocher les ignore à l'application réelle. |
| 5. **Appliquer** | `POST /admin/changesets/apply { bundle, dry_run: false, force: [<indexes>] }`. Chaque opération s'exécute dans sa propre transaction ; les nombres de lignes + le statut par opération reviennent dans le rapport. |
| 6. **Confirmation** | Une ligne atterrit dans le journal `AppliedBundle` de la cible (le journal d'import sur cette même page → onglet *Appliquer un paquet* → haut du panneau). Le statut du paquet côté source bascule en `PROMOTED` uniquement après que le chemin d'application de la cible a fait son retour à la source — pas automatique dans le flux Appliquer autonome. |

### Détection de dérive — ce qui est comparé

Pour chaque opération de ligne (`INSERT` / `UPDATE` / `DELETE`), le chemin d'application :

1. Lit le `read_query` capturé dans le paquet, l'exécute sur la cible avec l'`entity_key` capturé → la **ligne actuelle de la cible**.
2. Compare **champ par champ** à l'`old_values` du paquet.
3. S'ils correspondent → `would_apply` (l'image avant côté source est cohérente avec l'état actuel de la cible).
4. S'ils diffèrent → `would_force` pour UPDATE / DELETE (la ligne a changé sur la cible depuis la capture du paquet ; l'opérateur décide d'écraser ou non) ou `conflict` pour INSERT (une ligne avec cette clé existe déjà sur la cible).
5. Si le paquet n'a pas de `read_query` → `unverified`. L'application atterrit mais aucun contrôle de dérive n'a tourné. Les paquets compacts créés avec `--no-read-query` ou depuis des écrans qui ne fournissent pas de read query atterrissent ici.

| Statut | Sens | Ce que fait l'application |
|---|---|---|
| `would_apply` / `applied` | Propre — la ligne actuelle de la cible correspond à l'image avant du paquet. | L'application exécute l'écriture de ligne. |
| `would_force` / `applied` après *Forcer* | Dérive détectée ; l'opérateur a choisi d'écraser. | L'application exécute l'écriture de ligne. |
| `unverified` | Pas de read query → pas de contrôle de dérive. | L'application exécute l'écriture de ligne (le coche simple est `applied`). |
| `conflict` | INSERT sur une clé existante, DELETE sur une ligne absente. | Ignoré sauf si l'opérateur coche la case du conflit. |
| `error` | L'écriture elle-même a levé une erreur (violation FK, contrainte, incompatibilité de dialecte). | Ignoré ; la ligne de détail porte l'erreur SQL. |

### Réappliquer le même paquet

Le journal `AppliedBundle` utilise la **somme de contrôle** du paquet (sha256 sur ses opérations) comme identité. Réappliquer le même fichier est détecté avant la moindre écriture — le rapport d'essai à blanc porte un bloc `already_applied` avec l'`applied_at` / `applied_by` précédents. L'opérateur peut soit confirmer et réappliquer (chaque ligne atterrira en `applied` si la cible est revenue à l'image avant, ou en `would_force` / `conflict` si elle a dérivé) soit fermer le fichier.

### Rejeu d'action (`CALL_API` / `CALL_PLUGIN`)

Un écran suivi capture **chaque** appel API / plugin qu'il déclenche (pour que le paquet l'affiche en relecture). Le fait que l'appel soit **rejoué** sur la cible est conditionné par le drapeau `change_replay` de l'action :

| `change_replay` | Ce qui est rejoué sur la cible |
|---|---|
| `true` *(opt-in)* | L'action est réémise telle quelle avec les paramètres résolus capturés. Utilisé pour les plugins de fusion côté serveur comme `nomajde.security:j_remerge_security` — refusionner la sécurité sur la cible est juste après l'atterrissage des écritures de lignes. |
| `false` *(par défaut)* | La capture est affichée dans le paquet pour relecture mais **pas** rejouée. Utilisé pour les effets de bord ponctuels qui ne doivent pas s'exécuter deux fois (envoi d'e-mails, webhook externe). |

Une action rejouée tourne dans la même transaction que les écritures de lignes environnantes quand le dialecte le permet ; en pratique cela signifie qu'une exécution réussie du plugin de fusion de sécurité atterrit atomiquement avec les écritures de rôle / d'affectation qui l'ont déclenchée.

---

## Promouvoir la sécurité JD Edwards — le cas d'usage canonique

Le flux qui a motivé cette fonctionnalité. Sur l'instance **dev** :

1. L'opérateur crée un rôle `PRJM_NEW`, attache trois menus, modifie les permissions de deux rôles existants. Chaque écriture atterrit dans le paquet brouillon de l'application **`JDE-PROD`** au fil de l'eau.
2. L'opérateur ouvre *Nomaflow → Modifications*, relit le brouillon. La vue de détail montre les trois rôles groupés sous `RÔLES`, les attachements de menus sous `MENUS`, la sécurité touchée sous `SÉCURITÉ`. Une entrée `CALL_PLUGIN` vers `nomajde.security:j_remerge_security` est aussi capturée.
3. L'opérateur exclut une entrée — une correction de coquille qu'il veut annuler manuellement à la place. Soumet, puis *Approuve*, puis *Exporte*.
4. Le navigateur télécharge `jde-prod-security-2026-06-09.changeset.json`.

Sur l'instance **prod** :

5. L'opérateur ouvre *Nomaflow → Modifications → Appliquer un paquet*, dépose le JSON.
6. L'essai à blanc s'exécute. Le rapport affiche 11 `would_apply` et 1 `would_force` sur le rôle `BUYER_R2` (quelqu'un l'a touché en prod depuis la capture du paquet). L'opérateur coche la case *Forcer* pour cette ligne.
7. L'opérateur clique *Appliquer*. Chaque ligne atterrit ; l'étape de post-application `nomajde-remerge-security` se déclenche, refusionnant la sécurité pour les rôles parents concernés en prod.
8. Le paquet source côté dev bascule en `PROMOTED` une fois que la cible a fait son retour. Le panneau *Paquets appliqués* côté prod enregistre la nouvelle ligne avec sa somme de contrôle.

Pour la référence détaillée du SQL de fusion que l'étape de post-application exécute, voir [Nomaflow → Jobs intégrés → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all).

---

## Configurer un écran pour le suivi des modifications

L'onglet *Général* de l'écran porte trois bascules :

| Champ | Description |
|---|---|
| **`change_tracked`** | Bascule maîtresse. Quand elle est active, les écritures de l'écran s'attachent au paquet actif de son application. |
| **`change_entity`** | Étiquette optionnelle qui groupe les entrées sur la page de détail. Texte libre — `role`, `user`, `relationship`, `security` sont des conventions. Vide, on retombe sur le nom de la requête. |
| **`Screen.post_apply`** | Liste d'ids d'étapes Nomaflow (depuis la sous-page *Post-application*) à exécuter **une fois sur la cible** après l'atterrissage de chaque ligne de chaque paquet contribué par cet écran. À utiliser avec parcimonie — ce sont les étapes transverses « refusionner la sécurité maintenant » / « rafraîchir les vues matérialisées maintenant ». |

Pour une action embarquée dans l'écran, une bascule supplémentaire sur l'onglet *Général* de l'action :

| Champ | Description |
|---|---|
| **`change_replay`** | Quand elle est active, une invocation `CALL_API` / `CALL_PLUGIN` de cette action est rejouée sur la cible. Désactivée par défaut — capture seulement. |

---

## Contrat d'API

| Endpoint | Méthode | Description |
|---|---|---|
| `/admin/changesets` | `GET` | Liste les paquets. Filtres : `application=<id>`, `status=<une-valeur>`. Superutilisateur uniquement. |
| `/admin/changesets/<id>` | `GET` | Détail du paquet — en-tête + chaque entrée avec ses valeurs anciennes / nouvelles. |
| `/admin/changesets/<id>` | `DELETE` | Supprime uniquement le journal du paquet (pas les écritures sous-jacentes). |
| `/admin/changesets/<id>/submit` | `POST` | Passe `DRAFT` → `PENDING`. |
| `/admin/changesets/<id>/approve` | `POST` | Passe `PENDING` → `APPROVED`. |
| `/admin/changesets/<id>/reject` | `POST` | Passe `PENDING` → `REJECTED` (rouvre à `DRAFT` à la prochaine capture). |
| `/admin/changesets/<id>/entries/<entry_id>/exclude` | `POST` | Bascule le statut d'une entrée vers `EXCLUDED`. |
| `/admin/changesets/<id>/entries/<entry_id>/include` | `POST` | Bascule le statut d'une entrée vers `CAPTURED`. |
| `/admin/changesets/<id>/export` | `GET` | Renvoie le paquet JSON compacté ; bascule le paquet en `EXPORTED`. |
| `/admin/changesets/apply` | `POST` | Corps : `{ bundle, dry_run, force: [<indexes>] }`. Renvoie le rapport par opération. |
| `/admin/changesets/applied` | `GET` | Le journal d'import de la cible (chaque paquet appliqué). |

La forme du paquet :

```json
{
  "format": "liberty.changeset.v1",
  "package": { "id": "...", "name": "...", "application": "JDE-PROD", "exported_at": "..." },
  "op_count": 12,
  "ops": [
    { "seq": 1, "connector": "jdedwards", "query": "roles", "read_query": "roles_by_key",
      "operation": "INSERT", "entity": "role", "entity_key": {"RLDF": "PRJM_NEW"},
      "new_values": {"RLDF": "PRJM_NEW", "RLDC": "1", ...},
      "source_action": "import security" }
  ],
  "post_apply": ["nomajde-remerge-security"],
  "checksum": "sha256:..."
}
```

Le format est stable entre les montées de version du framework — un paquet construit sur `2026.06` s'applique sans souci sur `2026.07`. La compatibilité ascendante est garantie par l'étiquette de version (`format = "liberty.changeset.v1"`) ; un paquet produit par un hypothétique `v2` serait rejeté par une cible `v1` avec une erreur claire.

---

## Ce qui n'est PAS dans cette page

Le framework livre le moteur pour ce qui suit, mais l'interface aujourd'hui est volontairement minimale :

| Surface | État |
|---|---|
| **Planifier une soumission / approbation automatique** | Non. Cycle de vie manuel par choix de conception (un paquet approuvé part en prod — la validation humaine est précisément l'objectif). |
| **Diff entre deux paquets** | Non. Comparez sur la cible via le journal des paquets appliqués + la vue de détail côté source. |
| **Annuler un paquet promu** | Non. Le framework enregistre l'application mais ne synthétise pas un paquet inverse. Pour défaire, capturez un nouveau paquet sur la source qui annule les lignes + promouvez-le. |
| **Mises à jour multi-onglets en direct** | Non. Une capture sur un autre onglet ne rafraîchit pas cette page ; cliquez *Rafraîchir* (en haut à droite) pour recharger. |

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| L'écran n'a pas été marqué `change_tracked`. | Les écritures passent ; aucune entrée n'apparaît dans le paquet. | Ouvrir l'onglet *Général* de l'écran, activer la bascule, enregistrer. La modification ne s'applique qu'aux écritures suivantes — les écritures antérieures ne sont pas rétro-remplies. |
| Deux opérateurs ont un paquet BROUILLON ouvert sur la même application. | Au plus un BROUILLON existe à la fois ; les écritures du second opérateur s'attachent au même paquet. | Coordonnez-vous. Le `created_by` du paquet enregistre l'auteur d'origine ; les captures suivantes marquent `captured_by` sur chaque entrée, l'attribution est donc conservée. |
| Paquet appliqué sur la mauvaise cible (recette au lieu de prod). | L'application atterrit ; les lignes existent sur la recette. | Capturez un paquet inverse sur la recette, promouvez-le en prod — le framework ne synthétise pas cela automatiquement. La discipline de flux compte plus que l'outil ici. |
| `would_force` sur chaque UPDATE à l'essai à blanc. | L'image avant de la cible a divergé largement — typiquement parce que la source et la cible n'étaient pas synchronisées au départ. | Auditer la divergence d'abord. Tout forcer propage l'état de la source en bloc ; parfois c'est juste, parfois c'est la source qui est obsolète. |
| `CALL_PLUGIN` capturé mais non déclenché à l'application. | `change_replay` est désactivé sur l'action. | Ouvrir l'onglet *Général* de l'action, activer `change_replay`, enregistrer. Les captures futures seront rejouées ; les précédentes dans des paquets déjà exportés restent telles quelles. |
| L'étape de post-application n'a jamais tourné. | Le champ `Screen.post_apply` de l'écran contributeur est vide. | Câblez l'id d'étape (le `id` d'un job Nomaflow) dans le `post_apply` de l'écran. Les nouvelles captures l'accumuleront en en-tête du paquet ; les paquets existants ne seront pas rétro-remplis. |
| Paquet réappliqué par accident. | L'essai à blanc affiche `already_applied` avec l'horodatage précédent. | Lire le rapport de l'application existante. Réappliquer est permis et ré-exécutable sans danger sur les lignes propres ; ne le faites qu'en pleine conscience. |

---

## Pour aller plus loin

- [Nomaflow → Jobs intégrés → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all) — le plugin de re-fusion de sécurité le plus souvent câblé comme étape de post-application sur les promotions JDE.
- [Nomaflow → Concepts](./concepts.md) — le modèle mental Nomaflow plus large dans lequel s'inscrivent les Paquets de modifications.
- [Paramètres → Package](../framework/build/packages.md) — l'équivalent configuration : expédier écrans / éléments de menu / tableaux de bord entre installations. Les deux canaux coexistent.
