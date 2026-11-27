---
title: Simuler la sécurité
description: "Revues → Simuler la sécurité dans Nomajde : essayer un changement de la sécurité JD Edwards EnterpriseOne — une application, un écran, un état ou un module entier, un menu ou une tâche, un UDO, une colonne ou des lignes d'une table — pour un rôle existant, plusieurs rôles fusionnés, un utilisateur ou un nouveau rôle conçu à partir de rien, voir son effet avant et après avec la règle qui décide, puis l'appliquer en lignes de sécurité ou le garder comme cas de test."
keywords: [Nomajde, JD Edwards, JDE E1, simuler la sécurité, hypothèse, Security Workbench, F00950, filtrage des menus, F9006, sécurité des UDO, F00950W, sécurité des colonnes, sécurité des lignes, "*PUBLIC", "*ALL", séquence des rôles, nouveau rôle, cas de test]
---

# Simuler la sécurité

**Revues → Simuler la sécurité** répond à la question que le Security Workbench ne résout pas d'un coup d'œil : *quel serait l'effet de ce changement ?* La sécurité de JD Edwards EnterpriseOne s'accumule ligne après ligne — sur des utilisateurs, des rôles, `*PUBLIC`, un objet ou `*ALL`, dans le Security Workbench, le filtrage des menus et la sécurité des UDO — et l'effet d'une ligne de plus se lit mal dans les lignes elles-mêmes. La page les évalue comme JD Edwards : choisir **qui**, essayer un changement, et chaque onglet montre **l'avant et l'après**, avec la règle qui décide.

Rien n'est écrit tant que les changements sont à l'essai. **Appliquer…** les écrit en lignes de sécurité, par les écrans qui les portent, une fois qu'ils donnent le résultat voulu ; **Garder comme cas de test…** conserve ce qu'ils montrent, avec la sécurité d'aujourd'hui, parmi les [cas de test de la sécurité](../security-maintenance/security-test-cases.md).

