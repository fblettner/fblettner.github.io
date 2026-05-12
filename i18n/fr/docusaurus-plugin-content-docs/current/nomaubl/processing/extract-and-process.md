---
title: Extraction et traitement
description: "Enchaîner une extraction (Archive / FTP / BIP) et un traitement (XML ou UBL) en un seul clic — équivalent à exécuter la page d'extraction puis la page de traitement correspondante l'une après l'autre."
keywords: [NomaUBL, traitement, extraction, enchaîné, archive, FTP, BIP, XML, UBL, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Extraction et traitement

L'écran **Extraction et traitement** exécute une **extraction** suivie d'un **traitement** en un seul clic. C'est équivalent à enchaîner l'une des pages *Extract* puis la page *Processing* correspondante, avec les mêmes paramètres regroupés sur un seul formulaire.

La partie extraction propose les trois sources documentées dans *Extract* :

- [Extraction d'archive](../extract/extract-archive.md) — récupération d'un document archivé en base NomaUBL (XML source `F564230` ou UBL généré `F564231`) par clé documentaire.
- [Extraction FTP](../extract/extract-ftp.md) — téléchargement d'un fichier depuis un serveur SFTP avec la clé rapport / version / langue / job.
- [Extraction BIP](../extract/extract-bip.md) — extraction d'un job de la file d'impression BI Publisher JD Edwards (XML d'entrée, sortie générée ou les deux).

La partie traitement propose les deux pipelines documentés dans *Processing* :

- [Traitement de document](./document.md) — point d'entrée unique. Le pipeline (transformation XML ou validation UBL directe) est sélectionné par la propriété `source` du modèle de document. Remplace les anciennes pages *Process XML* et *Process UBL*.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — sauf pour la source BIP, qui est spécifique à JD Edwards.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="480" rx="14" fill="url(#epui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extraction et traitement</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="320" y="82" width="100" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="370" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Archive</text>
  <rect x="424" y="82" width="100" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP</text>
  <rect x="528" y="82" width="100" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="578" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">BIP (JDE)</text>

  <text x="240" y="130" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">N° JOB</text>
  <rect x="340" y="120" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="135" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">42803</text>
  <text x="476" y="135" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANG</text>
  <rect x="514" y="120" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="544" y="135" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FR</text>
  <text x="588" y="135" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXTRACT MODE</text>
  <rect x="676" y="120" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="726" y="135" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Input (XML) ▾</text>

  <line x1="240" y1="158" x2="780" y2="158" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Type de traitement</text>
  <rect x="380" y="172" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="420" y="187" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">XML</text>
  <rect x="464" y="172" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="504" y="187" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>

  <text x="240" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <rect x="340" y="210" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="225" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="560" y="225" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODE</text>
  <rect x="600" y="210" width="100" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="650" y="225" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">AUTO</text>

  <text x="240" y="258" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Dépôt PA</text>
  <rect x="340" y="248" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="400" y="263" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>

  <rect x="240" y="288" width="220" height="28" rx="6" fill="url(#epui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="350" y="306" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Extraire + traiter</text>

  <line x1="240" y1="328" x2="780" y2="328" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="352" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat de l'extraction</text>
  <rect x="240" y="362" width="540" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="252" y="377" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ Job BIP 42803 extrait → dirInput/invoices/R42565_FBL00001_42803.xml</text>

  <text x="240" y="408" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat du traitement</text>
  <rect x="240" y="418" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="433" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY · MODULE · SUBMODULE · MESSAGE</text>

  <rect x="240" y="444" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="448" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="458" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="458" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XSL · transform · 1 document → UBL 2.1</text>

  <rect x="240" y="470" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="474" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="484" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="484" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA · submit · 200 Déposée · post-gen appliquée au BIP 42803</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de source</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Archive · FTP · BIP</text>
  <line x1="220" y1="98" x2="320" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="820" y="120" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs par source</text>
  <text x="830" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">se reconfigurent</text>
  <line x1="820" y1="136" x2="780" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="20" y="172" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type de traitement</text>
  <text x="30" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enchaîne XML ou UBL</text>
  <line x1="220" y1="188" x2="380" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="20" y="288" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bouton unique</text>
  <text x="30" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enchaîne les deux étapes</text>
  <line x1="220" y1="304" x2="240" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="820" y="362" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="377" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux panneaux</text>
  <text x="830" y="390" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extraction → traitement</text>
  <line x1="820" y1="378" x2="780" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>
</svg>

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="ep-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="ep-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ep-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="ep-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ep-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="430" y="20" width="140" height="50" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="410" y="100" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <rect x="40" y="190" width="220" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📦 Extraction d'archive</text>
  <text x="150" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564230 / F564231</text>
  <rect x="380" y="190" width="240" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🌐 Extraction FTP</text>
  <text x="500" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">serveur SFTP</text>
  <rect x="740" y="190" width="220" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="850" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖨 Extraction BIP</text>
  <text x="850" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">file d'impression JDE</text>
  <path d="M 410 130 L 150 130 L 150 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="280" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Archive</text>
  <line x1="500" y1="150" x2="500" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="172" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">FTP</text>
  <path d="M 590 130 L 850 130 L 850 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="720" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BIP</text>
  <rect x="380" y="290" width="240" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="314" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Fichier extrait</text>
  <text x="500" y="332" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">dans dirInput/template/</text>
  <line x1="150" y1="250" x2="380" y2="295" stroke="#4a9eff" strokeWidth="1.3" markerEnd="url(#ep-arrow)"/>
  <line x1="500" y1="250" x2="500" y2="290" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ep-arrow)"/>
  <line x1="850" y1="250" x2="620" y2="295" stroke="#4a9eff" strokeWidth="1.3" markerEnd="url(#ep-arrow)"/>
  <rect x="410" y="380" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="402" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Extraction OK ?</text>
  <text x="500" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="350" x2="500" y2="380" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <rect x="40" y="380" width="220" height="50" rx="10" fill="url(#ep-g-red)" stroke="#f87171" strokeWidth="1.4"/>
  <text x="150" y="402" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⛔ Arrêt</text>
  <text x="150" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">traitement ignoré</text>
  <line x1="410" y1="405" x2="260" y2="405" stroke="#f87171" strokeWidth="1.4" markerEnd="url(#ep-arrow-red)"/>
  <text x="335" y="397" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Non</text>
  <rect x="410" y="460" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="482" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Type de traitement</text>
  <text x="500" y="500" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="430" x2="500" y2="460" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="448" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Oui</text>
  <rect x="100" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="240" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Document (XML)</text>
  <text x="240" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">SINGLE / BURST / UBL / AUTO</text>
  <rect x="620" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="760" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Document (UBL)</text>
  <text x="760" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Validate / Persist / Submit</text>
  <path d="M 410 510 L 240 510 L 240 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="320" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <path d="M 590 510 L 760 510 L 760 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="680" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <rect x="40" y="660" width="200" height="60" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 3"/>
  <text x="140" y="684" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Post-génération</text>
  <text x="140" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">mise à jour statut JDE</text>
  <rect x="410" y="660" width="180" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="684" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Résultat</text>
  <text x="500" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">bilan agrégé</text>
  <path d="M 100 580 L 60 580 L 60 690 L 40 690" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="240" y1="690" x2="410" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
  <path d="M 380 580 L 410 580 L 410 660" stroke="#94a3b8" strokeWidth="1.3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="760" y1="610" x2="590" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
</svg>

L'enchaînement comporte deux étapes. L'extraction écrit un fichier dans `dirInput/<template>/` ; en cas de succès, le pipeline de traitement correspondant le reprend. Tout échec à l'extraction interrompt l'enchaînement — l'étape de traitement est sautée et seul le **Résultat d'extraction** contient un message.

---

## Source

Le sélecteur **Source** en haut choisit l'un des trois canaux d'extraction. Le formulaire dessous s'adapte à la source choisie.

### Archive

Récupère un document archivé via sa clé documentaire en base.

| Champ | Description |
|---|---|
| **DOC** | Numéro de document — clé primaire de l'archive. |
| **DCT** | Code du type de document (par ex. `RI`, `RN`). |
| **KCO** | Code société (par ex. `00070`). |

Le fichier extrait est écrit dans `dirInput/<template>/` (avec `%TEMPLATE%` résolu) sous le nom `<DOC>_<DCT>_<KCO>.xml` (ou `_ubl.xml` si la source est UBL). Voir [Extraction d'archive](../extract/extract-archive.md) pour la référence complète.

### FTP

Télécharge un fichier depuis le serveur SFTP configuré.

| Champ | Description |
|---|---|
| **Report** | Nom de rapport (par ex. `R42565`). |
| **Version** | Version du rapport (par ex. `XJDE0001`). |
| **Language** | Code langue (par ex. `FR`). |
| **Job** | Numéro de job. |

Le fichier extrait est écrit dans `dirInput/<template>/<REPORT>_<VERSION>_<LANG>_<JOB>.xml`. Voir [Extraction FTP](../extract/extract-ftp.md) pour la référence complète.

### BIP

Extrait un job de la file d'impression BI Publisher JDE.

| Champ | Description |
|---|---|
| **Job Number** | Numéro de job BIP JDE (`RJJOBNBR`). |
| **Language** | Filtre optionnel sur la langue BIP. |
| **Extract Mode** | `Extract Input (XML)`, `Extract Output` ou `Extract Both`. Voir [Extraction BIP](../extract/extract-bip.md) pour la sémantique de chaque mode. |

Le nom de base du fichier extrait (`<report>_<version>_<job>`) est réutilisé comme entrée du traitement.

---

## Traitement

Sous le sélecteur de source, **Process Type** choisit entre les deux pipelines.

### Process Type = XML

Équivalent à l'exécution de la page [Traitement de document](./document.md) sur le fichier qui vient d'être extrait, quand le modèle choisi a `source = XML`.

| Champ | Description |
|---|---|
| **Template** | Template du document — obligatoire. Pilote le pipeline XSL et le jeu de règles de validation. |
| **Mode** | `AUTO`, `SINGLE`, `BURST` ou `UBL`. Voir [Traitement de document — Modes (source XML)](./document.md#modes-source-xml). |
| **Replace** | `Skip` laisse intactes les factures existantes ; `Overwrite` les ré-importe. |
| **Send to PA** | `Use settings` (défaut) ou `Skip sending`. |

Quand la source est **BIP**, un appel **Apply post-generation** supplémentaire est fait après une exécution réussie — il met à jour le statut du job JDE, généralement pour le marquer comme traité.

### Process Type = UBL

Équivalent à l'exécution de la page [Traitement de document](./document.md) sur le fichier qui vient d'être extrait, quand le modèle choisi a `source = UBL`. Le fichier extrait doit déjà être au format UBL — cas typiques :

- la source **Archive** est positionnée sur la variante UBL ;
- le système amont émet directement de l'UBL ;
- la source **BIP** est positionnée sur `Extract Output` et le rapport JDE produit du XML UBL en sortie (et non du PDF). Les fichiers UBL extraits de `F95631` sont alors repris directement par le pipeline UBL — aucune transformation XSL ne s'exécute.

| Champ | Description |
|---|---|
| **Mode** | `Process & Validate` (pipeline complet) ou `Validate only`. |
| **Replace Mode** | `Overwrite existing` (défaut) ou `Skip`. |
| **Send to PA** | `Use settings`, `Force send` ou `Skip sending`. |

La clé primaire `(doc, dct, kco)` est extraite du `cbc:ID` de la facture via la regex `idPattern` du modèle de document — les fichiers peuvent avoir n'importe quel nom. Voir [Documents → Extraction de clé depuis cbc:ID](../management/documents.md#extraction-de-cl%C3%A9-depuis-cbcid-lorsque-source--ubl) pour la mise en place de la regex.

#### Combinaisons non prises en charge

| Source | Process Type | Statut |
|---|---|---|
| BIP, *Extract Mode = Both* | UBL | Non pris en charge — l'ensemble extrait contient à la fois le XML et la sortie générée, qui ne peut pas être traitée en UBL. |
| BIP, *Extract Mode = Both* avec plusieurs lignes de sortie | XML | Rejeté — l'extraction produit plusieurs fichiers, le pipeline XML attend un seul fichier par exécution. |

Un message d'erreur explicite apparaît dans la section **Résultat de traitement** quand l'une de ces combinaisons est tentée.

---

## Résultats

L'écran sépare le résultat en deux sections :

- **Résultat d'extraction** — message renvoyé par l'API d'extraction ; renseigné en premier.
- **Résultat de traitement** — table de logs structurée du traitement (mêmes colonnes que sur les pages *XML* et *UBL* : Sévérité / Module / Sous-module / Message) ; renseigné uniquement quand l'extraction a réussi et que le traitement s'est effectivement exécuté.

Si l'extraction échoue, l'étape de traitement est sautée — l'enchaînement s'interrompt au premier échec.

---

## Conseils & bonnes pratiques

- **Utiliser *Extraction et traitement* pour des exécutions ponctuelles.** La page combine deux opérations sur un seul écran : récupérer puis traiter un document se fait en un clic. Pour des exécutions répétées et automatisées, préférer *Synchronisation → Fetch Input* — il enchaîne le même pipeline en lot.
- **Adapter Process Type à la sortie d'extraction.** Le tableau des combinaisons ci-dessus liste les paires non prises en charge ; vérifier la cohérence entre le mode d'extraction BIP et le type de traitement choisi avant de cliquer sur Exécuter.
- **Pour un workflow piloté par BIP, garder Process Type sur XML.** Ce choix déclenche `Apply post-generation` en cas de succès, qui met à jour le statut du job JDE — sans cela, le même job sera ré-extrait au tour suivant.
- **Le résultat d'extraction garde la sortie brute de l'API.** Quand une erreur survient côté extraction (job manquant, fichier introuvable, identifiants SFTP), le message renvoyé par l'API d'extraction reste le diagnostic de référence — à lire avant toute relance.
- **Skip sending pendant la mise au point d'un template.** Les deux pipelines proposent l'option (`No send` / `Skip sending`) — l'utiliser pendant le développement d'un template évite de produire des doublons de soumission PA entre les itérations.
