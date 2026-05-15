---
title: Département
description: "Catalogue autonome des couples groupe AD / département — source des valeurs proposées dans les listes déroulantes des écrans LDAP."
keywords: [Nomasx-1, paramètres, département AD, groupe, catalogue, LDAP, liste déroulante]
---

# Département

L'écran **Département** est le catalogue sous-jacent des couples `(Groupe, Département)` qui alimente tous les autres écrans LDAP. Une ligne par couple. C'est d'ici que viennent les valeurs proposées dans les listes déroulantes de *LDAP → Paramètres* et *Utilisateurs par applications*.

Il est volontairement simple — uniquement les deux colonnes texte. La liaison aux applications se fait sur l'écran *LDAP → Paramètres* (voir *Sécurité → LDAP → Paramètres* pour les détails).

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sdept-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sdept-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Sécurité · Département</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUPE</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉPARTEMENT AD</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>
</svg>

---

## Objectif de l'écran

- **Catalogue maître des couples *(Groupe, Département)*.** Sert de source aux listes déroulantes des écrans LDAP.
- **Maintenir l'alignement avec l'attribut département AD** pour que la matrice *Utilisateurs par applications* se rapproche correctement.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Groupe** | `LDAPD_GROUP` — texte. | Cumul fonctionnel de haut niveau. |
| **Département AD** | `LDAPD_DEPARTEMENT` — texte. | Valeur du département AD. Doit correspondre à l'attribut `department` des entrées LDAP. |

---

## Boîte de dialogue

Cliquer sur **Ajouter** pour déclarer un couple, ou double-cliquer une ligne pour la modifier. Formulaire à un seul onglet, deux champs.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sdept-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sdept-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier le département</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Groupe</text>
  <rect x="60" y="116" width="420" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>

  <text x="500" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Département AD</text>
  <rect x="500" y="116" width="420" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Groupe** | Texte libre. Pôle fonctionnel qui regroupe les départements. |
| **Département AD** | Texte libre. Doit correspondre à l'attribut `department` d'une entrée LDAP, à la lettre près. |

---

## Conseils & bonnes pratiques

- **Modifier cette liste avant d'ajouter des lignes dans *Sécurité → LDAP → Paramètres*** — la page Paramètres y puise ses valeurs.
- **Vérifier l'orthographe contre l'AD** — un département mal tapé disparaît silencieusement de la jointure LDAP.
- **Retirer les couples obsolètes** pour garder les listes déroulantes courtes.
