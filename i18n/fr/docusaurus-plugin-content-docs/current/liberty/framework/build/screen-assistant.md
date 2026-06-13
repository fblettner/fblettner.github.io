---
title: Assistant de création d'écran
description: "Un assistant guidé qui transforme un jeu de tables en écran, dialogue et entrée de menu en une seule passe — choix des tables et jointures, colonnes en onglets, revue du dictionnaire, placement du menu, création."
keywords: [Liberty Framework, assistant écran, générateur d'écran, scaffold, assistant, tables, jointures, dictionnaire, menu, presets de catalogue, JD Edwards Address Book, superutilisateur]
---

# Assistant de création d'écran

L'**Assistant de création d'écran** est un assistant guidé qui construit un écran complet à partir de tables en une seule passe. Vous choisissez une table de base (et d'éventuelles tables jointes), vous répartissez les colonnes dans des onglets de dialogue, vous passez en revue les entrées de dictionnaire, vous placez au besoin un menu — et l'assistant écrit ensemble la requête de connecteur, l'écran, son dialogue et l'entrée de menu.

C'est la voie rapide vers un écran qui fonctionne : ce que vous assembleriez à la main entre les pages Connecteurs, Dictionnaire, Écrans et Menus, l'assistant le produit en une étape contrôlée.

:::info[Outil superutilisateur]
L'assistant est un outil **superutilisateur**. Il apparaît dans la barre latérale, juste au-dessus de *Monitoring*, pour les seuls superutilisateurs. Il s'ouvre en fenêtre par-dessus la page courante — sans route dédiée.
:::

:::note[Ce n'est pas le chat IA]
Cet assistant est **déterministe** — il lit votre schéma et génère du SQL et de la configuration standard ; il n'appelle aucun modèle. C'est une fonctionnalité différente du tiroir de chat [Assistant IA](../ai-assistant.md), qui propose le même genre d'artefacts par la conversation. Utilisez l'assistant quand vous connaissez déjà les tables ; utilisez le chat IA pour explorer.
:::

---

## La passe en cinq étapes

<svg viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sa-pill-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b"/><stop offset="100%" stopColor="#0f172a"/></linearGradient>
    <marker id="sa-arrow-fr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
  </defs>
  <g fontFamily="system-ui, sans-serif">
    <rect x="20" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#4a9eff" strokeWidth="1.4"/>
    <text x="95" y="73" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle">1 · Tables &amp; jointures</text>
    <text x="95" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">table de base + jointures</text>
    <line x1="172" y1="75" x2="200" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="204" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="279" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">2 · Colonnes → onglets</text>
    <text x="279" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">disposer le dialogue</text>
    <line x1="356" y1="75" x2="384" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="388" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="463" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">3 · Dictionnaire</text>
    <text x="463" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">revoir les propositions</text>
    <line x1="540" y1="75" x2="568" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="572" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="#1f2937" strokeWidth="1.2"/>
    <text x="647" y="73" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle">4 · Menu</text>
    <text x="647" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">placer l'entrée</text>
    <line x1="724" y1="75" x2="752" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa-arrow-fr)"/>

    <rect x="756" y="50" width="150" height="50" rx="10" fill="url(#sa-pill-fr)" stroke="rgba(50,215,75,0.5)" strokeWidth="1.4"/>
    <text x="831" y="73" fill="#4ade80" fontSize="11" fontWeight="700" textAnchor="middle">5 · Revue &amp; création</text>
    <text x="831" y="89" fill="#94a3b8" fontSize="8.5" textAnchor="middle">une écriture validée</text>
  </g>
</svg>

Avant les cinq étapes ci-dessus, une courte étape **Cible** demande le **Connecteur source** (un connecteur SQL) et l'**Application** à laquelle le nouvel écran et son menu se rattachent. À partir de là, l'assistant vous guide :

### 1 · Tables & jointures
Choisissez une **table de base** sur le connecteur. Au besoin, **ajoutez une table jointe** — type de jointure et conditions ON — ou partez d'un [preset de catalogue](#presets-de-catalogue) qui câble les jointures pour vous. L'assistant introspecte les colonnes réelles de chaque table, pour que l'étape suivante dispose de vrais champs.

### 2 · Colonnes → onglets
Une disposition à deux volets : les **colonnes disponibles** d'un côté, vos **onglets** de dialogue de l'autre. Répartissez les colonnes dans les onglets, ajoutez / renommez / supprimez des onglets, et marquez les colonnes **clés** (celles qui identifient une ligne). Les colonnes de la grille et le formulaire du dialogue découlent tous deux de ces choix.

### 3 · Dictionnaire
L'assistant analyse la table de base et propose les [entrées de dictionnaire](../dictionary.md) dont l'écran a besoin. Les entrées déjà présentes sont affichées mais grisées et laissées intactes — seules les **manquantes** sont cochées d'avance pour création. Pour chaque entrée proposée, vous réglez le **Libellé**, le **Format**, la **Règle**, la **valeur de règle**, les **paramètres de lookup** (pour une règle UDC / table de correspondance) et la **valeur par défaut**. C'est la même table de scan que l'éditeur de dictionnaire.

### 4 · Menu
Cochez **Ajouter une entrée de menu sous cette application** pour placer l'écran dans la navigation, puis réglez le **Libellé du menu**, un **Menu parent** optionnel et une **Icône**. Laissez décoché pour créer l'écran sans entrée de menu — utile pour un écran atteint seulement comme onglet imbriqué.

### 5 · Revue & création
Nommez la **table / requête** et le **libellé de l'écran**, vérifiez le récapitulatif *À créer* et l'aperçu du SQL de lecture généré, puis **Créer l'écran**. En cas de succès, l'assistant signale que l'écran est créé et actif, et propose de l'ouvrir.

---

## Ce qu'il crée

En une passe validée — rien n'est écrit tant que chaque pièce n'est pas valide — l'assistant ajoute :

| Artefact | Ce qui est posé |
|---|---|
| **Requête de connecteur** | Une nouvelle table sur le connecteur source avec une requête `get`, plus les requêtes d'écriture `post` / `put` / `delete` pour que l'écran soit modifiable. |
| **Entrées de dictionnaire** | Les entrées proposées que vous avez conservées (les existantes ne sont jamais écrasées). |
| **Écran + dialogue** | L'écran sous l'application choisie, avec ses colonnes de grille et un dialogue dont les onglets portent les champs du formulaire. |
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

## Conseils et bonnes pratiques

- **Partez d'un preset quand il convient.** C'est la différence entre choisir une entrée et câbler cinq jointures à la main.
- **Marquez vos clés à l'étape 2.** Les colonnes clés pilotent les requêtes de mise à jour / suppression ; un écran sans clé est en lecture seule par construction.
- **Revoyez le dictionnaire, ne le validez pas à l'aveugle.** Le scan déduit le format du type de colonne (ou, sur JDE, du dictionnaire de données) ; un coup d'œil aux colonnes Format et Règle évite un aller-retour plus tard.
- **Ouvrez l'écran et affinez-le dans le Concepteur.** L'assistant vous donne vite un écran fonctionnel ; les onglets imbriqués, les champs conditionnels et les actions s'ajoutent ensuite dans le [Concepteur d'écran](screens/overview.md).
