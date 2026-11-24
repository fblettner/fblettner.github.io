---
title: SoD — Activités
description: "Activités nommées au sein de chaque processus métier — unités atomiques que la matrice SoD combine."
keywords: [Nomasx-1, paramètres, SoD, activités, actions atomiques, processus métier]
---

# SoD — Activités

L'écran **Activités** liste les activités nommées au sein de chaque processus métier. Une ligne par `(Application, Process, Activité)`. Une activité est l'*unité atomique* de l'analyse SoD — par exemple *Créer fournisseur*, *Approuver paiement*, *Comptabiliser écriture*.

La *Matrice* combine des paires d'activités pour exprimer les incompatibilités. L'écran *Objets* rattache chaque activité aux programmes source qui l'implémentent.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sda-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sda-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sda-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sda-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#sda-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Activités (SoD)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">64 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="272.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Importer</text>
  <rect x="317" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="327" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="473" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="512.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="112" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="112" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID (ID)</text>
  <text x="537" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="687" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITÉ ID</text>
  <text x="787" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITÉ</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="537" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="687" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PA01</text>
  <text x="787" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create supplier</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="537" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="687" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PA02</text>
  <text x="787" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Enter voucher</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="537" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="687" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PA03</text>
  <text x="787" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Pay supplier</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2C01</text>
  <text x="537" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Order to Cash</text>
  <text x="687" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2CA01</text>
  <text x="787" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create customer</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 64</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">processus de rattachement</text>
  <line x1="435.0" y1="320" x2="545" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="665.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activité</text>
  <text x="675.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une tâche métier</text>
  <line x1="885.0" y1="320" x2="795" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouter ou mettre à jour depuis Excel</text>
  <line x1="197" y1="123.0" x2="258" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grille en lecture seule</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas de dialogue au clic</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier à compléter</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Définir les actions atomiques** sur lesquelles le modèle SoD raisonne.
