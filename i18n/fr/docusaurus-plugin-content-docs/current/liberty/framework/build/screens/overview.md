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

<svg viewBox="0 0 1320 362" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="318" rx="14" fill="url(#scl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="47" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="47" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Écrans</text>
  <rect x="957" y="33" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1019.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="94" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Connecteur :</text>
  <rect x="306.48" y="82" width="35" height="20" rx="10" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="323.98" y="95.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="346.48" y="82" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="373.98" y="95.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="406.48" y="82" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="433.98" y="95.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="466.48" y="82" width="120" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="526.48" y="95.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une portée</text>
  <rect x="1007" y="80" width="75" height="22" rx="5" fill="url(#scl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1044.5" y="94.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="921" y="80" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="961.0" y="94.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <rect x="805" y="80" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.0" y="94.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un écran</text>
  <rect x="238" y="114" width="844" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="129.3" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Filtrer…</text>
  <rect x="238" y="144" width="844" height="182" rx="10" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="150" width="828" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="180" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="167" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="280" y="180" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="280" y="192" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">crm.customers_get · 2 onglets · 8 champs · 2 entrées de menu de ligne</text>
  <rect x="1009" y="164" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1036.5" y="178.5" fill="#f87171" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="955" y="164" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Cloner</text>
  <rect x="892" y="164" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="921.5" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="746" y="164" width="142" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Rechercher les dépendances</text>
  <rect x="623" y="164" width="119" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="682.5" y="178.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Rechercher les usages</text>
  <rect x="246" y="208" width="828" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="238" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="225" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="280" y="238" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="280" y="250" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">crm.deals_get · 1 onglet · 6 champs</text>
  <rect x="1009" y="222" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1036.5" y="236.5" fill="#f87171" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="955" y="222" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Cloner</text>
  <rect x="892" y="222" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="921.5" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="746" y="222" width="142" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Rechercher les dépendances</text>
  <rect x="623" y="222" width="119" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="682.5" y="236.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Rechercher les usages</text>
  <rect x="246" y="266" width="828" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="296" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="283" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">orders</text>
  <text x="280" y="296" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="280" y="308" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">crm.orders_get · 0 onglet · 0 champ</text>
  <rect x="1009" y="280" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1036.5" y="294.5" fill="#f87171" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="955" y="280" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Cloner</text>
  <rect x="892" y="280" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="921.5" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="746" y="280" width="142" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Rechercher les dépendances</text>
  <rect x="623" y="280" width="119" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="682.5" y="294.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Rechercher les usages</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une pastille par application</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses écrans s'affichent dessous</text>
  <line x1="200" y1="93.0" x2="306.48" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="20" y="146" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="161" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une carte</text>
  <text x="30" y="174" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le Concepteur d'écran</text>
  <line x1="200" y1="163.0" x2="278" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que contient l'écran</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête de lecture · onglets · champs</text>
  <line x1="200" y1="213.0" x2="278" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">relit les fichiers</text>
  <line x1="1120" y1="43.0" x2="1040" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="1120" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un écran</text>
  <text x="1130" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">demande son identifiant</text>
  <line x1="1120" y1="99.0" x2="860.0" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
  <rect x="1120" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usages et dépendances</text>
  <text x="1130" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avant de renommer ou supprimer</text>
  <line x1="1120" y1="223.0" x2="643" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scl-arrow)"/>
</svg>

Trois régions :

| Région | Contenu |
|---|---|
| **En-tête** | Le titre de la page et **Recharger la config**, qui relit les fichiers de configuration. |
| **Barre des connecteurs** | Une pastille par application qui a des écrans ; un clic charge ses écrans en dessous. **＋ Ajouter une portée** ouvre les écrans à un connecteur qui n'en a pas. À droite, **Ajouter un écran** (demande l'identifiant du nouvel écran), **Abandonner** et **Enregistrer** pour les modifications de la page. Dessous, **Filtrer…** réduit la liste. |
| **Liste des écrans** | Une carte par écran : son identifiant, son libellé, puis sa requête de lecture (`<connecteur>.<requête>`) avec le nombre d'onglets, de champs et d'entrées du menu de ligne. Chaque carte porte **Rechercher les usages**, **Rechercher les dépendances**, **Renommer**, **Cloner** et **Supprimer**. **Un clic sur la carte ouvre le Concepteur d'écran.** |

