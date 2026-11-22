---
title: Vue d'ensemble et Studio
description: "Les deux pages sur lesquelles Liberty Next accueille ceux qui construisent : Vue d'ensemble — les applications de l'installation avec leurs chiffres et les huit étapes de construction d'une application — et le Studio, la carte d'une application (menu, écrans, données, services) où une sélection met en évidence ce qui lui est lié, où ce que rien n'utilise est signalé et où chaque éditeur s'ouvre sur place."
keywords: [Liberty Next, Studio, Vue d'ensemble, carte d'application, low-code, écrans, requêtes, points d'accès, services, dépendances, inutilisé, intégrité, modification sur place]
---

# Vue d'ensemble et Studio

Deux pages donnent la vision complète avant d'ouvrir le moindre éditeur. **Vue d'ensemble** liste les applications de l'installation et le chemin qui en construit une. Le **Studio** présente une application sous forme de **carte** — son menu, ses écrans, les données qu'ils utilisent, les services qu'ils appellent — et permet de tout modifier sans quitter la page.

Accès : **Liberty Next → Vue d'ensemble** et **Liberty Next → Construire → Studio**, pour les superutilisateurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1400 448" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="stu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="stu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="stu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="stu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="960" height="398" rx="14" fill="url(#stu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Studio</text>
  <rect x="240" y="62" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="76.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">crm</text>
  <text x="348" y="77" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="370" y="62" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="76.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Chercher un écran, une requête, un service…</text>
  <rect x="610" y="62" width="62" height="22" rx="11" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="621" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="630.04" y="76.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Écrans</text>
  <rect x="678" y="62" width="67" height="22" rx="11" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="689" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="698.04" y="76.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Données</text>
  <rect x="751" y="62" width="72" height="22" rx="11" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="762" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="771.04" y="76.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Services</text>
  <rect x="829" y="62" width="168" height="22" rx="11" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="913.0" y="76.5" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚠ 1 écran(s) que rien n'ouvre</text>
  <rect x="1063" y="62" width="97" height="22" rx="11" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="1111.5" y="76.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Rien de cassé</text>
  <rect x="240" y="98" width="600" height="300" rx="10" fill="#0b1120" stroke="#1f2937" strokeWidth="1"/>
  <defs><pattern id="stu-dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="9" cy="9" r="0.8" fill="#1f2937"/></pattern></defs>
  <rect x="240" y="98" width="600" height="300" rx="10" fill="url(#stu-dots)"/>
  <path d="M250,112 h4 l1.5,1.5 h5.5 v7 h-11 Z" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="266" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MENU</text>
  <text x="350" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <rect x="382.0" y="110" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="382.0" y="116" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="388.0" y="110" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="388.0" y="116" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="398.0" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ÉCRANS</text>
  <text x="510.0" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <ellipse cx="547.5" cy="112" rx="5" ry="2" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <path d="M542.5,112 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="558.0" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="692.0" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <rect x="724.0" y="110" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="730.0" y="116" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <path d="M726.2,114.5 v3.5 h3.8" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="740.0" y="119" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVICES</text>
  <text x="830.0" y="119" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <g opacity="0.3">
  <rect x="250" y="132" width="100" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <path d="M258,140.5 h4 l1.5,1.5 h5.5 v7 h-11 Z" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="275" y="147.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Ventes</text>
  </g>
  <g>
  <rect x="262" y="162" width="88" height="24" rx="6" fill="#111827" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <rect x="270" y="168.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="270" y="174.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="168.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="174.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <text x="287" y="177.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  </g>
  <g opacity="0.3">
  <rect x="262" y="192" width="88" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="270" y="198.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="270" y="204.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="198.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="276" y="204.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <text x="287" y="207.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Affaires</text>
  </g>
  <g opacity="0.3">
  <rect x="250" y="222" width="100" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="258" y="228.5" width="11" height="11" rx="2" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <line x1="263" y1="228.5" x2="263" y2="239.5" stroke="#fb923c" strokeWidth="1"/>
  <text x="275" y="237.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline</text>
  </g>
  <g opacity="0.3">
  <rect x="250" y="252" width="100" height="24" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="258" y="258.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="258" y="264.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="264" y="258.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <rect x="264" y="264.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <text x="275" y="267.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Activités</text>
  </g>
  <g>
  <rect x="382.0" y="132" width="128" height="32" rx="6" fill="#111827" stroke="#4ade80" strokeWidth="1.6"/>
  <rect x="390.0" y="142.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="148.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="142.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="148.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="145.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="407.0" y="157" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="495.0" y="143.0" width="9" height="10" rx="1.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <line x1="497.0" y1="147.0" x2="502.0" y2="147.0" stroke="#94a3b8" strokeWidth="1"/>
  <line x1="497.0" y1="150.0" x2="502.0" y2="150.0" stroke="#94a3b8" strokeWidth="1"/>
  </g>
  <g>
  <rect x="382.0" y="172" width="128" height="32" rx="6" fill="#111827" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <rect x="390.0" y="182.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="188.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="182.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="188.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="185.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contacts</text>
  <text x="407.0" y="197" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">contacts</text>
  </g>
  <g opacity="0.3">
  <rect x="382.0" y="212" width="128" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="390.0" y="222.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="228.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="222.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="228.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="225.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="407.0" y="237" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">deals</text>
  <rect x="495.0" y="223.0" width="9" height="10" rx="1.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <line x1="497.0" y1="227.0" x2="502.0" y2="227.0" stroke="#94a3b8" strokeWidth="1"/>
  <line x1="497.0" y1="230.0" x2="502.0" y2="230.0" stroke="#94a3b8" strokeWidth="1"/>
  </g>
  <g opacity="0.3">
  <rect x="382.0" y="252" width="128" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="390.0" y="262.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="268.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="262.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="268.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="265.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Activités</text>
  <text x="407.0" y="277" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">activities</text>
  <rect x="495.5" y="267.0" width="9" height="7" rx="1.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <path d="M497.5,267.0 v-2.5 a2.5,2.5 0 0 1 5,0 v2.5" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  </g>
  <g opacity="0.3">
  <rect x="382.0" y="292" width="128" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="390.0" y="302.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="390.0" y="308.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="302.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="396.0" y="308.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="407.0" y="305.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Ancien import</text>
  <text x="407.0" y="317" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">old_import</text>
  <path d="M495.0,312.0 L500.0,303.0 L505.0,312.0 Z" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="500.0" y="311.0" fill="#fb923c" fontSize="6.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">!</text>
  </g>
  <g>
  <rect x="542.0" y="132" width="150" height="32" rx="6" fill="#111827" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <ellipse cx="555.5" cy="144.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,144.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="145.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="567.0" y="157" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  </g>
  <g>
  <rect x="542.0" y="172" width="150" height="32" rx="6" fill="#111827" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <ellipse cx="555.5" cy="184.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,184.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="185.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="567.0" y="197" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.customers_put</text>
  <path d="M678.0,193.0 L678.0,190.0 L684.0,184.0 L687.0,187.0 L681.0,193.0 Z" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  </g>
  <g>
  <rect x="542.0" y="212" width="150" height="32" rx="6" fill="#111827" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <ellipse cx="555.5" cy="224.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,224.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="225.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contacts</text>
  <text x="567.0" y="237" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.contacts_get</text>
  </g>
  <g opacity="0.3">
  <rect x="542.0" y="252" width="150" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <ellipse cx="555.5" cy="264.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M550.5,264.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="567.0" y="265.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="567.0" y="277" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">crm.deals_get</text>
  </g>
  <g opacity="0.3">
  <rect x="542.0" y="292" width="150" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <circle cx="555.5" cy="308.0" r="5" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <ellipse cx="555.5" cy="308.0" rx="2.2" ry="5" fill="none" stroke="#4a9eff" strokeWidth="1"/>
  <line x1="550.5" y1="308.0" x2="560.5" y2="308.0" stroke="#4a9eff" strokeWidth="1"/>
  <text x="567.0" y="305.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Encours client</text>
  <text x="567.0" y="317" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">erp.credit_check</text>
  </g>
  <rect x="542.0" y="332" width="150" height="24" rx="6" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="551.0" y="347.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Afficher les 2 qu'aucun écran…</text>
  <g>
  <rect x="724.0" y="132" width="106" height="32" rx="6" fill="#111827" stroke="rgba(168,85,247,0.45)" strokeWidth="1"/>
  <rect x="732.0" y="142.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <rect x="738.0" y="148.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <path d="M734.2,147.0 v3.5 h3.8" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <text x="749.0" y="145.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôle crédit</text>
  <text x="749.0" y="157" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">check_credit</text>
  </g>
  <g opacity="0.3">
  <rect x="724.0" y="172" width="106" height="32" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="732.0" y="182.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <rect x="738.0" y="188.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <path d="M734.2,187.0 v3.5 h3.8" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <text x="749.0" y="185.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Clôturer</text>
  <text x="749.0" y="197" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">close_deal</text>
  </g>
  <rect x="724.0" y="212" width="106" height="24" rx="6" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="733.0" y="227.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Tous les services…</text>
  <path d="M 350 174.0 C 366.0 174.0, 366.0 148.0, 382.0 148.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 526.0 148.0, 526.0 148.0, 542.0 148.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 526.0 148.0, 526.0 188.0, 542.0 188.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 534.0 148.0, 534.0 188.0, 510.0 188.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 188.0 C 526.0 188.0, 526.0 228.0, 542.0 228.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <path d="M 510.0 148.0 C 600.0 122.0, 634.0 122.0, 724.0 148.0" fill="none" stroke="#4a9eff" strokeWidth="1.5" strokeOpacity="0.8"/>
  <rect x="854" y="98" width="306" height="300" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="870" y="120" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ÉCRAN</text>
  <text x="870" y="140" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="870" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">crm.customers</text>
  <rect x="870" y="166" width="77" height="22" rx="5" fill="url(#stu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="180.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Concevoir</text>
  <rect x="955" y="166" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1006.0" y="180.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↗ Ouvrir l'écran</text>
  <text x="870" y="206" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Données qu'il utilise</text>
  <rect x="870" y="213" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="226.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <text x="1136" y="226.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">lit</text>
  <rect x="870" y="237" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="250.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">crm.customers_put</text>
  <text x="1136" y="250.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">enregistre</text>
  <text x="870" y="274" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Services qu'il appelle</text>
  <rect x="870" y="281" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="294.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="870" y="318" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Écrans dans sa fiche</text>
  <rect x="870" y="325" width="274" height="20" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="878" y="338.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">contacts</text>
  <rect x="20" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une application</text>
  <text x="30" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa carte ; la recherche filtre tout</text>
  <line x1="200" y1="73.0" x2="240" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="108" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sélectionne</text>
  <text x="30" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les liens s'éclairent, le reste s'estompe</text>
  <line x1="200" y1="125.0" x2="384.0" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entrée de menu → écran</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les dossiers décalent leurs entrées</text>
  <line x1="200" y1="193.0" x2="262" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rien ne l'ouvre</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ni entrée de menu, ni fiche</text>
  <line x1="200" y1="267.0" x2="500.0" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'aucun écran n'utilise</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affiché à la demande, en fin de liste</text>
  <line x1="200" y1="357.0" x2="542.0" y2="344" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="1210" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le contrôle complet</text>
  <line x1="1200" y1="47.0" x2="1160" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="98" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="113" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La sélection</text>
  <text x="1210" y="126" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son type, son nom, sa clé</text>
  <line x1="1200" y1="115.0" x2="954" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier sur place</text>
  <text x="1210" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Concevoir s'ouvre sur la carte</text>
  <line x1="1200" y1="177.0" x2="1057" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'il utilise</text>
  <text x="1210" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lit · enregistre · appelle</text>
  <line x1="1200" y1="249.0" x2="1144" y2="223" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1200" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dans sa fiche</text>
  <text x="1210" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les écrans que porte sa fiche</text>
  <line x1="1200" y1="347.0" x2="1144" y2="335" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
</svg>

---

## La page Vue d'ensemble \{#overview\}

La page comporte un en-tête et deux sections.

<svg viewBox="0 0 1400 522" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ovw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ovw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ovw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ovw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="960" height="480" rx="14" fill="url(#ovw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next construit des applications par configuration : aucune table de métadonnées, aucun code à déployer pour un écran.</text>
  <rect x="240" y="80" width="117" height="24" rx="5" fill="url(#ovw-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="95.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⇄ Ouvrir le Studio</text>
  <rect x="365" y="80" width="208" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="469.0" y="95.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Un nouvel écran, avec l'assistant</text>
  <text x="1160" y="96" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">v7.0.x</text>
  <rect x="856" y="81" width="258" height="22" rx="11" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="985.0" y="95.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tests : 4 réussi(s) · 0 en échec · 0 modifié(s)</text>
  <rect x="751" y="81" width="97" height="22" rx="11" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="799.5" y="95.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Rien de cassé</text>
  <text x="240" y="128" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Les applications</text>
  <text x="346.56" y="128" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">chacune s'ouvre dans le Studio : sa carte, modifiée sur place</text>
  <rect x="240.0" y="140" width="298.6666666666667" height="82" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="526.6666666666667" y="160" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Studio →</text>
  <text x="252.0" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="252.0" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="312.4266666666667" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">8</text>
  <text x="312.4266666666667" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">entrées de menu</text>
  <text x="405.8133333333334" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="405.8133333333334" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Données</text>
  <text x="466.24" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="466.24" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="252.0" y="212" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">⚠ 1 écran(s) que rien n'ouvre</text>
  <rect x="550.6666666666667" y="140" width="298.6666666666667" height="82" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="562.6666666666667" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">hr</text>
  <text x="837.3333333333335" y="160" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Studio →</text>
  <text x="562.6666666666667" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="562.6666666666667" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="623.0933333333334" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="623.0933333333334" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">entrées de menu</text>
  <text x="716.4800000000001" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">7</text>
  <text x="716.4800000000001" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Données</text>
  <text x="776.9066666666668" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="776.9066666666668" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="562.6666666666667" y="212" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">✓ Tous les écrans sont accessibles</text>
  <rect x="861.3333333333334" y="140" width="298.6666666666667" height="82" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="873.3333333333334" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales</text>
  <text x="1148.0" y="160" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Studio →</text>
  <text x="873.3333333333334" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="873.3333333333334" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="933.76" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="933.76" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">entrées de menu</text>
  <text x="1027.1466666666668" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <text x="1027.1466666666668" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Données</text>
  <text x="1087.5733333333333" y="182" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="1087.5733333333333" y="194" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="873.3333333333334" y="212" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">✓ Tous les écrans sont accessibles</text>
  <text x="240" y="252" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Comment une application se construit</text>
  <text x="469.76" y="252" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">huit étapes, dans cet ordre — chacune s'ouvre là où elle se fait</text>
  <rect x="240.0" y="264" width="222.5" height="104" rx="9" fill="rgba(74,158,255,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="274" width="22" height="22" rx="5" fill="rgba(74,158,255,0.07)" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <ellipse cx="261.0" cy="281.5" rx="5" ry="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <path d="M256.0,281.5 v7 a5,2 0 0 0 10,0 v-7" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="280.0" y="289" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">1</text>
  <text x="292.0" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecter les données</text>
  <text x="250.0" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Un connecteur atteint une base ou une API. Ses</text>
  <text x="250.0" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">requêtes et ses points d'accès sont le seul</text>
  <text x="250.0" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">endroit où les données sont lues et écrites.</text>
  <text x="250.0" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">3 connecteurs · 42 requêtes · 6 points d'accès</text>
  <rect x="472.5" y="264" width="222.5" height="104" rx="9" fill="rgba(74,158,255,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482.5" y="274" width="22" height="22" rx="5" fill="rgba(74,158,255,0.07)" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="488.0" y="279.5" width="11" height="11" rx="2" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <line x1="493.0" y1="279.5" x2="493.0" y2="290.5" stroke="#4a9eff" strokeWidth="1"/>
  <text x="512.5" y="289" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">2</text>
  <text x="524.5" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nommer les champs</text>
  <text x="482.5" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Le dictionnaire donne à chaque champ son</text>
  <text x="482.5" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">libellé, son format, sa liste de valeurs — une</text>
  <text x="482.5" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">fois, pour tous les écrans qui l'affichent.</text>
  <text x="482.5" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">180 entrées du dictionnaire</text>
  <rect x="705.0" y="264" width="222.5" height="104" rx="9" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="715.0" y="274" width="22" height="22" rx="5" fill="rgba(50,215,75,0.06)" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="720.5" y="279.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="720.5" y="285.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="726.5" y="279.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <rect x="726.5" y="285.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#4ade80" strokeWidth="1.1"/>
  <text x="745.0" y="289" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">3</text>
  <text x="757.0" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Construire les écrans</text>
  <text x="715.0" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Un écran est une requête affichée en grille,</text>
  <text x="715.0" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">avec ses filtres, sa fiche, ses actions. Le</text>
  <text x="715.0" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Studio les montre avec ce qu'ils utilisent.</text>
  <text x="715.0" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">19 écrans · 8 avec une fiche</text>
  <rect x="937.5" y="264" width="222.5" height="104" rx="9" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="947.5" y="274" width="22" height="22" rx="5" fill="rgba(50,215,75,0.06)" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <path d="M953.0,281.5 h4 l1.5,1.5 h5.5 v7 h-11 Z" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="977.5" y="289" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">4</text>
  <text x="989.5" y="289" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Organiser le menu</text>
  <text x="947.5" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Le menu est ce que les utilisateurs voient</text>
  <text x="947.5" y="321" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">d'abord : des dossiers et des entrées qui</text>
  <text x="947.5" y="332" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">ouvrent un écran, un tableau de bord, une page.</text>
  <text x="947.5" y="358" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">25 entrées de menu</text>
  <rect x="240.0" y="378" width="222.5" height="104" rx="9" fill="rgba(168,85,247,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="388" width="22" height="22" rx="5" fill="rgba(168,85,247,0.07)" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="255.5" y="393.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <rect x="261.5" y="399.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <path d="M257.7,398.0 v3.5 h3.8" fill="none" stroke="#c084fc" strokeWidth="1.1"/>
  <text x="280.0" y="403" fill="#c084fc" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">5</text>
  <text x="292.0" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter la logique</text>
  <text x="250.0" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Un service, ce sont des étapes composées en un</text>
  <text x="250.0" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">seul appel ; un job exécute des étapes selon un</text>
  <text x="250.0" y="446" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">planning ; une notification prévient quelqu'un.</text>
  <text x="250.0" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">5 services · 4 jobs</text>
  <rect x="472.5" y="378" width="222.5" height="104" rx="9" fill="rgba(255,159,10,0.07)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482.5" y="388" width="22" height="22" rx="5" fill="rgba(255,159,10,0.07)" stroke="#fb923c" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="488.0" y="393.5" width="11" height="11" rx="2" fill="none" stroke="#fb923c" strokeWidth="1.1"/>
  <line x1="493.0" y1="393.5" x2="493.0" y2="404.5" stroke="#fb923c" strokeWidth="1"/>
  <text x="512.5" y="403" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">6</text>
  <text x="524.5" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Montrer les chiffres</text>
  <text x="482.5" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Des tableaux de bord et des graphiques pour ce</text>
  <text x="482.5" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">qui se suit chaque jour ; l'explorateur de</text>
  <text x="482.5" y="446" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">données pour ce qui se demande librement.</text>
  <text x="482.5" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">3 tableaux de bord · 2 modèles d'explorateur</text>
  <rect x="705.0" y="378" width="222.5" height="104" rx="9" fill="rgba(250,204,21,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="715.0" y="388" width="22" height="22" rx="5" fill="rgba(250,204,21,0.06)" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="720.5" y="393.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <rect x="720.5" y="399.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <rect x="726.5" y="393.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <rect x="726.5" y="399.5" width="4.5" height="4.5" rx="1" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <text x="745.0" y="403" fill="#facc15" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">7</text>
  <text x="757.0" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Donner l'accès</text>
  <text x="715.0" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Les rôles disent qui voit quel menu, exécute</text>
  <text x="715.0" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">quelle requête, et quelles lignes des données</text>
  <text x="715.0" y="446" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">sont les siennes.</text>
  <text x="715.0" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">rôles, permissions, périmètre de données</text>
  <rect x="937.5" y="378" width="222.5" height="104" rx="9" fill="rgba(250,204,21,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="947.5" y="388" width="22" height="22" rx="5" fill="rgba(250,204,21,0.06)" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1"/>
  <rect x="953.0" y="393.5" width="11" height="11" rx="2" fill="none" stroke="#facc15" strokeWidth="1.1"/>
  <line x1="958.0" y1="393.5" x2="958.0" y2="404.5" stroke="#facc15" strokeWidth="1"/>
  <text x="977.5" y="403" fill="#facc15" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">8</text>
  <text x="989.5" y="403" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérifier et livrer</text>
  <text x="947.5" y="424" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Le contrôle d'intégrité trouve ce qui est cassé</text>
  <text x="947.5" y="435" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">; un package porte la configuration vers un</text>
  <text x="947.5" y="446" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">autre environnement.</text>
  <text x="947.5" y="472" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">intégrité · package · historique</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Point de départ</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le Studio, ou l'assistant d'écran</text>
  <line x1="200" y1="87.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par application</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrans · menu · données · services</text>
  <line x1="200" y1="167.0" x2="240" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est isolé</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrans que rien n'ouvre, réf. cassées</text>
  <line x1="200" y1="247.0" x2="252" y2="209" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Huit étapes, dans l'ordre</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à quoi elle sert · ce qui existe</text>
  <line x1="200" y1="347.0" x2="240" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1200" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrité · tests</text>
  <text x="1210" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque pastille ouvre sa page</text>
  <line x1="1200" y1="47.0" x2="791" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1200" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">S'ouvre dans le Studio</text>
  <text x="1210" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la carte de l'application</text>
  <line x1="1200" y1="167.0" x2="1150" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
  <rect x="1200" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1210" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic ouvre la page</text>
  <text x="1210" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où l'étape se réalise</text>
  <line x1="1200" y1="347.0" x2="1160" y2="312" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ovw-arrow)"/>
