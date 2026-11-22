---
title: Assistant IA
description: "Ce que connaît l'assistant IA dans Nomajde : huit outils en lecture seule sur les références croisées de JD Edwards EnterpriseOne, l'analyse de montée de version, les performances de la plateforme, les droits d'exécution d'un objet, les orchestrations et le paramétrage d'une version, trois procédures guidées, les questions de départ Montée de version et Plateforme, et les pages Références croisées, Préparer la montée de version et Performance qui lui indiquent ce qui est affiché — toujours sous les permissions des pages elles-mêmes."
keywords: [Nomajde, assistant IA, JD Edwards, JDE E1, références croisées, où utilisé, montée de version, reprise, performance, sécurité, droits d'accès, orchestrations, versions, options de traitement, sélection des données, procédures, questions de départ, MCP, Claude Desktop, Claude Code]
---

# Assistant IA

L'assistant de Liberty Next — le bouton **Assistant** en haut à droite — connaît Nomajde : il répond aux questions sur les objets de JD Edwards EnterpriseOne, sur la montée de version en cours, sur ce qui ralentit la plateforme, sur les personnes autorisées à lancer une application ou un état, sur les orchestrations et sur le paramétrage d'une version, avec les mêmes données que les pages, et suit pas à pas les procédures de Nomajde. Les mêmes outils sont proposés à un client MCP (Claude Desktop, Claude Code…) relié à l'installation.

Le fonctionnement de l'assistant — le panneau, les conversations, les cartes à valider — est décrit dans la [documentation de Liberty Next](../framework/ai-assistant.md). Cette page présente ce qu'y ajoute Nomajde.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="380" y="20" width="440" height="292" rx="14" fill="url(#njai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="400" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="400" y="64" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Page : Références croisées · P4210 · W4210A</text>
  <text x="800" y="64" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">×</text>
  <line x1="392" y1="74" x2="808" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="400" y="88" width="160" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="480.0" y="101.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Où cet objet est-il utilisé ?</text>
  <rect x="400" y="114" width="307" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="553.5" y="127.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Qui l'utilise, et quand a-t-il servi pour la dernière fois ?</text>
  <rect x="400" y="140" width="269" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="534.5" y="153.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Quels objets définis par l'utilisateur l'entourent ?</text>
  <rect x="400" y="166" width="312" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="556.0" y="179.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Est-il dans l'analyse de montée de version, et qu'attend-il ?</text>
  <rect x="400" y="200" width="400" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="410" y="208" width="93" height="15" rx="7.5" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="456.5" y="218.7" fill="#c084fc" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde_where_used</text>
  <text x="410" y="238" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">P4210 est porté par 14 applications et 6 états ; 3 objets</text>
  <text x="410" y="252" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">le nomment dans leurs règles d'événement — les 20 premiers sont listés.</text>
  <rect x="400" y="274" width="400" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="289.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Poser une question…</text>
  <rect x="140" y="50" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="150" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La page l'informe</text>
  <text x="150" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objet, écran, onglet affichés</text>
  <line x1="350" y1="67.0" x2="400" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="140" y="120" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="150" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Questions de la page</text>
  <text x="150" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Références, montée de version, perf.</text>
  <line x1="350" y1="137.0" x2="400" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="850" y="210" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="860" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Huit outils en lecture</text>
  <text x="860" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sous les permissions des pages</text>
  <line x1="850" y1="227.0" x2="520" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="140" y="230" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="150" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réduit à ce qu'il peut lire</text>
  <text x="150" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les totaux comptent tout</text>
  <line x1="350" y1="247.0" x2="410" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="850" y="50" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="860" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ne plus envoyer la page</text>
  <text x="860" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× sur la ligne de contexte</text>
  <line x1="850" y1="67.0" x2="796" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
</svg>

---

## Ce qu'on peut lui demander \{#tools\}

Huit outils, **tous en lecture seule** : ils lisent JD Edwards et les analyses, sans jamais rien modifier.

| Outil | Ce qu'il donne | Par exemple |
|---|---|---|
| **Trouver un objet** (`nomajde_find_object`) | Un objet par son identifiant, le début de celui-ci ou des mots de son titre, toutes natures confondues — applications (aussi par un écran), états, tables, vues, données, fonctions, structures de données, objets définis par l'utilisateur ; ou le nombre d'objets d'une nature. | *Quelle application correspond à « address book revision » ?* |
| **Décrire un objet** (`nomajde_object`) | Un objet : les écrans d'une application, les champs, colonnes et boutons d'un écran, qui l'utilise et quand il a servi pour la dernière fois, les objets définis par l'utilisateur posés dessus, sa ligne dans l'analyse de montée de version ; les sections d'un état ; les colonnes et index d'une table ; les tables, colonnes et jointures d'une vue ; une fonction, une structure de données, un objet défini par l'utilisateur. | *Quels champs sont sur le formulaire W01012B ?* |
| **Où il est utilisé** (`nomajde_where_used`) | Pour une donnée, une table, une vue, une fonction, une application ou un état : les applications et les états qui le portent, les vues et les structures qui le contiennent, les objets dont les règles d'événement le nomment, les objets définis par l'utilisateur qui l'entourent — pour tous les objets ou pour les seuls objets spécifiques. | *Que toucherait une modification de la table F0101 ?* |
| **État de la montée de version** (`nomajde_upgrade_status`) | Les chiffres de la reprise, leurs répartitions et leurs vagues ; la ligne d'un objet ; ou les objets d'un statut, d'une personne, d'un type ou d'une vague. | *Quels objets peut-on commencer maintenant ?* |
| **Conseils de performance** (`nomajde_performance_advice`) | Ce qui ralentit la plateforme maintenant, le plus lourd d'abord, chaque ligne avec ce qu'elle signifie et que faire. | *JD Edwards est lent : par où commencer ?* |
| **Droits sur un objet** (`nomajde_object_access`) | Qui peut lancer une application ou un état, et ce qui est accordé à un utilisateur ou à un rôle — voir [ci-dessous](#object-access). | *Qui peut lancer P4210 ?* · *JSMITH peut-il le modifier ?* |
| **Orchestrations** (`nomajde_orchestrations`) | Les orchestrations que présente JD Edwards, retrouvées par des mots de leur nom, de leur description ou de leur catégorie (avec leur nombre total), ou une orchestration décrite : son rôle, sa version, les entrées qu'elle attend et ce qu'elle renvoie. | *Existe-t-il une orchestration qui crée une commande client ?* |
| **Paramétrage d'une version** (`nomajde_version_options`) | Le paramétrage d'une version : pour un état, sa sélection des données et son tri en clair, ses options de traitement par onglet sous la forme *titre = valeur* et son imprimante ; pour une application, les valeurs de ses options de traitement. Les options vides sont comptées, pas listées. | *Quelles sont les options de traitement de P4210 ZJDE0001 ?* |

Les pages répondent avec des milliers de lignes ; une réponse de l'assistant est réduite à ce qu'un modèle peut lire. Les **totaux comptent toujours tout**, et une liste indique combien de lignes elle a laissées de côté — la liste complète reste sur la page, où elle s'exporte.

### Qui peut lancer un objet \{#object-access\}

**Droits sur un objet** lit la sécurité directement dans JD Edwards — le Security Workbench, les rôles que chaque utilisateur détient aujourd'hui (dates d'effet et d'expiration comprises) et la séquence des rôles — et répond à trois questions :

- **un objet** : combien d'utilisateurs sont autorisés et combien refusés, les premiers noms, la règle qui décide pour chacun, et toutes les règles posées sur l'objet ;
- **un utilisateur ou un rôle** : ses propres règles — ce qui est accordé, ce qui est interdit — et, pour un utilisateur, les rôles qu'il détient ;
- **les deux** : exécution, ajout, modification et suppression pour cet utilisateur ou ce rôle, et la règle qui décide.

La décision suit l'ordre de JD Edwards : les règles propres à l'utilisateur d'abord, puis les rôles de la séquence la plus haute à la plus basse, puis `*PUBLIC` — la règle la plus précise l'emportant à chaque niveau. L'outil lit les règles, il ne les modifie jamais.

### Orchestrations et versions, réduites à la réponse \{#ais-tools\}

**Orchestrations** et **Paramétrage d'une version** lisent JD Edwards directement au travers de son serveur AIS. Ils répondent en quelques milliers de caractères là où la réponse brute d'AIS en compte des dizaines de milliers : la liste complète des orchestrations atteint environ 185 000 caractères sur un système standard, alors qu'une réponse de l'assistant est tronquée à 60 000. Les autres lectures AIS — les paramètres d'une fonction métier, le planificateur, un comptage — tiennent en quelques centaines de caractères et restent confiées à l'appel générique.

---

## Les procédures qu'il suit \{#playbooks\}

À côté des procédures déjà livrées par Nomajde (créer un utilisateur, sécuriser une application, charger des valeurs UDC, préparer une montée de version, tester JD Edwards après une modification…), trois accompagnent les outils :

| Procédure | Ce que fait l'assistant |
|---|---|
| **Voir ce qu'une modification toucherait** | Identifie l'objet exactement, demande où il est utilisé, lit la réponse dans l'ordre — applications et états, vues et structures, règles d'événement —, puis les objets définis par l'utilisateur qui l'entourent, et rappelle les limites des références croisées. |
| **Passer en revue les objets définis par l'utilisateur** | Les compte par type, liste ceux d'une application, décrit l'un d'eux et ce qui le porte, et renvoie à l'onglet *Objets définis par l'utilisateur* de la montée de version pour ceux à retester. |
| **JD Edwards est lent : où regarder** | Lit les conseils de performance, les reprend dans l'ordre, décrit les appelants d'une fonction métier lente, et précise ce que les chiffres ne disent pas (pas d'historique, ni AWR ni ASH). |

La procédure de préparation d'une montée de version désigne l'outil correspondant : l'assistant lit l'état de la reprise au lieu de décrire les écrans.

---

## Questions de départ \{#starters\}

Sur une conversation vide dans Nomajde, les questions sont regroupées par sujet — *Utilisateurs et rôles*, *Sécurité*, *Données de base*, *Développement*, *Analyse*, ainsi que **Montée de version** (*Où en est la reprise des objets ?*, *Quels objets à reprendre ne sont attribués à personne ?*, *Comment préparer une analyse de montée de version ?*) et **Plateforme** (*JD Edwards est lent : par où commencer ?*).

Trois pages ont leurs propres questions, qui remplacent celles de l'application :

| Page | Questions |
|---|---|
| [Références croisées](./cross-reference.md) | *Où cet objet est-il utilisé ?* · *Qui l'utilise, et quand a-t-il servi pour la dernière fois ?* · *Quels objets définis par l'utilisateur l'entourent ?* · *Est-il dans l'analyse de montée de version, et qu'attend-il ?* |
| [Préparer la montée de version](./upgrade/analysis.md) | *Où en est la reprise des objets ?* · *Quels objets peut-on commencer maintenant ?* · *Quels objets à reprendre ne sont attribués à personne ?* · *Qu'attend l'objet que j'ai ouvert, et qui l'attend ?* |
| [Performance](./monitoring/performance.md) | *Que faut-il regarder en premier, et pourquoi ?* · *Quels objets appellent la fonction la plus lente ?* · *Qu'est-ce que ces chiffres ne disent pas ?* |

---

## Ce que la page lui indique \{#context\}

Les pages **Références croisées**, **Préparer la montée de version** et **Performance** indiquent à l'assistant ce qui est affiché : *cet objet* ou *cette ligne* n'ont pas besoin d'être expliqués.

- **Références croisées** — l'objet ouvert, sa nature, l'écran et l'onglet affichés ;
- **Préparer la montée de version** — le code chemin analysé, l'onglet, le filtre et l'objet ouvert ;
- **Performance** — les conseils affichés, le plus lourd d'abord.

La [Synthèse de la plateforme](./synthesis.md) et l'[Architecture](./monitoring/architecture.md) font de même avec leurs chiffres. La ligne sous l'en-tête de l'assistant montre ce qui est transmis ; sa **×** l'interrompt tant que l'utilisateur reste sur la page.

---

## Qui peut s'en servir \{#access\}

Un outil est proposé à qui peut ouvrir la page dont il dépend : les trois outils des références croisées demandent les permissions de la page Références croisées (`plugin:nomajde.xref:*`), l'outil de montée de version celles de Préparer la montée de version (`plugin:nomajde.upgrade_view:*`), l'outil de performance celles de Performance (`plugin:nomajde.performance:*`). **Droits sur un objet** est proposé à l'**Administrateur de la sécurité** et à l'**Administrateur** ; **Orchestrations** et **Paramétrage d'une version** au **Développeur** et à l'**Administrateur** — les deux outils AIS demandent aussi la connexion AIS de Nomajde. Rien de plus à accorder : un rôle qui ouvre les pages dispose des outils, et l'assistant lui-même demande `ai:chat` — que détient chacun des [rôles prédéfinis](./overview.md#roles) de Nomajde.

---

## Voir aussi

- [Assistant IA](../framework/ai-assistant.md) — le fonctionnement de l'assistant dans Liberty Next.
- [Références croisées](./cross-reference.md) · [Préparer la montée de version](./upgrade/analysis.md) · [Performance](./monitoring/performance.md).
