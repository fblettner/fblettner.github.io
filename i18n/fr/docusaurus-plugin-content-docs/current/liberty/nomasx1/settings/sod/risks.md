---
title: SoD — Risques
description: "Risques nommés au sein de chaque processus métier, avec le niveau de gravité utilisé pour pondérer les constats SoD."
keywords: [Nomasx-1, paramètres, SoD, risques, catalogue de risques, gravité, audit]
---

# SoD — Risques

L'écran **Risques** catalogue les risques nommés déclarés dans chaque processus. Une ligne par `(Application, Process, Risque)`. Chaque ligne porte un libellé et un niveau de gravité — le multiplicateur que la *Matrice* applique pour pondérer les conflits dans les tableaux de bord.

Les risques sont le *ce qui pourrait mal se passer* — *Approuver un paiement à un fournisseur qu'on a créé soi-même*, *Ajuster la créance d'un client qu'on maintient*. Les activités sont des verbes ; les risques sont des phrases.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodr-card2-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodr-card2-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · SoD · Risques</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISQUE ID</text>
  <text x="420" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="860" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GRAVITÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="420" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer fournisseur &amp; approuver paiement</text>
  <text x="860" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Élevé</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="420" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Modifier CA &amp; approuver réception</text>
  <text x="860" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Moyen</text>
</svg>

---

## Objectif de l'écran

- **Nommer les risques** attendus par le référentiel d'audit.
- **Pondérer l'impact.** *Niveau de risque* (`Élevé`, `Moyen`, `Faible`, ou échelle numérique) est le multiplicateur appliqué par les tableaux de bord au comptage des conflits.
- **Une ligne par politique de risque.** Éviter de fusionner plusieurs risques sur une seule ligne — la matrice raisonne risque par risque.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `RISK_APPS_ID` — application. | Application à laquelle le risque s'applique. |
| **Process ID** | `RISK_PROCESS_ID` — lié à *Process*. | Processus métier auquel le risque appartient. |
| **Risque ID** | `RISK_ID` — identifiant. | Référence utilisée par *Matrice* et les vues *Conflits*. |
| **Nom** | `RISK_NAME` — libellé descriptif. | Nom lisible. |
| **Niveau** | `RISK_LEVEL` — gravité. | `Élevé` / `Moyen` / `Faible` (ou échelle numérique) — pilote la pondération. |

---

## Boîte de dialogue

Cliquer sur **Ajouter** ou double-cliquer une ligne pour ouvrir le formulaire.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodr-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodr-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier le risque SoD</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod ▾</text>

  <text x="260" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Process</text>
  <rect x="260" y="116" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P ▾</text>

  <text x="400" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Risque ID</text>
  <rect x="400" y="116" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="412" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>

  <text x="540" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="540" y="116" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer fournisseur &amp; approuver paiement</text>

  <text x="840" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Niveau</text>
  <rect x="840" y="116" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="852" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Élevé ▾</text>

  <rect x="780" y="156" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="174" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Annuler</text>
  <rect x="848" y="156" width="78" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="887" y="174" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Enregistrer</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Application** | Liste déroulante des applications déclarées. |
| **Process** | Liste déroulante filtrée sur les processus de l'application choisie. |
| **Risque ID** | Identifiant court (par exemple `R-P2P-01`). Référencé par la *Matrice*. |
| **Nom** | Description du risque sous forme de phrase — c'est ce que lisent les auditeurs. |
| **Niveau** | `Élevé` / `Moyen` / `Faible` (ou échelle numérique). Pilote la pondération des conflits. |

---

## Conseils & bonnes pratiques

- **Écrire le risque sous forme de phrase.** *Créer fournisseur + Approuver paiement* est plus clair que *VEN-PAY*. Les auditeurs lisent la phrase, le code sert au filtrage.
- **Choisir une échelle de gravité cohérente.** `Élevé` / `Moyen` / `Faible` partout, ou échelle numérique partout. Les échelles mixtes rendent les tableaux de bord illisibles.
- **Les risques élevés doivent rester rares.** Tout marquer `Élevé` neutralise le signal — la matrice perd sa valeur de priorisation.
