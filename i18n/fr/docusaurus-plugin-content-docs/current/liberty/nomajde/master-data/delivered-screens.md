---
title: Sociétés, articles, paramétrage et OMW
description: "Les écrans JD Edwards EnterpriseOne livrés prêts à l'emploi dans Nomajde : Sociétés et comptes, Articles, les tables de paramétrage et l'Object Management Workbench — 21 grilles en lecture seule sur les tables de JD Edwards, avec leurs fiches, leurs onglets et les libellés du dictionnaire de données JD Edwards."
keywords: [Nomajde, JD Edwards, JDE E1, données de base, paramétrage, F0010, F0006, F0901, F0909, F4101, F4102, F0014, F0013, F0015, F4008, F0012, F4095, F0002, F40203, F40205, F40039, F41001, OMW, F98220, F98222, F98210, sociétés, centres de coûts, plan de comptes, articles, ICA, numéros suivants]
---

# Sociétés, articles, paramétrage et OMW

Au-delà des UDC et du carnet d'adresses, Nomajde livre **21 écrans sur les tables de JD Edwards EnterpriseOne**, utilisables dès la première connexion : les sociétés et les comptes, les articles, les tables de paramétrage et l'Object Management Workbench. Ils sont rangés dans les dossiers du menu où on les cherche — **Données JD Edwards → Données de base** et **Données JD Edwards → Paramétrage**, **Développement → Object Management Workbench** —, avec des colonnes titrées d'après le dictionnaire de données de JD Edwards.

