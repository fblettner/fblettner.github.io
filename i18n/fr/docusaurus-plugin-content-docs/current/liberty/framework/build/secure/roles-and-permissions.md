---
title: Rôles et permissions
description: "Les rôles de Liberty Next : ce qu'un rôle accorde, modifié directement sur l'arborescence des menus de l'application (suit son dossier / lecture / lecture et modification / masqué par dossier ou entrée, le serveur déduisant ce dont les écrans ont besoin), les rôles prédéfinis livrés par les applications, les droits hors menus, et le périmètre de données qui limite les lignes visibles par un rôle — par société, par tout élément du dictionnaire, à partir d'un attribut de l'utilisateur."
keywords: [Liberty Next, rôles, permissions, Accès, arborescence des menus, lecture, lecture et modification, masqué, rôles prédéfinis, dupliquer un rôle, périmètre de données, sécurité par ligne, dd_prefix, attributs utilisateur, "#USER", auth.toml]
---

# Rôles et permissions

Un rôle répond à deux questions : **ce que** ses titulaires peuvent ouvrir (menus, requêtes, tableaux de bord, assistant) et **quelles lignes** ils voient. Les utilisateurs reçoivent des rôles ; un utilisateur qui a plusieurs rôles en cumule les droits. Un rôle se résume le plus souvent à quelques choix sur le menu de l'application — un dossier en lecture, un autre en lecture et modification — ; les applications fournissent en outre des rôles prêts à l'emploi.

Les rôles se modifient dans **Liberty Next → Administrer → Accès → Rôles**. La liste des rôles est à gauche, sous **Ajouter un rôle** et **Ajouter un rôle prédéfini…** ; le rôle sélectionné s'ouvre dans un panneau à deux onglets : **Accès** et **Périmètre de données**.

