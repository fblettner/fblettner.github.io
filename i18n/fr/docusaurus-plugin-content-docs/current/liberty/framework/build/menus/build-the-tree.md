---
title: Construire l'arbre
description: "L'éditeur d'arbre — ajouter dossiers et éléments, glisser pour réordonner, indenter/désindenter pour reparenter, dupliquer, renommer, rechercher les usages. Le bouton exact et le comportement de chaque action."
keywords: [Liberty Framework, arbre de menu, dossier, feuille, glisser, réordonner, indenter, désindenter, renommer, dupliquer, rechercher les usages]
---

# Construire l'arbre

Quand un connecteur a un menu attaché (voir [Transformer un connecteur en application](./make-connector-an-app.md)), l'éditeur d'arbre à droite sert à composer la navigation : des dossiers qui regroupent, des feuilles qui ouvrent des écrans, des endpoints, des tableaux de bord ou des routes.

Le modèle est une **liste plate d'éléments reliés par `parent`** — mais l'éditeur permet de la manipuler comme un arbre. Les opérations de glisser-déposer modifient l'ordre plat sous-jacent ; l'arbre affiché reflète toujours ce qui est enregistré.

---

## La barre d'outils

Dans l'en-tête de la page :

| Bouton | Rôle |
|---|---|
| **＋ Dossier** | Ajoute un dossier au premier niveau. Le dossier est le seul type d'élément sans `type`. |
| **＋ Élément** | Ajoute une feuille au premier niveau — son type et sa cible se règlent dans le panneau de droite. Pour l'ajouter sous un dossier, utiliser le **＋** de la ligne (*Ajouter un enfant*). |
| **Abandonner** / **Enregistrer** | Annulent ou écrivent tout le menu. |
| **Recharger la config** | Relit les fichiers de configuration. |

Sur le panneau de l'entrée choisie, à côté de son type :

| Bouton | Rôle |
|---|---|
| **Cloner** | Duplique l'entrée (sous-arborescence incluse). Demande un nouvel identifiant. |
| **Rechercher les usages** | Liste chaque endroit où cette entrée de menu est référencée (par exemple le champ `home` d'un autre connecteur). Utile avant un renommage ou une suppression. |
| **Rechercher les dépendances** | Liste ce dont l'entrée dépend — son connecteur et sa cible (un écran, une requête, un point d'accès, un tableau de bord ou une tâche) — et, de proche en proche, ce dont ceux-ci dépendent. |

---

## Les lignes de l'arbre

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mbt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mbt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mbt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mbt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="400" y="20" width="520" height="300" rx="12" fill="url(#mbt-g-card)" stroke="#1f2937" strokeWidth="1"/>
  <text x="420" y="46" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="439.876" y="46" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">· 9 éléments</text>
  <rect x="420" y="54" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="429" y="68.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ filtrer 9…</text>
  <text x="442" y="99" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="99" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▣</text>
  <text x="468" y="99" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="898" y="99" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">overview</text>
  <text x="442" y="127" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="127" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▭</text>
  <text x="468" y="127" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="898" y="127" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">explorer</text>
  <text x="430" y="155" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="442" y="155" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="155" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="468" y="155" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Ventes</text>
  <text x="898" y="155" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">sales</text>
  <text x="458" y="183" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="470" y="183" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="484" y="183" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="898" y="183" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">customers</text>
  <line x1="456" y1="191" x2="896" y2="191" stroke="#4a9eff" strokeWidth="2"/>
  <rect x="418" y="196" width="484" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458" y="211" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="470" y="211" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="484" y="211" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Affaires</text>
  <rect x="750" y="199" width="150" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="763" y="211.5" fill="#475569" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <text x="788" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <text x="813" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <text x="838" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <text x="863" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="888" y="211.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="458" y="239" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="470" y="239" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="484" y="239" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Commandes ouvertes</text>
  <text x="898" y="239" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">open_orders</text>
  <text x="430" y="267" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="442" y="267" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="267" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="468" y="267" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Rapports</text>
  <text x="898" y="267" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">reports</text>
  <text x="430" y="295" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="442" y="295" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="454" y="295" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="468" y="295" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Import</text>
  <text x="898" y="295" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">import</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par id ou libellé ; sans glisser</text>
  <line x1="200" y1="57.0" x2="422" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dossier ▾ ouvert / › fermé</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">double-clic pour basculer</text>
  <line x1="200" y1="137.0" x2="430" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne de dépôt</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où la ligne glissée arrive</text>
  <line x1="200" y1="207.0" x2="460" y2="191" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Poignée ⠿</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">glisser la ligne (et sa branche)</text>
  <line x1="200" y1="277.0" x2="452" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="1120" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Id, en chasse fixe</text>
  <text x="1130" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplacé par les actions au survol</text>
  <line x1="1120" y1="67.0" x2="896" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="1120" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">↑ ↓ → ←</text>
  <text x="1130" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déplacer, indenter, désindenter</text>
  <line x1="1120" y1="157.0" x2="800" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ enfant · 🗑 supprimer</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un dossier part avec sa branche</text>
  <line x1="1120" y1="237.0" x2="885" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mbt-arrow)"/>
