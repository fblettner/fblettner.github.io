---
title: Étapes
description: "Les dix types d'étapes de Nomaflow — sql_query, sql_copy, file_load, file_export, python, http, ldap_sync, call_job, report, notify — ce que fait chacun, ses champs et leurs valeurs par défaut, et ce qu'il enregistre dans l'exécution."
keywords: [Nomaflow, étapes, sql_query, sql_copy, file_load, python, http, ldap_sync, call_job, chargement de tableur, CSV, replace_partition, Liberty Next]
---

# Étapes

Une **étape** est une unité de travail d'une tâche. Les étapes s'exécutent dans l'ordre ; quand l'une échoue, les suivantes sont enregistrées comme *skipped: earlier step failed*.

| L'étape… | Type |
|---|---|
| lance une requête nommée d'un connecteur SQL | **`sql_query`** |
| copie une table entière d'un connecteur à un autre | **`sql_copy`** |
| charge un classeur ou un fichier CSV dans une table | **`file_load`** |
| écrit le résultat d'une requête de lecture dans un fichier Excel ou CSV | **`file_export`** |
| appelle une fonction Python d'un plugin | **`python`** |
| appelle une URL | **`http`** |
| lit un annuaire LDAP / Active Directory dans une table | **`ldap_sync`** |
| lance une autre tâche et l'attend | **`call_job`** |
| produit un fichier Excel ou PDF à partir d'une analyse enregistrée, d'un tableau de bord ou d'un rapport | **`report`** |
| envoie un message, accompagné des fichiers de l'exécution | **`notify`** |