:::info[Rôles JD Edwards]
Cette page traite des rôles de Liberty Next lui-même. Les rôles de JD Edwards EnterpriseOne et leur sécurité se gèrent dans Nomajde.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="724" rx="14" fill="url(#accr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <rect x="745" y="32" width="90" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="790.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <rect x="843" y="32" width="90" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="888.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="941" y="32" width="139" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <rect x="240" y="66" width="415.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="254" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les comptes, leurs rôles et attributs</text>
  <rect x="665.0" y="66" width="415.0" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="679.0" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="679.0" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce que chaque rôle peut ouvrir et les données qu’il voit</text>
  <rect x="334" y="120" width="96" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="382.0" y="134.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un rôle</text>
  <rect x="240" y="150" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ajouter un rôle prédéfini…  ▾</text>
  <rect x="240" y="184" width="190" height="50" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="202" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="252" y="216" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Accès complet (joker).</text>
  <rect x="364.72" y="207" width="72" height="13" rx="6.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="400.72" y="216.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Accès complet</text>
  <text x="252" y="228" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 règle(s)</text>
  <rect x="240" y="242" width="190" height="50" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="260" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">sales_manager</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Équipe commerciale</text>
  <text x="252" y="286" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">5 règle(s)</text>
  <rect x="240" y="300" width="190" height="50" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="318" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">reader</text>
  <text x="252" y="332" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Utilisateurs en lecture</text>
  <text x="252" y="344" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 règle(s)</text>
  <rect x="444" y="120" width="636" height="614" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="144" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales_manager</text>
  <rect x="984" y="130" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1024.0" y="144.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <line x1="444" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="173" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <line x1="456" y1="181" x2="490.6" y2="181" stroke="#4a9eff" strokeWidth="2"/>
  <text x="524" y="173" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Périmètre de données</text>
  <line x1="444" y1="182" x2="1080" y2="182" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DU RÔLE</text>
  <text x="624" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="460" y="205" width="154" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="470" y="219.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales_manager</text>
  <rect x="624" y="205" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="634" y="219.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Commandes et clients : lecture et modification. Le reste : lecture.</text>
  <text x="460" y="250" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Base</text>
  <rect x="510" y="237" width="188" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="511" y="238" width="87" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="554.5" y="250.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ Aucun accès</text>
  <line x1="599" y1="242" x2="599" y2="252" stroke="#334155" strokeWidth="1"/>
  <text x="648.5" y="250.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Accès complet</text>
  <text x="708" y="250" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">rien, plus ce que vous autorisez ci-dessous</text>
  <text x="460" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="460" y="295" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Cochez un dossier ou une entrée. Le rôle reçoit ce dont ses écrans ont besoin : leurs listes, les onglets de leur fiche et —</text>
  <text x="460" y="306" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">avec « Lecture et modification » — ce qu’ils enregistrent et lancent. Un dossier coché une fois couvre aussi les écrans ajoutés par une mise à niveau.</text>
  <text x="460" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">– Suit son dossier</text>
  <text x="575.6800000000001" y="324" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">Lecture</text>
  <path d="M551.6800000000001,317 L555.6800000000001,318.2 L559.6800000000001,317 L559.6800000000001,324 L555.6800000000001,325.2 L551.6800000000001,324 Z M555.6800000000001,318.2 L555.6800000000001,325.2" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="627.0000000000001" y="324" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">✎ Lecture et modification</text>
  <text x="764.0000000000001" y="324" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">⊘ Masqué</text>
  <rect x="460" y="334" width="604" height="284" rx="7" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <rect x="460" y="334" width="604" height="28" rx="7" fill="#1e293b" stroke="#1f2937" strokeWidth="1"/>
  <text x="470" y="352" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="494" y="352" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 6 visibles sur 7</text>
  <text x="958" y="352" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">toute l’application</text>
  <rect x="966" y="339" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="351.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="989" y="340" width="20" height="16" rx="3" fill="rgba(50,215,75,0.18)"/>
  <line x1="988" y1="342" x2="988" y2="354" stroke="#334155" strokeWidth="1"/>
  <path d="M994,344 L999,345.5 L1004,344 L1004,352 L999,353.5 L994,352 Z M999,345.5 L999,353.5" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <line x1="1010" y1="342" x2="1010" y2="354" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="351.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="342" x2="1032" y2="354" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="351.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="364" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="392" x2="1064" y2="392" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="382" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Ventes</text>
  <rect x="966" y="369" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="381.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="372" x2="988" y2="384" stroke="#334155" strokeWidth="1"/>
  <path d="M994,374 L999,375.5 L1004,374 L1004,382 L999,383.5 L994,382 Z M999,375.5 L999,383.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <rect x="1011" y="370" width="20" height="16" rx="3" fill="rgba(74,158,255,0.20)"/>
  <line x1="1010" y1="372" x2="1010" y2="384" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="381.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="372" x2="1032" y2="384" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="381.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="392" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="420" x2="1064" y2="420" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="410" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="602" y="410" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">3 en lecture · 4 en modification</text>
  <text x="938" y="410" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <text x="952" y="410" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="397" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="398" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="409.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="400" x2="988" y2="412" stroke="#334155" strokeWidth="1"/>
  <path d="M994,402 L999,403.5 L1004,402 L1004,410 L999,411.5 L994,410 Z M999,403.5 L999,411.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="400" x2="1010" y2="412" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="409.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="400" x2="1032" y2="412" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="409.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="420" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="448" x2="1064" y2="448" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="438" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="602" y="438" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">4 en lecture · 22 en modification</text>
  <text x="938" y="438" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <text x="952" y="438" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="425" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="426" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="437.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="428" x2="988" y2="440" stroke="#334155" strokeWidth="1"/>
  <path d="M994,430 L999,431.5 L1004,430 L1004,438 L999,439.5 L994,438 Z M999,431.5 L999,439.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="428" x2="1010" y2="440" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="437.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="428" x2="1032" y2="440" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="437.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="448" width="602" height="28" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="476" x2="1064" y2="476" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="466" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Synthèse des ventes</text>
  <text x="602" y="466" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 en lecture · 0 en modification</text>
  <text x="938" y="466" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <text x="952" y="466" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="453" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="454" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="465.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="456" x2="988" y2="468" stroke="#334155" strokeWidth="1"/>
  <path d="M994,458 L999,459.5 L1004,458 L1004,466 L999,467.5 L994,466 Z M999,459.5 L999,467.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="456" x2="1010" y2="468" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="465.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="456" x2="1032" y2="468" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="465.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="476" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="504" x2="1064" y2="504" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="494" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Paramètres</text>
  <text x="938" y="494" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture</text>
  <rect x="966" y="481" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="482" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="493.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="484" x2="988" y2="496" stroke="#334155" strokeWidth="1"/>
  <path d="M994,486 L999,487.5 L1004,486 L1004,494 L999,495.5 L994,494 Z M999,487.5 L999,495.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="484" x2="1010" y2="496" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="493.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="484" x2="1032" y2="496" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="493.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="504" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="532" x2="1064" y2="532" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="522" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Commerciaux</text>
  <text x="602" y="522" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 en lecture · 3 en modification</text>
  <text x="938" y="522" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture</text>
  <text x="952" y="522" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="509" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="510" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="521.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="512" x2="988" y2="524" stroke="#334155" strokeWidth="1"/>
  <path d="M994,514 L999,515.5 L1004,514 L1004,522 L999,523.5 L994,522 Z M999,515.5 L999,523.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="512" x2="1010" y2="524" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="521.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="512" x2="1032" y2="524" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="521.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="532" width="602" height="28" fill="rgba(255,69,58,0.08)"/>
  <line x1="460" y1="560" x2="1064" y2="560" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="550" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Tarifs</text>
  <text x="602" y="550" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 en lecture · 3 en modification</text>
  <text x="952" y="550" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◌</text>
  <rect x="966" y="537" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="549.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="540" x2="988" y2="552" stroke="#334155" strokeWidth="1"/>
  <path d="M994,542 L999,543.5 L1004,542 L1004,550 L999,551.5 L994,550 Z M999,543.5 L999,551.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="540" x2="1010" y2="552" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="549.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="1033" y="538" width="20" height="16" rx="3" fill="rgba(255,69,58,0.18)"/>
  <line x1="1032" y1="540" x2="1032" y2="552" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="549.5" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="560" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="588" x2="1064" y2="588" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="578" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Tâches</text>
  <text x="938" y="578" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture</text>
  <rect x="966" y="565" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="566" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="577.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="568" x2="988" y2="580" stroke="#334155" strokeWidth="1"/>
  <path d="M994,570 L999,571.5 L1004,570 L1004,578 L999,579.5 L994,578 Z M999,571.5 L999,579.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="568" x2="1010" y2="580" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="577.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="568" x2="1032" y2="580" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="577.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="588" width="602" height="28" fill="rgba(50,215,75,0.06)"/>
  <line x1="460" y1="616" x2="1064" y2="616" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="606" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clôture mensuelle</text>
  <text x="602" y="606" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 en lecture · 1 en modification</text>
  <text x="938" y="606" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture</text>
  <text x="952" y="606" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◌</text>
  <rect x="966" y="593" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="594" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="605.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="596" x2="988" y2="608" stroke="#334155" strokeWidth="1"/>
  <path d="M994,598 L999,599.5 L1004,598 L1004,606 L999,607.5 L994,606 Z M999,599.5 L999,607.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="596" x2="1010" y2="608" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="605.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="596" x2="1032" y2="608" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="605.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="460" y="620" fill="#cbd5e1" fontSize="1" fontFamily="system-ui, sans-serif"></text>
  <text x="460" y="640" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <rect x="460" y="648" width="65" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="492.5" y="660.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ai:chat  ×</text>
  <rect x="460" y="674" width="123" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="461" y="675" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="493.0" y="687.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Autoriser</text>
  <line x1="526" y1="679" x2="526" y2="689" stroke="#334155" strokeWidth="1"/>
  <text x="554.5" y="687.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Refuser</text>
  <rect x="591" y="674" width="183" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="687.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Connecteur (toutes les requêtes) ▾</text>
  <rect x="782" y="674" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="792" y="687.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Choisir…</text>
  <rect x="910" y="674" width="55" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="937.5" y="687.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles prédéfinis</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">livrés par les applications</text>
  <line x1="200" y1="157.0" x2="240" y2="161" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">description, accès complet, règles</text>
  <line x1="200" y1="247.0" x2="240" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que donne un choix</text>
  <text x="30" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">décompte ; les noms au survol</text>
  <line x1="200" y1="447.0" x2="676.4" y2="414" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="540" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le choix le plus proche</text>
  <text x="30" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une entrée masquée dans un dossier</text>
  <line x1="200" y1="557.0" x2="490" y2="546" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="640" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="655" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <text x="30" y="668" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête, point d’accès, IA…</text>
  <line x1="200" y1="657.0" x2="460" y2="657" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mêmes droits, même périmètre</text>
  <line x1="1120" y1="137.0" x2="1064" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toute l’application</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que suit chaque dossier</text>
  <line x1="1120" y1="247.0" x2="1054" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre niveaux par nœud</text>
  <text x="1130" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">suit · lecture · modif. · masqué</text>
  <line x1="1120" y1="327.0" x2="1054" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dossier en modification</text>
  <text x="1130" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses entrées le suivent</text>
  <line x1="1120" y1="427.0" x2="1024" y2="434" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lancer une tâche</text>
  <text x="1130" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">demande Lecture et modification</text>
  <line x1="1120" y1="577.0" x2="952" y2="602" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
