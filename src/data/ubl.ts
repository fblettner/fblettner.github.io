// UBL field reference for the French e-invoicing reform (EN 16931 / Factur-X / extended).
// Mirror of nomaubl/src/web-react/src/services/ublReferenceData.ts (UBL_FIELDS) —
// keep both in sync when the regulation evolves.

export interface BilStr {
  en: string;
  fr: string;
}

export type UBLSection =
  | 'header'
  | 'supplier'
  | 'customer'
  | 'payee'
  | 'taxrep'
  | 'delivery'
  | 'payment'
  | 'allowance'
  | 'tax'
  | 'totals'
  | 'line';

export type UBLCardinality = '1..1' | '0..1' | '0..n' | '1..n';

export interface UBLField {
  bt: string;
  xpath: string;
  label: BilStr;
  desc?: BilStr;
  section: UBLSection;
  cardinality: UBLCardinality;
  example?: string;
  parent?: string;
}

export const SECTION_CONFIG: Record<UBLSection, {label: BilStr; color: string; bg: string; border: string}> = {
  header:    {label: {en: 'Header',               fr: 'En-tête'},              color: '#60a5fa', bg: 'rgba(96,165,250,0.10)',  border: 'rgba(96,165,250,0.30)'},
  supplier:  {label: {en: 'Supplier',             fr: 'Vendeur'},              color: '#34d399', bg: 'rgba(52,211,153,0.10)',  border: 'rgba(52,211,153,0.30)'},
  customer:  {label: {en: 'Customer',             fr: 'Acheteur'},             color: '#a78bfa', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.30)'},
  payee:     {label: {en: 'Payee',                fr: 'Bénéficiaire'},         color: '#fbbf24', bg: 'rgba(251,191,36,0.10)',  border: 'rgba(251,191,36,0.30)'},
  taxrep:    {label: {en: 'Tax Representative',   fr: 'Représentant fiscal'},  color: '#f472b6', bg: 'rgba(244,114,182,0.10)', border: 'rgba(244,114,182,0.30)'},
  delivery:  {label: {en: 'Delivery',             fr: 'Livraison'},            color: '#fb923c', bg: 'rgba(251,146,60,0.10)',  border: 'rgba(251,146,60,0.30)'},
  payment:   {label: {en: 'Payment',              fr: 'Paiement'},             color: '#2dd4bf', bg: 'rgba(45,212,191,0.10)',  border: 'rgba(45,212,191,0.30)'},
  allowance: {label: {en: 'Allowances & Charges', fr: 'Remises & Charges'},    color: '#f87171', bg: 'rgba(248,113,113,0.10)', border: 'rgba(248,113,113,0.30)'},
  tax:       {label: {en: 'Tax',                  fr: 'TVA'},                  color: '#e879f9', bg: 'rgba(232,121,249,0.10)', border: 'rgba(232,121,249,0.30)'},
  totals:    {label: {en: 'Totals',               fr: 'Totaux'},               color: '#4ade80', bg: 'rgba(74,222,128,0.10)',  border: 'rgba(74,222,128,0.30)'},
  line:      {label: {en: 'Invoice Line',         fr: 'Ligne de facture'},     color: '#38bdf8', bg: 'rgba(56,189,248,0.10)',  border: 'rgba(56,189,248,0.30)'},
};

export const SECTION_ORDER: UBLSection[] = [
  'header', 'supplier', 'customer', 'payee', 'taxrep',
  'delivery', 'payment', 'allowance', 'tax', 'totals', 'line',
];

