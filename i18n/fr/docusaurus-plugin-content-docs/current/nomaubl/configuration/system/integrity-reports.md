---
title: Rapports d'intégrité
description: "Les rapports d'intégrité sont des contrôles SQL en lecture seule qui listent ce qui manque ou diverge dans NomaUBL par rapport à un système source — travaux d'impression jamais intégrés, montants différents — affichés dans Rapports → Intégrité, avec une action facultative sur les lignes sélectionnées."
keywords: [NomaUBL, rapports d'intégrité, contrôles d'intégrité, SQL, rapprochement, anomalies, factures manquantes, connecteur de base de données, BI Publisher, fetch-single, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapports d'intégrité

Le modèle système **Integrity reports** regroupe des **contrôles SQL** qui comparent NomaUBL à un système source et listent ce qui **manque ou diverge** : travaux d'impression jamais intégrés, écritures comptables dont les montants diffèrent des factures électroniques… Chaque contrôle est un `SELECT` exécuté en lecture seule sur un connecteur de base de données, et **chaque ligne renvoyée est une anomalie**. Les résultats s'affichent dans l'onglet **Intégrité** de la page [Rapports](../../application/reports.md#integrite), où un contrôle peut aussi proposer une **action** sur les lignes sélectionnées.

Il s'ouvre dans **Configuration → Système → Integrity reports**. Sur une installation qui ne dispose pas encore du modèle, le bouton **Add integrity reports** le crée sans redémarrer le service. Le modèle est livré vide : rien n'apparaît dans la page Rapports tant qu'aucun contrôle n'est défini.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="60" width="200" height="160" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="120" y="88" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Contrôle</text>
  <text x="120" y="112" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">missing-pdf</text>
  <text x="120" y="132" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">SELECT … NOT IN F564230</text>
  <text x="120" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">connecteur · colonnes clés</text>
  <text x="120" y="178" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">action facultative</text>

  <line x1="222" y1="140" x2="290" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ir-arrow)"/>

  <rect x="294" y="60" width="200" height="160" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="394" y="88" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Lecture seule</text>
  <text x="394" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">période → variables de date</text>
  <text x="394" y="132" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT / WITH uniquement</text>
  <text x="394" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">plafond de lignes · délai</text>

  <line x1="496" y1="140" x2="564" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ir-arrow)"/>

  <rect x="568" y="60" width="190" height="160" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="663" y="88" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapports → Intégrité</text>
  <text x="663" y="114" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">une ligne = une anomalie</text>
  <text x="663" y="132" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">recherche · filtres · export</text>
  <text x="663" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cocher les lignes à corriger</text>

  <line x1="760" y1="140" x2="828" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ir-arrow)"/>

  <rect x="832" y="60" width="148" height="160" rx="12" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.45)" strokeWidth="1.2"/>
  <text x="906" y="88" fill="#4ade80" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Action</text>
  <text x="906" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Intégrer les travaux BIP</text>
  <text x="906" y="132" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">fetch-single … bip</text>
  <text x="906" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">contrôle relancé</text>

  <path d="M906,222 C906,270 394,270 394,224" fill="none" stroke="#4ade80" strokeWidth="1.2" strokeDasharray="4 4" markerEnd="url(#ir-arrow)"/>
  <text x="650" y="262" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">les lignes intégrées sortent du résultat suivant</text>
</svg>

---

## Paramètres généraux

| Champ | Défaut | Description |
|---|---|---|
| **Max rows** | `5000` | Nombre maximal de lignes par exécution. Au-delà, le résultat est tronqué et signalé *résultat tronqué au plafond de lignes* dans la page Rapports. |
| **Timeout (s)** | `120` | Délai maximal d'exécution de la requête, en secondes. |

---

## Contrôles

Chaque contrôle est un groupe repliable — un clic sur son titre l'ouvre, **×** le supprime, **+ Add check** en ajoute un.

