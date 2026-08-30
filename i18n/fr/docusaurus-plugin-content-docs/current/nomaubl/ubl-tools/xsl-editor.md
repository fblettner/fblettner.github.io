---
title: Éditeur XSL
description: "Mapper les champs d'un spool XML source vers les termes métier UBL 2.1 (codes BT) via un formulaire visuel — sans rédiger de XSLT à la main. Auto-mapping assisté par IA inclus."
keywords: [NomaUBL, XSL, XSLT, éditeur, UBL, mapping, BT, BG, EN 16931, IA, auto-map, JD Edwards, SAP, NetSuite, ERP personnalisé, ubl-template, TAG_ROOT, TAG_VAT_LINE, TAG_LINE_ITEM]
---

# Éditeur XSL

L'**Éditeur XSL** est l'outil central de NomaUBL pour le mapping source → UBL. Il transforme la rédaction d'une transformation UBL — un travail habituellement long — en un **mapping par formulaire** entre les champs d'un spool XML source et les termes métier (codes BT) d'une facture UBL 2.1.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Le même éditeur s'applique à tout spool XML bien formé qui transporte des données de facture.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xeui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xeui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xeui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="xeui-g-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#xeui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur XSL</text>
  <rect x="680" y="30" width="100" height="22" rx="5" fill="url(#xeui-g-purple)" stroke="#c084fc" strokeWidth="1"/>
  <text x="730" y="45" fill="#e9d5ff" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">✦ Auto-mapping IA</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHIER XSL</text>
  <rect x="320" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices.xsl ▾</text>
  <rect x="540" y="82" width="60" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="570" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Charger</text>
  <rect x="606" y="82" width="140" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="676" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Nouvelle transfo</text>

  <text x="240" y="124" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">/app/xsl/invoices/</text>

  <rect x="240" y="138" width="180" height="26" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="330" y="155" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Mapping des variables</text>
  <rect x="424" y="138" width="120" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Éditeur XSL</text>

  <rect x="240" y="172" width="540" height="28" rx="5" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <rect x="252" y="178" width="60" height="16" rx="3" fill="rgba(74,158,255,0.20)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="282" y="189" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">TAG_ROOT</text>
  <text x="324" y="189" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">portée : //Invoices/Invoice</text>
  <text x="752" y="189" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">contexte</text>

  <rect x="240" y="206" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="221" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BT · DESCRIPTION · MAPPING</text>

  <rect x="240" y="230" width="540" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="236" width="40" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="246" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-1</text>
  <text x="294" y="246" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Numéro de facture</text>
  <rect x="430" y="234" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="246" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Header/DocNumber</text>
  <text x="760" y="246" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="260" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="266" width="40" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="276" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-2</text>
  <text x="294" y="276" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Date d'émission</text>
  <rect x="430" y="264" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="276" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Header/IssueDate</text>
  <text x="760" y="276" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="290" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="296" width="40" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="306" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-13</text>
  <text x="294" y="306" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Bon de commande</text>
  <rect x="430" y="294" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="306" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Header/PoNumber</text>
  <text x="760" y="306" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="324" width="540" height="28" rx="5" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <rect x="252" y="330" width="92" height="16" rx="3" fill="rgba(74,158,255,0.20)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="298" y="341" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">TAG_LINE_ITEM</text>
  <text x="356" y="341" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">portée : Lines/Line</text>
  <text x="752" y="341" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">contexte</text>

  <rect x="240" y="358" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="364" width="48" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="272" y="374" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-129</text>
  <text x="302" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Quantité</text>
  <rect x="430" y="362" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="374" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Quantity</text>
  <text x="760" y="374" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="402" width="180" height="28" rx="6" fill="url(#xeui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="330" y="420" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Enregistrer ●</text>
  <rect x="436" y="402" width="180" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="526" y="420" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬆ Charger XML source</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de fichier</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichiers cœur masqués</text>
  <line x1="220" y1="98" x2="320" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>

  <rect x="820" y="30" width="160" height="34" rx="8" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.40)" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="45" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Assistance IA</text>
  <text x="830" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">XML + PDF → JSON</text>
  <line x1="820" y1="46" x2="780" y2="42" stroke="#c084fc" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>

  <rect x="20" y="172" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contextes de portée</text>
  <text x="30" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chemins relatifs</text>
  <line x1="220" y1="188" x2="240" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>

  <rect x="820" y="262" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes codées BT</text>
  <text x="830" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">↓ ouvre le navigateur XML</text>
  <line x1="820" y1="278" x2="780" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>
