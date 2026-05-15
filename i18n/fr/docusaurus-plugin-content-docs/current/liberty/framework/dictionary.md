---
title: Dictionnaire
description: "Le dictionnaire regroupe les métadonnées d'affichage par colonne : libellés, formats et règles BOOLEAN / ENUM / LOOKUP. Une fois une colonne décrite, tous les écrans qui la retournent en héritent — grille typée, libellés localisés, listes déroulantes câblées automatiquement."
keywords: [Liberty Next, dictionnaire, entrées, enums, lookups, libellé, format, règle, BOOLEAN, ENUM, LOOKUP, i18n, EN, FR]
---

# Dictionnaire

Le dictionnaire est le **catalogue partagé des métadonnées par colonne**. Un seul fichier (`config/dictionary.toml`) en contient trois types :

- les **entrées** — métadonnées par colonne : libellé, format, règle, traductions par langue ;
- les **enums** — énumérations nommées avec libellés traduisibles ;
- les **lookups** — pointeurs vers une requête qui résout un `code → libellé`.

Quand une requête déclare une colonne avec une indication `dd`, le connecteur SQL résout son libellé, son format et sa règle au moment où il renvoie le résultat, dans la langue de la requête. La grille React affiche directement le libellé localisé, ✓ / ✗ pour les booléens, le libellé de l'énumération, ou — via `services/lookups.useLookupBatch` — le libellé du lookup après un seul fetch par session.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="280" height="380" rx="14" fill="url(#dc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 dictionary.toml</text>

  <rect x="56" y="84" width="248" height="80" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="104" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[entries.USER_STATUS]</text>
  <text x="68" y="120" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Status"</text>
  <text x="68" y="134" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">format = "string"</text>
  <text x="68" y="150" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">rules = "ENUM"</text>

  <rect x="56" y="172" width="248" height="110" rx="8" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.35)" strokeWidth="1"/>
  <text x="68" y="192" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[enums.USER_STATUS]</text>
  <text x="68" y="208" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">values = [</text>
  <text x="80" y="224" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`{ value = "Y", label = "Active",`}</text>
  <text x="92" y="238" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`  l = { fr = "Actif" } },`}</text>
  <text x="80" y="252" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`{ value = "N", label = "Inactive",`}</text>
  <text x="92" y="266" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`  l = { fr = "Inactif" } },`}</text>
  <text x="68" y="278" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">]</text>

  <rect x="56" y="290" width="248" height="120" rx="8" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.30)" strokeWidth="1"/>
  <text x="68" y="310" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[lookups.CITY]</text>
  <text x="68" y="326" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">connector = "myapp"</text>
  <text x="68" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">query = "cities_get"</text>
  <text x="68" y="354" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">value = "ID"</text>
  <text x="68" y="368" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "NAME"</text>
  <text x="68" y="382" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">group = "REGION"</text>

  <line x1="320" y1="220" x2="420" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>

  <rect x="420" y="40" width="280" height="380" rx="14" fill="url(#dc-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="440" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ resolve_rule()</text>

  <rect x="436" y="84" width="248" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="104" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BOOLEAN</text>
  <text x="448" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{`{ kind: "boolean", true_value: "Y" }`}</text>
  <text x="448" y="136" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">la cellule affiche ✓ ou ✗</text>

  <rect x="436" y="152" width="248" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="172" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">ENUM</text>
  <text x="448" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{`{ kind: "enum", values: [...] }`}</text>
  <text x="448" y="204" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">la cellule affiche le libellé localisé</text>

  <rect x="436" y="220" width="248" height="80" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="240" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">LOOKUP</text>
  <text x="448" y="256" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{`{ kind: "lookup", connector,`}</text>
  <text x="448" y="270" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{` query, value, label }`}</text>
  <text x="448" y="286" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">la grille pré-charge une fois par session</text>

  <rect x="436" y="308" width="248" height="100" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="448" y="328" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">règles côté formulaire</text>
  <text x="448" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">SEQUENCE</text>
  <text x="448" y="358" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">SYSDATE / CURRENT_DATE</text>
  <text x="448" y="372" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">LOGIN · PASSWORD</text>
  <text x="448" y="392" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">appliquées par le formulaire à l'ouverture</text>

  <line x1="700" y1="220" x2="800" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>

  <rect x="800" y="40" width="160" height="380" rx="14" fill="url(#dc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="820" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">REACT</text>

  <rect x="816" y="84" width="128" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="102" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Cellule de grille</text>
  <text x="824" y="118" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">code — libellé</text>

  <rect x="816" y="142" width="128" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="160" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre de colonne</text>
  <text x="824" y="176" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">multi-sélection</text>

  <rect x="816" y="200" width="128" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="218" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Widget de formulaire</text>
  <text x="824" y="234" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">SearchSelect</text>

  <rect x="816" y="258" width="128" height="50" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="824" y="276" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">i18n</text>
  <text x="824" y="292" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">X-Liberty-Lang</text>

  <text x="824" y="332" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Chaque requête</text>
  <text x="824" y="348" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">transporte la langue</text>
  <text x="824" y="364" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">i18n active —</text>
  <text x="824" y="380" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">les libellés reviennent</text>
  <text x="824" y="396" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">déjà localisés.</text>
</svg>

---

## Entrées

Métadonnées par colonne. Chaque entrée fixe :

