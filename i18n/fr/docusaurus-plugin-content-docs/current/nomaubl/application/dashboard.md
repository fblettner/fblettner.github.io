---
title: Tableau de bord
description: "Page d'accueil de NomaUBL — compteurs de factures par statut sur une plage de dates choisie, nombre d'erreurs d'intégration et raccourcis rapides vers les pages courantes."
keywords: [NomaUBL, tableau de bord, factures, statistiques, compteurs de statut, erreurs d'intégration, raccourcis, plage de dates, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Tableau de bord

Le **Tableau de bord** est la page d'accueil de NomaUBL. Elle s'ouvre par défaut après connexion et donne une vue d'ensemble immédiate de la plateforme : compteurs de factures par statut, nombre d'erreurs d'intégration et raccourcis vers les pages les plus utilisées.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé. Les chiffres proviennent de la base NomaUBL locale et reflètent donc ce que NomaUBL a traité et persisté, pas directement ce que contient le système source ou la Plateforme Agréée.

---

## Vue d'ensemble des factures

### Filtre de plage de dates

Un filtre de plage de dates est placé au-dessus de la grille de compteurs. Il restreint les compteurs aux factures dont la **dernière mise à jour** se situe dans la fenêtre choisie. Le filtre propose des préréglages :

| Préréglage | Fenêtre |
|---|---|
| **Today** | Aujourd'hui uniquement. |
| **Yesterday** *(défaut)* | Le jour précédent complet. |
| **Last 7 days** | Les sept derniers jours complets, jusqu'à hier. |
| **This month** | Le mois en cours, du 1er à aujourd'hui. |
| **Last month** | Le mois précédent complet. |
| **Custom range** | Saisie manuelle des dates **From** et **To**. |

Le filtre n'affecte que les compteurs de factures ; le compteur d'erreurs d'intégration reste toujours le total non rattaché.

### Cartes compteurs

Chaque carte affiche :

- Le **libellé du statut** (par ex. *Déposée*, *Refusée*, *En attente*) — texte issu de la liste de référence *statuses*.
- Le **nombre de factures** dans ce statut pour la fenêtre choisie.
- Une **bordure de couleur** qui suggère la famille du statut.
- Une carte **Total** placée en premier additionne les compteurs de tous les statuts.

Aperçu visuel d'une rangée typique :

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px', margin: '20px 0'}}>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Total</div><div style={{fontSize: '28px', fontWeight: 700}}>1 247</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Déposée</div><div style={{fontSize: '28px', fontWeight: 700}}>982</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>En attente</div><div style={{fontSize: '28px', fontWeight: 700}}>184</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>En litige</div><div style={{fontSize: '28px', fontWeight: 700}}>52</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Refusée</div><div style={{fontSize: '28px', fontWeight: 700}}>29</div></div>
</div>

#### Légende des couleurs de bordure

| Couleur | Famille | Exemples |
|---|---|---|
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.18)'}}></span> **Vert** | Validés / Déposés / Approuvés | `200` Déposée, `201` Acquittée, `206` Approuvée partiellement |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.18)'}}></span> **Bleu** | En attente / En cours | `9906` Attente d'import PA, `203` En traitement |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.18)'}}></span> **Orange** | Avertissement / Partiel / E-mail | `207` En litige, `208` Suspendue |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.18)'}}></span> **Rouge** | Erreur / Rejet / Refus | `210` Refusée, `213` Rejetée, `9907` Rejet PA |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(120,120,120,0.12)'}}></span> Neutre | Autres statuts | Tout statut non couvert par les règles ci-dessus |

### Navigation au clic

Cliquer sur une carte compteur ouvre la page *Application → E-Invoicing* avec le filtre correspondant déjà appliqué :

