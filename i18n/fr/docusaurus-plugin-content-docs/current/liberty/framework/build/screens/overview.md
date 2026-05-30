---
title: Écrans — vue d'ensemble
description: "La page Écrans — barre de portée à gauche avec les applications, liste à plat des écrans, clic pour ouvrir les 7 onglets du Concepteur d'écran (Général / Requêtes / Colonnes / Dialogue / Actions / Menu contextuel ligne / Export)."
keywords: [Liberty Framework, écrans, ScreensBuilder, Concepteur d'écran, onglets, dialogue, colonnes, actions, permissions]
---

# Écrans — vue d'ensemble

Un **écran** dans Liberty est la page que voit l'utilisateur : un tableau de lignes, des filtres optionnels, un dialogue d'ajout/modification optionnel, des actions optionnelles, un menu contextuel ligne optionnel. Un écran = une requête `<base>_get` + (optionnellement) `<base>_put` / `<base>_post` / `<base>_delete` pour les écritures + un formulaire de dialogue par-dessus.

La page qui gère les écrans est **Paramètres → Écrans**. Cette vue d'ensemble la cartographie ; les pages suivantes décrivent chaque tâche.

---

## La page Écrans en un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#sov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Écrans</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="216" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="256" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="306" y="78" width="240" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="426" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter des écrans pour un connecteur</text>
  <rect x="700" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="740" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="788" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="828" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>

  <rect x="40" y="120" width="828" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Filtrer les écrans…</text>

  <rect x="40" y="168" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="190" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="76" y="208" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Clients · 2 onglets · 9 champs · 3 actions</text>
  <text x="76" y="220" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=customers_get</text>
  <rect x="700" y="180" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="762" y="180" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Dupliquer</text>
  <rect x="818" y="180" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="195" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="232" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="254" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="76" y="272" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Pipeline d'affaires · 1 onglet · 6 champs · menu contextuel</text>
  <text x="76" y="284" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=deals_get</text>
  <rect x="700" y="244" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="762" y="244" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Dupliquer</text>
  <rect x="818" y="244" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="259" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="296" width="828" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="454" y="324" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter un écran (apparaît en haut de la liste)</text>
</svg>

Trois régions :

| Région | Contenu |
|---|---|
| **Barre de portée en haut** | Une puce par application (un connecteur disposant d'un menu). Cliquer sur une puce → ses écrans se chargent en dessous. Le bouton *＋ Ajouter des écrans pour un connecteur* enregistre un connecteur tout neuf dans l'espace de nommage Écrans. *Annuler* / *Enregistrer* à droite valident ou annulent les modifications de toute la page. |
| **Barre de filtre** | Un champ de recherche pour la liste d'écrans. Visible quand l'application sélectionnée comporte plus de quelques écrans. |
| **Liste des écrans** | Une carte par écran, défilement vertical. Chaque carte affiche l'identifiant, le libellé, la requête de lecture, le nombre d'onglets, le nombre de champs et les actions par carte : *Renommer*, *Dupliquer*, *Supprimer*. **Cliquer sur une carte ouvre la boîte de dialogue modale du Concepteur d'écran.** |

---

## La boîte de dialogue modale du Concepteur d'écran

Cliquer sur une carte ouvre une **boîte de dialogue modale quasi plein écran** qui héberge le **ScreenEditor**. L'en-tête présente *Agrandir / Restaurer* (plein écran par défaut), *Annuler* et *Enregistrer* — Enregistrer valide **uniquement les modifications de cet écran** et ferme ; Annuler demande confirmation en cas de modifications non enregistrées.

À l'intérieur de la modale, sept onglets organisent l'ensemble :

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="stab-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="160" rx="14" fill="url(#stab-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · crm.customers</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="90" y="98" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Général</text>
  <rect x="148" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="198" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêtes</text>
  <rect x="256" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="306" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="364" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="414" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Dialogue</text>
  <rect x="472" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="522" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Actions</text>
  <rect x="580" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="630" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Menu ligne</text>
  <rect x="688" y="80" width="100" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="738" y="98" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>

  <text x="40" y="138" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Contenu de l'onglet</text>
  <rect x="40" y="146" width="920" height="20" rx="4" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
</svg>

| Onglet | Contenu |
|---|---|
| **Général** | Identité, surcharge du connecteur, table d'audit, plafond de lignes, colonnes clés, indicateurs de comportement (chargement automatique, éditable, importable), regroupement, vue arborescente, graphique par défaut, comportement au clic sur une ligne. |
| **Requêtes** | Les quatre références de requêtes CRUD — lecture (obligatoire), mise à jour, insertion, suppression. Le sélecteur s'alimente depuis la liste des requêtes du connecteur. |
| **Colonnes** | Une ligne par indication de colonne — libellés, formats, valeurs par défaut, références dictionnaire, filtrage, règles d'édition. Cliquer sur une colonne pour accéder à son éditeur complet. |
| **Dialogue** | Le **Constructeur visuel** — un canevas à trois colonnes style Figma (Palette / Canevas / Inspecteur) où l'on glisse des champs sur des onglets. Optionnel — un écran sans dialogue fonctionne quand même comme un tableau en lecture seule ou en édition de grille. |
| **Actions** | Trois groupes : *Hooks de dialogue* (on_load / on_save / on_cancel), *Barre d'outils* (boutons au-dessus du tableau), *Hooks de ligne* (on_insert / on_update / on_delete). |
| **Menu ligne** | Actions du menu contextuel ouvert par clic droit sur une ligne. |
| **Export** | Configuration d'export xlsx multi-feuilles — optionnel. |

Les pages suivantes de cette section décrivent chaque onglet comme une tâche distincte.

---

## Ce que porte un écran

Les champs de premier niveau du schéma, regroupés par finalité :

| Groupe | Champs |
|---|---|
| **Identité** | `id`, `label`, `description`, `connector` *(vide = le connecteur de l'application)* |
| **Requête de lecture** | `read_query` (obligatoire), `auto_load`, `max_rows`, `key_columns` |
| **Requêtes d'écriture** | `update_query`, `insert_query`, `delete_query` |
| **Édition et affichage** | `columns`, `editable`, `uploadable`, `initial_group_by`, `treeview`, `chart_id` |
| **Audit** | `audit_table` (ex. `AUD_USERS` — duplique les écritures avec AUD_ACTION / AUD_USER / AUD_DATE) |
| **Formulaire** | `dialog` *(optionnel — le formulaire posé sur le tableau)* |
| **Actions / hooks** | `actions` (barre d'outils), `row_menu` (clic droit), `on_insert` / `on_update` / `on_delete` (hooks de ligne) |
| **Cible au clic sur une ligne** | `row_click_screen` + `row_click_connector` + `row_click_binds` *(ouvre un écran voisin comme dialogue)* OU `row_click_route` *(ouvre une route SPA)* |
| **Export** | `export` *(configuration du classeur xlsx)* |

---

## Types d'écrans — selon les champs renseignés

Il n'y a pas de discriminant `kind` ; les différentes formes d'écran proviennent des champs que l'on remplit :

| Champs renseignés | Comportement |
|---|---|
| `read_query` seul | Grille en lecture seule. L'utilisateur voit les lignes ; pas d'édition, pas d'ajout. |
| `read_query` + `editable = true` | Édition en ligne dans la grille — l'utilisateur édite les cellules sur place, le bouton *Enregistrer* de la grille écrit en retour. Nécessite `update_query`. |
| `read_query` + `dialog` | Grille + dialogue. L'utilisateur ajoute/modifie les lignes via le formulaire. Nécessite les `insert_query` / `update_query` correspondantes. |
| `read_query` + `row_click_screen` | Maître/détail. Cliquer sur une ligne ouvre le dialogue d'un écran voisin restreint à cette ligne. |
| `read_query` + `row_click_route` | Maître/page. Cliquer sur une ligne navigue vers une route SPA — échappatoire pour les pages React écrites à la main (logs diffusés en direct, fusions multi-sources). |
| Tout ce qui précède + `treeview` | Bascule en vue arborescente en complément des bascules Tableau / Graphique par défaut. Les colonnes parent/enfant construisent un arbre récursif. |

Un même écran peut superposer plusieurs : un écran avec `dialog` ET `row_click_route` ouvre la route au clic (la route gagne), et le dialogue n'est accessible que via le bouton *＋ Ajouter* de la barre d'outils.

---

## Permissions — pilotées par la requête de lecture

L'écran lui-même **n'a pas** sa propre chaîne de permission. Un utilisateur peut voir un écran quand il a la permission d'exécuter sa **requête de lecture** :

```
sql:<connector>:<read_query>
```

Ainsi, un écran `customers` sur le connecteur `crm` avec `read_query = customers_get` est visible par toute personne disposant de `sql:crm:customers_get`. Accorder `sql:crm:*` ouvre toutes les requêtes du connecteur — et donc tous les écrans qui les utilisent.

La même logique s'applique aux écritures : le *Enregistrer* du dialogue et le *Enregistrer* de la grille n'aboutissent que si l'utilisateur a `sql:<connector>:<update_query>` / `<insert_query>` / `<delete_query>`. Un utilisateur avec la lecture mais sans permission d'écriture voit la grille mais pas de bouton *＋ Ajouter* et obtient un dialogue en lecture seule.

---

## Enregistrement et rechargement

Le bouton *Enregistrer* de la page Écrans écrit l'intégralité de `screens.toml` (la table `[screens]` est remplacée intégralement) et déclenche un rechargement à chaud. La bannière de statut indique quelles applications ont été touchées.

Le rechargement à chaud signifie **aucun redémarrage de processus** — un nouvel écran est appelable immédiatement à `/screen/<app>/<id>`, et le menu le prend en compte si une entrée de menu pointe sur lui.

---

## Ce que l'on fait concrètement — carte rapide

| Objectif | Lire |
|---|---|
| Câbler un nouvel écran sur une requête `_get` et voir la grille. | [Créer un écran à partir d'une requête](./create-from-query.md). |
| Configurer les colonnes — libellés, formats, valeurs par défaut, filtrage. | [Colonnes](./columns.md). |
| Construire le dialogue d'ajout/modification avec le concepteur visuel. | [Constructeur de dialogue](./dialog-builder.md). |
| Faire apparaître / rendre obligatoires / verrouiller des champs sous conditions. | [Champs conditionnels](./conditional-fields.md). |
| Ajouter des boutons de barre d'outils, des menus contextuels et des hooks de cycle de vie. | [Actions et cycle de vie](./actions-and-lifecycle.md). |
| Intégrer un formulaire d'enregistrement enfant ou une grille de lignes liées dans un onglet. | [Onglets imbriqués](./nested-tabs.md). |

---

## Étapes suivantes

- [Créer un écran à partir d'une requête](./create-from-query.md) — démarrer avec un `_get`, voir la grille.
- [Concepts → Écrans](./overview.md) — la référence approfondie derrière cette page.
