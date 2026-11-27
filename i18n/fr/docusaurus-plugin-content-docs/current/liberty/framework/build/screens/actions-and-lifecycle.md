---
title: Actions et cycle de vie
description: "L'onglet Actions — hooks de dialogue (on_load / on_save / on_cancel), boutons de barre d'outils, hooks de ligne (on_insert / on_update / on_delete / on_duplicate), menu de ligne, types d'actions et leurs param_binds, saisies préalables, chaînes, traductions et services."
keywords: [Liberty Next, actions, on_load, on_save, on_cancel, on_insert, on_update, on_delete, on_duplicate, run_query, call_api, call_plugin, call_action, navigate, chain, param_binds, prompt_fields]
---

# Actions et cycle de vie

Un écran doté d'une grille et d'un dialogue couvre le circuit standard de lecture et d'écriture. Les **actions** et les **hooks** ajoutent tout le reste : exécuter une requête depuis un bouton, ouvrir une autre vue depuis une ligne, appeler une API ou un plugin après un enregistrement, rafraîchir la grille après une suppression.

Ils se règlent à l'étape **Actions** du [Concepteur d'écran](./overview.md#designer), dans ses deux sections **Actions** et **Menu de ligne**, avec partout la même forme d'action. **Actions** présente les hooks et les boutons de barre d'outils en groupes repliés, chacun avec son nombre ; un groupe s'ouvre sur ses actions, une par ligne (identifiant, type, libellé, nombre d'étapes), avec **Ajouter une action** dessous. **Menu de ligne** liste de la même façon les entrées du menu contextuel de la ligne.

---

## Moments de déclenchement \{#groups\}

<svg viewBox="0 0 1320 632" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="acl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="acl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="acl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="acl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="596" rx="14" fill="url(#acl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran ·</text>
  <text x="367.648" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1011" y="32" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="981" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="993.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <rect x="238" y="146" width="148" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="239" y="147" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.5" y="160.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actions</text>
  <line x1="297" y1="151" x2="297" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="341.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Menu de ligne</text>
  <text x="238" y="192" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Hooks du dialogue — déclenchés quand le formulaire est ouvert (on_load / on_save / on_cancel)</text>
  <rect x="238" y="200" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="216.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="216.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À l'ouverture (chaîne d'actions)</text>
  <text x="1070" y="216.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="231" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="247.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="247.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À la sauvegarde (chaîne d'actions)</text>
  <text x="1070" y="247.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="238" y="262" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="278.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="278.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À l'annulation (chaîne d'actions)</text>
  <text x="1070" y="278.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="238" y="309" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Barre d'outils — boutons au-dessus du tableau (s'exécutent indépendamment, sans contexte de ligne)</text>
  <rect x="238" y="317" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="333.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="264" y="333.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de l'écran</text>
  <text x="1070" y="333.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="250" y="346" width="820" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="367" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="278" y="361" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">export_selection</text>
  <text x="373.296" y="361" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">run_query · Exporter la sélection</text>
  <text x="278" y="374" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">1 étape</text>
  <text x="1060" y="367" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <rect x="250" y="386" width="118" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="309.0" y="400.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une action</text>
  <text x="238" y="432" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Hooks de ligne — déclenchés après l'insertion / mise à jour / suppression d'une ligne</text>
  <rect x="238" y="440" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="456.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="456.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À l'insertion (hook de ligne)</text>
  <text x="1070" y="456.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="471" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="487.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="487.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À la mise à jour (hook de ligne)</text>
  <text x="1070" y="487.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="502" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="518.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="518.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À la suppression (hook de ligne)</text>
  <text x="1070" y="518.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="533" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="549.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="549.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">À la duplication (hook de ligne)</text>
  <text x="1070" y="549.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="220" y1="574" x2="1100" y2="574" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="584" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1036.0" y="598.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="584" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="598.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux sections</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Actions · Menu de ligne</text>
  <line x1="200" y1="157.0" x2="238" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="20" y="227" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="242" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hooks du dialogue</text>
  <text x="30" y="255" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouverture · sauvegarde · annulation</text>
  <line x1="200" y1="244.0" x2="238" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="20" y="313" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="328" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la barre</text>
  <text x="30" y="341" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans contexte de ligne</text>
  <line x1="200" y1="330.0" x2="238" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="20" y="467" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="482" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hooks de ligne</text>
  <text x="30" y="495" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">après une écriture, grille ou dialogue</text>
  <line x1="200" y1="484.0" x2="238" y2="484" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1120" y="227" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="242" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nombre par liste</text>
  <text x="1130" y="255" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre la liste</text>
  <line x1="1120" y1="244.0" x2="1074" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1120" y="346" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="361" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une action par ligne</text>
  <text x="1130" y="374" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">id · type · libellé ; › pour modifier</text>
  <line x1="1120" y1="363.0" x2="1064" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1120" y="529" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="544" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À la duplication</text>
  <text x="1130" y="557" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à la place de l'insertion</text>
  <line x1="1120" y1="546.0" x2="1074" y2="546" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
