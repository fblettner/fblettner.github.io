---
title: Nomasx-1 — Présentation
description: "Nomasx-1 est une application de sécurité et de conformité d'entreprise bâtie sur Liberty Next. Gestion centralisée des utilisateurs et des rôles, conformité des licences JD Edwards et Oracle, analyse automatisée de la séparation des tâches — visibilité complète, maîtrise des risques, conformité réglementaire."
keywords: [Nomasx-1, nomasx1, sécurité entreprise, conformité, séparation des tâches, SoD, JD Edwards, JDE, Oracle, licence, CSI, LDAP, audit]
---

# Nomasx-1 — Présentation

**Nomasx-1** est une application de **sécurité et de conformité d'entreprise** bâtie sur [Liberty Next](/liberty/framework/overview). Elle centralise la **gestion des utilisateurs et des rôles**, surveille l'**utilisation des licences JD Edwards et Oracle** par rapport aux droits réellement acquis, et exécute une **analyse automatisée de la séparation des tâches (SoD)** — trois piliers sous une seule UI, avec intégration native JD Edwards.

Nomasx-1 est une **application sous licence** : un ensemble de connecteurs, d'écrans et de tableaux de bord verrouillé par une clé RS256. Le framework lui-même est gratuit ; Nomasx-1 et [Nomajde](/liberty/nomajde/overview) sont vendus ensemble sous une seule clé.

:::info[En cours de rédaction]
Cette présentation est le point d'entrée. Les pages par écran (Sécurité, Applications, Base de données, Licences, matrices SoD, rapports) arriveront dans des itérations suivantes.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nx1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nx1-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nx1-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="220" height="380" rx="14" fill="url(#nx1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 SYSTÈMES SOURCES</text>

  <rect x="56" y="84" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="68" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">security workbench, rôles, env.</text>

  <rect x="56" y="140" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="160" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Base Oracle</text>
  <text x="68" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">version, options, vues DBA</text>

  <rect x="56" y="196" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="216" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">LDAP / Active Directory</text>
  <text x="68" y="232" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">vérification des comptes</text>

  <rect x="56" y="252" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="272" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">CSI / droits de licence</text>
  <text x="68" y="288" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Support Customer ID</text>

  <rect x="56" y="308" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="328" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Matrices SoD</text>
  <text x="68" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">prédéfinies + personnalisables</text>

  <rect x="56" y="360" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="380" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Attributs personnalisés</text>
  <text x="68" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">comptes techniques / fonctionnels</text>

  <line x1="260" y1="220" x2="380" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nx1-arrow)"/>

  <rect x="380" y="40" width="240" height="380" rx="14" fill="url(#nx1-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="400" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ PILIERS NOMASX-1</text>

  <rect x="396" y="84" width="208" height="100" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">👥 Sécurité & utilisateurs</text>
  <text x="408" y="122" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• utilisateurs, rôles, dernière connex.</text>
  <text x="408" y="136" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• dates d'expiration des rôles</text>
  <text x="408" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• comptes orphelins / doublons</text>
  <text x="408" y="164" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• vérification LDAP / AD</text>
  <text x="408" y="178" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• traçabilité · sans audit JDE</text>

  <rect x="396" y="192" width="208" height="100" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="408" y="212" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📊 Conformité Oracle / JDE</text>
  <text x="408" y="230" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• CSI + licences acquises</text>
  <text x="408" y="244" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• actifs vs déclarés</text>
  <text x="408" y="258" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• modules & usage de transactions</text>
  <text x="408" y="272" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• versions & options BDD</text>
  <text x="408" y="286" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• rapports de risque financier</text>

  <rect x="396" y="300" width="208" height="100" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="408" y="320" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">⚖ Séparation des tâches</text>
  <text x="408" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• détection automatisée</text>
  <text x="408" y="352" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• matrices prédéfinies + sur mesure</text>
  <text x="408" y="366" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• conflits par processus / activité</text>
  <text x="408" y="380" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• extraction auto des droits</text>
  <text x="408" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• rapports de risques & conflits</text>

  <line x1="620" y1="220" x2="720" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nx1-arrow)"/>

  <rect x="720" y="40" width="240" height="380" rx="14" fill="url(#nx1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="740" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📊 SORTIE</text>

  <rect x="736" y="84" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Tableau de bord conformité</text>
  <text x="748" y="118" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">dernier rafraîchissement · KPI</text>

  <rect x="736" y="136" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="156" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Audit par utilisateur</text>
  <text x="748" y="170" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">droits effectifs, historique</text>

  <rect x="736" y="188" width="208" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="748" y="208" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Rapport d'usage</text>
  <text x="748" y="222" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">usage vs droits</text>

  <rect x="736" y="240" width="208" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="748" y="260" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Rapport financier</text>
  <text x="748" y="274" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">montant de risque · remédiation</text>

  <rect x="736" y="292" width="208" height="44" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="748" y="312" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Rapport SoD</text>
  <text x="748" y="326" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">conflits par utilisateur / société</text>

  <rect x="736" y="344" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="364" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Export · CSV / Excel</text>
  <text x="748" y="378" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">grilles filtrées</text>