- **Identifiants stables d'un cycle d'audit à l'autre** — *Activité ID* alimente la matrice et les rapports de conflits.
- **Une ligne par action granulaire.** Garder les activités précises : *Créer fournisseur* et *Modifier fournisseur* sont deux activités, pas une entrée combinée.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ACT_APPS_ID` — application. | Application à laquelle l'activité s'applique. |
| **Process ID** | `ACT_PROCESS_ID` — lié à *Process*. | Processus métier auquel l'activité appartient. |
| **Activité ID** | `ACT_ID` — identifiant court. | Référence utilisée par *Matrice*, *Objets* et les vues *Conflits*. |
| **Activité** | `ACT_NAME` — libellé convivial. | Nom lisible. |

---

## Boîte de dialogue \{#edit-dialog\}

**Ajouter une ligne** ouvre un formulaire vide ; un clic sur une ligne l'ouvre, sous le titre **Modifier · Paramètres - Activités (SoD)**, avec **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**. **Modifier en lot** change plusieurs lignes directement dans la grille.

<svg viewBox="0 0 1320 336" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdactd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdactd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdactd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdactd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#sdactd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Activités (SoD)</text>
  <rect x="1054" y="34" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1066" y="49" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <rect x="240" y="88" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="103.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">1 — JDE-PROD</text>
  <rect x="240" y="88" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="128" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID PROCESSUS</text>
  <rect x="240" y="134" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="149.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTC001 — Order To Cash</text>
  <rect x="240" y="134" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="174" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ ID</text>
  <rect x="240" y="180" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTC02</text>
  <rect x="240" y="180" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="220" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ</text>
  <rect x="240" y="226" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="241.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Process sales orders</text>
  <line x1="220" y1="266" x2="1100" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <rect x="996" y="280" width="84" height="22" rx="5" fill="url(#sdactd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1038.0" y="294.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="925" y="280" width="63" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="956.5" y="294.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="844" y="280" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.5" y="294.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="763" y="280" width="73" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="799.5" y="294.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clés</text>
  <text x="30" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">figées une fois enregistrées</text>
  <line x1="200" y1="91.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdactd-arrow)"/>
  <rect x="1120" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Listes filtrées</text>
  <text x="1130" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtrées sur les champs au-dessus</text>
  <line x1="1120" y1="91.0" x2="1060" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdactd-arrow)"/>
  <rect x="1120" y="246" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="261" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer · Dupliquer</text>
  <text x="1130" y="274" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur une ligne enregistrée</text>
  <line x1="1120" y1="263.0" x2="880.5" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdactd-arrow)"/>
</svg>

| Champ | Contenu |
|---|---|
| **ID application** | L'application, choisie dans la liste. |
| **ID processus** | Le processus, choisi parmi ceux de l'application. |
| **Activité ID** | Code court de l'activité (`OTC02`…), repris par la matrice et les objets. |
| **Activité** | Nom de l'activité. |

Les clés — ID application, ID processus et Activité ID — sont figées une fois la ligne enregistrée : pour en changer une, supprimer la ligne puis la recréer.

---

## Import depuis Excel \{#import\}

Pour ajouter ou modifier de nombreuses lignes d'un coup, **Importer** charge un fichier Excel (`.xlsx`) ou `.csv` dont les colonnes reprennent celles de la grille — le plus simple est d'**Exporter** la grille, de modifier le fichier puis de le réimporter.

<svg viewBox="0 0 1320 358" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="314" rx="14" fill="url(#sdai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="320" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Importer depuis Excel</text>
  <line x1="300" y1="66" x2="1020" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="320" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES EXISTANTES</text>
  <rect x="320" y="96" width="156" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="398.0" y="110.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Mettre à jour ou insérer</text>
  <rect x="482" y="96" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="540.5" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Insérer seulement</text>
  <rect x="605" y="96" width="150" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Mettre à jour seulement</text>
  <rect x="320" y="130" width="680" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#475569" strokeWidth="1" strokeDasharray="5 4"/>
  <text x="660.0" y="154" fill="#94a3b8" fontSize="14" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪</text>
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">sod_activities.xlsx · 64 lignes</text>
  <text x="320" y="214" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">64 lignes</text>
  <rect x="380" y="202" width="78" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="419.0" y="214.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 63 valides</text>
  <rect x="464" y="202" width="83" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="505.5" y="214.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ 1 invalides</text>
  <rect x="320" y="230" width="680" height="40" rx="6" fill="rgba(255,69,58,0.06)" stroke="rgba(255,69,58,0.35)" strokeWidth="1"/>
  <text x="332" y="245" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne 12 · ACT_ID=P2PA12</text>
  <text x="988" y="245" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">insert</text>
  <text x="332" y="261" fill="#f87171" fontSize="9" fontFamily="system-ui, sans-serif">Process ID : absent de la liste de valeurs</text>
  <line x1="300" y1="282" x2="1020" y2="282" stroke="#1f2937" strokeWidth="1"/>
  <rect x="814" y="294" width="186" height="24" rx="5" fill="url(#sdai-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="907.0" y="309.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer 63 lignes valides</text>
  <rect x="743" y="294" width="63" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="774.5" y="309.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="12" y="101" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="116" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes existantes</text>
  <text x="22" y="129" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mettre à jour ou insérer · insérer · mettre à jour</text>
  <line x1="282" y1="118.0" x2="360" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="12" y="143" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="158" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déposer le fichier</text>
  <text x="22" y="171" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx ou .csv, colonnes par nom</text>
  <line x1="282" y1="160.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="1034" y="203" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="218" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérifier</text>
  <text x="1044" y="231" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles et base, avant d'enregistrer</text>
  <line x1="1034" y1="220.0" x2="430" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="1034" y="245" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="260" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque ligne invalide</text>
  <text x="1044" y="273" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec sa raison</text>
  <line x1="1034" y1="262.0" x2="1000" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="1034" y="301" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="316" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer les lignes valides</text>
  <text x="1044" y="329" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les invalides sont ignorées</text>
  <line x1="1034" y1="318.0" x2="907.0" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
</svg>

1. Choisir le traitement des **Lignes existantes** : **Mettre à jour ou insérer** (par défaut), **Insérer seulement** ou **Mettre à jour seulement**.
2. Déposer le fichier dans la fenêtre, puis cliquer sur **Vérifier** : chaque ligne est contrôlée au regard des règles de l'écran et de la base, et chaque ligne invalide est listée avec sa raison.
3. **Enregistrer N lignes valides** écrit les lignes valides ; les lignes invalides sont ignorées.

Le fichier porte les colonnes suivantes :

| Colonne | Contenu |
|---|---|
| **Application ID** | Clé — l'application (son ID). |
| **Process ID** | Clé — processus de rattachement de l'activité. |
| **Activité ID** | Clé — code court de l'activité. |
| **Activité** | Libellé de l'activité. |

---

## Conseils & bonnes pratiques

- **Nommer côté métier.** Utiliser des verbes (*Créer*, *Modifier*, *Approuver*, *Comptabiliser*) — plus simple à discuter avec les responsables métier que des libellés techniques.
- **Garder les noms stables.** Un renommage casse la comparaison entre rapports SoD successifs.
- **Grouper les activités par processus.** Une activité qui s'étend sur deux processus pointe en général une mauvaise classification — du processus ou de l'activité.
