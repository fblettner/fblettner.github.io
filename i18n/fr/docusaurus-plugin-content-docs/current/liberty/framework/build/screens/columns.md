---
title: Colonnes
description: "Les colonnes d'un écran Liberty Next, dans le Concepteur d'écran (Grille → Colonnes) — définir une fois le titre d'affichage, le format, la référence dictionnaire, la règle d'édition, la valeur par défaut et le filtrage de chaque colonne ; la grille et le dialogue les utilisent tous deux."
keywords: [Liberty Framework, colonnes, ColumnHint, dictionnaire, format, lookup, filtre, masqué, clé, valeur par défaut]
---

# Colonnes

**Grille → Colonnes**, dans le [Concepteur d'écran](./overview.md#designer), est l'endroit où l'on définit les métadonnées par colonne : comment la colonne s'affiche dans la grille, comment elle apparaît dans le formulaire de dialogue, si elle filtre, si elle est obligatoire, si elle fait partie de la clé primaire de la ligne. On configure chaque colonne une fois — les deux surfaces (grille et dialogue) utilisent la même configuration.

---

## Les colonnes en un coup d'œil

<svg viewBox="0 0 1320 550" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="514" rx="14" fill="url(#scol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#scol-flow)"/>
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
  <rect x="238" y="218" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
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
  <rect x="238" y="294" width="300" height="32" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
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
  <text x="588" y="206" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="590.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="621" y="222" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="647.5" y="236.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="702.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="752.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="797.5" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="850.0" y="236.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <line x1="564" y1="250" x2="1072" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="566" y="266" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="566" y="271" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="566" y="305" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Display title in the grid header and the dialog field.</text>
  <text x="566" y="322" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HIDDEN</text>
  <rect x="566" y="331" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="583" y="340" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="566" y="362" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="566" y="367" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="381.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="381.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="566" y="406" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ALIGN</text>
  <rect x="566" y="411" width="247" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="425.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="801" y="425.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="823" y="406" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WIDTH</text>
  <rect x="823" y="411" width="247" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="566" y="450" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WRAP · CARD · COLSPAN · DRILL …</text>
  <line x1="220" y1="492" x2="1100" y2="492" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="502" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1036.0" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="502" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="516.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six étapes, en flux</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte dit ce qu'elle contient</text>
  <line x1="200" y1="99.0" x2="238" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="20" y="188" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="203" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les colonnes, en liste</text>
  <text x="30" y="216" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">glisser ⠿ ; ✕ pour retirer</text>
  <line x1="200" y1="205.0" x2="244" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les marques utiles</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé, filtre, obligatoire, masquée…</text>
  <line x1="200" y1="317.0" x2="478" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une colonne</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">de la requête de lecture</text>
  <line x1="200" y1="417.0" x2="244" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections de l'étape</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Colonnes · Vues · Résumé</text>
  <line x1="1120" y1="177.0" x2="420" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six onglets de réglages</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Général, affichage, filtre, règles…</text>
  <line x1="1120" y1="227.0" x2="879" y2="233" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affichage dans la grille</text>
  <text x="1130" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé, masquage, format, largeur…</text>
  <line x1="1120" y1="297.0" x2="1070" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vide = hérité</text>
  <text x="1130" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">de l'entrée du dictionnaire</text>
  <line x1="1120" y1="367.0" x2="1070" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
  <rect x="1120" y="484" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="499" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistre cet écran seul</text>
  <text x="1130" y="512" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Annuler demande confirmation</text>
  <line x1="1120" y1="501.0" x2="1040" y2="514" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scol-arrow)"/>
</svg>

La liste affiche une ligne par colonne (**ColumnHint**) avec ses marques ; un clic sur une ligne ouvre ses réglages à côté de la liste, en six onglets :

