---
title: Liaison de paramètres
description: "Comment les paramètres :nom d'une requête reçoivent leur valeur — valeurs par défaut déclarées sur la requête, param_binds de l'appelant (valeur fixe, autre champ, sources intégrées #LOGIN_USER# / #SYSDATE#) et jetons {{LOGIN}} / {{SYSDATE}} renseignés par le serveur."
keywords: [Liberty Next, liaison de paramètres, ParamDef, param_binds, source, value, default, LOGIN_USER, SYSDATE, jetons, "{{LOGIN}}", "{{SYSDATE}}"]
---

# Liaison de paramètres

Une requête munie de paramètres `:nom` porte sur des lignes différentes à chaque appel. Trois éléments déterminent la valeur reçue par chaque paramètre :

| Élément | Emplacement | Rôle |
|---|---|---|
| **Params** | Sur la requête. | Déclare un paramètre, avec un libellé, une valeur par défaut, une aide et un exemple. |
| **`param_binds`** | Sur l'appelant — action, colonne à lookup, onglet imbriqué. | Lie une valeur à un paramètre : valeur fixe, ou autre champ lu au moment de l'appel. |
| **Jetons** `{{…}}` | Dans le SQL lui-même. | Des valeurs renseignées par le serveur à l'exécution : utilisateur, date, heure. |

