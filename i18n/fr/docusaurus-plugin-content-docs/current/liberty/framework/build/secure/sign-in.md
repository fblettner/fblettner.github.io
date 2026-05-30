---
title: Se connecter — local et OIDC
description: "Choisir le backend d'identité (TOML ou DB), configurer les utilisateurs locaux, activer en option l'OIDC sur n'importe quel fournisseur conforme (Keycloak, Azure AD, Auth0, Okta…). Ce que voit l'utilisateur à la connexion."
keywords: [Liberty Framework, connexion, authentification, OIDC, Keycloak, Azure AD, Auth0, Okta, utilisateurs locaux, auth.toml]
---

# Se connecter — local et OIDC

Un utilisateur se connecte à Liberty par l'un de ces deux chemins :

| Chemin | Quand |
|---|---|
| **Nom d'utilisateur + mot de passe local** | L'utilisateur saisit ses identifiants sur l'écran de connexion. Le framework les vérifie face à `auth.toml` (ou à la table `ly2_users`) et émet un JWT. |
| **OIDC** | L'utilisateur clique sur *Se connecter avec \<fournisseur>*, est redirigé vers l'IdP, s'y connecte, puis revient sur Liberty avec son identité. Le framework provisionne / met à jour l'utilisateur et émet un JWT. |

Les deux peuvent coexister — une seule installation propose les deux boutons sur l'écran de connexion, et chacun choisit celui qui s'applique.

---

## L'écran de connexion

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="si-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#si-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="500" y="60" fill="#e2e8f0" fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Se connecter à Liberty</text>

  <text x="300" y="100" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Nom d'utilisateur</text>
  <rect x="300" y="110" width="400" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="312" y="130" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">alice</text>

  <text x="300" y="158" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Mot de passe</text>
  <rect x="300" y="168" width="400" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="312" y="188" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">••••••••••</text>

  <rect x="300" y="216" width="400" height="36" rx="6" fill="#4a9eff"/>
  <text x="500" y="238" fill="#0b1220" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Se connecter</text>

  <line x1="300" y1="276" x2="430" y2="276" stroke="#334155"/>
  <text x="500" y="282" fill="#64748b" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">ou</text>
  <line x1="570" y1="276" x2="700" y2="276" stroke="#334155"/>

  <rect x="300" y="296" width="400" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="500" y="318" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">Se connecter avec Keycloak</text>
</svg>

Quand l'OIDC est configuré, un second bouton apparaît sous le formulaire local. Quand l'OIDC n'est pas configuré, seul le formulaire local s'affiche.

Pour les installations qui souhaitent **forcer l'OIDC** (aucun repli local), définir `[auth] disable_local_login = true` dans `app.toml` — le formulaire local se masque et seul le bouton OIDC subsiste.

---

## Étape 1 — Choisir le backend d'identité

Dans `app.toml` :

```toml
[auth]
backend = "toml"   # ou "db"
```

| Valeur | Stocke les utilisateurs dans | Quand |
|---|---|---|
| **`toml`** (par défaut) | `config/auth.toml` | Installations mono-instance, petites équipes. Les modifications arrivent atomiquement sur disque. |
| **`db`** | Le pool du framework (tables `ly2_users`, `ly2_roles`, `ly2_user_roles`). | Installations multi-instance qui ont besoin d'un catalogue d'utilisateurs partagé. |

Les deux backends se gèrent via la **même interface** — *Paramètres → Accès*. Le backend est un choix de déploiement ; l'interface s'en moque.

### Amorcer le premier utilisateur

Sur une installation neuve sans utilisateur, exécuter :

```bash
liberty-admin init-db --superuser <nom>
```

La commande demande un mot de passe et crée un superutilisateur. Se connecter une fois, puis utiliser *Paramètres → Accès → Utilisateurs* pour en ajouter d'autres (voir [Utilisateurs](./users.md)).

---

## Étape 2 — Configurer l'OIDC (optionnel)

L'OIDC se superpose au backend choisi. N'importe quel fournisseur conforme OIDC fonctionne — Liberty découvre les endpoints, les JWKS et les scopes pris en charge depuis le `.well-known/openid-configuration` du fournisseur.

| Fournisseur | Motif d'URL de découverte |
|---|---|
| **Keycloak** | `https://<host>/realms/<realm>/.well-known/openid-configuration` |
| **Azure AD** | `https://login.microsoftonline.com/<tenant>/v2.0/.well-known/openid-configuration` |
| **Auth0** | `https://<tenant>.auth0.com/.well-known/openid-configuration` |
| **Okta** | `https://<tenant>.okta.com/oauth2/default/.well-known/openid-configuration` |
| **Google** | `https://accounts.google.com/.well-known/openid-configuration` |