export const UBL_FIELDS: UBLField[] = [
  // Header
  {bt: 'BT-24', xpath: 'cbc:CustomizationID', section: 'header', cardinality: '1..1', label: {fr: 'Identification de spécification', en: 'Specification identification'}, example: 'urn:cen.eu:en16931:2017#conformant#urn.cpro.gouv.fr:1p0:extended-ctc-fr'},
  {bt: 'BT-23', xpath: 'cbc:ProfileID', section: 'header', cardinality: '1..1', label: {fr: 'Identifiant de type de processus métier', en: 'Business process type identifier'}, example: 'B1'},
  {bt: 'BT-1', xpath: 'cbc:ID', section: 'header', cardinality: '1..1', label: {fr: 'Numéro de facture', en: 'Invoice number'}, example: 'F202500001'},
  {bt: 'BT-2', xpath: 'cbc:IssueDate', section: 'header', cardinality: '1..1', label: {fr: "Date d'émission de la facture", en: 'Invoice issue date'}, example: '2025-02-01'},
  {bt: 'BT-9', xpath: 'cbc:DueDate', section: 'header', cardinality: '0..1', label: {fr: "Date d'échéance", en: 'Due date'}, example: '2025-03-03'},
  {bt: 'BT-3', xpath: 'cbc:InvoiceTypeCode', section: 'header', cardinality: '1..1', label: {fr: 'Type de facture en code', en: 'Invoice type code'}, desc: {fr: '380 = Facture, 381 = Avoir, 389 = Auto-facture', en: '380 = Invoice, 381 = Credit note, 389 = Self-billing invoice'}, example: '380'},
  {bt: 'BT-22', xpath: 'cbc:Note', section: 'header', cardinality: '0..n', label: {fr: 'Note de facture', en: 'Invoice note'}, desc: {fr: 'Préfixe requis: #REG#, #ABL#, #AAI#, #PMD#, #PMT#, #AAB#, #TXD#', en: 'Required prefix: #REG#, #ABL#, #AAI#, #PMD#, #PMT#, #AAB#, #TXD#'}},
  {bt: 'BT-5', xpath: 'cbc:DocumentCurrencyCode', section: 'header', cardinality: '1..1', label: {fr: 'Code de devise de facturation', en: 'Invoice currency code'}, example: 'EUR'},
  {bt: 'BT-19', xpath: 'cbc:AccountingCost', section: 'header', cardinality: '0..1', label: {fr: "Référence comptable de l'acheteur", en: "Buyer's accounting reference"}},
  {bt: 'BT-10', xpath: 'cbc:BuyerReference', section: 'header', cardinality: '1..1', label: {fr: "Référence de l'acheteur", en: 'Buyer reference'}, desc: {fr: 'Obligatoire pour la facturation électronique française', en: 'Mandatory for French e-invoicing'}, example: 'SERVEXEC'},
  {bt: 'BT-73', xpath: 'cac:InvoicePeriod/cbc:StartDate', section: 'header', cardinality: '0..1', label: {fr: 'Date de début de période de facturation', en: 'Invoicing period start date'}, example: '2025-01-01'},
  {bt: 'BT-74', xpath: 'cac:InvoicePeriod/cbc:EndDate', section: 'header', cardinality: '0..1', label: {fr: 'Date de fin de période de facturation', en: 'Invoicing period end date'}, example: '2025-01-31'},
  {bt: 'BT-8', xpath: 'cac:InvoicePeriod/cbc:DescriptionCode', section: 'header', cardinality: '0..1', label: {fr: "Date d'exigibilité de la TVA en code", en: 'Value added tax point date code'}, desc: {fr: '3 = Date de livraison, 35 = Date de facture, 432 = Paiement', en: '3 = Delivery date, 35 = Invoice date, 432 = Payment'}, example: '3'},
  {bt: 'BT-13', xpath: 'cac:OrderReference/cbc:ID', section: 'header', cardinality: '0..1', label: {fr: 'Identifiant de bon de commande', en: 'Purchase order reference'}, example: 'PO201925478'},
  {bt: 'BT-14', xpath: 'cac:OrderReference/cbc:SalesOrderID', section: 'header', cardinality: '0..1', label: {fr: 'Identifiant de bon de commande de vente', en: 'Sales order reference'}},
  {bt: 'BT-16', xpath: 'cac:DespatchDocumentReference/cbc:ID', section: 'header', cardinality: '0..1', label: {fr: "Identifiant d'avis d'expédition", en: 'Despatch advice reference'}},
  {bt: 'BT-15', xpath: 'cac:ReceiptDocumentReference/cbc:ID', section: 'header', cardinality: '0..1', label: {fr: "Identifiant d'avis de réception", en: 'Receiving advice reference'}},
  {bt: 'BT-17', xpath: 'cac:OriginatorDocumentReference/cbc:ID', section: 'header', cardinality: '0..1', label: {fr: "Identifiant d'appel d'offres ou de lot", en: 'Tender or lot reference'}},
  {bt: 'BT-12', xpath: 'cac:ContractDocumentReference/cbc:ID', section: 'header', cardinality: '0..1', label: {fr: 'Identifiant de contrat', en: 'Contract reference'}, example: 'CT2018120802'},
  {bt: 'BT-122', xpath: 'cac:AdditionalDocumentReference/cbc:ID', section: 'header', cardinality: '0..n', label: {fr: 'Identifiant de document justificatif', en: 'Supporting document reference'}},
  {bt: 'BT-123', xpath: 'cac:AdditionalDocumentReference/cbc:DocumentDescription', section: 'header', cardinality: '0..1', label: {fr: 'Description de document justificatif', en: 'Supporting document description'}},
  {bt: 'BT-124', xpath: 'cac:AdditionalDocumentReference/cac:Attachment/cac:ExternalReference/cbc:URI', section: 'header', cardinality: '0..1', label: {fr: 'Emplacement de document externe', en: 'External document location'}},
  {bt: 'BT-18', xpath: 'cac:AdditionalDocumentReference/cbc:ID[@schemeID]', section: 'header', cardinality: '0..1', label: {fr: "Identifiant d'objet facturé", en: 'Invoiced object identifier'}, desc: {fr: 'Avec DocumentTypeCode = 130', en: 'With DocumentTypeCode = 130'}},
  {bt: 'BT-11', xpath: 'cac:ProjectReference/cbc:ID', section: 'header', cardinality: '0..1', label: {fr: 'Référence au projet', en: 'Project reference'}, example: 'PROJET_2547'},

  // Supplier
  {bt: 'BT-34', xpath: 'cac:AccountingSupplierParty/cac:Party/cbc:EndpointID', section: 'supplier', cardinality: '1..1', label: {fr: 'Adresse électronique du vendeur', en: 'Seller electronic address'}, desc: {fr: 'schemeID=0225 pour identifiant PPF', en: 'schemeID=0225 for PPF identifier'}, example: '100000009_STATUTS'},
  {bt: 'BT-29', xpath: 'cac:AccountingSupplierParty/cac:Party/cac:PartyIdentification/cbc:ID', section: 'supplier', cardinality: '0..n', label: {fr: 'Identifiant du vendeur', en: 'Seller identifier'}, desc: {fr: 'schemeID: 0088=GLN, 0009=SIRET, 0060=DUNS, 0231=Identifiant PA', en: 'schemeID: 0088=GLN, 0009=SIRET, 0060=DUNS, 0231=PA identifier'}},
  {bt: 'BT-28', xpath: 'cac:AccountingSupplierParty/cac:Party/cac:PartyName/cbc:Name', section: 'supplier', cardinality: '0..1', label: {fr: 'Appellation commerciale du vendeur', en: 'Seller trading name'}},
  {bt: 'BT-35', xpath: 'cac:AccountingSupplierParty/.../cac:PostalAddress/cbc:StreetName', section: 'supplier', cardinality: '0..1', label: {fr: 'Adresse du vendeur - Ligne 1', en: 'Seller address line 1'}},
  {bt: 'BT-36', xpath: 'cac:AccountingSupplierParty/.../cac:PostalAddress/cbc:AdditionalStreetName', section: 'supplier', cardinality: '0..1', label: {fr: 'Adresse du vendeur - Ligne 2', en: 'Seller address line 2'}},
  {bt: 'BT-37', xpath: 'cac:AccountingSupplierParty/.../cac:PostalAddress/cbc:CityName', section: 'supplier', cardinality: '0..1', label: {fr: 'Localité du vendeur', en: 'Seller city'}},
  {bt: 'BT-38', xpath: 'cac:AccountingSupplierParty/.../cac:PostalAddress/cbc:PostalZone', section: 'supplier', cardinality: '0..1', label: {fr: 'Code postal du vendeur', en: 'Seller post code'}},
  {bt: 'BT-40', xpath: 'cac:AccountingSupplierParty/.../cac:PostalAddress/cac:Country/cbc:IdentificationCode', section: 'supplier', cardinality: '1..1', label: {fr: 'Code de pays du vendeur', en: 'Seller country code'}, example: 'FR'},
  {bt: 'BT-31', xpath: 'cac:AccountingSupplierParty/.../cac:PartyTaxScheme/cbc:CompanyID', section: 'supplier', cardinality: '0..1', label: {fr: 'Identifiant à la TVA du vendeur', en: 'Seller VAT identifier'}, example: 'FR88100000009'},
  {bt: 'BT-27', xpath: 'cac:AccountingSupplierParty/.../cac:PartyLegalEntity/cbc:RegistrationName', section: 'supplier', cardinality: '1..1', label: {fr: 'Raison sociale du vendeur', en: 'Seller name'}},
  {bt: 'BT-30', xpath: 'cac:AccountingSupplierParty/.../cac:PartyLegalEntity/cbc:CompanyID', section: 'supplier', cardinality: '0..1', label: {fr: "Identifiant d'enregistrement légal du vendeur", en: 'Seller legal registration identifier'}, desc: {fr: 'schemeID=0002 pour SIREN', en: 'schemeID=0002 for SIREN'}},
  {bt: 'BT-33', xpath: 'cac:AccountingSupplierParty/.../cac:PartyLegalEntity/cbc:CompanyLegalForm', section: 'supplier', cardinality: '0..1', label: {fr: 'Informations juridiques additionnelles sur le vendeur', en: 'Seller additional legal information'}},
  {bt: 'BT-41', xpath: 'cac:AccountingSupplierParty/.../cac:Contact/cbc:Name', section: 'supplier', cardinality: '0..1', label: {fr: 'Point de contact vendeur', en: 'Seller contact point'}},
  {bt: 'BT-42', xpath: 'cac:AccountingSupplierParty/.../cac:Contact/cbc:Telephone', section: 'supplier', cardinality: '0..1', label: {fr: 'Numéro de téléphone du contact vendeur', en: 'Seller contact telephone number'}},
  {bt: 'BT-43', xpath: 'cac:AccountingSupplierParty/.../cac:Contact/cbc:ElectronicMail', section: 'supplier', cardinality: '0..1', label: {fr: 'Adresse électronique du contact vendeur', en: 'Seller contact email address'}},

  // Customer
  {bt: 'BT-49', xpath: 'cac:AccountingCustomerParty/cac:Party/cbc:EndpointID', section: 'customer', cardinality: '1..1', label: {fr: "Adresse électronique de l'acheteur", en: 'Buyer electronic address'}, desc: {fr: 'schemeID=0225 pour identifiant PPF', en: 'schemeID=0225 for PPF identifier'}},
  {bt: 'BT-46', xpath: 'cac:AccountingCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID', section: 'customer', cardinality: '0..n', label: {fr: "Identifiant de l'acheteur", en: 'Buyer identifier'}},
  {bt: 'BT-50', xpath: 'cac:AccountingCustomerParty/.../cac:PostalAddress/cbc:StreetName', section: 'customer', cardinality: '0..1', label: {fr: "Adresse de l'acheteur - Ligne 1", en: 'Buyer address line 1'}},
  {bt: 'BT-51', xpath: 'cac:AccountingCustomerParty/.../cac:PostalAddress/cbc:AdditionalStreetName', section: 'customer', cardinality: '0..1', label: {fr: "Adresse de l'acheteur - Ligne 2", en: 'Buyer address line 2'}},
  {bt: 'BT-52', xpath: 'cac:AccountingCustomerParty/.../cac:PostalAddress/cbc:CityName', section: 'customer', cardinality: '0..1', label: {fr: "Localité de l'acheteur", en: 'Buyer city'}},
  {bt: 'BT-53', xpath: 'cac:AccountingCustomerParty/.../cac:PostalAddress/cbc:PostalZone', section: 'customer', cardinality: '0..1', label: {fr: "Code postal de l'acheteur", en: 'Buyer post code'}},
  {bt: 'BT-163', xpath: 'cac:AccountingCustomerParty/.../cac:PostalAddress/cac:AddressLine/cbc:Line', section: 'customer', cardinality: '0..1', label: {fr: "Adresse de l'acheteur - Ligne 3", en: 'Buyer address line 3'}},
  {bt: 'BT-55', xpath: 'cac:AccountingCustomerParty/.../cac:PostalAddress/cac:Country/cbc:IdentificationCode', section: 'customer', cardinality: '1..1', label: {fr: "Code de pays de l'acheteur", en: 'Buyer country code'}},
  {bt: 'BT-48', xpath: 'cac:AccountingCustomerParty/.../cac:PartyTaxScheme/cbc:CompanyID', section: 'customer', cardinality: '0..1', label: {fr: "Identifiant à la TVA de l'acheteur", en: 'Buyer VAT identifier'}},
  {bt: 'BT-44', xpath: 'cac:AccountingCustomerParty/.../cac:PartyLegalEntity/cbc:RegistrationName', section: 'customer', cardinality: '1..1', label: {fr: "Raison sociale de l'acheteur", en: 'Buyer name'}},
  {bt: 'BT-47', xpath: 'cac:AccountingCustomerParty/.../cac:PartyLegalEntity/cbc:CompanyID', section: 'customer', cardinality: '0..1', label: {fr: "Identifiant d'enregistrement légal de l'acheteur", en: 'Buyer legal registration identifier'}},
  {bt: 'BT-57', xpath: 'cac:AccountingCustomerParty/.../cac:Contact/cbc:Telephone', section: 'customer', cardinality: '0..1', label: {fr: "Numéro de téléphone du contact acheteur", en: 'Buyer contact telephone number'}},
  {bt: 'BT-58', xpath: 'cac:AccountingCustomerParty/.../cac:Contact/cbc:ElectronicMail', section: 'customer', cardinality: '0..1', label: {fr: "Adresse électronique du contact acheteur", en: 'Buyer contact email address'}},

  // Payee
  {bt: 'BT-60', xpath: 'cac:PayeeParty/cac:PartyIdentification/cbc:ID', section: 'payee', cardinality: '0..1', label: {fr: 'Identifiant du bénéficiaire', en: 'Payee identifier'}},
  {bt: 'BT-59', xpath: 'cac:PayeeParty/cac:PartyName/cbc:Name', section: 'payee', cardinality: '0..1', label: {fr: 'Nom du bénéficiaire', en: 'Payee name'}},
  {bt: 'BT-61', xpath: 'cac:PayeeParty/cac:PartyLegalEntity/cbc:CompanyID', section: 'payee', cardinality: '0..1', label: {fr: "Identifiant d'enregistrement légal du bénéficiaire", en: 'Payee legal registration identifier'}},

  // Tax Representative
  {bt: 'BT-62', xpath: 'cac:TaxRepresentativeParty/cac:PartyName/cbc:Name', section: 'taxrep', cardinality: '0..1', label: {fr: 'Nom du représentant fiscal du vendeur', en: 'Seller tax representative name'}},
  {bt: 'BT-64', xpath: 'cac:TaxRepresentativeParty/cac:PostalAddress/cbc:StreetName', section: 'taxrep', cardinality: '0..1', label: {fr: 'Adresse du représentant fiscal - Ligne 1', en: 'Tax representative address line 1'}},
  {bt: 'BT-65', xpath: 'cac:TaxRepresentativeParty/cac:PostalAddress/cbc:AdditionalStreetName', section: 'taxrep', cardinality: '0..1', label: {fr: 'Adresse du représentant fiscal - Ligne 2', en: 'Tax representative address line 2'}},
  {bt: 'BT-66', xpath: 'cac:TaxRepresentativeParty/cac:PostalAddress/cbc:CityName', section: 'taxrep', cardinality: '0..1', label: {fr: 'Localité du représentant fiscal', en: 'Tax representative city'}},
  {bt: 'BT-67', xpath: 'cac:TaxRepresentativeParty/cac:PostalAddress/cbc:PostalZone', section: 'taxrep', cardinality: '0..1', label: {fr: 'Code postal du représentant fiscal', en: 'Tax representative post code'}},
  {bt: 'BT-69', xpath: 'cac:TaxRepresentativeParty/cac:PostalAddress/cac:Country/cbc:IdentificationCode', section: 'taxrep', cardinality: '1..1', label: {fr: 'Code de pays du représentant fiscal', en: 'Tax representative country code'}},
  {bt: 'BT-63', xpath: 'cac:TaxRepresentativeParty/cac:PartyTaxScheme/cbc:CompanyID', section: 'taxrep', cardinality: '1..1', label: {fr: 'Identifiant à la TVA du représentant fiscal', en: 'Tax representative VAT identifier'}},

  // Delivery
  {bt: 'BT-72', xpath: 'cac:Delivery/cbc:ActualDeliveryDate', section: 'delivery', cardinality: '0..1', label: {fr: 'Date effective de livraison', en: 'Actual delivery date'}, example: '2025-01-31'},
  {bt: 'BT-75', xpath: 'cac:Delivery/cac:DeliveryLocation/cac:Address/cbc:StreetName', section: 'delivery', cardinality: '0..1', label: {fr: 'Adresse de livraison - Ligne 1', en: 'Delivery address line 1'}},
  {bt: 'BT-76', xpath: 'cac:Delivery/.../cbc:AdditionalStreetName', section: 'delivery', cardinality: '0..1', label: {fr: 'Adresse de livraison - Ligne 2', en: 'Delivery address line 2'}},
  {bt: 'BT-77', xpath: 'cac:Delivery/.../cbc:CityName', section: 'delivery', cardinality: '0..1', label: {fr: 'Localité de livraison', en: 'Delivery city'}},
  {bt: 'BT-78', xpath: 'cac:Delivery/.../cbc:PostalZone', section: 'delivery', cardinality: '0..1', label: {fr: 'Code postal de livraison', en: 'Delivery post code'}},
  {bt: 'BT-80', xpath: 'cac:Delivery/.../cac:Country/cbc:IdentificationCode', section: 'delivery', cardinality: '0..1', label: {fr: 'Code du pays de livraison', en: 'Delivery country code'}},
  {bt: 'BT-70', xpath: 'cac:Delivery/cac:DeliveryParty/cac:PartyName/cbc:Name', section: 'delivery', cardinality: '0..1', label: {fr: "Nom de l'intervenant à livrer", en: 'Deliver to party name'}},

  // Payment
  {bt: 'BT-81', xpath: 'cac:PaymentMeans/cbc:PaymentMeansCode', section: 'payment', cardinality: '1..1', label: {fr: 'Code de type de moyen de paiement', en: 'Payment means type code'}, desc: {fr: '30 = Virement, 58 = SEPA, 49 = Prélèvement', en: '30 = Credit transfer, 58 = SEPA, 49 = Direct debit'}, example: '30'},
  {bt: 'BT-83', xpath: 'cac:PaymentMeans/cbc:PaymentID', section: 'payment', cardinality: '0..1', label: {fr: 'Référence End to End de paiement', en: 'Remittance information'}},
  {bt: 'BT-84', xpath: 'cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:ID', section: 'payment', cardinality: '0..1', label: {fr: 'Identifiant (IBAN) du compte bancaire', en: 'Payment account identifier (IBAN)'}},
  {bt: 'BT-85', xpath: 'cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:Name', section: 'payment', cardinality: '0..1', label: {fr: 'Nom du compte bancaire du bénéficiaire', en: 'Payment account name'}},
  {bt: 'BT-86', xpath: 'cac:PaymentMeans/.../cac:FinancialInstitutionBranch/cbc:ID', section: 'payment', cardinality: '0..1', label: {fr: "Identifiant d'établissement financier (BIC)", en: 'Payment service provider identifier (BIC)'}},
  {bt: 'BT-89', xpath: 'cac:PaymentMeans/cac:PaymentMandate/cbc:ID', section: 'payment', cardinality: '0..1', label: {fr: 'Identifiant de référence de mandat (RUM)', en: 'Mandate reference identifier'}},
  {bt: 'BT-91', xpath: 'cac:PaymentMeans/cac:PaymentMandate/cac:PayerFinancialAccount/cbc:ID', section: 'payment', cardinality: '0..1', label: {fr: 'Identifiant du compte débité', en: 'Debited account identifier'}},
  {bt: 'BT-20', xpath: 'cac:PaymentTerms/cbc:Note', section: 'payment', cardinality: '0..1', label: {fr: 'Conditions de paiement', en: 'Payment terms'}, example: 'PAIEMENT 30 JOURS NET'},

  // Allowances & Charges (Document level)
  {bt: 'BT-92', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cbc:Amount', section: 'allowance', cardinality: '0..n', label: {fr: 'Montant de la remise au niveau du document', en: 'Document level allowance amount'}},
  {bt: 'BT-93', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cbc:BaseAmount', section: 'allowance', cardinality: '0..1', label: {fr: 'Assiette de la remise au niveau du document', en: 'Document level allowance base amount'}},
  {bt: 'BT-94', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cbc:MultiplierFactorNumeric', section: 'allowance', cardinality: '0..1', label: {fr: 'Pourcentage de remise au niveau du document', en: 'Document level allowance percentage'}},
  {bt: 'BT-97', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cbc:AllowanceChargeReason', section: 'allowance', cardinality: '0..1', label: {fr: 'Motif de la remise au niveau du document', en: 'Document level allowance reason'}},
  {bt: 'BT-98', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cbc:AllowanceChargeReasonCode', section: 'allowance', cardinality: '0..1', label: {fr: 'Code de motif de la remise au niveau du document', en: 'Document level allowance reason code'}},
  {bt: 'BT-95', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cac:TaxCategory/cbc:ID', section: 'allowance', cardinality: '1..1', label: {fr: 'Code de type de TVA de la remise', en: 'Document level allowance VAT category code'}},
  {bt: 'BT-96', xpath: 'cac:AllowanceCharge[ChargeIndicator=false]/cac:TaxCategory/cbc:Percent', section: 'allowance', cardinality: '0..1', label: {fr: 'Taux de TVA de la remise', en: 'Document level allowance VAT rate'}},
  {bt: 'BT-99', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cbc:Amount', section: 'allowance', cardinality: '0..n', label: {fr: 'Montant des charges au niveau du document', en: 'Document level charge amount'}},
  {bt: 'BT-100', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cbc:BaseAmount', section: 'allowance', cardinality: '0..1', label: {fr: 'Assiette des charges au niveau du document', en: 'Document level charge base amount'}},
  {bt: 'BT-101', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cbc:MultiplierFactorNumeric', section: 'allowance', cardinality: '0..1', label: {fr: 'Pourcentage de charges au niveau du document', en: 'Document level charge percentage'}},
  {bt: 'BT-104', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cbc:AllowanceChargeReason', section: 'allowance', cardinality: '0..1', label: {fr: 'Motif des charges au niveau du document', en: 'Document level charge reason'}},
  {bt: 'BT-105', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cbc:AllowanceChargeReasonCode', section: 'allowance', cardinality: '0..1', label: {fr: 'Code de motif des charges au niveau du document', en: 'Document level charge reason code'}},
  {bt: 'BT-102', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cac:TaxCategory/cbc:ID', section: 'allowance', cardinality: '1..1', label: {fr: 'Code de type de TVA des charges', en: 'Document level charge VAT category code'}},
  {bt: 'BT-103', xpath: 'cac:AllowanceCharge[ChargeIndicator=true]/cac:TaxCategory/cbc:Percent', section: 'allowance', cardinality: '0..1', label: {fr: 'Taux de TVA des charges', en: 'Document level charge VAT rate'}},

  // Tax
  {bt: 'BT-110', xpath: 'cac:TaxTotal/cbc:TaxAmount', section: 'tax', cardinality: '1..1', label: {fr: 'Montant total de TVA', en: 'Invoice total VAT amount'}},
  {bt: 'BT-116', xpath: 'cac:TaxTotal/cac:TaxSubtotal/cbc:TaxableAmount', section: 'tax', cardinality: '1..n', label: {fr: "Base d'imposition du type de TVA", en: 'VAT category taxable amount'}},
  {bt: 'BT-117', xpath: 'cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount', section: 'tax', cardinality: '1..n', label: {fr: 'Montant de la taxe pour le type de TVA', en: 'VAT category tax amount'}},
  {bt: 'BT-118', xpath: 'cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cbc:ID', section: 'tax', cardinality: '1..1', label: {fr: 'Code de type de TVA', en: 'VAT category code'}, desc: {fr: 'S=Standard, E=Exonéré, K=Intracommunautaire, G=Export, O=Non soumis, AE=Autoliquidation', en: 'S=Standard, E=Exempt, K=Intra-community, G=Export, O=Not subject, AE=Reverse charge'}},
  {bt: 'BT-119', xpath: 'cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cbc:Percent', section: 'tax', cardinality: '0..1', label: {fr: 'Taux de type de TVA', en: 'VAT category rate'}},
  {bt: 'BT-121', xpath: 'cac:TaxTotal/.../cac:TaxCategory/cbc:TaxExemptionReasonCode', section: 'tax', cardinality: '0..1', label: {fr: "Motif d'exonération de la TVA en code", en: 'VAT exemption reason code'}, desc: {fr: 'VATEX-EU-79-C, VATEX-EU-IC, VATEX-FR-FRANCHISE, etc.', en: 'VATEX-EU-79-C, VATEX-EU-IC, VATEX-FR-FRANCHISE, etc.'}},
  {bt: 'BT-120', xpath: 'cac:TaxTotal/.../cac:TaxCategory/cbc:TaxExemptionReason', section: 'tax', cardinality: '0..1', label: {fr: "Motif d'exonération de la TVA", en: 'VAT exemption reason text'}},

  // Totals
  {bt: 'BT-106', xpath: 'cac:LegalMonetaryTotal/cbc:LineExtensionAmount', section: 'totals', cardinality: '1..1', label: {fr: 'Somme du montant net des lignes de facture', en: 'Sum of invoice line net amount'}},
  {bt: 'BT-109', xpath: 'cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount', section: 'totals', cardinality: '1..1', label: {fr: 'Montant total de la facture hors TVA', en: 'Invoice total amount without VAT'}},
  {bt: 'BT-112', xpath: 'cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount', section: 'totals', cardinality: '1..1', label: {fr: 'Montant total de la facture avec TVA', en: 'Invoice total amount with VAT'}},
  {bt: 'BT-107', xpath: 'cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount', section: 'totals', cardinality: '0..1', label: {fr: 'Somme des remises au niveau du document', en: 'Sum of allowances on document level'}},
  {bt: 'BT-108', xpath: 'cac:LegalMonetaryTotal/cbc:ChargeTotalAmount', section: 'totals', cardinality: '0..1', label: {fr: 'Somme des charges au niveau du document', en: 'Sum of charges on document level'}},
  {bt: 'BT-113', xpath: 'cac:LegalMonetaryTotal/cbc:PrepaidAmount', section: 'totals', cardinality: '0..1', label: {fr: 'Montant payé', en: 'Paid amount'}},
  {bt: 'BT-114', xpath: 'cac:LegalMonetaryTotal/cbc:PayableRoundingAmount', section: 'totals', cardinality: '0..1', label: {fr: "Montant de l'arrondi", en: 'Rounding amount'}},
  {bt: 'BT-115', xpath: 'cac:LegalMonetaryTotal/cbc:PayableAmount', section: 'totals', cardinality: '1..1', label: {fr: 'Montant à payer', en: 'Amount due for payment'}},

  // Invoice Line
  {bt: 'BT-126', xpath: 'cac:InvoiceLine/cbc:ID', section: 'line', cardinality: '1..1', label: {fr: 'Identifiant de ligne de facture', en: 'Invoice line identifier'}},
  {bt: 'BT-127', xpath: 'cac:InvoiceLine/cbc:Note', section: 'line', cardinality: '0..1', label: {fr: 'Note de ligne de facture', en: 'Invoice line note'}, desc: {fr: 'Préfixe: #BLU# pour DEEE, etc.', en: 'Prefix: #BLU# for WEEE, etc.'}},
  {bt: 'BT-129', xpath: 'cac:InvoiceLine/cbc:InvoicedQuantity', section: 'line', cardinality: '1..1', label: {fr: 'Quantité facturée', en: 'Invoiced quantity'}, desc: {fr: 'unitCode: C62=Unité, HUR=Heure, KGM=Kg, MTR=Mètre, LTR=Litre', en: 'unitCode: C62=Unit, HUR=Hour, KGM=Kg, MTR=Metre, LTR=Litre'}},
  {bt: 'BT-131', xpath: 'cac:InvoiceLine/cbc:LineExtensionAmount', section: 'line', cardinality: '1..1', label: {fr: 'Montant net de ligne de facture', en: 'Invoice line net amount'}},
  {bt: 'BT-133', xpath: 'cac:InvoiceLine/cbc:AccountingCost', section: 'line', cardinality: '0..1', label: {fr: "Référence comptable de l'acheteur (ligne)", en: 'Invoice line buyer accounting reference'}},
  {bt: 'BT-134', xpath: 'cac:InvoiceLine/cac:InvoicePeriod/cbc:StartDate', section: 'line', cardinality: '0..1', label: {fr: "Date de début de période de facturation d'une ligne", en: 'Invoice line period start date'}},
  {bt: 'BT-135', xpath: 'cac:InvoiceLine/cac:InvoicePeriod/cbc:EndDate', section: 'line', cardinality: '0..1', label: {fr: "Date de fin de période de facturation d'une ligne", en: 'Invoice line period end date'}},
  {bt: 'BT-132', xpath: 'cac:InvoiceLine/cac:OrderLineReference/cbc:LineID', section: 'line', cardinality: '0..1', label: {fr: 'Identifiant de ligne de bon de commande référencée', en: 'Referenced purchase order line reference'}},
  {bt: 'BT-128', xpath: 'cac:InvoiceLine/cac:DocumentReference/cbc:ID', section: 'line', cardinality: '0..1', label: {fr: "Identifiant de l'objet à la ligne", en: 'Invoice line object identifier'}, desc: {fr: 'Avec DocumentTypeCode = 130', en: 'With DocumentTypeCode = 130'}},
  {bt: 'BT-136', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=false]/cbc:Amount', section: 'line', cardinality: '0..n', label: {fr: 'Montant de la remise de ligne', en: 'Invoice line allowance amount'}},
  {bt: 'BT-137', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=false]/cbc:BaseAmount', section: 'line', cardinality: '0..1', label: {fr: 'Assiette de la remise de ligne', en: 'Invoice line allowance base amount'}},
  {bt: 'BT-138', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=false]/cbc:MultiplierFactorNumeric', section: 'line', cardinality: '0..1', label: {fr: 'Pourcentage de remise de ligne', en: 'Invoice line allowance percentage'}},
  {bt: 'BT-139', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=false]/cbc:AllowanceChargeReason', section: 'line', cardinality: '0..1', label: {fr: 'Motif de la remise de ligne', en: 'Invoice line allowance reason'}},
  {bt: 'BT-140', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=false]/cbc:AllowanceChargeReasonCode', section: 'line', cardinality: '0..1', label: {fr: 'Code de motif de la remise de ligne', en: 'Invoice line allowance reason code'}},
  {bt: 'BT-141', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=true]/cbc:Amount', section: 'line', cardinality: '0..n', label: {fr: 'Montant des charges de ligne', en: 'Invoice line charge amount'}},
  {bt: 'BT-144', xpath: 'cac:InvoiceLine/cac:AllowanceCharge[ChargeIndicator=true]/cbc:AllowanceChargeReason', section: 'line', cardinality: '0..1', label: {fr: 'Motif des charges de ligne', en: 'Invoice line charge reason'}},
  {bt: 'BT-154', xpath: 'cac:InvoiceLine/cac:Item/cbc:Description', section: 'line', cardinality: '0..1', label: {fr: "Description de l'article", en: 'Item description'}},
  {bt: 'BT-153', xpath: 'cac:InvoiceLine/cac:Item/cbc:Name', section: 'line', cardinality: '1..1', label: {fr: "Nom de l'article", en: 'Item name'}},
  {bt: 'BT-156', xpath: 'cac:InvoiceLine/cac:Item/cac:BuyersItemIdentification/cbc:ID', section: 'line', cardinality: '0..1', label: {fr: "Identifiant de l'acheteur de l'article", en: "Buyer's item identification"}},
  {bt: 'BT-155', xpath: 'cac:InvoiceLine/cac:Item/cac:SellersItemIdentification/cbc:ID', section: 'line', cardinality: '0..1', label: {fr: "Identifiant du vendeur de l'article", en: "Seller's item identification"}},
  {bt: 'BT-157', xpath: 'cac:InvoiceLine/cac:Item/cac:StandardItemIdentification/cbc:ID', section: 'line', cardinality: '0..1', label: {fr: "Identifiant standard de l'article", en: 'Item standard identifier'}, desc: {fr: 'schemeID=0160 pour GTIN/EAN', en: 'schemeID=0160 for GTIN/EAN'}},
  {bt: 'BT-159', xpath: 'cac:InvoiceLine/cac:Item/cac:OriginCountry/cbc:IdentificationCode', section: 'line', cardinality: '0..1', label: {fr: "Pays d'origine de l'article", en: 'Item country of origin'}},
  {bt: 'BT-158', xpath: 'cac:InvoiceLine/cac:Item/cac:CommodityClassification/cbc:ItemClassificationCode', section: 'line', cardinality: '0..n', label: {fr: "Code de classification de l'article", en: 'Item classification identifier'}},
  {bt: 'BT-151', xpath: 'cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory/cbc:ID', section: 'line', cardinality: '1..1', label: {fr: "Code de type de TVA de l'article facturé", en: 'Invoiced item VAT category code'}},
  {bt: 'BT-152', xpath: 'cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory/cbc:Percent', section: 'line', cardinality: '0..1', label: {fr: "Taux de TVA de l'article facturé", en: 'Invoiced item VAT rate'}},
  {bt: 'BT-160', xpath: 'cac:InvoiceLine/cac:Item/cac:AdditionalItemProperty/cbc:Name', section: 'line', cardinality: '0..n', label: {fr: "Nom d'attribut d'article", en: 'Item attribute name'}},
  {bt: 'BT-161', xpath: 'cac:InvoiceLine/cac:Item/cac:AdditionalItemProperty/cbc:Value', section: 'line', cardinality: '0..n', label: {fr: "Valeur d'attribut d'article", en: 'Item attribute value'}},
  {bt: 'BT-146', xpath: 'cac:InvoiceLine/cac:Price/cbc:PriceAmount', section: 'line', cardinality: '1..1', label: {fr: "Prix net de l'article", en: 'Item net price'}},
  {bt: 'BT-149', xpath: 'cac:InvoiceLine/cac:Price/cbc:BaseQuantity', section: 'line', cardinality: '0..1', label: {fr: "Quantité de base du prix de l'article", en: 'Item price base quantity'}},
  {bt: 'BT-147', xpath: 'cac:InvoiceLine/cac:Price/cac:AllowanceCharge/cbc:Amount', section: 'line', cardinality: '0..1', label: {fr: "Rabais sur le prix de l'article", en: 'Item price discount'}},
  {bt: 'BT-148', xpath: 'cac:InvoiceLine/cac:Price/cac:AllowanceCharge/cbc:BaseAmount', section: 'line', cardinality: '0..1', label: {fr: "Prix brut de l'article", en: 'Item gross price'}},
];

export type SectionFilter = UBLSection | 'all';

export function matchesUBL(f: UBLField, section: SectionFilter, search: string): boolean {
  if (section !== 'all' && f.section !== section) return false;
  if (search) {
    const q = search.toLowerCase();
    return (
      f.bt.toLowerCase().includes(q) ||
      f.xpath.toLowerCase().includes(q) ||
      f.label.fr.toLowerCase().includes(q) ||
      f.label.en.toLowerCase().includes(q) ||
      (f.desc?.fr.toLowerCase().includes(q) ?? false) ||
      (f.desc?.en.toLowerCase().includes(q) ?? false) ||
      (f.example?.toLowerCase().includes(q) ?? false)
    );
  }
  return true;
}
