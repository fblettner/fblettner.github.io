// Reason codes used by the French e-invoicing reform (refusal, rejection, irregularity).
// Mirror of nomaubl/src/web-react/src/services/reasonData.ts (REASONS) —
// keep both in sync when the regulation evolves.

export interface BilStr {
  en: string;
  fr: string;
}

export type ReasonCategory = 'refusal' | 'rejection' | 'irregularity';

export interface ReasonCode {
  code: string;
  category: ReasonCategory;
  label: BilStr;
  desc?: BilStr;
  critical?: boolean;
  statuses: number[];
}

export const STATUS_META: Record<number, {fr: string; en: string; color: string; bg: string; border: string}> = {
  200: {fr: 'Déposée',                en: 'Deposited',           color: '#60a5fa', bg: 'rgba(96,165,250,0.10)',  border: 'rgba(96,165,250,0.30)'},
  206: {fr: 'Approuvée partiellement', en: 'Partially Approved', color: '#f59e0b', bg: 'rgba(245,158,11,0.10)',  border: 'rgba(245,158,11,0.30)'},
  207: {fr: 'En litige',              en: 'Disputed',            color: '#f59e0b', bg: 'rgba(245,158,11,0.10)',  border: 'rgba(245,158,11,0.30)'},
  208: {fr: 'Suspendue',              en: 'Suspended',           color: '#f59e0b', bg: 'rgba(245,158,11,0.10)',  border: 'rgba(245,158,11,0.30)'},
  210: {fr: 'Refusée',                en: 'Refused',             color: '#f87171', bg: 'rgba(248,113,113,0.10)', border: 'rgba(248,113,113,0.30)'},
  213: {fr: 'Rejetée',                en: 'Rejected',            color: '#fb923c', bg: 'rgba(251,146,60,0.10)',  border: 'rgba(251,146,60,0.30)'},
  221: {fr: 'Erreur de routage',      en: 'Routing Error',       color: '#fb923c', bg: 'rgba(251,146,60,0.10)',  border: 'rgba(251,146,60,0.30)'},
};

export const CAT_CONFIG: Record<ReasonCategory, {bg: string; text: string; border: string; label: BilStr}> = {
  refusal:      {bg: 'rgba(248,113,113,0.12)', text: '#f87171', border: 'rgba(248,113,113,0.4)', label: {en: 'Refusal B2B',  fr: 'Refus B2B'}},
  rejection:    {bg: 'rgba(251,146,60,0.12)',  text: '#fb923c', border: 'rgba(251,146,60,0.4)',  label: {en: 'PA Rejection',  fr: 'Rejet PA'}},
  irregularity: {bg: 'rgba(74,158,255,0.12)',  text: '#4a9eff', border: 'rgba(74,158,255,0.4)',  label: {en: 'Irregularity', fr: 'Irrégularité'}},
};

