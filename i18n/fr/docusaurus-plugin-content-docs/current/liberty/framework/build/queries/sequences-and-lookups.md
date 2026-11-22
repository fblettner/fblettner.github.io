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

**Liberty Next → Données → Connecteurs → choix du connecteur → carte d'étape Séquences** (ou **Lookups**) **→ ＋ Ajouter une séquence** (ou **＋ Ajouter un lookup**).

La fenêtre s'ouvre, lit le pool et liste les schémas et les tables.

:::note[Sans table]
L'assistant part d'une table. Pour un lookup ou une séquence reposant sur une jointure ou sur un `SELECT` écrit à la main, créer l'élément dans **Liberty Next → Données → Dictionnaire** (onglet Lookups ou Séquences) et créer sa requête depuis cet élément — une requête vide, ou **Generate** à partir d'une table en associant ses colonnes aux champs de l'élément.
:::

---

## Séquence — calculer le numéro suivant

Dans Liberty, une *séquence* est une requête qui renvoie un nombre : le numéro à attribuer à une nouvelle ligne. Elle sert la règle `SEQUENCE` du dictionnaire : à l'insertion d'une ligne, le serveur exécute la requête de séquence dans la transaction de l'insertion et écrit le résultat dans la colonne.

<svg viewBox="0 0 1320 527" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="280" y="22" width="760" height="487" rx="14" fill="url(#sq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="296" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle séquence</text>
  <text x="428.24" y="48" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">· [connectors.crm]</text>
  <line x1="280" y1="62" x2="1040" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="296" y="82" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="296" y="88" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="102.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">public.customers</text>
  <text x="1010" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="128" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE CLÉ (MAX RENVOIE LE PROCHAIN +1)</text>
  <rect x="296" y="134" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="148.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customer_id · INTEGER</text>
  <text x="1010" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="174" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLAUSE WHERE OPTIONNELLE (SANS LE MOT-CLÉ)</text>
  <rect x="296" y="180" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="194.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">region = :REGION</text>
  <text x="296" y="220" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE LA REQUÊTE</text>
  <rect x="296" y="226" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="240.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_customer_id_from_customers_get</text>
  <text x="296" y="266" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="296" y="272" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="286.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_customer_id_from_customers</text>
  <text x="296" y="312" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="296" y="318" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="332.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Get customer_id from customers</text>
  <text x="296" y="358" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL GÉNÉRÉ — MODIFIABLE</text>
  <rect x="296" y="366" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="327.0" y="379.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Jeton</text>
  <rect x="296" y="392" width="728" height="59" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="408" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="320" y="408" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT COALESCE(MAX(customer_id), 0) + 1 AS NEXT_ID</text>
  <text x="310" y="423" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="320" y="423" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM public.customers</text>
  <text x="310" y="438" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="320" y="438" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">WHERE region = :REGION</text>
  <line x1="280" y1="465" x2="1040" y2="465" stroke="#1f2937" strokeWidth="1"/>
  <rect x="844" y="475" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.0" y="489.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="934" y="475" width="90" height="22" rx="5" fill="url(#sq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="979.0" y="489.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonne clé</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">MAX(...) + 1 donne le suivant</text>
  <line x1="200" y1="145.0" x2="296" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
  <rect x="20" y="194" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="209" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre facultatif</text>
  <text x="30" y="222" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">:params acceptés</text>
  <line x1="200" y1="211.0" x2="296" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
  <rect x="1080" y="266" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="281" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiant</text>
  <text x="1090" y="294" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la séquence du dictionnaire</text>
  <line x1="1080" y1="283.0" x2="1024" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
  <rect x="1080" y="398" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL généré</text>
  <text x="1090" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifiable avant d'enregistrer</text>
  <line x1="1080" y1="415.0" x2="1024" y2="408" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sq-arrow)"/>
</svg>

### Champ par champ

