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

Les deux peuvent coexister — l'écran de connexion porte les deux boutons, et chacun choisit celui qui le concerne.

---

## L'écran de connexion

<svg viewBox="0 0 1200 344" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="login-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="login-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="login-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="login-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="440" y="20" width="320" height="304" rx="14" fill="url(#login-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="464" y="58" fill="#4a9eff" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="464" y="76" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">framework low-code</text>
  <text x="464" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="464" y="108" width="272" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="122.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="464" y="152" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE</text>
  <rect x="464" y="158" width="272" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="173.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">••••••••••</text>
  <rect x="464" y="194" width="272" height="28" rx="5" fill="url(#login-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="600.0" y="211.5" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Se connecter</text>
  <text x="600.0" y="238" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Mot de passe oublié ?</text>
  <rect x="464" y="252" width="272" height="28" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600.0" y="269.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Se connecter avec OIDC</text>
  <text x="464" y="294" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">OIDC doit être activé dans config/app.toml ; sinon</text>
  <text x="464" y="306" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">ce bouton renvoie une 404.</text>
  <rect x="160" y="40" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="170" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le nom de l'application</text>
  <text x="170" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Nom de l'application, sinon Liberty Next</text>
  <line x1="360" y1="57.0" x2="440" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
  <rect x="160" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="170" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compte local</text>
  <text x="170" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiant et mot de passe</text>
  <line x1="360" y1="177.0" x2="464" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
  <rect x="840" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="850" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mot de passe oublié ?</text>
  <text x="850" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seulement si l'e-mail est configuré</text>
  <line x1="840" y1="187.0" x2="660.0" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
  <rect x="840" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="850" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Authentification unique</text>
  <text x="850" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers le fournisseur OIDC</text>
  <line x1="840" y1="277.0" x2="736" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#login-arrow)"/>
</svg>

L'écran affiche le nom de l'application (**Nom de l'application**, sinon *Liberty Next*), le formulaire local, puis **Se connecter avec OIDC** et une ligne rappelant que l'OIDC doit être activé. Le bouton OIDC est toujours présent : tant que l'OIDC n'est pas activé, il mène à une page d'erreur (404). **Mot de passe oublié ?** apparaît sous **Se connecter** seulement si les notifications par e-mail sont configurées — voir [Utilisateurs → Mot de passe oublié](./users.md#forgot).


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
| **Activé** | oui | Fait mener **Se connecter avec OIDC** au fournisseur ; désactivé, le bouton renvoie une 404. |
| **URL de découverte** | oui | L'URL `.well-known/openid-configuration` du fournisseur. |
| **ID client** | oui | L'identifiant client déclaré chez le fournisseur. |
| **Secret client** | oui | Chiffré à l'enregistrement. |
| **Scopes** | oui | Au moins `openid` ; `email` et `profile` apportent ces claims (`openid email profile` par défaut). |
| **Revendication identifiant** | non | Le claim qui devient le nom d'utilisateur Liberty (`preferred_username` par défaut ; puis `email`, puis `sub` s'il manque). |
| **Revendication e-mail**, **Revendication nom** | non | Les claims qui renseignent l'adresse e-mail et le nom complet. |
| **URL de redirection (proxy)** | non | Uniquement derrière un proxy inverse qui réécrit l'hôte. |
| **Redirection frontend** | non | Uniquement pour une interface qui gère elle-même les jetons. |

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
| L'**URL de découverte** renvoie 404 ou du HTML. | La connexion échoue au démarrage avec une erreur de config. | Vérifier l'URL — la plupart des fournisseurs ajoutent `/.well-known/openid-configuration` à une URL de base ; Liberty attend le chemin complet. |
| La **Revendication identifiant** est absente du jeton. | La première connexion échoue avec « no username ». | Soit changer le claim pour un que l'IdP émet réellement (`email` convient à la plupart), soit configurer l'IdP pour qu'il émette le claim attendu. |
| Un utilisateur OIDC se connecte mais voit une application vide. | Comportement attendu — les utilisateurs OIDC arrivent sans rôle. | L'opérateur attribue les rôles via *Liberty Next → Administrer → Accès → Utilisateurs*. |
| OIDC configuré mais non activé. | **Se connecter avec OIDC** mène à une page 404. | Cocher **Activé**. |

---

## Suite

- [Utilisateurs](./users.md) — ajouter des utilisateurs locaux, gérer les utilisateurs OIDC après la première connexion, attribuer des rôles.
- [Rôles et permissions](./roles-and-permissions.md) — ce qu'il faut attribuer une fois l'utilisateur connecté.
- [Concepts → Authentification](./sign-in.md) — la référence détaillée.
