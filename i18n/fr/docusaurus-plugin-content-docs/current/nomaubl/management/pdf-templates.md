---
title: Modèles PDF
description: "Bibliothèque de mises en page PDF réutilisables. Chaque modèle est une ressource pdf-template référencée par son nom depuis les documents. Édition unique, propagation à l'ensemble via un éditeur visuel plein écran — palette de sections à gauche, aperçu en direct au centre, inspecteur avec options + éditeur arborescent des blocs personnalisés à droite."
keywords: [NomaUBL, modèles PDF, pdf-template, mise en page, defaultPdfTemplate, built-in, built-in-modern, style classique, style moderne, éditeur visuel, section block, field, repeat, table, XPath, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Modèles PDF

L'écran **Modèles PDF** est la bibliothèque de **mises en page PDF réutilisables** utilisées par NomaUBL au moment du rendu d'une facture. Chaque mise en page est une ressource `pdf-template` enregistrée dans `config-pdf.json` ; les documents désignent une mise en page par **nom** via leur propriété `pdfTemplate` — une même mise en page peut donc être partagée entre plusieurs documents.

La page couvre quatre opérations :

- **gérer** le catalogue (Ajouter / Importer / Copier / Supprimer) ;
- **éditer** une mise en page via l'**éditeur visuel** — un éditeur plein écran avec le catalogue des sections à gauche, un aperçu en direct au centre et un inspecteur à droite ;
- **désigner un défaut** pour les documents qui ne portent pas de mise en page explicite ;
- **charger un XML de facture réel** dans l'éditeur pour que l'aperçu et l'auto-complétion XPath s'alignent sur vos données.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. L'entrée utilisée est l'UBL 2.1 généré, et non le XML source.

---

## Accès à la page

- Barre latérale → **Gestion → Modèles PDF**.
- La page liste toutes les mises en page du catalogue. Les entrées **`built-in`** et **`built-in-modern`** sont les deux mises en page livrées — les mêmes sections dessinées dans le [style classique et le style moderne](#style), en lecture seule et toujours présentes ; `built-in` sert de valeur de repli.
- La mise en page par défaut courante — c'est-à-dire celle utilisée par tout document sans `pdfTemplate` explicite — est marquée d'une étoile jaune ★ dans la liste.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pdftpl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pdftpl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pdftpl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="pdftpl-g-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="540" rx="14" fill="url(#pdftpl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="262" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modèles PDF</text>
  <rect x="430" y="30" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="454" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ Ajouter</text>
  <rect x="482" y="30" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="510" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↑ Importer</text>
  <rect x="542" y="30" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="566" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">⎘ Copier</text>
  <rect x="594" y="30" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="623" y="45" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">🗑 Supprimer</text>
  <rect x="656" y="30" width="118" height="22" rx="5" fill="url(#pdftpl-g-blue)" stroke="#4a9eff" strokeWidth="1"/><text x="715" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">★ Définir par défaut</text>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="84" width="180" height="450" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="270" y="92" width="164" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/><text x="278" y="107" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <line x1="262" y1="124" x2="442" y2="124" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="124" width="180" height="42" fill="rgba(255,255,255,0.04)"/>
  <text x="276" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">built-in</text>
  <text x="276" y="156" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Modèle livré · lecture seule</text>
  <rect x="402" y="142" width="32" height="14" rx="7" fill="rgba(255,255,255,0.08)"/><text x="418" y="152" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">factory</text>

  <line x1="262" y1="166" x2="442" y2="166" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="184" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">facture-fr</text>
  <text x="276" y="198" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Mise en page FR standard</text>
  <text x="416" y="190" fill="#facc15" fontSize="14" fontFamily="system-ui, sans-serif">★</text>
  <line x1="262" y1="208" x2="442" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="276" y="226" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">avoir</text>
  <text x="276" y="240" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Variante facture d'avoir</text>
  <line x1="262" y1="250" x2="442" y2="250" stroke="#1f2937" strokeWidth="1"/>

  <text x="276" y="268" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">recu-destinataire</text>
  <text x="276" y="282" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Reçu compact</text>

  <rect x="462" y="84" width="298" height="450" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="470" y="92" width="282" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="113" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">facture-fr</text>
  <text x="566" y="113" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Mise en page FR standard</text>
  <rect x="700" y="100" width="44" height="20" rx="5" fill="url(#pdftpl-g-blue)"/><text x="722" y="113" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Save</text>

  <text x="478" y="148" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">SECTIONS</text>
  <rect x="500" y="138" width="62" height="18" rx="9" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="531" y="150" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">+ header</text>
  <rect x="568" y="138" width="62" height="18" rx="9" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="599" y="150" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">+ lineTable</text>
  <rect x="636" y="138" width="46" height="18" rx="9" fill="url(#pdftpl-g-purple)" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="659" y="150" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">+ block</text>

  <rect x="478" y="170" width="266" height="34" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="488" y="190" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="190" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Header</text>
  <text x="572" y="190" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Fournisseur · méta facture</text>
  <text x="730" y="190" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end">▾</text>

  <rect x="478" y="210" width="266" height="34" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="488" y="230" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="230" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Parties</text>
  <text x="572" y="230" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Boîtes Client + Livraison</text>

  <rect x="478" y="250" width="266" height="120" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="488" y="270" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="270" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Line Table</text>
  <text x="572" y="270" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Tableau principal 7 colonnes</text>
  <text x="730" y="270" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end">▴</text>
  <text x="490" y="294" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">METAS</text>
  <text x="490" y="310" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ N° de facture</text>
  <text x="490" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ Date d'émission</text>
  <text x="490" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☐ Référence acheteur</text>
  <text x="610" y="294" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">SUPPLIERS</text>
  <text x="610" y="310" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ SIREN</text>
  <text x="610" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ Forme légale</text>
  <text x="610" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☐ Téléphone</text>

  <rect x="478" y="380" width="266" height="34" rx="6" fill="rgba(192,132,252,0.06)" stroke="#c084fc" strokeWidth="1"/>
  <text x="488" y="400" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="400" fill="#c084fc" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Block · payment-terms</text>
  <text x="660" y="400" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Piloté par XPath</text>
  <text x="730" y="400" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end">▾</text>

  <rect x="478" y="420" width="266" height="34" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="488" y="440" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="440" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">VAT Breakdown</text>

  <rect x="478" y="490" width="266" height="34" rx="6" fill="url(#pdftpl-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="611" y="510" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">👁 Aperçu</text>

  <rect x="20" y="36" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="52" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'actions</text>
  <text x="30" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">gestion + désignation du défaut</text>
  <line x1="220" y1="50" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="20" y="138" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="154" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Catalogue</text>
  <text x="30" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">★ marque le défaut · factory en lecture seule</text>
  <line x1="220" y1="156" x2="262" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="800" y="138" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="154" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de section</text>
  <text x="810" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">prédéfinies + block (XPath)</text>
  <line x1="800" y1="156" x2="690" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="800" y="290" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="306" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Tiroir par section</text>
  <text x="810" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bascules groupées ou canvas</text>
  <line x1="800" y1="308" x2="744" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="20" y="380" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="396" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Section block</text>
  <text x="30" y="409" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mise en page XPath libre</text>
  <line x1="220" y1="398" x2="478" y2="398" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="800" y="490" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="506" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Aperçu en direct</text>
  <text x="810" y="519" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rendu sur un UBL d'exemple</text>
  <line x1="800" y1="508" x2="744" y2="508" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>
</svg>

La page comporte un **catalogue** à gauche qui liste les mises en page enregistrées, et un panneau de synthèse à droite pour la mise en page sélectionnée. L'édition d'une mise en page ouvre l'**éditeur visuel** — un éditeur plein écran à trois volets documenté dans [Éditeur visuel](#visual-builder) plus bas — et la mise en page est enregistrée dans le catalogue sous un nom.

---

## Résolution d'une mise en page

Au moment du rendu PDF d'une facture, NomaUBL parcourt une chaîne en trois temps pour choisir la mise en page :

1. Le **document** de la facture (lu depuis `F564231.UHTMPL`) a une propriété `pdfTemplate` — si elle est renseignée, c'est ce nom qui s'applique.
2. À défaut, c'est la propriété `defaultPdfTemplate` du modèle **`global`** qui s'applique — réglée sur cette page via le bouton *Définir par défaut*.
3. À défaut, la mise en page intégrée **`built-in`** s'applique — toujours présente, jamais supprimable.

Cette troisième étape sert de valeur de repli. Une nouvelle installation renseigne `defaultPdfTemplate` avec **`built-in-modern`** : ses PDF sortent dans le style moderne avant même la création d'une mise en page.

---

## Actions de la barre supérieure

La barre d'actions couvre le cycle de vie du catalogue et la désignation du défaut.

| Action | Effet |
|---|---|
| **Ouvrir l'éditeur visuel** | Ouvre la mise en page sélectionnée dans l'[éditeur visuel](#visual-builder) plein écran — palette à gauche, aperçu en direct au centre, inspecteur à droite. Surface d'édition principale. |
| **Ajouter** | Ouvre une modale qui demande un nom et une description. Crée une ressource `pdf-template` vide — l'ajout des sections se fait ensuite dans l'éditeur visuel. |
| **Importer** | Charge un fichier JSON produit par une autre instance (ou par l'action *Exporter*). Met à jour le modèle correspondant si le nom existe déjà, sinon le crée. Les noms réservés `built-in` et `built-in-modern` sont rejetés. |
| **Copier** | Duplique la mise en page sélectionnée sous un nouveau nom. La méthode la plus rapide pour dériver une variante à partir de `built-in`, de `built-in-modern` ou d'un modèle existant spécifique à un client. |
| **Supprimer** | Supprime la mise en page sélectionnée après confirmation. Bouton désactivé sur les deux mises en page livrées. |
| **Définir par défaut** | Enregistre le nom de la mise en page sélectionnée dans `global.defaultPdfTemplate`. Tout document sans `pdfTemplate` explicite utilise alors cette mise en page. |
| **Remettre par défaut** | Vide `global.defaultPdfTemplate`, ce qui ramène la résolution sur `built-in`. |

---

## Le catalogue

La liste de gauche affiche toutes les mises en page enregistrées, plus les deux mises en page livrées, chacune sous forme de carte avec son nom et sa description.

- **`built-in`** et **`built-in-modern`** — épinglées en haut, en lecture seule, marquées d'un badge `factory` ; leur description est *Bundled default PDF template* et *Bundled modern PDF template*. Sa sélection ouvre l'éditeur en mode lecture seule, signalé par un bandeau. *Copier* est la seule manière d'en dériver une mise en page éditable.
- **Marqueur ★** — la mise en page utilisée comme défaut pour les documents sans `pdfTemplate` explicite. Une seule mise en page a l'étoile à un instant donné.
- **Description** — libellé libre enregistré sur la ressource. Apparaît à la fois sur sa carte dans la liste et dans le sélecteur *PDF Template* d'un document.

---

## Style — classique ou moderne \{#style\}

Une mise en page est dessinée dans l'un des deux styles, au choix du switch **Style** (*Classic* / *Modern*) de la [barre du constructeur](#template-settings). Le style ne modifie que le dessin : sections, options, libellés, couleur d'accent, logo et formats des nombres et des dates restent identiques, si bien qu'un modèle passe d'un style à l'autre sans rien perdre. Les modèles existants conservent la mise en page classique ; la mise en page livrée **`built-in-modern`** est l'équivalent moderne de `built-in`, avec des dates au format `dd/MM/yyyy`.

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs><marker id="pdfmod-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker></defs>
  <rect x="300" y="20" width="400" height="580" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
  <rect x="318" y="40" width="64" height="26" rx="4" fill="#e2e8f0" stroke="none" strokeWidth="1"/>
  <text x="350" y="57" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">LOGO</text>
  <text x="682" y="48" fill="#0f766e" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">FACTURE</text>
  <text x="682" y="70" fill="#0f172a" fontSize="17" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">FA-2026-001234</text>
  <rect x="318" y="84" width="364" height="40" rx="5" fill="#0f766e" stroke="none" strokeWidth="1"/>
  <text x="328" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Date d'émission</text>
  <text x="328" y="115" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">24/05/2026</text>
  <text x="419" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Date d'échéance</text>
  <text x="419" y="115" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">23/06/2026</text>
  <text x="510" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Période</text>
  <text x="510" y="115" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">05/2026</text>
  <text x="601" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Net à payer</text>
  <text x="601" y="115" fill="#ffffff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">1 500,00 €</text>
  <rect x="318" y="136" width="178" height="82" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="151" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">VENDEUR</text>
  <text x="328" y="166" fill="#0f172a" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">ACME Industries SA</text>
  <text x="328" y="179" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">12 rue de Rivoli, 75001 Paris</text>
  <text x="328" y="195" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">SIREN  123 456 789</text>
  <text x="328" y="207" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">N° TVA  FR12 123456789</text>
  <rect x="504" y="136" width="178" height="82" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="514" y="151" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">CLIENT</text>
  <text x="514" y="166" fill="#0f172a" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">Beta SARL</text>
  <text x="514" y="179" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">12 rue de Rivoli, 75001 Paris</text>
  <text x="514" y="195" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">SIREN  987 654 321</text>
  <text x="514" y="207" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">N° TVA  FR98 987654321</text>
  <text x="318" y="234" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Commande 4500012 · Réf. acheteur ACH-77</text>
  <rect x="318" y="244" width="364" height="18" rx="3" fill="#f1f5f9" stroke="none" strokeWidth="1"/>
  <text x="326" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700">Description</text>
  <text x="520" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Qté</text>
  <text x="580" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Prix unitaire</text>
  <text x="632" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Montant</text>
  <text x="676" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">TVA</text>
  <text x="326" y="278" fill="#0f172a" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">Caisses de transport</text>
  <text x="520" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">20</text>
  <text x="580" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">50,00</text>
  <text x="632" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">950,00</text>
  <text x="676" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">20 %</text>
  <text x="326" y="292" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Code article CR-20 · Origine France · N° ligne client 10</text>
  <rect x="326" y="298" width="70" height="13" rx="6" fill="#ccfbf1" stroke="none" strokeWidth="1"/>
  <text x="361" y="308" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">Remise −5 %</text>
  <line x1="318" y1="318" x2="682" y2="318" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="326" y="334" fill="#0f172a" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">Livraison express</text>
  <text x="520" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">1</text>
  <text x="580" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">300,00</text>
  <text x="632" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">300,00</text>
  <text x="676" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">20 %</text>
  <text x="326" y="348" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Période 01/05/2026 – 31/05/2026</text>
  <line x1="318" y1="358" x2="682" y2="358" stroke="#e2e8f0" strokeWidth="1"/>
  <rect x="318" y="372" width="190" height="46" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="386" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">Détail de la TVA</text>
  <text x="328" y="400" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">S · 20 %   1 250,00   250,00</text>
  <rect x="318" y="424" width="190" height="46" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="438" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">PAIEMENT</text>
  <text x="328" y="452" fill="#475569" fontSize="7.5" fontFamily="system-ui, sans-serif">Mode  Virement</text>
  <text x="328" y="464" fill="#475569" fontSize="7" fontFamily="ui-monospace, monospace">IBAN  FR76 3000 1007 9412 3456 7890 185</text>
  <rect x="520" y="372" width="162" height="98" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="530" y="390" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Total HT</text>
  <text x="672" y="390" fill="#334155" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="end">1 250,00</text>
  <text x="530" y="405" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Total TVA</text>
  <text x="672" y="405" fill="#334155" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="end">250,00</text>
  <text x="530" y="420" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="672" y="420" fill="#334155" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="end">1 500,00</text>
  <rect x="526" y="440" width="150" height="22" rx="4" fill="#0f766e" stroke="none" strokeWidth="1"/>
  <text x="534" y="455" fill="#ffffff" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700">Net à payer</text>
  <text x="670" y="455" fill="#ffffff" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">1 500,00 €</text>
  <rect x="318" y="482" width="364" height="30" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="501" fill="#475569" fontSize="7.2" fontFamily="system-ui, sans-serif">Conditions de paiement : 30 jours net. Pénalités de retard : 3 fois le taux légal.</text>
  <line x1="318" y1="570" x2="682" y2="570" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="318" y="584" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">ACME Industries SA  ·  SA  ·  SIREN 123456789  ·  N° TVA FR12 123456789</text>
  <text x="682" y="584" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif" textAnchor="end">FA-2026-001234  ·  Page 1 / 1</text>
  <rect x="20" y="36" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="52" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">En-tête</text>
  <text x="30" y="66" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">logo du vendeur · numéro</text>
  <line x1="240" y1="55" x2="316" y2="53" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="20" y="86" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="102" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Bandeau des repères</text>
  <text x="30" y="116" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dates, période, net à payer</text>
  <line x1="240" y1="105" x2="316" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="20" y="158" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="174" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Cartes vendeur et client</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiants alignés</text>
  <line x1="240" y1="177" x2="316" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="20" y="478" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="494" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Notes</text>
  <text x="30" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur toute la largeur</text>
  <line x1="240" y1="497" x2="316" y2="497" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="262" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="278" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Lignes entières</text>
  <text x="770" y="292" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais coupées entre deux pages</text>
  <line x1="760" y1="281" x2="684" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="312" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="328" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Détails sous l'article</text>
  <text x="770" y="342" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pleine largeur · remises en étiquettes</text>
  <line x1="760" y1="331" x2="600" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="400" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="416" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">TVA et paiement</text>
  <text x="770" y="430" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à côté des totaux</text>
  <line x1="760" y1="419" x2="684" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="558" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="574" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Pied de page</text>
  <text x="770" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mentions légales · page n / N</text>
  <line x1="760" y1="577" x2="684" y2="578" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
</svg>


Dans le style moderne :

- **En-tête** — le logo, puis la nature et le numéro du document en haut ; le nom et l'adresse du vendeur figurent dans sa carte, plus bas, sans répétition. En l'absence de section *Parties*, l'en-tête les imprime lui-même, avec les identifiants du vendeur.
- **Bandeau des repères** — date d'émission, date d'échéance, période et net à payer, sur la couleur d'accent.
- **Cartes vendeur et client** — côte à côte, identifiants alignés (SIREN, n° de TVA, adresse électronique, n° fiscal), contact et e-mail ; les autres références (commande, référence acheteur…) suivent sous les cartes.
- **Lignes** — une ligne n'est jamais coupée entre deux pages ; son détail (code article, origine, ligne client, période…) court sous l'article sur toute la largeur, et les remises et frais de ligne s'affichent en étiquettes.
- **TVA et paiement** — un *Détail de la TVA* placé juste avant les *Totaux* et un *Paiement* placé juste après s'impriment à gauche d'un encadré des totaux qui se termine par le net à payer ; placés ailleurs, chacun s'imprime seul.
- **Notes** — sur toute la largeur.
- **Pied de page** — sur chaque page : la mention légale du vendeur (nom, forme juridique, SIREN, n° de TVA) à gauche, le numéro du document et *Page n / N* à droite.

Les sections libres [`block`](#sections-block--composition-libre-pilotée-par-xpath) gardent le même dessin dans les deux styles. Sur une couleur d'accent claire, le texte imprimé dessus passe en foncé pour rester lisible. Chaque mot ajouté par le style moderne fait partie des [libellés](#libelles) du modèle.

---

## Éditeur visuel \{#visual-builder\}

Le bouton **Ouvrir l'éditeur visuel** ouvre la mise en page dans un éditeur plein écran à trois volets côte à côte — c'est la manière de référence pour éditer un `pdf-template`. L'éditeur regroupe tout sur un seul écran, aperçu toujours visible.

:::info[Le PDF lisible affiche les libellés, pas les codes]
Les champs codifiés n'affichent que leur libellé lisible — type de facture, profil, mode de paiement, catégories de note, références de document et identifiants d'article ne portent plus le code brut (*Paiement : Virement*, pas *Paiement : 30 — Virement* ; une note affiche *Informations de paiement —*, pas *[PMD] Informations de paiement —*). Les codes restent dans l'UBL pour le traitement automatisé.
:::

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pdfvb-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pdfvb-blue-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.30"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="pdfvb-purple-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="20" y="20" width="960" height="440" rx="14" fill="url(#pdfvb-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur visuel — invoice-fr</text>
  <rect x="540" y="30" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↑ Charger XML</text>
  <rect x="668" y="30" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">Abandonner</text>
  <rect x="730" y="30" width="60" height="22" rx="5" fill="url(#pdfvb-blue-fr)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="760" y="45" fill="#fff" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Enregistrer</text>
  <rect x="798" y="30" width="180" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="888" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">✕ Fermer (garde non-enregistré)</text>

  <line x1="20" y1="68" x2="980" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="36" y="84" width="220" height="360" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="48" y="106" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">PALETTE</text>
  <rect x="48" y="118" width="196" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="133" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">+ En-tête</text>
  <rect x="48" y="146" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="161" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Parties (Client + Livraison)</text>
  <rect x="48" y="174" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="189" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Tableau des lignes</text>
  <rect x="48" y="202" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="217" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Règlement</text>
  <rect x="48" y="230" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="245" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Notes</text>
  <rect x="48" y="258" width="196" height="22" rx="5" fill="url(#pdfvb-purple-fr)" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="273" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace">+ Bloc personnalisé (XPath)</text>

  <line x1="48" y1="292" x2="244" y2="292" stroke="#1f2937" strokeWidth="1"/>
  <text x="48" y="312" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">SECTIONS DU MODÈLE</text>
  <rect x="48" y="320" width="196" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="58" y="335" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ En-tête</text>
  <rect x="48" y="346" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="361" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Parties</text>
  <rect x="48" y="372" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="387" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Tableau des lignes</text>
  <rect x="48" y="398" width="196" height="22" rx="5" fill="rgba(192,132,252,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="413" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Bloc · règlement</text>
  <rect x="48" y="424" width="196" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="434" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Récap. TVA</text>

  <rect x="270" y="84" width="430" height="360" rx="8" fill="#ffffff" fillOpacity="0.95" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="106" fill="#1e293b" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">APERÇU EN DIRECT · invoice-sample.xml</text>
  <line x1="270" y1="116" x2="700" y2="116" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="290" y="138" fill="#1e293b" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">ACME Industries SA · Facture FA-2026-001234</text>
  <text x="290" y="156" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Date d'émission · 24/05/2026   Échéance · 23/06/2026</text>
  <rect x="290" y="172" width="200" height="50" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="298" y="188" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Client</text>
  <text x="298" y="202" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Globex Logistics</text>
  <text x="298" y="214" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">12 rue de Rivoli, 75001 Paris</text>
  <rect x="498" y="172" width="190" height="50" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="506" y="188" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Livraison</text>
  <text x="506" y="202" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Entrepôt Globex · Bonn DE</text>

  <rect x="290" y="234" width="398" height="20" rx="2" fill="#e2e8f0"/>
  <text x="298" y="248" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">#  Description     Qté  Unité  P.U.    Montant   TVA</text>
  <line x1="290" y1="254" x2="688" y2="254" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="298" y="270" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">1  Caisses cargo   20   pc    50,00 €  1 000,00 €  200,00</text>
  <text x="298" y="286" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">2  Livraison expr. 1    job   250,00 €   250,00 €   50,00</text>

  <rect x="490" y="306" width="198" height="64" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="498" y="322" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Totaux</text>
  <text x="498" y="338" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">Total HT    1 250,00 €</text>
  <text x="498" y="352" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">TVA 20%       250,00 €</text>
  <text x="498" y="366" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">Total TTC   1 500,00 €</text>

  <text x="290" y="400" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif" fontStyle="italic">page 1 / 1 · regénéré à chaque modification</text>

  <rect x="716" y="84" width="248" height="360" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="106" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">INSPECTEUR — EN-TÊTE</text>
  <line x1="728" y1="114" x2="952" y2="114" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="134" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">FOURNISSEUR</text>
  <text x="728" y="152" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Adresse</text>
  <text x="728" y="168" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ SIREN</text>
  <text x="728" y="184" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ N° TVA</text>
  <text x="728" y="200" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Téléphone</text>
  <text x="728" y="216" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ E-mail</text>

  <line x1="728" y1="232" x2="952" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="252" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">MÉTADONNÉES FACTURE</text>
  <text x="728" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ N° facture</text>
  <text x="728" y="286" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Date d'émission</text>
  <text x="728" y="302" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Date d'échéance</text>
  <text x="728" y="318" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Réf. acheteur</text>
  <text x="728" y="334" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Réf. contrat</text>

  <line x1="728" y1="354" x2="952" y2="354" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="376" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Bloc personnalisé sélectionné →</text>
  <text x="728" y="390" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">l'éditeur arborescent du bloc</text>
  <text x="728" y="404" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">prend la place du panneau</text>
  <text x="728" y="418" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">(XPath, police, alignement).</text>
</svg>

Les trois volets :

| Volet | Contenu |
|---|---|
| **Gauche — palette + liste des sections** | Moitié haute : le catalogue des sections disponibles (En-tête, Parties, Tableau des lignes, Règlement, Notes, Bloc personnalisé, …). Un clic pour ajouter au modèle. Moitié basse : la liste ordonnée des sections du modèle. Un clic pour sélectionner ; glisser-déposer la poignée `⋮⋮` pour réordonner. |
| **Centre — aperçu en direct** | Rendu du modèle courant sur une facture d'exemple intégrée (ou sur le XML chargé par l'opérateur), **regénéré à chaque modification** — cocher une case, ajouter une section, modifier un nœud de bloc personnalisé : tout se reflète dans l'aperçu en quelques millisecondes. Un clic sur un bloc dans l'aperçu le sélectionne ; l'inspecteur à droite saute sur les options correspondantes. |
| **Droite — inspecteur** | Affiche les options de la section sélectionnée, regroupées par catégorie (Fournisseur, Métadonnées facture, Colonnes, …). Pour un *Bloc personnalisé*, c'est l'**éditeur arborescent** complet — texte, champ, ligne / colonne, répétition, condition — qui s'ouvre directement dans ce volet, avec auto-complétion XPath et choix de police / couleur / alignement par nœud. |

### Charger une vraie facture

Le bouton **↑ Charger XML** en haut de l'éditeur accepte une vraie facture UBL (glisser-déposer ou sélecteur de fichier). Une fois chargée :

- L'aperçu en direct bascule immédiatement sur vos données.
- L'auto-complétion XPath de l'éditeur de bloc personnalisé utilise votre XML — les suggestions correspondent aux éléments réellement présents dans votre facture.

L'échantillon est conservé pour la session, pas avec le modèle. Rouvrir l'éditeur revient à la facture d'exemple intégrée.

### Enregistrer et abandonner

Le bouton **Enregistrer** en haut à droite enregistre le modèle directement depuis l'éditeur. Le bouton **Fermer** (`✕`) affiche un message de confirmation *Abandonner / Annuler* tant qu'il reste des modifications non enregistrées — impossible de fermer sans choisir. *Abandonner* écarte chaque modification depuis le dernier enregistrement ; *Annuler* maintient dans l'éditeur.

---

## Deux types de sections

Une mise en page est une suite de sections. Deux familles cohabitent dans un même modèle.

### Sections prédéfinies — éléments de mise en page éprouvés

Neuf sections prédéfinies réordonnables couvrent la forme standard d'un PDF de facture : **Header**, **Parties**, **Agent**, **Line Table**, **Document Allowances**, **VAT Breakdown**, **Totals**, **Payment**, **Notes**. Chacune s'appuie sur une classe Java qui rend la partie correspondante d'une facture EN 16931 ; l'utilisateur en règle la visibilité via les bascules par section dans le tiroir intégré.

Le tiroir regroupe les bascules par préfixe **`Catégorie · Nom`** et les présente en colonnes côte à côte qui reflètent la mise en page PDF — *Header* se lit comme **METAS** | **SUPPLIERS**, *Line Table* comme **Group headers** | **Columns** | **Sub-details** — au lieu d'une longue liste plate. Les bascules utilisent le composant `Checkbox` rond-bleu pour une cohérence visuelle en mode sombre.

#### Switchs de chaque section prédéfinie

Liste complète des switchs par section prédéfinie :

- **Header** — neuf bascules `META · …` (numéro de facture, date d'émission, date d'échéance, références contrat / avis d'expédition (BT-16) / commande / acheteur, type de facture, profil ID), plus six bascules `Supplier · …` (adresse, SIREN, forme légale, TVA, téléphone, e-mail).
- **Parties** — boîtes Client et Livraison, avec bascules séparées pour SIREN, TVA, adresse, identifiant de localisation et un switch principal *Show Delivery box* (désactivé, la mise en page rend un bloc Client en colonne unique). La boîte Livraison affiche le nom du destinataire (repli sur `ID: …` si seul l'identifiant de site est renseigné), la rue complète, le code postal + ville et le pays — comme la boîte Client ; son identifiant est libellé d'après son schéma (SIRET, GLN…), *Identifiant* quand le schéma est inconnu. La boîte Client imprime aussi le contact de l'acheteur — *Contact name*, *Phone*, *Email*, chacun avec son option, actives par défaut — quand la facture le porte ; sur une facture d'autofacturation, c'est là qu'apparaît le contact de la société émettrice.
- **Line Table** — bascules d'en-tête de groupe (*Delivery group*, *Page break per delivery*, *Document Reference group* et *Group by order* — un troisième bandeau sous ceux de la livraison et de la référence de document, qui réunit sur une ligne les numéros de commande de l'acheteur et du vendeur : *Référence Cde Client : … Numéro de commande : …*), deux options par ligne, actives par défaut — *Order line number* imprime le numéro de ligne client (*N° ligne client*) sous chaque ligne, *Customer Order Reference* imprime la référence de commande client avec la commande de vente sous chaque ligne quand *Group by order* est désactivé (sinon le bandeau de commande la porte ; un modèle enregistré avant cette option la considère comme active), des bascules de colonnes (`Line #`, `Description`, `Quantity`, `Unit`, `Unit Price`, `Net unit price`, `Amount`, `Tax`) — la colonne *Unit price* (BT-146) affiche la quantité de base quand elle diffère de 1 (`40,49 / 100`) ; la colonne **Net unit price** (montant de ligne ÷ quantité, soit le prix une fois les remises et charges de ligne intégrées) est **désactivée par défaut**, le prix de l'article seul restant la mise en page standard ; les sous-lignes couvrent le nombre réel de colonnes, masquer ou ajouter une colonne ne les décale donc jamais — et dix bascules de sous-détail pour les métadonnées de ligne (BT-127, BT-134/135, **avis d'expédition de la ligne** (EXT-FR-FE-BG-07), **BT-155 — Code article vendeur**, BT-156, BT-157, BT-158, **BT-159 — Pays d'origine** *(imprime le nom complet du pays résolu depuis la liste des pays partagée — pas le code ISO)*, remises / charges, propriétés additionnelles d'article). Le bandeau de commande suit les mêmes règles de réinitialisation que les autres : un changement de livraison réimprime les deux fils internes, un changement de référence de document réimprime le bandeau de commande.
- **Document Allowances** — bascules de colonnes pour type, motif, montant, taxe.
- **VAT Breakdown** — bascules de colonnes pour catégorie, taux, base imposable, montant de TVA (une colonne d'exemption apparaît automatiquement quand elle est présente).
- **Totals** — sept bascules de lignes couvrant la pile complète (Total HT, Allowances, Charges, Tax Exclusive, Total Tax, Total TTC, Amount Payable).
- **Payment** — bascules pour moyen de paiement / IBAN / BIC / mention de conditions de paiement.
- **Notes** — bascule unique pour développer les préfixes `[PMD]` / `[PMT]` à partir du catalogue *note-types*.

### Sections block — composition libre pilotée par XPath

La nouvelle section **`block`** est une primitive pilotée par XPath qui permet de composer toute mise en page non couverte par les sections prédéfinies. Un block est un arbre de nœuds typés :

| Type | Usage |
|---|---|
| `text` | Chaîne littérale. |
| `field` | Rend une valeur XPath, avec libellé inline optionnel et sélecteur de format — `date`, `currency`, `number`, `percent`. |
| `image` | Insère une image (logo, filigrane, signature). |
| `spacer` / `hr` | Espace vertical ou filet horizontal. |
| `row` / `column` | Conteneur avec contrôles `align` (`start` / `center` / `end`) et `gap`. `align: end` et `align: center` réduisent la ligne à environ 50 % pour qu'une paire *libellé + valeur* reste groupée plutôt qu'étirée sur toute la page. |
| `repeat` | XPath retournant une NodeList ; le `child` du block est rendu une fois par occurrence. |
| `if` | XPath retournant un booléen ; le `child` du block est rendu si vrai, masqué sinon. |
| `table` | Grille `lignes × colonnes` avec bordures de cellules optionnelles et ligne d'en-tête stylée. Définir `xpath` la fait itérer (une ligne par occurrence), les enfants servant de modèle à chaque ligne. |
| `note` | Un bloc **Note (par code)** — choisissez un code dans la liste de référence `note-types` ; le rendu repère le `cbc:Note` qui porte le marqueur `#CODE#` correspondant et affiche son corps sur place. Permet de désactiver la section Notes globale et de poser chaque note exactement où elle doit aller (en-tête, entre les parties, près des totaux, dans une colonne). |

Plusieurs blocks peuvent coexister dans un même modèle — par exemple un pour des mentions légales françaises, un pour une table structurée de conditions de paiement, un pour un filigrane image. Chaque block a un `name` utilisateur affiché à côté de la ligne de section dans l'éditeur ; un modèle qui contient trois blocks se lit ainsi `Block · payment-terms`, `Block · legal-mentions`, `Block · watermark`.

#### Conventions XPath dans un block

- Le **sélecteur** garde les préfixes de namespace `cbc:` / `cac:` — requis par le moteur namespace-aware ; un XPath saisi à la main sans préfixe ne correspondra à rien.
- Les sélections sont émises en **`/*/<chemin-complet>`** pour être indépendantes de la racine du document (le même chemin s'applique à `Invoice` comme à `CreditNote`).
- À l'intérieur d'un ancêtre itérant (un `repeat` ou une `table` munie d'un `xpath`), le sélecteur supprime en plus le chemin de l'itérateur pour que les cellules enfants démarrent en XPath **relatif** (`cbc:TaxAmount` plutôt que `/*/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount`). Les modèles de ligne restent ainsi portables quand l'itérateur change.

---

## Éditeur arborescent des blocs personnalisés

Quand une section *Bloc personnalisé* est sélectionnée dans l'[éditeur visuel](#visual-builder), le volet de droite bascule du mode "cases à cocher" à un **éditeur arborescent** complet. Il regroupe tout ce dont un bloc a besoin au même endroit :

| Zone du volet inspecteur | Rôle |
|---|---|
| **Arbre** | Vue indentée de tous les nœuds du bloc, avec une étiquette de type (`text`, `field`, `repeat`, `table`, …). Cliquer un nœud le sélectionne ; l'aperçu en direct au centre met en évidence la zone correspondante. |
| **Barre d'outils de nœud** | Ajout d'enfant / encapsulation / dégagement / suppression / déplacement haut-bas — opérations appliquées au nœud sélectionné. Mêmes opérations disponibles via raccourcis clavier. |
| **Formulaire d'attributs** | Formulaire d'attributs par type (XPath, libellé, format, alignement, gap, …) plus un sous-panneau **Style** couvrant police, graisse, taille, couleur, alignement et marges intérieures. |
| **Sortie de secours JSON** | Vue JSON brute du nœud courant — en lecture seule par défaut, *Modifier JSON* bascule en édition pour les cas avancés que le formulaire ne couvre pas. |

Détail subtil mais important en haut du formulaire d'attributs : un sélecteur **Type** qui **transforme** le nœud sélectionné sur place — passage de `column` à `repeat` sans suppression / recréation. Les attributs compatibles (enfants, style) sont reportés par le helper `transmuteKind`. Même mécanisme pour le cas fréquent de promotion d'un bloc statique en bloc itérant une fois la forme des données identifiée. La liste déroulante du type de bloc est triée par ordre alphabétique.

L'aperçu au centre se regénère à chaque frappe — l'iframe reste montée et se met à jour sur place, l'opérateur voit le résultat sans clignotement quand il modifie un XPath ou une option de style. Le bouton **↑ Charger XML** en haut de l'éditeur fournit un seul échantillon qui alimente l'auto-complétion XPath de chaque bloc du modèle.

---

## Réglages du modèle — barre du constructeur \{#template-settings\}

La barre du constructeur porte quelques réglages appliqués à toute la mise en page :

| Réglage | Effet |
|---|---|
| **Style** | *Classic* ou *Modern* — le dessin des sections ; voir [Style](#style). Un modèle sans choix explicite reste en *Classic*. |
| **Accent** | La couleur d'accent des titres de section (CLIENT / LIVRAISON), du total mis en évidence, du soulignement de l'en-tête du tableau de lignes et du fond des lignes surlignées. Saisissez un hexa à 6 chiffres avec ou sans `#` ; la teinte de fond est dérivée automatiquement. Vide = bleu par défaut. |
| **Date** | Le format de date appliqué dans tout le PDF — dates d'émission, d'échéance, de période et de livraison par ligne. Valeurs : `yyyy-MM-dd` (défaut), `dd/MM/yyyy`, `dd-MM-yyyy`, `MM/dd/yyyy`, `dd MMM yyyy`, `dd MMMM yyyy`. |
| **Show logo** | Dessine le logo de la société en haut du bloc vendeur, en page 1. Le fichier vient du *Logo path* de [Paramètres → Global → Traitement → PDF](../configuration/system/global.md), où un *Logo offset X (pt)* le décale aussi horizontalement et où *Logo width / height (pt)* fixent le cadre de mise à l'échelle (proportions conservées ; vide = 200 × 80 points au plus). L'aperçu du constructeur utilise la même taille que le PDF produit. PNG, JPG et GIF sont pris en charge. |
| **Trim zeros** | Supprime les zéros décimaux de fin sur les montants, prix unitaires et quantités — un montant rond s'imprime `23` au lieu de `23.00`, un prix unitaire `23.0000` s'imprime `23`. Désactivé par défaut. Réglage propre au modèle, appliqué au tableau de lignes, au bloc des totaux et aux PDF lisible et à l'écran. |
| **Decimals** — *amount* / *price* / *qty* | Nombre de décimales imprimées par nature de nombre, chacune `auto` ou `0` à `6`. *Amount* couvre les montants de ligne, remises, lignes de TVA et totaux ; *price* le prix de l'article, le prix unitaire net et la remise sur prix ; *qty* les quantités facturées. `auto` garde l'affichage standard (montants à 2 décimales, prix et quantités tels que dans l'UBL) : les modèles existants restent inchangés. Un nombre fixe est arrondi au plus éloigné de zéro, comme l'exige l'AFNOR ; *Trim zeros* s'applique en plus. |

### Libellés \{#libelles\}

Tous les textes imprimés par le générateur PDF — 75 libellés répartis entre l'en-tête du document, les parties, le tableau des lignes, le détail des lignes, le récapitulatif TVA, les totaux, le paiement et le pied de page, y compris les mots propres au style moderne (vendeur, contact, e-mail, lignes du paiement, détail de la TVA, page…) — peuvent être remplacés **par modèle PDF et par langue**. Ouvrir **Labels** dans le groupe *Template* du constructeur :

- chaque ligne affiche la clé du libellé avec un champ **FR** et un champ **EN** ; le texte par défaut s'affiche en indication, et un champ laissé vide le conserve ;
- une zone **Search…** et un filtre **Overridden only (N)** aident à retrouver un libellé ; les clés remplacées sont mises en évidence ;
- **×** rétablit le texte par défaut d'une ligne, et **Copy labels from…** reprend les libellés remplacés d'un autre modèle PDF ;
- l'aperçu en direct tient compte des remplacements au fil de la saisie.

Un client qui préfère *N° de facture* à *N° facture UBL* l'obtient sur son seul modèle ; les autres modèles gardent le texte par défaut. Le catalogue complet, avec le texte EN / FR par défaut de chaque clé, est disponible via `GET /api/pdf-templates/labels`.

---

## Slots de section

Au-delà des bascules de préréglage, trois sections proposent des **slots nommés**, chacun contenant un arbre de blocs complet (texte, champ, ligne, colonne, tableau, répéter, si, note, …) édité sur place avec le même constructeur. Un slot place un bloc là où, sinon, aucun point d'ancrage n'existe, sans intercaler une section *Bloc* autonome entre deux sections natives :

| Section | Slots |
|---|---|
| **En-tête** | *Pied gauche* (sous le bloc fournisseur) et *Pied droit* (sous Profile ID) — par ex. une ligne TVA intra-UE sous l'adresse fournisseur, une mention de conditions de paiement sous Profile ID. |
| **Parties** | *Pied client* et *Pied livraison*, placés à l'intérieur de chaque encart (qui partagent sa largeur de cellule et sa police). |
| **Boîte des totaux** | *Avant totaux* (au-dessus du tableau des totaux) et *Après totaux* (en dessous). |

Comme la section `block` racine, un slot s'affiche dans l'inspecteur sous forme d'une carte récapitulative compacte avec une pastille **Éditer** : un clic confie tout le volet inspecteur au constructeur de blocs, avec une barre *← Retour · Section · Slot* en haut ; changer de section sort automatiquement.

---

## API REST

La page lit et écrit via les endpoints de templates standards — mêmes routes que les autres types de ressources.

| Méthode + chemin | Rôle |
|---|---|
| `GET /api/templates` | Liste tous les modèles ; la page filtre par `type = pdf-template`. |
| `GET /api/templates/{nom}` | Charge une mise en page (le JSON figure dans la propriété `template`). |
| `POST /api/templates` | Crée une mise en page (Add). |
| `POST /api/templates/{from}/copy/{to}` | Duplique (Copy). |
| `PUT /api/templates/{nom}` | Enregistre les modifications. |
| `DELETE /api/templates/{nom}` | Supprime une mise en page. Les noms réservés `built-in` et `built-in-modern` sont rejetés. |
| `POST /api/pdf-templates/preview` | Rend un JSON `pdfTemplate` arbitraire face à une facture d'exemple — utilisé par l'iframe d'aperçu. |
| `PUT /api/templates/global` (avec `defaultPdfTemplate`) | Backend des actions *Set as default* / *Reset to factory*. |

---

## Conseils & bonnes pratiques

- **Partir d'une mise en page livrée via Copier.** `built-in` (classique) et `built-in-modern` sont des bases solides — préférer les dériver par copie et ajustement de bascules plutôt que de partir d'un modèle vide.
- **Un seul modèle, plusieurs documents.** Pour chaque variante de facture (standard, avoir, reçu destinataire …), privilégier un modèle partagé plutôt qu'un JSON inline par document. Le bénéfice : un point d'édition unique quand les mentions légales ou le jeu de colonnes évoluent.
- **Désigner un défaut tôt.** Marquer une mise en page comme défaut avant le branchement des documents spécifiques aux clients — chaque nouveau document utilise alors ce défaut implicitement, et la propriété `pdfTemplate` explicite reste réservée aux vraies variantes.
- **Utiliser `block` pour ce que les sections prédéfinies ne couvrent pas.** Mentions légales personnalisées, pieds de page spécifiques à un pays, blocs de signature structurés, filigranes — autant de cas mieux traités par un `block` que par une section prédéfinie.
- **Itérer dans l'éditeur visuel.** Basculer une section et observer l'aperçu au centre se regénérer est le moyen le plus rapide d'arriver à une mise en page — l'aperçu en direct est toujours visible, pas de modale à ouvrir.
- **Charger une vraie facture une fois par session.** Le bouton **↑ Charger XML** en haut de l'éditeur alimente le sélecteur de chaque bloc — chargement unique, et chaque auto-complétion XPath utilise vos données.
- **Ne pas supprimer les mises en page livrées.** Le bouton est désactivé sur ces entrées pour cette raison — `built-in` est la valeur de repli au bout de la chaîne de résolution.
