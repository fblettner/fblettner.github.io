---
title: Modèles PDF
description: "Bibliothèque de mises en page PDF réutilisables, désormais traitées comme des ressources à part entière. Chaque modèle est une ressource pdf-template référencée par son nom depuis les modèles de document. Édition unique, propagation à l'ensemble ; mélange de sections prédéfinies (en-tête, parties, table de lignes…) avec les nouvelles primitives block pilotées par XPath (text, field, repeat, table, if), assemblées dans un éditeur visuel."
keywords: [NomaUBL, modèles PDF, pdf-template, mise en page, defaultPdfTemplate, built-in, section block, field, repeat, table, XPath, éditeur visuel, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Modèles PDF

L'écran **Modèles PDF** est la bibliothèque de **mises en page PDF réutilisables** utilisées par NomaUBL au moment du rendu d'une facture. Chaque mise en page est une ressource `pdf-template` enregistrée dans `config-pdf.json` ; les modèles de document désignent une mise en page par **nom** via leur propriété `pdfTemplate` — une même mise en page peut donc être partagée entre plusieurs documents.

La page couvre quatre opérations :

- **gérer** le catalogue (Ajouter / Importer / Copier / Supprimer) ;
- **éditer** une mise en page — liste de sections, bascules par section pour les sections prédéfinies, composition libre pour les sections `block` ;
- **désigner un défaut** pour les documents qui ne portent pas de mise en page explicite ;
- **prévisualiser** le résultat sur une facture d'exemple sans quitter la page.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. L'entrée utilisée est l'UBL 2.1 généré, et non le XML source.

:::info[Nouveauté en 2026.05.1]
Les modèles PDF étaient auparavant édités en ligne sur la page Documents (onglet *PDF Template*) et stockés dans les propriétés du modèle de document. Ils sont désormais des ressources partageables à part entière, dotées de leur propre page. L'onglet de la page Documents existe toujours, mais il choisit désormais une mise en page **par nom** depuis le catalogue de cette page, au lieu de contenir le JSON en ligne.
:::

---

## Accès à la page

- Barre latérale → **Gestion → Modèles PDF**.
- La page liste toutes les mises en page du catalogue. L'entrée **`built-in`** est la mise en page par défaut livrée — en lecture seule, toujours présente comme filet de sécurité.
- La mise en page par défaut courante — c'est-à-dire celle utilisée par tout document sans `pdfTemplate` explicite — est marquée d'une étoile jaune ★ dans la barre latérale.

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

La page comporte un **catalogue** à gauche qui liste les mises en page enregistrées, et un **éditeur** à droite dédié à la mise en page sélectionnée. L'éditeur est identique à l'onglet *PDF Template* d'un modèle de document — même liste de sections, même tiroir par section, même aperçu en direct. La différence : le résultat est enregistré dans le catalogue sous un nom, plutôt que rattaché à un seul document.

---

## Résolution d'une mise en page

Au moment du rendu PDF d'une facture, NomaUBL parcourt une chaîne en trois temps pour choisir la mise en page :

1. Le **modèle de document** de la facture (lu depuis `F564231.UHTMPL`) a une propriété `pdfTemplate` — si elle est renseignée, c'est ce nom qui s'applique.
2. À défaut, c'est la propriété `defaultPdfTemplate` du modèle **`global`** qui s'applique — réglée sur cette page via le bouton *Définir par défaut*.
3. À défaut, la mise en page intégrée **`built-in`** s'applique — toujours présente, jamais supprimable.

Cette troisième étape est le filet de sécurité : un environnement tout juste installé produit des PDF cohérents avant même qu'une mise en page soit créée.

---

## Actions de la barre supérieure

La barre d'actions couvre le cycle de vie du catalogue et la désignation du défaut.

| Action | Effet |
|---|---|
| **Ajouter** | Ouvre une modale qui demande un nom et une description. Crée une ressource `pdf-template` vide — l'ajout des sections se fait ensuite dans l'éditeur. |
| **Importer** | Charge un fichier JSON produit par une autre instance (ou par l'action *Exporter*). Met à jour le modèle correspondant si le nom existe déjà, sinon le crée. Le nom réservé `built-in` est rejeté. |
| **Copier** | Duplique la mise en page sélectionnée sous un nouveau nom. La méthode la plus rapide pour dériver une variante à partir de `built-in` ou d'un modèle existant spécifique à un client. |
| **Supprimer** | Supprime la mise en page sélectionnée après confirmation. Bouton désactivé sur `built-in`. |
| **Définir par défaut** | Enregistre le nom de la mise en page sélectionnée dans `global.defaultPdfTemplate`. Tout document sans `pdfTemplate` explicite utilise alors cette mise en page. |
| **Remettre par défaut** | Vide `global.defaultPdfTemplate`, ce qui ramène la résolution sur `built-in`. |

---

## Le catalogue

La barre latérale liste toutes les mises en page enregistrées, plus la `built-in` livrée.

- **`built-in`** — épinglée en haut, en lecture seule, marquée d'un badge `factory`. Sa sélection ouvre l'éditeur en mode lecture seule, signalé par un bandeau. *Copier* est la seule manière d'en dériver une mise en page éditable.
- **Marqueur ★** — la mise en page utilisée comme défaut pour les documents sans `pdfTemplate` explicite. Une seule mise en page a l'étoile à un instant donné.
- **Description** — libellé libre enregistré sur la ressource. Apparaît à la fois dans la barre latérale et dans le sélecteur *PDF Template* d'un modèle de document.

---

## Deux types de sections

Une mise en page est une suite de sections. Deux familles cohabitent dans un même modèle.

### Sections prédéfinies — éléments de mise en page éprouvés

Neuf sections prédéfinies réordonnables couvrent la forme standard d'un PDF de facture : **Header**, **Parties**, **Agent**, **Line Table**, **Document Allowances**, **VAT Breakdown**, **Totals**, **Payment**, **Notes**. Chacune s'appuie sur une classe Java qui rend la partie correspondante d'une facture EN 16931 ; l'utilisateur en règle la visibilité via les bascules par section dans le tiroir intégré.

Le tiroir regroupe les bascules par préfixe **`Catégorie · Nom`** et les présente en colonnes côte à côte qui reflètent la mise en page PDF — *Header* se lit comme **METAS** | **SUPPLIERS**, *Line Table* comme **Group headers** | **Columns** | **Sub-details** — au lieu d'une longue liste plate. Les bascules utilisent le composant `Checkbox` rond-bleu pour une cohérence visuelle en mode sombre.

Liste complète des bascules par section prédéfinie :

- **Header** — huit bascules `META · …` (numéro de facture, date d'émission, date d'échéance, références contrat / commande / acheteur, type de facture, profil ID), plus six bascules `Supplier · …` (adresse, SIREN, forme légale, TVA, téléphone, e-mail).
- **Parties** — boîtes Client et Livraison, avec bascules séparées pour SIREN, TVA, adresse, identifiant de localisation et un interrupteur principal *Show Delivery box* (désactivé, la mise en page rend un bloc Client en colonne unique).
- **Line Table** — trois bascules d'en-tête de groupe (*Delivery group*, *Page break per delivery*, *Document Reference group*), sept bascules de colonnes (`Line #`, `Description`, `Quantity`, `Unit`, `Unit Price`, `Amount`, `Tax`) et sept bascules de sous-détail pour les métadonnées de ligne (BT-127, BT-134/135, BT-156, BT-157, BT-158, remises / charges, propriétés additionnelles d'article).
- **Document Allowances** — bascules de colonnes pour type, motif, montant, taxe.
- **VAT Breakdown** — bascules de colonnes pour catégorie, taux, base imposable, montant de TVA (une colonne d'exemption apparaît automatiquement lorsqu'elle est présente).
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
| `table` | Grille `lignes × colonnes` avec bordures de cellules optionnelles et ligne d'en-tête stylée. Définir `xpath` la fait itérer (une ligne par occurrence), les enfants servant de gabarit par ligne. |

Plusieurs blocks peuvent coexister dans un même modèle — par exemple un pour des mentions légales françaises, un pour une table structurée de conditions de paiement, un pour un filigrane image. Chaque block a un `name` utilisateur affiché à côté de la ligne de section dans l'éditeur ; un modèle qui contient trois blocks se lit ainsi `Block · payment-terms`, `Block · legal-mentions`, `Block · watermark`.

#### Conventions XPath dans un block

- Le **sélecteur** garde les préfixes de namespace `cbc:` / `cac:` — requis par le moteur namespace-aware ; un XPath saisi à la main sans préfixe ne correspondra à rien.
- Les sélections sont émises en **`/*/<chemin-complet>`** pour être indépendantes de la racine du document (le même chemin s'applique à `Invoice` comme à `CreditNote`).
- À l'intérieur d'un ancêtre itérant (un `repeat` ou une `table` munie d'un `xpath`), le sélecteur supprime en plus le chemin de l'itérateur pour que les cellules enfants démarrent en XPath **relatif** (`cbc:TaxAmount` plutôt que `/*/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount`). Les gabarits de ligne restent ainsi portables quand l'itérateur change.

---

## Éditeur visuel

Une section `block` s'ouvre dans le **`BlockCanvasEditor`** plutôt que dans une zone JSON brute. L'éditeur comporte trois panneaux empilés et une sortie de secours JSON.

| Panneau | Rôle |
|---|---|
| **Arbre** | Vue indentée de tous les nœuds du block, avec une étiquette de type (`text`, `field`, `repeat`, `table`, …). Cliquer un nœud le sélectionne ; la sélection pilote à la fois la barre d'outils et l'inspecteur. |
| **Barre d'outils** | Ajout d'enfant / encapsulation / dégagement / suppression / déplacement haut-bas — opérations appliquées au nœud sélectionné. Mêmes opérations disponibles via raccourcis clavier. |
| **Inspecteur** | Formulaire d'attributs par type (XPath, libellé, format, alignement, gap, …) plus un sous-panneau **Style** couvrant police, graisse, taille, couleur, alignement et marges intérieures. |

Détail subtil mais important en haut de l'inspecteur : un sélecteur **Type** qui **transforme** le nœud sélectionné sur place — passage de `column` à `repeat` sans suppression / recréation. Les attributs compatibles (enfants, style) sont reportés par le helper `transmuteKind`. Même mécanisme pour le cas fréquent de promotion d'un block statique en block itérant une fois la forme des données identifiée.

Le bouton **Aperçu en direct** en haut du formulaire ouvre une modale 960 × 85vh qui rend la configuration courante sur une facture d'exemple — l'enregistrement (*Enregistrer*) pendant que la modale est ouverte met à jour l'iframe en direct. Le contrôle *Charger un échantillon XML* est remonté à l'en-tête du modèle ; ainsi un seul échantillon alimente l'autocomplétion XPath de chaque block du modèle.

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
| `DELETE /api/templates/{nom}` | Supprime une mise en page. Le nom réservé `built-in` est rejeté. |
| `POST /api/pdf-templates/preview` | Rend un JSON `pdfTemplate` arbitraire face à une facture d'exemple — utilisé par l'iframe d'aperçu. |
| `PUT /api/templates/global` (avec `defaultPdfTemplate`) | Backend des actions *Set as default* / *Reset to factory*. |

---

## Conseils & bonnes pratiques

- **Partir de `built-in` via Copier.** La mise en page livrée est une base solide — préférer la dériver par copie et ajustement de bascules plutôt que de partir d'un modèle vide.
- **Un seul modèle, plusieurs documents.** Pour chaque variante de facture (standard, avoir, reçu destinataire …), privilégier un modèle partagé plutôt qu'un JSON inline par document. Le bénéfice : un point d'édition unique quand les mentions légales ou le jeu de colonnes évoluent.
- **Désigner un défaut tôt.** Marquer une mise en page comme défaut avant le branchement des modèles de document spécifiques aux clients — chaque nouveau document utilise alors ce défaut implicitement, et la propriété `pdfTemplate` explicite reste réservée aux vraies variantes.
- **Utiliser `block` pour ce que les sections prédéfinies ne couvrent pas.** Mentions légales personnalisées, pieds de page spécifiques à un pays, blocs de signature structurés, filigranes — autant de cas mieux traités par un `block` que par une section prédéfinie.
- **Itérer dans la modale d'aperçu.** Basculer une section et observer l'iframe se re-rendre dans la modale est le moyen le plus rapide d'arriver à une mise en page sans quitter l'éditeur.
- **Réutiliser l'échantillon XML.** Un seul *Charger un échantillon XML* sur l'en-tête du modèle alimente le sélecteur de chaque block — chargement unique par session d'édition, et chaque autocomplétion XPath fonctionne immédiatement.
- **Ne pas supprimer `built-in`.** Le bouton est désactivé sur cette entrée pour cette raison — c'est le filet de sécurité au bout de la chaîne de résolution.
