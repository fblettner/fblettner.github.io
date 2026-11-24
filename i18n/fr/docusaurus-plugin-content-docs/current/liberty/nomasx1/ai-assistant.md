---
title: Assistant IA
description: "Ce que connaît l'assistant IA dans Nomasx-1 : deux outils en lecture seule qui comptent sur le serveur les conflits de séparation des tâches d'un utilisateur et la situation des licences de toute application connectée, trois procédures guidées, les questions de départ et les cinq écrans qui ont les leurs — toujours sous les permissions des écrans et le périmètre de données de l'utilisateur."
keywords: [Nomasx-1, assistant IA, MCP, Claude Desktop, Claude Code, séparation des tâches, conflits SoD, situation des licences, conformité des licences, exposition, procédures, questions de départ, JD Edwards, SAP, NetSuite, ERP spécifique]
---

# Assistant IA

L'assistant de Liberty Next — le bouton **Assistant** en haut à droite — connaît Nomasx-1 : il répond aux questions sur les comptes, les rôles, les conflits de séparation des tâches et les licences de toute application connectée, avec les mêmes données que les écrans, et suit pas à pas les procédures de Nomasx-1. Les mêmes outils sont proposés à un client MCP (Claude Desktop, Claude Code…) relié à l'installation.

Le fonctionnement de l'assistant — le panneau, les conversations, les cartes à valider — est décrit dans la [documentation de Liberty Next](../framework/ai-assistant.md). Cette page présente ce qu'y ajoute Nomasx-1.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="370" y="20" width="460" height="290" rx="14" fill="url(#nxai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="390" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="390" y="64" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Page : SoD - Détails · filtres : 1 · la ligne cliquée</text>
  <text x="810" y="64" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">×</text>
  <line x1="378" y1="74" x2="822" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="390" y="88" width="302" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="541.0" y="101.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Quelle paire de rôles explique le conflit que j'ai cliqué ?</text>
  <rect x="390" y="114" width="298" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="539.0" y="127.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Quels utilisateurs partagent les conflits de cette liste ?</text>
  <rect x="390" y="150" width="420" height="104" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="400" y="158" width="110" height="15" rx="7.5" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="455.0" y="168.7" fill="#c084fc" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1_user_conflicts</text>
  <text x="400" y="190" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">JDOE — 12 lignes de conflit, dont 3 avérées, 4 risques en conflit.</text>
  <text x="400" y="203" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Le plus élevé d'abord : Procure to Pay · Enter and approve a voucher (H).</text>
  <text x="400" y="216" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">AP_CLERK × AP_MGR donne les deux côtés de 9 lignes :</text>
  <text x="400" y="229" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">retirer un des rôles à l'utilisateur, ou séparer les tâches.</text>
  <text x="400" y="242" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Compte actif, dernière connexion le 18/11/2026.</text>
  <rect x="390" y="266" width="420" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="281.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Tapez un message…</text>
  <rect x="110" y="46" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="120" y="61" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'écran lui indique</text>
  <text x="120" y="74" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écran, filtres, ligne cliquée</text>
  <line x1="340" y1="63.0" x2="390" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="110" y="100" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="120" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Questions de l'écran</text>
  <text x="120" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cinq écrans ont les leurs</text>
  <line x1="340" y1="117.0" x2="390" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="110" y="214" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="120" y="229" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compté sur le serveur</text>
  <text x="120" y="242" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">totaux exacts, premières lignes</text>
  <line x1="340" y1="231.0" x2="400" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="860" y="150" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux outils en lecture seule</text>
  <text x="870" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conflits d'un utilisateur · licences</text>
  <line x1="860" y1="167.0" x2="530" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="860" y="46" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="61" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ne plus envoyer la page</text>
  <text x="870" y="74" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× sur la ligne de contexte</text>
  <line x1="860" y1="63.0" x2="808" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
  <rect x="860" y="240" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mêmes outils en MCP</text>
  <text x="870" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Claude Desktop, Claude Code…</text>
  <line x1="860" y1="257.0" x2="810" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxai-arrow)"/>
</svg>

---

## Ce qu'on peut lui demander \{#tools\}

