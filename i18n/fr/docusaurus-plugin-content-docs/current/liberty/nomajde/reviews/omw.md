---
title: Object Management Workbench
description: "Revues → Object Management Workbench dans Nomajde : l'OMW de JD Edwards EnterpriseOne lu d'un seul tenant — un projet avec ses objets, ses utilisateurs et ses deux journaux, tout ce qui a été fait sur un objet, les projets et objets d'un utilisateur — et un nouveau projet, un utilisateur ou un objet ajouté à un projet, chaque fois par JD Edwards lui-même via son OMW web."
keywords: [Nomajde, JD Edwards, JDE E1, OMW, Object Management Workbench, projet OMW, objets des projets, journal OMW, F98220, F98221, F98222, F98210, F98211, P98220W, extraction, initiateur, AIS]
---

# Object Management Workbench

**Revues → Object Management Workbench** présente l'Object Management Workbench (OMW) de JD Edwards EnterpriseOne d'un seul tenant. JD Edwards le répartit sur plusieurs tables — les projets, les utilisateurs d'un projet et leur rôle, les objets d'un projet, le journal — ; la page part de ce sur quoi porte la question : **un projet** (ses objets, ses utilisateurs, son journal), **un objet** (les projets qui le contiennent, tout ce qui a été fait dessus) ou **un utilisateur** (ses projets, les objets qu'il détient). Statuts, types, rôles et actions sont désignés par leur nom et non par leur code, et chaque projet, objet ou utilisateur affiché dans une liste est un lien vers lui.

Trois opérations sont possibles depuis la page — **Nouveau projet**, **Ajouter un utilisateur**, **Ajouter un objet** —, chacune **réalisée par JD Edwards lui-même** : l'OMW applique ainsi ce qu'il fait toujours autour d'elles, le journal, l'initiateur, ses contrôles.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 376" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="omp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="omp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="omp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="omp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="352" rx="14" fill="url(#omp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Object Management Workbench</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Un projet avec ses objets, ses utilisateurs et son journal — ou tout ce qui a été fait sur un objet.</text>
  <rect x="240" y="78" width="244" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="79" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="277.0" y="93.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un projet</text>
  <line x1="314" y1="83" x2="314" y2="97" stroke="#334155" strokeWidth="1"/>
  <text x="348.0" y="93.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Un objet</text>
  <line x1="382" y1="83" x2="382" y2="97" stroke="#334155" strokeWidth="1"/>
  <text x="433.0" y="93.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Un utilisateur</text>
  <rect x="494" y="78" width="356" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="504" y="93.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">PRJ_AP01  AP check layout ▾</text>
  <rect x="860" y="78" width="100" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.0" y="93.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Nouveau projet</text>
  <rect x="240" y="114" width="250" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROJET</text>
  <text x="248" y="143" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">PRJ_AP01 — AP check layout</text>
  <rect x="498" y="114" width="150" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="506" y="143" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">11 New Project Pending Review</text>
  <rect x="656" y="114" width="110" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="664" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="664" y="143" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Enhancement</text>
  <rect x="774" y="114" width="80" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="782" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="782" y="143" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">E920</text>
  <rect x="862" y="114" width="98" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="870" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉÉ</text>
  <text x="870" y="143" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">2026-11-02</text>
  <rect x="240.0" y="160" width="174.0" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="250.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJETS</text>
  <text x="250.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="422.0" y="160" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="432.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEURS</text>
  <text x="432.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <rect x="604.0" y="160" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">JOURNAL DU PROJET</text>
  <text x="614.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <rect x="786.0" y="160" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="796.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">JOURNAL DES OBJETS</text>
  <text x="796.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="240" y="204" width="111" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.5" y="218.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter un objet</text>
  <rect x="240" y="234" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="376" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="522" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="582" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PATH CODE</text>
  <text x="652" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="732" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXTRAIT</text>
  <text x="808" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MACHINE</text>
  <text x="898" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTÉ</text>
  <rect x="240" y="266" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="282.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="376" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="522" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">E920</text>
  <text x="582" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DV920</text>
  <text x="652" y="282.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="732" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">oui</text>
  <text x="808" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DEVCLIENT01</text>
  <text x="898" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-11-03</text>
  <rect x="240" y="296" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="312.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">P0411|ZJDE0001</text>
  <text x="376" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Application Version</text>
  <text x="522" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">E920</text>
  <text x="582" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DV920</text>
  <text x="652" y="312.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="732" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="808" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DEVCLIENT01</text>
  <text x="898" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-11-03</text>
  <rect x="240" y="326" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="342.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">B0400047</text>
  <text x="376" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Business Function</text>
  <text x="522" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">E920</text>
  <text x="582" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DV920</text>
  <text x="652" y="342.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">MDURAND</text>
  <text x="732" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">oui</text>
  <text x="808" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DEVCLIENT02</text>
  <text x="898" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-11-05</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir de</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">projet, objet, utilisateur</text>
  <line x1="200" y1="87.0" x2="240" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre onglets</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objets · utilisateurs · 2 journaux</text>
  <line x1="200" y1="177.0" x2="240" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Noms cliquables</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers l'objet, l'utilisateur</text>
  <line x1="200" y1="277.0" x2="250" y2="282" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau projet</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">créé par JD Edwards</text>
  <line x1="1000" y1="57.0" x2="950" y2="78" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En-tête du projet</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">statuts et types nommés</text>
  <line x1="1000" y1="137.0" x2="960" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un objet</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisi dans la liste de son type</text>
  <line x1="1000" y1="217.0" x2="351" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
</svg>

Le sélecteur du haut choisit le point de départ ; la liste voisine propose les projets (avec leur statut et leur type), les objets connus de l'OMW (contenus aujourd'hui dans un projet, ou présents seulement dans le journal) ou les utilisateurs qui travaillent sur un projet. Quand il n'existe qu'un projet, il est choisi d'office.

---

## À partir d'un projet \{#project\}

L'en-tête donne le **Projet** et sa description, son **Statut**, son **Type**, sa **Version** et sa date de création (**Créé**) — et, quand le projet les porte, ses dates prévue et de fin et son numéro de SAR. Quatre onglets suivent, chacun avec son compteur :

| Onglet | Contenu |
|---|---|
| **Objets** | Les objets du projet : **Objet**, **Type**, **Version**, **Path code**, l'**Utilisateur** qui le détient, l'état **Extrait**, la **Machine** et la date d'ajout (**Ajouté**). |
| **Utilisateurs** | Les personnes qui travaillent sur le projet : **Utilisateur**, **Rôle** (tel que JD Edwards le nomme : Originator, Developer, Manager…), **Responsable**, date d'ajout. |
| **Journal du projet** | Ce qui a été fait sur le projet lui-même : création, ajout d'utilisateurs et d'objets. |
| **Journal des objets** | Le travail sur ses objets : conception, extraction, restitution… |

**Ajouter un objet** se trouve au-dessus de l'onglet Objets, **Ajouter un utilisateur** au-dessus de l'onglet Utilisateurs.

---

## À partir d'un objet ou d'un utilisateur \{#object-user\}

| Point de départ | Onglets |
|---|---|
| **Un objet** | **Journal** — tout ce qui a été fait sur l'objet, quel que soit le projet, avec le projet de chaque ligne ; **Projets** — les projets qui le contiennent aujourd'hui, avec leur description et leur statut, la personne qui le détient, extrait ou non, son path code. |
| **Un utilisateur** | **Projets** — les projets de l'utilisateur, avec son rôle sur chacun et s'il en est responsable ; **Objets** — les objets qu'il y détient. |

Un objet est proposé avec son type : un même nom utilisé sous deux types donne deux entrées.

---

## Le journal \{#log\}

<svg viewBox="0 0 1200 278" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oml-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oml-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oml-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oml-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="244" rx="14" fill="url(#oml-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="34" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJETS</text>
  <text x="250.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="422.0" y="34" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="432.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEURS</text>
  <text x="432.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <rect x="604.0" y="34" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">JOURNAL DU PROJET</text>
  <text x="614.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <rect x="786.0" y="34" width="174.0" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="796.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">JOURNAL DES OBJETS</text>
  <text x="796.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="240" y="82" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="336" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HEURE</text>
  <text x="398" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="474" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTION</text>
  <text x="600" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="676" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="786" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI S’EST PASSÉ</text>
  <rect x="240" y="114" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">▾ 2026-11-05</text>
  <text x="336" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">16:42:10</text>
  <text x="398" y="130.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">MDURAND</text>
  <text x="474" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Check Out</text>
  <text x="600" y="130.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">B0400047</text>
  <text x="676" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Business Function</text>
  <text x="786" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Action Check Out was called</text>
  <rect x="240" y="144" width="720" height="44" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="280" y="161" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">136F</text>
  <text x="316" y="161" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Action Check Out was called</text>
  <text x="280" y="178" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">153F</text>
  <text x="316" y="178" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Object B0400047 Checked Out · DV920 · DEVCLIENT02</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">› 2026-11-05</text>
  <text x="336" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">09:12:44</text>
  <text x="398" y="210.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">MDURAND</text>
  <text x="474" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Add Object to Project</text>
  <text x="600" y="210.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">B0400047</text>
  <text x="676" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Business Function</text>
  <text x="786" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Action Add Object to Pro…</text>
  <rect x="240" y="224" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">› 2026-11-03</text>
  <text x="336" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">11:05:31</text>
  <text x="398" y="240.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="474" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Check Out</text>
  <text x="600" y="240.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="676" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="786" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Action Check Out was called</text>
  <rect x="20" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux journaux</text>
  <text x="30" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le projet · ses objets</text>
  <line x1="200" y1="51.0" x2="240" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne s'ouvre</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les messages de JD Edwards</text>
  <line x1="200" y1="167.0" x2="316" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions nommées</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">d'après les codes de l'OMW</text>
  <line x1="1000" y1="107.0" x2="510" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui s’est passé</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les messages sur une ligne</text>
  <line x1="1000" y1="187.0" x2="920" y2="101" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
</svg>

Chaque ligne du journal est une action : **Date**, **Heure**, **Utilisateur**, **Action**, **Objet**, **Type**, **De** et **Vers** (statut et path code avant et après, pour une promotion), **Ce qui s’est passé** et le **Programme** qui l'a écrite. Une ligne s'ouvre sur son **détail** : les messages que JD Edwards a écrits pour cette action, rédigés en entier avec leurs valeurs — *Action Check Out was called*, *User was Added To Project: …* —, chacun précédé du code de son message. **Ce qui s’est passé** reprend ces messages sur une ligne.

Les 2 000 dernières actions d'un journal sont affichées ; un bandeau le signale quand il y en a davantage. La grille permet recherche, filtres, regroupements et export comme toute liste.

---

## Réalisé par JD Edwards \{#actions\}

<svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oma-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oma-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oma-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oma-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="244" rx="14" fill="url(#oma-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un objet — PRJ_AP01</text>
  <line x1="230" y1="58" x2="970" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE D'OBJET</text>
  <rect x="240" y="88" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">APPL  Application ▾</text>
  <text x="615" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE L'OBJET</text>
  <rect x="615" y="88" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">P0411  Supplier Ledger Inquiry ▾</text>
  <text x="240" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <rect x="240" y="138" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="152.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">E920 ▾</text>
  <text x="240" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Fait par JD Edwards lui-même, par son Object Management Workbench web : il écrit le journal</text>
  <text x="240" y="202" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">et fait du compte de la connexion AIS l'initiateur.</text>
  <line x1="230" y1="220" x2="970" y2="220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="900" y="230" width="60" height="22" rx="5" fill="url(#oma-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.0" y="244.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter</text>
  <rect x="830" y="230" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.0" y="244.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">D'abord le type</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis la liste de ses objets</text>
  <line x1="200" y1="87.0" x2="240" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Version</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">celle du projet, proposée</text>
  <line x1="200" y1="157.0" x2="240" y2="149" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom de l'objet</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisi, ou saisi sans liste</text>
  <line x1="1000" y1="87.0" x2="960" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JD Edwards l'ajoute, puis relecture</text>
  <line x1="1000" y1="217.0" x2="960" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
</svg>

Rien n'est inséré par SQL : chaque opération est réalisée par JD Edwards, via son serveur AIS, sous le compte JD Edwards de la connexion AIS — le compte qui devient l'initiateur du nouveau projet. L'OMW écrit alors son journal et applique ses propres contrôles, comme quand un développeur fait la même opération dans JD Edwards.

| Bouton | Champs | Ce que fait JD Edwards |
|---|---|---|
| **Nouveau projet** | **Nom du projet** et **Description** (obligatoires), **Type**, **Gravité**, **Code produit**, **Version**. | Remplit les formulaires de l'OMW web (P98220W) : *Add*, un projet, ses révisions saisies et validées. |
| **Ajouter un utilisateur** | **Utilisateur** (un utilisateur JD Edwards) et **Rôle**. | Passe par l'onglet *Project Members* du formulaire de l'OMW web, *Add User*. |
| **Ajouter un objet** | **Type d'objet**, **Nom de l'objet**, **Version** (celle du projet, proposée). | Appelle la fonction serveur qu'utilise l'OMW web pour ajouter un objet à un projet. |

Pour **Ajouter un objet**, le type se choisit d'abord ; l'objet se choisit ensuite **dans la liste de ce type** — applications, états, tables, fonctions métier, vues métier, structures de données, types de codes définis par l'utilisateur, versions d'applications et d'états, objets définis par l'utilisateur —, par son nom ou son code, avec son code produit (pour une version, son programme). Un type sans liste — un élément du dictionnaire de données, un menu — se saisit.

La page vérifie d'abord ce que JD Edwards refuserait : un projet qui existe déjà, un utilisateur qui a déjà ce rôle sur le projet, un objet que le projet contient déjà. Quand JD Edwards refuse, son message s'affiche dans la boîte de dialogue. Après l'opération, la page relit le projet et indique ce qui a été fait.

---

## Accès \{#access\}

La page se trouve dans le dossier **Revues** du menu Nomajde. Les rôles prédéfinis **Développeur** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). Les trois opérations demandent la connexion AIS, et le compte JD Edwards de cette connexion doit être autorisé à les réaliser dans l'OMW.

Les trois tables de l'OMW ont aussi leurs propres écrans en lecture seule sous **Développement → Object Management Workbench** — **Projets OMW**, **Objets des projets OMW**, **Journal OMW** — voir [Sociétés, articles, paramétrage et OMW](../master-data/delivered-screens.md#omw).

---

## Conseils & bonnes pratiques \{#tips\}

- Avant une montée de version, partir d'un objet : son journal indique qui l'a modifié, dans quel projet et quand.
- Partir d'un utilisateur pour voir ce qu'un développeur détient encore en extraction avant son départ.
- Lire le **Journal du projet** pour suivre la vie d'un projet — qui a ajouté qui, quels objets y sont entrés — à part du travail quotidien sur ses objets.
- Les opérations sont réalisées sous le compte de la connexion AIS : quand l'initiateur compte, donner à ce compte le rôle adapté dans l'OMW.

---

## Voir aussi

- [Retour au standard](./back-to-standard.md) — les objets standard modifiés, avec le projet OMW qui contient chacun.
- [Préparer la montée de version](../upgrade/analysis.md) — ce qu'une version impose de reprendre.
- [Références croisées](../cross-reference.md) — où un objet est utilisé.
