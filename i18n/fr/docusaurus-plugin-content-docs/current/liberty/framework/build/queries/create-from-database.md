---
title: Créer depuis une table de la base
description: "L'Assistant CRUD — pointez Liberty sur une table existante, cochez les colonnes, obtenez les quatre requêtes CRUD générées et enregistrées en un clic."
keywords: [Liberty Framework, requêtes, CRUD, assistant, générer depuis la base, introspection, ConnectorsBuilder]
---

# Créer depuis une table de base

Quand la table existe déjà dans la base, le chemin le plus rapide est l'**Assistant CRUD**. Il suffit de lui désigner un schéma et une table, de cocher les colonnes que l'écran doit afficher et de marquer celles qui identifient une ligne : Liberty écrit alors les quatre requêtes (`_get`, `_put`, `_post`, `_delete`) — y compris la reliaison `:NAME_ORIGINAL` sur UPDATE pour que l'Enregistrer d'un dialogue sache quelle ligne retrouver. Les **identifiants de colonnes et noms de liaison générés sont en majuscules** (comme l'assistant SELECT) : les colonnes JDE ressortent en majuscules.

C'est le chemin recommandé pour toute table déjà existante. À éviter uniquement quand la table n'existe pas encore ou quand le SQL doit être écrit à la main — voir [Créer une requête personnalisée](./create-custom.md).

---

## Où le trouver

L'assistant est accessible depuis **Liberty Next → Données → Connecteurs** :

1. Choisir un connecteur dans la liste de gauche.
2. Choisir la carte d'étape **Tables**.
3. Cliquer sur **＋ Ajouter des requêtes**, dans l'en-tête du connecteur.
4. Une fenêtre de choix s'ouvre. Choisir **Générer depuis la BDD**.

L'assistant parcourt alors le pool du connecteur (`GET /api/sql/<connector>/_schemas`) et présente les schémas trouvés.

---

## La disposition de l'assistant

<svg viewBox="0 0 1320 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="22" width="860" height="538" rx="14" fill="url(#cw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="246" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Générer une table depuis la BDD</text>
  <text x="472.32000000000005" y="48" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">· [connectors.crm]</text>
  <line x1="230" y1="62" x2="1090" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="82" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILTRE SUR LE NOM DE LA TABLE</text>
  <rect x="246" y="88" width="828" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="102.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">cust%</text>
  <text x="246" y="124" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="246" y="130" width="828" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="144.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="1060" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="246" y="166" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE BASE (LES REQUÊTES DEVIENNENT &lt;BASE&gt;_GET / _PUT / _POST / _DELETE)</text>
  <rect x="246" y="172" width="828" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="186.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="246" y="214" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNES  (6 / 7 incluses · 1 clé)</text>
  <rect x="246" y="222" width="828" height="108" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="256.0" y="233" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,238.5 L260.8,240.8 L264.8,236" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="242" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">customer_id</text>
  <text x="343.38" y="242" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">INTEGER</text>
  <rect x="606.0" y="233" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,238.5 L610.8,240.8 L614.8,236" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="242" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="670.0" y="233" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,238.5 L674.8,240.8 L678.8,236" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="688.0" y="242" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">name</text>
  <text x="718.32" y="242" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(120)</text>
  <rect x="1020.0" y="233" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1037.0" y="242" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="1038.0" y="242" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="256.0" y="257" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,262.5 L260.8,264.8 L264.8,260" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="266" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">email</text>
  <text x="309.9" y="266" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(255)</text>
  <rect x="606.0" y="257" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="266" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="670.0" y="257" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,262.5 L674.8,264.8 L678.8,260" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="688.0" y="266" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">status</text>
  <text x="729.48" y="266" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(20)</text>
  <rect x="1020.0" y="257" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1037.0" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="1038.0" y="266" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="256.0" y="281" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,286.5 L260.8,288.8 L264.8,284" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="290" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">region</text>
  <text x="315.48" y="290" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">VARCHAR(60)</text>
  <rect x="606.0" y="281" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="290" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="670.0" y="281" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,286.5 L674.8,288.8 L678.8,284" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="688.0" y="290" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">created_at</text>
  <text x="751.8" y="290" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">TIMESTAMP</text>
  <rect x="1020.0" y="281" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="1037.0" y="290" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="1038.0" y="290" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <rect x="256.0" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="273.0" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="274.0" y="314" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">notes_blob</text>
  <text x="337.8" y="314" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">BYTEA</text>
  <rect x="606.0" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="623.0" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="624.0" y="314" fill="#fb923c" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <text x="246" y="350" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTES À GÉNÉRER</text>
  <rect x="246" y="358" width="99" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="254" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M256.5,370.5 L258.8,372.8 L262.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="271" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">SELECT (_get)</text>
  <rect x="353" y="358" width="99" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="361" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M363.5,370.5 L365.8,372.8 L369.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="378" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">UPDATE (_put)</text>
  <rect x="460" y="358" width="104" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="468" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M470.5,370.5 L472.8,372.8 L476.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="485" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">INSERT (_post)</text>
  <rect x="572" y="358" width="114" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="580" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M582.5,370.5 L584.8,372.8 L588.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="597" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">DELETE (_delete)</text>
  <rect x="246" y="394" width="828" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="256" y="404" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="278.0" y="415.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="316" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customers_get</text>
  <rect x="256" y="428" width="808" height="44" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="444" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="280" y="444" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">SELECT CUSTOMER_ID, NAME, EMAIL, STATUS, REGION, CREATED_AT</text>
  <text x="270" y="459" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="280" y="459" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">FROM public.customers</text>
  <text x="256" y="506" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">… puis UPDATE customers_put, INSERT customers_post, DELETE customers_delete — chacune modifiable.</text>
  <line x1="230" y1="518" x2="1090" y2="518" stroke="#1f2937" strokeWidth="1"/>
  <rect x="890" y="528" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="542.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="982" y="528" width="92" height="22" rx="5" fill="url(#cw-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1028.0" y="542.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre, puis table</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">motif LIKE, lu sur le pool</text>
  <line x1="200" y1="97.0" x2="246" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inclure une colonne</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans SELECT et INSERT</text>
  <line x1="200" y1="253.0" x2="256" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Requêtes à générer</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SELECT obligatoire</text>
  <line x1="200" y1="377.0" x2="246" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="1120" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom de base</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;base&gt;_get / _put / _post / _delete</text>
  <line x1="1120" y1="177.0" x2="1074" y2="183" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">CLÉ</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pilote le WHERE de UPDATE / DELETE</text>
  <line x1="1120" y1="247.0" x2="1040.0" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
  <rect x="1120" y="420" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL généré</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un éditeur par requête</text>
  <line x1="1120" y1="437.0" x2="1064" y2="450" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cw-arrow)"/>
</svg>

---

## Étape 1 — Sélectionner un schéma

Le sélecteur de schéma n'apparaît que si le pool en compte plusieurs. PostgreSQL avec un seul `public` et SQLite le sautent ; Oracle (plusieurs schémas) l'exige.

L'assistant récupère les schémas de manière différée — l'ouverture initiale liste juste les noms, le parcours table par table d'un schéma n'a lieu qu'une fois le schéma choisi. Sur un pool Oracle volumineux, ce comportement épargne la dizaine de secondes que prendrait un parcours multi-schémas complet.

---

## Étape 2 — Filtrer les noms de tables

La liste **Table** se remplit une fois un filtre saisi (*Saisir un filtre pour lister les tables*) : un motif SQL `LIKE` (`customers%`, `F00%`, `%` pour toutes) saisi dans le champ **Filtre sur le nom de la table** restreint la liste des tables **côté serveur**, avant que l'introspection des colonnes ne s'exécute pour chacune. Pour des pools qui comptent des milliers de tables, c'est la différence entre un sélecteur réactif et un sélecteur lent.

Le filtre est temporisé — tapez librement ; la requête part environ 350 ms après l'arrêt de la frappe.

---

## Étape 3 — Sélectionner la table

Une fois la table choisie, l'assistant récupère ses colonnes et pré-remplit deux ensembles :

| Ensemble | Règle de pré-remplissage |
|---|---|
| **Incluses** | Toutes les colonnes sont cochées. |
| **Clés** | Toutes les colonnes que la base marque `NOT NULL` sont cochées. |

Ce sont des suppositions — décochez les colonnes à ne pas présenter (BLOB, colonnes d'audit, champs calculés) et confirmez les clés. Le **Nom de base** (*les requêtes deviennent `<base>_get / _put / _post / _delete`*) reprend le nom de la table ; le modifier pour nommer autrement les requêtes. Le titre **Colonnes** compte les colonnes incluses et les clés cochées.

---

## Étape 4 — Cocher colonnes et clés

Chaque ligne de la liste **Colonnes** porte :

| Élément | Rôle |
|---|---|
| **Case Inclure** | Décochée, la colonne disparaît du `SELECT` de `_get` et de l'`INSERT` de `_post`. Le dialogue ne la verra pas. |
| **Nom + type de colonne** | En lecture seule — proviennent de la base en direct. |
| **Case CLÉ** | À côté de chaque colonne. Cochée, cette colonne pilote la clause `WHERE` du `_put` (avec `:NAME_ORIGINAL`) et la clause `WHERE` du `_delete`. |

Une ligne avec **au moins une** clé est requise pour que UPDATE / DELETE produisent quoi que ce soit. L'assistant refuse d'enregistrer sans cela.

---

## Étape 5 — Choisir les requêtes à émettre

Quatre cases à cocher sous **Requêtes à générer** — **SELECT (`_get`)**, **UPDATE (`_put`)**, **INSERT (`_post`)**, **DELETE (`_delete`)**. Cocher celles dont la table a besoin.

| Motif | À cocher |
|---|---|
| Table de référence en lecture seule. | SELECT uniquement. |
| Table CRUD standard. | Les quatre. |
| Ajouts seulement (journal d'audit). | SELECT + INSERT. |
| Table de référence éditée seulement par INSERT puis purge. | SELECT + INSERT + DELETE. |

La requête **SELECT** est toujours émise — au minimum, l'écran a besoin de lire la table.

---

## Étape 6 — Lire l'aperçu, surcharger au besoin

Sous les choix, un éditeur par emplacement CRUD coché affiche le SQL généré, en direct, avec son menu **Jeton**. Chaque aperçu se modifie directement : la modification prime sur la génération automatique tant que la sélection des colonnes ou des clés ne change pas — un changement rétablit la version générée.

### Les quatre formes

```sql
-- _get : SELECT direct sur les colonnes incluses
SELECT COL1, COL2, …
FROM   <schema>.<table>

-- _post : INSERT lié à des placeholders :col
INSERT INTO <schema>.<table> (COL1, COL2, …)
VALUES                       (:COL1, :COL2, …)

-- _put  : UPDATE des colonnes non-clés, WHERE sur la clé avec :NAME_ORIGINAL
UPDATE <schema>.<table>
SET    NON_KEY1 = :NON_KEY1, NON_KEY2 = :NON_KEY2, …
WHERE  KEY1 = :KEY1_ORIGINAL
   AND KEY2 = :KEY2_ORIGINAL

-- _delete : DELETE sur la clé avec :NAME (le dialogue lie les valeurs actuelles de la ligne)
DELETE FROM <schema>.<table>
WHERE  KEY1 = :KEY1
   AND KEY2 = :KEY2
```

### Pourquoi `:NAME_ORIGINAL` sur UPDATE ? \{#why-name_original-on-update\}

L'Enregistrer d'un dialogue envoie deux instantanés de chaque colonne clé : la valeur actuelle (`:key1`) et celle qu'avait la ligne à l'ouverture du dialogue (`:key1_ORIGINAL`). L'UPDATE filtre sur l'*originale* pour que la ligne soit retrouvée même quand l'opérateur a modifié la clé elle-même. L'assistant CRUD applique cette convention ; un `_put` écrit plus tard à la main doit la reproduire.

---

## Étape 7 — Enregistrer

Le bouton **Enregistrer** :

1. Ajoute les requêtes cochées à la liste des requêtes du connecteur.
2. Sauvegarde le fichier connecteur.
3. Déclenche un rechargement à chaud — les nouvelles requêtes sont appelables immédiatement.

Les quatre nouvelles requêtes apparaissent dans l'onglet **Tables** regroupées sous leur nom de base commun, avec les quatre badges d'emplacement CRUD indiquant celles qui ont été émises.

---

## Validation — ce qui bloque l'enregistrement

| Erreur | Cause | Correction |
|---|---|---|
| *Sélectionnez une table.* | Aucune table sélectionnée. | En choisir une. |
| *Nommez la table.* | Le champ **nom de base** est vide (déduit du nom de la table ; à effacer pour le remplacer). | Saisir un nom de base — lettres, chiffres, tirets bas. |
| *Incluez au moins une colonne.* | Toutes les colonnes ont été décochées. | En cocher au moins une. |
| *La requête de lecture (\_get) est obligatoire.* | SELECT a été décoché. | Recochez-le. |
| *Choisissez au moins une colonne clé pour UPDATE / DELETE.* | UPDATE ou DELETE est coché mais aucune colonne n'a CLÉ activée. | Marquer la ou les colonnes clés. |
| *Une requête nommée « X » existe déjà.* | Le nom de base produit un `<base>_get` (ou `_put` / `_post` / `_delete`) en collision avec une requête existante sur ce connecteur. | Choisir un autre nom de base, ou supprimer d'abord l'ancienne requête. |

---

## Résultat

Pour une table `customers` avec `customer_id` comme clé, l'assistant a généré quatre requêtes :

| Nom | Type | Utilisée par |
|---|---|---|
| `customers_get` | `table` (lecture) | La lecture de la grille + formulaire. |
| `customers_put` | `table` (écriture) | L'Enregistrer du dialogue (UPDATE). |
| `customers_post` | `table` (écriture) | L'Enregistrer du dialogue (INSERT). |
| `customers_delete` | `table` (écriture) | L'action Supprimer de la grille. |

Elles atterrissent dans l'onglet **Tables** sur une ligne libellée `customers` avec les quatre badges GET / PUT / POS / DEL tous verts. L'étape suivante est de **construire un écran par-dessus** — couverte dans la prochaine section Écrans.

---

## Quand utiliser l'assistant ou écrire à la main

| Utiliser l'assistant | Écrire à la main (`Ajouter une requête` dans la vue Requêtes) |
|---|---|
| La table existe en base. | La requête est un rapport personnalisé, un agrégat ou un appel de procédure stockée. |
| Vous voulez les quatre formes CRUD standard. | Vous avez besoin d'un `JOIN`, d'un `GROUP BY`, d'une CTE `RECURSIVE`. |
| Vous partez de zéro et les colonnes sont la source de vérité. | Vous voulez une requête qui ne se projette pas 1 pour 1 sur une table. |

L'assistant est le bon outil pour **80 % des tables opérationnelles**. Les 20 % restants — analytique, rapports, jointures multi-tables — passent par [Créer une requête personnalisée](./create-custom.md).

---

## Et ensuite

- [Créer une requête personnalisée](./create-custom.md) — quand l'assistant ne convient pas.
- [Dupliquer une requête ou un connecteur](./clone.md) — partir d'une requête existante plutôt que de zéro.
- [Liaison de paramètres](./parameter-binding.md) — donner aux paramètres `:placeholder` libellés, valeurs par défaut et valeurs liées depuis les écrans.
