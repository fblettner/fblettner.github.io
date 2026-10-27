---
title: Séquences et lookups
description: "L'assistant de génération — choix d'une table et d'une colonne, puis création en un clic d'une requête de séquence (numéro suivant) ou de lookup (code et libellé) et de l'élément correspondant du dictionnaire."
keywords: [Liberty Next, séquence, lookup, assistant de génération, dictionnaire, numéro suivant, liste déroulante, ConnectorsBuilder]
---

# Séquences et lookups

Deux formes de requête reviennent assez souvent pour que Liberty fournisse un assistant pour chacune :

| Forme | Rôle | SQL typique |
|---|---|---|
| **Séquence** | Calculer le numéro suivant d'une colonne identifiant. | `SELECT COALESCE(MAX(<col>), 0) + 1 AS NEXT_ID FROM <table>` |
| **Lookup** | Fournir des couples code + libellé à la liste déroulante d'une colonne d'écran. | `SELECT <value>, <label> FROM <table> ORDER BY <label>` |

Les deux passent par l'**assistant de génération** : choix d'une table et de la ou des colonnes, aperçu du SQL en direct, enregistrement. L'enregistrement écrit **deux fichiers** d'un coup : la requête dans le connecteur et l'élément correspondant dans le dictionnaire.

---

## Accès

**Paramètres → Connecteurs → choix du connecteur → barre de modes : Séquences** (ou **Lookups**) **→ ＋ Ajouter une séquence** (ou **＋ Ajouter un lookup**).

La fenêtre s'ouvre, lit le pool et liste les schémas et les tables.

:::note[Sans table]
L'assistant part d'une table. Pour un lookup ou une séquence reposant sur une jointure ou sur un `SELECT` écrit à la main, créer l'élément dans **Paramètres → Dictionnaire** (onglet Lookups ou Séquences) et créer sa requête depuis cet élément — une requête vide, ou **Generate** à partir d'une table en associant ses colonnes aux champs de l'élément.
:::

---

## Séquence — calculer le numéro suivant

Dans Liberty, une *séquence* est une requête qui renvoie un nombre : le numéro à attribuer à une nouvelle ligne. Elle sert la règle `SEQUENCE` du dictionnaire : à l'insertion d'une ligne, le serveur exécute la requête de séquence dans la transaction de l'insertion et écrit le résultat dans la colonne.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sq-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#sq-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle séquence · [connectors.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="200" y="80" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">public.customers ▾</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Colonne clé</text>
  <text x="40" y="138" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(MAX retourne la suivante +1)</text>
  <rect x="200" y="116" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customer_id ▾  ·  INT4</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">WHERE facultatif</text>
  <rect x="200" y="148" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="163" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">ex. region = :region</text>

  <text x="40" y="194" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Nom de la requête</text>
  <rect x="200" y="184" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="199" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_customer_id_from_customers_get</text>

  <text x="40" y="226" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Identifiant</text>
  <rect x="200" y="216" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="231" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_customer_id_from_customers</text>

  <text x="40" y="258" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="200" y="248" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="263" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Récupérer customer_id depuis customers</text>

  <text x="40" y="294" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APERÇU SQL EN DIRECT · modifiable</text>
  <rect x="40" y="304" width="890" height="120" rx="6" fill="rgba(0,0,0,0.40)" stroke="#334155"/>
  <text x="56" y="328" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="56" y="346" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  COALESCE(MAX(customer_id), 0) + 1 AS NEXT_ID</text>
  <text x="56" y="364" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">FROM</text>
  <text x="56" y="382" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  public.customers</text>
</svg>

### Champ par champ

| Champ | Remarques |
|---|---|
| **Table** | La source. Le choix du schéma apparaît sur les pools à plusieurs schémas. |
| **Colonne clé** | La colonne dont `MAX(...) + 1` donne la valeur suivante. La liste présente chaque colonne avec son type SQL. |
| **Clause WHERE optionnelle** | Le corps d'une clause `WHERE`, sans le mot-clé. Des paramètres `:nom` permettent de faire varier le filtre à chaque appel — par exemple `REGION = :REGION` pour une numérotation par région. |
| **Nom de la requête** | Proposé sous la forme `get_<colonne>_from_<table>_get`, modifiable. Le suffixe `_get` est une convention : une séquence est une requête de lecture. |
| **Identifiant** | La clé de la séquence dans le dictionnaire. Proposé sous la forme `get_<colonne>_from_<table>`. |
| **Description** | Affichée dans les listes et les infobulles. Pré-remplie. |
| **SQL généré — modifiable** | Aperçu en direct. Une modification manuelle est conservée tant que la table, la colonne ou la clause WHERE ne changent pas ; un changement rétablit le SQL généré. |

### Ce qui est enregistré

| Fichier | Contenu |
|---|---|
| Connecteur | La requête, dans la section **Séquences** du connecteur. |
| Dictionnaire | `[connectors.<connecteur>.sequences.<id>]` avec `query = "<nom de la requête>"`, `dd_id = "<colonne>"` et la description. |

