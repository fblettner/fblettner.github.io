---
title: Colonnes
description: "Les colonnes d'un écran Liberty Next, dans le Concepteur d'écran (Grille → Colonnes) — définir une fois le libellé, le format, l'élément du dictionnaire, la nature du champ, la valeur par défaut et le filtrage de chaque colonne ; une liste lue dans une table créée d'un seul geste ; la grille et la fiche les utilisent toutes deux."
keywords: [Liberty Framework, colonnes, élément du dictionnaire, nature du champ, format, lookup, liste depuis une table, filtre, masqué, clé, valeur par défaut]
---

# Colonnes

**Grille → Colonnes**, dans le [Concepteur d'écran](./overview.md#designer), est l'endroit où l'on définit les réglages de chaque colonne : comment la colonne s'affiche dans la grille, comment elle apparaît dans le formulaire de dialogue, si elle filtre, si elle est obligatoire, si elle fait partie de la clé primaire de la ligne. On configure chaque colonne une fois — les deux surfaces (grille et dialogue) utilisent la même configuration.

---

## Les colonnes en un coup d'œil

<svg viewBox="0 0 1320 610" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svcol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svcol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svcol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svcol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="572" rx="14" fill="url(#svcol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · Customers</text>
  <text x="463.6" y="46" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">crm · customers</text>
  <rect x="1010" y="31" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="240.0" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="78" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="250.0" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="381.3" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="391.3" y="78" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="391.3" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="391.3" y="105" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrement</text>
  <rect x="522.7" y="62" width="133.3" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="532.7" y="78" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.7" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.7" y="105" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">3 filtre(s)</text>
  <rect x="664.0" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="78" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="674.0" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="674.0" y="105" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <rect x="805.3" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="815.3" y="78" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="815.3" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">1 action(s) de barre d'outils</text>
  <rect x="946.7" y="62" width="133.3" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="956.7" y="78" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="956.7" y="93" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <rect x="240" y="124" width="162" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="125" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="272.0" y="138.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <line x1="304" y1="129" x2="304" y2="141" stroke="#334155" strokeWidth="1"/>
  <text x="326.0" y="138.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <line x1="348" y1="129" x2="348" y2="141" stroke="#334155" strokeWidth="1"/>
  <text x="375.0" y="138.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <rect x="240" y="158" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="173" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="173" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="264" y="186" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Client</text>
  <rect x="426" y="168" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="179.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre</text>
  <rect x="395" y="168" width="27" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="408.5" y="179.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">clé</text>
  <text x="484" y="180" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="200" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="215" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="215" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="264" y="228" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="426" y="210" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="221.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre</text>
  <text x="484" y="222" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="242" width="260" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250" y="257" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="257" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="264" y="270" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="426" y="252" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="263.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre</text>
  <rect x="382" y="252" width="40" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="402.0" y="263.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <text x="484" y="264" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="284" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="299" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="299" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="264" y="312" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Pays</text>
  <rect x="426" y="294" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="446.0" y="305.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">filtre</text>
  <text x="484" y="306" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="326" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="264" y="354" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Plafond de crédit</text>
  <text x="484" y="348" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="368" width="260" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="383" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264" y="383" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="264" y="396" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Modifié le</text>
  <rect x="394" y="378" width="72" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="430.0" y="389.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">lecture seule</text>
  <text x="484" y="390" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="412" width="140" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="310.0" y="426.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une colonne</text>
  <rect x="516" y="158" width="564" height="376" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="530" y="178" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">≋  STATUS</text>
  <rect x="530" y="188" width="53" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="556.5" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="587" y="188" width="53" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="613.5" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <rect x="644" y="188" width="48" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="668.0" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <rect x="696" y="188" width="43" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="717.5" y="201.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="743" y="188" width="38" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="762.0" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <rect x="785" y="188" width="58" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="814.0" y="201.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <text x="530" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND OF FIELD</text>
  <rect x="530" y="232" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="247" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <text x="587.312" y="247" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">A list read from a table</text>
  <text x="1054" y="247" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="530" y="268" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What the field is: free text, a list, a yes / no box… Blank uses the dictionary's.</text>
  <text x="887.288" y="268" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">plus</text>
  <text x="530" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST FROM A TABLE</text>
  <rect x="530" y="296" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="311" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">customer_status</text>
  <text x="1054" y="311" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="530" y="324" width="197" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="628.5" y="337.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Nouvelle liste depuis une table…</text>
  <text x="530" y="356" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What the kind of field uses: the list, the numbering rule, the value that means yes.</text>
  <text x="895.856" y="356" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">plus</text>
  <text x="530" y="378" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ANOTHER KIND WHEN</text>
  <rect x="530" y="384" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="555.0" y="396.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <text x="530" y="420" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE ONLY</text>
  <rect x="530" y="431" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="547" y="440" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="530" y="464" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALUES GIVEN TO THE LIST</text>
  <rect x="530" y="470" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="555.0" y="482.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <line x1="240" y1="548" x2="1080" y2="548" stroke="#1f2937" strokeWidth="1"/>
  <rect x="979" y="558" width="101" height="22" rx="5" fill="url(#svcol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1029.5" y="572.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Enregistrer</text>
  <rect x="898" y="558" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="934.5" y="572.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nommé par son libellé</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis application · identifiant</text>
  <line x1="200" y1="47.0" x2="240" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Repères utiles</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé, filtre, nature, lecture seule…</text>
  <line x1="200" y1="157.0" x2="440" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une colonne</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">⠿ pour déplacer, ✕ pour retirer</text>
  <line x1="200" y1="397.0" x2="310" y2="422" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six onglets</text>
  <text x="1135" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Rules porte la nature du champ</text>
  <line x1="1125" y1="137.0" x2="717.5" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind of field</text>
  <text x="1135" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un choix en mots simples</text>
  <line x1="1125" y1="227.0" x2="1050" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le seul champ utile</text>
  <text x="1135" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nommé selon la nature</text>
  <line x1="1125" y1="307.0" x2="1050" y2="305" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle liste depuis une table…</text>
  <text x="1135" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête et liste d'un coup</text>
  <line x1="1125" y1="377.0" x2="746" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
  <rect x="1125" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1135" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aide courte · plus</text>
  <text x="1135" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le texte long derrière plus</text>
  <line x1="1125" y1="457.0" x2="903.856" y2="357" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svcol-arrow)"/>
