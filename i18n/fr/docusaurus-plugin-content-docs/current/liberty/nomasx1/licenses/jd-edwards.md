---
title: JD Edwards
description: "Synthèse licence JD Edwards — utilisateurs actifs, utilisateurs transactionnels, comptes dormants et transactions orphelines par application JDE."
keywords: [Nomasx-1, licences, JD Edwards, licence JDE, utilisateurs actifs, utilisateurs transactionnels, comptes dormants]
---

# JD Edwards

L'écran **JD Edwards** synthétise les chiffres de licence pertinents pour chaque application JDE connectée à Nomasx-1. Une ligne par application JDE (filtre `APPS_TYPE = 'JDE'`).

C'est le tableau de bord que l'équipe licences JDE d'Oracle attend : combien d'utilisateurs humains distincts sont actifs, combien ont réellement transacté sur les 90 derniers jours, et combien de comptes manquent d'un côté ou de l'autre.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 486" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ljd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ljd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ljd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ljd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="406" rx="14" fill="url(#ljd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - JD Edwards</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 lignes · 12 ms</text>
  <rect x="959" y="118" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="123" x2="1018" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="146" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="585" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">AFFICHER LES UTILISATEUR…</text>
  <text x="705" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">AVEC TRANSACTIONS</text>
  <text x="835" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">SANS TRANSACTIONS</text>
  <text x="985" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">UTILISATEURS NON DÉCLARÉS</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="207" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="218.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="585" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">184</text>
  <text x="705" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">152</text>
  <text x="835" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">32</text>
  <text x="985" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="229" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="240.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="373" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="585" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">41</text>
  <text x="705" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="835" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">35</text>
  <text x="985" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="292" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="314" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="336" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="350.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="358" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="372.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="233" y="404" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="392" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="405.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="405" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–2 sur 2</text>
  <text x="1087" y="405" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="256" y="225.0" width="270" height="186" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="231.0" width="262" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="245.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Enabled Users</text>
  <text x="516" y="245.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="267.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users with transaction</text>
  <text x="516" y="267.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="289.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users without transactions</text>
  <text x="516" y="289.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="311.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users not declared</text>
  <text x="516" y="311.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="333.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Modules with transactions</text>
  <text x="516" y="333.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="355.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Modules allowed</text>
  <text x="516" y="355.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="377.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Transactions details</text>
  <text x="516" y="377.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="399.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Objects allowed</text>
  <text x="516" y="399.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="442" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="457" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs actifs</text>
  <text x="225.0" y="470" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comptes actifs dans JDE</text>
  <line x1="360.0" y1="442" x2="577" y2="381.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="515.0" y="442" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="457" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avec / sans transactions</text>
  <text x="525.0" y="470" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ont écrit ou non sur la période</text>
  <line x1="660.0" y1="442" x2="827" y2="381.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="815.0" y="442" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="457" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs non déclarés</text>
  <text x="825.0" y="470" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ont écrit sans compte JDE</text>
  <line x1="960.0" y1="442" x2="977" y2="381.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne (···)</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="197" y1="215.0" x2="248" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="12" y="394.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="409.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Huit accès détaillés</text>
  <text x="22" y="422.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, modules, transactions, objets</text>
  <line x1="197" y1="411.0" x2="276" y2="411.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="168.0" x2="1042.5" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque application JDE :

- **Compteur d'actifs.** *Utilisateurs actifs* compte les comptes JDE encore activés qui détiennent au moins un rôle — la base de calcul côté JDE.
- **Usage réel.** *Transactionnels* compte combien de ces actifs ont effectivement écrit quelque chose sur les 90 derniers jours. C'est le chiffre à présenter lors d'une renégociation de licence.
- **Repérer les transactions orphelines.** *Transact. sans utilisateur* compte les transactions sur la fenêtre dont l'utilisateur JDE a été supprimé de la table de sécurité — fort indice de manque de nettoyage.

La colonne masquée *Sans transaction* est l'inverse — utilisateurs actifs sans transaction sur la fenêtre — visible dans les drilldowns plus fins.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant de l'application. | Application JDE. |
| **Afficher les utilisateurs actifs** | `JDE_ACTIVE_USERS` — utilisateurs actifs distincts détenant au moins un rôle. | Effectif effectif pour la licence. |
| **Avec Transactions** | `JDE_TRANSACTION_USERS` — utilisateurs actifs ayant transacté sur les 90 derniers jours. | Cohorte « ont vraiment utilisé le système ». |
| **Sans Transactions** | `JDE_NOTRANSACTION_USERS` — utilisateurs actifs sans transaction. Masquée. | Comptes inactifs — candidats à la révocation. |
| **Utilisateurs non déclarés** | `JDE_TRANSACTION_NOUSERS` — transactions sur la fenêtre sans compte de sécurité correspondant. | Lacune de nettoyage. |

---

## Menu contextuel

Le bouton **···** en début de ligne, ou un clic droit sur la ligne, ouvre son menu. Chaque raccourci ouvre la cohorte *Actifs*, *Transactionnels* ou *Sans transaction* derrière les chiffres clés.

| Action | Vers où |
|---|---|
| **Display Enabled Users** | Les comptes actifs de l'application qui détiennent au moins un rôle. |
| **Display Users with transaction** | Même liste, restreinte aux comptes qui ont exécuté une transaction sur les 90 derniers jours. |
| **Display Users without transactions** | Comptes actifs qui n'ont jamais exécuté de transaction — premiers candidats à la révocation. |
| **Display Users not declared** | Cas miroir : comptes qui ont exécuté des transactions mais qui ne sont pas enregistrés comme utilisateurs dans Nomasx-1. |
| **Display Modules with transactions** | Pour chaque module de licence, combien d'utilisateurs s'en sont servis sur les 90 derniers jours. |
| **Display Modules allowed** | Pour chaque module de licence, l'utilisation comparée au droit souscrit — l'écart de conformité par module. |
| **Display Transactions details** | L'activité détaillée derrière les compteurs par module — utilisateur, objet touché, date de la dernière utilisation. |
| **Display Objects allowed** | Pour chaque utilisateur, les objets accessibles via le paramétrage de sécurité JDE, qu'ils aient été utilisés ou non. |

---

## Conseils & bonnes pratiques

- **Le ratio Transactionnels × composant** est le levier de négociation le plus utile — si le nombre de *Transactionnels* est bien inférieur aux *Actifs*, la licence est surdimensionnée.
- **Traiter *Transact. sans utilisateur* en priorité** — chaque transaction sans compte signale soit un compte supprimé tout en conservant ses droits, soit un programme externe à JDE qui écrit via un compte de service à marquer.
- **L'écran est spécifique JDE.** Pour les autres systèmes sources, des écrans équivalents se construisent autour de leurs tables d'usage (voir *Object Usage Tracking* pour le mécanisme sous-jacent).
- **Combiner avec *Licences acquises*** pour comparer le chiffre *Transactionnels* au droit contractuel.
