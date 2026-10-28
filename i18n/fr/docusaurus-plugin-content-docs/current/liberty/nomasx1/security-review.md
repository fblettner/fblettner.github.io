---
title: Revue de sécurité
description: "Le tableau de bord Revue de sécurité de Nomasx-1 : les failles dans les accès d'une application connectée — comptes actifs, à privilèges et dormants, comptes absents de l'annuaire ou dont le compte d'annuaire a expiré, comptes génériques, objets ouverts à *PUBLIC — douze contrôles avec leur gravité, les comptes à revoir d'abord, les connexions par ancienneté, et les écrans où agir."
keywords: [Nomasx-1, revue de sécurité, revue des accès, comptes dormants, comptes à privilèges, annuaire, LDAP, départs, comptes génériques, PUBLIC, rôles orphelins, tableau de bord]
---

# Revue de sécurité

**Revue de sécurité**, sous **Vue d'ensemble** dans le menu de Nomasx-1, est la page d'une revue des accès : elle liste ce qui ne va pas dans les accès de chaque application connectée, les comptes à examiner en premier, et les écrans où agir.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="456" rx="14" fill="url(#nxr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Revue de sécurité</text>
  <text x="240" y="74" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="240" y="80" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="94.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tous ▾</text>
  <rect x="240.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Comptes actifs</text>
  <text x="252.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Peuvent se connecter</text>
  <text x="252.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">380</text>
  <text x="252.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">41 dormants · 12 jamais connectés</text>
  <rect x="422.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Comptes à privilèges</text>
  <text x="434.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Actifs, super-utilisateur</text>
  <text x="434.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="434.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">2 inutilisés depuis 90 jours</text>
  <rect x="605.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Absents de l'annuaire</text>
  <text x="617.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Sans compte d'annuaire</text>
  <text x="617.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">7</text>
  <text x="617.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Annuaire collecté</text>
  <rect x="787.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Ouverts à ∗PUBLIC</text>
  <text x="799.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Accessibles à tous</text>
  <text x="799.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">54</text>
  <text x="799.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">11 utilisateurs avec droits propres</text>
  <rect x="240" y="218" width="360" height="236" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Les contrôles</text>
  <text x="252" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rouge d'abord, vert quand c'est propre</text>
  <circle cx="256" cy="271" r="3.5" fill="#f87171"/>
  <text x="268" y="273" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Comptes à privilèges dormants</text>
  <text x="588" y="273" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <circle cx="256" cy="301" r="3.5" fill="#f87171"/>
  <text x="268" y="303" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Comptes actifs absents de l'annuaire</text>
  <text x="588" y="303" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <circle cx="256" cy="331" r="3.5" fill="#f87171"/>
  <text x="268" y="333" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Compte d'annuaire expiré, toujours actif</text>
  <text x="588" y="333" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <circle cx="256" cy="361" r="3.5" fill="#fb923c"/>
  <text x="268" y="363" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Comptes actifs dormants</text>
  <text x="588" y="363" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">41</text>
  <circle cx="256" cy="391" r="3.5" fill="#fb923c"/>
  <text x="268" y="393" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Comptes génériques / partagés actifs</text>
  <text x="588" y="393" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <circle cx="256" cy="421" r="3.5" fill="#4ade80"/>
  <text x="268" y="423" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Plusieurs comptes pour une personne</text>
  <text x="588" y="423" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="610" y="218" width="350" height="236" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="622" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Comptes à revoir d'abord</text>
  <text x="622" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Le chiffre : jours depuis la dernière connexion</text>
  <circle cx="626" cy="271" r="3.5" fill="#f87171"/>
  <text x="638" y="273" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="638" y="285" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">à privilèges · dormant</text>
  <text x="948" y="273" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">212</text>
  <circle cx="626" cy="311" r="3.5" fill="#f87171"/>
  <text x="638" y="313" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">MLEROY</text>
  <text x="638" y="325" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">absent de l'annuaire</text>
  <text x="948" y="313" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">18</text>
  <circle cx="626" cy="351" r="3.5" fill="#fb923c"/>
  <text x="638" y="353" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">BATCH01</text>
  <text x="638" y="365" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">compte générique</text>
  <text x="948" y="353" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <circle cx="626" cy="391" r="3.5" fill="#fb923c"/>
  <text x="638" y="393" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">PDURAND</text>
  <text x="638" y="405" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">jamais connecté</text>
  <text x="948" y="393" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <rect x="10" y="130" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre chiffres</text>
  <text x="20" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comptes, privilèges, annuaire, ∗PUBLIC</text>
  <line x1="210" y1="147.0" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxr-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Douze contrôles</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre et gravité</text>
  <line x1="210" y1="317.0" x2="256" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxr-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comptes d'abord</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ceux sur lesquels agir</text>
  <line x1="1000" y1="317.0" x2="960" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxr-arrow)"/>
