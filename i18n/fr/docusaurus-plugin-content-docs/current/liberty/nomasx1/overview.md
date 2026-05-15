---
title: Nomasx-1 — Présentation
description: "Nomasx-1 est une application de sécurité et de conformité d'entreprise — vue centralisée des utilisateurs et des rôles, conformité des licences Oracle et JD Edwards, analyse automatisée de la séparation des tâches."
keywords: [Nomasx-1, nomasx1, sécurité entreprise, conformité, séparation des tâches, SoD, JD Edwards, JDE, Oracle, licence, CSI, LDAP, audit]
---

# Nomasx-1 — Présentation

**Nomasx-1** est une application de **sécurité et de conformité d'entreprise**. Sur un seul écran, elle répond aux questions qu'un auditeur, un responsable sécurité ou un gestionnaire de licences pose à chaque trimestre :

- Qui a accès à quoi, sur quel environnement ?
- Un rôle a-t-il été accordé alors qu'il aurait dû expirer ?
- Combien des licences Oracle et JD Edwards que nous payons sont réellement utilisées ?
- Existe-t-il des utilisateurs qui peuvent comptabiliser une écriture et l'approuver en même temps ?

L'application lit directement ses données source — security workbench JDE, vues DBA Oracle, LDAP — et les présente sur un nombre limité de grilles, de tableaux de bord et de rapports. Aucun export à préparer, aucun tableur à maintenir.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nx1-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nx1-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="380" rx="14" fill="url(#nx1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">🛡 NOMASX-1 · Barre latérale</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="280" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="68" y="110" width="184" height="22" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="80" y="124" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">📊 Tableau de bord</text>

  <text x="76" y="148" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Sécurité</text>
  <text x="86" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateurs · Rôles</text>
  <text x="86" y="180" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Conflits SoD · Exceptions</text>

  <text x="76" y="204" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Applications</text>
  <text x="86" y="222" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Applications JDE · formulaires</text>

  <text x="76" y="246" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Base de données</text>
  <text x="86" y="264" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Version · options · comptes</text>

  <text x="76" y="288" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Licences</text>
  <text x="86" y="306" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CSI · JDE · Oracle</text>
  <text x="86" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Licences souscrites</text>
  <text x="86" y="334" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rapport d'usage</text>
  <text x="86" y="348" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rapport financier</text>

  <text x="76" y="372" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">⚙ Paramètres</text>

  <rect x="280" y="100" width="220" height="280" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="300" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">👥 SÉCURITÉ & UTILISATEURS</text>

  <text x="300" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateurs — création,</text>
  <text x="300" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">dernière connexion, doublons.</text>

  <text x="300" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rôles — affectations avec</text>
  <text x="300" y="206" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">dates de validité.</text>

  <text x="300" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Vérification LDAP / AD —</text>
  <text x="300" y="246" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">le compte existe-t-il encore ?</text>

  <text x="300" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Traçabilité d'activité —</text>
  <text x="300" y="286" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">sans activer l'audit JDE.</text>

  <text x="300" y="310" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Attributs personnalisés —</text>
  <text x="300" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">comptes techniques vs</text>
  <text x="300" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">fonctionnels.</text>

  <rect x="520" y="100" width="220" height="280" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="540" y="124" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📊 CONFORMITÉ LICENCES</text>

  <text x="540" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CSI — Customer Support</text>
  <text x="540" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Identifier + licences acquises.</text>

  <text x="540" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Actifs vs déclarés — JDE</text>
  <text x="540" y="206" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">compte vs contrat.</text>

  <text x="540" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Usage des modules — qui</text>
  <text x="540" y="246" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">utilise vraiment Financials.</text>

  <text x="540" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Base de données — version</text>
  <text x="540" y="286" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Oracle, options activées.</text>

  <text x="540" y="310" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Risque financier — montant</text>
  <text x="540" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">de l'écart + remédiation</text>
  <text x="540" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">suggérée.</text>

  <rect x="760" y="100" width="180" height="280" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="780" y="124" fill="#f87171" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚖ SoD</text>

  <text x="780" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Détection automatisée</text>
  <text x="780" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">des conflits.</text>

  <text x="780" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Matrices livrées et</text>
  <text x="780" y="206" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">personnalisables.</text>

  <text x="780" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Conflits par</text>
  <text x="780" y="246" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">processus / activité</text>
  <text x="780" y="262" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">/ risque.</text>

  <text x="780" y="286" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Extraction</text>
  <text x="780" y="302" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">automatique.</text>

  <text x="780" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rapports —</text>
  <text x="780" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CSV / Excel,</text>
  <text x="780" y="358" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">piste d'audit.</text>
</svg>

---

## Ce que couvre l'application

Nomasx-1 réunit trois domaines sous une même application :

### Sécurité et utilisateurs

La vue quotidienne sur les droits effectifs.