La page se parcourt en deux étapes : **1 · Qui** et **2 · La sécurité**, en cinq onglets.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 474" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsim-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsim-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsim-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsim-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="440" rx="14" fill="url(#njsim-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Simuler la sécurité</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Essayez un changement de la sécurité et voyez ce qu'il ferait — rien n'est écrit.</text>
  <rect x="240" y="76" width="720" height="82" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="78" width="3" height="78" rx="1.5" fill="#4a9eff"/>
  <circle cx="263" cy="94" r="9" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="263" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="280" y="98" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Qui</text>
  <rect x="871" y="84" width="75" height="22" rx="5" fill="url(#njsim-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="98.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Appliquer…</text>
  <rect x="708" y="84" width="155" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="785.5" y="98.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Garder comme cas de test…</text>
  <rect x="254" y="110" width="294" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="111" width="193" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="351.5" y="124.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un rôle ou un utilisateur existant</text>
  <line x1="449" y1="115" x2="449" y2="127" stroke="#334155" strokeWidth="1"/>
  <text x="498.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Un nouveau rôle</text>
  <rect x="558" y="112" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="599.5" y="124.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AP_MANAGER  ×</text>
  <rect x="651" y="110" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="661" y="124.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">ajouter un rôle ou un utilisateur…  ▾</text>
  <text x="254" y="148" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards cherche dans cet ordre : AP_MANAGER → &#42;PUBLIC</text>
  <rect x="240" y="166" width="720" height="276" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="168" width="3" height="272" rx="1.5" fill="#c084fc"/>
  <circle cx="263" cy="184" r="9" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="263" y="187.5" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="280" y="188" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">La sécurité — telle qu'elle est, et ce que vous essayez</text>
  <rect x="254.0" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="264.0" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTUELLE</text>
  <text x="264.0" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">183 ligne(s)</text>
  <rect x="393.6" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="403.6" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <text x="403.6" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="533.2" y="198" width="133.6" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="543.2" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="543.2" y="226" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 essai(s) · 1 sur 1 changent</text>
  <rect x="672.8" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="682.8" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="682.8" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="812.4" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="822.4" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="822.4" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <text x="254" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POUR</text>
  <rect x="254" y="258" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="272.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER  ▾</text>
  <text x="394" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <rect x="394" y="258" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="404" y="272.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">91 EnterpriseOne Menus  ▾</text>
  <text x="574" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENU OU TÂCHE</text>
  <rect x="574" y="258" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="584" y="272.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Supplier Master</text>
  <rect x="734" y="258" width="118" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="735" y="259" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="763.5" y="272.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Masquer</text>
  <line x1="793" y1="263" x2="793" y2="275" stroke="#334155" strokeWidth="1"/>
  <text x="822.5" y="272.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Montrer</text>
  <rect x="860" y="258" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="889.5" y="272.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Essayer</text>
  <rect x="254" y="288" width="692" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="302.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : masquer Supplier Master</text>
  <text x="934" y="302.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="254" y="316" width="692" height="22" rx="6" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="264" y="330.5" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">Supplier Master se trouve aussi sous Daily Processing, où il reste montré : ce qu'il contient reste accessible par là.</text>
  <rect x="254" y="349" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="271" y="358" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Seulement ce qui change</text>
  <text x="254" y="378" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Comment cela se décide</text>
  <text x="373.192" y="378" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">— …</text>
  <rect x="254" y="390" width="692" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENU / TÂCHE</text>
  <text x="514" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANCE</text>
  <text x="634" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MONTRÉ</text>
  <text x="804" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI CHANGE</text>
  <rect x="254" y="418" width="692" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="432.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Supplier Master</text>
  <text x="514" y="432.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="634" y="432.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NON</text>
  <text x="657.12" y="432.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(avant : oui)</text>
  <text x="804" y="432.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">montré : oui → non</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle(s), utilisateur ou nouveau rôle</text>
  <line x1="200" y1="117.0" x2="254" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Actuelle, puis quatre natures</text>
  <line x1="200" y1="217.0" x2="254" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="20" y="268" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="283" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un changement à essayer</text>
  <text x="30" y="296" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisi dans une liste, pour le rôle indiqué</text>
  <line x1="200" y1="285.0" x2="254" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="20" y="390" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant et après</text>
  <text x="30" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la réponse, et ce qui change</text>
  <line x1="200" y1="407.0" x2="254" y2="430" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appliquer… · Garder…</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour tous les changements essayés</text>
  <line x1="1000" y1="87.0" x2="860" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Montré ailleurs</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">masqué ici, accessible ailleurs</text>
  <line x1="1000" y1="317.0" x2="946" y2="327" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La règle qui décide</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rappelée pour chaque nature</text>
  <line x1="1000" y1="377.0" x2="860" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
</svg>

---

## 1 · Qui \{#who\}

<svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="244" rx="14" fill="url(#njsimw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="34" width="720" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="36" width="3" height="96" rx="1.5" fill="#4a9eff"/>
  <circle cx="263" cy="52" r="9" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="263" y="55.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="280" y="56" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Qui</text>
  <text x="310.48" y="56" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Plusieurs rôles sont lus ensemble, comme une fusion les réunirait.</text>
  <rect x="254" y="68" width="294" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="69" width="193" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="351.5" y="82.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un rôle ou un utilisateur existant</text>
  <line x1="449" y1="73" x2="449" y2="85" stroke="#334155" strokeWidth="1"/>
  <text x="498.5" y="82.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Un nouveau rôle</text>
  <rect x="558" y="70" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="599.5" y="82.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AP_MANAGER  ×</text>
  <rect x="647" y="70" width="73" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="683.5" y="82.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AP_CLERK  ×</text>
  <rect x="730" y="68" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="740" y="82.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">ajouter un rôle ou un utilisateur…  ▾</text>
  <text x="254" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards cherche dans cet ordre : AP_MANAGER → AP_CLERK → &#42;PUBLIC</text>
  <rect x="240" y="148" width="720" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="150" width="3" height="96" rx="1.5" fill="#4a9eff"/>
  <circle cx="263" cy="166" r="9" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="263" y="169.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="280" y="170" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Qui</text>
  <rect x="254" y="182" width="294" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="351.5" y="196.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Un rôle ou un utilisateur existant</text>
  <rect x="450" y="183" width="97" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="498.5" y="196.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un nouveau rôle</text>
  <rect x="558" y="182" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="568" y="196.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">FIN_CLOSE</text>
  <text x="254" y="224" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Un nouveau rôle n'a encore aucune ligne : seul ce que tout le monde reçoit (&#42;PUBLIC) s'applique.</text>
  <text x="254" y="238" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Essayez ce qu'il doit contenir, puis Appliquer le crée.</text>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle ou utilisateur existant</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un seul, ou plusieurs rôles fusionnés</text>
  <line x1="200" y1="79.0" x2="254" y2="79" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un nouveau rôle</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conçu à partir de rien</text>
  <line x1="200" y1="193.0" x2="254" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles fusionnés</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une pastille par rôle ; × le retire</text>
  <line x1="1000" y1="57.0" x2="780" y2="74" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="1000" y="95" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="110" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'ordre de lecture</text>
  <text x="1010" y="123" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateur, rôles, puis tout le monde</text>
  <line x1="1000" y1="112.0" x2="780" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="1000" y="205" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="220" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seul tout le monde s'applique</text>
  <text x="1010" y="233" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jusqu'à sa création par Appliquer</text>
  <line x1="1000" y1="222.0" x2="920" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
</svg>

Un switch en tête de l'étape choisit entre **Un rôle ou un utilisateur existant** et **Un nouveau rôle**.

| Choix | Ce qui est lu |
|---|---|
| **Un rôle** | Les lignes du rôle, puis `*PUBLIC`. Un rôle qui contient d'autres rôles est lu seul : il n'en reçoit rien tant qu'une fusion ne les a pas écrits dans ses propres lignes. |
| **Plusieurs rôles** | Les rôles lus ensemble, comme une fusion les réunirait : chaque rôle choisi apparaît sous forme de pastille, **×** le retire. |
| **Un utilisateur** | Les lignes de l'utilisateur, puis celles de chaque rôle qu'il détient aujourd'hui, puis `*PUBLIC` — ce qu'il obtient en se connectant avec `*ALL`, le rôle de connexion par défaut qui réunit tous les rôles qui lui sont attribués. |
| **Un nouveau rôle** | Un nom saisi dans le champ (dix caractères au plus) : le rôle n'existe pas encore et n'a aucune ligne, seul ce que tout le monde reçoit (`*PUBLIC`) s'applique. Les changements essayés disent ce qu'il doit contenir ; **Appliquer…** le crée. |

Le champ **ajouter un rôle ou un utilisateur…** propose les utilisateurs et les rôles de JD Edwards, ainsi que `*PUBLIC` ; sa colonne *Type* filtre l'une ou l'autre nature. Dès qu'un premier choix est fait, seuls les rôles restent proposés.

Sous les pastilles, **JD Edwards cherche dans cet ordre** donne l'ordre de lecture : l'utilisateur, ses rôles de la séquence la plus élevée à la plus basse, puis `*PUBLIC`.

La page lit son adresse : `…/app/nomajde/secsim?who=AP_MANAGER,AP_CLERK` l'ouvre sur ces rôles. Ce type de lien trouve sa place dans un ticket qui demande *« que se passerait-il si… ? »*.

---

## 2 · La sécurité \{#what\}

La seconde étape présente la sécurité en cinq onglets. L'en-tête de chaque onglet donne son décompte : les lignes qui s'appliquent pour **Actuelle** ; pour les quatre autres, le nombre de changements essayés et le nombre de lignes de résultat qu'ils modifient (*1 essai(s) · 3 sur 12 changent*), ou *rien essayé*. Un onglet où quelque chose change affiche son décompte en orange.

| Onglet | Contenu |
|---|---|
| **Actuelle** | Toutes les lignes de sécurité qui s'appliquent aujourd'hui, en lecture seule. |
| **Applications** | Un changement du droit d'exécuter : une application, un écran ou un état, ou un module entier. |
| **Menus** | Un menu ou une tâche montré ou masqué (filtrage des menus). |
| **UDO** | Un objet défini par l'utilisateur montré ou masqué, ou tous les UDO d'une même nature. |
| **Tables** | Une colonne (voir, ajouter, modifier) ou des lignes (une plage de valeurs) d'une table. |

### Actuelle \{#current\}

<svg viewBox="0 0 1200 248" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="210" rx="14" fill="url(#njsimc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="36" width="139.2" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="250.0" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTUELLE</text>
  <text x="250.0" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">183 ligne(s)</text>
  <rect x="385.2" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="395.2" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <text x="395.2" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="530.4" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="540.4" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="540.4" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="675.6" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="685.5999999999999" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="685.5999999999999" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="820.8" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="830.8" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="830.8" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="240" y="86" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OÙ</text>
  <text x="330" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NATURE</text>
  <text x="450" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR QUOI</text>
  <text x="650" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'ELLE DIT</text>
  <text x="870" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNE DE</text>
  <rect x="240" y="114" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="330" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="450" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="650" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Run Application (Y/N) ✓ · Update Action ✓</text>
  <text x="870" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <rect x="240" y="140" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="330" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="450" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P4310</text>
  <text x="650" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Run Application (Y/N) ✕</text>
  <text x="870" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <rect x="240" y="166" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="330" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="450" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Watchlist · OVW0411G_1607110002JDE</text>
  <text x="650" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Viewable: 1</text>
  <text x="870" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <rect x="240" y="192" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="330" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="450" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">&#42;ALL</text>
  <text x="650" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Run Application (Y/N) ✕</text>
  <text x="870" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <rect x="20" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actuelle</text>
  <text x="30" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lecture seule : ce qui s'applique</text>
  <line x1="200" y1="53.0" x2="240" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menu, application ou UDO</text>
  <line x1="200" y1="167.0" x2="260" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
  <rect x="1000" y="121" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="136" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que dit la ligne</text>
  <text x="1010" y="149" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">✓ autorisé · ✕ interdit</text>
  <line x1="1000" y1="138.0" x2="870" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
  <rect x="1000" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À qui est la ligne</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'utilisateur, ses rôles, &#42;PUBLIC</text>
  <line x1="1000" y1="237.0" x2="900" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
</svg>

**Actuelle** présente, en lecture seule, toutes les lignes qui s'appliquent à la personne ou au rôle choisi — pour un nouveau rôle, les seules lignes de `*PUBLIC` :

| Colonne | Contenu |
|---|---|
| **Où** | *Menu*, *Application* ou *UDO*. |
| **Nature** | La nature de la ligne de sécurité, telle que JD Edwards la nomme. |
| **Sur quoi** | Ce que la ligne sécurise : l'objet, la tâche du menu, l'UDO avec sa nature. |
| **Ce qu'elle dit** | Les paramètres de la ligne ; une case est affichée ✓ (autorisé) ou ✕ (interdit). |
| **Ligne de** | L'utilisateur, le rôle ou `*PUBLIC` sur lequel la ligne est écrite. |

La grille propose les outils habituels : recherche, filtres, colonnes et **Exporter**.

### Essayer un changement \{#try\}

Les quatre autres onglets fonctionnent de la même façon. Une rangée de champs décrit le changement, chaque valeur étant choisie dans une liste :

- **Pour** — le porteur de la ligne : la personne ou le rôle choisi, les rôles d'un utilisateur, ou `*PUBLIC`. Un changement de menu ne s'écrit jamais sur un utilisateur : le filtrage des menus se gère par rôle.
- L'objet du changement — les champs propres à l'onglet, décrits plus bas.
- **Interdire** / **Autoriser** (**Masquer** / **Montrer** dans les onglets Menus et UDO), puis **Essayer**.

Chaque changement essayé s'affiche sous les champs, en clair — *AP_MANAGER : masquer Supplier Master* — avec **×** pour le retirer. Son effet apparaît aussitôt en dessous :

- **Seulement ce qui change** ne garde que les lignes dont la réponse bouge ;
- **Comment cela se décide** rappelle la règle appliquée par JD Edwards pour cette nature de sécurité ;
- la grille donne chaque ligne telle qu'elle serait ; une valeur qui bouge indique ce qu'elle était — *NON (avant : oui)* — et **Ce qui change** la résume, par exemple `exécuter : oui → non`.

Les changements essayés restent sur la page d'un onglet à l'autre : **Appliquer…** et **Garder comme cas de test…** portent sur l'ensemble.

### Applications \{#applications\}

<svg viewBox="0 0 1200 356" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsima-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsima-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsima-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsima-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="292" rx="14" fill="url(#njsima-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTUELLE</text>
  <text x="250.0" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">183 ligne(s)</text>
  <rect x="385.2" y="36" width="139.2" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="395.2" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <text x="395.2" y="64" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 essai(s) · 3 sur 3 changent</text>
  <rect x="530.4" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="540.4" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="540.4" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="675.6" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="685.5999999999999" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="685.5999999999999" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <rect x="820.8" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="830.8" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="830.8" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">rien essayé</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POUR</text>
  <rect x="240" y="110" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER  ▾</text>
  <text x="370" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉCURISER</text>
  <rect x="370" y="110" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">un module entier  ▾</text>
  <text x="530" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="530" y="110" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accounts Payable  ▾</text>
  <rect x="700" y="110" width="138" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="701" y="111" width="67" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="734.5" y="124.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Interdire</text>
  <line x1="769" y1="115" x2="769" y2="127" stroke="#334155" strokeWidth="1"/>
  <text x="803.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Autoriser</text>
  <rect x="846" y="110" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="875.5" y="124.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Essayer</text>
  <rect x="240" y="140" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="154.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : interdire le module Accounts Payable</text>
  <text x="948" y="154.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="173" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,178.5 L244.8,180.8 L248.8,176" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="182" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Seulement ce qui change</text>
  <text x="390" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Comment cela se décide — …</text>
  <rect x="240" y="194" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="320" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="470" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SYSTÈME</text>
  <text x="530" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="580" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTER</text>
  <text x="685" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCIDÉ PAR</text>
  <text x="830" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI CHANGE</text>
  <rect x="240" y="222" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="320" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Standard Voucher Entry</text>
  <text x="470" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="530" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <text x="580" y="236.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NON</text>
  <text x="603.12" y="236.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(avant : oui)</text>
  <text x="685" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER sur P0411</text>
  <text x="830" y="236.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">exécuter : oui → non</text>
  <rect x="240" y="248" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="320" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Manual Payments</text>
  <text x="470" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="530" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <text x="580" y="262.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NON</text>
  <text x="603.12" y="262.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(avant : oui)</text>
  <text x="685" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER sur P0413M</text>
  <text x="830" y="262.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">exécuter : oui → non</text>
  <rect x="240" y="274" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">R04570</text>
  <text x="320" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Create Payment Control Groups</text>
  <text x="470" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="530" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UBE</text>
  <text x="580" y="288.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NON</text>
  <text x="603.12" y="288.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(avant : oui)</text>
  <text x="685" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER sur R04570</text>
  <text x="830" y="288.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">exécuter : oui → non</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une application ou un module</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un écran, un état (exécution) aussi</text>
  <line x1="200" y1="83.0" x2="370" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les changements essayés</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× en retire un</text>
  <line x1="200" y1="177.0" x2="240" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="20" y="304" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="319" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant et après</text>
  <text x="30" y="332" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le droit d'exécuter</text>
  <line x1="200" y1="321.0" x2="600" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="1000" y="94" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="109" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Autoriser ou interdire</text>
  <text x="1010" y="122" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis Essayer</text>
  <line x1="1000" y1="111.0" x2="820" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="1000" y="304" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="319" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La ligne qui décide</text>
  <text x="1010" y="332" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la ligne essayée l'emporte</text>
  <line x1="1000" y1="321.0" x2="740" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
</svg>

**Sécuriser** choisit entre **une application, un écran ou un état** et **un module entier** :

| Champ | Contenu |
|---|---|
| **Application, écran ou état** | Choisi dans la liste de l'Object Librarian, filtrable par type (`APPL`, `FORMS`, `UBE`). Le changement porte sur le droit d'exécuter. |
| **Module** | Un composant de licence tel que Nomasx-1 le définit (*Paramètres → Licences*), filtrable par catégorie : le changement porte sur le droit d'exécuter toutes les applications et tous les états du module. |

La grille présente les objets concernés : **Objet**, **Description**, **Système**, **Type**, **Exécuter** (*oui* ou **NON**, la ligne qui décide au survol), **Décidé par** — la ligne qui décide, sous la forme *qui sur quoi* (`AP_MANAGER sur P0411`, `BUYER sur *ALL`), ou *aucune règle* — et **Ce qui change**.

### Menus \{#menus\}

**Vue de tâches** propose les vues de tâches de JD Edwards, la plus grande étant présélectionnée. **Menu ou tâche** ouvre **Choisir un menu ou une tâche** : les menus de la vue sous forme d'arbre, dont les dossiers s'ouvrent d'un clic. Une recherche d'au moins deux caractères affiche les correspondances — menus, tâches ou application lancée — chacune avec le chemin des dossiers où elle se trouve ; **Choisir** (ou un double-clic) retient la ligne sélectionnée.

La grille présente le menu ou la tâche essayé et tout ce qu'il contient : **Menu / tâche**, **Lance** (l'application ouverte), **Montré** et **Ce qui change**. Une tâche masquée dans un dossier mais présente dans un autre, où elle reste montrée, fait l'objet d'un avertissement : *Supplier Master se trouve aussi sous Daily Processing, où il reste montré : ce qu'il contient reste accessible par là.*

