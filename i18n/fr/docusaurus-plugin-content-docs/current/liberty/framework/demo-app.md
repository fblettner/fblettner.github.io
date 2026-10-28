---
title: La démo des ventes
description: "L'application Sales demo livrée avec Liberty Next : des lignes de facture chargées depuis Excel par période, la validation et la clôture des périodes, un tableau de bord d'accueil, l'explorateur de données et ses analyses prêtes à l'emploi, les questions de départ de l'assistant IA, une synthèse mensuelle envoyée par Nomaflow, et trois utilisateurs de démonstration qui voient des lignes différentes — chaque fonction construite depuis les Paramètres, sans code."
keywords: [Liberty Next, démo, démo des ventes, nomademo, application d'exemple, tableau de bord, explorateur de données, chargement de fichier, clôture de période, périmètre de données, synthèse, assistant IA]
---

# La démo des ventes

**Sales demo** est une petite application livrée avec Liberty Next pour montrer, sur un sujet cohérent, ce que le framework fait sans code : des lignes de facture mensuelles chargées depuis Excel, des périodes validées puis clôturées, un tableau de bord d'accueil, l'analyse libre dans l'explorateur de données, l'assistant IA, une synthèse envoyée chaque mois par e-mail, et des utilisateurs limités à leur propre société. Tout y est configuration — connecteur, dictionnaire, écrans, menus, tableaux de bord, modèle, tâches — consultable et modifiable dans les Paramètres.

C'est une vitrine, pas un produit : l'ouvrir pour voir une fonction en action, et reprendre ce qui convient dans sa propre application.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dmo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dmo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dmo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dmo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#dmo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="200" height="370" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="50" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SALES DEMO</text>
  <text x="254" y="72" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="254" y="98" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="254" y="124" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Ventes</text>
  <text x="268" y="150" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Lignes de vente</text>
  <text x="268" y="176" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Périodes</text>
  <text x="254" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Données de référence</text>
  <text x="268" y="228" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Articles</text>
  <text x="268" y="254" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Sociétés</text>
  <text x="268" y="280" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="254" y="306" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Import</text>
  <text x="268" y="332" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Charger les fichiers d'exemple</text>
  <rect x="464" y="40" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="48" width="93" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="522.5" y="60.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau de bord</text>
  <text x="476" y="82" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">KPI, graphiques, tableaux ; un filtre par business unit</text>
  <rect x="464" y="100" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="108" width="48" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="500.0" y="120.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="476" y="142" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">filtres en cascade : famille → sous-famille → article</text>
  <rect x="464" y="160" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="168" width="108" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="530.0" y="180.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Clôture de période</text>
  <text x="476" y="202" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">valider, clôturer, rouvrir ; période clôturée en lecture seule</text>
  <rect x="464" y="220" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="228" width="128" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="540.0" y="240.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="476" y="262" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">modèle Sales, 10 analyses, un tableau de bord</text>
  <rect x="464" y="280" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="288" width="93" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="522.5" y="300.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tâches Nomaflow</text>
  <text x="476" y="322" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">fichiers d'exemple, chargements par partition, synthèse mensuelle</text>
  <rect x="464" y="340" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="348" width="118" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="535.0" y="360.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Comptes et périmètre</text>
  <text x="476" y="382" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">groupe, business unit, société</text>
  <rect x="10" y="56" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La page d'accueil</text>
  <text x="20" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une entrée tableau de bord</text>
  <line x1="210" y1="73.0" x2="254" y2="68" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grille en lecture seule</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">5 000 lignes, filtres d'abord</text>
  <line x1="210" y1="167.0" x2="268" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une page de tâche par fichier</text>
  <line x1="210" y1="347.0" x2="268" y2="334" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="1000" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une app, chaque fonction</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">construite par les Paramètres</text>
  <line x1="1000" y1="57.0" x2="970" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois utilisateurs</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mêmes écrans, autres lignes</text>
  <line x1="1000" y1="347.0" x2="970" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
</svg>

---

## Les données \{#data\}

| Table | Contenu |
|---|---|
| **Articles** | Les articles, avec leur famille et leur sous-famille. |
| **Sociétés** | Les sociétés, avec leur business unit, leur région et leur devise. |
| **Clients** | Les clients rencontrés dans les ventes ; chaque chargement ajoute les codes, les noms se complètent à la main. |
| **Lignes de vente** | Une ligne par ligne de facture : période, société, article, client, pays de destination, quantité, poids, chiffre d'affaires dans la devise de la société. |
| **Périodes** | Une ligne par période chargée : statut (*open*, *validated*, *closed*), nombre de sociétés et de lignes, quantité, auteur et date du changement de statut, commentaire. |

Le chiffre d'affaires est exprimé dans la devise de chaque société : il n'est jamais additionné d'une devise à l'autre, et les analyses le donnent donc par devise ou par société.

---

## Les écrans \{#screens\}

- **Ventes → Lignes de vente** : les lignes de facture, en lecture seule, jusqu'à 5 000 lignes. La grille s'ouvre vide : choisir d'abord une période, une business unit, une famille… Les filtres sont en cascade — les sociétés suivent la business unit, les sous-familles la famille, les articles les deux.
- **Ventes → Périodes** : les périodes chargées. Le menu de ligne propose **Validate**, **Close** et **Reopen**, chacun après confirmation. Une période **clôturée** passe en lecture seule dans la grille — voir [Champs conditionnels](./build/screens/conditional-fields.md) — et tout nouveau chargement de cette période est refusé.
- **Données de référence → Articles, Sociétés, Clients** : les tables de référence, modifiables.

---

## Le chargement des fichiers \{#loads\}

Le dossier **Import** du menu regroupe les chargements, chacun sous forme de [page de tâche](../nomaflow/jobs/run-from-menu.md) où l'utilisateur choisit le fichier, lance la tâche et suit son journal :

| Entrée | Tâche | Rôle |
|---|---|---|
| **Fichier articles** | `nomademo-load-items` | Charge le fichier des articles (feuille *Items* : code, nom, famille, sous-famille), en remplaçant la table. |
| **Fichier sociétés** | `nomademo-load-companies` | Charge le fichier des sociétés (feuille *Companies* : code, nom, business unit, région, devise), en remplaçant la table. |
| **Fichier ventes (un mois)** | `nomademo-load-sales` | Charge un mois de lignes de facture (feuille *Sales*). |
| **Recalculer les périodes** | `nomademo-refresh-periods` | Reconstruit les lignes de période à partir des lignes chargées, en conservant leur statut. |
| **Charger les fichiers d'exemple** | `nomademo-load-samples` | Charge les fichiers d'exemple livrés avec la démo — tous à la fois, sans envoi de fichier. À relancer à tout moment pour réinitialiser la démo. |

Les **fichiers d'exemple** sont livrés avec l'application : environ 320 articles répartis en six familles, 14 sociétés dans six business units, et six mois de lignes de facture (d'octobre à mars). Les données sont synthétiques et anonymes ; un rechargement redonne les mêmes chiffres.

Le chargement des ventes montre l'[étape `file_load`](../nomaflow/steps.md#file-load) en situation :

- il **remplace** les partitions présentes dans le fichier — année, mois et société — en une seule transaction : recharger un mois corrigé ne remplace que ce mois, et un chargement en échec laisse les données précédentes en place ;
- une **garde** refuse le fichier dès que l'une de ses périodes est clôturée, avec le motif dans le journal ;
- les lignes rejetées sont proposées au téléchargement sous le journal ;
- les étapes suivantes ajoutent les nouveaux clients et actualisent les lignes de période.

Deux autres tâches se lancent depuis **Nomaflow → Tâches** : `nomademo-init-db` crée les tables, `nomademo-demo-accounts` crée les utilisateurs de démonstration ([plus bas](#accounts)). Les tâches sont livrées sans planification.

---

## Le tableau de bord d'accueil \{#dashboard\}

**Vue d'ensemble** est la page d'accueil de l'application : le [tableau de bord](./dashboards.md) *Vue d'ensemble des ventes*, construit avec les widgets de synthèse.

| Widget | Contenu |
|---|---|
| **Lignes de facture**, **Dernière période**, **Périodes**, **Articles vendus** | Les chiffres, avec une ligne de détail : unités, sociétés et clients ; la dernière période et sa quantité ; les périodes encore ouvertes ; les familles. |
| **Quantité mensuelle par pôle** | Une série par business unit, par période. |
| **Ce qui demande attention** | Les périodes ouvertes à clôturer, les sociétés sans vente sur la dernière période. |
| **Chiffre d'affaires par devise**, **Quantité par famille** | Des barres de proportion — les totaux d'abord, puis par business unit. Le chiffre d'affaires n'est jamais additionné d'une devise à l'autre. |
| **Périodes** | Le statut de chaque période, l'auteur et la date du changement. |
| **Meilleurs articles**, **Quantité par pôle** | Les plus fortes quantités. |

La barre porte une **période** (toutes les dates à l'ouverture) et un filtre **Business unit** qui restreint chaque widget dont la requête renvoie la business unit — sans écran derrière les widgets.

---

## L'explorateur de données \{#explorer\}

**Explorateur de données**, juste sous **Vue d'ensemble**, ouvre l'[explorateur de données](./explorer/overview.md) sur le modèle *Sales* : les lignes de facture au centre, entourées de l'article (famille, sous-famille), de la société (business unit, devise) et du client.

Le modèle livre dix analyses partagées — quantité par business unit, par société, par famille ; chiffre d'affaires par devise, par business unit, par société ; quantité mensuelle, seule et croisée par business unit ; articles les plus vendus ; nombre de lignes de facture — ainsi que le tableau de bord *Sales overview* qui les réunit. Elles servent de point de départ : en ouvrir une, la modifier, l'enregistrer sous un autre nom.

---

## L'assistant IA \{#ai\}

L'application livre ses [questions de départ](./ai-assistant.md#starters) sous quatre rubriques — *Sales*, *Periods*, *Loads*, *Reference data* —, par exemple *Which business unit sold the most last month?* ou *How do I reload a month that was wrong?*. L'écran *Lignes de vente* a les siennes, qui s'appuient sur le contexte de page : *Sum the quantities of the rows I see, by business unit*.

Trois [procédures](./ai-assistant.md#playbooks) — *Load a month of sales*, *Validate or close a period*, *Analyse quantities and revenue* — permettent à l'assistant de guider un utilisateur dans les démarches de l'application. L'ensemble se consulte et se modifie dans **Liberty Next → Construire → IA**.

---

## La synthèse mensuelle \{#digest\}

`nomademo-monthly-digest` est une synthèse planifiée, sans code :

1. deux [étapes `report`](../nomaflow/steps.md#report) produisent en Excel les analyses *Revenue by business unit* et *Quantity by company*, sur le mois précédent ;
2. une [étape `notify`](../nomaflow/steps.md#notify) les envoie aux titulaires du rôle de groupe, avec les deux fichiers en pièces jointes.

La planifier le premier du mois, une fois le compte de messagerie renseigné dans les [notifications](../nomaflow/notifications.md#smtp).

---

## Trois utilisateurs, trois vues \{#accounts\}

`nomademo-demo-accounts` crée deux rôles et trois utilisateurs, mot de passe `demo` :

| Utilisateur | Rôle | Voit |
|---|---|---|
| `demo_group` | `nomademo_group` | Tout. |
| `demo_bu` | `nomademo_scoped` | Les sociétés d'une business unit. |
| `demo_company` | `nomademo_scoped` | Une seule société. |

Les deux rôles accordent les mêmes droits : les requêtes de l'application, ses modèles d'exploration et l'assistant. Le rôle restreint ajoute un [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) sur la société, dont les valeurs proviennent de l'attribut *companies* de chaque utilisateur. En se connectant successivement avec chacun, les mêmes écrans, tableau de bord, analyses et exports montrent d'autres lignes, totaux compris.

Charger les sociétés (ou les fichiers d'exemple) avant de lancer cette tâche : elle les lit pour renseigner les attributs des utilisateurs.

---

## Mise en place \{#setup\}

1. Dans **Liberty Next → Administrer → Pools**, un pool nommé `nomademo` qui pointe vers une base vide.
2. Dans Nomaflow, lancer `nomademo-init-db`.
3. Ouvrir **Sales demo** depuis le sélecteur d'applications, puis **Import → Charger les fichiers d'exemple**.
4. Lancer `nomademo-demo-accounts` dans Nomaflow pour créer les utilisateurs de démonstration.

---

## Pour aller plus loin

- [Tableaux de bord](./dashboards.md) — les widgets et l'export.
- [Explorateur de données](./explorer/overview.md) — modèles, analyses, tableaux de bord.
- [Étapes](../nomaflow/steps.md) — chargements de fichiers, rapports et notifications.
- [Rôles et permissions](./build/secure/roles-and-permissions.md) — le périmètre de données.
