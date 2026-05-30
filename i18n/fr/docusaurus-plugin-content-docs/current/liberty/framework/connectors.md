---
title: Connecteurs
description: "Un connecteur définit la manière dont le framework atteint une source de données. Créé et modifié depuis Paramètres → Connecteurs — trois types (SQL, HTTP, API), chacun avec son éditeur dédié. Le schéma est découvert à l'exécution à partir de la requête live ; rien n'est saisi à la main pour le type des colonnes."
keywords: [Liberty Framework, connecteur, SQL, HTTP, API, paramètres, pool, requête nommée, endpoint, découverte de schéma, requête d'écriture, sous licence]
---

# Connecteurs

:::info[Référence détaillée]
Cette page documente la façon dont le moteur de connecteurs découvre le schéma à l'exécution, gère le registre des connecteurs et applique les permissions. Pour des parcours orientés tâche — créer une requête, dupliquer un connecteur, échafauder une séquence ou une recherche — voir [Construire → Requêtes](./build/queries/overview.md) et [Construire → Menus → Transformer un connecteur en application](./build/menus/make-connector-an-app.md).
:::

Un **connecteur** est le pont entre le framework et une source de données — une base de données, une API HTTP ou un service tiers. Les connecteurs sont créés et modifiés depuis **Paramètres → Connecteurs**, une entrée par source. Chaque écran, tableau de bord, graphique, étape de job et outil IA qui a besoin de données désigne un connecteur à utiliser.

Le framework prend en charge trois types de connecteurs :

| Type | Cible | Éditeur |
|---|---|---|
| **SQL** | Une base de données relationnelle via un [pool](./configuration/settings-ui.md). Chaque connecteur regroupe un ensemble de **requêtes nommées** — lecture et écriture. | Paramètres → Connecteurs → sous-onglet *SQL* |
| **HTTP** | Un endpoint REST / GraphQL. Chaque connecteur regroupe un ensemble d'**endpoints nommés** avec méthode + chemin + authentification. | Paramètres → Connecteurs → sous-onglet *HTTP* |
| **API** | Un service distant générique dont les appels sont aiguillés vers SQL ou HTTP en interne (variante de compatibilité). | Paramètres → Connecteurs → sous-onglet *API* |

Le schéma de chaque requête de lecture / réponse d'endpoint est **découvert à l'exécution** — le framework demande à la base ou à l'API "quelles colonnes / quels champs retournes-tu ?" lors du premier appel et met la réponse en cache. Aucun type, longueur ou position de colonne n'est jamais saisi à la main.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="cn-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#cn-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">De l'opérateur à la requête — le cycle de vie d'un connecteur</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · CRÉER</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Paramètres → Connecteurs</text>
  <text x="160" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouveau connecteur</text>
  <text x="160" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">choisir un type</text>

  <rect x="280" y="100" width="200" height="80" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · DÉFINIR</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">détails de connexion</text>
  <text x="380" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">requêtes / endpoints nommés</text>
  <text x="380" y="174" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">paramètres · indices de colonnes</text>

  <rect x="500" y="100" width="200" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · TESTER</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter — 50 premières lignes</text>
  <text x="600" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">le framework découvre le schéma</text>
  <text x="600" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">colonnes affichées en chips</text>

  <rect x="720" y="100" width="220" height="80" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · UTILISER</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">sélectionné depuis un écran,</text>
  <text x="830" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">graphique, dashboard, job</text>
  <text x="830" y="174" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">ou par l'assistant IA</text>

  <line x1="260" y1="140" x2="280" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cn-arrow)"/>
  <line x1="480" y1="140" x2="500" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cn-arrow)"/>
  <line x1="700" y1="140" x2="720" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cn-arrow)"/>

  <rect x="60" y="210" width="880" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTION — une fois enregistré, le framework inscrit le connecteur et recharge les surfaces appelantes</text>
  <text x="76" y="254" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Le schéma est découvert au premier appel ; libellés et formats viennent du dictionnaire</text>
  <text x="76" y="272" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Les permissions sont dérivées du nom du connecteur et du nom de la requête (sql:&lt;c&gt;:&lt;q&gt; / api:&lt;c&gt;:&lt;e&gt;)</text>
