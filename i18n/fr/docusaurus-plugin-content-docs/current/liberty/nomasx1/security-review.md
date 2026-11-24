---
title: Revue de sécurité
description: "Le tableau de bord Revue de sécurité de Nomasx-1 : les failles dans les accès d'une application connectée — comptes actifs, à privilèges et dormants, comptes absents de l'annuaire ou dont le compte d'annuaire a expiré, comptes génériques, objets ouverts à *PUBLIC — douze contrôles avec leur gravité, les comptes à revoir d'abord, les connexions par ancienneté, et les écrans où agir."
keywords: [Nomasx-1, revue de sécurité, revue des accès, comptes dormants, comptes à privilèges, annuaire, LDAP, départs, comptes génériques, PUBLIC, rôles orphelins, tableau de bord]
---

# Revue de sécurité

**Sécurité**, dans le dossier **Revues** du menu de Nomasx-1, est la page d'une revue des accès : elle liste ce qui ne va pas dans les accès de chaque application connectée, les comptes à examiner en premier, et les écrans où agir.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 868" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsrv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsrv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsrv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsrv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="828" rx="14" fill="url(#nxsrv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Revue de sécurité</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les failles des accès : comptes dormants et à privilèges, départs absents de l'annuaire, comptes génériques, objets ouverts à tous.</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="254" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Tous</text>
  <text x="444" y="128.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="1066" y="129" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Mis à jour à 09:15</text>
  <rect x="944.3199999999999" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.3199999999999" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="892.3199999999999" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.3199999999999" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ PDF</text>
  <rect x="834.3199999999999" y="115" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.3199999999999" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ Excel</text>
  <rect x="240.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes actifs</text>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Comptes pouvant se connecter</text>
  <text x="252.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">380</text>
  <text x="252.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">41 dormants · 12 jamais connectés</text>
  <rect x="452.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes à privilèges</text>
  <text x="464.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Actifs, avec un accès super-utilisateur</text>
  <text x="464.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="464.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">2 inutilisés depuis 90 jours</text>
  <rect x="665.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Absents de l'annuaire</text>
  <text x="677.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Comptes nominatifs sans compte d'annuaire</text>
  <text x="677.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">7</text>
  <text x="677.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Annuaire collecté</text>
  <rect x="877.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Ouverts à &#42;PUBLIC</text>
  <text x="889.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Objets que tout utilisateur peut exécuter</text>
  <text x="889.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">54 objets</text>
  <text x="889.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">11 utilisateurs avec des droits propres</text>
  <rect x="240" y="260" width="520" height="290" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Les contrôles</text>
  <text x="254" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Chaque contrôle avec son compte ; le rouge d'abord, en vert quand c'est propre</text>
  <circle cx="258" cy="314.0" r="3.2" fill="#f87171"/>
  <text x="270" y="317.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes à privilèges dormants</text>
  <text x="746" y="317.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="254" y1="322.5" x2="746" y2="322.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="333.5" r="3.2" fill="#f87171"/>
  <text x="270" y="336.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes actifs absents de l'annuaire</text>
  <text x="746" y="336.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <line x1="254" y1="342.0" x2="746" y2="342.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="353.0" r="3.2" fill="#f87171"/>
  <text x="270" y="356.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Compte d'annuaire expiré, toujours actif</text>
  <text x="746" y="356.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="254" y1="361.5" x2="746" y2="361.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="372.5" r="3.2" fill="#fb923c"/>
  <text x="270" y="375.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes actifs dormants</text>
  <text x="746" y="375.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">41</text>
  <line x1="254" y1="381.0" x2="746" y2="381.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="392.0" r="3.2" fill="#fb923c"/>
  <text x="270" y="395.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Jamais utilisés après un mois</text>
  <text x="746" y="395.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <line x1="254" y1="400.5" x2="746" y2="400.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="411.5" r="3.2" fill="#fb923c"/>
  <text x="270" y="414.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes génériques / partagés actifs</text>
  <text x="746" y="414.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <line x1="254" y1="420.0" x2="746" y2="420.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="431.0" r="3.2" fill="#4ade80"/>
  <text x="270" y="434.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Plusieurs comptes pour une personne</text>
  <text x="746" y="434.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="254" y1="439.5" x2="746" y2="439.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="450.5" r="3.2" fill="#fb923c"/>
  <text x="270" y="453.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Objets ouverts à &#42;PUBLIC</text>
  <text x="746" y="453.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">54</text>
  <line x1="254" y1="459.0" x2="746" y2="459.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="470.0" r="3.2" fill="#4a9eff"/>
  <text x="270" y="473.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Droits donnés directement aux utilisateurs</text>
  <text x="746" y="473.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">11</text>
  <line x1="254" y1="478.5" x2="746" y2="478.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="489.5" r="3.2" fill="#4ade80"/>
  <text x="270" y="492.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Comptes actifs sans rôle</text>
  <text x="746" y="492.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="254" y1="498.0" x2="746" y2="498.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="509.0" r="3.2" fill="#4a9eff"/>
  <text x="270" y="512.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Affectations de rôles expirées</text>
  <text x="746" y="512.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <line x1="254" y1="517.5" x2="746" y2="517.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="528.5" r="3.2" fill="#4a9eff"/>
  <text x="270" y="531.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Rôles orphelins</text>
  <text x="746" y="531.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">15</text>
  <rect x="770" y="260" width="310" height="290" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Comptes à revoir d'abord</text>
  <text x="784" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Le chiffre : jours depuis la dernière connexion</text>
  <circle cx="788" cy="316" r="3.2" fill="#f87171"/>
  <text x="800" y="319" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">JDOE2</text>
  <text x="800" y="330" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">à privilèges · dormant</text>
  <text x="1066" y="319" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">212</text>
  <line x1="784" y1="337" x2="1066" y2="337" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="348" r="3.2" fill="#f87171"/>
  <text x="800" y="351" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">LEGACY01</text>
  <text x="800" y="362" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">absent de l'annuaire</text>
  <text x="1066" y="351" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">18</text>
  <line x1="784" y1="369" x2="1066" y2="369" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="380" r="3.2" fill="#fb923c"/>
  <text x="800" y="383" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">BATCH02</text>
  <text x="800" y="394" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">compte générique</text>
  <text x="1066" y="383" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <line x1="784" y1="401" x2="1066" y2="401" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="412" r="3.2" fill="#fb923c"/>
  <text x="800" y="415" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">TEMP07</text>
  <text x="800" y="426" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">jamais connecté</text>
  <text x="1066" y="415" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="562" width="400" height="130" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="582" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière connexion</text>
  <text x="254" y="595" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Comptes actifs par ancienneté de leur dernière connexion</text>
  <text x="254" y="617" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Moins de 30 jours</text>
  <text x="626" y="617" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">296 comptes</text>
  <rect x="254" y="622" width="372" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="254" y="622" width="372" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="254" y="641" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">30 à 90 jours</text>
  <text x="626" y="641" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">43 comptes</text>
  <rect x="254" y="646" width="372" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="254" y="646" width="56" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="254" y="665" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">3 à 12 mois</text>
  <text x="626" y="665" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">23 comptes</text>
  <rect x="254" y="670" width="372" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="254" y="670" width="30" height="5" rx="2.5" fill="#2b8cff"/>
  <rect x="650" y="562" width="430" height="130" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="664" y="582" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Objets ouverts à &#42;PUBLIC</text>
  <text x="664" y="595" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Ceux qui permettent aussi de modifier d'abord</text>
  <circle cx="668" cy="618" r="3.2" fill="#f87171"/>
  <text x="680" y="621" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">P01012</text>
  <text x="680" y="632" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">exécution · modification</text>
  <line x1="664" y1="633" x2="1066" y2="633" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="668" cy="644" r="3.2" fill="#fb923c"/>
  <text x="680" y="647" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">R42565</text>
  <text x="680" y="658" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">exécution</text>
  <line x1="664" y1="659" x2="1066" y2="659" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="668" cy="670" r="3.2" fill="#fb923c"/>
  <text x="680" y="673" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">P4210</text>
  <text x="680" y="684" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">exécution</text>
  <rect x="240" y="704" width="840" height="124" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="724" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Agir</text>
  <text x="254" y="737" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Les écrans derrière chaque contrôle</text>
  <rect x="254" y="746" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="763" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="763" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="282.0" y="776" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Chaque compte, son statut et sa dernière connexion</text>
  <text x="508.66666666666674" y="763" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="746" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="763" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="763" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs sans AD</text>
  <text x="554.6666666666667" y="776" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Comptes sans compte d'annuaire</text>
  <text x="781.3333333333335" y="763" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="746" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="763" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="763" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Doublons utilisateurs</text>
  <text x="827.3333333333334" y="776" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Plusieurs comptes pour une personne</text>
  <text x="1054.0" y="763" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="254" y="786" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="803" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="803" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs sans rôles</text>
  <text x="282.0" y="816" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Comptes actifs sans rôle</text>
  <text x="508.66666666666674" y="803" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="786" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="803" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="803" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles non utilisés</text>
  <text x="554.6666666666667" y="816" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Rôles attribués à personne</text>
  <text x="781.3333333333335" y="803" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="786" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="803" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="803" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Propriétés utilisateurs</text>
  <text x="827.3333333333334" y="816" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Marquer à privilèges, techniques, génériques</text>
  <text x="1054.0" y="803" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tous = les totaux</text>
  <line x1="200" y1="117.0" x2="294" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre chiffres</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comptes, privilèges, annuaire</text>
  <line x1="200" y1="207.0" x2="270" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Douze contrôles</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compte et gravité</text>
  <line x1="200" y1="347.0" x2="256" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="600" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière connexion</text>
  <text x="30" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comptes actifs par ancienneté</text>
  <line x1="200" y1="617.0" x2="270" y2="637" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="720" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="735" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Agir</text>
  <text x="30" y="748" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liens vers les écrans</text>
  <line x1="200" y1="737.0" x2="254" y2="760" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · ↻</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exportent la page telle quelle</text>
  <line x1="1120" y1="117.0" x2="884.3199999999999" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comptes en premier</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ceux sur lesquels agir</text>
  <line x1="1120" y1="347.0" x2="1060" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="1120" y="600" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objets &#42;PUBLIC</text>
  <text x="1130" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modification permise d'abord</text>
  <line x1="1120" y1="617.0" x2="1050" y2="622" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
</svg>

---

## Les quatre chiffres \{#figures\}

| Carte | Chiffre | Ligne de détail |
|---|---|---|
| **Comptes actifs** — comptes pouvant se connecter | Les comptes actifs. | Dormants — sans connexion depuis 90 jours — et jamais connectés. |
| **Comptes à privilèges** — actifs, avec accès super-utilisateur | Les comptes à privilèges actifs. | Ceux inutilisés depuis 90 jours. |
| **Absents de l'annuaire** — comptes nominatifs actifs sans compte d'annuaire | Les comptes qu'aucune entrée d'annuaire ne reconnaît. | Si l'annuaire est collecté. |
| **Ouverts à \*PUBLIC** — objets exécutables par tous | Les objets accordés à *PUBLIC. | Les utilisateurs titulaires de droits propres. |

La barre ne porte que le filtre **Application** — pas de période : les contrôles lisent l'état actuel. **Tous** donne les totaux, une application choisie restreint tous les widgets. **Excel** et **PDF** exportent la page telle qu'elle s'affiche, **↻** la recharge ; *Mis à jour à* donne l'heure des données.

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
