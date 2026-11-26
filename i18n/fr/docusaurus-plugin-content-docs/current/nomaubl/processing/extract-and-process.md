---
title: Extraction et traitement
description: "Enchaîner une extraction (Archive / FTP / BIP) et un traitement (XML ou UBL) en un seul clic — équivalent à exécuter la page d'extraction puis la page de traitement correspondante l'une après l'autre."
keywords: [NomaUBL, traitement, extraction, enchaîné, archive, FTP, BIP, XML, UBL, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Extraction et traitement

L'écran **Extraction et traitement** exécute une **extraction** suivie d'un **traitement** en un seul clic. C'est équivalent à enchaîner l'une des pages *Extract* puis la page *Processing* correspondante, avec les mêmes paramètres réunis sur une seule page.

La page se déroule en **quatre étapes**, présentées sous forme de cartes en haut de l'écran : **Source** (provenance du fichier), **Traitement** (document et options), **Résultat de l'extraction** et **Résultat du traitement**. Chaque carte résume son état en quelques mots : la source et sa clé, le document et son mode, puis le résultat en vert (succès) ou en rouge (échec). Une étape à laquelle il manque sa clé ou son document est signalée en rouge. Un seul bouton **Extraire & Traiter**, dans l'en-tête de la page, lance les deux parties : la page affiche d'abord le résultat de l'extraction, puis passe au résultat du traitement dès qu'il est connu.

La partie extraction propose les trois sources documentées dans *Extract* :

- [Extraction d'archive](../extract/extract-archive.md) — récupération d'un document archivé en base NomaUBL (XML source `F564230` ou UBL généré `F564231`) par clé documentaire.
- [Extraction FTP](../extract/extract-ftp.md) — téléchargement d'un fichier depuis un serveur SFTP avec la clé rapport / version / langue / job.
- [Extraction BIP](../extract/extract-bip.md) — extraction d'un job de la file d'impression BI Publisher JD Edwards (XML d'entrée, sortie générée ou les deux).

La partie traitement propose les deux pipelines documentés dans *Processing* :

- [Traitement de document](./document.md) — point d'entrée unique. Le pipeline (transformation XML ou validation UBL directe) est sélectionné par la propriété `source` du document.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — sauf pour la source BIP, qui est spécifique à JD Edwards.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="eapui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="eapui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="eapui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="eapui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="330" rx="14" fill="url(#eapui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extraire &amp; Traiter</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Extraire un spool depuis Archive, FTP ou BIP, puis traiter avec le pipeline XML ou UBL.</text>
  <rect x="840" y="34" width="120" height="22" rx="5" fill="url(#eapui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="900.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Extraire &amp; Traiter</text>
  <rect x="220" y="80" width="760" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="232" y="90" width="170" height="44" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="240" y="97" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="248.0" y="108.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <text x="262" y="108.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="241" y="126" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">BIP · 42803</text>
  <line x1="403" y1="112.0" x2="415" y2="112.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#eapui-flow)"/>
  <rect x="418" y="90" width="170" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="426" y="97" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="434.0" y="108.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙</text>
  <text x="448" y="108.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRAITEMENT</text>
  <text x="427" y="126" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">invoices · AUTO</text>
  <line x1="589" y1="112.0" x2="601" y2="112.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#eapui-flow)"/>
  <rect x="604" y="90" width="170" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="612" y="97" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="620.0" y="108.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <text x="634" y="108.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉSULTAT DE L'EXTRACTION</text>
  <text x="613" y="126" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">Job BIP 42803 extrait</text>
  <line x1="775" y1="112.0" x2="787" y2="112.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#eapui-flow)"/>
  <rect x="790" y="90" width="170" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="798" y="97" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="806.0" y="108.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="820" y="108.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉSULTAT DU TRAITEMENT</text>
  <text x="799" y="126" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">Traitement terminé avec succ…</text>
  <line x1="220" y1="144" x2="980" y2="144" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="170" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OPTIONS D'EXTRACTION</text>
  <text x="240" y="196" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="370" y="182" width="143" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="371" y="183" width="38" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390.0" y="197.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BIP</text>
  <line x1="410" y1="187" x2="410" y2="201" stroke="#334155" strokeWidth="1"/>
  <text x="441.5" y="197.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Archive</text>
  <line x1="473" y1="187" x2="473" y2="201" stroke="#334155" strokeWidth="1"/>
  <text x="493.0" y="197.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP</text>
  <text x="240" y="229" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Numéro de job</text>
  <rect x="370" y="214" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">42803</text>
  <text x="240" y="259" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Langue</text>
  <rect x="370" y="244" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="258.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">FR</text>
  <text x="240" y="289" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Mode d'extraction</text>
  <rect x="370" y="274" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="288.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Extraire l'entrée (XML) ▾</text>
  <text x="240" y="319" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Fichier d'entrée</text>
  <rect x="370" y="304" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="318.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">R42565_XJDE0001_42803</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre étapes</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte affiche son état</text>
  <line x1="200" y1="113.0" x2="232" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="20" y="174" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="189" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étape Source</text>
  <text x="30" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">BIP · Archive · FTP</text>
  <line x1="200" y1="191.0" x2="238" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="20" y="284" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="299" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs de la source</text>
  <text x="30" y="312" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">varient selon la source</text>
  <line x1="200" y1="301.0" x2="238" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul bouton</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extraction puis traitement</text>
  <line x1="1000" y1="47.0" x2="960" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes de résultat</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vert = succès, rouge = échec</text>
  <line x1="1000" y1="167.0" x2="920" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
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
  <rect x="405" y="20" width="190" height="50" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Extraire &amp; Traiter</text>
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
  <text x="500" y="482" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source du document</text>
  <text x="500" y="500" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="430" x2="500" y2="460" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="448" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Oui</text>
  <rect x="100" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="240" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Document (XML)</text>
  <text x="240" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">SINGLE / BURST / UBL / AUTO</text>
  <rect x="620" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="760" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Document (UBL)</text>
  <text x="760" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Valider / Enregistrer / Déposer</text>
  <path d="M 410 510 L 240 510 L 240 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="320" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <path d="M 590 510 L 760 510 L 760 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="680" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <rect x="40" y="660" width="200" height="60" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 3"/>
  <text x="140" y="684" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Post-génération</text>
  <text x="140" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">mise à jour statut JDE</text>
  <rect x="410" y="660" width="180" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="684" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Résultat du traitement</text>
  <text x="500" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">bilan agrégé</text>
  <path d="M 100 580 L 60 580 L 60 690 L 40 690" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="240" y1="690" x2="410" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
  <path d="M 380 580 L 410 580 L 410 660" stroke="#94a3b8" strokeWidth="1.3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="760" y1="610" x2="590" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
</svg>

L'exécution se fait en deux temps. L'extraction écrit un fichier dans `dirInput/<template>/` ; en cas de succès, le pipeline de traitement correspondant le reprend. Tout échec à l'extraction interrompt l'enchaînement — l'étape de traitement est sautée et seul le **Résultat de l'extraction** contient un message.

---

## Source

L'étape **Source** (*Options d'extraction*) choisit l'un des trois canaux d'extraction — **BIP**, **Archive** ou **FTP** — et les champs en dessous s'adaptent à la source choisie. L'étape se termine par la ligne **Fichier d'entrée** : le nom que prendra le fichier extrait.

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

L'étape **Traitement** (*Options de traitement*) commence par le **Modèle**, c'est-à-dire le document à exécuter. Le pipeline dépend de la source du document, affichée en lecture seule juste en dessous (*Spool XML* ou *UBL — facture UBL déjà formée*), et les options qui suivent changent en conséquence. L'option **Debug profile** (`Non` / `Oui`) est proposée dans les deux cas. Tant qu'aucun document n'est choisi, la carte de l'étape affiche *Aucun document* en rouge.

### Document de source XML

Équivalent à l'exécution de la page [Traitement de document](./document.md) sur le fichier qui vient d'être extrait, quand le modèle choisi a `source = XML`.

| Champ | Description |
|---|---|
| **Template** | Template du document — obligatoire. Pilote le pipeline XSL et le jeu de règles de validation. |
| **Mode** | `AUTO`, `SINGLE`, `BURST` ou `UBL`. Voir [Traitement de document — Modes (source XML)](./document.md#modes-source-xml). |
| **Replace** | `Skip` laisse intactes les factures existantes ; `Overwrite` les ré-importe. |
| **Send to PA** | `Use settings` (défaut) ou `Skip sending`. |

Quand la source est **BIP**, un appel **Apply post-generation** supplémentaire est fait après une exécution réussie — il met à jour le statut du job JDE, généralement pour le marquer comme traité.

### Document de source UBL

Équivalent à l'exécution de la page [Traitement de document](./document.md) sur le fichier qui vient d'être extrait, quand le modèle choisi a `source = UBL`. Le fichier extrait doit déjà être au format UBL — cas typiques :

- la source **Archive** est positionnée sur la variante UBL ;
- le système amont émet directement de l'UBL ;
- la source **BIP** est positionnée sur `Extract Output` et le rapport JDE produit du XML UBL en sortie (et non du PDF). Les fichiers UBL extraits de `F95631` sont alors repris directement par le pipeline UBL — aucune transformation XSL ne s'exécute.

| Champ | Description |
|---|---|
| **Mode** | `Process & Validate` (pipeline complet) ou `Validate only`. |
| **Replace Mode** | `Overwrite existing` (défaut) ou `Skip`. |
| **Send to PA** | `Use settings`, `Force send` ou `Skip sending`. |

La clé primaire `(doc, dct, kco)` est extraite du `cbc:ID` de la facture via la regex `idPattern` du document — les fichiers peuvent avoir n'importe quel nom. Voir [Documents → Extraction de clé depuis cbc:ID](../management/documents.md#cle-du-document) pour la mise en place de la regex.

#### Combinaisons non prises en charge

| Source | Source du document | Statut |
|---|---|---|
| BIP, *Extract Mode = Both* | UBL | Non pris en charge — l'ensemble extrait contient à la fois le XML et la sortie générée, qui ne peut pas être traitée en UBL. |
| BIP, *Extract Mode = Both* avec plusieurs lignes de sortie | XML | Rejeté — l'extraction produit plusieurs fichiers, le pipeline XML attend un seul fichier par exécution. |

Un message d'erreur explicite apparaît dans l'étape **Résultat du traitement** quand l'une de ces combinaisons est tentée.

---

## Résultats

Le résultat se répartit sur les deux dernières étapes :

- **Résultat de l'extraction** — message renvoyé par l'API d'extraction ; renseigné en premier, c'est l'étape affichée pendant l'exécution.
- **Résultat du traitement** — table de logs structurée du traitement (mêmes colonnes que sur les pages *XML* et *UBL* : Sévérité / Module / Sous-module / Message) ; renseigné uniquement quand l'extraction a réussi et que le traitement s'est effectivement exécuté.

Si l'extraction échoue, l'étape de traitement est sautée — l'enchaînement s'interrompt au premier échec.

---

## Conseils & bonnes pratiques

- **Utiliser *Extraction et traitement* pour des exécutions ponctuelles.** La page combine deux opérations sur un seul écran : récupérer puis traiter un document se fait en un clic. Pour des exécutions répétées et automatisées, préférer *Synchronisation → Fetch Input* — il enchaîne le même pipeline en lot.
- **Adapter la source du document à la sortie d'extraction.** Le tableau des combinaisons ci-dessus liste les paires non prises en charge ; vérifier la cohérence entre le mode d'extraction BIP et la source du document avant de lancer l'exécution.
- **Pour un workflow piloté par BIP, choisir un document de source XML.** Ce choix déclenche `Apply post-generation` en cas de succès, qui met à jour le statut du job JDE — sans cela, le même job sera ré-extrait au tour suivant.
- **Le résultat d'extraction garde la sortie brute de l'API.** Quand une erreur survient côté extraction (job manquant, fichier introuvable, identifiants SFTP), le message renvoyé par l'API d'extraction reste le diagnostic de référence — à lire avant toute relance.
- **Skip sending pendant la mise au point d'un template.** Les deux pipelines proposent l'option (`No send` / `Skip sending`) — l'utiliser pendant le développement d'un template évite de produire des doublons de soumission PA entre les itérations.
