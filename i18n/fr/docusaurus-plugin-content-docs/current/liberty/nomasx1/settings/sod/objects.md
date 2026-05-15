---
title: SoD — Objets
description: "Programmes source rattachés à chaque activité SoD — les objets techniques dont l'exécution vaut réalisation de l'activité."
keywords: [Nomasx-1, paramètres, SoD, objets, mappage activité, programmes source]
---

# SoD — Objets

L'écran **Objets** rattache des programmes source aux activités SoD. Une ligne par `(Application, Process, Activité, Row, Objet)`. Chaque ligne signifie : *exécuter cet objet vaut réalisation de cette activité*. Une activité couvre généralement plusieurs objets — écrans interactifs, programmes batch, mêmes programmes avec des versions différentes.

C'est le pont entre le modèle SoD abstrait et les programmes concrets exécutés par le système source.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodo-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sodo-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · SoD · Objets</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="240" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVITÉ</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LIGNE</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET ID</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="450" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Fiche fournisseur</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="450" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Répertoire fournisseur</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="450" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Paiement manuel</text>
</svg>

---

## Objectif de l'écran

- **Indiquer à Nomasx-1 ce qui compte comme « faire » une activité.** Chaque ligne fixe une activité SoD sur un objet source concret.
- **Plusieurs lignes par activité est normal.** *Ligne* les numérote — le moteur considère que n'importe laquelle vaut preuve d'exécution de l'activité.
- **Source de *Conflits → Avérés*.** Sans mappage d'objet, l'activité n'a pas d'empreinte observable, donc l'analyse des conflits avérés ne peut pas fonctionner.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `OBJECT_APPS_ID` — application. | Application. |
| **Process ID** | `OBJECT_PROCESS_ID` — process. | Processus SoD. |
| **Activité ID** | `OBJECT_ACT_ID` — activité. | Activité supportée par l'objet. |
| **Ligne** | `OBJECT_ROW_ID` — séquence. | Identifiant stable parmi les objets d'une même activité. |
| **Objet ID** | `OBJECT_ID` — objet technique. | Code programme (par exemple JDE `P0401`). |
| **Nom** | `OBJECT_NAME` — libellé convivial. | Nom lisible du programme. |

---

## Boîte de dialogue

Cliquer sur **Ajouter** ou double-cliquer une ligne pour ouvrir le formulaire.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodo-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodo-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier l'objet SoD</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod ▾</text>

  <text x="240" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Process</text>
  <rect x="240" y="116" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P ▾</text>

  <text x="340" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Activité</text>
  <rect x="340" y="116" width="140" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR ▾</text>

  <text x="500" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ligne</text>
  <rect x="500" y="116" width="60" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>

  <text x="580" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Objet ID</text>
  <rect x="580" y="116" width="140" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>

  <text x="740" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="740" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="752" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Fiche fournisseur</text>

  <rect x="780" y="156" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="174" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Annuler</text>
  <rect x="848" y="156" width="78" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="887" y="174" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Enregistrer</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Application** | Liste déroulante des applications déclarées. |
| **Process** | Liste déroulante filtrée sur les processus de l'application choisie. |
| **Activité** | Liste déroulante filtrée sur les activités du processus choisi. |
| **Ligne** | Numéro de séquence dans la liste des objets de l'activité. Auto-incrémenté ; modifiable pour réordonner. |
| **Objet ID** | Code programme côté source (par exemple JDE `P0401`). |
| **Nom** | Nom convivial du programme. |

---

## Conseils & bonnes pratiques

- **Mapper tous les programmes qui touchent à l'activité** — la vue *Avérés* dépend d'un mappage complet. Des lignes manquantes produisent des faux négatifs.
- **Revérifier le mappage après un patch source** — une nouvelle version d'un programme (ou un point d'entrée alternatif) doit y être ajoutée.
- **Les mappages par activité ne doivent pas se chevaucher.** Le même objet sur deux activités différentes rend le modèle ambigu.
