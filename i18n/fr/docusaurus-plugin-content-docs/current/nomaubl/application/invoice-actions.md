---
title: "Actions sur une facture"
description: "Les fenêtres d'action sur une facture NomaUBL — modification du statut, envoi du PDF par e-mail au client, création ou édition dans l'éditeur de facture, confirmation du redépôt sur la Plateforme Agréée."
keywords: [NomaUBL, e-invoicing, modification de statut, e-mail, éditeur de facture, création de facture, édition de facture, redépôt, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Actions sur une facture

Les fenêtres ci-dessous s'ouvrent depuis la liste [E-Invoicing](./invoices.md) et depuis la fenêtre de [détail d'une facture](./invoice-detail.md).

## Modale de modification de statut

Ouverte depuis le bouton **Modifier le statut** de l'onglet Historique. Permet de placer manuellement la facture sur un statut donné — utile pour corriger une erreur ou pour forcer une transition que la plateforme n'a pas remontée.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', maxWidth: '560px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>Mise à jour du statut — 12345 / RI / 00070</div>
    <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
  </div>
  <div style={{padding: '18px'}}>
    <div style={{display: 'flex', gap: '8px', marginBottom: '14px', padding: '4px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', width: 'fit-content'}}>
      <span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>PA</span>
      <span style={{padding: '6px 14px', borderRadius: '6px', fontSize: '12px', opacity: 0.6}}>DB</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px'}}>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Statut</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><span>211 Approuvée avec réserve</span><span style={{opacity: 0.5}}>▾</span></div>
      </div>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Date / heure</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>2026-04-27 10:42</div>
      </div>
    </div>
    <div style={{marginBottom: '12px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Motif</div>
      <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', minHeight: '60px'}}>Approbation sous réserve, en attente du bordereau de livraison rectifié — voir BL-2026-018 joint.</div>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '110px 1fr', gap: '12px', marginBottom: '12px'}}>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Code motif</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>RR-016</div>
      </div>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Libellé</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>Quantité non conforme à la livraison</div>
      </div>
    </div>
  </div>
  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Annuler</span>
    <span style={{padding: '7px 16px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Soumettre</span>
  </div>
</div>

| Champ | Description |
|---|---|
| **Cible** | `PA` (envoie une mise à jour de statut à la Plateforme Agréée) ou `DB` (écrit le nouveau statut directement en base locale, sans notification PA). |
| **Statut** | Liste déroulante de tous les statuts de la liste de référence *statuses*, avec code + libellé. |
| **Date du statut** *(PA uniquement)* | Date / heure de l'événement. Défaut : maintenant. |
| **Motif** | Motif libre. Pré-rempli avec le libellé du statut ; modifiable. |
| **Code et libellé du motif de rejet** *(le cas échéant)* | Code issu de la liste *rejection-reason-codes*, plus sa traduction. |
| **Code et libellé de l'action** *(le cas échéant)* | Code issu de la liste *action-codes*, plus sa traduction. |

Quand **Cible = DB** est sélectionné, un encart orange rappelle que la modification est locale uniquement et ne sera pas propagée vers la PA.

Cliquer sur **Soumettre** pour appliquer. Un bandeau vert confirme le succès et la modale se ferme peu après.

## Modale d'envoi d'e-mail

Ouverte depuis l'onglet PDF. Permet d'envoyer le PDF de la facture au client par SMTP, avec les identifiants configurés dans le template *global*.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', maxWidth: '620px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 700, fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center'}}>✉️ Envoyer la facture par e-mail</div>
    <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
  </div>
  <div style={{padding: '18px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '60px 1fr', gap: '8px 12px', marginBottom: '10px', alignItems: 'center'}}>
      <div style={{fontSize: '12px', opacity: 0.7, textAlign: 'right'}}>À</div>
      <div style={{padding: '7px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>j.dupont@acme.fr</div>
      <div style={{fontSize: '12px', opacity: 0.7, textAlign: 'right'}}>Cc</div>
      <div style={{padding: '7px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.5, fontStyle: 'italic'}}>accounting@nomana-it.fr</div>
      <div style={{fontSize: '12px', opacity: 0.7, textAlign: 'right'}}>Objet</div>
      <div style={{padding: '7px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>Facture FA-2026-001234</div>
    </div>
    <div style={{padding: '12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', minHeight: '120px', lineHeight: '1.6', background: 'rgba(0,0,0,0.1)'}}>
      <div>Bonjour Monsieur Dupont,</div>
      <br/>
      <div>Vous trouverez ci-joint la facture <b>FA-2026-001234</b> d'un montant de <b>1 500,00 EUR</b>.</div>
      <br/>
      <div>Pour toute question, n'hésitez pas à contacter notre service comptable.</div>
      <br/>
      <div style={{opacity: 0.75}}>Cordialement,<br/>Nomana-IT SAS</div>
    </div>
    <div style={{marginTop: '12px', padding: '10px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.3)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px'}}>
      <span style={{fontSize: '14px'}}>📎</span>
      <span><b>FA-2026-001234.pdf</b> · 142 Ko · attaché automatiquement depuis l'onglet PDF</span>
    </div>
  </div>
  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Annuler</span>
    <span style={{padding: '7px 16px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Envoyer</span>
  </div>
</div>

| Champ | Description |
|---|---|
| **À** *(obligatoire)* | Adresse e-mail du destinataire. |
| **Cc** | Copie facultative. |
| **Objet** | Pré-rempli avec `Invoice <ublNumber>` ; modifiable. |
| **Corps** | Pré-rempli avec un modèle français ou anglais selon la langue de l'utilisateur : salutation, ligne principale qui référence le numéro de facture et le total, ligne de contact, signature. Entièrement modifiable. |

Le PDF affiché dans l'onglet PDF est attaché automatiquement. Si le PDF n'a pas été pré-chargé, le serveur le récupère depuis la base avant l'envoi.

Pendant l'envoi, la modale est désactivée par un voile jusqu'à la confirmation du serveur SMTP. Un bandeau vert confirme l'envoi ; la modale se ferme automatiquement après ~2 s.

## Modale de création / édition de facture \{#create-invoice\}

Ouverte depuis **+ Nouvelle facture** dans la barre d'outils, ou depuis les boutons **Modifier l'UBL** / **Copier** de l'onglet Résumé. Permet de créer une facture vierge ou de modifier une facture existante. La modale prend l'apparence d'une facture imprimable. L'utilisateur remplit le formulaire ; à l'enregistrement, NomaUBL génère le document UBL correspondant.

Les sections et champs affichés dépendent du rôle de l'utilisateur : un rôle qui dispose de [formulaires de saisie](../configuration/entry-forms.md) ouvre l'éditeur sur son formulaire par défaut — certains champs en lecture seule ou masqués, valeurs par défaut renseignées, champs obligatoires contrôlés à l'enregistrement — et un sélecteur dans l'en-tête passe d'un formulaire à l'autre. Sans formulaire, le rôle garde l'éditeur complet. Sur une ligne, **+ Prix** ouvre le détail du prix (PU brut, remise, PU net) et **+ Delivery** le bloc de livraison de la ligne ; la corbeille les referme.

Modifier une facture existante ne réinitialise plus son `cbc:CustomizationID` au défaut EN16931. Le formulaire porte maintenant la valeur `customizationId` du UBL source et l'écrit verbatim — les nouvelles factures restent par défaut à `urn:cen.eu:en16931:2017`.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', boxShadow: '0 12px 32px rgba(0,0,0,0.3)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>📝 Nouvelle facture</div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', opacity: 0.7}}><span>⛶</span><span>✕</span></div>
  </div>

  <div style={{padding: '20px 22px', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), transparent 80%)'}}>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'flex-start', marginBottom: '20px'}}>
      <div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
          <div style={{width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff'}}>N</div>
          <div style={{fontWeight: 700, fontSize: '13px'}}>Nomana-IT SAS</div>
        </div>
        <div style={{fontSize: '11px', opacity: 0.7, lineHeight: '1.6'}}>10 rue de Paris · 75001 Paris · FR<br/>SIREN 123 456 789 · TVA FR12123456789</div>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontSize: '24px', fontWeight: 800, letterSpacing: '0.05em', color: '#4a9eff', marginBottom: '4px'}}>FACTURE</div>
        <div style={{fontSize: '12px', opacity: 0.85}}>N° <b>FA-2026-001234</b></div>
        <div style={{fontSize: '11px', opacity: 0.7, marginTop: '6px'}}>Émission <b>2026-04-24</b> · Échéance <b>2026-05-24</b></div>
      </div>
    </div>

    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px'}}>
      <div style={{padding: '12px 14px', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '8px'}}>
        <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.6, marginBottom: '4px'}}>Émetteur</div>
        <div style={{fontSize: '12px', fontWeight: 600}}>Nomana-IT SAS</div>
        <div style={{fontSize: '11px', opacity: 0.75, lineHeight: '1.5', marginTop: '2px'}}>10 rue de Paris<br/>75001 Paris · FR</div>
      </div>
      <div style={{padding: '12px 14px', border: '1px solid rgba(74,158,255,0.35)', borderRadius: '8px', background: 'rgba(74,158,255,0.04)', position: 'relative'}}>
        <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a9eff', marginBottom: '4px'}}>Destinataire</div>
        <div style={{fontSize: '12px', fontWeight: 600}}>Acme Industries SA</div>
        <div style={{fontSize: '11px', opacity: 0.75, lineHeight: '1.5', marginTop: '2px'}}>50 avenue des Champs<br/>69002 Lyon · FR</div>
        <span style={{position: 'absolute', top: '10px', right: '12px', fontSize: '10px', padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.2)', color: '#4a9eff', fontWeight: 600}}>🔎 Annuaire PPF</span>
      </div>
    </div>

    <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '14px', fontSize: '12px'}}>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 80px 70px 100px 110px 70px 30px', padding: '8px 12px', background: 'rgba(255,255,255,0.04)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.75, fontWeight: 600}}>
        <div>Description</div><div style={{textAlign: 'right'}}>Qté</div><div>Unité</div><div style={{textAlign: 'right'}}>Prix unit.</div><div style={{textAlign: 'right'}}>Montant</div><div>TVA</div><div></div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 80px 70px 100px 110px 70px 30px', padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.04)', alignItems: 'center'}}>
        <div>Prestation de conseil — reporting financier</div><div style={{textAlign: 'right'}}>5,00</div><div>DAY</div><div style={{textAlign: 'right'}}>800,00</div><div style={{textAlign: 'right'}}>4 000,00</div><div>S 20%</div><div style={{opacity: 0.5}}>✕</div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 80px 70px 100px 110px 70px 30px', padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.04)', alignItems: 'center'}}>
        <div>Fournitures bureau — papier A4 80 g/m²</div><div style={{textAlign: 'right'}}>20,00</div><div>EA</div><div style={{textAlign: 'right'}}>25,00</div><div style={{textAlign: 'right'}}>500,00</div><div>S 20%</div><div style={{opacity: 0.5}}>✕</div>
      </div>
      <div style={{padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: '11px'}}>
        <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px dashed rgba(74,158,255,0.4)', color: '#4a9eff', fontWeight: 500}}>+ Ajouter une ligne</span>
      </div>
    </div>

    <div style={{display: 'grid', gridTemplateColumns: '1fr 260px', gap: '14px'}}>
      <div style={{padding: '12px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '11px', opacity: 0.85, lineHeight: '1.7'}}>
        <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.7, marginBottom: '6px'}}>Paiement</div>
        <div>SEPA · IBAN <code style={{fontSize: '10px'}}>FR76 3000 4000 0312 3456 7890 143</code></div>
        <div>BIC <code style={{fontSize: '10px'}}>BNPAFRPP</code> · Conditions 30 jours nets fin de mois</div>
      </div>
      <div style={{padding: '12px 14px', border: '1px solid rgba(74,158,255,0.35)', borderRadius: '8px', background: 'rgba(74,158,255,0.05)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.85, marginBottom: '4px'}}><span>Sous-total HT</span><span>4 500,00</span></div>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.85, marginBottom: '4px'}}><span>TVA 20%</span><span>900,00</span></div>
        <div style={{height: '1px', background: 'rgba(255,255,255,0.1)', margin: '6px 0'}} />
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, color: '#4a9eff'}}><span>Total TTC</span><span>5 400,00 EUR</span></div>
      </div>
    </div>
  </div>

  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', opacity: 0.6}}>📄 Le document UBL est généré et déposé sur la Plateforme Agréée à l'enregistrement</div>
    <div style={{display: 'flex', gap: '8px'}}>
      <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Annuler</span>
      <span style={{padding: '7px 18px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Enregistrer & générer l'UBL</span>
    </div>
  </div>
</div>

La modale est divisée en sections verticales :

- **Document** — numéro, type de facture, profile ID, références contrat / acheteur / commande.
- **En-tête** — dates d'émission / échéance, devise, période de début / fin, l'**Avis d'expédition** (BT-16 — numéro et date), ainsi qu'un bloc **Factures antérieures** (BG-3, 0..n) : chaque ligne un numéro de référence (BT-25) et une date d'émission facultative (BT-26), avec **＋ Ajouter une facture antérieure (BG-3)**. Sur un avoir, c'est la référence à la facture corrigée.
- **Fournisseur** — alimenté depuis l'annuaire des fournisseurs (*UBL Defaults → Suppliers / Companies*) ; modifiable par facture.
- **Client** — renseigné de bout en bout depuis la recherche d'entreprise : les résultats affichent le badge, le nom et l'identifiant sur une ligne, l'adresse en dessous ; une recherche par SIREN ou SIRET seul liste tous les établissements (même seconde interrogation INSEE que l'[E-Directory](./edirectory.md)), et un champ SIRET facultatif complète le SIREN. L'adresse électronique n'est **pas déduite** du SIREN/SIRET — une liste d'adresses électroniques du PPF (ouverte automatiquement après le choix d'une entreprise, ou à tout moment via le bouton à côté du champ identifiant) présente les adresses enregistrées pour le SIREN avec leur état actif/désactivé ; en choisir une renseigne l'identifiant et son schéma, puis la liste se referme. Un bloc **Autres id. (BT-46)** ajoute autant d'identifiants acheteur supplémentaires que voulu, chacun avec son schéma de la liste EAS — un code de routage ou un second SIRET porté par le document devient visible, modifiable et supprimable au lieu de voyager de façon invisible.
- **Livraison** — groupe livraison facultatif au niveau du document (BG-13). Seule la livraison saisie au niveau document y apparaît ; les livraisons portées par les lignes restent sur les lignes et ne remontent jamais dans l'en-tête.
- **Paiement** — code de moyen de paiement, IBAN, BIC, mandat, conditions.
- **Remises / charges** — remises / charges au niveau document.
- **Notes** — notes libres par préfixe `BT-22`.
- **Lignes** — lignes de facture avec article, quantité, unité, prix, remises, propriétés. Le champ Prix unitaire accepte une précision fine (jusqu'à 6 décimales), pour les prix qui en portent plus de 2 à la source. Un bloc **Prix (BG-29)** par ligne fixe le prix unitaire brut (**BT-148**) et la remise sur prix (**BT-147**) ; le prix net en est déduit et pilote le montant de ligne, lequel divise par la **quantité de base** (BT-149) — un prix pour 100 ou 1 000 unités est ainsi calculé correctement. Le bloc *Références* de la ligne porte aussi des références de **facture antérieure** par ligne (EXT-FR-FE-136) — numéro, date facultative et un **DocumentStatusCode** choisi parmi `INFORMATION` / `DETAIL` / `GROUP`. Trois boutons rapides du même bloc renseignent les **références de commande** de la ligne, toutes portées par `cac:OrderLineReference` : **Référence Cde Client** (numéro de commande de l'acheteur, EXT-FR-FE-135 — la clé de regroupement des lignes sur le PDF), **Numéro de commande** (numéro de commande du vendeur, EXT-FR-FE-144) et **N° ligne client** (numéro de la ligne dans la commande de l'acheteur, BT-132). Un quatrième bouton, **Avis d'expédition**, ajoute la référence et la date de l'avis d'expédition de la ligne (EXT-FR-FE-BG-07).
- **Récapitulatif TVA** — calculé automatiquement depuis les lignes (lecture seule — les modifications de ligne s'y reflètent).
- **Totaux** — calculés automatiquement (lecture seule).

Le bouton **Enregistrer** en bas valide la saisie, écrit en base, génère le document UBL et le dépose sur la PA selon les paramètres du template *e-invoicing*. La modale se ferme après un enregistrement réussi.

Un **bouton plein écran** dans l'en-tête bascule entre fenêtré et plein écran — pratique pour les factures qui ont beaucoup de lignes.

## Confirmation de redépôt

Le bouton **Renvoyer** (dans l'onglet Historique, ou via le bandeau Actions vendeur sur les statuts `9904` / `9907`) ouvre une confirmation avant de redéposer le document UBL sur la Plateforme Agréée, dans le respect des [règles de renvoi](./invoices.md#resend-reprocess-rules) — le document part immédiatement et son statut passe à *En attente* (`9906`). Après confirmation, la facture est redéposée. Un bandeau en ligne affiche le succès ou l'erreur renvoyée par la PA. Le cycle de vie est mis à jour pour refléter le nouveau dépôt.