</svg>

---

## L'onglet Accès \{#access\}

### Base

| Choix | Signification |
|---|---|
| **Aucun accès** | Rien, plus ce qui est autorisé ci-dessous. |
| **Accès complet** | Tout, moins ce qui est refusé ci-dessous. La carte du rôle porte l'étiquette **Accès complet**. |

### L'arborescence des menus

Le bloc **Menus** affiche le menu latéral de chaque application, un bloc par application (`crm · 6 visibles sur 7`). Un rôle indique, pour chaque dossier ou entrée du menu, jusqu'où vont ses titulaires ; **le serveur déduit ce dont les écrans concernés ont besoin**. Chaque dossier et chaque entrée porte un contrôle à quatre niveaux :

| Niveau | Effet |
|---|---|
| **Suit son dossier** (–) | Le nœud reprend le choix de son dossier, sinon celui de son application, sinon la base. La ligne indique *suit son dossier : lecture* / *lecture et modification* / *masqué* / *aucun accès*. |
| **Lecture** (livre) | Les écrans du nœud s'ouvrent avec tout ce qu'ils lisent : leur requête de lecture, les listes de leurs menus déroulants, les onglets de leur fiche, les requêtes de leurs tableaux de bord. |
| **Lecture et modification** (crayon) | La lecture, plus tout ce qui écrit ou agit : la mise à jour, la création et la suppression de l'écran, les requêtes et points d'accès d'écriture que lancent ses actions, les fonctions qu'elles appellent — et **le lancement des tâches**. |
| **Masqué** (⊘) | Le nœud et tout ce qu'il contient sont retirés, même à un rôle en accès complet. |

