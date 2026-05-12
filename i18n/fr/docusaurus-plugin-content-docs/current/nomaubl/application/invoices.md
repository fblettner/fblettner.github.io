---
title: E-Invoicing
description: "Liste opérationnelle des factures NomaUBL — recherche, filtrage et inspection des factures ; consultation détaillée (parties, lignes, TVA, cycle de vie, PDF) ; édition, copie, redépôt ou envoi par e-mail ; mise à jour manuelle d'un statut."
keywords: [NomaUBL, e-invoicing, factures, liste, filtre, recherche, statut, détail, cycle de vie, PDF, e-mail, mise à jour de statut, redépôt, édition, copie, RFE, Réforme de la Facturation Électronique, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# E-Invoicing

L'écran **E-Invoicing** est la page principale de NomaUBL — le point d'entrée du workflow officiel de la *Réforme de la Facturation Électronique* (RFE). Il liste toutes les factures traitées par la plateforme et propose des filtres complets, une vue détaillée selon le statut, et les actions du quotidien : éditer, copier, supprimer, changer manuellement un statut, envoyer le PDF au client par e-mail, redéposer sur la Plateforme Agréée.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Toutes les factures visibles ici ont été enregistrées dans la base NomaUBL locale après passage dans le pipeline de traitement.

---

## Barre d'outils

La barre d'outils au-dessus du tableau combine filtre de dates, recherche texte, puces de statut et raccourcis.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 Hier</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Doc</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Dct</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Kco</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Contrat</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Nom du client</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>BAR ▾</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>↻ Rafraîchir</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600, border: '1px solid #4a9eff'}}>+ Nouvelle facture</span>
  </div>
</div>

### Plage de dates

Le filtre de dates à gauche s'applique à la **dernière mise à jour** de chaque facture. Préréglage par défaut : *Hier*. Autres préréglages : *Aujourd'hui*, *7 derniers jours*, *Ce mois*, *Mois dernier* et *Plage personnalisée* (saisie manuelle des dates de début et de fin).

### Filtres texte

Chaque champ filtre la liste à la saisie — la recherche se déclenche après une courte pause :

| Champ | Critère |
|---|---|
| **Doc** | Numéro de document interne (par ex. `12345`). |
| **Dct** | Code du type de document (par ex. `RI`, `RN`). |
| **Kco** | Code société (par ex. `00070`). |
| **Contrat** | Référence du contrat porté par la facture. |
| **Nom du client** | Nom de la partie acheteur. |

### Sélecteur de routage BAR

Une déroulante distincte filtre par code **BAR** (`B2B`, `B2G`, `B2BINT`, `B2C`, `OUTOFSCOPE`, `ARCHIVEONLY`, `DOCUMENT`) — la classification de canal documentée dans *UBL Defaults → Document Type / BAR Routing*.

### Puces de statut

À droite, une rangée de **puces de statut** affiche un badge par statut présent dans la plage de dates. Chaque puce indique le libellé du statut, son compteur et une couleur de famille. Cliquer sur une puce active un filtre sur la liste ; un nouveau clic le retire.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '14px 0 4px'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>Déposée <span style={{opacity: 0.65}}>(982)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>En attente <span style={{opacity: 0.65}}>(184)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>En litige <span style={{opacity: 0.65}}>(52)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>Refusée <span style={{opacity: 0.65}}>(29)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', opacity: 0.7}}>✕ Effacer le filtre</span>
</div>

### Effacer les filtres

Quand au moins un filtre est actif, une puce **✕ Effacer le filtre** apparaît en fin de rangée. Elle efface tous les filtres sauf la plage de dates.

### Rafraîchir et Nouvelle facture

Deux boutons sont placés à droite :

| Bouton | Comportement |
|---|---|
| **Rafraîchir** (flèche circulaire) | Relance la requête courante sans modifier les filtres. |
| **+ Nouvelle facture** | Ouvre la *modale de création / d'édition de facture*. Masqué pour les sessions en lecture seule. |

---

## Liste des factures

Le tableau affiche une ligne par facture. Tri par défaut : numéro de document décroissant. Cliquer sur un en-tête de colonne pour trier.

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
| **Numéro UBL** | Numéro de facture tel qu'il apparaît dans le document UBL généré. |
| **Date d'émission** | BT-2 issu du document UBL. |
| **Client** | Nom de la partie acheteur. |
| **Total HT** | Montant total hors taxes. |
| **Total TTC** | Montant total toutes taxes comprises. |
| **Devise** | Code ISO 4217. |
| **Statut** | Badge de statut — code + libellé, coloré par famille. |
| **Revue** *(2026.05.9)* | **Badge de drapeau de revue** coloré, alimenté par `UHALRTPSD`. Allumé quand la ligne demande une attention opérateur — typiquement un statut que le dispatcher n'a pas su résoudre tout seul, une édition manuelle marquée à l'enregistrement, ou un système aval qui a balisé la ligne pour vérification. Vide quand le drapeau est libre. La colonne se balaie d'un coup d'œil : quelques badges jaunes dans une page sinon verte indiquent précisément par où commencer. |

Un sélecteur de taille de page en bas du tableau est réglé sur 50 par défaut ; des valeurs jusqu'à 500 sont acceptées. Le nombre total de factures correspondant aux filtres apparaît à côté de la pagination.

### Navigation au clic

Cliquer sur une ligne ouvre la **modale de détail** de la facture. Toutes les actions de la page sont unitaires : pas de sélection multi-lignes.

### Export

Un bouton **Exporter** dans la barre d'outils exporte la vue courante (filtres compris) au format CSV sous le nom `invoices.csv`.

---

## Modale de détail

Cliquer sur une ligne ouvre une modale qui contient sept onglets en haut : **Résumé**, **Parties**, **Lignes**, **TVA**, **Notes**, **Historique**, **PDF**. Le titre de la modale affiche le triplet `DOC / DCT / KCO`. Un **bouton plein écran** dans l'en-tête bascule entre vue fenêtrée et vue plein écran.

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

### Onglet Résumé *(défaut)*

L'onglet Résumé affiche un **badge de statut** coloré en haut, suivi des **boutons d'action** (Modifier l'UBL, Copier, Supprimer) à droite.

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

Le reste de l'onglet Résumé se présente sous forme de groupes dépliables :

- **Document** — DOC / DCT / KCO, numéro UBL, type de facture, profile ID, références contrat / acheteur / commande / projet, référence comptable.
- **Dates et devise** — date d'émission, date d'échéance, devise, période de début / fin.
- **Montants** — total HT, total TTC, montant à payer.
- **Paiement** — code de moyen de paiement, IBAN, nom du compte, BIC, identifiant de paiement, conditions de paiement.
- **Remises / charges au niveau document** — remises ou charges au niveau du document avec type, motif, montant, catégorie de TVA.

### Onglet Parties

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

### Onglet Lignes

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
| **Prix unitaire** | Prix unitaire hors taxes. |
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

Quand plusieurs lignes partagent la même livraison ou les mêmes références documentaires (`BT-128`), un **en-tête de livraison** ou un **en-tête de référence documentaire** apparaît une seule fois en haut du groupe, au lieu d'être répété sur chaque ligne.

### Onglet TVA

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

### Onglet Notes

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

### Onglet Historique

Trois sections dans cet onglet :

#### Barre d'actions en haut

| Bouton | Comportement |
|---|---|
| **Valider l'UBL** | Relance la validation XSD + Schematron sur le document UBL stocké en base. Le résultat (valide / avertissement / erreur) s'affiche en ligne, avec le détail si nécessaire. |
| **Modifier le statut** | Ouvre la *modale de modification de statut* — voir plus bas. |
| **Renvoyer** | Redépose le document UBL sur la Plateforme Agréée. Une confirmation est demandée avant exécution. |

#### Groupe Cycle de vie

Le **cycle de vie** est la trace d'audit de tous les statuts traversés par la facture. Chaque événement affiche :

- Le badge de statut (code + couleur de famille).
- Le libellé du statut et le message renvoyé par la plateforme.
- Pour les refus, détails facultatifs : code et libellé du motif de rejet, code et libellé de l'action attendue, note de statut additionnelle.

Le cycle de vie est en mode ajout seul — les événements sont créés par le job *Synchronisation → Récupérer les statuts* et ne sont jamais modifiés.

<div style={{margin: '22px 0', position: 'relative', paddingLeft: '28px'}}>
  <div style={{position: 'absolute', left: '9px', top: '14px', bottom: '18px', width: '2px', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'}} />

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#94a3b8', border: '3px solid rgba(148,163,184,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(148,163,184,0.5)', background: 'rgba(148,163,184,0.1)', color: '#cbd5e1'}}>9900 UBL généré</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:14:02</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Document UBL construit à partir du XML source et persisté dans NomaUBL.</div>
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

#### Groupe Erreurs de validation

Liste les erreurs de validation (XSD / Schematron) enregistrées sur cette facture. Chaque ligne donne la sévérité, l'identifiant de la règle et le message correspondant. Vide quand la facture passe sans erreur.

### Onglet PDF

L'onglet PDF affiche un PDF de la facture généré à la volée (vue `<iframe>`). En bas de l'onglet :

| Bouton | Comportement |
|---|---|
| **E-mail** | Ouvre la *modale d'envoi d'e-mail* avec le PDF déjà attaché. |
| **Télécharger** | Télécharge le PDF sur l'ordinateur local. |

---

## Modales d'action

### Modale de modification de statut

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

### Modale d'envoi d'e-mail

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

### Modale de création / édition de facture

Ouverte depuis **+ Nouvelle facture** dans la barre d'outils, ou depuis les boutons **Modifier l'UBL** / **Copier** de l'onglet Résumé. Permet de créer une facture vierge ou de modifier une facture existante. La modale prend l'apparence d'une facture imprimable. L'utilisateur remplit le formulaire ; à l'enregistrement, NomaUBL génère le document UBL correspondant.

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
- **En-tête** — dates d'émission / échéance, devise, période de début / fin.
- **Fournisseur** — alimenté depuis l'annuaire des fournisseurs (*UBL Defaults → Suppliers / Companies*) ; modifiable par facture.
- **Client** — saisie manuelle ou recherche via l'annuaire PPF.
- **Livraison** — groupe livraison facultatif.
- **Paiement** — code de moyen de paiement, IBAN, BIC, mandat, conditions.
- **Remises / charges** — remises / charges au niveau document.
- **Notes** — notes libres par préfixe `BT-22`.
- **Lignes** — lignes de facture avec article, quantité, unité, prix, remises, propriétés.
- **Récapitulatif TVA** — calculé automatiquement depuis les lignes (lecture seule — les modifications de ligne s'y reflètent).
- **Totaux** — calculés automatiquement (lecture seule).

Le bouton **Enregistrer** en bas valide la saisie, écrit en base, génère le document UBL et le dépose sur la PA selon les paramètres du template *e-invoicing*. La modale se ferme après un enregistrement réussi.

Un **bouton plein écran** dans l'en-tête bascule entre fenêtré et plein écran — pratique pour les factures qui ont beaucoup de lignes.

### Confirmation de redépôt

Le bouton **Renvoyer** (dans l'onglet Historique, ou via le bandeau Actions vendeur sur les statuts `9904` / `9907`) ouvre une confirmation avant de redéposer le document UBL sur la Plateforme Agréée. Après confirmation, la facture est redéposée. Un bandeau en ligne affiche le succès ou l'erreur renvoyée par la PA. Le cycle de vie est mis à jour pour refléter le nouveau dépôt.

---

## Conseils & bonnes pratiques

- **Commencer par la plage de dates.** *Hier* (défaut) convient au pointage du matin ; *Plage personnalisée* couvre la clôture mensuelle. Les autres filtres s'appliquent en plus.
- **Les puces de statut sont le filtre le plus rapide.** Une puce rouge à compteur non nul est en général le bon point de départ pour traiter les exceptions.
- **Le cycle de vie (onglet Historique) est la source de vérité.** Il enregistre tous les statuts traversés, avec messages, motifs de rejet et actions attendues — c'est l'endroit pour instruire un litige ou retrouver une décision côté PA.
- **Utiliser le bandeau Actions vendeur.** Les actions proposées sur `205` / `206` / `207` / `208` / `210` / `213` / `9904` / `9907` sont les étapes recommandées par la plateforme. Elles ramènent un workflow multi-étapes (retrouver le client, rédiger l'avoir, etc.) à un seul clic, à condition que le connecteur soit configuré.
- **N'utiliser Modifier le statut qu'en cas de besoin.** Un *Modifier le statut → DB* manuel désynchronise le dossier local de la PA. À réserver aux nettoyages après restauration de sauvegarde ou aux statuts non couverts par le job de cycle de vie.
- **Modifier l'UBL puis Enregistrer** est la méthode standard pour corriger une facture — l'enregistrement réécrit la facture en base et la redépose sur la PA. Éviter d'éditer directement le XML source via *Outils UBL → XML Viewer*, sauf si le fichier sur disque est la source de référence.
- **Utiliser Copier pour la facturation récurrente.** La modale est pré-remplie avec toutes les parties, les lignes et la TVA ; seuls le numéro, les dates et les éventuels écarts restent à modifier.
