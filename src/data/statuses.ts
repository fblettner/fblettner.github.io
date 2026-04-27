// Invoice lifecycle statuses for the French e-invoicing reform.
// Mirror of nomaubl/src/web-react/src/services/statusData.ts (STATUSES) —
// keep both in sync when the regulation evolves.

export interface BilStr {
  en: string;
  fr: string;
}

export interface ActionItem {
  actor: string | BilStr;
  en: string;
  fr: string;
}

export interface Status {
  code: number;
  name: BilStr;
  phase: 'transmission' | 'processing' | 'both';
  mandatory?: boolean;
  color: 'blue' | 'teal' | 'green' | 'amber' | 'red' | 'coral' | 'purple' | 'gray';
  factoring?: boolean;
  special?: boolean;
  who: BilStr;
  desc: BilStr;
  when?: { en: string[]; fr: string[] };
  actions: ActionItem[];
  note?: BilStr;
}

export type StatusFilter = 'all' | 'transmission' | 'processing' | 'mandatory' | 'factoring' | 'special';

export function matchesFilter(s: Status, filter: StatusFilter): boolean {
  if (filter === 'all') return true;
  if (filter === 'transmission') return s.phase === 'transmission';
  if (filter === 'processing') return s.phase === 'processing' || s.phase === 'both';
  if (filter === 'mandatory') return !!s.mandatory;
  if (filter === 'factoring') return !!s.factoring;
  if (filter === 'special') return !!s.special || s.code >= 500;
  return true;
}

export const COLOR_MAP: Record<Status['color'], { bg: string; text: string; border: string }> = {
  blue:   { bg: 'rgba(74,158,255,0.12)',  text: '#4a9eff', border: 'rgba(74,158,255,0.4)' },
  teal:   { bg: 'rgba(45,212,191,0.12)',  text: '#2dd4bf', border: 'rgba(45,212,191,0.4)' },
  green:  { bg: 'rgba(34,197,94,0.12)',   text: '#22c55e', border: 'rgba(34,197,94,0.4)' },
  amber:  { bg: 'rgba(251,146,60,0.12)',  text: '#fb923c', border: 'rgba(251,146,60,0.4)' },
  red:    { bg: 'rgba(248,113,113,0.12)', text: '#f87171', border: 'rgba(248,113,113,0.4)' },
  coral:  { bg: 'rgba(251,146,60,0.12)',  text: '#fb923c', border: 'rgba(251,146,60,0.4)' },
  purple: { bg: 'rgba(167,139,250,0.12)', text: '#a78bfa', border: 'rgba(167,139,250,0.4)' },
  gray:   { bg: 'rgba(148,163,184,0.10)', text: '#94a3b8', border: 'rgba(148,163,184,0.3)' },
};

export const PHASE_COLOR: Record<Status['phase'], { bg: string; text: string }> = {
  transmission: { bg: 'rgba(74,158,255,0.12)',  text: '#4a9eff' },
  processing:   { bg: 'rgba(34,197,94,0.12)',   text: '#22c55e' },
  both:         { bg: 'rgba(167,139,250,0.12)', text: '#a78bfa' },
};

export function getActorColor(actor: string | BilStr): string {
  const key = typeof actor === 'object' ? actor.en : actor;
  if (key.startsWith('PA')) return '#4a9eff';
  if (key.includes('SELLER') || key.includes('VENDEUR')) return '#22c55e';
  if (key.includes('BUYER') || key.includes('ACHETEUR')) return '#fb923c';
  if (key.includes('Agent') || key.includes('PA-TR')) return '#a78bfa';
  return '#94a3b8';
}