</svg>

---

## Le catalogue — Paramètres → Connecteurs

La page liste tous les connecteurs de l'installation. Chaque ligne affiche le type de connecteur, le pool / URL de base, l'état de la connexion (sonde live) et le nombre de requêtes / endpoints déclarés.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Connecteurs</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Application ▾</span>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Type ▾</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouveau connecteur</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Nom</div><div>Type</div><div>Cible</div><div>Requêtes</div><div>Statut</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing</div>
    <div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>sql</span></div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>pool : default</div>
    <div>12</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>connecté</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>crm</div>
    <div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>http</span></div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>https://crm.example.com</div>
    <div>8</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>connecté</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>jdedwards <span style={{marginLeft: '6px', padding: '1px 6px', borderRadius: '999px', fontSize: '9px', fontWeight: 700, background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc'}}>sous licence</span></div>
    <div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>sql</span></div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>pool : jde</div>
    <div>56</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.10)', color: '#f87171'}}>hors ligne</span></div>
  </div>
</div>

Les filtres de la barre d'outils restreignent la liste par *Application* et par *Type*. **+ Nouveau connecteur** ouvre l'éditeur sur une entrée vierge ; cliquer sur une ligne ouvre l'éditeur sur ce connecteur.

| Pastille de statut | Signification |
|---|---|
| **connecté** | La sonde live vers le pool / l'URL de base a réussi dans les 30 dernières secondes. |
| **hors ligne** | La sonde a échoué. Le connecteur reste affiché, mais toute requête sur lui échouera tant que la source ne sera pas revenue. |
| **sous licence** *(badge)* | Marqué avec `Licensed = true`. Ne se charge que si la [clé de licence](./build/secure/license-key.md) le contient. |

---

## L'éditeur de connecteur

Cliquer sur une ligne ouvre un éditeur à trois onglets à droite. Les onglets sont identiques pour chaque type, mais le contenu de chaque onglet s'adapte au *Type* choisi.

| Onglet | Rôle |
|---|---|
| **Connexion** | Comment le framework atteint la source — pool / URL de base, authentification, en-têtes communs. |
| **Requêtes / Endpoints** | Les requêtes nommées (SQL) ou endpoints (HTTP/API) que référencent les appelants. |
| **Permissions** | Synthèse en lecture seule — codes de permission générés par ce connecteur et utilisateurs qui les portent. |

---

## Connecteur SQL

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Connecteurs → billing</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Tester la connexion</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer et recharger</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Connexion</div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Nom</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>billing</span></div>
      <div style={{opacity: 0.75}}>Application</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
      <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '11px', fontWeight: 600}}>SQL ▾</span></div>
      <div style={{opacity: 0.75}}>Pool</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>default ▾</span></div>
      <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Factures, avoirs et workflow de relance.</span></div>
      <div style={{opacity: 0.75}}>Sous licence</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(94,94,94,0.10)', border: '1px solid rgba(255,255,255,0.20)', fontSize: '11px', fontWeight: 600, opacity: 0.7}}>○ Désactivé</span></div>
      <div style={{opacity: 0.75}}>Exposer à l'assistant IA</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● Activé</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff'}}>Requêtes · 12</div>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Ajouter requête</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1.6fr 70px 80px 40px', rowGap: '4px', alignItems: 'center', fontSize: '11px'}}>
      <div>monthly-invoice-counts</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>lecture</span></div><div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.6}}>1 param</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
      <div>invoices-for-period</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>lecture</span></div><div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.6}}>3 params</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
      <div>refresh-totals</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,159,10,0.10)', border: '1px solid rgba(255,159,10,0.40)', color: '#fb923c', fontSize: '10px', fontWeight: 600}}>écriture</span></div><div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.6}}>1 param</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
    </div>
  </div>
</div>

### Champs de connexion