### UDO \{#udos\}

**Nature d'UDO** choisit la nature (liste de surveillance, format de grille, page composite…) ; **UDO** en choisit un, ou reste vide pour **tous les UDO de cette nature**. La grille donne **Type**, **Nom**, **UDO**, **Objet**, **Vu**, **Décidé par** et **Ce qui change**.

### Tables \{#tables\}

<svg viewBox="0 0 1200 376" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="338" rx="14" fill="url(#njsimt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POUR</text>
  <rect x="240" y="52" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER  ▾</text>
  <text x="358" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="358" y="52" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="368" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">F0101  ▾</text>
  <text x="456" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉCURISER</text>
  <rect x="456" y="52" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="466" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">des lignes (une plage de valeurs)  ▾</text>
  <text x="664" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <rect x="664" y="52" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="674" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AC01  ▾</text>
  <text x="752" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE</text>
  <rect x="752" y="52" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="762" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">100</text>
  <text x="820" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À</text>
  <rect x="820" y="52" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="830" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">199</text>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUR CES LIGNES, PEUT</text>
  <rect x="240" y="101" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,106.5 L244.8,108.8 L248.8,104" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">voir</text>
  <rect x="293.16" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="310.16" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ajouter</text>
  <rect x="361.44000000000005" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="378.44000000000005" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">modifier</text>
  <rect x="434.76000000000005" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="451.76000000000005" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">supprimer</text>
  <rect x="523.1200000000001" y="98" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="552.6200000000001" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Essayer</text>
  <rect x="240" y="128" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : interdire voir sur F060116.SSN</text>
  <text x="948" y="142.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="154" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : lignes de F0101.AC01 de 100 à 199 — peut voir</text>
  <text x="948" y="168.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="190" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="320" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <text x="390" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VOIR</text>
  <text x="500" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <text x="560" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <text x="630" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCIDÉ PAR</text>
  <text x="800" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI CHANGE</text>
  <rect x="240" y="218" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="232.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F060116</text>
  <text x="320" y="232.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SSN</text>
  <text x="390" y="232.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NON</text>
  <text x="413.12" y="232.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(avant : oui)</text>
  <text x="500" y="232.5" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">oui</text>
  <text x="560" y="232.5" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">oui</text>
  <text x="630" y="232.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER sur F060116</text>
  <text x="800" y="232.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">voir : oui → non</text>
  <text x="240" y="256" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Plages de valeurs qui s'appliquent (sécurité de ligne : listée, non évaluée)</text>
  <rect x="240" y="266" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="360" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="420" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <text x="484" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE</text>
  <text x="534" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À</text>
  <text x="584" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VOIR</text>
  <text x="634" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <text x="690" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <text x="752" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUPPRIMER</text>
  <text x="818" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI SE PASSE</text>
  <rect x="240" y="294" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="360" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="420" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AC01</text>
  <text x="484" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">100</text>
  <text x="534" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">199</text>
  <text x="584" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="634" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="690" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="752" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="818" y="308.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">commence à s'appliquer</text>
  <rect x="240" y="320" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="360" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="420" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AC01</text>
  <text x="484" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="534" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">999</text>
  <text x="584" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="634" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="690" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="752" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="818" y="334.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="46" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="61" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une colonne ou des lignes</text>
  <text x="30" y="74" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table et colonne choisies en liste</text>
  <line x1="200" y1="63.0" x2="240" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="20" y="124" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="139" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux changements essayés</text>
  <text x="30" y="152" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un droit de colonne, une plage</text>
  <line x1="200" y1="141.0" x2="240" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="20" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes : avant et après</text>
  <text x="30" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">voir, ajouter, modifier</text>
  <line x1="200" y1="223.0" x2="390" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sur ces lignes, peut</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">voir, ajouter, modifier, supprimer</text>
  <line x1="200" y1="101.0" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plages qui s'appliquent</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listées, non évaluées</text>
  <line x1="1000" y1="307.0" x2="960" y2="311" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
