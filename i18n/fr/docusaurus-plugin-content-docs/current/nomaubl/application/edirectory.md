---
title: E-Directory
description: "Rechercher une société française dans le référentiel INSEE par nom, SIREN ou SIRET, puis vérifier la joignabilité de chaque résultat dans l'annuaire PPF pour le dépôt de facture électronique."
keywords: [NomaUBL, e-directory, INSEE, SIREN, SIRET, PPF, recherche-entreprises, contrôle annuaire, joignable, adresse électronique, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# E-Directory

L'écran **E-Directory** permet de rechercher une société française dans le **référentiel INSEE** (`recherche-entreprises.api.gouv.fr`) et de vérifier si les SIREN / SIRET correspondants sont **joignables sur l'annuaire PPF** pour la réception de factures électroniques.

Utilisations courantes :

- Récupérer le SIREN / SIRET exact d'un client avant d'émettre une facture.
- Vérifier qu'un acheteur est bien enregistré sur la Plateforme Publique de Facturation (PPF) et prêt à recevoir une facture électronique.
- Diagnostiquer un rejet d'adressage (par ex. `REJ_ADR`) en confirmant l'état dans l'annuaire pour un identifiant donné.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé.

Les deux recherches sous-jacentes sont indépendantes et jouent des rôles distincts :

- **Recherche INSEE** — confirme l'existence de la société et fournit raison sociale, adresse, état administratif. API publique gratuite, aucun identifiant requis.
- **Contrôle annuaire PPF** — vérifie que le SIREN / SIRET est inscrit comme destinataire sur la Plateforme Publique de Facturation. Utilise les identifiants configurés dans *Configuration → Système → e-directory*.

Voir la page [Configuration → Système → e-directory](../configuration/system/edirectory.md) pour le contexte global — identifiants, rôles de recherche et distinction PPF / INSEE.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-pg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edir-pg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="edir-pg-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#edir-pg-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Directory</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche d'entreprise</text>
  <rect x="240" y="102" width="436" height="32" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="122" fill="#475569" fontSize="11" fontFamily="system-ui, sans-serif">Raison sociale, SIREN (9 chiffres) ou SIRET (14 chiffres)…</text>
  <rect x="686" y="102" width="94" height="32" rx="6" fill="url(#edir-pg-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="733" y="122" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">🔍 Rechercher</text>

  <rect x="240" y="156" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="177" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM · SIREN · SIRET · ADRESSE · ÉTAT · ANNUAIRE PPF</text>

  <rect x="240" y="194" width="540" height="48" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="213" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">ACME Manufacturing</text>
  <text x="252" y="231" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">123 456 789 · 12345678900012 · 12 rue de Rivoli, 75001 Paris</text>
  <rect x="612" y="200" width="80" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="652" y="213" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <rect x="700" y="200" width="74" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="737" y="213" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">✓ Joignable</text>

  <rect x="240" y="246" width="540" height="48" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="265" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">ACME Logistics</text>
  <text x="252" y="283" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">123 456 789 · 12345678900037 · 8 av. du Général Leclerc, 92100 Boulogne</text>
  <rect x="612" y="252" width="80" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="652" y="265" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <rect x="700" y="252" width="74" height="18" rx="9" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="737" y="265" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Non joign.</text>

  <rect x="240" y="298" width="540" height="48" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="317" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">ACME Old SARL</text>
  <text x="252" y="335" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">123 456 789 · 12345678900029 · 4 rue Lafayette, 75009 Paris</text>
  <rect x="608" y="304" width="84" height="18" rx="9" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="650" y="317" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Fermée</text>
  <rect x="700" y="304" width="74" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="737" y="317" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">— ignorée</text>

  <line x1="240" y1="364" x2="780" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="384" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 résultats · registre INSEE</text>

  <text x="240" y="416" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Le registre INSEE est interrogé en premier (API publique gratuite). La vérification dans l'annuaire PPF s'exécute sur chaque résultat avec les identifiants configurés sous Configuration → Système → e-directory.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul champ de recherche</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom · SIREN · SIRET — auto-détecté</text>
  <line x1="200" y1="115" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Badge Joignable PPF</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Joignable / Non / Fermée</text>
  <line x1="820" y1="216" x2="780" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">État administratif INSEE</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Active / Fermée — fermées ignorées</text>
  <line x1="200" y1="316" x2="240" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>
</svg>

---

## Déroulement d'une recherche

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="edir-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edir-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="edir-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="edir-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="60" width="170" height="80" rx="12" fill="url(#edir-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="105" y="90" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Requête</text>
  <text x="105" y="112" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">nom · SIREN · SIRET</text>
  <rect x="220" y="60" width="200" height="80" rx="12" fill="url(#edir-g-blue)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="320" y="90" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔍 INSEE</text>
  <text x="320" y="112" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">recherche-entreprises.api.gouv.fr</text>
  <rect x="450" y="60" width="170" height="80" rx="12" fill="url(#edir-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="535" y="90" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Tableau résultats</text>
  <text x="535" y="112" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Lignes SIREN / SIRET</text>
  <rect x="650" y="60" width="200" height="80" rx="12" fill="url(#edir-g-blue)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="750" y="90" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Annuaire PPF</text>
  <text x="750" y="112" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">/api/check-directory</text>
  <line x1="190" y1="100" x2="220" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#edir-arrow)"/>
  <text x="205" y="93" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Rechercher</text>
  <line x1="420" y1="100" x2="450" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#edir-arrow)"/>
  <text x="435" y="93" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">corresp.</text>
  <line x1="620" y1="100" x2="650" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#edir-arrow)"/>
  <text x="635" y="93" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">par ligne</text>
  <rect x="870" y="38" width="120" height="42" rx="9" fill="url(#edir-g-green)" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="930" y="56" fill="#4ade80" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ joignable</text>
  <text x="930" y="72" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">puce verte</text>
  <rect x="870" y="88" width="120" height="42" rx="9" fill="rgba(255,159,10,0.08)" stroke="#fb923c" strokeWidth="1.3"/>
  <text x="930" y="106" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚠ non trouvé</text>
  <text x="930" y="122" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">puce orange</text>
  <rect x="870" y="138" width="120" height="42" rx="9" fill="rgba(255,69,58,0.06)" stroke="#f87171" strokeWidth="1.3" strokeDasharray="3 2"/>
  <text x="930" y="156" fill="#f87171" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ erreur</text>
  <text x="930" y="172" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">puce rouge</text>
  <line x1="850" y1="95" x2="870" y2="65" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow-slate)"/>
  <line x1="850" y1="105" x2="870" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow-slate)"/>
  <line x1="850" y1="115" x2="870" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow-slate)"/>
