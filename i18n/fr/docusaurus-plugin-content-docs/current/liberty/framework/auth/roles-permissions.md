---
title: Rôles et permissions
description: "Le contrôle d'accès est partagé entre les rôles (groupes nommés de permissions) et les permissions (codes atomiques qui gouvernent une surface). Les rôles sont édités depuis Paramètres → Rôles, attribués depuis Paramètres → Utilisateurs, et le framework élague chaque surface contre l'ensemble effectif des permissions de l'appelant."
keywords: [Liberty Framework, roles, permissions, RBAC, access control, permission codes, settings, roles editor, pruning]
---

# Rôles et permissions

Le contrôle d'accès est partagé entre les **rôles** (groupes nommés de permissions) et les **permissions** (codes atomiques qui gouvernent une surface). Un utilisateur porte un ou plusieurs rôles ; le framework collecte chaque permission de chaque rôle dans un **ensemble plat de permissions** et l'utilise pour **élaguer** chaque surface que l'utilisateur voit — menus, écrans, connecteurs, outils IA, la page Paramètres elle-même.

L'objectif de conception est *l'échec invisible* : un utilisateur sans permission ne voit pas la surface, n'obtient pas de 403 — l'entrée n'est tout simplement pas rendue. L'interface Paramètres est l'endroit de référence pour définir les deux extrémités — *Paramètres → Rôles* pour les définitions de rôles, *Paramètres → Utilisateurs* pour l'attribution.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>UTILISATEUR</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}><b>alice</b><br/>roles = [viewer, editor]</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>RÔLES</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}><b>viewer</b> → sql:billing:*, screens:billing:*<br/><b>editor</b> → + sql:billing:*:write, api:crm:contacts</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>EFFECTIVES</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>ensemble plat des permissions<br/>utilisé pour élaguer chaque surface</div>
  </div>
</div>

---

## Modifier un rôle — Paramètres → Rôles

Ouvrir **Paramètres → Rôles**. La page liste chaque rôle avec son nombre de membres, les rôles des membres, la description et l'héritage. Cliquer sur une ligne ouvre l'éditeur de rôle.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Rôles → editor</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Annuler</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.75}}>Nom affiché</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Editor</span></div>
    <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Viewer + écriture sur billing</span></div>
    <div style={{opacity: 0.75}}>Hérite de</div><div><span style={{padding: '3px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>viewer</span></div>
  </div>
  <div style={{padding: '14px 16px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff'}}>Permissions accordées</div>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Ajouter permission</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 60px', rowGap: '4px', alignItems: 'center', fontSize: '11px'}}>
      <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontFamily: 'ui-monospace, monospace'}}>sql:billing:*:write</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✕</div>
      <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontFamily: 'ui-monospace, monospace'}}>api:crm:contacts</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✕</div>
    </div>
  </div>
</div>

| Champ | Effet |
|---|---|
| **Nom affiché** | Affiché dans le sélecteur de rôle et sur les pages utilisateur. |
| **Description** | Texte libre — apparaît en info-bulle dans la liste des Rôles. |
| **Hérite de** | Sélection multiple d'autres rôles dont les permissions sont fusionnées dans celui-ci. Les cycles sont refusés à l'enregistrement. |
| **Permissions accordées** | La liste des codes de permission que ce rôle porte. Chaque ligne a un `✕` pour retirer. *+ Ajouter permission* ouvre le **Sélecteur de permission**. |
| **Membres** *(lecture seule)* | Nombre d'utilisateurs qui portent ce rôle — lié à l'onglet Utilisateurs filtré sur eux. |

L'éditeur de rôle expose les **permissions effectives** en bas — l'union des *Permissions accordées* + l'ensemble effectif de chaque rôle hérité. Utile pour confirmer qu'une chaîne d'`hérite de` produit le total attendu.

### Sélecteur de permission

*+ Ajouter permission* ouvre une boîte de dialogue avec les codes de permission canoniques du framework regroupés par catégorie — *SQL*, *API*, *Écrans*, *Menus*, *Tableaux de bord*, *Graphiques*, *Jobs*, *IA*, *Paramètres*, *Utilisateurs / Rôles*, *Licence*. Chaque ligne propose d'abord la forme générique (`sql:billing:*`, `screen:billing:*`) puis les lignes par entité en dessous.

Saisir dans la barre de recherche réduit la liste — chercher `billing` retrouve chaque code de l'app / connecteur *billing* à travers les catégories.

---

## Les codes de permission

Chaque surface gouvernée a un **code de permission canonique** généré par le framework. Le sélecteur les affiche par catégorie ; le tableau ci-dessous est la carte conceptuelle.