</svg>

**Table** se choisit dans la liste des tables ; **Sécuriser** choisit entre **une colonne** et **des lignes (une plage de valeurs)**.

| Changement | Champs |
|---|---|
| **Une colonne** | **Colonne** (les éléments de données de la table) et **Droit** : *voir*, *ajouter*, *modifier*, ou *voir, ajouter et modifier*. |
| **Des lignes** | **Colonne**, **De**, **À**, et **Sur ces lignes, peut** : une case à cocher pour *voir*, *ajouter*, *modifier* et *supprimer*. |

La grille donne chaque colonne des tables essayées : **Table**, **Colonne**, **Voir**, **Ajouter**, **Modifier**, **Décidé par** et **Ce qui change**. En dessous, **Plages de valeurs qui s'appliquent** présente la sécurité des lignes de ces tables — qui, table, colonne, début, fin et les quatre droits — et signale *commence à s'appliquer* pour une plage essayée. Les plages sont présentées, pas évaluées.

---

## Comment cela se décide \{#rule\}

Sous chaque onglet, **Comment cela se décide** rappelle la règle appliquée :

| Onglet | Règle |
|---|---|
| **Applications** | JD Edwards permet ce qu'aucune règle n'interdit. Les règles de l'utilisateur passent en premier, puis celles des rôles (de la séquence la plus élevée à la plus basse), puis `*PUBLIC` ; à un même niveau, la règle la plus précise l'emporte — une ligne sur l'objet avant une ligne sur `*ALL`, une ligne sur un écran ou une version avant une ligne sur l'objet entier. |
| **Menus** | Le filtrage des menus se gère par rôle (et pour `*PUBLIC`), jamais par utilisateur. Une tâche est masquée pour un rôle quand sa ligne le dit — sinon quand celle de `*PUBLIC` le dit ; un dossier masqué masque tout ce qu'il contient. Un utilisateur voit une tâche dès qu'un de ses rôles la montre. |
| **UDO** | Un UDO est vu quand la première ligne trouvée le dit : celle de l'utilisateur, puis celles des rôles (de la séquence la plus élevée à la plus basse), puis celle de `*PUBLIC` — à chaque niveau, la ligne sur l'UDO avant la ligne sur `*ALL`. Aucune ligne : pas vu. |
| **Tables** | La première ligne trouvée décide, de l'utilisateur à ses rôles (de la séquence la plus élevée à la plus basse) puis à `*PUBLIC` — à chaque niveau, la ligne sur la table avant la ligne sur `*ALL`. Aucune ligne : autorisé. Les plages de valeurs sont présentées, pas évaluées. |

