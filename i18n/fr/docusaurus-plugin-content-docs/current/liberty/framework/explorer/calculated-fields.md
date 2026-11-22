---
title: Champs calculés
description: "Les champs calculés de l'explorateur de données de Liberty Next : l'éditeur (nom, libellé, expression, sélecteurs de champs et de fonctions, Tester), le langage d'expressions — arithmétique, comparaisons, conditions, in, is empty, fonctions de date, de texte et de nombre — et le rôle de mesure ou de dimension selon le type du résultat."
keywords: [Liberty Next, explorateur de données, champ calculé, expression, formule, mesure, dimension, year, days, round, coalesce]
---

# Champs calculés

Un champ calculé produit une valeur à partir des autres champs : une marge, un montant pondéré, une année, un délai en jours, une catégorie. Il s'écrit dans un petit langage d'expressions que le serveur contrôle et traduit pour la base — jamais du SQL libre. Il appartient à l'analyse et s'enregistre avec elle.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="326" rx="14" fill="url(#cf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau champ calculé</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <rect x="240" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">weighted</text>
  <text x="606" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="606" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Montant pondéré</text>
  <text x="240" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSÉRER UN CHAMP</text>
  <rect x="240" y="130" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Champ…                                                  ▾</text>
  <text x="606" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSÉRER UNE FONCTION</text>
  <rect x="606" y="130" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="144.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Fonction…                                             ▾</text>
  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPRESSION</text>
  <rect x="240" y="174" width="720" height="60" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="194" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">STAGE = 'Negotiation' ? AMOUNT × 0.6 : AMOUNT × 0.3</text>
  <text x="240" y="252" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Arithmétique (+ − × /), comparaisons, and / or / not, cond ? a : b, x in (…), x is empty. Un nombre devient une mesure…</text>
  <rect x="240" y="264" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="271.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Tester</text>
  <text x="314" y="280" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Un number → une mesure. Échantillon :</text>
  <rect x="508.48" y="268" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="528.98" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">72000</text>
  <rect x="554.48" y="268" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="574.98" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13500</text>
  <rect x="600.48" y="268" width="37" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="618.98" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8100</text>
  <rect x="642.48" y="268" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="662.98" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">36000</text>
  <line x1="221" y1="302" x2="979" y2="302" stroke="#1f2937" strokeWidth="1"/>
  <rect x="870" y="312" width="90" height="22" rx="5" fill="url(#cf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.0" y="326.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="800" y="312" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="831.0" y="326.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une lettre, puis lettres, chiffres, _</text>
  <line x1="200" y1="97.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Expression</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais de SQL libre</text>
  <line x1="200" y1="203.0" x2="240" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tester</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type et huit valeurs d'exemple</text>
  <line x1="200" y1="279.0" x2="240" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Listes d'insertion</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insèrent au curseur</text>
  <line x1="1000" y1="137.0" x2="960" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="1000" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer après un test</text>
  <text x="1010" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le type décide du rôle</text>
  <line x1="1000" y1="313.0" x2="870" y2="323" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
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
