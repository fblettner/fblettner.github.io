---
title: La page Surveillance
description: "Bloc par bloc, la page Surveillance de Liberty Next : les quatre indicateurs, les pools de base, le runtime, les utilisateurs connectés, les verrous d'enregistrement et le journal en direct — la signification de chaque valeur et quand agir."
keywords: [Liberty Next, surveillance, tableau de bord technique, pools, sessions, verrous d'enregistrement, runtime, journal, filtre]
---

# La page Surveillance

**Surveillance** dans le menu latéral ouvre une vue en direct du serveur. Elle n'est proposée qu'aux superutilisateurs et se rafraîchit par la connexion en temps réel (Socket.IO). Cette page décrit son premier onglet, **En direct** ; les deux autres sont [Journal du serveur](./server-log.md) et [Rétention](./retention.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 518" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mon-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mon-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mon-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mon-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="494" rx="14" fill="url(#mon-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <rect x="240" y="64" width="172" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="82" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTED USERS</text>
  <text x="252" y="108" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="252" y="124" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Live Socket.IO sessions</text>
  <rect x="422" y="64" width="172" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434" y="82" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVE LOCKS</text>
  <text x="434" y="108" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="434" y="124" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Records currently being edited</text>
  <rect x="604" y="64" width="172" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="616" y="82" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOLS</text>
  <text x="616" y="108" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3 / 4</text>
  <text x="616" y="124" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Materialised / configured</text>
  <rect x="786" y="64" width="174" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="798" y="82" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPTIME</text>
  <text x="798" y="108" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">6 d 4 h</text>
  <rect x="240" y="148" width="352" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="165.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL</text>
  <text x="340" y="165.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIALECT</text>
  <text x="420" y="165.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IN USE</text>
  <text x="480" y="165.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDLE</text>
  <text x="530" y="165.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OVERFLOW</text>
  <rect x="240" y="180" width="352" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">default</text>
  <text x="340" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">postgresql</text>
  <text x="420" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="480" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="530" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="210" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">jdedwards</text>
  <text x="340" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">oracle</text>
  <text x="420" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="480" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="530" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="240" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sales</text>
  <text x="340" y="256.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">not opened</text>
  <text x="420" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="480" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="530" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="240" y="142" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE POOLS</text>
  <text x="608" y="142" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUNTIME</text>
  <rect x="608" y="148" width="352" height="118" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="620" y="170" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="948" y="170" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">7.0.58</text>
  <text x="620" y="194" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connectors · screens</text>
  <text x="948" y="194" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">12 · 87</text>
  <text x="620" y="218" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">License</text>
  <text x="948" y="218" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">full · 2027-06-30</text>
  <text x="620" y="242" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Socket.IO</text>
  <text x="948" y="242" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">4 clients</text>
  <text x="240" y="284" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTED USERS</text>
  <text x="608" y="284" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD LOCKS</text>
  <rect x="240" y="290" width="352" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="307.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="370" y="307.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSION</text>
  <text x="490" y="307.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT</text>
  <rect x="240" y="322" width="352" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="338.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="370" y="338.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">a1f3…</text>
  <text x="490" y="338.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10.0.0.12</text>
  <rect x="240" y="352" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bruno</text>
  <text x="370" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">9c2e…</text>
  <text x="490" y="368.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10.0.0.31</text>
  <rect x="608" y="290" width="352" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="618" y="307.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD</text>
  <text x="788" y="307.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="878" y="307.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SINCE</text>
  <rect x="608" y="322" width="352" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="618" y="338.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sales/orders 4512</text>
  <text x="788" y="338.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">alice</text>
  <text x="878" y="338.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">14:02</text>
  <text x="240" y="396" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIVE LOG TAIL</text>
  <rect x="240" y="404" width="196" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="419.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">All</text>
  <rect x="281" y="405" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="306.0" y="419.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO+</text>
  <line x1="332" y1="409" x2="332" y2="423" stroke="#334155" strokeWidth="1"/>
  <text x="358.0" y="419.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">WARN+</text>
  <line x1="384" y1="409" x2="384" y2="423" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="419.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">ERROR</text>
  <rect x="446" y="404" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="456" y="418.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Filter… (logger name or message)</text>
  <rect x="890" y="404" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.0" y="418.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Pause</text>
  <rect x="240" y="436" width="720" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="454" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">14:05:12  INFO   liberty.web   POST /api/sql/sales/orders_put 200 · req 7d1e…</text>
  <text x="252" y="472" fill="#fb923c" fontSize="9" fontFamily="ui-monospace, monospace">14:05:14  WARN   nomaflow      run 3f2c… step load-sales: 2 row(s) rejected</text>
  <text x="252" y="490" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">14:05:20  ERROR  liberty.sql   jdedwards: ORA-12541 (error_id 4be1a9c2)</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre indicateurs</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, verrous, pools, durée</text>
  <line x1="210" y1="97.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mon-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pools de base</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisées, libres, débordement</text>
  <line x1="210" y1="217.0" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mon-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runtime</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">version, compteurs, licence</text>
  <line x1="1000" y1="207.0" x2="960" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mon-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Verrous</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui modifie quel enregistrement</text>
  <line x1="1000" y1="347.0" x2="960" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mon-arrow)"/>
  <rect x="10" y="438" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="453" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal en direct</text>
  <text x="20" y="466" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveau, filtre, pause</text>
  <line x1="210" y1="455.0" x2="240" y2="448" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mon-arrow)"/>
</svg>

---

## Les quatre indicateurs \{#kpis\}

| Indicateur | Signification |
|---|---|
| **Connected users** | Les sessions en direct — une par onglet de navigateur connecté au serveur. |
| **Active locks** | Les enregistrements ouverts en modification. |
| **Pools** | Pools ouverts / pools configurés. Un pool s'ouvre à sa première utilisation. |
| **Uptime** | La durée depuis le démarrage du serveur. |

---

## Pools de base \{#pools\}

Une ligne par pool : **Pool**, **Dialect**, **In use** (connexions occupées), **Idle** (ouvertes et libres), **Overflow** (connexions au-delà de la taille du pool). *not opened* signifie qu'aucune requête n'a encore utilisé le pool.

Toutes les connexions *In use* avec un *Overflow* supérieur à 0 : des requêtes attendent une connexion. Rechercher les requêtes lentes dans le journal, ou augmenter la taille du pool dans **Paramètres → Pools**.

---

## Runtime \{#runtime\}

La version et la plateforme du serveur, le nombre de connecteurs et d'écrans, l'état de l'assistant IA, la licence et les clients Socket.IO.

---

## Utilisateurs connectés \{#users\}

Une ligne par session : **User**, **Session**, **Client** (adresse). Un utilisateur avec trois onglets ouverts a trois lignes.

---

## Verrous d'enregistrement \{#locks\}

Un enregistrement ouvert en modification est verrouillé pour que deux personnes ne s'écrasent pas mutuellement : **Record**, **User**, **Since** (heure). Le verrou est libéré à la fermeture de la fenêtre ou à la fin de la session de l'utilisateur.

---

## Journal en direct \{#logs\}

Les dernières lignes du journal du serveur, les plus récentes en bas.

| Contrôle | Effet |
|---|---|
| **All** / **INFO+** / **WARN+** / **ERROR** | Niveau minimal affiché. |
| **Filter…** | Un texte dans le nom du logger ou le message — un `error_id`, un identifiant de requête, un connecteur. **Clear filter** le vide. |
| **Pause** / **Resume** | Fige le défilement pour lire ; les nouvelles lignes continuent d'arriver. |

Les erreurs sont en rouge, les avertissements en orange, les lignes de débogage atténuées ; une ligne avec une pile d'appels se déplie (**traceback**). Pour les lignes plus anciennes, chercher dans l'onglet [Journal du serveur](./server-log.md).
