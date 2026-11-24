---
title: Pré-requis
description: "Pré-requis entre composants — quand l'achat du composant X exige aussi de posséder le composant Y."
keywords: [Nomasx-1, paramètres, JDE, pré-requis, composants, dépendance Oracle]
---

# Pré-requis

L'écran **Pré-requis** capte les pré-requis contractuels entre composants de licence JDE. Une ligne par `(Composant, Pré-requis)`. Chaque ligne signifie : *pour utiliser le composant, il faut aussi licencier le pré-requis*.

C'est le catalogue de dépendances appliqué par Nomasx-1 lors du calcul de la conformité : si vous avez les droits sur un composant mais pas sur son pré-requis, la matrice fait remonter le pré-requis manquant comme un écart de conformité distinct.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 324" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="gpq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="gpq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="gpq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="gpq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="244" rx="14" fill="url(#gpq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="238" y="38" width="16" height="16" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <line x1="238" y1="44" x2="254" y2="44" stroke="#4a9eff" strokeWidth="1"/>
  <text x="264" y="51" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Pré-requis (JDE)</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="90" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">24 lignes · 5 ms</text>
  <rect x="238" y="102" width="123" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="299.5" y="116.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="367" y="102" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="423.0" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="485" y="102" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="522.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Importer</text>
  <rect x="566" y="102" width="64" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="576" y="116.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="636" y="102" width="75" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="673.5" y="116.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="717" y="102" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="742.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="774" y="102" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="807.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="847" y="102" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="920" y="102" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="956.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="999" y="102" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="238" y="136" width="844" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PRODUIT</text>
  <text x="468" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT</text>
  <text x="768" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PRÉ-REQUIS</text>
  <rect x="238" y="162" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="248" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne</text>
  <text x="468" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Advanced Pricing</text>
  <text x="768" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Sales Order Management</text>
  <rect x="238" y="184" width="844" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="248" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne</text>
  <text x="468" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Advanced Cost Accounting</text>
  <text x="768" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Financials</text>
  <rect x="238" y="206" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="248" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne</text>
  <text x="468" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Warehouse Management</text>
  <text x="768" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Inventory Management</text>
  <text x="238" y="252" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre un formulaire vide</text>
  <line x1="200" y1="113.0" x2="238" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gpq-arrow)"/>
  <rect x="20" y="44" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="59" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer</text>
  <text x="30" y="72" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">des lignes depuis un fichier Excel</text>
  <line x1="200" y1="61.0" x2="522.5" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gpq-arrow)"/>
  <rect x="20" y="193" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="208" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="30" y="221" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le formulaire</text>
  <line x1="200" y1="210.0" x2="238" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gpq-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier à compléter et réimporter</text>
  <line x1="1120" y1="113.0" x2="1060.5" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gpq-arrow)"/>
  <rect x="378" y="278" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="388" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant · Pré-requis</text>
  <text x="388" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la clé de la ligne</text>
  <line x1="488.0" y1="278" x2="488" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gpq-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Encoder le graphe de dépendance des licences.** Oracle livre des règles de pré-requis entre composants — les codifier ici pour que Nomasx-1 les recoupe automatiquement.
- **Alimenter les alertes de pré-requis manquants.** Les pré-requis absents apparaissent comme une ligne de conformité distincte dans les rapports.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Produit** | `PRQ_PRODUCT` — famille de produits Oracle. | Famille de licence à laquelle la règle appartient. |
| **Composant** | `PRQ_COMPONENT` — composant qui requiert le pré-requis. | Composant dépendant. |
| **Pré-requis** | `PRQ_PREREQ` — composant requis. | Composant à licencier également. |

---

## Boîte de dialogue \{#edit\}

La grille est modifiable. **Ajouter une ligne** ouvre un formulaire vide ; un clic sur une ligne l'ouvre ; **Modifier en lot** modifie les lignes sur place, dans la grille. Le formulaire, **Modifier · Paramètres - Pré-requis (JDE)** (**Nouveau · Paramètres - Pré-requis (JDE)** sur une nouvelle ligne), porte **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer** ; une nouvelle ligne n'a que **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="spq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="spq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="spq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="spq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="246" rx="14" fill="url(#spq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Pré-requis (JDE)</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUIT</text>
  <rect x="240" y="88" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne</text>
  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <rect x="240" y="134" width="720" height="24" rx="5" fill="#111827" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="150" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Pricing</text>
  <text x="240" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRÉ-REQUIS</text>
  <rect x="240" y="180" width="720" height="24" rx="5" fill="#111827" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="196" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Sales Order Management</text>
  <line x1="220" y1="220" x2="980" y2="220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="877" y="232" width="83" height="22" rx="5" fill="url(#spq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="918.5" y="246.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="808" y="232" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="246.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="728" y="232" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="764.0" y="246.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="648" y="232" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="684.0" y="246.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="129" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant · Pré-requis</text>
  <text x="30" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la clé, figée une fois enregistrée</text>
  <line x1="200" y1="146.0" x2="240" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spq-arrow)"/>
  <rect x="20" y="226" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="241" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer · Dupliquer</text>
  <text x="30" y="254" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur une ligne enregistrée</text>
  <line x1="200" y1="243.0" x2="648" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spq-arrow)"/>
