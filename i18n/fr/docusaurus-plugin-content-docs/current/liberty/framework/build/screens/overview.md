---
title: Écrans — vue d'ensemble
description: "La page Écrans de Liberty Next — les applications, la liste des écrans — et le Concepteur d'écran, qui se lit comme l'écran : six étapes dessinées en flux (Ce qu'il est, Données, Grille, Fiche, Actions, Sortie), chaque carte résumant ce que l'écran contient, et les colonnes en liste avec les réglages de la colonne choisie à côté."
keywords: [Liberty Framework, écrans, ScreensBuilder, Concepteur d'écran, onglets, dialogue, colonnes, actions, permissions]
---

# Écrans — vue d'ensemble

Un **écran** dans Liberty est la page que voit l'utilisateur : un tableau de lignes, des filtres optionnels, un dialogue d'ajout/modification optionnel, des actions optionnelles, un menu contextuel ligne optionnel. Un écran = une requête `<base>_get` + (optionnellement) `<base>_put` / `<base>_post` / `<base>_delete` pour les écritures + un formulaire de dialogue par-dessus.

La page qui gère les écrans est **Liberty Next → Écrans → Écrans**. Cette vue d'ensemble la cartographie ; les pages suivantes décrivent chaque tâche.

---

## La page Écrans en un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#sov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Écrans</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="216" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="256" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="306" y="78" width="240" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="426" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter une portée</text>
  <rect x="700" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="740" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="788" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="828" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>

  <rect x="40" y="120" width="828" height="32" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">🔎 Filtrer les écrans…</text>

  <rect x="40" y="168" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="190" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="76" y="208" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Clients · 2 onglets · 9 champs · 3 actions</text>
  <text x="76" y="220" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=customers_get</text>
  <rect x="700" y="180" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="762" y="180" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Dupliquer</text>
  <rect x="818" y="180" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="195" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="232" width="828" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="76" y="254" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="76" y="272" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Pipeline d'affaires · 1 onglet · 6 champs · menu contextuel</text>
  <text x="76" y="284" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">read_query=deals_get</text>
  <rect x="700" y="244" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="728" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="762" y="244" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="787" y="259" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Dupliquer</text>
  <rect x="818" y="244" width="42" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="839" y="259" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>

  <rect x="40" y="296" width="828" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="454" y="324" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter un écran (apparaît en haut de la liste)</text>
</svg>

Trois régions :

| Région | Contenu |
|---|---|
| **Barre de portée en haut** | Une puce par application (un connecteur disposant d'un menu). Cliquer sur une puce → ses écrans se chargent en dessous. Le bouton *＋ Ajouter une portée* enregistre un connecteur tout neuf dans l'espace de nommage Écrans. *Annuler* / *Enregistrer* à droite valident ou annulent les modifications de toute la page. |
| **Barre de filtre** | Un champ de recherche pour la liste d'écrans. Visible quand l'application sélectionnée comporte plus de quelques écrans. |
| **Liste des écrans** | Une carte par écran, défilement vertical. Chaque carte affiche l'identifiant, le libellé, la requête de lecture, le nombre d'onglets, le nombre de champs et les actions par carte : *Renommer*, *Dupliquer*, *Supprimer*. **Cliquer sur une carte ouvre la boîte de dialogue modale du Concepteur d'écran.** |

---

## Le Concepteur d'écran \{#designer\}

Un clic sur une carte ouvre le **Concepteur d'écran** dans une fenêtre presque plein écran. L'en-tête propose *Agrandir / Restaurer*, *Annuler* et *Enregistrer* — Enregistrer valide **les seules modifications de cet écran** et ferme la fenêtre : dans `screens.toml`, seul cet écran est réécrit, sans ses valeurs par défaut et dans l'ordre des clés du fichier, les autres écrans restant tels quels ; Annuler demande confirmation s'il reste des modifications non enregistrées.

Le concepteur **se lit comme l'écran** : six étapes dessinées en flux — **Ce qu'il est → Données → Grille → Fiche → Actions → Sortie** —, chaque carte résumant ce que l'écran contient à cet endroit. Un clic sur une carte l'ouvre ; une étape à plusieurs sections les affiche sous le flux.

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="362" rx="14" fill="url(#sds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Designer d'Écran · [screens.crm.customers]</text>
  <rect x="236" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="244" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'il est</text>
  <text x="244" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="244" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif"></text>
  <line x1="346" y1="94" x2="357" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="358" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="366" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Données</text>
  <text x="366" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="366" y="112" fill="#94a3b8" fontSize="6.6" fontFamily="system-ui, sans-serif">2 requête(s) d'enregistrement</text>
  <line x1="468" y1="94" x2="479" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="480" y="64" width="110" height="60" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="488" y="82" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Grille</text>
  <text x="488" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">9 colonne(s)</text>
  <text x="488" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="590" y1="94" x2="601" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="602" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="610" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fiche</text>
  <text x="610" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="610" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">9 champ(s)</text>
  <line x1="712" y1="94" x2="723" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="724" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="732" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="732" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">1 action(s) de barre</text>
  <text x="732" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne</text>
  <line x1="834" y1="94" x2="845" y2="94" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sds-flow)"/>
  <rect x="846" y="64" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="854" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sortie</text>
  <text x="854" y="98" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <text x="854" y="112" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif"></text>
  <rect x="480" y="134" width="162" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="481" y="135" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="512.0" y="148.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <line x1="544" y1="139" x2="544" y2="151" stroke="#334155" strokeWidth="1"/>
  <text x="566.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <line x1="588" y1="139" x2="588" y2="151" stroke="#334155" strokeWidth="1"/>
  <text x="615.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <rect x="240" y="170" width="330" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="180" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="194.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">filtrer 9 colonnes…</text>
  <rect x="458" y="180" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="509.0" y="194.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <rect x="248" y="212" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="227.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="227.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">ID</text>
  <text x="354" y="227.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Numéro</text>
  <rect x="416" y="216" width="30" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="431.0" y="227.2" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">clé</text>
  <rect x="248" y="242" width="314" height="24" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="257.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="257.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="354" y="257.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="416" y="246" width="43" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="437.5" y="257.2" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre</text>
  <rect x="463" y="246" width="64" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="495.0" y="257.2" fill="#c084fc" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">obligatoire</text>
  <rect x="248" y="272" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="287.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="287.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="354" y="287.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="416" y="276" width="43" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="437.5" y="287.2" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre</text>
  <rect x="463" y="276" width="35" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="480.5" y="287.2" fill="#c084fc" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ENUM</text>
  <rect x="248" y="302" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="317.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="317.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="354" y="317.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Plafond</text>
  <rect x="416" y="306" width="52" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="442.0" y="317.2" fill="#fb923c" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sensible</text>
  <rect x="248" y="332" width="314" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="347.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="347.5" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="354" y="347.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Modifié le</text>
  <rect x="416" y="336" width="73" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="452.5" y="347.2" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">lecture seule</text>
  <rect x="582" y="170" width="378" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="596" y="190" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="596" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="596" y="218" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="232.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="776" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="776" y="218" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="786" y="232.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Text ▾</text>
  <rect x="596" y="263" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M598.5,268.5 L600.8,270.8 L604.8,266" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="613" y="272" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Filtre</text>
  <rect x="682" y="263" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M684.5,268.5 L686.8,270.8 L690.8,266" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="699" y="272" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Obligatoire</text>
  <rect x="796" y="263" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="813" y="272" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Masquée</text>
  <text x="596" y="300" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CARD</text>
  <rect x="596" y="306" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="320.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">title ▾</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six étapes, en flux</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte résume son contenu</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les colonnes, en liste</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">glisser pour réordonner, filtrer</text>
  <line x1="200" y1="217.0" x2="248" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'essentiel d'un coup d'œil</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé, filtre, obligatoire, règle…</text>
  <line x1="200" y1="317.0" x2="248" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En orange si rien n'est réglé</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas de lecture ou d'enregistrement</text>
  <line x1="200" y1="145.0" x2="368" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1000" y="134" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="149" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections d'une étape</text>
  <text x="1010" y="162" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Colonnes · Vues · Résumé</text>
  <line x1="1000" y1="151.0" x2="642" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1000" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La colonne choisie</text>
  <text x="1010" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses réglages à côté de la liste</text>
  <line x1="1000" y1="277.0" x2="960" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
</svg>

| Étape | Sections | La carte indique | Contenu |
|---|---|---|---|
| **Ce qu'il est** | Général | Le libellé de l'écran, *lecture seule*. | Identité, surcharge du connecteur, table d'audit, plafond de lignes, colonnes clés, indicateurs de comportement (chargement automatique, éditable, importable), regroupement, vue arborescente, graphique par défaut, comportement au clic sur une ligne. |
| **Données** | Requêtes | La requête de lecture et le nombre de requêtes d'enregistrement — en **orange** si aucune requête de lecture n'est réglée, ou si un écran modifiable n'a rien pour enregistrer. | La lecture (obligatoire), la mise à jour, l'insertion et la suppression — des requêtes du connecteur, ou des [points d'accès d'API](./api-screens.md) ; **Enregistre par** pour un écran lu en SQL et enregistré par une API. |
| **Grille** | Colonnes · Vues · Résumé | Le nombre de colonnes, de filtres et de vues, *une synthèse*. | Les colonnes ; les [vues](../../saved-views.md) partagées de la grille ; les colonnes de regroupement de la [vue Résumé](../../saved-views.md#summary). |
| **Fiche** | Dialogue | Le nombre d'onglets et de champs, ou *pas de fiche*. | Le **Constructeur visuel** — Palette / Canevas / Inspecteur — où les champs se glissent sur des onglets. Optionnel : un écran sans fiche fonctionne comme un tableau en lecture seule ou en édition de grille. |
| **Actions** | Actions · Menu de ligne | Les actions de la barre d'outils, celles du menu de ligne, celles de l'enregistrement et du chargement. | *Hooks de dialogue* (on_load / on_save / on_cancel), boutons de la *Barre d'outils*, *Hooks de ligne* (on_insert / on_update / on_delete), et le menu contextuel de la ligne. |
| **Sortie** | Export | *export : N feuille(s)*, ou *l'export de la grille*. | L'export xlsx multi-feuilles — optionnel. |

### Les colonnes \{#columns-list\}

**Grille → Colonnes** est une liste, avec les réglages de la colonne choisie à côté. Chaque ligne donne le nom de la colonne, son libellé — celui de l'écran, sinon celui du dictionnaire — et l'essentiel, visible sans l'ouvrir : *clé*, *filtre*, *masquée*, *obligatoire*, *lecture seule*, *sensible*, et sa règle. Une ligne se fait glisser pour changer l'ordre, la zone de filtre réduit la liste, **Ajouter une colonne** en ajoute une, la croix en retire une. Les réglages sont ceux de la page [Colonnes](./columns.md) ; les règles imbriquées s'ouvrent dans le même panneau.

Les pages suivantes de cette section décrivent chaque étape comme une tâche distincte.

---

## Ce que porte un écran

Les champs de premier niveau du schéma, regroupés par finalité :

| Groupe | Champs |
|---|---|
| **Identité** | `id`, `label`, `description`, `connector` *(vide = le connecteur de l'application)* |
| **Requête de lecture** | `read_query` (obligatoire), `auto_load`, `max_rows`, `page_size` (lignes par page de la grille ; vide = la valeur de l'application), `key_columns` |
| **Requêtes d'écriture** | `update_query`, `insert_query`, `delete_query` |
| **Édition et affichage** | `columns`, `column_groups`, `editable`, `editable_when`, `read_only` (un clic sur une ligne ouvre le dialogue en consultation — ni enregistrement, ni verrou —, ses onglets de détail se chargeant à partir de la ligne), `disable_add`, `uploadable`, `initial_group_by`, `treeview`, `chart_id` |
| **Vues et résumé** | `views` (vues partagées), `summary`, `value_diff` |
| **Paquets de modifications** | `change_tracked`, `change_entity`, `post_apply` — voir [Paquets de modifications](../../../nomaflow/change-packages.md) |
| **Audit** | `audit_table` (ex. `AUD_USERS` — duplique les écritures avec AUD_ACTION / AUD_USER / AUD_DATE) |
| **Formulaire** | `dialog` *(optionnel — le formulaire posé sur le tableau)* |
| **Actions / hooks** | `actions` (barre d'outils), `row_menu` (clic droit), `on_insert` / `on_update` / `on_delete` / `on_duplicate` (hooks de ligne) |
| **Cible au clic sur une ligne** | `row_click_screen` + `row_click_connector` + `row_click_binds` *(ouvre un écran voisin comme dialogue)* OU `row_click_route` *(ouvre une route SPA)* |
| **Export** | `export` *(configuration du classeur xlsx)* |

---

## Mode lecture seule

Activez **Lecture seule** sur un écran (une case à cocher de l'étape *Ce qu'il est*) pour rendre toute la vue non modifiable. Cela masque les boutons *Enregistrer*, *Supprimer* et *Dupliquer* du dialogue, les boutons *Ajouter* et *Supprimer la sélection* de la grille, l'édition de cellule en ligne, le collage et l'import Excel — dans les éditeurs de tables imbriquées aussi. C'est plus fort que *Désactiver l'ajout* (qui ne bloque que les insertions) : c'est le bon réglage pour un écran de référence ou d'audit qui ne doit jamais être modifié depuis l'interface. Les permissions côté serveur s'appliquent en plus, indépendamment.

---

## Types d'écrans — selon les champs renseignés

Il n'y a pas de discriminant `kind` ; les différentes formes d'écran proviennent des champs que l'on remplit :

| Champs renseignés | Comportement |
|---|---|
| `read_query` seul | Grille en lecture seule. L'utilisateur voit les lignes ; pas d'édition, pas d'ajout. |
| `read_query` + `editable = true` | Modification dans la grille — [Modifier en lot](../../bulk-edit.md) : cellules modifiées sur place, lignes ajoutées, clonées, collées ou supprimées, le bouton *Enregistrer* de la grille écrivant l'ensemble. Nécessite `update_query` ou `insert_query`. |
| `read_query` + `dialog` | Grille + dialogue. L'utilisateur ajoute/modifie les lignes via le formulaire. Nécessite les `insert_query` / `update_query` correspondantes. |
| `read_query` + `row_click_screen` | Maître/détail. Cliquer sur une ligne ouvre le dialogue d'un écran voisin restreint à cette ligne. |
| `read_query` + `row_click_route` | Maître/page. Cliquer sur une ligne navigue vers une route SPA — échappatoire pour les pages React écrites à la main (logs diffusés en direct, fusions multi-sources). |
| Tout ce qui précède + `treeview` | Bascule en vue arborescente en complément des bascules Tableau / Graphique par défaut. Les colonnes parent/enfant construisent un arbre récursif. |

Un même écran peut superposer plusieurs : un écran avec `dialog` ET `row_click_route` ouvre la route au clic (la route gagne), et le dialogue n'est accessible que via le bouton *＋ Ajouter* de la barre d'outils.

---

## Permissions — pilotées par la requête de lecture

L'écran lui-même **n'a pas** sa propre chaîne de permission. Un utilisateur peut voir un écran quand il a la permission d'exécuter sa **requête de lecture** :

```
sql:<connector>:<read_query>
```

Ainsi, un écran `customers` sur le connecteur `crm` avec `read_query = customers_get` est visible par toute personne disposant de `sql:crm:customers_get`. Accorder `sql:crm:*` ouvre toutes les requêtes du connecteur — et donc tous les écrans qui les utilisent.

La même logique s'applique aux écritures : le *Enregistrer* du dialogue et le *Enregistrer* de la grille n'aboutissent que si l'utilisateur a `sql:<connector>:<update_query>` / `<insert_query>` / `<delete_query>`. Un utilisateur avec la lecture mais sans permission d'écriture voit la grille mais pas de bouton *＋ Ajouter* et obtient un dialogue en lecture seule.

---

## Enregistrement et rechargement

Le bouton *Enregistrer* de la page Écrans écrit l'intégralité de `screens.toml` (la table `[screens]` est remplacée intégralement) et déclenche un rechargement à chaud. La bannière de statut indique quelles applications ont été touchées.

Le rechargement à chaud signifie **aucun redémarrage de processus** — un nouvel écran est appelable immédiatement à `/screen/<app>/<id>`, et le menu le prend en compte si une entrée de menu pointe sur lui.

---

## Ce que l'on fait concrètement — carte rapide

| Objectif | Lire |
|---|---|
| Câbler un nouvel écran sur une requête `_get` et voir la grille. | [Créer un écran à partir d'une requête](./create-from-query.md). |
| Configurer les colonnes — libellés, formats, valeurs par défaut, filtrage. | [Colonnes](./columns.md). |
| Construire le dialogue d'ajout/modification avec le concepteur visuel. | [Constructeur de dialogue](./dialog-builder.md). |
| Faire apparaître / rendre obligatoires / verrouiller des champs sous conditions. | [Champs conditionnels](./conditional-fields.md). |
| Ajouter des boutons de barre d'outils, des menus contextuels et des hooks de cycle de vie. | [Actions et cycle de vie](./actions-and-lifecycle.md). |
| Intégrer un formulaire d'enregistrement enfant ou une grille de lignes liées dans un onglet. | [Onglets imbriqués](./nested-tabs.md). |

---

## Étapes suivantes

- [Créer un écran à partir d'une requête](./create-from-query.md) — démarrer avec un `_get`, voir la grille.
- [Concepts → Écrans](./overview.md) — la référence approfondie derrière cette page.
