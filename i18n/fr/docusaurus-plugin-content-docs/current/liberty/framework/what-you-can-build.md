---
title: Ce que vous pouvez construire
description: "Cas d'usage concrets pour Liberty Framework — outils d'administration internes, tableaux de bord BI, administration d'ERP, intégrations, portails clients, orchestration ETL. Chaque section montre ce que le framework fait pour vous, ce qu'il vous reste à écrire et combien de temps cela prend."
keywords: [Liberty Framework, use cases, cas d'usage, internal apps, applications internes, admin tools, BI dashboards, ERP, JDE, integration, ETL, customer portal, portail client, examples]
---

# Ce que vous pouvez construire

Le framework est volontairement petit — une poignée de concepts qui se combinent pour couvrir une large surface. Cette page est le catalogue de ce que les équipes construisent réellement avec lui, avec le **chemin** pour chacun : quelle part se fait en configuration, quelle part demande du code sur mesure, comment les tutoriels et recettes de cookbook existants s'y branchent.

Si vous ne savez pas si le framework convient à votre problème, cette page est le bon endroit où vérifier.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>📋 Apps d'administration internes</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>CRUD sur des tables existantes, accès par rôle, UX par défaut sensée. Le pain quotidien du framework — 1 jour entre « j'ai une base » et « les utilisateurs l'utilisent ».</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '6px'}}>📊 Tableaux de bord BI</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>KPI et graphiques sur des requêtes SQL nommées. Barre de filtres partagée, drill-down vers les grilles, export PDF. Pas besoin d'un outil BI distinct pour le cas à 80 %.</div>
  </div>
  <div style={{border: '1px solid rgba(34,197,94,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#22c55e', marginBottom: '6px'}}>🗄 Administration d'ERP</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>Une UI moderne sur JD Edwards, SAP ou NetSuite — utilisateurs, sécurité, file BIP, données de référence. Ne remplace pas l'ERP ; donne aux opérateurs un moyen plus rapide d'y travailler.</div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '6px'}}>🔌 Intégrations</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>UI au-dessus de récepteurs de webhooks, synchronisations planifiées, pipelines ETL. Nomaflow exécute les jobs ; le framework affiche les exécutions.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>🤝 Portails clients</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>Une tranche cadrée d'une app interne, ouverte à des utilisateurs externes via OIDC. Accès au niveau ligne, journal d'audit, upload de fichiers — tout est natif du framework.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '6px'}}>⚙ Orchestration de workflows</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>Approuver / refuser / router — formulaires multi-étapes, workflows à statuts, relances planifiées. Les conditions de formulaire gèrent l'UX par état ; Nomaflow gère les minuteurs.</div>
  </div>
</div>

Le motif est le même pour chaque cas d'usage : **définissez les sources de données, pointez les écrans dessus, organisez le menu, posez les permissions**. Les différences se trouvent dans les fonctionnalités qui passent au premier plan.

---

## 1. Apps d'administration internes

Le cas d'usage canonique. Vous avez une base de données (utilisateurs, produits, contrats, tickets — n'importe quoi) et vous voulez une interface propre pour que l'équipe consulte les données, les modifie, les filtre, les exporte.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Grille** avec colonnes triables / filtrables, pagination, multi-sélection. | ✓ |
| **Dialogue d'édition** avec onglets, champs, validation, flux d'enregistrement. | ✓ |
| Actions **Ajouter / Modifier / Supprimer** avec contrôles par rôle. | ✓ |
| **Export Excel** de la vue filtrée courante. | ✓ |
| **Colonnes d'audit** (`created_by`, `created_at`, `updated_by`, `updated_at`) renseignées automatiquement à l'enregistrement. | ✓ |
| **Verrous d'enregistrement** — deux opérateurs ne peuvent pas modifier la même ligne en même temps. | ✓ |
| **Localisation** — chaque libellé, chaque statut, chaque message d'erreur. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Décider quelles tables votre app a besoin. | Quelques minutes. |
| Configurer le pool qui pointe vers votre base. | 2 minutes — collez l'URL JDBC, testez la connexion. |
| Écrire **une requête SQL de lecture par écran** (`SELECT ... FROM ...`). | 5 à 10 minutes par écran. |
| Écrire les requêtes d'écriture (`INSERT`, `UPDATE`, `DELETE`) pour les écrans modifiables. | 5 minutes par écran. |
| Choisir les colonnes à afficher, les onglets du dialogue, les widgets des champs. | 5 à 10 minutes par écran dans l'interface Paramètres. |

