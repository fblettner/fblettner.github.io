---
title: Créer une requête personnalisée
description: "Écrire une requête indépendante à la main dans Liberty Next — la section Requêtes, l'éditeur en trois étapes, la case writable, les paramètres déclarés, l'éditeur SQL avec autocomplétion, jetons, assistant SELECT et test."
keywords: [Liberty Next, requête personnalisée, SQL manuel, Requêtes, QueryDef, writable, params, jetons]
---

# Créer une requête personnalisée

Quand l'assistant CRUD ne convient pas — analyses, rapports, jointures sur plusieurs tables, appels de procédures stockées, tout ce qui ne correspond pas à une seule table — la requête s'écrit à la main dans la vue **Requêtes**.

Cette page détaille le formulaire de l'éditeur, champ par champ.

---

## Accès

**Liberty Next → Données → Connecteurs → choix du connecteur → carte d'étape Requêtes → ＋ Ajouter une requête**.

La page demande un nom, crée une requête vide et ouvre son éditeur à côté de la liste. L'éditeur dessine la requête en trois cartes d'étape — **Ce que c'est** (libellé, description), **Instruction** (SQL, writable) et **Paramètres** — et affiche les champs de la carte choisie.

---

## Le formulaire de l'éditeur

<svg viewBox="0 0 1320 435" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ce-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ce-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ce-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ce-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="405" rx="14" fill="url(#ce-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="236" y="46" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]  ·  sql</text>
  <rect x="236" y="60" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="65" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="75.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉGLAGES</text>
  <text x="320.592" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="387" y1="72" x2="397" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="398" y="60" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="405" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="425" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="470.944" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 table(s)</text>
  <line x1="549" y1="72" x2="559" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="560" y="60" width="170" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="567" y="65" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="587" y="75.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES</text>
  <text x="644.592" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 requête(s)</text>
  <line x1="731" y1="72" x2="741" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="742" y="60" width="140" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="749" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="769" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉQUENCES</text>
  <text x="832.416" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <line x1="883" y1="72" x2="893" y2="72" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="894" y="60" width="120" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="901" y="65" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="921" y="75.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="972.768" y="75.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="236" y="98" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="112.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filtrer 3…</text>
  <rect x="236" y="128" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="144" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customer_balance</text>
  <text x="246" y="157" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Solde par client</text>
  <rect x="236" y="172" width="200" height="38" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="246" y="188" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <text x="246" y="201" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires par mois</text>
  <rect x="236" y="216" width="200" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="232" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">purge_old_logs</text>
  <text x="246" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Supprime les journaux de plus d'un an</text>
  <rect x="462" y="98" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="493.0" y="112.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← retour</text>
  <text x="534" y="113" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <rect x="462" y="128" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="524.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages</text>
  <rect x="592" y="128" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="622.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="657" y="128" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="704.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Changer le type</text>
  <rect x="757" y="128" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Déplacer</text>
  <rect x="822" y="128" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="847.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="877" y="128" width="65" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="909.5" y="142.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="462" y="164" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="469" y="169" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="489" y="179.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="569.888" y="179.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MONTHLY_REVENUE</text>
  <line x1="663" y1="176" x2="673" y2="176" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="674" y="164" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="681" y="169" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="701" y="179.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTRUCTION</text>
  <text x="776.064" y="179.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">SELECT</text>
  <line x1="825" y1="176" x2="835" y2="176" stroke="#475569" strokeWidth="1" markerEnd="url(#ce-flow)"/>
  <rect x="836" y="164" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="843" y="169" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="863" y="179.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="932.24" y="179.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 déclaré(s)</text>
  <text x="462" y="210" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL ∗</text>
  <rect x="462" y="218" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="493.0" y="232.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Jeton</text>
  <rect x="944" y="218" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="979.0" y="232.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Assistant</text>
  <rect x="1020" y="218" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="232.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Tester</text>
  <rect x="462" y="246" width="610" height="89" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="262" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="486" y="262" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS MONTH,</text>
  <text x="476" y="277" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="486" y="277" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">       SUM(total_ht) AS REVENUE</text>
  <text x="476" y="292" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="486" y="292" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM invoices</text>
  <text x="476" y="307" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="486" y="307" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">WHERE invoice_date BETWEEN :FROM_DATE AND :TO_DATE</text>
  <text x="476" y="322" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="486" y="322" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">GROUP BY 1 ORDER BY 1</text>
  <rect x="462" y="343" width="132" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="528.0" y="357.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ per-dialect variants</text>
  <text x="462" y="385" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITABLE</text>
  <rect x="462" y="394" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="479" y="403" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="550" y="403" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Allow non-SELECT statements (INSERT / UPDATE / DELETE).</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La liste reste à côté</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic vers une autre requête</text>
  <line x1="200" y1="137.0" x2="266" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois étapes</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nature, instruction, paramètres</text>
  <line x1="200" y1="197.0" x2="462" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jetons serveur</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;&#123;LOGIN&#125;&#125;, &#123;&#123;SYSDATE&#125;&#125;, schémas</text>
  <line x1="200" y1="257.0" x2="462" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="20" y="339" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="354" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Variantes par dialecte</text>
  <text x="30" y="367" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une instruction par base</text>
  <line x1="200" y1="356.0" x2="462" y2="354" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="1120" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la requête</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, renommer, type, déplacer…</text>
  <line x1="1120" y1="107.0" x2="942" y2="139" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="1120" y="206" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant · Tester</text>
  <text x="1130" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">constructeur de SELECT · essai</text>
  <line x1="1120" y1="223.0" x2="1072" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
  <rect x="1120" y="365" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="380" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Writable</text>
  <text x="1130" y="393" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">désactivé : SELECT seul</text>
  <line x1="1120" y1="382.0" x2="472" y2="399" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ce-arrow)"/>
