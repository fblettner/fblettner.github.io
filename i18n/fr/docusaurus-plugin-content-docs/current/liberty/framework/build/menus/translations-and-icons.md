---
title: Traductions et icônes
description: "Libellés par langue avec la table `l` (l.fr, l.de, …) et noms d'icônes Lucide sur les éléments de menu. Conventions et règles de repli pour les deux."
keywords: [Liberty Framework, menus, traduction, l.fr, libellé par langue, icône, Lucide, barre latérale]
---

# Traductions et icônes

Deux champs cosmétiques mais à fort impact sur chaque élément de menu :

| Champ | Rôle |
|---|---|
| **`l`** | Table des libellés par langue — `l.fr`, `l.de`, `l.es`. Le framework choisit celui qui correspond à la langue de l'utilisateur ; le `label` par défaut sert de repli. |
| **`icon`** | Un nom d'icône [Lucide](https://lucide.dev) (`shield`, `users`, `chart-bar`, …). Affiché au début de la ligne dans la barre latérale. |

Cette page couvre les deux — quand les définir, les conventions du sélecteur, les règles de résolution à l'exécution.

---

## Traductions — la table `l`

Le champ `label` est le libellé de la langue **par défaut**. La table `l` ajoute des libellés par langue :

```toml
[[menus.crm.items]]
id = "security"
label = "Security"
l.fr = "Sécurité"
l.de = "Sicherheit"
l.es = "Seguridad"
icon = "shield"
```

Quand un utilisateur francophone ouvre l'application, la barre latérale affiche *Sécurité*. Un utilisateur germanophone voit *Sicherheit*. Un utilisateur dont la langue ne correspond à aucune entrée `l.*` retombe sur `Security`.

### Règles de résolution

À l'exécution, pour chaque élément de menu :

1. Lire la langue de l'utilisateur depuis le JWT (ou l'en-tête `Accept-Language` du navigateur).
2. Chercher `l[<language>]`.
3. Si présent et non vide, utiliser cette chaîne.
4. Sinon, utiliser le `label` par défaut.

La recherche est **exacte** — `l.fr` est trouvé pour les utilisateurs dont la langue est `fr` ; un utilisateur avec `fr-CA` ne correspond pas à `l.fr` à moins d'ajouter aussi `l["fr-CA"]`. Pour une couverture maximale, définir le code de langue nu (`fr`, `de`, `es`) ; les entrées spécifiques à la locale (`fr-CA`, `de-AT`) sont réservées aux variantes véritables.

### L'onglet Traductions de l'Inspecteur

L'onglet *Traductions* de l'Inspecteur regroupe chaque entrée `l.*` — ajouter une nouvelle langue se fait depuis `SUPPORTED_LANGUAGES` (la liste des langues activées du framework, depuis `app.toml`). Retirer une langue supprime l'entrée.

| Champ affiché | Rôle |
|---|---|
| Libellé par défaut | Le champ `label` — repli pour tout utilisateur dont la langue n'a pas de libellé. |
| Lignes par langue | Une par entrée `l.<lang>`. Les valeurs vides suppriment l'entrée à l'enregistrement. |

### Traduire les dossiers

