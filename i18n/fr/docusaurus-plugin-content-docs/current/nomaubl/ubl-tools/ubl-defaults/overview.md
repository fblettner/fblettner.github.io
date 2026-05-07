---
title: Vue d'ensemble
description: "Fonctionnement des UBL Defaults de NomaUBL — un fichier de valeurs par défaut (ubl-defaults.xsl) et une couche de surcharge optionnelle par template, résolus groupe par groupe à la génération."
keywords: [NomaUBL, UBL, defaults, surcharge, ubl-defaults, XSL, EN 16931, JD Edwards, SAP, NetSuite, ERP personnalisé, paiement, TVA, scheme IDs, fournisseurs, notes]
---

# UBL Defaults — Vue d'ensemble

L'écran **UBL Defaults** est le système *défaut + surcharge* de NomaUBL pour la génération des documents UBL. Il sépare deux niveaux :

- Un **fichier de valeurs par défaut** (`ubl-defaults.xsl`) contient les valeurs appliquées à tout document UBL généré — version UBL, identifiants de schéma, mapping des codes de paiement, catégories TVA, annuaire des fournisseurs, mentions légales françaises, etc.
- Une **couche de surcharge** optionnelle permet à une transformation donnée (par ex. `invoices.xsl`, `credit_notes.xsl`) de dévier des valeurs par défaut — groupe par groupe — sans dupliquer toute la configuration.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé. Le fichier de defaults appartient au socle XSL partagé de NomaUBL et s'applique à toute transformation produite via l'*Éditeur XSL*.

---

## Résolution des valeurs

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ubd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="ubd-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/></marker>
    <linearGradient id="ubd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ubd-g-purple-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.1"/></linearGradient>
    <linearGradient id="ubd-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="220" height="60" rx="10" fill="url(#ubd-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Spool XML source</text>
  <text x="150" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NetSuite</text>
  <rect x="40" y="120" width="280" height="80" rx="10" fill="url(#ubd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="180" y="146" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">📋 ubl-defaults.xsl</text>
  <text x="180" y="166" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">valeurs par défaut</text>
  <text x="180" y="184" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">tous les groupes</text>
  <rect x="40" y="240" width="280" height="80" rx="10" fill="url(#ubd-g-purple-strong)" stroke="#c084fc" strokeWidth="2"/>
  <text x="180" y="266" fill="#c084fc" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">✏️ Surcharge par template</text>
  <text x="180" y="286" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">par ex. invoices.xsl, credit_notes.xsl</text>
  <text x="180" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.75">opt-in par groupe</text>
  <path d="M 320 160 L 360 160 L 360 280 L 320 280" stroke="#c084fc" strokeWidth="1.3" strokeDasharray="3 3" fill="none" markerEnd="url(#ubd-arrow-purple)"/>
  <text x="430" y="210" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">hérité</text>
  <rect x="500" y="120" width="240" height="100" rx="10" fill="url(#ubd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="620" y="148" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">⚙️ ubl-template.xsl</text>
  <text x="620" y="170" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">structure UBL</text>
  <text x="620" y="188" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">ordre EN 16931</text>
  <text x="620" y="204" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">+ espaces de noms</text>
  <line x1="260" y1="50" x2="500" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ubd-arrow)"/>
  <line x1="320" y1="160" x2="500" y2="160" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ubd-arrow)"/>
  <line x1="320" y1="280" x2="500" y2="190" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#ubd-arrow-purple)"/>
  <rect x="800" y="130" width="170" height="80" rx="10" fill="url(#ubd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="885" y="160" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 UBL 2.1</text>
  <text x="885" y="180" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">EN 16931 / Factur-X</text>
  <text x="885" y="195" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">extended-ctc-fr</text>
  <line x1="740" y1="170" x2="800" y2="170" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ubd-arrow)"/>
</svg>

Pour chaque groupe (en-tête, codes de paiement, catégories TVA, fournisseurs, notes, etc.) :

- Si la **surcharge est désactivée** sur la transformation, la valeur de `ubl-defaults.xsl` est utilisée.
- Si la **surcharge est activée**, la valeur de la surcharge est utilisée et la valeur par défaut est ignorée pour ce groupe.

La surcharge est **tout ou rien par groupe** : un onglet est soit entièrement hérité, soit entièrement surchargé. Aucune granularité partielle n'est possible à l'intérieur d'un onglet.

---

## Modes de la page

Un sélecteur de fichier en haut de la page bascule l'éditeur entre deux modes :

| Sélection | Mode | Cible de l'édition |
|---|---|---|
| `Defaults file` | **Mode defaults** | `ubl-defaults.xsl` lui-même. Les modifications se propagent à toute transformation qui ne surcharge pas le groupe touché. |
| Tout autre fichier `.xsl` | **Mode document** | La couche de surcharge du template choisi. Chaque onglet peut être activé ou désactivé indépendamment. |