### Configuration

Dans `app.toml` :

```toml
[oidc]
enabled         = true
discovery_url   = "https://keycloak.corp.local/realms/liberty/.well-known/openid-configuration"
client_id       = "liberty-app"
client_secret   = "${OIDC_CLIENT_SECRET}"   # variable d'environnement — jamais de secret en clair
scopes          = "openid email profile"
username_claim  = "preferred_username"      # quel claim devient le nom d'utilisateur Liberty
email_claim     = "email"
name_claim      = "name"
redirect_url    = ""                        # vide = auto-déduit https://<host>/auth/oidc/callback
frontend_redirect = ""                      # vide = flux standard côté serveur
```

| Champ | Requis | Notes |
|---|---|---|
| `enabled` | oui | Active / désactive l'OIDC. Désactivé, le bouton OIDC disparaît de l'écran de connexion. |
| `discovery_url` | oui | L'URL `.well-known` du fournisseur. Liberty la récupère une fois au démarrage et met le résultat en cache. |
| `client_id` | oui | L'identifiant client OAuth2 enregistré auprès du fournisseur. |
| `client_secret` | oui | Lu depuis une variable d'environnement (`${OIDC_CLIENT_SECRET}`). Jamais en clair. |
| `scopes` | oui | Au minimum `openid` ; ajouter `email` / `profile` pour récupérer ces claims. |
| `username_claim` | non (défaut `preferred_username`) | Quel claim devient le nom d'utilisateur Liberty. Repli sur `email`, puis sur `sub` en cas d'absence. |
| `email_claim` | non | Quel claim devient l'adresse de courriel. |
| `name_claim` | non | Quel claim devient le nom complet. |
| `redirect_url` | non | À renseigner uniquement si le framework est derrière un reverse proxy qui réécrit l'hôte. |
| `frontend_redirect` | non | À définir pour les flux SPA qui gèrent les jetons dans le fragment d'URL. Le flux standard côté serveur le laisse vide. |

### Enregistrer l'URL de redirection auprès du fournisseur

L'URL de redirection attendue par Liberty est :

```
https://<your-framework-host>/auth/oidc/callback
```

L'ajouter dans les *Redirect URIs* du client OAuth2 dans la console du fournisseur. Sans cela, le fournisseur rejette le retour avec `redirect_uri_mismatch`.

---

## Étape 3 — Ce qui se passe à la connexion OIDC

1. L'utilisateur clique sur **Se connecter avec \<fournisseur>** sur l'écran de connexion.
2. Liberty redirige vers le endpoint d'autorisation du fournisseur (`/auth/oidc/login`).
3. L'utilisateur se connecte chez le fournisseur — MFA, réinitialisation de mot de passe, tous les flux propres à l'IdP compris.
4. Le fournisseur renvoie sur `https://<host>/auth/oidc/callback?code=…&state=…`.
5. Liberty échange le code contre un ID token, valide la signature via JWKS, extrait les claims.
6. Liberty **provisionne** ou **met à jour** l'utilisateur local :
   - Première connexion : une nouvelle ligne utilisateur est créée avec `provider = "oidc"`, `provider_subject = <sub>`, `username = <username_claim>`, `email`, `full_name` issus des claims. `is_active = true`, **aucun rôle**.
   - Connexions suivantes : les champs courriel + nom complet sont rafraîchis depuis les derniers claims ; les rôles restent tels que configurés dans Liberty.
7. Liberty émet sa propre paire JWT (accès + rafraîchissement) et l'utilisateur est connecté.

Les jetons du fournisseur **ne sont pas propagés** — Liberty émet de nouveaux jetons avec sa propre clé de signature. La session du fournisseur se termine ; celle de Liberty commence.

---

## Les utilisateurs OIDC dans la page Accès

Les utilisateurs OIDC **apparaissent dans *Paramètres → Accès → Utilisateurs* uniquement après leur première connexion** — Liberty ne les pré-crée pas. Le motif d'onboarding habituel est donc :

1. La nouvelle recrue se connecte via OIDC. Elle arrive sans rôle → elle voit une application vide.
2. L'opérateur ouvre *Paramètres → Accès → Utilisateurs*, trouve le nouvel utilisateur et lui attribue les bons rôles.
3. L'utilisateur rafraîchit (ou se reconnecte) et dispose alors de ses accès.