Le rôle n'enregistre rien d'autre : le nœud en lecture, ou en lecture et modification. Un rôle tient donc en quelques lignes quelle que soit la taille de l'application, et **il suit ses dossiers** : un écran ajouté par une mise à niveau dans un dossier autorisé est couvert sans toucher au rôle.

**Toute l'application.** Au-dessus de son menu, chaque bloc d'application porte son propre choix — aucun, **Lecture**, **Lecture et modification** ou **Masqué** — que suivent tous les dossiers qui n'en indiquent pas d'autre : *l'application en lecture, ce dossier en modification* se règle en deux clics.

**Ce que donne un choix.** Chaque entrée affiche en gris ce dont ses écrans ont besoin à chaque niveau — `4 en lecture · 22 en modification` — ; le survol des chiffres en donne la liste. Une entrée qui ouvre une page affiche *page* : une page du framework demande sa propre permission — l'Explorateur sur un modèle `explorer:<app>:<model>`, les pages des tâches `nomaflow:view`, celles des tests `tests:view` —, et une page livrée par une application demande `page:<app>:<page>` : autoriser l'entrée l'accorde.

**L'œil** de chaque entrée donne l'aperçu du résultat : vert, l'entrée apparaît dans le menu latéral du titulaire ; barré, elle n'y apparaît pas.

Combinaison des choix :

