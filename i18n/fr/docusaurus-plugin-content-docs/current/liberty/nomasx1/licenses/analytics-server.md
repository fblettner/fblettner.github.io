---
title: Oracle Analytics Server
description: "Page Licences → Oracle Analytics Server de Nomasx-1 — un questionnaire sur une installation sur site (serveurs, cluster derrière une machine virtuelle, bases du référentiel et de l'entrepôt de données, emplacement et nombre des utilisateurs), le décompte des utilisateurs gardés dans WebLogic via un pool d'annuaire, et en regard les processeurs et Named User Plus nécessaires face au souscrit, le risque estimé et les constats."
keywords: [Nomasx-1, licences, Oracle Analytics Server, OAS, Business Intelligence, WebLogic, LDAP embarqué, pool d'annuaire, Named User Plus, licence au processeur, entrepôt de données, Express Edition]
---

# Oracle Analytics Server

La page **Oracle Analytics Server** décrit une installation sur site d'Analytics Server (l'ancien Business Intelligence) pour un contrat de licence et indique en regard ce que devraient être ses licences. Rien d'Analytics Server n'est lu sur les machines, hormis les utilisateurs gardés dans WebLogic : la page **pose les questions** — serveurs, cluster derrière une machine virtuelle, bases du référentiel et de l'entrepôt de données avec leur édition, emplacement et nombre des utilisateurs —, **enregistre chaque réponse telle qu'elle est donnée** et relit l'analyse après chacune : **processeurs et Named User Plus nécessaires face au souscrit**, **risque estimé** et **constats**.

Accès : **Licences → Oracle Analytics Server**.

