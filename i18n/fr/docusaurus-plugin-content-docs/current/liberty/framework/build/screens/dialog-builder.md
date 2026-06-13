---
title: Constructeur de dialogue
description: "Le Constructeur visuel — un canevas à trois colonnes style Figma (Palette / Canevas / Inspecteur) où l'on glisse des champs sur des onglets, on définit les propriétés, on câble les recherches et on ajoute des actions par onglet."
keywords: [Liberty Framework, constructeur de dialogue, constructeur visuel, ScreenVisualBuilder, palette, canevas, inspecteur, onglets, champs, glisser-déposer]
---

# Constructeur de dialogue

L'onglet **Dialogue** du Concepteur d'écran ouvre le **Constructeur visuel** — un éditeur WYSIWYG pour le formulaire d'ajout/modification. Le modèle de données est la même structure `ScreenDialog` stockée dans `screens.toml`, mais au lieu d'éditer du TOML on glisse des champs sur des onglets et on règle les propriétés dans un inspecteur latéral.

Un écran sans dialogue fonctionne quand même comme un tableau en lecture seule ou en édition de grille. Construire un dialogue quand l'utilisateur a besoin d'un formulaire complet pour ajouter ou modifier des lignes.

---

## Disposition à trois colonnes

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="vb-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#vb-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · crm.customers · Dialogue</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="220" height="350" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PALETTE</text>
  <rect x="56" y="112" width="80" height="22" rx="4" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="96" y="127" fill="#0b1220" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <rect x="142" y="112" width="80" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="182" y="127" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="56" y="144" width="186" height="22" rx="4" fill="rgba(0,0,0,0.30)" stroke="#334155"/>
  <text x="68" y="159" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Rechercher…</text>
  <rect x="56" y="176" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="194" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ CUSTOMER_ID</text>
  <rect x="56" y="208" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="226" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ NAME</text>
  <rect x="56" y="240" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="258" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ EMAIL</text>
  <rect x="56" y="272" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="290" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ STATUS</text>
  <rect x="56" y="304" width="186" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="68" y="322" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">＋ REGION_CODE</text>

  <rect x="272" y="78" width="450" height="350" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="288" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CANEVAS</text>
  <rect x="288" y="112" width="76" height="24" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="326" y="129" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Général</text>
  <rect x="370" y="112" width="76" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="408" y="129" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Adresse</text>
  <rect x="452" y="112" width="60" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="482" y="129" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Onglet</text>

  <rect x="288" y="148" width="200" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="298" y="166" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="298" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[clé · désactivé en édition]</text>
  <rect x="494" y="148" width="200" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="504" y="166" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="504" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[obligatoire]</text>

  <rect x="288" y="196" width="200" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="298" y="214" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">EMAIL</text>
  <text x="298" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[format=email]</text>
  <rect x="494" y="196" width="200" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeDasharray="3,3"/>
  <text x="594" y="220" fill="#64748b" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">déposer un champ ici</text>

  <rect x="288" y="244" width="406" height="40" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="298" y="262" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="298" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">[ENUM · colspan=2]</text>

  <rect x="288" y="304" width="200" height="40" rx="6" fill="rgba(255,255,255,0.10)" stroke="rgba(192,132,252,0.60)" strokeWidth="2"/>
  <text x="298" y="322" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">REGION_CODE</text>
  <text x="298" y="336" fill="#c084fc" fontSize="9" fontFamily="system-ui, sans-serif">[sélectionné — voir Inspecteur →]</text>

  <text x="288" y="372" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MASQUÉ SUR CET ONGLET</text>
  <rect x="288" y="380" width="406" height="36" rx="6" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="491" y="402" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">CREATED_AT (hidden=true)</text>

  <rect x="734" y="78" width="226" height="350" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="750" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSPECTEUR · REGION_CODE</text>
  <text x="750" y="124" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">dd</text>
  <rect x="784" y="114" width="160" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="794" y="128" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">REGION_CODE</text>
  <text x="750" y="148" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">colspan</text>
  <rect x="784" y="138" width="50" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="809" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">1</text>
  <text x="750" y="172" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">required</text>
  <rect x="784" y="162" width="16" height="16" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="750" y="196" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">hidden</text>
  <rect x="784" y="186" width="16" height="16" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="750" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">disabled</text>
  <rect x="784" y="210" width="16" height="16" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>

  <line x1="750" y1="244" x2="944" y2="244" stroke="#1f2937"/>
  <text x="750" y="262" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIAISONS DE PARAMÈTRES LOOKUP</text>
  <text x="750" y="284" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">:APP_ID ← APP_ID</text>
  <text x="750" y="304" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Ajouter une liaison</text>

  <line x1="750" y1="326" x2="944" y2="326" stroke="#1f2937"/>
  <text x="750" y="344" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLES CONDITIONNELLES</text>
  <text x="750" y="362" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">visible_when : (aucune)</text>
  <text x="750" y="378" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">required_when : (aucune)</text>
  <text x="750" y="394" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">disabled_when : (aucune)</text>
  <text x="750" y="416" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Ajouter une condition</text>
