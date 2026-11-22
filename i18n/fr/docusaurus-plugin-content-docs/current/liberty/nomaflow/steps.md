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

Dans l'éditeur de tâche, le **+** d'une liaison du flux propose les dix types et insère l'étape à cet endroit ; un clic sur la carte d'une étape ouvre ses champs à côté du flux. Quelques clés n'existent que dans `jobs.toml` (signalées ci-dessous).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 562" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="522" rx="14" fill="url(#nfst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Paramètres de la tâche + le pipeline d'étapes</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="304.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour aux tâches</text>
  <text x="969" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <rect x="979" y="86" width="101" height="22" rx="5" fill="url(#nfst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1029.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="122" width="470" height="400" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="702" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="702" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="702" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="702" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="702" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="702" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="702" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="702" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="702" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="702" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="702" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="702" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="702" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="702" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="702" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="702" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="702" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="702" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="614" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="656" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="684" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="359" y="166" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILE_LOAD</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">? → sales.fact_sales</text>
  </g>
  <line x1="514" y1="193" x2="540" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M538,189 L544,193 L538,197 Z" fill="#334155"/>
  <circle cx="527.0" cy="193" r="8" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="527.0" y="196.5" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="546" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="556" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="556" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="440" y1="271" x2="466" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M464,267 L470,271 L464,275 Z" fill="#334155"/>
  <circle cx="453.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="453.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="472" y="258" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="275" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="500" y="275" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="477.0" y="207" width="112" height="200" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="489.0" y="226" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">sql_copy</text>
  <text x="489.0" y="245" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="489.0" y="264" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">python</text>
  <text x="489.0" y="283" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ldap_sync</text>
  <text x="489.0" y="302" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">http</text>
  <text x="489.0" y="321" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">call_job</text>
  <text x="489.0" y="340" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">file_load</text>
  <text x="489.0" y="359" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">file_export</text>
  <text x="489.0" y="378" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">report</text>
  <text x="489.0" y="397" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <rect x="724" y="122" width="356" height="400" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="738" y="134" width="61" height="16" rx="4" fill="#4ade80" fillOpacity="0.14" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="745" y="145.5" fill="#4ade80" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">file_load</text>
  <text x="807" y="146" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">load-sales</text>
  <text x="879" y="146" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">? → fact_sales</text>
  <rect x="970" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="994" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="1018" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1028.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1042" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="738" y="172" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOM DE L'ÉTAPE</text>
  <rect x="738" y="177" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="191.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">load-sales</text>
  <rect x="738" y="208" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="217" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Si cette étape échoue, exécuter quand même les suivantes (…)</text>
  <rect x="738" y="226" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="235" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Désactivée pour cette installation — ne s'exécute jamais (…)</text>
  <text x="738" y="255" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHIER</text>
  <text x="738" y="271" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHEMIN ($&#123;PARAMS.X&#125; ET $&#123;RUN.ID&#125; ACCEPTÉS…)</text>
  <rect x="738" y="276" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="290.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">/data/in/sales-$&#123;params.period&#125;.xlsx</text>
  <text x="738" y="314" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DOSSIER SURVEILLÉ (SI LE CHEMIN EST VIDE)</text>
  <rect x="738" y="319" width="216" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="333.5" fill="#475569" fontSize="8.5" fontFamily="ui-monospace, monospace">/data/in/sales</text>
  <text x="962" y="314" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MOTIF</text>
  <rect x="962" y="319" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="333.5" fill="#475569" fontSize="8.5" fontFamily="ui-monospace, monospace">∗.xlsx</text>
  <text x="738" y="364" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FEUILLE</text>
  <rect x="738" y="369" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="383.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="850" y="364" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIGNE D'EN-TÊTE</text>
  <rect x="850" y="369" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="383.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1</text>
  <text x="962" y="364" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SÉPARATEUR CSV</text>
  <rect x="962" y="369" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="383.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">vide = détection</text>
  <text x="738" y="412" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CIBLE</text>
  <text x="738" y="428" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="738" y="433" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="447.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales</text>
  <text x="830" y="447.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="850" y="428" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHÉMA</text>
  <rect x="850" y="433" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="447.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">public</text>
  <text x="962" y="428" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="962" y="433" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="447.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">fact_sales</text>
  <text x="738" y="478" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Colonnes · Constantes · Mode de chargement · Garde-fous …</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur une carte</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre l'étape à côté du flux</text>
  <line x1="200" y1="137.0" x2="400" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu +</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les dix types d'étape</text>
  <line x1="200" y1="317.0" x2="477.0" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Continue à la ligne</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une longue tâche reste lisible</text>
  <line x1="200" y1="457.0" x2="256" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Icônes de l'étape</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">monter, descendre, cloner, supprimer</text>
  <line x1="1120" y1="93.0" x2="1010" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cases communes</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">continuer après échec · désactivée</text>
  <line x1="1120" y1="207.0" x2="1066" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs du type</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ici un file_load</text>
  <line x1="1120" y1="307.0" x2="1066" y2="287" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cible</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connecteur, schéma, table</text>
  <line x1="1120" y1="437.0" x2="1066" y2="444" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
</svg>

---

## Champs communs \{#common\}

| Champ | Défaut | Remarques |
|---|---|---|
| `name` | — | Affiché dans le détail de l'exécution ; unique dans la tâche. |
| `type` | — | L'un des dix types. |
| `enabled` | `true` | `false` saute l'étape (enregistrée comme *skipped: disabled*). Se règle dans `jobs.toml`, ou pour une exécution dans la fenêtre **Exécuter avec des paramètres**. |
| `timeout_seconds` | `3600` | L'étape est annulée passé ce délai. Se règle dans `jobs.toml`. |
| `continue_on_failure` | `false` | `true` : quand l'étape échoue (après ses tentatives), les suivantes s'exécutent quand même et l'exécution finit en échec en la nommant — pour une tâche qui enchaîne des traitements indépendants. Une case à cocher dans l'éditeur d'étape ; pour toutes les étapes d'une tâche, `[jobs.step_defaults]`. |

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
| `pool` | non | Un autre pool de l'ensemble du connecteur — voir [Connecteurs multi-pools](../framework/connectors.md#multi-pool). Uniquement dans `jobs.toml`. |

Enregistre le nombre de lignes renvoyées ou modifiées. Pour rafraîchir une vue matérialisée, appeler une procédure ou purger une table, écrire l'instruction comme une requête du connecteur, puis l'appeler ici.

---

## Copie SQL — `sql_copy` \{#sql-copy\}

Transfère les lignes d'une table source vers une table cible, éventuellement sur une autre base.

| Champ | Défaut | Remarques |
|---|---|---|
| `source` = `{connector, schema, table}` | — | Requis. `pool` peut s'y ajouter (uniquement dans `jobs.toml`). |
| `target` = `{connector, schema, table}` | — | Requis. Idem. |
| `mode` | `overwrite` | `overwrite` : les lignes sont écrites dans une table de travail `<table>__new`, qui remplace ensuite la cible en une transaction — la cible n'est jamais vide pendant la copie. `append` : les lignes s'ajoutent à la cible telle quelle. |
| `type_coercion` | `jde` | `jde` applique les règles JD Edwards (décimales implicites, dates juliennes, codes complétés d'espaces) ; `none` copie les valeurs telles quelles. |
| `decimal_mode` | `truncate` | Avec `jde` : tronquer (`truncate`) ou conserver (`preserve`) la partie décimale. |
| `batch_size` | `10000` | Lignes par lot. |
| `strip_both_columns` | `[]` | Colonnes dont les valeurs sont débarrassées des espaces des deux côtés. |

`upsert` est accepté par le schéma mais refusé à l'exécution : pour un ajout ou une mise à jour, écrire une requête `MERGE` / `ON CONFLICT` et l'appeler avec `sql_query`. Enregistre le nombre de lignes écrites.

---

## Chargement de fichier — `file_load` \{#file-load\}

Charge un classeur Excel (`.xlsx`, `.xlsm`) ou un fichier texte (`.csv`, `.txt`, `.tsv`) dans une table — selon une planification, sans personne au clavier, aux volumes d'une table de faits, et rejouable pour une période sans toucher aux autres.

### Le fichier

Le fichier vient, par ordre de priorité :

1. **d'un fichier choisi au lancement de la tâche** — la fenêtre **Exécuter avec des paramètres** affiche un sélecteur de fichier pour chaque étape `file_load` (la fenêtre s'ouvre pour toute tâche qui en contient une), de même que la page de la tâche ouverte [depuis le menu d'une application](./jobs/run-from-menu.md), pour les étapes sans `path` ni dossier surveillé ;
2. **de `path`** — un chemin sur le serveur, qui peut contenir `${params.x}` (un paramètre d'exécution), `${run.id}` et `${job.id}` : `/data/in/sales-${params.period}.xlsx` ;
3. **d'un dossier surveillé** — `watch_dir` et `watch_pattern` (`*.xlsx`) : chaque fichier correspondant est chargé dans l'ordre des noms, chacun dans sa propre transaction, puis déplacé dans `done/` ou `failed/` sous un nom horodaté. Un fichier en échec arrête l'exécution ; les fichiers suivants restent dans le dossier. Un dossier vide n'est pas une erreur.

| Champ | Défaut | Remarques |
|---|---|---|
| `sheet` | première feuille | Un nom ou un numéro (1 = la première). |
| `header_row` | `1` | La ligne des en-têtes de colonnes ; les données commencent en dessous. Les lignes vides sont ignorées. |
| `delimiter` | détecté | Séparateur CSV ; détecté parmi `;` `,` tabulation `|` s'il est vide. |
| `encoding` | `utf-8-sig` | CSV uniquement. |
| `decimal_separator` — **Nombres écrits en texte** | *Détecter* | La façon dont le fichier écrit un nombre stocké en texte : *1,234.56 — un point pour les décimales* ou *1.234,56 — une virgule pour les décimales* ; l'autre caractère sert alors de séparateur de milliers. Les cellules d'un tableur typées comme nombres sont lues telles quelles. |

### La cible

| Champ | Remarques |
|---|---|
| `target` = `{connector, schema, table}` | Un connecteur SQL ; la table doit exister. |
| `columns` | Colonne cible ← en-tête du fichier ou position (`#3`). Les en-têtes se retrouvent sans tenir compte de la casse, des espaces, de `_` et de `-` ; les colonnes non citées se retrouvent par leur nom. |
| `constants` | Colonne cible ← valeur, pour ce que le fichier ne porte pas : `period = "${params.period}"`, `batch_id = "${run.id}"`. |

Chaque cellule est convertie au type de sa colonne cible : entiers, décimaux, dates (`2026-10-27`, `27/10/2026`, `27.10.2026`, `20261027`, et dates Excel), booléens (`1`, `true`, `yes`, `oui`…), texte. Un nombre saisi comme texte ne retrouve pas les zéros de tête que le tableur a déjà retirés.

Un nombre écrit en texte suit le réglage **Nombres écrits en texte**. Les espaces et les apostrophes entre les chiffres sont toujours des séparateurs de milliers. Avec *Détecter* :

- quand un point et une virgule sont présents, le dernier est le séparateur décimal — `1.234,56` et `1,234.56` donnent tous deux 1234,56 ;
- plusieurs occurrences du même caractère sont des séparateurs de milliers — `1,234,567` ;
- une occurrence unique est le séparateur décimal — `12,5` et `12.5` donnent tous deux 12,5 — sauf dans une colonne d'entiers, où les groupes de trois chiffres sont des milliers : `1,000` donne 1000.

*Détecter* ne peut pas trancher le sens de `1,000` dans une colonne décimale — mille, ou un — et le lit comme 1 : il faut alors préciser le séparateur du fichier s'il écrit ainsi les milliers.

### Mode de chargement

| Champ | Choix |
|---|---|
| `load_mode` | `append` (défaut) ajoute les lignes. `replace_partition` supprime d'abord les lignes des partitions présentes dans le fichier, puis insère — **en une seule transaction** : un chargement en échec laisse les données précédentes en place, et un mois corrigé ne remplace que ce mois. |
| `partition_by` | Les colonnes de partition (`period, company`) — obligatoires avec `replace_partition`. Les partitions viennent des constantes quand elles couvrent toutes les colonnes, sinon des valeurs distinctes trouvées dans le fichier. |
| `on_error` | `fail` (défaut) : la première cellule invalide fait échouer l'étape et cite la ligne. `skip` : les lignes invalides sont comptées comme rejetées et écrites dans un CSV (fichier, ligne, motif) proposé dans le détail de l'exécution. |
| `batch_size` | `10000` lignes par insertion. |

### Garde-fous

| Champ | Remarques |
|---|---|
| `refuse_query` | Une requête nommée lancée avant toute écriture, avec les paramètres d'exécution et les constantes comme paramètres liés. Avec `partition_by`, elle s'exécute une fois par partition présente dans le fichier, les colonnes de partition servant de paramètres liés (`:YEAR`, `:MONTH`, `:COMPANY_CODE`) : la garde suit le fichier, et non un paramètre saisi au lancement. Si elle renvoie une ligne, le chargement est refusé et la première colonne en donne le motif : *période 2026-02 clôturée*. `refuse_connector` : son connecteur, celui de la cible par défaut. |
| `control_column` + `control_total` | La colonne est sommée sur les lignes chargées et comparée à une valeur, à `${params.total}` ou à une cellule du fichier (`@B2`, `@Totaux!B2`), à `control_tolerance` près. Un écart annule le chargement du fichier et cite les deux montants. |

### Dans l'exécution

Le détail de l'exécution affiche *N read · N inserted · N rejected* et, quand des lignes ont été rejetées, **Rejected rows (csv)** pour les télécharger. Le journal ajoute les partitions remplacées et les lignes supprimées.

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

Appelle une fonction d'un plugin : `callable = "paquet.module:fonction"`.

| Champ | Remarques |
|---|---|
| `callable` | `module.chemin:fonction` — forme vérifiée à l'enregistrement, import au lancement de l'étape. |
| `op_kwargs` | Les arguments passés à la fonction, fusionnés par-dessus les paramètres partagés de la tâche. |

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
| `server` | `ldaps://ad.example.com:636`. |
| `bind_dn`, `bind_password` | Le compte de lecture ; écrire le mot de passe `${LDAP_PASSWORD}`. |
| `search_base`, `search_filter` | Où et quoi chercher : `DC=example,DC=com`, `(objectClass=user)`. |
| `attributes` | Les attributs à lire. |
| `target_connector`, `target_query` | La requête d'écriture lancée pour chaque entrée. |
| `mapping` | Attribut LDAP → paramètre de la requête. Un attribut absent donne `NULL`. |

Enregistre le nombre d'entrées lues et de lignes écrites.

---

## Lancer une tâche — `call_job` \{#call-job\}

`target_job_id` désigne une autre tâche. L'étape la lance, attend sa fin et en prend le résultat : succès, échec ou annulation. La tâche appelée a sa propre exécution dans l'historique et reprend le niveau de journal et les paramètres d'exécution de l'appelante. Une tâche qui finirait par s'appeler elle-même est refusée.

---

## Rapport — `report` \{#report\}

Produit un document dans la zone de travail de l'exécution : une [analyse ou un tableau de bord enregistré de l'explorateur de données](../framework/explorer/saved-and-dashboards.md), ou un rapport d'un plugin. Suivie d'une étape `notify`, elle fait d'une **synthèse planifiée** une tâche ordinaire.

<svg viewBox="0 0 1320 486" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfdg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfdg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfdg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfdg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="446" rx="14" fill="url(#nfdg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Un clic sur la carte report, puis sur la carte notify : chacune ouvre ses champs à côté du flux.</text>
  <rect x="240" y="91" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="108" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="268" y="108" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="314" y1="104" x2="340" y2="104" stroke="#334155" strokeWidth="2"/>
  <path d="M338,100 L344,104 L338,108 Z" fill="#334155"/>
  <circle cx="327.0" cy="104" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="327.0" y="107.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="346" y="80" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="343" y="77" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="356" y="94" fill="#c084fc" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT</text>
  <text x="356" y="108" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">revenue</text>
  <text x="356" y="121" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">analysis:revenue_by_bu…</text>
  </g>
  <line x1="500" y1="104" x2="526" y2="104" stroke="#334155" strokeWidth="2"/>
  <path d="M524,100 L530,104 L524,108 Z" fill="#334155"/>
  <circle cx="513.0" cy="104" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="513.0" y="107.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="532" y="80" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="529" y="77" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="542" y="94" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="542" y="108" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="542" y="121" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="686" y1="104" x2="712" y2="104" stroke="#334155" strokeWidth="2"/>
  <path d="M710,100 L716,104 L710,108 Z" fill="#334155"/>
  <circle cx="699.0" cy="104" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="699.0" y="107.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="718" y="91" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="732" y="108" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="746" y="108" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="240" y="146" width="413" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="667" y="146" width="413" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="254" y="158" width="45" height="16" rx="4" fill="#c084fc" fillOpacity="0.14" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="261" y="169.5" fill="#c084fc" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">report</text>
  <text x="307" y="170" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="363" y="170" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">analysis:revenue_by_business_un…</text>
  <text x="254" y="200" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUOI RENDRE</text>
  <text x="254" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="254" y="225" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="239.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Une analyse enreg…</text>
  <text x="365" y="239.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="385" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MODÈLE D'EXPLORATION</text>
  <rect x="385" y="225" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="395" y="239.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">sales · sales</text>
  <text x="496" y="239.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="516" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ANALYSES</text>
  <rect x="516" y="225" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="526" y="239.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">revenue_by_bu…</text>
  <text x="627" y="239.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="272" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="254" y="277" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="291.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Excel</text>
  <text x="365" y="291.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="385" y="272" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="385" y="277" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="395" y="291.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Mois dernier</text>
  <text x="496" y="291.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="516" y="272" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOM DU FICHIER</text>
  <rect x="516" y="277" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="526" y="291.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">monthly-sales</text>
  <text x="254" y="324" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDRE COMME L'UTILISATEUR</text>
  <rect x="254" y="329" width="188" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="343.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="450" y="324" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDRE COMME LE RÔLE</text>
  <rect x="450" y="329" width="188" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="343.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sans restriction</text>
  <text x="626" y="343.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="382" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Le nom de l'étape et les deux cases figurent au-dessus, comme pour toute étape.</text>
  <rect x="681" y="158" width="45" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="688" y="169.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">notify</text>
  <text x="734" y="170" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">send</text>
  <text x="770" y="170" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">role:management · Sales digest …</text>
  <text x="681" y="200" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="681" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESTINATAIRES</text>
  <rect x="681" y="225" width="355" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="239.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">role:management</text>
  <rect x="1042" y="226" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="240" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="681" y="252" width="64" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="713.0" y="264.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <text x="681" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJET</text>
  <rect x="681" y="291" width="355" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales digest &#123;DATE&#125; — &#123;JOB&#125;</text>
  <rect x="1042" y="292" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="306" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="681" y="332" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CORPS</text>
  <rect x="681" y="337" width="355" height="30" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="355.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">The monthly sales digest is attached: &#123;FILES&#125;.</text>
  <rect x="1042" y="338" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="352" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="681" y="386" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOINDRE (FICHIERS DU RUN ; ∗ = TOUS)</text>
  <rect x="681" y="391" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="405.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">∗</text>
  <text x="881" y="386" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CANAUX</text>
  <rect x="881" y="397" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M883.5,402.5 L885.8,404.8 L889.8,400" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="898" y="406" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="942.24" y="397" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M944.74,402.5 L947.04,404.8 L951.04,400" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="959.24" y="406" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">email</text>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet enregistré</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">analyses et tableaux partagés</text>
  <line x1="200" y1="167.0" x2="258" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période prédéfinie</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sinon celle de l'analyse</text>
  <line x1="200" y1="267.0" x2="385" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Visibilité</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le périmètre d'un utilisateur ou d'un rôle</text>
  <line x1="200" y1="367.0" x2="254" y2="341" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Destinataires</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user:, role:, email: — un par ligne</text>
  <line x1="1120" y1="167.0" x2="1050" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="250" width="196" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marqueurs</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125; &#123;RUN_ID&#125; &#123;FILES&#125; &#123;DATE&#125; &#123;USER&#125;</text>
  <line x1="1120" y1="267.0" x2="1064" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers du run joints</text>
  <text x="1130" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tous, ou par nom</text>
  <line x1="1120" y1="367.0" x2="841" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
</svg>

| Champ (éditeur) | Remarques |
|---|---|
| **Source** | *Une analyse enregistrée (Explorateur)*, *Un tableau de bord d'analyses (Explorateur)* — une section par tuile — ou *Un rapport (plugin)*. |
| **Modèle d'exploration**, **Analyses** / **Tableaux de bord** | Le modèle, puis l'une de ses analyses ou l'un de ses tableaux de bord **partagés**. Un élément privé n'est pas proposé. |
| **Rapport** | Pour un rapport de plugin : le rapport, parmi ceux des applications installées. |
| **Format** | Excel ou PDF — les mêmes documents que l'export de l'explorateur, graphiques dessinés dans le PDF. |
| **Période** | Un préréglage (*Mois dernier*, *Ce trimestre*, *7 derniers jours*…, ou toutes les dates), ou *La période propre de l'analyse*. |
| **Nom du fichier** | Le nom du fichier ; par défaut, le titre de l'analyse. |
| **Rendre comme l'utilisateur** | Le document contient ce que voit cet utilisateur : le périmètre de données de ses rôles, avec ses attributs. Une synthèse rendue pour le responsable d'une société ne contient que cette société. |
| **Rendre comme le rôle** | Le périmètre de données d'un rôle. Une règle dont les valeurs viennent d'un attribut utilisateur n'autorise rien dans ce cas : pour ces rôles, préférer **Rendre comme l'utilisateur**. |

Pour un rapport de plugin, les paramètres de l'exécution — ceux de la tâche, ceux choisis au lancement, les paramètres utilisateur — sont transmis au rapport en plus de ceux de l'étape, convertis dans le type que déclare le rapport (un nombre reste un nombre) ; une valeur vide laisse la valeur par défaut du rapport.

Une colonne codée d'une analyse enregistrée s'écrit comme l'analyse l'affiche — son libellé, son code ou les deux, selon le réglage de l'analyse ; choisir *Code* dans ce réglage pour garder les codes dans le document.

Sans utilisateur ni rôle, le document est **sans restriction**. Le détail de l'exécution propose le fichier au téléchargement sous l'étape ; le journal le nomme avec sa taille.

---

## Notification — `notify` \{#notify\}

Envoie un message par les [canaux de notification](./notifications.md), accompagné des fichiers produits par l'exécution.

| Champ (éditeur) | Remarques |
|---|---|
| **Destinataires** | `user:<identifiant>`, `role:<rôle>` ou `email:<adresse>`, un par ligne. `user:{USER}` désigne la personne qui a lancé l'exécution — « envoyez-moi l'export que j'ai demandé ». |
| **Objet**, **Corps** | Texte avec marqueurs : `{JOB}`, `{RUN_ID}`, `{FILES}` (les noms des fichiers joints), `{DATE}` (la date du jour), `{USER}` (la personne qui a lancé l'exécution). |
| **Joindre (fichiers du run ; `*` = tous)** | `*` joint tous les fichiers produits par l'exécution — chaque `report`, et les lignes rejetées d'un `file_load` ; sinon, nommer les fichiers. Un fichier nommé que l'exécution n'a pas produit fait échouer l'étape. |
| **Canaux** | **portal** (la cloche) et **email**. Le compte de messagerie est celui des [notifications](./notifications.md#smtp). |

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
