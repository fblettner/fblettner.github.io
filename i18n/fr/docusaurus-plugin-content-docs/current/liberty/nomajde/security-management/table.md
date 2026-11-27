---
title: Une table
description: "Gestion de la sécurité → Partir d'une table dans Nomajde : les colonnes d'une table de JD Edwards EnterpriseOne avec leur nom et leur nombre de lignes de sécurité, qui voit une colonne rôle par rôle (voir, ajouter, modifier), et les plages de valeurs de la sécurité de ligne."
keywords: [Nomajde, JD Edwards, JDE E1, Gestion de la sécurité, Security Workbench, F00950, sécurité de colonne, sécurité de ligne, donnée, "*PUBLIC", "*ALL", table]
---

# Une table

Dans la **Gestion de la sécurité**, le point de départ **une table** lit la sécurité d'une table de JD Edwards EnterpriseOne là où elle se pose : sur ses **colonnes** (sécurité de colonne — qui peut voir, ajouter, modifier une colonne) et sur des **plages de valeurs** (sécurité de ligne). Une fois la table choisie, puis l'une de ses colonnes, deux onglets répondent pour cette colonne.

Accès : **Gestion de la sécurité**, puis **Partir de → une table**. Les autres points de départ sont décrits dans la [vue d'ensemble de la Gestion de la sécurité](./overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="425" rx="14" fill="url(#njtb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Gestion de la sécurité</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">La sécurité d'un utilisateur ou d'un rôle, modifiée là où elle se lit.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR DE</text>
  <rect x="320.432" y="79" width="130" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="385.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un utilisateur ou un rôle</text>
  <rect x="455.432" y="79" width="179" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="544.932" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">une application, un écran ou un état</text>
  <rect x="639.432" y="79" width="58" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="668.432" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">une table</text>
  <rect x="702.432" y="79" width="49" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="726.932" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un menu</text>
  <rect x="756.432" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="778.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="805.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="834.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <rect x="252" y="104" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="118.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">F0101  Address Book Master  ▾</text>
  <rect x="787" y="104" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="824.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="868" y="104" width="80" height="22" rx="5" fill="url(#njtb-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.0" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="148" width="356.0" height="34" rx="8" fill="rgba(255,159,10,0.07)" stroke="rgba(255,159,10,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Qui voit une colonne</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">rôle par rôle : voir, ajouter, modifier</text>
  <rect x="604.0" y="148" width="356.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1.1"/>
  <text x="616.0" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Plages de valeurs</text>
  <text x="616.0" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sécurité de ligne : ce qu'un rôle peut faire sur une plage</text>
  <rect x="240" y="192" width="230" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes de F0101</text>
  <rect x="252" y="218" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="231.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Chercher une colonne…</text>
  <text x="252" y="259" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">AN8</text>
  <text x="273.81" y="259" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Numéro d'adresse</text>
  <text x="458" y="259" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="241" y1="266" x2="469" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="283" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">ALKY</text>
  <text x="279.08" y="283" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Numéro d'adresse long</text>
  <line x1="241" y1="290" x2="469" y2="290" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="307" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">TAX</text>
  <text x="273.81" y="307" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Identifiant fiscal</text>
  <text x="458" y="307" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="241" y1="314" x2="469" y2="314" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="316" width="228" height="22" fill="rgba(74,158,255,0.14)"/>
  <text x="252" y="331" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">ALPH</text>
  <text x="279.08" y="331" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Nom alphabétique</text>
  <text x="458" y="331" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="241" y1="338" x2="469" y2="338" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="355" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">DC</text>
  <text x="268.54" y="355" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Description compressée</text>
  <line x1="241" y1="362" x2="469" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="379" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">MCU</text>
  <text x="273.81" y="379" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Centre de coûts</text>
  <line x1="241" y1="386" x2="469" y2="386" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="403" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">SIC</text>
  <text x="273.81" y="403" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Code activité</text>
  <line x1="241" y1="410" x2="469" y2="410" stroke="#1f2937" strokeWidth="1"/>
  <rect x="478" y="192" width="482" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Qui voit ALPH — Nom alphabétique dans F0101</text>
  <rect x="479" y="220" width="480" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="490" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="728" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">VOIR</text>
  <g><rect x="721.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="728.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="773" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <g><rect x="766.5" y="237" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="246.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="823" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <g><rect x="816.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="823.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="858" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">POURQUOI</text>
  <text x="490" y="272" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tout le monde</text>
  <text x="559.88" y="272" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <g opacity="0.42"><rect x="721.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="766.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="816.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="272" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="479" y1="281" x2="959" y2="281" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="298" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="548.7" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Fournisseurs</text>
  <g opacity="0.42"><rect x="721.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="766.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="816.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="479" y1="307" x2="959" y2="307" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HR_MANAGER</text>
  <text x="548.7" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ressources humaines</text>
  <g><rect x="721.5" y="314" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="323.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="766.5" y="314" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="773.0" y="323.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g><rect x="816.5" y="314" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="323.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="479" y1="333" x2="959" y2="333" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="350" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CONTRACTOR</text>
  <text x="548.7" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Prestataire</text>
  <g><rect x="721.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="728.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g><rect x="766.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="773.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g><rect x="816.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="479" y1="359" x2="959" y2="359" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="376" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="522.35" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Acheteur</text>
  <g opacity="0.42"><rect x="721.5" y="366" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="375.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="766.5" y="366" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="375.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="816.5" y="366" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="375.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="479" y1="385" x2="959" y2="385" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="430" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Sans aucune ligne, une colonne est vue et modifiée. Le dictionnaire de données donne son nom à chaque colonne.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir d'une table</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis choisir la table</text>
  <line x1="200" y1="87.0" x2="659.432" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes dans l'ordre</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom · nombre de lignes</text>
  <line x1="200" y1="267.0" x2="250" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes sur la colonne</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonne et ligne</text>
  <line x1="200" y1="347.0" x2="455" y2="327" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux onglets</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui la voit · plages</text>
  <line x1="1000" y1="167.0" x2="940" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Voir, ajouter, modifier</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en-tête : tous les rôles listés</text>
  <line x1="1000" y1="245.0" x2="780" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case pleine ou pâle</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ligne propre · toutes tables ou tous</text>
  <line x1="1000" y1="337.0" x2="735" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
</svg>

---

## Choisir la table et une colonne \{#pick\}

**Choisissez une table…** propose les tables de la liste qu'utilise le formulaire du Security Workbench, chacune avec son nom.

Le panneau **Colonnes de** *table* présente alors ses colonnes :

- **Dans l'ordre de la table**, tel que la base les définit, chacune avec sa donnée et son nom tiré du dictionnaire de données.
- **Avec un nombre** : celui des lignes de sécurité de colonne et de ligne qui nomment cette colonne sur la table.
- **Avec une recherche** (*Chercher une colonne…*) sur la donnée et son nom.

Quand les colonnes ne peuvent pas être lues — la table n'est pas dans la base que lit le connecteur —, un bandeau l'indique et les colonnes nommées par les lignes de sécurité de la table sont listées à la place.

Un clic sur une colonne : les deux onglets répondent pour elle.

---

## Qui voit une colonne \{#who-sees-a-column\}

L'onglet liste les rôles avec trois cases — **Voir**, **Ajouter**, **Modifier** — et **Tout le monde** (`*PUBLIC`) en tête, sous le titre *Qui voit* *colonne* *dans* *table*. Une recherche (*Chercher un rôle…*) réduit la liste.

Ce qui décide pour un rôle, dans cet ordre :

1. sa propre ligne sur la table pour cette colonne ;
2. sinon sa propre ligne sur toutes les tables (`*ALL`) ;
3. sinon la ligne de tout le monde sur la table ;
4. sinon la ligne de tout le monde sur toutes les tables.

Sans aucune ligne, une colonne est vue et modifiée.

Une case **pleine** est la ligne du rôle sur cette colonne ; une case **pâle** vient d'une ligne sur toutes les tables ou de tout le monde. **Pourquoi** indique *sa propre ligne* ou *pas de ligne propre*.

### La changer \{#change-column\}

- **Cocher une case** : le rôle reçoit sa propre ligne sur la colonne — ajoutée, ou modifiée s'il en a une.
- **La case d'un en-tête** règle ce droit pour tous les rôles listés (après une recherche : ceux trouvés), jamais pour *Tout le monde*.
- **Retirer sa ligne** supprime la ligne du rôle : il suit alors la ligne suivante dans l'ordre ci-dessus.
- **Enregistrer** écrit les changements, **Abandonner** les annule ; changer *Tout le monde* demande confirmation.

Les lignes sont des lignes de sécurité de colonne (type **2**) écrites par les requêtes propres à l'écran Security Workbench, avec la donnée et le code produit de la table — capturées dans le paquet de modifications comme depuis cet écran.

---

## Plages de valeurs \{#ranges-of-values\}

L'onglet liste la sécurité de ligne de la colonne choisie : **une ligne par rôle et par plage de valeurs**, avec les réglages que l'écran Security Workbench affiche pour cette nature de sécurité, et une recherche (*Chercher un rôle, une donnée, une valeur…*).

- **Les lignes sur `*ALL`** — qui s'appliquent aussi à cette table — sont listées avec elles, marquées *par \*ALL*, et ne se modifient pas d'ici : elles se modifient en choisissant `*ALL` comme objet.
- **Une case** change un réglage ; **les lignes sélectionnées** peuvent être autorisées ou interdites en bloc (**Tout autoriser**, **Tout interdire**), supprimées (**Supprimer**) ou désélectionnées (**Vider**).
- **Copier** ouvre le formulaire du Security Workbench sur une copie de la ligne : il reste à changer ce qui diffère, puis à enregistrer.
- **Ajouter une ligne** ouvre le formulaire du Security Workbench par-dessus la page, sur la table, la colonne et la nature « sécurité de ligne », avec toutes ses règles.
- **Enregistrer** écrit les changements par les requêtes de mise à jour et de suppression de l'écran ; **Abandonner** les annule.

Un utilisateur ou un rôle d'une ligne est un lien vers sa propre sécurité (point de départ **un utilisateur ou un rôle**).

---

## Accès \{#access\}

La page est **Gestion de la sécurité** dans le menu de Nomajde ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). Les lignes sont écrites avec les droits de l'écran [Security Workbench](../security-maintenance/security-workbench.md).

---

## Conseils & bonnes pratiques \{#tips\}

- **Regarder d'abord les nombres** : une colonne sans nombre n'a aucune ligne de sécurité — tous les rôles la voient et la modifient.
- **Fermer une colonne sensible à Tout le monde**, puis l'ouvrir aux rôles qui en ont besoin : les cases pâles montrent d'emblée qui dépend de la ligne de tout le monde.
- **Garder en tête les lignes `*ALL`** : une ligne sur toutes les tables pèse aussi sur celle-ci, et ne se modifie pas depuis cette vue.
- **Contrôler le résultat** dans [Simuler la sécurité](../reviews/simulate-security.md), qui essaie un changement de colonne avant de l'écrire.
