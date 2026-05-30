---
title: Types d'étape
description: "Dans l'éditeur de tâches, chaque étape choisit un type — SQL Query, SQL Copy, Python, HTTP, LDAP Sync — et l'éditeur déploie le formulaire correspondant. Cette page documente chaque champ, chaque option, ce qui est consigné sur la ligne d'exécution et la permission qui filtre chaque type."
keywords: [Liberty Framework, Nomaflow, step editor, SQL Query, SQL Copy, Python, HTTP, LDAP Sync, type coercion, settings]
---

# Types d'étape

Dans l'[éditeur de tâches](./jobs-toml.md), une étape s'ajoute en cliquant sur *Ajouter une étape* dans la section *Étapes*. L'éditeur d'étape s'ouvre à droite avec un sélecteur **Type** ; choisir un type déploie le formulaire avec les champs propres à ce type. Cinq types sont pris en charge.

Cette page couvre chaque type avec le formulaire affiché, les validations exécutées et le résultat consigné.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '4px'}}>SQL Query</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Exécuter une requête nommée d'un connecteur — lecture ou écriture — sur un pool.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '4px'}}>SQL Copy</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Diffuser des lignes entre pools, convertir les types, basculer la cible de façon atomique.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '4px'}}>Python</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Appeler une fonction sur mesure dans <code>liberty-apps/plugins/</code> — la porte de sortie.</div>
  </div>
  <div style={{border: '1px solid rgba(34,197,94,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#22c55e', marginBottom: '4px'}}>HTTP</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Appeler un endpoint HTTP nommé ou une URL brute.</div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', padding: '14px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '4px'}}>LDAP Sync</div>
    <div style={{fontSize: '12px', lineHeight: '1.5'}}>Refléter un sous-arbre LDAP dans une opération d'upsert de connecteur.</div>
  </div>
</div>

---

## SQL Query

Exécuter une **requête SQL nommée** d'un connecteur. Les requêtes de lecture remontent leur nombre de lignes ; les requêtes d'écriture remontent le nombre de lignes affectées. La requête et ses paramètres sont déclarés dans le catalogue de connecteurs — cette étape en choisit une et fournit les valeurs pour cette tâche.

| Champ du formulaire | Description |
|---|---|
| **Connecteur** | Liste déroulante de chaque connecteur SQL défini sur l'installation. Restreinte aux connecteurs que l'appelant peut exécuter (`sql:<connector>:*`). |
| **Requête** | Liste déroulante des requêtes déclarées sur le connecteur choisi. Les requêtes de lecture ont un badge *read* ; les requêtes d'écriture un badge *write*. |
| **Paramètres** | Une ligne par paramètre déclaré sur la requête. Chaque ligne est `name` (lecture seule) + `value`. Les valeurs prennent en charge les substitutions `${...}` documentées dans [Liaison des paramètres](../query-params-binding.md). |
| **Mode de lecture** | `All` *(défaut)* / `First` / `None`. `None` écarte les lignes et ne consigne que le nombre — utile pour les grandes lectures où seul le compte est nécessaire. |
| **Alias de résultat** | Nom sous lequel le résultat est mis à disposition de l'étape suivante via `${steps.<alias>.…}`. Défaut : le *Nom* de l'étape. |

L'étape consigne `row_count` (lecture), `rows_affected` (écriture), les 100 premières lignes du résultat et le temps écoulé. La page de détail d'exécution les déploie en ligne.

---

## SQL Copy

Diffuser des lignes d'un **connecteur source** vers un **pool cible**, avec conversion de types optionnelle et bascule de table atomique. Le motif type pour ETL des bases opérationnelles vers les entrepôts de reporting.

