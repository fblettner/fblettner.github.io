---
title: Authentification
description: "Surface de connexion pour Liberty Framework — utilisateurs locaux (TOML ou base de données), OpenID Connect (Authentik, Keycloak, Azure AD, Okta), cycle de vie des JWT, configuré depuis Paramètres → Framework → Authentification. Mise en place complète pour chaque backend, mapping des claims, durée de session."
keywords: [Liberty Framework, authentication, login, JWT, refresh token, OIDC, OpenID Connect, Keycloak, Authentik, Azure AD, Okta, users, settings]
---

# Authentification

Le framework prend en charge deux façons pour un utilisateur de se connecter : un **identifiant + mot de passe locaux** (avec le magasin d'utilisateurs sur disque ou en base de données) et **OpenID Connect** (tout IdP conforme aux standards). Les deux produisent le même artefact — un **jeton d'accès JWT** à courte durée + un **jeton de rafraîchissement** à plus longue durée — que le frontend conserve en mémoire et que le backend vérifie à chaque appel API.

Le choix entre local et OIDC, plus les durées de vie des JWT et le mapping des claims OIDC, sont définis dans **Paramètres → Framework → Authentification**. Les deux peuvent coexister : OIDC activé pour les utilisateurs SSO, le backend local conservé pour une administration de secours.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>UTILISATEURS LOCAUX</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}><b>Paramètres → Utilisateurs</b><br/>Deux variantes de stockage :<br/>• Fichier TOML sur l'hôte<br/>• Tables de base de données (ly2_users)<br/>Empreintes de mot de passe argon2id.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '8px'}}>SSO OIDC</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Authentik · Keycloak · Azure AD · Okta · Google.<br/>Configuré sous Authentification → OIDC.<br/>Mappe le claim des groupes de l'IdP vers les rôles Liberty 1:1.</div>
  </div>
  <div style={{border: '1px solid rgba(34,197,94,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#22c55e', marginBottom: '8px'}}>SESSIONS</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Jeton d'accès JWT HS256 (15 min par défaut).<br/>Jeton de rafraîchissement renouvelé à l'usage (7 jours par défaut).<br/>Durées modifiables par installation.</div>
  </div>
</div>

---

## Choisir un backend local

Dans **Paramètres → Framework → Authentification**, la liste déroulante **Backend** propose deux valeurs :

| Backend | Stockage | Avantage | Inconvénient |
|---|---|---|---|
| **Local — TOML** *(défaut)* | `config/auth.toml` sur l'hôte. | Zéro infrastructure — fonctionne sans base externe. | Ne survit pas à une reconstruction de conteneur quand le fichier n'est pas monté ; ne partage pas l'état entre les répliques. Inadapté au-delà d'environ 100 utilisateurs. |
| **Local — Base de données** | Tables `ly2_users` / `ly2_roles` / `ly2_permissions` sur le pool par défaut. | Survit aux reconstructions de conteneur quand la base est externe. Partagé entre les répliques — la connexion sur un nœud fonctionne sur tous les nœuds. Passe à l'échelle de milliers d'utilisateurs. | Demande que le pool par défaut soit joignable au démarrage. Un élément de plus à sauvegarder. |

Au premier lancement du framework sur une installation neuve, `./start.sh init-db` initialise le backend configuré et amorce un utilisateur `admin` (le mot de passe est imprimé une seule fois sur stdout).

Changer de backend est une modification **qui demande un redémarrage** — le formulaire signale le champ par un badge *Redémarrage requis*.

---

## Gérer les utilisateurs locaux — Paramètres → Utilisateurs

L'onglet **Utilisateurs** est l'éditeur de référence pour le backend local (les deux variantes). La page liste chaque utilisateur avec ses rôles, son indicateur actif et sa dernière connexion :

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Utilisateurs</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Recharger</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouvel utilisateur</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Identifiant</div><div>Nom affiché</div><div>Rôles</div><div>Actif</div><div>Dernière connexion</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>admin</div><div>Administrateur</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>admin</span></div><div>●</div><div>09:42</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>alice</div><div>Alice Dupont</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>editor</span> <span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>viewer</span></div><div>●</div><div>2 jours</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1.4fr 1fr 90px 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>bob</div><div>Bob Martin</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>viewer</span></div><div style={{opacity: 0.45}}>○</div><div>30 jours</div>
  </div>
</div>