---

## Le Concepteur d'écran \{#designer\}

Un clic sur une carte ouvre le **Concepteur d'écran** dans une fenêtre presque plein écran. La barre de titre nomme l'écran (`[screens.<app>.<id>]`) et porte le bouton *Restaurer / Agrandir* et **Annuler** ; la barre du bas porte **Annuler** et **Enregistrer** — Enregistrer valide **les seules modifications de cet écran** et ferme la fenêtre : dans `screens.toml`, seul cet écran est réécrit, sans ses valeurs par défaut et dans l'ordre des clés du fichier, les autres écrans restant tels quels ; Annuler demande confirmation s'il reste des modifications non enregistrées.

Le concepteur **se lit comme l'écran** : six étapes dessinées en flux — **Ce qu'il est → Données → Grille → Fiche → Actions → Sortie** —, chaque carte résumant ce que l'écran contient à cet endroit. Un clic sur une carte l'ouvre ; une étape à plusieurs sections les affiche sous le flux.

<svg viewBox="0 0 1320 550" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="514" rx="14" fill="url(#sds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran ·</text>
  <text x="367.648" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1011" y="32" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="981" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="993.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#sds-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <rect x="238" y="146" width="162" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="239" y="147" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="270.0" y="160.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <line x1="302" y1="151" x2="302" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="324.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <line x1="346" y1="151" x2="346" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="373.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <rect x="238" y="180" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="200" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="194" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="260" y="206" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Client</text>
  <rect x="472" y="188.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="492.0" y="199.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filtre</text>
  <rect x="442" y="188.5" width="26" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="455.0" y="199.3" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">clé</text>
  <text x="526" y="200" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="218" width="300" height="32" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="247" y="238" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="232" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="260" y="244" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="449" y="226.5" width="63" height="15" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.45)" strokeWidth="1"/>
  <text x="480.5" y="237.3" fill="#c084fc" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">obligatoire</text>
  <rect x="405" y="226.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="425.0" y="237.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filtre</text>
  <text x="526" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="256" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="276" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="270" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="260" y="282" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Pays</text>
  <rect x="472" y="264.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="492.0" y="275.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filtre</text>
  <text x="526" y="276" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="294" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="314" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="308" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="260" y="320" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="472" y="302.5" width="40" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="492.0" y="313.3" fill="#4ade80" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">filtre</text>
  <text x="526" y="314" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="332" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="352" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="346" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="260" y="358" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Encours autorisé</text>
  <rect x="463" y="340.5" width="49" height="15" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="487.5" y="351.3" fill="#fb923c" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">sensible</text>
  <text x="526" y="352" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="370" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="390" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="384" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="260" y="396" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Modifié le</text>
  <rect x="468" y="378.5" width="44" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="#475569" strokeWidth="1"/>
  <text x="490.0" y="389.3" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">masquée</text>
  <text x="526" y="390" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="410" width="119" height="20" rx="5" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="248" y="423.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+ Ajouter une colonne</text>
  <rect x="554" y="180" width="528" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="564" y="190" width="508" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="574" y="206" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="588" y="206" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">NAME</text>
  <rect x="564" y="222" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="590.5" y="236.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="647.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="702.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="752.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="797.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="850.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <line x1="564" y1="250" x2="1072" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="566" y="266" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME ∗</text>
  <rect x="566" y="271" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="285.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="566" y="305" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Result column this entry applies to (case-insensitive match).</text>
  <text x="566" y="324" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DD</text>
  <rect x="566" y="329" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="343.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="343.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="566" y="363" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Inherit label / format / rule from this dictionary entry.</text>
  <text x="566" y="382" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="566" y="391" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="583" y="400" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="566" y="424" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SENSITIVE</text>
  <rect x="566" y="429" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="443.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="443.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="220" y1="492" x2="1100" y2="492" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="502" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1036.0" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="502" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six étapes, en flux</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte dit ce qu'elle contient</text>
  <line x1="200" y1="99.0" x2="238" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="188" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="203" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les colonnes, en liste</text>
  <text x="30" y="216" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">glisser ⠿ ; ✕ pour retirer</text>
  <line x1="200" y1="205.0" x2="244" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les marques utiles</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé, filtre, obligatoire, masquée…</text>
  <line x1="200" y1="317.0" x2="478" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une colonne</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">de la requête de lecture</text>
  <line x1="200" y1="417.0" x2="244" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections de l'étape</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Colonnes · Vues · Résumé</text>
  <line x1="1120" y1="177.0" x2="420" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La colonne choisie</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses réglages, en onglets</text>
  <line x1="1120" y1="227.0" x2="879" y2="233" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
  <rect x="1120" y="484" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="499" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistre cet écran seul</text>
  <text x="1130" y="512" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Annuler demande confirmation</text>
  <line x1="1120" y1="501.0" x2="1040" y2="514" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sds-arrow)"/>
