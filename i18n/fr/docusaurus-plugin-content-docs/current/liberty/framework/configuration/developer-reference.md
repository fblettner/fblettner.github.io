---
title: Référence développeur
description: "La Référence développeur de Liberty Next (Liberty Next → Documenter) : le modèle de données du framework et de chaque connecteur, chaque réglage avec la page qui le modifie et le code qui le lit, chaque route de l'API avec l'accès qu'elle exige et sa réponse, chaque ligne de commande avec ses arguments, et l'impact d'une modification sur la configuration — avec recherche, pour les superutilisateurs."
keywords: [Liberty Next, référence développeur, modèle de données, référence de configuration, réglages, routes de l'API, permissions, ligne de commande, CLI, analyse d'impact, dépendances, entités inutilisées, superutilisateur, documentation]
---

# Référence développeur

**Liberty Next → Documenter → Référence développeur** décrit l'installation en service de l'intérieur : ses tables, ses réglages, ses routes d'API, ses lignes de commande et les liens entre les éléments de sa configuration, lus dans le code et la configuration en vigueur. Elle s'adresse à ceux qui assurent le support de l'installation — superutilisateurs uniquement — et ne modifie rien.

La page compte cinq onglets, dans son en-tête — **Modèle de données**, **Configuration**, **API**, **Ligne de commande**, **Impact** ; elle s'ouvre sur **Configuration**, puis sur le dernier onglet utilisé.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 437" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="devref-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="devref-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="devref-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="devref-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="397" rx="14" fill="url(#devref-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Référence développeur</text>
  <text x="258" y="59" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Chaque clé de app.toml, lue depuis le code en cours d’exécution : l’écran qui la modifie, ou pourquoi elle reste…</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <rect x="669" y="32" width="415" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="726.0" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Modèle de données</text>
  <rect x="784" y="33" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="829.5" y="47.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <line x1="876" y1="37" x2="876" y2="51" stroke="#334155" strokeWidth="1"/>
  <text x="895.5" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <line x1="915" y1="37" x2="915" y2="51" stroke="#334155" strokeWidth="1"/>
  <text x="972.0" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ligne de commande</text>
  <line x1="1029" y1="37" x2="1029" y2="51" stroke="#334155" strokeWidth="1"/>
  <text x="1056.5" y="47.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Impact</text>
  <rect x="244" y="92" width="204" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="107.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Chercher une clé, une description…</text>
  <rect x="237" y="124" width="218" height="24" fill="rgba(74,158,255,0.14)"/>
  <rect x="237" y="124" width="3" height="24" fill="#4a9eff"/>
  <text x="250" y="140" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les sections</text>
  <text x="444" y="140" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">114</text>
  <line x1="236" y1="148" x2="456" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="165" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">app</text>
  <text x="444" y="165" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">24</text>
  <line x1="236" y1="173" x2="456" y2="173" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="190" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">connectors</text>
  <text x="444" y="190" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <line x1="236" y1="198" x2="456" y2="198" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="215" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">screens</text>
  <text x="444" y="215" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="236" y1="223" x2="456" y2="223" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">auth</text>
  <text x="444" y="240" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">11</text>
  <line x1="236" y1="248" x2="456" y2="248" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="265" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">oidc</text>
  <text x="444" y="265" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <line x1="236" y1="273" x2="456" y2="273" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="290" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ai</text>
  <text x="444" y="290" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">29</text>
  <line x1="236" y1="298" x2="456" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="315" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">license</text>
  <text x="444" y="315" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="236" y1="323" x2="456" y2="323" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="340" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">jobs</text>
  <text x="444" y="340" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <line x1="236" y1="348" x2="456" y2="348" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="365" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">changesets</text>
  <text x="444" y="365" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <line x1="236" y1="373" x2="456" y2="373" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="390" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <text x="444" y="390" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <line x1="236" y1="398" x2="456" y2="398" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="84" width="220" height="321" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="470" y="84" width="614" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="112" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">app.toml</text>
  <text x="554" y="111" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">95 modifiés dans un écran · 19 fichier / environnement seulement · 0 hors interface</text>
  <rect x="954" y="96" width="118" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="964" y="110.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Tout statut</text>
  <text x="1060" y="110.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="470" y="142" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="157.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="1014" y="142" width="70" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="949" y="142" width="60" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="979.0" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="889" y="142" width="55" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="916.5" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="829" y="142" width="55" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="784" y="142" width="40" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="157.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="470" y="174" width="614" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ</text>
  <text x="584" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <text x="684" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="722" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIÉE DANS</text>
  <text x="900" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LUE PAR</text>
  <text x="960" y="190.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉFAUT</text>
  <rect x="470" y="204" width="614" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.name</text>
  <text x="584" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Nom de l'application</text>
  <text x="684" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <text x="722" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="208.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="916.0" y="219.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">web</text>
  <text x="960" y="219.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">"Liberty"</text>
  <rect x="470" y="232" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.port</text>
  <text x="584" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Port</text>
  <text x="684" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">int</text>
  <text x="722" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="236.0" width="37" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="247.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">main</text>
  <text x="960" y="247.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">8000</text>
  <rect x="470" y="260" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.static_dir</text>
  <text x="584" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Frontend compilé</text>
  <text x="684" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <rect x="722" y="264.0" width="175" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="809.5" y="275.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichier / environnement seulement</text>
  <rect x="900" y="264.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="916.0" y="275.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">web</text>
  <text x="960" y="275.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="470" y="288" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">app.log_file</text>
  <text x="584" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichier journal</text>
  <text x="684" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <text x="722" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="292.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="916.0" y="303.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">log</text>
  <text x="960" y="303.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="470" y="316" width="614" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.files_dir</text>
  <text x="584" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Zone de travail</text>
  <text x="684" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">str</text>
  <text x="722" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Liberty Next → Administer → App</text>
  <rect x="900" y="320.0" width="37" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="331.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">jobs</text>
  <text x="960" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="470" y="358" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page  50 ▾      1–50 sur 114</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq vues</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'en-tête de la page</text>
  <line x1="200" y1="47.0" x2="236" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur nombre de clés</text>
  <line x1="200" y1="217.0" x2="236" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="1120" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre par statut</text>
  <text x="1130" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifiée, fichier seul, hors interface</text>
  <line x1="1120" y1="77.0" x2="1084" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La grille commune</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vues, filtres, export</text>
  <line x1="1120" y1="187.0" x2="1084" y2="154" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne → son détail</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">description, lecteurs dans le code</text>
  <line x1="1120" y1="307.0" x2="1084" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#devref-arrow)"/>
