---
title: Données transmises à Anthropic
description: "Ce que Liberty Next transmet à Anthropic et ce qu'il ne transmet jamais : l'assistant IA (consignes, contexte de page, notes, conversation, résultats d'outils, fichiers joints, avec la clé d'API de l'installation) et Claude connecté en MCP (Liberty se limite à répondre aux appels d'outils). L'indicateur Sensitive et le réglage qui écarte les colonnes marquées, ce qui reste sur le serveur, et les réglages qui en décident."
keywords: [Liberty Next, Anthropic, Claude, assistant IA, MCP, données transmises, confidentialité, données sensibles, masquer les données sensibles, données personnelles, dictionnaire, périmètre de données, clé d'API, RGPD]
---

# Données transmises à Anthropic

Liberty Next utilise les modèles d'Anthropic de deux façons, et le trajet des données n'est pas le même :

- l'**[assistant IA](./ai-assistant.md)** — le serveur appelle l'API d'Anthropic avec la clé d'API de l'installation ;
- **[Claude connecté en MCP](./mcp.md)** — Liberty n'appelle personne : il répond aux appels d'outils du client Claude de l'utilisateur, et c'est ce client qui échange avec Anthropic, sous le compte Claude de l'utilisateur.

Rien n'est transmis tant que personne ne pose de question : aucun envoi en arrière-plan, aucune télémétrie, aucun autre fournisseur d'IA. Une installation peut aussi désigner ses [données sensibles](#sensitive) et les tenir à l'écart de l'assistant.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="20" y="14" width="1160" height="400" rx="14" fill="url(#lds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="180.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">LE POSTE DE L'UTILISATEUR</text>
  <text x="600.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">LE SERVEUR LIBERTY NEXT</text>
  <text x="1020.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">ANTHROPIC</text>
  <text x="60" y="64" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">1 · L'ASSISTANT IA DE L'APPLICATION</text>
  <rect x="60" y="70" width="240" height="62" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="180.0" y="98.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Panneau de l'assistant</text>
  <text x="180.0" y="113.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">dans le navigateur</text>
  <rect x="480" y="70" width="240" height="62" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="600.0" y="98.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécute les outils</text>
  <text x="600.0" y="113.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">avec les droits de l'utilisateur</text>
  <rect x="900" y="70" width="240" height="62" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="1020.0" y="98.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">API d'Anthropic</text>
  <text x="1020.0" y="113.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">le modèle répond</text>
  <line x1="300" y1="101.0" x2="476" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <line x1="720" y1="101.0" x2="896" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <text x="390.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question, page, fichier</text>
  <text x="810.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question + résultats d'outils</text>
  <text x="810.0" y="116.0" fill="#c084fc" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">avec la clé d'API de l'installation</text>
  <line x1="40" y1="168" x2="1160" y2="168" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">2 · CLAUDE CONNECTÉ AU SERVEUR (MCP)</text>
  <rect x="60" y="204" width="240" height="62" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="180.0" y="232.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Claude Desktop · Claude Code</text>
  <text x="180.0" y="247.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ou un connecteur claude.ai</text>
  <rect x="480" y="204" width="240" height="62" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="600.0" y="232.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Point d'accès MCP /mcp</text>
  <text x="600.0" y="247.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">répond aux appels d'outils, rien d'autre</text>
  <rect x="900" y="204" width="240" height="62" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="1020.0" y="232.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Anthropic</text>
  <text x="1020.0" y="247.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">le compte Claude de l'utilisateur</text>
  <line x1="300" y1="224" x2="476" y2="224" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <line x1="480" y1="248" x2="304" y2="248" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <text x="390.0" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">appel d'outil + jeton personnel</text>
  <text x="390.0" y="262" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">résultat</text>
  <path d="M180.0,266 V300 H1020.0 V271" fill="none" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lds-flow)"/>
  <text x="600.0" y="293" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">la conversation, avec les résultats reçus par le client</text>
  <line x1="728" y1="235.0" x2="892" y2="235.0" stroke="#f87171" strokeWidth="1.2" strokeDasharray="4 4"/>
  <text x="810.0" y="227.0" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">aucun appel</text>
  <line x1="40" y1="338" x2="1160" y2="338" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="362" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jamais transmis, dans les deux cas : mots de passe, jetons, clés d'API et clé de licence.</text>
  <text x="60" y="380" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Un outil ne renvoie que ce qui lui est demandé ; un outil désactivé ne renvoie rien.</text>
</svg>

---

## L'assistant IA \{#assistant\}

Chaque question est envoyée à l'API d'Anthropic avec la **Clé API Anthropic** de **Liberty Next → Administrer → App → Assistant IA**. Une requête contient :

| Transmis | Contenu |
|---|---|
| **Consignes** | Les consignes intégrées, ou l'**Invite système** de l'installation à leur place, et la date du jour. |
| **Liste des outils** | Le nom et la description de chaque outil proposé à cet utilisateur. |
| **Contexte de page** | Ce que l'utilisateur a sous les yeux : l'application, l'écran et sa requête de lecture, les filtres actifs, le nombre de lignes chargées et leurs colonnes, la dernière ligne cliquée. 4 000 caractères au plus ; le **×** de sa pastille en suspend l'envoi. |
| **Notes** | Les notes de l'utilisateur pour l'application, 2 000 caractères au plus. |
| **Conversation** | Les questions et les réponses de la conversation en cours — les 40 derniers messages. |
| **Résultats d'outils** | Ce que chaque outil a lu pour répondre : les lignes d'une requête de lecture (200 par défaut), des chiffres de l'explorateur de données, la description de l'installation (identifiants et libellés — ni données ni SQL), une procédure, le formulaire d'un écran, l'enregistrement avant et après une écriture. Avec les outils qu'une installation active : les tâches, les lignes du journal du serveur et les contrôles d'intégrité (outils d'exploitation, superutilisateurs uniquement), la réponse d'un endpoint d'API (outil API), ce que renvoie un outil propre à une application. Un résultat est coupé à 60 000 caractères. |
| **Fichiers joints** | Une image ou un PDF tels quels ; un classeur (sa première feuille), un CSV ou un fichier texte en texte, coupés à 60 000 caractères. Un fichier reste attaché à sa conversation tant que la page est ouverte, et il est renvoyé avec chacune de ses questions. |

Quand des domaines figurent dans **Domaines autorisés**, Anthropic lit lui-même ces pages web ; Liberty ne transmet rien de plus.

Au cours d'une même question, chaque appel d'outil renvoie les échanges précédents ; Anthropic relit la partie répétée depuis son cache pendant quelques minutes, à un tarif réduit. Ce n'est pas un stockage tenu par Liberty.

---

## Claude en MCP \{#mcp\}

| Étape | Qui échange avec qui |
|---|---|
| L'utilisateur pose une question à Claude. | Le client Claude ↔ Anthropic, sous le compte Claude de l'utilisateur. |
| Claude appelle un outil de Liberty. | Le client → le serveur, avec l'accès de l'utilisateur. |
| Liberty répond. | Le serveur → le client : le résultat de cet outil, 60 000 caractères au plus. |
| Claude rédige sa réponse. | Le client → Anthropic : la conversation, avec les résultats reçus. |

**Liberty n'appelle pas Anthropic dans ce cas, et la clé d'API de l'installation ne sert pas.** Ce qu'un outil a renvoyé quitte le serveur vers le client Claude de l'utilisateur, puis part chez Anthropic aux conditions de l'abonnement Claude de l'utilisateur. En MCP, il n'y a ni contexte de page ni notes.

| Client | Le serveur est appelé depuis |
|---|---|
| Un connecteur personnalisé dans Claude Desktop ou claude.ai | Les serveurs d'Anthropic : le serveur doit être accessible depuis Internet. |
| L'extension Claude Desktop, Claude Code | Le poste de l'utilisateur : une adresse interne ou un VPN suffit. |

---

## Données sensibles \{#sensitive\}

Une installation décide de ce qui est sensible, et Liberty le tient à l'écart de l'assistant — dans le chat comme en MCP. Rien n'est marqué dans ce que livrent les applications : les indicateurs sont à poser et à tenir à jour par l'installation.

| Étape | Où | Effet |
|---|---|---|
| **Marquer un élément** | Liberty Next → Construire → Dictionnaire → une entrée → *Rule* → **Sensitive** | Couvre toutes les colonnes qui portent l'élément, sur tous les écrans, requêtes et modèles de l'explorateur de données. Une colonne est reconnue par son élément du dictionnaire, par son nom, ou par son nom sans le préfixe du connecteur (`ABALPH` → `ALPH`) — comme le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) retrouve ses colonnes. |
| **Marquer une colonne** | Liberty Next → Construire → Écrans → une colonne → *General* → **Sensitive** | Couvre une colonne qui ne porte aucun élément ; à faux, exempte une colonne dont l'élément est marqué. |
| **Activer le masquage** | Liberty Next → Administrer → App → Assistant IA → **Masquer les données sensibles à l'assistant** | Désactivé par défaut. Appliqué à l'appel suivant, sans redémarrage. |

Masquage activé, les colonnes marquées sont écartées :

| Endroit | Effet |
|---|---|
| **Lignes renvoyées par une requête de lecture** | Les colonnes marquées sont retirées des lignes. L'assistant reçoit la liste des colonnes masquées : il peut le dire et renvoyer l'utilisateur vers l'écran. |
| **Cartes d'écriture et d'action** | Les valeurs de l'enregistrement s'affichent *(hidden: sensitive)* : l'enregistrement avant une modification, celui d'une suppression, la confirmation d'une action par l'écran. La valeur que l'utilisateur a demandé d'écrire est la sienne, et elle est affichée. |
| **Contexte de page** | Les colonnes marquées sortent de la liste des colonnes et de la ligne cliquée, et un filtre saisi sur l'une d'elles n'est pas transmis. |
| **Explorateur de données** | Un champ marqué ne peut être ni un en-tête de ligne, ni lu par une somme, une moyenne, un minimum ou un maximum. Il peut être compté, et filtré sur une valeur donnée par l'utilisateur. |

Les écrans eux-mêmes ne changent pas : les utilisateurs qui peuvent les ouvrir y voient les valeurs comme avant.

**Ce que le masquage ne couvre pas :**

- ce qu'un utilisateur saisit dans une question, ou joint ;
- une colonne de texte libre qui n'est pas marquée ;
- ce que renvoient un endpoint d'API (outil API), un outil propre à une application ou les outils d'exploitation — Liberty ne connaît pas leurs colonnes ;
- la clé d'un enregistrement sur une carte d'écriture.

---

## Ce qui n'est jamais transmis \{#never\}

| Jamais transmis | Comment |
|---|---|
| Mots de passe des pools, clés d'API, secrets chiffrés | Les outils ne donnent que des descriptions — jamais d'identifiants. Un champ mot de passe d'un formulaire s'affiche `••••••`. |
| Le texte SQL d'une requête | L'assistant voit le nom, le libellé et la description d'une requête. |
| Les lignes que l'utilisateur ne peut pas lire | Chaque outil vérifie la permission que vérifient les écrans, et le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) de l'utilisateur filtre les lignes. |
| Les connecteurs absents de **Connecteurs autorisés** | L'assistant est informé qu'ils ne sont pas disponibles. |
| Ce que lirait un outil désactivé | Un outil désactivé n'est pas proposé du tout. |

---

## Ce qui reste sur le serveur \{#stays\}

| Conservé | Contenu, durée |
|---|---|
| **Conversations** | Ce que l'utilisateur a vu — questions, réponses, nom des fichiers joints — pour les 30 dernières conversations de chaque utilisateur. |
| **Notes** | Celles de l'utilisateur, jusqu'à leur suppression. |
| **Enregistrement d'usage** | Qui a posé la question, le modèle, les jetons, la durée, et pour chaque outil son nom et un court résumé de ce sur quoi il a porté — jamais la question, la réponse ni une ligne de données. 90 jours par défaut ; voir [Usage de l'IA](../monitoring/ai-usage.md). |
| **Fichiers joints** | Non conservés. |