</svg>

Chaque ligne porte :

| Élément | Ce qu'il montre |
|---|---|
| Indentation | Profondeur visuelle — chaque niveau ajoute 16 pixels. |
| Chevron | ▾ pour un dossier déplié, ▸ pour replié ; un double clic sur la ligne du dossier le bascule aussi. |
| Icône | Le type de l'entrée : un dossier ouvert ou fermé, un écran, un tableau de bord, une tâche, une requête, un point d'accès, une page. L'`icon` propre à l'élément est celle que dessine le menu latéral de l'application. |
| Libellé | Le champ `label`. |
| Id | Monospace, atténué, après le libellé. S'estompe au survol pour laisser place aux actions. |
| Actions par ligne (au survol) | *Monter* (↑), *Descendre* (↓), *Indenter* (→), *Désindenter* (←), *Ajouter un enfant* (＋), *Supprimer* (🗑). |

Cliquer n'importe où sur la ligne pour **sélectionner** l'élément — l'Inspecteur à droite charge son formulaire complet.

---

## Glisser-déposer \{#drag\}

Une ligne se fait glisser sur une autre : **au-dessus**, **au-dessous**, ou **à l'intérieur** si c'est un dossier — avec tout ce qu'elle contient. Un trait ou une surbrillance montre l'endroit où elle sera déposée. Le glisser-déposer est désactivé tant que l'arbre est filtré.

Chaque ligne porte l'icône de ce qu'elle ouvre — dossier, écran, tableau de bord, traitement, requête, point d'accès, page. L'arbre et l'entrée choisie forment deux panneaux côte à côte ; les actions de l'entrée — **Cloner**, **Rechercher les usages**, **Rechercher les dépendances** — figurent sur son panneau, et **Dossier**, **Élément**, **Abandonner** et **Enregistrer** dans l'en-tête de la page.

---

## Les actions par ligne

Les icônes qui apparaissent au survol, de gauche à droite :

| Action | Rôle |
|---|---|
| **↑ Monter** | Échange avec le frère précédent. Désactivé quand l'élément est le premier enfant de son parent. Déplace toute la sous-arborescence ensemble — les liens enfants suivent. |
| **↓ Descendre** | Échange avec le frère suivant. Désactivé à la fin. |
| **→ Indenter** | Reparente l'élément sous le frère précédent. Le frère précédent devient le nouveau parent. Désactivé quand il n'y a pas de frère précédent. |
| **← Désindenter** | Remonte l'élément d'un niveau — son grand-parent devient le nouveau parent. Désactivé quand l'élément est déjà au premier niveau. |
| **＋ Ajouter un enfant** | Ajoute un élément en enfant de cette ligne. |
| **🗑 Supprimer** | Retire l'élément — avec toute sa sous-arborescence, après confirmation, quand il a des enfants. |

Les icônes sont volontairement compactes et n'apparaissent qu'au survol — l'arbre reste lisible en régime stationnaire.