Une entrée du dictionnaire (ou une colonne d'écran) dotée de la règle `SEQUENCE` et de **Rules values** = `<id>` reçoit son numéro de cette requête à chaque insertion. Avec `dd_id` renseigné, toute colonne dont l'entrée porte cette clé est numérotée elle aussi.

### Accès concurrents

`SELECT MAX(...) + 1` n'est **pas** atomique : deux insertions simultanées peuvent lire le même maximum et produire un doublon. C'est acceptable quand :

- les insertions passent par l'interface, un dialogue à la fois ;
- la colonne porte une contrainte d'unicité en base, qui rejette le doublon (l'écran affiche l'erreur et l'opérateur recommence).

Sous forte concurrence, mieux vaut une **séquence de la base** (`SEQUENCE` Postgres ou Oracle, colonne Identity) et une requête de séquence qui renvoie `nextval(...)` : la base garantit l'unicité.

---

## Lookup — alimenter une liste déroulante

Dans Liberty, un *lookup* est une requête qui renvoie des couples *(code, libellé)* — la source de la liste déroulante d'une colonne. Il sert la règle `LOOKUP` du dictionnaire : une colonne dotée de la règle `LOOKUP` et de **Rules values** = `<id>` affiche le libellé à la place du code et propose les lignes du lookup dans une liste avec recherche.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lk-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#lk-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau lookup · [connectors.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="200" y="80" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">public.regions ▾</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Colonne valeur</text>
  <text x="40" y="138" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(le code stocké sur la ligne)</text>
  <rect x="200" y="116" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">region_code ▾  ·  VARCHAR(8)</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Colonne libellé</text>
  <text x="40" y="174" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(la description montrée à l'utilisateur)</text>
  <rect x="200" y="148" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="163" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">region_name ▾  ·  VARCHAR(60)</text>

  <text x="40" y="196" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">WHERE facultatif</text>
  <rect x="200" y="184" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="199" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">active = 'Y'</text>

  <text x="40" y="228" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Nom de la requête</text>
  <rect x="200" y="216" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="231" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_regions_get</text>

  <text x="40" y="260" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Identifiant</text>
  <rect x="200" y="248" width="360" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="263" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">get_regions</text>

  <text x="40" y="294" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APERÇU SQL EN DIRECT · modifiable</text>
  <rect x="40" y="304" width="890" height="120" rx="6" fill="rgba(0,0,0,0.40)" stroke="#334155"/>
  <text x="56" y="328" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="56" y="346" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  region_code, region_name</text>
  <text x="56" y="364" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">FROM</text>
  <text x="56" y="382" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  public.regions</text>
  <text x="56" y="400" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">WHERE</text>
  <text x="56" y="418" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  active = 'Y' ORDER BY region_name</text>
</svg>

### Champ par champ

| Champ | Remarques |
|---|---|
| **Table** | La source des lignes de la liste. |
| **Colonne valeur** | Le code enregistré sur la ligne quand l'utilisateur choisit une option. Son type doit correspondre à celui de la colonne cible de l'écran. |
| **Colonne libellé** | Le texte présenté à l'utilisateur. **Identique à la colonne valeur** convient quand le code est déjà lisible (un code pays affiché tel quel). |
| **Clause WHERE optionnelle** | Le corps d'une clause `WHERE`, sans le mot-clé. Cas courants : `ACTIVE = 'Y'`, `DELETED_AT IS NULL`. Des paramètres `:nom` permettent des listes en cascade (les régions du pays choisi, par exemple — voir [Liaison de paramètres](./parameter-binding.md)). |
| **Nom de la requête** | Proposé sous la forme `get_<table>_get`. |
| **Identifiant** | La clé du lookup dans le dictionnaire. Proposé sous la forme `get_<table>`. |
| **Description** | Affichée dans les listes et les infobulles. |
| **SQL généré — modifiable** | Aperçu en direct, modifiable. L'`ORDER BY <libellé>` est ajouté d'office ; à retirer si les lignes ont déjà un ordre propre. |

### Ce qui est enregistré

| Fichier | Contenu |
|---|---|
| Connecteur | La requête, dans la section **Lookups** du connecteur. |
| Dictionnaire | `[connectors.<connecteur>.lookups.<id>]` avec `query = "<nom de la requête>"`, `value = "<colonne valeur>"`, `label = "<colonne libellé>"` et la description. |

### Listes en cascade

Quand la liste dépend d'**un autre champ de la même ligne** — *Rôle* dépend d'*Application* —, la requête du lookup prend un paramètre et la colonne de l'écran le lie :

- dans le dialogue et la saisie en grille, par le champ **lookup_param_binds** de la colonne — `{ param = "APP_ID", source = "APP_ID" }` ;
- dans le panneau de filtres de la grille, par le champ **filter_from** de la colonne, qui restreint les options du filtre selon la valeur d'un autre filtre.

Voir [Liaison de paramètres](./parameter-binding.md#where) et [Colonnes](../screens/columns.md).

```sql
SELECT ROLE_ID, ROLE_NAME
FROM   roles
WHERE  APP_ID = :APP_ID
ORDER BY ROLE_NAME
```

---

## Pour aller plus loin

- [Liaison de paramètres](./parameter-binding.md) — séquences et lookups qui reçoivent des paramètres du contexte de l'écran.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — un lookup qui interroge Postgres et Oracle.
- [Dictionnaire](../../dictionary.md) — tous les champs d'un lookup et d'une séquence, et les autres règles.
