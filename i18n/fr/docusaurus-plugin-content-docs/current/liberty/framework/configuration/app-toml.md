---
title: Paramètres du framework
description: "Tous les paramètres transverses du framework — nom de l'application, pool de base par défaut, backend d'authentification, OIDC, fournisseur IA, clé maîtresse de chiffrement, licence — se modifient depuis Paramètres → Framework. Le formulaire est piloté par un schéma ; cette page liste chaque champ, son rôle et l'endroit où il se manifeste."
keywords: [Liberty Framework, paramètres, framework settings, app, default pool, authentication, OIDC, AI, master key, license, CORS, static directory]
---

# Paramètres du framework

Les paramètres **transverses au framework** — ceux qui ne sont rattachés ni à un connecteur, ni à un écran, ni à un menu — se modifient depuis **Paramètres → Framework**. La page est un formulaire piloté par schéma, avec une section par sujet : identité de l'application, pool de base de données par défaut, authentification, fournisseur IA, chiffrement et licence. L'enregistrement recharge le sous-système concerné.

Cette page liste chaque champ de l'onglet *Framework*, son effet et l'endroit où il se manifeste dans le reste de l'application.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Framework</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Annuler</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer et recharger</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Application</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Nom</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Liberty</span></div>
      <div style={{opacity: 0.75}}>Langue par défaut</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>en ▾</span></div>
      <div style={{opacity: 0.75}}>Origines CORS autorisées</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>http://localhost:5173</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Pool de base de données par défaut</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>URL</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>sqlite+aiosqlite:///liberty.db</span></div>
      <div style={{opacity: 0.75}}>Dialecte</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>sqlite ▾</span></div>
      <div style={{opacity: 0.75}}>Taille du pool</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>5</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Authentification</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Backend</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>Local — TOML ▾</span></div>
      <div style={{opacity: 0.75}}>Durée de vie du jeton d'accès</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>15 min</span></div>
      <div style={{opacity: 0.75}}>Durée de vie du jeton de rafraîchissement</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>7 jours</span></div>
      <div style={{opacity: 0.75}}>OIDC activé</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(94,94,94,0.10)', border: '1px solid rgba(255,255,255,0.20)', fontSize: '11px', fontWeight: 600, opacity: 0.7}}>○ Off</span></div>
    </div>
  </div>
</div>

La maquette est repliée ; les sections *IA*, *Chiffrement* et *Licence* se présentent en dessous de la même manière.