</svg>

---

## Modèle de données \{#data\}

Les tables du framework, puis celles que déclare chaque connecteur, groupées par connecteur, chacune avec son nombre de colonnes. La recherche trouve une table, une colonne ou un libellé.

Une table présente sa **table physique**, sa **clé**, les **requêtes** qui la lisent et ce qui l'utilise — écrans, tableaux de bord, graphiques, tâches, modèles de l'explorateur —, ses tables liées, puis ses colonnes : **Colonne**, **Libellé** (issu du dictionnaire), **Type**, **Références**, **Écrans**, **Description**.

---

## Configuration \{#config\}

Chaque réglage de l'installation, par section, avec son type, sa valeur par défaut et sa description. À gauche, les sections de `app.toml` avec leur nombre de clés, sous une recherche qui porte sur toutes les sections (chacune affiche alors ses résultats) ; à droite, la grille commune — vues, filtres, regroupement, colonnes, export.

| Colonne | Signification |
|---|---|
| **Clé**, **Libellé**, **Type**, **Défaut** | Le réglage. |
| **Modifiée dans** | La page qui le modifie — *Liberty Next → Administrer → App* —, ou *Fichier / environnement seulement* avec la raison, ou *Pas dans l'interface*. |
| **Lue par** | Les emplacements du code qui l'utilisent. |

