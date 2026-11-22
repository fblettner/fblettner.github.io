---
title: Connecter Claude (MCP)
description: "Utiliser les outils de l'assistant Liberty Next depuis Claude Desktop, claude.ai ou Claude Code : le point d'accès MCP du serveur, la permission mcp:use, la connexion depuis le client, l'extension Claude Desktop pour un serveur hors d'Internet, les jetons d'accès personnels, ce que le client peut faire et la fin d'un accès. L'envoi d'un fichier pour une tâche, les modifications en MCP sous leur propre réglage, et la fin d'un accès."
keywords: [Liberty Next, MCP, Model Context Protocol, Claude, Claude Desktop, Claude Code, connecteur personnalisé, OAuth, connexion, extension, jeton d'accès personnel, mcp:use, assistant IA, outils]
---

# Connecter Claude (MCP)

Les outils de l'[assistant IA](./ai-assistant.md) peuvent répondre à un client externe — Claude Desktop, claude.ai, Claude Code — par le **point d'accès MCP** du serveur, `/mcp`. Le client agit au nom d'un utilisateur de Liberty Next : il reçoit les outils proposés à cet utilisateur dans le panneau de l'assistant, chaque appel passe par les mêmes contrôles de permission et le même périmètre de données, et chaque appel est enregistré.

Trois conditions : le point d'accès activé, la permission `mcp:use`, et un moyen de se connecter — une connexion depuis le client, l'extension Claude Desktop, ou un **jeton d'accès personnel** collé.

Ce qui part chez Anthropic dans ce cas, et ce qui n'y part pas, est décrit dans [Données transmises à Anthropic](./ai-data-sent.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 544" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="504" rx="14" fill="url(#mcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <circle cx="300" cy="54" r="18" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="300" y="59" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <text x="328" y="58" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">John Doe</text>
  <rect x="400" y="47" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="420.0" y="58.2" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">admin</text>
  <rect x="898" y="42" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.0" y="57.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="260" y1="86" x2="940" y2="86" stroke="#1f2937" strokeWidth="1"/>
  <text x="284" y="106" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Profil</text>
  <text x="347.6" y="106" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sécurité</text>
  <text x="422.40000000000003" y="106" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jetons d'accès</text>
  <line x1="416.40000000000003" y1="116" x2="506.80000000000007" y2="116" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="260" y1="117" x2="940" y2="117" stroke="#1f2937" strokeWidth="1"/>
  <rect x="280" y="130" width="640" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="147" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Un jeton d'accès personnel permet à un client externe — Claude, par un connecteur personnalisé —</text>
  <text x="292" y="161" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">d'utiliser les outils de l'assistant en votre nom : avec vos permissions et votre périmètre, jamais plus.</text>
  <text x="280" y="192" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">URL du connecteur</text>
  <text x="920" y="192" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">https://liberty.example.com/mcp</text>
  <text x="280" y="214" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VOTRE JETON — L'EN-TÊTE DE REQUÊTE DU CONNECTEUR : AUTHORIZATION: BEARER &lt;JETON&gt;</text>
  <rect x="280" y="220" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="235.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">eyJhbGciOiJIUzI1NiJ9…x9Lk</text>
  <rect x="280" y="252" width="640" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="268" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Copiez-le maintenant : il n'est affiché qu'une fois et n'est pas conservé. Il expire le 20/02/2027.</text>
  <rect x="280" y="284" width="60" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="310.0" y="297.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Copier</text>
  <rect x="280" y="316" width="640" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Un jeton prend aussi fin quand votre compte est désactivé ou perd la permission, et quand vous changez</text>
  <text x="292" y="347" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">de mot de passe — à faire si un jeton a fuité. « Mettre fin à l'accès » arrête un client connecté.</text>
  <text x="280" y="374" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNECTÉS PAR AUTHENTIFICATION</text>
  <text x="280" y="397" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Claude · dernier usage le 19/11/2026</text>
  <rect x="803" y="385" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.5" y="398.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Mettre fin à l'accès</text>
  <text x="280" y="425" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Claude Code · dernier usage le 17/11/2026</text>
  <rect x="803" y="413" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.5" y="426.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Mettre fin à l'accès</text>
  <rect x="280" y="444" width="145" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="458.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Extension Claude Desktop</text>
  <line x1="260" y1="480" x2="940" y2="480" stroke="#1f2937" strokeWidth="1"/>
  <rect x="860" y="490" width="60" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="890.0" y="505.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="20" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Jetons d'accès</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec la permission mcp:use</text>
  <line x1="220" y1="109.0" x2="416.40000000000003" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="176" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">URL du connecteur</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à donner à Claude</text>
  <line x1="220" y1="193.0" x2="280" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="236" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affiché une fois</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais conservé sur le serveur</text>
  <line x1="220" y1="253.0" x2="280" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="20" y="438" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="453" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Extension Claude Desktop</text>
  <text x="30" y="466" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nommée d'après son instance</text>
  <line x1="220" y1="455.0" x2="280" y2="455" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="980" y="214" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="229" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'en-tête de requête</text>
  <text x="990" y="242" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Authorization: Bearer …</text>
  <line x1="980" y1="231.0" x2="920" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="980" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients connectés</text>
  <text x="990" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un arrêté, les autres gardés</text>
  <line x1="980" y1="307.0" x2="920" y2="397" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
  <rect x="980" y="476" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="491" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant le jeton : Valable (jours)</text>
  <text x="990" y="504" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis Créer un jeton</text>
  <line x1="980" y1="493.0" x2="920" y2="502" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mcp-arrow)"/>
