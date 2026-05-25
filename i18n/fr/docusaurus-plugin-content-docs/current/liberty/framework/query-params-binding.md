---
title: Liaison des paramètres
description: "Comment les paramètres circulent d'un écran, d'un graphique ou d'un tableau de bord jusqu'à la requête SQL ou l'endpoint HTTP sous-jacent. Déclarés dans l'éditeur de connecteur, affichés comme saisies de formulaire sur la page consommatrice, avec des valeurs par défaut raisonnables (aujourd'hui, semaine en cours, utilisateur de la session) et des filtres en cascade."
keywords: [Liberty Framework, paramètres, named params, filter_from, cascading filter, defaults, session user, lookup, settings, connector builder]
---

# Liaison des paramètres

Chaque requête SQL et chaque endpoint HTTP reçoit ses valeurs via un **modèle de paramètres cohérent** : l'éditeur de connecteur déclare les paramètres ; la page qui consomme le connecteur (un écran, un graphique, un tableau de bord) **les affiche comme saisies de formulaire** ; le framework résout chaque saisie via une petite chaîne de fall-backs avant d'exécuter la requête.

Cette page couvre comment les paramètres apparaissent dans l'interface sur chaque surface, d'où viennent les valeurs par défaut, comment les filtres en cascade rétrécissent une liste déroulante en fonction d'une autre, et le contexte spécial `session` que chaque requête obtient gratuitement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="qp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="qp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#qp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">D'où vient la valeur d'un paramètre ?</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="220" height="160" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="170" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · APPELANT</text>
  <text x="170" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">saisie de la barre d'écran</text>
  <text x="170" y="166" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre de tableau de bord</text>
  <text x="170" y="184" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">valeur fixe du graphique</text>
  <text x="170" y="244" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">saisie explicite de l'utilisateur</text>

  <rect x="300" y="100" width="220" height="160" rx="10" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="410" y="124" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · VALEURS PAR DÉFAUT</text>
  <text x="410" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">déclarées sur le connecteur</text>
  <text x="410" y="166" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">jetons de date (today, last month…)</text>
  <text x="410" y="244" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">appliquées quand l'appelant omet</text>

  <rect x="540" y="100" width="220" height="160" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="650" y="124" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · CONTEXTE DE SESSION</text>
  <text x="650" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">session.user</text>
  <text x="650" y="166" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">session.lang</text>
  <text x="650" y="184" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">session.roles</text>
  <text x="650" y="244" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">toujours disponibles côté serveur</text>

  <rect x="780" y="100" width="160" height="160" rx="10" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · REQUÊTE</text>
  <text x="860" y="200" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">exécutée contre la map</text>
  <text x="860" y="218" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">de paramètres résolue</text>

  <line x1="280" y1="180" x2="300" y2="180" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#qp-arrow)"/>
  <line x1="520" y1="180" x2="540" y2="180" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#qp-arrow)"/>
  <line x1="760" y1="180" x2="780" y2="180" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#qp-arrow)"/>
</svg>

---

## Déclarer un paramètre

Dans **Paramètres → Connecteurs**, ouvrir un connecteur et passer sur l'onglet **Paramètres**. L'onglet est une table — une ligne par paramètre — avec les champs de l'éditeur en dessous.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 700}}>tasks → Paramètres</div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Nom</div><div>Type</div><div>Obligatoire</div><div>Défaut</div><div>Lookup</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>status</div><div>string</div><div>—</div><div>open</div><div>statuses</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>from_date</div><div>date</div><div>—</div><div style={{fontFamily: 'ui-monospace, monospace'}}>{"${month.first}"}</div><div>—</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div>to_date</div><div>date</div><div>—</div><div style={{fontFamily: 'ui-monospace, monospace'}}>{"${month.last}"}</div><div>—</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
</div>

