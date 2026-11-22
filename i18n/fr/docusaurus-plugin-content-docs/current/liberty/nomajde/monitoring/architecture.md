---
title: Architecture
description: "Supervision → Architecture dans Nomajde : la plateforme JD Edwards EnterpriseOne dessinée d'après ce qui est trouvé — les instances de Server Manager par niveau et par hôte, le serveur d'applications et sa version, la base, les machines qui s'y connectent —, un contour en pointillés pour ce que Server Manager ne déclare pas, des liens tracés seulement sur preuve, une carte qui ouvre son détail et un téléchargement en SVG."
keywords: [Nomajde, JD Edwards, JDE E1, architecture, schéma, Server Manager, serveur d'entreprise, serveur web, serveur AIS, WebLogic, WebSphere, base de données, Oracle, sessions de la base, appels de fonctions métier, SVG, rapport d'audit]
---

# Architecture

**Supervision → Architecture** dessine la plateforme JD Edwards EnterpriseOne **d'après ce qui est trouvé**, et non d'après un schéma tenu à la main : les instances que déclare Server Manager, regroupées par niveau et par hôte, la base vers laquelle pointe la connexion JD Edwards, et les machines que la base voit connectées. Ce que seule la base laisse voir porte un contour en pointillés ; un lien entre deux cartes n'est tracé que si un élément le prouve. La page lit Server Manager et la base en direct, à chaque ouverture ou clic sur **Relire**, et ne modifie rien.

