---
title: Liaison de paramètres
description: "Comment les paramètres `:placeholder` reçoivent une valeur à l'exécution — valeurs par défaut déclarées, sources de colonnes d'écran, tokens intégrés `#LOGIN_USER#` / `#SYSDATE#` et surcharges littérales par appel."
keywords: [Liberty Framework, liaison de paramètres, ParamBind, source, value, LOGIN_USER, SYSDATE, default, paramètres de requête]
---

# Liaison de paramètres

Une requête sans paramètres s'exécute à chaque fois avec les mêmes données. Une requête avec des paramètres `:placeholder` s'exécute sur des lignes, des portées ou des filtres différents à chaque appel — c'est là que les écrans, actions et règles de dictionnaire de Liberty prennent leur valeur. Cette page couvre la façon dont chaque `:placeholder` obtient sa valeur.

Il y a **deux** pièces en mouvement :

| Pièce | Où elle vit | Rôle |
|---|---|---|
| **`ParamDef`** | Sur la requête (bloc `params`). | Déclare un paramètre — lui donne un libellé et une valeur par défaut. |
| **`ParamBind`** | Sur l'appelant (colonne d'écran, action, élément de menu, onglet imbriqué). | Lie une valeur à un paramètre — littérale ou issue d'un autre champ au moment de l'appel. |

La requête détient la *déclaration* ; chaque appelant détient la *liaison*. La même requête peut être appelée depuis dix endroits avec dix liaisons différentes.

---

## Déclarer un paramètre — `ParamDef`

Dans le bloc **`params`** de l'éditeur de requête (onglets Non classées / Séquences / Recherches), chaque ligne est un `ParamDef` :

| Champ | Rôle |
|---|---|
| **`name`** | Le nom du `:placeholder` dans le SQL (sans les deux-points). Mis en correspondance sans tenir compte de la casse. |
| **`label`** | Libellé de formulaire affiché au-dessus du champ quand une interface expose ce paramètre. Vaut `name` par défaut. |
| **`default`** | Valeur pré-remplie quand l'appelant n'en lie pas. Vide = le moteur lie un `NULL` SQL. |

Un exemple simple :

```sql
SELECT *
FROM   invoices
WHERE  invoice_date BETWEEN :from_date AND :to_date
  AND  status = :status
```

Les paramètres déclarés :

| `name` | `label` | `default` |
|---|---|---|
| `from_date` | Début de période | `2026-01-01` |
| `to_date` | Fin de période | `2026-12-31` |
| `status` | Statut | `OPEN` |

Quand un écran câble cette requête sans en lier aucun, les valeurs par défaut sont liées et la requête retourne les factures 2026 au statut `OPEN`. Quand l'écran lie `:from_date` à un sélecteur de date, la valeur du sélecteur prime sur la valeur par défaut.

Le bloc `params` peut rester vide pour des paramètres ad hoc — le moteur lie quand même ce que l'appelant envoie. La déclaration sert aux **libellés** et aux **valeurs par défaut** ; le moteur ne l'exige pas.

---

## Lier une valeur — `ParamBind`

Partout où Liberty appelle une requête — lecture d'un écran, combo de recherche, `run_query` d'une action, élément de menu qui ouvre un écran avec un filtre, lecture d'un onglet imbriqué — l'appel porte une liste d'entrées `ParamBind`. Chacune lie un paramètre :

| Champ | Rôle |
|---|---|
| **`param`** | Le nom du paramètre cible (le `:placeholder` sur la requête de destination). Normalisé en MAJUSCULES à l'enregistrement. |
| **`value`** | Une valeur littérale à lier. À renseigner **ou** `source`, pas les deux. |
| **`source`** | Un chemin de colonne / champ / contexte de chaîne lu au moment de l'appel. À renseigner **ou** `value`. Normalisé en MAJUSCULES à l'enregistrement. |
| **`default`** | Repli lié quand `source` résout à NULL / vide au moment de l'appel. Ignoré en mode value. |

Deux modes :

### Mode value — littéral

```toml
[[actions.run_query.params]]
param = "STATUS"
value = "PAID"
```

La valeur liée est exactement `"PAID"`, à chaque appel. Équivalent à un codage en dur dans le SQL — utile seulement quand un appelant veut une valeur que les autres ne veulent pas.

### Mode source — à l'exécution

```toml
[[actions.run_query.params]]
param  = "INVOICE_ID"
source = "INVOICE_ID"
```