| Surface | Modèle de code | Exemple |
|---|---|---|
| **Requête SQL** *(lecture)* | `sql:<connector>:<query>` | `sql:billing:monthly-invoice-counts` |
| **Requête SQL** *(écriture)* | `sql:<connector>:<query>:write` | `sql:tasks:update:write` |
| **Endpoint HTTP / API** | `api:<connector>:<endpoint>` | `api:crm:get-customer` |
| **Écran** | `screen:<app>:<id>` | `screen:billing:invoices` |
| **Menu** | `menu:<app>:<leaf>` | `menu:billing:invoices` |
| **Tableau de bord** | `dashboard:<id>` | `dashboard:sales-overview` |
| **Graphique** *(accès direct)* | `chart:<id>` | `chart:invoices-by-month` |
| **Job (Nomaflow)** | `job:<name>` | `job:nightly-sync` |
| **Paramètres — lecture** | `settings:read` | accorde la visibilité du lien Paramètres |
| **Paramètres — par onglet** | `settings:<section>` | `settings:connectors`, `settings:dictionary`, … |
| **Paramètres — rechargement** | `settings:reload` | accorde `POST /admin/reload` |
| **Utilisateurs / Rôles** | `users:read`, `users:write` | consulter / éditer les utilisateurs |
| **Licence** | `license:read` | consulter le contenu de la licence |
| **Assistant IA** | `ai:chat`, `ai:tool:<name>` | utiliser le chat, autoriser un outil spécifique |

Les jokers sont pris en charge sur l'axe connecteur / app : `sql:billing:*` accorde chaque requête du connecteur `billing` ; `screen:billing:*` accorde chaque écran de l'app `billing` ; `*` seul est réservé au rôle intégré `admin`.

---

## Rôles intégrés

Le framework livre deux rôles que l'on ne peut pas retirer :