Le même schéma forme l'onglet **Architecture** de la [Synthèse de la plateforme](../synthesis.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 482" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="narch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="narch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="narch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="narch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="442" rx="14" fill="url(#narch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La plateforme JD Edwards telle qu'elle est trouvée maintenant : ce que Server Manager déclare, et ce que seule la base montre.</text>
  <rect x="1027" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1053.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="902" y="34" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="960.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger en SVG</text>
  <rect x="697" y="34" width="197" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="795.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Conserver pour le rapport d'audit</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="92" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Rien n'est encore conservé pour le rapport d'audit : sa page d'architecture reste absente sauf si une image y est placée à la main.</text>
  <rect x="240.0" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="119" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">5 / 5</text>
  <text x="250.0" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCES EN MARCHE</text>
  <rect x="409.6" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="419.6" y="119" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="419.6" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTES DANS SERVER MANAGER</text>
  <rect x="579.2" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="589.2" y="119" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="589.2" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <rect x="748.8" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="758.8" y="119" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="758.8" y="130" fill="#64748b" fontSize="6.89" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NON DÉCLARÉS DANS SERVER MANAGER</text>
  <rect x="918.4" y="100" width="161.6" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="928.4" y="119" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="928.4" y="130" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIENS AVEC LEUR PREUVE</text>
  <circle cx="243" cy="153" r="3" fill="#4ade80"/>
  <text x="250" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Instances Server Manager</text>
  <text x="356.144" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· lu</text>
  <circle cx="389.272" cy="153" r="3" fill="#4ade80"/>
  <text x="396.272" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Appels de fonctions métier</text>
  <text x="510.928" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· lu</text>
  <circle cx="544.056" cy="153" r="3" fill="#4ade80"/>
  <text x="551.056" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Pool JD Edwards</text>
  <text x="618.8960000000001" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· lu</text>
  <circle cx="652.0240000000001" cy="153" r="3" fill="#4ade80"/>
  <text x="659.0240000000001" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Instance de la base</text>
  <text x="743.8880000000001" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· lu</text>
  <circle cx="777.0160000000002" cy="153" r="3" fill="#4ade80"/>
  <text x="784.0160000000002" y="156" fill="#cbd5e1" fontSize="7.6" fontFamily="system-ui, sans-serif">Sessions de la base</text>
  <text x="868.8800000000002" y="156" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">· lu</text>
  <rect x="240" y="166" width="600" height="250" rx="8" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <rect x="764" y="174" width="68" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="798.0" y="185.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">−  100%  +</text>
  <rect x="252" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WEB ET AIS</text>
  <rect x="398" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="406" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVEURS D'ENTREPRISE</text>
  <rect x="544" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="552" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <rect x="690" y="196" width="128" height="196" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="698" y="209" fill="#94a3b8" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUTRES CLIENTS DE LA BASE</text>
  <rect x="258" y="216" width="116" height="168" rx="5" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="226" fill="#cbd5e1" fontSize="6.8" fontFamily="system-ui, sans-serif">jde-web01.example.com</text>
  <rect x="263" y="230" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="267" y="235" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="274" y="242" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">WLS_PD</text>
  <text x="274" y="253" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Serveur d'application…</text>
  <text x="274" y="264" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="315.28" y="264" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="263" y="276" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="267" y="281" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="274" y="288" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">AIS_PD</text>
  <text x="274" y="299" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Serveur AIS</text>
  <text x="274" y="310" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="315.28" y="310" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Version 9.2.8</text>
  <rect x="263" y="322" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="267" y="327" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="274" y="334" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">HTML_PD</text>
  <text x="274" y="345" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Serveur web</text>
  <text x="274" y="356" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="315.28" y="356" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Version 9.2.8</text>
  <rect x="404" y="216" width="116" height="60" rx="5" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="226" fill="#cbd5e1" fontSize="6.8" fontFamily="system-ui, sans-serif">jde-ent01.example.com</text>
  <rect x="409" y="230" width="106" height="40" rx="5" fill="#111827" stroke="#4a9eff" strokeWidth="1.5"/>
  <rect x="413" y="235" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="420" y="242" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">ENT_PD</text>
  <text x="420" y="253" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Serveur d'entreprise</text>
  <text x="420" y="264" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="461.28" y="264" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Version 9.2.8</text>
  <rect x="550" y="216" width="116" height="60" rx="5" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="226" fill="#cbd5e1" fontSize="6.8" fontFamily="system-ui, sans-serif">jde-db01</text>
  <rect x="555" y="230" width="106" height="40" rx="5" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="559" y="235" width="2.5" height="30" rx="1" fill="#4ade80"/>
  <text x="566" y="242" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">JDEPD</text>
  <text x="566" y="253" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Oracle 19.0.0.0</text>
  <text x="566" y="264" fill="#4ade80" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="607.28" y="264" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Sessions 112</text>
  <rect x="698" y="220" width="112" height="40" rx="5" fill="#0d1220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2"/>
  <rect x="702" y="225" width="2.5" height="30" rx="1" fill="#94a3b8"/>
  <text x="709" y="232" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">jde-dep01</text>
  <text x="709" y="243" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Client de la base</text>
  <text x="709" y="254" fill="#94a3b8" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Inconnu</text>
  <text x="742.44" y="254" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Sessions 6</text>
  <rect x="698" y="268" width="112" height="40" rx="5" fill="#0d1220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2"/>
  <rect x="702" y="273" width="2.5" height="30" rx="1" fill="#94a3b8"/>
  <text x="709" y="280" fill="#e2e8f0" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">etl01</text>
  <text x="709" y="291" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">Client de la base</text>
  <text x="709" y="302" fill="#94a3b8" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">Inconnu</text>
  <text x="742.44" y="302" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">Sessions 2</text>
  <path d="M369,342 L389.0,342 L389.0,250 L409,250" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="361.152" y="289.0" width="55.696" height="12" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
  <text x="389.0" y="298.0" fill="#cbd5e1" fontSize="6.8" textAnchor="middle" fontFamily="system-ui, sans-serif">4 803 appels</text>
  <path d="M515,250 L555,250" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="509.056" y="241" width="51.888000000000005" height="12" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
  <text x="535.0" y="250" fill="#cbd5e1" fontSize="6.8" textAnchor="middle" fontFamily="system-ui, sans-serif">42 sessions</text>
  <path d="M316.0,384 L316.0,400 L585,400 L585,270" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="424.556" y="393" width="51.888000000000005" height="12" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
  <text x="450.5" y="402" fill="#cbd5e1" fontSize="6.8" textAnchor="middle" fontFamily="system-ui, sans-serif">59 sessions</text>
  <path d="M698,240 L679.5,240 L679.5,250 L661,250" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <text x="694" y="237" fill="#cbd5e1" fontSize="6.6" textAnchor="end" fontFamily="system-ui, sans-serif">6 sessions</text>
  <path d="M698,288 L679.5,288 L679.5,250 L661,250" fill="none" stroke="#c084fc" strokeWidth="1.3"/>
  <text x="694" y="285" fill="#cbd5e1" fontSize="6.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 sessions</text>
  <rect x="240" y="423" width="2.5" height="9" fill="#4ade80"/>
  <text x="246" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">En marche</text>
  <rect x="299.296" y="423" width="2.5" height="9" fill="#94a3b8"/>
  <text x="305.296" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">Inconnu</text>
  <rect x="350.304" y="423" width="12" height="9" rx="2" fill="none" stroke="#94a3b8" strokeDasharray="2 2"/>
  <text x="366.304" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">Non déclaré dans Server Manager</text>
  <line x1="510.76800000000003" y1="427" x2="524.768" y2="427" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="528.768" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">appels de fonctions métier</text>
  <line x1="652.5120000000001" y1="427" x2="666.5120000000001" y2="427" stroke="#c084fc" strokeWidth="1.6"/>
  <text x="670.5120000000001" y="430" fill="#cbd5e1" fontSize="7.4" fontFamily="system-ui, sans-serif">sessions de la base</text>
  <text x="240" y="444" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Lu le 22/11/2026 13:22 UTC.</text>
  <rect x="850" y="166" width="230" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="860" y="182" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ENT_PD</text>
  <text x="860" y="194" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Serveur d'entreprise</text>
  <text x="860" y="212" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">État</text>
  <text x="860" y="222" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="860" y="234" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Déclaré dans Server Manager</text>
  <text x="860" y="244" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">oui</text>
  <text x="860" y="256" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Hôte</text>
  <text x="860" y="266" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">jde-ent01.example.com</text>
  <text x="860" y="278" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Niveau</text>
  <text x="860" y="288" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">Serveurs d'entreprise</text>
  <text x="860" y="300" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Version</text>
  <text x="860" y="310" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">9.2.8.1</text>
  <text x="860" y="322" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Type</text>
  <text x="860" y="332" fill="#e2e8f0" fontSize="7.4" fontFamily="system-ui, sans-serif">entserver</text>
  <text x="860" y="346" fill="#64748b" fontSize="6.8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SES LIGNES</text>
  <rect x="858" y="352" width="214" height="26" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="864" y="363" fill="#e2e8f0" fontSize="7" fontFamily="system-ui, sans-serif">de HTML_PD vers ENT_PD — 4 803 appels</text>
  <text x="864" y="373" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">preuve : appels de fonctions métier</text>
  <rect x="858" y="382" width="214" height="26" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="864" y="393" fill="#e2e8f0" fontSize="7" fontFamily="system-ui, sans-serif">de jde-ent01 vers JDEPD — 42 sessions</text>
  <text x="864" y="403" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">preuve : sessions de la base</text>
  <rect x="1120" y="20" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conservé pour l'audit</text>
  <text x="1130" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cette lecture, dans le rapport</text>
  <line x1="1120" y1="37.0" x2="840" y2="34" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="1120" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Télécharger en SVG</text>
  <text x="1130" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'image, telle que dessinée</text>
  <line x1="1120" y1="97.0" x2="980" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="104" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="119" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq chiffres</text>
  <text x="30" y="132" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">non déclarés en orange</text>
  <line x1="200" y1="121.0" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les sources lues</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une absente est signalée</text>
  <line x1="200" y1="177.0" x2="242" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une colonne par niveau</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hôtes, puis instances</text>
  <line x1="200" y1="253.0" x2="252" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur d'applications</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">WebLogic ou WebSphere + version</text>
  <line x1="200" y1="347.0" x2="263" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne = une preuve</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appels ou sessions, comptés</text>
  <line x1="200" y1="417.0" x2="369.0" y2="301.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contour en pointillés</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">non déclaré dans Server Manager</text>
  <line x1="1120" y1="253.0" x2="810" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une carte</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui est connu, chaque ligne</text>
  <line x1="1120" y1="167.0" x2="1070" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#narch-arrow)"/>