Un changement essayé l'emporte sur la ligne déjà écrite au même endroit.

---

## Appliquer \{#apply\}

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="300" rx="14" fill="url(#njsimp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Écrire les changements dans JD Edwards</text>
  <line x1="260" y1="58" x2="940" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <rect x="280" y="70" width="640" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="84.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : interdire le module Accounts Payable</text>
  <rect x="280" y="98" width="640" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="112.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : masquer Supplier Master</text>
  <rect x="280" y="126" width="640" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="140.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER : interdire voir sur F060116.SSN</text>
  <text x="280" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LES ÉCRIRE</text>
  <rect x="280" y="176" width="388" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360.0" y="191.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">sur le rôle de chaque essai</text>
  <line x1="440" y1="181" x2="440" y2="195" stroke="#334155" strokeWidth="1"/>
  <text x="494.5" y="191.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">sur un autre rôle</text>
  <rect x="550" y="177" width="117" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="608.5" y="191.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sur un nouveau rôle</text>
  <text x="280" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DU NOUVEAU RÔLE</text>
  <rect x="280" y="226" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="240.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">AP_SUPERVISOR</text>
  <text x="280" y="266" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Le rôle est créé avec le formulaire de Gestion des rôles, puis les lignes y sont écrites.</text>
  <line x1="260" y1="280" x2="940" y2="280" stroke="#1f2937" strokeWidth="1"/>
  <rect x="867" y="290" width="53" height="22" rx="5" fill="url(#njsimp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="893.5" y="304.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Écrire</text>
  <rect x="806" y="290" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.5" y="304.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="20" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tous les changements essayés</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quel que soit l'onglet</text>
  <line x1="220" y1="107.0" x2="280" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
  <rect x="20" y="175" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="190" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où les écrire</text>
  <text x="30" y="203" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle essayé, autre rôle, nouveau rôle</text>
  <line x1="220" y1="192.0" x2="280" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
  <rect x="980" y="225" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="240" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un nouveau rôle</text>
  <text x="990" y="253" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">créé d'abord, par son formulaire</text>
  <line x1="980" y1="242.0" x2="520" y2="237" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
  <rect x="980" y="285" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="300" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écrire</text>
  <text x="990" y="313" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">après une confirmation</text>
  <line x1="980" y1="302.0" x2="907" y2="301" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
