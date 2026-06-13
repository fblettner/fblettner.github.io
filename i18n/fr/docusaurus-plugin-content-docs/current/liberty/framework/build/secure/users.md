---
title: Utilisateurs
description: "L'onglet Paramètres → Accès → Utilisateurs — ajouter des utilisateurs locaux, gérer les utilisateurs OIDC arrivés à la première connexion, attribuer des rôles, basculer is_active et is_superuser, réinitialiser les mots de passe."
keywords: [Liberty Framework, utilisateurs, AccessBuilder, utilisateur local, utilisateur OIDC, mot de passe, is_active, is_superuser, attribution de rôles]
---

# Utilisateurs

Un **utilisateur** dans Liberty est l'identité qui se connecte et porte des rôles. L'onglet Paramètres → Accès → Utilisateurs est l'endroit où créer les utilisateurs locaux, voir les utilisateurs OIDC qui se sont connectés au moins une fois, attribuer les rôles et basculer les drapeaux actif et superutilisateur.

La même interface gère les deux backends d'identité (TOML / DB) et les deux sources d'identité (locale / OIDC). Les différences portent sur **les champs modifiables** : les utilisateurs OIDC n'ont pas de mot de passe (il est chez l'IdP) et leur champ `provider` est en lecture seule.

---

## L'onglet Utilisateurs

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="us-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#us-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Accès</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Utilisateurs</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">🛡 Rôles</text>
  <rect x="880" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="920" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter un utilisateur</text>

  <rect x="40" y="118" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">admin</text>
  <text x="56" y="158" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Admin User · admin@corp.local · local</text>
  <rect x="800" y="130" width="64" height="22" rx="4" fill="rgba(251,146,60,0.18)" stroke="rgba(251,146,60,0.40)"/>
  <text x="832" y="145" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">superutilisateur</text>
  <rect x="870" y="130" width="80" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="910" y="145" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">admin</text>

  <rect x="40" y="182" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="204" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">alice</text>
  <text x="56" y="222" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Alice Martin · alice.martin@corp.local · oidc</text>
  <rect x="800" y="194" width="80" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="840" y="209" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">analyst</text>
  <rect x="886" y="194" width="64" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="918" y="209" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">reporter</text>

  <rect x="40" y="246" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="268" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">bob</text>
  <text x="56" y="286" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Bob Dupont · bob@corp.local · local</text>
  <rect x="828" y="258" width="60" height="22" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.40)"/>
  <text x="858" y="273" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">inactif</text>
  <rect x="894" y="258" width="56" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="922" y="273" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">reader</text>

  <rect x="40" y="310" width="920" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="500" y="338" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Cliquer sur une ligne pour ouvrir l'éditeur d'utilisateur.</text>
</svg>

Chaque carte affiche le nom d'utilisateur (monospace), le nom complet, le courriel, le fournisseur (local / oidc), les pastilles de statut et les rôles attribués.

| Pastille | Signification |
|---|---|
| **superutilisateur** (orange) | `is_superuser = true` — passe outre chaque vérification de permission. |
| **inactif** (rouge) | `is_active = false` — l'utilisateur ne peut pas se connecter. Ses sessions existantes s'arrêtent au prochain rafraîchissement de jeton. |
| **Aucun rôle** (atténué) | Aucun rôle attribué et pas de superutilisateur — l'utilisateur se connecte mais ne voit rien. |
| **Noms de rôles** (violet) | Chaque rôle attribué, une pastille par rôle. |

---

## Ajouter un utilisateur local

Cliquer sur **＋ Ajouter un utilisateur**. L'éditeur d'utilisateur s'ouvre avec chaque champ vide.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ue-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#ue-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un utilisateur</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Nom d'utilisateur *</text>
  <rect x="200" y="80" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="96" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">alice</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Nom complet</text>
  <text x="40" y="138" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(optionnel)</text>
  <rect x="200" y="116" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="132" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Alice Martin</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Courriel</text>
  <text x="40" y="174" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(optionnel)</text>
  <rect x="200" y="152" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="168" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">alice@corp.local</text>

  <text x="40" y="196" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Mot de passe *</text>
  <text x="40" y="210" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(8 caractères ou +)</text>
  <rect x="200" y="188" width="500" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="204" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••</text>

  <text x="40" y="240" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Rôles</text>
  <rect x="200" y="224" width="500" height="46" rx="6" fill="rgba(0,0,0,0.30)" stroke="#334155"/>
  <rect x="210" y="232" width="64" height="20" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="242" y="246" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">analyst ✕</text>
  <rect x="282" y="232" width="64" height="20" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="314" y="246" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">reporter ✕</text>
  <rect x="354" y="232" width="160" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="364" y="246" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sélectionnez un rôle…</text>

  <text x="40" y="294" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Actif</text>
  <rect x="200" y="282" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="297" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="296" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">l'utilisateur peut se connecter</text>

  <text x="40" y="326" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Superutilisateur</text>
  <rect x="200" y="314" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="234" y="328" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">passe outre chaque vérification de permission</text>

  <line x1="20" y1="364" x2="980" y2="364" stroke="#1f2937"/>
  <rect x="780" y="380" width="80" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="400" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="868" y="380" width="80" height="32" rx="6" fill="#4a9eff"/>
  <text x="908" y="400" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
