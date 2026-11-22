---
title: Transformer un connecteur en application
description: "Un connecteur devient une « application » visible dans le sélecteur d'applications quand un menu lui est attaché et que show_in_switcher est actif. Plus comment le champ optionnel home décide de la page d'accueil."
keywords: [Liberty Framework, application, show_in_switcher, home, connecteur, menu, sélecteur d'applications, sélecteur]
---

# Transformer un connecteur en application

Liberty n'a **aucune configuration Applications séparée**. Ce que les utilisateurs appellent « une application » — ce qui apparaît dans le sélecteur d'applications, ce qui porte un menu dans la navigation à gauche — c'est simplement un **connecteur auquel un menu est attaché** avec l'indicateur `show_in_switcher` actif.

Cette page détaille le câblage des deux côtés : l'indicateur sur le connecteur + la clé du menu.

---

## Les trois pièces

| Pièce | Où se trouve-t-elle | Requise pour une application ? |
|---|---|---|
| **`show_in_switcher`** | Sur le connecteur (Liberty Next → Données → Connecteurs → étape **Réglages**). | Oui — désactivé, le connecteur existe mais n'apparaît pas dans le sélecteur d'applications. |
| **`[menus.<connector>]`** | Le fichier de menus (Liberty Next → Écrans → Menus). | Oui — sans menu, le connecteur est traité comme une *source de données*, pas une application. |
| **`home`** | Sur le connecteur (Liberty Next → Données → Connecteurs → étape **Réglages**). | Optionnel — définit l'élément d'accueil quand l'utilisateur choisit cette application dans le sélecteur. |

Deux effets distincts, déclenchés par des indicateurs différents :

| Effet | Déclenché par |
|---|---|
| La pastille du connecteur passe de *Sources de données* à *Applications* sur la page Connecteurs. | L'existence du menu seule — `[menus.<connector>]` est configuré. |
| Une tuile pour l'application apparaît dans le sélecteur d'applications (le sélecteur d'applications côté utilisateur). | L'existence du menu **et** `show_in_switcher = true`. |

Configurer le menu d'abord ; activer `show_in_switcher` ensuite. Manquer la seconde étape laisse le connecteur classé comme « application » sur la page Connecteurs sans pour autant le faire apparaître dans le sélecteur côté utilisateur.

---

## Où chaque indicateur est défini

<svg viewBox="0 0 1320 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mca-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mca-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mca-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="416" rx="14" fill="url(#mca-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="47" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="47" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <rect x="957" y="33" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1019.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="876" y="33" width="75" height="22" rx="5" fill="url(#mca-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="913.5" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="790" y="33" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <rect x="704" y="33" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="744.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Connecteur</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238" y="80" width="220" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="248" y="90" width="200" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="103.3" fill="#475569" fontSize="8.4" fontFamily="system-ui, sans-serif">⌕ filtrer 6…</text>
  <text x="250" y="128" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <rect x="248" y="136" width="200" height="36" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="258" y="158" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="151" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="276" y="164" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql · 12 table(s) · 30 requête(s)</text>
  <rect x="248" y="178" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="200" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="193" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1</text>
  <text x="276" y="206" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql · 116 table(s) · 33 requête(s)</text>
  <text x="250" y="234" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCES DE DONNÉES</text>
  <rect x="248" y="242" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="264" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="257" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">default</text>
  <text x="276" y="270" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql</text>
  <rect x="248" y="284" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="306" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="299" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">reporting</text>
  <text x="276" y="312" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql · 4 table(s)</text>
  <rect x="248" y="326" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="348" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="341" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">helpdesk</text>
  <text x="276" y="354" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">api · 12 endpoint(s)</text>
  <rect x="470" y="80" width="612" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="102" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]</text>
  <text x="589.2" y="102" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">· sql</text>
  <rect x="1016" y="90" width="54" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1043.0" y="103.5" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="954" y="90" width="58" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.0" y="103.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="901" y="90" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="103.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Cloner</text>
  <rect x="780" y="90" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="103.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Rechercher les usages</text>
  <rect x="482.0" y="116" width="106.4" height="44" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="490.0" y="124" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="510.0" y="135" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉGLAGES</text>
  <text x="490.0" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="588.4" y1="138.0" x2="601.4" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="602.4" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="610.4" y="124" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="630.4" y="135" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="610.4" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">12 table(s)</text>
  <line x1="708.8" y1="138.0" x2="721.8" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="722.8" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="730.8" y="124" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="750.8" y="135" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES</text>
  <text x="730.8" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">30 requête(s)</text>
  <line x1="829.2" y1="138.0" x2="842.2" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="843.2" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="851.2" y="124" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="871.2" y="135" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉQUENCES</text>
  <text x="851.2" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 séquence(s)</text>
  <line x1="949.6" y1="138.0" x2="962.6" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="963.6" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="971.6" y="124" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="991.6" y="135" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LISTES</text>
  <text x="971.6" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">5 liste(s)</text>
  <text x="482" y="176" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">POOL</text>
  <rect x="482" y="181" width="588" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="491" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">crm</text>
  <text x="1058" y="195.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="482" y="212" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">POOLS</text>
  <rect x="482" y="217" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="505" y="229.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="482" y="248" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SHOW IN SWITCHER</text>
  <rect x="482" y="259" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M484.5,264.5 L486.8,266.8 L490.8,262" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="499" y="268" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="482" y="282" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Show this connector in the top app switcher.</text>
  <text x="482" y="294" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HOME</text>
  <rect x="482" y="299" width="588" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="491" y="313.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">overview  Vue d'ensemble</text>
  <text x="1058" y="313.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="482" y="333" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Landing menu item id when this app is picked.</text>
  <text x="482" y="344" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HOME BY ROLE</text>
  <rect x="482" y="349" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="505" y="361.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="482" y="382" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">A landing menu item per role: a user lands on the item of their first role listed here, else on home.</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les connecteurs qui ont un menu</text>
  <line x1="200" y1="137.0" x2="250" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="20" y="264" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="279" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sources de données</text>
  <text x="30" y="292" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans menu : pas une application</text>
  <line x1="200" y1="281.0" x2="250" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="172" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étape Réglages</text>
  <text x="1130" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les réglages de l'application</text>
  <line x1="1120" y1="189.0" x2="540" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="247" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="262" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Show In Switcher</text>
  <text x="1130" y="275" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ un menu = dans le sélecteur</text>
  <line x1="1120" y1="264.0" x2="560" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Home</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entrée d'arrivée de l'app</text>
  <line x1="1120" y1="317.0" x2="1070" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="368" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Home By Role</text>
  <text x="1130" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une entrée d'arrivée par rôle</text>
  <line x1="1120" y1="385.0" x2="530" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
</svg>

---

## Étape 1 — Sur le connecteur

Ouvrir **Liberty Next → Données → Connecteurs** et choisir le connecteur dans la liste — les connecteurs qui ont un menu sont sous **Applications**, les autres sous **Sources de données**. Son étape **Réglages** s'ouvre en premier. Les champs pertinents pour « ceci est une application » (intitulés **Show In Switcher**, **Home** et **Home By Role** dans le formulaire) :

| Champ | Notes |
|---|---|
| **`show_in_switcher`** | Par défaut `true`. Activé, le connecteur apparaît dans le sélecteur d'applications du menu latéral (à condition d'avoir un menu). Désactivé, le connecteur n'est accessible que par URL — utile pour les connecteurs cachés ou d'administration. |
| **`home`** | Liste déroulante alimentée par les éléments de menu de ce connecteur. Choisit l'élément d'accueil quand l'utilisateur clique sur l'application dans le sélecteur. Vide → le premier élément visible de premier niveau. |
| **`home_by_role`** | Une page d'accueil par rôle : une ligne par rôle, chacune avec un élément de menu choisi dans les listes. Un utilisateur arrive sur l'élément de son premier rôle listé ici, sinon sur `home` — les auditeurs sur la synthèse d'audit, les administrateurs sur les écrans de paramétrage. |

Enregistrer la page du connecteur — la modification s'applique immédiatement (rechargement à chaud).

---

## Étape 2 — Sur le menu

Ouvrir **Liberty Next → Écrans → Menus**. Si le connecteur n'a pas encore de menu, le bouton **+ Add scope** ouvre une boîte de dialogue qui liste tous les connecteurs **sans** menu — choisir le sien. La boîte de dialogue :

- Crée une nouvelle entrée `[menus.<connector>]` sans éléments.
- Sélectionne la pastille de la nouvelle application.
- Affiche l'arbre vide.

Si le connecteur a déjà un menu, sa pastille est dans la barre de portée — il suffit de cliquer dessus.

Ajouter des éléments via **＋ Dossier** / **＋ Élément** en haut du panneau de l'arbre. Voir [Construire l'arbre](./build-the-tree.md) pour la visite de l'éditeur.