| Champ | Remarques |
|---|---|
| **Table** | La source. Le choix du schéma apparaît sur les pools à plusieurs schémas. |
| **Colonne clé** | La colonne dont `MAX(...) + 1` donne la valeur suivante. La liste présente chaque colonne avec son type SQL. |
| **Clause WHERE optionnelle (sans le mot-clé)** | Le corps d'une clause `WHERE`. Des paramètres `:nom` permettent de faire varier le filtre à chaque appel — par exemple `REGION = :REGION` pour une numérotation par région. |
| **Nom de la requête** | Proposé sous la forme `get_<colonne>_from_<table>_get`, modifiable. Le suffixe `_get` est une convention : une séquence est une requête de lecture. |
| **Identifiant** | La clé de la séquence dans le dictionnaire. Proposé sous la forme `get_<colonne>_from_<table>`. |
| **Description** | Affichée dans les listes et les infobulles. Pré-remplie. |
| **SQL généré — modifiable** | Aperçu en direct, avec le menu **Jeton**. Une modification manuelle est conservée tant que la table, la colonne ou la clause WHERE ne changent pas ; un changement rétablit le SQL généré. |

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

<svg viewBox="0 0 1320 588" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lk-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lk-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lk-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="280" y="22" width="760" height="548" rx="14" fill="url(#lk-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="296" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau lookup</text>
  <text x="408.08000000000004" y="48" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">· [connectors.crm]</text>
  <line x1="280" y1="62" x2="1040" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="296" y="82" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="296" y="88" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="102.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">public.regions</text>
  <text x="1010" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="128" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE VALEUR (LE CODE STOCKÉ SUR LA LIGNE)</text>
  <rect x="296" y="134" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="148.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">region_code · VARCHAR(8)</text>
  <text x="1010" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="174" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE LIBELLÉ (LA DESCRIPTION AFFICHÉE À L'UTILISATEUR)</text>
  <rect x="296" y="180" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="194.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">region_name · VARCHAR(60)</text>
  <text x="1010" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="296" y="220" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLAUSE WHERE OPTIONNELLE (SANS LE MOT-CLÉ)</text>
  <rect x="296" y="226" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="240.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">active = 'Y'</text>
  <text x="296" y="266" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE LA REQUÊTE</text>
  <rect x="296" y="272" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="286.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_regions_get</text>
  <text x="296" y="312" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="296" y="318" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="332.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">get_regions</text>
  <text x="296" y="358" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="296" y="364" width="728" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="378.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Régions</text>
  <text x="296" y="404" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL GÉNÉRÉ — MODIFIABLE</text>
  <rect x="296" y="412" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="327.0" y="425.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Jeton</text>
  <rect x="296" y="438" width="728" height="74" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="454" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="320" y="454" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT region_code, region_name</text>
  <text x="310" y="469" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="320" y="469" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM public.regions</text>
  <text x="310" y="484" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="320" y="484" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">WHERE active = 'Y'</text>
  <text x="310" y="499" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="320" y="499" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">ORDER BY region_name</text>
  <line x1="280" y1="526" x2="1040" y2="526" stroke="#1f2937" strokeWidth="1"/>
  <rect x="844" y="536" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.0" y="550.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="934" y="536" width="90" height="22" rx="5" fill="url(#lk-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="979.0" y="550.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonne valeur</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le code stocké</text>
  <line x1="200" y1="145.0" x2="296" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonne libellé</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que lit l'utilisateur</text>
  <line x1="200" y1="217.0" x2="296" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
  <rect x="1080" y="312" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="327" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiant</text>
  <text x="1090" y="340" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le lookup du dictionnaire</text>
  <line x1="1080" y1="329.0" x2="1024" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
  <rect x="1080" y="444" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1090" y="459" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL généré</text>
  <text x="1090" y="472" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifiable avant d'enregistrer</text>
  <line x1="1080" y1="461.0" x2="1024" y2="454" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lk-arrow)"/>
</svg>

### Champ par champ

| Champ | Remarques |
|---|---|
| **Table** | La source des lignes de la liste. |
| **Colonne valeur** | Le code enregistré sur la ligne quand l'utilisateur choisit une option. Son type doit correspondre à celui de la colonne cible de l'écran. |
| **Colonne libellé** | Le texte présenté à l'utilisateur. **Identique à la colonne valeur** convient quand le code est déjà lisible (un code pays affiché tel quel). |
| **Clause WHERE optionnelle (sans le mot-clé)** | Le corps d'une clause `WHERE`. Cas courants : `ACTIVE = 'Y'`, `DELETED_AT IS NULL`. Des paramètres `:nom` permettent des listes en cascade (les régions du pays choisi, par exemple — voir [Liaison de paramètres](./parameter-binding.md)). |
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