Pour les installations comptant beaucoup d'utilisateurs OIDC, un script d'automatisation peut les pré-créer via `POST /admin/access/users` pour que les rôles soient prêts à la première connexion — mais le flux standard suppose une attribution manuelle des rôles.

Voir [Utilisateurs](./users.md) pour l'interface d'attribution.

---

## Désactiver la connexion locale

Pour les installations 100 % OIDC qui veulent forcer chaque utilisateur à passer par l'IdP :

```toml
[auth]
disable_local_login = true
```

L'écran de connexion masque le formulaire local ; seul le bouton OIDC s'affiche. **Ne pas désactiver la connexion locale tant que l'OIDC n'a pas été vérifié** — se retrouver verrouillé hors du seul chemin de connexion est un exercice de récupération frustrant.

En cas de secours d'urgence avec `disable_local_login = true`, éditer directement `app.toml` sur disque pour repasser le drapeau, redémarrer le framework, se connecter en local, puis réactiver.

---

## Jetons — la paire JWT

À chaque connexion réussie (locale ou OIDC), Liberty émet deux jetons :

| Jeton | Durée de vie par défaut | Ce qu'il transporte |
|---|---|---|
| **Jeton d'accès** | 1 heure | Le `username`, la liste des rôles et l'instantané des permissions. Envoyé à chaque appel API en `Authorization: Bearer <token>`. |
| **Jeton de rafraîchissement** | 14 jours | Sert à `POST /auth/refresh` pour émettre un nouveau jeton d'accès sans ressaisir les identifiants. |

Les durées de vie se configurent :

```toml
[auth]
access_token_ttl_seconds  = 3600     # défaut 1 h
refresh_token_ttl_seconds = 1209600  # défaut 14 jours
```

Des TTL d'accès courts (par exemple 15 minutes) propagent plus vite les changements de permissions mais augmentent la charge de rafraîchissement. L'équilibre par défaut d'1 heure convient à la plupart des installations.

---

## Se déconnecter

La déconnexion est **uniquement côté client** — le jeton d'accès est retiré du stockage local et l'utilisateur est redirigé vers l'écran de connexion. Le jeton en lui-même reste valide jusqu'à expiration de son TTL (il ne peut simplement plus être présenté sans le stockage).

Pour les installations OIDC qui souhaitent une **déconnexion côté fournisseur** (terminer aussi la session de l'IdP), pointer le *Post-logout redirect URI* du fournisseur sur Liberty et configurer son endpoint de fin de session. Liberty n'initie pas lui-même la déconnexion du fournisseur.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `client_secret` en clair dans `app.toml`. | Le secret fuit dans le contrôle de version. | Utiliser `${OIDC_CLIENT_SECRET}` et définir la variable d'environnement. |
| `redirect_url` ne correspond pas à ce qui est enregistré chez le fournisseur. | La connexion renvoie `redirect_uri_mismatch`. | Enregistrer l'URL exacte envoyée par Liberty — schéma et port compris. |
| `discovery_url` renvoie 404 ou du HTML. | La connexion échoue au démarrage avec une erreur de config. | Vérifier l'URL — la plupart des fournisseurs ajoutent `/.well-known/openid-configuration` à une URL de base ; Liberty attend le chemin complet. |
| `username_claim` absent du jeton. | La première connexion échoue avec « no username ». | Soit changer le claim pour un que l'IdP émet réellement (`email` convient à la plupart), soit configurer l'IdP pour qu'il émette le claim attendu. |
| Un utilisateur OIDC se connecte mais voit une application vide. | Comportement attendu — les utilisateurs OIDC arrivent sans rôle. | L'opérateur attribue les rôles via *Paramètres → Accès → Utilisateurs*. |
| Oubli d'activer l'OIDC après l'avoir configuré. | Le bouton OIDC n'apparaît pas. | `enabled = true`. |
| `disable_local_login = true` sans configuration OIDC fonctionnelle. | Plus personne ne peut se connecter. | Désactiver le drapeau directement dans `app.toml` sur disque, redémarrer, réparer l'OIDC, puis réactiver. |

---

## Suite

- [Utilisateurs](./users.md) — ajouter des utilisateurs locaux, gérer les utilisateurs OIDC après la première connexion, attribuer des rôles.
- [Rôles et permissions](./roles-and-permissions.md) — ce qu'il faut attribuer une fois l'utilisateur connecté.
- [Concepts → Authentification](../../auth/authentication.md) — la référence détaillée.
