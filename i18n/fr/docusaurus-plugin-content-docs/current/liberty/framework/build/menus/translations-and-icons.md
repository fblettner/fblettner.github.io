---
title: Traductions et icônes
description: "Les libellés de menu par langue avec la table l (l.fr, l.de…), le choix de la langue, et les noms d'icônes que le menu latéral de Liberty Next sait afficher."
keywords: [Liberty Next, menus, traduction, l.fr, langue, X-Liberty-Lang, Accept-Language, icône, menu latéral]
---

# Traductions et icônes

Deux champs de chaque entrée de menu façonnent ce que l'utilisateur lit dans le menu latéral : `l`, le libellé par langue, et `icon`.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mtr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mtr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mtr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mtr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="300" rx="14" fill="url(#mtr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Inspecteur · security</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="89" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">label</text>
  <rect x="320" y="74" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="88.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Security</text>
  <text x="240" y="128" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Translations</text>
  <rect x="240" y="138" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="152.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">fr ▾</text>
  <rect x="310" y="138" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="320" y="152.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sécurité</text>
  <rect x="240" y="168" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="182.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">de ▾</text>
  <rect x="310" y="168" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="320" y="182.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sicherheit</text>
  <rect x="240" y="200" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="276.0" y="214.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <text x="600" y="92" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">icon</text>
  <rect x="600" y="104" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="118.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">activity</text>
  <rect x="688" y="104" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="118.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">alert</text>
  <rect x="776" y="104" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="118.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">barchart</text>
  <rect x="864" y="104" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="118.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">bell</text>
  <rect x="600" y="134" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">briefcase</text>
  <rect x="688" y="134" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">building</text>
  <rect x="776" y="134" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">calendar</text>
  <rect x="864" y="134" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">clock</text>
  <rect x="600" y="164" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="178.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">database</text>
  <rect x="688" y="164" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="178.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">file</text>
  <rect x="776" y="164" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="178.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">filter</text>
  <rect x="864" y="164" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="178.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">folder</text>
  <rect x="600" y="194" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="208.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">globe</text>
  <rect x="688" y="194" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="208.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">grid</text>
  <rect x="776" y="194" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="208.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">key</text>
  <rect x="864" y="194" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="208.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">layers</text>
  <rect x="600" y="224" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">link</text>
  <rect x="688" y="224" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">lock</text>
  <rect x="776" y="224" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">mail</text>
  <rect x="864" y="224" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">network</text>
  <rect x="600" y="254" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="268.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">package</text>
  <rect x="688" y="254" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="268.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">search</text>
  <rect x="776" y="254" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.0" y="268.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">settings</text>
  <rect x="864" y="254" width="82" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="905.0" y="268.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shield</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellé par défaut</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans traduction adaptée</text>
  <line x1="210" y1="91.0" x2="240" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mtr-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par langue</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fr, de, es, it…</text>
  <line x1="210" y1="177.0" x2="240" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mtr-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Noms d'icônes</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le jeu du menu latéral</text>
  <line x1="1000" y1="267.0" x2="946" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mtr-arrow)"/>
</svg>

---

## Traductions — la table `l` \{#translations\}

`label` est le libellé par défaut ; `l` ajoute un libellé par langue :

```toml
[[menus.crm.items]]
id = "security"
label = "Security"
l = { fr = "Sécurité", de = "Sicherheit" }
icon = "shield"
```

Dans l'Inspecteur, le groupe **Translations** liste une ligne par langue ; les langues proposées sont `en`, `fr`, `de`, `es`, `it`, `pt`, `nl`, `pl`, `ja`, `zh`, `ar`. Une ligne vide est supprimée à l'enregistrement.

### Quelle langue \{#language\}

Pour chaque requête, la langue est, dans l'ordre :

1. l'en-tête `X-Liberty-Lang` — l'application web envoie la langue choisie dans son interface ;
2. sinon la première langue de l'`Accept-Language` du navigateur, sans sa région (`fr-CA` → `fr`) ;
3. sinon la langue par défaut de **Liberty Next → Administrer → App**.

Quand `l` n'a pas d'entrée pour cette langue, `label` est utilisé. Écrire les codes en minuscules (`fr`, pas `FR`).

Traduire aussi les dossiers : leur libellé est ce que l'utilisateur voit en premier. Les titres d'écrans et libellés de colonnes se traduisent dans le dictionnaire et les écrans, pas ici — voir [Dictionnaire](../../dictionary.md).

---

## Icônes \{#icons\}

`icon` désigne l'une des icônes que le menu latéral sait dessiner. Les noms se comparent sans tenir compte de la casse ni de la ponctuation (`Shield`, `shield`, `trending-up` fonctionnent tous) :

| Nom | | Nom | | Nom |
|---|---|---|---|---|
| `activity` | | `filter` | | `package` |
| `alert` | | `folder` | | `search` |
| `barchart` | | `globe` | | `settings` |
| `bell` | | `grid` | | `shield` |
| `briefcase` | | `key` | | `table` |
| `building` | | `layers` | | `tag` |
| `calendar` | | `link` | | `trendingup` |
| `clock` | | `lock` | | `user` |
| `database` | | `mail` | | `usercheck` |
| `file` / `filetext` | | `network` | | `users` |

Tout autre nom n'affiche aucune icône, sans erreur. La liste d'icônes de l'Inspecteur propose exactement ces noms.

Choix courants : `shield` pour la sécurité, `users` / `user` pour les personnes, `key` pour les rôles, `database` / `table` pour les données, `barchart` / `trendingup` pour les rapports, `settings` pour l'administration, `folder` pour les dossiers simples.
