---
title: Oracle Data Integrator
description: "Page Licences → Oracle Data Integrator de Nomasx-1 — un questionnaire sur une installation sur site (machines des agents, cluster derrière une machine virtuelle, base du référentiel et son édition, utilisateurs), chaque réponse enregistrée, et en regard les processeurs nécessaires face aux processeurs souscrits, le risque estimé et les constats."
keywords: [Nomasx-1, licences, Oracle Data Integrator, ODI, agent, licence au processeur, facteur de cœur, cluster VMware, référentiel, Express Edition, Named User Plus, JD Edwards]
---

# Oracle Data Integrator

La page **Oracle Data Integrator** décrit une installation sur site de Data Integrator pour un contrat de licence et indique en regard ce que devraient être ses licences. Rien de Data Integrator n'est lu sur les machines : la page **pose les questions** — machines où s'exécute un agent, cluster derrière une machine virtuelle, base du référentiel et son édition, utilisateurs —, **enregistre chaque réponse telle qu'elle est donnée** et relit l'analyse après chacune : **processeurs nécessaires face aux processeurs souscrits**, **Named User Plus face au minimum**, **risque estimé** et **constats**.

Accès : **Licences → Oracle Data Integrator**.

:::warning[Une hypothèse]
La page le rappelle en tête : *une hypothèse construite à partir de vos réponses et des règles publiques d'Oracle, à discuter avec Oracle — jamais une position certifiée. Sur site uniquement : dans le cloud d'Oracle les licences sont incluses.*
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="odil-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="odil-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="odil-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="odil-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="542" rx="14" fill="url(#odil-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle Data Integrator</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Où tournent les agents, et ce que cela représente en licences au processeur.</text>
  <rect x="1025" y="36" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="847" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="857" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">123456789 · ERP ▾</text>
  <text x="831" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Contrat</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="22" rx="6" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.5)" strokeWidth="1"/>
  <text x="250" y="105" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">Une hypothèse construite à partir de vos réponses et des règles publiques d'Oracle — jamais une position certifiée. Sur site uniquement.</text>
  <rect x="240" y="124" width="500" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="138" r="8" fill="#4a9eff"/>
  <text x="256" y="141.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="270" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où tourne un agent ?</text>
  <line x1="241" y1="152" x2="739" y2="152" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MACHINE</text>
  <text x="342" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CŒURS</text>
  <text x="392" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAMILLE DE PROCESSEUR</text>
  <text x="512" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIRTUALISATION</text>
  <text x="632" y="168" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLUSTER</text>
  <text x="252" y="189" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">JDEENT01</text>
  <rect x="342" y="176" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <rect x="392" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD… ▾</text>
  <rect x="512" y="176" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Machine virtuelle… ▾</text>
  <rect x="632" y="176" width="60" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="189.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">PRODCL</text>
  <rect x="696" y="176" width="38" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="189.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <text x="252" y="217" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ODIAGT01</text>
  <rect x="342" y="204" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="217.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <rect x="392" y="204" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="217.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD… ▾</text>
  <rect x="512" y="204" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="217.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Machine physique ▾</text>
  <rect x="632" y="204" width="60" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="217.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Cluster</text>
  <rect x="696" y="204" width="38" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="217.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="252" y="232" width="190" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="245.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">un serveur connu… ▾</text>
  <rect x="450" y="232" width="230" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="245.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">ou son nom</text>
  <rect x="688" y="232" width="46" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="711.0" y="245.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter</text>
  <rect x="240" y="270" width="500" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="284" r="8" fill="#4a9eff"/>
  <text x="256" y="287.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="270" y="288" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les clusters derrière les machines virtuelles</text>
  <line x1="241" y1="298" x2="739" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="316" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODCL</text>
  <text x="252" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ESXHOST01</text>
  <rect x="342" y="321" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="334.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">32</text>
  <text x="252" y="354" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ESXHOST02</text>
  <rect x="342" y="341" width="40" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="354.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">32</text>
  <text x="392" y="354" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">… une ligne par hôte physique</text>
  <rect x="240" y="372" width="500" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="386" r="8" fill="#4a9eff"/>
  <text x="256" y="389.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="270" y="390" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les bases de données</text>
  <line x1="241" y1="400" x2="739" y2="400" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="423" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ODIREP01</text>
  <text x="342" y="423" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Référentiel</text>
  <rect x="462" y="410" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="423.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Express Edition ▾</text>
  <rect x="592" y="415" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="609" y="424" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards l'utilise aussi</text>
  <rect x="240" y="456" width="500" height="90" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="470" r="8" fill="#4a9eff"/>
  <text x="256" y="473.5" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="270" y="474" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les utilisateurs</text>
  <line x1="241" y1="484" x2="739" y2="484" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="505" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Combien de personnes lancent ou consultent les transformations ?</text>
  <rect x="578" y="492" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="505.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">non connu</text>
  <text x="252" y="531" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Taille du référentiel Express Edition (Go)</text>
  <rect x="578" y="518" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="531.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">6</text>
  <rect x="752.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="143" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">52</text>
  <text x="762.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS NÉCESSAIRES</text>
  <rect x="920.0" y="124" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="143" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="930.0" y="156" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS SOUSCRITS</text>
  <rect x="752.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762.0" y="189" fill="#f87171" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">1 980 000 €</text>
  <text x="762.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISQUE ESTIMÉ</text>
  <rect x="920.0" y="170" width="160.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="930.0" y="189" fill="#c084fc" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="930.0" y="202" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENCORE À RÉPONDRE</text>
  <rect x="752" y="220" width="328" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que cela signifie</text>
  <rect x="760" y="250" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="250" width="3" height="24" fill="#f87171"/>
  <text x="770" y="265" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="824" y="265" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Le cluster PRODCL est compté en entier : 96 cœurs…</text>
  <rect x="760" y="280" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="280" width="3" height="24" fill="#f87171"/>
  <text x="770" y="295" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="824" y="295" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Un agent tourne sur JDEENT01, un serveur JD Edwards…</text>
  <rect x="760" y="310" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="310" width="3" height="24" fill="#f87171"/>
  <text x="770" y="325" fill="#f87171" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="824" y="325" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">52 licences au processeur nécessaires, 4 souscrites…</text>
  <rect x="760" y="340" width="312" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="760" y="340" width="3" height="24" fill="#4ade80"/>
  <text x="770" y="355" fill="#4ade80" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">CORRECT</text>
  <text x="824" y="355" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Le référentiel sur ODIREP01 (6 Go) est dans…</text>
  <rect x="752" y="378" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="396" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est compté</text>
  <text x="762" y="416" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">cluster PRODCL : 96 cœurs sur ESXHOST01… → 48</text>
  <rect x="752" y="436" width="328" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="762" y="454" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Souscrit sur ce contrat</text>
  <text x="762" y="474" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Data Integrator Enterprise Edition · 4 Processor</text>
  <rect x="20" y="132" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Machines</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">agents, tailles partagées avec nomajde</text>
  <line x1="205" y1="149.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="20" y="280" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Clusters</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque hôte physique, avec ses cœurs</text>
  <line x1="205" y1="297.0" x2="240" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="20" y="382" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Bases</text>
  <text x="30" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">référentiel, édition</text>
  <line x1="205" y1="399.0" x2="240" y2="396" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="20" y="466" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="481" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Utilisateurs</text>
  <text x="30" y="494" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque réponse enregistrée</text>
  <line x1="205" y1="483.0" x2="240" y2="480" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contrat</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une installation par contrat</text>
  <line x1="1115" y1="53.0" x2="932" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="130" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nécessaire face au souscrit</text>
  <text x="1125" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">et le risque estimé</text>
  <line x1="1115" y1="147.0" x2="1080" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="270" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Constats</text>
  <text x="1125" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">risque · à vérifier · non connu · correct</text>
  <line x1="1115" y1="287.0" x2="1080" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="399" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="414" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est compté</text>
  <text x="1125" y="427" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque machine ou cluster entier</text>
  <line x1="1115" y1="416.0" x2="1080" y2="403" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
  <rect x="1115" y="477" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="492" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Souscrit</text>
  <text x="1125" y="505" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les lignes du contrat sur le produit</text>
  <line x1="1115" y1="494.0" x2="1080" y2="465" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#odil-arrow)"/>
