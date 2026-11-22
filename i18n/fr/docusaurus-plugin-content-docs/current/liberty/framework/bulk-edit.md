---
title: Modifier en lot
description: "Modifier les lignes d'un écran directement dans la grille — cellules, ajout, clonage, copie, collage et suppression de lignes, collage depuis Excel ou import d'un fichier — puis écrire l'ensemble des changements en un seul enregistrement, actions de ligne comprises."
keywords: [Liberty Next, modifier en lot, saisie en masse, grille, modification sur place, ajouter une ligne, cloner la ligne, copier, coller, coller depuis Excel, supprimer la sélection, import, SEQUENCE, on_duplicate, editable]
---

# Modifier en lot

**Modifier en lot** transforme la grille d'un écran en éditeur : les cellules se modifient sur place, les lignes s'ajoutent, se clonent, se copient, se collent ou se marquent pour suppression, et un seul **Enregistrer** écrit l'ensemble — avec les mêmes requêtes que la fenêtre de saisie et les mêmes actions de ligne.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bke-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bke-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bke-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bke-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="346" rx="14" fill="url(#bke-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="317.45" y="35" width="40" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="337.45" y="45.8" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <line x1="220" y1="70" x2="1100" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238" y="82" width="90" height="22" rx="5" fill="url(#bke-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="283.0" y="96.5" fill="#e2e8f0" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer (3)</text>
  <rect x="333" y="82" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="363.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="399" y="82" width="109" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="453.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="513" y="82" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="550.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Copier (1)</text>
  <rect x="593" y="82" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="630.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Coller (1)</text>
  <rect x="673" y="82" width="143" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="744.5" y="96.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer la sélection (1)</text>
  <rect x="825" y="82" width="187" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="834" y="96.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="1020" y="82" width="62" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1051.0" y="96.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="238" y="112" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="261.0" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="289" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="319.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="355" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="385.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞ Grouper</text>
  <rect x="421" y="112" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="454.0" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="492" y="112" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="529.5" y="126.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Exporter ▾</text>
  <rect x="238" y="146" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="340" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CLIENT</text>
  <text x="430" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DU CLIENT</text>
  <text x="650" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PAYS</text>
  <text x="760" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="910" y="163" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SOCIÉTÉ</text>
  <rect x="247" y="154" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <rect x="238" y="176" width="844" height="32" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="187" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="196" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="286" y="183" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="183" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="195.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="336" y="182" width="76" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="426" y="182" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="435" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="646" y="182" width="96" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="756" y="182" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="880" y="195.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="906" y="182" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="915" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">00001</text>
  <rect x="238" y="212" width="844" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="223" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="232" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="286" y="219" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="231.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="219" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="231.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="340" y="232" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1002</text>
  <rect x="426" y="218" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="435" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="646" y="218" width="96" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="756" y="218" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Prospect</text>
  <text x="880" y="231.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="906" y="218" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="915" y="231.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">00001</text>
  <rect x="238" y="248" width="844" height="32" rx="4" fill="rgba(255,69,58,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="259" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="268" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <rect x="286" y="255" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="267.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="255" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="267.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="340" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">1003</text>
  <line x1="340" y1="265" x2="362.32" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="430" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Gamma SA</text>
  <line x1="430" y1="265" x2="474.64" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="650" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">CH</text>
  <line x1="650" y1="265" x2="661.16" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="760" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Inactif</text>
  <line x1="760" y1="265" x2="799.06" y2="265" stroke="#64748b" strokeWidth="1"/>
  <text x="910" y="268" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">00002</text>
  <line x1="910" y1="265" x2="937.9" y2="265" stroke="#64748b" strokeWidth="1"/>
  <rect x="238" y="284" width="844" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="295" width="10" height="10" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="286" y="291" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="303.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="308" y="291" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="317.0" y="303.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="340" y="304" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1004</text>
  <rect x="426" y="290" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="435" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Delta GmbH</text>
  <rect x="646" y="290" width="96" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">DE</text>
  <rect x="756" y="290" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="880" y="303.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="906" y="290" width="136" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="915" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">00001</text>
  <rect x="238" y="320" width="844" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="247" y="331" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="274" y="340" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="340" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1005</text>
  <text x="430" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Epsilon SpA</text>
  <text x="650" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">IT</text>
  <text x="760" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Clôturé</text>
  <text x="910" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00002</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre de la modification en lot</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Enregistrer écrit tout</text>
  <line x1="200" y1="87.0" x2="238" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="20" y="175" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="190" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle ligne</text>
  <text x="30" y="203" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajoutée en haut</text>
  <line x1="200" y1="192.0" x2="268" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="20" y="247" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="262" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marquée pour suppression</text>
  <text x="30" y="275" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">supprimée à l'enregistrement</text>
  <line x1="200" y1="264.0" x2="268" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="20" y="326" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne en lecture seule</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exclue par editable_when</text>
  <line x1="200" y1="343.0" x2="268" y2="336" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1120" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copier · Coller · Supprimer</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur les lignes cochées</text>
  <line x1="1120" y1="87.0" x2="796" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1120" y="211" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="226" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne modifiée</text>
  <text x="1130" y="239" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cellules modifiées sur place</text>
  <line x1="1120" y1="228.0" x2="1070" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1120" y="283" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="298" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner la ligne ⧉</text>
  <text x="1130" y="311" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une clé de séquence reste vide</text>
  <line x1="1120" y1="300.0" x2="295" y2="295" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
</svg>

---

## Ouvrir la modification en lot \{#open\}

