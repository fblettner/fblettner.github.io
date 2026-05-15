---
title: CSI
description: "Customer Support Identifier — liste des contrats de support Oracle auxquels les applications connectées sont rattachées."
keywords: [Nomasx-1, licences, CSI, Customer Support Identifier, Oracle, contrat de support, droit acquis]
---

# CSI

L'écran **CSI** liste tous les *Customer Support Identifier* Oracle déclarés dans Nomasx-1. Une ligne par contrat. Chaque ligne porte l'identifiant, une description lisible, les dates de validité et le statut courant.

Le CSI est l'ancrage contractuel : les volumétries (licences acquises, support), l'analyse d'utilisation (*Rapport d'utilisation*) et le calcul d'impact financier (*Rapport financier*) s'y rattachent tous via le catalogue des composants.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="csi-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#csi-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · CSI</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CSI ID</text>
  <text x="180" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉBUT</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FIN</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>
  <text x="180" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne — groupe</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2018-01-01</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <rect x="800" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="825" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345910</text>
  <text x="180" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE — production</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-01</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-09-30</text>
  <rect x="800" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="825" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">11982001</text>
  <text x="180" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Internet Application Server historique — retiré</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2008-06-01</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-12-31</text>
  <rect x="800" y="200" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="830" y="212" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Clôturé</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 CSI actifs · 1 clôturé · inventaire historique · alimente Licences acquises</text>
</svg>

---

## Objectif de l'écran

Pour chaque CSI géré :

- **Inventorier les contrats de support.** Tout CSI actif doit être associé à au moins une application — sinon c'est un contrat payé pour une application qui n'en a plus l'usage.
- **Suivre les fenêtres de validité.** Les dates *Début* / *Fin* alimentent le calendrier des renouvellements.
- **Capter le statut.** *Actif* / *Clôturé* reflète ce qu'affiche le portail de gestion contractuelle Oracle. Les CSI clôturés restent dans le reporting historique mais ne comptent plus.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **CSI ID** | `CSI_ID` — identifiant numérique du contrat. | Référence Oracle. |
| **Description** | `CSI_DESCRIPTION` — texte. | Libellé lisible. |
| **Date début** | `CSI_FROM_DATE` — date. | Début de la couverture support. |
| **Date fin** | `CSI_TO_DATE` — date. | Fin de la fenêtre support en cours. |
| **Statut** | `CSI_STATUS` — `Actif` / `Clôturé`. | Indique si le contrat est en vigueur. |

Les colonnes d'audit (`CSI_AUDIT_USER`, `CSI_AUDIT_DATE`) sont masquées mais tracées sur la ligne.

---

## Boîte de dialogue

Cliquer sur **Ajouter** pour enregistrer un nouveau CSI, ou double-cliquer une ligne pour la modifier. La boîte a trois onglets. Les onglets *Applications* et *Composants* sont masqués à l'ajout — ils apparaissent une fois le CSI créé.

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="csi-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#csi-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier le CSI — 12345678</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="180" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="150" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Contrat de support</text>
  <rect x="250" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Applications</text>
  <rect x="380" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="440" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Composants</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CSI ID</text>
  <rect x="60" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>

  <text x="260" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="260" y="166" width="660" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne — groupe</text>

  <text x="60" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Début</text>
  <rect x="60" y="226" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2018-01-01</text>

  <text x="260" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="260" y="226" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-12-31</text>

  <text x="460" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="460" y="226" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Actif ▾</text>
</svg>

### Onglet 1 — Contrat de support

Identité du contrat. Tous les champs sont obligatoires.

| Champ | À renseigner |
|---|---|
| **CSI ID** | Identifiant numérique Oracle du contrat. |
| **Description** | Libellé convivial du contrat. |
| **Date début** | Début de la couverture support. |
| **Date fin** | Fin de la fenêtre support en cours. |
| **Statut** | `Actif` quand le contrat est en vigueur, `Clôturé` à son terme. |

### Onglet 2 — Applications

Table imbriquée reliant le CSI aux applications qu'il couvre. Ajouter une ligne par application : une entrée ici est ce qui fait que le contrat compte pour l'application dans *Licences acquises* et les rapports de conformité. Masqué à l'ajout.

### Onglet 3 — Composants

Table imbriquée listant les composants licenciés par CSI, avec leur quantité et leur métrique. L'agrégat alimente la page *Licences acquises*. Masqué à l'ajout.

---

## Menu contextuel

Clic droit sur une ligne pour ouvrir le menu.

| Action | Vers où |
|---|---|
| **Applications du CSI** | Liste des applications rattachées au CSI. |
| **Composants du CSI** | Liste des composants souscrits sous le CSI avec leur quantité. |

---

## Conseils & bonnes pratiques

- **Trier sur *Date fin* croissante** pour faire remonter les prochains renouvellements — vue de planification budgétaire.
- **Vérifier que chaque CSI actif est associé à au moins une application** dans *Licences acquises*. Un CSI orphelin est un contrat payé pour une application qui ne l'utilise plus.
- **Les CSI clôturés restent visibles** pour la traçabilité d'audit — les conserver plutôt que supprimer la ligne.
- **L'écran est en écriture** — seul l'administrateur licences devrait le modifier. Chaque changement est capté dans les colonnes d'audit et apparaît dans *Audit Trail* si la table sous-jacente est auditée.
