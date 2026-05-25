---
title: Étape 5 — Rôles et SSO
description: "Séparez le CRM entre les rôles Sales (édition complète), Manager (lecture + tableau de bord) et Admin. Câblez la connexion OIDC contre un fournisseur d'identité réel. Illustre les rôles, les permissions, OIDC et les codes de permission par appel générés par le framework."
keywords: [Liberty Framework, tutoriel, CRM, rôles, permissions, OIDC, SSO, Authentik, Keycloak]
---

# Étape 5 — Rôles et SSO

Le CRM fonctionne mais chaque utilisateur est `admin`. Les vraies applications ont au moins deux profils — opérateurs qui modifient, observateurs qui lisent — et de plus en plus, ils se connectent via le **fournisseur d'identité de l'entreprise** (Authentik, Keycloak, Azure AD, Okta) au lieu d'un mot de passe par app.

Cette étape sépare le CRM en trois rôles et ajoute la connexion OIDC. Temps estimé : **15 minutes**.

---

## Ce que nous faisons et pourquoi

Le modèle de contrôle d'accès du framework a deux moitiés :

| Moitié | Où elle vit |
|---|---|
| **Ce qui peut être fait** — codes de permission atomiques générés automatiquement par requête, écran, tableau de bord, job. | Les codes apparaissent dans l'onglet *Permissions* de chaque éditeur. On ne les tape pas. |
| **Qui peut le faire** — rôles qui regroupent des permissions, affectés à des utilisateurs. | *Paramètres → Rôles* + *Paramètres → Utilisateurs*. |

Cette séparation permet de définir les rôles une fois et de les affecter à plusieurs utilisateurs, sans jamais toucher aux codes de permission individuels à la main.

Pour le CRM, nous mettons en place trois rôles :

| Rôle | Ce qu'il peut faire |
|---|---|
| **`crm-viewer`** | Voir le tableau de bord et les écrans, sans édition. |
| **`crm-sales`** | Lire + écrire tout sur les clients, affaires, activités. |
| **`crm-admin`** | Comme `crm-sales` + accès à l'interface Paramètres. |

Ensuite, nous ajouterons un backend OIDC pour que les utilisateurs se connectent avec l'IdP de l'entreprise.

---

## Regarder les codes de permission que vous avez déjà

Ouvrez **Paramètres → Connecteurs → customers → onglet Permissions**. Vous voyez les quatre codes que le connecteur a générés automatiquement :

| Code | Généré pour |
|---|---|
| `sql:customers:list` | La requête de lecture. |
| `sql:customers:create:write` | L'insertion. |
| `sql:customers:update:write` | La mise à jour. |
| `sql:customers:delete:write` | La suppression. |

Idem pour `deals` et `activities`. Plus quelques-uns issus du tableau de bord et du menu :

| Code | Généré pour |
|---|---|
| `screen:crm:customers` | Visiter l'écran Clients (contrôle au niveau page). |
| `screen:crm:deals` | Idem pour Affaires. |
| `dashboard:crm-pipeline-overview` | Le tableau de bord. |
| `menu:crm:*` | Les feuilles du menu crm. |

Le framework nous donne des **jokers** — `sql:customers:*` couvre chaque requête customer, `screen:crm:*` couvre chaque écran CRM. Nous utiliserons des jokers pour les définitions de rôle.

---

## Définir `crm-viewer`

**Paramètres → Rôles → + Nouveau rôle** :

| Champ | Valeur |
|---|---|
| **Id** | `crm-viewer` |
| **Nom affiché** | `CRM viewer` |
| **Description** | `Accès en lecture seule aux écrans CRM et au tableau de bord du pipeline.` |

Dans la section *Permissions accordées*, cliquez sur **+ Ajouter une permission** et ajoutez les codes correspondant à un accès en lecture seule :

