---
title: Requêtes — vue d'ensemble
description: "Organisation de la page Connecteurs de Liberty — Tables / Non classées / Séquences / Recherches — et les quatre types de requêtes que gère chaque onglet."
keywords: [Liberty Framework, requêtes, connecteurs, CRUD, séquences, recherches, ConnectorsBuilder, interface Paramètres]
---

# Requêtes — vue d'ensemble

Une **requête** dans Liberty est une instruction SQL nommée rattachée à un **connecteur** (lui-même rattaché à un **pool**, c'est-à-dire à une base de données). Les écrans, tableaux de bord, graphiques, recherches et séquences du dictionnaire et l'assistant IA consomment tous des requêtes — ajouter une requête est donc la modification la plus fréquente dans l'interface Paramètres.

La page qui gère les requêtes est **Paramètres → Connecteurs**. Cette vue d'ensemble en dresse la carte ; les pages suivantes détaillent chaque chemin d'ajout.

---

## La page Connecteurs en un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#ov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Connecteurs</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="120" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="100" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Connecteur</text>
  <rect x="780" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="868" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="908" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>

  <rect x="40" y="120" width="200" height="220" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="140" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <rect x="58" y="150" width="164" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="68" y="165" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">▣ crm</text>
  <text x="58" y="190" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">▣ nomajde</text>
  <text x="58" y="210" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">▣ nomasx1</text>
  <text x="58" y="240" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCES DE DONNÉES</text>
  <text x="58" y="262" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⛁ default</text>
  <text x="58" y="282" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⛁ jdedwards</text>
  <text x="58" y="302" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⛁ reporting</text>

  <rect x="252" y="120" width="708" height="220" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="268" y="140" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm] · sql</text>

  <rect x="268" y="152" width="80" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="308" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Paramètres</text>
  <rect x="350" y="152" width="68" height="24" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="384" y="168" fill="#0b1220" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <rect x="420" y="152" width="100" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="470" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Non classées</text>
  <rect x="522" y="152" width="84" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="564" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Séquences</text>
  <rect x="608" y="152" width="80" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="648" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recherches</text>
  <rect x="868" y="152" width="80" height="24" rx="6" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="908" y="168" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">＋ Table</text>

  <rect x="268" y="190" width="676" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="284" y="210" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers</text>
  <text x="430" y="210" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Clients du portefeuille</text>
  <rect x="760" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="774" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="792" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="806" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="824" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="838" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="856" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="870" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>

  <rect x="268" y="232" width="676" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="284" y="252" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">deals</text>
  <text x="430" y="252" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Affaires ouvertes</text>
  <rect x="760" y="238" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="774" y="252" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="792" y="238" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="806" y="252" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="824" y="238" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="838" y="252" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="856" y="238" width="28" height="20" rx="3" fill="rgba(255,255,255,0.05)" stroke="#334155" strokeDasharray="2,2"/>
  <text x="870" y="252" fill="#64748b" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>

  <rect x="268" y="274" width="676" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="284" y="294" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">activities</text>
  <text x="430" y="294" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Notes et appels</text>
  <rect x="760" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="774" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="792" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="806" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="824" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="838" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="856" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="870" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
</svg>

Trois zones :

| Zone | Contenu |
|---|---|
| **Barre d'outils haute** | Actions globales — *＋ Connecteur*, *Annuler*, *Enregistrer*. Le bouton *Enregistrer* écrit le fichier connecteur et déclenche un rechargement à chaud — aucun redémarrage de processus n'est nécessaire. |
| **Navigation gauche** | Deux groupes : *Applications* (connecteurs dotés d'un menu — ce sont les applications visibles dans le sélecteur du haut) et *Sources de données* (connecteurs qui alimentent en données mais n'apparaissent pas dans le sélecteur). Cliquer sur un nom l'ouvre à droite. |
| **Volet droit** | L'éditeur du connecteur sélectionné. Une barre de modes en haut permet de choisir l'une des cinq vues — *Paramètres*, *Tables*, *Non classées*, *Séquences*, *Recherches*. |

---

## Les quatre types de requêtes

Chaque requête porte un `type` qui indique à la page à quel onglet elle appartient :

| Onglet | `type` | Contenu |
|---|---|---|
| **Tables** | `table` | Requêtes qui suivent la convention de nommage CRUD — `<base>_get`, `<base>_put`, `<base>_post`, `<base>_delete`. La page les regroupe par nom de base et affiche une ligne par table avec quatre badges d'emplacement (GET / PUT / POS / DEL). |
| **Non classées** | `custom` | Requêtes isolées non liées à un jeu CRUD de table — opérations en masse, requêtes métier, rapports. Exemple : `monthly_revenue`, `purge_old_logs`. |
| **Séquences** | `sequence` | Requêtes qui génèrent la valeur suivante pour une règle `[sequences.*]` du dictionnaire. Corps typique : `SELECT COALESCE(MAX(<col>), 0) + 1 FROM <table>`. |
| **Recherches** | `lookup` | Requêtes qui fournissent des paires valeur + libellé pour une règle `[lookups.*]` du dictionnaire. Corps typique : `SELECT <value>, <label> FROM <table>`. |