</svg>

**Appliquer…**, en haut de la page dès qu'un changement a été essayé, ouvre **Écrire les changements dans JD Edwards** avec tous les changements essayés, quel que soit l'onglet. **Les écrire** indique sur qui :

| Choix | Effet |
|---|---|
| **sur le rôle de chaque essai** | Chaque ligne va à l'utilisateur, au rôle ou à `*PUBLIC` indiqué dans son champ **Pour**. |
| **sur un autre rôle** | Toutes les lignes vont à un même rôle existant, choisi dans la liste. |
| **sur un nouveau rôle** | Toutes les lignes vont à un rôle qui n'existe pas encore : son nom est saisi et le rôle est d'abord créé avec le formulaire de **Gestion des rôles**, ouvert avec ce nom et la séquence libre suivante. |

Pour un [nouveau rôle conçu à partir de rien](#who), la fenêtre indique que le rôle est créé avec le formulaire de Gestion des rôles, puis que les lignes y sont écrites : il n'y a pas d'autre choix.

**Écrire** prépare les lignes et demande une confirmation qui donne leur nombre pour chaque écran — Security Workbench, Menu Filtering, UDO Security — et avertit quand elles changent ce que **tout le monde** reçoit (`*PUBLIC`). Les lignes sont ensuite écrites une à une, par les formulaires et les contrôles des écrans eux-mêmes :

- une application, un écran ou un état devient une ligne d'exécution du Security Workbench ; un **module**, seulement sur les objets dont la réponse change — un module déjà fermé par une ligne plus large n'en demande aucune ;
- une colonne ou une plage devient une ligne de sécurité de colonne ou de ligne du Security Workbench ;
- un menu devient une ligne de Menu Filtering, un UDO une ligne d'UDO Security ;
- une ligne déjà écrite au même endroit est mise à jour, pas dupliquée.

Un changement de menu ne peut pas s'écrire sur un utilisateur : la fenêtre le signale et n'écrit rien. En cas d'échec, elle indique à quelle ligne l'écriture s'est arrêtée et pourquoi. Une fois tout écrit, un bandeau donne le nombre de lignes et leur destinataire, et les changements essayés sont effacés.

---

## Garder comme cas de test \{#keep\}

<svg viewBox="0 0 1200 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtck-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtck-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtck-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtck-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="320" y="20" width="560" height="194" rx="14" fill="url(#njtck-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="340" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Garder comme cas de test</text>
  <line x1="320" y1="58" x2="880" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="340" y="78" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce qui est listé, avec la sécurité d'aujourd'hui, devient un cas des tests</text>
  <text x="340" y="91" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">(Tests → Cas, suite jde-security).</text>
  <rect x="340" y="100" width="520" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="114.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER — clôture mensuelle</text>
  <rect x="340" y="134" width="223" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="451.5" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Reprendre mes 3 ancien(s) cas dans Tests</text>
  <line x1="320" y1="172" x2="880" y2="172" stroke="#1f2937" strokeWidth="1"/>
  <rect x="780" y="182" width="80" height="22" rx="5" fill="url(#njtck-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="820.0" y="196.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="719" y="182" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="745.5" y="196.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="20" y="96" width="260" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le nom du cas</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un cas de même nom est remplacé</text>
  <line x1="280" y1="113.0" x2="340" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtck-arrow)"/>
  <rect x="20" y="150" width="260" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Anciens cas</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">proposé tant qu'il en reste</text>
  <line x1="280" y1="167.0" x2="340" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtck-arrow)"/>
  <rect x="920" y="170" width="260" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="930" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="930" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec la sécurité d'aujourd'hui</text>
  <line x1="920" y1="187.0" x2="860" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtck-arrow)"/>