</svg>

---

## Rôle de l'éditeur

Une transformation NomaUBL est un fichier XSLT qui dérive des variables `TAG_*` à partir du XML source ; tout le reste — espaces de noms, ordre des éléments, conformité EN 16931, extensions françaises — est délégué à un fichier `ubl-template.xsl` partagé fourni par NomaUBL. Personnaliser une transformation revient donc à **mapper des chemins XML vers les variables TAG_**, ce que l'éditeur propose sous forme de formulaire.

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xsl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="xsl-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/></marker>
    <linearGradient id="xsl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xsl-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="xsl-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xsl-g-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.16"/><stop offset="100%" stopColor="#c084fc" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="100" width="170" height="80" rx="12" fill="url(#xsl-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="105" y="130" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Spool XML</text>
  <text x="105" y="150" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NS</text>
  <text x="105" y="166" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">ERP personnalisé</text>
  <rect x="220" y="20" width="170" height="60" rx="10" fill="url(#xsl-g-purple)" stroke="#c084fc" strokeWidth="1.3" strokeDasharray="4 3"/>
  <text x="305" y="44" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📑 Échantillon PDF</text>
  <text x="305" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">(facultatif)</text>
  <rect x="220" y="100" width="200" height="80" rx="12" fill="url(#xsl-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="320" y="130" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✏️ Éditeur XSL</text>
  <text x="320" y="152" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Formulaire de mapping</text>
  <rect x="450" y="100" width="200" height="80" rx="12" fill="url(#xsl-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="550" y="130" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">📜 XSLT personnalisé</text>
  <text x="550" y="150" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">variables TAG_*</text>
  <text x="550" y="166" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">+ ubl-template.xsl</text>
  <rect x="680" y="100" width="200" height="80" rx="12" fill="url(#xsl-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="780" y="124" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 UBL 2.1</text>
  <text x="780" y="143" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">EN 16931 / Factur-X</text>
  <text x="780" y="159" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">extended-ctc-fr</text>
  <rect x="910" y="100" width="80" height="80" rx="12" fill="url(#xsl-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="950" y="134" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 PA</text>
  <text x="950" y="152" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Plateforme</text>
  <text x="950" y="166" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Agréée</text>
  <line x1="190" y1="140" x2="220" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="205" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Load</text>
  <path d="M 305 80 L 305 100" stroke="#c084fc" strokeWidth="1.3" strokeDasharray="3 3" markerEnd="url(#xsl-arrow-purple)"/>
  <text x="365" y="92" fontSize="9" fill="#c084fc" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">AI Auto-Map</text>
  <line x1="420" y1="140" x2="450" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="435" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Save</text>
  <line x1="650" y1="140" x2="680" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="665" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Exécuter</text>
  <line x1="880" y1="140" x2="910" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="895" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Dépôt</text>
</svg>

L'éditeur ne touche jamais directement à la sortie UBL — cela reviendrait à réimplémenter EN 16931 à chaque transformation. Il édite le **mapping** que le template UBL consommera ; le template, lui, reste inchangé.

---

## Barre d'outils

L'en-tête de page comporte une barre d'outils fixe :

| Élément | Description |
|---|---|
| **Sélecteur de fichier** | Liste déroulante de tous les fichiers `.xsl` présents dans le répertoire XSL configuré (`e-invoicing.ublXslt`). Trois fichiers partagés (`ubl-common.xsl`, `ubl-template.xsl`, `ubl-defaults.xsl`) sont filtrés — ils contiennent la mécanique UBL et ne se modifient pas par template. |
| **Badge de répertoire** | Affiche le répertoire XSL résolu. Configuré dans *Configuration → System → e-invoicing → ublXslt*. |
| **Load** | Lit le fichier sélectionné depuis le disque vers l'éditeur (les deux onglets partagent le même tampon). |
| **New Transform** | Ouvre la modale *New Transform* — copie `ubl-template.xsl` sous un nouveau nom et le sélectionne. Sert à initialiser une transformation par client ou par type de document. |