export const STATUSES: Status[] = [
  {
    code: 200,
    name: { en: 'Submitted', fr: 'Déposée' },
    phase: 'transmission',
    mandatory: true,
    color: 'blue',
    who: { en: 'PA-E (issuing platform)', fr: "PA-E (plateforme d'émission)" },
    desc: {
      en: 'Invoice passed all PA-E compliance checks. The PA-E certifies it is controlled and compliant. Transmitted to the PPF Data Concentrator with flow 1 data.',
      fr: "La facture a passé tous les contrôles de la PA-E. La PA-E atteste qu'elle est contrôlée et conforme. Transmise au CdD PPF avec les données de flux 1.",
    },
    when: {
      en: ['Invoice passes format, duplicate, and routing checks on the PA-E side'],
      fr: ['La facture passe les contrôles de format, doublon et routage côté PA-E'],
    },
    actions: [
      { actor: 'PA-E', en: "Transmit flow 1 and 'Submitted' status to CdD PPF. Make status available to SELLER.", fr: "Transmettre le flux 1 et le statut 'Déposée' au CdD PPF. Mettre le statut à disposition du VENDEUR." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'No action required — await next status (Received by platform or Rejected).', fr: "Aucune action requise — attendre le prochain statut (Reçue ou Rejetée)." },
    ],
    note: {
      en: 'If no active PA-R exists for the buyer: set reason NOT_TRANSMITTED — treat like a paper invoice. Resend once buyer is equipped.',
      fr: "Si aucune PA-R active n'existe pour l'acheteur : raison NOT_TRANSMITTED — traiter comme une facture papier. Renvoyer une fois l'acheteur équipé.",
    },
  },
  {
    code: 201,
    name: { en: 'Sent by platform', fr: 'Émise par la plateforme' },
    phase: 'transmission',
    color: 'blue',
    who: { en: 'PA-E', fr: 'PA-E' },
    desc: {
      en: "The PA-E confirms it has successfully transmitted the invoice to the buyer's receiving platform (PA-R).",
      fr: 'La PA-E confirme avoir transmis la facture à la plateforme de réception (PA-R) du destinataire.',
    },
    when: {
      en: ['PA-E has forwarded the invoice to PA-R'],
      fr: ['La PA-E a transmis la facture à la PA-R'],
    },
    actions: [
      { actor: 'PA-E', en: "Set status 'Sent by platform' and transmit to CdD PPF.", fr: "Positionner le statut 'Émise par la plateforme' et transmettre au CdD PPF." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'No action — await receipt confirmation.', fr: 'Aucune action — attendre la confirmation de réception.' },
    ],
  },
  {
    code: 202,
    name: { en: 'Received by platform', fr: 'Reçue par la plateforme' },
    phase: 'transmission',
    color: 'blue',
    who: { en: 'PA-R (receiving platform)', fr: 'PA-R (plateforme de réception)' },
    desc: {
      en: 'The PA-R has received the invoice from the PA-E and completed its regulatory checks successfully.',
      fr: 'La PA-R a reçu la facture de la PA-E et effectué ses contrôles réglementaires avec succès.',
    },
    when: {
      en: ['PA-R receives invoice from PA-E and all checks pass'],
      fr: ['La PA-R reçoit la facture de la PA-E et tous les contrôles sont OK'],
    },
    actions: [
      { actor: 'PA-R', en: "Set status 'Received by platform'. Proceed to make invoice available to buyer.", fr: "Positionner le statut 'Reçue par la plateforme'. Procéder à la mise à disposition pour l'acheteur." },
    ],
  },
  {
    code: 203,
    name: { en: 'Made Available', fr: 'Mise à disposition' },
    phase: 'transmission',
    color: 'blue',
    who: { en: 'PA-R', fr: 'PA-R' },
    desc: {
      en: 'The PA-R confirms the invoice has been made available to the buyer for processing. End of the transmission phase.',
      fr: "La PA-R confirme avoir mis la facture à disposition de l'acheteur pour traitement. Fin de la phase de transmission.",
    },
    when: {
      en: ['PA-R has made invoice accessible to BUYER'],
      fr: ["La PA-R a rendu la facture accessible à l'ACHETEUR"],
    },
    actions: [
      { actor: 'PA-R', en: "Set 'Made Available' and transmit to PA-E (for SELLER awareness).", fr: "Positionner 'Mise à disposition' et transmettre à la PA-E (information du VENDEUR)." },
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: 'Process the invoice — set processing statuses (In Hand, Approved, Disputed, etc.).', fr: 'Traiter la facture — positionner des statuts de traitement (Prise en charge, Approuvée, En litige, etc.).' },
    ],
  },
  {
    code: 204,
    name: { en: 'In Hand', fr: 'Prise en charge' },
    phase: 'processing',
    color: 'teal',
    who: { en: 'BUYER', fr: 'ACHETEUR' },
    desc: {
      en: 'The buyer acknowledges receipt and confirms the invoice is being processed. First voluntary processing status from the buyer.',
      fr: "L'acheteur accuse réception et confirme que la facture est en cours de traitement. Premier statut de traitement volontaire de l'acheteur.",
    },
    when: {
      en: ['BUYER has taken the invoice into their processing workflow'],
      fr: ["L'ACHETEUR a pris en charge la facture dans son workflow de traitement"],
    },
    actions: [
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Set 'In Hand' status via PA-R to notify seller that processing has started.", fr: "Positionner le statut 'Prise en charge' via la PA-R pour notifier le vendeur." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'No action — await processing outcome (Approved, Disputed, etc.).', fr: 'Aucune action — attendre le résultat du traitement (Approuvée, En litige, etc.).' },
    ],
  },
  {
    code: 205,
    name: { en: 'Approved', fr: 'Approuvée' },
    phase: 'processing',
    color: 'green',
    who: { en: 'BUYER', fr: 'ACHETEUR' },
    desc: {
      en: 'The buyer fully accepts the invoice as correct and ready for payment.',
      fr: "L'acheteur accepte intégralement la facture comme correcte et prête au paiement.",
    },
    when: {
      en: ['BUYER agrees with all invoice content and amount'],
      fr: ["L'ACHETEUR est d'accord avec l'ensemble du contenu et du montant de la facture"],
    },
    actions: [
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Set 'Approved' status via PA-R. Process payment per payment terms.", fr: "Positionner le statut 'Approuvée' via la PA-R. Procéder au paiement selon les conditions." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Await payment. Send 'Payment Received' (212) once funds arrive.", fr: "Attendre le paiement. Envoyer 'Encaissée' (212) à réception des fonds." },
    ],
    note: {
      en: "Code 214 is also used for 'Approved' when set by a third-party agent acting on behalf of the BUYER.",
      fr: "Le code 214 est utilisé pour 'Approuvée' lorsque le statut est positionné par un agent tiers agissant pour le compte de l'ACHETEUR.",
    },
  },
  {
    code: 206,
    name: { en: 'Partially Approved', fr: 'Approuvée partiellement' },
    phase: 'processing',
    color: 'amber',
    who: { en: 'BUYER', fr: 'ACHETEUR' },
    desc: {
      en: 'The buyer accepts the invoice for a partial amount only. The remaining portion requires correction.',
      fr: "L'acheteur accepte la facture pour un montant partiel uniquement. La partie restante nécessite une correction.",
    },
    when: {
      en: ['BUYER agrees with part of the invoice but disputes the rest'],
      fr: ["L'ACHETEUR est d'accord avec une partie de la facture mais conteste le reste"],
    },
    actions: [
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Set 'Partially Approved' with agreed amount. Pay the approved portion.", fr: "Positionner 'Approuvée partiellement' avec le montant accepté. Payer la partie approuvée." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'Issue a credit note (avoir) for the disputed amount, OR a corrected invoice replacing the original.', fr: "Émettre un avoir pour le montant contesté, OU une facture rectificative annulant et remplaçant l'originale." },
    ],
  },
  {
    code: 207,
    name: { en: 'Disputed', fr: 'En litige' },
    phase: 'processing',
    color: 'amber',
    who: { en: 'BUYER', fr: 'ACHETEUR' },
    desc: {
      en: "The buyer disputes the invoice — for all commercial disagreements (price, quantity, VAT, references). This is the correct status for disputes, NOT 'Refused' (210).",
      fr: "L'acheteur conteste la facture — pour tous les désaccords commerciaux (prix, quantité, TVA, références). C'est le statut correct pour les litiges, PAS 'Refusée' (210).",
    },
    when: {
      en: ['BUYER disagrees with invoice content — amount, quantity, price, VAT, references, etc.'],
      fr: ["L'ACHETEUR conteste le contenu de la facture — montant, quantité, prix, TVA, références, etc."],
    },
    actions: [
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Set 'Disputed' status with reason via PA-R.", fr: "Positionner le statut 'En litige' avec motif via la PA-R." },
      { actor: { en: 'SELLER — Option A', fr: 'VENDEUR — Option A' }, en: 'Issue a credit note (avoir, BT-3 code 381 or 396) partially or fully cancelling the original invoice.', fr: 'Émettre un avoir (BT-3 code 381 ou 396) annulant partiellement ou totalement la facture originale.' },
      { actor: { en: 'SELLER — Option B', fr: 'VENDEUR — Option B' }, en: "Issue a corrected invoice (BT-3 code 384) cancelling and replacing the original. BUYER then sets original to 'Cancelled' (220).", fr: "Émettre une facture rectificative (BT-3 code 384) annulant et remplaçant l'originale. L'ACHETEUR positionne ensuite l'originale à 'Annulée' (220)." },
    ],
    note: {
      en: "⚠ Never use 'Refused' (210) for commercial disputes. Disputed → credit note or corrected invoice is the correct path.",
      fr: "⚠ Ne jamais utiliser 'Refusée' (210) pour des litiges commerciaux. En litige → avoir ou facture rectificative est le bon chemin.",
    },
  },
  {
    code: 208,
    name: { en: 'Suspended', fr: 'Suspendue' },
    phase: 'processing',
    color: 'amber',
    who: { en: 'BUYER', fr: 'ACHETEUR' },
    desc: {
      en: 'The buyer has put the invoice on hold pending additional information from the seller (missing PO reference, delivery details, etc.).',
      fr: "L'acheteur a mis la facture en attente d'informations complémentaires du vendeur (référence commande manquante, détails de livraison, etc.).",
    },
    when: {
      en: ['BUYER needs more information before processing the invoice'],
      fr: ["L'ACHETEUR a besoin d'informations supplémentaires avant de traiter la facture"],
    },
    actions: [
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Set 'Suspended' status with the specific information requested.", fr: "Positionner le statut 'Suspendue' avec les informations spécifiquement demandées." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Send 'Completed' status (209) with the missing information via PA-E.", fr: "Envoyer le statut 'Complétée' (209) avec les informations manquantes via la PA-E." },
    ],
  },
  {
    code: 209,
    name: { en: 'Completed', fr: 'Complétée' },
    phase: 'processing',
    color: 'teal',
    who: { en: 'SELLER', fr: 'VENDEUR' },
    desc: {
      en: "Sent by the seller in response to a 'Suspended' (208) status, providing the additional information the buyer requested.",
      fr: "Envoyé par le vendeur en réponse à un statut 'Suspendue' (208), fournissant les informations complémentaires demandées par l'acheteur.",
    },
    when: {
      en: ["BUYER has previously set status to 'Suspended' (208)"],
      fr: ["L'ACHETEUR a préalablement positionné le statut à 'Suspendue' (208)"],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Send 'Completed' (209) status with the requested missing information via PA-E.", fr: "Envoyer le statut 'Complétée' (209) avec les informations manquantes demandées via la PA-E." },
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: 'Process the invoice with the supplementary information received.', fr: 'Traiter la facture avec les informations complémentaires reçues.' },
    ],
  },
  {
    code: 210,
    name: { en: 'Refused', fr: 'Refusée' },
    phase: 'processing',
    mandatory: true,
    color: 'red',
    who: { en: 'BUYER', fr: 'ACHETEUR' },
    desc: {
      en: 'The buyer refuses the invoice. MANDATORY — must be sent to PPF. Reason must come from the approved list (XP Z12-012 Annex A). Strictly for non-compliance, NOT for commercial disputes.',
      fr: "L'acheteur refuse la facture. OBLIGATOIRE — doit être transmis au PPF. Le motif doit être issu de la liste autorisée (XP Z12-012 Annexe A). Strictement pour non-conformité, PAS pour les litiges commerciaux.",
    },
    when: {
      en: ['Non-compliance not caught by PA-R (e.g. missing contractual purchase order reference)', 'Invoice for an unknown transaction (seller unknown or no underlying commercial relationship)'],
      fr: ['Non-conformité non détectée par la PA-R (ex. : numéro de bon de commande manquant)', "Facture pour une transaction inconnue (fournisseur inconnu ou aucune relation commerciale sous-jacente)"],
    },
    actions: [
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Set 'Refused' (210) with reason code. PA-R transmits to CdD PPF and PA-E.", fr: "Positionner 'Refusée' (210) avec motif. La PA-R transmet au CdD PPF et à la PA-E." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'Cancel accounting entry — create an INTERNAL credit note (not sent to buyer, not sent to PA-E except for archiving).', fr: "Annuler l'écriture comptable — créer un avoir INTERNE (non transmis à l'acheteur, non envoyé à la PA-E sauf archivage)." },
    ],
    note: {
      en: "⚠ Once 'Refused' (210) or 'Rejected' (213) is set, NO further mandatory status can be assigned. These statuses permanently close the invoice lifecycle.",
      fr: "⚠ Une fois 'Refusée' (210) ou 'Rejetée' (213) positionné, AUCUN autre statut obligatoire ne peut être assigné. Ces statuts ferment définitivement le cycle de vie.",
    },
  },
  {
    code: 211,
    name: { en: 'Payment Transmitted', fr: 'Paiement transmis' },
    phase: 'processing',
    color: 'green',
    who: { en: 'PA-E / BUYER', fr: 'PA-E / ACHETEUR' },
    desc: {
      en: "Indicates that payment has been transmitted to the seller. Set by the buyer's platform (PA-R) once the payment order has been sent.",
      fr: "Indique que le paiement a été transmis au vendeur. Positionné par la plateforme de l'acheteur (PA-R) une fois l'ordre de paiement émis.",
    },
    when: {
      en: ['BUYER has issued the payment order for the invoice amount'],
      fr: ["L'ACHETEUR a émis l'ordre de paiement pour le montant de la facture"],
    },
    actions: [
      { actor: { en: 'PA-R / BUYER', fr: 'PA-R / ACHETEUR' }, en: "Set 'Payment Transmitted' (211) once the payment order has been sent.", fr: "Positionner 'Paiement transmis' (211) une fois l'ordre de paiement émis." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Await funds on account. Confirm receipt with 'Payment Received' (212).", fr: "Attendre les fonds sur le compte. Confirmer la réception via 'Encaissée' (212)." },
    ],
  },
  {
    code: 212,
    name: { en: 'Payment Received', fr: 'Encaissée' },
    phase: 'processing',
    mandatory: true,
    color: 'green',
    who: { en: 'SELLER', fr: 'VENDEUR' },
    desc: {
      en: 'The seller confirms receipt of payment. MANDATORY when VAT is payable upon receipt of payment (services not on debit basis). Required for VAT pre-fill.',
      fr: "Le vendeur confirme la réception du paiement. OBLIGATOIRE lorsque la TVA est exigible à l'encaissement (prestations sans option pour les débits). Nécessaire pour le pré-remplissage TVA.",
    },
    when: {
      en: ['Invoice has been paid (fully or partially)', 'VAT is payable upon receipt — services where seller has not opted for debit basis'],
      fr: ['La facture a été payée (totalement ou partiellement)', "TVA exigible à l'encaissement — prestations sans option pour les débits"],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Create 'Payment Received' (212) via PA-E — include amount received per applicable VAT rate (MDT-215, MDT-224).", fr: "Créer 'Encaissée' (212) via la PA-E — inclure le montant encaissé par taux de TVA applicable (MDT-215, MDT-224)." },
      { actor: 'PA-E', en: "Transmit to CdD PPF (mandatory for VAT pre-fill) AND to PA-R (for buyer's information).", fr: "Transmettre au CdD PPF (obligatoire pour le pré-remplissage TVA) ET à la PA-R (information de l'acheteur)." },
    ],
    note: {
      en: 'Required data: MDT-207=MEN, MDT-215 (amount with VAT), MDT-224 (VAT rate). Use multiple occurrences for multiple VAT rates.',
      fr: 'Données requises : MDT-207=MEN, MDT-215 (montant TTC), MDT-224 (taux de TVA). Plusieurs occurrences si plusieurs taux.',
    },
  },
  {
    code: 213,
    name: { en: 'Rejected', fr: 'Rejetée' },
    phase: 'both',
    mandatory: true,
    color: 'red',
    who: { en: 'PA-E (on issue) · PA-R (on receipt) · BUYER (processing)', fr: "PA-E (à l'émission) · PA-R (à la réception) · ACHETEUR (traitement)" },
    desc: {
      en: 'Invoice is rejected due to regulatory/technical non-compliance. MANDATORY — must be sent to PPF. Permanently closes the invoice lifecycle. Never use for commercial disputes.',
      fr: 'La facture est rejetée pour non-conformité réglementaire/technique. OBLIGATOIRE — doit être transmis au PPF. Ferme définitivement le cycle de vie. Ne jamais utiliser pour des litiges commerciaux.',
    },
    when: {
      en: ['PA-E rejection (on issue): format error, duplicate, no active buyer address, regulatory check failure', 'PA-R rejection (on receipt): regulatory check failure on the receiving side', "BUYER rejection: strictly for regulatory non-compliance not caught by PA-R — NOT for commercial disputes (use 'Disputed' 207)"],
      fr: ["Rejet PA-E (à l'émission) : erreur de format, doublon, adresse acheteur inactive, échec contrôle réglementaire", 'Rejet PA-R (à la réception) : échec de contrôle réglementaire côté réception', "Rejet ACHETEUR : strictement pour non-conformité réglementaire non détectée par la PA-R — PAS pour les litiges (utiliser 'En litige' 207)"],
    },
    actions: [
      { actor: 'PA-E / PA-R', en: "Set 'Rejected' (213) with mandatory reason code. Send to CdD PPF. Do NOT forward to BUYER (PA-E rejection). Make available to SELLER.", fr: "Positionner 'Rejetée' (213) avec motif obligatoire. Envoyer au CdD PPF. NE PAS transmettre à l'ACHETEUR (rejet PA-E). Mettre à disposition du VENDEUR." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'Cancel the rejected invoice accounting entry — create an INTERNAL credit note.', fr: "Annuler l'écriture comptable de la facture rejetée — créer un avoir INTERNE." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'Correct the error and issue a brand-new invoice if the transaction is valid.', fr: "Corriger l'erreur et émettre une nouvelle facture si la transaction est valide." },
    ],
    note: {
      en: "⚠ Once 'Rejected' (213) is set, NO further mandatory status can be assigned.",
      fr: "⚠ Une fois 'Rejetée' (213) positionné, AUCUN autre statut obligatoire ne peut être assigné.",
    },
  },
  {
    code: 214,
    name: { en: 'Approved (by agent)', fr: 'Approuvée (par agent)' },
    phase: 'processing',
    color: 'green',
    who: { en: 'Third-party agent acting on behalf of BUYER', fr: "Agent tiers agissant pour le compte de l'ACHETEUR" },
    desc: {
      en: "Same semantic as 'Approved' (205) but used when a BUYER's agent or third-party manager sets the approval on behalf of the BUYER (PA-TR, media agency, etc.).",
      fr: "Même sémantique qu''Approuvée' (205) mais utilisé lorsqu'un agent tiers de l'ACHETEUR positionne l'approbation en son nom (PA-TR, agence média, etc.).",
    },
    when: {
      en: ['A third-party agent (PA-TR, media agency, etc.) is authorized to process invoices on behalf of the BUYER'],
      fr: ["Un agent tiers (PA-TR, agence média, etc.) est habilité à traiter les factures pour le compte de l'ACHETEUR"],
    },
    actions: [
      { actor: { en: 'Agent / PA-TR', fr: 'Agent / PA-TR' }, en: "Set 'Approved' (214) on the invoice on behalf of BUYER.", fr: "Positionner 'Approuvée' (214) sur la facture au nom de l'ACHETEUR." },
    ],
  },
  {
    code: 220,
    name: { en: 'Cancelled', fr: 'Annulée' },
    phase: 'processing',
    color: 'gray',
    who: { en: 'BUYER or SELLER', fr: 'ACHETEUR ou VENDEUR' },
    desc: {
      en: 'An invoice has been replaced by a corrected invoice (facture rectificative). Closes the lifecycle of the original invoice.',
      fr: 'Une facture a été remplacée par une facture rectificative. Ferme le cycle de vie de la facture originale.',
    },
    when: {
      en: ['A corrected invoice (facture rectificative) has been issued by the SELLER to replace this invoice', "Typically follows a 'Disputed' (207) workflow"],
      fr: ['Une facture rectificative a été émise par le VENDEUR pour remplacer cette facture', "Fait généralement suite à un workflow 'En litige' (207)"],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Issue corrected invoice referencing the original in BG-3. May set 'Cancelled' on the original.", fr: "Émettre la facture rectificative référençant l'originale en BG-3. Peut positionner 'Annulée' sur l'originale." },
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: "Upon receiving and processing the corrected invoice: set the original invoice to 'Cancelled' (220).", fr: "À réception et traitement de la facture rectificative : positionner la facture originale à 'Annulée' (220)." },
    ],
    note: {
      en: "No credit note is needed when a corrected invoice is used — it acts as both. 'Cancelled' is not mandatory and not sent to PPF.",
      fr: "Aucun avoir n'est nécessaire lors de l'utilisation d'une facture rectificative — elle tient lieu des deux. 'Annulée' n'est pas obligatoire et n'est pas transmis au PPF.",
    },
  },
  {
    code: 221,
    name: { en: 'Error Routing', fr: 'Erreur de routage' },
    phase: 'transmission',
    color: 'coral',
    special: true,
    who: { en: 'PA-R (wrong platform)', fr: 'PA-R (mauvaise plateforme)' },
    desc: {
      en: "The PA-R that received the invoice is not responsible for the buyer's electronic address. Allows PA-E to retry routing without triggering a 'Rejected' status.",
      fr: "La PA-R qui a reçu la facture n'est pas responsable de l'adresse électronique de l'acheteur. Permet à la PA-E de réessayer le routage sans déclencher un statut 'Rejetée'.",
    },
    when: {
      en: ['PA-R receives an invoice intended for a different PA-R (directory lag, recent platform change)'],
      fr: ['La PA-R reçoit une facture destinée à une autre PA-R (annuaire non à jour, changement de plateforme récent)'],
    },
    actions: [
      { actor: 'PA-R', en: 'Issue ERROR_ROUTING (221) to the PA-E.', fr: 'Émettre ERROR_ROUTING (221) vers la PA-E.' },
      { actor: 'PA-E', en: 'Update/re-query directory, then retransmit to the correct PA-R.', fr: 'Mettre à jour/re-interroger l’annuaire, puis retransmettre à la PA-R correcte.' },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'No action — platform handles the retry transparently.', fr: 'Aucune action — la plateforme gère la retransmission de manière transparente.' },
    ],
  },
  {
    code: 224,
    name: { en: 'Direct Payment Request', fr: 'Demande de paiement direct' },
    phase: 'processing',
    color: 'purple',
    who: { en: 'SELLER (subcontracting context)', fr: 'VENDEUR (contexte sous-traitance)' },
    desc: {
      en: 'Used in subcontracting with direct payment: the subcontractor requests direct payment from the end buyer (project owner), bypassing the main contractor.',
      fr: "Utilisé en sous-traitance avec paiement direct : le sous-traitant demande le paiement direct au maître d'ouvrage (acheteur final), en court-circuitant le titulaire.",
    },
    when: {
      en: ['Subcontracting with direct payment (case no. 13 of XP Z12-014)', 'Subcontractor is entitled to claim direct payment from the project owner'],
      fr: ['Sous-traitance avec paiement direct (cas n°13 de XP Z12-014)', "Le sous-traitant est en droit de réclamer un paiement direct au maître d'ouvrage"],
    },
    actions: [
      { actor: { en: 'SELLER (subcontractor)', fr: 'VENDEUR (sous-traitant)' }, en: "Send 'Direct Payment Request' (224) via CDAR life cycle message to the project owner.", fr: "Envoyer 'Demande de paiement direct' (224) via message CDAR au maître d'ouvrage." },
    ],
  },
  {
    code: 225,
    name: { en: 'Factored', fr: 'Affacturée' },
    phase: 'processing',
    color: 'purple',
    factoring: true,
    who: { en: 'SELLER', fr: 'VENDEUR' },
    desc: {
      en: 'Invoice has been assigned (subrogated) to a factoring company. Sent to BUYER to redirect payment to the factor. Traditional (non-confidential) factoring.',
      fr: "La facture a été cédée (subrogée) à une société d'affacturage. Envoyé à l'ACHETEUR pour rediriger le paiement vers le factor. Affacturage traditionnel (non confidentiel).",
    },
    when: {
      en: ['Invoice is subrogated to a factoring company'],
      fr: ["La facture est subrogée à une société d'affacturage"],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Send 'Factored' (225) via CDAR to BUYER via PA-R — include factor IBAN, BIC, account holder name (MDT-214).", fr: "Envoyer 'Affacturée' (225) via CDAR à l'ACHETEUR via PA-R — inclure IBAN, BIC, nom du titulaire du factor (MDT-214)." },
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: 'Pay the factoring company (factor/PAYEE) instead of the SELLER.', fr: "Payer la société d'affacturage (factor/PAYEE) à la place du VENDEUR." },
    ],
  },
  {
    code: 226,
    name: { en: 'Factored Confidential', fr: 'Affacturée confidentielle' },
    phase: 'processing',
    color: 'purple',
    factoring: true,
    who: { en: 'SELLER', fr: 'VENDEUR' },
    desc: {
      en: 'Confidential factoring: invoice assigned to factor but BUYER is not informed. MUST NOT be sent to PA-R or BUYER — sent only to the factoring company.',
      fr: "Affacturage confidentiel : facture cédée au factor mais l'ACHETEUR n'est pas informé. NE DOIT PAS être envoyé à la PA-R ou à l'ACHETEUR — uniquement à la société d'affacturage.",
    },
    when: {
      en: ['Confidential factoring arrangement — BUYER must not know about the factoring'],
      fr: ["Affacturage confidentiel — l'ACHETEUR ne doit pas savoir qu'il y a affacturage"],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Send 'Factored Confidential' (226) directly to factor ONLY — do NOT transmit to PA-R or BUYER.", fr: "Envoyer 'Affacturée confidentielle' (226) uniquement au factor — NE PAS transmettre à la PA-R ou à l'ACHETEUR." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Then send 'Change of Account Payable' (227) to redirect BUYER payment without revealing factoring.", fr: "Puis envoyer 'Changement de compte à payer' (227) pour rediriger le paiement de l'ACHETEUR sans révéler l'affacturage." },
    ],
  },
  {
    code: 227,
    name: { en: 'Change of Account Payable', fr: 'Changement de compte à payer' },
    phase: 'processing',
    color: 'purple',
    factoring: true,
    who: { en: 'SELLER', fr: 'VENDEUR' },
    desc: {
      en: 'Notifies the buyer to pay to a new bank account — used in confidential factoring to redirect payment without revealing the arrangement. Contains new IBAN/BIC.',
      fr: "Notifie l'acheteur de payer sur un nouveau compte bancaire — utilisé en affacturage confidentiel pour rediriger le paiement sans révéler le dispositif. Contient le nouvel IBAN/BIC.",
    },
    when: {
      en: ["Confidential factoring: BUYER must pay the factor without knowing it's a factor", 'Any legitimate change of payment account'],
      fr: ["Affacturage confidentiel : l'ACHETEUR doit payer le factor sans savoir que c'est un factor", 'Tout changement légitime de compte de paiement'],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Send 'Change of Account Payable' (227) to BUYER via PA-R — include new IBAN, BIC, account holder name.", fr: "Envoyer 'Changement de compte à payer' (227) à l'ACHETEUR via PA-R — inclure nouvel IBAN, BIC, nom du titulaire." },
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: 'Update payment target to the new bank account.', fr: 'Mettre à jour la cible de paiement vers le nouveau compte bancaire.' },
    ],
  },
  {
    code: 228,
    name: { en: 'Not Factored', fr: 'Non affacturée' },
    phase: 'processing',
    color: 'purple',
    factoring: true,
    who: { en: 'SELLER', fr: 'VENDEUR' },
    desc: {
      en: 'Cancels a previous factoring assignment. Reverts payment back to the original seller bank account.',
      fr: "Annule une cession d'affacturage précédente. Restitue le paiement au compte bancaire original du vendeur.",
    },
    when: {
      en: ['Factoring arrangement has been cancelled or invoice recalled from the factor'],
      fr: ["Le dispositif d'affacturage a été annulé ou la facture rappelée par le factor"],
    },
    actions: [
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: "Send 'Not Factored' (228) to BUYER via PA-R — include original SELLER IBAN/BIC.", fr: "Envoyer 'Non affacturée' (228) à l'ACHETEUR via PA-R — inclure IBAN/BIC original du VENDEUR." },
      { actor: { en: 'BUYER', fr: 'ACHETEUR' }, en: 'Revert payment to the original SELLER account.', fr: 'Revenir au compte original du VENDEUR pour le paiement.' },
    ],
  },
  {
    code: 500,
    name: { en: 'Acceptable (batch)', fr: 'Recevable (lot)' },
    phase: 'transmission',
    color: 'teal',
    special: true,
    who: { en: 'PA-E or PA-R', fr: 'PA-E ou PA-R' },
    desc: {
      en: 'Batch/envelope-level status: the submitted batch package has passed all technical and application-level checks.',
      fr: 'Statut au niveau lot/enveloppe : le lot soumis a passé tous les contrôles techniques et applicatifs.',
    },
    when: {
      en: ['Batch file passes antivirus, envelope, and format checks'],
      fr: ["Le fichier lot passe les contrôles antivirus, d'enveloppe et de format"],
    },
    actions: [
      { actor: 'PA', en: 'Set ACCEPTABLE (500) for the batch. Individual invoices within then proceed normally.', fr: 'Positionner RECEVABLE (500) pour le lot. Les factures individuelles suivent ensuite leur cycle de vie normal.' },
    ],
  },
  {
    code: 501,
    name: { en: 'Unacceptable (batch)', fr: 'Irrecevable (lot)' },
    phase: 'transmission',
    color: 'red',
    special: true,
    who: { en: 'PA-E or PA-R', fr: 'PA-E ou PA-R' },
    desc: {
      en: 'Batch/envelope-level error: technical or application-level failure (antivirus, empty file, envelope error, XSD format check). Sender must correct and resend.',
      fr: "Erreur au niveau lot/enveloppe : échec technique ou applicatif (antivirus, fichier vide, erreur d'enveloppe, contrôle XSD). L'émetteur doit corriger et renvoyer.",
    },
    when: {
      en: ['Antivirus failure, empty file, envelope error, or format/XSD structure failure'],
      fr: ["Échec antivirus, fichier vide, erreur d'enveloppe, ou échec de structure format/XSD"],
    },
    actions: [
      { actor: 'PA', en: 'Send UNACCEPTABLE (501) to issuer with reason code from XP Z12-012 Annex A.', fr: "Envoyer IRRECEVABLE (501) à l'émetteur avec le code motif de l'Annexe A de la norme XP Z12-012." },
      { actor: { en: 'SELLER', fr: 'VENDEUR' }, en: 'Correct the error (file, format, envelope) and resend the entire batch.', fr: "Corriger l'erreur (fichier, format, enveloppe) et renvoyer l'intégralité du lot." },
    ],
  },
];