</svg>

**En-tête** — **Ouvrir le Studio**, **Un nouvel écran, avec l'assistant** (l'[Assistant de création d'écran](./build/screen-assistant.md)), la version de l'installation tout à droite, et deux pastilles d'état : l'intégrité de la configuration — *Rien de cassé*, ou le nombre d'erreurs et d'avertissements, qui ouvre **Déployer → Intégrité** — et, dès qu'il existe des cas de test, les totaux des [tests](./build/tests.md), qui ouvrent **Exploiter → Résultats des tests**.

**Les applications** — une carte par application : son nombre d'**écrans**, d'**entrées de menu**, de **données** (requêtes et points d'accès) et de **services**, et une ligne d'état : *Tous les écrans sont accessibles*, ou le nombre d'écrans que rien n'ouvre et de références cassées. Une carte — son lien **Studio →** — ouvre l'application dans le Studio.

**Comment une application se construit** — huit étapes, dans l'ordre ; chacune dit en une phrase à quoi elle sert, montre ce que l'installation contient déjà et ouvre la page où elle se réalise.

| # | Étape | Ouvre |
|---|---|---|
| 1 | **Connecter les données** — un connecteur atteint une base ou une API ; ses requêtes et ses points d'accès sont le seul endroit où les données sont lues et écrites. | Données → Connecteurs |
| 2 | **Nommer les champs** — le dictionnaire donne à chaque champ son libellé, son format, sa liste de valeurs, une fois pour tous les écrans. | Données → Dictionnaire |
| 3 | **Construire les écrans** — un écran est une requête affichée en grille, avec ses filtres, sa fiche, ses actions. | Construire → Studio |
| 4 | **Organiser le menu** — des dossiers et des entrées qui ouvrent un écran, un tableau de bord, une page. | Écrans → Menus |
| 5 | **Ajouter la logique** — un service compose des étapes en un seul appel ; une tâche exécute des étapes selon une planification ; une notification prévient quelqu'un. | Logique → Services |
| 6 | **Montrer les chiffres** — des tableaux de bord et des graphiques pour ce qui se suit chaque jour ; l'explorateur de données pour les questions libres. | Analyse → Tableaux de bord |
| 7 | **Donner l'accès** — les rôles disent qui voit quel menu, exécute quelle requête, et quelles lignes lui reviennent. | Administrer → Accès |
| 8 | **Vérifier et livrer** — le contrôle d'intégrité trouve ce qui est cassé ; un paquet porte la configuration vers un autre environnement. | Déployer → Paquet |

---

## Le Studio \{#studio\}

L'application se choisit en haut à gauche. À côté se trouvent la zone de recherche et les compteurs : écrans, données, services et, en orange, les écrans que rien n'ouvre ; tout à droite, la pastille d'intégrité (*Rien de cassé*, ou le nombre d'erreurs et d'avertissements). En dessous, la carte comporte quatre colonnes, chacune avec son compteur, et le panneau de droite.

| Colonne | Contenu |
|---|---|
| **Menu** | Les entrées du menu de l'application, dans son ordre : les entrées d'un dossier sont décalées sous lui ; l'icône distingue un dossier, un écran et un tableau de bord. Son compteur donne le nombre d'entrées, comme la carte de la vue d'ensemble — les dossiers n'y figurent pas. |
| **Écrans** | Ses écrans, chacun avec son libellé et son identifiant. Des icônes signalent *A une fiche* et *Lecture seule*. |
| **Données** | Les requêtes (icône de base de données) et les points d'accès (icône de globe) utilisés par ses écrans, chacun avec son libellé et sa clé `connecteur.nom`. Un crayon marque ce qui *modifie des données*. |
| **Services** | Les services appelés par ses écrans, avec leur identifiant. **Tous les services…** ouvre la page [Services](./build/services.md). |

La zone de recherche — *Chercher un écran, une requête, un service…* — réduit toutes les colonnes à la fois (le menu s'affiche alors à plat).

### Suivre les liens \{#links\}

Un clic sélectionne un élément : **tout ce qui lui est lié s'éclaire**, les liens se dessinent en courbes d'une colonne à l'autre, et le reste s'estompe. Chaque colonne défile pour amener un élément lié à l'écran. La sélection suit les liens jusqu'au bout — une requête éclaire les écrans qui l'utilisent et leurs entrées de menu ; une entrée de menu éclaire son écran et tout ce à quoi cet écran mène. Un écran ouvert dans la fiche d'un autre écran lui est relié par une courbe le long de la colonne Écrans ; un point d'accès servi par un service est relié à ce service. Un second clic annule la sélection, et un clic sur un élément du panneau le sélectionne à son tour.

Un clic suffit ainsi pour répondre aux questions qui, autrement, obligent à ouvrir cinq éditeurs : *que casse la modification de cette requête ? quels écrans appellent ce service ? par où un utilisateur arrive-t-il à cet écran ?*

### Ce qui est isolé \{#loose\}

Le Studio signale ce qu'une application porte pour rien, et ce qui est cassé :

| Signe | Signification |
|---|---|
| Avertissement sur un écran | *Aucune entrée de menu ni aucune fiche n'ouvre cet écran.* |
| Avertissement sur une donnée ou un service | *N'existe plus : ce qui pointe dessus est cassé.* |
| **Afficher les N qu'aucun écran n'utilise** (en bas de la colonne Données) | Liste les requêtes et les points d'accès de l'application qu'aucun écran n'utilise ; **Masquer les N qu'aucun écran n'utilise** les replie. |
| Pastille orange en haut | Le nombre d'écrans que rien n'ouvre. |

Un écran est ouvert par une entrée de menu (l'écran lui-même, ou une requête qu'il lit), par un autre écran (son clic sur une ligne, un onglet de sa fiche, une action `navigate`) ou par une [entité de l'Explorateur](./explorer/model.md) qui le désigne. La règle est celle de **Déployer → Intégrité** : un écran que le Studio dit n'être ouvert par rien est l'écran orphelin que signale l'Intégrité. La pastille d'intégrité, à côté, ouvre le contrôle complet.

### Modifier sur place \{#edit\}

Le panneau de droite dit ce qu'est la sélection, ce qu'elle utilise et ce qui l'utilise — et donne le moyen de la modifier :

| Sélection | Le panneau affiche | Boutons |
|---|---|---|
| Rien | Le nom de l'application, **À regarder** (ce qui est isolé, ou *Tous les écrans sont accessibles et toutes les requêtes servent.*) et les **Tableaux de bord** de l'application, marqués *hors du menu* quand aucune entrée ne les ouvre ; un tableau de bord ouvre l'éditeur des tableaux de bord. | — |
| Un **écran** | Sa clé `application.écran`, *Données qu'il utilise* — chacune marquée *lit*, *enregistre* ou *appelle* —, *Services qu'il appelle*, *Écrans dans sa fiche*. | **Concevoir**, **Ouvrir l'écran** |
| Une **requête** ou un **point d'accès** | Sa clé, *Utilisé par* (chaque écran avec *lit*, *enregistre* ou *appelle*), *Servi par le service*. | **Modifier la requête** / **Modifier le point d'accès** |
| Un **service** | Son identifiant et son nombre d'étapes, *Utilisé par*, *Exposé comme* (`POST /api/http/<connecteur>/<point d'accès>`). | **Concevoir le flux**, **Exécuter** |
| Une **entrée de menu** | Son identifiant et son type, *Ouvre*. | **Modifier le menu** |

Les éditeurs s'ouvrent **par-dessus la carte** et y reviennent ; la carte est alors relue et la sélection conservée :

| Bouton | Ouvre |
|---|---|
| **Concevoir** (ou un double-clic sur un écran) | Le [Concepteur d'écran](./build/screens/overview.md), en pleine fenêtre, sur cet écran : ses étapes *Ce qu'il est*, *Données*, *Grille*, *Fiche*, *Actions*, *Sortie* ; **Annuler** ramène à la carte. |
| **Modifier la requête** | L'éditeur de requête (*Modifier la requête*), sur cette requête. |
| **Modifier le point d'accès** | L'[éditeur de point d'accès](./build/api-endpoints.md). |
| **Concevoir le flux** (ou un double-clic sur un service) | Le [concepteur de service](./build/services.md) : le flux de **Début** à **Réponse**, avec à droite le libellé, la description et les entrées du service. |
| **Exécuter** | Exécute le service tel qu'il est enregistré, avec les entrées saisies, et affiche sa réponse ; ses étapes s'exécutent réellement. |
| **Modifier le menu**, un tableau de bord | L'éditeur des menus, ouvert sur l'application affichée, ou celui des tableaux de bord, dans une fenêtre fermée par **Fermer**. |

**Ouvrir l'écran** quitte le Studio pour l'écran lui-même.

Un enregistrement refusé dans l'un de ces éditeurs le laisse ouvert au-dessus de la carte, avec la liste des points à corriger — voir [Un enregistrement refusé](./configuration/settings-ui.md#refused).

---

## Conseils & bonnes pratiques \{#tips\}

- Ouvrir le Studio **avant** de modifier une requête ou un service partagé : les éléments éclairés forment le plan de test.
- Traiter les éléments isolés avant une livraison — un écran que rien n'ouvre est soit une entrée de menu manquante, soit de la configuration morte.
- Pour découvrir une application, sélectionner ses entrées de menu une à une : la carte lui sert de documentation.
- Le Studio traite une application à la fois ; **Rechercher les usages**, dans chaque éditeur, parcourt toute l'installation.

---

## Voir aussi

- [L'espace de travail Liberty Next](./configuration/settings-ui.md) — le menu et l'application d'un enregistrement.
- [Services](./build/services.md), [Tests](./build/tests.md), [Points d'accès d'API](./build/api-endpoints.md).
