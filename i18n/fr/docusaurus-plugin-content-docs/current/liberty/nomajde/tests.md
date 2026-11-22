---
title: Tests de non-régression
description: "Le dossier Tests de Nomajde : des tests de non-régression de JD Edwards joués par le serveur AIS — des cas dessinés comme un enchaînement d'appels (un formulaire, une requête de données, une fonction métier), ce que chaque appel doit répondre, une exécution de référence enregistrée avant un changement et comparée après un ESU, une version d'outils ou une montée de version ; les résultats, la tâche qui joue une suite et son rapport Excel."
keywords: [Nomajde, JD Edwards, tests de non-régression, AIS, suite de tests, cas de test, exécution de référence, ESU, tools release, montée de version, smoke test]
---

# Tests de non-régression

Le dossier **Tests** vérifie que JD Edwards **se comporte toujours de la même façon** après un changement — un ESU, une version d'outils, une montée de version, un déploiement de package. Un test appelle JD Edwards comme le fait une intégration, par le serveur AIS : il ouvre un formulaire, lit une table, lance une fonction métier, puis compare la réponse à ce qui est attendu et à une **exécution de référence** enregistrée avant le changement.

Rien n'est installé dans JD Edwards, et aucun script n'est à écrire : un cas se construit en choisissant des appels dans une liste, la réponse de JD Edwards servant à remplir ce qui est attendu.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="400" rx="14" fill="url(#njt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <line x1="232" y1="58" x2="1088" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="70" width="170" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="80" width="150" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="321.0" y="94.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle suite</text>
  <text x="248" y="118" fill="#94a3b8" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE — WHAT MUST KEEP WORKING</text>
  <circle cx="253" cy="138" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="141.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">AIS answers and says what it r…</text>
  <circle cx="253" cy="162" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="165.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">The UDC types of system 00 a…</text>
  <rect x="242" y="176" width="158" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="253" cy="186" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="189.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">The Address Book search for…</text>
  <circle cx="253" cy="210" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="213.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">A table that does not exist i…</text>
  <text x="250" y="236" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">+ Nouveau cas</text>
  <rect x="416" y="70" width="74" height="22" rx="5" fill="url(#njt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="453.0" y="84.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="495" y="70" width="88" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="539.0" y="84.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Jouer ce cas</text>
  <rect x="588" y="70" width="98" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="637.0" y="84.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Jouer la suite</text>
  <rect x="691" y="70" width="145" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="763.5" y="84.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⚑ Enregistrer la référence</text>
  <rect x="418" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="435" y="110" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">aussi les cas qui écrivent</text>
  <rect x="693" y="99" width="107" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="746.5" y="113.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer la suite</text>
  <rect x="416" y="128" width="384" height="272" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="428" cy="140" r="0.6" fill="#334155"/>
  <circle cx="428" cy="156" r="0.6" fill="#334155"/>
  <circle cx="428" cy="172" r="0.6" fill="#334155"/>
  <circle cx="428" cy="188" r="0.6" fill="#334155"/>
  <circle cx="428" cy="204" r="0.6" fill="#334155"/>
  <circle cx="428" cy="220" r="0.6" fill="#334155"/>
  <circle cx="428" cy="236" r="0.6" fill="#334155"/>
  <circle cx="428" cy="252" r="0.6" fill="#334155"/>
  <circle cx="428" cy="268" r="0.6" fill="#334155"/>
  <circle cx="428" cy="284" r="0.6" fill="#334155"/>
  <circle cx="428" cy="300" r="0.6" fill="#334155"/>
  <circle cx="428" cy="316" r="0.6" fill="#334155"/>
  <circle cx="428" cy="332" r="0.6" fill="#334155"/>
  <circle cx="428" cy="348" r="0.6" fill="#334155"/>
  <circle cx="428" cy="364" r="0.6" fill="#334155"/>
  <circle cx="428" cy="380" r="0.6" fill="#334155"/>
  <circle cx="428" cy="396" r="0.6" fill="#334155"/>
  <circle cx="444" cy="140" r="0.6" fill="#334155"/>
  <circle cx="444" cy="156" r="0.6" fill="#334155"/>
  <circle cx="444" cy="172" r="0.6" fill="#334155"/>
  <circle cx="444" cy="188" r="0.6" fill="#334155"/>
  <circle cx="444" cy="204" r="0.6" fill="#334155"/>
  <circle cx="444" cy="220" r="0.6" fill="#334155"/>
  <circle cx="444" cy="236" r="0.6" fill="#334155"/>
  <circle cx="444" cy="252" r="0.6" fill="#334155"/>
  <circle cx="444" cy="268" r="0.6" fill="#334155"/>
  <circle cx="444" cy="284" r="0.6" fill="#334155"/>
  <circle cx="444" cy="300" r="0.6" fill="#334155"/>
  <circle cx="444" cy="316" r="0.6" fill="#334155"/>
  <circle cx="444" cy="332" r="0.6" fill="#334155"/>
  <circle cx="444" cy="348" r="0.6" fill="#334155"/>
  <circle cx="444" cy="364" r="0.6" fill="#334155"/>
  <circle cx="444" cy="380" r="0.6" fill="#334155"/>
  <circle cx="444" cy="396" r="0.6" fill="#334155"/>
  <circle cx="460" cy="140" r="0.6" fill="#334155"/>
  <circle cx="460" cy="156" r="0.6" fill="#334155"/>
  <circle cx="460" cy="172" r="0.6" fill="#334155"/>
  <circle cx="460" cy="188" r="0.6" fill="#334155"/>
  <circle cx="460" cy="204" r="0.6" fill="#334155"/>
  <circle cx="460" cy="220" r="0.6" fill="#334155"/>
  <circle cx="460" cy="236" r="0.6" fill="#334155"/>
  <circle cx="460" cy="252" r="0.6" fill="#334155"/>
  <circle cx="460" cy="268" r="0.6" fill="#334155"/>
  <circle cx="460" cy="284" r="0.6" fill="#334155"/>
  <circle cx="460" cy="300" r="0.6" fill="#334155"/>
  <circle cx="460" cy="316" r="0.6" fill="#334155"/>
  <circle cx="460" cy="332" r="0.6" fill="#334155"/>
  <circle cx="460" cy="348" r="0.6" fill="#334155"/>
  <circle cx="460" cy="364" r="0.6" fill="#334155"/>
  <circle cx="460" cy="380" r="0.6" fill="#334155"/>
  <circle cx="460" cy="396" r="0.6" fill="#334155"/>
  <circle cx="476" cy="140" r="0.6" fill="#334155"/>
  <circle cx="476" cy="156" r="0.6" fill="#334155"/>
  <circle cx="476" cy="172" r="0.6" fill="#334155"/>
  <circle cx="476" cy="188" r="0.6" fill="#334155"/>
  <circle cx="476" cy="204" r="0.6" fill="#334155"/>
  <circle cx="476" cy="220" r="0.6" fill="#334155"/>
  <circle cx="476" cy="236" r="0.6" fill="#334155"/>
  <circle cx="476" cy="252" r="0.6" fill="#334155"/>
  <circle cx="476" cy="268" r="0.6" fill="#334155"/>
  <circle cx="476" cy="284" r="0.6" fill="#334155"/>
  <circle cx="476" cy="300" r="0.6" fill="#334155"/>
  <circle cx="476" cy="316" r="0.6" fill="#334155"/>
  <circle cx="476" cy="332" r="0.6" fill="#334155"/>
  <circle cx="476" cy="348" r="0.6" fill="#334155"/>
  <circle cx="476" cy="364" r="0.6" fill="#334155"/>
  <circle cx="476" cy="380" r="0.6" fill="#334155"/>
  <circle cx="476" cy="396" r="0.6" fill="#334155"/>
  <circle cx="492" cy="140" r="0.6" fill="#334155"/>
  <circle cx="492" cy="156" r="0.6" fill="#334155"/>
  <circle cx="492" cy="172" r="0.6" fill="#334155"/>
  <circle cx="492" cy="188" r="0.6" fill="#334155"/>
  <circle cx="492" cy="204" r="0.6" fill="#334155"/>
  <circle cx="492" cy="220" r="0.6" fill="#334155"/>
  <circle cx="492" cy="236" r="0.6" fill="#334155"/>
  <circle cx="492" cy="252" r="0.6" fill="#334155"/>
  <circle cx="492" cy="268" r="0.6" fill="#334155"/>
  <circle cx="492" cy="284" r="0.6" fill="#334155"/>
  <circle cx="492" cy="300" r="0.6" fill="#334155"/>
  <circle cx="492" cy="316" r="0.6" fill="#334155"/>
  <circle cx="492" cy="332" r="0.6" fill="#334155"/>
  <circle cx="492" cy="348" r="0.6" fill="#334155"/>
  <circle cx="492" cy="364" r="0.6" fill="#334155"/>
  <circle cx="492" cy="380" r="0.6" fill="#334155"/>
  <circle cx="492" cy="396" r="0.6" fill="#334155"/>
  <circle cx="508" cy="140" r="0.6" fill="#334155"/>
  <circle cx="508" cy="156" r="0.6" fill="#334155"/>
  <circle cx="508" cy="172" r="0.6" fill="#334155"/>
  <circle cx="508" cy="188" r="0.6" fill="#334155"/>
  <circle cx="508" cy="204" r="0.6" fill="#334155"/>
  <circle cx="508" cy="220" r="0.6" fill="#334155"/>
  <circle cx="508" cy="236" r="0.6" fill="#334155"/>
  <circle cx="508" cy="252" r="0.6" fill="#334155"/>
  <circle cx="508" cy="268" r="0.6" fill="#334155"/>
  <circle cx="508" cy="284" r="0.6" fill="#334155"/>
  <circle cx="508" cy="300" r="0.6" fill="#334155"/>
  <circle cx="508" cy="316" r="0.6" fill="#334155"/>
  <circle cx="508" cy="332" r="0.6" fill="#334155"/>
  <circle cx="508" cy="348" r="0.6" fill="#334155"/>
  <circle cx="508" cy="364" r="0.6" fill="#334155"/>
  <circle cx="508" cy="380" r="0.6" fill="#334155"/>
  <circle cx="508" cy="396" r="0.6" fill="#334155"/>
  <circle cx="524" cy="140" r="0.6" fill="#334155"/>
  <circle cx="524" cy="156" r="0.6" fill="#334155"/>
  <circle cx="524" cy="172" r="0.6" fill="#334155"/>
  <circle cx="524" cy="188" r="0.6" fill="#334155"/>
  <circle cx="524" cy="204" r="0.6" fill="#334155"/>
  <circle cx="524" cy="220" r="0.6" fill="#334155"/>
  <circle cx="524" cy="236" r="0.6" fill="#334155"/>
  <circle cx="524" cy="252" r="0.6" fill="#334155"/>
  <circle cx="524" cy="268" r="0.6" fill="#334155"/>
  <circle cx="524" cy="284" r="0.6" fill="#334155"/>
  <circle cx="524" cy="300" r="0.6" fill="#334155"/>
  <circle cx="524" cy="316" r="0.6" fill="#334155"/>
  <circle cx="524" cy="332" r="0.6" fill="#334155"/>
  <circle cx="524" cy="348" r="0.6" fill="#334155"/>
  <circle cx="524" cy="364" r="0.6" fill="#334155"/>
  <circle cx="524" cy="380" r="0.6" fill="#334155"/>
  <circle cx="524" cy="396" r="0.6" fill="#334155"/>
  <circle cx="540" cy="140" r="0.6" fill="#334155"/>
  <circle cx="540" cy="156" r="0.6" fill="#334155"/>
  <circle cx="540" cy="172" r="0.6" fill="#334155"/>
  <circle cx="540" cy="188" r="0.6" fill="#334155"/>
  <circle cx="540" cy="204" r="0.6" fill="#334155"/>
  <circle cx="540" cy="220" r="0.6" fill="#334155"/>
  <circle cx="540" cy="236" r="0.6" fill="#334155"/>
  <circle cx="540" cy="252" r="0.6" fill="#334155"/>
  <circle cx="540" cy="268" r="0.6" fill="#334155"/>
  <circle cx="540" cy="284" r="0.6" fill="#334155"/>
  <circle cx="540" cy="300" r="0.6" fill="#334155"/>
  <circle cx="540" cy="316" r="0.6" fill="#334155"/>
  <circle cx="540" cy="332" r="0.6" fill="#334155"/>
  <circle cx="540" cy="348" r="0.6" fill="#334155"/>
  <circle cx="540" cy="364" r="0.6" fill="#334155"/>
  <circle cx="540" cy="380" r="0.6" fill="#334155"/>
  <circle cx="540" cy="396" r="0.6" fill="#334155"/>
  <circle cx="556" cy="140" r="0.6" fill="#334155"/>
  <circle cx="556" cy="156" r="0.6" fill="#334155"/>
  <circle cx="556" cy="172" r="0.6" fill="#334155"/>
  <circle cx="556" cy="188" r="0.6" fill="#334155"/>
  <circle cx="556" cy="204" r="0.6" fill="#334155"/>
  <circle cx="556" cy="220" r="0.6" fill="#334155"/>
  <circle cx="556" cy="236" r="0.6" fill="#334155"/>
  <circle cx="556" cy="252" r="0.6" fill="#334155"/>
  <circle cx="556" cy="268" r="0.6" fill="#334155"/>
  <circle cx="556" cy="284" r="0.6" fill="#334155"/>
  <circle cx="556" cy="300" r="0.6" fill="#334155"/>
  <circle cx="556" cy="316" r="0.6" fill="#334155"/>
  <circle cx="556" cy="332" r="0.6" fill="#334155"/>
  <circle cx="556" cy="348" r="0.6" fill="#334155"/>
  <circle cx="556" cy="364" r="0.6" fill="#334155"/>
  <circle cx="556" cy="380" r="0.6" fill="#334155"/>
  <circle cx="556" cy="396" r="0.6" fill="#334155"/>
  <circle cx="572" cy="140" r="0.6" fill="#334155"/>
  <circle cx="572" cy="156" r="0.6" fill="#334155"/>
  <circle cx="572" cy="172" r="0.6" fill="#334155"/>
  <circle cx="572" cy="188" r="0.6" fill="#334155"/>
  <circle cx="572" cy="204" r="0.6" fill="#334155"/>
  <circle cx="572" cy="220" r="0.6" fill="#334155"/>
  <circle cx="572" cy="236" r="0.6" fill="#334155"/>
  <circle cx="572" cy="252" r="0.6" fill="#334155"/>
  <circle cx="572" cy="268" r="0.6" fill="#334155"/>
  <circle cx="572" cy="284" r="0.6" fill="#334155"/>
  <circle cx="572" cy="300" r="0.6" fill="#334155"/>
  <circle cx="572" cy="316" r="0.6" fill="#334155"/>
  <circle cx="572" cy="332" r="0.6" fill="#334155"/>
  <circle cx="572" cy="348" r="0.6" fill="#334155"/>
  <circle cx="572" cy="364" r="0.6" fill="#334155"/>
  <circle cx="572" cy="380" r="0.6" fill="#334155"/>
  <circle cx="572" cy="396" r="0.6" fill="#334155"/>
  <circle cx="588" cy="140" r="0.6" fill="#334155"/>
  <circle cx="588" cy="156" r="0.6" fill="#334155"/>
  <circle cx="588" cy="172" r="0.6" fill="#334155"/>
  <circle cx="588" cy="188" r="0.6" fill="#334155"/>
  <circle cx="588" cy="204" r="0.6" fill="#334155"/>
  <circle cx="588" cy="220" r="0.6" fill="#334155"/>
  <circle cx="588" cy="236" r="0.6" fill="#334155"/>
  <circle cx="588" cy="252" r="0.6" fill="#334155"/>
  <circle cx="588" cy="268" r="0.6" fill="#334155"/>
  <circle cx="588" cy="284" r="0.6" fill="#334155"/>
  <circle cx="588" cy="300" r="0.6" fill="#334155"/>
  <circle cx="588" cy="316" r="0.6" fill="#334155"/>
  <circle cx="588" cy="332" r="0.6" fill="#334155"/>
  <circle cx="588" cy="348" r="0.6" fill="#334155"/>
  <circle cx="588" cy="364" r="0.6" fill="#334155"/>
  <circle cx="588" cy="380" r="0.6" fill="#334155"/>
  <circle cx="588" cy="396" r="0.6" fill="#334155"/>
  <circle cx="604" cy="140" r="0.6" fill="#334155"/>
  <circle cx="604" cy="156" r="0.6" fill="#334155"/>
  <circle cx="604" cy="172" r="0.6" fill="#334155"/>
  <circle cx="604" cy="188" r="0.6" fill="#334155"/>
  <circle cx="604" cy="204" r="0.6" fill="#334155"/>
  <circle cx="604" cy="220" r="0.6" fill="#334155"/>
  <circle cx="604" cy="236" r="0.6" fill="#334155"/>
  <circle cx="604" cy="252" r="0.6" fill="#334155"/>
  <circle cx="604" cy="268" r="0.6" fill="#334155"/>
  <circle cx="604" cy="284" r="0.6" fill="#334155"/>
  <circle cx="604" cy="300" r="0.6" fill="#334155"/>
  <circle cx="604" cy="316" r="0.6" fill="#334155"/>
  <circle cx="604" cy="332" r="0.6" fill="#334155"/>
  <circle cx="604" cy="348" r="0.6" fill="#334155"/>
  <circle cx="604" cy="364" r="0.6" fill="#334155"/>
  <circle cx="604" cy="380" r="0.6" fill="#334155"/>
  <circle cx="604" cy="396" r="0.6" fill="#334155"/>
  <circle cx="620" cy="140" r="0.6" fill="#334155"/>
  <circle cx="620" cy="156" r="0.6" fill="#334155"/>
  <circle cx="620" cy="172" r="0.6" fill="#334155"/>
  <circle cx="620" cy="188" r="0.6" fill="#334155"/>
  <circle cx="620" cy="204" r="0.6" fill="#334155"/>
  <circle cx="620" cy="220" r="0.6" fill="#334155"/>
  <circle cx="620" cy="236" r="0.6" fill="#334155"/>
  <circle cx="620" cy="252" r="0.6" fill="#334155"/>
  <circle cx="620" cy="268" r="0.6" fill="#334155"/>
  <circle cx="620" cy="284" r="0.6" fill="#334155"/>
  <circle cx="620" cy="300" r="0.6" fill="#334155"/>
  <circle cx="620" cy="316" r="0.6" fill="#334155"/>
  <circle cx="620" cy="332" r="0.6" fill="#334155"/>
  <circle cx="620" cy="348" r="0.6" fill="#334155"/>
  <circle cx="620" cy="364" r="0.6" fill="#334155"/>
  <circle cx="620" cy="380" r="0.6" fill="#334155"/>
  <circle cx="620" cy="396" r="0.6" fill="#334155"/>
  <circle cx="636" cy="140" r="0.6" fill="#334155"/>
  <circle cx="636" cy="156" r="0.6" fill="#334155"/>
  <circle cx="636" cy="172" r="0.6" fill="#334155"/>
  <circle cx="636" cy="188" r="0.6" fill="#334155"/>
  <circle cx="636" cy="204" r="0.6" fill="#334155"/>
  <circle cx="636" cy="220" r="0.6" fill="#334155"/>
  <circle cx="636" cy="236" r="0.6" fill="#334155"/>
  <circle cx="636" cy="252" r="0.6" fill="#334155"/>
  <circle cx="636" cy="268" r="0.6" fill="#334155"/>
  <circle cx="636" cy="284" r="0.6" fill="#334155"/>
  <circle cx="636" cy="300" r="0.6" fill="#334155"/>
  <circle cx="636" cy="316" r="0.6" fill="#334155"/>
  <circle cx="636" cy="332" r="0.6" fill="#334155"/>
  <circle cx="636" cy="348" r="0.6" fill="#334155"/>
  <circle cx="636" cy="364" r="0.6" fill="#334155"/>
  <circle cx="636" cy="380" r="0.6" fill="#334155"/>
  <circle cx="636" cy="396" r="0.6" fill="#334155"/>
  <circle cx="652" cy="140" r="0.6" fill="#334155"/>
  <circle cx="652" cy="156" r="0.6" fill="#334155"/>
  <circle cx="652" cy="172" r="0.6" fill="#334155"/>
  <circle cx="652" cy="188" r="0.6" fill="#334155"/>
  <circle cx="652" cy="204" r="0.6" fill="#334155"/>
  <circle cx="652" cy="220" r="0.6" fill="#334155"/>
  <circle cx="652" cy="236" r="0.6" fill="#334155"/>
  <circle cx="652" cy="252" r="0.6" fill="#334155"/>
  <circle cx="652" cy="268" r="0.6" fill="#334155"/>
  <circle cx="652" cy="284" r="0.6" fill="#334155"/>
  <circle cx="652" cy="300" r="0.6" fill="#334155"/>
  <circle cx="652" cy="316" r="0.6" fill="#334155"/>
  <circle cx="652" cy="332" r="0.6" fill="#334155"/>
  <circle cx="652" cy="348" r="0.6" fill="#334155"/>
  <circle cx="652" cy="364" r="0.6" fill="#334155"/>
  <circle cx="652" cy="380" r="0.6" fill="#334155"/>
  <circle cx="652" cy="396" r="0.6" fill="#334155"/>
  <circle cx="668" cy="140" r="0.6" fill="#334155"/>
  <circle cx="668" cy="156" r="0.6" fill="#334155"/>
  <circle cx="668" cy="172" r="0.6" fill="#334155"/>
  <circle cx="668" cy="188" r="0.6" fill="#334155"/>
  <circle cx="668" cy="204" r="0.6" fill="#334155"/>
  <circle cx="668" cy="220" r="0.6" fill="#334155"/>
  <circle cx="668" cy="236" r="0.6" fill="#334155"/>
  <circle cx="668" cy="252" r="0.6" fill="#334155"/>
  <circle cx="668" cy="268" r="0.6" fill="#334155"/>
  <circle cx="668" cy="284" r="0.6" fill="#334155"/>
  <circle cx="668" cy="300" r="0.6" fill="#334155"/>
  <circle cx="668" cy="316" r="0.6" fill="#334155"/>
  <circle cx="668" cy="332" r="0.6" fill="#334155"/>
  <circle cx="668" cy="348" r="0.6" fill="#334155"/>
  <circle cx="668" cy="364" r="0.6" fill="#334155"/>
  <circle cx="668" cy="380" r="0.6" fill="#334155"/>
  <circle cx="668" cy="396" r="0.6" fill="#334155"/>
  <circle cx="684" cy="140" r="0.6" fill="#334155"/>
  <circle cx="684" cy="156" r="0.6" fill="#334155"/>
  <circle cx="684" cy="172" r="0.6" fill="#334155"/>
  <circle cx="684" cy="188" r="0.6" fill="#334155"/>
  <circle cx="684" cy="204" r="0.6" fill="#334155"/>
  <circle cx="684" cy="220" r="0.6" fill="#334155"/>
  <circle cx="684" cy="236" r="0.6" fill="#334155"/>
  <circle cx="684" cy="252" r="0.6" fill="#334155"/>
  <circle cx="684" cy="268" r="0.6" fill="#334155"/>
  <circle cx="684" cy="284" r="0.6" fill="#334155"/>
  <circle cx="684" cy="300" r="0.6" fill="#334155"/>
  <circle cx="684" cy="316" r="0.6" fill="#334155"/>
  <circle cx="684" cy="332" r="0.6" fill="#334155"/>
  <circle cx="684" cy="348" r="0.6" fill="#334155"/>
  <circle cx="684" cy="364" r="0.6" fill="#334155"/>
  <circle cx="684" cy="380" r="0.6" fill="#334155"/>
  <circle cx="684" cy="396" r="0.6" fill="#334155"/>
  <circle cx="700" cy="140" r="0.6" fill="#334155"/>
  <circle cx="700" cy="156" r="0.6" fill="#334155"/>
  <circle cx="700" cy="172" r="0.6" fill="#334155"/>
  <circle cx="700" cy="188" r="0.6" fill="#334155"/>
  <circle cx="700" cy="204" r="0.6" fill="#334155"/>
  <circle cx="700" cy="220" r="0.6" fill="#334155"/>
  <circle cx="700" cy="236" r="0.6" fill="#334155"/>
  <circle cx="700" cy="252" r="0.6" fill="#334155"/>
  <circle cx="700" cy="268" r="0.6" fill="#334155"/>
  <circle cx="700" cy="284" r="0.6" fill="#334155"/>
  <circle cx="700" cy="300" r="0.6" fill="#334155"/>
  <circle cx="700" cy="316" r="0.6" fill="#334155"/>
  <circle cx="700" cy="332" r="0.6" fill="#334155"/>
  <circle cx="700" cy="348" r="0.6" fill="#334155"/>
  <circle cx="700" cy="364" r="0.6" fill="#334155"/>
  <circle cx="700" cy="380" r="0.6" fill="#334155"/>
  <circle cx="700" cy="396" r="0.6" fill="#334155"/>
  <circle cx="716" cy="140" r="0.6" fill="#334155"/>
  <circle cx="716" cy="156" r="0.6" fill="#334155"/>
  <circle cx="716" cy="172" r="0.6" fill="#334155"/>
  <circle cx="716" cy="188" r="0.6" fill="#334155"/>
  <circle cx="716" cy="204" r="0.6" fill="#334155"/>
  <circle cx="716" cy="220" r="0.6" fill="#334155"/>
  <circle cx="716" cy="236" r="0.6" fill="#334155"/>
  <circle cx="716" cy="252" r="0.6" fill="#334155"/>
  <circle cx="716" cy="268" r="0.6" fill="#334155"/>
  <circle cx="716" cy="284" r="0.6" fill="#334155"/>
  <circle cx="716" cy="300" r="0.6" fill="#334155"/>
  <circle cx="716" cy="316" r="0.6" fill="#334155"/>
  <circle cx="716" cy="332" r="0.6" fill="#334155"/>
  <circle cx="716" cy="348" r="0.6" fill="#334155"/>
  <circle cx="716" cy="364" r="0.6" fill="#334155"/>
  <circle cx="716" cy="380" r="0.6" fill="#334155"/>
  <circle cx="716" cy="396" r="0.6" fill="#334155"/>
  <circle cx="732" cy="140" r="0.6" fill="#334155"/>
  <circle cx="732" cy="156" r="0.6" fill="#334155"/>
  <circle cx="732" cy="172" r="0.6" fill="#334155"/>
  <circle cx="732" cy="188" r="0.6" fill="#334155"/>
  <circle cx="732" cy="204" r="0.6" fill="#334155"/>
  <circle cx="732" cy="220" r="0.6" fill="#334155"/>
  <circle cx="732" cy="236" r="0.6" fill="#334155"/>
  <circle cx="732" cy="252" r="0.6" fill="#334155"/>
  <circle cx="732" cy="268" r="0.6" fill="#334155"/>
  <circle cx="732" cy="284" r="0.6" fill="#334155"/>
  <circle cx="732" cy="300" r="0.6" fill="#334155"/>
  <circle cx="732" cy="316" r="0.6" fill="#334155"/>
  <circle cx="732" cy="332" r="0.6" fill="#334155"/>
  <circle cx="732" cy="348" r="0.6" fill="#334155"/>
  <circle cx="732" cy="364" r="0.6" fill="#334155"/>
  <circle cx="732" cy="380" r="0.6" fill="#334155"/>
  <circle cx="732" cy="396" r="0.6" fill="#334155"/>
  <circle cx="748" cy="140" r="0.6" fill="#334155"/>
  <circle cx="748" cy="156" r="0.6" fill="#334155"/>
  <circle cx="748" cy="172" r="0.6" fill="#334155"/>
  <circle cx="748" cy="188" r="0.6" fill="#334155"/>
  <circle cx="748" cy="204" r="0.6" fill="#334155"/>
  <circle cx="748" cy="220" r="0.6" fill="#334155"/>
  <circle cx="748" cy="236" r="0.6" fill="#334155"/>
  <circle cx="748" cy="252" r="0.6" fill="#334155"/>
  <circle cx="748" cy="268" r="0.6" fill="#334155"/>
  <circle cx="748" cy="284" r="0.6" fill="#334155"/>
  <circle cx="748" cy="300" r="0.6" fill="#334155"/>
  <circle cx="748" cy="316" r="0.6" fill="#334155"/>
  <circle cx="748" cy="332" r="0.6" fill="#334155"/>
  <circle cx="748" cy="348" r="0.6" fill="#334155"/>
  <circle cx="748" cy="364" r="0.6" fill="#334155"/>
  <circle cx="748" cy="380" r="0.6" fill="#334155"/>
  <circle cx="748" cy="396" r="0.6" fill="#334155"/>
  <circle cx="764" cy="140" r="0.6" fill="#334155"/>
  <circle cx="764" cy="156" r="0.6" fill="#334155"/>
  <circle cx="764" cy="172" r="0.6" fill="#334155"/>
  <circle cx="764" cy="188" r="0.6" fill="#334155"/>
  <circle cx="764" cy="204" r="0.6" fill="#334155"/>
  <circle cx="764" cy="220" r="0.6" fill="#334155"/>
  <circle cx="764" cy="236" r="0.6" fill="#334155"/>
  <circle cx="764" cy="252" r="0.6" fill="#334155"/>
  <circle cx="764" cy="268" r="0.6" fill="#334155"/>
  <circle cx="764" cy="284" r="0.6" fill="#334155"/>
  <circle cx="764" cy="300" r="0.6" fill="#334155"/>
  <circle cx="764" cy="316" r="0.6" fill="#334155"/>
  <circle cx="764" cy="332" r="0.6" fill="#334155"/>
  <circle cx="764" cy="348" r="0.6" fill="#334155"/>
  <circle cx="764" cy="364" r="0.6" fill="#334155"/>
  <circle cx="764" cy="380" r="0.6" fill="#334155"/>
  <circle cx="764" cy="396" r="0.6" fill="#334155"/>
  <circle cx="780" cy="140" r="0.6" fill="#334155"/>
  <circle cx="780" cy="156" r="0.6" fill="#334155"/>
  <circle cx="780" cy="172" r="0.6" fill="#334155"/>
  <circle cx="780" cy="188" r="0.6" fill="#334155"/>
  <circle cx="780" cy="204" r="0.6" fill="#334155"/>
  <circle cx="780" cy="220" r="0.6" fill="#334155"/>
  <circle cx="780" cy="236" r="0.6" fill="#334155"/>
  <circle cx="780" cy="252" r="0.6" fill="#334155"/>
  <circle cx="780" cy="268" r="0.6" fill="#334155"/>
  <circle cx="780" cy="284" r="0.6" fill="#334155"/>
  <circle cx="780" cy="300" r="0.6" fill="#334155"/>
  <circle cx="780" cy="316" r="0.6" fill="#334155"/>
  <circle cx="780" cy="332" r="0.6" fill="#334155"/>
  <circle cx="780" cy="348" r="0.6" fill="#334155"/>
  <circle cx="780" cy="364" r="0.6" fill="#334155"/>
  <circle cx="780" cy="380" r="0.6" fill="#334155"/>
  <circle cx="780" cy="396" r="0.6" fill="#334155"/>
  <circle cx="796" cy="140" r="0.6" fill="#334155"/>
  <circle cx="796" cy="156" r="0.6" fill="#334155"/>
  <circle cx="796" cy="172" r="0.6" fill="#334155"/>
  <circle cx="796" cy="188" r="0.6" fill="#334155"/>
  <circle cx="796" cy="204" r="0.6" fill="#334155"/>
  <circle cx="796" cy="220" r="0.6" fill="#334155"/>
  <circle cx="796" cy="236" r="0.6" fill="#334155"/>
  <circle cx="796" cy="252" r="0.6" fill="#334155"/>
  <circle cx="796" cy="268" r="0.6" fill="#334155"/>
  <circle cx="796" cy="284" r="0.6" fill="#334155"/>
  <circle cx="796" cy="300" r="0.6" fill="#334155"/>
  <circle cx="796" cy="316" r="0.6" fill="#334155"/>
  <circle cx="796" cy="332" r="0.6" fill="#334155"/>
  <circle cx="796" cy="348" r="0.6" fill="#334155"/>
  <circle cx="796" cy="364" r="0.6" fill="#334155"/>
  <circle cx="796" cy="380" r="0.6" fill="#334155"/>
  <circle cx="796" cy="396" r="0.6" fill="#334155"/>
  <rect x="430" y="146" width="356" height="22" rx="11" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="608.0" y="160.5" fill="#e2e8f0" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The Address Book search form opens and still has its columns</text>
  <rect x="476" y="198" width="150" height="50" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486" y="213" fill="#4ade80" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">✓ AIS</text>
  <text x="486" y="227" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">describe</text>
  <text x="486" y="240" fill="#94a3b8" fontSize="7.5" fontFamily="ui-monospace, monospace">2 valeur(s)</text>
  <circle cx="454" cy="223" r="7" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
  <text x="454" y="226.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <circle cx="648" cy="223" r="7" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
  <text x="648" y="226.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <line x1="461" y1="223" x2="476" y2="223" stroke="#475569" strokeWidth="1.2"/>
  <line x1="626" y1="223" x2="641" y2="223" stroke="#475569" strokeWidth="1.2"/>
  <rect x="662" y="211" width="56" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.5)" strokeWidth="1.2"/>
  <text x="690" y="226.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚑ Fin</text>
  <rect x="810" y="70" width="274" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="822" y="90" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">L'étape</text>
  <text x="822" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="920" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS APPELÉ</text>
  <rect x="822" y="114" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="128.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">describe</text>
  <rect x="920" y="114" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="930" y="128.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ais  AIS service … ▾</text>
  <text x="822" y="154" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="822" y="160" width="250" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="830" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVICE</text>
  <rect x="830" y="179" width="100" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="192.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">formservice</text>
  <rect x="936" y="179" width="128" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="946" y="192.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">&#123;"formName": "P01012_W01012B", …</text>
  <text x="822" y="230" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est attendu</text>
  <rect x="924" y="218" width="148" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="998.0" y="232.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Remplir depuis la réponse</text>
  <text x="822" y="248" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">L'APPEL</text>
  <rect x="822" y="253" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="266.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">doit fonctionner ▾</text>
  <text x="822.0" y="290" fill="#64748b" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES, AU MOINS</text>
  <rect x="822.0" y="295" width="78.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832.0" y="308.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="908.0" y="290" fill="#64748b" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES, EXACTEMENT</text>
  <rect x="908.0" y="295" width="78.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="918.0" y="308.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="994.0" y="290" fill="#64748b" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES, AU PLUS</text>
  <rect x="994.0" y="295" width="78.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="308.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="822" y="332" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LA PREMIÈRE LIGNE CONTIENT</text>
  <rect x="822" y="337" width="250" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="350.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="824" y="373" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="841" y="382" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Jouée même après un échec (un nettoyage)</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites et cas</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun avec son dernier résultat</text>
  <line x1="200" y1="107.0" x2="246" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un cas est un flux</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une carte par appel</text>
  <line x1="200" y1="217.0" x2="476" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le + ajoute une étape</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur le lien, à cet endroit</text>
  <line x1="200" y1="317.0" x2="454" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer la référence</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avant le changement</text>
  <line x1="1120" y1="57.0" x2="751" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Point d'accès et paramètres</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un champ par paramètre</text>
  <line x1="1120" y1="127.0" x2="1064" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remplir depuis la réponse</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">propose ce qu'il faut attendre</text>
  <line x1="1120" y1="217.0" x2="1072.0" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une étape de nettoyage</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jouée même après un échec</text>
  <line x1="1120" y1="317.0" x2="1044" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
