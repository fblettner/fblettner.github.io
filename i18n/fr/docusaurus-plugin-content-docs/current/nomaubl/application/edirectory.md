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

  <text x="240" y="152" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résultats — une carte par société (SIREN)</text>

  <rect x="240" y="160" width="540" height="40" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="252" y="178" fill="#4a9eff" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <text x="270" y="177" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">ACME Manufacturing</text>
  <text x="270" y="192" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">SIREN 123 456 789 · 12 rue de Rivoli, 75001 Paris</text>
  <rect x="606" y="169" width="70" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="641" y="182" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <rect x="682" y="169" width="92" height="18" rx="9" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="728" y="182" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">5 lignes · 4 actives</text>

  <text x="264" y="222" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Établissements (INSEE)</text>
  <text x="264" y="238" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12345678900012 — 12 rue de Rivoli, 75001 Paris · Active</text>
  <text x="264" y="252" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12345678900037 — 8 av. du Général Leclerc, 92100 Boulogne · Active</text>

  <text x="264" y="280" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Adresses électroniques</text>
  <rect x="264" y="288" width="500" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">123456789 · SIREN</text>
  <text x="742" y="302" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif" fontWeight="700">✓ actif</text>
  <rect x="264" y="310" width="500" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">12345678900012 · SIREN+SIRET</text>
  <text x="742" y="324" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif" fontWeight="700">✓ actif</text>
  <rect x="264" y="332" width="500" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="346" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">123456789_FGX · code routage</text>
  <text x="742" y="346" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif" fontWeight="700">✕ désactivé</text>

  <line x1="240" y1="372" x2="780" y2="372" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="392" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 société · 2 établissements · 5 adresses électroniques</text>

  <text x="240" y="420" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">INSEE est interrogé en premier (API publique gratuite) ; un seul appel annuaire PPF par société liste ensuite chaque identifiant enregistré, avec les identifiants configurés sous Configuration → Système → e-directory.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul champ de recherche</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom · SIREN · SIRET — auto-détecté</text>
  <line x1="200" y1="115" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="820" y="164" width="164" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="179" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse annuaire</text>
  <text x="830" y="192" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes · combien actives</text>
  <line x1="820" y1="180" x2="778" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="20" y="322" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Adresses électroniques</text>
  <text x="30" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque identifiant · actif / désactivé</text>
  <line x1="200" y1="338" x2="262" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>
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

Les deux requêtes s'enchaînent : INSEE d'abord pour remplir les sociétés, puis **un seul appel annuaire PPF par société** pour lister ses identifiants enregistrés. Les résultats s'affichent en deux temps. Déplier ensuite une carte entreprise lance la [recherche Peppol](#peppol-directory) pour cette entreprise.

---

## Section de recherche

Un seul champ et un bouton en haut de la page.

| Élément | Comportement |
|---|---|
| **Champ de recherche** | Texte libre : nom de société, nom partiel, SIREN, SIRET ou toute combinaison. Validation par **Entrée** ou par le bouton **Rechercher**. |
| **Bouton Rechercher** | Déclenche la recherche INSEE. Désactivé pendant l'exécution et quand le champ est vide. |

La requête est envoyée à `recherche-entreprises.api.gouv.fr` côté serveur ; l'API retourne les sociétés correspondantes avec leurs données complètes.

---

## Résultats

Les résultats sont regroupés **par société** : une carte repliée par **SIREN**, avec la raison sociale, l'adresse du siège, l'état administratif INSEE et une **synthèse des adresses électroniques** — combien d'adresses électroniques le PPF détient pour la société et combien sont actives. Dépliez une carte pour révéler deux groupes :

### Établissements (INSEE)

Une liste repliable des établissements de la société — chaque **SIRET** avec son adresse et son état administratif, issus du registre INSEE. La recherche par SIREN ou SIRET liste **tous** les établissements de la société (une seconde interrogation INSEE par raison sociale complète ce que la recherche numérique omet).

### Adresses électroniques

Chaque identifiant enregistré pour le SIREN sur le PPF, **quelle que soit sa forme** — un SIREN, un SIREN + SIRET, un code de routage ou un suffixe — avec son état **actif / désactivé**. Les identifiants à suffixe, comme `422250845_FGX`, y figurent aussi — une forme que le contrôle ligne à ligne précédent ne savait pas faire apparaître.

