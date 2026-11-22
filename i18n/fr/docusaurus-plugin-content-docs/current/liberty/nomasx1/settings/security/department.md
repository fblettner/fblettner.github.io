---
title: Département
description: "Nomasx-1 Paramètres → Sécurité → Département : la liste modifiable des couples groupe / département AD qui regroupe les départements de l'annuaire pour Utilisateurs par applications, son export Excel et la vue LDAP Paramètres en lecture seule."
keywords: [Nomasx-1, paramètres, département AD, groupe, LDAP, utilisateurs par applications, export Excel]
---

# Département

L'écran **Département** (**Paramètres → Sécurité → Département**) est l'endroit où se tiennent les couples `(Groupe, Département)` : une ligne par couple, le groupe réunissant un ou plusieurs départements AD sous un même ensemble fonctionnel. *Utilisateurs par applications* et son export Excel ne présentent que les départements déclarés ici, regroupés comme ici.

Il est volontairement simple — uniquement les deux colonnes texte. L'écran [Sécurité → LDAP → Paramètres](../../security/ldap/settings.md), en lecture seule, en montre le résultat : pour chaque application, les départements AD trouvés dans l'annuaire avec le groupe auquel ils appartiennent ici — un groupe vide signale un département encore à déclarer.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dep-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#dep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Département LDAP</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="297.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="367" y="112" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="490" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="529.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Importer</text>
  <rect x="574" y="112" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="584" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="668" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="707.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GROUPE</text>
  <text x="543" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DÉPARTEMENT</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance</text>
  <text x="543" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounting</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance</text>
  <text x="543" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Treasury</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supply Chain</text>
  <text x="543" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Purchasing</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supply Chain</text>
  <text x="543" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Warehouse</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–4 sur 4</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupe</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">regroupe les départements pour l'export</text>
  <line x1="435.0" y1="320" x2="251" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="665.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Département</text>
  <text x="675.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tel qu'écrit dans l'annuaire</text>
  <line x1="885.0" y1="320" x2="551" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter · modifier en lot · importer</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une paire, plusieurs, un fichier</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le dialogue de modification</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Liste de référence des couples *(Groupe, Département)*.** Le seul endroit où se modifie le regroupement des départements AD ; *Sécurité → LDAP → Paramètres* et *Utilisateurs par applications* la lisent.
- **Maintenir l'alignement avec l'attribut département AD** pour que la matrice *Utilisateurs par applications* se rapproche correctement.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Groupe** | `LDAPD_GROUP` — texte. | Cumul fonctionnel de haut niveau. |
| **Département** | `LDAPD_DEPARTEMENT` — texte. | Valeur du département AD. Doit correspondre à l'attribut `department` des entrées LDAP. |

---

## Boîte de dialogue

**Ajouter une ligne** déclare un couple ; un clic sur une ligne l'ouvre. **Modifier en lot** change plusieurs lignes dans la grille et **Importer** les charge depuis Excel. Le formulaire porte les deux champs.

<svg viewBox="0 0 1320 276" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ded-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ded-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ded-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ded-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="226" rx="14" fill="url(#ded-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau · Paramètres - Département LDAP</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GROUPE</text>
  <rect x="235.0" y="98" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉPARTEMENT</text>
  <rect x="235.0" y="144" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Accounting</text>
  <line x1="215" y1="192" x2="1105" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="206" width="96" height="24" rx="5" fill="url(#ded-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="221.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="206" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="221.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="206" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="221.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupe</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom du fichier exporté</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ded-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Département</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">attribut department de l'AD</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ded-arrow)"/>
  <rect x="1119" y="213" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="228" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="241" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Annuler sort sans enregistrer</text>
  <line x1="1119" y1="230.0" x2="1037.0" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ded-arrow)"/>
</svg>

| Champ | À renseigner |
|---|---|
| **Groupe** | Texte libre. Pôle fonctionnel qui regroupe les départements. |
| **Département** | Texte libre. Doit correspondre à l'attribut `department` d'une entrée LDAP, à la lettre près. |

Les deux champs se modifient sur une ligne enregistrée : l'enregistrement rattache le département à un autre groupe, ou en corrige l'orthographe.

---

## Conseils & bonnes pratiques

- **Contrôler *Sécurité → LDAP → Paramètres* après une collecte de l'annuaire** — un département affiché avec un groupe vide n'a pas encore de couple ici : il reste hors de *Utilisateurs par applications* et de son export.
- **Vérifier l'orthographe contre l'AD** — un département mal tapé disparaît silencieusement de la jointure LDAP.
- **Retirer les couples obsolètes** pour garder des groupes lisibles.