Chaque écran lit JD Edwards en direct et reste **en lecture seule** : les modifications se font dans JD Edwards.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 336" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="306" rx="14" fill="url(#njds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Item Master (F4101)</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">jdedwards.f4101_get</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="720" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600.0" y="100.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▸ Filtres avancés</text>
  <rect x="240" y="116" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="130.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="396" y="116" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="432.0" y="130.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="890" y="116" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="825" y="116" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.0" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="765" y="116" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="792.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="705" y="116" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="645" y="116" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="672.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Default</text>
  <rect x="240" y="148" width="720" height="138" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="148" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ITEM NUMBER (SHORT)</text>
  <text x="380" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">2ND ITEM NUMBER</text>
  <text x="490" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="690" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">SEARCH TEXT</text>
  <text x="840" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STOCKING TYPE (ID)</text>
  <text x="250" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60003</text>
  <text x="380" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1001</text>
  <text x="490" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike Rack - Trunk Mount</text>
  <text x="690" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Rack</text>
  <text x="840" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P</text>
  <line x1="241" y1="194" x2="959" y2="194" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60011</text>
  <text x="380" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">210</text>
  <text x="490" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Mountain Bike, Red</text>
  <text x="690" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Mountain</text>
  <text x="840" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P</text>
  <line x1="241" y1="216" x2="959" y2="216" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60020</text>
  <text x="380" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">230</text>
  <text x="490" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Youth Sport Bike</text>
  <text x="690" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Youth Sport</text>
  <text x="840" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P</text>
  <line x1="241" y1="238" x2="959" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60038</text>
  <text x="380" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">220</text>
  <text x="490" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Touring Bike, Red</text>
  <text x="690" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Tour</text>
  <text x="840" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M</text>
  <line x1="241" y1="260" x2="959" y2="260" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60062</text>
  <text x="380" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2001</text>
  <text x="490" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Cro-Moly Frame, Red</text>
  <text x="690" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Frame, Painted</text>
  <text x="840" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M</text>
  <line x1="241" y1="282" x2="959" y2="282" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="302" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">2 378 lignes · lecture seule · une ligne ouvre sa fiche : Général, Classification, Unités de mesure, Planification, Magasin / usine</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'écran et sa table</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lu en direct dans JD Edwards</text>
  <line x1="200" y1="57.0" x2="240" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes les colonnes</text>
  <line x1="200" y1="127.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues, filtres, export</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les outils de la grille</text>
  <line x1="1000" y1="127.0" x2="940" y2="127" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellés du dictionnaire</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les titres de JD Edwards</text>
  <line x1="200" y1="237.0" x2="250" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne → sa fiche</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">onglets, grilles liées</text>
  <line x1="1000" y1="247.0" x2="860" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
</svg>

---

## Fonctionnement des écrans \{#grids\}

Chaque écran est une grille sur une table de JD Edwards, chargée à l'ouverture : recherche, **Filtres avancés** sur toutes les colonnes, **Grouper**, **Colonnes**, vues et export Excel. Une ligne ouvre sa **fiche**, une boîte de dialogue à onglets ; quand une table a des lignes de détail, un onglet les liste — les comptes d'un centre de coûts, les enregistrements par magasin d'un article, les taux de change d'une devise, les objets, les utilisateurs et le journal d'un projet OMW.

Les titres de colonnes et les listes de valeurs proviennent du dictionnaire de données de JD Edwards, dans la langue de ce dictionnaire (l'anglais).

---

## Données de base → Sociétés et comptes \{#organization\}

| Entrée de menu | Table | Onglets de la fiche |
|---|---|---|
| **Sociétés** | F0010 | Général, Périodes fiscales. |
| **Centres de coûts** | F0006 | Général, Codes catégorie, Comptes (les comptes du centre de coûts, F0901). |
| **Plan de comptes** | F0901 | Général, Codes catégorie. |
| **Comptes objet** | F0909 | Général. |

---

## Données de base → Articles \{#items\}

| Entrée de menu | Table | Onglets de la fiche |
|---|---|---|
| **Articles** | F4101 | Général, Classification, Unités de mesure, Planification, Magasin / usine (les enregistrements F4102 de l'article). |
| **Article par magasin** | F4102 | Général, Approvisionnement et planification, Classification. |

---

## Paramétrage \{#setup\}

**Données JD Edwards → Paramétrage** regroupe les tables dans lesquelles les applications lisent leurs règles.

| Entrée de menu | Table | Onglets de la fiche |
|---|---|---|
| **Conditions de paiement** | F0014 | Général. |
| **Devises** | F0013 | Général, Taux de change (F0015). |
| **Taux de change** | F0015 | Général. |
| **Zones de taxe** | F4008 | Général. |
| **Instructions de comptabilisation automatique** | F0012 | Général. |
| **ICA de distribution** | F4095 | Général. |
| **Numéros suivants** | F0002 | Numéros 1 à 5, Numéros 6 à 10. |
| **Règles d'activité des commandes** | F40203 | Général. |
| **Types de ligne** | F40205 | Général. |
| **Types de document** | F40039 | Général. |
| **Constantes de magasin / usine** | F41001 | Général. |

---

## Développement → Object Management Workbench \{#omw\}

| Entrée de menu | Table | Onglets de la fiche |
|---|---|---|
| **Projets OMW** | F98220 | Général, Objets (F98222), Utilisateurs (F98221), Journal (F98210). |
| **Objets des projets OMW** | F98222 | Général. |
| **Journal OMW** | F98210 | Général. |

À côté du workbench, **Développement → Retour au standard** compare les objets modifiés à ceux d'Oracle et indique le projet OMW qui contient chacun — voir [Retour au standard](../development/back-to-standard.md).

---

## Au-delà du standard \{#apply\}

Ces écrans portent sur les tables standard de JD Edwards. Quand le JD Edwards d'une installation contient davantage — une table spécifique, des colonnes ajoutées à une table standard —, un superutilisateur lance **Appliquer le module** depuis l'[assistant de création d'écran](../../framework/build/screen-assistant.md#module) de Liberty Next : il lit les tables en service et **n'ajoute que ce qui manque**, sans toucher aux écrans livrés.

---

## Accès \{#access\}

Chaque écran s'affiche pour les rôles qui détiennent son entrée de menu ou son dossier. Le rôle prédéfini **Gestionnaire des données de base** détient le dossier Données de base — UDC, carnet d'adresses, sociétés et comptes, articles — et lit le paramétrage ; **Développeur** détient le dossier Développement, OMW compris (voir [Rôles prédéfinis](../overview.md#roles)). Un rôle qui désigne un dossier suit les écrans qu'une version ultérieure y ajoute.

---

## Voir aussi

- [Types UDC](./udc-types.md), [Codes UDC](./udc-codes.md), [Carnet d'adresses](./address-book.md) — le reste des données de base.
- [Explorateur de données](../data-explorer.md) — totaux et tendances sur les mêmes modules.
- [Vue d'ensemble](../home.md) — le groupe de liens *Données JD Edwards*.
