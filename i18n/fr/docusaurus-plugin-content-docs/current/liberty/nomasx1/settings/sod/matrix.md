---
title: SoD — Matrice
description: "Paires d'activités incompatibles — la matrice SoD qui définit quelles combinaisons d'activités déclenchent quel risque."
keywords: [Nomasx-1, paramètres, SoD, matrice, activités incompatibles, appariement de risques]
---

# SoD — Matrice

L'écran **Matrice** liste les paires d'activités qui produisent un risque SoD. Une ligne par `(Application, Process, Activité 1, Activité 2)`. Chaque ligne associe la paire à un *Risque* et à un *Niveau* — le **moteur de règles** derrière chaque conflit affiché par les écrans *Conflits*.

C'est le paramètre SoD le plus opérationnellement critique : modifier une ligne ici change ce que tous les écrans de conflit calculeront à partir du prochain rafraîchissement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodm-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sodm-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · SoD · Matrice</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="240" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 1</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 2</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="700" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Élevé</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO-MOD</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RCT-APV</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="700" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Moyen</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="240" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CUST-CR</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ADJ-POST</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-O2C-04</text>
  <text x="700" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Moyen</text>
</svg>

---

## Objectif de l'écran

- **Encoder le règlement SoD** — chaque paire déclarée ici génère une ligne dans *Conflits → Détails* dès qu'un utilisateur détient les deux activités.
- **Lier chaque paire à un risque nommé.** La colonne *Risque* est ce que lisent les auditeurs ; *Niveau* pilote la pondération.
- **Maintenir de façon symétrique.** `(A, B)` et `(B, A)` portent le même sens — déclarer une seule fois et laisser le moteur parcourir dans les deux sens.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `MATRIX_APPS_ID` — application. | Application à laquelle la règle s'applique. |
| **Process ID** | `MATRIX_PROCESS_ID` — process. | Processus métier. |
| **Activité 1** | `MATRIX_ACT1_ID` — lié à *Activités*. | Première action incompatible. |
| **Activité 2** | `MATRIX_ACT2_ID` — lié à *Activités*. | Seconde action incompatible. |
| **Risque ID** | `MATRIX_RISK_ID` — lié à *Risques*. | Risque nommé que la paire instancie. |
| **Niveau** | `MATRIX_RISK_LEVEL` — gravité. | Multiplicateur appliqué aux conflits produits. |

---

## Boîte de dialogue

Cliquer sur **Ajouter** ou double-cliquer une ligne pour ouvrir le formulaire.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodm-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodm-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier la ligne matrice SoD</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod ▾</text>

  <text x="240" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Process</text>
  <rect x="240" y="116" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P ▾</text>

  <text x="340" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Activité 1</text>
  <rect x="340" y="116" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR ▾</text>

  <text x="480" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Activité 2</text>
  <rect x="480" y="116" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV ▾</text>

  <text x="620" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Risque</text>
  <rect x="620" y="116" width="200" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="632" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01 ▾</text>

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
| **Activité 1** | Liste déroulante filtrée sur les activités du processus choisi. Première activité incompatible. |
| **Activité 2** | Liste déroulante filtrée sur les mêmes activités. Seconde activité incompatible. |
| **Risque** | Liste déroulante filtrée sur les risques déclarés sur le processus choisi. Risque nommé que la paire instancie. |
| **Niveau** | `Élevé` / `Moyen` / `Faible` (ou échelle numérique). Surcharge le niveau par défaut du risque pour cette paire si besoin. |

---

## Conseils & bonnes pratiques

- **Ajouter une ligne** génère de nouveaux conflits au prochain rafraîchissement — se coordonner avec l'administrateur sécurité et la RH.
- **Retirer une ligne** efface les conflits existants au prochain rafraîchissement. Documenter la justification : un auditeur qui revoit le cadre SoD demandera pourquoi.
- **Le niveau ici doit correspondre au niveau du catalogue *Risques*** — garder les deux alignés évite un rendu de tableau de bord confus.
- **Une paire d'activités à faible interaction métier** n'a pas vocation à être une règle — limiter la matrice aux conflits qui surviennent réellement en pratique.