</svg>

Les deux requêtes s'enchaînent : INSEE d'abord pour remplir les lignes, puis le contrôle PPF en parallèle, ligne par ligne. L'utilisateur voit le tableau se remplir en deux passes.

---

## Section de recherche

Un seul champ et un bouton en haut de la page.

| Élément | Comportement |
|---|---|
| **Champ de recherche** | Texte libre : nom de société, nom partiel, SIREN, SIRET ou toute combinaison. Validation par **Entrée** ou par le bouton **Rechercher**. |
| **Bouton Rechercher** | Déclenche la recherche INSEE. Désactivé pendant l'exécution et quand le champ est vide. |

La requête est envoyée à `recherche-entreprises.api.gouv.fr` côté serveur ; l'API retourne les sociétés correspondantes avec leurs données complètes.

---

## Tableau des résultats

Après la recherche, le tableau se remplit à raison d'une ligne par correspondance. Chaque ligne correspond soit à un SIREN (entité juridique), soit à un SIRET (établissement spécifique).

| Colonne | Description |
|---|---|
| **Type** | Badge coloré — `SIREN` (bleu, entité juridique) ou `SIRET` (gris, établissement). |
| **Identifiant** | SIREN à 9 chiffres ou SIRET à 14 chiffres. |
| **Nom** | Raison sociale (`nom_raison_sociale`). |
| **Adresse** | Adresse postale complète de l'établissement. |
| **État** | `Actif` (vert) quand l'établissement est administrativement actif ; `C` (rouge) quand il est cessé. |
| **Annuaire** | Résultat du contrôle annuaire PPF — voir ci-dessous. |

