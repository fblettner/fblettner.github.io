---
title: Créer un écran à partir d'une requête
description: "Câbler une requête `_get` sur un nouvel écran Liberty Next — les étapes Ce qu'il est et Données du Concepteur d'écran parcourues champ par champ ; la grille apparaît, les modifications passent par les requêtes d'écriture."
keywords: [Liberty Framework, créer écran, requête de lecture, ScreensBuilder, ScreenEditor, étape Données, fiche]
---

# Créer un écran à partir d'une requête

Vous avez une requête `<base>_get` (et idéalement ses voisines `_put` / `_post` / `_delete`) — l'[Assistant CRUD](../queries/create-from-database.md) est le moyen le plus rapide de les produire. Vous câblez maintenant un écran par-dessus pour que les utilisateurs voient et modifient les lignes.

Cette page parcourt les étapes **Ce qu'il est** et **Données** du Concepteur d'écran. Colonnes, fiche, actions et hooks arrivent dans les pages suivantes.

---

## Étape 1 — Enregistrer l'application, si besoin

Sur **Liberty Next → Écrans → Écrans**, la barre des connecteurs liste chaque application (= connecteur) qui possède déjà au moins un écran. Si le connecteur qui doit recevoir l'écran n'y figure pas :

1. Cliquer sur **＋ Ajouter une portée**.
2. Sélectionner le connecteur dans la liste déroulante (seuls les connecteurs **sans** espace de nommage Écrans apparaissent — une fois enregistré, le connecteur devient une puce d'application).
3. La puce apparaît en haut ; la liste d'écrans en dessous est vide.

Si le connecteur est déjà une puce, il suffit de cliquer dessus.

---

## Étape 2 — Ajouter un écran

À droite de la barre des connecteurs, cliquer sur **＋ Ajouter un écran**. La page demande un identifiant d'écran — lettres, chiffres, traits de soulignement, débutant par une lettre. Conventions :

| Motif | Exemple |
|---|---|
| Reprendre le nom de base de la table. | `customers` pour un écran sur `customers_get`. |
| Reprendre l'objet JD Edwards. | `F0005` pour la table UDC JDE. |
| `<entité>_<finalité>` pour les écrans qui ne se mappent pas 1-1 sur une table. | `customer_balance_report`, `invoice_send_dialog`. |

L'identifiant est **stable** — c'est le segment d'URL (`/screen/<app>/<id>`), la clé de configuration (`[screens.<app>.<id>]`) et la cible des références entre fichiers. Le renommage ultérieur passe par le bouton *Renommer* de la carte, qui propage le changement à travers les écrans / menus / dictionnaire.

L'écran vide apparaît dans la liste ; cliquer dessus pour ouvrir le **Concepteur d'écran**.

---

## Étape 3 — Ce qu'il est

Le concepteur s'ouvre sur sa première étape, **Ce qu'il est** : l'identité, la surcharge du connecteur et les indicateurs de comportement. Les champs forment une seule liste qui défile, dans cet ordre ; une liste déroulante indique le connecteur de l'écran, celui de l'application par défaut. Sous le libellé (**Label**) et sous la description, **Label translations** et **Description translations** les donnent dans les autres langues : une ligne par langue, **+ ajouter** pour en ajouter une.

<svg viewBox="0 0 1320 606" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="566" rx="14" fill="url(#cfq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran ·</text>
  <text x="376.4" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1017" y="32" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Customers</text>
  <line x1="367.0" y1="106" x2="380.0" y2="106" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrement</text>
  <line x1="510.0" y1="106" x2="523.0" y2="106" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">4 filtre(s)</text>
  <line x1="653.0" y1="106" x2="666.0" y2="106" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">1 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">4 champ(s)</text>
  <line x1="796.0" y1="106" x2="809.0" y2="106" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">0 action(s) de barre d'outils</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">2 dans le menu de ligne · 0…</text>
  <line x1="939.0" y1="106" x2="952.0" y2="106" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfq-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <text x="238" y="152" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Indicateurs de comportement pour cet écran — chargement auto, table d'audit, plafond de lignes, colonnes clés.</text>
  <text x="238" y="172" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="238" y="177" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="191.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm</text>
  <text x="238" y="215" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="238" y="220" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="234.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="238" y="254" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Short label shown in the menu / list.</text>
  <text x="238" y="270" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL TRANSLATIONS</text>
  <rect x="238" y="275" width="303" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="289.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="247" y="289.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="262.664" y="289.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Français</text>
  <text x="529" y="289.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="547" y="275" width="507" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="557" y="289.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="1060" y="275" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1071.0" y="289.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="304" width="59" height="17" rx="4" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="247" y="316" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <text x="238" y="333" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The label per language (the tab, the list of screens).</text>
  <text x="238" y="351" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="238" y="356" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="370.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customers — codes from the sales, names completed by hand</text>
  <text x="238" y="390" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Longer description shown as the page title.</text>
  <text x="238" y="406" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION TRANSLATIONS</text>
  <rect x="238" y="411" width="303" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="425.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="247" y="425.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="262.664" y="425.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Français</text>
  <text x="529" y="425.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="547" y="411" width="507" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="557" y="425.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Clients — codes issus des ventes, noms complétés à la main</text>
  <rect x="1060" y="411" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1071.0" y="425.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="440" width="59" height="17" rx="4" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="247" y="452" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <text x="238" y="469" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The description per language (the page's heading).</text>
  <text x="238" y="487" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUDIT TABLE</text>
  <rect x="238" y="492" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="506.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">e.g. AUD_USERS — leave blank to disable</text>
  <text x="660.0" y="532" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <line x1="220" y1="544" x2="1100" y2="544" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1002" y="554" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="568.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="925" y="554" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="959.5" y="568.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">S'ouvre sur Ce qu'il est</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identité et comportement</text>
  <line x1="200" y1="99.0" x2="258" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellé</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le menu, la liste des écrans</text>
  <line x1="200" y1="237.0" x2="238" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="20" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dans chaque langue</text>
  <text x="30" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'onglet et la liste des écrans</text>
  <line x1="200" y1="309.0" x2="238" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="1120" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le libellé en français</text>
  <text x="1130" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ ajouter : une autre langue</text>
  <line x1="1120" y1="309.0" x2="1052" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Titre par langue</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affiché en haut de la page</text>
  <line x1="200" y1="445.0" x2="238" y2="438" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
  <rect x="1120" y="484" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="499" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table d'audit</text>
  <text x="1130" y="512" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis les options de comportement</text>
  <line x1="1120" y1="501.0" x2="1082" y2="500" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfq-arrow)"/>
</svg>

### Champ par champ

| Champ | Notes |
|---|---|
| **Connecteur** | Par défaut *Utiliser le connecteur de l'application — \<app>*. À définir explicitement uniquement quand l'écran lit/écrit via un connecteur **différent** de celui qui donne son nom à l'application (rare mais légitime — ex. une application `crm` qui lit ses tables de reporting via un connecteur `reporting`). |
| **Libellé** | Texte court affiché dans les menus et listes. Retombe sur `description`, puis `id`. |
| **Label translations** | Le libellé dans chacune des autres langues : une langue choisie dans la liste (`fr Français`), puis son texte. Il nomme l'onglet de l'écran et sa ligne dans la liste des écrans pour les utilisateurs de cette langue. Sans ligne pour une langue, le libellé tel qu'écrit est affiché. |
| **Description** | Texte plus long affiché comme titre de page. |
| **Description translations** | La description dans chacune des autres langues : le titre de la page pour les utilisateurs de cette langue. |
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

## Étape 4 — Données

Cliquer sur l'étape **Données**. C'est là que l'écran apprend quelles requêtes déclencher en lecture et à chaque écriture.

<svg viewBox="0 0 1320 594" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfqd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfqd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfqd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfqd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="558" rx="14" fill="url(#cfqd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran ·</text>
  <text x="367.648" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1011" y="32" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="981" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="993.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cfqd-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <text x="238" y="152" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Références aux requêtes CRUD — la requête de lecture est obligatoire ; les autres servent au dialogue et à l'éditeur en grille.</text>
  <text x="238" y="174" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REMPLIR DEPUIS UNE TABLE</text>
  <rect x="238" y="179" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="193.3" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Choisir…</text>
  <text x="1070" y="193.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="238" y="218" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE DE LECTURE ∗</text>
  <rect x="238" y="223" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="237.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_get</text>
  <text x="327.54" y="237.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="980" y="237.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="223" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="237.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="223" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="237.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="223" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="237.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="238" y="262" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENREGISTRE PAR</text>
  <rect x="238" y="267" width="844" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1070" y="281.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="238" y="301" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Un autre connecteur dont les points d'accès enregistrent les lignes que cet écran lit.</text>
  <text x="238" y="314" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE DE MISE À JOUR</text>
  <rect x="238" y="319" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="333.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_put</text>
  <text x="327.54" y="333.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="980" y="333.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="319" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="333.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="319" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="333.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="319" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="333.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="238" y="358" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE D'INSERTION</text>
  <rect x="238" y="363" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="377.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_post</text>
  <text x="333.12" y="377.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="980" y="377.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="363" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="377.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="363" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="377.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="363" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="377.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="238" y="402" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE DE SUPPRESSION</text>
  <rect x="238" y="407" width="754" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="421.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customers_delete</text>
  <text x="344.28" y="421.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="980" y="421.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="998" y="407" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="421.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1028" y="407" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="421.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1058" y="407" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1070.0" y="421.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="238" y="442" width="844" height="20" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="660.0" y="455.5" fill="#64748b" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Toutes les colonnes de la requête sont ajoutées</text>
  <line x1="238" y1="474" x2="1082" y2="474" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="492" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Groupes de colonnes — des tables liées 1:1 dont les colonnes se modifient en ligne et s'écrivent à l'enregistrement.</text>
  <rect x="238" y="502" width="178" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="327.0" y="516.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un groupe de colonnes</text>
  <line x1="220" y1="536" x2="1100" y2="536" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="546" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1036.0" y="560.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="546" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="560.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="173" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="188" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remplir depuis une table</text>
  <text x="30" y="201" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les quatre requêtes d'un coup</text>
  <line x1="200" y1="190.0" x2="238" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="20" y="217" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="232" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Requête de lecture</text>
  <text x="30" y="245" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la seule obligatoire</text>
  <line x1="200" y1="234.0" x2="238" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="20" y="261" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="276" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistre par</text>
  <text x="30" y="289" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lu en SQL, enregistré par API</text>
  <line x1="200" y1="278.0" x2="238" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="20" y="357" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="372" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Requêtes d'écriture</text>
  <text x="30" y="385" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mise à jour · insertion · suppression</text>
  <line x1="200" y1="374.0" x2="238" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="1120" y="204" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="219" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · cloner · créer</text>
  <text x="1130" y="232" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la requête, sans quitter</text>
  <line x1="1120" y1="221.0" x2="1030" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="1120" y="435" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="450" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer les colonnes</text>
  <text x="1130" y="463" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">celles de la requête de lecture</text>
  <line x1="1120" y1="452.0" x2="900" y2="452" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
  <rect x="1120" y="503" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="518" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupes de colonnes</text>
  <text x="1130" y="531" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables liées un à un</text>
  <line x1="1120" y1="520.0" x2="420" y2="513" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfqd-arrow)"/>