Au moment de l'appel, le moteur lit la colonne **`INVOICE_ID`** de la ligne sur laquelle l'utilisateur a cliqué (ou du champ de formulaire, ou du chemin de contexte de chaîne) et lie cette valeur. La chaîne source est **le nom d'une colonne / d'un champ**, pas la valeur.

La liaison la plus courante : un clic sur une ligne d'une grille maître passe les colonnes clés de la ligne à l'écran détail — chaque colonne clé reçoit un `ParamBind` avec `source = "<KEY_COL>"`.

### Mode source avec valeur par défaut

```toml
[[actions.run_query.params]]
param   = "UPMJ"
source  = "UPMJ"
default = "#SYSDATE#"
```

Si la source résout à NULL / vide (l'utilisateur n'a rien tapé dans le champ), le moteur lie `#SYSDATE#` à la place. Utile quand la colonne de base ne doit pas accepter NULL — donnez à la liaison un repli sensé.

---

## Sources réservées — les tokens intégrés `#…#`

Deux valeurs de source ne sont pas des noms de colonne — ce sont des tokens que Liberty substitue au moment de l'appel :

| Token | Résolu en |
|---|---|
| **`#LOGIN_USER#`** | Le nom d'utilisateur de la personne qui effectue l'appel (depuis le JWT). |
| **`#SYSDATE#`** | L'horodatage courant (`datetime.now(UTC)`) — une valeur par appel, donc deux liaisons `#SYSDATE#` dans le même appel reçoivent le même instant. |

Employez-les dans `source` (pas `value`) — le moteur reconnaît la forme `#…#` et la résout au lieu de chercher une colonne du même nom.

```toml
# Insertion de ligne — horodate créateur + date de création depuis la session
[[actions.run_query.params]]
param  = "CREATED_BY"
source = "#LOGIN_USER#"

[[actions.run_query.params]]
param  = "CREATED_AT"
source = "#SYSDATE#"
```

Pour un pré-remplissage au niveau colonne (un champ d'écran qui affiche l'utilisateur courant à l'ouverture du dialogue), utilisez plutôt les règles **`LOGIN`** et **`SYSDATE`** du dictionnaire — elles s'exécutent sur la couche formulaire, pas au moment de l'exécution SQL. Les tokens de liaison servent à la substitution de paramètre *au moment de l'appel* ; les règles du dictionnaire servent au remplissage de champ *au moment du formulaire*.

---

## Où sont déclarées les liaisons dans l'interface

| Appelant | Où vit la liaison |
|---|---|
| **Requête de lecture d'écran** | La liste `params` de l'écran (Paramètres → Écrans → \<écran> → onglet *Params*). |
| **Enregistrer du dialogue (UPDATE / INSERT / DELETE)** | L'écran lie automatiquement chaque colonne clé + non-clé à son placeholder homonyme. En général, rien à déclarer — la convention fait le travail. |
| **Action `run_query`** | La liste `params` de l'éditeur d'actions. |
| **Action `navigate`** | Idem — les paramètres se lient à la requête de lecture de l'écran de destination. |
| **Élément de menu avec params cible** | Éditeur de menu — la liste `params` sur l'entrée de menu. |
| **Lecture de formulaire/onglet imbriqué** | La liste `params` de l'onglet imbriqué. |
| **Combo de recherche avec filtre en cascade** | Le `filter_from` de la colonne (qui se traduit en un `ParamBind` sous le capot). |

Dans chaque cas, l'éditeur expose une liste déroulante *Paramètre* qui liste les paramètres déclarés sur la requête de destination, une bascule de mode (littéral / source) et des entrées value / source. La liste déroulante est peuplée depuis le registre vivant des connecteurs — changer la requête de destination rafraîchit la liste.

---

## Ordre de résolution — qui lie quoi

Quand une requête est appelée, le moteur résout chaque `:placeholder` dans cet ordre :

1. Le `ParamBind` correspondant sur l'appelant — littéral `value`, ou `source` (lecture de colonne ou token `#…#`), ou `default` quand la source est NULL / vide.
2. La règle de dictionnaire correspondante — `SYSDATE` / `LOGIN` / `SEQUENCE` / `DEFAULT` s'exécutent si la colonne en porte une (écritures seulement — ces règles ne surchargent pas les valeurs fournies par l'appelant).
3. La valeur `ParamDef.default` de la requête.
4. `NULL` SQL.