</svg>

La liste affiche une ligne par colonne avec ses repères — clé, filtre, nature du champ, lecture seule… ; un clic sur une ligne ouvre ses réglages à côté de la liste, en six onglets. Chaque champ porte une phrase d'aide courte ; **plus** ouvre l'explication complète.

| Onglet | Contenu |
|---|---|
| **General** | **Column**, **Dictionary item**, **Key**, **Sensitive data**, **Related table** (la table liée un à un dans laquelle la colonne s'écrit). |
| **Display** | **Label**, **Hidden**, **Format**, **Alignment**, **Width**, **Wrap long text**, **Parameters of the service in**, **On a phone**, **Width in the form**, **Link that runs**. |
| **Filter** | **Filter**, **Period shown at first**, **Narrowed by**, **Shown only when**. |
| **Rules** | **Kind of field**, le champ propre à cette nature, **Another kind when** — et, pour une liste lue dans une table, **Code only**, **Values given to the list**, **Fills other fields**. |
| **Edit** | **Required**, **Required only when**, **Read only**, **Read only when**, **Read only when adding**, **Read only when changing**, **Align when saving**, **Align as the item in**. |
| **Defaults** | **Default value**, **Forced value when**, **Saved only when**. |

Un réglage en liste (une condition, un filtre en cascade) s'ouvre dans le même panneau ; le fil d'Ariane en haut ramène à la colonne.

---

## Champ par champ

Chaque colonne porte les mêmes réglages. Ils sont décrits ci-dessous par finalité.

### Identité

| Champ | Notes |
|---|---|
| **Column** | La colonne du résultat à laquelle s'appliquent ces réglages. Correspondance insensible à la casse avec les colonnes de la requête de lecture. Mise en MAJUSCULES à l'enregistrement. |
| **Dictionary item** | L'entrée du dictionnaire qui donne à la colonne son libellé, son format et sa liste. *(par défaut)* prend le nom de la colonne comme clé. |
| **Sensitive data** | Indique si la colonne porte une donnée sensible, pour l'assistant IA : elle est écartée de ce que l'assistant reçoit quand l'installation masque les données sensibles. Trois choix : *(par défaut)* suit l'entrée du dictionnaire de la colonne, *oui* marque la colonne, *non* l'exempte même si son entrée est marquée. Voir [Données sensibles](../../ai-data-sent.md#sensitive). |

Le dictionnaire est le vocabulaire partagé de Liberty — une entrée définit une fois le libellé, le format, la nature et la liste d'un champ ; chaque écran qui a une colonne de ce nom en hérite. Voir [Concepts → Dictionnaire](../../dictionary.md).

### Affichage dans la grille

| Champ | Notes |
|---|---|
| **Label** | Le titre de l'en-tête de grille et le libellé du champ dans la fiche. À défaut, le libellé du dictionnaire, puis le nom de la colonne. |
| **Hidden** | La colonne est masquée à l'ouverture. L'opérateur peut l'afficher depuis le menu *Colonnes* de la grille. |
| **Wrap long text** | Un texte long passe à la ligne dans la grille au lieu d'être tronqué. |
| **Width** | Largeur fixe de la colonne en pixels. Vide : ajustée au contenu. |
| **Alignment** | À gauche, à droite ou centré. Vide : selon le type de valeur (nombres à droite, texte à gauche). |
| **Format** | La façon d'afficher la valeur — date, nombre, oui / non, devise… Remplace le format du dictionnaire. Vaut pour la cellule de grille comme pour le champ de la fiche. |
| **Long Text**, **Name = value list** | Deux formats à connaître. *Long Text* se saisit dans une zone multiligne, dans la fiche comme dans le mode édition de la grille, et conserve ses retours à la ligne. *Name = value list* présente un texte de lignes `nom = valeur` sous forme de champs dans la fiche (ajout, retrait, **En texte** / **En champs**) ; avec **Parameters of the service in** — la colonne de l'écran qui désigne un point d'accès —, il devient le formulaire de ce point d'accès, un champ libellé par paramètre. |
| **On a phone** | La place de la colonne sur une carte, quand la grille devient une liste de cartes : `title` la met dans le titre de la carte, `show` lui donne toujours une ligne, `hide` ne l'affiche jamais. Vide : la grille décide. Voir [Téléphone et tablette](../../mobile.md#card-setting). |

### Nature du champ \{#kind\}

**Kind of field** (onglet Rules) dit ce qu'est le champ, en mots simples, avec son code à côté. *(par défaut)* reprend celle du dictionnaire — la ligne sous le champ l'indique (*What the dictionary says for this item: ENUM (PERIOD_STATUS)*).

| Nature du champ | Code | Dans la fiche | Le champ qu'elle demande |
|---|---|---|---|
| *A yes / no box* | `BOOLEAN` | Une case à cocher. | **Value that means yes** (`Y`, `1`, `true`…), et **Value for no**. |
| *A fixed list of values* | `ENUM` | Une liste déroulante des valeurs de la liste. | **List of values** — une énumération du dictionnaire. |
| *A list read from a table* | `LOOKUP` | Une liste des lignes de la table, avec recherche. | **List from a table** — un lookup du dictionnaire, ou un nouveau créé d'ici : voir [plus bas](#list-from-table). |
| *A number given automatically* | `SEQUENCE` | Renseigné par le serveur à l'insertion. | **Numbering rule** — une séquence du dictionnaire. |
| *The signed-in user* | `LOGIN` | Renseigné avec le nom de l'utilisateur. | — |
| *Today's date* | `SYSDATE` | Renseigné avec la date du jour. | — |
| *A password (hidden, stored encrypted)* | `PASSWORD` | Chiffré à l'écriture. | — |
| *A database of this installation* | `POOL` | Une liste déroulante des pools. | **Only the databases of** — vide, tous les pools sont proposés. |
| *Free text; left empty, it takes its default value* | `DEFAULT` | Saisie libre. | — (la **Default value** de l'onglet Defaults). |
| *Free text, whatever the dictionary says* | `DISABLED` | Saisie libre : annule, pour cet écran, la nature donnée par le dictionnaire. | — |

Seul le champ utile à la nature choisie s'affiche, sous le nom de ce qu'il représente pour elle. L'effet de chaque nature sur les écritures est décrit dans [Dictionnaire → Natures de champ](../../dictionary.md#rules).

Une liste lue dans une table ajoute trois réglages :

| Champ | Notes |
|---|---|
| **Code only** | Affiche le code seul dans la grille, sans sa description. |
| **Values given to the list** | Des valeurs de l'enregistrement qui restreignent la requête de la liste — par exemple l'application de la ligne, pour ne proposer que les rôles de cette application. Voir [Liaison des paramètres](../queries/parameter-binding.md). |
| **Fills other fields** | Au choix d'une ligne, recopie des colonnes de cette ligne dans d'autres champs de l'enregistrement. |

**Another kind when** donne au champ une autre nature — une autre liste, une autre énumération, une case oui / non — tant qu'une autre colonne a une valeur donnée. Voir [Conditions de formulaire](../../form-conditions.md).

### Une liste lue dans une table, d'un seul geste \{#list-from-table\}

Quand la liste n'existe pas encore, **Nouvelle liste depuis une table…**, sous **List from a table**, la crée sans quitter la colonne. La fenêtre *Nouveau lookup* demande :

| Champ | Notes |
|---|---|
| **Table** | Une table de la base de l'écran. |
| **Colonne valeur** | Le code stocké sur la ligne. |
| **Colonne libellé** | La description affichée à l'utilisateur. |
| **Clause WHERE optionnelle** | Écrite sans le mot-clé. |
| **Nom de la requête**, **Identifiant**, **Description** | Déduits de la table ; modifiables. |
| **SQL généré — modifiable** | La requête, telle qu'elle sera enregistrée. |

**Enregistrer** ajoute la requête aux requêtes de liste de l'application et la liste à son dictionnaire — deux objets nouveaux, rien d'existant n'est modifié —, recharge la configuration et sélectionne la nouvelle liste dans la colonne.

### Saisie

| Champ | Notes |
|---|---|
| **Required** | Le champ porte un astérisque et **Enregistrer** reste bloqué tant qu'il est vide. |
| **Read only** | L'opérateur voit la valeur sans pouvoir la modifier. |
| **Read only when adding** / **Read only when changing** | Lecture seule uniquement à l'ajout d'un enregistrement, ou uniquement une fois celui-ci créé — le second pour les clés qui ne doivent plus changer. |
| **Required only when** / **Read only when** | Obligatoire ou en lecture seule uniquement tant que des conditions sur d'autres champs sont remplies. Un champ obligatoire ne bloque l'enregistrement que s'il est visible. |
| **Align when saving** | Le cadrage de la valeur écrite, pour les codes stockés cadrés à droite. Vide : comme le dit le dictionnaire. |
| **Align as the item in** | La colonne qui désigne l'élément du dictionnaire dont cette valeur suit le cadrage et la largeur. |

### Valeurs par défaut

| Champ | Notes |
|---|---|
| **Default value** | La valeur de départ d'un nouvel enregistrement. |
| **Forced value when** | Une valeur imposée (et verrouillée, sauf si **Locked** est décoché) tant qu'une autre colonne a une valeur donnée. |
| **Saved only when** | La colonne n'est enregistrée que tant que la condition est remplie ; sinon elle est enregistrée vide. |

### Clé

| Champ | Notes |
|---|---|
| **Key** | Cette colonne identifie l'enregistrement, seule ou avec les autres colonnes clés. Elle pilote :<br/>– la correspondance mise à jour-ou-insertion de l'import Excel ;<br/>– en ajout, une colonne clé présente une saisie libre au lieu de sa liste (une nouvelle clé se saisit, elle ne se choisit pas) ;<br/>– la liaison `:NAME_ORIGINAL` de la requête `_put` (la convention de l'Assistant CRUD). |

Une clé n'est pas verrouillée d'office à la modification : cocher **Read only when changing** (onglet Edit) sur les colonnes clés qui ne doivent plus changer une fois l'enregistrement créé. Marquer chaque colonne qui identifie un enregistrement de façon unique. Les clés multi-colonnes sont prises en charge — cocher **Key** sur chacune. Quand **Key columns** de l'écran est vide (le cas habituel), ce sont les colonnes marquées **Key** qui servent.

### Filtrage

| Champ | Notes |
|---|---|
| **Filter** | La colonne apparaît dans les filtres au-dessus de la grille. L'utilisateur choisit une valeur pour restreindre la grille ; sur une colonne à liste fixe de valeurs, plusieurs valeurs à la fois, et un code saisi hors de la liste est accepté. Une liste lue dans une table garde un choix unique. Une colonne de date (format `date`, `datetime`, `timestamp`, ou type date dans la base) se filtre par une [période](#period). |
| **Period shown at first** | Sur une colonne de date avec **Filter**, la période proposée à l'ouverture de l'écran : aujourd'hui, hier, 7 ou 30 derniers jours, ce mois-ci ou le mois dernier, ce trimestre, cette année ou l'année dernière, 12 derniers mois. Vide ou *all* : aucune période, toutes les lignes. Le premier chargement automatique de l'écran l'applique déjà. |
| **Narrowed by** | Filtre en cascade — restreint les choix de cette colonne selon la valeur d'un autre filtre : **Filter** (l'autre filtre) et **Matched on** (la colonne de cette liste comparée à la valeur de ce filtre). |
| **Shown only when** | Dans la grille, masque la colonne quand un filtre prend une valeur hors de la condition ; dans la fiche, n'affiche le champ que tant que les valeurs du formulaire remplissent la condition. |

Les conditions sont détaillées dans [Conditions de formulaire](../../form-conditions.md), avec des exemples dans [Champs conditionnels](./conditional-fields.md).

### Une colonne typique

Pour une colonne `STATUS` sur un écran clients, les réglages sont habituellement :

| Champ | Valeur |
|---|---|
| **Column** | `STATUS` |
| **Dictionary item** | *(par défaut)* — prend `STATUS` comme clé |
| **Label**, **Format** | vides — hérités du dictionnaire |
| **Kind of field** | *A fixed list of values* |
| **List of values** | `STATUS_CODES` (une énumération du dictionnaire) |
| **Default value** | `OPEN` |
| **Required** | ✓ |
| **Filter** | ✓ |

La fiche présente alors une liste déroulante (alimentée par l'énumération `STATUS_CODES`), les nouveaux enregistrements partent de `OPEN`, une valeur est exigée et la grille gagne un filtre.

---

## Hériter du dictionnaire

Le comportement par défaut — quand la plupart des champs sont vides — est d'**hériter du dictionnaire**. La chaîne :

| Réglage de la colonne | Vide → repris de |
|---|---|
| **Label** | le libellé de l'entrée, puis le nom de la colonne |
| **Format** | le format de l'entrée, puis le type de la valeur |
| **Kind of field** et sa liste | la nature et la liste de l'entrée |

Une colonne nommée `USR_ID` sur un écran lit donc automatiquement son libellé, son format, sa nature et sa liste dans l'entrée de dictionnaire `USR_ID` (ou celle choisie dans **Dictionary item**). L'écran ne surcharge que quand **cet** écran a besoin d'un comportement différent du reste.

La liste des colonnes est donc majoritairement **vide** pour les installations bien dictionnarisées — des entrées n'apparaissent que quand il y a quelque chose à surcharger.

---

## Filtrage et filtres en cascade

Quand une colonne a **Filter** coché, une puce pour celle-ci apparaît dans le panneau de filtres de la grille. L'utilisateur choisit une valeur, la grille réexécute la requête de lecture avec cette valeur liée au paramètre `:placeholder` correspondant. La requête est responsable d'accepter la liaison.

### Une période sur une colonne de date \{#period\}

Sur une colonne de date, le panneau de filtres présente une période et non une date unique : le même sélecteur que sur les tableaux de bord, avec ses préréglages (*Aujourd'hui*, *Hier*, *7 derniers jours*, *30 derniers jours*, *Ce mois-ci*, *Mois dernier*, *Ce trimestre*, *Cette année*, *Année dernière*, *12 derniers mois*, *Toutes les dates*) et un calendrier sur deux mois pour une période libre. L'exécution transmet les deux bornes sous la forme `<COL>_from` et `<COL>_to`, et le serveur borne lui-même la colonne : la requête de lecture n'a besoin d'aucun paramètre pour elles. Une période qui se termine sur un jour conserve toutes les lignes de ce jour, quelle que soit leur heure.

Un lien ou une navigation qui transmet une date à une colonne de date ouvre l'écran sur ce seul jour.

Les **filtres en cascade** restreignent les options d'un filtre selon un autre. Le cas classique : une liste déroulante *Rôle* qui n'affiche que les rôles pour l'*Application* actuellement sélectionnée :

| Champ | Valeur sur `ROLE_ID` |
|---|---|
| **Kind of field** | *A list read from a table* |
| **List from a table** | `get_roles` |
| **Filter** | ✓ |
| **Narrowed by → Filter** | `APPS_ID` (le filtre parent) |
| **Narrowed by → Matched on** | `APP_ID` (la colonne de la requête de la liste comparée à la valeur du filtre parent) |

Quand l'utilisateur choisit une application, la recherche de rôles se réexécute avec l'identifiant d'application lié — l'utilisateur ne voit que les rôles de cette application.

---

## Ordre des colonnes

L'ordre de la liste des colonnes = l'ordre d'affichage dans la grille. Les colonnes que la requête de lecture retourne mais qui ne sont pas listées ici conservent leur ordre de découverte et suivent celles qui sont indiquées.

Pour réorganiser :

| Objectif | Action |
|---|---|
| Monter / descendre une colonne. | Glisser sa ligne dans la liste (la poignée de glissement est sur le bord gauche de la ligne). |
| Masquer une colonne entièrement. | Cocher **Hidden**. L'opérateur peut quand même la rendre visible depuis le menu *Colonnes* de la grille. |
| Retirer une colonne de la grille et du dialogue. | La retirer de la liste (✕) ET s'assurer qu'elle n'est sur les champs d'aucun onglet du dialogue. (Ou modifier la requête de lecture pour ne pas la retourner.) |

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| **Dictionary item** `USR_ID` sans entrée de dictionnaire `USR_ID`. | Le libellé et le format reprennent tels quels le nom de la colonne. | Ajouter l'entrée de dictionnaire, ou renseigner **Label** et **Format** sur la colonne. |
| *A list read from a table* avec **List from a table** vide. | La liste déroulante est vide. | Choisir une liste, ou en créer une avec **Nouvelle liste depuis une table…**. |
| **Narrowed by** renseigné sans **Filter** coché. | La cascade ne fait rien — le filtre source ne se déclenche jamais. | Cocher **Filter** ET renseigner **Narrowed by**. |
| **Required** sur une colonne que la requête de lecture ne retourne pas. | Le dialogue enregistre NULL ; si la base a une contrainte NOT NULL, l'écriture échoue. | Ajouter la colonne à la requête de lecture, ou décocher **Required**. |
| **Key** sur une colonne non unique. | L'import Excel traite les valeurs en double comme des mises à jour de la même ligne. | Vérifier que les colonnes clés identifient véritablement une ligne de façon unique. |
| **Format** *currency* alors que la valeur est en centimes (entier). | La grille affiche `1,234.00` pour `123456`. | Le format attend la valeur dans l'unité à afficher — diviser par 100 dans la requête, ou utiliser une étape Python avant l'affichage. |

---

## Étapes suivantes

- [Constructeur de dialogue](./dialog-builder.md) — les champs configurés ici deviennent des cartes glissables-déposables sur le canevas.
- [Champs conditionnels](./conditional-fields.md) — faire apparaître / rendre obligatoire / verrouiller une colonne uniquement sous certaines conditions de formulaire.
- [Concepts → Dictionnaire](../../dictionary.md) — le vocabulaire partagé dont les colonnes héritent.
