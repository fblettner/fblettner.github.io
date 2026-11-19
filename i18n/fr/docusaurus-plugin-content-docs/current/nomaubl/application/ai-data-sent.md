---
title: Données transmises à Anthropic
description: "Ce que NomaUBL transmet à Anthropic et ce qu'il ne transmet jamais : l'assistant IA de l'application (la question, le contexte de page, les résultats d'outils, le fichier joint, avec la clé d'API de l'instance) et Claude connecté en MCP (NomaUBL se limite à répondre aux appels d'outils ; c'est le client Claude de l'utilisateur qui échange avec Anthropic). Ce qui reste sur le serveur, ce qui n'est jamais communiqué, et les réglages qui en décident."
keywords: [NomaUBL, Anthropic, Claude, assistant IA, MCP, données transmises, confidentialité, données personnelles, secrets masqués, clé d'API, fichiers d'exemple, RGPD, JD Edwards, SAP, NetSuite, ERP spécifique]
---

# Données transmises à Anthropic

NomaUBL utilise les modèles d'Anthropic de deux façons, et le trajet des données n'est pas le même :

- l'**[assistant IA](./ai-capabilities.md)** de l'application — le serveur appelle l'API d'Anthropic avec la clé d'API de l'instance ;
- **[Claude connecté en MCP](./claude-mcp.md)** — NomaUBL n'appelle personne : il répond aux appels d'outils du client Claude de l'utilisateur, et c'est ce client qui échange avec Anthropic, sous le compte Claude de l'utilisateur.

Rien n'est transmis tant que personne ne pose de question : aucun envoi en arrière-plan, aucune télémétrie, aucun autre fournisseur d'IA.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="uds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="uds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="uds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="uds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="20" y="14" width="1160" height="400" rx="14" fill="url(#uds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="180.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">LE POSTE DE L'UTILISATEUR</text>
  <text x="600.0" y="44" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" textAnchor="middle" fontFamily="system-ui, sans-serif">LE SERVEUR NOMAUBL</text>
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
  <line x1="300" y1="101.0" x2="476" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <line x1="720" y1="101.0" x2="896" y2="101.0" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <text x="390.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question, page, fichier</text>
  <text x="810.0" y="93.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">question + résultats d'outils</text>
  <text x="810.0" y="116.0" fill="#c084fc" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">avec la clé d'API de l'instance</text>
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
  <line x1="300" y1="224" x2="476" y2="224" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <line x1="480" y1="248" x2="304" y2="248" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <text x="390.0" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">appel d'outil + jeton personnel</text>
  <text x="390.0" y="262" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">résultat</text>
  <path d="M180.0,266 V300 H1020.0 V271" fill="none" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#uds-flow)"/>
  <text x="600.0" y="293" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">la conversation, avec les résultats reçus par le client</text>
  <line x1="728" y1="235.0" x2="892" y2="235.0" stroke="#f87171" strokeWidth="1.2" strokeDasharray="4 4"/>
  <text x="810.0" y="227.0" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">aucun appel</text>
  <line x1="40" y1="338" x2="1160" y2="338" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="362" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jamais transmis, dans les deux cas : mots de passe, jetons, clés d'API et clé de licence.</text>
  <text x="60" y="380" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Un outil ne renvoie que ce qui lui est demandé ; un outil désactivé ne renvoie rien.</text>
</svg>

---

## L'assistant IA \{#assistant\}

Chaque question est envoyée à `api.anthropic.com` avec l'**API Key** de **Paramètres → Global → AI**. Une requête contient :

| Transmis | Contenu |
|---|---|
| **Consignes** | La consigne NomaUBL intégrée, ou le *System Prompt* de l'instance à sa place ; le catalogue des statuts ; le nom des procédures de diagnostic. |
| **Contexte de page** | La page en cours et son filtre, la langue, et la facture ouverte : document, type, société, numéro, statut, client. 4 000 caractères au plus. |
| **Conversation** | Les questions et les réponses de la conversation en cours — les 40 derniers messages, conservés dans le navigateur de l'utilisateur. |
| **Résultats d'outils** | Ce que chaque outil a lu pour répondre, tel qu'il l'a lu : factures (nom du client, montants, TVA, statut, messages), lignes, cycle de vie, erreurs de validation, chiffres d'une période, tableaux de bord, envois d'e-reporting, données de l'e-annuaire, lignes du journal du serveur, sections du rapport d'implémentation, paramètres avec les secrets masqués. Un résultat est coupé à 60 000 caractères ; une liste contient 50 factures au plus, le journal du serveur 300 lignes. |
| **Fichier joint** | Un XML en texte, jusqu'à 150 000 caractères ; un PDF tel quel, jusqu'à 10 Mo. Le fichier est renvoyé avec chaque question suivante de la même conversation. |

Deux autres écrans appellent la même API :

| Écran | Transmis |
|---|---|
| **Mapping IA** de l'[éditeur XSL](../ubl-tools/xsl-editor.md) | Les chemins de l'exemple avec la première valeur de chacun (120 caractères au plus), les lignes de texte d'un PDF, la liste des variables — et le PDF lui-même quand l'exemple en est un. |
| Documentation en mode *Sitemap* | Rien de plus venant de NomaUBL : Anthropic lit lui-même les pages des domaines de documentation autorisés. |

Les données métier partent telles que les outils les lisent : aucun nom de client, montant ou adresse e-mail n'est remplacé ni masqué. Seuls les secrets le sont — voir [plus bas](#never).

---

## Claude en MCP \{#mcp\}

