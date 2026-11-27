---
title: Gestion de la sécurité
description: "Gestion de la sécurité dans Nomajde : la sécurité JD Edwards EnterpriseOne d'un utilisateur ou d'un rôle — ou d'une application, d'une table, d'une tâche de menu, d'un UDO ou d'un module — lue et modifiée sur une seule page, chaque modification passant par les écrans Security Workbench, Sécurité des UDO, Filtrage des menus et Relations de rôles, et enregistrée dans le paquet de modifications."
keywords: [Nomajde, JD Edwards, JDE E1, gestion de la sécurité, Security Workbench, F00950, sécurité des UDO, F00950W, filtrage des menus, F9006, relations de rôles, F95921, "*PUBLIC", utilisateur, rôle, paquet de modifications]
---

# Gestion de la sécurité

La page **Gestion de la sécurité** regroupe la sécurité JD Edwards EnterpriseOne d'un utilisateur ou d'un rôle et la modifie **là où elle se lit** : les lignes qui s'appliquent, les rôles détenus, le Security Workbench, la sécurité des UDO et les menus. Le choix *Partir de* inverse la question : en partant d'une application, d'une table, d'une tâche de menu, d'un UDO ou d'un module, la page indique *qui* peut s'en servir.

Accès : **Gestion de la sécurité**, l'entrée de menu placée juste après **Revues**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsmo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsmo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsmo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsmo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="440" rx="14" fill="url(#njsmo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Gestion de la sécurité</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">La sécurité d'un utilisateur ou d'un rôle, modifiée là où elle se lit.</text>
  <rect x="240" y="78" width="840" height="72" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR DE</text>
  <rect x="307.36" y="88" width="137" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="375.86" y="100.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un utilisateur ou un rôle</text>
  <rect x="450.36" y="88" width="189" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="544.86" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">une application, un écran ou un état</text>
  <rect x="645.36" y="88" width="60" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="675.36" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">une table</text>
  <rect x="711.36" y="88" width="51" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="736.86" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un menu</text>
  <rect x="768.36" y="88" width="46" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="791.36" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="820.36" y="88" width="60" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="850.36" y="100.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <rect x="252" y="114" width="500" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="129.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="262" y="130" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="326.79" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accounts Payable Manager</text>
  <text x="742" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240.0" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="249.0" y="171" width="18" height="18" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <text x="274.0" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tout</text>
  <text x="274.0" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">toutes les lignes qui s'appliquent</text>
  <rect x="409.6" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="418.6" y="171" width="18" height="18" rx="5" fill="#f87171" fillOpacity="0.18"/>
  <text x="443.6" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="443.6" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">ce qu'il détient, qui le détient</text>
  <rect x="579.2" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="588.2" y="171" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="613.2" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="613.2" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">le Security Workbench, une nature…</text>
  <rect x="748.8" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="757.8" y="171" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="782.8" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="782.8" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">objets définis par les utilisat…</text>
  <rect x="918.4" y="160" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="927.4" y="171" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="952.4" y="177" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="952.4" y="190" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">les tâches affichées et masquées</text>
  <rect x="240" y="212" width="840" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARER AVEC, OU COPIER DEPUIS</text>
  <rect x="252" y="230" width="420" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="242.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">un autre utilisateur ou rôle…</text>
  <rect x="240.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">42</text>
  <text x="250.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <rect x="387.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="397.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="397.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LES SIENNES</text>
  <rect x="534.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="544.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE SES RÔLES</text>
  <rect x="681.0" y="262" width="139.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="691.0" y="282" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">30</text>
  <text x="691.0" y="297" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE &#42;PUBLIC</text>
  <rect x="828.0" y="262" width="252.0" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="838.0" y="279" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JD EDWARDS CHERCHE DANS CET ORDRE</text>
  <text x="838.0" y="295" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_MANAGER › &#42;PUBLIC</text>
  <rect x="240" y="316" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="737" y="316" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="756.0" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="780" y="316" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="806.5" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="838" y="316" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="864.5" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="896" y="316" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="959" y="316" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="988.0" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="1022" y="316" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1051.0" y="330.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Importer</text>
  <rect x="240" y="346" width="840" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OÙ</text>
  <text x="336" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NATURE</text>
  <text x="460" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR QUOI</text>
  <text x="670" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE DIT LA LIGNE</text>
  <text x="990" y="360.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIENT DE</text>
  <rect x="240" y="372" width="840" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="336" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="460" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="670" y="386.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="990" y="386.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">les siennes</text>
  <rect x="240" y="398" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="336" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="460" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">One View Watchlist · OVW0411A_01</text>
  <text x="670" y="412.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="990" y="412.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">les siennes</text>
  <rect x="240" y="424" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="336" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="460" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="670" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="990" y="438.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">&#42;PUBLIC</text>
  <text x="670" y="386.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="778.16" y="386.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="787.16" y="386.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"> · </text>
  <text x="802.04" y="386.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Install Application (Y/N)</text>
  <text x="930.04" y="386.5" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="670" y="412.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Viewable: 1</text>
  <text x="670" y="438.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">Run Application (Y/N)</text>
  <text x="778.16" y="438.5" fill="#f87171" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir de</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">six points de départ</text>
  <line x1="200" y1="97.0" x2="252" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'utilisateur ou le rôle</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste filtrée par nature</text>
  <line x1="200" y1="147.0" x2="252" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour un utilisateur ou un rôle</text>
  <line x1="200" y1="197.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui s'applique, et d'où</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les siennes, ses rôles, &#42;PUBLIC</text>
  <line x1="200" y1="297.0" x2="240" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un objet, une table, un menu…</text>
  <text x="1130" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les autres points de départ</text>
  <line x1="1120" y1="99.0" x2="446" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applications · UDO · Menus</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un onglet par table de sécurité</text>
  <line x1="1120" y1="197.0" x2="999.1999999999999" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ordre de JD Edwards</text>
  <text x="1130" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'utilisateur, ses rôles, &#42;PUBLIC</text>
  <line x1="1120" y1="279.0" x2="948.0" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
  <rect x="1120" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter · Importer</text>
  <text x="1130" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un classeur, une feuille par table</text>
  <line x1="1120" y1="333.0" x2="1051.0" y2="327" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsmo-arrow)"/>
