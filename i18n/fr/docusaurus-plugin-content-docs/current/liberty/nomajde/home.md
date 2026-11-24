---
title: Vue d'ensemble — le point d'entrée
description: "La vue d'ensemble de Nomajde : le point d'entrée du compagnon de JD Edwards EnterpriseOne — un groupe de liens par besoin (la plateforme, la préparation de la montée de version, les données JD Edwards, la maintenance de la sécurité, l'exploration) et les tâches avec leur dernière exécution."
keywords: [Nomajde, vue d'ensemble, accueil, points d'entrée, JD Edwards, JDE, synthèse de la plateforme, architecture, montée de version, données de base, paramétrage, maintenance de la sécurité, explorateur de données, tâches]
---

# Vue d'ensemble — le point d'entrée

**Vue d'ensemble**, première entrée du menu de Nomajde, est la page sur laquelle s'ouvre l'application : **le point d'entrée**. Un groupe de liens par besoin — suivre la plateforme, préparer une montée de version, consulter les données JD Edwards, maintenir la sécurité, explorer — et les tâches avec leur dernière exécution. Les chiffres de la plateforme se trouvent dans la [Synthèse de la plateforme](./synthesis.md), ceux de la montée de version dans [Préparer la montée de version](./upgrade/analysis.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 512" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njh-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njh-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njh-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="478" rx="14" fill="url(#njh-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Par où aller dans Nomajde : la plateforme, la montée de version, les données JD Edwards et leur sécurité — et ce qui tourne.</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="935" y="84" width="25" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="894" y="84" width="35" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="911.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="843" y="84" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="865.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="240" y="114" width="234.66666666666666" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="131" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La plateforme</text>
  <text x="252" y="143" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Son état maintenant, son architecture, où va le te…</text>
  <rect x="250" y="152" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="165" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="274" y="165" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse de la plateforme</text>
  <text x="274" y="176" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Ce qui demande attention, toutes analyses…</text>
  <text x="454.66666666666663" y="169" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="250" y="186" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="199" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="274" y="199" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="274" y="210" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Les serveurs et la base tels qu'ils sont…</text>
  <text x="454.66666666666663" y="203" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="250" y="220" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="233" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="274" y="233" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="274" y="244" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Où va le temps, et quoi faire</text>
  <text x="454.66666666666663" y="237" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="250" y="254" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="267" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="274" y="267" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Analyse de la plateforme</text>
  <text x="274" y="278" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Les chiffres de Server Manager, les param…</text>
  <text x="454.66666666666663" y="271" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <text x="252" y="296" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">+ Audit de la base, Contrôle de santé JDE, Utilis…</text>
  <rect x="482.66666666666663" y="114" width="234.66666666666666" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="494.66666666666663" y="131" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Préparer la montée de version</text>
  <text x="494.66666666666663" y="143" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Ce qu'une nouvelle version oblige à reprendre, et…</text>
  <rect x="492.66666666666663" y="152" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="502.66666666666663" y="165" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="516.6666666666666" y="165" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Préparer la montée de version</text>
  <text x="516.6666666666666" y="176" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Ce qui est à reprendre, où on en est…</text>
  <text x="697.3333333333333" y="169" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="492.66666666666663" y="186" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="502.66666666666663" y="199" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="516.6666666666666" y="199" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Références croisées</text>
  <text x="516.6666666666666" y="210" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Où un objet est utilisé</text>
  <text x="697.3333333333333" y="203" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="492.66666666666663" y="220" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="502.66666666666663" y="233" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="516.6666666666666" y="233" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Object Librarian</text>
  <text x="516.6666666666666" y="244" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Object Librarian (F9860)</text>
  <text x="697.3333333333333" y="237" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="492.66666666666663" y="254" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="502.66666666666663" y="267" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="516.6666666666666" y="267" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Projets OMW</text>
  <text x="516.6666666666666" y="278" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Projets Object Management Workbench (F982…</text>
  <text x="697.3333333333333" y="271" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <text x="494.66666666666663" y="296" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">+ Dictionnaire de données, Lancer les tests</text>
  <rect x="725.3333333333333" y="114" width="234.66666666666666" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="737.3333333333333" y="131" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Données JD Edwards</text>
  <text x="737.3333333333333" y="143" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Données de base et paramétrage, en grilles où cher…</text>
  <rect x="735.3333333333333" y="152" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="745.3333333333333" y="165" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="759.3333333333333" y="165" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Codes UDC</text>
  <text x="759.3333333333333" y="176" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Codes définis par l'utilisateur (F0005)</text>
  <text x="939.9999999999999" y="169" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="735.3333333333333" y="186" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="745.3333333333333" y="199" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="759.3333333333333" y="199" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Carnet d'adresses</text>
  <text x="759.3333333333333" y="210" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Carnet d'adresses (F0101), clients et fou…</text>
  <text x="939.9999999999999" y="203" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="735.3333333333333" y="220" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="745.3333333333333" y="233" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="759.3333333333333" y="233" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Sociétés</text>
  <text x="759.3333333333333" y="244" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Sociétés (F0010)</text>
  <text x="939.9999999999999" y="237" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="735.3333333333333" y="254" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="745.3333333333333" y="267" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="759.3333333333333" y="267" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Articles</text>
  <text x="759.3333333333333" y="278" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Fiche article (F4101)</text>
  <text x="939.9999999999999" y="271" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <text x="737.3333333333333" y="296" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">+ Centres de coûts, Plan de comptes, Conditions d…</text>
  <rect x="240" y="320" width="234.66666666666666" height="128" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="337" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Maintenance de la sécurité</text>
  <text x="252" y="349" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Utilisateurs, rôles, environnements et le Security…</text>
  <rect x="250" y="358" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="371" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="274" y="371" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Gestion des utilisateurs</text>
  <text x="274" y="382" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Profils utilisateur (F0092)</text>
  <text x="454.66666666666663" y="375" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="250" y="392" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="405" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="274" y="405" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Security Workbench</text>
  <text x="274" y="416" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Tous les types de sécurité sur une grille…</text>
  <text x="454.66666666666663" y="409" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <text x="252" y="434" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">+ Rôles, Relations de rôles, Environnements, Sécu…</text>
  <rect x="482.66666666666663" y="320" width="234.66666666666666" height="128" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="494.66666666666663" y="337" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer</text>
  <text x="494.66666666666663" y="349" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Totaux, classements et tendances sur les données J…</text>
  <rect x="492.66666666666663" y="358" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="502.66666666666663" y="371" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="516.6666666666666" y="371" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="516.6666666666666" y="382" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">Sécurité, développement, montée de versio…</text>
  <text x="697.3333333333333" y="375" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="492.66666666666663" y="392" width="214.66666666666666" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="502.66666666666663" y="405" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="516.6666666666666" y="405" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">À propos de Nomajde</text>
  <text x="516.6666666666666" y="416" fill="#94a3b8" fontSize="7.2" fontFamily="system-ui, sans-serif">La page du produit</text>
  <text x="697.3333333333333" y="409" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="725.3333333333333" y="320" width="234.66666666666666" height="128" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="737.3333333333333" y="337" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="737.3333333333333" y="349" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">La dernière exécution de chacune et la prochaine</text>
  <circle cx="741.3333333333333" cy="366" r="3" fill="#4ade80"/>
  <text x="749.3333333333333" y="369" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">nomajde-jde-health</text>
  <rect x="844.6133333333332" y="359" width="52" height="13" rx="6.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="870.6133333333332" y="368.7" fill="#4ade80" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="749.3333333333333" y="380" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">toutes les 5 minutes</text>
  <rect x="929.9999999999999" y="360" width="20" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="939.9999999999999" y="371.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">▷</text>
  <circle cx="741.3333333333333" cy="392" r="3" fill="#4ade80"/>
  <text x="749.3333333333333" y="395" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <rect x="844.6133333333332" y="385" width="52" height="13" rx="6.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="870.6133333333332" y="394.7" fill="#4ade80" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="749.3333333333333" y="406" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">chaque jour à 02:30</text>
  <rect x="929.9999999999999" y="386" width="20" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="939.9999999999999" y="397.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">▷</text>
  <circle cx="741.3333333333333" cy="418" r="3" fill="#f87171"/>
  <text x="749.3333333333333" y="421" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">nomajde-jde-tests</text>
  <rect x="839.6533333333332" y="411" width="40" height="13" rx="6.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="859.6533333333332" y="420.7" fill="#f87171" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="749.3333333333333" y="432" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="929.9999999999999" y="412" width="20" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="939.9999999999999" y="423.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">▷</text>
  <rect x="240" y="458" width="720" height="24" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="473" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Nomajde est le compagnon de JD Edwards. Ce que JDE disperse sur de nombreux formulaires est rassemblé ici …</text>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter, actualiser</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel, PDF, relire</text>
  <line x1="1000" y1="87.0" x2="960" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un groupe par besoin</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plateforme, montée de version…</text>
  <line x1="200" y1="167.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un lien = une entrée de menu</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">titre, une ligne sur ce qu'il ouvre</text>
  <line x1="200" y1="247.0" x2="250" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Données JD Edwards</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">données de base et paramétrage</text>
  <line x1="1000" y1="217.0" x2="959.9999999999999" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Maintenance de la sécurité</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, rôles, workbench</text>
  <line x1="200" y1="377.0" x2="240" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les tâches</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dernière exécution, ▷ en lance une</text>
  <line x1="1000" y1="377.0" x2="939.9999999999999" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="20" y="456" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="471" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'est Nomajde</text>
  <text x="30" y="484" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deux lignes, en bas</text>
  <line x1="200" y1="473.0" x2="240" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="1000" y="452" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="467" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selon les droits</text>
  <text x="1010" y="480" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un lien non accordé est masqué</text>
  <line x1="1000" y1="469.0" x2="707.3333333333333" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
</svg>

---

## Les groupes \{#content\}

Chaque lien ouvre une entrée du menu ; sous son titre, une ligne indique ce qu'il ouvre.

| Groupe | Liens |
|---|---|
| **La plateforme** | [Synthèse de la plateforme](./synthesis.md), [Architecture](./monitoring/architecture.md), [Performance](./monitoring/performance.md), [Analyse de la plateforme](./monitoring/platform-analysis.md), [Audit de la base de données](./monitoring/database-audit.md), [Contrôle de santé JDE](./monitoring/jde-servers.md), [Utilisateurs connectés](./monitoring/server-manager.md#users). |
| **Préparer la montée de version** | [Préparer la montée de version](./upgrade/analysis.md), [Références croisées](./cross-reference.md), Object Librarian, Dictionnaire de données, [Projets OMW](./master-data/delivered-screens.md#omw), [Lancer les tests](./tests.md). |
| **Données JD Edwards** | [Codes UDC](./master-data/udc-codes.md), [Carnet d'adresses](./master-data/address-book.md), [Sociétés, Centres de coûts, Plan de comptes, Articles, Conditions de paiement](./master-data/delivered-screens.md) — le paramétrage commence par les conditions de paiement. |
| **Maintenance de la sécurité** | [Gestion des utilisateurs](./security-maintenance/user-management.md), [Gestion des rôles](./security-maintenance/role-management.md), [Relations de rôles](./security-maintenance/role-relationships.md), [Environnements](./security-maintenance/environments.md), [Security Workbench](./security-maintenance/security-workbench.md), Sécurité des UDO, [Simulation de la sécurité](./security-maintenance/security-simulation.md). |
| **Explorer** | L'[Explorateur de données](./data-explorer.md) et *À propos de Nomajde*, la page du produit. |
| **Tâches** | La dernière exécution des principales tâches — contrôle de santé, relevé de la plateforme, [rapports de plateforme et hebdomadaire de montée de version](./jobs.md#reports), synchronisation quotidienne, tests, analyse de montée de version, refusion de la sécurité — avec leur état, leur planification, et **▷** pour en lancer une immédiatement. |

Deux lignes, en bas de page, présentent Nomajde. **Excel** et **PDF**, à côté de **↻**, exportent la page.

---

## Points d'entrée et droits \{#access\}

Un groupe ne liste que les liens que l'utilisateur peut ouvrir : une entrée que ses rôles n'accordent pas n'apparaît pas. La page du produit s'ouvre dans un nouvel onglet du navigateur.

---

## Voir aussi

- [Nomajde](./overview.md) — le produit et ses rôles prédéfinis.
- [Synthèse de la plateforme](./synthesis.md) — la plateforme en un coup d'œil.
- [Préparer la montée de version](./upgrade/analysis.md) — ce qu'une nouvelle version oblige à reprendre.
