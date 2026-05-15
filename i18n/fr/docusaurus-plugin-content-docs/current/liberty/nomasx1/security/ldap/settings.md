---
title: Paramètres LDAP
description: "Regroupe les départements AD et pilote l'export Excel par département de la vue Utilisateurs par applications."
keywords: [Nomasx-1, sécurité, LDAP, paramètres, regroupement département AD, export Excel, livrable d'audit]
---

# Paramètres LDAP

L'écran **Paramètres LDAP** est la table de regroupement qui alimente la vue *Utilisateurs par applications*. Chaque ligne associe un **département AD** à une **application** et un libellé de **groupe** libre.

La même configuration pilote l'export Excel — un fichier par département, contenant une feuille par application, plus une feuille listant l'ensemble des entrées LDAP. C'est le livrable que les auditeurs demandent généralement pour confirmer *« qui appartient à quel département AD, sur quelle application, avec quels rôles »*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lds-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#lds-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · LDAP · Paramètres</text>
  <rect x="820" y="50" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="880" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Export Excel</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM APPLICATION</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUPE</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉPARTEMENT AD</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP Production</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RH</text>
  <text x="660" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">RH-PAIE</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">12 lignes · l'export produit un .xlsx par département · une feuille par application à l'intérieur</text>
</svg>

---

## Objectif de l'écran

Deux finalités complémentaires :

- **Regrouper les départements AD.** La colonne *Groupe* est un libellé humain qui rassemble plusieurs départements AD dans un même pôle fonctionnel (FINANCE couvre `FIN-AP`, `FIN-AR`, `FIN-CONTROL`, …). Elle pilote la manière dont la vue *Utilisateurs par applications* agrège ses lignes.
- **Piloter l'export Excel.** Depuis la vue *Utilisateurs par applications*, un bouton d'export produit **un fichier Excel par département**, **une feuille par application** à l'intérieur de chaque fichier, et une feuille listant **l'ensemble des entrées LDAP** en annexe. Les lignes de cet écran sont ce que l'export parcourt.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. | Application à laquelle le département est rattaché. |
| **Nom de l'application** | `APPS_NAME` — nom issu de `SETTINGS_APPLICATIONS`. | Libellé lisible de l'application. |
| **Groupe** | `LDAPD_GROUP` — texte libre. | Libellé humain qui rassemble plusieurs départements AD. Sert d'axe de tri / de regroupement sur la grille *Utilisateurs par applications*. |
| **Département AD** | `LDAP_DEPARTMENT` — doit correspondre à l'attribut `department` d'une entrée LDAP. | Département AD inclus dans l'export pour l'application. |

L'écran est en lecture seule. Les lignes se maintiennent via la table de configuration `SECURITY_LDAP_DPT` ; l'écran restitue le paramétrage en l'état.

---

## Conseils & bonnes pratiques

- **Une ligne par paire (Application × Département)** — les doublons sont inutiles. Si un département couvre plusieurs applications, ajouter une ligne par application.
- **Garder les libellés de *Groupe* stables** — les modifier change la structure de l'export et complique la comparaison avec le livrable du trimestre précédent.
- **Un département non listé ici n'est pas exporté** — même si des utilisateurs AD portant ce département apparaissent dans l'écran *Utilisateurs LDAP*, ils ne figureront pas dans le fichier Excel correspondant à leur département. Ajouter une ligne lorsqu'un nouveau département commence à émettre des demandes d'accès.
- **La feuille « toutes les entrées LDAP »** dans le fichier exporté est le catalogue brut non filtré — utile pour l'annexe d'audit et pour vérifier qu'une ligne manquante d'une feuille par application ne provient pas d'une absence côté AD.
