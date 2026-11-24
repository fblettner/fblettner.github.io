---
title: Sécuriser un module
description: "Simulation de la sécurité → Sécuriser un module dans Nomajde : les lignes du Security Workbench de JD Edwards EnterpriseOne (type 3 pour exécuter, type 1 pour ajouter / modifier / supprimer) qui ouvrent tout un module à un rôle et le ferment à tous les autres, proposées seulement là où la sécurité ne le dit pas déjà, jamais écrites — relues, exportées puis chargées dans le Security Workbench."
keywords: [Nomajde, JD Edwards, JDE E1, sécuriser un module, Security Workbench, F00950, sécurité application, sécurité action, "*PUBLIC", "*ALL", module, code système, rôle]
---

# Sécuriser un module

L'onglet **Sécuriser un module** de la [Simulation de la sécurité](./security-simulation.md) prépare la sécurité de tout un module de JD Edwards EnterpriseOne. Il suffit de choisir un module, le rôle auquel il est ouvert et avec quels droits : la page **propose les lignes du Security Workbench** correspondantes — pour chaque application et chaque état du module, et uniquement là où la sécurité actuelle ne le dit pas déjà.

Rien n'est écrit. Les lignes sont relues, exportées depuis la liste puis chargées dans le Security Workbench.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 424" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#njsm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Simulation de la sécurité</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce qu'un utilisateur aurait le droit de faire, avant de l'écrire — et les cas qui vérifient que cela le reste.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simuler</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Un utilisateur, un module, une hypothèse</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sécuriser un module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tout un module pour un rôle</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cohérence</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des lignes inutiles ou qui se contredisent</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cas de test</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des attentes rejouées sur la sécurité · 7</text>
  <rect x="240" y="126" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="250" y="145" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales Management · 42 · 103</text>
  <text x="440" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OU UN CODE SYSTÈME</text>
  <rect x="440" y="145" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="450" y="159.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="550" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OUVERT POUR (RÔLE OU UTILISATEUR)</text>
  <rect x="550" y="145" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">SALESORDER ▾</text>
  <text x="720" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">AVEC</text>
  <rect x="720" y="145" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">tout sauf supprimer ▾</text>
  <rect x="830" y="145" width="120" height="22" rx="5" fill="url(#njsm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="890.0" y="159.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposer les lignes</text>
  <rect x="252" y="171" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,176.5 L256.8,178.8 L260.8,174" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="180" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Fermé pour tous les autres (&#42;PUBLIC)</text>
  <rect x="240.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">103</text>
  <text x="250.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJETS DANS LE MODULE</text>
  <rect x="361.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.0" y="214" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="371.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES À AJOUTER</text>
  <rect x="482.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="492.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES DE FERMETURE</text>
  <rect x="603.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="613.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES D'OUVERTURE</text>
  <rect x="724.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="734.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES D'ACTION</text>
  <rect x="845.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="855.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">100</text>
  <text x="855.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJETS DÉJÀ CORRECTS</text>
  <rect x="240" y="238" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSSETY</text>
  <text x="300" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSUSER</text>
  <text x="384" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSOBNM</text>
  <text x="448" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="588" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSRUN</text>
  <text x="632" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSA</text>
  <text x="666" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSCHNG</text>
  <text x="716" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSDLT</text>
  <text x="760" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSIOK</text>
  <text x="802" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POURQUOI</text>
  <rect x="240" y="266" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="300" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="384" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="448" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Saisie des commandes</text>
  <text x="588" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="632" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="666" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="716" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="760" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="802" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">fermé pour tous</text>
  <rect x="240" y="292" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="300" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALESORDER</text>
  <text x="384" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="448" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Saisie des commandes</text>
  <text x="588" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="632" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="666" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="716" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="760" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="802" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ouvert pour le rôle</text>
  <rect x="240" y="318" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="300" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALESORDER</text>
  <text x="384" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="448" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Saisie des commandes</text>
  <text x="588" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="632" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="666" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="716" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="760" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="802" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">les actions du rôle</text>
  <rect x="240" y="344" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="300" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="384" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P42101</text>
  <text x="448" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Saisie des commandes</text>
  <text x="588" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="632" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="666" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="716" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="760" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="802" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">fermé pour tous</text>
  <text x="240" y="384" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Relisez les lignes, exportez-les (Exporter, au-dessus de la liste) et chargez-les dans le Security Workbench…</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Module ou code système</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par son nom, avec ses codes</text>
  <line x1="200" y1="157.0" x2="250" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fermer pour &#42;PUBLIC</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">facultatif, coché par défaut</text>
  <line x1="200" y1="227.0" x2="252" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type 3 = exécuter</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type 1 = ajouter / modifier / supprimer</text>
  <line x1="200" y1="317.0" x2="260" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvert pour, avec</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tous · sauf supprimer · exécution</text>
  <line x1="1000" y1="157.0" x2="720" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seulement ce qui manque</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un plan appliqué ne propose rien</text>
  <line x1="1000" y1="247.0" x2="820" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pourquoi chaque ligne</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fermer · ouvrir · actions</text>
  <line x1="1000" y1="347.0" x2="860" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
