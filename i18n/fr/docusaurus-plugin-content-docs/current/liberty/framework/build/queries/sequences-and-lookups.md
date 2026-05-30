---
title: Séquences et recherches
description: "La fenêtre Scaffold — sélectionnez une table et une colonne, obtenez une requête de séquence (prochain id) ou de recherche (valeur + libellé) générée et l'entrée correspondante du dictionnaire, enregistrées en un clic."
keywords: [Liberty Framework, séquence, recherche, scaffold, dictionnaire, prochain id, source de liste déroulante, ConnectorsBuilder]
---

# Séquences et recherches

Deux motifs de requête reviennent assez souvent pour que Liberty livre un assistant dédié à chacun :

| Motif | But | SQL typique |
|---|---|---|
| **Séquence** | Calculer la prochaine valeur pour une colonne id. | `SELECT COALESCE(MAX(<col>), 0) + 1 AS NEXT_ID FROM <table>` |
| **Recherche** | Fournir des paires valeur + libellé à une liste déroulante liée à une colonne d'écran. | `SELECT <value>, <label> FROM <table> ORDER BY <label>` |

Tous deux passent par la fenêtre **Scaffold** — cochez une table, cochez la ou les colonnes, obtenez un aperçu SQL en direct, enregistrez. L'enregistrement écrit **deux fichiers** atomiquement : la requête dans le connecteur et l'entrée correspondante dans le dictionnaire.

---

## Où les trouver

**Paramètres → Connecteurs → sélectionnez un connecteur → barre de modes : Séquences** (ou **Recherches**) **→ ＋ Ajouter une séquence** (ou **＋ Ajouter une recherche**).

La fenêtre s'ouvre, introspecte le pool et liste les schémas/tables.

---

## Séquence — générer le prochain id

Une *séquence* dans Liberty est une requête qui retourne un nombre — le prochain id à attribuer à une nouvelle ligne. Elle alimente la règle `SEQUENCE` du dictionnaire : un champ d'écran marqué `SEQUENCE` lit la requête de séquence à chaque ouverture du dialogue pour un INSERT.

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

  <text x="40" y="226" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Identifiant de séquence</text>
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

| Champ | Notes |
|---|---|
| **Table** | La source. Le sélecteur de schéma apparaît sur les pools multi-schémas. |
| **Colonne clé** | La colonne dont `MAX(...) + 1` donne la valeur suivante. L'introspection du pool liste chaque colonne avec son type SQL. |
| **WHERE facultatif** | Le corps d'une clause `WHERE` (sans le mot-clé). Utilisez des paramètres `:placeholder` si le filtre doit varier par appel — par ex. `region = :region` pour cadrer la séquence par région. |
| **Nom de la requête** | Auto-suggéré comme `get_<keyCol>_from_<table>_get` (raccourci par `slugify`). Surchargez librement. Le suffixe `_get` est une convention — les séquences sont des requêtes de lecture. |
| **Identifiant de séquence** | La clé sous `[sequences.*]` dans le dictionnaire. Auto-suggéré comme `get_<keyCol>_from_<table>`. |
| **Description** | Apparaît dans les listages et infobulles. Pré-remplie comme *« Récupérer \<col> depuis \<table> »*. |
| **SQL généré** | Aperçu en direct. Modifiable — vos modifications tiennent jusqu'à ce que vous changiez les entrées colonne/table/WHERE, ce qui restaure la forme générée. |

### Ce qui est enregistré

| Fichier | Entrée |
|---|---|
| Fichier connecteur | `{ name = "<queryName>", type = "sequence", sql = "..." }` |
| Fichier dictionnaire | `[connectors.<conn>.sequences.<seqId>] query = "<queryName>"`, `dd_id = "<keyCol>"`, `description` facultative |

L'entrée du dictionnaire est ce que la règle SEQUENCE consulte. Une colonne d'écran marquée par la règle `SEQUENCE` avec `sequence = "<seqId>"` appelle cette requête à l'ouverture du dialogue pour un INSERT et pré-remplit le champ avec le résultat.

