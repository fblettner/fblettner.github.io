---
title: Sécuriser un module
description: "Gestion de la sécurité → Partir d'un module dans Nomajde : les lignes du Security Workbench de JD Edwards EnterpriseOne (type 3 pour exécuter, type 1 pour ajouter / modifier / supprimer) qui ouvrent tout un module à un rôle — ou le lui retirent — et le ferment à tous les autres, proposées seulement là où la sécurité ne le dit pas déjà, puis écrites par le Security Workbench après confirmation."
keywords: [Nomajde, JD Edwards, JDE E1, sécuriser un module, Gestion de la sécurité, Security Workbench, F00950, sécurité application, sécurité action, "*PUBLIC", "*ALL", module, code système, rôle]
---

# Sécuriser un module

**Sécuriser un module** est le point de départ **un module** de la **Gestion de la sécurité** : il prépare la sécurité de tout un module de JD Edwards EnterpriseOne. Il suffit de choisir un module, le rôle concerné et avec quels droits : la page **propose les lignes du Security Workbench** correspondantes — pour chaque application et chaque état du module, et uniquement là où la sécurité actuelle ne le dit pas déjà.

Les lignes sont d'abord relues. **Écrire ces lignes** les écrit ensuite par le Security Workbench, après confirmation ; elles peuvent aussi être exportées depuis la liste et chargées à la main.

