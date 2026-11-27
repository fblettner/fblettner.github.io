---
title: Une application, un écran ou un état
description: "Gestion de la sécurité → Partir d'une application, d'un écran ou d'un état dans Nomajde : qui peut utiliser un objet de JD Edwards EnterpriseOne, rôle par rôle — exécuter, ajouter, modifier, supprimer — avec Tout le monde (*PUBLIC) en tête, des cases pleines ou pâles, et les lignes du Security Workbench écrites depuis les cases."
keywords: [Nomajde, JD Edwards, JDE E1, Gestion de la sécurité, Security Workbench, F00950, sécurité application, sécurité action, "*PUBLIC", "*ALL", version, rôle]
---

# Une application, un écran ou un état

Dans la **Gestion de la sécurité**, le point de départ **une application, un écran ou un état** répond à une seule question : *qui peut utiliser cet objet ?* Une fois choisis une application, l'un de ses écrans ou un état — et au besoin une version —, chaque rôle est listé avec ce qu'il peut y faire, **Tout le monde** (`*PUBLIC`) en tête, et une case suffit à le changer.

Accès : **Gestion de la sécurité**, puis **Partir de → une application, un écran ou un état**. Les autres points de départ sont décrits dans la [vue d'ensemble de la Gestion de la sécurité](./overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 451" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njob-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njob-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njob-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njob-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="419" rx="14" fill="url(#njob-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Gestion de la sécurité</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">La sécurité d'un utilisateur ou d'un rôle, modifiée là où elle se lit.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR DE</text>
  <rect x="320.432" y="79" width="130" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="385.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un utilisateur ou un rôle</text>
  <rect x="455.432" y="79" width="179" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="544.932" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">une application, un écran ou un état</text>
  <rect x="639.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="668.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">une table</text>
  <rect x="702.432" y="79" width="49" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="726.932" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un menu</text>
  <rect x="756.432" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="778.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="805.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="834.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <rect x="252" y="104" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="118.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">P01012  Address Book  ▾</text>
  <text x="600" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <rect x="600" y="104" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="118.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">toutes les versions  ▾</text>
  <rect x="787" y="104" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="824.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="868" y="104" width="80" height="22" rx="5" fill="url(#njob-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.0" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(255,159,10,0.07)" stroke="rgba(255,159,10,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Qui peut l'utiliser</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">rôle par rôle : exécuter, et pour une application ajouter, modifier, supprimer</text>
  <rect x="240" y="192" width="720" height="228" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="200" width="696" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="214.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Chercher un rôle…</text>
  <rect x="241" y="230" width="718" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="252" y="251" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="510" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">EXÉCUTER</text>
  <g><rect x="503.5" y="247" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="510.0" y="256.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="560" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <g><rect x="553.5" y="247" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="256.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="610" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <g><rect x="603.5" y="247" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="256.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="660" y="242" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">SUPPRIMER</text>
  <g><rect x="653.5" y="247" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="660.0" y="256.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="690" y="251" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">POURQUOI</text>
  <text x="252" y="283" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tout le monde</text>
  <text x="321.88" y="283" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="252" y="292" fill="#64748b" fontSize="6.8" fontFamily="system-ui, sans-serif">ce qu'un rôle obtient quand il ne dit rien lui-même</text>
  <g><rect x="503.5" y="273" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="510.0" y="282.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g opacity="0.42"><rect x="553.5" y="273" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="282.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="273" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="282.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="273" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="282.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="283" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="241" y1="294" x2="959" y2="294" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="312" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="310.7" y="312" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Comptabilité fournisseurs</text>
  <g><rect x="503.5" y="302" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="510.0" y="311.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="553.5" y="302" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="311.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="603.5" y="302" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="311.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="653.5" y="302" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="660.0" y="311.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="690" y="312" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="241" y1="323" x2="959" y2="323" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="341" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AR_MANAGER</text>
  <text x="310.7" y="341" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Comptabilité clients</text>
  <g opacity="0.42"><rect x="503.5" y="331" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="510.0" y="340.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g opacity="0.42"><rect x="553.5" y="331" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="340.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="331" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="340.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="331" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="340.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="341" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">comme tout le monde</text>
  <line x1="241" y1="352" x2="959" y2="352" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="353" width="3" height="28" fill="#fb923c"/>
  <text x="252" y="370" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="284.35" y="370" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Acheteur</text>
  <g><rect x="503.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="510.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="553.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="360" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="369.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="370" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="241" y1="381" x2="959" y2="381" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="399" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="305.43" y="399" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Commercial</text>
  <g opacity="0.42"><rect x="503.5" y="389" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="510.0" y="398.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g opacity="0.42"><rect x="553.5" y="389" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="560.0" y="398.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="603.5" y="389" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="610.0" y="398.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="653.5" y="389" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="660.0" y="398.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="690" y="399" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">comme tout le monde</text>
  <line x1="241" y1="410" x2="959" y2="410" stroke="#1f2937" strokeWidth="1"/>
  <rect x="794" y="300" width="154" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="871.0" y="312.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Revenir à « comme tout le monde »</text>
  <rect x="892" y="359" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="920.0" y="370.2" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">modifié</text>
  <text x="252" y="425" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Case pleine : la ligne du rôle ; case pâle : ce qu'il tient de tout le monde. Cocher une case pâle lui donne sa propre ligne.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir de</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une application, un écran, un état</text>
  <line x1="200" y1="87.0" x2="495.432" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tout le monde d'abord</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#42;PUBLIC : la réponse par défaut</text>
  <line x1="200" y1="279.0" x2="252" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case pleine ou pâle</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ligne propre · de tout le monde</text>
  <line x1="200" y1="367.0" x2="503" y2="337" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Version (facultative)</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la réponse pour cette version</text>
  <line x1="1000" y1="117.0" x2="750" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tout le monde : confirmation</text>
  <line x1="1000" y1="177.0" x2="898" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case d'en-tête</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règle tous les rôles listés</text>
  <line x1="1000" y1="247.0" x2="567" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Revenir à « comme… »</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retire les lignes du rôle</text>
  <line x1="1000" y1="317.0" x2="940" y2="309" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifié, non enregistré</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit à l'enregistrement</text>
  <line x1="1000" y1="377.0" x2="920" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njob-arrow)"/>
</svg>

---

## Choisir l'objet \{#pick\}

| Champ | Usage |
|---|---|
| **Objet** | La liste que propose le formulaire du Security Workbench : applications, écrans et états, chacun avec son nom et son type (`APPL`, `FORMS`, `UBE`) — le type se filtre dans la liste. Une table se choisit depuis [une table](./table.md) : sa sécurité porte sur les colonnes et les lignes. |
| **Version** | Facultative, **toutes les versions** par défaut. Avec une version, la réponse porte sur cette version — la ligne sur la version l'emporte sur la ligne de l'objet entier — et les lignes sont écrites sur cette version. |

La page affiche alors un seul onglet, **Qui peut l'utiliser**.

---

## Qui peut l'utiliser \{#who-can-use-it\}

Une ligne par rôle, avec une recherche (*Chercher un rôle…*) :

| Colonne | Contenu |
|---|---|
| **Rôle** | **Tout le monde** `*PUBLIC` d'abord — *ce qu'un rôle obtient quand il ne dit rien lui-même* —, puis chaque rôle avec sa description. |
| **Exécuter**, **Ajouter**, **Modifier**, **Supprimer** | Ce que le rôle **obtient au final** sur l'objet. Un état n'affiche que **Exécuter** : ses trois actions n'ont pas de sens. |
| **Pourquoi** | *sa propre ligne*, *comme tout le monde*, ou *ses lignes seront retirées* quand un retour est en attente. |

Un rôle se lit comme JD Edwards EnterpriseOne le lit : sa propre ligne sur l'objet, sinon ce qu'obtient tout le monde (`*PUBLIC` sur l'objet, ou une ligne sur tous les objets, `*ALL`). Le survol d'une case indique la ligne qui décide.

### Cases pleines et cases pâles \{#boxes\}

- Une case **pleine** est la propre ligne du rôle sur l'objet.
- Une case **pâle** est ce que le rôle tient de tout le monde — `*PUBLIC`, ou une ligne sur tous les objets.

Cocher une case pâle donne au rôle sa propre ligne.

---

## Changer ce qu'un rôle peut faire \{#change\}

- **Cocher une case** : le rôle reçoit sa propre ligne — ajoutée, ou modifiée s'il en a déjà une. La ligne porte la mention *modifié* jusqu'à l'enregistrement.
- **La case de l'en-tête d'un droit** règle ce droit pour tous les rôles listés — après une recherche, les rôles trouvés —, jamais pour *Tout le monde*, qui se change sur sa propre ligne.
- **Revenir à « comme tout le monde »** retire les lignes du rôle sur l'objet : il obtient alors ce qu'obtient tout le monde.
- **Enregistrer** écrit les changements, rôle par rôle ; **Abandonner** les annule. Le nombre de rôles modifiés s'affiche à côté des boutons.
- **Changer Tout le monde demande confirmation** : *Le changer pour tout le monde* — chaque utilisateur et chaque rôle qui ne dit rien lui-même est concerné.

En cas d'échec d'une écriture, la page s'arrête sur ce rôle, indique combien de lignes ont été enregistrées avant, puis relit l'objet.

### Les lignes écrites \{#lines-written\}

Chaque changement passe par les requêtes propres à l'écran Security Workbench : il est contrôlé, horodaté et capturé dans le paquet de modifications comme un changement fait dans le [Security Workbench](../security-maintenance/security-workbench.md).

- **Exécuter** écrit la ligne de sécurité application du rôle (type **3**) ; une nouvelle ligne autorise aussi l'installation, comme l'écrit le formulaire.
- **Ajouter**, **Modifier**, **Supprimer** écrivent sa ligne de sécurité action (type **1**). Les trois droits sont écrits ensemble : ceux qui ne sont pas touchés sont écrits tels qu'ils sont aujourd'hui.
- Une nouvelle ligne d'action porte le **code produit** de l'objet et laisse autorisés **OK**, **copier** et **aller à la fin**, comme le fait le formulaire du Security Workbench — laissés vides, ils seraient lus comme interdits.
- Quand une version est choisie, les lignes sont écrites sur cette version.

---

## Liens vers les autres vues \{#links\}

- Le code d'un rôle est un lien : il ouvre ce rôle dans le point de départ **un utilisateur ou un rôle**, sur son onglet **Applications**.
- Sur cet onglet, un objet nommé dans les lignes d'un rôle ramène à cette vue.

---

## Accès \{#access\}

La page est **Gestion de la sécurité** dans le menu de Nomajde ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). Les lignes sont écrites avec les droits de l'écran Security Workbench.

---

## Conseils & bonnes pratiques \{#tips\}

- **Commencer par Tout le monde** : avec une ligne `*PUBLIC` fermée, chaque autre ligne devient une ouverture explicite, et les cases pâles montrent d'emblée les rôles qui en dépendent.
- **Préférer un rôle à une version**, sauf si la version se comporte vraiment autrement : les lignes par version se multiplient vite.
- **Utiliser la case d'en-tête après une recherche** pour ouvrir ou fermer un droit à une famille de rôles en une fois — *Tout le monde* n'est jamais concerné.
- **Contrôler le résultat** dans [Simuler la sécurité](../reviews/simulate-security.md), puis le garder comme cas de test.