L'onglet dans lequel tombe la requête est déterminé par son `type` — pas par son nom. Une requête nommée `customer_balance` typée `custom` se trouve dans Non classées ; la même nommée typée `lookup` se trouve dans Recherches.

---

## Les boutons d'ajout — un par onglet

L'ajout est **propre à chaque onglet**, car chaque type suit son propre flux de création.

| Onglet | Bouton d'ajout | Ce qui s'ouvre |
|---|---|---|
| **Tables** | *＋ Ajouter une table* | Une fenêtre de choix : **Générer depuis la base** (l'Assistant CRUD — il introspecte le pool et génère les quatre requêtes) ou **Modèle vide** (demande un nom de base et crée un modèle `<base>_get` vide). |
| **Non classées** | *＋ Ajouter une requête* | Une saisie de nom — crée une requête `custom` vide à compléter à la main. |
| **Séquences** | *＋ Ajouter une séquence* | La fenêtre Scaffold — sélectionnez une table, sélectionnez une colonne clé, obtenez un aperçu SQL en direct, enregistrez (écrit la requête **et** l'entrée correspondante du dictionnaire). |
| **Recherches** | *＋ Ajouter une recherche* | La fenêtre Scaffold — sélectionnez une table, sélectionnez une colonne valeur et une colonne libellé, filtre WHERE optionnel, enregistrez (écrit la requête **et** l'entrée du dictionnaire). |

Les pages suivantes détaillent chaque chemin.

---

## Ce que porte une requête

Le formulaire d'éditeur (onglets Non classées / Séquences / Recherches) reflète la forme de `QueryDef` :

| Champ | Requis | Rôle |
|---|---|---|
| **`name`** | Oui | Unique au sein du connecteur. La chaîne de permission de cette requête est `sql:<connector>:<name>`. En lecture seule dans l'éditeur — passez par le bouton *Renommer* (renommage multi-fichiers). |
| **`type`** | Non | `table` / `custom` / `sequence` / `lookup` — détermine l'onglet où apparaît la requête. Vide, le système retombe sur une déduction à partir du nom. |
| **`sql`** | Oui | L'instruction SQL avec ses paramètres `:placeholder`. Peut être une chaîne unique ou une map par dialecte `{ default = "…", oracle = "…" }`. La variante `default` est obligatoire dans une map. |
| **`writable`** | Non (défaut `false`) | Quand `false`, seul SELECT est autorisé. Passer à `true` pour INSERT / UPDATE / DELETE / CALL. |
| **`params`** | Non | Liste des paramètres déclarés (`name`, `label`, `default`) — donne à chaque `:placeholder` un champ de formulaire. |
| **`label`** | Non | Nom court affiché dans les listes déroulantes et les listages. |
| **`description`** | Non | Texte plus long — affiché dans la liste Tables sous le nom de base. Sert à expliquer ce que la requête retourne. |

---

## Enregistrer et recharger — ce que fait un clic

L'enregistrement de cette page est atomique sur deux fichiers quand c'est nécessaire :

| Action effectuée | Ce qui est écrit |
|---|---|
| Création ou édition d'une requête sous Tables / Non classées | Le fichier connecteur. |
| Utilisation du Scaffold pour une séquence ou une recherche | Le fichier connecteur **et** le fichier dictionnaire (nouvelle entrée sous `[connectors.<name>.sequences]` ou `[connectors.<name>.lookups]`). |
| Duplication d'un connecteur (application entière) | Une écriture multi-fichiers qui copie le surcouche du dictionnaire, les écrans, le menu, les graphiques et les tableaux de bord sous le nouveau nom. Passe par un endpoint dédié. |
| Renommage d'un connecteur, d'une requête ou d'une table | Une mise à jour multi-fichiers qui touche chaque référence (écrans, menus, dictionnaire, graphiques, tableaux de bord). Refuse de s'exécuter quand des modifications locales ne sont pas enregistrées. |

Après chaque enregistrement, le framework lance automatiquement un **rechargement à chaud**. La nouvelle requête est appelable immédiatement — pas de redémarrage, pas de déconnexion.

---

## Ce que vous faites concrètement — carte rapide

| Objectif | À lire |
|---|---|
| Générer les quatre requêtes CRUD à partir d'une table réelle de la base. | [Créer depuis une table de base](./create-from-database.md) — le parcours par assistant, recommandé quand la table existe. |
| Écrire une requête personnalisée (isolée, manuelle). | [Créer une requête personnalisée](./create-custom.md). |
| Faire une copie d'une requête existante ou de toute une application. | [Dupliquer une requête ou un connecteur](./clone.md). |
| Ajouter une séquence (prochain id) ou une recherche (source de liste déroulante). | [Séquences et recherches](./sequences-and-lookups.md). |
| Passer des valeurs à une requête — littérales ou liées (`#LOGIN_USER#`, colonnes source…). | [Liaison de paramètres](./parameter-binding.md). |
| Livrer un SQL différent pour Postgres et Oracle. | [Variantes SQL par dialecte](./per-dialect-sql.md). |

---

## Et ensuite

- [Créer depuis une table de base](./create-from-database.md) — à lire en premier quand la table existe déjà dans la base.
- [Concepts → Connecteurs](../../connectors.md) — la référence détaillée derrière cette page (types de connecteurs, pools, cycle de vie d'une requête).
