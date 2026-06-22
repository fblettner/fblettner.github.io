---
title: OIDC
description: "Configurer la connexion unique (SSO) pour NomaUBL : flux OIDC Authorization Code + PKCE, fournisseur d'identité (issuer / client / scopes), mapping des claims clé sur l'e-mail, liste blanche de domaines, contrôle du claim hd Google Workspace, auto-provisionnement avec un rôle par défaut. Pilote l'écran de connexion en tandem avec le champ Auth Mode du template Global."
keywords: [NomaUBL, OIDC, SSO, connexion unique, OpenID Connect, PKCE, Authorization Code, Keycloak, Auth0, Azure AD, Microsoft Entra, Okta, Google Workspace, claim hd, domaines autorisés, auto-provisionnement, F564250]
---

# OIDC

NomaUBL embarque une intégration **OIDC** prête à l'emploi qui permet aux utilisateurs de s'authentifier contre un fournisseur d'identité externe (Keycloak, Auth0, Azure AD / Microsoft Entra, Okta, Google Workspace…) en remplacement ou en complément du couple identifiant + mot de passe local.

L'intégration utilise le flux standard **Authorization Code + PKCE**, récupère les métadonnées du fournisseur depuis son `/.well-known/openid-configuration`, et identifie les utilisateurs NomaUBL par leur claim **e-mail**.

Le comportement de l'écran de connexion est piloté par le champ **Auth Mode** du [template Global](./global.md#onglet-5--authentication) :

| Auth Mode | Écran de connexion |
|---|---|
| `internal` *(défaut)* | Formulaire local nom d'utilisateur + mot de passe. |
| `oidc` | Bouton de connexion unique (SSO). |
| `both` | Bouton SSO au-dessus du formulaire local — voie de secours pour un accès administrateur quand le fournisseur d'identité est indisponible. |

Un template OIDC par défaut est créé automatiquement sur les nouvelles installations et lors des mises à jour, et peut aussi être créé en un clic depuis le bouton **+ Add OIDC** de l'en-tête du *Configuration Manager*.

:::info[Introduit en 2026.06.22.5]
Le SSO est une nouvelle capacité — sur une mise à jour, vérifier la liste *Mise en service* en bas de cette page avant de faire basculer `authMode` hors de `internal`.
:::

---

## Ouvrir l'éditeur

- Menu → **Configuration → System → OIDC**.
- L'éditeur est découpé en cinq sections — *Identity provider*, *Claim mapping*, *Domain allow-list*, *Provisioning* et *Switching on*.

---

## En un coup d'œil

<svg viewBox="0 0 1020 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oidc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <marker id="oidc-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="oidc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oidc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="oidc-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.24"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.08"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="200" height="100" rx="14" fill="url(#oidc-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="140" y="68" fill="#4a9eff" fontSize="12" textAnchor="middle" fontWeight="800" fontFamily="system-ui, sans-serif">Navigateur</text>
  <text x="140" y="92" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">utilisateur@exemple.com</text>
  <text x="140" y="110" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">clic sur « Se connecter via SSO »</text>
  <text x="140" y="126" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.6">PKCE : code_verifier</text>

  <rect x="400" y="40" width="220" height="100" rx="14" fill="url(#oidc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="510" y="68" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontWeight="800" fontFamily="system-ui, sans-serif">NomaUBL</text>
  <text x="510" y="92" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">/api/auth/oidc/start</text>
  <text x="510" y="106" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">/api/auth/oidc/callback</text>
  <text x="510" y="124" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.6">ligne F564250 par USEMAIL</text>

  <rect x="780" y="40" width="200" height="100" rx="14" fill="url(#oidc-g-green)" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="880" y="68" fill="#4ade80" fontSize="12" textAnchor="middle" fontWeight="800" fontFamily="system-ui, sans-serif">Fournisseur d'identité</text>
  <text x="880" y="92" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Keycloak / Auth0 / Entra…</text>
  <text x="880" y="110" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.65">/.well-known/openid-configuration</text>
  <text x="880" y="126" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.65">émet le ID token</text>

  <line x1="240" y1="74" x2="400" y2="74" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#oidc-arrow-blue)"/>
  <text x="320" y="68" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">1. /oidc/start</text>

  <line x1="620" y1="74" x2="780" y2="74" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#oidc-arrow-blue)"/>
  <text x="700" y="68" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">2. authorize + state + PKCE</text>

  <line x1="780" y1="106" x2="240" y2="106" stroke="#4ade80" strokeWidth="1.4" markerEnd="url(#oidc-arrow)"/>
  <text x="500" y="100" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">3. redirection avec code d'autorisation</text>

  <line x1="240" y1="130" x2="400" y2="130" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#oidc-arrow-blue)"/>
  <text x="320" y="124" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">4. /oidc/callback</text>

  <rect x="40" y="200" width="940" height="380" rx="14" fill="url(#oidc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="228" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Template OIDC — aperçu de l'éditeur</text>
  <line x1="40" y1="246" x2="980" y2="246" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="270" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ FOURNISSEUR D'IDENTITÉ</text>
  <text x="70" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">URL DE L'ISSUER</text>
  <rect x="220" y="280" width="380" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="295" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">https://idp.example.com/realms/myrealm</text>
  <text x="70" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT ID</text>
  <rect x="220" y="306" width="200" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="321" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">nomaubl</text>
  <text x="440" y="321" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">+ Client secret · Redirect URI · Scopes</text>

  <text x="60" y="356" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ MAPPING DES CLAIMS</text>
  <text x="70" y="376" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLAIM EMAIL</text>
  <rect x="220" y="366" width="120" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="381" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">email</text>
  <text x="360" y="381" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">comparé à USEMAIL sur F564250</text>

  <text x="60" y="416" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ DOMAINES AUTORISÉS</text>
  <text x="70" y="436" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOMAINES AUTORISÉS</text>
  <rect x="220" y="426" width="380" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="441" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">nomana-it.fr, partner.com</text>
  <text x="70" y="466" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXIGER hd GOOGLE</text>
  <rect x="220" y="456" width="160" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="230" y="471" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">nomana-it.fr</text>
  <text x="400" y="471" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">refuse un Gmail personnel partageant l'adresse</text>

  <text x="60" y="506" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ PROVISIONNEMENT</text>
  <text x="70" y="526" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTO-CRÉATION</text>
  <rect x="220" y="516" width="80" height="22" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="260" y="531" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Y ▾</text>
  <text x="310" y="531" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE PAR DÉFAUT</text>
  <rect x="420" y="516" width="160" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="531" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">viewer ▾</text>

  <text x="60" y="568" fill="#cbd5e1" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Coupler avec</text>
  <text x="135" y="568" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">global.authMode = oidc</text>
  <text x="315" y="568" fill="#cbd5e1" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">pour basculer l'écran de connexion.</text>