La requête porte la déclaration ; chaque appelant porte sa liaison. Une même requête peut être appelée depuis dix endroits avec dix liaisons différentes.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 596" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pbd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pbd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pbd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pbd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="564" rx="14" fill="url(#pbd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="236" y="44" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">invoices_put</text>
  <rect x="236" y="56" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="61" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="71.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="343.88800000000003" y="71.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">INVOICES_PUT</text>
  <line x1="437" y1="68" x2="447" y2="68" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="448" y="56" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="455" y="61" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="475" y="71.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTRUCTION</text>
  <text x="550.064" y="71.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UPDATE</text>
  <line x1="599" y1="68" x2="609" y2="68" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="610" y="56" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="617" y="61" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="637" y="71.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="706.24" y="71.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 déclaré(s)</text>
  <rect x="236" y="94" width="62" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.0" y="108.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Jeton</text>
  <rect x="236" y="122" width="848" height="91.5" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="138.0" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="260" y="138.0" fill="#7dd3fc" fontSize="9.5" fontFamily="ui-monospace, monospace">UPDATE invoices</text>
  <text x="250" y="153.5" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="260" y="153.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">SET    STATUS = :STATUS,</text>
  <text x="250" y="169.0" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="260" y="169.0" fill="#fb923c" fontSize="9.5" fontFamily="ui-monospace, monospace">       UPDATED_BY = &#123;&#123;LOGIN&#125;&#125;,</text>
  <text x="250" y="184.5" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="260" y="184.5" fill="#fb923c" fontSize="9.5" fontFamily="ui-monospace, monospace">       UPDATED_AT = &#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="250" y="200.0" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="260" y="200.0" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">WHERE  INVOICE_ID = :INVOICE_ID_ORIGINAL</text>
  <rect x="616" y="116" width="300" height="182" rx="8" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="628" y="134" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;LOGIN&#125;&#125;</text>
  <text x="628" y="146" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisateur courant (en majuscules)</text>
  <text x="628" y="162" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;PID&#125;&#125;</text>
  <text x="628" y="174" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Id programme — le nom du connecteur</text>
  <text x="628" y="190" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;JDEDATE&#125;&#125;</text>
  <text x="628" y="202" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Date julienne JDE du jour — CYYDDD</text>
  <text x="628" y="218" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSDATE&#125;&#125;</text>
  <text x="628" y="230" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Date courante (colonne date native)</text>
  <text x="628" y="246" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="628" y="258" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Date et heure courantes</text>
  <text x="628" y="278" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHÉMAS DU POOL   #SCHEMA.SY#</text>
  <rect x="236" y="316" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="321" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="331.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="343.88800000000003" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">INVOICES_PUT</text>
  <line x1="437" y1="328" x2="447" y2="328" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="448" y="316" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="455" y="321" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="475" y="331.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTRUCTION</text>
  <text x="550.064" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UPDATE</text>
  <line x1="599" y1="328" x2="609" y2="328" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="610" y="316" width="190" height="24" rx="12" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <rect x="617" y="321" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="637" y="331.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="706.24" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 déclaré(s)</text>
  <text x="236" y="356" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMS</text>
  <rect x="236" y="364" width="848" height="200" rx="6" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="248" y="382" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">⌄  STATUS</text>
  <text x="248" y="402" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME ∗</text>
  <rect x="248" y="408" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="421.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="666.0" y="402" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="666.0" y="408" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="421.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="248" y="440" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="248" y="446" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="459.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">PAID</text>
  <text x="666.0" y="440" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXAMPLE</text>
  <rect x="666.0" y="446" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="459.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <text x="248" y="478" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELP</text>
  <rect x="248" y="484" width="824" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="497.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Le nouveau statut de la facture.</text>
  <text x="248" y="518" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHOICES</text>
  <rect x="248" y="524" width="72" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="284.0" y="536.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OPEN</text>
  <rect x="328" y="524" width="72" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="364.0" y="536.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PAID</text>
  <rect x="408" y="524" width="72" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="444.0" y="536.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CANCELLED</text>
  <text x="666.0" y="518" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <rect x="666.0" y="529" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M668.5,534.5 L670.8,536.8 L674.8,532" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="683.0" y="538" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">enabled</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu Jeton</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeurs remplies par le serveur</text>
  <line x1="200" y1="77.0" x2="298" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres :nom</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liés par l'appelant</text>
  <line x1="200" y1="177.0" x2="386" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jetons serveur</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateur, date, heure, programme</text>
  <line x1="1120" y1="137.0" x2="916" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schémas du pool</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en fin de menu</text>
  <line x1="1120" y1="247.0" x2="916" y2="275" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un paramètre déclaré</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne, ouverte pour l'éditer</text>
  <line x1="200" y1="413.0" x2="236" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="466" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="481" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aide et exemple</text>
  <text x="1130" y="494" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affichés à la saisie</text>
  <line x1="1120" y1="483.0" x2="1072" y2="493" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="526" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="541" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choices · Required</text>
  <text x="1130" y="554" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste · refusé si vide</text>
  <line x1="1120" y1="543.0" x2="754.0" y2="534" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
</svg>

---

## Déclarer un paramètre \{#declare\}

L'étape **Paramètres** de l'éditeur de requête liste les paramètres, un par ligne, qui s'ouvre pour être modifiée :

| Champ | Rôle |
|---|---|
| **Name** | Le paramètre tel qu'il est écrit dans le SQL, sans les deux-points. |
| **Label** | Le libellé affiché au-dessus de la saisie quand un écran ou l'assistant IA demande la valeur. À défaut, le nom. |
| **Default** | La valeur liée quand l'appelant n'en envoie aucune. |
| **Help**, **Example** | Ce qu'il faut y mettre, en une phrase, et une valeur d'exemple (pour un paramètre JSON, un exemple du JSON) : affichés sous le champ où le paramètre se renseigne, et transmis à l'assistant IA. |
| **Choices** | Les seules valeurs admises, quand elles sont peu nombreuses : une liste déroulante là où le paramètre se renseigne. |
| **Required** | Un appel sans valeur pour ce paramètre, et sans valeur par défaut, est refusé avant toute exécution. |

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
| `#POOL#` (ou `#ENVIRONMENT#`) | Le **Pool** choisi dans la barre latérale. Dans le message d'un `confirm` / `notify` : l'environnement de l'écran — ce choix quand le connecteur de l'écran l'a, sinon le pool du connecteur. |
| `#SYSDATE#` (ou `#CURRENT_DATE#`, `#TODAY#`) | La date du jour, `YYYY-MM-DD`. |
| `#NOW#` (ou `#CURRENT_TIMESTAMP#`) | La date et l'heure courantes. |
| `#CURRENT_TIME#` | L'heure courante, `HH:MM:SS`. |

Une source intégrée inconnue ne lie rien. Ces sources s'emploient dans **source** ou **default** : dans **value**, le texte `#LOGIN_USER#` est lié tel quel.

---

## Jetons renseignés par le serveur \{#tokens\}

Une requête d'écriture peut contenir des valeurs que le serveur renseigne à l'exécution — le navigateur n'a aucun moyen de les modifier. Le menu **Jeton** de l'éditeur SQL les insère :

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
| **Colonne à lookup** | Le champ **Values given to the list** de la colonne (onglet Rules), ou le champ **List parameters** de l'entrée du dictionnaire pour des valeurs fixes. |
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
