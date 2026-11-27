---
title: Un utilisateur ou un rôle
description: "Gestion de la sécurité → un utilisateur ou un rôle dans Nomajde : toutes les lignes de sécurité JD Edwards EnterpriseOne qui s'appliquent à un utilisateur ou à un rôle, dans l'ordre où JD Edwards les lit, comparées à celles d'un autre, copiées, exportées vers Excel et réimportées ; les rôles qu'il détient ; son Security Workbench et sa sécurité des UDO, une nature à la fois ; ses menus affichés et masqués dans la vue de tâches elle-même."
keywords: [Nomajde, JD Edwards, JDE E1, gestion de la sécurité, utilisateur, rôle, rôle parent, rôle enfant, "*PUBLIC", Security Workbench, F00950, sécurité des UDO, F00950W, filtrage des menus, F9006, relations de rôles, F95921, Importer la sécurité, Fusionner les rôles, export Excel, import Excel]
---

# Un utilisateur ou un rôle

Le point de départ **un utilisateur ou un rôle** de la [Gestion de la sécurité](./overview.md) regroupe la sécurité JD Edwards EnterpriseOne d'un utilisateur, d'un rôle ou de `*PUBLIC`. Cinq onglets la présentent sous cinq angles — toutes les lignes qui s'appliquent, les rôles détenus, le Security Workbench, la sécurité des UDO, les menus — et chaque onglet modifie les lignes qu'il affiche.

Accès : **Gestion de la sécurité** → *Partir de* **un utilisateur ou un rôle**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsme-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsme-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsme-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsme-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="410" rx="14" fill="url(#njsme-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="34" width="840" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="54" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR DE</text>
  <rect x="307.36" y="42" width="137" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="375.86" y="54.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un utilisateur ou un rôle</text>
  <rect x="450.36" y="42" width="189" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="544.86" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">une application, un écran ou un état</text>
  <rect x="645.36" y="42" width="60" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="675.36" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">une table</text>
  <rect x="711.36" y="42" width="51" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="736.86" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un menu</text>
  <rect x="768.36" y="42" width="46" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="791.36" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="820.36" y="42" width="60" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="850.36" y="54.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <rect x="252" y="62" width="420" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="72.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="262" y="72.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="298.89" y="72.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">utilisateur</text>
  <rect x="240.0" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.04)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="249.0" y="99" width="18" height="18" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <text x="274.0" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tout</text>
  <text x="274.0" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">toutes les lignes qui s'appliquent</text>
  <rect x="409.6" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="418.6" y="99" width="18" height="18" rx="5" fill="#f87171" fillOpacity="0.18"/>
  <text x="443.6" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="443.6" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">ce qu'il détient, qui le détient</text>
  <rect x="579.2" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="588.2" y="99" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="613.2" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="613.2" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">le Security Workbench, une nature…</text>
  <rect x="748.8" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="757.8" y="99" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="782.8" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="782.8" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">objets définis par les utilisat…</text>
  <rect x="918.4" y="88" width="161.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="927.4" y="99" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="952.4" y="105" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="952.4" y="118" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">les tâches affichées et masquées</text>
  <rect x="240" y="132" width="840" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARER AVEC, OU COPIER DEPUIS</text>
  <rect x="252" y="150" width="420" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="162.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">un autre utilisateur ou rôle…</text>
  <rect x="240.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">64</text>
  <text x="250.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <rect x="387.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="397.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="397.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LES SIENNES</text>
  <rect x="534.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">31</text>
  <text x="544.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE SES RÔLES</text>
  <rect x="681.0" y="180" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="691.0" y="200" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">30</text>
  <text x="691.0" y="215" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE &#42;PUBLIC</text>
  <rect x="828.0" y="180" width="252.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="838.0" y="197" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JD EDWARDS CHERCHE DANS CET ORDRE</text>
  <text x="838.0" y="213" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JSMITH › AP_MANAGER › AP_CLERK › &#42;PUBLIC</text>
  <rect x="240" y="234" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="737" y="234" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="756.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="780" y="234" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="806.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="838" y="234" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="864.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="896" y="234" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="959" y="234" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="988.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="1022" y="234" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1051.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Importer</text>
  <rect x="240" y="264" width="840" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OÙ</text>
  <text x="326" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NATURE</text>
  <text x="442" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR QUOI</text>
  <text x="678" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE DIT LA LIGNE</text>
  <text x="968" y="278.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIENT DE</text>
  <rect x="240" y="290" width="840" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Menu</text>
  <text x="326" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="442" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Void Payment Entry · P0413M</text>
  <text x="678" y="304.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="304.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">les siennes</text>
  <rect x="240" y="316" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="326" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="442" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="678" y="330.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="330.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">les siennes</text>
  <rect x="240" y="342" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="326" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Action Security</text>
  <text x="442" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="678" y="356.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="356.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">rôle AP_MANAGER</text>
  <rect x="240" y="368" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="326" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="442" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">One View Watchlist · OVW0411A_01</text>
  <text x="678" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="382.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">rôle AP_CLERK</text>
  <rect x="240" y="394" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="326" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="442" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="678" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="968" y="408.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">&#42;PUBLIC</text>
  <text x="678" y="304.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Affichée</text>
  <text x="721.68" y="304.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="678" y="330.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="786.16" y="330.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="795.16" y="330.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="810.04" y="330.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Install Application (Y/N)</text>
  <text x="938.04" y="330.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="678" y="356.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Add Action</text>
  <text x="731.6" y="356.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="740.6" y="356.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="755.48" y="356.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Update Action</text>
  <text x="823.96" y="356.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="832.96" y="356.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="847.84" y="356.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Delete Action</text>
  <text x="916.32" y="356.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="678" y="382.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Viewable: 1</text>
  <text x="678" y="408.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="786.16" y="408.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un utilisateur ou un rôle</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa nature à côté du nom</text>
  <line x1="200" y1="57.0" x2="252" y2="69" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparer ou copier</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un second utilisateur ou rôle</text>
  <line x1="200" y1="149.0" x2="252" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">D'où viennent les lignes</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les siennes, ses rôles, &#42;PUBLIC</text>
  <line x1="200" y1="207.0" x2="240" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où · Nature · Sur quoi</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menu, application ou UDO</text>
  <line x1="200" y1="317.0" x2="250" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ordre de JD Edwards</text>
  <text x="1130" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'utilisateur, ses rôles, &#42;PUBLIC</text>
  <line x1="1120" y1="203.0" x2="988.0" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter · Importer</text>
  <text x="1130" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses lignes, une feuille par table</text>
  <line x1="1120" y1="249.0" x2="1051.0" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="278" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que dit la ligne</text>
  <text x="1130" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seuls les réglages qu'elle porte</text>
  <line x1="1120" y1="295.0" x2="780" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vient de</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le détenteur de la ligne</text>
  <line x1="1120" y1="397.0" x2="1040" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsme-arrow)"/>
