---
title: Dictionnaire
description: "Le dictionnaire regroupe les métadonnées qui transforment des colonnes brutes de base de données en interface lisible — libellés localisés, formats numériques, règles BOOLEAN / ENUM / LOOKUP, valeurs par défaut côté formulaire. Édité depuis Paramètres → Dictionnaire ; réutilisé partout où une colonne de connecteur est affichée."
keywords: [Liberty Framework, dictionnaire, colonnes, énumérations, recherches, libellés, formats, paramètres, BOOLEAN, ENUM, LOOKUP, i18n]
---

# Dictionnaire

:::info[Référence détaillée]
Cette page documente la couche de métadonnées du dictionnaire — libellés, formats, règles BOOLEAN / ENUM / LOOKUP et valeurs par défaut côté formulaire (`LOGIN`, `SYSDATE`, `SEQUENCE`, `PASSWORD`). Pour des parcours orientés tâche — configurer les colonnes d'un écran, échafauder une séquence ou une recherche — voir [Construire → Écrans → Colonnes](./build/screens/columns.md) et [Construire → Requêtes → Séquences et recherches](./build/queries/sequences-and-lookups.md).
:::

Le **dictionnaire** est la couche de métadonnées partagée qui transforme un nom de colonne brut en interface lisible. Une requête de connecteur retourne des colonnes que la base connaît sous leur identifiant (`customer_status`, `due_date`, `invoice_amount`) ; le dictionnaire y attache :

- Un **libellé localisé** ("Statut client", "Date d'échéance", "Montant facture").
- Une **règle d'affichage** (bascule `BOOLEAN`, chip `ENUM`, `LOOKUP` sur un autre connecteur).
- Un **format de nombre / date** ("€ 1 234,56", "dd/MM/yyyy").
- Des **valeurs par défaut côté formulaire** pour les écrans d'écriture (remplissage automatique avec l'utilisateur courant, la date courante, une séquence générée, un mot de passe haché).

Défini une seule fois dans **Paramètres → Dictionnaire**, référencé par chaque écran, graphique et tableau de bord qui consomme la colonne correspondante. Modifier le libellé ici et chaque consommateur le répercute au prochain rendu.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="dc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="dc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#dc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Comment une colonne arrive sur un écran</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="200" rx="10" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="160" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · COLONNE</text>
  <text x="160" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">customer_status</text>
  <text x="160" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">découverte depuis</text>
  <text x="160" y="186" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">le curseur SQL</text>
  <text x="160" y="220" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">due_date</text>
  <text x="160" y="252" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">invoice_amount</text>

  <rect x="300" y="100" width="320" height="200" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="460" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · ENTRÉE DICTIONNAIRE</text>
  <text x="460" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Libellé · Customer status / Statut client</text>
  <text x="460" y="172" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Type · string · Règle · LOOKUP</text>
  <text x="460" y="200" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Type · date · Format · dd/MM/yyyy</text>
  <text x="460" y="228" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Type · decimal · Format · 1 234,56 €</text>
  <text x="460" y="270" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">défini une fois, réutilisé partout</text>

  <rect x="660" y="100" width="280" height="200" rx="10" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="800" y="124" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · AFFICHÉ</text>
  <text x="800" y="156" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cellule de grille — chip coloré depuis</text>
  <text x="800" y="172" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">la table de recherche</text>
  <text x="800" y="200" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">dialogue d'édition — sélecteur de date /</text>
  <text x="800" y="216" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">saisie numérique avec format</text>
  <text x="800" y="244" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">chip de filtre — multi-sélection</text>
  <text x="800" y="260" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">des valeurs de la recherche</text>

  <line x1="260" y1="200" x2="300" y2="200" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>
  <line x1="620" y1="200" x2="660" y2="200" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>
</svg>

---

## Paramètres → Dictionnaire

La page comporte deux onglets : **Colonnes** (une entrée par colonne logique) et **Recherches** (jeux de valeurs nommés que les colonnes référencent).

### Onglet Colonnes

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Dictionnaire · Colonnes</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Rechercher colonne…</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouvelle colonne</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Nom</div><div>Libellé (fr)</div><div>Type</div><div>Règle</div><div>Format</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>customer_status</div><div>Statut client</div><div>string</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>LOOKUP</span></div><div style={{opacity: 0.6}}>—</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>due_date</div><div>Date d'échéance</div><div>date</div><div style={{opacity: 0.6}}>—</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '10px'}}>dd/MM/yyyy</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>invoice_amount</div><div>Montant facture</div><div>decimal</div><div style={{opacity: 0.6}}>—</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '10px'}}>1 234,56 €</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 80px 90px 90px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>is_active</div><div>Actif</div><div>bool</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>BOOLEAN</span></div><div style={{opacity: 0.6}}>—</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
</div>

