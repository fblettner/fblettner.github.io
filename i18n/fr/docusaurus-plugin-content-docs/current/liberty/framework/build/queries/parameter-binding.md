---
title: Liaison de paramètres
description: "Comment les paramètres :nom d'une requête reçoivent leur valeur — valeurs par défaut déclarées sur la requête, param_binds de l'appelant (valeur fixe, autre champ, sources intégrées #LOGIN_USER# / #SYSDATE#) et jetons {{LOGIN}} / {{SYSDATE}} renseignés par le serveur."
keywords: [Liberty Next, liaison de paramètres, ParamDef, param_binds, source, value, default, LOGIN_USER, SYSDATE, jetons, "{{LOGIN}}", "{{SYSDATE}}"]
---

# Liaison de paramètres

Une requête munie de paramètres `:nom` porte sur des lignes différentes à chaque appel. Trois éléments déterminent la valeur reçue par chaque paramètre :

| Élément | Emplacement | Rôle |
|---|---|---|
| **Params** | Sur la requête. | Déclare un paramètre, avec un libellé et une valeur par défaut. |
| **`param_binds`** | Sur l'appelant — action, colonne à lookup, onglet imbriqué. | Lie une valeur à un paramètre : valeur fixe, ou autre champ lu au moment de l'appel. |
| **Jetons** `{{…}}` | Dans le SQL lui-même. | Des valeurs renseignées par le serveur à l'exécution : utilisateur, date, heure. |

La requête porte la déclaration ; chaque appelant porte sa liaison. Une même requête peut être appelée depuis dix endroits avec dix liaisons différentes.

---

## Déclarer un paramètre \{#declare\}

Le bloc **Params** de l'éditeur de requête liste les paramètres, un par ligne :

| Champ | Rôle |
|---|---|
| **name** | Le paramètre tel qu'il est écrit dans le SQL, sans les deux-points. |
| **label** | Le libellé affiché au-dessus de la saisie quand un écran ou l'assistant IA demande la valeur. À défaut, le nom. |
| **default** | La valeur liée quand l'appelant n'en envoie aucune. |

```sql
SELECT *
FROM   invoices
WHERE  invoice_date BETWEEN :FROM_DATE AND :TO_DATE
  AND  status = :STATUS
```

| name | label | default |
|---|---|---|
| `FROM_DATE` | Début de période | `2026-01-01` |
| `TO_DATE` | Fin de période | `2026-12-31` |
| `STATUS` | Statut | `OPEN` |

La déclaration est facultative : un paramètre que l'appelant n'envoie pas et qui n'a pas de valeur par défaut reçoit `NULL`.

---

## Lier une valeur — `param_binds` \{#param-binds\}

Partout où une requête est appelée avec des valeurs du contexte, l'appelant porte une liste de `param_binds`, une entrée par paramètre :

| Champ | Rôle |
|---|---|
| **param** | Le paramètre de la requête cible. La liste propose les paramètres déclarés par la requête. |
| **value** | Une valeur fixe. |
| **source** | L'origine de la valeur, lue au moment de l'appel : une colonne de la ligne, un champ du formulaire, une valeur renvoyée par une étape précédente d'une action (`step1.first_row.CUSTOMER_ID`), ou une [source intégrée](#builtins). |
| **default** | La valeur liée quand **source** ne donne rien : une valeur fixe, une source intégrée ou un chemin d'étape. |

Quand **value** et **source** sont toutes deux renseignées, **value** l'emporte.

```toml
param_binds = [
  { param = "STATUS",     value  = "PAID" },
  { param = "INVOICE_ID", source = "INVOICE_ID" },
  { param = "UPMJ",       source = "UPMJ", default = "#SYSDATE#" },
]
```

**source** contient le **nom** d'une colonne ou d'un champ, pas sa valeur. Cas courant : une action sur une ligne transmet la clé de la ligne à la requête — `{ param = "INVOICE_ID", source = "INVOICE_ID" }`.

### Sources intégrées \{#builtins\}

Ces sources sont lues dans le navigateur au moment de l'appel :

| Source | Valeur |
|---|---|
| `#LOGIN_USER#` (ou `#LOGIN#`, `#USER#`) | Le nom de l'utilisateur connecté. |
| `#LOGIN_EMAIL#` (ou `#EMAIL#`) | L'adresse e-mail de l'utilisateur. |
| `#LANGUAGE#` (ou `#LANG#`) | La langue de l'interface. |
| `#SYSDATE#` (ou `#CURRENT_DATE#`, `#TODAY#`) | La date du jour, `YYYY-MM-DD`. |
| `#NOW#` (ou `#CURRENT_TIMESTAMP#`) | La date et l'heure courantes. |
| `#CURRENT_TIME#` | L'heure courante, `HH:MM:SS`. |

Une source intégrée inconnue ne lie rien. Ces sources s'emploient dans **source** ou **default** : dans **value**, le texte `#LOGIN_USER#` est lié tel quel.

---

## Jetons renseignés par le serveur \{#tokens\}