| Code | Ce qu'il accorde |
|---|---|
| `sql:customers:list` | Lire les clients. |
| `sql:deals:*` *(joker)* | Lire toutes les requêtes deals — y compris les agrégats qui alimentent le tableau de bord. Nous n'ajoutons pas les codes `:write`. |
| `sql:activities:list` | Lire les activités. |
| `screen:crm:customers` | Visiter l'écran Clients. |
| `screen:crm:deals` | Visiter l'écran Affaires. |
| `dashboard:crm-pipeline-overview` | Visiter le tableau de bord. |
| `menu:crm:*` | Voir l'espace de travail CRM + chaque feuille à l'intérieur. Les écrans / tableaux de bord eux-mêmes sont contrôlés ; une feuille sans permission sur sa cible est cachée de toute façon. |
| `chart:crm-pipeline-by-stage` | Voir le graphique (sinon le panneau disparaît). |

**Enregistrer**.

Un `crm-viewer` en lecture seule est désormais possible. Comme il ne porte aucun code `:write`, le framework rend chaque écran en **mode lecture seule** — boutons Ajouter / Modifier / Supprimer cachés, le dialogue s'ouvre en mode consultation.

---

## Définir `crm-sales`

**+ Nouveau rôle** à nouveau :

| Champ | Valeur |
|---|---|
| **Id** | `crm-sales` |
| **Nom affiché** | `CRM sales` |
| **Description** | `Accès complet lecture + écriture sur clients, affaires et activités.` |
| **Hérite de** | `crm-viewer` |

En héritant de `crm-viewer`, on récupère chaque code de lecture gratuitement ; il suffit d'ajouter les écritures :

| Code | Ce qu'il accorde |
|---|---|
| `sql:customers:create:write` |
| `sql:customers:update:write` |
| `sql:customers:delete:write` |
| `sql:deals:create:write` |
| `sql:deals:update:write` |
| `sql:deals:delete:write` |
| `sql:activities:create:write` |
| `sql:activities:delete:write` |

**Enregistrer**.

---

## Définir `crm-admin`

| Champ | Valeur |
|---|---|
| **Id** | `crm-admin` |
| **Nom affiché** | `CRM admin` |
| **Hérite de** | `crm-sales` |

| Code | Ce qu'il accorde |
|---|---|
| `settings:read` | Le lien Paramètres apparaît dans l'en-tête. |
| `settings:connectors` | Modifier les connecteurs. |
| `settings:screens` | Modifier les écrans. |
| `settings:menus` | Modifier les menus. |
| `settings:dashboards` | Modifier les tableaux de bord. |
| `settings:charts` | Modifier les graphiques. |
| `settings:dictionary` | Modifier le dictionnaire. |
| `settings:reload` | Le bouton *Enregistrer et recharger* fonctionne. |
| `users:read` + `users:write` | Gérer les utilisateurs (utile quand OIDC créera de nouveaux utilisateurs). |

Notez que nous **n'accordons pas** `settings:framework` ni `settings:raw` — réservés à l'utilisateur `admin` de la plateforme.

**Enregistrer**.

---

## Créer deux utilisateurs pour tester

**Paramètres → Utilisateurs → + Nouvel utilisateur** :

| Utilisateur | Rôles |
|---|---|
| `sales-alice` | `crm-sales` |
| `viewer-bob`  | `crm-viewer` |

Mettez un mot de passe à chacun, puis déconnectez-vous de `admin` et reconnectez-vous en tant que `sales-alice`. Vous devriez voir :

- Le sélecteur d'espace de travail affiche **CRM** (le seul espace qu'Alice peut voir).
- **Vue d'ensemble du pipeline**, **Clients**, **Affaires** dans la barre latérale.
- Boutons Modifier / Ajouter / Supprimer présents.
- **Pas de lien Paramètres** dans l'en-tête.

Connectez-vous en tant que `viewer-bob` :

- Les trois mêmes entrées de barre latérale (il peut les voir).
- Boutons Modifier / Ajouter / Supprimer **cachés** — les écrans s'affichent en lecture seule.
- Cliquer sur une ligne ouvre le dialogue en mode consultation (pas de bouton Enregistrer).
- Tenter de taper `/settings` dans l'URL → 403.

