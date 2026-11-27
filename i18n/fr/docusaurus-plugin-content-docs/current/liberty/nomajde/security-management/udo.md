---
title: Un UDO
description: "Gestion de la sécurité → Partir d'un UDO dans Nomajde : les natures d'objets définis par les utilisateurs de JD Edwards EnterpriseOne avec leur nombre, les UDO d'une nature tirés du catalogue de l'Object Librarian, et les rôles avec l'indication s'ils voient l'UDO choisi."
keywords: [Nomajde, JD Edwards, JDE E1, Gestion de la sécurité, UDO, objet défini par l'utilisateur, sécurité des UDO, F00950W, F9860W, watchlist, requête, "*PUBLIC", rôle]
---

# Un UDO

Dans la **Gestion de la sécurité**, le point de départ **un UDO** répond à la question *qui voit cet objet défini par les utilisateurs ?* — une requête, une watchlist, un format de grille, une page EnterpriseOne… Une fois choisies une nature d'UDO, puis un UDO de cette nature, les rôles sont listés à côté, **Tout le monde** (`*PUBLIC`) en tête, chacun avec l'indication s'il voit l'UDO.

Accès : **Gestion de la sécurité**, puis **Partir de → un UDO**. Les autres points de départ sont décrits dans la [vue d'ensemble de la Gestion de la sécurité](./overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njud-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njud-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njud-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="425" rx="14" fill="url(#njud-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Gestion de la sécurité</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">La sécurité d'un utilisateur ou d'un rôle, modifiée là où elle se lit.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR DE</text>
  <rect x="320.432" y="79" width="130" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="385.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un utilisateur ou un rôle</text>
  <rect x="455.432" y="79" width="179" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="544.932" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">une application, un écran ou un état</text>
  <rect x="639.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="668.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">une table</text>
  <rect x="702.432" y="79" width="49" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="726.932" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un menu</text>
  <rect x="756.432" y="79" width="44" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="778.432" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="805.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="834.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <text x="252" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Choisissez une nature, puis un UDO : les rôles sont listés avec qui le voit.</text>
  <rect x="787" y="104" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="824.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="868" y="104" width="80" height="22" rx="5" fill="url(#njud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.0" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(50,215,75,0.07)" stroke="rgba(50,215,75,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">objets définis par les utilisateurs : fonction, action, vue, contenu</text>
  <rect x="240" y="192" width="170" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Nature d'UDO</text>
  <text x="252" y="233" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Composite Page</text>
  <text x="400" y="233" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">161</text>
  <line x1="241" y1="240" x2="409" y2="240" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="257" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">EnterpriseOne Pages</text>
  <text x="400" y="257" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">471</text>
  <line x1="241" y1="264" x2="409" y2="264" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="281" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Grid Format</text>
  <text x="400" y="281" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">522</text>
  <line x1="241" y1="288" x2="409" y2="288" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="305" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">One View Reports</text>
  <text x="400" y="305" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">247</text>
  <line x1="241" y1="312" x2="409" y2="312" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="314" width="168" height="22" fill="rgba(74,158,255,0.14)"/>
  <text x="252" y="329" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">One View Watchlist</text>
  <text x="400" y="329" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">505</text>
  <line x1="241" y1="336" x2="409" y2="336" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="353" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Personal Forms</text>
  <text x="400" y="353" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">16</text>
  <line x1="241" y1="360" x2="409" y2="360" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="377" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Query</text>
  <text x="400" y="377" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1122</text>
  <line x1="241" y1="384" x2="409" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="401" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Rule</text>
  <text x="400" y="401" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">34</text>
  <line x1="241" y1="408" x2="409" y2="408" stroke="#1f2937" strokeWidth="1"/>
  <rect x="416" y="192" width="210" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="426" y="200" width="190" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="436" y="213.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Chercher un UDO, une application…</text>
  <text x="426" y="242" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Open Vouchers</text>
  <text x="426" y="255" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P0411 · W0411G · ZJDE0001</text>
  <line x1="417" y1="262" x2="625" y2="262" stroke="#1f2937" strokeWidth="1"/>
  <rect x="417" y="264" width="208" height="34" fill="rgba(74,158,255,0.14)"/>
  <text x="426" y="278" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Late Receipts</text>
  <text x="426" y="291" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P43081 · W43081A · ZJDE0002</text>
  <line x1="417" y1="298" x2="625" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <text x="426" y="314" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Orders on Hold</text>
  <text x="426" y="327" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P4210 · W4210A · ZJDE0003</text>
  <line x1="417" y1="334" x2="625" y2="334" stroke="#1f2937" strokeWidth="1"/>
  <text x="426" y="350" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Credit Limit Exceeded</text>
  <text x="426" y="363" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P03B2002 · W03B2002A · ZJDE0001</text>
  <line x1="417" y1="370" x2="625" y2="370" stroke="#1f2937" strokeWidth="1"/>
  <text x="426" y="386" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Unposted Batches</text>
  <text x="426" y="399" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P0011 · W0011A · ZJDE0004</text>
  <line x1="417" y1="406" x2="625" y2="406" stroke="#1f2937" strokeWidth="1"/>
  <rect x="632" y="192" width="328" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Qui voit Late Receipts</text>
  <rect x="633" y="220" width="326" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="642" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="832" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">LE VOIT</text>
  <g><rect x="825.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="832.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="854" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">POURQUOI</text>
  <text x="642" y="272" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tout le monde</text>
  <text x="711.88" y="272" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <g opacity="0.42"><rect x="825.5" y="262" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="832.0" y="271.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="854" y="272" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="633" y1="281" x2="959" y2="281" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="298" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="700.7" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g opacity="0.42"><rect x="825.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="832.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="854" y="298" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="633" y1="307" x2="959" y2="307" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="674.35" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g><rect x="825.5" y="314" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="832.0" y="323.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="854" y="324" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="633" y1="333" x2="959" y2="333" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="350" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">PURCH_MGR</text>
  <text x="695.43" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g><rect x="825.5" y="340" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="832.0" y="349.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="854" y="350" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="633" y1="359" x2="959" y2="359" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="376" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="695.43" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g opacity="0.42"><rect x="825.5" y="366" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="832.0" y="375.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="854" y="376" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="633" y1="385" x2="959" y2="385" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="430" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Case pleine : la ligne du rôle sur cet UDO ; case pâle : une ligne sur tous les UDO ou de tout le monde. Sans ligne, un UDO n'est pas vu.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir d'un UDO</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa nature, puis l'UDO</text>
  <line x1="200" y1="87.0" x2="771.432" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Natures d'UDO</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune avec son nombre</text>
  <line x1="200" y1="267.0" x2="260" y2="325" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les UDO de la nature</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">catalogue Object Librarian</text>
  <line x1="200" y1="357.0" x2="436" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les changements l'attendent</text>
  <line x1="1000" y1="117.0" x2="898" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case d'en-tête</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les rôles listés, hors Tout le monde</text>
  <line x1="1000" y1="245.0" x2="839" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case pleine ou pâle</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ligne propre · tous les UDO ou tous</text>
  <line x1="1000" y1="337.0" x2="839" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
</svg>

---

## Choisir l'UDO \{#pick\}

Trois panneaux, de gauche à droite :

| Panneau | Contenu |
|---|---|
| **Nature d'UDO** | Les natures d'UDO par ordre alphabétique, chacune avec son nombre d'UDO. La première est choisie à l'ouverture de la page. |
| **Les UDO de la nature** | Tirés du catalogue de l'Object Librarian : chaque UDO par son nom, avec l'application, l'écran et la version auxquels il se rattache. Une recherche (*Chercher un UDO, une application…*) porte sur le nom, l'identifiant, l'application et l'écran. Les 300 premiers sont listés : quelques lettres suffisent à réduire la liste. |
| **Qui voit** *UDO* | Les rôles, avec une seule case, **Le voit**. |

Quand le catalogue ne peut pas être lu, un bandeau l'indique et seuls les UDO déjà nommés par la sécurité des UDO sont listés.

---

## Qui voit un UDO \{#who-sees\}

Ce qui décide pour un rôle, dans cet ordre :

1. sa propre ligne sur l'UDO ;
2. sinon sa propre ligne sur tous les UDO (`*ALL`) de la nature ;
3. sinon la ligne de tout le monde sur l'UDO ;
4. sinon la ligne de tout le monde sur tous les UDO.

Sans aucune ligne, un UDO n'est pas vu.

Une case **pleine** est la ligne du rôle sur cet UDO ; une case **pâle** vient d'une ligne sur tous les UDO ou de tout le monde. **Pourquoi** indique *sa propre ligne* ou *pas de ligne propre* ; le survol de la case donne la ligne qui décide.

### Le changer \{#change\}

- **Cocher ou décocher une case** : le rôle reçoit sa propre ligne sur l'UDO — ajoutée, ou modifiée s'il en a une.
- **La case de l'en-tête de la colonne** règle tous les rôles listés (après une recherche : ceux trouvés), jamais *Tout le monde*.
- **Retirer sa ligne** supprime la ligne du rôle : il suit alors la ligne suivante dans l'ordre ci-dessus.
- Les changements attendent **Enregistrer** ; **Abandonner** les annule. Changer *Tout le monde* demande confirmation.

Les lignes sont des lignes « vue » de la sécurité des UDO, écrites par les requêtes propres à l'écran Sécurité des UDO — capturées dans le paquet de modifications comme depuis cet écran. Une nouvelle ligne porte la nature de l'UDO, son identifiant et son nom, son application, son écran et sa version, et *All Product Codes* (`*ALL`).

Le code d'un rôle est un lien : il ouvre ce rôle dans le point de départ **un utilisateur ou un rôle**, sur son onglet **UDO**, où ses lignes de sécurité des UDO sont listées une nature de sécurité à la fois.

---

## Accès \{#access\}

La page est **Gestion de la sécurité** dans le menu de Nomajde ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). Les lignes sont écrites avec les droits de l'écran Sécurité des UDO (**Maintenance de la sécurité → Sécurité des UDO**).

---

## Conseils & bonnes pratiques \{#tips\}

- **Fermer une nature à Tout le monde, puis ouvrir UDO par UDO** : avec une ligne sur tous les UDO pour `*PUBLIC`, chaque UDO n'atteint que les rôles à qui il est donné.
- **Chercher par application** pour retrouver les UDO construits sur un même programme — une watchlist et une requête sur la même application vont souvent de pair.
- **Contrôler le résultat** dans [Simuler la sécurité](../reviews/simulate-security.md), qui essaie un changement d'UDO avant de l'écrire.
