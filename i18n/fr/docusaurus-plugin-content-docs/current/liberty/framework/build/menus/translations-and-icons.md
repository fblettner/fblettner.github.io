---
title: Traductions et icônes
description: "Les libellés de menu par langue avec la table l (l.fr, l.de…), le choix de la langue, et les noms d'icônes que le menu latéral de Liberty Next sait afficher."
keywords: [Liberty Next, menus, traduction, l.fr, langue, X-Liberty-Lang, Accept-Language, icône, menu latéral]
---

# Traductions et icônes

Deux champs de chaque entrée de menu façonnent ce que l'utilisateur lit dans le menu latéral : `l`, le libellé par langue, et `icon`.

---

## Traductions — la table `l` \{#translations\}

`label` est le libellé par défaut ; `l` ajoute un libellé par langue :

```toml
[[menus.crm.items]]
id = "security"
label = "Security"
l = { fr = "Sécurité", de = "Sicherheit" }
icon = "shield"
```

Dans l'Inspecteur, le groupe **Translations** liste une ligne par langue ; les langues proposées sont `en`, `fr`, `de`, `es`, `it`, `pt`, `nl`, `pl`, `ja`, `zh`, `ar`. Une ligne vide est supprimée à l'enregistrement.

### Quelle langue \{#language\}

Pour chaque requête, la langue est, dans l'ordre :

1. l'en-tête `X-Liberty-Lang` — l'application web envoie la langue choisie dans son interface ;
2. sinon la première langue de l'`Accept-Language` du navigateur, sans sa région (`fr-CA` → `fr`) ;
3. sinon la langue par défaut de **Paramètres → App**.

Quand `l` n'a pas d'entrée pour cette langue, `label` est utilisé. Écrire les codes en minuscules (`fr`, pas `FR`).

Traduire aussi les dossiers : leur libellé est ce que l'utilisateur voit en premier. Les titres d'écrans et libellés de colonnes se traduisent dans le dictionnaire et les écrans, pas ici — voir [Dictionnaire](../../dictionary.md).

---

## Icônes \{#icons\}

`icon` désigne l'une des icônes que le menu latéral sait dessiner. Les noms se comparent sans tenir compte de la casse ni de la ponctuation (`Shield`, `shield`, `trending-up` fonctionnent tous) :

| Nom | | Nom | | Nom |
|---|---|---|---|---|
| `activity` | | `filter` | | `package` |
| `alert` | | `folder` | | `search` |
| `barchart` | | `globe` | | `settings` |
| `bell` | | `grid` | | `shield` |
| `briefcase` | | `key` | | `table` |
| `building` | | `layers` | | `tag` |
| `calendar` | | `link` | | `trendingup` |
| `clock` | | `lock` | | `user` |
| `database` | | `mail` | | `usercheck` |
| `file` / `filetext` | | `network` | | `users` |

Tout autre nom n'affiche aucune icône, sans erreur. La liste d'icônes de l'Inspecteur propose exactement ces noms.

Choix courants : `shield` pour la sécurité, `users` / `user` pour les personnes, `key` pour les rôles, `database` / `table` pour les données, `barchart` / `trendingup` pour les rapports, `settings` pour l'administration, `folder` pour les dossiers simples.