</svg>

| Champ | À renseigner |
|---|---|
| **Produit** | La famille de produits Oracle à laquelle la règle appartient. |
| **Composant** | Le composant qui en requiert un autre. Non modifiable sur une ligne enregistrée. |
| **Pré-requis** | Le composant requis. Non modifiable sur une ligne enregistrée. |

### Import depuis Excel \{#import\}

**Importer** charge des lignes depuis un fichier Excel (`.xlsx`) ou `.csv` dont les colonnes reprennent celles de la grille : **Exporter** la grille, modifier le fichier puis le réimporter. **Lignes existantes** indique le traitement d'une ligne dont la clé existe déjà : **Mettre à jour ou insérer** (par défaut : les lignes trouvées sont mises à jour, les autres ajoutées), **Insérer seulement** ou **Mettre à jour seulement**.

<svg viewBox="0 0 1320 296" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ipq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ipq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ipq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ipq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="258" rx="14" fill="url(#ipq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="320" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Importer depuis Excel</text>
  <line x1="300" y1="66" x2="1020" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="320" y="88" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Lignes existantes</text>
  <rect x="320" y="98" width="151" height="22" rx="11" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="395.5" y="113" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Mettre à jour ou insérer</text>
  <rect x="479" y="98" width="114" height="22" rx="11" fill="transparent" stroke="#475569" strokeWidth="1"/>
  <text x="536.0" y="113" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Insérer seulement</text>
  <rect x="601" y="98" width="146" height="22" rx="11" fill="transparent" stroke="#475569" strokeWidth="1"/>
  <text x="674.0" y="113" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Mettre à jour seulement</text>
  <rect x="320" y="132" width="680" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#475569" strokeWidth="1" strokeDasharray="5 4"/>
  <text x="660.0" y="154" fill="#94a3b8" fontSize="14" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪</text>
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">prerequisites.xlsx · 24 lignes</text>
  <text x="320" y="210" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">24 lignes</text>
  <rect x="380" y="198" width="78" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="419.0" y="210.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 24 valides</text>
  <line x1="300" y1="228" x2="1020" y2="228" stroke="#1f2937" strokeWidth="1"/>
  <rect x="812" y="240" width="188" height="24" rx="5" fill="url(#ipq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="906.0" y="255.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer 24 lignes valides</text>
  <rect x="743" y="240" width="61" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.5" y="255.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="12" y="80" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes existantes</text>
  <text x="22" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mettre à jour ou insérer, insérer, mettre à jour</text>
  <line x1="282" y1="97.0" x2="320" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ipq-arrow)"/>
  <rect x="12" y="142" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déposer le fichier</text>
  <text x="22" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx ou .csv, colonnes par nom</text>
  <line x1="282" y1="159.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ipq-arrow)"/>
  <rect x="1034" y="190" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérifier</text>
  <text x="1044" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles et base, avant d'enregistrer</text>
  <line x1="1034" y1="207.0" x2="460" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ipq-arrow)"/>
  <rect x="1034" y="240" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer les lignes valides</text>
  <text x="1044" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les lignes invalides sont ignorées</text>
  <line x1="1034" y1="257.0" x2="1000" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ipq-arrow)"/>
</svg>

1. Déposer le fichier dans la fenêtre, puis cliquer sur **Vérifier** : chaque ligne est contrôlée au regard des règles de l'écran et de la base, et chaque ligne invalide est listée avec sa raison.
2. **Enregistrer N lignes valides** écrit les lignes valides ; les lignes invalides sont ignorées.

Le fichier porte les colonnes suivantes :

| Colonne | Contenu |
|---|---|
| **Produit** | Famille de produit. |
| **Composant** | Clé — composant qui en exige un autre. |
| **Pré-requis** | Clé — composant exigé. |

---

## Conseils & bonnes pratiques

- **Garder les règles alignées avec le price book Oracle et les conditions complémentaires** — les deux peuvent introduire de nouveaux pré-requis au renouvellement.
- **Un pré-requis circulaire** est une erreur de configuration — Nomasx-1 ne bouclera pas, mais le calcul de conformité sera faux.
- **Documenter chaque règle d'une brève justification** dans les notes de version, surtout pour des dépendances non évidentes entre modules non financiers.