</svg>

---

## Les chiffres et les sources \{#figures\}

Cinq chiffres ouvrent la page : **instances en marche** (sur celles que déclare Server Manager), **hôtes dans Server Manager**, **base de données**, **non déclarés dans Server Manager** (en orange dès qu'il y en a un) et **liens avec leur preuve**.

En dessous, chaque source du schéma indique si elle a été lue : **Instances Server Manager**, **Appels de fonctions métier**, **Pool JD Edwards**, **Instance de la base**, **Sessions de la base** — *lu*, *non lu* ou *non lu sur cette base*. Une source qui n'a pas répondu est nommée dans un avertissement avec la raison, et le reste est tout de même dessiné.

---

## Le schéma \{#diagram\}

Une colonne par niveau, de gauche à droite — un niveau vide n'est pas dessiné :

| Niveau | Contenu |
|---|---|
| **Web et AIS** | Les serveurs web et les serveurs AIS, avec le **serveur d'applications** qui les héberge — WebLogic ou WebSphere, avec sa version (*Serveur d'applications · WebLogic 14.1.1*). |
| **Serveurs d'entreprise** | Les serveurs d'entreprise. |
| **Base de données** | La base vers laquelle pointe la connexion JD Edwards : son produit et sa version, ses sessions. |
| **Autres clients de la base** | Les autres machines connectées à la base — un outil, une interface : les plus actives une à une, les autres regroupées sur une carte (*12 autres machines*). |
| **Autres serveurs** | Les instances d'un autre type. |
| **Administration** | La console Server Manager. |

