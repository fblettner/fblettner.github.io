---
title: Composants
description: "Catalogue maître des composants de licence — liste de prix, catégorie, nom convivial."
keywords: [Nomasx-1, paramètres, pricing, composants, catalogue de licence, liste de prix, catégorie]
---

# Composants

L'écran **Composants** est le catalogue maître de chaque composant de licence sur lequel Nomasx-1 raisonne. Une ligne par composant, avec la *Liste de prix* à laquelle il appartient, sa catégorie et un nom convivial. Tous les autres écrans licence et OUT s'y joignent.

C'est la table à maintenir dès qu'Oracle introduit un nouveau composant ou en renomme un existant.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 324" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="gcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="gcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="gcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="gcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="244" rx="14" fill="url(#gcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="238" y="38" width="16" height="16" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <line x1="238" y1="44" x2="254" y2="44" stroke="#4a9eff" strokeWidth="1"/>
  <text x="264" y="51" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Composants de licence</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="90" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">118 lignes · 6 ms</text>
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
  <text x="358" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPOSANT ID (ID)</text>
  <text x="368" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT ID</text>
  <text x="638" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LISTE DE PRIX</text>
  <text x="748" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CATÉGORIE</text>
  <rect x="238" y="162" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="358" y="176.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1111</text>
  <text x="368" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne Inventory Management</text>
  <text x="638" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="748" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Supply Chain Management</text>
  <rect x="238" y="184" width="844" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="358" y="198.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1501</text>
  <text x="368" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne Financials</text>
  <text x="638" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="748" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Financial Management</text>
  <rect x="238" y="206" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="358" y="220.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">2003</text>
  <text x="368" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Oracle Enterprise Edition</text>
  <text x="638" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Technology</text>
  <text x="748" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <text x="238" y="252" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre un formulaire vide</text>
  <line x1="200" y1="113.0" x2="238" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gcp-arrow)"/>
  <rect x="20" y="44" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="59" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer</text>
  <text x="30" y="72" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">des lignes depuis un fichier Excel</text>
  <line x1="200" y1="61.0" x2="522.5" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gcp-arrow)"/>
  <rect x="20" y="193" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="208" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="30" y="221" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le formulaire</text>
  <line x1="200" y1="210.0" x2="238" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gcp-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier à compléter et réimporter</text>
  <line x1="1120" y1="113.0" x2="1060.5" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gcp-arrow)"/>
  <rect x="228" y="278" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="238" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant ID</text>
  <text x="238" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le numéro, puis le nom</text>
  <line x1="338.0" y1="278" x2="338" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gcp-arrow)"/>
  <rect x="548" y="278" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="558" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste de prix</text>
  <text x="558" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Technology : comptée en Named User Plus</text>
  <line x1="658.0" y1="278" x2="658" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gcp-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Source de vérité unique** pour le nommage des composants dans Nomasx-1.
- **Trois axes de classification.** *Liste de prix* (catalogue Oracle), *Catégorie* (Applications, Database, Middleware…) et *Composant* (nom lisible).

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Composant ID (ID)** · **Composant ID** | `CPT_ID` — identifiant numérique, et son nom. | Référencé par tous les autres écrans licence, Oracle et OUT. |
| **Liste de prix** | `CPT_LISTS` — catalogue Oracle. | Liste de prix Oracle sous laquelle le composant est vendu. `Technology` désigne une base, une option ou un pack : une ligne en Named User Plus sur ce composant est un comptage, pas des licences nominatives. |
| **Catégorie** | `CPT_CATEGORY` — classification large. | Applications, Database, Middleware… |
| **Composant** | `CPT_COMPONENT` — nom lisible. | Le nom repris par toutes les pages. |

---

## Boîte de dialogue \{#edit\}