</svg>

---

## Choix de l'utilisateur ou du rôle \{#picker\}

La liste reprend les utilisateurs et les rôles de JD Edwards, chacun avec sa description et sa **nature** : *utilisateur*, *rôle*, *rôle parent* (il détient des rôles), *rôle enfant* (un rôle le détient). La nature est une colonne de la liste et un filtre : un clic sur *rôle enfant*, *rôle parent*, *rôle* ou *utilisateur*, en haut de la liste, ne garde que cette nature. `*PUBLIC` est toujours proposé, en premier.

Les onglets suivent l'utilisateur ou le rôle choisi. La page s'ouvre aussi sur un utilisateur ou un rôle depuis une autre vue : un rôle cité dans la vue d'un objet, d'une table, d'une tâche de menu ou d'un UDO ouvre ici sa sécurité.

---

## Tout \{#everything\}

Le premier onglet rassemble dans une seule grille **toutes les lignes de sécurité qui s'appliquent** à l'utilisateur ou au rôle : filtrage des menus, Security Workbench et sécurité des UDO.

- Pour un **rôle** : ses propres lignes, puis celles de `*PUBLIC`.
- Pour un **utilisateur** : ses propres lignes, celles des rôles qu'il détient à la date du jour (la séquence la plus haute d'abord), puis celles de `*PUBLIC`.

Les chiffres du haut comptent les lignes — au total, les siennes, celles de ses rôles, celles de `*PUBLIC` — et **JD Edwards cherche dans cet ordre** donne l'ordre de lecture des lignes, qui est aussi celui de la grille.