</svg>

---

## Les trois entrées \{#entries\}

| Entrée de menu | Usage |
|---|---|
| **Tests → Résultats** | Le déroulement des dernières exécutions : cas réussis, en échec, modifiés ou jamais joués, les dernières exécutions de chaque suite en barres, chaque cas avec ses derniers résultats. |
| **Tests → Cas** | Les suites et leurs cas, dessinés et modifiés comme des enchaînements d'appels. |
| **Tests → Lancer les tests** | La tâche qui joue une suite — à la demande, ou selon une planification. |

**Résultats** et **Cas** sont les pages de tests de Liberty Next, décrites en détail dans [Tests](../framework/build/tests.md) ; cette page couvre ce qui est propre à JD Edwards.

---

## Un cas, pas à pas \{#case\}

Une **suite** contient des **cas** ; un cas est une suite d'**étapes** ; une étape est un appel à JD Edwards accompagné de ce qui est attendu de sa réponse.

1. Dans **Tests → Cas**, choisir la suite puis **Nouveau cas**. Indiquer ce qu'il vérifie, et cocher *Ce cas modifie des données* si l'une de ses étapes écrit dans JD Edwards.
2. Le **+** du flux ajoute une étape. Choisir le **Point d'accès appelé** dans la liste du connecteur AIS : un [service du catalogue](./ais/services.md) — lecture d'une table, fonction métier — ou un point d'accès créé avec [Créer à partir de…](./ais/create-from.md) pour un formulaire, un état ou une orchestration.
3. Renseigner les **Paramètres** : un champ libellé par paramètre du point d'accès, avec son aide.
4. **Remplir depuis la réponse** joue l'appel immédiatement et propose ce qu'il faut attendre — le nombre de lignes et les valeurs de la première ligne, par alias JD Edwards (`AN8`, `ALPH`). Garder les lignes qui doivent rester vraies, supprimer les autres.
5. **Enregistrer**, puis **Jouer ce cas**.