</svg>

---

## Activer le point d'accès \{#enable\}

Dans **Liberty Next → Administrer → App → Assistant IA** :

| Champ | Défaut | Description |
|---|---|---|
| **Point d'accès MCP (/mcp)** | Désactivé | Le serveur répond sur `/mcp`. Appliqué à l'enregistrement, sans redémarrage. |
| **Autoriser les modifications en MCP** | Désactivé | Désactivé : un client externe se limite à la lecture. Activé : les outils qui enregistrent lui sont proposés — voir [Modifications](#changes). Lu à chaque requête. |
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
| **Connexion depuis le client** | Un connecteur personnalisé dans Claude Desktop ou claude.ai. Le connecteur est appelé depuis les serveurs d'Anthropic : le serveur Liberty doit être accessible depuis Internet. | Donner au connecteur l'adresse de `/mcp` seule. Le navigateur ouvre Liberty : l'utilisateur se connecte comme d'habitude (mot de passe ou SSO), puis, sur la page **Autoriser l'accès** — *le client demande à utiliser l'application en tant que l'utilisateur* — clique sur **Autoriser** (ou **Refuser**). La page indique si le serveur autorise le client à faire des modifications, et la durée de l'accès en jours. Rien à créer, rien à coller. |
| **Extension Claude Desktop** | Un serveur qui n'est pas sur Internet : adresse interne, VPN. | Dans l'onglet **Jetons d'accès** du profil, **Extension Claude Desktop** télécharge un fichier `.mcpb` au nom du serveur. Ouvrir le fichier avec Claude Desktop et y coller un jeton créé dans le même onglet — voir [plus bas](#extension). |
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
3. Le jeton remplace le champ de durée, avec sa date d'expiration : le copier (**Copier**) — *il n'est affiché qu'une fois et n'est pas conservé*. **Fermer** quitte l'onglet ; à la visite suivante, un nouveau jeton peut être créé.

L'onglet donne aussi l'**URL du connecteur**, l'adresse du serveur suivie de `/mcp`.

---

## L'extension Claude Desktop \{#extension\}

L'extension exécute un petit relais sur le poste de l'utilisateur : il transmet les messages de Claude à `/mcp` avec le jeton d'accès personnel de l'utilisateur ; il suffit donc que le serveur soit joignable depuis ce poste. Le fichier est construit au téléchargement avec l'adresse du serveur déjà renseignée, et ne contient aucun secret. Rien à installer : Claude Desktop fournit ce dont le relais a besoin.

| Réglage dans Claude Desktop | Contenu |
|---|---|
| **Adresse de Liberty** | L'adresse du serveur, terminée par `/mcp` — déjà renseignée. |
| **Jeton d'accès personnel** | Un jeton créé dans l'onglet **Jetons d'accès** du profil. |
| **Dossier de fichiers** | Facultatif. Le dossier d'où Claude peut envoyer un fichier, pour une tâche qui en charge un — voir [plus bas](#files). |
| **Accepter un certificat interne** | À activer uniquement quand le serveur utilise un certificat auto-signé ou d'entreprise. |

Les réglages sont en français quand l'extension est téléchargée depuis une interface en français, en anglais sinon.

**Plusieurs serveurs dans un même Claude Desktop.** Le nom de l'extension porte celui de son instance — l'**Environnement** de l'installation (Administrer → App → Serveur) et l'hôte de son adresse : *Liberty Next – Test · liberty-test.example.com*. Les extensions d'un serveur de production et d'un serveur de test, ou de deux clients, s'installent côte à côte, chacune avec son jeton. Le serveur précise aussi à Claude l'instance qu'il représente : une réponse ou une modification nomme l'instance concernée.

### Envoyer un fichier pour une tâche \{#files\}

Avec un **Dossier de fichiers**, l'extension propose deux outils exécutés sur le poste de l'utilisateur : l'un liste les classeurs et les fichiers délimités de ce dossier — `.xlsx`, `.xlsm`, `.csv`, `.txt`, `.tsv` —, l'autre en envoie un à Liberty pour une tâche. Le fichier arrive dans la zone de dépôt de la tâche, comme depuis sa page, avec la même limite de taille ; le dépôt ne lance rien, et `job_run` désigne ensuite le fichier.

L'envoi d'un fichier demande ce que demande l'exécution de la tâche : les réglages **Outils d'écriture** et **Autoriser les modifications en MCP**, `ai:write` et `job:<id>`. Un connecteur ouvert par connexion depuis le client n'a pas accès au disque de l'utilisateur : le fichier se charge alors depuis la page de la tâche.

---

## Ce que le client peut faire \{#tools\}

- Le client reçoit les outils proposés à l'utilisateur dans le panneau de l'assistant, avec les mêmes descriptions ; un outil que l'utilisateur ne peut pas utiliser n'est pas listé.
- Chaque appel vérifie les permissions de l'utilisateur et applique son [périmètre de données](./build/secure/roles-and-permissions.md#data-scope), comme dans le panneau ; les colonnes que l'installation [marque comme sensibles](./ai-data-sent.md#sensitive) sont écartées de la même façon.
- Les outils dont le résultat est une carte du panneau ne sont pas proposés : les propositions de construction et les notes.
- Un jeton d'accès personnel n'ouvre que le point d'accès MCP : le reste de l'API le refuse.

---

## Modifications en MCP \{#changes\}

Dans le panneau, une modification est une carte que l'utilisateur applique. En MCP, le seul garde-fou est l'approbation du client, que son utilisateur peut régler sur *toujours autoriser* : un administrateur décide donc si des modifications peuvent venir d'un client externe.

| **Autoriser les modifications en MCP** | Le client |
|---|---|
| Désactivé (par défaut) | Se limite à la lecture. Les outils qui enregistrent ne sont pas listés ; appelés malgré tout, ils répondent que les modifications en MCP sont désactivées sur ce serveur. |
| Activé | Reçoit aussi les outils qui enregistrent : une analyse ou un tableau de bord de l'explorateur de données, [un enregistrement, une action ou une tâche par les outils d'écriture](./ai-assistant.md#write). Chacun demande toujours son propre réglage et les permissions de l'utilisateur, et signale au client qu'il modifie quelque chose — le client demande l'accord de son utilisateur avant de l'appeler. |

Chaque modification faite par ce moyen figure dans [Surveillance → Usage de l'IA](../monitoring/ai-usage.md#changes).

---

## Fin d'un accès \{#end\}

Le compte est relu à chaque appel : un accès porte les droits de l'utilisateur à cet instant, jamais davantage.

| Accès | Prend fin |
|---|---|
| **Une connexion depuis un client** | Quand son utilisateur y met fin : l'onglet **Jetons d'accès** du profil liste les clients sous **Connectés par authentification** — le nom du client et son dernier usage — et **Mettre fin à l'accès** arrête l'un d'eux dès son appel suivant, sans toucher aux autres. Sinon au terme de la **durée maximale** réglée plus haut ; l'utilisateur autorise alors de nouveau le client. |
| **Un jeton collé** | À sa date d'expiration. Il n'est pas conservé, donc pas listé. |
| **Les deux** | Quand le compte est désactivé ou perd `mcp:use`, et quand le mot de passe du compte change. |

**Changer le mot de passe met fin à tous les accès du compte** — jetons et connexions ; c'est la marche à suivre quand un jeton a fuité.

Un superutilisateur lit les clients de tous les utilisateurs par `GET /oauth/grants?everyone=1`.

---

## Ce qui est enregistré \{#usage\}

Chaque appel figure dans l'enregistrement d'usage, sous le canal *Client externe (MCP)* : l'utilisateur, l'outil, ce sur quoi il a été appelé, son échec éventuel, sa taille et sa durée — jamais une ligne renvoyée ni une valeur écrite. Voir [Surveillance → Usage de l'IA](../monitoring/ai-usage.md).

---

## Conseils \{#tips\}

- Préférer la connexion depuis le client pour un serveur sur Internet, l'extension pour un serveur interne : aucune des deux ne demande de manipuler un secret plus d'une fois.
- Accorder `mcp:use` aux rôles qui utilisent déjà l'assistant dans l'application ; les réponses dépendent des mêmes permissions `sql:` et `explorer:`.
- Servir le point d'accès en HTTPS uniquement : le jeton circule dans un en-tête de requête.