| Colonne | Contenu |
|---|---|
| **Où** | *Menu*, *Application* (une ligne du Security Workbench) ou *UDO* |
| **Nature** | La nature de sécurité, telle que JD Edwards la nomme (*Application Security*, *Action Security*, *Column Security*… ou la nature d'UDO) |
| **Sur quoi** | Ce que la ligne sécurise : un objet, un écran, une tâche de menu, un UDO |
| **Ce que dit la ligne** | Les seuls réglages portés par la ligne, les réglages Y/N sous forme de ✓ et ✕ |
| **Vient de** | *les siennes*, *rôle …* ou `*PUBLIC` |
| **Modifiée par**, **Le** | L'auteur et la date de la dernière modification de la ligne |

La grille propose la recherche, les filtres, le regroupement et le choix des colonnes, comme toutes les listes de l'application.

:::info[Un rôle qui détient des rôles]
Un rôle parent n'hérite de rien des rôles qu'il détient au moment de l'utilisation : sa sécurité est ce qu'une fusion a écrit dans ses propres lignes. L'onglet nomme ces rôles — *ses propres lignes se reconstruisent depuis (onglet Rôles)* — sans ajouter leurs lignes.
:::

### Comparer avec, ou copier depuis \{#compare\}

**Comparer avec, ou copier depuis** reçoit un second utilisateur ou rôle. La grille compare alors les **lignes propres** des deux : celles que seul le premier détient, celles que seul le second détient et celles qui diffèrent, avec ce que dit chacune. Les chiffres comptent chaque cas, ainsi que les lignes identiques. **Revenir à toutes les lignes** rétablit la liste complète.

**Copier sa sécurité vers …** remplace la sécurité de l'utilisateur ou du rôle choisi en premier par une copie de celle du second : toutes ses lignes du Security Workbench, des UDO et du filtrage des menus sont supprimées, puis celles de l'autre sont copiées. Une confirmation est demandée ; la copie exécute ensuite l'action *Importer la sécurité* de l'application, étape par étape, et elle est enregistrée dans le paquet de modifications comme cette action. Rien n'est copié vers `*PUBLIC`.

### Export et import Excel \{#excel\}

**Exporter** produit un classeur Excel avec les **lignes propres** de l'utilisateur ou du rôle, une feuille par table — *Security Workbench*, *Sécurité des UDO*, *Filtrage des menus* — et une feuille *Tout*, pour lecture, avec toutes les lignes qui s'appliquent.

**Importer** recharge un tel classeur. La boîte de dialogue **Importer depuis Excel** est celle des écrans, avec les mêmes modes (*Mettre à jour ou insérer*, *Insérer seulement*, *Mettre à jour seulement*), la même vérification par les règles de l'écran puis dans la base de données, et le même compte rendu. Chaque feuille est chargée par son propre écran : les lignes sont ajoutées ou modifiées, et les modifications sont enregistrées comme si elles avaient été faites dans cet écran.

---

## Rôles \{#roles\}

<svg viewBox="0 0 1320 270" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsmr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsmr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsmr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsmr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="232" rx="14" fill="url(#njsmr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles · AP_MANAGER</text>
  <rect x="829" y="32" width="251" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="954.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reconstruire sa sécurité depuis ses rôles</text>
  <rect x="240.0" y="66" width="414.0" height="166" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="86" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles détenus par AP_MANAGER</text>
  <rect x="437.6" y="75" width="22" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="448.6" y="85.7" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <rect x="543.0" y="74" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="592.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter un rôle</text>
  <line x1="240.0" y1="100" x2="654.0" y2="100" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="400.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DU</text>
  <text x="465.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JUSQU'AU</text>
  <text x="252.0" y="136" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_INQUIRY</text>
  <text x="330.0" y="136" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">rôle</text>
  <text x="400.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-01-05</text>
  <text x="465.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">sans fin</text>
  <rect x="593.0" y="123" width="49" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="617.5" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="550.0" y="123" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="569.5" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <text x="252.0" y="166" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_ENTRY</text>
  <text x="330.0" y="166" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">rôle</text>
  <text x="400.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-01-05</text>
  <text x="465.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-12-31</text>
  <rect x="593.0" y="153" width="49" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="617.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="550.0" y="153" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="569.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <rect x="666.0" y="66" width="414.0" height="166" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="86" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui détient AP_MANAGER</text>
  <rect x="826.0" y="75" width="22" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="837.0" y="85.7" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <rect x="985.0" y="74" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1026.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Le donner à…</text>
  <line x1="666.0" y1="100" x2="1080.0" y2="100" stroke="#1f2937" strokeWidth="1"/>
  <text x="678.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR OU RÔLE</text>
  <text x="826.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DU</text>
  <text x="891.0" y="116" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JUSQU'AU</text>
  <text x="678.0" y="136" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="756.0" y="136" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">utilisateur</text>
  <text x="826.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-02-01</text>
  <text x="891.0" y="136" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">sans fin</text>
  <rect x="1019.0" y="123" width="49" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1043.5" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="976.0" y="123" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="995.5" y="135.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <text x="678.0" y="166" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">MBROWN</text>
  <text x="756.0" y="166" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">utilisateur</text>
  <text x="826.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-03-15</text>
  <text x="891.0" y="166" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">sans fin</text>
  <rect x="1019.0" y="153" width="49" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1043.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="976.0" y="153" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="995.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <text x="678.0" y="196" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FIN_ALL</text>
  <text x="756.0" y="196" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">rôle</text>
  <text x="826.0" y="196" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-01-05</text>
  <text x="891.0" y="196" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">sans fin</text>
  <rect x="1019.0" y="183" width="49" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1043.5" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="976.0" y="183" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="995.5" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dates</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles qu'il détient</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leurs dates</text>
  <line x1="200" y1="87.0" x2="252" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dates · Retirer</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le formulaire de la relation</text>
  <line x1="200" y1="167.0" x2="578" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
  <rect x="1120" y="22" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="37" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reconstruire depuis ses rôles</text>
  <text x="1130" y="50" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un rôle : Fusionner les rôles</text>
  <line x1="1120" y1="39.0" x2="1080" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui le détient</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs et rôles parents</text>
  <line x1="1120" y1="127.0" x2="990" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmr-arrow)"/>
