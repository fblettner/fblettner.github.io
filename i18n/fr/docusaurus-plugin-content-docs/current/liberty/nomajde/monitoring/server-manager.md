---
title: Server Manager
description: "Supervision → Server Manager dans Nomajde : six écrans qui lisent en direct la console Server Manager de JD Edwards — instances, utilisateurs connectés, serveurs d'entreprise, processus des serveurs, appels et erreurs des fonctions métier, serveurs web et AIS avec leur mémoire Java — avec filtres avancés et listes de choix, et le catalogue des services REST de Server Manager sur lequel ils s'appuient."
keywords: [Nomajde, JD Edwards, Server Manager, supervision, instances, utilisateurs connectés, serveur d'entreprise, kernel, fonctions métier, mémoire Java, serveur AIS, serveur web, API REST]
---

# Server Manager

**Supervision → Server Manager** affiche ce que connaît la console Server Manager de JD Edwards, dans six grilles de Nomajde : les instances et leur état, les utilisateurs connectés, la charge des serveurs d'entreprise et de leurs processus, les appels et les erreurs des fonctions métier, la mémoire Java des serveurs web et AIS. Les écrans interrogent la console **en direct** à chaque ouverture ou actualisation ; rien n'est stocké dans Nomajde.

Pour la santé des serveurs dans le temps — contrôles toutes les cinq minutes, disponibilité, alertes —, voir [Contrôle de santé JDE](./jde-servers.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 382" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="smg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="smg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="smg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="smg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="342" rx="14" fill="url(#smg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="36" width="150" height="310" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="56" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUPERVISION</text>
  <text x="248" y="78" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Contrôle de santé JDE</text>
  <text x="248" y="98" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Server Manager</text>
  <text x="258" y="121.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Instances</text>
  <rect x="244" y="132" width="134" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="258" y="145.5" fill="#4a9eff" fontSize="8.6" fontFamily="system-ui, sans-serif">Utilisateurs connectés</text>
  <text x="258" y="169.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Serveurs d'entreprise</text>
  <text x="258" y="193.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Processus des serveurs</text>
  <text x="258" y="217.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Fonctions métier</text>
  <text x="258" y="241.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Serveurs web et AIS</text>
  <text x="400" y="56" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs connectés</text>
  <text x="400" y="78" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHOW</text>
  <rect x="400" y="84" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="98.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sessions ▾</text>
  <rect x="560" y="84" width="97" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="608.5" y="98.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <rect x="665" y="86" width="103" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="716.5" y="98.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Instance = JAS_PD</text>
  <rect x="884" y="84" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="98.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <rect x="400" y="118" width="564" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="482" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSION</text>
  <text x="574" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="642" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONNEMENT</text>
  <text x="730" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="786" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS OUVERTES</text>
  <text x="916" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INACTIF (S)</text>
  <rect x="400" y="148" width="564" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="482" y="152.0" width="70" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="517.0" y="163.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web session</text>
  <text x="574" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JAS_PD</text>
  <text x="642" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPD920</text>
  <text x="730" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">·ALL</text>
  <text x="786" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P01012, P4210</text>
  <text x="916" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">12</text>
  <rect x="400" y="176" width="564" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">MDUPONT</text>
  <rect x="482" y="180.0" width="70" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="517.0" y="191.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web session</text>
  <text x="574" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JAS_PD</text>
  <text x="642" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPD920</text>
  <text x="730" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">AP_CLERK</text>
  <text x="786" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="916" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">340</text>
  <rect x="400" y="204" width="564" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">AMARTIN</text>
  <rect x="482" y="208.0" width="70" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="517.0" y="219.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web session</text>
  <text x="574" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JAS_PD</text>
  <text x="642" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPY920</text>
  <text x="730" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">·ALL</text>
  <text x="786" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="916" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">58</text>
  <rect x="400" y="232" width="564" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">SVC_AIS</text>
  <rect x="482" y="236.0" width="70" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="517.0" y="247.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AIS session</text>
  <text x="574" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="642" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPD920</text>
  <text x="730" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">·ALL</text>
  <text x="786" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">—</text>
  <text x="916" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3</text>
  <text x="400" y="276" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">Lu en direct sur la console Server Manager — rien n'est stocké.</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six écrans en direct</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une grille pour toute la plateforme</text>
  <line x1="200" y1="107.0" x2="244" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toutes les instances démarrées</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lues ensemble</text>
  <line x1="200" y1="267.0" x2="400" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Show</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sessions, ou aussi les processus</text>
  <line x1="1000" y1="47.0" x2="550" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listes de choix en direct</text>
  <line x1="1000" y1="117.0" x2="767" y2="95" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type de session</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">web, AIS, processus serveur</text>
  <line x1="1000" y1="217.0" x2="550" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
</svg>

---

## Les six écrans \{#screens\}

Tous les écrans sont en lecture seule et se chargent à l'ouverture. Chacun demande à la console la liste de ses instances, puis lit ensemble toutes les instances **démarrées** du bon type : une seule grille couvre toute la plateforme. Une instance arrêtée, ou pour laquelle la console refuse de répondre, garde une ligne dont la colonne **Remarque** en donne la raison — `not running (STOPPED)` par exemple.

| Entrée de menu | Contenu | Colonnes principales |
|---|---|---|
| **Instances** | Toutes les instances gérées par la console. | Instance, Type, État, Version des outils, Hôte, Répertoire JDE. |
| **Utilisateurs connectés** | Les sessions web et AIS — et, sur demande, les processus du serveur d'entreprise auxquels chaque utilisateur est connecté. | Utilisateur, Session, Instance, Environnement, Rôle, Depuis, Applications ouvertes, Connecté à, Inactif (secondes), Dernière activité, Processus. |
| **Serveurs d'entreprise** | Une ligne par serveur d'entreprise. | Instance, Hôte, En service depuis, Processus réseau, Processus noyau, Processus zombies, Utilisateurs du noyau sécurité, Utilisateurs call object, CPU, Mémoire. |
| **Processus des serveurs** | Chaque noyau et chaque écouteur réseau des serveurs d'entreprise. | Processus, Id processus, Instance, Nature, Utilisateurs, Connectés, Requêtes en attente, Messages reçus, Mémoire, CPU, Threads, Connexions base, Transactions ouvertes, Démarré, Dernier message. |
| **Fonctions métier** | Les appels de fonctions métier vus par chaque serveur web. | Fonction métier, Appels, Moyenne (ms), Plus long (ms), Délais dépassés, Erreurs applicatives, Erreurs système, Total (ms), Plus court (ms), Instance, Serveur d'entreprise. |
| **Serveurs web et AIS** | Chaque nœud web et AIS. | Instance, Nœud, Type, En service depuis, Utilisateurs en ligne, Connexion, Mémoire Java utilisée (Mo), Mémoire Java maximale (Mo), Mémoire Java utilisée (en pourcentage). |

Les chiffres sont des nombres : ils se trient, se totalisent et s'exportent comme tels.

### Utilisateurs connectés \{#users\}

La liste déroulante **Show**, au-dessus de la grille, donne le choix entre **Sessions** — les sessions web et AIS, valeur par défaut — et **Sessions and server processes**, qui ajoute les processus du serveur d'entreprise auxquels chaque utilisateur est connecté. La grille est vide quand personne n'est connecté.

---

## Filtres \{#filters\}

Aucune saisie au-dessus des grilles : les colonnes se trouvent dans les **filtres avancés**, avec les mêmes opérateurs que dans toute grille de Nomajde. Quand les valeurs sont connues, le filtre est une liste de choix :

| Filtre | Valeurs |
|---|---|
| **État** | `RUNNING`, `STOPPED`, `UNKNOWN`. |
| **Session** (Utilisateurs connectés) | `Web session`, `AIS session`, `Enterprise server process`. |
| **Nature** (Processus des serveurs) | `Kernel Process`, `Network Listener`. |
| **Instance** | Les instances de la console, listées en direct avec leur type. |

Un filtre s'applique aux lignes renvoyées par la console : il réduit ce qui est affiché, pas ce qui est demandé à la console.

---

## La connexion à Server Manager \{#connection\}

Les écrans utilisent le connecteur `jde_server_manager`, déjà employé par le [contrôle de santé](./jde-servers.md#job). Dans **Liberty Next → Données → Connecteurs**, l'ouvrir pour renseigner l'adresse de la console et le mot de passe de son compte (`jde_admin` par défaut). Les droits de ce compte dans Server Manager déterminent ce qu'il peut lire.

---

## Le catalogue des services Server Manager \{#catalogue\}

Au-delà des six écrans, le connecteur porte un catalogue des services REST de Server Manager, rédigé d'après le guide d'Oracle : chaque point d'accès a ses paramètres expliqués et sa propre permission, ce qui permet de donner à un rôle un service sans les autres. Ils s'appellent depuis l'onglet **Test** du connecteur, une action d'écran, une étape de tâche ou l'[assistant IA](../../framework/ai-assistant.md).

| Rubrique | Contenu |
|---|---|
| **Monitoring** | Instances, répertoires et agents, path codes, domaines et serveurs WebLogic, composants et leurs versions, configuration INI, fichiers journaux. |
| **Runtime Metrics** | Activité et processus des serveurs d'entreprise, statistiques des fonctions métier, mémoire Java, connexions et caches JDBj, utilisateurs connectés, sessions. |
| **Manage and Update Operations** | Démarrer ou arrêter une instance, toutes les instances ou un serveur WebLogic, rafraîchir les environnements, vider les caches de données. |
| **Server Group**, **User Log Configuration**, autres | Groupes de serveurs, configurations enregistrées, niveau de journalisation d'un utilisateur. |

Neuf services **modifient la plateforme** — démarrer et arrêter une instance, démarrer et arrêter toutes les instances, démarrer et arrêter un serveur WebLogic, rafraîchir les environnements, changer un niveau de journalisation, vider les caches de données. Ils sont marqués comme tels : l'assistant IA n'en appelle jamais un sans présenter d'abord une carte à valider, et seulement pour un utilisateur autorisé à modifier des données par son intermédiaire.

Le provisionnement (créer, enregistrer ou supprimer une instance), les mots de passe, TLS, les utilisateurs et les groupes, la sauvegarde et la restauration, ainsi que les mises à jour des agents et de la console sont volontairement absents du catalogue.

---

## Accès \{#access\}

Chaque écran est visible des rôles qui détiennent son entrée de menu. Un service brut du catalogue demande la permission `api:jde_server_manager:<service>`, accordée dans les règles *Au-delà des menus* d'un rôle : les services de lecture peuvent être largement accordés, les neuf qui modifient la plateforme sont à réserver à l'équipe d'exploitation.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **Instances** : une instance qui n'est pas `RUNNING` explique une ligne vide dans les autres écrans.
- Dans **Processus des serveurs**, trier sur **Requêtes en attente** ou **CPU** pour trouver le noyau qui retient une file.
- Dans **Fonctions métier**, trier sur **Erreurs système** ou **Délais dépassés** après un déploiement : une fonction en erreur sur un seul serveur web désigne ce serveur.
- **Serveurs web et AIS** — une mémoire utilisée proche de son maximum sur plusieurs actualisations est le signal à traiter avant l'appel des utilisateurs.

---

## Voir aussi

- [Contrôle de santé JDE](./jde-servers.md) — les contrôles conservés dans le temps et leurs alertes.
- [Services JD Edwards (AIS)](../ais/services.md) — la même approche pour le serveur AIS.
- [Vue d'ensemble — la page d'accueil](../home.md).
