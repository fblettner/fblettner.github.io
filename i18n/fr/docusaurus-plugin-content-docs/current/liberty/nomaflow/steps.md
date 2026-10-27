---
title: Étapes
description: "Les sept types d'étapes de Nomaflow — sql_query, sql_copy, file_load, python, http, ldap_sync, call_job — ce que fait chacun, ses champs et leurs valeurs par défaut, et ce qu'il enregistre dans l'exécution."
keywords: [Nomaflow, étapes, sql_query, sql_copy, file_load, python, http, ldap_sync, call_job, chargement de tableur, CSV, replace_partition, Liberty Next]
---

# Étapes

Une **étape** est une unité de travail d'une tâche. Les étapes s'exécutent dans l'ordre ; quand l'une échoue, les suivantes sont enregistrées comme *skipped: earlier step failed*.

| L'étape… | Type |
|---|---|
| lance une requête nommée d'un connecteur SQL | **`sql_query`** |
| copie une table entière d'un connecteur à un autre | **`sql_copy`** |
| charge un classeur ou un fichier CSV dans une table | **`file_load`** |
| appelle une fonction Python d'un plugin | **`python`** |
| appelle une URL | **`http`** |
| lit un annuaire LDAP / Active Directory dans une table | **`ldap_sync`** |
| lance une autre tâche et l'attend | **`call_job`** |

Dans l'éditeur de tâche, la barre **Ajouter une étape :** propose un bouton par type, et chaque étape ouvre un formulaire avec ses propres champs. Quelques clés n'existent que dans `jobs.toml` (signalées ci-dessous).

---

## Champs communs \{#common\}

| Champ | Défaut | Remarques |
|---|---|---|
| `name` | — | Affiché dans le détail de l'exécution ; unique dans la tâche. |
| `type` | — | L'un des sept types. |
| `enabled` | `true` | `false` saute l'étape (enregistrée comme *skipped: disabled*). Se règle dans `jobs.toml`, ou pour une exécution dans la fenêtre **Run with parameters**. |
| `timeout_seconds` | `3600` | L'étape est annulée passé ce délai. Se règle dans `jobs.toml`. |

---

## Requête SQL — `sql_query` \{#sql-query\}

Lance une **requête nommée** d'un connecteur SQL — une requête définie sur la page du connecteur, en lecture ou en écriture.

| Champ | Requis | Remarques |
|---|---|---|
| `connector` | oui | Le connecteur SQL. |
| `query` | oui | Le nom de la requête, pas du texte SQL. |
| `params` | non | Les valeurs liées aux paramètres de la requête. |
| `pool` | non | Un autre pool de l'ensemble du connecteur — voir [Connecteurs multi-pools](../framework/connectors.md#multi-pool). Uniquement dans `jobs.toml`. |

Enregistre le nombre de lignes renvoyées ou modifiées. Pour rafraîchir une vue matérialisée, appeler une procédure ou purger une table, écrire l'instruction comme une requête du connecteur, puis l'appeler ici.

---

## Copie SQL — `sql_copy` \{#sql-copy\}

Transfère les lignes d'une table source vers une table cible, éventuellement sur une autre base.