Le formulaire a la même forme quel que soit le mode de déploiement — dev local, conteneur, Kubernetes. Les rares valeurs qui appartiennent légitimement à l'environnement (la clé de signature JWT, la clé maîtresse de chiffrement, la clé de licence, la clé d'API IA) sont référencées par nom dans les champs du formulaire et résolues au démarrage ; voir [Variables d'environnement](./environment-variables.md).

---

## Application

| Champ | Effet |
|---|---|
| **Nom** | Nom affiché dans l'en-tête et le titre de la page. Défaut `Liberty`. |
| **Langue par défaut** | Langue utilisée quand l'appelant ne transporte pas l'en-tête `X-Liberty-Lang` et n'a aucune préférence utilisateur. Défaut `en`. |
| **Origines CORS autorisées** | Origines acceptées par le preflight CORS du navigateur. Ajouter le serveur de dev Vite (`http://localhost:5173`) pour le développement avec rechargement à chaud, l'origine du frontend de production quand le SPA est servi depuis un autre hôte. |
| **Proxys de confiance** | Plages CIDR des reverse proxys auxquels le framework fait confiance pour les en-têtes `X-Forwarded-*`. Requis derrière nginx / Traefik pour que le framework voie l'IP cliente d'origine. |
| **Répertoire statique** | Chemin du SPA React construit. Défaut `frontend/dist`. Quand le répertoire n'existe pas, le serveur fonctionne en mode **API seule** (toutes les routes `/api/*` répondent, `/` renvoie 404). À utiliser quand le SPA est servi depuis un CDN. |

---

## Pool de base de données par défaut

Le **pool par défaut** porte la base de données utilisée par le framework lui-même — tables d'authentification quand *Backend* vaut `db`, historique des exécutions Nomaflow, verrous d'enregistrement, conversations IA. Tous les autres pools se définissent dans l'onglet *Paramètres → Pools*.

| Champ | Effet |
|---|---|
| **URL** | URL async SQLAlchemy. SQLite pointe par défaut vers un fichier local `liberty.db`. PostgreSQL : `postgresql+asyncpg://user:pass@host/db`. Oracle mode thin : `oracle+oracledb://user:pass@host:1521/?service_name=PDB1`. Tester la connectivité avec le bouton *Tester la connexion*. |
| **Dialecte** | `sqlite` / `postgresql` / `oracle`. Pilote le SQL de repli spécifique à chaque dialecte dans le moteur de connecteurs. |
| **Taille du pool** | Nombre maximum de connexions simultanées. Défaut 5. |
| **Recyclage du pool** | Délai en secondes avant qu'une connexion obsolète soit recyclée. Défaut 1800. |
| **Mot de passe** | Optionnel. Cliquer sur l'icône 🔒 pour passer le champ en mode *Chiffré* — voir [Chiffrement et secrets](./encryption-secrets.md). |

---

## Authentification

| Champ | Effet |
|---|---|
| **Backend** | `Local — TOML` *(défaut)* / `Local — Database`. Détermine où vivent les comptes utilisateurs. L'option `Local — TOML` utilise `config/auth.toml` sur l'hôte (aucune infrastructure). `Local — Database` crée et utilise les tables `ly2_users` / `ly2_roles` / `ly2_permissions` sur le pool par défaut. |
| **Clé de signature JWT** | Référence à la variable d'environnement qui contient le secret de signature HS256. Défaut `${LIBERTY_JWT_SECRET}`. Quand la variable n'est pas définie, le framework génère une clé éphémère par processus — chaque redémarrage invalide chaque jeton. |
| **Durée de vie du jeton d'accès** | Durée de vie d'un jeton d'accès. Défaut 15 minutes. |
| **Durée de vie du jeton de rafraîchissement** | Durée de vie d'un jeton de rafraîchissement. Défaut 7 jours. |
| **Réglage Argon2** | Trois champs numériques — *Time cost* (défaut 2), *Memory cost* en KiB (défaut 65536), *Parallelism* (défaut 1). À augmenter sur les installations avec un modèle de menace renforcé. |

### Sous-section OIDC

Un interrupteur en haut de la sous-section active le SSO OIDC ; le formulaire en dessous n'apparaît que quand *OIDC activé* est sur On.

| Champ | Effet |
|---|---|
| **URL de l'émetteur** | URL de l'émetteur de l'IdP. Le framework récupère `${issuer}/.well-known/openid-configuration` au démarrage. |
| **Client ID** | ID client OAuth2 enregistré auprès de l'IdP. |
| **Client secret** | Secret client OAuth2. Toujours **chiffré** — l'icône 🔒 est verrouillée. |
| **URI de redirection** | URL de callback du framework, par exemple `https://liberty.example.com/auth/oidc/callback`. Doit être enregistrée côté IdP. |
| **Claim email** | Claim JWT utilisé comme identifiant utilisateur local. Défaut `email`. |
| **Claim groupes** | Claim JWT utilisé pour faire correspondre les groupes IdP aux rôles Liberty. Défaut `groups`. |
| **Auto-provisionnement** | Quand activé, un utilisateur Liberty est créé à la première connexion OIDC. Sinon, l'utilisateur doit déjà exister. |

[Authentification](../auth/authentication.md) parcourt le flux OIDC complet avec des notes spécifiques à chaque IdP (Authentik, Keycloak, Azure AD, Okta, Google).

---

## IA

| Champ | Effet |
|---|---|
| **Fournisseur** | `Anthropic`. Seul fournisseur pris en charge à ce jour. |
| **Clé d'API** | Référence à la variable d'environnement qui contient la clé. Défaut `${ANTHROPIC_API_KEY}`. Quand elle n'est pas définie, l'assistant est désactivé et `/chat` affiche un avis « configurer une clé d'API ». |
| **Modèle** | ID de modèle Anthropic. Défaut `claude-sonnet-4-6`. Passer à `claude-opus-4-7` pour davantage de raisonnement, `claude-haiku-4-5` pour des tours moins chers et plus rapides. |
| **Max tokens** | Plafond de tokens par réponse de l'assistant. Défaut 4096. |
| **Concurrence outils** | Nombre maximum d'appels d'outils en parallèle par tour de l'assistant. Défaut 4. |

Voir [AI assistant](../ai-assistant.md) pour la surface de chat, le contrat de génération d'outils et le filtrage par rôle.

---

## Chiffrement

| Champ | Effet |
|---|---|
| **Clé maîtresse** | Référence à la variable d'environnement qui contient la clé AES-256-GCM utilisée pour déchiffrer chaque champ `ENC:`. Défaut `${LIBERTY_MASTER_KEY}`. Doit faire 32 octets, encodée en hex ou base64. À générer avec `liberty-crypto genkey`. |
| **Clés héritées** | Liste de clés anciennes, utilisées **uniquement pour le déchiffrement** pendant une rotation. Les nouveaux chiffrements utilisent toujours *Clé maîtresse*. Cliquer sur *➕ Ajouter clé héritée* pour ajouter une entrée. |

Voir [Chiffrement et secrets](./encryption-secrets.md) pour la procédure de rotation et le format `ENC:`.

---

## Licence

| Champ | Effet |
|---|---|
| **Clé de licence** | Référence à la variable d'environnement qui contient le JWT de licence signé en RS256. Défaut `${LIBERTY_LICENSE_KEY}`. Pilote les verrous de fonctionnalités sur les connecteurs marqués *Licensed*. |
| **Chemin de la clé publique** | Remplacement optionnel pour la clé publique embarquée. Utile quand l'installation tourne avec une autorité de signature privée. |

La page [Paramètres → Licence](../auth/license-key.md) affiche l'état courant (acceptée / refusée / non configurée), le nom du client, la date d'expiration et la liste des fonctionnalités déverrouillées.

---

## Enregistrer et recharger

Chaque enregistrement valide le formulaire contre les modèles Pydantic du framework. Les valeurs invalides surlignent le champ en rouge et désactivent le bouton *Enregistrer et recharger*.

Un enregistrement réussi :

1. **Persiste le changement** sur disque (détail du système de fichiers, jamais édité à la main).
2. **Réapplique le sous-système concerné** — un changement de *Langue par défaut* déclenche un rechargement des packs de langues ; un changement de *Durée de vie du jeton d'accès* prend effet à la prochaine connexion ; un changement d'*OIDC activé* relance la découverte OIDC à la prochaine connexion.
3. **Affiche un toast** qui confirme le rechargement de la section.

Quelques champs demandent un **redémarrage complet** : le changement de *Backend d'authentification*, la rotation de *Clé maîtresse*, le changement de *Clé de licence*. Le formulaire les marque avec un badge *Redémarrage requis* et propose un bouton *Redémarrer maintenant* à côté du contrôle *Enregistrer et recharger* (admin uniquement).

---

## Permissions

L'onglet *Framework* est filtré par `settings:framework`. La lecture sans écriture est possible — accorder `settings:read` + la permission par onglet sans `settings:reload` rend le formulaire consultable seul.

---

## Sous le capot

Le stockage du formulaire est `liberty-next/config/app.toml`. Les opérateurs **n'éditent pas ce fichier à la main** en fonctionnement normal ; l'interface Paramètres est l'interface canonique, avec l'onglet *Raw TOML* comme issue de secours. Le fichier est analysé une fois au démarrage et à chaque *Enregistrer et recharger* de l'onglet Framework.

Pour les scripts d'ops et les pipelines CI qui doivent piloter le framework sans l'interface, la même surface est accessible via les endpoints REST sous `/admin/config/framework/*` — voir [REST API reference](../rest-api.md#admin-config).

---

## Pour aller plus loin

- [Variables d'environnement](./environment-variables.md) — chaque référence `${LIBERTY_*}` résolue au démarrage.
- [Chiffrement et secrets](./encryption-secrets.md) — l'interrupteur 🔒 et la procédure de rotation.
- [Authentification](../auth/authentication.md) — ce que chaque backend change.
- [Rechargement à chaud](./hot-reload.md) — ce qui se recharge à chaud et ce qui demande un redémarrage.