</svg>

---

## Les champs à renseigner \{#fields\}

| Champ | Usage |
|---|---|
| **Module** | Un composant de licence tel que Nomasx-1 le définit, présenté par son nom avec ses codes système et son nombre d'objets — toutes les applications et tous les états de ces codes système, plus les objets reclassés dans le module. Voir [Simuler → Quoi](./security-simulation.md#what). |
| **ou un code système** | Un code système à la place d'un module. |
| **Ouvert pour (rôle ou utilisateur)** | Le rôle auquel le module est ouvert — ou un utilisateur, même si des lignes portées par un rôle se maintiennent plus facilement. |
| **Avec** | **tous les droits**, **tout sauf supprimer** ou **exécution seule (consultation)**. |
| **Fermé pour tous les autres (\*PUBLIC)** | Cochée par défaut : le module est fermé à `*PUBLIC`, seuls les rôles explicitement ouverts y accèdent. |

**Proposer les lignes** lit la sécurité du rôle et de `*PUBLIC` et construit le plan.

---

## Les lignes proposées \{#plan\}

Les chiffres : **objets dans le module**, **lignes à ajouter** (en orange s'il y en a), **lignes de fermeture**, **lignes d'ouverture**, **lignes d'action** et **objets déjà corrects** — ceux pour lesquels rien n'est nécessaire.

La liste présente chaque ligne telle que le Security Workbench la stocke (`F00950`) :

| Colonne | Contenu |
|---|---|
| **FSSETY** | Le type de sécurité : **3** pour la sécurité application (exécution), **1** pour la sécurité action (ajouter / modifier / supprimer). |
| **FSUSER** | `*PUBLIC` pour une ligne de fermeture, le rôle pour une ligne d'ouverture ou d'action. |
| **FSOBNM**, **Description** | L'application ou l'état. |
| **FSRUN** | Sur une ligne de type 3 : `N` pour fermer, `Y` pour ouvrir. |
| **FSA**, **FSCHNG**, **FSDLT**, **FSIOK** | Sur une ligne de type 1 : ajout, modification, suppression et OK, selon **Avec**. |
| **Pourquoi** | *fermé pour tous*, *ouvert pour le rôle* ou *les actions du rôle*. |

Sous la liste, la page rappelle la suite : relire les lignes, les exporter (**Exporter**, au-dessus de la liste), les charger dans le Security Workbench, puis simuler le rôle sur le module et enregistrer la réponse comme cas de test.

---

## Seulement ce qui manque \{#only-missing\}

Une ligne n'est proposée que si la sécurité actuelle ne donne pas déjà le résultat attendu :

- Un objet que `*PUBLIC` ne peut déjà pas exécuter — parce qu'une ligne `*PUBLIC` ferme `*ALL` ou ferme l'objet — ne reçoit **aucune ligne de fermeture**.
- Un objet que le rôle peut déjà exécuter ne reçoit **aucune ligne d'ouverture** ; ses actions ne reçoivent une ligne que si elles diffèrent de ce que demande **Avec**.
- Une fois les lignes chargées, proposer de nouveau le plan **ne propose plus rien**, et un bandeau l'indique : *La sécurité dit déjà tout cela : aucune ligne à ajouter.*

Au-delà de 5 000 objets, la liste est coupée et un bandeau demande de la restreindre.

---

## Accès \{#access\}

L'onglet fait partie de la page Simulation de la sécurité, dans le dossier **Maintenance de la sécurité** ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). L'écriture des lignes se fait dans le [Security Workbench](./security-workbench.md), avec les droits de cet écran.

---

## Conseils & bonnes pratiques \{#tips\}

- **Fermer `*ALL` pour `*PUBLIC` une fois pour toutes** plutôt qu'objet par objet : une sécurité fermée par défaut raccourcit chaque plan de module. La [Cohérence](./workbench-consistency.md) signale quand ce n'est pas le cas.
- **Relire avant de charger** : le plan est calculé sur la sécurité au moment de la lecture ; une ligne écrite entre-temps le modifie.
- **Contrôler ensuite le résultat** : simuler le rôle sur le module, enregistrer la réponse comme [cas de test](./security-test-cases.md) et la rejouer après chaque changement ultérieur.