Cliquer sur *+ Nouvelle colonne* ou sur n'importe quelle ligne pour ouvrir l'éditeur de colonne.

---

## L'éditeur de colonne

| Champ | Effet |
|---|---|
| **Nom** | La clé du dictionnaire — court, snake_case (`customer_status`). Les indices de colonnes des connecteurs référencent ce nom pour récupérer les métadonnées. |
| **Libellé** | Une table par langue des libellés d'affichage. L'éditeur affiche une saisie par langue chargée. Retombe sur le *Nom* si une langue manque. |
| **Description** | Optionnel. Apparaît comme infobulle sur les saisies de formulaire et les en-têtes de colonne. |
| **Type** | `string` / `int` / `float` / `decimal` / `bool` / `date` / `datetime` / `time`. Détermine le widget par défaut sur les écrans (saisie texte vs sélecteur de date vs case à cocher). |
| **Format** | Pour les nombres et les dates — une chaîne de format (`1 234,56 €`, `dd/MM/yyyy`). La cellule de grille et la saisie de formulaire s'affichent avec ce format. |
| **Règle** | `—` (pas de rendu particulier) / `BOOLEAN` / `ENUM` / `LOOKUP` / `PASSWORD`. Voir [Règles d'affichage](#display-rules). |
| **Lookup** | Visible uniquement quand *Règle* vaut `LOOKUP`. Liste déroulante des recherches définies sur l'onglet *Recherches*. |
| **Valeurs Enum** | Visibles uniquement quand *Règle* vaut `ENUM`. Une liste réordonnable de lignes `{ valeur, libellé(s), couleur }`. |
| **Valeurs par défaut côté formulaire** | Optionnel. Voir [Valeurs par défaut côté formulaire](#form-layer-defaults). |
| **Obligatoire** | Marque le champ comme obligatoire par défaut sur chaque formulaire. Les surcharges par écran peuvent toujours relâcher cette contrainte. |
| **Lecture seule** | Marque le champ comme en lecture seule par défaut sur chaque formulaire. |

Un *Enregistrer* reconstruit le registre du dictionnaire ; les consommateurs (écrans, graphiques) se re-rendent avec les nouvelles métadonnées à leur prochain rafraîchissement.

---

## Analyser une table \{#scan-a-table\}

Plutôt que d'ajouter les entrées une à une, le bouton **Analyser une table** (barre d'outils de l'onglet Colonnes) les génère à partir d'une table réelle. Il ouvre le dialogue *Générer des entrées de dictionnaire* : choisissez l'**application** de rattachement, la **table à analyser**, et activez **Connecteur JD Edwards** quand les colonnes portent un préfixe de table de 2 caractères à retirer.

L'analyse lit les colonnes de la table et **propose une entrée par colonne**, en montrant à la fois l'existant et le manquant :

- Les entrées déjà présentes dans le dictionnaire sont listées mais **grisées** et marquées *(exists)* — elles ne sont jamais écrasées.
- Seules les entrées **manquantes** sont cochées d'avance pour création.

Chaque ligne proposée est modifiable sur place avant que vous ne l'acceptiez :

| Champ | Ce qu'il définit |
|---|---|
| **Libellé** | Le libellé d'affichage (sur JDE, prérempli depuis le dictionnaire de données). |
| **Format** | Le type de donnée, déduit du type de colonne SQL — modifiable depuis la liste. |
| **Règle** | Une [règle d'affichage](#display-rules) optionnelle (Booléen, Recherche, Énumération, …). |
| **Valeur de règle** | L'argument de la règle — actif dès qu'une règle est posée. |
| **Paramètres de lookup** | Pour une règle `LOOKUP`, le filtre de recherche (ex. `SY=01,RT=ST`). |
| **Défaut** | Une valeur par défaut. |

Cochez les entrées à garder et confirmez ; les entrées choisies sont écrites dans le dictionnaire sous l'application sélectionnée. Sur un connecteur JDE, l'analyse retire le préfixe de table jusqu'au data item partagé et reprend le libellé, le format, la règle et la valeur par défaut depuis le dictionnaire de données JD Edwards ; sur tout autre connecteur, le libellé reste vide et le format est déduit du type de colonne.

:::note[La même analyse dans l'assistant]
C'est exactement l'analyse que l'[Assistant de création d'écran](build/screen-assistant.md) lance à son étape *Dictionnaire* — un écran construit via l'assistant arrive donc avec son dictionnaire déjà proposé.
:::

---

## Règles d'affichage \{#display-rules\}

Le champ **Règle** change la façon dont une colonne est rendue dans une cellule de grille, dans une saisie de formulaire et dans un chip de filtre.

### `BOOLEAN`

Une colonne `bool` s'affiche en chip / bascule. La saisie de formulaire est un switch. Le filtre est une pastille à trois états (`Tous` / `Oui` / `Non`).

L'éditeur propose :

| Champ | Effet |
|---|---|
| **Libellé Vrai** | Par défaut "Oui" — table par langue. |
| **Libellé Faux** | Par défaut "Non". |
| **Couleur Vrai** / **Couleur Faux** | Fond des pastilles dans la grille. |

### `ENUM`

Un petit jeu de valeurs **statique** déclaré sur la colonne elle-même. À utiliser quand les valeurs sont connues à la conception et ne changent jamais à l'exécution (par exemple `low` / `medium` / `high`).

| Champ par valeur | Effet |
|---|---|
| **Valeur** | La valeur littérale enregistrée en base. |
| **Libellé** | Libellé d'affichage par langue. |
| **Couleur** | Fond de la pastille. |
| **Ordre** | Poignée de glissement pour réordonner. |

S'affiche en chip coloré dans les grilles, en liste déroulante sur les formulaires, en multi-sélection dans les filtres.

### `LOOKUP`

Un jeu de valeurs **dynamique** récupéré depuis une autre requête de connecteur. À utiliser quand les valeurs se trouvent dans une table et peuvent évoluer dans le temps (statuts gérés par un opérateur, listes de pays, etc.).

La colonne pointe sur une entrée *Recherche* ; la recherche elle-même est définie sur l'onglet *Recherches* — voir ci-dessous.

### `PASSWORD`

Masque la valeur dans les grilles (`••••••••`) et affiche une saisie de type mot de passe sur les formulaires. Combiné à la valeur par défaut côté formulaire `PASSWORD`, met en place un chemin d'écriture haché en Argon2 sûr par construction.

---

## Onglet Recherches

Une recherche est une **requête nommée qui retourne des lignes `{ valeur, libellé }`**. Les colonnes en *Règle = LOOKUP* + qui pointent sur une recherche rendent leurs valeurs sous forme de chips étiquetés.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Dictionnaire · Recherches</div>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouvelle recherche</span>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Nom</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>customer-statuses</span></div>
    <div style={{opacity: 0.75}}>Connecteur</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
    <div style={{opacity: 0.75}}>Requête</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>statuses-list ▾</span></div>
    <div style={{opacity: 0.75}}>Colonne valeur</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>code ▾</span></div>
    <div style={{opacity: 0.75}}>Colonne libellé</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>label ▾</span></div>
    <div style={{opacity: 0.75}}>Colonne couleur</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>colour ▾</span></div>
    <div style={{opacity: 0.75}}>Cache</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Par session ▾</span></div>
  </div>
</div>

| Champ | Effet |
|---|---|
| **Nom** | Identifiant référencé par les entrées de colonne (`customer-statuses`). |
| **Connecteur** / **Requête** | Le connecteur SQL et la requête de lecture nommée qui retournent les valeurs. |
| **Colonne valeur** | Colonne du résultat qui porte la valeur enregistrée (ce que la base stocke sur chaque ligne). |
| **Colonne libellé** | Colonne du résultat qui porte le libellé d'affichage. Localisée par le dictionnaire quand la requête joint une table de traductions. |
| **Colonne couleur** | Optionnel. Pilote la couleur de fond du chip dans les grilles. |
| **Filtrer depuis** | Dépendances optionnelles — voir [filtres en cascade](./build/queries/parameter-binding.md). |
| **Cache** | `Aucun` / `Par session` / `Par requête`. Pilote l'agressivité de la mise en cache de la recherche. Par défaut *Par session*. |

Un bouton *Tester* en haut exécute la requête sous-jacente et affiche les paires `{ valeur, libellé }` résolues — utile pour confirmer que les colonnes sont bien alignées.

---

## Valeurs par défaut côté formulaire \{#form-layer-defaults\}

Le champ **Valeurs par défaut côté formulaire** de l'éditeur de colonne permet à une colonne de se remplir automatiquement à l'insertion / mise à jour sans que l'utilisateur saisisse la valeur. Quatre jetons spéciaux sont reconnus :

| Jeton | Effet au moment de l'enregistrement |
|---|---|
| **SEQUENCE** | Récupère la valeur suivante d'une séquence en base — utile pour les identifiants générés quand la base n'auto-incrémente pas. |
| **SYSDATE** | Fixe la valeur au timestamp courant du serveur. |
| **LOGIN** | Fixe la valeur à l'identifiant de l'utilisateur appelant (le `sub` du JWT). |
| **PASSWORD** | Hache la valeur en clair du champ avec Argon2 avant l'enregistrement. Combiné à `Règle = PASSWORD`, produit un chemin d'écriture sûr par construction. |

Les valeurs par défaut côté formulaire s'exécutent **côté serveur** au moment de l'enregistrement — le client ne les voit jamais. Une colonne d'audit auto-remplie avec `LOGIN` ne peut pas être altérée depuis le navigateur.

---

## Règles d'affichage vs règles côté formulaire

Les deux concepts se confondent facilement. Le tableau :

| Aspect | Règle d'affichage | Règle côté formulaire |
|---|---|---|
| **Lieu d'exécution** | Côté client (rendu). | Côté serveur (gestionnaire d'enregistrement). |
| **Ce qu'elle change** | L'apparence de la valeur. | La valeur elle-même. |
| **Exemples** | `BOOLEAN` → chip ; `ENUM` → pastille colorée ; `LOOKUP` → chip étiqueté depuis une table. | `LOGIN` → nom de l'appelant ; `SYSDATE` → now() ; `PASSWORD` → hachage Argon2. |
| **Visible par l'utilisateur ?** | Oui. | Non — la valeur est calculée à l'enregistrement. |

Les deux peuvent s'appliquer à la même colonne. Une colonne d'audit typique *Créé par* a `Règle = LOOKUP` (sur une table d'utilisateurs, pour afficher le nom d'affichage) **et** `Valeur par défaut côté formulaire = LOGIN` (pour que la valeur soit fixée automatiquement à l'insertion).

---

## Localisation

Chaque champ texte de l'éditeur de colonne — *Libellé*, *Description*, *Libellé Vrai* / *Libellé Faux*, *Libellé Enum* — est une **table par langue**. L'éditeur affiche une saisie par langue chargée ; les langues manquantes retombent sur la chaîne de résolution décrite sous [i18n](./apps/i18n.md).

Les opérateurs ajoutent des langues depuis *Paramètres → Langues* ; les nouvelles langues apparaissent alors comme colonnes supplémentaires dans l'éditeur de dictionnaire.

---

## Permissions

L'onglet Dictionnaire est verrouillé par `settings:dictionary`. Les recherches héritent de la permission de leur requête SQL sous-jacente — un appelant qui ne peut pas exécuter `sql:billing:statuses-list` ne voit pas les valeurs de la recherche ; la liste déroulante apparaît vide.

---

## Conseils et bonnes pratiques

- **Définir une entrée de dictionnaire par colonne logique, pas par colonne de base.** Si `customer_status` et `supplier_status` partagent la même recherche, une seule entrée de dictionnaire couvre les deux — faire pointer les deux indices de connecteur dessus.
- **Garder les libellés courts.** Les libellés longs se tronquent dans les en-têtes de grille. Le champ *Description* est le bon endroit pour les explications.
- **Utiliser `ENUM` quand les valeurs sont connues à la conception, `LOOKUP` quand elles ne le sont pas.** Une énumération `priority` (`low` / `medium` / `high`) tient en ligne ; une liste de pays a sa place dans une recherche.
- **Mettre en cache les recherches *Par session*.** Le cache par requête ajoute une requête à chaque ouverture d'écran ; *Aucun* est rarement nécessaire.
- **Colonnes d'audit : `LOOKUP` + `LOGIN` / `SYSDATE`.** Le motif le plus propre — lisible à l'affichage, auto-rempli à l'enregistrement.

---

## Sous le capot

Les définitions du dictionnaire sont enregistrées dans `liberty-apps/config/dictionary.toml`. Les opérateurs **ne modifient pas ce fichier à la main** en exploitation normale ; l'éditeur de dictionnaire est l'interface de référence. L'onglet *TOML brut* de [Paramètres → Dictionnaire](./configuration/settings-ui.md) est l'échappatoire quand un manque de l'éditeur bloque une modification avancée.

---

## Pour aller plus loin

- [Connecteurs](./connectors.md) — où les indices de colonnes lient une colonne SQL découverte à une entrée de dictionnaire.
- [Écrans](./build/screens/overview.md) — comment les métadonnées de colonne façonnent la grille et le dialogue d'édition.
- [Conditions de formulaire](./form-conditions.md) — règles de visibilité / obligatoire / désactivé conditionnelles par-dessus les règles du dictionnaire.
- [Applications et Plugins → i18n](./apps/i18n.md) — ajouter des langues.
