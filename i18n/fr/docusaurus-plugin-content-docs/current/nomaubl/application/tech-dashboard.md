---
title: Tableau de bord IT
description: "Le tableau de bord IT de NomaUBL : un bandeau de santé (application, base de données, disque, mémoire, planificateur, configuration), les quatre cartes d'action (échec d'envoi, en attente de revue, à retraiter, à retraiter en totalité), les traitements des 14 derniers jours (volume, erreurs, relances, durée par document), ce qui s'exécute en ce moment, les erreurs récentes, et des détails techniques repliés (système, fichiers, JVM, contrôle de configuration, tables de la base, liens)."
keywords: [NomaUBL, tableau de bord IT, tech dashboard, santé, JVM, heap, ping base de données, disque, planificateur, contrôle de configuration, échec d'envoi, renvoi, retraitement, documents traités par jour, taux d'erreur, taux de relance, durée de traitement, traitements en cours, événements en direct, sessions actives, erreurs récentes, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Tableau de bord IT

Le **tableau de bord IT** est la vue de NomaUBL destinée à l'équipe informatique. Il se lit de haut en bas comme une liste de contrôle : **tout fonctionne ?** (un bandeau de santé), **qu'y a-t-il à faire ?** (quatre cartes d'action avec leur traitement en masse), **comment se sont passés les traitements des 14 derniers jours ?**, **qu'est-ce qui s'exécute en ce moment ?**, et les **erreurs récentes**. Les cartes techniques détaillées — système, fichiers, JVM, contrôle de configuration, tables de la base — sont repliées en bas de page et s'ouvrent depuis le bandeau de santé. Il complète le tableau de bord [Exploitation](./dashboard.md), qui suit les factures plutôt que le serveur.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Les cartes lisent les métriques de l'hôte et le journal de traitement de NomaUBL.

---

## Accès à la page

- Menu → **Navigation → Tableau de bord IT**, après Exploitation.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 570" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tdb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tdb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tdb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tdb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="530" rx="14" fill="url(#tdb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau de bord IT</text>
  <rect x="876" y="34" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOUT FONCTIONNE ?</text>
  <rect x="240.0" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="252.0" cy="102" r="3.5" fill="#4ade80"/>
  <text x="260.0" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="250.0" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">2026.10.25.1</text>
  <text x="250.0" y="134" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">démarrée depuis 3 j</text>
  <rect x="361.6666666666667" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="373.6666666666667" cy="102" r="3.5" fill="#4ade80"/>
  <text x="381.6666666666667" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Base de données</text>
  <text x="371.6666666666667" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">4 ms</text>
  <rect x="483.33333333333337" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="495.33333333333337" cy="102" r="3.5" fill="#4ade80"/>
  <text x="503.33333333333337" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Disque</text>
  <text x="493.33333333333337" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">38 % libre</text>
  <rect x="605.0" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="617.0" cy="102" r="3.5" fill="#4ade80"/>
  <text x="625.0" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Mémoire</text>
  <text x="615.0" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">41 %</text>
  <text x="615.0" y="134" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">heap</text>
  <rect x="726.6666666666667" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="738.6666666666667" cy="102" r="3.5" fill="#4ade80"/>
  <text x="746.6666666666667" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Planificateur</text>
  <text x="736.6666666666667" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">En marche</text>
  <text x="736.6666666666667" y="134" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">prochaine 14:05</text>
  <rect x="848.3333333333334" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="860.3333333333334" cy="102" r="3.5" fill="#fb923c"/>
  <text x="868.3333333333334" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Configuration</text>
  <text x="858.3333333333334" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 problème</text>
  <text x="240" y="162" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À FAIRE</text>
  <rect x="240.0" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Échec d'envoi (9904)</text>
  <text x="252.0" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Erreurs de remise à la PA</text>
  <text x="400.5" y="218" fill="#f87171" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <rect x="422.5" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">En attente de revue</text>
  <text x="434.5" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Retenues avant envoi (indicateur W)</text>
  <text x="583.0" y="218" fill="#fb923c" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="605.0" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">À retraiter</text>
  <text x="617.0" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Non transmises</text>
  <text x="765.5" y="218" fill="#fb923c" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <rect x="787.5" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">À retraiter en totalité</text>
  <text x="799.5" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Échec de validation</text>
  <text x="948.0" y="218" fill="#f87171" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="240" y="248" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRAITEMENTS · 14 DERNIERS JOURS</text>
  <rect x="240" y="256" width="720" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="254" y="266" width="52" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280.0" y="279.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Volume</text>
  <rect x="312" y="266" width="57" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="340.5" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Erreurs</text>
  <rect x="375" y="266" width="62" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="406.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Relances</text>
  <rect x="443" y="266" width="112" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="499.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Durée par document</text>
  <text x="254" y="302" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Documents traités par jour</text>
  <rect x="262.9" y="332.5" width="31.6" height="37.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="262.9" y="331.8" width="31.6" height="0.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="312.3" y="323.1" width="31.6" height="46.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="312.3" y="322.0" width="31.6" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="361.8" y="332.1" width="31.6" height="37.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="361.8" y="331.5" width="31.6" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="411.2" y="331.1" width="31.6" height="38.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="411.2" y="330.3" width="31.6" height="0.8" fill="#f87171" fillOpacity="0.85"/>
  <rect x="460.6" y="338.5" width="31.6" height="31.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="460.6" y="338.4" width="31.6" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="510.0" y="324.4" width="31.6" height="45.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="510.0" y="323.6" width="31.6" height="0.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="559.5" y="331.9" width="31.6" height="38.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="559.5" y="331.0" width="31.6" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <rect x="608.9" y="328.7" width="31.6" height="41.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="608.9" y="327.6" width="31.6" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="658.3" y="338.6" width="31.6" height="31.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="658.3" y="338.5" width="31.6" height="0.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="707.8" y="332.6" width="31.6" height="37.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="707.8" y="332.2" width="31.6" height="0.4" fill="#f87171" fillOpacity="0.85"/>
  <rect x="757.2" y="339.6" width="31.6" height="30.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="757.2" y="339.5" width="31.6" height="0.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="806.6" y="330.5" width="31.6" height="39.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="806.6" y="329.4" width="31.6" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="856.0" y="326.9" width="31.6" height="43.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="856.0" y="326.0" width="31.6" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <rect x="905.5" y="342.0" width="31.6" height="28.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="905.5" y="341.2" width="31.6" height="0.8" fill="#f87171" fillOpacity="0.85"/>
  <rect x="760" y="294" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="773" y="302" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Traités</text>
  <rect x="818.32" y="294" width="9" height="9" rx="2" fill="#f87171"/>
  <text x="831.32" y="302" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">En erreur technique</text>
  <text x="240" y="406" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EN CE MOMENT</text>
  <rect x="240.0" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Traitements en cours</text>
  <rect x="422.5" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Événements en direct</text>
  <rect x="605.0" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Planificateur</text>
  <rect x="787.5" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sessions actives</text>
  <rect x="240" y="464" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="482" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs récentes</text>
  <rect x="240" y="502" width="720" height="28" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="520" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▸ Détails techniques — système, fichiers, JVM, contrôle de configuration, tables de la base, liens</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bandeau de santé</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une tuile ouvre son détail</text>
  <line x1="200" y1="113.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À faire</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quatre files pour l'IT</text>
  <line x1="200" y1="197.0" x2="240" y2="198" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets sur 14 jours</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un jour ouvre ses factures</text>
  <line x1="200" y1="317.0" x2="254" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="20" y="458" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="473" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs récentes</text>
  <text x="30" y="486" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fin du journal en direct</text>
  <line x1="200" y1="475.0" x2="240" y2="478" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tuile Planificateur</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fait défiler jusqu'à sa carte</text>
  <line x1="1000" y1="113.0" x2="782.5000000000001" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque carte</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre les factures, actions</text>
  <line x1="1000" y1="197.0" x2="960" y2="198" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En ce moment</text>
  <text x="1010" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">traitements, événements, sessions</text>
  <line x1="1000" y1="427.0" x2="960" y2="432" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="496" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="511" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Détails techniques</text>
  <text x="1010" y="524" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliés par défaut</text>
  <line x1="1000" y1="513.0" x2="960" y2="516" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
</svg>

Un bouton **Actualiser** dans l'en-tête de la page recharge toutes les cartes.

---

## Bandeau de santé

Le bandeau **Tout fonctionne ?** présente six tuiles, chacune avec une pastille verte, orange ou rouge. Un clic sur une tuile fait défiler la page jusqu'à son détail et, sauf pour *Planificateur*, ouvre les [détails techniques](#technical-details) repliés :

| Tuile | Affiche | Ouvre |
|---|---|---|
| **Application** | La version et `démarrée depuis …`. | Système |
| **Base de données** | Le ping en ms, ou *Injoignable*. | Système |
| **Disque** | `… % libre` sur le disque le plus rempli. | Système de fichiers |
| **Mémoire** | L'occupation du heap en %. | JVM · threads et GC |
| **Planificateur** | *En marche*, `… en pause` ou `… tâche(s) en échec`, et la prochaine exécution. | La carte Planificateur d'*En ce moment* |
| **Configuration** | *Aucun problème* ou `… problème(s)`. | Contrôle de la configuration |

---

## À faire

Quatre cartes comptent les factures qui attendent une action de l'informatique, chacune avec un bouton qui les traite toutes d'un coup dans la [fenêtre de progression partagée](#shared-progress-window). La relance manuelle en un clic d'*Échec d'envoi* et le balayage nocturne planifié de la page [Auto-Retry](../sync/scheduled-jobs/auto-retry.md) utilisent le même chemin de renvoi.

### Échec d'envoi (9904) \{#send-failed\}

Une seule carte en grand chiffre qui indique combien de factures sont actuellement en *Échec d'envoi* (statut `9904`). Quand le compteur n'est pas à zéro, un bouton **Tout renvoyer (N)** sous le chiffre rejoue chaque facture concernée vers la [Plateforme Agréée](../configuration/system/einvoicing.md). Le clic ouvre la [fenêtre de progression partagée](#shared-progress-window) — compteurs en direct, bouton *Annuler* et bouton *Continuer en arrière-plan* qui masque la fenêtre pendant que le traitement se poursuit côté serveur. Le renvoi est limité à **100 ms par appel** pour que la PA reste dans son enveloppe de débit.

| Élément | Comportement |
|---|---|
| Compteur | Total en direct — rafraîchi par le bouton *Actualiser* de la page et à chaque montage du tableau de bord. Affiché en rouge quand il n'est pas à zéro. |
| Bouton **Tout renvoyer (N)** | Désactivé quand le compteur est à zéro. Un clic rejoue chaque facture au statut `9904` ; la fenêtre de progression s'ouvre. |
| Fenêtre de progression | Compteurs en direct (*traitées* / *réussies* / *échecs*), bouton *Annuler* et bouton *Continuer en arrière-plan* — même composant que pour chaque traitement long de la plateforme. |
| Limitation de débit | 100 ms entre deux appels — fixé dans le code, non paramétrable ici par l'opérateur. La planification [Reprise auto](../sync/scheduled-jobs/auto-retry.md) propose sa propre limite pour l'équivalent planifié. |

Le bouton manuel sert à un renvoi ponctuel en pleine journée (une coupure PA passagère qui s'est résolue, un petit lot à relancer tout de suite). Pour des relances de nuit sans supervision, planifier une ligne sur la page [Reprise auto](../sync/scheduled-jobs/auto-retry.md) — même chemin de code, sans intervention d'un opérateur.

### En attente de revue \{#waiting-for-review\}

Une carte en grand chiffre qui compte les factures **retenues avant envoi** — celles dont le type de document porte le drapeau d'envoi `W` (*En attente*) sur la page [Types de document](../configuration/system/document-types.md). Ces factures ont été générées et validées, mais volontairement pas transmises, pour qu'un utilisateur puisse les vérifier au préalable. Quand le compteur n'est pas à zéro, un bouton **Tout envoyer (N)** libère chaque facture retenue vers la [Plateforme Agréée](../configuration/system/einvoicing.md) en une seule action, via la même [fenêtre de progression](#shared-progress-window) que *Échec d'envoi*. Elle reprend le principe de la carte *Échec d'envoi* — même grand chiffre, même action groupée en un clic — mais pour la file de revue plutôt que la file d'échecs.

### À retraiter \{#to-reprocess\}

Une carte en grand chiffre qui compte les factures **concernées par le retraitement** — celles que la plateforme a **déposées sans les transmettre** (statut 200, motif `NON_TRANSMISE`), sur un modèle où **Allow reprocess** est activé. Quand le compteur n'est pas à zéro, un bouton **Tout retraiter (N)** **réimprime** chaque facture concernée à partir de sa source archivée — PDF / XML lisible et fichier UBL régénérés, sans modification en base ni nouvelle validation — via la même [fenêtre de progression](#shared-progress-window). Le retraitement conserve le statut de chaque facture, inscrit une entrée *Retraitement* dans l'historique et ne renvoie jamais rien à la plateforme — voir [Documents → Allow reprocess](../management/documents.md) pour le réglage par modèle et [Factures](invoices.md#reprocess) pour la même action sur des lignes sélectionnées.

### À retraiter en totalité \{#to-reprocess-full\}

Le pendant de la carte précédente pour les factures en **échec de validation** (`9905`) sur un modèle où **Allow full reprocess** est activé. Une fois les données corrigées dans le système source, un bouton **Tout retraiter (N)** retraite chaque facture **en totalité** depuis sa source archivée : l'enrichissement est interrogé de nouveau, l'UBL régénéré, validé et envoyé à la PA selon les réglages du modèle et du type de document. L'historique des statuts est conservé et un marqueur de retraitement ouvre un nouveau cycle — les statuts qui suivent sont donc enregistrés comme nouveaux.

Les deux cartes lancent un **lot unique par modèle**, en arrière-plan avec son journal en direct : les sources sont déposées dans un dossier de travail, le réglage **Max threads** des réglages globaux limite le parallélisme, et une facture n'est jamais traitée deux fois.

---

## Traitements · 14 derniers jours

Une carte à quatre onglets : **Volume**, **Erreurs**, **Relances**, **Durée par document**.

### Volume

**Documents traités par jour** sur les 14 derniers jours, en barres empilées : *Traités* et *En erreur technique* ; le sous-titre donne les totaux. **Un clic sur une barre** ouvre [E-Invoicing](./invoices.md) sur ce jour, en date d'archivage — un chemin rapide entre « la colonne du jour est basse » et « montrer ce qui a été traité ».

### Erreurs

La carte **Taux d'erreur · 14 j** : une sparkline sur 14 jours des événements d'erreur enregistrés dans `F564237` (niveau `ERROR` ou `FATAL`). Le survol d'un point révèle la date et le compte ; le sous-titre indique la moyenne quotidienne et le total cumulé du jour.

### Relances

La carte **Taux de reprise · 14 j** : un seul grand chiffre, ratio des *runs ayant abouti après une ou plusieurs relances* sur le total des runs des 14 derniers jours. Le sous-titre donne les valeurs absolues et la variation par rapport à la fenêtre précédente de 14 jours (vert quand le taux baisse, orange quand il monte).

### Durée par document

La carte **Durée de traitement par modèle · 14 j** : temps moyen de traitement de bout en bout par modèle, en secondes, sur les 14 derniers jours. La carte charge les événements `START` / `END` de `F564237` à plat et les apparie côté Java sur `(FEWDS1|FEUPMJ)` — la précédente version utilisait une auto-jointure SQL avec un `FETMPL` ambigu et une arithmétique `e.FEUPMT - s.FEUPMT` incorrecte ; ce point est corrigé.

#### Décomposition par étape quand `debugProfile` est actif

Quand le switch [`debugProfile`](../configuration/system/global.md) sur le modèle `global` est à `Y`, chaque exécution écrit une ligne par étape du pipeline dans `F564237` — **analyse d'en-tête**, **analyse des lignes**, **validation**, **émission UBL**, **envoi PA**. La carte Temps de traitement par modèle les fait remonter sous forme de décomposition empilée sous les totaux par modèle — une étape lente se repère d'un coup d'œil sans plonger dans le journal d'exécution.

Le flux Traitements en cours en dessous balise aussi les lignes avec le nom de l'étape, ce qui permet de trier un lot lent en direct. Laisser `debugProfile` à `N` en production ; passer à `Y` le temps d'un lot pour analyser un pipeline lent — les lignes additionnelles gonflent vite `F564237` sous charge.

---

## En ce moment

Ce qui s'exécute sur le serveur à cet instant : les traitements en cours, les événements de traitement en direct, le planificateur et les sessions actives.

### Traitements en cours \{#running-processes\}

La liste des JVM de traitement actives sur la machine, relevée toutes les 5 s : celles lancées par ce serveur, avec la dernière ligne affichée par chacune, et les JVM **détachées** laissées par une instance précédente, un cron ou un lancement manuel (*sortie non capturée*). Chaque ligne indique le mode (`-process`, `-watch-folders`, `-import`), les arguments, la durée écoulée et un bouton **Arrêter**, qui termine cette JVM et ses propres sous-processus uniquement — les factures en cours restent dans leur état et les fichiers d'entrée sont conservés. L'arrêt demande le droit *integration-run*. Rien n'est arrêté au redémarrage du serveur : un lot peut donc se poursuivre pendant une mise à jour.

### Événements de traitement en direct

Flux en direct des tâches qui démarrent et se terminent — la plupart sont lancées par le planificateur en arrière-plan. Le widget interroge `F564237` toutes les **5 secondes** avec un curseur incrémental `since=` ; chaque ligne porte un **badge de méthode** coloré :

| Badge | Signification |
|---|---|
| **START** *(vert)* | Une tâche vient de démarrer — `fetch-all`, `retrieve-statuses`, un traitement entrant, etc. |
| **END** *(bleu)* | Le `END` correspondant à un `START` précédent, avec la durée écoulée quand elle est disponible. |
| **ERROR** *(rouge)* | Une erreur émise pendant la tâche — les mots-clés `ERROR`, `FATAL`, `FAILED` reclassent toute ligne en rouge, même quand sa méthode était `START` ou `END`. |
| **INFO** *(atténué)* | Toute autre ligne écrite par le journal d'exécution pendant la tâche. |

Chaque ligne affiche le badge, le **modèle** + le **mode** + le **fichier source** quand ils sont présents, le message et l'horodatage. Une **pastille verte pulsante** apparaît à côté du titre quand un événement a été observé dans les 30 dernières secondes (un traitement est en cours) ; elle bascule en gris quand le flux est inactif depuis plus longtemps.

Le flux est **dédupliqué sur `FEUKID`** — la même ligne ne peut donc pas apparaître deux fois entre deux sondages, même en cas de décalage d'horloge. Un bouton **Pause / Reprendre** à droite du titre fige le sondage : utile pour lire une ligne longue sans la voir défiler.

La liste défilante est plafonnée aux 100 derniers événements ; les lignes plus anciennes sortent par le bas à mesure que de nouvelles arrivent. Pour une analyse approfondie, utiliser la page [Journal des traitements](diagnostics/processing-log.md), qui conserve l'historique complet avec les vues groupées par tâche.

### Planificateur

Liste toutes les tâches actives du planificateur :

- **Jobs intégrés** — `retrieve-statuses`, `notif-purge`, `clean-archive`, etc. — pilotés par les intervalles de polling de `BackgroundScheduler`.
- **`fetch-all` par modèle** — une ligne par modèle avec une tâche d'extraction / synchronisation programmée.
- **Passages Reprise auto par ligne** — une ligne par entrée enregistrée sur la page [Reprise auto](../sync/scheduled-jobs/auto-retry.md), avec l'heure planifiée et la liste des statuts ciblés en guise de cadence.
- **Contrôles quotidiens du cycle de vie** — une ligne par entrée planifiée sur la page [Contrôles du cycle de vie](../sync/scheduled-jobs/lifecycle-checks.md), à côté des synthèses et des reprises auto, avec son heure et sa dernière exécution.

Chaque ligne affiche le nom de la tâche, sa fréquence et une pastille d'état (vert actif, bleu prévu sous peu, orange en pause). Le sous-titre indique le nombre de tâches actives ; le bouton **Ouvrir les tâches planifiées** ouvre les [Tâches planifiées](../sync/scheduled-jobs/overview.md), où chaque tâche se lance, se suspend et se modifie.

Les tâches **interrogation d'import PA** et **récupération des statuts PA** portent un bouton **pause / reprise** — effectif au tick suivant et volontairement transitoire (un redémarrage du serveur relance toujours, une pause ne peut donc pas être oubliée). La [fenêtre calme quotidienne](../configuration/system/global.md) (`fetchQuietFrom` / `fetchQuietTo`) s'affiche aussi ici, en surbrillance quand elle est active — pendant celle-ci, les deux interrogations sautent automatiquement leurs exécutions.

### Sessions / Clients actifs · 15 min

Deux modes :

- **Auth activée** — titre *Sessions actives*. Liste chaque session présente dans `F564252` dont le `SSETDTIM` est dans la dernière heure.
- **Auth désactivée** — titre *Clients actifs · 15 min*. Liste chaque IP touchée par `WebServer.handle()` dans les 15 dernières minutes, source : `ActivityTracker` en mémoire (aucune ligne `F564252` n'existe quand l'auth est coupée).

Dans les deux cas, chaque ligne affiche IP / utilisateur, l'horodatage du dernier accès et le compteur de hits.

---

## Erreurs récentes

La carte **Erreurs récentes** liste les 8 derniers événements de `F564237` filtrés sur `level IN ('ERROR', 'FATAL')`. Chaque ligne affiche le badge de niveau, le code de cycle de vie et le triplet, le message et un horodatage relatif (*il y a 2 min*, *il y a 1 h*). Une ligne liée à une facture ouvre la vue *Erreurs d'intégration* du [Diagnostic](./diagnostics/overview.md), restreinte à cette facture ; une ligne de traitement ouvre la vue *Journal des traitements*. **Ouvrir les erreurs d'intégration →** ouvre la vue sans filtre.

---

## Détails techniques \{#technical-details\}

Une section repliée — *système, fichiers, JVM, contrôle de configuration, tables de la base, liens* — qui s'ouvre d'elle-même quand on clique sur une tuile du bandeau de santé.

### Système

Métriques JVM, base et hôte. Les valeurs les plus surveillées sont colorées :

| Métrique | Source | Règles de teinte |
|---|---|---|
| **Java** | `Runtime.version()` | neutre. |
| **Heap** | `MemoryMXBean.getHeapMemoryUsage()` | vert &lt; 60 %, orange &lt; 85 %, rouge ≥ 85 %. |
| **Uptime** | `RuntimeMXBean.getUptime()` | neutre, formaté en `Xj Yh` / `Xh Ym`. |
| **Cœurs CPU** | `Runtime.availableProcessors()` | neutre. |
| **Base** | `dialect.ping()` | vert &lt; 100 ms, orange &lt; 500 ms, rouge au-delà ou en cas d'erreur. |
| **Schéma** | configuration `db-nomaubl` | neutre. |
| **OS** | `os.name` + `os.arch` | neutre. |
| **Mode PA** | indicateur `paUseMock` | vert sur *Live*, orange sur *Mock*. |

Le sous-titre de la carte affiche, à droite, la **version du build et la date du build** issues de `nomaubl-version.properties`.

### Liens rapides

Liste statique de raccourcis — les pages les plus utilisées par l'opérateur IT, ouvertes directement : **Journal des traitements** et **Erreurs d'intégration** (deux vues du [Diagnostic](./diagnostics/overview.md)), **Notifications**, **Traiter Document**, **Versions fichiers** et **Paramètres**.

### Système de fichiers

Pour chaque chemin configuré (`appHome`, `processHome`, `dirInput`, `singleOutput`, `burstOutput`, `dirArchive`, `dirError`) :

- **Espace libre / total** sur le volume sous-jacent.
- **Nombre de fichiers** d'un parcours récursif du chemin, **plafonné à 5000 fichiers** pour rester rapide.

Les valeurs de chemin contenant des jokers d'exécution (`%TEMPLATE%`, `%FILE_NAME%`) sont tronquées au premier joker rencontré ; le rapport porte alors sur le répertoire **le plus profond existant par sa forme** au-dessus. `dirOutput` est exclu : il est toujours couvert par `processHome`.

### JVM · threads et GC

Carte complémentaire de Système pour un diagnostic JVM plus poussé :

- **Threads** — nombre courant + pic.
- **Threads démon** — démons en cours.
- **GC** — nom du collecteur + temps total passé en GC.
- **Classes chargées** — compteur du class-loader, utile pour repérer une fuite metaspace.

### Contrôle de la configuration

Valide la configuration *orientée connecteur* utilisée aujourd'hui par l'application. Les anomalies sont listées par zone avec une sévérité (rouge erreur, orange avertissement, bleu information). La vérification couvre :

| Zone | Valide |
|---|---|
| **Connecteur PA** | `baseUrl` ; `authType` ; identifiants selon le type d'auth — `OAUTH2` (clientId/secret/endpoint token), `BASIC` (utilisateur/mot de passe), `BEARER` (token) ; présence d'un endpoint nommé `import` (avertissement si `import-status` manque). |
| **e-Directory** | `baseUrl` et endpoint `directory-check` quand `checkDirectory=Y`. |
| **e-Reporting** | `issuerSiren`, `frequency`, `flux` quand `sendToPA=Y`. |
| **Statuts** | Chaque code de statut PA reçu mais absent du [catalogue des statuts](../configuration/system/statuses.md) : l'avertissement donne le nombre d'événements ignorés depuis le démarrage du serveur et une facture en exemple. Ajouter le code au catalogue pour enregistrer ces événements. |

Les ressources de validation (XSD / Schematron) sont embarquées dans le JAR.

Une vérification propre s'affiche en `✔ 0 anomalie` en vert ; sinon la carte liste les anomalies par ordre de sévérité.

### Tables de la base

Nombre de lignes par table NomaUBL — factures (`F564231`), cycle de vie (`F564235`), validation (`F564236`), journal d'exécution (`F564237`), notifications (`F564253`), e-Reporting (`F564260`–`F564262`), auth (`F564250`–`F564252`, `F564254`). Utile pour repérer une croissance inattendue (par exemple une table de notifications qui devrait avoir quelques centaines de lignes mais en a des millions).

---

## Fenêtre de progression partagée \{#shared-progress-window\}

Chaque traitement long de la plateforme — Tout renvoyer depuis cette page, le passage [Reprise auto](../sync/scheduled-jobs/auto-retry.md), l'export *Vue détaillée* sur [Erreurs d'intégration](diagnostics/integration-errors.md), les futurs ré-imports en masse — ouvre la **même fenêtre modale**. Un seul composant, un seul jeu d'habitudes.

La fenêtre reste ouverte par défaut tant que le traitement tourne ; la fermer est une action volontaire.

| Élément | Rôle |
|---|---|
| **Barre de progression** | Compteur visuel traitées-sur-total. Mise à jour environ toutes les 250 ms à mesure que le serveur pousse des incréments. |
| **Compteurs en direct** | Trois nombres : *Traitées* (total touché jusqu'ici), *Réussies*, *Échecs*. Chaque compteur est cliquable quand il n'est pas à zéro et ouvre un petit panneau avec les triplets de factures concernés — un échec sur la facture `12345 / RI / 00070` se trouve donc à un clic de son entrée de journal. |
| **Annuler** | Arrête proprement le traitement entre deux factures. Les factures déjà traitées conservent leur nouvel état ; les autres ne sont pas touchées. Le bouton est remplacé par *Annulé* (grisé) quand le signal est pris en compte. |
| **Continuer en arrière-plan** | Masque la fenêtre sans arrêter le traitement. Le travail se poursuit côté serveur ; une petite bannière persistante en haut de la page affiche le compteur et un lien *Voir la progression*. Cliquer sur le lien rouvre la fenêtre à tout moment. |
| **Terminé** | Remplace *Annuler* / *Continuer en arrière-plan* à la fin du traitement. Une ligne de résumé affiche total / réussies / échecs et la durée écoulée. |

Plusieurs traitements peuvent coexister — chacun obtient sa bannière une fois envoyé en arrière-plan. Fermer l'onglet du navigateur n'**annule pas** le travail ; l'exécution côté serveur continue. Rouvrir la page fait réapparaître la bannière jusqu'à la fin du traitement.
---

## Rafraîchissement des widgets

Le bouton Actualiser (ou l'ouverture de la page) appelle quatre endpoints en parallèle :

| Endpoint | Alimente |
|---|---|
| `GET /api/system` | Système, JVM · threads et GC, Système de fichiers |
| `GET /api/dashboard/tech` | Volume, Erreurs, Relances, Durée par document, Sessions actives, Tables de la base, Erreurs récentes |
| `GET /api/dashboard/log-tail` | Traitements en cours · direct (incrémental, sondage 5 s avec `since=`) |
| `GET /api/dashboard/config-check` | Contrôle de la configuration |

La carte Planificateur lit `GET /api/scheduler/status`. Chaque appel échoue indépendamment — une base mal configurée renvoie *Non configurée* sur la carte de données sans casser la carte Système ou le journal en direct.

---

## Conseils & bonnes pratiques

- **Surveiller Heap, ping base et espace disque.** Trois signaux d'alerte précoce — la dérive du heap avant un OOM, la latence base avant un blocage, le volume archive avant la saturation disque.
- **Le flux Traitements en cours vaut mieux que `tail -f`.** Il montre les tâches du planificateur qui démarrent et se terminent en direct, les erreurs ressortent en rouge, et le flux résiste à une déconnexion SSH. À garder ouvert pendant une mise en production ou un import en lot — la plupart des régressions y apparaissent en quelques secondes, et la pastille verte pulsante indique si une exécution est réellement en cours.
- **La vérification de configuration doit toujours être verte.** Un nombre d'anomalies non nul après un déploiement est le chemin le plus rapide vers « qu'est-ce qui a changé ? ». À lancer sur chaque environnement après chaque édition de configuration.
- **Erreurs récentes plutôt que Tables de la base.** En triage d'incident, le flux des erreurs récentes est plus dense au pixel ; la carte des tables sert au suivi de tendance sur plusieurs jours.
- **Une liste *Clients actifs* vide ne signifie pas que personne n'utilise l'application.** Avec l'auth activée, les sessions de plus d'une heure tombent de la liste — la base les conserve dans le cycle de vie. La carte montre *qui est là maintenant*, pas *qui était là ce matin*.
- **Les pics de durée par document vont avec les creux de volume.** Quand une grande barre de l'onglet Volume est suivie d'un modèle lent le lendemain, la file remonte — l'équipe IT peut anticiper en ajustant la cadence du planificateur.