</svg>

---

## Partir de \{#start-from\}

Le choix **Partir de**, en haut de la page, fixe l'objet de la page. Chaque point de départ a sa propre liste de choix et ses propres onglets.

| Partir de | Ce qu'on choisit | Ce que montre la page | Page |
|---|---|---|---|
| **un utilisateur ou un rôle** | Un utilisateur, un rôle ou `*PUBLIC` | *Tout*, *Rôles*, *Applications*, *UDO*, *Menus* | [Un utilisateur ou un rôle](./user-or-role.md) |
| **une application, un écran ou un état** | Un objet et, au besoin, une version | *Qui peut l'utiliser* : chaque rôle, avec exécuter, ajouter, modifier, supprimer | [Une application, un écran ou un état](./object.md) |
| **une table** | Une table | *Qui voit une colonne*, *Plages de valeurs* | [Une table](./table.md) |
| **un menu** | Une vue de tâches, puis une tâche ou un dossier de l'arborescence | Les rôles, et pour chacun si la tâche lui est affichée | [Un menu](./menu.md) |
| **un UDO** | Une nature d'UDO, puis un UDO | Les rôles, et pour chacun s'il voit l'UDO | [Un UDO](./udo.md) |
| **un module** | Un module et un rôle, dans l'onglet | *Sécuriser un module* : les lignes qui ouvrent le module au rôle | [Sécuriser un module](./secure-a-module.md) |

Les vues sont reliées entre elles : un rôle cité dans la vue d'un objet ouvre la sécurité de ce rôle, et un objet cité dans les lignes d'un rôle ouvre la vue de l'objet.

---

## Enregistrement des modifications \{#writes\}

La page n'écrit rien par elle-même. Chaque modification passe par l'écran JD Edwards qui porte la ligne :

- l'écran **Security Workbench** pour les lignes d'application, d'action, de ligne, de colonne et les autres natures du Security Workbench ;
- l'écran **Sécurité des UDO** pour les lignes des UDO ;
- l'écran **Filtrage des menus** pour les tâches de menu affichées ou masquées ;
- l'écran **Relations de rôles** pour les rôles détenus par un utilisateur ou un rôle.

Une modification est donc contrôlée par les règles de l'écran, horodatée avec son auteur, et enregistrée dans le [paquet de modifications](../../nomaflow/change-packages.md) actif, exactement comme si elle avait été faite dans cet écran. *Ajouter une ligne* et *Copier* ouvrent le formulaire de l'écran par-dessus la page, avec toutes ses règles. Les deux opérations qui refont une sécurité entière — copier la sécurité d'un utilisateur ou d'un rôle vers un autre, reconstruire un rôle depuis les rôles qu'il détient — exécutent les actions *Importer la sécurité* et *Fusionner les rôles* de l'application, étape par étape.

Les modifications faites dans une grille attendent **Enregistrer** ; **Abandonner** les annule. Changer d'utilisateur ou de rôle alors que des modifications de menus ne sont pas enregistrées demande d'abord une confirmation.

---

## Accès \{#access\}

Les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** donnent la page avec le droit de modification, ainsi que les écrans de **Maintenance de la sécurité** par lesquels passent les modifications (voir [Rôles prédéfinis](../overview.md#roles)).

---

## Conseils & bonnes pratiques \{#tips\}

- **Lire avant de modifier.** L'onglet *Tout* d'un utilisateur présente chaque ligne qui s'applique — celles de l'utilisateur, de ses rôles et de `*PUBLIC` — dans l'ordre où JD Edwards les lit.
- **Partir de la question posée.** « Que peut faire ce rôle ? » part du rôle ; « qui peut exécuter cette application ? » part de l'application. Les deux vues modifient les mêmes lignes.
- **Simuler d'abord un changement important.** [Simuler la sécurité](../reviews/simulate-security.md) montre ce qu'un utilisateur ou un rôle aurait le droit de faire après le changement, sans rien écrire.
- **Promouvoir avec le paquet de modifications.** Chaque modification faite ici est enregistrée comme dans les écrans : une sécurité préparée en développement passe en production sous forme de lot relu.