</svg>

---

## Le contrat \{#contract\}

Une installation est rattachée à un contrat : le champ **Contrat** de l'en-tête le sélectionne (`numéro · description`), et la page rouvre le dernier consulté — à la première ouverture, un contrat qui comporte déjà une ligne Data Integrator ou une machine saisie. Sans aucun contrat, la page invite à en créer un dans **Licences → [CSI](./csi.md)**. **Relire** relit l'installation.

---

## Le questionnaire \{#questionnaire\}

Quatre étapes numérotées occupent la partie gauche. Chaque modification est enregistrée immédiatement — une liste dès qu'une valeur est choisie, un nombre à la sortie du champ — puis l'analyse de droite est relue.

### 1 · Où tourne un agent ? \{#step-agents\}

Oracle compte chaque processeur où les transformations sont exécutées : toute machine portant un agent, quel que soit l'endroit où il a été installé. Ajouter une machine depuis **un serveur connu…** (les machines de l'écran [Taille des serveurs](../../nomajde/monitoring/server-sizes.md) de nomajde) ou saisir **son nom**, puis **Ajouter**.

| Champ | Valeur attendue |
|---|---|
| **Cœurs** | Le nombre de cœurs de la machine. |
| **Famille de processeur** | Sa puce, avec le facteur de cœur de la *Processor Core Factor Table* d'Oracle (0,5 pour Intel Xeon et AMD EPYC, 1 pour IBM POWER6 et suivants…). |
| **Virtualisation** | *Machine physique*, *Partition matérielle*, *Machine virtuelle VMware*, *Autre machine virtuelle*. |
| **Cluster** | Pour une machine virtuelle, le cluster qui l'héberge. |