Deux outils, **tous deux en lecture seule** : ils lisent ce que Nomasx-1 a collecté, sans jamais rien modifier. Chacun répond en un seul appel à une question qui demanderait sinon plusieurs écrans et un décompte — et le décompte est fait sur le serveur : les totaux sont exacts, même sur une longue liste.

| Outil | Ce qu'il donne | Par exemple |
|---|---|---|
| **Les conflits d'un utilisateur** (`nomasx1_user_conflicts`) | Les conflits de séparation des tâches d'un utilisateur, décomptés. | *Quels sont les conflits de JDOE, et quel rôle faut-il lui retirer ?* |
| **La situation des licences** (`nomasx1_licence_position`) | L'état des licences JD Edwards, pour une application ou pour toutes, tel que le lit la [revue des licences](./licensing-review.md) : licences manquantes, modules qu'aucune ligne ne couvre, lignes comptées autrement, et l'estimation. | *Quels modules manquent de licences, et combien cela pourrait-il coûter ?* |

### Les conflits d'un utilisateur \{#user-conflicts\}

À partir d'un identifiant d'utilisateur — et d'une application quand l'utilisateur existe dans plusieurs —, l'outil renvoie :

- **les lignes de conflit** de l'utilisateur, et combien appartiennent à un conflit qu'il a **exercé** : les deux activités faites, d'après Object Usage Tracking, le journal d'activité ou les tables écrites — la même lecture que la [Revue de la séparation des tâches](./sod-review.md#same-statement) et [Conflits — Avérés](./applications/conflicts/proven.md) ;
- **les risques en conflit**, par processus, avec leur niveau — le plus élevé d'abord, puis les plus exercés ;
- **le rôle, ou la paire de rôles, qui donne les deux côtés**, avec la conduite à tenir : un rôle présent des deux côtés se corrige dans le rôle lui-même, ce qui règle le cas de tous ses titulaires ; deux rôles combinés appellent le retrait de l'un d'eux à l'utilisateur, ou une séparation des tâches ;
- **les premières lignes de conflit**, chacune avec ses deux activités, ses deux objets et ses deux rôles ;
- **le compte** : son statut, sa date de création et sa dernière connexion, par application.

Un utilisateur sans conflit reçoit une note qui le dit — avec un rappel : vérifier l'identifiant et la date de la collecte SOD dans **Dernière collecte**. Au-delà de 5 000 lignes, les décomptes portent sur les 5 000 premières et la réponse invite à se limiter à une application.

### La situation des licences \{#licence-position\}

Pour une application, ou pour toutes celles que l'utilisateur peut voir, l'outil lit la même position que la [revue des licences](./licensing-review.md) et renvoie :

- **par application** : les personnes comptées et la base retenue — les modules qu'elles ont utilisés, ou ceux que leur sécurité autorise pour les utilisateurs connectés pendant la période de l'application —, les licences manquantes, les personnes sur un module qu'aucune ligne ne couvre, et l'**estimation** au prix public avec trois ans de support ;
- **les lignes pleines**, les **licences manquantes** et les **modules non couverts**, par module, avec leur estimation ;
- **les lignes comptées autrement** — chiffre d'affaires, employés, processeurs, Named User Plus — face à ce qui est déclaré ou compté.

La réponse porte toujours le même avertissement que la page : une lecture des contrats appliquée à ce qui a été collecté, une hypothèse à discuter avec Oracle, jamais une position certifiée — et l'assistant le dit. Les règles sont celles de [Lecture d'un contrat](./how-a-contract-is-counted.md).

Les listes sont réduites à ce qu'un modèle peut lire — 20 risques, 15 paires de rôles, 15 lignes de conflit, 40 composants — et la réponse indique combien de lignes elle a laissées de côté. Les listes complètes restent sur les écrans, où elles s'exportent.

---

## Les procédures qu'il suit \{#playbooks\}

