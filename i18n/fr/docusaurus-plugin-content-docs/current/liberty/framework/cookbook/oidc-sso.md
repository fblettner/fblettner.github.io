---
title: Connexion OIDC
description: "Recette — permettre aux utilisateurs de se connecter avec le fournisseur d'identité de l'entreprise (Microsoft Entra ID, Keycloak, Okta, Auth0…) : déclarer l'application chez le fournisseur, renseigner Paramètres → App → OpenID Connect (SSO), puis attribuer leurs rôles aux nouveaux utilisateurs."
keywords: [Liberty Next, cookbook, OIDC, SSO, OpenID Connect, Entra ID, Azure AD, Keycloak, Okta, connexion, attribute_claims]
---

# Connexion OIDC

## Le besoin

Les utilisateurs doivent se connecter avec leur compte d'entreprise, sans mot de passe distinct.

## La démarche

Liberty Next accepte la connexion par tout fournisseur OpenID Connect. Le formulaire de connexion locale reste disponible ; un bouton **Se connecter avec OIDC** s'ajoute en dessous.

## La recette

### 1. Déclarer l'application chez le fournisseur

Chez le fournisseur (Entra ID, Keycloak, Okta…), créer une application web (client confidentiel) avec :

- l'**URI de redirection** `https://<hôte>/auth/oidc/callback` ;
- les scopes `openid email profile` ;
- un **secret client**.

Relever l'**identifiant client**, le **secret client** et l'**URL de découverte** (`…/.well-known/openid-configuration`).

### 2. Renseigner les paramètres

**Paramètres → App → OpenID Connect (SSO)** :

| Champ | Valeur |
|---|---|
| **Enabled** | Activé. |
| **Discovery URL** | Le `.well-known/openid-configuration` du fournisseur. |
| **Client ID**, **Client secret** | Tels que déclarés — le secret est chiffré à l'enregistrement. |
| **Scopes** | `openid email profile`. |
| **Username claim** | `preferred_username` par défaut ; `email` ou `upn` selon le fournisseur. |

Enregistrer : la modification s'applique sans redémarrage. Voir [Paramètres de l'application → OpenID Connect](../build/settings-app.md#section-4--openid-connect-sso).

### 3. Première connexion et rôles

Les utilisateurs apparaissent dans **Paramètres → Access → Users** à leur première connexion, actifs et **sans rôle** : l'application leur apparaît vide tant qu'aucun rôle ne leur est attribué. Usage courant : la personne se connecte une première fois, puis un administrateur lui attribue ses rôles. Voir [Utilisateurs](../build/secure/users.md).

### 4. Attributs issus de l'annuaire (facultatif)

Pour filtrer les lignes par société ou par service à partir de l'annuaire, associer des attributs utilisateur à des claims du jeton d'identité avec `attribute_claims`, dans `app.toml` :

```toml
[oidc]
attribute_claims = { company = "company", pole = "department" }
```

À chaque connexion, les attributs associés sont mis à jour depuis le jeton ; le [périmètre de données](../build/secure/roles-and-permissions.md#data-scope) d'un rôle qui utilise `#USER.company#` suit alors l'annuaire. Voir [Se connecter → Attributs fournis par le fournisseur](../build/secure/sign-in.md#attribute-claims).

## Vérifications

| Symptôme | Cause |
|---|---|
| Pas de bouton OIDC | **Enabled** est désactivé. |
| Le fournisseur refuse la redirection | L'URI de redirection déclarée chez le fournisseur n'est pas exactement `https://<hôte>/auth/oidc/callback`. |
| Connecté, mais application vide | Normal pour un nouvel utilisateur : lui attribuer des rôles. |
| Mauvais nom d'utilisateur | Changer **Username claim** pour le claim que renseigne le fournisseur. |

## Pour aller plus loin

- [Se connecter — local et OIDC](../build/secure/sign-in.md) — la connexion locale et OIDC en détail.
- [Rôles et permissions](../build/secure/roles-and-permissions.md) — ce que les nouveaux utilisateurs peuvent ouvrir.
