---
title: Carnet d'adresses
description: "Le dossier Carnet d'adresses de Nomajde : le carnet d'adresses de JD Edwards EnterpriseOne (F0101) avec ses contacts, ses adresses datées, son client et son fournisseur, le fichier clients (F03012) et le fichier fournisseurs (F0401) — des grilles en consultation avec filtres et onglets de détail, et Open in JDE sur une ligne."
keywords: [Nomajde, carnet d'adresses, F0101, contacts, F0111, F0116, fichier clients, F03012, fichier fournisseurs, F0401, JD Edwards, Open in JDE, P01012]
---

# Carnet d'adresses

Le dossier **Carnet d'adresses**, sous **Données JD Edwards → Données de base**, présente le carnet d'adresses de JD Edwards EnterpriseOne dans trois écrans en consultation : le carnet d'adresses lui-même, les clients et les fournisseurs. Les données sont lues en direct dans JD Edwards ; les modifications se font dans JD Edwards, que **Open in JDE** ouvre sur la bonne fiche.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 434" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ab-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ab-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ab-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ab-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="394" rx="14" fill="url(#ab-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Address Book (F0101)</text>
  <rect x="240" y="60" width="720" height="20" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="74" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› Filtres avancés</text>
  <rect x="240" y="90" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="104.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="396" y="90" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="432.0" y="104.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="890" y="90" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="825" y="90" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="765" y="90" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="792.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="705" y="90" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="660" y="90" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="122" width="720" height="116" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="122" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="372" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ADDRESS NUMBER</text>
  <text x="386" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ALPHA NAME</text>
  <text x="576" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">SEARCH TYPE</text>
  <text x="696" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TAX ID</text>
  <text x="806" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">BUSINESS UNIT</text>
  <rect x="246" y="150" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="160" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="160.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4242</text>
  <text x="386" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME Industries</text>
  <text x="576" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">C — Customer</text>
  <text x="696" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR001</text>
  <text x="806" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M30</text>
  <line x1="241" y1="168" x2="959" y2="168" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="172" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="182" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="182.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4243</text>
  <text x="386" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Beta SARL</text>
  <text x="576" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V — Supplier</text>
  <text x="696" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR002</text>
  <text x="806" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M30</text>
  <line x1="241" y1="190" x2="959" y2="190" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="194" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="204" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="204.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4244</text>
  <text x="386" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Gamma SA</text>
  <text x="576" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">C — Customer</text>
  <text x="696" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="806" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M40</text>
  <line x1="241" y1="212" x2="959" y2="212" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="216" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="226" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="226.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4245</text>
  <text x="386" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Delta Logistics</text>
  <text x="576" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V — Supplier</text>
  <text x="696" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="806" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M40</text>
  <line x1="241" y1="234" x2="959" y2="234" stroke="#1f2937" strokeWidth="1"/>
  <rect x="222" y="158" width="756" height="250" fill="#020617" fillOpacity="0.55"/>
  <rect x="340" y="168" width="560" height="226" rx="10" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="356" y="190" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Address Book</text>
  <line x1="341" y1="202" x2="899" y2="202" stroke="#1f2937" strokeWidth="1"/>
  <text x="356" y="220" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">General</text>
  <rect x="354" y="225" width="36" height="2" fill="#4a9eff"/>
  <text x="404.144" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Flags</text>
  <text x="443.104" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Category codes</text>
  <text x="523.3919999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Related addresses</text>
  <text x="617.4559999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Who's Who</text>
  <text x="674.7839999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Addresses</text>
  <text x="732.1119999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="784.8479999999998" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Supplier</text>
  <text x="356.0" y="244" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADDRESS NUMBER</text>
  <rect x="356.0" y="249" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="262.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">4242</text>
  <text x="626.0" y="244" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LONG ADDRESS NUMBER</text>
  <rect x="626.0" y="249" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.0" y="262.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">ACME01</text>
  <text x="356.0" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ALPHA NAME</text>
  <rect x="356.0" y="289" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="302.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">ACME Industries</text>
  <text x="626.0" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEARCH TYPE</text>
  <rect x="626.0" y="289" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.0" y="302.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">C — Customer</text>
  <text x="356.0" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAX ID</text>
  <rect x="356.0" y="329" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="342.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">FR001</text>
  <text x="626.0" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS UNIT</text>
  <rect x="626.0" y="329" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.0" y="342.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">M30</text>
  <line x1="341" y1="364" x2="899" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <rect x="824" y="370" width="62" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.0" y="382.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">× Annuler</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis Exécuter</text>
  <line x1="200" y1="77.0" x2="250" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu de ligne</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Ouvrir dans JDE</text>
  <line x1="200" y1="157.0" x2="253" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne ouvre une boîte</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">huit onglets</text>
  <line x1="200" y1="277.0" x2="356" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lecture seule</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les modifications se font dans JDE</text>
  <line x1="1000" y1="137.0" x2="860" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets liés</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Who's Who, adresses, client…</text>
  <line x1="1000" y1="247.0" x2="810" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
</svg>

---

## Carnet d'adresses \{#address-book\}

Une ligne par fiche du carnet d'adresses (F0101).

| Filtre | Trouve |
|---|---|
| **N° d'adresse**, **Nom alpha**, **Adresse longue** | Une fiche, par numéro, nom ou adresse longue. |
| **Type de recherche** | La nature de la fiche — client, fournisseur, salarié… |
| **N° fiscal**, **Unité d'activité**, **Classification sectorielle** | Les fiches d'un numéro fiscal, d'une unité d'activité, d'un secteur. |

La grille s'ouvre sur les colonnes principales — numéro, nom, type de recherche, adresse longue, numéro fiscal, unité d'activité — et propose le reste de la fiche dans son menu **Colonnes** : langue, message de crédit, codes catégorie 01 à 30, adresses liées.

Un clic sur une ligne ouvre la fiche, en consultation :

| Onglet | Contenu |
|---|---|
| **Général**, **Indicateurs**, **Codes catégorie**, **Adresses liées** | Les champs de la fiche du carnet d'adresses. |
| **Contacts** | Les contacts de la fiche, avec leurs téléphones et adresses e-mail. |
| **Adresses** | Les adresses postales datées. |
| **Client** | La fiche client correspondante, par société. |
| **Fournisseur** | La fiche fournisseur correspondante. |

Les libellés des champs codés — devise, conditions de paiement, unité d'activité, valeurs UDC — s'affichent à côté des codes.

---

## Fichier clients \{#customer-master\}

Une ligne par client et par société (F03012), avec le nom et l'adresse longue du client : limite de crédit, devise, conditions de paiement, code de blocage, compte de contrepartie, unité d'activité, responsable crédit. Filtres : **N° d'adresse**, **Adresse longue**, **Nom alpha**, **Société**, **Compte de contrepartie**.

---

## Fichier fournisseurs \{#supplier-master\}

Une ligne par fournisseur (F0401), avec le nom et l'adresse longue du fournisseur : devise, conditions de paiement, code de blocage, instrument de paiement. Filtres : **N° d'adresse**, **Adresse longue**, **Nom alpha**.

---

## Open in JDE \{#open-in-jde\}

Sur une ligne du carnet d'adresses, **Open in JDE** — dans le menu de ligne, ou la flèche en début de ligne — ouvre la fiche dans le client web de JD Edwards, sur le formulaire de mise à jour du carnet d'adresses (P01012), dans un nouvel onglet du navigateur. L'adresse web de JD Edwards se règle une fois pour l'installation, comme adresse externe `JDE_WEB` — voir [Paramètres de l'application → Adresses externes](../../framework/build/settings-app.md#external-urls). Sans elle, l'action n'ouvre rien.

:::info[Spécifique à JDE]
Les écrans lisent les tables de JD Edwards EnterpriseOne par le connecteur `jdedwards`, dans le périmètre de données des rôles de l'utilisateur.
:::