</svg>

| Région | Rôle |
|---|---|
| **Palette** *(à gauche)* | Source des nouveaux champs. Deux sous-onglets : **Dictionnaire** (chaque entrée disponible dans la portée du connecteur courant) et **Colonnes** (chaque colonne que retourne la requête de lecture). Une zone de recherche restreint la liste. Cliquer sur une entrée ajoute une carte de champ sur le canevas ; faire glisser une entrée pour la déposer à un emplacement précis. |
| **Canevas** *(au centre)* | La barre d'onglets du dialogue en haut + la grille de champs en dessous. Cliquer sur un onglet pour basculer ; *＋ Onglet* en ajoute un. Chaque carte de champ affiche le nom du champ + un résumé sur une ligne de ses indicateurs clés. La carte sélectionnée a une bordure colorée ; l'inspecteur à droite la reflète. Un groupe **MASQUÉ** distinct en bas rassemble les champs avec `hidden = true`. |
| **Inspecteur** *(à droite)* | Les propriétés du champ sélectionné (ou un éditeur d'action par onglet quand une action d'onglet est sélectionnée — mutuellement exclusifs). Les propriétés sont rendues sous forme de formulaire générique ; les sections **Liaisons de paramètres lookup** et **Règles conditionnelles** se déploient en ligne. |

---

## Construire de zéro

### Étape 1 — Ouvrir l'onglet Dialogue

La première fois, le canevas est vide avec un bouton *Créer le dialogue*. Cliquer dessus pour amorcer `dialog.tabs = [{id: 'general', label: 'Général', fields: []}]` et révéler la disposition à trois colonnes.

### Étape 2 — Ajouter les champs du premier onglet

Deux moyens :

| Méthode | Quand |
|---|---|
| **Cliquer sur une entrée de Dictionnaire / colonne dans la Palette** | Ajoute une carte de champ à la fin de la grille de l'onglet courant. |
| **Glisser une entrée de Dictionnaire / colonne sur le Canevas** | Dépose la carte de champ là où vous la relâchez — utile pour insérer en milieu de grille. |

Le champ ajouté devient la carte sélectionnée ; l'Inspecteur bascule sur ses propriétés. Mettre `colspan` pour l'élargir (la grille fait par défaut 2 colonnes ; un champ `colspan = 2` remplit la ligne).

### Étape 3 — Régler les propriétés du champ

Dans l'Inspecteur :

| Champ | Rôle |
|---|---|
| **`dd`** | Entrée de dictionnaire dont le champ hérite. Par défaut le nom de la colonne à l'ajout. |
| **`colspan`** | Combien de cellules de grille le champ occupe. Par défaut 1. |
| **`required`** / **`hidden`** / **`disabled`** | Surcharges par dialogue — laisser vide pour hériter de l'indication de colonne (voir [Colonnes](./columns.md)). |
| **Liaisons de paramètres lookup** | Liaisons `:placeholder` supplémentaires pour un champ `LOOKUP`. Chaque liaison est `{param: <placeholder sur la requête de recherche>, source: <champ sur ce dialogue>}`. Le cas classique : un sélecteur de rôle restreint par l'identifiant d'application provenant d'un autre champ. |
| **Règles conditionnelles** | `visible_when` / `required_when` / `disabled_when` — voir [Champs conditionnels](./conditional-fields.md). |

### Étape 4 — Ajouter des onglets

Cliquer sur **＋ Onglet** au-dessus du canevas. Le nouvel onglet est vide ; y glisser des champs depuis la Palette. Patrons d'onglets courants :

| Nom d'onglet | Contenu |
|---|---|
| **Général** | Identité + champs les plus utilisés. |
| **Audit** | Créé le, créé par, mis à jour le, mis à jour par — souvent `hidden_on_add` pour les masquer à l'insertion. |
| **Notes** | Champs en texte libre. |
| **Adresse** | Un groupe de champs liés (rue, ville, code postal, pays). |

Deux indicateurs sur chaque onglet contrôlent la visibilité par mode :

| Indicateur | Effet |
|---|---|
| **`hide_on_add`** | L'onglet disparaît à l'ajout d'une nouvelle ligne. |
| **`hide_on_edit`** | L'onglet disparaît à la modification d'une ligne existante. |

### Étape 5 — Réorganiser les champs

Glisser une carte de champ dans le même onglet pour la réorganiser. Glisser vers un onglet différent pour la déplacer entre onglets. Le glisser est natif HTML5 — la cible de dépôt se met en évidence au survol. Quand le glisser est malaisé, sélectionnez le champ et utilisez le sélecteur **Onglet** de l'Inspecteur pour le déplacer vers un autre onglet de formulaire — le champ se pose à la fin de l'onglet cible et reste sélectionné.

