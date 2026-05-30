---
title: Colonnes
description: "L'onglet Colonnes — définir une fois le titre d'affichage, le format, la référence dictionnaire, la règle d'édition, la valeur par défaut et le filtrage de chaque colonne ; la grille et le dialogue les utilisent tous deux."
keywords: [Liberty Framework, colonnes, ColumnHint, dictionnaire, format, lookup, filtre, masqué, clé, valeur par défaut]
---

# Colonnes

L'onglet **Colonnes** est l'endroit où l'on définit les métadonnées par colonne : comment la colonne s'affiche dans la grille, comment elle apparaît dans le formulaire de dialogue, si elle filtre, si elle est obligatoire, si elle fait partie de la clé primaire de la ligne. On configure chaque colonne une fois — les deux surfaces (grille et dialogue) utilisent la même configuration.

---

## L'onglet Colonnes en un coup d'œil

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="col-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#col-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · crm.customers · Colonnes</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Configurez chaque colonne une seule fois — titre d'affichage, format, valeur par défaut, filtrage, règles d'édition. La grille et le dialogue les utilisent.</text>

  <rect x="40" y="108" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="128" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="220" y="128" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Identifiant client</text>
  <text x="360" y="128" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">dd=CUSTOMER_ID</text>
  <rect x="560" y="116" width="36" height="18" rx="3" fill="rgba(251,146,60,0.20)"/>
  <text x="578" y="129" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="600" y="116" width="48" height="18" rx="3" fill="rgba(192,132,252,0.20)"/>
  <text x="624" y="129" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FILTRE</text>
  <text x="918" y="128" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">détailler →</text>

  <rect x="40" y="148" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="168" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="220" y="168" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="360" y="168" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">width=240</text>
  <rect x="500" y="156" width="60" height="18" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="530" y="169" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OBLIGATOIRE</text>
  <text x="918" y="168" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">détailler →</text>

  <rect x="40" y="188" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="208" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">REGION_CODE</text>
  <text x="220" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Région</text>
  <text x="360" y="208" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">rules=LOOKUP · get_regions</text>
  <text x="918" y="208" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">détailler →</text>

  <rect x="40" y="228" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="248" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="220" y="248" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="360" y="248" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">rules=ENUM · STATUS_CODES</text>
  <rect x="560" y="236" width="48" height="18" rx="3" fill="rgba(192,132,252,0.20)"/>
  <text x="584" y="249" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FILTRE</text>
  <text x="918" y="248" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">détailler →</text>

  <rect x="40" y="268" width="920" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="288" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CREATED_AT</text>
  <text x="220" y="288" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Créé le</text>
  <text x="360" y="288" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">format=date</text>
  <rect x="540" y="276" width="56" height="18" rx="3" fill="rgba(100,116,139,0.20)"/>
  <text x="568" y="289" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DÉSACTIVÉ</text>
  <text x="918" y="288" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">détailler →</text>

  <rect x="40" y="308" width="920" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="160" y="332" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">＋ Ajouter une colonne</text>
  <text x="500" y="350" fill="#64748b" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">Les colonnes que la requête de lecture retourne mais non indiquées ici conservent l'ordre de découverte et les défauts du dictionnaire.</text>
</svg>

La liste affiche une ligne par entrée **ColumnHint**. Cliquer sur une ligne pour accéder à son éditeur complet — le résumé en ligne couvre les champs les plus utilisés, l'éditeur complet couvre chaque indicateur.

---

## Champ par champ

Chaque indication de colonne porte la même structure. Détailler une colonne révèle cinq groupes de champs.

### Identité

| Champ | Notes |
|---|---|
| **`name`** | La colonne du résultat à laquelle s'applique cette indication. Correspondance insensible à la casse contre les colonnes de la requête de lecture. Normalisée en MAJUSCULES à l'enregistrement. |
| **`dd`** | Entrée de dictionnaire dont hériter `label` / `format` / `rule`. Vide utilise le `name` de la colonne comme clé. Mettre à `""` (chaîne vide entre guillemets) pour se désinscrire totalement du dictionnaire. |

Le système de dictionnaire (`dictionary.toml`) est le vocabulaire centralisé de Liberty — une entrée définit une fois le titre d'affichage, le format, la règle et la recherche d'un champ ; chaque écran qui a une colonne avec ce nom en hérite. Voir [Concepts → Dictionnaire](../../dictionary.md).

### Affichage dans la grille

