---
title: SoD — Process
description: "Catalogue des processus métier qui regroupent les activités suivies par la matrice de séparation des tâches."
keywords: [Nomasx-1, paramètres, SoD, séparation des tâches, catalogue de processus, P2P, O2C]
---

# SoD — Process

L'écran **Process** est le catalogue des processus métier utilisé par tous les autres écrans SoD. Une ligne par `(Application, Process)`. Chaque ligne porte un identifiant et un libellé lisible — par exemple `P2P` (*Procure to Pay*), `O2C` (*Order to Cash*), `R2R` (*Record to Report*).

C'est le sommet de la hiérarchie SoD : *Activités* se rattachent à un processus, *Risques* sont définis dans un processus, la *Matrice* regroupe les paires d'activités à risque par processus.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodp-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodp-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · SoD · Process</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS ID</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Achats à paiement</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Commande à encaissement</text>
</svg>

---

## Objectif de l'écran

- **Déclarer les processus** qui hébergeront les activités et risques SoD.
- **Utiliser des identifiants stables** — *Process ID* est référencé par *Activités*, *Risques*, *Matrice* et *Objets*. Renuméroter brise les références.
- **Un processus par grand domaine métier** — garder le catalogue court pour qu'il reste lisible. La plupart des entreprises en ont entre cinq et huit.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `PROCESS_APPS_ID` — application. | Application à laquelle le catalogue s'applique. |
| **Process ID** | `PROCESS_ID` — identifiant court. | Référence utilisée par tous les paramètres SoD dépendants. |
| **Nom** | `PROCESS_NAME` — libellé convivial. | Nom lisible. |

Les colonnes d'audit (`PROCESS_AUDIT_USER`, `PROCESS_AUDIT_DATE`) restent portées par la ligne.

---

## Boîte de dialogue

Cliquer sur **Ajouter** pour déclarer un processus, ou double-cliquer une ligne pour la modifier. La boîte tient sur un seul formulaire.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodp-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodp-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier le processus SoD</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production ▾</text>

  <text x="360" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Process ID</text>
  <rect x="360" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>

  <text x="560" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="560" y="116" width="360" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="572" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Achats à paiement</text>

  <rect x="780" y="156" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="174" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Annuler</text>
  <rect x="848" y="156" width="78" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="887" y="174" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Enregistrer</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Application** | Liste déroulante des applications déclarées. Le processus appartient à cette application. |
| **Process ID** | Identifiant court (par exemple `P2P`, `O2C`, `R2R`). Référencé par *Activités*, *Risques*, *Matrice* et *Objets*. |
| **Nom** | Libellé convivial du processus. Apparaît sur chaque rapport SoD. |

---

## Conseils & bonnes pratiques

- **Catalogue par application.** Si deux applications partagent le même périmètre SoD, déclarer le processus dans chacune — Nomasx-1 ne partage pas les lignes entre applications.
- **Reprendre le vocabulaire des auditeurs.** Utiliser les libellés (`P2P`, `O2C`, `R2R`, `RH`, `IT`) déjà employés dans les walkthroughs d'audit.
- **Garder la liste stable au fil des cycles d'audit** — comparer les chiffres SoD trimestre après trimestre suppose que les Process ID ne changent pas.