L'élagage du framework est silencieux : rien ne dit « vous ne pouvez pas faire ça », les contrôles ne sont simplement pas là.

---

## Câbler la connexion OIDC

OIDC transforme le fournisseur d'identité de l'entreprise en backend d'authentification de Liberty. Les utilisateurs se connectent une fois, déconnexion unique, audit centralisé. Nous le mettons en place contre **Authentik** comme exemple — la procédure est identique pour Keycloak, Azure AD, Okta.

### Sur Authentik

1. Créez un **OAuth2/OpenID Provider** dans l'admin Authentik.
2. Réglez le **Redirect URI** sur `http://127.0.0.1:8000/auth/oidc/callback` (production : la vraie URL publique).
3. Notez le **Client ID** + le **Client secret** générés par Authentik.
4. Créez une **Application** liée au provider ; choisissez les **groupes** à exposer dans le token (nous les mapperons sur les rôles Liberty).

### Sur Liberty

Ouvrez **Paramètres → Framework → Authentification** et activez **OIDC activé**. Remplissez :

| Champ | Valeur |
|---|---|
| **Issuer URL** | `https://auth.example.com/application/o/liberty/` *(le slash final compte dans Authentik)* |
| **Client ID** | le client id Authentik |
| **Client secret** | 🔒 le client secret Authentik *(enregistré chiffré)* |
| **Redirect URI** | `http://127.0.0.1:8000/auth/oidc/callback` |
| **Claim e-mail** | `email` |
| **Claim groupes** | `groups` |
| **Auto-provisionnement** | ✓ *(crée l'utilisateur Liberty à la première connexion SSO)* |

Cliquez sur le bouton **▶ Tester la connexion**. Un nouvel onglet s'ouvre, la page de connexion d'Authentik apparaît, vous vous authentifiez, l'onglet retourne « OIDC test successful » plus les claims résolus (email, groupes) pour que vous puissiez confirmer que le mapping est bon.

**Enregistrer et recharger**.

### Mapper les groupes IdP aux rôles Liberty

Le framework mappe le `groups_claim` 1:1 sur les identifiants de rôles Liberty. Un groupe Authentik nommé `crm-sales` devient donc le rôle Liberty `crm-sales` que nous avons déjà défini. Veillez à ce que les noms correspondent — c'est toute la configuration du mapping.

Déconnectez-vous de `admin`. La page de connexion affiche maintenant un bouton **Se connecter avec SSO** à côté du formulaire identifiant/mot de passe. Cliquez dessus, authentifiez-vous contre Authentik, et vous revenez au framework avec les rôles que la claim de groupe de l'IdP a résolus.

Si `Auto-provisionnement` est activé (il l'est), les utilisateurs qui se connectent en SSO pour la première fois sont créés sur place avec les bons rôles. Pas de pré-inscription nécessaire.

---

## Deux choses à savoir sur OIDC

| Élément | Pourquoi ça compte |
|---|---|
| **Le backend local reste disponible.** | Le formulaire identifiant/mot de passe fonctionne toujours pour l'utilisateur `admin`. Utile quand l'IdP est en panne — vous pouvez entrer dans Liberty en mode bris-de-glace sans dépendre de la disponibilité d'Authentik. |
| **Les groupes IdP sont la source de vérité.** | Si vous retirez un utilisateur du groupe `crm-sales` dans Authentik, sa prochaine connexion le laisse sans `crm-sales`. L'enregistrement utilisateur reste dans Liberty (sans rôles) ; l'IdP décide qui a accès. |

---

## Ce que vous avez maintenant

Le CRM a de vrais rôles, de vrais utilisateurs, un vrai SSO. Deux profils d'opérateurs voient des choses différentes ; un manager qui ne fait que consulter obtient une expérience en lecture seule par construction.

Dernière couche à ajouter : l'**accès IA** aux données et un **job nocturne** qui garde le pipeline honnête en signalant les affaires stagnantes.

→ **[Étape 6 — Assistant IA et jobs planifiés](./06-ai-and-jobs.md)**.