</svg>

L'onglet **Rôles** présente les rôles détenus par l'utilisateur ou le rôle, avec leurs dates (*Du*, *Jusqu'au* ; *sans fin* en l'absence de date d'expiration). Pour un rôle, une seconde liste indique **qui le détient** : les utilisateurs et les rôles qui le détiennent.

| Action | Effet |
|---|---|
| **Ajouter un rôle** | Ouvre le formulaire de l'écran des relations de rôles sur l'utilisateur ou le rôle, pour choisir le rôle et ses dates. |
| **Le donner à…** | Pour un rôle : le même formulaire, pour donner le rôle à un utilisateur ou à un autre rôle. |
| **Dates** | Ouvre le formulaire sur la relation, pour en modifier les dates. |
| **Retirer** | Supprime la relation, après confirmation. |
| **Reconstruire sa sécurité depuis ses rôles** | Pour un rôle qui détient des rôles : exécute l'action *Fusionner les rôles* de l'application, après confirmation. |

*Reconstruire sa sécurité depuis ses rôles* supprime toutes les lignes du Security Workbench, des UDO et du filtrage des menus du rôle, puis les reconstruit à partir des rôles qu'il détient : pour chaque ligne, le réglage le plus permissif l'emporte. L'opération est définitive. Un utilisateur n'a pas ce bouton : il reçoit la sécurité de ses rôles telle quelle à la connexion.

`*PUBLIC` n'a pas de contenu dans cet onglet : tout le monde le détient, sans affectation propre.

---

## Applications \{#applications\}

L'onglet **Applications** présente le Security Workbench de l'utilisateur ou du rôle, **une nature de sécurité à la fois**.

<svg viewBox="0 0 1320 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsma-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsma-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsma-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsma-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="366" rx="14" fill="url(#njsma-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Applications · AP_MANAGER</text>
  <rect x="997" y="32" width="83" height="22" rx="5" fill="url(#njsma-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1038.5" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="913" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="952.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="790" y="32" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="848.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="780" y="47" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2 changement(s) non enregistré(s)</text>
  <rect x="240" y="66" width="220" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="84" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nature de sécurité</text>
  <rect x="240" y="94" width="220" height="18" fill="#0a0e1a"/>
  <text x="252" y="106.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJETS</text>
  <text x="448" y="106.5" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="240" y="112" width="220" height="24" fill="rgba(74,158,255,0.18)"/>
  <text x="262" y="127.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="448" y="127.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <text x="262" y="151.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Action Security</text>
  <text x="448" y="151.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="262" y="175.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Processing Option Security</text>
  <text x="448" y="175.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="262" y="199.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Exclusive Application Security</text>
  <text x="448" y="199.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="208" width="220" height="18" fill="#0a0e1a"/>
  <text x="252" y="220.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DICTIONNAIRE ID</text>
  <text x="448" y="220.5" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="262" y="241.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Column Security</text>
  <text x="448" y="241.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="262" y="265.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Row Security</text>
  <text x="448" y="265.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="274" width="220" height="18" fill="#0a0e1a"/>
  <text x="252" y="286.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AUTRES</text>
  <text x="448" y="286.5" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="262" y="307.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Hyper Exit Security</text>
  <text x="448" y="307.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="262" y="331.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Tab Exit Security</text>
  <text x="448" y="331.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="252" y="360" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">le nombre est celui des lignes de AP_MANAGER</text>
  <rect x="472" y="66" width="608" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482" y="74" width="588" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="88.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Chercher un objet, un écran, une donnée…</text>
  <rect x="472" y="104" width="608" height="28" fill="rgba(255,255,255,0.03)"/>
  <text x="484" y="122" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">2 sélectionnée(s)</text>
  <rect x="589.9616" y="109" width="92" height="18" rx="5" fill="url(#njsma-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="635.9616" y="121.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Tout autoriser</text>
  <rect x="686.9616" y="109" width="92" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.9616" y="121.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Tout interdire</text>
  <rect x="783.9616" y="109" width="58" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.9616" y="121.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="846.9616" y="109" width="39" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="866.4616" y="121.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Vider</text>
  <text x="484" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT NAME</text>
  <text x="558" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM DATA VALUE</text>
  <text x="664" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTALL APPLICATION (Y/N)</text>
  <text x="792" y="148" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN APPLICATION (Y/N)</text>
  <line x1="472" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <rect x="473" y="162" width="606" height="28" fill="#0a0e1a"/>
  <text x="484" y="180" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <rect x="712" y="170" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="179.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="170" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="840.0" y="179.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1010" y="167" width="58" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1039.0" y="179.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="962" y="167" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="984.0" y="179.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <rect x="473" y="192" width="606" height="28" fill="#0a0e1a"/>
  <text x="484" y="210" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0413M</text>
  <rect x="712" y="200" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="209.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="200" width="12" height="12" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="840.0" y="209.5" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="1015" y="198" width="53" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="1041.5" y="208.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifiée</text>
  <rect x="951" y="197" width="58" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="209.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="903" y="197" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="209.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <text x="484" y="240" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <rect x="712" y="230" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="239.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="230" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="840.0" y="239.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1010" y="227" width="58" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1039.0" y="239.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="962" y="227" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="984.0" y="239.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <text x="484" y="270" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">P0401</text>
  <line x1="484" y1="267" x2="511.9" y2="267" stroke="#64748b" strokeWidth="1"/>
  <rect x="712" y="260" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="718.0" y="269.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="834" y="260" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="840.0" y="269.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="1001" y="258" width="67" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1034.5" y="268.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">à supprimer</text>
  <rect x="951" y="257" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="973.0" y="269.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Garder</text>
  <rect x="903" y="257" width="44" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="269.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <line x1="472" y1="340" x2="1080" y2="340" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="356" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Cliquez une case pour la changer. Chaque nature ne montre que ses propres réglages.</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une nature à la fois</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sous son groupe, avec son nombre</text>
  <line x1="200" y1="107.0" x2="260" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupes de natures</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nommés comme le Security Workbench</text>
  <line x1="200" y1="317.0" x2="300" y2="217" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="0" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="15" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="1130" y="28" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le formulaire du Security Workbench</text>
  <line x1="1120" y1="17.0" x2="848.5" y2="32" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélection</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">autoriser, interdire, supprimer</text>
  <line x1="1120" y1="117.0" x2="886.9616" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages Y/N en cases</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic en change une</text>
  <line x1="1120" y1="177.0" x2="848" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copier · Supprimer</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par ligne ; rien avant Enregistrer</text>
  <line x1="1120" y1="267.0" x2="984.0" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsma-arrow)"/>
</svg>

### Natures de sécurité \{#kinds\}

La liste de gauche range les natures de sécurité sous leur groupe — *Objets*, *Dictionnaire ID*, *Autres* — avec les noms de l'écran Security Workbench, chacune avec le nombre de lignes de l'utilisateur ou du rôle. Dans un groupe, les natures qui ont des lignes viennent en premier. Un clic sur une nature affiche ses lignes.

Une nature n'affiche **que ses propres réglages**, c'est-à-dire les colonnes que l'écran Security Workbench montre pour elle : exécution et installation pour la sécurité des applications, les actions pour la sécurité des actions, la donnée pour la sécurité des colonnes et des lignes… Le champ de recherche filtre les lignes sur n'importe laquelle de leurs valeurs.

### Modification des lignes \{#change-lines\}

- **Un réglage Y/N est une case** : un clic le change.
- **Un clic sur une ligne la sélectionne** ; avec plusieurs lignes sélectionnées, **Tout autoriser** et **Tout interdire** règlent toutes les cases de la sélection, **Supprimer** les marque pour suppression, **Vider** annule la sélection.
- **Copier**, sur chaque ligne, ouvre le formulaire du Security Workbench sur une copie de la ligne : changer l'utilisateur ou le rôle, l'objet ou un réglage, puis enregistrer.
- **Supprimer**, sur chaque ligne, la marque pour suppression ; **Garder** retire la marque.
- **Ajouter une ligne** ouvre le formulaire du Security Workbench par-dessus la page, sur l'utilisateur ou le rôle et la nature choisis, avec toutes les règles de l'écran.

Une ligne changée porte la mention *modifiée*, une ligne à supprimer *à supprimer*, et le nombre de changements non enregistrés s'affiche à côté des boutons. **Enregistrer** les écrit par les requêtes de l'écran Security Workbench, chaque ligne étant renvoyée telle qu'elle a été lue — comme le fait la modification en masse de l'écran ; **Abandonner** les annule. Si une ligne est refusée, l'enregistrement s'arrête sur elle et indique combien de lignes ont été enregistrées avant.

Le nom d'un objet, dans la liste, ouvre la vue de cet objet dans la Gestion de la sécurité (point de départ [une application, un écran ou un état](./object.md)).

---

## UDO \{#udo\}

L'onglet **UDO** est le même onglet, appliqué à l'écran **Sécurité des UDO**. Les natures sont celles que JD Edwards définit pour les objets définis par les utilisateurs — *Enable Features*, *Object Action Security*, *Object View Authorization*, *Content-Composite Framework* — chacune avec son nombre de lignes et ses propres réglages sous forme de cases. Cases, sélection, *Copier*, *Supprimer*, *Ajouter une ligne* (le formulaire de la sécurité des UDO) et *Enregistrer* fonctionnent comme dans l'onglet *Applications*.

JD Edwards réserve l'**activation d'une fonction** à `*PUBLIC`. Sur un autre utilisateur ou rôle, cette nature l'indique — *choisissez `*PUBLIC` pour l'ajouter ou la modifier* — et *Ajouter une ligne* n'est pas proposé.

---

## Menus \{#menus\}

L'onglet **Menus** dessine une vue de tâches telle que JD Edwards la présente et indique, pour un rôle, si chaque tâche est **affichée**, **masquée** ou **sans ligne** — elle suit alors les rôles de l'utilisateur.

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsmm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsmm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsmm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsmm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#njsmm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="40" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <rect x="240" y="46" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="60.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="250" y="61" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="482" y="40" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <rect x="482" y="46" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="60.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="492" y="61" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">91</text>
  <text x="512" y="61" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <rect x="997" y="46" width="83" height="22" rx="5" fill="url(#njsmm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1038.5" y="60.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="913" y="46" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="952.0" y="60.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <text x="907" y="61" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2 changement(s) non enregistré(s)</text>
  <rect x="240" y="80" width="560" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="90" width="12" height="12" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="258.0" y="99.5" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="270" y="100" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">tout ce qui est listé</text>
  <rect x="377.96000000000004" y="86" width="175" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="387.96000000000004" y="99.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Chercher une tâche, un menu, un objet…</text>
  <rect x="560.96" y="87" width="34" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="577.96" y="98.7" fill="#4a9eff" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout</text>
  <rect x="597.96" y="87" width="51" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="623.46" y="98.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Masquées</text>
  <rect x="651.96" y="87" width="76" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="689.96" y="98.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Avec une ligne</text>
  <rect x="730.96" y="87" width="55" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="758.46" y="98.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifiées</text>
  <rect x="240" y="112" width="560" height="26" fill="rgba(255,255,255,0.03)"/>
  <text x="252" y="129" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">2 sélectionnée(s)</text>
  <rect x="751" y="116" width="37" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="769.5" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Vider</text>
  <rect x="648" y="116" width="99" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="697.5" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↺ Retirer la ligne</text>
  <rect x="588" y="116" width="56" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Masquer</text>
  <rect x="523" y="116" width="61" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="553.5" y="128.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Afficher</text>
  <text x="254" y="160" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="266" y="150" width="12" height="12" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="272.0" y="159.5" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="286" y="160" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="347.44" y="160" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G1</text>
  <rect x="650" y="148" width="138" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="719.0" y="158.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">des tâches masquées dessous</text>
  <text x="274" y="190" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="286" y="180" width="12" height="12" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="292.0" y="189.5" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="306" y="190" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="400.704" y="190" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G04</text>
  <rect x="650" y="178" width="138" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="719.0" y="188.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">des tâches masquées dessous</text>
  <rect x="241" y="202" width="558" height="28" fill="#0a0e1a"/>
  <text x="294" y="220" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="306" y="210" width="12" height="12" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="326" y="220" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Supplier &amp; Voucher Entry</text>
  <text x="465.05600000000004" y="220" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0411</text>
  <rect x="241" y="232" width="558" height="28" fill="#0a0e1a"/>
  <rect x="241" y="232" width="3" height="28" fill="#fb923c"/>
  <text x="294" y="250" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="306" y="240" width="12" height="12" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="312.0" y="249.5" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="326" y="250" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Manual Payment Processing</text>
  <text x="470.6" y="250" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0412</text>
  <rect x="739" y="238" width="49" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="763.5" y="248.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">masquée</text>
  <rect x="682" y="238" width="53" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="708.5" y="248.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifiée</text>
  <text x="314" y="280" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="326" y="270" width="12" height="12" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="346" y="280" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Void Payment Entry</text>
  <text x="442.72" y="280" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">P0413M</text>
  <rect x="663" y="268" width="125" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="725.5" y="278.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">masquée avec son dossier</text>
  <text x="294" y="310" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="306" y="300" width="12" height="12" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="312.0" y="309.5" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="326" y="310" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Automatic Payment Processing</text>
  <text x="487.232" y="310" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0413</text>
  <rect x="735" y="298" width="53" height="15" rx="7.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="761.5" y="308.7" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">affichée</text>
  <text x="274" y="340" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="286" y="330" width="12" height="12" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="306" y="340" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="417.336" y="340" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G03B</text>
  <rect x="252" y="353" width="10" height="10" rx="3" fill="rgba(50,215,75,0.85)" stroke="#22c55e" strokeWidth="1.2"/>
  <text x="257.0" y="360.5" fill="#0f172a" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="266" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">affichée (une ligne le dit)</text>
  <rect x="391.4" y="353" width="10" height="10" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="396.4" y="360.5" fill="#f87171" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="405.4" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">masquée</text>
  <rect x="446.79999999999995" y="353" width="10" height="10" rx="3" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="451.79999999999995" y="360.5" fill="#fb923c" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="460.79999999999995" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">quelque chose est masqué dessous</text>
  <rect x="607.1999999999999" y="353" width="10" height="10" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="621.1999999999999" y="362" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">pas de ligne : suit les rôles</text>
  <rect x="812" y="80" width="268" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="98" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui sera enregistré</text>
  <rect x="1050" y="88" width="20" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="1060.0" y="98.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <line x1="812" y1="108" x2="1080" y2="108" stroke="#1f2937" strokeWidth="1"/>
  <rect x="824" y="120" width="11" height="11" rx="3" fill="rgba(255,69,58,0.10)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="829.5" y="128.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="842" y="129" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Masquer Manual Payment Processing</text>
  <text x="842" y="142" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable</text>
  <rect x="824" y="156" width="11" height="11" rx="3" fill="#0a0e1a" stroke="#475569" strokeWidth="1.2"/>
  <text x="842" y="165" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Retirer la ligne de Electronic Payments</text>
  <text x="842" y="178" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable</text>
  <line x1="812" y1="270" x2="1080" y2="270" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="287" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Les lignes de AP_MANAGER dans cette vue</text>
  <text x="1010" y="305" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">lignes</text>
  <text x="1068" y="305" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">après enreg.</text>
  <text x="824" y="322" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">masquées</text>
  <text x="1004" y="322" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <text x="1050" y="322" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="824" y="338" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">affichées</text>
  <text x="1004" y="338" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="1050" y="338" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="824" y="366" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Un dossier masqué masque tout ce qui est dessous.</text>
  <rect x="20" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un rôle et une vue de tâches</text>
  <text x="30" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtrage des menus par rôle</text>
  <line x1="200" y1="51.0" x2="240" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche et filtres</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">masquées, avec ligne, modifiées</text>
  <line x1="200" y1="117.0" x2="252" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu en arborescence</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une case par tâche : un clic l'inverse</text>
  <line x1="200" y1="217.0" x2="286" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Masquée avec son dossier</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne sur le dossier suffit</text>
  <line x1="200" y1="317.0" x2="314" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="1120" y="4" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="19" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer · Abandonner</text>
  <text x="1130" y="32" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien n'est écrit avant</text>
  <line x1="1120" y1="21.0" x2="1038.5" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plusieurs lignes à la fois</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">afficher, masquer, retirer</text>
  <line x1="200" y1="167.0" x2="523" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui sera enregistré</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque changement en attente</text>
  <line x1="1120" y1="137.0" x2="1068" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant / après</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes masquées et affichées</text>
  <line x1="1120" y1="317.0" x2="1050" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmm-arrow)"/>
