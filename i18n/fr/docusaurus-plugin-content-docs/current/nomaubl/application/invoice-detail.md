---
title: "Détail d'une facture"
description: "La fenêtre de détail d'une facture NomaUBL — onglets Résumé, Parties, Lignes, TVA, Notes, Historique et PDF ; correction du destinataire d'un rejet d'adressage, suivi du cycle de vie, renvoi, changement de statut."
keywords: [NomaUBL, e-invoicing, détail de facture, résumé, parties, lignes, TVA, notes, historique, cycle de vie, PDF, corriger destinataire, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Détail d'une facture

Un clic sur une ligne de la liste [E-Invoicing](./invoices.md) ouvre une modale qui contient sept onglets en haut : **Résumé**, **Parties**, **Lignes**, **TVA**, **Notes**, **Historique**, **PDF**. Le titre de la modale affiche le triplet `DOC / DCT / KCO`. Un **bouton plein écran** dans l'en-tête bascule entre vue fenêtrée et vue plein écran. À droite des onglets, la pastille **Traité** pose ou retire la [marque de suivi](./invoices.md#mark-reviewed) d'une facture en erreur.

Des **flèches précédent / suivant** (et les touches ← →) dans l'en-tête passent d'une facture à l'autre de la liste sans fermer la fenêtre — même ordre et mêmes filtres que le tableau affiché — avec un indicateur de position (par ex. `3 / 50`). Après la dernière facture, la navigation reboucle sur la première.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0', margin: '20px 0', overflow: 'hidden'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>12345 / RI / 00070</div>
    <div style={{display: 'flex', gap: '6px', fontSize: '12px', opacity: 0.6}}>⛶ ✕</div>
  </div>
  <div style={{display: 'flex', gap: '0', padding: '0 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto'}}>
    <div style={{padding: '10px 16px', fontWeight: 600, borderBottom: '2px solid #4a9eff', color: '#4a9eff'}}>Résumé</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Parties</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Lignes <span style={{opacity: 0.5, fontSize: '11px'}}>(8)</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>TVA</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Notes <span style={{opacity: 0.5, fontSize: '11px'}}>3</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Historique <span style={{opacity: 0.5, fontSize: '11px'}}>(5)</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>PDF</div>
  </div>
  <div style={{padding: '14px 18px', fontSize: '12px', opacity: 0.6, fontStyle: 'italic'}}>Contenu de l'onglet — varie selon l'onglet actif</div>
</div>

## Onglet Résumé *(défaut)*

L'onglet Résumé affiche un **badge de statut** coloré en haut — avec, en dessous, le détail du statut et le **jeu de règles** selon lequel la facture a été produite (voir [Jeux de règles](../ubl-tools/rule-sets.md)) — suivi des **boutons d'action** (Modifier l'UBL, Copier, Supprimer) à droite. **Supprimer** retire la facture et tous les enregistrements associés — ligne de journal (XML source, référence de transaction PA, nom du fichier source), cycle de vie, lignes, TVA et validation : un nouveau traitement du même document repart de zéro, et les [dossiers surveillés](../management/watched-folders.md) peuvent reprendre son fichier source. La suppression suit la même protection que *Corriger destinataire* : le bouton disparaît dès que la PA a traité la facture, sauf pour un rejet **213** au motif d'adressage. Juste sous le badge, quand la plateforme les a renvoyés, le **motif de rejet**, l'**action attendue** et la **note de statut** courants s'affichent en ligne, et le **message de statut** complet se trouve dans un groupe replié — à déplier pour le texte d'erreur long de la plateforme. Ces mêmes valeurs alimentent les actions personnalisées via les variables `{message}`, `{reasonLabel}`, `{actionLabel}` et `{actionNote}` (voir [Actions](../management/actions.md#actions-personnalisees)), sans colonne de vue de liste à configurer.

### Corriger destinataire \{#fix-buyer\}

Les rejets PA les plus fréquents portent sur les **identifiants de l'acheteur** — SIREN (BT-47), SIRET (BT-46), TVA intracommunautaire (BT-48) et adresse électronique (BT-49). Un bouton **Corriger destinataire** ouvre un formulaire compact pré-rempli depuis l'UBL stocké, avec la [recherche d'entreprises INSEE](./edirectory.md) et le sélecteur d'adresses électroniques du PPF, pour corriger uniquement ces champs sans rééditer toute la facture. Seuls les identifiants modifiés sont remplacés dans l'UBL stocké — le reste du document est intact — puis la facture est **revalidée immédiatement**, un événement d'audit trace les anciennes et nouvelles valeurs dans l'historique, et une option **renvoie à la PA** si la validation réussit. Le bouton n'apparaît que tant que la facture est encore corrigeable — avant sa prise en charge par la PA, ou quand elle a été **rejetée (213) pour un motif d'adressage** : `ADR_ERR`, `REJ_ADR` (contrôle d'adressage de la plateforme) ou `DEST_INC` (destinataire inconnu de l'annuaire). Dans ces trois cas, la facture n'est jamais parvenue au client, le renvoi est donc sans risque ; tout autre statut traité par la PA reste verrouillé. Une réparation dont la validation ne signale aucune erreur marque aussi la facture *Traité* dans la liste. L'adresse électronique de l'acheteur (BT-49) conserve le schéma déjà présent dans le document — `0225` à défaut. La correction est tracée par une simple entrée d'historique (*Identifiants acheteur corrigés*), sans redéclencher la règle de notification du statut courant, et le résultat de la nouvelle validation (`9901` / `9902`) s'ajoute à l'historique dès qu'il diffère du dernier événement. Les clés enregistrées sur la ligne au premier traitement du document (clé alpha, numéro client, unité opérationnelle, code d'acheminement) sont conservées ; il en va de même pour un enregistrement depuis la fenêtre de modification. Des garde-fous de format (longueur et cohérence SIREN/SIRET, forme de la TVA) et la règle de protection PA s'appliquent — les mêmes contrôles que l'endpoint `POST /api/invoices/{doc}/{dct}/{kco}/fix-buyer` de la [référence API](/nomaubl/api-reference).

Sous le statut, quand la facture est dans un statut qui demande une action côté vendeur (par ex. `205`, `206`, `207`, `208`, `210`, `213`, `9904`, `9907`), un bandeau bleu **Actions vendeur** propose les actions recommandées :

<div style={{border: '1px solid rgba(74,158,255,0.4)', background: 'rgba(74,158,255,0.08)', borderRadius: '8px', padding: '12px 14px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
  <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff', textTransform: 'uppercase', letterSpacing: '0.07em'}}>Actions vendeur</div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: '#4a9eff', color: '#fff', border: '1px solid #4a9eff'}}>Marquer paiement reçu</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#4a9eff', border: '1px solid rgba(74,158,255,0.4)'}}>Émettre un avoir</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#f87171', border: '1px solid rgba(248,113,113,0.4)'}}>Annuler comptable</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.15)', opacity: 0.45}}>Émettre une facture rectificative</span>
  </div>
</div>

Correspondance statut → actions :

| Statut | Actions suggérées |
|---|---|
| **205** Payée | *Marquer paiement reçu* |
| **206** Approuvée partiellement / **207** En litige | *Émettre un avoir*, *Émettre une facture rectificative* |
| **208** Suspendue | *Marquer envoi terminé* |
| **210** Refusée | *Annuler comptable* |
| **213** Rejetée | *Annuler comptable*, *Émettre une nouvelle facture* |
| **9904** Erreur d'envoi / **9907** Rejet PA | *Redéposer sur PA* |

Chaque action est rattachée à un *endpoint de connecteur API* configuré dans *Configuration → API Connectors*. Un clic exécute le connecteur avec les données de la facture. Une action grisée signifie que le connecteur n'est pas configuré sur ce déploiement.

Un second groupe se trouve sous le groupe réglementaire — **Actions personnalisées**. Boutons toujours visibles configurés sur la page [Actions](../management/actions.md#actions-personnalisees) ; chacun déclenche sa propre chaîne d'appels connecteur et reste indépendant du statut courant de la facture. Le bandeau de résultat est rattaché au groupe dont le bouton a déclenché la chaîne — un échec d'action personnalisée n'écrase pas le bandeau d'une action réglementaire affichée en même temps, et les bandeaux périmés sont effacés automatiquement quand la modale se ferme ou change de facture.

Le reste de l'onglet Résumé se présente sous forme de groupes dépliables :

- **Document** — DOC / DCT / KCO, numéro UBL, type de facture, profile ID, références contrat / acheteur / commande / projet, référence comptable.
- **Dates et devise** — date d'émission, date d'échéance, devise, période de début / fin.
- **Montants** — total HT, total TTC, montant à payer.
- **Paiement** — code de moyen de paiement, IBAN, nom du compte, BIC, identifiant de paiement, conditions de paiement.
- **Remises / charges au niveau document** — remises ou charges au niveau du document avec type, motif, montant, catégorie de TVA.

## Onglet Parties

Trois groupes dépliables remplis à partir du document UBL :

- **Fournisseur** — nom, SIREN, SIRET, identifiant à la TVA, adresse électronique, adresse postale, contact (nom, téléphone, e-mail).
- **Client** — nom, identifiant société, adresse électronique, TVA, adresse, contact.
- **Agent Party** *(facultatif)* — pour l'extension française — nom, adresse, pays.
- **Livraison** *(facultatif)* — date, nom de la partie, identifiant de lieu, adresse.

Un groupe sans donnée n'apparaît pas.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', margin: '20px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.35)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '10px'}}>Vendeur (BG-4)</div>
    <div style={{fontWeight: 700, fontSize: '14px', marginBottom: '6px'}}>Nomana-IT SAS</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.75'}}>
      <div>SIREN <code style={{fontSize: '11px'}}>123 456 789</code></div>
      <div>SIRET <code style={{fontSize: '11px'}}>123 456 789 00012</code></div>
      <div>TVA <code style={{fontSize: '11px'}}>FR12123456789</code></div>
      <div>📧 Endpoint <code style={{fontSize: '11px'}}>0009:12345678900012</code></div>
      <div style={{marginTop: '8px', opacity: 0.8}}>10 rue de Paris<br/>75001 Paris · FR</div>
      <div style={{marginTop: '6px', fontSize: '11px', opacity: 0.7}}>👤 Contact — accounting@nomana-it.fr</div>
    </div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.75, fontWeight: 700, marginBottom: '10px'}}>Acheteur (BG-7)</div>
    <div style={{fontWeight: 700, fontSize: '14px', marginBottom: '6px'}}>Acme Industries SA</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.75'}}>
      <div>SIREN <code style={{fontSize: '11px'}}>987 654 321</code></div>
      <div>TVA <code style={{fontSize: '11px'}}>FR98987654321</code></div>
      <div>📧 Endpoint <code style={{fontSize: '11px'}}>0009:98765432100015</code></div>
      <div style={{marginTop: '8px', opacity: 0.8}}>50 avenue des Champs<br/>69002 Lyon · FR</div>
      <div style={{marginTop: '6px', fontSize: '11px', opacity: 0.7}}>👤 J. Dupont — j.dupont@acme.fr · +33 4 72 00 00 00</div>
    </div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.3)', borderRadius: '10px', padding: '16px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '10px'}}>Livraison <span style={{opacity: 0.6, fontSize: '10px'}}>(facultative · BG-13)</span></div>
    <div style={{fontWeight: 700, fontSize: '14px', marginBottom: '6px'}}>Acme — Entrepôt Lyon</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.75'}}>
      <div>Date livraison <code style={{fontSize: '11px'}}>2026-04-26</code></div>
      <div>Identifiant lieu <code style={{fontSize: '11px'}}>0088:3012345600003</code></div>
      <div style={{marginTop: '8px', opacity: 0.8}}>Zone industrielle Sud<br/>69800 Saint-Priest · FR</div>
    </div>
  </div>
</div>

## Onglet Lignes

Tableau des lignes de facture : une ligne principale par ligne, plus des sous-lignes qui détaillent les compléments présents dans le document UBL.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Description</div><div style={{textAlign: 'right'}}>Quantité</div><div>Unité</div><div style={{textAlign: 'right'}}>Prix unit.</div><div style={{textAlign: 'right'}}>Montant</div><div>Cat. taxe</div><div style={{textAlign: 'right'}}>Taux</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center', fontWeight: 500}}>
    <div>Prestation de conseil — reporting financier</div><div style={{textAlign: 'right'}}>5,00</div><div>DAY</div><div style={{textAlign: 'right'}}>800,00</div><div style={{textAlign: 'right'}}>4 000,00</div><div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>S</span></div><div style={{textAlign: 'right'}}>20%</div>
  </div>
  <div style={{padding: '4px 14px 4px 30px', fontSize: '11px', opacity: 0.65, borderBottom: '1px solid rgba(255,255,255,0.04)'}}>↳ Période : 2026-04-01 → 2026-04-30 · Réf. acheteur : PO-2026-042</div>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center', fontWeight: 500}}>
    <div>Fournitures bureau — papier A4 80 g/m²</div><div style={{textAlign: 'right'}}>20,00</div><div>EA</div><div style={{textAlign: 'right'}}>25,00</div><div style={{textAlign: 'right'}}>500,00</div><div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>S</span></div><div style={{textAlign: 'right'}}>20%</div>
  </div>
  <div style={{padding: '4px 14px 4px 30px', fontSize: '11px', opacity: 0.65, borderBottom: '1px solid rgba(255,255,255,0.04)'}}>↳ Code article : SKU-A4-80 · Remise : −2,5 % rabais volume</div>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', alignItems: 'center', fontWeight: 500}}>
    <div>Licence logiciel — abonnement annuel</div><div style={{textAlign: 'right'}}>1,00</div><div>EA</div><div style={{textAlign: 'right'}}>1 200,00</div><div style={{textAlign: 'right'}}>1 200,00</div><div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,159,10,0.18)', border: '1px solid rgba(255,159,10,0.45)', fontSize: '11px', fontWeight: 600, color: '#fb923c'}}>AE</span></div><div style={{textAlign: 'right'}}>0%</div>
  </div>
  <div style={{padding: '4px 14px 8px 30px', fontSize: '11px', opacity: 0.65}}>↳ Note : <i>Autoliquidation — TVA due par le preneur (intracommunautaire UE)</i></div>
</div>

| Colonne | Description |
|---|---|
| **Description** | Texte libre décrivant l'élément facturé. |
| **Item** | Identifiant article (code, SKU). |
| **Quantité** | Quantité facturée. |
| **Unité** | Code unité de mesure (par ex. `EA` pièce, `H87` unité, `DAY` jour, `KGM` kilogramme). |
| **Prix unitaire** | Prix unitaire hors taxes. Affiché à sa précision réelle — jusqu'à **6 décimales** (BT-146), au plus près de la source. La norme EN 16931 autorise une précision plus fine sur le prix que sur les totaux monétaires, qui restent à 2 décimales. |
| **Montant ligne** | Quantité × prix unitaire (hors taxes). |
| **Catégorie de taxe** | Code de catégorie TVA UBL (`S` standard, `AE` autoliquidation, `E` exonéré, `Z` taux zéro, `O` hors champ, `K` intra-UE, `G` export, `L` Canaries, `M` Ceuta/Melilla). |
| **Taux de taxe** | Taux de TVA applicable, en pourcentage. |

Des sous-lignes apparaissent sous chaque ligne principale pour :

- Description de l'article
- Période (début → fin)
- Identifiants article acheteur / standard / classification
- Note de ligne (`BT-127`)
- Remise / charge au niveau prix (`BT-147`)
- Remises / charges au niveau ligne (`BG-27` / `BG-28`)
- Propriétés additionnelles d'article (`BG-32`)

Quand plusieurs lignes partagent la même livraison, les mêmes références documentaires (`BT-128`) ou le même numéro de commande client (`EXT-FR-FE-135`), un **en-tête de livraison**, un **en-tête de référence documentaire** ou un **en-tête Référence Cde Client** apparaît une seule fois en haut du groupe, au lieu d'être répété sur chaque ligne.

## Onglet TVA

Tableau des sous-totaux TVA présents dans le document UBL : code de catégorie, taux, base imposable, montant de TVA, devise, code et libellé d'exonération (le cas échéant).

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Catégorie</div><div style={{textAlign: 'right'}}>Taux</div><div style={{textAlign: 'right'}}>Base imposable</div><div style={{textAlign: 'right'}}>Montant TVA</div><div>Cur.</div><div>Exonération</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontWeight: 600, color: '#4a9eff', fontSize: '11px'}}>S Standard</span></div>
    <div style={{textAlign: 'right'}}>20%</div><div style={{textAlign: 'right'}}>4 500,00</div><div style={{textAlign: 'right', fontWeight: 600}}>900,00</div><div>EUR</div><div style={{opacity: 0.55}}>—</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.18)', border: '1px solid rgba(255,159,10,0.45)', fontWeight: 600, color: '#fb923c', fontSize: '11px'}}>AE Autolq.</span></div>
    <div style={{textAlign: 'right'}}>0%</div><div style={{textAlign: 'right'}}>1 200,00</div><div style={{textAlign: 'right', fontWeight: 600}}>0,00</div><div>EUR</div><div style={{fontSize: '11px', opacity: 0.85}}><code>VATEX-EU-AE</code> · Autoliquidation</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.45)', fontWeight: 600, color: '#4ade80', fontSize: '11px'}}>E Exonérée</span></div>
    <div style={{textAlign: 'right'}}>0%</div><div style={{textAlign: 'right'}}>800,00</div><div style={{textAlign: 'right', fontWeight: 600}}>0,00</div><div>EUR</div><div style={{fontSize: '11px', opacity: 0.85}}><code>VATEX-FR-261</code> · Article 261 CGI</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '12px 14px', alignItems: 'center', background: 'rgba(74,158,255,0.05)', fontWeight: 700}}>
    <div style={{opacity: 0.85}}>Total</div><div></div><div style={{textAlign: 'right'}}>6 500,00</div><div style={{textAlign: 'right', color: '#4a9eff'}}>900,00</div><div>EUR</div><div></div>
  </div>
