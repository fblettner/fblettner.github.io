---
title: Liaison de paramètres
description: "Comment les paramètres :nom d'une requête reçoivent leur valeur — valeurs par défaut déclarées sur la requête, param_binds de l'appelant (valeur fixe, autre champ, sources intégrées #LOGIN_USER# / #SYSDATE#) et jetons {{LOGIN}} / {{SYSDATE}} renseignés par le serveur."
keywords: [Liberty Next, liaison de paramètres, ParamDef, param_binds, source, value, default, LOGIN_USER, SYSDATE, jetons, "{{LOGIN}}", "{{SYSDATE}}"]
---

# Liaison de paramètres

Une requête munie de paramètres `:nom` porte sur des lignes différentes à chaque appel. Trois éléments déterminent la valeur reçue par chaque paramètre :

| Élément | Emplacement | Rôle |
|---|---|---|
| **Params** | Sur la requête. | Déclare un paramètre, avec un libellé et une valeur par défaut. |
| **`param_binds`** | Sur l'appelant — action, colonne à lookup, onglet imbriqué. | Lie une valeur à un paramètre : valeur fixe, ou autre champ lu au moment de l'appel. |
| **Jetons** `{{…}}` | Dans le SQL lui-même. | Des valeurs renseignées par le serveur à l'exécution : utilisateur, date, heure. |

La requête porte la déclaration ; chaque appelant porte sa liaison. Une même requête peut être appelée depuis dix endroits avec dix liaisons différentes.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pbd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pbd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pbd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pbd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="340" rx="14" fill="url(#pbd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">invoices_put</text>
  <rect x="240" y="58" width="188" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="59" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="271.5" y="73.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <line x1="303" y1="63" x2="303" y2="77" stroke="#334155" strokeWidth="1"/>
  <text x="331.5" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Params</text>
  <line x1="360" y1="63" x2="360" y2="77" stroke="#334155" strokeWidth="1"/>
  <text x="394.0" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <line x1="240" y1="92" x2="960" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="107" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,112.5 L244.8,114.8 L248.8,110" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="116" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">writable</text>
  <rect x="770" y="102" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="810.0" y="116.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Token ▾</text>
  <rect x="858" y="102" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="913.0" y="116.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Pool schemas ▾</text>
  <rect x="240" y="132" width="720" height="120" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="152" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE invoices</text>
  <text x="254" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SET    STATUS = :STATUS,</text>
  <text x="254" y="192" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">       UPDATED_BY = &#123;&#123;LOGIN&#125;&#125;,</text>
  <text x="254" y="212" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">       UPDATED_AT = &#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="254" y="232" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">WHERE  INVOICE_ID = :INVOICE_ID_ORIGINAL</text>
  <rect x="680" y="128" width="260" height="150" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="692" y="150" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;LOGIN&#125;&#125;</text>
  <text x="820" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">utilisateur courant</text>
  <text x="692" y="176" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSDATE&#125;&#125;</text>
  <text x="820" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">date courante</text>
  <text x="692" y="202" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="820" y="202" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">date et heure</text>
  <text x="692" y="228" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;JDEDATE&#125;&#125;</text>
  <text x="820" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">CYYDDD</text>
  <text x="692" y="254" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;PID&#125;&#125;</text>
  <text x="820" y="254" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nom du connecteur</text>
  <text x="240" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMS</text>
  <rect x="240" y="284" width="420" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="301.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="390" y="301.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <text x="550" y="301.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="240" y="316" width="420" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="390" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="550" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">PAID</text>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres :nom</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liés par l'appelant</text>
  <line x1="210" y1="167.0" x2="254" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres déclarés</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé et défaut</text>
  <line x1="210" y1="307.0" x2="240" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu Token</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeurs du serveur</text>
  <line x1="1000" y1="77.0" x2="810" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1000" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jetons serveur</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;&#123;LOGIN&#125;&#125;, &#123;&#123;SYSDATE&#125;&#125;…</text>
  <line x1="1000" y1="257.0" x2="940" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
</svg>

---

## Déclarer un paramètre \{#declare\}

Le bloc **Params** de l'éditeur de requête liste les paramètres, un par ligne :