Dans un niveau, les cartes sont posées sur leur **hôte** : une machine reste un seul hôte quel que soit le nom que lui donne une source (`ENT01.example.com`, `ent01` et `EXAMPLE\ENT01` désignent la même machine). Chaque carte donne son nom, sa nature, son état — **En marche**, **À revoir**, **Arrêté**, **Inconnu** — et une information clé (version, répertoire, sessions).

### Ce que Server Manager ne déclare pas \{#undeclared\}

Server Manager déclare des serveurs, pas des bases. Ce que la base laisse voir et que la console ne liste pas est dessiné avec un **contour en pointillés** : le serveur de base de données quand son hôte ne figure pas parmi ceux de la console, une machine qui exécute des noyaux JD Edwards sans être une instance, les autres machines connectées à la base. Le chiffre **non déclarés dans Server Manager** les compte : une machine que personne n'a déclarée est souvent la première question d'un audit.

### Les liens \{#lines\}

Un lien n'est tracé **que sur preuve**, et il dit laquelle :

| Lien | Preuve |
|---|---|
| Bleu — **appels de fonctions métier** | Les compteurs propres d'un serveur web : les appels qu'il a envoyés à un serveur d'entreprise (*4 803 appels*). |
| Violet — **sessions de la base** | Les sessions ouvertes sur la base à cet instant, par machine (*42 sessions*). |

Rien n'est tracé par habitude : deux serveurs sans lien sont deux serveurs entre lesquels rien n'a été mesuré.

### Le détail d'une carte \{#details\}

Un clic sur une carte affiche à droite ce qui en est connu : son **État**, si elle est **Déclaré dans Server Manager** (*non — trouvé du côté de la base seulement* pour une carte en pointillés), son **Hôte**, son **Niveau**, puis ses propres informations (version, répertoire, type, port, sessions, programmes, comptes…), et **Ses lignes** — chaque lien qui part d'elle ou y arrive, avec sa preuve. Un second clic la referme. Les boutons **−** et **+** règlent le zoom du schéma.

---

## Télécharger et conserver \{#download\}

| Bouton | Effet |
|---|---|
| **Télécharger en SVG** | Relit la plateforme et enregistre le schéma dans un fichier SVG (`architecture-jde.svg`), au format d'une page de rapport à l'italienne. |
| **Conserver pour le rapport d'audit** | Relit la plateforme et conserve cette lecture pour le rapport d'audit des licences de l'application sur ce pool JD Edwards : le rapport la dessine sur sa page d'architecture, dans sa propre langue — sauf si une image y a été placée à la main. Seule la dernière lecture est conservée. |

La ligne sous l'en-tête indique ce qui est conservé : *Rien n'est encore conservé pour le rapport d'audit*, ou la date de la lecture conservée et son pool.

---

## Quand une source ne répond pas \{#partial\}

Le schéma est dessiné à partir de ce qui a été lu :

- **Server Manager ne répond pas** — les serveurs montrés sont ceux que nomment les sessions de la base, et la page précise que ce qui est déclaré n'est pas connu ;
- **les sessions de la base ne sont pas lues** — les machines qui se connectent à la base n'apparaissent pas ;
- **la base n'est pas Oracle** — l'audit de la base n'est pas lu, mais le pool indique tout de même où se trouve la base ;
- **rien ne répond** — la page indique que ni Server Manager ni la base n'ont répondu.

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu et les permissions `plugin:nomajde.architecture:*`. Les rôles prédéfinis **Exploitant de la plateforme** et **Administrateur** détiennent les deux (voir [Rôles prédéfinis](../overview.md#roles)). Elle lit Server Manager par le pool `jde_server_manager` (voir [Server Manager](./server-manager.md#connection)) et la base de JD Edwards, avec les requêtes que l'[Audit de la base de données](./database-audit.md) envoie déjà : aucune requête nouvelle, ni AWR, ni ASH.

---

## Conseils & bonnes pratiques \{#tips\}

- Une carte en pointillés mérite une question : une machine qui exécute des noyaux ou ouvre des sessions sur la base sans être déclarée est soit oubliée dans Server Manager, soit étrangère à JD Edwards.
- Ouvrir la page à une heure chargée : les sessions de la base sont celles de l'instant, et une plateforme calme trace moins de liens.
- Conserver une lecture pour le rapport d'audit quand la plateforme est complète — juste après un redémarrage, les serveurs encore jamais appelés ne tracent aucun lien.

---

## Voir aussi

- [Synthèse de la plateforme](../synthesis.md) — le schéma avec les points à revoir.
- [Server Manager](./server-manager.md) — les instances, une grille par sujet.
- [Audit de la base de données](./database-audit.md) — les sessions par machine et par programme.
