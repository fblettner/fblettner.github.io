---
title: Étapes
description: "Les neuf types d'étapes de Nomaflow — sql_query, sql_copy, file_load, python, http, ldap_sync, call_job, report, notify — ce que fait chacun, ses champs et leurs valeurs par défaut, et ce qu'il enregistre dans l'exécution."
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
| produit un fichier Excel ou PDF à partir d'une analyse enregistrée, d'un tableau de bord ou d'un rapport | **`report`** |
| envoie un message, accompagné des fichiers de l'exécution | **`notify`** |

Dans l'éditeur de tâche, la barre **Ajouter une étape :** propose un bouton par type, et chaque étape ouvre un formulaire avec ses propres champs. Quelques clés n'existent que dans `jobs.toml` (signalées ci-dessous).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="370" rx="14" fill="url(#nst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes · sales-copy</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="86" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Add step:</text>
  <rect x="312" y="72" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="348.0" y="86.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">sql_query</text>
  <rect x="389" y="72" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="422.0" y="86.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">sql_copy</text>
  <rect x="460" y="72" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="496.0" y="86.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">file_load</text>
  <rect x="537" y="72" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="564.5" y="86.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">python</text>
  <rect x="597" y="72" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="619.0" y="86.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">http</text>
  <rect x="646" y="72" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="682.0" y="86.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">ldap_sync</text>
  <rect x="723" y="72" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="756.0" y="86.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">call_job</text>
  <rect x="240" y="108" width="720" height="220" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="252" y="118" width="58" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="281.0" y="130.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_copy</text>
  <text x="330" y="131" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">copy-F0101</text>
  <text x="260" y="165" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">source</text>
  <rect x="380" y="150" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">jdedwards · PRODDTA · F0101</text>
  <text x="260" y="197" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">target</text>
  <rect x="380" y="182" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="196.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">warehouse · public · f0101</text>
  <text x="260" y="229" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">mode</text>
  <rect x="380" y="214" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">overwrite ▾</text>
  <text x="260" y="261" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">type_coercion</text>
  <rect x="380" y="246" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="260.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">jde ▾</text>
  <text x="260" y="293" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">batch_size</text>
  <rect x="380" y="278" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="292.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">10000</text>
  <rect x="240" y="340" width="720" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="347" width="63" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="283.5" y="359.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query</text>
  <text x="340" y="360" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <rect x="10" y="72" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sept types d'étapes</text>
  <text x="20" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SQL, fichier, Python, HTTP…</text>
  <line x1="210" y1="89.0" x2="300" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Formulaire d'étape</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les champs de son type</text>
  <line x1="210" y1="217.0" x2="260" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="1000" y="220" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">overwrite</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table de travail échangée</text>
  <line x1="1000" y1="237.0" x2="710" y2="225" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="1000" y="340" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécution dans l'ordre</text>
  <text x="1010" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reprises par étape</text>
  <line x1="1000" y1="357.0" x2="960" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
</svg>

---

## Champs communs \{#common\}

| Champ | Défaut | Remarques |
|---|---|---|
| `name` | — | Affiché dans le détail de l'exécution ; unique dans la tâche. |
| `type` | — | L'un des neuf types. |
| `enabled` | `true` | `false` saute l'étape (enregistrée comme *skipped: disabled*). Se règle dans `jobs.toml`, ou pour une exécution dans la fenêtre **Run with parameters**. |
| `timeout_seconds` | `3600` | L'étape est annulée passé ce délai. Se règle dans `jobs.toml`. |

Quand une étape échoue sur une erreur de base de données, le détail de l'exécution affiche la phrase de la base elle-même — *invalid input for query argument $1: 2025 (expected str, got int)* — et l'instruction part dans le journal du serveur.

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
| `refuse_query` | Une requête nommée lancée avant toute écriture, avec les paramètres d'exécution et les constantes comme paramètres liés. Avec `partition_by`, elle s'exécute une fois par partition présente dans le fichier, les colonnes de partition servant de paramètres liés (`:YEAR`, `:MONTH`, `:COMPANY_CODE`) : la garde suit le fichier, et non un paramètre saisi au lancement. Si elle renvoie une ligne, le chargement est refusé et la première colonne en donne le motif : *période 2026-02 clôturée*. `refuse_connector` : son connecteur, celui de la cible par défaut. |
| `control_column` + `control_total` | La colonne est sommée sur les lignes chargées et comparée à une valeur, à `${params.total}` ou à une cellule du fichier (`@B2`, `@Totaux!B2`), à `control_tolerance` près. Un écart annule le chargement du fichier et cite les deux montants. |

