---
title: Modèles de rapport
description: "Liberty Next → Analyse → Modèles de rapport : des rapports écrits par les opérateurs sans code — une requête d'un connecteur, des paramètres demandés à l'exécution et un modèle Jinja markdown —, testés dans l'éditeur sur des lignes réelles, puis exécutés depuis la page Rapports en PDF ou en markdown."
keywords: [Liberty Next, modèles de rapport, rapport personnalisé, Jinja, markdown, PDF, page Rapports, paramètres, requête de connecteur, reports.toml]
---

# Modèles de rapport

Un **modèle de rapport** est un rapport écrit par un opérateur sans code : une requête d'un connecteur fournit les lignes, des paramètres sont demandés à l'exécution, et un modèle Jinja markdown transforme les lignes en document. Une fois enregistré, le rapport figure sur la page **Rapports** (`/reports`) à côté des rapports livrés par les applications, et se télécharge en PDF ou en markdown.

Accès : **Liberty Next → Analyse → Modèles de rapport** (superutilisateurs).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 572" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="538" rx="14" fill="url(#rpt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau rapport personnalisé</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT (SEGMENT URL)</text>
  <rect x="240" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">orders-summary</text>
  <text x="606" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TITRE</text>
  <rect x="606" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Synthèse des commandes</text>
  <text x="240" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="240" y="130" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">sales        ▾</text>
  <text x="606" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE NOMMÉE</text>
  <rect x="606" y="130" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="144.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">orders_by_status_get  ▾</text>
  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="240" y="174" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Commandes ouvertes et closes, par statut</text>
  <text x="240" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="240" y="218" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="226" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="240.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">company</text>
  <rect x="396" y="226" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="406" y="240.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <rect x="582" y="226" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="240.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">string        ▾</text>
  <rect x="692" y="232" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M694.5,237.5 L696.8,239.8 L700.8,235" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="709" y="241" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">requis</text>
  <rect x="749.24" y="227" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="760.24" y="240.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="250" y="254" width="132" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="316.0" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un paramètre</text>
  <text x="240" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE JINJA MARKDOWN</text>
  <text x="240" y="318" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Insérer un exemple :</text>
  <rect x="343.2" y="306" width="83" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="384.7" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste à puces</text>
  <rect x="431.2" y="306" width="98" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="480.2" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau markdown</text>
  <rect x="534.2" y="306" width="102" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="585.2" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Sections groupées</text>
  <rect x="641.2" y="306" width="98" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="690.2" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé + tableau</text>
  <rect x="747.2" y="306" width="164" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="829.2" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Échafauder depuis la requête</text>
  <rect x="240" y="334" width="355.0" height="128" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="350" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">1</text>
  <text x="266" y="350" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">## Synthèse</text>
  <text x="250" y="365" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">2</text>
  <text x="266" y="365" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="250" y="380" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">3</text>
  <text x="266" y="380" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">- Lignes: &#123;&#123; ctx.data.rows | length &#125;&#125;</text>
  <text x="250" y="395" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">4</text>
  <text x="266" y="395" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="250" y="410" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">5</text>
  <text x="266" y="410" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">&#123;% for row in ctx.data.rows %&#125;</text>
  <text x="250" y="425" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">6</text>
  <text x="266" y="425" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">- &#123;&#123; row.STATUS &#125;&#125; : &#123;&#123; row.N &#125;&#125;</text>
  <text x="250" y="440" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">7</text>
  <text x="266" y="440" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">&#123;% endfor %&#125;</text>
  <rect x="605.0" y="334" width="355.0" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="342" width="116" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="673.0" y="353.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 sur 3 lignes rendues</text>
  <text x="946.0" y="354" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="617.0" y="380" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse</text>
  <text x="619.0" y="400" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Lignes : 3</text>
  <text x="619.0" y="415" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Ouverte : 98</text>
  <text x="619.0" y="430" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Close : 3314</text>
  <text x="619.0" y="445" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Annulée : 12</text>
  <text x="240" y="474" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES DE TEST</text>
  <text x="240" y="496" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">company</text>
  <rect x="300" y="482" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="496.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="432" y="482" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="485.5" y="496.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Tester le rendu</text>
  <line x1="221" y1="514" x2="979" y2="514" stroke="#1f2937" strokeWidth="1"/>
  <rect x="870" y="524" width="90" height="22" rx="5" fill="url(#rpt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.0" y="538.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="800" y="524" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="831.0" y="538.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiant</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'adresse du rapport</text>
  <line x1="200" y1="97.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Données</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une requête d'un connecteur</text>
  <line x1="200" y1="157.0" x2="240" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="20" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres</text>
  <text x="30" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">demandés à l'exécution</text>
  <line x1="200" y1="245.0" x2="250" y2="237" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Markdown Jinja</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ctx.data.rows, ctx.params</text>
  <line x1="200" y1="397.0" x2="250" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèles de départ</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exemples, ou tableau des colonnes</text>
  <line x1="1000" y1="307.0" x2="864.2" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="1000" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aperçu</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le rendu sur les vraies lignes</text>
  <line x1="1000" y1="397.0" x2="960.0" y2="394" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="1000" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tester le rendu</text>
  <text x="1010" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">200 lignes au plus, rien d'enregistré</text>
  <line x1="1000" y1="487.0" x2="539.6800000000001" y2="493" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
</svg>

---

## La liste \{#list\}

La page indique le fichier où les modèles sont enregistrés et leur nombre, puis une carte par modèle : son titre, son identifiant (`custom:<slug>`) et la requête qu'il lit (`<connecteur>.<requête>`), avec **Modifier** et **Supprimer** — une suppression demande confirmation. **Nouveau modèle** et **Recharger la config** se trouvent dans l'en-tête de la page.

L'enregistrement valide chaque modèle, les écrit et met aussitôt à jour la liste des rapports : aucun redémarrage n'est nécessaire.

---

## L'éditeur \{#editor\}

**Nouveau modèle**, ou **Modifier** sur une carte, ouvre la fenêtre *Nouveau rapport personnalisé* / *Modifier le rapport personnalisé*.

| Champ | Usage |
|---|---|
| **Identifiant (segment URL)** | L'identifiant du rapport, qui entre dans son adresse : minuscules, chiffres, `-` et `_`. Unique parmi les modèles. |
| **Titre** | Le titre sur la page Rapports et sur la page de garde du PDF. |
| **Connecteur**, **Requête nommée** | La source des lignes : une requête d'un connecteur. Les deux sont obligatoires. |
| **Description** | Affichée sous le titre sur la page Rapports. |
| **Paramètres** | Une ligne par donnée nécessaire à l'exécution : un nom, un libellé, un type (`string`, `int`, `float`, `bool`) et **requis**. **Ajouter un paramètre** en ajoute un. La requête reçoit les paramètres sous leur nom. |
| **Modèle Jinja markdown** | Le corps du rapport, en markdown avec des balises Jinja. |

### Écrire le modèle \{#template\}

Le modèle lit un contexte, `ctx` :

| Nom | Contenu |
|---|---|
| `ctx.data.rows` | Les lignes de la requête, chacune un ensemble de colonnes : `{{ row.STATUS }}`. |
| `ctx.data.columns` | Les colonnes de la requête, avec leur nom et leur libellé. |
| `ctx.params` | Les valeurs saisies par l'utilisateur pour les paramètres. |

Les filtres Jinja usuels sont disponibles (`length`, `join`, `sort`, `selectattr`…). Le modèle s'exécute dans un environnement fermé : rien n'est accessible hors de ce contexte. L'éditeur complète les noms de colonnes de la requête au fil de la saisie.

Au-dessus de l'éditeur, **Insérer un exemple** propose quatre points de départ — **Liste à puces**, **Tableau markdown**, **Sections groupées**, **Résumé + tableau** —, chacun remplaçant le corps après confirmation. **Échafauder depuis la requête** écrit un tableau markdown de toutes les colonnes renvoyées par la requête ; il attend un connecteur et une requête.

### Tester le rendu \{#test\}

Sous l'éditeur, **Paramètres de test** reçoit une valeur par paramètre, et **Tester le rendu** exécute la requête avec ces valeurs puis affiche le rendu du modèle à côté de l'éditeur — sur 200 lignes au plus, sans rien enregistrer. L'en-tête de l'aperçu indique le nombre de lignes rendues (*3 sur 3 lignes rendues*) ou l'échec du rendu, avec son motif. Si la requête renvoie davantage de lignes, l'aperçu le signale ; le rapport réel les contient toutes.

---

## Exécuter un rapport \{#run\}

La page **Rapports** liste les rapports que l'utilisateur peut exécuter, y compris ceux des opérateurs. **Exécuter** ouvre un formulaire avec les paramètres et le format (PDF ou markdown) ; **Exécuter et télécharger** produit le fichier. Le PDF suit la charte de l'installation — [Liberty Next → Administrer → App → Charte des PDF](./build/settings-app.md#branding).

---

## Accès \{#access\}

- Écrire les modèles : les superutilisateurs, dans Liberty Next → Analyse → Modèles de rapport.
- Les exécuter : un rôle qui détient `reports:custom:*:run` voit tous les rapports écrits par les opérateurs sur la page Rapports — la permission se saisit sous forme de motif dans l'éditeur de rôles, voir [Rôles et permissions](./build/secure/roles-and-permissions.md).
- La requête s'exécute dans le périmètre de données de l'utilisateur, comme partout ailleurs.

---

## Conseils & bonnes pratiques \{#tips\}

- Écrire une requête par rapport, qui renvoie exactement les colonnes imprimées ; laisser la requête trier et totaliser.
- Partir d'**Échafauder depuis la requête** ou d'un exemple, puis **Tester le rendu** avec des paramètres réalistes avant d'enregistrer.
- Confier chaque valeur variable à un paramètre plutôt qu'à une constante de la requête : le même modèle sert alors chaque société ou chaque période.