</svg>

| Étape | Sections | La carte indique | Contenu |
|---|---|---|---|
| **Ce qu'il est** | Général | Le libellé de l'écran, *lecture seule*. | Identité (libellé et description, chacun aussi dans les autres langues), surcharge du connecteur, table d'audit, plafond de lignes, colonnes clés, indicateurs de comportement (chargement automatique, éditable, importable), regroupement, vue arborescente, graphique par défaut, comportement au clic sur une ligne. |
| **Données** | Requêtes | La requête de lecture et le nombre de requêtes d'enregistrement — en **orange** si aucune requête de lecture n'est réglée, ou si un écran modifiable n'a rien pour enregistrer. | La lecture (obligatoire), la mise à jour, l'insertion et la suppression — des requêtes du connecteur, ou des [points d'accès d'API](./api-screens.md) ; **Enregistre par** pour un écran lu en SQL et enregistré par une API. |
| **Grille** | Colonnes · Vues · Résumé | Le nombre de colonnes, de filtres et de vues, *une synthèse*. | Les colonnes ; les [vues](../../saved-views.md) partagées de la grille ; les colonnes de regroupement de la [vue Résumé](../../saved-views.md#summary). |
| **Fiche** | Dialogue | Le nombre d'onglets et de champs, ou *pas de fiche*. | Le constructeur visuel — **Ajouter un champ** / **Dialogue** / **Inspecteur** — où les champs s'ajoutent aux onglets. Optionnel : un écran sans fiche fonctionne comme un tableau en lecture seule ou en édition de grille. |
| **Actions** | Actions · Menu de ligne | Les actions de la barre d'outils, celles du menu de ligne, celles de l'enregistrement et du chargement. | *Hooks de dialogue* (on_load / on_save / on_cancel), boutons de la *Barre d'outils*, *Hooks de ligne* (on_insert / on_update / on_delete / on_duplicate), et le menu contextuel de la ligne. |
| **Sortie** | Export | *export : N feuille(s)*, ou *l'export de la grille*. | L'export xlsx multi-feuilles — optionnel. |

### Les colonnes \{#columns-list\}

**Grille → Colonnes** est une liste, avec les réglages de la colonne choisie à côté. Chaque ligne donne le nom de la colonne, son libellé — celui de l'écran, sinon celui du dictionnaire — et l'essentiel, visible sans l'ouvrir : *clé*, *filtre*, *masquée*, *obligatoire*, *lecture seule*, *sensible*, et sa règle. Une ligne se déplace par sa poignée, **Ajouter une colonne** en ajoute une, la croix en retire une ; au-delà de six colonnes, une zone de filtre réduit la liste (le déplacement est alors désactivé). À côté de la liste, les réglages de la colonne choisie se répartissent en six onglets — **General**, **Display**, **Filter**, **Rules**, **Edit**, **Defaults** —, décrits sur la page [Colonnes](./columns.md) ; une condition ou une règle imbriquée s'ouvre dans le même panneau, avec un fil d'Ariane pour revenir à la colonne.

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