---

## Ce qui change après le câblage

Avant :

- Le connecteur apparaît sous **Sources de données** sur la page Connecteurs.
- Il n'apparaît pas dans le sélecteur d'applications.
- Les écrans qui pointent vers ses requêtes ne sont accessibles que par URL.

Après :

- Le connecteur apparaît sous **Applications** sur la page Connecteurs.
- Il apparaît dans le sélecteur d'applications (affiché dans le menu latéral quand il y a plus d'une application).
- La choisir amène l'utilisateur à l'élément `home` (ou au premier élément visible de premier niveau).
- La navigation à gauche affiche l'arbre du menu.

La page Connecteurs lit le fichier des menus pour décider du regroupement — il n'y a pas d'indicateur séparé « ceci est une application » au-delà de *« a un menu + est dans le sélecteur »*.

---

## Dupliquer une application

La page Connecteurs propose une action **Dupliquer** (couverte dans [Requêtes → Dupliquer une requête ou un connecteur](../queries/clone.md#clone-app--the-whole-application)) qui copie le connecteur + son recouvrement de dictionnaire + ses écrans + son menu + ses tableaux de bord + ses graphiques sous une nouvelle clé de connecteur. Le connecteur dupliqué hérite de `show_in_switcher` ; son menu est câblé automatiquement — l'application dupliquée apparaît dans le sélecteur d'applications dès que la duplication se termine.

C'est le bon choix quand :

- Un déploiement parallèle est nécessaire (`nomasx1` → `nomasx1b` pour des tests de non-régression).
- Une instance par tenant est mise en place.
- L'application est forkée pour un refactor majeur en gardant l'originale en production.

---

## Masquer une application temporairement

Deux façons de retirer une application du sélecteur sans la supprimer :

| Option | Effet |
|---|---|
| Désactiver `show_in_switcher` sur le connecteur. | L'application disparaît du sélecteur. Ses écrans restent accessibles par URL ; les utilisateurs qui ont l'URL continuent de travailler. |
| Supprimer l'entrée `[menus.<connector>]`. | Le connecteur retourne sous *Sources de données*. Les écrans résolvent encore, mais l'utilisateur n'a plus de navigation pour les trouver. |

La première est le bon choix pour les fenêtres de maintenance — entièrement réversible en un clic. La seconde sert à retirer définitivement l'UI de l'application.

---

## Installations multi-applications

Une installation Liberty typique porte plusieurs applications :

| Connecteur | Rôle |
|---|---|
| `crm` | CRM destiné aux clients. |
| `nomasx1` | Revue de sécurité. |
| `nomajde` | Données de référence JD Edwards EnterpriseOne. |
| `nomaflow` | Ordonnanceur de tâches (un produit à part entière). |
| `default` | Le pool du framework lui-même — généralement sans menu, juste une source de données pour les requêtes partagées. |

Chacune obtient son propre bloc `[menus.<name>]`, sa propre pastille sur la page Menus, sa propre entrée dans le sélecteur d'applications. Elles partagent le même processus du framework, la même authentification, le même dictionnaire (avec recouvrements par connecteur).

Un utilisateur qui se connecte ne voit que les applications pour lesquelles il a les permissions — `GET /api/menus` renvoie un arbre vide pour une application où l'utilisateur ne peut rien exécuter (et la tuile du sélecteur se masque en conséquence).

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Connecteur avec `show_in_switcher = true` mais sans menu. | Le connecteur apparaît dans le groupe *Sources de données* de la page Connecteurs ; le sélecteur d'applications ne le liste pas. | Ajouter un menu dans *Liberty Next → Écrans → Menus*. |
| Connecteur avec un menu mais `show_in_switcher = false`. | Le menu existe mais le sélecteur ne liste pas l'application. | Soit activer `show_in_switcher`, soit accepter que les utilisateurs n'atteindront l'application que par URL. |
| `home` pointe vers un élément de menu qui n'existe plus. | Choisir l'application mène au le premier élément visible de premier niveau, en ignorant le `home` périmé. | Choisir de nouveau un élément valide — la liste déroulante affiche les éléments de menu actifs. |
| Ajouter `[menus.<X>]` où `<X>` n'est pas un connecteur. | La page rejette l'entrée à l'enregistrement — la clé du menu doit correspondre à un connecteur connu. | Créer d'abord le connecteur, puis attacher le menu. |
| Dupliquer une application mais le nouveau pool n'existe pas. | La boîte de dialogue de duplication refuse de soumettre. | Créer le pool dans *Liberty Next → Administrer → Pools* avant de dupliquer. |

---

## La suite

- [Construire l'arbre](./build-the-tree.md) — dossiers, feuilles, glisser-déposer et réorganisation.
- [Types d'éléments](./item-types.md) — choisir entre `query`, `endpoint`, `dashboard`, `page`.
- [Requêtes → Dupliquer une requête ou un connecteur](../queries/clone.md) — le flux de duplication d'application complète.
