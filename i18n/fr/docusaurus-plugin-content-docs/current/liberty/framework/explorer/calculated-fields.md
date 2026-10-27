---
title: Champs calculés
description: "Les champs calculés de l'explorateur de données de Liberty Next : l'éditeur (nom, libellé, expression, sélecteurs de champs et de fonctions, Tester), le langage d'expressions — arithmétique, comparaisons, conditions, in, is empty, fonctions de date, de texte et de nombre — et le rôle de mesure ou de dimension selon le type du résultat."
keywords: [Liberty Next, explorateur de données, champ calculé, expression, formule, mesure, dimension, year, days, round, coalesce]
---

# Champs calculés

Un champ calculé produit une valeur à partir des autres champs : une marge, un montant pondéré, une année, un délai en jours, une catégorie. Il s'écrit dans un petit langage d'expressions que le serveur contrôle et traduit pour la base — jamais du SQL libre. Il appartient à l'analyse et s'enregistre avec elle.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="330" rx="14" fill="url(#exc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau champ calculé</text>
  <rect x="800" y="28" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="884" y="28" width="80" height="22" rx="5" fill="url(#exc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="240" y="86" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">weighted</text>
  <text x="600" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Libellé</text>
  <rect x="600" y="86" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Montant pondéré</text>
  <text x="240" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Insérer un champ</text>
  <rect x="240" y="136" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="150.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Champ… ▾</text>
  <text x="600" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Insérer une fonction</text>
  <rect x="600" y="136" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="150.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Fonction… ▾</text>
  <text x="240" y="180" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Expression</text>
  <rect x="240" y="186" width="720" height="64" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="206" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">STAGE = 'Negotiation' ? AMOUNT · 0.6 : AMOUNT · 0.3</text>
  <text x="240" y="268" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Arithmétique (+ − × /), comparaisons, and / or / not, cond ? a : b, x in (…), x is empty.</text>
  <rect x="240" y="284" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="275.0" y="298.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Tester</text>
  <text x="322" y="299" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Un num → une mesure. Échantillon :</text>
  <rect x="501" y="288" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="521.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">72000</text>
  <rect x="546" y="288" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="566.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13500</text>
  <rect x="591" y="288" width="37" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="609.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8100</text>
  <rect x="632" y="288" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="652.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">36000</text>
  <rect x="10" y="86" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="20" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisé comme calc.&lt;nom&gt;</text>
  <line x1="210" y1="103.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Expression</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais du SQL libre</text>
  <line x1="210" y1="217.0" x2="240" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="1000" y="136" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteurs</text>
  <text x="1010" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insèrent au curseur</text>
  <line x1="1000" y1="153.0" x2="960" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer après un test</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le type décide</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="1000" y="280" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Test</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type et huit valeurs</text>
  <line x1="1000" y1="297.0" x2="920" y2="297" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
</svg>

---

## L'éditeur \{#editor\}

**Nouveau champ calculé**, en bas du volet des champs, ouvre l'éditeur ; le crayon d'un champ calculé le modifie, la corbeille le supprime (il quitte alors aussi les étagères).

| Champ | Usage |
|---|---|
| **Nom** | Une lettre, puis lettres, chiffres ou `_` ; unique dans l'analyse. |
| **Libellé** | Le nom affiché dans le volet et les résultats. |
| **Insérer un champ**, **Insérer une fonction** | Insèrent au curseur ; une fonction s'insère avec ses arguments sélectionnés. |
| **Expression** | La formule. |
| **Tester** | Compile l'expression sur le serveur et affiche son type et huit valeurs d'exemple. |

**Enregistrer** n'est disponible qu'après un test réussi. Le type du résultat fixe le rôle du champ : un **nombre** devient une mesure, tout autre type une dimension. Le champ rejoint alors un groupe *calc* du volet et s'utilise dans les lignes, les mesures et les filtres comme tout autre champ.

---

## Le langage \{#language\}

Un champ s'écrit par son nom pour l'entité analysée (`AMOUNT`), ou `entité.NOM` pour une autre entité (`customers.COUNTRY`). Les textes s'écrivent entre apostrophes.

| Élément | Formes |
|---|---|
| Arithmétique | `+` `-` `*` `/` et parenthèses. Une division par zéro donne une valeur vide. |
| Comparaison | `=` `!=` `<>` `<` `<=` `>` `>=` |
| Logique | `and`, `or`, `not` |
| Condition | `condition ? valeur_si_vrai : valeur_si_faux` |
| Liste | `x in ('FR', 'BE')` |
| Vide | `x is empty`, `x is not empty` |
| Dates | `year(d)`, `month(d)`, `day(d)`, `days(début, fin)` — le nombre de jours entre deux dates |
| Nombres | `round(x, n)`, `abs(x)` |
| Texte | `upper(s)`, `lower(s)`, `length(s)`, `concat(a, b, …)` |
| Tout type | `coalesce(a, b, …)` — la première valeur non vide |

Un résultat oui/non s'affiche `Y` / `N`. Une date julienne de JD Edwards EnterpriseOne est convertie en vraie date avant l'application d'une fonction de date.

---

## Exemples \{#examples\}

| Besoin | Expression | Rôle |
|---|---|---|
| Pipeline pondéré | `STAGE = 'Negotiation' ? AMOUNT * 0.6 : AMOUNT * 0.3` | mesure |
| Prix unitaire | `AMOUNT / QTY` | mesure |
| Année de clôture | `year(CLOSE_DATE)` | mesure — un nombre ; pour regrouper par année, la granularité *Année* de la date dans **Lignes** convient mieux |
| Délai de clôture | `days(CREATED_ON, CLOSE_DATE)` | mesure |
| Tranche de montant | `AMOUNT >= 100000 ? 'large' : 'standard'` | dimension |
| Client national ou non | `customers.COUNTRY = 'FR'` | dimension (`Y` / `N`) |

---

## Points d'attention

| Situation | Effet |
|---|---|
| Types incompatibles (`AMOUNT + 'x'`). | Le test échoue et indique la position de l'erreur. |
| Un champ inconnu. | Le test échoue et le nomme. |
| Les deux branches de `? :` n'ont pas le même type. | Le test échoue : deux nombres, deux textes ou deux dates. |
| Une expression de plus de 2 000 caractères. | Refusée. |

## Pour aller plus loin

- [Analyser les données](./analysis.md) — les étagères et les vues.
- [Analyses enregistrées et tableaux de bord](./saved-and-dashboards.md) — une analyse enregistrée conserve ses champs calculés.
