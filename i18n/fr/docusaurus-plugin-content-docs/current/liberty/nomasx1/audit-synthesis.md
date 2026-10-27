---
title: Vue d'ensemble — Synthèse d'audit
description: "La page d'accueil de Nomasx-1 : le tableau de bord Audit synthesis — utilisateurs, rôles, conflits de séparation des tâches et exposition de licences en un coup d'œil, les conflits par rafraîchissement et par processus, les constats qui demandent une décision, le détail par processus et par composant de licence, la fraîcheur des données, l'activité et les utilisateurs les plus en conflit — avec un filtre par application, une période et l'export Excel / PDF."
keywords: [Nomasx-1, vue d'ensemble, synthèse d'audit, tableau de bord, séparation des tâches, SoD, exposition de licences, comptes dormants, comptes privilégiés, fraîcheur des données, export, PDF]
---

# Vue d'ensemble — Synthèse d'audit

**Vue d'ensemble**, première entrée du menu de Nomasx-1, ouvre l'**Audit synthesis** : sur une seule page, les comptes, les conflits de séparation des tâches et la position de licences de chaque application connectée, ce qui demande une décision, et la fraîcheur des données. C'est la page à ouvrir avant une revue interne, et celle à exporter pour un comité de pilotage.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxa-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxa-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxa-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="536" rx="14" fill="url(#nxa-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse d'audit</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Comptes, conflits SoD et position de licences en un coup d'œil</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="240" y="98" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">12 derniers mois ▾</text>
  <text x="406" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="406" y="98" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tous ▾</text>
  <rect x="780" y="98" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="834" y="98" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="852.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="877" y="98" width="27" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="890.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="240.0" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="252.0" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Comptes déclarés</text>
  <text x="252.0" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <text x="252.0" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">380 actifs · 32 désactivés</text>
  <rect x="422.5" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="434.5" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Définis et attribués</text>
  <text x="434.5" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">96</text>
  <text x="434.5" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">81 attribués · 15 orphelins</text>
  <rect x="605.0" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Séparation des tâches</text>
  <text x="617.0" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Utilisateurs en conflit</text>
  <text x="617.0" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="617.0" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">1 204 lignes · 3 privilégiés</text>
  <rect x="787.5" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Exposition licences</text>
  <text x="799.5" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Au-delà de la souscription</text>
  <text x="799.5" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">84 500 €</text>
  <text x="799.5" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">4 composants sur 22</text>
  <rect x="240" y="238" width="400" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="256" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflits par rafraîchissement</text>
  <text x="252" y="269" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Par processus métier</text>
  <line x1="260" y1="414" x2="620" y2="414" stroke="#334155" strokeWidth="1"/>
  <rect x="276" y="354" width="40" height="60" fill="#4a9eff" opacity="0.85"/>
  <rect x="276" y="314" width="40" height="40" fill="#fbbf24" opacity="0.85"/>
  <rect x="276" y="290" width="40" height="24" fill="#c084fc" opacity="0.85"/>
  <rect x="348" y="358" width="40" height="56" fill="#4a9eff" opacity="0.85"/>
  <rect x="348" y="320" width="40" height="38" fill="#fbbf24" opacity="0.85"/>
  <rect x="348" y="298" width="40" height="22" fill="#c084fc" opacity="0.85"/>
  <rect x="420" y="366" width="40" height="48" fill="#4a9eff" opacity="0.85"/>
  <rect x="420" y="332" width="40" height="34" fill="#fbbf24" opacity="0.85"/>
  <rect x="420" y="314" width="40" height="18" fill="#c084fc" opacity="0.85"/>
  <rect x="492" y="372" width="40" height="42" fill="#4a9eff" opacity="0.85"/>
  <rect x="492" y="342" width="40" height="30" fill="#fbbf24" opacity="0.85"/>
  <rect x="492" y="326" width="40" height="16" fill="#c084fc" opacity="0.85"/>
  <rect x="564" y="378" width="40" height="36" fill="#4a9eff" opacity="0.85"/>
  <rect x="564" y="354" width="40" height="24" fill="#fbbf24" opacity="0.85"/>
  <rect x="564" y="342" width="40" height="12" fill="#c084fc" opacity="0.85"/>
  <text x="260" y="430" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">● Procure to pay  ● Order to cash  ● Finance</text>
  <rect x="650" y="238" width="310" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="256" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui demande une décision</text>
  <text x="662" y="269" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Constats du rapport d'évaluation</text>
  <circle cx="666" cy="291" r="3.5" fill="#f87171"/>
  <text x="678" y="293" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Violations SoD actives</text>
  <text x="678" y="305" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">12 règles sur 140 déclenchées</text>
  <text x="948" y="293" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">37</text>
  <circle cx="666" cy="327" r="3.5" fill="#f87171"/>
  <text x="678" y="329" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Rôles auto-conflictuels</text>
  <text x="678" y="341" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">corriger le rôle règle tous ses titulaires</text>
  <text x="948" y="329" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <circle cx="666" cy="363" r="3.5" fill="#fb923c"/>
  <text x="678" y="365" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Composants en dépassement</text>
  <text x="678" y="377" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">acheter, ou retirer des droits</text>
  <text x="948" y="365" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">84 500 €</text>
  <circle cx="666" cy="399" r="3.5" fill="#4ade80"/>
  <text x="678" y="401" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Comptes génériques / partagés</text>
  <text x="948" y="401" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="448" width="400" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="466" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fraîcheur des données</text>
  <text x="252" y="479" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Dernière collecte par module</text>
  <circle cx="256" cy="501" r="3.5" fill="#4ade80"/>
  <text x="268" y="503" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">SECURITY</text>
  <rect x="314.32" y="494" width="60" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="344.32" y="504.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28</text>
  <text x="628" y="503" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <rect x="650" y="448" width="310" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="466" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par composant de licence</text>
  <text x="662" y="479" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="662" y="502" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Comptabilité générale</text>
  <text x="771.84" y="502" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">50 souscrits</text>
  <text x="948" y="502" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">64</text>
  <rect x="662" y="507" width="286" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="662" y="507" width="286" height="5" rx="2.5" fill="#4a9eff"/>
  <rect x="10" y="112" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre Application</text>
  <text x="20" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tous = les totaux</text>
  <line x1="210" y1="129.0" x2="470" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre chiffres</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, rôles, SoD, licences</text>
  <line x1="210" y1="177.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tendance</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">empilée par processus</text>
  <line x1="210" y1="347.0" x2="260" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="10" y="470" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fraîcheur</text>
  <text x="20" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vert &lt; 2 jours, rouge &gt; 8</text>
  <line x1="210" y1="487.0" x2="256" y2="501" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="1000" y="96" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel ou synthèse PDF</text>
  <line x1="1000" y1="113.0" x2="909" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="1000" y="290" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des décisions</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par gravité, avec le chiffre</text>
  <line x1="1000" y1="307.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="1000" y="470" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs / souscrits</text>
  <text x="1010" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par composant</text>
  <line x1="1000" y1="487.0" x2="960" y2="500" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
