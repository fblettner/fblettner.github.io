---
title: Filtrage des menus
description: "Maintenance de la sécurité → Filtrage des menus dans Nomajde : les lignes de filtrage des menus de JD Edwards EnterpriseOne (F9006) dans une grille — une ligne par rôle, vue de tâches, tâche parente et tâche enfant, affichée ou masquée — avec filtres, export Excel, modification en lot et chargement depuis un fichier ; les tâches se choisissent par leur nom."
keywords: [Nomajde, JD Edwards, JDE E1, filtrage des menus, F9006, vue de tâches, tâche parente, tâche enfant, rôle, import Excel, modification en lot]
---

# Filtrage des menus

L'écran **Filtrage des menus** présente les lignes de filtrage des menus de JD Edwards EnterpriseOne (`F9006`) dans une grille, comme le [Security Workbench](./security-workbench.md) et l'écran Sécurité des UDO : une ligne par **rôle**, **vue de tâches**, **tâche parente** et **tâche enfant**, qui indique si la tâche est **affichée** pour le rôle. L'export, la modification en lot et le chargement depuis un fichier fonctionnent comme sur les autres écrans de sécurité.

Accès : **Maintenance de la sécurité → Filtrage des menus**. Pour savoir *qui voit cette tâche ?* ou cocher le menu d'un rôle dans le menu lui-même, utiliser [Gestion de la sécurité → un menu](../security-management/menu.md) — qui écrit par les requêtes propres à cet écran.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 354" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njmf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njmf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njmf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njmf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="314" rx="14" fill="url(#njmf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Filtrage des menus</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Filtrage des menus par rôle (F9006)</text>
  <rect x="240" y="72" width="720" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="88" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="252" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <rect x="252" y="106" width="150" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="116.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="414" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <rect x="414" y="106" width="150" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="116.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="576" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <rect x="576" y="106" width="150" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="586" y="116.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">~</text>
  <rect x="240" y="134" width="117" height="22" rx="5" fill="url(#njmf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="148.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="363" y="134" width="97" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="411.5" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <rect x="466" y="134" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="497.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Importer</text>
  <rect x="534" y="134" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="544" y="148.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="660" y="134" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="696.0" y="148.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="888" y="134" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="166" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE (ID)</text>
  <text x="326" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="444" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <text x="556" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE PARENTE</text>
  <text x="676" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE ENFANT</text>
  <text x="804" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="870" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AFFICHÉE</text>
  <rect x="240" y="194" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="326" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Fournisseurs</text>
  <text x="444" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="676" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="804" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="870" y="197.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="208.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="220" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="326" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Fournisseurs</text>
  <text x="444" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="676" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Order Management</text>
  <text x="804" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="870" y="223.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="234.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="246" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="326" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Acheteur</text>
  <text x="444" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="676" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Voucher Entry</text>
  <text x="804" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P0411</text>
  <rect x="870" y="249.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="260.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="272" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="326" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Acheteur</text>
  <text x="444" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Order Management</text>
  <text x="676" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="804" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P4210</text>
  <rect x="870" y="275.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="881.0" y="286.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <rect x="240" y="298" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">HR_MANAGER</text>
  <text x="326" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Ressources humaines</text>
  <text x="444" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="676" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="804" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="870" y="301.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="312.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle, vue de tâches, objet</text>
  <line x1="200" y1="97.0" x2="252" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter, modifier en lot</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">importer depuis un fichier</text>
  <line x1="200" y1="167.0" x2="250" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par rôle</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vue · tâche parente · enfant</text>
  <line x1="200" y1="277.0" x2="250" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les lignes dans Excel</text>
  <line x1="1000" y1="137.0" x2="940" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches par leur nom</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais par leur identifiant</text>
  <line x1="1000" y1="217.0" x2="700" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="1000" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affichée</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">N masque la tâche au rôle</text>
  <line x1="1000" y1="297.0" x2="860" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
</svg>

---

## Objectif de la vue

- **Toutes les lignes de filtrage des menus au même endroit**, pour chaque rôle et chaque vue de tâches, au lieu d'ouvrir le formulaire de filtrage vue par vue.
- **Les tâches par leur nom.** Les vues et les tâches s'affichent et se choisissent par leur nom, jamais par leur identifiant.
- **Chargement en masse.** Un ensemble de lignes préparé dans Excel — un nouveau rôle, un déploiement — se charge en une seule fois.

La grille n'est pas lue à l'ouverture de l'écran : renseigner les filtres, puis **Exécuter**.

---

## Colonnes