:::warning[Une hypothèse]
La page le rappelle en tête : *une hypothèse construite à partir de vos réponses et des règles publiques d'Oracle, à discuter avec Oracle — jamais une position certifiée. Sur site uniquement : dans le cloud d'Oracle les licences sont incluses.*
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 606" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oasl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oasl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oasl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oasl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="568" rx="14" fill="url(#oasl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle Analytics Server</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ses serveurs, ses bases et ses utilisateurs, face à ce qui est souscrit.</text>
  <rect x="1025" y="36" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="847" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="857" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">123456789 · ERP ▾</text>
  <text x="831" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Contrat</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="22" rx="6" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.5)" strokeWidth="1"/>
  <text x="250" y="105" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">Une hypothèse construite à partir de vos réponses et des règles publiques d'Oracle — jamais une position certifiée. Sur site uniquement.</text>
  <rect x="240" y="124" width="500" height="114" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="138" r="8" fill="#4a9eff"/>
  <text x="256" y="141.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="270" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quels serveurs hébergent Analytics Server ?</text>
  <line x1="241" y1="152" x2="739" y2="152" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MACHINE</text>
  <text x="342" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CŒURS</text>
  <text x="392" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAMILLE DE PROCESSEUR</text>
  <text x="512" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIRTUALISATION</text>
  <text x="632" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLUSTER</text>
  <text x="252" y="189" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">OASSRV01</text>
  <rect x="342" y="176" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">16</text>
  <rect x="392" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD… ▾</text>
  <rect x="512" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Machine physique ▾</text>
  <rect x="632" y="176" width="60" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="189.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Cluster</text>
  <rect x="696" y="176" width="38" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="189.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="252" y="204" width="190" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="217.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">un serveur connu… ▾</text>
  <rect x="450" y="204" width="230" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="217.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">ou son nom</text>
  <rect x="688" y="204" width="46" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="711.0" y="217.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter</text>
  <rect x="240" y="248" width="500" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="262" r="8" fill="#4a9eff"/>
  <text x="256" y="265.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="270" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les clusters derrière les machines virtuelles</text>
  <line x1="241" y1="276" x2="739" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="292" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Aucune machine virtuelle ne nomme un cluster.</text>
  <rect x="240" y="308" width="500" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="322" r="8" fill="#4a9eff"/>
  <text x="256" y="325.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="270" y="326" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les bases de données</text>
  <line x1="241" y1="336" x2="739" y2="336" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="359" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">JDEDB01</text>
  <text x="342" y="359" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Référentiel</text>
  <rect x="462" y="346" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="359.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Enterprise Edition ▾</text>
  <rect x="592" y="351" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M594.5,356.5 L596.8,358.8 L600.8,354" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="609" y="360" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards l'utilise aussi</text>
  <text x="252" y="385" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">DWHDB01</text>
  <text x="342" y="385" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Entrepôt de données</text>
  <rect x="462" y="372" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="385.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Express Edition ▾</text>
  <rect x="592" y="377" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="609" y="386" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards l'utilise aussi</text>
  <rect x="240" y="418" width="500" height="154" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="432" r="8" fill="#4a9eff"/>
  <text x="256" y="435.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="270" y="436" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les utilisateurs</text>
  <line x1="241" y1="446" x2="739" y2="446" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="467" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Où sont gardés les utilisateurs ?</text>
  <rect x="578" y="454" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="467.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Dans WebLogic ▾</text>
  <text x="252" y="493" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Combien d'utilisateurs Analytics Server a-t-il ?</text>
  <rect x="578" y="480" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="493.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">240</text>
  <line x1="252" y1="506" x2="728" y2="506" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="252" y="522" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Les compter dans WebLogic</text>
  <rect x="252" y="530" width="300" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="543.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">WLS_LDAP ▾</text>
  <rect x="560" y="530" width="60" height="20" rx="5" fill="url(#oasl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="590.0" y="543.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Compter</text>
  <text x="252" y="564" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">240 utilisateurs comptés le 2026-11-20 (pool WLS_LDAP)</text>
  <rect x="752.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="143" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">8</text>
  <text x="762.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS NÉCESSAIRES</text>
  <rect x="920.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="143" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="930.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS SOUSCRITS</text>
  <rect x="752.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="189" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">240</text>
  <text x="762.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAMED USER PLUS NÉCESSAIRES</text>
  <rect x="920.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="189" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">100</text>
  <text x="930.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAMED USER PLUS SOUSCRITS</text>
  <rect x="752.0" y="216" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="235" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">350 000 €</text>
  <text x="762.0" y="248" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISQUE ESTIMÉ</text>
  <rect x="920.0" y="216" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="235" fill="#4ade80" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="930.0" y="248" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENCORE À RÉPONDRE</text>
  <rect x="752" y="266" width="328" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="284" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que cela signifie</text>
  <rect x="760" y="296" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="296" width="3" height="24" fill="#f87171"/>
  <text x="770" y="311" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="824" y="311" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">240 Named User Plus nécessaires (240 utilisateurs…</text>
  <rect x="760" y="326" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="326" width="3" height="24" fill="#fb923c"/>
  <text x="770" y="341" fill="#fb923c" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">À VÉRIFIER</text>
  <text x="824" y="341" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">DWHDB01 est un entrepôt de données sur Express…</text>
  <rect x="760" y="356" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="356" width="3" height="24" fill="#4ade80"/>
  <text x="770" y="371" fill="#4ade80" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">CORRECT</text>
  <text x="824" y="371" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">JDEDB01 est aussi la base de JD Edwards…</text>
  <rect x="752" y="394" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="412" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est compté</text>
  <text x="762" y="432" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">OASSRV01 : 16 cœurs → 8</text>
  <rect x="752" y="452" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="470" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Souscrit</text>
  <text x="762" y="490" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Analytics Server · 100 Named User Plus</text>
  <rect x="20" y="132" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Machines</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">serveurs, tailles partagées avec nomajde</text>
  <line x1="205" y1="149.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="258" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Clusters</text>
  <text x="30" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque hôte physique, avec ses cœurs</text>
  <line x1="205" y1="275.0" x2="240" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="318" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Bases</text>
  <text x="30" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">référentiel, entrepôt, édition</text>
  <line x1="205" y1="335.0" x2="240" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="428" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Utilisateurs</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque réponse enregistrée</text>
  <line x1="205" y1="445.0" x2="240" y2="442" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="20" y="536" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="551" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les compter dans WebLogic</text>
  <text x="30" y="564" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">via un pool d'annuaire</text>
  <line x1="205" y1="553.0" x2="252" y2="550" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contrat</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une installation par contrat</text>
  <line x1="1115" y1="53.0" x2="932" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="130" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nécessaire face au souscrit</text>
  <text x="1125" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">et le risque estimé</text>
  <line x1="1115" y1="147.0" x2="1080" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="316" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Constats</text>
  <text x="1125" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">risque · à vérifier · non connu · correct</text>
  <line x1="1115" y1="333.0" x2="1080" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="415" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="430" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est compté</text>
  <text x="1125" y="443" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque machine ou cluster entier</text>
  <line x1="1115" y1="432.0" x2="1080" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
  <rect x="1115" y="493" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="508" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Souscrit</text>
  <text x="1125" y="521" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les lignes du contrat sur le produit</text>
  <line x1="1115" y1="510.0" x2="1080" y2="481" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oasl-arrow)"/>