Une requête d'écriture peut contenir des valeurs que le serveur renseigne à l'exécution — le navigateur n'a aucun moyen de les modifier. Le menu **Token** de l'éditeur SQL les insère :

| Jeton | Valeur |
|---|---|
| `{{LOGIN}}` (ou `{{USER}}`) | Le nom de l'utilisateur connecté, en majuscules. |
| `{{SYSDATE}}` | La date courante. |
| `{{SYSTIME}}` | L'heure courante. |
| `{{SYSTIMESTAMP}}` (ou `{{NOW}}`) | La date et l'heure courantes. |
| `{{JDEDATE}}` | La date du jour au format JD Edwards (CYYDDD). |
| `{{JDETIME}}` | L'heure courante au format JD Edwards (HHMMSS). |
| `{{PID}}` | Le nom du connecteur, en majuscules. |
| `{{JOBN}}` | `LIBERTY`. |

```sql
UPDATE invoices
SET    status     = 'PAID',
       updated_by = {{LOGIN}},
       updated_at = {{SYSTIMESTAMP}}
WHERE  invoice_id = :INVOICE_ID
```

Dates et heures suivent l'heure locale du serveur, avec un seul instant par instruction. Dans `COLONNE = {{JETON}}`, la valeur prend le format de la colonne défini dans le dictionnaire (une colonne `jdedate` reçoit du CYYDDD). Un jeton inconnu fait échouer l'instruction : une faute de frappe ne passe pas inaperçue.

---

## Où se règlent les liaisons \{#where\}

| Appelant | Réglage |
|---|---|
| **Enregistrement d'un dialogue** (insertion, mise à jour, suppression) | Rien à déclarer : chaque colonne est liée au paramètre de même nom, et le WHERE de la mise à jour utilise `:<CLÉ>_ORIGINAL`, la valeur de la clé à l'ouverture du dialogue. |
| **Action** (exécuter une requête, appeler une API ou un plugin, ouvrir un écran…) | Les `param_binds` de l'action. |
| **Colonne à lookup** | Le champ **lookup_param_binds** de la colonne (onglet Rules), ou le champ **Lookup params** de l'entrée du dictionnaire pour des valeurs fixes. |
| **Onglet imbriqué** | Les `param_binds` de l'onglet — en général la clé de la ligne parent. |
| **Entrée de menu** | **Params** (onglet Advanced) : des valeurs fixes transmises à la cible à son ouverture. |
| **Tableau de bord** | La période et les filtres lient `:PERIOD_FROM`, `:PERIOD_TO` et les colonnes filtrées — voir [Tableaux de bord](../../dashboards.md). |

---

## Ordre de résolution \{#order\}

Pour chaque paramètre de l'instruction :

1. la valeur envoyée par l'appelant — entrée `param_binds`, champ du dialogue, paramètre de menu ;
2. à défaut, la valeur **default** déclarée sur la requête ;
3. à défaut, `NULL`.

À l'écriture, les règles du dictionnaire s'appliquent ensuite aux colonnes liées : `LOGIN` remplace toujours la valeur, `SYSDATE` et `DEFAULT` complètent une valeur vide, `SEQUENCE` numérote une insertion — voir [Dictionnaire → Règles](../../dictionary.md#rules).

---

## Conventions de nommage

| Convention | Raison |
|---|---|
| **Paramètres en majuscules** | Les liaisons sont enregistrées en majuscules (`param`, `source`) et l'assistant CRUD génère des noms en majuscules. Un SQL en majuscules évite tout décalage. |
| **Même nom que la colonne** | Un paramètre nommé comme sa colonne se lit naturellement et se lie tout seul à l'enregistrement d'un dialogue. |
| **`:<CLÉ>_ORIGINAL` dans le WHERE d'une mise à jour** | La convention de l'enregistrement des dialogues ; l'assistant CRUD l'écrit, et un `_put` écrit à la main doit la reprendre. |

---

## Erreurs fréquentes

| Erreur | Conséquence | Correction |
|---|---|---|
| `value = "#LOGIN_USER#"`. | Le texte `#LOGIN_USER#` est écrit. | Passer par **source**. |
| **value** et **source** renseignées. | **source** est ignorée. | N'en garder qu'une. |
| `#SYSDATE#` lié à un filtre de lecture. | L'utilisateur ne peut plus choisir une autre date. | Laisser le paramètre libre, avec une valeur par défaut sur la requête. |
| Une liaison vers un paramètre absent de la requête. | Sans effet. | Choisir le paramètre dans la liste, qui suit la requête. |
| Un `_put` écrit à la main sans `_ORIGINAL`. | Modifier la clé dans le dialogue ne met à jour aucune ligne. | `WHERE key = :KEY_ORIGINAL`. |

---

## Pour aller plus loin

- [Variantes SQL par dialecte](./per-dialect-sql.md) — une requête, un SQL différent par base de données.
- [Dictionnaire](../../dictionary.md) — les règles `LOGIN`, `SYSDATE`, `SEQUENCE` et `DEFAULT` appliquées à l'écriture.
- [Actions et cycle de vie](../screens/actions-and-lifecycle.md) — les actions qui appellent des requêtes avec des `param_binds`.
