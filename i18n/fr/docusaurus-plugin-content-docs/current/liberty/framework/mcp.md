---
title: Connecter Claude (MCP)
description: "Utiliser les outils de l'assistant Liberty Next depuis Claude Desktop, claude.ai ou Claude Code : le point d'accès MCP du serveur, la permission mcp:use, la connexion depuis le client, l'extension Claude Desktop pour un serveur hors d'Internet, les jetons d'accès personnels, ce que le client peut faire et la fin d'un accès."
keywords: [Liberty Next, MCP, Model Context Protocol, Claude, Claude Desktop, Claude Code, connecteur personnalisé, OAuth, connexion, extension, jeton d'accès personnel, mcp:use, assistant IA, outils]
---

# Connecter Claude (MCP)

Les outils de l'[assistant IA](./ai-assistant.md) peuvent répondre à un client externe — Claude Desktop, claude.ai, Claude Code — par le **point d'accès MCP** du serveur, `/mcp`. Le client agit au nom d'un utilisateur de Liberty Next : il reçoit les outils proposés à cet utilisateur dans le panneau de l'assistant, chaque appel passe par les mêmes contrôles de permission et le même périmètre de données, et chaque appel est enregistré.

Trois conditions : le point d'accès activé, la permission `mcp:use`, et un moyen de se connecter — une connexion depuis le client, l'extension Claude Desktop, ou un **jeton d'accès personnel** collé.

Ce qui part chez Anthropic dans ce cas, et ce qui n'y part pas, est décrit dans [Données transmises à Anthropic](./ai-data-sent.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#mcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Profil</text>
  <rect x="240" y="62" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Profil</text>
  <rect x="301" y="62" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="334.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Sécurité</text>
  <rect x="373" y="62" width="100" height="22" rx="5" fill="url(#mcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="423.0" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Jetons d'accès</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="116" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Un jeton d'accès personnel permet à un client externe — Claude, par un connecteur personnalisé —</text>
  <text x="240" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">d'utiliser les outils de l'assistant en votre nom : avec vos permissions et votre périmètre de données.</text>
  <text x="240" y="156" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">URL DU CONNECTEUR</text>
  <rect x="240" y="162" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">https://liberty.example.com/mcp</text>
  <text x="600" y="156" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALABLE (JOURS)</text>
  <rect x="600" y="162" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="176.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <text x="240" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VOTRE JETON — L'EN-TÊTE DE REQUÊTE DU CONNECTEUR : AUTHORIZATION: BEARER &lt;JETON&gt;</text>
  <rect x="240" y="214" width="560" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">7Qd2mVx4…x9Lk</text>
  <rect x="810" y="214" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="837.5" y="228.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <text x="240" y="256" fill="#fb923c" fontSize="9.5" fontFamily="system-ui, sans-serif">Copiez-le maintenant : il n'est affiché qu'une fois et n'est pas conservé. Il expire le 16/02/2027.</text>
  <text x="240" y="278" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Un jeton prend aussi fin quand votre compte est désactivé ou perd la permission,</text>
  <text x="240" y="292" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">et quand vous changez de mot de passe — faites-le si un jeton a fuité.</text>
  <line x1="240" y1="310" x2="960" y2="310" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="322" width="156" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="318.0" y="336.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Extension Claude Desktop</text>
  <rect x="860" y="322" width="100" height="22" rx="5" fill="url(#mcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="910.0" y="336.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Créer un jeton</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Jetons d'accès</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec la permission mcp:use</text>
  <line x1="200" y1="93.0" x2="403" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="156" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="171" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">URL du connecteur</text>
  <text x="30" y="184" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à coller dans Claude</text>
  <line x1="200" y1="173.0" x2="240" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affiché une seule fois</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais conservé par le serveur</text>
  <line x1="200" y1="257.0" x2="240" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Extension Claude Desktop</text>
  <text x="30" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">serveur hors d'Internet</text>
  <line x1="200" y1="333.0" x2="240" y2="333" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Durée de validité</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">90 jours, plafonnée par le serveur</text>
  <line x1="1000" y1="167.0" x2="692" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="208" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="223" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'en-tête de requête</text>
  <text x="1010" y="236" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Authorization: Bearer …</text>
  <line x1="1000" y1="225.0" x2="867" y2="225" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="1000" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un jeton par clic</text>
  <text x="1010" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ni liste, ni révocation</text>
  <line x1="1000" y1="333.0" x2="958" y2="333" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
</svg>

---

## Activer le point d'accès \{#enable\}

Dans **Liberty Next → Administrer → App → Assistant IA** :

| Champ | Défaut | Description |
|---|---|---|
| **Point d'accès MCP (/mcp)** | Désactivé | Le serveur répond sur `/mcp`. Appliqué à l'enregistrement, sans redémarrage. |
| **Jeton d'accès personnel : durée maximale (jours)** | 366 | La plus longue validité qu'un utilisateur peut demander pour un jeton, et la durée d'une connexion depuis un client avant une nouvelle autorisation. |

Derrière un proxy inverse, renseigner aussi **Adresse publique** (même page, *Serveur*) avec l'adresse à laquelle les utilisateurs joignent le serveur : les adresses publiées pour la connexion sont construites à partir d'elle.

Le point d'accès demande le complément `mcp` du paquet (`pip install "liberty-next[mcp]"`) ; `liberty-next[all]` et l'image Docker le contiennent.

---

## Accorder la permission \{#permission\}

Dans **Liberty Next → Administrer → Accès**, donner au rôle la règle **Assistant IA → Outils IA depuis un client externe (MCP) — créer un jeton d'accès personnel** (`mcp:use`), dans **Au-delà des menus**. L'utilisateur voit alors l'onglet **Jetons d'accès** de son profil ; un superutilisateur le voit toujours.

`mcp:use` ne fait qu'ouvrir le point d'accès : ce que le client atteint dépend toujours des autres permissions de l'utilisateur — voir [Qui peut l'utiliser, et sur quoi](./ai-assistant.md#access).

---

## Connecter le client \{#connect\}

| Moyen | Pour | Étapes |
|---|---|---|
| **Connexion depuis le client** | Un connecteur personnalisé dans Claude Desktop ou claude.ai. Le connecteur est appelé depuis les serveurs d'Anthropic : le serveur Liberty doit être accessible depuis Internet. | Donner au connecteur l'adresse de `/mcp` seule. Le navigateur ouvre Liberty : l'utilisateur se connecte comme d'habitude (mot de passe ou SSO), puis, sur la page **Autoriser l'accès** — *le client demande à utiliser l'application en tant que l'utilisateur* — clique sur **Autoriser** (ou **Refuser**). Rien à créer, rien à coller. |
| **Extension Claude Desktop** | Un serveur qui n'est pas sur Internet : adresse interne, VPN. | Dans l'onglet **Jetons d'accès** du profil, **Extension Claude Desktop** télécharge `liberty.mcpb`. Ouvrir le fichier avec Claude Desktop et y coller un jeton créé dans le même onglet — voir [plus bas](#extension). |
| **Jeton collé** | Claude Code, un script. | [Créer un jeton](#token) et le donner au client dans l'en-tête de requête `Authorization: Bearer <jeton>`, avec l'**URL du connecteur** de l'onglet — `https://<serveur>/mcp`. |

| Réponse | Signification |
|---|---|
| `404` | Le point d'accès est désactivé. |
| `401` | Pas de jeton, ou un jeton invalide ou arrivé à son terme. |

---

## Créer un jeton \{#token\}

L'utilisateur ouvre son profil — son nom dans la barre du haut — puis **Jetons d'accès** :

1. **Valable (jours)** : 90 par défaut. Une durée supérieure au maximum du serveur est ramenée à ce maximum ; la date d'expiration affichée avec le jeton est celle qui s'applique.
2. **Créer un jeton**.
3. Copier le jeton (**Copier**) : *il n'est affiché qu'une fois et n'est pas conservé*.

L'onglet donne aussi l'**URL du connecteur**, l'adresse du serveur suivie de `/mcp`.

---

## L'extension Claude Desktop \{#extension\}

L'extension exécute un petit relais sur le poste de l'utilisateur : il transmet les messages de Claude à `/mcp` avec le jeton d'accès personnel de l'utilisateur ; il suffit donc que le serveur soit joignable depuis ce poste. Le fichier est construit au téléchargement avec l'adresse du serveur déjà renseignée, et ne contient aucun secret. Rien à installer : Claude Desktop fournit ce dont le relais a besoin.

| Réglage dans Claude Desktop | Contenu |
|---|---|
| **Liberty address** | L'adresse du serveur, terminée par `/mcp` — déjà renseignée. |
| **Personal access token** | Un jeton créé dans l'onglet **Jetons d'accès** du profil. |
| **Accept an internal certificate** | À activer uniquement quand le serveur utilise un certificat auto-signé ou d'entreprise. |

---

## Ce que le client peut faire \{#tools\}

- Le client reçoit les outils proposés à l'utilisateur dans le panneau de l'assistant, avec les mêmes descriptions ; un outil que l'utilisateur ne peut pas utiliser n'est pas listé.
- Chaque appel vérifie les permissions de l'utilisateur et applique son [périmètre de données](./build/secure/roles-and-permissions.md#data-scope), comme dans le panneau ; les colonnes que l'installation [marque comme sensibles](./ai-data-sent.md#sensitive) sont écartées de la même façon.
- Les outils dont le résultat est une carte du panneau ne sont pas proposés : les propositions de construction et les notes.
- Un outil qui modifie quelque chose — l'enregistrement d'une analyse ou d'un tableau de bord de l'explorateur de données, [l'écriture d'un enregistrement ou le lancement d'une action par un écran](./ai-assistant.md#write) — le signale au client, qui demande l'accord de son utilisateur avant de l'appeler.
- Un jeton d'accès personnel n'ouvre que le point d'accès MCP : le reste de l'API le refuse.

---

## Fin d'un accès \{#end\}

Le compte est relu à chaque appel : un accès porte les droits de l'utilisateur à cet instant, jamais davantage. Un jeton ou une connexion prend fin :

- à sa date d'expiration — une connexion dure la **durée maximale** réglée plus haut, puis l'utilisateur autorise de nouveau le client ;
- quand le compte est désactivé, ou perd `mcp:use` ;
- quand le mot de passe du compte change.

Rien n'est conservé sur le serveur pour ces accès : il n'y a donc ni liste ni bouton de révocation. **Changer le mot de passe met fin à tous les accès du compte** ; c'est la marche à suivre quand un jeton a fuité.

---

## Ce qui est enregistré \{#usage\}

Chaque appel figure dans l'enregistrement d'usage, avec le modèle `mcp` : l'utilisateur, l'outil, ce sur quoi il a été appelé, son échec éventuel, sa taille et sa durée — jamais une ligne renvoyée. Voir [Surveillance → Usage de l'IA](../monitoring/ai-usage.md).

---

## Conseils \{#tips\}

- Préférer la connexion depuis le client pour un serveur sur Internet, l'extension pour un serveur interne : aucune des deux ne demande de manipuler un secret plus d'une fois.
- Accorder `mcp:use` aux rôles qui utilisent déjà l'assistant dans l'application ; les réponses dépendent des mêmes permissions `sql:` et `explorer:`.
- Servir le point d'accès en HTTPS uniquement : le jeton circule dans un en-tête de requête.