### États du contrôle annuaire

La colonne Annuaire se remplit automatiquement dès la fin de la recherche — un appel PPF par ligne. Pendant l'exécution, les lignes affichent un spinner. Chaque ligne aboutit ensuite à l'un de ces états :

<div style={{display: 'flex', flexDirection: 'column', gap: '6px', margin: '14px 0'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(50,215,75,0.08)', border: '1px solid rgba(50,215,75,0.3)'}}><span style={{color: '#4ade80', fontWeight: 700, fontSize: '14px'}}>✓</span><span style={{color: '#4ade80', fontWeight: 600, fontSize: '13px'}}>Joignable</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Inscrit sur le PPF, prêt à recevoir des factures électroniques.</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(255,69,58,0.08)', border: '1px solid rgba(255,69,58,0.3)'}}><span style={{color: '#f87171', fontWeight: 700, fontSize: '14px'}}>✗</span><span style={{color: '#f87171', fontWeight: 600, fontSize: '13px'}}>Introuvable</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Absent de l'annuaire PPF ; une facture serait retournée avec une erreur de routage (REJ_ADR).</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(255,159,10,0.08)', border: '1px solid rgba(255,159,10,0.3)'}}><span style={{color: '#fb923c', fontWeight: 700, fontSize: '14px'}}>⚠</span><span style={{color: '#fb923c', fontWeight: 600, fontSize: '13px'}}>Erreur</span><span style={{opacity: 0.7, fontSize: '12px'}}>— L'appel PPF a échoué (réseau, identifiants). Le message de l'API s'affiche à côté de l'icône.</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(120,120,120,0.08)', border: '1px solid rgba(255,255,255,0.1)'}}><span style={{opacity: 0.6, fontSize: '14px'}}>⟳</span><span style={{opacity: 0.6, fontWeight: 600, fontSize: '13px'}}>Chargement</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Appel PPF en cours ; la ligne aboutira à l'un des états ci-dessus.</span></div>
</div>

---

## Compteur de résultats

Au-dessus du tableau, un petit libellé indique le nombre de résultats renvoyés par INSEE pour la requête (par ex. `12 résultats`).

---

## Conseils & bonnes pratiques

- **Rechercher d'abord par nom, puis affiner.** INSEE retourne l'entité juridique (SIREN) et ses établissements (SIRET) — sélectionner le bon SIRET évite l'erreur courante « bon SIREN, mauvais établissement » à l'émission d'une facture.
- **Un Introuvable rouge n'est pas toujours définitif.** Un acheteur peut ne pas être encore enregistré sur le PPF ; lui demander de s'inscrire avant de retenter. L'état de l'annuaire évolue chaque jour à mesure que les sociétés s'inscrivent sur le PPF.
- **Vérifier l'état actif.** Un établissement cessé ne peut pas recevoir de facture, même s'il apparaît dans l'annuaire PPF. Toujours contrôler la colonne État avant de se fier à un mapping d'adresse électronique.
- **Pour des recherches en lot, préférer l'API.** Cette page traite une requête à la fois. Pour valider un annuaire de clients en une passe, appeler directement `/api/insee-search` et `/api/check-directory` — voir *References → API Reference* pour les schémas.
- **Une erreur d'annuaire indique souvent un problème d'identifiants.** Des `Erreur` répétées sur des lignes qui devraient répondre viennent typiquement d'identifiants PPF mal configurés dans *Configuration → Système → e-directory* — corriger là avant de relancer la recherche.