En mode document, chaque onglet présente une **bannière de surcharge** :

| État de la bannière | Signification | Bouton d'action |
|---|---|---|
| `Using defaults` | Le groupe est hérité de `ubl-defaults.xsl` ; le formulaire affiche les valeurs par défaut (contexte en lecture seule). | **Override for this document** — recopie les valeurs par défaut courantes dans le fichier document comme point de départ. |
| `Using override` | Le groupe possède ses propres valeurs dans le fichier document ; les modifications y sont enregistrées. | **Remove override** — supprime le bloc de surcharge ; le document repasse aux valeurs par défaut. |

La suppression d'une surcharge retire le bloc en totalité — pas de mode « désactivée mais conservée ». Le document reprend l'héritage depuis `ubl-defaults.xsl`.

---

## Couverture des onglets

Chaque onglet correspond à un groupe surchargeable de manière indépendante. Les pages suivantes documentent chaque onglet en détail ; le tableau ci-dessous donne le périmètre d'un coup d'œil.

| Onglet | Zone UBL | Contenu configuré |
|---|---|---|
| [**Header**](./ubl-header-defaults.md) | En-tête du document | Version UBL, identifiant de personnalisation, pays par défaut, format de date d'entrée. |
| [**Scheme IDs**](./scheme-ids.md) | Schémas d'identifiants | Identifiants de schéma SIREN / SIRET / GLN / endpoint / livraison. |
| [**Invoice Type**](./invoice-type.md) | BT-3 | Type de facture par défaut + sélection par règles. |
| [**Business Process Type**](./business-process-type.md) | BT-23 | Cadre de facturation par défaut (nature biens / services / mixte + cycle de vie) + sélection par règles. |
| [**Payment Code Mapping**](./payment-code-mapping.md) | BT-81 | Moyen de paiement par défaut + mapping source → code UBL. |
| [**Unit of Measure Mapping**](./unit-of-measure-mapping.md) | BT-129 | Unité par défaut + mapping source → code UN/ECE Recommendation 20. |
| [**Currency Code Mapping**](./currency-code-mapping.md) | BT-5 | Devise par défaut + mapping source → code ISO 4217. |
| [**Document Type / BAR Routing**](./document-type-bar-routing.md) | BG-25 | Mapping des codes de routage B2B. |
| [**VAT Categories**](./vat-categories.md) | BT-118 / BT-121 | Catégorie TVA par défaut, taux zéro, mappings des codes de catégorie et des codes d'exonération `VATEX-*`. |
| [**Suppliers / Companies**](./suppliers-companies.md) | BG-4 | Annuaire des sociétés fournisseurs (défaut + alternatives). |
| [**French Legal Notes**](./french-legal-notes.md) | BT-22 | Modèles de mentions réglementaires françaises (délai de paiement, indemnité de recouvrement, conditions générales…). |

---

## Comportement de l'enregistrement

Un unique bouton **Save** dans l'en-tête de page écrit dans le fichier correspondant au mode courant :

- **Mode defaults** — écrit `ubl-defaults.xsl`.
- **Mode document** — écrit le `.xsl` du template sélectionné (seule la couche de surcharge est réécrite ; le reste du fichier est laissé intact).

Aucune sauvegarde automatique : les modifications non enregistrées sont perdues au rechargement de la page ou au changement de fichier.

---

## Conseils & bonnes pratiques

- **Travailler les defaults d'abord, les surcharges ensuite.** La plupart des installations n'ont besoin que du fichier de defaults. Les surcharges document sont réservées aux cas réellement divergents — un template avec un type de facture par défaut différent, un annuaire de fournisseurs alternatif, etc.
- **Une surcharge est tout ou rien par onglet.** Activer la surcharge sur un onglet copie tout le groupe dans le fichier document. À anticiper : si une seule ligne d'un mapping doit changer, tout le mapping est embarqué.
- **Les listes de référence alimentent les listes déroulantes.** De nombreux onglets (paiement, unités, pays, devises, identifiants de schéma, types de facture, profils, catégories TVA) lisent leurs options dans les listes définies dans *Configuration → Reference Lists*. Ajouter un code à la liste correspondante si la déroulante en manque.
- **Le fichier de defaults est partagé par toutes les transformations.** Toute modification y est lue par chaque `.xsl` qui ne surcharge pas le groupe touché — y compris les transformations rédigées à la main hors de l'*Éditeur XSL*.
- **Les fichiers document sont listés automatiquement.** Tout `.xsl` du répertoire XSL configuré (`e-invoicing.ublXslt`) apparaît dans le sélecteur, sauf les trois fichiers partagés (`ubl-defaults.xsl`, `ubl-common.xsl`, `ubl-template.xsl`) — filtrés car ils contiennent la mécanique du socle et ne se modifient pas en surcharge.