Le [rapport d'usage de la licence](./build/secure/license-key.md#usage-report) part vers l'outil de gestion des licences, pas vers Anthropic, et ne contient rien de l'assistant.

---

## Les réglages qui en décident \{#controls\}

| Réglage | Où | Effet |
|---|---|---|
| **Activé**, **Clé API Anthropic** | Administrer → App → Assistant IA | Désactivé, ou sans clé : pas d'assistant, rien n'est transmis. |
| Les réglages d'outils | Même section | **Outils connecteurs**, **Outils de l'Explorateur de données**, **Les outils des applications** : activés par défaut. **Outil API**, **Outils d'exploitation**, **Outils de construction**, **Outils d'écriture** : désactivés par défaut. |
| **Connecteurs autorisés** | Même section | Les connecteurs que l'assistant peut lire ; vide signifie tous. |
| **Masquer les données sensibles à l'assistant** | Même section | Désactivé par défaut — voir [plus haut](#sensitive). |
| **Fichier joint à une question** | Même section | `0` : aucune pièce jointe. |
| **Point d'accès MCP (/mcp)** | Même section | Désactivé par défaut : aucun client Claude ne peut se connecter. |
| `ai:chat`, `ai:write`, `mcp:use` | Administrer → Accès → un rôle → Au-delà des menus | Qui utilise l'assistant, qui écrit par son intermédiaire, qui connecte Claude. |
| Permissions `sql:`, `explorer:`, `api:` et périmètre de données | Le rôle | Ce que l'assistant lit pour cet utilisateur. |

---

## À savoir avant d'ouvrir largement \{#limits\}

- **Les outils lisent ce que les écrans affichent.** Sans le masquage, un nom, une adresse e-mail ou un montant part vers le modèle quand une requête le renvoie.
- **Marquer avant d'activer le masquage.** Le réglage masque ce qui est marqué, rien d'autre : passer d'abord en revue les entrées du dictionnaire qui portent des données personnelles ou bancaires.
- **Réserver l'outil API et les outils d'exploitation aux installations qui en ont besoin.** Leurs réponses ne sont pas couvertes par le masquage.
- **L'usage qu'Anthropic fait de ce qu'il reçoit** dépend du contrat de la clé d'API de l'installation pour l'assistant, et de l'abonnement Claude de l'utilisateur pour MCP.