| Champ | Rôle |
|---|---|
| **name** | Le paramètre tel qu'il est écrit dans le SQL, sans les deux-points. |
| **label** | Le libellé affiché au-dessus de la saisie quand un écran ou l'assistant IA demande la valeur. À défaut, le nom. |
| **default** | La valeur liée quand l'appelant n'en envoie aucune. |

```sql
SELECT *
FROM   invoices
WHERE  invoice_date BETWEEN :FROM_DATE AND :TO_DATE
  AND  status = :STATUS
```

| name | label | default |
|---|---|---|
| `FROM_DATE` | Début de période | `2026-01-01` |
| `TO_DATE` | Fin de période | `2026-12-31` |
| `STATUS` | Statut | `OPEN` |

La déclaration est facultative : un paramètre que l'appelant n'envoie pas et qui n'a pas de valeur par défaut reçoit `NULL`.

---

## Lier une valeur — `param_binds` \{#param-binds\}

Partout où une requête est appelée avec des valeurs du contexte, l'appelant porte une liste de `param_binds`, une entrée par paramètre :

| Champ | Rôle |
|---|---|
| **param** | Le paramètre de la requête cible. La liste propose les paramètres déclarés par la requête. |
| **value** | Une valeur fixe. |
| **source** | L'origine de la valeur, lue au moment de l'appel : une colonne de la ligne, un champ du formulaire, une valeur renvoyée par une étape précédente d'une action (`step1.first_row.CUSTOMER_ID`), ou une [source intégrée](#builtins). |
| **default** | La valeur liée quand **source** ne donne rien : une valeur fixe, une source intégrée ou un chemin d'étape. |

Quand **value** et **source** sont toutes deux renseignées, **value** l'emporte.

```toml
param_binds = [
  { param = "STATUS",     value  = "PAID" },
  { param = "INVOICE_ID", source = "INVOICE_ID" },
  { param = "UPMJ",       source = "UPMJ", default = "#SYSDATE#" },
]
```

**source** contient le **nom** d'une colonne ou d'un champ, pas sa valeur. Cas courant : une action sur une ligne transmet la clé de la ligne à la requête — `{ param = "INVOICE_ID", source = "INVOICE_ID" }`.

### Sources intégrées \{#builtins\}

Ces sources sont lues dans le navigateur au moment de l'appel :

| Source | Valeur |
|---|---|
| `#LOGIN_USER#` (ou `#LOGIN#`, `#USER#`) | Le nom de l'utilisateur connecté. |
| `#LOGIN_EMAIL#` (ou `#EMAIL#`) | L'adresse e-mail de l'utilisateur. |
| `#LANGUAGE#` (ou `#LANG#`) | La langue de l'interface. |
| `#SYSDATE#` (ou `#CURRENT_DATE#`, `#TODAY#`) | La date du jour, `YYYY-MM-DD`. |
| `#NOW#` (ou `#CURRENT_TIMESTAMP#`) | La date et l'heure courantes. |
| `#CURRENT_TIME#` | L'heure courante, `HH:MM:SS`. |

Une source intégrée inconnue ne lie rien. Ces sources s'emploient dans **source** ou **default** : dans **value**, le texte `#LOGIN_USER#` est lié tel quel.

---

## Jetons renseignés par le serveur \{#tokens\}

Une requête d'écriture peut contenir des valeurs que le serveur renseigne à l'exécution — le navigateur n'a aucun moyen de les modifier. Le menu **Token** de l'éditeur SQL les insère :

| Jeton | Valeur |
|---|---|
| `{{LOGIN}}` (ou `{{USER}}`) | Le nom de l'utilisateur connecté, en majuscules. |
| `{{SYSDATE}}` | La date courante. |
| `{{SYSTIME}}` | L'heure courante. |
| `{{SYSTIMESTAMP}}` (ou `{{NOW}}`) | La date et l'heure courantes. |
| `{{JDEDATE}}` | La date du jour au format JD Edwards (CYYDDD). |
| `{{JDETIME}}` | L'heure courante au format JD Edwards (HHMMSS). |
| `{{PID}}` | Le nom du connecteur, en majuscules. |
| `{{JOBN}}` | `LIBERTY`. |