Une app d'administration typique à 10 écrans, avec un opérateur qui connaît le schéma, sort en **une journée**. L'essentiel du temps passe dans le SQL.

### Parcours guidé

Le **[tutoriel Construire un CRM](./tutorial-crm/01-setup.md)** est exactement ça — clients, affaires, activités, avec des relations et un tableau de bord par-dessus. Six étapes guidées, de bout en bout.

Pour une fiche pratique recette sur un seul écran CRUD, voir **[Cookbook → CRUD sur une table existante](./cookbook/crud-existing-table.md)**.

---

## 2. Tableaux de bord BI

Le framework intègre des [graphiques](./charts.md) (courbe, barre, secteur, aire, nuage), des [tableaux de bord](./dashboards.md) (mise en page 12 colonnes avec panneaux stat / graphique / table) et une [barre de filtres partagée](./dashboards.md) qui propage une période ou un périmètre à chaque panneau.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Panneaux stat** avec delta vs la période précédente et sparklines de tendance. | ✓ |
| **Graphiques** qui enveloppent des requêtes SQL nommées — palettes de couleurs, légendes, infobulles, empilage. | ✓ |
| **Tables** en petits panneaux « top 5 refusés / en attente / en retard ». | ✓ |
| **Barre de filtres partagée** qui propage une période, une société, une région à chaque panneau. | ✓ |
| **Drill-down** depuis n'importe quel panneau vers l'écran sous-jacent, pré-filtré. | ✓ |
| **Export PDF** du tableau de bord rendu. | ✓ |
| **Élagage des permissions** — les panneaux qui référencent des requêtes que l'appelant ne peut pas exécuter disparaissent silencieusement. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Écrire les requêtes SQL qui agrègent vos données (généralement `GROUP BY` par période). | Le gros du travail — 10 à 30 minutes par requête selon la complexité des jointures. |
| Câbler un graphique par requête et une stat par KPI. | 2 minutes par graphique dans l'interface Paramètres. |
| Les disposer sur la grille du tableau de bord. | 5 minutes. |

Un tableau de bord avec 4 KPI + 2 graphiques + 1 table drill-down — une demi-journée, avec l'essentiel du temps dans le SQL.

### Parcours guidé

[Tutoriel — CRM → Étape 4 « Tableau de bord du pipeline commercial »](./tutorial-crm/04-dashboard.md) déroule l'opération.

---

## 3. Administration d'ERP (JD Edwards, SAP, NetSuite)

Les ERP livrent des UI natives fonctionnelles mais lentes, datées et lourdes. Le framework vous donne une interface moderne **au-dessus de la base de l'ERP**, sans modifier l'ERP lui-même.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Connexion à JDE / SAP / NetSuite** via des pools Oracle ou SQL Server. | ✓ |
| **Lecture des données de référence ERP** — utilisateurs, adresses, articles, comptes, centres de travail. | ✓ |
| **Visualisation de la sécurité** — rôles, permissions, suivi des objets, journal d'audit. | ✓ |
| **Supervision des traitements batch** — file d'impression BIP, soumissions de jobs, planificateur. | ✓ |
| **Vues par environnement** — DV / PY / PD avec les mêmes écrans. | ✓ |
| **Lecture seule par défaut** pour la sûreté, chemins d'écriture ajoutés explicitement par écran. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Définir le pool ERP — URL Oracle, schéma, identifiants. | 5 minutes (mode Oracle thin, pas d'installation cliente nécessaire). |
| Écrire les requêtes SELECT sur les tables ERP. | La partie intéressante — demande la connaissance des tables ERP. |
| Mettre les écrans en *lecture seule* par défaut ; opter intentionnellement pour des chemins d'écriture. | Une ligne par écran. |

### Parcours guidé

Pour JD Edwards en particulier : l'application packagée **[Nomajde](https://docs.nomana-it.fr/nomajde/)** est une app Nomana-IT bâtie sur le framework et qui livre une admin JDE complète — utilisateurs F0092, security workbench, file BIP, données de référence. Installez-la, pointez-la sur votre base JDE, c'est fini. Aucun tutoriel n'est nécessaire.

