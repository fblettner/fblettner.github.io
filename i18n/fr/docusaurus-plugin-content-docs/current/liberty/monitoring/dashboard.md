---
title: La page Surveillance
description: "Bloc par bloc, la page Surveillance de Liberty Next : les quatre indicateurs, les pools de base, l'exécution, les utilisateurs connectés, les verrous d'enregistrement et le journal en direct — la signification de chaque valeur et quand agir."
keywords: [Liberty Next, surveillance, tableau de bord technique, pools, sessions, verrous d'enregistrement, runtime, journal, filtre]
---

# La page Surveillance

**Liberty Next → Exploiter → Surveillance** ouvre une vue en direct du serveur. Elle n'est proposée qu'aux superutilisateurs et se rafraîchit par la connexion en temps réel (Socket.IO). Ses quatre vues se choisissent dans une rangée de cartes en haut de page — une icône, le nom et une ligne sur l'usage de la vue. Cette page décrit la première, **En direct** ; les trois autres sont [Journal du serveur](./server-log.md), [Usage de l'IA](./ai-usage.md) et [Rétention](./retention.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 682" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="642" rx="14" fill="url(#monl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En direct</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisateurs connectés, verrous, p…</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Le fichier journal : recherche, ex…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l’IA</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Qui utilise l’assistant, les jeton…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rétention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que garde chaque stockage, sa t…</text>
  <rect x="236.0" y="126" width="204.5" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248.0" y="143" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS CONNECTÉS</text>
  <text x="248.0" y="165" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="248.0" y="180" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Sessions Socket.IO en direct</text>
  <rect x="450.5" y="126" width="204.5" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.5" y="143" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERROUS ACTIFS</text>
  <text x="462.5" y="165" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="462.5" y="180" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Enregistrements en cours de modification</text>
  <rect x="665.0" y="126" width="204.5" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="143" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOLS</text>
  <text x="677.0" y="165" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">3 / 4</text>
  <text x="677.0" y="180" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ouverts / configurés</text>
  <rect x="879.5" y="126" width="204.5" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="891.5" y="143" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DISPONIBILITÉ</text>
  <text x="891.5" y="165" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">6d 4h</text>
  <text x="891.5" y="180" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Python 3.12</text>
  <text x="248" y="218" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Pools de base de données</text>
  <text x="248" y="236" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">POOL</text>
  <text x="340" y="236" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">DIALECTE</text>
  <text x="590" y="236" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">EN COURS D'USAGE</text>
  <text x="650" y="236" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">INACTIVES</text>
  <text x="724" y="236" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">DÉPASSEMENT</text>
  <line x1="242" y1="242" x2="730" y2="242" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="256" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">default</text>
  <text x="340" y="256" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql</text>
  <text x="590" y="256" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <text x="650" y="256" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="724" y="256" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0/10</text>
  <line x1="242" y1="262" x2="730" y2="262" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="276" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">crm</text>
  <text x="340" y="276" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql</text>
  <text x="590" y="276" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="650" y="276" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="724" y="276" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0/10</text>
  <line x1="242" y1="282" x2="730" y2="282" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="296" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">erp</text>
  <text x="340" y="296" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">oracle</text>
  <text x="590" y="296" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="650" y="296" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="724" y="296" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0/9</text>
  <line x1="242" y1="302" x2="730" y2="302" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="316" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sales</text>
  <text x="340" y="316" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">postgresql</text>
  <text x="724" y="316" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">non ouvert</text>
  <rect x="236" y="200" width="500" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="758" y="218" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs connectés</text>
  <text x="758" y="236" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="890" y="236" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">SESSION</text>
  <text x="990" y="236" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">CLIENT</text>
  <line x1="752" y1="242" x2="1078" y2="242" stroke="#1f2937" strokeWidth="1"/>
  <text x="758" y="256" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe  super</text>
  <text x="890" y="256" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">a1F3x…</text>
  <text x="990" y="256" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10.0.0.12</text>
  <line x1="752" y1="262" x2="1078" y2="262" stroke="#1f2937" strokeWidth="1"/>
  <text x="758" y="276" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="890" y="276" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">9c2eK…</text>
  <text x="990" y="276" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10.0.0.31</text>
  <line x1="752" y1="282" x2="1078" y2="282" stroke="#1f2937" strokeWidth="1"/>
  <text x="758" y="296" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="890" y="296" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Qp7wL…</text>
  <text x="990" y="296" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10.0.0.31</text>
  <rect x="746" y="200" width="338" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="356" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Verrous d'enregistrement</text>
  <text x="248" y="374" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">ENREGISTREMENT</text>
  <text x="420" y="374" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="540" y="374" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">DEPUIS</text>
  <line x1="242" y1="380" x2="649" y2="380" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">crm/orders 4512</text>
  <text x="420" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="540" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">14:02</text>
  <rect x="236" y="338" width="419" height="168" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677" y="356" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exécution</text>
  <text x="677" y="382" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <text x="767" y="382" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">12</text>
  <line x1="671" y1="388" x2="1078" y2="388" stroke="#1f2937" strokeWidth="1"/>
  <text x="677" y="402" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="767" y="402" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">87</text>
  <line x1="671" y1="408" x2="1078" y2="408" stroke="#1f2937" strokeWidth="1"/>
  <text x="677" y="422" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Plateforme</text>
  <text x="767" y="422" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Linux-6.8-x86_64</text>
  <line x1="671" y1="428" x2="1078" y2="428" stroke="#1f2937" strokeWidth="1"/>
  <text x="677" y="442" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">IA</text>
  <text x="767" y="442" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">activée · claude-sonnet-4-5</text>
  <line x1="671" y1="448" x2="1078" y2="448" stroke="#1f2937" strokeWidth="1"/>
  <text x="677" y="462" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Licence</text>
  <text x="767" y="462" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">complète ACME · offre standard · couvre nomasx1, nomajde</text>
  <line x1="671" y1="468" x2="1078" y2="468" stroke="#1f2937" strokeWidth="1"/>
  <text x="677" y="482" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Socket.IO</text>
  <text x="767" y="482" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">open</text>
  <rect x="665" y="338" width="419" height="168" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="534" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journal en direct</text>
  <rect x="953" y="544" width="119" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1012.5" y="558.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Effacer le filtre</text>
  <rect x="893" y="544" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="920.5" y="558.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⏸ Pause</text>
  <rect x="844" y="544" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="866.0" y="558.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ERROR</text>
  <rect x="795" y="544" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="558.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">WARN+</text>
  <rect x="746" y="544" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="768.0" y="558.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO+</text>
  <rect x="702" y="544" width="39" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="721.5" y="558.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout</text>
  <rect x="248" y="544" width="445" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="558.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Filtrer… (nom du logger ou message)</text>
  <rect x="248" y="574" width="824" height="64" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="592" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">14:05:12  INFO   liberty.web     POST /api/sql/crm/orders_put 200 · req 7d1e…</text>
  <text x="260" y="609" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">14:05:14  WARN   liberty.jobs    run 3f2c… step load-sales: 2 row(s) rejected</text>
  <text x="260" y="626" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">14:05:20  ERROR  liberty.sql     erp: ORA-12541 (error_id 4be1a9c2)   ▸ trace</text>
  <rect x="236" y="516" width="848" height="132" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre vues</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">En direct est la première</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre indicateurs</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, verrous, pools</text>
  <line x1="200" y1="167.0" x2="236" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pools de base de données</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le panneau le plus large</text>
  <line x1="200" y1="267.0" x2="236" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="20" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Verrous</text>
  <text x="30" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui modifie quel enregistrement</text>
  <line x1="200" y1="437.0" x2="236" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal en direct</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveau, filtre, pause</text>
  <line x1="200" y1="577.0" x2="248" y2="555" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs connectés</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par onglet ouvert</text>
  <line x1="1120" y1="267.0" x2="1084" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="1120" y="540" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Niveau minimum</text>
  <text x="1130" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tout, INFO+, WARN+, ERROR</text>
  <line x1="1120" y1="557.0" x2="802" y2="544" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
  <rect x="1120" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécution</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compteurs, plateforme, IA, licence</text>
  <line x1="1120" y1="437.0" x2="1084" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monl-arrow)"/>
</svg>

Les quatre panneaux placés sous les indicateurs — pools de base de données, utilisateurs connectés, verrous d'enregistrement, exécution — prennent chacun la largeur dont leur contenu a besoin et passent à la ligne suivante quand la fenêtre est trop étroite : le tableau des pools, avec ses cinq colonnes, occupe le panneau le plus large. Un tableau encore plus large que son panneau (fenêtre étroite) défile à l'intérieur de celui-ci, sans qu'aucune colonne soit coupée.

---

## Les quatre indicateurs \{#kpis\}

| Indicateur | Signification |
|---|---|
| **Utilisateurs connectés** | Les sessions en direct — une par onglet de navigateur connecté au serveur. |
| **Verrous actifs** | Les enregistrements ouverts en modification. |
| **Pools** | Pools ouverts / pools configurés (*Ouverts / configurés*). Un pool s'ouvre à sa première utilisation. |
| **Disponibilité** | La durée depuis le démarrage du serveur ; la ligne du dessous donne la version de Python. |

---

## Pools de base \{#pools\}

Une ligne par pool : **Pool**, **Dialecte**, **En cours d'usage** (connexions occupées), **Inactives** (ouvertes et libres), **Dépassement** (connexions ouvertes en plus de celles gardées ouvertes, puis le maximum autorisé : `0/10`). Un pool qu'aucune requête n'a encore utilisé n'a pas de chiffres : *non ouvert*, sur une seule ligne.

Toutes les connexions *En cours d'usage* avec un *Dépassement* supérieur à 0 : des requêtes attendent une connexion. Rechercher les requêtes lentes dans le journal, ou augmenter **Connections kept open** ou **Extra connections** dans l'étape *Réglages fins* du pool (**Liberty Next → Administrer → Pools**, voir [Connecteurs → Réglages fins](../framework/connectors.md#pool-tuning)).

---

## Exécution \{#runtime\}

Une ligne chacun : **Connecteurs** et **Écrans** (le nombre chargé), **Plateforme** (le système d'exploitation du serveur), **IA** (*activée* avec le modèle, ou *désactivée*), **Licence** (*complète* avec le nom du client, puis l'**offre** de la clé et les applications qu'elle **couvre** quand la clé les nomme — ou *restreinte* ; voir [Ce que couvre une clé](../framework/build/secure/license-key.md#coverage)) et **Socket.IO** — l'état de la connexion en direct de cette page (*open*, *connecting*, ou fermée).

---

## Utilisateurs connectés \{#users\}

Une ligne par session : **Utilisateur**, **Session**, **Client** (adresse). Un utilisateur avec trois onglets ouverts a trois lignes.

---

## Verrous d'enregistrement \{#locks\}

Un enregistrement ouvert en modification est verrouillé pour que deux personnes ne s'écrasent pas mutuellement : **Enregistrement**, **Utilisateur**, **Depuis** (heure). Le verrou est libéré à la fermeture de la fenêtre ou à la fin de la session de l'utilisateur.

---

## Journal en direct \{#logs\}

Les dernières lignes du journal du serveur, les plus récentes en bas.

| Contrôle | Effet |
|---|---|
| **Tout** / **INFO+** / **WARN+** / **ERROR** | Niveau minimal affiché. |
| **Filtrer…** | Un texte dans le nom du logger ou le message — un `error_id`, un identifiant de requête, un connecteur. **Effacer le filtre** le vide. |
| **Pause** / **Reprendre** | Fige le défilement pour lire ; les nouvelles lignes continuent d'arriver. |

Les erreurs sont en rouge, les avertissements en orange, les lignes de débogage atténuées ; une ligne avec une pile d'appels se déplie (**trace**). Pour les lignes plus anciennes, chercher dans la vue [Journal du serveur](./server-log.md).