</svg>

JD Edwards ne filtre les menus que **par rôle**. Quand un utilisateur est choisi, l'onglet le signale et propose sous forme de boutons les rôles que détient cet utilisateur : les menus qu'il voit sont ceux de ses rôles. Dans cet onglet, la liste de choix ne présente que les rôles. La liste **Vue de tâches** s'ouvre sur la vue de tâches la plus importante.

### Lecture de l'arborescence \{#menus-tree\}

| Case | Signification |
|---|---|
| ✓ verte | Affichée : une ligne du rôle le dit |
| ✕ rouge | Masquée par une ligne du rôle |
| – orange | Une tâche est masquée sous ce dossier |
| vide | Pas de ligne : la tâche suit les rôles |

Un dossier masqué masque tout ce qui se trouve dessous : les tâches qu'il contient portent la mention *masquée avec son dossier*, et une seule ligne sur le dossier suffit. Le champ de recherche trouve une tâche, un menu ou un objet ; les filtres ne gardent que les tâches **Masquées**, **Avec une ligne** ou **Modifiées** ; **Tout replier** ferme tous les dossiers. Au survol d'une tâche qui a une ligne, l'auteur et la date de sa dernière modification s'affichent.

### Modification des menus \{#menus-change\}

- **Un clic sur une case** masque la tâche. Un second clic l'affiche de nouveau : le changement est annulé — ou, si une ligne du rôle masquait la tâche, cette ligne est modifiée pour l'afficher.
- **Un clic sur une ligne la sélectionne**, **Maj-clic** sélectionne une plage ; la sélection est ensuite **affichée**, **masquée** ou débarrassée de sa ligne (**Retirer la ligne**) d'un seul coup.
- **Tout ce qui est listé**, dans la barre de l'arborescence, masque toutes les tâches listées (les dossiers ouverts, ou le résultat d'une recherche) — ou, si elles le sont toutes, les réaffiche. Il reste à décocher celles à garder.

