---
title: Vue d'ensemble et Studio
description: "Les deux pages sur lesquelles Liberty Next accueille ceux qui construisent : Vue d'ensemble — les applications de l'installation avec leurs chiffres et les huit étapes de construction d'une application — et le Studio, la carte d'une application (menu, écrans, données, services) où une sélection met en évidence ce qui lui est lié, où ce que rien n'utilise est signalé et où chaque éditeur s'ouvre sur place."
keywords: [Liberty Next, Studio, Vue d'ensemble, carte d'application, low-code, écrans, requêtes, points d'accès, services, dépendances, inutilisé, intégrité, modification sur place]
---

# Vue d'ensemble et Studio

Deux pages donnent la vision complète avant d'ouvrir le moindre éditeur. **Vue d'ensemble** liste les applications de l'installation et le chemin qui en construit une. Le **Studio** présente une application sous forme de **carte** — son menu, ses écrans, les données qu'ils utilisent, les services qu'ils appellent — et permet de tout modifier sans quitter la page.

Accès : **Liberty Next → Vue d'ensemble** et **Liberty Next → Construire → Studio**, pour les superutilisateurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="stu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="stu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="stu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="stu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="342" rx="14" fill="url(#stu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Studio</text>
  <rect x="240" y="60" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="74.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">crm ▾</text>
  <rect x="338" y="60" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="348" y="74.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Chercher un écran, une requête, un service…</text>
  <rect x="578" y="62" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="607.0" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 Écrans</text>
  <rect x="642" y="62" width="63" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="673.5" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9 Données</text>
  <rect x="711" y="62" width="68" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="745.0" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 Services</text>
  <rect x="785" y="62" width="138" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="854.0" y="74.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 écran que rien n'ouvre</text>
  <rect x="236" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MENU</text>
  <text x="356" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <rect x="374" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="384" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉCRANS</text>
  <text x="494" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <rect x="512" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="522" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="632" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <rect x="650" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="660" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVICES</text>
  <text x="770" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <path d="M358,135 C370.0,135 370.0,135 382,135" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,135 C508.0,135 508.0,135 520,135" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,135 C508.0,135 508.0,163 520,163" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,219 C508.0,219 508.0,219 520,219" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,135 C508.0,135 508.0,219 520,219" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <rect x="244" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="138.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="244" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="152" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="166.3" fill="#475569" fontSize="8.8" fontFamily="system-ui, sans-serif">Affaires</text>
  <rect x="244" y="180" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="180" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="194.3" fill="#475569" fontSize="8.8" fontFamily="system-ui, sans-serif">Activités</text>
  <rect x="244" y="208" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="208" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="222.3" fill="#475569" fontSize="8.8" fontFamily="system-ui, sans-serif">Pipeline</text>
  <rect x="382" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390" y="138.3" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="382" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="152" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="390" y="166.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">deals</text>
  <rect x="382" y="180" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="180" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="390" y="194.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">activities</text>
  <rect x="382" y="208" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="208" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390" y="222.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">contacts</text>
  <rect x="382" y="236" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="236" width="114" height="22" rx="5" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.5)" strokeWidth="1"/>
  <text x="390" y="250.3" fill="#fb923c" fontSize="8.8" fontFamily="ui-monospace, monospace">old_import</text>
  <rect x="520" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528" y="138.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">customers_get</text>
  <rect x="520" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="152" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528" y="166.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">customers_put</text>
  <rect x="520" y="180" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="180" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="528" y="194.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">deals_get</text>
  <rect x="520" y="208" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="208" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528" y="222.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">contacts_get</text>
  <rect x="520" y="236" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="236" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="528" y="250.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">activities_get</text>
  <rect x="658" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="658" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="666" y="138.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">check_credit</text>
  <rect x="658" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="658" y="152" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="666" y="166.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">close_deal</text>
  <rect x="794" y="96" width="170" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="806" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉCRAN</text>
  <text x="806" y="134" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="806" y="144" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="852.0" y="158.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvrir l'écran</text>
  <rect x="904" y="144" width="67" height="22" rx="5" fill="url(#stu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="937.5" y="158.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Concevoir</text>
  <text x="806" y="188" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES QU'IL UTILISE</text>
  <text x="806" y="206" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">customers_get</text>
  <text x="952" y="206" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">lit</text>
  <text x="806" y="224" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">customers_put</text>
  <text x="952" y="224" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">enregistre</text>
  <text x="806" y="256" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVICES QU'IL APPELLE</text>
  <text x="806" y="274" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="806" y="302" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRANS DANS SA FICHE</text>
  <text x="806" y="320" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">contacts</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une application</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa carte, filtrée d'un coup</text>
  <line x1="200" y1="77.0" x2="240" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sélectionne</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les éléments liés s'éclairent</text>
  <line x1="200" y1="167.0" x2="382" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rien ne l'ouvre</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ni menu, ni fiche</text>
  <line x1="200" y1="267.0" x2="382" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est isolé</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compté en haut</text>
  <line x1="1000" y1="77.0" x2="923" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier sur place</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'éditeur s'ouvre sur la carte</text>
  <line x1="1000" y1="157.0" x2="971" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'il utilise</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lit · enregistre · appelle</text>
  <line x1="1000" y1="267.0" x2="956" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
