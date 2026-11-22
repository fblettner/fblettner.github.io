---
title: Rôles et permissions
description: "Les rôles de Liberty Next : ce qu'un rôle accorde, modifié directement sur l'arborescence des menus de l'application (hériter / autoriser / refuser par dossier ou entrée, aperçu du menu latéral), les droits hors menus, et le périmètre de données qui limite les lignes visibles par un rôle — par société, par tout élément du dictionnaire, à partir d'un attribut de l'utilisateur."
keywords: [Liberty Next, rôles, permissions, Accès, arborescence des menus, autoriser, refuser, périmètre de données, sécurité par ligne, dd_prefix, attributs utilisateur, "#USER", auth.toml]
---

# Rôles et permissions

Un rôle répond à deux questions : **ce que** ses titulaires peuvent ouvrir (menus, requêtes, tableaux de bord, assistant) et **quelles lignes** ils voient. Les utilisateurs reçoivent des rôles ; un utilisateur qui a plusieurs rôles en cumule les droits.

Les rôles se modifient dans **Liberty Next → Administrer → Accès → Rôles**. La liste des rôles est à gauche ; le rôle sélectionné s'ouvre dans un panneau à deux onglets : **Accès** et **Périmètre de données**.

:::info[Rôles JD Edwards]
Cette page traite des rôles de Liberty Next lui-même. Les rôles de JD Edwards EnterpriseOne et leur sécurité se gèrent dans Nomajde.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 680" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="640" rx="14" fill="url(#accr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <rect x="953" y="28" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1018.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="419.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les comptes, leurs rôles et attributs</text>
  <rect x="665.0" y="74" width="419.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que chaque rôle peut ouvrir et les données qu’il voit</text>
  <rect x="354" y="124" width="112" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="410.0" y="138.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un rôle</text>
  <rect x="244" y="164" width="214" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="182" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="256" y="196" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Accès complet (joker).</text>
  <rect x="360.56" y="187" width="72" height="14" rx="7.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="396.56" y="197.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Accès complet</text>
  <text x="256" y="211" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 règle(s)</text>
  <rect x="244" y="226" width="214" height="56" rx="7" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="244" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">sales</text>
  <text x="256" y="258" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Équipe commerciale</text>
  <text x="256" y="273" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">12 règle(s)</text>
  <rect x="244" y="288" width="214" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="306" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">reader</text>
  <text x="256" y="320" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisateurs en lecture</text>
  <text x="256" y="335" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">5 règle(s)</text>
  <rect x="236" y="156" width="230" height="470" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="136" width="12" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="512" y="148" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <text x="1070" y="148" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <line x1="478" y1="162" x2="1084" y2="162" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="180" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <line x1="492" y1="188" x2="558" y2="188" stroke="#4a9eff" strokeWidth="2"/>
  <text x="578" y="180" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Périmètre de données · 1</text>
  <line x1="478" y1="189" x2="1084" y2="189" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DU RÔLE</text>
  <rect x="492" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales</text>
  <text x="787.0" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="787.0" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Équipe commerciale</text>
  <text x="492" y="267" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Base</text>
  <rect x="548" y="252" width="188" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="549" y="253" width="87" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="592.5" y="266.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ Aucun accès</text>
  <line x1="637" y1="257" x2="637" y2="269" stroke="#334155" strokeWidth="1"/>
  <text x="686.5" y="266.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Accès complet</text>
  <text x="746" y="267" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">rien, plus ce que vous autorisez ci-dessous</text>
  <text x="492" y="290" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="492" y="300" width="578" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="316" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="524" y="316" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 4 visibles sur 9</text>
  <text x="500" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="344" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Ventes</text>
  <text x="956" y="344" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">autorisé</text>
  <rect x="990" y="331" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="1013" y="332" width="20" height="18" rx="4" fill="#4ade80" fillOpacity="0.2"/>
  <text x="1023" y="345" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="352" x2="1070" y2="352" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="370" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="582.964" y="370" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:customers_get</text>
  <text x="956" y="370" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : autorisé</text>
  <text x="972" y="370" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="357" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="358" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="371" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="378" x2="1070" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="396" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="594.668" y="396" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:orders_get</text>
  <text x="956" y="396" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : autorisé</text>
  <text x="972" y="396" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="383" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="384" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="397" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="404" x2="1070" y2="404" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="422" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Tableau de bord</text>
  <text x="629.78" y="422" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">dashboard:crm.sales</text>
  <text x="956" y="422" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : autorisé</text>
  <text x="972" y="422" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="409" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="410" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="423" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="430" x2="1070" y2="430" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="448" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="448" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Paramètres</text>
  <text x="956" y="448" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">refusé</text>
  <rect x="990" y="435" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="449" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="449" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1035" y="436" width="20" height="18" rx="4" fill="#f87171" fillOpacity="0.2"/>
  <text x="1045" y="449" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="456" x2="1070" y2="456" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="474" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Listes de prix</text>
  <text x="623.928" y="474" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:prices_get</text>
  <text x="956" y="474" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : refusé</text>
  <text x="972" y="474" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="990" y="461" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="462" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="475" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="475" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="475" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="482" x2="1070" y2="482" stroke="#1f2937" strokeWidth="1"/>
  <text x="514" y="500" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Rapports</text>
  <text x="570.816" y="500" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">page</text>
  <text x="956" y="500" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : aucun accès</text>
  <text x="972" y="500" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="990" y="487" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="488" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="501" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="501" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="501" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="508" x2="1070" y2="508" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="326" width="578" height="188" rx="0" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="534" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <rect x="492" y="542" width="84" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="534.0" y="554.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Assistant IA ×</text>
  <rect x="582" y="542" width="146" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="655.0" y="554.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau de bord crm.sales ×</text>
  <rect x="492" y="568" width="148" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="493" y="569" width="77" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="531.5" y="582.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Autoriser</text>
  <line x1="571" y1="573" x2="571" y2="585" stroke="#334155" strokeWidth="1"/>
  <text x="605.5" y="582.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ Refuser</text>
  <rect x="648" y="568" width="204" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="582.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connecteur (toutes les requêtes)</text>
  <text x="840" y="582.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="860" y="568" width="146" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="582.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Choisir…</text>
  <text x="994" y="582.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="1014" y="568" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="582.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <line x1="478" y1="604" x2="1084" y2="604" stroke="#1f2937" strokeWidth="1"/>
  <rect x="934" y="614" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="966.0" y="628.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="1004" y="614" width="64" height="22" rx="5" fill="url(#accr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1036.0" y="628.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="478" y="124" width="606" height="522" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">description, Accès complet, règles</text>
  <line x1="200" y1="177.0" x2="244" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">partir de rien ou de tout</text>
  <line x1="200" y1="307.0" x2="548" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un dossier se propage</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses entrées héritent</text>
  <line x1="200" y1="417.0" x2="502" y2="341" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête, point d'accès, IA…</text>
  <line x1="200" y1="577.0" x2="492" y2="579" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux onglets</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menus · lignes (périmètre)</text>
  <line x1="1120" y1="147.0" x2="1084" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Visible dans la barre latérale</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'œil, après héritage</text>
  <line x1="1120" y1="347.0" x2="972" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
  <rect x="1120" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hériter · Autoriser · Refuser</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un contrôle par entrée</text>
  <line x1="1120" y1="447.0" x2="1056" y2="445" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accr-arrow)"/>
</svg>

---

## L'onglet Accès \{#access\}

### Base

| Choix | Signification |
|---|---|
| **Aucun accès** | Rien, plus ce qui est autorisé ci-dessous. |
| **Accès complet** | Tout, moins ce qui est refusé ci-dessous. La carte du rôle porte l'étiquette **Accès complet**. |

### L'arborescence des menus

Le bloc **Menus** affiche le menu latéral de chaque application, un bloc par application (`sales · 4 visibles sur 6`). Chaque dossier et chaque entrée porte un contrôle à trois états :

| Contrôle | Effet |
|---|---|
| **Hériter** (–) | Le nœud prend l'état de son dossier, ou la base. La ligne indique *hérite : autorisé* / *refusé* / *aucun accès*. |
| **Autoriser** (✓) | Le nœud et tout ce qu'il contient sont accordés. |
| **Refuser** (⊘) | Le nœud et tout ce qu'il contient sont refusés, même si une autre règle les accorderait. |

Un dossier se propage à ses enfants ; un enfant peut le contredire. Une entrée affiche en gris ce qu'elle exécute (`sql:sales:orders_get`, un tableau de bord…) : autoriser l'entrée accorde à la fois l'entrée de menu et ce qu'elle exécute. L'**œil** de chaque entrée donne l'aperçu du résultat : vert, l'entrée apparaît dans le menu latéral du titulaire ; barré, elle n'y apparaît pas.

Une entrée qui ouvre une page affiche *page*. Une page du framework demande sa propre permission — l'Explorateur sur un modèle `explorer:<app>:<model>`, les pages des tâches `nomaflow:view`, celles des tests `tests:view` —, et une page livrée par une application demande `page:<app>:<page>` : autoriser l'entrée l'accorde.

Deux rôles types :

- *Tout sauf le dossier Sécurité* : **Accès complet**, puis **Refuser** sur le dossier Sécurité.
- *Seulement le dossier Rapports* : **Aucun accès**, puis **Autoriser** sur le dossier Rapports.

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
| Tâche | Une tâche Nomaflow, ou **Toutes les tâches** (`job:*`) : son entrée de menu et sa page — fichiers, paramètres, lancement, annulation, journaux de toutes les exécutions. Voir [Lancer une tâche depuis le menu d'une application](../../../nomaflow/jobs/run-from-menu.md#access). |
| Assistant IA | **Assistant IA** (`ai:chat`) : le panneau de l'assistant. **Outils IA depuis un client externe (MCP) — créer un jeton d'accès personnel** (`mcp:use`) : voir [Connecter Claude (MCP)](../../mcp.md). **Assistant IA — ajouter, modifier ou supprimer un enregistrement par son écran, lancer une de ses actions, lancer une tâche (avec les permissions de l'écran ou de la tâche)** (`ai:write`) : voir [Écrire par un écran](../../ai-assistant.md#write). Ce que l'assistant atteint ensuite dépend des autres règles du rôle — voir [Assistant IA](../../ai-assistant.md#access). |
| Tests | **Voir les suites de tests et leurs résultats** (`tests:view`), **Jouer les tests (et les voir)** (`tests:run`), **Écrire les tests : suites, cas, étapes (et les jouer)** (`tests:edit`) — chacune inclut la précédente. Voir [Tests](../tests.md#access). |
| Motif (expert) | Une permission écrite à la main, comme `sql:sales:report_*`. |

**Enregistrer** enregistre le rôle ; **Annuler** abandonne les modifications. Le nom d'un rôle ne peut plus changer après sa création.

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

Chaque permission est une chaîne séparée par des deux-points — `menu:sales:orders`, `sql:sales:orders_get`, `dashboard:sales_overview`, `ai:chat` — et l'éditeur les écrit de lui-même. Pour une requête, Liberty Next prend toutes les permissions de tous les rôles de l'utilisateur, puis :

1. un superutilisateur est toujours autorisé ;
2. un **refus** correspondant bloque — un refus dans un rôle l'emporte sur une autorisation dans un autre ;
3. une **autorisation** correspondante accorde ;
4. sinon, refusé.

`*` remplace un segment, ou tout le reste quand il termine la chaîne (`sql:sales:*`).

---

## Pièges fréquents \{#pitfalls\}

| Situation | Explication |
|---|---|
| Un utilisateur voit encore un menu après la modification de son rôle | La session porte les droits : se déconnecter et se reconnecter, ou attendre le renouvellement (dans l'heure). |
| Un refus prévu pour un rôle en bloque un autre | Les refus s'appliquent à tous les rôles de l'utilisateur. Préférer *Aucun accès* plus des autorisations pour les rôles restreints. |
| Une requête du rôle ne renvoie rien | Une règle en mode *ne renvoie rien*, et la requête n'a pas de colonne portant l'élément. Choisir *n'est pas restreinte* ou ajouter la colonne. |
| Un utilisateur soumis à une règle par attribut ne voit rien | L'utilisateur n'a pas de valeur pour cet attribut — voir [Utilisateurs](./users.md#attributes). |
| Les rôles ne peuvent pas être supprimés depuis l'éditeur | Retirer le rôle à ses utilisateurs ; un rôle inutilisé n'accorde rien. |