</svg>

---

## Fournisseur d'identité

| Champ | Description |
|---|---|
| **Issuer URL** | URL de base du fournisseur OIDC — par exemple `https://idp.example.com/realms/myrealm` pour un realm Keycloak, l'URL du tenant Auth0 ou l'endpoint Azure AD. NomaUBL récupère les métadonnées via `<issuer>/.well-known/openid-configuration` : les endpoints individuels (autorisation, token, userinfo, JWKS) n'ont jamais à être saisis manuellement. |
| **Client ID** | Identifiant du client OIDC déclaré côté IdP pour NomaUBL. |
| **Client secret** | Optionnel pour les clients publics PKCE (le fournisseur peut être configuré sans). Stocké en Base64 sur disque. |
| **Redirect URI** | Doit correspondre **exactement** à l'URI de redirection enregistrée côté IdP. Valeur typique : `https://<votre-hôte>/api/auth/oidc/callback`. |
| **Scopes** | Séparés par des espaces. Par défaut `openid profile email`. Ajouter ici les scopes spécifiques au fournisseur quand des claims supplémentaires sont nécessaires. |

---

## Mapping des claims

NomaUBL identifie les utilisateurs OIDC par leur **e-mail** — le claim `email` est comparé à la colonne `USEMAIL` de `F564250`. La colonne courte `USUSER` reste la clé d'audit et de session (convention JDE 10 caractères) ; à l'auto-provisionnement, elle est dérivée de la partie locale de l'e-mail.

| Champ | Description |
|---|---|
| **Email claim** | Claim de l'ID token qui transporte l'e-mail de l'utilisateur. Défaut `email` — fonctionne tel quel pour Google, Microsoft, Keycloak et Auth0. |
| **Full-name claim** | Sert à renseigner `USFULLNAME` à la première connexion, puis rafraîchi à chaque nouvelle connexion. Défaut `name`. |
| **Username claim (fallback)** | Utilisé uniquement quand le claim e-mail est absent du ID token (rare). La plupart des installations laissent ce champ vide. |

---

## Liste blanche de domaines

Restreint qui peut se connecter via SSO à un ensemble de tenants e-mail soigneusement choisi. Utile quand l'IdP émet aussi des tokens pour des comptes grand public (le cas Gmail étant l'exemple type).

| Champ | Description |
|---|---|
| **Allowed email domains** | Liste séparée par des virgules. **Laisser vide** pour autoriser n'importe quel e-mail vérifié. Renseigné, seules les adresses dont le domaine figure dans la liste peuvent se connecter — un compte Google personnel ou un tenant différent est refusé au callback. |
| **Require Google Workspace domain (claim `hd`)** | Spécifique Google. Si renseigné, le ID token doit porter un claim `hd` égal à cette valeur — refuse un Gmail personnel qui partagerait par hasard une adresse avec un utilisateur Workspace. Laisser vide pour ignorer le contrôle ; le champ n'a pas de sens pour les IdP non-Google. |

---

## Provisionnement

Contrôle ce qui se passe quand un utilisateur inconnu réussit pour la première fois à s'authentifier contre l'IdP.

