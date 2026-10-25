---
title: Listes de référence
description: "Catalogue des listes de référence standard de la facturation électronique française intégrées à NomaUBL : listes de codes ISO / UN / CEN, valeurs des termes métier Factur-X / EN 16931, et codes action / rejet côté PA."
keywords: [NomaUBL, listes de référence, facturation électronique, EN 16931, Factur-X, UNTDID, ISO 4217, ISO 3166, UN/ECE, BT-3, BT-23, BT-29, BT-118, VATEX, scheme IDs, JD Edwards, SAP, NetSuite]
---

# Listes de référence

La section **Reference Lists** rassemble les **listes de codes standard** requises par la Réforme française de la facturation électronique et par le modèle sémantique européen sous-jacent (EN 16931 / Factur-X). Chaque liste est un vocabulaire contrôlé — codes pays, codes devise, types de facture, catégories de TVA, etc. — utilisé par NomaUBL pour valider les documents UBL et alimenter les listes déroulantes de l'interface.

La majorité de ces listes proviennent de standards internationaux (ISO, UN/CEFACT, CEN) ; quelques-unes correspondent à des codes côté PA spécifiques à l'infrastructure française (codes action, codes de motif de rejet). NomaUBL est livré avec un contenu par défaut pré-renseigné pour chaque liste ; les éditeurs permettent de personnaliser les libellés (notamment les traductions bilingues FR/EN) et d'ajouter des codes propres à l'activité.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#rl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Listes de référence</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#rl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enreg.</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="180" height="336" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="104" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LISTES · 12 STANDARD</text>

  <rect x="248" y="118" width="164" height="22" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="258" y="133" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">currency-codes</text>
  <text x="248" y="156" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">country-codes</text>
  <text x="248" y="174" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">invoice-types</text>
  <text x="248" y="192" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">vat-categories</text>
  <text x="248" y="210" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">vat-exemption</text>
  <text x="248" y="228" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">unit-of-measure</text>
  <text x="248" y="246" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">payment-means</text>
  <text x="248" y="264" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">allowance-charge</text>
  <text x="248" y="282" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">scheme-ids</text>
  <text x="248" y="300" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">tax-scheme</text>
  <text x="248" y="318" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">action-codes</text>
  <text x="248" y="336" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">rejection-reasons</text>

  <rect x="432" y="84" width="348" height="336" rx="8" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="444" y="104" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">currency-codes</text>
  <text x="586" y="104" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">ISO 4217 · BT-5, BT-6, BT-19</text>

  <rect x="444" y="118" width="320" height="26" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="135" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE  ·  LABEL FR  ·  LABEL EN</text>

  <rect x="444" y="148" width="320" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="165" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EUR  ·  Euro  ·  Euro</text>
  <text x="744" y="165" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="178" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">USD  ·  Dollar US  ·  US Dollar</text>
  <text x="744" y="195" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="208" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GBP  ·  Livre sterling  ·  Pound sterling</text>
  <text x="744" y="225" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="238" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="255" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CHF  ·  Franc suisse  ·  Swiss franc</text>
  <text x="744" y="255" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="268" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="285" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JPY  ·  Yen  ·  Yen</text>
  <text x="744" y="285" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="298" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CAD  ·  Dollar canadien  ·  Canadian dollar</text>
  <text x="744" y="315" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <text x="454" y="348" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">…</text>

  <rect x="444" y="368" width="130" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="509" y="385" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter</text>
  <text x="586" y="385" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">valeurs par défaut livrées ; lignes personnalisées possibles</text>

  <rect x="20" y="118" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">12 listes standard</text>
  <text x="30" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ISO · UN/CEFACT · CEN · côté PA</text>
  <line x1="220" y1="134" x2="248" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rl-arrow)"/>

  <rect x="820" y="118" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau trois colonnes</text>
  <text x="830" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Code · Label FR · Label EN</text>
  <line x1="820" y1="134" x2="764" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rl-arrow)"/>

  <rect x="820" y="368" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter</text>
  <text x="830" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étendre avec des codes locaux</text>
  <line x1="820" y1="384" x2="574" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rl-arrow)"/>
</svg>

---

## Mode d'édition commun à toutes les listes

Chaque liste de référence est présentée sous forme de **tableau** qui contient les mêmes trois colonnes. Le mode d'interaction est identique pour les quinze listes ; seules les valeurs de codes et la référence réglementaire associée diffèrent.

| Colonne | Description |
|---|---|
| **Code** | Code standard, tel que défini par le référentiel d'origine (par ex. `EUR`, `380`, `S`, `0088`). |
| **Label FR** | Libellé français affiché quand la locale active est le français. |
| **Label EN** | Libellé anglais affiché quand la locale active est l'anglais. |

Utiliser le bouton **+ Ajouter** en bas du tableau pour ajouter une ligne personnalisée, et le bouton **×** d'une ligne pour la supprimer. Les lignes sont triées par code.

:::info[Listes personnalisées (non standard)]
Les quinze listes ci-dessous sont les catalogues réglementaires livrés avec NomaUBL. Les listes définies par les opérateurs — qui alimentent les listes déroulantes et les filtres d'une grille depuis des données externes — se trouvent sur une page dédiée : [Listes personnalisées](./custom-lists.md). Elles peuvent aussi être synchronisées depuis un connecteur API ou SQL au lieu d'être saisies ligne par ligne.
:::

---

## Listes standard fournies par NomaUBL

Les quinze listes ci-dessous sont intégrées à NomaUBL et alignées sur la réglementation. Elles couvrent tous les référentiels nécessaires à la validation de bout en bout des documents UBL dans la chaîne française de facturation électronique.