| Onglet | Contenu |
|---|---|
| **General** | `name`, `dd`, `key`, `sensitive`, `group` (la table liée un à un dans laquelle la colonne s'écrit). |
| **Display** | `label`, `hidden`, `format`, `align`, `width`, `wrap`, `params_of`, le réglage de carte, la largeur dans la fiche, le lien d'exploration. |
| **Filter** | `filter`, `filter_period`, `filter_from`, `visible_when`. |
| **Rules** | `rules`, `rules_values`, `rules_when` — et les réglages de lookup quand la règle en est un. |
| **Edit** | `required`, `required_when`, `disabled`, `disabled_when`, `disable_on_add`, `disable_on_edit`, `justify` (cadrage de la valeur écrite — vide reprend le dictionnaire). |
| **Defaults** | `default`, `default_when`, `write_when`. |

Un réglage en liste (une condition, un filtre en cascade) s'ouvre dans le même panneau ; le fil d'Ariane en haut ramène à la colonne.

---

## Champ par champ

Chaque indication de colonne porte la même structure. Les champs sont décrits ci-dessous par finalité.

### Identité

| Champ | Notes |
|---|---|
| **`name`** | La colonne du résultat à laquelle s'applique cette indication. Correspondance insensible à la casse contre les colonnes de la requête de lecture. Normalisée en MAJUSCULES à l'enregistrement. |
| **`dd`** | Entrée de dictionnaire dont hériter `label` / `format` / `rule`. Vide utilise le `name` de la colonne comme clé. Mettre à `""` (chaîne vide entre guillemets) pour se désinscrire totalement du dictionnaire. |
| **`sensitive`** (*Sensitive*) | Indique si la colonne porte une donnée sensible, pour l'assistant IA : elle est écartée de ce que l'assistant reçoit quand l'installation masque les données sensibles. Trois choix dans l'éditeur : *(default)* suit l'entrée du dictionnaire de la colonne, *yes* marque la colonne, *no* l'exempte même si son entrée est marquée. Voir [Données sensibles](../../ai-data-sent.md#sensitive). |

Le système de dictionnaire (`dictionary.toml`) est le vocabulaire centralisé de Liberty — une entrée définit une fois le titre d'affichage, le format, la règle et la recherche d'un champ ; chaque écran qui a une colonne avec ce nom en hérite. Voir [Concepts → Dictionnaire](../../dictionary.md).

### Affichage dans la grille

| Champ | Notes |
|---|---|
| **`label`** | Titre d'affichage dans l'en-tête de la grille et libellé du champ dans le dialogue. Retombe sur le `label` du dictionnaire, puis sur le `name` de la colonne. |
| **`hidden`** | Quand activé, la colonne est masquée par défaut. L'opérateur peut la rendre visible via le menu *Colonnes* de la grille. |
| **`wrap`** | Quand activé, un texte long passe à la ligne dans la grille au lieu d'être tronqué. |
| **`width`** | Largeur de colonne fixe en pixels. Vide = ajustement automatique. |
| **`align`** | Alignement du texte — `left`, `right`, `center`. Vide choisit automatiquement selon le type (nombres à droite, texte à gauche). |
| **`format`** | Comment afficher la valeur — `date`, `number`, `boolean`, `currency`, etc. Surcharge le format du dictionnaire. Pilote à la fois la cellule de grille et le champ de dialogue. |
| **Long Text**, **Name = value list** | Deux formats à connaître. *Long Text* se saisit dans une zone multiligne, dans la fiche comme dans le mode édition de la grille, et conserve ses retours à la ligne. *Name = value list* présente un texte de lignes `nom = valeur` sous forme de champs dans la fiche (ajout, retrait, **En texte** / **En champs**) ; avec **Params Of** — la colonne de l'écran qui désigne un point d'accès —, il devient le formulaire de ce point d'accès, un champ libellé par paramètre. |
| **Card** | Sur un téléphone, où la grille est une liste de cartes : `title` place la colonne dans le titre de la carte, `show` lui donne toujours une ligne, `hide` ne l'affiche jamais. Vide : la grille décide. Voir [Téléphone et tablette](../../mobile.md#card-setting). |

### Règle d'édition

| Champ | Notes |
|---|---|
| **`rules`** | Comment afficher et valider la colonne. `BOOLEAN` affiche une case à cocher, `ENUM` une liste déroulante, `LOOKUP` un sélecteur avec recherche. Vide hérite du dictionnaire. |
| **`rules_values`** | La valeur de la règle — `BOOLEAN` → le marqueur vrai (`Y` / `1` / `true`) ; `ENUM` → l'identifiant d'énumération ; `LOOKUP` → l'identifiant de recherche ; `SEQUENCE` / `NN` → l'identifiant de séquence. |
| **`default`** | Valeur pré-remplie à l'ajout d'une nouvelle ligne. |
| **`required`** | Activé, le champ porte un astérisque et **Enregistrer** reste bloqué tant qu'il est vide. |
| **`disabled`** | Activé, la colonne est en lecture seule — l'opérateur voit la valeur sans pouvoir la modifier. |
| **`disable_on_add`** / **`disable_on_edit`** | Lecture seule uniquement à l'ajout d'une ligne, ou uniquement une fois la ligne créée — le second pour les clés qui ne doivent plus changer. |
| **`required_when`** / **`disabled_when`** | Obligatoire ou en lecture seule uniquement tant que des conditions sur d'autres champs sont remplies. Un champ obligatoire ne bloque l'enregistrement que s'il est visible. |
| **`default_when`** | Une valeur imposée (et verrouillée, sauf si **lock** est désactivé) tant qu'une condition est remplie. |
| **`rules_when`** | Une autre règle (lookup, énumération, booléen) tant qu'une condition est remplie. |
| **`write_when`** | La colonne n'est écrite que tant qu'une condition est remplie. |
| **`lookup_param_binds`** | Restreindre la requête d'une règle `LOOKUP` en liant des paramètres supplémentaires. Utilisé quand la recherche dépend de la valeur d'un autre champ (ex. choisir un rôle restreint par l'application courante de la ligne). Voir [Liaison de paramètres](../queries/parameter-binding.md). |

### Clé primaire

| Champ | Notes |
|---|---|
| **`key`** | Marque cette colonne comme partie de la clé primaire de la ligne. Pilote :<br/>– La correspondance mise à jour-ou-insertion de l'import Excel.<br/>– En ajout, une colonne clé présente une saisie libre au lieu de sa liste de lookup (une nouvelle clé se saisit, elle ne se choisit pas).<br/>– La liaison `:NAME_ORIGINAL` de la requête `_put` (la convention de l'Assistant CRUD). |

Une clé n'est pas verrouillée d'office à la modification d'une ligne : cocher **disable_on_edit** (onglet Edit) sur les colonnes clés qui ne doivent plus changer une fois la ligne créée. Marquer chaque colonne qui identifie une ligne de façon unique. Les clés multi-colonnes sont prises en charge — activer l'indicateur sur chacune. Quand `key_columns` de l'écran est vide (le cas habituel), le runtime retombe sur les colonnes dont l'indicateur `key` est activé.

### Filtrage

| Champ | Notes |
|---|---|
| **`filter`** | Quand activé, la colonne apparaît dans le panneau de filtres du tableau. L'utilisateur choisit une valeur pour restreindre la grille ; sur une colonne à liste de valeurs (une énumération), plusieurs valeurs à la fois, et un code saisi hors de la liste est accepté. Une colonne à lookup garde un choix unique. Une colonne de date (format `date`, `datetime`, `timestamp`, ou type date dans la base) se filtre par une [période](#period). |
| **`filter_period`** | Sur une colonne de date avec `filter`, la période proposée à l'ouverture de l'écran : `today`, `yesterday`, `last7`, `last30`, `thisMonth`, `lastMonth`, `thisQuarter`, `thisYear`, `lastYear`, `last12`. Vide ou `all` : aucune période, toutes les lignes. Le premier chargement automatique de l'écran l'applique déjà. |
| **`filter_from`** | Filtre en cascade — restreint les options de cette colonne en fonction de la valeur d'un autre filtre. Sélectionne une colonne `source` (déjà filtrée) et une `column` sur le résultat de la requête de recherche que la source met en correspondance. |
| **`visible_when`** | Dans la grille, masque la colonne quand un filtre prend une valeur hors de la condition ; dans le dialogue, n'affiche le champ que tant que les valeurs du formulaire remplissent la condition. |

Les conditions sont détaillées dans [Conditions de formulaire](../../form-conditions.md), avec des exemples dans [Champs conditionnels](./conditional-fields.md).

### Une colonne typique

Pour une colonne `STATUS` sur un écran clients, la configuration ressemble habituellement à :

| Champ | Valeur |
|---|---|
| `name` | `STATUS` |
| `dd` | (vide — utilise `STATUS` comme clé du dictionnaire) |
| `label` | (vide — hérite du dictionnaire) |
| `format` | (vide — hérite) |
| `rules` | `ENUM` |
| `rules_values` | `STATUS_CODES` (un identifiant d'énumération déclaré dans le dictionnaire) |
| `default` | `OPEN` |
| `required` | ✓ |
| `filter` | ✓ |

Cela affiche une liste déroulante dans le dialogue (alimentée par l'énumération `STATUS_CODES`), pré-remplit les nouvelles lignes avec `OPEN`, exige une valeur et ajoute une puce de filtre à la grille.

---

## Hériter du dictionnaire

Le comportement par défaut — quand la plupart des champs sont vides — est d'**hériter du dictionnaire**. La chaîne :

```
ColumnHint.label  → entrée DD.label  → nom de colonne
ColumnHint.format → entrée DD.format → choisi par le moteur selon le type
ColumnHint.rules  → entrée DD.rule
ColumnHint.rules_values → entrée DD.rule_values
```

Cela signifie qu'une colonne nommée `USR_ID` sur un écran lit automatiquement son libellé, son format, sa règle et l'argument de cette règle depuis l'entrée de dictionnaire `USR_ID` (ou de l'entrée indiquée dans `dd`). L'écran ne surcharge que quand **cet** écran a besoin d'un comportement différent du reste.

La liste des colonnes est donc majoritairement **vide** pour les installations bien dictionnarisées — des entrées n'apparaissent que quand il y a quelque chose à surcharger.

---

## Filtrage et filtres en cascade

Quand une colonne a `filter = true`, une puce pour celle-ci apparaît dans le panneau de filtres de la grille. L'utilisateur choisit une valeur, la grille réexécute la requête de lecture avec cette valeur liée au paramètre `:placeholder` correspondant. La requête est responsable d'accepter la liaison.

### Une période sur une colonne de date \{#period\}

Sur une colonne de date, le panneau de filtres présente une période et non une date unique : le même sélecteur que sur les tableaux de bord, avec ses préréglages (*Aujourd'hui*, *Hier*, *7 derniers jours*, *30 derniers jours*, *Ce mois-ci*, *Mois dernier*, *Ce trimestre*, *Cette année*, *Année dernière*, *12 derniers mois*, *Toutes les dates*) et un calendrier sur deux mois pour une période libre. L'exécution transmet les deux bornes sous la forme `<COL>_from` et `<COL>_to`, et le serveur borne lui-même la colonne : la requête de lecture n'a besoin d'aucun paramètre pour elles. Une période qui se termine sur un jour conserve toutes les lignes de ce jour, quelle que soit leur heure.

Un lien ou une navigation qui transmet une date à une colonne de date ouvre l'écran sur ce seul jour.

Les **filtres en cascade** restreignent les options d'un filtre selon un autre. Le cas classique : une liste déroulante *Rôle* qui n'affiche que les rôles pour l'*Application* actuellement sélectionnée :

| Champ | Valeur sur `ROLE_ID` |
|---|---|
| `rules` | `LOOKUP` |
| `rules_values` | `get_roles` |
| `filter` | ✓ |
| `filter_from.source` | `APPS_ID` (la colonne source du filtre parent) |
| `filter_from.column` | `APP_ID` (la colonne du résultat de la requête de recherche qui correspond à la source) |

Quand l'utilisateur choisit une application, la recherche de rôles se réexécute avec l'identifiant d'application lié — l'utilisateur ne voit que les rôles de cette application.

---

## Ordre des colonnes

L'ordre de la liste **ColumnHint** = l'ordre d'affichage dans la grille. Les colonnes que la requête de lecture retourne mais qui ne sont pas listées ici conservent leur ordre de découverte et suivent celles qui sont indiquées.

Pour réorganiser :

| Objectif | Action |
|---|---|
| Monter / descendre une colonne. | Glisser sa ligne dans la liste (la poignée de glissement est sur le bord gauche de la ligne). |
| Masquer une colonne entièrement. | Mettre `hidden = true`. L'opérateur peut quand même la rendre visible depuis le menu *Colonnes* de la grille. |
| Retirer une colonne de la grille et du dialogue. | Supprimer son indication ET s'assurer qu'elle n'est sur les champs d'aucun onglet du dialogue. (Ou modifier la requête de lecture pour ne pas la retourner.) |

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `dd = "USR_ID"` mais pas d'entrée de dictionnaire nommée `USR_ID`. | Le libellé et le format retombent textuellement sur le nom de colonne. | Ajouter l'entrée de dictionnaire, ou mettre `dd = ""` pour se désinscrire et configurer `label`/`format` en ligne. |
| `rules = LOOKUP` mais `rules_values` vide. | La liste déroulante est vide. | Mettre `rules_values` à un identifiant de recherche du dictionnaire. |
| `filter_from` renseigné mais la colonne n'a pas `filter`. | La cascade ne fait rien — le filtre source ne se déclenche jamais. | Activer `filter = true` ET renseigner `filter_from`. |
| `required = true` sur une colonne que la requête de lecture ne retourne pas. | Le dialogue enregistre avec NULL ; si la BD a une contrainte NOT NULL, l'écriture échoue. | Ajouter la colonne à la requête de lecture, ou retirer `required` de l'indication. |
| `key = true` sur une colonne non unique. | L'import Excel traite les valeurs en double comme des mises à jour de la même ligne. | Vérifier que les colonnes clés identifient véritablement une ligne de façon unique. |
| `format = currency` mais la valeur est en centimes (entier). | La grille affiche `1,234.00` pour `123456`. | Le format attend la valeur dans l'unité à afficher — diviser par 100 dans la requête, ou utiliser une étape Python avant l'affichage. |

---

## Étapes suivantes

- [Constructeur de dialogue](./dialog-builder.md) — les champs configurés ici deviennent des cartes glissables-déposables sur le canevas.
- [Champs conditionnels](./conditional-fields.md) — faire apparaître / rendre obligatoire / verrouiller une colonne uniquement sous certaines conditions de formulaire.
- [Concepts → Dictionnaire](../../dictionary.md) — le vocabulaire partagé dont les colonnes héritent.