</svg>

---

## La page Vue d'ensemble \{#overview\}

La page comporte un en-tête et deux sections.

**En-tête** — **Ouvrir le Studio**, **Un nouvel écran, avec l'assistant** (l'[Assistant de création d'écran](./build/screen-assistant.md)), et deux pastilles d'état : l'intégrité de la configuration — *Rien de cassé*, ou le nombre d'erreurs et d'avertissements, qui ouvre **Déployer → Intégrité** — et, dès qu'il existe des cas de test, les totaux des [tests](./build/tests.md), qui ouvrent **Exploiter → Résultats des tests**.

**Les applications** — une carte par application : son nombre d'**écrans**, d'**entrées de menu**, de **données** (requêtes et points d'accès) et de **services**, et une ligne d'état : *Tous les écrans sont accessibles*, ou le nombre d'écrans que rien n'ouvre et de références cassées. Une carte ouvre l'application dans le Studio.

**Comment une application se construit** — huit étapes, dans l'ordre ; chacune dit en une phrase à quoi elle sert, montre ce que l'installation contient déjà et ouvre la page où elle se réalise.

| # | Étape | Ouvre |
|---|---|---|
| 1 | **Connecter les données** — un connecteur atteint une base ou une API ; ses requêtes et ses points d'accès sont le seul endroit où les données sont lues et écrites. | Données → Connecteurs |
| 2 | **Nommer les champs** — le dictionnaire donne à chaque champ son libellé, son format, sa liste de valeurs, une fois pour tous les écrans. | Données → Dictionnaire |
| 3 | **Construire les écrans** — un écran est une requête affichée en grille, avec ses filtres, sa fiche, ses actions. | Construire → Studio |
| 4 | **Organiser le menu** — des dossiers et des entrées qui ouvrent un écran, un tableau de bord, une page. | Écrans → Menus |
| 5 | **Ajouter la logique** — un service compose des étapes en un seul appel ; une tâche exécute des étapes selon une planification ; une notification prévient quelqu'un. | Logique → Services |
| 6 | **Montrer les chiffres** — des tableaux de bord et des graphiques pour ce qui se suit chaque jour ; l'explorateur de données pour les questions libres. | Analyse → Tableaux de bord |
| 7 | **Donner l'accès** — les rôles disent qui voit quel menu, exécute quelle requête, et quelles lignes lui reviennent. | Administrer → Accès |
| 8 | **Vérifier et livrer** — le contrôle d'intégrité trouve ce qui est cassé ; un paquet porte la configuration vers un autre environnement. | Déployer → Paquet |

---

## Le Studio \{#studio\}

L'application se choisit en haut à gauche. Sa carte comporte quatre colonnes, chacune avec son compteur :

| Colonne | Contenu |
|---|---|
| **Menu** | Les entrées du menu de l'application. |
| **Écrans** | Ses écrans. Des icônes signalent *A une fiche* et *Lecture seule*. |
| **Données** | Les requêtes et les points d'accès utilisés par ses écrans. Un crayon marque ce qui *modifie des données*. |
| **Services** | Les services appelés par ses écrans. **Tous les services…** ouvre la page [Services](./build/services.md). |

La zone de recherche — *Chercher un écran, une requête, un service…* — réduit toutes les colonnes à la fois.

### Suivre les liens \{#links\}

Un clic sélectionne un élément : **tout ce qui lui est lié s'éclaire**, les liens se dessinent d'une colonne à l'autre, et le reste s'estompe. La sélection suit les liens jusqu'au bout — une requête éclaire les écrans qui l'utilisent et leurs entrées de menu ; une entrée de menu éclaire son écran et tout ce à quoi cet écran mène. Un second clic annule la sélection.

Un clic suffit ainsi pour répondre aux questions qui, autrement, obligent à ouvrir cinq éditeurs : *que casse la modification de cette requête ? quels écrans appellent ce service ? par où un utilisateur arrive-t-il à cet écran ?*

### Ce qui est isolé \{#loose\}

Le Studio signale ce qu'une application porte pour rien, et ce qui est cassé :

| Signe | Signification |
|---|---|
| Avertissement sur un écran | *Aucune entrée de menu ni aucune fiche n'ouvre cet écran.* |
| Avertissement sur une donnée ou un service | *N'existe plus : ce qui pointe dessus est cassé.* |
| **Afficher les N qu'aucun écran n'utilise** (colonne Données) | Les requêtes et les points d'accès de l'application qu'aucun écran n'utilise. |
| Pastille orange en haut | Le nombre d'écrans que rien n'ouvre. |

La pastille d'intégrité, à côté, ouvre le contrôle complet.

### Modifier sur place \{#edit\}

Le panneau de droite dit ce qu'est la sélection, ce qu'elle utilise et ce qui l'utilise — et donne le moyen de la modifier :

| Sélection | Le panneau affiche | Boutons |
|---|---|---|
| Rien | **À regarder** (ce qui est isolé) et les tableaux de bord de l'application, marqués *hors du menu* quand aucune entrée ne les ouvre. | — |
| Un **écran** | *Données qu'il utilise* — chacune marquée *lit*, *enregistre* ou *appelle* —, *Services qu'il appelle*, *Écrans dans sa fiche*. | **Concevoir**, **Ouvrir l'écran** |
| Une **requête** ou un **point d'accès** | *Utilisé par*, *Servi par le service*. | **Modifier la requête** / **Modifier le point d'accès** |
| Un **service** | Son nombre d'étapes, *Utilisé par*, *Exposé comme*. | **Concevoir le flux**, **Exécuter** |
| Une **entrée de menu** | *Ouvre*. | **Modifier le menu** |

Les éditeurs s'ouvrent **par-dessus la carte** et y reviennent, la carte étant rechargée : le [Concepteur d'écran](./build/screens/overview.md), l'éditeur de requête, l'éditeur de point d'accès, le concepteur de service, le menu et les tableaux de bord. Un double-clic sur un écran ou un service ouvre directement son éditeur.

---

## Conseils & bonnes pratiques \{#tips\}

- Ouvrir le Studio **avant** de modifier une requête ou un service partagé : les éléments éclairés forment le plan de test.
- Traiter les éléments isolés avant une livraison — un écran que rien n'ouvre est soit une entrée de menu manquante, soit de la configuration morte.
- Pour découvrir une application, sélectionner ses entrées de menu une à une : la carte lui sert de documentation.
- Le Studio traite une application à la fois ; **Rechercher les usages**, dans chaque éditeur, parcourt toute l'installation.

---

## Voir aussi

- [L'espace de travail Liberty Next](./configuration/settings-ui.md) — le menu et l'application d'un enregistrement.
- [Services](./build/services.md), [Tests](./build/tests.md), [Points d'accès d'API](./build/api-endpoints.md).