La première correspondance gagne. Un écran qui lie `:status = "PAID"` surcharge donc le `default = "OPEN"` de la requête ; une requête qui laisse `:from_date` non liée et non déclarée reçoit `NULL` SQL.

---

## Conventions de nommage

| Motif | Pourquoi |
|---|---|
| **UPPER snake_case pour les placeholders** | Le moteur normalise en MAJUSCULES à l'enregistrement et fait la correspondance sans tenir compte de la casse à l'exécution. `:USER_ID` et `:user_id` fonctionnent ; `:UserId` fonctionne mais se lit étrangement à côté de la forme enregistrée en MAJUSCULES. |
| **Faire correspondre les noms de colonnes** | Quand le placeholder correspond à une colonne d'écran, nommez-le pareil — la liaison s'effondre alors à `source = "<NAME>"` avec la même valeur, plus facile à lire. |
| **`:NAME_ORIGINAL` pour le WHERE de l'UPDATE** | La convention de l'Enregistrer du dialogue — la valeur de la colonne à l'ouverture du dialogue. L'Assistant CRUD câble cela pour vous ; les requêtes `_put` écrites à la main doivent la reproduire. |
| **`:LOGIN_USER` / `:SYSDATE` en suffixes pour les colonnes d'audit** | Une colonne nommée `:CREATED_BY` liée à `#LOGIN_USER#` se lit clairement ; `:UID` liée à `#LOGIN_USER#` se lit de manière cryptique. |

---

## Exemple détaillé — une action à liaisons multiples

Un écran *Factures* propose une action de ligne **Marquer payée**. Cliquer sur la ligne N exécute un UPDATE qui :

- Fixe `status = 'PAID'`.
- Fixe `paid_at = SYSDATE`.
- Fixe `paid_by = <utilisateur connecté>`.
- Filtre sur le `INVOICE_ID` de la ligne.

La requête (sous Non classées, `writable = true`) :

```sql
UPDATE invoices
SET    status  = :STATUS,
       paid_at = :PAID_AT,
       paid_by = :PAID_BY
WHERE  invoice_id = :INVOICE_ID
```

La liste `params` de l'éditeur d'action :

| `param` | mode | value / source | default |
|---|---|---|---|
| `STATUS` | value | `PAID` | — |
| `PAID_AT` | source | `#SYSDATE#` | — |
| `PAID_BY` | source | `#LOGIN_USER#` | — |
| `INVOICE_ID` | source | `INVOICE_ID` | — |

Appeler l'action sur une ligne lie chaque placeholder, déclenche l'UPDATE et la grille se rafraîchit. Aucune saisie de champ d'écran de la part de l'utilisateur — l'action accomplit sa tâche à partir du contexte de ligne + de l'identité de session seuls.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Renseigner à la fois `value` et `source`. | L'enregistrement échoue à la validation (« définir exactement une valeur entre value et source »). | Choisissez l'une des deux. |
| `source = "#SYSDATE#"` sur un filtre d'écran SELECT. | Le filtre applique SYSDATE au moment de l'appel — l'utilisateur ne peut pas choisir de date. | Ne pas lier. Laisser l'utilisateur remplir le champ ; la règle SYSDATE du dictionnaire pré-remplit l'entrée mais l'utilisateur peut surcharger. |
| `value = "#LOGIN_USER#"`. | La chaîne littérale `"#LOGIN_USER#"` est liée — pas de substitution. | Utilisez `source`, pas `value`. |
| Lier un placeholder que la requête n'a pas. | Le moteur l'ignore ; rien ne se produit, rien n'échoue. | Ouvrez la requête de destination, déclarez le paramètre ou choisissez le bon nom de placeholder dans la liste déroulante. |
| Oublier le suffixe `_ORIGINAL` sur un `_put` écrit à la main. | L'UPDATE filtre sur la clé **éditée**, pas l'originale — la ligne n'est pas trouvée quand l'opérateur a modifié la clé. | Reproduisez la convention de l'Assistant CRUD : `WHERE key = :key_ORIGINAL`. |

---

## Et ensuite

- [Variantes SQL par dialecte](./per-dialect-sql.md) — pour des paramètres qui demandent une syntaxe SQL différente sur Postgres / Oracle.
- [Concepts → Dictionnaire](../../dictionary.md) — les règles `SEQUENCE` / `LOOKUP` / `LOGIN` / `SYSDATE` qui pré-remplissent les champs de formulaire.
- [Concepts → Conditions de formulaire](../../form-conditions.md) — quand un champ ne doit apparaître que sous certaines valeurs de filtre.