| Champ de l'éditeur | Description |
|---|---|
| **Nom** | Identifiant du paramètre. Apparaît comme nom de placeholder dans la requête (`:name`) et comme libellé de repli de la saisie de formulaire. |
| **Type** | `string` / `int` / `float` / `bool` / `date` / `datetime` / `decimal`. Pilote le type de widget sur les écrans (saisie texte vs sélecteur de date vs case à cocher) et la coercion avant l'exécution de la requête. |
| **Libellé** | Libellé affiché de la saisie sur la page consommatrice. Se rabat sur *Nom* quand vide. Localisé via le [dictionnaire](./dictionary.md). |
| **Obligatoire** | Quand activé, la page consommatrice **doit** fournir une valeur sinon la requête échoue avec `400 Bad Request`. Quand *Obligatoire* est désactivé, *Défaut* prend le relais à l'omission. |
| **Défaut** | Valeur appliquée quand l'appelant omet le paramètre. Voir [Valeurs par défaut](#defaults). |
| **Lookup** | Liste déroulante de lookups du dictionnaire. Quand défini, la saisie de formulaire devient une liste déroulante de paires `{ value, label }` issues du lookup. |
| **Multiple** | Quand activé, la saisie accepte une liste ; la requête reçoit une clause `IN (...)`. |
| **Filter from** | Multi-sélection d'autres paramètres dont celui-ci dépend en cascade — voir [Filtres en cascade](#cascading-filters). |

Les paramètres qui apparaissent dans la requête (`:name`) mais ne sont pas déclarés sont quand même fournis par l'appelant — ils n'ont juste pas de widget ni de valeur par défaut. Utile quand la valeur est toujours définie par un autre mécanisme (une valeur fixe d'un graphique, les params d'un job).

L'**onglet Paramètres** de l'éditeur de connecteur valide chaque ligne en temps réel — une combinaison invalide (par exemple *Obligatoire* activé sans *Défaut* et sans *Lookup*) est signalée avant l'enregistrement.

---

## Où les paramètres apparaissent

Un paramètre apparaît sur chaque page qui consomme le connecteur :

### Écrans

La barre d'outils d'un écran affiche une saisie par paramètre déclaré. Le widget dépend de *Type* et *Lookup* :

| Type / lookup | Widget |
|---|---|
| `string` | Saisie texte |
| `int` / `float` / `decimal` | Saisie numérique |
| `bool` | Case à cocher |
| `date` / `datetime` | Sélecteur date / datetime |
| Tout type avec *Lookup* défini | Liste déroulante alimentée par le lookup |
| `string` + *Multiple* activé | Multi-sélection |

Le bouton *Appliquer* / *Exécuter* de la barre relance la requête de lecture avec les valeurs courantes. Le framework applique un debounce sur les saisies texte (~300 ms) pour que la frappe ne sollicite pas la base à chaque caractère.

### Graphiques

Chaque entrée de graphique dispose d'un panneau **Paramètres fixes** dans son éditeur. Les opérateurs règlent la valeur une fois ; le graphique tourne toujours contre ces valeurs. Utile pour des graphiques « Q1 uniquement » ou « app billing uniquement ». Les jetons de style `${month.first}` sont acceptés ici pour que le graphique suive le calendrier.

### Tableaux de bord

Les tableaux de bord ajoutent une étape : la **Barre de filtres partagée** du tableau de bord (en haut de la disposition) peut exposer un paramètre une fois, et chaque graphique qui référence le même nom de paramètre hérite de la valeur. Les opérateurs voient un seul filtre en haut du tableau de bord, pas un par panneau.

### Jobs

La table *Paramètres* d'une étape de job a la même structure que la déclaration du connecteur — une ligne par paramètre, nom en lecture seule, valeur modifiable. Les substitutions comme `${params.period}` se chaînent entre étapes.

---

## Valeurs par défaut \{#defaults\}

Trois formes de *Défaut* sont acceptées dans l'éditeur de connecteur :

| Forme | Résolution |
|---|---|
| **Littéral** — `open`, `5`, `true` | La valeur littérale. |
| **Jeton de date** — `${today}`, `${yesterday}`, `${week.monday}`, `${week.sunday}`, `${month.first}`, `${month.last}`, `${month.previous}` | La date correspondante dans le fuseau du serveur, ré-évaluée à chaque appel. La valeur par défaut suit donc le calendrier. |
| **Valeur de session** — `${session.user}`, `${session.lang}`, `${session.roles}` | L'identité, la langue, les rôles de l'utilisateur appelant. Documenté ci-dessous. |

Un paramètre *Obligatoire* sans *Défaut* et sans valeur fournie par l'appelant fait échouer l'appel avec `400 Bad Request: missing required parameter`.

---

## Contexte de session \{#session-context\}

Trois valeurs sont toujours disponibles pour chaque requête, même non déclarées :

