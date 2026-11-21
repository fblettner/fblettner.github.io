---
title: Points d'accès d'API
description: "Les points d'accès (endpoints) d'un connecteur d'API dans Liberty Next : l'éditeur dessiné en quatre étapes (ce qu'il est, entrées, l'appel, la réponse), des paramètres qui disent ce qu'ils attendent, Créer à partir de… et Actualiser depuis le serveur, les points d'accès qui modifient des données, les champs d'erreur et d'avertissement, les lignes lisibles par un écran, les points d'accès servis par une fonction ou par un service, les groupes, les permissions et la sûreté des valeurs."
keywords: [Liberty Next, connecteur d'API, point d'accès, endpoint, REST, paramètres, Créer à partir de, générateur, modifie des données, champs d'erreur, lignes, servi par une fonction, servi par une action, permissions, api_run]
---

# Points d'accès d'API

Un **point d'accès** (endpoint) est un appel nommé d'un connecteur d'API : *soumettre cet état*, *lire ces clients*, *créer une commande*. Une fois déclaré, il s'utilise partout sans une ligne de code — comme source d'un [écran](./screens/api-screens.md), dans une action d'écran, un [service](./services.md), une étape de tâche, un [test](./tests.md), par l'assistant IA ou par un appelant extérieur — et chaque point d'accès a **sa propre permission**.

Accès : **Liberty Next → Données → Connecteurs**, un connecteur d'API, onglet **Points d'accès**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="epe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="346" rx="14" fill="url(#epe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Points d'accès</text>
  <rect x="240" y="60" width="167" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="323.5" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un point d'accès</text>
  <rect x="413" y="60" width="122" height="22" rx="5" fill="url(#epe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="474.0" y="74.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Créer à partir de…</text>
  <rect x="541" y="60" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="602.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Vérifier 4 générés</text>
  <rect x="780" y="60" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="74.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="240" y="96" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="102" width="38" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="269.0" y="114.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="298" y="115" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">order_create</text>
  <text x="390" y="115" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">· Créer une commande</text>
  <rect x="540" y="102" width="113" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="596.5" y="114.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifie des données</text>
  <rect x="240" y="140" width="164" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="322.0" y="160.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ce qu'il est</text>
  <text x="322.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Créer une commande</text>
  <line x1="404" y1="163" x2="420" y2="163" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#epe-flow)"/>
  <rect x="422" y="140" width="164" height="46" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="504.0" y="160.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Entrées</text>
  <text x="504.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3 paramètre(s)</text>
  <line x1="586" y1="163" x2="602" y2="163" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#epe-flow)"/>
  <rect x="604" y="140" width="164" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="686.0" y="160.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">L'appel</text>
  <text x="686.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">POST /orders</text>
  <line x1="768" y1="163" x2="784" y2="163" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#epe-flow)"/>
  <rect x="786" y="140" width="164" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="868.0" y="160.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">La réponse</text>
  <text x="868.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">lignes dans data.lines</text>
  <rect x="240" y="202" width="720" height="150" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="222" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENTRÉES</text>
  <rect x="250" y="232" width="280" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="246.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="340" y="246.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <text x="410" y="246.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="452" y="235" width="67" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="485.5" y="246.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Obligatoire</text>
  <rect x="250" y="258" width="280" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="260" y="272.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CURRENCY</text>
  <text x="340" y="272.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Devise</text>
  <text x="410" y="272.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">= EUR</text>
  <rect x="250" y="284" width="280" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="298.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">LINES</text>
  <text x="340" y="298.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes</text>
  <text x="410" y="298.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">= []</text>
  <rect x="452" y="287" width="67" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="485.5" y="298.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Obligatoire</text>
  <text x="550" y="242" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXEMPLE</text>
  <rect x="550" y="248" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="262.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">USD</text>
  <text x="686" y="242" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALEURS AUTORISÉES</text>
  <rect x="686" y="248" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="262.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">EUR, USD, GBP</text>
  <text x="550" y="292" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AIDE — QUOI Y METTRE</text>
  <rect x="550" y="298" width="296" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="312.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La devise de la commande (code ISO).</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste triée, recherche</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">groupes repliables</text>
  <line x1="200" y1="77.0" x2="240" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre étapes</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte résume son contenu</text>
  <line x1="200" y1="167.0" x2="240" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un paramètre, une ligne</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui s'ouvre pour modification</text>
  <line x1="200" y1="287.0" x2="250" y2="269" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Créer à partir de…</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit d'après le serveur</text>
  <line x1="1000" y1="47.0" x2="525" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifie des données</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'assistant demande d'abord</text>
  <line x1="1000" y1="113.0" x2="653" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une liste fermée</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste déroulante, contrôlée</text>
  <line x1="1000" y1="267.0" x2="846" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
</svg>

---

## La liste \{#list\}

Les points d'accès sont classés par ordre alphabétique, avec une zone de recherche au-delà de cinq (nom, libellé, chemin, méthode, description, groupe). Ceux qui partagent un **groupe** se rangent sous son titre, qui se replie et affiche leur nombre.

Chaque carte commence par une pastille — la méthode HTTP, **FN** pour un point d'accès [servi par une fonction](#function), **ACT** pour un point d'accès [servi par un service](#service) — suivie du nom, du libellé et, le cas échéant, de la mention **modifie des données**.

| Bouton | Action |
|---|---|
| **Ajouter un point d'accès** | Demande un nom et ouvre un point d'accès vierge. |
| **Créer à partir de…** | Écrit un point d'accès d'après ce que le serveur décrit — voir [plus bas](#create-from). Affiché quand le connecteur a des générateurs. |
| **Vérifier N générés** | Réinterroge le serveur pour chaque point d'accès généré et liste ceux qui ne correspondent plus. |

L'onglet **Test** exécute n'importe quel point d'accès sur le connecteur tel qu'il est à l'écran, sans enregistrer : ses paramètres sous forme de champs, puis le résultat.

---

## Les quatre étapes \{#stages\}

Un point d'accès est dessiné en quatre cartes — **Ce qu'il est → Entrées → L'appel → La réponse** —, chacune résumant son contenu ; les champs de l'étape choisie s'affichent à côté.

### Ce qu'il est \{#what\}

| Champ | Signification |
|---|---|
| **Nom**, **Libellé**, **Description** | L'identifiant utilisé par les actions et les permissions, le libellé court des listes, une phrase de description. |
| **Modifie des données** | À cocher quand l'appel soumet, crée ou lance quelque chose — voir [Les points d'accès qui modifient des données](#writable). |
| **Groupe** | Le titre sous lequel le point d'accès est rangé. Affichage seulement. |
| **Créé à partir de** | Pour un point d'accès généré, son origine, avec **Actualiser depuis le serveur**. |

### Entrées \{#inputs\}

Chaque **paramètre** est une ligne — son nom, son libellé, sa valeur par défaut, *Obligatoire* — qui s'ouvre pour être modifiée.

| Champ | Signification |
|---|---|
| **Nom**, **Libellé** | Le `{{NOM}}` employé dans le chemin, les en-têtes ou le corps, et le libellé de son champ. |
| **Valeur par défaut** | Reprise quand l'appelant omet le paramètre ou le laisse vide. |
| **Exemple**, **Aide — quoi y mettre** | Affichés sous le champ partout où le point d'accès se renseigne, et transmis à l'assistant IA. |
| **Valeurs autorisées** | Une liste fermée : le champ devient une liste déroulante, toute autre valeur est refusée avant tout envoi, et la casse est corrigée. |
| **Obligatoire** | Un appel sans ce paramètre est refusé avant tout envoi. |

### L'appel \{#call\}

**Méthode** et **Chemin de l'URL**, **En-têtes supplémentaires**, **Content-Type**, **Corps** (avec **Formater le JSON**) et **Paramètres de requête**. **Ne pas envoyer un paramètre de requête dont la valeur est vide** n'envoie que les paramètres renseignés, pour un serveur qui lit un paramètre vide comme un filtre sur rien.

À la place d'un appel HTTP, le point d'accès peut être **Servi par une fonction** ou **Servi par une action** — voir plus bas.

### La réponse \{#answer\}

| Champ | Signification |
|---|---|
| **Lignes** | L'emplacement de la liste d'enregistrements dans la réponse. Un écran peut alors lire le point d'accès comme il lit une requête. |
| **Colonnes** | Nom de colonne = clé d'un enregistrement (`AN8=z_AN8_19`) : les colonnes, dans l'ordre, nommées pour que le dictionnaire les reconnaisse. |
| **Titres des colonnes** | L'endroit où la réponse donne son titre à chaque clé — le libellé d'une colonne que ni l'écran ni le dictionnaire ne nomment. |
| **Paramètre du nombre de lignes** | Le paramètre qui porte le nombre maximal de lignes : un écran le renseigne avec son propre *Max lignes*. |
| **Indicateur « autres lignes »** | L'endroit où le serveur signale qu'il y a plus que ce qu'il a retourné : l'écran indique alors un résultat tronqué. |
| **Champs d'erreur** | L'endroit où le serveur place ses erreurs quand il répond 200 malgré tout : un contenu à cet endroit fait de l'appel un échec, avec ce contenu comme erreur. |
| **Champs d'avertissement** | L'endroit où le serveur place ses avertissements : signalés avec la réponse, l'appel reste valide. |
| **Champ de réponse**, **Correspondances de réponse** | La partie de la réponse retournée, et des noms logiques associés à des chemins de la réponse. |

Un chemin peut se terminer par un filtre sur les éléments d'une liste — `result.errors[errorLevel=1]` — pour un serveur qui range ses erreurs et ses avertissements dans la même liste.

---

## Créer à partir de… \{#create-from\}

Un point d'accès générique — *lancer n'importe quel état*, avec du JSON pour tout ce qui dépend de l'état — est difficile à renseigner. Quand l'application placée derrière le connecteur fournit des **générateurs**, **Créer à partir de…** écrit à la place un point d'accès dédié :

1. **Rechercher** l'objet sur le serveur.
2. **Répondre** à quelques questions — quelles colonnes, quelles options.
3. **Créer le point d'accès** : un paramètre nommé par entrée, avec son libellé, son aide et sa valeur par défaut. Il est ajouté sans être enregistré, et ouvert pour relecture.

Un générateur peut aussi construire plusieurs points d'accès à la fois, ou un **écran complet** : la fenêtre demande alors l'application, l'identifiant de l'écran, son titre et s'il faut l'ajouter au menu, puis crée les points d'accès et l'écran en une seule passe validée — rien n'est écrit si un élément est invalide. Un point d'accès déjà présent est conservé tel quel et utilisé par le nouvel écran, sauf si **Remplacer les N point(s) d'accès qui existent déjà** est coché.

Un point d'accès généré garde la trace de son origine. **Actualiser depuis le serveur** le reconstruit et montre ce qui change avant de l'appliquer : l'adresse, le corps et les paramètres suivent le serveur ; le nom, le libellé, la description et ce qui a été écrit sur un paramètre conservé sont gardés.

Les générateurs du connecteur AIS de JD Edwards sont décrits dans [Nomajde — Créer à partir de…](../../nomajde/ais/create-from.md).

---

## Les points d'accès qui modifient des données \{#writable\}

Un point d'accès marqué **Modifie des données** est traité à part :

- un écran peut le désigner comme insertion, mise à jour ou suppression — voir [Un écran sur un point d'accès d'API](./screens/api-screens.md#save) ;
- l'**assistant IA** ne l'appelle pas comme une lecture : il faut que l'*Outil API* et les *Outils d'écriture* soient activés dans **Administrer → App → Assistant IA**, que l'utilisateur soit autorisé à modifier des données par l'assistant, et l'assistant propose une **carte** dans la conversation — rien n'est envoyé tant que l'utilisateur ne l'applique pas. En MCP, *Autoriser les modifications en MCP* est également nécessaire ;
- l'appel est consigné dans l'[utilisation de l'IA](../../monitoring/ai-usage.md), comme les autres modifications faites par l'assistant.

Un point d'accès non marqué est traité comme une lecture : **marquer tous les points d'accès qui écrivent**.

---

## Servi par une fonction \{#function\}

Un seul appel HTTP ne peut pas tout faire : modifier un enregistrement qu'un serveur ne propose que par un formulaire suppose de le retrouver, de vérifier qu'un seul a été trouvé, puis d'agir. **Servi par une fonction** désigne une fonction du plugin d'une application qui répond à la place de l'appel HTTP. Ses arguments sont les paramètres du point d'accès ; sa réponse est traitée comme une réponse — lignes, champs d'erreur et d'avertissement, correspondances, *Modifie des données*. Pour un écran, une action, une tâche ou l'assistant, c'est un point d'accès comme un autre.

## Servi par un service \{#service\}

**Servi par une action** désigne un [service](./services.md) : ses étapes — requêtes, autres points d'accès, fonctions, conditions, boucles — s'exécutent sur le serveur et répondent comme un seul point d'accès. Les paramètres du point d'accès sont les entrées du service ; ce que le service retourne est la réponse. Il s'exécute avec la permission du point d'accès : qui peut appeler le point d'accès exécute ses étapes. **Exposer**, dans la page Services, crée un tel point d'accès en un clic.

---

## Permissions et sûreté \{#security\}

Chaque point d'accès a sa permission, `api:<connecteur>:<point d'accès>` : un rôle peut être autorisé pour un état ou une orchestration, sans l'être pour tous. Cette permission tient parce qu'une valeur ne peut jamais détourner un appel :

- dans le **chemin**, une valeur ne peut ni remonter hors du chemin du point d'accès, ni donner une autre adresse ;
- dans un **corps JSON**, une valeur placée dans une chaîne reste dans cette chaîne ;
- dans un **corps de formulaire**, une valeur ne peut pas ajouter une paire ;
- un **fichier** envoyé par un appel fait pour le compte d'un utilisateur reste dans le dossier désigné par le point d'accès.

Un appel qui enfreindrait l'une de ces règles est refusé avant tout envoi.

---

## Ce que voit l'appelant en cas d'échec \{#errors\}

- Un serveur injoignable est désigné par son adresse : *cannot connect to https://host:8999 — check the connector's base URL*.
- Une erreur HTTP reprend les termes du serveur quand les champs d'erreur les trouvent.
- Une liste absente de l'endroit indiqué par le point d'accès est une erreur qui nomme ce que contient la réponse, et non un écran vide.

---

## Conseils & bonnes pratiques \{#tips\}

- Rédiger l'**aide** et l'**exemple** de chaque paramètre : ils servent autant aux personnes qui remplissent le formulaire qu'à l'assistant.
- Préférer plusieurs points d'accès précis à un point d'accès générique en JSON : chacun a sa permission et son formulaire.
- Déclarer les **champs d'erreur** de tout serveur qui répond 200 avec ses erreurs dans le corps ; sinon, un enregistrement refusé passe pour un succès.
- Regrouper sous un même titre les points d'accès d'une application ou d'un sujet.
- Couvrir par des [tests](./tests.md) les points d'accès dont dépend le métier.

---

## Voir aussi

- [Connecteurs](../connectors.md) — le connecteur lui-même : adresse, authentification, environnements.
- [Un écran sur un point d'accès d'API](./screens/api-screens.md) · [Services](./services.md) · [Tests](./tests.md)
- [API REST](../../references/rest-api.md)