</svg>

---

## Les quatre chiffres \{#figures\}

| Carte | Chiffre | Ligne de détail |
|---|---|---|
| **Comptes actifs** — comptes pouvant se connecter | Les comptes actifs. | Dormants — sans connexion depuis 90 jours — et jamais connectés. |
| **Comptes à privilèges** — actifs, avec accès super-utilisateur | Les comptes à privilèges actifs. | Ceux inutilisés depuis 90 jours. |
| **Absents de l'annuaire** — comptes nominatifs actifs sans compte d'annuaire | Les comptes qu'aucune entrée d'annuaire ne reconnaît. | Si l'annuaire est collecté. |
| **Ouverts à \*PUBLIC** — objets exécutables par tous | Les objets accordés à *PUBLIC. | Les utilisateurs titulaires de droits propres. |

Le filtre **Application** fonctionne comme sur les autres tableaux de bord : **Tous** donne les totaux.

---

## Les contrôles \{#checks\}

Chaque contrôle avec son nombre, rouge d'abord, vert quand rien n'est à signaler.

| Contrôle | Gravité | Action attendue |
|---|---|---|
| **Comptes à privilèges dormants** | Rouge | Accès super-utilisateur inutilisé depuis 90 jours : le désactiver ou recertifier son propriétaire. |
| **Comptes actifs absents de l'annuaire** | Rouge | Aucun compte d'annuaire correspondant : un départ, ou un compte sans propriétaire. |
| **Compte d'annuaire expiré, toujours actif** | Rouge | Le compte d'annuaire de la personne a expiré : désactiver le compte. |
| **Comptes actifs dormants** | Orange | Pas de connexion depuis 90 jours : désactiver ou recertifier. |
| **Jamais utilisés après un mois** | Orange | Créés il y a plus de 30 jours et jamais connectés : créés par erreur, ou devenus inutiles. |
| **Comptes génériques / partagés actifs** | Orange | Les actions ne sont pas attribuables à une personne : les remplacer par des comptes nominatifs. |
| **Plusieurs comptes pour une personne** | Orange | Comptes actifs partageant un numéro de carnet d'adresses : n'en garder qu'un par personne. |
| **Objets ouverts à \*PUBLIC** | Orange | Tous les utilisateurs peuvent utiliser ces objets par défaut : vérifier qu'aucun n'est sensible. |
| **Droits donnés directement aux utilisateurs** | Bleu | Droits posés sur un utilisateur plutôt qu'un rôle, hors du contrôle par rôles. |
| **Comptes actifs sans rôle** | Bleu | Provisionnement incomplet, ou comptes à désactiver. |
| **Affectations de rôles expirées** | Bleu | Affectations dont la date d'expiration est passée : les nettoyer. |
| **Rôles orphelins** | Bleu | Rôles attribués à personne : les supprimer ou les réaffecter. |

Les deux contrôles d'annuaire supposent sa collecte — la collecte *Everything*, ou l'étape LDAP activée ; d'ici là, ils indiquent *Aucun annuaire collecté*.

---

## Les comptes et les objets \{#detail\}

| Widget | Contenu |
|---|---|
| **Comptes à revoir d'abord** | Les comptes à privilèges et dormants, les départs, les comptes génériques ; le chiffre donne les jours depuis la dernière connexion. |
| **Dernière connexion** | Les comptes actifs selon l'ancienneté de leur dernière connexion : moins de 30 jours, 30 à 90 jours, 3 à 12 mois, plus d'un an, jamais. |
| **Objets ouverts à \*PUBLIC** | Les objets exécutables par tous, ceux qui permettent aussi des modifications d'abord. |
| **Agir** | Les liens vers les écrans derrière chaque contrôle : Utilisateurs, Utilisateurs sans AD, Doublons utilisateurs, Utilisateurs sans rôles, Rôles non utilisés, Propriétés utilisateurs. |

---

## Voir aussi

- [Utilisateurs](./security/users.md), [Utilisateurs sans rôle](./security/users-without-roles.md), [Rôles non utilisés](./security/roles-not-used.md) — les écrans où agir.
- [Utilisateurs LDAP sans AD](./security/ldap/users-without-ad.md) — les comptes absents de l'annuaire.
- [Séparation des tâches](./sod-dashboard.md) — les conflits.