| Champ | Description |
|---|---|
| **Auto-create accounts** | `Y` / `N`. À `Y`, la première connexion crée la ligne `F564250` avec le rôle par défaut ci-dessous — l'utilisateur arrive directement sur le tableau de bord. À `N`, les utilisateurs inconnus sont refusés avec un message *contacter l'administrateur*, même après une authentification réussie. |
| **Default role** | Rôle attribué aux comptes auto-provisionnés. Alimenté depuis la liste réelle des rôles (pas de défaut codé en dur). Les comptes existants conservent leur rôle actuel et **ne sont pas** réaffectés aux connexions suivantes. |

L'identifiant auto-provisionné est un handle court à 10 caractères dans le style JDE, dérivé de la partie locale de l'e-mail — par ex. `john.doe@example.com` → `JOHNDOE`. En cas de collision, un suffixe numérique est ajouté.

---

## Sessions OIDC dans NomaUBL

Les sessions ouvertes via OIDC se comportent un peu différemment des sessions locales :

- La **fenêtre Profil** verrouille l'onglet *Sécurité* — la rotation des mots de passe se fait côté IdP.
- Les champs d'identité (e-mail, nom complet) sont **en lecture seule** dans la fenêtre Profil — ils sont rafraîchis depuis le ID token à chaque connexion.
- **Rôles, droits et filtres de lignes restent gérés dans NomaUBL** — l'IdP ne fait que vérifier l'identité. L'utilisateur OIDC hérite du rôle attribué à son compte dans `F564250`, exactement comme un utilisateur local.
- La déconnexion invalide la session NomaUBL ; elle n'appelle pas par défaut l'`end_session_endpoint` de l'IdP.

---

## Mise en service

Une fois le template OIDC rempli, le champ **Auth Mode** du [template Global](./global.md#onglet-5--authentication) contrôle le comportement de l'écran de connexion :

| Mode | Effet |
|---|---|
| `internal` *(défaut)* | Formulaire local uniquement. OIDC est configuré mais pas exposé. |
| `oidc` | Bouton SSO uniquement. Formulaire local masqué. |
| `both` | Bouton SSO au-dessus du formulaire local — recommandé pendant le déploiement pour que les comptes admin conservent une voie de secours. |

Un déploiement sans surprise suit en général ces étapes :

1. Remplir le template OIDC et enregistrer.
2. Mettre **Auth Mode** à `both`. Tester de bout en bout avec un compte SSO.
3. Vérifier que la ligne `F564250` auto-provisionnée a le rôle et le `USEMAIL` attendus.
4. Faire basculer **Auth Mode** à `oidc` une fois que chaque compte s'est connecté au moins une fois (ou que chaque compte a reçu manuellement le bon rôle si l'auto-provisionnement est à `N`).

:::warning[Garder un admin local]
Quand **Auth Mode** est à `oidc`, le formulaire local est masqué — il n'existe plus de voie de secours si l'IdP est injoignable. Conserver au moins un compte `admin` local dans `F564250` et **rester sur `both`** si le risque opérationnel d'une panne IdP est inacceptable.
:::

---

## Dépannage

| Symptôme | Cause probable |
|---|---|
| *Connexion refusée au callback avec un message sur le domaine.* | Le domaine de l'e-mail n'est pas dans *Allowed email domains*, ou le claim `hd` Google ne correspond pas à la valeur requise. |
| *Connexion refusée avec « utilisateur introuvable ».* | *Auto-create accounts* est à `N` et l'utilisateur n'a pas de ligne `F564250` préexistante — provisionner manuellement l'utilisateur ou activer l'auto-création. |
| *La connexion reboucle sur l'écran de l'IdP.* | L'**URI de redirection** dans NomaUBL ne correspond pas exactement à celle déclarée côté IdP (slash final, schéma, nom d'hôte). |
| *401 / erreur de récupération des métadonnées au démarrage.* | L'**Issuer URL** est erronée, inaccessible depuis l'hôte NomaUBL, ou son `/.well-known/openid-configuration` est protégé par authentification. |
| *L'opérateur se connecte mais arrive sur un tableau de bord vide.* | Le **rôle par défaut** attribué au provisionnement n'a aucun droit de page. Affecter le compte à un rôle plus complet dans *Configuration → Security → Utilisateurs*. |

---

## Conseils et bonnes pratiques

- **Utiliser `both` pendant le déploiement.** Le formulaire local reste actif comme voie de secours pendant la mise au point du SSO. Basculer vers `oidc` uniquement quand chaque compte est confirmé fonctionnel via l'IdP.
- **Renseigner *Allowed email domains*** quand l'IdP peut émettre des tokens pour des comptes grand public (Google Workspace, Microsoft Entra avec B2B). C'est peu coûteux et écarte toute une famille d'erreurs.
- **L'auto-provisionnement fait gagner du temps à l'administrateur** — à condition d'être couplé à un rôle par défaut volontairement peu privilégié. Choisir `viewer` (ou un rôle *nouveau-venu* dédié) pour que les comptes fraîchement créés soient revus avant d'obtenir des permissions plus larges.
- **Les permissions de l'utilisateur OIDC vivent dans NomaUBL.** Même SSO activé, accorder l'accès à une page reste un acte NomaUBL — l'IdP ne fait qu'attester l'identité.