</svg>

---

## Champ par champ

### `name`

Affiché dans l'en-tête de l'éditeur, sans y être modifiable. Le nom est fixé à la création et sert de clé de permission à la requête — `sql:<connecteur>:<nom>`. Il se change avec le bouton **Renommer** de l'en-tête : toutes les références (écrans, menus, dictionnaire…) sont mises à jour en une fois ; l'opération est refusée tant que des modifications locales ne sont pas enregistrées.

Règles de nommage :

| Règle | Raison |
|---|---|
| Lettres, chiffres, tirets bas. | Le nom sert à la fois de clé TOML, de segment d'URL et de permission. |
| Commence par une lettre ou un tiret bas. | Idem. |

Conventions de nommage qui tiennent dans la durée :

| Motif | Exemple |
|---|---|
| `<entité>_<action>` | `customer_balance`, `invoice_send` |
| `<verbe>_<nom>` | `get_top_clients`, `mark_paid` |
| `report_<sujet>` | `report_monthly_revenue`, `report_overdue_invoices` |

### `writable`

Une case à cocher sous le SQL, dans l'étape **Instruction**.

| État | Instructions acceptées |
|---|---|
| **Désactivé** (défaut) | `SELECT`, y compris avec des CTE. |
| **Activé** | `INSERT` / `UPDATE` / `DELETE` / `CALL` / `MERGE` / DDL — toute instruction qui modifie la base. |

Une requête de lecture le laisse désactivé : toute instruction autre qu'un SELECT est alors refusée. L'assistant CRUD l'active déjà pour `_put` / `_post` / `_delete` ; sur une requête écrite à la main, il s'active au besoin.

### `sql`

L'étape **Instruction** porte l'éditeur SQL. Il accepte une instruction unique (cas courant) ou une variante par base de données (**+ per-dialect variants**) — voir [Variantes SQL par dialecte](./per-dialect-sql.md).

Ce que propose l'éditeur :

| Fonction | Rôle |
|---|---|
| **Coloration syntaxique** | Mots-clés colorés. |
| **Autocomplétion** | Les tables après `FROM` / `JOIN` / `INTO` / `UPDATE`, les colonnes après `<table>.`, lues dans le pool du connecteur. Ctrl+Espace ouvre la liste. |
| **Jeton** | Insère une valeur renseignée par le serveur à l'exécution : `{{LOGIN}}`, `{{SYSDATE}}`, `{{SYSTIME}}`, `{{SYSTIMESTAMP}}`, `{{JDEDATE}}`, `{{JDETIME}}`, `{{PID}}`, `{{JOBN}}` — voir [Liaison des paramètres](./parameter-binding.md#tokens). La fin du menu, **Schémas du pool**, insère un jeton de schéma du pool, pour que le même SQL s'exécute sur le schéma d'un autre environnement. |
| **Assistant** | Ouvre le constructeur de SELECT : choix de la table, des colonnes, des clauses WHERE et ORDER BY. |
| **Tester** | Essaie l'instruction sur le pool du connecteur et affiche les lignes. Proposé pour une instruction de lecture seulement (SELECT, WITH). |
| **Paramètres `:nom`** | Tout `:identifiant` du SQL est un paramètre lié — à déclarer dans l'étape **Paramètres**. |

Quelques règles liées à la façon dont le moteur lie les paramètres :

- Les valeurs passent par des paramètres `:nom`, jamais par concaténation dans le texte SQL. Le moteur les lie par le pilote de la base : le motif LIKE s'écrit `'%' || :search || '%'`.
- Le suffixe `_ORIGINAL` est réservé : l'enregistrement du dialogue l'utilise pour la clause WHERE d'un UPDATE (voir [Créer depuis une table de la base](./create-from-database.md#why-name_original-on-update)).
- Une seule instruction par requête. Pour enchaîner plusieurs instructions, appeler une procédure stockée (`CALL`) ou répartir le travail sur plusieurs requêtes.

### `params`

L'étape **Paramètres** liste les paramètres déclarés — une ligne par `:nom` du SQL, qui s'ouvre pour être modifiée (**add** en déclare un autre) :

