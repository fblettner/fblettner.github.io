---
title: E-Invoicing
description: "Liste opérationnelle des factures NomaUBL — recherche, filtrage et inspection des factures ; consultation détaillée (parties, lignes, TVA, cycle de vie, PDF) ; édition, copie, redépôt ou envoi par e-mail ; mise à jour manuelle d'un statut."
keywords: [NomaUBL, e-invoicing, factures, liste, filtre, recherche, statut, détail, cycle de vie, PDF, e-mail, mise à jour de statut, redépôt, édition, copie, RFE, Réforme de la Facturation Électronique, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# E-Invoicing

L'écran **E-Invoicing** est la page principale de NomaUBL — le point d'entrée du workflow officiel de la *Réforme de la Facturation Électronique* (RFE). Il liste toutes les factures traitées par la plateforme et propose des filtres complets, une vue détaillée selon le statut, et les actions du quotidien : éditer, copier, supprimer, changer manuellement un statut, envoyer le PDF au client par e-mail, redéposer sur la Plateforme Agréée.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Toutes les factures visibles ici ont été enregistrées dans la base NomaUBL locale après passage dans le pipeline de traitement.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 462" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="inv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="inv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="inv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="inv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="422" rx="14" fill="url(#inv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Invoicing</text>
  <rect x="838" y="64" width="122" height="22" rx="5" fill="url(#inv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="899.0" y="78.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle facture</text>
  <rect x="240" y="64" width="257" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 oct. 2026 · Date de mise à jour ▾</text>
  <rect x="507" y="64" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="517" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Émises (ventes) ▾</text>
  <rect x="669" y="70" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="686" y="79" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclure les erreurs traitées</text>
  <text x="240" y="113" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <rect x="286" y="100" width="101" height="20" rx="10.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="336.5" y="113.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">À corriger  8  ▾</text>
  <rect x="393" y="100" width="146" height="20" rx="10.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="466.0" y="113.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Décision à prendre  19  ▾</text>
  <rect x="545" y="100" width="121" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="605.5" y="113.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En traitement  96  ▾</text>
  <rect x="672" y="100" width="146" height="20" rx="10.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="745.0" y="113.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sur la plateforme  136  ▾</text>
  <rect x="824" y="100" width="116" height="20" rx="10.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="882.0" y="113.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Terminées  2 102  ▾</text>
  <text x="950" y="114" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕ Effacer les filtres</text>
  <rect x="393" y="126" width="210" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="403" y="135" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M405.5,140.5 L407.8,142.8 L411.8,138" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="420" y="144" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Décision à prendre · 19</text>
  <rect x="415" y="157" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M417.5,162.5 L419.8,164.8 L423.8,160" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="432" y="166" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <circle cx="439" cy="162.5" r="3" fill="#fb923c"/>
  <text x="447" y="166" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">207 En litige</text>
  <text x="591" y="166" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <rect x="415" y="179" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M417.5,184.5 L419.8,186.8 L423.8,182" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="432" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <circle cx="439" cy="184.5" r="3" fill="#fb923c"/>
  <text x="447" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">210 Refusée</text>
  <text x="591" y="188" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <rect x="415" y="201" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="432" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <circle cx="439" cy="206.5" r="3" fill="#64748b"/>
  <text x="447" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">208 Suspendue</text>
  <text x="591" y="210" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="250" width="112" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="296.0" y="264.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▸ Filtres avancés</text>
  <rect x="240" y="282" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="296.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">🔍 Rechercher…</text>
  <rect x="470" y="282" width="75" height="22" rx="5" fill="url(#inv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507.5" y="296.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="240" y="314" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOC</text>
  <text x="320" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DCT</text>
  <text x="360" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KCO</text>
  <text x="420" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UBL</text>
  <text x="540" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉMISE</text>
  <text x="620" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT</text>
  <text x="730" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <text x="810" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="920" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUIVI</text>
  <rect x="240" y="346" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12345</text>
  <text x="320" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="360" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="420" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-2026-0142</text>
  <text x="540" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-09</text>
  <text x="620" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="730" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 200,00</text>
  <rect x="810" y="350.0" width="79" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="849.5" y="361.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">207 En litige</text>
  <text x="920" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <rect x="240" y="374" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12346</text>
  <text x="320" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="360" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="420" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-2026-0143</text>
  <text x="540" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-09</text>
  <text x="620" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="730" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">540,00</text>
  <rect x="810" y="378.0" width="79" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="849.5" y="389.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">207 En litige</text>
  <text x="920" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="402" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12347</text>
  <text x="320" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="360" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00002</text>
  <text x="420" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-2026-0144</text>
  <text x="540" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-10</text>
  <text x="620" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="730" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 980,00</text>
  <rect x="810" y="406.0" width="70" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="845.0" y="417.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">210 Refusée</text>
  <text x="920" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période + base de date</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mise à jour, émission, archivage</text>
  <line x1="200" y1="77.0" x2="240" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Statut par étape</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic : toute l'étape</text>
  <line x1="200" y1="113.0" x2="286" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisir les statuts</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la flèche ouvre le panneau</text>
  <line x1="200" y1="213.0" x2="393" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés + Exécuter</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête serveur, tranche bornée</text>
  <line x1="200" y1="287.0" x2="470" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle facture</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec l'action invoice.create</text>
  <line x1="1000" y1="73.0" x2="960" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="12" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="27" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Direction</text>
  <text x="1010" y="40" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">émises par défaut</text>
  <line x1="1000" y1="29.0" x2="657" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="148" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Effacer les filtres</text>
  <text x="1010" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dès qu'un statut est choisi</text>
  <line x1="1000" y1="165.0" x2="986" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic → fenêtre de détail</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 onglets, ouvre sur Résumé</text>
  <line x1="1000" y1="377.0" x2="950" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
</svg>

---

## Barre d'outils

Au-dessus de la grille, deux rangées : la **période**, la **direction**, **Exclure les erreurs traitées** et, à droite, **+ Nouvelle facture** ; puis le **statut par étape**. **+ Nouvelle facture** est proposé aux rôles autorisés à créer des factures (`invoice.create`), qui ouvre la [fenêtre de création / modification](./invoice-actions.md#create-invoice). Viennent ensuite le panneau [Filtres avancés](#advanced-filters) et la barre d'outils de la grille (recherche, **Exécuter**, actions groupées).

### Période

Le [sélecteur de période](../configuration/default-periods.md#period-picker) commun : périodes prédéfinies, calendrier sur deux mois et base de date au pied du panneau. La liste s'ouvre sur *Ce mois-ci*, ou sur la [période par défaut](../configuration/default-periods.md#default-periods) définie pour la vue *Invoices*. Une liste ouverte depuis un tableau de bord ou un drill-down TVA reprend les dates de cette page.

### Base de date \{#base-de-date\}

Le pied du sélecteur de période choisit **sur quelle colonne de date la période s'applique**.

| Valeur | Colonne de date | Quand l'utiliser |
|---|---|---|
| **Date de mise à jour** *(par défaut)* | Dernière modification de la facture dans NomaUBL. | Exploitation au quotidien. |
| **Date d'émission** | Celle imprimée sur la facture (BT-2 du document UBL). | Rapprochement avec la page [Déclaration de TVA](./vat-declaration.md) ou avec un système externe indexé sur la date d'émission. |
| **Date d'archivage** | La date à laquelle le document a été traité dans l'archive. | Rapprochement avec le [tableau de bord IT](./tech-dashboard.md) et les rapports de traitement. |

Le choix est **conservé pendant la session en cours**. Il est aussi **positionné automatiquement** quand la liste est ouverte depuis un tableau de bord ou un drill-down TVA : le nombre affiché correspond à celui d'où l'on vient.

### Direction \{#chip-direction\}

Un sélecteur à côté de la période : **Émises (ventes)** *(par défaut)*, **Reçues (achats)** ou **Toutes les directions**.

| Valeur | Effet |
|---|---|
| **Émises (ventes)** | Seules les factures envoyées aux clients (`UHDRIN = '2'`). |
| **Reçues (achats)** | Seules les factures fournisseur récupérées depuis la PA (voir [Synchronisation → Fetch Input → PA entrante](../sync/fetch-input.md) et le document livré `received-ubl`). |
| **Toutes les directions** | Aucun filtre de direction — les deux sont listées. |

Le sélecteur s'appuie sur l'indicateur `UHDRIN` enregistré sur chaque ligne — un changement de *Direction* sur un modèle ne reclasse pas les lignes historiques, le résultat reste donc stable dans le temps.

Sur une ligne *Reçue*, la colonne **Contrepartie** lit depuis `AccountingSupplierParty` (le fournisseur), pas depuis `AccountingCustomerParty` — la colonne affiche donc le nom du fournisseur sur les factures entrantes et le nom du client sur les sortantes. Le cycle de vie, la fenêtre de détail et le catalogue de colonnes sont par ailleurs identiques ; seules les actions vendeur (Renvoyer à la PA, Marquer envoyée, Avoir…) sont masquées sur les lignes reçues.

### Exclure les erreurs traitées \{#exclure-erreurs-traitees\}

Le switch **Exclure les erreurs traitées**, à côté du sélecteur de direction, masque les lignes déjà marquées *Traité* qui restent dans un statut en erreur (groupes `errorTech` / `errorBusiness` du [modèle des statuts](../configuration/system/statuses.md)) : la liste ne garde que les erreurs que personne n'a encore regardées. Les lignes traitées dans tout autre statut restent affichées. Le switch est activé par défaut ; une liste ouverte depuis un tableau de bord ([Synthèse](./billing-overview.md), [Statistiques](./statistics.md), [Exploitation](./dashboard.md#exclure-erreurs-traitees)) reprend le choix du tableau de bord. L'endpoint `GET /api/invoices` accepte le même filtre avec `excludeReviewedErrors=true`.

### Statut par étape \{#status-by-stage\}

La rangée **Statut** regroupe les statuts de la période dans les cinq étapes du tableau de bord [Statistiques](./statistics.md#stages) — **À corriger**, **Décision à prendre**, **En traitement**, **Sur la plateforme**, **Terminées** — plus **Autres** quand un statut hors de ces groupes a des factures ou est sélectionné. Chaque étape est une pastille avec sa couleur et son nombre.

| Geste | Effet |
|---|---|
| Clic sur le nom de l'étape | Sélectionne tous les statuts de l'étape (*N'afficher que cette étape*) ; un second clic réaffiche tous les statuts. |
| Clic sur la flèche **▾** | Ouvre *Choisir les statuts* : une case à cocher pour toute l'étape (tout, rien ou partiel) et une par statut, avec sa couleur, son libellé et son nombre, du plus fréquent au moins fréquent. |
| Sélection partielle | Le nombre s'affiche `choisis / total` et la pastille prend une bordure en pointillés. |
| **✕ Effacer les filtres** | Apparaît dès qu'un statut est choisi ; efface la sélection. |

Une étape sans facture sur la période est grisée. Un clic depuis un tableau de bord (une file, une étape, un statut) ouvre la liste avec les statuts correspondants déjà choisis.

### Filtres avancés \{#advanced-filters\}

Un panneau **Filtres avancés** pliable se trouve sous la rangée des statuts. Il propose une ligne par colonne filtrable de la spec [Vues de liste](../configuration/list-views.md) active — par défaut *DOC*, *DCT*, *Société*, *Code Tiers*, *Tiers*, *Type doc.*, *Suivi*, *Statut*, *Type facture*, *Code activité*, *Code motif* — avec un sélecteur d'opérateur par colonne (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). Les modifications restent en brouillon tant que **Exécuter** ne les valide pas : la saisie dans le panneau ne sollicite pas le serveur.

:::info[Comment les filtres texte trouvent les lignes]
Un filtre texte correspond depuis le **début** de la valeur et utilise l'index de la colonne : la liste reste rapide sur une grande table. Pour chercher un texte n'importe où dans la valeur, l'encadrer de signes pourcent — `%acme%` trouve *acme* où qu'il apparaisse, au prix d'un parcours complet. Le filtre **DOC** prend un raccourci : une valeur entièrement numérique recherche directement le numéro de document. Les filtres sur les colonnes adossées à une liste de référence (statut, routage…) acceptent **plusieurs valeurs à la fois** et un opérateur — inclure, exclure, vide, non vide — décrit [plus bas](#list-filters).
:::

L'ensemble des colonnes filtrables est défini par la liste blanche `filter: true` de la spec — chacun choisit les colonnes qu'il interroge réellement et retire les autres du panneau sans les perdre dans la grille. Voir [Vues de liste](../configuration/list-views.md) pour l'éditeur.

La page fonctionne en **mode hybride** : chaque *Exécuter* charge une tranche limitée depuis le serveur (`spec.maxRows`, le réglage *Rows loaded* de [Paramètres › Navigation & lists](../configuration/default-periods.md#lists), sauf valeur propre à la vue — 100 000 par défaut) et la grille filtre, trie, pagine et regroupe dans cette tranche — pas d'aller-retour pendant la saisie dans la ligne de filtre par colonne, les filtres se conservent d'une page à l'autre. Quand la limite est atteinte, un message `X / Y lignes` à côté d'*Exécuter* invite à affiner la période ou les *Filtres avancés*.

#### Filtres sur une liste \{#list-filters\}

Les colonnes adossées à une liste de référence (Statut, statut e-reporting, listes personnalisées) reçoivent une **sélection multiple** dans le panneau Filtres avancés et dans la ligne de filtre par colonne, précédée d'un **bouton d'opérateur** :

| Opérateur | Bouton | Lignes conservées |
|---|---|---|
| **inclure** *(par défaut)* | `=` | La valeur fait partie des valeurs choisies. |
| **exclure** | `≠` | La valeur ne fait partie d'aucune des valeurs choisies — les lignes sans valeur sont conservées elles aussi. |
| **est vide** | `∅` | Le champ n'a pas de valeur. Aucune valeur à choisir. |
| **n'est pas vide** | `≠∅` | Le champ a une valeur, quelle qu'elle soit. Aucune valeur à choisir. |

Le nombre de codes choisis est libre : au-delà du plafond, le déclencheur affiche `N sélectionné(s)`, et un `✕` à droite réinitialise la sélection en un clic. *inclure* avec trois statuts renvoie l'union des trois ; *exclure* renvoie toutes les autres lignes. Un code peut aussi se saisir dans la recherche de la liste (Entrée, plusieurs séparés par des virgules) : une liste incomplète ou encore vide permet donc tout de même de filtrer. Une [vue enregistrée](./saved-views.md) conserve l'opérateur avec les valeurs.

### Barre d'outils de la grille

À côté de la recherche de la grille : **Exécuter** (recharge la liste avec les filtres en cours), puis **Renvoyer la sélection (N)**, **Retraiter la sélection (N)** et **Marquer comme traitées (N)** quand des lignes sont cochées (voir [Renvoi groupé](#bulk-resend), [Retraitement](#reprocess) et [Marquer comme traitées](#mark-reviewed)). Le **sélecteur de vues** enregistre et rappelle l'affichage de la liste — colonnes, largeurs, tri, filtres, période : voir [Vues enregistrées](saved-views.md).

---

## Liste des factures

Le tableau affiche une ligne par facture. Tri par défaut : numéro de document décroissant. Cliquer sur un en-tête de colonne pour trier.

La grille passe par **DataTableV2** en mode piloté par spec : la forme des colonnes — libellés, format, alignement, largeur et la liste blanche de filtres — vient de la spec `view.invoices` stockée sur `db-nomaubl` (avec un défaut embarqué dans le JAR). Ajouter ou retirer des colonnes se fait depuis l'éditeur [Vues de liste](../configuration/list-views.md) — aucune modification de code n'est nécessaire quand la colonne figure déjà dans le catalogue.

La valeur **Mise à jour** porte l'heure : une colonne *Mise à jour* au format `datetime` dans la spec affiche `2026-09-15 15:23:45` au lieu de la seule date. (La date d'émission reste sans heure — JDE n'en stocke pas pour elle.)

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Doc</div><div>Dct</div><div>Kco</div><div>Numéro UBL</div><div>Date d'émission</div><div>Client</div>
    <div style={{textAlign: 'right'}}>Total HT</div><div style={{textAlign: 'right'}}>Total TTC</div><div>Devise</div><div>Statut</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>12345</div><div>RI</div><div>00070</div><div>FA-2026-001234</div><div>24/04/2026</div><div>Acme Industries SA</div>
    <div style={{textAlign: 'right'}}>1 250,00</div><div style={{textAlign: 'right'}}>1 500,00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>200 Déposée</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>12346</div><div>RI</div><div>00070</div><div>FA-2026-001235</div><div>23/04/2026</div><div>Globex Logistique</div>
    <div style={{textAlign: 'right'}}>850,00</div><div style={{textAlign: 'right'}}>1 020,00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>9906 En attente</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>12347</div><div>RN</div><div>00070</div><div>AV-2026-000089</div><div>22/04/2026</div><div>Initech Services</div>
    <div style={{textAlign: 'right'}}>−200,00</div><div style={{textAlign: 'right'}}>−240,00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>207 En litige</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', alignItems: 'center'}}>
    <div>12348</div><div>RI</div><div>00070</div><div>FA-2026-001236</div><div>22/04/2026</div><div>Hooli SAS</div>
    <div style={{textAlign: 'right'}}>3 400,00</div><div style={{textAlign: 'right'}}>4 080,00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>213 Rejetée</span></div>
  </div>
</div>

### Colonnes par défaut

| Colonne | Description |
|---|---|
| **Doc** | Numéro de document interne. |
| **Dct** | Type de document. |
| **Kco** | Code société. |
| **Numéro UBL** | Numéro de facture tel qu'il apparaît dans le document UBL généré. Filtrable depuis le panneau **Filtres avancés** et via le paramètre d'URL `?ublNumber=`, en plus de la zone de recherche texte. |
| **Date d'émission** | BT-2 issu du document UBL. |
| **Client** | Nom de la partie acheteur. |
| **Pays** | Code pays ISO 3166 à deux lettres de la contrepartie (`FR`, `DE`, `BE`, `US`…). Capturé à l'insertion depuis le UBL — pays de l'acheteur pour les ventes, du fournisseur pour les achats. Pilote la classification par zone utilisée par la page [Déclaration de TVA](./vat-declaration.md). |
| **Total HT** | Montant total hors taxes. |
| **Total TTC** | Montant total toutes taxes comprises. |
| **Devise** | Code ISO 4217. |
| **Statut** | Badge de statut — code + libellé, coloré par famille. |
| **Envoi PA** | Destination de la facture : *À transmettre à la PA*, *Non destinée à la PA* ou *En attente de revue avant envoi* (`list-send-pa`), filtrable. |
| **Suivi** | **Badge de suivi** coloré — *En attente* (du service client) ou *Traité*. Allumé quand la ligne demande une attention opérateur — un statut que le dispatcher n'a pas su résoudre tout seul, une édition manuelle marquée à l'enregistrement, ou un système aval qui a balisé la ligne pour vérification. Il s'allume aussi pour une facture **Déposée (200) avec le motif `NON_TRANSMISE`** : pas une erreur, mais le destinataire n'a pas d'adresse de réception active, l'opérateur doit donc la transmettre manuellement — les autres 200 gardent un tiret discret. Une facture **corrigée à la main** — enregistrée depuis la fenêtre facture ou réparée avec *Corriger destinataire* — passe à *Traité* dès que la validation qui suit ne signale aucune erreur, quel que soit son statut. Vide quand rien n'est en attente : quelques badges dans une page sinon nette indiquent précisément par où commencer. |

Un sélecteur de taille de page en bas du tableau est réglé sur 50 par défaut ; des valeurs jusqu'à 500 sont acceptées. Le nombre total de factures correspondant aux filtres apparaît à côté de la pagination.

### Colonnes du catalogue

La requête SQL de la vue Factures joint maintenant `F564231` (UH) et `F564230` (FE) sur doc / dct / kco via un `LEFT JOIN`, donc le catalogue de colonnes comporte 16 colonnes archive / journal supplémentaires. Toutes peuvent être ajoutées à la spec depuis le picker `+ Ajouter une colonne` de l'éditeur [Vues de liste](../configuration/list-views.md) — la jointure gauche préserve les lignes factures sans entrée de journal.

| Colonne catalogue | Contenu |
|---|---|
| `logSourceFile` | Nom du fichier source qui a produit la facture. |
| `logActivityCode` / `logSubType` | Code d'activité et sous-type enregistrés à l'ingestion. |
| `logAlphaKey` | Alias alpha-key utilisé par certains systèmes amont. |
| `logAmount` | Montant porté par la ligne de journal (brut, sans rebase de devise). |
| `logInvoiceDate` / `logDueDate` | Date de facture et date d'échéance enregistrées à l'ingestion. |
| `logCreated` | Horodatage de création (composite `UPMJ + UPMT`). |
| `logUser` / `logJobn` / `logPid` / `logVersion` | Tampons utilisateur, job, PID et version JDE. |
| `logBusinessUnit` | Unité d'activité enregistrée à l'ingestion. |
| `logRouting` | Routage BAR enregistré à l'ingestion. |
| `logSendToPaFlag` | Flag capturé à l'ingestion qui indique l'éligibilité de la ligne au dépôt PA. |
| `logPaUuid` | UUID côté PA assigné à la facture au moment du dépôt. |

### Navigation au clic

Cliquer sur une ligne ouvre la **modale de détail** de la facture. La plupart des actions sont unitaires, mais la liste permet aussi un **renvoi groupé** — voir ci-dessous.

### Marquer comme traitées \{#mark-reviewed\}

Le service client marque comme **traitées** les factures en erreur qu'il a prises en charge : elles sortent des comptages et des listes d'erreurs tant que *Exclure les erreurs traitées* est activé. La facture garde son statut.

- **Depuis la liste** — cocher les factures, puis **Marquer comme traitées (N)**. Le bouton apparaît quand au moins une facture cochée est en erreur et pas encore traitée. Une confirmation précise que *les factures sélectionnées seront considérées comme traitées et n'apparaîtront plus dans les erreurs à traiter* ; seules les factures encore en erreur sont marquées.
- **Depuis la fenêtre de la facture** — la pastille **Traité**, à droite des onglets, pose la marque (en pointillés quand elle est absente) ou la retire (en vert quand elle est posée), chaque fois après confirmation. La retirer fait réapparaître la facture dans les erreurs à traiter.

Les deux demandent l'action *Marquer comme traitée* (`invoice.review`) dans la page [Rôles](../configuration/security/roles.md). La marque est la colonne **Suivi** (`UHALRTPSD`).

### Renvoi groupé \{#bulk-resend\}

Chaque ligne porte une **case à cocher**, et un bouton **Renvoyer la sélection (N)** apparaît dans la barre d'outils dès qu'au moins une ligne cochée peut être renvoyée. Il renvoie tout le lot vers la [Plateforme Agréée](../configuration/system/einvoicing.md) en une seule action, via la même fenêtre de progression qu'ailleurs (compteurs en direct, *Annuler*, *Continuer en arrière-plan*). Le bouton ne compte et n'envoie que les factures cochées renvoyables selon les [règles de renvoi](#resend-reprocess-rules) — ni type de document *Ne pas envoyer*, ni *Échec de validation* (`9905`), ni statut déjà traité par la plateforme. Une telle ligne reste cochable pour un retraitement ou un marquage. Le serveur applique les mêmes règles à chaque facture du lot.

### Retraitement \{#reprocess\}

Un bouton **Retraiter la sélection (N)** apparaît à côté de *Renvoyer la sélection* quand les lignes cochées comprennent des factures concernées par le retraitement. Le retraitement est une **réimpression** : pour une facture **déposée sans être transmise** par la plateforme (statut 200, motif `NON_TRANSMISE`), il régénère le PDF / XML lisible et le fichier UBL à partir de la source archivée lors du premier traitement (le XML source d'un document à source XML, le XML issu de la conversion d'un document à source PDF), dans les dossiers de sortie et d'éclatement. Rien ne change en base et l'UBL n'est pas revalidé : la facture électronique enregistrée, y compris une correction ultérieure par *Corriger destinataire*, reste la référence, et ses résultats de validation sont conservés. La facture garde son statut, une entrée *Retraitement* est ajoutée à son historique, rien n'est renvoyé à la plateforme, et chaque facture n'est retraitée qu'une fois. Seules les factures d'un document avec **Allow reprocess** activé (un document à source XML ou PDF — voir [Documents](../management/documents.md)) sont concernées ; les autres sont ignorées dans la sélection. Le même traitement est disponible depuis le [Tableau de bord IT](tech-dashboard.md#to-reprocess) et la ligne de commande.

La sélection couvre aussi les **échecs de validation** : une facture en *Échec de validation* (`9905`) sur un modèle où **Allow full reprocess** est activé est **retraitée en totalité** — enrichissement interrogé de nouveau, UBL régénéré, validé et envoyé à la PA selon les réglages du modèle et du type de document ; l'historique est conservé et un nouveau cycle démarre. La confirmation précise quelles factures sont réimprimées et lesquelles sont retraitées en totalité. La fenêtre facture propose le même retraitement complet via un bouton **Retraiter** sur une `9905`.

Plusieurs factures sont retraitées en **un lot par modèle**, en arrière-plan avec son journal en direct : leurs sources sont déposées dans un dossier de travail, le réglage global *Max threads* limite le parallélisme et une facture n'est jamais traitée deux fois. Une facture seule est toujours traitée à part.

### Export

Un bouton **Exporter** dans la barre d'outils exporte la vue courante (filtres compris) au format CSV sous le nom `invoices.csv`.

---

## Règles de renvoi et de retraitement \{#resend-reprocess-rules\}

Le serveur applique ces règles à chaque renvoi et à chaque retraitement, quel qu'en soit le point de départ : fenêtre facture, sélection dans la liste, cartes du [Tableau de bord IT](tech-dashboard.md#send-failed), tâche de [relance automatique](../sync/scheduled-jobs/auto-retry.md), ligne de commande ou [API](/nomaubl/api-reference).

### Renvoi — l'UBL enregistré redéposé sur la PA

| Condition | Règle |
|---|---|
| **Statut** | Accepté pour tout statut interne `99xx` sauf `9905`, `9911` et `9913` : `9900`, `9901`, `9902`, `9903`, `9904`, `9906`, `9907`, `9912`… Refusé pour `9905` (*Échec de validation*) : un UBL en échec de validation n'est jamais envoyé — corriger d'abord la facture (modification, Corriger destinataire) ou lancer un retraitement complet. Refusé pour tout statut standard de la plateforme — tout code numérique qui ne commence pas par `99` (`1`, `8`, `10`, `43`, `45`, `48`, `200`, `213`…) — ainsi que pour `9911` / `9913`, étapes déjà acceptées par la plateforme. |
| **Motif** | Non contrôlé. |
| **Type de document** | Refusé quand l'indicateur d'envoi du [type de document](../configuration/system/document-types.md) est *Ne pas envoyer* (`FEEV10` = `2`). |
| **UBL enregistré** | Refusé quand l'en-tête de la facture ne contient aucun UBL. |
| **Utilisateur** | Action *Renvoyer à la PA* (`invoice.resend`) sur la page [Rôles](../configuration/security/roles.md), et facture visible par l'utilisateur. |

La fenêtre facture masque **Renvoyer à la PA** dans tous les cas que le serveur refuserait : utilisateur sans la permission, type de document *Ne pas envoyer*, `9905`, statut déjà traité par la plateforme. Un appel passé malgré tout (API, écran antérieur) se termine par *Validation failed (status 9905) — correct the invoice before resending* ou *Already processed by the PA (status …) — resend refused*.

Un renvoi groupé — **Renvoyer la sélection**, **Tout renvoyer (N)** du tableau de bord, une tâche de relance automatique — sélectionne les factures (par statut pour le tableau de bord et la reprise auto : `9904` par défaut, ou une liste comme `9904,9907`), puis applique les mêmes règles à chaque facture.

La seule exception à cette protection est la réparation [Corriger destinataire](./invoice-detail.md#fix-buyer) d'une facture *Rejetée* (`213`) pour un motif d'adressage (`ADR_ERR`, `REJ_ADR`, `DEST_INC`), avec son option de renvoi à la PA — envoi seulement si la revalidation réussit.

### Retraitement — deux variantes, choisies d'après le statut

| Variante | Statut | Motif | Réglage du document | Renouvelable |
|---|---|---|---|---|
| **Réimpression** — PDF et XML régénérés, rien d'écrit en base, aucun envoi | `200` | `NON_TRANSMISE` (exactement) | *Allow reprocess* = `Y` | Non — une seule fois : le marqueur `9912` laissé par la première réimpression bloque la suivante. |
| **Retraitement complet** — régénération avec un nouvel appel à l'enrichissement, validation, puis envoi si les réglages le prévoient | `9905` | Non contrôlé | *Allow full reprocess* = `Y` | Oui |

Les deux variantes demandent aussi :

- que le document enregistré sur la facture (`UHTMPL`) existe toujours ;
- que ce document ait une source **XML** ou **PDF** — un document à source UBL ne se retraite pas.

L'indicateur d'envoi du type de document n'entre pas en compte : un retraitement n'envoie jamais rien de lui-même.

:::info[Tout autre statut]
Une facture hors de ces règles — une `9904` pour une réimpression, un statut standard de la plateforme pour un renvoi — ne peut évoluer que par **Définir statut**. Une `9905` se corrige, puis se valide de nouveau à l'enregistrement ou au retraitement complet.
:::

## Détail et actions

- [Détail d'une facture](./invoice-detail.md) — la fenêtre ouverte par un clic sur une ligne : onglets Résumé (avec *Corriger destinataire*), Parties, Lignes, TVA, Notes, Historique et PDF.
- [Actions sur une facture](./invoice-actions.md) — *Définir statut*, *E-mail*, l'éditeur de facture (création, édition, copie) et la confirmation de redépôt.

---

## Conseils & bonnes pratiques

- **Commencer par la période.** *Hier* convient au contrôle du matin, une plage personnalisée couvre la clôture mensuelle ; la période d'ouverture se règle une fois dans [Périodes par défaut](../configuration/default-periods.md). Les autres filtres s'appliquent en plus.
- **Les étapes sont le filtre le plus rapide.** *À corriger* et *Décision à prendre* avec un nombre non nul sont en général le bon point de départ pour traiter les exceptions ; la flèche restreint l'étape à un seul statut.
- **Le cycle de vie (onglet Historique) est la source de vérité.** Il enregistre tous les statuts traversés, avec messages, motifs de rejet et actions attendues — c'est l'endroit pour instruire un litige ou retrouver une décision côté PA.
- **Utiliser le bandeau Actions vendeur.** Les actions proposées sur `205` / `206` / `207` / `208` / `210` / `213` / `9904` / `9907` sont les étapes recommandées par la plateforme. Elles ramènent un workflow multi-étapes (retrouver le client, rédiger l'avoir, etc.) à un seul clic, à condition que le connecteur soit configuré.
- **N'utiliser Modifier le statut qu'en cas de besoin.** Un *Modifier le statut → DB* manuel désynchronise le dossier local de la PA. À réserver aux nettoyages après restauration de sauvegarde ou aux statuts non couverts par le job de cycle de vie.
- **Modifier l'UBL puis Enregistrer** est la méthode standard pour corriger une facture — l'enregistrement réécrit la facture en base et la redépose sur la PA. Éviter d'éditer directement le XML source via *Outils UBL → XML Viewer*, sauf si le fichier sur disque est la source de référence.
- **Utiliser Copier pour la facturation récurrente.** La modale est pré-remplie avec toutes les parties, les lignes et la TVA ; seuls le numéro, les dates et les éventuels écarts restent à modifier.
