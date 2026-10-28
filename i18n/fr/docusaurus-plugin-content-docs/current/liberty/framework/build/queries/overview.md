---
title: Requêtes — vue d'ensemble
description: "Organisation de la page Connecteurs de Liberty — Paramètres / Tables / Requêtes / Séquences / Lookups — et les quatre types de requêtes qu'elle range."
keywords: [Liberty Framework, requêtes, connecteurs, CRUD, séquences, lookups, ConnectorsBuilder, pages de Liberty Next]
---

# Requêtes — vue d'ensemble

Une **requête** dans Liberty est une instruction SQL nommée rattachée à un **connecteur** (lui-même rattaché à un **pool**, c'est-à-dire à une base de données). Les écrans, tableaux de bord, graphiques, lookups et séquences du dictionnaire, ainsi que l'assistant IA, s'appuient tous sur des requêtes — ajouter une requête est donc la modification la plus fréquente dans les pages de Liberty Next.

La page qui gère les requêtes est **Liberty Next → Construire → Connecteurs**. Cette vue d'ensemble en dresse la carte ; les pages suivantes détaillent chaque chemin d'ajout.

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
  <text x="820" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
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
  <text x="470" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêtes</text>
  <rect x="522" y="152" width="84" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="564" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Séquences</text>
  <rect x="608" y="152" width="80" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="648" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups</text>
  <rect x="808" y="152" width="140" height="24" rx="6" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="878" y="168" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">＋ Ajouter des requêtes</text>

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
| **Barre d'outils haute** | Actions globales — *＋ Connecteur*, *Abandonner*, *Enregistrer*. Le bouton *Enregistrer* écrit le fichier connecteur et déclenche un rechargement à chaud — aucun redémarrage de processus n'est nécessaire. |
| **Navigation gauche** | Deux groupes : *Applications* (connecteurs dotés d'un menu — ce sont les applications visibles dans le sélecteur du haut) et *Sources de données* (connecteurs qui alimentent en données mais n'apparaissent pas dans le sélecteur). Cliquer sur un nom l'ouvre à droite. |
| **Volet droit** | L'éditeur du connecteur sélectionné. Une barre de modes en haut permet de choisir l'une des cinq vues — *Paramètres…*, *Tables*, *Requêtes*, *Séquences*, *Lookups*. |

---

## Les quatre types de requêtes \{#kinds\}

Un connecteur range ses requêtes en quatre sections ; la section où se trouve une requête en définit le type :

| Vue | Contenu |
|---|---|
| **Tables** | Une entrée par table, avec jusqu'à quatre requêtes : **get** (lecture), **post** (insertion), **put** (mise à jour), **delete** (suppression). Elles se nomment `<table>_get`, `<table>_post`, `<table>_put`, `<table>_delete`. La liste affiche une ligne par table avec ses badges (GET / PUT / POS / DEL). |
| **Requêtes** | Les requêtes indépendantes d'une table — rapports, traitements en masse, requêtes appelées par des actions, des graphiques ou des tableaux de bord. Exemple : `monthly_revenue`, `purge_old_logs`. |
| **Séquences** | Les requêtes qui renvoient le numéro suivant d'une séquence du dictionnaire. Corps typique : `SELECT COALESCE(MAX(<col>), 0) + 1 FROM <table>`. |
| **Lookups** | Les requêtes qui renvoient codes et libellés pour un lookup du dictionnaire. Corps typique : `SELECT <value>, <label> FROM <table>`. |

**Changer le type** déplace une requête vers une autre section — par exemple une requête écrite sous *Requêtes* qui sert finalement à un lookup. Quand le déplacement change le nom de la requête (une requête de table devient indépendante, ou l'inverse), un avertissement indique le nouveau nom : les écrans, actions et entrées du dictionnaire qui utilisent l'ancien nom sont à mettre à jour.

---

## Les boutons d'ajout — un par vue \{#add\}

| Vue | Bouton | Ce qui s'ouvre |
|---|---|---|
| **Tables** | *＋ Ajouter des requêtes* | Un choix : **Générer depuis la BDD** (l'assistant CRUD — lit la table dans la base et génère les quatre requêtes) ou **Squelette vide** (demande un nom de table et crée une requête de lecture vide). |
| **Requêtes** | *＋ Ajouter une requête* | La saisie d'un nom, puis une requête vide à écrire à la main. |
| **Séquences** | *＋ Ajouter une séquence* | L'assistant de génération — choix d'une table et d'une colonne clé, aperçu du SQL, enregistrement : il écrit la requête **et** la séquence du dictionnaire. |
| **Lookups** | *＋ Ajouter un lookup* | L'assistant de génération — choix d'une table, d'une colonne valeur, d'une colonne libellé et d'un filtre facultatif, enregistrement : il écrit la requête **et** le lookup du dictionnaire. |

Les pages suivantes détaillent chaque chemin.

---

## Contenu d'une requête \{#fields\}

L'éditeur de requête présente ces champs :

| Champ | Requis | Rôle |
|---|---|---|
| **Name** | Oui | Unique au sein du connecteur. La permission de la requête est `sql:<connecteur>:<nom>`. Se modifie avec *Renommer*, qui met à jour toutes les références. |
| **SQL** | Oui | L'instruction, avec ses paramètres `:nom`. Un texte unique, ou une variante par base de données (`default` obligatoire) — voir [Variantes SQL par dialecte](./per-dialect-sql.md). |
| **Writable** | Non (désactivé) | Désactivé, seul un SELECT est accepté. Activé pour INSERT / UPDATE / DELETE / CALL. |
| **Params** | Non | Les paramètres déclarés (**name**, **label**, **default**) — un libellé et une valeur par défaut pour chaque `:nom`. |
| **Label** | Non | Nom court affiché dans les listes. |
| **Description** | Non | Ce que renvoie la requête — affiché sous le nom de la table dans la liste Tables. |

---

## Enregistrer et recharger — ce que fait un clic

L'enregistrement de cette page est atomique sur deux fichiers quand c'est nécessaire :

| Action effectuée | Ce qui est écrit |
|---|---|
| Création ou modification d'une table ou d'une requête | Le fichier du connecteur. |
| Utilisation de l'assistant de génération pour une séquence ou un lookup | Le fichier du connecteur **et** le dictionnaire (la nouvelle séquence ou le nouveau lookup dans la portée du connecteur). |
| Duplication d'un connecteur (application entière) | Une écriture multi-fichiers qui copie le surcouche du dictionnaire, les écrans, le menu, les graphiques et les tableaux de bord sous le nouveau nom. Passe par un endpoint dédié. |
| Renommage d'un connecteur, d'une requête ou d'une table | Une mise à jour multi-fichiers qui touche chaque référence (écrans, menus, dictionnaire, graphiques, tableaux de bord). Refuse de s'exécuter quand des modifications locales ne sont pas enregistrées. |

Après chaque enregistrement, le framework lance automatiquement un **rechargement à chaud**. La nouvelle requête est appelable immédiatement — pas de redémarrage, pas de déconnexion.

---

## Carte rapide

| Objectif | À lire |
|---|---|
| Générer les quatre requêtes CRUD à partir d'une table réelle de la base. | [Créer depuis une table de base](./create-from-database.md) — le parcours par assistant, recommandé quand la table existe. |
| Écrire une requête personnalisée (isolée, manuelle). | [Créer une requête personnalisée](./create-custom.md). |
| Faire une copie d'une requête existante ou de toute une application. | [Dupliquer une requête ou un connecteur](./clone.md). |
| Ajouter une séquence (numéro suivant) ou un lookup (source d'une liste déroulante). | [Séquences et lookups](./sequences-and-lookups.md). |
| Passer des valeurs à une requête — valeurs fixes, autres colonnes, utilisateur connecté. | [Liaison de paramètres](./parameter-binding.md). |
| Livrer un SQL différent pour Postgres et Oracle. | [Variantes SQL par dialecte](./per-dialect-sql.md). |

---

## Et ensuite

- [Créer depuis une table de base](./create-from-database.md) — à lire en premier quand la table existe déjà dans la base.
- [Concepts → Connecteurs](../../connectors.md) — la référence détaillée derrière cette page (types de connecteurs, pools, cycle de vie d'une requête).