```sql
UPDATE invoices
SET    status     = 'PAID',
       updated_by = {{LOGIN}},
       updated_at = {{SYSTIMESTAMP}}
WHERE  invoice_id = :INVOICE_ID
```

Dates et heures suivent l'heure locale du serveur, avec un seul instant par instruction. Dans `COLONNE = {{JETON}}`, la valeur prend le format de la colonne défini dans le dictionnaire (une colonne `jdedate` reçoit du CYYDDD). Un jeton inconnu fait échouer l'instruction : une faute de frappe ne passe pas inaperçue.

---

## Où se règlent les liaisons \{#where\}

| Appelant | Réglage |
|---|---|
| **Enregistrement d'un dialogue** (insertion, mise à jour, suppression) | Rien à déclarer : chaque colonne est liée au paramètre de même nom, et le WHERE de la mise à jour utilise `:<CLÉ>_ORIGINAL`, la valeur de la clé à l'ouverture du dialogue. |
| **Action** (exécuter une requête, appeler une API ou un plugin, ouvrir un écran…) | Les `param_binds` de l'action. |
| **Colonne à lookup** | Le champ **lookup_param_binds** de la colonne (onglet Rules), ou le champ **Lookup params** de l'entrée du dictionnaire pour des valeurs fixes. |
| **Onglet imbriqué** | Les `param_binds` de l'onglet — en général la clé de la ligne parent. |
| **Entrée de menu** | **Params** (onglet Advanced) : des valeurs fixes transmises à la cible à son ouverture. |
| **Tableau de bord** | La période et les filtres lient `:PERIOD_FROM`, `:PERIOD_TO` et les colonnes filtrées — voir [Tableaux de bord](../../dashboards.md). |

---

## Ordre de résolution \{#order\}

Pour chaque paramètre de l'instruction :

1. la valeur envoyée par l'appelant — entrée `param_binds`, champ du dialogue, paramètre de menu ;
2. à défaut, la valeur **default** déclarée sur la requête ;
3. à défaut, `NULL`.

À l'écriture, les règles du dictionnaire s'appliquent ensuite aux colonnes liées : `LOGIN` remplace toujours la valeur, `SYSDATE` et `DEFAULT` complètent une valeur vide, `SEQUENCE` numérote une insertion — voir [Dictionnaire → Règles](../../dictionary.md#rules).

---

## Conventions de nommage

| Convention | Raison |
|---|---|
| **Paramètres en majuscules** | Les liaisons sont enregistrées en majuscules (`param`, `source`) et l'assistant CRUD génère des noms en majuscules. Un SQL en majuscules évite tout décalage. |
| **Même nom que la colonne** | Un paramètre nommé comme sa colonne se lit naturellement et se lie tout seul à l'enregistrement d'un dialogue. |
| **`:<CLÉ>_ORIGINAL` dans le WHERE d'une mise à jour** | La convention de l'enregistrement des dialogues ; l'assistant CRUD l'écrit, et un `_put` écrit à la main doit la reprendre. |

---

## Erreurs fréquentes

| Erreur | Conséquence | Correction |
|---|---|---|
| `value = "#LOGIN_USER#"`. | Le texte `#LOGIN_USER#` est écrit. | Passer par **source**. |
| **value** et **source** renseignées. | **source** est ignorée. | N'en garder qu'une. |
| `#SYSDATE#` lié à un filtre de lecture. | L'utilisateur ne peut plus choisir une autre date. | Laisser le paramètre libre, avec une valeur par défaut sur la requête. |
| Une liaison vers un paramètre absent de la requête. | Sans effet. | Choisir le paramètre dans la liste, qui suit la requête. |
| Un `_put` écrit à la main sans `_ORIGINAL`. | Modifier la clé dans le dialogue ne met à jour aucune ligne. | `WHERE key = :KEY_ORIGINAL`. |

---

## Pour aller plus loin

- [Variantes SQL par dialecte](./per-dialect-sql.md) — une requête, un SQL différent par base de données.
- [Dictionnaire](../../dictionary.md) — les règles `LOGIN`, `SYSDATE`, `SEQUENCE` et `DEFAULT` appliquées à l'écriture.
- [Actions et cycle de vie](../screens/actions-and-lifecycle.md) — les actions qui appellent des requêtes avec des `param_binds`.