- **Utilisateurs** : chaque utilisateur connu des systèmes source, avec sa date de création et sa dernière connexion. Les comptes dormants apparaissent immédiatement ; les ajouts récents sont signalés.
- **Rôles et affectations** : chaque affectation porte des dates de validité. Les rôles qui auraient dû expirer mais n'ont jamais été retirés apparaissent en rouge.
- **Détection de risques** : rôles non affectés, doublons d'utilisateurs, comptes techniques mêlés aux comptes fonctionnels — tout est signalé automatiquement, sans revue manuelle.
- **Vérification annuaire** : chaque utilisateur est confronté à LDAP ou à Active Directory — le compte existe-t-il encore ? Est-il actif ?
- **Attributs personnalisés** : chaque utilisateur et chaque rôle peut porter vos propres métadonnées — responsable métier, département, indicateur compte technique vs fonctionnel — et les rapports les utilisent.
- **Traçabilité d'activité** : suit l'activité utilisateur **sans** activer l'audit JDE — aucun impact opérationnel sur le système source.

### Conformité des licences Oracle et JD Edwards

Vue côte à côte de ce qui a été acheté et de ce qui est réellement utilisé.

- **CSI et licences acquises** : import du Customer Support Identifier Oracle et des licences qui y sont rattachées.
- **Actifs vs déclarés** : ce que JDE compte comme utilisateur face à ce que le contrat autorise. L'écart est plus fréquent qu'on ne le pense.
- **Accès et usage des modules** : traçabilité d'accès par module — qui utilise vraiment Financials, Distribution, Manufacturing. Permet la discussion « ce module est-il encore nécessaire ? ».
- **Panorama base de données** : version Oracle, édition, options activées. La page qu'un auditeur demande quand il veut savoir si *Advanced Compression* ou *Partitioning* sont utilisés.
- **Usage vs droits** : un seul écran avec ce qui est utilisé, ce qui est acheté, et l'écart.
- **Rapport de risque financier** : l'écart chiffré en montant, avec des suggestions de remédiation. La sortie qu'un comité d'audit lira.

### Séparation des tâches

Analyse SoD automatisée — le cœur d'une revue type SoX.

- **Détection automatisée** : les droits effectifs de chaque utilisateur sont croisés avec la matrice SoD ; les conflits remontent par utilisateur × société, classés par risque.
- **Matrices livrées et personnalisables** : matrices prêtes à l'emploi pour les risques ERP classiques (comptabiliser et approuver, fournisseur et paiement, …). Vous pouvez ajouter vos propres matrices par-dessus.
- **Modèle processus · activité · risque** : les conflits sont décrits au niveau du processus et de l'activité — plus lisible que des paires brutes rôle contre rôle.
- **Extraction automatique** : les données de sécurité sont extraites de JDE et d'Oracle sur une planification — aucune préparation manuelle avant un scan.
- **Rapports** : rapports par utilisateur, par société et par risque, exportables en CSV ou Excel, avec la piste d'audit qui a validé quoi et quand.

---

## La carte de l'application

La barre latérale de Nomasx-1 suit les trois domaines ci-dessus plus une section Paramètres.

| Section | Contenu |
|---|---|
| **Tableau de bord** | Vue d'ensemble conformité : nombre d'utilisateurs, expirations de rôles, conflits SoD ouverts, écart de licence, statut du dernier rafraîchissement. Chaque carte est un drill-through vers l'écran correspondant. |
| **Sécurité** | Catalogue des utilisateurs, rôles, affectations, sessions, conflits SoD et registre des exceptions. |
| **Applications** | Catalogue des applications JDE (programmes et formulaires) avec les droits portés par chacune. |
| **Base de données** | Panorama de la base Oracle — version, édition, options activées, utilisateurs déclarés. |
| **Licences** | CSI, licences JD Edwards, licences Oracle, licences souscrites, rapport d'usage et rapport de risque financier. |
| **Paramètres** | Systèmes sources, planification des scans, matrices SoD, règles de notification. |

---

## Qui utilise l'application

| Profil | Pourquoi il ouvre Nomasx-1 |
|---|---|
| **Auditeur interne** | La revue SoD trimestrielle — *quels conflits sont ouverts, qui a signé les exceptions, quelle tendance dans le temps ?* |
| **Responsable sécurité** | *Qui a effectivement accès à X aujourd'hui ?* Le simulateur « et si ? » avant d'accorder un nouveau rôle. |
| **Administrateur sécurité JDE** | Le catalogue complet utilisateurs et rôles sur tous les environnements — plus rapide que de naviguer dans le security workbench du client lourd. |
| **Gestionnaire de licences** | *Payons-nous des modules que personne n'utilise ?* Le rapport d'usage et le rapport de risque financier se lisent ensemble. |
| **CISO / Risque** | Le tableau de bord conformité — tendance SoD, écart de licence, KPI d'hygiène des comptes. |

---

## Rôles dans Nomasx-1

L'application livre quatre rôles. Ils définissent ce que chaque utilisateur voit et peut modifier.

| Rôle | Droits |
|---|---|
| **Consultation** | Lire tous les écrans, lancer les rapports, aucune modification. |
| **Édition** | Tout ce qui précède, plus : modifier les matrices SoD, planifier les scans, gérer les règles de notification. |
| **Audit** | Tout ce qui précède, plus : valider les exceptions. Seul rôle habilité à clore un conflit signalé. |
| **Administrateur** | Tout ce qui précède, plus : gérer la configuration des systèmes sources (pools JDE, comptes DBA Oracle, mapping LDAP / AD). |

Un déploiement type sépare **Audit** de **Administrateur** — le même principe SoD que Nomasx-1 applique : la personne qui configure l'analyse n'est pas celle qui valide ses résultats.
