---
title: Claude (MCP)
description: "NomaUBL dans Claude Desktop, Claude Code et claude.ai par le point d'accès MCP de l'instance : activation, fonctionnalité de rôle Accès MCP, extension Claude Desktop, connexion depuis le client, jetons personnels, ce que Claude peut lire, fichiers d'exemple, travail de mapping, modifications quand elles sont autorisées, et utilisation par utilisateur. Pour JD Edwards, SAP, NetSuite ou un ERP spécifique."
keywords: [NomaUBL, MCP, Model Context Protocol, Claude, Claude Desktop, Claude Code, jeton personnel, OAuth, extension, fichiers d'exemple, mapping, Explorateur, JD Edwards, SAP, NetSuite, ERP spécifique]
---

# Claude (MCP)

Le **point d'accès MCP** permet à un utilisateur d'interroger son instance NomaUBL depuis **Claude Desktop**, **Claude Code** ou un **connecteur claude.ai**, sous son propre compte : les factures et leur historique, les erreurs de validation, l'e-reporting, les tableaux de bord et les chiffres d'une période, le journal du serveur, les paramètres, la documentation. Les factures et les envois d'e-reporting sont ceux des sociétés et du périmètre de données de l'utilisateur, comme dans les listes de l'application. Il est en lecture seule tant que l'instance n'autorise pas les modifications, désactivé par défaut, et demande une licence valide.

Ce qui part chez Anthropic dans ce cas, et ce qui n'y part pas, est décrit dans [Données transmises à Anthropic](./ai-data-sent.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="umc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="umc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="umc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="umc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="350" rx="14" fill="url(#umc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Profil</text>
  <rect x="240" y="62" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Profil</text>
  <rect x="301" y="62" width="89" height="22" rx="5" fill="url(#umc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="345.5" y="76.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Claude (MCP)</text>
  <rect x="396" y="62" width="116" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="454.0" y="76.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichiers d'exemple</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="114" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connectez Claude Desktop ou Claude Code à NomaUBL sous votre compte.</text>
  <text x="240" y="140" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADRESSE DU SERVEUR</text>
  <rect x="240" y="146" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="160.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">https://nomaubl.example.com/mcp</text>
  <rect x="578" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="605.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <text x="240" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALIDITÉ</text>
  <rect x="240" y="198" width="210" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="274.0" y="213.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">30 jours</text>
  <rect x="309" y="199" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="342.0" y="213.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">90 jours</text>
  <line x1="376" y1="203" x2="376" y2="217" stroke="#334155" strokeWidth="1"/>
  <text x="413.0" y="213.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">365 jours</text>
  <rect x="460" y="199" width="100" height="22" rx="5" fill="url(#umc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="510.0" y="213.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Créer un jeton</text>
  <text x="240" y="246" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLAUDE DESKTOP</text>
  <text x="240" y="262" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Téléchargez, ouvrez le fichier, puis collez votre jeton.</text>
  <rect x="240" y="270" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="281.5" y="284.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Extension</text>
  <text x="240" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VOS JETONS</text>
  <rect x="240" y="322" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="339" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">nmu_4f2a91c7…</text>
  <text x="345" y="339" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">créé ici</text>
  <text x="400" y="339" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">créé le 19/11/2026 · expire le 17/02/2027</text>
  <rect x="884" y="324" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="917.0" y="338.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Révoquer</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Claude (MCP)</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôles avec Accès MCP</text>
  <line x1="200" y1="93.0" x2="331" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Adresse du serveur</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à donner à Claude</text>
  <line x1="200" y1="157.0" x2="240" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Extension Claude Desktop</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">adresse déjà renseignée</text>
  <line x1="200" y1="279.0" x2="240" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="1000" y="192" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="207" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jeton</text>
  <text x="1010" y="220" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affiché une fois, 30 / 90 / 365 j</text>
  <line x1="1000" y1="209.0" x2="562" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="1000" y="318" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Révoquer</text>
  <text x="1010" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jetons et accès ouverts par Claude</text>
  <line x1="1000" y1="335.0" x2="952" y2="335" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Fichiers d'exemple</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tout utilisateur · 7 jours</text>
  <line x1="1000" y1="73.0" x2="514" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#umc-arrow)"/>
</svg>

---

## Activation \{#enable\}

Dans **Paramètres → Global → AI**, groupe **MCP server** (cet éditeur reste en anglais dans l'application) :

| Champ | Défaut | Description |
|---|---|---|
| **MCP endpoint** | `N` | L'instance répond sur `/mcp`, pour les utilisateurs dont le rôle a *Accès MCP*. |
| **Allow changes over MCP** | `N` | Claude peut enregistrer des analyses, des mappings et des documents à la demande de l'utilisateur — voir [Modifications](#changes). Désactivé : lecture seule. |

L'authentification doit être activée sur l'instance : Claude agit toujours au nom d'un utilisateur identifié.

Derrière un proxy inverse, renseigner **Public address** dans **Paramètres → Global → Authentication** : la connexion depuis Claude s'appuie sur cette adresse, comme les liens de réinitialisation de mot de passe.

---

## Qui peut se connecter \{#access\}

Seuls les rôles qui ont la fonctionnalité **Accès MCP** ([Rôles](../configuration/security/roles.md), onglet *Accès*) peuvent connecter Claude ; aucun rôle ne l'a par défaut. Les autres droits du rôle déterminent ensuite ce que Claude atteint :

| Outils | Droit du rôle |
|---|---|
| Factures, erreurs, cycle de vie, e-reporting, tableaux de bord, chiffres d'une période, documentation | *Accès MCP*. Les factures et les envois d'e-reporting sont limités aux sociétés et aux filtres de lignes du rôle. |
| Journal du serveur | La page **Journal serveur**. |
| Tableau de bord technique | La page **Tableau de bord IT**. |
| Explorateur de données — modèle, champs, agrégations, analyses enregistrées | La page **Explorateur**. |
| Conversion PDF vers XML d'un exemple | La page **Traiter Document**, ou l'**Accès aux paramètres**. |
| Rapport d'implémentation ; revue du paramétrage — objets de configuration, contrôle de configuration, tâches planifiées, jeux de règles, état de la licence, système — ; travail de mapping | **Accès aux paramètres**. |

Un rôle sans liste de pages autorisées atteint toutes les pages. Une facture hors du périmètre de l'utilisateur est signalée comme introuvable.

---

## Connecter Claude \{#connect\}

L'adresse du serveur, les jetons et l'extension se trouvent dans l'onglet **Claude (MCP)** de la fenêtre de profil (le bouton utilisateur de la barre supérieure).

| Moyen | Pour | Étapes |
|---|---|---|
| **Extension Claude Desktop** | Claude Desktop, y compris pour une instance inaccessible depuis Internet. | **Extension** télécharge un fichier `.mcpb`. L'ouvrir avec Claude Desktop : l'adresse du serveur est déjà renseignée, et l'extension demande le jeton personnel. Rien d'autre à installer. |
| **Connexion depuis le client** | Claude Code ; un connecteur claude.ai quand l'instance est accessible depuis Internet. | Donner au client l'**Adresse du serveur** seule. Le navigateur ouvre NomaUBL : se connecter comme d'habitude (mot de passe ou SSO), puis sur *Connecter Claude à NomaUBL* choisir 30, 90 ou 365 jours et cliquer sur **Autoriser** (ou **Refuser**). |
| **Jeton collé** | Claude Code, un script. | **Créer un jeton**, le copier — *affiché une seule fois, copiez-le maintenant* — et le donner au client dans l'en-tête de requête `Authorization: Bearer <jeton>`. |

L'extension a quatre réglages dans Claude Desktop : **Adresse de NomaUBL**, **Jeton personnel**, **Dossier d'exemples** (facultatif — le seul dossier d'où Claude peut envoyer des fichiers) et **Accepter un certificat interne** (pour un certificat auto-signé ou d'entreprise). Ils sont dans la langue de l'interface depuis laquelle l'extension a été téléchargée.

Le nom de l'extension porte l'environnement et l'adresse de son instance — *NomaUBL – prod · nomaubl.example.com* : les extensions de plusieurs instances s'installent côte à côte, chacune avec son jeton. Claude sait à quelle instance il s'adresse et précise celle que concerne une réponse.

| Réponse du point d'accès | Signification |
|---|---|
| `404` | Le point d'accès MCP est désactivé. |
| `401` | Pas de jeton, ou un jeton inconnu, expiré ou révoqué. |
| `403` | Le rôle n'a pas *Accès MCP*, ou l'instance n'a pas de licence valide. |

---

## Jetons \{#tokens\}

**Vos jetons** liste les jetons de l'utilisateur et les accès ouverts par une connexion depuis Claude. Chaque ligne indique son origine — le nom du client autorisé, ou *créé ici* pour un jeton créé dans cet onglet — et ses dates de création et d'expiration ; **Révoquer** met fin à l'un d'eux aussitôt. Un jeton est valable 30, 90 ou 365 jours.

Un changement de mot de passe, par l'utilisateur ou par un administrateur, et la désactivation du compte suppriment les jetons de l'utilisateur : un compte réactivé repart sans aucun jeton. Un jeton cesse aussi de fonctionner quand le rôle perd *Accès MCP*.

Le serveur conserve une empreinte du jeton, jamais le jeton lui-même.

---

## Ce que Claude peut faire \{#tools\}

| Sujet | Claude peut |
|---|---|
| **Factures** | Lister des factures, en lire une en entier (en-tête, lignes, TVA, erreurs de validation, cycle de vie avec les motifs de la plateforme), lister les envois d'e-reporting. |
| **Chiffres** | Lire les chiffres de la [Synthèse](./billing-overview.md), des [Statistiques](./statistics.md), de l'[Exploitation](./dashboard.md) et du [tableau de bord technique](./tech-dashboard.md), et la synthèse d'une période. |
| **Explorateur de données** | Lancer toute agrégation de l'[Explorateur](./explorer.md) — regroupement, mesures, filtres, période, N premiers — et les analyses enregistrées. |
| **Diagnostic** | Lire le journal du serveur, les contrôles d'intégrité, les codes de statut et de motif, l'e-annuaire, et suivre les procédures de diagnostic. |
| **Revue du paramétrage** | Lire les objets de configuration, le contrôle de configuration, les tâches planifiées, les jeux de règles, l'état de la licence et les paramètres — les secrets ne sont jamais affichés. |
| **Documentation** | Chercher et lire la documentation de NomaUBL et le rapport d'implémentation de l'instance. |
| **Exemples et mapping** | Lire la structure d'un XML d'exemple, convertir un PDF d'exemple avec les réglages d'un document, proposer et contrôler un mapping — voir plus bas. |

Un résultat de plus de 60 000 caractères est coupé, et Claude est invité à restreindre sa demande.

---

## Fichiers d'exemple \{#samples\}

Un XML ou un PDF du client peut être confié à Claude comme support de travail :

- depuis la fenêtre de profil : onglet **Fichiers d'exemple**, bouton **Ajouter** ;
- depuis Claude Desktop, qui envoie un fichier du **Dossier d'exemples** choisi dans les réglages de l'extension, et d'aucun autre dossier, quand l'utilisateur lui demande de travailler dessus.

Les exemples sont des fichiers `.xml` ou `.pdf` de 20 Mo au plus, 50 par utilisateur, conservés 7 jours puis supprimés par le serveur. Ce sont les copies de travail d'un utilisateur : ils ne sont jamais traités comme des factures ni envoyés à la plateforme.

L'onglet **Fichiers d'exemple** est affiché pour tout utilisateur, avec ou sans *Accès MCP* : un fichier joint dans l'[assistant IA](./ai-capabilities.md) s'y retrouve aussi, et s'y supprime.

Avec un exemple, Claude lit la structure d'un XML, ou convertit un PDF avec les réglages d'un document et essaie des ancres de tableau sans rien enregistrer. Avec l'**Accès aux paramètres**, il fait aussi le travail de mapping de l'[éditeur XSL](../ubl-tools/xsl-editor.md) : il propose le mapping d'un exemple (et, pour un PDF texte, les règles d'extraction), lit le mapping enregistré d'un document et les variables exigées par son jeu de règles, contrôle un mapping sur un exemple et montre l'UBL obtenu. L'exemple suit les étapes d'un traitement réel : un PDF converti en PDF texte ou en PDF JD Edwards selon le document, la feuille de style de prétraitement, le découpage en factures, l'inversion de signe. Rien n'est enregistré : Claude donne les valeurs à saisir dans l'éditeur de mapping.

---

## Modifications \{#changes\}

Avec **Allow changes over MCP**, Claude peut, à la demande de l'utilisateur :

| Modification | Droit du rôle |
|---|---|
| Enregistrer une analyse de l'Explorateur. | La page **Explorateur**. |
| Enregistrer des valeurs de mapping dans la feuille de style d'un document. | **Accès aux paramètres**. |
| Enregistrer les réglages PDF vers XML d'un document. | **Accès aux paramètres**. |
| Créer un document — selon sa source : XML, PDF, UBL ou connecteur, avec sa propre feuille de style vierge ou à partir d'un document existant — ou modifier ses réglages. | **Accès aux paramètres**. |

Chaque source garde ses règles : les réglages d'un PDF texte sont refusés sur un document JD Edwards et inversement, et un document UBL n'a pas de mapping. Mots de passe, jetons et clés ne peuvent pas être définis par ce moyen. La version précédente reste dans l'[historique des fichiers](../management/file-versions.md) ou dans l'historique de configuration, et chaque modification est écrite dans le journal du serveur avec le nom de l'utilisateur. Claude demande l'accord de l'utilisateur avant un appel qui modifie quelque chose.

---

## Utilisation \{#usage\}

Le [tableau de bord technique](./tech-dashboard.md#mcp-usage) montre, par utilisateur sur les 30 derniers jours, les appels faits depuis Claude, ceux en échec et ceux qui ont modifié quelque chose. Le [journal du serveur](./diagnostics/server-log.md) contient une ligne par appel en échec et une par modification ; une lecture réussie ne laisse aucune ligne.

---

## Conseils & bonnes pratiques

- **Accorder *Accès MCP* d'abord à un rôle dédié.** Claude atteint ce que les droits du rôle ouvrent : la page Explorateur et l'accès aux paramètres donnent les outils correspondants.
- **Laisser *Allow changes over MCP* désactivé en production** tant que le travail de mapping n'est pas terminé sur une instance de test ; la [Promotion](../management/promotion.md) transporte ensuite le résultat.
- **Préférer l'extension pour un serveur interne.** Un connecteur claude.ai est appelé depuis Internet ; l'extension appelle l'instance depuis le poste de l'utilisateur.
- **Révoquer sans attendre l'expiration.** Un jeton qui ne sert plus se termine depuis le profil en un clic.
