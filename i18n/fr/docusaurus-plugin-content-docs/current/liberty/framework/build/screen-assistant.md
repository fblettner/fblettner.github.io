---
title: Assistant de création d'écran
description: "Un assistant guidé qui construit un écran complet en une seule passe, à partir de tables (avec jointures) ou d'une requête de connecteur existante. Choix de la source, sélection des colonnes affichées dans la grille (vue partagée par défaut), disposition optionnelle des colonnes dans des onglets de dialogue, revue du dictionnaire, placement du menu, création."
keywords: [Liberty Framework, assistant écran, générateur d'écran, scaffold, assistant, tables, jointures, écran depuis une requête, vue de grille, colonnes de dialogue, dictionnaire, menu, presets de catalogue, JD Edwards Address Book, superutilisateur]
---

# Assistant de création d'écran

L'**Assistant de création d'écran** construit un écran complet en une seule passe. Deux points de départ sont possibles :

- **À partir de tables** — une table de base et d'éventuelles tables jointes. L'assistant écrit un `SELECT` neuf sur le connecteur.
- **À partir d'une requête existante** — réutilisation en lecture d'une requête déjà définie sur le connecteur. L'assistant lit ses colonnes et construit l'écran par-dessus ; aucune requête dupliquée n'est générée. Un preset de catalogue qui nomme une requête suit le même chemin.

Une fois la source choisie, vous sélectionnez les colonnes affichées dans la grille (elles deviennent la vue partagée par défaut de l'écran), vous répartissez au besoin des colonnes dans des onglets pour l'édition, vous revoyez les entrées de dictionnaire et vous posez une entrée de menu — l'assistant écrit ensemble la requête de lecture (quand la source est une table), l'écran, son dialogue, la vue par défaut et l'entrée de menu.

C'est la voie rapide vers un écran qui fonctionne : ce que vous assembleriez à la main entre les pages Connecteurs, Dictionnaire, Écrans et Menus, l'assistant le produit en une étape contrôlée.

:::info[Outil superutilisateur]
L'assistant est un outil **superutilisateur**. Il apparaît dans la barre latérale, juste au-dessus de *Monitoring*, pour les seuls superutilisateurs. Il s'ouvre en fenêtre par-dessus la page courante — sans route dédiée.
:::

:::note[Ce n'est pas le chat IA]
Cet assistant est **déterministe** — il lit votre schéma et génère du SQL et de la configuration standard ; il n'appelle aucun modèle. C'est une fonctionnalité différente du tiroir de chat [Assistant IA](../ai-assistant.md), qui propose le même genre d'artefacts par la conversation. Utilisez l'assistant quand vous connaissez déjà les tables ; utilisez le chat IA pour explorer.
:::

---

## La passe

<svg viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sa-pill-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b"/><stop offset="100%" stopColor="#0f172a"/></linearGradient>
    <marker id="sa-arrow-fr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
  </defs>
  <g fontFamily="system-ui, sans-serif">
    <rect x="10" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#4a9eff" strokeWidth="1.4"/>
    <text x="85" y="73" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle">1 · Source</text>
    <text x="85" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">tables + jointures ou requête</text>
    <line x1="162" y1="75" x2="184" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="188" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="263" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">2 · Vue de grille</text>
    <text x="263" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">vue partagée par défaut</text>
    <line x1="340" y1="75" x2="362" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="366" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="3 3"/>
    <text x="441" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">3 · Colonnes de dialogue</text>
    <text x="441" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">optionnel — en onglets</text>
    <line x1="518" y1="75" x2="540" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="544" y="50" width="130" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="609" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">4 · Dictionnaire</text>
    <text x="609" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">revoir les propositions</text>
    <line x1="676" y1="75" x2="698" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="702" y="50" width="120" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="762" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">5 · Menu</text>
    <text x="762" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">placer l'entrée</text>
    <line x1="824" y1="75" x2="846" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="850" y="50" width="140" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="rgba(50,215,75,0.5)" strokeWidth="1.4"/>
    <text x="920" y="73" fill="#4ade80" fontSize="11" fontWeight="700" textAnchor="middle">6 · Revue &amp; création</text>
    <text x="920" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">une écriture validée</text>
  </g>
</svg>

Avant les étapes ci-dessus, une courte étape **Cible** demande le **Connecteur source** (un connecteur SQL) et l'**Application** à laquelle le nouvel écran et son menu se rattachent. À partir de là, l'assistant vous guide :

### 1 · Source
Deux choix mutuellement exclusifs :

- **À partir de tables** — choisir une **table de base** sur le connecteur, puis au besoin **ajouter une table jointe** (type de jointure et conditions ON). Un [preset de catalogue](#presets-de-catalogue) câble les jointures en un clic.
- **À partir d'une requête existante** — choisir une requête de lecture déjà définie sur le connecteur. L'assistant introspecte ses colonnes au lieu d'écrire un nouveau `SELECT` ; l'écran lit à travers la requête existante.

Dans les deux cas, l'assistant lit les colonnes réelles pour que les étapes suivantes disposent de vrais champs.

### 2 · Vue de grille
La requête de lecture sélectionne **toutes** les colonnes de la source ; cette étape choisit lesquelles apparaissent dans la grille. La sélection retenue est enregistrée comme **vue partagée par défaut** de l'écran — une vue partagée qu'un utilisateur peut ensuite surcharger avec ses propres [vues enregistrées](../saved-views.md). Marquez aussi les colonnes **clés** (celles qui identifient une ligne) : elles pilotent les requêtes de mise à jour / suppression, et un écran sans clé est en lecture seule par construction.

### 3 · Colonnes de dialogue *(optionnel)*
Sauter cette étape produit un écran en lecture seule — pas de dialogue. Sinon, une disposition à deux volets : les **colonnes disponibles** d'un côté, vos **onglets** de dialogue de l'autre. Répartissez les colonnes dans les onglets, ajoutez / renommez / supprimez des onglets. Seules les colonnes posées ici apparaissent dans le dialogue d'édition ; la grille garde la sélection de l'étape 2.

### 4 · Dictionnaire
L'assistant analyse la source et propose les [entrées de dictionnaire](../dictionary.md) dont l'écran a besoin. Les entrées déjà présentes sont affichées mais grisées et laissées intactes — seules les **manquantes** sont cochées d'avance pour création. Pour chaque entrée proposée, vous réglez le **Libellé**, le **Format**, la **Règle**, la **valeur de règle**, les **paramètres de lookup** (pour une règle UDC / table de correspondance) et la **valeur par défaut**. C'est la même table de scan que l'éditeur de dictionnaire.

### 5 · Menu
Cochez **Ajouter une entrée de menu sous cette application** pour placer l'écran dans la navigation, puis réglez le **Libellé du menu**, un **Menu parent** optionnel et une **Icône**. Laissez décoché pour créer l'écran sans entrée de menu — utile pour un écran atteint seulement comme onglet imbriqué.

### 6 · Revue & création
Nommez la **table / requête** et le **libellé de l'écran**, vérifiez le récapitulatif *À créer* et l'aperçu du SQL de lecture généré, puis **Créer l'écran**. En cas de succès, l'assistant signale que l'écran est créé et actif, et propose de l'ouvrir.

L'écran généré a **`auto_load` activé** et l'espace de travail se rafraîchit à la fermeture — le nouvel écran s'ouvre là où pointe le menu, sans rechargement manuel du navigateur.

---

## Ce qu'il crée

En une passe validée — rien n'est écrit tant que chaque pièce n'est pas valide — l'assistant ajoute :

| Artefact | Ce qui est posé |
|---|---|
| **Requête de connecteur** | *À partir de tables* — une nouvelle table sur le connecteur source avec une requête `get`, plus les requêtes d'écriture `post` / `put` / `delete` pour que l'écran soit modifiable. *À partir d'une requête existante* — rien n'est ajouté sur le connecteur ; l'écran lit à travers la requête choisie. |
| **Entrées de dictionnaire** | Les entrées proposées que vous avez conservées (les existantes ne sont jamais écrasées). |
| **Écran + dialogue** | L'écran sous l'application choisie, ses colonnes de grille et — si l'étape 3 a été remplie — un dialogue dont les onglets portent les champs du formulaire. |
| **Vue partagée par défaut** | La sélection de grille de l'étape 2, enregistrée comme vue partagée par défaut de l'écran. |
| **Entrée de menu** | Optionnelle — une feuille sous le menu de l'application, pointant vers le nouvel écran. |

Une table ou un écran dont le nom existe déjà est refusé plutôt qu'écrasé. Comme l'assistant **capture la configuration avant d'écrire**, le changement figure dans l'[historique de configuration](../configuration/config-history.md) au même titre qu'une modification manuelle : vous pouvez le revoir ou le rétablir.

---

## Presets de catalogue

Un **preset de catalogue** est un point de départ prêt à l'emploi : une table de base et ses jointures déjà câblées, pour éviter de parcourir le schéma. Quand le connecteur a des presets, l'étape *Tables & jointures* affiche **Partir d'un preset de catalogue** et un bouton **Parcourir le catalogue** qui ouvre une liste recherchable, groupée par famille. En sélectionner un introspecte les colonnes de chaque table et câble les jointures — en résolvant chaque condition de jointure depuis son data item jusqu'à la colonne physique réelle.

Les presets sont des fichiers gérés par l'opérateur, sous le répertoire `presets/` du déploiement ; chaque fichier porte une ou plusieurs entrées `[[presets]]` avec une table de base et ses tables jointes. C'est de la configuration, pas du code — ajoutez les vôtres pour amorcer les écrans que votre équipe construit le plus souvent.

:::info[Spécifique à JDE]
Liberty Apps inclut un catalogue **JD Edwards Address Book** (`config/presets/jdedwards/address_book.toml`) : la table maître `F0101` jointe en LEFT au who's-who, aux téléphones, e-mails, adresses, au client et au fournisseur, plus chaque table liée comme preset de base à part entière. Les conditions de jointure s'écrivent par **data item** (ex. `F0101.AN8`) ; l'assistant résout le préfixe JDE jusqu'à la colonne réelle (`ABAN8`, `AIAN8`, …) pour remplir les jointures. Une table de preset peut nommer une `query` (un `SELECT * FROM <table>` déjà défini sur le connecteur) : l'assistant lit alors ses colonnes en décrivant cette requête — bien plus rapide sur un gros catalogue JDE.
:::

---

## Sélecteur de colonnes

Les sélecteurs des étapes 2 et 3 sont pensés pour les sources larges — un scan complet d'un `F0101` JDE n'est pas amusant dans une liste plate. Ils partagent quelques conventions :

- **Groupement arborescent par table parente.** Les colonnes sont regroupées par table source, et une ligne parent replie toutes les colonnes de cette table. Repliez celles qui ne servent pas.
- **Recherche par groupe.** Chaque groupe de table a son propre champ de recherche — saisir le nom (ou le libellé) de la colonne réduit ce seul groupe ; les autres restent dépliés comme ils l'étaient.
- **Ajouter tout par table.** À côté de chaque groupe, un bouton pousse toutes les colonnes de la table dans la disposition en une fois. Utile pour prendre une table parent complète sur la grille et ne garder que les enregistrements fils dans le dialogue.
- **Volets à pleine hauteur.** Les deux volets prennent toute la hauteur de la fenêtre et défilent indépendamment — un sélecteur à plusieurs milliers de colonnes n'écrase pas l'autre côté.
- **Indicateurs de chargement** pendant la lecture du schéma — visibles sur un gros catalogue / une requête lente.

---

## Conseils et bonnes pratiques

- **Partez d'un preset quand il convient.** C'est la différence entre choisir une entrée et câbler cinq jointures à la main.
- **Marquez vos clés à l'étape 2.** Les colonnes clés pilotent les requêtes de mise à jour / suppression ; un écran sans clé est en lecture seule par construction.
- **Réutilisez une requête existante pour un état en lecture seule.** *À partir d'une requête existante* est le chemin le plus court quand le SQL existe déjà — aucune requête dupliquée n'est ajoutée et l'écran obtient tout de même un dialogue et une revue de dictionnaire.
- **Sautez l'étape 3 pour un écran en lecture seule.** Laisser *Colonnes de dialogue* vide livre un écran sans dialogue d'édition — pratique pour les écrans d'observation où rien ne doit être modifiable.
- **Revoyez le dictionnaire, ne le validez pas à l'aveugle.** Le scan déduit le format du type de colonne (ou, sur JDE, du dictionnaire de données) ; un coup d'œil aux colonnes Format et Règle évite un aller-retour plus tard.
- **Ouvrez l'écran et affinez-le dans le Concepteur.** L'assistant vous donne vite un écran fonctionnel ; les onglets imbriqués, les champs conditionnels et les actions s'ajoutent ensuite dans le [Concepteur d'écran](screens/overview.md).