| Étape | Qui échange avec qui |
|---|---|
| L'utilisateur pose une question à Claude. | Le client Claude ↔ Anthropic, sous le compte Claude de l'utilisateur. |
| Claude appelle un outil de NomaUBL. | Le client → l'instance, avec le jeton personnel de l'utilisateur. |
| NomaUBL répond. | L'instance → le client : le résultat de cet outil, 60 000 caractères au plus. |
| Claude rédige sa réponse. | Le client → Anthropic : la conversation, avec les résultats reçus. |

**NomaUBL n'appelle pas Anthropic dans ce cas, et la clé d'API de l'instance ne sert pas.** Ce qu'un outil a renvoyé quitte l'instance vers le client Claude de l'utilisateur, puis part chez Anthropic aux conditions de l'abonnement Claude de l'utilisateur — pas à celles de la clé d'API de l'instance.

L'origine de l'appel dépend du client :

| Client | L'instance est appelée depuis |
|---|---|
| Claude Desktop avec l'extension, Claude Code | Le poste de l'utilisateur : une adresse interne ou un VPN suffit. |
| Un connecteur claude.ai | Les serveurs d'Anthropic : l'instance doit être accessible depuis Internet. |

L'extension Claude Desktop exécute un petit relais sur le poste de l'utilisateur. Il ne lit qu'un dossier — le **Dossier d'exemples** choisi dans ses réglages — et n'envoie à NomaUBL un fichier de ce dossier que si l'utilisateur demande à Claude de travailler dessus.

---

## Ce qui n'est jamais transmis \{#never\}

| Jamais transmis | Comment |
|---|---|
| Mots de passe, jetons, clés d'API, secrets de client, clé de licence | Un paramètre dont le nom désigne un secret est rendu sous la forme `***` ; la licence est décrite par son état, jamais par sa clé. |
| Les jetons personnels | Le serveur n'en garde que l'empreinte. |
| Un fichier que personne n'a joint ni demandé | L'assistant lit le fichier joint ; en MCP, Claude lit les exemples de l'utilisateur. |
| Ce que lirait un outil désactivé | *Custom Tools* à `N` : l'assistant ne garde que la documentation. *MCP endpoint* à `N` : aucun client ne peut se connecter. |
| Des modifications | L'assistant se limite à la lecture. En MCP, une modification demande *Allow changes over MCP*, et les secrets ne peuvent pas être définis par ce moyen. |

---

## Ce qui reste sur le serveur \{#stays\}

| Conservé | Où, combien de temps |
|---|---|
| La conversation de l'assistant | Dans le navigateur de l'utilisateur (les 40 derniers messages) ; pas sur le serveur. |
| Les fichiers d'exemple et les fichiers joints dans l'assistant | Sur le serveur, par utilisateur, 7 jours. |
| L'utilisation de l'IA | Pour chaque tour de l'assistant, du mapping automatique et de Claude (MCP) : l'utilisateur, la date, le modèle, les jetons, et pour chaque outil son nom et le résumé de son entrée — pendant 90 jours par défaut ; jamais la question, la réponse ni ce qu'un outil a renvoyé. Voir [Utilisation de l'IA](./diagnostics/ai-usage.md). |
| Les appels MCP dans le journal du serveur | Une ligne par appel en échec et une par modification, avec l'utilisateur, l'outil et le début de ses arguments et de son résultat. Une lecture réussie ne laisse aucune ligne. |

---

## Les réglages qui en décident \{#controls\}

| Réglage | Où | Effet |
|---|---|---|
| **API Key** | Paramètres → Global → AI | Sans clé : pas d'assistant, rien n'est transmis. |
| **Custom Tools** | Paramètres → Global → AI | `N` : l'assistant répond à partir de la documentation, sans lire les données de l'instance. |
| **MCP endpoint** | Paramètres → Global → AI → MCP server | `N` (défaut) : aucun client Claude ne peut se connecter. |
| **Allow changes over MCP** | Même groupe | `N` (défaut) : lecture seule. |
| **Accès MCP** | [Rôles](../configuration/security/roles.md) → Accès → Fonctionnalités | Les utilisateurs qui peuvent connecter Claude ; aucun rôle par défaut. |
| Page **Explorateur**, **Accès aux paramètres** | Rôles | Les groupes d'outils accessibles au Claude d'un utilisateur. |
| Pages **Journal serveur** et **Tableau de bord IT**, **Accès aux paramètres** | Rôles | Les utilisateurs pour qui le journal du serveur, le tableau de bord technique et le rapport d'implémentation peuvent être lus, dans l'assistant comme depuis Claude. |
| Sociétés et filtres de lignes | Rôles → Périmètre des données | Les factures et les envois d'e-reporting qu'une question peut atteindre. |

---

## À savoir avant d'ouvrir largement \{#limits\}

- **Les outils lisent ce que les écrans affichent.** Un nom de client, un montant, une adresse e-mail de la liste des utilisateurs du rapport d'implémentation partent vers le modèle quand un outil les lit.
- **Les factures et les envois d'e-reporting suivent le rôle.** L'assistant et Claude lisent ceux des sociétés et des filtres de lignes de l'utilisateur, comme les listes de l'application.
- **Le journal du serveur, le tableau de bord technique et le rapport d'implémentation sont ceux de toute l'instance.** Un outil ne les donne qu'à un rôle qui a la page correspondante — *Journal serveur*, *Tableau de bord IT* — ou, pour le rapport d'implémentation, l'*Accès aux paramètres*.
- **L'utilisateur reste responsable de ce qu'il saisit ou joint.** Un fichier joint dans l'assistant est transmis tel quel.
- **L'usage qu'Anthropic fait de ce qu'il reçoit** dépend du contrat de la clé d'API de l'instance pour l'assistant, et de l'abonnement Claude de l'utilisateur pour MCP.