La même approche fonctionne pour SAP (schéma `SAPSR3`), NetSuite (API suite-analytics), Microsoft Dynamics (le backend SQL on-premise).

Les apps éditeur Nomana-IT [Nomasx-1](https://docs.nomana-it.fr/liberty/nomasx-1/overview) et [Nomajde](https://docs.nomana-it.fr/liberty/nomajde/overview) sont des versions productionnées de ce motif — empaquetez toute une app d'administration, mettez-la sous licence, livrez-la aux clients.

---

## 4. Intégrations

Le moteur [Jobs / Nomaflow](./jobs/overview.md) du framework + les connecteurs HTTP + les déclencheurs planifiés couvrent le besoin « plateforme d'intégration » sans outil distinct.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Jobs planifiés en cron** avec rejeu, timeouts, verrou d'instance unique. | ✓ |
| **Connecteurs HTTP / REST** avec auth (Basic, Bearer, OAuth2), paramètres, mise en forme de la réponse. | ✓ |
| **Copie SQL → SQL** avec coercition de types, découpage par lots, échange de table atomique. | ✓ |
| **Synchronisation LDAP** avec mapping d'attributs et upsert. | ✓ |
| **Récepteurs de webhooks** — endpoints REST ouverts par le framework. | ✓ |
| **Historique d'exécution** avec entrées / sorties / logs par étape. | ✓ |
| **Suivi de log en direct** via Socket.IO. | ✓ |
| **Notifications d'échec** vers Slack / e-mail / webhook. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Définir les connecteurs source et cible. | 5 minutes chacun. |
| Écrire les définitions d'étape du job dans l'éditeur de jobs. | 10 à 30 minutes par job. |
| Du Python sur mesure uniquement pour ce que les types d'étape déclaratifs ne couvrent pas. | La porte de sortie — rarement nécessaire. |

### Parcours guidé

[Tutoriel — CRM → Étape 6 « IA et jobs »](./tutorial-crm/06-ai-and-jobs.md) couvre un job planifié qui rejoue chaque nuit. Pour une recette exécutable, [Cookbook → Rapport planifié par e-mail](./cookbook/scheduled-report-email.md).

---

## 5. Portails clients

Un portail client est juste **une app d'administration interne cadrée sur les données niveau ligne d'un seul tenant**. Le modèle de permissions du framework (codes `sql:<connector>:<query>` + le placeholder `session.user`) couvre l'isolation niveau ligne sans code spécifique.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Connexion OIDC** — votre IdP, l'IdP du client, ou les deux. | ✓ |
| **Filtrage de ligne par utilisateur** via des motifs `WHERE owner = :session_user`. | ✓ |
| **Codes de permission par écran** — vos opérateurs voient des écrans différents du client. | ✓ |
| **Upload et téléchargement** de fichiers. | ✓ |
| **Journal d'audit** de chaque écriture que le client effectue. | ✓ |
| **UI brandée** — thème de l'app client, logo personnalisé, favicon personnalisée. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Câbler OIDC sur votre IdP (ou celui du client). | 10 minutes par IdP. |
| Ajouter `WHERE owner = :session_user` à chaque requête côté client. | Une ligne par requête. |
| Donner au client un seul rôle avec les bonnes permissions. | 2 minutes. |

### Parcours guidé

Les parties rôles + OIDC sont dans [Tutoriel — CRM → Étape 5 « Rôles et SSO »](./tutorial-crm/05-auth.md). Le motif de filtrage niveau ligne est documenté dans [Cookbook → Accès au niveau ligne](./cookbook/row-level-access.md).

---

## 6. Orchestration de workflows

La combinaison [écrans](./screens.md) + [conditions de formulaire](./form-conditions.md) + [jobs](./jobs/overview.md) couvre la plupart des workflows à machine d'états — approuver / refuser, escalader, router vers la bonne équipe.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Champ Statut** rendu en chip coloré avec transitions contrôlées par rôle. | ✓ |
| **Formulaires multi-étapes** — un long processus découpé sur les onglets du même dialogue. | ✓ |
| **Visibilité par état** — champ « Commentaires » visible seulement après Soumettre ; « Motif de refus » seulement sur Refuser. | ✓ |
| **Relances planifiées** — un job qui relance après N jours dans un état. | ✓ |
| **Notifications** vers l'opérateur concerné sur changement d'état. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Modéliser la machine d'états dans votre base (une colonne `status` + une table `transitions` si vous voulez des contrôles fins). | Une table. |
| Câbler les conditions sur les champs du formulaire. | Par champ, mais rapide — voir l'éditeur dans [Conditions de formulaire](./form-conditions.md). |
| Câbler les notifications sur la requête d'écriture du changement de statut. | Quelques minutes. |

### Parcours guidé

[Cookbook → Formulaire multi-étapes](./cookbook/multi-step-form.md) est la recette exécutable.

---

## 7. ETL et entrepôt de données

Pour les équipes qui ingèrent des données depuis plusieurs sources dans un entrepôt, Nomaflow + les connecteurs du framework couvrent l'orchestration **et** l'UI opérateur.

### Ce que le framework fait pour vous

| Fonctionnalité | Intégrée |
|---|---|
| **Étape `sql_copy`** — diffuse les lignes source → cible avec coercition de types, découpage par lots, renommage atomique. | ✓ |
| **Rejeu par étape** avec backoff exponentiel. | ✓ |
| **Contrôle de concurrence** — instance unique par job. | ✓ |
| **Dépendances** entre jobs. | ✓ |
| **Une UI pour superviser chaque exécution**, avec suivi de log en direct. | ✓ |

### Ce que vous écrivez

| Tâche | Temps |
|---|---|
| Définir les pools source et cible. | 5 minutes chacun. |
| Écrire les requêtes source (souvent un simple `SELECT * FROM source_table`). | Trivial. |
| Câbler le job dans l'éditeur de jobs. | 10 minutes par copie. |

### Parcours guidé

[Cookbook → Import en masse](./cookbook/bulk-import.md) couvre le côté entrant ; la [documentation des jobs](./jobs/overview.md) couvre l'orchestration.

---

## Quand le framework n'est pas le bon outil

Section honnêteté :

- **Applications grand public.** L'UX grille + dialogue est orientée opérateur, pas grand public. Utilisez Next.js / Remix pour ça.
- **Apps mobile-first.** La SPA fonctionne sur mobile mais n'est pas pensée pour. Utilisez React Native / Flutter pour du natif.
- **Apps de collaboration temps réel.** Les verrous empêchent les éditions concurrentes, mais le framework n'embarque pas d'operational-transform ni de CRDT. Utilisez Yjs / Liveblocks.
- **UX très personnalisée.** Si la plupart de vos écrans demandent une mise en page unique (un tableau Kanban, un diagramme de Gantt, une carte), la grammaire grille + dialogue du framework vous freine. Mieux vaut intégrer des routes React personnalisées ; ou choisir un autre outil.
- **Sites marketing statiques.** Utilisez un générateur de site statique.

Le framework est le bon outil quand **la plupart de vos écrans sont liste-et-édition au-dessus d'une base de données**, avec des touches de tableaux de bord, jobs et intégrations. Ce qui décrit la grande majorité des applications internes.

---

## Choisissez votre chemin

| Vous êtes… | Commencez par |
|---|---|
| **Nouveau sur le framework et vous voulez un tutoriel propre** | [Tutoriel — Construire un CRM](./tutorial-crm/01-setup.md) — six étapes, domaine générique. |
| **En train de planifier une admin JDE** | Installez l'app packagée [Nomajde](https://docs.nomana-it.fr/nomajde/) — spécifique JDE, rien à construire. |
| **En train de planifier une admin SAP / NetSuite / autre ERP** | Suivez le [Tutoriel — Construire un CRM](./tutorial-crm/01-setup.md) ; le modèle se transpose. |
| **Juste en train de l'installer pour la première fois** | [Démarrage → Installation](./getting-started/installation.md). |
| **À la recherche d'une marche à suivre précise** | [Cookbook](./cookbook/crud-existing-table.md) — recettes courtes. |
| **Du genre à lire la grammaire du framework d'abord** | [Connecteurs](./connectors.md) est l'entrée naturelle. |