Ce qu'une étape peut attendre :

| Attente | Signification |
|---|---|
| **L'appel** *doit fonctionner* / *doit être refusé* | Un refus est une attente valable : une table inexistante, une valeur rejetée par le formulaire. **Le refus dit** contrôle le message. |
| **Lignes, au moins / exactement / au plus** | Le nombre de lignes renvoyées. |
| **La première ligne contient** | Des valeurs de la première ligne, par nom de colonne. |
| **Un avertissement dit** | Un avertissement de JD Edwards (*Duplicate Address Book record*) signalé avec la réponse. |

Une valeur lue à une étape — un numéro de tiers tout juste créé — peut être gardée et transmise aux étapes suivantes. Une étape marquée *Jouée même après un échec (un nettoyage)* s'exécute toujours : c'est ainsi qu'un cas qui écrit retire ce qu'il a créé.

---

## Référence et comparaison \{#reference\}

Les attentes disent ce qui doit être vrai. La **référence** révèle ce que personne n'a pensé à écrire : les colonnes d'un formulaire, les libellés d'une grille, les valeurs d'une table de paramétrage.

1. **Avant le changement**, enregistrer la référence : **Enregistrer la référence** dans la page Cas, ou la tâche en mode *record*. Chaque étape garde les parties de sa réponse qu'on lui a demandé de garder.
2. **Après le changement**, rejouer la suite. Chaque cas se termine par :