| Champ | Notes |
|---|---|
| **`label`** | Titre d'affichage dans l'en-tête de la grille et libellé du champ dans le dialogue. Retombe sur le `label` du dictionnaire, puis sur le `name` de la colonne. |
| **`hidden`** | Quand activé, la colonne est masquée par défaut. L'opérateur peut la rendre visible via le menu *Colonnes* de la grille. |
| **`width`** | Largeur de colonne fixe en pixels. Vide = ajustement automatique. |
| **`align`** | Alignement du texte — `left`, `right`, `center`. Vide choisit automatiquement selon le type (nombres à droite, texte à gauche). |
| **`format`** | Comment afficher la valeur — `date`, `number`, `boolean`, `currency`, etc. Surcharge le format du dictionnaire. Pilote à la fois la cellule de grille et le champ de dialogue. |

### Règle d'édition

| Champ | Notes |
|---|---|
| **`rules`** | Comment afficher et valider la colonne. `BOOLEAN` affiche une case à cocher, `ENUM` une liste déroulante, `LOOKUP` un sélecteur avec recherche. Vide hérite du dictionnaire. |
| **`rules_values`** | La valeur de la règle — `BOOLEAN` → le marqueur vrai (`Y` / `1` / `true`) ; `ENUM` → l'identifiant d'énumération ; `LOOKUP` → l'identifiant de recherche ; `SEQUENCE` / `NN` → l'identifiant de séquence. |
| **`default`** | Valeur pré-remplie à l'ajout d'une nouvelle ligne. |
| **`required`** | Quand activé, l'opérateur doit renseigner cette colonne avant d'enregistrer. |
| **`disabled`** | Quand activé, la colonne est en lecture seule — l'opérateur voit la valeur mais ne peut pas la modifier. |
| **`lookup_param_binds`** | Restreindre la requête d'une règle `LOOKUP` en liant des paramètres supplémentaires. Utilisé quand la recherche dépend de la valeur d'un autre champ (ex. choisir un rôle restreint par l'application courante de la ligne). Voir [Liaison de paramètres](../queries/parameter-binding.md). |

### Clé primaire

| Champ | Notes |
|---|---|
| **`key`** | Marque cette colonne comme partie de la clé primaire de la ligne. Pilote :<br/>– La correspondance mise à jour-ou-insertion de l'import Excel.<br/>– Le verrouillage du mode édition du dialogue — les champs clés sont en lecture seule lors de la modification d'une ligne existante.<br/>– La liaison `:NAME_ORIGINAL` de la requête `_put` (la convention de l'Assistant CRUD). |

Marquer chaque colonne qui identifie une ligne de façon unique. Les clés multi-colonnes sont prises en charge — activer l'indicateur sur chacune. Quand `key_columns` de l'écran est vide (le cas habituel), le runtime retombe sur les colonnes dont l'indicateur `key` est activé.

### Filtrage

| Champ | Notes |
|---|---|
| **`filter`** | Quand activé, la colonne apparaît dans le panneau de filtres du tableau. L'utilisateur choisit une valeur pour restreindre la grille. |
| **`filter_from`** | Filtre en cascade — restreint les options de cette colonne en fonction de la valeur d'un autre filtre. Sélectionne une colonne `source` (déjà filtrée) et une `column` sur le résultat de la requête de recherche que la source met en correspondance. |
| **`visible_when`** | Affiche cette colonne **dans la grille** uniquement quand un filtre a une valeur précise. À distinguer du `visible_when` côté dialogue sur les champs — voir [Champs conditionnels](./conditional-fields.md). |

### Une colonne typique

Pour une colonne `STATUS` sur un écran clients, la configuration ressemble habituellement à :

| Champ | Valeur |
|---|---|
| `name` | `STATUS` |
| `dd` | (vide — utilise `STATUS` comme clé du dictionnaire) |
| `label` | (vide — hérite du dictionnaire) |
| `format` | (vide — hérite) |
| `rules` | `ENUM` |
| `rules_values` | `STATUS_CODES` (un identifiant d'énumération déclaré dans le dictionnaire) |
| `default` | `OPEN` |
| `required` | ✓ |
| `filter` | ✓ |

Cela affiche une liste déroulante dans le dialogue (alimentée par l'énumération `STATUS_CODES`), pré-remplit les nouvelles lignes avec `OPEN`, exige une valeur et ajoute une puce de filtre à la grille.

---

## Hériter du dictionnaire

Le comportement par défaut — quand la plupart des champs sont vides — est d'**hériter du dictionnaire**. La chaîne :

```
ColumnHint.label  → entrée DD.label  → nom de colonne
ColumnHint.format → entrée DD.format → choisi par le moteur selon le type
ColumnHint.rules  → entrée DD.rule
ColumnHint.rules_values → entrée DD.rule_values
```

Cela signifie qu'une colonne nommée `USR_ID` sur un écran lit automatiquement son libellé, son format, sa règle de recherche et son identifiant de recherche depuis l'entrée de dictionnaire `USR_ID` (ou ce que vous avez mis dans `dd`). L'écran ne surcharge que quand **cet** écran a besoin d'un comportement différent du reste.

L'onglet Colonnes est donc majoritairement **vide** pour les installations bien dictionnarisées — des entrées n'apparaissent que quand il y a quelque chose à surcharger.

---

## Filtrage et filtres en cascade

Quand une colonne a `filter = true`, une puce pour celle-ci apparaît dans le panneau de filtres de la grille. L'utilisateur choisit une valeur, la grille réexécute la requête de lecture avec cette valeur liée au paramètre `:placeholder` correspondant. La requête est responsable d'accepter la liaison.

Les **filtres en cascade** restreignent les options d'un filtre selon un autre. Le cas classique : une liste déroulante *Rôle* qui n'affiche que les rôles pour l'*Application* actuellement sélectionnée :

| Champ | Valeur sur `ROLE_ID` |
|---|---|
| `rules` | `LOOKUP` |
| `rules_values` | `get_roles` |
| `filter` | ✓ |
| `filter_from.source` | `APPS_ID` (la colonne source du filtre parent) |
| `filter_from.column` | `APP_ID` (la colonne du résultat de la requête de recherche qui correspond à la source) |

Quand l'utilisateur choisit une application, la recherche de rôles se réexécute avec l'identifiant d'application lié — l'utilisateur ne voit que les rôles de cette application.

---

## Ordre des colonnes

L'ordre de la liste **ColumnHint** = l'ordre d'affichage dans la grille. Les colonnes que la requête de lecture retourne mais qui ne sont pas listées ici conservent leur ordre de découverte et suivent celles qui sont indiquées.

Pour réorganiser :

| Objectif | Action |
|---|---|
| Monter / descendre une colonne. | Glisser sa ligne dans la liste (la poignée de glissement est sur le bord gauche de la ligne). |
| Masquer une colonne entièrement. | Mettre `hidden = true`. L'opérateur peut quand même la rendre visible depuis le menu *Colonnes* de la grille. |
| Retirer une colonne de la grille et du dialogue. | Supprimer son indication ET s'assurer qu'elle n'est sur les champs d'aucun onglet du dialogue. (Ou modifier la requête de lecture pour ne pas la retourner.) |

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `dd = "USR_ID"` mais pas d'entrée de dictionnaire nommée `USR_ID`. | Le libellé et le format retombent textuellement sur le nom de colonne. | Ajouter l'entrée de dictionnaire, ou mettre `dd = ""` pour se désinscrire et configurer `label`/`format` en ligne. |
| `rules = LOOKUP` mais `rules_values` vide. | La liste déroulante est vide. | Mettre `rules_values` à un identifiant de recherche du dictionnaire. |
| `filter_from` renseigné mais la colonne n'a pas `filter`. | La cascade ne fait rien — le filtre source ne se déclenche jamais. | Activer `filter = true` ET renseigner `filter_from`. |
| `required = true` sur une colonne que la requête de lecture ne retourne pas. | Le dialogue enregistre avec NULL ; si la BD a une contrainte NOT NULL, l'écriture échoue. | Ajouter la colonne à la requête de lecture, ou retirer `required` de l'indication. |
| `key = true` sur une colonne non unique. | L'import Excel traite les valeurs en double comme des mises à jour de la même ligne. | Vérifier que les colonnes clés identifient véritablement une ligne de façon unique. |
| `format = currency` mais la valeur est en centimes (entier). | La grille affiche `1,234.00` pour `123456`. | Le format attend la valeur dans l'unité à afficher — diviser par 100 dans la requête, ou utiliser une étape Python avant l'affichage. |

---

## Étapes suivantes

- [Constructeur de dialogue](./dialog-builder.md) — les champs configurés ici deviennent des cartes glissables-déposables sur le canevas.
- [Champs conditionnels](./conditional-fields.md) — faire apparaître / rendre obligatoire / verrouiller une colonne uniquement sous certaines conditions de formulaire.
- [Concepts → Dictionnaire](../../dictionary.md) — le vocabulaire partagé dont les colonnes héritent.
