---
title: Paramètres LDAP
description: "Regroupe les départements AD par application — le regroupement de la vue Utilisateurs par applications et de son export Excel."
keywords: [Nomasx-1, sécurité, LDAP, paramètres, regroupement département AD, export Excel, livrable d'audit]
---

# Paramètres LDAP

L'écran **Paramètres LDAP** est la table de regroupement qui alimente la vue *Utilisateurs par applications*. Chaque ligne associe un **département AD** à une **application** et un libellé de **groupe** libre.

Le même regroupement structure l'export Excel de *Utilisateurs par applications* : filtrée sur un groupe ou un département, la grille donne par **Exporter → Excel (.xlsx)** le fichier que les auditeurs demandent généralement pour confirmer *« qui appartient à quel département AD, sur quelle application, avec quels rôles »*.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxlds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxlds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxlds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxlds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxlds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Department</text>
  <rect x="380.572" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="402.572" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_department_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 lignes · 6,9 ms</text>
  <rect x="952" y="100" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="101" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="105" x2="1018" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="128" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="128" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="128" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="128" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE L'APPLICATION</text>
  <text x="552" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GROUPE</text>
  <text x="622" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DEPARTMENT</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="552" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="622" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="552" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="622" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AR</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="552" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <text x="622" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="552" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">OPERATIONS</text>
  <text x="622" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LOG</text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–12 sur 12</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'application concernée</text>
  <line x1="200" y1="227.0" x2="270" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlds-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupe</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">regroupe des départements</text>
  <line x1="1120" y1="217.0" x2="572" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlds-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Département AD</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeur department de l'annuaire</text>
  <line x1="1120" y1="307.0" x2="980" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlds-arrow)"/>
</svg>

---

## Objectif de l'écran

Deux finalités complémentaires :

- **Regrouper les départements AD.** La colonne *Groupe* est un libellé humain qui rassemble plusieurs départements AD dans un même pôle fonctionnel (FINANCE couvre `FIN-AP`, `FIN-AR`, `FIN-CONTROL`, …). Elle pilote la manière dont la vue *Utilisateurs par applications* agrège ses lignes.
- **Structurer l'export Excel.** Seuls les départements listés ici apparaissent dans *Utilisateurs par applications*, donc dans son export ; filtrer cette grille sur un *Groupe* avant **Exporter → Excel (.xlsx)** donne un fichier par groupe de départements.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. | Application à laquelle le département est rattaché. |
| **Nom de l'application** | `APPS_NAME` — nom issu de `SETTINGS_APPLICATIONS`. | Libellé lisible de l'application. |
| **Groupe** | `LDAPD_GROUP` — texte libre. | Libellé humain qui rassemble plusieurs départements AD. Sert d'axe de tri / de regroupement sur la grille *Utilisateurs par applications*. |
| **Département AD** | `LDAP_DEPARTMENT` — doit correspondre à l'attribut `department` d'une entrée LDAP. | Département AD inclus dans l'export pour l'application. |

L'écran est en lecture seule. Les paires groupe / département se maintiennent dans [Paramètres → Sécurité → Département](../../settings/security/department.md).

---

## Conseils & bonnes pratiques

- **Un *Groupe* vide** signale un département AD de l'annuaire qui n'a pas encore de couple dans [Paramètres → Sécurité → Département](../../settings/security/department.md) — le déclarer à cet endroit.
- **Garder les libellés de *Groupe* stables** — les modifier change le découpage de l'export et complique la comparaison avec le livrable du trimestre précédent.
- **Un département non listé ici n'est pas exporté** — même si des utilisateurs AD portant ce département apparaissent dans l'écran *Utilisateurs LDAP*, ils ne figureront ni dans *Utilisateurs par applications* ni dans son export. Déclarer le couple dans *Paramètres → Sécurité → Département* quand un nouveau département commence à émettre des demandes d'accès.
- **L'annuaire complet** se trouve dans l'écran [Utilisateurs LDAP](./users.md) — à exporter pour l'annexe d'audit, et pour vérifier qu'une personne absente de *Utilisateurs par applications* n'est pas absente de l'AD.