| Résultat | Signification |
|---|---|
| **Réussi** | Toutes les attentes sont vérifiées et rien ne diffère de la référence. |
| **Modifié** | Les attentes sont vérifiées, mais une valeur gardée diffère de la référence — une colonne disparue, une nouvelle, une autre valeur. L'écart est listé valeur par valeur. |
| **En échec** | Une attente n'est pas vérifiée, ou l'appel a échoué. |
| **Ignoré** | Le cas écrit dans JD Edwards et l'exécution ne l'a pas autorisé. |

Un résultat *Modifié* n'est pas toujours un défaut — une mise à jour peut légitimement ajouter une colonne —, mais il mérite toujours d'être lu. Une fois le changement accepté, enregistrer de nouveau la référence.

---

## La tâche \{#job\}

**Tests → Lancer les tests** joue une suite en dehors de la page — à la demande, ou planifiée après chaque déploiement de package.

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Suite** | `smoke` | La suite à jouer, parmi celles du connecteur AIS. |
| **Comparer à la référence, ou l'enregistrer** | compare | *compare* contrôle les cas et signale les écarts ; *record* garde l'exécution comme nouvelle référence. |
| **Seulement ces cas** | vide | Des identifiants de cas séparés par des virgules ; vide = tous. |
| **Cas qui écrivent dans JDE** | no | *yes* joue aussi les cas marqués comme modifiant des données. |