</svg>

---

## La barre \{#bar\}

| Contrôle | Effet |
|---|---|
| **Période** | S'ouvre sur *12 derniers mois*. Elle s'applique aux deux graphiques temporels : les conflits par rafraîchissement et les utilisateurs actifs par mois. |
| **Application** | **Tous** affiche les totaux de l'ensemble des applications ; en choisir une restreint chaque widget à celle-ci. |
| **Excel**, **PDF** | Exportent la page telle qu'elle se présente — application choisie et période. Le PDF est une synthèse : une page de garde avec la période et le filtre, les quatre chiffres en cartes, les graphiques dessinés, les listes en tableaux. |
| **↻** | Recharge chaque widget ; *Mis à jour à* donne l'heure des données. |

---

## Les quatre chiffres \{#figures\}

| Carte | Chiffre | Ligne de détail |
|---|---|---|
| **Users** — comptes déclarés | Les comptes collectés. | Actifs · désactivés · **dormants** : actifs sans connexion depuis 90 jours. |
| **Roles** — rôles définis et leur attribution | Les rôles définis. | Attribués · **orphelins** (attribués à personne) · utilisateurs titulaires de plus de 10 rôles, avec le maximum. |
| **Segregation of duties** — utilisateurs en conflit | Les utilisateurs porteurs d'au moins un conflit. | Lignes de conflit · utilisateurs privilégiés en conflit · processus métier concernés. |
| **Licence exposure** — composants déployés au-delà de la souscription | La valeur des utilisateurs en surnombre par rapport aux quantités souscrites : prix catalogue plus trois ans de support par utilisateur en trop. | Composants en dépassement sur l'ensemble des composants · utilisateurs en surnombre. |

