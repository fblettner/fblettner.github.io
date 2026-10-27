---
title: Paramètres de l'application
description: "Paramètres → App dans Liberty Next : les six sections — App (nom, adresse, journaux, langue, valeurs par défaut de l'interface, rechargement à chaud, mode thick d'Oracle), License, AI Assistant, Notifications (email), OpenID Connect (SSO), PDF branding — le rôle de chaque champ, les secrets chiffrés, et ce qui demande un redémarrage."
keywords: [Liberty Next, Paramètres App, licence, assistant IA, notifications, SMTP, OpenID Connect, SSO, habillage PDF, période par défaut, taille de page, Oracle thick]
---

# Paramètres de l'application

**Paramètres → App** regroupe les réglages de l'application. Chaque section se replie ; son en-tête affiche un résumé (*configured*, *not set — restricted mode*, *no API key*, *disabled*…). **Enregistrer** valide et applique toute la page d'un coup. L'éditeur est en anglais.

Les champs secrets — clé de licence, clé d'API Anthropic, mot de passe SMTP, secret client OIDC — sont des saisies masquées avec un œil ; ils sont chiffrés avec la clé maître à l'enregistrement ([Chiffrement](../configuration/encryption-secrets.md)).

---

## App \{#app\}

| Champ | Remarques |
|---|---|
| **App name** | Le nom de l'application. |
| **Bind host**, **Port** | Adresse et port d'écoute. **Redémarrage nécessaire.** |
| **Log level** | `debug`, `info`, `warning`, `error`, `critical`. **Redémarrage nécessaire.** |
| **Default language** | Langue des libellés quand une requête n'en indique pas. |
| **Default period (dashboards)** | Le préréglage d'ouverture d'un tableau de bord qui n'en indique pas — voir [Tableaux de bord](../dashboards.md#period). |
| **Grid page size** | La taille de page initiale des grilles (10 à 10 000, 50 par défaut). La taille propre d'une vue enregistrée l'emporte. |
| **Dashboard cache (seconds, 0 = none)** | Durée de réutilisation des résultats des widgets à la réouverture d'un tableau de bord (60 par défaut). |
| **Hot-reload config TOML files on change** | Appliquer les fichiers de configuration dès qu'ils changent — voir [Rechargement à chaud](../configuration/hot-reload.md). |
| **Oracle thick mode (…)** | L'Oracle Instant Client pour tous les pools Oracle — nécessaire pour le chiffrement réseau natif et les LOB au travers d'un DB link. Pris en compte après un redémarrage. Voir [Connecteurs](../connectors.md#oracle-thick). |

Quand un changement enregistré demande un redémarrage, la page l'indique : *Saved. Restart the server to apply the new settings.*

---

## License \{#license\}

**License key** : coller la clé fournie par Nomana-IT. Les connecteurs sous licence se chargent aussitôt, sans redémarrage. Voir [Clé de licence](./secure/license-key.md).

---

## AI Assistant \{#ai\}

| Champ | Remarques |
|---|---|
| **Enabled** | L'assistant répond ; les utilisateurs ont besoin de la permission `ai:chat`. |
| **Anthropic API key** | Sans elle, l'assistant indique qu'il n'est pas configuré. |
| **Model**, **Effort**, **Max tokens**, **Adaptive thinking** | Le modèle, la profondeur de raisonnement et la longueur des réponses. |
| **Max tool iterations** | Nombre maximal d'appels d'outils par réponse (8 par défaut). |
| **Request timeout (s)** | 120 par défaut. |
| **System prompt** | Vide : les consignes intégrées. |
| **Connector tools** | L'assistant peut lister les connecteurs et lancer leurs requêtes **de lecture**. |
| **API tool** | L'assistant peut appeler des endpoints d'API — désactivé par défaut, un endpoint pouvant modifier des données. |
| **Scaffold tools** | L'assistant peut proposer requêtes, entrées du dictionnaire, écrans et entrées de menu ; l'utilisateur applique la proposition. |
| **Allowed connectors** | Les connecteurs utilisables par l'assistant ; vide signifie tous. |
| **Allowed domains**, **Max fetches per turn** | Les pages web que l'assistant peut lire ; sans domaine, aucun accès au web. |

Voir [Assistant IA](../ai-assistant.md).

---

## Notifications (email) \{#notifications\}

**Notifications enabled**, puis le **Server** (SMTP host, Port, Encryption — STARTTLS, TLS implicite ou aucun —, Timeout), le **Account** (User, Password) et **Sending** (From address). Voir [Notifications](../../nomaflow/notifications.md#smtp).

---

## OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

| Champ | Remarques |
|---|---|
| **Enabled** | Affiche le bouton OIDC sur la page de connexion. |
| **Discovery URL** | Le `.well-known/openid-configuration` du fournisseur. |
| **Client ID**, **Client secret**, **Scopes** | Tels qu'enregistrés chez le fournisseur (`openid email profile` par défaut). |
| **Username claim**, **Email claim**, **Name claim** | Les claims de l'ID token qui renseignent l'utilisateur (`preferred_username`, `email`, `name`). |
| **Redirect URL override (proxy)**, **Frontend redirect** | Seulement derrière un proxy qui réécrit l'hôte, ou pour un front qui gère lui-même les jetons. |

Déclarer `https://<hôte>/auth/oidc/callback` comme URI de redirection chez le fournisseur.toml`. Voir [Se connecter](./secure/sign-in.md#oidc).

---

## PDF branding \{#branding\}

Les réglages de couverture et de page des rapports PDF : auteur, couleurs principales, textes de couverture, pied de page. Les champs vides gardent les valeurs par défaut du framework.

---

## Ailleurs que sur cette page \{#elsewhere\}

| Réglage | Où |
|---|---|
| Pools et leurs mots de passe | Paramètres → Pools. |
| Utilisateurs et rôles | Paramètres → Access. |
| La clé maître et le secret JWT | L'environnement — voir [Variables d'environnement](../configuration/environment-variables.md). |