---

## Construire un arbre depuis zéro

Un flux typique pour le menu d'une nouvelle application :

### Étape 1 — Ajouter les dossiers de premier niveau

Cliquer **＋ Dossier** pour ajouter un dossier. L'`id` par défaut ressemble à `folder_1` ; l'Inspecteur permet de le renommer.

| Schéma de premier niveau | Exemples |
|---|---|
| Un dossier par domaine. | `security`, `pipeline`, `reports`, `admin`. |
| Un dossier par phase de processus. | `setup`, `daily-ops`, `month-end`, `audit`. |
| Un dossier par audience. | `for-managers`, `for-operators`, `for-analysts`. |

Choisir la convention qui correspond à la façon dont les utilisateurs pensent — pas à la façon dont les données sont structurées.

### Étape 2 — Ajouter les feuilles sous chaque dossier

Sur la ligne du dossier, cliquer sur **＋ Ajouter un enfant**. Le nouvel élément apparaît sous le dossier. Définir son `type`, `connector`, `target` dans l'Inspecteur — voir [Types d'éléments](./item-types.md).

### Étape 3 — Réorganiser

Utiliser ↑ / ↓ sur chaque ligne pour mettre les éléments dans l'ordre que l'utilisateur doit voir. L'ordre dans l'arbre = l'ordre dans la barre latérale rendue.

### Étape 4 — Imbriquer si nécessaire

Utiliser → (Indenter) pour placer un élément sous le frère précédent — utile quand un dossier devient long et qu'il faut un sous-dossier. Utiliser ← (Désindenter) pour le ressortir.

### Étape 5 — Enregistrer

Le bouton **Enregistrer** au niveau de la page valide tout le menu (ids uniques, parents existants, pas de cycles) et écrit `menus.toml`. Le rechargement à chaud prend les modifications en compte ; le prochain chargement de page de l'utilisateur affiche le nouvel arbre.

---

## Le formulaire de l'Inspecteur

Cliquer une ligne → le panneau de droite charge le formulaire de l'entrée, en trois onglets — **General** (`id`, `label`, `icon`, `type`, `connector`, `target`), **Advanced** (`parent`, `params`, `roles`, `override`) et **Translations** (`l`). Les champs s'adaptent au `type` :

| Champ | Toujours affiché | Notes |
|---|---|---|
| `id` | Oui | Renommer ici met à jour automatiquement la référence `parent` de chaque enfant. Les références entre fichiers (par exemple le champ `home` d'un autre connecteur qui pointe vers cet élément) demandent une correction manuelle — utiliser *Rechercher les usages* d'abord. |
| `parent` | Oui | Un SearchSelect alimenté avec les candidats valides. Les actions d'indentation/désindentation de l'arbre modifient ce champ aussi. |
| `label` | Oui | Le texte de la barre latérale. |
| `l` (onglet Traductions) | Oui | Libellés par langue. Voir [Traductions et icônes](./translations-and-icons.md). |
| `icon` | Oui | L'une des [icônes du menu latéral](./translations-and-icons.md#icons). |
| `type` | Oui | Liste déroulante. Vide = dossier. Passer de feuille à dossier efface `target` / `connector` / `params`. |
| `connector` | Uniquement pour les feuilles `query` / `endpoint` | Vide = le connecteur de l'application. |
| `target` | Uniquement pour les feuilles | Un SearchSelect alimenté avec les cibles valides pour le `type` + `connector` choisis. |
| `params` | Uniquement pour les feuilles | Paramètres fixes transmis à la cible à l'ouverture. |
| `roles` | Toujours | Restreint à ces rôles. Voir [Permissions et rôles](./permissions-and-roles.md). |

Les modifications sont **vives en mémoire** — la ligne de l'arbre se met à jour à la frappe. C'est le bouton *Enregistrer* au niveau de la page qui écrit sur disque.

---

## Renommer un élément

Renommer un `id` est plus engageant que les autres champs parce que chaque référence doit être mise à jour :

1. **Enfants** : les références `parent` de l'arbre sont mises à jour automatiquement.
2. **Entre fichiers** : le champ `home` d'un connecteur, ou un élément d'un autre menu qui référence celui-ci, n'est pas mis à jour. Utiliser **Rechercher les usages** (sur le panneau de l'entrée) avant de renommer pour voir chaque endroit qui référence l'élément.