| Procédure | Ce que fait l'assistant |
|---|---|
| **Lancer le rapport d'évaluation Sécurité & SoD** | Vérifie dans **Dernière collecte** que les modules SECURITY et SOD ont été collectés après la dernière modification (et propose de lancer la collecte), puis guide dans le [rapport de sécurité](./reports/security-sox.md) : ses paramètres, ses constats et leur gravité, et la correction d'un rôle en conflit avec lui-même. |
| **Lancer l'audit des licences** | Vérifie les données d'entrée — contrats, prix, codes système — et l'utilisation collectée, puis guide dans le [rapport d'audit des licences](./reports/audit-licences.md) et les sections à lire en premier. |
| **Analyser un conflit de séparation des tâches** | Part des lignes de conflit de l'utilisateur, distingue un rôle en conflit avec lui-même d'une paire de rôles, traite d'abord les conflits exercés, et fait relancer les collectes après la modification dans le système source. |

---

## Questions de départ \{#starters\}

Sur une conversation vide dans Nomasx-1, les questions sont regroupées par sujet : **Comptes** (*Combien d'utilisateurs sont actifs, et combien ne se sont pas connectés depuis 90 jours ?*…), **Séparation des tâches** (*Quels utilisateurs portent un conflit de séparation des tâches, et dans quel processus ?*…), **Licences** (*Quels composants de licence sont déployés au-delà de la souscription, et quelle est l'exposition ?*…) et **Données et rapports** (*Quand chaque module a-t-il été collecté pour la dernière fois ?*…).

Cinq écrans ont leurs propres questions, qui remplacent celles de l'application :

| Écran | Questions |
|---|---|
| [Sécurité → Utilisateurs](./security/users.md) | *Quels utilisateurs de cette liste ne se sont pas connectés depuis 90 jours ?* · *Quels utilisateurs ici sont à privilèges, techniques ou génériques ?* · *Explique le statut et les dates de l'utilisateur que j'ai cliqué* |
| [Conflits → Synthèse](./applications/conflicts/summary.md) | *Quel processus porte le plus de conflits ?* · *Quels risques sont les plus critiques dans ce résumé ?* · *Comment corriger un rôle auto-conflictuel ?* |
| [Conflits → Détails](./applications/conflicts/details.md) | *Quelle paire de rôles explique le conflit que j'ai cliqué ?* · *Quels utilisateurs partagent les conflits de cette liste ?* |
| [Revues → Licences](./licensing-review.md) | *Quels modules manquent de licences ?* · *Qui utilise un module qu'aucune ligne ne couvre ?* · *Comment un bundle est-il compté ?* |
| **Dernière collecte** | *Quel module est le plus en retard ?* · *Comment rafraîchir les données de sécurité ?* |

Chaque écran indique à l'assistant ce qui est affiché — l'écran, ses filtres, la ligne cliquée : *cet utilisateur* ou *le conflit que j'ai cliqué* n'ont pas besoin d'être expliqués. La ligne sous l'en-tête de l'assistant montre ce qui est transmis ; sa **×** l'interrompt tant que l'utilisateur reste sur la page.

---

## Qui peut s'en servir \{#access\}

Un outil est proposé à qui lit les écrans sur lesquels il s'appuie, **par les accès aux menus de ses rôles** : l'outil des conflits à un rôle qui ouvre **Applications → Conflits → Détails**, l'outil des licences à un rôle qui peut lire la position de licences, comme pour la [revue des licences](./licensing-review.md#access). Rien d'autre à accorder — les quatre [rôles prédéfinis](./overview.md#roles) (Auditeur, Responsable sécurité, Gestionnaire des licences, Administrateur) disposent des deux, et l'assistant lui-même demande `ai:chat`, qu'ils détiennent aussi.

Le **périmètre de données** de l'utilisateur s'applique comme sur les écrans : un utilisateur limité à certaines applications n'obtient que les conflits et les licences de celles-ci, et *toutes les applications* désigne toutes celles qu'il peut voir.

---

## Voir aussi

- [Assistant IA](../framework/ai-assistant.md) — le fonctionnement de l'assistant dans Liberty Next.
- [MCP](../framework/mcp.md) — les mêmes outils depuis Claude Desktop ou Claude Code.
- [Conflits — Détails](./applications/conflicts/details.md) · [Revue des licences](./licensing-review.md) · [Synthèse d'audit](./audit-synthesis.md).