### Dans l'exécution

Le détail de l'exécution affiche *N read · N inserted · N rejected* et, quand des lignes ont été rejetées, **Rejected rows (csv)** pour les télécharger (libellés en anglais). Le journal ajoute les partitions remplacées et les lignes supprimées.

Les fichiers envoyés et les fichiers de rejets vont dans la zone de travail des tâches, `.nomaflow/files` à côté de la configuration ; un envoi est limité à 200 Mo.

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

## Rapport — `report` \{#report\}

Produit un document dans la zone de travail de l'exécution : une [analyse ou un tableau de bord enregistré de l'explorateur de données](../framework/explorer/saved-and-dashboards.md), ou un rapport d'un plugin. Suivie d'une étape `notify`, elle fait d'une **synthèse planifiée** une tâche ordinaire.

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="440" rx="14" fill="url(#sdg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires par business unit, rendu le mois dernier et envoyé</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="48" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="264.0" y="98.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">report</text>
  <text x="304" y="99" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">revenue</text>
  <text x="370" y="99" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">analysis:revenue_by_business_unit → xlsx</text>
  <text x="240" y="126" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">QUOI RENDRE</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="240" y="151" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="165.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Une analyse enregistrée (Explorateur) ▾</text>
  <text x="488" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Modèle d'exploration</text>
  <rect x="488" y="151" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="498" y="165.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales · sales ▾</text>
  <text x="736" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Analyses</text>
  <rect x="736" y="151" width="224" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="165.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">CA par business unit ▾</text>
  <text x="240" y="194" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Format</text>
  <rect x="240" y="199" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Excel ▾</text>
  <text x="488" y="194" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Nom du fichier</text>
  <rect x="488" y="199" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="498" y="213.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">monthly-sales</text>
  <text x="736" y="194" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Période</text>
  <rect x="736" y="199" width="224" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Mois dernier ▾</text>
  <text x="240" y="242" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rendre comme l'utilisateur</text>
  <rect x="240" y="247" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">cfo</text>
  <text x="488" y="242" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rendre comme le rôle</text>
  <rect x="488" y="247" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="498" y="261.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sans restriction ▾</text>
  <line x1="240" y1="290" x2="960" y2="290" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="302" width="48" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="264.0" y="314.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">notify</text>
  <text x="304" y="315" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="240" y="340" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="240" y="360" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Destinataires</text>
  <rect x="240" y="366" width="89" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="284.5" y="378.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">role:management</text>
  <rect x="335" y="366" width="117" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="393.5" y="378.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">email:cfo@example.com</text>
  <text x="636" y="360" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Objet</text>
  <rect x="636" y="365" width="324" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="646" y="379.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Synthèse des ventes &#123;DATE&#125;</text>
  <text x="240" y="404" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Joindre (fichiers du run ; ∗ = tous)</text>
  <rect x="240" y="409" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="423.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">∗</text>
  <text x="488" y="404" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Canaux</text>
  <rect x="488" y="415" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M490.5,420.5 L492.8,422.8 L496.8,418" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="505" y="424" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="554.6" y="415" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M557.1,420.5 L559.4,422.8 L563.4,418" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="571.6" y="424" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">email</text>
  <rect x="10" y="140" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet enregistré</text>
  <text x="20" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">analyses et tableaux partagés</text>
  <line x1="210" y1="157.0" x2="240" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdg-arrow)"/>
  <rect x="10" y="250" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Visibilité</text>
  <text x="20" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">périmètre d'un utilisateur ou d'un rôle</text>
  <line x1="210" y1="267.0" x2="240" y2="258" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdg-arrow)"/>
  <rect x="10" y="380" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers du run joints</text>
  <text x="20" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tous, ou par nom</text>
  <line x1="210" y1="397.0" x2="240" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdg-arrow)"/>
  <rect x="1000" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période prédéfinie</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sinon celle de l'analyse</text>
  <line x1="1000" y1="213.0" x2="960" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdg-arrow)"/>
  <rect x="1000" y="350" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marqueurs</text>
  <text x="1010" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125; &#123;RUN_ID&#125; &#123;FILES&#125; &#123;DATE&#125;</text>
  <line x1="1000" y1="367.0" x2="960" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdg-arrow)"/>
