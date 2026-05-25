---
title: Connexion OIDC
description: "Recette — brancher le framework sur Authentik, Keycloak, Azure AD ou Okta en 10 minutes. Single sign-on, mapping groupes vers rôles, auto-provisionnement, accès de secours admin."
keywords: [Liberty Framework, cookbook, OIDC, SSO, Authentik, Keycloak, Azure AD, Okta]
---

# Connexion OIDC

## Le problème

Les utilisateurs se connectent avec le fournisseur d'identité de l'entreprise, pas un mot de passe par application. Vous voulez le SSO sans code sur mesure, avec l'appartenance aux groupes du fournisseur d'identité qui se traduit en rôles Liberty.

## Le modèle

Deux moitiés :

1. **Sur le fournisseur d'identité** — enregistrer le framework comme client OAuth2/OIDC, exposer un claim `groups`, enregistrer l'URI de redirection.
2. **Sur le framework** — activer *OIDC enabled* sous *Paramètres → Framework → Authentification*, remplir les quatre valeurs standard, cliquer sur *Tester la connexion*.

## La recette

### Étape 1 — enregistrer Liberty sur le fournisseur d'identité

La procédure dépend du fournisseur d'identité mais la forme est identique.

#### Authentik

1. *Applications → Providers* → *Create* → **OAuth2/OpenID Provider**.
2. *Redirect URIs* : `https://liberty.example.com/auth/oidc/callback`.
3. *Property mappings* : ajouter l'ensemble par défaut `openid email groups`.
4. Noter le **Client ID** + le **Client secret**.
5. *Applications → Applications* → *Create* → lier au provider ; choisir les groupes à exposer.

#### Keycloak

1. *Realm* → *Clients* → *Create* — Client ID `liberty`, protocole OpenID Connect.
2. *Valid redirect URIs* : `https://liberty.example.com/auth/oidc/callback`.
3. Onglet *Credentials* → noter le secret.
4. *Client scopes* → *liberty-dedicated* → *Add mapper* → **Group Membership** → nom du claim `groups`, omettre le préfixe `/`.

#### Azure AD / Entra

1. *App registrations* → *New registration*.
2. *Redirect URI* : `https://liberty.example.com/auth/oidc/callback` (Web).
3. *Certificates & secrets* → *New client secret* — noter la valeur.
4. *Token configuration* → *Add groups claim* → All groups ; émettre comme `groups` (pas les object IDs).

#### Okta

1. *Applications* → *Create App Integration* → OIDC, Web Application.
2. *Sign-in redirect URI* : `https://liberty.example.com/auth/oidc/callback`.
3. *Assignments* — choisir les groupes.
4. *Authorization servers → default → Claims* → ajouter un claim `groups`, type Groups.

### Étape 2 — configurer Liberty

**Paramètres → Framework → Authentification** :

| Champ | Valeur |
|---|---|
| **OIDC enabled** | ✓ |
| **Issuer URL** | L'issuer du fournisseur d'identité. Exemples : `https://auth.example.com/application/o/liberty/` *(Authentik, le slash final compte)* — `https://kc.example.com/realms/<realm>` *(Keycloak)* — `https://login.microsoftonline.com/<tenant>/v2.0` *(Azure)* — `https://<domain>.okta.com/oauth2/default` *(Okta)*. |
| **Client ID** | Depuis le fournisseur d'identité. |
| **Client secret** | 🔒 Depuis le fournisseur d'identité — coller en mode chiffré. |
| **Redirect URI** | `https://liberty.example.com/auth/oidc/callback` *(doit correspondre à ce qui est enregistré sur le fournisseur d'identité)*. |
| **Email claim** | `email` *(défaut)*. |
| **Groups claim** | `groups` *(défaut)*. |
| **Auto-provision** | ✓ *(crée un utilisateur Liberty à la première connexion SSO)*. |

Cliquez sur **▶ Tester la connexion** en bas du sous-formulaire OIDC. Un nouvel onglet s'ouvre, vous vous connectez sur le fournisseur d'identité, l'onglet renvoie « Test OIDC réussi » plus les claims résolus (email, groupes) pour que vous puissiez confirmer le mapping.

**Enregistrer et recharger**.

### Étape 3 — mapper les groupes du fournisseur d'identité aux rôles Liberty

Le framework mappe le claim `groups` 1:1 aux identifiants de rôles Liberty. Ouvrez **Paramètres → Rôles**, assurez-vous que chaque groupe du fournisseur d'identité qui vous intéresse a un rôle Liberty correspondant avec les bonnes permissions.

| Groupe IdP | Rôle Liberty | Permissions |
|---|---|---|
| `crm-sales` | `crm-sales` | `sql:customers:*`, `sql:deals:*`, `screen:crm:*`, `menu:crm:*` |
| `crm-managers` | `crm-managers` | `crm-sales` *(hérite)* + accès tableau de bord |
| `admins` | `admin` | `*` |

### Étape 4 — tester comme un vrai utilisateur

Déconnectez-vous d'`admin`. La page de connexion a maintenant un bouton **Sign in with SSO**. Cliquez dessus, authentifiez-vous sur le fournisseur d'identité, revenez au framework — vous avez les rôles que le fournisseur d'identité revendique pour vous, vous voyez ce que ces rôles vous laissent voir.

## Accès de secours

Le formulaire local utilisateur/mot de passe **reste disponible** aux côtés du bouton SSO. L'utilisateur `admin` peut toujours se connecter directement même quand le fournisseur d'identité est injoignable. Conservez au moins un admin local pour cette raison — ne le supprimez jamais.

## Déconnexion unique

Pour la propagation de fin de session vers le fournisseur d'identité, définissez **End-session endpoint** dans le sous-formulaire OIDC. Le framework redirige par là sur `POST /auth/logout`.

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Restreindre à un domaine d'email spécifique** | Le framework refuse la connexion si `email_claim` ne se termine pas par la valeur de `[auth.oidc] allowed_domains` (défini dans le sous-formulaire). Plusieurs domaines supportés en liste séparée par virgules. |
| **Empêcher l'auto-provisionnement** | Désactivez *Auto-provision*. Les utilisateurs doivent exister dans *Paramètres → Utilisateurs* avant de pouvoir se connecter. Le fournisseur d'identité fournit l'authentification ; vous contrôlez l'autorisation. |
| **Plusieurs fournisseurs d'identité** | Pas supporté dans un seul formulaire ; l'alternative typique est d'utiliser le fournisseur-de-fournisseurs (Authentik / Keycloak fédérant Azure + Google + …) et de pointer Liberty sur le broker. |
| **Un claim personnalisé au lieu d'`email`** | Définissez *Email claim* sur ce que le fournisseur d'identité expose (`preferred_username`, `upn`, etc.). |

## Pour aller plus loin

- [Authentification → OIDC](../auth/authentication.md#oidc) pour la référence complète des champs.
- [Rôles et permissions](../auth/roles-permissions.md) pour le mapping groupes-vers-rôles.
- [Tutoriel CRM → Étape 5](../tutorial-crm/05-auth.md) pour un exemple détaillé.
