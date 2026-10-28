---
title: L'espace Liberty Next
description: "L'espace Liberty Next réservé aux superutilisateurs : les pages du framework dans le sélecteur d'applications, regroupées en Construire (connecteurs, dictionnaire, écrans, menus, actions, graphiques, tableaux de bord, explorateur, modèles de rapport, notifications, IA, intégrité), Administrer (app, pools, accès, thème), Exploiter (surveillance, tâches), Déployer (paquet, modifications, historique) et Documenter (référence développeur, rapports de documentation, notes de version) ; une page par éditeur, Recharger la config, la validation et l'application d'un enregistrement."
keywords: [Liberty Next, espace, paramètres, Construire, Administrer, Exploiter, Déployer, Documenter, éditeurs, connecteurs, écrans, paramètres de l'application, recharger la config, superutilisateur]
---

# L'espace Liberty Next

Les pages propres au framework — les éditeurs de la configuration, l'administration de l'installation, son exploitation, son déploiement et sa documentation — forment un espace à part entière, **Liberty Next**, proposé aux superutilisateurs dans le sélecteur d'applications, après les applications. Les menus des applications gardent ainsi leur place pour les utilisateurs finaux.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wks-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="wks-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="wks-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="wks-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="530" rx="14" fill="url(#wks-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="220" y="14" width="760" height="40" rx="14" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="39" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <rect x="830" y="23" width="26" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="843.0" y="37.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣</text>
  <rect x="234" y="64" width="210" height="476" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="76" width="186" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="90.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next ▾</text>
  <text x="248" y="116" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Construire</text>
  <text x="260" y="131" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="260" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <text x="260" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <text x="260" y="176" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="260" y="191" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="260" y="206" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="260" y="221" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Graphiques</text>
  <text x="352" y="131" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Tableaux de bord</text>
  <text x="352" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Explorateur</text>
  <text x="352" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Modèles de rapport</text>
  <text x="352" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="352" y="191" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">IA</text>
  <text x="352" y="206" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="248" y="246" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Administrer</text>
  <text x="260" y="261" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">App</text>
  <text x="260" y="276" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="260" y="291" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Accès</text>
  <text x="260" y="306" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Thème</text>
  <text x="248" y="331" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Exploiter</text>
  <text x="260" y="346" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Surveillance</text>
  <text x="260" y="361" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="248" y="386" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Déployer</text>
  <text x="260" y="401" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Paquet</text>
  <text x="260" y="416" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Modifications</text>
  <text x="260" y="431" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Historique</text>
  <text x="248" y="456" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Documenter</text>
  <text x="260" y="471" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Référence développeur</text>
  <text x="260" y="486" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rapports de documentation</text>
  <text x="260" y="501" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notes de version</text>
  <rect x="460" y="64" width="506" height="476" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="90" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">▦ Écrans</text>
  <rect x="830" y="74" width="124" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="892.0" y="88.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <text x="476" y="112" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Le concepteur d'écran — grilles, dialogues, actions</text>
  <rect x="476" y="128" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="145" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · customers</text>
  <rect x="476" y="162" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="179" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · deals</text>
  <rect x="476" y="196" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="213" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · activities</text>
  <rect x="476" y="230" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="247" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">sales · invoices</text>
  <rect x="476" y="264" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="281" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">sales · credit_notes</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le sélecteur d'applications</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Liberty Next, après les apps</text>
  <line x1="210" y1="77.0" x2="246" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Construire</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la configuration des applications</text>
  <line x1="210" y1="167.0" x2="248" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administrer, Exploiter</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'installation et ses tâches</text>
  <line x1="210" y1="317.0" x2="248" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="10" y="450" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déployer, Documenter</text>
  <text x="20" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paquets, références, rapports</text>
  <line x1="210" y1="467.0" x2="248" y2="430" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="20" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retour à l'app</text>
  <text x="1010" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la dernière utilisée</text>
  <line x1="1000" y1="37.0" x2="856" y2="36" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une page par éditeur</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec Recharger la config</text>
  <line x1="1000" y1="107.0" x2="954" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
</svg>

---

## L'ouvrir \{#open\}

- Dans le **sélecteur d'applications** du menu latéral, **Liberty Next** vient après les applications.
- Le bouton à droite de la barre du haut — *Liberty Next — les pages du framework* — l'ouvre depuis n'importe quelle application ; dans l'espace, le même bouton devient *Retour à &lt;application&gt;* et ramène à la dernière application utilisée.

Les utilisateurs qui ne sont pas superutilisateurs ne voient ni l'entrée ni le bouton.

---

## Le menu \{#menu\}

**Construire** — la configuration des applications, dans l'ordre où une application se construit :

| Page | Édite | Voir |
|---|---|---|
| **Assistant** | Ouvre l'assistant IA. | [Assistant IA](../ai-assistant.md) |
| **Connecteurs** | Requêtes, tables, séquences et lookups des connecteurs SQL ; points d'accès des connecteurs API ; réglages des connecteurs. | [Connecteurs](../connectors.md), [Requêtes](../build/queries/overview.md) |
| **Dictionnaire** | Entrées, énumérations, lookups, séquences. | [Dictionnaire](../dictionary.md) |
| **Écrans** | Grilles, dialogues, onglets, actions — le concepteur d'écran. | [Écrans](../build/screens/overview.md) |
| **Menus** | L'arborescence du menu latéral de chaque application. | [Menus](../build/menus/overview.md) |
| **Actions** | Les actions partagées entre écrans. | [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md) |
| **Graphiques** | Les graphiques enregistrés. | [Graphiques](../charts.md) |
| **Tableaux de bord** | Les tableaux de bord et leurs widgets. | [Tableaux de bord](../dashboards.md) |
| **Explorateur** | Les modèles de l'explorateur de données. | [Construire un modèle](../explorer/model.md) |
| **Modèles de rapport** | Les modèles de rapport écrits par les exploitants ; la charte PDF de l'installation se règle dans App. | — |
| **Notifications** | Les règles de notification. | [Notifications](../../nomaflow/notifications.md) |
| **IA** | Ce que chaque application livre pour l'assistant IA : questions de départ et procédures. | [Assistant IA](../ai-assistant.md#settings-ai) |
| **Intégrité** | Les contrôles croisés de toute la configuration. | — |

**Administrer** — l'installation :

| Page | Édite | Voir |
|---|---|---|
| **App** | Tous les réglages de l'installation : application, journal du serveur, connexion, Nomaflow, paquets de changements, licence, assistant IA, notifications, OpenID Connect, charte des PDF. | [Paramètres de l'application](../build/settings-app.md) |
| **Pools** | Les connexions aux bases : adresse, identifiants, taille, schéma et correspondances de DB-links. | [Connecteurs](../connectors.md) |
| **Accès** | Utilisateurs et rôles. | [Utilisateurs](../build/secure/users.md), [Rôles et permissions](../build/secure/roles-and-permissions.md) |
| **Thème** | Couleurs et habillage. | — |