</svg>

### Champs

| Champ | Requis | Notes |
|---|---|---|
| **Nom d'utilisateur** | oui | Lettres, chiffres, soulignés, points et tirets. Sert d'identifiant de connexion, de sujet JWT et d'identité d'audit. **Immuable** après création. |
| **Nom complet** | non | Le nom d'affichage montré dans les en-têtes et les colonnes d'audit. |
| **Courriel** | non | Adresse destinataire pour les invitations, la réinitialisation de mot de passe (quand implémentée) et les routes de notification. |
| **Mot de passe** | oui (pour les nouveaux utilisateurs) | Au moins 8 caractères. Enregistré sous forme de hachage Argon2id, jamais relisible. Laisser vide en modification pour conserver le mot de passe actuel. |
| **Rôles** | non | Sélecteur de pastilles — taper ou choisir dans la liste. La liste contient chaque rôle configuré sous l'onglet Rôles. |
| **Actif** | oui (activé par défaut) | Désactivé, l'utilisateur ne peut pas se connecter ; les sessions existantes s'arrêtent au prochain rafraîchissement de jeton. |
| **Superutilisateur** | non | Activé, passe outre chaque vérification de permission. À utiliser avec parcimonie. |

Cliquer sur **Enregistrer** — l'utilisateur est créé et la fenêtre se ferme. Le nouvel utilisateur apparaît en tête de liste.

### Endpoints en coulisses

| Action | Endpoint |
|---|---|
| Création | `POST /admin/access/users` |
| Mise à jour | `PATCH /admin/access/users/{username}` |
| Changement de mot de passe | `POST /admin/access/users/{username}/password` |

Le backend TOML écrit dans `config/auth.toml` de façon atomique ; le backend DB commit dans `ly2_users` / `ly2_user_roles`. Dans les deux cas, le changement prend effet immédiatement — l'utilisateur peut se connecter tout de suite avec le nouveau mot de passe.

---

## Modifier un utilisateur existant

Cliquer sur n'importe quelle ligne d'utilisateur pour ouvrir l'éditeur avec ses valeurs courantes :

| Champ | Modifiable | Notes |
|---|---|---|
| **Nom d'utilisateur** | non | Fixé à la création. |
| **Nom complet** / **Courriel** | oui | Mise à jour libre. |
| **Mot de passe** | oui (utilisateurs locaux uniquement) | Laisser vide pour conserver le mot de passe actuel. Saisir un nouveau (8 caractères ou +) le définit à l'enregistrement. |
| **Rôles** | oui | Ajouter / retirer des pastilles. |
| **Actif** | oui | Basculer pour désactiver. |
| **Superutilisateur** | oui | Basculer pour accorder / révoquer le statut superutilisateur. |

Les enregistrements passent par `PATCH /admin/access/users/{username}` pour les mises à jour de propriétés et par `POST /admin/access/users/{username}/password` si un nouveau mot de passe a été saisi.

:::tip[Quand l'utilisateur est connecté]
Les changements n'interrompent pas la session courante. Les nouveaux rôles / le drapeau de désactivation / le mot de passe prennent effet au prochain **rafraîchissement** (dans le TTL du jeton d'accès — par défaut 1 heure) ou à la **déconnexion + reconnexion**.
:::

---

## Utilisateurs OIDC — les différences

Les utilisateurs OIDC arrivent dans la liste des Utilisateurs **après leur première connexion** — Liberty les crée automatiquement avec `provider = "oidc"`. L'éditeur pour un utilisateur OIDC a la même apparence, mais :

| Champ | Modifiable pour OIDC ? | Notes |
|---|---|---|
| **Nom d'utilisateur** | non | Identique au local. |
| **Nom complet** / **Courriel** | techniquement oui, mais… | À chaque connexion OIDC, ces champs sont **rafraîchis depuis les claims de l'IdP**. Les modifications manuelles sont écrasées. Les modifier au niveau de l'IdP. |
| **Mot de passe** | non | L'IdP détient le mot de passe. Le champ est désactivé ou rejeté avec HTTP 400. |
| **Rôles** | oui | C'est la raison principale qui pousse les opérateurs à visiter les utilisateurs OIDC — pour attribuer les rôles. |
| **Actif** | oui | Désactivé, la connexion est refusée même avec des jetons OIDC valides. |
| **Superutilisateur** | oui | Basculer pour accorder le contournement. |

La séquence d'onboarding standard :

1. La nouvelle recrue se connecte via OIDC pour la première fois.
2. Elle arrive avec **aucun rôle** → elle voit une application vide.
3. Elle prévient son administrateur : « je suis entré mais je ne vois rien ».
4. L'administrateur ouvre *Paramètres → Accès → Utilisateurs*, la retrouve, attribue les bons rôles, enregistre.
5. L'utilisatrice rafraîchit la page (ou se déconnecte + reconnecte) et dispose alors de ses accès.