### Note sur la concurrence

`SELECT MAX(...) + 1` n'est **pas** atomique — deux INSERT simultanés peuvent lire le même MAX et produire une collision. Acceptable quand :

- Votre INSERT se déroule derrière une interface transactionnelle (l'utilisateur voit un dialogue à la fois).
- La colonne id porte une contrainte d'unicité au niveau base qui rejettera le doublon (l'écran rapporte l'erreur et l'opérateur recommence).

Pour des charges à forte concurrence, définissez la colonne comme une **SEQUENCE de base** (`SEQUENCE` Postgres, `SEQUENCE` Oracle, colonne Identity) et faites retourner `nextval(...)` à la requête de séquence — la base garantit l'unicité.

---

## Recherche — alimenter les options d'une liste déroulante

Une *recherche* dans Liberty est une requête qui retourne des lignes de paires *(valeur, libellé)* — la source d'une liste déroulante sur une colonne d'écran. Elle alimente la règle `LOOKUP` du dictionnaire : une colonne marquée `LOOKUP` avec `lookup = "<id>"` est rendue comme une liste déroulante alimentée par la requête de recherche.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lk-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#lk-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle recherche · [connectors.crm]</text>
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

  <text x="40" y="260" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Identifiant de recherche</text>
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

| Champ | Notes |
|---|---|
| **Table** | La source des lignes de la liste déroulante. |
| **Colonne valeur** | Le code stocké sur la ligne quand l'utilisateur choisit une option. Le type compte — une colonne valeur `VARCHAR(8)` attend une colonne cible VARCHAR sur l'écran. |
| **Colonne libellé** | Le texte montré à l'utilisateur. Choisissez **Identique à la colonne valeur** quand la valeur est déjà lisible (par ex. code pays affiché tel quel). |
| **WHERE facultatif** | Corps d'une clause `WHERE` sans le mot-clé. Motifs courants : `active = 'Y'`, `deleted_at IS NULL`. Utilisez des paramètres `:placeholder` pour des recherches en cascade (par ex. n'afficher que les régions du pays sélectionné — voir [Liaison de paramètres](./parameter-binding.md)). |
| **Nom de la requête** | Auto-suggéré comme `get_<table>_get`. |
| **Identifiant de recherche** | La clé sous `[lookups.*]` dans le dictionnaire. Auto-suggéré comme `get_<table>`. |
| **Description** | Apparaît dans les listages et infobulles. |
| **SQL généré** | Aperçu en direct, modifiable. Le `ORDER BY <label>` est ajouté automatiquement — retirez-le si les lignes ont un ordre intrinsèque. |

### Ce qui est enregistré

| Fichier | Entrée |
|---|---|
| Fichier connecteur | `{ name = "<queryName>", type = "lookup", sql = "..." }` |
| Fichier dictionnaire | `[connectors.<conn>.lookups.<lookupId>] query = "<queryName>"`, `value = "<valueCol>"`, `label = "<labelCol>"`, `description` facultative |

### Recherches en cascade

Quand la liste déroulante doit être **filtrée par un autre champ du même écran** — par ex. *Rôle* dépend d'*Application* — la recherche nécessite un `:placeholder` dans la clause WHERE, et la colonne de l'écran déclare un `filter_from` qui référence le parent. Le câblage côté écran se trouve dans [Concepts → Conditions de formulaire](../../form-conditions.md) (jusqu'à la sortie de la section Construire les écrans) ; la requête de recherche elle-même a juste besoin du `:placeholder`.

```sql
SELECT role_id, role_name
FROM   roles
WHERE  app_id = :app_id
ORDER BY role_name
```

---

## Et ensuite

- [Liaison de paramètres](./parameter-binding.md) — pour les séquences/recherches qui prennent des paramètres du contexte d'écran.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — pour une recherche qui touche Postgres et Oracle.
- [Concepts → Dictionnaire](../../dictionary.md) — la référence plus large : `SEQUENCE`, `LOOKUP`, `LOGIN`, `SYSDATE` et les autres règles du dictionnaire.