| Rôle | Permissions |
|---|---|
| **admin** | `*` — chaque code, y compris la page Paramètres elle-même. |
| **anon** | Aucune. Attribuée automatiquement aux requêtes non authentifiées sur les endpoints publics (rare ; le framework par défaut exige l'authentification). |

Un `./start.sh init-db` neuf amorce un utilisateur `admin` avec le rôle `admin` ; aucun autre utilisateur ne démarre avec des permissions élevées.

---

## Attribuer des rôles aux utilisateurs — Paramètres → Utilisateurs

Dans l'onglet **Utilisateurs**, chaque ligne d'utilisateur expose une sélection multiple de rôles. Ajouter un rôle est un seul clic. Le framework recalcule l'ensemble effectif des permissions de l'utilisateur à l'enregistrement ; l'appel API suivant de cet utilisateur utilise le nouvel ensemble.

Quand OIDC est la source de vérité (voir [Authentification → OIDC](./authentication.md#oidc)), le claim des groupes de l'IdP est mappé 1:1 aux noms de rôles Liberty. L'onglet Rôles définit ce que chaque rôle peut faire — l'IdP décide juste qui le porte.

---

## Comment fonctionne l'élagage

L'élagage s'exécute **par requête**, contre l'ensemble de permissions du JWT. Chaque surface suit la même recette :

| Surface | Règle d'élagage |
|---|---|
| **Menus** | Une feuille est masquée quand sa permission sous-jacente n'est pas accordée. Un dossier sans feuille visible est masqué également. |
| **Catalogue de connecteurs** | Les connecteurs sans requête / endpoint accordé sont entièrement masqués. |
| **Outils de l'assistant IA** | La liste d'outils passée au LLM ne contient que les requêtes que l'appelant peut exécuter. |
| **Page Paramètres** | Le lien Paramètres disparaît de l'en-tête sans `settings:read`. Chaque onglet de constructeur est masqué sans sa propre permission. |
| **Tableaux de bord** | Un panneau qui référence une requête que l'appelant ne peut pas exécuter est retiré silencieusement. Le tableau de bord se rend sans le panneau. |
| **Écrans** | Un utilisateur sans `screen:<app>:<id>` reçoit un 403 à la navigation directe (l'URL est joignable). L'interface Paramètres n'expose jamais l'écran dans les sélecteurs quand cette permission manque. |

Le 403 à la navigation directe vers un écran est le **seul endroit** où le framework retourne un échec dur — toute autre surface est élaguée silencieusement. La raison : les URLs d'écran peuvent avoir été mises en favori ou copiées-collées, et ne rien afficher donnerait l'impression d'une page cassée.

---

## Application côté serveur

L'élagage est une optimisation UX ; le **verrou est sur le serveur**. Pour chaque appel REST :

1. Le framework analyse le JWT et extrait l'ensemble de permissions de l'utilisateur.
2. Le gestionnaire de route calcule la permission requise à partir de l'URL (`POST /api/sql/billing/customer-create` → `sql:billing:customer-create:write`).
3. Le gestionnaire exécute une **correspondance générique plate** contre l'ensemble de permissions.
4. En cas d'échec, le gestionnaire retourne `403 Forbidden` avec le code manquant dans le corps.

Un utilisateur qui forge une requête vers une requête non permise obtient le 403 ; l'élagage de l'interface n'a d'importance que pour l'utilisabilité.

---

## Accorder l'accès à l'interface Paramètres

La page Paramètres elle-même est gouvernée. L'ensemble minimum pour un opérateur typique qui édite un constructeur :

| Permission | Effet |
|---|---|
| `settings:read` | Le lien Paramètres apparaît dans l'en-tête. |
| `settings:connectors` *(ou l'onglet correspondant)* | L'onglet correspondant est visible. |
| `settings:reload` | Le bouton *Enregistrer et recharger* fonctionne (sinon le formulaire enregistre et un avertissement indique "rechargement requis"). |

Lire sans écrire est aussi possible — accorder `settings:read` + `settings:connectors` (sans `:reload`) pour un profil auditeur.

L'éditeur Raw TOML est gouverné séparément par `settings:raw` ; cela permet d'autoriser un opérateur classique à éditer chaque constructeur tout en lui retirant l'issue de secours.

---

## Recettes de rôles courantes

Le bouton *Modèles* de l'éditeur de Rôles propose quelques points de départ — choisir un, puis affiner.

| Modèle | Permissions effectives |
|---|---|
| **Viewer** | Chaque requête de lecture (`sql:*:*`), chaque API GET (`api:*:*`), chaque écran (`screen:*:*`), chaque menu (`menu:*:*`), chaque tableau de bord (`dashboard:*`), chaque graphique (`chart:*`), chat IA (`ai:chat`). |
| **Editor** | Hérite de *Viewer* + chaque requête d'écriture (`sql:*:*:write`). |
| **Settings editor** | `settings:read` + chaque `settings:*` par onglet + `settings:reload`. Pas de `sql:*`. Peut câbler le framework sans voir les données sous-jacentes. |
| **Job operator** | `settings:read` + `settings:jobs` + `job:*`. Déclencher n'importe quel job manuellement, voir tout l'historique d'exécution. |
| **Auditor** | `settings:read` + `settings:technical` + `users:read` + `license:read` + accès en lecture aux connecteurs spécifiques à l'audit. |

Utiliser *Modèles* comme point de départ ; renommer et affiner avant d'enregistrer.

---

## Inspecter les permissions effectives

| Méthode | Ce qui est affiché |
|---|---|
| *Paramètres → Utilisateurs* → cliquer un utilisateur → onglet *Permissions effectives* | Liste plate de chaque permission accordée, avec le rôle qui l'a apportée. |
| `liberty-admin show alice` | Même liste sur la CLI. |
| `GET /auth/me` | Retourne le contenu JWT de l'utilisateur appelant, y compris le tableau de permissions. |
| Journal serveur avec `LIBERTY_LOG_LEVEL=DEBUG` | Imprime la permission correspondante à chaque appel gouverné. |

---

## Conseils et bonnes pratiques

- **Préférer les jokers sur les connecteurs.** `sql:billing:*` est plus simple à raisonner que 20 permissions individuelles et survit à l'ajout d'une nouvelle requête. Réserver les permissions nommées pour les préoccupations transverses.
- **Ne jamais accorder `*`.** C'est réservé au rôle intégré `admin` ; l'accorder à un rôle personnalisé contourne chaque futur verrou que le framework ajoutera.
- **Utiliser *Hérite de* pour empiler les rôles.** `editor` hérite de `viewer`, `manager` hérite de `editor`. L'héritage linéaire est plus simple à déboguer que les attributions parallèles.
- **Auditer le rôle *anon*.** Même s'il n'y a aucun utilisateur attribué par défaut, un paramètre quelque part pourrait ajouter un endpoint public. S'assurer qu'*anon* ne porte rien qu'il ne devrait pas.
- **Refléter les groupes de l'IdP.** Quand OIDC est la source de vérité, nommer les rôles Liberty pour correspondre aux noms de groupes de l'IdP — le mapping 1:1 est le contrat le plus propre.

---

## Sous le capot

Les rôles sont enregistrés à côté des utilisateurs — dans `config/auth.toml` pour le backend TOML, dans les tables `ly2_roles` / `ly2_role_permissions` pour le backend base de données. Les opérateurs **ne les modifient pas à la main** ; l'éditeur de Rôles est l'interface de référence.

---

## Pour aller plus loin

- [Authentification](./authentication.md) — backend local, OIDC, cycle de vie JWT.
- [Clé de licence](./license-key.md) — verrous de fonctionnalités au-dessus des permissions.
- [Configuration → Interface Paramètres](../configuration/settings-ui.md) — quel constructeur vit derrière quelle permission.