Pour les installations qui veulent pré-créer des utilisateurs OIDC avec leurs rôles déjà attachés, des scripts peuvent appeler `POST /admin/access/users` avec `provider = "oidc"` et le `provider_subject` attendu (le claim `sub`). À la première connexion, le framework retrouve l'utilisateur pré-créé et l'utilise. Les installations standard sautent cette étape et attribuent les rôles après la première connexion.

---

## Désactiver ou supprimer

Deux façons d'écarter un utilisateur :

| Option | Effet | Quand |
|---|---|---|
| Basculer **Actif** sur off | L'utilisateur ne peut pas se connecter. Sa session courante continue jusqu'à expiration du jeton d'accès (par défaut 1 h), puis le rafraîchissement échoue. Rôles, historique et piste d'audit conservés. | Maintenance, congé, compte suspendu. |
| **🗑 Supprimer** (action par ligne, avec confirmation) | L'utilisateur est retiré entièrement. Son historique est conservé (les lignes d'audit sont immuables), mais le nom d'utilisateur peut être réutilisé. | Départ, droit à l'effacement RGPD. |

La désactivation est **réversible en un clic**. La suppression est définitive — un utilisateur qui se reconnecte (OIDC) verrait son compte recréé automatiquement avec le même nom d'utilisateur mais un nouvel `id` et sans report de rôles.

---

## Ce que l'on fait concrètement — flux types

### Onboarder une recrue locale

1. *Paramètres → Accès → Utilisateurs → ＋ Ajouter un utilisateur*.
2. Nom d'utilisateur = identifiant d'entreprise, mot de passe = une chaîne ponctuelle qu'elle changera, courriel = son adresse.
3. Attribuer les rôles selon son équipe (`analyst`, `reporter`, …).
4. Enregistrer.
5. Lui transmettre les identifiants temporaires par le canal habituel de l'entreprise.
6. Elle se connecte, atteint l'assistant IA ou le flux de changement de mot de passe pour définir le sien.

### Onboarder une recrue OIDC

1. Elle se connecte via OIDC la première fois — Liberty crée automatiquement le compte.
2. Elle signale qu'elle n'a aucun accès.
3. *Paramètres → Accès → Utilisateurs*, la retrouver, attribuer les rôles, enregistrer.
4. Elle rafraîchit → elle est dedans.

### Changer le mot de passe d'un utilisateur (en tant qu'administrateur)

1. *Paramètres → Accès → Utilisateurs*, cliquer sur l'utilisateur.
2. Saisir le nouveau mot de passe dans le champ **Mot de passe** (8 caractères ou +).
3. Enregistrer.
4. Le prévenir. Il se connecte avec le nouveau mot de passe ; sa session existante continue de fonctionner jusqu'à expiration du jeton d'accès.

### Révoquer un compte immédiatement

1. Basculer **Actif** sur off et enregistrer.
2. Si le délai pouvant aller jusqu'à 1 heure avant l'expiration du jeton d'accès courant est inacceptable, faire tourner le secret de signature JWT (`[auth] jwt_secret` dans `app.toml` ou variable d'environnement `LIBERTY_JWT_SECRET`) et redémarrer. Chaque jeton existant est invalidé — un coup de marteau lourd, mais la seule révocation **immédiate** offerte par Liberty.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Utilisateur OIDC sans rôles après connexion. | Comportement attendu — l'opérateur n'en a pas encore attribué. | Ouvrir *Paramètres → Accès → Utilisateurs*, attribuer les rôles. |
| Modifier le courriel d'un utilisateur OIDC revient à la connexion suivante. | Le claim de l'IdP l'emporte ; le framework rafraîchit depuis le dernier jeton. | Modifier le courriel au niveau de l'IdP. |
| Tenter de définir un mot de passe pour un utilisateur OIDC. | Le backend rejette avec 400. | Les utilisateurs OIDC n'ont pas de mot de passe local — ils se connectent via le fournisseur. |
| Changer le rôle d'un utilisateur ne prend pas effet immédiatement. | Le JWT de l'utilisateur contient toujours les anciens rôles. | Il rafraîchit (ou se déconnecte + reconnecte) — dans le TTL du jeton d'accès, les nouveaux rôles s'appliquent. |
| Supprimer et recréer un utilisateur pour « le réinitialiser ». | Son historique d'audit se détache (référence désormais un nom d'utilisateur supprimé). | Utiliser la désactivation + réactivation ; ne supprimer que si l'utilisateur est vraiment parti. |
| Passer un utilisateur en superutilisateur pour corriger un manque de permission. | Cela fonctionne, mais cela passe outre chaque vérification — y compris celles qu'il ne devrait pas contourner. | Ajouter plutôt la permission manquante à l'un de ses rôles. |

---

## Suite

- [Rôles et permissions](./roles-and-permissions.md) — ce qu'il faut attribuer une fois l'utilisateur créé.
- [Se connecter](./sign-in.md) — comment les utilisateurs s'authentifient réellement.
- [Secrets chiffrés](./encrypted-secrets.md) — le switch 🔒 pour les identifiants ailleurs dans le framework.