L'exécution est **en échec** dès qu'un cas échoue ou a changé, ce qui déclenche les alertes de la tâche. Ses fichiers contiennent un rapport Excel, une ligne par étape : cas, libellé, statut du cas, étape, point d'accès, statut de l'étape, durée et constat. Les résultats apparaissent aussi dans **Tests → Résultats**.

---

## La suite livrée \{#smoke\}

Nomajde est livré avec une première suite, **smoke** — *JDE — what must keep working* —, composée de cas de lecture auxquels tout JD Edwards répond :

| Cas | Vérifie |
|---|---|
| `ais-is-up` | AIS répond et indique ce qu'il exécute. |
| `udc-types-of-system-00` | Les types d'UDC du système 00 sont lus dans `F0004`. |
| `address-book-form` | Le formulaire de recherche du carnet d'adresses s'ouvre et possède toujours ses colonnes. |
| `unknown-table-is-refused` | Une table inexistante est refusée, et non renvoyée vide. |

Elle sert à valider la connexion ; viennent ensuite les cas qui comptent pour le métier : les formulaires les plus utilisés, les fonctions métier appelées par les interfaces, les tables de paramétrage qu'une mise à jour ne doit pas toucher.

---

## Accès \{#access\}

| Pour | Un rôle doit détenir |
|---|---|
| Voir les suites et les résultats | **Voir les suites de tests et leurs résultats** |
| Jouer un cas ou une suite | **Jouer les tests (et les voir)** |
| Écrire les suites, les cas et les étapes | **Écrire les tests : suites, cas, étapes (et les jouer)** |
| Lancer la tâche depuis le menu | La permission de la tâche |