<div style={{display: 'flex', flexDirection: 'column', gap: '6px', margin: '14px 0'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(50,215,75,0.08)', border: '1px solid rgba(50,215,75,0.3)'}}><span style={{color: '#4ade80', fontWeight: 700, fontSize: '14px'}}>✓</span><span style={{color: '#4ade80', fontWeight: 600, fontSize: '13px'}}>Actif</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Enregistré et joignable sur le PPF ; une facture adressée à cet identifiant est distribuée.</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(255,69,58,0.08)', border: '1px solid rgba(255,69,58,0.3)'}}><span style={{color: '#f87171', fontWeight: 700, fontSize: '14px'}}>✕</span><span style={{color: '#f87171', fontWeight: 600, fontSize: '13px'}}>Désactivé</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Enregistré mais pas joignable actuellement ; l'adresser renverrait une erreur de routage (REJ_ADR).</span></div>
</div>

Le listage passe par l'endpoint `directory-check-siren` du connecteur, qui renvoie les lignes complètes avec un mappage de réponse par endpoint (formats ATGP, Yooz et Esker pris en charge — y compris les indicateurs numériques comme le `HasAssignedPlatform` 1/0 d'Esker, en plus de true/false). Quand cet endpoint n'est pas configuré, la page **l'indique** au lieu de deviner — réglez-le sous [Configuration → Système → e-directory](../configuration/system/edirectory.md). Le contrôle annuaire au moment du traitement est inchangé ; l'ancien endpoint `directory-check-siret` est obsolète.

### Annuaire Peppol \{#peppol-directory\}

Déplier une carte entreprise interroge aussi le **réseau Peppol public** — aucun compte requis. Un groupe *Annuaire Peppol* liste chaque **participant** enregistré pour l'entreprise, avec son nom, sa **date d'enregistrement** et la **plateforme qui l'opère** — la PA (par ex. Pennylane) avec son identifiant de siège Peppol, résolue via la découverte officielle **SML/SMP**. Les URL du point d'accès et du SMP se trouvent dans l'infobulle de la plateforme.

Les participants sont trouvés de deux façons :

- les **fiches** de l'[annuaire Peppol](https://directory.peppol.eu) qui correspondent au SIREN ;
- des **interrogations directes du SML** pour chaque identifiant qu'une entreprise française peut détenir — publier une fiche dans l'annuaire est facultatif, et certaines plateformes ne le font pas. Sont interrogés le SIREN sous les schémas `0225` et `0002`, chaque adresse inscrite dans l'annuaire PPF (simple, suffixée, SIRET, routée) sous `0225`, et le SIRET de chaque établissement sous `0009`. Un participant trouvé de cette façon affiche **sans fiche annuaire** à la place de sa date d'enregistrement.

| Colonne | Contenu |
|---|---|
| **Participant** | L'identifiant de participant Peppol (ICD + valeur, par ex. `0225:80320631700015`). |
| **Plateforme (PA)** | La plateforme qui opère le participant, avec son identifiant de siège. Quand le certificat du SMP ne peut pas être lu, l'hôte SMP suivi de *SMP non joignable*, la raison dans l'infobulle ; `non résolu` avec la raison quand le SML n'a donné aucun SMP. Avec *Resolve platform via SMP* = `N`, l'hôte SMP. |
| **Enregistré le** | La date d'enregistrement Peppol du participant — *sans fiche annuaire* pour un participant trouvé uniquement par le SML. |

La recherche s'exécute une fois pour chaque carte entreprise ouverte — y compris une carte restée ouverte depuis une recherche précédente — et elle est aussi disponible en `POST /api/peppol-lookup` pour les intégrations (voir la [référence API](/nomaubl/api-reference)). Un participant sans plateforme joignable affiche quand même son enregistrement et son nom. Le journal serveur liste chaque participant non résolu avec sa raison. Une indisponibilité de l'annuaire Peppol ne masque plus les participants trouvés par le SML.

La page entière est aussi accessible en un seul appel : `GET /api/e-directory/search?q=…` (ou `POST` avec `{q, peppol}`) renvoie les entreprises INSEE qui correspondent à un nom, un SIREN ou un SIRET, avec siège et établissements, les lignes de l'annuaire PPF de chaque entreprise et, avec `peppol=true`, ses participants Peppol.

---

## Flux réseau (firewall) \{#network-flows\}

Tous les appels externes de l'E-Directory sont faits **côté serveur** — depuis le serveur NomaUBL, pas le navigateur de l'utilisateur — les règles firewall portent donc sur le trafic sortant du serveur. Hormis le connecteur PA, les destinations sont :

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-fw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="150" width="200" height="100" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="120" y="190" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Serveur NomaUBL</text>
  <text x="120" y="212" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">trafic sortant uniquement</text>
  <line x1="300" y1="20" x2="300" y2="380" stroke="#f87171" strokeWidth="1.4" strokeDasharray="6 4"/>
  <text x="300" y="396" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">firewall</text>
  <line x1="222" y1="200" x2="372" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="30" width="604" height="44" rx="9" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="392" y="48" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche d'entreprise (INSEE)</text>
  <text x="392" y="65" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">recherche-entreprises.api.gouv.fr</text>
  <text x="966" y="57" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">HTTPS 443</text>
  <line x1="222" y1="200" x2="372" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="88" width="604" height="44" rx="9" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="392" y="106" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Annuaire Peppol — fiches</text>
  <text x="392" y="123" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">directory.peppol.eu</text>
  <text x="966" y="115" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">HTTPS 443</text>
  <line x1="222" y1="200" x2="372" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="146" width="604" height="44" rx="9" fill="#0d1220" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="392" y="164" fill="#4ade80" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SML — zone principale (OpenPeppol)</text>
  <text x="392" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*.participant.sml.prod.tech.peppol.org</text>
  <text x="966" y="173" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">DNS 53 · NAPTR</text>
  <line x1="222" y1="200" x2="372" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="204" width="604" height="44" rx="9" fill="#0d1220" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="392" y="222" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SML — zone de repli (ancien SML de la CE)</text>
  <text x="392" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*.edelivery.tech.ec.europa.eu</text>
  <text x="966" y="231" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">DNS 53 · NAPTR</text>
  <line x1="222" y1="200" x2="372" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="262" width="604" height="44" rx="9" fill="#0d1220" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="392" y="280" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résolveurs publics — sur option (Public DNS fallback = Y)</text>
  <text x="392" y="297" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">8.8.8.8 · 1.1.1.1</text>
  <text x="966" y="289" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">DNS 53 · UDP/TCP</text>
  <line x1="222" y1="200" x2="372" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="320" width="604" height="44" rx="9" fill="#0d1220" stroke="#a78bfa" strokeWidth="1.2"/>
  <text x="392" y="338" fill="#a78bfa" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SMP de la plateforme de chaque participant — Resolve platform via SMP = Y</text>
  <text x="392" y="355" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">hôte dynamique, par ex. smp.pennylane.com</text>
  <text x="966" y="347" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">HTTPS 443</text>
</svg>

| Objet | Destination | Port / Protocole |
|---|---|---|
| Recherche d'entreprise (INSEE) | `recherche-entreprises.api.gouv.fr` | HTTPS 443 |
| Annuaire Peppol (fiches) | `directory.peppol.eu` | HTTPS 443 |
| Résolution SML Peppol — **zone principale** (OpenPeppol) | Requêtes DNS NAPTR sur `*.iso6523-actorid-upis.participant.sml.prod.tech.peppol.org` | DNS 53 via le résolveur du serveur |
| Résolution SML Peppol — **zone de repli** (ancien SML de la Commission européenne) | Requêtes DNS NAPTR sur `*.iso6523-actorid-upis.edelivery.tech.ec.europa.eu` | DNS 53 via le résolveur du serveur |
| Résolveurs DNS publics — uniquement avec *Public DNS fallback* = `Y`, quand le résolveur du serveur ne répond pas | `8.8.8.8`, `1.1.1.1` | DNS 53 (UDP et TCP) |
| SMP Peppol (résolution de la plateforme) — uniquement avec *Resolve platform via SMP* = `Y` | dynamique — le SMP de la plateforme de chaque participant (par ex. `smp.pennylane.com`) | HTTPS 443 |

Ce qui compte pour les règles :

- **INSEE et `directory.peppol.eu` sont des noms d'hôte fixes** — faciles à autoriser. L'entrée INSEE couvre aussi la recherche client de la modale facture et la recherche [Corriger destinataire](./invoices.md#fix-buyer) (même API).
- **Le SML a changé de zone en 2026.** OpenPeppol a repris le Service Metadata Locator, et les enregistrements des participants se trouvent désormais dans la zone `participant.sml.prod.tech.peppol.org`. NomaUBL l'interroge en premier et garde l'ancienne zone `edelivery.tech.ec.europa.eu` en repli. Une politique DNS qui n'autorisait que l'ancienne zone doit ajouter la nouvelle — sinon la plupart des participants ne sont plus trouvés.
- **L'étape SML est uniquement DNS** — pas de HTTP. Si le serveur résout déjà le DNS public via le résolveur d'entreprise, il n'y a rien à ouvrir. Certains résolveurs d'entreprise bloquent ou altèrent les requêtes NAPTR : laisser le résolveur d'entreprise relayer les requêtes NAPTR des deux zones, ou passer **Public DNS fallback** à `Y` dans les [réglages e-directory](../configuration/system/edirectory.md#peppol-lookup) et autoriser le DNS sortant (port 53, UDP et TCP) vers `8.8.8.8` et `1.1.1.1`. Ce repli est **désactivé par défaut**. Une réponse *nom inexistant* du résolveur du serveur est définitive — un identifiant non enregistré n'est pas réessayé ailleurs — et un résolveur public défaillant est écarté pour le reste de la recherche.
- **Le SMP ne peut pas être autorisé à l'avance** — c'est le domaine de la plateforme de chaque acheteur (Pennylane, Esker, Yooz… un par participant) ; la résolution de la plateforme demande donc une autorisation large *HTTPS 443 sortant* pour fonctionner de façon générale. Si ce n'est pas acceptable, passer **Resolve platform via SMP** à `N` : la recherche s'arrête à la réponse du SML et la colonne *Plateforme* affiche l'hôte SMP (`smp.pennylane.com`), qui désigne déjà la plateforme — seuls son nom officiel et son identifiant de siège manquent.
- **Diagnostic.** Quand `directory.peppol.eu` est injoignable, les participants trouvés par les interrogations SML restent affichés. Si rien n'est trouvé du tout, la section Peppol indique *Peppol Directory unreachable (directory.peppol.eu) — check outbound HTTPS/firewall*.

---

## Compteur de résultats

Au-dessus des résultats, un petit libellé indique le nombre de sociétés renvoyées par INSEE pour la requête (par ex. `12 résultats`).

---

## Conseils & bonnes pratiques

- **Rechercher d'abord par nom, puis affiner.** INSEE retourne l'entité juridique (SIREN) et ses établissements (SIRET) — sélectionner le bon SIRET évite l'erreur courante « bon SIREN, mauvais établissement » à l'émission d'une facture.
- **Une ligne désactivée n'est pas toujours définitive.** Un acheteur peut ne pas être encore enregistré, ou un identifiant précis pas encore activé ; lui demander de s'inscrire avant de retenter. L'état de l'annuaire évolue chaque jour à mesure que les sociétés s'inscrivent sur le PPF.
- **Cibler l'identifiant exact, pas seulement le SIREN.** Les lignes d'adresses électroniques montrent quelle forme est réellement joignable — un SIREN seul, un SIREN + SIRET ou un code à suffixe. Adressez la facture à une ligne **active** ; une société peut en avoir plusieurs, seules certaines actives.
- **Vérifier l'état de l'établissement.** Un établissement cessé ne peut pas recevoir de facture, même si la société apparaît dans l'annuaire. Contrôler l'état INSEE de l'établissement avant de se fier à un mapping d'adresse électronique.
- **Si les lignes n'apparaissent pas, câbler l'endpoint.** Une liste d'annuaire vide avec la note « non configuré » signale un connecteur sans endpoint `directory-check-siren` — à régler dans *Configuration → Système → e-directory*, avec le mappage de réponse de la plateforme (ATGP, Yooz, Esker). La liste est lue dans le **Response field** de l'endpoint (`records` pour Esker, `results`…).
