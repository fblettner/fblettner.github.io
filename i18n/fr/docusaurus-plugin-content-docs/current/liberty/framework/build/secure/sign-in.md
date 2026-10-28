---
title: Se connecter — local et OIDC
description: "Utilisateurs locaux, connexion OIDC facultative sur n'importe quel fournisseur conforme (Keycloak, Azure AD, Auth0, Okta…). Ce que voit l'utilisateur à la connexion."
keywords: [Liberty Framework, connexion, authentification, OIDC, Keycloak, Azure AD, Auth0, Okta, utilisateurs locaux]
---

# Se connecter — local et OIDC

Un utilisateur se connecte à Liberty par l'un de ces deux chemins :

| Chemin | Quand |
|---|---|
| **Nom d'utilisateur + mot de passe local** | L'utilisateur saisit ses identifiants sur l'écran de connexion. Le framework les vérifie auprès des utilisateurs enregistrés et émet un JWT. |
| **OIDC** | L'utilisateur clique sur *Se connecter avec OIDC*, est redirigé vers l'IdP, s'y connecte, puis revient sur Liberty avec son identité. Le framework provisionne / met à jour l'utilisateur et émet un JWT. |

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


---

## Étape 1 — Utilisateurs locaux

Les utilisateurs locaux et les rôles se gèrent dans **Liberty Next → Administrer → Accès**. L'installation détermine leur lieu de stockage (le dossier de configuration du serveur, ou la base du framework quand plusieurs instances partagent les mêmes utilisateurs) ; les écrans sont identiques dans les deux cas.

### Amorcer le premier utilisateur

Sur une installation neuve sans utilisateur, exécuter :

```bash
liberty-admin init-db
```

La commande crée le superutilisateur `admin` et affiche une seule fois un mot de passe aléatoire (`--admin-username`, `--password-env` pour les choisir). L'installation Docker la lance d'elle-même. Se connecter une fois, puis utiliser *Liberty Next → Administrer → Accès → Utilisateurs* pour en ajouter d'autres (voir [Utilisateurs](./users.md)).

---

## Étape 2 — Configurer l'OIDC (optionnel) \{#oidc\}

L'OIDC se superpose aux utilisateurs locaux. N'importe quel fournisseur conforme OIDC fonctionne — Liberty découvre les endpoints, les JWKS et les scopes pris en charge depuis le `.well-known/openid-configuration` du fournisseur.

| Fournisseur | Motif d'URL de découverte |
|---|---|
| **Keycloak** | `https://<host>/realms/<realm>/.well-known/openid-configuration` |
| **Azure AD** | `https://login.microsoftonline.com/<tenant>/v2.0/.well-known/openid-configuration` |
| **Auth0** | `https://<tenant>.auth0.com/.well-known/openid-configuration` |
| **Okta** | `https://<tenant>.okta.com/oauth2/default/.well-known/openid-configuration` |
| **Google** | `https://accounts.google.com/.well-known/openid-configuration` |

### Configuration

L'OIDC se règle dans **Liberty Next → Administrer → App → OpenID Connect (SSO)**. Le secret client est chiffré à l'enregistrement, dans une saisie masquée avec un œil pour l'afficher. L'enregistrement s'applique aussitôt — **sans redémarrage** ; la connexion suivante en tient compte.

| Champ | Requis | Remarques |
|---|---|---|
| **Enabled** | oui | Affiche ou masque le bouton **Se connecter avec OIDC**. |
| **Discovery URL** | oui | L'URL `.well-known/openid-configuration` du fournisseur. |
| **Client ID** | oui | L'identifiant client déclaré chez le fournisseur. |
| **Client secret** | oui | Chiffré à l'enregistrement. |
| **Scopes** | oui | Au moins `openid` ; `email` et `profile` apportent ces claims (`openid email profile` par défaut). |
| **Username claim** | non | Le claim qui devient le nom d'utilisateur Liberty (`preferred_username` par défaut ; puis `email`, puis `sub` s'il manque). |
| **Email claim**, **Name claim** | non | Les claims qui renseignent l'adresse e-mail et le nom complet. |
| **Redirect URL override (proxy)** | non | Uniquement derrière un proxy inverse qui réécrit l'hôte. |
| **Frontend redirect** | non | Uniquement pour une interface qui gère elle-même les jetons. |