</div>

## Onglet Notes

Notes au niveau document (`BT-22`). Chaque note s'affiche sous forme de carte avec un **badge de préfixe** (par ex. `PMD`, `PMT`, `REG`) suivi du texte libre. Le libellé du préfixe vient de la liste de référence *note-types* ; survoler le badge l'affiche.

<div style={{display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span title="Conditions de paiement" style={{padding: '3px 9px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 700, color: '#4a9eff', whiteSpace: 'nowrap'}}>PMD</span>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Conditions de paiement — 30 jours nets, fin de mois. Pénalités de retard 3 × taux BCE ; indemnité forfaitaire de recouvrement 40 €.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span title="Mention réglementaire" style={{padding: '3px 9px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.45)', fontSize: '11px', fontWeight: 700, color: '#4ade80', whiteSpace: 'nowrap'}}>REG</span>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Membre d'un centre de gestion agréé — règlement par chèque accepté.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span title="Texte libre" style={{padding: '3px 9px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 700, opacity: 0.85, whiteSpace: 'nowrap'}}>AAI</span>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Commande PO-2026-042 confirmée par l'acheteur le 2026-04-15.</div>
  </div>
</div>

## Onglet Historique

Trois sections dans cet onglet :

### Barre d'actions en haut

| Bouton | Comportement |
|---|---|
| **Valider l'UBL** | Relance la validation XSD + Schematron sur le document UBL stocké en base. Le résultat (valide / avertissement / erreur) s'affiche en ligne, avec le détail si nécessaire. |
| **Modifier le statut** | Ouvre la *modale de modification de statut* — voir plus bas. |
| **Renvoyer** | Redépose le document UBL sur la Plateforme Agréée. Une confirmation est demandée avant exécution. |
| **Télécharger UBL** | Enregistre l'UBL archivé de la facture. |
| **Télécharger CII** | Affiché quand le document a une [post-transformation](../ubl-tools/post-transform.md) : l'UBL archivé converti à la demande, au nom de la post-transformation (*Télécharger fichier converti* quand elle n'a pas de nom). |

### Groupe Cycle de vie

Le **cycle de vie** est la trace d'audit de tous les statuts traversés par la facture. Chaque événement affiche :

- Le badge de statut (code + couleur de famille).
- Le libellé du statut et le message renvoyé par la plateforme.
- Pour les refus, détails facultatifs : code et libellé du motif de rejet, code et libellé de l'action attendue, note de statut additionnelle.

Le cycle de vie est en mode ajout seul — les événements sont créés par le job *Synchronisation → Récupérer les statuts* et ne sont jamais modifiés. Chaque événement porte toutefois un bouton **supprimer** (avec confirmation) : retirer un événement réaligne le statut de la facture sur le dernier restant — la correction manuelle propre quand la plateforme a livré un statut parasite (une *Refusée* qu'elle a ensuite dépassée, par exemple). Réservé par une action dédiée **Supprimer l'événement de cycle de vie** dans les [rôles](../configuration/security/roles.md).

Les trois champs de refus — **motif de rejet**, **action attendue** et **note de statut** — figurent aussi dans le catalogue de colonnes : on peut les épingler comme colonnes de liste et les filtrer depuis l'éditeur de [Vues de liste](../configuration/list-views.md) quand une équipe doit balayer ou trier par motif de refus sans ouvrir chaque facture.

<div style={{margin: '22px 0', position: 'relative', paddingLeft: '28px'}}>
  <div style={{position: 'absolute', left: '9px', top: '14px', bottom: '18px', width: '2px', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'}} />

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#94a3b8', border: '3px solid rgba(148,163,184,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(148,163,184,0.5)', background: 'rgba(148,163,184,0.1)', color: '#cbd5e1'}}>9900 UBL généré</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:14:02</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Document UBL construit à partir du XML source et enregistré dans NomaUBL.</div>
  </div>

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#60a5fa', border: '3px solid rgba(0,122,255,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>9906 Attente import PA</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:14:18</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Document déposé sur la Plateforme Agréée — accusé de réception en attente.</div>
  </div>

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#4ade80', border: '3px solid rgba(50,215,75,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>200 Déposée</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:15:47</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Acceptée par la plateforme d'adressage · accusé technique reçu.</div>
  </div>

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#4ade80', border: '3px solid rgba(50,215,75,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>202 Reçue par le destinataire</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 11:32:09</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Acme Industries SA confirme la réception sur sa Plateforme Agréée.</div>
  </div>

  <div style={{position: 'relative'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#fb923c', border: '3px solid rgba(255,159,10,0.25)', boxShadow: '0 0 0 4px rgba(255,159,10,0.08)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>207 En litige</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-25 14:08:51</span>
      <span style={{fontSize: '10px', opacity: 0.55, padding: '1px 6px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px'}}>statut courant</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, marginBottom: '8px'}}>Litige soulevé par le client — la quantité de la ligne 2 ne correspond pas au bordereau de livraison.</div>
    <div style={{fontSize: '11px', padding: '8px 10px', background: 'rgba(255,159,10,0.06)', borderLeft: '3px solid rgba(255,159,10,0.5)', borderRadius: '0 6px 6px 0', lineHeight: '1.6'}}>
      <div><b>Motif</b> <code style={{fontSize: '10px'}}>RR-016</code> — Quantité non conforme à la livraison</div>
      <div><b>Action attendue</b> <code style={{fontSize: '10px'}}>AC-04</code> — Émettre une facture rectificative</div>
      <div style={{opacity: 0.75, marginTop: '4px'}}>Note — <i>« Bordereau de livraison BL-2026-018 ne mentionne que 18 unités sur la ligne 2. »</i></div>
    </div>
  </div>
</div>

### Groupe Erreurs de validation

Liste les erreurs de validation (XSD / Schematron) enregistrées sur cette facture. Chaque ligne donne la sévérité, l'identifiant de la règle et le message correspondant. Vide quand la facture passe sans erreur.

## Onglet PDF

L'onglet PDF affiche un PDF de la facture généré à la volée (vue `<iframe>`). En bas de l'onglet :

| Bouton | Comportement |
|---|---|
| **E-mail** | Ouvre la *modale d'envoi d'e-mail* avec le PDF déjà attaché. |
| **Télécharger** | Télécharge le PDF sur l'ordinateur local. |

---