Les trois permissions de tests se trouvent dans les règles *Au-delà des menus* d'un rôle, type **Tests** : une équipe fonctionnelle peut écrire et jouer les tests sans être administratrice. Chaque appel s'exécute sous le compte JD Edwards du connecteur AIS : la sécurité de JD Edwards s'applique à ce compte.

---

## Conseils & bonnes pratiques \{#tips\}

- Enregistrer la référence sur l'environnement qui va changer, **juste avant** le changement.
- Préférer de nombreux petits cas de lecture à quelques cas longs : un échec désigne alors ce qui est cassé.
- Tenir à part les cas qui écrivent, chacun avec son étape de nettoyage, et les jouer sur un environnement de test.
- Planifier la tâche après le déploiement nocturne des packages : une régression est connue le matin, avec l'écart listé.
- L'assistant IA connaît la procédure : lui demander de *vérifier que JDE se comporte toujours de la même façon après un changement*.

---

## Voir aussi

- [Tests](../framework/build/tests.md) — la page Cas en détail ; [Résultats des tests](../monitoring/test-results.md).
- [Services JD Edwards (AIS)](./ais/services.md) et [Créer à partir de…](./ais/create-from.md) — les appels possibles dans une étape.
- [Préparer la montée de version](./upgrade/analysis.md) — ce qu'il faut reprendre avant de jouer les tests.
