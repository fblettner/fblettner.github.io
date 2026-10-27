---
title: Secrets chiffrés
description: "Comment Liberty Next stocke les mots de passe des pools, les identifiants d'API, la clé de licence, la clé de l'IA, le secret client OIDC et le mot de passe SMTP : chiffrés en valeurs ENC: à chaque enregistrement depuis les Paramètres, avec la clé maître de l'installation."
keywords: [Liberty Next, secrets chiffrés, "ENC:", clé maître, mot de passe de pool, jeton d'API, Paramètres, liberty-crypto]
---

# Secrets chiffrés

Chaque champ secret des Paramètres est chiffré à l'enregistrement et écrit dans le fichier de configuration sous la forme `ENC:…`. Le serveur le déchiffre au chargement du fichier, avec la **clé maître** de l'installation.

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sec-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sec-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sec-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="260" rx="14" fill="url(#sec-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="250" y="90" width="200" height="70" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="350.0" y="122.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Champ des Paramètres</text>
  <text x="350.0" y="137.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">password ••••••• 👁</text>
  <rect x="510" y="90" width="180" height="70" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="600.0" y="122.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Chiffré</text>
  <text x="600.0" y="137.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">AES-256-GCM, clé maître</text>
  <rect x="750" y="90" width="200" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="850.0" y="122.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistré</text>
  <text x="850.0" y="137.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ENC:Mq6vNg…2z==</text>
  <line x1="450" y1="125" x2="510" y2="125" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sec-flow)"/>
  <line x1="690" y1="125" x2="750" y2="125" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sec-flow)"/>
  <rect x="510" y="200" width="180" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="600.0" y="227.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Démarrage du serveur</text>
  <text x="600.0" y="242.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">déchiffre avec la clé</text>
  <line x1="850" y1="160" x2="690" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#sec-flow)"/>
  <rect x="250" y="200" width="200" height="60" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="350.0" y="227.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_MASTER_KEY</text>
  <text x="350.0" y="242.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">environnement</text>
  <line x1="450" y1="230" x2="510" y2="230" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sec-flow)"/>
  <text x="600" y="60" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Mots de passe des pools · identifiants API · clé de licence · clé IA · secret OIDC · mot de passe SMTP</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saisie masquée</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'œil l'affiche</text>
  <line x1="210" y1="117.0" x2="250" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sec-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Valeur ENC:</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais en clair</text>
  <line x1="1000" y1="117.0" x2="950" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sec-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clé maître</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copie hors du serveur</text>
  <line x1="210" y1="277.0" x2="250" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sec-arrow)"/>
</svg>

| Champ | Paramètres |
|---|---|
| Mot de passe d'un pool | Paramètres → Pools |
| Identifiants d'un connecteur API (mot de passe, jeton, secret client) | Paramètres → Connecteurs |
| Clé de licence, clé d'API Anthropic, secret client OIDC, mot de passe SMTP | Paramètres → App |

Un champ secret est une saisie masquée avec un œil pour en afficher le contenu. Rien à activer : une valeur enregistrée depuis les Paramètres est toujours chiffrée, et l'enregistrement est refusé quand le serveur n'a pas de clé maître.

Pour fournir un secret par l'environnement, écrire `${VARIABLE}` dans le fichier ; pour écrire une valeur `ENC:` à la main, utiliser `liberty-crypto encrypt`. Les détails — la clé, sa dérivation, les secrets `<NOM>_FILE` — se trouvent dans [Chiffrement et secrets](../../configuration/encryption-secrets.md).

:::warning[La clé maître]
Garder une copie de la clé maître hors du serveur et ne jamais la changer sur une installation existante : toutes les valeurs `ENC:` deviendraient illisibles. `./liberty doctor` vérifie qu'elle déchiffre chaque mot de passe de pool.
:::