### Étape 6 — Masquer un champ

Deux moyens :

| Méthode | Effet |
|---|---|
| Mettre `hidden = true` dans l'Inspecteur. | La carte passe dans le groupe **MASQUÉ** en bas du canevas. Le champ reste lié à l'enregistrement. |
| Supprimer le champ de l'onglet. | Le champ est retiré du dialogue entièrement. La colonne reste sur l'écran ; elle ne remonte simplement pas dans le formulaire. |

Le patron « masquer mais conserver » est utile pour les colonnes techniques que le dialogue doit soumettre (ex. un horodatage d'audit) mais que l'utilisateur ne doit pas voir.

---

## Les trois types d'onglet

Les onglets ne sont pas tous identiques. Trois types résident sous `dialog.tabs`, discriminés par le champ `type` :

| Type | Finalité |
|---|---|
| **`form`** *(défaut)* | Une grille de champs éditables — le cas décrit ci-dessus. |
| **`nested_form`** | Un formulaire d'enregistrement enfant intégré dans l'onglet. La clé primaire du parent se lie à une requête de lecture distincte ; si une ligne revient, le formulaire imbriqué la modifie, sinon il insère. Voir [Onglets imbriqués](./nested-tabs.md). |
| **`nested_table`** | Une TableView de lignes liées intégrée dans l'onglet. Affiche la grille d'un autre écran restreinte à la clé primaire du parent. Voir [Onglets imbriqués](./nested-tabs.md). |

Le constructeur visuel affiche la même barre d'onglets pour les trois — basculer sur un onglet `nested_form` remplace le canevas par l'éditeur de formulaire imbriqué de cet onglet ; `nested_table` affiche le sélecteur d'écran cible.

---

## Actions par onglet

Chaque onglet peut porter sa propre liste d'actions — des boutons qui se déclenchent depuis le pied de l'onglet. Patrons courants :

| Patron | Pourquoi par onglet |
|---|---|
| Un bouton *Recalculer* sur un onglet de calculs. | Déclenche une procédure stockée uniquement quand l'utilisateur regarde ces champs. |
| Un bouton *Tester le webhook* sur un onglet de notification. | N'a de sens que dans ce contexte. |
| Un bouton *Rafraîchir depuis la source* sur un onglet de synchronisation. | Récupère à nouveau les données affichées par l'onglet. |

L'éditeur d'action s'ouvre dans l'**Inspecteur** quand on clique sur la ligne d'une action — l'Inspecteur ne montre qu'une chose à la fois (un champ OU une action). Sélectionner un champ efface la sélection d'action et inversement.

Voir [Actions et cycle de vie](./actions-and-lifecycle.md) pour les types d'actions complets.

---

## Titre du dialogue

Le titre du dialogue figure en haut de la modale à son ouverture. Le définir une fois dans la section **Dialogue** de l'Inspecteur (sous les propriétés de champ quand aucun champ n'est sélectionné). Vide → retombe sur le `label` de l'écran, puis sur `id`.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Champ sur un onglet référençant une colonne absente de la requête de lecture. | Le dialogue affiche le champ mais la valeur est toujours vide, et l'enregistrement n'envoie aucune valeur pour lui. | Ajouter la colonne à la requête de lecture ou retirer le champ de l'onglet. |
| `lookup_param_binds` référence un champ qui n'est pas sur le même onglet. | La liaison se résout à NULL à la soumission. | Déplacer le champ source sur le même onglet ou utiliser une liaison entre onglets (le moteur lit l'état global du formulaire, mais la liste déroulante Param de l'inspecteur ne liste que les champs visibles sur l'onglet courant). |
| `colspan = 3` sur une grille à 2 colonnes. | Le champ déborde ; la mise en page casse. | Plafonner `colspan` à la valeur `cols` de l'onglet. |
| Deux champs avec le même `name` sur le même onglet. | L'enregistrement envoie deux valeurs pour la même colonne ; la seconde gagne. | Le `name` de chaque champ doit être unique au sein du dialogue. |
| `hide_on_add = true` ET `hide_on_edit = true`. | L'onglet n'apparaît jamais. | Désactiver l'un des deux ou supprimer l'onglet. |

---

## Étapes suivantes

- [Champs conditionnels](./conditional-fields.md) — faire apparaître / rendre obligatoire / verrouiller un champ uniquement sous certaines conditions de formulaire.
- [Actions et cycle de vie](./actions-and-lifecycle.md) — câbler on_load / on_save / on_cancel pour étendre le comportement du dialogue.
- [Onglets imbriqués](./nested-tabs.md) — intégrer un formulaire d'enregistrement enfant ou une grille de lignes liées.
