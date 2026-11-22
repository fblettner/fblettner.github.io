---
title: Services JD Edwards (AIS)
description: "Le catalogue de services AIS de JD Edwards livré avec Nomajde : des services nommés et documentés pour lire JD Edwards (tables et vues, objets, orchestrations, versions d'états, options de traitement, dictionnaire de données) et pour agir (lancer une orchestration, une fonction métier, un état ; démarrer ou arrêter une tâche planifiée), chacun avec sa permission, utilisables depuis un écran, une tâche, un test ou l'assistant IA."
keywords: [Nomajde, JD Edwards, AIS, Application Interface Services, orchestration, fonction métier, BSFN, état, UBE, data service, form service, REST, permissions]
---

# Services JD Edwards (AIS)

Nomajde accède à JD Edwards par son **serveur AIS**, avec les services REST documentés par Oracle. Il est livré avec un **catalogue** de ces services, prêts à l'emploi : chacun a un nom, une description, des paramètres nommés qui précisent ce qu'ils attendent avec un exemple — et sa propre permission. Ce sont les briques de tout ce que Nomajde fait avec un JD Edwards en service : les [écrans sur un formulaire JDE](./create-from.md), les [tests de non-régression](../tests.md), les tâches et les demandes adressées à l'assistant IA.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ais-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ais-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ais-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ais-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#ais-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Le catalogue AIS</text>
  <rect x="240" y="70" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="96.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un écran</text>
  <line x1="370" y1="92" x2="416" y2="100" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="240" y="138" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="164.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Une tâche</text>
  <line x1="370" y1="160" x2="416" y2="150" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="240" y="206" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="232.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un test</text>
  <line x1="370" y1="228" x2="416" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="240" y="274" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="300.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">L'assistant IA</text>
  <line x1="370" y1="296" x2="416" y2="250" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="418" y="62" width="360" height="280" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="432" y="82" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIRE</text>
  <rect x="430" y="90" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="102.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Query a table or a view</text>
  <rect x="708" y="91" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="102.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <rect x="430" y="112" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="124.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Find a JDE object</text>
  <rect x="708" y="113" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="124.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="430" y="134" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="146.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A report's options and selection</text>
  <rect x="708" y="135" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="146.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <rect x="430" y="156" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="168.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A business function's parameters</text>
  <rect x="708" y="157" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="168.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <rect x="430" y="178" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="190.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">One orchestration</text>
  <rect x="708" y="179" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="190.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="430" y="200" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="212.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A data item's labels</text>
  <rect x="708" y="201" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="212.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="432" y="240" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MODIFIER JD EDWARDS</text>
  <rect x="430" y="248" width="336" height="18" rx="4" fill="rgba(255,159,10,0.05)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="438" y="260.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Run an orchestration</text>
  <rect x="644" y="249" width="122" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="705.0" y="260.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifie des données</text>
  <rect x="430" y="270" width="336" height="18" rx="4" fill="rgba(255,159,10,0.05)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="438" y="282.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Run a business function</text>
  <rect x="644" y="271" width="122" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="705.0" y="282.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifie des données</text>
  <rect x="430" y="292" width="336" height="18" rx="4" fill="rgba(255,159,10,0.05)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="438" y="304.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Submit a report</text>
  <rect x="644" y="293" width="122" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="705.0" y="304.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifie des données</text>
  <line x1="778" y1="200" x2="828" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="830" y="150" width="130" height="100" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="895.0" y="197.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Serveur AIS</text>
  <text x="895.0" y="212.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="830" y="268" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sous le compte JDE</text>
  <text x="830" y="281" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">du connecteur</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisé partout</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans une ligne de code</text>
  <line x1="200" y1="127.0" x2="240" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte à valider</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avant de modifier JDE</text>
  <line x1="200" y1="297.0" x2="240" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres nommés</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec aide et exemple</text>
  <line x1="1000" y1="97.0" x2="766" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une permission chacun</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">api:ais_connection:&lt;service&gt;</text>
  <line x1="1000" y1="187.0" x2="766" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="1000" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marqués à part</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accordés avec parcimonie</text>
  <line x1="1000" y1="297.0" x2="766" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
</svg>

---

## Le catalogue \{#catalogue\}

Les services sont les points d'accès du connecteur `ais_connection`, dans **Liberty Next → Données → Connecteurs**.

### Lire \{#read\}

| Service | Renvoie | Paramètres |
|---|---|---|
| **AIS server configuration** | La version d'AIS et son environnement par défaut. | — |
| **Find a JDE object** | Les applications, tables, vues, fonctions métier et états dont le nom ou la description contient un texte. | `FILTER`, `TYPES` |
| **Query a table or a view** | Les lignes d'une table ou d'une vue métier, ou leur nombre. | `TABLE`, `TYPE`, `KIND`, `COLUMNS`, `MAX`, `MATCH`, `CONDITIONS` |
| **A data item's labels** | Le titre et la description d'un élément du dictionnaire de données. | `ITEM`, `SYSTEM` |
| **An application's processing options** | Les valeurs des options de traitement d'une version d'application interactive. | `APPLICATION`, `VERSION` |
| **A report's options and selection** | La sélection, la séquence et les options d'une version d'état. | `REPORT`, `VERSION` |
| **A report job's status** | L'état d'un travail soumis. | `JOB`, `SERVER` |
| **A business function's parameters** | Les fonctions métier et leurs paramètres. | `NAME`, `OBJECT` ou `TEMPLATE` |
| **Orchestrations**, **One orchestration** | Les orchestrations proposées par AIS ; pour l'une d'elles, sa description, sa version, ses entrées et ses sorties. | `NAME` |
| **Notifications**, **Scheduled jobs** | Les notifications, le planificateur AIS et ses travaux. | — |