---

## Onglets

L'éditeur propose deux onglets qui travaillent sur le même fichier XSLT. L'onglet de gauche est le formulaire de mapping visuel ; celui de droite est la source XSLT brute.

### Variable Mapping (par défaut)

Le formulaire de mapping — l'alternative visuelle à la rédaction XSLT manuelle.

#### Barre d'actions

| Bouton | Comportement |
|---|---|
| **Load XML Source** | Charge un échantillon XML (côté navigateur) et en extrait tous les chemins d'éléments. Les chemins alimentent les sélecteurs en regard de chaque champ — les valeurs se renseignent par clic plutôt que par saisie. |
| **Charger un échantillon connecteur** | Quand le modèle de document actif est en `source = Connecteur`, ce bouton appelle une fois la requête SQL ou l'endpoint REST configuré, puis injecte la réponse dans le même sélecteur de chemins. Les listes déroulantes XPath autocomplètent alors sur des données réelles — même expérience qu'avec un vrai spool XML, sans aucun fichier. Le bouton est masqué pour les modèles `XML` et `UBL`. |
| **AI Auto-Map** ✦ | Ouvre la modale *AI Auto-Map*. À partir d'un échantillon XML (et d'un PDF optionnel), l'IA renvoie un mapping JSON des variables `TAG_*` vers les chemins XML, correctement scopés. Voir [AI Auto-Map](#ai-auto-map) ci-dessous. |
| **Save Mappings** | Réécrit dans le fichier XSLT les valeurs courantes de toutes les variables `TAG_*`. Le point indicateur (`●`) apparaît quand le mapping a changé sans avoir été enregistré. |

#### Sections

Le formulaire est organisé par zone du document UBL. Chaque section n'apparaît que si au moins une de ses variables `TAG_*` est présente dans le XSLT chargé — les sections absentes du template sous-jacent ne sont pas affichées.