**Exploiter** — **Surveillance** ([La page Surveillance](../../monitoring/dashboard.md)) et **Tâches**, les tâches Nomaflow ([Tâches](../../nomaflow/jobs/catalog.md)).

**Déployer** — **Paquet** ([Paquets](../build/packages.md)), **Modifications** ([Paquets de modifications](../../nomaflow/change-packages.md)), **Historique** ([Historique de la configuration](./config-history.md)).

**Documenter** — la [Référence développeur](./developer-reference.md), les [Rapports de documentation](./documentation-reports.md) et les **Notes de version** de la version en service.

Chaque page a sa propre adresse — `/liberty/screens`, `/liberty/app`… —, ce qui permet de la mettre en favori ou de l'envoyer en lien. Les anciennes adresses de la page Paramètres et des pages Paquet, Modifications et Intégrité de Nomaflow mènent aux nouvelles pages.

---

## Enregistrer \{#save\}

1. **Enregistrer** envoie la configuration modifiée ; le serveur la valide d'après son modèle et refuse une configuration invalide en donnant la raison.
2. Le fichier est écrit. Une version du contenu précédent est conservée dans **Déployer → Historique**.
3. Le changement s'applique : aussitôt quand le serveur surveille ses fichiers (**Hot reload** dans Administrer → App, activé par défaut), sinon avec **Recharger la config**.

**Recharger la config**, en haut de chaque page d'édition, relit tous les fichiers de configuration dans le serveur en service — *Rechargé — 12 connecteurs, 340 entrées de dictionnaire, 4 applications.* Un rechargement reconstruit les connecteurs à partir des nouveaux fichiers ; s'il échoue, la configuration précédente reste active. Les pools ne sont pas rechargés par la surveillance des fichiers, pour qu'une requête en cours ne perde jamais sa connexion : après la modification d'un pool, utiliser **Recharger la config**.

Les fichiers sont réécrits à partir du modèle enregistré : les commentaires écrits à la main dans un fichier ne sont pas conservés.

---

## Conseils \{#tips\}

- Enregistrer un éditeur à la fois et vérifier le résultat avant de passer au suivant.
- Garder la configuration sous gestion de versions sur le serveur ; l'**Historique** conserve les versions récentes, pas toute l'histoire.
- Préférer les éditeurs aux modifications à la main : ils refusent ce que le serveur refuserait. La [Référence développeur](./developer-reference.md) indique, pour chaque réglage, la page qui le modifie.