| Champ | Rôle |
|---|---|
| **Name** | Le nom du paramètre, sans les deux-points. Comparé sans tenir compte de la casse. |
| **Label** | Le libellé affiché au-dessus du champ de saisie. À défaut, le nom. |
| **Default** | La valeur proposée. Vide : l'appelant peut l'omettre, et le moteur lie un `NULL`. |
| **Help**, **Example** | Ce qu'il faut y mettre, en une phrase, et une valeur d'exemple — affichés sous le champ où le paramètre se renseigne, et transmis à l'assistant IA. |
| **Choices** | Les seules valeurs admises, quand elles sont peu nombreuses : le champ devient une liste déroulante. |
| **Required** | Un appel sans valeur (et sans valeur par défaut) est refusé avant l'exécution de la requête. |

Ces lignes ne modifient pas le SQL : elles indiquent aux écrans et à l'assistant IA comment présenter une saisie pour chaque paramètre. Une requête sans paramètre s'en passe ; le moteur accepte d'ailleurs des paramètres non déclarés (un dialogue peut lier n'importe quel `:nom_de_colonne`).

Pour lier des valeurs venant d'ailleurs (clic sur une ligne, filtre parent, action enchaînée), voir [Liaison des paramètres](./parameter-binding.md).

### `label` (Ce que c'est)

Nom court affiché dans les listes déroulantes — éditeur d'écran, choix de la cible d'un menu, éditeur d'actions. À défaut, le nom de la requête.

### `description` (Ce que c'est)

Texte plus long, affiché dans les listes sous le nom de la requête, et en infobulle dans le choix de la requête de lecture de l'éditeur d'écran.

---

## Boutons de l'éditeur

| Bouton | Rôle | Remarques |
|---|---|---|
| **← retour** | Ferme l'éditeur ; la liste reprend toute la largeur (sans enregistrer). | Les modifications restent en attente — *Enregistrer*, dans l'en-tête de la page, les écrit. |
| **Rechercher les usages** | Indique où la requête est utilisée (écrans, graphiques, tableaux de bord, dictionnaire…). | |
| **Renommer** | Renomme la requête dans tous les fichiers. | Refusé si des modifications locales ne sont pas enregistrées ; met à jour chaque référence. |
| **Changer le type** | Déplace la requête vers Tables, Séquences ou Lookups. | Voir [les quatre types de requêtes](./overview.md#kinds). |
| **Déplacer** | Déplace la requête vers un autre connecteur SQL et réécrit les références. | |
| **Cloner** | Copie la requête ; demande le nom de la copie. | Nom proposé : `<nom>_copy`. Voir [Cloner une requête ou un connecteur](./clone.md). |
| **Supprimer** | Retire la requête du connecteur. | Après confirmation. |

---

## Enregistrement et rechargement

**Enregistrer**, en haut de la page Connecteurs, écrit le fichier du connecteur et recharge la configuration à chaud. La nouvelle requête répond aussitôt sur `/api/sql/<connecteur>/<nom>` (paramètres en query-string pour un GET, en corps JSON pour un POST sur une requête d'écriture).

---

## Vérifier la requête

**Tester**, au-dessus de l'éditeur SQL, essaie une instruction de lecture sur le pool du connecteur et affiche les lignes — le contrôle le plus rapide pendant l'écriture. Au-delà :

| Moyen | Usage |
|---|---|
| L'utiliser depuis un écran. | Quand l'écran est de toute façon l'étape suivante. |
| Appeler directement l'API REST. | Pour un contrôle rapide — `GET /api/sql/<connecteur>/<requête>?from_date=2026-01-01&to_date=2026-01-31`. |
| Interroger l'assistant IA. | « Montre-moi le résultat de `monthly_revenue` pour le mois dernier » — si le connecteur est ouvert à l'assistant, celui-ci exécute la requête de lecture et renvoie les lignes. |

L'API REST est le moyen le plus rapide pour le diagnostic : les messages d'erreur reviennent tels quels et les paramètres passent dans l'URL.

---

## Requête manuelle ou assistant CRUD

| Assistant CRUD | Éditeur de requête |
|---|---|
| La table existe dans la base et les quatre requêtes standard suffisent. | La requête joint plusieurs tables. |
| Le câblage `:NOM_ORIGINAL` de l'UPDATE doit rester homogène. | La requête est un agrégat `GROUP BY`. |
| Un `_delete` sur la clé primaire est attendu. | La requête renvoie une colonne calculée absente de la table. |
| | La requête appelle une procédure stockée. |
| | La requête écrit autrement qu'un simple UPDATE / INSERT / DELETE (`MERGE`, `TRUNCATE`). |

---

## Pour aller plus loin

- [Cloner une requête ou un connecteur](./clone.md) — partir d'une requête existante.
- [Liaison des paramètres](./parameter-binding.md) — libellés, valeurs par défaut et sources des paramètres `:nom`.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — une même requête avec un SQL différent sous Postgres et sous Oracle.
