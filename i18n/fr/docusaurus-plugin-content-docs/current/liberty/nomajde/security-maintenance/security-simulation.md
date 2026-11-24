---
title: Simulation de la sécurité
description: "Maintenance de la sécurité → Simulation de la sécurité dans Nomajde : ce qu'un utilisateur, un rôle ou *PUBLIC de JD Edwards EnterpriseOne peut exécuter, ajouter, modifier et supprimer dans les applications et les états d'un module, d'un code système ou d'une liste d'objets, la règle qui décide chaque droit, et une hypothèse (rôles ajoutés ou retirés, règles essayées) jamais écrite dans JD Edwards."
keywords: [Nomajde, JD Edwards, JDE E1, simulation de la sécurité, Security Workbench, F00950, sécurité application, sécurité action, hypothèse, "*PUBLIC", "*ALL", séquence des rôles, cas de test]
---

# Simulation de la sécurité

**Maintenance de la sécurité → Simulation de la sécurité** répond à la question que le Security Workbench ne résout pas d'un coup d'œil : *qu'est-ce que cette personne aurait le droit de faire ?* La sécurité de JD Edwards EnterpriseOne s'accumule ligne après ligne — sur des utilisateurs, des rôles, `*PUBLIC`, un objet ou `*ALL` — et le résultat se lit mal dans les lignes elles-mêmes. La page les évalue comme JD Edwards et donne, pour chaque application et chaque état, ce qui peut être **exécuté, ajouté, modifié et supprimé**, avec la règle qui en décide. Une **hypothèse** permet d'essayer des rôles et des règles avant de les écrire.

La page n'écrit rien dans JD Edwards. Les cas de test sont enregistrés dans la base propre de Nomajde.

La page compte quatre onglets :

| Onglet | Usage |
|---|---|
| **Simuler** | Un utilisateur, un rôle ou `*PUBLIC` sur un module, un code système ou une liste d'objets ; l'hypothèse. Cette page. |
| **Sécuriser un module** | Les [lignes du Security Workbench qui sécurisent tout un module](./secure-a-module.md) pour un rôle, proposées et jamais écrites. |
| **Cohérence** | Le [Security Workbench relu pour ce qui ne colle pas](./workbench-consistency.md) : douze contrôles, chaque constat avec ce qu'il faut faire. |
| **Cas de test** | Des [attentes rejouées sur la sécurité](./security-test-cases.md) après chaque changement, avec cinq exemples à adapter. |

---

## Vue d'ensemble