</svg>

---

## Le contrat \{#contract\}

Une installation est rattachée à un contrat : le champ **Contrat** de l'en-tête le sélectionne (`numéro · description`), et la page rouvre le dernier consulté — à la première ouverture, un contrat qui comporte déjà une ligne Analytics Server ou une machine saisie. Sans aucun contrat, la page invite à en créer un dans **Licences → [CSI](./csi.md)**. **Relire** relit l'installation.

Les lignes de contrat retenues pour Analytics Server sont celles qui portent sur *Analytics Server* et sur *Business Intelligence Suite Foundation Edition* (y compris sa version *for Oracle Applications*).

### Une installation, plusieurs contrats \{#several-contracts\}

Licences achetées en deux commandes pour les mêmes machines, ou Named User Plus ajoutés plus tard par un autre contrat : l'installation n'est décrite **qu'une fois**, sous un seul contrat. Dans le bloc **Souscrit** de ce contrat, **un autre contrat la couvre aussi…** désigne les autres contrats ; leurs lignes sont alors comptées avec celles de l'installation, chacune précédée de son numéro de contrat, et **Retirer** enlève un contrat de la liste. Seul un contrat sans machine propre pour ce produit, et qui n'est pas déjà compté avec une autre installation, peut être choisi.

Ouverte sur un contrat compté avec un autre, la page l'indique — *Les lignes de ce contrat sont comptées avec l'installation décrite sous le contrat …* — et **Ouvrir le contrat …** mène à l'installation ; aucune machine ne peut y être saisie. Dans **Revues → Licences**, l'installation apparaît une seule fois, sous ses contrats reliés par `+` (`10000001 + 10000002`).

---

## Le questionnaire \{#questionnaire\}

Quatre étapes numérotées occupent la partie gauche. Chaque modification est enregistrée immédiatement — une liste dès qu'une valeur est choisie, un nombre à la sortie du champ — puis l'analyse de droite est relue.

### 1 · Quels serveurs hébergent Analytics Server ? \{#step-servers\}