</svg>

| Groupe | Listes | Déclenchement | `source` lit dans |
|---|---|---|---|
| **Hooks de dialogue** | `on_load` | Une fois la ligne chargée (modification) ou les valeurs par défaut posées (ajout) — et de nouveau quand **Dupliquer** fait de l'enregistrement un nouvel enregistrement. | Le formulaire ; sur un enregistrement existant, ses valeurs dès le départ. |
| | `on_save` | Après le succès de l'insertion ou de la mise à jour principale du dialogue. | Le formulaire au moment de l'enregistrement. |
| | `on_cancel` | À la fermeture du dialogue sans enregistrement, avant sa fermeture ; une erreur le maintient ouvert. | Le formulaire. |
| **Barre d'outils** | `actions` | Chaque entrée est un bouton au-dessus de la grille. | Aucune ligne ; valeurs saisies dans `INPUT.<nom>`. |
| **Hooks de ligne** | `on_insert`, `on_update`, `on_delete` | Après le succès de l'écriture — depuis le dialogue ou la saisie en grille. | La ligne créée, ou la ligne supprimée. |
| | `on_duplicate` | À l'enregistrement d'une ligne dupliquée par le bouton **Dupliquer** du dialogue, à la place de `on_insert`. | La nouvelle ligne, et la ligne d'origine sous `SOURCE_<colonne>`. |
| **Menu de ligne** *(section dédiée)* | `row_menu` | Chaque entrée est un élément du menu d'une ligne : clic droit, ou poignée ⋯ en début de ligne. | La ligne cliquée. |

**`on_load` et Dupliquer.** *Dupliquer* transforme l'enregistrement en un nouvel enregistrement dans la même fiche : les actions d'ouverture s'exécutent de nouveau pour la copie, comme pour une fiche ouverte en ajout. Une valeur qu'elles obtiennent pour un nouvel enregistrement (un identifiant demandé à un autre système) est donc obtenue de nouveau pour la copie, au lieu de rester vide. Sur un enregistrement existant, les actions voient ses valeurs dès leur exécution : une action qui teste si un champ est vide répond *non* sur un enregistrement en modification et ne remplace pas sa clé.

Un hook exécute sa liste dans l'ordre et s'arrête à la première erreur, sauf si une action a **stop_on_error** désactivé. Une entrée de barre d'outils ou de menu de ligne correspond à une seule action : pour enchaîner plusieurs étapes depuis un même bouton, passer par une `chain`.

Pour un clic simple sur une ligne, utiliser les réglages de **clic sur une ligne** de l'étape *Ce qu'il est* (`row_click_screen` avec `row_click_binds`, ou `row_click_route`).

---

## Types d'actions \{#types\}