- **Le choix le plus proche l'emporte.** Une entrée en **Lecture** dans un dossier en **Lecture et modification** reste en lecture seule ; une entrée **Masqué** est retirée d'un dossier autorisé.
- **Un refus nominatif prime sur tout le reste** : une règle *Refuser* sur une requête, dans *Au-delà des menus*, bloque cette requête quoi que donnent les menus.
- **Un clic sur une ligne qui ouvre un autre écran donne cet écran en lecture seule** : le modifier demande sa propre entrée en **Lecture et modification**.
- **Lancer une tâche demande Lecture et modification** : la lecture ne déclenche jamais rien. Une entrée de tâche n'apparaît qu'à qui peut la lancer.

Rôles types :

- *Tout sauf le dossier Sécurité* : **Accès complet**, puis **Masqué** sur le dossier Sécurité.
- *Seulement le dossier Rapports* : **Aucun accès**, puis **Lecture** sur le dossier Rapports.
- *Commandes et clients en modification, le reste en lecture* : **Lecture** sur toute l'application, **Lecture et modification** sur le dossier Ventes.

Un rôle écrit avec une permission par entrée et par requête — à la main ou avec la CLI — se lit avec les mêmes choix ; enregistré depuis l'éditeur, il prend la forme courte.

### Au-delà des menus

Certains droits ne correspondent à aucune entrée de menu. Le bloc **Au-delà des menus** les ajoute sous forme de pastilles vertes (autorisation) ou rouges (refus) : choisir **Autoriser** ou **Refuser**, le type, l'élément, puis **Ajouter**.

