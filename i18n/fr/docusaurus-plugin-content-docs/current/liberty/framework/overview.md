---
title: Pourquoi Liberty Framework
description: "Liberty Framework est une plateforme low-code pour construire des applications internes — outils d'administration, tableaux de bord BI, intégrations, portails clients — sans écrire de frontend. Définissez les sources de données et les écrans dans l'interface Paramètres ; le framework rend la grille, le dialogue d'édition, le tableau de bord, l'assistant."
keywords: [Liberty Framework, low-code, internal apps, applications internes, admin tools, outils d'administration, BI dashboards, tableaux de bord, why, getting started, overview, présentation]
---

# Pourquoi Liberty Framework

Vous avez une base de données. Ou une instance JD Edwards. Ou une API SaaS avec laquelle votre équipe doit dialoguer. Et ce que vous voulez, c'est une **interface interne propre et rapide** pour consulter ces données, les modifier, naviguer dedans, planifier des traitements — sans passer trois mois à écrire une application React pour chacune.

C'est exactement à ça que sert Liberty Framework.

Vous l'installez une fois, vous le pointez vers votre source de données, et vous définissez **ce que les utilisateurs doivent voir** dans une interface Paramètres : quelles requêtes alimentent quels écrans, quels écrans appartiennent à quel menu, quels tableaux de bord agrègent quoi. Le framework s'occupe du reste — la grille, le dialogue d'édition, les filtres, l'authentification, l'élagage par rôle, les boutons d'export, les colonnes d'audit, l'assistant, les jobs planifiés.

Une poignée de concepts (un *pool*, un *connecteur*, un *écran*, un *tableau de bord*, un *menu*) se combinent pour couvrir la surface dont la plupart des applications internes ont besoin : CRUD sur des bases de données, KPI et graphiques, accès contrôlé par rôle, pipelines ETL, un assistant IA capable d'exécuter vos requêtes à la demande.

---

## Le problème qu'il résout

La plupart des équipes finissent par écrire le même type d'application encore et encore :

- **Une grille qui liste les lignes d'une table**, avec des filtres et de la pagination.
- **Un dialogue d'édition** qui s'ouvre quand on clique sur une ligne, avec les champs que la base de données porte.
- **Un tableau de bord** avec quelques KPI et graphiques sur les mêmes données.
- **Un menu** qui relie le tout.
- **Une authentification** pour que seules les bonnes personnes voient les bonnes choses.

Écrire cela en React (ou Angular, ou Vue), c'est une semaine de travail par écran. Multipliez par 20 écrans par application et 5 applications par équipe : le calcul est implacable — l'essentiel des heures d'ingénierie part dans le câblage de formulaires vers des API et d'API vers des bases de données, et très peu finit en logique métier.

Le framework prend l'approche inverse : le **schéma** de chaque requête est découvert à l'exécution depuis la base de données elle-même, la **mise en page** est décrite en quelques clics dans l'interface Paramètres, et le **rendu** — grille, dialogue, tableau de bord, outil IA, surface REST — est le travail du framework, pas le vôtre. Vous écrivez du SQL. Vous obtenez une UI.

Quand un besoin que le framework ne couvre pas apparaît (un widget sur mesure, une page unique, une UX peaufinée à la main), la plateforme se met en retrait — vous pouvez brancher une route React, une étape Python personnalisée ou un endpoint HTTP brut.

---

## À qui il s'adresse

| Public | Pourquoi il choisit le framework |
|---|---|
| **Équipes outils internes** qui construisent des applications d'administration sur des bases existantes. | Le chemin écran CRUD est à six clics ; pas de temps perdu à le réinventer. |
| **Opérateurs JD Edwards / SAP / NetSuite** qui doivent administrer leur ERP depuis une UI moderne sans attendre l'éditeur. | Connectez-vous au pool de l'ERP, déclarez les bonnes requêtes, posez un écran dessus. |
| **Équipes BI / analytics** qui consolident des rapports issus de plusieurs systèmes. | Tableaux de bord sur des requêtes SQL nommées, graphiques qui réutilisent les données, pas besoin d'outil BI distinct. |
| **Équipes d'intégration** qui ont besoin d'une UI au-dessus de pipelines ETL, de jobs planifiés et de récepteurs de webhooks. | Nomaflow exécute les jobs, le framework leur donne une UI ; l'assistant IA appelle les mêmes requêtes à la demande. |
| **Éditeurs de logiciels** qui empaquettent des applications client au-dessus d'un produit base de données. | Le framework est le châssis ; vous livrez la configuration par client sous forme d'un zip portable. |

C'est **moins intéressant** pour :

- Les applications grand public destinées au public (l'UX du framework est orientée opérateur).
- Les applications mobiles (la SPA fonctionne sur mobile mais n'est pas pensée mobile-first).
- Les sites marketing ponctuels ou la gestion de contenu — il existe des outils plus simples.

---

## Ce qui le différencie

| La plupart des outils low-code | Liberty Framework |
|---|---|
| Concepteur de formulaires glisser-déposer qui génère une UI sur mesure par page. | Une grammaire d'UI cohérente — une grille + un dialogue — appliquée à chaque écran. Plus rapide à apprendre pour les utilisateurs, plus rapide à construire pour les développeurs. |
| Backend propriétaire qui détient vos données. | Votre propre base de données. Votre propre pool. Le framework n'y accède qu'à travers des requêtes déclarées ; export et migration sont triviaux. |
| Vous êtes lié à l'hébergement de l'éditeur. | Auto-hébergé. systemd, Docker, Kubernetes — à vous de choisir. |
| Schéma déclaré à la main dans l'outil. | Schéma découvert à l'exécution depuis la requête vive. Modifiez le SQL, l'UI suit. |
| Modèle de plugins fermé. | Plugins Python ouverts, routes React personnalisées, API REST, et un assistant IA en tool-use qui exécute les mêmes requêtes que l'UI. |
| Vous choisissez une stack et vous l'apprenez. | Vous connaissez déjà SQL ; le reste se fait avec des cases à cocher et des listes déroulantes. |

La différence la plus importante, c'est le modèle de **schéma découvert** : rien de vos données n'est dupliqué dans la configuration du framework. Le connecteur connaît la requête ; la base connaît les colonnes. Quand une colonne change, l'UI le reflète au prochain rechargement.

---

## Cinq concepts, un seul modèle mental

Tout ce que fait le framework se compose à partir de cinq concepts :

| Concept | Ce que c'est | Ce qu'il résout |
|---|---|---|
| **[Pool](../installation/python-server.md)** | Une connexion à une base de données (une URL SQLAlchemy + des identifiants). | « Comment j'atteins ces données ? » |
| **[Connecteur](./connectors.md)** | Un ensemble nommé de requêtes / endpoints au-dessus d'un pool. | « Quelles questions je veux poser à cette source ? » |
| **[Écran](./build/screens/overview.md)** | Une grille + un dialogue d'édition au-dessus des requêtes d'un connecteur. | « Comment je laisse une personne consulter et modifier ça ? » |
| **[Tableau de bord](./dashboards.md)** | Une mise en page de KPI et de graphiques sur les mêmes requêtes. | « Comment je résume ça pour quelqu'un qui veut juste l'essentiel ? » |
| **[Menu](./build/menus/overview.md)** | L'arborescence latérale qui organise écrans et tableaux de bord en une application. | « Comment je rends ça navigable ? » |

Autour de ces cinq concepts, les couches de support : le [dictionnaire](./dictionary.md) pour les libellés et les formats, l'[authentification et les rôles](./build/secure/sign-in.md) pour qui-voit-quoi, les [jobs](../nomaflow/overview.md) pour le travail planifié, l'[assistant IA](./ai-assistant.md) pour l'accès en langage naturel, les [plugins](./apps/plugins.md) pour du Python personnalisé.

Chaque page de concept de ce site s'ouvre par **ce que c'est, pourquoi il existe, quand on en crée un, comment il s'imbrique avec les autres**. Une fois ces cinq pages lues, la surface du framework est pour l'essentiel cartographiée.

---

## Comment l'apprendre

Trois chemins d'entrée dans le framework — choisissez celui qui correspond à votre manière de lire.

### 1. Tutoriels pratiques *(recommandé)*

Le **[tutoriel Construire un CRM](./tutorial-crm/01-setup.md)** est un parcours en six étapes qui produit une application de gestion de la relation client opérationnelle — clients, affaires, activités, un tableau de bord du pipeline commercial, connexion OIDC, accès par rôle, l'assistant IA et un job planifié. Le domaine est générique ; aucune connaissance préalable n'est requise au-delà de SQL.

Pour une admin ERP réelle bâtie sur le framework, l'application packagée **[Nomajde](https://docs.nomana-it.fr/liberty/nomajde/overview)** couvre JD Edwards de bout en bout, prête à l'emploi — utilisateurs, rôles, security workbench, file BIP, données de référence. Installez-la, pointez-la sur votre base JDE, vous obtenez une admin opérationnelle sans rien construire.

### 2. Approche par cas d'usage

Si vous préférez partir de *ce que vous voulez construire*, la page **[Ce que vous pouvez construire](./what-you-can-build.md)** liste chaque cas d'usage courant (CRUD interne, outils d'administration, tableaux de bord BI, intégrations, portails clients, orchestration de workflows, ETL) avec un paragraphe « comment le framework s'y prend » plus un lien vers le tutoriel / la recette de cookbook correspondante.

### 3. Approche référence

Si vous êtes du genre à lire la documentation de bout en bout, la section **[Démarrage](../installation/python-server.md)** vous guide à travers l'installation, la structure des fichiers, l'interface Paramètres ; ensuite la section **Concepts** explique chaque primitive en profondeur.

---

## Ce qu'il y a dans le reste de cette documentation

| Section | Ce qu'elle couvre |
|---|---|
| [Démarrage](../installation/python-server.md) | Installer le framework, créer votre première app, comprendre la structure des fichiers. |
| [Tutoriel — Construire un CRM](./tutorial-crm/01-setup.md) | Parcours CRM complet, de bout en bout. |
| [Configuration](./configuration/settings-ui.md) | Interface Paramètres, réglages du framework, variables d'environnement, rechargement à chaud, secrets chiffrés au repos. |
| [Concepts](./connectors.md) | Les cinq primitives du framework + liaison des paramètres et conditions de formulaire, chacune avec une intro « Quoi / Pourquoi / Quand ». |
| [Authentification](./build/secure/sign-in.md) | Utilisateurs locaux, OIDC, JWT, rôles, permissions, clés de licence. |
| [Apps et Plugins](./apps/overview.md) | Organisation multi-apps, plugins Python personnalisés, internationalisation. |
| [Jobs — Nomaflow](../nomaflow/overview.md) | Travail planifié, pipelines ETL, types d'étape, historique d'exécution. |
| [Assistant IA](./ai-assistant.md) | L'assistant en tool-use, comment il met à disposition les requêtes des connecteurs. |
| [Cookbook](./cookbook/crud-existing-table.md) | Recettes courtes pour les patrons habituels — export Excel, upload de fichier, OIDC, journal d'audit, etc. |
| [Référence CLI](../references/cli.md) | `liberty-admin`, `liberty-connectors`, `liberty-crypto`, `liberty-license`. |
| [Référence API REST](../references/rest-api.md) | Chaque endpoint, groupé par domaine. |
| [Déploiement](../installation/production.md) | systemd, conteneur, Kubernetes — exécuter le framework en production. |

---

## Le frontend en un paragraphe

React 19 + Vite + TypeScript, construit une fois dans `frontend/dist` et servi en statique par le backend FastAPI sur le même port. Thème sombre par défaut avec bascule vers le thème clair, `react-i18next` EN / FR, icônes `lucide-react`, DM Sans, `@tanstack/react-table` pour la grille, `react-markdown` + `remark-gfm` pour l'assistant, `@monaco-editor/react` pour l'édition de code dans l'app. Vous n'en écrivez rien — le framework rend tout à partir de la configuration.

---

## Le backend en un paragraphe

Python 3.12, FastAPI, SQLAlchemy 2.0 async avec asyncpg (PostgreSQL) + oracledb (Oracle, thin), Anthropic SDK pour l'assistant IA, authlib pour OIDC, Argon2 pour le hash des mots de passe, cryptography pour le chiffrement de champ AES-256-GCM, APScheduler pour les jobs cron, Socket.IO pour les mises à jour live. Un seul processus, un seul port, aucun démon compagnon. Vous n'écrivez pas de Python sauf si vous voulez une étape de job sur mesure ou un hook d'extension.

---

## Prêt ?

| Si vous voulez… | Allez à |
|---|---|
| **Construire quelque chose tout de suite** | [Tutoriel — Construire un CRM](./tutorial-crm/01-setup.md). |
| **Voir d'abord ce qui est possible** | [Ce que vous pouvez construire](./what-you-can-build.md). |
| **Installer le framework** | [Démarrage → Installation](../installation/python-server.md). |
| **Comprendre les concepts d'abord** | [Concepts → Connecteurs](./connectors.md) est l'entrée naturelle. |
| **Chercher un champ précis** | [Interface Paramètres](./configuration/settings-ui.md) liste chaque éditeur ; chaque page de Concepts renvoie vers l'éditeur pertinent. |