Cœurs, famille, virtualisation et cluster sont ceux de [Taille des serveurs](../../nomajde/monitoring/server-sizes.md#processor-licences) : une seule table de machines, partagée avec le dimensionnement de la plateforme. **Retirer** sort la machine de l'installation ; sa ligne dans Taille des serveurs est conservée.

### 2 · Les clusters derrière les machines virtuelles \{#step-clusters\}

Une machine virtuelle qui n'est pas une partition matérielle compte **tous** les hôtes physiques de son cluster. Pour chaque cluster cité à l'étape 1, saisir ses hôtes avec leurs cœurs et leur famille de processeur ; ils sont enregistrés dans Taille des serveurs avec le rôle *Hôte physique d'un cluster (hyperviseur)*. La page affiche *Aucune machine virtuelle ne nomme un cluster.* quand aucune n'en cite.

### 3 · Les bases de données \{#step-databases\}

Le référentiel a besoin d'une base Oracle ; Express Edition peut suffire, dans ses limites. Ajouter la machine du référentiel, choisir son **Édition** — *Express Edition*, *Standard Edition 2*, *Enterprise Edition* ou *Pas Oracle* — et cocher **JD Edwards l'utilise aussi** quand le référentiel est installé dans la base JD Edwards.

### 4 · Les utilisateurs \{#step-users\}

| Question | Réponse |
|---|---|
| **Combien de personnes lancent ou consultent les transformations ?** | Un nombre ; *non connu* tant que le champ est vide. Il n'intervient que si le contrat comporte une ligne Named User Plus. |
| **Taille du référentiel Express Edition (Go)** | Posée seulement quand le référentiel est en Express Edition. |

Une réponse vidée redevient *non connu*.

---

## Ce que cela signifie \{#analysis\}

La partie droite présente la lecture des réponses par le serveur.

| Bloc | Contenu |
|---|---|
| **Chiffres** | *Processeurs nécessaires* (en rouge au-delà des processeurs souscrits), *Processeurs souscrits*, *Named User Plus nécessaires* et *souscrits* (si le contrat comporte une ligne Named User Plus), *Risque estimé* en euros, *Encore à répondre*. |
| **Ce que cela signifie** | Les constats, risques en tête, chacun avec son niveau : **risque**, **à vérifier**, **non connu**, **correct**. |
| **Ce qui est compté** | Chaque machine (`nom : cœurs → processeurs`) ou cluster entier (`cluster nom : cœurs sur hôtes → processeurs`). |
| **Souscrit sur ce contrat** | Les lignes du contrat sur Data Integrator, avec quantité et métrique — *aucune ligne pour ce produit* sinon. |

### Le calcul des processeurs \{#processors\}

Les cœurs de chaque machine sont additionnés par facteur de cœur, multipliés par ce facteur, puis arrondis une seule fois à l'entier supérieur. Une machine virtuelle sous VMware ou un autre hyperviseur compte le cluster entier qu'elle nomme ; une partition matérielle ne compte qu'elle-même. Les Named User Plus nécessaires correspondent aux utilisateurs déclarés, jamais en dessous du minimum par processeur de la liste de prix multiplié par le nombre de processeurs nécessaires. Ce qui dépasse la souscription est valorisé au prix public, avec trois ans de support.

### Les constats \{#findings\}

| Niveau | Constat |
|---|---|
| risque | **Cluster compté en entier** — ses cœurs sur l'ensemble de ses hôtes déterminent les licences au processeur, du fait de la machine qui le nomme. |
| risque | **Agent sur un serveur JD Edwards** — tous les cœurs de ce serveur comptent pour Data Integrator. |
| risque | **Aucune ligne pour ce produit** — les licences au processeur qu'un audit réclamerait, valorisées. |
| risque | **Licences au processeur manquantes** — nécessaires, souscrites, manquantes, valorisées. |
| risque | **Named User Plus manquants** — nécessaires (utilisateurs, minimum par processeur), souscrits, manquants, valorisés. |
| risque | **Référentiel au-delà d'Express Edition** — plus de 12 Go : une édition sous licence est requise. |
| risque | **Base sans ligne** — un référentiel en Standard Edition 2 ou Enterprise Edition, non partagé avec JD Edwards, sans ligne pour cette édition. |
| non connu | Aucune machine saisie · une machine sans cœurs · une machine virtuelle dont les hôtes du cluster ne sont pas saisis (ses propres cœurs ne sont qu'un minimum) · un hôte de cluster sans cœurs · une question sans réponse · aucun référentiel · une édition non saisie. |
| correct | Référentiel dans les 12 Go d'Express Edition · base également utilisée par JD Edwards (à vérifier : le contrat doit permettre cet usage) · base couverte par une ligne. |

Les mêmes phrases, dans la langue du lecteur, accompagnent l'installation dans **Revues → Licences**, dans son PDF et dans le rapport d'audit des licences ; ce qui lui manque y entre dans le risque estimé.

---

## Conseils & bonnes pratiques

- **Déclarer chaque agent**, y compris celui installé par commodité sur un serveur JD Edwards : il fait entrer tous les cœurs de ce serveur dans le décompte.
- **Nommer le cluster de chaque machine virtuelle et saisir ses hôtes.** Sans eux, le chiffre n'est qu'un minimum, et la page le signale.
- **Répondre jusqu'à ce que *Encore à répondre* indique 0** : une question restée ouverte est signalée *non connu*, jamais considérée comme correcte.
- **Réserver la page à la discussion avec Oracle**, comme une hypothèse au prix public, jamais comme un décompte certifié.