| Champ | Effet |
|---|---|
| **Nom** | Identifiant utilisé partout — l'URL, le code de permission (`sql:<nom>:*`), le nom de l'outil IA. Court, en kebab-case. |
| **Application** | Liste déroulante des applications déclarées. Détermine l'espace de noms du connecteur et l'espace de travail où il apparaît. |
| **Type** | `SQL` ici. Changer le type remodèle le formulaire. |
| **Pool** | Liste déroulante des pools définis sous *Paramètres → Pools*. Le connecteur hérite de l'URL, des identifiants et du dialecte du pool. |
| **Description** | Texte libre. Affichée dans le catalogue, comme infobulle sur les écrans qui choisissent ce connecteur et — c'est crucial — dans la **description de l'outil pour l'assistant IA**. Un résumé en deux phrases dans la langue de l'utilisateur fait une vraie différence. |
| **Sous licence** | Quand *activé*, le connecteur ne se charge que si la [clé de licence](./build/secure/license-key.md) liste son identifiant. Utilisé par Nomana-IT pour verrouiller les connecteurs éditeur ; les connecteurs client le laissent désactivé. |
| **Exposer à l'assistant IA** | Quand *activé*, les requêtes de lecture du connecteur deviennent des outils que l'assistant IA peut choisir. Les requêtes d'écriture sont exclues par défaut. Voir [Assistant IA](./ai-assistant.md). |

Le bouton **Tester la connexion** (en haut à droite) interroge le pool avec un `SELECT 1` et indique succès / échec en ligne — utile pour confirmer que le pool est joignable avant d'ajouter des requêtes.

### Éditeur de requête

Cliquer sur *+ Ajouter requête* ou sur une ligne existante ouvre l'éditeur de requête :

| Champ | Effet |
|---|---|
| **Nom** | Identifiant de la requête — apparaît dans l'URL (`/api/sql/billing/<nom>`), le code de permission (`sql:billing:<nom>`) et le nom de l'outil IA. |
| **Libellé** | Libellé d'affichage humain — apparaît dans le sélecteur de l'éditeur de menus, dans le sélecteur de l'éditeur d'écrans, etc. |
| **Opération** | `Lecture` / `Écriture`. Les requêtes *Écriture* reçoivent le suffixe `:write` sur leur code de permission. |
| **SQL** | Corps de la requête. Éditeur Monaco avec coloration SQL, autocomplétion sensible au schéma (noms de colonnes depuis le pool) et mise en évidence des paramètres (placeholders `:nom`). |
| **Surcharges de dialecte** | Variantes optionnelles par dialecte (`oracle`, `postgresql`, `sqlite`) pour les cas où le `SELECT` canonique ne se traduit pas. Le framework choisit la bonne en fonction du dialecte du pool. |
| **Description** | Résumé en deux phrases. Affiché dans les sélecteurs de l'éditeur d'écrans et dans la description de l'outil pour l'assistant IA. |
| **Paramètres** | Sous-table — voir [Liaison des paramètres](./build/queries/parameter-binding.md) pour chaque champ. |
| **Indices de colonnes** | Sous-table optionnelle. Chaque ligne lie une colonne du résultat à une entrée du dictionnaire : *Colonne* (liste déroulante des colonnes découvertes par le bouton *Tester*) + *Dictionnaire* (liste déroulante des entrées du dictionnaire). Détermine libellés, formats, énumérations, recherches. Les colonnes sans indice retombent sur le nom de la colonne comme libellé. |

Le bouton **▶ Tester** en haut de l'éditeur exécute la requête sur le pool live avec des valeurs de remplissage pour les paramètres et affiche les 50 premières lignes. Le premier test réussi remplit la liste déroulante *Indices de colonnes* avec les colonnes découvertes ; les tests suivants la rafraîchissent.

Le framework utilise le schéma découvert pour :

- Construire les colonnes de grille sur les écrans.
- Valider les indices de colonnes (un indice qui pointe sur une colonne disparue est signalé en rouge).
- Convertir les valeurs des paramètres au bon type avant la liaison.
- Alimenter le schéma d'outil de l'assistant IA avec les bons types de champs.

---

## Connecteur HTTP

