---
title: Secrets chiffrés
description: "L'interrupteur 🔒 qui chiffre les champs secrets au repos — ce qui est chiffré, comment AES-256-GCM est câblé, où réside la clé maîtresse, le préfixe ENC: et le scénario de rotation."
keywords: [Liberty Framework, secrets chiffrés, ENC, AES-256-GCM, clé maîtresse, mot de passe, secret OIDC, chiffrement, rotation]
---

# Secrets chiffrés

Chaque champ de Liberty qui contient un secret — mots de passe des pools, client secret OIDC, jetons des connecteurs API, identifiants personnalisés — prend en charge le **chiffrement au repos**. L'interface affiche un interrupteur 🔒 à côté du champ ; l'activer stocke la valeur sous la forme `ENC:<base64>` sur disque plutôt qu'en clair. C'est le chemin normal pour un déploiement.

Le chiffrement est **AES-256-GCM** avec une clé dérivée de la clé maîtresse du framework via **PBKDF2-HMAC-SHA512**. La clé maîtresse est le seul secret à protéger en dehors du framework — la sauvegarder avec la configuration.

---

## L'interrupteur 🔒

Chaque champ secret est accompagné d'une petite icône cadenas :

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="se-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="180" rx="14" fill="url(#se-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Pools · [pools.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Nom d'utilisateur</text>
  <rect x="200" y="80" width="400" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="96" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">crm_app</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Mot de passe</text>
  <rect x="200" y="112" width="400" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="128" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••</text>
  <rect x="608" y="112" width="36" height="24" rx="4" fill="rgba(34,197,94,0.20)" stroke="rgba(34,197,94,0.40)"/>
  <text x="626" y="128" fill="#22c55e" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">🔒</text>
  <text x="650" y="128" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">chiffré au repos (AES-256-GCM)</text>

  <text x="40" y="172" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Enregistré sur disque sous :  ENC:eyJzYWx0IjoiLi4uIiwiaXYiOiIuLi4iLCJ0YWciOiIuLi4ifQ==</text>
</svg>

| État de l'interrupteur | Stockage sur disque |
|---|---|
| **🔒 activé** (vert) | `password = "ENC:<base64>"` — le champ est chiffré avant d'être écrit dans le fichier de configuration. C'est le chemin recommandé. |
| **🔒 désactivé** | `password = "plaintext"` — option dev uniquement, utile quand la clé maîtresse n'est pas définie. |

L'interrupteur est **par champ**, pas par fichier — un pool peut avoir un mot de passe chiffré et un hôte en clair (puisque l'hôte n'est pas un secret).

---

## Ce qui est chiffré

Les champs secrets du framework prennent tous en charge l'interrupteur. Les plus courants :

| Champ | Où | Pourquoi |
|---|---|---|
| **Mot de passe de pool** | *Paramètres → Pools → \<pool> → Mot de passe* | Identifiants de base de données. |
| **Client secret OIDC** | `app.toml` `[oidc] client_secret` (via le motif variable d'environnement) | Secret du client OAuth2. |
| **Jeton de connecteur API** | *Paramètres → Connecteurs → \<connecteur API> → Authentification* | Bearer tokens, clés d'API, mots de passe basic-auth. |
| **URL de webhook avec secret** | *Paramètres → Notifications → \<canal>* | URL de webhook Slack (l'URL elle-même est le secret). |
| **Secret de signature JWT** | `app.toml` `[auth] jwt_secret` (via variable d'environnement) | La clé qui signe chaque jeton d'accès. Critique — jamais en clair. |
| **Clé de licence** | `app.toml` `[license] key` (via variable d'environnement) | Pas à proprement parler un identifiant, mais traitée pareillement par sécurité. |

Pour les champs de l'interface, l'interrupteur est l'interaction standard. Pour les entrées de `app.toml` non exposées dans l'interface, la convention est la syntaxe `${ENV_VAR}` — le framework substitue depuis l'environnement au démarrage et ne réécrit jamais la valeur résolue.

---

## Comment le chiffrement est câblé

| Couche | Quoi |
|---|---|
| **Algorithme** | AES-256-GCM. Chiffrement authentifié — toute altération du texte chiffré lève une erreur au déchiffrement. |
| **Dérivation de clé** | PBKDF2-HMAC-SHA512, 2145 itérations, clé de 32 octets à partir de la clé maîtresse. Chaque chiffrement tire un sel frais de 64 octets. |
| **Entropie par valeur** | Un IV frais de 16 octets par chiffrement. Chiffrer deux fois la même valeur produit donc des textes chiffrés différents (attendu pour GCM). |
| **Charge utile stockée** | `ENC:` + base64(salt[64] ‖ iv[16] ‖ tag[16] ‖ texte chiffré) |
| **Déchiffrement** | Effectué paresseusement au moment de l'usage. Un pool SQL lisant son mot de passe déchiffre à la connexion ; la couche OIDC lit son secret à chaque connexion. |

Le choix de GCM apporte l'**intégrité** — si le texte chiffré est altéré sur disque, le déchiffrement échoue de façon visible plutôt que de renvoyer des données aléatoires. PBKDF2 avec 2145 itérations correspond à la compatibilité du parc installé (c'est le défaut v1, conservé pour la rétro-compatibilité).

---

## La clé maîtresse

La clé maîtresse est le seul secret à gérer en dehors du framework. La configurer via :

| Source | Notes |
|---|---|
| **`[crypto] master_key` dans `app.toml`** | Lue au démarrage. Garder les permissions du fichier strictes (`chmod 600`). |
| **Variable d'environnement `LIBERTY_MASTER_KEY`** | L'emporte sur la valeur du fichier. Le chemin recommandé — le secret se trouve dans le gestionnaire de secrets, pas sur disque. |
| (aucune) | Si ni l'une ni l'autre n'est définie, le framework refuse de déchiffrer les valeurs `ENC:` — les champs retombent en clair ou échouent. |

La clé est **opaque** — toute chaîne que le framework peut hacher convient. En générer une avec :

```bash
openssl rand -hex 32   # chaîne hex de 64 caractères
# ou
liberty-crypto genkey   # génère et affiche une clé
```

Ne pas changer la clé maîtresse une fois que des valeurs `ENC:` existent — voir [Rotation de clé](#key-rotation) plus bas.

---

## Le préfixe `ENC:`

Le préfixe littéral `ENC:` est ce qui permet au framework de distinguer les valeurs chiffrées des valeurs en clair. La convention :

| Valeur stockée | Traitée comme |
|---|---|
| `password = "ENC:eyJ..."` | Chiffrée — déchiffrement au moment de l'usage. |
| `password = "secret123"` | En clair — utilisée telle quelle. |
| `password = "${DB_PASSWORD}"` | Substitution de variable d'environnement — la valeur résolue est utilisée telle quelle (qu'elle soit `ENC:...` ou en clair). |

Le framework **ne chiffre jamais à nouveau** de sa propre initiative — si l'on écrit une valeur en clair, elle reste en clair. C'est l'activation de l'interrupteur 🔒 dans l'interface qui déclenche le passage au chiffrement.

Pour un chiffrement par lot d'une configuration existante (par exemple migrer une installation déployée en clair vers le chiffrement au repos), la CLI fournit :

```bash
liberty-crypto encrypt 'my_password'
# → ENC:eyJzYWx0IjoiLi4uIiwiaXYiOiIuLi4iLCJ0YWciOiIuLi4ifQ==

liberty-crypto decrypt 'ENC:eyJ...'
# → my_password
```

Utiliser ces commandes pour composer manuellement les valeurs des entrées de `app.toml` non exposées dans l'interface.

---

## Rotation de clé \{#key-rotation\}

Changer la clé maîtresse est **destructeur** pour les valeurs `ENC:` existantes — elles sont chiffrées sous l'ancienne clé et ne peuvent pas être déchiffrées avec la nouvelle. La procédure de rotation :

1. **Déchiffrer chaque valeur `ENC:` existante** avec l'ancienne clé (`liberty-crypto decrypt` sur chacune).
2. **Basculer sur la nouvelle clé maîtresse** (variable d'environnement ou `app.toml`).
3. **Re-chiffrer** chaque valeur avec la nouvelle clé (`liberty-crypto encrypt`).
4. **Mettre à jour chaque champ** avec le nouveau texte chiffré.
5. **Redémarrer** le framework pour qu'il charge la nouvelle clé.

Pour les installations comptant des centaines de champs chiffrés, écrire un script — le framework n'embarque pas encore d'outil de rotation en masse. La forme d'un tel script :

```bash
# 1. exporter chaque secret avec l'ancienne clé
liberty-crypto rotate-prepare --output /tmp/rotation.json
# 2. basculer LIBERTY_MASTER_KEY sur la nouvelle valeur, redémarrer les workers
# 3. re-chiffrer depuis l'export
liberty-crypto rotate-apply --input /tmp/rotation.json
```

Les commandes `rotate-prepare` et `rotate-apply` ne sont pas livrées à ce jour ; la procédure manuelle ci-dessus est le chemin actuel. **Planifier les rotations avec soin** — chaque valeur chiffrée de chaque fichier de configuration doit être mise à jour.

**Plus sûr que la rotation : ne jamais perdre la clé maîtresse en premier lieu.** La sauvegarder aux côtés de la configuration. Une clé maîtresse perdue avec des valeurs `ENC:` sur disque oblige à ressaisir chaque secret à la main.

---

## Où la clé maîtresse ne doit PAS résider

| Emplacement | Pourquoi pas |
|---|---|
| En clair dans `app.toml` versionné dans git. | Tout l'intérêt de `ENC:` est de ne pas avoir de secrets dans le dépôt. Cela défait l'objectif. |
| En dur dans un Dockerfile. | Idem — fuite au moment du build. |
| Dans un log CI/CD. | Certains pipelines impriment les variables d'environnement ; la clé apparaît dans les logs pour toujours. |
| Au même endroit que les sauvegardes chiffrées. | Si quelqu'un vole l'un, il vole les deux. |

**Bons emplacements :** un gestionnaire de secrets (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault, 1Password Connect), le trousseau de l'OS sur une machine de développement, une variable d'environnement injectée par l'orchestrateur à l'exécution.

---

## Ce qui se passe sans clé maîtresse

Si le framework démarre sans clé maîtresse définie alors que des valeurs `ENC:` existent sur disque :

- Le démarrage écrit un avertissement.
- Tenter d'utiliser un champ avec une valeur `ENC:` lève une erreur de déchiffrement au moment de l'usage (quand le pool tente de se connecter, quand l'OIDC tente de récupérer le jeton, etc.).
- Le reste du framework continue à fonctionner — seuls les chemins concernés cassent.

C'est **un échec bruyant plutôt que silencieux** — le framework ne retombe pas silencieusement sur « utiliser ENC: comme clair » parce que cela reviendrait à se connecter avec un blob base64.

Pour les environnements de développement où l'on ne souhaite pas définir de clé maîtresse, stocker les secrets en clair (ne pas activer 🔒).

---

## Si un secret est exposé

Réponse à incident standard :

1. **Faire tourner l'identifiant en amont** (changer le mot de passe de la base, regénérer le client secret OIDC, regénérer le jeton d'API chez le tiers).
2. **Mettre à jour le champ** dans Liberty — ressaisir le nouveau secret, laisser 🔒 activé.
3. Le framework prend la nouvelle valeur au prochain rechargement ou redémarrage.
4. (Optionnel) Si la clé maîtresse elle-même a été exposée : faire tourner la clé maîtresse selon la procédure ci-dessus.

La compromission de la clé maîtresse est le **seul** chemin qui demande de toucher à chaque champ chiffré — la rotation d'identifiant se règle un champ à la fois.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Clé maîtresse dans `app.toml` versionné dans git. | Le secret fuit. | Utiliser la variable d'environnement `LIBERTY_MASTER_KEY` issue d'un gestionnaire de secrets. |
| Clés maîtresses différentes entre environnements sans coordination. | Les valeurs `ENC:` de prod échouent à déchiffrer en staging. | Déchiffrer + re-chiffrer lors de la promotion entre environnements, ou utiliser la même clé maîtresse (avec un contrôle d'accès approprié). |
| Modifier une valeur `ENC:` directement dans `app.toml`. | Le framework déchiffre le texte saisi, qui n'est pas un texte chiffré valide, et échoue. | Utiliser l'interrupteur 🔒 de l'interface (qui ressaisit la valeur puis la chiffre à l'enregistrement) ou `liberty-crypto encrypt`. |
| Désactiver 🔒 et enregistrer. | La valeur arrive sur disque en clair. | Vérifier que l'interrupteur reste activé avant d'enregistrer, ou utiliser `liberty-crypto encrypt` depuis la CLI. |
| Sauvegarder la configuration chiffrée sans la clé maîtresse. | La restauration ultérieure produit des textes chiffrés inutilisables. | Les sauvegarder ensemble (dans des emplacements sécurisés séparés, mais sans oublier la clé). |
| Supposer que la substitution `${ENV_VAR}` équivaut à un « chiffrement ». | Non — la substitution de variable d'environnement masque simplement la valeur dans le fichier. Si la variable contient du clair, la valeur à l'exécution est en clair. | Coupler la substitution avec `ENC:` (`${OIDC_CLIENT_SECRET}` où la variable contient `ENC:...`) pour un chiffrement au repos de la valeur résolue elle aussi. |

---

## Suite

- [Clé de licence](./license-key.md) — gérée de la même façon qu'un secret, mais avec un rôle différent.
- [Se connecter](./sign-in.md) — le client secret OIDC est le champ chiffré canonique au-delà des mots de passe de base de données.
- [Concepts → Configuration → Secrets chiffrés](../../configuration/encryption-secrets.md) — la référence détaillée.
