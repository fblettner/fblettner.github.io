---
title: Créer un écran à partir d'une requête
description: "Câbler une requête `_get` sur un nouvel écran — l'onglet Général et l'onglet Requêtes parcourus champ par champ ; la grille apparaît, les modifications passent par les requêtes d'écriture."
keywords: [Liberty Framework, créer écran, requête de lecture, ScreensBuilder, ScreenEditor, onglet Général, onglet Requêtes]
---

# Créer un écran à partir d'une requête

Vous avez une requête `<base>_get` (et idéalement ses voisines `_put` / `_post` / `_delete`) — l'[Assistant CRUD](../queries/create-from-database.md) est le moyen le plus rapide de les produire. Vous câblez maintenant un écran par-dessus pour que les utilisateurs voient et modifient les lignes.

Cette page parcourt les onglets **Général** et **Requêtes** du Concepteur d'écran. Colonnes, dialogue, actions et hooks arrivent dans les pages suivantes.

---

## Étape 1 — Enregistrer l'application, si besoin

Sur **Paramètres → Écrans**, la barre de portée liste chaque application (= connecteur) qui possède déjà au moins un écran. Si le connecteur sur lequel vous voulez ajouter un écran n'y figure pas :

1. Cliquer sur **＋ Ajouter des écrans pour un connecteur**.
2. Sélectionner le connecteur dans la liste déroulante (seuls les connecteurs **sans** espace de nommage Écrans apparaissent — une fois enregistré, le connecteur devient une puce d'application).
3. La puce apparaît en haut ; la liste d'écrans en dessous est vide.

Si le connecteur est déjà une puce, il suffit de cliquer dessus.

---

## Étape 2 — Ajouter un écran

Sous la liste vide, cliquer sur le bouton **＋ Ajouter un écran**. La page demande un identifiant d'écran — lettres, chiffres, traits de soulignement, débutant par une lettre. Conventions :

| Motif | Exemple |
|---|---|
| Reprendre le nom de base de la table. | `customers` pour un écran sur `customers_get`. |
| Reprendre l'objet JD Edwards. | `F0005` pour la table UDC JDE. |
| `<entité>_<finalité>` pour les écrans qui ne se mappent pas 1-1 sur une table. | `customer_balance_report`, `invoice_send_dialog`. |

L'identifiant est **stable** — c'est le segment d'URL (`/screen/<app>/<id>`), la clé de dictionnaire (`[screens.<app>.<id>]`) et la cible des références entre fichiers. Le renommage ultérieur passe par le bouton *Renommer* de la carte, qui propage le changement à travers les écrans / menus / dictionnaire.

L'écran vide apparaît dans la liste ; cliquer dessus pour ouvrir le **Concepteur d'écran**.

---

## Étape 3 — L'onglet Général

Le concepteur s'ouvre sur **Général**. Cet onglet est l'endroit où l'on câble l'identité, la surcharge du connecteur et les indicateurs de comportement.

<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="gen-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="460" rx="14" fill="url(#gen-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · crm.customers · Général</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Connecteur</text>
  <rect x="200" y="78" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="93" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">Utiliser le connecteur de l'application — crm ▾</text>

  <text x="40" y="118" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Libellé</text>
  <rect x="200" y="108" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="123" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Clients</text>

  <text x="40" y="148" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="200" y="138" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="153" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Portefeuille clients — lecture-écriture</text>

  <text x="40" y="178" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">auto_load</text>
  <rect x="200" y="168" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="183" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="182" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">exécute la requête de lecture dès l'ouverture de l'écran</text>

  <text x="40" y="208" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">editable</text>
  <rect x="200" y="198" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="213" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="212" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">autorise l'édition de cellules dans la grille</text>

  <text x="40" y="238" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">uploadable</text>
  <rect x="200" y="228" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="234" y="242" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">affiche le bouton d'import Excel / CSV</text>

  <text x="40" y="268" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">audit_table</text>
  <rect x="200" y="258" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="273" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">ex. AUD_USERS — laisser vide pour désactiver</text>

  <text x="40" y="298" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">max_rows</text>
  <rect x="200" y="288" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="303" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">(défaut du connecteur)</text>

  <text x="40" y="328" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">key_columns</text>
  <rect x="200" y="318" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="333" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>

  <text x="40" y="358" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">initial_group_by</text>
  <rect x="200" y="348" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="363" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">REGION</text>

  <line x1="20" y1="384" x2="980" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="408" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND UNE LIGNE EST CLIQUÉE</text>

  <text x="40" y="436" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Comportement</text>
  <rect x="200" y="426" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="441" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Ne rien faire (ou retomber sur le dialogue propre à l'écran) ▾</text>

  <text x="40" y="466" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Autres options : Ouvrir un écran voisin comme boîte de dialogue · Ouvrir une route dans un nouvel onglet du navigateur</text>
</svg>

### Champ par champ

| Champ | Notes |
|---|---|
| **Connecteur** | Par défaut *Utiliser le connecteur de l'application — \<app>*. À définir explicitement uniquement quand l'écran lit/écrit via un connecteur **différent** de celui qui donne son nom à l'application (rare mais légitime — ex. une application `crm` qui lit ses tables de reporting via un connecteur `reporting`). |
| **Libellé** | Texte court affiché dans les menus et listes. Retombe sur `description`, puis `id`. |
| **Description** | Texte plus long affiché comme titre de page. |
| **auto_load** | Quand activé, la grille exécute la requête de lecture dès l'ouverture de l'écran. Quand désactivé, l'utilisateur clique sur *Exécuter* pour récupérer les données. À désactiver uniquement pour les écrans qui exigent des paramètres de filtre ou pour des requêtes véritablement coûteuses. |
| **editable** | Quand activé, la grille gère l'édition de cellules en ligne — cliquer une cellule, taper, Entrée ; *Enregistrer* valide via `update_query`. Quand désactivé, l'utilisateur édite uniquement via le dialogue. |
| **uploadable** | Quand activé, un bouton *Importer* Excel / CSV apparaît dans la barre d'outils de la grille. Nécessite `key_columns` pour savoir quelles lignes sont des mises à jour et lesquelles sont des insertions. |
| **audit_table** | Définit un nom de table (convention : `AUD_<TABLE>`) pour y dupliquer chaque écriture réussie. Chaque ligne reçoit `AUD_ACTION` (INSERT/UPDATE/DELETE), `AUD_USER` (le nom de l'appelant), `AUD_DATE` (horodatage serveur). Vide = pas d'audit. |
| **max_rows** | Plafond sur le résultat de la requête de lecture. Vide utilise la valeur par défaut du connecteur / pool (typiquement 1000). |
| **key_columns** | Colonnes qui identifient une ligne de façon unique — pilote la correspondance mise à jour-ou-insertion de l'import Excel et le verrouillage du mode édition du dialogue. Laisser vide pour dériver des colonnes dont l'indicateur `key` est activé (le chemin recommandé — voir [Colonnes](./columns.md)). |
| **initial_group_by** | Un ou plusieurs noms de colonnes — la grille regroupe par celles-ci à la première ouverture. L'utilisateur peut dégrouper / regrouper depuis le contrôle *Grouper*. |
| **treeview** | À renseigner quand les lignes forment une hiérarchie parent/enfant — ex. arbres de menus, organigrammes. Ajoute une bascule *Arborescence* aux côtés de *Tableau* / *Graphique*. Voir [Concepts → Écrans](./overview.md) pour la référence complète. |
| **chart_id** | Un identifiant de graphique enregistré (depuis `[charts.*]`) — pré-remplit la bascule *Graphique*. Vide utilise un défaut local à la session. |

### Quand une ligne est cliquée

La liste déroulante propose un des trois comportements :

| Mode | Effet |
|---|---|
| **Ne rien faire (ou retomber sur le dialogue propre à l'écran)** | Défaut. Si l'écran a son propre `dialog`, cliquer sur une ligne l'ouvre en mode édition. Sinon le clic n'a pas d'effet. |
| **Ouvrir un écran voisin comme boîte de dialogue** | Les colonnes de la ligne se lient à la requête de lecture d'un autre écran (on choisit la cible + les liaisons). Le dialogue de l'écran voisin s'ouvre en modale. Utile pour le maître-détail sans dupliquer le balisage du dialogue. |
| **Ouvrir une route dans un nouvel onglet du navigateur** | Une route SPA — échappatoire pour les pages React écrites à la main. Utiliser des marqueurs `{column_name}` pour interpoler les colonnes de la ligne (encodées URL). Exemple : `/nomaflow/runs/{id}`. |

Quand *route* et *Ouvrir un écran voisin* sont tous deux renseignés, **la route gagne** — la route explicite porte une intention plus spécifique.

---

## Étape 4 — L'onglet Requêtes

Basculer sur **Requêtes**. C'est là que l'écran apprend quelles requêtes déclencher en lecture et à chaque écriture.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="que-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#que-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · crm.customers · Requêtes</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Requête de lecture *</text>
  <rect x="200" y="78" width="500" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="210" y="93" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_get ▾</text>
  <rect x="708" y="78" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="93" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="138" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Requête de mise à jour</text>
  <rect x="200" y="128" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="143" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_put ▾</text>
  <rect x="708" y="128" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="143" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="178" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Requête d'insertion</text>
  <rect x="200" y="168" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="183" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_post ▾</text>
  <rect x="708" y="168" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="183" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="218" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Requête de suppression</text>
  <rect x="200" y="208" width="500" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="223" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers_delete ▾</text>
  <rect x="708" y="208" width="22" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="719" y="223" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>

  <text x="40" y="268" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Le bouton ✎ ouvre la requête dans son propre éditeur — l'enregistrement valide jusqu'à connectors.toml sans quitter ce concepteur.</text>
</svg>

| Champ | Obligatoire | Notes |
|---|---|---|
| **Requête de lecture** | Oui | Le SELECT qui remplit la grille. La liste déroulante s'alimente depuis la liste des requêtes du connecteur sélectionné. |
| **Requête de mise à jour** | Non | La requête en écriture déclenchée par l'*Enregistrer* du dialogue en mode édition et le bouton *Enregistrer* de la grille. Convention : `<base>_put`. |
| **Requête d'insertion** | Non | La requête en écriture déclenchée par l'*Enregistrer* du dialogue en mode ajout. Convention : `<base>_post`. |
| **Requête de suppression** | Non | La requête en écriture déclenchée par le bouton *Supprimer* du dialogue (ou la suppression par ligne dans la grille). Convention : `<base>_delete`. |

L'icône crayon (✎) sur chaque ligne ouvre la requête dans une modale latérale — les retouches rapides à une requête ne demandent pas de quitter le Concepteur d'écran. La modale enregistre directement dans `connectors.toml` ; le rechargement se fait automatiquement.

### Sélectionner depuis la sortie de l'Assistant CRUD

Si vous avez généré les quatre requêtes via l'[Assistant CRUD](../queries/create-from-database.md), elles sont déjà dans la liste déroulante — `customers_get`, `customers_put`, `customers_post`, `customers_delete`. Les câbler dans l'ordre et l'écran a un CRUD complet.

Pour les écrans en lecture seule (rapports, tableaux de bord, vues d'audit), laisser les trois champs d'écriture vides. La grille fonctionne quand même ; le dialogue (s'il existe) est en lecture seule ; les boutons *＋ Ajouter* / *🗑 Supprimer* disparaissent.

---

## Étape 5 — Enregistrer et voir le résultat

Cliquer sur **Enregistrer** dans l'en-tête de la modale. L'écran est enregistré, le rechargement à chaud se déclenche, et :

- Une nouvelle entrée de menu pour cet écran peut être ajoutée (voir la section **Menus** à venir).
- L'écran est accessible directement à `/screen/<app>/<id>`.
- Un utilisateur disposant de la permission `sql:<connector>:<read_query>` voit la grille.

---

## Pièges courants à ce stade

| Erreur | Symptôme | Correction |
|---|---|---|
| `read_query` non renseigné. | L'enregistrement échoue à la validation. | Sélectionnez-en une — la requête de lecture est la seule requête obligatoire. |
| `update_query` renseigné mais `key_columns` vide ET aucun indicateur `key` sur une colonne. | L'*Enregistrer* du dialogue en mode édition exécute l'UPDATE sans clause `:NAME_ORIGINAL` et met à jour la mauvaise ligne. | Renseignez `key_columns` ou marquez les colonnes clés dans l'onglet Colonnes. |
| `editable = true` mais pas de `update_query`. | La grille affiche l'éditeur de cellule mais le bouton *Enregistrer* échoue. | Câblez la `update_query`. |
| `uploadable = true` mais pas de `key_columns`. | L'importeur ne peut pas distinguer mise à jour et insertion. | Renseignez `key_columns`. |
| Surcharge de connecteur pointant sur un pool sur lequel l'utilisateur n'a pas de permission. | Les utilisateurs connectés obtiennent une grille vide sans erreur visible. | Changez la surcharge ou accordez la permission `sql:` adéquate à l'utilisateur. |
| Même identifiant d'écran réutilisé entre applications. | Le lien croisé `screen:<app>:<id>` est par application, donc les collisions entre applications passent. Mais au sein de la même application, le validateur refuse les doublons. | Choisir des identifiants uniques par application. |

---

## Étapes suivantes

- [Colonnes](./columns.md) — configurer chaque colonne une seule fois pour la grille et le dialogue.
- [Constructeur de dialogue](./dialog-builder.md) — le concepteur visuel pour le formulaire d'ajout/modification.
- [Actions et cycle de vie](./actions-and-lifecycle.md) — boutons de barre d'outils, menus contextuels, hooks on_load / on_save / on_insert.