</svg>

**Garder comme cas de test…**, à côté d'**Appliquer…**, conserve ce que présentent les onglets — **avec la sécurité d'aujourd'hui**, et non telle qu'elle serait avec les changements essayés — comme un cas des tests (**Tests → Cas**, suite `jde-security`). Le bouton est proposé quand un seul rôle ou un seul utilisateur est étudié. Un nom est saisi, et **Enregistrer** écrit le cas :

- chaque application présentée devient une attente sur son droit d'exécuter ;
- un menu ou une tâche, un UDO, une colonne de table (voir, ajouter, modifier) deviennent des attentes sur leur réponse actuelle — 200 menus et 200 UDO au plus ;
- un cas de même nom est remplacé.

Le cas se joue, se compare et se planifie ensuite comme tous les autres tests : voir [Cas de test de la sécurité](../security-maintenance/security-test-cases.md). Pour que la nouvelle sécurité devienne la référence, appliquer d'abord les changements, puis garder le cas.

Quand des cas de sécurité enregistrés dans la base propre de Nomajde ne sont pas encore dans les tests, la fenêtre propose **Reprendre mes n ancien(s) cas dans Tests** : chacun est repris sous son nom, avec ses attentes. Les exemples de cette base ne sont pas repris : la suite a les siens.

---