export const REASONS: ReasonCode[] = [
  {code: 'NON_TRANSMISE',    category: 'refusal',      statuses: [200],                label: {fr: 'Destinataire non connecté', en: 'Recipient not connected'}, desc: {fr: "Ce motif est utilisé UNIQUEMENT avec le statut « DÉPOSÉ » pour signifier que la facture n'a pas pu être transmise parce que le destinataire (ACHETEUR), bien que présent dans l'Annuaire PPF, n'a aucune adresse de réception de facture active.", en: "Used EXCLUSIVELY with the 'DEPOSITED' status to indicate that the invoice could not be transmitted because the recipient (BUYER), although present in the PPF Directory, has no active invoice reception address."}},
  {code: 'JUSTIF_ABS',       category: 'refusal',      statuses: [208],                label: {fr: 'Justificatif absent ou insuffisant', en: 'Supporting document absent or insufficient'}, desc: {fr: "Ce motif doit être utilisé s'il manque des pièces jointes pour le traitement de la facture (statut « Suspendue »).", en: "Must be used when attachments are missing for invoice processing (status 'Suspended')."}},
  {code: 'ROUTAGE_ERR',      category: 'refusal',      statuses: [221],                label: {fr: 'Erreur de routage', en: 'Routing error'}, desc: {fr: "Ce motif doit être utilisé dans le cas où les informations servant au routage de la facture sont devenues obsolètes.", en: 'Used when routing information has become obsolete (directory update lag, issuing platform error).'}},
  {code: 'AUTRE',            category: 'refusal',      statuses: [207, 210],           label: {fr: 'Autre', en: 'Other'}, desc: {fr: 'Ce motif nécessite une explication en Note de CDV.', en: 'This reason requires an explanation in the CDV Note.'}},
  {code: 'COORD_BANC_ERR',   category: 'refusal',      statuses: [207, 210],           label: {fr: 'Erreur de coordonnées bancaires', en: 'Bank details error'}, desc: {fr: 'Les références bancaires sur la facture ne correspondent pas à ce qui est paramétré chez le Payeur / Acheteur.', en: 'The bank references on the invoice do not match those configured with the Payer / Buyer.'}},
  {code: 'TX_TVA_ERR',       category: 'refusal',      statuses: [207, 210],           label: {fr: 'Taux de TVA erroné', en: 'Incorrect VAT rate'}, desc: {fr: "Un taux de TVA utilisé n'est pas celui qui aurait dû être appliqué.", en: 'A VAT rate used is not the one that should have been applied.'}},
  {code: 'MONTANTTOTAL_ERR', category: 'refusal',      statuses: [207, 210, 213],      label: {fr: 'Montant Total Erroné', en: 'Incorrect total amount'}, desc: {fr: "Un des montants totaux de la facture est erroné, par exemple le Net à payer.", en: 'One of the total amounts on the invoice is incorrect, for example the Net payable.'}},
  {code: 'CALCUL_ERR',       category: 'refusal',      statuses: [207, 210, 213],      label: {fr: 'Erreur de calcul de la facture', en: 'Invoice calculation error'}, desc: {fr: 'Détecté au schematron ou après (pour les lignes, ou arrondi non accepté).', en: 'Detected by schematron or afterwards (for line items, or unacceptable rounding).'}},
  {code: 'NON_CONFORME',     category: 'refusal',      statuses: [207, 210],           label: {fr: 'Mention légale manquante', en: 'Missing legal mention'}, desc: {fr: 'Toute mention légale non contrôlée par le schéma.', en: 'Any legal mention not controlled by the schema.'}},
  {code: 'DOUBLON',          category: 'refusal',      statuses: [207, 210, 213],      label: {fr: 'Facture en doublon (déjà émise / reçue)', en: 'Duplicate invoice (already issued / received)'}, desc: {fr: 'Facture en doublon : même numéro, même fournisseur et même année de date de facture.', en: 'Duplicate invoice: same number, same supplier, and same invoice date year.'}},
  {code: 'DEST_INC',         category: 'refusal',      statuses: [213],                label: {fr: 'Destinataire inconnu', en: 'Unknown recipient'}, desc: {fr: "À l'émission, le destinataire est inconnu — il n'existe pas dans l'annuaire.", en: 'At issuance, the recipient is unknown — they do not exist in the directory.'}},
  {code: 'DEST_ERR',         category: 'refusal',      statuses: [207, 210],           label: {fr: 'Erreur de destinataire', en: 'Recipient error'}, desc: {fr: "L'entité juridique destinataire de la facture n'est pas la bonne (n° SIREN du Destinataire).", en: 'The legal entity receiving the invoice is not the correct one (recipient SIREN number).'}},
  {code: 'TRANSAC_INC',      category: 'refusal',      statuses: [207, 210],           label: {fr: 'Transaction inconnue', en: 'Unknown transaction'}, desc: {fr: "La facture ne correspond pas à une livraison effectuée ou une prestation de service livrée.", en: 'The invoice does not correspond to an actual delivery performed or service provided.'}},
  {code: 'EMMET_INC',        category: 'refusal',      statuses: [207, 210],           label: {fr: 'Emetteur inconnu', en: 'Unknown issuer'}, desc: {fr: "L'émetteur de la facture est inconnu du Destinataire (filtre anti-spam).", en: 'The invoice issuer is unknown to the Recipient (anti-spam filter).'}},
  {code: 'CONTRAT_TERM',     category: 'refusal',      statuses: [207, 210],           label: {fr: 'Contrat terminé', en: 'Contract terminated'}, desc: {fr: 'Contrat terminé — plus de facturation possible.', en: 'Contract terminated — no further invoicing possible.'}},
  {code: 'DOUBLE_FACT',      category: 'refusal',      statuses: [207, 210],           label: {fr: 'Double facturation', en: 'Double billing'}, desc: {fr: 'Prestation ou livraison déjà facturée sur une autre facture.', en: 'Service or delivery already invoiced on another invoice.'}},
  {code: 'CMD_ERR',          category: 'refusal',      statuses: [206, 207, 208, 210], label: {fr: 'N° de commande incorrect ou manquant', en: 'Purchase order number incorrect or missing'}, desc: {fr: "N° de commande erroné, inexistant ou déjà facturé.", en: 'Purchase order number is incorrect, non-existent or already invoiced.'}},
  {code: 'ADR_ERR',          category: 'refusal',      statuses: [207, 210, 213],      label: {fr: 'Adresse de facturation électronique erronée', en: 'Electronic billing address incorrect'}, desc: {fr: "L'adresse de facturation électronique du destinataire (BT-49 ou BT-34) est absente ou erronée.", en: "The recipient's electronic billing address (BT-49 or BT-34) is absent or incorrect."}},
  {code: 'SIRET_ERR',        category: 'refusal',      statuses: [206, 207, 210],      label: {fr: 'SIRET erroné ou absent', en: 'SIRET incorrect or missing'}, desc: {fr: 'Le SIRET du destinataire est erroné ou absent si exigé.', en: "The recipient's SIRET is incorrect or absent if required."}},
  {code: 'CODE_ROUTAGE_ERR', category: 'refusal',      statuses: [206, 207, 210],      label: {fr: 'Code de routage absent ou erroné', en: 'Routing code absent or incorrect'}, desc: {fr: 'Le CODE_ROUTAGE du destinataire est erroné ou absent si exigé.', en: "The recipient's routing code is incorrect or absent if required."}},
  {code: 'REF_CT_ABSENT',    category: 'refusal',      statuses: [206, 207, 208, 210], critical: true, label: {fr: 'Référence contractuelle nécessaire pour le traitement de la facture manquante', en: 'Contractual reference required for invoice processing is missing'}, desc: {fr: 'Référence exigée contractuellement absente.', en: 'Contractually required reference is absent.'}},
  {code: 'REF_ERR',          category: 'refusal',      statuses: [206, 207, 210],      label: {fr: 'Référence incorrecte', en: 'Incorrect reference'}, desc: {fr: "À préciser dans les autres données du CDV de quelle référence il s'agit.", en: 'The specific reference in error must be identified in the other CDV data.'}},
  {code: 'PU_ERR',           category: 'refusal',      statuses: [207, 210],           label: {fr: 'Prix unitaires incorrects', en: 'Unit prices incorrect'}, desc: {fr: "Un prix unitaire n'est pas celui attendu.", en: 'A unit price is not the expected one.'}},
  {code: 'REM_ERR',          category: 'refusal',      statuses: [207, 210],           label: {fr: 'Remise erronée', en: 'Incorrect discount'}, desc: {fr: "Une remise est absente ou n'est pas celle attendue.", en: 'A discount is absent or not the expected one.'}},
  {code: 'QTE_ERR',          category: 'refusal',      statuses: [207, 210],           label: {fr: 'Quantité facturée incorrecte', en: 'Invoiced quantity incorrect'}, desc: {fr: "Une quantité facturée n'est pas celle attendue.", en: 'An invoiced quantity is not the expected one.'}},
  {code: 'ART_ERR',          category: 'refusal',      statuses: [207, 210],           label: {fr: 'Article facturé incorrect', en: 'Invoiced item incorrect'}, desc: {fr: "Un article facturé n'est pas le bon ou est erroné.", en: 'An invoiced item is not the correct one or is erroneous.'}},
  {code: 'MODPAI_ERR',       category: 'refusal',      statuses: [207, 210],           label: {fr: 'Modalités de paiement incorrectes', en: 'Payment terms incorrect'}, desc: {fr: "Les modalités de paiement ne sont pas celles escomptées.", en: 'The payment terms are not as expected.'}},
  {code: 'QUALITE_ERR',      category: 'refusal',      statuses: [207, 210],           label: {fr: "Qualité d'article livré incorrecte", en: 'Quality of delivered item incorrect'}, desc: {fr: 'Un des articles livrés est défectueux.', en: 'One of the delivered items is defective.'}},
  {code: 'LIVR_INCOMP',      category: 'refusal',      statuses: [207, 210],           label: {fr: 'Problème de livraison', en: 'Delivery issue'}, desc: {fr: 'Livraison incomplète ou non conforme.', en: 'Incomplete or non-compliant delivery.'}},
  {code: 'REJ_SEMAN',        category: 'rejection',    statuses: [213],                label: {fr: 'Rejet pour erreur sémantique', en: 'Rejected — semantic error'}, desc: {fr: 'Analyse du format sémantique du fichier de flux.', en: 'Analysis of the semantic format of the flow file.'}},
  {code: 'REJ_UNI',          category: 'rejection',    statuses: [213],                label: {fr: 'Rejet sur contrôle unicité', en: 'Rejected — uniqueness check failed'}, desc: {fr: "Contrôle d'unicité de la facture.", en: 'Uniqueness check of the invoice.'}},
  {code: 'REJ_COH',          category: 'rejection',    statuses: [213],                label: {fr: 'Rejet sur contrôle cohérence de données', en: 'Rejected — data consistency check failed'}, desc: {fr: 'Contrôle de cohérence des données : balises et référentiels.', en: 'Data consistency check: tags and reference data.'}},
  {code: 'REJ_ADR',          category: 'rejection',    statuses: [213],                label: {fr: "Rejet sur contrôle d'adressage", en: 'Rejected — addressing check failed'}, desc: {fr: "Contrôle d'adressage de la facture.", en: 'Addressing check of the invoice.'}},
  {code: 'REJ_CONT_B2G',     category: 'rejection',    statuses: [213],                label: {fr: 'Rejet sur contrôles métier B2G', en: 'Rejected — B2G business rules check failed'}, desc: {fr: "Contrôles B2G (vérification du n° d'engagement, etc.).", en: 'B2G business rules checks (commitment number verification, etc.).'}},
  {code: 'REJ_REF_PJ',       category: 'rejection',    statuses: [213],                label: {fr: 'Rejet sur référence de PJ', en: 'Rejected — attachment reference error'}, desc: {fr: 'Contrôle de la référence de pièce jointe.', en: 'Attachment reference check.'}},
  {code: 'REJ_ASS_PJ',       category: 'rejection',    statuses: [213],                label: {fr: "Rejet sur erreur d'association de la PJ", en: 'Rejected — attachment association error'}, desc: {fr: "Erreur lors de l'association d'une pièce jointe à la facture.", en: 'Error when associating an attachment to the invoice.'}},
  {code: 'IRR_VIDE_F',       category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle de non vide sur les fichiers du flux', en: 'Flow files must not be empty'}, desc: {fr: 'Vérifie que les fichiers transmis dans le flux ne sont pas vides.', en: 'Checks that the files transmitted in the flow are not empty.'}},
  {code: 'IRR_TYPE_F',       category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle de type et extension des fichiers du flux', en: 'Flow file type and extension check'}, desc: {fr: "Vérifie le type MIME et l'extension des fichiers du flux.", en: 'Checks the MIME type and extension of the flow files.'}},
  {code: 'IRR_SYNTAX',       category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle syntaxique des fichiers du flux', en: 'Syntactic check of flow files'}, desc: {fr: 'Vérifie la syntaxe (bien-formé XML, structure JSON, etc.) des fichiers du flux.', en: 'Checks the syntax (well-formed XML, JSON structure, etc.) of the flow files.'}},
  {code: 'IRR_TAILLE_PJ',    category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle de taille des PJ de chaque fichier du flux', en: 'Attachment size check per flow file'}, desc: {fr: 'Vérifie que la taille de chaque pièce jointe est dans les limites autorisées.', en: 'Checks that each attachment size is within the allowed limits.'}},
  {code: 'IRR_NOM_PJ',       category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle du nom des PJ (absence de caractères interdits)', en: 'Attachment name check — forbidden characters'}, desc: {fr: 'Vérifie que le nom des pièces jointes ne contient pas de caractères interdits.', en: 'Checks that attachment names do not contain forbidden characters.'}},
  {code: 'IRR_VID_PJ',       category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle de PJ non vide de chaque fichier du flux', en: 'Attachment must not be empty'}, desc: {fr: 'Vérifie que les pièces jointes transmises ne sont pas vides.', en: 'Checks that the transmitted attachments are not empty.'}},
  {code: 'IRR_EXT_DOC',      category: 'irregularity', statuses: [213],                label: {fr: "Contrôle de l'extension des PJ de chaque fichier du flux", en: 'Attachment extension check'}, desc: {fr: "Vérifie que l'extension des pièces jointes est dans la liste des formats autorisés.", en: 'Checks that the attachment extension is in the list of allowed formats.'}},
  {code: 'IRR_TAILLE_F',     category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle de taille max des fichiers contenus dans le flux', en: 'Max size check of files in the flow'}, desc: {fr: "Vérifie que la taille maximale des fichiers du flux n'est pas dépassée.", en: 'Checks that the maximum size of files in the flow is not exceeded.'}},
  {code: 'IRR_ANTIVIRUS',    category: 'irregularity', statuses: [213],                label: {fr: 'Contrôle anti-virus', en: 'Anti-virus check'}, desc: {fr: 'Le flux ne respecte pas les conditions de sécurité (détection de contenu malveillant).', en: 'The flow does not meet security requirements (malicious content detected).'}},
];

export type CategoryFilter = ReasonCategory | 'all';

export function matchesReason(r: ReasonCode, filter: CategoryFilter, search: string): boolean {
  if (filter !== 'all' && r.category !== filter) return false;
  if (search) {
    const q = search.toLowerCase();
    return (
      r.code.toLowerCase().includes(q) ||
      r.label.fr.toLowerCase().includes(q) ||
      r.label.en.toLowerCase().includes(q) ||
      (r.desc?.fr.toLowerCase().includes(q) ?? false) ||
      (r.desc?.en.toLowerCase().includes(q) ?? false)
    );
  }
  return true;
}