| Champ du formulaire | Description |
|---|---|
| **Connecteur source** | Liste déroulante de connecteurs SQL. |
| **Requête source** | Liste déroulante des requêtes de lecture du connecteur. |
| **Paramètres source** | Identique à *SQL Query*. |
| **Pool cible** | Liste déroulante de pools (un pool, pas un connecteur — l'étape écrit directement). |
| **Table cible** | Texte libre — la table de staging où les lignes sont insérées. Créée depuis le schéma source si elle manque. |
| **Table finale** | Optionnelle. Nom de la table finale vers laquelle *Table cible* est renommée après la copie. Quand elle est définie, la copie est **atomique** (l'application voit l'ancienne table jusqu'à ce que le renommage les permute). Laisser vide pour ignorer la bascule et garder les lignes dans la table de staging. |
| **Taille de bloc** | Lignes par lot. Défaut 1000. |
| **Conversion de types** | `Strict` *(défaut)* / `JDE` / `Truncate`. Pilote la correspondance des types source vers cible. `JDE` convertit les colonnes décimales à zéro en entiers ; `Truncate` raccourcit les chaînes pour entrer dans une colonne cible plus étroite. |
| **Vider la cible** | Interrupteur. Quand activé, la table de staging est `TRUNCATE` avant la copie. Activé par défaut quand *Table finale* est définie, désactivé sinon. |
| **Filtre Where** | Clause `WHERE` optionnelle ajoutée à la requête source — utile pour les copies incrémentales. |
| **Transform** | Référence optionnelle à un callable Python dans `liberty-apps/plugins/`. La fonction reçoit chaque ligne comme un `dict`, retourne un `dict` (ou `None` pour écarter la ligne). |

L'étape consigne `rows_read`, `rows_written`, `rows_dropped` (par la transformation), `chunks` et le temps écoulé. Les incompatibilités de schéma (colonne manquante sur la cible) font échouer l'étape avec le nom de la colonne dans l'erreur.

---

## Python

Appeler une **fonction Python** dans `liberty-apps/plugins/`. La porte de sortie pour tout ce que les types déclaratifs ne savent pas exprimer.

| Champ du formulaire | Description |
|---|---|
| **Callable** | Référence de la forme `module.path:function`. L'éditeur vérifie que la fonction s'importe proprement à l'enregistrement ; une fonction manquante fait échouer. |
| **Arguments nommés** | Une table de lignes `name` + `value`. Les valeurs sont passées en `**kwargs` au callable. Prend en charge les substitutions `${params.*}` et `${steps.<name>.…}`. |

Voir [Applications et Plugins → Plugins](../apps/plugins.md) pour la signature de la fonction, le contexte d'exécution que le framework injecte (`connectors`, `pools`, `job_id`, etc.) et les conventions d'empaquetage.

L'étape consigne le dict retourné par la fonction, le timing et toute trace d'exception quand la fonction lève.

---

## HTTP

Appeler un **endpoint HTTP / API** — soit un endpoint nommé d'un connecteur HTTP existant, soit une URL brute — et consigner la réponse.

Le formulaire dispose d'un interrupteur au sommet : *Utiliser un endpoint de connecteur* / *Utiliser une URL brute*.

### Variante A — endpoint de connecteur

| Champ du formulaire | Description |
|---|---|
| **Connecteur** | Liste déroulante de connecteurs HTTP / API. |
| **Endpoint** | Liste déroulante des endpoints nommés du connecteur choisi. |
| **Paramètres** | Une ligne par paramètre déclaré, name + value. |
| **Statuts attendus** | Multi-sélection des statuts HTTP acceptables. Défaut `200 201 202 204`. Tout autre statut fait échouer l'étape. |
| **Alias de résultat** | Identique à *SQL Query*. |

### Variante B — URL brute

| Champ du formulaire | Description |
|---|---|
| **Méthode** | `GET` / `POST` / `PUT` / `DELETE` / `PATCH`. |
| **URL** | URL complète. `${env.VAR}` substitue depuis l'environnement du processus. |
| **Body** | Corps JSON optionnel (objet ou tableau). |
| **En-têtes** | Table `name`/`value` optionnelle. |
| **Authentification** | `None` / `Basic` / `Bearer`. Le formulaire Bearer prend un seul champ — câblé à la valeur chiffrée au repos. |

Le corps de la réponse est consigné comme résultat de l'étape (tronqué à 100 KiB pour l'aperçu de la page de détail). À n'utiliser en URL brute que pour des appels ponctuels — les appels récurrents doivent être définis comme endpoint de connecteur, dans le catalogue.

---

## LDAP Sync

Lire un sous-arbre d'un annuaire **LDAP** et insérer ou mettre à jour les lignes résultantes dans un connecteur. Remplace les scripts LDAP ad hoc que la plupart des installations finissent par écrire.

| Champ du formulaire | Description |
|---|---|
| **Pool LDAP** | Liste déroulante de pools LDAP (séparés des pools SQL — définis dans l'onglet *Pools* quand *Type* est *LDAP*). |
| **Base DN** | Base du sous-arbre à lire. |
| **Filter** | Filtre LDAP. Défaut `(objectClass=*)`. |
| **Portée** | `Base` / `One level` / `Subtree`. Défaut *Subtree*. |
| **Correspondance d'attributs** | Une ligne par `ldap_attribute → target_column`. Les attributs répétés sont concaténés avec `;`. |
| **Connecteur cible** | Liste déroulante de connecteurs SQL. |
| **Requête cible** | Liste déroulante des requêtes d'écriture du connecteur (seules les requêtes `:write` apparaissent). |
| **Colonne clé** | La colonne sur laquelle l'upsert s'appuie. |
| **Mode de suppression** | `None` *(défaut)* / `Hard` / `Soft`. *Hard* supprime les lignes qui ne correspondent plus au filtre LDAP ; *Soft* bascule une colonne drapeau (le champ *Colonne de suppression* apparaît). |

L'étape consigne `read`, `upserted`, `deleted`. Un échec de bind LDAP fait échouer rapidement (pas de nouvelle tentative, puisque les identifiants ne vont pas se réparer seuls) ; les échecs par ligne sont consignés mais l'étape continue.

---

## Chaînage des résultats

Chaque étape consigne son résultat sur la ligne d'exécution. L'étape suivante peut le référencer via `${previous_step.<key>}` (l'étape immédiatement précédente) ou `${steps.<name>.<key>}` (toute étape antérieure). La référence se saisit directement dans le champ consommateur — *Paramètres*, *Arguments nommés*, *Body*, etc.

Exemple : une première étape *find-batch* exécute une requête SQL avec `Mode de lecture = First` ; une seconde étape *send-batch* lit `${steps.find-batch.first_row.id}` pour n'envoyer que ce lot. Le champ *Condition* de *send-batch* peut court-circuiter quand aucun lot n'a été trouvé : `${steps.find-batch.row_count} > 0`.

La syntaxe d'expression est la même que celle documentée dans [Conditions de formulaire](../form-conditions.md).

---

## Quand une étape échoue

| Échec | Comportement |
|---|---|
| **Exception dans le callable / le pilote / l'endpoint** | Étape consignée comme `failed` avec la trace. La politique de nouvelle tentative s'applique. |
| **Délai dépassé** | L'étape est annulée. Consignée comme `failed` avec `error = "timeout"`. La politique de nouvelle tentative s'applique. |
| **Connexion à la base perdue en cours d'étape** | Identique à une exception. |
| **Continuer en cas d'erreur = activé** | Étape `failed` mais la tâche continue. Le statut final de la tâche est `partial-success`. |
| **Toutes les nouvelles tentatives épuisées** | Statut final de la tâche `failed`. Aucune étape suivante ne s'exécute. |

La politique de nouvelle tentative est réglée dans l'[éditeur de tâches](./jobs-toml.md#retry-policy) — défaut au niveau de la tâche, avec remplacements par étape dans l'éditeur d'étape.

---

## Permissions

Les types d'étape héritent de la permission sous-jacente du connecteur / endpoint — `sql:<connector>:<query>`, `api:<connector>:<endpoint>`. Une étape qui référence un connecteur que l'appelant ne peut pas exécuter est **refusée à l'enregistrement** avec la permission manquante dans l'erreur.

L'enregistrement et l'exécution de la tâche elle-même sont filtrés par `settings:jobs` + `job:<name>`.

---

## Sous le capot

Les définitions d'étapes sont enregistrées à l'intérieur du bloc TOML de chaque tâche sous `liberty-apps/plugins/<app>/jobs.toml`. Les opérateurs **n'éditent pas ce fichier à la main** ; l'éditeur d'étape est l'interface principale. Les opérateurs avancés peuvent toujours utiliser l'onglet *Raw TOML* de l'[éditeur de tâches](./jobs-toml.md) quand une limite de l'éditeur les bloque.

---

## Pour aller plus loin

- [Éditeur de tâches](./jobs-toml.md) — où les étapes s'organisent dans le pipeline de la tâche.
- [Exécutions et supervision](./runs-monitoring.md) — où les résultats d'étape sont remontés.
- [Applications et Plugins → Plugins](../apps/plugins.md) — écrire les callables Python derrière les étapes *Python*.
- [Concepts → Connecteurs](../connectors.md) — les connecteurs SQL / HTTP / LDAP que les étapes ciblent.