</svg>

| Champ (éditeur) | Remarques |
|---|---|
| **Source** | *Une analyse enregistrée (Explorateur)*, *Un tableau de bord d'analyses (Explorateur)* — une section par tuile — ou *Un rapport (plugin)*. |
| **Modèle d'exploration**, **Analyses** / **Tableaux de bord** | Le modèle, puis l'une de ses analyses ou l'un de ses tableaux de bord **partagés**. Un élément privé n'est pas proposé. |
| **Rapport** | Pour un rapport de plugin : le rapport, parmi ceux des applications installées. |
| **Format** | Excel ou PDF — les mêmes documents que l'export de l'explorateur, graphiques dessinés dans le PDF. |
| **Période** | Un préréglage (*Mois dernier*, *Ce trimestre*, *7 derniers jours*…, ou toutes les dates), ou *La période propre de l'analyse*. |
| **Nom du fichier** | Le nom du fichier ; par défaut, le titre de l'analyse. |
| **Rendre comme l'utilisateur** | Le document contient ce que voit cet utilisateur : le périmètre de données de ses rôles, avec ses attributs. Une synthèse rendue pour le responsable d'une société ne contient que cette société. |
| **Rendre comme le rôle** | Le périmètre de données d'un rôle. Une règle dont les valeurs viennent d'un attribut utilisateur n'autorise rien dans ce cas : pour ces rôles, préférer **Rendre comme l'utilisateur**. |

Sans l'un ni l'autre, le document est **sans restriction**. Le détail de l'exécution propose le fichier au téléchargement sous l'étape ; le journal le nomme avec sa taille.

---

## Notification — `notify` \{#notify\}

Envoie un message par les [canaux de notification](./notifications.md), accompagné des fichiers produits par l'exécution.

| Champ (éditeur) | Remarques |
|---|---|
| **Destinataires** | `user:<identifiant>`, `role:<rôle>` ou `email:<adresse>`, un par ligne. |
| **Objet**, **Corps** | Texte avec marqueurs : `{JOB}`, `{RUN_ID}`, `{FILES}` (les noms des fichiers joints), `{DATE}` (la date du jour). |
| **Joindre (fichiers du run ; `*` = tous)** | `*` joint tous les fichiers produits par l'exécution — chaque `report`, et les lignes rejetées d'un `file_load` ; sinon, nommer les fichiers. Un fichier nommé que l'exécution n'a pas produit fait échouer l'étape. |
| **Canaux** | **portal** (la cloche) et **email**. Le compte de messagerie est celui des [notifications](./notifications.md#smtp). |

Le message renvoie vers l'exécution. Le détail de l'exécution liste les fichiers joints sous l'étape.

```toml title="jobs.toml — une synthèse mensuelle"
[[jobs.steps]]
type = "report"
name = "revenue"
report = "analysis:revenue_by_business_unit"
app = "sales"
model = "sales"
format = "pdf"
period = "lastMonth"
as_user = "cfo"

[[jobs.steps]]
type = "notify"
name = "send"
recipients = ["role:management"]
subject = "Synthèse des ventes {DATE}"
body = "La synthèse mensuelle des ventes est jointe : {FILES}."
attach = ["*"]
```

Planifier la tâche le premier du mois (cron `0 7 1 * *`) — voir [Planifications](./jobs/schedules.md).

---

## Réessais et délais \{#retry\}

Le bloc **Politique de réessai** de la tâche (`attempts`, `backoff` fixe ou exponentiel, `base_seconds`) s'applique à chaque étape : une étape est tentée jusqu'à `attempts` fois au total (`1`, la valeur par défaut, signifie aucune nouvelle tentative), avec une attente de `base_seconds` entre deux tentatives — constante, ou doublée à chaque fois avec `exponential`. La tâche entière s'arrête après `timeout_seconds` (4 heures par défaut).