Chaque action porte un **id** (unique dans sa liste, et clé dans le contexte d'une chaîne), un **label** (texte du bouton), son libellé dans les autres langues ([Translations](#translations)) et **stop_on_error**.

| Type | Rôle | Champs principaux |
|---|---|---|
| **`run_query`** | Exécute une requête d'un connecteur, en lecture ou en écriture. | `connector`, `query`, `param_binds`, `bind_result` |
| **`call_api`** | Appelle un endpoint d'un connecteur API. | `connector`, `endpoint`, `param_binds`, `bind_result` |
| **`call_plugin`** | Appelle une fonction Python côté serveur (`module:fonction`), les mêmes points d'entrée que les étapes Nomaflow. | `callable`, `param_binds`, `bind_result` |
| **`call_action`** | Exécute un [service](#shared) par son identifiant. | `ref`, `param_binds` |
| **`navigate`** | Ouvre une autre vue : un écran (`screen`) ou une requête (`to`), les `param_binds` lui étant transmis comme paramètres. | `connector`, `screen` ou `to`, `param_binds` |
| **`open_url`** | Ouvre une adresse externe — une autre application sur la fiche de la ligne. | `url`, `new_tab` |
| **`set_field`** | Écrit une valeur dans un champ du formulaire. | `target`, `value` ou `source` |
| **`confirm`** | Demande une confirmation ; **Annuler** arrête la chaîne. Le message se remplit comme un modèle `open_url` (`{COLONNE}`, `{INPUT.x}`, sources intégrées), sans encodage : `Reset the password of {INPUT.user} on #POOL#?`. | `message`, `confirm_label`, `cancel_label` |
| **`notify`** | Affiche un message, rempli de la même façon. | `message`, `tone` (`info` / `ok` / `warn` / `error`) |
| **`send_notification`** | Déclenche une règle de notification de type *action* (e-mail, cloche…). | `rule`, `param_binds` |
| **`refresh`** | Recharge la grille. | — |

`bind_result` conserve les lignes (ou la réponse) de l'étape dans le contexte de la chaîne : une étape suivante les lit avec `source = "<id>.first_row.<COLONNE>"`.

### Ouvrir une adresse externe \{#open-url\}

Une action **`open_url`** ouvre une autre application sur la fiche en cours — le formulaire JD Edwards d'une fiche du carnet d'adresses, un ticket du support. Elle peut figurer dans un menu de ligne, dans la barre d'outils, dans un onglet de dialogue, derrière une colonne de navigation ou dans une chaîne, et demander d'abord des valeurs.

- **`url`** est un modèle : `{COLONNE}` reprend la valeur d'une colonne de la ligne, d'un champ du formulaire, d'une valeur demandée ou d'une étape de la chaîne — `{step.first_row.X}` —, encodée pour une adresse ; `#LOGIN_USER#` et les autres variables intégrées sont remplies aussi. `https://helpdesk.example.com/tickets?customer={CUSTOMER_ID}`.
- Une adresse qui change d'une installation à l'autre s'écrit `#URL.NOM#` en tête : `#URL.JDE_WEB#/ShortcutLauncher?OID=P01012_W01012A&…`. Chaque installation fixe l'adresse une fois, dans [App → Adresses externes](../settings-app.md#external-urls) ; sans elle, l'action n'ouvre rien.
- **`new_tab`** : activé par défaut ; désactivé, l'adresse remplace la page.

Seules les adresses `http://`, `https://` et les chemins de ce serveur s'ouvrent ; tout le reste est refusé au chargement de la configuration, puis contrôlé de nouveau sur l'adresse remplie. Un menu de ligne dont la seule action est un `open_url` la déclenche depuis la poignée de ligne.

### La poignée de ligne et la navigation \{#drill\}

Un écran doté d'actions de menu de ligne affiche une petite poignée au début de chaque ligne, pour garder les actions à portée de main sur un tableau large :

- avec plusieurs actions, la poignée (**⋯**, *Actions de la ligne*) ouvre le même menu que le clic droit ;
- avec une seule action `navigate`, la poignée (une flèche de retour) la déclenche aussitôt — son infobulle reprend le libellé de l'action.

**Cellules en lien.** Le réglage **drill** d'une colonne (Liberty Next → Écrans → Écrans, étape *Grille*, colonne, onglet *Display*) désigne une action `navigate` du menu de ligne : la valeur s'affiche comme un lien qui la déclenche pour la ligne — le code client ouvre le client, sans menu à ouvrir. Un écran dont le menu de ligne ne compte qu'une action `navigate` le fait de lui-même sur sa première colonne clé. Un nom d'action inconnu est refusé au chargement de la configuration.

**Où s'ouvre la cible.** Par défaut, une action `navigate` ouvre sa cible dans un nouvel onglet. Avec **Les navigations s'ouvrent dans l'onglet courant** dans [Liberty Next → Administrer → App](../settings-app.md#display), elle s'ouvre en panneau dans l'onglet courant, par-dessus la grille : un fil d'Ariane nomme chaque niveau, **Retour** revient au précédent, et la grille d'origine conserve ses lignes et ses filtres. Une navigation depuis le panneau s'imbrique de la même façon. Une action peut en décider elle-même avec `inline = true` (panneau) ou `inline = false` (nouvel onglet), dans `screens.toml`.

### Types composites

| Type | Rôle |
|---|---|
| **`chain`** | Une liste d'étapes exécutées dans l'ordre, avec un contexte commun. |
| **`if`** | Exécute `then_steps` ou `else_steps` selon une condition : une `source`, un opérateur (`equals`, `not_equals`, `has_rows`, `no_rows`, `truthy`, `falsy`, `greater_than`, `less_than`) et une `value`. |
| **`loop`** | Exécute `steps` pour chaque élément d'une liste tirée du contexte (en général les lignes d'une étape précédente). |
| **`return`** | Recopie des valeurs du contexte dans les champs du formulaire — en fin de chaîne, pour afficher des valeurs calculées. |

**Wrap in chain** place une action existante dans une `chain`, pour ajouter des étapes autour.

---

## Valeurs transmises à une action \{#binds\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` et `send_notification` reçoivent une liste de `param_binds` : pour chaque paramètre de la cible, une **value** fixe, ou une **source** lue au moment de l'appel — colonne de la ligne, champ du formulaire, `INPUT.<nom>`, `<étape>.first_row.<COLONNE>`, ou une source intégrée comme `#LOGIN_USER#` / `#SYSDATE#` — avec une valeur **default** facultative. Voir [Liaison de paramètres](../queries/parameter-binding.md).

Dans l'éditeur d'action, la liste s'intitule **Valeurs passées**. Chaque ligne nomme le paramètre, puis **Fixe** — une valeur écrite là — ou **Prise dans** — choisie parmi les colonnes de l'enregistrement, ce que le service a reçu, ce qu'une étape précédente a renvoyé, ou l'utilisateur connecté / la date du jour —, avec **une valeur à utiliser quand celle-ci est vide**. Sans aucune ligne : *Rien n'est passé : l'exécution se fait sans aucune valeur.*

### Saisie préalable \{#prompt\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` et `chain` peuvent ouvrir un petit formulaire **avant** de s'exécuter :

| Champ | Rôle |
|---|---|
| **prompt_fields** | Les valeurs à demander — chacune avec son nom, son libellé, son entrée du dictionnaire, sa valeur par défaut, ses indicateurs obligatoire / masqué / lecture seule et ses conditions. |
| **prompt_title** (et ses traductions) | Le titre de la fenêtre ; à défaut, le libellé de l'action. |
| **prompt_cols** | Le nombre de colonnes du formulaire (2 par défaut). |

Les valeurs saisies sont disponibles sous `INPUT.<nom>` pour l'action et pour toutes les étapes suivantes de la même chaîne. **Annuler** arrête la chaîne sans erreur.

### Le libellé dans les autres langues \{#translations\}

L'éditeur d'une action présente trois onglets sous sa cible : **General** (identifiant, libellé, arrêt en cas d'erreur), **Translations** et **Prompt**. **Translations** donne le libellé dans chacune des autres langues : une langue choisie dans la liste (`fr Français`), puis son texte ; **+ ajouter** pour une autre langue. L'utilisateur lit le libellé dans sa langue partout où l'action apparaît : entrée du menu de ligne, bouton de barre d'outils ou d'onglet, étape d'une chaîne. Sans ligne pour une langue, le libellé tel qu'écrit est affiché.

<svg viewBox="0 0 1200 483" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aclt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aclt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aclt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aclt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="445" rx="14" fill="url(#aclt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menu contextuel de ligne</text>
  <rect x="936" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="948.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="220" y1="64" x2="980" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="86" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">Menu contextuel de ligne</text>
  <text x="381.91999999999996" y="86" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">›  Show orders</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="240" y="117" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="131.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="131.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">navigate</text>
  <text x="948" y="131.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="156" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE DE CIBLE</text>
  <rect x="240" y="161" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="175.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="175.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Écran</text>
  <text x="948" y="175.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="200" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉCRAN</text>
  <rect x="240" y="205" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="219.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="219.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">orders</text>
  <text x="285.992" y="219.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="948" y="219.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="240" width="57" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="268.5" y="254.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="303" y="240" width="82" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="344.0" y="254.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <rect x="391" y="240" width="52" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="254.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Prompt</text>
  <line x1="240" y1="270" x2="960" y2="270" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="290" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TRANSLATIONS</text>
  <rect x="240" y="295" width="259" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="309.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="309.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="264.664" y="309.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Français</text>
  <text x="487" y="309.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="505" y="295" width="427" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="515" y="309.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Afficher les commandes</text>
  <rect x="938" y="295" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="949.0" y="309.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="324" width="59" height="17" rx="4" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="249" y="336" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <text x="240" y="353" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The label per language (a row-menu entry, a button).</text>
  <text x="240" y="379" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Valeurs passées</text>
  <rect x="240" y="389" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="403.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <rect x="448" y="389" width="140" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472.0" y="403.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Fixe</text>
  <rect x="497" y="390" width="90" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="542.0" y="403.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Prise dans</text>
  <rect x="596" y="389" width="364" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="403.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <line x1="220" y1="423" x2="980" y2="423" stroke="#1f2937" strokeWidth="1"/>
  <rect x="906" y="433" width="54" height="22" rx="5" fill="url(#aclt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="933.0" y="447.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'action elle-même</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type et cible</text>
  <line x1="200" y1="127.0" x2="240" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Translations</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à côté de General et Prompt</text>
  <line x1="200" y1="253.0" x2="307" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="20" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <text x="30" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par langue</text>
  <line x1="200" y1="309.0" x2="240" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="1000" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le libellé dans cette langue</text>
  <text x="1010" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menu de ligne, bouton, étape</text>
  <line x1="1000" y1="309.0" x2="800" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="1000" y="375" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="390" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En dessous : valeurs passées</text>
  <text x="1010" y="403" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comme sur l'onglet General</text>
  <line x1="1000" y1="392.0" x2="920" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
</svg>

---

## Services \{#shared\}

Une action utilisée par plusieurs écrans se définit une seule fois sous forme de **service**, dans **Liberty Next → Logique → Services** : un identifiant, un libellé, une description, des entrées déclarées et ses étapes (les mêmes types d'actions), dessinées en flux dans le concepteur de service — voir [Services](../services.md).

Un écran l'exécute avec `call_action` : `ref` désigne le service (le champ s'intitule *Action partagée*), et ses `param_binds` alimentent les valeurs `INPUT.<param>` du service.

---

## Exemples

### Recalculer, puis recharger la grille

```toml
[[screens.crm.customers.actions]]
type  = "chain"
id    = "recompute"
label = "Recalculer les soldes"
steps = [
  { type = "run_query", id = "compute", connector = "crm", query = "compute_balances" },
  { type = "refresh",   id = "reload" },
  { type = "notify",    id = "done", message = "Soldes recalculés.", tone = "ok" },
]
```

### Confirmer avant de supprimer

```toml
[[screens.crm.customers.row_menu]]
type  = "chain"
id    = "delete_customer"
label = "Supprimer le client"
steps = [
  { type = "confirm", id = "ask", message = "Supprimer ce client et ses affaires ?", confirm_label = "Supprimer" },
  { type = "run_query", id = "delete", connector = "crm", query = "customers_delete",
    param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }] },
  { type = "refresh", id = "reload" },
]
```

**Annuler** sur la confirmation arrête la chaîne : rien n'est supprimé.

### Ouvrir les affaires d'un client

```toml
[[screens.crm.customers.row_menu]]
type        = "navigate"
id          = "view_deals"
label       = "Voir les affaires"
connector   = "crm"
screen      = "deals"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

L'écran **deals** s'ouvre avec ses filtres alimentés par les liaisons.

### Renseigner les colonnes d'audit

Pour des colonnes `CREATED_BY` / `CREATED_AT`, aucun hook n'est nécessaire : les règles `LOGIN` et `SYSDATE` du dictionnaire, ou les jetons `{{LOGIN}}` / `{{SYSTIMESTAMP}}` dans la requête d'insertion, les renseignent côté serveur — voir [Dictionnaire → Règles](../../dictionary.md#rules). Pour historiser chaque écriture dans une table, renseigner `audit_table` à l'étape *Ce qu'il est*.

---

## Enregistrement

Les sections Actions et Menu de ligne modifient les listes de l'écran ; **Enregistrer** dans le Concepteur d'écran les écrit avec le reste de l'écran et recharge la configuration — le clic suivant exécute la nouvelle version.

---

## Erreurs fréquentes

| Erreur | Conséquence | Correction |
|---|---|---|
| Deux entrées de barre d'outils censées s'enchaîner. | Ce sont deux boutons distincts. | Regrouper les étapes dans une seule `chain`. |
| Une action de barre d'outils avec `source = "CUSTOMER_ID"`. | La barre d'outils n'a pas de ligne : la valeur est vide. | Déplacer l'action dans le menu de ligne, ou demander la valeur par une saisie préalable (`INPUT.CUSTOMER_ID`). |
| `confirm` placé après la suppression. | La question arrive une fois la ligne supprimée. | `confirm` en premier dans la chaîne. |
| Une étape lit `<id>.first_row.X` d'une étape sans `bind_result`. | La valeur est vide. | Activer `bind_result` sur l'étape qui produit les lignes. |
| `value = "#LOGIN_USER#"`. | Le texte est écrit tel quel. | Passer par `source`. |

---

## Pour aller plus loin

- [Onglets imbriqués](./nested-tabs.md) — intégrer le formulaire ou la grille d'un autre écran dans un onglet de dialogue.
- [Liaison de paramètres](../queries/parameter-binding.md) — `param_binds`, sources intégrées et jetons.
- [Notifications](../../../nomaflow/notifications.md) — les règles déclenchées par `send_notification`.
