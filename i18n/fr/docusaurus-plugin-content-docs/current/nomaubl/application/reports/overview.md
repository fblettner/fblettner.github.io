---
title: Rapports
description: "Les rapports de NomaUBL en quatre cartes — des contrôles d'intégrité SQL avec un système source, et les rapports d'audit, d'implémentation et technique produits en PDF ou Markdown. Les statistiques des statuts se trouvent sur le tableau de bord Statistiques, les analyses libres dans l'Explorateur."
keywords: [NomaUBL, rapports, reporting, rapport d'audit, rapport d'implémentation, rapport technique, statistiques, statut, motif de rejet, contrôles d'intégrité, tableau croisé, export Excel, Explorateur, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapports

La page **Rapports** est la vue analytique de NomaUBL — elle transforme les données de factures, d'archives, de cycle de vie et de validation en chiffres qu'une équipe peut lire et exporter, sans écrire de SQL. Une rangée de quatre cartes permet de choisir le rapport, chacune indiquant à quoi il sert ; la page s'ouvre sur la première, **Intégrité** : des contrôles SQL qui listent ce qui manque ou diverge par rapport à un système source. Les trois autres produisent un document à la demande : le [rapport d'audit](./audit-report.md), le [rapport d'implémentation](./implementation-report.md) et le [rapport technique](./technical-report.md). Les statistiques des statuts se trouvent sur le tableau de bord [Statistiques](../statistics.md) ; les analyses libres — tout champ, tout regroupement, graphique ou tableau de bord — se construisent dans l'[Explorateur](../explorer.md).

Accès : menu **Rapports**. L'accès s'accorde par rôle (voir [Accès](#access) plus bas).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 408" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpin-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpin-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpin-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpin-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="368" rx="14" fill="url(#rpin-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#4ade80" strokeWidth="1.4"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Comparer à JDE, intégrer</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Indicateurs d'une période</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Fonctionnement de l'instance</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="797.5" y="72" width="22" height="22" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="827.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport technique</text>
  <text x="827.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Documentation développeur</text>
  <rect x="240" y="120" width="230" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles</text>
  <rect x="248" y="154" width="214" height="44" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="258" y="172" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Factures absentes de NomaUBL</text>
  <text x="258" y="187" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">absents de la cible · jde-sql · intégration possible</text>
  <rect x="248" y="206" width="214" height="44" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="224" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Écarts de montant</text>
  <text x="258" y="239" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">écarts · jde-sql</text>
  <rect x="248" y="258" width="214" height="44" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="276" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Factures bloquées</text>
  <text x="258" y="291" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">requête directe · db-nomaubl</text>
  <rect x="482" y="120" width="478" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Factures absentes de NomaUBL</text>
  <text x="946" y="142" fill="#4a9eff" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Voir le SQL</text>
  <rect x="496" y="156" width="134" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="170.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 oct. 2026 ▾</text>
  <rect x="638" y="156" width="66" height="22" rx="5" fill="url(#rpin-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="671.0" y="170.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <rect x="496" y="190" width="450" height="34" rx="6" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.45)" strokeWidth="1"/>
  <text x="508" y="205" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 anomalie(s)</text>
  <text x="508" y="218" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 248 source / 1 245 cible · 640 ms</text>
  <rect x="496" y="234" width="450" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="532" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉ</text>
  <text x="602" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOC</text>
  <text x="672" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DCT</text>
  <text x="712" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MONTANT</text>
  <text x="792" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB</text>
  <rect x="496" y="262" width="450" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <text x="532" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="602" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10871</text>
  <text x="672" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="712" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 200,00</text>
  <text x="792" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">482211</text>
  <rect x="496" y="288" width="450" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <text x="532" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="602" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10872</text>
  <text x="672" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="712" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">540,00</text>
  <text x="792" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">482211</text>
  <rect x="496" y="314" width="450" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="532" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00002</text>
  <text x="602" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">20114</text>
  <text x="672" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="712" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 980,00</text>
  <text x="792" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">482260</text>
  <rect x="496" y="342" width="148" height="20" rx="5" fill="url(#rpin-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="570.0" y="355.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Intégrer la sélection (2)</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">S'ouvre sur Intégrité</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">première des quatre cartes</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des contrôles</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mode · connecteur · action</text>
  <line x1="200" y1="177.0" x2="248" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Définis dans les Paramètres</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Rapports d'intégrité</text>
  <line x1="200" y1="297.0" x2="248" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période + Exécuter</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">période par défaut de la vue</text>
  <line x1="1000" y1="167.0" x2="632" y2="167" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="1000" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bandeau du résultat</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre, source / cible, durée</text>
  <line x1="1000" y1="207.0" x2="946" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrer</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrôles dotés d'une action</text>
  <line x1="1000" y1="337.0" x2="632" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
</svg>

---

## Intégrité \{#integrite\}

La carte **Intégrité** liste à gauche les contrôles SQL définis dans [Configuration → Système → Integrity reports](../../configuration/system/integrity-reports.md), chacun avec sa description, son mode (*absents de la cible*, *écarts* ou *requête directe*), son connecteur et *intégration possible* quand il est doté d'une action. Choisir un contrôle, une période (la [période par défaut](../../configuration/default-periods.md) de la vue *Reports › Integrity*) puis **Exécuter**. Un bandeau donne le résultat — *Aucune anomalie* ou le nombre d'anomalies, les nombres source et cible et la durée — et *Voir le SQL* déplie les requêtes. Chaque ligne du résultat est une anomalie, affichée dans la grille standard (recherche, filtres, colonnes, export). Un contrôle doté d'une action permet de cocher des lignes puis d'**Intégrer la sélection** — le détail se trouve dans [Rapports d'intégrité](../../configuration/system/integrity-reports.md#rapports-integrite).

---

## Rapports d'audit, d'implémentation et technique

Ces trois cartes produisent un document, en PDF ou en Markdown, et non une grille :

| Carte | Document | Page |
|---|---|---|
| **Rapport d'audit** | L'activité d'une période — volumes, situation, encours, cycle de vie, erreurs, opérations et contrôles de cohérence — pour une revue interne ou un auditeur. | [Rapport d'audit](./audit-report.md) |
| **Rapport d'implémentation** | La documentation de l'instance telle qu'elle fonctionne — architecture, règles intégrées, documents et correspondances UBL, paramètres des plateformes, exploitation, sécurité — pour un dossier de passation ou un état des lieux avant mise à jour. | [Rapport d'implémentation](./implementation-report.md) |
| **Rapport technique** | La documentation développeur de la version — modèle de données, flux, référence de configuration, modèle de statuts, API — identique sur toutes les instances. | [Rapport technique](./technical-report.md) |

Les trois sont aussi disponibles en [ligne de commande](../../management/command-line.md#report), pour les planifier ou les conserver avec une version.

---

## Accès \{#access\}

La page Rapports s'accorde **par rôle** : activez la page *Rapports* du groupe **Navigation** sur la page [Rôles](../../configuration/security/roles.md). Sans elle, l'entrée de menu reste masquée.

---

## Conseils & bonnes pratiques

- **Lancer les contrôles d'intégrité après chaque traitement de nuit.** Un résultat vide signifie que NomaUBL détient tout ce que le système source a facturé ; régler *Reports › Integrity* sur *Hier* dans [Périodes par défaut](../../configuration/default-periods.md) pour en faire la période d'ouverture.
- **Lire les statistiques des statuts sur le tableau de bord [Statistiques](../statistics.md).** Il contient le tableau détaillé par activité, statut et motif, comparé à la période précédente.
- **Construire les extractions récurrentes dans l'[Explorateur](../explorer.md).** Une analyse enregistrée conserve ses champs, ses filtres et sa vue, peut entrer dans un tableau de bord et partir par rapport quotidien.
- **Conserver les rapports avec la version.** Les rapports d'implémentation et technique décrivent l'instance et la version telles qu'elles sont ; les produire après une mise à jour et les classer avec les documents de passation.
