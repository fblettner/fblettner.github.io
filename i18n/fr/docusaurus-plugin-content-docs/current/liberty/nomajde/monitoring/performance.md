---
title: Performance
description: "Supervision → Performance dans Nomajde : ce qui ralentit la plateforme JD Edwards EnterpriseOne maintenant, lu en direct dans Server Manager, la base de données et les références croisées — une courte liste de conseils, le plus lourd d'abord, chacun avec ce qui a été mesuré, ce que cela signifie et que faire."
keywords: [Nomajde, JD Edwards, JDE E1, performance, Server Manager, fonctions métier, init-remote-env, noyau, zombie, mémoire Java, cache JDBj, Oracle, sessions bloquées, statistiques, journaux redo, Resource Manager, optimisation]
---

# Performance

**Supervision → Performance** répond à une seule question : **qu'est-ce qui ralentit la plateforme JD Edwards maintenant, et par où commencer ?** La page lit Server Manager, la base de données et les références croisées — en direct, en lecture seule, en sept secondes environ — et traduit les chiffres en une courte liste de conseils, le plus lourd d'abord. Chaque ligne dit ce qui a été mesuré, ce que cela signifie et que faire.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 464" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nperf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nperf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nperf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nperf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="420" rx="14" fill="url(#nperf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Ce qui ralentit la plateforme JD Edwards maintenant, et par où commencer.</text>
  <rect x="907" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12 480</text>
  <text x="250.0" y="118" fill="#64748b" fontSize="7.08" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPELS DE FONCTIONS MÉTIER</text>
  <rect x="385.6" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="395.6" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">94</text>
  <text x="395.6" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SECONDES PASSÉES DEDANS</text>
  <rect x="531.2" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="541.2" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">8</text>
  <text x="541.2" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MS PAR APPEL</text>
  <rect x="676.8" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="686.8" y="105" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="686.8" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉPASSEMENTS DE DÉLAI</text>
  <rect x="822.4" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="832.4" y="105" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="832.4" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES EN ATTENTE</text>
  <rect x="240.0" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">62</text>
  <text x="250.0" y="164" fill="#64748b" fontSize="6.57" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">% MÉMOIRE JAVA, LE PLUS HAUT</text>
  <rect x="385.6" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="395.6" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">88</text>
  <text x="395.6" y="164" fill="#64748b" fontSize="5.75" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">% RÉUSSITE DU CACHE, LE PLUS BAS</text>
  <rect x="531.2" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="541.2" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">99,1</text>
  <text x="541.2" y="164" fill="#64748b" fontSize="6.13" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">% RÉUSSITE DU CACHE DE LA BASE</text>
  <rect x="676.8" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="686.8" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="686.8" y="164" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSIONS BLOQUÉES</text>
  <text x="242" y="190" fill="#94a3b8" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">À TRAITER D'ABORD  (1)</text>
  <rect x="240" y="198" width="720" height="76" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="198" width="3" height="76" fill="#f87171"/>
  <text x="252" y="214" fill="#f87171" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FONCTIONS MÉTIER</text>
  <text x="345.984" y="214" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">B4200310 prend 41 % de tout le temps mesuré — 38 s sur 920 appel(s), 41 ms chacun</text>
  <text x="252" y="231" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CE QUE CELA SIGNIFIE</text>
  <text x="360" y="231" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">C'est là que part le temps : l'améliorer est ce que les utilisateurs sentiront le plus.</text>
  <text x="252" y="247" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUE FAIRE</text>
  <text x="360" y="247" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Commencez ici. Regardez qui l'appelle et ce qu'elle lit.</text>
  <text x="360" y="262" fill="#94a3b8" fontSize="8.2" fontFamily="ui-monospace, monospace">Appelée depuis 6 objet(s), 14 endroit(s) : P4210 · W4210A — Sales Order Entry …</text>
  <text x="242" y="292" fill="#94a3b8" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">À EXAMINER  (1)</text>
  <rect x="240" y="300" width="720" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="300" width="3" height="62" fill="#fb923c"/>
  <text x="252" y="316" fill="#fb923c" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVEUR D'ENTREPRISE</text>
  <text x="366.48" y="316" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">2 processus zombie(s) sur ENT_PD</text>
  <text x="252" y="333" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CE QUE CELA SIGNIFIE</text>
  <text x="360" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Des processus terminés sans être nettoyés : un noyau s'est arrêté.</text>
  <text x="252" y="349" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUE FAIRE</text>
  <text x="360" y="349" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Lisez les journaux du serveur d'entreprise, puis nettoyez les zombies.</text>
  <text x="242" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rien à signaler : Web et AIS, Caches, Base de données.</text>
  <rect x="240" y="390" width="720" height="34" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="404" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMMENT LIRE CETTE PAGE</text>
  <text x="252" y="417" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">• Chaque chiffre est l'instant présent ou un compteur depuis le démarrage des serveurs : pas encore d'historique. • Seuils …</text>
  <rect x="1000" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="1010" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une lecture en direct, ~7 s</text>
  <line x1="1000" y1="53.0" x2="960" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les chiffres</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rouge / orange au-delà d'un seuil</text>
  <line x1="200" y1="127.0" x2="240" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le plus lourd d'abord</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">traiter · examiner · savoir</text>
  <line x1="200" y1="237.0" x2="242" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui l'appelle</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">depuis les références croisées</text>
  <line x1="1000" y1="247.0" x2="860" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sens et action</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne chacun</text>
  <line x1="1000" y1="337.0" x2="820" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Zones calmes nommées</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">silence ≠ non lu</text>
  <line x1="200" y1="417.0" x2="242" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les limites</text>
  <text x="1010" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas d'historique, ni AWR / ASH</text>
  <line x1="1000" y1="437.0" x2="950" y2="404" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
</svg>

---

## Les chiffres \{#figures\}

Neuf chiffres ouvrent la page : **appels de fonctions métier**, **secondes passées dedans**, **ms par appel**, **dépassements de délai**, **requêtes en attente**, **% mémoire Java, le plus haut**, **% réussite du cache, le plus bas**, **% réussite du cache de la base** et **sessions bloquées**. Un chiffre passe en orange ou en rouge au-delà de son seuil.

**Relire**, en haut à droite, relit l'ensemble.

---

## Les conseils \{#advice\}

Les lignes sont regroupées par poids — **À traiter d'abord**, **À examiner**, **À savoir** — et chacune nomme son domaine.

| Domaine | Ce qui est signalé |
|---|---|
| **Fonctions métier** | Une fonction qui a dépassé son délai, échoué côté système, prend l'essentiel du temps mesuré, est lente à chaque appel ou a connu une longue attente. La ligne liste les applications et les états dont les règles d'événement l'appellent, d'après les [références croisées](../cross-reference.md). |
| **Serveur d'entreprise** | Une étape du serveur comme `init-remote-env` (ouverture de l'environnement de l'utilisateur à la connexion), un noyau avec des requêtes en attente, un processus qui garde des transactions ouvertes, des processus zombies. |
| **Web et AIS** | Une mémoire Java proche de son maximum. |
| **Caches** | Un cache JDBj qui répond trop rarement. |
| **Base de données** | Sessions bloquées, index inutilisables, taux de réussite du cache trop bas, requêtes analysées de zéro, requête lente à chaque exécution (son schéma, ses tables, qui l'envoie, son texte), journaux redo qui basculent trop souvent, statistiques absentes ou périmées, CPU retenu par le Resource Manager, et les trois plus grandes attentes. |

Un domaine lu sans rien à signaler est nommé sous la liste (*Rien à signaler : …*) : un silence ne veut pas dire « non lu ». Une source qui n'a pas répondu est signalée par un avertissement ; le reste de la page est lu malgré tout.

---

## Comment lire la page \{#limits\}

L'encadré du bas de page en donne les limites :

- chaque chiffre est l'instant présent ou un compteur depuis le démarrage des serveurs : il n'y a pas encore d'historique, la page dit donc ce qui est lent, pas depuis quand ;
- les seuils : une fonction est signalée à partir d'une part du temps mesuré ou d'une durée par appel, une mémoire Java à partir de 80 %, un cache sous 80 % de réussite, une requête à partir d'une durée par exécution, le cache de la base sous 90 % ;
- les dépassements de délai sont les compteurs des fonctions métier — les fichiers journaux du serveur d'entreprise ne sont pas accessibles par Server Manager ;
- la base est lue depuis ses propres compteurs, sans le Diagnostics Pack : ni AWR, ni ASH.

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu et les permissions `plugin:nomajde.performance:*`. Elle utilise le connecteur `jde_server_manager` (voir [Server Manager](./server-manager.md#connection)) et la connexion à la base de JD Edwards.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **À traiter d'abord** : une fonction métier qui pèse lourd dans le temps mesuré est l'endroit où une amélioration se ressent le plus.
- Ouvrir les appelants d'une fonction lente dans les [références croisées](../cross-reference.md) pour savoir quels écrans et quels états sont concernés.
- Après un redémarrage, les compteurs repartent de zéro : relire la page une fois que la plateforme a travaillé un moment.
- Pour le détail derrière une ligne : [Analyse de la plateforme](./platform-analysis.md) (serveurs, processus, fonctions, INI) ou [Audit de la base de données](./database-audit.md).

---

## Voir aussi

- [Analyse de la plateforme](./platform-analysis.md) · [Audit de la base de données](./database-audit.md) · [Server Manager](./server-manager.md) · [Contrôle de santé JDE](./jde-servers.md).