<svg viewBox="0 0 1000 160" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dash-ct-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="dash-ct-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="dash-ct-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="40" width="210" height="80" rx="12" fill="url(#dash-ct-g-blue)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="125" y="70" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📊 Carte compteur</text>
  <text x="125" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Déposée · 982</text>
  <rect x="265" y="40" width="210" height="80" rx="12" fill="url(#dash-ct-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="370" y="76" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔗 Application →</text>
  <text x="370" y="96" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">E-Invoicing</text>
  <rect x="510" y="40" width="210" height="80" rx="12" fill="url(#dash-ct-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="615" y="70" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Plage de dates</text>
  <text x="615" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">+ Statut = Déposée</text>
  <rect x="755" y="40" width="225" height="80" rx="12" fill="url(#dash-ct-g-blue)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="867" y="70" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Liste filtrée</text>
  <text x="867" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">982 lignes correspondantes</text>
  <line x1="230" y1="80" x2="265" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#dash-ct-arrow)"/>
  <text x="247" y="73" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">clic</text>
  <line x1="475" y1="80" x2="510" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#dash-ct-arrow)"/>
  <line x1="720" y1="80" x2="755" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#dash-ct-arrow)"/>
</svg>

| Carte cliquée | Filtre appliqué sur E-Invoicing |
|---|---|
| **Total** | Plage de dates uniquement (pas de filtre statut). |
| Carte d'un statut | Plage de dates + ce code de statut. |

La navigation au clic n'est active que sur les installations en licence complète ; en licence restreinte, les cartes affichent les chiffres sans déclencher la navigation.

---

## Erreurs d'intégration

Une carte compteur unique intitulée **Erreurs de validation non rattachées** se trouve sous la grille des factures. Elle compte chaque entrée de la table de validation (`F564236`) sans ligne correspondante dans la table d'en-têtes (`F564231`) — typiquement des erreurs de transformation ayant empêché la création de l'en-tête de facture.

Le compte est global (pas de filtre date) et la bordure est toujours rouge. Cliquer sur la carte ouvre *Application → Integration Errors*. Une valeur non nulle s'affiche en rouge pour signaler qu'une action est nécessaire.

---

## Raccourcis rapides

Trois boutons d'accès direct sont placés au bas de la page.

| Bouton | Comportement |
|---|---|
| **Créer une facture** | Ouvre la modale de création de facture directement sur le tableau de bord — même modale que sur la page E-Invoicing. Après enregistrement, l'utilisateur est redirigé vers *Application → E-Invoicing*. |
| **Référence des statuts** | Ouvre *References → Status Reference* — le catalogue de tous les codes de statut du cycle de vie. |
| **Codes motifs** | Ouvre *References → Reason Codes* — le catalogue des codes de refus / rejet / irrégularité. |

Le bouton *Créer une facture* est désactivé en licence restreinte ; les deux raccourcis vers les références fonctionnent sur toute licence.

---

## Conseils & bonnes pratiques

- **Aligner la plage de dates sur le besoin opérationnel.** *Yesterday* convient à une routine de surveillance matinale ; *This month* à une vue d'ensemble financière. *Custom range* couvre la clôture mensuelle ou les fenêtres d'incident spécifiques.
- **Une bordure rouge sur une carte est un indicateur de santé immédiat.** Les statuts du côté erreur du cycle de vie s'accumulent davantage en cas de rupture d'intégration ; la couleur rend le pic visible sans avoir à lire les libellés.
- **Surveiller le compteur d'erreurs d'intégration.** Une valeur non nulle indique qu'au moins une facture n'a pas franchi la validation — à examiner dans *Application → Integration Errors* avant la prochaine exécution en lot.
- **La navigation au clic épargne une étape.** Atteindre la même vue dans *Application → E-Invoicing* en appliquant les filtres à la main demande 3 à 4 clics ; les cartes du tableau de bord y mènent en un seul.
- **Marquer le tableau de bord comme favori.** C'est la page d'arrivée naturelle au quotidien ; les favoris survivent à l'expiration de session, donc la prochaine connexion atterrit sur la même vue.