| Action | Comment |
|---|---|
| **Créer un utilisateur** | *+ Nouvel utilisateur* — identifiant, nom affiché, rôles (sélection multiple parmi les rôles configurés), mot de passe. |
| **Réinitialiser le mot de passe** | Cliquer un utilisateur, *Réinitialiser le mot de passe* — demande le nouveau mot de passe (deux fois). |
| **Ajouter / retirer des rôles** | Cliquer un utilisateur, modifier la sélection multiple *Rôles*. |
| **Désactiver** | Cliquer un utilisateur, basculer *Actif* sur off. Désactive l'utilisateur en douceur (préserve l'historique). |
| **Révoquer les sessions** | Cliquer un utilisateur, *Révoquer toutes les sessions* — invalide tous les jetons d'accès + de rafraîchissement actifs. |

Les mêmes opérations sont disponibles via la [CLI](../cli-reference.md#liberty-admin) pour le scripting shell.

### Politique de mot de passe

Les mots de passe sont hachés avec **argon2id**. Le réglage Argon2 est modifiable dans *Paramètres → Framework → Authentification* — les valeurs par défaut sont `Time cost = 2`, `Memory cost = 64 MiB`, `Parallelism = 1`, calibrées pour un coût serveur d'environ 50 ms sur un CPU moderne. Augmenter *Memory cost* sur les installations avec des modèles de menace plus stricts.

Un validateur enfichable rejette les mots de passe faibles. Le validateur livré impose :

- 10 caractères ou plus.
- Au moins un chiffre, une majuscule, une minuscule.
- Différent de l'identifiant.

Pour le remplacer, définir *Validateur de mot de passe* dans *Paramètres → Framework → Authentification* sur un callable de votre dépôt d'apps (par ex. `myapp.security:validate`). Voir [Applications et Plugins → Plugins](../apps/plugins.md) pour la signature de la fonction.

---

## SSO OIDC \{#oidc\}

Dans **Paramètres → Framework → Authentification**, activer la bascule **OIDC activé**. Le sous-formulaire OIDC apparaît :

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '0 0 10px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c084fc'}}>OIDC</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Activé</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● Actif</span></div>
    <div style={{opacity: 0.75}}>URL de l'émetteur</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>https://auth.example.com/application/o/liberty/</span></div>
    <div style={{opacity: 0.75}}>Client ID</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>liberty</span></div>
    <div style={{opacity: 0.75}}>Secret du client</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>🔒 ENC:…   <span style={{marginLeft: '8px', opacity: 0.6, fontStyle: 'italic'}}>Voir</span></span></div>
    <div style={{opacity: 0.75}}>URI de redirection</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>https://liberty.example.com/auth/oidc/callback</span></div>
    <div style={{opacity: 0.75}}>Claim email</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>email</span></div>
    <div style={{opacity: 0.75}}>Claim groupes</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>groups</span></div>
    <div style={{opacity: 0.75}}>Auto-provisionnement</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● Actif</span></div>
  </div>
</div>

| Champ | Description |
|---|---|
| **URL de l'émetteur** | URL du fournisseur OIDC. Le framework va chercher `${issuer}/.well-known/openid-configuration` au démarrage pour découvrir les endpoints. |
| **Client ID** / **Secret du client** | Identifiants OAuth2 du client enregistrés auprès de l'IdP. Le secret est chiffré au repos. |
| **URI de redirection** | URL de rappel du framework. Doit être enregistrée côté IdP. |
| **Claim email** | Claim JWT utilisé comme identifiant local. Par défaut `email`. |
| **Claim groupes** | Claim JWT mappé vers les rôles Liberty 1:1. Par défaut `groups`. Un groupe nommé `editor` côté IdP attribue le rôle Liberty `editor`. |
| **Auto-provisionnement** | Quand *actif*, un utilisateur Liberty est créé à la première connexion. Quand *inactif*, l'utilisateur doit déjà exister — pratique quand l'appartenance aux groupes est plus large que la liste d'autorisation Liberty. |

Un bouton **Tester la connexion** en bas du sous-formulaire OIDC ouvre la redirection IdP dans un nouvel onglet et rapporte le résultat. À utiliser avant d'enregistrer — une mauvaise URL d'émetteur se repère bien plus vite ici que depuis la page de connexion.

### Formats d'émetteur par IdP

