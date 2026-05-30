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

Au-dessus de l'arbre :

| Bouton | Rôle |
|---|---|
| **＋ Dossier** | Ajoute un dossier au premier niveau (ou en enfant de l'élément sélectionné, selon l'implémentation). Le dossier est le seul type d'élément sans `type`. |
| **＋ Élément** | Ajoute une feuille, même portée. La feuille s'ouvre par défaut sur le type `query` — à modifier dans l'Inspecteur. |
| **⎘ Dupliquer** | Duplique l'élément sélectionné (sous-arborescence incluse). Demande un nouvel id. Désactivé tant que rien n'est sélectionné. |
| **🔗 Rechercher les usages** | Ouvre une boîte de dialogue qui liste chaque endroit où cet élément de menu est référencé (par exemple le champ `home` d'un autre connecteur). Utile avant un renommage ou une suppression. Désactivé tant que rien n'est sélectionné. |

La barre de portée au-dessus de la barre d'outils porte les boutons *Annuler* / *Enregistrer* qui valent pour toute la page — identique à toutes les pages Paramètres.

---

## Les lignes de l'arbre

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="tr-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#tr-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Menus · [menus.crm] · arbre</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="98" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Filtrer 7 éléments…</text>

  <rect x="40" y="118" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="56" y="138" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 🛡 Sécurité <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  security</tspan></text>

  <rect x="40" y="154" width="920" height="30" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="76" y="174" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">📄 Utilisateurs <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  security.users</tspan></text>
  <rect x="760" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="771" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="784" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="795" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="808" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="819" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <rect x="832" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="843" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <rect x="856" y="158" width="22" height="22" rx="3" fill="rgba(255,255,255,0.04)"/>
  <text x="867" y="173" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋</text>
  <rect x="880" y="158" width="22" height="22" rx="3" fill="rgba(239,68,68,0.10)"/>
  <text x="891" y="173" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="190" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="76" y="210" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Rôles <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  security.roles</tspan></text>

  <rect x="40" y="226" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="56" y="246" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 💼 Pipeline <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  pipeline</tspan></text>

  <rect x="40" y="262" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="76" y="282" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Clients <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  pipeline.customers</tspan></text>

  <rect x="40" y="298" width="920" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="76" y="318" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Tableau de bord des affaires <tspan fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">  pipeline.deals_dashboard</tspan></text>
</svg>

Chaque ligne porte :

| Élément | Ce qu'il montre |
|---|---|
| Indentation | Profondeur visuelle — chaque niveau ajoute 16 pixels. |
| Chevron | ▾ pour un dossier déplié, ▸ pour replié. |
| Icône | L'`icon` de l'élément (nom Lucide). Les dossiers retombent sur une icône de dossier ; les feuilles sur une icône de fichier. |
| Libellé | Le champ `label`. |
| Id | Monospace, atténué, après le libellé. S'estompe au survol pour laisser place aux actions. |
| Actions par ligne (au survol) | *Monter* (↑), *Descendre* (↓), *Indenter* (→), *Désindenter* (←), *Ajouter un enfant* (＋), *Supprimer* (🗑). |

Cliquer n'importe où sur la ligne pour **sélectionner** l'élément — l'Inspecteur à droite charge son formulaire complet.

---

## Les actions par ligne

Les icônes qui apparaissent au survol, de gauche à droite :

| Action | Rôle |
|---|---|
| **↑ Monter** | Échange avec le frère précédent. Désactivé quand l'élément est le premier enfant de son parent. Déplace toute la sous-arborescence ensemble — les liens enfants suivent. |
| **↓ Descendre** | Échange avec le frère suivant. Désactivé à la fin. |
| **→ Indenter** | Reparente l'élément sous le frère précédent. Le frère précédent devient le nouveau parent. Désactivé quand il n'y a pas de frère précédent. |
| **← Désindenter** | Remonte l'élément d'un niveau — son grand-parent devient le nouveau parent. Désactivé quand l'élément est déjà au premier niveau. |
| **＋ Ajouter un enfant** | Ajoute une feuille en tant qu'enfant de cet élément (fonctionne sur les dossiers ; sur les feuilles, l'intention est convertie — typiquement ajouté comme frère suivant, pas comme enfant). |
| **🗑 Supprimer** | Retire l'élément **et toute sa sous-arborescence** après une boîte de dialogue de confirmation. Les éléments descendants sont retirés dans la même opération. |

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