## Accès \{#access\}

La page se trouve dans le dossier **Revues** du menu Nomajde. Les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). L'écriture par **Appliquer…** demande le droit de modifier les écrans de Maintenance de la sécurité, que donne le rôle **Administrateur de la sécurité**.

La connexion utilisée pour lire JD Edwards doit pouvoir lire le Security Workbench (`F00950`), le filtrage des menus (`F9006`) et les menus (`F9000`, `F9001`), la sécurité des UDO (`F00950W`) et leur catalogue (`F9860W`), les profils (`F0092`), les rôles et leur séquence (`F00926`), les affectations de rôles (`F95921`) et l'Object Librarian (`F9860`). Les modules viennent du paramétrage des licences de Nomasx-1.

---

## Conseils & bonnes pratiques \{#tips\}

- **Simuler avant d'écrire.** Un rôle sur le point d'être attribué, une ligne `*PUBLIC` à fermer, un module à retirer : chaque onglet montre ce qui bouge, ligne par ligne, avant toute écriture.
- **Concevoir un rôle à partir de rien** avec **Un nouveau rôle** : essayer ce qu'il doit contenir, vérifier la réponse onglet par onglet, puis **Appliquer…** le crée et écrit ses lignes.
- **Lire *Décidé par*** quand une réponse surprend : la ligne qui décide est nommée, la correction porte donc sur le bon utilisateur, le bon rôle ou la bonne ligne `*ALL`.
- **Vérifier la séquence des rôles** quand un utilisateur détient des rôles qui se contredisent : le rôle de séquence la plus élevée est lu en premier.
- **Garder le cas après avoir appliqué**, puis le rejouer après chaque changement : [Cas de test de la sécurité](../security-maintenance/security-test-cases.md).
- **Consulter d'abord la [Cohérence de la sécurité](./security-consistency.md)** sur une sécurité héritée de plusieurs années : les lignes sans destinataire ou qui ne disent rien de nouveau rendent chaque simulation plus difficile à lire.
- **Pour travailler directement sur un rôle, un objet, un menu ou une table**, passer par la [Gestion de la sécurité](../security-management/overview.md) ; un module entier pour un rôle se traite dans [Sécuriser un module](../security-management/secure-a-module.md).