L'exposition s'appuie sur les [licences souscrites](./licenses/subscribed.md) et le [catalogue de prix](./settings/pricing/pricing.md) : un composant sans prix compte pour zéro.

---

## Ce qui demande une décision \{#decisions\}

Les constats du [rapport d'évaluation Sécurité & SoD](./reports/security-sox.md), un par ligne, avec une pastille de couleur — rouge pour agir, orange pour examiner, bleu pour information, vert quand rien n'est relevé — et le nombre ou le montant à droite :

| Constat | Action attendue |
|---|---|
| **Active SoD violations** — ou *No SoD violation*, ou *No SoD matrix defined* | Les règles de la matrice déclenchées sur l'ensemble des règles, et les associations privilégiées. Rouge dès qu'un utilisateur privilégié est concerné. Sans matrice, la définir dans [Paramètres → SoD](./settings/sod/matrix.md). |
| **Self-conflicting roles** | Un rôle accorde à lui seul les deux côtés d'une paire incompatible : corriger le rôle règle le cas de tous ses titulaires. |
| **Conflicting role combinations** | Des paires de rôles qui ne contreviennent à la séparation des tâches que détenues ensemble : séparer les fonctions ou revoir les attributions. |
| **Components over subscription** | Plus d'utilisateurs disposant de droits que de licences : acheter, ou retirer des droits. Le montant est l'exposition ; rouge à partir de 250 000, orange à partir de 25 000. |
| **Privileged accounts** | Accès de super-utilisateur : vérifier que chacun a un titulaire, une justification et une revue trimestrielle. |
| **Dormant enabled accounts** | Aucune connexion depuis 90 jours, dont les comptes jamais utilisés : désactiver ou recertifier. |
| **Generic / shared accounts** | Les actions ne peuvent pas être imputées à une personne : les remplacer par des comptes nominatifs. |
| **\*PUBLIC object grants** | Des objets ouverts par défaut à tous les utilisateurs : vérifier qu'aucun ne correspond à une transaction sensible. |
| **Enabled accounts without roles** | Un provisionnement incomplet, ou des comptes à désactiver. |
| **Direct user-level grants** | Des droits accordés à un utilisateur plutôt qu'à un rôle, hors du contrôle d'accès par rôle. |
| **Users with more than 10 roles** | Une accumulation de rôles : ajuster, puis relancer la détection. |
| **Orphan roles** | Des rôles attribués à personne : les supprimer ou les réaffecter. |

---

## Tendance et détail \{#detail\}

| Widget | Contenu |
|---|---|
| **Conflicts per refresh** | Les lignes de conflit à chaque rafraîchissement SoD de la période, empilées par processus métier — la tendance de la remédiation. |
| **Per process** | Les utilisateurs en conflit par processus métier, avec le nombre de lignes de conflit ; en rouge quand des utilisateurs privilégiés en font partie. |
| **Per licence component** | Les utilisateurs disposant de droits par composant, face à la quantité souscrite. Les comptes techniques et liés sont exclus ; un utilisateur actif s'est connecté au cours des 90 derniers jours. |
| **Data freshness** | La dernière collecte par module, avec son ancienneté : vert sous 2 jours, orange sous 8, rouge au-delà. Une ligne rouge signale des chiffres anciens. |
| **Transacting users per month** | Les utilisateurs distincts ayant des transactions chaque mois, toutes applications confondues. |
| **Users with the most conflicts** | Les utilisateurs porteurs du plus grand nombre de lignes de conflit, avec le nombre de processus ; les comptes privilégiés sont signalés. |

Le détail derrière chaque widget se trouve dans les écrans : [Conflits](./applications/conflicts/summary.md), [Utilisateurs](./security/users.md), [Rôles](./security/roles.md), [Rapport d'utilisation](./licenses/usage-report.md), [Rapport financier](./licenses/financial-report.md).

---

## Qui la voit \{#access\}

Chaque widget ne s'affiche que si l'utilisateur peut lancer sa requête : sans accès aux données de séparation des tâches, la page s'affiche sans ces widgets. Le périmètre de données des rôles de l'utilisateur s'applique à chaque chiffre et à l'export.

---

## Voir aussi

- [Explorateur de données](./data-explorer.md) — pour aller au-delà de la synthèse, selon n'importe quel champ.
- [Évaluation Sécurité & SoD](./reports/security-sox.md) — le rapport complet derrière la liste des décisions.