| IdP | Modèle d'URL d'émetteur |
|---|---|
| **Authentik** | `https://auth.example.com/application/o/liberty/` (la barre oblique finale est obligatoire) |
| **Keycloak** | `https://kc.example.com/realms/<realm>` (et activer le mapper *groups* sur le client Liberty) |
| **Azure AD / Entra** | `https://login.microsoftonline.com/<tenant>/v2.0` (configurer *Groups claims* dans la config du jeton) |
| **Okta** | `https://<your-domain>.okta.com/oauth2/default` |
| **Google Workspace** | `https://accounts.google.com` (pas de claim de groupe — utiliser le claim HD pour la restriction de domaine, gérer les rôles dans l'onglet Utilisateurs de Liberty) |

### La page de connexion

Avec OIDC actif, le bouton **Se connecter avec SSO** apparaît à côté du formulaire identifiant / mot de passe sur la page de connexion. Le formulaire local reste disponible pour les administrateurs de secours.

---

## Cycle de vie des jetons

Les durées sont modifiables dans **Paramètres → Framework → Authentification** :

| Jeton | Défaut | Champ de l'éditeur | Stockage | Usage |
|---|---|---|---|---|
| **Jeton d'accès** | 15 min | *Durée du jeton d'accès* | `localStorage` du frontend (clé `liberty_access`) | Envoyé en `Authorization: Bearer …` à chaque appel API. |
| **Jeton de rafraîchissement** | 7 jours | *Durée du jeton de rafraîchissement* | Cookie `httpOnly` (`liberty_refresh`), `SameSite=Strict` | Échangé contre un nouveau jeton d'accès quand le précédent expire. |

Le client API du frontend rafraîchit le jeton d'accès de manière transparente quand il obtient un `401` avec `WWW-Authenticate: Bearer error="invalid_token"`. La requête en échec est rejouée une fois avec le nouveau jeton.

### Révocation

| Déclencheur | Effet |
|---|---|
| L'utilisateur se déconnecte | Le jeton de rafraîchissement est retiré du magasin côté serveur ; le jeton d'accès expire dans la durée TTL. |
| L'opérateur clique *Révoquer toutes les sessions* sur l'utilisateur | Identique à la déconnexion pour chaque session active de l'utilisateur. |
| L'opérateur marque l'utilisateur *Inactif* | Les rafraîchissements de jeton suivants échouent. |
| Redémarrage du framework avec une nouvelle clé de signature JWT | Chaque jeton d'accès actif devient immédiatement invalide. Les jetons de rafraîchissement échouent aussi — chaque utilisateur doit se reconnecter. |

La clé de signature JWT est référencée par nom de variable d'environnement dans le formulaire Authentification (par défaut `${LIBERTY_JWT_SECRET}`). La rotation de la clé est une action **qui demande un redémarrage**.

---

## Permissions

L'onglet Utilisateurs est gouverné par `users:read` (consultation) / `users:write` (édition). L'onglet Rôles suit le même modèle — voir [Rôles et permissions](./roles-permissions.md). Le sous-formulaire Authentification de l'onglet Framework est gouverné par `settings:framework`.

---

## Conseils et bonnes pratiques

- **Définir la clé de signature JWT en production.** Une clé éphémère convient en développement mais invalide chaque session à chaque redémarrage.
- **Utiliser le backend base de données au-delà d'une poignée d'utilisateurs.** TOML se dégrade sous les éditions concurrentes ; le backend BDD gère cela proprement.
- **Conserver au moins un administrateur local même sur les installations OIDC.** L'accès de secours quand l'IdP est indisponible est inestimable.
- **Refléter les groupes de l'IdP vers les rôles Liberty 1:1.** Contrat le plus propre — nommer les rôles Liberty pour qu'ils correspondent aux noms de groupes de l'IdP.
- **Faire la rotation de la clé de signature JWT selon un calendrier.** Une cadence annuelle est raisonnable ; la perturbation se limite à une reconnexion par utilisateur.
- **Utiliser *Tester la connexion* sur le formulaire OIDC** avant d'enregistrer. Permet de détecter tôt les mauvaises URL d'émetteur / URI de redirection non enregistrées.

---

## Sous le capot

Les paramètres d'authentification sont enregistrés dans `config/app.toml` sous les sections `[auth]` et `[auth.oidc]`. Les entrées d'utilisateurs locaux sont enregistrées dans `config/auth.toml` (backend TOML) ou dans les tables `ly2_users` (backend Base de données). Les opérateurs **ne modifient pas ces fichiers à la main** — l'interface Paramètres est l'interface de référence. Les opérateurs avancés peuvent encore utiliser l'onglet *Raw TOML* ou la [CLI](../cli-reference.md) pour une mise en place scriptée.

---

## Pour aller plus loin

- [Rôles et permissions](./roles-permissions.md) — ce qu'un rôle peut faire, les codes de permission, la matrice d'attribution.
- [Clé de licence](./license-key.md) — verrous de fonctionnalités signés RS256.
- [Applications et Plugins → Plugins](../apps/plugins.md) — validateur de mot de passe personnalisé et autres crochets d'authentification.
