---
title: Assistant de création d'écran
description: "Un assistant guidé qui construit un écran complet en un seul parcours, à partir de tables (avec jointures) ou d'une requête de connecteur existante. Choix de la source, sélection des colonnes affichées dans la grille (vue partagée par défaut), disposition optionnelle des colonnes dans des onglets de dialogue, revue du dictionnaire, placement du menu, création."
keywords: [Liberty Framework, assistant écran, générateur d'écran, scaffold, assistant, tables, jointures, écran depuis une requête, vue de grille, colonnes de dialogue, dictionnaire, menu, modèles du catalogue, JD Edwards Address Book, superutilisateur]
---

# Assistant de création d'écran

L'**Assistant de création d'écran** construit un écran complet en un seul parcours guidé. Deux points de départ sont possibles :

- **Table de la base** — une table de base et d'éventuelles tables jointes. L'assistant écrit un nouveau `SELECT` sur le connecteur.
- **Requête existante** — une requête de lecture déjà définie sur le connecteur, réutilisée telle quelle. L'assistant lit ses colonnes et construit l'écran dessus, sans dupliquer la requête. Un modèle du catalogue qui nomme une requête suit le même chemin.

Une fois la source choisie, il reste à retenir les colonnes affichées dans la grille (elles forment la vue partagée par défaut de l'écran), à répartir au besoin des colonnes dans des onglets pour la saisie, à relire les entrées du dictionnaire et à placer une entrée de menu. L'assistant écrit ensuite d'un seul tenant la requête de lecture (quand la source est une table), l'écran, son dialogue, la vue par défaut et l'entrée de menu.

C'est le chemin le plus court vers un écran qui fonctionne : ce qui s'assemblerait à la main entre les pages Connecteurs, Dictionnaire, Écrans et Menus, l'assistant le produit en une seule étape vérifiée.

:::info[Outil superutilisateur]
L'assistant est réservé aux **superutilisateurs**. Accès : **Liberty Next → Construire → Assistant**, ou **Un nouvel écran, avec l'assistant** sur la page [Vue d'ensemble](../studio.md#overview). Il s'ouvre en fenêtre par-dessus la page courante — sans route dédiée — et ne se ferme que par son **×** ou par **Annuler** : un clic à l'extérieur ou la touche Échap n'effacent pas un écran à moitié construit.
:::

:::note[Ce n'est pas le chat IA]
Cet assistant est **déterministe** : il lit le schéma et génère du SQL et de la configuration standard, sans appeler de modèle. C'est une fonctionnalité distincte du chat de l'[Assistant IA](../ai-assistant.md), qui propose le même genre d'éléments au fil d'une conversation. L'assistant convient quand les tables sont connues ; le chat IA, pour explorer.
:::

---

## Les étapes \{#steps\}

<svg viewBox="0 0 1320 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sca-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sca-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sca-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="374" rx="14" fill="url(#sca-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontFamily="system-ui, sans-serif">✦</text>
  <text x="258" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant de création d'écran</text>
  <rect x="1052" y="32" width="28" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1066.0" y="47.5" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="1018" y="32" width="28" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032.0" y="47.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="943" y="32" width="67" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="976.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Un module</text>
  <rect x="875" y="32" width="62" height="24" rx="5" fill="url(#sca-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="906.0" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un écran</text>
  <line x1="221" y1="68" x2="1099" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="82" width="71" height="24" rx="12" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="266" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Cible</text>
  <text x="301" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="317" y="82" width="138" height="24" rx="12" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="330" cy="94" r="7" fill="#4a9eff"/>
  <text x="330" y="97" fill="#0f172a" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="343" y="97.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Tables et jointures</text>
  <text x="445" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="461" y="82" width="109" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="487" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Vue de grille</text>
  <text x="560" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="576" y="82" width="143" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="589" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="602" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Colonnes du dialogue</text>
  <text x="709" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="725" y="82" width="105" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="738" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <text x="751" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <text x="820" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="836" y="82" width="67" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="849" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">6</text>
  <text x="862" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Menu</text>
  <text x="893" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="909" y="82" width="128" height="24" rx="12" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="922" y="97" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">7</text>
  <text x="935" y="97.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Vérifier et créer</text>
  <text x="1027" y="97.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="240" y="126" width="213" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="127" width="102" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="292.0" y="140.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table de la base</text>
  <line x1="344" y1="131" x2="344" y2="143" stroke="#334155" strokeWidth="1"/>
  <text x="398.5" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Requête existante</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR D'UN MODÈLE DU CATALOGUE</text>
  <rect x="240" y="178" width="158" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="319.0" y="192.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Parcourir le catalogue (12)</text>
  <text x="240" y="222" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE DE BASE</text>
  <rect x="240" y="230" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="244.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">F0101</text>
  <rect x="378" y="230" width="702" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="388" y="244.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">F0101 — Address Book Master        ▾</text>
  <rect x="240" y="264" width="840" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="284" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">+ Ajouter une table jointe</text>
  <text x="254" y="304" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">LEFT JOIN F0111 ON F0101.AN8 = F0111.AN8 · + Ajouter une condition</text>
  <line x1="221" y1="348" x2="1099" y2="348" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="360" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="268.5" y="374.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="305.28" y="360" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="336.28" y="374.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">‹ retour</text>
  <rect x="1013" y="360" width="67" height="22" rx="5" fill="url(#sca-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1046.5" y="374.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Suivant ›</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sept étapes</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les étapes faites sont cochées</text>
  <line x1="200" y1="127.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux sources</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables + jointures, ou requête</text>
  <line x1="200" y1="187.0" x2="240" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table de base</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtrer, puis choisir</text>
  <line x1="200" y1="253.0" x2="240" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèles du catalogue</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jointures posées en un clic</text>
  <line x1="1120" y1="127.0" x2="390" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tables jointes</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type de jointure et conditions</text>
  <line x1="1120" y1="207.0" x2="1080" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suivant</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actif quand l'étape est complète</text>
  <line x1="1120" y1="307.0" x2="1080" y2="371" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un écran ou un module</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deux modes, un seul assistant</text>
  <line x1="1120" y1="57.0" x2="906.0" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sca-arrow)"/>
</svg>

L'en-tête bascule entre **Un écran** (les sept étapes ci-dessous) et **Un module** ([un module entier](#module)) ; **↺** réinitialise l'assistant. Les étapes s'affichent en ligne en haut de la fenêtre — une étape terminée est cochée, et **Suivant** n'est actif qu'une fois l'étape en cours complète ; **retour** revient à la précédente.

### 1 · Cible
Le **Connecteur source** (un connecteur SQL) et l'**Application (pour l'écran et le menu)** — une application existante, ou un nouveau nom saisi.

### 2 · Tables et jointures
Deux choix exclusifs :

- **Table de la base** — saisir un filtre (par exemple `F009%`) pour lister les tables, choisir la **Table de base**, puis au besoin **Ajouter une table jointe** (type de jointure et conditions ON). Un [modèle du catalogue](#catalog-presets) pose les jointures en un clic.
- **Requête existante** — choisir une requête de lecture déjà définie sur le connecteur. L'assistant lit ses colonnes au lieu d'écrire un nouveau `SELECT` ; l'écran lit à travers cette requête.

Dans les deux cas, l'assistant lit les colonnes réelles dans la base : les étapes suivantes travaillent sur de vrais champs.

### 3 · Vue de grille
La requête de lecture sélectionne **toutes** les colonnes de la source ; cette étape choisit celles qui s'affichent dans la grille. La sélection est enregistrée comme **vue partagée par défaut** de l'écran, qu'un utilisateur peut ensuite remplacer par ses propres [vues enregistrées](../saved-views.md).

### 4 · Colonnes du dialogue *(facultatif)*
Sans cette étape, l'écran est livré en lecture seule, sans dialogue. Sinon, deux volets : les **Colonnes disponibles** d'un côté, les **onglets** du dialogue de l'autre. Les colonnes se répartissent dans les onglets, les onglets s'ajoutent, se renomment ou se suppriment, et les colonnes **clés** (celles qui identifient une ligne) se cochent : elles servent aux requêtes de mise à jour et de suppression. Seules les colonnes placées ici apparaissent dans le dialogue de saisie ; la grille garde la sélection de l'étape 3.

### 5 · Dictionnaire
L'assistant analyse la source et propose les [entrées du dictionnaire](../dictionary.md) dont l'écran a besoin. Les entrées déjà présentes sont affichées en grisé et laissées intactes ; seules les **manquantes** sont cochées d'avance. Pour chaque entrée proposée se règlent le **Libellé**, le **Format**, la **Règle**, la **valeur de la règle**, les **paramètres de liste** (pour une règle UDC ou de liste de valeurs) et la **valeur par défaut** — la même table d'analyse que dans l'éditeur du dictionnaire.

### 6 · Menu
La case à cocher **Ajouter une entrée de menu sous cette application** place l'écran dans la navigation, avec son **Libellé du menu**, un **Menu parent (facultatif)** et une **Icône**. Décochée, l'écran est créé sans entrée de menu — utile pour un écran atteint seulement comme onglet d'un autre.

### 7 · Vérifier et créer
Le **Nom de table / requête** et le **Libellé de l'écran** se saisissent ici ; le récapitulatif *Sera créé* et l'aperçu de la requête de lecture générée sont à relire avant **Créer l'écran**. En cas de succès, l'assistant affiche *Écran … créé et en service.* et propose **Ouvrir le nouvel écran** ou **En créer un autre**.

L'écran généré a **`auto_load` activé** et l'espace de travail se rafraîchit à la fermeture : le nouvel écran s'ouvre là où pointe le menu, sans recharger le navigateur.

---

## Ce qu'il crée

En une seule écriture validée — rien n'est écrit tant qu'un seul élément est invalide — l'assistant ajoute :

| Artefact | Ce qui est posé |
|---|---|
| **Requête de connecteur** | *Table de la base* — une nouvelle table sur le connecteur source avec une requête `get`, plus les requêtes d'écriture `post` / `put` / `delete` pour que l'écran soit modifiable. *Requête existante* — rien n'est ajouté sur le connecteur ; l'écran lit à travers la requête choisie. |
| **Entrées du dictionnaire** | Les entrées proposées qui ont été conservées (les existantes ne sont jamais écrasées). |
| **Écran + dialogue** | L'écran sous l'application choisie, ses colonnes de grille et — si l'étape 4 a été remplie — un dialogue dont les onglets portent les champs du formulaire. |
| **Vue partagée par défaut** | La sélection de grille de l'étape 3, enregistrée comme vue partagée par défaut de l'écran. |
| **Entrée de menu** | Optionnelle — une feuille sous le menu de l'application, pointant vers le nouvel écran. |

Une table ou un écran dont le nom existe déjà est refusé plutôt qu'écrasé. Comme l'assistant **capture la configuration avant d'écrire**, le changement figure dans l'[historique de configuration](../configuration/config-history.md) au même titre qu'une modification manuelle : il peut être relu ou annulé.

---

## Modèles du catalogue \{#catalog-presets\}

Un **modèle du catalogue** est un point de départ prêt à l'emploi : une table de base et ses jointures déjà posées, sans parcourir le schéma. Quand le connecteur a des modèles, l'étape *Tables et jointures* affiche **Partir d'un modèle du catalogue** et un bouton **Parcourir le catalogue** qui ouvre une liste avec recherche, groupée par famille. Un modèle choisi lit les colonnes de chaque table et pose les jointures, en ramenant chaque condition de jointure de son élément de données (data item) à la colonne physique réelle.

Les modèles sont des fichiers gérés par l'exploitant, dans le répertoire `presets/` du déploiement ; chaque fichier porte une ou plusieurs entrées `[[presets]]` avec une table de base et ses tables jointes. C'est de la configuration, pas du code : il suffit d'en ajouter pour amorcer les écrans que l'équipe construit le plus souvent.

:::info[Spécifique à JDE]
Liberty Apps livre dix catalogues JD Edwards, construits d'après les modèles de données Oracle E1 : **Address Book**, **General Accounting**, **Accounts Payable**, **Accounts Receivable**, **Inventory**, **Sales**, **Procurement**, **Manufacturing**, **Product Data Management** et **Product Costing**. **Procurement** couvre les commandes d'achat, les réceptions et rapprochements de factures, le cheminement des réceptions, l'historique des lignes de commande, les relations fournisseur / article, le catalogue de prix fournisseurs, les règles de coûts annexes et les adresses de commande, combinés avec le fournisseur, l'article, l'établissement et la facture fournisseur. Les préréglages *complets* de chaque domaine (le grand livre fournisseurs avec fournisseur, adresse et société ; la commande client avec lignes, client, article et établissement…) fournissent aussi un modèle prêt à l'emploi à l'[explorateur de données](../explorer/model.md#preset).

Le catalogue **Address Book** (`config/presets/jdedwards/address_book.toml`) : la table maître `F0101` jointe en LEFT au who's-who, aux téléphones, e-mails, adresses, au client et au fournisseur, plus chaque table liée comme modèle de base à part entière. Les conditions de jointure s'écrivent par **data item** (ex. `F0101.AN8`) ; l'assistant résout le préfixe JDE jusqu'à la colonne réelle (`ABAN8`, `AIAN8`, …) pour remplir les jointures. Une table de modèle peut nommer une `query` (un `SELECT * FROM <table>` déjà défini sur le connecteur) : l'assistant lit alors ses colonnes en décrivant cette requête — bien plus rapide sur un gros catalogue JDE.
:::

---

## Un module entier \{#module\}

**Un module**, à côté de **Un écran** dans l'en-tête de l'assistant, construit d'un seul coup tout un module fonctionnel — plusieurs écrans reliés entre eux, leur dossier de menu et leurs entrées de dictionnaire — à partir d'un **catalogue de modules** livré avec les préréglages.

1. Choisir un module dans la liste — avec recherche, groupée par domaine (*JDE · Address Book*) ; chacun indique son application, son connecteur et son nombre d'écrans.
2. L'aperçu lit aussitôt les tables en service et présente l'arbre des écrans, les détails en retrait sous leur parent : **Écran**, **Table**, **Préfixe** (le préfixe de colonnes trouvé dans la base), **Colonnes**, **Absent de la table** (les éléments qui manquent à la table), et l'**État** de chacun — *nouveau*, *existe* ou *remplacé*. La ligne **Menu** présente de la même façon le dossier et ses entrées. Une table ou une clé introuvable bloque le module, avec la raison.
3. **Appliquer le module** écrit tout d'un coup : *Appliqué : 7 requêtes, 7 écrans, 4 entrées de menu, 244 entrées de dictionnaire.* Le menu latéral affiche aussitôt le nouveau dossier, et **Ouvrir le nouvel écran** ouvre son premier écran.

Ce que crée un module :

- une **requête de lecture** par écran, triée sur la clé, avec les tables de référence jointes pour leurs libellés ;
- des **écrans en consultation** dont le dialogue porte les onglets du module, et un onglet par table liée — une liste pour un lien un-à-plusieurs, un formulaire pour un lien un-à-un —, reliés à la clé du parent ;
- les **filtres** que nomme le module, appliqués dans la base ;
- le **dossier de menu** du module, avec une entrée par écran principal ;
- les **entrées de dictionnaire** des colonnes, issues du dictionnaire de données de la source — libellés, formats, listes de valeurs.

L'application est additive : ce qui existe déjà est conservé. **Remplacer les entrées existantes du module** réécrit les requêtes, écrans et entrées de menu propres au module — une modification faite depuis est perdue. Quand tout existe déjà, il n'y a rien à appliquer. Les trois fichiers sont validés avant toute écriture : tout est écrit, ou rien. Réservé aux superutilisateurs.

Liberty Apps livre le module **Address Book** pour JD Edwards EnterpriseOne : le carnet d'adresses avec ses contacts, téléphones, e-mails et adresses datées, les fichiers clients et fournisseurs — voir [Nomajde → Carnet d'adresses](../../nomajde/master-data/address-book.md).

## Sélecteur de colonnes

Les sélecteurs des étapes *Vue de grille* et *Colonnes du dialogue* sont conçus pour les sources larges — parcourir toutes les colonnes d'un `F0101` JDE dans une liste à plat serait pénible. Ils partagent quelques conventions :

- **Groupement arborescent par table parente.** Les colonnes sont regroupées par table source, et une ligne parent replie toutes les colonnes de cette table. Les tables inutiles se replient.
- **Recherche par groupe.** Chaque groupe de table a son propre champ de recherche — saisir le nom (ou le libellé) de la colonne réduit ce seul groupe ; les autres restent dépliés comme ils l'étaient.
- **Ajouter tout par table.** À côté de chaque groupe, un bouton pousse toutes les colonnes de la table dans la disposition en une fois. Utile pour prendre une table parent complète sur la grille et ne garder que les enregistrements fils dans le dialogue.
- **Volets à pleine hauteur.** Les deux volets prennent toute la hauteur de la fenêtre et défilent indépendamment — un sélecteur à plusieurs milliers de colonnes n'écrase pas l'autre côté.
- **Indicateurs de chargement** pendant la lecture du schéma — visibles sur un gros catalogue / une requête lente.

---

## Conseils et bonnes pratiques

- **Partir d'un modèle du catalogue quand il convient.** C'est la différence entre choisir une entrée et poser cinq jointures à la main.
- **Marquer les clés à l'étape Colonnes du dialogue.** Les colonnes clés pilotent les requêtes de mise à jour / suppression ; un écran sans clé est en lecture seule par construction.
- **Réutiliser une requête existante pour un état en lecture seule.** *Requête existante* est le chemin le plus court quand le SQL existe déjà — aucune requête dupliquée n'est ajoutée et l'écran obtient tout de même un dialogue et une revue de dictionnaire.
- **Passer l'étape Colonnes du dialogue pour un écran en lecture seule.** Laisser *Colonnes du dialogue* vide livre un écran sans dialogue d'édition — pratique pour les écrans d'observation où rien ne doit être modifiable.
- **Relire le dictionnaire plutôt que le valider à l'aveugle.** L'analyse déduit le format du type de colonne (ou, sur JDE, du dictionnaire de données) ; un coup d'œil aux colonnes Format et Règle évite un aller-retour plus tard.
- **Ouvrir l'écran et l'affiner dans le Concepteur.** L'assistant donne vite un écran fonctionnel ; les onglets imbriqués, les champs conditionnels et les actions s'ajoutent ensuite dans le [Concepteur d'écran](screens/overview.md).