Dans l'éditeur de tâche, le **+** d'une liaison du flux propose les dix types, exprimés en clair — *Copier une table*, *Exécuter une requête*, *Exécuter une fonction*, *Lire un annuaire*, *Appeler une adresse*, *Lancer un autre traitement*, *Charger un fichier*, *Exporter vers un fichier*, *Produire un rapport*, *Envoyer un message* — et insère l'étape à cet endroit ; un clic sur la carte d'une étape ouvre ses champs à côté du flux. Les cartes et l'en-tête du formulaire présentent le type de la même façon. Chaque liste déroulante du formulaire d'une étape s'ouvre avec sa recherche prête : la saisie filtre aussitôt, et une liste de lignes *code — description* est triée sur le code, une description se retrouvant en la tapant.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 822" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="782" rx="14" fill="url(#nfst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Paramètres de la tâche + le pipeline d'étapes</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="304.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour aux tâches</text>
  <text x="969" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <rect x="979" y="86" width="101" height="22" rx="5" fill="url(#nfst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1029.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="122" width="330" height="660" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="562" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="562" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="562" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="562" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="562" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="562" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="562" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="562" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="562" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="562" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="562" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="562" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="562" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="562" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="562" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="562" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="562" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="562" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="536" x2="562" y2="536" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="558" x2="562" y2="558" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="580" x2="562" y2="580" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="602" x2="562" y2="602" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="624" x2="562" y2="624" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="646" x2="562" y2="646" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="668" x2="562" y2="668" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="690" x2="562" y2="690" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="712" x2="562" y2="712" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="734" x2="562" y2="734" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="756" x2="562" y2="756" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="474" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="516" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="544" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="140" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="359" y="166" width="146" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHARGER UN FICHIER</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">→ sales.fact_sales</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="140" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTER UNE REQUÊTE</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="349" x2="282" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M280,345 L286,349 L280,353 Z" fill="#334155"/>
  <circle cx="269.0" cy="349" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="325" width="140" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="339" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVOYER UN MESSAGE</text>
  <text x="298" y="353" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="366" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="430" y1="349" x2="456" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M454,345 L460,349 L454,353 Z" fill="#334155"/>
  <circle cx="443.0" cy="349" r="8" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="443.0" y="352.5" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="462" y="336" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="353" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="490" y="353" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="387.0" y="363" width="170" height="200" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="399.0" y="382" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Copier une table</text>
  <text x="399.0" y="401" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Exécuter une requête</text>
  <text x="399.0" y="420" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Exécuter une fonction</text>
  <text x="399.0" y="439" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Lire un annuaire</text>
  <text x="399.0" y="458" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Appeler une adresse</text>
  <text x="399.0" y="477" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Lancer un autre traitement</text>
  <text x="399.0" y="496" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Charger un fichier</text>
  <text x="399.0" y="515" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Exporter vers un fichier</text>
  <text x="399.0" y="534" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Produire un rapport</text>
  <text x="399.0" y="553" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Envoyer un message</text>
  <rect x="584" y="122" width="496" height="660" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="598" y="134" width="99" height="16" rx="4" fill="#4ade80" fillOpacity="0.14" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="605" y="145.5" fill="#4ade80" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Charger un fichier</text>
  <text x="705" y="146" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">load-sales</text>
  <text x="777" y="146" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">→ sales.fact_sales</text>
  <rect x="970" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="994" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="1018" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1028.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1042" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="598" y="172" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOM DE L'ÉTAPE</text>
  <rect x="598" y="177" width="468" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="191.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">load-sales</text>
  <rect x="598" y="206" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="615" y="215" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Si cette étape échoue, exécuter quand même les suivantes (…)</text>
  <rect x="598" y="222" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="615" y="231" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Désactivée pour cette installation — ne s'exécute jamais (…)</text>
  <text x="598" y="249" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▸ Autres réglages</text>
  <text x="598" y="267" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LE FICHIER</text>
  <text x="598" y="283" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">D'OÙ VIENT LE FICHIER</text>
  <rect x="598" y="288" width="468" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="302.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Donné par la personne qui lance le job</text>
  <text x="1054" y="302.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="598" y="322" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">La fenêtre de lancement du job demande le fichier. Rien d'autre à régler ici.</text>
  <text x="598" y="346.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMMENT LE LIRE</text>
  <text x="598" y="362.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FEUILLE (EXCEL)</text>
  <rect x="598" y="367.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="382.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="756" y="362.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIGNE DES TITRES</text>
  <rect x="756" y="367.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="382.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1</text>
  <text x="914" y="362.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SÉPARATEUR (CSV)</text>
  <rect x="914" y="367.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="382.0" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">vide : détecté</text>
  <text x="598" y="396.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOMBRES ÉCRITS EN TEXTE</text>
  <rect x="598" y="401.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="416.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Détecté (1,5 est lu 1.5 — précisez…</text>
  <text x="894" y="416.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="396.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENCODAGE</text>
  <rect x="914" y="401.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="416.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">utf-8-sig</text>
  <text x="598" y="446.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LA TABLE QU'IL ALIMENTE</text>
  <text x="598" y="462.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="598" y="467.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="482.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales</text>
  <text x="736" y="482.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="756" y="462.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHÉMA</text>
  <rect x="756" y="467.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="482.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">public</text>
  <text x="894" y="482.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="462.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="914" y="467.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="482.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">fact_sales</text>
  <text x="1052" y="482.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="598" y="502.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLONNES NOMMÉES AUTREMENT DANS LE FICHIER</text>
  <text x="598" y="518.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Colonne de la table</text>
  <text x="823" y="518.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Son titre dans le fichier, ou sa position</text>
  <rect x="598" y="522.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="536.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="805" y="536.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="823" y="522.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="833" y="536.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Chiffre d'affaires</text>
  <rect x="1046" y="522.5" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="536.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="598" y="550.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALEURS ÉCRITES SUR CHAQUE LIGNE</text>
  <rect x="598" y="556.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="570.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">period</text>
  <text x="805" y="570.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="823" y="556.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="833" y="570.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">$&#123;params.period&#125;</text>
  <rect x="1046" y="556.5" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="570.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="598" y="600.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMMENT IL EST CHARGÉ</text>
  <text x="598" y="616.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIGNES DÉJÀ DANS LA TABLE</text>
  <rect x="598" y="621.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="636.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Remplacées, pou…</text>
  <text x="736" y="636.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="756" y="616.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REMPLACÉES SELON</text>
  <rect x="756" y="621.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="636.0" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="762" y="624.5" width="56" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="769" y="636.0" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">period ✕</text>
  <rect x="823" y="624.5" width="61" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="830" y="636.0" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">company ✕</text>
  <text x="598" y="652.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UNE CELLULE ILLISIBLE</text>
  <rect x="598" y="657.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="672.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Arrête le chargement</text>
  <text x="894" y="672.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="652.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAILLE DE LOT</text>
  <rect x="914" y="657.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="672.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10000</text>
  <text x="598" y="702.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONTRÔLES</text>
  <text x="598" y="718.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE QUI REFUSE LE FICHIER</text>
  <rect x="598" y="723.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="738.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">period_closed_get</text>
  <text x="894" y="738.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="718.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LUE SUR</text>
  <rect x="914" y="723.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="738.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">le connecteur de…</text>
  <text x="1052" y="738.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="598" y="754.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLONNE À TOTALISER</text>
  <rect x="598" y="759.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="774.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="736" y="774.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="756" y="754.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TOTAL ATTENDU</text>
  <rect x="756" y="759.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="774.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">@Totals!B2</text>
  <text x="914" y="754.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉCART ACCEPTÉ</text>
  <rect x="914" y="759.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="774.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">0</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur une carte</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre l'étape à côté du flux</text>
  <line x1="200" y1="137.0" x2="400" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu +</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les dix types, en clair</text>
  <line x1="200" y1="417.0" x2="387.0" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="600" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes de la table</text>
  <text x="30" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en liste, une fois la table choisie</text>
  <line x1="200" y1="617.0" x2="598" y2="532.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Autres réglages</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par défaut · délai · environnement</text>
  <line x1="200" y1="267.0" x2="598" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Icônes de l'étape</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">monter, descendre, cloner, supprimer</text>
  <line x1="1120" y1="93.0" x2="1010" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · D'où vient le fichier</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un choix, ses seuls champs</text>
  <line x1="1120" y1="227.0" x2="1076" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Comment le lire</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">feuille, titres, séparateurs</text>
  <line x1="1120" y1="307.0" x2="1076" y2="343.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · La table alimentée</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la table choisie dans le schéma</text>
  <line x1="1120" y1="397.0" x2="1076" y2="478.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="500" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="515" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Les lignes existantes</text>
  <text x="1130" y="528" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conservées, ou remplacées</text>
  <line x1="1120" y1="517.0" x2="1076" y2="597.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">5 · Ce qui est contrôlé</text>
  <text x="1130" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête de refus, total</text>
  <line x1="1120" y1="627.0" x2="1076" y2="734.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
</svg>

---

## Champs communs \{#common\}

| Champ | Défaut | Remarques |
|---|---|---|
| `name` | — | Affiché dans le détail de l'exécution ; unique dans la tâche. |
| `type` | — | L'un des dix types. |
| **Exécutée par défaut** — `enabled` | `true` | Décochée, l'étape est ignorée (enregistrée comme *skipped: disabled*), sauf si la personne qui lance la tâche la coche dans la fenêtre **Exécuter avec des paramètres**. |
| **Arrêtée après (secondes)** — `timeout_seconds` | `3600` | L'étape est annulée passé ce délai. Vide : une heure. |
| **Environnement** — `pool` | celui du connecteur | L'environnement (base ou serveur) sur lequel l'étape travaille, quand son connecteur en a plusieurs — voir [Connecteurs multi-pools](../framework/connectors.md#multi-pool). |
| `continue_on_failure` | `false` | `true` : quand l'étape échoue (après ses tentatives), les suivantes s'exécutent quand même et l'exécution finit en échec en la nommant — pour une tâche qui enchaîne des traitements indépendants. Une case à cocher dans l'éditeur d'étape ; pour toutes les étapes d'une tâche, `[jobs.step_defaults]`. |

**Exécutée par défaut**, **Arrêtée après (secondes)** et **Environnement** se trouvent sous **Autres réglages** dans le formulaire de l'étape, replié tant qu'aucun n'est renseigné. **Environnement** propose les environnements du connecteur de l'étape, ou tous ceux de l'installation pour une étape qui ne désigne pas de connecteur ; *celui du connecteur* laisse le choix au connecteur. Une étape *Copier une table* désigne plutôt un environnement de chaque côté (voir [plus bas](#sql-copy)) ; une étape *Lire un annuaire* a son pool d'annuaire.

**Désactiver une étape pour une installation.** Une étape dont l'installation n'a pas besoin — la collecte LDAP sans LDAP — se liste dans `disabled_steps = ["SECURITY_LDAP"]` de la tâche (la case *Désactivée pour cette installation* de l'éditeur d'étape). Elle ne s'exécute jamais, même quand une exécution ou un préréglage sélectionne toutes les étapes : la fenêtre **Exécuter avec des paramètres** la montre désactivée et non sélectionnable, l'exécution l'enregistre comme *skipped: turned off for this install*. Contrairement à `enabled` — la valeur par défaut qu'une exécution peut remplacer — c'est le dernier mot de l'exploitant, et l'installateur des applications sous licence la conserve d'une mise à jour à l'autre.

Quand une étape échoue sur une erreur de base de données, le détail de l'exécution affiche la phrase de la base elle-même — *invalid input for query argument $1: 2025 (expected str, got int)* — et l'instruction part dans le journal du serveur.

---

## Requête SQL — `sql_query` \{#sql-query\}

Lance une **requête nommée** d'un connecteur SQL — une requête définie sur la page du connecteur, en lecture ou en écriture.

| Champ | Requis | Remarques |
|---|---|---|
| `connector` | oui | Le connecteur SQL. |
| `query` | oui | Le nom de la requête, pas du texte SQL. |
| `params` | non | Les valeurs liées aux paramètres de la requête. |
| `pool` | non | **Environnement**, sous **Autres réglages** : un autre pool de l'ensemble du connecteur — voir [Connecteurs multi-pools](../framework/connectors.md#multi-pool). |

Enregistre le nombre de lignes renvoyées ou modifiées. Pour rafraîchir une vue matérialisée, appeler une procédure ou purger une table, écrire l'instruction comme une requête du connecteur, puis l'appeler ici.

---

## Copie SQL — `sql_copy` \{#sql-copy\}

Transfère les lignes d'une table source vers une table cible, éventuellement sur une autre base.

| Champ | Défaut | Remarques |
|---|---|---|
| `source` = `{connector, schema, table}` | — | Requis. **Schéma** et **Table** se choisissent dans la base du connecteur — les tables et vues du schéma, chacune avec son nombre de colonnes ; un nom peut toujours être saisi (une table pas encore créée, une base illisible). **Environnement** (`pool`) apparaît quand le connecteur en a plusieurs. |
| `target` = `{connector, schema, table}` | — | Requis. Idem. |
| `mode` | `overwrite` | *Tout remplacer* (`overwrite`) : les lignes sont écrites dans une table de travail `<table>__new`, qui remplace ensuite la cible en une transaction — la cible n'est jamais vide pendant la copie. *Ajouter à l'existant* (`append`) : les lignes s'ajoutent à la cible telle quelle. |
| `type_coercion` | `jde` | *Types JD Edwards (dates, montants)* (`jde`) applique les règles JD Edwards (décimales implicites, dates juliennes, codes complétés d'espaces) ; *Tels quels* (`none`) copie les valeurs sans les modifier. |
| `decimal_mode` | `truncate` | Avec `jde` : *Couper les décimales en trop* (`truncate`) ou *Garder toutes les décimales* (`preserve`). |
| `batch_size` | `10000` | Lignes par lot. |
| `strip_both_columns` | `[]` | Colonnes dont les valeurs sont débarrassées des espaces des deux côtés. |

*Ajouter les nouvelles lignes, mettre à jour les autres* (`upsert`) est proposé mais refusé à l'exécution : pour un ajout ou une mise à jour, écrire une requête `MERGE` / `ON CONFLICT` et l'appeler avec `sql_query`. Enregistre le nombre de lignes écrites.

---

## Chargement de fichier — `file_load` \{#file-load\}

Charge un classeur Excel (`.xlsx`, `.xlsm`) ou un fichier texte (`.csv`, `.txt`, `.tsv`) dans une table — selon une planification, sans personne au clavier, aux volumes d'une table de faits, et rejouable pour une période sans toucher aux autres.

Le formulaire de l'étape pose cinq questions, dans l'ordre où on se les pose — **Le fichier**, **Comment le lire**, **La table qu'il alimente**, **Comment il est chargé**, **Contrôles**. Chaque champ porte un libellé court, et son rôle est écrit dessous.

### Le fichier \{#file-load-source\}

**D'où vient le fichier** est un choix unique, qui n'affiche que ses propres champs :

| Choix | Champs | Remarques |
|---|---|---|
| *Donné par la personne qui lance le job* | — | La fenêtre de lancement demande le fichier : **Exécuter avec des paramètres** affiche un sélecteur de fichier pour chaque étape de ce type, de même que la page de la tâche ouverte [depuis le menu d'une application](./jobs/run-from-menu.md). Rien d'autre à régler. |
| *Un fichier sur le serveur* | **Fichier sur le serveur** (`path`) | Son chemin complet, qui peut contenir `${params.x}` (une valeur donnée au lancement), `${run.id}` et `${job.id}` : `/data/in/sales-${params.period}.xlsx`. |
| *Un dossier surveillé* | **Dossier** (`watch_dir`), **Fichiers à prendre** (`watch_pattern`, `*` par défaut) | Chaque fichier correspondant est chargé dans l'ordre des noms, chacun dans sa propre transaction, puis déplacé dans son sous-dossier `done/` ou `failed/` sous un nom horodaté. Un fichier en échec arrête l'exécution ; les fichiers suivants restent dans le dossier. Un dossier vide n'est pas une erreur. |

Choisir une source vide les champs des autres. Un fichier donné au lancement l'emporte toujours.

### Comment le lire \{#file-load-reading\}

| Champ | Défaut | Remarques |
|---|---|---|
| **Feuille (Excel)** — `sheet` | la première | Un nom ou un numéro (1 = la première). |
| **Ligne des titres de colonnes** — `header_row` | `1` | Les données commencent en dessous. Les lignes vides sont ignorées. |
| **Séparateur (CSV)** — `delimiter` | détecté | Détecté parmi `;` `,` tabulation `\|` s'il est vide. |
| **Nombres écrits en texte** — `decimal_separator` | *Détecté* | La façon dont le fichier écrit un nombre stocké en texte : *1,234.56 — un point pour les décimales* ou *1.234,56 — une virgule pour les décimales* ; l'autre caractère sert alors de séparateur de milliers. Les cellules d'un tableur typées comme nombres sont lues telles quelles. |
| **Encodage** — `encoding` | `utf-8-sig` | CSV uniquement. |

Un nombre écrit en texte suit le réglage **Nombres écrits en texte**. Les espaces et les apostrophes entre les chiffres sont toujours des séparateurs de milliers. Avec *Détecté* :

- quand un point et une virgule sont présents, le dernier est le séparateur décimal — `1.234,56` et `1,234.56` donnent tous deux 1234,56 ;
- plusieurs occurrences du même caractère sont des séparateurs de milliers — `1,234,567` ;
- une occurrence unique est le séparateur décimal — `12,5` et `12.5` donnent tous deux 12,5 — sauf dans une colonne d'entiers, où les groupes de trois chiffres sont des milliers : `1,000` donne 1000.

*Détecté* ne peut pas trancher le sens de `1,000` dans une colonne décimale — mille, ou un — et le lit comme 1 : il faut alors préciser le séparateur du fichier s'il écrit ainsi les milliers.

### La table qu'il alimente \{#file-load-table\}

| Champ | Remarques |
|---|---|
| **Connecteur**, **Schéma**, **Table** — `target` | Un connecteur SQL ; la table, choisie parmi celles du schéma (ou saisie), doit exister. Une fois la table nommée, ses colonnes sont proposées en liste dans les champs suivants. |
| **Colonnes nommées autrement dans le fichier** — `columns` | Des lignes **Colonne de la table** et **Son titre dans le fichier, ou sa position** (`#3` pour un fichier sans titres). Une colonne qui porte le même nom dans le fichier et dans la table est reconnue d'elle-même : seules les autres sont à indiquer. Les titres se retrouvent sans tenir compte de la casse, des espaces, de `_` et de `-`. **Ajouter une colonne** ajoute une ligne. |
| **Valeurs écrites sur chaque ligne** — `constants` | Des lignes **Colonne de la table** et **Valeur**, pour une colonne que le fichier ne contient pas : `${run.id}` (le numéro de l'exécution), `${params.period}` (une valeur donnée au lancement) ou un texte fixe. **Ajouter une valeur** ajoute une ligne. |

Chaque cellule est convertie au type de sa colonne : entiers, décimaux, dates (`2026-10-27`, `27/10/2026`, `27.10.2026`, `20261027`, et dates Excel), booléens (`1`, `true`, `yes`, `oui`…), texte. Un nombre saisi comme texte ne retrouve pas les zéros de tête que le tableur a déjà retirés.

### Comment il est chargé \{#file-load-mode\}

| Champ | Choix |
|---|---|
| **Lignes déjà dans la table** — `load_mode` | *Conservées — le fichier s'y ajoute* (`append`, par défaut). *Remplacées, pour ce que le fichier contient* (`replace_partition`) : les lignes de la table qui ont les mêmes valeurs que le fichier dans les colonnes **Remplacées selon** sont supprimées, puis le fichier est chargé — **en une seule transaction** : un chargement en échec laisse les données précédentes en place, et un mois corrigé ne remplace que ce mois. |
| **Remplacées selon** — `partition_by` | Les colonnes qui délimitent ce qui est remplacé (`period`, `company`), choisies parmi les colonnes de la table — obligatoires avec *Remplacées*. Les valeurs viennent des valeurs écrites sur chaque ligne quand elles couvrent toutes ces colonnes, sinon des valeurs distinctes trouvées dans le fichier. |
| **Une cellule illisible** — `on_error` | *Arrête le chargement* (`fail`, par défaut) : la première cellule invalide fait échouer l'étape et cite la ligne. *Sa ligne est écartée, et comptée comme rejetée* (`skip`) : les lignes invalides sont écrites dans un CSV (fichier, ligne, motif) proposé dans le détail de l'exécution. |
| **Taille de lot** — `batch_size` | `10000` lignes par insertion. |

### Contrôles \{#file-load-checks\}

| Champ | Remarques |
|---|---|
| **Requête qui refuse le fichier** — `refuse_query`, **Lue sur** — `refuse_connector` | Une requête, choisie parmi les requêtes de lecture du connecteur (**Lue sur** : le connecteur de la table par défaut), exécutée avant toute écriture. Elle reçoit les valeurs données au lancement et les valeurs écrites sur chaque ligne. Avec **Remplacées selon**, elle s'exécute une fois pour chaque jeu de valeurs présent dans le fichier, ces colonnes servant de paramètres liés (`:YEAR`, `:MONTH`, `:COMPANY_CODE`) : le contrôle suit le fichier, et non une valeur saisie au lancement. Si elle renvoie une ligne, le chargement est refusé et la première colonne donne le motif affiché : *période 2026-02 clôturée*. |
| **Colonne à totaliser** — `control_column`, **Total attendu** — `control_total`, **Écart accepté** — `control_tolerance` | La colonne, choisie parmi celles de la table, est additionnée sur les lignes chargées et comparée au total attendu : un nombre, `${params.total}`, ou une cellule du fichier (`@B2`, `@Totaux!B2`). Un autre total, au-delà de l'écart accepté, annule le chargement et cite les deux montants. |

### Dans l'exécution

Le détail de l'exécution affiche *N lues · N insérées · N rejetées* et, quand des lignes ont été rejetées, **Lignes rejetées (csv)** pour les télécharger. Le journal ajoute les partitions remplacées et les lignes supprimées.

Les fichiers envoyés et les fichiers de rejets vont dans la zone de travail des tâches, `.nomaflow/files` à côté de la configuration ; un envoi est limité à 200 Mo.

```toml title="jobs.toml"
[[jobs.steps]]
type = "file_load"
name = "load-sales"
path = "/data/in/ventes-${params.period}.xlsx"
sheet = "Ventes"
target = { connector = "sales", schema = "public", table = "fact_sales" }
columns = { company = "Société", article = "Article", qty = "Quantité", revenue = "CA" }
constants = { period = "${params.period}", batch_id = "${run.id}" }
load_mode = "replace_partition"
partition_by = ["period", "company"]
refuse_query = "period_closed_get"
control_column = "revenue"
control_total = "@Totaux!B2"
```

---

## Python — `python` \{#python\}

Appelle une fonction du plugin d'une application.

| Champ | Remarques |
|---|---|
| **Fonction** — `callable` | Choisie dans la liste des fonctions livrées par les applications : voir ci-dessous. Enregistrée sous la forme `module.chemin:fonction` — forme vérifiée à l'enregistrement, import au lancement de l'étape. |
| **Valeurs données à la fonction** — `op_kwargs` | Des lignes nom / valeur passées à la fonction, fusionnées par-dessus les paramètres partagés de la tâche. |

**Le sélecteur de fonction** est le même partout où une fonction se choisit — cette étape, l'étape fonction d'un [service](../framework/build/services.md), un point d'accès servi par une fonction, un outil de l'assistant, les étapes exécutées après un paquet de modifications :

<svg viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#nfcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#c084fc" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">python</text>
  <text x="292" y="46" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">refresh-totals</text>
  <text x="240" y="74" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FONCTION</text>
  <rect x="240" y="80" width="720" height="24" rx="5" fill="#0a0e1a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="96" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_refresh_totals</text>
  <text x="352.24" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rebuild the monthly totals from the loaded sales</text>
  <text x="946" y="96" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="240" y="110" width="720" height="216" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="248" y="118" width="704" height="22" rx="5" fill="#0a0e1a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="258" y="133" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher ou saisir une valeur…</text>
  <line x1="258" y1="123" x2="258" y2="136" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="164" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SALES · LOADS</text>
  <text x="254" y="187" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_load_items</text>
  <text x="334.68" y="187" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Load the item file into the items table</text>
  <text x="254" y="209" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_refresh_periods</text>
  <text x="364.13" y="209" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rebuild the period rows from the loaded sales</text>
  <rect x="246" y="217" width="708" height="20" rx="4" fill="rgba(74,158,255,0.14)"/>
  <text x="254" y="231" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_refresh_totals</text>
  <text x="358.24" y="231" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rebuild the monthly totals from the loaded sales</text>
  <text x="254" y="252" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SALES · REPORTS</text>
  <text x="254" y="275" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_month_digest</text>
  <text x="346.46" y="275" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The monthly digest: revenue by business unit</text>
  <text x="254" y="296" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STOCK · CHECKS</text>
  <text x="254" y="319" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_negative_stock</text>
  <text x="358.24" y="319" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">List the items whose stock is below zero</text>
  <text x="240" y="348" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sales.loads:j_refresh_totals</text>
  <text x="393.56" y="348" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">— Rebuild the monthly totals from the loaded sales</text>
  <text x="240" y="364" fill="#475569" fontSize="8" fontStyle="italic" fontFamily="system-ui, sans-serif">(sous le champ, liste fermée : ce qui est enregistré, et la description complète)</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La saisie filtre aussitôt</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la recherche a le focus</text>
  <line x1="200" y1="87.0" x2="248" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application · module</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un groupe chacun, par nom</text>
  <line x1="200" y1="187.0" x2="254" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est enregistré</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">module:fonction, description</text>
  <line x1="200" y1="317.0" x2="240" y2="344" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La fonction choisie</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son application en tête</text>
  <line x1="1000" y1="87.0" x2="930" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom et rôle</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">triés par nom</text>
  <line x1="1000" y1="217.0" x2="920" y2="227" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
</svg>

- la liste est **regroupée par application et par module** ; chaque ligne donne le nom de la fonction et son rôle en clair, dans l'ordre des noms ; l'application de la fonction déjà choisie vient en tête ;
- à l'ouverture de la liste, la recherche a le focus : la saisie filtre aussitôt, sur le nom ou la description ;
- sous le champ figurent ce qui est enregistré (`module:fonction`) et la description complète ; un nom absent de la liste reste saisissable, et la ligne du dessous indique *absente des fonctions livrées par les applications : vérifiez le nom*.

La fonction reçoit ses arguments par mot-clé et, quand elle les déclare par leur nom, `connectors` (le registre des connecteurs), `ctx` (l'exécution : `ctx.run_id`, `ctx.job_id`, `ctx.trigger`) et `settings`. Elle peut être `async` ou non. Sa valeur de retour : un `int` donne le nombre de lignes modifiées, un `dict` est conservé comme détail de l'étape, `None` convient ; une exception fait échouer l'étape. Pour écrire dans le journal de l'exécution, utiliser un logger d'un espace de noms enregistré. Le contrat complet se trouve dans [Écrire un callable](../framework/build/plugins/write-a-callable.md).

---

## HTTP — `http` \{#http\}

| Champ | Défaut | Remarques |
|---|---|---|
| `url` | — | Requis. Utilisée telle quelle. |
| `method` | `GET` | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`. |
| `headers` | `{}` | Envoyés tels quels. |
| `body` | aucun | Du texte, ou une table envoyée en JSON (avec `Content-Type: application/json` si aucun n'est défini). |

Une réponse 2xx réussit ; toute autre fait échouer l'étape avec le code. L'étape conserve le code, les 4 premiers Ko de la réponse et la durée. Les valeurs de l'environnement s'écrivent `${NOM}` dans `jobs.toml` et sont remplacées au chargement du fichier.

---

## Synchronisation LDAP — `ldap_sync` \{#ldap-sync\}

Lit des entrées d'un annuaire LDAP et lance une requête d'écriture d'un connecteur SQL pour chacune.

| Champ | Remarques |
|---|---|
| **Pool d'annuaire** (`pool`) | Un [pool de type annuaire LDAP](../framework/connectors.md#pool-ldap), réglé dans Liberty Next → Administrer → Pools : son serveur, son compte et sa base sont utilisés, et les trois champs suivants deviennent inutiles — le formulaire les masque. |
| **Serveur LDAP** (`server`) | Sans pool : `ldaps://ad.example.com:636`. |
| **DN de connexion**, **Mot de passe de connexion** (`bind_dn`, `bind_password`) | Sans pool : le compte de lecture ; écrire le mot de passe `${LDAP_PASSWORD}`. |
| **Base de recherche**, **Filtre de recherche** (`search_base`, `search_filter`) | Où et quoi chercher : `DC=example,DC=com`, `(objectClass=user)`. Avec un pool, une base de recherche vide reprend le DN de base du pool ; si le pool n'en a pas, l'étape échoue en demandant la base de recherche. |
| **Attributs** (`attributes`) | Les attributs à lire. |
| **Connecteur cible**, **Requête cible** (`target_connector`, `target_query`) | La requête d'écriture lancée pour chaque entrée. |
| **Correspondance attribut → colonne** (`mapping`) | Attribut LDAP → paramètre de la requête. Un attribut absent donne `NULL`. |

Enregistre le nombre d'entrées lues et de lignes écrites.

---

## Lancer une tâche — `call_job` \{#call-job\}

`target_job_id` désigne une autre tâche. L'étape la lance, attend sa fin et en prend le résultat : succès, échec ou annulation. La tâche appelée a sa propre exécution dans l'historique et reprend le niveau de journal et les paramètres d'exécution de l'appelante. Une tâche qui finirait par s'appeler elle-même est refusée.

---

## Rapport — `report` \{#report\}

Produit un document dans la zone de travail de l'exécution : une [analyse ou un tableau de bord enregistré de l'explorateur de données](../framework/explorer/saved-and-dashboards.md), ou un rapport d'un plugin. Suivie d'une étape `notify`, elle fait d'une **synthèse planifiée** une tâche ordinaire.

<svg viewBox="0 0 1320 482" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfdg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfdg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfdg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfdg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="442" rx="14" fill="url(#nfdg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Un clic sur la carte du rapport, puis sur celle du message : chacune ouvre ses champs à côté du flux.</text>
  <rect x="240" y="93" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="110" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="268" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="314" y1="106" x2="340" y2="106" stroke="#334155" strokeWidth="2"/>
  <path d="M338,102 L344,106 L338,110 Z" fill="#334155"/>
  <circle cx="327.0" cy="106" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="327.0" y="109.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="346" y="82" width="154" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="343" y="79" width="160" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="356" y="96" fill="#c084fc" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUIRE UN RAPPORT</text>
  <text x="356" y="110" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">revenue</text>
  <text x="356" y="123" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">analysis:revenue_by_bu…</text>
  </g>
  <line x1="502" y1="106" x2="528" y2="106" stroke="#334155" strokeWidth="2"/>
  <path d="M526,102 L532,106 L526,110 Z" fill="#334155"/>
  <circle cx="515.0" cy="106" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="515.0" y="109.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="534" y="82" width="154" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="531" y="79" width="160" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="544" y="96" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVOYER UN MESSAGE</text>
  <text x="544" y="110" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="544" y="123" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="690" y1="106" x2="716" y2="106" stroke="#334155" strokeWidth="2"/>
  <path d="M714,102 L720,106 L714,110 Z" fill="#334155"/>
  <circle cx="703.0" cy="106" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="703.0" y="109.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="722" y="93" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="736" y="110" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="750" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="240" y="150" width="410" height="296" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="670" y="150" width="410" height="296" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="254" y="162" width="104" height="16" rx="4" fill="#c084fc" fillOpacity="0.14" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="261" y="173.5" fill="#c084fc" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Produire un rapport</text>
  <text x="366" y="174" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="254" y="200" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUOI RENDRE</text>
  <text x="254" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="254" y="221" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="235.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Une analyse enreg…</text>
  <text x="364" y="235.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="384" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MODÈLE D'EXPLORATION</text>
  <rect x="384" y="221" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="235.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sales · sales</text>
  <text x="494" y="235.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ANALYSES</text>
  <rect x="514" y="221" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="235.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">revenue_by_bu…</text>
  <text x="624" y="235.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="262" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="254" y="267" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="281.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="364" y="281.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="384" y="262" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="384" y="267" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="281.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Mois dernier</text>
  <text x="494" y="281.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="262" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOM DU FICHIER</text>
  <rect x="514" y="267" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="281.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">monthly-sales</text>
  <text x="254" y="308" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DU (DATE FIXE)</text>
  <rect x="254" y="313" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="327.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="384" y="308" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AU (DATE FIXE)</text>
  <rect x="384" y="313" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="327.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="514" y="320" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Des dates fixes à la place de</text>
  <text x="514" y="330.5" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">la période : les deux, ou</text>
  <text x="514" y="341.0" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">aucune.</text>
  <text x="254" y="354" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDRE COMME L'UTILISATEUR</text>
  <rect x="254" y="359" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="373.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">cfo</text>
  <text x="514" y="354" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDRE COMME LE RÔLE</text>
  <rect x="514" y="359" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="373.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sans restriction</text>
  <text x="624" y="373.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="404" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Le nom de l'étape, les deux cases et Autres réglages sont au-dessus, comme pour toute étape.</text>
  <rect x="684" y="162" width="99" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="691" y="173.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Envoyer un message</text>
  <text x="791" y="174" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">send</text>
  <text x="684" y="200" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="684" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESTINATAIRES</text>
  <rect x="684" y="223" width="104" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="691" y="234.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle · management ✕</text>
  <rect x="796" y="221" width="31" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="811.5" y="234.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rôle</text>
  <rect x="827" y="221" width="63" height="20" rx="0" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="858.5" y="234.5" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <rect x="890" y="221" width="45" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="912.5" y="234.5" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Adresse</text>
  <text x="684" y="246" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif"></text>
  <rect x="684" y="251" width="376" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="265.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Choisir ou saisir…</text>
  <text x="1048" y="265.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="684" y="280" width="181" height="18" rx="5" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="692" y="292" fill="#94a3b8" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">+ la personne qui a lancé l’exécution</text>
  <text x="684" y="312" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJET</text>
  <rect x="684" y="317" width="352" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="331.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales digest &#123;DATE&#125; — &#123;JOB&#125;</text>
  <rect x="1042" y="318" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="332" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="684" y="352" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CORPS</text>
  <rect x="684" y="357" width="352" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="371.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">The monthly sales digest is attached: &#123;FILES&#125;.</text>
  <rect x="1042" y="358" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="372" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="684" y="392" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOINDRE (FICHIERS DU RUN ; ∗ = TOUS)</text>
  <rect x="684" y="397" width="185" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="411.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">∗</text>
  <text x="881" y="392" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CANAUX</text>
  <rect x="881" y="403" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M883.5,408.5 L885.8,410.8 L889.8,406" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="898" y="412" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="941" y="403" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M943.5,408.5 L945.8,410.8 L949.8,406" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="958" y="412" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">email</text>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet enregistré</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">analyses et tableaux partagés</text>
  <line x1="200" y1="177.0" x2="254" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période, ou dates fixes</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les deux dates, ou aucune</text>
  <line x1="200" y1="257.0" x2="384" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Visibilité</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">périmètre d'un utilisateur ou d'un rôle</text>
  <line x1="200" y1="347.0" x2="254" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Destinataires choisis</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle, utilisateur ou adresse</text>
  <line x1="1120" y1="177.0" x2="935" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui l'a lancée</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user:&#123;USER&#125;, absent en planifié</text>
  <line x1="1120" y1="253.0" x2="865" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marqueurs</text>
  <text x="1130" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125; &#123;RUN_ID&#125; &#123;FILES&#125; &#123;DATE&#125;…</text>
  <line x1="1120" y1="327.0" x2="1062" y2="328" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloche et e-mail seulement</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un appel d'API : une autre étape</text>
  <line x1="1120" y1="397.0" x2="1026" y2="408" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
</svg>

| Champ (éditeur) | Remarques |
|---|---|
| **Source** | *Une analyse enregistrée (Explorateur)*, *Un tableau de bord d'analyses (Explorateur)* — une section par tuile — ou *Un rapport (plugin)*. |
| **Modèle d'exploration**, **Analyses** / **Tableaux de bord** | Le modèle, puis l'une de ses analyses ou l'un de ses tableaux de bord **partagés**. Un élément privé n'est pas proposé. |
| **Rapport** | Pour un rapport de plugin : le rapport, parmi ceux des applications installées. |
| **Format** | Excel ou PDF — les mêmes documents que l'export de l'explorateur, graphiques dessinés dans le PDF. |
| **Période** | Une période par son nom — *Mois dernier*, *Ce mois-ci*, *Année dernière*, *Cette année*, *Ce trimestre*, *30 derniers jours*, *7 derniers jours*, *Hier*, *Aujourd'hui*, *Toutes les dates* — ou *La période propre de l'analyse*. |
| **Du (date fixe)**, **Au (date fixe)** | Des dates fixes à la place de la période : les deux, ou aucune — la tâche n'est pas enregistrée avec une seule. |
| **Nom du fichier** | Le nom du fichier ; par défaut, le titre de l'analyse. |
| **Rendre comme l'utilisateur** | Le document contient ce que voit cet utilisateur : le périmètre de données de ses rôles, avec ses attributs. Une synthèse rendue pour le responsable d'une société ne contient que cette société. |
| **Rendre comme le rôle** | Le périmètre de données d'un rôle. Une règle dont les valeurs viennent d'un attribut utilisateur n'autorise rien dans ce cas : pour ces rôles, préférer **Rendre comme l'utilisateur**. |
| **Ce que le rapport demande** | Pour un rapport de plugin : ses propres paramètres, en lignes **Paramètre du rapport** / **Valeur** (`YEAR` = `2026`) ; **Ajouter une valeur** en ajoute une. |

Pour un rapport de plugin, les paramètres de l'exécution — ceux de la tâche, ceux choisis au lancement, les paramètres utilisateur — sont transmis au rapport en plus de ceux de l'étape, convertis dans le type que déclare le rapport (un nombre reste un nombre) ; une valeur vide laisse la valeur par défaut du rapport.

Une colonne codée d'une analyse enregistrée s'écrit comme l'analyse l'affiche — son libellé, son code ou les deux, selon le réglage de l'analyse ; choisir *Code* dans ce réglage pour garder les codes dans le document.

Sans utilisateur ni rôle, le document est **sans restriction**. Le détail de l'exécution propose le fichier au téléchargement sous l'étape ; le journal le nomme avec sa taille.

---

## Notification — `notify` \{#notify\}

Envoie un message par les [canaux de notification](./notifications.md), accompagné des fichiers produits par l'exécution.

| Champ (éditeur) | Remarques |
|---|---|
| **Destinataires** | Choisis comme les [destinataires des alertes](./jobs/create.md#alerts) : **Rôle**, **Utilisateur** ou **Adresse**, puis le nom ou l'adresse. **+ la personne qui a lancé l'exécution** ajoute `user:{USER}` — « envoyez-moi l'export que j'ai demandé ». Dans `jobs.toml` : `user:<identifiant>`, `role:<rôle>` ou `email:<adresse>`. |
| **Objet**, **Corps** | Texte avec marqueurs : `{JOB}`, `{RUN_ID}`, `{FILES}` (les noms des fichiers joints), `{DATE}` (la date du jour), `{USER}` (la personne qui a lancé l'exécution). |
| **Joindre (fichiers du run ; `*` = tous)** | `*` joint tous les fichiers produits par l'exécution — chaque `report`, et les lignes rejetées d'un `file_load` ; sinon, nommer les fichiers. Un fichier nommé que l'exécution n'a pas produit fait échouer l'étape. |
| **Canaux** | **portal** (la cloche) et **email**, et eux seuls. Le compte de messagerie est celui des [notifications](./notifications.md#smtp). |

Le canal *requête ou point d'accès* appartient aux [règles de notification](./notifications.md#channels), pas à cette étape : une tâche qui doit appeler un point d'accès le fait avec une étape *Appeler une adresse* ([`http`](#http)).

Le message renvoie vers l'exécution. Le détail de l'exécution liste les fichiers joints sous l'étape.

Une exécution que personne n'a lancée — une planification, une autre tâche — n'a personne derrière `user:{USER}` : ce destinataire est écarté. Une étape qui n'a plus aucun destinataire n'envoie rien et le signale dans son journal, sans faire échouer l'exécution.

```toml title="jobs.toml — une synthèse mensuelle"
[[jobs.steps]]
type = "report"
name = "revenue"
report = "analysis:revenue_by_business_unit"
app = "sales"
model = "sales"
format = "pdf"
period = "lastMonth"
as_user = "cfo"

[[jobs.steps]]
type = "notify"
name = "send"
recipients = ["role:management"]
subject = "Synthèse des ventes {DATE}"
body = "La synthèse mensuelle des ventes est jointe : {FILES}."
attach = ["*"]
```

Planifier la tâche le premier du mois (cron `0 7 1 * *`) — voir [Planifications](./jobs/schedules.md).

---

## Export de fichier — `file_export` \{#file-export\}

Écrit le résultat d'une requête **de lecture** nommée dans un fichier de la zone de travail de l'exécution — pour qu'un autre système le récupère, ou qu'une étape `notify` le joigne. Une requête d'écriture est refusée.

| Champ (éditeur) | Remarques |
|---|---|
| **Connecteur**, **Requête** | La requête de lecture à exécuter. |
| **Paramètres** | Ses paramètres liés ; ceux de l'exécution sont transmis aussi. Une valeur peut utiliser `${params.x}`. |
| **Format** | *Excel (xlsx)* (par défaut) ou *CSV*. |
| **Nom du fichier (par défaut : la requête)** | Peut utiliser `${params.x}` et `${run.id}` : `sales-${params.period}`. |
| **Feuille** | Excel seulement — le nom de la requête par défaut. |
| **Séparateur CSV**, **Encodage** | CSV seulement — `;` et `utf-8-sig` par défaut. |
| **Copier aussi dans ce dossier (optionnel)** | Un dossier du serveur où une copie est également écrite, créé s'il n'existe pas : `/data/out/${params.period}`. |

Les lignes sont lues dans la base au fil de l'eau, dans la limite de lignes du connecteur — le journal indique quand l'export a été plafonné. La ligne d'en-tête porte les libellés des colonnes ; les colonnes masquées sont écartées. Le détail de l'exécution propose le fichier sous l'étape, et la rétention de la zone de travail s'y applique — pas à la copie dans l'autre dossier.

---

## Réessais et délais \{#retry\}

Le bloc **Politique de réessai** de la tâche (`attempts`, `backoff` fixe ou exponentiel, `base_seconds`) s'applique à chaque étape : une étape est tentée jusqu'à `attempts` fois au total (`1`, la valeur par défaut, signifie aucune nouvelle tentative), avec une attente de `base_seconds` entre deux tentatives — constante, ou doublée à chaque fois avec `exponential`. La tâche entière s'arrête après `timeout_seconds` (4 heures par défaut).