</svg>

| Champ | Obligatoire | Notes |
|---|---|---|
| **Requête de lecture** | Oui | Le SELECT qui remplit la grille. La liste déroulante s'alimente depuis la liste des requêtes du connecteur sélectionné. |
| **Requête de mise à jour** | Non | La requête en écriture déclenchée par l'*Enregistrer* du dialogue en mode édition et le bouton *Enregistrer* de la grille. Convention : `<base>_put`. |
| **Requête d'insertion** | Non | La requête en écriture déclenchée par l'*Enregistrer* du dialogue en mode ajout. Convention : `<base>_post`. |
| **Requête de suppression** | Non | La requête en écriture déclenchée par le bouton *Supprimer* du dialogue (ou la suppression par ligne dans la grille). Convention : `<base>_delete`. |

À côté de chaque requête, trois boutons : le crayon (✎) ouvre la requête dans son propre éditeur — une retouche rapide ne demande pas de quitter le Concepteur d'écran, et cet éditeur enregistre directement dans `connectors.toml` ; le deuxième la clone sous un autre nom ; **+** en crée une nouvelle.

Trois autres réglages figurent sur cette étape :

| Réglage | Rôle |
|---|---|
| **Remplir depuis une table** | Choisit une table et remplit d'un coup les quatre requêtes avec ses requêtes CRUD. |
| **Enregistre par** | Un autre connecteur dont les points d'accès enregistrent les lignes que l'écran lit — voir [Un écran sur un point d'accès d'API](./api-screens.md#saves-through). |
| **Importer N colonne(s) depuis la requête de lecture** | Ajoute à la grille les colonnes que la requête de lecture renvoie et que l'écran ne liste pas encore ; le bouton indique *Toutes les colonnes de la requête sont ajoutées* quand il n'en reste aucune. |

Dessous, **Ajouter un groupe de colonnes** déclare une table liée un à un dont les colonnes se modifient en ligne et s'écrivent à l'enregistrement ; chaque colonne liée reçoit ensuite ce groupe (son réglage **Group**, dans l'onglet **General** de la colonne).

### Sélectionner depuis la sortie de l'Assistant CRUD

Quand les quatre requêtes ont été générées par l'[Assistant CRUD](../queries/create-from-database.md), elles sont déjà dans la liste déroulante — `customers_get`, `customers_put`, `customers_post`, `customers_delete`. Les câbler dans l'ordre et l'écran a un CRUD complet.

Pour les écrans en lecture seule (rapports, tableaux de bord, vues d'audit), laisser les trois champs d'écriture vides. La grille fonctionne quand même ; le dialogue (s'il existe) est en lecture seule ; les boutons *＋ Ajouter* / *🗑 Supprimer* disparaissent.

---

## Étape 5 — Enregistrer et voir le résultat

Cliquer sur **Enregistrer** en bas à droite du concepteur. L'écran est enregistré, le rechargement à chaud se déclenche, et :

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