Accès : **Gestion de la sécurité**, puis **Partir de → un module** : la page affiche un seul onglet, **Sécuriser un module**. Les autres points de départ sont décrits dans la [vue d'ensemble de la Gestion de la sécurité](./overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 496" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="462" rx="14" fill="url(#njsm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="756.432" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="778.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="805.432" y="79" width="58" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="834.432" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <text x="252" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Un module, ou toute la sécurité : choisissez le module et le rôle dans l'onglet ci-dessous.</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(255,159,10,0.07)" stroke="rgba(255,159,10,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sécuriser un module</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">les lignes qui l'ouvrent pour un rôle</text>
  <rect x="240" y="190" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="250" y="210" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Management · 42 · 103</text>
  <text x="428" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OU UN CODE SYSTÈME</text>
  <rect x="428" y="210" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="546" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">POUR (RÔLE OU UTILISATEUR)</text>
  <rect x="546" y="210" width="140" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">SALES_REP  ▾</text>
  <text x="694" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">AVEC</text>
  <rect x="694" y="210" width="130" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="704" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">tout sauf supprimer  ▾</text>
  <rect x="832" y="210" width="112" height="20" rx="5" fill="url(#njsm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="888.0" y="223.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposer les lignes</text>
  <rect x="252" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,240.5 L256.8,242.8 L260.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Fermé pour tous les autres (&#42;PUBLIC)</text>
  <rect x="240.0" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248.0" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">103</text>
  <text x="248.0" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OBJETS DANS LE MODULE</text>
  <rect x="360.8333333333333" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="368.8333333333333" y="279" fill="#fb923c" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="368.8333333333333" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES À AJOUTER</text>
  <rect x="481.66666666666663" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="489.66666666666663" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="489.66666666666663" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES DE FERMETURE</text>
  <rect x="602.5" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="610.5" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="610.5" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES D'OUVERTURE</text>
  <rect x="723.3333333333333" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="731.3333333333333" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="731.3333333333333" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES D'ACTION</text>
  <rect x="844.1666666666666" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="852.1666666666666" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">100</text>
  <text x="852.1666666666666" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OBJETS DÉJÀ CORRECTS</text>
  <rect x="240" y="304" width="720" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSSETY</text>
  <text x="296" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSUSER</text>
  <text x="376" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSOBNM</text>
  <text x="436" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="564" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSRUN</text>
  <text x="608" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSA</text>
  <text x="642" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSCHNG</text>
  <text x="690" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSDLT</text>
  <text x="732" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSIOK</text>
  <text x="774" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POURQUOI</text>
  <rect x="240" y="330" width="720" height="20" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="296" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="376" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="436" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="608" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="642" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="732" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="774" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">fermé pour tous</text>
  <rect x="240" y="354" width="720" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="296" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="376" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="436" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="608" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="642" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="732" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="774" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ouvert pour le rôle</text>
  <rect x="240" y="378" width="720" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="296" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="376" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="436" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="608" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="642" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="690" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="732" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="774" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">les actions du rôle</text>
  <rect x="240" y="402" width="720" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="296" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="376" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P42101</text>
  <text x="436" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="608" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="642" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="732" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="774" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">fermé pour tous</text>
  <text x="240" y="438" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Relisez les lignes, puis écrivez-les — ou exportez-les (Exporter, au-dessus de la liste).</text>
  <rect x="240" y="446" width="117" height="22" rx="5" fill="url(#njsm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="460.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Écrire ces 9 lignes</text>
  <text x="367" y="461" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Chaque ligne est ajoutée par le Security Workbench, comme si elle y était saisie.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir d'un module</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un onglet : Sécuriser un module</text>
  <line x1="200" y1="87.0" x2="825.432" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Module ou code système</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par son nom, avec ses codes</text>
  <line x1="200" y1="213.0" x2="260" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fermer pour &#42;PUBLIC</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">facultatif, coché par défaut</text>
  <line x1="200" y1="279.0" x2="252" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type 3 = exécuter</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type 1 = ajouter / modifier / supprimer</text>
  <line x1="200" y1="357.0" x2="252" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avec</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quatre niveaux, dont aucun accès</text>
  <line x1="1000" y1="167.0" x2="754" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seulement ce qui manque</text>
  <text x="1010" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un plan appliqué ne propose rien</text>
  <line x1="1000" y1="279.0" x2="920" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="416" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="431" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écrire les lignes</text>
  <text x="1010" y="444" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">après une confirmation chiffrée</text>
  <line x1="1000" y1="433.0" x2="347" y2="457" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
</svg>

---

## Les champs à renseigner \{#fields\}

| Champ | Usage |
|---|---|
| **Module** | Un composant de licence tel que Nomasx-1 le définit, présenté par son nom avec ses codes système et son nombre d'objets — toutes les applications et tous les états de ces codes système, plus les objets reclassés dans le module. Si aucun module n'est défini dans Nomasx-1 (*Paramètres → Licences → JD Edwards → Codes système*), la liste l'indique : choisir alors un code système. |
| **ou un code système** | Un code système à la place d'un module. |
| **Pour (rôle ou utilisateur)** | Le rôle pour lequel le module est sécurisé — ou un utilisateur, même si des lignes portées par un rôle se maintiennent plus facilement. |
| **Avec** | **tous les droits**, **tout sauf supprimer**, **exécution seule (consultation)** ou **aucun accès** — le module retiré au rôle. |
| **Fermé pour tous les autres (\*PUBLIC)** | Cochée par défaut : le module est fermé à `*PUBLIC`, seuls les rôles explicitement ouverts y accèdent. |

**Proposer les lignes** lit la sécurité du rôle et de `*PUBLIC` et construit le plan.

Avec **aucun accès**, le module est fermé pour le rôle sur chaque objet qu'il peut exécuter aujourd'hui ; ses actions restent en l'état.

---

## Les lignes proposées \{#plan\}

Les chiffres : **objets dans le module**, **lignes à ajouter** (en orange s'il y en a), **lignes de fermeture**, **lignes d'ouverture**, **lignes d'action** et **objets déjà corrects** — ceux pour lesquels rien n'est nécessaire.

La liste présente chaque ligne telle que le Security Workbench la stocke (`F00950`) :

| Colonne | Contenu |
|---|---|
| **FSSETY** | Le type de sécurité : **3** pour la sécurité application (exécution), **1** pour la sécurité action (ajouter / modifier / supprimer). |
| **FSUSER** | `*PUBLIC` pour une ligne qui ferme à tous, le rôle pour les autres lignes. |
| **FSOBNM**, **Description** | L'application ou l'état. |
| **FSRUN** | Sur une ligne de type 3 : `N` pour fermer, `Y` pour ouvrir. |
| **FSA**, **FSCHNG**, **FSDLT**, **FSIOK** | Sur une ligne de type 1 : ajout, modification, suppression selon **Avec**, et OK. |
| **Pourquoi** | *fermé pour tous*, *fermé pour le rôle*, *ouvert pour le rôle* ou *les actions du rôle*. |

Une ligne d'action porte le **code produit** de l'objet et laisse autorisés **OK**, **copier** et **aller à la fin**, comme l'écrit le formulaire du Security Workbench : laissés vides, ils seraient lus comme interdits.

Sous la liste, la page rappelle la suite : relire les lignes, les écrire — ou les exporter (**Exporter**, au-dessus de la liste) pour les charger soi-même —, puis simuler le rôle sur le module et enregistrer la réponse comme cas de test.

---

## Écrire les lignes \{#write\}

**Écrire ces *n* lignes** demande d'abord une confirmation :

- *n ligne(s) seront ajoutées au Security Workbench pour* le rôle — ou, quand certaines lignes ferment des objets à `*PUBLIC`, combien d'entre elles le font, c'est-à-dire pour tous ceux à qui ces objets ne sont pas donnés. Cette confirmation s'affiche alors comme un avertissement.

Chaque ligne est ensuite écrite par les requêtes propres à l'écran Security Workbench, comme si elle y était saisie — contrôlée, horodatée et capturée dans le paquet de modifications. Quand le détenteur a déjà une ligne de ce type sur l'objet, elle est **modifiée** ; sinon elle est **ajoutée**, et une nouvelle ligne d'exécution autorise aussi l'installation, comme l'écrit le formulaire.

Un compteur indique la ligne en cours d'écriture. Si une ligne échoue, l'écriture s'arrête sur elle et indique combien de lignes ont été écrites avant. À la fin, le plan est de nouveau proposé sur la sécurité telle qu'elle est devenue.

---

## Seulement ce qui manque \{#only-missing\}

Une ligne n'est proposée que si la sécurité actuelle ne donne pas déjà le résultat attendu :

- Un objet que `*PUBLIC` ne peut déjà pas exécuter — parce qu'une ligne `*PUBLIC` ferme `*ALL` ou ferme l'objet — ne reçoit **aucune ligne de fermeture**.
- Un objet que le rôle peut déjà exécuter ne reçoit **aucune ligne d'ouverture** ; ses actions ne reçoivent une ligne que si elles diffèrent de ce que demande **Avec**.
- Avec **aucun accès**, seuls les objets que le rôle peut exécuter aujourd'hui reçoivent une ligne.
- Une fois les lignes écrites, proposer de nouveau le plan **ne propose plus rien**, et un bandeau l'indique : *La sécurité dit déjà tout cela : aucune ligne à ajouter.*

Au-delà de 5 000 objets, la liste est coupée et un bandeau demande de la restreindre.

---

## Accès \{#access\}

Le point de départ fait partie de la page **Gestion de la sécurité** ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). Les lignes sont écrites avec les droits de l'écran [Security Workbench](../security-maintenance/security-workbench.md).

---

## Conseils & bonnes pratiques \{#tips\}

- **Fermer `*ALL` pour `*PUBLIC` une fois pour toutes** plutôt qu'objet par objet : une sécurité fermée par défaut raccourcit chaque plan de module. La [Cohérence de la sécurité](../reviews/security-consistency.md) signale quand ce n'est pas le cas.
- **Relire avant d'écrire** : le plan est calculé sur la sécurité au moment de la lecture ; une ligne écrite entre-temps le modifie.
- **Retirer un module avec aucun accès** quand un rôle change de fonction : les lignes ne ferment que ce que le rôle peut encore exécuter.
- **Contrôler ensuite le résultat** : simuler le rôle sur le module dans [Simuler la sécurité](../reviews/simulate-security.md), enregistrer la réponse comme [cas de test](../security-maintenance/security-test-cases.md) et la rejouer après chaque changement ultérieur.
