---
title: Paramètres LDAP
description: "Table de correspondance entre les départements LDAP / Active Directory et les applications connectées, regroupés en pôles fonctionnels."
keywords: [Nomasx-1, sécurité, LDAP, paramètres, mapping département, groupe, règle d'accès application]
---

# Paramètres LDAP

L'écran **Paramètres LDAP** est la table de correspondance qui alimente la matrice *Utilisateurs par applications*. Chaque ligne déclare : *« les utilisateurs dont le département AD est X sont censés avoir accès à l'application Y, sous le groupe Z »*.

C'est l'écran à maintenir lors d'une réorganisation de l'entreprise, à la création d'un nouveau département, à la mise en production d'une nouvelle application, ou lorsque les règles d'accès sont revues à la revue trimestrielle.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lds-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#lds-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · LDAP · Paramètres</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM APPLICATION</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUPE</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉPARTEMENT AD</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP Production</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RH</text>
  <text x="660" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">RH-PAIE</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">12 règles sur 2 applications · dernier département ajouté le 2026-04-22</text>
</svg>

---

## Objectif de l'écran

Les lignes de cet écran sont les *règles* qui indiquent quels départements AD ont vocation à accéder à quelle application.

- **Une ligne, une règle.** Chaque ligne est une brique de la matrice des *accès attendus*.
- **Le groupe est l'étiquette humaine.** *Groupe* est un libellé libre qui rassemble plusieurs départements sous un même pôle fonctionnel (par exemple *FINANCE* couvre `FIN-AP`, `FIN-AR`, `FIN-CONTROL`).
- **Pas de ligne, pas d'attendu.** Un département qui n'apparaît pas ici n'est jamais attendu sur une application — la matrice *Utilisateurs par applications* ne l'inclut tout simplement pas.

L'écran est court, déclaratif et au cœur de la boucle de revue LDAP : bien tenu, la matrice est juste ; négligé, la matrice dérive.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. | Application accordée par la règle. |
| **Nom de l'application** | `APPS_NAME` — nom issu de `SETTINGS_APPLICATIONS`. | Libellé lisible de l'application. |
| **Groupe** | `LDAPD_GROUP` — texte libre. | Étiquette humaine regroupant plusieurs départements sous un même pôle fonctionnel. |
| **Département AD** | `LDAP_DEPARTMENT` — doit correspondre à l'attribut `department` d'une entrée LDAP. | Département AD couvert par la règle. |

L'écran est en lecture seule. Les correspondances se maintiennent via la table de configuration sous-jacente (`SECURITY_LDAP_DPT`) ; l'écran restitue le paramétrage en l'état.

---

## Conseils & bonnes pratiques

- **Garder les libellés de *Groupe* stables** — chaque changement se répercute sur la matrice *Utilisateurs par applications* et brise la comparaison avec la revue précédente.
- **Ajouter un mapping de département** à la création d'une nouvelle entité ou lors d'une réorganisation AD — sinon les nouveaux utilisateurs apparaîtront tous comme attendus-sans-accès sur la matrice.
- **Supprimer un mapping** à la mise hors service d'une application. Les lignes d'accès existantes côté source ne sont pas supprimées automatiquement ; ce travail relève de *Paramètres → Gestion des utilisateurs* ou de l'administrateur du système source.
- **Relancer le scan LDAP** après chaque modification de mapping pour que la matrice *Utilisateurs par applications* reflète les nouvelles règles dès le rendu suivant.