Pour un renommage lourd, le schéma sûr est **Rechercher les usages → Cloner → corriger les références → supprimer l'ancien** — le nouvel id peut prendre le relais pendant la mise à jour de chaque référence.

---

## Dupliquer un élément

**Cloner**, sur le panneau de l'entrée choisie, la duplique :

- Toute la sous-arborescence est dupliquée (un dossier avec des enfants duplique chaque descendant).
- Les nouveaux ids sont demandés via une boîte de dialogue — la valeur par défaut est l'ancien id avec un suffixe.
- Les références entre fichiers ne sont **pas** réécrites — les duplicatas sont des éléments tout neufs que personne ne référence encore.

Utile quand :

- On construit une variante d'une section (par exemple `reports` pour les managers, `reports_admin` pour les administrateurs).
- La même forme s'applique à deux applications et l'arbre a été copié-collé.
- On veut une version bac à sable pour expérimenter.

---

## Supprimer un élément

L'icône 🗑 de la ligne retire l'élément. Quand il a des enfants, une confirmation est demandée d'abord, et confirmer retire toute la sous-arborescence.

Il n'y a pas de suppression douce — l'élément disparaît immédiatement de la mémoire. C'est *Enregistrer* au niveau de la page qui persiste. Tant qu'on n'enregistre pas, *Annuler* permet de revenir en arrière.

Pour les références entre fichiers (un champ `home` qui pointe vers l'élément supprimé), le `home` du connecteur devient invalide — l'application retombe sur le premier élément visible de premier niveau au prochain chargement. Utiliser *Rechercher les usages* avant de supprimer des éléments importants.

---

## Filtrer les arbres longs

Une boîte de recherche au-dessus de l'arbre réduit les éléments visibles par sous-chaîne d'id ou de libellé. Utile quand un menu dépasse 30 ou 40 entrées.

Le filtre est insensible à la casse et trouve la sous-chaîne n'importe où dans l'id ou le libellé. Les dossiers dont les enfants correspondent sont conservés (avec les descendants correspondants visibles).

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Deux éléments avec le même `id` dans le même menu. | La validation à l'enregistrement échoue. | Choisir un id unique ; l'inspecteur signale les doublons en ligne. |
| `parent` référence un élément qui n'existe pas. | La validation à l'enregistrement échoue (« parent inconnu »). | Choisir un parent dans la liste déroulante — seuls les ids valides sont listés. |
| Cycle de parent (A → B → A). | La validation à l'enregistrement échoue (« cycle de parent »). | L'indentation/désindentation de l'éditeur d'arbre ne crée jamais de cycle ; seules les éditions TOML directes le font. |
| Feuille sans `target`. | La validation à l'enregistrement échoue. | Définir `target` dans l'Inspecteur. |
| Dossier avec `target` défini. | La validation à l'enregistrement échoue (« un dossier ne peut pas porter de cible »). | Soit retirer la cible, soit définir un type non-dossier. |
| Feuille `dashboard` ou `page` avec un `connector`. | La validation à l'enregistrement échoue. | Ces deux types de feuille ne portent pas de connecteur ; laisser le champ vide. |
| Renommer un élément sans vérifier *Rechercher les usages*. | Le `home` d'un autre connecteur ou la référence d'un autre menu casse silencieusement. | Toujours vérifier Rechercher les usages avant de renommer. |

---

## La suite

- [Types d'éléments](./item-types.md) — ce qu'ouvrent `query` / `endpoint` / `dashboard` / `page` et les champs qu'ils prennent.
- [Permissions et rôles](./permissions-and-roles.md) — le filtre `roles` et la façon dont le menu s'élague pour chaque utilisateur.
- [Traductions et icônes](./translations-and-icons.md) — `l.fr`, `l.de`, choix des icônes.