<svg viewBox="0 0 1200 530" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njss-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njss-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njss-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njss-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="494" rx="14" fill="url(#njss-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Simulation de la sécurité</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce qu'un utilisateur aurait le droit de faire, avant de l'écrire — et les cas qui vérifient que cela le reste.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simuler</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Un utilisateur, un module, une hypothèse</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sécuriser un module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tout un module pour un rôle</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cohérence</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des lignes inutiles ou qui se contredisent</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cas de test</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des attentes rejouées sur la sécurité · 7</text>
  <rect x="240" y="126" width="720" height="44" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">UTILISATEUR, RÔLE OU &#42;PUBLIC</text>
  <rect x="250" y="145" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH ▾</text>
  <text x="410" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="410" y="145" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="159.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="540" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OU UN CODE SYSTÈME</text>
  <rect x="540" y="145" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="159.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="670" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OU DES OBJETS (SÉPARÉS PAR DES VIRGULES)</text>
  <rect x="670" y="145" width="185" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">P4210, P4310, P4106, R42565</text>
  <rect x="865" y="145" width="85" height="22" rx="5" fill="url(#njss-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="907.5" y="159.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Simuler</text>
  <rect x="240" y="178" width="720" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="192" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ET SI… (RIEN N'EST ÉCRIT)</text>
  <text x="250" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLES AJOUTÉS</text>
  <rect x="250" y="213" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276.5" y="225.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BUYER ×</text>
  <text x="600" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLES RETIRÉS</text>
  <rect x="600" y="213" width="330" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="225.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">…</text>
  <text x="250" y="244" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Règles essayées</text>
  <rect x="340" y="233" width="102" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="391.0" y="244.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter une règle</text>
  <rect x="240.0" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="278" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="250.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJETS</text>
  <text x="250.0" y="299" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">JSMITH · 2 rôles</text>
  <rect x="421.5" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="278" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="431.5" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTABLES</text>
  <text x="431.5" y="299" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">avant : 2</text>
  <rect x="603.0" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="278" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="613.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FERMÉS</text>
  <text x="613.0" y="299" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">avant : 2</text>
  <rect x="784.5" y="260" width="175.5" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="278" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="794.5" y="290" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGÉS PAR L'HYPOTHÈSE</text>
  <rect x="240" y="308" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="306" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="418" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="454" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTER</text>
  <text x="510" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <text x="564" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <text x="620" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUPPRIMER</text>
  <text x="684" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTION DÉCIDÉE PAR</text>
  <text x="824" y="323.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI CHANGE</text>
  <rect x="240" y="336" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="306" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Saisie des commandes</text>
  <text x="418" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="454" y="339.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="470.0" y="350.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="510" y="339.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="350.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="564" y="339.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="350.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="620" y="339.0" width="32" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="636.0" y="350.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NON</text>
  <text x="684" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALESORDER on P4210</text>
  <text x="824" y="350.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="362" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="306" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Commandes d'achat</text>
  <text x="418" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="454" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="470.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="510" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="564" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="620" y="365.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="636.0" y="376.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <text x="684" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER on &#42;ALL</text>
  <text x="824" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">run: no → yes</text>
  <rect x="240" y="388" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4106</text>
  <text x="306" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Prix avancés</text>
  <text x="418" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="454" y="391.0" width="32" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="470.0" y="402.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NON</text>
  <rect x="510" y="391.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="402.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="564" y="391.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="402.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="620" y="391.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="636.0" y="402.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <text x="684" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC on P4106</text>
  <text x="824" y="402.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="414" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="306" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Impression factures</text>
  <text x="418" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="454" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="470.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="510" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="526.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="564" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="620" y="417.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="636.0" y="428.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <text x="684" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">no rule</text>
  <text x="824" y="428.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="444" width="720" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="458" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENREGISTRER COMME CAS DE TEST</text>
  <rect x="250" y="466" width="220" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="479.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">nom du cas</text>
  <rect x="478" y="466" width="168" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="562.0" y="479.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer comme cas de test</text>
  <text x="250" y="496" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Comment cela se décide — JD Edwards allows what no rule forbids…</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateur, rôle ou &#42;PUBLIC</text>
  <line x1="200" y1="157.0" x2="250" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hypothèse</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôles ajoutés / retirés, règles</text>
  <line x1="200" y1="217.0" x2="250" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant et après</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chiffres avec l'hypothèse</text>
  <line x1="200" y1="307.0" x2="250" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre droits par objet</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécuter · ajouter · modifier · supprimer</text>
  <line x1="200" y1="397.0" x2="510" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer comme cas</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les réponses deviennent attentes</text>
  <line x1="200" y1="467.0" x2="250" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Module, code ou objets</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'un des trois</text>
  <line x1="1000" y1="157.0" x2="820" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="1000" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La règle qui décide</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou « no rule » : permis</text>
  <line x1="1000" y1="397.0" x2="780" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
  <rect x="1000" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui change</text>
  <text x="1010" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">marqué par l'hypothèse</text>
  <line x1="1000" y1="477.0" x2="920" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njss-arrow)"/>
</svg>

---

## Simuler \{#simulate\}

### Qui \{#who\}

**Utilisateur, rôle ou \*PUBLIC** liste les utilisateurs et les rôles de JD Edwards (un rôle porte la mention *(role)*), ainsi que `*PUBLIC`.

| Choix | Ce qui est évalué |
|---|---|
| Un **utilisateur** | Ses propres lignes, puis celles de chaque rôle qu'il détient aujourd'hui — affectations en vigueur et non expirées — puis `*PUBLIC`. C'est ce qu'obtient l'utilisateur qui se connecte avec `*ALL`, le rôle de connexion par défaut qui combine tous les rôles qui lui sont attribués. |
| Un **rôle** | Les lignes du rôle, puis `*PUBLIC`. |
| **\*PUBLIC** | Les seules lignes de `*PUBLIC` : ce que chacun obtient tant qu'aucune autre ligne ne le remplace. |

### Quoi \{#what\}

Renseigner l'un des trois champs ; **Simuler** lit la sécurité correspondante.

| Champ | Contenu |
|---|---|
| **Module** | Un composant de licence tel que Nomasx-1 le définit (*Paramètres → Licences → JD Edwards → Codes système*), présenté par son nom avec ses codes système et le nombre d'applications et d'états : tous les objets de ces codes système, plus les objets reclassés dans le module. Sans ce paramétrage, une ligne le signale et l'on choisit un code système. |
| **ou un code système** | Un code système, avec sa description et le nombre d'applications et d'états qu'il contient. Choisir un module vide le code système, et inversement. |
| **ou des objets (séparés par des virgules)** | Des objets nommés, par exemple `P4210, R42565`. S'ils sont renseignés, ils l'emportent sur le module et le code système. |

Seules les applications interactives et les états de l'Object Librarian sont repris. Au-delà de 5 000 objets, la liste est coupée et un bandeau demande de la restreindre.

### La réponse \{#answer\}

Au-dessus de la liste, les chiffres : **objets** (avec qui et le nombre de rôles lus), **exécutables**, **fermés** et, avec une hypothèse, **changés par l'hypothèse** ; sous *exécutables* et *fermés*, *avant : n* donne le chiffre sans l'hypothèse.