Les dossiers ont aussi besoin de traductions — l'utilisateur voit le titre du dossier dans la barre latérale. Même forme `l`. Ne pas traduire l'`id` (c'est la clé technique, jamais affichée).

### Traduire les feuilles

Pour les feuilles `query`, le `label` de la feuille est le libellé du **menu**. Le titre de l'écran ouvert vient du `label` / `description` de **l'écran**, qui a ses propres traductions via le dictionnaire. Deux couches :

| Couche | Où traduire |
|---|---|
| Libellé du menu | `l` sur l'élément de menu. |
| Titre de l'écran | Entrées `[dictionary.<id>]` — sensibles à la langue. |
| Libellés des colonnes | Idem — `[dictionary.<col_id>]` pour chaque colonne. |

Le système de dictionnaire couvre le texte côté écran une fois ; le `l` du menu couvre les libellés de navigation.

### Quand NE PAS traduire

| Schéma | Pourquoi |
|---|---|
| Applications internes avec une seule langue. | Économiser l'effort ; utiliser simplement `label`. |
| Applications où l'audience partage la même langue métier. | Idem. |
| Le libellé est un code ou un identifiant que l'utilisateur lit tel quel. | `F0005`, `IBAN`, `SLA` — les laisser tels quels. |

---

## Icônes — noms Lucide

Le champ `icon` accepte tout nom d'icône [Lucide](https://lucide.dev). L'icône s'affiche à gauche du libellé dans la barre latérale, à une taille adaptée à la hauteur de la ligne.

```toml
[[menus.crm.items]]
id = "pipeline"
label = "Pipeline"
icon = "briefcase"
```

Affiche une icône de mallette à côté du dossier *Pipeline*.

### Comment choisir un nom

- Parcourir [lucide.dev](https://lucide.dev) — chaque icône a son nom visible.
- Les noms sont en **kebab-case minuscule** : `chart-bar`, `git-branch`, `arrow-up-right`.
- Le framework fait une correspondance sensible à la casse — les fautes de frappe n'affichent aucune icône (pas d'erreur).

### Conventions

Un vocabulaire d'icônes cohérent rend le menu lisible d'un coup d'œil. Les schémas que la plupart des installations adoptent :

| Concept | Icône |
|---|---|
| Utilisateurs / personnes | `users`, `user`, `user-check` |
| Sécurité / permissions | `shield`, `key`, `lock` |
| Rapports / graphiques | `chart-bar`, `chart-line`, `chart-pie`, `trending-up` |
| Tableaux / données | `table`, `database`, `layers` |
| Paramètres / configuration | `settings`, `cog`, `sliders-horizontal` |
| Synchronisation / rafraîchissement | `refresh-cw`, `repeat`, `cloud-download` |
| Pipeline / processus | `briefcase`, `workflow`, `git-branch` |
| Notifications | `bell`, `mail`, `inbox` |
| Audit / historique | `history`, `clock`, `file-clock` |
| Calendrier | `calendar`, `calendar-clock` |
| Documents | `file`, `file-text`, `folder` |

Choisir une icône par domaine et s'y tenir dans toute l'application. Alterner entre *Utilisateurs* (`users`) et *Rôles* (`shield`) dans un dossier Sécurité reste cohérent ; mélanger les icônes au hasard ne l'est pas.

### Dossiers ou feuilles

| Type d'élément | Convention d'icône |
|---|---|
| Dossier | Généralement une icône « domaine » (`shield` pour Sécurité, `briefcase` pour Pipeline). S'affiche à côté du chevron. |
| Feuille | Généralement une icône « objet » (`users` pour l'écran Utilisateurs, `file-text` pour Documents). |

Sans `icon` sur un dossier, le framework affiche un glyphe de dossier par défaut. Les feuilles sans `icon` s'affichent avec un glyphe de fichier par défaut.

### Quand omettre les icônes

| Schéma | Pourquoi |
|---|---|
| Le libellé est court et sans ambiguïté. | L'icône n'ajoute pas d'information — juste du bruit visuel. |
| Phase de prototypage. | Ajouter les icônes en dernier, une fois la structure stabilisée. |
| Le menu est court (5 éléments ou moins). | Les icônes n'aident pas la lisibilité quand il y a peu à scanner. |

Un jeu d'icônes cohérent aide pour les **menus de 30 éléments ou plus** ; en deçà, les libellés seuls se lisent très bien.

---

## Un exemple concret — même menu, trois langues

Le dossier *Sécurité* de l'application Nomasx-1, entièrement traduit :

```toml
[[menus.nomasx1.items]]
id = "security"
label = "Security"
l.fr = "Sécurité"
l.de = "Sicherheit"
icon = "shield"

[[menus.nomasx1.items]]
id = "security.users"
parent = "security"
label = "Users"
l.fr = "Utilisateurs"
l.de = "Benutzer"
icon = "users"
type = "query"
target = "security_users_get"

[[menus.nomasx1.items]]
id = "security.roles"
parent = "security"
label = "Roles"
l.fr = "Rôles"
l.de = "Rollen"
icon = "key"
type = "query"
target = "security_roles_get"

[[menus.nomasx1.items]]
id = "security.assignments"
parent = "security"
label = "User-role assignments"
l.fr = "Attributions utilisateur ↔ rôle"
l.de = "Benutzer-Rollen-Zuordnungen"
icon = "git-branch"
type = "query"
target = "security_assignments_get"
```

Un utilisateur francophone voit *Sécurité ▾ → Utilisateurs / Rôles / Attributions utilisateur ↔ rôle*. Un utilisateur germanophone voit *Sicherheit ▾ → Benutzer / Rollen / Benutzer-Rollen-Zuordnungen*. Un utilisateur anglophone voit les libellés par défaut. Tous les trois utilisent les mêmes icônes.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `l.FR` (en majuscules). | Les utilisateurs francophones voient le libellé anglais par défaut — la recherche est sensible à la casse. | Utiliser des codes de langue en minuscules. |
| `icon = "Shield"` (avec majuscule). | Aucune icône ne s'affiche (pas d'erreur). | Utiliser les noms Lucide en minuscules. |
| Nom d'icône d'une autre bibliothèque (FontAwesome, Material). | Aucune icône ne s'affiche. | Choisir depuis [lucide.dev](https://lucide.dev). |
| Traductions uniquement sur le menu, pas sur les écrans / le dictionnaire. | La barre latérale affiche *Utilisateurs* mais le titre de l'écran reste *Users*. | Traduire aux deux couches — le `l` du menu ET `[dictionary.<id>].l_<lang>`. |
| `l.fr-CA` défini ; un utilisateur français canadien retombe sur l'anglais. | La résolution par correspondance exacte fait que `fr-CA` ne retombe pas sur `fr`. | Soit ajouter `l.fr` comme repli (la variante régionale prévaut pour les utilisateurs `fr-CA`), soit simplifier en `l.fr`. |

---

## La suite

- [Construire l'arbre](./build-the-tree.md) — l'éditeur où l'on définit `l` et `icon` par élément.
- [Permissions et rôles](./permissions-and-roles.md) — la traduction est indépendante de l'élagage, mais les deux façonnent ce que l'utilisateur voit réellement.
- [Concepts → Dictionnaire](../../dictionary.md) — la couche de traduction côté écran.