Le formulaire se remodèle quand *Type* vaut `HTTP`. La liste déroulante du pool disparaît ; un bloc *URL de base* + *Authentification* prend sa place.

| Champ | Effet |
|---|---|
| **URL de base** | Origine de l'API (par exemple `https://crm.example.com`). Les endpoints ci-dessous y sont concaténés. |
| **Authentification** | `Aucune` / `Basic` / `Bearer` / `OAuth2`. Chaque choix ouvre un sous-formulaire. *Basic* demande utilisateur + mot de passe chiffré au repos ; *Bearer* prend un jeton chiffré au repos ; *OAuth2* demande l'endpoint de jeton, le client id, le client secret chiffré au repos et la liste de scopes. |
| **En-têtes** | En-têtes communs appliqués à chaque endpoint — par exemple un `User-Agent` statique ou un `X-Tenant`. |
| **Timeout par défaut** | Secondes avant qu'un appel ne soit interrompu. Par défaut 30. |

La sous-table des endpoints remplace les requêtes SQL :

| Champ | Effet |
|---|---|
| **Nom** | Identifiant de l'endpoint — apparaît dans l'URL (`/api/http/<connecteur>/<nom>`), le code de permission (`api:<connecteur>:<nom>`) et le nom de l'outil IA. |
| **Libellé** / **Description** | Identiques aux requêtes SQL. |
| **Méthode** | `GET` / `POST` / `PUT` / `PATCH` / `DELETE`. |
| **Chemin** | Chemin concaténé à l'URL de base. Accepte des placeholders `:nom` liés aux paramètres. |
| **Modèle de corps** | Pour les méthodes non `GET`, un modèle JSON. Accepte une substitution `${nom}` depuis les paramètres. |
| **Paramètres** | Même structure que pour SQL — voir [Liaison des paramètres](./build/queries/parameter-binding.md). |
| **Forme de réponse** | Auto-détectée quand le bouton *Tester* est utilisé ; l'opérateur peut affiner la forme découverte (renommer des clés, regrouper des champs imbriqués) pour l'aligner sur ce qu'attendent les consommateurs. |

Le bouton **▶ Tester** lance l'appel en live avec l'authentification configurée et les valeurs par défaut des paramètres ; le corps de la réponse s'affiche formaté, avec la forme découverte présentée en chips en dessous.

---

## Connecteur API

`API` est un type hybride conservé pour la compatibilité avec les installations qui aiguillent certains appels vers SQL et d'autres vers HTTP sous un même nom de connecteur. L'éditeur propose à la fois les sous-tables *Requêtes* et *Endpoints* ; le champ *Opération* sur chaque entrée choisit le moteur sous-jacent.

Sur une nouvelle installation, on choisira presque toujours `SQL` ou `HTTP` directement. `API` est le chemin quand il faut consolider plusieurs connecteurs hérités sous un même chapeau.

---

## Découverte de schéma et indices de colonnes

Une requête de lecture n'a pas de liste de colonnes déclarée à la main. Au premier appel (ou quand l'opérateur clique sur *Tester*), le framework exécute la requête, regarde les descriptions de colonnes du curseur et les met en cache :

| Information découverte | Ce que le framework enregistre |
|---|---|
| **Nom de colonne** | Utilisé comme libellé par défaut si aucun indice de dictionnaire ne s'applique. |
| **Type base de données** | Pilote la conversion de type des valeurs de paramètres sur les appels suivants. |
| **Nullable / non nullable** | Utilisé par les écrans pour décider si la colonne reçoit un astérisque "obligatoire". |
| **Longueur / précision** | Affiché comme contrainte sur l'éditeur de champ (longueur max sur une chaîne, nombre max de chiffres sur un décimal). |

La sous-table **Indices de colonnes** est l'endroit où surcharger les valeurs par défaut. Un indice associe une colonne découverte à une entrée de [dictionnaire](./dictionary.md) — c'est ainsi que la colonne reçoit un libellé localisé, une règle boolean / enum / recherche, un format numérique, etc.

Il n'est pas nécessaire de déclarer un indice pour chaque colonne ; les colonnes sans indice s'affichent avec le nom brut de la base et le widget par défaut associé à leur type.