| Liste | Standard / terme métier | Rôle |
|---|---|---|
| **Country Codes** | ISO 3166-1 alpha-2 | Codes pays sur deux lettres utilisés pour les adresses acheteur / vendeur / livraison. |
| **Currency Codes** | ISO 4217 — `BT-5` / `BT-6` | Devise du document et devise comptable des factures. |
| **Invoice Type Codes** | UNTDID 1001 — `BT-3` | Type de document de facturation (par ex. facture commerciale, avoir, facture rectificative), chacun qualifié de facture ou d'avoir — voir [plus bas](#invoice-types). |
| **Note Type Codes** | UNTDID 4451 — `BT-22` | Qualificatif des notes en texte libre attachées à la facture. |
| **Payment Means Codes** | UNTDID 4461 — `BT-81` | Modalités de règlement de la facture (virement, prélèvement, carte…). |
| **Profile IDs** | `BT-23` (*Cadre de facturation*) | Identifiant du cadre de facturation / processus métier. |
| **Customization IDs** | `BT-24` | Identifiant de spécification ; il détermine le Schematron appliqué (CIUS-FR ou CTC FR étendu). |
| **Scheme IDs** | `BT-29` / `BT-30` / `BT-34` / `BT-49` / `BT-71` | Référentiels d'identifiants (schémas d'adressage électronique, schémas d'identifiant tiers). |
| **Unit of Measure Codes** | Recommandation UN/ECE 20 — `BT-130` | Codes d'unité de quantité sur les lignes de facture (pièce, kilogramme, heure…). |
| **VAT Category Codes** | UN/ECE 5305 — `BT-118` / `BT-151` | Catégorie de TVA au niveau document et au niveau ligne (taux normal, taux zéro, exonéré, autoliquidation…, y compris `L` IGIC des Canaries et `M` IPSI de Ceuta et Melilla). |
| **VATEX Exemption Reason Codes** | VATEX — `BT-121` | Codification du motif d'exonération de TVA, référencé quand une ligne est exonérée. |
| **VAT Point Date Codes** | UNTDID 2005 — `BT-8` | Exigibilité de la TVA : date de facture, de livraison ou de paiement. |
| **Document Reference Codes** | UNTDID 1153 — `BT-128-1` | Schéma de l'identifiant d'objet facturé (bon de livraison, bon de commande…). |
| **Expected Action Codes** | `Y56ACTN` (*Action attendue*) | Codes d'action attendus par la Plateforme Agréée (catalogue côté PA). |
| **Rejection Reason Codes** | `Y56RSRC` (*Motif de rejet*) | Motifs renvoyés par la PA lors du rejet d'une facture. |

Les listes contiennent l'intégralité des codes de leur norme — par exemple 62 codes de type de facture, 84 moyens de paiement, 30 unités de mesure. Une mise à jour **ajoute** les codes manquants d'une liste sans jamais supprimer ni renommer un code présent : les libellés adaptés sur une instance sont conservés.

### Types de facture : facture ou avoir \{#invoice-types\}

L'éditeur *Invoice Type Codes* comporte une colonne **Type**, avec *Invoice* (facture) ou *Credit note* (avoir) — la lecture EN 16931 de chaque code, enregistrée sous la forme `code = libelléFr|libelléEn|INVOICE` ou `CREDIT`. Treize codes sont des avoirs dès l'installation : `81`, `83`, `261`, `262`, `296`, `308`, `381`, `396`, `420`, `458`, `502`, `503`, `532`. Le type détermine :

- si l'UBL est produit sous forme de document **CreditNote** plutôt que d'Invoice ;
- la façon dont un document compte dans la [Synthèse](../application/billing-overview.md) (les avoirs viennent en déduction du chiffre d'affaires) ;
- le **signe** des montants B2C en [e-reporting](../application/ereporting.md).

Un code absent de la liste, ou listé sans type, suit la table EN 16931.

Une première colonne, **Active**, décide si un code est proposé. Un code décoché reste dans la liste — ses libellés s'affichent toujours sur les factures existantes et son type facture / avoir s'applique encore — mais il n'est plus proposé dans aucune liste de choix : valeurs par défaut UBL, formulaire de facture, filtres des listes et de l'Explorateur (enregistré comme quatrième champ `N`). Une nouvelle installation contient les 62 codes, dont seuls les **16 codes de la facturation électronique française** sont actifs : `380`, `381`, `384`, `386`, `389`, `393`, `396`, `261`, `262`, `471`, `472`, `473`, `500` à `503`. Une mise à jour complète le type des codes existants et ne modifie jamais ceux qui sont actifs.

---

## Conseils & bonnes pratiques

- **S'en tenir aux codes standard.** Ajouter un code hors référentiel rompt la validation en aval — la PA, la PA destinataire et l'annuaire PPF s'attendent tous à des valeurs standard.
- **Personnaliser les libellés, pas les codes.** Adapter un libellé au vocabulaire métier est sans risque ; renommer le code sous-jacent ne l'est pas.
- **Les libellés bilingues ne sont pas optionnels.** Renseigner systématiquement Label FR et Label EN — l'interface se replie sur le code brut quand le libellé de la locale active est vide.
- **Maintenir VATEX cohérent avec les catégories de TVA.** Les codes VATEX n'ont de sens qu'associés à une catégorie de TVA exonérante — l'un sans l'autre produit des factures invalides.
- **Les codes Action / Rejet sont définis côté PA.** Si la PA renomme ou ajoute des codes dans son catalogue, répliquer la modification ici pour maintenir l'alignement entre l'interface et les payloads d'API.
