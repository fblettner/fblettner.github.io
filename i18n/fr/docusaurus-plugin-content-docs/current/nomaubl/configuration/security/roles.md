---
title: Rôles
description: "Gestion des rôles NomaUBL : droits en lignes dans F564254, répartis sur quatre onglets — Accès (pages + fonctionnalités), Actions (liste blanche par bouton), Périmètre des données (sociétés + filtres de lignes), Membres. Liste sous forme de cartes avec duplication / suppression, libellés de pages traduits depuis le menu, droits granulaires par action et filtres de lignes par colonne qui s'appliquent aux listes, aux requêtes par ligne et au flux PDF généré."
keywords: [NomaUBL, rôles, permissions, RBAC, F564254, PMROLE, PMCRAPPID, droits sur les pages, liste blanche d'actions, filtre de lignes, accès paramètres, lecture seule, sociétés, dupliquer un rôle, JD Edwards, SAP, NetSuite]
---

# Rôles

Cet écran gère le **contrôle d'accès par rôle** de NomaUBL. Chaque rôle regroupe quatre familles de droits :

- La liste des **pages** accessibles au rôle.
- Une **liste blanche d'actions** — les opérations autorisées (Modifier, Supprimer, Renvoyer, Pousser un statut…).
- Un **périmètre des données** — les sociétés auxquelles le rôle est limité **et** d'éventuels filtres de lignes qui réduisent encore l'ensemble visible par valeur de colonne.
- Les **membres** affectés au rôle.

Les rôles s'appliquent à toute l'application et sont indépendants du système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Les rôles par défaut (`admin`, `viewer`) sont créés par l'action **Initialiser la base** dans *Database Connectors → NomaUBL*.

---

## Ouvrir l'éditeur

- Menu → **Configuration → Security → Rôles**.
- La page affiche chaque rôle sous forme de carte. Cliquer sur une carte ouvre le panneau d'édition juste en dessous. Pour partir de zéro, utiliser **+ Nouveau rôle** en haut à droite — le même panneau s'ouvre avec le champ **Nom** déverrouillé.

---

## En un coup d'œil

<svg viewBox="0 0 1040 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="role-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="role-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="role-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="620" height="720" rx="14" fill="url(#role-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <rect x="730" y="30" width="90" height="22" rx="5" fill="url(#role-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="775" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ Nouveau rôle</text>
  <line x1="220" y1="68" x2="840" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="580" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="108" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">admin</text>
  <text x="316" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Accès complet — paramètres, toutes les pages, toutes les sociétés</text>
  <text x="630" y="108" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">2 users</text>
  <rect x="682" y="96" width="48" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="706" y="107" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Admin</text>
  <rect x="746" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="108" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="772" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="783" y="108" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="130" width="580" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="260" y="154" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">client_acme</text>
  <text x="346" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Client externe — uniquement ses factures (UHALKY = 123456)</text>
  <text x="630" y="154" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 users</text>
  <rect x="682" y="142" width="48" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="706" y="153" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="746" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="154" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="772" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="783" y="154" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="180" width="580" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="204" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">operator</text>
  <text x="316" y="204" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Exploitation quotidienne — sans suppression, sans push de statut DB</text>
  <text x="630" y="204" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">5 users</text>
  <rect x="682" y="192" width="48" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="706" y="203" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="746" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="204" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="772" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="783" y="204" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="240" width="580" height="490" rx="10" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1.2"/>

  <text x="262" y="262" fill="#cbd5e1" fontSize="10" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="262" y="270" width="538" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="287" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Client externe — uniquement ses factures (UHALKY = 123456)</text>

  <line x1="240" y1="310" x2="820" y2="310" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="310" width="580" height="34" fill="rgba(255,255,255,0.03)"/>
  <line x1="345" y1="310" x2="345" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <line x1="450" y1="310" x2="450" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <line x1="600" y1="310" x2="600" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <text x="292" y="331" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🛡 Accès</text>
  <text x="397" y="331" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Actions</text>
  <text x="525" y="331" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">🔎 Périmètre des données</text>
  <line x1="466" y1="342" x2="584" y2="342" stroke="#4a9eff" strokeWidth="2"/>
  <text x="700" y="331" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Membres (3)</text>

  <text x="262" y="362" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Sociétés</text>
  <text x="320" y="362" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(liste vide = toutes les sociétés)</text>
  <rect x="262" y="372" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="389" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="428" y="372" width="22" height="26" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="439" y="389" fill="#f87171" fontSize="11" textAnchor="middle">×</text>
  <rect x="262" y="404" width="160" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="342" y="421" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter une société</text>

  <text x="262" y="458" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Filtres de lignes</text>
  <text x="352" y="458" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(liste vide = aucune restriction de ligne — combiné aux Sociétés par ET)</text>

  <rect x="262" y="468" width="538" height="120" rx="6" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="272" y="478" width="280" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="282" y="494" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Factures › Clé alpha client</text>
  <text x="466" y="494" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">UHALKY</text>
  <rect x="556" y="478" width="22" height="24" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="567" y="494" fill="#f87171" fontSize="10" textAnchor="middle">×</text>

  <rect x="288" y="510" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="525" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">123456</text>
  <rect x="532" y="510" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="543" y="525" fill="#f87171" fontSize="10" textAnchor="middle">×</text>

  <rect x="288" y="538" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="553" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">789012</text>
  <rect x="532" y="538" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="543" y="553" fill="#f87171" fontSize="10" textAnchor="middle">×</text>

  <rect x="288" y="566" width="180" height="20" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="378" y="581" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">+ Ajouter une valeur (OU)</text>

  <rect x="262" y="600" width="160" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="342" y="615" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter un filtre</text>

  <line x1="262" y1="640" x2="800" y2="640" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="660" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontStyle="italic">Périmètre effectif</text>
  <text x="262" y="678" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Société IN (00001) ET UHALKY IN (123456, 789012)</text>

  <rect x="262" y="696" width="100" height="26" rx="5" fill="url(#role-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="312" y="713" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Enregistrer</text>
  <rect x="370" y="696" width="80" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="713" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste de cartes</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">duplication / suppression par rôle</text>
  <line x1="200" y1="115" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="860" y="304" width="170" height="46" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="320" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre onglets</text>
  <text x="870" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Accès · Actions · Périmètre · Membres</text>
  <line x1="860" y1="324" x2="820" y2="324" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="20" y="460" width="180" height="46" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="476" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre de lignes</text>
  <text x="30" y="490" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonne + valeurs (OU) ; deux filtres</text>
  <text x="30" y="501" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">se combinent en ET</text>
  <line x1="200" y1="478" x2="262" y2="478" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="860" y="600" width="170" height="46" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="870" y="616" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre effectif</text>
  <text x="870" y="630" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aperçu de la combinaison ET/OU</text>
  <text x="870" y="641" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrite dans F564254</text>
  <line x1="860" y1="620" x2="820" y2="620" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>
</svg>

---

## Liste des rôles

Le haut de la page affiche chaque rôle existant sous forme de carte.

| Élément | Description |
|---|---|
| **Nom** | Identifiant interne du rôle (par ex. `admin`, `operator`, `client_acme`). Sert à rattacher les utilisateurs depuis l'éditeur *Utilisateurs*. |
| **Description** | Texte libre lisible par un humain. |
| **Compteur de membres** | Nombre d'utilisateurs actuellement affectés au rôle. |
| **Pastille** | `Admin` quand le rôle a la fonctionnalité *Accès aux paramètres*, `User` sinon. Lecture rapide de la portée du rôle. |
| **⎘ Dupliquer** | Duplique le rôle : pré-remplit le panneau d'édition avec tous les droits du rôle source ; le champ *Nom* reste vide pour que l'opérateur en choisisse un nouveau ; la description est suffixée par `(copy)`. |
| **🗑 Supprimer** | Supprime le rôle après confirmation. Les utilisateurs rattachés perdent toutes leurs permissions tant qu'ils ne sont pas réaffectés. |

Cliquer sur une carte ouvre le **panneau d'édition** sous la liste. Pour créer un rôle depuis zéro, utiliser **+ Nouveau rôle** en haut à droite.

---

## Identité (toujours visible)

Le **Nom** du rôle *(visible uniquement à la création)* et la **Description** sont placés au-dessus de la barre d'onglets — pas besoin de revenir à un onglet précis pour les modifier.

| Champ | Description |
|---|---|
| **Nom** | Identifiant interne du rôle. Doit être unique. Verrouillé une fois créé. |
| **Description** | Résumé lisible affiché dans la liste des rôles. |

---

## Onglet — Accès

Définit **ce que le rôle peut atteindre** : fonctionnalités et pages.

### Fonctionnalités

Quelques drapeaux binaires. Chaque ligne combine une case à cocher et un libellé d'aide qui explique l'effet du drapeau.

| Fonctionnalité | Aide | Effet |
|---|---|---|
| **Accès aux paramètres** | *Peut ouvrir la page Paramètres (modèles, connecteurs)* | Ouvre l'intégralité du menu Configuration. Le rôle reçoit alors la pastille `Admin` dans la liste. |
| **Lecture seule** | *Aucune modification, suppression ni renvoi, même sur les pages autorisées* | L'utilisateur peut consulter l'application, mais toutes les actions d'écriture sont désactivées — surcharge entièrement l'onglet *Actions*. |

### Pages autorisées

Les pages se présentent en **une carte par groupe du menu latéral** — mêmes groupes, même ordre, mêmes noms : *Navigation*, *Synchronisation*, *Traitement*, *UBL*, *Extraction*, *Gestion*, *Documentation*. Chaque page est une **pastille** portant son libellé de menu ; une pastille cochée affiche une coche, et son survol indique l'identifiant de la page. L'en-tête de la carte donne le nombre de pages accordées (`3/10`) et un lien **tout** / **aucun** qui bascule le groupe entier.

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px'}}>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px'}}>
    <b>Allowed Pages</b><span style={{opacity: 0.6, fontSize: '11px'}}>(empty = all pages allowed)</span>
    <span style={{padding: '2px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>All</span>
    <span style={{padding: '2px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>None</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px'}}>
    <div style={{border: '1px solid #4a9eff', borderRadius: '8px', padding: '8px'}}>
      <div style={{display: 'flex', gap: '8px', marginBottom: '6px'}}><b>Navigation</b><span style={{opacity: 0.6}}>6/13</span><span style={{marginLeft: 'auto', color: '#4a9eff'}}>tout</span></div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>✓ Tableau de bord</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>✓ E-Invoicing</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>Déclaration de TVA</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>✓ Rapports</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>…</span>
      </div>
      <div style={{marginTop: '8px', paddingTop: '6px', borderTop: '1px dashed rgba(148,163,184,0.3)'}}>
        <b>Diagnostic</b> <span style={{opacity: 0.6, fontSize: '11px'}}>Une page à quatre vues : chaque vue s'accorde séparément ci-dessous.</span>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '4px'}}>
          <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>✓ Vue Erreurs d'intégration</span>
          <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>✓ Vue Journal des traitements</span>
          <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>✓ Vue Anomalies</span>
          <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>Vue Journal serveur</span>
        </div>
      </div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.3)', borderRadius: '8px', padding: '8px'}}>
      <div style={{display: 'flex', gap: '8px', marginBottom: '6px'}}><b>Synchronisation</b><span style={{opacity: 0.6}}>0/4</span><span style={{marginLeft: 'auto', color: '#4a9eff'}}>tout</span></div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>Récupérer Entrée</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>Récupérer les imports</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>Récupérer les statuts</span>
        <span style={{padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7}}>Tâches planifiées</span>
      </div>
    </div>
  </div>
</div>

| Groupe | Pages (identifiant) |
|---|---|
| **Navigation** | Synthèse (`synthese`), Exploitation (`dashboard`), Statistiques (`statistics`), Tableau de bord IT (`techdashboard`), E-Invoicing (`invoices`), E-Documents (`edocuments`), E-Reporting (`ereporting`), E-Annuaire (`edirectory`), Déclaration de TVA (`vatdeclaration`), Rapports (`reports`), Explorateur (`explorer`), Notifications (`notifications`), puis **Diagnostic** et ses quatre vues : Erreurs d'intégration (`integrationerrors`), Journal des traitements (`processinglog`), Anomalies (`errors`), Journal serveur (`serverlog`). |
| **Synchronisation** | Récupérer Entrée (`fetchinput`), Récupérer les imports (`import`), Récupérer les statuts (`retrievestatuses`), Tâches planifiées (`scheduledjobs`). |
| **Traitement** | Traiter Document (`process`), Extraire & Traiter (`extractandprocess`), Traiter API (`processapi`). |
| **UBL** | Validation UBL (`validate`), Éditeur XSL (`xsleditor`), Visionneuse XML (`xmlviewer`), Défauts UBL (`ubldefaults`). |
| **Extraction** | Extraire depuis Archive (`extract`), Extraire FTP (`extractftp`), Extraire depuis BIP (`extractbip`, *propre à JD Edwards*). |
| **Gestion** | Documents (`documents`), Modèles PDF (`pdftemplates`), Actions (`actions`), Règles de notification (`notificationrules`), Dossiers surveillés (`watchfolders`), Versions fichiers (`fileversions`), Promotion (`promotion`). |
| **Documentation** | Notes de version (`releasenotes`), Historique des mises à jour (`upgradehistory`), Référentiel statuts (`statusreference`), Motifs (`reasoncodes`), Référence UBL (`ublreference`), Règles de gestion (`businessrules`, qui ouvre aussi les Schematrons), Développeur (`xref`), Référence API (`apireference`). |

Quelques pastilles portent une aide :

- **Diagnostic** est une page à quatre vues : chaque vue est un droit distinct, et le menu affiche *Diagnostic* dès que l'une d'elles est accordée. Voir [Diagnostic](../../application/diagnostics/overview.md).
- **Tâches planifiées** couvre toutes les tâches — imports, tâches batch, rapports quotidiens, reprises automatiques, contrôles du cycle de vie, rétention. Lancer, suspendre ou enregistrer une tâche demande aussi l'action *Lancer les traitements* (`integration.run`). Voir [Tâches planifiées](../../sync/scheduled-jobs/overview.md).
- **Dossiers surveillés** accorde la configuration des dossiers ; leur planification se trouve dans *Tâches planifiées*.
- **Promotion** demande aussi la fonctionnalité *Accès aux paramètres*. Voir [Promotion](../../management/promotion.md).
- **Développeur** ouvre la [référence développeur](../../references/developer.md) : tables, clés de configuration, flux, impact, API.
- **Synthèse** et **Statistiques** sont des pages à part entière, contrôlées par le serveur et par les outils de l'assistant IA. La mise à jour les accorde toutes les deux, une seule fois, à chaque rôle qui avait Exploitation, pour que personne ne perde une page ; un retrait ultérieur sur un rôle est conservé.
- **Règles de gestion** ouvre aussi les [Schematrons](../../references/schematrons.md).
- Après la connexion, un rôle qui a la Synthèse s'ouvre sur elle ; un rôle qui ne l'a pas s'ouvre sur la première page qu'il accorde, dans l'ordre du menu (Exploitation, Statistiques, Tableau de bord IT, E-Invoicing…).

Règles :

- **Toutes** / **Aucune**, au-dessus des cartes, accordent ou retirent toutes les pages d'un coup ; le lien **tout** / **aucun** d'une carte fait de même pour son groupe.
- **Liste vide = toutes les pages autorisées.** Même convention que les autres listes : un rôle sans filtre voit tout.
- Le rôle `admin` créé à l'initialisation reçoit tous les identifiants de page ci-dessus, y compris Déclaration de TVA, Rapports et Historique des mises à jour.

---

## Onglet — Actions

Définit **ce que le rôle peut faire** sur les pages qu'il peut atteindre.

### Switch *Limiter à certaines actions*

| Switch | Effet |
|---|---|
| **Désactivée** *(défaut)* | Aucune liste blanche côté serveur — le rôle peut effectuer toutes les actions autorisées par ses pages. |
| **Activée** | Seules les actions cochées en dessous sont autorisées. Activer le switch **pré-coche toutes les actions** pour que le rôle ne perde pas brutalement ses droits — il suffit ensuite de décocher. |

L'aide sous le switch indique : *Désactivé (par défaut) : le rôle peut faire toutes les actions de ses pages. Activé : seules les actions cochées ci-dessous sont autorisées.*

L'en-tête de la section reflète l'état courant :

- `(toutes les actions sont autorisées : aucune liste définie)` quand le switch est désactivé.
- `(N actions autorisées explicitement : tout le reste est bloqué)` quand le switch est activé et N actions cochées.
- `(aucune action autorisée : même effet que la lecture seule)` quand la liste est activée mais vide.
- `(lecture seule activée dans Accès : toutes les actions sont bloquées)` quand la fonctionnalité *Lecture seule* est active — l'onglet est alors grisé.

Les boutons **Tout cocher** / **Tout décocher** apparaissent sous le switch (désactivés tant que le switch est désactivé).

### Catalogue des actions

Regroupé par la page où vit le bouton — la même clé peut piloter des boutons sur plusieurs pages.

| Groupe | Action | Clé | Effet |
|---|---|---|---|
| **Factures** | Créer | `invoice.create` | Le bouton *Nouvelle facture* de la liste [E-Invoicing](../../application/invoices.md). |
| **Factures** | Modifier | `invoice.edit` | Met à jour les champs d'une facture depuis la fenêtre détail ou le panneau d'édition. |
| **Factures** | Supprimer | `invoice.delete` | Suppression définitive d'une facture et de tous ses enregistrements fils. |
| **Factures** | Supprimer un événement | `invoice.lifecycle-delete` | Retire un seul événement de statut de l'historique d'une facture ; l'en-tête se recale sur le dernier événement restant. |
| **Factures** | Renvoyer à la PA | `invoice.resend` | Soumet ou re-soumet une facture (ou un lot) à la Plateforme Agréée. |
| **Factures** | Transmettre un statut (PA) | `invoice.status.pa` | Envoie un événement de statut via la PA — paiement reçu, en litige, etc. (onglet *PA* de la fenêtre *Définir le statut*). |
| **Factures** | Forcer un statut (base) | `invoice.status.db` | Met directement à jour un statut en base, sans passer par la PA — voie de réparation utilisée quand l'aller-retour PA est cassé. |
| **Factures** | Valider l'UBL | `invoice.validate` | Lance la validation XSD + Schematron sur l'UBL stocké (bouton *Valider* de l'onglet *Historique*). |
| **Factures** | Télécharger l'UBL | `invoice.download` | Lecture du BLOB UBL brut — bouton *Télécharger UBL* et endpoint `/xml`. |
| **Factures** | Actions prédéfinies | `invoice.preset-action` | Utilise les boutons pré-définis par statut (Renvoyer sur 9904, …) dans la rangée *vendeur*. |
| **Factures** | Actions personnalisées | `invoice.custom-action` | Utilise les boutons personnalisés définis par l'admin dans la rangée *actions personnalisées*. |
| **Factures** | Envoyer le PDF par e-mail | `invoice.email` | Envoie le PDF généré via le relais SMTP configuré. |
| **E-reporting** | Générer une déclaration | `ereporting.generate` | Produit une nouvelle déclaration e-reporting depuis la fenêtre *Générer*. |
| **E-reporting** | Renvoyer une déclaration | `ereporting.resend` | Renvoie à la plateforme une déclaration e-reporting existante. |
| **Traitements d'intégration** | Lancer les traitements | `integration.run` | Déclenche *Importer les statuts* / *Récupérer les factures reçues* / *Récupérer les statuts* depuis la barre d'outils. |

:::info
La fenêtre détail rend Parties, Lignes de facture, Récapitulatif TVA et Notes depuis l'endpoint UBL XML, qui est **ouvert en lecture** (mais reste filtré par les filtres de lignes et la visibilité de page). Seul le bouton *Télécharger l'UBL* est gardé par `invoice.download` — un rôle en lecture peut donc consulter le contenu d'une facture sans avoir le droit d'extraire le XML brut.
:::

---

## Onglet — Périmètre des données

Définit **les lignes que le rôle peut voir** — sociétés et filtres de lignes optionnels.

### Sociétés

Un tableau ligne par ligne des codes société (`KCO`) auxquels le rôle est restreint. Chaque ligne porte un champ libre et un bouton **×** pour la retirer ; **+ Ajouter une société** ajoute une ligne en bas.

- **Liste vide = toutes les sociétés.** Comportement habituel — laisser le tableau vide donne accès à toutes les sociétés présentes en base.
- Ajouter ne serait-ce qu'une ligne restreint le rôle aux sociétés listées.
- Le champ propose *Code société (ex. 00001)* et utilise une police monospace pour repérer plus facilement les fautes de frappe.

### Filtres de lignes

Une restriction plus fine : sur un champ, le rôle peut être limité à une ou plusieurs **valeurs exactes**. Cas d'usage typique — un client externe qui ne doit voir que les factures émises pour sa propre clé alpha (`UHALKY`).

Le **sélecteur de colonne** liste chaque champ une seule fois, **par portée** :

| Groupe | Champs | Protège |
|---|---|---|
| **Clés — toutes les tables (doc, dct, kco)** | *Numéro de document*, *Type de document*, *Société*. | Toutes les tables qui portent ces clés. |
| **Document (F564230) — toutes les tables liées** | Les champs du document archivé : code activité, unité d'activité, sous-type, fichier source, travail, programme, routage… | Toutes les tables liées au document. |
| **Facture (F564231)** | L'en-tête de facture : clé alpha du client, nom du client, contrat… | Cette table. |
| **Constats de validation (F564236)** | Sévérité, source, règle… | Cette table. |
| **Journal des traitements** / **E-reporting** | Leurs propres colonnes. | Cette table. |

Chaque entrée s'affiche `libellé · CHAMP` (*— choisir un champ —* tant qu'aucun n'est choisi). Pour le champ choisi, saisir une ou plusieurs valeurs (*Valeur (égalité exacte)*) ; **+ Ajouter une valeur (OU)** ajoute une valeur, **Retirer la valeur** et **Retirer le filtre** suppriment une valeur ou le filtre entier. **+ Ajouter un filtre de lignes** combine des filtres sur des champs différents.

#### Règles de combinaison

| Cas | Combiné en |
|---|---|
| Plusieurs **valeurs** sur le **même champ** | `OU` — le rôle voit les lignes qui correspondent à **au moins une** des valeurs. |
| Plusieurs **champs** dans la liste des filtres | `ET` — le rôle voit uniquement les lignes qui satisfont **chaque** contrainte. |
| Droit **Sociétés** + filtres de lignes | `ET` — les deux doivent être satisfaits. |

#### Où s'appliquent les filtres

Un filtre de lignes n'est **pas** un simple masquage dans l'interface : il est appliqué partout où une ligne interdite pourrait apparaître.

- **Chaque liste qui possède le champ**, sous le nom que cette liste lui donne (client, code activité, travail, numéro UBL, statut…). Une liste sans ce champ ignore le filtre : un rôle limité à la sévérité `FATAL` garde ses factures, ses documents et ses tableaux de bord, et ne voit que les constats bloquants.
- Les **tableaux de bord** — Synthèse, Exploitation, Statistiques, comptages par statut — et la fenêtre **E-Documents**, qui s'ouvre selon les mêmes règles que sa liste.
- Les **endpoints par ligne** — cycle de vie, lignes, téléchargement XML, rendu PDF, push de statut, suppression, renvoi, envoi par mail.
- Le **flux PDF généré** — une ligne interdite ne peut même pas être transformée en PDF.

Les lignes interdites renvoient la même réponse **« non trouvé »** que pour des données réellement absentes, pour qu'un appel ne permette pas de sonder l'existence de factures qu'un rôle n'a pas le droit de connaître.

---

## Onglet — Membres

Disponible uniquement lors de l'édition d'un rôle existant (masqué à la création).

Liste les utilisateurs actuellement rattachés au rôle :

| Colonne | Description |
|---|---|
| **Nom d'utilisateur** | Identifiant de connexion. |
| **Nom complet** | Nom d'affichage de l'utilisateur (ou `–` si vide). |
| **Statut** | `Actif` (vert) ou `Inactif` (rouge). |

Cette vue est **en lecture seule** — pour ajouter ou retirer un utilisateur d'un rôle, passer par l'éditeur *Configuration → Security → Utilisateurs*.

---

## Enregistrer / Annuler

- **Créer** *(en création)* / **Enregistrer** *(en édition)* enregistre le rôle et actualise la liste — disponible sur tous les onglets sauf *Membres*.
- **Annuler** abandonne les changements et ferme le panneau.
- Des messages inline apparaissent sous le panneau (`Rôle créé`, `Rôle mis à jour`, `Rôle supprimé`, messages d'erreur).

---

## Stockage des droits

Chaque droit est une ligne dans `F564254`. La structure :

```text
F564254
  PMROLE       — nom du rôle (FK vers F564251.RLNAME)
  PMCRAPPID    — type de droit : 'page' / 'company' / 'feature' / 'action'
                              / 'row-filter'
  PMCRAPPVAL   — valeur, encodée par type :
                   page             → identifiant de page  (ex. 'invoices')
                   company          → code KCO             (ex. '00001')
                   feature          → drapeau              ('settings', 'readonly', 'actions-whitelist')
                   action           → clé d'action         (ex. 'invoice.delete')
                   row-filter       → 'colonne=valeur'     (ex. 'UHALKY=123456')
  PMENABL      — '1' activé / '0' désactivé (utilisé lors du bootstrap spécifique au dialecte)
```

Les filtres de lignes sont enregistrés sous forme de chaînes `colonne=valeur` — une ligne par paire `(colonne, valeur)`. L'éditeur les regroupe par colonne au chargement et les ré-aplatit à l'enregistrement, pour que l'opérateur ne voie jamais cette représentation brute.

Ajouter une nouvelle dimension de droits revient à un INSERT dans cette même table — pas de changement DDL.

Le bootstrap est **idempotent** : supprimer `F564254` puis ré-exécuter *Initialiser la base* réinjecte les droits par défaut des rôles `admin` et `viewer` sans toucher aux lignes des rôles existants. Le log de l'initialisation indique le nombre de droits réinsérés.

---

## Supprimer un rôle

Cliquer sur l'icône **🗑** d'une carte ouvre une fenêtre de confirmation :

> *Supprimer le rôle « X » ? Les utilisateurs rattachés à ce rôle vont perdre leurs permissions.*

Confirmer supprime le rôle et toutes les lignes de droits de `F564254` qui lui sont rattachées. Les utilisateurs gardent leur compte mais perdent toutes leurs permissions jusqu'à ce qu'ils soient réaffectés à un autre rôle.

---

## Conseils et bonnes pratiques

- **Un rôle par profil, pas par individu.** `operator`, `auditor`, `client_<nom>` sont plus simples à maintenir que des rôles individuels.
- ***Accès aux paramètres* avec parcimonie.** Ouvre l'intégralité du menu Configuration — à réserver à un petit groupe d'administrateurs.
- **Coupler *Lecture seule* et *Actions* désactivées** pour les comptes de conformité / audit — les deux couches se renforcent.
- **Le tableau *Sociétés* est l'outil principal de cloisonnement multi-tenant.** Laisser le tableau vide neutralise tout filtrage par société pour le rôle.
- **D'abord les filtres de lignes, ensuite la liste blanche d'actions** pour cadrer un utilisateur externe. Le filtre de lignes masque ce qu'il ne doit pas voir ; la liste blanche d'actions contrôle ce qu'il peut faire avec ce qu'il voit.
- **Un rôle voit le tableau de bord Exploitation en entier ou pas du tout.** Pour limiter une équipe aux chiffres métier, accorder la Synthèse et les Statistiques sans Exploitation.
- **Dupliquer pour dériver un rôle.** Partir d'un rôle existant en ajustant deux ou trois droits est plus rapide que reconstruire la liste depuis zéro — et le résultat reste proche de l'intention du rôle source.
- **Ré-exécuter *Initialiser la base*** *(Database Connectors → NomaUBL)* si les droits par défaut des rôles `admin` ou `viewer` ont disparu — l'opération réinjecte les lignes sans toucher aux rôles personnalisés.
- **Supprimer un rôle uniquement après avoir réaffecté ses membres.** Une fois supprimé, les membres perdent l'accès à tout jusqu'à réaffectation. L'onglet *Membres* est le moyen le plus rapide de voir qui serait touché.