| Type | Accorde |
|---|---|
| Connecteur (toutes les requêtes) | Toutes les requêtes d'un connecteur. |
| Requête | Une requête — pour un écran ouvert depuis un bouton ou un lien plutôt que depuis le menu. |
| Point d'accès API | Un point d'accès d'un connecteur API. |
| Tableau de bord | Un tableau de bord. |
| Explorateur de données | Un modèle de l'explorateur, ou tous les modèles d'une application — voir [Explorateur de données](../../explorer/overview.md#access). |
| nomaflow | **Suivre les tâches** (`nomaflow:view`) — les pages Tâches, Planning et Exécutions, les exécutions et leurs journaux ; **Créer et modifier les tâches** (`nomaflow:edit`) — créer, modifier, suspendre et reprendre des tâches ; exécute SQL et Python sans restriction de lignes. Voir [Administration de Nomaflow](../../../nomaflow/administration.md#permissions). |
| Tâche | Une tâche Nomaflow, ou **Toutes les tâches (lancer)** (`job:*`), pour une tâche qu'aucune entrée de menu en **Lecture et modification** ne couvre : son entrée de menu et sa page — fichiers, paramètres, lancement, annulation, journaux de toutes les exécutions. Voir [Lancer une tâche depuis le menu d'une application](../../../nomaflow/jobs/run-from-menu.md#access). |
| Assistant IA | **Assistant IA** (`ai:chat`) : le panneau de l'assistant. **Outils IA depuis un client externe (MCP) — créer un jeton d'accès personnel** (`mcp:use`) : voir [Connecter Claude (MCP)](../../mcp.md). **Assistant IA — ajouter, modifier ou supprimer un enregistrement par son écran, lancer une de ses actions, lancer une tâche (avec les permissions de l'écran ou de la tâche)** (`ai:write`) : voir [Écrire par un écran](../../ai-assistant.md#write). Ce que l'assistant atteint ensuite dépend des autres règles du rôle — voir [Assistant IA](../../ai-assistant.md#access). |
| Tests | **Voir les suites de tests et leurs résultats** (`tests:view`), **Jouer les tests (et les voir)** (`tests:run`), **Écrire les tests : suites, cas, étapes (et les jouer)** (`tests:edit`) — chacune inclut la précédente. Voir [Tests](../tests.md#access). |
| Motif (expert) | Une permission écrite à la main, comme `sql:sales:report_*`. |

Une page livrée par une application donne accès à la page, pas aux fonctions qu'elle appelle : pour les ouvrir à un rôle, ajouter ici une règle **Motif (expert)** `plugin:<module>:*`.

**Enregistrer** et **Abandonner**, dans l'en-tête de la page comme dans tous les éditeurs, enregistrent le rôle ou abandonnent ses modifications ; *modifications non enregistrées* s'affiche à côté tant que le rôle en contient. Ouvrir un autre rôle, en ajouter un ou passer aux **Utilisateurs** avec des modifications non enregistrées demande d'abord confirmation : *Ce rôle contient des modifications non enregistrées. Le quitter et les perdre ?* Le nom d'un rôle ne peut plus changer après sa création.

### Rôles prédéfinis \{#predefined\}

Les applications livrent des rôles prêts à l'emploi — Nomasx-1 un *Auditeur*, un *Responsable sécurité*, un *Gestionnaire des licences*, un *Administrateur* ; Nomajde un *Gestionnaire des données de base*, un *Administrateur de la sécurité*, un *Développeur*, un *Exploitant de la plateforme*, un *Administrateur*. **Ajouter un rôle prédéfini…**, sous **Ajouter un rôle**, les présente par application ; en choisir un l'ouvre comme un nouveau rôle, nom, description et droits renseignés, prêt à **Enregistrer**. Une fois enregistré, c'est un rôle comme les autres, modifiable à volonté. Un rôle déjà ajouté porte la mention *— déjà ajouté* et s'ouvre tel qu'il est. La liste suit les applications installées : une installation ou une mise à niveau apporte leurs nouveaux rôles prédéfinis.

Un rôle prédéfini désigne des dossiers du menu en **Lecture** ou en **Lecture et modification**, plus les quelques règles hors menus dont il a besoin ; il suit ses dossiers quand une version y ajoute des écrans. Il ne retire jamais rien : une même personne peut détenir plusieurs rôles — un responsable sécurité qui gère aussi les licences — et **leurs droits s'additionnent**.

### Dupliquer un rôle \{#duplicate\}

**Dupliquer**, en haut d'un rôle ouvert, crée un nouveau rôle avec les mêmes droits et le même périmètre de données, intitulé *Copie de …*, le nom du rôle restant à saisir. Le bouton reste inactif tant que le rôle a des modifications non enregistrées.

---

## Périmètre de données — quelles lignes \{#data-scope\}

L'onglet **Périmètre de données** limite les lignes vues par un rôle, sur chaque écran, export, tableau de bord, rapport et réponse de l'assistant qui lit un connecteur SQL. Un rôle sans règle voit toutes les lignes.

<svg viewBox="0 0 1200 408" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="368" rx="14" fill="url(#accs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="34" width="12" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="256" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="78" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accès</text>
  <text x="320" y="78" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre de données · 2</text>
  <line x1="306" y1="86" x2="460" y2="86" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="220" y1="87" x2="980" y2="87" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="100" width="728" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="119" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Société (CO) = user.company</text>
  <rect x="790" y="107" width="94" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="837.0" y="118.2" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">refuser si absent</text>
  <rect x="890" y="107" width="31" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="905.5" y="118.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="236" y="136" width="728" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="155" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">et MCU not in 00099</text>
  <text x="250" y="200" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle règle</text>
  <rect x="345.928" y="186" width="233" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="346.928" y="187" width="137" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="415.428" y="200.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Élément du dictionnaire</text>
  <line x1="484.928" y1="191" x2="484.928" y2="203" stroke="#334155" strokeWidth="1"/>
  <text x="531.928" y="200.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Nom de colonne</text>
  <text x="250" y="222" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉLÉMENT DU DICTIONNAIRE</text>
  <rect x="250" y="228" width="344.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="242.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">CO — Société</text>
  <text x="582.0" y="242.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="606.0" y="222" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="606.0" y="228" width="344.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="242.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Tout connecteur</text>
  <text x="938.0" y="242.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="250" y="262" width="284" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="251" y="263" width="87" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="294.5" y="276.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Valeurs fixes</text>
  <line x1="339" y1="267" x2="339" y2="279" stroke="#334155" strokeWidth="1"/>
  <text x="436.5" y="276.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Depuis l'attribut de l'utilisateur</text>
  <rect x="606.0" y="268" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="277" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exclure ces valeurs au lieu de les garder</text>
  <text x="250" y="296" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALEURS</text>
  <rect x="250" y="302" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="258" y="306" width="49" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="282.5" y="317.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00001 ×</text>
  <rect x="313" y="306" width="49" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="337.5" y="317.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00050 ×</text>
  <text x="250" y="353" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Une requête sans cet élément :</text>
  <rect x="411.20000000000005" y="338" width="223" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="412.20000000000005" y="339" width="122" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="473.20000000000005" y="352.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">n'est pas restreinte</text>
  <line x1="535.2" y1="343" x2="535.2" y2="355" stroke="#334155" strokeWidth="1"/>
  <text x="584.7" y="352.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">ne renvoie rien</text>
  <rect x="890" y="338" width="60" height="22" rx="5" fill="url(#accs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="352.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <rect x="236" y="180" width="728" height="192" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par règle</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les règles d'un rôle se cumulent</text>
  <line x1="200" y1="77.0" x2="236" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Élément ou colonne</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un élément couvre chaque colonne</text>
  <line x1="200" y1="187.0" x2="345.928" y2="197" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Valeurs ou attribut</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">#USER.company# par utilisateur</text>
  <line x1="200" y1="277.0" x2="250" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étiquettes</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mode si absent · connecteur</text>
  <line x1="1000" y1="77.0" x2="964" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Élément absent</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas restreinte, ou rien</text>
  <line x1="1000" y1="347.0" x2="561.2" y2="360" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accs-arrow)"/>
</svg>

### Une règle

| Champ | Choix |
|---|---|
| **Élément du dictionnaire** ou **Nom de colonne** | Ce qui est restreint. Un élément du dictionnaire (`CO — Société`) atteint chaque colonne qui le porte, dans chaque requête ; un nom de colonne ne restreint que cette colonne. |
| **Connecteur** | *Tout connecteur*, ou un seul connecteur — la règle ne dit alors rien des autres. |
| **Valeurs fixes** ou **Depuis l'attribut de l'utilisateur** | Les valeurs autorisées, choisies dans la liste de l'élément quand il en a une ; ou un attribut de l'utilisateur (`company`), pour qu'un seul rôle serve toutes les sociétés — chaque utilisateur porte ses propres valeurs (voir [Utilisateurs](./users.md#attributes)). |
| **Exclure ces valeurs au lieu de les garder** | Transforme la liste en exclusions : `SY not in 00`. Les valeurs vides restent visibles. |
| **Une requête sans cet élément** | *n'est pas restreinte* : une requête sans cette colonne n'est pas limitée par la règle. *ne renvoie rien* : une telle requête ne renvoie aucune ligne pour ce rôle (étiquette **refuser si absent**). |

Chaque règle s'affiche sur une ligne : `Company (CO) in 00001, 00050`, `SY not in 00`, `Company (CO) = user.company`. Un clic sur une ligne la charge dans le formulaire ; la corbeille la supprime. Les règles s'enregistrent avec le rôle.

### Combinaison des règles

- Dans un rôle, les règles se cumulent : *société 00001* **et** *SY différent de 00*.
- Entre les rôles d'un utilisateur, le plus ouvert l'emporte : un utilisateur titulaire de *subsidiary* et de *group* voit ce que voit *group*.
- Un rôle sans règle lève toute restriction pour ses titulaires.
- Les superutilisateurs ne sont jamais restreints.

### Où le périmètre s'applique

- **Lectures** : chaque requête d'un connecteur SQL est filtrée sur le serveur, quel que soit l'appelant — écrans, exports, tableaux de bord, rapports, assistant.
- **Écritures** : créer, modifier ou supprimer une ligne hors périmètre est refusé (*403*).
- Non filtrés : les connecteurs API et les tâches Nomaflow, qui s'exécutent sans utilisateur.

### Retrouver la colonne d'un élément

Une colonne de requête porte un élément du dictionnaire quand l'écran l'indique, quand elle porte le nom de l'élément, ou — sur un connecteur doté d'un **Dd Prefix** (JD Edwards : `2`) — quand son nom sans le préfixe de table est l'élément : `ABCO`, `MCCO` et `SDCO` portent tous `CO`. Une jointure de deux tables restreint les deux colonnes. Sur un pool qui supprime les espaces des textes de longueur fixe (JD Edwards), les valeurs sont comparées sans espaces.

### Prise d'effet d'une modification

Le périmètre est calculé à la connexion et accompagne la session. Un changement de rôle ou d'attribut s'applique au renouvellement de la session — dans l'heure, ou aussitôt après une déconnexion et une reconnexion. La fenêtre **Profil** montre à chaque utilisateur ses attributs et son périmètre de données en clair.

### Sans l'éditeur

Les mêmes règles se définissent avec `liberty-admin set-scope` et `set-attributes` ([CLI](../../../references/cli.md#liberty-admin)), ou dans `auth.toml` :

```toml title="auth.toml"
[roles.subsidiary]
permissions = ["menu:sales:*", "sql:sales:*"]
scope = [
  { dd = "CO", source = "#USER.company#", mode = "deny" },
  { dd = "SY", values = ["00"], exclude = true },
]
```

---

## Contrôle des permissions \{#resolution\}

Chaque permission est une chaîne séparée par des deux-points — `menu:sales:orders`, `sql:sales:orders_get`, `dashboard:sales_overview`, `ai:chat` — et l'éditeur les écrit de lui-même. Un choix sur le menu s'enregistre en `menu:<app>:<id>` (lecture) et `edit:<app>:<id>` (lecture et modification), sur le dossier ou l'entrée choisis ; `menu:<app>:*` et `edit:<app>:*` désignent toute l'application. Pour une requête, Liberty Next prend toutes les permissions de tous les rôles de l'utilisateur, puis :

1. un superutilisateur est toujours autorisé ;
2. un **refus** correspondant bloque — un refus dans un rôle l'emporte sur une autorisation dans un autre ;
3. une **autorisation** correspondante accorde ;
4. sinon, un choix sur le menu accorde la permission quand les écrans d'un dossier ou d'une entrée autorisés en ont besoin — au niveau choisi sur le nœud le plus proche qui porte un choix ; un choix sur toute l'application ne compte que si aucun nœud du chemin n'en porte ;
5. sinon, refusé.

`*` remplace un segment, ou tout le reste quand il termine la chaîne (`sql:sales:*`).

---

## Pièges fréquents \{#pitfalls\}

| Situation | Explication |
|---|---|
| Un utilisateur voit encore un menu après la modification de son rôle | La session porte les droits : se déconnecter et se reconnecter, ou attendre le renouvellement (dans l'heure). |
| Un refus prévu pour un rôle en bloque un autre | Les refus s'appliquent à tous les rôles de l'utilisateur. Préférer *Aucun accès* plus des autorisations pour les rôles restreints. |
| Un utilisateur ouvre un écran mais ne peut pas y enregistrer | L'entrée de l'écran ou son dossier est en **Lecture** : la passer, ou passer son dossier, en **Lecture et modification**. |
| Un écran ouvert par un clic sur une ligne est en lecture seule | Un clic sur une ligne donne l'écran suivant en lecture seule. Passer l'entrée propre de cet écran en **Lecture et modification**. |
| Une entrée de tâche manque dans le menu d'un utilisateur | L'entrée est en **Lecture** : lancer une tâche demande **Lecture et modification** sur l'entrée ou son dossier, ou une règle **Tâche** dans *Au-delà des menus*. |
| La page d'une application s'ouvre mais ses actions sont refusées | La page est accordée, pas les fonctions qu'elle appelle : ajouter `plugin:<module>:*` dans *Au-delà des menus*. |
| Une requête du rôle ne renvoie rien | Une règle en mode *ne renvoie rien*, et la requête n'a pas de colonne portant l'élément. Choisir *n'est pas restreinte* ou ajouter la colonne. |
| Un utilisateur soumis à une règle par attribut ne voit rien | L'utilisateur n'a pas de valeur pour cet attribut — voir [Utilisateurs](./users.md#attributes). |
| Les rôles ne peuvent pas être supprimés depuis l'éditeur | Retirer le rôle à ses utilisateurs ; un rôle inutilisé n'accorde rien. |