</svg>

---

## Ce que fait l'application

### Sécurité & gestion des utilisateurs

Vue centralisée des utilisateurs, des rôles et des affectations — sur JDE, AD et tout autre connecteur base de données ou API que Nomasx-1 vient lire.

| Fonctionnalité | Apport |
|---|---|
| **Catalogue d'utilisateurs** | Date de création et dernière connexion par utilisateur. Détection des comptes dormants, des ajouts récents, des fenêtres d'activité anormales. |
| **Rôles & affectations** | Dates effectives et d'expiration par affectation de rôle. Les rôles expirés mais non retirés apparaissent en rouge. |
| **Détection de risques** | Rôles non affectés, doublons d'utilisateurs, comptes techniques mêlés aux comptes fonctionnels — signalés automatiquement. |
| **Intégration LDAP / AD** | Chaque utilisateur est vérifié contre l'annuaire : le compte existe-t-il encore ? Est-il actif ? |
| **Enrichissement** | Attributs personnalisés par utilisateur / rôle : responsable métier, département, indicateur « compte technique », … Alimente les rapports. |
| **Traçabilité d'activité** | Trace l'activité utilisateur **sans** activer l'audit JD Edwards — pas d'impact opérationnel sur le système source. |
| **Intégration native JDE** | Lit directement le security workbench JDE (pas d'exports, pas d'extractions planifiées) — l'écran reflète l'état courant. |

### Conformité Oracle & JD Edwards

Nomasx-1 sert aussi d'**atelier de conformité de licences** : ce qui a été acheté, ce qui est réellement utilisé, où se trouve l'écart.

| Fonctionnalité | Apport |
|---|---|
| **CSI & licences acquises** | Suivi du Customer Support Identifier Oracle et des licences réellement rattachées. |
| **Utilisateurs actifs vs déclarés** | Ce que JDE compte réellement face à ce que le contrat autorise. L'écart est plus fréquent qu'on ne le pense. |
| **Modules & usage de transactions** | Traçabilité d'accès par module — *qui touche réellement Financials / Distribution / Manufacturing*. Permet la discussion « ce module est-il encore nécessaire ? ». |
| **Version et options BDD** | Version Oracle, édition, options activées. Indispensable quand l'auditeur demande si *Advanced Compression* est utilisée. |
| **Usage vs droits** | Côte à côte : ce qui est utilisé, ce qui est acheté, le delta. |
| **Rapports de risque financier** | Chiffrage de l'écart, avec suggestions de remédiation. La sortie qu'un comité d'audit lira. |

### Séparation des tâches

Analyse automatisée de SoD — le cœur d'une revue type SoX.