| Colonne | Signification |
|---|---|
| **Role** | Le rôle concerné par la ligne, avec sa description. JD Edwards ne filtre les menus que par rôle. |
| **Vue de tâches** | La vue de tâches (le menu), par son nom. |
| **Tâche parente** | Le dossier qui contient la tâche, par son nom. |
| **Tâche enfant** | La tâche masquée ou affichée, par son nom. |
| **Object** | L'objet que lance la tâche enfant, s'il y en a un. En lecture seule. |
| **Affichée** | Cochée : la tâche est affichée pour le rôle ; décochée : elle est masquée. Un dossier masqué masque tout ce qui est dessous. |
| **User ID**, **Date Maj**, **Time Last Updated** | Qui a modifié la ligne et quand — renseignés à chaque enregistrement. En lecture seule. |

**Filtres avancés** : **Role**, **Vue de tâches**, **Object**.

---

## Boîte d'édition

**Ajouter une ligne** crée une nouvelle ligne ; un double-clic sur une ligne l'ouvre pour la modifier, la dupliquer ou la supprimer. La boîte comporte un seul formulaire :

<svg viewBox="0 0 1200 290" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njmfd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njmfd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njmfd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njmfd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="250" rx="14" fill="url(#njmfd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Filtrage des menus</text>
  <line x1="221" y1="60" x2="979" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE &#42;</text>
  <rect x="240" y="85" width="235" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="99.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">BUYER — Buyer</text>
  <text x="485" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES &#42;</text>
  <rect x="485" y="85" width="235" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="495" y="99.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">EnterpriseOne Menus  ▾</text>
  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE PARENTE</text>
  <rect x="240" y="133" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="147.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Accounts Payable  ▾</text>
  <text x="240" y="176" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE ENFANT &#42;</text>
  <rect x="240" y="181" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Voucher Entry · P0411  ▾</text>
  <text x="730" y="176" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AFFICHÉE</text>
  <rect x="730" y="188" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="747" y="197" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">désactivé</text>
  <line x1="221" y1="222" x2="979" y2="222" stroke="#1f2937" strokeWidth="1"/>
  <rect x="883" y="232" width="77" height="22" rx="5" fill="url(#njmfd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="921.5" y="246.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="820" y="232" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="848.5" y="246.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="747" y="232" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="780.5" y="246.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="674" y="232" width="67" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="707.5" y="246.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle et vue de tâches</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clés : figées une fois enregistrées</text>
  <line x1="200" y1="97.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche parente, puis enfant</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque liste suit la précédente</text>
  <line x1="200" y1="167.0" x2="240" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Listes par nom</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'enfant montre son objet</text>
  <line x1="1000" y1="97.0" x2="720" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affichée</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">décochée : masquée au rôle</text>
  <line x1="1000" y1="177.0" x2="730" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="20" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer</text>
  <text x="30" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le rôle revoit la tâche</text>
  <line x1="200" y1="245.0" x2="674" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
</svg>

| Champ | Saisie |
|---|---|
| **Role** | Le rôle. Obligatoire. |
| **Vue de tâches** | La vue de tâches, choisie dans la liste des vues par leur nom. Obligatoire. |
| **Tâche parente** | Le dossier, choisi dans la liste des tâches parentes de cette vue. |
| **Tâche enfant** | La tâche, choisie dans la liste des tâches placées sous ce parent — chacune avec son nom et l'objet qu'elle lance. Obligatoire. |
| **Affichée** | Cochée par défaut. La décocher masque la tâche pour le rôle. |

Le rôle, la vue de tâches et les deux tâches forment la clé de la ligne : ils sont figés une fois la ligne enregistrée. Supprimer une ligne affiche de nouveau la tâche pour le rôle.

---

## Suivi des changements

Les changements faits sur cet écran sont capturés dans le [paquet de modifications](../../nomaflow/change-packages.md) actif, sous l'entité `security`, comme sur les autres écrans de sécurité : un changement de filtrage des menus se promeut d'un environnement à l'autre sous forme de lot relu.

---

## Accès

L'écran se trouve dans le dossier **Maintenance de la sécurité** ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). La page **Gestion de la sécurité** écrit aussi par lui.

---

## Conseils & bonnes pratiques

- **Filtrer d'abord sur un rôle ou une vue de tâches** : la table contient les lignes de tous les rôles.
- **Masquer un dossier plutôt que chaque tâche** : une ligne suffit, et les tâches ajoutées plus tard au dossier sont masquées elles aussi.
- **Passer par l'import Excel** pour le menu d'un nouveau rôle : exporter les lignes d'un rôle de référence, changer le rôle, charger le fichier.
- **Un menu n'est pas une sécurité** : masquer une tâche n'empêche pas un rôle d'exécuter son objet — c'est le rôle du [Security Workbench](./security-workbench.md).