| Champ | Description |
|---|---|
| `label` | Libellé anglais par défaut. |
| `l` | Libellés par langue (`{ fr = "...", de = "..." }`). |
| `format` | Format interprété par l'interface : `date`, `datetime`, `amount`, `percent`, `string`, `number`, `boolean`, …. |
| `rules` | Règle d'affichage : `BOOLEAN`, `ENUM`, `LOOKUP` — ou une règle côté formulaire (voir plus bas). |
| `rules_values` / `default` | Configuration optionnelle propre à la règle (par exemple `true_value` pour un booléen, valeur par défaut sur la création d'une ligne). |

```toml
[entries.USER_STATUS]
label   = "Status"
format  = "string"
rules   = "ENUM"

[entries.USER_STATUS.l]
fr = "Statut"
de = "Status"
```

Une entrée peut être déclarée au niveau global (partagée par tous les connecteurs) ou sous `[connectors.<conn>.entries.<clé>]` (spécifique à un connecteur — utile quand le même nom de colonne porte un sens différent selon la source). La résolution teste d'abord la version par connecteur, puis se rabat sur la version globale.

Une indication `dd = "USER_STATUS"` sur la colonne de la requête applique l'entrée à cette colonne. `dd = ""` désactive — la colonne reste sans libellé localisé. Un `label` indiqué directement sur la colonne surcharge celui du dictionnaire.

---

## Enums

Une table statique `code → libellé` avec traductions.

```toml
[enums.USER_STATUS]
label = "User status"
values = [
  { value = "Y", label = "Active",   l = { fr = "Actif" } },
  { value = "N", label = "Inactive", l = { fr = "Inactif" } },
]
```

Résolus au moment du résultat. La cellule affiche le libellé de la langue active, le filtre de colonne propose un sélecteur multi-valeurs alimenté par la même liste, et le widget de formulaire est un `SearchSelect`.

---

## Lookups

Une référence vers une requête dont les colonnes `value` / `label` résolvent la cellule.

```toml
[lookups.CITY]
description = "Cities"
connector   = "myapp"            # retombe sur le connecteur appelant si non précisé
query       = "cities_get"
value       = "ID"
label       = "NAME"
group       = "REGION"           # regroupement secondaire optionnel
```

Une colonne marquée `rules = "LOOKUP"` qui pointe sur un id de lookup est résolue :

- côté grille : un seul fetch partagé par session via `useLookupBatch` — la cellule affiche `code — libellé` ;
- côté formulaire : un `SearchSelect` alimenté par `useLookupTables`, restreint à l'appel selon les `lookup_param_binds` éventuels.

---

## Règles d'affichage et règles côté formulaire

| Règle | Champ d'application | Effet |
|---|---|---|
| `BOOLEAN` | Affichage | La cellule affiche ✓ ou ✗. `rules_values.true_value` précise quelle valeur brute compte comme vrai (défaut `"Y"`). |
| `ENUM` | Affichage | La cellule affiche le libellé localisé. Le filtre de colonne et le widget de formulaire lisent les valeurs depuis `[enums.<id>]`. |
| `LOOKUP` | Affichage | La cellule affiche `code — libellé` depuis `[lookups.<id>]`. Le widget de formulaire est restreint par `lookup_param_binds`. |
| `SEQUENCE` | Formulaire | Renvoie la valeur suivante d'une séquence à la création. |
| `SYSDATE` / `CURRENT_DATE` | Formulaire | Initialise le champ avec la date du jour à la création. |
| `LOGIN` | Formulaire | Initialise le champ avec le nom d'utilisateur de l'appelant à la création. |
| `PASSWORD` | Formulaire | Marque l'entrée comme mot de passe et active le chiffrement à l'enregistrement. |

Les règles d'affichage voyagent sur l'objet `Column.rule` pour que la grille puisse rendre sans aller-retour supplémentaire. Les règles côté formulaire sont appliquées par `ScreenDialog` à l'ouverture du formulaire modal — détaillées dans la page [Écrans](/liberty/framework/screens).

---

## i18n

Chaque requête HTTP transporte l'en-tête `X-Liberty-Lang` (la langue active de `react-i18next`). Le connecteur SQL résout les libellés et les règles dans cette langue ; la grille React affiche directement les libellés traduits. Si une traduction manque, la valeur de `label` (anglais) est utilisée par défaut.

Le dictionnaire indique sa langue par défaut :

```toml
default_language = "en"
```

---

## Conseils & bonnes pratiques

- **Déclarer les entrées partagées au niveau global.** Une colonne `USER_STATUS` qui a le même sens partout doit vivre sous `[entries.USER_STATUS]` une seule fois. La surcharge par connecteur est réservée aux cas où le sens diffère.
- **Garder `label` court.** C'est ce qu'affiche l'en-tête de grille. Les titres longs vont dans le champ `description` de la requête, qui devient le titre du panneau.
- **`rules = "ENUM"` ne doit pas servir de `LOOKUP` déguisé.** Pour une liste de valeurs courte et connue à la configuration, utiliser `ENUM`. Pour une liste qui vit dans une table et change à l'exécution, utiliser `LOOKUP`. Le rendu de la cellule est identique ; l'éditeur du formulaire diffère (statique pour ENUM, dynamique pour LOOKUP).
- **Une colonne sans `dd` fonctionne aussi.** La grille affiche alors le type brut renvoyé par le curseur. Ajouter `dd` uniquement quand il y a une vraie raison : libellé localisé, règle booléen / enum / lookup, format non standard.