| Fonctionnalité | Apport |
|---|---|
| **Détection automatisée** | Produit cartésien des droits effectifs de chaque utilisateur avec la matrice SoD — conflits remontés par utilisateur × société. |
| **Matrices prédéfinies + personnalisables** | Matrices livrées prêtes à l'emploi pour les risques ERP classiques (comptabiliser + approuver, fournisseur + paiement, …). Matrices sur mesure ajoutées par-dessus. |
| **Modèle processus · activité · risque** | Les conflits se définissent au niveau du processus et de l'activité, classés par risque. Plus lisible que des paires brutes rôle vs rôle. |
| **Extraction automatique** | Les données de sécurité sont extraites de JDE / Oracle sur une planification — pas de préparation manuelle avant un scan. |
| **Rapports** | Rapports par utilisateur, par société et par risque, exportables CSV / Excel, avec la piste d'audit qui-a-validé-quoi. |

---

## Structure de l'application

La barre latérale de Nomasx-1 reprend les trois piliers ci-dessus plus un groupe Paramètres :

| Section | Sous-sections |
|---|---|
| **Tableau de bord** | Vue conformité, statut du dernier rafraîchissement, drill-through vers les écrans sous-jacents. |
| **Sécurité** | Gestion des utilisateurs, gestion des rôles, relations entre rôles, environnements, security workbench JDE. |
| **Applications** | Catalogue des applications JDE, versions, options de traitement. |
| **Base de données** | Version Oracle, options activées, inventaire DBA. |
| **Licences** | CSI · JD Edwards · Oracle · Licences souscrites · Rapport d'usage · Rapport financier. |
| **Paramètres** | Connecteurs source, planification, matrices SoD, règles de notification. |

---

## À qui s'adresse l'application

| Profil | Questions du quotidien |
|---|---|
| **Auditeur interne** | Y a-t-il des utilisateurs avec des droits en conflit sur la société de production ? Qui a été ajouté à un rôle sensible le trimestre dernier ? |
| **Responsable sécurité** | Qui a effectivement accès à *Comptabiliser une écriture* ? Quelles exceptions sont ouvertes et validées, par qui ? |
| **Administrateur JDE** | Quels rôles détient cet utilisateur sur les différents environnements ? Quels formulaires peut-il atteindre ? |
| **Responsable licences** | Combien des modules achetés sont réellement utilisés ? Où est l'écart financier et qui pilote la remédiation ? |
| **CISO / Risque** | Comment évolue notre posture SoD — toujours les mêmes conflits chaque trimestre, ou de nouveaux ? |

---

## Utilisateurs, rôles et séparation des tâches — dans Nomasx-1 elle-même

L'authentification de Nomasx-1 (l'application qui gère l'analyse — pas la source JDE qu'elle lit) passe par le [backend d'auth](/liberty/framework/overview) de Liberty Next. Rôles types :

| Rôle Liberty | Ce que le rôle permet |
|---|---|
| `nomasx1.viewer` | Lire tous les écrans, lancer les tableaux de bord, aucune édition. |
| `nomasx1.editor` | Créer / modifier les matrices SoD, planifier les scans, gérer les règles de notification. |
| `nomasx1.auditor` | Lecture + validation des exceptions (seul rôle habilité à clore un conflit signalé). |
| `nomasx1.admin` | Tout ce qui précède + gestion des connecteurs source et du mapping AD / LDAP. |

Un déploiement type sépare **auditor** de **admin** — c'est la règle SoD qui protège l'outil SoD lui-même.

---

## Pour aller plus loin

| Où aller | Pourquoi |
|---|---|
| [Liberty Next → Présentation](/liberty/framework/overview) | Le framework sur lequel Nomasx-1 s'appuie. |
| Documentation par écran *(à venir)* | Sécurité · Applications · Base de données · Licences · Rapports SoD. |
| [Nomajde — Présentation](/liberty/nomajde/overview) | Application sœur — écrans JD Edwards, données temps réel, UI moderne. |