La barre d'outils de la grille propose **Modifier en lot** dès que l'écran dispose d'une requête de mise à jour ou d'insertion — **Modifier** sur un écran sans fenêtre de saisie. Le bouton n'apparaît pas sur un écran en [lecture seule](./build/screens/overview.md) ni sur un écran dont le réglage `editable` est désactivé ; les permissions du serveur s'appliquent en plus.

En modification en lot, la barre d'outils devient :

| Bouton | Effet |
|---|---|
| **Enregistrer (n)** | Écrit les changements en attente ; *n* compte les lignes modifiées, nouvelles et à supprimer. |
| **Annuler** | Abandonne tous les changements en attente et quitte la modification en lot. |
| **Ajouter une ligne** | Ajoute une ligne vide en tête de la grille, garnie des valeurs par défaut des colonnes. |
| **Importer** | Charge un fichier Excel ou CSV dans la grille — voir [Importer un fichier](#import). Présent quand l'écran autorise l'import. |
| **Copier (n)** | Copie les lignes cochées. |
| **Coller (n)** | Ajoute les lignes copiées comme nouvelles lignes. |
| **Supprimer la sélection (n)** | Marque les lignes cochées pour suppression ; une nouvelle ligne cochée est simplement retirée. |

**Ajouter une ligne**, **Coller**, **Cloner la ligne** et **Importer** nécessitent une requête d'insertion et disparaissent quand l'écran interdit l'ajout. Une actualisation de la grille met fin à la modification en lot sans rien enregistrer ; les lignes copiées restent disponibles.

## Lignes et cellules \{#rows\}

Chaque ligne commence par une case à cocher, un repère et deux boutons :

| Élément | Signification |
|---|---|
| **+** | Une nouvelle ligne, pas encore écrite. |
| **●** | Une ligne existante dont des cellules ont été modifiées. |
| **−** | Une ligne marquée pour suppression. |
| **Cloner la ligne** | Ajoute une copie de la ligne en tête — voir [Cloner, copier et coller](#clone). |
| **×** | Marque la ligne pour suppression (un second clic annule) ; sur une nouvelle ligne, la retire. |
| Cadenas | La ligne est en lecture seule : la règle `editable_when` de l'écran l'exclut, ses cellules restent en affichage simple et elle ne peut pas être supprimée. |

Une cellule reste en lecture seule quand sa colonne est désactivée — `disabled`, ou `disabled_when` selon les valeurs de la ligne —, ou verrouillée pour ce type de ligne : `disable_on_add` sur une nouvelle ligne, `disable_on_edit` sur une ligne existante. Voir [Champs conditionnels](./build/screens/conditional-fields.md).

## Cloner, copier et coller \{#clone\}

**Cloner la ligne**, comme **Coller** des lignes copiées, ajoute de nouvelles lignes qui reprennent toutes les valeurs de la ligne source, clés comprises : il suffit ensuite de changer la valeur qui diffère. Seule exception, une colonne alimentée par une règle `SEQUENCE` reste vide, et l'insertion prend un nouveau numéro dans la séquence ; les tables liées un-à-un de l'écran suivent cette nouvelle clé.

Une ligne issue d'un clonage ou d'un collage est un duplicata : à l'enregistrement, elle déclenche l'action `on_duplicate` de l'écran, avec les valeurs de la ligne source sous `SOURCE_<colonne>`, exactement comme le bouton **Dupliquer** de la fenêtre de saisie — voir [Actions et cycle de vie](./build/screens/actions-and-lifecycle.md).

## Coller depuis Excel \{#paste-excel\}

Des cellules copiées depuis Excel (ou tout texte séparé par des tabulations) puis collées dans la grille, sans cellule en cours de saisie, deviennent de nouvelles lignes :

- si la première ligne collée reprend au moins deux en-têtes de colonnes, elle sert de ligne d'en-têtes et chaque valeur rejoint la colonne du même nom, quel que soit l'ordre ;
- sinon, les valeurs suivent l'ordre des colonnes visibles, celui d'un export de la grille.

Une colonne dotée d'un lookup renseigne ses colonnes dépendantes à partir du code collé, comme si le code avait été choisi dans la liste.

## Importer un fichier \{#import\}

En modification en lot, **Importer** lit un fichier Excel ou CSV dont la première ligne porte les en-têtes de colonnes. Une ligne dont les colonnes clés correspondent à une ligne déjà présente dans la grille devient une modification de celle-ci ; les autres deviennent de nouvelles lignes. Rien n'est écrit avant **Enregistrer** : le résultat peut être relu et corrigé au préalable.

Hors modification en lot, le bouton **Importer** de la barre d'outils ouvre la fenêtre d'import, qui contrôle chaque ligne selon les règles de l'écran avant d'enregistrer — voir [Import en masse](./cookbook/bulk-import.md).

## Enregistrer \{#save\}

**Enregistrer** écrit les lignes en une seule passe :

- chaque ligne modifiée par la requête de mise à jour, chaque nouvelle ligne par la requête d'insertion, chaque ligne à supprimer par la requête de suppression — avec les colonnes stockées dans les tables liées un-à-un de l'écran ;
- une colonne dont la valeur par défaut est imposée par une condition (`default_when`) est écrite avec cette valeur, même si sa cellule n'a pas été modifiée ;
- puis, ligne par ligne, les actions : `on_update`, `on_insert` (ou `on_duplicate` pour une ligne clonée ou collée) et `on_delete`.

En cas d'échec d'une écriture ou d'une action, le message s'affiche et la modification en lot reste ouverte. Après un enregistrement réussi, la modification en lot se ferme et la grille se recharge.