| Champ | Description |
|---|---|
| **Name** | Identifiant affiché dans la page Rapports (par ex. `missing-pdf`). À garder stable. |
| **Description** | Une ligne qui dit ce que le contrôle détecte (par ex. *Travaux d'impression PDF non intégrés*). |
| **Connector** | Le [connecteur de base de données](../database-connectors/nomaubl.md) sur lequel s'exécute le `SELECT` — la base JD Edwards, la base NomaUBL ou tout autre connecteur déclaré sur la plateforme. |
| **Key columns** | Facultatif. Colonnes du résultat, séparées par des virgules, qui identifient l'enregistrement visé par une action (par ex. `JCPID, JCVERS, JCJOBNBR`, ou numéro + type de document + société). |
| **SQL (SELECT only)** | La requête. Une seule instruction `SELECT` (ou `WITH`) ; toute autre instruction est refusée avant d'atteindre la base. La connexion est ouverte en lecture seule. |
| **Action** | Ce que la page Rapports peut faire des lignes sélectionnées : aucune action, ou **Integrate BIP jobs**. |

### Variables de date

Le SQL peut reprendre la période choisie dans la page Rapports. Les variables sont remplacées avant l'exécution ; sans période, l'intervalle va du `1900-01-01` à aujourd'hui.

| Variable | Format | Exemple |
|---|---|---|
| `{from}` / `{to}` | `yyyy-MM-dd` | `2026-09-01` |
| `{fromJde}` / `{toJde}` | Date julienne JDE (`CYYDDD`) | `126244` |
| `{fromDMY}` / `{toDMY}` | `dd-MM-yyyy` | `01-09-2026` |

Le champ SQL propose la forme habituelle d'un contrôle — les enregistrements source de la période qui n'ont jamais atteint le journal NomaUBL (`F564230`) :

```sql
SELECT … FROM … WHERE JCSTDTIM > TO_DATE('{fromDMY}','dd-MM-yyyy')
  AND … NOT IN (SELECT TRIM(FEWDS1) FROM PRODDTA.F564230 WHERE FEUPMJ > {fromJde})
```

### Action *Integrate BIP jobs*

:::info[Spécifique à JDE]
Cette action extrait des travaux JD Edwards BI Publisher. Les contrôles sans action fonctionnent avec tout système source.
:::

Avec **Action** = **Integrate BIP jobs**, les lignes sélectionnées sont intégrées exactement comme par la commande `fetch-single <template> bip <job>` (voir [Ligne de commande](../../management/command-line.md)), via le lot [Fetch Invoices](./fetch-invoices.md). Cinq champs indiquent les colonnes du résultat à utiliser :

| Champ | Description |
|---|---|
| **Job column** | Colonne du résultat qui porte le numéro de travail JDE (`RJJOBNBR`). Obligatoire. |
| **Template column** | Colonne du résultat qui porte le nom du modèle de document. À laisser vide pour utiliser le modèle fixe. |
| **Fixed template** | Modèle de document utilisé quand la colonne modèle est vide ou absente. |
| **Host column** | Colonne du résultat qui porte le serveur d'exécution JDE — uniquement sur les installations JD Edwards à plusieurs serveurs. Facultatif. |
| **Processing type** | `AUTO` *(défaut)*, `SINGLE`, `BURST`, `UBL` ou `BOTH`. |

---

## Dans la page Rapports \{#rapports-integrite\}

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{fontSize: '12px', opacity: 0.7}}>Contrôle</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontFamily: 'monospace'}}>missing-pdf ▾</span>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 30 derniers jours</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600, border: '1px solid #4a9eff'}}>▶ Exécuter</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>Voir le SQL</span>
  </div>
  <div style={{fontSize: '12px', opacity: 0.7, margin: '12px 0 8px'}}>Connecteur : <strong>db-jde</strong> · Colonnes clés : <strong>JCPID, JCVERS, JCJOBNBR</strong> · Action : <strong>fetch-single invoices bip {'{JCJOBNBR}'}</strong></div>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px'}}>
    <span style={{fontSize: '12px', fontWeight: 700, color: '#f87171'}}>3 anomalie(s)</span>
    <span style={{flex: 1}} />
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Intégrer la sélection (2)</span>
  </div>
  <div style={{fontFamily: 'monospace', fontSize: '11px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px', opacity: 0.6, borderBottom: '1px solid rgba(255,255,255,0.08)'}}><span /><span>JCPID</span><span>JCVERS</span><span>JCJOBNBR</span><span>JCSTDTIM</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px', background: 'rgba(74,158,255,0.06)'}}><span>☑</span><span>R42565</span><span>ZJDE0001</span><span>1353306</span><span>2026-10-08 06:12</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px', background: 'rgba(74,158,255,0.06)'}}><span>☑</span><span>R42565</span><span>ZJDE0001</span><span>1353412</span><span>2026-10-09 06:10</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px'}}><span>☐</span><span>R42565</span><span>ZJDE0002</span><span>1353520</span><span>2026-10-10 06:11</span></div>
  </div>
</div>

1. **Choisir un contrôle** et une **période** (30 derniers jours par défaut), puis **Exécuter**. **Voir le SQL** affiche la requête du contrôle.
2. La ligne d'en-tête rappelle le connecteur, les colonnes clés et l'action configurée. Le résultat indique **Aucune anomalie** ou *N anomalie(s)* ; chaque ligne est une anomalie, dans la grille standard — recherche, filtres, choix des colonnes et export.
3. Quand le contrôle porte une action, cocher les lignes puis cliquer sur **Intégrer la sélection (N)**. Une confirmation rappelle que les travaux sont extraits et traités comme lors d'un traitement normal — validation, stockage et envoi selon le paramétrage du modèle.
4. Après l'action, le contrôle est relancé : les lignes intégrées sortent du résultat, et un bandeau de synthèse affiche *N intégré(s), N en échec sur N*, avec le nom de chaque travail en échec.

---

## API

| Endpoint | Rôle |
|---|---|
| `GET /api/reports/integrity` | Liste les contrôles configurés (nom, description, connecteur, colonnes clés, SQL). |
| `POST /api/reports/integrity/run` | Exécute un contrôle — corps `{ "name", "dateFrom", "dateTo" }` — et renvoie les colonnes et les lignes du résultat. |
| `POST /api/reports/integrity/action` | Exécute l'action du contrôle sur les lignes sélectionnées — corps `{ "name", "jobs": [...], "templates": [...], "hosts": [...] }` — et renvoie le résultat par travail et la synthèse. |

Les schémas complets se trouvent dans la [référence API](/nomaubl/api-reference).

---

## Conseils & bonnes pratiques

- **Une question par contrôle.** Un contrôle qui répond à une seule question (*travaux non intégrés*, *montants différents*) donne un résultat exploitable ligne par ligne.
- **Renvoyer les colonnes clés.** Même sans action, elles permettent de remonter facilement de chaque anomalie à l'enregistrement source.
- **Limiter la requête à la période.** Les variables de date la cantonnent à la fenêtre choisie et la gardent bien en deçà du délai maximal.
- **Pointer l'action sur le numéro de travail.** La colonne travail doit contenir le numéro de travail JDE ; les lignes qui n'en ont pas sont ignorées par *Intégrer la sélection*.