Cliquer sur la ligne d'un dossier pour la sélectionner, puis **＋ Élément** (ou le *＋ Ajouter un enfant* de la ligne). La nouvelle feuille apparaît sous le dossier. Définir son `type`, `connector`, `target` dans l'Inspecteur — voir [Types d'éléments](./item-types.md).

### Étape 3 — Réorganiser

Utiliser ↑ / ↓ sur chaque ligne pour mettre les éléments dans l'ordre que l'utilisateur doit voir. L'ordre dans l'arbre = l'ordre dans la barre latérale rendue.

### Étape 4 — Imbriquer si nécessaire

Utiliser → (Indenter) pour placer un élément sous le frère précédent — utile quand un dossier devient long et qu'il faut un sous-dossier. Utiliser ← (Désindenter) pour le ressortir.

### Étape 5 — Enregistrer

Le bouton **Enregistrer** au niveau de la page valide tout le menu (ids uniques, parents existants, pas de cycles) et écrit `menus.toml`. Le rechargement à chaud prend les modifications en compte ; le prochain chargement de page de l'utilisateur affiche le nouvel arbre.

---

## Le formulaire de l'Inspecteur

Cliquer une ligne → l'Inspecteur à droite charge un formulaire pour l'élément sélectionné. Les champs s'adaptent au `type` :

| Champ | Toujours affiché | Notes |
|---|---|---|
| `id` | Oui | Renommer ici met à jour automatiquement la référence `parent` de chaque enfant. Les références entre fichiers (par exemple le champ `home` d'un autre connecteur qui pointe vers cet élément) demandent une correction manuelle — utiliser *Rechercher les usages* d'abord. |
| `parent` | Oui | Un SearchSelect alimenté avec les candidats valides. Les actions d'indentation/désindentation de l'arbre modifient ce champ aussi. |
| `label` | Oui | Le texte de la barre latérale. |
| `l` (onglet Traductions) | Oui | Libellés par langue. Voir [Traductions et icônes](./translations-and-icons.md). |
| `icon` | Oui | Nom d'icône Lucide. |
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
2. **Entre fichiers** : le champ `home` d'un connecteur, ou un élément d'un autre menu qui référence celui-ci, n'est pas mis à jour. Utiliser **Rechercher les usages** (le bouton de la barre d'outils) avant de renommer pour voir chaque endroit qui référence l'élément.

Pour un renommage lourd, le schéma sûr est **Rechercher les usages → Dupliquer → corriger les références → supprimer l'ancien** — le nouvel id peut prendre le relais pendant la mise à jour de chaque référence.

---

## Dupliquer un élément

Le bouton **⎘ Dupliquer** de la barre d'outils duplique l'élément sélectionné :

- Toute la sous-arborescence est dupliquée (un dossier avec des enfants duplique chaque descendant).
- Les nouveaux ids sont demandés via une boîte de dialogue — la valeur par défaut est l'ancien id avec un suffixe.
- Les références entre fichiers ne sont **pas** réécrites — les duplicatas sont des éléments tout neufs que personne ne référence encore.

Utile quand :

- On construit une variante d'une section (par exemple `reports` pour les managers, `reports_admin` pour les administrateurs).
- La même forme s'applique à deux applications et l'arbre a été copié-collé.
- On veut une version bac à sable pour expérimenter.

---

## Supprimer un élément

L'icône 🗑 (par ligne) ou la touche Suppr du clavier sur une ligne sélectionnée ouvre une boîte de dialogue de confirmation : « *Supprimer '\<nom\>' **et** ses descendants ?* ». Confirmer retire l'élément plus chaque enfant, petit-enfant, etc.

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