Toute machine où Analytics Server est installé ou en service. Ajouter une machine depuis **un serveur connu…** (les machines de l'écran [Taille des serveurs](../../nomajde/monitoring/server-sizes.md) de nomajde) ou saisir **son nom**, puis **Ajouter**.

| Champ | Valeur attendue |
|---|---|
| **Cœurs** | Le nombre de cœurs de la machine. |
| **Famille de processeur** | Sa puce, avec le facteur de cœur de la *Processor Core Factor Table* d'Oracle (0,5 pour Intel Xeon et AMD EPYC, 1 pour IBM POWER6 et suivants…). |
| **Virtualisation** | *Machine physique*, *Partition matérielle*, *Machine virtuelle VMware*, *Autre machine virtuelle*. |
| **Cluster** | Pour une machine virtuelle, le cluster qui l'héberge. |

Ces valeurs sont celles de [Taille des serveurs](../../nomajde/monitoring/server-sizes.md#processor-licences) : une seule table de machines, partagée avec le dimensionnement de la plateforme. **Retirer** sort la machine de l'installation ; sa ligne dans Taille des serveurs est conservée.

### 2 · Les clusters derrière les machines virtuelles \{#step-clusters\}

Une machine virtuelle qui n'est pas une partition matérielle compte **tous** les hôtes physiques de son cluster. Pour chaque cluster cité à l'étape 1, saisir ses hôtes avec leurs cœurs et leur famille de processeur ; ils sont enregistrés dans Taille des serveurs avec le rôle *Hôte physique d'un cluster (hyperviseur)*. La page affiche *Aucune machine virtuelle ne nomme un cluster.* quand aucune n'en cite.

### 3 · Les bases de données \{#step-databases\}

La base du référentiel, et chaque base que lit Analytics Server (l'entrepôt de données). Ajouter chacune sous **Référentiel** ou **Entrepôt de données**, choisir son **Édition** — *Express Edition*, *Standard Edition 2*, *Enterprise Edition* ou *Pas Oracle* — et cocher **JD Edwards l'utilise aussi** quand c'est la base JD Edwards.

### 4 · Les utilisateurs \{#step-users\}

| Question | Réponse |
|---|---|
| **Où sont gardés les utilisateurs ?** | *Dans WebLogic*, *Dans une base de données* ou *Authentification unique (SSO)*. |
| **Combien d'utilisateurs Analytics Server a-t-il ?** | Un nombre ; *non connu* tant que le champ est vide. |
| **Taille du référentiel Express Edition (Go)** | Posée seulement quand le référentiel est en Express Edition. |

Une réponse vidée redevient *non connu*.

---

## Compter les utilisateurs gardés dans WebLogic \{#weblogic\}

Quand les utilisateurs sont *Dans WebLogic*, l'étape propose **Les compter dans WebLogic** : WebLogic garde ses utilisateurs dans un annuaire embarqué, que Nomasx-1 lit au travers d'un **pool d'annuaire** (Liberty → Pools, voir [Un annuaire LDAP](../../framework/connectors.md#pool-ldap)) :

| Champ du pool | Valeur |
|---|---|
| **Hôte**, **Port** | Le serveur d'administration WebLogic et son port, en `ldap://` (`ldap://<serveur d'administration>:<son port>`). |
| **DN de base** | `dc=<nom du domaine>` |
| **Compte** | `cn=Admin` |
| **Mot de passe** | Le mot de passe *Embedded LDAP* du domaine (console WebLogic → le domaine → Sécurité → Embedded LDAP). |

Choisir le pool puis cliquer sur **Compter**. Les utilisateurs du royaume par défaut sont comptés sous `ou=people,ou=myrealm` de cette base (un pool dont la base commence déjà par `ou=` est lu tel quel). Le résultat devient la réponse à *Combien d'utilisateurs*, avec sa date et son pool : *N utilisateurs comptés le … (pool …)*. Un nombre saisi à la main prend le dessus, et la mention disparaît. La page affiche *Aucun pool d'annuaire n'existe encore.* quand aucun n'est disponible ; un annuaire illisible renvoie la cause (mot de passe refusé, base introuvable).

Les utilisateurs gardés dans une base de données ou derrière une authentification unique restent un nombre déclaré.

---

## Ce que cela signifie \{#analysis\}

La partie droite présente la lecture des réponses par le serveur.

| Bloc | Contenu |
|---|---|
| **Chiffres** | *Processeurs nécessaires* (en rouge au-delà des processeurs souscrits), *Processeurs souscrits*, *Named User Plus nécessaires* et *souscrits* (si le contrat comporte une ligne Named User Plus), *Risque estimé* en euros, *Encore à répondre*. |
| **Ce que cela signifie** | Les constats, risques en tête, chacun avec son niveau : **risque**, **à vérifier**, **non connu**, **correct**. |
| **Ce qui est compté** | Chaque serveur (`nom : cœurs → processeurs`) ou cluster entier (`cluster nom : cœurs sur hôtes → processeurs`). |
| **Souscrit** | Les lignes du contrat sur Analytics Server, avec quantité et métrique — et celles des autres contrats qui couvrent l'installation, chacune avec son numéro de contrat (voir [Une installation, plusieurs contrats](#several-contracts)) ; *aucune ligne pour ce produit* sinon. |

### Le calcul des licences \{#processors\}

Les cœurs de chaque serveur sont additionnés par facteur de cœur, multipliés par ce facteur, puis arrondis une seule fois à l'entier supérieur ; une machine virtuelle sous VMware ou un autre hyperviseur compte le cluster entier qu'elle nomme. Les **Named User Plus nécessaires** correspondent aux utilisateurs déclarés, jamais en dessous du minimum par processeur de la liste de prix multiplié par le nombre de processeurs nécessaires. Ce qui dépasse la souscription est valorisé au prix public, avec trois ans de support.

### Les constats \{#findings\}

| Niveau | Constat |
|---|---|
| risque | **Cluster compté en entier** — ses cœurs sur l'ensemble de ses hôtes déterminent les licences au processeur, du fait du serveur qui le nomme. |
| risque | **Aucune ligne pour ce produit** — les licences au processeur qu'un audit réclamerait, valorisées. |
| risque | **Licences au processeur manquantes** — nécessaires, souscrites, manquantes, valorisées. |
| risque | **Named User Plus manquants** — nécessaires (utilisateurs, minimum par processeur), souscrits, manquants, valorisés. |
| risque | **Référentiel au-delà d'Express Edition** — plus de 12 Go : une édition sous licence est requise. |
| risque | **Base sans ligne** — un référentiel ou un entrepôt en Standard Edition 2 ou Enterprise Edition, non partagé avec JD Edwards, sans ligne pour cette édition. |
| à vérifier | **Entrepôt de données en Express Edition** — vérifier que sa taille et son usage restent dans les limites de l'édition. |
| non connu | Aucun serveur saisi · un serveur sans cœurs · une machine virtuelle dont les hôtes du cluster ne sont pas saisis (ses propres cœurs ne sont qu'un minimum) · un hôte de cluster sans cœurs · emplacement ou nombre des utilisateurs sans réponse · aucun référentiel · une édition non saisie. |
| correct | Licences au processeur couvertes (*Licences au processeur : 1 nécessaires, 2 souscrites — couvert.*) · Named User Plus couverts (nécessaires, utilisateurs, minimum, souscrits) · Référentiel dans les 12 Go d'Express Edition · base également utilisée par JD Edwards (à vérifier : le contrat doit permettre cet usage) · base couverte par une ligne. |

Les mêmes phrases, dans la langue du lecteur, accompagnent l'installation dans **Revues → Licences**, dans son PDF et dans le rapport d'audit des licences ; ce qui lui manque y entre dans le risque estimé.

---

## Conseils & bonnes pratiques

- **Compter les utilisateurs WebLogic plutôt que les saisir** : le chiffre garde sa date et son pool, et se recompte en un clic avant une discussion.
- **Déclarer aussi les bases de l'entrepôt de données** : un entrepôt en Enterprise Edition sans ligne représente une licence à part entière.
- **Nommer le cluster de chaque machine virtuelle et saisir ses hôtes.** Sans eux, le chiffre n'est qu'un minimum, et la page le signale.
- **Réserver la page à la discussion avec Oracle**, comme une hypothèse au prix public, jamais comme un décompte certifié.