---

## Permissions

Chaque connecteur génère un **code de permission par requête / endpoint** :

| Modèle de code | Accordé pour |
|---|---|
| `sql:<connecteur>:<requête>` | Exécuter la requête de lecture. |
| `sql:<connecteur>:<requête>:write` | Exécuter la requête d'écriture. |
| `api:<connecteur>:<endpoint>` | Appeler l'endpoint HTTP. |

Les codes apparaissent sur l'onglet *Permissions* de l'éditeur de connecteur et dans le **sélecteur de permissions** de [Paramètres → Rôles](./build/secure/roles-and-permissions.md). Les wildcards `sql:billing:*` et `api:crm:*` sont pris en charge.

Le connecteur lui-même n'est pas verrouillé — ce qui est verrouillé, c'est chaque appel. Un utilisateur sans permission ne voit aucune requête ; un utilisateur avec `sql:billing:*` voit chaque lecture et écriture du connecteur billing.

---

## Comportement de rechargement à chaud

Un *Enregistrer et recharger* sur l'éditeur de connecteur reconstruit le registre des connecteurs sur place — chaque consommateur (écrans, graphiques, tableaux de bord, outils IA) prend en compte le changement à son prochain rendu. Les requêtes déjà en vol se terminent sur la version précédente ; aucune interruption n'est nécessaire. Voir [Rechargement à chaud](./configuration/hot-reload.md) pour le contrat complet.

---

## Conseils et bonnes pratiques

- **Toujours cliquer sur *Tester* avant *Enregistrer*.** Une requête que la base refuse à l'exécution est la cause la plus fréquente d'écrans cassés. Le bouton *Tester* la détecte tôt.
- **Rédiger une bonne *Description*.** Elle apparaît dans l'assistant IA, dans l'éditeur de menus, dans l'éditeur d'écrans — deux phrases dans la langue de l'utilisateur sont rentabilisées plusieurs fois.
- **Préfixer les requêtes par l'entité** — `invoices-list`, `invoices-by-status`, `invoice-detail`. Rend le catalogue auto-documenté.
- **Séparer les chemins lecture et écriture.** Ne pas écrire `INSERT INTO ... RETURNING ...` comme requête de lecture ; le modèle de permission du framework verrouille les écritures séparément pour une bonne raison.
- **Utiliser les indices de colonnes avec parcimonie.** Une colonne dont le nom de base suffit n'a pas besoin d'indice — définir des indices uniquement quand le dictionnaire apporte une valeur ajoutée (libellé localisé, format, recherche).
- **Laisser *Sous licence* désactivé sur les connecteurs client.** Réserver le badge aux connecteurs livrés par l'éditeur qui exigent une clé.

---

## Sous le capot

Les définitions de connecteurs sont enregistrées dans `liberty-apps/config/connectors.toml` (ou `liberty-next/config/connectors.toml` quand `LIBERTY_APPS_DIR` n'est pas défini). Les opérateurs **ne modifient pas ce fichier à la main** en exploitation normale ; l'éditeur de connecteurs est l'interface de référence. L'onglet *TOML brut* de [Paramètres → Connecteurs](./configuration/settings-ui.md) est l'échappatoire pour les rares cas où l'éditeur ne couvre pas un champ.

Pour les scripts CI et les orchestrateurs externes, la même surface est joignable via REST sur `/admin/config/connectors/*` — voir [Référence API REST](./rest-api.md#admin-config).

---

## Pour aller plus loin

- [Dictionnaire](./dictionary.md) — métadonnées par colonne : libellés, formats, énumérations, recherches.
- [Liaison des paramètres](./build/queries/parameter-binding.md) — paramètres déclarés, valeurs par défaut, filtres en cascade.
- [Écrans](./build/screens/overview.md) — transformer un connecteur en grille + dialogue d'édition.
- [Graphiques](./charts.md) — emballer une requête en visualisation.
- [Chiffrement et secrets](./configuration/encryption-secrets.md) — la bascule du cadenas sur les mots de passe / jetons.