La grille est modifiable. **Ajouter une ligne** ouvre un formulaire vide ; un clic sur une ligne l'ouvre ; **Modifier en lot** modifie les lignes sur place, dans la grille. Le formulaire, **Modifier · Paramètres - Composants de licence** (**Nouveau · Paramètres - Composants de licence** sur une nouvelle ligne), porte **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer** ; une nouvelle ligne n'a que **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1200 326" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="spc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="spc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="spc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="spc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="292" rx="14" fill="url(#spc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Composants de licence</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPOSANT ID</text>
  <rect x="240" y="88" width="720" height="24" rx="5" fill="#111827" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="104" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1111 — JD Edwards EnterpriseOne Inventory Management</text>
  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LISTE DE PRIX</text>
  <rect x="240" y="134" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="240" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <rect x="240" y="180" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne Supply Chain Management</text>
  <text x="240" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <rect x="240" y="226" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JD Edwards EnterpriseOne Inventory Management</text>
  <line x1="220" y1="266" x2="980" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <rect x="877" y="278" width="83" height="22" rx="5" fill="url(#spc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="918.5" y="292.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="808" y="278" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="292.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="728" y="278" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="764.0" y="292.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="648" y="278" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="684.0" y="292.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="83" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clé</text>
  <text x="30" y="111" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en lecture seule une fois enregistrée</text>
  <line x1="200" y1="100.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spc-arrow)"/>
  <rect x="1000" y="221" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="236" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="1010" y="249" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le nom repris partout</text>
  <line x1="1000" y1="238.0" x2="960" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spc-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer · Dupliquer</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur une ligne enregistrée</text>
  <line x1="200" y1="289.0" x2="648" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spc-arrow)"/>
</svg>

| Champ | À renseigner |
|---|---|
| **Composant ID** | Numéro du composant, saisi à l'ajout de la ligne — tout numéro encore libre, ce qui permet de créer un nouveau composant. Non modifiable sur une ligne enregistrée : pour renuméroter un composant, en ajouter un nouveau. |
| **Liste de prix** | `JD Edwards`, `Technology`… |
| **Catégorie** | Le regroupement auquel appartient le composant. |
| **Composant** | Le nom repris par toutes les pages. |

### Import depuis Excel \{#import\}

**Importer** charge des lignes depuis un fichier Excel (`.xlsx`) ou `.csv` dont les colonnes reprennent celles de la grille : **Exporter** la grille, modifier le fichier puis le réimporter. **Lignes existantes** indique le traitement d'une ligne dont la clé existe déjà : **Mettre à jour ou insérer** (par défaut : les lignes trouvées sont mises à jour, les autres ajoutées), **Insérer seulement** ou **Mettre à jour seulement**.

<svg viewBox="0 0 1320 296" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="icp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="icp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="icp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="icp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="258" rx="14" fill="url(#icp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">components.xlsx · 118 lignes</text>
  <text x="320" y="210" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">118 lignes</text>
  <rect x="380" y="198" width="83" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="421.5" y="210.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 118 valides</text>
  <line x1="300" y1="228" x2="1020" y2="228" stroke="#1f2937" strokeWidth="1"/>
  <rect x="806" y="240" width="194" height="24" rx="5" fill="url(#icp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="903.0" y="255.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer 118 lignes valides</text>
  <rect x="737" y="240" width="61" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="767.5" y="255.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="12" y="80" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes existantes</text>
  <text x="22" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mettre à jour ou insérer, insérer, mettre à jour</text>
  <line x1="282" y1="97.0" x2="320" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#icp-arrow)"/>
  <rect x="12" y="142" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déposer le fichier</text>
  <text x="22" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx ou .csv, colonnes par nom</text>
  <line x1="282" y1="159.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#icp-arrow)"/>
  <rect x="1034" y="190" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérifier</text>
  <text x="1044" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles et base, avant d'enregistrer</text>
  <line x1="1034" y1="207.0" x2="460" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#icp-arrow)"/>
  <rect x="1034" y="240" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer les lignes valides</text>
  <text x="1044" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les lignes invalides sont ignorées</text>
  <line x1="1034" y1="257.0" x2="1000" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#icp-arrow)"/>
</svg>

1. Déposer le fichier dans la fenêtre, puis cliquer sur **Vérifier** : chaque ligne est contrôlée au regard des règles de l'écran et de la base, et chaque ligne invalide est listée avec sa raison.
2. **Enregistrer N lignes valides** écrit les lignes valides ; les lignes invalides sont ignorées.

Le fichier porte les colonnes suivantes :

| Colonne | Contenu |
|---|---|
| **Composant ID** | Clé — le composant de licence. |
| **Liste de prix** | Liste de prix Oracle (JD Edwards, Technology…). |
| **Catégorie** | Regroupement de composants. |
| **Composant** | Libellé du composant. |

---

## Conseils & bonnes pratiques

- **Ajouter un composant une seule fois et le référencer partout.** Éviter les doublons par application — le modèle est global.
- **Garder la *Liste de prix* alignée avec le price book Oracle** pour que le catalogue se lise comme les contrats.
- **Auditer les modifications via `CPT_AUDIT_USER` / `CPT_AUDIT_DATE`** — utile quand une colonne se met à afficher un libellé différent.