### Modifier JD Edwards \{#write\}

| Service | Action | Paramètres |
|---|---|---|
| **Run an orchestration** | Lance une orchestration avec ses entrées, quelle que soit sa version. | `NAME`, `VERSION`, `INPUTS` |
| **Run a business function** | Lance une fonction métier. | `NAME`, `PARAMS`, `OUTPUTS` |
| **Submit a report** | Soumet une version d'état telle qu'elle est enregistrée. | `REPORT`, `VERSION` |
| **Start a scheduled job**, **Stop a scheduled job** | Démarre ou arrête la planification d'une orchestration ou d'une notification. | `NAME` |

Ces cinq services sont marqués comme **modifiant des données**. Trois paramètres dépendent de l'objet et s'écrivent en JSON, avec leur exemple : les conditions d'une requête, les valeurs d'une fonction métier, les entrées d'une orchestration. Pour éviter le JSON, créer un point d'accès dédié à un état, une table, une fonction ou une orchestration avec [Créer à partir de…](./create-from.md) : chaque entrée devient alors un champ libellé.

---

## Plusieurs formulaires dans une session \{#flow\}

Un seul appel à un formulaire suffit pour le lire, ou pour le remplir et appuyer sur un bouton. Il ne suffit plus quand l'action suivante dépend de la réponse du formulaire. Pour ce cas, Nomajde propose deux étapes de tâche et actions d'écran qui gardent les formulaires ouverts dans **une seule session JD Edwards** — et qui ferment toujours les formulaires et la session, erreur comprise :

| Étape | Effet |
|---|---|
| **Un enchaînement de formulaires** (`j_ais_form_flow`) | Une liste d'étapes — le formulaire à ouvrir, les champs et filtres à remplir, la ligne à sélectionner, les lignes à ajouter ou à modifier, les boutons à presser —, chacune avec ce qu'elle attend : un nombre de lignes, le formulaire au premier plan, aucune erreur. Une étape non satisfaite arrête l'enchaînement avant que la suivante n'agisse. Plusieurs lignes ajoutées dans une même étape forment une seule transaction : un document et ses lignes. |
| **Une ligne d'une grille** (`j_ais_grid_row`) | Ajoute, modifie ou supprime une ligne de la grille d'un formulaire, recherchée d'abord : rien n'est fait si la recherche ne trouve pas exactement une ligne — aucune, pour un ajout. |

Les points d'accès que [Créer à partir de…](./create-from.md#guarantees) construit pour une modification ou une suppression par un formulaire fonctionnent de la même façon.

---

## Où un service s'utilise \{#use\}

| Depuis | Comment |
|---|---|
| **L'onglet Test du connecteur** | Renseigner les paramètres et exécuter : le moyen le plus rapide d'essayer un service. |
| **Un écran** | Comme action de la barre d'outils ou du menu de ligne — soumettre un état pour la ligne sélectionnée —, ou comme source des lignes de l'écran. |
| **Une tâche** | Comme étape : export nocturne, état soumis puis attendu, orchestration lancée. Voir [Tâches](../jobs.md#ais). |
| **Un test** | Comme étape d'un [cas de non-régression](../tests.md). |
| **L'assistant IA** | Il lit avec les services de lecture ; pour un service qui modifie JD Edwards, il présente d'abord une carte à valider. |

---

## Ce que voit JD Edwards \{#account\}

Chaque appel s'exécute sous le **compte JD Edwards du connecteur** : la sécurité de JD Edwards s'applique à ce compte, l'audit l'enregistre, et les textes reviennent dans sa langue. Lui donner les droits nécessaires aux intégrations, pas davantage.

Ce que JD Edwards refuse est rapporté dans ses propres termes. Une erreur de fonction métier fait échouer l'appel avec son message ; un avertissement — *Duplicate Address Book record exists* — est signalé avec la réponse et l'appel reste valide.

---

## Accès \{#access\}

Chaque service a sa permission, `api:ais_connection:<service>`, accordée dans les règles *Au-delà des menus* d'un rôle. Un rôle peut donc lire des tables sans pouvoir soumettre un état, ou lancer une orchestration et aucune autre.

- Accorder les services de lecture aux équipes qui construisent les écrans et les tests.
- Accorder avec parcimonie les cinq services qui modifient JD Edwards — ou, mieux, accorder les points d'accès dédiés créés avec **Créer à partir de…**.
- Le connecteur contient aussi un service générique, **AIS service (generic, used by nomajde.ais)**, réservé au code de Nomajde : il atteint tous les services AIS et n'est donc accordé à aucun rôle.

Pour l'assistant IA, un service qui modifie JD Edwards demande en plus que l'utilisateur soit autorisé à modifier des données par l'assistant, et n'est jamais appelé sans carte validée.

---

## Conseils & bonnes pratiques \{#tips\}

- Essayer un service dans l'onglet **Test** avant de le placer dans une tâche ou un écran.
- **Query a table or a view** avec `KIND` = `COUNT` répond à une question de volume sans lire les lignes.
- Réserver un compte JD Edwards au connecteur : l'audit distingue alors ce que Nomajde a fait de ce qu'une personne a fait.
- Un même JSON saisi deux fois est le signe qu'il faut passer par **Créer à partir de…**.

---

## Voir aussi

- [Créer à partir de… — points d'accès et écrans à partir de JD Edwards](./create-from.md).
- [Points d'accès d'API](../../framework/build/api-endpoints.md) — l'éditeur de points d'accès de Liberty Next.
- [Server Manager](../monitoring/server-manager.md) — la même approche pour la console Server Manager.
