---
title: Étapes
description: "Les cinq types d'étape Nomaflow — sql_query, sql_copy, python, http, ldap_sync — leur rôle, leurs champs et quand y recourir."
keywords: [Nomaflow, étapes, sql_query, sql_copy, python, http, ldap_sync, types d'étape, Liberty Framework]
---

# Étapes

Une **étape** représente une unité de travail au sein d'une tâche. Nomaflow propose **cinq types d'étape** — trois déclaratifs (SQL Query, SQL Copy, LDAP Sync), un pour les appels HTTP sortants et une porte de sortie Python pour tout le reste.

Choisissez le type d'étape en vous demandant *« quoi touche cette unité de travail ? »* :

| Si l'unité touche… | Utilisez |
|---|---|
| Une requête SQL sur un connecteur. | **sql_query** |
| Une table entière — déplacement de lignes du connecteur A vers le connecteur B. | **sql_copy** |
| Un point de terminaison HTTP (REST, webhook, API tierce). | **http** |
| Un sous-arbre LDAP / Active Directory. | **ldap_sync** |
| Tout ce qui n'entre naturellement dans aucune des catégories ci-dessus. | **python** |

Cette page sert de **référence** — chaque champ, chaque valeur par défaut. Pour le parcours dans l'éditeur, voir [Créer une tâche](./jobs/create.md).

---

## Champs communs à toutes les étapes

Ces quatre champs s'appliquent quel que soit le type — ils figurent en haut de chaque volet de l'éditeur d'étape.

| Champ | Défaut | Notes |
|---|---|---|
| **`name`** | — | Libellé affiché dans l'historique d'exécution. Doit être unique au sein de la tâche. Utilisez un couple verbe-nom : `refresh-totals`, `fetch-clients`, `sync-users`. |
| **`type`** | — | L'une des cinq valeurs ci-dessous. Verrouillé après création — pour changer de type, supprimer puis recréer. |
| **`enabled`** | `true` | Quand `false`, l'exécuteur enregistre l'étape comme `CANCELED` avec la raison `skipped: disabled` et passe à la suivante. Utile comme interrupteur d'arrêt. |
| **`timeout_seconds`** | `3600` (1 h) | Limite stricte — l'étape est annulée en cas de dépassement. À augmenter pour les longs ETL, à baisser pour les sondes HTTP. |

---

## SQL Query — `sql_query`

Exécute **une** instruction SQL sur un connecteur. L'étape la plus fréquente de Nomaflow.

### Champs

| Champ | Obligatoire | Notes |
|---|---|---|
| **`connector`** | Oui | Nom du connecteur sur lequel exécuter. |
| **`query`** | Oui | L'instruction SQL. Peut être un SELECT (les lignes sont comptées, les résultats ignorés) ou une écriture (INSERT / UPDATE / DELETE / REFRESH). |
| **`params`** | Non | Dictionnaire de paramètres liés transmis à `execute(params=…)` du connecteur. Évite l'interpolation de chaînes et l'injection SQL. |

### Ce qu'elle capture

- Le nombre de lignes renvoyées (SELECT) ou affectées (écriture) par l'instruction.
- L'erreur, si l'instruction a échoué.
- Le SQL complet — émis au niveau DEBUG, pas INFO.

### Quand l'utiliser

| Modèle | Exemple |
|---|---|
| Rafraîchir une vue matérialisée. | `REFRESH MATERIALIZED VIEW reporting.daily_summary` |
| Mettre à jour un compteur. | `UPDATE stats SET total = (SELECT count(*) FROM orders) WHERE name = 'orders'` |
| Supprimer d'anciennes lignes. | `DELETE FROM ly2_job_runs WHERE finished_at < now() - interval '90 days'` |
| Exécuter une procédure stockée. | `CALL refresh_reporting()` |
| Vérifier l'état d'une connexion. | `SELECT 1` |

### Quand préférer autre chose

- **Recopier des lignes d'une table à une autre en flux** — utilisez plutôt `sql_copy`. Il gère le batch, la coercition de types et la bascule atomique.
- **Itérer sur un jeu de résultats dans une logique Python** — utilisez une étape `python` qui ouvre elle-même le connecteur.
- **Exécuter 14 instructions partageant une transaction** — `sql_query` traite une instruction par étape. Soit enchaîner 14 étapes (visibles dans la chronologie, mais sans transaction commune), soit les regrouper dans une procédure stockée ou une étape `python`.

---

## SQL Copy — `sql_copy`

Recopie en flux des lignes depuis un **connecteur + schéma + table source** vers un **connecteur + schéma + table cible**. La colonne vertébrale des charges ETL.

### Champs

| Champ | Obligatoire | Notes |
|---|---|---|
| **`source.connector`** | Oui | Pool source. |
| **`source.schema`** | Oui | Schéma source (`PS920CTL`, `public`, etc.). |
| **`source.table`** | Oui | Nom de la table source. |
| **`target.connector`** | Oui | Pool cible. |
| **`target.schema`** | Oui | Schéma cible. |
| **`target.table`** | Oui | Nom de la table cible. |
| **`mode`** | `overwrite` | `overwrite` / `append` / `upsert`. Voir ci-dessous. |
| **`type_coercion`** | aucune | `jde` pour appliquer les règles de typage JD Edwards (alignement décimal, troncature de caractères). |
| **`decimal_mode`** | `preserve` | Avec la coercition `jde` : `truncate` reproduit la conversion JDE « sans décimales en stockage » ; `preserve` conserve la valeur décimale source. |
| **`batch_size`** | `10000` | Lignes par lecture depuis la source. À augmenter pour les liaisons rapides, à baisser pour les sources à mémoire contrainte. |
| **`strip_both_columns`** | `[]` | Liste des colonnes source dont les valeurs reçoivent un `strip()` complet. À utiliser pour les codes JDE justifiés à droite et complétés à gauche par des espaces. |

### Modes de copie

| Mode | Comportement | Quand |
|---|---|---|
| **`overwrite`** | Écriture dans une **table tampon**, puis bascule atomique avec la cible. La cible n'est **jamais vide** en cours d'exécution. | Par défaut pour l'ETL. La cible reste cohérente même si la lecture source échoue à mi-parcours. |
| **`append`** | Insertion des lignes par-dessus les données existantes. | Instantanés quotidiens, pistes d'audit. |
| **`upsert`** | Insertion des nouvelles lignes, mise à jour des lignes existantes. Nécessite une clé primaire sur la cible. | Dimensions à évolution lente. |

### Coercition de type : `type_coercion = "jde"`

JD Edwards stocke nombres et dates dans des formats qui ne reviennent pas naturellement dans d'autres bases. La coercition `jde` gère trois aspects :

- **Décimales** : JDE ne stocke pas de séparateur décimal — `1234567` avec 2 décimales signifie `12345.67`. Le dictionnaire de données fournit l'échelle ; l'exécuteur l'applique.
- **Dates** : julien (`CYYDDD`) → ISO `YYYY-MM-DD`.
- **Chaînes** : certains codes sont justifiés à droite, complétés à gauche par des espaces. Ajoutez la colonne à `strip_both_columns` pour que la cible reçoive la valeur élaguée.

### Ce qu'elle capture

- Nombre de lignes lues à la source.
- Nombre de lignes écrites à la cible.
- Jalons d'avancement par lot au niveau INFO (`▶ batch 12 of 47 · 120 000 rows`).
- Le moment de la bascule du tampon (mode `overwrite` uniquement).

---

## Python — `python`

Appelle une fonction Python dans vos extensions. La **porte de sortie** — tout ce que les étapes déclaratives ne savent pas exprimer.

### Champs

| Champ | Obligatoire | Notes |
|---|---|---|
| **`callable`** | Oui | `module.path:function_name` (par ex. `reports.summary:generate_pdf`). La forme est validée à l'enregistrement ; l'importabilité est vérifiée à l'exécution. |
| **`op_kwargs`** | `{}` | Map de kwargs transmis à la fonction. Fusionnés au-dessus des `params` partagés de la tâche. |

### Signature de la fonction

```python
# plugins/reports/summary.py
from liberty.jobs.types import StepContext

def generate_pdf(ctx: StepContext, *, period: str, target_path: str, **_) -> dict:
    """Génère le PDF de synthèse mensuelle.

    Retourne un dict — les clés se retrouvent dans le champ `output` de l'étape dans l'historique.
    """
    # ... construire le PDF
    return {"path": target_path, "size_bytes": 12345}
```

| Paramètre | Description |
|---|---|
| **`ctx`** | Un `StepContext` — donne accès aux connecteurs, au journaliseur d'exécution et aux paramètres de la tâche. |
| **`**kwargs`** | Les kwargs fusionnés (`params` de la tâche + `op_kwargs` de l'étape + surcharges par déclenchement issues de la fenêtre). |

### Ce que `ctx` propose

| Méthode / propriété | Rôle |
|---|---|
| **`ctx.get_connector("name")`** | Renvoie le connecteur SQL / API par son nom. |
| **`ctx.log.info(msg)`** / `warning` / `error` | Achemine les lignes de journal vers le flux de l'exécution. |
| **`ctx.session_user`** | Le compte qui a déclenché l'exécution (pour les écritures d'audit). |
| **`ctx.params`** | Les kwargs fusionnés sous forme de dict (équivalent à `**kwargs`, mais disponible comme instantané). |
| **`ctx.is_cancelled()`** | Renvoie `True` si l'opérateur a cliqué sur ✕ Annuler. Les longues étapes Python doivent y revenir périodiquement. |

### Valeur de retour

La valeur de retour de la fonction est stockée dans le champ `output` de l'étape. À garder petite et structurée — `{"rows_affected": N}` est idéal ; renvoyer la table entière ne l'est pas.

### Quand l'utiliser

| Modèle | Pourquoi Python |
|---|---|
| Parcourir un répertoire, transformer chaque fichier. | Le parcours de système de fichiers s'exprime mal en SQL. |
| Décompresser un blob XML et en extraire des champs. | L'analyse XML appartient à Python. |
| Appeler un SDK tiers (AWS S3, Stripe, …). | Idem. |
| Enchaîner plusieurs instructions SQL nécessitant une transaction commune. | La fonction peut ouvrir une connexion et les exécuter toutes. |
| Logique conditionnelle (« supprimer uniquement si nombre > 1000 »). | Une étape `python` peut brancher ; le SQL ne le permet pas sans code procédural. |

### À ne pas faire dans une étape Python

| Anti-modèle | Raison |
|---|---|
| Boucler pendant une heure sans `await` ni vérification d'annulation. | Bloque le worker ; le bouton ✕ Annuler ne peut pas l'arrêter. |
| Ouvrir directement des connexions HTTP / SMTP / base de données externes. | Passez par les connecteurs du framework pour que les identifiants restent déclarés en un seul endroit. |
| Intercepter et avaler les exceptions. | L'exécuteur a besoin de l'exception pour déclencher la nouvelle tentative ou le flux d'échec. |
| Écrire sur stdout. | Utilisez `ctx.log.info(…)` — seules ces lignes alimentent le flux de l'exécution. |

La page [Étapes Python personnalisées](./custom-python.md) déroule l'écriture de la fonction sur des exemples concrets.

---

## HTTP — `http`

Appelle un point de terminaison HTTP. Utile pour les webhooks, les API REST tierces, les microservices internes.

### Champs

| Champ | Obligatoire | Notes |
|---|---|---|
| **`url`** | Oui | URL complète. Prend en charge la substitution `${env:VAR}` depuis le fichier d'environnement du framework. |
| **`method`** | `GET` | L'une des valeurs `GET` / `POST` / `PUT` / `PATCH` / `DELETE`. |
| **`headers`** | `{}` | Map nom d'en-tête → valeur. |
| **`body`** | aucun | Pour POST / PUT / PATCH. Encodé automatiquement en JSON quand il s'agit d'un dict / d'une liste. |

### Ce qu'elle capture

- Le code d'état HTTP.
- Le temps de réponse.
- Le corps de la réponse (tronqué à ~64 Ko dans la sortie d'exécution par précaution).

### Authentification

L'étape HTTP n'a pas de champ « auth » dédié — les identifiants passent par les `headers` :

| Méthode d'authentification | En-tête |
|---|---|
| Jeton porteur | `Authorization: Bearer ${env:THIRD_PARTY_TOKEN}` |
| Basique | `Authorization: Basic <base64>` |
| Clé API | `X-API-Key: ${env:THIRD_PARTY_KEY}` |
| HMAC / requêtes signées | Utilisez une étape `python` — l'étape HTTP ne signe pas les requêtes individuellement. |

La substitution `${env:…}` lit le fichier d'environnement du framework — ne placez jamais de secret directement dans `jobs.toml`.

### Nouvelles tentatives sur HTTP

HTTP est le type d'étape qui tire le plus parti d'une politique de nouvelles tentatives. Un profil courant :

```
retry: { attempts = 3, backoff = exponential, base_seconds = 30 }
```

Couvre la limitation de débit (429), les indisponibilités passagères et les réinitialisations de connexion. La temporisation exponentielle laisse à l'amont une chance de récupérer.

### Quand préférer `python`

| Modèle | Pourquoi Python |
|---|---|
| La réponse doit être analysée en champs structurés. | L'étape `http` enregistre le corps brut — l'analyse a lieu dans une étape Python en aval, ou les deux peuvent être regroupées dans une seule étape Python. |
| L'API nécessite la pagination. | Une étape `python` boucle ; l'étape `http` ne le peut pas. |
| L'authentification exige des signatures calculées (AWS Sig v4, etc.). | Idem. |

---

## LDAP Sync — `ldap_sync`

Récupère un sous-arbre d'un serveur LDAP / Active Directory et l'upserte dans un connecteur cible.

### Champs

| Champ | Obligatoire | Notes |
|---|---|---|
| **`server`** | Oui | URL du serveur LDAP (`ldap://`, `ldaps://`). |
| **`bind_dn`** | Oui | Distinguished Name du compte de service. |
| **`bind_password`** | Oui | Mot de passe. 🔒 chiffré. |
| **`search_base`** | Oui | DN de base à partir duquel chercher (`ou=people,dc=corp,dc=local`). |
| **`search_filter`** | `(objectClass=*)` | Filtre LDAP (`(&(objectClass=user)(memberOf=cn=staff,…))`). |
| **`attributes`** | `[]` | Liste des attributs LDAP à récupérer. Vide = tous les attributs disponibles. |
| **`target_connector`** | Oui | Connecteur SQL d'upsert. |
| **`target_query`** | Oui | Requête d'upsert nommée sur le connecteur cible. |
| **`mapping`** | `{}` | Map attribut LDAP → colonne cible (par ex. `{ "sAMAccountName": "user_id" }`). |

### Ce qu'elle capture

- Nombre d'entrées LDAP récupérées.
- Nombre de lignes upserties.
- Nombre de lignes obsolètes purgées (quand la requête cible prend en charge la suppression).

### Quand l'utiliser

LDAP Sync vise spécifiquement le **miroir d'un annuaire** dans le catalogue utilisateur / groupe d'une application. Quelques profils fréquents :

| Modèle | Source | Cible |
|---|---|---|
| Refléter les utilisateurs AD dans l'application. | `ou=people,dc=corp` | La table utilisateur du framework. |
| Récupérer les appartenances de groupe pour un écran de revue d'accès. | `ou=groups,dc=corp` | Une table plate `(utilisateur, groupe)`. |
| Photographier une OU pour un rapport de conformité. | `ou=france,dc=corp` | Une table d'audit datée. |

### Quand préférer `python`

- Analyse d'attribut sur mesure (Windows `accountExpires` en FILETIME → date).
- Réconciliation multi-serveurs.
- Règles de transformation en ligne (regex sur DN, saut conditionnel).

LDAP Sync vise les **80 % simples**. Pour tout traitement sur mesure, une étape `python` avec la bibliothèque `ldap3` constitue le choix naturel — et c'est exactement ce que fait la tâche `nomasx1-ldap-1` de Nomasx-1.

---

## Désactiver une étape

Chaque étape dispose d'une bascule **activée** (en haut à droite du volet d'éditeur, également présente dans la fenêtre Exécuter avec paramètres). Quand elle est désactivée :

- L'exécuteur enregistre l'étape comme **`CANCELED`** dans l'historique.
- La raison est `skipped: disabled` (visible sur la page de détail de l'exécution).
- Les étapes restantes s'exécutent normalement.

Cas d'usage :

| Motif de désactivation | Endroit |
|---|---|
| Étape temporairement cassée ; le reste de la tâche tourne. | Éditeur — enregistré dans la définition. |
| Rejouer uniquement les étapes 6 à 9 après correction de la donnée. | Fenêtre Exécuter avec paramètres — pour ce déclenchement uniquement. |
| Coupe-circuit en régime permanent sur une purge destructive. | Éditeur — laisse l'étape en activation explicite. |

---

## Sortie d'étape

Chaque ligne d'étape dans l'historique porte un instantané **output** — un petit blob JSON produit par l'exécuteur ou la fonction Python :

| Type d'étape | Sortie typique |
|---|---|
| `sql_query` | `{"rows_affected": 1024}` |
| `sql_copy` | `{"source_rows": 100000, "target_rows": 100000, "elapsed_ms": 14300}` |
| `python` | Ce que la fonction a renvoyé (un dict). |
| `http` | `{"status": 200, "elapsed_ms": 145, "body_preview": "..."}` |
| `ldap_sync` | `{"fetched": 4321, "upserted": 4321, "pruned": 12}` |

Une étape qui ne renvoie **rien** est plus difficile à piloter — l'historique ne peut alors pas dire *ce qui s'est passé*. Renvoyez toujours une structure.

---

## Pour aller plus loin

- [Créer une tâche](./jobs/create.md) — l'éditeur de tâche, où les étapes sont assemblées.
- [Recettes de workflow](./workflows/scheduled-sync.md) — trois modèles de bout en bout mêlant plusieurs types d'étape.
- [Étapes Python personnalisées](./custom-python.md) — la porte de sortie Python en détail.
- [Exécutions → Historique](./runs/history.md) — l'apparence de la sortie d'étape capturée.