Rien n'est écrit avant **Enregistrer**. **Ce qui sera enregistré** présente chaque changement en attente — *Masquer*, *Afficher (ajouter une ligne)*, *Afficher de nouveau*, *Retirer la ligne de* — avec le chemin de chaque tâche, et les chiffres du bas comparent les lignes masquées et affichées du rôle dans cette vue, aujourd'hui et après enregistrement. **Enregistrer** écrit les lignes par les requêtes de l'écran **Filtrage des menus** ; **Abandonner** annule les changements.

---

## Accès \{#access\}

Voir [Gestion de la sécurité → Accès](./overview.md#access).

---

## Conseils & bonnes pratiques \{#tips\}

- **Lire un utilisateur dans l'onglet *Tout*.** Les lignes sont rangées détenteur par détenteur, dans l'ordre de lecture de JD Edwards : quand l'utilisateur ou l'un de ses rôles dit déjà quelque chose sur un objet, une ligne de `*PUBLIC` placée plus bas ne décide pas.
- **Comparer avant de copier.** Le choix d'un second utilisateur ou rôle montre ce que la copie changerait — les lignes propres à l'un et celles qui diffèrent — avant que *Copier sa sécurité vers …* ne remplace quoi que ce soit.
- **Préparer un rôle dans Excel.** *Exporter* le rôle, modifier les feuilles, puis *Importer* : la vérification par les règles des écrans signale les erreurs avant tout enregistrement.
- **Reconstruire un rôle parent après un changement sur ses rôles enfants.** Un rôle parent ne lit que ses propres lignes : après un changement sur un rôle qu'il détient, *Reconstruire sa sécurité depuis ses rôles* le remet à jour.
- **Masquer un dossier plutôt que ses tâches.** Une seule ligne de filtrage sur un dossier masque tout ce qu'il contient, et reste valable quand une tâche y est ajoutée.