L'en-tête dénombre les réglages modifiés dans un écran, ceux fixés seulement dans le fichier ou l'environnement, et ceux absents de l'interface ; le filtre d'état (*Tout statut*, *Modifié dans un écran*, *Fichier / environnement seulement*, *Pas dans l'interface*) n'en garde qu'une catégorie. Un clic sur une ligne en ouvre le détail, avec le code qui la lit.

---

## API \{#api\}

Chaque route du serveur, par module : **Méthode**, **Chemin**, **Résumé**, **Module** et **Accès** — *public*, *tout utilisateur connecté*, *superutilisateur*, une *permission* ou un *rôle*, lu dans le code. Un clic sur une route en ouvre les paramètres, la requête et la réponse, ainsi que l'emplacement de son traitement. Pour les principales routes de lecture — connecteurs, menus, écrans, adresses externes, explorateur de données, tâches et exécutions Nomaflow —, la section **Réponse** donne la structure du JSON renvoyé, avec un exemple. Les boutons de l'en-tête ouvrent la documentation interactive de l'API du serveur.

La recherche porte sur tous les modules et indique, par groupe, le nombre de résultats.

---

## Ligne de commande \{#cli\}

Chaque commande installée avec le serveur — `liberty-admin`, `liberty-ops`, `liberty-connectors`, `liberty-crypto`, `liberty-license`… —, lue dans son analyseur d'arguments. À gauche, les commandes avec une recherche, repliées par défaut, avec **Tout déplier** / **Tout replier**.

Une commande présente son rôle, sa syntaxe avec **Copier**, les **Options de toutes les commandes**, puis chaque sous-commande avec ses arguments : **Argument**, **Valeur**, **Défaut**, *obligatoire*, *répétable*. Sous Docker, `./liberty` prend en charge l'installation, la mise à jour, les sauvegardes et la base de données : voir [Exploitation](../../installation/operations.md). La section « ligne de commande » du [rapport technique](./documentation-reports.md) repose sur la même lecture.

---

## Impact \{#impact\}

Chaque entité de la configuration avec ce qu'elle utilise et ce qui l'utilise, de proche en proche : ce qu'atteint la modification d'un pool, d'une requête, d'un écran ou d'un élément du dictionnaire. Les liens sont ceux que suit l'analyse des dépendances du [Package](../build/packages.md).

À gauche, les entités par nature — pools, connecteurs, requêtes, endpoints API, éléments du dictionnaire, listes, séquences, énumérations, écrans, éléments de menu, graphiques, tableaux de bord, services, modèles Explorer, tâches, règles de notification, blocs IA —, repliées par défaut, avec une recherche (`scope.nom`). **Inutilisées seulement** ne garde que les entités auxquelles rien ne fait référence — éléments de menu, tâches, règles de notification, pools, modèles Explorer et éléments du dictionnaire, ouverts ou atteints autrement, ne sont jamais comptés comme inutilisés —, et **Référencées mais non définies** liste les références à une entité inexistante.

Une entité choisie présente :

| Partie | Contenu |
|---|---|
| En-tête | *utilise N · utilisée par N*, et **Ouvrir dans l'éditeur**, qui mène à son éditeur. |
| **Une modification ici atteint** | Les entités atteintes, comptées par nature : une requête → ses écrans → les éléments de menu qui les ouvrent, les graphiques → leurs tableaux de bord, les tâches et actions qui l'exécutent. |
| **Utilisée par** | L'arbre de ce qui l'utilise, niveau par niveau (jusqu'à 8 niveaux). |
| **Utilise** | Ce qu'elle utilise directement. |
| **Tout ce dont elle a besoin** | Toutes les entités dont elle dépend, de proche en proche. |

Un clic sur une entité de l'arbre recentre la vue sur elle ; **Retour** revient à la précédente. Un élément du dictionnaire n'a pas de référence explicite : une colonne rejoint son élément par son nom.

---

## Voir aussi

- [Rapports de documentation](./documentation-reports.md) — les mêmes informations sous forme de document PDF.
- [API REST](../../references/rest-api.md) — les principales routes, expliquées.