Voir [Paramètres de l'application → OpenID Connect](../settings-app.md#section-4--openid-connect-sso).

### Enregistrer l'URL de redirection auprès du fournisseur

L'URL de redirection attendue par Liberty est :

```
https://<your-framework-host>/auth/oidc/callback
```

L'ajouter dans les *Redirect URIs* du client OAuth2 dans la console du fournisseur. Sans cela, le fournisseur rejette le retour avec `redirect_uri_mismatch`.

---

## Étape 3 — Ce qui se passe à la connexion OIDC

1. L'utilisateur clique sur **Se connecter avec OIDC** sur l'écran de connexion.
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

Les utilisateurs OIDC **apparaissent dans *Liberty Next → Administrer → Accès → Utilisateurs* uniquement après leur première connexion** — Liberty ne les pré-crée pas. Le motif d'onboarding habituel est donc :

1. La nouvelle recrue se connecte via OIDC. Elle arrive sans rôle → elle voit une application vide.
2. L'opérateur ouvre *Liberty Next → Administrer → Accès → Utilisateurs*, trouve le nouvel utilisateur et lui attribue les bons rôles.
3. L'utilisateur rafraîchit (ou se reconnecte) et dispose alors de ses accès.

Pour les installations comptant beaucoup d'utilisateurs OIDC, un script d'automatisation peut les pré-créer via `POST /admin/access/users` pour que les rôles soient prêts à la première connexion — mais le flux standard suppose une attribution manuelle des rôles.

Voir [Utilisateurs](./users.md) pour l'interface d'attribution.

Un utilisateur connecté par OIDC n'a pas de mot de passe local : sa fenêtre **Profil** n'a pas d'onglet Sécurité.

---

## Jetons — la paire JWT

À chaque connexion réussie (locale ou OIDC), Liberty émet deux jetons :

| Jeton | Durée de vie par défaut | Ce qu'il transporte |
|---|---|---|
| **Jeton d'accès** | 1 heure | Le `username`, les rôles, les permissions, les attributs et le périmètre de données calculé. Envoyé à chaque appel API en `Authorization: Bearer <token>`. |
| **Jeton de rafraîchissement** | 14 jours | Sert à `POST /auth/refresh` pour émettre un nouveau jeton d'accès sans ressaisir les identifiants. |

**Les jetons de rafraîchissement sont à usage unique.** Chaque `POST /auth/refresh` renvoie un nouveau jeton de rafraîchissement et consomme celui présenté. Le même jeton présenté de nouveau plus de 60 secondes après (deux onglets en concurrence) est refusé. Un client d'API doit conserver le jeton de rafraîchissement de chaque réponse. Le renouvellement relit aussi l'utilisateur : un utilisateur désactivé est refusé, et les changements de rôles, d'attributs et de périmètre s'appliquent dès ce moment.

### Rafraîchissement silencieux

Le rafraîchissement est **silencieux** — l'opérateur ne voit jamais de message « session expirée » sur une session active dans le navigateur :

- Un **minuteur proactif** déclenche le rafraîchissement peu avant l'expiration du jeton d'accès, pour que l'appel API suivant embarque déjà un jeton neuf.
- Tout appel API qui revient en **401** déclenche un rafraîchissement suivi d'un nouvel essai : Liberty demande au serveur un nouveau jeton d'accès à partir du jeton de rafraîchissement, rejoue la requête initiale et renvoie le résultat à l'appelant. Ce 401 unique est transparent pour le code appelant.
- Si le rafraîchissement lui-même est refusé (jeton de rafraîchissement expiré ou révoqué), l'écran de connexion reprend la main — c'est le seul chemin qui redemande une authentification.

Les deux mécanismes se complètent. Le minuteur proactif couvre le cas courant d'une session assez calme pour qu'aucune requête ne tombe sur le jeton en fin de vie ; le rejeu sur 401 rattrape le cas limite où le minuteur a manqué (onglet en pause, appareil qui sort de veille). Ensemble, ils font traverser à une session active la fin du TTL du jeton d'accès sans coupure visible.

---

## Trop d'échecs de connexion \{#throttle\}

Après 10 échecs de connexion pour un même nom d'utilisateur en 5 minutes, `/auth/login` répond *429 — Too many failed logins — try again in N s* jusqu'à la fin de la fenêtre. Depuis une même adresse cliente, la limite est cinq fois plus haute. Une connexion réussie remet le compteur de cet utilisateur à zéro.

Les compteurs sont tenus en mémoire par le serveur : un redémarrage les remet à zéro.

---

## Se déconnecter

La déconnexion est **uniquement côté client** — le jeton d'accès est retiré du stockage local et l'utilisateur est redirigé vers l'écran de connexion. Le jeton en lui-même reste valide jusqu'à expiration de son TTL (il ne peut simplement plus être présenté sans le stockage).

Pour les installations OIDC qui souhaitent une **déconnexion côté fournisseur** (terminer aussi la session de l'IdP), pointer le *Post-logout redirect URI* du fournisseur sur Liberty et configurer son endpoint de fin de session. Liberty n'initie pas lui-même la déconnexion du fournisseur.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| L'URL de redirection déclarée chez le fournisseur diffère de celle de Liberty. | La connexion renvoie `redirect_uri_mismatch`. | Enregistrer l'URL exacte envoyée par Liberty — schéma et port compris. |
| La **Discovery URL** renvoie 404 ou du HTML. | La connexion échoue au démarrage avec une erreur de config. | Vérifier l'URL — la plupart des fournisseurs ajoutent `/.well-known/openid-configuration` à une URL de base ; Liberty attend le chemin complet. |
| Le **Username claim** est absent du jeton. | La première connexion échoue avec « no username ». | Soit changer le claim pour un que l'IdP émet réellement (`email` convient à la plupart), soit configurer l'IdP pour qu'il émette le claim attendu. |
| Un utilisateur OIDC se connecte mais voit une application vide. | Comportement attendu — les utilisateurs OIDC arrivent sans rôle. | L'opérateur attribue les rôles via *Liberty Next → Administrer → Accès → Utilisateurs*. |
| OIDC configuré mais non activé. | Le bouton OIDC n'apparaît pas. | Cocher **Enabled**. |

---

## Suite

- [Utilisateurs](./users.md) — ajouter des utilisateurs locaux, gérer les utilisateurs OIDC après la première connexion, attribuer des rôles.
- [Rôles et permissions](./roles-and-permissions.md) — ce qu'il faut attribuer une fois l'utilisateur connecté.
- [Concepts → Authentification](./sign-in.md) — la référence détaillée.