| Variable | Source |
|---|---|
| `session.user` | Le claim `sub` du JWT — généralement le nom d'utilisateur local ou l'email OIDC. |
| `session.lang` | La langue active (en-tête `X-Liberty-Lang`, avec repli sur la préférence de l'utilisateur). |
| `session.roles` | La liste des rôles de l'appelant. |

Utiles pour les **filtres au niveau ligne** qui ne doivent jamais venir de l'utilisateur. Dans le champ *Requête* de l'éditeur de connecteur, écrire la requête comme :

```sql
SELECT * FROM contracts WHERE owner = :session_user;
```

Le framework réécrit `session.user` en placeholder `:session_user` à l'analyse (SQLAlchemy n'accepte pas les points dans les noms de placeholder).

---

## Filtres en cascade \{#cascading-filters\}

Motif courant : un écran a une liste déroulante *Société* et une liste déroulante *Contrat* — les contrats doivent se restreindre en fonction de la société. Dans l'onglet *Paramètres* de l'éditeur de connecteur, mettre le champ **Filter from** du paramètre *Contrat* à `company` :

| Mise en place |
|---|
| Les deux paramètres définissent *Lookup* — le lookup `company` tire les sociétés, le lookup `contract` tire les contrats. |
| *Contrat* met *Filter from* = `[company]`. |
| La requête de lookup pour *Contrat* référence `:company` dans sa clause `WHERE` (typiquement avec `IS NULL OR` pour gérer le cas « aucune société choisie »). |

Quand l'opérateur choisit une société, le framework **vide** la sélection *Contrat* et re-récupère la liste déroulante avec la nouvelle société. Plusieurs dépendances sont prises en charge — `Filter from = [company, region]`.

La cascade se configure entièrement depuis le [dictionnaire](./dictionary.md) (définitions de lookups) et l'éditeur de connecteur ; aucun SQL n'est écrit depuis l'écran consommateur.

---

## Valeurs multiples

Un paramètre avec *Multiple* activé accepte une **liste** de valeurs et la lie comme `IN (:name)` dans la requête. Le widget devient une multi-sélection.

Dans le champ de requête, écrire `WHERE status IN (:statuses)` — le framework étend le placeholder en coulisses ; l'opérateur tape simplement `IN (:statuses)`. Une liste vide est rejetée (le SQL `IN ()` est illégal sur la plupart des bases) ; associer *Multiple* à *Obligatoire : Off* + une valeur par défaut raisonnable pour gérer le cas vide.

---

## À l'exécution

Pour un écran du connecteur *tasks* sans valeur réglée dans la barre d'outils, le framework construit la map de paramètres résolue au moment de la requête :

```text
status         = "open"          (défaut)
from_date      = 2026-05-01      (jeton de date étendu)
to_date        = 2026-05-31      (jeton de date étendu)
session.user   = "alice"         (session)
session.lang   = "en"            (session)
session.roles  = ["viewer", "editor"]  (session)
```

…et exécute la requête avec. Le panneau réseau des outils de dev du navigateur affiche la requête ; le logger de debug du framework (avec `LIBERTY_LOG_LEVEL=DEBUG`) imprime la map de paramètres résolue à côté du SQL.

---

## Permissions

Une requête hérite du code de permission du connecteur (`sql:<connector>:<query>`, `api:<connector>:<endpoint>`). Le framework refuse tout appel à une requête que l'appelant ne peut pas exécuter ; la page consommatrice (écran / graphique / tableau de bord) élague aussi la surface pour que l'opérateur ne voie pas un widget inutilisable. Voir [Rôles et permissions](./auth/roles-permissions.md).

---

## Sous le capot

Les déclarations de paramètres vivent sur l'entrée du connecteur à l'intérieur de `connectors.toml`. Les opérateurs **n'éditent pas ce fichier à la main** ; l'éditeur de connecteur est l'interface canonique. Les opérateurs avancés peuvent utiliser l'onglet *Raw TOML* comme issue de secours quand une limite de l'éditeur les bloque.

---

## Pour aller plus loin

- [Concepts → Connecteurs](./connectors.md) — la définition de connecteur qui porte les requêtes.
- [Concepts → Dictionnaire](./dictionary.md) — les définitions de lookups référencées par le champ *Lookup*.
- [Concepts → Conditions de formulaire](./form-conditions.md) — règles conditionnelles `visible_when` / `required_when` sur les écrans.