| Section | Zone UBL | Variables principales |
|---|---|---|
| **Document Root** | Élément racine de la facture | `TAG_ROOT` — l'élément XML englobant une facture. |
| **Custom Extension Fields** | `ext:UBLExtensions` | Issue de secours pour des données sans équivalent EN 16931 — voir [Champs d'extension](#custom-extension-fields) plus bas. |
| **Invoice Header** | BT-1, BT-2, BT-3, BT-9, BT-10, BT-12, BT-13, BT-14, BT-19 | Numéro, dates, références. La référence de commande porte à la fois le bon de commande de l'acheteur (BT-13) et la **référence de commande du vendeur** (BT-14, `cac:OrderReference/cbc:SalesOrderID`) avec sa propre date de référence — les deux se règlent côte à côte, chacun depuis un champ source. |
| **Billing References** | BT-11, BT-14 à BT-18, BT-122 à BT-124 | Projet, contrat, expédition, justificatifs. |
| **Preceding Invoices — répété** *(BG-3, 0..n)* | BT-25, BT-26 | Parcourt un groupe source répétitif et génère un `cac:BillingReference` par facture antérieure (avec une date d'émission facultative), en complément de la référence unique BT-25/BT-26 déjà gérée dans *Billing References*. |
| **Embedded Attachments** *(BT-125)* | `cac:AdditionalDocumentReference / EmbeddedDocumentBinaryObject` | Joindre un document déjà encodé en base64 dans le spool source — jusqu'à quatre par facture. Voir [Pièces jointes intégrées](#embedded-attachments) plus bas. |
| **Seller / Supplier** | BT-27 à BT-43 | Identification, adresse et contact du vendeur — plus, dans le panneau *Seller Identifiers*, jusqu'à quatre identifiants supplémentaires avec un schéma (BT-29), chacun un champ source + un code de la liste *Scheme IDs*. |
| **Buyer / Customer** | BT-44 à BT-58, BT-163 | Identification, adresse et contact de l'acheteur — plus, dans le panneau *Buyer Identifiers*, jusqu'à quatre identifiants supplémentaires avec un schéma (BT-46), chacun un champ source + un code de la liste *Scheme IDs*. |
| **Agent Party** | extended-ctc-fr | Tiers intermédiaire optionnel. |
| **Delivery** | BT-70 à BT-80 | Date et adresse de livraison. |
| **Payment** | BT-20, BT-81 à BT-91 | Moyen, IBAN, BIC, mandat, conditions. |
| **Payer / Direct-debit mandate** *(EXT-FR-FE-BG-02)* | BT-89, BT-91 | Payeur en prélèvement SEPA — la partie débitrice, la référence de mandat (BT-89) et le compte débité (IBAN, BT-91). Voir [Payeur / mandat de prélèvement](#payer-mandate) ci-dessous. |
| **VAT** | BT-110, BT-116 à BT-121 | Détail TVA — voir [scoping](#scoping) ci-dessous. |
| **Invoice Lines** | BT-126 à BT-161 | Lignes de facture, avec le pays d'origine (BT-159), le code de classification (BT-158, groupe répétable jusqu'à quatre codes), la version de schéma (BT-158-2) et l'**identifiant article normalisé** (BT-157, `cac:Item/cac:StandardItemIdentification/cbc:ID`) par ligne — un code enregistré comme un GTIN, sa valeur depuis un champ source et son schéma choisi dans la liste ISO 6523 (par ex. `0160` pour un GTIN) — voir [scoping](#scoping) ci-dessous. |
| **Item Properties** *(BG-32)* | BG-32 | Attributs produit attachés à une ligne. |
| **Line Allowances/Charges** *(BG-27 / BG-28)* | BG-27 / BG-28 | Remise ou charge par ligne. Pointer le TAG *Item AC* sur `.` (ou le laisser vide) quand les champs de remise se trouvent directement sur la ligne, sans élément parent — le moteur itère alors la ligne elle-même. Quand la source ne porte que le pourcentage, le montant et la base sont déduits du net de la ligne ; pourcentage + base déduit le montant, pourcentage + montant déduit la base. |
| **Line Document References** *(BT-128, BT-132)* | BT-128, BT-132 | Références de document par ligne — pièces justificatives (BT-128, schéma UNTDID 1153) et la ligne de bon de commande référencée via `TAG_LINE_ORDER_LINE_REF` → `cac:OrderLineReference/cbc:LineID` (BT-132, groupe EXT-FR-FE-BG-09, placé entre InvoicePeriod et DocumentReference selon la séquence UBL 2.1). |
| **Line Preceding Invoice** *(EXT-FR-FE-136)* | `cac:BillingReference` par ligne | Référence à une facture antérieure au niveau ligne — utile pour un avoir en ligne. Écrit `cac:BillingReference / cac:InvoiceDocumentReference / cbc:ID` (avec une date d'émission facultative) à l'intérieur de la ligne, à la bonne position dans le schéma. |
| **Line Delivery** *(EXT-FR-FE-BG-10)* | Extension française | Groupe livraison par ligne. |
| **Line Notes** *(BT-127)* | BT-127 | Notes libres attachées à une ligne. |
| **Invoice Notes** *(BT-22)* | BT-22 | Notes libres au niveau document. |
| **Loop Notes** | BT-22 | Groupes de notes répétés au niveau document. |

Chaque champ affiche le libellé du BT, son code BT en badge coloré, la valeur courante (chemin XML ou expression) et un sélecteur `↓` qui ouvre le [navigateur XML](#navigateur-xml) sur la droite.

:::info[Couverture complète des champs]
La référence de champs liste désormais chaque groupe (BG) et terme (BT) que le Schematron étendu (BR-FR / CTC-FR 1.3.1) contrôle et que l'éditeur sait mapper — BG-3 à BG-32 et les termes qu'ils encadrent (facture précédente BT-25/26, devise de comptabilisation TVA BT-6 / BT-111, date du fait générateur BT-7, identifiant fiscal vendeur BT-32, subdivisions acheteur / livraison BT-54 / BT-79, contact acheteur BT-56, lieu de livraison BT-71, numéro de carte tronqué BT-87, code unité de quantité BT-130, assiette et motif des charges de ligne BT-142/145, ligne 3 d'adresse de livraison BT-165, et d'autres). Ce que vous pouvez mapper ici correspond désormais exactement à ce que le [validateur](./validate.md) contrôle.
:::

:::info[Encore plus de champs mappables]
L'éditeur a gagné un mappage **Buyer trading name** (BT-45 → `cac:PartyName/cbc:Name` sur la partie client, à l'image du nom commercial vendeur BT-28), et trois mappages de totaux document — **Sum of charges** (BT-108), **Amount already paid** (BT-113) et **Rounding amount** (BT-114). Quand un montant déjà payé ou un arrondi est mappé, le montant dû (BT-115) est calculé comme *total avec TVA − déjà payé + arrondi*. Un mappage ajouté à un modèle apparaît désormais toujours dans sa section, même quand la liste de champs intégrée ne le prévoyait pas.
:::

#### Combiner et filtrer les valeurs source \{#combining-and-matching-source-values\}

Un select `TAG_*` ne se limite pas à un seul chemin XML :

- **Concaténation (`+`).** Assemblez plusieurs tags source en une seule valeur UBL avec l'opérateur ` + ` — `'FirstName + LastName'` les joint par une espace, `'First + ", " + Last'` choisit le séparateur, et les chaînes entre guillemets sont rendues telles quelles. Plus besoin d'une étape de pré-traitement XSL quand un champ UBL agrège plusieurs colonnes source.
- **Liste de valeurs conditionnelle.** Le paramètre `cond_value` des helpers `ubl:emit-item-prop` / `ubl:emit-note` accepte une valeur unique (comme avant) ou une liste séparée par des virgules — `'KWH,M3,LTR'` correspond quand la source vaut l'un des trois. Les espaces autour de chaque élément sont supprimés.
- **Axe parent (`..`).** Un chemin peut remonter à l'élément parent : `../FIELD` atteint un voisin de l'élément ligne courant, `../../FIELD/Sub` deux niveaux plus haut. Cela débloque les XML sources où les lignes sont imbriquées sous un parent qui porte aussi les références de ligne (par exemple la commande client référencée, BT-132) ; les chemins sans `..` se résolvent exactement comme avant.
- **Valeurs constantes (accents graves).** Une valeur encadrée par des accents graves — par exemple `` `EDI` `` — est écrite telle quelle au lieu d'être lue dans la source. Valable pour les champs d'extension, les notes et les attributs d'article ; utile pour les valeurs fixes propres à une plateforme.

#### Scoping

`TAG_ROOT`, `TAG_VAT_LINE` et `TAG_LINE_ITEM` sont des **contextes de portée** : toutes les autres variables s'y rattachent et leurs chemins se résolvent *relativement* au chemin défini par le contexte.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xsl-sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
    <marker id="xsl-sc-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="xsl-sc-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xsl-sc-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
  </defs>
  <rect x="400" y="20" width="200" height="50" rx="10" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Document</text>
  <rect x="400" y="100" width="200" height="60" rx="10" fill="url(#xsl-sc-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_ROOT</text>
  <text x="500" y="143" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">par ex. Invoices</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-sc-arrow-blue)"/>
  <rect x="40" y="200" width="240" height="80" rx="10" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="226" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Header / Seller / Buyer</text>
  <text x="160" y="244" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Delivery / Payment / Notes</text>
  <text x="160" y="266" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.75">relatif à TAG_ROOT</text>
  <rect x="320" y="200" width="240" height="80" rx="10" fill="url(#xsl-sc-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="440" y="228" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_VAT_LINE</text>
  <text x="440" y="252" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">par ex. Tax_Summary/Tax_Line</text>
  <rect x="600" y="200" width="240" height="80" rx="10" fill="url(#xsl-sc-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="720" y="228" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_LINE_ITEM</text>
  <text x="720" y="252" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">par ex. Lines_Group/Line_Item</text>
  <path d="M 500 160 L 500 180 L 160 180 L 160 200" stroke="#64748b" strokeWidth="1.4" fill="none" markerEnd="url(#xsl-sc-arrow)"/>
  <path d="M 500 160 L 500 180 L 440 180 L 440 200" stroke="#64748b" strokeWidth="1.4" fill="none" markerEnd="url(#xsl-sc-arrow)"/>
  <path d="M 500 160 L 500 180 L 720 180 L 720 200" stroke="#64748b" strokeWidth="1.4" fill="none" markerEnd="url(#xsl-sc-arrow)"/>
  <rect x="320" y="320" width="240" height="50" rx="9" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="440" y="340" fill="currentColor" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_VAT_*</text>
  <text x="440" y="358" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">relatif à la ligne TVA</text>
  <line x1="440" y1="280" x2="440" y2="320" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#xsl-sc-arrow)"/>
  <rect x="600" y="320" width="170" height="36" rx="8" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="615" y="335" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">TAG_LINE_*</text>
  <text x="755" y="335" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">scope ligne</text>
  <text x="615" y="350" fill="currentColor" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif" opacity="0.7">champs de la ligne</text>
  <rect x="600" y="362" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="685" y="377" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Item Properties (BG-32)</text>
  <rect x="600" y="388" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="685" y="403" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow. / Charges (BG-27/28)</text>
  <rect x="780" y="362" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="865" y="377" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Line Notes (BT-127)</text>
  <rect x="780" y="388" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="865" y="403" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Doc References (BT-128)</text>
  <line x1="720" y1="280" x2="720" y2="320" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#xsl-sc-arrow)"/>
  <line x1="685" y1="356" x2="685" y2="362" stroke="#94a3b8" strokeWidth="1"/>
  <line x1="685" y1="384" x2="685" y2="388" stroke="#94a3b8" strokeWidth="1"/>
  <path d="M 720 280 L 865 280 L 865 362" stroke="#64748b" strokeOpacity="0.55" strokeWidth="1.2" fill="none"/>
  <line x1="865" y1="384" x2="865" y2="388" stroke="#94a3b8" strokeWidth="1"/>
</svg>

Une bannière de scope bleue apparaît sous chaque variable de contexte pour rappeler le préfixe actif. Le navigateur XML filtre lui aussi ses entrées sur ce scope — le sélecteur ne propose donc que les chemins effectivement adressables depuis le contexte courant.

#### Navigateur XML

Une fois **Load XML Source** activé, cliquer sur le bouton `↓` en regard d'un champ ouvre un **navigateur XML** sur le bord droit de la page. Il liste tous les chemins d'éléments du scope courant et leur valeur d'échantillon — le bon chemin se choisit par inspection plutôt que par saisie. Sa fermeture laisse l'éditeur dans son état précédent.

#### Champs d'extension \{#custom-extension-fields\}

Pour des données attendues par un partenaire mais sans équivalent standard EN 16931 — un mode d'acheminement, une adresse de copie de livraison, un identifiant partenaire — la section *Custom Extension Fields* mappe jusqu'à huit valeurs source dans un bloc `ext:UBLExtensions` en tête de facture. Chaque ligne porte :

| Champ | Effet |
|---|---|
| **Nom d'élément** | Le nom de balise écrit à l'intérieur de `ext:ExtensionContent`. Émis sous forme d'élément simple sans préfixe ni `xmlns`, dans l'espace de noms du document — la forme qu'attendent les plateformes agréées. |
| **Valeur** | Un chemin source, une expression combinant plusieurs chemins, un appel de `{template}` ou une constante entre accents graves (voir [Combiner et filtrer les valeurs source](#combining-and-matching-source-values) plus haut). |
| **Condition d'émission** | Le même prédicat facultatif `cond_value` que les attributs d'article — la ligne est ignorée si la valeur source ne correspond pas. |

Chaque champ configuré est émis dans son propre bloc `ext:UBLExtension` / `ext:ExtensionContent` (UBL n'admet qu'un seul élément enfant par contenu d'extension), et le bloc complet est omis si aucun champ ne se résout. Vide par défaut : les factures existantes restent inchangées.

Les données placées ici sortent du **modèle EN 16931** — privilégier le champ standard lorsqu'il existe (référence comptable BT-19, référence acheteur BT-10…) et vérifier que la plateforme destinataire lit bien l'extension.

#### Factures antérieures — répétées et par ligne \{#preceding-invoices\}

Pour les factures qui référencent un **document précédent** — typiquement un avoir qui pointe sur la facture qu'il corrige — deux mappages viennent compléter la référence unique BT-25 / BT-26 déjà présente dans la section *Billing References* :

**Au niveau document, répété (BG-3, 0..n).** La section *Preceding Invoices — répété* parcourt un groupe source répétitif et émet un `cac:BillingReference` par facture antérieure trouvée. Deux champs :

| Champ | Effet |
|---|---|
| **TAG itérateur** | Chemin du groupe répétitif dans le XML source (par exemple `Header/PriorInvoices/Item`). Un `cac:BillingReference / cac:InvoiceDocumentReference / cbc:ID` est émis par nœud que l'itérateur capture. |
| **TAG date d'émission** *(facultatif)* | Chemin (relatif à l'itérateur) vers la date d'émission de la facture antérieure. Renseigné, il alimente `cbc:IssueDate` ; laissé vide, la référence est émise sans date. |

Le bloc répété et la référence unique BT-25 / BT-26 peuvent coexister — retenir celle qui colle à la source, ou les deux quand la source porte une référence de tête plus une liste répétitive.

**Au niveau ligne (EXT-FR-FE-136).** Utile pour les avoirs en ligne qui pointent sur une ligne de facture précise. Un nouveau mappage sous la section *Invoice Lines* émet `cac:BillingReference / cac:InvoiceDocumentReference / cbc:ID` à l'intérieur de la ligne — avec une date d'émission facultative — à la bonne position dans le schéma.

Le XPath de ligne est contrôlé par le [schematron Extended-CTC-FR](./validate.md) aligné sur la publication FNFE V1.4.0 du 30 juin 2026, donc la structure émise correspond à ce que la PA attend.

#### Pièces jointes intégrées \{#embedded-attachments\}

La section *Embedded Attachments* joint à la facture UBL un document déjà encodé en base64 dans le spool source — jusqu'à quatre par facture. Chaque ligne mappe :

| Champ | Effet |
|---|---|
| **Chemin source base64** | Le chemin XML qui porte la charge base64 dans le spool. |
| **Nom de fichier** | Texte fixe ou espace réservé `{Champ}` / `{Groupe/Champ}` — par ex. `{DocNumber}.pdf`. |
| **Type MIME** | Le type de média déclaré (`application/pdf`, `image/png`, …). |
| **Code** | Un code choisi dans la liste de référence de la plateforme (`PJA`, `RIB`, `BON_LIVRAISON`, …). |

La ligne est émise sous forme de `cac:AdditionalDocumentReference` avec un `EmbeddedDocumentBinaryObject` inline (BT-125). Elle se place à la bonne position dans le schéma et coexiste avec les autres sources de pièces jointes déjà gérées (fichiers sur disque, PDF lisible généré) — le tout reste groupé dans la même sortie. Jusqu'à cette section, une pièce jointe ne pouvait venir que d'un fichier sur disque ou du PDF généré, jamais d'un champ base64 déjà présent dans le spool.

#### Payeur / mandat de prélèvement \{#payer-mandate\}

Pour les factures réglées par **prélèvement SEPA**, le payeur n'est pas toujours l'acheteur — la section *Payer / Direct-debit mandate* mappe le bloc débiteur complet (groupe d'extension française EXT-FR-FE-BG-02). Elle porte la partie payeur — nom commercial et raison sociale, SIREN, TVA, adresse, contact, adresse électronique et code de rôle — plus les deux champs de mandat :

| Champ | Effet |
|---|---|
| **Référence de mandat** *(BT-89)* | L'identifiant du mandat SEPA, émis en `cac:PaymentMeans/cac:PaymentMandate/cbc:ID`. |
| **Compte débité (IBAN)** *(BT-91)* | Le compte du débiteur sur lequel le montant est prélevé, émis en `cac:PaymentMandate/cac:PayerFinancialAccount/cbc:ID`. |

Les identifiants payeur supplémentaires (0..n) vont dans le panneau *Payer Identifiers* associé, chacun un champ source et un schéma de la liste *Scheme IDs*. Le bloc entier n'est émis **que lorsqu'un champ payeur est renseigné**, de sorte que les factures ordinaires restent inchangées ; quand il est présent, le PDF lisible affiche le payeur et le compte débité aux côtés des informations de paiement.

### XSL Editor

L'onglet de droite ouvre le même fichier dans un **éditeur Monaco** complet (le moteur utilisé par VS Code) avec coloration syntaxique XML, numéros de ligne et minimap. Cet onglet sert quand le formulaire ne couvre pas un besoin :

- Expressions XPath personnalisées en dehors des variables TAG_.
- Logique conditionnelle via `<xsl:if>` / `<xsl:choose>`.
- Appel de templates définis dans `ubl-common.xsl`.
- Inspection de la sérialisation finale du mapping issu du formulaire.

Le bouton de sauvegarde affiche un point `●` quand le tampon diverge du fichier sur disque.

---

## AI Auto-Map

La modale AI Auto-Map est un raccourci pour construire un mapping à partir de zéro.

| Champ | Description |
|---|---|
| **Upload XML from computer** | Charge l'échantillon XML source. |
| **Upload PDF** *(facultatif)* | Charge un PDF rendu de la même facture. L'IA s'en sert comme référence visuelle pour lever les ambiguïtés sur les champs. |
| **Invoice root element** | Élément XML englobant une facture (par ex. `Invoices`). Pré-rempli depuis la racine du XML chargé, modifiable. |
| **XML content** | Corps du spool XML. Renseigné automatiquement par le téléversement, modifiable manuellement. |

Cliquer sur **Auto-Map** transmet le XML (et le PDF s'il est fourni) à l'IA, avec la liste des variables `TAG_*` et de leur contexte BT/BG. L'IA renvoie un mapping JSON qui respecte les règles de scoping (chemins relatifs à `TAG_ROOT`, chemins relatifs à la ligne dans `TAG_LINE_ITEM`, etc.). Le mapping est fusionné dans le formulaire ; après revue, cliquer sur **Save Mappings** pour valider.

L'IA reste prudente — elle omet toute variable dont elle n'est pas certaine plutôt que de proposer une supposition. Une revue manuelle reste nécessaire ; l'éditeur accélère le travail, il ne remplace pas l'expertise.

---

## New Transform

La modale *New Transform* copie `ubl-template.xsl` sous un nouveau nom dans le même répertoire XSL.

| Champ | Description |
|---|---|
| **File name (without .xsl)** | Nom de base de la nouvelle transformation. L'extension `.xsl` est ajoutée automatiquement. |

Après création, le nouveau fichier devient le fichier sélectionné et est chargé dans l'éditeur — prêt pour le mapping.

---

## Conseils & bonnes pratiques

- **Démarrer avec AI Auto-Map sur un échantillon représentatif.** Couvre généralement 70–90 % du mapping en une passe ; le reste est affaire de revue et de cas particuliers.
- **Charger systématiquement un échantillon XML avant de mapper.** Avec **Load XML Source** actif, les sélecteurs déroulants réduisent fortement la saisie manuelle et écartent les coquilles.
- **Renseigner TAG_ROOT, TAG_VAT_LINE et TAG_LINE_ITEM en premier.** Tous les autres champs se résolvent relativement à ces scopes ; les renseigner d'abord garantit que les sélecteurs suivants ouvrent le bon contexte.
- **Une transformation par layout source.** Différents systèmes sources — ou différents types de documents pour un même système — méritent généralement leur propre `.xsl`. Préférer *New Transform* à un copier-coller dans le système de fichiers.
- **Ne pas modifier les fichiers partagés.** `ubl-common.xsl`, `ubl-template.xsl` et `ubl-defaults.xsl` sont filtrés du sélecteur pour une raison : toute modification y touche toutes les transformations et risque de ne pas survivre à une montée de version NomaUBL.
- **Utiliser l'onglet XSL Editor pour ce que le formulaire ne couvre pas.** Logique conditionnelle, XPath personnalisé, templates nommés — Monaco donne toute la puissance de XSLT 1.0 / 2.0 en complément du mapping du formulaire.
- **Valider après chaque modification de mapping.** *UBL Tools → Validate* avec `Source = XML` exécute la transformation et les règles Schematron en une passe ; la table de logs signale tout chemin erroné ou variable manquante.