| Champ | Défaut | Remarques |
|---|---|---|
| `source` = `{connector, schema, table}` | — | Requis. `pool` peut s'y ajouter (uniquement dans `jobs.toml`). |
| `target` = `{connector, schema, table}` | — | Requis. Idem. |
| `mode` | `overwrite` | `overwrite` : les lignes sont écrites dans une table de travail `<table>__new`, qui remplace ensuite la cible en une transaction — la cible n'est jamais vide pendant la copie. `append` : les lignes s'ajoutent à la cible telle quelle. |
| `type_coercion` | `jde` | `jde` applique les règles JD Edwards (décimales implicites, dates juliennes, codes complétés d'espaces) ; `none` copie les valeurs telles quelles. |
| `decimal_mode` | `truncate` | Avec `jde` : tronquer (`truncate`) ou conserver (`preserve`) la partie décimale. |
| `batch_size` | `10000` | Lignes par lot. |
| `strip_both_columns` | `[]` | Colonnes dont les valeurs sont débarrassées des espaces des deux côtés. |

`upsert` est accepté par le schéma mais refusé à l'exécution : pour un ajout ou une mise à jour, écrire une requête `MERGE` / `ON CONFLICT` et l'appeler avec `sql_query`. Enregistre le nombre de lignes écrites.

---

## Chargement de fichier — `file_load` \{#file-load\}

Charge un classeur Excel (`.xlsx`, `.xlsm`) ou un fichier texte (`.csv`, `.txt`, `.tsv`) dans une table — selon une planification, sans personne au clavier, aux volumes d'une table de faits, et rejouable pour une période sans toucher aux autres.

### Le fichier

Le fichier vient, par ordre de priorité :

1. **d'un fichier choisi au lancement de la tâche** — la fenêtre **Run with parameters** affiche un sélecteur de fichier pour chaque étape `file_load` (la fenêtre s'ouvre pour toute tâche qui en contient une) ;
2. **de `path`** — un chemin sur le serveur, qui peut contenir `${params.x}` (un paramètre d'exécution), `${run.id}` et `${job.id}` : `/data/in/sales-${params.period}.xlsx` ;
3. **d'un dossier surveillé** — `watch_dir` et `watch_pattern` (`*.xlsx`) : chaque fichier correspondant est chargé dans l'ordre des noms, chacun dans sa propre transaction, puis déplacé dans `done/` ou `failed/` sous un nom horodaté. Un fichier en échec arrête l'exécution ; les fichiers suivants restent dans le dossier. Un dossier vide n'est pas une erreur.

| Champ | Défaut | Remarques |
|---|---|---|
| `sheet` | première feuille | Un nom ou un numéro (1 = la première). |
| `header_row` | `1` | La ligne des en-têtes de colonnes ; les données commencent en dessous. Les lignes vides sont ignorées. |
| `delimiter` | détecté | Séparateur CSV ; détecté parmi `;` `,` tabulation `|` s'il est vide. |
| `encoding` | `utf-8-sig` | CSV uniquement. |

### La cible

| Champ | Remarques |
|---|---|
| `target` = `{connector, schema, table}` | Un connecteur SQL ; la table doit exister. |
| `columns` | Colonne cible ← en-tête du fichier ou position (`#3`). Les en-têtes se retrouvent sans tenir compte de la casse, des espaces, de `_` et de `-` ; les colonnes non citées se retrouvent par leur nom. |
| `constants` | Colonne cible ← valeur, pour ce que le fichier ne porte pas : `period = "${params.period}"`, `batch_id = "${run.id}"`. |

Chaque cellule est convertie au type de sa colonne cible : entiers, décimaux (`12,5` et `12.5` donnent tous deux 12,5 ; une virgule seule est le séparateur décimal), dates (`2026-10-27`, `27/10/2026`, `27.10.2026`, `20261027`, et dates Excel), booléens (`1`, `true`, `yes`, `oui`…), texte. Un nombre saisi comme texte ne retrouve pas les zéros de tête que le tableur a déjà retirés.

### Mode de chargement

| Champ | Choix |
|---|---|
| `load_mode` | `append` (défaut) ajoute les lignes. `replace_partition` supprime d'abord les lignes des partitions présentes dans le fichier, puis insère — **en une seule transaction** : un chargement en échec laisse les données précédentes en place, et un mois corrigé ne remplace que ce mois. |
| `partition_by` | Les colonnes de partition (`period, company`) — obligatoires avec `replace_partition`. Les partitions viennent des constantes quand elles couvrent toutes les colonnes, sinon des valeurs distinctes trouvées dans le fichier. |
| `on_error` | `fail` (défaut) : la première cellule invalide fait échouer l'étape et cite la ligne. `skip` : les lignes invalides sont comptées comme rejetées et écrites dans un CSV (fichier, ligne, motif) proposé dans le détail de l'exécution. |
| `batch_size` | `10000` lignes par insertion. |

### Garde-fous

| Champ | Remarques |
|---|---|
| `refuse_query` | Une requête nommée lancée avant toute écriture, avec les paramètres d'exécution et les constantes comme paramètres liés. Si elle renvoie une ligne, le chargement est refusé et la première colonne en donne le motif : *période 2026-02 clôturée*. `refuse_connector` : son connecteur, celui de la cible par défaut. |
| `control_column` + `control_total` | La colonne est sommée sur les lignes chargées et comparée à une valeur, à `${params.total}` ou à une cellule du fichier (`@B2`, `@Totaux!B2`), à `control_tolerance` près. Un écart annule le chargement du fichier et cite les deux montants. |

### Dans l'exécution

Le détail de l'exécution affiche *N read · N inserted · N rejected* et, quand des lignes ont été rejetées, **Rejected rows (csv)** pour les télécharger (libellés en anglais). Le journal ajoute les partitions remplacées et les lignes supprimées.

Les fichiers envoyés et les fichiers de rejets vont dans la zone de travail de la tâche : `[jobs] files_dir` dans `app.toml` (par défaut `.nomaflow/files` à côté de la configuration) ; `[jobs] max_upload_mb` (200) limite la taille d'un envoi.

```toml title="jobs.toml"
[[jobs.steps]]
type = "file_load"
name = "load-sales"
path = "/data/in/ventes-${params.period}.xlsx"
sheet = "Ventes"
target = { connector = "sales", schema = "public", table = "fact_sales" }
columns = { company = "Société", article = "Article", qty = "Quantité", revenue = "CA" }
constants = { period = "${params.period}", batch_id = "${run.id}" }
load_mode = "replace_partition"
partition_by = ["period", "company"]
refuse_query = "period_closed_get"
control_column = "revenue"
control_total = "@Totaux!B2"
```

---

## Python — `python` \{#python\}

Appelle une fonction d'un plugin : `callable = "paquet.module:fonction"`.

| Champ | Remarques |
|---|---|
| `callable` | `module.chemin:fonction` — forme vérifiée à l'enregistrement, import au lancement de l'étape. |
| `op_kwargs` | Les arguments passés à la fonction, fusionnés par-dessus les paramètres partagés de la tâche. |

La fonction reçoit ses arguments par mot-clé et, quand elle les déclare par leur nom, `connectors` (le registre des connecteurs), `ctx` (l'exécution : `ctx.run_id`, `ctx.job_id`, `ctx.trigger`) et `settings`. Elle peut être `async` ou non. Sa valeur de retour : un `int` donne le nombre de lignes modifiées, un `dict` est conservé comme détail de l'étape, `None` convient ; une exception fait échouer l'étape. Pour écrire dans le journal de l'exécution, utiliser un logger d'un espace de noms enregistré. Le contrat complet se trouve dans [Écrire un callable](../framework/build/plugins/write-a-callable.md).

---

## HTTP — `http` \{#http\}

| Champ | Défaut | Remarques |
|---|---|---|
| `url` | — | Requis. Utilisée telle quelle. |
| `method` | `GET` | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`. |
| `headers` | `{}` | Envoyés tels quels. |
| `body` | aucun | Du texte, ou une table envoyée en JSON (avec `Content-Type: application/json` si aucun n'est défini). |

Une réponse 2xx réussit ; toute autre fait échouer l'étape avec le code. L'étape conserve le code, les 4 premiers Ko de la réponse et la durée. Les valeurs de l'environnement s'écrivent `${NOM}` dans `jobs.toml` et sont remplacées au chargement du fichier.

---

## Synchronisation LDAP — `ldap_sync` \{#ldap-sync\}

Lit des entrées d'un annuaire LDAP et lance une requête d'écriture d'un connecteur SQL pour chacune.

| Champ | Remarques |
|---|---|
| `server` | `ldaps://ad.example.com:636`. |
| `bind_dn`, `bind_password` | Le compte de lecture ; écrire le mot de passe `${LDAP_PASSWORD}`. |
| `search_base`, `search_filter` | Où et quoi chercher : `DC=example,DC=com`, `(objectClass=user)`. |
| `attributes` | Les attributs à lire. |
| `target_connector`, `target_query` | La requête d'écriture lancée pour chaque entrée. |
| `mapping` | Attribut LDAP → paramètre de la requête. Un attribut absent donne `NULL`. |

Enregistre le nombre d'entrées lues et de lignes écrites.

---

## Lancer une tâche — `call_job` \{#call-job\}

`target_job_id` désigne une autre tâche. L'étape la lance, attend sa fin et en prend le résultat : succès, échec ou annulation. La tâche appelée a sa propre exécution dans l'historique et reprend le niveau de journal et les paramètres d'exécution de l'appelante. Une tâche qui finirait par s'appeler elle-même est refusée.

---

## Réessais et délais \{#retry\}

Le bloc **Politique de réessai** de la tâche (`attempts`, `backoff` fixe ou exponentiel, `base_seconds`) s'applique à chaque étape : une étape est tentée jusqu'à `attempts` fois au total (`1`, la valeur par défaut, signifie aucune nouvelle tentative), avec une attente de `base_seconds` entre deux tentatives — constante, ou doublée à chaque fois avec `exponential`. La tâche entière s'arrête après `timeout_seconds` (4 heures par défaut).