| Colonne | Contenu |
|---|---|
| **Objet**, **Description**, **Système**, **Type** | L'application (`APPL`) ou l'état (`UBE`) et son code système. |
| **Exécuter**, **Ajouter**, **Modifier**, **Supprimer** | *oui* ou **NON** pour chaque droit. Le survol d'une valeur affiche la règle qui décide ce droit. |
| **Exécution décidée par** | La ligne qui décide le droit d'exécuter, sous la forme *qui on quoi* — `SALESORDER on P4210`, `BUYER on *ALL` — ou *no rule*. |
| **Ce qui change** | Avec une hypothèse seulement : les droits qui diffèrent, sous la forme `run: no → yes`. |

La grille offre la recherche, les filtres, les colonnes et **Exporter** habituels.

---

## Comment cela se décide \{#rule\}

Sous la liste, **Comment cela se décide** rappelle la règle appliquée :

- JD Edwards **permet ce qu'aucune règle n'interdit** : un objet qu'aucune ligne ne nomme est permis (*no rule*).
- Les **lignes de l'utilisateur** passent en premier, puis celles des **rôles**, de la **séquence la plus élevée** à la plus basse, puis **`*PUBLIC`**. Le premier niveau qui se prononce sur un droit le décide.
- À un même niveau, **la ligne la plus précise l'emporte** : une ligne sur l'objet avant une ligne sur `*ALL`, une ligne sur un écran ou une version avant une ligne sur l'objet entier.

---

## Hypothèse \{#what-if\}

Le panneau **Et si… (rien n'est écrit)** essaie un changement avant de le faire :

| Champ | Usage |
|---|---|
| **Rôles ajoutés** | Les rôles que l'utilisateur détiendrait en plus, choisis un par un ; chacun apparaît sous forme de pastille, **×** le retire. |
| **Rôles retirés** | Les rôles que l'utilisateur ne détiendrait plus. |
| **Règles essayées** | **Ajouter une règle** ajoute une ligne : *pour* (utilisateur, rôle ou `*PUBLIC`), *objet* (`*ALL` si vide), *droit* (exécuter, ajouter, modifier, supprimer, ou les quatre), *autoriser* ou *interdire*. **Retirer** la supprime. |

**Simuler** donne alors la réponse telle qu'elle serait : les chiffres affichent *avant : n* et la colonne **Ce qui change** signale chaque droit qui bouge. Rien n'est écrit dans JD Edwards : les rôles et les règles essayés restent sur la page.

---

## Enregistrer comme cas de test \{#save\}

Sous une réponse, **Enregistrer comme cas de test**, avec un nom, la conserve comme [cas de test](./security-test-cases.md) : chaque objet et chaque droit deviennent une attente — quatre par objet. Un cas de même nom est remplacé.

Les attentes sont prises sur **la sécurité telle qu'elle est**, pas sur l'hypothèse : une hypothèse n'est pas un fait à conserver. Une fois le changement fait dans le Security Workbench, simuler de nouveau puis enregistrer.

---

## Ouvrir la page sur une personne \{#link\}

La page lit son adresse : `…/app/nomajde/secsim?who=JSMITH&sy=42` l'ouvre sur l'utilisateur `JSMITH` et le code système 42 et lance aussitôt la simulation ; `&objects=P4210,P0411` nomme des objets à la place d'un code système. Ce type de lien trouve sa place dans un ticket ou un e-mail qui demande *« cette personne peut-elle faire cela ? »*.

---

## Accès \{#access\}

La page se trouve dans le dossier **Maintenance de la sécurité** du menu Nomajde. Les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). La connexion utilisée pour lire JD Edwards doit pouvoir lire le Security Workbench (`F00950`), les profils (`F0092`), les rôles et leur séquence (`F00926`), les affectations de rôles (`F95921`) et l'Object Librarian (`F9860`). Les modules viennent du paramétrage des licences de Nomasx-1 ; sans lui, la page fonctionne par code système ou par objets.

---

## Conseils & bonnes pratiques \{#tips\}

- **Simuler avant d'écrire.** Un rôle sur le point d'être attribué, une ligne `*PUBLIC` sur le point d'être fermée : l'hypothèse montre ce qui bouge, objet par objet, avant toute modification du Security Workbench.
- **Lire *Exécution décidée par*** quand une réponse surprend : la ligne qui décide est nommée, la correction porte donc sur le bon utilisateur, le bon rôle ou la bonne ligne `*ALL`.
- **Vérifier la séquence des rôles** quand un utilisateur détient des rôles qui se contredisent : le rôle de séquence la plus élevée est lu en premier.
- **Enregistrer la réponse comme cas de test** une fois la sécurité correcte, et la rejouer après chaque changement : [Cas de test](./security-test-cases.md).
- **Lancer d'abord la [Cohérence](./workbench-consistency.md)** sur une sécurité héritée de plusieurs années : les lignes sans destinataire ou qui ne disent rien de nouveau rendent chaque simulation plus difficile à lire.
