---
title: Analyse de la plateforme
description: "Supervision → Analyse de la plateforme dans Nomajde : les serveurs JD Edwards EnterpriseOne tels que Server Manager les mesure maintenant — six chiffres, ce que disent les chiffres, les instances, les nœuds web et AIS, les processus du serveur d'entreprise, les fonctions métier — et les paramètres INI d'une instance, lus ou comparés à ceux d'une autre."
keywords: [Nomajde, JD Edwards, JDE E1, analyse de la plateforme, Server Manager, instances, serveur d'entreprise, noyau, zombie, mémoire Java, serveur web, serveur AIS, fonctions métier, INI, jde.ini, comparer INI]
---

# Analyse de la plateforme

**Supervision → Analyse de la plateforme** lit ce que Server Manager mesure maintenant et le présente comme une analyse : les chiffres, puis **ce que disent les chiffres** — les points à revoir d'abord —, puis le détail par sujet, en quatre onglets. Les chiffres sont ceux de la console au moment de la lecture.

La page s'ouvre aussitôt sur la lecture que conserve le serveur — la dernière, faite par la [tâche de lecture de la plateforme](../jobs.md#platform-reading) ou par le dernier **Relire**, quel qu'en soit l'auteur — et l'en-tête en indique l'heure (*Lu à 14:02*, avec le jour quand elle date d'avant aujourd'hui) : un chiffre ancien n'est jamais pris pour l'état présent. **Relire** relit en direct, quelle que soit la durée, et remplace la lecture conservée pour tous les utilisateurs. Tant qu'aucune lecture n'est conservée, la première ouverture lit en direct. Les pages de la supervision — Synthèse de la plateforme, Architecture, Analyse de la plateforme, Performance et Audit de la base de données — partagent leurs lectures : ce qu'une page a lu, les autres l'affichent aussitôt, et ce qu'une page relit est à jour dans les autres.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nplat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nplat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nplat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nplat-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="416" rx="14" fill="url(#nplat-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Analyse de la plateforme</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Les serveurs JD Edwards tels que Server Manager les mesure maintenant, et ce que les chiffres désignent.</text>
  <rect x="907" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="897" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Lu à 14:02</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="84" width="174.0" height="34" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="92" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="272.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="272.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Les chiffres, ce qu'ils disent, les instances</text>
  <rect x="422.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="430.0" y="92" width="18" height="18" rx="4" fill="#4ade80" fillOpacity="0.18"/>
  <text x="454.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Serveurs</text>
  <text x="454.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Nœuds web et AIS, processus</text>
  <rect x="604.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="612.0" y="92" width="18" height="18" rx="4" fill="#c084fc" fillOpacity="0.18"/>
  <text x="636.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fonctions métier</text>
  <text x="636.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Appels, durées, délais, erreurs</text>
  <rect x="786.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="794.0" y="92" width="18" height="18" rx="4" fill="#fb923c" fillOpacity="0.18"/>
  <text x="818.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres INI</text>
  <text x="818.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">L'INI d'une instance, lu ou comparé</text>
  <rect x="240.0" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="147" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4 / 4</text>
  <text x="250.0" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCES EN MARCHE</text>
  <rect x="361.3333333333333" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="147" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">36</text>
  <text x="371.3333333333333" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSUS SERVEUR</text>
  <rect x="482.66666666666663" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="147" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="492.66666666666663" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSUS ZOMBIES</text>
  <rect x="604.0" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="147" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <text x="614.0" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSIONS</text>
  <rect x="725.3333333333333" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="147" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12 480</text>
  <text x="735.3333333333333" y="160" fill="#64748b" fontSize="5.67" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS DE FONCTIONS MÉTIER</text>
  <rect x="846.6666666666666" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="147" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="856.6666666666666" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONT EN ERREUR</text>
  <rect x="240" y="180" width="720" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="196" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUE DISENT LES CHIFFRES</text>
  <line x1="241" y1="204" x2="959" y2="204" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="219" r="3.5" fill="#fb923c"/>
  <text x="266" y="222" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVEUR D'ENTREPRISE</text>
  <text x="392" y="222" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">2 processus zombie(s) sur ENT_PD : … à revoir avec les journaux.</text>
  <circle cx="256" cy="238" r="3.5" fill="#4a9eff"/>
  <text x="266" y="241" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FONCTIONS MÉTIER</text>
  <text x="392" y="241" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">B4200310 prend 41 ms en moyenne sur 920 appels — la médiane des autres est de 3 ms.</text>
  <circle cx="256" cy="257" r="3.5" fill="#4ade80"/>
  <text x="266" y="260" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INSTANCES</text>
  <text x="392" y="260" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Les 4 instances sont en marche.</text>
  <circle cx="256" cy="276" r="3.5" fill="#4ade80"/>
  <text x="266" y="279" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WEB ET AIS</text>
  <text x="392" y="279" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Les 2 nœud(s) web / AIS ont de la place dans leur mémoire Java.</text>
  <rect x="240" y="304" width="720" height="116" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="320" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSTANCES</text>
  <rect x="250" y="330" width="700" height="84" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="330" width="700" height="20" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">INSTANCE</text>
  <text x="480" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="680" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ÉTAT</text>
  <text x="830" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="260" y="363.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="480" y="363.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">entserver</text>
  <text x="680" y="363.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="830" y="363.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">9.2.x</text>
  <line x1="251" y1="370" x2="949" y2="370" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="383.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HTML_PD</text>
  <text x="480" y="383.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">webserver</text>
  <text x="680" y="383.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="830" y="383.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">9.2.x</text>
  <line x1="251" y1="390" x2="949" y2="390" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="403.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="480" y="403.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">restserver</text>
  <text x="680" y="403.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="830" y="403.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">9.2.x</text>
  <line x1="251" y1="410" x2="949" y2="410" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre onglets</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un onglet dit ce qui est à revoir</text>
  <line x1="200" y1="97.0" x2="244" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six chiffres</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en direct de Server Manager</text>
  <line x1="200" y1="157.0" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que disent les chiffres</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange à revoir, vert rien</text>
  <line x1="200" y1="249.0" x2="254" y2="219" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres INI</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en lire un, ou en comparer deux</text>
  <line x1="1000" y1="117.0" x2="920" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="1000" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="1010" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en direct, pour tous</text>
  <line x1="1000" y1="53.0" x2="960" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="1000" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="1010" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une arrêtée apparaît en orange</text>
  <line x1="1000" y1="367.0" x2="700" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
</svg>

---

## Les quatre onglets \{#tabs\}

Chaque onglet indique, à côté de sa description, combien de ses points sont à revoir.

| Onglet | Contenu |
|---|---|
| **Vue d'ensemble** | Six chiffres — **instances en marche**, **processus serveur**, **processus zombies**, **sessions**, **appels de fonctions métier**, **dont en erreur** —, **Ce que disent les chiffres** et la liste des **Instances** (instance, type, état, version). |
| **Serveurs** | Les nœuds **Web et AIS** — durée de fonctionnement, utilisateurs en ligne, mémoire Java utilisée par rapport à son maximum, avec une barre — et les **Processus** du serveur d'entreprise : requêtes en attente, transactions ouvertes, connexions à la base, threads, mémoire, utilisateurs ; les plus chargés d'abord. |
| **Fonctions métier** | Appels, durée moyenne et la plus longue, délais dépassés, erreurs système et applicatives ; celles en erreur ou les plus lentes d'abord. |
| **Paramètres INI** | L'INI d'une instance, lu ou comparé à celui d'une autre. |

---

## Ce que disent les chiffres \{#findings\}

Chaque ligne nomme son domaine et porte une couleur : orange (à revoir), bleu (à savoir) ou vert (rien à signaler) :

- une instance qui n'est pas en marche ;
- des processus zombies sur un serveur d'entreprise — à revoir avec ses journaux ;
- un noyau avec des requêtes en attente, ou beaucoup de transactions ouvertes ;
- une fonction métier qui dépasse son délai, échoue, ou est bien plus lente que la médiane des autres ;
- une mémoire Java au-dessus de 80 % de son maximum, un serveur web redémarré il y a un instant.

Un domaine sans rien à signaler le dit : *Les 4 instances sont en marche.*

---

## Paramètres INI \{#ini\}

Choisir **Une instance**, éventuellement une autre dans **Comparée à**, puis **Lire son INI**. Seul, l'INI est listé par section et par paramètre ; comparé, seuls les paramètres qui diffèrent sont listés, avec la valeur de chaque instance. **Chercher une section ou un paramètre…** restreint la liste à la frappe. Server Manager met quelques secondes à répondre ; le résultat reste en place quand on change d'onglet.

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu et les permissions `plugin:nomajde.platform:*`. Elle lit Server Manager par le connecteur `jde_server_manager` pour l'utilisateur : les permissions des [services de Server Manager](./server-manager.md#catalogue) ne s'appliquent pas ici.

---

## Conseils & bonnes pratiques \{#tips\}

- Lire l'onglet **Vue d'ensemble** après un déploiement ou un redémarrage : une ligne orange indique par où commencer.
- Comparer l'INI de deux serveurs d'entreprise censés être identiques : une différence explique souvent un comportement observé sur un seul serveur.
- Les fichiers journaux des serveurs ne sont pas lus — la console ne liste que les journaux de l'utilisateur connecté.

---

## Voir aussi

- [Performance](./performance.md) — les conseils tirés des mêmes chiffres et de la base.
- [Server Manager](./server-manager.md) — les mêmes chiffres en grilles, avec filtres et exports.
- [Contrôle de santé JDE](./jde-servers.md) — les contrôles conservés dans le temps.
